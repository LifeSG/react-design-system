"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("react-dom"),n=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),a=require("@lifesg/react-icons/external"),o=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),g=require("@lifesg/react-icons/chevron-left"),p=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),y=require("@lifesg/react-icons/star-fill"),v=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),$=require("@lifesg/react-icons/eye"),w=require("@lifesg/react-icons/eye-slash"),j=require("@lifesg/react-icons/exclamation-triangle"),C=require("@lifesg/react-icons/square"),S=require("@lifesg/react-icons/square-tick-fill"),k=require("@lifesg/react-icons/tick"),O=require("@lifesg/react-icons/caret-right"),D=require("@lifesg/react-icons/minus-square-fill"),E=require("@lifesg/react-icons/circle"),T=require("@lifesg/react-icons/circle-dot"),F=require("@lifesg/react-icons/bin"),_=require("@lifesg/react-icons/pencil"),M=require("@lifesg/react-icons/drag-handle"),I=require("@lifesg/react-icons/minus"),A=require("@lifesg/react-icons/plus"),B=require("@lifesg/react-icons/menu"),R=require("@lifesg/react-icons/chevron-2-left"),P=require("@lifesg/react-icons/chevron-2-right"),z=require("@lifesg/react-icons/chevron-line-left"),L=require("@lifesg/react-icons/chevron-line-right"),N=require("@lifesg/react-icons/ellipsis-horizontal"),W=require("@lifesg/react-icons/star-half");function H(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function Y(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var V=Y(t),U=H(r),K=H(i);const q=V.default.createContext(!1);function X(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function G(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))}function Z(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Q(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function J(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ee=function(e,t){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ee(e,t)};var te=function(){return te=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},te.apply(this,arguments)};var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="object"==typeof re&&re&&re.Object===Object&&re,ae="object"==typeof self&&self&&self.Object===Object&&self,oe=ie||ae||Function("return this")(),se=oe,le=function(){return se.Date.now()},ce=/\s/;var de=function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t},ue=/^\s+/;var fe=function(e){return e?e.slice(0,de(e)+1).replace(ue,""):e},he=oe.Symbol,ge=he,pe=Object.prototype,me=pe.hasOwnProperty,be=pe.toString,ye=ge?ge.toStringTag:void 0;var ve=function(e){var t=me.call(e,ye),r=e[ye];try{e[ye]=void 0;var n=!0}catch(e){}var i=be.call(e);return n&&(t?e[ye]=r:delete e[ye]),i},xe=Object.prototype.toString;var $e=ve,we=function(e){return xe.call(e)},je=he?he.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":je&&je in Object(e)?$e(e):we(e)},Se=function(e){return null!=e&&"object"==typeof e};var ke=fe,Oe=ne,De=function(e){return"symbol"==typeof e||Se(e)&&"[object Symbol]"==Ce(e)},Ee=/^[-+]0x[0-9a-f]+$/i,Te=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,_e=parseInt;var Me=ne,Ie=le,Ae=function(e){if("number"==typeof e)return e;if(De(e))return NaN;if(Oe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Oe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ke(e);var r=Te.test(e);return r||Fe.test(e)?_e(e.slice(2),r?2:8):Ee.test(e)?NaN:+e},Be=Math.max,Re=Math.min;var Pe=function(e,t,r){var n,i,a,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,a=i;return n=i=void 0,c=t,o=e.apply(a,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=a}function p(){var e=Ie();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?Re(r,a-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,o)}function b(){var e=Ie(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(p,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),o}return t=Ae(t)||0,Me(r)&&(d=!!r.leading,a=(u="maxWait"in r)?Be(Ae(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?o:m(Ie())},b},ze=Pe,Le=ne;var Ne=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Le(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),ze(e,t,{leading:n,maxWait:t,trailing:i})},We=function(e,t,r,n){switch(t){case"debounce":return Pe(e,r,n);case"throttle":return Ne(e,r,n);default:return e}},He=function(e){return"function"==typeof e},Ye=function(){return"undefined"==typeof window},Ve=function(e){return e instanceof Element||e instanceof HTMLDocument},Ue=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&He(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function n(n){var i=e.call(this,n)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,r=e.observerOptions;if(!Ye()){t&&t.current&&(i.targetRef.current=t.current);var n=i.getElement();n&&(i.observableElement&&i.observableElement===n||(i.observableElement=n,i.resizeObserver.observe(n,r)))}},i.getElement=function(){var e=i.props,t=e.querySelector,n=e.targetDomEl;if(Ye())return null;if(t)return document.querySelector(t);if(n&&Ve(n))return n;if(i.targetRef&&Ve(i.targetRef.current))return i.targetRef.current;var a=r.findDOMNode(i);if(!a)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},i.createResizeHandler=function(e){var t=i.props,r=t.handleWidth,n=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(n||o){var l=Ue(s,i.setState.bind(i),n,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,n=t.height;!i.skipOnMount&&!Ye()&&l({width:r,height:n}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,r=e.render,n=e.children;return He(r)?"renderProp":He(n)?"childFunction":t.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var a=n.skipOnMount,o=n.refreshMode,s=n.refreshRate,l=void 0===s?1e3:s,c=n.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=a,i.targetRef=t.createRef(),i.observableElement=null,Ye()||(i.resizeHandler=We(i.createResizeHandler,o,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(n,e),n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){Ye()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,a=r.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return V.createElement(o,null)}}}(t.PureComponent);var Ke=Ye()?t.useEffect:t.useLayoutEffect;function qe(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,i=e.refreshMode,a=e.refreshRate,o=void 0===a?1e3:a,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,g=e.onResize,p=t.useRef(n),m=t.useRef(null),b=null!=f?f:m,y=t.useRef(),v=t.useState({width:void 0,height:void 0}),x=v[0],$=v[1];return Ke((function(){if(!Ye()){var e=Ue(g,$,c,u);y.current=We((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!Ye()&&e({width:n,height:i}),p.current=!1}))}),i,o,s);var t=new window.ResizeObserver(y.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[i,o,s,c,u,g,h,b.current]),te({ref:b},x)}var Xe=Object.defineProperty,Ge={};((e,t)=>{for(var r in t)Xe(e,r,{get:t[r],enumerable:!0})})(Ge,{assign:()=>Et,colors:()=>kt,createStringInterpolator:()=>wt,skipAnimation:()=>Ot,to:()=>jt,willAdvance:()=>Dt});var Ze=ht(),Qe=e=>ct(e,Ze),Je=ht();Qe.write=e=>ct(e,Je);var et=ht();Qe.onStart=e=>ct(e,et);var tt=ht();Qe.onFrame=e=>ct(e,tt);var rt=ht();Qe.onFinish=e=>ct(e,rt);var nt=[];Qe.setTimeout=(e,t)=>{const r=Qe.now()+t,n=()=>{const e=nt.findIndex((e=>e.cancel==n));~e&&nt.splice(e,1),st-=~e?1:0},i={time:r,handler:e,cancel:n};return nt.splice(it(r),0,i),st+=1,dt(),i};var it=e=>~(~nt.findIndex((t=>t.time>e))||~nt.length);Qe.cancel=e=>{et.delete(e),tt.delete(e),rt.delete(e),Ze.delete(e),Je.delete(e)},Qe.sync=e=>{lt=!0,Qe.batchedUpdates(e),lt=!1},Qe.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Qe.onStart(r)}return n.handler=e,n.cancel=()=>{et.delete(r),t=null},n};var at="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qe.use=e=>at=e,Qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qe.batchedUpdates=e=>e(),Qe.catch=console.error,Qe.frameLoop="always",Qe.advance=()=>{"demand"!==Qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ft()};var ot=-1,st=0,lt=!1;function ct(e,t){lt?(t.delete(e),e(0)):(t.add(e),dt())}function dt(){ot<0&&(ot=0,"demand"!==Qe.frameLoop&&at(ut))}function ut(){~ot&&(at(ut),Qe.batchedUpdates(ft))}function ft(){const e=ot;ot=Qe.now();const t=it(ot);t&&(gt(nt.splice(0,t),(e=>e.handler())),st-=t),st?(et.flush(),Ze.flush(e?Math.min(64,ot-e):16.667),tt.flush(),Je.flush(),rt.flush()):ot=-1}function ht(){let e=new Set,t=e;return{add(r){st+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(st-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,st-=t.size,gt(t,(t=>t(r)&&e.add(t))),st+=e.size,t=e)}}}function gt(e,t){e.forEach((e=>{try{t(e)}catch(e){Qe.catch(e)}}))}function pt(){}var mt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function bt(e,t){if(mt.arr(e)){if(!mt.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var yt=(e,t)=>e.forEach(t);function vt(e,t,r){if(mt.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var xt=e=>mt.und(e)?[]:mt.arr(e)?e:[e];function $t(e,t){if(e.size){const r=Array.from(e);e.clear(),yt(r,t)}}var wt,jt,Ct=(e,...t)=>$t(e,(e=>e(...t))),St=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),kt=null,Ot=!1,Dt=pt,Et=e=>{e.to&&(jt=e.to),e.now&&(Qe.now=e.now),void 0!==e.colors&&(kt=e.colors),null!=e.skipAnimation&&(Ot=e.skipAnimation),e.createStringInterpolator&&(wt=e.createStringInterpolator),e.requestAnimationFrame&&Qe.use(e.requestAnimationFrame),e.batchedUpdates&&(Qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Dt=e.willAdvance),e.frameLoop&&(Qe.frameLoop=e.frameLoop)},Tt=new Set,Ft=[],_t=[],Mt=0,It={get idle(){return!Tt.size&&!Ft.length},start(e){Mt>e.priority?(Tt.add(e),Qe.onStart(At)):(Bt(e),Qe(Pt))},advance:Pt,sort(e){if(Mt)Qe.onFrame((()=>It.sort(e)));else{const t=Ft.indexOf(e);~t&&(Ft.splice(t,1),Rt(e))}},clear(){Ft=[],Tt.clear()}};function At(){Tt.forEach(Bt),Tt.clear(),Qe(Pt)}function Bt(e){Ft.includes(e)||Rt(e)}function Rt(e){Ft.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ft,(t=>t.priority>e.priority)),0,e)}function Pt(e){const t=_t;for(let r=0;r<Ft.length;r++){const n=Ft[r];Mt=n.priority,n.idle||(Dt(n),n.advance(e),n.idle||t.push(n))}return Mt=0,(_t=Ft).length=0,(Ft=t).length>0}var zt="[-+]?\\d*\\.?\\d+",Lt=zt+"%";function Nt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Wt=new RegExp("rgb"+Nt(zt,zt,zt)),Ht=new RegExp("rgba"+Nt(zt,zt,zt,zt)),Yt=new RegExp("hsl"+Nt(zt,Lt,Lt)),Vt=new RegExp("hsla"+Nt(zt,Lt,Lt,zt)),Ut=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{6})$/,Xt=/^#([0-9a-fA-F]{8})$/;function Gt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Zt(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=Gt(i,n,e+1/3),o=Gt(i,n,e),s=Gt(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Qt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jt(e){return(parseFloat(e)%360+360)%360/360}function er(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function tr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function rr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=qt.exec(e))?parseInt(t[1]+"ff",16)>>>0:kt&&void 0!==kt[e]?kt[e]:(t=Wt.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|255)>>>0:(t=Ht.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|er(t[4]))>>>0:(t=Ut.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Xt.exec(e))?parseInt(t[1],16)>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Yt.exec(e))?(255|Zt(Jt(t[1]),tr(t[2]),tr(t[3])))>>>0:(t=Vt.exec(e))?(Zt(Jt(t[1]),tr(t[2]),tr(t[3]))|er(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var nr=(e,t,r)=>{if(mt.fun(e))return e;if(mt.arr(e))return nr({range:e,output:t,extrapolate:r});if(mt.str(e.output[0]))return wt(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=a(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var ir=1.70158,ar=1.525*ir,or=ir+1,sr=2*Math.PI/3,lr=2*Math.PI/4.5,cr=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},dr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>or*e*e*e-ir*e*e,easeOutBack:e=>1+or*Math.pow(e-1,3)+ir*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ar)/2:(Math.pow(2*e-2,2)*((ar+1)*(2*e-2)+ar)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*sr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*sr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*lr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*lr)/2+1,easeInBounce:e=>1-cr(1-e),easeOutBounce:cr,easeInOutBounce:e=>e<.5?(1-cr(1-2*e))/2:(1+cr(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},ur=Symbol.for("FluidValue.get"),fr=Symbol.for("FluidValue.observers"),hr=e=>Boolean(e&&e[ur]),gr=e=>e&&e[ur]?e[ur]():e,pr=e=>e[fr]||null;function mr(e,t){const r=e[fr];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var br=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");yr(this,e)}},yr=(e,t)=>wr(e,ur,t);function vr(e,t){if(e[ur]){let r=e[fr];r||wr(e,fr,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function xr(e,t){const r=e[fr];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[fr]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var $r,wr=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),jr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Cr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Sr=new RegExp(`(${jr.source})(%|[a-z]+)`,"i"),kr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Or=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Dr=e=>{const[t,r]=Er(e);if(!t||St())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Or.test(r)?Dr(r):r||e},Er=e=>{const t=Or.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Tr=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Fr=e=>{$r||($r=kt?new RegExp(`(${Object.keys(kt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>gr(e).replace(Or,Dr).replace(Cr,rr).replace($r,rr))),r=t.map((e=>e.match(jr).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>nr({...e,output:t})));return e=>{const r=!Sr.test(t[0])&&t.find((e=>Sr.test(e)))?.replace(jr,"");let n=0;return t[0].replace(jr,(()=>`${i[n++](e)}${r||""}`)).replace(kr,Tr)}},_r="react-spring: ",Mr=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${_r}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ir=Mr(console.warn);var Ar=Mr(console.warn);function Br(e){return mt.str(e)&&("#"==e[0]||/\d/.test(e)||!St()&&Or.test(e)||e in(kt||{}))}var Rr=St()?t.useEffect:t.useLayoutEffect,Pr=()=>{const e=t.useRef(!1);return Rr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function zr(){const e=t.useState()[1],r=Pr();return()=>{r.current&&e(Math.random())}}var Lr=e=>t.useEffect(e,Nr),Nr=[];function Wr(e){const r=t.useRef();return t.useEffect((()=>{r.current=e})),r.current}var Hr=Symbol.for("Animated:node"),Yr=e=>e&&e[Hr],Vr=(e,t)=>{return r=e,n=Hr,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ur=e=>e&&e[Hr]&&e[Hr].getPayload(),Kr=class{constructor(){Vr(this,this)}getPayload(){return this.payload||[]}},qr=class extends Kr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new qr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Xr=class extends qr{constructor(e){super(0),this._string=null,this._toString=nr({output:[e,e]})}static create(e){return new Xr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=nr({output:[this.getValue(),e]})),this._value=0,super.reset()}},Gr={dependencies:null},Zr=class extends Kr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return vt(this.source,((r,n)=>{var i;(i=r)&&i[Hr]===i?t[n]=r.getValue(e):hr(r)?t[n]=gr(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&yt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return vt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Gr.dependencies&&hr(e)&&Gr.dependencies.add(e);const t=Ur(e);t&&yt(t,(e=>this.add(e)))}},Qr=class extends Zr{constructor(e){super(e)}static create(e){return new Qr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Jr)),!0)}};function Jr(e){return(Br(e)?Xr:qr).create(e)}function en(e){const t=Yr(e);return t?t.constructor:mt.arr(e)?Qr:Br(e)?Xr:qr}var tn=(e,r)=>{const n=!mt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,a)=>{const o=t.useRef(null),s=n&&t.useCallback((e=>{o.current=function(e,t){e&&(mt.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[l,c]=function(e,t){const r=new Set;Gr.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Zr(e),Gr.dependencies=null,[e,r]}(i,r),d=zr(),u=()=>{const e=o.current;if(n&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,l.getValue(!0)))&&d()},f=new rn(u,c),h=t.useRef();Rr((()=>(h.current=f,yt(c,(e=>vr(e,f))),()=>{h.current&&(yt(h.current.deps,(e=>xr(e,h.current))),Qe.cancel(h.current.update))}))),t.useEffect(u,[]),Lr((()=>()=>{const e=h.current;yt(e.deps,(t=>xr(t,e)))}));const g=r.getComponentProps(l.getValue());return V.createElement(e,{...g,ref:s})}))},rn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qe.write(this.update)}};var nn=Symbol.for("AnimatedComponent"),an=e=>mt.str(e)?e:e&&mt.str(e.displayName)?e.displayName:mt.fun(e)&&e.name||null;function on(e,...t){return mt.fun(e)?e(...t):e}var sn=(e,t)=>!0===e||!!(t&&e&&(mt.fun(e)?e(t):xt(e).includes(t))),ln=(e,t)=>mt.obj(e)?t&&e[t]:e,cn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,dn=e=>e,un=(e,t=dn)=>{let r=fn;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);mt.und(r)||(n[i]=r)}return n},fn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],hn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function gn(e){const t=function(e){const t={};let r=0;if(vt(e,((e,n)=>{hn[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return vt(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function pn(e){return e=gr(e),mt.arr(e)?e.map(pn):Br(e)?Ge.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mn(e){return mt.fun(e)||mt.arr(e)&&mt.obj(e[0])}var bn={tension:170,friction:26,mass:1,damping:1,easing:dr.linear,clamp:!1},yn=class{constructor(){this.velocity=0,Object.assign(this,bn)}};function vn(e,t){if(mt.und(t.decay)){const r=!mt.und(t.tension)||!mt.und(t.friction);!r&&mt.und(t.frequency)&&mt.und(t.damping)&&mt.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var xn=[],$n=class{constructor(){this.changed=!1,this.values=xn,this.toValues=null,this.fromValues=xn,this.config=new yn,this.immediate=!1}};function wn(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,d=sn(r.cancel??n?.cancel,t);if(d)h();else{mt.und(r.pause)||(i.paused=sn(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||sn(e,t)),l=on(r.delay||0,t),e?(i.resumeQueue.add(f),a.pause()):(a.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-Qe.now()}function f(){l>0&&!Ge.skipAnimation?(i.delayed=!0,c=Qe.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{a.start({...r,callId:e,cancel:d},o)}catch(e){s(e)}}}))}var jn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?kn(e.get()):t.every((e=>e.noop))?Cn(e.get()):Sn(e.get(),t.every((e=>e.finished))),Cn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Sn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),kn=e=>({value:e,cancelled:!0,finished:!1});function On(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=un(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(r.cancelId||0)&&kn(n)||i!==r.asyncId&&Sn(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const a=new En,o=new Tn;return(async()=>{if(Ge.skipAnimation)throw Dn(r),o.result=Sn(n,!1),u(o),o;h(a);const s=mt.obj(e)?{...e}:{...t,to:e};s.parentId=i,vt(c,((e,t)=>{mt.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Ge.skipAnimation)return Dn(r),Sn(n,!1);try{let t;t=mt.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(d),f]),p=Sn(n.get(),!0,!1)}catch(e){if(e instanceof En)p=e.result;else{if(!(e instanceof Tn))throw e;p=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return mt.fun(o)&&Qe.batchedUpdates((()=>{o(p,n,n.item)})),p})():l}function Dn(e,t){$t(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var En=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Tn=class extends Error{constructor(){super("SkipAnimationSignal")}},Fn=e=>e instanceof Mn,_n=1,Mn=class extends br{constructor(){super(...arguments),this.id=_n++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Yr(this);return e&&e.getValue()}to(...e){return Ge.to(this,e)}interpolate(...e){return Ir(`${_r}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ge.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){mr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||It.sort(this),mr(this,{type:"priority",parent:this,priority:e})}},In=Symbol.for("SpringPhase"),An=e=>(1&e[In])>0,Bn=e=>(2&e[In])>0,Rn=e=>(4&e[In])>0,Pn=(e,t)=>t?e[In]|=3:e[In]&=-3,zn=(e,t)=>t?e[In]|=4:e[In]&=-5,Ln=class extends Mn{constructor(e,t){if(super(),this.animation=new $n,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mt.und(e)||!mt.und(t)){const r=mt.obj(e)?{...e}:{...t,from:e};mt.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Bn(this)||this._state.asyncTo)||Rn(this)}get goal(){return gr(this.animation.to)}get velocity(){const e=Yr(this);return e instanceof qr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return An(this)}get isAnimating(){return Bn(this)}get isPaused(){return Rn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=Ur(n.to);!o&&hr(n.to)&&(i=xt(gr(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Xr?1:o?o[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=mt.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const f=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(mt.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||f/10,n=a.clamp?0:a.bounce,l=!mt.und(n),h=r==c?s.v0>0:r<c;let g,p=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(g=Math.abs(o)>t,g||(d=Math.abs(c-u)<=f,!d));++e){l&&(p=u==c||u>c==h,p&&(o=-o*n,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*m,u+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(c-r),o=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=Yr(this),l=s.getValue();if(t){const e=gr(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Bn(this)){const{to:e,config:t}=this.animation;Qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return mt.und(e)?(r=this.queue||[],this.queue=[]):r=[mt.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>jn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Dn(this._state,e&&this._lastCallId),Qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=mt.obj(r)?r[t]:r,(null==r||mn(r))&&(r=void 0),n=mt.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return An(this)||(e.reverse&&([r,n]=[n,r]),n=gr(n),mt.und(n)?Yr(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,un(e,((e,t)=>/^on/.test(t)?ln(e,r):e))),Kn(this,e,"onProps"),qn(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return wn(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{Rn(this)||(zn(this,!0),Ct(a.pauseQueue),qn(this,"onPause",Sn(this,Nn(this,this.animation.to)),this))},resume:()=>{Rn(this)&&(zn(this,!1),Bn(this)&&this._resume(),Ct(a.resumeQueue),qn(this,"onResume",Sn(this,Nn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Wn(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(kn(this));const n=!mt.und(e.to),i=!mt.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(kn(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!mt.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!bt(u,c);f&&(s.from=u),u=gr(u);const h=!bt(d,l);h&&this._focus(d);const g=mn(t.to),{config:p}=s,{decay:m,velocity:b}=p;(n||i)&&(p.velocity=0),t.config&&!g&&function(e,t,r){r&&(vn(r={...r},t),t={...r,...t}),vn(e,t),Object.assign(e,t);for(const t in bn)null==e[t]&&(e[t]=bn[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;mt.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(p,on(t.config,a),t.config!==o.config?on(o.config,a):void 0);let y=Yr(this);if(!y||mt.und(d))return r(Sn(this,!0));const v=mt.und(t.reset)?i&&!t.default:!mt.und(u)&&sn(t.reset,a),x=v?u:this.get(),$=pn(d),w=mt.num($)||mt.arr($)||Br($),j=!g&&(!w||sn(o.immediate||t.immediate,a));if(h){const e=en(d);if(e!==y.constructor){if(!j)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set($)}}const C=y.constructor;let S=hr(d),k=!1;if(!S){const e=v||!An(this)&&f;(h||e)&&(k=bt(pn(x),$),S=!k),(bt(s.immediate,j)||j)&&bt(p.decay,m)&&bt(p.velocity,b)||(S=!0)}if(k&&Bn(this)&&(s.changed&&!v?S=!0:S||this._stop(l)),!g&&((S||hr(l))&&(s.values=y.getPayload(),s.toValues=hr(d)?null:C==Xr?[1]:xt($)),s.immediate!=j&&(s.immediate=j,j||v||this._set(l)),S)){const{onRest:e}=s;yt(Un,(e=>Kn(this,t,e)));const n=Sn(this,Nn(this,l));Ct(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Qe.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?on(o.onRest,n):s.onStart?.(n,this)}))}v&&this._set(x),g?r(On(t.to,t,this._state,this)):S?this._start():Bn(this)&&!h?this._pendingCalls.add(r):r(Cn(x))}_focus(e){const t=this.animation;e!==t.to&&(pr(this)&&this._detach(),t.to=e,pr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;hr(t)&&(vr(t,this),Fn(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;hr(e)&&xr(e,this)}_set(e,t=!0){const r=gr(e);if(!mt.und(r)){const e=Yr(this);if(!e||!bt(r,e.getValue())){const n=en(r);e&&e.constructor==n?e.setValue(r):Vr(this,n.create(r)),e&&Qe.batchedUpdates((()=>{this._onChange(r,t)}))}}return Yr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qn(this,"onStart",Sn(this,Nn(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),on(this.animation.onChange,e,this)),on(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Yr(this).reset(gr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Bn(this)||(Pn(this,!0),Rn(this)||this._resume())}_resume(){Ge.skipAnimation?this.finish():It.start(this)}_stop(e,t){if(Bn(this)){Pn(this,!1);const r=this.animation;yt(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),mr(this,{type:"idle",parent:this});const n=t?kn(this.get()):Sn(this.get(),Nn(this,e??r.to));Ct(this._pendingCalls,n),r.changed&&(r.changed=!1,qn(this,"onRest",n,this))}}};function Nn(e,t){const r=pn(t);return bt(pn(e.get()),r)}function Wn(e,t=e.loop,r=e.to){const n=on(t);if(n){const i=!0!==n&&gn(n),a=(i||e).reverse,o=!i||i.reset;return Hn({...e,loop:t,default:!1,pause:void 0,to:!a||mn(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function Hn(e){const{to:t,from:r}=e=gn(e),n=new Set;return mt.obj(t)&&Vn(t,n),mt.obj(r)&&Vn(r,n),e.keys=n.size?Array.from(n):null,e}function Yn(e){const t=Hn(e);return mt.und(t.default)&&(t.default=un(t)),t}function Vn(e,t){vt(e,((e,r)=>null!=e&&t.add(r)))}var Un=["onStart","onRest","onChange","onPause","onResume"];function Kn(e,t,r){e.animation[r]=t[r]!==cn(t,r)?ln(t[r],e.key):void 0}function qn(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Xn=["onStart","onChange","onRest"],Gn=1,Zn=class{constructor(e,t){this.id=Gn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];mt.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Hn(e)),this}start(e){let{queue:t}=this;return e?t=xt(e).map(Hn):this.queue=[],this._flush?this._flush(this,t):(ii(this,t),Qn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;yt(xt(t),(t=>r[t].stop(!!e)))}else Dn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mt.und(e))this.start({pause:!0});else{const t=this.springs;yt(xt(e),(e=>t[e].pause()))}return this}resume(e){if(mt.und(e))this.start({pause:!1});else{const t=this.springs;yt(xt(e),(e=>t[e].resume()))}return this}each(e){vt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,$t(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&$t(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,$t(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qe.onFrame(this._onFrame)}};function Qn(e,t){return Promise.all(t.map((t=>Jn(e,t)))).then((t=>jn(e,t)))}async function Jn(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=mt.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const d=mt.arr(i)||mt.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):yt(Xn,(r=>{const n=t[r];if(mt.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ct(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===cn(t,"cancel");(d||h&&u.asyncId)&&f.push(wn(++e._lastAsyncId,{props:t,state:u,actions:{pause:pt,resume:pt,start(t,r){h?(Dn(u,e._lastAsyncId),r(kn(e))):(t.onRest=s,r(On(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=jn(e,await Promise.all(f));if(o&&g.finished&&(!r||!g.noop)){const r=Wn(t,o,i);if(r)return ii(e,[r]),Jn(e,r,!0)}return l&&Qe.batchedUpdates((()=>l(g,e,e.item))),g}function ei(e,t){const r={...e.springs};return t&&yt(xt(t),(e=>{mt.und(e.keys)&&(e=Hn(e)),mt.obj(e.to)||(e={...e,to:void 0}),ni(r,e,(e=>ri(e)))})),ti(e,r),r}function ti(e,t){vt(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,vr(t,e))}))}function ri(e,t){const r=new Ln;return r.key=e,t&&vr(r,t),r}function ni(e,t,r){t.keys&&yt(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ii(e,t){yt(t,(t=>{ni(e.springs,t,(t=>ri(t,e)))}))}var ai,oi,si=({children:e,...r})=>{const n=t.useContext(li),i=r.pause||!!n.pause,a=r.immediate||!!n.immediate;r=function(e,r){const[n]=t.useState((()=>({inputs:r,result:e()}))),i=t.useRef(),a=i.current;let o=a;if(o){const t=Boolean(r&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,o.inputs));t||(o={inputs:r,result:e()})}else o=n;return t.useEffect((()=>{i.current=o,a==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:o}=li;return V.createElement(o,{value:r},e)},li=(ai=si,oi={},Object.assign(ai,V.createContext(oi)),ai.Provider._context=ai,ai.Consumer._context=ai,ai);si.Provider=li.Provider,si.Consumer=li.Consumer;var ci=()=>{const e=[],t=function(t){Ar(`${_r}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return yt(e,((e,i)=>{if(mt.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return yt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return yt(e,(e=>e.resume(...arguments))),this},t.set=function(t){yt(e,((e,r)=>{const n=mt.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return yt(e,((e,n)=>{if(mt.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return yt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return yt(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return mt.fun(e)?e(r,t):e};return t._getProps=r,t};function di(e,r){const n=mt.fun(e),[[i],a]=function(e,r,n){const i=mt.fun(r)&&r;i&&!n&&(n=[]);const a=t.useMemo((()=>i||3==arguments.length?ci():void 0),[]),o=t.useRef(0),s=zr(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=ei(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Qn(e,t):new Promise((n=>{ti(e,r),l.queue.push((()=>{n(Qn(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Wr(e)||0;function f(e,t){for(let n=e;n<t;n++){const e=c.current[n]||(c.current[n]=new Zn(null,l.flush)),t=i?i(n,e):r[n];t&&(d[n]=Yn(t))}}t.useMemo((()=>{yt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),n);const h=c.current.map(((e,t)=>ei(e,d[t]))),g=t.useContext(si),p=Wr(g),m=g!==p&&function(e){for(const t in e)return!0;return!1}(g);Rr((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],yt(e,(e=>e()))),yt(c.current,((e,t)=>{a?.add(e),m&&e.start({default:g});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Lr((()=>()=>{yt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return a?[b,a]:b}(1,n?e:[e],n?r||[]:r);return n||2==arguments.length?[i,a]:i}var ui=class extends Mn{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=nr(...t);const r=this._get(),n=en(r);Vr(this,n.create(r))}advance(e){const t=this._get();bt(t,this.get())||(Yr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&hi(this._active)&&gi(this)}_get(){const e=mt.arr(this.source)?this.source.map(gr):xt(gr(this.source));return this.calc(...e)}_start(){this.idle&&!hi(this._active)&&(this.idle=!1,yt(Ur(this),(e=>{e.done=!1})),Ge.skipAnimation?(Qe.batchedUpdates((()=>this.advance())),gi(this)):It.start(this))}_attach(){let e=1;yt(xt(this.source),(t=>{hr(t)&&vr(t,this),Fn(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){yt(xt(this.source),(e=>{hr(e)&&xr(e,this)})),this._active.clear(),gi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=xt(this.source).reduce(((e,t)=>Math.max(e,(Fn(t)?t.priority:0)+1)),0))}};function fi(e){return!1!==e.idle}function hi(e){return!e.size||Array.from(e).every(fi)}function gi(e){e.idle||(e.idle=!0,yt(Ur(e),(e=>{e.done=!0})),mr(e,{type:"idle",parent:e}))}Ge.assign({createStringInterpolator:Fr,to:(e,t)=>new ui(e,t)});var pi=/^--/;function mi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||pi.test(e)||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}var bi={};var yi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vi=["Webkit","Ms","Moz","O"];yi=Object.keys(yi).reduce(((e,t)=>(vi.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),yi);var xi=/^(matrix|translate|scale|rotate|skew)/,$i=/^(translate)/,wi=/^(rotate|skew)/,ji=(e,t)=>mt.num(e)&&0!==e?e+t:e,Ci=(e,t)=>mt.arr(e)?e.every((e=>Ci(e,t))):mt.num(e)?e===t:parseFloat(e)===t,Si=class extends Zr{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>ji(e,"px"))).join(",")})`,Ci(e,0)]))),vt(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(xi.test(t)){if(delete n[t],mt.und(e))return;const r=$i.test(t)?"px":wi.test(t)?"deg":"";i.push(xt(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${ji(i,r)})`,Ci(i,0)]:e=>[`${t}(${e.map((e=>ji(e,r))).join(",")})`,Ci(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new ki(i,a)),super(n)}},ki=class extends br{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return yt(this.inputs,((r,n)=>{const i=gr(r[0]),[a,o]=this.transforms[n](mt.arr(i)?i:r.map(gr));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&yt(this.inputs,(e=>yt(e,(e=>hr(e)&&vr(e,this)))))}observerRemoved(e){0==e&&yt(this.inputs,(e=>yt(e,(e=>hr(e)&&xr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),mr(this,e)}};Ge.assign({batchedUpdates:r.unstable_batchedUpdates,createStringInterpolator:Fr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Oi=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Zr(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=an(e)||"Anonymous";return(e=mt.str(e)?a[e]||(a[e]=tn(e,i)):e[nn]||(e[nn]=tn(e,i))).displayName=`Animated(${t})`,e};return vt(e,((t,r)=>{mt.arr(e)&&(r=an(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:bi[t]||(bi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=mi(t,n[t]);pi.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Si(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Di=Oi.animated,Ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ti(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fi=Array.isArray,_i="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,Mi=_i,Ii="object"==typeof self&&self&&self.Object===Object&&self,Ai=Mi||Ii||Function("return this")(),Bi=Ai.Symbol,Ri=Bi,Pi=Object.prototype,zi=Pi.hasOwnProperty,Li=Pi.toString,Ni=Ri?Ri.toStringTag:void 0;var Wi=function(e){var t=zi.call(e,Ni),r=e[Ni];try{e[Ni]=void 0;var n=!0}catch(e){}var i=Li.call(e);return n&&(t?e[Ni]=r:delete e[Ni]),i},Hi=Object.prototype.toString;var Yi=Wi,Vi=function(e){return Hi.call(e)},Ui=Bi?Bi.toStringTag:void 0;var Ki=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Yi(e):Vi(e)};var qi=function(e){return null!=e&&"object"==typeof e},Xi=Ki,Gi=qi;var Zi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Xi(e)},Qi=Fi,Ji=Zi,ea=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ta=/^\w*$/;var ra=function(e,t){if(Qi(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ji(e))||(ta.test(e)||!ea.test(e)||null!=t&&e in Object(t))};var na=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ia=Ki,aa=na;var oa,sa=function(e){if(!aa(e))return!1;var t=ia(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},la=Ai["__core-js_shared__"],ca=(oa=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||""))?"Symbol(src)_1."+oa:"";var da=function(e){return!!ca&&ca in e},ua=Function.prototype.toString;var fa=function(e){if(null!=e){try{return ua.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ha=sa,ga=da,pa=na,ma=fa,ba=/^\[object .+?Constructor\]$/,ya=Function.prototype,va=Object.prototype,xa=ya.toString,$a=va.hasOwnProperty,wa=RegExp("^"+xa.call($a).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ja=function(e,t){return null==e?void 0:e[t]},Ca=function(e){return!(!pa(e)||ga(e))&&(ha(e)?wa:ba).test(ma(e))},Sa=ja;var ka=function(e,t){var r=Sa(e,t);return Ca(r)?r:void 0},Oa=ka(Object,"create"),Da=Oa;var Ea=function(){this.__data__=Da?Da(null):{},this.size=0};var Ta=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fa=Oa,_a=Object.prototype.hasOwnProperty;var Ma=function(e){var t=this.__data__;if(Fa){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return _a.call(t,e)?t[e]:void 0},Ia=Oa,Aa=Object.prototype.hasOwnProperty;var Ba=function(e){var t=this.__data__;return Ia?void 0!==t[e]:Aa.call(t,e)},Ra=Oa;var Pa=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ra&&void 0===t?"__lodash_hash_undefined__":t,this},za=Ea,La=Ta,Na=Ma,Wa=Ba,Ha=Pa;function Ya(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ya.prototype.clear=za,Ya.prototype.delete=La,Ya.prototype.get=Na,Ya.prototype.has=Wa,Ya.prototype.set=Ha;var Va=Ya;var Ua=function(){this.__data__=[],this.size=0};var Ka=function(e,t){return e===t||e!=e&&t!=t},qa=Ka;var Xa=function(e,t){for(var r=e.length;r--;)if(qa(e[r][0],t))return r;return-1},Ga=Xa,Za=Array.prototype.splice;var Qa=function(e){var t=this.__data__,r=Ga(t,e);return!(r<0)&&(r==t.length-1?t.pop():Za.call(t,r,1),--this.size,!0)},Ja=Xa;var eo=function(e){var t=this.__data__,r=Ja(t,e);return r<0?void 0:t[r][1]},to=Xa;var ro=function(e){return to(this.__data__,e)>-1},no=Xa;var io=function(e,t){var r=this.__data__,n=no(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},ao=Ua,oo=Qa,so=eo,lo=ro,co=io;function uo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}uo.prototype.clear=ao,uo.prototype.delete=oo,uo.prototype.get=so,uo.prototype.has=lo,uo.prototype.set=co;var fo=uo,ho=ka(Ai,"Map"),go=Va,po=fo,mo=ho;var bo=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var yo=function(e,t){var r=e.__data__;return bo(t)?r["string"==typeof t?"string":"hash"]:r.map},vo=yo;var xo=function(e){var t=vo(this,e).delete(e);return this.size-=t?1:0,t},$o=yo;var wo=function(e){return $o(this,e).get(e)},jo=yo;var Co=function(e){return jo(this,e).has(e)},So=yo;var ko=function(e,t){var r=So(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Oo=function(){this.size=0,this.__data__={hash:new go,map:new(mo||po),string:new go}},Do=xo,Eo=wo,To=Co,Fo=ko;function _o(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_o.prototype.clear=Oo,_o.prototype.delete=Do,_o.prototype.get=Eo,_o.prototype.has=To,_o.prototype.set=Fo;var Mo=_o,Io=Mo;function Ao(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Ao.Cache||Io),r}Ao.Cache=Io;var Bo=Ao;var Ro=function(e){var t=Bo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},Po=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zo=/\\(\\)?/g,Lo=Ro((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Po,(function(e,r,n,i){t.push(n?i.replace(zo,"$1"):r||e)})),t}));var No=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Wo=Fi,Ho=Zi,Yo=Bi?Bi.prototype:void 0,Vo=Yo?Yo.toString:void 0;var Uo=function e(t){if("string"==typeof t)return t;if(Wo(t))return No(t,e)+"";if(Ho(t))return Vo?Vo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Ko=Uo;var qo=function(e){return null==e?"":Ko(e)},Xo=Fi,Go=ra,Zo=Lo,Qo=qo;var Jo=function(e,t){return Xo(e)?e:Go(e,t)?[e]:Zo(Qo(e))},es=Zi;var ts=function(e){if("string"==typeof e||es(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},rs=Jo,ns=ts;var is=function(e,t){for(var r=0,n=(t=rs(t,e)).length;null!=e&&r<n;)e=e[ns(t[r++])];return r&&r==n?e:void 0},as=is;var os=function(e,t,r){var n=null==e?void 0:as(e,t);return void 0===n?r:n},ss=Ti(os);const ls=(e,t,r)=>ss(r,t)||ss(e,t),cs=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)},ds={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},us=e=>t=>{var r;const n=t.theme,i=cs(ds,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?ls(i,e,n.overrides.motion):i[e]},fs={"duration-150":us("duration-150"),"duration-250":us("duration-250"),"duration-350":us("duration-350"),"duration-500":us("duration-500"),"duration-800":us("duration-800"),"duration-1000":us("duration-1000"),"ease-default":us("ease-default"),"ease-standard":us("ease-standard"),"ease-entrance":us("ease-entrance"),"ease-exit":us("ease-exit")},hs={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},gs=e=>t=>{var r;const n=t.theme,i=cs(hs,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?ls(i,e,n.overrides.primitiveColour):i[e]},ps={"brand-10":gs("brand-10"),"brand-20":gs("brand-20"),"brand-30":gs("brand-30"),"brand-40":gs("brand-40"),"brand-50":gs("brand-50"),"brand-60":gs("brand-60"),"brand-70":gs("brand-70"),"brand-80":gs("brand-80"),"brand-90":gs("brand-90"),"brand-95":gs("brand-95"),"brand-100":gs("brand-100"),"primary-10":gs("primary-10"),"primary-20":gs("primary-20"),"primary-30":gs("primary-30"),"primary-40":gs("primary-40"),"primary-50":gs("primary-50"),"primary-60":gs("primary-60"),"primary-70":gs("primary-70"),"primary-80":gs("primary-80"),"primary-90":gs("primary-90"),"primary-95":gs("primary-95"),"primary-100":gs("primary-100"),"secondary-10":gs("secondary-10"),"secondary-20":gs("secondary-20"),"secondary-30":gs("secondary-30"),"secondary-40":gs("secondary-40"),"secondary-50":gs("secondary-50"),"secondary-60":gs("secondary-60"),"secondary-70":gs("secondary-70"),"secondary-80":gs("secondary-80"),"secondary-90":gs("secondary-90"),"secondary-95":gs("secondary-95"),"secondary-100":gs("secondary-100"),"neutral-10":gs("neutral-10"),"neutral-20":gs("neutral-20"),"neutral-30":gs("neutral-30"),"neutral-40":gs("neutral-40"),"neutral-50":gs("neutral-50"),"neutral-60":gs("neutral-60"),"neutral-70":gs("neutral-70"),"neutral-80":gs("neutral-80"),"neutral-90":gs("neutral-90"),"neutral-95":gs("neutral-95"),"neutral-100":gs("neutral-100"),"success-10":gs("success-10"),"success-20":gs("success-20"),"success-30":gs("success-30"),"success-40":gs("success-40"),"success-50":gs("success-50"),"success-60":gs("success-60"),"success-70":gs("success-70"),"success-80":gs("success-80"),"success-90":gs("success-90"),"success-95":gs("success-95"),"success-100":gs("success-100"),"warning-10":gs("warning-10"),"warning-20":gs("warning-20"),"warning-30":gs("warning-30"),"warning-40":gs("warning-40"),"warning-50":gs("warning-50"),"warning-60":gs("warning-60"),"warning-70":gs("warning-70"),"warning-80":gs("warning-80"),"warning-90":gs("warning-90"),"warning-95":gs("warning-95"),"warning-100":gs("warning-100"),"error-10":gs("error-10"),"error-20":gs("error-20"),"error-30":gs("error-30"),"error-40":gs("error-40"),"error-50":gs("error-50"),"error-60":gs("error-60"),"error-70":gs("error-70"),"error-80":gs("error-80"),"error-90":gs("error-90"),"error-95":gs("error-95"),"error-100":gs("error-100"),"info-10":gs("info-10"),"info-20":gs("info-20"),"info-30":gs("info-30"),"info-40":gs("info-40"),"info-50":gs("info-50"),"info-60":gs("info-60"),"info-70":gs("info-70"),"info-80":gs("info-80"),"info-90":gs("info-90"),"info-95":gs("info-95"),"info-100":gs("info-100"),white:gs("white"),black:gs("black"),"primary-inverse":gs("primary-inverse")},ms={text:gs("neutral-20"),"text-subtle":gs("neutral-30"),"text-subtler":gs("neutral-50"),"text-subtlest":gs("neutral-60"),"text-primary":gs("primary-50"),"text-hover":gs("primary-40"),"text-selected":gs("primary-50"),"text-selected-hover":gs("primary-40"),"text-disabled":gs("neutral-50"),"text-disabled-subtle":gs("neutral-60"),"text-disabled-subtlest":gs("neutral-80"),"text-selected-disabled":gs("neutral-20"),"text-success":gs("success-40"),"text-warning":gs("warning-40"),"text-error":gs("error-40"),"text-info":gs("info-40"),"text-inverse":gs("white"),icon:gs("neutral-50"),"icon-subtle":gs("neutral-60"),"icon-strongest":gs("neutral-20"),"icon-primary":gs("primary-50"),"icon-primary-subtle":gs("primary-60"),"icon-primary-subtlest":gs("primary-70"),"icon-hover":gs("primary-40"),"icon-selected":gs("primary-50"),"icon-selected-hover":gs("primary-40"),"icon-disabled":gs("neutral-50"),"icon-disabled-subtle":gs("neutral-60"),"icon-selected-disabled":gs("neutral-60"),"icon-success":gs("success-50"),"icon-warning":gs("warning-60"),"icon-error":gs("error-50"),"icon-error-strong":gs("error-40"),"icon-info":gs("info-50"),"icon-inverse":gs("white"),"icon-primary-inverse":gs("primary-inverse"),border:gs("neutral-90"),"border-strong":gs("neutral-70"),"border-stronger":gs("neutral-50"),"border-primary":gs("primary-50"),"border-primary-subtle":gs("primary-60"),"border-hover":gs("primary-90"),"border-hover-strong":gs("primary-60"),"border-selected":gs("primary-50"),"border-selected-subtle":gs("primary-70"),"border-selected-subtlest":gs("primary-90"),"border-selected-hover":gs("primary-40"),"border-focus":gs("primary-60"),"border-focus-strong":gs("primary-50"),"border-disabled":gs("neutral-90"),"border-selected-disabled":gs("neutral-70"),"border-success":gs("success-60"),"border-warning":gs("warning-60"),"border-error":gs("error-60"),"border-error-focus":gs("error-60"),"border-error-focus-strong":gs("error-40"),"border-error-strong":gs("error-40"),"border-info":gs("info-60"),bg:gs("white"),"bg-strong":gs("neutral-100"),"bg-stronger":gs("neutral-95"),"bg-strongest":gs("neutral-90"),"bg-hover":gs("primary-95"),"bg-hover-strong":gs("primary-90"),"bg-hover-subtle":gs("primary-100"),"bg-hover-neutral":gs("neutral-100"),"bg-hover-neutral-strong":gs("neutral-90"),"bg-selected":gs("primary-95"),"bg-selected-hover":gs("primary-90"),"bg-selected-strong":gs("primary-90"),"bg-selected-stronger":gs("primary-70"),"bg-selected-strongest":gs("primary-50"),"bg-selected-strongest-hover":gs("primary-40"),"bg-disabled":gs("neutral-95"),"bg-selected-disabled":gs("neutral-95"),"bg-selected-stronger-disabled":gs("neutral-70"),"bg-success":gs("success-100"),"bg-success-hover":gs("success-95"),"bg-success-strong":gs("success-50"),"bg-success-strong-hover":gs("success-40"),"bg-warning":gs("warning-100"),"bg-warning-hover":gs("warning-95"),"bg-warning-strong":gs("warning-50"),"bg-warning-strong-hover":gs("warning-40"),"bg-info":gs("info-100"),"bg-info-hover":gs("info-95"),"bg-info-strong":gs("info-50"),"bg-info-strong-hover":gs("info-40"),"bg-error":gs("error-100"),"bg-error-hover":gs("error-95"),"bg-error-strong":gs("error-50"),"bg-error-strong-hover":gs("error-40"),"bg-inverse":gs("neutral-20"),"bg-inverse-subtle":gs("neutral-30"),"bg-inverse-subtler":gs("neutral-50"),"bg-inverse-subtlest":gs("neutral-60"),"bg-inverse-hover":gs("neutral-40"),"bg-primary":gs("primary-50"),"bg-primary-subtle":gs("primary-60"),"bg-primary-subtler":gs("primary-95"),"bg-primary-subtlest":gs("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":gs("primary-40"),"bg-primary-subtlest-hover":gs("primary-90"),"bg-primary-subtlest-selected":gs("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:gs("primary-50"),"hyperlink-hover":gs("primary-40"),"hyperlink-visited":gs("primary-40"),"hyperlink-inverse":gs("primary-inverse"),"focus-ring":gs("black"),"focus-ring-inverse":gs("white")},bs={collections:{lifesg:ms,bookingsg:ms,rbs:ms,mylegacy:ms,ccube:ms,pa:ms},defaultValue:"lifesg"},ys=e=>t=>{var r;const n=t.theme,i=cs(bs,null==n?void 0:n.colourScheme),a=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?ls(i,e,n.overrides.semanticColour):i[e];return"function"==typeof a?a(t):a},vs={text:ys("text"),"text-subtle":ys("text-subtle"),"text-subtler":ys("text-subtler"),"text-subtlest":ys("text-subtlest"),"text-primary":ys("text-primary"),"text-hover":ys("text-hover"),"text-selected":ys("text-selected"),"text-selected-hover":ys("text-selected-hover"),"text-disabled":ys("text-disabled"),"text-disabled-subtle":ys("text-disabled-subtle"),"text-disabled-subtlest":ys("text-disabled-subtlest"),"text-selected-disabled":ys("text-selected-disabled"),"text-success":ys("text-success"),"text-warning":ys("text-warning"),"text-error":ys("text-error"),"text-info":ys("text-info"),"text-inverse":ys("text-inverse"),icon:ys("icon"),"icon-subtle":ys("icon-subtle"),"icon-strongest":ys("icon-strongest"),"icon-primary":ys("icon-primary"),"icon-primary-subtle":ys("icon-primary-subtle"),"icon-primary-subtlest":ys("icon-primary-subtlest"),"icon-hover":ys("icon-hover"),"icon-selected":ys("icon-selected"),"icon-selected-hover":ys("icon-selected-hover"),"icon-disabled":ys("icon-disabled"),"icon-disabled-subtle":ys("icon-disabled-subtle"),"icon-selected-disabled":ys("icon-selected-disabled"),"icon-success":ys("icon-success"),"icon-warning":ys("icon-warning"),"icon-error":ys("icon-error"),"icon-error-strong":ys("icon-error-strong"),"icon-info":ys("icon-info"),"icon-inverse":ys("icon-inverse"),"icon-primary-inverse":ys("icon-primary-inverse"),border:ys("border"),"border-strong":ys("border-strong"),"border-stronger":ys("border-stronger"),"border-primary":ys("border-primary"),"border-primary-subtle":ys("border-primary-subtle"),"border-hover":ys("border-hover"),"border-hover-strong":ys("border-hover-strong"),"border-selected":ys("border-selected"),"border-selected-subtle":ys("border-selected-subtle"),"border-selected-subtlest":ys("border-selected-subtlest"),"border-selected-hover":ys("border-selected-hover"),"border-focus":ys("border-focus"),"border-focus-strong":ys("border-focus-strong"),"border-disabled":ys("border-disabled"),"border-selected-disabled":ys("border-selected-disabled"),"border-success":ys("border-success"),"border-warning":ys("border-warning"),"border-error":ys("border-error"),"border-error-focus":ys("border-error-focus"),"border-error-focus-strong":ys("border-error-focus-strong"),"border-error-strong":ys("border-error-strong"),"border-info":ys("border-info"),bg:ys("bg"),"bg-strong":ys("bg-strong"),"bg-stronger":ys("bg-stronger"),"bg-strongest":ys("bg-strongest"),"bg-hover":ys("bg-hover"),"bg-hover-strong":ys("bg-hover-strong"),"bg-hover-subtle":ys("bg-hover-subtle"),"bg-hover-neutral":ys("bg-hover-neutral"),"bg-hover-neutral-strong":ys("bg-hover-neutral-strong"),"bg-selected":ys("bg-selected"),"bg-selected-hover":ys("bg-selected-hover"),"bg-selected-strong":ys("bg-selected-strong"),"bg-selected-stronger":ys("bg-selected-stronger"),"bg-selected-strongest":ys("bg-selected-strongest"),"bg-selected-strongest-hover":ys("bg-selected-strongest-hover"),"bg-disabled":ys("bg-disabled"),"bg-selected-disabled":ys("bg-selected-disabled"),"bg-selected-stronger-disabled":ys("bg-selected-stronger-disabled"),"bg-success":ys("bg-success"),"bg-success-hover":ys("bg-success-hover"),"bg-success-strong":ys("bg-success-strong"),"bg-success-strong-hover":ys("bg-success-strong-hover"),"bg-warning":ys("bg-warning"),"bg-warning-hover":ys("bg-warning-hover"),"bg-warning-strong":ys("bg-warning-strong"),"bg-warning-strong-hover":ys("bg-warning-strong-hover"),"bg-info":ys("bg-info"),"bg-info-hover":ys("bg-info-hover"),"bg-info-strong":ys("bg-info-strong"),"bg-info-strong-hover":ys("bg-info-strong-hover"),"bg-error":ys("bg-error"),"bg-error-hover":ys("bg-error-hover"),"bg-error-strong":ys("bg-error-strong"),"bg-error-strong-hover":ys("bg-error-strong-hover"),"bg-inverse":ys("bg-inverse"),"bg-inverse-subtle":ys("bg-inverse-subtle"),"bg-inverse-subtler":ys("bg-inverse-subtler"),"bg-inverse-subtlest":ys("bg-inverse-subtlest"),"bg-inverse-hover":ys("bg-inverse-hover"),"bg-primary":ys("bg-primary"),"bg-primary-subtle":ys("bg-primary-subtle"),"bg-primary-subtler":ys("bg-primary-subtler"),"bg-primary-subtlest":ys("bg-primary-subtlest"),"bg-available":ys("bg-available"),"bg-primary-hover":ys("bg-primary-hover"),"bg-primary-subtlest-hover":ys("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ys("bg-primary-subtlest-selected"),"overlay-strong":ys("overlay-strong"),"overlay-subtle":ys("overlay-subtle"),hyperlink:ys("hyperlink"),"hyperlink-hover":ys("hyperlink-hover"),"hyperlink-visited":ys("hyperlink-visited"),"hyperlink-inverse":ys("hyperlink-inverse"),"focus-ring":ys("focus-ring"),"focus-ring-inverse":ys("focus-ring-inverse")},xs={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>t=>{var r,n,a;const{thickness:o,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:js["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(a="function"==typeof l?l(t):l)&&void 0!==a?a:vs.border(t),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${c}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return i.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},$s=e=>t=>{var r;const n=t.theme,i=cs(xs,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${ls(i,e,n.overrides.border)}px`:`${i[e]}px`},ws=e=>1===e.length&&"theme"in e[0],js={"width-005":$s("width-005"),"width-010":$s("width-010"),"width-020":$s("width-020"),"width-040":$s("width-040"),solid:(Cs="solid",e=>{var t;const r=e.theme,n=cs(xs,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?ls(n,Cs,r.overrides.border):n[Cs];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...t)=>r=>{var n;const i=ws(t)?[]:t,a=ws(t)?t[0]:r,o=a.theme,s=cs(xs,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?ls(s,e,o.overrides.border):s[e])(...i)(a)})("dashed-default")};var Cs;const Ss={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},ks=e=>t=>{var r;const n=t.theme,i=cs(Ss,null==n?void 0:n.breakpointScheme);let a;return a=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?ls(i,e,n.overrides.breakpoint):i[e],a},Os={"xxs-min":ks("xxs-min"),"xxs-max":ks("xxs-max"),"xs-min":ks("xs-min"),"xs-max":ks("xs-max"),"sm-min":ks("sm-min"),"sm-max":ks("sm-max"),"md-min":ks("md-min"),"md-max":ks("md-max"),"lg-min":ks("lg-min"),"lg-max":ks("lg-max"),"xl-min":ks("xl-min"),"xl-max":ks("xl-max"),"xxl-min":ks("xxl-min"),"xxs-column":ks("xxs-column"),"xs-column":ks("xs-column"),"sm-column":ks("sm-column"),"md-column":ks("md-column"),"lg-column":ks("lg-column"),"xl-column":ks("xl-column"),"xxl-column":ks("xxl-column"),"xxs-gutter":ks("xxs-gutter"),"xs-gutter":ks("xs-gutter"),"sm-gutter":ks("sm-gutter"),"md-gutter":ks("md-gutter"),"lg-gutter":ks("lg-gutter"),"xl-gutter":ks("xl-gutter"),"xxl-gutter":ks("xxl-gutter"),"xxs-margin":ks("xxs-margin"),"xs-margin":ks("xs-margin"),"sm-margin":ks("sm-margin"),"md-margin":ks("md-margin"),"lg-margin":ks("lg-margin"),"xl-margin":ks("xl-margin"),"xxl-margin":ks("xxl-margin")},Ds=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Os["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Es={MaxWidth:Ds("max-width"),MinWidth:Ds("min-width")},Ts={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Fs={collections:{lifesg:Ts,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ts,mylegacy:Ts,ccube:Ts,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},_s=e=>t=>{var r;const n=t.theme,i=cs(Fs,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?ls(i,e,n.overrides.fontSpec):i[e]},Ms={"header-size-xxl":_s("header-size-xxl"),"header-size-xl":_s("header-size-xl"),"header-size-lg":_s("header-size-lg"),"header-size-md":_s("header-size-md"),"header-size-sm":_s("header-size-sm"),"header-size-xs":_s("header-size-xs"),"header-lh-xxl":_s("header-lh-xxl"),"header-lh-xl":_s("header-lh-xl"),"header-lh-lg":_s("header-lh-lg"),"header-lh-md":_s("header-lh-md"),"header-lh-sm":_s("header-lh-sm"),"header-lh-xs":_s("header-lh-xs"),"header-ls-xxl":_s("header-ls-xxl"),"header-ls-xl":_s("header-ls-xl"),"header-ls-lg":_s("header-ls-lg"),"header-ls-md":_s("header-ls-md"),"header-ls-sm":_s("header-ls-sm"),"header-ls-xs":_s("header-ls-xs"),"weight-light":_s("weight-light"),"weight-regular":_s("weight-regular"),"weight-semibold":_s("weight-semibold"),"weight-bold":_s("weight-bold"),"font-family":_s("font-family"),"body-size-baseline":_s("body-size-baseline"),"body-size-md":_s("body-size-md"),"body-size-sm":_s("body-size-sm"),"body-size-xs":_s("body-size-xs"),"body-lh-baseline":_s("body-lh-baseline"),"body-lh-md":_s("body-lh-md"),"body-lh-sm":_s("body-lh-sm"),"body-lh-xs":_s("body-lh-xs"),"body-ls-baseline":_s("body-ls-baseline"),"body-ls-md":_s("body-ls-md"),"body-ls-sm":_s("body-ls-sm"),"body-ls-xs":_s("body-ls-xs"),"formlabel-size-baseline":_s("formlabel-size-baseline"),"formlabel-size-lg":_s("formlabel-size-lg"),"formlabel-lh-baseline":_s("formlabel-lh-baseline"),"formlabel-lh-lg":_s("formlabel-lh-lg"),"formlabel-ls-baseline":_s("formlabel-ls-baseline"),"formlabel-ls-lg":_s("formlabel-ls-lg")},Is={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},As=e=>t=>{var r;const n=t.theme,i=cs(Is,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${ls(i,e,n.overrides.radius)}px`:`${i[e]}px`},Bs={none:As("none"),xs:As("xs"),sm:As("sm"),md:As("md"),lg:As("lg"),full:As("full")},Rs={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Ps=e=>t=>{var r;const n=t.theme,i=cs(Rs,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${ls(i,e,n.overrides.spacing)}px`:`${i[e]}px`},zs={"spacing-0":Ps("spacing-0"),"spacing-4":Ps("spacing-4"),"spacing-8":Ps("spacing-8"),"spacing-12":Ps("spacing-12"),"spacing-16":Ps("spacing-16"),"spacing-20":Ps("spacing-20"),"spacing-24":Ps("spacing-24"),"spacing-32":Ps("spacing-32"),"spacing-40":Ps("spacing-40"),"spacing-48":Ps("spacing-48"),"spacing-64":Ps("spacing-64"),"spacing-72":Ps("spacing-72"),"layout-xs":Ps("layout-xs"),"layout-sm":Ps("layout-sm"),"layout-md":Ps("layout-md"),"layout-lg":Ps("layout-lg"),"layout-xl":Ps("layout-xl"),"layout-xxl":Ps("layout-xxl"),"layout-xxxl":Ps("layout-xxxl")},Ls=(e,t,r,n)=>i.css`
    font-family: ${_s("font-family")};
    font-size: ${_s(e)};
    font-weight: ${_s(t)};
    line-height: ${_s(r)};
    letter-spacing: ${_s(n)};
`,Ns={"header-xxl-light":Ls("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ls("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ls("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ls("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ls("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ls("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ls("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ls("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ls("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ls("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ls("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ls("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ls("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ls("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ls("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ls("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ls("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ls("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ls("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ls("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ls("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ls("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ls("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ls("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ls("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ls("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ls("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ls("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ls("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ls("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ls("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ls("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ls("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ls("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ls("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ls("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ls("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ls("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ls("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ls("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Ls("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Ls("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Ws={collections:{lifesg:Ns,bookingsg:Ns,rbs:Ns,mylegacy:Ns,ccube:Ns,pa:Ns},defaultValue:"lifesg"},Hs=e=>t=>{var r;const n=t.theme,i=cs(Ws,null==n?void 0:n.fontScheme),a=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?ls(i,e,n.overrides.font):i[e];return"function"==typeof a?a(t):a},Ys={"header-xxl-light":Hs("header-xxl-light"),"header-xxl-regular":Hs("header-xxl-regular"),"header-xxl-semibold":Hs("header-xxl-semibold"),"header-xxl-bold":Hs("header-xxl-bold"),"header-xl-light":Hs("header-xl-light"),"header-xl-regular":Hs("header-xl-regular"),"header-xl-semibold":Hs("header-xl-semibold"),"header-xl-bold":Hs("header-xl-bold"),"header-lg-light":Hs("header-lg-light"),"header-lg-regular":Hs("header-lg-regular"),"header-lg-semibold":Hs("header-lg-semibold"),"header-lg-bold":Hs("header-lg-bold"),"header-md-light":Hs("header-md-light"),"header-md-regular":Hs("header-md-regular"),"header-md-semibold":Hs("header-md-semibold"),"header-md-bold":Hs("header-md-bold"),"header-sm-light":Hs("header-sm-light"),"header-sm-regular":Hs("header-sm-regular"),"header-sm-semibold":Hs("header-sm-semibold"),"header-sm-bold":Hs("header-sm-bold"),"header-xs-light":Hs("header-xs-light"),"header-xs-regular":Hs("header-xs-regular"),"header-xs-semibold":Hs("header-xs-semibold"),"header-xs-bold":Hs("header-xs-bold"),"body-baseline-light":Hs("body-baseline-light"),"body-baseline-regular":Hs("body-baseline-regular"),"body-baseline-semibold":Hs("body-baseline-semibold"),"body-baseline-bold":Hs("body-baseline-bold"),"body-md-light":Hs("body-md-light"),"body-md-regular":Hs("body-md-regular"),"body-md-semibold":Hs("body-md-semibold"),"body-md-bold":Hs("body-md-bold"),"body-sm-light":Hs("body-sm-light"),"body-sm-regular":Hs("body-sm-regular"),"body-sm-semibold":Hs("body-sm-semibold"),"body-sm-bold":Hs("body-sm-bold"),"body-xs-light":Hs("body-xs-light"),"body-xs-regular":Hs("body-xs-regular"),"body-xs-semibold":Hs("body-xs-semibold"),"body-xs-bold":Hs("body-xs-bold"),"formlabel-baseline-semibold":Hs("formlabel-baseline-semibold"),"formlabel-lg-semibold":Hs("formlabel-lg-semibold")},Vs=Object.assign(Object.assign({},vs),{Primitive:ps}),Us=Object.assign(Object.assign({},Ys),{Spec:Ms}),Ks=fs,qs=js,Xs=zs,Gs=Bs,Zs=Os,Qs=Es,Js={colourScheme:"lifesg",fontScheme:"lifesg",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},el=K.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Xs["spacing-24"]};
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
                background-color: ${Vs["bg-hover-neutral"]};
            `}
    }
`,tl=V.default.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=t,s=X(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(el,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),rl=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return i.css`
        ${Us[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},nl=(e,t)=>i.css`
    ${rl(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?i.css`
            display: block;
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${Vs.text};
`;exports.Typography=void 0,function(t){const r=(e,t,r)=>{const n=K.default(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>nl(t,e)}
        `;return n.displayName=`Typography.${r}`,n};t.HeaderXXL=r("h1","header-xxl","HeaderXXL"),t.HeaderXL=r("h2","header-xl","HeaderXL"),t.HeaderLG=r("h3","header-lg","HeaderLG"),t.HeaderMD=r("h4","header-md","HeaderMD"),t.HeaderSM=r("h5","header-sm","HeaderSM"),t.HeaderXS=r("h6","header-xs","HeaderXS");const n=(e,t)=>{const r=K.default.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>nl(e,t)}
        `;return r.displayName=`Typography.${t}`,r};t.BodyBL=n("body-baseline","BodyBL"),t.BodyMD=n("body-md","BodyMD"),t.BodySM=n("body-sm","BodySM"),t.BodyXS=n("body-xs","BodyXS");const a=(t,r)=>{const n=K.default.a`
            ${e=>i.css`
                ${rl(t,e.weight||"regular")}
                color: ${Vs.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Vs["text-hover"]};
                }
            `}
        `,a=t=>{var{external:r=!1,children:i}=t,a=X(t,["external","children"]);return e.jsxs(n,Object.assign({},a,{children:[i,r&&e.jsx(il,{})]}))};return a.displayName=`Typography.${r}`,a};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(exports.Typography||(exports.Typography={}));const il=K.default(a.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,al=K.default.div`
    background-color: ${Vs.bg} !important;
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${Qs.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,ol=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,sl=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${Ks["duration-250"]} ${Ks["ease-standard"]};
`,ll=K.default(exports.Typography.HeaderSM)`
    ${e=>sl(e.$isCollapsed)}
`,cl=K.default(exports.Typography.HeaderXS)`
    ${e=>sl(e.$isCollapsed)}
`,dl=K.default(tl)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${Ks["duration-250"]} ${Ks["ease-default"]};
    margin: auto -1rem auto 0;
`,ul=K.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Vs["icon-primary"]};
`,fl=K.default(Di.div)`
    overflow: hidden;
`,hl=K.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${Qs.MaxWidth.lg} {
        padding-right: 0;
    }
`;const gl=t.forwardRef((function(r,n){var{title:i,children:a,expanded:o,type:s="default",collapsible:l=!0}=r,c=X(r,["title","children","expanded","type","collapsible"]);const d=t.useRef(),u=t.useContext(q),[f,h]=t.useState(!l||(null!=o?o:u)),[g,p]=t.useState(!1),m=c["data-testid"]||"accordion-item",b=qe(),y=b.ref;t.useImperativeHandle(n,(()=>Object.assign(d.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{g&&h(!l||u)}),[u]),t.useEffect((()=>{g&&h(o)}),[o]),t.useEffect((()=>{p(!0)}),[]);const v={height:f?b.height:0},x=di(v);return e.jsxs(al,Object.assign({"data-testid":m,className:c.className,$isCollapsed:f,ref:d},{children:[e.jsxs(ol,Object.assign({$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0},{children:["string"!=typeof i?i:"small"===s?e.jsx(cl,Object.assign({weight:"bold","data-testid":`${m}-title`,$isCollapsed:f},{children:i})):e.jsx(ll,Object.assign({weight:"bold","data-testid":`${m}-title`,$isCollapsed:f},{children:i})),l&&e.jsx(dl,Object.assign({"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand"},{children:e.jsx(ul,{})}))]})),e.jsx(fl,Object.assign({style:g?x:v,$isCollapsed:f,"data-testid":`${m}-expandable-container`},{children:e.jsx(hl,Object.assign({ref:y,id:"content-container"},{children:a}))}))]}))})),pl=K.default.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ml=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,bl=K.default.div`
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
    animation: ${ml} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yl=K.default(bl)`
    animation-delay: -0.45s;
`,vl=K.default(bl)`
    animation-delay: -0.3s;
`,xl=K.default(bl)`
    animation-delay: -0.15s;
`,$l=({color:t,className:r,size:n})=>e.jsxs(pl,Object.assign({className:r,$size:n,$color:t},{children:[e.jsx(bl,{id:"inner1"}),e.jsx(yl,{id:"inner2"}),e.jsx(vl,{id:"inner3"}),e.jsx(xl,{id:"inner4"})]})),wl=K.default.button`
    padding: ${Xs["spacing-8"]} ${Xs["spacing-16"]};
    min-width: 4rem;
    border: ${qs["width-010"]} ${qs.solid} transparent;
    border-radius: ${Gs.sm};
    transition: all ${Ks["duration-250"]} ${Ks["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return i.css`
                    background-color: ${Vs.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Vs["border-error-strong"]:Vs["border-primary"]};

                    color: ${e.$buttonIsDanger?Vs["text-error"]:Vs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Vs["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${Vs.bg};
                    border-color: ${Vs.border};

                    color: ${e.$buttonIsDanger?Vs["text-error"]:Vs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Vs["bg-hover-neutral"]};
                    }
                `;case"link":return i.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Vs["text-error"]:Vs["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Vs["bg-hover-neutral"]};
                    }
                `;case"disabled":return i.css`
                    background-color: ${Vs["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Vs["text-disabled"]};
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?Vs["bg-error-strong"]:Vs["bg-primary"]};

                    ${Qs.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Vs["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Vs["bg-error-strong-hover"]:Vs["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return i.css`
                    height: 2.5rem;
                    ${Us["body-md-semibold"]}

                    ${Qs.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return i.css`
                    height: 4rem;
                    ${Us["header-md-semibold"]}

                    ${Qs.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return i.css`
                    height: 3rem;
                    ${Us["header-xs-semibold"]}

                    ${Qs.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,jl=K.default($l)`
    margin-right: 0.5rem;
`,Cl=(t,r)=>{const{children:n,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(wl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(jl,{}),e.jsx("span",{children:n})]}))};Cl.displayName="Button.Default";const Sl=(t,r)=>{const{children:n,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(wl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(jl,{}),e.jsx("span",{children:n})]}))};Sl.displayName="Button.Small";const kl=(t,r)=>{const{children:n,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:s};return e.jsxs(wl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(jl,{}),e.jsx("span",{children:n})]}))};kl.displayName="Button.Large";const Ol={Default:V.default.forwardRef(Cl),Small:V.default.forwardRef(Sl),Large:V.default.forwardRef(kl)},Dl=K.default.div`
    width: 100%;
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
`,El=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${Qs.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return i.css`
                ${Qs.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Tl=K.default(exports.Typography.HeaderMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${Qs.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return i.css`
                ${Qs.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Fl=K.default(Ol.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,_l=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:a="expand-all",showTitleInMobile:o=!1,className:s})=>{const[l,c]=t.useState("expand-all"===a),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(q.Provider,Object.assign({value:l},{children:e.jsxs(Dl,Object.assign({className:s},{children:[n||i?e.jsxs(El,Object.assign({$showTitleInMobile:o,$hasExpandAll:i},{children:[n&&e.jsx(Tl,Object.assign({weight:"bold",$showInMobile:o,"data-testid":"accordion-title"},{children:n})),i&&e.jsx(Fl,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button"},{children:l?"Hide all":"Show all"}))]})):null,r]}))}))}),{Item:gl}),Ml=e=>{const{textSize:t}=e||{};return i.css`
        // Text styling
        ${t&&Us[`${t}-regular`]}

        strong {
            font-weight: ${Us.Spec["weight-semibold"]};
            ${t&&Us[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Us.Spec["weight-semibold"]};
            ${t&&Us[`${t}-semibold`]}
            color: ${Vs.hyperlink};
            text-decoration: none;

            svg {
                color: ${Vs["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Vs["hyperlink-hover"]};

                svg {
                    color: ${Vs["icon-hover"]};
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
    `},Il=K.default.div`
    padding: ${Xs[8]} ${Xs["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Vs["bg-error"](e),r=Vs["border-error"](e);break;case"success":t=Vs["bg-success"](e),r=Vs["border-success"](e);break;case"warning":default:t=Vs["bg-warning"](e),r=Vs["border-warning"](e);break;case"info":t=Vs["bg-info"](e),r=Vs["border-info"](e);break;case"description":t=Vs["bg-strong"](e),r=Vs["border-strong"](e)}return i.css`
            background: ${t};
            border-left: ${qs["width-020"]} ${qs.solid}
                ${r};
        `}}

    color: ${Vs.text};
    ${e=>"small"===e.$sizeType?Ml({textSize:"body-sm"}):Ml({textSize:"body-md"})}
`,Al=K.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Xs["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Vs["icon-error"](e);break;case"success":t=Vs["icon-success"](e);break;case"warning":default:t=Vs["icon-warning"](e);break;case"info":t=Vs["icon-info"](e);break;case"description":t=Vs["icon-subtle"](e)}return i.css`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Bl=K.default(exports.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?i.css`
                ${Us["body-sm-semibold"]}
                margin-top: ${Xs["spacing-4"]};
            `:i.css`
                ${Us["body-md-semibold"]}
                margin-top: ${Xs["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Xs["spacing-4"]};
    }
`,Rl=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Pl=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i.css`
                margin-bottom: ${Xs["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,zl=K.default.button`
    ${e=>"small"===e.$sizeType?i.css`
                ${Us["body-sm-semibold"]}
            `:i.css`
                ${Us["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Xs["spacing-4"]};
    margin-top: ${Xs["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Vs["text-primary"]};
`,Ll=K.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ks["duration-350"]} ${Ks["ease-standard"]};
`,Nl=r=>{var{type:n,className:i,children:a,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:g=!1,customIcon:p,maxCollapsedHeight:m}=r,b=X(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[y,v]=t.useState(!1),[x,$]=t.useState(!1),{height:w,ref:j}=qe();t.useEffect((()=>{C()}),[m,w]);const C=()=>{v(!m),$(S())},S=()=>!!m&&w>m;return e.jsxs(Il,Object.assign({className:i,$type:n,$sizeType:h,"data-testid":b["data-testid"]},{children:[g&&e.jsx(Al,Object.assign({$sizeType:h,$type:n},{children:(()=>{if(n&&p)return p;switch(n){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()})),e.jsxs(Rl,{children:[e.jsxs(Pl,Object.assign({$maxCollapsedHeight:S()?m:void 0,$showMore:y,$hasActionLink:!!u},{children:[e.jsx("div",Object.assign({ref:j},{children:a})),u&&e.jsxs(Bl,Object.assign({"data-testid":"action-link",$type:n,$sizeType:h},u,{children:[u.children,f||e.jsx(o.ArrowRightIcon,{})]}))]})),x&&e.jsxs(zl,Object.assign({$sizeType:h,$type:n,type:"button",onClick:()=>v(!y)},{children:["Show ",y?"less":"more",e.jsx(Ll,{$expanded:y})]}))]})]}))},Wl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.ff6f4812.js")}))).LottieSpinner}})))),Hl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),Yl=K.default.div`
    margin: 0 auto;
    padding: ${Xs["spacing-32"]} ${Xs["spacing-16"]};
`,Vl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.833371a6.js")}))).LottieLoadingDots}})))),Ul=r=>e.jsx(ql,Object.assign({},r,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(Kl,{})},{children:e.jsx(Vl,{})}))})),Kl=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),ql=K.default.div`
    margin: 0 auto;
`,Xl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.218164f4.js")}))).LottieLoadingDotsSpinner}})))),Gl=r=>{var{color:n}=r,a=X(r,["color"]);const o=i.useTheme(),s=n||Vs["icon-primary"]({theme:o});return e.jsx(Ql,Object.assign({},a,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(Zl,{})},{children:e.jsx(Xl,{color:s})}))}))},Zl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),Ql=K.default.div`
    margin: 0 auto;
`;var Jl,ec={exports:{}};Jl=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,a=t[r];if(!a)return!1;switch(r){case"orientation":case"scan":return a.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=d(i),a=d(a);break;case"resolution":i=c(i),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),a=l(a);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,a=parseInt(a,10)||0}switch(n){case"min":return a>=i;case"max":return a<=i;default:return a===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),a=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!a&&"not"===a.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,a={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(n,o);return a[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function a(e,t,r){var a=this;if(i&&!r){var o=i.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,t,r){return new a(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))r.call(a,c)&&(s[c]=a[c]);if(t){o=t(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(o(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,i)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in a)){a[d.message]=!0;var f=l?l():"";n("Failed "+r+" type: "+d.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),a=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,i,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new g("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,i,a){var o=t[r];return e(o)?null:new g("Invalid "+i+" `"+a+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,a){var o=e[t];return i.isValidElementType(o)?null:new g("Invalid "+n+" `"+a+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,a){if(!(t[r]instanceof e)){var o=e.name||u;return new g("Invalid "+i+" `"+a+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return y(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,i,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new g("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,a+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,a){for(var o=t[r],s=0;s<e.length;s++)if(h(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new g("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),c}return p((function(t,r,n,i,a){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,i,a,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+i+" `"+a+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,i,a){var s=t[r],l=v(s);if("object"!==l)return new g("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,i,a,c,x(d));var u=d(s,c,n,i,a+"."+c,o);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,i,l){var c=t[r],d=v(c);if("object"!==d)return new g("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=a({},t[r],e);for(var f in u){var h=e[f];if(s(e,f)&&"function"!=typeof h)return b(n,i,l,f,x(h));if(!h)return new g("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=h(c,f,n,i,l+"."+f,o);if(p)return p}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},i=0;function a(a,s,l,c,d,f,h){if(c=c||u,f=f||l,h!==o){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?a?null===s[l]?new g("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function m(e){return p((function(t,r,n,i,a,o){var s=t[r];return v(s)!==e?new g("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,a=n.call(t);if(n!==t.entries){for(;!(i=a.next()).done;)if(!y(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case d:case i:case o:case a:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case p:case g:case s:return m;default:return t}}case n:return t}}}var $=c,w=d,j=l,C=s,S=r,k=u,O=i,D=p,E=g,T=n,F=o,_=a,M=f,I=!1;function A(e){return x(e)===d}t.AsyncMode=$,t.ConcurrentMode=w,t.ContextConsumer=j,t.ContextProvider=C,t.Element=S,t.ForwardRef=k,t.Fragment=O,t.Lazy=D,t.Memo=E,t.Portal=T,t.Profiler=F,t.StrictMode=_,t.Suspense=M,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===p},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===o},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===o||e===a||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var a=0;a<i;a++){var o=r[a];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,o=n(e,["children","device","onChange"]),s=(0,a.default)(o,r,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var a=n(r(/*! ./Component */"./src/Component.ts"));t.default=a.default;var o=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=o.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=n({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},d),f=n(n({},l),u);t.default={all:f,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),a=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,o.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],a=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&a(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,i.useState)(r),a=n[0],o=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,t]),a}(t),o=f(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,a.default)(e,t||{},!!t)},n=(0,i.useState)(r),o=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,n),h=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),g=u();return(0,i.useEffect)((function(){g&&r&&r(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var tc=ec.exports=Jl(V.default);const rc=K.default.div`
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    margin-bottom: ${Xs["spacing-32"]};
`,nc=K.default(Di.div)`
    overflow: hidden;
`,ic=K.default.div`
    height: max-content;
`,ac=K.default.div`
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};
`,oc=K.default.div`
    padding: ${Xs["spacing-16"]} ${Xs["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Qs.MaxWidth.sm} {
        padding: ${Xs["spacing-16"]} ${Xs["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return i.css`
                cursor: pointer;
            `}}
`,sc=K.default.div`
    ${Us["header-sm-semibold"]}
    color: ${Vs.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Xs["spacing-16"]};
`,lc=K.default.div`
    display: flex;
`,cc=K.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Xs["spacing-40"]};

    ${Qs.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return i.css`
                    color: ${Vs["icon-error"]};
                `;case"warning":return i.css`
                    color: ${Vs["icon-warning"]};
                `}}}
`,dc=K.default(s.ExclamationCircleFillIcon)`
    height: ${Us.Spec["header-size-sm"]};
    width: ${Us.Spec["header-size-sm"]};
`,uc=K.default.div`
    display: flex;
    margin-left: auto;
    ${Qs.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return i.css`
                margin-right: ${Xs["spacing-40"]};
                ${Qs.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${Xs["spacing-16"]};
                }
            `}}
`,fc=K.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Xs["spacing-16"]};
    margin: -${Xs["spacing-16"]};
    display: flex;
    align-items: center;

    ${Qs.MaxWidth.sm} {
        margin: -${Xs["spacing-16"]} -${Xs["spacing-16"]} -${Xs["spacing-16"]} 0;
        margin-left: auto;
    }
`,hc=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ks["duration-250"]} ${Ks["ease-default"]};
`,gc=K.default(f.ChevronDownIcon)`
    color: ${Vs.icon};
    height: ${Us.Spec["header-size-sm"]};
    width: ${Us.Spec["header-size-sm"]};
`;var pc={exports:{}};pc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var $="$isDayjsObject",w=function(e){return e instanceof k||!(!e||!e[$])},j=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(i=a),r&&(x[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},C=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},S=y;S.l=j,S.i=w,S.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,d=S.p(e),h=function(e,t){var i=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return h(n?b-x:b+(6-x),m);case s:case f:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case a:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var g=S.p(d),p=function(e){var t=C(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(f={},f[a]=t,f[o]=r,f[i]=e,f)[g]||1,b=this.$d.getTime()+n*m;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},f=function(e){return S.s(a%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return s+1;case"MM":return S.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return S.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return S.s(o,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var g,p=this,m=S.p(f),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return S.m(p,b)};switch(m){case u:g=x()/12;break;case c:g=x();break;case d:g=x()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case o:g=v/r;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return h?g:S.a(g)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=j(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),O=k.prototype;return C.prototype=O,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,k,C),e.$i=!0),C},C.locale=j,C.isDayjs=w,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var mc=Ti(pc.exports),bc={exports:{}};bc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],f=d&&d[0],h=d&&d[1];o[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,g=o||(i||a?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!a||(m=a>0?a-1:h.getMonth());var b=s||0,y=l||0,v=c||0,x=d||0;return u?new Date(Date.UTC(p,m,g,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,b,y,v,x)):new Date(p,m,g,b,y,v,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var yc=Ti(bc.exports),vc={exports:{}};vc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var xc=Ti(vc.exports),$c={exports:{}};$c.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var wc=Ti($c.exports),jc={exports:{}};jc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Cc,Sc,kc=Ti(jc.exports),Oc={exports:{}};Oc.exports=(Cc={year:0,month:1,day:2,hour:3,minute:4,second:5},Sc={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Sc[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Sc[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=Cc[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],f=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Dc,Ec=Ti(Oc.exports);mc.extend(xc),mc.extend(kc),mc.extend(wc),mc.extend(yc),mc.extend(Ec),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=mc(t).startOf("week");return Tc(r).map((e=>Fc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Fc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(mc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+mc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=mc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?mc(n):void 0,i?mc(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Dc||(Dc={}));const Tc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Fc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},_c=[1,3,5,7,8,10,12],Mc=[4,6,9,11];var Ic,Ac,Bc,Rc;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":_c.includes(a)?Math.min(i,31).toString():Mc.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=mc(e,r);return mc(t,r).diff(n,"minute")},e.toDayjs=e=>e?mc(e):mc(),e.addMinutesToTime=(e,t,r="HH:mm")=>mc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>mc(e).isSame(mc(t),r)}(Ic||(Ic={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!mc(e).isBefore(n,"day"))||!(!i||!mc(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(mc(e).isValid())return e}return""}}(Ac||(Ac={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Bc||(Bc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Rc||(Rc={}));function Pc(e){const r=t.useRef(null);return t.useLayoutEffect((()=>{r.current=e}),[e]),t.useCallback(((...e)=>r.current(...e)),[])}const zc=(e,r,n="window",i)=>{const a=t.useRef();t.useEffect((()=>{a.current=r}),[r]),t.useEffect((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const r=e=>a.current(e);return t.addEventListener(e,r,i),()=>{t.removeEventListener(e,r,i)}}),[e,n])},Lc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Nc=()=>{const[e,r]=t.useState(!1);return t.useEffect((()=>{r(!0)}),[]),e};function Wc({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),a=n.substring(0,r.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}const Hc=e=>{const r=(e=>{const r=t.useRef(e),n=t.useRef();return t.useEffect((()=>{n.current=r.current,r.current=e}),[e]),n.current})(e);return r!==e},Yc=e=>{const[r,n]=t.useState(e),i=t.useRef(e);return[r,t.useCallback((e=>{i.current=e,n(e)}),[]),i]},Vc=K.default.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${Xs["spacing-32"]} 0;

    ${Qs.MaxWidth.xl} {
        margin: ${Xs["spacing-24"]} 0;
    }

    ${Qs.MaxWidth.lg} {
        margin: ${Xs["spacing-16"]} 0;
    }
`,Uc=K.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Xs["spacing-8"]};
    font-size: ${Us.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${Qs.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,Kc=K.default.div`
    width: ${Xs["spacing-64"]};
    height: calc(1lh + ${Xs["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,i.css`
            ${Qs.MaxWidth.lg} {
                ${t}
            }
        `}};
`,qc=K.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Xc=K.default(h.ChevronRightIcon)`
    margin: ${Xs["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${Vs["icon-subtle"]};
`,Gc=K.default(exports.Typography.BodyMD)`
    margin: ${Xs["spacing-8"]} !important;
`,Zc=K.default(exports.Typography.LinkMD)`
    margin: ${Xs["spacing-8"]} !important;
`,Qc=K.default(wl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Jc=(t,r)=>{const{children:n,disabled:i=!1,styleType:a="default",danger:o=!1,icon:s,iconPosition:l="left"}=t,c=X(t,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:l,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:o};return e.jsxs(Qc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},d,c,{children:[s,e.jsx("span",{children:n})]}))};Jc.displayName="ButtonWithIcon.Default";const ed=(t,r)=>{const{children:n,disabled:i=!1,styleType:a="default",danger:o=!1,icon:s,iconPosition:l="left"}=t,c=X(t,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:l,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:o};return e.jsxs(Qc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},d,c,{children:[s,e.jsx("span",{children:n})]}))};ed.displayName="ButtonWithIcon.Small";const td={Default:V.default.forwardRef(Jc),Small:V.default.forwardRef(ed)},rd=K.default.div`
    --vertical-inset: ${Xs["spacing-24"]};
    --horizontal-inset: ${Xs["spacing-20"]};
    --header-bottom-spacing: ${Xs["spacing-4"]};

    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Qs.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,nd=i.css`
    color: ${Vs.icon};
    height: 1rem;
    width: 1rem;
`,id=K.default(g.ChevronLeftIcon)`
    ${nd}
`,ad=K.default(h.ChevronRightIcon)`
    ${nd}
`,od=K.default(f.ChevronDownIcon)`
    ${nd}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,sd=K.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,ld=K.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,cd=K.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,dd=K.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Vs.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return i.css`
                display: none;
            `}}
`,ud=K.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,fd=K.default.div`
    display: flex;
`,hd=K.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${od} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,gd=K.default.span`
    ${Us["body-md-regular"]}
    color: ${Vs.text};
`,pd=K.default.div`
    display: flex;
`,md=K.default(tl)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,bd=K.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,yd=K.default(Ol.Small)`
    flex: 1;
`,vd=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,xd=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Gs.md};
    margin: 0 0.5rem;
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};

    // default styles
    ${Us["body-md-regular"]}
    border-radius: ${Gs.md};
    border: ${qs["width-010"]} ${qs.solid} transparent;
    background-clip: border-box;
    color: ${Vs.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?i.css`
                cursor: pointer;
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?i.css`
                background: ${Vs["bg-selected"]};
                border-color: ${Vs["border-selected"]};
                color: ${Vs["text-selected"]};
                font-weight: ${Us.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${Vs["bg-selected-hover"]};
                        border-color: ${Vs["border-selected-hover"]};
                        color: ${Vs["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?i.css`
                color: ${Vs["text-primary"]};
                font-weight: ${Us.Spec["weight-semibold"]};
            `:r?i.css`
                color: ${Vs["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?i.css`
                &:hover {
                    background: ${Vs["bg-selected-hover"]};
                    border-color: ${Vs["border-selected-hover"]};
                    color: ${Vs["text-selected-hover"]};
                    font-weight: ${Us.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${Vs["bg-hover"]};
                color: ${Vs["text-hover"]};
                font-weight: ${Us.Spec["weight-semibold"]};
            }
        `}}
`,$d=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:a,viewCalendarDate:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const f=t.useMemo((()=>Dc.generateMonths(mc(r))),[r]),h=e=>{const t="start"===n&&a&&e.isAfter(a,"month")&&s,r="end"===n&&i&&e.isBefore(i,"month")&&s;return t||r},g=e=>{const t=e.format("MMMM"),r=(n=e,!Dc.isWithinRange(n,l?mc(l):void 0,c?mc(c):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":mc().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||d,month:t,variant:i}};return f.length?e.jsx(vd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,month:a}=g(t);return e.jsx(xd,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(t,!n)},{children:a}),a)}))}):null},wd=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,jd=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Us["body-md-regular"]}
    border-radius: ${Gs.md};
    border: ${qs["width-010"]} ${qs.solid} transparent;
    background-clip: border-box;
    color: ${Vs.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?i.css`
                cursor: pointer;
            `:t?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?i.css`
                background: ${Vs["bg-selected"]};
                border-color: ${Vs["border-selected"]};
                color: ${Vs["text-selected"]};
                font-weight: ${Us.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${Vs["bg-selected-hover"]};
                        border-color: ${Vs["border-selected-hover"]};
                        color: ${Vs["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?i.css`
                color: ${Vs["text-primary"]};
                font-weight: ${Us.Spec["weight-semibold"]};
            `:"other-decade"===e||r?i.css`
                color: ${Vs["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?i.css`
                &:hover {
                    background: ${Vs["bg-selected-hover"]};
                    border-color: ${Vs["border-selected-hover"]};
                    color: ${Vs["text-selected-hover"]};
                    font-weight: ${Us.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${Vs["bg-hover"]};
                color: ${Vs["text-hover"]};
                font-weight: ${Us.Spec["weight-semibold"]};
            }
        `}}
`,Cd=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:a,viewCalendarDate:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const f=t.useMemo((()=>Dc.generateDecadeOfYears(mc(r))),[r]),h=e=>{const t="start"===n&&a&&e.isAfter(a,"year")&&s,r="end"===n&&i&&e.isBefore(i,"year")&&s;return t||r},g=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!Dc.isWithinRange(i,l?mc(l):void 0,c?mc(c):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":mc().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:r,variant:a}};return f.length?e.jsx(wd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,year:a}=g(t);return e.jsx(jd,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(t,!n)},{children:a}),a)}))}):null},Sd=V.default.forwardRef(((r,n)=>{var{children:i,initialCalendarDate:a,minDate:o,maxDate:s,currentFocus:l,selectedStartDate:c,selectedEndDate:d,selectWithinRange:u,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:g,withButton:p,doneButtonDisabled:m,onDismiss:b,showNavigationHeader:y=!0,getLeftArrowDate:v,getRightArrowDate:x,isLeftArrowDisabled:$,isRightArrowDisabled:w,getMonthHeaderLabel:j,getYearHeaderLabel:C}=r,S=X(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[k,O]=t.useState(Ic.toDayjs(a)),[D,E]=t.useState(Ic.toDayjs(a)),[T,F]=t.useState("default"),_=t.useRef(null),M=t.useRef(null),I=t.useRef();t.useImperativeHandle(n,(()=>({defaultView(){F("default")},resetView(){const e=Ic.toDayjs(a);O(e),E(e),F("default")},setCalendarDate(e){const t=Ic.toDayjs(e);O(t),E(t)}}))),t.useEffect((()=>{const e=Ic.toDayjs(a);O(e),E(e)}),[a]),t.useEffect((()=>{N(D)}),[D]);const A=()=>{"month-options"!==T?(F("month-options"),I.current.focus()):(F("default"),O(D))},B=()=>{"default"!==T?(F("default"),O(D)):F("year-options")},R=()=>{I.current.focus();const e=v?v(k):k.subtract(1,"month");switch(T){case"default":E(e),O(e);break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},P=()=>{I.current.focus();const e=x?x(k):k.add(1,"month");switch(T){case"default":E(e),O(e);break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},z=e=>{O(e),E(e),p||F("default")},L=()=>{const e=Ic.toDayjs(a);O(e),E(e),"default"===T?W("reset"):F("default")},N=e=>{g&&g(e)},W=e=>{b&&b(e)},H=()=>{if(!o||h)return!1;const e=mc(o);return"month-options"===T?!Dc.isPreviousYearWithinRange(k,e):"year-options"===T?!Dc.isPreviousDecadeWithinRange(k,e):$?$(k):!Dc.isPreviousMonthWithinRange(k,e)},Y=()=>{if(!s||h)return!1;const e=mc(s);return"month-options"===T?!Dc.isNextYearWithinRange(k,e):"year-options"===T?!Dc.isNextDecadeWithinRange(k,e):w?w(k):!Dc.isNextMonthWithinRange(k,e)},V=()=>{if("year-options"===T){const{beginDecade:e,endDecade:t}=Dc.getStartEndDecade(k);return`${e} to ${t}`}return C?C(k):k.format("YYYY")},U=()=>{const t=j?j(k):k.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(hd,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:A},{children:[e.jsx(gd,{children:t}),e.jsx(od,{})]})),e.jsxs(hd,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:B},{children:[e.jsx(gd,{children:V()}),e.jsx(od,{})]}))]})},K=()=>{switch(T){case"month-options":return e.jsx($d,{calendarDate:k,currentFocus:l,minDate:o,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:D,isNewSelection:u,onMonthSelect:z,allowDisabledSelection:h});case"year-options":return e.jsx(Cd,{calendarDate:k,currentFocus:l,minDate:o,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:D,isNewSelection:u,onYearSelect:z,allowDisabledSelection:h});default:return null}};return e.jsxs(sd,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container"},S,{children:[y&&e.jsxs(ud,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e.jsx(fd,{children:U()}),e.jsxs(pd,{children:[e.jsx(md,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:H(),focusHighlight:!1,tabIndex:-1,onClick:R},{children:e.jsx(id,{})})),e.jsx(md,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:Y(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:e.jsx(ad,{})}))]})]})),e.jsx(ld,{children:(()=>{const t="function"==typeof i?i({calendarDate:D,currentView:T}):i;return f?e.jsxs(e.Fragment,{children:["default"===T&&t,K()]}):e.jsxs(e.Fragment,{children:[e.jsx(cd,{children:t}),e.jsx(dd,Object.assign({$visible:"default"!==T},{children:K()}))]})})()}),(()=>{if(!p)return;const t=!!("default"===T)&&m;return e.jsxs(bd,{children:[e.jsx(yd,Object.assign({ref:M,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:L},{children:"Cancel"})),e.jsx(yd,Object.assign({"data-testid":"done-button",ref:_,type:"button",onClick:()=>{t||(O(D),"default"===T?W("confirmed"):F("default"))},disabled:t},{children:"Done"}))]})})()]}))})),kd=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Od=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Us["body-sm-semibold"]};
    color: ${Vs.text};
`,Dd=K.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Ed=e=>{let t=Vs.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Vs["bg-hover"],r=Vs["bg-hover"];break;case"hover":t=Vs["bg-hover-strong"],r=Vs["bg-hover-strong"];break;case"hover-outline":t=Vs["bg-hover-subtle"],r=Vs["border-hover"];break;case"selected-outline":t=Vs["bg-selected"],r=Vs["border-selected"];break;case"selected-outline-subtle":t=Vs["bg-selected"],r=Vs["border-selected-subtle"];break;case"selected-hover":t=Vs["bg-selected-hover"];break;case"selected-hover-outline":t=Vs["bg-selected-hover"],r=Vs["border-selected-hover"]}return{color:t,borderColor:r}},Td=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Fd=K.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
    border: ${qs["width-010"]} ${qs.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Ed(e);return i.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,_d=K.default(Fd)`
    left: 0;
`,Md=K.default(Fd)`
    right: 0;
`,Id=K.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};

    border: ${qs["width-010"]} ${qs.solid} transparent;
    border-radius: ${Gs.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Ed(e);return i.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Ad=K.default(Id)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Bd=K.default(Id)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Rd=K.default.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Us["body-md-regular"]}
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return i.css`
                color: ${Vs["text-disabled-subtlest"]};
            `;switch(r){case"selected":return i.css`
                    font-weight: ${Us.Spec["weight-semibold"]};
                    color: ${Vs["text-selected"]};
                `;case"selected-hover":return i.css`
                    font-weight: ${Us.Spec["weight-semibold"]};
                    color: ${Vs["text-selected-hover"]};
                `;case"current":return i.css`
                    font-weight: ${Us.Spec["weight-semibold"]};
                    color: ${Vs["text-primary"]};
                `;case"hover":return i.css`
                    font-weight: ${Us.Spec["weight-semibold"]};
                    color: ${Vs["text-hover"]};
                `;case"unavailable":return i.css`
                    color: ${Vs["text-disabled-subtlest"]};
                `;case"hidden":return i.css`
                    visibility: hidden;
                `;default:return i.css`
                    color: ${Vs.text};
                `}}}
`,Pd=K.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,zd=({bgLeft:t,bgRight:r,circleLeft:n,circleRight:i,labelType:a,disabled:o,interactive:s,currentDateIndicator:l,date:c,onSelect:d,onHover:u,onHoverEnd:f})=>{const h=mc().isSame(c,"day");return e.jsxs(Td,{children:[e.jsx(_d,{$type:t}),e.jsx(Ad,{$type:n}),e.jsx(Md,{$type:r}),e.jsx(Bd,{$type:i}),e.jsxs(Rd,Object.assign({$type:a,$disabled:o,$interactive:s,onClick:()=>{d(c)},onMouseEnter:()=>{u(c)},onMouseLeave:()=>{f&&f(c)}},{children:[c.date(),l&&h&&e.jsx(Pd,{$disabled:o})]}))]})},Ld=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:a,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:f,onSelect:h,onHover:g})=>{const p=Dc.isDisabledDay(t,c,s,l),m=!p||d,b=()=>{const e=mc(o),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===a&&i&&t&&(n&&r?(c=o,d=i):(s=o,l=n||i)),"end"===a&&n&&r&&(i&&t?(c=n,d=o):(s=i||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},y={date:t,calendarDate:r,disabled:p,interactive:m,currentDateIndicator:!0,onSelect:()=>{h(t,!m)},onHover:()=>{g(t.format("YYYY-MM-DD"),!m)}};return e.jsx(zd,Object.assign({},y,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(mc().isSame(t,"day")&&!p)e.labelType="current";else if(u){const r="end"===a&&n&&t.isBefore(n),o="start"===a&&i&&t.isAfter(i);(r||o)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},a=t.isSame(n,"day"),o=t.isSame(i,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&a||i&&o)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",a||(e.bgLeft="selected-outline-subtle"),o||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!o)return;const e={},r=t.isSame(o,"day"),{hoverStart:a,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=t.isSame(n,"day"),a=t.isSame(i,"day");r||a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(a&&s){if(t.isBetween(a,s,"day","[]")){const r=t.isSame(a,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};mc.extend(xc);const Nd=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:a,selectedEndDate:o,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h})=>{const g=t.useMemo((()=>Dc.generateDays(r)),[r]),[p,m]=t.useState(""),b=(e,t)=>{t&&!f||s(e)},y=(e,t)=>{t&&!f||(m(e),l(e))},v=()=>{m(""),l("")};return e.jsxs(kd,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((t,r)=>e.jsx(Od,{children:mc(t).format("ddd")},`week-day-${r}`))),g.map(((t,s)=>e.jsx(Dd,Object.assign({onMouseLeave:v},{children:t.map(((t,s)=>e.jsx(Ld,{date:t,calendarDate:r,startDate:a,endDate:o,hoverDate:p,currentFocus:n,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:c,showActiveMonthDaysOnly:h,onSelect:b,onHover:y},`day-${s}`)))}),s)))]}))},Wd=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const f=Dc.isDisabledDay(t,s,a,o),h=!f||l,{start:g,end:p}=n?Dc.getFixedRangeStartEnd(Ic.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Dc.getFixedRangeStartEnd(Ic.toDayjs(i),c):{start:void 0,end:void 0},y=n&&t.isBetween(g,p,"day","[]"),v=i&&t.isBetween(m,b,"day","[]"),x=y&&t.isSame(g,"day")||v&&t.isSame(m,"day"),$=y&&t.isSame(p,"day")||v&&t.isSame(b,"day"),w=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},j={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(zd,Object.assign({},j,(()=>{const e={};return y||v?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":mc().isSame(t,"day")&&!f&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return v&&w(e,"hover",r===m,r===b),y&&w(e,"selected-outline",r===g,r===p),y&&v&&(w(e,"selected-hover-outline",x,$),r===m&&r!==g&&(e.circleLeft="selected-hover")),e})()))},Hd=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>Dc.generateDays(r)),[r]),[f,h]=t.useState(""),g=(e,t)=>{t&&!c||(a(e),e&&!mc(e).isSame(e,"month")&&h(""))},p=(e,t)=>{t&&!c||(h(e),o(e))},m=()=>{h(""),o("")};return e.jsxs(kd,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,r)=>e.jsx(Od,{children:mc(t).format("ddd")},`week-day-${r}`))),u.map(((t,a)=>e.jsx(Dd,Object.assign({onMouseLeave:m},{children:t.map(((t,a)=>e.jsx(Wd,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:g,onHover:p,numberOfDays:d},`day-${a}`)))}),a)))]}))},Yd=K.default.div`
    width: 100%;
    background: ${Vs.bg};
`,Vd=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const f=Dc.isDisabledDay(t,s,a,o),h=!f||l,g={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(zd,Object.assign({},g,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":mc().isSame(t,"day")&&!f&&(e.labelType="current");const a=t.isSame(n,"day"),o=t.isSame(i,"day");return a&&o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):a?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):o&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};mc.extend(xc);const Ud=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d})=>{const u=t.useMemo((()=>Dc.generateDays(r)),[r]),[f,h]=t.useState(""),g=(e,t)=>{t&&!c||a(e)},p=(e,t)=>{t&&!c||(h(e),o(e))},m=()=>{h(""),o("")};return e.jsxs(kd,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,r)=>e.jsx(Od,{children:mc(t).format("ddd")},`week-day-${r}`))),u.map(((t,a)=>e.jsx(Dd,Object.assign({onMouseLeave:m},{children:t.map(((t,a)=>e.jsx(Vd,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:g,onHover:p},`day-${a}`)))}),a)))]}))},Kd=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Dc.isDisabledDay(t,s,a,o),f=!u||l,{start:h,end:g}=Dc.getWeekStartEnd(Ic.toDayjs(n)),{start:p,end:m}=Dc.getWeekStartEnd(Ic.toDayjs(i)),b=n&&t.isBetween(h,g,"day","[]"),y=i&&t.isBetween(p,m,"day","[]"),v=b&&t.isSame(h)||y&&t.isSame(p),x=b&&t.isSame(g)||y&&t.isSame(m),$={date:t,calendarDate:r,disabled:u,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(t,!f)},onHover:()=>{d(t.format("YYYY-MM-DD"),!f)}};return e.jsx(zd,Object.assign({},$,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":mc().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&y?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):y&&(t="hover",r="hover"),t&&(e.labelType=r,v?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},qd=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>Dc.generateDays(r)),[r]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!c)return;const r=e.startOf("week");a(r),e&&!mc(e).isSame(r,"month")&&f("")},g=(e,t)=>{t&&!c||(f(e),o(e))},p=()=>{f(""),o("")};return e.jsxs(kd,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((t,r)=>e.jsx(Od,{children:mc(t).format("ddd")},`week-day-${r}`))),d.map(((t,a)=>e.jsx(Dd,Object.assign({onMouseLeave:p},{children:t.map(((t,a)=>e.jsx(Kd,{date:t,calendarDate:r,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:h,onHover:g},`day-${a}`)))}),a)))]}))},Xd=V.default.forwardRef((({disabledDates:r,onYearMonthDisplayChange:n,onSelect:i,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:h,allowDisabledSelection:g,selectWithinRange:p=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:y=!1},v)=>{const x=t.useRef(),$=t.useRef(void 0);t.useImperativeHandle(v,(()=>({reset(){x.current.resetView()},setCalendarDate(e){x.current.setCalendarDate(e)}})));const w=e=>{const t=e.format("YYYY-MM-DD");x.current.setCalendarDate(t),C(t)},j=e=>{S(e)},C=e=>{i&&i(e)},S=e=>{a&&a(e)},k=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e.jsx(Yd,{children:e.jsx(Sd,Object.assign({ref:x,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:f,maxDate:h,selectWithinRange:p,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||k(e),$.current=e},initialCalendarDate:m},{children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(qd,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,onSelect:w,onHover:j});case"fixed-range":return e.jsx(Hd,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,onSelect:w,onHover:j,numberOfDays:b});case"single":return e.jsx(Ud,{calendarDate:t,disabledDates:r,selectedDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:w,onHover:j});default:return e.jsx(Nd,{calendarDate:t,currentFocus:c,disabledDates:r,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:w,onHover:j})}})(t)}))})})),Gd=V.default.forwardRef(((t,r)=>{var{width:n}=t,i=X(t,["width"]);return e.jsx(rd,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:e.jsx(Xd,Object.assign({ref:r},i))}))})),Zd=K.default.div`
    --vertical-inset: ${Xs["spacing-24"]};
    --horizontal-inset: ${Xs["spacing-32"]};
    --header-bottom-spacing: ${Xs["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
                border-radius: ${Gs.lg};
                overflow: hidden;
            `}}
`,Qd=K.default.div`
    border-radius: ${Gs.md};
    background: ${Vs.bg};
    padding: ${Xs["spacing-16"]} ${Xs["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Jd=t=>{var{children:r}=t,n=X(t,["children"]);const i=n["data-testid"]||"card";return e.jsx(Qd,Object.assign({},n,{"data-testid":i},{children:"string"==typeof r?e.jsx(exports.Typography.BodyBL,{children:r}):r}))},eu=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,tu=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>i.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,ru=i.css`
    animation: ${Ks["duration-150"]} ${Ks["ease-default"]} ${eu};
    width: 100%;
    height: 100%;
    transition: color ${Ks["duration-150"]} ${Ks["ease-default"]};
`,nu=K.default(u.SquareIcon)`
    ${ru}
    color: ${Vs["icon-primary-subtlest"]};
`,iu=K.default(u.SquareFillIcon)`
    ${ru}
    color: ${Vs["icon-disabled-subtle"]};
`,au=K.default(u.SquareTickFillIcon)`
    ${ru}
    color: ${e=>e.$disabled?Vs["icon-disabled-subtle"](e):Vs["icon-selected"](e)};
`,ou=K.default(u.MinusSquareFillIcon)`
    ${ru}
    color: ${e=>e.$disabled?Vs["icon-disabled-subtle"](e):Vs["icon-selected"](e)};
`,su=K.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${nu},
        &:hover
        + ${au},
        &:hover
        + ${ou} {
        color: ${e=>!e.disabled&&Vs["icon-hover"](e)};
    }
`,lu=r=>{var{className:n,checked:i,disabled:a,indeterminate:o,onChange:s,onKeyPress:l,displaySize:c="default"}=r,d=X(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=t.useRef();t.useEffect((()=>{u.current.indeterminate=o}),[o]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(tu,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:c,$disabled:a,$unchecked:!(o||i||a)},{children:[e.jsx(su,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:f,disabled:a},d)),o?e.jsx(ou,{$disabled:a,"data-testid":"indeterminate"}):i?e.jsx(au,{$disabled:a,"data-testid":"checkmark"}):a?e.jsx(iu,{"data-testid":"empty-disabled-checkbox"}):e.jsx(nu,{$disabled:a,"data-testid":"empty-checkbox"})]}))};var cu=Ai,du=/\s/;var uu=function(e){for(var t=e.length;t--&&du.test(e.charAt(t)););return t},fu=/^\s+/;var hu=function(e){return e?e.slice(0,uu(e)+1).replace(fu,""):e},gu=na,pu=Zi,mu=/^[-+]0x[0-9a-f]+$/i,bu=/^0b[01]+$/i,yu=/^0o[0-7]+$/i,vu=parseInt;var xu=function(e){if("number"==typeof e)return e;if(pu(e))return NaN;if(gu(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=gu(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=hu(e);var r=bu.test(e);return r||yu.test(e)?vu(e.slice(2),r?2:8):mu.test(e)?NaN:+e},$u=na,wu=function(){return cu.Date.now()},ju=xu,Cu=Math.max,Su=Math.min;var ku=function(e,t,r){var n,i,a,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,a=i;return n=i=void 0,c=t,o=e.apply(a,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=a}function p(){var e=wu();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?Su(r,a-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,o)}function b(){var e=wu(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(p,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),o}return t=ju(t)||0,$u(r)&&(d=!!r.leading,a=(u="maxWait"in r)?Cu(ju(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?o:m(wu())},b},Ou=Ti(ku),Du=ku,Eu=na;var Tu,Fu,_u=Ti((function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Eu(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Du(e,t,{leading:n,maxWait:t,trailing:i})})),Mu=new Map,Iu=new WeakMap,Au=0,Bu=void 0;function Ru(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Iu.has(e)||(Au+=1,Iu.set(e,Au.toString())),Iu.get(e)):"0"}(e.root):e[t]}`)).toString()}function Pu(e,t,r={},n=Bu){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=Ru(e);let r=Mu.get(t);if(!r){const n=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var r;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(r=n.get(t.target))||r.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:n},Mu.set(t,r)}return r}(r),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),Mu.delete(i))}}function zu({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,f]=V.useState(null),h=V.useRef(),[g,p]=V.useState({inView:!!s,entry:void 0});h.current=c,V.useEffect((()=>{if(o||!u)return;let s;return s=Pu(u,((e,t)=>{p({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,n,a,o,r,l,t]);const m=null==(d=g.entry)?void 0:d.target,b=V.useRef();u||!m||a||o||b.current===m||(b.current=m,p({inView:!!s,entry:void 0}));const y=[f,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(Tu||(Tu={})),function(e){e.roundToNearestHour=(e,t)=>{const r=mc(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=mc(e,n),a=mc(t,n);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(r)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Tu.AM};if(!t)return r;try{if("24hr"===e){const n=Wu(t,e);r.minute=Rc.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Tu.AM,r.hour=0===i?"12":Rc.padValue(i.toString())):(r.period=Tu.PM,r.hour=12===i?i.toString():Rc.padValue((i-12).toString()))}else{const n=Wu(t,e);r.hour=Rc.padValue(n.hour),r.minute=Rc.padValue(n.minute),r.period="am"===n.period.toLowerCase()?Tu.AM:Tu.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Rc.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Rc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Rc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Rc.padValue(n.toString()):13===n?Rc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Tu.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Rc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=Wu(e,t),n=Rc.padValue(r.hour);let i=`${n}:${Rc.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let a=n;return"pm"===r&&a<12&&(a+=12),"am"===r&&12===a&&(a=0),Hu(a,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const a=[];let o=0,s=1440-t;for(n&&(o=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const n=o%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Hu(e,n,t);a.push(r)}else{const t=Hu(e,n);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const a=parseInt(n[3]||"0",10);let o=n[4];if(void 0===n[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),Hu(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Hu(i,a,o)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",a=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<a)a=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let a=n;return"pm"===r&&12!==a&&(a+=12),"am"===r&&12===a&&(a=0),60*a+i}}(Fu||(Fu={}));const Lu=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Nu=e=>{const t=parseInt(e);return t>=0&&t<=59},Wu=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),a=r[1].substring(2);if(!Lu(r[0],t)||!Nu(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Lu(r[0],t)||!Nu(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Hu=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Yu=K.default.div`
    width: 100%;
`,Vu=K.default.div`
    ${Us["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${Xs["spacing-8"]} ${Xs["spacing-16"]};
    border-radius: ${Gs.sm};
    color: ${Vs["text-primary"]};
    border: ${qs["width-010"]} ${qs.solid};
    border-color: ${Vs["border-primary"]};
    background-color: ${Vs.bg};

    ${Qs.MaxWidth.sm} {
        padding: ${Xs["spacing-16"]};
    }

    ${e=>{if(e.$warn)return i.css`
                color: ${Vs["text-error"]};
                border-color: ${Vs["border-error"]};
            `}}
`,Uu=K.default(Vu)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Ku=K.default(Vu)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:a}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${a?Vs["border-error"]:Vs["border-primary-subtle"]} r g b / 50%);

            ${Qs.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,qu=K.default.div`
    font-weight: ${Us.Spec["weight-bold"]};
    margin-left: ${Xs["spacing-8"]};
    margin-right: ${Xs["spacing-24"]};

    ${Qs.MaxWidth.sm} {
        margin-right: ${Xs["spacing-48"]};
    }
`,Xu=K.default.div`
    font-weight: ${Us.Spec["weight-semibold"]};
    margin-left: auto;
`,Gu=K.default(u.ClockIcon)`
    color: ${e=>e.$warn?Vs["icon-error"]:Vs["icon-primary"]};
`,Zu=t=>r=>{switch(t){case"maintenance":{const t=r;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=r,n=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:a,height:o}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Zs["sm-max"]({theme:t})}px) 400px, (max-width: ${Zs["lg-max"]({theme:t})}px) 800px, 1200px`,width:a,height:o}};const{imgAttributeHelper:Qu}=exports.ErrorDisplayHelper,Ju={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},ef={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},tf=Object.assign(Object.assign({},Ju),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),rf=Object.assign(Object.assign({},Ju),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),nf=(e,t)=>new Map([["400",{img:Qu(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Qu(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Qu(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Qu(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Qu(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Qu(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Qu(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Qu(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Qu(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Qu(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Qu(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Qu(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Qu(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Zu("inactivity")}],["maintenance",{img:Qu(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Zu("maintenance")}],["no-item-found",{img:Qu(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Qu(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Qu(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Qu(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Qu(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Qu(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),af=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,of=K.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${Qs.MaxWidth.sm} {
        width: 320px;
    }

    ${Qs.MaxWidth.xs} {
        width: 288px;
    }

    ${Qs.MaxWidth.xxs} {
        width: 240px;
    }
`,sf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,lf=K.default(exports.Typography.HeaderMD)`
    margin: ${Xs["spacing-32"]} 0 ${Xs["spacing-16"]};
    text-align: center;
`,cf=K.default.div`
    color: ${Vs.text};
    text-align: center;

    ${Ml({textSize:"body-baseline"})}
`,df=K.default(Ol.Default)`
    margin: ${Xs["spacing-32"]} auto 0;
    width: 21rem;

    ${Qs.MaxWidth.sm} {
        width: 100%;
    }
`,uf=t=>{var{type:r,img:n,title:a,description:o,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=X(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t,r)=>{switch(t){case"bookingsg":return nf(ef,r).get(e);case"ccube":return nf(tf,r).get(e);case"mylegacy":return nf(rf,r).get(e);default:return nf(Ju,r).get(e)}})(r,d||(f||Js).resourceScheme,f),g=u["data-testid"]||"error-display",p=()=>{switch(r){case"maintenance":{const e=l;return l&&e.dateString?h.renderDescription(e):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?h.renderDescription(e):o||void 0}default:return o||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),n&&{img:n}),a&&{title:a}),p()&&{description:p()});return e.jsxs(af,Object.assign({},u,{"data-testid":g},{children:[e.jsx(of,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e.jsxs(sf,{children:[m.title&&("string"==typeof m.title?e.jsx(lf,Object.assign({"data-testid":`${g}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&e.jsx(cf,Object.assign({"data-testid":`${g}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(df,Object.assign({},t))})()]}))},ff=i.css`
    outline-offset: -1px;
    outline: ${qs["width-020"]} ${qs.solid} ${Vs["border-focus"]};
`,hf=i.css`
    outline-color: ${Vs["border-focus"]};
`,gf=i.css`
    outline-color: ${Vs["border-disabled"]};
`,pf=i.css`
    outline-color: ${Vs["border-error-focus"]};
`,mf=K.default.div`
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    background: ${Vs.bg};

    :focus-within {
        ${ff}
    }
    ${e=>e.$focused&&ff}

    ${e=>e.$readOnly?i.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${hf}
                }
                ${e.$focused&&hf}
            `:e.$disabled?i.css`
                background: ${Vs["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${gf}
                }
                ${e.$focused&&gf}
            `:e.$error?i.css`
                border-color: ${Vs["border-error"]};

                :focus-within {
                    ${pf}
                }
                ${e.$focused&&pf}
            `:void 0}
`,bf=K.default(mf)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Xs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,yf=K.default.input`
    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}
    color: ${Vs.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Vs["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Vs["text-subtler"]};
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
`,vf=K.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${qs["width-010"]} ${qs.solid}
            ${Vs["border-focus"]};
        border-radius: ${Gs.sm};
    }
`,xf=e=>i.css`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,$f=Vs.border,wf=Vs.text,jf=K.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${qs["width-010"]} ${qs.solid} ${$f};
    border-radius: ${Gs.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Cf=K.default.div`
    flex: 1;
`,Sf=K.default.table`
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
`,kf=K.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${qs["width-010"]} ${qs.solid} ${$f}`:"none"};
        }
    }
`,Of=K.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,Df=K.default(vf)`
    ${Us["body-md-semibold"]}
    cursor: pointer;
    color: ${Vs["text-primary"]};
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Vs["text-hover"]};
    }
`,Ef=K.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&i.css`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Gs.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${qs["width-010"]} ${qs.solid} ${$f};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${qs["width-010"]} ${qs.solid} ${$f};
    border-radius: 0 0 ${Gs.sm} ${Gs.sm};
    background-color: ${Vs["bg-selected"]};
    transition: all 300ms ease;
`,Tf=K.default.tr`
    background-color: ${Vs["bg-stronger"]};
    height: 6rem;
    border-bottom: ${qs["width-010"]} ${qs.solid} ${$f};
`,Ff=K.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${wf};
    border-bottom: ${qs["width-010"]} ${qs.solid} ${$f};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,_f=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${wf};
        margin-left: 0.5rem;
    }
`,Mf=K.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${Vs["bg-selected"]};
            `:e.$alternating?i.css`
                ${Vs["bg-strong"]};
            `:i.css`
                ${Vs.bg};
            `};
    border-top: ${qs["width-010"]} ${qs.solid} ${$f};
    &:hover {
        ${e=>{if(e.$isSelectable)return i.css`
                    background-color: ${Vs["bg-hover-strong"]};
                `}};
    }
`,If=K.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${wf};
    border-bottom: ${qs["width-010"]} ${qs.solid} ${$f};
`,Af=K.default(exports.Typography.BodyBL)`
    ${xf(2)}
    text-overflow: ellipsis;
`,Bf=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Rf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,Pf=K.default(exports.Typography.HeaderSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,zf=K.default.td`
    padding: 4rem 0;
`,Lf=e=>"small"===e?2.5:3,Nf=K.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Lf(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Wf=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Xs["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Lf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Gs.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Vs["border-focus"]};
    }
`,Hf=K.default.button`
    ${Wf}
    cursor: pointer;
`,Yf=K.default.div`
    ${Wf}
`,Vf=i.keyframes`
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
`,Uf=K.default.div`
    position: relative;
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    background: ${Vs.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Vs["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Vs["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?i.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:i.css`
                animation: ${Vf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${Vs["bg-disabled"]};

                ${Hf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Vs.border};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${Hf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?i.css`
                border-color: ${Vs["border-error"]};

                :focus-within {
                    border-color: ${Vs["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Vs["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;K.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ks["duration-250"]} ${Ks["ease-default"]};
    margin-left: ${Xs["spacing-16"]};
`,K.default(f.ChevronDownIcon)`
    color: ${Vs.icon};
`;const Kf=K.default.div`
    height: 1px;
    background: ${Vs.border};
    margin: 0 ${Xs["spacing-8"]};
`,qf=K.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${Vs["text-disabled"]};
            `}}
`,Xf=K.default.div`
    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${xf(1)}
                `}}
    overflow: hidden;
`,Gf=K.default(Xf)`
    color: ${Vs["text-subtler"]};
`,Zf=({children:r,show:n,error:i,disabled:a,testId:o,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef();return zc("mousedown",(function(e){if(!a){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e.jsx(Nf,Object.assign({className:c,$variant:d},{children:e.jsx(Uf,Object.assign({ref:u,error:i&&!n,disabled:a,$readOnly:l,expanded:n,"data-testid":o},{children:r}))}))};var Qf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Qf||(Qf={}));const Jf=()=>{const[e,r]=t.useState(void 0),n=p.useFloatingTree();return t.useEffect((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(Qf.Change,e),n.events.emit(Qf.Ready),()=>n.events.off(Qf.Change,e)}),[n]),e},eh=K.default.div`
    display: flex;
    flex-direction: column;
`,th=e=>"right"===e?"bottom-end":"bottom-start",rh=({enabled:r,isOpen:n,onOpen:a,onClose:o,onDismiss:s,renderElement:l,renderDropdown:c,customZIndex:d,clickToToggle:u=!1,offset:f=0,alignment:h="left",fitAvailableHeight:g})=>{var m;const b=i.useTheme(),y=Zs["sm-max"]({theme:b}),v=t.useRef(null),x=t.useRef(null),{width:$}=qe({targetRef:v,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:j,floatingStyles:C,context:S}=p.useFloating({open:n,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!n?null==a||a():!e&&n&&(null==o||o(r))},whileElementsMounted:p.autoUpdate,placement:th(h),middleware:[p.offset(f),p.flip(),p.shift({limiter:p.limitShift()}),p.size({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),w]}),k=Jf(),{isMounted:O,styles:D}=p.useTransitionStyles(S,{initial:{opacity:0},open:{opacity:1},duration:300}),E=p.useClick(S,{enabled:r,toggle:u}),T=p.useDismiss(S,{enabled:r}),{getReferenceProps:F,getFloatingProps:_}=p.useInteractions([E,T]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{v.current=e,j.setReference(e)}},F(),{children:l()})),O&&e.jsx(p.FloatingPortal,{children:e.jsx(p.FloatingFocusManager,Object.assign({context:S,modal:!1,initialFocus:x,returnFocus:!1},{children:e.jsx("div",Object.assign({ref:j.setFloating,style:Object.assign(Object.assign({},C),{zIndex:null!==(m=null!=d?d:k)&&void 0!==m?m:50})},_(),{children:e.jsx(eh,Object.assign({ref:x,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:c({elementWidth:$})}))}))}))})]})},nh=K.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ih=K.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${ah}, ${ch} {
                    color: ${Vs["text-subtler"]};
                }
            `}}
`,ah=K.default(yf)`
    background: transparent;
    text-align: center;
`,oh=K.default(ah)`
    width: 2rem;
    margin-right: ${Xs["spacing-4"]};
`,sh=K.default(ah)`
    width: 2.5rem;
`,lh=K.default(ah)`
    width: 3rem;
    margin-left: ${Xs["spacing-4"]};
`,ch=K.default.span`
    ${Us["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return i.css`
                color: ${Vs.text};
            `}}
`,dh=K.default.div`
    ${Us["body-baseline-regular"]}
    background-color: ${Vs.bg};
    color: ${Vs["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i.css`
                background-color: ${Vs["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?i.css`
                display: none;
            `:void 0}
`;mc.extend(yc);const uh=V.default.forwardRef((({disabled:r,readOnly:n,names:i,value:a,focused:o,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:f,hideInputKeyboard:h},g)=>{const p=h?"none":"numeric",[m,b,y]=Yc(""),[v,x,$]=Yc(""),[w,j,C]=Yc(""),[S,k]=t.useState("none"),[O,D]=t.useState(!1),E=t.useRef(null),T=t.useRef(null),F=t.useRef(null),_=t.useRef(null),[M,I,A]=N(s);t.useEffect((()=>{const[e="",t="",r=""]=N(a);b(e),x(t),j(r),e||t||r||!E.current.contains(document.activeElement)||T.current.focus()}),[a]),t.useEffect((()=>{o||k("none"),o&&(D(!0),E.current.contains(document.activeElement)||T.current.focus())}),[o]),t.useImperativeHandle(g,(()=>({ref:E,resetPlaceholder(){D(!1)},resetInput(){const[e="",t="",r=""]=N(a);b(e),x(t),j(r)}})),[a]);const B=e=>{var t;e.preventDefault(),null===(t=T.current)||void 0===t||t.focus()},R=e=>{e.target.select();const t=e.target.name;k(t)},P=e=>{const[t,r,n]=i,a={[t]:y.current,[r]:$.current,[n]:C.current},o=e.target.name,s=a[o],l=o!==n?Rc.padValue(s,!0):s;switch(o){case t:a[t]=l,b(l);break;case r:a[r]=l,x(l)}const c=`${a[n]}-${a[r]}-${a[t]}`,u=mc(c,"YYYY-MM-DD",!0).isValid(),h=!a[t]&&!a[r]&&!a[n];u&&s!==l&&d(c),E.current.contains(e.relatedTarget)||(k("none"),null==f||f(h||u))},z=e=>{if(s)return;const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,""),n={day:m,month:v,year:w};switch(t){case i[0]:n.day=r,b(r),2===r.length&&F.current.focus();break;case i[1]:n.month=r,x(r),2===r.length&&_.current.focus();break;case i[2]:n.year=r,j(r)}if(!n.day&&!n.month&&!n.year)return void d("");const a=`${n.year}-${n.month}-${n.day}`;mc(a,"YYYY-MM-DD",!0).isValid()&&d(a)},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(S===i[1]&&0===v.length&&T.current.focus(),S===i[2]&&0===w.length&&F.current.focus())};function N(e){if(e){const t=mc(new Date(e));return t.isValid()?[Rc.padValue(t.date().toString()),Rc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(nh,Object.assign({role:"group","aria-label":c,onClick:()=>{r||n||(D(!0),E.current.contains(document.activeElement)||T.current.focus())},onFocus:e=>{r||(D(!0),o||null==u||u(e))}},{children:[e.jsxs(ih,Object.assign({ref:E,$hover:!!s},{children:[e.jsx(oh,{ref:T,name:i[0],maxLength:2,value:null!=M?M:m,onFocus:R,onBlur:P,onChange:z,type:"text",inputMode:p,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:S!==i[0]||n?"DD":""}),e.jsx(ch,Object.assign({$inactive:0===m.length},{children:"/"})),e.jsx(sh,{ref:F,name:i[1],maxLength:2,value:null!=I?I:v,onFocus:R,onBlur:P,onChange:z,onKeyDown:L,type:"text",inputMode:p,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:S!==i[1]||n?"MM":""}),e.jsx(ch,Object.assign({$inactive:0===v.length},{children:"/"})),e.jsx(lh,{ref:_,name:i[2],maxLength:4,value:null!=A?A:w,onFocus:R,onBlur:P,onChange:z,onKeyDown:L,type:"text",inputMode:p,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:S!==i[2]||n?"YYYY":""})]})),(()=>{if(!a&&!n&&l)return e.jsx(dh,Object.assign({$hide:O,$disabled:r,onMouseDown:B},{children:l}))})()]}))})),fh=K.default(bf)`
    height: 3rem;
`,hh=r=>{var{minDate:n,maxDate:i,disabled:a,disabledDates:o,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:g=!0,readOnly:p,id:m,allowDisabledSelection:b,zIndex:y}=r,v=X(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,$]=t.useState(Ac.sanitizeInput(c)),[w,j]=t.useState(Ac.sanitizeInput(c)),[C,S]=t.useState(void 0),[k,O]=t.useState(!1),[D,E]=t.useState(!1),T=t.useRef(null),F=t.useRef();t.useEffect((()=>{const e=Ac.sanitizeInput(c);$(e),j(e)}),[c]);const _=e=>{!b&&Ac.isDateDisabled(e,{disabledDates:o,minDate:n,maxDate:i})||(j(e),g||(P(e),$(e),e&&O(!1)))},M=e=>{j(e),g||(P(e),$(e),e&&(T.current.focus(),O(!1)),C&&S(void 0))},I=()=>{p||a||(O(!0),D||(E(!0),u&&u()))},A=e=>{!D||k||T.current.contains(e.relatedTarget)||(F.current.resetInput(),j(x),E(!1),z())},B=e=>{S(e)},R=e=>{switch(e){case"reset":j(x);break;case"confirmed":$(w),P(w)}T.current.focus(),O(!1)},P=e=>{d&&d(e)},z=()=>{f&&f()};return e.jsx(rh,{enabled:!p&&!a,isOpen:k,renderElement:()=>e.jsx(fh,Object.assign({tabIndex:-1,ref:T,onBlur:A,onFocus:I,$disabled:a,$readOnly:p,$focused:D,$error:s,id:m,"data-testid":v["data-testid"]},v,{children:e.jsx(uh,{ref:F,disabled:a,onChange:_,readOnly:p,focused:k,names:["start-day","start-month","start-year"],value:w,hoverValue:C,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(Gd,{variant:"single",initialCalendarDate:w,withButton:g,value:w,disabledDates:o,minDate:n,maxDate:i,allowDisabledSelection:b,onHover:B,onSelect:M,onDismiss:R,onYearMonthDisplayChange:h,width:t}),onClose:()=>{F.current.resetInput(),j(x),O(!1),E(!1),z()},onDismiss:()=>{F.current.resetInput(),T.current.focus(),j(x),O(!1)},customZIndex:y,offset:16})},gh=K.default.button`
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
                    background-color: ${Vs.bg};
                    border: ${qs["width-010"]} ${qs.solid}
                        ${Vs["border-primary"]};
                    color: ${Vs["text-primary"]};

                    :hover {
                        background-color: ${Vs["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${Vs.bg};
                    border: ${qs["width-010"]} ${qs.solid}
                        ${Vs.border};
                    color: ${Vs["text-primary"]};

                    :hover {
                        background-color: ${Vs["bg-hover-neutral"]};
                    }
                `;default:return i.css`
                    background-color: ${Vs["bg-primary"]};
                    border: none;
                    color: ${Vs["text-inverse"]};

                    :hover {
                        background-color: ${Vs["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Vs["bg-disabled"]};
        border: ${qs["width-010"]} ${qs.solid}
            ${Vs["border-disabled"]};
        color: ${Vs["text-disabled"]};
        cursor: not-allowed;
    }
`,ph=V.default.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(gh,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:i},l,{children:a}))})),mh=K.default(ph)`
    margin: ${Xs["spacing-8"]};
`,bh=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Vs["bg-strong"]};
    border-radius: ${Gs.sm};
`,yh=K.default(Ol.Default)`
    color: ${e=>e.$enableDateClick?Vs["text-primary"]:Vs.text};
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
`,vh=r=>{var{selectedDate:n,minDate:i,maxDate:a,loading:o,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=r,f=X(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=Ic.toDayjs(n),g=Ic.toDayjs(n).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),p=Ic.isSame(n,mc())&&l?"Today":h.format(s?"ddd":"dddd"),[m,b]=t.useState(!1),y=e=>{u&&u(e),b(!m)},v=()=>{b(!1),c(n)},x=()=>{b(!1),d(n)};return e.jsx(rh,{enabled:!o,isOpen:m,renderElement:()=>e.jsxs(bh,Object.assign({},f,{children:[e.jsx(mh,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:o||!!i&&(Dc.isDisabledDay(h,void 0,i)||Ic.isSame(h,i)),"aria-label":"Previous day",onClick:v,styleType:"light",sizeType:"small"},{children:e.jsx(id,{})})),e.jsx(yh,Object.assign({onClick:()=>!!u&&!o&&b(!m),$enableDateClick:!!u&&!o,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||o},{children:`${g}, ${p}`})),e.jsx(mh,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:o||!!a&&(Dc.isDisabledDay(h,void 0,void 0,a)||Ic.isSame(h,a)),"aria-label":"Next day",onClick:x,styleType:"light",sizeType:"small"},{children:e.jsx(ad,{})}))]})),renderDropdown:({elementWidth:t})=>e.jsx(Gd,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:a,onSelect:y,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},xh=K.default.div`
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
                        100% - ${Us.Spec["body-size-baseline"]} -
                            ${Xs["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Xs["spacing-8"]};
                }
            `}}
`,$h=K.default.div`
    width: 100%; // Force next flex item to break to next line
`,wh=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,jh=K.default(u.ArrowRightIcon)`
    color: ${Vs.icon};
    width: ${Us.Spec["body-size-baseline"]};
    height: ${Us.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Xs["spacing-8"]};
    align-self: center;
`,Ch=K.default.div`
    position: absolute;
    background: ${e=>e.$error?Vs["border-error-focus-strong"]:Vs["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Xs["spacing-8"]} - (${Us.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Ks["duration-350"]} ${Ks["ease-standard"]},
        opacity ${Ks["duration-350"]} ${Ks["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return i.css`
                    opacity: 1;
                `;case"end":return i.css`
                    left: calc(50% + ${Xs["spacing-16"]});
                    opacity: 1;
                `;case"none":return i.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return i.css`
                display: none;
            `}}
`,Sh=({children:t,currentActive:r,error:n,className:i,wrap:a})=>{const[o,s]=t;return e.jsxs(xh,Object.assign({className:i,$wrap:a},{children:[e.jsx(wh,Object.assign({"data-id":"range-container-elem1-container"},{children:o})),e.jsx(jh,{}),a&&e.jsx($h,{}),e.jsx(wh,Object.assign({"data-id":"range-container-elem2-container"},{children:s})),e.jsx(Ch,{"data-id":"range-container-indicator",$position:r,$error:n,$wrap:a})]}))},kh=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Oh=K.default(bf)`
    ${e=>e.$wrap&&i.css`
            padding: ${Xs["spacing-12"]} ${Xs["spacing-16"]};
        `}
`,Dh=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,Eh={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Th=r=>{var{minDate:n,maxDate:i,disabled:a,disabledDates:o,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:g,withButton:p=!0,variant:m="range",numberOfDays:b=7,readOnly:y,id:v,allowDisabledSelection:x,zIndex:$}=r,w=X(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[j,C]=t.useState(),[S,k]=t.useState(void 0),[O,D]=t.useState(!1),[E,T]=t.useState(!1),F="week"===m,_="fixed-range"===m,[{selectedStart:M,selectedEnd:I,currentFocus:A,calendarOpen:B,isStartDirty:R,isEndDirty:P,focused:z},L]=(({initialState:e,reducers:r,name:n,debug:i})=>{const[a,o]=t.useReducer(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(r).map((e=>[e,t=>{i&&kh(n,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Eh,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:F?"none":_?"start":t,calendarOpen:!y,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),N=t.useRef(!1),W=t.useRef(),H=t.useRef(),Y=t.useRef(),V=t.useRef(),U=(({maxWidth:e,targetRef:r})=>{const[n,i]=t.useState(!1);return qe({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),n})({maxWidth:320,targetRef:W});t.useEffect((()=>{L.resetRange({start:Ac.sanitizeInput(c),end:Ac.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?C(M):"end"===A&&C(I)}),[A]);const K=e=>{"Enter"!==e.code||p||(M&&I?(L.done({start:M,end:I}),null==u||u(M,I)):(L.dismiss(),W.current.focus(),Y.current.resetPlaceholder(),V.current.resetPlaceholder()))},q=e=>{if(le(e))return void(N.current=!0);if(L.changeStart(e),H.current.setCalendarDate(e),N.current=!1,!e)return void(p||I||!P||(L.resetRange({start:"",end:""}),null==u||u("","")));if(!I)return void L.focus("end");if(mc(e).isAfter(I,"day"))L.reselectEnd();else{if(P)return p?void 0:(L.done({start:e,end:I}),void(null==u||u(e,I)));L.focus("end")}},G=e=>{if(le(e))return void(N.current=!0);if(mc(e).isBefore(M,"day"))return L.changeStart(e),H.current.setCalendarDate(e),void L.reselectEnd();if(L.changeEnd(e),H.current.setCalendarDate(e),e){if(M)return p?void 0:(L.done({start:M,end:e}),void(null==u||u(M,e)));L.focus("start")}else p||M||!R||(L.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{if(le(e))return void(N.current=!0);if(L.changeStart(e),H.current.setCalendarDate(e),N.current=!1,!e)return void(p?L.changeEnd(""):(L.resetRange({start:"",end:""}),null==u||u("","")));const t=mc(e).format("YYYY-MM-DD"),r=mc(t).add(b-1,"day").format("YYYY-MM-DD");return L.changeStart(t),L.changeEnd(r),N.current=!1,p?void 0:(L.done({start:t,end:r}),void(null==u||u(t,r)))},Q=()=>{y||a||z||(L.focus("start"),null==f||f())},J=e=>{!z||B||W.current.contains(e.relatedTarget)||(L.blur(),D(!1),T(!1),Y.current.resetPlaceholder(),V.current.resetPlaceholder(),null==h||h())},ee=e=>t=>{t.stopPropagation(),y||(L.focus(e),te(),re(),z||null==f||f())},te=()=>{if(F){const e=Ic.toDayjs(M).startOf("week").format("YYYY-MM-DD");D(!0),T(!0),C(e)}},re=()=>{_&&(T(!0),C(M))},ne=e=>{e&&!N.current||(L.resetStart(),Y.current.resetInput())},ie=e=>{e&&!N.current||(L.resetEnd(),V.current.resetInput())},ae=e=>{switch(m){case"week":(e=>{const t=mc(e).startOf("week").format("YYYY-MM-DD"),r=mc(e).endOf("week").format("YYYY-MM-DD");if(L.changeStart(t),L.changeEnd(r),N.current=!1,!p)L.done({start:t,end:r}),null==u||u(t,r)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?q(e):"end"===A&&G(e)}},oe=e=>{switch(W.current.focus(),e){case"reset":L.cancel();break;case"confirmed":L.done({start:M,end:I}),null==u||u(M,I)}},se=e=>{k(e)},le=e=>!x&&e&&Ac.isDateDisabled(e,{disabledDates:o,minDate:n,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===A?S:void 0,end:"end"===A?S:void 0};break;case"week":if(!S)return;t={start:mc(S).startOf("week").format("YYYY-MM-DD"),end:mc(S).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!S)return;t={start:mc(S).format("YYYY-MM-DD"),end:mc(S).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(rh,{enabled:!y&&!a,isOpen:B,onClose:()=>{L.blur(),D(!1),T(!1),Y.current.resetPlaceholder(),V.current.resetPlaceholder(),null==h||h()},onDismiss:()=>{L.dismiss(),W.current.focus(),Y.current.resetPlaceholder(),V.current.resetPlaceholder()},renderElement:()=>e.jsx(Oh,Object.assign({ref:W,tabIndex:-1,onFocus:Q,onBlur:J,$focused:z,$disabled:a,$readOnly:y,$error:s,$wrap:U,id:v,"data-testid":w["data-testid"],onKeyDown:K},w,{children:e.jsxs(Sh,Object.assign({currentActive:A,wrap:U,error:s},{children:[e.jsx(Dh,Object.assign({$wrap:U},{children:e.jsx(uh,{ref:Y,placeholder:"From",names:["start-day","start-month","start-year"],value:M,disabled:a,readOnly:O||y,focused:"start"===A,hoverValue:ce("start"),onChange:_?Z:q,onFocus:ee("start"),onBlur:ne,hideInputKeyboard:l})})),e.jsx(Dh,Object.assign({$wrap:U},{children:e.jsx(uh,{ref:V,placeholder:"To",names:["end-day","end-month","end-year"],value:I,disabled:a,readOnly:E||y,focused:"end"===A,hoverValue:ce("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})}))]}))})),renderDropdown:({elementWidth:t})=>e.jsx(Gd,{ref:H,variant:m,initialCalendarDate:j,withButton:p,value:M,endValue:I,selectWithinRange:R||P,currentFocus:A,disabledDates:o,minDate:n,maxDate:i,allowDisabledSelection:x,onSelect:ae,onDismiss:oe,onHover:se,onYearMonthDisplayChange:g,numberOfDays:b,width:t}),customZIndex:$,offset:16})},Fh=K.default.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:a,$lgStart:o,$lgSpan:s,$mdStart:l,$mdSpan:c,$smStart:d,$smSpan:u,$xsStart:f,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Es.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${a||1};
            }

            ${Es.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${s||1};
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
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,_h=V.default.forwardRef(((t,r)=>{const n=i.useTheme(),{xxlCols:a,xlCols:o,lgCols:s,mdCols:l,smCols:c,xsCols:d,xxsCols:u}=t,f=X(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e.jsx(Fh,Object.assign({ref:r},(()=>{const e=Os["xxl-column"]({theme:n}),t=Os["xl-column"]({theme:n}),r=Os["lg-column"]({theme:n}),i=Os["md-column"]({theme:n}),f=Os["sm-column"]({theme:n}),g=Os["xs-column"]({theme:n}),p=Os["xxs-column"]({theme:n}),m=h(a||o||s||l||c||d||u,e,"xxl"),b=h(o||s||l||c||d||u,t,"xl"),y=h(s||l||c||d||u,r,"lg"),v=h(l||c||d||u,i,"md"),x=h(c||d||u,f,"sm"),$=h(d||u,g,"xs"),w=h(u,p,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:v.start,$mdSpan:v.span,$smStart:x.start,$smSpan:x.span,$xsStart:$.start,$xsSpan:$.span,$xxsStart:w.start,$xxsSpan:w.span}})(),f))})),Mh={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ih=e=>Object.keys(Mh).reduce(((t,r)=>{const n=Mh[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ah={MaxWidth:Ih("max-width"),MinWidth:Ih("min-width")},Bh=Mh,Rh=K.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Ah.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${a||1};
            }

            ${Ah.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,Ph=V.default.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:a}=t,o=X(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Rh,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=zh(a||i||n),o=zh(e),s=zh(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),zh=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Lh=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||Vs.border(e);const r=encodeURIComponent(t),n=e.$thickness||1,a=n+1;return i.css`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${a}" stroke-dasharray="4 4" /></svg>');
    `},Nh=K.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${Lh}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Vs.border};
                `}}}
`,Wh=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:a,className:o,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:f,xxlCols:h,mobileCols:g,tabletCols:p,desktopCols:m}=t,b=X(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const y=void 0!==g||void 0!==p||void 0!==m;switch(i){case"flex":return e.jsx(Nh,Object.assign({className:o,$thickness:r,$lineStyle:n,$color:a},b));case"grid":return y?e.jsx(Ph,Object.assign({className:o,mobileCols:g,tabletCols:p,desktopCols:m},b,{children:e.jsx(Nh,{$thickness:r,$lineStyle:n,$color:a})})):e.jsx(_h,Object.assign({className:o},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,a=f||i;return{xxlCols:h||a,xlCols:a,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e.jsx(Nh,{$thickness:r,$lineStyle:n,$color:a})}))}},Hh=K.default.div`
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
`,Yh=K.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Vs["overlay-subtle"]:Vs["overlay-strong"]};
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
`,Vh=({show:r=!1,rootId:n,onOverlayClick:i,children:a,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[f,h]=t.useState(null),[g,m]=t.useState(),[b]=t.useState((()=>Bc.generate())),y=p.useFloatingNodeId(),v=t.useRef(),x=t.useRef(null),$=a&&V.default.cloneElement(a,{ref:x}),w=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",j=null!=d?d:g?99999:99998;(e=>{const r=p.useFloatingTree();t.useEffect((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Qf.Change,t)}),[r,e]),t.useEffect((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Qf.Change,t)};return null==r||r.events.on(Qf.Ready,t),()=>null==r?void 0:r.events.off(Qf.Ready,t)}),[r,e])})(j),t.useEffect((()=>(O(),h(S()),()=>{F(),E().length<1&&D("remove")})),[]),t.useEffect((()=>{if(r){const e=k();C(e),T();const t=setTimeout((()=>{D("add")}),200);return()=>clearTimeout(t)}{F();const e=setTimeout((()=>{E().length<1&&D("remove")}),200);return()=>clearTimeout(e)}}),[r]);const C=e=>{v.current=e,m(e)},S=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>E().length>0,O=()=>{if(!document.getElementById(Kh)){const e=document.createElement("style");e.id=Kh;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${qh} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${qh}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},D=e=>{const t=document.body.classList.contains(qh);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(qh):document.body.classList.add(qh)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},T=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},F=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},_=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||i&&c&&(e.preventDefault(),i())};return f?U.default.createPortal(e.jsx(Hh,Object.assign({id:w,"data-testid":w,$show:r,$zIndex:j},{children:a&&e.jsx(p.FloatingNode,Object.assign({id:y},{children:e.jsx(Yh,Object.assign({"data-testid":"overlay-wrapper",$show:r,$stacked:g,$backgroundBlur:s,$disableTransition:l,onClick:_},{children:$}))}))})),f):null},Uh=t=>e.jsx(p.FloatingTree,{children:e.jsx(Vh,Object.assign({},t))}),Kh="lifesg-ds-overlay-stylesheet",qh="lifesg-ds-overlay-open",Xh=K.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Vs.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${Vs.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?i.css`
            right: 0;
            transition: all ${Ks["duration-800"]} ${Ks["ease-exit"]};
        `:i.css`
        right: -100%;
        transition: all ${Ks["duration-800"]} ${Ks["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${Gs.md};
    border-bottom-left-radius: ${Gs.md};
    overflow: hidden;

    ${Qs.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${Qs.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Gh=K.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${Xs["spacing-16"]};
    padding: ${Xs["spacing-32"]} ${Xs["spacing-16"]}
        ${Xs["spacing-16"]};
    background-color: ${Vs.bg};
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};

    ${Qs.MaxWidth.lg} {
        gap: ${Xs["spacing-8"]};
        padding: ${Xs["spacing-32"]} ${Xs["spacing-20"]}
            ${Xs["spacing-16"]};
    }
`,Zh=K.default(tl)`
    color: ${Vs.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${Vs["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Qh=K.default(exports.Typography.HeaderMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Jh=K.default.div`
    flex: 1;
    overflow-y: auto;
`,eg=({className:t,progress:r,color:n,"data-testid":i})=>e.jsx(tg,Object.assign({className:t,$innerWidth:r,$color:n,"data-testid":i},{children:e.jsx("progress",{value:100*r,max:100})})),tg=K.default.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Vs["icon-primary-subtle"](e),i.css`
            border: ${qs["width-010"]} ${qs.solid} ${r};
            border-radius: ${Gs.sm};

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
`,rg=K.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Qs.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ng=r=>{var{id:n="modal",show:i,animationFrom:a="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=r,f=X(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,g]=t.useState(),[p,m]=t.useState();t.useEffect((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;g(e)},y=()=>{const e=.01*window.visualViewport.height;g(e),m(window.visualViewport.offsetTop)};return e.jsx(Uh,Object.assign({"data-testid":`${n}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c},{children:e.jsx(rg,Object.assign({show:i,animationFrom:a,"data-testid":n,verticalHeight:h,offsetTop:p},f,{children:o}))}))},ig=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Vs.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Qs.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ag=K.default(tl)`
    position: absolute;
    top: var(--close-button-top-inset, ${Xs["spacing-16"]});
    right: var(--close-button-right-inset, ${Xs["spacing-16"]});
    padding: 0;
    color: ${Vs.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Qs.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Xs["spacing-20"]});
    }
`,og=t=>{var{id:r="modal-box",children:n,onClose:i,showCloseButton:a=!0}=t,o=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(ig,Object.assign({"data-testid":r},o,{onClick:e=>{e.stopPropagation()}},{children:[a&&e.jsx(ag,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:e.jsx(m.CrossIcon,{})})),n]}))},sg=Object.assign(ng,{Box:og}),lg=i.css`
    ${e=>`\n        ${Qs.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Zs["sm-max"](e)}px)\n    `}
`,cg=i.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Zs["sm-max"](e)}px)\n    `}
`,dg=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>i.css`
            ${qs["dashed-default"]({radius:Gs.sm,thickness:qs["width-040"],colour:e.$disabled?Vs["border-disabled"]:Vs.border})}

            background-color: ${e.$disabled?Vs["bg-disabled"]:Vs.bg};
        `}
    height: 14.125rem;
`,ug=K.default(Ol.Default)`
    width: fit-content;
    margin: 0 ${Xs["spacing-20"]};

    :disabled {
        border-color: ${Vs["border-strong"]};
    }
`,fg=K.default(ph)`
    position: absolute;
    top: ${Xs["spacing-16"]};
    right: ${Xs["spacing-16"]};

    :disabled {
        border-color: ${Vs["border-strong"]};
    }
`,hg=K.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Xs["spacing-16"]}) * 2);
    height: 100%;
`,gg=K.default.div`
    background: ${Vs["bg-primary-subtlest"]};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    margin: 0 ${Xs["spacing-20"]};
    padding: ${Xs["spacing-16"]};
    display: flex;
    gap: ${Xs["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,pg=K.default(exports.Typography.BodySM)`
    margin-top: ${Xs["spacing-16"]};
`,mg=K.default(sg)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,bg=K.default.div`
    width: 100%;
    margin: auto;
    padding: ${Xs["layout-xxl"]} ${Xs["layout-sm"]};

    ${lg} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,yg=K.default(sg.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Xs["spacing-16"]};

    ${lg} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Xs["spacing-8"]};
        --close-button-right-inset: ${Xs["spacing-20"]};
    }
`,vg=K.default.h2`
    ${Us["body-baseline-semibold"]}
    color: ${Vs.text};
    margin-bottom: ${Xs["spacing-16"]};
    text-align: center;

    ${lg} {
        ${Us["body-md-semibold"]}
        margin: ${Xs["spacing-12"]} 0;
    }
`,xg=K.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Gs.lg};
    overflow: hidden;

    ${lg} {
        border-radius: 0;
        flex: 1;
    }

    ${cg} {
        background: ${Vs["bg-strong"]};
    }
`,$g=K.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Vs["bg-stronger"]};
    margin: auto;

    ${lg} {
        aspect-ratio: 4/3;
    }
    ${Qs.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${cg} {
        width: auto;
        height: 100%;
    }
`,wg=K.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Vs["border-strong"]};
    pointer-events: none;

    ${lg} {
        width: calc(100% - ${Xs["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,jg=K.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Xs["spacing-16"]};

    ${Qs.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Xs["spacing-16"]} ${Xs["spacing-24"]}
            ${Xs["spacing-48"]};
        gap: ${Xs["spacing-16"]};
    }

    ${cg} {
        flex-direction: row;
        margin: ${Xs["spacing-16"]} ${Xs["spacing-20"]};
    }
`,Cg=K.default(Ol.Default)`
    width: 8.5rem;
    ${Qs.MaxWidth.sm} {
        width: 100%;
    }
    ${cg} {
        height: 2.5rem;
    }
`,Sg=K.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,kg=K.default.canvas`
    cursor: crosshair;
`,Og=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.da70388a.js")}))).ESignatureCanvas}})))),Dg=r=>{const{description:n,id:a,loadingProgress:o,loadingLabel:s="Uploading...",onChange:l,value:c,disabled:d}=r,f=X(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[h,g]=t.useState(!1),p=t.useRef(null),[m,b]=t.useState(c),y=i.useTheme(),v=Zs["sm-max"]({theme:y}),x=tc.useMediaQuery({maxWidth:v}),$=tc.useMediaQuery({maxHeight:v,orientation:"landscape"}),w=()=>{p.current.clear()},j=()=>{const e=p.current.export();b(e),g(!1),null==l||l(e)};t.useEffect((()=>{b(c)}),[c]);return e.jsxs("div",Object.assign({},f,{children:[e.jsx(dg,Object.assign({$disabled:d},{children:isNaN(o)?m?e.jsxs(e.Fragment,{children:[e.jsx(hg,{src:m,alt:"Signature preview"}),e.jsx(fg,Object.assign({styleType:"light",onClick:()=>g(!0),id:a,"aria-label":"Edit signature",disabled:d},{children:e.jsx(u.PencilIcon,{})}))]}):e.jsx(ug,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:a,onClick:()=>g(!0),disabled:d},{children:"Add signature"})):e.jsxs(gg,{children:[s&&e.jsx(exports.Typography.BodyMD,{children:s}),e.jsx(eg,{progress:o,"data-testid":`${a||"e-signature"}-progress-bar`})]})})),e.jsx(mg,Object.assign({"data-testid":"signature-modal",show:h},{children:e.jsx(bg,{children:e.jsxs(yg,Object.assign({onClose:()=>g(!1)},{children:[e.jsx(vg,{children:"Signature"}),e.jsx(xg,{children:e.jsxs($g,{children:[e.jsx(wg,{}),e.jsx(t.Suspense,Object.assign({fallback:null},{children:h&&e.jsx(Og,{ref:p,baseImageDataURL:m})}))]})}),e.jsxs(jg,{children:[e.jsx(Cg,Object.assign({as:$?td.Small:td.Default,type:"button",styleType:x&&!$?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:w},{children:"Clear"})),e.jsx(Cg,Object.assign({as:$?Ol.Small:Ol.Default,type:"button",onClick:j},{children:"Save"}))]})]}))})})),n?e.jsx(pg,{children:n}):null]}))},Eg="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Tg="Submit",Fg="Rate your experience",_g=5,Mg=K.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Ig=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Vs["icon-primary"]};
    ${Mg}:focus-visible + & {
        outline: ${qs["width-020"]} ${qs.solid}
            ${Vs["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${Gs.sm};
    }
`,Ag=K.default(b.StarIcon)`
    ${Ig}
`,Bg=K.default(y.StarFillIcon)`
    ${Ig}
`,Rg=K.default.label`
    margin: 0 ${Xs["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${Qs.MaxWidth.md} {
        margin: 0 ${Xs["spacing-8"]};
    }
`,Pg=K.default.div`
    display: flex;
    justify-content: center;
    margin: ${Xs["spacing-8"]} ${Xs["spacing-16"]};
`,zg=t=>{const{description:r,rating:n,onRatingChange:i}=t,a=t=>{const r=`${t} star${1===t?"":"s"}`;return t<=n?e.jsx(Bg,{"aria-label":r}):e.jsx(Ag,{"aria-label":r})};return e.jsx(Pg,Object.assign({role:"radiogroup","aria-label":r},{children:[...Array(_g)].map(((t,r)=>{const o=r+1;return e.jsxs(Rg,{children:[e.jsx(Mg,{type:"radio",name:"star",checked:o===n,onChange:()=>(e=>{i(e)})(o)}),a(o)]},o)}))}))},Lg=K.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${Qs.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Ng=K.default.div`
    border-top: 1px solid ${Vs.border};
    border-bottom: 1px solid ${Vs.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${Qs.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,Wg=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${Qs.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,Hg=K.default(Ol.Default)`
    margin-top: 1rem;
    width: 100%;
`,Yg=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${qs["dashed-default"]({radius:Gs.sm,thickness:qs["width-040"],colour:Vs.border})}
                padding: ${Xs["spacing-32"]};

                ${Qs.MaxWidth.sm} {
                    padding: ${Xs["spacing-32"]} ${Xs["spacing-20"]};
                }
            `}}
`,Vg=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Xs["spacing-32"]};
`,Ug=K.default.p`
    ${Us["header-xs-regular"]}
    color: ${Vs.text};
    margin-bottom: ${Xs["spacing-8"]};
`,Kg=K.default.div`
    ${Ml({textSize:"header-xs"})}
    color: ${Vs.text};
`,qg=K.default.p`
    ${Us["body-md-regular"]}
    color: ${Vs["text-subtler"]};
`,Xg=K.default.div`
    ${Ml({textSize:"body-md"})}
    color: ${Vs["text-subtler"]};
`,Gg=K.default.ul`
    list-style-type: none;
`;var Zg;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Zg||(Zg={}));const Qg=({src:t,alt:r,className:n,"data-testid":i})=>e.jsx("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Jg=K.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Xs["spacing-16"]};
    }
`,ep=K.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${Xs["spacing-16"]} ${Xs["spacing-32"]};
    cursor: pointer;

    background: ${Vs["bg-primary-subtlest"]};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};

    ${Qs.MaxWidth.lg} {
        padding: ${Xs["spacing-16"]};
    }

    :hover {
        background: ${Vs["bg-hover"]};
    }
`,tp=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Qs.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${Qs.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,rp=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,np=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Qs.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,ip=K.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${Xs["spacing-8"]};

    ${Us["body-md-regular"]}
    color: ${Vs.text};

    ${Qs.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${Xs["spacing-8"]};

        ${xf(2)}
    }
`,ap=K.default.div`
    ${Us["body-md-regular"]}
    color: ${Vs.text};

    ${Qs.MaxWidth.lg} {
        ${xf(2)}
    }
`;K.default(ap)`
    ${Us["body-md-regular"]}
    margin-top: ${Xs["spacing-4"]};
`;const op=K.default.div`
    ${Us["body-sm-semibold"]}
    color: ${Vs["text-error"]};
`,sp=K.default(op)`
    margin-top: ${Xs["spacing-4"]};
    ${Qs.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,lp=K.default(op)`
    display: none;
    visibility: hidden;
    ${Qs.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${Xs["spacing-8"]};
    }
`,cp=K.default($l)`
    color: ${Vs["icon-primary"]};
`,dp=K.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Xs["spacing-32"]};

    ${Qs.MaxWidth.lg} {
        margin-left: ${Xs["spacing-16"]};
    }
`,up=K.default(ph)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Xs["spacing-16"]};
    }
`,fp=K.default.div`
    width: auto;
    margin-right: ${Xs["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${Qs.MaxWidth.lg} {
        margin-right: ${Xs["spacing-16"]};
    }
`,hp=K.default(Qg)`
    border-radius: ${Gs.sm};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${Qs.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,gp=t.memo((({fileItem:r,onDownload:n})=>{const{id:a,name:o,size:s,errorMessage:l,thumbnailImageDataUrl:c,truncateText:d=!0,ready:f=!0}=r,[h,g]=t.useState(!1),[p,m]=t.useState(!1),b=Zg.formatFileSizeDisplay(s),y=i.useTheme(),v=Zs["sm-max"]({theme:y}),x=tc.useMediaQuery({maxWidth:v}),[$,w]=t.useState(),j=t.useRef();t.useEffect((()=>{j.current&&w(x?C(o):o)}),[o,x]);const C=e=>{if(!d)return e;const t=j&&j.current?j.current.getBoundingClientRect().width:0;return Rc.truncateTwoLines(e,t,16,1.5)},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(ap,Object.assign({ref:j},{children:$})),p&&e.jsx(sp,{children:l||"Something went wrong"})]});return e.jsx(Jg,Object.assign({"data-testid":a},{children:e.jsxs(ep,Object.assign({onClick:()=>G(void 0,void 0,void 0,(function*(){if(f&&!h){g(!0);try{m(!1),yield n(r)}catch(e){m(!0)}finally{g(!1)}}}))},{children:[(()=>{let t;return t=c?e.jsxs(e.Fragment,{children:[e.jsx(fp,Object.assign({"data-testid":`${a}-thumbnail`},{children:e.jsx(hp,{"data-testid":`${a}-thumbnail-image`,src:c})})),e.jsxs(np,{children:[e.jsx(rp,{children:S()}),e.jsx(ip,{children:b||"-"}),p&&e.jsx(lp,{children:l||"Something went wrong"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(rp,{children:S()}),e.jsx(ip,{children:b||"-"}),p&&e.jsx(lp,{children:l||"Something went wrong"})]}),e.jsx(tp,Object.assign({$hasThumbnail:!!c},{children:t}))})(),e.jsx(dp,{children:e.jsx(up,Object.assign({"data-testid":`${a}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${o}`},{children:h||!f?e.jsx(cp,{size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})}))})]}))}))})),pp={activeId:void 0,setActiveId:void 0},mp=t.createContext(pp);var bp,yp={exports:{}},vp={exports:{}},xp={};var $p,wp,jp,Cp,Sp,kp,Op,Dp,Ep,Tp,Fp,_p,Mp,Ip,Ap={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Bp(){return wp||(wp=1,"production"===process.env.NODE_ENV?vp.exports=function(){if(bp)return xp;bp=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case a:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case g:case h:case o:return e;default:return f}}case r:return f}}}function x(e){return v(e)===c}return xp.AsyncMode=l,xp.ConcurrentMode=c,xp.ContextConsumer=s,xp.ContextProvider=o,xp.Element=t,xp.ForwardRef=d,xp.Fragment=n,xp.Lazy=g,xp.Memo=h,xp.Portal=r,xp.Profiler=a,xp.StrictMode=i,xp.Suspense=u,xp.isAsyncMode=function(e){return x(e)||v(e)===l},xp.isConcurrentMode=x,xp.isContextConsumer=function(e){return v(e)===s},xp.isContextProvider=function(e){return v(e)===o},xp.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},xp.isForwardRef=function(e){return v(e)===d},xp.isFragment=function(e){return v(e)===n},xp.isLazy=function(e){return v(e)===g},xp.isMemo=function(e){return v(e)===h},xp.isPortal=function(e){return v(e)===r},xp.isProfiler=function(e){return v(e)===a},xp.isStrictMode=function(e){return v(e)===i},xp.isSuspense=function(e){return v(e)===u},xp.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===a||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===y||e.$$typeof===p)},xp.typeOf=v,xp}():vp.exports=($p||($p=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var p=e.type;switch(p){case l:case c:case n:case a:case i:case u:return p;default:var m=p&&p.$$typeof;switch(m){case s:case d:case g:case h:case o:return m;default:return f}}case r:return f}}}var x=l,$=c,w=s,j=o,C=t,S=d,k=n,O=g,D=h,E=r,T=a,F=i,_=u,M=!1;function I(e){return v(e)===c}Ap.AsyncMode=x,Ap.ConcurrentMode=$,Ap.ContextConsumer=w,Ap.ContextProvider=j,Ap.Element=C,Ap.ForwardRef=S,Ap.Fragment=k,Ap.Lazy=O,Ap.Memo=D,Ap.Portal=E,Ap.Profiler=T,Ap.StrictMode=F,Ap.Suspense=_,Ap.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||v(e)===l},Ap.isConcurrentMode=I,Ap.isContextConsumer=function(e){return v(e)===s},Ap.isContextProvider=function(e){return v(e)===o},Ap.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Ap.isForwardRef=function(e){return v(e)===d},Ap.isFragment=function(e){return v(e)===n},Ap.isLazy=function(e){return v(e)===g},Ap.isMemo=function(e){return v(e)===h},Ap.isPortal=function(e){return v(e)===r},Ap.isProfiler=function(e){return v(e)===a},Ap.isStrictMode=function(e){return v(e)===i},Ap.isSuspense=function(e){return v(e)===u},Ap.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===a||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===y||e.$$typeof===p)},Ap.typeOf=v}()),Ap)),vp.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Rp(){if(Cp)return jp;Cp=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return jp=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(e){o=e(a);for(var d=0;d<o.length;d++)r.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s},jp}function Pp(){if(kp)return Sp;kp=1;return Sp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function zp(){return Dp?Op:(Dp=1,Op=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Lp=Bp();yp.exports=function(){if(_p)return Fp;_p=1;var e=Bp(),t=Rp(),r=Pp(),n=zp(),i=function(){if(Tp)return Ep;Tp=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Pp(),r={},n=zp();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,a,o,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](a,c,s,o,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+o+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+o+" type: "+d.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ep=i}(),a=function(){};function o(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Fp=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(o),arrayOf:function(e){return p((function(t,n,i,a,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new g("Invalid "+a+" `"+o+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,a,o+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,i){var a=e[t];return s(a)?null:new g("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,i,a){var o=t[r];return e.isValidElementType(o)?null:new g("Invalid "+i+" `"+a+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,a){if(!(t[r]instanceof e)){var o=e.name||u;return new g("Invalid "+i+" `"+a+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return y(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,i,a,o,s){if("function"!=typeof e)return new g("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var l=t[i],c=v(l);if("object"!==c)return new g("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,a,o,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,a){for(var o=t[r],s=0;s<e.length;s++)if(h(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new g("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),o)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(i)+" at index "+t+"."),o}return p((function(t,i,a,o,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,a,o,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+o+" `"+s+"` supplied to `"+a+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,i,a,o){var s=t[n],l=v(s);if("object"!==l)return new g("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,a,o,c,x(d));var u=d(s,c,i,a,o+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(i,a,o,s,l){var c=i[a],d=v(c);if("object"!==d)return new g("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+o+"`, expected `object`.");var u=t({},i[a],e);for(var f in u){var h=e[f];if(n(e,f)&&"function"!=typeof h)return b(o,s,l,f,x(h));if(!h)return new g("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(i[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=h(c,f,o,s,l+"."+f,r);if(p)return p}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,o,s,c,d,f,h){if(c=c||u,f=f||s,h!==r){if(l){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==o[s]?i?null===o[s]?new g("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,s,c,d,f)}var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function m(e){return p((function(t,r,n,i,a,o){var s=t[r];return v(s)!==e?new g("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(y);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!y(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!y(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f},Fp}()(Lp.isElement,!0)}else yp.exports=function(){if(Ip)return Mp;Ip=1;var e=Pp();function t(){}function r(){}return r.resetWarningCache=t,Mp=function(){function n(t,r,n,i,a,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return a.PropTypes=a,a}}()();var Np=Ti(yp.exports),Wp=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Hp(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=Wp.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var Yp=[".DS_Store","Thumbs.db"];function Vp(e){return"object"==typeof e&&null!==e}function Up(e){return Gp(e.target.files).map((function(e){return Hp(e)}))}function Kp(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Hp(e)}))]}}))}))}function qp(e,t){return G(this,void 0,void 0,(function(){var r;return Z(this,(function(n){switch(n.label){case 0:return e.items?(r=Gp(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Zp))]):[3,2];case 1:return[2,Xp(Qp(n.sent()))];case 2:return[2,Xp(Gp(e.files).map((function(e){return Hp(e)})))]}}))}))}function Xp(e){return e.filter((function(e){return-1===Yp.indexOf(e.name)}))}function Gp(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Zp(e){if("function"!=typeof e.webkitGetAsEntry)return Jp(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?tm(t):Jp(e)}function Qp(e){return e.reduce((function(e,t){return J(J([],Q(e),!1),Q(Array.isArray(t)?Qp(t):[t]),!1)}),[])}function Jp(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=Hp(t);return Promise.resolve(r)}function em(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,e.isDirectory?tm(e):rm(e)]}))}))}function tm(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var a=this;t.readEntries((function(t){return G(a,void 0,void 0,(function(){var a,o,s;return Z(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return a=l.sent(),e(a),[3,4];case 3:return o=l.sent(),r(o),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(em)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function rm(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=Hp(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var nm=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):i===t}))}return!0};function im(e){return function(e){if(Array.isArray(e))return dm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||cm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function am(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function om(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?am(Object(r),!0).forEach((function(t){sm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):am(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function sm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}(e,t)||cm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function cm(e,t){if(e){if("string"==typeof e)return dm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?dm(e,t):void 0}}function dm(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var um=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},fm=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},hm=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},gm={code:"too-many-files",message:"Too many files"};function pm(e,t){var r="application/x-moz-file"===e.type||nm(e,t);return[r,r?null:um(t)]}function mm(e,t,r){if(bm(e.size))if(bm(t)&&bm(r)){if(e.size>r)return[!1,fm(r)];if(e.size<t)return[!1,hm(t)]}else{if(bm(t)&&e.size<t)return[!1,hm(t)];if(bm(r)&&e.size>r)return[!1,fm(r)]}return[!0,null]}function bm(e){return null!=e}function ym(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function vm(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function xm(e){e.preventDefault()}function $m(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!ym(e)&&t&&t.apply(void 0,[e].concat(n)),ym(e)}))}}function wm(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function jm(e){return/^.*\.[\w]+$/.test(e)}var Cm=["children"],Sm=["open"],km=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Om=["refKey","onChange","onClick"];function Dm(e){return function(e){if(Array.isArray(e))return Fm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Tm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Em(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}(e,t)||Tm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tm(e,t){if(e){if("string"==typeof e)return Fm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Fm(e,t):void 0}}function Fm(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Mm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_m(Object(r),!0).forEach((function(t){Im(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Im(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Am(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Bm=t.forwardRef((function(e,r){var n=e.children,i=zm(Am(e,Cm)),a=i.open,o=Am(i,Sm);return t.useImperativeHandle(r,(function(){return{open:a}}),[a]),V.default.createElement(t.Fragment,null,n(Mm(Mm({},o),{},{open:a})))}));Bm.displayName="Dropzone";var Rm={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return Vp(e)&&Vp(e.dataTransfer)?[2,qp(e.dataTransfer,e.type)]:function(e){return Vp(e)&&Vp(e.target)}(e)?[2,Up(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Kp(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Bm.defaultProps=Rm,Bm.propTypes={children:Np.func,accept:Np.objectOf(Np.arrayOf(Np.string)),multiple:Np.bool,preventDropOnDocument:Np.bool,noClick:Np.bool,noKeyboard:Np.bool,noDrag:Np.bool,noDragEventsBubbling:Np.bool,minSize:Np.number,maxSize:Np.number,maxFiles:Np.number,disabled:Np.bool,getFilesFromEvent:Np.func,onFileDialogCancel:Np.func,onFileDialogOpen:Np.func,useFsAccessApi:Np.bool,autoFocus:Np.bool,onDragEnter:Np.func,onDragLeave:Np.func,onDragOver:Np.func,onDrop:Np.func,onDropAccepted:Np.func,onDropRejected:Np.func,onError:Np.func,validator:Np.func};var Pm={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function zm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Mm(Mm({},Rm),e),n=r.accept,i=r.disabled,a=r.getFilesFromEvent,o=r.maxSize,s=r.minSize,l=r.multiple,c=r.maxFiles,d=r.onDragEnter,u=r.onDragLeave,f=r.onDragOver,h=r.onDrop,g=r.onDropAccepted,p=r.onDropRejected,m=r.onFileDialogCancel,b=r.onFileDialogOpen,y=r.useFsAccessApi,v=r.autoFocus,x=r.preventDropOnDocument,$=r.noClick,w=r.noKeyboard,j=r.noDrag,C=r.noDragEventsBubbling,S=r.onError,k=r.validator,O=t.useMemo((function(){return function(e){if(bm(e))return Object.entries(e).reduce((function(e,t){var r=lm(t,2),n=r[0],i=r[1];return[].concat(im(e),[n],im(i))}),[]).filter((function(e){return wm(e)||jm(e)})).join(",")}(n)}),[n]),D=t.useMemo((function(){return function(e){return bm(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=lm(e,2),r=t[0],n=t[1],i=!0;return wm(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(jm)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=lm(t,2),n=r[0],i=r[1];return om(om({},e),{},sm({},n,i))}),{})}]:e}(n)}),[n]),E=t.useMemo((function(){return"function"==typeof b?b:Nm}),[b]),T=t.useMemo((function(){return"function"==typeof m?m:Nm}),[m]),F=t.useRef(null),_=t.useRef(null),M=Em(t.useReducer(Lm,Pm),2),I=M[0],A=M[1],B=I.isFocused,R=I.isFileDialogActive,P=t.useRef("undefined"!=typeof window&&window.isSecureContext&&y&&"showOpenFilePicker"in window),z=function(){!P.current&&R&&setTimeout((function(){_.current&&(_.current.files.length||(A({type:"closeDialog"}),T()))}),300)};t.useEffect((function(){return window.addEventListener("focus",z,!1),function(){window.removeEventListener("focus",z,!1)}}),[_,R,T,P]);var L=t.useRef([]),N=function(e){F.current&&F.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",xm,!1),document.addEventListener("drop",N,!1)),function(){x&&(document.removeEventListener("dragover",xm),document.removeEventListener("drop",N))}}),[F,x]),t.useEffect((function(){return!i&&v&&F.current&&F.current.focus(),function(){}}),[F,v,i]);var W=t.useCallback((function(e){S?S(e):console.error(e)}),[S]),H=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[].concat(Dm(L.current),[e.target]),vm(e)&&Promise.resolve(a(e)).then((function(t){if(!ym(e)||C){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,a=e.multiple,o=e.maxFiles,s=e.validator;return!(!a&&t.length>1||a&&o>=1&&t.length>o)&&t.every((function(e){var t=lm(pm(e,r),1)[0],a=lm(mm(e,n,i),1)[0],o=s?s(e):null;return t&&a&&!o}))}({files:t,accept:O,minSize:s,maxSize:o,multiple:l,maxFiles:c,validator:k});A({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return W(e)}))}),[a,d,W,C,O,s,o,l,c,k]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=vm(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,C]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=L.current.filter((function(e){return F.current&&F.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),vm(e)&&u&&u(e))}),[F,u,C]),U=t.useCallback((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Em(pm(e,O),2),i=t[0],a=t[1],l=Em(mm(e,s,o),2),c=l[0],d=l[1],u=k?k(e):null;if(i&&c&&!u)r.push(e);else{var f=[a,d];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[gm]})})),r.splice(0)),A({acceptedFiles:r,fileRejections:n,type:"setFiles"}),h&&h(r,n,t),n.length>0&&p&&p(n,t),r.length>0&&g&&g(r,t)}),[A,l,O,s,o,c,h,g,p,k]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[],vm(e)&&Promise.resolve(a(e)).then((function(t){ym(e)&&!C||U(t,e)})).catch((function(e){return W(e)})),A({type:"reset"})}),[a,U,W,C]),q=t.useCallback((function(){if(P.current){A({type:"openDialog"}),E();var e={multiple:l,types:D};window.showOpenFilePicker(e).then((function(e){return a(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(T(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?W(e):(P.current=!1,_.current?(_.current.value=null,_.current.click()):W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else _.current&&(A({type:"openDialog"}),E(),_.current.value=null,_.current.click())}),[A,E,T,y,U,W,D,l]),X=t.useCallback((function(e){F.current&&F.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[F,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){$||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[$,q]),J=function(e){return i?null:e},ee=function(e){return w?null:J(e)},te=function(e){return j?null:J(e)},re=function(e){C&&e.stopPropagation()},ne=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.role,a=e.onKeyDown,o=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Am(e,km);return Mm(Mm(Im({onKeyDown:ee($m(a,X)),onFocus:ee($m(o,G)),onBlur:ee($m(s,Z)),onClick:J($m(l,Q)),onDragEnter:te($m(c,H)),onDragOver:te($m(d,Y)),onDragLeave:te($m(u,V)),onDrop:te($m(f,K)),role:"string"==typeof n&&""!==n?n:"presentation"},r,F),i||w?{}:{tabIndex:0}),h)}}),[F,X,G,Z,Q,H,Y,V,K,w,j,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),ae=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,a=Am(e,Om);return Mm(Mm({},Im({accept:O,multiple:l,type:"file",style:{display:"none"},onChange:J($m(n,K)),onClick:J($m(i,ie)),tabIndex:-1},r,_)),a)}}),[_,n,l,K,i]);return Mm(Mm({},I),{},{isFocused:B&&!i,getRootProps:ne,getInputProps:ae,rootRef:F,inputRef:_,open:J(q)})}function Lm(e,t){switch(t.type){case"focus":return Mm(Mm({},e),{},{isFocused:!0});case"blur":return Mm(Mm({},e),{},{isFocused:!1});case"openDialog":return Mm(Mm({},Pm),{},{isFileDialogActive:!0});case"closeDialog":return Mm(Mm({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Mm(Mm({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Mm(Mm({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Mm({},Pm);default:return e}}function Nm(){}const Wm=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${qs["dashed-default"]({radius:Gs.sm,thickness:qs["width-040"],colour:Vs.border})}
                padding: ${Xs["spacing-32"]};

                ${Qs.MaxWidth.sm} {
                    padding: ${Xs["spacing-32"]} ${Xs["spacing-20"]};
                }
            `}}
`,Hm=K.default.input`
    display: none;
`,Ym=K.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Vs["bg-primary-subtler"]};
    ${qs["dashed-default"]({radius:Gs.sm,thickness:qs["width-040"],colour:Vs["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Vm=K.default(exports.Typography.BodyMD)`
    color: ${Vs["text-primary"]};
    text-align: center;
`,Um=K.default(v.CloudArrowUpFillIcon)`
    color: ${Vs["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Km=t.forwardRef((({children:r,accept:n,capture:i,multiple:a,id:o,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":f},h)=>{const g=t.useRef(),{getRootProps:p,isDragActive:m}=zm({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},g.current),{openFileDialog:()=>{var e;g.current.value=null,null===(e=g.current)||void 0===e||e.click()}})));return e.jsxs(Wm,Object.assign({id:o,"data-testid":f||"dropzone",$border:c,className:s},p(),{children:[e.jsx(Hm,{type:"file",name:l,ref:g,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:a,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),r,m&&e.jsxs(Ym,{children:[e.jsx(Um,{}),e.jsx(Vm,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const qm="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Xm(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Gm(e){return"nodeType"in e}function Zm(e){var t,r;return e?Xm(e)?e:Gm(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Qm(e){const{Document:t}=Zm(e);return e instanceof t}function Jm(e){return!Xm(e)&&e instanceof Zm(e).HTMLElement}function eb(e){return e instanceof Zm(e).SVGElement}function tb(e){return e?Xm(e)?e.document:Gm(e)?Qm(e)?e:Jm(e)||eb(e)?e.ownerDocument:document:document:document}const rb=qm?t.useLayoutEffect:t.useEffect;function nb(e){const r=t.useRef(e);return rb((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function ib(e,r){void 0===r&&(r=[e]);const n=t.useRef(e);return rb((()=>{n.current!==e&&(n.current=e)}),r),n}function ab(e,r){const n=t.useRef();return t.useMemo((()=>{const t=e(n.current);return n.current=t,t}),[...r])}function ob(e){const r=nb(e),n=t.useRef(null),i=t.useCallback((e=>{e!==n.current&&(null==r||r(e,n.current)),n.current=e}),[]);return[n,i]}function sb(e){const r=t.useRef();return t.useEffect((()=>{r.current=e}),[e]),r.current}let lb={};function cb(e,r){return t.useMemo((()=>{if(r)return r;const t=null==lb[e]?0:lb[e]+1;return lb[e]=t,e+"-"+t}),[e,r])}function db(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const ub=db(1),fb=db(-1);function hb(e){if(!e)return!1;const{KeyboardEvent:t}=Zm(e.target);return t&&e instanceof t}function gb(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Zm(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const pb=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[pb.Translate.toString(e),pb.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),mb="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function bb(e){return e.matches(mb)?e:e.querySelector(mb)}const yb={display:"none"};function vb(e){let{id:t,value:r}=e;return V.default.createElement("div",{id:t,style:yb},r)}function xb(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return V.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const $b=t.createContext(null);const wb={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},jb={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Cb(e){let{announcements:n=jb,container:i,hiddenTextDescribedById:a,screenReaderInstructions:o=wb}=e;const{announce:s,announcement:l}=function(){const[e,r]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&r(e)}),[]),announcement:e}}(),c=cb("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const r=t.useContext($b);t.useEffect((()=>{if(!r)throw new Error("useDndMonitor must be used within a children of <DndContext>");return r(e)}),[e,r])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}})),[s,n])),!d)return null;const f=V.default.createElement(V.default.Fragment,null,V.default.createElement(vb,{id:a,value:o.draggable}),V.default.createElement(xb,{id:c,announcement:l}));return i?r.createPortal(f,i):f}var Sb;function kb(){}function Ob(e,r){return t.useMemo((()=>({sensor:e,options:null!=r?r:{}})),[e,r])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Sb||(Sb={}));const Db=Object.freeze({x:0,y:0});function Eb(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Tb(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Fb(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function _b(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function Mb(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-n,s=a-r;if(n<i&&r<a){const r=t.width*t.height,n=e.width*e.height,i=o*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const Ib=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,a=r.get(n);if(a){const r=Mb(a,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(Tb)};function Ab(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Db}function Bb(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Rb=Bb(1);const Pb={ignoreTransform:!1};function zb(e,t){void 0===t&&(t=Pb);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Zm(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:a,x:o,y:s}=n,l=e.left-o-(1-i)*parseFloat(r),c=e.top-s-(1-a)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:a,height:o,bottom:s,right:l}=r;return{top:n,left:i,width:a,height:o,bottom:s,right:l}}function Lb(e){return zb(e,{ignoreTransform:!0})}function Nb(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Qm(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!Jm(i)||eb(i))return r;if(r.includes(i))return r;const a=Zm(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Zm(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,a)&&r.push(i),function(e,t){return void 0===t&&(t=Zm(e).getComputedStyle(e)),"fixed"===t.position}(i,a)?r:n(i.parentNode)}(e):r}function Wb(e){const[t]=Nb(e,1);return null!=t?t:null}function Hb(e){return qm&&e?Xm(e)?e:Gm(e)?Qm(e)||e===tb(e).scrollingElement?window:Jm(e)?e:null:null:null}function Yb(e){return Xm(e)?e.scrollX:e.scrollLeft}function Vb(e){return Xm(e)?e.scrollY:e.scrollTop}function Ub(e){return{x:Yb(e),y:Vb(e)}}var Kb;function qb(e){return!(!qm||!e)&&e===document.scrollingElement}function Xb(e){const t={x:0,y:0},r=qb(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Kb||(Kb={}));const Gb={x:.2,y:.2};function Zb(e,t,r,n,i){let{top:a,left:o,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=Gb);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=Xb(e),h={x:0,y:0},g={x:0,y:0},p=t.height*i.y,m=t.width*i.x;return!c&&a<=t.top+p?(h.y=Kb.Backward,g.y=n*Math.abs((t.top+p-a)/p)):!d&&l>=t.bottom-p&&(h.y=Kb.Forward,g.y=n*Math.abs((t.bottom-p-l)/p)),!f&&s>=t.right-m?(h.x=Kb.Forward,g.x=n*Math.abs((t.right-m-s)/m)):!u&&o<=t.left+m&&(h.x=Kb.Backward,g.x=n*Math.abs((t.left+m-o)/m)),{direction:h,speed:g}}function Qb(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Jb(e){return e.reduce(((e,t)=>ub(e,Ub(t))),Db)}const ey=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Yb(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Vb(t)),0)}]];class ty{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Nb(t),n=Jb(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of ey)for(const a of t)Object.defineProperty(this,a,{get:()=>{const t=i(r),o=n[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ry{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function ny(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var iy,ay;function oy(e){e.preventDefault()}function sy(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(iy||(iy={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(ay||(ay={}));const ly={start:[ay.Space,ay.Enter],cancel:[ay.Esc],end:[ay.Space,ay.Enter]},cy=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case ay.Right:return{...r,x:r.x+25};case ay.Left:return{...r,x:r.x-25};case ay.Down:return{...r,y:r.y+25};case ay.Up:return{...r,y:r.y-25}}};let dy=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new ry(tb(t)),this.windowListeners=new ry(Zm(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(iy.Resize,this.handleCancel),this.windowListeners.add(iy.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(iy.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=zb),!e)return;const{top:r,left:n,bottom:i,right:a}=t(e);Wb(e)&&(i<=0||a<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Db)}handleKeyDown(e){if(hb(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=ly,coordinateGetter:a=cy,scrollBehavior:o="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Db;this.referenceCoordinates||(this.referenceCoordinates=c);const d=a(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=fb(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=Xb(r),h=Qb(r),g={x:Math.min(i===ay.Right?h.right-h.width/2:h.right,Math.max(i===ay.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===ay.Down?h.bottom-h.height/2:h.bottom,Math.max(i===ay.Down?h.top:h.top+h.height/2,d.y))},p=i===ay.Right&&!s||i===ay.Left&&!l,m=i===ay.Down&&!c||i===ay.Up&&!a;if(p&&g.x!==d.x){const e=r.scrollLeft+t.x,a=i===ay.Right&&e<=u.x||i===ay.Left&&e>=f.x;if(a&&!t.y)return void r.scrollTo({left:e,behavior:o});n.x=a?r.scrollLeft-e:i===ay.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:o});break}if(m&&g.y!==d.y){const e=r.scrollTop+t.y,a=i===ay.Down&&e<=u.y||i===ay.Up&&e>=f.y;if(a&&!t.x)return void r.scrollTo({top:e,behavior:o});n.y=a?r.scrollTop-e:i===ay.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:o});break}}this.handleMove(e,ub(fb(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function uy(e){return Boolean(e&&"distance"in e)}function fy(e){return Boolean(e&&"delay"in e)}dy.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=ly,onActivation:i}=t,{active:a}=r;const{code:o}=e.nativeEvent;if(n.start.includes(o)){const t=a.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class hy{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Zm(e);return e instanceof t?e:tb(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:a}=i;this.props=e,this.events=t,this.document=tb(a),this.documentListeners=new ry(this.document),this.listeners=new ry(r),this.windowListeners=new ry(Zm(a)),this.initialCoordinates=null!=(n=gb(i))?n:Db,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(iy.Resize,this.handleCancel),this.windowListeners.add(iy.DragStart,oy),this.windowListeners.add(iy.VisibilityChange,this.handleCancel),this.windowListeners.add(iy.ContextMenu,oy),this.documentListeners.add(iy.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(fy(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(uy(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(iy.Click,sy,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(iy.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:a,options:{activationConstraint:o}}=i;if(!n)return;const s=null!=(t=gb(e))?t:Db,l=fb(n,s);if(!r&&o){if(uy(o)){if(null!=o.tolerance&&ny(l,o.tolerance))return this.handleCancel();if(ny(l,o.distance))return this.handleStart()}return fy(o)&&ny(l,o.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),a(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ay.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const gy={move:{name:"pointermove"},end:{name:"pointerup"}};class py extends hy{constructor(e){const{event:t}=e,r=tb(t.target);super(e,gy,r)}}py.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const my={move:{name:"mousemove"},end:{name:"mouseup"}};var by;!function(e){e[e.RightClick=2]="RightClick"}(by||(by={}));let yy=class extends hy{constructor(e){super(e,my,tb(e.event.target))}};yy.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==by.RightClick&&(null==n||n({event:r}),!0)}}];const vy={move:{name:"touchmove"},end:{name:"touchend"}};class xy extends hy{constructor(e){super(e,vy)}static setup(){return window.addEventListener(vy.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(vy.move.name,e)};function e(){}}}var $y,wy;function jy(e){let{acceleration:r,activator:n=$y.Pointer,canScroll:i,draggingRect:a,enabled:o,interval:s=5,order:l=wy.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:f,threshold:h}=e;const g=function(e){let{delta:t,disabled:r}=e;const n=sb(t);return ab((e=>{if(r||!n||!e)return Cy;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Kb.Backward]:e.x[Kb.Backward]||-1===i.x,[Kb.Forward]:e.x[Kb.Forward]||1===i.x},y:{[Kb.Backward]:e.y[Kb.Backward]||-1===i.y,[Kb.Forward]:e.y[Kb.Forward]||1===i.y}}}),[r,t,n])}({delta:f,disabled:!o}),[p,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,r)=>{e.current=setInterval(t,r)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),y=t.useRef({x:0,y:0}),v=t.useMemo((()=>{switch(n){case $y.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case $y.DraggableRect:return a}}),[n,a,c]),x=t.useRef(null),$=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*y.current.x,r=b.current.y*y.current.y;e.scrollBy(t,r)}),[]),w=t.useMemo((()=>l===wy.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(o&&d.length&&v){for(const e of w){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),n=u[t];if(!n)continue;const{direction:a,speed:o}=Zb(e,n,v,r,h);for(const e of["x","y"])g[e][a[e]]||(o[e]=0,a[e]=0);if(o.x>0||o.y>0)return m(),x.current=e,p($,s),b.current=o,void(y.current=a)}b.current={x:0,y:0},y.current={x:0,y:0},m()}else m()}),[r,$,i,m,o,s,JSON.stringify(v),JSON.stringify(g),p,d,w,u,JSON.stringify(h)])}xy.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}($y||($y={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(wy||(wy={}));const Cy={x:{[Kb.Backward]:!1,[Kb.Forward]:!1},y:{[Kb.Backward]:!1,[Kb.Forward]:!1}};var Sy,ky;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Sy||(Sy={})),function(e){e.Optimized="optimized"}(ky||(ky={}));const Oy=new Map;function Dy(e,t){return ab((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Ey(e){let{callback:r,disabled:n}=e;const i=nb(r),a=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[n]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}function Ty(e){return new ty(zb(e),e)}function Fy(e,r,n){void 0===r&&(r=Ty);const[i,a]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:n)?i:null;const a=r(e);if(JSON.stringify(t)===JSON.stringify(a))return t;return a}),null),o=function(e){let{callback:r,disabled:n}=e;const i=nb(r),a=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,n]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){a();break}}}}),s=Ey({callback:a});return rb((()=>{a(),e?(null==s||s.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==o||o.disconnect())}),[e]),i}const _y=[];function My(e,r){void 0===r&&(r=[]);const n=t.useRef(null);return t.useEffect((()=>{n.current=null}),r),t.useEffect((()=>{const t=e!==Db;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?fb(e,n.current):Db}function Iy(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const Ay=[];function By(e){let{measure:r}=e;const[n,i]=t.useState(null),a=t.useCallback((e=>{for(const{target:t}of e)if(Jm(t)){i((e=>{const n=r(t);return e?{...e,width:n.width,height:n.height}:n}));break}}),[r]),o=Ey({callback:a}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Jm(t)?t:e}(e);null==o||o.disconnect(),t&&(null==o||o.observe(t)),i(t?r(t):null)}),[r,o]),[l,c]=ob(s);return t.useMemo((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const Ry=[{sensor:py,options:{}},{sensor:dy,options:{}}],Py={current:{}},zy={draggable:{measure:Lb},droppable:{measure:Lb,strategy:Sy.WhileDragging,frequency:ky.Optimized},dragOverlay:{measure:zb}};class Ly extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Ny={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ly,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:kb},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:zy,measureDroppableContainers:kb,windowRect:null,measuringScheduled:!1},Wy={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:kb,draggableNodes:new Map,over:null,measureDroppableContainers:kb},Hy=t.createContext(Wy),Yy=t.createContext(Ny);function Vy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ly}}}function Uy(e,t){switch(t.type){case Sb.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Sb.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Sb.DragEnd:case Sb.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Sb.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new Ly(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case Sb.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,a=e.droppable.containers.get(r);if(!a||n!==a.key)return e;const o=new Ly(e.droppable.containers);return o.set(r,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Sb.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new Ly(e.droppable.containers);return a.delete(r),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function Ky(e){let{disabled:r}=e;const{active:n,activatorEvent:i,draggableNodes:a}=t.useContext(Hy),o=sb(i),s=sb(null==n?void 0:n.id);return t.useEffect((()=>{if(!r&&!i&&o&&null!=s){if(!hb(o))return;if(document.activeElement===o.target)return;const e=a.get(s);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=bb(e);if(t){t.focus();break}}}))}}),[i,r,a,s,o]),null}const qy=t.createContext({...Db,scaleX:1,scaleY:1});var Xy;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Xy||(Xy={}));const Gy=t.memo((function(e){var n,i,a,o;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=Ry,collisionDetection:f=Ib,measuring:h,modifiers:g,...p}=e;const m=t.useReducer(Uy,void 0,Vy),[b,y]=m,[v,x]=function(){const[e]=t.useState((()=>new Set)),r=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),r]}(),[$,w]=t.useState(Xy.Uninitialized),j=$===Xy.Initialized,{draggable:{active:C,nodes:S,translate:k},droppable:{containers:O}}=b,D=C?S.get(C):null,E=t.useRef({initial:null,translated:null}),T=t.useMemo((()=>{var e;return null!=C?{id:C,data:null!=(e=null==D?void 0:D.data)?e:Py,rect:E}:null}),[C,D]),F=t.useRef(null),[_,M]=t.useState(null),[I,A]=t.useState(null),B=ib(p,Object.values(p)),R=cb("DndDescribedBy",s),P=t.useMemo((()=>O.getEnabled()),[O]),z=function(e){return t.useMemo((()=>({draggable:{...zy.draggable,...null==e?void 0:e.draggable},droppable:{...zy.droppable,...null==e?void 0:e.droppable},dragOverlay:{...zy.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:N,measuringScheduled:W}=function(e,r){let{dragging:n,dependencies:i,config:a}=r;const[o,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=a,u=t.useRef(e),f=function(){switch(d){case Sy.Always:return!1;case Sy.BeforeDragging:return n;default:return!n}}(),h=ib(f),g=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),p=t.useRef(null),m=ab((t=>{if(f&&!n)return Oy;if(!t||t===Oy||u.current!==e||null!=o){const t=new Map;for(let r of e){if(!r)continue;if(o&&o.length>0&&!o.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new ty(c(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,o,n,f,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||g()}),[n,f]),t.useEffect((()=>{o&&o.length>0&&s(null)}),[JSON.stringify(o)]),t.useEffect((()=>{f||"number"!=typeof l||null!==p.current||(p.current=setTimeout((()=>{g(),p.current=null}),l))}),[l,f,g,...i]),{droppableRects:m,measureDroppableContainers:g,measuringScheduled:null!=o}}(P,{dragging:j,dependencies:[k.x,k.y],config:z.droppable}),H=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return ab((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(S,C),Y=t.useMemo((()=>I?gb(I):null),[I]),U=function(){const e=!1===(null==_?void 0:_.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,r=j&&!e&&!t;if("object"==typeof c)return{...c,enabled:r};return{enabled:r}}(),K=function(e,t){return Dy(e,t)}(H,z.draggable.measure);!function(e){let{activeNode:r,measure:n,initialRect:i,config:a=!0}=e;const o=t.useRef(!1),{x:s,y:l}="boolean"==typeof a?{x:a,y:a}:a;rb((()=>{if(!s&&!l||!r)return void(o.current=!1);if(o.current||!i)return;const e=null==r?void 0:r.node.current;if(!e||!1===e.isConnected)return;const t=Ab(n(e),i);if(s||(t.x=0),l||(t.y=0),o.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const r=Wb(e);r&&r.scrollBy({top:t.y,left:t.x})}}),[r,s,l,i,n])}({activeNode:C?S.get(C):null,config:U.layoutShiftCompensation,initialRect:K,measure:z.draggable.measure});const q=Fy(H,z.draggable.measure,K),X=Fy(H?H.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:H,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:S,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=O.getNodeFor(null==(n=G.current.over)?void 0:n.id),Q=By({measure:z.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:H,ee=j?null!=(a=Q.rect)?a:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),re=Ab(ne=te?null:q,Dy(ne));var ne;const ie=Iy(J?Zm(J):null),ae=function(e){const r=t.useRef(e),n=ab((t=>e?t&&t!==_y&&e&&r.current&&e.parentNode===r.current.parentNode?t:Nb(e):_y),[e]);return t.useEffect((()=>{r.current=e}),[e]),n}(j?null!=Z?Z:H:null),oe=function(e,r){void 0===r&&(r=zb);const[n]=e,i=Iy(n?Zm(n):null),[a,o]=t.useReducer((function(){return e.length?e.map((e=>qb(e)?i:new ty(r(e),e))):Ay}),Ay),s=Ey({callback:o});return e.length>0&&a===Ay&&o(),rb((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),o())}),[e]),a}(ae),se=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(g,{transform:{x:k.x-re.x,y:k.y-re.y,scaleX:1,scaleY:1},activatorEvent:I,active:T,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:ae,scrollableAncestorRects:oe,windowRect:ie}),le=Y?ub(Y,k):null,ce=function(e){const[r,n]=t.useState(null),i=t.useRef(e),a=t.useCallback((e=>{const t=Hb(e.target);t&&n((e=>e?(e.set(t,Ub(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){r(t);const o=e.map((e=>{const t=Hb(e);return t?(t.addEventListener("scroll",a,{passive:!0}),[t,Ub(t)]):null})).filter((e=>null!=e));n(o.length?new Map(o):null),i.current=e}return()=>{r(e),r(t)};function r(e){e.forEach((e=>{const t=Hb(e);null==t||t.removeEventListener("scroll",a)}))}}),[a,e]),t.useMemo((()=>e.length?r?Array.from(r.values()).reduce(((e,t)=>ub(e,t)),Db):Jb(e):Db),[e,r])}(ae),de=My(ce),ue=My(ce,[q]),fe=ub(se,de),he=ee?Rb(ee,se):null,ge=T&&he?f({active:T,collisionRect:he,droppableRects:L,droppableContainers:P,pointerCoordinates:le}):null,pe=_b(ge,"id"),[me,be]=t.useState(null),ye=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(te?se:ub(se,ue),null!=(o=null==me?void 0:me.rect)?o:null,q),ve=t.useCallback(((e,t)=>{let{sensor:n,options:i}=t;if(null==F.current)return;const a=S.get(F.current);if(!a)return;const o=e.nativeEvent,s=new n({active:F.current,activeNode:a,event:o,options:i,context:G,onStart(e){const t=F.current;if(null==t)return;const n=S.get(t);if(!n)return;const{onDragStart:i}=B.current,a={active:{id:t,data:n.data,rect:E}};r.unstable_batchedUpdates((()=>{null==i||i(a),w(Xy.Initializing),y({type:Sb.DragStart,initialCoordinates:e,active:t}),v({type:"onDragStart",event:a})}))},onMove(e){y({type:Sb.DragMove,coordinates:e})},onEnd:l(Sb.DragEnd),onCancel:l(Sb.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:i,scrollAdjustedTranslate:a}=G.current;let s=null;if(t&&a){const{cancelDrop:r}=B.current;if(s={activatorEvent:o,active:t,collisions:n,delta:a,over:i},e===Sb.DragEnd&&"function"==typeof r){await Promise.resolve(r(s))&&(e=Sb.DragCancel)}}F.current=null,r.unstable_batchedUpdates((()=>{y({type:e}),w(Xy.Uninitialized),be(null),M(null),A(null);const t=e===Sb.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=B.current[t];null==e||e(s),v({type:t,event:s})}}))}}r.unstable_batchedUpdates((()=>{M(s),A(e.nativeEvent)}))}),[S]),xe=t.useCallback(((e,t)=>(r,n)=>{const i=r.nativeEvent,a=S.get(n);if(null!==F.current||!a||i.dndKit||i.defaultPrevented)return;const o={active:a};!0===e(r,t.options,o)&&(i.dndKit={capturedBy:t.sensor},F.current=n,ve(r,t))}),[S,ve]),$e=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:n}=t;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:r(e.handler,t)})))]}),[])),[e,r])}(u,xe);!function(e){t.useEffect((()=>{if(!qm)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),rb((()=>{q&&$===Xy.Initializing&&w(Xy.Initialized)}),[q,$]),t.useEffect((()=>{const{onDragMove:e}=B.current,{active:t,activatorEvent:n,collisions:i,over:a}=G.current;if(!t||!n)return;const o={active:t,activatorEvent:n,collisions:i,delta:{x:fe.x,y:fe.y},over:a};r.unstable_batchedUpdates((()=>{null==e||e(o),v({type:"onDragMove",event:o})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:i,scrollAdjustedTranslate:a}=G.current;if(!e||null==F.current||!t||!a)return;const{onDragOver:o}=B.current,s=i.get(pe),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:a.x,y:a.y},over:l};r.unstable_batchedUpdates((()=>{be(l),null==o||o(c),v({type:"onDragOver",event:c})}))}),[pe]),rb((()=>{G.current={activatorEvent:I,active:T,activeNode:H,collisionRect:he,collisions:ge,droppableRects:L,draggableNodes:S,draggingNode:J,draggingNodeRect:ee,droppableContainers:O,over:me,scrollableAncestors:ae,scrollAdjustedTranslate:fe},E.current={initial:ee,translated:he}}),[T,H,ge,he,S,J,ee,L,O,me,ae,fe]),jy({...U,delta:k,draggingRect:he,pointerCoordinates:le,scrollableAncestors:ae,scrollableAncestorRects:oe});const we=t.useMemo((()=>({active:T,activeNode:H,activeNodeRect:q,activatorEvent:I,collisions:ge,containerNodeRect:X,dragOverlay:Q,draggableNodes:S,droppableContainers:O,droppableRects:L,over:me,measureDroppableContainers:N,scrollableAncestors:ae,scrollableAncestorRects:oe,measuringConfiguration:z,measuringScheduled:W,windowRect:ie})),[T,H,q,I,ge,X,Q,S,O,L,me,N,ae,oe,z,W,ie]),je=t.useMemo((()=>({activatorEvent:I,activators:$e,active:T,activeNodeRect:q,ariaDescribedById:{draggable:R},dispatch:y,draggableNodes:S,over:me,measureDroppableContainers:N})),[I,$e,T,q,y,R,S,me,N]);return V.default.createElement($b.Provider,{value:x},V.default.createElement(Hy.Provider,{value:je},V.default.createElement(Yy.Provider,{value:we},V.default.createElement(qy.Provider,{value:ye},d)),V.default.createElement(Ky,{disabled:!1===(null==l?void 0:l.restoreFocus)})),V.default.createElement(Cb,{...l,hiddenTextDescribedById:R}))})),Zy=t.createContext(null),Qy="button",Jy="Droppable";function ev(e){let{id:r,data:n,disabled:i=!1,attributes:a}=e;const o=cb(Jy),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(Hy),{role:g=Qy,roleDescription:p="draggable",tabIndex:m=0}=null!=a?a:{},b=(null==c?void 0:c.id)===r,y=t.useContext(b?qy:Zy),[v,x]=ob(),[$,w]=ob(),j=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:n,handler:i}=t;return e[n]=e=>{i(e,r)},e}),{})),[e,r])}(s,r),C=ib(n);rb((()=>(f.set(r,{id:r,key:o,node:v,activatorNode:$,data:C}),()=>{const e=f.get(r);e&&e.key===o&&f.delete(r)})),[f,r]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:g,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||g!==Qy)||void 0,"aria-roledescription":p,"aria-describedby":u.draggable})),[i,g,m,b,p,u.draggable]),isDragging:b,listeners:i?void 0:j,node:v,over:h,setNodeRef:x,setActivatorNodeRef:w,transform:y}}const tv="Droppable",rv={timeout:25};function nv(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function iv(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function av(e){return null!==e&&e>=0}const ov=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const a=nv(t,n,r),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},sv={scaleX:1,scaleY:1},lv=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[r])?t:n;if(!s)return null;if(i===r){const e=a[o];return e?{x:0,y:r<o?e.top+e.height-(s.top+s.height):e.top-s.top,...sv}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],a=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):a?a.top-(n.top+n.height):0;return a?a.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(a,i,r);return i>r&&i<=o?{x:0,y:-s.height-l,...sv}:i<r&&i>=o?{x:0,y:s.height+l,...sv}:{x:0,y:0,...sv}};const cv="Sortable",dv=V.default.createContext({activeIndex:-1,containerId:cv,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ov,disabled:{draggable:!1,droppable:!1}});function uv(e){let{children:r,id:n,items:i,strategy:a=ov,disabled:o=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(Yy),f=cb(cv,n),h=Boolean(null!==l.rect),g=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),p=null!=s,m=s?g.indexOf(s.id):-1,b=d?g.indexOf(d.id):-1,y=t.useRef(g),v=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(g,y.current),x=-1!==b&&-1===m||v,$=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(o);rb((()=>{v&&p&&u(g)}),[v,g,p,u]),t.useEffect((()=>{y.current=g}),[g]);const w=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:$,disableTransforms:x,items:g,overIndex:b,useDragOverlay:h,sortedRects:iv(g,c),strategy:a})),[m,f,$.draggable,$.droppable,x,g,b,c,h,a]);return V.default.createElement(dv.Provider,{value:w},r)}const fv=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return nv(r,n,i).indexOf(t)},hv=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===a||i!==o)&&(!!r||o!==i&&t===l))},gv={duration:200,easing:"ease"},pv="transform",mv=pb.Transition.toString({property:pv,duration:0,easing:"linear"}),bv={roleDescription:"sortable"};function yv(e){let{animateLayoutChanges:r=hv,attributes:n,disabled:i,data:a,getNewIndex:o=fv,id:s,strategy:l,resizeObserverConfig:c,transition:d=gv}=e;const{items:u,containerId:f,activeIndex:h,disabled:g,disableTransforms:p,sortedRects:m,overIndex:b,useDragOverlay:y,strategy:v}=t.useContext(dv),x=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,g),$=u.indexOf(s),w=t.useMemo((()=>({sortable:{containerId:f,index:$,items:u},...a})),[f,a,$,u]),j=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:C,node:S,isOver:k,setNodeRef:O}=function(e){let{data:r,disabled:n=!1,id:i,resizeObserverConfig:a}=e;const o=cb(tv),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(Hy),u=t.useRef({disabled:n}),f=t.useRef(!1),h=t.useRef(null),g=t.useRef(null),{disabled:p,updateMeasurementsFor:m,timeout:b}={...rv,...a},y=ib(null!=m?m:i),v=Ey({callback:t.useCallback((()=>{f.current?(null!=g.current&&clearTimeout(g.current),g.current=setTimeout((()=>{d(Array.isArray(y.current)?y.current:[y.current]),g.current=null}),b)):f.current=!0}),[b]),disabled:p||!s}),x=t.useCallback(((e,t)=>{v&&(t&&(v.unobserve(t),f.current=!1),e&&v.observe(e))}),[v]),[$,w]=ob(x),j=ib(r);return t.useEffect((()=>{v&&$.current&&(v.disconnect(),f.current=!1,v.observe($.current))}),[$,v]),rb((()=>(l({type:Sb.RegisterDroppable,element:{id:i,key:o,disabled:n,node:$,rect:h,data:j}}),()=>l({type:Sb.UnregisterDroppable,key:o,id:i}))),[i]),t.useEffect((()=>{n!==u.current.disabled&&(l({type:Sb.SetDroppableDisabled,id:i,key:o,disabled:n}),u.current.disabled=n)}),[i,o,n,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:$,over:c,setNodeRef:w}}({id:s,data:w,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...c}}),{active:D,activatorEvent:E,activeNodeRect:T,attributes:F,setNodeRef:_,listeners:M,isDragging:I,over:A,setActivatorNodeRef:B,transform:R}=ev({id:s,data:w,attributes:{...bv,...n},disabled:x.draggable}),P=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>e=>{r.forEach((t=>t(e)))}),r)}(O,_),z=Boolean(D),L=z&&!p&&av(h)&&av(b),N=!y&&I,W=N&&L?R:null,H=L?null!=W?W:(null!=l?l:v)({rects:m,activeNodeRect:T,activeIndex:h,overIndex:b,index:$}):null,Y=av(h)&&av(b)?o({id:s,items:u,activeIndex:h,overIndex:b}):$,V=null==D?void 0:D.id,U=t.useRef({activeId:V,items:u,newIndex:Y,containerId:f}),K=u!==U.current.items,q=r({active:D,containerId:f,isDragging:I,isSorting:z,id:s,index:$,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:r,index:n,node:i,rect:a}=e;const[o,s]=t.useState(null),l=t.useRef(n);return rb((()=>{if(!r&&n!==l.current&&i.current){const e=a.current;if(e){const t=zb(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==l.current&&(l.current=n)}),[r,n,i,a]),t.useEffect((()=>{o&&s(null)}),[o]),o}({disabled:!q,index:$,node:S,rect:C});return t.useEffect((()=>{z&&U.current.newIndex!==Y&&(U.current.newIndex=Y),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[z,Y,f,u]),t.useEffect((()=>{if(V===U.current.activeId)return;if(V&&!U.current.activeId)return void(U.current.activeId=V);const e=setTimeout((()=>{U.current.activeId=V}),50);return()=>clearTimeout(e)}),[V]),{active:D,activeIndex:h,attributes:F,data:w,rect:C,index:$,newIndex:Y,items:u,isOver:k,isSorting:z,isDragging:I,listeners:M,node:S,overIndex:b,over:A,setNodeRef:P,setActivatorNodeRef:B,setDroppableNodeRef:O,setDraggableNodeRef:_,transform:null!=X?X:H,transition:function(){if(X||K&&U.current.newIndex===$)return mv;if(N&&!hb(E)||!d)return;if(z||q)return pb.Transition.toString({...d,property:pv});return}()}}function vv(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const xv=[ay.Down,ay.Right,ay.Up,ay.Left],$v=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:a,over:o,scrollableAncestors:s}}=t;if(xv.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];a.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const a=i.get(r.id);if(a)switch(e.code){case ay.Down:n.top<a.top&&t.push(r);break;case ay.Up:n.top>a.top&&t.push(r);break;case ay.Left:n.left>a.left&&t.push(r);break;case ay.Right:n.left<a.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=Fb(t),a=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Fb(n),o=i.reduce(((e,t,n)=>{return e+(i=r[n],a=t,Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)));var i,a}),0),s=Number((o/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(Eb)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=_b(l,"id");if(c===(null==o?void 0:o.id)&&l.length>1&&(c=l[1].id),null!=c){const e=a.get(r.id),t=a.get(c),o=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&o&&e&&t){const r=Nb(l).some(((e,t)=>s[t]!==e)),i=wv(e,t),a=function(e,t){if(!vv(e)||!vv(t))return!1;if(!wv(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:a?n.width-o.width:0,y:a?n.height-o.height:0},d={x:o.left,y:o.top};return c.x&&c.y?d:fb(d,c)}}}};function wv(e,t){return!(!vv(e)||!vv(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class jv extends yy{}jv.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Cv(e.target)}];function Cv(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends dy{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Cv(e.target)}];const Sv=K.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,kv=K.default(Jd)`
    color: ${Vs.text};
    ${Ml({textSize:"body-md"})}

    ${Qs.MaxWidth.sm} {
        display: none;
    }
`,Ov=K.default(og)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Dv=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Vs.text};
    ${Ml({textSize:"body-md"})}
`,Ev=t=>{var{children:r,visible:n,onMobileClose:a}=t,o=X(t,["children","visible","onMobileClose"]);const s=o["data-testid"]||"popover",l=i.useTheme(),c=Zs["sm-max"]({theme:l}),d=tc.useMediaQuery({maxWidth:c}),u=()=>{a&&a()},f=()=>"string"==typeof r?e.jsx(exports.Typography.BodyMD,{children:r}):r;return e.jsxs(e.Fragment,{children:[n&&e.jsx(Sv,Object.assign({"data-testid":s},o,{children:e.jsx(kv,{children:f()})})),d&&e.jsx(ng,Object.assign({show:n,onOverlayClick:u},{children:e.jsx(Ov,Object.assign({onClose:u},{children:e.jsx(Dv,{children:f()})}))}))]})},Tv=K.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Fv=r=>{var n,a,{children:o,popoverContent:s,trigger:l="click",position:c="top",zIndex:d,rootNode:u,customOffset:f,delay:h,onPopoverAppear:g,onPopoverDismiss:m}=r,b=X(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,v]=t.useState(!1),x=t.useRef(),$=t.useRef(),w=i.useTheme(),j=Zs["sm-max"]({theme:w}),C=tc.useMediaQuery({maxWidth:j}),{refs:S,floatingStyles:k,context:O}=p.useFloating({open:y,placement:c,whileElementsMounted:p.autoUpdate,middleware:[p.offset(null!=f?f:16),p.flip(),p.shift({limiter:p.limitShift()})],onOpenChange:e=>{v(e),y!==e&&B(e)}}),D=Jf(),E=C?"click":l,T=p.useClick(O,{ignoreMouse:"hover"===E}),F=p.useDismiss(O),_=p.useHover(O,{enabled:"hover"===E,delay:{open:null!==(n=null==h?void 0:h.open)&&void 0!==n?n:0,close:null!==(a=null==h?void 0:h.close)&&void 0!==a?a:500}}),{getReferenceProps:M,getFloatingProps:I}=p.useInteractions([T,F,_]),A=()=>{v(!1),B(!1)},B=e=>{e&&g&&g(),!e&&m&&m()};return e.jsxs(e.Fragment,{children:[e.jsx(Tv,Object.assign({ref:e=>{x.current=e,S.setReference(e)}},M({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:o})),y&&e.jsx(p.FloatingPortal,Object.assign({root:u},{children:e.jsx(p.FloatingFocusManager,Object.assign({context:O},{children:e.jsx("div",Object.assign({ref:e=>{$.current=e,S.setFloating(e)},style:Object.assign(Object.assign({},k),{outline:"none",zIndex:null!=d?d:D})},I(),{children:"function"==typeof s?s():e.jsx(Ev,Object.assign({visible:!0,onMobileClose:A},{children:s}))}))}))}))]})},_v=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Mv=K.default.span`
    color: ${Vs["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>_v(e)}

    &:hover,
    &:focus-visible {
        color: ${Vs["text-hover"]};
        ${({$hoverStyle:e})=>_v(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Iv=K.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Av=t=>{var{ariaLabel:r,content:n,icon:i,underlineStyle:a="default",underlineHoverStyle:o="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!n;return e.jsx(Fv,Object.assign({},s,{children:e.jsxs(Mv,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:o,"aria-label":null!=r?r:l?void 0:"More info"},{children:[n,i&&e.jsx(Iv,Object.assign({$standalone:!l},{children:i}))]}))}))},Bv=K.default.div`
    padding-left: ${Xs["spacing-4"]};
    display: inline;
`,Rv=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=t;return e.jsx(Bv,{children:e.jsx(Av,{trigger:"click",id:o,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=a?a:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Pv=K.default.label`
    color: ${Vs["text-subtle"]};
    margin-bottom: ${Xs["spacing-8"]};
    display: inline-block;

    ${Ml({textSize:"body-md"})}
    font-weight: ${Us.Spec["weight-semibold"]};
`,zv=K.default.p`
    ${Us["body-sm-semibold"]}
    color: ${Vs["text-error"]};
    margin-top: ${Xs["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Lv=K.default.span`
    ${Us["body-sm-regular"]}
    color: ${Vs["text-subtler"]};
    display: block;
`,Nv=t=>{var{children:r,addon:n,subtitle:i,"data-testid":a}=t,o=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Pv,Object.assign({},o,{children:[r,n&&n.type&&("popover"===n.type?e.jsx(Rv,{addon:n}):null),"string"==typeof i?e.jsx(Lv,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},o,{children:i})):i]}))},Wv=t=>e.jsx(zv,Object.assign({},t)),Hv=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Xs["spacing-32"]};
    }
`,Yv=K.default.div`
    ${Hv}
`,Vv=K.default(_h)`
    ${Hv}
`,Uv=K.default(Ph)`
    ${Hv}
`,Kv=({label:r,errorMessage:n,id:i,disabled:a,children:o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,"data-error-testid":y})=>{const v=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||g||p||m||b)?"grid":s||"flex",x=()=>y||(i?`${i}-error-message`:"error-message"),$=()=>!!n;const w=(e=>{switch(e){case"v2-grid":return Uv;case"grid":return Vv;case"flex":return Yv}})(v);return e.jsxs(w,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b};case"flex":return}})(v),{children:[r&&("string"==typeof r?e.jsx(Nv,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},{children:r})):e.jsx(Nv,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},r))),(()=>{const e={"aria-invalid":$(),"aria-describedby":$()&&x()};return t.Children.map(o,(r=>t.cloneElement(r,e)))})(),n&&e.jsx(zv,Object.assign({id:x(),tabIndex:0,"data-testid":x()},{children:n}))]}))};function qv(e,t){return qv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},qv(e,t)}function Xv(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Gv(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Zv(e){return null!==e&&1===e.length?e[0]:e.slice()}function Qv(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Jv(e,t){return ex(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function ex(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let tx=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Qv(r.getMouseEventMap())}))}Xv(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Jv(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Qv(r.getKeyDownEventMap()),Xv(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Qv(r.getMouseEventMap()),Xv(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Qv(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},a={index:t,value:Zv(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(a)),r.props.renderThumb(i,a)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},a={index:e,value:Zv(r.state.value)};return r.props.renderTrack(i,a)};let n=Gv(t.value);n.length||(n=Gv(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Jv(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=V.default.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qv(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Gv(e.value);return r.length?t.pending?null:{value:r.map((t=>Jv(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Zv(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let a=0;a<i;a+=1){const i=this.calcOffset(n[a]),o=Math.abs(e-i);o<t&&(t=o,r=a)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Jv(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],a=n[this.posMaxKey()],o=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(a-o);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=Jv(this.calcValue(r),this.props),a=this.state.value.slice();a[n]=i;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Jv(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Jv(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:s,minDistance:l}=this.props;if(!a){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,a&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const a=n-i*r;t[e-1-i]>a&&(t[e-1-i]=a)}}(n,t,l,o)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=ex(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=ex(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Zv(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return V.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(V.default.Component);tx.displayName="ReactSlider",tx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>V.default.createElement("div",e),renderTrack:e=>V.default.createElement("div",e),renderMark:e=>V.default.createElement("span",e)};var rx=tx;const nx=K.default.div`
    isolation: isolate;
`,ix=K.default.div`
    margin-top: ${Xs["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Xs["spacing-8"]};
`,ax=K.default.div`
    margin-bottom: ${Xs["spacing-8"]};
`,ox=K.default(exports.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,sx=K.default(rx)`
    height: 0.875rem;
`,lx=K.default.div`
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

        background-color: ${Vs.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${qs["width-010"]} ${qs.solid}
            ${e=>e.$disabled?Vs["border-selected-disabled"]:Vs["border-strong"]};
        border-radius: 50%;
    }
`,cx=K.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${lx}:after {
        outline-offset: -1px;
        outline: ${qs["width-040"]} ${qs.solid}
            ${Vs["border-selected"]};
    }
`,dx=K.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Gs.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Vs["border-strong"](e)};
`,ux=r=>{var{value:n,min:i=0,max:a=100,step:o=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:g,sliderLabelSuffix:p,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:y,renderSliderLabel:v,onChange:x,onChangeEnd:$}=r,w=X(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[j,C]=t.useState(k()),S=function(){const e=function(){const e=d||u?Vs["border-disabled"]:Vs["border-strong"],t=d||u?Vs["border-selected-disabled"]:Vs["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();t.useEffect((()=>{n!==j&&C(k())}),[n]);function k(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(i+o*t);return e}const O=t=>v?v(t):e.jsxs(ox,{children:[g,t,p]});return e.jsxs(nx,Object.assign({},w,{children:[m&&e.jsx(ax,{children:(()=>{let t="";if(1===j.length)t=`${j[0]}`;else if(2===j.length)t=`${j[0]} - ${j[1]}`;else if(j.length>2){t=`${Math.min(...j)} - ${Math.max(...j)}`}return e.jsxs(ox,{children:[b,t,y]})})()}),e.jsx(sx,{step:o,min:i,max:a,value:j,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];C(t),null==x||x(t)}else{if(t>-1&&j[t]===e[t])return;C(e),null==x||x(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];C(t),null==$||$(t)}else C(e),null==$||$(e)},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e.jsx(cx,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:d?void 0:t.tabIndex},{children:e.jsx(lx,{$disabled:d,$readOnly:u})})),renderTrack:(t,r)=>e.jsx(dx,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:S[r.index]}))}),h&&e.jsxs(ix,{children:[e.jsx("div",{children:O(i)}),e.jsx("div",{children:O(a)})]})]}))},fx=K.default.div`
    display: flex;
    margin-bottom: ${Xs["spacing-16"]};
    align-items: baseline;
`,hx=K.default.div`
    margin: 0 0.5rem;
`,gx=K.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,px=K.default.div`
    flex: 1;
    border-radius: ${Gs.sm} ${Gs.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Vs["bg-strongest"];return e.$disabled&&e.$selected?t=Vs["bg-selected-stronger-disabled"]:e.$disabled?t=Vs["bg-disabled"]:e.$selected&&(t=Vs["bg-selected-stronger"]),i.css`
            background-color: ${t};
        `}}
`,mx=K.default(ux)`
    margin-top: -0.3125rem;
`,bx=r=>{var{bins:n=[],interval:i,disabled:a,readOnly:o,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:g,renderRangeLabel:p}=r,m=X(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=n.map((e=>e.count)),y=Math.max(...b),v=n.map((e=>e.minValue)),x=Math.max(...v),$=Math.min(...v),[w,j]=t.useState(O()),C=t.useMemo((()=>{const e=[...n].sort(((e,t)=>e.minValue-t.minValue)),t=(x-$)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===$+i*n));t?r.push(t):r.push({count:0,minValue:$+i*n})}return r}),[n,i]);t.useEffect((()=>{s!==w&&j(O())}),[s]);const S=e=>{j(e),null==f||f(e)},k=e=>{j(e),null==h||h(e)};function O(){return null!=s?s:[$,$+i]}const D=t=>p?p(t):e.jsxs(exports.Typography.BodyBL,{children:[c,t,d]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(fx,{children:[D(w[0]),e.jsx(hx,{children:"-"}),D(w[1])]}),C.every((e=>0===e.count))&&g?g():e.jsxs(e.Fragment,{children:[e.jsx(gx,{children:C.map(((t,r)=>{const n=t.count/y;return e.jsx(px,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=w[0]&&t.minValue<w[1],$disabled:a||o},r)}))}),e.jsx(mx,{min:$,max:x+i,step:i,minRange:i,numOfThumbs:2,value:w,disabled:a,readOnly:o,ariaLabels:u,onChange:S,onChangeEnd:k})]})]}))},yx=K.default(yf)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&i.css`
            padding-left: ${Xs["spacing-16"]};
            padding-right: ${e.$showClear?0:Xs["spacing-16"]};
        `}
`,vx=K.default(vf)`
    height: auto;
    padding: ${Xs["spacing-12"]} ${Xs["spacing-16"]};

    cursor: pointer;
    color: ${Vs.icon};

    ${e=>"no-border"===e.$styleType&&i.css`
            margin-right: -${Xs["spacing-12"]};
        `}
`,xx=K.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,$x=K.default.div`
    display: flex;
    width: 100%;
`,wx=K.default(mf)`
    display: flex;
    align-items: center;
    width: 100%;
`,jx=V.default.forwardRef(((r,n)=>{var{value:i,spacing:a,type:o,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:f=!1,className:h,styleType:g="bordered"}=r,p=X(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=t.useRef();t.useImperativeHandle(n,(()=>m.current),[]);const b=Wc({ref:m,formatter:e=>Rc.transformWithSpaces(e,a)}),y=e=>{d&&(x()?$(e):d(e))},v=()=>{u&&u(),m&&m.current&&m.current.focus()},x=()=>"tel"===o&&a,$=e=>{const{nextValue:t,updateCaretPosition:r}=b(),n=t.replace(/\s/g,"");e.target.value=n,d(e),r()},w=i?(e=>e?x()?Rc.transformWithSpaces(e,a):e:"")(i):i,j=f&&!l&&!c&&!!i,C=()=>e.jsxs(e.Fragment,{children:[e.jsx(yx,Object.assign({"data-testid":"input",ref:m,disabled:l,value:w,onChange:y,type:o,readOnly:c,$showClear:j,$styleType:g},p)),j&&e.jsx(vx,Object.assign({onClick:v,type:"button",$styleType:g},{children:e.jsx(xx,{"aria-hidden":!0})}))]});return e.jsx(e.Fragment,{children:"no-border"===g?e.jsx($x,Object.assign({className:h},{children:C()})):e.jsx(wx,Object.assign({$disabled:l,$error:s,$readOnly:c,className:h},{children:C()}))})})),Cx=V.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:a="form-field","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:a,label:n,errorMessage:i,disabled:v.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y},{children:e.jsx(jx,Object.assign({id:`${a}-base`,"data-testid":s||a,ref:r,error:!!i},v))}))}));var Sx=fo;var kx=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Ox=function(e){return this.__data__.get(e)};var Dx=function(e){return this.__data__.has(e)},Ex=fo,Tx=ho,Fx=Mo;var _x=function(e,t){var r=this.__data__;if(r instanceof Ex){var n=r.__data__;if(!Tx||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Fx(n)}return r.set(e,t),this.size=r.size,this},Mx=fo,Ix=function(){this.__data__=new Sx,this.size=0},Ax=kx,Bx=Ox,Rx=Dx,Px=_x;function zx(e){var t=this.__data__=new Mx(e);this.size=t.size}zx.prototype.clear=Ix,zx.prototype.delete=Ax,zx.prototype.get=Bx,zx.prototype.has=Rx,zx.prototype.set=Px;var Lx=zx;var Nx=Mo,Wx=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Hx=function(e){return this.__data__.has(e)};function Yx(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Nx;++t<r;)this.add(e[t])}Yx.prototype.add=Yx.prototype.push=Wx,Yx.prototype.has=Hx;var Vx=function(e,t){return e.has(t)},Ux=Yx,Kx=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},qx=Vx;var Xx=function(e,t,r,n,i,a){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new Ux:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var g=e[u],p=t[u];if(n)var m=o?n(p,g,u,t,e,a):n(g,p,u,e,t,a);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Kx(t,(function(e,t){if(!qx(h,t)&&(g===e||i(g,e,r,n,a)))return h.push(t)}))){f=!1;break}}else if(g!==p&&!i(g,p,r,n,a)){f=!1;break}}return a.delete(e),a.delete(t),f};var Gx=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Zx=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Qx=Ai.Uint8Array,Jx=Ka,e$=Xx,t$=Gx,r$=Zx,n$=Bi?Bi.prototype:void 0,i$=n$?n$.valueOf:void 0;var a$=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Qx(e),new Qx(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Jx(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=t$;case"[object Set]":var l=1&n;if(s||(s=r$),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=e$(s(e),s(t),n,i,a,o);return o.delete(e),d;case"[object Symbol]":if(i$)return i$.call(e)==i$.call(t)}return!1};var o$=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},s$=Fi;var l$=function(e,t,r){var n=t(e);return s$(e)?n:o$(n,r(e))};var c$=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},d$=function(){return[]},u$=Object.prototype.propertyIsEnumerable,f$=Object.getOwnPropertySymbols,h$=f$?function(e){return null==e?[]:(e=Object(e),c$(f$(e),(function(t){return u$.call(e,t)})))}:d$;var g$=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},p$=Ki,m$=qi;var b$=function(e){return m$(e)&&"[object Arguments]"==p$(e)},y$=qi,v$=Object.prototype,x$=v$.hasOwnProperty,$$=v$.propertyIsEnumerable,w$=b$(function(){return arguments}())?b$:function(e){return y$(e)&&x$.call(e,"callee")&&!$$.call(e,"callee")},j$={exports:{}};var C$=function(){return!1};!function(e,t){var r=Ai,n=C$,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(j$,j$.exports);var S$=j$.exports,k$=/^(?:0|[1-9]\d*)$/;var O$=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&k$.test(e))&&e>-1&&e%1==0&&e<t};var D$=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},E$=Ki,T$=D$,F$=qi,_$={};_$["[object Float32Array]"]=_$["[object Float64Array]"]=_$["[object Int8Array]"]=_$["[object Int16Array]"]=_$["[object Int32Array]"]=_$["[object Uint8Array]"]=_$["[object Uint8ClampedArray]"]=_$["[object Uint16Array]"]=_$["[object Uint32Array]"]=!0,_$["[object Arguments]"]=_$["[object Array]"]=_$["[object ArrayBuffer]"]=_$["[object Boolean]"]=_$["[object DataView]"]=_$["[object Date]"]=_$["[object Error]"]=_$["[object Function]"]=_$["[object Map]"]=_$["[object Number]"]=_$["[object Object]"]=_$["[object RegExp]"]=_$["[object Set]"]=_$["[object String]"]=_$["[object WeakMap]"]=!1;var M$=function(e){return F$(e)&&T$(e.length)&&!!_$[E$(e)]};var I$=function(e){return function(t){return e(t)}},A$={exports:{}};!function(e,t){var r=_i,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(A$,A$.exports);var B$=A$.exports,R$=M$,P$=I$,z$=B$&&B$.isTypedArray,L$=z$?P$(z$):R$,N$=g$,W$=w$,H$=Fi,Y$=S$,V$=O$,U$=L$,K$=Object.prototype.hasOwnProperty;var q$=function(e,t){var r=H$(e),n=!r&&W$(e),i=!r&&!n&&Y$(e),a=!r&&!n&&!i&&U$(e),o=r||n||i||a,s=o?N$(e.length,String):[],l=s.length;for(var c in e)!t&&!K$.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||V$(c,l))||s.push(c);return s},X$=Object.prototype;var G$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||X$)};var Z$=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Q$=G$,J$=Z$,ew=Object.prototype.hasOwnProperty;var tw=function(e){if(!Q$(e))return J$(e);var t=[];for(var r in Object(e))ew.call(e,r)&&"constructor"!=r&&t.push(r);return t},rw=sa,nw=D$;var iw=function(e){return null!=e&&nw(e.length)&&!rw(e)},aw=q$,ow=tw,sw=iw;var lw=function(e){return sw(e)?aw(e):ow(e)},cw=l$,dw=h$,uw=lw;var fw=function(e){return cw(e,uw,dw)},hw=Object.prototype.hasOwnProperty;var gw=function(e,t,r,n,i,a){var o=1&r,s=fw(e),l=s.length;if(l!=fw(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:hw.call(t,d)))return!1}var u=a.get(e),f=a.get(t);if(u&&f)return u==t&&f==e;var h=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<l;){var p=e[d=s[c]],m=t[d];if(n)var b=o?n(m,p,d,t,e,a):n(p,m,d,e,t,a);if(!(void 0===b?p===m||i(p,m,r,n,a):b)){h=!1;break}g||(g="constructor"==d)}if(h&&!g){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return a.delete(e),a.delete(t),h},pw=ka(Ai,"DataView"),mw=ho,bw=ka(Ai,"Promise"),yw=ka(Ai,"Set"),vw=ka(Ai,"WeakMap"),xw=Ki,$w=fa,ww="[object Map]",jw="[object Promise]",Cw="[object Set]",Sw="[object WeakMap]",kw="[object DataView]",Ow=$w(pw),Dw=$w(mw),Ew=$w(bw),Tw=$w(yw),Fw=$w(vw),_w=xw;(pw&&_w(new pw(new ArrayBuffer(1)))!=kw||mw&&_w(new mw)!=ww||bw&&_w(bw.resolve())!=jw||yw&&_w(new yw)!=Cw||vw&&_w(new vw)!=Sw)&&(_w=function(e){var t=xw(e),r="[object Object]"==t?e.constructor:void 0,n=r?$w(r):"";if(n)switch(n){case Ow:return kw;case Dw:return ww;case Ew:return jw;case Tw:return Cw;case Fw:return Sw}return t});var Mw=_w,Iw=Lx,Aw=Xx,Bw=a$,Rw=gw,Pw=Mw,zw=Fi,Lw=S$,Nw=L$,Ww="[object Arguments]",Hw="[object Array]",Yw="[object Object]",Vw=Object.prototype.hasOwnProperty;var Uw=function(e,t,r,n,i,a){var o=zw(e),s=zw(t),l=o?Hw:Pw(e),c=s?Hw:Pw(t),d=(l=l==Ww?Yw:l)==Yw,u=(c=c==Ww?Yw:c)==Yw,f=l==c;if(f&&Lw(e)){if(!Lw(t))return!1;o=!0,d=!1}if(f&&!d)return a||(a=new Iw),o||Nw(e)?Aw(e,t,r,n,i,a):Bw(e,t,l,r,n,i,a);if(!(1&r)){var h=d&&Vw.call(e,"__wrapped__"),g=u&&Vw.call(t,"__wrapped__");if(h||g){var p=h?e.value():e,m=g?t.value():t;return a||(a=new Iw),i(p,m,r,n,a)}}return!!f&&(a||(a=new Iw),Rw(e,t,r,n,i,a))},Kw=qi;var qw=function e(t,r,n,i,a){return t===r||(null==t||null==r||!Kw(t)&&!Kw(r)?t!=t&&r!=r:Uw(t,r,n,i,e,a))},Xw=Lx,Gw=qw;var Zw=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=r[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=r[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Xw;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?Gw(d,c,3,n,u):f))return!1}}return!0},Qw=na;var Jw=function(e){return e==e&&!Qw(e)},ej=Jw,tj=lw;var rj=function(e){for(var t=tj(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,ej(i)]}return t};var nj=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},ij=Zw,aj=rj,oj=nj;var sj=function(e,t){return null!=e&&t in Object(e)},lj=Jo,cj=w$,dj=Fi,uj=O$,fj=D$,hj=ts;var gj=function(e,t,r){for(var n=-1,i=(t=lj(t,e)).length,a=!1;++n<i;){var o=hj(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&fj(i)&&uj(o,i)&&(dj(e)||cj(e))},pj=sj,mj=gj;var bj=qw,yj=os,vj=function(e,t){return null!=e&&mj(e,t,pj)},xj=ra,$j=Jw,wj=nj,jj=ts;var Cj=function(e){return function(t){return null==t?void 0:t[e]}},Sj=is;var kj=Cj,Oj=function(e){return function(t){return Sj(t,e)}},Dj=ra,Ej=ts;var Tj=function(e){var t=aj(e);return 1==t.length&&t[0][2]?oj(t[0][0],t[0][1]):function(r){return r===e||ij(r,e,t)}},Fj=function(e,t){return xj(e)&&$j(t)?wj(jj(e),t):function(r){var n=yj(r,e);return void 0===n&&n===t?vj(r,e):bj(t,n,3)}},_j=function(e){return e},Mj=Fi,Ij=function(e){return Dj(e)?kj(Ej(e)):Oj(e)};var Aj=function(e){return"function"==typeof e?e:null==e?_j:"object"==typeof e?Mj(e)?Fj(e[0],e[1]):Tj(e):Ij(e)},Bj=Aj,Rj=iw,Pj=lw;var zj=function(e){return function(t,r,n){var i=Object(t);if(!Rj(t)){var a=Bj(r);t=Pj(t),r=function(e){return a(i[e],e,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}};var Lj=xu,Nj=1/0;var Wj=function(e){return e?(e=Lj(e))===Nj||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Hj=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},Yj=Aj,Vj=function(e){var t=Wj(e),r=t%1;return t==t?r?t-r:t:0},Uj=Math.max;var Kj=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Vj(r);return i<0&&(i=Uj(n+i,0)),Hj(e,Yj(t),i)},qj=Ti(Kj),Xj=Ti(zj(Kj)),Gj=qw;var Zj=Ti((function(e,t){return Gj(e,t)}));const Qj=K.default(Di.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Jj=K.default.ul`
    border-bottom-left-radius: ${Gs.sm};
    border-bottom-right-radius: ${Gs.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Xs["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Vs["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${Qs.MaxWidth.sm} {
        max-height: 15rem;
    }
`,eC=K.default.li`
    :hover,
    :focus,
    :active {
        background: ${Vs["bg-hover"]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${Vs["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Vs["bg-selected-hover"]};
                }
            `}}
`,tC=K.default.button`
    display: flex;
    ${e=>e.$multiSelect?i.css`
                padding: ${Xs["spacing-8"]} ${Xs["spacing-16"]};
            `:i.css`
                padding: 15px ${Xs["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Xs["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Vs["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,rC=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,nC=K.default.div`
    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}
    color: ${Vs.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rC}
`,iC=K.default.div`
    color: ${Vs["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rC}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${Us["body-md-semibold"]}
                `:i.css`
                    ${Us["body-baseline-regular"]}
                `}
`,aC=K.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${nC} {
                        display: inline;
                    }

                    ${iC} {
                        display: inline;
                        margin-left: ${Xs["spacing-8"]};
                    }
                `}}}
`,oC=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,sC=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,lC=K.default(lu)`
    flex-shrink: 0;
    margin-right: ${Xs["spacing-16"]};
`,cC=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Xs["spacing-16"]} 0 ${Xs["spacing-8"]} 0;
`,dC=K.default.button`
    ${e=>"small"===e.$variant?Us["body-md-semibold"]:Us["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Vs["text-primary"]};
`,uC=K.default.div`
    width: 100%;
    display: flex;
    padding: 15px ${Xs["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}
`,fC=K.default(s.ExclamationCircleFillIcon)`
    height: 1em;
    width: 1em;
    margin-right: ${Xs["spacing-4"]};
    color: ${Vs["icon-error"]};
`,hC=K.default($l)`
    margin-right: ${Xs["spacing-4"]};
    color: ${Vs.icon};
`,gC=e=>"small"===e?1:1.375,pC=e=>i.css`
        height: ${gC(e)}rem;
        width: ${gC(e)}rem;
    `,mC=K.default.li`
    background: ${Vs["bg-strong"]};
    display: flex;
    border-radius: ${Gs.sm};
    align-items: center;
`,bC=K.default(yf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Xs["spacing-8"]} 0 0;
    width: 100%;
`,yC=K.default(x.MagnifierIcon)`
    ${e=>pC(e.$variant)}
    margin: 0 ${Xs["spacing-8"]};
    color: ${Vs.icon};
`,vC=K.default(tl)`
    ${e=>pC(e.$variant)}
    padding: 0;
    margin: 0 ${Xs["spacing-8"]};
    color: ${Vs.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${pC(e.$variant)}
                }
            `}}
`,xC=t.forwardRef(((t,r)=>{const{onClear:n}=t,i=X(t,["onClear"]);return e.jsxs(mC,{children:[e.jsx(yC,{$variant:t.variant}),e.jsx(bC,Object.assign({ref:r,$variant:t.variant},i)),i.value&&e.jsx(vC,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:n,$variant:t.variant},{children:e.jsx(u.CrossIcon,{})}))]},"search")})),$C=r=>{var{listItems:n,listExtractor:i,valueExtractor:a,onSelectItem:o,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:g,multiSelect:p,selectedItems:m,onSelectAll:b,onRetry:y,itemsLoadState:v="success",itemTruncationType:x="end",itemMaxLines:$=2,labelDisplayType:w="inline",renderListItem:j,onBlur:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,variant:O="default"}=r,D=X(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[E,T]=t.useState(0),[F,_]=t.useState(""),[M,I]=t.useState(n),[A,B]=t.useState(0),R=di({height:A}),P=t.useRef(),z=t.useRef(),L=t.useRef([]),N=t.useRef(),W=t.useRef(),H=t.useRef(E),Y=t.useRef(M),V=e=>{H.current=e,T(e)},U=e=>{Y.current=e,I(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(F)}),[F]),t.useEffect((()=>{if(_(""),l){if(setTimeout((()=>{B(Q())})),g)return;N&&N.current?(N.current.focus(),V(-1)):L.current[E]&&L.current[E].focus()}else B(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();B(e)}}),[M,v]),t.useEffect((()=>{U(n),_(""),V(0)}),[n]);const K=e=>i?i(e):e.toString(),q=e=>{if("inline"!==w)return!1;let t=0;z&&z.current&&(t=z.current.getBoundingClientRect().width-60);return Rc.getTextWidth(e,"1.125rem 'Open Sans'")>t*$},G=e=>!!Xj(m,(t=>Zj(t,e))),Z=e=>{if(""===e)U(n);else if(f){const t=f(e);U(t)}else{const t=n.filter((t=>{var r;const n=K(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),a="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));U(t)}},Q=()=>(z&&z.current?z.current.getBoundingClientRect().height:0)+(W.current?W.current.getBoundingClientRect().height:0),J=e=>{if(P&&P.current.contains(e.target))switch(e.code){case"ArrowDown":if(H.current<Y.current.length-1){const e=H.current+1;L.current[e].focus(),V(e)}break;case"ArrowUp":if(H.current>0){const e=H.current-1;L.current[e].focus(),V(H.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),o&&o(t,(e=>a?a(e):e)(t))},te=e=>{const t=e.target.value;_(t),u&&u()},re=()=>{_(""),N.current.focus(),u&&u()},ne=()=>{y&&y()},ie=()=>{C&&C()},ae=t=>e.jsxs(e.Fragment,{children:[e.jsx(oC,Object.assign({$maxLines:$,"aria-hidden":!0},{children:t})),e.jsx(sC,Object.assign({$maxLines:$,"aria-hidden":!0},{children:t}))]}),oe=t=>{const r=K(t),n="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel,a=q(n),o=i&&q(i),s=a||o?"next-line":w;return e.jsxs(aC,Object.assign({$labelDisplayType:s},{children:[e.jsx(nC,Object.assign({$truncateType:x,$maxLines:$,$variant:O,"aria-label":n},{children:"middle"===x&&a?ae(n):n})),i&&e.jsx(iC,Object.assign({$truncateType:x,$maxLines:$,$labelDisplayType:w,"aria-label":i},{children:"middle"===x&&o?ae(i):i}))]}))},se=()=>{if(!y||y&&"success"===v)return M.map(((t,r)=>e.jsx(eC,Object.assign({$checked:G(t)&&!p},{children:e.jsxs(tC,Object.assign({$hasNextLineLabel:"next-line"===w&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{ee(e,t)},ref:e=>L.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:p,onBlur:ie,$variant:O},{children:[p&&e.jsx(lC,{checked:G(t),displaySize:"small"}),j?j(t,{selected:G(t)}):oe(t)]}))}),((e,t)=>`item_${t}__${a?a(e):e}`)(t,r))))},le=()=>{if(p&&M.length>0&&!F&&"success"===v)return e.jsx(cC,{children:e.jsx(dC,Object.assign({onClick:b,type:"button",$variant:O},{children:0===m.length?"Select all":"Clear all"}))},"selectAll")},ce=()=>{if(!S&&(F||!c)&&0===M.length&&"success"===v)return e.jsxs(uC,Object.assign({"data-testid":"list-no-results",$variant:O},{children:[e.jsx(fC,{"data-testid":"no-result-icon",$variant:O}),"No results found."]}),"noResults")},de=()=>{if(y&&"loading"===v)return e.jsxs(uC,Object.assign({"data-testid":"list-loading",$variant:O},{children:[e.jsx(hC,{}),"Loading..."]}),"loading")},ue=()=>{if(y&&"fail"===v)return e.jsxs(uC,Object.assign({"data-testid":"list-fail",$variant:O},{children:[e.jsx(fC,{"data-testid":"load-error-icon",$variant:O}),"Failed to load. ",e.jsx(dC,Object.assign({onClick:ne,type:"button",$variant:O},{children:"Try again."}))]}),"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(Qj,Object.assign({style:R,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:P},{children:[(()=>{if(l)return e.jsxs(Jj,Object.assign({ref:z,"data-testid":"dropdown-list",width:s,role:"list"},D,{children:[(c||f)&&"success"===v?e.jsx(xC,{ref:N,onChange:te,value:F,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:re,variant:O}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&k)return e.jsx("div",Object.assign({ref:W,"data-testid":"custom-cta"},{children:k(h,M)}))})()]}))})},wC=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return i.css`
                border-bottom: ${qs["width-010"]} ${qs.solid}
                    ${Vs.border};
            `}}

    ${e=>e.$readOnly?i.css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?i.css`
                        flex-direction: row-reverse;
                        margin: 0 ${Xs["spacing-16"]};
                    `:i.css`
                        flex-direction: row;
                        margin: 0 ${Xs["spacing-16"]};
                    `}
`,jC=K.default(Hf)`
    padding: 0;
    width: auto;
`,CC=K.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Xs["spacing-12"]};
`,SC=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ks["duration-250"]} ${Ks["ease-default"]};
    margin: 0 ${Xs["spacing-12"]};
    display: flex;
    align-items: center;
`,kC=K.default(f.ChevronDownIcon)`
    color: ${Vs.icon};
    height: ${Us.Spec["body-size-baseline"]};
    width: ${Us.Spec["body-size-baseline"]};
`,OC=K.default.div`
    display: flex;
    flex: 1 1 auto;
`,DC=K.default(exports.Typography.BodyBL)`
    text-align: left;
    ${xf(2)}
    text-overflow: ellipsis;
`,EC=K.default(DC)`
    color: ${Vs["text-subtler"]};
`,TC=K.default.div`
    width: 1px;
    background: ${Vs.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return i.css`
                display: none;
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin: 0 ${Xs["spacing-12"]};
                `:i.css`
                    margin: 0 ${Xs["spacing-12"]} 0 0;
                `}
`,FC=K.default(mf)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Xs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,_C=K.default(mf)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Xs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,MC=K.default(jx)``,IC=K.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Us["body-baseline-regular"]}
    color: ${Vs.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return i.css`
                color: ${Vs["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin-left: ${e.$readOnly?Xs["spacing-4"]:Xs["spacing-12"]};
                `:i.css`
                    margin-right: ${e.$readOnly?Xs["spacing-4"]:Xs["spacing-12"]};
                `};
`,AC=V.default.forwardRef(((r,n)=>{var{addon:i,error:a,onChange:o,readOnly:s,className:l,onBlur:c}=r,d=X(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:g,searchPlaceholder:p,valueExtractor:m,listExtractor:b,displayValueExtractor:y,selectedOption:v,onSelectOption:x,onHideOptions:$,onShowOptions:w,"data-selector-testid":j}=i.attributes,{position:C}=i,[S,k]=t.useState(v),[O,D]=t.useState(!1),E=t.useRef();t.useEffect((()=>{k(v)}),[v]);const T=()=>y?y(S):m?m(S):S.toString(),F=e=>{!e&&$&&$(),e&&w&&w()},_=e=>{e.preventDefault(),d.disabled||(D(!O),F(!O))},M=(e,t)=>{k(e),D(!1),F(!1),E&&E.current.focus(),x&&x(e,t)},I=e=>{o&&o(e)},A=()=>{c&&c()},B=()=>{D(!1),F(!1),E&&E.current.focus()};return e.jsxs(Zf,Object.assign({className:l,show:O,error:a&&!O,disabled:d.disabled,readOnly:s,onBlur:()=>{D(!1),F(!1),A()}},{children:[e.jsxs(wC,Object.assign({$expanded:O,$readOnly:s,$position:C},{children:[s?S?e.jsx(CC,{children:e.jsx(DC,Object.assign({"data-testid":"selector-label"},{children:T()}))}):null:e.jsx(jC,Object.assign({ref:E,type:"button",disabled:d.disabled,"data-testid":j||"addon-selector",onClick:_},{children:e.jsxs(e.Fragment,{children:[e.jsxs(OC,{children:[u&&!S&&e.jsx(EC,{children:u}),S&&e.jsx(DC,Object.assign({"data-testid":"selector-label"},{children:T()}))]}),e.jsx(SC,Object.assign({$expanded:O},{children:e.jsx(kC,{})}))]})})),e.jsx(TC,{$readOnly:s,$position:C}),e.jsx(MC,Object.assign({ref:n},d,{readOnly:s,error:a,onChange:I,"data-testid":d["data-testid"]||"input",onBlur:A,styleType:"no-border"}))]})),f&&f.length>0?e.jsx($C,{listItems:f,selectedItems:v?[v]:[],onSelectItem:M,valueExtractor:m,listExtractor:b,visible:O,enableSearch:h,searchFunction:g,searchPlaceholder:p,"data-testid":"dropdown-list",onBlur:A,onDismiss:B}):null]}))})),BC=V.default.forwardRef(((t,r)=>{var{addon:n,error:i,className:a}=t,o=X(t,["addon","error","className"]);const s=()=>e.jsx(_C,Object.assign({$disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:a},{children:e.jsx(MC,Object.assign({ref:r},o,{"data-testid":"input",styleType:"no-border"}))}));if(!n)return s();{const{type:t="label",position:l="left"}=n,{allowClear:c}=o;switch(t){case"list":{const t=n.attributes;return t.options&&t.options.length>0?e.jsx(AC,Object.assign({ref:r,addon:n,error:i,className:a},o)):s()}case"custom":{const t=n.attributes;return t.children?e.jsxs(FC,Object.assign({$error:i,$disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(IC,Object.assign({"data-testid":"addon",$disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.children})),e.jsx(MC,Object.assign({ref:r},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]})):s()}default:{const t=n.attributes;return t.value?e.jsxs(FC,Object.assign({$disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(IC,Object.assign({"data-testid":"addon",$disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.value})),e.jsx(MC,Object.assign({ref:r},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]})):s()}}}})),RC=V.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:a="form-field-group","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:a,label:n,errorMessage:i,disabled:v.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y},{children:e.jsx(BC,Object.assign({ref:r,id:`${a}-base`,"data-testid":s||a,error:!!i},v))}))})),PC=K.default(BC)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Xs["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,zC=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Vs.icon,$activeColor:r=Vs["icon-primary"]})=>e?t:r};
    padding: ${Xs["spacing-12"]} ${Xs["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,LC=K.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,NC=K.default(exports.Typography.BodyBL)`
    color: ${Vs["text-subtler"]};
`,WC=K.default($l)`
    margin-right: ${Xs["spacing-8"]};
    color: ${Vs.icon};
`,HC=K.default.span`
    color: ${Vs["text-primary"]};
    text-decoration: underline;
    font-weight: ${Us.Spec["weight-semibold"]};
`,YC=K.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Xs["spacing-8"]};
`,VC=K.default(j.ExclamationTriangleIcon)`
    color: ${Vs["icon-warning"]};
    margin-right: ${Xs["spacing-8"]};
    height: 1em;
    width: 1em;
`,UC=K.default.span`
    color: ${Vs["text-warning"]};
`,KC=K.default(vf)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Us["body-baseline-regular"]}

    :hover, :active, :focus {
        ${HC} {
            color: ${Vs["text-hover"]};
        }
    }
`;var qC={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",a="__lodash_placeholder__",o=16,s=32,l=64,c=128,d=256,u=1/0,f=9007199254740991,h=NaN,g=4294967295,p=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",s],["partialRight",l],["rearg",d]],m="[object Arguments]",b="[object Array]",y="[object Boolean]",v="[object Date]",x="[object Error]",$="[object Function]",w="[object GeneratorFunction]",j="[object Map]",C="[object Number]",S="[object Object]",k="[object Promise]",O="[object RegExp]",D="[object Set]",E="[object String]",T="[object Symbol]",F="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",I="[object Float32Array]",A="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",P="[object Int32Array]",z="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",W="[object Uint32Array]",H=/\b__p \+= '';/g,Y=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,ae=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ye=/^(?:0|[1-9]\d*)$/,ve=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,$e=/['\n\r\u2028\u2029\\]/g,we="\\ud800-\\udfff",je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ce="\\u2700-\\u27bf",Se="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Te="["+we+"]",Fe="["+De+"]",_e="["+je+"]",Me="\\d+",Ie="["+Ce+"]",Ae="["+Se+"]",Be="[^"+we+De+Me+Ce+Se+ke+"]",Re="\\ud83c[\\udffb-\\udfff]",Pe="[^"+we+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",We="\\u200d",He="(?:"+Ae+"|"+Be+")",Ye="(?:"+Ne+"|"+Be+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+_e+"|"+Re+")"+"?",qe="["+Oe+"]?",Xe=qe+Ke+("(?:"+We+"(?:"+[Pe,ze,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[Ie,ze,Le].join("|")+")"+Xe,Ze="(?:"+[Pe+_e+"?",_e,ze,Le,Te].join("|")+")",Qe=RegExp(Ee,"g"),Je=RegExp(_e,"g"),et=RegExp(Re+"(?="+Re+")|"+Ze+Xe,"g"),tt=RegExp([Ne+"?"+Ae+"+"+Ve+"(?="+[Fe,Ne,"$"].join("|")+")",Ye+"+"+Ue+"(?="+[Fe,Ne+He,"$"].join("|")+")",Ne+"?"+He+"+"+Ve,Ne+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),rt=RegExp("["+We+we+je+Oe+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],at=-1,ot={};ot[I]=ot[A]=ot[B]=ot[R]=ot[P]=ot[z]=ot[L]=ot[N]=ot[W]=!0,ot[m]=ot[b]=ot[_]=ot[y]=ot[M]=ot[v]=ot[x]=ot[$]=ot[j]=ot[C]=ot[S]=ot[O]=ot[D]=ot[E]=ot[F]=!1;var st={};st[m]=st[b]=st[_]=st[M]=st[y]=st[v]=st[I]=st[A]=st[B]=st[R]=st[P]=st[j]=st[C]=st[S]=st[O]=st[D]=st[E]=st[T]=st[z]=st[L]=st[N]=st[W]=!0,st[x]=st[$]=st[F]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),gt=t&&!t.nodeType&&t,pt=gt&&e&&!e.nodeType&&e,mt=pt&&pt.exports===gt,bt=mt&&ut.process,yt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),vt=yt&&yt.isArrayBuffer,xt=yt&&yt.isDate,$t=yt&&yt.isMap,wt=yt&&yt.isRegExp,jt=yt&&yt.isSet,Ct=yt&&yt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(n,o,r(o),e)}return n}function Ot(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Tt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function Ft(e,t){return!!(null==e?0:e.length)&&Nt(e,t,0)>-1}function _t(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function It(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function At(e,t,r,n){var i=-1,a=null==e?0:e.length;for(n&&a&&(r=e[++i]);++i<a;)r=t(r,e[i],i,e);return r}function Bt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Pt=Vt("length");function zt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Nt(e,t,r){return t==t?function(e,t,r){var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Ht,r)}function Wt(e,t,r,n){for(var i=r-1,a=e.length;++i<a;)if(n(e[i],t))return i;return-1}function Ht(e){return e!=e}function Yt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:h}function Vt(e){return function(t){return null==t?r:t[e]}}function Ut(e){return function(t){return null==e?r:e[t]}}function Kt(e,t,r,n,i){return i(e,(function(e,i,a){r=n?(n=!1,e):t(r,e,i,a)})),r}function qt(e,t){for(var n,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==r&&(n=n===r?o:n+o)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,hr(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&Nt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Nt(t,e[r],0)>-1;);return r}var rr=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+lt[e]}function ar(e){return rt.test(e)}function or(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function sr(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var s=e[r];s!==t&&s!==a||(e[r]=a,o[i++]=r)}return o}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return ar(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):Pt(e)}function fr(e){return ar(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var gr=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var pr=function e(t){var ae=(t=null==t?ht:pr.defaults(ht.Object(),t,pr.pick(ht,it))).Array,we=t.Date,je=t.Error,Ce=t.Function,Se=t.Math,ke=t.Object,Oe=t.RegExp,De=t.String,Ee=t.TypeError,Te=ae.prototype,Fe=Ce.prototype,_e=ke.prototype,Me=t["__core-js_shared__"],Ie=Fe.toString,Ae=_e.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Pe=_e.toString,ze=Ie.call(ke),Le=ht._,Ne=Oe("^"+Ie.call(Ae).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=mt?t.Buffer:r,He=t.Symbol,Ye=t.Uint8Array,Ve=We?We.allocUnsafe:r,Ue=sr(ke.getPrototypeOf,ke),Ke=ke.create,qe=_e.propertyIsEnumerable,Xe=Te.splice,Ge=He?He.isConcatSpreadable:r,Ze=He?He.iterator:r,et=He?He.toStringTag:r,rt=function(){try{var e=ua(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=we&&we.now!==ht.Date.now&&we.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,gt=Se.ceil,pt=Se.floor,bt=ke.getOwnPropertySymbols,yt=We?We.isBuffer:r,Pt=t.isFinite,Ut=Te.join,mr=sr(ke.keys,ke),br=Se.max,yr=Se.min,vr=we.now,xr=t.parseInt,$r=Se.random,wr=Te.reverse,jr=ua(t,"DataView"),Cr=ua(t,"Map"),Sr=ua(t,"Promise"),kr=ua(t,"Set"),Or=ua(t,"WeakMap"),Dr=ua(ke,"create"),Er=Or&&new Or,Tr={},Fr=Ra(jr),_r=Ra(Cr),Mr=Ra(Sr),Ir=Ra(kr),Ar=Ra(Or),Br=He?He.prototype:r,Rr=Br?Br.valueOf:r,Pr=Br?Br.toString:r;function zr(e){if(ts(e)&&!Yo(e)&&!(e instanceof Hr)){if(e instanceof Wr)return e;if(Ae.call(e,"__wrapped__"))return Pa(e)}return new Wr(e)}var Lr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Nr(){}function Wr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Hr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Xr(e,t){var r=Yo(e),n=!r&&Ho(e),i=!r&&!n&&qo(e),a=!r&&!n&&!i&&cs(e),o=r||n||i||a,s=o?Xt(e.length,De):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ya(c,l))||s.push(c);return s}function Gr(e){var t=e.length;return t?e[qn(0,t-1)]:r}function Zr(e,t){return Ia(Ei(e),sn(t,0,e.length))}function Qr(e){return Ia(Ei(e))}function Jr(e,t,n){(n!==r&&!Lo(e[t],n)||n===r&&!(t in e))&&an(e,t,n)}function en(e,t,n){var i=e[t];Ae.call(e,t)&&Lo(i,n)&&(n!==r||t in e)||an(e,t,n)}function tn(e,t){for(var r=e.length;r--;)if(Lo(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,i,a){t(n,e,r(e),a)})),n}function nn(e,t){return e&&Ti(t,Fs(t),e)}function an(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function on(e,t){for(var n=-1,i=t.length,a=ae(i),o=null==e;++n<i;)a[n]=o?r:ks(e,t[n]);return a}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ln(e,t,n,i,a,o){var s,l=1&t,c=2&t,d=4&t;if(n&&(s=a?n(e,i,a,o):n(e)),s!==r)return s;if(!es(e))return e;var u=Yo(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ei(e,s)}else{var f=ga(e),h=f==$||f==w;if(qo(e))return ji(e,l);if(f==S||f==m||h&&!a){if(s=c||h?{}:ma(e),!l)return c?function(e,t){return Ti(e,ha(e),t)}(e,function(e,t){return e&&Ti(t,_s(t),e)}(s,e)):function(e,t){return Ti(e,fa(e),t)}(e,nn(s,e))}else{if(!st[f])return a?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case _:return Ci(e);case y:case v:return new n(+e);case M:return function(e,t){var r=t?Ci(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case A:case B:case R:case P:case z:case L:case N:case W:return Si(e,r);case j:return new n;case C:case E:return new n(e);case O:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new n;case T:return i=e,Rr?ke(Rr.call(i)):{}}var i}(e,f,l)}}o||(o=new qr);var g=o.get(e);if(g)return g;o.set(e,s),os(e)?e.forEach((function(r){s.add(ln(r,t,n,r,e,o))})):rs(e)&&e.forEach((function(r,i){s.set(i,ln(r,t,n,i,e,o))}));var p=u?r:(d?c?ia:na:c?_s:Fs)(e);return Ot(p||e,(function(r,i){p&&(r=e[i=r]),en(s,i,ln(r,t,n,i,e,o))})),s}function cn(e,t,n){var i=n.length;if(null==e)return!i;for(e=ke(e);i--;){var a=n[i],o=t[a],s=e[a];if(s===r&&!(a in e)||!o(s))return!1}return!0}function dn(e,t,i){if("function"!=typeof e)throw new Ee(n);return Ta((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,a=Ft,o=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Mt(t,Zt(r))),n?(a=_t,o=!1):t.length>=200&&(a=Jt,o=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,o&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else a(t,u,n)||l.push(d)}return l}zr.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:zr}},zr.prototype=Nr.prototype,zr.prototype.constructor=zr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Yr.prototype.clear=function(){this.__data__=Dr?Dr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(e){var t=this.__data__;if(Dr){var n=t[e];return n===i?r:n}return Ae.call(t,e)?t[e]:r},Yr.prototype.has=function(e){var t=this.__data__;return Dr?t[e]!==r:Ae.call(t,e)},Yr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Dr&&t===r?i:t,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Vr.prototype.get=function(e){var t=this.__data__,n=tn(t,e);return n<0?r:t[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Cr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=ca(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ca(this,e).get(e)},Ur.prototype.has=function(e){return ca(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ca(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,i),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Cr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Mi(xn),hn=Mi($n,!0);function gn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function pn(e,t,n){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(null!=s&&(l===r?s==s&&!ls(s):n(s,l)))var l=s,c=o}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var a=-1,o=e.length;for(r||(r=ba),i||(i=[]);++a<o;){var s=e[a];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):It(i,s):n||(i[i.length]=s)}return i}var yn=Ii(),vn=Ii(!0);function xn(e,t){return e&&yn(e,t,Fs)}function $n(e,t){return e&&vn(e,t,Fs)}function wn(e,t){return Tt(t,(function(t){return Zo(e[t])}))}function jn(e,t){for(var n=0,i=(t=vi(t,e)).length;null!=e&&n<i;)e=e[Ba(t[n++])];return n&&n==i?e:r}function Cn(e,t,r){var n=t(e);return Yo(e)?n:It(n,r(e))}function Sn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in ke(e)?function(e){var t=Ae.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch(e){}var a=Pe.call(e);i&&(t?e[et]=n:delete e[et]);return a}(e):function(e){return Pe.call(e)}(e)}function kn(e,t){return e>t}function On(e,t){return null!=e&&Ae.call(e,t)}function Dn(e,t){return null!=e&&t in ke(e)}function En(e,t,n){for(var i=n?_t:Ft,a=e[0].length,o=e.length,s=o,l=ae(o),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),c=yr(u.length,c),l[s]=!n&&(t||a>=120&&u.length>=120)?new Kr(s&&u):r}u=e[0];var f=-1,h=l[0];e:for(;++f<a&&d.length<c;){var g=u[f],p=t?t(g):g;if(g=n||0!==g?g:0,!(h?Jt(h,p):i(d,p,n))){for(s=o;--s;){var m=l[s];if(!(m?Jt(m,p):i(e[s],p,n)))continue e}h&&h.push(p),d.push(g)}}return d}function Tn(e,t,n){var i=null==(e=Oa(e,t=vi(t,e)))?e:e[Ba(Xa(t))];return null==i?r:St(i,e,n)}function Fn(e){return ts(e)&&Sn(e)==m}function _n(e,t,n,i,a){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,n,i,a,o){var s=Yo(e),l=Yo(t),c=s?b:ga(e),d=l?b:ga(t),u=(c=c==m?S:c)==S,f=(d=d==m?S:d)==S,h=c==d;if(h&&qo(e)){if(!qo(t))return!1;s=!0,u=!1}if(h&&!u)return o||(o=new qr),s||cs(e)?ta(e,t,n,i,a,o):function(e,t,r,n,i,a,o){switch(r){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!a(new Ye(e),new Ye(t)));case y:case v:case C:return Lo(+e,+t);case x:return e.name==t.name&&e.message==t.message;case O:case E:return e==t+"";case j:var s=or;case D:var l=1&n;if(s||(s=cr),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=ta(s(e),s(t),n,i,a,o);return o.delete(e),d;case T:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,c,n,i,a,o);if(!(1&n)){var g=u&&Ae.call(e,"__wrapped__"),p=f&&Ae.call(t,"__wrapped__");if(g||p){var $=g?e.value():e,w=p?t.value():t;return o||(o=new qr),a($,w,n,i,o)}}if(!h)return!1;return o||(o=new qr),function(e,t,n,i,a,o){var s=1&n,l=na(e),c=l.length,d=na(t),u=d.length;if(c!=u&&!s)return!1;var f=c;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var g=o.get(e),p=o.get(t);if(g&&p)return g==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);var b=s;for(;++f<c;){var y=e[h=l[f]],v=t[h];if(i)var x=s?i(v,y,h,t,e,o):i(y,v,h,e,t,o);if(!(x===r?y===v||a(y,v,n,i,o):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var $=e.constructor,w=t.constructor;$==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof $&&$ instanceof $&&"function"==typeof w&&w instanceof w||(m=!1)}return o.delete(e),o.delete(t),m}(e,t,n,i,a,o)}(e,t,n,i,_n,a))}function Mn(e,t,n,i){var a=n.length,o=a,s=!i;if(null==e)return!o;for(e=ke(e);a--;){var l=n[a];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<o;){var c=(l=n[a])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===r&&!(c in e))return!1}else{var f=new qr;if(i)var h=i(d,u,c,e,t,f);if(!(h===r?_n(u,d,3,i,f):h))return!1}}return!0}function In(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Zo(e)?Ne:me).test(Ra(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Yo(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!ja(e))return mr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=ja(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function Pn(e,t){return e<t}function zn(e,t){var r=-1,n=Uo(e)?ae(e.length):[];return fn(e,(function(e,i,a){n[++r]=t(e,i,a)})),n}function Ln(e){var t=da(e);return 1==t.length&&t[0][2]?Sa(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(e,t){return xa(e)&&Ca(t)?Sa(Ba(e),t):function(n){var i=ks(n,e);return i===r&&i===t?Os(n,e):_n(t,i,3)}}function Wn(e,t,n,i,a){e!==t&&yn(t,(function(o,s){if(a||(a=new qr),es(o))!function(e,t,n,i,a,o,s){var l=Da(e,n),c=Da(t,n),d=s.get(c);if(d)return void Jr(e,n,d);var u=o?o(l,c,n+"",e,t,s):r,f=u===r;if(f){var h=Yo(c),g=!h&&qo(c),p=!h&&!g&&cs(c);u=c,h||g||p?Yo(l)?u=l:Ko(l)?u=Ei(l):g?(f=!1,u=ji(c,!0)):p?(f=!1,u=Si(c,!0)):u=[]:is(c)||Ho(c)?(u=l,Ho(l)?u=bs(l):es(l)&&!Zo(l)||(u=ma(c))):f=!1}f&&(s.set(c,u),a(u,c,i,o,s),s.delete(c));Jr(e,n,u)}(e,t,s,n,Wn,i,a);else{var l=i?i(Da(e,s),o,s+"",e,t,a):r;l===r&&(l=o),Jr(e,s,l)}}),_s)}function Hn(e,t){var n=e.length;if(n)return ya(t+=t<0?n:0,n)?e[t]:r}function Yn(e,t,r){t=t.length?Mt(t,(function(e){return Yo(e)?function(t){return jn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,Zt(la()));var i=zn(e,(function(e,r,i){var a=Mt(t,(function(t){return t(e)}));return{criteria:a,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){var n=-1,i=e.criteria,a=t.criteria,o=i.length,s=r.length;for(;++n<o;){var l=ki(i[n],a[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,a={};++n<i;){var o=t[n],s=jn(e,o);r(s,o)&&Jn(a,vi(o,e),s)}return a}function Un(e,t,r,n){var i=n?Wt:Nt,a=-1,o=t.length,s=e;for(e===t&&(t=Ei(t)),r&&(s=Mt(e,Zt(r)));++a<o;)for(var l=0,c=t[a],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==a){var a=i;ya(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qn(e,t){return e+pt($r()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>f)return r;do{t%2&&(r+=e),(t=pt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Fa(ka(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Ia(r,sn(t,0,r.length))}function Jn(e,t,n,i){if(!es(e))return e;for(var a=-1,o=(t=vi(t,e)).length,s=o-1,l=e;null!=l&&++a<o;){var c=Ba(t[a]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(a!=s){var u=l[c];(d=i?i(u,c,l):r)===r&&(d=es(u)?u:ya(t[a+1])?[]:{})}en(l,c,d),l=l[c]}return e}var ei=Er?function(e,t){return Er.set(e,t),e}:nl,ti=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Ia(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var a=ae(i);++n<i;)a[n]=e[n+t];return a}function ii(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function ai(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var a=n+i>>>1,o=e[a];null!==o&&!ls(o)&&(r?o<=t:o<t)?n=a+1:i=a}return i}return oi(e,t,nl,r)}function oi(e,t,n,i){var a=0,o=null==e?0:e.length;if(0===o)return 0;for(var s=(t=n(t))!=t,l=null===t,c=ls(t),d=t===r;a<o;){var u=pt((a+o)/2),f=n(e[u]),h=f!==r,g=null===f,p=f==f,m=ls(f);if(s)var b=i||p;else b=d?p&&(i||h):l?p&&h&&(i||!g):c?p&&h&&!g&&(i||!m):!g&&!m&&(i?f<=t:f<t);b?a=u+1:o=u}return yr(o,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var o=e[r],s=t?t(o):o;if(!r||!Lo(s,l)){var l=s;a[i++]=0===o?0:o}}return a}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function ci(e){if("string"==typeof e)return e;if(Yo(e))return Mt(e,ci)+"";if(ls(e))return Pr?Pr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Ft,a=e.length,o=!0,s=[],l=s;if(r)o=!1,i=_t;else if(a>=200){var c=t?null:Xi(e);if(c)return cr(c);o=!1,i=Jt,l=new Kr}else l=t?[]:s;e:for(;++n<a;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,o&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Oa(e,t=vi(t,e)))||delete e[Ba(Xa(t))]}function fi(e,t,r,n){return Jn(e,t,r(jn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,a=n?i:-1;(n?a--:++a<i)&&t(e[a],a,e););return r?ni(e,n?0:a,n?a+1:i):ni(e,n?a+1:0,n?i:a)}function gi(e,t){var r=e;return r instanceof Hr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,It([e],t.args))}),r)}function pi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,a=ae(n);++i<n;)for(var o=e[i],s=-1;++s<n;)s!=i&&(a[i]=un(a[i]||o,e[s],t,r));return di(bn(a,1),t,r)}function mi(e,t,n){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var l=i<o?t[i]:r;n(s,e[i],l)}return s}function bi(e){return Ko(e)?e:[]}function yi(e){return"function"==typeof e?e:nl}function vi(e,t){return Yo(e)?e:xa(e,t)?[e]:Aa(ys(e))}var xi=Gn;function $i(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ni(e,t,n)}var wi=lt||function(e){return ht.clearTimeout(e)};function ji(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Ci(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function Si(e,t){var r=t?Ci(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var n=e!==r,i=null===e,a=e==e,o=ls(e),s=t!==r,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!o&&e>t||o&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!a)return 1;if(!i&&!o&&!d&&e<t||d&&n&&a&&!i&&!o||l&&n&&a||!s&&a||!c)return-1}return 0}function Oi(e,t,r,n){for(var i=-1,a=e.length,o=r.length,s=-1,l=t.length,c=br(a-o,0),d=ae(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<o;)(u||i<a)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Di(e,t,r,n){for(var i=-1,a=e.length,o=-1,s=r.length,l=-1,c=t.length,d=br(a-s,0),u=ae(d+c),f=!n;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++o<s;)(f||i<a)&&(u[h+r[o]]=e[i++]);return u}function Ei(e,t){var r=-1,n=e.length;for(t||(t=ae(n));++r<n;)t[r]=e[r];return t}function Ti(e,t,n,i){var a=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var l=t[o],c=i?i(n[l],e[l],l,n,e):r;c===r&&(c=e[l]),a?an(n,l,c):en(n,l,c)}return n}function Fi(e,t){return function(r,n){var i=Yo(r)?kt:rn,a=t?t():{};return i(r,e,la(n,2),a)}}function _i(e){return Gn((function(t,n){var i=-1,a=n.length,o=a>1?n[a-1]:r,s=a>2?n[2]:r;for(o=e.length>3&&"function"==typeof o?(a--,o):r,s&&va(n[0],n[1],s)&&(o=a<3?r:o,a=1),t=ke(t);++i<a;){var l=n[i];l&&e(t,l,i,o)}return t}))}function Mi(e,t){return function(r,n){if(null==r)return r;if(!Uo(r))return e(r,n);for(var i=r.length,a=t?i:-1,o=ke(r);(t?a--:++a<i)&&!1!==n(o[a],a,o););return r}}function Ii(e){return function(t,r,n){for(var i=-1,a=ke(t),o=n(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===r(a[l],l,a))break}return t}}function Ai(e){return function(t){var n=ar(t=ys(t))?fr(t):r,i=n?n[0]:t.charAt(0),a=n?$i(n,1).join(""):t.slice(1);return i[e]()+a}}function Bi(e){return function(t){return At(Zs(Hs(t).replace(Qe,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Pi(e){return function(t,n,i){var a=ke(t);if(!Uo(t)){var o=la(n,3);t=Fs(t),n=function(e){return o(a[e],e,a)}}var s=e(t,n,i);return s>-1?a[o?t[s]:s]:r}}function zi(e){return ra((function(t){var i=t.length,a=i,o=Wr.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if("function"!=typeof s)throw new Ee(n);if(o&&!l&&"wrapper"==oa(s))var l=new Wr([],!0)}for(a=l?a:i;++a<i;){var c=oa(s=t[a]),d="wrapper"==c?aa(s):r;l=d&&$a(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[oa(d[0])].apply(l,d[3]):1==s.length&&$a(s)?l[c]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Yo(r))return l.plant(r).value();for(var n=0,a=i?t[n].apply(this,e):r;++n<i;)a=t[n].call(this,a);return a}}))}function Li(e,t,n,i,a,o,s,l,d,u){var f=t&c,h=1&t,g=2&t,p=24&t,m=512&t,b=g?r:Ri(e);return function c(){for(var y=arguments.length,v=ae(y),x=y;x--;)v[x]=arguments[x];if(p)var $=sa(c),w=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(v,$);if(i&&(v=Oi(v,i,a,p)),o&&(v=Di(v,o,s,p)),y-=w,p&&y<u){var j=lr(v,$);return Ki(e,t,Li,c.placeholder,n,v,j,l,d,u-y)}var C=h?n:this,S=g?C[e]:e;return y=v.length,l?v=function(e,t){var n=e.length,i=yr(t.length,n),a=Ei(e);for(;i--;){var o=t[i];e[i]=ya(o,n)?a[o]:r}return e}(v,l):m&&y>1&&v.reverse(),f&&d<y&&(v.length=d),this&&this!==ht&&this instanceof c&&(S=b||Ri(S)),S.apply(C,v)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,a){t(n,r(e),i,a)})),n}(r,e,t(n),{})}}function Wi(e,t){return function(n,i){var a;if(n===r&&i===r)return t;if(n!==r&&(a=n),i!==r){if(a===r)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),a=e(n,i)}return a}}function Hi(e){return ra((function(t){return t=Mt(t,Zt(la())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Yi(e,t){var n=(t=t===r?" ":ci(t)).length;if(n<2)return n?Xn(t,e):t;var i=Xn(t,gt(e/ur(t)));return ar(t)?$i(fr(i),0,e).join(""):i.slice(0,e)}function Vi(e){return function(t,n,i){return i&&"number"!=typeof i&&va(t,n,i)&&(n=i=r),t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r,n){for(var i=-1,a=br(gt((t-e)/(r||1)),0),o=ae(a);a--;)o[n?a:++i]=e,e+=r;return o}(t,n,i=i===r?t<n?1:-1:hs(i),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(e,t,n,i,a,o,c,d,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var g=[e,t,a,h?o:r,h?c:r,h?r:o,h?r:c,d,u,f],p=n.apply(r,g);return $a(e)&&Ea(p,g),p.placeholder=i,_a(p,e,t)}function qi(e){var t=Se[e];return function(e,r){if(e=ms(e),(r=null==r?0:yr(gs(r),292))&&Pt(e)){var n=(ys(e)+"e").split("e");return+((n=(ys(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Xi=kr&&1/cr(new kr([,-0]))[1]==u?function(e){return new kr(e)}:ll;function Gi(e){return function(t){var r=ga(t);return r==j?or(t):r==D?dr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,g,p){var m=2&t;if(!m&&"function"!=typeof e)throw new Ee(n);var b=u?u.length:0;if(b||(t&=-97,u=f=r),g=g===r?g:br(gs(g),0),p=p===r?p:gs(p),b-=f?f.length:0,t&l){var y=u,v=f;u=f=r}var x=m?r:aa(e),$=[e,t,i,u,f,y,v,h,g,p];if(x&&function(e,t){var r=e[1],n=t[1],i=r|n,o=i<131,s=n==c&&8==r||n==c&&r==d&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!o&&!s)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Oi(u,l,t[4]):l,e[4]=u?lr(e[3],a):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Di(u,l,t[6]):l,e[6]=u?lr(e[5],a):t[6]);(l=t[7])&&(e[7]=l);n&c&&(e[8]=null==e[8]?t[8]:yr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}($,x),e=$[0],t=$[1],i=$[2],u=$[3],f=$[4],!(p=$[9]=$[9]===r?m?0:e.length:br($[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)w=8==t||t==o?function(e,t,n){var i=Ri(e);return function a(){for(var o=arguments.length,s=ae(o),l=o,c=sa(a);l--;)s[l]=arguments[l];var d=o<3&&s[0]!==c&&s[o-1]!==c?[]:lr(s,c);return(o-=d.length)<n?Ki(e,t,Li,a.placeholder,r,s,d,r,r,n-o):St(this&&this!==ht&&this instanceof a?i:e,this,s)}}(e,t,p):t!=s&&33!=t||f.length?Li.apply(r,$):function(e,t,r,n){var i=1&t,a=Ri(e);return function t(){for(var o=-1,s=arguments.length,l=-1,c=n.length,d=ae(c+s),u=this&&this!==ht&&this instanceof t?a:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++o];return St(u,i?r:this,d)}}(e,t,i,u);else var w=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return _a((x?ei:Ea)(w,$),e,t)}function Qi(e,t,n,i){return e===r||Lo(e,_e[n])&&!Ae.call(i,n)?t:e}function Ji(e,t,n,i,a,o){return es(e)&&es(t)&&(o.set(t,e),Wn(e,t,r,Ji,o),o.delete(t)),e}function ea(e){return is(e)?r:e}function ta(e,t,n,i,a,o){var s=1&n,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=o.get(e),u=o.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,g=2&n?new Kr:r;for(o.set(e,t),o.set(t,e);++f<l;){var p=e[f],m=t[f];if(i)var b=s?i(m,p,f,t,e,o):i(p,m,f,e,t,o);if(b!==r){if(b)continue;h=!1;break}if(g){if(!Rt(t,(function(e,t){if(!Jt(g,t)&&(p===e||a(p,e,n,i,o)))return g.push(t)}))){h=!1;break}}else if(p!==m&&!a(p,m,n,i,o)){h=!1;break}}return o.delete(e),o.delete(t),h}function ra(e){return Fa(ka(e,r,Ya),e+"")}function na(e){return Cn(e,Fs,fa)}function ia(e){return Cn(e,_s,ha)}var aa=Er?function(e){return Er.get(e)}:ll;function oa(e){for(var t=e.name+"",r=Tr[t],n=Ae.call(Tr,t)?r.length:0;n--;){var i=r[n],a=i.func;if(null==a||a==e)return i.name}return t}function sa(e){return(Ae.call(zr,"placeholder")?zr:e).placeholder}function la(){var e=zr.iteratee||il;return e=e===il?An:e,arguments.length?e(arguments[0],arguments[1]):e}function ca(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function da(e){for(var t=Fs(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ca(i)]}return t}function ua(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return In(n)?n:r}var fa=bt?function(e){return null==e?[]:(e=ke(e),Tt(bt(e),(function(t){return qe.call(e,t)})))}:pl,ha=bt?function(e){for(var t=[];e;)It(t,fa(e)),e=Ue(e);return t}:pl,ga=Sn;function pa(e,t,r){for(var n=-1,i=(t=vi(t,e)).length,a=!1;++n<i;){var o=Ba(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Jo(i)&&ya(o,i)&&(Yo(e)||Ho(e))}function ma(e){return"function"!=typeof e.constructor||ja(e)?{}:Lr(Ue(e))}function ba(e){return Yo(e)||Ho(e)||!!(Ge&&e&&e[Ge])}function ya(e,t){var r=typeof e;return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ye.test(e))&&e>-1&&e%1==0&&e<t}function va(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Uo(r)&&ya(t,r.length):"string"==n&&t in r)&&Lo(r[t],e)}function xa(e,t){if(Yo(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in ke(t))}function $a(e){var t=oa(e),r=zr[t];if("function"!=typeof r||!(t in Hr.prototype))return!1;if(e===r)return!0;var n=aa(r);return!!n&&e===n[0]}(jr&&ga(new jr(new ArrayBuffer(1)))!=M||Cr&&ga(new Cr)!=j||Sr&&ga(Sr.resolve())!=k||kr&&ga(new kr)!=D||Or&&ga(new Or)!=F)&&(ga=function(e){var t=Sn(e),n=t==S?e.constructor:r,i=n?Ra(n):"";if(i)switch(i){case Fr:return M;case _r:return j;case Mr:return k;case Ir:return D;case Ar:return F}return t});var wa=Me?Zo:ml;function ja(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_e)}function Ca(e){return e==e&&!es(e)}function Sa(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in ke(n)))}}function ka(e,t,n){return t=br(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=br(r.length-t,0),o=ae(a);++i<a;)o[i]=r[t+i];i=-1;for(var s=ae(t+1);++i<t;)s[i]=r[i];return s[t]=n(o),St(e,this,s)}}function Oa(e,t){return t.length<2?e:jn(e,ni(t,0,-1))}function Da(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ea=Ma(ei),Ta=ft||function(e,t){return ht.setTimeout(e,t)},Fa=Ma(ti);function _a(e,t,r){var n=t+"";return Fa(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Ot(p,(function(r){var n="_."+r[0];t&r[1]&&!Ft(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(n),r)))}function Ma(e){var t=0,n=0;return function(){var i=vr(),a=16-(i-n);if(n=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ia(e,t){var n=-1,i=e.length,a=i-1;for(t=t===r?i:t;++n<t;){var o=qn(n,a),s=e[o];e[o]=e[n],e[n]=s}return e.length=t,e}var Aa=function(e){var t=Io(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)})),t}));function Ba(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ra(e){if(null!=e){try{return Ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pa(e){if(e instanceof Hr)return e.clone();var t=new Wr(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var za=Gn((function(e,t){return Ko(e)?un(e,bn(t,1,Ko,!0)):[]})),La=Gn((function(e,t){var n=Xa(t);return Ko(n)&&(n=r),Ko(e)?un(e,bn(t,1,Ko,!0),la(n,2)):[]})),Na=Gn((function(e,t){var n=Xa(t);return Ko(n)&&(n=r),Ko(e)?un(e,bn(t,1,Ko,!0),r,n):[]}));function Wa(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Lt(e,la(t,3),i)}function Ha(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var a=i-1;return n!==r&&(a=gs(n),a=n<0?br(i+a,0):yr(a,i-1)),Lt(e,la(t,3),a,!0)}function Ya(e){return(null==e?0:e.length)?bn(e,1):[]}function Va(e){return e&&e.length?e[0]:r}var Ua=Gn((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?En(t):[]})),Ka=Gn((function(e){var t=Xa(e),n=Mt(e,bi);return t===Xa(n)?t=r:n.pop(),n.length&&n[0]===e[0]?En(n,la(t,2)):[]})),qa=Gn((function(e){var t=Xa(e),n=Mt(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?En(n,r,t):[]}));function Xa(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Ga=Gn(Za);function Za(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Qa=ra((function(e,t){var r=null==e?0:e.length,n=on(e,t);return Kn(e,Mt(t,(function(e){return ya(e,r)?+e:e})).sort(ki)),n}));function Ja(e){return null==e?e:wr.call(e)}var eo=Gn((function(e){return di(bn(e,1,Ko,!0))})),to=Gn((function(e){var t=Xa(e);return Ko(t)&&(t=r),di(bn(e,1,Ko,!0),la(t,2))})),ro=Gn((function(e){var t=Xa(e);return t="function"==typeof t?t:r,di(bn(e,1,Ko,!0),r,t)}));function no(e){if(!e||!e.length)return[];var t=0;return e=Tt(e,(function(e){if(Ko(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Vt(t))}))}function io(e,t){if(!e||!e.length)return[];var n=no(e);return null==t?n:Mt(n,(function(e){return St(t,r,e)}))}var ao=Gn((function(e,t){return Ko(e)?un(e,t):[]})),oo=Gn((function(e){return pi(Tt(e,Ko))})),so=Gn((function(e){var t=Xa(e);return Ko(t)&&(t=r),pi(Tt(e,Ko),la(t,2))})),lo=Gn((function(e){var t=Xa(e);return t="function"==typeof t?t:r,pi(Tt(e,Ko),r,t)})),co=Gn(no);var uo=Gn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,io(e,n)}));function fo(e){var t=zr(e);return t.__chain__=!0,t}function ho(e,t){return t(e)}var go=ra((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,a=function(t){return on(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Hr&&ya(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ho,args:[a],thisArg:r}),new Wr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(a)}));var po=Fi((function(e,t,r){Ae.call(e,r)?++e[r]:an(e,r,1)}));var mo=Pi(Wa),bo=Pi(Ha);function yo(e,t){return(Yo(e)?Ot:fn)(e,la(t,3))}function vo(e,t){return(Yo(e)?Dt:hn)(e,la(t,3))}var xo=Fi((function(e,t,r){Ae.call(e,r)?e[r].push(t):an(e,r,[t])}));var $o=Gn((function(e,t,r){var n=-1,i="function"==typeof t,a=Uo(e)?ae(e.length):[];return fn(e,(function(e){a[++n]=i?St(t,e,r):Tn(e,t,r)})),a})),wo=Fi((function(e,t,r){an(e,r,t)}));function jo(e,t){return(Yo(e)?Mt:zn)(e,la(t,3))}var Co=Fi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var So=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&va(e,t[0],t[1])?t=[]:r>2&&va(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ko=ut||function(){return ht.Date.now()};function Oo(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,c,r,r,r,r,t)}function Do(e,t){var i;if("function"!=typeof t)throw new Ee(n);return e=gs(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var Eo=Gn((function(e,t,r){var n=1;if(r.length){var i=lr(r,sa(Eo));n|=s}return Zi(e,n,t,r,i)})),To=Gn((function(e,t,r){var n=3;if(r.length){var i=lr(r,sa(To));n|=s}return Zi(t,n,e,r,i)}));function Fo(e,t,i){var a,o,s,l,c,d,u=0,f=!1,h=!1,g=!0;if("function"!=typeof e)throw new Ee(n);function p(t){var n=a,i=o;return a=o=r,u=t,l=e.apply(i,n)}function m(e){var n=e-d;return d===r||n>=t||n<0||h&&e-u>=s}function b(){var e=ko();if(m(e))return y(e);c=Ta(b,function(e){var r=t-(e-d);return h?yr(r,s-(e-u)):r}(e))}function y(e){return c=r,g&&a?p(e):(a=o=r,l)}function v(){var e=ko(),n=m(e);if(a=arguments,o=this,d=e,n){if(c===r)return function(e){return u=e,c=Ta(b,t),f?p(e):l}(d);if(h)return wi(c),c=Ta(b,t),p(d)}return c===r&&(c=Ta(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?br(ms(i.maxWait)||0,t):s,g="trailing"in i?!!i.trailing:g),v.cancel=function(){c!==r&&wi(c),u=0,a=d=o=c=r},v.flush=function(){return c===r?l:y(ko())},v}var _o=Gn((function(e,t){return dn(e,1,t)})),Mo=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Io(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ee(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Io.Cache||Ur),r}function Ao(e){if("function"!=typeof e)throw new Ee(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Io.Cache=Ur;var Bo=xi((function(e,t){var r=(t=1==t.length&&Yo(t[0])?Mt(t[0],Zt(la())):Mt(bn(t,1),Zt(la()))).length;return Gn((function(n){for(var i=-1,a=yr(n.length,r);++i<a;)n[i]=t[i].call(this,n[i]);return St(e,this,n)}))})),Ro=Gn((function(e,t){var n=lr(t,sa(Ro));return Zi(e,s,r,t,n)})),Po=Gn((function(e,t){var n=lr(t,sa(Po));return Zi(e,l,r,t,n)})),zo=ra((function(e,t){return Zi(e,d,r,r,r,t)}));function Lo(e,t){return e===t||e!=e&&t!=t}var No=Ui(kn),Wo=Ui((function(e,t){return e>=t})),Ho=Fn(function(){return arguments}())?Fn:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Yo=ae.isArray,Vo=vt?Zt(vt):function(e){return ts(e)&&Sn(e)==_};function Uo(e){return null!=e&&Jo(e.length)&&!Zo(e)}function Ko(e){return ts(e)&&Uo(e)}var qo=yt||ml,Xo=xt?Zt(xt):function(e){return ts(e)&&Sn(e)==v};function Go(e){if(!ts(e))return!1;var t=Sn(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Zo(e){if(!es(e))return!1;var t=Sn(e);return t==$||t==w||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(e){return"number"==typeof e&&e==gs(e)}function Jo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=$t?Zt($t):function(e){return ts(e)&&ga(e)==j};function ns(e){return"number"==typeof e||ts(e)&&Sn(e)==C}function is(e){if(!ts(e)||Sn(e)!=S)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ie.call(r)==ze}var as=wt?Zt(wt):function(e){return ts(e)&&Sn(e)==O};var os=jt?Zt(jt):function(e){return ts(e)&&ga(e)==D};function ss(e){return"string"==typeof e||!Yo(e)&&ts(e)&&Sn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&Sn(e)==T}var cs=Ct?Zt(Ct):function(e){return ts(e)&&Jo(e.length)&&!!ot[Sn(e)]};var ds=Ui(Pn),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Uo(e))return ss(e)?fr(e):Ei(e);if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ze]());var t=ga(e);return(t==j?or:t==D?cr:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function gs(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function ps(e){return e?sn(gs(e),0,g):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=pe.test(e);return r||be.test(e)?dt(e.slice(2),r?2:8):ge.test(e)?h:+e}function bs(e){return Ti(e,_s(e))}function ys(e){return null==e?"":ci(e)}var vs=_i((function(e,t){if(ja(t)||Uo(t))Ti(t,Fs(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=_i((function(e,t){Ti(t,_s(t),e)})),$s=_i((function(e,t,r,n){Ti(t,_s(t),e,n)})),ws=_i((function(e,t,r,n){Ti(t,Fs(t),e,n)})),js=ra(on);var Cs=Gn((function(e,t){e=ke(e);var n=-1,i=t.length,a=i>2?t[2]:r;for(a&&va(t[0],t[1],a)&&(i=1);++n<i;)for(var o=t[n],s=_s(o),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===r||Lo(u,_e[d])&&!Ae.call(e,d))&&(e[d]=o[d])}return e})),Ss=Gn((function(e){return e.push(r,Ji),St(Is,r,e)}));function ks(e,t,n){var i=null==e?r:jn(e,t);return i===r?n:i}function Os(e,t){return null!=e&&pa(e,t,Dn)}var Ds=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Pe.call(t)),e[t]=r}),el(nl)),Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Pe.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),la),Ts=Gn(Tn);function Fs(e){return Uo(e)?Xr(e):Bn(e)}function _s(e){return Uo(e)?Xr(e,!0):Rn(e)}var Ms=_i((function(e,t,r){Wn(e,t,r)})),Is=_i((function(e,t,r,n){Wn(e,t,r,n)})),As=ra((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=vi(t,e),n||(n=t.length>1),t})),Ti(e,ia(e),r),n&&(r=ln(r,7,ea));for(var i=t.length;i--;)ui(r,t[i]);return r}));var Bs=ra((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Os(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=Mt(ia(e),(function(e){return[e]}));return t=la(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Ps=Gi(Fs),zs=Gi(_s);function Ls(e){return null==e?[]:Qt(e,Fs(e))}var Ns=Bi((function(e,t,r){return t=t.toLowerCase(),e+(r?Ws(t):t)}));function Ws(e){return Gs(ys(e).toLowerCase())}function Hs(e){return(e=ys(e))&&e.replace(ve,rr).replace(Je,"")}var Ys=Bi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Bi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Bi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var qs=Bi((function(e,t,r){return e+(r?" ":"")+Gs(t)}));var Xs=Bi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,n){return e=ys(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gn((function(e,t){try{return St(e,r,t)}catch(e){return Go(e)?e:new je(e)}})),Js=ra((function(e,t){return Ot(t,(function(t){t=Ba(t),an(e,t,Eo(e[t],e))})),e}));function el(e){return function(){return e}}var tl=zi(),rl=zi(!0);function nl(e){return e}function il(e){return An("function"==typeof e?e:ln(e,1))}var al=Gn((function(e,t){return function(r){return Tn(r,e,t)}})),ol=Gn((function(e,t){return function(r){return Tn(e,r,t)}}));function sl(e,t,r){var n=Fs(t),i=wn(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=wn(t,Fs(t)));var a=!(es(r)&&"chain"in r&&!r.chain),o=Zo(e);return Ot(i,(function(r){var n=t[r];e[r]=n,o&&(e.prototype[r]=function(){var t=this.__chain__;if(a||t){var r=e(this.__wrapped__);return(r.__actions__=Ei(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,It([this.value()],arguments))})})),e}function ll(){}var cl=Hi(Mt),dl=Hi(Et),ul=Hi(Rt);function fl(e){return xa(e)?Vt(Ba(e)):function(e){return function(t){return jn(t,e)}}(e)}var hl=Vi(),gl=Vi(!0);function pl(){return[]}function ml(){return!1}var bl=Wi((function(e,t){return e+t}),0),yl=qi("ceil"),vl=Wi((function(e,t){return e/t}),1),xl=qi("floor");var $l,wl=Wi((function(e,t){return e*t}),1),jl=qi("round"),Cl=Wi((function(e,t){return e-t}),0);return zr.after=function(e,t){if("function"!=typeof t)throw new Ee(n);return e=gs(e),function(){if(--e<1)return t.apply(this,arguments)}},zr.ary=Oo,zr.assign=vs,zr.assignIn=xs,zr.assignInWith=$s,zr.assignWith=ws,zr.at=js,zr.before=Do,zr.bind=Eo,zr.bindAll=Js,zr.bindKey=To,zr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Yo(e)?e:[e]},zr.chain=fo,zr.chunk=function(e,t,n){t=(n?va(e,t,n):t===r)?1:br(gs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=ae(gt(i/t));a<i;)s[o++]=ni(e,a,a+=t);return s},zr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var a=e[t];a&&(i[n++]=a)}return i},zr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=ae(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return It(Yo(r)?Ei(r):[r],bn(t,1))},zr.cond=function(e){var t=null==e?0:e.length,r=la();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new Ee(n);return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n];if(St(i[0],this,r))return St(i[1],this,r)}}))},zr.conforms=function(e){return function(e){var t=Fs(e);return function(r){return cn(r,e,t)}}(ln(e,1))},zr.constant=el,zr.countBy=po,zr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},zr.curry=function e(t,n,i){var a=Zi(t,8,r,r,r,r,r,n=i?r:n);return a.placeholder=e.placeholder,a},zr.curryRight=function e(t,n,i){var a=Zi(t,o,r,r,r,r,r,n=i?r:n);return a.placeholder=e.placeholder,a},zr.debounce=Fo,zr.defaults=Cs,zr.defaultsDeep=Ss,zr.defer=_o,zr.delay=Mo,zr.difference=za,zr.differenceBy=La,zr.differenceWith=Na,zr.drop=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=n||t===r?1:gs(t))<0?0:t,i):[]},zr.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,0,(t=i-(t=n||t===r?1:gs(t)))<0?0:t):[]},zr.dropRightWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!0,!0):[]},zr.dropWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!0):[]},zr.fill=function(e,t,n,i){var a=null==e?0:e.length;return a?(n&&"number"!=typeof n&&va(e,t,n)&&(n=0,i=a),function(e,t,n,i){var a=e.length;for((n=gs(n))<0&&(n=-n>a?0:a+n),(i=i===r||i>a?a:gs(i))<0&&(i+=a),i=n>i?0:ps(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},zr.filter=function(e,t){return(Yo(e)?Tt:mn)(e,la(t,3))},zr.flatMap=function(e,t){return bn(jo(e,t),1)},zr.flatMapDeep=function(e,t){return bn(jo(e,t),u)},zr.flatMapDepth=function(e,t,n){return n=n===r?1:gs(n),bn(jo(e,t),n)},zr.flatten=Ya,zr.flattenDeep=function(e){return(null==e?0:e.length)?bn(e,u):[]},zr.flattenDepth=function(e,t){return(null==e?0:e.length)?bn(e,t=t===r?1:gs(t)):[]},zr.flip=function(e){return Zi(e,512)},zr.flow=tl,zr.flowRight=rl,zr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},zr.functions=function(e){return null==e?[]:wn(e,Fs(e))},zr.functionsIn=function(e){return null==e?[]:wn(e,_s(e))},zr.groupBy=xo,zr.initial=function(e){return(null==e?0:e.length)?ni(e,0,-1):[]},zr.intersection=Ua,zr.intersectionBy=Ka,zr.intersectionWith=qa,zr.invert=Ds,zr.invertBy=Es,zr.invokeMap=$o,zr.iteratee=il,zr.keyBy=wo,zr.keys=Fs,zr.keysIn=_s,zr.map=jo,zr.mapKeys=function(e,t){var r={};return t=la(t,3),xn(e,(function(e,n,i){an(r,t(e,n,i),e)})),r},zr.mapValues=function(e,t){var r={};return t=la(t,3),xn(e,(function(e,n,i){an(r,n,t(e,n,i))})),r},zr.matches=function(e){return Ln(ln(e,1))},zr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},zr.memoize=Io,zr.merge=Ms,zr.mergeWith=Is,zr.method=al,zr.methodOf=ol,zr.mixin=sl,zr.negate=Ao,zr.nthArg=function(e){return e=gs(e),Gn((function(t){return Hn(t,e)}))},zr.omit=As,zr.omitBy=function(e,t){return Rs(e,Ao(la(t)))},zr.once=function(e){return Do(2,e)},zr.orderBy=function(e,t,n,i){return null==e?[]:(Yo(t)||(t=null==t?[]:[t]),Yo(n=i?r:n)||(n=null==n?[]:[n]),Yn(e,t,n))},zr.over=cl,zr.overArgs=Bo,zr.overEvery=dl,zr.overSome=ul,zr.partial=Ro,zr.partialRight=Po,zr.partition=Co,zr.pick=Bs,zr.pickBy=Rs,zr.property=fl,zr.propertyOf=function(e){return function(t){return null==e?r:jn(e,t)}},zr.pull=Ga,zr.pullAll=Za,zr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,la(r,2)):e},zr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Un(e,t,r,n):e},zr.pullAt=Qa,zr.range=hl,zr.rangeRight=gl,zr.rearg=zo,zr.reject=function(e,t){return(Yo(e)?Tt:mn)(e,Ao(la(t,3)))},zr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],a=e.length;for(t=la(t,3);++n<a;){var o=e[n];t(o,n,e)&&(r.push(o),i.push(n))}return Kn(e,i),r},zr.rest=function(e,t){if("function"!=typeof e)throw new Ee(n);return Gn(e,t=t===r?t:gs(t))},zr.reverse=Ja,zr.sampleSize=function(e,t,n){return t=(n?va(e,t,n):t===r)?1:gs(t),(Yo(e)?Zr:Qn)(e,t)},zr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},zr.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Jn(e,t,n,i)},zr.shuffle=function(e){return(Yo(e)?Qr:ri)(e)},zr.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&va(e,t,n)?(t=0,n=i):(t=null==t?0:gs(t),n=n===r?i:gs(n)),ni(e,t,n)):[]},zr.sortBy=So,zr.sortedUniq=function(e){return e&&e.length?si(e):[]},zr.sortedUniqBy=function(e,t){return e&&e.length?si(e,la(t,2)):[]},zr.split=function(e,t,n){return n&&"number"!=typeof n&&va(e,t,n)&&(t=n=r),(n=n===r?g:n>>>0)?(e=ys(e))&&("string"==typeof t||null!=t&&!as(t))&&!(t=ci(t))&&ar(e)?$i(fr(e),0,n):e.split(t,n):[]},zr.spread=function(e,t){if("function"!=typeof e)throw new Ee(n);return t=null==t?0:br(gs(t),0),Gn((function(r){var n=r[t],i=$i(r,0,t);return n&&It(i,n),St(e,this,i)}))},zr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},zr.take=function(e,t,n){return e&&e.length?ni(e,0,(t=n||t===r?1:gs(t))<0?0:t):[]},zr.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=i-(t=n||t===r?1:gs(t)))<0?0:t,i):[]},zr.takeRightWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!1,!0):[]},zr.takeWhile=function(e,t){return e&&e.length?hi(e,la(t,3)):[]},zr.tap=function(e,t){return t(e),e},zr.throttle=function(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new Ee(n);return es(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),Fo(e,t,{leading:i,maxWait:t,trailing:a})},zr.thru=ho,zr.toArray=fs,zr.toPairs=Ps,zr.toPairsIn=zs,zr.toPath=function(e){return Yo(e)?Mt(e,Ba):ls(e)?[e]:Ei(Aa(ys(e)))},zr.toPlainObject=bs,zr.transform=function(e,t,r){var n=Yo(e),i=n||qo(e)||cs(e);if(t=la(t,4),null==r){var a=e&&e.constructor;r=i?n?new a:[]:es(e)&&Zo(a)?Lr(Ue(e)):{}}return(i?Ot:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},zr.unary=function(e){return Oo(e,1)},zr.union=eo,zr.unionBy=to,zr.unionWith=ro,zr.uniq=function(e){return e&&e.length?di(e):[]},zr.uniqBy=function(e,t){return e&&e.length?di(e,la(t,2)):[]},zr.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?di(e,r,t):[]},zr.unset=function(e,t){return null==e||ui(e,t)},zr.unzip=no,zr.unzipWith=io,zr.update=function(e,t,r){return null==e?e:fi(e,t,yi(r))},zr.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,yi(n),i)},zr.values=Ls,zr.valuesIn=function(e){return null==e?[]:Qt(e,_s(e))},zr.without=ao,zr.words=Zs,zr.wrap=function(e,t){return Ro(yi(t),e)},zr.xor=oo,zr.xorBy=so,zr.xorWith=lo,zr.zip=co,zr.zipObject=function(e,t){return mi(e||[],t||[],en)},zr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},zr.zipWith=uo,zr.entries=Ps,zr.entriesIn=zs,zr.extend=xs,zr.extendWith=$s,sl(zr,zr),zr.add=bl,zr.attempt=Qs,zr.camelCase=Ns,zr.capitalize=Ws,zr.ceil=yl,zr.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ms(n))==n?n:0),t!==r&&(t=(t=ms(t))==t?t:0),sn(ms(e),t,n)},zr.clone=function(e){return ln(e,4)},zr.cloneDeep=function(e){return ln(e,5)},zr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:r)},zr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:r)},zr.conformsTo=function(e,t){return null==t||cn(e,t,Fs(t))},zr.deburr=Hs,zr.defaultTo=function(e,t){return null==e||e!=e?t:e},zr.divide=vl,zr.endsWith=function(e,t,n){e=ys(e),t=ci(t);var i=e.length,a=n=n===r?i:sn(gs(n),0,i);return(n-=t.length)>=0&&e.slice(n,a)==t},zr.eq=Lo,zr.escape=function(e){return(e=ys(e))&&X.test(e)?e.replace(K,nr):e},zr.escapeRegExp=function(e){return(e=ys(e))&&ne.test(e)?e.replace(re,"\\$&"):e},zr.every=function(e,t,n){var i=Yo(e)?Et:gn;return n&&va(e,t,n)&&(t=r),i(e,la(t,3))},zr.find=mo,zr.findIndex=Wa,zr.findKey=function(e,t){return zt(e,la(t,3),xn)},zr.findLast=bo,zr.findLastIndex=Ha,zr.findLastKey=function(e,t){return zt(e,la(t,3),$n)},zr.floor=xl,zr.forEach=yo,zr.forEachRight=vo,zr.forIn=function(e,t){return null==e?e:yn(e,la(t,3),_s)},zr.forInRight=function(e,t){return null==e?e:vn(e,la(t,3),_s)},zr.forOwn=function(e,t){return e&&xn(e,la(t,3))},zr.forOwnRight=function(e,t){return e&&$n(e,la(t,3))},zr.get=ks,zr.gt=No,zr.gte=Wo,zr.has=function(e,t){return null!=e&&pa(e,t,On)},zr.hasIn=Os,zr.head=Va,zr.identity=nl,zr.includes=function(e,t,r,n){e=Uo(e)?e:Ls(e),r=r&&!n?gs(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Nt(e,t,r)>-1},zr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Nt(e,t,i)},zr.inRange=function(e,t,n){return t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r){return e>=yr(t,r)&&e<br(t,r)}(e=ms(e),t,n)},zr.invoke=Ts,zr.isArguments=Ho,zr.isArray=Yo,zr.isArrayBuffer=Vo,zr.isArrayLike=Uo,zr.isArrayLikeObject=Ko,zr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Sn(e)==y},zr.isBuffer=qo,zr.isDate=Xo,zr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},zr.isEmpty=function(e){if(null==e)return!0;if(Uo(e)&&(Yo(e)||"string"==typeof e||"function"==typeof e.splice||qo(e)||cs(e)||Ho(e)))return!e.length;var t=ga(e);if(t==j||t==D)return!e.size;if(ja(e))return!Bn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},zr.isEqual=function(e,t){return _n(e,t)},zr.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?_n(e,t,r,n):!!i},zr.isError=Go,zr.isFinite=function(e){return"number"==typeof e&&Pt(e)},zr.isFunction=Zo,zr.isInteger=Qo,zr.isLength=Jo,zr.isMap=rs,zr.isMatch=function(e,t){return e===t||Mn(e,t,da(t))},zr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Mn(e,t,da(t),n)},zr.isNaN=function(e){return ns(e)&&e!=+e},zr.isNative=function(e){if(wa(e))throw new je("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return In(e)},zr.isNil=function(e){return null==e},zr.isNull=function(e){return null===e},zr.isNumber=ns,zr.isObject=es,zr.isObjectLike=ts,zr.isPlainObject=is,zr.isRegExp=as,zr.isSafeInteger=function(e){return Qo(e)&&e>=-9007199254740991&&e<=f},zr.isSet=os,zr.isString=ss,zr.isSymbol=ls,zr.isTypedArray=cs,zr.isUndefined=function(e){return e===r},zr.isWeakMap=function(e){return ts(e)&&ga(e)==F},zr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Sn(e)},zr.join=function(e,t){return null==e?"":Ut.call(e,t)},zr.kebabCase=Ys,zr.last=Xa,zr.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var a=i;return n!==r&&(a=(a=gs(n))<0?br(i+a,0):yr(a,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,a):Lt(e,Ht,a,!0)},zr.lowerCase=Vs,zr.lowerFirst=Us,zr.lt=ds,zr.lte=us,zr.max=function(e){return e&&e.length?pn(e,nl,kn):r},zr.maxBy=function(e,t){return e&&e.length?pn(e,la(t,2),kn):r},zr.mean=function(e){return Yt(e,nl)},zr.meanBy=function(e,t){return Yt(e,la(t,2))},zr.min=function(e){return e&&e.length?pn(e,nl,Pn):r},zr.minBy=function(e,t){return e&&e.length?pn(e,la(t,2),Pn):r},zr.stubArray=pl,zr.stubFalse=ml,zr.stubObject=function(){return{}},zr.stubString=function(){return""},zr.stubTrue=function(){return!0},zr.multiply=wl,zr.nth=function(e,t){return e&&e.length?Hn(e,gs(t)):r},zr.noConflict=function(){return ht._===this&&(ht._=Le),this},zr.noop=ll,zr.now=ko,zr.pad=function(e,t,r){e=ys(e);var n=(t=gs(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Yi(pt(i),r)+e+Yi(gt(i),r)},zr.padEnd=function(e,t,r){e=ys(e);var n=(t=gs(t))?ur(e):0;return t&&n<t?e+Yi(t-n,r):e},zr.padStart=function(e,t,r){e=ys(e);var n=(t=gs(t))?ur(e):0;return t&&n<t?Yi(t-n,r)+e:e},zr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(ys(e).replace(ie,""),t||0)},zr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&va(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=hs(e),t===r?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var a=$r();return yr(e+a*(t-e+ct("1e-"+((a+"").length-1))),t)}return qn(e,t)},zr.reduce=function(e,t,r){var n=Yo(e)?At:Kt,i=arguments.length<3;return n(e,la(t,4),r,i,fn)},zr.reduceRight=function(e,t,r){var n=Yo(e)?Bt:Kt,i=arguments.length<3;return n(e,la(t,4),r,i,hn)},zr.repeat=function(e,t,n){return t=(n?va(e,t,n):t===r)?1:gs(t),Xn(ys(e),t)},zr.replace=function(){var e=arguments,t=ys(e[0]);return e.length<3?t:t.replace(e[1],e[2])},zr.result=function(e,t,n){var i=-1,a=(t=vi(t,e)).length;for(a||(a=1,e=r);++i<a;){var o=null==e?r:e[Ba(t[i])];o===r&&(i=a,o=n),e=Zo(o)?o.call(e):o}return e},zr.round=jl,zr.runInContext=e,zr.sample=function(e){return(Yo(e)?Gr:Zn)(e)},zr.size=function(e){if(null==e)return 0;if(Uo(e))return ss(e)?ur(e):e.length;var t=ga(e);return t==j||t==D?e.size:Bn(e).length},zr.snakeCase=Ks,zr.some=function(e,t,n){var i=Yo(e)?Rt:ii;return n&&va(e,t,n)&&(t=r),i(e,la(t,3))},zr.sortedIndex=function(e,t){return ai(e,t)},zr.sortedIndexBy=function(e,t,r){return oi(e,t,la(r,2))},zr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=ai(e,t);if(n<r&&Lo(e[n],t))return n}return-1},zr.sortedLastIndex=function(e,t){return ai(e,t,!0)},zr.sortedLastIndexBy=function(e,t,r){return oi(e,t,la(r,2),!0)},zr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=ai(e,t,!0)-1;if(Lo(e[r],t))return r}return-1},zr.startCase=qs,zr.startsWith=function(e,t,r){return e=ys(e),r=null==r?0:sn(gs(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},zr.subtract=Cl,zr.sum=function(e){return e&&e.length?qt(e,nl):0},zr.sumBy=function(e,t){return e&&e.length?qt(e,la(t,2)):0},zr.template=function(e,t,n){var i=zr.templateSettings;n&&va(e,t,n)&&(t=r),e=ys(e),t=$s({},t,i,Qi);var a,o,s=$s({},t.imports,i.imports,Qi),l=Fs(s),c=Qt(s,l),d=0,u=t.interpolate||xe,f="__p += '",h=Oe((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),g="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++at+"]")+"\n";e.replace(h,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(d,l).replace($e,ir),r&&(a=!0,f+="' +\n__e("+r+") +\n'"),s&&(o=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),f+="';\n";var p=Ae.call(t,"variable")&&t.variable;if(p){if(de.test(p))throw new je("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(o?f.replace(H,""):f).replace(Y,"$1").replace(V,"$1;"),f="function("+(p||"obj")+") {\n"+(p?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Ce(l,g+"return "+f).apply(r,c)}));if(m.source=f,Go(m))throw m;return m},zr.times=function(e,t){if((e=gs(e))<1||e>f)return[];var r=g,n=yr(e,g);t=la(t),e-=g;for(var i=Xt(n,t);++r<e;)t(r);return i},zr.toFinite=hs,zr.toInteger=gs,zr.toLength=ps,zr.toLower=function(e){return ys(e).toLowerCase()},zr.toNumber=ms,zr.toSafeInteger=function(e){return e?sn(gs(e),-9007199254740991,f):0===e?e:0},zr.toString=ys,zr.toUpper=function(e){return ys(e).toUpperCase()},zr.trim=function(e,t,n){if((e=ys(e))&&(n||t===r))return Gt(e);if(!e||!(t=ci(t)))return e;var i=fr(e),a=fr(t);return $i(i,er(i,a),tr(i,a)+1).join("")},zr.trimEnd=function(e,t,n){if((e=ys(e))&&(n||t===r))return e.slice(0,hr(e)+1);if(!e||!(t=ci(t)))return e;var i=fr(e);return $i(i,0,tr(i,fr(t))+1).join("")},zr.trimStart=function(e,t,n){if((e=ys(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=fr(e);return $i(i,er(i,fr(t))).join("")},zr.truncate=function(e,t){var n=30,i="...";if(es(t)){var a="separator"in t?t.separator:a;n="length"in t?gs(t.length):n,i="omission"in t?ci(t.omission):i}var o=(e=ys(e)).length;if(ar(e)){var s=fr(e);o=s.length}if(n>=o)return e;var l=n-ur(i);if(l<1)return i;var c=s?$i(s,0,l).join(""):e.slice(0,l);if(a===r)return c+i;if(s&&(l+=c.length-l),as(a)){if(e.slice(l).search(a)){var d,u=c;for(a.global||(a=Oe(a.source,ys(he.exec(a))+"g")),a.lastIndex=0;d=a.exec(u);)var f=d.index;c=c.slice(0,f===r?l:f)}}else if(e.indexOf(ci(a),l)!=l){var h=c.lastIndexOf(a);h>-1&&(c=c.slice(0,h))}return c+i},zr.unescape=function(e){return(e=ys(e))&&q.test(e)?e.replace(U,gr):e},zr.uniqueId=function(e){var t=++Be;return ys(e)+t},zr.upperCase=Xs,zr.upperFirst=Gs,zr.each=yo,zr.eachRight=vo,zr.first=Va,sl(zr,($l={},xn(zr,(function(e,t){Ae.call(zr.prototype,t)||($l[t]=e)})),$l),{chain:!1}),zr.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){zr[e].placeholder=zr})),Ot(["drop","take"],(function(e,t){Hr.prototype[e]=function(n){n=n===r?1:br(gs(n),0);var i=this.__filtered__&&!t?new Hr(this):this.clone();return i.__filtered__?i.__takeCount__=yr(n,i.__takeCount__):i.__views__.push({size:yr(n,g),type:e+(i.__dir__<0?"Right":"")}),i},Hr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Hr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:la(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Ot(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Hr.prototype[e]=function(){return this[r](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Hr.prototype[e]=function(){return this.__filtered__?new Hr(this):this[r](1)}})),Hr.prototype.compact=function(){return this.filter(nl)},Hr.prototype.find=function(e){return this.filter(e).head()},Hr.prototype.findLast=function(e){return this.reverse().find(e)},Hr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Hr(this):this.map((function(r){return Tn(r,e,t)}))})),Hr.prototype.reject=function(e){return this.filter(Ao(la(e)))},Hr.prototype.slice=function(e,t){e=gs(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Hr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=gs(t))<0?n.dropRight(-t):n.take(t-e)),n)},Hr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Hr.prototype.toArray=function(){return this.take(g)},xn(Hr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=zr[i?"take"+("last"==t?"Right":""):t],o=i||/^find/.test(t);a&&(zr.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Hr,c=s[0],d=l||Yo(t),u=function(e){var t=a.apply(zr,It([e],s));return i&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,g=o&&!f,p=l&&!h;if(!o&&d){t=p?t:new Hr(this);var m=e.apply(t,s);return m.__actions__.push({func:ho,args:[u],thisArg:r}),new Wr(m,f)}return g&&p?e.apply(this,s):(m=this.thru(u),g?i?m.value()[0]:m.value():m)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Te[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);zr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Yo(i)?i:[],e)}return this[r]((function(r){return t.apply(Yo(r)?r:[],e)}))}})),xn(Hr.prototype,(function(e,t){var r=zr[t];if(r){var n=r.name+"";Ae.call(Tr,n)||(Tr[n]=[]),Tr[n].push({name:t,func:r})}})),Tr[Li(r,2).name]=[{name:"wrapper",func:r}],Hr.prototype.clone=function(){var e=new Hr(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Hr.prototype.reverse=function(){if(this.__filtered__){var e=new Hr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Hr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Yo(e),n=t<0,i=r?e.length:0,a=function(e,t,r){var n=-1,i=r.length;for(;++n<i;){var a=r[n],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=yr(t,e+o);break;case"takeRight":e=br(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,s=a.end,l=s-o,c=n?s:o-1,d=this.__iteratees__,u=d.length,f=0,h=yr(l,this.__takeCount__);if(!r||!n&&i==l&&h==l)return gi(e,this.__actions__);var g=[];e:for(;l--&&f<h;){for(var p=-1,m=e[c+=t];++p<u;){var b=d[p],y=b.iteratee,v=b.type,x=y(m);if(2==v)m=x;else if(!x){if(1==v)continue e;break e}}g[f++]=m}return g},zr.prototype.at=go,zr.prototype.chain=function(){return fo(this)},zr.prototype.commit=function(){return new Wr(this.value(),this.__chain__)},zr.prototype.next=function(){this.__values__===r&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},zr.prototype.plant=function(e){for(var t,n=this;n instanceof Nr;){var i=Pa(n);i.__index__=0,i.__values__=r,t?a.__wrapped__=i:t=i;var a=i;n=n.__wrapped__}return a.__wrapped__=e,t},zr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Hr){var t=e;return this.__actions__.length&&(t=new Hr(this)),(t=t.reverse()).__actions__.push({func:ho,args:[Ja],thisArg:r}),new Wr(t,this.__chain__)}return this.thru(Ja)},zr.prototype.toJSON=zr.prototype.valueOf=zr.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},zr.prototype.first=zr.prototype.head,Ze&&(zr.prototype[Ze]=function(){return this}),zr}();pt?((pt.exports=pr)._=pr,gt._=pr):ht._=pr}).call(Ei)}(qC,qC.exports);var XC=qC.exports;const GC=V.default.forwardRef(((r,n)=>{var{value:i,readOnly:a,"data-testid":o,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx(w.EyeSlashIcon,{}),iconUnmask:f=e.jsx($.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:g,maskChar:p="•",error:m,disableMask:b,transformInput:y,loadState:v,onMask:x,onUnmask:j,onChange:C,onFocus:S,onBlur:k,onTryAgain:O}=r,D=X(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const E=a&&XC.isEmpty(i),[T,F]=t.useState(!b),[_,M]=t.useState(i||"");t.useEffect((()=>{M(i)}),[i]);const I=e=>{z(!1),S&&S(e)},A=e=>{z(!0),k&&k(e)},B=e=>{let t=e.target.value;switch(y){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,C&&C(e)},R=()=>{a&&O&&O()},P=()=>{z(!T)},z=e=>{F(e),e?x&&x():j&&j()},L=()=>!(null==_?void 0:_.toString().length)||b,N=()=>{const t=L();return!E&&e.jsx(zC,Object.assign({"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:g,$activeColor:h},{children:T?f:u}))};return e.jsx("div",Object.assign({"aria-busy":"loading"===v,"aria-live":"polite"},{children:(()=>{if(a)switch(v){case"fail":return e.jsxs(KC,Object.assign({onClick:R,"data-testid":"try-again-button"},{children:[e.jsxs(YC,{children:[e.jsx(VC,{}),e.jsx(UC,{children:"Error"})]}),e.jsx(HC,{children:"Try again?"})]}));case"loading":return e.jsxs(LC,{children:[e.jsx(WC,{}),e.jsx(NC,{children:"Retrieving..."})]})}return e.jsx(PC,Object.assign({ref:n,"data-testid":`${o||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:a?void 0:I,onBlur:a?void 0:A,onClick:a?P:void 0,onChange:B,value:E?"-":T&&!b?Rc.maskValue(null==_?void 0:_.toString(),{maskChar:p,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):_,readOnly:a,error:m,$isDisabled:L()},D))})()}))})),ZC=V.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:a="form-field-masked-input","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(Kv,Object.assign({id:a,label:n,errorMessage:i,disabled:f.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(GC,Object.assign({ref:r,id:`${a}-base`,"data-testid":s||a,error:!!i},f))}))})),QC=K.default.div`
    font-weight: ${e=>e.$bold?Us.Spec["weight-semibold"]:Us.Spec["weight-regular"]};
    color: ${e=>e.$selected?Vs["text-selected"]:Vs.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&xf(e.$maxLines||2)}
    overflow-wrap: break-word;
`,JC=K.default.div`
    color: ${Vs["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&xf(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${Us["body-md-semibold"]}
                `:i.css`
                    ${Us["body-baseline-regular"]}
                `}
`,eS=K.default.span`
    font-weight: ${Us.Spec["weight-semibold"]};
`,tS=K.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${QC} {
                        display: inline;
                    }

                    ${JC} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,rS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,nS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,iS=({bold:r,displayType:n="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const f=i.useTheme(),h="small"===u?Us.Spec["body-size-md"]({theme:f}):Us.Spec["body-size-baseline"]({theme:f}),g=Us.Spec["font-family"]({theme:f}),{ref:p,width:m}=qe(),b=t.useCallback((e=>{if("inline"!==n)return!1;return Rc.getTextWidth(e,`${h} '${g}'`)>m*s-50}),[m,n,h,g,s]),y=t.useMemo((()=>b(a)),[b,a]),v=t.useMemo((()=>c&&b(c)),[b,c]),x=y||v?"next-line":n,$=t=>{if(!o)return t;const r=o.toLowerCase().trim(),n=t.toLowerCase().indexOf(r),i=n+o.length;return-1===n?t:e.jsxs(e.Fragment,{children:[a.slice(0,n),e.jsx(eS,Object.assign({$variant:u},{children:a.slice(n,i)})),a.slice(i)]})},w=t=>e.jsxs(e.Fragment,{children:[e.jsx(rS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:$(t)})),e.jsx(nS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:$(t)}))]});return e.jsxs(tS,Object.assign({ref:p,$labelDisplayType:x,$variant:u},{children:[e.jsx(QC,Object.assign({"aria-label":a,$bold:r,$maxLines:s,$selected:l,$truncateType:d},{children:"middle"===d&&y?w(a):$(a)})),c&&e.jsx(JC,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:n},{children:"middle"===d&&v?w(c):c}))]}))},aS=V.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),oS=({children:r})=>{const[n,i]=t.useState(-1);return e.jsx(aS.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:i}},{children:r}))},sS=K.default.div`
    overflow: hidden;
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    background: ${Vs.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}

    ${Qs.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Zs["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Qs.MaxWidth.xs} {
        width: calc(100vw - ${Zs["xs-margin"]} * 2);
    }

    ${Qs.MaxWidth.xxs} {
        width: calc(100vw - ${Zs["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Vs["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,lS=K.default.div`
    background: transparent;
    padding: ${Xs["spacing-8"]};
`,cS=K.default.ul`
    list-style-type: none;
`,dS=K.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${Xs["spacing-8"]};
    padding: ${Xs["spacing-12"]} ${Xs["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?i.css`
                background: ${Vs["bg-hover"]};
            `:e.$active?i.css`
                background: ${Vs["bg-hover-subtle"]};
            `:void 0}
`,uS=K.default(k.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Vs["icon-selected"]};
`,fS=K.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,hS=K.default(S.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vs["icon-selected"]};
`,gS=K.default(C.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vs["icon-primary-subtlest"]};
`,pS=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,mS=K.default(vf)`
    cursor: pointer;
    overflow: hidden;
    color: ${Vs["text-primary"]};
    font-size: inherit;
`,bS=K.default(mS)`
    ${Us["body-baseline-semibold"]}
`,yS=K.default(mS)`
    ${Us["body-md-semibold"]}
    padding: ${Xs["spacing-8"]} ${Xs["spacing-8"]};
`,vS=K.default.div`
    width: 100%;
    display: flex;
    padding: ${Xs["spacing-12"]} ${Xs[16]};
    align-items: center;
`,xS=K.default(s.ExclamationCircleFillIcon)`
    margin-right: ${Xs["spacing-4"]};
    color: ${Vs["icon-error"]};
    height: 1em;
    width: 1em;
`,$S=K.default($l)`
    margin-right: ${Xs["spacing-8"]};
    color: ${Vs.icon};
`,wS=K.default.div`
    background: ${Vs["bg-strong"]};
    border-radius: ${Gs.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}
`,jS=K.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Xs["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${Xs["spacing-8"]} ${Xs["spacing-16"]}
              `:i.css`10px ${Xs["spacing-16"]}`};
`,CS=K.default(yf)`
    flex: 1;
`,SS=K.default(x.MagnifierIcon)`
    color: ${Vs.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,kS=K.default(tl)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Xs["spacing-8"]};
    margin-left: -${Xs["spacing-8"]};
    color: ${Vs.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,OS=t.forwardRef(((t,r)=>{var{value:n,variant:i,onClear:a}=t,o=X(t,["value","variant","onClear"]);return e.jsxs(wS,Object.assign({$variant:i},{children:[e.jsxs(jS,Object.assign({$variant:i},{children:[e.jsx(SS,{"aria-hidden":!0}),e.jsx(CS,Object.assign({ref:r,value:n,$variant:i},o))]})),n&&e.jsx(kS,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}))]}))})),DS=({listItems:r,multiSelect:n,selectedItems:i,disableItemFocus:a,itemsLoadState:o="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:f,topScrollItem:h,onSelectItem:g,onSelectAll:p,onDismiss:m,onRetry:b,valueExtractor:y,listExtractor:v,renderListItem:x,renderCustomCallToAction:$,enableSearch:w,hideNoResultsDisplay:j,searchPlaceholder:C="Search",searchFunction:S,onSearch:k})=>{const{focusedIndex:O,setFocusedIndex:D}=t.useContext(aS),[E,T]=t.useState(""),[F,_]=t.useState(r),M=Hc(o),I=Nc(),A=t.useRef(),B=t.useRef(),R=t.useRef([]),P=t.useRef(),z=e=>v?v(e):e.toString(),L=t.useCallback((e=>!!Xj(i,(t=>Zj(t,e)))),[i]),N=Pc((()=>S(E))),W=Pc((()=>r.filter((e=>{var t;const r=z(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),i="string"==typeof r||null===(t=r.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=E.trim().toLowerCase();return n.includes(a)||i&&i.includes(a)})))),H=(e,t)=>{D(t),null==g||g(e,(e=>y?y(e):e)(e))},Y=e=>{const t=e.target.value;T(t),null==k||k()},V=()=>{var e;T(""),null===(e=P.current)||void 0===e||e.focus(),null==k||k()},U=()=>{null==b||b()};zc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),O<F.length-1){const e=O+1;null===(t=R.current[e])||void 0===t||t.focus(),D(e)}break;case"ArrowUp":if(e.preventDefault(),O>0){const e=O-1;null===(r=R.current[e])||void 0===r||r.focus(),D(e)}else 0===O&&P.current&&(P.current.focus(),D(-1));break;case"Space":case"Enter":document.activeElement===R.current[O]&&(e.preventDefault(),F[O]&&H(F[O],O))}})),t.useEffect((()=>{if(void 0===h)return;const e=setTimeout((()=>{var e;const t=r.indexOf(h),n=R.current[t];if(A.current){const t=null!==(e=null==n?void 0:n.offsetTop)&&void 0!==e?e:0;A.current.scrollTop=t-8}D(t)}),0);return()=>clearTimeout(e)}),[R,r,D,h]),t.useEffect((()=>{if(I)return;if(a)return;const e=r.findIndex((e=>L(e)));P.current?(D(-1),setTimeout((()=>{var e;return null===(e=P.current)||void 0===e?void 0:e.focus()}),200)):R.current[O]?setTimeout((()=>{var e;return null===(e=R.current[O])||void 0===e?void 0:e.focus()}),200):R.current[e]?(D(e),setTimeout((()=>{var t;return null===(t=R.current[e])||void 0===t?void 0:t.focus()}),200)):(D(0),setTimeout((()=>{var e;return null===(e=R.current[0])||void 0===e?void 0:e.focus()}),200))}),[L,a,O,r,I,D]),t.useEffect((()=>{I&&M&&(a||"success"===o&&P.current&&(D(-1),P.current.focus()))}),[I,M,o,D,a]),t.useEffect((()=>{_(""===E?r:S?N():W())}),[N,W,r,S,E]);const K=t=>n?t?e.jsx(hS,{"aria-hidden":!0}):e.jsx(gS,{"aria-hidden":!0}):t?e.jsx(uS,{"aria-hidden":!0}):e.jsx(fS,{}),q=(t,r)=>{const n=z(t),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel;return e.jsx(iS,{displayType:c,label:i,maxLines:l,selected:r,sublabel:a,truncationType:s,variant:d})},X=()=>{if(!b||b&&"success"===o)return F.map(((t,r)=>{const i=L(t),a=r===O;return e.jsx(dS,Object.assign({"aria-selected":i,"aria-multiselectable":n,"data-testid":"list-item",onClick:()=>H(t,r),onMouseEnter:()=>(e=>{D(e)})(r),ref:e=>R.current[r]=e,role:"option",tabIndex:a?0:-1,$active:a,$selected:i},{children:x?x(t,{selected:i}):e.jsxs(e.Fragment,{children:[K(i),q(t,i)]})}),((e,t)=>`item_${t}__${y?y(e):e}`)(t,r))}))},G=()=>{if((w||S)&&"success"===o)return e.jsx(OS,{ref:P,onChange:Y,value:E,placeholder:C,"data-testid":"search-input","aria-label":"Enter text to search",onClear:V,variant:d})},Z=()=>{if(n&&F.length>0&&!E&&"success"===o)return e.jsx(pS,{children:e.jsx(yS,Object.assign({onClick:p,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},Q=()=>{if(!j&&(E||!w)&&0===F.length&&"success"===o)return e.jsxs(vS,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(xS,{"data-testid":"no-result-icon"}),"No results found."]}))},J=()=>{if(b&&"loading"===o)return e.jsxs(vS,Object.assign({"data-testid":"list-loading"},{children:[e.jsx($S,{}),"Loading..."]}))},ee=()=>{if(b&&"fail"===o)return e.jsxs(vS,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(xS,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(bS,Object.assign({onClick:U,type:"button",$variant:d},{children:"Try again."}))]}))};return e.jsxs(sS,Object.assign({"data-testid":"dropdown-container",ref:A,$width:f,$variant:d},{children:[e.jsxs(lS,Object.assign({ref:B,"data-testid":"dropdown-list"},{children:[G(),Z(),Q(),J(),ee(),e.jsx(cS,Object.assign({role:"listbox",id:u},{children:X()}))]})),(()=>{if($)return e.jsx("div",Object.assign({"data-testid":"custom-cta"},{children:$(m,F)}))})()]}))},ES=K.default(vf)`
    display: flex;
    align-items: center;
    gap: ${Xs["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Xs["spacing-16"]};

    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,TS=K.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ks["duration-250"]} ${Ks["ease-default"]};

    svg {
        color: ${Vs.icon};
        height: 1em;
        width: 1em;
    }
`,FS=t.forwardRef((({children:t,disabled:r,expanded:n,listboxId:i,popupRole:a,readOnly:o,variant:s},l)=>e.jsxs(ES,Object.assign({ref:l,type:"button","aria-expanded":n,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s},{children:[t,!o&&e.jsx(TS,Object.assign({$expanded:n,$variant:s},{children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})}))]}))));var _S=Symbol.for("immer-nothing"),MS=Symbol.for("immer-draftable"),IS=Symbol.for("immer-state"),AS="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function BS(e,...t){if("production"!==process.env.NODE_ENV){const r=AS[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var RS=Object.getPrototypeOf;function PS(e){return!!e&&!!e[IS]}function zS(e){return!!e&&(NS(e)||Array.isArray(e)||!!e[MS]||!!e.constructor?.[MS]||US(e)||KS(e))}var LS=Object.prototype.constructor.toString();function NS(e){if(!e||"object"!=typeof e)return!1;const t=RS(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===LS}function WS(e,t){0===HS(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function HS(e){const t=e[IS];return t?t.type_:Array.isArray(e)?1:US(e)?2:KS(e)?3:0}function YS(e,t){return 2===HS(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function VS(e,t,r){const n=HS(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function US(e){return e instanceof Map}function KS(e){return e instanceof Set}function qS(e){return e.copy_||e.base_}function XS(e,t){if(US(e))return new Map(e);if(KS(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=NS(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[IS];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(RS(e),t)}{const t=RS(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function GS(e,t=!1){return QS(e)||PS(e)||!zS(e)||(HS(e)>1&&(e.set=e.add=e.clear=e.delete=ZS),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>GS(t,!0)))),e}function ZS(){BS(2)}function QS(e){return Object.isFrozen(e)}var JS,ek={};function tk(e){const t=ek[e];return t||BS(0,e),t}function rk(){return JS}function nk(e,t){t&&(tk("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ik(e){ak(e),e.drafts_.forEach(sk),e.drafts_=null}function ak(e){e===JS&&(JS=e.parent_)}function ok(e){return JS={drafts_:[],parent_:JS,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function sk(e){const t=e[IS];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function lk(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[IS].modified_&&(ik(t),BS(4)),zS(e)&&(e=ck(t,e),t.parent_||uk(t,e)),t.patches_&&tk("Patches").generateReplacementPatches_(r[IS].base_,e,t.patches_,t.inversePatches_)):e=ck(t,r,[]),ik(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==_S?e:void 0}function ck(e,t,r){if(QS(t))return t;const n=t[IS];if(!n)return WS(t,((i,a)=>dk(e,n,t,i,a,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return uk(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,a=!1;3===n.type_&&(i=new Set(t),t.clear(),a=!0),WS(i,((i,o)=>dk(e,n,t,i,o,r,a))),uk(e,t,!1),r&&e.patches_&&tk("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function dk(e,t,r,n,i,a,o){if("production"!==process.env.NODE_ENV&&i===r&&BS(5),PS(i)){const o=ck(e,i,a&&t&&3!==t.type_&&!YS(t.assigned_,n)?a.concat(n):void 0);if(VS(r,n,o),!PS(o))return;e.canAutoFreeze_=!1}else o&&r.add(i);if(zS(i)&&!QS(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ck(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||uk(e,i)}}function uk(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&GS(t,r)}var fk={get(e,t){if(t===IS)return e;const r=qS(e);if(!YS(r,t))return function(e,t,r){const n=pk(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!zS(n)?n:n===gk(e.base_,t)?(bk(e),e.copy_[t]=yk(n,e)):n},has:(e,t)=>t in qS(e),ownKeys:e=>Reflect.ownKeys(qS(e)),set(e,t,r){const n=pk(qS(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=gk(qS(e),t),o=n?.[IS];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((i=r)===(a=n)?0!==i||1/i==1/a:i!=i&&a!=a)&&(void 0!==r||YS(e.base_,t)))return!0;bk(e),mk(e)}var i,a;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==gk(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,bk(e),mk(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=qS(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){BS(11)},getPrototypeOf:e=>RS(e.base_),setPrototypeOf(){BS(12)}},hk={};function gk(e,t){const r=e[IS];return(r?qS(r):e)[t]}function pk(e,t){if(!(t in e))return;let r=RS(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=RS(r)}}function mk(e){e.modified_||(e.modified_=!0,e.parent_&&mk(e.parent_))}function bk(e){e.copy_||(e.copy_=XS(e.base_,e.scope_.immer_.useStrictShallowCopy_))}WS(fk,((e,t)=>{hk[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),hk.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&BS(13),hk.set.call(this,e,t,void 0)},hk.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&BS(14),fk.set.call(this,e[0],t,r,e[0])};function yk(e,t){const r=US(e)?tk("MapSet").proxyMap_(e,t):KS(e)?tk("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:rk(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,a=fk;r&&(i=[n],a=hk);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return n.draft_=s,n.revoke_=o,s}(e,t);return(t?t.scope_:rk()).drafts_.push(r),r}function vk(e){if(!zS(e)||QS(e))return e;const t=e[IS];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=XS(e,t.scope_.immer_.useStrictShallowCopy_)}else r=XS(e,!0);return WS(r,((e,t)=>{VS(r,e,vk(t))})),t&&(t.finalized_=!1),r}var xk=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&BS(6),void 0!==r&&"function"!=typeof r&&BS(7),zS(e)){const i=ok(this),a=yk(e,void 0);let o=!0;try{n=t(a),o=!1}finally{o?ik(i):ak(i)}return nk(i,r),lk(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===_S&&(n=void 0),this.autoFreeze_&&GS(n,!0),r){const t=[],i=[];tk("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}BS(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){zS(e)||BS(8),PS(e)&&(e=function(e){PS(e)||BS(10,e);return vk(e)}(e));const t=ok(this),r=yk(e,void 0);return r[IS].isManual_=!0,ak(t),r}finishDraft(e,t){const r=e&&e[IS];r&&r.isManual_||BS(9);const{scope_:n}=r;return nk(n,t),lk(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=tk("Patches").applyPatches_;return PS(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},$k=xk.produce;xk.produceWithPatches.bind(xk),xk.setAutoFreeze.bind(xk),xk.setUseStrictShallowCopy.bind(xk),xk.applyPatches.bind(xk),xk.createDraft.bind(xk),xk.finishDraft.bind(xk);var wk=tw,jk=Mw,Ck=w$,Sk=Fi,kk=iw,Ok=S$,Dk=G$,Ek=L$,Tk=Object.prototype.hasOwnProperty;var Fk=function(e){if(null==e)return!0;if(kk(e)&&(Sk(e)||"string"==typeof e||"function"==typeof e.splice||Ok(e)||Ek(e)||Ck(e)))return!e.length;var t=jk(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Dk(e))return!wk(e).length;for(var r in e)if(Tk.call(e,r))return!1;return!0},_k=Ti(Fk);const Mk=(e,t,r)=>$k(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.checked=!!t.find((e=>Zj(e,i.keyPath))),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}})),Ik=(e,t)=>{const[r,...n]=t;if(_k(e)||_k(r))return;const i=e.find((e=>e.key===r));return i&&n.length?Ik(i.subItems,n):i},Ak=K.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,Bk=K.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Xs["spacing-8"]};
    padding: ${Xs["spacing-12"]} ${Xs["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&i.css`
            background: ${Vs["bg-hover"]};
        `}
`,Rk=K.default.div`
    height: 1px;
    width: calc((1lh + ${Xs["spacing-8"]}) * ${e=>e.$level});
`,Pk=K.default.div`
    width: 1lh;
    height: 1lh;
    color: ${Vs["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ks["duration-350"]}
            ${Ks["ease-standard"]};

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,zk=K.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Xs["spacing-8"]};
`,Lk=K.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Xs["spacing-16"]};

    display: flex;
    justify-content: center;
`,Nk=K.default(D.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vs["icon-selected"]};
`,Wk=({listItems:r,multiSelect:n,selectedKeyPaths:i,itemsLoadState:a="success",itemTruncationType:o="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:g,onRetry:p,enableSearch:m,hideNoResultsDisplay:b,searchPlaceholder:y="Search",onSearch:v})=>{const x=n||f,[$,w]=t.useState(""),j=$.toLowerCase().trim(),[C,S]=t.useState(!1),k=t.useRef(),D=t.useRef(),E=t.useRef([]),T=t.useRef(),F=Nc(),[_,M]=t.useState([]),[I,A]=t.useState([]),B=t.useMemo((()=>{let e=0;for(const t of _)t.level>e&&(e=t.level);return e}),[_]),[R,P]=t.useState(0),z=e=>{const t=e.target.value;w(t),""===t?S(!1):t.trim().length>=3&&S(!0),null==v||v()},L=()=>{w(""),S(!1),T.current.focus(),null==v||v()},N=()=>{null==p||p()},W=()=>{if(0===i.length){const e=[],t=[];_.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==g||g(e,t)}else null==g||g([],[])},H=Pc(((e,t)=>((e,t,r,n,i)=>{const a=[],o=(e,s)=>{var l,c;const d=[],u=!!e.find((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));for(let f=0;f<e.length;f++){const h=e[f],g=s?s.level+1:0,p={item:h,index:a.length,indexInParent:f,parentSetSize:e.length,keyPath:s?[...s.keyPath,h.key]:[h.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:g,visible:0===g||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=h.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:u,matched:!!n&&-1!==h.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(p.checked=!!t.find((e=>Zj(e,p.keyPath))),d.push(p),a.push(p),null===(c=h.subItems)||void 0===c?void 0:c.length){const e=o(h.subItems,p);if(r&&!0!==p.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?p.checked=!0:r&&(p.checked="mixed")}p.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),p.subItemIndexes=e.map((e=>e.index))}}return d};return o(e,void 0),a})(e,i,n,j,t))),Y=Pc((e=>{return i.length?(t=H(e,!1),$k(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>$k(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),a=e[r].keyPath.slice(0,i.length);Zj(i,a)&&(n.visible=!0)}return e})))(H(e,!1));var t})),V=Pc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(j))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),U=Pc((()=>{M((e=>Mk(e,i,n))),C&&A((e=>Mk(e,i,n)))})),K=(e,t)=>{const r=((e,t,r)=>$k(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,n.length);if(!Zj(n,o))break;t.visible=r&&a.expanded&&a.visible}})))(C?I:_,e,t);P(e),C?A(r):M(r)};zc("keydown",(e=>{const t=C?I:_;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return n;return-1})(t,(e=>e.visible),R+1);r>=0&&(P(r),E.current[r].focus());break}case"ArrowUp":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return n;return-1})(t,(e=>e.visible),R-1);r>=0?(P(r),E.current[r].focus()):0===R&&T.current&&(T.current.focus(),P(-1));break}case"ArrowRight":e.preventDefault(),K(R,!0);break;case"ArrowLeft":e.preventDefault(),K(R,!1);break;case"Space":if(document.activeElement===E.current[R]){e.preventDefault();const r=t[R];if(r.hasSubItems&&!x)return;null==h||h(r)}}})),t.useEffect((()=>{let e;"default"===u?e=Y(r):"expand"===u?e=H(r,!0):"collapse"===u&&(e=H(r,!1)),M(e)}),[H,Y,r,u]),t.useEffect((()=>{U()}),[n,i,U]),t.useEffect((()=>{if(C&&$.trim().length>=3){const e=V(r),t=(e=>$k(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(H(e,!1));A(t)}}),[V,H,r,C,$]),t.useEffect((()=>{F||(T.current?(P(-1),setTimeout((()=>{var e;return null===(e=T.current)||void 0===e?void 0:e.focus()}),200)):E.current[R]?setTimeout((()=>{var e;return null===(e=E.current[R])||void 0===e?void 0:e.focus()}),200):(P(0),setTimeout((()=>{var e;return null===(e=E.current[0])||void 0===e?void 0:e.focus()}),200)))}),[R,F,P]);const q=()=>{if(m&&"success"===a)return e.jsx(OS,{ref:T,onChange:z,value:$,placeholder:y,"data-testid":"search-input","aria-label":"Enter text to search",onClear:L,variant:l})},X=()=>{if(n&&!C&&_.length>0&&"success"===a)return e.jsx(pS,{children:e.jsx(yS,Object.assign({onClick:W,type:"button",$variant:l},{children:0===i.length?"Select all":"Clear all"}))})},G=()=>{if(!b&&C&&0===I.length&&"success"===a)return e.jsxs(vS,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(xS,{"data-testid":"no-result-icon"}),"No results found."]}))},Z=()=>{if(p&&"loading"===a)return e.jsxs(vS,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(jl,{}),"Loading..."]}))},Q=()=>{if(p&&"fail"===a)return e.jsxs(vS,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(xS,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(bS,Object.assign({onClick:N,type:"button",$variant:l},{children:"Try again."}))]}))},J=t=>{if(n)switch(t.checked){case"mixed":return e.jsx(Nk,{"aria-hidden":!0});case!0:return e.jsx(hS,{"aria-hidden":!0});default:return e.jsx(gS,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(Lk,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e.jsx(uS,{"aria-hidden":!0})}))},ee=()=>(C?I:_).map(((t,r)=>{const{item:i,level:a,visible:l,expanded:c,keyPath:d,checked:u,hasSubItems:f,indexInParent:g,parentSetSize:p}=t,m=R===r,b=f&&!x;return e.jsxs(Ak,Object.assign({$visible:l},{children:[B>0&&e.jsx(Rk,{$level:a}),B>0&&!f&&n&&e.jsx(zk,{}),e.jsxs(Bk,Object.assign({"aria-checked":u,"aria-selected":!!u,"aria-expanded":f?c:void 0,"aria-level":a+1,"aria-posinset":g+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{var t;e.stopPropagation(),b?K(r,!c):(P(t=r),null==h||h((C?I:_)[t]))},onMouseEnter:()=>{P(r)},ref:e=>E.current[r]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b},{children:[f&&e.jsx(Pk,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),K(r,!c)},$expanded:c},{children:e.jsx(O.CaretRightIcon,{})})),J(t),e.jsx(iS,{bold:f,searchTerm:C?j:void 0,label:i.label,selected:!!u,truncationType:o,maxLines:s})]}))]}),`[${d.join("---")}]`)}));return e.jsx(sS,Object.assign({"data-testid":"dropdown-container",ref:k,$width:d,$variant:l},{children:e.jsxs(lS,Object.assign({"data-testid":"nested-dropdown-list"},{children:[q(),X(),G(),Z(),Q(),e.jsx("div",Object.assign({"aria-multiselectable":n,id:c,ref:D,role:"tree"},{children:ee()}))]}))}))},Hk=({selectedOptions:r,placeholder:n="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:g,onSelectOptions:p,onShowOptions:m,onHideOptions:b,onRetry:y,optionsLoadState:v="success",optionTruncationType:x="end",renderListItem:$,hideNoResultsDisplay:w,renderCustomCallToAction:j,onBlur:C,variant:S="default",readOnly:k,alignment:O,dropdownZIndex:D})=>{const[E,T]=t.useState(r||[]),[F,_]=t.useState(!1),[M,I]=t.useState(!1),[A]=t.useState((()=>Bc.generate())),B=t.useRef(),R=t.useRef();t.useEffect((()=>{T(r||[])}),[r]);const P=()=>{E&&E.length>0?(T([]),Y([])):(T(i),Y(i))},z=(e,t)=>{const r=[...E],n=qj(E,(e=>(h?h(e):e)===t));n>-1?r.splice(n,1):r.push(e),T(r),Y(r)},L=()=>{F&&(_(!1),H(!1))},N=()=>{M||F||I(!0)},W=e=>{!M||F||B.current.contains(e.relatedTarget)||(I(!1),null==C||C())},H=e=>{!e&&b&&b(),e&&m&&m()},Y=e=>{p&&p(e)};return e.jsx(oS,{children:e.jsx(rh,{enabled:!k&&!a,isOpen:F,renderElement:()=>e.jsx(mf,Object.assign({className:s,"data-testid":l,id:c,ref:B,tabIndex:-1,onFocus:N,onBlur:W,$focused:M,$disabled:a,$readOnly:k,$error:o},{children:e.jsx(FS,Object.assign({ref:R,disabled:a,expanded:F,listboxId:A,popupRole:"listbox",readOnly:k,variant:S},{children:e.jsx(qf,Object.assign({$disabled:a},{children:E&&0!==E.length?e.jsx(Xf,Object.assign({$variant:S},{children:i&&E.length===i.length?"All selected":`${E.length} selected`})):e.jsx(Gf,Object.assign({truncateType:x,$variant:S},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(DS,{listboxId:A,listItems:i,onSelectItem:z,onDismiss:L,valueExtractor:h,listExtractor:g,enableSearch:d,searchFunction:u,searchPlaceholder:f,multiSelect:!0,selectedItems:E,onSelectAll:P,onRetry:y,itemsLoadState:v,itemTruncationType:x,renderListItem:$,hideNoResultsDisplay:w,renderCustomCallToAction:j,variant:S,width:t}),onOpen:()=>{_(!0),H(!0),I(!0)},onClose:e=>{_(!1),H(!1),"click"!==e&&(I(!1),null==C||C())},onDismiss:()=>{R.current.focus(),_(!1),H(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:D})})},Yk=(e,t)=>{const[r,...n]=t;if(_k(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?Yk(i.subItems,n):i:void 0},Vk=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...Vk(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},Uk=({placeholder:r="Select",options:n,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,readOnly:p,onSearch:m,onSelectOptions:b,onShowOptions:y,onHideOptions:v,onRetry:x,onBlur:$,optionsLoadState:w="success",optionTruncationType:j="end",variant:C,alignment:S,dropdownZIndex:k})=>{const O=n,[D,E]=t.useState(c||[]),[T,F]=t.useState([]),[_,M]=t.useState(!1),[I,A]=t.useState(!1),[B]=t.useState((()=>Bc.generate())),R=t.useRef(),P=t.useRef(),z=t.useRef();t.useEffect((()=>{const e=c||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],a=Yk(e,i);a&&r.push({value:a.value,label:a.label,keyPath:i})}return r})(O,e);E(e),F(t)}),[c,O]);const L=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));E(e),F(r),K(e,r)},N=e=>{const t=q(e),r=t.map((e=>e.keyPath));F(t),E(r),K(r,t)},W=()=>{I||_||A(!0)},H=e=>{!I||_||R.current.contains(e.relatedTarget)||(A(!1),null==$||$())},Y=()=>{const{label:e,value:t}=T[0];return T.length>1?`${T.length} selected`:u?u(t)||t.toString():e},V=e=>{if("middle"===j){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),Rc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&v&&v(),e&&y&&y()},K=(e,t)=>{if(b){const r=t.map((e=>e.value));b(e,r)}},q=e=>{if(!0===e.checked)return T.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Zj(e.keyPath,r)}));{const t=[...T],r=e.hasSubItems?((e,t)=>{const r=Yk(e,t);return r&&r.subItems?Vk(r.subItems,t):[]})(O,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{T.find((t=>Zj(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(rh,{enabled:!p&&!i,isOpen:_,renderElement:()=>e.jsx(mf,Object.assign({className:o,"data-testid":s,id:l,ref:R,tabIndex:-1,onFocus:W,onBlur:H,$focused:I,$disabled:i,$readOnly:p,$error:a},{children:e.jsx(FS,Object.assign({ref:P,disabled:i,expanded:_,listboxId:B,popupRole:"tree",readOnly:p,variant:C},{children:e.jsx(qf,Object.assign({ref:z,$disabled:i},{children:_k(T)?e.jsx(Gf,Object.assign({truncateType:j},{children:r})):e.jsx(Xf,Object.assign({truncateType:j},{children:V(Y())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(Wk,{listboxId:B,listItems:O,multiSelect:!0,selectedKeyPaths:D,itemsLoadState:w,itemTruncationType:j,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,onSelectItem:N,onSelectAll:L,onRetry:x,onSearch:m,variant:C,mode:d,width:t}),onOpen:()=>{M(!0),U(!0),A(!0)},onClose:e=>{M(!1),U(!1),"click"!==e&&(A(!1),null==$||$())},onDismiss:()=>{P.current.focus(),M(!1),U(!1)},clickToToggle:!0,offset:8,alignment:S,fitAvailableHeight:!0,customZIndex:k})},Kk=({placeholder:r="Select",options:n,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:g,hideNoResultsDisplay:p,readOnly:m,onBlur:b,onSearch:y,onSelectOption:v,onShowOptions:x,onHideOptions:$,onRetry:w,optionsLoadState:j="success",optionTruncationType:C="end",variant:S,alignment:k,dropdownZIndex:O})=>{const D=n,[E,T]=t.useState(c?[c]:[]),[F,_]=t.useState(),[M,I]=t.useState(!1),[A,B]=t.useState(!1),[R]=t.useState((()=>Bc.generate())),P=t.useRef(),z=t.useRef(),L=t.useRef();t.useEffect((()=>{T(c?[c]:[]);const e=Ik(D,c||[]);_(null!=e?e:void 0)}),[c,D]);const N=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;T([r]),_({label:n,value:i}),I(!1),U(!1),null===(t=z.current)||void 0===t||t.focus(),null==v||v(r,i)},W=()=>{A||M||B(!0)},H=e=>{!A||M||P.current.contains(e.relatedTarget)||(B(!1),null==b||b())},Y=()=>{const{label:e,value:t}=F;return u?u(t)||t.toString():e},V=e=>{if("middle"===C){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),Rc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&$&&$(),e&&x&&x()};return e.jsx(rh,{enabled:!m&&!i,isOpen:M,renderElement:()=>e.jsx(mf,Object.assign({className:o,"data-testid":s,id:l,ref:P,tabIndex:-1,onFocus:W,onBlur:H,$focused:A,$disabled:i,$readOnly:m,$error:a},{children:e.jsx(FS,Object.assign({ref:z,disabled:i,expanded:M,listboxId:R,popupRole:"tree",readOnly:m,variant:S},{children:e.jsx(qf,Object.assign({ref:L,$disabled:i},{children:_k(F)?e.jsx(Gf,Object.assign({truncateType:C},{children:r})):e.jsx(Xf,Object.assign({truncateType:C},{children:V(Y())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(Wk,{listboxId:R,listItems:D,selectedKeyPaths:E,selectableCategory:g,itemsLoadState:j,itemTruncationType:C,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,onSelectItem:N,onRetry:w,onSearch:y,variant:S,mode:d,width:t}),onOpen:()=>{I(!0),U(!0),B(!0)},onClose:e=>{I(!1),U(!1),"click"!==e&&(B(!1),null==b||b())},onDismiss:()=>{z.current.focus(),I(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:O})};var qk=function(e,t,r,n){var i=-1,a=null==e?0:e.length;for(n&&a&&(r=e[++i]);++i<a;)r=t(r,e[i],i,e);return r};var Xk=function(e){return function(t,r,n){for(var i=-1,a=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===r(a[l],l,a))break}return t}},Gk=Xk(),Zk=lw;var Qk=iw;var Jk=function(e,t){return function(r,n){if(null==r)return r;if(!Qk(r))return e(r,n);for(var i=r.length,a=t?i:-1,o=Object(r);(t?a--:++a<i)&&!1!==n(o[a],a,o););return r}}((function(e,t){return e&&Gk(e,t,Zk)}));var eO=qk,tO=Jk,rO=Aj,nO=function(e,t,r,n,i){return i(e,(function(e,i,a){r=n?(n=!1,e):t(r,e,i,a)})),r},iO=Fi;var aO=Ti((function(e,t,r){var n=iO(e)?eO:nO,i=arguments.length<3;return n(e,rO(t),r,i,tO)}));const oO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],sO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var lO;!function(e){e.getCountries=()=>[].concat(...oO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:sO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const a=i.join(" ");return aO(a,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(lO||(lO={}));const cO=r=>{var{onChange:n,value:i,allowClear:a,onClear:o,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:g,placeholder:p,autoComplete:m}=r,b=X(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[y]=t.useState(lO.getCountries()),[v,x]=t.useState(void 0),[$,w]=t.useState(""),j=t.useRef(),C=Wc({ref:j,formatter:e=>lO.formatNumber(e.replace(/[^0-9]/g,""),v)});t.useEffect((()=>{const e=y.filter((e=>e.countryCode===dO(null==i?void 0:i.countryCode)))[0];x(e),w(lO.formatNumber(null==i?void 0:i.number,e))}),[i]);const S=e=>{O($,e),n&&k($,e)},k=(e,t)=>{const r=lO.formatNumber(e,t);n({number:r.replace(/[\s()]+/g,""),countryCode:t&&uO(t.countryCode)})},O=(e,t)=>{w(lO.formatNumber(e,t)),x(t)};return e.jsx(BC,Object.assign({ref:j,value:$,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=C();t(),O(e,v),n&&k(e,v)},allowClear:a&&!!$,onClear:()=>{o?o():w("")},onBlur:s,error:l,placeholder:p,addon:c?{type:"label",attributes:{value:uO(null==v?void 0:v.countryCode)}}:{type:"list",attributes:{placeholder:d,options:y,selectedOption:v,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:uO(e.countryCode)}),onSelectOption:S,onHideOptions:h,onShowOptions:g}},inputMode:"numeric",autoComplete:m},b))},dO=e=>e?e.replace("+",""):"",uO=e=>e?e.includes("+")?e:`+${e}`:"",fO=({className:r,"data-testid":n,selectedOption:i,minimumCharacters:a=3,fetchOptions:o,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:f,displayValueExtractor:h=(e=>e.toString()),onSelectOption:g})=>{const p=i&&h(i),[m,b]=t.useState(p||""),[y,v]=t.useState(p||""),[x,$]=t.useState([]),[w,j]=t.useState(!0),[C,S]=t.useState(!1),[k,O]=t.useState(!!i),[D,E]=t.useState(i),T=t.useRef(o),F=e=>G(void 0,void 0,void 0,(function*(){S(!1),j(!0);try{const t=yield T.current(e);v(e),$(t),j(!1)}catch(e){S(!0)}})),_=t.useCallback(Ou((e=>F(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{T.current=o}),[o]),t.useEffect((()=>{m&&m.length>=a&&m!==y?_(m):_.cancel(),""===m&&D&&(g&&g(void 0,void 0),A(),E(void 0)),i&&m!==h(i)&&O(!1)}),[m,i]),t.useEffect((()=>{b(i?h(i):""),A(i),E(i)}),[i]);const M=e=>{b(e.target.value)},I=(e,t)=>{g&&g(e,t)},A=e=>{v(e?h(e):""),O(!!e),$([]),j(!0)},B=()=>{b(""),g&&g(void 0,void 0),A()},R=()=>{k||D?(A(D),b(h(D)),g&&g(D,z(D)),E(D)):B()},P=()=>m&&m.length>=a&&!k,z=e=>u?u(e):e,L=()=>e.jsx(jx,{type:"text",value:m,onChange:M,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:B,styleType:"no-border",onBlur:m.length<a?R:void 0});return e.jsxs(Zf,Object.assign({className:r,show:P(),error:d&&!P(),disabled:c,readOnly:l,testId:n,onBlur:R},{children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(Yf,{children:L()}),!l&&P()&&e.jsx(Kf,{}),e.jsx($C,{listItems:x,onSelectItem:I,valueExtractor:u,listExtractor:f,itemsLoadState:C?"fail":w?"loading":"success",visible:P(),disableItemFocus:!0,onRetry:()=>F(m),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},hO=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,gO=K.default(vx)`
    position: absolute;
    right: 0;
    padding-left: ${Xs["spacing-8"]};
    margin-right: 0;
`,pO=K.default(Hf)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Xs["spacing-16"]});
`,mO=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:a,disabled:o,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:g,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:y,onSelectOption:v,listStyleWidth:x,onShowOptions:$,onHideOptions:w,onRetry:j,optionsLoadState:C={from:"success",to:"success"},optionTruncationType:S="middle",renderCustomSelectedOption:k,renderListItem:O,renderCustomCallToAction:D}=r,E=X(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[T,F]=t.useState(),[_,M]=t.useState(),I=t.useRef(),A={from:t.useRef(),to:t.useRef()},[B,R]=t.useState("none");t.useEffect((()=>{F(null==n?void 0:n.from),M(null==n?void 0:n.to)}),[n]);const P=e=>t=>{t.stopPropagation(),t.preventDefault(),o||l||R("from"===e?"from":"to"===e&&T?"to":"from")},z=e=>{const t="from"===e?T:_;return y?y(t):p?p(t):null==t?void 0:t.toString()},L=(e,t)=>{if("middle"===S){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),Rc.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(t),r,120,8)}return t},N=e=>{!e&&w&&w(),e&&$&&$()},W=t=>{const r="from"===t?T:_;return r?k?k(r):e.jsx(Xf,Object.assign({truncateType:S},{children:L(t,z(t))})):e.jsx(Gf,Object.assign({truncateType:S},{children:L(t,i[t])}))},H=t=>e.jsx(qf,Object.assign({onClick:P(t),ref:A[t],$disabled:o},{children:W(t)}));return e.jsxs(Zf,Object.assign({show:"none"!==B,"data-testid":E["data-testid"],error:c&&!("none"!==B),disabled:o,readOnly:l,testId:d,onBlur:()=>{N(!1),R("none"),T&&_||(M(void 0),F(void 0))},className:s},{children:[e.jsxs(hO,{children:[e.jsx(pO,Object.assign({type:"button","data-testid":u||"selector",disabled:o,ref:I,onClick:P()},E,{children:e.jsxs(Sh,Object.assign({currentActive:(()=>{switch(B){case"from":return"start";case"to":return"end";case"none":return B}})()},{children:[H("from"),H("to")]}))})),"none"===B&&T&&_&&!l&&!o&&e.jsx(gO,Object.assign({onClick:e=>{e.stopPropagation(),F(void 0),M(void 0),v&&v({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e.jsx(xx,{"aria-hidden":!0})}))]}),"none"!==B&&e.jsx(Kf,{}),(()=>{if("none"===B)return null;const t=a[B];if(t&&t.length>0){const r="from"===B?T:_;return e.jsx($C,{listItems:t,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(i=B)?F(r):M(r),N(!1),I&&I.current.focus(),v&&v({[i]:r},n),void("from"===i?(M(void 0),R("to"),N(!0)):R("none"));var r,n,i},onDismiss:()=>(R("none"),N(!1),I&&I.current.focus(),void(T&&_||(M(void 0),F(void 0)))),valueExtractor:p,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:g,searchFunction:h,"data-testid":`${B}-dropdown-list`,selectedItems:r?[r]:[],onRetry:j,itemsLoadState:C[B],itemTruncationType:S,renderListItem:O,renderCustomCallToAction:D})}return null})()]}))},bO=({selectedOption:r,placeholder:n="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:g,listExtractor:p,displayValueExtractor:m,onSelectOption:b,onShowOptions:y,onHideOptions:v,onRetry:x,optionsLoadState:$="success",optionTruncationType:w="end",renderCustomSelectedOption:j,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,onBlur:O,variant:D="default",readOnly:E,alignment:T,dropdownZIndex:F})=>{const[_,M]=t.useState(r),[I,A]=t.useState(!1),[B,R]=t.useState(!1),[P]=t.useState((()=>Bc.generate())),z=t.useRef(),L=t.useRef(),N=t.useRef();t.useEffect((()=>{M(r)}),[r]);const W=(e,t)=>{L.current.focus(),M(e),A(!1),K(!1),null==b||b(e,t)},H=()=>{I&&(A(!1),K(!1))},Y=()=>{B||I||R(!0)},V=e=>{!B||I||z.current.contains(e.relatedTarget)||(R(!1),null==O||O())},U=e=>{if("middle"===w){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Rc.truncateOneLine((e=>"string"==typeof e?e:g(e)||e.toString())(e),t,120,8)}return e},K=e=>{e?null==y||y():null==v||v()};return e.jsx(oS,{children:e.jsx(rh,{enabled:!E&&!a,isOpen:I,renderElement:()=>e.jsx(mf,Object.assign({className:s,"data-testid":l,id:c,ref:z,tabIndex:-1,onFocus:Y,onBlur:V,$focused:B,$disabled:a,$readOnly:E,$error:o},{children:e.jsx(FS,Object.assign({ref:L,disabled:a,expanded:I,listboxId:P,popupRole:"listbox",readOnly:E,variant:D},{children:e.jsx(qf,Object.assign({ref:N,$disabled:a},{children:_?j?j(_):e.jsx(Xf,Object.assign({truncateType:w,$variant:D},{children:U(m?m(_):h?h(_):_.toString())})):e.jsx(Gf,Object.assign({truncateType:w,$variant:D},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(DS,{listboxId:P,listItems:i,onSelectItem:W,onDismiss:H,valueExtractor:h,listExtractor:p,enableSearch:d,searchPlaceholder:f,searchFunction:u,selectedItems:_?[_]:[],onRetry:x,itemsLoadState:$,itemTruncationType:w,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,variant:D,width:t}),onOpen:()=>{A(!0),K(!0),R(!0)},onClose:e=>{A(!1),K(!1),"click"!==e&&(R(!1),null==O||O())},onDismiss:()=>{L.current.focus(),A(!1),K(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:F})})},yO=K.default.div`
    overflow: hidden;
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    background: ${Vs.bg};
    padding: ${Xs["spacing-16"]};
    min-width: 23rem;

    ${Qs.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Zs["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Qs.MaxWidth.xs} {
        width: calc(100vw - ${Zs["xs-margin"]} * 2);
    }

    ${Qs.MaxWidth.xxs} {
        width: calc(100vw - ${Zs["xxs-margin"]} * 2);
    }
`,vO=K.default.div`
    display: flex;
    align-items: baseline;
`,xO=K.default.div`
    margin: 0 0.5rem;
`,$O=K.default.div`
    ${e=>"small"===e.$variant?Us["body-md-regular"]:Us["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${xf(1)}
                `}}
    overflow: hidden;
`,wO=K.default($O)`
    color: ${Vs["text-subtler"]};
`,jO=r=>{var{alignment:n="left",className:i,disabled:a,dropdownZIndex:o,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:g="Select",rangeLabelPrefix:p,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:y,value:v}=r,x=X(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:$,bins:w=[],renderEmptyView:j,ariaLabels:C}=l,[S,k]=t.useState(W()),[O,D]=t.useState(!1),[E,T]=t.useState(!1),[F]=t.useState((()=>Bc.generate())),_=w.map((e=>e.minValue)),M=Math.min(..._),I=t.useRef(),A=t.useRef(),B=t.useRef(),R=x["data-testid"]||"select-histogram";t.useEffect((()=>{v!==S&&k(W())}),[v]);const P=e=>{k(e),null==u||u(e)},z=e=>{k(e),null==f||f(e)},L=()=>{E||O||T(!0)},N=e=>{!E||O||I.current.contains(e.relatedTarget)||(T(!1),null==d||d())};function W(){return null!=v?v:[M,M+$]}const H=t=>y?y(t):e.jsxs(exports.Typography.BodyBL,{children:[p,t,m]});return e.jsx(oS,{children:e.jsx(rh,{enabled:!b&&!a,isOpen:O,renderElement:()=>e.jsx(mf,Object.assign({className:i,"data-testid":R,id:c,ref:I,tabIndex:-1,onFocus:L,onBlur:N,$focused:E,$disabled:a,$readOnly:b,$error:s},{children:e.jsx(FS,Object.assign({ref:A,disabled:a,expanded:O,listboxId:F,popupRole:"dialog",readOnly:b,variant:"default"},{children:e.jsx(qf,Object.assign({ref:B,$disabled:a},{children:_&&0!==_.length?e.jsxs(vO,{children:[H(S[0]),e.jsx(xO,{children:"-"}),H(S[1])]}):e.jsx(wO,Object.assign({truncateType:h,$variant:"default"},{children:g}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(yO,Object.assign({style:{width:t}},{children:e.jsx(bx,{interval:$,value:S,bins:w,onChange:P,onChangeEnd:z,showRangeLabels:!1,renderEmptyView:j,ariaLabels:C})})),onOpen:()=>{D(!0)},onClose:()=>{D(!1)},onDismiss:()=>{A.current.focus(),D(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:o})})},CO=r=>{var{value:n,ariaLabel:i,onChange:a,onChangeEnd:o}=r,s=X(r,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e.jsx(ux,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==a||a(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:i?[i]:void 0}))},SO=K.default.p`
    text-align: right;
    ${Us["body-sm-semibold"]}
    color: ${Vs["text-subtler"]};
`,kO=({value:r,maxLength:n,renderCustomCounter:i})=>{const[a,o]=t.useState("");t.useEffect((()=>{o(s(`${r||""}`))}),[r,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:V.default.isValidElement(a)?a:e.jsx(SO,Object.assign({"data-testid":"counter-label"},{children:a}))})},OO=K.default.div`
    display: flex;
    flex-direction: column;
`,DO=K.default.textarea`
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    background: ${Vs.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Xs["spacing-12"]} ${Xs["spacing-16"]};
    width: 100%;

    ${Us["body-baseline-regular"]}
    color: ${Vs.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${qs["width-020"]} ${qs.solid}
            ${Vs["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Vs["text-subtler"]};
    }

    ${e=>e.readOnly?i.css`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Vs["border-focus"]};
                }
            `:e.disabled?i.css`
                background: ${Vs["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Vs["border-disabled"]};
                }
            `:e.$error?i.css`
                border-color: ${Vs["border-error"]};

                :focus,
                :active {
                    outline-color: ${Vs["border-error-focus"]};
                }
            `:void 0}
`,EO=V.default.forwardRef(((r,n)=>{var{value:i,disabled:a,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=r,f=X(r,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,g]=t.useState(i);t.useEffect((()=>{g(i)}),[i]);return e.jsx(DO,Object.assign({ref:n,disabled:a,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(g(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;g(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l?l.length+u:u},f))})),TO=V.default.forwardRef(((r,n)=>{var{value:i,disabled:a,rows:o=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=r,f=X(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,g]=t.useState(i);t.useEffect((()=>{g(i)}),[i]);return e.jsxs(OO,{children:[e.jsx(EO,Object.assign({ref:n,disabled:a,value:h,rows:o||5,onChange:e=>{const t=e.target.value;g(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},f)),d&&e.jsx(kO,{value:h,maxLength:d,renderCustomCounter:u})]})})),FO=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Xs["spacing-4"]};
`,_O=K.default.div`
    display: flex;
    flex: 1;
    margin-right: ${Xs["spacing-12"]};
`,MO=K.default(zv)`
    margin-top: 0;
`,IO=V.default.forwardRef(((r,n)=>{const{label:i,value:a,errorMessage:o,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:g,xxsCols:p,xsCols:m,smCols:b,mdCols:y,lgCols:v,xlCols:x,xxlCols:$,transformValue:w,prefix:j=""}=r,C=X(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[S,k]=t.useState(a);t.useEffect((()=>{k(a)}),[a]);return e.jsxs(Kv,Object.assign({id:s,label:i,disabled:C.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:g,xxsCols:p,xsCols:m,smCols:b,mdCols:y,lgCols:v,xlCols:x,xxlCols:$},{children:[e.jsx(EO,Object.assign({id:`${s}-base`,"data-testid":c||s,value:S,error:!!o,onChange:e=>{const t=e.target.value;k(t),d&&d(e)},ref:n,prefix:j,transformValue:w},C)),o||C.maxLength?e.jsxs(FO,{children:[o&&e.jsx(_O,{children:e.jsx(MO,Object.assign({"data-testid":l||(s?`${s}-error-message`:"error-message")},{children:o}))}),C.maxLength&&e.jsx(kO,{value:S,maxLength:C.maxLength,renderCustomCounter:C.renderCustomCounter})]}):e.jsx(e.Fragment,{})]}))})),AO=K.default.div`
    position: relative;
`,BO=K.default(bf)`
    height: 3rem;
    gap: ${Xs["spacing-8"]};
`,RO=K.default(yf)`
    display: block;
    width: 100%;
    flex: 1;
`,PO=K.default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?i.css`
                    color: ${Vs["icon-selected-disabled"]};
                `:i.css`
                    color: ${Vs["icon-disabled-subtle"]};
                `:e.$active?i.css`
                color: ${Vs["icon-selected"]};
            `:i.css`
            color: ${Vs["icon-subtle"]};
        `};
`,zO=i.css`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Us.Spec["weight-regular"]};
        ${e=>e.$size&&Us[`${e.$size}-regular`]}
        color: ${Vs.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,LO=K.default.ol`
    ${zO}

    margin-left: 3rem;

    ${Qs.MaxWidth.lg} {
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
`,NO=K.default.ul`
    ${zO}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,WO=t=>{var{size:r,bulletType:n,bottomMargin:i,children:a}=t,o=X(t,["size","bulletType","bottomMargin","children"]);return e.jsx(NO,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},o,{children:a}))};WO.displayName="TextList.Ul";const HO=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:a,children:o}=t,s=X(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e.jsx(LO,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:a},s,{children:o}))};HO.displayName="TextList.Ol";const YO=WO,VO=K.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Vs.bg};

    ${e=>{if(!e.$indicator)return i.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return i.css`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?i.css`
                            border-color: ${Vs["border-error"]};
                        `:i.css`
                            border-color: ${Vs["border-error"]};

                            &:has(${GO}:hover) {
                                background: ${Vs["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border: none;
                            background: ${Vs["bg-selected-disabled"]};
                        `:i.css`
                            border: none;
                        `:e.$selected?i.css`
                        border: none;
                        background: ${Vs["bg-selected"]};

                        &:has(${GO}:hover) {
                            background: ${Vs["bg-selected-hover"]};

                            & ${KO} {
                                color: ${Vs["text-selected-hover"]};
                            }

                            & ${aD} {
                                color: ${Vs["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border: none;

                    &:has(${GO}:hover) {
                        background: ${Vs["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?i.css`
                            border-color: ${Vs["border-error"]};
                        `:i.css`
                            border-color: ${Vs["border-error"]};

                            &:has(${GO}:hover) {
                                background: ${Vs["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border-color: ${Vs["border-selected-disabled"]};
                            background: ${Vs["bg-selected-disabled"]};
                        `:i.css`
                            border-color: ${Vs["border-disabled"]};
                            background: ${Vs["bg-disabled"]};
                        `:e.$selected?i.css`
                        border-color: ${Vs["border-selected"]};
                        background: ${Vs["bg-selected"]};

                        &:has(${GO}:hover) {
                            background: ${Vs["bg-selected-hover"]};

                            & ${KO} {
                                color: ${Vs["text-selected-hover"]};
                            }

                            & ${aD} {
                                color: ${Vs["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border-color: ${Vs.border};

                    &:has(${GO}:hover) {
                        background: ${Vs["bg-hover-subtle"]};
                    }
                `}
`,UO=K.default.input`
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
`,KO=K.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${Vs["text-selected-disabled"]};
                `:i.css`
                    color: ${Vs["text-disabled"]};
                `:e.$selected?i.css`
                color: ${Vs["text-selected"]};
            `:i.css`
            color: ${Vs.text};
        `}
`,qO=K.default.label`
    ${Us["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Qs.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Qs.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,XO=K.default.div`
    ${Us["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Us["body-md-semibold"]}
    }
`,GO=K.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,ZO=K.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,QO=K.default.button`
    color: ${e=>e.$disabled?Vs["text-disabled"]:Vs["text-error"]};
    white-space: nowrap;
    ${Us["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,JO=K.default.button`
    color: ${e=>e.disabled?Vs["text-disabled"]:Vs["text-primary"]};
    ${Us["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Vs.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,eD=K.default.div`
    width: 100%;
    color: ${e=>e.$disabled?Vs["text-disabled"]:Vs["text-error"]};
    border: none;
    background: ${Vs.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,tD=K.default(Nl)`
    width: 100%;
    user-select: none;
`,rD=K.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Vs.bg};
    ${Ml({textSize:"body-md"})}

    ${e=>e.$disabled?i.css`
                color: ${Vs["text-disabled"]};
            `:e.$selected?i.css`
                color: ${Vs["text-selected"]};
            `:i.css`
                color: ${Vs.text};
            `}
`,nD=K.default(exports.Typography.BodyMD)`
    color: ${e=>e.$disabled?Vs["text-disabled"]:Vs["text-error"]};
`,iD=K.default(YO)`
    color: ${e=>e.$disabled?Vs["text-disabled"]:Vs["text-error"]};
`,aD=K.default((({type:t,active:r=!1,disabled:n,className:i})=>{let a;switch(t){case"checkbox":a=r?e.jsx(S.SquareTickFillIcon,{}):e.jsx(C.SquareIcon,{});break;case"radio":a=r?e.jsx(T.CircleDotIcon,{}):e.jsx(E.CircleIcon,{});break;case"tick":a=e.jsx(k.TickIcon,{});break;case"cross":a=e.jsx(m.CrossIcon,{});break;default:a=null}return e.jsx(PO,Object.assign({className:i,$active:r,$disabled:n},{children:a}))}))`
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${Vs["icon-selected-disabled"]};
                `:i.css`
                    color: ${Vs["icon-disabled-subtle"]};
                `:e.$selected?i.css`
                color: ${Vs["icon-selected"]};
            `:i.css`
            color: ${Vs["icon-subtle"]};
        `};
`,oD=({type:r="checkbox",indicator:i,checked:a,styleType:o="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:h,id:g,className:p,compositeSection:m,removable:b,onRemove:y,"data-testid":v,onChange:x,useContentWidth:$})=>{const{collapsible:w=!0,errors:j,children:C,initialExpanded:S}=m||{},[k,O]=t.useState(a),[D,E]=t.useState(S),T=t.useMemo((()=>{const e=Array.isArray(j)&&(null==j?void 0:j.length)>0,t=!Array.isArray(j)&&!!j;return e||t}),[j]),[F]=t.useState(Bc.generate()),_=g?`${g}`:`tg-${F}`,M=t.useRef();t.useEffect((()=>{O(a)}),[a]),t.useEffect((()=>{k&&E(null==S||S)}),[k]);const I=e=>{if(!d){if(x)return void x(e);switch(r){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":k||O(!0)}}},A=()=>{d||E(!D)},B=()=>{d||!y||y()},R=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e.jsx(aD,{type:t,active:k,disabled:d,$selected:k,$disabled:d})},P=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(XO,Object.assign({"data-id":"toggle-sublabel"},{children:t}))},z=()=>{const t=!D&&!T;return w&&e.jsxs(JO,Object.assign({$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":D?"collapse-button":"expand-button"},{children:[D?"Show less":"Show more",D?e.jsx(n.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]}))},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(nD,Object.assign({weight:"semibold",$disabled:d},{children:"Error"})),e.jsx(iD,Object.assign({$disabled:d},{children:null==t?void 0:t.map(((t,r)=>e.jsx("li",Object.assign({id:`${_}-error-list-item-${r}`},{children:e.jsx(nD,Object.assign({weight:"semibold",$disabled:d},{children:t}))}),r)))}))]});return e.jsxs(VO,Object.assign({$selected:k,$disabled:d,className:p,$styleType:o,$error:u,$indicator:i,$useContentWidth:$,id:g,"data-testid":v},{children:[e.jsxs(GO,Object.assign({id:`${_}-header-container`,$disabled:d,$error:u,$selected:k,$indicator:i,$styleType:o},{children:[e.jsxs(ZO,Object.assign({$addPadding:b},{children:[e.jsx(UO,{ref:M,name:h,id:`${_}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:I,checked:k}),i&&R(),e.jsxs(KO,Object.assign({$selected:k,$disabled:d},{children:[e.jsx(qO,Object.assign({htmlFor:`${_}-input`,"data-testid":`${_}-toggle-label`,$maxLines:l},{children:s})),c&&P()]}))]})),b&&e.jsx(QO,Object.assign({type:"button",$disabled:d,onClick:B,id:`${_}-remove-button`},{children:"Remove"}))]})),C&&e.jsxs("div",{children:[(!w||D)&&e.jsx(rD,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!w,$disabled:d},{children:C})),w&&!D&&T&&e.jsx(eD,Object.assign({$disabled:d,onClick:A,id:`${_}-error-alert`},{children:e.jsx(tD,Object.assign({type:d?"description":"error",className:p,showIcon:!0},{children:Array.isArray(j)?L(j):j}))})),z()]})]}))},sD=K.default(Di.div)`
    position: absolute;
    top: calc(3rem + ${Xs["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Qs.MaxWidth.xxs} {
        max-width: 100%;
    }
`,lD=K.default.div`
    position: relative;
    width: 100%;
    padding: ${Xs["spacing-8"]} ${Xs["spacing-20"]}
        ${Xs["spacing-24"]} ${Xs["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Vs.bg};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
`,cD=K.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Qs.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,dD=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Xs["spacing-16"]};
    gap: ${Xs["spacing-8"]} ${Xs["spacing-16"]};

    ${Qs.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Xs["spacing-32"]};
    }
`,uD=K.default.div`
    display: flex;
    align-items: center;
    margin-right: ${Xs["spacing-32"]};

    ${Qs.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,fD=K.default.div`
    display: flex;
    gap: ${Xs["spacing-8"]};

    ${Qs.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Qs.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,hD=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Qs.MaxWidth.xxs} {
        width: 6rem;
    }
`,gD=K.default(tl)`
    width: 5rem;
    padding: ${Xs["spacing-16"]} 0;
    color: ${Vs.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Vs["icon-hover"]};
    }
`,pD=K.default(exports.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,mD=K.default(mf)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Qs.MaxWidth.xxs} {
        width: 100%;
    }
`,bD=K.default(yf)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,yD=K.default(oD)`
    min-width: 5rem;
    flex: 1;
`,vD=K.default(Ol.Small)`
    width: 7rem;

    ${Qs.MaxWidth.sm} {
        flex: 1;
    }

    ${Qs.MaxWidth.xxs} {
        width: 100%;
    }
`;var xD,$D,wD;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(xD||(xD={})),function(e){e.HOUR="hour",e.MINUTE="minute"}($D||($D={})),function(e){e.AM="am",e.PM="pm"}(wD||(wD={}));const jD=({id:r,value:i,show:a,format:o,onChange:s,onCancel:l})=>{const c=Fu.getTimeValues(o,i),[d,u]=t.useState(c.hour),[h,g]=t.useState(c.minute),[p,m]=t.useState(c.period),b=t.useRef(),y=t.useRef(),v=qe();t.useEffect((()=>{if(a&&b.current&&b.current.focus(),a){const{hour:e,minute:t,period:r}=Fu.getTimeValues(o,i);u(e),g(t),m(r)}}),[a,i,o]),t.useEffect((()=>{const e=b.current,t=y.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=t.useCallback((e=>{switch(e.currentTarget.name){case xD.MINUTE_UP:g(Fu.updateMinutes(h,"add"));break;case xD.MINUTE_DOWN:g(Fu.updateMinutes(h,"minus"));break;case xD.HOUR_UP:u(Fu.updateHours(d,"add"));break;case xD.HOUR_DOWN:u(Fu.updateHours(d,"minus"))}}),[d,h]),w=e=>{e.target.select()},j=e=>{const t=e.target.value;switch(e.target.name){case $D.HOUR:t.length<=2&&u(t);break;case $D.MINUTE:t.length<=2&&g(t)}},C=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case $D.HOUR:{const r=t>23||t<0?c.hour:Fu.convertHourTo12HourFormat(e.target.value);u(r);break}case $D.MINUTE:{const r=t>59||t<0?c.minute:e.target.value;g(Rc.padValue(r));break}}},S=e=>{switch(e.target.name){case wD.AM:m(Tu.AM);break;case wD.PM:m(Tu.PM)}},k=e=>r?`${r}-${e}`:e,O=di({opacity:a?1:0,height:a?v.height+32+2:0});return e.jsx(sD,Object.assign({"data-testid":"animated-dropdown-wrapper",style:O},{children:e.jsxs(lD,Object.assign({ref:v.ref,"data-testid":k("timepicker-dropdown"),inert:a?void 0:""},{children:[e.jsxs(cD,{children:[e.jsxs(uD,{children:[e.jsxs(hD,{children:[e.jsx(gD,Object.assign({"aria-label":"increase hour",name:xD.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":k("hour-increment-button")},{children:e.jsx(n.ChevronUpIcon,{})})),e.jsx(mD,{children:e.jsx(bD,{"aria-label":"hour",type:"number",name:$D.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:d,onFocus:w,onChange:j,onBlur:C,min:1,max:12,placeholder:"HH","data-testid":k("hour-input")})}),e.jsx(gD,Object.assign({"aria-label":"decrease hour",name:xD.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":k("hour-decrement-button")},{children:e.jsx(f.ChevronDownIcon,{})}))]}),e.jsx(pD,{children:":"}),e.jsxs(hD,{children:[e.jsx(gD,Object.assign({"aria-label":"increase minute",name:xD.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":k("minute-increment-button")},{children:e.jsx(n.ChevronUpIcon,{})})),e.jsx(mD,{children:e.jsx(bD,{"aria-label":"minute",type:"number",name:$D.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:y,value:h,onChange:j,onBlur:C,onFocus:w,min:0,max:59,placeholder:"MM","data-testid":k("minute-input")})}),e.jsx(gD,Object.assign({"aria-label":"decrease minute",name:xD.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":k("minute-decrement-button")},{children:e.jsx(f.ChevronDownIcon,{})}))]})]}),e.jsxs(fD,{children:[e.jsx(yD,Object.assign({checked:p===Tu.AM,name:wD.AM,type:"radio",onChange:S,"data-testid":k("am-toggle"),"aria-label":"AM"},{children:"AM"})),e.jsx(yD,Object.assign({checked:p===Tu.PM,name:wD.PM,type:"radio",onChange:S,"data-testid":k("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e.jsxs(dD,{children:[e.jsx(vD,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":k("cancel-button")},{children:"Cancel"})),e.jsx(vD,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===o?Fu.convertTo24HourFormat({hour:d,minute:h,period:p}):`${d}:${h}${p}`,s(e)},disabled:""===d||""===h,"data-testid":k("confirm-button")},{children:"Done"}))]})]}))}))},CD=r=>{var{id:n,disabled:i=!1,error:a,value:o,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=r,f=X(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,g]=t.useState(!1),[p,m]=t.useState(!1),[b,y]=t.useState(""),[v,x]=t.useState(""),$=t.useRef();t.useEffect((()=>{o&&(y(o.start),x(o.end))}),[]),zc("mousedown",(function(e){i||S(e)}),"document"),zc("keyup",(function(e){if("Tab"===e.code)S(e)}),"document");const w=()=>{C()},j=()=>{h||p||d&&d()},C=()=>{g(!1),m(!1),u&&u()},S=e=>{$&&!$.current.contains(e.target)&&(p||h)&&C()};return e.jsx(AO,Object.assign({ref:$,id:n},f,{children:e.jsxs(BO,Object.assign({$disabled:i,$error:a,$readOnly:l},{children:[e.jsxs(Sh,Object.assign({error:a,currentActive:h?"start":p?"end":"none"},{children:[e.jsx(RO,{onFocus:()=>{i||l||h||(m(!1),g(!0),j())},readOnly:!0,placeholder:"From",value:Fu.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(RO,{onFocus:()=>{i||l||p||(g(!1),m(!0),j())},readOnly:!0,placeholder:"To",value:Fu.formatDisplayValue(v,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e.jsx(jD,{id:n,show:h,value:b,format:s,onCancel:w,onChange:e=>{g(!1),m(!0),y(e);c&&c({start:e,end:v})}}),e.jsx(jD,{id:n,show:p,value:v,format:s,onCancel:w,onChange:e=>{m(!1),x(e);c&&c({start:b,end:e}),""==b?g(!0):u&&u()}})]}))}))},SD=K.default(bf)`
    height: 3rem;
    gap: ${Xs["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Xs["spacing-20"]});
`,kD=r=>{var{id:n,disabled:i=!1,error:a,value:o,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:g,endLimit:p,interval:m=15}=r,b=X(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[y]=t.useState((()=>Bc.generate())),[v,x]=t.useState(null),[$,w]=t.useState(!1),[j,C]=t.useState(""),[S,k]=t.useState(""),[O,D]=t.useState(""),[E,T]=t.useState(""),[F,_]=t.useState(""),M=t.useRef(),I=t.useRef(),A=t.useRef(),B=t.useMemo((()=>Fu.generateTimings(m,s,g,p)),[m,s,g,p]),R=t.useMemo((()=>{if(""===E)return B;const e=Fu.findClosestFlooredTime(E,B);return B.slice(B.indexOf(e))}),[B,E]),P=t.useCallback((e=>Fu.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(o){const r=null!==(e=P(o.start))&&void 0!==e?e:"",n=null!==(t=P(o.end))&&void 0!==t?t:"";k(r),D(n),T(r),_(n)}}),[o,P]),t.useEffect((()=>{if(a)return void w(!1);const e=P(S),t=P(O);if(void 0===e)C("Invalid start time");else if(void 0===t)C("Invalid end time");else{if(!(""!==e&&""!==t&&Fu.to24Hour(t)<Fu.to24Hour(e)))return C(""),void(document.activeElement!==I.current&&document.activeElement!==A.current||w(!0));C("End time must be after start time")}w(!1)}),[S,O,P,a]);const z=e=>{i||l||(v||$||null==d||d(),x(e),w(!0))},L=e=>{i||l||(x(e),w(!0),("start"===e?I:A).current.select())};function N(e){switch(e.code){case"Enter":"start"===v?W(S):"end"===v&&($&&H(O),A.current.blur());break;case"Tab":Y(S,O,{})}}const W=e=>{Y(e,O,{goToNextInput:!0})},H=e=>{Y(S,e,{triggerOnBlur:!0})},Y=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,a;const o=null!==(i=P(e))&&void 0!==i?i:E,s=null!==(a=P(t))&&void 0!==a?a:F;k(o),D(s);o===E&&s===F||null==c||c({start:o,end:s}),r&&void 0!==P(e)&&(x("end"),A.current.select()),n&&(x(null),w(!1),null==u||u()),T(o),_(s)},V=e=>{e.stopPropagation(),k(""),D(""),T(""),_("");null==c||c({start:"",end:""}),x(null),w(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&v&&!$&&Y(S,O,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==S?void 0:S.length)>0||(null==O?void 0:O.length)>0))return e.jsx(gO,Object.assign({onClick:V,type:"button","aria-label":"Clear"},{children:e.jsx(xx,{"aria-hidden":!0})}))};return e.jsxs(AO,Object.assign({id:n},b,{children:[e.jsx(oS,{children:e.jsx(rh,{enabled:!l&&!i,isOpen:$,renderElement:()=>e.jsxs(SD,Object.assign({ref:M,$disabled:i,$error:a||!!j,$readOnly:l,onBlur:U},{children:[e.jsxs(Sh,Object.assign({error:a||!!j,currentActive:null===v?"none":v},{children:[e.jsx(RO,{ref:I,onFocus:()=>z("start"),placeholder:"start"===v?"hh:mm":"From",onChange:e=>k(e.target.value),value:S,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:N,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":$,"aria-controls":y,"aria-autocomplete":"list"}),e.jsx(RO,{ref:A,onFocus:()=>z("end"),placeholder:"end"===v?"hh:mm":"To",onChange:e=>D(e.target.value),value:O,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:N,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":$,"aria-controls":y,"aria-autocomplete":"list"})]})),K()]})),renderDropdown:()=>{if($)return"start"===v?e.jsx(DS,{listItems:B,onSelectItem:W,selectedItems:[S],disableItemFocus:!0,topScrollItem:Fu.findClosestFlooredTime(P(S),B),listboxId:y}):e.jsx(DS,{listItems:R,onSelectItem:H,selectedItems:[O],disableItemFocus:!0,topScrollItem:Fu.findClosestFlooredTime(P(O),R),listboxId:y})},onClose:e=>{"outside-press"===e?(x(null),w(!1),null==u||u()):Y(S,O,{triggerOnBlur:!0})},onDismiss:()=>{("start"===v?I:A).current.focus(),w(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!a&&j&&e.jsx(zv,Object.assign({id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message"},{children:j}))]}))},OD=t=>{var{variant:r="dial"}=t,n=X(t,["variant"]);return"dial"===r?e.jsx(CD,Object.assign({},n)):"combobox"===r?e.jsx(kD,Object.assign({},n)):void 0};K.default.div`
    position: relative;
`;const DD=K.default(yf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,ED=r=>{var{id:n,disabled:i=!1,readOnly:a=!1,error:o,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:f}=r,h=X(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[g,p]=t.useState(!1),m=t.useRef();zc("mousedown",(function(e){i||a||v(e)}),"document"),zc("keyup",(function(e){if("Tab"===e.code)v(e)}),"document");const b=()=>{i||a||g||(p(!0),u&&u())};const y=()=>{p(!1),f&&f()},v=e=>{m&&!m.current.contains(e.target)&&g&&y()},x=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(bf,Object.assign({ref:m,id:n,$readOnly:a,$disabled:i,$error:o},h,{children:[e.jsx(DD,{onFocus:b,focused:g,readOnly:!0,placeholder:l||x(),value:Fu.formatDisplayValue(s,c),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e.jsx(jD,{id:n,show:g,value:s,format:c,onCancel:()=>{y()},onChange:e=>{d&&d(e),y()}})]}))},TD=K.default(IC)`
    margin-right: 0.5rem;
`,FD=K.default(jx)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,_D=K.default(FD)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,MD=K.default(exports.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${Vs["text-disabled"]};
            `}}
`,ID=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,AD=K.default(exports.Typography.BodyBL)``,BD=r=>{var{disabled:n,error:i,value:a,onChange:o,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:f}=r,h=X(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[g,p]=t.useState(""),[m,b]=t.useState(""),[y,v]=t.useState("none"),x=t.useRef(null),$=t.useRef(null),w=t.useRef(null),j=t.useRef(g),C=t.useRef(m),S=t.useRef(y),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),O=Wc({ref:$,formatter:k}),D=Wc({ref:w,formatter:k}),E=e=>{j.current=e,p(e)},T=e=>{C.current=e,b(e)},F=e=>{S.current=e,v(e)};t.useEffect((()=>{"floor"===y&&3===g.length&&w.current&&w.current.focus()}),[g]),t.useEffect((()=>{R(a)}),[a]);const _=e=>{F(e.target.name),e.target.select()},M=e=>{const t=e.target.name,r=e.target.value,n=B(r);"floor"===t?(E(n),n!==g&&P(n,t)):(T(n),n!==m&&P(n,t))},I=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:r}=O();r(),E(e),P(e,t)}else{const{nextValue:e,updateCaretPosition:r}=D();r(),T(e),P(e,t)}},A=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===y&&0===m.length&&$.current.focus()},B=e=>/^[0-9]$/.test(e)?Rc.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==RD)if(void 0===e||0===e.length)E(""),T("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];E("floor"===y?e:B(e)),T("unit"===y?r:B(r))}}},P=(e,t)=>{if(!o&&!l)return;const r={floor:j.current,unit:C.current};if(r[t]=e,o){const e=L(r);o(e)}l&&l([r.floor,r.unit])},z=()=>{if(!s&&!c)return;const e={floor:B(j.current),unit:B(C.current)};if(s){const t=L(e);s(t)}c&&c([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":RD},N=e=>e.split("-");return e.jsxs(bf,Object.assign({},h,{ref:x,onClick:()=>{"none"===y&&$.current&&$.current.focus()},$disabled:n,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==S.current&&(F("none"),z())}},{children:[e.jsx(TD,Object.assign({"data-testid":"addon",$disabled:n,$readOnly:d},{children:"#"})),d&&a?(()=>{const t=a.split("-");return e.jsxs(ID,{children:[e.jsx(AD,{children:t[0]}),e.jsx(MD,{children:"-"}),e.jsx(AD,{children:t[1]})]})})():e.jsxs(e.Fragment,{children:[e.jsx(FD,{name:"floor",maxLength:3,value:g,ref:$,onFocus:_,onBlur:M,onChange:I,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==y||d?N(u)[0]:"",autoComplete:f,styleType:"no-border"}),e.jsx(MD,Object.assign({$inactive:0===g.length},{children:"-"})),e.jsx(_D,{name:"unit",maxLength:5,value:m,ref:w,onFocus:_,onBlur:M,onChange:I,onKeyDown:A,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==y||d?N(u)[1]:"",autoComplete:f,styleType:"no-border"})]})]}))},RD="Invalid unit number",PD={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(hh,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(Th,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(Dg,Object.assign({id:`${i}-base`,"data-testid":o||i},y))}))},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(bx,Object.assign({id:`${i}-base`,"data-testid":o||i},y))}))},Input:Cx,InputGroup:RC,MaskedInput:ZC,Label:Nv,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y,variant:v}=t,x=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y},{children:e.jsx(Hk,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n,enableSearch:s,variant:v},x))}))},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(Kk,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(Uk,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y,variant:v}=t,x=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y},{children:e.jsx(bO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n,enableSearch:s,variant:v},x))}))},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,histogramSlider:y}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(jO,Object.assign({histogramSlider:y,error:!!n,"data-testid":o||i,id:`${i}-base`},v))}))},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(CO,Object.assign({id:`${i}-base`,"data-testid":o||i},y))}))},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(ux,Object.assign({id:`${i}-base`,"data-testid":o||i},y))}))},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:v.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:y},{children:e.jsx(mO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n,enableSearch:s},v))}))},Textarea:IO,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,disabled:y.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(ED,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,disabled:y.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(OD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,a=X(t,["id","data-error-testid","children"]);return e.jsx(Kv,Object.assign({id:r,"data-error-testid":n},a,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(BD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(cO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Kv,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":a,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b},{children:e.jsx(fO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!n},y))}))}},zD=K.default.li`
    display: flex;
    flex-direction: column;
    padding: ${Xs["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    }
`,LD=K.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Xs["spacing-16"]};
    width: 100%;
`,ND=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,WD=K.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Xs["spacing-16"]};

    ${Qs.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,HD=K.default(exports.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Xs["spacing-16"]};

    ${Qs.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Xs["spacing-8"]};
    }
`,YD=K.default(exports.Typography.BodyMD)``,VD=K.default.div`
    display: flex;
    ${Qs.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return i.css`
                margin-left: calc(
                    96px + ${Xs["spacing-32"]}
                ); // thumbnail width + right margin

                ${Qs.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,UD=K.default(Ol.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Xs["spacing-16"]};
    }

    ${Qs.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Xs["spacing-16"]};
        }
    }
`,KD=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:n,onReplaceClick:i})=>e.jsxs(qD,Object.assign({"data-testid":r},{children:[e.jsx(XD,{"data-testid":r?`${r}-image`:void 0,src:t}),n&&e.jsx(GD,Object.assign({type:"button",onClick:()=>{i&&i()}},{children:"Replace"}))]})),qD=K.default.div`
    width: auto;
    margin-right: ${Xs["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,XD=K.default(Qg)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Gs.sm};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    object-fit: cover;

    ${Qs.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,GD=K.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Xs["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Us["body-md-semibold"]}
    color: ${Vs["text-primary"]};

    :hover {
        color: ${Vs["text-hover"]};
    }
`,ZD=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:a,onCancel:o,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:f}=r,[h,g]=t.useState(),[p,m]=t.useState(""),b=t.useRef(),y=t.useRef();t.useEffect((()=>{g(v(c))}),[i]),t.useEffect((()=>{m(r.description||"")}),[r]);const v=e=>{if(!u)return e;const t=y&&y.current?y.current.getBoundingClientRect().width:0;return Rc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(zD,Object.assign({"data-testid":`${l}-edit-display`},{children:[e.jsxs(LD,{children:[f&&e.jsx(KD,{thumbnailImageDataUrl:f}),e.jsxs(ND,{children:[e.jsxs(WD,Object.assign({ref:y},{children:[e.jsx(HD,Object.assign({weight:"semibold"},{children:h})),e.jsx(YD,{children:Zg.formatFileSizeDisplay(d)})]})),e.jsx(PD.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:p,maxLength:n,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(VD,Object.assign({$thumbnail:!!f},{children:[e.jsx(UD,Object.assign({"data-testid":`${l}-save-button`,type:"button",disabled:0===p.trim().length,onClick:()=>{a(b.current.value.trim())}},{children:"Save"})),e.jsx(UD,Object.assign({type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:o},{children:"Cancel"}))]}))]}))},QD=K.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Xs["spacing-16"]};
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
`,JD=K.default(M.DragHandleIcon)`
    margin-right: ${Xs["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Vs.icon};

    ${e=>e.$active?i.css`
                color: ${Vs["icon-primary"]};
            `:e.$disabled?i.css`
                color: ${Vs["icon-disabled"]};
            `:void 0};
`,eE=K.default.div`
    background: ${Vs["bg-primary-subtlest"]};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.sm};
    padding: ${Xs["spacing-16"]} ${Xs["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${Qs.MaxWidth.sm} {
        padding: ${Xs["spacing-16"]};
    }

    ${e=>e.$focused?i.css`
                border-color: ${Vs["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Vs["border-focus"]} r g b / 50%);
            `:e.$disabled?i.css`
                border-color: ${Vs["border-disabled"]};
            `:e.$error?i.css`
                background: ${Vs["bg-error"]};
                border-color: ${Vs["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return i.css`
                ${Qs.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,tE=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Qs.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${Qs.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,rE=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,nE=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Qs.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,iE=K.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${Xs["spacing-8"]};
    justify-content: flex-end;

    ${Qs.MaxWidth.sm} {
        ${e=>e.$hideInMobile?i.css`
                    display: none;
                    visibility: hidden;
                `:i.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Xs["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,aE=K.default(exports.Typography.BodyMD)``,oE=K.default(aE)`
    margin-top: ${Xs["spacing-4"]};
`,sE=K.default(exports.Typography.BodySM)`
    color: ${Vs["text-error"]};
`,lE=K.default(sE)`
    margin-top: ${Xs["spacing-4"]};
    ${Qs.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,cE=K.default(sE)`
    display: none;
    visibility: hidden;
    ${Qs.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Xs["spacing-8"]};
    }
`,dE=K.default.div`
    width: 6rem;
    margin-left: ${Xs["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${Qs.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${Xs["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${Xs["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,uE=K.default(ph)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Xs["spacing-16"]};
    }
`,fE=K.default(tl)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Vs.icon};
    }
`,hE=t.memo((({fileItem:r,editable:n,sortable:i,wrapperWidth:a,disabled:o,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:f,description:h,progress:g=1,errorMessage:p,thumbnailImageDataUrl:b,truncateText:y=!0}=r,[v,x]=t.useState(),{activeId:$}=t.useContext(mp),{attributes:w,listeners:j,setNodeRef:C,transform:S,transition:k}=yv({id:d}),O=t.useRef(),D={transform:pb.Translate.toString(S),transition:k},E=Object.assign(Object.assign({style:D},w),j),T=g<1,M=Zg.formatFileSizeDisplay(f),I=$?$===d?"self":"others":"none";t.useEffect((()=>{x(P(u))}),[a]);const A=()=>{l()},B=()=>{c&&c()},R=e=>{i&&e.stopPropagation()},P=e=>{if(!y)return e;const t=O&&O.current?O.current.getBoundingClientRect().width:0;return Rc.truncateOneLine(e,t,t/2,t/2/8,16)},z=()=>o||!!$,L=()=>i&&!s,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(aE,Object.assign({weight:h?"semibold":"regular"},{children:v})),h&&e.jsx(oE,{children:h})]});return e.jsxs(QD,Object.assign({id:d,ref:C,$sortable:L(),$disabled:z(),$focusType:I},L()?E:{},{children:[L()&&e.jsx(JD,{"data-testid":`${d}-drag-handle`,$disabled:z(),$active:"self"===I}),e.jsxs(eE,Object.assign({$focused:"self"===I,$error:!!p,$loading:T,$disabled:z(),$editable:n},{children:[(()=>{let t;return t=p?e.jsxs(e.Fragment,{children:[e.jsxs(rE,Object.assign({ref:O},{children:[N(),p&&e.jsx(lE,Object.assign({weight:"semibold"},{children:p}))]})),e.jsx(iE,{children:e.jsx(aE,{children:M})}),p&&e.jsx(cE,Object.assign({weight:"semibold"},{children:p}))]}):b?e.jsxs(e.Fragment,{children:[e.jsx(KD,{thumbnailImageDataUrl:b,"data-testid":`${d}-thumbnail`}),e.jsxs(nE,{children:[e.jsx(rE,Object.assign({ref:O},{children:N()})),e.jsx(iE,{children:e.jsx(aE,{children:M})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(rE,Object.assign({ref:O},{children:N()})),e.jsx(iE,Object.assign({$hideInMobile:T},{children:e.jsx(aE,{children:M})}))]}),e.jsx(tE,Object.assign({$hasThumbnail:!!b},{children:t}))})(),!s&&(()=>{let t;return t=p?e.jsx(fE,Object.assign({onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})):T?e.jsx(eg,{progress:g,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[n&&e.jsx(uE,Object.assign({"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:z(),onClick:B,onKeyDown:R},{children:e.jsx(_.PencilIcon,{"aria-hidden":!0})}),"edit"),e.jsx(uE,Object.assign({"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:z(),onClick:A,onKeyDown:R},{children:e.jsx(F.BinIcon,{"aria-hidden":!0})}),"delete")]}),e.jsx(dE,Object.assign({$editable:n,$error:!!p,$loading:T},{children:t}))})()]}))]}))})),gE=K.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Xs["spacing-32"]};
`,pE=K.default.li`
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};

    :not(:last-child) {
        margin-bottom: ${Xs["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Xs["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,mE=({fileItems:r,editableFileItems:n,fileDescriptionMaxLength:i,sortable:a,disabled:o,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(mp),{width:g,ref:p}=qe(),m=t.useRef({}),b=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>[...r].filter((e=>null!=e))),[...r])}(Ob(jv,{activationConstraint:{distance:8}}),Ob(xy,{activationConstraint:{delay:150,tolerance:5}}),Ob(dy,{coordinateGetter:$v})),y=e=>{delete m.current[e]};t.useEffect((()=>{f(D(r))}),[r]);const v=e=>t=>{E(e.id,"display"),y(e.id);const r=Object.assign(Object.assign({},e),{description:t});l(r)},x=e=>t=>{m.current[e.id]=t},$=e=>()=>{e.description&&0!==e.description.length?E(e.id,"display"):c(e),y(e.id)},w=e=>()=>{E(e.id,"edit")},j=e=>()=>{c(e)},C=e=>{if(d){const{active:t,over:n}=e;if(n&&t.id!==n.id){const e=r.findIndex((e=>e.id===t.id)),i=r.findIndex((e=>e.id===n.id)),a=nv(r,e,i);d(a)}}h(void 0)},S=e=>{const{active:t}=e;h(t.id)},k=e=>n&&Zg.isSupportedImageType(e.type),O=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&k(e)&&!e.description,D=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":u[r.id]?t[r.id]=u[r.id]:t[r.id]=O(r)?"edit":"display";return t},E=(e,t)=>{f((r=>Object.assign(Object.assign({},r),{[e]:t})))},T=()=>r&&r.length>1&&a&&Object.values(u).every((e=>"display"===e)),F=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(r,u);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==m.current[t.id]&&(r.description=m.current[t.id]),e.jsx(ZD,{fileItem:r,wrapperWidth:g,fileDescriptionMaxLength:i,onSave:v(t),onCancel:$(t),onBlur:x(t)},t.id)}));return e.jsx(pE,{children:e.jsx("ul",{children:n})},`editable-${r}`)})(t,r):e.jsx(hE,{fileItem:t,editable:k(t),wrapperWidth:g,sortable:T(),disabled:o,readOnly:s,onDelete:j(t),onEditClick:w(t)},t.id)))};return r&&0!==r.length?o||s||!T()?e.jsx(gE,Object.assign({$readOnly:s,ref:p},{children:F()})):e.jsx(Gy,Object.assign({sensors:b,onDragEnd:C,onDragStart:S},{children:e.jsx(uv,Object.assign({items:r,strategy:lv},{children:e.jsx(gE,Object.assign({$readOnly:s,ref:p},{children:F()}))}))})):null},bE=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Xs["spacing-32"]};
    gap: ${Xs["spacing-8"]};
`,yE=K.default(exports.Typography.BodyBL)``,vE=K.default.div`
    color: ${Vs.text};
    ${Ml({textSize:"body-baseline"})}
`,xE=K.default(exports.Typography.BodyMD)`
    color: ${Vs["text-subtler"]};
`,$E=K.default.div`
    color: ${Vs.text};
    ${Ml({textSize:"body-md"})}
`,wE=K.default(Nl)`
    margin-bottom: ${Xs["spacing-32"]};
`,jE=K.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${Qs.MaxWidth.sm} {
        align-items: flex-start;
    }
`,CE=K.default(Ol.Small)`
    width: 10rem;

    ${Qs.MaxWidth.sm} {
        width: 100%;
    }
`,SE=K.default.label`
    ${Us["body-md-semibold"]}
    color: ${Vs["text-subtler"]};
    margin-top: ${Xs["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${Qs.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,kE=K.default(Nl)`
    margin-bottom: ${Xs["spacing-32"]};
`,OE=V.default.createContext({mode:"default",rootNode:null});var DE=Ti((function(e){return null==e}));const EE=K.default.div`
    background-color: ${e=>e.$collapsible?Vs["bg-strong"]:Vs.bg};
    ${Qs.MaxWidth.lg} {
        background-color: ${Vs["bg-strong"]};
    }
`,TE=K.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Vs.border};

    ${Qs.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Xs["spacing-16"]};
    }
`,FE=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${Vs.bg};

    ${Qs.MaxWidth.lg} {
        background-color: transparent;
    }
`,_E=K.default(tl)`
    margin: 0 0 0 auto;

    color: ${Vs.icon};
    &:hover {
        color: ${Vs["icon-hover"]};
    }
`,ME=K.default(f.ChevronDownIcon)`
    height: ${Us.Spec["body-size-baseline"]};
    width: ${Us.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ks["duration-350"]} ${Ks["ease-standard"]};
`,IE=K.default.p`
    ${Us["header-xs-semibold"]}
    color: ${Vs.text};

    margin: ${Xs["spacing-24"]} 0 ${Xs["spacing-24"]}
        ${Xs["spacing-20"]};

    ${Qs.MaxWidth.lg} {
        ${Us["body-md-semibold"]}
        color: ${Vs["text-subtle"]};

        margin: ${Xs["spacing-24"]} ${Xs["spacing-20"]} 0
            ${Xs["spacing-20"]};
    }
`,AE=K.default(Di.div)`
    overflow: hidden;
`,BE=K.default.div`
    padding: ${Xs["spacing-24"]} ${Xs["spacing-20"]};
`,RE=K.default(Di.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,PE=K.default(Ol.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Xs["spacing-16"]} 0 0 0;
`,zE=r=>{var{collapsible:n=!0,initialExpanded:i=!1,expanded:a,onExpandChange:o,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:d=!0,title:u,addon:f,children:h}=r,g=X(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:p,rootNode:m}=t.useContext(OE),b="mobile"===p,[y,v]=t.useState(O()),[x,$]=t.useState(s),w=!b&&n,j=qe(),C=qe(),S=di({height:y?j.height:0}),k=x?null!=l?l:Math.min(.5*C.height,216):C.height;t.useEffect((()=>{v(O())}),[n,a]);function O(){return!!b||(DE(a)?!n||i:a)}return e.jsxs(EE,Object.assign({$collapsible:w},{children:[e.jsx(TE,{$showDivider:c,$showMobileDivider:d}),(u||w)&&e.jsxs(FE,{children:[u&&e.jsxs(IE,{children:[u," ",f&&("popover"===f.type?e.jsx(Rv,{addon:f,rootNode:b?m:void 0}):null)]}),w&&e.jsx(_E,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!y;DE(a)&&v(e),o&&o(e)},"aria-label":y?"Collapse":"Expand"},{children:e.jsx(ME,{$expanded:y})}))]}),e.jsx(AE,Object.assign({"data-testid":"expandable-container","data-expanded":y,style:S},{children:e.jsx("div",Object.assign({ref:j.ref},{children:e.jsxs(BE,Object.assign({},g,{children:[e.jsx(RE,Object.assign({"data-testid":"minimisable-container",$height:k,$minimisable:s},{children:e.jsx("div",Object.assign({ref:C.ref},{children:e.jsx("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof h?h(p,{minimised:x}):h}))}))})),s&&e.jsxs(PE,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!x)}},{children:["View ",x?"more":"less"]}))]}))}))}))]}))};zE.displayName="Filter.Item";const LE=K.default(zE)`
    padding: 0 0 ${Xs["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Xs["spacing-8"]} ${Xs["spacing-8"]} 0;

        ${Qs.MaxWidth.lg} {
            padding: ${Xs["spacing-16"]} ${Xs["spacing-20"]}
                ${Xs["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Xs["spacing-8"]} ${Xs["spacing-20"]} 0;
    }
`,NE=K.default.div`
    display: flex;
    flex-direction: column;

    ${Qs.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Xs["spacing-16"]};
    }
`,WE=K.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Xs["spacing-8"]} ${Xs["spacing-12"]};

    cursor: pointer;
    ${Us["body-md-regular"]}
    color: ${Vs.text};
    ${e=>e.$selected&&i.css`
            color: ${Vs["text-selected"]};
        `}

    ${Qs.MaxWidth.lg} {
        padding: ${Xs["spacing-8"]};
    }
`,HE=K.default(lu)`
    flex-shrink: 0;
    margin-right: ${Xs["spacing-8"]};
`,YE=K.default(oD)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,VE=K.default(Ol.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Xs["spacing-16"]} 0 ${Xs["spacing-8"]}
        ${Xs["spacing-12"]};

    ${Qs.MaxWidth.lg} {
        margin: 0 0 ${Xs["spacing-16"]} 0;
    }
`,UE=r=>{var{selectedOptions:n,options:i,onSelect:a,labelExtractor:o,valueExtractor:s,useToggleContentWidth:l}=r,c=X(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(OE),[u,f]=t.useState(n||[]),[h,g]=t.useState(),[p,m]=t.useState(i.length),b=t.useRef(),y=t.useRef(),v=e=>()=>{const t=[...u],r=u.findIndex((t=>w(t)===w(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==a||a(t)},x=()=>{const e=u.length?[]:i;f(e),null==a||a(e)},$=e=>{var t;return o?o(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},w=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=t.useCallback((()=>{if(!b.current)return void g(void 0);const e=Array.from(b.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const a=e[i].offsetTop;if(a>n&&(r++,n=a,r>2))break;t=i}m(t),g(r>2?n-8:void 0)}),[]);t.useEffect((()=>{n!==u&&f(n||[])}),[n]),t.useEffect((()=>{"default"===d?(()=>{const e=y.current?y.current.offsetTop+y.current.clientHeight:void 0;g(e)})():j()}),[i]),qe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:j});return e.jsx(LE,Object.assign({minimisable:i.length>5,minimisedHeight:h},c,{children:(t,{minimised:r})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(VE,Object.assign({styleType:"link",type:"button",onClick:x},{children:u.length?"Clear all":"Select all"})),e.jsx(NE,Object.assign({role:"group","aria-label":c.title,ref:b},{children:i.map(((n,i)=>"default"===t?((t,r,n)=>{const i=$(t),a=w(t),o=!!u.find((e=>w(e)===a));return e.jsxs(WE,Object.assign({$visible:!n||r<5,$selected:o,ref:4===r?y:void 0},{children:[e.jsx(HE,{displaySize:"small",checked:o,onChange:v(t)}),i]}),a)})(n,i,r):((t,r,n)=>{const i=$(t),a=w(t),o=!!u.find((e=>w(e)===a));return e.jsx(YE,Object.assign({type:"checkbox",checked:o,$visible:!n||h&&r<=p,onChange:v(t),useContentWidth:l},{children:i}),a)})(n,i,r)))}))]})}))};UE.displayName="Filter.Checkbox";const KE=K.default.div`
    background-color: ${Vs.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,qE=K.default.div`
    background-color: ${Vs.bg};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-radius: ${Gs.md};
    overflow: hidden;
    width: 100%;
`,XE=K.default.div`
    background-color: ${Vs["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,GE=K.default.div`
    background-color: ${Vs.bg};
    height: 100%;
    width: 100%;
`,ZE=K.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,QE=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${Vs.bg};

    ${Qs.MaxWidth.lg} {
        border-bottom: ${qs["width-010"]} ${qs.solid}
            ${Vs.border};
    }
`,JE=K.default(exports.Typography.HeaderXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Xs["spacing-24"]} 0 ${Xs["spacing-24"]}
        ${Xs["spacing-20"]};

    ${Qs.MaxWidth.lg} {
        text-align: center;
        margin: ${Xs["spacing-24"]} 0;
    }
`,eT=K.default(tl)`
    padding: ${Xs["spacing-24"]} ${Xs["spacing-20"]};
    margin-right: auto;
    color: ${Vs.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Vs["icon-hover"]};
    }
`,tT=K.default(Ol.Small)`
    background-color: transparent;
    padding-right: ${Xs["spacing-20"]};
    padding-left: ${Xs["spacing-20"]};
    height: 100%;

    ${Qs.MaxWidth.lg} {
        padding: ${Xs["spacing-24"]} ${Xs["spacing-20"]};
    }
`,rT=K.default(td.Default)`
    width: 100%;
`,nT=K.default.div`
    padding: ${Xs["spacing-24"]} ${Xs["spacing-20"]};
    background-color: ${Vs.bg};
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};
`,iT=K.default(Ol.Default)`
    width: 100%;
`,aT=({onDismiss:t,onDone:r,children:n})=>e.jsxs(KE,{children:[e.jsx(eT,Object.assign({onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(g.ChevronLeftIcon,{})})),e.jsx(ZE,{children:n}),e.jsx(nT,{children:e.jsx(iT,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]});aT.displayName="Filter.Page";const oT=r=>{var{toggleFilterButtonLabel:n="Filters",toggleFilterButtonStyle:a="light",headerTitle:o="Filters",clearButtonDisabled:s=!1,onClear:l,onDismiss:c,onDone:d,children:f}=r,h=X(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[g,p]=t.useState(!1),m=t.useRef(null),b=t.useRef(null),y=i.useTheme(),v=Zs["lg-max"]({theme:y}),x=tc.useMediaQuery({maxWidth:v});t.useEffect((()=>{x||w()}),[x]);const $=()=>{p(!0)},w=()=>{p(!1),c&&c()},j=()=>{p(!1),d&&d()},C=()=>{l&&l()},S=e=>"function"==typeof f?f(e):f,k=t=>e.jsxs(QE,{children:["mobile"===t&&e.jsx(eT,Object.assign({onClick:w,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(u.CrossIcon,{})})),e.jsx(JE,Object.assign({weight:"semibold"},{children:o})),e.jsx(tT,Object.assign({styleType:"link",type:"button",onClick:C,disabled:s},{children:"Clear"}))]});return e.jsx("div",Object.assign({},h,{children:x?e.jsx(OE.Provider,Object.assign({value:{mode:"mobile",rootNode:m}},{children:e.jsxs(e.Fragment,{children:[e.jsx(rT,Object.assign({"data-testid":"filter-show-button",styleType:a,onClick:$,type:"button",icon:e.jsx(u.FilterIcon,{})},{children:n})),e.jsx(Uh,Object.assign({show:g,disableTransition:!0},{children:e.jsx(GE,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e.jsxs(XE,Object.assign({ref:m},{children:[k("mobile"),e.jsx(ZE,{children:S("mobile")}),e.jsx(nT,{children:e.jsx(iT,Object.assign({onClick:j,type:"button"},{children:"Done"}))})]}))}))}))]})})):e.jsx(OE.Provider,Object.assign({value:{mode:"default",rootNode:b}},{children:e.jsxs(qE,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b},{children:[k("default"),S("default")]}))}))}))};oT.displayName="Filter";const sT=Object.assign(oT,{Item:zE,Page:aT,Checkbox:UE}),lT=K.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Qs.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,cT=K.default(exports.Typography.BodyMD)`
    margin-bottom: ${Xs["spacing-16"]};
`,dT=K.default.div`
    display: flex;
    align-items: flex-start;
`,uT=K.default.a`
    &:not(:last-child) {
        margin-right: ${Xs["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Qs.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${Xs["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,fT=()=>e.jsxs(lT,Object.assign({"data-testid":"download-app-section"},{children:[e.jsx(cT,Object.assign({weight:"semibold"},{children:"Download the app"})),e.jsxs(dT,{children:[e.jsx(uT,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(uT,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),hT={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},gT={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},pT={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var mT;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${mc(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return gT;case"mylegacy":return pT;default:return hT}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(mT||(mT={}));const bT=K.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i.css`
                padding: 0 ${Zs["xxl-margin"]}px;
            `:i.css`
                padding: 0 ${Zs["xxl-margin"]}px;
                max-width: 1440px;

                ${Qs.MaxWidth.xl} {
                    padding: 0 ${Zs["xl-margin"]}px;
                }

                ${Qs.MaxWidth.lg} {
                    padding: 0 ${Zs["lg-margin"]}px;
                }

                ${Qs.MaxWidth.md} {
                    padding: 0 ${Zs["md-margin"]}px;
                }

                ${Qs.MaxWidth.sm} {
                    padding: 0 ${Zs["sm-margin"]}px;
                }

                ${Qs.MaxWidth.xs} {
                    padding: 0 ${Zs["xs-margin"]}px;
                }

                ${Qs.MaxWidth.xxs} {
                    padding: 0 ${Zs["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: ${Zs["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Zs["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Qs.MaxWidth.xl} {
                        column-gap: ${Zs["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Zs["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Qs.MaxWidth.lg} {
                        column-gap: ${Zs["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Zs["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Qs.MaxWidth.md} {
                        column-gap: ${Zs["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Zs["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Qs.MaxWidth.sm} {
                        column-gap: ${Zs["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Zs["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Qs.MaxWidth.xs} {
                        column-gap: ${Zs["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Zs["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Qs.MaxWidth.xxs} {
                        column-gap: ${Zs["xss-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Zs["xss-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,yT=V.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(bT,Object.assign({ref:r,"data-testid":i,$type:a,$stretch:o},s,{children:n}))})),vT=V.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:a=!1}=t,o=X(t,["children","data-testid","stretch"]);return e.jsx(xT,Object.assign({ref:r,"data-testid":i,$stretch:a},o,{children:n}))})),xT=K.default.section`
    display: block;
    position: relative;
`,$T=V.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(vT,Object.assign({ref:r,"data-testid":i,className:a,stretch:s},l,{children:e.jsx(yT,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),wT={Section:vT,Container:yT,Content:$T,ColDiv:_h},jT=K.default.footer`
    background: ${Vs["bg-strong"]};
`,CT=K.default(exports.Typography.LinkSM)`
    color: ${Vs.text};
`,ST=K.default(Wh)`
    width: 100%;
`,kT=K.default(wT.Content)`
    padding: ${Xs["spacing-64"]} 0;

    ${Qs.MaxWidth.lg} {
        padding: ${Xs["spacing-32"]} 0;
    }
`,OT=K.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${Qs.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${Xs["spacing-32"]};
    }

    ${Qs.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${Xs["spacing-32"]};
    }
`,DT=K.default.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${Xs["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${Qs.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${Qs.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,ET=K.default.div`
    grid-column: 13 / span 6;

    ${Qs.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Xs["spacing-32"]};
    }

    ${Qs.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,TT=K.default(wT.Content)`
    padding: ${Xs["spacing-20"]} 0;

    ${Qs.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Xs["spacing-16"]} 0;
    }
`,FT=K.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${Xs["spacing-16"]};
    }

    ${Qs.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Qs.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,_T=K.default(FT)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Qs.MaxWidth.lg} {
        margin-top: ${Xs["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${Qs.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,MT=K.default(exports.Typography.LinkXS)`
    color: ${Vs.text};
    &:not(:last-child) {
        margin-right: ${Xs["spacing-16"]};
    }

    svg {
        color: ${Vs.icon};
    }

    &:hover {
        color: ${Vs["text-subtler"]};
        svg {
            color: ${Vs["icon-subtle"]};
        }
    }

    ${Qs.MaxWidth.lg} {
        margin-bottom: ${Xs["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Qs.MaxWidth.lg} {
        margin-bottom: ${Xs["spacing-8"]};
    }
`;var IT=function(e,t){return Number(e.toFixed(t))},AT=function(e,t,r){r&&"function"==typeof r&&r(e,t)},BT={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},RT=function(e){"number"==typeof e&&cancelAnimationFrame(e)},PT=function(e){e.mounted&&(RT(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function zT(e,t,r,n){if(e.mounted){var i=(new Date).getTime();PT(e),e.animation=function(){if(!e.mounted)return RT(e.animation);var a=(new Date).getTime()-i,o=a/r,s=(0,BT[t])(o);a>=r?(n(1),e.animation=null):e.animation&&(n(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function LT(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var a=e.setTransformState,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=t.scale-s,u=t.positionX-l,f=t.positionY-c;0===r?a(t.scale,t.positionX,t.positionY):zT(e,n,r,(function(e){a(s+d*e,l+u*e,c+f*e)}))}}var NT=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var a=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,a=t.offsetWidth*r,o=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:a,newDiffWidth:n-a,newContentHeight:o,newDiffHeight:i-o}}(r,n,t),o=a.wrapperWidth,s=a.wrapperHeight,l=function(e,t,r,n,i,a,o){var s=e>t?r*(o?1:.5):0,l=n>i?a*(o?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(o,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return l},WT=function(e,t,r,n){return IT(n?e<t?t:e>r?r:e:e,2)},HT=function(e,t){var r=NT(e,t);return e.bounds=r,r};function YT(e,t,r,n,i,a,o){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,f=0;return o&&(u=i,f=a),{x:WT(e,s-u,c+u,n),y:WT(t,l-f,d+f,n)}}function VT(e,t,r,n,i,a){var o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):YT(l-t*d,c-r*d,i,a,0,0,null)}function UT(e,t,r,n,i){var a=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=a?a:e}var KT=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,a=t.target,o="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(a);return!!(n&&a&&o)&&!OF(a,r)},qT=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function XT(e,t,r,n,i){var a=e.setup.limitToBounds,o=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==o&&null!==s&&(t!==d||r!==u)){var f=YT(t,r,s,a,n,i,o),h=f.x,g=f.y;e.setTransformState(c,h,g)}}var GT=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,a=r.disablePadding;return t>0&&n>=i&&!a?t:0},ZT=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,a=e.transformState.scale;return!(i.disabled&&!(a>1)&&n&&!t)},QT=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,a=i.disabled,o=i.velocityAnimation,s=e.transformState.scale;return!(o.disabled&&!(s>1)&&a&&!t)&&!(!r||!n)};function JT(e,t,r,n,i,a,o,s,l,c){if(i){var d;if(t>o&&r>o)return(d=o+(e-o)*c)>l?l:d<o?o:d;if(t<a&&r<a)return(d=a+(e-a)*c)<s?s:d>a?a:d}return n?t:WT(e,a,o,i)}function eF(e,t){if(ZT(e)){var r=e.lastMousePosition,n=e.velocityTime,i=e.setup,a=e.wrapperComponent,o=i.velocityAnimation.equalToMove,s=Date.now();if(r&&n&&a){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,o),c=t.x-r.x,d=t.y-r.y,u=c/l,f=d/l,h=s-n,g=c*c+d*d,p=Math.sqrt(g)/h;e.velocity={velocityX:u,velocityY:f,total:p}}e.lastMousePosition=t,e.velocityTime=s}}function tF(e,t){var r=e.transformState.scale;PT(e),HT(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,a=n.positionY;if(e.isPanning=!0,1===r.length){var o=r[0].clientX,s=r[0].clientY;e.startCoords={x:o-i,y:s-a}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var a=t.clientX,o=t.clientY;e.startCoords={x:a-n,y:o-i}}(e,t)}function rF(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,a=i.disabled,o=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(a||t<n||!o&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,a=e.setup,o=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,c=e.wrapperComponent;if(!o&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,f=d.minPositionX,h=d.maxPositionY,g=d.minPositionY,p=r>u||r<f,m=n>h||n<g,b=VT(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),y=b.x,v=b.y;return{scale:i,positionX:p?y:r,positionY:m?v:n}}}(e);d&&LT(e,d,l,c)}}function nF(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,a=i.sizeX,o=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,a=e.setup.panning,o=a.lockAxisX,s=a.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:o?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=GT(e,a),u=GT(e,o);eF(e,{x:l,y:c}),XT(e,l,c,d,u)}}function iF(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var a=null==n?void 0:n.getBoundingClientRect(),o=null==i?void 0:i.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,l=(null==a?void 0:a.height)||0,c=(null==o?void 0:o.width)||0,d=(null==o?void 0:o.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent;if(QT(e)&&t&&r&&i){var a=t.velocityX,o=t.velocityY,s=t.total,l=r.maxPositionX,c=r.minPositionX,d=r.maxPositionY,u=r.minPositionY,f=n.limitToBounds,h=n.alignmentAnimation,g=n.zoomAnimation,p=n.panning,m=p.lockAxisY,b=p.lockAxisX,y=g.animationType,v=h.sizeX,x=h.sizeY,$=h.velocityAlignmentTime,w=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,a=r.sensitivity;return n?i*t*a:i}(e,s),j=Math.max(w,$),C=GT(e,v),S=GT(e,x),k=C*i.offsetWidth/100,O=S*i.offsetHeight/100,D=l+k,E=c-k,T=d+O,F=u-O,_=e.transformState,M=(new Date).getTime();zT(e,y,j,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,s=r.positionY,g=((new Date).getTime()-M)/$,p=1-(0,BT[h.animationType])(Math.min(1,g)),y=1-t,v=i+a*y,x=s+o*y,w=JT(v,_.positionX,i,b,f,c,l,E,D,p),j=JT(x,_.positionY,s,m,f,u,d,F,T,p);i===v&&s===x||e.setTransformState(n,w,j)}))}}(e):rF(e)}}function aF(e,t,r,n){var i=e.setup,a=i.minScale,o=i.maxScale,s=i.limitToBounds,l=UT(IT(t,2),a,o,0,!1),c=VT(e,r,n,l,HT(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function oF(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,f=c||n>=o;if((n>=1||s)&&rF(e),!f&&i&&e.mounted){var h=aF(e,o,t||i.offsetWidth/2,r||i.offsetHeight/2);h&&LT(e,h,d,u)}}var sF=function(){return sF=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},sF.apply(this,arguments)};function lF(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var cF=1,dF=0,uF=0,fF={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},hF=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:cF,scale:null!==(r=e.initialScale)&&void 0!==r?r:cF,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:dF,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:uF}},gF=function(e){var t=sF({},fF);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==fF[r]&&n){var i=Object.prototype.toString.call(fF[r]),a="[object Object]"===i,o="[object Array]"===i;t[r]=a?sF(sF({},fF[r]),e[r]):o?lF(lF([],fF[r],!0),e[r],!0):e[r]}})),t},pF=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.maxScale,s=a.minScale,l=a.zoomAnimation,c=a.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return UT(IT(u,3),s,o,d,!1)};function mF(e,t,r,n,i){var a=e.wrapperComponent,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY;if(!a)return console.error("No WrapperComponent found");var d=(a.offsetWidth/2-l)/s,u=(a.offsetHeight/2-c)/s,f=aF(e,pF(e,t,r),d,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");LT(e,f,n,i)}function bF(e,t,r,n){var i=e.setup,a=e.wrapperComponent,o=i.limitToBounds,s=hF(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(a){var f=NT(e,s.scale),h=YT(s.positionX,s.positionY,f,o,0,0,a),g={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),LT(e,g,t,r))}}var yF=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),mF(e,1,t,r,n)}},vF=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),mF(e,-1,t,r,n)}},xF=function(e){return function(t,r,n,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var o=e.transformState,s=o.positionX,l=o.positionY,c=o.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};LT(e,f,i,a)}}},$F=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),bF(e,t,r)}},wF=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,a=e.wrapperComponent,o=e.contentComponent;if(a&&o){var s=EF(t||i.scale,a,o);LT(e,s,r,n)}}},jF=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),PT(e);var a=e.wrapperComponent,o="string"==typeof t?document.getElementById(t):t;if(a&&o&&a.contains(o)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,a=e.transformState,o=e.setup,s=o.limitToBounds,l=o.minScale,c=o.maxScale;if(!n||!i)return a;var d,u,f,h,g,p,m,b,y=n.getBoundingClientRect(),v=t.getBoundingClientRect(),x=(d=n,u=i,f=a,h=t.getBoundingClientRect(),g=d.getBoundingClientRect(),p=u.getBoundingClientRect(),m=g.x*f.scale,b=g.y*f.scale,{x:(h.x-p.x+m)/f.scale,y:(h.y-p.y+b)/f.scale}),$=x.x,w=x.y,j=v.width/a.scale,C=v.height/a.scale,S=n.offsetWidth/j,k=n.offsetHeight/C,O=UT(r||Math.min(S,k),l,c,0,!1),D=(y.width-j*O)/2,E=(y.height-C*O)/2,T=YT((y.left-$)*O+D,(y.top-w)*O+E,NT(e,O),s,0,0,n);return{positionX:T.x,positionY:T.y,scale:O}}(e,o,r);LT(e,s,n,i)}}},CF=function(e){return{instance:e,zoomIn:yF(e),zoomOut:vF(e),setTransform:xF(e),resetTransform:$F(e),centerView:wF(e),zoomToElement:jF(e)}},SF=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,CF(e)),t};function kF(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var OF=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},DF=function(e){e&&clearTimeout(e)},EF=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function TF(e,t,r){var n=t.getBoundingClientRect(),i=0,a=0;if("clientX"in e)i=(e.clientX-n.left)/r,a=(e.clientY-n.top)/r;else{var o=e.touches[0];i=(o.clientX-n.left)/r,a=(o.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var FF=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},_F=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,a=e.contentComponent,o=e.setup,s=e.transformState.scale,l=o.limitToBounds,c=o.centerZoomedOut,d=o.zoomAnimation,u=o.wheel,f=o.disablePadding,h=o.smooth,g=d.size,p=d.disabled,m=u.step,b=u.smoothStep;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var y=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),v=function(e,t,r,n,i){var a=e.transformState.scale,o=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,f=d.size,h=d.disabled;if(!o)throw new Error("Wrapper is not mounted");var g=a+t*r;if(i)return g;var p=!n&&!h;return UT(IT(g,3),c,l,f,p&&!u)}(e,y,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==v){var x=HT(e,v),$=TF(t,a,s),w=l&&(p||0===g||c||f),j=VT(e,$.x,$.y,v,x,w),C=j.x,S=j.y;e.previousWheelEvent=t,e.setTransformState(v,C,S),AT(SF(e),t,n),AT(SF(e),t,i)}},MF=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;DF(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(oF(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var a=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,a=i.maxScale,o=i.minScale;return!!r&&(n<a||n>o||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);a&&(DF(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,AT(SF(e),t,n),AT(SF(e),t,i))}),160))},IF=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,a=e.setup,o=a.limitToBounds,s=a.centerZoomedOut,l=a.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,a=IT(i[0].clientX-n.left,5),o=IT(i[0].clientY-n.top,5);return{x:(a+IT(i[1].clientX-n.left,5))/2/t,y:(o+IT(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=FF(t),h=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,a=i.maxScale,o=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:UT(IT(t/n*r,2),o,a,c,!d&&!l)}(e,f);if(h!==i){var g=HT(e,h),p=o&&(c||0===d||s),m=VT(e,u.x,u.y,h,g,p),b=m.x,y=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,y)}}}},AF=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;DF(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,AT(SF(e),t,r)}),n)};function BF(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,a=e.contentComponent,o=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,f=d.mode,h=d.step,g=d.animationTime,p=d.animationType;if(!u&&!n){if("reset"===f)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,a=e.setup.doubleClick,o=a.animationTime,s=a.animationType;AT(SF(e),t,n),bF(e,o,s,(function(){return AT(SF(e),t,i)})),AF(e,t)}(e,t);if(!a)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=pF(e,m,h);if(o!==b){AT(SF(e),t,l);var y=TF(t,a,o),v=aF(e,b,y.x,y.y);if(!v)return console.error("Error during zoom event. New transformation state was not calculated.");AT(SF(e),t,c),LT(e,v,g,p),AF(e,t)}}}var RF=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,HT(t,t.transformState.scale),t.setup=gF(e)},this.initializeWindowEvents=function(){var e,r,n=kF(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==a||a.addEventListener("mousedown",t.onPanningStart,n),null==a||a.addEventListener("mousemove",t.onPanning,n),null==a||a.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==a||a.addEventListener("keyup",t.setKeyUnPressed,n),null==a||a.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=kF(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,n),null==a||a.removeEventListener("mousemove",t.onPanning,n),null==a||a.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,n),null==a||a.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),PT(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=kF();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(SF(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(SF(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,a=r.touchPadDisabled,o=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||a&&t.ctrlKey||OF(c,o))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(PT(e),AT(SF(e),t,n),AT(SF(e),t,i))}(t,e),_F(t,e),MF(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,a=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!a.disabled&&a.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var o=t.transformState,s=o.positionX,l=o.positionY,c=s-e.deltaX,d=l-e.deltaY,u=a.lockAxisX?s:c,f=a.lockAxisY?l:d,h=t.setup.alignmentAnimation,g=h.sizeX,p=h.sizeY,m=GT(t,g),b=GT(t,p);u===s&&f===l||XT(t,u,f,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||KT(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),PT(t),tF(t,e),AT(SF(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||qT(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),nF(t,e.clientX,e.clientY),AT(SF(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(iF(t),AT(SF(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,a=n.onZoomStart;if(!r){var o=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,a=e.isInitialized,o=t.target;return!(!a||n||!o||OF(o,i))}(t,e);o&&(function(e,t){var r=FF(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,PT(e)}(t,e),PT(t),AT(SF(t),e,i),AT(SF(t),e,a))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,a=n.onZoom;if(!r){var o=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);o&&(e.preventDefault(),e.stopPropagation(),IF(t,e),AT(SF(t),e,i),AT(SF(t),e,a))}},this.onPinchStop=function(e){var r,n,i=t.props,a=i.onPinchingStop,o=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,oF(r,null==n?void 0:n.x,null==n?void 0:n.y),AT(SF(t),e,a),AT(SF(t),e,o))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&KT(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,PT(t);var i=e.touches,a=1===i.length,o=2===i.length;a&&(PT(t),tF(t,e),AT(SF(t),e,n)),o&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!qT(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];nF(t,i.clientX,i.clientY),AT(SF(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,a=n.doubleClick,o=a.disabled,s=a.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||o||OF(l,s))}(t,e);r&&BF(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var a=SF(t);t.onChangeCallbacks.forEach((function(e){return e(a)})),AT(a,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=EF(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,a=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=a}},this.getContext=function(){return SF(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,HT(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=SF(t);AT(n,void 0,t.props.onInit)},this.props=e,this.setup=gF(this.props),this.transformState=hF(this.props)},PF=V.default.createContext(null),zF=V.default.forwardRef((function(e,r){var n=t.useRef(new RF(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,CF(n));return t.useImperativeHandle(r,(function(){return CF(n)}),[n]),t.useEffect((function(){n.update(e)}),[n,e]),V.default.createElement(PF.Provider,{value:n},i)}));V.default.forwardRef((function(e,r){var n,i=t.useRef(null),a=t.useContext(PF);return t.useEffect((function(){return a.onChange((function(e){if(i.current){i.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),V.default.createElement("div",sF({},e,{ref:(n=[i,r],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var LF="transform-component-module_wrapper__SPB86",NF="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var WF=function(e){var r=e.children,n=e.wrapperClass,i=void 0===n?"":n,a=e.contentClass,o=void 0===a?"":a,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(PF),g=h.init,p=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&g&&(null==g||g(e,t)),function(){null==p||p()}}),[]),V.default.createElement("div",sF({},d,{ref:m,className:"react-transform-wrapper ".concat(LF," ").concat(i),style:s}),V.default.createElement("div",sF({},f,{ref:b,className:"react-transform-component ".concat(NF," ").concat(o),style:l}),r))};const HF=K.default.div`
    background-color: ${Vs["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${Vs["icon-subtle"]};
    }
`,YF=t=>e.jsx(HF,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),VF=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,UF=K.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,KF=K.default(YF)`
    width: 100%;
    height: 100%;
`,qF=({src:r,className:n,alt:i,fit:a,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{d(!0),f(void 0);const e=new Image;e.src=r,e.onload=()=>{s&&l({src:r,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[r]);return e.jsx(VF,Object.assign({className:n},{children:u?null!=o?o:e.jsx(KF,{}):c?e.jsx(Ul,{}):e.jsx(UF,{src:r,alt:i,$fit:a})}))},XF=K.default(tl)`
    padding: 0;
    border-radius: 100%;
    background: ${Vs.bg};
    color: ${Vs["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,GF=K.default(XF)`
    position: absolute;
    top: ${Xs["spacing-48"]};
    right: ${Xs["spacing-48"]};
    z-index: 5;

    ${Qs.MaxWidth.sm} {
        top: ${Xs["spacing-20"]};
        right: ${Xs["spacing-20"]};
    }
`,ZF=K.default(XF)`
    position: absolute;
    top: ${Xs["spacing-48"]};
    right: calc(
        2.5rem + ${Xs["spacing-48"]} + ${Xs["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${Qs.MaxWidth.sm} {
        top: ${Xs["spacing-20"]};
        right: calc(
            2.5rem + ${Xs["spacing-20"]} + ${Xs["spacing-16"]}
        );
    }
`,QF=K.default(XF)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&i.css`
            left: ${Xs["spacing-48"]};
            ${Qs.MaxWidth.sm} {
                left: ${Xs["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&i.css`
            right: ${Xs["spacing-48"]};
            ${Qs.MaxWidth.sm} {
                right: ${Xs["spacing-20"]};
            }
        `}
`,JF=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,e_=K.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,t_=K.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,r_=K.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,n_=K.default.div`
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
`,i_=K.default(qF)`
    height: 100%;
    width: 100%;
`,a_=K.default(YF)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,o_=K.default.div`
    display: flex;
    justify-content: center;
    padding: ${Xs["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,s_=K.default(exports.Typography.BodyXS)`
    display: inline-flex;
    padding: ${Xs["spacing-4"]} ${Xs["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${Gs.full};
    background-color: ${Vs.bg};
    text-align: center;
`,l_=K.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Vs["bg-inverse"]};
    padding: ${Xs["spacing-24"]} ${Xs["spacing-16"]};

    ${Qs.MaxWidth.sm} {
        padding: ${Xs["spacing-16"]} ${Xs["spacing-20"]};
    }
`,c_=K.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Xs["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,d_=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${Qs.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,u_=K.default.div`
    cursor: pointer;
    background-color: ${Vs["bg-inverse"]};
    border-radius: ${Gs.md};
    border: ${qs.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${Qs.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?i.css`
                  border-width: ${qs["width-040"]};
                  border-color: ${Vs["border-selected"]};

                  ${Qs.MaxWidth.sm} {
                      border-width: ${qs["width-020"]};
                  }

                  :hover {
                      border-color: ${Vs["border-selected-hover"]};
                  }
              `:i.css`
                  border-width: ${qs["width-010"]};

                  :hover {
                      border-color: ${Vs["border-hover"]};
                  }
              `};
`,f_=K.default(qF)`
    height: 100%;
    width: 100%;
`,h_=(r,n)=>{var{items:i,initialActiveItemIndex:a,hideThumbnail:o=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=r,f=X(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,g]=t.useState(null!=a?a:0),[p,m]=t.useState({}),[b,y]=t.useState(1),[v,x]=t.useState(null),[$,w]=t.useState(null),j=t.useRef(null),C=t.useRef([]),S=t.useRef([]),k=v&&$?v-$:0;t.useImperativeHandle(n,(()=>({currentItemIndex:h,setCurrentItem:_,goToPrevItem:T,goToNextItem:F}))),zc("keydown",(function(e){"ArrowRight"===e.key?F():"ArrowLeft"===e.key?T():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=C.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),y(1)}),[h]);const O=e=>{y(e.state.scale)};const D=({src:e,height:t,width:r})=>{m((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},E=()=>{const e=p[i[h].src];if((null==j?void 0:j.current)&&e){const{clientHeight:t,clientWidth:r}=j.current,{width:n,height:i}=e,a=i/n<t/r;return n<r&&i<t?a?r/n:t/i:a?t/(i/(n/r)):r/(n/(i/t))}},T=()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),g((e=>0===e?i.length-1:e-1))},F=()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),g((e=>e===i.length-1?0:e+1))},_=e=>{var t,r;null===(r=null===(t=S.current)||void 0===t?void 0:t[h])||void 0===r||r.resetTransform(),g(e)};return e.jsxs(sg,Object.assign({},f,{"data-testid":"image-carousel-modal"},{children:[e.jsx(GF,Object.assign({"aria-label":"Close image carousel",onClick:d,focusHighlight:!1},{children:e.jsx(u.CrossIcon,{"aria-hidden":!0})})),!c&&e.jsx(ZF,Object.assign({"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===b){const r=E();null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(r),y(r)}else y(1),null===(n=null===(r=S.current)||void 0===r?void 0:r[h])||void 0===n||n.resetTransform()},focusHighlight:!1},{children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})})),e.jsxs(JF,{children:[e.jsxs(e_,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(QF,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:T},{children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})})),e.jsx(QF,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:F},{children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})}))]}),e.jsx(t_,Object.assign({ref:j,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!v||b>1||w(e.touches[0].clientX)},onTouchEnd:()=>{Math.abs(k)>j.current.offsetWidth/3&&(k>0?F():T()),x(null),w(null)}},{children:e.jsx(r_,Object.assign({style:{transform:`translateX(calc(${100*-h}% - ${k}px))`}},{children:i.map(((t,r)=>{var n;return e.jsx(n_,Object.assign({"data-testid":"slide-item"},{children:e.jsx(zF,Object.assign({ref:e=>S.current[r]=e,panning:{disabled:b<=1},initialScale:1,onZoom:O,onZoomStop:O,onWheel:O},{children:e.jsx(WF,{children:e.jsx(i_,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e.jsx(a_,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:D})})}))}),r)}))}))})),!l&&e.jsx(o_,{children:e.jsx(s_,Object.assign({weight:"semibold"},{children:`${h+1}/${i.length}`}))})]}),!o&&e.jsx(l_,{children:e.jsx(c_,{children:i.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e.jsx(d_,{children:e.jsx(u_,Object.assign({"data-testid":"thumbnail-item",$active:r===h,onClick:()=>_(r),ref:e=>C.current[r]=e},{children:e.jsx(f_,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})}))},r)}))})})]})]}))},g_=t.forwardRef(h_),p_=K.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Vs.bg};
    border: ${qs["width-010"]} ${qs.solid} transparent;
    border-radius: ${Gs.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Ks["duration-250"]} ${Ks["ease-default"]};
    ${Us["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?Vs["text-primary"]:Vs.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${Qs.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${Us["body-md-semibold"]}
    }

    ${e=>e.$error?i.css`
                background: ${Vs.bg};
                border: ${qs["width-010"]} ${qs.solid}
                    ${Vs["border-error"]};
            `:e.$selected?i.css`
                background: ${Vs["bg-selected"]};
                border: ${qs["width-010"]} ${qs.solid}
                    ${Vs["border-selected"]};

                &:hover {
                    background: ${Vs["bg-selected-hover"]};
                    border: ${qs["width-010"]} ${qs.solid}
                        ${Vs["border-selected-hover"]};
                }
            `:i.css`
                &:hover {
                    border: ${qs["width-010"]} ${qs.solid}
                        ${Vs["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${qs["width-010"]} ${qs.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Vs["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,m_=V.default.forwardRef(((t,r)=>{var{children:n,imgSrc:i,selected:a,error:o,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(p_,Object.assign({ref:r,$selected:a,$error:o,type:s},l,{children:[e.jsx(Qg,{src:i}),n]}))})),b_=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Vs["icon-primary"]};
`,y_=K.default.div`
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
`,v_=K.default(exports.Typography.HeaderSM).attrs({as:"div"})`
    color: ${Vs["text-primary"]};
    margin-bottom: 0.5rem;
`,x_=K.default(exports.Typography.HeaderXS).attrs({as:"div"})`
    color: ${Vs["text-primary"]};
`,$_=K.default(h.ChevronRightIcon)`
    ${b_}
`,w_=K.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    }

    :hover {
        ${v_},
        ${x_},
        ${$_} {
            color: ${Vs["text-hover"]};
        }
    }
`,j_=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,C_=K.default(exports.Typography.BodyMD)`
    margin-top: 0.25rem;
`,S_=K.default(Di.div)`
    overflow: hidden;
`,k_=K.default.div`
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};
`,O_=K.default(exports.Typography.BodyMD).attrs({as:"span"})`
    color: ${Vs["text-primary"]};
    margin-right: 1rem;
`,D_=K.default(A.PlusIcon)`
    ${b_}
`,E_=K.default(I.MinusIcon)`
    ${b_}
`,T_=K.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${qs["width-010"]} ${qs.solid} ${Vs.border};

    :hover {
        ${O_},
        ${D_},
        ${E_} {
            color: ${Vs["text-hover"]};
        }
    }
`,F_=K.default.div`
    ${e=>Ml({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,__=t.forwardRef(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:a}=t,o=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(F_,Object.assign({ref:r,as:a?"span":"div",$textSize:i,$textColor:n},o))})),M_=K.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,a=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Ah.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/a}% - 2rem), 1fr)
                );
            }

            ${Ah.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,I_=K.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:a,startSm:o,colsSm:s}=e;return i.css`
            grid-column: ${t||n||"auto"} / span
                ${r||a||1};

            ${Ah.MaxWidth.tablet} {
                grid-column: ${n||o||"auto"} / span
                    ${a||s||1};
            }

            ${Ah.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${s||1};
            }
        `}}
`,A_={Grid:V.default.forwardRef(((t,r)=>{const{children:n}=t,i=X(t,["children"]);return e.jsx(M_,Object.assign({ref:r},i,{children:n}))})),Tile:V.default.forwardRef(((t,r)=>{const{children:n}=t,i=X(t,["children"]);return e.jsx(I_,Object.assign({ref:r},i,{children:n}))}))},B_=K.default.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Qs.MaxWidth.sm} {
        padding: 0;
    }
`,R_=()=>{t.useEffect((()=>{r()||n()}),[]);const r=()=>document.getElementById(P_),n=()=>{if(!document.getElementById(P_)){const e=document.createElement("script");e.id=P_,e.type="module",e.src=z_,document.head.appendChild(e)}};return e.jsx(B_,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},P_="lifesg-ds-masthead-script",z_="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",L_={notCompress:6,compress:4},N_=K.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,W_=K.default.nav`
    height: ${e=>e.$compress?L_.compress:L_.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Ks["duration-350"]} ${Ks["ease-standard"]};

    ${Qs.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,H_=K.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Qs.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,Y_=K.default(tl)`
    display: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,V_=K.default(B.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Vs.icon};
`,U_=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Qs.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${Qs.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,K_=K.default.div`
    display: flex;
    background-color: ${Vs.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Qs.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Qs.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,q_=K.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
        object-fit: contain;
    }
`,X_=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:a})=>e.jsx(q_,Object.assign({role:"link",onClick:e=>{r&&r(e,a)},tabIndex:0,"data-id":n,"data-testid":i,$type:a},{children:e.jsx(Qg,{src:t.logoSrc,alt:t.brandName})})),G_=K.default.div`
    display: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
    }
`,Z_=K.default.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Xs["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms ${Ks["ease-entrance"]};
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms ${Ks["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return i.css`
            height: calc(${t} * 100);
        `}}

	${Qs.MaxWidth.lg} {
        width: 75%;
    }

    ${Qs.MaxWidth.sm} {
        width: 100%;
    }
`,Q_=K.default.div`
    display: flex;
    flex-direction: column;
`,J_=K.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Xs["spacing-40"]} ${Xs["spacing-20"]}
        ${Xs["spacing-32"]};
`,eM=K.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,tM=K.default(tl)`
    position: absolute;
    right: -${Xs["spacing-4"]};
    color: ${Vs.icon};

    :active,
    :focus {
        color: ${Vs["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,rM=V.default.forwardRef(((r,n)=>{const{show:i,resources:a,children:o,hideNavBranding:s,onClose:l,onBrandClick:c}=r,[d,u]=t.useState(0),{primary:f,secondary:h}=a;t.useEffect((()=>(g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)})),[]);const g=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(G_,Object.assign({ref:n,"data-testid":"drawer"},{children:e.jsx(Z_,Object.assign({$show:i,$viewHeight:d},{children:e.jsxs(Q_,{children:[e.jsxs(J_,{children:[e.jsx(U_,Object.assign({"data-id":"drawer-brand-container"},{children:!s&&e.jsxs(e.Fragment,{children:[e.jsx(X_,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(K_,{}),e.jsx(X_,{resources:h,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e.jsx(tM,Object.assign({onClick:l,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e.jsx(eM,{})}))]}),o]})}))}))})),nM=K.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${Xs["spacing-64"]};
    flex-shrink: 0;

    ${Qs.MaxWidth.lg} {
        display: none;
    }
`,iM=K.default.ul`
    display: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Xs["spacing-64"]};
        flex-shrink: 0;
    }
`,aM=K.default.ul`
    display: none;
    list-style: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Xs["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Qs.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,oM=K.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Xs["spacing-16"]};
    }

    ${Qs.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Xs["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Xs["spacing-16"]:"0"};
        }
    }

    ${Qs.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 ${Xs["spacing-16"]};
                `}}
    }
`,sM=K.default(Ol.Small)`
    ${Qs.MaxWidth.lg} {
        width: 100%;
    }
`,lM=K.default.div`
    display: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Xs["spacing-40"]};
    }
`,cM=K.default(exports.Typography.BodyMD)`
    margin-bottom: ${Xs["spacing-8"]};
`,dM=K.default.div`
    display: flex;
`,uM=K.default.a`
    :not(:last-child) {
        margin-right: ${Xs["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Qs.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${Qs.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,fM=({actionButtons:t,mobile:r=!1,onActionButtonClick:n})=>{const i=e=>{e.stopPropagation()},a=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},o=(t,r)=>{const n=t?(e=>{const t=qj(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(r):r;return n.map(((r,n)=>{let o;switch(r.type){case"download":o=t?(s=r.args,e.jsxs(lM,{children:[e.jsx(cM,Object.assign({weight:"semibold"},{children:s&&s.children||"Download the app"})),e.jsxs(dM,{children:[e.jsx(uM,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(uM,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e.jsx(sM,Object.assign({},r.args,{type:"button",onClick:a(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const i=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;o=e.jsx(sM,Object.assign({},r.args,{type:"button",onClick:a(r),"data-testid":i}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var s;if(o)return e.jsx(oM,Object.assign({$mobile:t},{children:o}),`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,i=n.filter((e=>!!e.uncollapsible)),a=n.filter((e=>!e.uncollapsible));return r?e.jsx(e.Fragment,{children:a.length>0&&e.jsx(aM,{children:o(r,a)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(iM,{children:o(!1,i)}),t.desktop.length>0&&e.jsx(nM,{children:o(r,t.desktop)})]})}return e.jsx(e.Fragment,{})},hM=K.default.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Xs["spacing-8"]} 0;

    background: ${Vs.bg};
    border-radius: ${Gs.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Vs.Primitive["neutral-50"]} r g b / 25%);
`,gM=K.default.ul`
    display: none;
    list-style: none;

    ${Qs.MaxWidth.lg} {
        border-left: ${qs["width-040"]} solid ${Vs["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,pM=K.default(exports.Typography.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Vs.text};

    margin: 0 ${Xs["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${qs.solid} transparent;
    border-width: ${Xs["spacing-12"]} ${Xs["spacing-8"]};

    border-radius: ${Gs.md};

    ${xf(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Vs["bg-hover"]};
        color: ${Vs.text};
    }

    ${Qs.MaxWidth.lg} {
        ${Us["body-md-regular"]}
    }
`,mM=K.default.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,bM=({items:t,mobile:r=!1,onItemClick:n})=>{const i=e=>t=>{t.stopPropagation(),n(t,e)},a=(r=!1)=>t.map(((t,n)=>{const{children:a,options:o}=t,s=X(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e.jsx(mM,{children:e.jsx(pM,Object.assign({"data-testid":l},s,{onClick:i(t)},o,{children:a}))},n)}));if(t&&t.length>0){const t=r?gM:hM;return e.jsx(t,{children:a(r)})}return e.jsx(e.Fragment,{})},yM=K.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Qs.MaxWidth.lg} {
        display: none;
    }
`,vM=K.default.ul`
    display: none;
    list-style: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,xM=K.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Qs.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,$M=K.default(exports.Typography.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Vs.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Vs["text-selected-hover"]:Vs["text-hover"]};
    }

    ${Qs.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,wM=K.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,jM=K.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Vs["border-selected"]};

    :hover {
        ${e=>e.$selected&&Vs["border-selected-hover"]};
    }

    ${Qs.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,CM=K.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,SM=K.default(tl)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,kM=K.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Vs.icon};
    :hover {
        ${e=>e.$selected?Vs["icon-selected-hover"]:Vs["icon-hover"]};
    }
`,OM=({items:r,selectedId:n,mobile:i=!1,hideNavBranding:a,onItemClick:o})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{d(!1)},h=(e,t)=>r=>{r.stopPropagation(),l(t),d(!0),o(r,e)},g=(e,t)=>{e.stopPropagation(),o(e,t),d(!1)},p=()=>r.map(((t,r)=>{if("component"===t.itemType){const n=t&&t.children||null;return e.jsx("li",{children:n},r)}{const o=(e=>{if(e.id===n)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===n));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),f=o?i?"bold":"semibold":"regular",p=i?`link__mobile-${r+1}`:`link__${r+1}`,m=s>=0&&s===r&&c;return e.jsxs(xM,Object.assign({$hiddenBranding:a},{children:[e.jsxs($M,Object.assign({"data-testid":p,weight:f,$selected:o},u,{onClick:h(t,r)},d,{children:[e.jsx(wM,{children:l}),o&&e.jsx(jM,{"data-testid":`${p}-indicator`,$selected:o}),i&&t.subMenu&&e.jsx(CM,{children:e.jsx(SM,Object.assign({"data-testid":`${p}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand"},{children:e.jsx(kM,{$selected:o})}))})]})),m&&e.jsx(bM,{items:t.subMenu,mobile:i,onItemClick:g})]}),r)}}));return r&&r.length>0?i?e.jsx(vM,Object.assign({ref:u},{children:p()})):e.jsx(yM,Object.assign({ref:u,$alignLeft:a},{children:p()})):e.jsx(e.Fragment,{})},DM={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},EM={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},TM={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},FM={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},_M=t.forwardRef(((r,n)=>{var{items:a,className:o,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:g=[],actionButtons:p,onItemClick:m,onActionButtonClick:b,onBrandClick:y,masthead:v=!0,layout:x="default"}=r,$=X(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[w,j]=t.useState(!1),[C,S]=t.useState(!1),k="stretch"===x,O=t.useRef(),D=i.useTheme(),E=(e=>{switch(e){case"bookingsg":return EM;case"mylegacy":return FM;case"ccube":return TM;default:return DM}})(null==D?void 0:D.resourceScheme),T=Zs["lg-max"]({theme:D}),F=(null==u?void 0:u.primary)||E.primary,_=null==u?void 0:u.secondary;t.useImperativeHandle(n,(()=>Object.assign(O.current,{dismissDrawer:()=>{M()}})),[w]),t.useEffect((()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)})),[]);const M=()=>{j(!1),setTimeout((()=>{S(!1)}),550)},I=e=>w&&-1===g.indexOf(e),A=()=>{window.innerWidth<=T&&w&&M()},B=(e,t)=>{y&&(e.preventDefault(),y(t)),I("brand-click")&&M()},R=(e,t)=>{t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),!(null==t?void 0:t.subMenu)&&I("item-click")&&M()},P=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):b&&(e.preventDefault(),b(t)),I("item-click")&&M()},z=()=>{j(!0),S(!0)},L=()=>{I("close-button-click")&&M()},N=()=>{const t=a.mobile||a.desktop;return t&&t.length>0||p&&(()=>{const e=p.mobile||p.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e.jsx(Y_,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:z,focusHighlight:!1},{children:e.jsx(V_,{})})):null};return e.jsxs(N_,Object.assign({ref:O,$fixed:d,className:o,id:s||"navbar-wrapper","data-testid":$["data-testid"]||"navbar-wrapper"},{children:[v&&e.jsx(R_,{}),e.jsxs(wT.Content,Object.assign({stretch:k},{children:[e.jsxs(W_,Object.assign({$compress:c},{children:[!h&&e.jsxs(U_,Object.assign({$compress:c,"data-id":"brand-container"},{children:[e.jsx(X_,{resources:F,onClick:B,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),_&&e.jsxs(e.Fragment,{children:[e.jsx(K_,{$compress:c}),e.jsx(X_,{resources:_,onClick:B,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!f&&e.jsxs(H_,Object.assign({$hideNavBranding:h},{children:[e.jsx(OM,{items:a.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(fM,{actionButtons:p,onActionButtonClick:P}),N()]}))]})),!f&&e.jsx(Uh,Object.assign({show:C,enableOverlayClick:!0,onOverlayClick:L},{children:e.jsxs(rM,Object.assign({show:w,resources:{primary:F,secondary:_},onClose:L,onBrandClick:B,actionButtons:p,hideNavBranding:h},{children:[e.jsx(OM,{items:a.mobile||a.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(fM,{actionButtons:p,onActionButtonClick:P,mobile:!0})]}))}))]}))]}))})),MM=L_,IM=i.css`
    color: ${Vs["hyperlink-inverse"]};

    svg {
        color: ${Vs["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Vs["hyperlink-inverse"]};
        svg {
            color: ${Vs["icon-primary-inverse"]};
        }
    }
`,AM=K.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Ks["duration-800"]} ${Ks["ease-default"]};
    background: ${Vs["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,BM=K.default(wT.Content)`
    display: flex;
`,RM=K.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,PM=K.default.div`
    display: inline-block;
    width: 100%;

    ${Us["body-baseline-regular"]}
    color: ${Vs["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${Us["body-baseline-semibold"]}
        color: ${Vs["text-inverse"]};
    }

    a {
        ${Us["body-baseline-regular"]}
        ${IM}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,zM=K.default(exports.Typography.LinkBL)`
    position: relative;

    ${IM}
`,LM=K.default(tl)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,NM=K.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Vs["icon-inverse"]};
`,WM=K.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Vs["hyperlink-inverse"]};
    ${Us["body-md-semibold"]};

    cursor: pointer;
`,HM=K.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,YM=r=>{var{children:n,visible:i=!0,dismissible:a=!0,sticky:o=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:f}=r,h=X(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const g=h["data-testid"],[p,m]=t.useState(i),{height:b,ref:y}=qe();t.useEffect((()=>{m(i)}),[i]);const v=e=>{e.stopPropagation(),m(!1),a&&s&&s()},x=e=>{f.onClick&&(e.stopPropagation(),f.onClick(e))};if(!p)return null;return e.jsxs(AM,Object.assign({ref:c,$sticky:o,$clickable:!!u,onClick:u},h,{children:[e.jsxs(BM,Object.assign({id:VM("container",l)},{children:[e.jsxs(RM,{children:[e.jsx(PM,Object.assign({"data-testid":VM("text-content",g),$maxCollapsedHeight:d&&b>d?d:void 0},{children:e.jsx("div",Object.assign({ref:y},{children:n}))})),f&&e.jsx(WM,Object.assign({id:VM("action-button",l),"data-testid":VM("action-button",g),type:"button"},f,{onClick:x},{children:f.children}))]}),a&&e.jsx(LM,Object.assign({onClick:v,id:VM("dismiss-button",l),"data-testid":VM("dismiss-button",g),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e.jsx(NM,{"aria-hidden":!0})}))]})),u&&e.jsx(HM,{"aria-label":"Clickable banner",type:"button"})]}))},VM=(e,t="wrapper")=>`${t}-${e}`,UM=V.default.forwardRef(((t,r)=>e.jsx(YM,Object.assign({},t,{forwardedRef:r}))));UM.displayName="NotificationBanner";const KM=Object.assign(UM,{Link:zM});var qM={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */qM.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,r){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,r)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function n(e,i,a){return n=r()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var a=new(Function.bind.apply(e,i));return n&&t(a,n.prototype),a},n.apply(null,arguments)}function i(e){return a(e)||o(e)||s(e)||c()}function a(e){if(Array.isArray(e))return l(e)}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,f=Object.isFrozen,h=Object.getPrototypeOf,g=Object.getOwnPropertyDescriptor,p=Object.freeze,m=Object.seal,b=Object.create,y="undefined"!=typeof Reflect&&Reflect,v=y.apply,x=y.construct;v||(v=function(e,t,r){return e.apply(t,r)}),p||(p=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return n(e,i(t))});var $=_(Array.prototype.forEach),w=_(Array.prototype.pop),j=_(Array.prototype.push),C=_(String.prototype.toLowerCase),S=_(String.prototype.toString),k=_(String.prototype.match),O=_(String.prototype.replace),D=_(String.prototype.indexOf),E=_(String.prototype.trim),T=_(RegExp.prototype.test),F=M(TypeError);function _(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return v(e,t,n)}}function M(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(e,r)}}function I(e,t,r){var n;r=null!==(n=r)&&void 0!==n?n:C,u&&u(e,null);for(var i=t.length;i--;){var a=t[i];if("string"==typeof a){var o=r(a);o!==a&&(f(t)||(t[i]=o),a=o)}e[a]=!0}return e}function A(e){var t,r=b(null);for(t in e)!0===v(d,e,[t])&&(r[t]=e[t]);return r}function B(e,t){for(;null!==e;){var r=g(e,t);if(r){if(r.get)return _(r.get);if("function"==typeof r.value)return _(r.value)}e=h(e)}function n(e){return console.warn("fallback value for",e),null}return n}var R=p(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),P=p(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),z=p(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=p(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=p(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),W=p(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=p(["#text"]),Y=p(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),V=p(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=p(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=p(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),X=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=m(/^html$/i),ne=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},ae=function(t,r){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var n=null,i="data-tt-policy-suffix";r.currentScript&&r.currentScript.hasAttribute(i)&&(n=r.currentScript.getAttribute(i));var a="dompurify"+(n?"#"+n:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function oe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),r=function(e){return oe(e)};if(r.version="2.5.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var n=t.document,a=t.document,o=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,h=t.HTMLFormElement,g=t.DOMParser,m=t.trustedTypes,b=c.prototype,y=B(b,"cloneNode"),v=B(b,"nextSibling"),x=B(b,"childNodes"),_=B(b,"parentNode");if("function"==typeof s){var M=a.createElement("template");M.content&&M.content.ownerDocument&&(a=M.content.ownerDocument)}var se=ae(m,n),le=se?se.createHTML(""):"",ce=a,de=ce.implementation,ue=ce.createNodeIterator,fe=ce.createDocumentFragment,he=ce.getElementsByTagName,ge=n.importNode,pe={};try{pe=A(a).documentMode?a.documentMode:{}}catch(e){}var me={};r.isSupported="function"==typeof _&&de&&void 0!==de.createHTMLDocument&&9!==pe;var be,ye,ve=q,xe=X,$e=G,we=Z,je=Q,Ce=ee,Se=te,ke=ne,Oe=J,De=null,Ee=I({},[].concat(i(R),i(P),i(z),i(N),i(H))),Te=null,Fe=I({},[].concat(i(Y),i(V),i(U),i(K))),_e=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Ie=null,Ae=!0,Be=!0,Re=!1,Pe=!0,ze=!1,Le=!0,Ne=!1,We=!1,He=!1,Ye=!1,Ve=!1,Ue=!1,Ke=!0,qe=!1,Xe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=I({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,rt=I({},["audio","video","img","source","image","track"]),nt=null,it=I({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),at="http://www.w3.org/1998/Math/MathML",ot="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=I({},[at,ot,st],S),ft=["application/xhtml+xml","text/html"],ht="text/html",gt=null,pt=a.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){gt&&gt===t||(t&&"object"===e(t)||(t={}),t=A(t),be=be=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?ht:t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===be?S:C,De="ALLOWED_TAGS"in t?I({},t.ALLOWED_TAGS,ye):Ee,Te="ALLOWED_ATTR"in t?I({},t.ALLOWED_ATTR,ye):Fe,dt="ALLOWED_NAMESPACES"in t?I({},t.ALLOWED_NAMESPACES,S):ut,nt="ADD_URI_SAFE_ATTR"in t?I(A(it),t.ADD_URI_SAFE_ATTR,ye):it,tt="ADD_DATA_URI_TAGS"in t?I(A(rt),t.ADD_DATA_URI_TAGS,ye):rt,Je="FORBID_CONTENTS"in t?I({},t.FORBID_CONTENTS,ye):et,Me="FORBID_TAGS"in t?I({},t.FORBID_TAGS,ye):{},Ie="FORBID_ATTR"in t?I({},t.FORBID_ATTR,ye):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Ae=!1!==t.ALLOW_ARIA_ATTR,Be=!1!==t.ALLOW_DATA_ATTR,Re=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Pe=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ze=t.SAFE_FOR_TEMPLATES||!1,Le=!1!==t.SAFE_FOR_XML,Ne=t.WHOLE_DOCUMENT||!1,Ye=t.RETURN_DOM||!1,Ve=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,He=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,Oe=t.ALLOWED_URI_REGEXP||Oe,lt=t.NAMESPACE||st,_e=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_e.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_e.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(_e.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(Be=!1),Ve&&(Ye=!0),Qe&&(De=I({},i(H)),Te=[],!0===Qe.html&&(I(De,R),I(Te,Y)),!0===Qe.svg&&(I(De,P),I(Te,V),I(Te,K)),!0===Qe.svgFilters&&(I(De,z),I(Te,V),I(Te,K)),!0===Qe.mathMl&&(I(De,N),I(Te,U),I(Te,K))),t.ADD_TAGS&&(De===Ee&&(De=A(De)),I(De,t.ADD_TAGS,ye)),t.ADD_ATTR&&(Te===Fe&&(Te=A(Te)),I(Te,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&I(nt,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Je===et&&(Je=A(Je)),I(Je,t.FORBID_CONTENTS,ye)),Ge&&(De["#text"]=!0),Ne&&I(De,["html","head","body"]),De.table&&(I(De,["tbody"]),delete Me.tbody),p&&p(t),gt=t)},yt=I({},["mi","mo","mn","ms","mtext"]),vt=I({},["foreignobject","annotation-xml"]),xt=I({},["title","style","font","a","script"]),$t=I({},P);I($t,z),I($t,L);var wt=I({},N);I(wt,W);var jt=function(e){var t=_(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var r=C(e.tagName),n=C(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===ot?t.namespaceURI===st?"svg"===r:t.namespaceURI===at?"svg"===r&&("annotation-xml"===n||yt[n]):Boolean($t[r]):e.namespaceURI===at?t.namespaceURI===st?"math"===r:t.namespaceURI===ot?"math"===r&&vt[n]:Boolean(wt[r]):e.namespaceURI===st?!(t.namespaceURI===ot&&!vt[n])&&!(t.namespaceURI===at&&!yt[n])&&!wt[r]&&(xt[r]||!$t[r]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},Ct=function(e){j(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},St=function(e,t){try{j(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){j(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Te[e])if(Ye||Ve)try{Ct(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},kt=function(e){var t,r;if(He)e="<remove></remove>"+e;else{var n=k(e,/^[\r\n\t ]+/);r=n&&n[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new g).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var o=t.body||t.documentElement;return e&&r&&o.insertBefore(a.createTextNode(r),o.childNodes[0]||null),lt===st?he.call(t,Ne?"html":"body")[0]:Ne?t.documentElement:o},Ot=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Dt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Tt=function(e,t,n){me[e]&&$(me[e],(function(e){e.call(r,t,n,gt)}))},Ft=function(e){var t;if(Tt("beforeSanitizeElements",e,null),Dt(e))return Ct(e),!0;if(T(/[\u0080-\uFFFF]/,e.nodeName))return Ct(e),!0;var n=ye(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:n,allowedTags:De}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return Ct(e),!0;if("select"===n&&T(/<template/i,e.innerHTML))return Ct(e),!0;if(7===e.nodeType)return Ct(e),!0;if(Le&&8===e.nodeType&&T(/<[/\w]/g,e.data))return Ct(e),!0;if(!De[n]||Me[n]){if(!Me[n]&&Mt(n)){if(_e.tagNameCheck instanceof RegExp&&T(_e.tagNameCheck,n))return!1;if(_e.tagNameCheck instanceof Function&&_e.tagNameCheck(n))return!1}if(Ge&&!Je[n]){var i=_(e)||e.parentNode,a=x(e)||e.childNodes;if(a&&i)for(var o=a.length-1;o>=0;--o){var s=y(a[o],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,v(e))}}return Ct(e),!0}return e instanceof c&&!jt(e)?(Ct(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!T(/<\/no(script|embed|frames)/i,e.innerHTML)?(ze&&3===e.nodeType&&(t=e.textContent,t=O(t,ve," "),t=O(t,xe," "),t=O(t,$e," "),e.textContent!==t&&(j(r.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(Ct(e),!0)},_t=function(e,t,r){if(Ke&&("id"===t||"name"===t)&&(r in a||r in pt))return!1;if(Be&&!Ie[t]&&T(we,t));else if(Ae&&T(je,t));else if(!Te[t]||Ie[t]){if(!(Mt(e)&&(_e.tagNameCheck instanceof RegExp&&T(_e.tagNameCheck,e)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(e))&&(_e.attributeNameCheck instanceof RegExp&&T(_e.attributeNameCheck,t)||_e.attributeNameCheck instanceof Function&&_e.attributeNameCheck(t))||"is"===t&&_e.allowCustomizedBuiltInElements&&(_e.tagNameCheck instanceof RegExp&&T(_e.tagNameCheck,r)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(r))))return!1}else if(nt[t]);else if(T(Oe,O(r,Se,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==D(r,"data:")||!tt[e])if(Re&&!T(Ce,O(r,Se,"")));else if(r)return!1;return!0},Mt=function(e){return"annotation-xml"!==e&&k(e,ke)},It=function(t){var n,i,a,o;Tt("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Te};for(o=s.length;o--;){var c=n=s[o],d=c.name,u=c.namespaceURI;if(i="value"===d?n.value:E(n.value),a=ye(d),l.attrName=a,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(St(d,t),l.keepAttr))if(Pe||!T(/\/>/i,i))if(Le&&T(/((--!?|])>)|<\/(style|title)/i,i))St(d,t);else{ze&&(i=O(i,ve," "),i=O(i,xe," "),i=O(i,$e," "));var f=ye(t.nodeName);if(_t(f,a,i)){if(!qe||"id"!==a&&"name"!==a||(St(d,t),i=Xe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,a)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Dt(t)?Ct(t):w(r.removed)}catch(e){}}}else St(d,t)}Tt("afterSanitizeAttributes",t,null)}},At=function e(t){var r,n=Ot(t);for(Tt("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Tt("uponSanitizeShadowNode",r,null),Ft(r)||(r.content instanceof o&&e(r.content),It(r));Tt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(i){var a,s,c,d,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Et(i)){if("function"!=typeof i.toString)throw F("toString is not a function");if("string"!=typeof(i=i.toString()))throw F("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Et(i))return t.toStaticHTML(i.outerHTML)}return i}if(We||bt(f),r.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var h=ye(i.nodeName);if(!De[h]||Me[h])throw F("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(a=kt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?a=s:a.appendChild(s);else{if(!Ye&&!ze&&!Ne&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(a=kt(i)))return Ye?null:Ue?le:""}a&&He&&Ct(a.firstChild);for(var g=Ot(Ze?i:a);c=g.nextNode();)3===c.nodeType&&c===d||Ft(c)||(c.content instanceof o&&At(c.content),It(c),d=c);if(d=null,Ze)return i;if(Ye){if(Ve)for(u=fe.call(a.ownerDocument);a.firstChild;)u.appendChild(a.firstChild);else u=a;return(Te.shadowroot||Te.shadowrootmod)&&(u=ge.call(n,u,!0)),u}var p=Ne?a.outerHTML:a.innerHTML;return Ne&&De["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&T(re,a.ownerDocument.doctype.name)&&(p="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+p),ze&&(p=O(p,ve," "),p=O(p,xe," "),p=O(p,$e," ")),se&&Ue?se.createHTML(p):p},r.setConfig=function(e){bt(e),We=!0},r.clearConfig=function(){gt=null,We=!1},r.isValidAttribute=function(e,t,r){gt||bt({});var n=ye(e),i=ye(t);return _t(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],j(me[e],t))},r.removeHook=function(e){if(me[e])return w(me[e])},r.removeHooks=function(e){me[e]&&(me[e]=[])},r.removeAllHooks=function(){me={}},r}var se=oe();return se}();var XM=Ti(qM.exports);const GM=K.default.div`
    display: flex;
    flex-direction: column;
`,ZM=K.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${Xs["spacing-8"]};
`,QM=K.default(jx)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${Qs.MaxWidth.xs} {
            padding: 0 ${Xs["spacing-8"]};
        }
    }
`,JM=K.default(Ol.Small)`
    margin: ${Xs["spacing-32"]} 0;
`,eI=K.default.nav`
    display: flex;
`,tI=K.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${Qs.MaxWidth.lg} {
        align-self: center;
    }
`,rI=K.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,nI=K.default(tl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Gs.sm};
    color: ${Vs["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Vs["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Vs["bg-hover"]};
    }
`,iI=K.default(tl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Gs.sm};
    color: ${Vs["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Vs["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${Vs["bg-hover"]};
    }

    ${e=>"left"===e.$position?i.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:i.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${Qs.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,aI=K.default.button`
    background: ${e=>e.$selected?Vs["bg-primary"]:Vs.bg};
    border: ${qs["width-010"]} ${qs.solid}
        ${e=>i.css`
                ${e.$selected?Vs["bg-primary"]:Vs.border}
            `};
    color: ${e=>e.$selected?Vs["text-inverse"]:Vs.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${Gs.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?i.css`
                  ${Us["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Vs["bg-selected-strongest-hover"]};
                      background-color: ${Vs["bg-selected-strongest-hover"]};
                      color: ${Vs["text-inverse"]};
                  }
              `:i.css`
                  ${Us["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Vs["bg-hover"]};
                      background-color: ${Vs["bg-hover"]};
                      color: ${Vs["text-hover"]};
                      ${Us["body-baseline-semibold"]};
                  }
              `}
`;K.default(tl)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Vs["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${Gs.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${Vs["icon-hover"]};
        }
    }
`;const oI=K.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Gs.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,sI=K.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Vs.text};

    display: flex;
    justify-content: center;
`,lI=K.default(exports.Typography.BodyBL)`
    white-space: nowrap;
`,cI=K.default(exports.Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,dI=K.default(jx)`
    ${Us["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${Gs.sm};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Us["body-xs-regular"]}
        }
    }
`,uI=K.default.div`
    ${Us["body-xs-regular"]}
    background-color: ${Vs["bg-hover"]};
    border: none;
    border-radius: ${Gs.sm};
    color: ${Vs["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,fI=K.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,hI=V.default.forwardRef((({id:r,"data-testid":n,className:a,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=gI,showFirstAndLastNav:d,showPageSizeChanger:u=!1,onPageChange:f,onPageSizeChange:p},m)=>{const b=i.useTheme(),y=Zs["sm-max"]({theme:b}),v=tc.useMediaQuery({maxWidth:y}),x=c,[$,w]=t.useState(!1),[j,C]=t.useState(!1),[S,k]=t.useState(""),[O,D]=t.useState(x&&x.length>=1?x[0]:null),[E,T]=t.useState(!v&&u&&O?O.value:o),F=Math.ceil(s/E),_=1===l,M=l===F,I=l>1?()=>K(1):void 0,A=l<F?()=>K(F):void 0,B=l>1?()=>K(l-1):void 0,W=l<F?()=>K(parseInt(l.toString())+1):void 0,H=e=>e?()=>ee():()=>Q(),Y=e=>e?()=>te():()=>J();t.useEffect((()=>{l&&V(l)}),[l]),t.useEffect((()=>{var e;T(o),D(null!==(e=x.find((e=>e.value===o)))&&void 0!==e?e:null)}),[o]);const V=e=>{k(e.toString())},U=()=>{w(!1),C(!1)},K=e=>{f&&(f(e),V(e))},q=()=>{const e=Math.min(F,l+5);K(e),V(e),w(!0),C(!1)},X=()=>{const e=Math.max(1,l-5);K(e),V(e),w(!1),C(!0)},G=e=>{const t=e.target.value;if(void 0===t||0===t.length)k("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(F,e)))}else k(t.replace(/[^0-9]/g,""))},Z=e=>{e.preventDefault(),S&&f(parseInt(S))},Q=()=>{w(!0)},J=()=>{w(!1)},ee=()=>{C(!0)},te=()=>{C(!1)},re=(t,r,n)=>e.jsxs(oI,{children:[e.jsx(nI,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:H(t),onMouseOut:Y(t),onFocus:H(t),onBlur:Y(t),onClick:t?X:q},{children:t&&j?e.jsx(R.Chevron2LeftIcon,{"aria-hidden":!0}):r&&$?e.jsx(P.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(N.EllipsisHorizontalIcon,{"aria-hidden":!0})})),t&&j&&e.jsx(uI,{children:"Previous 5 pages"}),r&&$&&e.jsx(uI,{children:"Next 5 pages"})]},n);return e.jsxs(eI,Object.assign({className:a,ref:m,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination"},{children:[e.jsx(tI,{children:e.jsxs(rI,{children:[d&&e.jsx(iI,Object.assign({onClick:I,disabled:_,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e.jsx(z.ChevronLineLeftIcon,{"aria-hidden":!0})})),e.jsx(iI,Object.assign({onClick:B,disabled:_,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e.jsx(g.ChevronLeftIcon,{"aria-hidden":!0})})),v?e.jsxs(sI,{children:[e.jsx("form",Object.assign({onSubmit:Z},{children:e.jsx(dI,{value:S,onChange:G,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})})),e.jsx(cI,{children:"/"}),e.jsx(lI,{children:F})]}):[...Array(F)].map(((t,r)=>{const n=r+1,i=F-5,a=l===n;if(F<=7)return e.jsx(aI,Object.assign({onClick:()=>K(n),$selected:a,"aria-label":"Page "+n,"aria-current":!!a&&"page",onMouseOver:U,onFocus:U},{children:n}),n);const o=l+1>5&&2===n,s=l-1<=i&&n===F-1-1;return o||s?re(o,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>F-1?e.jsx(aI,Object.assign({onClick:()=>K(n),$selected:a,"aria-label":"Page "+n,"aria-current":!!a&&"page",onMouseOver:U,onFocus:U},{children:n}),n):null})),e.jsx(iI,Object.assign({onClick:W,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})})),d&&e.jsx(iI,Object.assign({onClick:A,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e.jsx(L.ChevronLineRightIcon,{"aria-hidden":!0})}))]})}),u&&!v&&e.jsx(fI,{children:e.jsx(bO,{options:x,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:O,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);T(t);p&&p(l>=r?r:l,t)}})})]}))})),gI=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],pI=K.default.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Us["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=Vs["text-inverse"],e.$color){case"grey":t=Vs["bg-inverse-subtler"];break;case"green":t=Vs["bg-success-strong"];break;case"yellow":t=Vs["bg-warning-strong"];break;case"red":t=Vs["bg-error-strong"];break;case"blue":t=Vs["bg-info-strong"];break;default:t=Vs["bg-inverse"]}else switch(e.$color){case"grey":t=Vs["bg-stronger"],r=Vs["border-strong"],n=Vs["text-subtler"];break;case"green":t=Vs["bg-success"],r=Vs["border-success"],n=Vs["text-success"];break;case"yellow":t=Vs["bg-warning"],r=Vs["border-warning"],n=Vs["text-warning"];break;case"red":t=Vs["bg-error"],r=Vs["border-error"],n=Vs["text-error"];break;case"blue":t=Vs["bg-info"],r=Vs["border-info"],n=Vs["text-info"];break;default:t=Vs.bg,r=Vs.border,n=Vs.text}return i.css`
            background: ${t};
            border: ${qs["width-010"]} ${qs.solid} ${r};
            color: ${n};
        `}}
`,mI=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,bI=t=>{var{type:r,colorType:n="black",children:i,icon:a}=t,o=X(t,["type","colorType","children","icon"]);return e.jsxs(pI,Object.assign({$type:r,$color:n},o,{children:[a,e.jsx(mI,{children:i})]}))},yI=(e,t,r)=>t?ss(r,t)||ss(e,t):r||e,vI=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)};var xI;exports.V2_ThemeContextKeys=void 0,(xI=exports.V2_ThemeContextKeys||(exports.V2_ThemeContextKeys={})).colorScheme="colorScheme",xI.layout="layout",xI.textStyleScheme="textStyleScheme",xI.designTokenScheme="designTokenScheme",xI.resourceScheme="resourceScheme";const $I={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},wI=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=vI($I,null==n?void 0:n[exports.V2_ThemeContextKeys.colorScheme]);return n.options&&n.options.color?yI(i,e,n.options.color):yI(i,e)},jI={Brand:{1:wI("Brand.1"),2:wI("Brand.2"),3:wI("Brand.3"),4:wI("Brand.4"),5:wI("Brand.5"),6:wI("Brand.6")},Primary:wI("Primary"),PrimaryDark:wI("PrimaryDark"),Secondary:wI("Secondary"),Accent:{Light:{1:wI("Accent.Light.1"),2:wI("Accent.Light.2"),3:wI("Accent.Light.3"),4:wI("Accent.Light.4"),5:wI("Accent.Light.5"),6:wI("Accent.Light.6")},Dark:{1:wI("Accent.Dark.1"),2:wI("Accent.Dark.2"),3:wI("Accent.Dark.3")}},Neutral:{1:wI("Neutral.1"),2:wI("Neutral.2"),3:wI("Neutral.3"),4:wI("Neutral.4"),5:wI("Neutral.5"),6:wI("Neutral.6"),7:wI("Neutral.7"),8:wI("Neutral.8")},Validation:{Green:{Text:wI("Validation.Green.Text"),Icon:wI("Validation.Green.Icon"),Border:wI("Validation.Green.Border"),Background:wI("Validation.Green.Background")},Orange:{Text:wI("Validation.Orange.Text"),Icon:wI("Validation.Orange.Icon"),Border:wI("Validation.Orange.Border"),Background:wI("Validation.Orange.Background"),Badge:wI("Validation.Orange.Badge")},Red:{Text:wI("Validation.Red.Text"),Icon:wI("Validation.Red.Icon"),Border:wI("Validation.Red.Border"),Background:wI("Validation.Red.Background")},Blue:{Text:wI("Validation.Blue.Text"),Icon:wI("Validation.Blue.Icon"),Border:wI("Validation.Blue.Border"),Background:wI("Validation.Blue.Background")}},Shadow:{Accent:wI("Shadow.Accent"),Red:wI("Shadow.Red"),Elevation:wI("Shadow.Elevation")}},CI={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},SI={D1:{fontFamily:CI.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:CI.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:CI.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:CI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:CI.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:CI.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:CI.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:CI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:CI.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:CI.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:CI.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:CI.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:CI.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:CI.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},kI={D1:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:CI.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:CI.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:CI.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:CI.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:CI.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},OI={collections:{base:SI,oneservice:{D1:{fontFamily:CI.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:CI.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:CI.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:CI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:CI.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:CI.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:CI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:CI.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:CI.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:CI.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:CI.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:CI.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:CI.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:CI.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:kI},defaultValue:"base"},DI=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=vI(OI,null==n?void 0:n[exports.V2_ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?yI(i,e,n.options.textStyle):yI(i,e)},EI={D1:{fontFamily:DI("D1.fontFamily"),fontSize:DI("D1.fontSize"),fontWeight:DI("D1.fontWeight"),lineHeight:DI("D1.lineHeight"),letterSpacing:DI("D1.letterSpacing")},D2:{fontFamily:DI("D2.fontFamily"),fontSize:DI("D2.fontSize"),fontWeight:DI("D2.fontWeight"),lineHeight:DI("D2.lineHeight"),letterSpacing:DI("D2.letterSpacing")},D3:{fontFamily:DI("D3.fontFamily"),fontSize:DI("D3.fontSize"),fontWeight:DI("D3.fontWeight"),lineHeight:DI("D3.lineHeight"),letterSpacing:DI("D3.letterSpacing")},D4:{fontFamily:DI("D4.fontFamily"),fontSize:DI("D4.fontSize"),fontWeight:DI("D4.fontWeight"),lineHeight:DI("D4.lineHeight"),letterSpacing:DI("D4.letterSpacing")},DBody:{fontFamily:DI("DBody.fontFamily"),fontSize:DI("DBody.fontSize"),fontWeight:DI("DBody.fontWeight"),lineHeight:DI("DBody.lineHeight"),letterSpacing:DI("DBody.letterSpacing")},H1:{fontFamily:DI("H1.fontFamily"),fontSize:DI("H1.fontSize"),fontWeight:DI("H1.fontWeight"),lineHeight:DI("H1.lineHeight"),letterSpacing:DI("H1.letterSpacing")},H2:{fontFamily:DI("H2.fontFamily"),fontSize:DI("H2.fontSize"),fontWeight:DI("H2.fontWeight"),lineHeight:DI("H2.lineHeight"),letterSpacing:DI("H2.letterSpacing")},H3:{fontFamily:DI("H3.fontFamily"),fontSize:DI("H3.fontSize"),fontWeight:DI("H3.fontWeight"),lineHeight:DI("H3.lineHeight"),letterSpacing:DI("H3.letterSpacing")},H4:{fontFamily:DI("H4.fontFamily"),fontSize:DI("H4.fontSize"),fontWeight:DI("H4.fontWeight"),lineHeight:DI("H4.lineHeight"),letterSpacing:DI("H4.letterSpacing")},H5:{fontFamily:DI("H5.fontFamily"),fontSize:DI("H5.fontSize"),fontWeight:DI("H5.fontWeight"),lineHeight:DI("H5.lineHeight"),letterSpacing:DI("H5.letterSpacing")},H6:{fontFamily:DI("H6.fontFamily"),fontSize:DI("H6.fontSize"),fontWeight:DI("H6.fontWeight"),lineHeight:DI("H6.lineHeight"),letterSpacing:DI("H6.letterSpacing")},Body:{fontFamily:DI("Body.fontFamily"),fontSize:DI("Body.fontSize"),fontWeight:DI("Body.fontWeight"),lineHeight:DI("Body.lineHeight"),letterSpacing:DI("Body.letterSpacing")},BodySmall:{fontFamily:DI("BodySmall.fontFamily"),fontSize:DI("BodySmall.fontSize"),fontWeight:DI("BodySmall.fontWeight"),lineHeight:DI("BodySmall.lineHeight"),letterSpacing:DI("BodySmall.letterSpacing")},XSmall:{fontFamily:DI("XSmall.fontFamily"),fontSize:DI("XSmall.fontSize"),fontWeight:DI("XSmall.fontWeight"),lineHeight:DI("XSmall.lineHeight"),letterSpacing:DI("XSmall.letterSpacing")}},TI=[CI.OpenSans,CI.PlusJakartaSans],FI=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},_I=(e,t)=>r=>{var n;const a=EI[e].fontFamily(r),o=EI[e].fontWeight(r),s=TI.find((e=>Object.values(e).includes(a)));return s?i.css`
                font-family: ${FI(s,t)||FI(s,o)||a};
                font-weight: normal !important;
            `:i.css`
            font-family: ${a};
            font-weight: ${null!==(n=MI(t)||o)&&void 0!==n?n:"normal"};
        `},MI=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},II=e=>{if(e>0)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},AI={getFontFamily:_I,getTextStyle:(e,t,r=!1)=>n=>{const a=EI[e],o=a.fontSize(n);return i.css`
            ${_I(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${(()=>{const e=r?1.05:0;return i.css`
                margin-bottom: ${o*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?i.css`
            display: block;
            ${II(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${II(r)}
        `};var BI;exports.V2_Text=void 0,(BI=exports.V2_Text||(exports.V2_Text={})).D1=K.default.h1`
        ${e=>i.css`
                ${AI.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.D2=K.default.h1`
        ${e=>i.css`
                ${AI.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.D3=K.default.h1`
        ${e=>i.css`
                ${AI.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.D4=K.default.h1`
        ${e=>i.css`
                ${AI.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.DBody=K.default.h1`
        ${e=>i.css`
                ${AI.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.H1=K.default.h1`
        ${e=>i.css`
                ${AI.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.H2=K.default.h2`
        ${e=>i.css`
                ${AI.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.H3=K.default.h3`
        ${e=>i.css`
                ${AI.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.H4=K.default.h4`
        ${e=>i.css`
                ${AI.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.H5=K.default.h5`
        ${e=>i.css`
                ${AI.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.H6=K.default.h6`
        ${e=>i.css`
                ${AI.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.Body=K.default.p`
        ${e=>i.css`
                ${AI.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.BodySmall=K.default.p`
        ${e=>i.css`
                ${AI.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.XSmall=K.default.span`
        ${e=>i.css`
                ${AI.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${jI.Neutral[1]};
                ${AI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BI.Hyperlink={Default:e=>zI(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>zI(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const RI=K.default.a`
    ${e=>i.css`
            ${AI.getTextStyle(e.textStyle,e.weight)}
            color: ${jI.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${jI.Secondary};

                svg {
                    color: ${jI.Secondary};
                }
            }
        `}
`,PI=K.default(a.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,zI=t=>{var{external:r=!1,children:n}=t,i=X(t,["external","children"]);return e.jsxs(RI,Object.assign({},i,{children:[n,r&&e.jsx(PI,{})]}))},LI={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},NI=K.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${LI.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${LI.Base};
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

	${Ah.MaxWidth.mobileL} {
        display: none;
    }
`,WI=K.default(og)`
    padding: 3.5rem 1.25rem 2.5rem;
`,HI=K.default.div`
    position: relative;
    width: fit-content;
`,YI=K.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,VI=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,UI=r=>{var{children:n,visible:i,onMobileClose:a}=r,o=X(r,["children","visible","onMobileClose"]);const s=o["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=tc.useMediaQuery({maxWidth:Mh.mobileL}),f=t.useRef(l);t.useEffect((()=>(p(),window.addEventListener("resize",Ou(h,300)),()=>{window.removeEventListener("resize",Ou(h,300))})),[]);const h=()=>{p()},g=()=>{a&&a()},p=()=>{const e=m();var t;e&&(t=e,f.current=t,c(t))},m=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},b=()=>"string"==typeof n?e.jsx(exports.V2_Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[e.jsx(NI,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},o,{children:e.jsx(Jd,{children:b()})})),u&&e.jsx(ng,Object.assign({show:i,onOverlayClick:g},{children:e.jsx(WI,Object.assign({onClose:g},{children:e.jsx(VI,{children:b()})}))}))]})},KI=K.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${Qs.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${Qs.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,qI=K.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,XI=K.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Vs["bg-primary-subtle"]:Vs["bg-disabled"])(e)};\n        `}};
`,GI=K.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Vs["text-primary"]:Vs["text-disabled"])(e)};`}};
`,ZI=K.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Vs.text};
`,QI=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var JI=function(e){return function(t){return null==e?void 0:e[t]}},eA=JI({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tA=qo,rA=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nA=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var iA=function(e){return(e=tA(e))&&e.replace(rA,eA).replace(nA,"")},aA=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var oA=function(e){return e.match(aA)||[]},sA=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var lA=function(e){return sA.test(e)},cA="\\ud800-\\udfff",dA="\\u2700-\\u27bf",uA="a-z\\xdf-\\xf6\\xf8-\\xff",fA="A-Z\\xc0-\\xd6\\xd8-\\xde",hA="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gA="["+hA+"]",pA="\\d+",mA="["+dA+"]",bA="["+uA+"]",yA="[^"+cA+hA+pA+dA+uA+fA+"]",vA="(?:\\ud83c[\\udde6-\\uddff]){2}",xA="[\\ud800-\\udbff][\\udc00-\\udfff]",$A="["+fA+"]",wA="(?:"+bA+"|"+yA+")",jA="(?:"+$A+"|"+yA+")",CA="(?:['’](?:d|ll|m|re|s|t|ve))?",SA="(?:['’](?:D|LL|M|RE|S|T|VE))?",kA="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",OA="[\\ufe0e\\ufe0f]?",DA=OA+kA+("(?:\\u200d(?:"+["[^"+cA+"]",vA,xA].join("|")+")"+OA+kA+")*"),EA="(?:"+[mA,vA,xA].join("|")+")"+DA,TA=RegExp([$A+"?"+bA+"+"+CA+"(?="+[gA,$A,"$"].join("|")+")",jA+"+"+SA+"(?="+[gA,$A+wA,"$"].join("|")+")",$A+"?"+wA+"+"+CA,$A+"+"+SA,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pA,EA].join("|"),"g");var FA=oA,_A=lA,MA=qo,IA=function(e){return e.match(TA)||[]};var AA=qk,BA=iA,RA=function(e,t,r){return e=MA(e),void 0===(t=r?void 0:t)?_A(e)?IA(e):FA(e):e.match(t)||[]},PA=RegExp("['’]","g");var zA=Ti(function(e){return function(t){return AA(RA(BA(t).replace(PA,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const LA=K.default.div`
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
`,NA=K.default(u.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Vs["icon-disabled-subtle"](e):Vs["icon-subtle"](e)};
    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
`,WA=K.default(u.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Vs["icon-selected-disabled"](e):Vs["icon-selected"](e)};

    transition: ${Ks["duration-150"]} ${Ks["ease-default"]};
`,HA=K.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${NA}, &:hover + ${WA} {
        color: ${e=>!e.disabled&&Vs["icon-hover"](e)};
    }
`,YA=K.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,VA=K.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    background-color: ${Vs["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,UA=K.default(VA)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Qs.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,KA=K.default(VA)`
    display: none;
    visibility: hidden;
    ${Qs.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,qA=K.default(Di.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Vs["bg-primary-subtlest"]};
    border-top-right-radius: ${Gs.md};
    border-bottom-right-radius: ${Gs.md};
    border: ${qs["width-010"]} ${qs.solid} ${Vs.border};

    ${e=>e.$showDrawer?i.css`
                  box-shadow: 0 0 4px
                      rgb(from ${Vs.Primitive["neutral-20"]} r g b / 25%);
              `:i.css`
                  border: 0;
                  padding: 0;
              `};
`,XA=K.default.li`
    width: 100%;
`,GA=K.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${Gs.md};
    color: ${Vs["icon-primary"]};
    transition: ${Ks["duration-250"]} ${Ks["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,ZA=K.default(exports.Typography.BodyXS)`
    ${xf(2)}
    margin-top: 0.25rem;
    transition: ${Ks["duration-250"]} ${Ks["ease-default"]};
`,QA=K.default(vf)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${GA} {
            background-color: ${Vs["bg-hover"]};
        }

        ${ZA} {
            ${Us["body-xs-semibold"]}
            color: ${Vs["text-hover"]};
        }
    }

    ${e=>e.$highlight&&i.css`
            ${GA} {
                background-color: ${Vs["bg-hover"]};
            }

            ${ZA} {
                ${Us["body-xs-semibold"]}
                color: ${Vs["text-selected"]};
            }
        `}
`,JA=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),eB=K.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,tB=K.default.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Vs.border};
`,rB=K.default(Di.li)``,nB=K.default(vf)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Gs.md};

    ${Us["body-md-semibold"]}
    color: ${Vs.text};

    ${e=>e.$noChildren?i.css`
                  :hover,
                  :focus {
                      background: ${Vs["bg-hover"]};
                      color: ${Vs["text-hover"]};
                  }
              `:i.css`
                  :hover,
                  :focus {
                      background: ${Vs["bg-hover-strong"]};
                  }
              `}
`,iB=K.default(Di.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,aB=K.default(n.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${Vs.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${Ks["duration-150"]} ${Ks["ease-default"]};
`,oB=K.default.span`
    ${xf(2)}
    text-align: left;
`,sB=K.default(Di.ul)``,lB=K.default.li``,cB=K.default(vf)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Gs.md};

    ${Us["body-md-regular"]}
    color: ${Vs.text};
    ${xf(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${Vs["bg-hover"]};
        color: ${Vs["text-hover"]};
    }
`,dB=Object.assign((r=>{var{fixed:n=!0,children:i}=r,a=X(r,["fixed","children"]);const o=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,f]=t.useState(void 0),[h,g]=t.useState(!1),p=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:f})),[s,c,u,l,d,f]),m=di({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return zc("click",(e=>{o.current&&!o.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{g(c&&!!c.content||s&&!!s.content)}),[s,c]),e.jsx(JA.Provider,Object.assign({value:p},{children:e.jsxs(YA,Object.assign({$fixed:n},a,{ref:o,onMouseLeave:()=>{l(void 0)}},{children:[e.jsx(UA,{children:i}),e.jsx(qA,Object.assign({style:m,$showDrawer:h,"data-testid":"sidenav-drawer"},{children:s&&s.content||c&&c.content})),e.jsx(KA,{})]}))}))}),{Group:t=>{var{separator:r,children:n}=t,i=X(t,["separator","children"]);return e.jsxs(eB,Object.assign({},i,{children:[n,r&&e.jsx(tB,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:a,onClick:o}=r,s=X(r,["children","icon","title","onClick"]);const l=s.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:g}=t.useContext(JA);t.useEffect((()=>{s.selected&&g({itemId:l,content:void 0})}),[s.selected]);return e.jsx(XA,{children:e.jsxs(QA,Object.assign({type:"button",onClick:()=>{h((()=>{if(n&&u)return d||u.itemId})()),f({itemId:l,content:n}),g({itemId:l,content:n}),o&&!n&&o(l)},onMouseEnter:()=>{f({itemId:l,content:n})}},s,{$highlight:u&&u.itemId===l||c&&c.itemId===l},{children:[e.jsx(GA,{children:i}),e.jsx(ZA,{children:a})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:a,children:o}=r,s=X(r,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:g,setCurrentItem:p}=t.useContext(JA),m=di({from:{opacity:0},to:{opacity:1}}),b=qe(),y=b.ref,v=di({height:o&&l?b.height:0});return e.jsxs(rB,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m},{children:[e.jsxs(nB,Object.assign({type:"button",onClick:()=>{o?c(!l):(h({itemId:f.itemId,content:void 0}),p(void 0),g(void 0),a&&a(n))},$highlight:d&&l,$noChildren:!o},{children:[e.jsx(oB,{children:i}),o&&e.jsx(aB,{"aria-hidden":!0,$expanded:l})]})),e.jsx(iB,Object.assign({style:v},{children:e.jsx(sB,Object.assign({ref:y},{children:o}))}))]}))},DrawerSubitem:r=>{var{id:n,title:i,onClick:a}=r,o=X(r,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(JA);return e.jsx(lB,Object.assign({},o,{children:e.jsx(cB,Object.assign({type:"button",onClick:()=>{a&&a(n),l({itemId:s.itemId,content:void 0}),c(void 0),d(void 0)}},{children:i}))}))}}),uB=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,fB=K.default.div`
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
    background: ${Vs.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${Gs.md};
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${uB} 0.3s;
            `}}
`,hB=K.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,gB=K.default(tl)`
    padding: 0;
`,pB=K.default(m.CrossIcon)`
    color: ${Vs.icon};
    height: 1.25rem;
    width: 1.25rem;
`,mB=K.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,bB=K.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${Qs.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,yB=K.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,vB=K.default.div`
    max-width: 30%;
`,xB=K.default(Ol.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Us["body-xs-semibold"]}
    }
`,$B=K.default(exports.Typography.BodySM)`
    font-weight: ${Us.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${Qs.MaxWidth.xs} {
        ${Us["body-xs-bold"]}
    }
`,wB=K.default(exports.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,jB=K.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,CB=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,SB=K.default(y.StarFillIcon)`
    ${CB}
`,kB=K.default(W.StarHalfIcon)`
    ${CB}
`,OB=K.default(b.StarIcon)`
    ${CB}
`,DB="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",EB="smart-app-banner";const TB=V.default.forwardRef((function(t,r){const{className:n,show:i,href:a,content:o,offset:s=0,icon:l=DB,animated:c=!1,onDismiss:d,onClick:u}=t,{title:f,message:h,buttonLabel:g,buttonAriaLabel:p,numberOfStars:m}=o,b=e=>{e.stopPropagation(),window.open(a,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(fB,Object.assign({ref:r,$isAnimated:c,$offset:s,className:n},{children:[e.jsx(hB,Object.assign({onClick:d,id:`${EB}-dismiss`,"data-testid":`${EB}-dismiss-container`},{children:e.jsx(gB,Object.assign({"aria-label":"Dismiss"},{children:e.jsx(pB,{})}))})),e.jsxs(mB,Object.assign({onClick:b,id:`${EB}-proceed`,"data-testid":`${EB}-proceed-container`},{children:[e.jsx(yB,{src:l,alt:"lifesg-app-icon"}),e.jsxs(bB,{children:[e.jsx($B,{children:f}),e.jsx(wB,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],r=m-Math.floor(m)>=.4;for(let r=0;r<Math.floor(m);r++)t.push(e.jsx(SB,{},`star${r}`));if(r&&t.push(e.jsx(kB,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e.jsx(OB,{},`emptystar${n}`))}return e.jsx(jB,{children:t.slice(0,5)})})()]}),e.jsx(vB,{children:e.jsx(xB,Object.assign({type:"button",onClick:b,"aria-label":p},{children:g}))})]}))]}))})})),FB=V.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),_B=K.default.div`
    position: relative;
    width: 100%;
`,MB=K.default.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `,i.css`
            ${Qs.MaxWidth.lg} {
                ${t}
            }
        `}};
`,IB=K.default.div`
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
`,AB=K.default(tl)`
    display: none;

    ${Qs.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?i.css`
                    justify-content: left;
                    padding-left: ${Xs["spacing-8"]};
                `:i.css`
                    justify-content: right;
                    padding-right: ${Xs["spacing-8"]};
                `}

        svg {
            color: ${Vs.icon};
        }
    }
`,BB=t.forwardRef(((r,n)=>{var{children:i,fadeColor:a,fadePosition:o="both",showIndicator:s=!1,onResize:l}=r,c=X(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===o||"both"===o),[f,p]=t.useState("right"===o||"both"===o),m=t.useRef(null),b=t.useRef(null),y=_u(v,50);function v(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(p(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(p(!1),u(!1))}function x(){v(),l&&l({content:b.current,wrapper:m.current})}qe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(n,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return v(),e&&e.addEventListener("scroll",y),()=>{e&&e.removeEventListener("scroll",y)}}),[]);return e.jsxs(_B,Object.assign({ref:m},c,{children:[e.jsx(IB,Object.assign({ref:b},{children:i})),(()=>{let t;return t=Array.isArray(a)&&a.length>0?{left:a,right:a}:a||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(MB,Object.assign({$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e.jsx(AB,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e.jsx(g.ChevronLeftIcon,{})}))})),f&&e.jsx(MB,Object.assign({$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e.jsx(AB,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e.jsx(h.ChevronRightIcon,{})}))}))]})})()]}))})),RB=K.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`,PB=K.default.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: ${qs["width-040"]} ${qs.solid} ${Vs.border};

    ${e=>{if(e.$active)return i.css`
                border-color: ${Vs["border-primary"]};
            `}}

    ${Qs.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,zB=K.default.button`
    position: relative;
    padding: ${Xs["spacing-16"]} ${Xs["spacing-16"]}
        ${Xs["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,LB=K.default(exports.Typography.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Vs["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,NB=K.default(exports.Typography.BodyBL)`
    color: ${Vs["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,WB=K.default(BB)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Xs["spacing-4"]};
    }
`,HB=({controlledMode:r,"data-testid":n,onTabClick:a})=>{const{setCurrentActiveIndex:o,currentActiveIndex:s,tabLinks:l}=t.useContext(FB),c=i.useTheme(),d=Zs["md-max"]({theme:c}),u=tc.useMediaQuery({maxWidth:d}),f=Zs["lg-max"]({theme:c}),h=t.useRef(null),g=e=>t=>{t.preventDefault(),r||o(e),a&&a(l[e].title,e)},p=e=>u&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(WB,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=f&&h&&(e.scrollLeft=h.current.getBoundingClientRect().left)},"data-testid":n},{children:e.jsx(RB,Object.assign({role:"tablist"},{children:l.map(((t,r)=>{const i=s===r;return e.jsx(PB,Object.assign({role:"none",$active:i,ref:i?h:null},{children:e.jsxs(zB,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:g(r),"data-testid":`${n}-link-${r}`},{children:[e.jsx(LB,Object.assign({$active:i,weight:"regular"},{children:p(t.title)})),e.jsx(NB,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:p(t.title)}))]}))}),r)}))}))}))},YB=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,VB=Object.assign((r=>{var{children:n,currentActive:i,initialActive:a=0,onTabClick:o,"data-testid":s}=r,l=X(r,["children","currentActive","initialActive","onTabClick","data-testid"]);const[c,d]=t.useState(i||a),[u,f]=t.useState([]);t.useEffect((()=>{const e=t.Children.toArray(n).filter(Boolean);h(e)}),[n]),t.useEffect((()=>{"number"==typeof i&&d(i)}),[i]);const h=e=>{const t=e.map((e=>({title:e.props.title})));f(t)};return e.jsx(YB,Object.assign({"data-testid":s},l,{children:e.jsxs(FB.Provider,Object.assign({value:{tabLinks:u,currentActiveIndex:c,setCurrentActiveIndex:d}},{children:[e.jsx(HB,{controlledMode:"number"==typeof i,onTabClick:o,"data-testid":`${s}-tabs`}),t.Children.toArray(n).filter(Boolean).map(((e,r)=>t.cloneElement(e,{key:r,index:r})))]}))}))}),{Item:r=>{var{index:n,children:i}=r,a=X(r,["index","children"]);const{currentActiveIndex:o}=t.useContext(FB);return o===n?e.jsx("div",Object.assign({role:"tabpanel"},a,{children:i})):null}}),UB=K.default.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Us["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,a,o;if("solid"===e.$type)switch(n=Vs["text-inverse"],e.$color){case"grey":t=Vs["bg-inverse-subtler"],a=Vs["bg-inverse-hover"];break;case"green":t=Vs["bg-success-strong"],a=Vs["bg-success-strong-hover"];break;case"yellow":t=Vs["bg-warning-strong"],a=Vs["bg-warning-strong-hover"];break;case"red":t=Vs["bg-error-strong"],a=Vs["bg-error-strong-hover"];break;case"blue":t=Vs["bg-info-strong"],a=Vs["bg-info-strong-hover"];break;default:t=Vs["bg-inverse"],a=Vs["bg-inverse-hover"]}else switch(e.$color){case"grey":t=Vs["bg-strong"],r=Vs["border-strong"],n=Vs["text-subtle"],a=Vs["bg-hover-neutral-strong"];break;case"green":t=Vs["bg-success"],r=Vs["border-success"],n=Vs["text-success"],a=Vs["bg-success-hover"];break;case"yellow":t=Vs["bg-warning"],r=Vs["border-warning"],n=Vs["text-warning"],a=Vs["bg-warning-hover"];break;case"red":t=Vs["bg-error"],r=Vs["border-error"],n=Vs["text-error"],a=Vs["bg-error-hover"];break;case"blue":t=Vs["bg-info"],r=Vs["border-info"],n=Vs["text-info"],a=Vs["bg-info-hover"];break;default:t=Vs.bg,r=Vs.border,n=Vs.text,a=Vs["bg-hover-neutral"]}return i.css`
            background: ${t};
            border: ${qs["width-010"]} ${qs.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&a&&`background: ${a(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${Qs.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${Us["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,KB=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var qB;mc.extend(yc),function(e){e.formatHourlyDisplay=e=>mc(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>Ic.getTimeDiffInMinutes(e,t)/15*(r/2)}(qB||(qB={}));const XB=1.25,GB=e=>"minified"===e?12:40,ZB=e=>"minified"===e?12:40,QB=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,JB=K.default(tl)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Vs.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${Vs.Primitive["neutral-50"]} r g b / 50%);
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
`,eR=K.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Vs["icon-primary"]};
`,tR=K.default(g.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Vs["icon-primary"]};
`,rR=K.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+ZB(e)}px`};
`,nR=K.default.div`
    position: relative;
    white-space: nowrap;
    height: ${XB}rem;
`,iR=K.default.div`
    display: flex;
    white-space: nowrap;
`,aR=K.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${GB(e)}px`};
    position: relative;
    border-left: ${qs["width-010"]} ${qs.solid}
        ${Vs["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?XB:.625;break;case"minified":t=e.$isLongMarker?XB:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,oR=K.default(exports.Typography.BodyXS)`
    color: ${Vs["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,sR=K.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${ZB(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&i.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Vs["bg-strongest"]} 0px,
                ${e.$bgColor2||Vs["bg-strongest"]} 10px,
                ${e.$bgColor||Vs["bg-stronger"]} 10px,
                ${e.$bgColor||Vs["bg-stronger"]} 20px
            );
        `}
`,lR=K.default.div`
    position: absolute;
    top: ${XB}rem;
    height: ${({$variant:e})=>`${ZB(e)}px`};
    z-index: 1;
    border-right: ${qs["width-010"]} ${qs.solid}
        ${Vs["border-stronger"]};
`,cR=K.default(exports.Typography.BodyXS)`
    color: ${e=>e.$color||Vs.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,dR=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Xs["spacing-8"]};
    flex: 1;
`,uR=K.default(exports.Typography.BodyXS)`
    ${e=>e.$disabled&&i.css`
            color: ${Vs["text-disabled-subtlest"]};
        `}
`,fR=K.default.div`
    grid-column: 2 / -1;
    display: flex;
`,hR=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Xs["spacing-4"]};
`,gR=K.default(Di.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,pR=K.default.div`
    display: flex;
    gap: ${Xs["spacing-4"]};
    transition: all ${Ks["duration-250"]} ${Ks["ease-default"]};
    overflow: hidden;
`,mR=K.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Xs["spacing-4"]};
    width: 1.375rem;
    transition: all ${Ks["duration-250"]} ${Ks["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,bR=K.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,yR=K.default.div`
    ${Us["body-xs-bold"]}
    color: ${Vs["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${Us.Spec["body-size-sm"]};
    }
`,vR=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Xs["spacing-4"]};
`,xR=K.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${Xs["spacing-8"]};
`,$R=K.default(Ol.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${Xs["spacing-8"]};
    }
`,wR=K.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${Ks["duration-250"]} ${Ks["ease-default"]};
`,jR=K.default(sR)`
    ${e=>{if("vertical"===e.$type)return i.css`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${Gs.xs};
            `}}

    ${e=>e.$halfFill?i.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${Vs["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||Vs["bg-strongest"]} 0px,\n                            ${e.$bgColor2||Vs["bg-strongest"]} 10px,\n                            ${e.$bgColor||Vs["bg-stronger"]} 10px,\n                            ${e.$bgColor||Vs["bg-stronger"]} 20px\n                        )`};
            `:i.css`
                background-color: ${e.$bgColor};
            `}
`;var CR=Zi;var SR=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var a=e[n],o=t(a);if(null!=o&&(void 0===s?o==o&&!CR(o):r(o,s)))var s=o,l=a}return l};var kR=SR,OR=Aj,DR=function(e,t){return e<t};var ER=Ti((function(e,t){return e&&e.length?kR(e,OR(t),DR):void 0}));var TR=SR,FR=function(e,t){return e>t},_R=Aj;var MR=Ti((function(e,t){return e&&e.length?TR(e,_R(t),FR):void 0}));const IR=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:a,minDate:o,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:f=30,variant:h="flexible",enableSelection:g=!0,onSlotClick:p})=>{var m,b,y,v;const x="YYYY-MM-DD",[$,w]=t.useState(!1),[j,C]=t.useState(),S=t.useMemo((()=>Dc.generateDaysForCurrentWeek(r)),[r]),k=Object.values(null!=u?u:{}).flat(),O=null!==(b=null!=l?l:null===(m=ER(k,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",D=null!==(v=null!=c?c:null===(y=MR(k,"endTime"))||void 0===y?void 0:y.endTime)&&void 0!==v?v:"24:00",E=Math.ceil(Ic.getTimeDiffInMinutes(O,D)/f),{height:T,ref:F}=qe(),_=d?T<d||$?T:d:T,M=di({height:_}),I=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,r])=>{const n=function(e){const t=Array(E).fill({});return e.forEach((e=>{const r=Math.max(0,Ic.getTimeDiffInMinutes(O,e.startTime)/f),n=Math.min(E,Ic.getTimeDiffInMinutes(O,e.endTime)/f),i=Math.ceil(n)-Math.floor(r);switch(h){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let a=0;a<i;a++){const o=Ic.addMinutesToTime(O,Math.floor(r+a)*f),s=Ic.addMinutesToTime(o,f);let l;_k(t[Math.floor(r+a)])?0===a&&r%1!=0?l="top":a===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let a=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return _k(t)&&_k(r)?e:[...e,t]}),[{}]);a<e.length;){if(_k(e[a])){const o=null!==(r=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:O,s=null!==(i=null===(n=e[a+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:D;if(o!==s){const t=Ic.getTimeDiffInMinutes(o,s)/f;e[a]=Object.assign(Object.assign({},z(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)_k(e[a])?(e[a]=z(a),a++):a+=e[a].cellLength}return e.filter((e=>!_k(e)&&e.cellLength>0))}(n)})),e}return{}}),[u]),A=e=>{C(e)},B=()=>{C(void 0)},R=e=>{e.preventDefault(),w((e=>!e))},P=e=>{var t;const r=Dc.isWithinRange(e,o?mc(o):void 0,s?mc(s):void 0),i=null!==(t=n&&n.includes(e.format(x)))&&void 0!==t&&t;return!r||i};function z(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:Vs["bg-stronger"]},cellLength:t}}return e.jsxs(hR,{children:[e.jsx(fR,{children:S.map(((t,r)=>{const n=(e=>{const t=e.format(x),r=P(e),n={},a=g&&!r;r&&(n.disabled=!0),n.interactive=g?a:null;const o=a&&j&&e.isSame(j,"day"),s=[i].includes(t);return s&&o?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):o&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e.jsx(zd,Object.assign({date:t,calendarDate:mc(i),onSelect:()=>{((e,t)=>{!t&&g&&a(e)})(t,!n.interactive)},onHover:A,onHoverEnd:B},n),`day-${r}`)}))}),e.jsx(fR,{children:S.map(((t,r)=>e.jsx(dR,{children:e.jsx(uR,Object.assign({weight:"semibold",$disabled:P(t)},{children:mc(t).format("ddd")}))},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=mc(O,"HH:mm").add(4*e*f,"minutes"),n=r.format("h"),i=r.format("mm"),a=r.format("a");let o=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==a||"00"!==i||(o+=` ${a}`,t=!0),o};return e.jsx(mR,Object.assign({$height:_},{children:Array(Math.ceil(E/4)).fill(void 0).map(((t,n)=>e.jsx(bR,{children:e.jsx(yR,{children:r(n)})},`time-${n}`)))}))})(),e.jsx(gR,Object.assign({style:M},{children:e.jsx(pR,Object.assign({ref:F},{children:S.map(((t,r)=>{var n;const i=t.format(x),a=null!==(n=I[i])&&void 0!==n?n:Array("flexible"===h?E:1).fill(void 0).map(((e,t)=>z(t,"fixed"===h?E:void 0)));return e.jsx(vR,{children:a.map((t=>{const{id:r,clickable:n=!0,styleAttributes:a,cellLength:o,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=a;return e.jsx(jR,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===h?12*o+4*(o-1):12,onClick:()=>n&&((e,t)=>{p&&p(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))}),`week-cell-${r.format(x)}`)})),(()=>{if(d&&F.current&&!(T&&T<d))return e.jsx(xR,{children:e.jsxs($R,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:R},{children:[e.jsx(wR,{$isExpanded:$}),($?"Hide":"Show")+" later times"]}))})})()]})},AR=K.default.div`
    --header-bottom-spacing: 0.5rem;

    ${Qs.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,BR="YYYY-MM-DD",RR=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,PR=K.default.div`
    ${Us["body-xs-semibold"]}
    color:${Vs.text};

    ${e=>e.$disabled&&i.css`
            color: ${Vs["text-disabled-subtlest"]};
        `};
`,zR=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,LR=K.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,NR=K.default.div`
    ${Us["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Vs.text};
    span {
        display: block;
    }
`,WR=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;mc.extend(xc);const HR="YYYY-MM-DD",YR={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:Vs["bg-stronger"],backgroundColor2:Vs["bg-strongest"]}},VR=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:a,minDate:o,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>Dc.generateDaysForCurrentWeek(r)),[r]),[f,h]=t.useState(),g=e=>{h(e)},p=()=>{h(void 0)},m=e=>{const t=e.format(HR),r=(e=>{const t=Dc.isWithinRange(e,o?mc(o):void 0,s?mc(s):void 0),r=n&&n.includes(e.format(HR));return!t||r})(e),a=c&&!r,l=a&&f&&e.isSame(f,"day"),d=[i].includes(t),u={labelType:"available",interactive:c?a:null};return r&&(u.disabled=!0,u.labelType="unavailable"),d&&l?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):d?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):l&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return e.jsxs(zR,{children:[u.map(((t,r)=>{const n=m(t);return e.jsxs(RR,{children:[e.jsx(zd,Object.assign({date:t,calendarDate:mc(i),onSelect:()=>{((e,t)=>{!t&&c&&a(e)})(t,!n.interactive)},onHover:g,onHoverEnd:p},n),`day-${r}`),e.jsx(PR,Object.assign({$disabled:n.disabled},{children:mc(t).format("ddd")}))]},`week-day-${r}`)})),e.jsx(LR,{children:u.map(((t,r)=>{const n=t.format(HR),i=l&&(l[n]?l[n]:[YR]);return e.jsx(WR,{children:i&&i.map((t=>{const{id:r,startTime:i,endTime:a,clickable:o=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(sR,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:f,$clickable:o,onClick:()=>o&&((e,t)=>{d(e,t)})(n,t)},{children:e.jsxs(NR,Object.assign({style:{color:l}},{children:[e.jsx("span",{children:Dc.convertTo12HourFormat(i)}),a&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Dc.convertTo12HourFormat(a)})]}))}),r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(HR)}`)]})},UR=K.default.div`
    --header-bottom-spacing: 0.5rem;

    ${Qs.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,KR="YYYY-MM-DD",qR=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    border: 4px solid ${Vs["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    border: 4px solid ${Vs["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${Vs["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${Vs["icon-success"]};
                    svg {
                        color: ${Vs["icon-inverse"]};
                    }
                `;case"error":return i.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Vs["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,XR=K.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    background-color: ${Vs["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    background-color: ${Vs["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${Vs["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${Vs["icon-success"]};
                `;case"error":return i.css`
                    margin-left: -0.15rem;
                    background-color: ${Vs["icon-error"]};
                `}}}
`,GR=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,ZR=K.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Qs.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${Qs.MaxWidth.sm} {
        grid-column: span 8;
    }
`,QR=K.default(exports.Typography.HeaderSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${Qs.MaxWidth.md} {
        margin-bottom: 1.5rem;
    }
`,JR=K.default(exports.Typography.HeaderXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,eP=K.default.div`
    display: flex;

    :last-of-type ${XR} {
        margin-bottom: 0;
    }
`,tP=K.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,rP=K.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,nP=K.default(bI)`
    padding: 0.125rem 0.5rem;
`,iP=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],aP=252,oP=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,sP=K.default(ph)`
    color: ${Vs.icon};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${oP} 4s linear infinite;
                `}}
    }
`,lP=K.default.div`
    display: flex;
    padding-bottom: ${Xs["spacing-16"]};
    justify-content: space-between;
    gap: ${Xs["spacing-8"]};
`,cP=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Xs["spacing-8"]};
`,dP=K.default(exports.Typography.BodySM)`
    color: ${Vs["text-subtler"]};
`,uP=K.default(vh)`
    width: 400px;
`,fP=t=>{var{selectedDate:r,loading:n,tableContainerRef:i,totalRecords:a,onPreviousDayClick:o,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(lP,{children:[e.jsx(uP,Object.assign({selectedDate:r,loading:n},d,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),o(e)},onCalendarDateSelect:c})),void 0===a?e.jsx(e.Fragment,{}):e.jsxs(cP,{children:[e.jsxs(dP,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[a," results found"]})),l&&e.jsx(sP,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:n,onClick:h,$loading:n},{children:e.jsx(u.RefreshIcon,{})}))]})]})},hP=K.default.div`
    display: flex;
    width: 100%;
`,gP=K.default.div`
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${Vs["border-primary"]};
            `}}
`,pP=K.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,mP=K.default.div`
    width: 2px;
    height: 100%;
`,bP=K.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${Gs.sm};
    box-sizing: border-box;
    padding: ${Xs["spacing-4"]};
    ${({$status:e,$bgColour:t,$isClickable:r})=>{switch(e){case"blocked":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${Vs["bg-stronger"]} 0px 6px,
                        ${Vs["bg-strongest"]} 6px 12px
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
                    background: ${Vs["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return i.css`
                    &:hover {
                        background-color: ${r?Vs["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,yP=K.default(exports.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,vP=K.default(exports.Typography.BodyXS)`
    color: ${Vs["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,xP=V.default.memo((({id:t,startTime:r,endTime:n,title:i,subtitle:a,status:o,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,onClick:u})=>{const f=0===mc(n,"HH:mm").get("minutes"),h=Ic.getTimeDiffInMinutes(r,n)/15*s-2,g=!!u||d&&"click"===d.trigger;return e.jsx((({wrapper:e,children:t})=>d?e(t):t),Object.assign({wrapper:t=>(t=>{const r={position:"bottom-start",rootNode:c,customOffset:d.offset,children:t,trigger:d.trigger,delay:d.delay,popoverContent:d.content};return e.jsx(Fv,Object.assign({},r,{children:t}))})(t)},{children:e.jsx(gP,Object.assign({"data-testid":"block-container",$isOnTheHour:f},{children:e.jsxs(pP,{children:[e.jsxs(bP,Object.assign({$width:h,$status:o,$bgColour:l,$isClickable:g,onClick:e=>{u&&u({id:t,startTime:r,endTime:n,status:o,title:i,subtitle:a,customPopover:d},e)}},{children:[i&&e.jsx(yP,Object.assign({weight:"semibold"},{children:i})),a&&e.jsx(vP,Object.assign({weight:"bold"},{children:a}))]})),e.jsx(mP,{})]})}),"block-container-key")}))})),$P=r=>{var{id:n,timetableMinTime:i,timetableMaxTime:a,rowMinTime:o=i,rowMaxTime:s=a,rowCells:l,rowBarColor:c,intervalWidth:d,containerRef:u,outOfRangeCellPopover:f}=r,h=X(r,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const g=h["data-testid"]||"timetable-row",p=t.useMemo((()=>{const e=[];mc(i,"HH:mm").isBefore(mc(o,"HH:mm"))&&e.push({id:n,startTime:i,endTime:o,status:"blocked",customPopover:f});const t=[...l].sort(((e,t)=>{const r=mc(e.startTime,"HH:mm"),n=mc(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));return t.forEach(((t,r)=>{var i;const{endTime:a}=t;e.push(t);const o=mc((null===(i=l[r+1])||void 0===i?void 0:i.startTime)||s,"HH:mm");let c=mc(a,"HH:mm");for(;c.isBefore(o);)if(d=o,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:n,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:n,startTime:c.format("HH:mm").toString(),endTime:o.format("HH:mm").toString(),status:"disabled"}),c=o;var d})),mc(a,"HH:mm").isAfter(mc(s,"HH:mm"))&&e.push({id:n,startTime:s,endTime:a,status:"blocked",customPopover:f}),e}),[n,i,a,o,s,l,f]);return e.jsx(hP,Object.assign({"data-testid":g},h,{children:p.map(((t,r)=>e.jsx(xP,Object.assign({},t,{intervalWidth:d,rowBarColor:c,containerRef:u}),`${r}-row-cell-key`)))}))},wP=K.default.div``,jP=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aP}px auto;
`,CP=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aP}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,SP=K.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${Vs.bg};
    width: ${aP}px;
    z-index: 2;
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Vs.Primitive["neutral-20"]} r g b / 25%);
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
`,kP=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${Vs.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,OP=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${Vs.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Vs.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,DP=K.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${Xs["spacing-4"]};
`,EP=K.default(exports.Typography.BodySM)`
    color: ${Vs["text-subtler"]};
`,TP=K.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,FP=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${Vs.bg};
    width: ${aP}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${Xs["spacing-16"]} 0 ${Xs["spacing-32"]};
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
    border-left: ${qs["width-010"]} ${qs.solid}
        ${Vs["border-primary"]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Vs.Primitive["neutral-20"]} r g b / 25%);
            `:i.css`
                box-shadow: inset -0.5px 0px ${Vs["border-primary"]};
            `};
`,_P=K.default(exports.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Vs["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,MP=K.default(exports.Typography.BodyXS)`
    display: inline-flex;
    gap: ${Xs["spacing-4"]};
    align-items: center;
    color: ${Vs["text-subtler"]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,IP=K.default(Gl)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,AP=K.default(uf)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Xs["spacing-72"]} 0;
`,BP=K.default.div`
    display: flex;
    border-bottom: ${qs["width-010"]} ${qs.solid} ${Vs.border};
`,RP=K.default.div`
    border-right: ${qs["width-005"]} ${qs.solid}
        ${Vs["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${Xs["spacing-20"]} ${Xs["spacing-12"]};
`,PP=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,zP=K.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Vs.Primitive["neutral-95"]} 8%,
        ${Vs.Primitive["neutral-100"]} 18%,
        ${Vs.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${PP} 1.5s forwards infinite;
`,LP=K.default(Fv)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,NP=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:Vs[t.Background],Border:Vs[t.Border],Text:Vs[t.Text],Icon:Vs[t.Icon]}},WP=K.default(Di.div)`
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

    ${Qs.MaxWidth.lg} {
        left: 0;
    }

    ${e=>i.css`
            background: ${NP(e).Background};
            border: 1px solid ${NP(e).Border};
            color: ${NP(e).Text};
        `};
`,HP=K.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${Qs.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,YP=K.default.div`
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
                color: ${NP(e).Icon};
            }
        `};
`,VP=K.default.div`
    display: flex;
    flex-direction: column;
`,UP=K.default(exports.Typography.HeaderXS)`
    display: flex;

    ${e=>i.css`
            color: ${NP(e).Text};
        `}
`,KP=K.default.div`
    ${e=>i.css`
            p {
                color: ${NP(e).Text};
            }
        `}
`,qP=K.default(Ol.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${Qs.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,XP=K.default(tl)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${NP(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${Qs.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,GP=4e3,ZP=K.default.div`
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

                ${Ah.MaxWidth.mobileL} {
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

                ${Ah.MaxWidth.mobileL} {
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

                ${Ah.MaxWidth.mobileL} {
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

                ${Ah.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${LI.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${LI.Base};
            z-index: -1;
        `}
`,QP=K.default(Jd)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,JP=K.default.div`
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
                        border-color: ${jI.Neutral[8]} transparent
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
                        border-color: transparent ${jI.Neutral[8]}
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
                            ${jI.Neutral[8]};
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
                            ${jI.Neutral[8]} transparent;
                    }
                `}}}
`,ez=K.default.div`
    position: relative;
`,tz=r=>{var{visible:n,position:i="top",children:a}=r,o=X(r,["visible","position","children"]);const s=o["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",Ou(u,300)),()=>{window.removeEventListener("resize",Ou(u,300))})),[]);const u=()=>{f()},f=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(ZP,Object.assign({position:l,"data-testid":s,visible:n,ref:d},o,{children:[e.jsx(QP,{children:"string"==typeof a?e.jsx(exports.V2_Text.BodySmall,{children:a}):a}),e.jsx(JP,{position:l})]}))},rz=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${Qs.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,nz=K.default(wT.Content)`
    background: ${({$background:e})=>e?Vs["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,iz=K.default(exports.Typography.HeaderSM)`
    margin-bottom: 1rem;
    ${rz}
`,az=K.default(exports.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${rz}
`,oz=K.default.div`
    ${rz}
`,sz=K.default.ul`
    ${rz}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Qs.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${Qs.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,lz=V.default.forwardRef(((t,r)=>{var{stretch:n}=t,i=X(t,["stretch"]);return e.jsx(sz,Object.assign({ref:r,$stretch:n},i))})),cz=K.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i.css`
                    grid-column: auto / span 4;
                `;case"full":return i.css`
                    grid-column: auto / span 8;
                `}}}

    ${Qs.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,dz=K.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Vs["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${Us.Spec["body-size-baseline"]};
        height: ${Us.Spec["body-size-baseline"]};
    }
`,uz=K.default.button`
    ${Us["body-baseline-regular"]}
    color: ${Vs.text};
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
`,fz=K.default.span`
    color: ${Vs["text-disabled"]};
`,hz=K.default($l)`
    margin-right: 0.5rem;
    color: ${Vs["text-disabled"]};
`,gz=K.default(j.ExclamationTriangleIcon)`
    color: ${Vs["icon-warning"]};
    margin-right: 0.5rem;
    height: ${Us.Spec["body-size-baseline"]};
    width: ${Us.Spec["body-size-baseline"]};
`,pz=K.default.span`
    color: ${Vs["text-warning"]};
`,mz=K.default.span`
    ${Us["body-baseline-semibold"]}
    color: ${Vs.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,bz=K.default(Nl)`
    margin-top: 0.5rem;
`,yz=({label:r,value:n,displayWidth:i="full",maskState:a,maskLoadingState:o,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:g,onUnmask:p,onTryAgain:m})=>{const[b,y]=t.useState(a);t.useEffect((()=>{y(a)}),[a]);const v=()=>{switch("fail"===o&&m&&m(),b){case"masked":p&&p(),y("unmasked");break;case"unmasked":g&&g(),y("masked")}},x=()=>"string"!=typeof n?n:"masked"===b?Rc.maskValue(n,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):n,j=()=>{switch(o){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(gz,{}),e.jsx(pz,{children:"Error"}),e.jsx(mz,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(hz,{}),e.jsx(fz,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(dz,{children:"masked"===b?e.jsx($.EyeIcon,{"data-testid":"masked-icon"}):e.jsx(w.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(cz,Object.assign({$widthStyle:i},{children:[e.jsx(Nv,{children:r}),"string"!=typeof n?n:b?u?e.jsx(exports.Typography.BodyBL,{children:x()}):e.jsx(uz,Object.assign({"data-testid":"clickable-label",onClick:v,"aria-busy":"loading"===o,"aria-live":"polite",type:"button"},{children:j()})):e.jsx(exports.Typography.BodyBL,{children:n}),f&&e.jsx(bz,Object.assign({sizeType:"small"},f))]}))},vz=Object.assign((t=>{var{items:r,title:n,description:i,topSection:a,bottomSection:o,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:f}=t,h=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const g=e=>()=>{d&&d(e)},p=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(r&&r.length>0){const t=r.map(((t,r)=>e.jsx(yz,Object.assign({},t,{onMask:g(t),onUnmask:p(t),onTryAgain:m(t)}),r)));return e.jsx(sz,Object.assign({$stretch:c},{children:t}))}return null};return e.jsx(nz,Object.assign({$background:l},h,{type:"grid"},{children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx(iz,Object.assign({weight:"semibold",$stretch:c},{children:n})),i&&e.jsx(az,Object.assign({$stretch:c},{children:i})),a&&e.jsx(oz,Object.assign({"data-id":"top-section",$stretch:c},{children:a})),b(),o&&e.jsx(oz,Object.assign({"data-id":"bottom-section",$stretch:c},{children:o}))]})}))}),{ItemSection:lz,Item:yz}),xz={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${jI.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${jI.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${jI.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${jI.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${jI.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${jI.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},$z=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,a=vI(xz,null==i?void 0:i[exports.V2_ThemeContextKeys.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?yI(a,e,i.options.designToken):yI(a,e)},wz={InputBoxShadow:$z("InputBoxShadow"),InputErrorBoxShadow:$z("InputErrorBoxShadow"),ElevationBoxShadow:$z("ElevationBoxShadow"),Table:{Header:$z("Table.Header"),Cell:{Primary:$z("Table.Cell.Primary"),Secondary:$z("Table.Cell.Secondary"),Selected:$z("Table.Cell.Selected"),Hover:$z("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:$z("Button.Danger.BackgroundColor"),Hover:$z("Button.Danger.Hover"),Primary:$z("Button.Danger.Primary"),Border:$z("Button.Danger.Border")}}},jz=V.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(Cz,Object.assign({ref:r,"data-testid":i,$type:a,$stretch:o},s,{children:n}))})),Cz=K.default.div`
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

                ${Ah.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ah.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Ah.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ah.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ah.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,Sz=V.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:a=!1}=t,o=X(t,["children","data-testid","stretch"]);return e.jsx(kz,Object.assign({ref:r,"data-testid":i,$stretch:a},o,{children:n}))})),kz=K.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${Ah.MaxWidth.tablet} {
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
`,Oz=V.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(Sz,Object.assign({ref:r,"data-testid":i,className:a,stretch:s},l,{children:e.jsx(jz,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),Dz={Section:Sz,Container:jz,Content:Oz,ColDiv:Ph};var Ez;exports.RedirectScope=void 0,(Ez=exports.RedirectScope||(exports.RedirectScope={}))[Ez.Subpage=0]="Subpage",Ez[Ez.Domain=1]="Domain";const Tz=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Fz=K.default.ol`
    ${e=>Tz(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Ah.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>AI.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${jI.Neutral[1]};
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
`,_z=K.default.ul`
    ${e=>Tz(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>AI.getTextStyle(e.size,"regular")}
        color: ${jI.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Mz={Ul:t=>{var{size:r="Body",children:n}=t,i=X(t,["size","children"]);return e.jsx(_z,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=X(t,["size","children"]);return e.jsx(Fz,Object.assign({size:r},i,{children:n}))}},Iz={[exports.V2_ThemeContextKeys.colorScheme]:"base",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"},Az={[exports.V2_ThemeContextKeys.colorScheme]:"bookingsg",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"bookingsg"},Bz={[exports.V2_ThemeContextKeys.colorScheme]:"rbs",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"rbs",[exports.V2_ThemeContextKeys.resourceScheme]:"rbs"},Rz={[exports.V2_ThemeContextKeys.colorScheme]:"mylegacy",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"mylegacy"},Pz={[exports.V2_ThemeContextKeys.colorScheme]:"ccube",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"ccube"},zz={[exports.V2_ThemeContextKeys.colorScheme]:"oneservice",[exports.V2_ThemeContextKeys.textStyleScheme]:"oneservice",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"};exports.Accordion=_l,exports.Alert=Nl,exports.BookingSGTheme={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},exports.Border=qs,exports.BoxContainer=r=>{var{children:n,title:a,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,f=X(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,g]=t.useState(!o||s),p=qe(),m=p.ref,b=i.useTheme(),y=Zs["sm-max"]({theme:b}),v=tc.useMediaQuery({maxWidth:y}),x=e=>{e.stopPropagation(),g(!h)},$=di({height:h?p.height:0}),w=()=>o&&e.jsx(fc,Object.assign({onClick:x,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle"},{children:e.jsx(hc,Object.assign({$expanded:h},{children:e.jsx(gc,{"aria-hidden":!0})}))}));return e.jsxs(rc,Object.assign({},f,{children:[e.jsxs(oc,Object.assign({"data-testid":"header",onClick:u&&o&&x,$interactive:u&&o},{children:[e.jsxs(lc,{children:[e.jsx(sc,Object.assign({"data-testid":(null==d?void 0:d.title)||"title"},{children:a})),(()=>{switch(c){case"error":case"warning":return e.jsx(cc,Object.assign({$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`},{children:e.jsx(dc,{})}));default:return null}})(),v&&w()]}),l&&e.jsx(uc,Object.assign({$collapsible:o,"data-testid":"call-to-action-container"},{children:l})),!v&&w()]})),o?e.jsx(nc,Object.assign({style:$,"data-testid":"expandable-container"},{children:e.jsx(ac,Object.assign({ref:m},{children:n}))})):e.jsx(ic,Object.assign({"data-testid":"non-expandable-container"},{children:e.jsx(ac,{children:n})}))]}))},exports.Breadcrumb=r=>{var{links:n,fadeColor:a,fadePosition:o="both",itemStyle:s,id:l}=r,c=X(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[d,u]=t.useState(!1),[f,h]=t.useState(!1),[g,p]=t.useState(!1),m="left"===o||"both"===o,b="right"===o||"both"===o,y=t.useRef(null),v=t.useRef(null),x=i.useTheme(),$=Zs["lg-max"]({theme:x}),w=Pc((()=>{const e=v.current,t=y.current;e&&t&&n&&n.length>1&&window.innerWidth<=$&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),j=Pc((()=>{const e=window.innerWidth<=$;u(e);const t=v.current,r=y.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return h(t.scrollLeft>=1),void p(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);h(!1),p(!1)}));if(zc("resize",j),zc("scroll",j,v.current),Lc((()=>{w(),j()}),[w,j]),qe({onResize:w,targetRef:y,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!n)return null;return e.jsxs(Vc,Object.assign({ref:y,id:l||"breadcrumb"},c,{children:[e.jsx("nav",{children:e.jsx(Uc,Object.assign({ref:v},{children:n.map(((t,r)=>{let i;return t.children?(i=r!==n.length-1&&t.href?e.jsx(Zc,Object.assign({},t,{weight:"semibold"})):e.jsx(Gc,Object.assign({weight:"semibold"},{children:t.children})),e.jsxs(qc,Object.assign({$styleProps:s},{children:[i,r<n.length-1&&e.jsx(Xc,{})]}),r)):null}))}))}),d&&(()=>{let t;return t=Array.isArray(a)&&a.length>0?{left:a,right:a}:a||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[f&&m&&e.jsx(Kc,{$backgroundColor:t.left,$position:"left"}),g&&b&&e.jsx(Kc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Breakpoint=Zs,exports.Button=Ol,exports.ButtonWithIcon=td,exports.CCubeTheme={colourScheme:"ccube",fontScheme:"ccube",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},exports.Calendar=r=>{var{className:n,styleType:i="bordered",value:a,onSelect:o}=r,s=X(r,["className","styleType","value","onSelect"]);const[l,c]=t.useState(a);return t.useEffect((()=>{c(a)}),[a]),e.jsx(Zd,Object.assign({className:n,$hasBorder:"bordered"===i},{children:e.jsx(Xd,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))}))},exports.Card=Jd,exports.Checkbox=lu,exports.Colour=Vs,exports.Component=h_,exports.CountdownTimer=r=>{var{className:n,align:a="right",timer:o,timestamp:s,notifyTimer:l,offset:c,mobileOffset:d,show:u,fixed:f=!0,"data-testid":h,onFinish:g,onNotify:p,onTick:m}=r,b=X(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const y=t.useRef(),v=t.useRef(!1),[x,$]=t.useState(0),[w,j]=t.useState(0),[C,S]=t.useState(0),[k,O]=t.useState(!1),[D]=((e,r,n)=>{const[i,a]=t.useState(e);t.useEffect((()=>{if(!r)return;const t=null!=n?n:Date.now()+1e3*e,i=o(t);return()=>clearTimeout(i)}),[n,r,e]);const o=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,i=Math.max(Math.round(r/1e3),0);if(a(i),0!==i)return setTimeout(t,n>500?n:n+1e3)};return t()};return[i]})(o,k,s),{ref:E,inView:T}=zu({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),F=!f||T,_=D<=l,M=i.useTheme(),I=Zs["sm-max"]({theme:M}),A=tc.useMediaQuery({maxWidth:I});t.useEffect((()=>{O(u)}),[u]),t.useEffect((()=>{0===D?z():D<=l&&(R(),P())}),[D]),t.useEffect((()=>{const e=function(){var e,t;const r=null!==(e=null==c?void 0:c.top)&&void 0!==e?e:168,n=null!==(t=null==d?void 0:d.top)&&void 0!==t?t:80,i=A?n:r;return i}();$(e)}),[A,null==c?void 0:c.top,null==d?void 0:d.top]),t.useEffect((()=>{if(y.current){const e=_u(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[y.current]),t.useEffect((()=>{v.current=!1}),[o,u]);const B=()=>{var e;const t=null===(e=y.current)||void 0===e?void 0:e.getBoundingClientRect();S(t.x),j(t.right)},R=()=>{m&&m(D)},P=()=>{p&&!v.current&&(v.current=!0,p())},z=()=>{O(!1),g&&g()};const L=()=>{const{minutes:t,seconds:r}=Fu.toMinutesSeconds(D),n=1!==t?"mins":"min",i=1!==r?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(Gu,{$warn:_}),e.jsx(qu,{children:"Time left:"}),e.jsxs(Xu,{children:[t," ",n," ",String(r).padStart(2,"0")," ",i]})]})};if(void 0!==typeof window)return k||0===D?e.jsxs(Yu,Object.assign({className:n},b,{children:[e.jsx("div",{ref:E}),e.jsx(Uu,Object.assign({"data-testid":h,"data-id":"countdown-wrapper",ref:y,inert:F?void 0:"",$visible:F,$warn:_},{children:L()})),y.current&&!F&&(()=>{var t,r;const n=null!==(t=null==c?void 0:c.left)&&void 0!==t?t:"left"===a?C:void 0,i=null!==(r=null==c?void 0:c.right)&&void 0!==r?r:"right"===a?Math.floor(document.body.clientWidth-w):void 0;return e.jsx(Ku,Object.assign({"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:_,$top:x,$left:n,$right:i},{children:L()}))})()]})):e.jsx(e.Fragment,{})},exports.DataTable=r=>{var{id:n,headers:i,rows:a,className:o,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:f,disabledIds:h,enableActionBar:g,enableSelectAll:p,enableStickyHeader:m,emptyView:b,actionBarContent:y,renderCustomEmptyView:v,onHeaderClick:x,onSelect:$,onSelectAll:w,onClearSelectionClick:j}=r,C=X(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const S=t.useRef(null),k=t.useRef(null),O=t.useRef(null),D=t.useRef(null),E=t.useRef(null),[T,F]=t.useState(!1),[_,M]=t.useState(!1),[I,A]=t.useState(!1),[B,R]=t.useState(!1),[P,z]=t.useState(!1),{ref:L,inView:N}=zu(),W=t.useCallback((()=>{if(!E.current||!D.current)return;const e=E.current.scrollHeight>E.current.clientHeight;F(e),e?D.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{W()}),[]),qe({onResize:W});zc("scroll",(()=>{requestAnimationFrame((()=>{T?G():Z()})),E.current&&A(E.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[a]);const H=()=>(null==f?void 0:f.length)===a.length,Y=e=>!!(null==f?void 0:f.includes(e)),V=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(C["data-testid"])return`${C["data-testid"]}-${e}`},q=()=>i.length+(d?1:0),G=()=>{if(!E.current)return;const e=E.current.getBoundingClientRect();R(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(S.current&&k.current&&E.current&&D.current&&O.current))return;const e=k.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=S.current.getBoundingClientRect().height-O.current.clientHeight-32,n=Math.min(t,r);D.current.style.transform=`translateY(-${n}px)`}else D.current.style.transform="translateY(0)"},Q=()=>{S.current&&E.current&&z(S.current.clientHeight+(g?56:0)<E.current.clientHeight)},J=t=>{const{fieldKey:r,label:n,clickable:i=!1,style:a}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Ff,Object.assign({"data-testid":K(`header-${r}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(r)),style:a,$isCheckbox:!1},{children:e.jsxs(_f,{children:["string"==typeof n?e.jsx(exports.Typography.BodyBL,Object.assign({weight:"bold"},{children:n})):n,ee(r)]})}),r)},ee=t=>{const r=null==s?void 0:s[t];return r?"asc"===r?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Ff,Object.assign({"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e.jsx(Bf,{children:p&&e.jsx(lu,{checked:H(),indeterminate:f&&0!==f.length&&!H(),onClick:()=>{w&&w(H())}})})})),re=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,a=r.id.toString(),o=r[i],s=`${a}-${i}`;return e.jsx(If,Object.assign({"data-testid":K(`row-${s}`),style:n,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e.jsx(Af,{children:o}):"function"==typeof o?o(r,{isSelected:Y(a)}):o}),s)},ne=t=>e.jsx(If,Object.assign({"data-testid":K(`row-${t}-selection`),$isCheckbox:!0},{children:e.jsx(Bf,{children:e.jsx(lu,{checked:Y(t),onClick:()=>{$&&$(t,!Y(t))},disabled:U(t)})})})),ie=()=>e.jsx(uf,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(Pf,Object.assign({weight:"bold"},{children:b.title})):b.title:e.jsx(Pf,Object.assign({weight:"bold"},{children:"No <items> found"})),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(jf,Object.assign({id:n||"table-wrapper","data-testid":C["data-testid"]||"table",className:o,ref:E,onScroll:()=>{T&&E.current&&M(E.current.scrollTop+E.current.clientHeight>=E.current.scrollHeight)}},{children:[e.jsx(Cf,{children:e.jsxs(Sf,Object.assign({$end:I,$scrollable:T,ref:S,$stickyHeader:m},{children:[e.jsx("thead",Object.assign({ref:O},{children:e.jsxs(Tf,{children:[d&&te(),i.map(J)]})})),e.jsx(kf,Object.assign({$showLastRowBottomBorder:P},{children:"success"===c?!a||a.length<1?e.jsx("tr",{children:e.jsx(zf,Object.assign({colSpan:q()},{children:v?v():ie()}))}):e.jsx(e.Fragment,{children:null==a?void 0:a.map(((t,r)=>e.jsxs(Mf,Object.assign({"data-testid":K(`row-${t.id.toString()}`),$alternating:V(r),$isSelectable:d,$isSelected:Y(t.id.toString())},{children:[d&&ne(t.id.toString()),i.map((e=>re(e,t)))]}),t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",Object.assign({colSpan:q()},{children:e.jsx(Rf,{children:"loading"===c&&e.jsx(Gl,{})})}))})}))]}))}),g&&f&&f.length>0&&(()=>{var t,r,n;return e.jsx(Of,Object.assign({ref:D,$fixed:B,$left:null===(r=null===(t=null==S?void 0:S.current)||void 0===t?void 0:t.getBoundingClientRect())||void 0===r?void 0:r.left,$width:null===(n=null==S?void 0:S.current)||void 0===n?void 0:n.clientWidth},{children:e.jsxs(Ef,Object.assign({$float:(T?!_:!N)||B,$scrollable:T},{children:[e.jsx(exports.Typography.BodyMD,Object.assign({weight:"semibold"},{children:`${f.length} item${f.length>1?"s":""} selected`})),e.jsx(Df,Object.assign({type:"button",onClick:j},{children:"Clear selection"})),y]}))}))})(),e.jsx("div",{ref:e=>{k.current=e,L(e)}})]}))},exports.DateInput=hh,exports.DateNavigator=vh,exports.DateRangeInput=Th,exports.Divider=Wh,exports.Drawer=r=>{var{children:n,heading:i,show:a,onClose:o,onOverlayClick:s}=r,l=X(r,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(a),[u]=t.useState((()=>Bc.generate())),f=t.useRef();t.useEffect((()=>{if(!a){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[a]);return e.jsx(Uh,Object.assign({show:c,enableOverlayClick:!0,onOverlayClick:s},{children:e.jsxs(Xh,Object.assign({$show:a,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{"visibility"===e.propertyName&&a&&f.current.focus()}},l,{children:[e.jsxs(Gh,{children:[e.jsx(Qh,Object.assign({id:u,ref:f,tabIndex:-1,weight:"bold"},{children:i})),e.jsx(Zh,Object.assign({"aria-label":"Close drawer",onClick:o,focusHighlight:!1},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}))]}),e.jsx(Jh,{children:n})]}))}))},exports.ESignature=Dg,exports.ErrorDisplay=uf,exports.FeedbackRating=t=>{const{imgSrc:r,buttonLabel:n,description:i,rating:a,onRatingChange:o,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=r?r:Eg,d=null!=i?i:Fg;return e.jsxs(Ng,Object.assign({},l,{children:[c&&e.jsx(Lg,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(Wg,{children:[e.jsx(exports.Typography.HeaderSM,Object.assign({as:"div",weight:"semibold"},{children:d})),e.jsx(zg,{description:d,rating:a,onRatingChange:o}),e.jsx(Hg,Object.assign({disabled:!a,onClick:s,type:"button"},{children:null!=n?n:Tg}))]})]}))},exports.FileDownload=({id:t,fileItems:r,title:n,description:i,onDownload:a,"data-testid":o,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return e.jsxs(Yg,Object.assign({id:t?`${t}-file-download`:"file-download",className:s,"data-testid":o,$border:"bordered"===l},{children:[(n||i)&&e.jsxs(Vg,{children:[n?"string"==typeof n?e.jsx(Ug,{children:n}):e.jsx(Kg,{children:n}):null,i?"string"==typeof i?e.jsx(qg,{children:i}):e.jsx(Xg,{children:i}):null]}),e.jsx(Gg,{children:r&&r.length>0&&r.map((t=>e.jsx(gp,{fileItem:t,onDownload:c},t.id)))})]}))},exports.FileUpload=({styleType:r="bordered",fileItems:n,title:i,description:a,maxFiles:o,warning:s,className:l,name:c,id:d,"data-testid":u,accept:f,capture:h,multiple:g,disabled:p,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:y=!1,errorMessage:v,readOnly:x,onChange:$,onDelete:w,onEdit:j,onSort:C})=>{const S=t.useRef(),[k,O]=t.useState(),D=()=>!!o&&n.length>=o;return e.jsx(mp.Provider,Object.assign({value:{activeId:k,setActiveId:O}},{children:e.jsxs(Km,Object.assign({ref:S,onChange:e=>{!p&&$&&$(e)},id:d?`${d}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===r,className:l,"data-testid":u,name:c,multiple:g,disabled:p||D()||x},{children:[(i||a)&&e.jsxs(bE,{children:[i?"string"==typeof i?e.jsx(yE,{children:i}):e.jsx(vE,{children:i}):null,a?"string"==typeof a?e.jsx(xE,{children:a}):e.jsx($E,{children:a}):null]}),s&&e.jsx(wE,Object.assign({type:"warning"},{children:s})),e.jsx(mE,{fileItems:n,editableFileItems:y,fileDescriptionMaxLength:b,sortable:m,disabled:p,readOnly:x,onItemDelete:e=>{w&&w(e)},onItemUpdate:e=>{j&&j(e)},onSort:e=>{C&&C(e)}}),v&&e.jsx(kE,Object.assign({type:"error"},{children:v})),!x&&e.jsxs(jE,{children:[e.jsx(CE,Object.assign({type:"button",styleType:"secondary",disabled:!!k||p||D(),onClick:e=>{p||(e.preventDefault(),S.current&&S.current.openFileDialog())}},{children:"Upload files"})),e.jsx(SE,{children:"or drop them here"})]})]}))}))},exports.Filter=sT,exports.Font=Us,exports.Footer=t=>{var{children:r,links:n,lastUpdated:a,disclaimerLinks:o,showDownloadAddon:s,logoSrc:l,copyrightInfo:c,onFooterLinkClick:d,layout:u="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,g=i.useTheme(),p=t=>t.map(((t,r)=>{const n=X(t,["data-options"]);return e.jsx("li",{children:e.jsx(CT,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):d&&(e.preventDefault(),d(t))})(e,t)}))},r)}));return e.jsxs(jT,Object.assign({},f,{children:[(()=>{let t=null;return r||((n||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(OT,Object.assign({"data-testid":"logo-section"},{children:e.jsx("img",{src:l||mT.getFooterLogo(null==g?void 0:g.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==n?void 0:n[0])&&e.jsx(DT,Object.assign({"data-testid":"link-col-1"},{children:p(n[0])}),"link-col-1"),(null==n?void 0:n[1])&&e.jsx(DT,Object.assign({"data-testid":"link-col-2"},{children:p(n[1])}),"link-col-2"),s&&e.jsx(ET,{children:e.jsx(fT,{})})]})),t?e.jsxs(e.Fragment,{children:[e.jsx(kT,Object.assign({type:"grid",stretch:h},{children:t})),e.jsx(ST,{})]}):null)})(),e.jsxs(TT,Object.assign({type:"grid",stretch:h},{children:[e.jsx(FT,{children:(()=>{const t=mT.getDisclaimerLinks(null==g?void 0:g.resourceScheme,o);return Object.keys(t).map((r=>e.jsx(MT,Object.assign({},t[r]),r)))})()},"disclaimer"),e.jsx(_T,{children:e.jsx(exports.Typography.BodyXS,Object.assign({"data-testid":"copyright-text"},{children:c||e.jsxs(e.Fragment,{children:["©"," ",mT.getCopyrightInfo(a,null==g?void 0:g.resourceScheme)]})}))},"copyright")]}))]}))},exports.Form=PD,exports.FullscreenImageCarousel=g_,exports.HistogramSlider=bx,exports.IconButton=ph,exports.ImageButton=m_,exports.Input=jx,exports.InputGroup=BC,exports.InputMultiSelect=Hk,exports.InputNestedMultiSelect=Uk,exports.InputNestedSelect=Kk,exports.InputRangeSelect=mO,exports.InputRangeSlider=ux,exports.InputSelect=bO,exports.InputSlider=CO,exports.Layout=wT,exports.LifeSGTheme=Js,exports.LinkList=r=>{var{items:n,maxShown:i,style:a="default",onItemClick:o}=r,s=X(r,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=n.length),d=i?n.slice(0,i):n,u=i?n.slice(i):[],f=qe(),h=f.ref,g=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):o&&(e.preventDefault(),o(t,e))},p=()=>{c(!l)},m=(t,r,n,i)=>{const o="small"===a?x_:v_;return e.jsxs(e.Fragment,{children:[e.jsxs(j_,{children:[e.jsx(o,Object.assign({"data-testid":`link-title-${t}`,weight:"semibold"},{children:r})),n&&e.jsx(C_,Object.assign({"data-testid":`link-description-${t}`},{children:n})),i]}),e.jsx($_,{})]})},b=di({height:l?f.height:0});return e.jsxs(y_,Object.assign({},s,{children:[d.map(((t,r)=>{const{title:n,description:i,secondaryDescription:a,onClick:o}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(w_,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>g(e,t)},s,{children:m(r,n,i,a)}),`list-item-shown-${r}`)})),u.length>0&&e.jsx(S_,Object.assign({style:b,"data-testid":"minimised-content"},{children:e.jsx(k_,Object.assign({ref:h},{children:u.map(((t,r)=>{const{title:n,description:i,onClick:a,secondaryDescription:o}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(w_,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>g(e,t)},s,{children:m(r,n,i,o)}),`list-item-minimised-${r}`)}))}))})),u.length>0&&e.jsxs(T_,Object.assign({type:"button",onClick:p,"data-testid":"toggle-button",$showMinimised:l},{children:[e.jsx(O_,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:l?"View less":"View more"})),l?e.jsx(E_,{}):e.jsx(D_,{})]}))]}))},exports.LoadingDots=Ul,exports.LoadingDotsSpinner=Gl,exports.LoadingSpinner=r=>e.jsx(Yl,Object.assign({},r,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(Hl,{})},{children:e.jsx(Wl,{})}))})),exports.Markup=__,exports.MaskedInput=GC,exports.Masonry=A_,exports.Masthead=R_,exports.MediaQuery=Qs,exports.Modal=sg,exports.Motion=Ks,exports.MyLegacyTheme={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},exports.NBComponent=YM,exports.Navbar=_M,exports.NavbarHeight=MM,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=KM,exports.OtpInput=r=>{var{id:n,value:i=[],"data-testid":a,className:o,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:f,onCooldownEnd:h}=r,g=X(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const p=null!=l?l:{},{disabled:m,onClick:b,styleType:y="secondary"}=p,v=X(p,["disabled","onClick","styleType"]),x=t.useRef([]),$=t.useRef(u),[w,j]=t.useState(new Array(d).fill("")),[C,S]=t.useState(s),[k,O]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",T),()=>document.removeEventListener("paste",T)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=M();return()=>e()}}),[k]),t.useEffect((()=>{$.current=u}),[u]),t.useEffect((()=>{i.length===d&&j(i)}),[i]);const D=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(F(n)){const t=[...w];t[e]=n.substring(n.length-1),null===(r=x.current[e+1])||void 0===r||r.focus(),j(t),u&&u(t)}},E=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=x.current[e-1])||void 0===r||r.focus()),j(t),u&&u(t)}},T=e=>{const t=e.clipboardData.getData("text"),r=t.split("");t&&F(t,d)?(j(r),$.current&&$.current(r)):e.preventDefault()},F=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*s;return e<k.valueOf()+t},M=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*s,n=Math.ceil((k.valueOf()+r-t)/1e3);S(n),n<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},I=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(GM,Object.assign({id:n,"data-testid":a,className:o},{children:[e.jsx(ZM,{children:w.map(((t,r)=>e.jsx(QM,Object.assign({id:I(r,"otp-input",n),"data-testid":I(r,"otp-input",a),"aria-label":`Enter OTP character ${r+1}`,ref:e=>x.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:D(r),onKeyDown:E(r),autoComplete:"off"},g),r)))}),c&&e.jsx(Wv,{children:c}),e.jsx(JM,Object.assign({styleType:y,type:"button"},v,{onClick:e=>{j(new Array(d).fill("")),_()||(O(new Date),S(s)),b&&b(e)},disabled:m||_()},{children:v.children?v.children:"Resend OTP"+(C?` in ${C} second${C>1?"s":""}`:"")}))]}))},exports.Overlay=Uh,exports.PATheme={colourScheme:"pa",fontScheme:"pa",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"pa"},exports.Pagination=hI,exports.PhoneNumberInput=cO,exports.Pill=bI,exports.Popover=UI,exports.PopoverInline=Av,exports.PopoverTrigger=Fv,exports.PopoverV2=Ev,exports.PredictiveTextInput=fO,exports.ProgressIndicator=t=>{var{steps:r,currentIndex:n,displayExtractor:a,fadeColor:o,fadePosition:s}=t,l=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=i.useTheme(),d=Zs["lg-max"]({theme:c}),u=tc.useMediaQuery({maxWidth:d}),f=e=>a?a(e):e.toString(),h=(e,t)=>zA(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return e.jsxs(KI,Object.assign({},l,{children:[e.jsx(qI,{children:r.map(((t,r)=>{const i=r<=n;return e.jsx(QI,Object.assign({id:h(r,n)},{children:e.jsx(XI,{highlighted:i})}),r)}))}),e.jsx(qI,{children:u?e.jsxs(QI,Object.assign({id:h(n,n)},{children:[e.jsxs(ZI,Object.assign({weight:"semibold",id:`${h(n,n)}-counter`},{children:["Step ",n+1," of ",r.length]})),e.jsx(ZI,Object.assign({weight:"regular",id:`${h(n,n)}-title`},{children:f(r[n])}))]}),n):r.map(((t,r)=>{const i=r<=n,a=r===n,o=a?"bold":"regular";return e.jsx(QI,Object.assign({id:`${h(r,n)}-title`},{children:e.jsx(GI,Object.assign({highlighted:i,weight:o,"aria-current":a},{children:f(t)}))}),r)}))})]}))},exports.RBSTheme={colourScheme:"rbs",fontScheme:"rbs",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},exports.RadioButton=t=>{var{className:r,checked:n,disabled:i,displaySize:a="default",onChange:o}=t,s=X(t,["className","checked","disabled","displaySize","onChange"]);return e.jsxs(LA,Object.assign({$selected:n,$disabled:i,className:r,$displaySize:a,"data-testid":"radio-button"},{children:[e.jsx(HA,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==o||o(e)},checked:n,disabled:i},s)),n?e.jsx(WA,{"data-testid":"radio-checked",$disabled:i}):e.jsx(NA,{"data-testid":"radio-unchecked",$disabled:i})]}))},exports.Radius=Gs,exports.SelectHistogram=jO,exports.Sidenav=dB,exports.SignatureCanvas=kg,exports.SignatureCanvasContainer=Sg,exports.SmartAppBanner=TB,exports.Spacing=Xs,exports.Tab=VB,exports.Tag=t=>{var{type:r,colorType:n="black",children:i,interactive:a=!1,icon:o,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(UB,Object.assign({as:a?"button":"div",$type:r,$color:n,$interactive:a},l,{children:["left"===s&&o,e.jsx(KB,{children:i}),"right"===s&&o]}))},exports.Textarea=TO,exports.TimeRangePicker=OD,exports.TimeSlotBar=({"data-testid":r,className:n,variant:i="default",startTime:a,endTime:o,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[f,h]=t.useState(0),[g,p]=t.useState(0),m=GB(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",y),()=>{e&&e.removeEventListener("scroll",y)}}),[]);const y=()=>{u.current&&h(u.current.scrollLeft)},v=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};qe({onResize:()=>{u.current&&p(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,$=e=>{if(r)return`${r}-${e}`},w=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(QB,Object.assign({className:n},{children:[e.jsxs(rR,Object.assign({"data-testid":r,ref:u,$variant:i},{children:[e.jsx(nR,Object.assign({"data-testid":$("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],r=mc(a,"HH:mm"),n=mc(o,"HH:mm"),s=r.hour()%2==0;for(let a=r;a.isBefore(n);a=a.add(30,"minute")){const r=w(a,s,i);t.push(e.jsx(aR,Object.assign({$isLongMarker:r,$variant:i},{children:r&&e.jsx(oR,Object.assign({weight:"semibold"},{children:qB.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return t})()})),e.jsxs(iR,Object.assign({"data-testid":$("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[d&&(()=>{const{backgroundColor:t,backgroundColor2:r,styleType:n="default"}=d,s=qB.calculateWidth(a,o,m),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(lR,{$variant:i}),e.jsx(sR,{"data-testid":$("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:n,$bgColor:t,$bgColor2:r,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:r,startTime:n,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:g,backgroundColor2:p}=u,b=qB.calculateWidth(n,s,m),y=qB.calculateWidth(a,n,m),v=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(lR,{$variant:i,style:{left:`${y}px`}}),e.jsx(sR,Object.assign({"data-testid":$(`${r}-timeslot`),$width:b,$left:y,$styleType:h,$variant:i,$bgColor:g,$bgColor2:p,$clickable:v,onClick:()=>v&&l(t)},{children:c&&"default"===i&&e.jsx(cR,Object.assign({$slotWidth:b,$color:f,weight:"semibold"},{children:x(b)?"...":c}))})),o!==s&&e.jsx(lR,{$variant:i,style:{left:`${y+b}px`}})]},r)}))]}))]})),e.jsx(e.Fragment,{children:f>0&&e.jsx(JB,Object.assign({"data-testid":$("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{v("left")}},{children:e.jsx(tR,{})}))}),f+g<qB.calculateWidth(a,o,m)?e.jsx(JB,Object.assign({"data-testid":$("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{v("right")}},{children:e.jsx(eR,{})})):e.jsx(e.Fragment,{})]}))},exports.TimeSlotBarWeek=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:f,variant:h,maxVisibleCellHeight:g,showNavigationHeader:p=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:y}=r,v=X(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,$]=t.useState(o),w=t.useRef(),j=t.useRef(void 0);t.useEffect((()=>{$(o)}),[o]);const C=e=>{const t=e.format(BR);$(t),a&&a(t)},S=(e,t)=>{b&&b(e,t)},k=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(BR),lastDayOfWeek:e.endOf("week").format(BR)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(AR,Object.assign({},v,{children:e.jsx(Sd,Object.assign({ref:w,dynamicHeight:!0,initialCalendarDate:Ic.toDayjs(x||y).endOf("week").format(BR),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&mc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&mc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{j.current&&j.current.isSame(e,"week")||k(e),j.current=e},showNavigationHeader:p,minDate:s,maxDate:l,getMonthHeaderLabel:e=>mc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>mc(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e.jsx(IR,{calendarDate:t,disabledDates:n,selectedDate:x,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:C,slots:u,interval:f,variant:h,maxVisibleCellHeight:g,enableSelection:m,onSlotClick:S}))(t)}))}))},exports.TimeSlotWeekView=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=r,g=X(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,m]=t.useState(o),b=t.useRef(),y=t.useRef(void 0);t.useEffect((()=>{m(o)}),[o]);const v=e=>{const t=e.format(KR);m(t),a&&a(t)},x=(e,t)=>{f&&f(e,t)},$=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(KR),lastDayOfWeek:e.endOf("week").format(KR)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(UR,Object.assign({},g,{children:e.jsx(Sd,Object.assign({ref:b,dynamicHeight:!0,initialCalendarDate:Ic.toDayjs(p||h).endOf("week").format(KR),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&mc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&mc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{y.current&&y.current.isSame(e,"week")||$(e),y.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>mc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>mc(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e.jsx(VR,{calendarDate:t,disabledDates:n,selectedDate:p,minDate:s,maxDate:l,onSelect:v,slots:c,enableSelection:u,onSlotClick:x})}))}))},exports.TimeTable=r=>{var{date:n,emptyContentMessage:i,rowData:a,loading:o,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:g,onRefresh:p,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:y}=r,v=X(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=v["data-testid"]||"timetable",$=Fu.roundToNearestHour(s),w=Fu.roundToNearestHour(l,!0),j=Fu.generateHourlyIntervals($,w),C=0===u||XC.isEmpty(a),S=C||a.length===u,k=t.useRef(null),O=t.useRef(null),[D,E]=t.useState(!1),[T,F]=t.useState(!1),[_,M]=t.useState(0),[I,A]=t.useState(!1);t.useEffect((()=>{const e=XC.throttle((()=>{if(k.current&&(E(k.current.scrollLeft>0),F(k.current.scrollTop>0)),I)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!S&&g&&!o&&(A(!0),g())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[S,I,o,g]),t.useEffect((()=>{A(!1)}),[a]);qe({onResize:()=>{if(k.current){const e=Math.ceil(60*j.length/15),t=(k.current.clientWidth-aP)/e;M(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const B=(()=>{let e=0;const t=iP.length;return()=>{const r=iP[e];return e=(e+1)%t,r}})(),R=({wrapper:e,children:t})=>e(t),P=()=>{if(!o&&I)return e.jsx(FP,Object.assign({$isScrolled:D},{children:e.jsx(zP,{})}))},z=()=>{if(!o&&I)return e.jsx(BP,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,r)=>e.jsx(RP,Object.assign({$width:4*_},{children:e.jsx(zP,{})}),`lazy-load-cell-${r}`)))}))};return C?e.jsxs(wP,Object.assign({},v,{"data-testid":x},{children:[e.jsx(fP,{selectedDate:n,loading:o||I,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:p,onCalendarDateSelect:y}),e.jsx(jP,Object.assign({className:"empty-container"},{children:o?e.jsx(IP,{$isEmptyContent:C}):e.jsx(AP,{type:"no-item-found",description:i})}))]})):e.jsxs(wP,Object.assign({},v,{"data-testid":x},{children:[e.jsx(fP,{"data-id":"timetable-date-navigator",selectedDate:n,loading:o||I,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:p,onCalendarDateSelect:y}),e.jsxs(CP,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:o,$allRecordsLoaded:S||!g},{children:[e.jsx(SP,{$isScrolledY:T,$isScrolledX:D}),e.jsx(kP,Object.assign({$numOfRows:a.length,$isScrolled:D,"data-testid":"row-header-column-id"},{children:e.jsxs(e.Fragment,{children:[a.map(((r,n)=>e.jsx(R,Object.assign({wrapper:e=>((e,r)=>{if(!e.rowHeaderPopover)return r;const n={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:r,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(LP,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),r)})(r,e)},{children:e.jsxs(FP,Object.assign({$isScrolled:D},{children:[e.jsx(_P,Object.assign({$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`},{children:r.name})),e.jsx(MP,Object.assign({weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`},{children:r.subtitle}))]}),`${r.id}-row-header`)}),n))),P()]})})),e.jsx(OP,Object.assign({$numOfColumns:j.length,$isScrolled:T},{children:j.map((t=>e.jsx(DP,Object.assign({"data-testid":`${t}-column`},{children:e.jsx(EP,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),o?e.jsx(IP,{$isEmptyContent:C}):e.jsxs(TP,Object.assign({"data-testid":"content-container-id",ref:O,$numOfRows:a.length},{children:[a.map(((t,r)=>e.jsx($P,Object.assign({timetableMinTime:$,timetableMaxTime:w,rowBarColor:B(),intervalWidth:_,containerRef:O},t),`${r}-row-bar`))),z()]}))]}))]}))},exports.Timeline=({items:r,className:n,id:i,title:a,startCol:o,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e.jsx(exports.Typography.BodyMD,Object.assign({className:"timeline-item-content-text"},{children:t})):e.jsx(e.Fragment,{children:t}),f=t=>"string"==typeof t?e.jsx(JR,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e.jsx(e.Fragment,{children:t}),h=e=>e.slice(0,2).map(((e,r)=>t.createElement(nP,Object.assign({},e,{type:e.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),g=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(ZR,Object.assign({className:n,id:i,"data-testid":c,$startCol:o,$colSpan:s},{children:[e.jsx(QR,Object.assign({"data-testid":"timeline-title",weight:"bold"},{children:a})),r.map(((t,r)=>{const{title:n,content:i,statuses:a,variant:o}=t,s=l?`circleindicator${r+1}_div_${l}`:"circleindicator",c=o||(0===r?"current":"upcoming-active");return e.jsxs(eP,{children:[e.jsxs(GR,{children:[e.jsx(qR,Object.assign({"data-testid":s,$variant:c},{children:g(c)})),e.jsx(XR,{$variant:c})]}),e.jsxs(tP,Object.assign({className:"timeline-item-content"},{children:[f(n),a&&e.jsx(rP,{children:h(a)}),d(i)]}))]},`timeline-item-${r}`)}))]}))},exports.Timepicker=ED,exports.Toast=r=>{var{type:n="success",title:a,label:o,autoDismiss:s,autoDismissTime:l=GP,onDismiss:c,fixed:d=!0,actionButton:f}=r,h=X(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[g,p]=t.useState(!1),m=i.useTheme(),b=Zs["lg-max"]({theme:m}),y=tc.useMediaQuery({maxWidth:b});t.useEffect((()=>{p(!0)}),[]),t.useEffect((()=>{if(!s)return;const e=setTimeout((()=>{p(!1)}),l);return()=>clearTimeout(e)}),[s]);const v=di({opacity:g?1:0,transform:g?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:dr.easeInOutQuart,duration:1e3},onRest:()=>{g||null==c||c()}});return e.jsxs(WP,Object.assign({style:v,$type:n,$fixed:d},h,{children:[e.jsxs(HP,{children:[e.jsxs(YP,Object.assign({$type:n},{children:[(()=>{switch(n){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(VP,{children:[a&&(V.default.isValidElement(a)?a:e.jsx(UP,Object.assign({$type:n,weight:"semibold"},{children:a}))),o&&e.jsx(KP,Object.assign({$type:n},{children:V.default.isValidElement(o)?o:a?e.jsx(exports.Typography.BodyMD,{children:o}):e.jsx(exports.Typography.BodyBL,{children:o})}))]})]})),f&&e.jsx(qP,Object.assign({styleType:"light",onClick:f.onClick},{children:f.label}))]}),e.jsx(XP,Object.assign({$type:n,onClick:()=>{p(!1)}},{children:e.jsx(u.CrossIcon,{})}))]}))},exports.Toggle=oD,exports.Tooltip=tz,exports.UneditableSection=vz,exports.UnitNumberInput=BD,exports.V2_BaseTheme=Iz,exports.V2_BookingSGTheme=Az,exports.V2_CCubeTheme=Pz,exports.V2_Color=jI,exports.V2_DesignToken=wz,exports.V2_Layout=Dz,exports.V2_MediaQuery=Ah,exports.V2_MediaWidths=Bh,exports.V2_MyLegacyTheme=Rz,exports.V2_OneServiceTheme=zz,exports.V2_RBSTheme=Bz,exports.V2_TextList=Mz,exports.V2_TextStyle=EI,exports.V2_TextStyleHelper=AI,exports.V2_Transition=LI,exports.__awaiter=G,exports.commonjsGlobal=Ei,exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r},exports.withNotificationBanner=t=>V.default.forwardRef(((r,n)=>e.jsx(YM,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=XM.sanitize(t.content);return e.jsx("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e.jsx(KM.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(r,n)=>i=>{const{onPopoverAppear:a,onPopoverDismiss:o}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=n.trigger||"click",c=s,[d,u]=t.useState(!1),f=t.useRef(),h=tc.useMediaQuery({maxWidth:Mh.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}}),[d]);const g=e=>{f&&!f.current.contains(e.target)&&(d&&u(!1),o&&o())};return e.jsxs(HI,Object.assign({id:"popover-hoc-wrapper",ref:f},{children:[e.jsx(YI,Object.assign({id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!d),!d&&a&&a(),d&&o&&o())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!h&&u(!1)},"aria-label":"popover-button"},{children:e.jsx(r,Object.assign({},c))})),e.jsx(UI,Object.assign({visible:d,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{u(!1)}},{children:n.content}))]}))},exports.withTooltip=(t,r)=>n=>{const{tooltipVisible:i,position:a}=n,o=X(n,["tooltipVisible","position"]);return e.jsxs(ez,{children:[e.jsx(t,Object.assign({},o)),e.jsx(tz,Object.assign({visible:i,position:a},{children:r.content}))]})};
//# sourceMappingURL=index.9ab47b07.js.map
