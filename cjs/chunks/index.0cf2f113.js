"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("react-dom"),n=require("styled-components"),i=require("@lifesg/react-icons/chevron-up"),o=require("@lifesg/react-icons/external"),a=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),d=require("@lifesg/react-icons/i-circle-fill"),c=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),g=require("@lifesg/react-icons/chevron-left"),p=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),C=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),j=require("@lifesg/react-icons/square-fill"),k=require("@lifesg/react-icons/square-tick-fill"),D=require("@lifesg/react-icons/tick"),E=require("@lifesg/react-icons/caret-right"),T=require("@lifesg/react-icons/minus-square-fill"),F=require("@lifesg/react-icons/circle"),O=require("@lifesg/react-icons/circle-dot"),I=require("@lifesg/react-icons/bin"),M=require("@lifesg/react-icons/pencil"),_=require("@lifesg/react-icons/drag-handle"),A=require("@lifesg/react-icons/minus"),B=require("@lifesg/react-icons/plus"),R=require("@lifesg/react-icons/menu"),z=require("@lifesg/react-icons/chevron-2-left"),P=require("@lifesg/react-icons/chevron-2-right"),L=require("@lifesg/react-icons/chevron-line-left"),N=require("@lifesg/react-icons/chevron-line-right"),H=require("@lifesg/react-icons/ellipsis-horizontal"),W=require("@lifesg/react-icons/star-half");function Y(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var U=V(t),K=Y(r),q=Y(n);const X=U.default.createContext(!1);var G=function(e,t){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},G(e,t)};var Z=function(){return Z=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Z.apply(this,arguments)};var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var J=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ee="object"==typeof Q&&Q&&Q.Object===Object&&Q,te="object"==typeof self&&self&&self.Object===Object&&self,re=ee||te||Function("return this")(),ne=re,ie=function(){return ne.Date.now()},oe=/\s/;var ae=function(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t},se=/^\s+/;var le=function(e){return e?e.slice(0,ae(e)+1).replace(se,""):e},de=re.Symbol,ce=de,ue=Object.prototype,fe=ue.hasOwnProperty,he=ue.toString,ge=ce?ce.toStringTag:void 0;var pe=function(e){var t=fe.call(e,ge),r=e[ge];try{e[ge]=void 0;var n=!0}catch(e){}var i=he.call(e);return n&&(t?e[ge]=r:delete e[ge]),i},me=Object.prototype.toString;var be=pe,ve=function(e){return me.call(e)},ye=de?de.toStringTag:void 0;var xe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ye&&ye in Object(e)?be(e):ve(e)},we=function(e){return null!=e&&"object"==typeof e};var $e=le,Ce=J,Se=function(e){return"symbol"==typeof e||we(e)&&"[object Symbol]"==xe(e)},je=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,De=/^0o[0-7]+$/i,Ee=parseInt;var Te=J,Fe=ie,Oe=function(e){if("number"==typeof e)return e;if(Se(e))return NaN;if(Ce(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ce(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=$e(e);var r=ke.test(e);return r||De.test(e)?Ee(e.slice(2),r?2:8):je.test(e)?NaN:+e},Ie=Math.max,Me=Math.min;var _e=function(e,t,r){var n,i,o,a,s,l,d=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,d=t,a=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function p(){var e=Fe();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?Me(r,o-(e-d)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=Fe(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(p,t),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),a}return t=Oe(t)||0,Te(r)&&(c=!!r.leading,o=(u="maxWait"in r)?Ie(Oe(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Fe())},b},Ae=_e,Be=J;var Re=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Be(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ae(e,t,{leading:n,maxWait:t,trailing:i})},ze=function(e,t,r,n){switch(t){case"debounce":return _e(e,r,n);case"throttle":return Re(e,r,n);default:return e}},Pe=function(e){return"function"==typeof e},Le=function(){return"undefined"==typeof window},Ne=function(e){return e instanceof Element||e instanceof HTMLDocument},He=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&Pe(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function n(n){var i=e.call(this,n)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,r=e.observerOptions;if(!Le()){t&&t.current&&(i.targetRef.current=t.current);var n=i.getElement();n&&(i.observableElement&&i.observableElement===n||(i.observableElement=n,i.resizeObserver.observe(n,r)))}},i.getElement=function(){var e=i.props,t=e.querySelector,n=e.targetDomEl;if(Le())return null;if(t)return document.querySelector(t);if(n&&Ne(n))return n;if(i.targetRef&&Ne(i.targetRef.current))return i.targetRef.current;var o=r.findDOMNode(i);if(!o)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},i.createResizeHandler=function(e){var t=i.props,r=t.handleWidth,n=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(n||a){var l=He(s,i.setState.bind(i),n,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,n=t.height;!i.skipOnMount&&!Le()&&l({width:r,height:n}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,r=e.render,n=e.children;return Pe(r)?"renderProp":Pe(n)?"childFunction":t.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var o=n.skipOnMount,a=n.refreshMode,s=n.refreshRate,l=void 0===s?1e3:s,d=n.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=o,i.targetRef=t.createRef(),i.observableElement=null,Le()||(i.resizeHandler=ze(i.createResizeHandler,a,l,d),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}G(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(n,e),n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){Le()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return t.cloneElement(e,d)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return U.createElement(a,null)}}}(t.PureComponent);var We=Le()?t.useEffect:t.useLayoutEffect;function Ye(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,l=e.handleWidth,d=void 0===l||l,c=e.handleHeight,u=void 0===c||c,f=e.targetRef,h=e.observerOptions,g=e.onResize,p=t.useRef(n),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return We((function(){if(!Le()){var e=He(g,w,d,u);v.current=ze((function(t){(d||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!Le()&&e({width:n,height:i}),p.current=!1}))}),i,a,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,a,s,d,u,g,h,b.current]),Z({ref:b},x)}var Ve=Object.defineProperty,Ue={};((e,t)=>{for(var r in t)Ve(e,r,{get:t[r],enumerable:!0})})(Ue,{assign:()=>jt,colors:()=>$t,createStringInterpolator:()=>vt,skipAnimation:()=>Ct,to:()=>yt,willAdvance:()=>St});var Ke=dt(),qe=e=>ot(e,Ke),Xe=dt();qe.write=e=>ot(e,Xe);var Ge=dt();qe.onStart=e=>ot(e,Ge);var Ze=dt();qe.onFrame=e=>ot(e,Ze);var Qe=dt();qe.onFinish=e=>ot(e,Qe);var Je=[];qe.setTimeout=(e,t)=>{const r=qe.now()+t,n=()=>{const e=Je.findIndex((e=>e.cancel==n));~e&&Je.splice(e,1),nt-=~e?1:0},i={time:r,handler:e,cancel:n};return Je.splice(et(r),0,i),nt+=1,at(),i};var et=e=>~(~Je.findIndex((t=>t.time>e))||~Je.length);qe.cancel=e=>{Ge.delete(e),Ze.delete(e),Qe.delete(e),Ke.delete(e),Xe.delete(e)},qe.sync=e=>{it=!0,qe.batchedUpdates(e),it=!1},qe.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,qe.onStart(r)}return n.handler=e,n.cancel=()=>{Ge.delete(r),t=null},n};var tt="undefined"!=typeof window?window.requestAnimationFrame:()=>{};qe.use=e=>tt=e,qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,qe.batchedUpdates=e=>e(),qe.catch=console.error,qe.frameLoop="always",qe.advance=()=>{"demand"!==qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):lt()};var rt=-1,nt=0,it=!1;function ot(e,t){it?(t.delete(e),e(0)):(t.add(e),at())}function at(){rt<0&&(rt=0,"demand"!==qe.frameLoop&&tt(st))}function st(){~rt&&(tt(st),qe.batchedUpdates(lt))}function lt(){const e=rt;rt=qe.now();const t=et(rt);t&&(ct(Je.splice(0,t),(e=>e.handler())),nt-=t),nt?(Ge.flush(),Ke.flush(e?Math.min(64,rt-e):16.667),Ze.flush(),Xe.flush(),Qe.flush()):rt=-1}function dt(){let e=new Set,t=e;return{add(r){nt+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(nt-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,nt-=t.size,ct(t,(t=>t(r)&&e.add(t))),nt+=e.size,t=e)}}}function ct(e,t){e.forEach((e=>{try{t(e)}catch(e){qe.catch(e)}}))}function ut(){}var ft={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ht(e,t){if(ft.arr(e)){if(!ft.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var gt=(e,t)=>e.forEach(t);function pt(e,t,r){if(ft.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var mt=e=>ft.und(e)?[]:ft.arr(e)?e:[e];function bt(e,t){if(e.size){const r=Array.from(e);e.clear(),gt(r,t)}}var vt,yt,xt=(e,...t)=>bt(e,(e=>e(...t))),wt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),$t=null,Ct=!1,St=ut,jt=e=>{e.to&&(yt=e.to),e.now&&(qe.now=e.now),void 0!==e.colors&&($t=e.colors),null!=e.skipAnimation&&(Ct=e.skipAnimation),e.createStringInterpolator&&(vt=e.createStringInterpolator),e.requestAnimationFrame&&qe.use(e.requestAnimationFrame),e.batchedUpdates&&(qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(St=e.willAdvance),e.frameLoop&&(qe.frameLoop=e.frameLoop)},kt=new Set,Dt=[],Et=[],Tt=0,Ft={get idle(){return!kt.size&&!Dt.length},start(e){Tt>e.priority?(kt.add(e),qe.onStart(Ot)):(It(e),qe(_t))},advance:_t,sort(e){if(Tt)qe.onFrame((()=>Ft.sort(e)));else{const t=Dt.indexOf(e);~t&&(Dt.splice(t,1),Mt(e))}},clear(){Dt=[],kt.clear()}};function Ot(){kt.forEach(It),kt.clear(),qe(_t)}function It(e){Dt.includes(e)||Mt(e)}function Mt(e){Dt.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Dt,(t=>t.priority>e.priority)),0,e)}function _t(e){const t=Et;for(let r=0;r<Dt.length;r++){const n=Dt[r];Tt=n.priority,n.idle||(St(n),n.advance(e),n.idle||t.push(n))}return Tt=0,(Et=Dt).length=0,(Dt=t).length>0}var At="[-+]?\\d*\\.?\\d+",Bt=At+"%";function Rt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var zt=new RegExp("rgb"+Rt(At,At,At)),Pt=new RegExp("rgba"+Rt(At,At,At,At)),Lt=new RegExp("hsl"+Rt(At,Bt,Bt)),Nt=new RegExp("hsla"+Rt(At,Bt,Bt,At)),Ht=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yt=/^#([0-9a-fA-F]{6})$/,Vt=/^#([0-9a-fA-F]{8})$/;function Ut(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Kt(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Ut(i,n,e+1/3),a=Ut(i,n,e),s=Ut(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function qt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Xt(e){return(parseFloat(e)%360+360)%360/360}function Gt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Zt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Qt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Yt.exec(e))?parseInt(t[1]+"ff",16)>>>0:$t&&void 0!==$t[e]?$t[e]:(t=zt.exec(e))?(qt(t[1])<<24|qt(t[2])<<16|qt(t[3])<<8|255)>>>0:(t=Pt.exec(e))?(qt(t[1])<<24|qt(t[2])<<16|qt(t[3])<<8|Gt(t[4]))>>>0:(t=Ht.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Vt.exec(e))?parseInt(t[1],16)>>>0:(t=Wt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Lt.exec(e))?(255|Kt(Xt(t[1]),Zt(t[2]),Zt(t[3])))>>>0:(t=Nt.exec(e))?(Kt(Xt(t[1]),Zt(t[2]),Zt(t[3]))|Gt(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Jt=(e,t,r)=>{if(ft.fun(e))return e;if(ft.arr(e))return Jt({range:e,output:t,extrapolate:r});if(ft.str(e.output[0]))return vt(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let d=l?l(e):e;if(d<t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var er=1.70158,tr=1.525*er,rr=er+1,nr=2*Math.PI/3,ir=2*Math.PI/4.5,or=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ar={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>rr*e*e*e-er*e*e,easeOutBack:e=>1+rr*Math.pow(e-1,3)+er*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-tr)/2:(Math.pow(2*e-2,2)*((tr+1)*(2*e-2)+tr)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*nr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*nr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ir)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ir)/2+1,easeInBounce:e=>1-or(1-e),easeOutBounce:or,easeInOutBounce:e=>e<.5?(1-or(1-2*e))/2:(1+or(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},sr=Symbol.for("FluidValue.get"),lr=Symbol.for("FluidValue.observers"),dr=e=>Boolean(e&&e[sr]),cr=e=>e&&e[sr]?e[sr]():e,ur=e=>e[lr]||null;function fr(e,t){const r=e[lr];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var hr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");gr(this,e)}},gr=(e,t)=>vr(e,sr,t);function pr(e,t){if(e[sr]){let r=e[lr];r||vr(e,lr,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function mr(e,t){const r=e[lr];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[lr]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var br,vr=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),yr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,xr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,wr=new RegExp(`(${yr.source})(%|[a-z]+)`,"i"),$r=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Cr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Sr=e=>{const[t,r]=jr(e);if(!t||wt())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Cr.test(r)?Sr(r):r||e},jr=e=>{const t=Cr.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},kr=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Dr=e=>{br||(br=$t?new RegExp(`(${Object.keys($t).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>cr(e).replace(Cr,Sr).replace(xr,Qt).replace(br,Qt))),r=t.map((e=>e.match(yr).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>Jt({...e,output:t})));return e=>{const r=!wr.test(t[0])&&t.find((e=>wr.test(e)))?.replace(yr,"");let n=0;return t[0].replace(yr,(()=>`${i[n++](e)}${r||""}`)).replace($r,kr)}},Er="react-spring: ",Tr=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Er}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Fr=Tr(console.warn);var Or=Tr(console.warn);function Ir(e){return ft.str(e)&&("#"==e[0]||/\d/.test(e)||!wt()&&Cr.test(e)||e in($t||{}))}var Mr=wt()?t.useEffect:t.useLayoutEffect;function _r(){const e=t.useState()[1],r=(()=>{const e=t.useRef(!1);return Mr((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Ar=e=>t.useEffect(e,Br),Br=[];function Rr(e){const r=t.useRef();return t.useEffect((()=>{r.current=e})),r.current}var zr=Symbol.for("Animated:node"),Pr=e=>e&&e[zr],Lr=(e,t)=>{return r=e,n=zr,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Nr=e=>e&&e[zr]&&e[zr].getPayload(),Hr=class{constructor(){Lr(this,this)}getPayload(){return this.payload||[]}},Wr=class extends Hr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ft.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Wr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ft.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ft.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Yr=class extends Wr{constructor(e){super(0),this._string=null,this._toString=Jt({output:[e,e]})}static create(e){return new Yr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ft.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Jt({output:[this.getValue(),e]})),this._value=0,super.reset()}},Vr={dependencies:null},Ur=class extends Hr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return pt(this.source,((r,n)=>{var i;(i=r)&&i[zr]===i?t[n]=r.getValue(e):dr(r)?t[n]=cr(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&gt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return pt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Vr.dependencies&&dr(e)&&Vr.dependencies.add(e);const t=Nr(e);t&&gt(t,(e=>this.add(e)))}},Kr=class extends Ur{constructor(e){super(e)}static create(e){return new Kr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(qr)),!0)}};function qr(e){return(Ir(e)?Yr:Wr).create(e)}function Xr(e){const t=Pr(e);return t?t.constructor:ft.arr(e)?Kr:Ir(e)?Yr:Wr}var Gr=(e,r)=>{const n=!ft.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,o)=>{const a=t.useRef(null),s=n&&t.useCallback((e=>{a.current=function(e,t){e&&(ft.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,d]=function(e,t){const r=new Set;Vr.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ur(e),Vr.dependencies=null,[e,r]}(i,r),c=_r(),u=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,l.getValue(!0)))&&c()},f=new Zr(u,d),h=t.useRef();Mr((()=>(h.current=f,gt(d,(e=>pr(e,f))),()=>{h.current&&(gt(h.current.deps,(e=>mr(e,h.current))),qe.cancel(h.current.update))}))),t.useEffect(u,[]),Ar((()=>()=>{const e=h.current;gt(e.deps,(t=>mr(t,e)))}));const g=r.getComponentProps(l.getValue());return U.createElement(e,{...g,ref:s})}))},Zr=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&qe.write(this.update)}};var Qr=Symbol.for("AnimatedComponent"),Jr=e=>ft.str(e)?e:e&&ft.str(e.displayName)?e.displayName:ft.fun(e)&&e.name||null;function en(e,...t){return ft.fun(e)?e(...t):e}var tn=(e,t)=>!0===e||!!(t&&e&&(ft.fun(e)?e(t):mt(e).includes(t))),rn=(e,t)=>ft.obj(e)?t&&e[t]:e,nn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,on=e=>e,an=(e,t=on)=>{let r=sn;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);ft.und(r)||(n[i]=r)}return n},sn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ln={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function dn(e){const t=function(e){const t={};let r=0;if(pt(e,((e,n)=>{ln[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return pt(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function cn(e){return e=cr(e),ft.arr(e)?e.map(cn):Ir(e)?Ue.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function un(e){return ft.fun(e)||ft.arr(e)&&ft.obj(e[0])}var fn={tension:170,friction:26,mass:1,damping:1,easing:ar.linear,clamp:!1},hn=class{constructor(){this.velocity=0,Object.assign(this,fn)}};function gn(e,t){if(ft.und(t.decay)){const r=!ft.und(t.tension)||!ft.und(t.friction);!r&&ft.und(t.frequency)&&ft.und(t.damping)&&ft.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var pn=[],mn=class{constructor(){this.changed=!1,this.values=pn,this.toValues=null,this.fromValues=pn,this.config=new hn,this.immediate=!1}};function bn(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,d,c=tn(r.cancel??n?.cancel,t);if(c)h();else{ft.und(r.pause)||(i.paused=tn(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||tn(e,t)),l=en(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(d),d.cancel(),l=d.time-qe.now()}function f(){l>0&&!Ue.skipAnimation?(i.delayed=!0,d=qe.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(d)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...r,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var vn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?wn(e.get()):t.every((e=>e.noop))?yn(e.get()):xn(e.get(),t.every((e=>e.finished))),yn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),wn=e=>({value:e,cancelled:!0,finished:!1});function $n(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=an(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const f=new Promise(((e,t)=>(c=e,u=t))),h=e=>{const t=i<=(r.cancelId||0)&&wn(n)||i!==r.asyncId&&xn(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const o=new Sn,a=new jn;return(async()=>{if(Ue.skipAnimation)throw Cn(r),a.result=xn(n,!1),u(a),a;h(o);const s=ft.obj(e)?{...e}:{...t,to:e};s.parentId=i,pt(d,((e,t)=>{ft.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Ue.skipAnimation)return Cn(r),xn(n,!1);try{let t;t=ft.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(c),f]),p=xn(n.get(),!0,!1)}catch(e){if(e instanceof Sn)p=e.result;else{if(!(e instanceof jn))throw e;p=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return ft.fun(a)&&qe.batchedUpdates((()=>{a(p,n,n.item)})),p})():l}function Cn(e,t){bt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Sn=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},jn=class extends Error{constructor(){super("SkipAnimationSignal")}},kn=e=>e instanceof En,Dn=1,En=class extends hr{constructor(){super(...arguments),this.id=Dn++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Pr(this);return e&&e.getValue()}to(...e){return Ue.to(this,e)}interpolate(...e){return Fr(`${Er}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ue.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){fr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ft.sort(this),fr(this,{type:"priority",parent:this,priority:e})}},Tn=Symbol.for("SpringPhase"),Fn=e=>(1&e[Tn])>0,On=e=>(2&e[Tn])>0,In=e=>(4&e[Tn])>0,Mn=(e,t)=>t?e[Tn]|=3:e[Tn]&=-3,_n=(e,t)=>t?e[Tn]|=4:e[Tn]&=-5,An=class extends En{constructor(e,t){if(super(),this.animation=new mn,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ft.und(e)||!ft.und(t)){const r=ft.obj(e)?{...e}:{...t,from:e};ft.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(On(this)||this._state.asyncTo)||In(this)}get goal(){return cr(this.animation.to)}get velocity(){const e=Pr(this);return e instanceof Wr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Fn(this)}get isAnimating(){return On(this)}get isPaused(){return In(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=Nr(n.to);!a&&dr(n.to)&&(i=mt(cr(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==Yr?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=ft.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(ft.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=f,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,n=o.clamp?0:o.bounce,l=!ft.und(n),h=r==d?s.v0>0:r<d;let g,p=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(g=Math.abs(a)>t,g||(c=Math.abs(d-u)<=f,!c));++e){l&&(p=u==d||u>d==h,p&&(a=-a*n,u=d));a+=(1e-6*-o.tension*(u-d)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(d-r),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=Pr(this),l=s.getValue();if(t){const e=cr(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(On(this)){const{to:e,config:t}=this.animation;qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return ft.und(e)?(r=this.queue||[],this.queue=[]):r=[ft.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>vn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Cn(this._state,e&&this._lastCallId),qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=ft.obj(r)?r[t]:r,(null==r||un(r))&&(r=void 0),n=ft.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Fn(this)||(e.reverse&&([r,n]=[n,r]),n=cr(n),ft.und(n)?Pr(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,an(e,((e,t)=>/^on/.test(t)?rn(e,r):e))),Hn(this,e,"onProps"),Wn(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return bn(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{In(this)||(_n(this,!0),xt(o.pauseQueue),Wn(this,"onPause",xn(this,Bn(this,this.animation.to)),this))},resume:()=>{In(this)&&(_n(this,!1),On(this)&&this._resume(),xt(o.resumeQueue),Wn(this,"onResume",xn(this,Bn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Rn(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(wn(this));const n=!ft.und(e.to),i=!ft.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(wn(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||t.default&&!ft.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const f=!ht(u,d);f&&(s.from=u),u=cr(u);const h=!ht(c,l);h&&this._focus(c);const g=un(t.to),{config:p}=s,{decay:m,velocity:b}=p;(n||i)&&(p.velocity=0),t.config&&!g&&function(e,t,r){r&&(gn(r={...r},t),t={...r,...t}),gn(e,t),Object.assign(e,t);for(const t in fn)null==e[t]&&(e[t]=fn[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;ft.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(p,en(t.config,o),t.config!==a.config?en(a.config,o):void 0);let v=Pr(this);if(!v||ft.und(c))return r(xn(this,!0));const y=ft.und(t.reset)?i&&!t.default:!ft.und(u)&&tn(t.reset,o),x=y?u:this.get(),w=cn(c),$=ft.num(w)||ft.arr(w)||Ir(w),C=!g&&(!$||tn(a.immediate||t.immediate,o));if(h){const e=Xr(c);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let j=dr(c),k=!1;if(!j){const e=y||!Fn(this)&&f;(h||e)&&(k=ht(cn(x),w),j=!k),(ht(s.immediate,C)||C)&&ht(p.decay,m)&&ht(p.velocity,b)||(j=!0)}if(k&&On(this)&&(s.changed&&!y?j=!0:j||this._stop(l)),!g&&((j||dr(l))&&(s.values=v.getPayload(),s.toValues=dr(c)?null:S==Yr?[1]:mt(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),j)){const{onRest:e}=s;gt(Nn,(e=>Hn(this,t,e)));const n=xn(this,Bn(this,l));xt(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&qe.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?en(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),g?r($n(t.to,t,this._state,this)):j?this._start():On(this)&&!h?this._pendingCalls.add(r):r(yn(x))}_focus(e){const t=this.animation;e!==t.to&&(ur(this)&&this._detach(),t.to=e,ur(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;dr(t)&&(pr(t,this),kn(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;dr(e)&&mr(e,this)}_set(e,t=!0){const r=cr(e);if(!ft.und(r)){const e=Pr(this);if(!e||!ht(r,e.getValue())){const n=Xr(r);e&&e.constructor==n?e.setValue(r):Lr(this,n.create(r)),e&&qe.batchedUpdates((()=>{this._onChange(r,t)}))}}return Pr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Wn(this,"onStart",xn(this,Bn(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),en(this.animation.onChange,e,this)),en(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Pr(this).reset(cr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),On(this)||(Mn(this,!0),In(this)||this._resume())}_resume(){Ue.skipAnimation?this.finish():Ft.start(this)}_stop(e,t){if(On(this)){Mn(this,!1);const r=this.animation;gt(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),fr(this,{type:"idle",parent:this});const n=t?wn(this.get()):xn(this.get(),Bn(this,e??r.to));xt(this._pendingCalls,n),r.changed&&(r.changed=!1,Wn(this,"onRest",n,this))}}};function Bn(e,t){const r=cn(t);return ht(cn(e.get()),r)}function Rn(e,t=e.loop,r=e.to){const n=en(t);if(n){const i=!0!==n&&dn(n),o=(i||e).reverse,a=!i||i.reset;return zn({...e,loop:t,default:!1,pause:void 0,to:!o||un(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function zn(e){const{to:t,from:r}=e=dn(e),n=new Set;return ft.obj(t)&&Ln(t,n),ft.obj(r)&&Ln(r,n),e.keys=n.size?Array.from(n):null,e}function Pn(e){const t=zn(e);return ft.und(t.default)&&(t.default=an(t)),t}function Ln(e,t){pt(e,((e,r)=>null!=e&&t.add(r)))}var Nn=["onStart","onRest","onChange","onPause","onResume"];function Hn(e,t,r){e.animation[r]=t[r]!==nn(t,r)?rn(t[r],e.key):void 0}function Wn(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Yn=["onStart","onChange","onRest"],Vn=1,Un=class{constructor(e,t){this.id=Vn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];ft.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(zn(e)),this}start(e){let{queue:t}=this;return e?t=mt(e).map(zn):this.queue=[],this._flush?this._flush(this,t):(Jn(this,t),Kn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;gt(mt(t),(t=>r[t].stop(!!e)))}else Cn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ft.und(e))this.start({pause:!0});else{const t=this.springs;gt(mt(e),(e=>t[e].pause()))}return this}resume(e){if(ft.und(e))this.start({pause:!1});else{const t=this.springs;gt(mt(e),(e=>t[e].resume()))}return this}each(e){pt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,bt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&bt(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,bt(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}qe.onFrame(this._onFrame)}};function Kn(e,t){return Promise.all(t.map((t=>qn(e,t)))).then((t=>vn(e,t)))}async function qn(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,d=ft.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=ft.arr(i)||ft.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):gt(Yn,(r=>{const n=t[r];if(ft.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,xt(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===nn(t,"cancel");(c||h&&u.asyncId)&&f.push(bn(++e._lastAsyncId,{props:t,state:u,actions:{pause:ut,resume:ut,start(t,r){h?(Cn(u,e._lastAsyncId),r(wn(e))):(t.onRest=s,r($n(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=vn(e,await Promise.all(f));if(a&&g.finished&&(!r||!g.noop)){const r=Rn(t,a,i);if(r)return Jn(e,[r]),qn(e,r,!0)}return l&&qe.batchedUpdates((()=>l(g,e,e.item))),g}function Xn(e,t){const r={...e.springs};return t&&gt(mt(t),(e=>{ft.und(e.keys)&&(e=zn(e)),ft.obj(e.to)||(e={...e,to:void 0}),Qn(r,e,(e=>Zn(e)))})),Gn(e,r),r}function Gn(e,t){pt(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,pr(t,e))}))}function Zn(e,t){const r=new An;return r.key=e,t&&pr(r,t),r}function Qn(e,t,r){t.keys&&gt(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Jn(e,t){gt(t,(t=>{Qn(e.springs,t,(t=>Zn(t,e)))}))}var ei,ti,ri=({children:e,...r})=>{const n=t.useContext(ni),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,r){const[n]=t.useState((()=>({inputs:r,result:e()}))),i=t.useRef(),o=i.current;let a=o;if(a){const t=Boolean(r&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,a.inputs));t||(a={inputs:r,result:e()})}else a=n;return t.useEffect((()=>{i.current=a,o==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=ni;return U.createElement(a,{value:r},e)},ni=(ei=ri,ti={},Object.assign(ei,U.createContext(ti)),ei.Provider._context=ei,ei.Consumer._context=ei,ei);ri.Provider=ni.Provider,ri.Consumer=ni.Consumer;var ii=()=>{const e=[],t=function(t){Or(`${Er}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return gt(e,((e,i)=>{if(ft.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return gt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return gt(e,(e=>e.resume(...arguments))),this},t.set=function(t){gt(e,((e,r)=>{const n=ft.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return gt(e,((e,n)=>{if(ft.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return gt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return gt(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return ft.fun(e)?e(r,t):e};return t._getProps=r,t};function oi(e,r){const n=ft.fun(e),[[i],o]=function(e,r,n){const i=ft.fun(r)&&r;i&&!n&&(n=[]);const o=t.useMemo((()=>i||3==arguments.length?ii():void 0),[]),a=t.useRef(0),s=_r(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=Xn(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Kn(e,t):new Promise((n=>{Gn(e,r),l.queue.push((()=>{n(Kn(e,t))})),s()}))}})),[]),d=t.useRef([...l.ctrls]),c=[],u=Rr(e)||0;function f(e,t){for(let n=e;n<t;n++){const e=d.current[n]||(d.current[n]=new Un(null,l.flush)),t=i?i(n,e):r[n];t&&(c[n]=Pn(t))}}t.useMemo((()=>{gt(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),n);const h=d.current.map(((e,t)=>Xn(e,c[t]))),g=t.useContext(ri),p=Rr(g),m=g!==p&&function(e){for(const t in e)return!0;return!1}(g);Mr((()=>{a.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],gt(e,(e=>e()))),gt(d.current,((e,t)=>{o?.add(e),m&&e.start({default:g});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Ar((()=>()=>{gt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?r||[]:r);return n||2==arguments.length?[i,o]:i}var ai=class extends En{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Jt(...t);const r=this._get(),n=Xr(r);Lr(this,n.create(r))}advance(e){const t=this._get();ht(t,this.get())||(Pr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&li(this._active)&&di(this)}_get(){const e=ft.arr(this.source)?this.source.map(cr):mt(cr(this.source));return this.calc(...e)}_start(){this.idle&&!li(this._active)&&(this.idle=!1,gt(Nr(this),(e=>{e.done=!1})),Ue.skipAnimation?(qe.batchedUpdates((()=>this.advance())),di(this)):Ft.start(this))}_attach(){let e=1;gt(mt(this.source),(t=>{dr(t)&&pr(t,this),kn(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){gt(mt(this.source),(e=>{dr(e)&&mr(e,this)})),this._active.clear(),di(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=mt(this.source).reduce(((e,t)=>Math.max(e,(kn(t)?t.priority:0)+1)),0))}};function si(e){return!1!==e.idle}function li(e){return!e.size||Array.from(e).every(si)}function di(e){e.idle||(e.idle=!0,gt(Nr(e),(e=>{e.done=!0})),fr(e,{type:"idle",parent:e}))}Ue.assign({createStringInterpolator:Dr,to:(e,t)=>new ai(e,t)});var ci=/^--/;function ui(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ci.test(e)||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}var fi={};var hi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gi=["Webkit","Ms","Moz","O"];hi=Object.keys(hi).reduce(((e,t)=>(gi.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),hi);var pi=/^(matrix|translate|scale|rotate|skew)/,mi=/^(translate)/,bi=/^(rotate|skew)/,vi=(e,t)=>ft.num(e)&&0!==e?e+t:e,yi=(e,t)=>ft.arr(e)?e.every((e=>yi(e,t))):ft.num(e)?e===t:parseFloat(e)===t,xi=class extends Ur{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>vi(e,"px"))).join(",")})`,yi(e,0)]))),pt(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(pi.test(t)){if(delete n[t],ft.und(e))return;const r=mi.test(t)?"px":bi.test(t)?"deg":"";i.push(mt(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${vi(i,r)})`,yi(i,0)]:e=>[`${t}(${e.map((e=>vi(e,r))).join(",")})`,yi(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new wi(i,o)),super(n)}},wi=class extends hr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return gt(this.inputs,((r,n)=>{const i=cr(r[0]),[o,a]=this.transforms[n](ft.arr(i)?i:r.map(cr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&gt(this.inputs,(e=>gt(e,(e=>dr(e)&&pr(e,this)))))}observerRemoved(e){0==e&&gt(this.inputs,(e=>gt(e,(e=>dr(e)&&mr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),fr(this,e)}};Ue.assign({batchedUpdates:r.unstable_batchedUpdates,createStringInterpolator:Dr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var $i=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Ur(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Jr(e)||"Anonymous";return(e=ft.str(e)?o[e]||(o[e]=Gr(e,i)):e[Qr]||(e[Qr]=Gr(e,i))).displayName=`Animated(${t})`,e};return pt(e,((t,r)=>{ft.arr(e)&&(r=Jr(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:fi[t]||(fi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=ui(t,n[t]);ci.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new xi(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ci=$i.animated;const Si=q.default.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,ji=e=>{const r=t.version.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0};function ki(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function Di(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function Ei(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Ti(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function Fi(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var Oi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ii(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mi=Array.isArray,_i="object"==typeof Oi&&Oi&&Oi.Object===Object&&Oi,Ai=_i,Bi="object"==typeof self&&self&&self.Object===Object&&self,Ri=Ai||Bi||Function("return this")(),zi=Ri.Symbol,Pi=zi,Li=Object.prototype,Ni=Li.hasOwnProperty,Hi=Li.toString,Wi=Pi?Pi.toStringTag:void 0;var Yi=function(e){var t=Ni.call(e,Wi),r=e[Wi];try{e[Wi]=void 0;var n=!0}catch(e){}var i=Hi.call(e);return n&&(t?e[Wi]=r:delete e[Wi]),i},Vi=Object.prototype.toString;var Ui=Yi,Ki=function(e){return Vi.call(e)},qi=zi?zi.toStringTag:void 0;var Xi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qi&&qi in Object(e)?Ui(e):Ki(e)};var Gi=function(e){return null!=e&&"object"==typeof e},Zi=Xi,Qi=Gi;var Ji=function(e){return"symbol"==typeof e||Qi(e)&&"[object Symbol]"==Zi(e)},eo=Mi,to=Ji,ro=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,no=/^\w*$/;var io=function(e,t){if(eo(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!to(e))||(no.test(e)||!ro.test(e)||null!=t&&e in Object(t))};var oo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ao=Xi,so=oo;var lo,co=function(e){if(!so(e))return!1;var t=ao(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},uo=Ri["__core-js_shared__"],fo=(lo=/[^.]+$/.exec(uo&&uo.keys&&uo.keys.IE_PROTO||""))?"Symbol(src)_1."+lo:"";var ho=function(e){return!!fo&&fo in e},go=Function.prototype.toString;var po=function(e){if(null!=e){try{return go.call(e)}catch(e){}try{return e+""}catch(e){}}return""},mo=co,bo=ho,vo=oo,yo=po,xo=/^\[object .+?Constructor\]$/,wo=Function.prototype,$o=Object.prototype,Co=wo.toString,So=$o.hasOwnProperty,jo=RegExp("^"+Co.call(So).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ko=function(e,t){return null==e?void 0:e[t]},Do=function(e){return!(!vo(e)||bo(e))&&(mo(e)?jo:xo).test(yo(e))},Eo=ko;var To=function(e,t){var r=Eo(e,t);return Do(r)?r:void 0},Fo=To(Object,"create"),Oo=Fo;var Io=function(){this.__data__=Oo?Oo(null):{},this.size=0};var Mo=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_o=Fo,Ao=Object.prototype.hasOwnProperty;var Bo=function(e){var t=this.__data__;if(_o){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ao.call(t,e)?t[e]:void 0},Ro=Fo,zo=Object.prototype.hasOwnProperty;var Po=function(e){var t=this.__data__;return Ro?void 0!==t[e]:zo.call(t,e)},Lo=Fo;var No=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Lo&&void 0===t?"__lodash_hash_undefined__":t,this},Ho=Io,Wo=Mo,Yo=Bo,Vo=Po,Uo=No;function Ko(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ko.prototype.clear=Ho,Ko.prototype.delete=Wo,Ko.prototype.get=Yo,Ko.prototype.has=Vo,Ko.prototype.set=Uo;var qo=Ko;var Xo=function(){this.__data__=[],this.size=0};var Go=function(e,t){return e===t||e!=e&&t!=t},Zo=Go;var Qo=function(e,t){for(var r=e.length;r--;)if(Zo(e[r][0],t))return r;return-1},Jo=Qo,ea=Array.prototype.splice;var ta=function(e){var t=this.__data__,r=Jo(t,e);return!(r<0)&&(r==t.length-1?t.pop():ea.call(t,r,1),--this.size,!0)},ra=Qo;var na=function(e){var t=this.__data__,r=ra(t,e);return r<0?void 0:t[r][1]},ia=Qo;var oa=function(e){return ia(this.__data__,e)>-1},aa=Qo;var sa=function(e,t){var r=this.__data__,n=aa(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},la=Xo,da=ta,ca=na,ua=oa,fa=sa;function ha(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ha.prototype.clear=la,ha.prototype.delete=da,ha.prototype.get=ca,ha.prototype.has=ua,ha.prototype.set=fa;var ga=ha,pa=To(Ri,"Map"),ma=qo,ba=ga,va=pa;var ya=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var xa=function(e,t){var r=e.__data__;return ya(t)?r["string"==typeof t?"string":"hash"]:r.map},wa=xa;var $a=function(e){var t=wa(this,e).delete(e);return this.size-=t?1:0,t},Ca=xa;var Sa=function(e){return Ca(this,e).get(e)},ja=xa;var ka=function(e){return ja(this,e).has(e)},Da=xa;var Ea=function(e,t){var r=Da(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Ta=function(){this.size=0,this.__data__={hash:new ma,map:new(va||ba),string:new ma}},Fa=$a,Oa=Sa,Ia=ka,Ma=Ea;function _a(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_a.prototype.clear=Ta,_a.prototype.delete=Fa,_a.prototype.get=Oa,_a.prototype.has=Ia,_a.prototype.set=Ma;var Aa=_a,Ba=Aa;function Ra(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Ra.Cache||Ba),r}Ra.Cache=Ba;var za=Ra;var Pa=function(e){var t=za(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},La=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Na=/\\(\\)?/g,Ha=Pa((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(La,(function(e,r,n,i){t.push(n?i.replace(Na,"$1"):r||e)})),t}));var Wa=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ya=Mi,Va=Ji,Ua=zi?zi.prototype:void 0,Ka=Ua?Ua.toString:void 0;var qa=function e(t){if("string"==typeof t)return t;if(Ya(t))return Wa(t,e)+"";if(Va(t))return Ka?Ka.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Xa=qa;var Ga=function(e){return null==e?"":Xa(e)},Za=Mi,Qa=io,Ja=Ha,es=Ga;var ts=function(e,t){return Za(e)?e:Qa(e,t)?[e]:Ja(es(e))},rs=Ji;var ns=function(e){if("string"==typeof e||rs(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},is=ts,os=ns;var as=function(e,t){for(var r=0,n=(t=is(t,e)).length;null!=e&&r<n;)e=e[os(t[r++])];return r&&r==n?e:void 0},ss=as;var ls=function(e,t,r){var n=null==e?void 0:ss(e,t);return void 0===n?r:n},ds=Ii(ls);const cs=(e,t,r)=>ds(r,t)||ds(e,t),us=(e,t)=>{const r=t||e.defaultValue;return ds(e.collections,r)},fs={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},hs=e=>t=>{var r;const n=t.theme,i=us(fs,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${cs(i,e,n.overrides.border)}px`:`${i[e]}px`},gs={"width-005":hs("width-005"),"width-010":hs("width-010"),"width-020":hs("width-020"),"width-040":hs("width-040"),solid:(ps="solid",e=>{var t;const r=e.theme,n=us(fs,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?cs(n,ps,r.overrides.border):n[ps];return"function"==typeof i?i(e):i})};var ps;const ms={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bs={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vs={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ys={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xs={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ws={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$s={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Cs={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ss={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},js={collections:{lifesg:vs,bookingsg:ms,rbs:$s,mylegacy:ys,ccube:bs,oneservice:xs,pa:ws,a11yplayground:Cs,supportgowhere:Ss},defaultValue:"lifesg"},ks={collections:{lifesg:vs,bookingsg:ms,rbs:$s,mylegacy:ys,ccube:bs,oneservice:xs,pa:ws,a11yplayground:Cs,supportgowhere:Ss},defaultValue:"lifesg"},Ds=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=us(i?ks:js,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?cs(o,e,s):o[e]},Es={"brand-10":Ds("brand-10"),"brand-20":Ds("brand-20"),"brand-30":Ds("brand-30"),"brand-40":Ds("brand-40"),"brand-50":Ds("brand-50"),"brand-60":Ds("brand-60"),"brand-70":Ds("brand-70"),"brand-80":Ds("brand-80"),"brand-90":Ds("brand-90"),"brand-95":Ds("brand-95"),"brand-100":Ds("brand-100"),"primary-10":Ds("primary-10"),"primary-20":Ds("primary-20"),"primary-30":Ds("primary-30"),"primary-40":Ds("primary-40"),"primary-50":Ds("primary-50"),"primary-60":Ds("primary-60"),"primary-70":Ds("primary-70"),"primary-80":Ds("primary-80"),"primary-90":Ds("primary-90"),"primary-95":Ds("primary-95"),"primary-100":Ds("primary-100"),"secondary-10":Ds("secondary-10"),"secondary-20":Ds("secondary-20"),"secondary-30":Ds("secondary-30"),"secondary-40":Ds("secondary-40"),"secondary-50":Ds("secondary-50"),"secondary-60":Ds("secondary-60"),"secondary-70":Ds("secondary-70"),"secondary-80":Ds("secondary-80"),"secondary-90":Ds("secondary-90"),"secondary-95":Ds("secondary-95"),"secondary-100":Ds("secondary-100"),"neutral-10":Ds("neutral-10"),"neutral-20":Ds("neutral-20"),"neutral-30":Ds("neutral-30"),"neutral-40":Ds("neutral-40"),"neutral-50":Ds("neutral-50"),"neutral-60":Ds("neutral-60"),"neutral-70":Ds("neutral-70"),"neutral-80":Ds("neutral-80"),"neutral-90":Ds("neutral-90"),"neutral-95":Ds("neutral-95"),"neutral-100":Ds("neutral-100"),"success-10":Ds("success-10"),"success-20":Ds("success-20"),"success-30":Ds("success-30"),"success-40":Ds("success-40"),"success-50":Ds("success-50"),"success-60":Ds("success-60"),"success-70":Ds("success-70"),"success-80":Ds("success-80"),"success-90":Ds("success-90"),"success-95":Ds("success-95"),"success-100":Ds("success-100"),"warning-10":Ds("warning-10"),"warning-20":Ds("warning-20"),"warning-30":Ds("warning-30"),"warning-40":Ds("warning-40"),"warning-50":Ds("warning-50"),"warning-60":Ds("warning-60"),"warning-70":Ds("warning-70"),"warning-80":Ds("warning-80"),"warning-90":Ds("warning-90"),"warning-95":Ds("warning-95"),"warning-100":Ds("warning-100"),"error-10":Ds("error-10"),"error-20":Ds("error-20"),"error-30":Ds("error-30"),"error-40":Ds("error-40"),"error-50":Ds("error-50"),"error-60":Ds("error-60"),"error-70":Ds("error-70"),"error-80":Ds("error-80"),"error-90":Ds("error-90"),"error-95":Ds("error-95"),"error-100":Ds("error-100"),"info-10":Ds("info-10"),"info-20":Ds("info-20"),"info-30":Ds("info-30"),"info-40":Ds("info-40"),"info-50":Ds("info-50"),"info-60":Ds("info-60"),"info-70":Ds("info-70"),"info-80":Ds("info-80"),"info-90":Ds("info-90"),"info-95":Ds("info-95"),"info-100":Ds("info-100"),white:Ds("white"),black:Ds("black"),"primary-inverse":Ds("primary-inverse")},Ts={text:Ds("neutral-20"),"text-subtle":Ds("neutral-30"),"text-subtler":Ds("neutral-50"),"text-subtlest":Ds("neutral-60"),"text-primary":Ds("primary-50"),"text-hover":Ds("primary-40"),"text-selected":Ds("primary-50"),"text-selected-hover":Ds("primary-40"),"text-disabled":Ds("neutral-50"),"text-disabled-subtle":Ds("neutral-60"),"text-disabled-subtlest":Ds("neutral-80"),"text-selected-disabled":Ds("neutral-20"),"text-success":Ds("success-40"),"text-warning":Ds("warning-40"),"text-error":Ds("error-40"),"text-info":Ds("info-40"),"text-inverse":Ds("white"),icon:Ds("neutral-50"),"icon-subtle":Ds("neutral-60"),"icon-strongest":Ds("neutral-20"),"icon-primary":Ds("primary-50"),"icon-primary-subtle":Ds("primary-60"),"icon-primary-subtlest":Ds("primary-70"),"icon-hover":Ds("primary-40"),"icon-selected":Ds("primary-50"),"icon-selected-hover":Ds("primary-40"),"icon-disabled":Ds("neutral-50"),"icon-disabled-subtle":Ds("neutral-60"),"icon-selected-disabled":Ds("neutral-60"),"icon-success":Ds("success-50"),"icon-warning":Ds("warning-60"),"icon-error":Ds("error-50"),"icon-error-strong":Ds("error-40"),"icon-info":Ds("info-50"),"icon-inverse":Ds("white"),"icon-primary-inverse":Ds("primary-inverse"),border:Ds("neutral-90"),"border-strong":Ds("neutral-70"),"border-stronger":Ds("neutral-50"),"border-primary":Ds("primary-50"),"border-primary-subtle":Ds("primary-60"),"border-hover":Ds("primary-90"),"border-hover-strong":Ds("primary-60"),"border-selected":Ds("primary-50"),"border-selected-subtle":Ds("primary-70"),"border-selected-subtlest":Ds("primary-90"),"border-selected-hover":Ds("primary-40"),"border-focus":Ds("primary-60"),"border-focus-strong":Ds("primary-50"),"border-disabled":Ds("neutral-90"),"border-selected-disabled":Ds("neutral-70"),"border-success":Ds("success-60"),"border-warning":Ds("warning-60"),"border-error":Ds("error-60"),"border-error-focus":Ds("error-60"),"border-error-focus-strong":Ds("error-40"),"border-error-strong":Ds("error-40"),"border-info":Ds("info-60"),bg:Ds("white"),"bg-strong":Ds("neutral-100"),"bg-stronger":Ds("neutral-95"),"bg-strongest":Ds("neutral-90"),"bg-hover":Ds("primary-95"),"bg-hover-strong":Ds("primary-90"),"bg-hover-subtle":Ds("primary-100"),"bg-hover-neutral":Ds("neutral-100"),"bg-hover-neutral-strong":Ds("neutral-90"),"bg-selected":Ds("primary-95"),"bg-selected-hover":Ds("primary-90"),"bg-selected-strong":Ds("primary-90"),"bg-selected-stronger":Ds("primary-70"),"bg-selected-strongest":Ds("primary-50"),"bg-selected-strongest-hover":Ds("primary-40"),"bg-disabled":Ds("neutral-95"),"bg-selected-disabled":Ds("neutral-95"),"bg-selected-stronger-disabled":Ds("neutral-70"),"bg-success":Ds("success-100"),"bg-success-hover":Ds("success-95"),"bg-success-strong":Ds("success-50"),"bg-success-strong-hover":Ds("success-40"),"bg-warning":Ds("warning-100"),"bg-warning-hover":Ds("warning-95"),"bg-warning-strong":Ds("warning-50"),"bg-warning-strong-hover":Ds("warning-40"),"bg-info":Ds("info-100"),"bg-info-hover":Ds("info-95"),"bg-info-strong":Ds("info-50"),"bg-info-strong-hover":Ds("info-40"),"bg-error":Ds("error-100"),"bg-error-hover":Ds("error-95"),"bg-error-strong":Ds("error-50"),"bg-error-strong-hover":Ds("error-40"),"bg-inverse":Ds("neutral-20"),"bg-inverse-subtle":Ds("neutral-30"),"bg-inverse-subtler":Ds("neutral-50"),"bg-inverse-subtlest":Ds("neutral-60"),"bg-inverse-hover":Ds("neutral-40"),"bg-primary":Ds("primary-50"),"bg-primary-subtle":Ds("primary-60"),"bg-primary-subtler":Ds("primary-95"),"bg-primary-subtlest":Ds("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ds("primary-40"),"bg-primary-subtlest-hover":Ds("primary-90"),"bg-primary-subtlest-selected":Ds("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ds("primary-50"),"hyperlink-hover":Ds("primary-40"),"hyperlink-visited":Ds("primary-40"),"hyperlink-inverse":Ds("primary-inverse"),"focus-ring":Ds("black"),"focus-ring-inverse":Ds("white")},Fs={text:Ds("neutral-100"),"text-subtle":Ds("neutral-80"),"text-subtler":Ds("neutral-60"),"text-subtlest":Ds("neutral-50"),"text-primary":Ds("primary-60"),"text-hover":Ds("primary-70"),"text-selected":Ds("primary-60"),"text-selected-hover":Ds("primary-70"),"text-disabled":Ds("neutral-60"),"text-disabled-subtle":Ds("neutral-50"),"text-disabled-subtlest":Ds("neutral-30"),"text-selected-disabled":Ds("neutral-90"),"text-success":Ds("success-70"),"text-warning":Ds("warning-70"),"text-error":Ds("error-70"),"text-info":Ds("info-70"),"text-inverse":Ds("black"),icon:Ds("neutral-60"),"icon-subtle":Ds("neutral-50"),"icon-strongest":Ds("neutral-90"),"icon-primary":Ds("primary-60"),"icon-primary-subtle":Ds("primary-50"),"icon-primary-subtlest":Ds("primary-40"),"icon-hover":Ds("primary-70"),"icon-selected":Ds("primary-60"),"icon-selected-hover":Ds("primary-70"),"icon-disabled":Ds("neutral-60"),"icon-disabled-subtle":Ds("neutral-50"),"icon-selected-disabled":Ds("neutral-50"),"icon-success":Ds("success-60"),"icon-warning":Ds("warning-50"),"icon-error":Ds("error-60"),"icon-error-strong":Ds("error-70"),"icon-info":Ds("info-60"),"icon-inverse":Ds("black"),"icon-primary-inverse":Ds("primary-inverse"),border:Ds("neutral-20"),"border-strong":Ds("neutral-40"),"border-stronger":Ds("neutral-60"),"border-primary":Ds("primary-60"),"border-primary-subtle":Ds("primary-50"),"border-hover":Ds("primary-20"),"border-hover-strong":Ds("primary-50"),"border-selected":Ds("primary-60"),"border-selected-subtle":Ds("primary-40"),"border-selected-subtlest":Ds("primary-20"),"border-selected-hover":Ds("primary-70"),"border-focus":Ds("primary-50"),"border-focus-strong":Ds("primary-60"),"border-disabled":Ds("neutral-20"),"border-selected-disabled":Ds("neutral-40"),"border-success":Ds("success-50"),"border-warning":Ds("warning-50"),"border-error":Ds("error-50"),"border-error-focus":Ds("error-50"),"border-error-focus-strong":Ds("error-70"),"border-error-strong":Ds("error-70"),"border-info":Ds("info-50"),bg:Ds("black"),"bg-strong":Ds("neutral-10"),"bg-stronger":Ds("neutral-20"),"bg-strongest":Ds("neutral-20"),"bg-hover":Ds("primary-20"),"bg-hover-strong":Ds("primary-20"),"bg-hover-subtle":Ds("primary-10"),"bg-hover-neutral":Ds("neutral-10"),"bg-hover-neutral-strong":Ds("neutral-20"),"bg-selected":Ds("primary-20"),"bg-selected-hover":Ds("primary-20"),"bg-selected-strong":Ds("primary-20"),"bg-selected-stronger":Ds("primary-40"),"bg-selected-strongest":Ds("primary-60"),"bg-selected-strongest-hover":Ds("primary-70"),"bg-disabled":Ds("neutral-20"),"bg-selected-disabled":Ds("neutral-20"),"bg-selected-stronger-disabled":Ds("neutral-40"),"bg-success":Ds("success-10"),"bg-success-hover":Ds("success-20"),"bg-success-strong":Ds("success-60"),"bg-success-strong-hover":Ds("success-70"),"bg-warning":Ds("warning-10"),"bg-warning-hover":Ds("warning-20"),"bg-warning-strong":Ds("warning-60"),"bg-warning-strong-hover":Ds("warning-70"),"bg-info":Ds("info-10"),"bg-info-hover":Ds("info-20"),"bg-info-strong":Ds("info-60"),"bg-info-strong-hover":Ds("info-70"),"bg-error":Ds("error-10"),"bg-error-hover":Ds("error-20"),"bg-error-strong":Ds("error-60"),"bg-error-strong-hover":Ds("error-70"),"bg-inverse":Ds("neutral-90"),"bg-inverse-subtle":Ds("neutral-80"),"bg-inverse-subtler":Ds("neutral-60"),"bg-inverse-subtlest":Ds("neutral-50"),"bg-inverse-hover":Ds("neutral-70"),"bg-primary":Ds("primary-60"),"bg-primary-subtle":Ds("primary-50"),"bg-primary-subtler":Ds("primary-20"),"bg-primary-subtlest":Ds("primary-10"),"bg-available":"#185339","bg-primary-hover":Ds("primary-70"),"bg-primary-subtlest-hover":Ds("primary-20"),"bg-primary-subtlest-selected":Ds("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ds("primary-60"),"hyperlink-hover":Ds("primary-70"),"hyperlink-visited":Ds("primary-70"),"hyperlink-inverse":Ds("primary-inverse"),"focus-ring":Ds("primary-60"),"focus-ring-inverse":Ds("black")},Os={text:Ds("neutral-30"),"text-subtle":Ds("neutral-40"),"text-subtler":Ds("neutral-50"),"text-subtlest":Ds("neutral-70"),"text-primary":Ds("neutral-10"),"text-hover":Ds("neutral-70"),"text-selected":Ds("neutral-20"),"text-selected-hover":Ds("neutral-10"),"text-disabled":Ds("neutral-50"),"text-disabled-subtle":Ds("neutral-60"),"text-disabled-subtlest":Ds("neutral-80"),"text-selected-disabled":Ds("neutral-40"),"text-success":Ds("success-40"),"text-warning":Ds("warning-40"),"text-error":Ds("brand-30"),"text-info":Ds("neutral-40"),"text-inverse":Ds("neutral-100"),icon:Ds("neutral-40"),"icon-subtle":Ds("neutral-50"),"icon-strongest":Ds("neutral-10"),"icon-primary":Ds("neutral-10"),"icon-primary-subtle":Ds("neutral-30"),"icon-primary-subtlest":Ds("neutral-60"),"icon-hover":Ds("neutral-70"),"icon-selected":Ds("brand-20"),"icon-selected-hover":Ds("brand-10"),"icon-disabled":Ds("neutral-50"),"icon-disabled-subtle":Ds("neutral-60"),"icon-selected-disabled":Ds("neutral-40"),"icon-success":Ds("success-40"),"icon-warning":Ds("warning-60"),"icon-error":Ds("brand-30"),"icon-error-strong":Ds("brand-10"),"icon-info":Ds("neutral-40"),"icon-inverse":Ds("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ds("neutral-90"),"border-strong":Ds("neutral-30"),"border-stronger":Ds("neutral-20"),"border-primary":Ds("neutral-40"),"border-primary-subtle":Ds("neutral-60"),"border-hover":Ds("neutral-80"),"border-hover-strong":Ds("neutral-10"),"border-selected":Ds("brand-20"),"border-selected-subtle":Ds("neutral-40"),"border-selected-subtlest":Ds("neutral-70"),"border-selected-hover":Ds("neutral-10"),"border-focus":Ds("neutral-20"),"border-focus-strong":Ds("neutral-10"),"border-disabled":Ds("neutral-90"),"border-selected-disabled":Ds("neutral-80"),"border-success":Ds("success-40"),"border-warning":Ds("warning-60"),"border-error":Ds("brand-30"),"border-error-focus":Ds("brand-20"),"border-error-focus-strong":Ds("brand-10"),"border-error-strong":Ds("brand-20"),"border-info":Ds("neutral-40"),bg:Ds("neutral-100"),"bg-strong":Ds("neutral-95"),"bg-stronger":Ds("neutral-90"),"bg-strongest":Ds("neutral-80"),"bg-hover":Ds("brand-90"),"bg-hover-strong":Ds("brand-80"),"bg-hover-subtle":Ds("neutral-90"),"bg-hover-neutral":Ds("neutral-90"),"bg-hover-neutral-strong":Ds("neutral-90"),"bg-selected":Ds("brand-100"),"bg-selected-hover":Ds("brand-30"),"bg-selected-strong":Ds("brand-50"),"bg-selected-stronger":Ds("brand-40"),"bg-selected-strongest":Ds("brand-20"),"bg-selected-strongest-hover":Ds("brand-10"),"bg-disabled":Ds("neutral-90"),"bg-selected-disabled":Ds("neutral-90"),"bg-selected-stronger-disabled":Ds("neutral-80"),"bg-success":Ds("success-100"),"bg-success-hover":Ds("success-95"),"bg-success-strong":Ds("success-50"),"bg-success-strong-hover":Ds("success-40"),"bg-warning":Ds("warning-100"),"bg-warning-hover":Ds("warning-95"),"bg-warning-strong":Ds("warning-50"),"bg-warning-strong-hover":Ds("warning-40"),"bg-info":Ds("neutral-95"),"bg-info-hover":Ds("info-95"),"bg-info-strong":Ds("info-50"),"bg-info-strong-hover":Ds("info-40"),"bg-error":Ds("brand-100"),"bg-error-hover":Ds("error-95"),"bg-error-strong":Ds("error-50"),"bg-error-strong-hover":Ds("error-40"),"bg-inverse":Ds("neutral-40"),"bg-inverse-subtle":Ds("neutral-60"),"bg-inverse-subtler":Ds("neutral-70"),"bg-inverse-subtlest":Ds("neutral-80"),"bg-inverse-hover":Ds("neutral-30"),"bg-primary":Ds("brand-20"),"bg-primary-subtle":Ds("brand-60"),"bg-primary-subtler":Ds("brand-80"),"bg-primary-subtlest":Ds("brand-100"),"bg-available":Ds("success-60"),"bg-primary-hover":Ds("brand-10"),"bg-primary-subtlest-hover":Ds("brand-80"),"bg-primary-subtlest-selected":Ds("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ds("neutral-10"),"hyperlink-hover":Ds("neutral-40"),"hyperlink-visited":Ds("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ds("black"),"focus-ring-inverse":Ds("white")},Is={text:Ds("neutral-20"),"text-subtle":Ds("neutral-30"),"text-subtler":Ds("neutral-50"),"text-subtlest":Ds("neutral-60"),"text-primary":Ds("primary-50"),"text-hover":Ds("primary-40"),"text-selected":Ds("primary-50"),"text-selected-hover":Ds("primary-40"),"text-disabled":Ds("neutral-50"),"text-disabled-subtle":Ds("neutral-60"),"text-disabled-subtlest":Ds("neutral-80"),"text-selected-disabled":Ds("neutral-20"),"text-success":Ds("success-40"),"text-warning":Ds("warning-40"),"text-error":Ds("error-40"),"text-info":Ds("info-40"),"text-inverse":Ds("white"),icon:Ds("neutral-50"),"icon-subtle":Ds("neutral-60"),"icon-strongest":Ds("neutral-20"),"icon-primary":Ds("primary-50"),"icon-primary-subtle":Ds("primary-60"),"icon-primary-subtlest":Ds("primary-70"),"icon-hover":Ds("primary-40"),"icon-selected":Ds("primary-50"),"icon-selected-hover":Ds("primary-40"),"icon-disabled":Ds("neutral-50"),"icon-disabled-subtle":Ds("neutral-60"),"icon-selected-disabled":Ds("neutral-60"),"icon-success":Ds("success-50"),"icon-warning":Ds("warning-60"),"icon-error":Ds("error-50"),"icon-error-strong":Ds("error-40"),"icon-info":Ds("info-50"),"icon-inverse":Ds("white"),"icon-primary-inverse":Ds("primary-inverse"),border:Ds("neutral-90"),"border-strong":Ds("neutral-70"),"border-stronger":Ds("neutral-50"),"border-primary":Ds("primary-50"),"border-primary-subtle":Ds("primary-60"),"border-hover":Ds("primary-90"),"border-hover-strong":Ds("primary-60"),"border-selected":Ds("primary-50"),"border-selected-subtle":Ds("primary-70"),"border-selected-subtlest":Ds("primary-90"),"border-selected-hover":Ds("primary-40"),"border-focus":Ds("primary-60"),"border-focus-strong":Ds("primary-50"),"border-disabled":Ds("neutral-90"),"border-selected-disabled":Ds("neutral-70"),"border-success":Ds("success-60"),"border-warning":Ds("warning-60"),"border-error":Ds("error-60"),"border-error-focus":Ds("error-60"),"border-error-focus-strong":Ds("error-40"),"border-error-strong":Ds("error-40"),"border-info":Ds("info-60"),bg:Ds("white"),"bg-strong":Ds("neutral-100"),"bg-stronger":Ds("neutral-95"),"bg-strongest":Ds("neutral-90"),"bg-hover":Ds("primary-95"),"bg-hover-strong":Ds("primary-90"),"bg-hover-subtle":Ds("primary-100"),"bg-hover-neutral":Ds("neutral-100"),"bg-hover-neutral-strong":Ds("neutral-90"),"bg-selected":Ds("primary-95"),"bg-selected-hover":Ds("primary-90"),"bg-selected-strong":Ds("primary-90"),"bg-selected-stronger":Ds("primary-70"),"bg-selected-strongest":Ds("primary-50"),"bg-selected-strongest-hover":Ds("primary-40"),"bg-disabled":Ds("neutral-95"),"bg-selected-disabled":Ds("neutral-95"),"bg-selected-stronger-disabled":Ds("neutral-70"),"bg-success":Ds("success-100"),"bg-success-hover":Ds("success-95"),"bg-success-strong":Ds("success-50"),"bg-success-strong-hover":Ds("success-40"),"bg-warning":Ds("warning-100"),"bg-warning-hover":Ds("warning-95"),"bg-warning-strong":Ds("warning-50"),"bg-warning-strong-hover":Ds("warning-40"),"bg-info":Ds("info-100"),"bg-info-hover":Ds("info-95"),"bg-info-strong":Ds("info-50"),"bg-info-strong-hover":Ds("info-40"),"bg-error":Ds("error-100"),"bg-error-hover":Ds("error-95"),"bg-error-strong":Ds("error-50"),"bg-error-strong-hover":Ds("error-40"),"bg-inverse":Ds("neutral-20"),"bg-inverse-subtle":Ds("neutral-30"),"bg-inverse-subtler":Ds("neutral-50"),"bg-inverse-subtlest":Ds("neutral-60"),"bg-inverse-hover":Ds("neutral-40"),"bg-primary":Ds("primary-50"),"bg-primary-subtle":Ds("primary-60"),"bg-primary-subtler":Ds("primary-95"),"bg-primary-subtlest":Ds("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ds("primary-40"),"bg-primary-subtlest-hover":Ds("primary-90"),"bg-primary-subtlest-selected":Ds("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ds("primary-50"),"hyperlink-hover":Ds("primary-40"),"hyperlink-visited":Ds("primary-40"),"hyperlink-inverse":Ds("primary-inverse"),"focus-ring":Ds("black"),"focus-ring-inverse":Ds("white")},Ms={text:Ds("neutral-100"),"text-subtle":Ds("neutral-80"),"text-subtler":Ds("neutral-60"),"text-subtlest":Ds("neutral-50"),"text-primary":Ds("primary-60"),"text-hover":Ds("primary-70"),"text-selected":Ds("primary-60"),"text-selected-hover":Ds("primary-70"),"text-disabled":Ds("neutral-60"),"text-disabled-subtle":Ds("neutral-50"),"text-disabled-subtlest":Ds("neutral-30"),"text-selected-disabled":Ds("neutral-90"),"text-success":Ds("success-70"),"text-warning":Ds("warning-70"),"text-error":Ds("error-70"),"text-info":Ds("info-70"),"text-inverse":Ds("black"),icon:Ds("neutral-60"),"icon-subtle":Ds("neutral-50"),"icon-strongest":Ds("neutral-90"),"icon-primary":Ds("primary-60"),"icon-primary-subtle":Ds("primary-50"),"icon-primary-subtlest":Ds("primary-40"),"icon-hover":Ds("primary-70"),"icon-selected":Ds("primary-60"),"icon-selected-hover":Ds("primary-70"),"icon-disabled":Ds("neutral-60"),"icon-disabled-subtle":Ds("neutral-50"),"icon-selected-disabled":Ds("neutral-50"),"icon-success":Ds("success-60"),"icon-warning":Ds("warning-50"),"icon-error":Ds("error-60"),"icon-error-strong":Ds("error-70"),"icon-info":Ds("info-60"),"icon-inverse":Ds("black"),"icon-primary-inverse":Ds("primary-inverse"),border:Ds("neutral-20"),"border-strong":Ds("neutral-40"),"border-stronger":Ds("neutral-60"),"border-primary":Ds("primary-60"),"border-primary-subtle":Ds("primary-50"),"border-hover":Ds("primary-20"),"border-hover-strong":Ds("primary-50"),"border-selected":Ds("primary-60"),"border-selected-subtle":Ds("primary-40"),"border-selected-subtlest":Ds("primary-20"),"border-selected-hover":Ds("primary-70"),"border-focus":Ds("primary-50"),"border-focus-strong":Ds("primary-60"),"border-disabled":Ds("neutral-20"),"border-selected-disabled":Ds("neutral-40"),"border-success":Ds("success-50"),"border-warning":Ds("warning-50"),"border-error":Ds("error-50"),"border-error-focus":Ds("error-50"),"border-error-focus-strong":Ds("error-70"),"border-error-strong":Ds("error-70"),"border-info":Ds("info-50"),bg:Ds("black"),"bg-strong":Ds("neutral-10"),"bg-stronger":Ds("neutral-20"),"bg-strongest":Ds("neutral-20"),"bg-hover":Ds("primary-20"),"bg-hover-strong":Ds("primary-20"),"bg-hover-subtle":Ds("primary-10"),"bg-hover-neutral":Ds("neutral-10"),"bg-hover-neutral-strong":Ds("neutral-20"),"bg-selected":Ds("primary-20"),"bg-selected-hover":Ds("primary-20"),"bg-selected-strong":Ds("primary-20"),"bg-selected-stronger":Ds("primary-40"),"bg-selected-strongest":Ds("primary-60"),"bg-selected-strongest-hover":Ds("primary-70"),"bg-disabled":Ds("neutral-20"),"bg-selected-disabled":Ds("neutral-20"),"bg-selected-stronger-disabled":Ds("neutral-40"),"bg-success":Ds("success-10"),"bg-success-hover":Ds("success-20"),"bg-success-strong":Ds("success-60"),"bg-success-strong-hover":Ds("success-70"),"bg-warning":Ds("warning-10"),"bg-warning-hover":Ds("warning-20"),"bg-warning-strong":Ds("warning-60"),"bg-warning-strong-hover":Ds("warning-70"),"bg-info":Ds("info-10"),"bg-info-hover":Ds("info-20"),"bg-info-strong":Ds("info-60"),"bg-info-strong-hover":Ds("info-70"),"bg-error":Ds("error-10"),"bg-error-hover":Ds("error-20"),"bg-error-strong":Ds("error-60"),"bg-error-strong-hover":Ds("error-70"),"bg-inverse":Ds("neutral-90"),"bg-inverse-subtle":Ds("neutral-80"),"bg-inverse-subtler":Ds("neutral-60"),"bg-inverse-subtlest":Ds("neutral-50"),"bg-inverse-hover":Ds("neutral-70"),"bg-primary":Ds("primary-60"),"bg-primary-subtle":Ds("primary-50"),"bg-primary-subtler":Ds("primary-20"),"bg-primary-subtlest":Ds("primary-10"),"bg-available":"#185339","bg-primary-hover":Ds("primary-70"),"bg-primary-subtlest-hover":Ds("primary-20"),"bg-primary-subtlest-selected":Ds("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ds("primary-60"),"hyperlink-hover":Ds("primary-70"),"hyperlink-visited":Ds("primary-70"),"hyperlink-inverse":Ds("primary-inverse"),"focus-ring":Ds("primary-60"),"focus-ring-inverse":Ds("black")},_s={collections:{lifesg:Ts,bookingsg:Ts,rbs:Ts,mylegacy:Ts,ccube:Ts,oneservice:Ts,pa:Os,a11yplayground:Is,supportgowhere:Ts},defaultValue:"lifesg"},As={collections:{lifesg:Fs,bookingsg:Fs,rbs:Fs,mylegacy:Fs,ccube:Fs,oneservice:Fs,pa:Fs,a11yplayground:Ms,supportgowhere:Fs},defaultValue:"lifesg"},Bs=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=us(i?As:_s,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?cs(o,e,s):o[e];return"function"==typeof l?l(t):l},Rs={text:Bs("text"),"text-subtle":Bs("text-subtle"),"text-subtler":Bs("text-subtler"),"text-subtlest":Bs("text-subtlest"),"text-primary":Bs("text-primary"),"text-hover":Bs("text-hover"),"text-selected":Bs("text-selected"),"text-selected-hover":Bs("text-selected-hover"),"text-disabled":Bs("text-disabled"),"text-disabled-subtle":Bs("text-disabled-subtle"),"text-disabled-subtlest":Bs("text-disabled-subtlest"),"text-selected-disabled":Bs("text-selected-disabled"),"text-success":Bs("text-success"),"text-warning":Bs("text-warning"),"text-error":Bs("text-error"),"text-info":Bs("text-info"),"text-inverse":Bs("text-inverse"),icon:Bs("icon"),"icon-subtle":Bs("icon-subtle"),"icon-strongest":Bs("icon-strongest"),"icon-primary":Bs("icon-primary"),"icon-primary-subtle":Bs("icon-primary-subtle"),"icon-primary-subtlest":Bs("icon-primary-subtlest"),"icon-hover":Bs("icon-hover"),"icon-selected":Bs("icon-selected"),"icon-selected-hover":Bs("icon-selected-hover"),"icon-disabled":Bs("icon-disabled"),"icon-disabled-subtle":Bs("icon-disabled-subtle"),"icon-selected-disabled":Bs("icon-selected-disabled"),"icon-success":Bs("icon-success"),"icon-warning":Bs("icon-warning"),"icon-error":Bs("icon-error"),"icon-error-strong":Bs("icon-error-strong"),"icon-info":Bs("icon-info"),"icon-inverse":Bs("icon-inverse"),"icon-primary-inverse":Bs("icon-primary-inverse"),border:Bs("border"),"border-strong":Bs("border-strong"),"border-stronger":Bs("border-stronger"),"border-primary":Bs("border-primary"),"border-primary-subtle":Bs("border-primary-subtle"),"border-hover":Bs("border-hover"),"border-hover-strong":Bs("border-hover-strong"),"border-selected":Bs("border-selected"),"border-selected-subtle":Bs("border-selected-subtle"),"border-selected-subtlest":Bs("border-selected-subtlest"),"border-selected-hover":Bs("border-selected-hover"),"border-focus":Bs("border-focus"),"border-focus-strong":Bs("border-focus-strong"),"border-disabled":Bs("border-disabled"),"border-selected-disabled":Bs("border-selected-disabled"),"border-success":Bs("border-success"),"border-warning":Bs("border-warning"),"border-error":Bs("border-error"),"border-error-focus":Bs("border-error-focus"),"border-error-focus-strong":Bs("border-error-focus-strong"),"border-error-strong":Bs("border-error-strong"),"border-info":Bs("border-info"),bg:Bs("bg"),"bg-strong":Bs("bg-strong"),"bg-stronger":Bs("bg-stronger"),"bg-strongest":Bs("bg-strongest"),"bg-hover":Bs("bg-hover"),"bg-hover-strong":Bs("bg-hover-strong"),"bg-hover-subtle":Bs("bg-hover-subtle"),"bg-hover-neutral":Bs("bg-hover-neutral"),"bg-hover-neutral-strong":Bs("bg-hover-neutral-strong"),"bg-selected":Bs("bg-selected"),"bg-selected-hover":Bs("bg-selected-hover"),"bg-selected-strong":Bs("bg-selected-strong"),"bg-selected-stronger":Bs("bg-selected-stronger"),"bg-selected-strongest":Bs("bg-selected-strongest"),"bg-selected-strongest-hover":Bs("bg-selected-strongest-hover"),"bg-disabled":Bs("bg-disabled"),"bg-selected-disabled":Bs("bg-selected-disabled"),"bg-selected-stronger-disabled":Bs("bg-selected-stronger-disabled"),"bg-success":Bs("bg-success"),"bg-success-hover":Bs("bg-success-hover"),"bg-success-strong":Bs("bg-success-strong"),"bg-success-strong-hover":Bs("bg-success-strong-hover"),"bg-warning":Bs("bg-warning"),"bg-warning-hover":Bs("bg-warning-hover"),"bg-warning-strong":Bs("bg-warning-strong"),"bg-warning-strong-hover":Bs("bg-warning-strong-hover"),"bg-info":Bs("bg-info"),"bg-info-hover":Bs("bg-info-hover"),"bg-info-strong":Bs("bg-info-strong"),"bg-info-strong-hover":Bs("bg-info-strong-hover"),"bg-error":Bs("bg-error"),"bg-error-hover":Bs("bg-error-hover"),"bg-error-strong":Bs("bg-error-strong"),"bg-error-strong-hover":Bs("bg-error-strong-hover"),"bg-inverse":Bs("bg-inverse"),"bg-inverse-subtle":Bs("bg-inverse-subtle"),"bg-inverse-subtler":Bs("bg-inverse-subtler"),"bg-inverse-subtlest":Bs("bg-inverse-subtlest"),"bg-inverse-hover":Bs("bg-inverse-hover"),"bg-primary":Bs("bg-primary"),"bg-primary-subtle":Bs("bg-primary-subtle"),"bg-primary-subtler":Bs("bg-primary-subtler"),"bg-primary-subtlest":Bs("bg-primary-subtlest"),"bg-available":Bs("bg-available"),"bg-primary-hover":Bs("bg-primary-hover"),"bg-primary-subtlest-hover":Bs("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bs("bg-primary-subtlest-selected"),"overlay-strong":Bs("overlay-strong"),"overlay-subtle":Bs("overlay-subtle"),hyperlink:Bs("hyperlink"),"hyperlink-hover":Bs("hyperlink-hover"),"hyperlink-visited":Bs("hyperlink-visited"),"hyperlink-inverse":Bs("hyperlink-inverse"),"focus-ring":Bs("focus-ring"),"focus-ring-inverse":Bs("focus-ring-inverse")},zs={collections:{default:{solid:e=>t=>{var r,i,o;const{thickness:a,radius:s,colour:l}=e||{},d=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:gs["width-010"](t),c=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:Rs.border(t),f=gs.solid;return n.css`
            border: ${d} ${f} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,i,o;const{thickness:a,radius:s,colour:l}=e||{},d=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:gs["width-010"](t),c=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:Rs.border(t),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return n.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Ps=e=>1===e.length&&"theme"in e[0],Ls=e=>(...t)=>r=>{const n=Ps(t)?[]:t,i=Ps(t)?t[0]:r,o=i.theme;return(0,us(zs,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ns={solid:Ls("solid"),"dashed-default":Ls("dashed-default")},Hs={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Ws=e=>t=>{var r;const n=t.theme,i=us(Hs,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?cs(i,e,n.overrides.breakpoint):i[e],o},Ys={"xxs-min":Ws("xxs-min"),"xxs-max":Ws("xxs-max"),"xs-min":Ws("xs-min"),"xs-max":Ws("xs-max"),"sm-min":Ws("sm-min"),"sm-max":Ws("sm-max"),"md-min":Ws("md-min"),"md-max":Ws("md-max"),"lg-min":Ws("lg-min"),"lg-max":Ws("lg-max"),"xl-min":Ws("xl-min"),"xl-max":Ws("xl-max"),"xxl-min":Ws("xxl-min"),"xxs-column":Ws("xxs-column"),"xs-column":Ws("xs-column"),"sm-column":Ws("sm-column"),"md-column":Ws("md-column"),"lg-column":Ws("lg-column"),"xl-column":Ws("xl-column"),"xxl-column":Ws("xxl-column"),"xxs-gutter":Ws("xxs-gutter"),"xs-gutter":Ws("xs-gutter"),"sm-gutter":Ws("sm-gutter"),"md-gutter":Ws("md-gutter"),"lg-gutter":Ws("lg-gutter"),"xl-gutter":Ws("xl-gutter"),"xxl-gutter":Ws("xxl-gutter"),"xxs-margin":Ws("xxs-margin"),"xs-margin":Ws("xs-margin"),"sm-margin":Ws("sm-margin"),"md-margin":Ws("md-margin"),"lg-margin":Ws("lg-margin"),"xl-margin":Ws("xl-margin"),"xxl-margin":Ws("xxl-margin")},Vs=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Ys["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Us={MaxWidth:Vs("max-width"),MinWidth:Vs("min-width")},Ks={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},qs=e=>t=>{var r;const n=t.theme,i=us(Ks,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?cs(i,e,n.overrides.fontSpec):i[e]},Xs={"heading-size-xxl":qs("heading-size-xxl"),"heading-size-xl":qs("heading-size-xl"),"heading-size-lg":qs("heading-size-lg"),"heading-size-md":qs("heading-size-md"),"heading-size-sm":qs("heading-size-sm"),"heading-size-xs":qs("heading-size-xs"),"heading-lh-xxl":qs("heading-lh-xxl"),"heading-lh-xl":qs("heading-lh-xl"),"heading-lh-lg":qs("heading-lh-lg"),"heading-lh-md":qs("heading-lh-md"),"heading-lh-sm":qs("heading-lh-sm"),"heading-lh-xs":qs("heading-lh-xs"),"heading-ls-xxl":qs("heading-ls-xxl"),"heading-ls-xl":qs("heading-ls-xl"),"heading-ls-lg":qs("heading-ls-lg"),"heading-ls-md":qs("heading-ls-md"),"heading-ls-sm":qs("heading-ls-sm"),"heading-ls-xs":qs("heading-ls-xs"),"weight-light":qs("weight-light"),"weight-regular":qs("weight-regular"),"weight-semibold":qs("weight-semibold"),"weight-bold":qs("weight-bold"),"font-family":qs("font-family"),"body-size-baseline":qs("body-size-baseline"),"body-size-md":qs("body-size-md"),"body-size-sm":qs("body-size-sm"),"body-size-xs":qs("body-size-xs"),"body-lh-baseline":qs("body-lh-baseline"),"body-lh-md":qs("body-lh-md"),"body-lh-sm":qs("body-lh-sm"),"body-lh-xs":qs("body-lh-xs"),"body-ls-baseline":qs("body-ls-baseline"),"body-ls-md":qs("body-ls-md"),"body-ls-sm":qs("body-ls-sm"),"body-ls-xs":qs("body-ls-xs"),"form-label-size":qs("form-label-size"),"form-description-size":qs("form-description-size"),"form-label-lh":qs("form-label-lh"),"form-description-lh":qs("form-description-lh"),"form-label-ls":qs("form-label-ls"),"form-description-ls":qs("form-description-ls")},Gs=(e,t,r,i,o)=>{const{disableLigatures:a}=o||{};return n.css`
        font-family: ${qs("font-family")};
        font-size: ${qs(e)};
        font-weight: ${qs(t)};
        line-height: ${qs(r)};
        letter-spacing: ${qs(i)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Zs=(e={})=>({"heading-xxl-light":Gs("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Gs("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Gs("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Gs("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Gs("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Gs("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Gs("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Gs("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Gs("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Gs("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Gs("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Gs("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Gs("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Gs("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Gs("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Gs("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Gs("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Gs("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Gs("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Gs("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Gs("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Gs("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Gs("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Gs("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Gs("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Gs("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Gs("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Gs("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Gs("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Gs("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Gs("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Gs("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Gs("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Gs("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Gs("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Gs("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Gs("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Gs("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Gs("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Gs("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Gs("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Gs("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Qs=Zs({disableLigatures:!0}),Js={collections:{default:Zs(),bookingsg:Qs,pa:Zs({disableLigatures:!0}),a11yplayground:Zs({disableLigatures:!0}),supportgowhere:Zs({disableLigatures:!0})},defaultValue:"default"},el=e=>t=>{var r;const n=t.theme,i=us(Js,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?cs(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},tl={"heading-xxl-light":el("heading-xxl-light"),"heading-xxl-regular":el("heading-xxl-regular"),"heading-xxl-semibold":el("heading-xxl-semibold"),"heading-xxl-bold":el("heading-xxl-bold"),"heading-xl-light":el("heading-xl-light"),"heading-xl-regular":el("heading-xl-regular"),"heading-xl-semibold":el("heading-xl-semibold"),"heading-xl-bold":el("heading-xl-bold"),"heading-lg-light":el("heading-lg-light"),"heading-lg-regular":el("heading-lg-regular"),"heading-lg-semibold":el("heading-lg-semibold"),"heading-lg-bold":el("heading-lg-bold"),"heading-md-light":el("heading-md-light"),"heading-md-regular":el("heading-md-regular"),"heading-md-semibold":el("heading-md-semibold"),"heading-md-bold":el("heading-md-bold"),"heading-sm-light":el("heading-sm-light"),"heading-sm-regular":el("heading-sm-regular"),"heading-sm-semibold":el("heading-sm-semibold"),"heading-sm-bold":el("heading-sm-bold"),"heading-xs-light":el("heading-xs-light"),"heading-xs-regular":el("heading-xs-regular"),"heading-xs-semibold":el("heading-xs-semibold"),"heading-xs-bold":el("heading-xs-bold"),"body-baseline-light":el("body-baseline-light"),"body-baseline-regular":el("body-baseline-regular"),"body-baseline-semibold":el("body-baseline-semibold"),"body-baseline-bold":el("body-baseline-bold"),"body-md-light":el("body-md-light"),"body-md-regular":el("body-md-regular"),"body-md-semibold":el("body-md-semibold"),"body-md-bold":el("body-md-bold"),"body-sm-light":el("body-sm-light"),"body-sm-regular":el("body-sm-regular"),"body-sm-semibold":el("body-sm-semibold"),"body-sm-bold":el("body-sm-bold"),"body-xs-light":el("body-xs-light"),"body-xs-regular":el("body-xs-regular"),"body-xs-semibold":el("body-xs-semibold"),"body-xs-bold":el("body-xs-bold"),"form-label":el("form-label"),"form-description":el("form-description")},rl={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},nl=e=>t=>{var r;const n=t.theme,i=us(rl,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?cs(i,e,n.overrides.motion):i[e]},il={"duration-150":nl("duration-150"),"duration-250":nl("duration-250"),"duration-350":nl("duration-350"),"duration-500":nl("duration-500"),"duration-800":nl("duration-800"),"duration-1000":nl("duration-1000"),"ease-default":nl("ease-default"),"ease-standard":nl("ease-standard"),"ease-entrance":nl("ease-entrance"),"ease-exit":nl("ease-exit")},ol={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},al=e=>t=>{var r;const n=t.theme,i=us(ol,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${cs(i,e,n.overrides.radius)}px`:`${i[e]}px`},sl={none:al("none"),xs:al("xs"),sm:al("sm"),md:al("md"),lg:al("lg"),full:al("full")},ll={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},dl=e=>t=>{var r;const n=t.theme,i=us(ll,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${cs(i,e,n.overrides.spacing)}px`:`${i[e]}px`},cl={"spacing-0":dl("spacing-0"),"spacing-4":dl("spacing-4"),"spacing-8":dl("spacing-8"),"spacing-12":dl("spacing-12"),"spacing-16":dl("spacing-16"),"spacing-20":dl("spacing-20"),"spacing-24":dl("spacing-24"),"spacing-32":dl("spacing-32"),"spacing-40":dl("spacing-40"),"spacing-48":dl("spacing-48"),"spacing-64":dl("spacing-64"),"spacing-72":dl("spacing-72"),"layout-xs":dl("layout-xs"),"layout-sm":dl("layout-sm"),"layout-md":dl("layout-md"),"layout-lg":dl("layout-lg"),"layout-xl":dl("layout-xl"),"layout-xxl":dl("layout-xxl"),"layout-xxxl":dl("layout-xxxl")},ul=()=>"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",fl=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),hl=Object.assign(Object.assign({},Rs),{Primitive:Es}),gl=Object.assign(Object.assign({},tl),{Spec:Xs}),pl=il,ml=Object.assign(Object.assign({},gs),{Util:Ns}),bl=cl,vl=sl,yl=Ys,xl=Us,wl={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},$l={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Cl={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Sl={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},jl={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},kl={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Dl={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},El={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Tl={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Fl=Object.assign(Object.assign({},wl),{light:fl(wl,"light"),dark:fl(wl,"dark")}),Ol=Object.assign(Object.assign({},$l),{light:fl($l,"light"),dark:fl($l,"dark")}),Il=Object.assign(Object.assign({},Cl),{light:fl(Cl,"light"),dark:fl(Cl,"dark")}),Ml=Object.assign(Object.assign({},Sl),{light:fl(Sl,"light"),dark:fl(Sl,"dark")}),_l=Object.assign(Object.assign({},jl),{light:fl(jl,"light"),dark:fl(jl,"dark")}),Al=Object.assign(Object.assign({},kl),{light:fl(kl,"light"),dark:fl(kl,"dark")}),Bl=Object.assign(Object.assign({},Dl),{light:fl(Dl,"light"),dark:fl(Dl,"dark")}),Rl=Object.assign(Object.assign({},El),{light:fl(El,"light"),dark:fl(El,"dark")}),zl=Object.assign(Object.assign({},Tl),{light:fl(Tl,"light"),dark:fl(Tl,"dark")}),Pl=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${bl["spacing-24"]};
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

        ${({$highlight:e})=>e&&n.css`
                background-color: ${hl["bg-hover-neutral"]};
            `}
    }
`,Ll=U.default.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=ki(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(Pl,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),Nl=e=>n.css`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Hl=(e,t,r=!1)=>{const i=`${e}-${t}`;return n.css`
        ${gl[i]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Wl=e=>{if(e)return n.css`
            ${Nl(e)}
        `},Yl=(e,t)=>n.css`
    ${Hl(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?n.css`
            display: block;
            ${Wl(r)}
        `:e?n.css`
            display: inline;
        `:n.css`
            display: block;
            ${Wl(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${hl.text};
`;exports.Typography=void 0,function(t){const r=(e,t,r)=>{const n=q.default(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Yl(t,e)}
        `;return n.displayName=`Typography.${r}`,n};t.HeadingXXL=r("h1","heading-xxl","HeadingXXL"),t.HeadingXL=r("h2","heading-xl","HeadingXL"),t.HeadingLG=r("h3","heading-lg","HeadingLG"),t.HeadingMD=r("h4","heading-md","HeadingMD"),t.HeadingSM=r("h5","heading-sm","HeadingSM"),t.HeadingXS=r("h6","heading-xs","HeadingXS");const i=(e,t)=>{const r=q.default.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Yl(e,t)}
        `;return r.displayName=`Typography.${t}`,r};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,r)=>{const i=q.default.a`
            ${e=>n.css`
                ${Hl(t,e.weight||"regular")}
                color: ${hl.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${hl["text-hover"]};
                }
            `}
        `,o=t=>{var{external:r=!1,children:n}=t,o=ki(t,["external","children"]);return e.jsxs(i,Object.assign({},o,{children:[n,r&&e.jsx(Vl,{})]}))};return o.displayName=`Typography.${r}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(exports.Typography||(exports.Typography={}));const Vl=q.default(o.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Ul=q.default.div`
    background-color: ${hl.bg} !important;
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${xl.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Kl=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,ql=e=>n.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${pl["duration-250"]} ${pl["ease-standard"]};
`,Xl=q.default(exports.Typography.HeadingSM)`
    ${e=>ql(e.$isCollapsed)}
`,Gl=q.default(exports.Typography.HeadingXS)`
    ${e=>ql(e.$isCollapsed)}
`,Zl=q.default(Ll)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${pl["duration-250"]} ${pl["ease-default"]};
    margin: auto -1rem auto 0;
`,Ql=q.default(i.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${hl["icon-primary"]};
`,Jl=q.default(Ci.div)`
    overflow: hidden;
`,ed=q.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${xl.MaxWidth.lg} {
        padding-right: 0;
    }
`;const td=t.forwardRef((function({title:r,children:n,expanded:i,type:o="default",collapsible:a=!0,className:s,id:l,"data-testid":d="accordion-item"},c){const u=t.useRef(null),f=t.useContext(X),[h,g]=t.useState(!a||(null!=i?i:f)),[p,m]=t.useState(!1),b=Ye(),v=b.ref;t.useImperativeHandle(c,(()=>Object.assign(u.current,{expand(){g(!0)},collapse(){g(!1)},isExpanded:()=>h})),[h]),t.useEffect((()=>{p&&g(!a||f)}),[f]),t.useEffect((()=>{p&&g(!!i)}),[i]),t.useEffect((()=>{m(!0)}),[]);const y={height:h?b.height:0},x=oi(y);return e.jsxs(Ul,{"data-testid":d,className:s,id:l,$isCollapsed:h,ref:u,children:[e.jsxs(Kl,{$isCollapsed:a,onClick:a?e=>{e.preventDefault(),g((e=>!e))}:void 0,children:["string"!=typeof r?r:"small"===o?e.jsx(Gl,{weight:"bold","data-testid":`${d}-title`,$isCollapsed:h,children:r}):e.jsx(Xl,{weight:"bold","data-testid":`${d}-title`,$isCollapsed:h,children:r}),a&&e.jsx(Zl,{"data-testid":`${d}-expand-collapse-button`,$isCollapsed:h,focusHighlight:!1,focusOutline:"browser","aria-label":h?"Collapse":"Expand",children:e.jsx(Ql,{})})]}),e.jsx(Jl,{style:p?x:y,$isCollapsed:h,"data-testid":`${d}-expandable-container`,inert:ji(!h),children:e.jsx(ed,{ref:v,"data-testid":"content-container",children:n})})]})})),rd=q.default.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,nd=n.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,id=q.default.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: ${nd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,od=q.default(id)`
    animation-delay: -0.45s;
`,ad=q.default(id)`
    animation-delay: -0.3s;
`,sd=q.default(id)`
    animation-delay: -0.15s;
`,ld=({color:t,className:r,size:n})=>e.jsxs(rd,{className:r,$size:n,$color:t,"data-testid":"component-loading-spinner",children:[e.jsx(id,{id:"inner1"}),e.jsx(od,{id:"inner2"}),e.jsx(ad,{id:"inner3"}),e.jsx(sd,{id:"inner4"})]}),dd={Button:{"button-radius":sl.md,"button-default-colour-bg":Rs["bg-primary"],"button-default-colour-bg-hover":Rs["bg-primary-hover"],"button-default-colour-text":Rs["text-inverse"],"button-secondary-colour-border":Rs["border-primary"],"button-secondary-colour-text":Rs["text-primary"],"button-light-colour-text":Rs["text-primary"],"button-link-colour-text":Rs["text-primary"]}},cd={collections:{default:{Button:{"button-radius":sl.sm,"button-default-colour-bg":Rs["bg-primary"],"button-default-colour-bg-hover":Rs["bg-primary-hover"],"button-default-colour-text":Rs["text-inverse"],"button-secondary-colour-border":Rs["border-primary"],"button-secondary-colour-text":Rs["text-primary"],"button-light-colour-text":Rs["text-primary"],"button-link-colour-text":Rs["text-primary"]}},pa:{Button:{"button-radius":sl.full,"button-default-colour-bg":Rs["bg-primary"],"button-default-colour-bg-hover":Rs["bg-primary-hover"],"button-default-colour-text":Rs["text-inverse"],"button-secondary-colour-border":Rs["border-primary"],"button-secondary-colour-text":Rs["text-primary"],"button-light-colour-text":Rs["text-primary"],"button-link-colour-text":Rs["text-primary"]}},a11yplayground:dd},defaultValue:"default"},ud=(e,t)=>r=>{var n,i;const o=r.theme,a=us(cd,null==o?void 0:o.componentScheme);return fd((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||a[e][t],r)},fd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},hd=ud("Button","button-radius"),gd=ud("Button","button-default-colour-bg"),pd=ud("Button","button-default-colour-bg-hover"),md=ud("Button","button-default-colour-text"),bd=ud("Button","button-secondary-colour-border"),vd=ud("Button","button-secondary-colour-text"),yd=ud("Button","button-light-colour-text"),xd=ud("Button","button-link-colour-text"),wd=q.default.button`
    padding: ${bl["spacing-8"]} ${bl["spacing-16"]};
    min-width: 4rem;
    border: ${ml["width-010"]} ${ml.solid} transparent;
    transition: all ${pl["duration-250"]} ${pl["ease-default"]};
    border-radius: ${hd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return n.css`
                    background-color: ${hl.bg};
                    border-color: ${e.$buttonIsDanger?hl["border-error-strong"]:bd};

                    color: ${e.$buttonIsDanger?hl["text-error"]:vd};

                    &:hover,
                    &:active {
                        background-color: ${hl["bg-hover-neutral"]};
                    }
                `;case"light":return n.css`
                    background-color: ${hl.bg};
                    border-color: ${hl.border};

                    color: ${e.$buttonIsDanger?hl["text-error"]:yd};

                    &:hover,
                    &:active {
                        background-color: ${hl["bg-hover-neutral"]};
                    }
                `;case"link":return n.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?hl["text-error"]:xd};
                    &:hover,
                    &:active {
                        background-color: ${hl["bg-hover-neutral"]};
                    }
                `;case"disabled":return n.css`
                    background-color: ${hl["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${hl["text-disabled"]};
                `;default:return n.css`
                    background-color: ${e.$buttonIsDanger?hl["bg-error-strong"]:gd};};

                    ${xl.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${md}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?hl["bg-error-strong-hover"]:pd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return n.css`
                    height: 2.5rem;
                    ${gl["body-md-semibold"]}

                    ${xl.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return n.css`
                    height: 4rem;
                    ${gl["heading-md-semibold"]}

                    ${xl.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return n.css`
                    height: 3rem;
                    ${gl["heading-xs-semibold"]}

                    ${xl.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,$d=q.default(ld)`
    margin-right: 0.5rem;
`,Cd=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=ki(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(wd,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},d,l,{children:[o&&e.jsx($d,{}),e.jsx("span",{children:n})]}))};Cd.displayName="Button.Default";const Sd=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=ki(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(wd,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},d,l,{children:[o&&e.jsx($d,{}),e.jsx("span",{children:n})]}))};Sd.displayName="Button.Small";const jd=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=ki(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:s};return e.jsxs(wd,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},d,l,{children:[o&&e.jsx($d,{}),e.jsx("span",{children:n})]}))};jd.displayName="Button.Large";const kd={Default:U.default.forwardRef(Cd),Small:U.default.forwardRef(Sd),Large:U.default.forwardRef(jd)},Dd=q.default.div`
    width: 100%;
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
`,Ed=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${xl.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return n.css`
                ${xl.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Td=q.default(exports.Typography.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${xl.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return n.css`
                ${xl.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Fd=q.default(kd.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Od=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:a=!1,className:s,id:l,"data-testid":d})=>{const[c,u]=t.useState("expand-all"===o),f=e=>{e.preventDefault(),u((e=>!e))};return e.jsx(X.Provider,{value:c,children:e.jsxs(Dd,{className:s,id:l,"data-testid":d,children:[n||i?e.jsxs(Ed,{$showTitleInMobile:a,$hasExpandAll:i,children:[n&&e.jsx(Td,{weight:"bold",$showInMobile:a,"data-testid":"accordion-title",children:n}),i&&e.jsx(Fd,{"data-testid":"accordion-expand-collapse-button",onClick:f,styleType:"link",type:"button",children:c?"Hide all":"Show all"})]}):null,r]})})}),{Item:td}),Id=e=>{const{textSize:t}=e||{};return n.css`
        // Text styling
        ${t&&gl[`${t}-regular`]}

        strong {
            font-weight: ${gl.Spec["weight-semibold"]};
            ${t&&gl[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${gl.Spec["weight-semibold"]};
            ${t&&gl[`${t}-semibold`]}
            color: ${hl.hyperlink};
            text-decoration: none;

            svg {
                color: ${hl["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${hl["hyperlink-hover"]};

                svg {
                    color: ${hl["icon-hover"]};
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
    `},Md=q.default.div`
    padding: ${bl["spacing-8"]} ${bl["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=hl["bg-error"](e),r=hl["border-error"](e);break;case"success":t=hl["bg-success"](e),r=hl["border-success"](e);break;case"warning":default:t=hl["bg-warning"](e),r=hl["border-warning"](e);break;case"info":t=hl["bg-info"](e),r=hl["border-info"](e);break;case"description":t=hl["bg-strong"](e),r=hl["border-strong"](e)}return n.css`
            background: ${t};
            border-left: ${ml["width-020"]} ${ml.solid}
                ${r};
        `}}

    color: ${hl.text};
    ${e=>"small"===e.$sizeType?Id({textSize:"body-sm"}):Id({textSize:"body-md"})}
`,_d=q.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${bl["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=hl["icon-error"](e);break;case"success":t=hl["icon-success"](e);break;case"warning":default:t=hl["icon-warning"](e);break;case"info":t=hl["icon-info"](e);break;case"description":t=hl["icon-subtle"](e)}return n.css`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Ad=q.default(exports.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?n.css`
                ${gl["body-sm-semibold"]}
                margin-top: ${bl["spacing-4"]};
            `:n.css`
                ${gl["body-md-semibold"]}
                margin-top: ${bl["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${bl["spacing-4"]};
    }
`,Bd=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Rd=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return n.css`
                margin-bottom: ${bl["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,zd=q.default.button`
    ${e=>"small"===e.$sizeType?n.css`
                ${gl["body-sm-semibold"]}
            `:n.css`
                ${gl["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${bl["spacing-4"]};
    margin-top: ${bl["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${hl["text-primary"]};
`,Pd=q.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${pl["duration-350"]} ${pl["ease-standard"]};
`,Ld=r=>{var{type:n,className:i,children:o,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:g=!1,customIcon:p,maxCollapsedHeight:m}=r,b=ki(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:C}=Ye();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(j())},j=()=>!(!$||!m)&&$>m;return e.jsxs(Md,{className:i,$type:n,$sizeType:h,"data-testid":b["data-testid"],children:[g&&e.jsx(_d,{$sizeType:h,$type:n,children:(()=>{if(n&&p)return p;switch(n){case"success":return e.jsx(c.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(d.ICircleFillIcon,{});default:return null}})()}),e.jsxs(Bd,{children:[e.jsxs(Rd,{$maxCollapsedHeight:j()?m:void 0,$showMore:v,$hasActionLink:!!u,children:[e.jsx("div",{ref:C,children:o}),u?e.jsxs(Ad,Object.assign({"data-testid":"action-link",$type:n,$sizeType:h},u,{children:[u.children,f||e.jsx(a.ArrowRightIcon,{})]})):null]}),x&&e.jsxs(zd,{$sizeType:h,$type:n,type:"button",onClick:()=>y(!v),children:["Show ",v?"less":"more",e.jsx(Pd,{$expanded:v})]})]})]})},Nd=t.lazy((()=>Di(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.a1d597b9.js")}))).LottieSpinner}})))),Hd=r=>e.jsx(Yd,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(Wd,{}),children:e.jsx(Nd,{})})})),Wd=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),Yd=q.default.div`
    margin: 0 auto;
    padding: ${bl["spacing-32"]} ${bl["spacing-16"]};
`,Vd=t.lazy((()=>Di(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.75666e57.js")}))).LottieLoadingDots}})))),Ud=r=>e.jsx(qd,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(Kd,{}),children:e.jsx(Vd,{})})})),Kd=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),qd=q.default.div`
    margin: 0 auto;
`,Xd=t.lazy((()=>Di(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.70c3b113.js")}))).LottieLoadingDotsSpinner}})))),Gd=r=>{var{color:i}=r,o=ki(r,["color"]);const a=n.useTheme(),s=i||hl["icon-primary"]({theme:a});return e.jsx(Qd,Object.assign({},o,{children:e.jsx(t.Suspense,{fallback:e.jsx(Zd,{}),children:e.jsx(Xd,{color:s})})}))},Zd=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),Qd=q.default.div`
    margin: 0 auto;
`;var Jd,ec={exports:{}};Jd=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function d(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))r.call(o,d)&&(s[d]=o[d]);if(t){a=t(o);for(var c=0;c<a.length;c++)n.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+r+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](t,d,s,r,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+r+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var f=l?l():"";n("Failed "+r+" type: "+c.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:g(d),arrayOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new h("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:g((function(t,r,n,i,o){var a=t[r];return e(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||c;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,i){return b(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new h("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),d}return g((function(t,r,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new h("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,i,o){var s=t[r],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return m(n,i,o,d,y(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return g((function(t,r,n,i,l){var d=t[r],c=v(d);if("object"!==c)return new h("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var f in u){var g=e[f];if(s(e,f)&&"function"!=typeof g)return m(n,i,l,f,y(g));if(!g)return new h("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=g(d,f,n,i,l+"."+f,a);if(p)return p}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},i=0;function o(o,s,l,d,u,f,g){if(d=d||c,f=f||l,g!==a){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var m=d+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,u,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function p(e){return g((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!b(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case d:case c:case i:case a:case o:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case p:case g:case s:return m;default:return t}}case n:return t}}}var w=d,$=c,C=l,S=s,j=r,k=u,D=i,E=p,T=g,F=n,O=a,I=o,M=f,_=!1;function A(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=j,t.ForwardRef=k,t.Fragment=D,t.Lazy=E,t.Memo=T,t.Portal=F,t.Profiler=O,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===d},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===p},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),f=n(n({},l),u);t.default={all:f,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),g=u();return(0,i.useEffect)((function(){g&&r&&r(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var tc=ec.exports=Jd(U.default);const rc=q.default.div`
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    margin-bottom: ${bl["spacing-32"]};
`,nc=q.default(Ci.div)`
    overflow: hidden;
`,ic=q.default.div`
    height: max-content;
`,oc=q.default.div`
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};
`,ac=q.default.div`
    padding: ${bl["spacing-16"]} ${bl["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${xl.MaxWidth.sm} {
        padding: ${bl["spacing-16"]} ${bl["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return n.css`
                cursor: pointer;
            `}}
`,sc=q.default.div`
    ${gl["heading-sm-semibold"]}
    color: ${hl.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${bl["spacing-16"]};
`,lc=q.default.div`
    display: flex;
`,dc=q.default.span`
    display: flex;
    align-items: center;
    margin-right: ${bl["spacing-40"]};

    ${xl.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return n.css`
                    color: ${hl["icon-error"]};
                `;case"warning":return n.css`
                    color: ${hl["icon-warning"]};
                `}}}
`,cc=q.default(s.ExclamationCircleFillIcon)`
    height: ${gl.Spec["heading-size-sm"]};
    width: ${gl.Spec["heading-size-sm"]};
`,uc=q.default.div`
    display: flex;
    margin-left: auto;
    ${xl.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return n.css`
                margin-right: ${bl["spacing-40"]};
                ${xl.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${bl["spacing-16"]};
                }
            `}}
`,fc=q.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${bl["spacing-16"]};
    margin: -${bl["spacing-16"]};
    display: flex;
    align-items: center;

    ${xl.MaxWidth.sm} {
        margin: -${bl["spacing-16"]} -${bl["spacing-16"]} -${bl["spacing-16"]} 0;
        margin-left: auto;
    }
`,hc=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${pl["duration-250"]} ${pl["ease-default"]};
`,gc=q.default(f.ChevronDownIcon)`
    color: ${hl.icon};
    height: ${gl.Spec["heading-size-sm"]};
    width: ${gl.Spec["heading-size-sm"]};
`;var pc={exports:{}};pc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,a=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:f,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},j=v;j.l=C,j.i=$,j.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return j},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!j.u(t)||t,c=j.p(e),h=function(e,t){var i=j.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return j.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(p<y?p+7:p)-y;return h(n?b-x:b+(6-x),m);case s:case f:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=j.p(e),c="set"+(this.$u?"UTC":""),h=(r={},r[s]=c+"Date",r[f]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[j.p(e)]()},b.add=function(n,c){var f,h=this;n=Number(n);var g=j.p(c),p=function(e){var t=S(h);return j.w(t.date(t.date()+Math.round(e*n)),h)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(f={},f[o]=t,f[a]=r,f[i]=e,f)[g]||1,b=this.$d.getTime()+n*m;return j.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return j.s(o%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return s+1;case"MM":return j.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return j.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var g,p=this,m=j.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return j.m(p,b)};switch(m){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(y-v)/6048e5;break;case s:g=(y-v)/864e5;break;case a:g=y/r;break;case o:g=y/t;break;case i:g=y/e;break;default:g=y}return h?g:j.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return j.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return S.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var mc=Ii(pc.exports),bc={exports:{}};bc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],f=c&&c[0],h=c&&c[1];a[l]=h?{regex:f,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,g=a||(i||o?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var b=s||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(p,m,g,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,b,v,y,x)):new Date(p,m,g,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){a[1]=s[g-1];var p=r.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var vc=Ii(bc.exports),yc={exports:{}};yc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var xc=Ii(yc.exports),wc={exports:{}};wc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var $c=Ii(wc.exports),Cc={exports:{}};Cc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Sc,jc,kc=Ii(Cc.exports),Dc={exports:{}};Dc.exports=(Sc={year:0,month:1,day:2,hour:3,minute:4,second:5},jc={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=jc[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),jc[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Sc[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],f=r(c).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ec,Tc=Ii(Dc.exports);mc.extend(xc),mc.extend(kc),mc.extend($c),mc.extend(vc),mc.extend(Tc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=mc(t).startOf("week");return Fc(r).map((e=>Oc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Oc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(mc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+mc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=mc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?mc(n):void 0,i?mc(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Ec||(Ec={}));const Fc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Oc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ic=[1,3,5,7,8,10,12],Mc=[4,6,9,11];var _c,Ac,Bc,Rc;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Ic.includes(o)?Math.min(i,31).toString():Mc.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=mc(e,r);return mc(t,r).diff(n,"minute")},e.toDayjs=e=>e?mc(e):mc(),e.addMinutesToTime=(e,t,r="HH:mm")=>mc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>mc(e).isSame(mc(t),r)}(_c||(_c={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!mc(e).isBefore(n,"day"))||!(!i||!mc(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(mc(e).isValid())return e}return""}}(Ac||(Ac={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Bc||(Bc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(Rc||(Rc={}));function zc(e){const r=t.useRef(null);return t.useLayoutEffect((()=>{r.current=e}),[e]),t.useCallback(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const Pc=(e,r,n="window",i)=>{const o=t.useRef();t.useEffect((()=>{o.current=r}),[r]),t.useEffect((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const r=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,r,i),()=>{null==t||t.removeEventListener(e,r,i)}}),[e,n])},Lc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Nc=()=>{const[e,r]=t.useState(!1);return t.useEffect((()=>{r(!0)}),[]),e};function Hc({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(c,c)}}}}const Wc=e=>{const r=(e=>{const r=t.useRef(e),n=t.useRef();return t.useEffect((()=>{n.current=r.current,r.current=e}),[e]),n.current})(e);return r!==e},Yc=e=>{const[r,n]=t.useState(e),i=t.useRef(e);return[r,t.useCallback((e=>{i.current=e,n(e)}),[]),i]},Vc=q.default.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${bl["spacing-32"]} 0;

    ${xl.MaxWidth.xl} {
        margin: ${bl["spacing-24"]} 0;
    }

    ${xl.MaxWidth.lg} {
        margin: ${bl["spacing-16"]} 0;
    }
`,Uc=q.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${bl["spacing-8"]};
    font-size: ${gl.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${xl.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,Kc=q.default.div`
    width: ${bl["spacing-64"]};
    height: calc(1lh + ${bl["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",i=hl.bg(e);return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||i}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||i},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,n.css`
            ${xl.MaxWidth.lg} {
                ${t}
            }
        `}};
`,qc=q.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Xc=q.default(h.ChevronRightIcon)`
    margin: ${bl["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${hl["icon-subtle"]};
`,Gc=q.default(exports.Typography.BodyMD)`
    margin: ${bl["spacing-8"]} !important;
`,Zc=q.default(exports.Typography.LinkMD)`
    margin: ${bl["spacing-8"]} !important;
`,Qc=q.default(wd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Jc=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:d=!1}=t,c=ki(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:a};return e.jsxs(Qc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},u,c,{children:[d?e.jsx(ld,{}):s,e.jsx("span",{children:n})]}))};Jc.displayName="ButtonWithIcon.Default";const eu=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:d=!1}=t,c=ki(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:a};return e.jsxs(Qc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},u,c,{children:[d?e.jsx(ld,{}):s,e.jsx("span",{children:n})]}))};eu.displayName="ButtonWithIcon.Small";const tu={Default:U.default.forwardRef(Jc),Small:U.default.forwardRef(eu)},ru=q.default.div`
    --vertical-inset: ${bl["spacing-24"]};
    --horizontal-inset: ${bl["spacing-20"]};
    --header-bottom-spacing: ${bl["spacing-4"]};

    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${xl.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,nu=n.css`
    color: ${hl.icon};
    height: 1rem;
    width: 1rem;
`,iu=q.default(g.ChevronLeftIcon)`
    ${nu}
`,ou=q.default(h.ChevronRightIcon)`
    ${nu}
`,au=q.default(f.ChevronDownIcon)`
    ${nu}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,su=q.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,lu=q.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,du=q.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,cu=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${hl.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return n.css`
                display: none;
            `}}
`,uu=q.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,fu=q.default.div`
    display: flex;
`,hu=q.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?n.css`
                display: none;
            `:e.$expanded?n.css`
                ${au} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,gu=q.default.span`
    ${gl["body-md-regular"]}
    color: ${hl.text};
`,pu=q.default.div`
    display: flex;
`,mu=q.default(Ll)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,bu=q.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,vu=q.default(kd.Small)`
    flex: 1;
`,yu=q.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,xu=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${vl.md};
    margin: 0 0.5rem;
    transition: ${pl["duration-150"]} ${pl["ease-default"]};

    // default styles
    ${gl["body-md-regular"]}
    border-radius: ${vl.md};
    border: ${ml["width-010"]} ${ml.solid} transparent;
    background-clip: border-box;
    color: ${hl.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?n.css`
                cursor: pointer;
            `:e.$disabledDisplay?n.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?n.css`
                background: ${hl["bg-selected"]};
                border-color: ${hl["border-selected"]};
                color: ${hl["text-selected"]};
                font-weight: ${gl.Spec["weight-semibold"]};

                ${t&&n.css`
                    &:hover {
                        background: ${hl["bg-selected-hover"]};
                        border-color: ${hl["border-selected-hover"]};
                        color: ${hl["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?n.css`
                color: ${hl["text-primary"]};
                font-weight: ${gl.Spec["weight-semibold"]};
            `:r?n.css`
                color: ${hl["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?n.css`
                &:hover {
                    background: ${hl["bg-selected-hover"]};
                    border-color: ${hl["border-selected-hover"]};
                    color: ${hl["text-selected-hover"]};
                    font-weight: ${gl.Spec["weight-semibold"]};
                }
            `:n.css`
            &:hover {
                background: ${hl["bg-hover"]};
                color: ${hl["text-hover"]};
                font-weight: ${gl.Spec["weight-semibold"]};
            }
        `}}
`,wu=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const f=t.useMemo((()=>Ec.generateMonths(mc(r))),[r]),h=t.useRef(new Array(f.length).fill(null)),[g,p]=t.useState(f.findIndex((e=>e.isSame(a,"month"))));t.useEffect((()=>{var e;null!==g&&(null===(e=h.current[g])||void 0===e||e.focus())}),[g,f]);const m=(e,t)=>{t||u(e)},b=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,r="end"===n&&i&&e.isBefore(i,"month")&&s;return!(!t&&!r)},v=e=>{const t=e.format("MMMM"),r=(n=e,!Ec.isWithinRange(n,l?mc(l):void 0,d?mc(d):void 0,"month"));var n;const i=a.isSame(e,"month"),o=i?"selected-month":mc().isSame(e,"month")?"current-month":"default",s=a.isSame(e,"year")?i?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||b(e),interactive:!r||c,month:t,variant:o,tabIndex:s}};return f.length?e.jsx(yu,{onBlur:()=>{p(null)},children:f.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,month:a,tabIndex:s}=v(t);return e.jsx(xu,{ref:e=>h.current[r]=e,tabIndex:s,role:"button","aria-disabled":!i,"aria-selected":"selected-month"===o,$variant:o,$disabledDisplay:n,$interactive:i,onClick:()=>m(t,!i),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let i;const o=f.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),m(t,r);break;case"ArrowLeft":i=o-1;break;case"ArrowRight":i=o+1;break;case"ArrowUp":i=o-2;break;case"ArrowDown":i=o+2}void 0!==i&&i>=0&&i<f.length&&(e.preventDefault(),p(i))})(e,t,!i)},children:a},a)}))}):null},$u=q.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Cu=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${pl["duration-150"]} ${pl["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${gl["body-md-regular"]}
    border-radius: ${vl.md};
    border: ${ml["width-010"]} ${ml.solid} transparent;
    background-clip: border-box;
    color: ${hl.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?n.css`
                cursor: pointer;
            `:t?n.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?n.css`
                background: ${hl["bg-selected"]};
                border-color: ${hl["border-selected"]};
                color: ${hl["text-selected"]};
                font-weight: ${gl.Spec["weight-semibold"]};

                ${t&&n.css`
                    &:hover {
                        background: ${hl["bg-selected-hover"]};
                        border-color: ${hl["border-selected-hover"]};
                        color: ${hl["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?n.css`
                color: ${hl["text-primary"]};
                font-weight: ${gl.Spec["weight-semibold"]};
            `:"other-decade"===e||r?n.css`
                color: ${hl["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?n.css`
                &:hover {
                    background: ${hl["bg-selected-hover"]};
                    border-color: ${hl["border-selected-hover"]};
                    color: ${hl["text-selected-hover"]};
                    font-weight: ${gl.Spec["weight-semibold"]};
                }
            `:n.css`
            &:hover {
                background: ${hl["bg-hover"]};
                color: ${hl["text-hover"]};
                font-weight: ${gl.Spec["weight-semibold"]};
            }
        `}}
`,Su=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u,setCalendarDate:f})=>{const h=t.useMemo((()=>Ec.generateDecadeOfYears(mc(r))),[r]),g=t.useRef(new Array(h.length).fill(null)),[p,m]=t.useState(r);t.useEffect((()=>{var e;if(null===p)return;const t=h.findIndex((e=>e.isSame(p,"year")));t>=0&&(null===(e=g.current[t])||void 0===e||e.focus())}),[p,h]);const b=(e,t)=>{t||u(e)},v=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,r="end"===n&&i&&e.isBefore(i,"year")&&s;return!(!t&&!r)},y=e=>{const t=h.indexOf(e),r=[0,11].includes(t),n=e.year(),i=(o=e,!Ec.isWithinRange(o,l?mc(l):void 0,d?mc(d):void 0,"year"));var o;const s=r?"other-decade":a.isSame(e,"year")?"selected-year":mc().isSame(e,"year")?"current-year":"default",u=a.year()>=h[0].year()&&a.year()<=h[h.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:i||v(e),interactive:!i||c,year:n,variant:s,tabIndex:u}};return h.length?e.jsx($u,{onBlur:()=>{m(null)},children:h.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,year:a,tabIndex:s}=y(t);return e.jsx(Cu,{ref:e=>{g.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!i,"aria-selected":"selected-year"===o,$variant:o,$disabledDisplay:n,$interactive:!!i,onClick:()=>b(t,!i),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),b(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),f(n),m(n))})(e,t,!i)},children:a},a)}))}):null},ju=U.default.forwardRef(((r,n)=>{var{children:i,initialCalendarDate:o,minDate:a,maxDate:s,currentFocus:l,selectedStartDate:d,selectedEndDate:c,selectWithinRange:u,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:g,withButton:p,doneButtonDisabled:m,onDismiss:b,showNavigationHeader:v=!0,getLeftArrowDate:y,getRightArrowDate:x,isLeftArrowDisabled:w,isRightArrowDisabled:$,getMonthHeaderLabel:C,getYearHeaderLabel:S,isFocusable:j=!1}=r,k=ki(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[D,E]=t.useState(_c.toDayjs(o)),[T,F]=t.useState(_c.toDayjs(o)),[O,I]=t.useState("default"),M=t.useRef(null),_=t.useRef(null),A=t.useRef(null),B=t.useRef(null);t.useImperativeHandle(n,(()=>({defaultView(){I("default")},resetView(){const e=_c.toDayjs(o);E(e),F(e),I("default")},setCalendarDate(e){const t=_c.toDayjs(e);E(t),F(t)}}))),t.useEffect((()=>{const e=_c.toDayjs(o);E(e),F(e)}),[o]),t.useEffect((()=>{V(T)}),[T]);const R=()=>{var e;"month-options"!==O?(I("month-options"),null===(e=A.current)||void 0===e||e.focus()):(I("default"),E(T))},z=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),R(),null===(t=B.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?D.subtract(1,"month"):D.add(1,"month");if(!Ec.isWithinRange(t,a?mc(a):void 0,s?mc(s):void 0,"month"))return;E(t),"default"===O&&F(t)}},P=()=>{"default"!==O?(I("default"),E(T)):I("year-options")},L=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===O?"ArrowUp"===e.key?D.subtract(10,"year"):D.add(10,"year"):"ArrowUp"===e.key?D.subtract(1,"year"):D.add(1,"year"),!Ec.isWithinRange(t,a?mc(a):void 0,s?mc(s):void 0,"year"))return;E(t),"default"===O&&F(t)}},N=()=>{var e;null===(e=A.current)||void 0===e||e.focus();const t=y?y(D):D.subtract(1,"month");switch(O){case"default":F(t),E(t);break;case"month-options":E((e=>e.subtract(1,"year")));break;case"year-options":E((e=>e.subtract(10,"year")))}},H=()=>{var e;null===(e=A.current)||void 0===e||e.focus();const t=x?x(D):D.add(1,"month");switch(O){case"default":F(t),E(t);break;case"month-options":E((e=>e.add(1,"year")));break;case"year-options":E((e=>e.add(10,"year")))}},W=e=>{E(e),F(e),p||I("default")},Y=()=>{const e=_c.toDayjs(o);E(e),F(e),"default"===O?U("reset"):I("default")},V=e=>{g&&g(e)},U=e=>{b&&b(e)},K=()=>{if(!a||h)return!1;const e=mc(a);return"month-options"===O?!Ec.isPreviousYearWithinRange(D,e):"year-options"===O?!Ec.isPreviousDecadeWithinRange(D,e):w?w(D):!Ec.isPreviousMonthWithinRange(D,e)},q=()=>{if(!s||h)return!1;const e=mc(s);return"month-options"===O?!Ec.isNextYearWithinRange(D,e):"year-options"===O?!Ec.isNextDecadeWithinRange(D,e):$?$(D):!Ec.isNextMonthWithinRange(D,e)},X=()=>{const t=C?C(D):D.format("MMM"),r=mc(t,"MMM").format("MMMM"),n=(()=>{if("year-options"===O){const{beginDecade:e,endDecade:t}=Ec.getStartEndDecade(D);return`${e} to ${t}`}return S?S(D):D.format("YYYY")})(),i={"month-options":`${n}, Close month selection`,"year-options":`${n}, Close year selection`,default:`${n}, Select year`};return e.jsxs(e.Fragment,{children:[e.jsxs(hu,{"aria-label":`${r}, Select month`,type:"button",$expanded:"month-options"===O,$visible:"default"===O,id:"month-dropdown",onClick:R,onKeyDown:z,tabIndex:j?0:-1,children:[e.jsx(gu,{children:t}),e.jsx(au,{})]}),e.jsxs(hu,{ref:B,"aria-label":i[O],type:"button",$expanded:"default"!==O,id:"year-dropdown",onClick:P,onKeyDown:L,tabIndex:j?0:-1,children:[e.jsx(gu,{children:n}),e.jsx(au,{})]})]})},G=()=>{switch(O){case"month-options":return e.jsx(wu,{calendarDate:D,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:d,selectedEndDate:c,viewCalendarDate:T,isNewSelection:!!u,onMonthSelect:W,allowDisabledSelection:h});case"year-options":return e.jsx(Su,{setCalendarDate:E,calendarDate:D,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:d,selectedEndDate:c,viewCalendarDate:T,isNewSelection:!!u,onYearSelect:W,allowDisabledSelection:h});default:return null}};return e.jsxs(su,Object.assign({ref:A,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":T.format("MMMM, YYYY"),role:"group"},k,{children:[v&&(()=>{const t={"month-options":"year","year-options":"decade",default:"month"}[O];return e.jsxs(uu,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e.jsx(fu,{children:X()}),e.jsxs(pu,{children:[e.jsx(mu,{"aria-label":`Previous ${t}`,"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,focusOutline:"browser",onClick:N,tabIndex:j?0:-1,children:e.jsx(iu,{})}),e.jsx(mu,{"aria-label":`Next ${t}`,"data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,focusOutline:"browser",onClick:H,tabIndex:j?0:-1,children:e.jsx(ou,{})})]})]})})(),e.jsx(lu,{children:(()=>{const t="function"==typeof i?i({calendarDate:T,currentView:O}):i;if(f)return e.jsxs(e.Fragment,{children:["default"===O&&t,G()]});{const r="default"===O;return e.jsxs(e.Fragment,{children:[e.jsx(du,{inert:ji(!r),children:t}),e.jsx(cu,{$visible:!r,children:G()})]})}})()}),(()=>{if(!p)return;const t=!!("default"===O)&&m;return e.jsxs(bu,{children:[e.jsx(vu,{ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Y,children:"Cancel"}),e.jsx(vu,{"data-testid":"done-button",ref:M,type:"button",onClick:()=>{t||(E(T),"default"===O?U("confirmed"):I("default"))},disabled:t,children:"Done"})]})})()]}))})),ku=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Du=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${gl["body-sm-semibold"]};
    color: ${hl.text};
`,Eu=q.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Tu=e=>{let t=hl.bg,r="transparent";switch(e.$type){case"hover-subtle":t=hl["bg-hover"],r=hl["bg-hover"];break;case"hover":t=hl["bg-hover-strong"],r=hl["bg-hover-strong"];break;case"hover-outline":t=hl["bg-hover-subtle"],r=hl["border-hover"];break;case"selected-outline":t=hl["bg-selected"],r=hl["border-selected"];break;case"selected-outline-subtle":t=hl["bg-selected"],r=hl["border-selected-subtle"];break;case"selected-hover":t=hl["bg-selected-hover"];break;case"selected-hover-outline":t=hl["bg-selected-hover"],r=hl["border-selected-hover"]}return{color:t,borderColor:r}},Fu=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ou=q.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${pl["duration-150"]} ${pl["ease-default"]};
    border: ${ml["width-010"]} ${ml.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Tu(e);return n.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Iu=q.default(Ou)`
    left: 0;
`,Mu=q.default(Ou)`
    right: 0;
`,_u=q.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${pl["duration-150"]} ${pl["ease-default"]};

    border: ${ml["width-010"]} ${ml.solid} transparent;
    border-radius: ${vl.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Tu(e);return n.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Au=q.default(_u)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Bu=q.default(_u)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Ru=q.default.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,zu=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${gl["body-md-regular"]}
    transition: ${pl["duration-150"]} ${pl["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?n.css`
                    visibility: hidden;
                `:n.css`
                color: ${hl["text-disabled-subtlest"]};
            `;switch(r){case"selected":return n.css`
                    font-weight: ${gl.Spec["weight-semibold"]};
                    color: ${hl["text-selected"]};
                `;case"selected-hover":return n.css`
                    font-weight: ${gl.Spec["weight-semibold"]};
                    color: ${hl["text-selected-hover"]};
                `;case"current":return n.css`
                    font-weight: ${gl.Spec["weight-semibold"]};
                    color: ${hl["text-primary"]};
                `;case"hover":return n.css`
                    font-weight: ${gl.Spec["weight-semibold"]};
                    color: ${hl["text-hover"]};
                `;case"unavailable":return n.css`
                    color: ${hl["text-disabled-subtlest"]};
                `;case"hidden":return n.css`
                    visibility: hidden;
                `;default:return n.css`
                    color: ${hl.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Pu=q.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,Lu=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:o,labelType:a,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:f,onFocus:h,onHoverEnd:g,onKeyDown:p,focusDate:m,label:b,ariaHidden:v,tabIndex:y=-1,role:x="button"})=>{const w=mc().isSame(c,"day"),$=!!m&&m.isSame(c,"day"),C=`${c.format("D MMMM YYYY dddd")}, ${s?"Unavailable":"Available"}`,S=t.useRef(null);t.useEffect((()=>{var e;$&&S.current&&(null===(e=S.current)||void 0===e||e.focus())}),[$]);return e.jsxs(Fu,{"aria-hidden":v,children:[e.jsx(Iu,{$type:r}),e.jsx(Au,{$type:i}),e.jsx(Mu,{$type:n}),e.jsx(Bu,{$type:o}),e.jsx(Ru,{$interactive:l,children:e.jsxs(zu,{ref:S,tabIndex:y,role:x,"aria-label":b||C,"aria-disabled":!l,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:s,$interactive:l,onClick:()=>{u(c)},onKeyDown:e=>{p&&p(e)},onMouseEnter:()=>{f(c)},onMouseLeave:()=>{g&&g(c)},onFocus:()=>{h&&h(c)},children:[c.date(),d&&w&&e.jsx(Pu,{$disabled:s})]})})]})},Nu=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:f,showActiveMonthDaysOnly:h,onSelect:g,onHover:p,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=Ec.isDisabledDay(t,c,l,d),x=!y||u,w=()=>{g(t,!x)},$=()=>{const e=mc(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,d,c;return"start"===o&&i&&t&&(n&&r?(d=a,c=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(d=n,c=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{p(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:mc(s),tabIndex:v};return e.jsx(Lu,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(mc().isSame(t,"day")&&!y)e.labelType="current";else if(f){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&d?(t.isBetween(l,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};mc.extend(xc);const Hu=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:d,minDate:c,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h,setCalendarDate:g})=>{const p=t.useRef(null);t.useEffect((()=>{if(p.current){const e=p.current;p.current=null,w(e)}}),[r]);const m=t.useCallback((()=>o&&mc(o).isSame(r,"month")?mc(o):a&&mc(a).isSame(r,"month")?mc(a):mc().isSame(r,"month")?mc():c&&r.isSame(mc(c),"month")?mc(c):mc(r).startOf("month")),[o,r,a,c]),b=e=>{const t=mc(e);if(Ec.isWithinRange(t,c?mc(c):void 0,u?mc(u):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(p.current=e);w(e)}},v=t.useMemo((()=>Ec.generateDays(r)),[r]),y=t.useMemo((()=>m()),[m]),[x,w]=t.useState(""),[$,C]=t.useState(""),S=(e,t)=>{t&&!f||s(e)},j=(e,t)=>{t&&!f||(C(e),l(e))},k=e=>{C(e),l(e)},D=()=>{C(""),l("")};return e.jsxs(ku,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),C(""),l(""))},children:[v[0].map(((t,r)=>e.jsx(Du,{"aria-hidden":!0,children:mc(t).format("ddd")},`week-day-${r}`))),v.map(((t,s)=>e.jsx(Eu,{role:"row","aria-label":`Week ${s+1}`,onMouseLeave:D,children:t.map(((t,s)=>e.jsx(Nu,{date:t,calendarDate:r,startDate:o,endDate:a,hoverDate:$,focusDate:x,currentFocus:n,minDate:c,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:d,showActiveMonthDaysOnly:h,onSelect:S,onHover:j,onFocus:k,setFocusCell:b,tabIndex:t.isSame(y,"day")?0:-1},`day-${s}`)))},s)))]})},Wu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,focusDate:o,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:f,onFocus:h,setFocusCell:g,tabIndex:p})=>{const m=Ec.isDisabledDay(t,l,a,s),b=!m||d,{start:v,end:y}=n?Ec.getFixedRangeStartEnd(_c.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:w}=i?Ec.getFixedRangeStartEnd(_c.toDayjs(i),c):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!i&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),j=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${mc(x).format("D MMMM")} to ${mc(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,D=()=>{u(t,!b)},E=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},T={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:D,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&D());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},focusDate:mc(o),role:"gridcell",tabIndex:p,label:k};return e.jsx(Lu,Object.assign({},T,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":mc().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&E(e,"hover",r===x,r===w),$&&E(e,"selected-outline",r===v,r===y),$&&C&&(E(e,"selected-hover-outline",S,j),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},Yu=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:d,numberOfDays:c,setCalendarDate:u})=>{const f=t.useRef(null);t.useEffect((()=>{if(f.current){const e=f.current;f.current=null,v(e)}}),[r]);const h=t.useCallback((()=>i&&mc(i).isSame(r,"month")?mc(i):mc().isSame(r,"month")?mc():s&&r.isSame(mc(s),"month")?mc(s):mc(r).startOf("month")),[i,r,s]),g=e=>{const t=mc(e);if(Ec.isWithinRange(t,s?mc(s):void 0,l?mc(l):void 0)){if(!t.isSame(r,"month"))return null==u||u(e),void(f.current=e);v(e)}},p=t.useMemo((()=>Ec.generateDays(r)),[r]),m=t.useMemo((()=>h()),[h]),[b,v]=t.useState(""),[y,x]=t.useState(""),w=(e,t)=>{t&&!d||(o(e),e&&!mc(e).isSame(e,"month")&&x(""))},$=(e,t)=>{t&&!d||(x(e),a(e))},C=e=>{x(e),a(e)},S=()=>{x(""),a("")};return e.jsxs(ku,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(v(""),x(""),a(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[p[0].map(((t,r)=>e.jsx(Du,{"aria-hidden":!0,children:mc(t).format("ddd")},`week-day-${r}`))),p.map(((t,o)=>e.jsx(Eu,{role:"row",onMouseLeave:S,children:t.map(((t,o)=>e.jsx(Wu,{date:t,calendarDate:r,selectedDate:i,hoverDate:y,focusDate:b,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:d,onSelect:w,onHover:$,numberOfDays:c,onFocus:C,setFocusCell:g,tabIndex:mc(t).isSame(m,"day")?0:-1},`day-${o}`)))},o)))]})},Vu=q.default.div`
    width: 100%;
    background: ${hl.bg};
`,Uu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,focusDate:o,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:f,onFocus:h,setFocusCell:g,tabIndex:p})=>{const m=Ec.isDisabledDay(t,l,a,s),b=!m||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:mc(o),tabIndex:p};return e.jsx(Lu,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":mc().isSame(t,"day")&&!m&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};mc.extend(xc);const Ku=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,setCalendarDate:u})=>{const f=t.useRef(null);t.useEffect((()=>{if(f.current){const e=f.current;f.current=null,v(e)}}),[r]);const h=t.useCallback((()=>i&&mc(i).isSame(r,"month")?mc(i):mc().isSame(r,"month")?mc():s&&r.isSame(mc(s),"month")?mc(s):mc(r).startOf("month")),[i,r,s]),g=e=>{const t=mc(e);if(Ec.isWithinRange(t,s?mc(s):void 0,l?mc(l):void 0)){if(!t.isSame(r,"month"))return null==u||u(e),void(f.current=e);v(e)}},p=t.useMemo((()=>Ec.generateDays(r)),[r]),m=t.useMemo((()=>h()),[h]),[b,v]=t.useState(""),[y,x]=t.useState(""),w=(e,t)=>{t&&!d||o(e)},$=(e,t)=>{t&&!d||(x(e),a(e))},C=e=>{x(e),a(e)},S=()=>{x(""),a("")};return e.jsxs(ku,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(v(""),x(""),a(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[p[0].map(((t,r)=>e.jsx(Du,{"aria-hidden":!0,children:mc(t).format("ddd")},`week-day-${r}`))),p.map(((t,o)=>e.jsx(Eu,{role:"row","aria-label":`Week ${o+1}`,onMouseLeave:S,children:t.map(((t,o)=>e.jsx(Uu,{date:t,calendarDate:r,selectedDate:i,hoverDate:y,focusDate:b,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:w,onHover:$,onFocus:C,setFocusCell:g,tabIndex:mc(t).isSame(m,"day")?0:-1},`day-${o}`)))},o)))]})},qu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,focusDate:o,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:f,setFocusCell:h,tabIndex:g})=>{const p=Ec.isDisabledDay(t,l,a,s),m=!p||d,{start:b,end:v}=Ec.getWeekStartEnd(_c.toDayjs(n)),{start:y,end:x}=Ec.getWeekStartEnd(_c.toDayjs(i)),{start:w,end:$}=Ec.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),j=i&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||j&&t.isSame(y),D=S&&t.isSame(v)||j&&t.isSame(x),E=`From ${mc(w).format("D MMMM")} to ${mc($).format("D MMMM")}, ${p?"Unavailable":"Available"}`,T=()=>{c(t,!m)},F={date:t,calendarDate:r,disabled:p,interactive:m,currentDateIndicator:!0,onSelect:T,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&T());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),h(r.format("YYYY-MM-DD")))})(e)},focusDate:mc(o),tabIndex:g,label:E,ariaHidden:!C||void 0,role:C?"button":"none"};return e.jsx(Lu,Object.assign({},F,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":mc().isSame(t,"day")&&!p&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&j?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):j&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,D?e.circleRight=t:e.bgRight=t),e})()))},Xu=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:d,setCalendarDate:c})=>{const u=t.useRef(null);t.useEffect((()=>{if(u.current){const e=u.current;u.current=null,b(e)}}),[r]);const f=t.useCallback((()=>i&&mc(i).isSame(r,"month")?mc(i):mc().isSame(r,"month")?mc().startOf("week"):s&&r.isSame(mc(s),"month")?mc(s):mc(r).startOf("month")),[i,r,s]),h=e=>{const t=mc(e);if(Ec.isWithinRange(t,s?mc(s):void 0,l?mc(l):void 0)){if(!t.isSame(r,"month"))return null==c||c(e),void(u.current=e);b(e)}},g=t.useMemo((()=>Ec.generateDays(r)),[r]),p=t.useMemo((()=>f()),[f]),[m,b]=t.useState(""),[v,y]=t.useState(""),x=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");o(r),e&&!mc(e).isSame(r,"month")&&y("")},w=(e,t)=>{t&&!d||(y(e),a(e))},$=e=>{y(e),a(e)},C=()=>{y(""),a("")};return e.jsxs(ku,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(b(""),y(""),a(""))},"aria-label":"Week selection",children:[g[0].map(((t,r)=>e.jsx(Du,{"aria-hidden":!0,children:mc(t).format("ddd")},`week-day-${r}`))),g.map(((t,o)=>e.jsx(Eu,{onMouseLeave:C,role:"group",children:t.map(((t,o)=>e.jsx(qu,{date:t,calendarDate:r,selectedDate:i,hoverDate:v,focusDate:m,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:d,onSelect:x,onHover:w,onFocus:$,setFocusCell:h,tabIndex:mc(t).isSame(p,"day")?0:-1},`day-${o}`)))},o)))]})},Gu=U.default.forwardRef((({disabledDates:r,onYearMonthDisplayChange:n,onSelect:i,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:f,maxDate:h,allowDisabledSelection:g,selectWithinRange:p=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1,isFocusable:y=!1},x)=>{const w=t.useRef(null),$=t.useRef(void 0),C=t.useRef(null);t.useImperativeHandle(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=C.current)||void 0===t?void 0:t.contains(e))||!1}})));const S=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(r),k(r)},j=e=>{D(e)},k=e=>{i&&i(e)},D=e=>{o&&o(e)},E=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e.jsx(Vu,{ref:C,children:e.jsx(ju,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:f,maxDate:h,selectWithinRange:p,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;$.current&&$.current.isSame(e,"month")||(null===(t=w.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),E(e)),$.current=e},initialCalendarDate:m,isFocusable:y,children:({calendarDate:t})=>(t=>{var n;const i=null===(n=w.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e.jsx(Xu,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,onSelect:S,onHover:j,setCalendarDate:i});case"fixed-range":return e.jsx(Yu,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,onSelect:S,onHover:j,numberOfDays:b,setCalendarDate:i});case"single":return e.jsx(Ku,{calendarDate:t,disabledDates:r,selectedDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:S,onHover:j,setCalendarDate:i});default:return e.jsx(Hu,{calendarDate:t,currentFocus:d,disabledDates:r,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:p,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:S,onHover:j,setCalendarDate:i})}})(t)})})})),Zu=U.default.forwardRef(((t,r)=>{var{width:n}=t,i=ki(t,["width"]);return e.jsx(ru,{$width:n,"data-testid":"calendar-dropdown",children:e.jsx(Gu,Object.assign({ref:r},i))})})),Qu=q.default.div`
    --vertical-inset: ${bl["spacing-24"]};
    --horizontal-inset: ${bl["spacing-32"]};
    --header-bottom-spacing: ${bl["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return n.css`
                border: ${ml["width-010"]} ${ml.solid} ${hl.border};
                border-radius: ${vl.lg};
                overflow: hidden;
            `}}
`,Ju=q.default.div`
    border-radius: ${vl.md};
    background: ${hl.bg};
    padding: ${bl["spacing-16"]} ${bl["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,ef=t=>{var{children:r}=t,n=ki(t,["children"]);const i=n["data-testid"]||"card";return e.jsx(Ju,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e.jsx(exports.Typography.BodyBL,{children:r}):r}))},tf=n.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,rf=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>n.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,nf=n.css`
    animation: ${pl["duration-150"]} ${pl["ease-default"]} ${tf};
    width: 100%;
    height: 100%;
    transition: color ${pl["duration-150"]} ${pl["ease-default"]};
`,of=q.default(u.SquareIcon)`
    ${nf}
    color: ${hl["icon-primary-subtlest"]};
`,af=q.default(u.SquareFillIcon)`
    ${nf}
    color: ${hl["icon-disabled-subtle"]};
`,sf=q.default(u.SquareTickFillIcon)`
    ${nf}
    color: ${e=>e.$disabled?hl["icon-disabled-subtle"](e):hl["icon-selected"](e)};
`,lf=q.default(u.MinusSquareFillIcon)`
    ${nf}
    color: ${e=>e.$disabled?hl["icon-disabled-subtle"](e):hl["icon-selected"](e)};
`,df=q.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${of},
        &:hover
        + ${sf},
        &:hover
        + ${lf} {
        color: ${e=>!e.disabled&&hl["icon-hover"](e)};
    }
`,cf=r=>{var{className:n,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:d="default"}=r,c=ki(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=t.useRef(null);t.useEffect((()=>{u.current&&(u.current.indeterminate=null!=a&&a)}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(rf,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:d,$disabled:o,$unchecked:!(a||i||o),children:[e.jsx(df,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:f,disabled:o},c)),a?e.jsx(lf,{$disabled:o,"data-testid":"indeterminate"}):i?e.jsx(sf,{$disabled:o,"data-testid":"checkmark"}):o?e.jsx(af,{"data-testid":"empty-disabled-checkbox"}):e.jsx(of,{$disabled:o,"data-testid":"empty-checkbox"})]})};var uf=Ri,ff=/\s/;var hf=function(e){for(var t=e.length;t--&&ff.test(e.charAt(t)););return t},gf=/^\s+/;var pf=function(e){return e?e.slice(0,hf(e)+1).replace(gf,""):e},mf=oo,bf=Ji,vf=/^[-+]0x[0-9a-f]+$/i,yf=/^0b[01]+$/i,xf=/^0o[0-7]+$/i,wf=parseInt;var $f=function(e){if("number"==typeof e)return e;if(bf(e))return NaN;if(mf(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=mf(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=pf(e);var r=yf.test(e);return r||xf.test(e)?wf(e.slice(2),r?2:8):vf.test(e)?NaN:+e},Cf=oo,Sf=function(){return uf.Date.now()},jf=$f,kf=Math.max,Df=Math.min;var Ef=function(e,t,r){var n,i,o,a,s,l,d=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,d=t,a=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function p(){var e=Sf();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?Df(r,o-(e-d)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=Sf(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(p,t),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),a}return t=jf(t)||0,Cf(r)&&(c=!!r.leading,o=(u="maxWait"in r)?kf(jf(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Sf())},b},Tf=Ii(Ef),Ff=Ef,Of=oo;var If,Mf,_f=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Of(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ff(e,t,{leading:n,maxWait:t,trailing:i})},Af=Ii(_f),Bf=new Map,Rf=new WeakMap,zf=0;function Pf(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Rf.has(e)||(zf+=1,Rf.set(e,zf.toString())),Rf.get(e)):"0"}(e.root):e[t]}`)).toString()}function Lf(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=Pf(e);let r=Bf.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},Bf.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Bf.delete(i))}}function Nf({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:d}={}){var c;const[u,f]=U.useState(null),h=U.useRef(),[g,p]=U.useState({inView:!!s,entry:void 0});h.current=d,U.useEffect((()=>{if(a||!u)return;let s;return s=Lf(u,((e,t)=>{p({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,n,o,a,r,l,t]);const m=null==(c=g.entry)?void 0:c.target,b=U.useRef();u||!m||o||a||b.current===m||(b.current=m,p({inView:!!s,entry:void 0}));const v=[f,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}!function(e){e.AM="AM",e.PM="PM"}(If||(If={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,i]=e.split(":"),o=parseInt(n,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,d=0===l?s:r?s+(t-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=mc(e,n),o=mc(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:If.AM};if(!t)return r;try{if("24hr"===e){const n=Yf(t,e);r.minute=Rc.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=If.AM,r.hour=0===i?"12":Rc.padValue(i.toString())):(r.period=If.PM,r.hour=12===i?i.toString():Rc.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=Yf(t,e);r.hour=Rc.padValue(n),r.minute=Rc.padValue(i),r.period="am"===o.toLowerCase()?If.AM:If.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Rc.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Rc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Rc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Rc.padValue(n.toString()):13===n?Rc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===If.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Rc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=Yf(e,t),o=Rc.padValue(r);let a=`${o}:${Rc.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),Vf(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Vf(e,n,t);o.push(r)}else{const t=Vf(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),Vf(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Vf(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(Mf||(Mf={}));const Hf=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Wf=e=>{const t=parseInt(e);return t>=0&&t<=59},Yf=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!Hf(r[0],t)||!Wf(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Hf(r[0],t)||!Wf(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Vf=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Uf=q.default.div`
    width: 100%;
`,Kf=q.default.div`
    ${gl["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${bl["spacing-8"]} ${bl["spacing-16"]};
    border-radius: ${vl.sm};
    color: ${hl["text-primary"]};
    border: ${ml["width-010"]} ${ml.solid};
    border-color: ${hl["border-primary"]};
    background-color: ${hl.bg};

    ${xl.MaxWidth.sm} {
        padding: ${bl["spacing-16"]};
    }

    ${e=>{if(e.$warn)return n.css`
                color: ${hl["text-error"]};
                border-color: ${hl["border-error"]};
            `}}
`,qf=q.default(Kf)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Xf=q.default(Kf)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:i,$warn:o}=e;return n.css`
            /* style object will be converted to px */
            ${{top:t,left:r,right:i}}

            box-shadow: 0px 0px 4px 1px rgb(from ${o?hl["border-error"]:hl["border-primary-subtle"]} r g b / 50%);

            ${xl.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,Gf=q.default.div`
    font-weight: ${gl.Spec["weight-bold"]};
    margin-left: ${bl["spacing-8"]};
    margin-right: ${bl["spacing-24"]};

    ${xl.MaxWidth.sm} {
        margin-right: ${bl["spacing-48"]};
    }
`,Zf=q.default.div`
    font-weight: ${gl.Spec["weight-semibold"]};
    margin-left: auto;
`,Qf=q.default(u.ClockIcon)`
    color: ${e=>e.$warn?hl["icon-error"]:hl["icon-primary"]};
`,Jf=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),eh=e=>Math.max(Math.round(e/1e3),0),th=t=>r=>{switch(t){case"maintenance":{const t=r;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=r,n=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${yl["sm-max"]({theme:t})}px) 400px, (max-width: ${yl["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}};const{imgAttributeHelper:rh}=exports.ErrorDisplayHelper,nh={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},ih={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},oh=Object.assign(Object.assign({},nh),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),ah=Object.assign(Object.assign({},nh),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),sh=(e,t)=>new Map([["400",{img:rh(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:rh(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:rh(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:rh(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:rh(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:rh(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:rh(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:rh(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:rh(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:rh(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:rh(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:rh(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:rh(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:th("inactivity")}],["maintenance",{img:rh(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:th("maintenance")}],["no-item-found",{img:rh(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:rh(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:rh(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:rh(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:rh(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:rh(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),lh=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,dh=q.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${xl.MaxWidth.sm} {
        width: 320px;
    }

    ${xl.MaxWidth.xs} {
        width: 288px;
    }

    ${xl.MaxWidth.xxs} {
        width: 240px;
    }
`,ch=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,uh=q.default(exports.Typography.HeadingMD)`
    margin: ${bl["spacing-32"]} 0 ${bl["spacing-16"]};
    text-align: center;
`,fh=q.default.div`
    color: ${hl.text};
    text-align: center;

    ${Id({textSize:"body-baseline"})}
`,hh=q.default(kd.Default)`
    margin: ${bl["spacing-32"]} auto 0;
    width: 21rem;

    ${xl.MaxWidth.sm} {
        width: 100%;
    }
`,gh=t=>{var{type:r,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:d,illustrationScheme:c}=t,u=ki(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=n.useTheme(),h=((e,t,r)=>{switch(t){case"bookingsg":return sh(ih,r).get(e);case"ccube":return sh(oh,r).get(e);case"mylegacy":return sh(ah,r).get(e);default:return sh(nh,r).get(e)}})(r,c||(f||Fl).resourceScheme,f),g=u["data-testid"]||"error-display",p=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==h?void 0:h.renderDescription)||void 0===e?void 0:e.call(h,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==h?void 0:h.renderDescription)||void 0===t?void 0:t.call(h,e):a||void 0}default:return a||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),i&&{img:i}),o&&{title:o}),p()&&{description:p()});return e.jsxs(lh,Object.assign({},u,{"data-testid":g,children:[e.jsx(dh,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!d&&(m.title||m.description?e.jsxs(ch,{children:[m.title&&("string"==typeof m.title?e.jsx(uh,{"data-testid":`${g}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e.jsx(fh,{"data-testid":`${g}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(hh,Object.assign({},t))})()]}))},ph=n.css`
    outline-offset: -1px;
    outline: ${ml["width-020"]} ${ml.solid} ${hl["border-focus"]};
`,mh=n.css`
    outline-color: ${hl["border-focus"]};
`,bh=n.css`
    outline-color: ${hl["border-disabled"]};
`,vh=n.css`
    outline-color: ${hl["border-error-focus"]};
`,yh=q.default.div`
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    background: ${hl.bg};

    :focus-within {
        ${ph}
    }
    ${e=>e.$focused&&ph}

    ${e=>e.$readOnly?n.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${mh}
                }
                ${e.$focused&&mh}
            `:e.$disabled?n.css`
                background: ${hl["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${bh}
                }
                ${e.$focused&&bh}
            `:e.$error?n.css`
                border-color: ${hl["border-error"]};

                :focus-within {
                    ${vh}
                }
                ${e.$focused&&vh}
            `:void 0}
`,xh=q.default(yh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${bl["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,wh=q.default.input`
    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}
    color: ${hl.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${hl["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${hl["text-subtler"]};
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
`,$h=q.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${ml["width-010"]} ${ml.solid}
            ${hl["border-focus"]};
        border-radius: ${vl.sm};
    }
`,Ch=hl.border,Sh=hl.text,jh=q.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${ml["width-010"]} ${ml.solid} ${Ch};
    border-radius: ${vl.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,kh=q.default.div`
    flex: 1;
`,Dh=q.default.table`
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

    ${e=>{if(e.$stickyHeader)return n.css`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,Eh=q.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${ml["width-010"]} ${ml.solid} ${Ch}`:"none"};
        }
    }
`,Th=q.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return n.css`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return n.css`
                position: sticky;
                left: 0;
            `}};
`,Fh=q.default($h)`
    ${gl["body-md-semibold"]}
    cursor: pointer;
    color: ${hl["text-primary"]};
    transition: ${pl["duration-150"]} ${pl["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${hl["text-hover"]};
    }
`,Oh=q.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&n.css`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${vl.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${ml["width-010"]} ${ml.solid} ${Ch};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${ml["width-010"]} ${ml.solid} ${Ch};
    border-radius: ${vl.none} ${vl.none} ${vl.sm}
        ${vl.sm};
    background-color: ${hl["bg-selected"]};
    transition: all 300ms ease;
`,Ih=q.default.tr`
    background-color: ${hl["bg-stronger"]};
    height: 6rem;
    border-bottom: ${ml["width-010"]} ${ml.solid} ${Ch};
`,Mh=q.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Sh};
    border-bottom: ${ml["width-010"]} ${ml.solid} ${Ch};
    ${e=>{if(e.$isCheckbox)return n.css`
                width: 4rem;
            `}};
`,_h=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Sh};
        margin-left: 0.5rem;
    }
`,Ah=q.default.tr`
    background-color: ${e=>e.$isSelected?n.css`
                ${hl["bg-selected"]};
            `:e.$alternating?n.css`
                ${hl["bg-strong"]};
            `:n.css`
                ${hl.bg};
            `};
    border-top: ${ml["width-010"]} ${ml.solid} ${Ch};
    &:hover {
        ${e=>{if(e.$isSelectable)return n.css`
                    background-color: ${hl["bg-hover-strong"]};
                `}};
    }
`,Bh=q.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Sh};
    border-bottom: ${ml["width-010"]} ${ml.solid} ${Ch};
`,Rh=q.default(exports.Typography.BodyBL)`
    ${Nl(2)}
    text-overflow: ellipsis;
`,zh=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Ph=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,Lh=q.default(exports.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,Nh=q.default.td`
    padding: 4rem 0;
`,Hh=e=>"small"===e?2.5:3,Wh=q.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Hh(e.$variant);return n.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Yh=n.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${bl["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Hh(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${vl.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${hl["border-focus"]};
    }
`,Vh=q.default.button`
    ${Yh}
    cursor: pointer;
`,Uh=q.default.div`
    ${Yh}
`,Kh=n.keyframes`
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
`,qh=q.default.div`
    position: relative;
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    background: ${hl.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${hl["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${hl["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?n.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:n.css`
                animation: ${Kh} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?n.css`
                background: ${hl["bg-disabled"]};

                ${Vh} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${hl.border};
                    box-shadow: none;
                }
            `:e.$readOnly?n.css`
                border: none;
                background: transparent !important;

                ${Vh} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?n.css`
                border-color: ${hl["border-error"]};

                :focus-within {
                    border-color: ${hl["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${hl["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;q.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${pl["duration-250"]} ${pl["ease-default"]};
    margin-left: ${bl["spacing-16"]};
`,q.default(f.ChevronDownIcon)`
    color: ${hl.icon};
`;const Xh=q.default.div`
    height: 1px;
    background: ${hl.border};
    margin: 0 ${bl["spacing-8"]};
`,Gh=q.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return n.css`
                color: ${hl["text-disabled"]};
            `}}
`,Zh=q.default.div`
    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return n.css`
                    ${Nl(1)}
                `}}
    overflow: hidden;
`,Qh=q.default(Zh)`
    color: ${hl["text-subtler"]};
`,Jh=({children:r,show:n,error:i,disabled:o,testId:a,onBlur:s,readOnly:l,className:d,variant:c})=>{const u=t.useRef(null);return Pc("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e.jsx(Wh,{className:d,$variant:c,children:e.jsx(qh,{ref:u,error:i&&!n,disabled:o,$readOnly:l,expanded:n,"data-testid":a,children:r})})};var eg;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(eg||(eg={}));const tg=()=>{const[e,r]=t.useState(void 0),n=p.useFloatingTree();return t.useEffect((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(eg.Change,e),n.events.emit(eg.Ready),()=>n.events.off(eg.Change,e)}),[n]),e},rg=q.default.div`
    display: flex;
    flex-direction: column;
`,ng=e=>"right"===e?"bottom-end":"bottom-start",ig=({enabled:r,isOpen:i,onOpen:o,onClose:a,onDismiss:s,renderElement:l,renderDropdown:d,customZIndex:c,clickToToggle:u=!1,offset:f=0,alignment:h="left",fitAvailableHeight:g,rootNode:m})=>{var b;const v=n.useTheme(),y=yl["sm-max"]({theme:v}),x=t.useRef(null),w=t.useRef(null),{width:$=0}=Ye({targetRef:x,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:j,context:k}=p.useFloating({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!i?null==o||o():!e&&i&&(null==a||a(r))},whileElementsMounted:p.autoUpdate,placement:ng(h),middleware:[p.offset(f),p.flip(),p.shift({limiter:p.limitShift()}),p.size({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),C]}),D=tg(),{isMounted:E,styles:T}=p.useTransitionStyles(k,{initial:{opacity:0},open:{opacity:1},duration:300}),F=p.useClick(k,{enabled:r,toggle:u}),O=p.useDismiss(k,{enabled:r}),{getReferenceProps:I,getFloatingProps:M}=p.useInteractions([F,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{x.current=e,S.setReference(e)}},I(),{children:l()})),E&&e.jsx(p.FloatingPortal,{root:m,children:e.jsx(p.FloatingFocusManager,{context:k,modal:!1,initialFocus:w,returnFocus:!1,children:e.jsx("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},j),{zIndex:null!==(b=null!=c?c:D)&&void 0!==b?b:50})},M(),{children:e.jsx(rg,{ref:w,style:Object.assign({},T),inert:ji(T.opacity<1),children:d({elementWidth:$})})}))})})]})},og=q.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ag=q.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return n.css`
                ${sg}, ${ug} {
                    color: ${hl["text-subtler"]};
                }
            `}}
`,sg=q.default(wh)`
    background: transparent;
    text-align: center;
`,lg=q.default(sg)`
    width: 2rem;
    margin-right: ${bl["spacing-4"]};
`,dg=q.default(sg)`
    width: 2.5rem;
`,cg=q.default(sg)`
    width: 3rem;
    margin-left: ${bl["spacing-4"]};
`,ug=q.default.span`
    ${gl["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return n.css`
                color: ${hl.text};
            `}}
`,fg=q.default.div`
    ${gl["body-baseline-regular"]}
    background-color: ${hl.bg};
    color: ${hl["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?n.css`
                background-color: ${hl["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?n.css`
                display: none;
            `:void 0}
`;mc.extend(vc);const hg=U.default.forwardRef((({disabled:r,readOnly:n,names:i,value:o,focused:a,hoverValue:s,placeholder:l,label:d,onChange:c,onFocus:u,onBlur:f,hideInputKeyboard:h,inputLabels:g=["Date","Month","Year"]},p)=>{const m=h?"none":"numeric",[b,v,y]=Yc(""),[x,w,$]=Yc(""),[C,S,j]=Yc(""),[k,D]=t.useState("none"),[E,T]=t.useState(!1),F=t.useRef(null),O=t.useRef(null),I=t.useRef(null),M=t.useRef(null),[_,A,B]=H(s);t.useEffect((()=>{var e;const[t="",r="",n=""]=H(o);v(t),w(r),S(n),t||r||n||!F.current||!F.current.contains(document.activeElement)||null===(e=O.current)||void 0===e||e.focus()}),[o]),t.useEffect((()=>{var e;a||D("none"),a&&(T(!0),F.current&&!F.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))}),[a]),t.useImperativeHandle(p,(()=>({ref:F,resetPlaceholder(){T(!1)},resetInput(){const[e="",t="",r=""]=H(o);v(e),w(t),S(r)},focusYearRef(){var e;null===(e=M.current)||void 0===e||e.focus()}})),[v,w,S,o]);const R=e=>{var t;e.preventDefault(),null===(t=O.current)||void 0===t||t.focus()},z=e=>{e.target.select();const t=e.target.name;D(t)},P=e=>{const[t,r,n]=i,o={[t]:y.current,[r]:$.current,[n]:j.current},a=e.target.name,s=o[a],l=a!==n?Rc.padValue(s,!0):s;switch(a){case t:o[t]=l,v(l);break;case r:o[r]=l,w(l)}const d=`${o[n]}-${o[r]}-${o[t]}`,u=mc(d,"YYYY-MM-DD",!0).isValid(),h=!o[t]&&!o[r]&&!o[n];u&&s!==l&&c(d),F.current&&!F.current.contains(e.relatedTarget)&&(D("none"),null==f||f(h||u))},L=e=>{var t,r;if(s)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:b,month:x,year:C};switch(n){case i[0]:a.day=o,v(o),2===o.length&&(null===(t=I.current)||void 0===t||t.focus());break;case i[1]:a.month=o,w(o),2===o.length&&(null===(r=M.current)||void 0===r||r.focus());break;case i[2]:a.year=o,S(o)}if(!a.day&&!a.month&&!a.year)return void c("");const l=`${a.year}-${a.month}-${a.day}`;mc(l,"YYYY-MM-DD",!0).isValid()&&c(l)},N=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(k===i[1]&&0===x.length&&(null===(t=O.current)||void 0===t||t.focus()),k===i[2]&&0===C.length&&(null===(r=I.current)||void 0===r||r.focus()))};function H(e){if(e){const t=mc(new Date(e));return t.isValid()?[Rc.padValue(t.date().toString()),Rc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(og,{role:"group","aria-label":d,onClick:()=>{var e;r||n||(T(!0),F.current&&!F.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))},onFocus:e=>{r||(T(!0),a||null==u||u(e))},children:[e.jsxs(ag,{ref:F,$hover:!!s,children:[e.jsx(lg,{ref:O,name:i[0],maxLength:2,value:null!=_?_:b,onFocus:z,onBlur:P,onChange:L,type:"text",inputMode:m,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":g[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==i[0]||n?"DD":""}),e.jsx(ug,{$inactive:0===b.length,children:"/"}),e.jsx(dg,{ref:I,name:i[1],maxLength:2,value:null!=A?A:x,onFocus:z,onBlur:P,onChange:L,onKeyDown:N,type:"text",inputMode:m,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":g[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==i[1]||n?"MM":""}),e.jsx(ug,{$inactive:0===x.length,children:"/"}),e.jsx(cg,{ref:M,name:i[2],maxLength:4,value:null!=B?B:C,onFocus:z,onBlur:P,onChange:L,onKeyDown:N,type:"text",inputMode:m,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":g[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:k!==i[2]||n?"YYYY":""})]}),(()=>{if(!o&&!n&&l)return e.jsx(fg,{$hide:E,$disabled:r,onMouseDown:R,children:l})})()]})})),gg=q.default(xh)`
    height: 3rem;
`,pg=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:d,onChange:c,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:g=!0,readOnly:p,id:m,allowDisabledSelection:b,zIndex:v,dropdownRootNode:y}=r,x=ki(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[w,$]=t.useState(Ac.sanitizeInput(d)),[C,S]=t.useState(Ac.sanitizeInput(d)),[j,k]=t.useState(void 0),[D,E]=t.useState(!1),[T,F]=t.useState(!1),O=t.useRef(null),I=t.useRef(null),M=t.useRef(null);t.useEffect((()=>{const e=Ac.sanitizeInput(d);$(e),S(e)}),[d]);const _=e=>{!b&&Ac.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i})||(S(e),g||(L(e),$(e),e&&E(!1)))},A=e=>{var t;S(e),g||(L(e),$(e),e&&(null===(t=I.current)||void 0===t||t.focusYearRef(),E(!1)),j&&k(void 0))},B=()=>{p||o||(E(!0),T||(F(!0),u&&u()))},R=e=>{var t,r,n;const i=e.relatedTarget,o=M.current&&M.current.contains(i),a=O.current&&O.current.contains(i),s=null===(r=null===(t=e.relatedTarget)||void 0===t?void 0:t.matches)||void 0===r?void 0:r.call(t,"[data-floating-ui-focus-guard]");(T&&!D&&!a||D&&!a&&!o&&!s)&&(null===(n=I.current)||void 0===n||n.resetInput(),S(w),F(!1),E(!1),N())},z=e=>{k(e)},P=e=>{var t,r;switch(e){case"reset":S(w);break;case"confirmed":$(C),L(C)}mc(C,"YYYY-MM-DD",!0).isValid()?null===(t=I.current)||void 0===t||t.focusYearRef():null===(r=O.current)||void 0===r||r.focus(),E(!1)},L=e=>{c&&c(e)},N=()=>{f&&f()};return e.jsx(ig,{enabled:!p&&!o,isOpen:D,renderElement:()=>e.jsx(gg,Object.assign({role:"group",tabIndex:0,ref:O,onBlur:R,onFocus:B,$disabled:o,$readOnly:p,$focused:T,$error:s,id:m,"data-testid":x["data-testid"],"aria-disabled":o},x,{children:e.jsx(hg,{ref:I,disabled:o,onChange:_,readOnly:p,focused:D,names:["start-day","start-month","start-year"],value:C,hoverValue:j,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(Zu,{variant:"single",ref:M,initialCalendarDate:C,withButton:g,value:C,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:b,onHover:z,onSelect:A,onDismiss:P,onYearMonthDisplayChange:h,width:t,isFocusable:!p&&!o}),onClose:()=>{var e;null===(e=I.current)||void 0===e||e.resetInput(),S(w),E(!1),F(!1),N()},onDismiss:()=>{var e,t;null===(e=I.current)||void 0===e||e.resetInput(),null===(t=O.current)||void 0===t||t.focus(),S(w),E(!1)},customZIndex:v,offset:16,rootNode:y})},mg=q.default.button`
    align-items: center;
    border-radius: ${vl.sm};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return n.css`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return n.css`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return n.css`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return n.css`
                    background-color: ${hl.bg};
                    border: ${ml["width-010"]} ${ml.solid}
                        ${hl["border-primary"]};
                    color: ${hl["text-primary"]};

                    :hover {
                        background-color: ${hl["bg-hover-neutral"]};
                    }
                `;case"light":return n.css`
                    background-color: ${hl.bg};
                    border: ${ml["width-010"]} ${ml.solid}
                        ${hl.border};
                    color: ${hl["text-primary"]};

                    :hover {
                        background-color: ${hl["bg-hover-neutral"]};
                    }
                `;default:return n.css`
                    background-color: ${hl["bg-primary"]};
                    border: none;
                    color: ${hl["text-inverse"]};

                    :hover {
                        background-color: ${hl["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${hl["bg-disabled"]};
        border: ${ml["width-010"]} ${ml.solid}
            ${hl["border-disabled"]};
        color: ${hl["text-disabled"]};
        cursor: not-allowed;
    }
`,bg=U.default.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=ki(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(mg,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),vg=q.default(bg)`
    margin: ${bl["spacing-8"]};
`,yg=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${hl["bg-strong"]};
    border-radius: ${vl.sm};
`,xg=q.default(kd.Default)`
    color: ${e=>e.$enableDateClick?hl["text-primary"]:hl.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return n.css`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,wg=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:a,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:d,onRightArrowClick:c,onCalendarDateSelect:u,dropdownRootNode:f}=r,h=ki(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const g=_c.toDayjs(n),p=_c.toDayjs(n).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),m=_c.isSame(n,mc())&&l?"Today":g.format(s?"ddd":"dddd"),[b,v]=t.useState(!1),y=e=>{u&&u(e),v(!b)},x=()=>{v(!1),d(n)},w=()=>{v(!1),c(n)};return e.jsx(ig,{enabled:!a,isOpen:b,renderElement:()=>e.jsxs(yg,Object.assign({},h,{children:[e.jsx(vg,{"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(Ec.isDisabledDay(g,void 0,i)||_c.isSame(g,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small",children:e.jsx(iu,{})}),e.jsx(xg,{onClick:()=>!!u&&!a&&v(!b),$enableDateClick:!!u&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||a,children:`${p}, ${m}`}),e.jsx(vg,{"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(Ec.isDisabledDay(g,void 0,void 0,o)||_c.isSame(g,o)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small",children:e.jsx(ou,{})})]})),renderDropdown:({elementWidth:t})=>e.jsx(Zu,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8,rootNode:f})},$g=q.default.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return n.css`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${gl.Spec["body-size-baseline"]} -
                            ${bl["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${bl["spacing-8"]};
                }
            `}}
`,Cg=q.default.div`
    width: 100%; // Force next flex item to break to next line
`,Sg=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,jg=q.default(u.ArrowRightIcon)`
    color: ${hl.icon};
    width: ${gl.Spec["body-size-baseline"]};
    height: ${gl.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${bl["spacing-8"]};
    align-self: center;
`,kg=q.default.div`
    position: absolute;
    background: ${e=>e.$error?hl["border-error-focus-strong"]:hl["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${bl["spacing-8"]} - (${gl.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${pl["duration-350"]} ${pl["ease-standard"]},
        opacity ${pl["duration-350"]} ${pl["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return n.css`
                    opacity: 1;
                `;case"end":return n.css`
                    left: calc(50% + ${bl["spacing-16"]});
                    opacity: 1;
                `;case"none":return n.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return n.css`
                display: none;
            `}}
`,Dg=({children:t,currentActive:r,error:n,className:i,wrap:o})=>{const[a,s]=t;return e.jsxs($g,{className:i,$wrap:o,children:[e.jsx(Sg,{"data-id":"range-container-elem1-container",children:a}),e.jsx(jg,{}),o&&e.jsx(Cg,{}),e.jsx(Sg,{"data-id":"range-container-elem2-container",children:s}),e.jsx(kg,{"data-id":"range-container-indicator",$position:r,$error:n,$wrap:o})]})},Eg=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Tg=q.default(xh)`
    ${e=>e.$wrap&&n.css`
            padding: ${bl["spacing-12"]} ${bl["spacing-16"]};
        `}
`,Fg=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&n.css`
            height: fit-content;
        `}
`,Og={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Ig=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:d,valueEnd:c,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:g,withButton:p=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w,dropdownRootNode:$}=r,C=ki(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[S,j]=t.useState(),[k,D]=t.useState(void 0),E="week"===m,T="fixed-range"===m,[F,O]=t.useState(!1),[I,M]=t.useState(!1),[{selectedStart:_,selectedEnd:A,currentFocus:B,calendarOpen:R,isStartDirty:z,isEndDirty:P,focused:L},N]=(({initialState:e,reducers:r,name:n,debug:i})=>{const[o,a]=t.useReducer(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[o,Object.fromEntries(Object.keys(r).map((e=>[e,t=>{i&&Eg(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Og,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:E?"none":T?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),H=t.useRef(!1),W=t.useRef(null),Y=t.useRef(null),V=t.useRef(null),U=t.useRef(null),K=(({maxWidth:e,targetRef:r})=>{const[n,i]=t.useState(!1);return Ye({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),n})({maxWidth:320,targetRef:W});t.useEffect((()=>{N.resetRange({start:Ac.sanitizeInput(d),end:Ac.sanitizeInput(c)})}),[d,c]),t.useEffect((()=>{"start"===B?j(_):"end"===B&&j(A)}),[B]);const q=e=>{var t,r,n;"Enter"!==e.code||p||(_&&A?(N.done({start:_,end:A}),null==u||u(_,A)):(N.dismiss(),null===(t=W.current)||void 0===t||t.focus(),null===(r=V.current)||void 0===r||r.resetPlaceholder(),null===(n=U.current)||void 0===n||n.resetPlaceholder()))},X=e=>{var t;if(de(e))return void(H.current=!0);if(N.changeStart(e),null===(t=Y.current)||void 0===t||t.setCalendarDate(e),H.current=!1,!e)return void(p||A||!P||(N.resetRange({start:"",end:""}),null==u||u("","")));if(!A)return void N.focus("end");if(mc(e).isAfter(A,"day"))N.reselectEnd();else{if(P)return p?void 0:(N.done({start:e,end:A}),void(null==u||u(e,A)));N.focus("end")}},G=e=>{var t,r,n;if(de(e))return void(H.current=!0);if(mc(e).isBefore(_,"day"))return N.changeStart(e),null===(t=Y.current)||void 0===t||t.setCalendarDate(e),void N.reselectEnd();if(N.changeEnd(e),null===(r=Y.current)||void 0===r||r.setCalendarDate(e),e){if(_)return p?void 0:(null===(n=U.current)||void 0===n||n.focusYearRef(),N.done({start:_,end:e}),void(null==u||u(_,e)));N.focus("start")}else p||_||!z||(N.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{var t,r;if(de(e))return void(H.current=!0);if(N.changeStart(e),null===(t=Y.current)||void 0===t||t.setCalendarDate(e),H.current=!1,!e)return void(p?N.changeEnd(""):(N.resetRange({start:"",end:""}),null==u||u("","")));const n=mc(e).format("YYYY-MM-DD"),i=mc(n).add(b-1,"day").format("YYYY-MM-DD");return N.changeStart(n),N.changeEnd(i),H.current=!1,p?void 0:(N.done({start:n,end:i}),null===(r=V.current)||void 0===r||r.focusYearRef(),void(null==u||u(n,i)))},Q=()=>{(E||T)&&M(!0),E&&O(!0),v||o||L||(N.focus("start"),null==f||f())},J=e=>{var t,r,n,i;const o=e.relatedTarget,a=Y.current&&Y.current.contains(o),s=W.current&&W.current.contains(o),l=null===(r=null===(t=e.relatedTarget)||void 0===t?void 0:t.matches)||void 0===r?void 0:r.call(t,"[data-floating-ui-focus-guard]");(L&&!R&&!s||R&&!s&&!a&&!l)&&(N.blur(),M(!1),O(!1),null===(n=V.current)||void 0===n||n.resetPlaceholder(),null===(i=U.current)||void 0===i||i.resetPlaceholder(),le())},ee=e=>t=>{t.stopPropagation(),v||(N.focus(e),te(),re(),L||null==f||f())},te=()=>{if(E){const e=_c.toDayjs(_).startOf("week").format("YYYY-MM-DD");O(!0),M(!0),j(e)}},re=()=>{T&&(M(!0),j(_))},ne=e=>{var t;e&&!H.current||(N.resetStart(),null===(t=V.current)||void 0===t||t.resetInput())},ie=e=>{var t;e&&!H.current||(N.resetEnd(),null===(t=U.current)||void 0===t||t.resetInput())},oe=e=>{switch(m){case"week":(e=>{var t;const r=mc(e).startOf("week").format("YYYY-MM-DD"),n=mc(e).endOf("week").format("YYYY-MM-DD");if(N.changeStart(r),N.changeEnd(n),H.current=!1,!p)null===(t=U.current)||void 0===t||t.focusYearRef(),N.done({start:r,end:n}),null==u||u(r,n)})(e);break;case"fixed-range":Z(e);break;default:"start"===B?X(e):"end"===B&&G(e)}},ae=e=>{var t,r,n;switch(null===(t=W.current)||void 0===t||t.focus(),e){case"reset":N.cancel();break;case"confirmed":if(N.done({start:_,end:A}),null==u||u(_,A),E)break;ce(_,A)&&("range"===m?null===(r=U.current)||void 0===r||r.focusYearRef():null===(n=V.current)||void 0===n||n.focusYearRef())}},se=e=>{D(e)},le=()=>{h&&h()},de=e=>!x&&e&&Ac.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i}),ce=(e,t)=>!(!e||!t)&&mc(e).isBefore(t,"day"),ue=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===B?k:void 0,end:"end"===B?k:void 0};break;case"week":if(!k)return;t={start:mc(k).startOf("week").format("YYYY-MM-DD"),end:mc(k).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!k)return;t={start:mc(k).format("YYYY-MM-DD"),end:mc(k).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(ig,{enabled:!v&&!o,isOpen:R,onClose:()=>{var e,t;N.blur(),O(!1),M(!1),null===(e=V.current)||void 0===e||e.resetPlaceholder(),null===(t=U.current)||void 0===t||t.resetPlaceholder(),le()},onDismiss:()=>{var e,t,r;N.dismiss(),null===(e=W.current)||void 0===e||e.focus(),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=U.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e.jsx(Tg,Object.assign({role:"group",ref:W,tabIndex:0,onFocus:Q,onBlur:J,$focused:L,$disabled:o,$readOnly:v,$error:s,$wrap:K,id:y,"data-testid":C["data-testid"],"aria-disabled":o,onKeyDown:q},C,{children:e.jsxs(Dg,{currentActive:B,wrap:K,error:s,children:[e.jsx(Fg,{$wrap:K,children:e.jsx(hg,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:_,disabled:o,readOnly:F||v,focused:"start"===B,hoverValue:ue("start"),onChange:T?Z:X,onFocus:ee("start"),onBlur:ne,hideInputKeyboard:l})}),e.jsx(Fg,{$wrap:K,children:e.jsx(hg,{ref:U,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:A,disabled:o,readOnly:I||v,focused:"end"===B,hoverValue:ue("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})})]})})),renderDropdown:({elementWidth:t})=>e.jsx(Zu,{ref:Y,variant:m,initialCalendarDate:S,withButton:p,value:_,endValue:A,selectWithinRange:z||P,currentFocus:B,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:x,onSelect:oe,onDismiss:ae,onHover:se,onYearMonthDisplayChange:g,numberOfDays:b,width:t,isFocusable:!v&&!o}),customZIndex:w,offset:16,rootNode:$})},Mg=q.default.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:i,$xlSpan:o,$lgStart:a,$lgSpan:s,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:f,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return n.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Us.MaxWidth.xl} {
                grid-column: ${i||"auto"} / span ${o||1};
            }

            ${Us.MaxWidth.lg} {
                grid-column: ${a||"auto"} / span ${s||1};
            }

            ${Us.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${Us.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${Us.MaxWidth.xs} {
                grid-column: ${f||"auto"} / span ${h||1};
            }

            ${Us.MaxWidth.xxs} {
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,_g=U.default.forwardRef(((t,r)=>{const i=n.useTheme(),{xxlCols:o,xlCols:a,lgCols:s,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=t,f=ki(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e.jsx(Mg,Object.assign({ref:r},(()=>{const e=Ys["xxl-column"]({theme:i}),t=Ys["xl-column"]({theme:i}),r=Ys["lg-column"]({theme:i}),n=Ys["md-column"]({theme:i}),f=Ys["sm-column"]({theme:i}),g=Ys["xs-column"]({theme:i}),p=Ys["xxs-column"]({theme:i}),m=h(o||a||s||l||d||c||u,e,"xxl"),b=h(a||s||l||d||c||u,t,"xl"),v=h(s||l||d||c||u,r,"lg"),y=h(l||d||c||u,n,"md"),x=h(d||c||u,f,"sm"),w=h(c||u,g,"xs"),$=h(u,p,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),f))})),Ag={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Bg=e=>Object.keys(Ag).reduce(((t,r)=>{const n=Ag[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Rg={MaxWidth:Bg("max-width"),MinWidth:Bg("min-width")},zg=Ag,Pg=q.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:i,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return n.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Rg.MaxWidth.tablet} {
                grid-column: ${i||"auto"} / span
                    ${o||1};
            }

            ${Rg.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,Lg=U.default.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=ki(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Pg,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=Ng(o||i||n),a=Ng(e),s=Ng(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ng=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Hg=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||hl.border(e);const r=encodeURIComponent(t),i=e.$thickness||1,o=i+1;return n.css`
        background-color: transparent;
        height: ${i}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${i}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${o}" stroke-dasharray="4 4" /></svg>');
    `},Wg=q.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return n.css`
                    ${Hg}
                `;case"solid":return n.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||hl.border};
                `}}}
`,Yg=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:d,mdCols:c,lgCols:u,xlCols:f,xxlCols:h,mobileCols:g,tabletCols:p,desktopCols:m}=t,b=ki(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==g||void 0!==p||void 0!==m;switch(i){case"flex":return e.jsx(Wg,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e.jsx(Lg,Object.assign({className:a,mobileCols:g,tabletCols:p,desktopCols:m},b,{children:e.jsx(Wg,{$thickness:r,$lineStyle:n,$color:o})})):e.jsx(_g,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=d||t,n=c||r,i=u||n,o=f||i;return{xxlCols:h||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e.jsx(Wg,{$thickness:r,$lineStyle:n,$color:o})}))}},Vg=q.default.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return n.css`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Ug=q.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?hl["overlay-subtle"]:hl["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=n.css`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=n.css`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=n.css`
                transition: none;
            `),t}}
`,Kg=({show:r=!1,rootId:n,onOverlayClick:i,children:o,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:d=!1,zIndex:c,id:u})=>{const[f,h]=t.useState(null),[g,m]=t.useState(),[b]=t.useState((()=>Bc.generate())),v=p.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=o&&U.default.cloneElement(o,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",C=null!=c?c:g?99999:99998;(e=>{const r=p.useFloatingTree();t.useEffect((()=>{if(!r)return;const t={zIndex:e};r.events.emit(eg.Change,t)}),[r,e]),t.useEffect((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(eg.Change,t)};return null==r||r.events.on(eg.Ready,t),()=>null==r?void 0:r.events.off(eg.Ready,t)}),[r,e])})(C),t.useEffect((()=>(D(),h(j()),()=>{O(),T().length<1&&E("remove")})),[]),t.useEffect((()=>{if(r){const e=k();S(e),F();const t=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(t)}{O();const e=setTimeout((()=>{T().length<1&&E("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{y.current=e,m(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>T().length>0,D=()=>{if(!document.getElementById(Xg)){const e=document.createElement("style");e.id=Xg;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Gg} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Gg}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(Gg);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Gg):document.body.classList.add(Gg)},T=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},F=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},O=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},I=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||i&&d&&(e.preventDefault(),i())};return f?K.default.createPortal(e.jsx(Vg,{id:$,"data-testid":$,$show:r,$zIndex:C,children:o&&e.jsx(p.FloatingNode,{id:v,children:e.jsx(Ug,{"data-testid":"overlay-wrapper",$show:r,$stacked:g,$backgroundBlur:s,$disableTransition:l,onClick:I,children:w})})}),f):null},qg=t=>e.jsx(p.FloatingTree,{children:e.jsx(Kg,Object.assign({},t))}),Xg="lifesg-ds-overlay-stylesheet",Gg="lifesg-ds-overlay-open",Zg=q.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${hl.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${hl.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?n.css`
            right: 0;
            transition: all ${pl["duration-800"]} ${pl["ease-exit"]};
        `:n.css`
        right: -100%;
        transition: all ${pl["duration-800"]} ${pl["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${vl.md};
    border-bottom-left-radius: ${vl.md};
    overflow: hidden;

    ${xl.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${xl.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Qg=q.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${bl["spacing-16"]};
    padding: ${bl["spacing-32"]} ${bl["spacing-16"]}
        ${bl["spacing-16"]};
    background-color: ${hl.bg};
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};

    ${xl.MaxWidth.lg} {
        gap: ${bl["spacing-8"]};
        padding: ${bl["spacing-32"]} ${bl["spacing-20"]}
            ${bl["spacing-16"]};
    }
`,Jg=q.default(Ll)`
    color: ${hl.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${hl["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,ep=q.default(exports.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,tp=q.default.div`
    flex: 1;
    overflow-y: auto;
`,rp=({className:t,progress:r,color:n,"data-testid":i})=>e.jsx(np,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e.jsx("progress",{value:100*r,max:100})}),np=q.default.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):hl["icon-primary-subtle"](e),n.css`
            border: ${ml["width-010"]} ${ml.solid} ${r};
            border-radius: ${vl.sm};

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
`,ip=q.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${xl.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,op=r=>{var{id:n="modal",show:i,animationFrom:o="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0}=r,f=ki(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,g]=t.useState(),[p,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;g(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;g(e),m(window.visualViewport.offsetTop)}};return e.jsx(qg,{"data-testid":`${n}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:c,id:n,rootId:l,zIndex:d,children:e.jsx(ip,Object.assign({show:i,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:p},f,{children:a}))})},ap=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${hl.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: ${vl.lg};
    overflow: hidden;

    ${xl.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,sp=q.default(Ll)`
    position: absolute;
    top: var(--close-button-top-inset, ${bl["spacing-16"]});
    right: var(--close-button-right-inset, ${bl["spacing-16"]});
    padding: 0;
    color: ${hl.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${xl.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${bl["spacing-20"]});
    }
`,lp=t=>{var{id:r="modal-box",children:n,onClose:i,showCloseButton:o=!0}=t,a=ki(t,["id","children","onClose","showCloseButton"]);return e.jsxs(ap,Object.assign({"data-testid":r},a,{onClick:e=>{e.stopPropagation()},children:[o&&e.jsx(sp,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e.jsx(m.CrossIcon,{})}),n]}))},dp=Object.assign(op,{Box:lp}),cp=n.css`
    ${e=>`\n        ${xl.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${yl["sm-max"](e)}px)\n    `}
`,up=n.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${yl["sm-max"](e)}px)\n    `}
`,fp=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>n.css`
            ${ml.Util["dashed-default"]({radius:vl.sm,thickness:ml["width-040"],colour:e.$disabled?hl["border-disabled"]:hl.border})}

            background-color: ${e.$disabled?hl["bg-disabled"]:hl.bg};
        `}
    height: 14.125rem;
`,hp=q.default(kd.Default)`
    width: fit-content;
    margin: 0 ${bl["spacing-20"]};

    :disabled {
        border-color: ${hl["border-strong"]};
    }
`,gp=q.default(bg)`
    position: absolute;
    top: ${bl["spacing-16"]};
    right: ${bl["spacing-16"]};

    :disabled {
        border-color: ${hl["border-strong"]};
    }
`,pp=q.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${bl["spacing-16"]}) * 2);
    height: 100%;
`,mp=q.default.div`
    background: ${hl["bg-primary-subtlest"]};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    margin: 0 ${bl["spacing-20"]};
    padding: ${bl["spacing-16"]};
    display: flex;
    gap: ${bl["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,bp=q.default(exports.Typography.BodySM)`
    margin-top: ${bl["spacing-16"]};
`,vp=q.default(dp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,yp=q.default.div`
    width: 100%;
    margin: auto;
    padding: ${bl["layout-xxl"]} ${bl["layout-sm"]};

    ${cp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,xp=q.default(dp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${bl["spacing-16"]};

    ${cp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${bl["spacing-8"]};
        --close-button-right-inset: ${bl["spacing-20"]};
    }
`,wp=q.default.h2`
    ${gl["body-baseline-semibold"]}
    color: ${hl.text};
    margin-bottom: ${bl["spacing-16"]};
    text-align: center;

    ${cp} {
        ${gl["body-md-semibold"]}
        margin: ${bl["spacing-12"]} 0;
    }
`,$p=q.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${vl.lg};
    overflow: hidden;

    ${cp} {
        border-radius: 0;
        flex: 1;
    }

    ${up} {
        background: ${hl["bg-strong"]};
    }
`,Cp=q.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${hl["bg-stronger"]};
    margin: auto;

    ${cp} {
        aspect-ratio: 4/3;
    }
    ${xl.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${up} {
        width: auto;
        height: 100%;
    }
`,Sp=q.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${hl["border-strong"]};
    pointer-events: none;

    ${cp} {
        width: calc(100% - ${bl["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,jp=q.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${bl["spacing-16"]};

    ${xl.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${bl["spacing-16"]} ${bl["spacing-24"]}
            ${bl["spacing-48"]};
        gap: ${bl["spacing-16"]};
    }

    ${up} {
        flex-direction: row;
        margin: ${bl["spacing-16"]} ${bl["spacing-20"]};
    }
`,kp=q.default(kd.Default)`
    width: 8.5rem;
    ${xl.MaxWidth.sm} {
        width: 100%;
    }
    ${up} {
        height: 2.5rem;
    }
`,Dp=q.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ep=q.default.canvas`
    cursor: crosshair;
`,Tp=t.lazy((()=>Di(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.6c9a094b.js")}))).ESignatureCanvas}})))),Fp=r=>{const{description:i,id:o,loadingProgress:a,loadingLabel:s="Uploading...",onChange:l,value:d,disabled:c}=r,f=ki(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[h,g]=t.useState(!1),p=t.useRef(null),[m,b]=t.useState(d),v=n.useTheme(),y=yl["sm-max"]({theme:v}),x=tc.useMediaQuery({maxWidth:y}),w=tc.useMediaQuery({maxHeight:y,orientation:"landscape"}),$=()=>{var e;null===(e=p.current)||void 0===e||e.clear()},C=()=>{if(p.current){const e=p.current.export();b(e),g(!1),null==l||l(e)}};t.useEffect((()=>{b(d)}),[d]);return e.jsxs("div",Object.assign({},f,{children:[e.jsx(fp,{$disabled:c,children:"number"==typeof a?e.jsxs(mp,{children:[s&&e.jsx(exports.Typography.BodyMD,{children:s}),e.jsx(rp,{progress:null!=a?a:0,"data-testid":`${o||"e-signature"}-progress-bar`})]}):m?e.jsxs(e.Fragment,{children:[e.jsx(pp,{src:m,alt:"Signature preview"}),e.jsx(gp,{styleType:"light",onClick:()=>g(!0),id:o,"aria-label":"Edit signature",disabled:c,children:e.jsx(u.PencilIcon,{})})]}):e.jsx(hp,{type:"button",styleType:"secondary","aria-label":"Add signature",id:o,onClick:()=>g(!0),disabled:c,children:"Add signature"})}),e.jsx(vp,{"data-testid":"signature-modal",show:h,children:e.jsx(yp,{children:e.jsxs(xp,{onClose:()=>g(!1),children:[e.jsx(wp,{children:"Signature"}),e.jsx($p,{children:e.jsxs(Cp,{children:[e.jsx(Sp,{}),e.jsx(t.Suspense,{fallback:null,children:h&&e.jsx(Tp,{ref:p,baseImageDataURL:m})})]})}),e.jsxs(jp,{children:[e.jsx(kp,{as:w?tu.Small:tu.Default,type:"button",styleType:x&&!w?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:$,children:"Clear"}),e.jsx(kp,{as:w?kd.Small:kd.Default,type:"button",onClick:C,children:"Save"})]})]})})}),i?e.jsx(bp,{children:i}):null]}))},Op="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Ip="Submit",Mp="Rate your experience",_p=5,Ap=q.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Bp=n.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${hl["icon-primary"]};
    ${Ap}:focus-visible + & {
        outline: ${ml["width-020"]} ${ml.solid}
            ${hl["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${vl.sm};
    }
`,Rp=q.default(b.StarIcon)`
    ${Bp}
`,zp=q.default(v.StarFillIcon)`
    ${Bp}
`,Pp=q.default.label`
    margin: 0 ${bl["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${xl.MaxWidth.md} {
        margin: 0 ${bl["spacing-8"]};
    }
`,Lp=q.default.div`
    display: flex;
    justify-content: center;
    margin: ${bl["spacing-8"]} ${bl["spacing-16"]};
`,Np=t=>{const{description:r,rating:n,onRatingChange:i}=t,o=t=>{const r=`${t} star${1===t?"":"s"}`;return t<=n?e.jsx(zp,{"aria-label":r}):e.jsx(Rp,{"aria-label":r})};return e.jsx(Lp,{role:"radiogroup","aria-label":r,children:[...Array(_p)].map(((t,r)=>{const a=r+1;return e.jsxs(Pp,{children:[e.jsx(Ap,{type:"radio",name:"star",checked:a===n,onChange:()=>(e=>{i(e)})(a)}),o(a)]},a)}))})},Hp=q.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${xl.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Wp=q.default.div`
    border-top: 1px solid ${hl.border};
    border-bottom: 1px solid ${hl.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${xl.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,Yp=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${xl.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,Vp=q.default(kd.Default)`
    margin-top: 1rem;
    width: 100%;
`,Up=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return n.css`
                ${ml.Util["dashed-default"]({radius:vl.sm,thickness:ml["width-040"],colour:hl.border})}
                padding: ${bl["spacing-32"]};

                ${xl.MaxWidth.sm} {
                    padding: ${bl["spacing-32"]} ${bl["spacing-20"]};
                }
            `}}
`,Kp=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${bl["spacing-32"]};
`,qp=q.default.p`
    ${gl["heading-xs-regular"]}
    color: ${hl.text};
    margin-bottom: ${bl["spacing-8"]};
`,Xp=q.default.div`
    ${Id({textSize:"heading-xs"})}
    color: ${hl.text};
`,Gp=q.default.p`
    ${gl["body-md-regular"]}
    color: ${hl["text-subtler"]};
`,Zp=q.default.div`
    ${Id({textSize:"body-md"})}
    color: ${hl["text-subtler"]};
`,Qp=q.default.ul`
    list-style-type: none;
`;var Jp;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Jp||(Jp={}));const em=({src:t,alt:r,className:n,"data-testid":i})=>e.jsx("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),tm=q.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${bl["spacing-16"]};
    }
`,rm=q.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${bl["spacing-16"]} ${bl["spacing-32"]};
    cursor: pointer;

    background: ${hl["bg-primary-subtlest"]};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};

    ${xl.MaxWidth.lg} {
        padding: ${bl["spacing-16"]};
    }

    :hover {
        background: ${hl["bg-hover"]};
    }
`,nm=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${xl.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return n.css`
                ${xl.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,im=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,om=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${xl.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,am=q.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${bl["spacing-8"]};

    ${gl["body-md-regular"]}
    color: ${hl.text};

    ${xl.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${bl["spacing-8"]};

        ${Nl(2)}
    }
`,sm=q.default.div`
    ${gl["body-md-regular"]}
    color: ${hl.text};

    ${xl.MaxWidth.lg} {
        ${Nl(2)}
    }
`;q.default(sm)`
    ${gl["body-md-regular"]}
    margin-top: ${bl["spacing-4"]};
`;const lm=q.default.div`
    ${gl["body-sm-semibold"]}
    color: ${hl["text-error"]};
`,dm=q.default(lm)`
    margin-top: ${bl["spacing-4"]};
    ${xl.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,cm=q.default(lm)`
    display: none;
    visibility: hidden;
    ${xl.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${bl["spacing-8"]};
    }
`,um=q.default(ld)`
    color: ${hl["icon-primary"]};
`,fm=q.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${bl["spacing-32"]};

    ${xl.MaxWidth.lg} {
        margin-left: ${bl["spacing-16"]};
    }
`,hm=q.default(bg)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${bl["spacing-16"]};
    }
`,gm=q.default.div`
    width: auto;
    margin-right: ${bl["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${xl.MaxWidth.lg} {
        margin-right: ${bl["spacing-16"]};
    }
`,pm=q.default(em)`
    border-radius: ${vl.sm};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${xl.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,mm=t.memo((({fileItem:r,onDownload:i})=>{const{id:o,name:a,size:s,errorMessage:l,thumbnailImageDataUrl:d,truncateText:c=!0,ready:f=!0}=r,[h,g]=t.useState(!1),[p,m]=t.useState(!1),b=Jp.formatFileSizeDisplay(s),v=n.useTheme(),y=yl["sm-max"]({theme:v}),x=tc.useMediaQuery({maxWidth:y}),[w,$]=t.useState(),C=t.useRef(null);t.useEffect((()=>{C.current&&$(x?S(a):a)}),[a,x]);const S=e=>{if(!c)return e;const t=C&&C.current?C.current.getBoundingClientRect().width:0;return Rc.truncateTwoLines(e,t,16,1.5)},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(sm,{ref:C,children:w}),p&&e.jsx(dm,{children:l||"Something went wrong"})]});return e.jsx(tm,{"data-testid":o,children:e.jsxs(rm,{onClick:()=>Di(void 0,void 0,void 0,(function*(){if(f&&!h){g(!0);try{m(!1),yield i(r)}catch(e){m(!0)}finally{g(!1)}}})),children:[(()=>{let t;var r;return d?(r=d,t=e.jsxs(e.Fragment,{children:[e.jsx(gm,{"data-testid":`${o}-thumbnail`,children:e.jsx(pm,{"data-testid":`${o}-thumbnail-image`,src:r})}),e.jsxs(om,{children:[e.jsx(im,{children:j()}),e.jsx(am,{children:b||"-"}),p&&e.jsx(cm,{children:l||"Something went wrong"})]})]})):t=e.jsxs(e.Fragment,{children:[e.jsx(im,{children:j()}),e.jsx(am,{children:b||"-"}),p&&e.jsx(cm,{children:l||"Something went wrong"})]}),e.jsx(nm,{$hasThumbnail:!!d,children:t})})(),e.jsx(fm,{children:e.jsx(hm,{"data-testid":`${o}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`,children:h||!f?e.jsx(um,{size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})})})]})})})),bm={activeId:void 0,setActiveId:()=>{}},vm=t.createContext(bm);var ym,xm={exports:{}},wm={exports:{}},$m={};var Cm,Sm,jm,km,Dm,Em,Tm,Fm,Om,Im,Mm,_m,Am,Bm,Rm={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function zm(){return Sm||(Sm=1,"production"===process.env.NODE_ENV?wm.exports=function(){if(ym)return $m;ym=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case d:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case c:case g:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===d}return $m.AsyncMode=l,$m.ConcurrentMode=d,$m.ContextConsumer=s,$m.ContextProvider=a,$m.Element=t,$m.ForwardRef=c,$m.Fragment=n,$m.Lazy=g,$m.Memo=h,$m.Portal=r,$m.Profiler=o,$m.StrictMode=i,$m.Suspense=u,$m.isAsyncMode=function(e){return x(e)||y(e)===l},$m.isConcurrentMode=x,$m.isContextConsumer=function(e){return y(e)===s},$m.isContextProvider=function(e){return y(e)===a},$m.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},$m.isForwardRef=function(e){return y(e)===c},$m.isFragment=function(e){return y(e)===n},$m.isLazy=function(e){return y(e)===g},$m.isMemo=function(e){return y(e)===h},$m.isPortal=function(e){return y(e)===r},$m.isProfiler=function(e){return y(e)===o},$m.isStrictMode=function(e){return y(e)===i},$m.isSuspense=function(e){return y(e)===u},$m.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===d||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===c||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===p)},$m.typeOf=y,$m}():wm.exports=(Cm||(Cm=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var p=e.type;switch(p){case l:case d:case n:case o:case i:case u:return p;default:var m=p&&p.$$typeof;switch(m){case s:case c:case g:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=d,$=s,C=a,S=t,j=c,k=n,D=g,E=h,T=r,F=o,O=i,I=u,M=!1;function _(e){return y(e)===d}Rm.AsyncMode=x,Rm.ConcurrentMode=w,Rm.ContextConsumer=$,Rm.ContextProvider=C,Rm.Element=S,Rm.ForwardRef=j,Rm.Fragment=k,Rm.Lazy=D,Rm.Memo=E,Rm.Portal=T,Rm.Profiler=F,Rm.StrictMode=O,Rm.Suspense=I,Rm.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||y(e)===l},Rm.isConcurrentMode=_,Rm.isContextConsumer=function(e){return y(e)===s},Rm.isContextProvider=function(e){return y(e)===a},Rm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Rm.isForwardRef=function(e){return y(e)===c},Rm.isFragment=function(e){return y(e)===n},Rm.isLazy=function(e){return y(e)===g},Rm.isMemo=function(e){return y(e)===h},Rm.isPortal=function(e){return y(e)===r},Rm.isProfiler=function(e){return y(e)===o},Rm.isStrictMode=function(e){return y(e)===i},Rm.isSuspense=function(e){return y(e)===u},Rm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===d||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===c||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===p)},Rm.typeOf=y}()),Rm)),wm.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Pm(){if(km)return jm;km=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return jm=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))t.call(o,d)&&(s[d]=o[d]);if(e){a=e(o);for(var c=0;c<a.length;c++)r.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s},jm}function Lm(){if(Em)return Dm;Em=1;return Dm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Nm(){return Fm?Tm:(Fm=1,Tm=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Hm=zm();xm.exports=function(){if(_m)return Mm;_m=1;var e=zm(),t=Pm(),r=Lm(),n=Nm(),i=function(){if(Im)return Om;Im=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Lm(),r={},n=Nm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var d in i)if(n(i,d)){var c;try{if("function"!=typeof i[d]){var u=Error((s||"React class")+": "+a+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=i[d](o,d,s,a,null,t)}catch(e){c=e}if(!c||c instanceof Error||e((s||"React class")+": type specification of "+a+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in r)){r[c.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+c.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Om=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Mm=function(s,l){var d="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:g(a),arrayOf:function(e){return g((function(t,n,i,o,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,i,o,a+"["+l+"]",r);if(d instanceof Error)return d}return null}))},element:g((function(e,t,r,n,i){var o=e[t];return s(o)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||c;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,i){return b(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,o,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],d=v(l);if("object"!==d)return new h("Invalid "+a+" `"+s+"` of type `"+d+"` supplied to `"+o+"`, expected an object.");for(var c in l)if(n(l,c)){var u=e(l,c,o,a,s+"."+c,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return g((function(t,i,o,a,s){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,i,o,a,s,r);if(null==c)return null;c.data&&n(c.data,"expectedType")&&l.push(c.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,i,o,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return m(i,o,a,d,y(c));var u=c(s,d,i,o,a+"."+d,r);if(u)return u}return null}))},exact:function(e){return g((function(i,o,a,s,l){var d=i[o],c=v(d);if("object"!==c)return new h("Invalid "+s+" `"+l+"` of type `"+c+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var f in u){var g=e[f];if(n(e,f)&&"function"!=typeof g)return m(a,s,l,f,y(g));if(!g)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=g(d,f,a,s,l+"."+f,r);if(p)return p}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,d,u,f,g){if(d=d||c,f=f||s,g!==r){if(l){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=d+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,s,d,u,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function p(e){return g((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(d&&e[d]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},Mm}()(Hm.isElement,!0)}else xm.exports=function(){if(Bm)return Am;Bm=1;var e=Lm();function t(){}function r(){}return r.resetWarningCache=t,Am=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var Wm=Ii(xm.exports),Ym=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Vm(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=Ym.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var Um=[".DS_Store","Thumbs.db"];function Km(e){return"object"==typeof e&&null!==e}function qm(e){return Qm(e.target.files).map((function(e){return Vm(e)}))}function Xm(e){return Di(this,void 0,void 0,(function(){return Ei(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Vm(e)}))]}}))}))}function Gm(e,t){return Di(this,void 0,void 0,(function(){var r;return Ei(this,(function(n){switch(n.label){case 0:return e.items?(r=Qm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Jm))]):[3,2];case 1:return[2,Zm(eb(n.sent()))];case 2:return[2,Zm(Qm(e.files).map((function(e){return Vm(e)})))]}}))}))}function Zm(e){return e.filter((function(e){return-1===Um.indexOf(e.name)}))}function Qm(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Jm(e){if("function"!=typeof e.webkitGetAsEntry)return tb(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?nb(t):tb(e)}function eb(e){return e.reduce((function(e,t){return Fi(Fi([],Ti(e),!1),Ti(Array.isArray(t)?eb(t):[t]),!1)}),[])}function tb(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=Vm(t);return Promise.resolve(r)}function rb(e){return Di(this,void 0,void 0,(function(){return Ei(this,(function(t){return[2,e.isDirectory?nb(e):ib(e)]}))}))}function nb(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return Di(o,void 0,void 0,(function(){var o,a,s;return Ei(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(rb)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function ib(e){return Di(this,void 0,void 0,(function(){return Ei(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=Vm(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function ob(e){return function(e){if(Array.isArray(e))return ub(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||cb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ab(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function sb(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ab(Object(r),!0).forEach((function(t){lb(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ab(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function lb(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function db(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||cb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function cb(e,t){if(e){if("string"==typeof e)return ub(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ub(e,t):void 0}}function ub(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var fb=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},hb=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},gb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},pb={code:"too-many-files",message:"Too many files"};function mb(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:fb(t)]}function bb(e,t,r){if(vb(e.size))if(vb(t)&&vb(r)){if(e.size>r)return[!1,hb(r)];if(e.size<t)return[!1,gb(t)]}else{if(vb(t)&&e.size<t)return[!1,gb(t)];if(vb(r)&&e.size>r)return[!1,hb(r)]}return[!0,null]}function vb(e){return null!=e}function yb(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function xb(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function wb(e){e.preventDefault()}function $b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!yb(e)&&t&&t.apply(void 0,[e].concat(n)),yb(e)}))}}function Cb(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Sb(e){return/^.*\.[\w]+$/.test(e)}var jb=["children"],kb=["open"],Db=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Eb=["refKey","onChange","onClick"];function Tb(e){return function(e){if(Array.isArray(e))return Ib(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Ob(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Ob(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ob(e,t){if(e){if("string"==typeof e)return Ib(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ib(e,t):void 0}}function Ib(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Mb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Mb(Object(r),!0).forEach((function(t){Ab(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Mb(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ab(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Bb(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Rb=t.forwardRef((function(e,r){var n=e.children,i=Lb(Bb(e,jb)),o=i.open,a=Bb(i,kb);return t.useImperativeHandle(r,(function(){return{open:o}}),[o]),U.default.createElement(t.Fragment,null,n(_b(_b({},a),{},{open:o})))}));Rb.displayName="Dropzone";var zb={disabled:!1,getFilesFromEvent:function(e){return Di(this,void 0,void 0,(function(){return Ei(this,(function(t){return Km(e)&&Km(e.dataTransfer)?[2,Gm(e.dataTransfer,e.type)]:function(e){return Km(e)&&Km(e.target)}(e)?[2,qm(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Xm(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Rb.defaultProps=zb,Rb.propTypes={children:Wm.func,accept:Wm.objectOf(Wm.arrayOf(Wm.string)),multiple:Wm.bool,preventDropOnDocument:Wm.bool,noClick:Wm.bool,noKeyboard:Wm.bool,noDrag:Wm.bool,noDragEventsBubbling:Wm.bool,minSize:Wm.number,maxSize:Wm.number,maxFiles:Wm.number,disabled:Wm.bool,getFilesFromEvent:Wm.func,onFileDialogCancel:Wm.func,onFileDialogOpen:Wm.func,useFsAccessApi:Wm.bool,autoFocus:Wm.bool,onDragEnter:Wm.func,onDragLeave:Wm.func,onDragOver:Wm.func,onDrop:Wm.func,onDropAccepted:Wm.func,onDropRejected:Wm.func,onError:Wm.func,validator:Wm.func};var Pb={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Lb(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=_b(_b({},zb),e),n=r.accept,i=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,s=r.minSize,l=r.multiple,d=r.maxFiles,c=r.onDragEnter,u=r.onDragLeave,f=r.onDragOver,h=r.onDrop,g=r.onDropAccepted,p=r.onDropRejected,m=r.onFileDialogCancel,b=r.onFileDialogOpen,v=r.useFsAccessApi,y=r.autoFocus,x=r.preventDropOnDocument,w=r.noClick,$=r.noKeyboard,C=r.noDrag,S=r.noDragEventsBubbling,j=r.onError,k=r.validator,D=t.useMemo((function(){return function(e){if(vb(e))return Object.entries(e).reduce((function(e,t){var r=db(t,2),n=r[0],i=r[1];return[].concat(ob(e),[n],ob(i))}),[]).filter((function(e){return Cb(e)||Sb(e)})).join(",")}(n)}),[n]),E=t.useMemo((function(){return function(e){return vb(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=db(e,2),r=t[0],n=t[1],i=!0;return Cb(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(Sb)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=db(t,2),n=r[0],i=r[1];return sb(sb({},e),{},lb({},n,i))}),{})}]:e}(n)}),[n]),T=t.useMemo((function(){return"function"==typeof b?b:Hb}),[b]),F=t.useMemo((function(){return"function"==typeof m?m:Hb}),[m]),O=t.useRef(null),I=t.useRef(null),M=Fb(t.useReducer(Nb,Pb),2),_=M[0],A=M[1],B=_.isFocused,R=_.isFileDialogActive,z=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),P=function(){!z.current&&R&&setTimeout((function(){I.current&&(I.current.files.length||(A({type:"closeDialog"}),F()))}),300)};t.useEffect((function(){return window.addEventListener("focus",P,!1),function(){window.removeEventListener("focus",P,!1)}}),[I,R,F,z]);var L=t.useRef([]),N=function(e){O.current&&O.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",wb,!1),document.addEventListener("drop",N,!1)),function(){x&&(document.removeEventListener("dragover",wb),document.removeEventListener("drop",N))}}),[O,x]),t.useEffect((function(){return!i&&y&&O.current&&O.current.focus(),function(){}}),[O,y,i]);var H=t.useCallback((function(e){j?j(e):console.error(e)}),[j]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[].concat(Tb(L.current),[e.target]),xb(e)&&Promise.resolve(o(e)).then((function(t){if(!yb(e)||S){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=db(mb(e,r),1)[0],o=db(bb(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:D,minSize:s,maxSize:a,multiple:l,maxFiles:d,validator:k});A({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),c&&c(e)}})).catch((function(e){return H(e)}))}),[o,c,H,S,D,s,a,l,d,k]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=xb(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=L.current.filter((function(e){return O.current&&O.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),xb(e)&&u&&u(e))}),[O,u,S]),U=t.useCallback((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Fb(mb(e,D),2),i=t[0],o=t[1],l=Fb(bb(e,s,a),2),d=l[0],c=l[1],u=k?k(e):null;if(i&&d&&!u)r.push(e);else{var f=[o,c];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&d>=1&&r.length>d)&&(r.forEach((function(e){n.push({file:e,errors:[pb]})})),r.splice(0)),A({acceptedFiles:r,fileRejections:n,type:"setFiles"}),h&&h(r,n,t),n.length>0&&p&&p(n,t),r.length>0&&g&&g(r,t)}),[A,l,D,s,a,d,h,g,p,k]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[],xb(e)&&Promise.resolve(o(e)).then((function(t){yb(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[o,U,H,S]),q=t.useCallback((function(){if(z.current){A({type:"openDialog"}),T();var e={multiple:l,types:E};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(F(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(z.current=!1,I.current?(I.current.value=null,I.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else I.current&&(A({type:"openDialog"}),T(),I.current.value=null,I.current.click())}),[A,T,F,v,U,H,E,l]),X=t.useCallback((function(e){O.current&&O.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[O,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return C?null:J(e)},re=function(e){S&&e.stopPropagation()},ne=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,d=e.onDragEnter,c=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Bb(e,Db);return _b(_b(Ab({onKeyDown:ee($b(o,X)),onFocus:ee($b(a,G)),onBlur:ee($b(s,Z)),onClick:J($b(l,Q)),onDragEnter:te($b(d,W)),onDragOver:te($b(c,Y)),onDragLeave:te($b(u,V)),onDrop:te($b(f,K)),role:"string"==typeof n&&""!==n?n:"presentation"},r,O),i||$?{}:{tabIndex:0}),h)}}),[O,X,G,Z,Q,W,Y,V,K,$,C,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),oe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=Bb(e,Eb);return _b(_b({},Ab({accept:D,multiple:l,type:"file",style:{display:"none"},onChange:J($b(n,K)),onClick:J($b(i,ie)),tabIndex:-1},r,I)),o)}}),[I,n,l,K,i]);return _b(_b({},_),{},{isFocused:B&&!i,getRootProps:ne,getInputProps:oe,rootRef:O,inputRef:I,open:J(q)})}function Nb(e,t){switch(t.type){case"focus":return _b(_b({},e),{},{isFocused:!0});case"blur":return _b(_b({},e),{},{isFocused:!1});case"openDialog":return _b(_b({},Pb),{},{isFileDialogActive:!0});case"closeDialog":return _b(_b({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return _b(_b({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return _b(_b({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return _b({},Pb);default:return e}}function Hb(){}const Wb=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return n.css`
                ${ml.Util["dashed-default"]({radius:vl.sm,thickness:ml["width-040"],colour:hl.border})}
                padding: ${bl["spacing-32"]};

                ${xl.MaxWidth.sm} {
                    padding: ${bl["spacing-32"]} ${bl["spacing-20"]};
                }
            `}}
`,Yb=q.default.input`
    display: none;
`,Vb=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${hl["bg-primary-subtler"]};
    ${ml.Util["dashed-default"]({radius:vl.sm,thickness:ml["width-040"],colour:hl["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Ub=q.default(exports.Typography.BodyMD)`
    color: ${hl["text-primary"]};
    text-align: center;
`,Kb=q.default(y.CloudArrowUpFillIcon)`
    color: ${hl["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,qb=t.forwardRef((({children:r,accept:n,capture:i,multiple:o,id:a,className:s,name:l,border:d,disabled:c,onChange:u,"data-testid":f},h)=>{const g=t.useRef(null),{getRootProps:p,isDragActive:m}=Lb({onDrop:u,noClick:!0,disabled:c});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},g.current),{openFileDialog:()=>{g.current&&(g.current.value="",g.current.click())}})));return e.jsxs(Wb,Object.assign({id:a,"data-testid":f||"dropzone",$border:d,className:s},p(),{children:[e.jsx(Yb,{type:"file",name:l,ref:g,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:o,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),r,m&&e.jsxs(Vb,{children:[e.jsx(Kb,{}),e.jsx(Ub,{weight:"semibold",children:"Drop files here"})]})]}))}));const Xb="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Gb(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Zb(e){return"nodeType"in e}function Qb(e){var t,r;return e?Gb(e)?e:Zb(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Jb(e){const{Document:t}=Qb(e);return e instanceof t}function ev(e){return!Gb(e)&&e instanceof Qb(e).HTMLElement}function tv(e){return e instanceof Qb(e).SVGElement}function rv(e){return e?Gb(e)?e.document:Zb(e)?Jb(e)?e:ev(e)||tv(e)?e.ownerDocument:document:document:document}const nv=Xb?t.useLayoutEffect:t.useEffect;function iv(e){const r=t.useRef(e);return nv((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function ov(e,r){void 0===r&&(r=[e]);const n=t.useRef(e);return nv((()=>{n.current!==e&&(n.current=e)}),r),n}function av(e,r){const n=t.useRef();return t.useMemo((()=>{const t=e(n.current);return n.current=t,t}),[...r])}function sv(e){const r=iv(e),n=t.useRef(null),i=t.useCallback((e=>{e!==n.current&&(null==r||r(e,n.current)),n.current=e}),[]);return[n,i]}function lv(e){const r=t.useRef();return t.useEffect((()=>{r.current=e}),[e]),r.current}let dv={};function cv(e,r){return t.useMemo((()=>{if(r)return r;const t=null==dv[e]?0:dv[e]+1;return dv[e]=t,e+"-"+t}),[e,r])}function uv(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const fv=uv(1),hv=uv(-1);function gv(e){if(!e)return!1;const{KeyboardEvent:t}=Qb(e.target);return t&&e instanceof t}function pv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Qb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const mv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[mv.Translate.toString(e),mv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),bv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function vv(e){return e.matches(bv)?e:e.querySelector(bv)}const yv={display:"none"};function xv(e){let{id:t,value:r}=e;return U.default.createElement("div",{id:t,style:yv},r)}function wv(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return U.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const $v=t.createContext(null);const Cv={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Sv={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function jv(e){let{announcements:n=Sv,container:i,hiddenTextDescribedById:o,screenReaderInstructions:a=Cv}=e;const{announce:s,announcement:l}=function(){const[e,r]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&r(e)}),[]),announcement:e}}(),d=cv("DndLiveRegion"),[c,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const r=t.useContext($v);t.useEffect((()=>{if(!r)throw new Error("useDndMonitor must be used within a children of <DndContext>");return r(e)}),[e,r])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}})),[s,n])),!c)return null;const f=U.default.createElement(U.default.Fragment,null,U.default.createElement(xv,{id:o,value:a.draggable}),U.default.createElement(wv,{id:d,announcement:l}));return i?r.createPortal(f,i):f}var kv;function Dv(){}function Ev(e,r){return t.useMemo((()=>({sensor:e,options:null!=r?r:{}})),[e,r])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(kv||(kv={}));const Tv=Object.freeze({x:0,y:0});function Fv(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Ov(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Iv(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function Mv(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function _v(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const Av=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=_v(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(Ov)};function Bv(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Tv}function Rv(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const zv=Rv(1);const Pv={ignoreTransform:!1};function Lv(e,t){void 0===t&&(t=Pv);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Qb(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),d=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:c,height:u,top:d,right:l+c,bottom:d+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function Nv(e){return Lv(e,{ignoreTransform:!0})}function Hv(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Jb(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!ev(i)||tv(i))return r;if(r.includes(i))return r;const o=Qb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Qb(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=Qb(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function Wv(e){const[t]=Hv(e,1);return null!=t?t:null}function Yv(e){return Xb&&e?Gb(e)?e:Zb(e)?Jb(e)||e===rv(e).scrollingElement?window:ev(e)?e:null:null:null}function Vv(e){return Gb(e)?e.scrollX:e.scrollLeft}function Uv(e){return Gb(e)?e.scrollY:e.scrollTop}function Kv(e){return{x:Vv(e),y:Uv(e)}}var qv;function Xv(e){return!(!Xb||!e)&&e===document.scrollingElement}function Gv(e){const t={x:0,y:0},r=Xv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(qv||(qv={}));const Zv={x:.2,y:.2};function Qv(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=Zv);const{isTop:d,isBottom:c,isLeft:u,isRight:f}=Gv(e),h={x:0,y:0},g={x:0,y:0},p=t.height*i.y,m=t.width*i.x;return!d&&o<=t.top+p?(h.y=qv.Backward,g.y=n*Math.abs((t.top+p-o)/p)):!c&&l>=t.bottom-p&&(h.y=qv.Forward,g.y=n*Math.abs((t.bottom-p-l)/p)),!f&&s>=t.right-m?(h.x=qv.Forward,g.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=qv.Backward,g.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:g}}function Jv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function ey(e){return e.reduce(((e,t)=>fv(e,Kv(t))),Tv)}const ty=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Vv(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Uv(t)),0)}]];class ry{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Hv(t),n=ey(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of ty)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ny{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function iy(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var oy,ay;function sy(e){e.preventDefault()}function ly(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(oy||(oy={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(ay||(ay={}));const dy={start:[ay.Space,ay.Enter],cancel:[ay.Esc],end:[ay.Space,ay.Enter]},cy=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case ay.Right:return{...r,x:r.x+25};case ay.Left:return{...r,x:r.x-25};case ay.Down:return{...r,y:r.y+25};case ay.Up:return{...r,y:r.y-25}}};let uy=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new ny(rv(t)),this.windowListeners=new ny(Qb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(oy.Resize,this.handleCancel),this.windowListeners.add(oy.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(oy.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=Lv),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);Wv(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Tv)}handleKeyDown(e){if(gv(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=dy,coordinateGetter:o=cy,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,d=l?{x:l.left,y:l.top}:Tv;this.referenceCoordinates||(this.referenceCoordinates=d);const c=o(e,{active:t,context:r.current,currentCoordinates:d});if(c){const t=hv(c,d),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:d,maxScroll:u,minScroll:f}=Gv(r),h=Jv(r),g={x:Math.min(i===ay.Right?h.right-h.width/2:h.right,Math.max(i===ay.Right?h.left:h.left+h.width/2,c.x)),y:Math.min(i===ay.Down?h.bottom-h.height/2:h.bottom,Math.max(i===ay.Down?h.top:h.top+h.height/2,c.y))},p=i===ay.Right&&!s||i===ay.Left&&!l,m=i===ay.Down&&!d||i===ay.Up&&!o;if(p&&g.x!==c.x){const e=r.scrollLeft+t.x,o=i===ay.Right&&e<=u.x||i===ay.Left&&e>=f.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===ay.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&g.y!==c.y){const e=r.scrollTop+t.y,o=i===ay.Down&&e<=u.y||i===ay.Up&&e>=f.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===ay.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,fv(hv(c,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function fy(e){return Boolean(e&&"distance"in e)}function hy(e){return Boolean(e&&"delay"in e)}uy.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=dy,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class gy{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Qb(e);return e instanceof t?e:rv(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=rv(o),this.documentListeners=new ny(this.document),this.listeners=new ny(r),this.windowListeners=new ny(Qb(o)),this.initialCoordinates=null!=(n=pv(i))?n:Tv,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(oy.Resize,this.handleCancel),this.windowListeners.add(oy.DragStart,sy),this.windowListeners.add(oy.VisibilityChange,this.handleCancel),this.windowListeners.add(oy.ContextMenu,sy),this.documentListeners.add(oy.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(hy(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(fy(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(oy.Click,ly,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(oy.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=pv(e))?t:Tv,l=hv(n,s);if(!r&&a){if(fy(a)){if(null!=a.tolerance&&iy(l,a.tolerance))return this.handleCancel();if(iy(l,a.distance))return this.handleStart()}return hy(a)&&iy(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ay.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const py={move:{name:"pointermove"},end:{name:"pointerup"}};class my extends gy{constructor(e){const{event:t}=e,r=rv(t.target);super(e,py,r)}}my.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const by={move:{name:"mousemove"},end:{name:"mouseup"}};var vy;!function(e){e[e.RightClick=2]="RightClick"}(vy||(vy={}));let yy=class extends gy{constructor(e){super(e,by,rv(e.event.target))}};yy.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==vy.RightClick&&(null==n||n({event:r}),!0)}}];const xy={move:{name:"touchmove"},end:{name:"touchend"}};class wy extends gy{constructor(e){super(e,xy)}static setup(){return window.addEventListener(xy.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(xy.move.name,e)};function e(){}}}var $y,Cy;function Sy(e){let{acceleration:r,activator:n=$y.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=Cy.TreeOrder,pointerCoordinates:d,scrollableAncestors:c,scrollableAncestorRects:u,delta:f,threshold:h}=e;const g=function(e){let{delta:t,disabled:r}=e;const n=lv(t);return av((e=>{if(r||!n||!e)return jy;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[qv.Backward]:e.x[qv.Backward]||-1===i.x,[qv.Forward]:e.x[qv.Forward]||1===i.x},y:{[qv.Backward]:e.y[qv.Backward]||-1===i.y,[qv.Forward]:e.y[qv.Forward]||1===i.y}}}),[r,t,n])}({delta:f,disabled:!a}),[p,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,r)=>{e.current=setInterval(t,r)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(n){case $y.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case $y.DraggableRect:return o}}),[n,o,d]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,r=b.current.y*v.current.y;e.scrollBy(t,r)}),[]),$=t.useMemo((()=>l===Cy.TreeOrder?[...c].reverse():c),[l,c]);t.useEffect((()=>{if(a&&c.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=c.indexOf(e),n=u[t];if(!n)continue;const{direction:o,speed:a}=Qv(e,n,y,r,h);for(const e of["x","y"])g[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return m(),x.current=e,p(w,s),b.current=a,void(v.current=o)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[r,w,i,m,a,s,JSON.stringify(y),JSON.stringify(g),p,c,$,u,JSON.stringify(h)])}wy.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}($y||($y={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Cy||(Cy={}));const jy={x:{[qv.Backward]:!1,[qv.Forward]:!1},y:{[qv.Backward]:!1,[qv.Forward]:!1}};var ky,Dy;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(ky||(ky={})),function(e){e.Optimized="optimized"}(Dy||(Dy={}));const Ey=new Map;function Ty(e,t){return av((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Fy(e){let{callback:r,disabled:n}=e;const i=iv(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Oy(e){return new ry(Lv(e),e)}function Iy(e,r,n){void 0===r&&(r=Oy);const[i,o]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:n)?i:null;const o=r(e);if(JSON.stringify(t)===JSON.stringify(o))return t;return o}),null),a=function(e){let{callback:r,disabled:n}=e;const i=iv(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=Fy({callback:o});return nv((()=>{o(),e?(null==s||s.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==a||a.disconnect())}),[e]),i}const My=[];function _y(e,r){void 0===r&&(r=[]);const n=t.useRef(null);return t.useEffect((()=>{n.current=null}),r),t.useEffect((()=>{const t=e!==Tv;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?hv(e,n.current):Tv}function Ay(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const By=[];function Ry(e){let{measure:r}=e;const[n,i]=t.useState(null),o=t.useCallback((e=>{for(const{target:t}of e)if(ev(t)){i((e=>{const n=r(t);return e?{...e,width:n.width,height:n.height}:n}));break}}),[r]),a=Fy({callback:o}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ev(t)?t:e}(e);null==a||a.disconnect(),t&&(null==a||a.observe(t)),i(t?r(t):null)}),[r,a]),[l,d]=sv(s);return t.useMemo((()=>({nodeRef:l,rect:n,setRef:d})),[n,l,d])}const zy=[{sensor:my,options:{}},{sensor:uy,options:{}}],Py={current:{}},Ly={draggable:{measure:Nv},droppable:{measure:Nv,strategy:ky.WhileDragging,frequency:Dy.Optimized},dragOverlay:{measure:Lv}};class Ny extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Hy={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ny,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Dv},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ly,measureDroppableContainers:Dv,windowRect:null,measuringScheduled:!1},Wy={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Dv,draggableNodes:new Map,over:null,measureDroppableContainers:Dv},Yy=t.createContext(Wy),Vy=t.createContext(Hy);function Uy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ny}}}function Ky(e,t){switch(t.type){case kv.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case kv.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case kv.DragEnd:case kv.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case kv.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new Ny(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case kv.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new Ny(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case kv.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new Ny(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function qy(e){let{disabled:r}=e;const{active:n,activatorEvent:i,draggableNodes:o}=t.useContext(Yy),a=lv(i),s=lv(null==n?void 0:n.id);return t.useEffect((()=>{if(!r&&!i&&a&&null!=s){if(!gv(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=vv(e);if(t){t.focus();break}}}))}}),[i,r,o,s,a]),null}const Xy=t.createContext({...Tv,scaleX:1,scaleY:1});var Gy;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Gy||(Gy={}));const Zy=t.memo((function(e){var n,i,o,a;let{id:s,accessibility:l,autoScroll:d=!0,children:c,sensors:u=zy,collisionDetection:f=Av,measuring:h,modifiers:g,...p}=e;const m=t.useReducer(Ky,void 0,Uy),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),r=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),r]}(),[w,$]=t.useState(Gy.Uninitialized),C=w===Gy.Initialized,{draggable:{active:S,nodes:j,translate:k},droppable:{containers:D}}=b,E=S?j.get(S):null,T=t.useRef({initial:null,translated:null}),F=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==E?void 0:E.data)?e:Py,rect:T}:null}),[S,E]),O=t.useRef(null),[I,M]=t.useState(null),[_,A]=t.useState(null),B=ov(p,Object.values(p)),R=cv("DndDescribedBy",s),z=t.useMemo((()=>D.getEnabled()),[D]),P=function(e){return t.useMemo((()=>({draggable:{...Ly.draggable,...null==e?void 0:e.draggable},droppable:{...Ly.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Ly.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:N,measuringScheduled:H}=function(e,r){let{dragging:n,dependencies:i,config:o}=r;const[a,s]=t.useState(null),{frequency:l,measure:d,strategy:c}=o,u=t.useRef(e),f=function(){switch(c){case ky.Always:return!1;case ky.BeforeDragging:return n;default:return!n}}(),h=ov(f),g=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),p=t.useRef(null),m=av((t=>{if(f&&!n)return Ey;if(!t||t===Ey||u.current!==e||null!=a){const t=new Map;for(let r of e){if(!r)continue;if(a&&a.length>0&&!a.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new ry(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,a,n,f,d]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||g()}),[n,f]),t.useEffect((()=>{a&&a.length>0&&s(null)}),[JSON.stringify(a)]),t.useEffect((()=>{f||"number"!=typeof l||null!==p.current||(p.current=setTimeout((()=>{g(),p.current=null}),l))}),[l,f,g,...i]),{droppableRects:m,measureDroppableContainers:g,measuringScheduled:null!=a}}(z,{dragging:C,dependencies:[k.x,k.y],config:P.droppable}),W=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return av((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(j,S),Y=t.useMemo((()=>_?pv(_):null),[_]),V=function(){const e=!1===(null==I?void 0:I.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,r=C&&!e&&!t;if("object"==typeof d)return{...d,enabled:r};return{enabled:r}}(),K=function(e,t){return Ty(e,t)}(W,P.draggable.measure);!function(e){let{activeNode:r,measure:n,initialRect:i,config:o=!0}=e;const a=t.useRef(!1),{x:s,y:l}="boolean"==typeof o?{x:o,y:o}:o;nv((()=>{if(!s&&!l||!r)return void(a.current=!1);if(a.current||!i)return;const e=null==r?void 0:r.node.current;if(!e||!1===e.isConnected)return;const t=Bv(n(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const r=Wv(e);r&&r.scrollBy({top:t.y,left:t.x})}}),[r,s,l,i,n])}({activeNode:S?j.get(S):null,config:V.layoutShiftCompensation,initialRect:K,measure:P.draggable.measure});const q=Iy(W,P.draggable.measure,K),X=Iy(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:j,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=D.getNodeFor(null==(n=G.current.over)?void 0:n.id),Q=Ry({measure:P.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=C?null!=(o=Q.rect)?o:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),re=Bv(ne=te?null:q,Ty(ne));var ne;const ie=Ay(J?Qb(J):null),oe=function(e){const r=t.useRef(e),n=av((t=>e?t&&t!==My&&e&&r.current&&e.parentNode===r.current.parentNode?t:Hv(e):My),[e]);return t.useEffect((()=>{r.current=e}),[e]),n}(C?null!=Z?Z:W:null),ae=function(e,r){void 0===r&&(r=Lv);const[n]=e,i=Ay(n?Qb(n):null),[o,a]=t.useReducer((function(){return e.length?e.map((e=>Xv(e)?i:new ry(r(e),e))):By}),By),s=Fy({callback:a});return e.length>0&&o===By&&a(),nv((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),a())}),[e]),o}(oe),se=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(g,{transform:{x:k.x-re.x,y:k.y-re.y,scaleX:1,scaleY:1},activatorEvent:_,active:F,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=Y?fv(Y,k):null,de=function(e){const[r,n]=t.useState(null),i=t.useRef(e),o=t.useCallback((e=>{const t=Yv(e.target);t&&n((e=>e?(e.set(t,Kv(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){r(t);const a=e.map((e=>{const t=Yv(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Kv(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),i.current=e}return()=>{r(e),r(t)};function r(e){e.forEach((e=>{const t=Yv(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),t.useMemo((()=>e.length?r?Array.from(r.values()).reduce(((e,t)=>fv(e,t)),Tv):ey(e):Tv),[e,r])}(oe),ce=_y(de),ue=_y(de,[q]),fe=fv(se,ce),he=ee?zv(ee,se):null,ge=F&&he?f({active:F,collisionRect:he,droppableRects:L,droppableContainers:z,pointerCoordinates:le}):null,pe=Mv(ge,"id"),[me,be]=t.useState(null),ve=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(te?se:fv(se,ue),null!=(a=null==me?void 0:me.rect)?a:null,q),ye=t.useCallback(((e,t)=>{let{sensor:n,options:i}=t;if(null==O.current)return;const o=j.get(O.current);if(!o)return;const a=e.nativeEvent,s=new n({active:O.current,activeNode:o,event:a,options:i,context:G,onStart(e){const t=O.current;if(null==t)return;const n=j.get(t);if(!n)return;const{onDragStart:i}=B.current,o={active:{id:t,data:n.data,rect:T}};r.unstable_batchedUpdates((()=>{null==i||i(o),$(Gy.Initializing),v({type:kv.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:o})}))},onMove(e){v({type:kv.DragMove,coordinates:e})},onEnd:l(kv.DragEnd),onCancel:l(kv.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:i,scrollAdjustedTranslate:o}=G.current;let s=null;if(t&&o){const{cancelDrop:r}=B.current;if(s={activatorEvent:a,active:t,collisions:n,delta:o,over:i},e===kv.DragEnd&&"function"==typeof r){await Promise.resolve(r(s))&&(e=kv.DragCancel)}}O.current=null,r.unstable_batchedUpdates((()=>{v({type:e}),$(Gy.Uninitialized),be(null),M(null),A(null);const t=e===kv.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=B.current[t];null==e||e(s),y({type:t,event:s})}}))}}r.unstable_batchedUpdates((()=>{M(s),A(e.nativeEvent)}))}),[j]),xe=t.useCallback(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=j.get(n);if(null!==O.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},O.current=n,ye(r,t))}),[j,ye]),we=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:n}=t;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:r(e.handler,t)})))]}),[])),[e,r])}(u,xe);!function(e){t.useEffect((()=>{if(!Xb)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),nv((()=>{q&&w===Gy.Initializing&&$(Gy.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=B.current,{active:t,activatorEvent:n,collisions:i,over:o}=G.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:i,delta:{x:fe.x,y:fe.y},over:o};r.unstable_batchedUpdates((()=>{null==e||e(a),y({type:"onDragMove",event:a})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:i,scrollAdjustedTranslate:o}=G.current;if(!e||null==O.current||!t||!o)return;const{onDragOver:a}=B.current,s=i.get(pe),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,d={active:e,activatorEvent:t,collisions:n,delta:{x:o.x,y:o.y},over:l};r.unstable_batchedUpdates((()=>{be(l),null==a||a(d),y({type:"onDragOver",event:d})}))}),[pe]),nv((()=>{G.current={activatorEvent:_,active:F,activeNode:W,collisionRect:he,collisions:ge,droppableRects:L,draggableNodes:j,draggingNode:J,draggingNodeRect:ee,droppableContainers:D,over:me,scrollableAncestors:oe,scrollAdjustedTranslate:fe},T.current={initial:ee,translated:he}}),[F,W,ge,he,j,J,ee,L,D,me,oe,fe]),Sy({...V,delta:k,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const $e=t.useMemo((()=>({active:F,activeNode:W,activeNodeRect:q,activatorEvent:_,collisions:ge,containerNodeRect:X,dragOverlay:Q,draggableNodes:j,droppableContainers:D,droppableRects:L,over:me,measureDroppableContainers:N,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:P,measuringScheduled:H,windowRect:ie})),[F,W,q,_,ge,X,Q,j,D,L,me,N,oe,ae,P,H,ie]),Ce=t.useMemo((()=>({activatorEvent:_,activators:we,active:F,activeNodeRect:q,ariaDescribedById:{draggable:R},dispatch:v,draggableNodes:j,over:me,measureDroppableContainers:N})),[_,we,F,q,v,R,j,me,N]);return U.default.createElement($v.Provider,{value:x},U.default.createElement(Yy.Provider,{value:Ce},U.default.createElement(Vy.Provider,{value:$e},U.default.createElement(Xy.Provider,{value:ve},c)),U.default.createElement(qy,{disabled:!1===(null==l?void 0:l.restoreFocus)})),U.default.createElement(jv,{...l,hiddenTextDescribedById:R}))})),Qy=t.createContext(null),Jy="button";function ex(e){let{id:r,data:n,disabled:i=!1,attributes:o}=e;const a=cv("Droppable"),{activators:s,activatorEvent:l,active:d,activeNodeRect:c,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(Yy),{role:g=Jy,roleDescription:p="draggable",tabIndex:m=0}=null!=o?o:{},b=(null==d?void 0:d.id)===r,v=t.useContext(b?Xy:Qy),[y,x]=sv(),[w,$]=sv(),C=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:n,handler:i}=t;return e[n]=e=>{i(e,r)},e}),{})),[e,r])}(s,r),S=ov(n);nv((()=>(f.set(r,{id:r,key:a,node:y,activatorNode:w,data:S}),()=>{const e=f.get(r);e&&e.key===a&&f.delete(r)})),[f,r]);return{active:d,activatorEvent:l,activeNodeRect:c,attributes:t.useMemo((()=>({role:g,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||g!==Jy)||void 0,"aria-roledescription":p,"aria-describedby":u.draggable})),[i,g,m,b,p,u.draggable]),isDragging:b,listeners:i?void 0:C,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const tx={timeout:25};function rx(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function nx(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function ix(e){return null!==e&&e>=0}const ox=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=rx(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},ax={scaleX:1,scaleY:1},sx=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...ax}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...ax}:i<r&&i>=a?{x:0,y:s.height+l,...ax}:{x:0,y:0,...ax}};const lx="Sortable",dx=U.default.createContext({activeIndex:-1,containerId:lx,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ox,disabled:{draggable:!1,droppable:!1}});function cx(e){let{children:r,id:n,items:i,strategy:o=ox,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:d,over:c,measureDroppableContainers:u}=t.useContext(Vy),f=cv(lx,n),h=Boolean(null!==l.rect),g=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),p=null!=s,m=s?g.indexOf(s.id):-1,b=c?g.indexOf(c.id):-1,v=t.useRef(g),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(g,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(a);nv((()=>{y&&p&&u(g)}),[y,g,p,u]),t.useEffect((()=>{v.current=g}),[g]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:g,overIndex:b,useDragOverlay:h,sortedRects:nx(g,d),strategy:o})),[m,f,w.draggable,w.droppable,x,g,b,d,h,o]);return U.default.createElement(dx.Provider,{value:$},r)}const ux=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return rx(r,n,i).indexOf(t)},fx=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:d}=e;return!(!d||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},hx={duration:200,easing:"ease"},gx="transform",px=mv.Transition.toString({property:gx,duration:0,easing:"linear"}),mx={roleDescription:"sortable"};function bx(e){let{animateLayoutChanges:r=fx,attributes:n,disabled:i,data:o,getNewIndex:a=ux,id:s,strategy:l,resizeObserverConfig:d,transition:c=hx}=e;const{items:u,containerId:f,activeIndex:h,disabled:g,disableTransforms:p,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(dx),x=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,g),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...o})),[f,o,w,u]),C=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:j,isOver:k,setNodeRef:D}=function(e){let{data:r,disabled:n=!1,id:i,resizeObserverConfig:o}=e;const a=cv("Droppable"),{active:s,dispatch:l,over:d,measureDroppableContainers:c}=t.useContext(Yy),u=t.useRef({disabled:n}),f=t.useRef(!1),h=t.useRef(null),g=t.useRef(null),{disabled:p,updateMeasurementsFor:m,timeout:b}={...tx,...o},v=ov(null!=m?m:i),y=Fy({callback:t.useCallback((()=>{f.current?(null!=g.current&&clearTimeout(g.current),g.current=setTimeout((()=>{c(Array.isArray(v.current)?v.current:[v.current]),g.current=null}),b)):f.current=!0}),[b]),disabled:p||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=sv(x),C=ov(r);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),nv((()=>(l({type:kv.RegisterDroppable,element:{id:i,key:a,disabled:n,node:w,rect:h,data:C}}),()=>l({type:kv.UnregisterDroppable,key:a,id:i}))),[i]),t.useEffect((()=>{n!==u.current.disabled&&(l({type:kv.SetDroppableDisabled,id:i,key:a,disabled:n}),u.current.disabled=n)}),[i,a,n,l]),{active:s,rect:h,isOver:(null==d?void 0:d.id)===i,node:w,over:d,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...d}}),{active:E,activatorEvent:T,activeNodeRect:F,attributes:O,setNodeRef:I,listeners:M,isDragging:_,over:A,setActivatorNodeRef:B,transform:R}=ex({id:s,data:$,attributes:{...mx,...n},disabled:x.draggable}),z=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>e=>{r.forEach((t=>t(e)))}),r)}(D,I),P=Boolean(E),L=P&&!p&&ix(h)&&ix(b),N=!v&&_,H=N&&L?R:null,W=L?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:F,activeIndex:h,overIndex:b,index:w}):null,Y=ix(h)&&ix(b)?a({id:s,items:u,activeIndex:h,overIndex:b}):w,V=null==E?void 0:E.id,U=t.useRef({activeId:V,items:u,newIndex:Y,containerId:f}),K=u!==U.current.items,q=r({active:E,containerId:f,isDragging:_,isSorting:P,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:c,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:r,index:n,node:i,rect:o}=e;const[a,s]=t.useState(null),l=t.useRef(n);return nv((()=>{if(!r&&n!==l.current&&i.current){const e=o.current;if(e){const t=Lv(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==l.current&&(l.current=n)}),[r,n,i,o]),t.useEffect((()=>{a&&s(null)}),[a]),a}({disabled:!q,index:w,node:j,rect:S});return t.useEffect((()=>{P&&U.current.newIndex!==Y&&(U.current.newIndex=Y),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[P,Y,f,u]),t.useEffect((()=>{if(V===U.current.activeId)return;if(V&&!U.current.activeId)return void(U.current.activeId=V);const e=setTimeout((()=>{U.current.activeId=V}),50);return()=>clearTimeout(e)}),[V]),{active:E,activeIndex:h,attributes:O,data:$,rect:S,index:w,newIndex:Y,items:u,isOver:k,isSorting:P,isDragging:_,listeners:M,node:j,overIndex:b,over:A,setNodeRef:z,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:I,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return px;if(N&&!gv(T)||!c)return;if(P||q)return mv.Transition.toString({...c,property:gx});return}()}}function vx(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const yx=[ay.Down,ay.Right,ay.Up,ay.Left],xx=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(yx.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case ay.Down:n.top<o.top&&t.push(r);break;case ay.Up:n.top>o.top&&t.push(r);break;case ay.Left:n.left>o.left&&t.push(r);break;case ay.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=Iv(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Iv(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(Fv)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let d=Mv(l,"id");if(d===(null==a?void 0:a.id)&&l.length>1&&(d=l[1].id),null!=d){const e=o.get(r.id),t=o.get(d),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Hv(l).some(((e,t)=>s[t]!==e)),i=wx(e,t),o=function(e,t){if(!vx(e)||!vx(t))return!1;if(!wx(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),d=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},c={x:a.left,y:a.top};return d.x&&d.y?c:hv(c,d)}}}};function wx(e,t){return!(!vx(e)||!vx(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class $x extends yy{}$x.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Cx(e.target)}];function Cx(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends uy{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Cx(e.target)}];const Sx=q.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,jx=q.default(ef)`
    color: ${hl.text};
    ${Id({textSize:"body-md"})}

    ${xl.MaxWidth.sm} {
        display: none;
    }
`,kx=q.default(lp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Dx=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${hl.text};
    ${Id({textSize:"body-md"})}
`,Ex=t=>{var{children:r,visible:i,onMobileClose:o}=t,a=ki(t,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",l=n.useTheme(),d=yl["sm-max"]({theme:l}),c=tc.useMediaQuery({maxWidth:d}),u=()=>{o&&o()},f=()=>"string"==typeof r?e.jsx(exports.Typography.BodyMD,{children:r}):r;return e.jsxs(e.Fragment,{children:[i&&e.jsx(Sx,Object.assign({"data-testid":s},a,{children:e.jsx(jx,{children:f()})})),c&&e.jsx(op,{show:null!=i&&i,onOverlayClick:u,children:e.jsx(kx,{onClose:u,children:e.jsx(Dx,{children:f()})})})]})},Tx=q.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Fx=r=>{var i,o,{children:a,popoverContent:s,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:f,delay:h,onPopoverAppear:g,onPopoverDismiss:m}=r,b=ki(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,y]=t.useState(!1),x=t.useRef(null),w=t.useRef(null),$=n.useTheme(),C=yl["sm-max"]({theme:$}),S=tc.useMediaQuery({maxWidth:C}),{refs:j,floatingStyles:k,context:D}=p.useFloating({open:v,placement:d,whileElementsMounted:p.autoUpdate,middleware:[p.offset(null!=f?f:16),p.flip(),p.shift({limiter:p.limitShift()})],onOpenChange:e=>{y(e),v!==e&&B(e)}}),E=tg(),T=S?"click":l,F=p.useClick(D,{ignoreMouse:"hover"===T}),O=p.useDismiss(D),I=p.useHover(D,{enabled:"hover"===T,delay:{open:null!==(i=null==h?void 0:h.open)&&void 0!==i?i:0,close:null!==(o=null==h?void 0:h.close)&&void 0!==o?o:500}}),{getReferenceProps:M,getFloatingProps:_}=p.useInteractions([F,O,I]),A=()=>{y(!1),B(!1)},B=e=>{e&&g&&g(),!e&&m&&m()};return e.jsxs(e.Fragment,{children:[e.jsx(Tx,Object.assign({ref:e=>{x.current=e,j.setReference(e)}},M({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:a})),v&&e.jsx(p.FloatingPortal,{root:u,children:e.jsx(p.FloatingFocusManager,{context:D,children:e.jsx("div",Object.assign({ref:e=>{w.current=e,j.setFloating(e)},style:Object.assign(Object.assign({},k),{outline:"none",zIndex:null!=c?c:E})},_(),{children:"function"==typeof s?s():e.jsx(Ex,{visible:!0,onMobileClose:A,children:s})}))})})]})},Ox=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ix=q.default.span`
    color: ${hl["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ox(e)}

    &:hover,
    &:focus-visible {
        color: ${hl["text-hover"]};
        ${({$hoverStyle:e})=>Ox(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Mx=q.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,_x=t=>{var{ariaLabel:r,content:n,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=t,s=ki(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!n;return e.jsx(Fx,Object.assign({},s,{children:e.jsxs(Ix,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a,"aria-label":null!=r?r:l?void 0:"More info",children:[n,i&&e.jsx(Mx,{$standalone:!l,children:i})]})}))},Ax=q.default.div`
    padding-left: ${bl["spacing-4"]};
    display: inline;
`,Bx=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e.jsx(Ax,{children:e.jsx(_x,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e.jsx(d.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Rx=q.default.label`
    color: ${hl["text-subtle"]};
    margin-bottom: ${bl["spacing-8"]};
    display: inline-block;

    ${gl["form-label"]}
    ${Id()}
    font-weight: ${gl.Spec["weight-semibold"]};
`,zx=q.default.p`
    ${gl["body-sm-semibold"]}
    color: ${hl["text-error"]};
    margin-top: ${bl["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Px=q.default.span`
    ${gl["form-description"]}
    color: ${hl["text-subtler"]};
    display: block;
`,Lx=t=>{var{children:r,addon:n,subtitle:i,"data-testid":o}=t,a=ki(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Rx,Object.assign({},a,{children:[r,n&&n.type&&("popover"===(null==n?void 0:n.type)?e.jsx(Bx,{addon:n}):null),"string"==typeof i?e.jsx(Px,Object.assign({"data-testid":o?`${o}-subtitle`:"subtitle"},a,{children:i})):i]}))},Nx=t=>e.jsx(zx,Object.assign({},t)),Hx=n.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${bl["spacing-32"]};
    }
`,Wx=q.default.div`
    ${Hx}
`,Yx=q.default(_g)`
    ${Hx}
`,Vx=q.default(Lg)`
    ${Hx}
`,Ux=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||d||c)?"v2-grid":!s&&(u||f||h||g||p||m||b)?"grid":s||"flex",x=i?`${i}-label`:void 0,w=()=>v||(i?`${i}-error-message`:"error-message"),$=()=>!!n;const C=(e=>{switch(e){case"v2-grid":return Vx;case"grid":return Yx;case"flex":return Wx}})(y);return e.jsxs(C,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:c};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&("string"==typeof r?e.jsx(Lx,{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",id:x,disabled:o,children:r}):e.jsx(Lx,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",id:x,disabled:o},r))),(()=>{const e={"aria-invalid":$(),"aria-describedby":$()?w():void 0};return t.Children.map(a,(r=>t.cloneElement(r,e)))})(),n&&e.jsx(zx,{id:w(),tabIndex:0,"data-testid":w(),children:n})]}))};function Kx(e,t){return Kx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Kx(e,t)}function qx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Xx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Gx(e){return null!==e&&1===e.length?e[0]:e.slice()}function Zx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Qx(e,t){return Jx(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Jx(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let ew=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Zx(r.getMouseEventMap())}))}qx(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Qx(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Zx(r.getKeyDownEventMap()),qx(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Zx(r.getMouseEventMap()),qx(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Zx(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:Gx(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:Gx(r.state.value)};return r.props.renderTrack(i,o)};let n=Xx(t.value);n.length||(n=Xx(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Qx(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=U.default.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Kx(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Xx(e.value);return r.length?t.pending?null:{value:r.map((t=>Qx(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Gx(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Qx(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,d=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:d,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=Qx(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Qx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Qx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=Jx(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=Jx(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Gx(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return U.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,o)},t}(U.default.Component);ew.displayName="ReactSlider",ew.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>U.default.createElement("div",e),renderTrack:e=>U.default.createElement("div",e),renderMark:e=>U.default.createElement("span",e)};var tw=ew;const rw=q.default.div`
    isolation: isolate;
`,nw=q.default.div`
    margin-top: ${bl["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${bl["spacing-8"]};
`,iw=q.default.div`
    margin-bottom: ${bl["spacing-8"]};
`,ow=q.default(exports.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,aw=q.default(tw)`
    height: 0.875rem;
`,sw=q.default.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?n.css`
                cursor: not-allowed;
            `:e.$readOnly?void 0:n.css`
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

        background-color: ${hl.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${ml["width-010"]} ${ml.solid}
            ${e=>e.$disabled?hl["border-selected-disabled"]:hl["border-strong"]};
        border-radius: ${vl.full};
    }
`,lw=q.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${sw}:after {
        outline-offset: -1px;
        outline: ${ml["width-040"]} ${ml.solid}
            ${hl["border-selected"]};
    }
`,dw=q.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${vl.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||hl["border-strong"](e)};
`,cw=r=>{var{value:n,min:i=0,max:o=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:d,disabled:c,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:g,sliderLabelSuffix:p,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=r,$=ki(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,S]=t.useState(k()),j=function(){const e=function(){const e=c||u?hl["border-disabled"]:hl["border-strong"],t=c||u?hl["border-selected-disabled"]:hl["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();t.useEffect((()=>{n!==C&&S(k())}),[n]);function k(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(i+a*t);return e}const D=t=>y?y(t):e.jsxs(ow,{children:[g,t,p]});return e.jsxs(rw,Object.assign({},$,{children:[m&&e.jsx(iw,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e.jsxs(ow,{children:[b,t,v]})})()}),e.jsx(aw,{step:a,min:i,max:o,value:C,disabled:c||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&C[t]===e[t])return;const r=[...e];S(r),null==x||x(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else{const t=[...e];S(t),null==w||w(t)}},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e.jsx(lw,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:c?void 0:t.tabIndex,children:e.jsx(sw,{$disabled:c,$readOnly:u})})),renderTrack:(t,r)=>e.jsx(dw,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:j[r.index]}))}),h&&e.jsxs(nw,{children:[e.jsx("div",{children:D(i)}),e.jsx("div",{children:D(o)})]})]}))},uw=q.default.div`
    display: flex;
    margin-bottom: ${bl["spacing-16"]};
    align-items: baseline;
`,fw=q.default.div`
    margin: 0 0.5rem;
`,hw=q.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,gw=q.default.div`
    flex: 1;
    border-radius: ${vl.sm} ${vl.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=hl["bg-strongest"];return e.$disabled&&e.$selected?t=hl["bg-selected-stronger-disabled"]:e.$disabled?t=hl["bg-disabled"]:e.$selected&&(t=hl["bg-selected-stronger"]),n.css`
            background-color: ${t};
        `}}
`,pw=q.default(cw)`
    margin-top: -0.3125rem;
`,mw=r=>{var{bins:n=[],interval:i,disabled:o,readOnly:a,value:s,showRangeLabels:l,rangeLabelPrefix:d,rangeLabelSuffix:c,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:g,renderRangeLabel:p}=r,m=ki(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=n.map((e=>e.count)),v=Math.max(...b),y=n.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,C]=t.useState(D()),S=t.useMemo((()=>{const e=[...n].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===w+i*n));t?r.push(t):r.push({count:0,minValue:w+i*n})}return r}),[n,i]);t.useEffect((()=>{s!==$&&C(D())}),[s]);const j=e=>{const[t,r]=e,n=[t,r];C(n),null==f||f(n)},k=e=>{const[t,r]=e,n=[t,r];C(n),null==h||h(n)};function D(){return null!=s?s:[w,w+i]}const E=t=>p?p(t):e.jsxs(exports.Typography.BodyBL,{children:[d,t,c]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(uw,{children:[E($[0]),e.jsx(fw,{children:"-"}),E($[1])]}),S.every((e=>0===e.count))&&g?g():e.jsxs(e.Fragment,{children:[e.jsx(hw,{children:S.map(((t,r)=>{const n=t.count/v;return e.jsx(gw,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:o||a},r)}))}),e.jsx(pw,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:o,readOnly:a,ariaLabels:u,onChange:j,onChangeEnd:k})]})]}))},bw=q.default(wh)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&n.css`
            padding-left: ${bl["spacing-16"]};
            padding-right: ${e.$showClear?0:bl["spacing-16"]};
        `}
`,vw=q.default($h)`
    height: auto;
    padding: ${bl["spacing-12"]} ${bl["spacing-16"]};

    cursor: pointer;
    color: ${hl.icon};

    ${e=>"no-border"===e.$styleType&&n.css`
            margin-right: -${bl["spacing-12"]};
        `}
`,yw=q.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,xw=q.default.div`
    display: flex;
    width: 100%;
`,ww=q.default(yh)`
    display: flex;
    align-items: center;
    width: 100%;
`,$w=U.default.forwardRef(((r,n)=>{var{value:i,spacing:o,type:a,error:s,disabled:l,readOnly:d,onChange:c,onClear:u,allowClear:f=!1,className:h,styleType:g="bordered"}=r,p=ki(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=((e,t)=>"tel"===e&&!!t)(a,o),b=t.useRef(null);t.useImperativeHandle(n,(()=>b.current),[]);const v=Hc({ref:b,formatter:e=>m?Rc.transformWithSpaces(e,o):e}),y=e=>{c&&(m?w(e):c(e))},x=()=>{u&&u(),b&&b.current&&b.current.focus()},w=e=>{const t=v();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==c||c(e),n()},$=i?(e=>e?m?Rc.transformWithSpaces(e,o):e:"")(i):i,C=f&&!l&&!d&&!!i,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(bw,Object.assign({"data-testid":"input",ref:b,disabled:l,value:$,onChange:y,type:a,readOnly:d,$showClear:C,$styleType:g},p)),C&&e.jsx(vw,{onClick:x,type:"button",$styleType:g,children:e.jsx(yw,{"aria-hidden":!0})})]});return e.jsx(e.Fragment,{children:"no-border"===g?e.jsx(xw,{className:h,children:S()}):e.jsx(ww,{$disabled:l,$error:s,$readOnly:d,className:h,children:S()})})})),Cw=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx($w,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var Sw=ga;var jw=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var kw=function(e){return this.__data__.get(e)};var Dw=function(e){return this.__data__.has(e)},Ew=ga,Tw=pa,Fw=Aa;var Ow=function(e,t){var r=this.__data__;if(r instanceof Ew){var n=r.__data__;if(!Tw||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Fw(n)}return r.set(e,t),this.size=r.size,this},Iw=ga,Mw=function(){this.__data__=new Sw,this.size=0},_w=jw,Aw=kw,Bw=Dw,Rw=Ow;function zw(e){var t=this.__data__=new Iw(e);this.size=t.size}zw.prototype.clear=Mw,zw.prototype.delete=_w,zw.prototype.get=Aw,zw.prototype.has=Bw,zw.prototype.set=Rw;var Pw=zw;var Lw=Aa,Nw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Hw=function(e){return this.__data__.has(e)};function Ww(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Lw;++t<r;)this.add(e[t])}Ww.prototype.add=Ww.prototype.push=Nw,Ww.prototype.has=Hw;var Yw=function(e,t){return e.has(t)},Vw=Ww,Uw=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Kw=Yw;var qw=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(t);if(d&&c)return d==t&&c==e;var u=-1,f=!0,h=2&r?new Vw:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var g=e[u],p=t[u];if(n)var m=a?n(p,g,u,t,e,o):n(g,p,u,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Uw(t,(function(e,t){if(!Kw(h,t)&&(g===e||i(g,e,r,n,o)))return h.push(t)}))){f=!1;break}}else if(g!==p&&!i(g,p,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var Xw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Gw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Zw=Ri.Uint8Array,Qw=Go,Jw=qw,e$=Xw,t$=Gw,r$=zi?zi.prototype:void 0,n$=r$?r$.valueOf:void 0;var i$=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Zw(e),new Zw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Qw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=e$;case"[object Set]":var l=1&n;if(s||(s=t$),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=Jw(s(e),s(t),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(n$)return n$.call(e)==n$.call(t)}return!1};var o$=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},a$=Mi;var s$=function(e,t,r){var n=t(e);return a$(e)?n:o$(n,r(e))};var l$=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},d$=function(){return[]},c$=Object.prototype.propertyIsEnumerable,u$=Object.getOwnPropertySymbols,f$=u$?function(e){return null==e?[]:(e=Object(e),l$(u$(e),(function(t){return c$.call(e,t)})))}:d$;var h$=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},g$=Xi,p$=Gi;var m$=function(e){return p$(e)&&"[object Arguments]"==g$(e)},b$=Gi,v$=Object.prototype,y$=v$.hasOwnProperty,x$=v$.propertyIsEnumerable,w$=m$(function(){return arguments}())?m$:function(e){return b$(e)&&y$.call(e,"callee")&&!x$.call(e,"callee")},$$={exports:{}};var C$=function(){return!1};!function(e,t){var r=Ri,n=C$,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}($$,$$.exports);var S$=$$.exports,j$=/^(?:0|[1-9]\d*)$/;var k$=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&j$.test(e))&&e>-1&&e%1==0&&e<t};var D$=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},E$=Xi,T$=D$,F$=Gi,O$={};O$["[object Float32Array]"]=O$["[object Float64Array]"]=O$["[object Int8Array]"]=O$["[object Int16Array]"]=O$["[object Int32Array]"]=O$["[object Uint8Array]"]=O$["[object Uint8ClampedArray]"]=O$["[object Uint16Array]"]=O$["[object Uint32Array]"]=!0,O$["[object Arguments]"]=O$["[object Array]"]=O$["[object ArrayBuffer]"]=O$["[object Boolean]"]=O$["[object DataView]"]=O$["[object Date]"]=O$["[object Error]"]=O$["[object Function]"]=O$["[object Map]"]=O$["[object Number]"]=O$["[object Object]"]=O$["[object RegExp]"]=O$["[object Set]"]=O$["[object String]"]=O$["[object WeakMap]"]=!1;var I$=function(e){return F$(e)&&T$(e.length)&&!!O$[E$(e)]};var M$=function(e){return function(t){return e(t)}},_$={exports:{}};!function(e,t){var r=_i,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(_$,_$.exports);var A$=_$.exports,B$=I$,R$=M$,z$=A$&&A$.isTypedArray,P$=z$?R$(z$):B$,L$=h$,N$=w$,H$=Mi,W$=S$,Y$=k$,V$=P$,U$=Object.prototype.hasOwnProperty;var K$=function(e,t){var r=H$(e),n=!r&&N$(e),i=!r&&!n&&W$(e),o=!r&&!n&&!i&&V$(e),a=r||n||i||o,s=a?L$(e.length,String):[],l=s.length;for(var d in e)!t&&!U$.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Y$(d,l))||s.push(d);return s},q$=Object.prototype;var X$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||q$)};var G$=function(e,t){return function(r){return e(t(r))}},Z$=G$(Object.keys,Object),Q$=X$,J$=Z$,eC=Object.prototype.hasOwnProperty;var tC=function(e){if(!Q$(e))return J$(e);var t=[];for(var r in Object(e))eC.call(e,r)&&"constructor"!=r&&t.push(r);return t},rC=co,nC=D$;var iC=function(e){return null!=e&&nC(e.length)&&!rC(e)},oC=K$,aC=tC,sC=iC;var lC=function(e){return sC(e)?oC(e):aC(e)},dC=s$,cC=f$,uC=lC;var fC=function(e){return dC(e,uC,cC)},hC=Object.prototype.hasOwnProperty;var gC=function(e,t,r,n,i,o){var a=1&r,s=fC(e),l=s.length;if(l!=fC(t).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in t:hC.call(t,c)))return!1}var u=o.get(e),f=o.get(t);if(u&&f)return u==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var g=a;++d<l;){var p=e[c=s[d]],m=t[c];if(n)var b=a?n(m,p,c,t,e,o):n(p,m,c,e,t,o);if(!(void 0===b?p===m||i(p,m,r,n,o):b)){h=!1;break}g||(g="constructor"==c)}if(h&&!g){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return o.delete(e),o.delete(t),h},pC=To(Ri,"DataView"),mC=pa,bC=To(Ri,"Promise"),vC=To(Ri,"Set"),yC=To(Ri,"WeakMap"),xC=Xi,wC=po,$C="[object Map]",CC="[object Promise]",SC="[object Set]",jC="[object WeakMap]",kC="[object DataView]",DC=wC(pC),EC=wC(mC),TC=wC(bC),FC=wC(vC),OC=wC(yC),IC=xC;(pC&&IC(new pC(new ArrayBuffer(1)))!=kC||mC&&IC(new mC)!=$C||bC&&IC(bC.resolve())!=CC||vC&&IC(new vC)!=SC||yC&&IC(new yC)!=jC)&&(IC=function(e){var t=xC(e),r="[object Object]"==t?e.constructor:void 0,n=r?wC(r):"";if(n)switch(n){case DC:return kC;case EC:return $C;case TC:return CC;case FC:return SC;case OC:return jC}return t});var MC=IC,_C=Pw,AC=qw,BC=i$,RC=gC,zC=MC,PC=Mi,LC=S$,NC=P$,HC="[object Arguments]",WC="[object Array]",YC="[object Object]",VC=Object.prototype.hasOwnProperty;var UC=function(e,t,r,n,i,o){var a=PC(e),s=PC(t),l=a?WC:zC(e),d=s?WC:zC(t),c=(l=l==HC?YC:l)==YC,u=(d=d==HC?YC:d)==YC,f=l==d;if(f&&LC(e)){if(!LC(t))return!1;a=!0,c=!1}if(f&&!c)return o||(o=new _C),a||NC(e)?AC(e,t,r,n,i,o):BC(e,t,l,r,n,i,o);if(!(1&r)){var h=c&&VC.call(e,"__wrapped__"),g=u&&VC.call(t,"__wrapped__");if(h||g){var p=h?e.value():e,m=g?t.value():t;return o||(o=new _C),i(p,m,r,n,o)}}return!!f&&(o||(o=new _C),RC(e,t,r,n,i,o))},KC=Gi;var qC=function e(t,r,n,i,o){return t===r||(null==t||null==r||!KC(t)&&!KC(r)?t!=t&&r!=r:UC(t,r,n,i,e,o))},XC=Pw,GC=qC;var ZC=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new XC;if(n)var f=n(d,c,l,e,t,u);if(!(void 0===f?GC(c,d,3,n,u):f))return!1}}return!0},QC=oo;var JC=function(e){return e==e&&!QC(e)},eS=JC,tS=lC;var rS=function(e){for(var t=tS(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,eS(i)]}return t};var nS=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},iS=ZC,oS=rS,aS=nS;var sS=function(e,t){return null!=e&&t in Object(e)},lS=ts,dS=w$,cS=Mi,uS=k$,fS=D$,hS=ns;var gS=function(e,t,r){for(var n=-1,i=(t=lS(t,e)).length,o=!1;++n<i;){var a=hS(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&fS(i)&&uS(a,i)&&(cS(e)||dS(e))},pS=sS,mS=gS;var bS=qC,vS=ls,yS=function(e,t){return null!=e&&mS(e,t,pS)},xS=io,wS=JC,$S=nS,CS=ns;var SS=function(e){return function(t){return null==t?void 0:t[e]}},jS=as;var kS=SS,DS=function(e){return function(t){return jS(t,e)}},ES=io,TS=ns;var FS=function(e){var t=oS(e);return 1==t.length&&t[0][2]?aS(t[0][0],t[0][1]):function(r){return r===e||iS(r,e,t)}},OS=function(e,t){return xS(e)&&wS(t)?$S(CS(e),t):function(r){var n=vS(r,e);return void 0===n&&n===t?yS(r,e):bS(t,n,3)}},IS=function(e){return e},MS=Mi,_S=function(e){return ES(e)?kS(TS(e)):DS(e)};var AS=function(e){return"function"==typeof e?e:null==e?IS:"object"==typeof e?MS(e)?OS(e[0],e[1]):FS(e):_S(e)},BS=AS,RS=iC,zS=lC;var PS=function(e){return function(t,r,n){var i=Object(t);if(!RS(t)){var o=BS(r);t=zS(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var LS=$f,NS=1/0;var HS=function(e){return e?(e=LS(e))===NS||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var WS=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},YS=AS,VS=function(e){var t=HS(e),r=t%1;return t==t?r?t-r:t:0},US=Math.max;var KS=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:VS(r);return i<0&&(i=US(n+i,0)),WS(e,YS(t),i)},qS=Ii(KS),XS=Ii(PS(KS)),GS=qC;var ZS=Ii((function(e,t){return GS(e,t)}));const QS=q.default(Ci.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,JS=q.default.ul`
    border-bottom-left-radius: ${vl.sm};
    border-bottom-right-radius: ${vl.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${bl["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${hl["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${vl.full};
        background-clip: padding-box;
    }

    ${xl.MaxWidth.sm} {
        max-height: 15rem;
    }
`,ej=q.default.li`
    :hover,
    :focus,
    :active {
        background: ${hl["bg-hover"]};
    }
    ${e=>{if(e.$checked)return n.css`
                background: ${hl["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${hl["bg-selected-hover"]};
                }
            `}}
`,tj=q.default.button`
    display: flex;
    ${e=>e.$multiSelect?n.css`
                padding: ${bl["spacing-8"]} ${bl["spacing-16"]};
            `:n.css`
                padding: 15px ${bl["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${bl["spacing-8"]};
    border: none;
    border-radius: ${vl.none};
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${hl["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,rj=n.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,nj=q.default.div`
    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}
    color: ${hl.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rj}
`,ij=q.default.div`
    color: ${hl["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rj}

    ${e=>"next-line"===e.$labelDisplayType?n.css`
                    ${gl["body-md-semibold"]}
                `:n.css`
                    ${gl["body-baseline-regular"]}
                `}
`,oj=q.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return n.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return n.css`
                    ${nj} {
                        display: inline;
                    }

                    ${ij} {
                        display: inline;
                        margin-left: ${bl["spacing-8"]};
                    }
                `}}}
`,aj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,sj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,lj=q.default(cf)`
    flex-shrink: 0;
    margin-right: ${bl["spacing-16"]};
`,dj=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${bl["spacing-16"]} 0 ${bl["spacing-8"]} 0;
`,cj=q.default.button`
    ${e=>"small"===e.$variant?gl["body-md-semibold"]:gl["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${hl["text-primary"]};
`,uj=q.default.div`
    width: 100%;
    display: flex;
    padding: 15px ${bl["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}
`,fj=q.default(s.ExclamationCircleFillIcon)`
    height: 1em;
    width: 1em;
    margin-right: ${bl["spacing-4"]};
    color: ${hl["icon-error"]};
`,hj=q.default(ld)`
    margin-right: ${bl["spacing-4"]};
    color: ${hl.icon};
`,gj=e=>"small"===e?1:1.375,pj=e=>n.css`
        height: ${gj(e)}rem;
        width: ${gj(e)}rem;
    `,mj=q.default.li`
    background: ${hl["bg-strong"]};
    display: flex;
    border-radius: ${vl.sm};
    align-items: center;
`,bj=q.default(wh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${bl["spacing-8"]} 0 0;
    width: 100%;
`,vj=q.default(x.MagnifierIcon)`
    ${e=>pj(e.$variant)}
    margin: 0 ${bl["spacing-8"]};
    color: ${hl.icon};
`,yj=q.default(Ll)`
    ${e=>pj(e.$variant)}
    padding: 0;
    margin: 0 ${bl["spacing-8"]};
    color: ${hl.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return n.css`
                svg {
                    ${pj(e.$variant)}
                }
            `}}
`,xj=t.forwardRef(((t,r)=>{const{onClear:n}=t,i=ki(t,["onClear"]);return e.jsxs(mj,{children:[e.jsx(vj,{$variant:t.variant}),e.jsx(bj,Object.assign({ref:r,$variant:t.variant},i)),i.value&&e.jsx(yj,{"aria-label":"Clear search",focusOutline:"browser",onClick:n,$variant:t.variant,children:e.jsx(u.CrossIcon,{})})]},"search")})),wj=r=>{var{listItems:n,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:d,searchPlaceholder:c="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:g,multiSelect:p,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:C,onBlur:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:D="default"}=r,E=ki(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[T,F]=t.useState(0),[O,I]=t.useState(""),[M,_]=t.useState(null!=n?n:[]),[A,B]=t.useState(0),R=oi({height:A}),z=t.useRef(null),P=t.useRef(null),L=t.useRef([]),N=t.useRef(null),H=t.useRef(null),W=t.useRef(T),Y=t.useRef(M),V=e=>{W.current=e,F(e)},U=e=>{Y.current=e,_(e)};t.useEffect((()=>(document.addEventListener("keydown",Q),()=>{document.removeEventListener("keydown",Q)})),[]),t.useEffect((()=>{G(O)}),[O]),t.useEffect((()=>{if(I(""),l){if(setTimeout((()=>{B(Z())})),g)return;N&&N.current?(N.current.focus(),V(-1)):L.current[T]&&L.current[T].focus()}else B(0)}),[l]),t.useEffect((()=>{if(l){const e=Z();B(e)}}),[M,y]),t.useEffect((()=>{U(null!=n?n:[]),I(""),V(0)}),[n]);const K=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=e=>{if("inline"!==$)return!1;let t=0;P&&P.current&&(t=P.current.getBoundingClientRect().width-60);return Rc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},X=e=>!!XS(m,(t=>ZS(t,e))),G=e=>{if(""===e)U(null!=n?n:[]);else if(f){const t=f(e);U(t)}else{const t=null==n?void 0:n.filter((t=>{const{title:r,secondaryLabel:n}=K(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));U(null!=t?t:[])}},Z=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),Q=e=>{var t,r;if(z&&z.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<Y.current.length-1){const e=W.current+1;null===(t=L.current[e])||void 0===t||t.focus(),V(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;null===(r=L.current[e])||void 0===r||r.focus(),V(W.current-1)}break;case"Escape":h&&h(!0)}},J=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},ee=e=>{const t=e.target.value;I(t),u&&u()},te=()=>{var e;I(""),null===(e=N.current)||void 0===e||e.focus(),u&&u()},re=()=>{v&&v()},ne=()=>{S&&S()},ie=t=>e.jsxs(e.Fragment,{children:[e.jsx(aj,{$maxLines:w,"aria-hidden":!0,children:t}),e.jsx(sj,{$maxLines:w,"aria-hidden":!0,children:t})]}),oe=t=>{const{title:r,secondaryLabel:n}=K(t),i=q(r),o=n&&q(n),a=i||o?"next-line":$;return e.jsxs(oj,{$labelDisplayType:a,children:[e.jsx(nj,{$truncateType:x,$maxLines:w,$variant:D,"aria-label":r,children:"middle"===x&&i?ie(r):r}),n&&e.jsx(ij,{$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":n,children:"middle"===x&&o?ie(n):n})]})},ae=()=>{if(!v||"success"===y)return M.map(((t,r)=>e.jsx(ej,{$checked:X(t)&&!p,children:e.jsxs(tj,{$hasNextLineLabel:"next-line"===$&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{J(e,t)},ref:e=>L.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:p,onBlur:ne,$variant:D,children:[p&&e.jsx(lj,{checked:X(t),displaySize:"small"}),C?C(t,{selected:X(t)}):oe(t)]})},((e,t)=>`item_${t}__${o?o(e):e}`)(t,r))))},se=()=>{if(m&&p&&M.length>0&&!O&&"success"===y)return e.jsx(dj,{children:e.jsx(cj,{onClick:b,type:"button",$variant:D,children:0===m.length?"Select all":"Clear all"})},"selectAll")},le=()=>{if(!j&&(O||!d)&&0===M.length&&"success"===y)return e.jsxs(uj,{"data-testid":"list-no-results",$variant:D,children:[e.jsx(fj,{"data-testid":"no-result-icon",$variant:D}),"No results found."]},"noResults")},de=()=>{if(v&&"loading"===y)return e.jsxs(uj,{"data-testid":"list-loading",$variant:D,children:[e.jsx(hj,{}),"Loading..."]},"loading")},ce=()=>{if(v&&"fail"===y)return e.jsxs(uj,{"data-testid":"list-fail",$variant:D,children:[e.jsx(fj,{"data-testid":"load-error-icon",$variant:D}),"Failed to load. ",e.jsx(cj,{onClick:re,type:"button",$variant:D,children:"Try again."})]},"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(QS,{style:R,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:z,children:[(()=>{if(l)return e.jsxs(JS,Object.assign({ref:P,"data-testid":"dropdown-list",width:s,role:"list"},E,{children:[(d||f)&&"success"===y?e.jsx(xj,{ref:N,onChange:ee,value:O,placeholder:c,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:te,variant:D}):null,se(),le(),de(),ce(),ae()]}))})(),(()=>{if(l&&k)return e.jsx("div",{ref:H,"data-testid":"custom-cta",children:k(h,M)})})()]})})},$j=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return n.css`
                border-bottom: ${ml["width-010"]} ${ml.solid}
                    ${hl.border};
            `}}

    ${e=>e.$readOnly?n.css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?n.css`
                        flex-direction: row-reverse;
                        margin: 0 ${bl["spacing-16"]};
                    `:n.css`
                        flex-direction: row;
                        margin: 0 ${bl["spacing-16"]};
                    `}
`,Cj=q.default(Vh)`
    padding: 0;
    width: auto;
`,Sj=q.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${bl["spacing-12"]};
`,jj=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${pl["duration-250"]} ${pl["ease-default"]};
    margin: 0 ${bl["spacing-12"]};
    display: flex;
    align-items: center;
`,kj=q.default(f.ChevronDownIcon)`
    color: ${hl.icon};
    height: ${gl.Spec["body-size-baseline"]};
    width: ${gl.Spec["body-size-baseline"]};
`,Dj=q.default.div`
    display: flex;
    flex: 1 1 auto;
`,Ej=q.default(exports.Typography.BodyBL)`
    text-align: left;
    ${Nl(2)}
    text-overflow: ellipsis;
`,Tj=q.default(Ej)`
    color: ${hl["text-subtler"]};
`,Fj=q.default.div`
    width: 1px;
    background: ${hl.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return n.css`
                display: none;
            `}}

    ${e=>"right"===e.$position?n.css`
                    margin: 0 ${bl["spacing-12"]};
                `:n.css`
                    margin: 0 ${bl["spacing-12"]} 0 0;
                `}
`,Oj=q.default(yh)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${bl["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ij=q.default(yh)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${bl["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Mj=q.default($w)``,_j=q.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${gl["body-baseline-regular"]}
    color: ${hl.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return n.css`
                color: ${hl["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?n.css`
                    margin-left: ${e.$readOnly?bl["spacing-4"]:bl["spacing-12"]};
                `:n.css`
                    margin-right: ${e.$readOnly?bl["spacing-4"]:bl["spacing-12"]};
                `};
`,Aj=U.default.forwardRef(((r,n)=>{var{addon:i,error:o,onChange:a,readOnly:s,className:l,onBlur:d}=r,c=ki(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:g,searchPlaceholder:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":C}=i.attributes,{position:S}=i,[j,k]=t.useState(y),[D,E]=t.useState(!1),T=t.useRef(null);t.useEffect((()=>{k(y)}),[y]);const F=()=>{if(j)return v?v(j):m?m(j):j.toString()},O=e=>{!e&&w&&w(),e&&$&&$()},I=e=>{e.preventDefault(),c.disabled||(E(!D),O(!D))},M=(e,t)=>{var r;k(e),E(!1),O(!1),T&&(null===(r=T.current)||void 0===r||r.focus()),x&&x(e,t)},_=e=>{a&&a(e)},A=()=>{d&&d()},B=()=>{var e;E(!1),O(!1),T&&(null===(e=T.current)||void 0===e||e.focus())};return e.jsxs(Jh,{className:l,show:D,error:o&&!D,disabled:c.disabled,readOnly:s,onBlur:()=>{E(!1),O(!1),A()},children:[e.jsxs($j,{$expanded:D,$readOnly:s,$position:S,children:[s?j?e.jsx(Sj,{children:e.jsx(Ej,{"data-testid":"selector-label",children:F()})}):null:e.jsx(Cj,{ref:T,type:"button",disabled:c.disabled,"data-testid":C||"addon-selector",onClick:I,children:e.jsxs(e.Fragment,{children:[e.jsxs(Dj,{children:[u&&!j&&e.jsx(Tj,{children:u}),j&&e.jsx(Ej,{"data-testid":"selector-label",children:F()})]}),e.jsx(jj,{$expanded:D,children:e.jsx(kj,{})})]})}),e.jsx(Fj,{$readOnly:s,$position:S}),e.jsx(Mj,Object.assign({ref:n},c,{readOnly:s,error:o,onChange:_,"data-testid":c["data-testid"]||"input",onBlur:A,styleType:"no-border"}))]}),f&&f.length>0?e.jsx(wj,{listItems:f,selectedItems:y?[y]:[],onSelectItem:M,valueExtractor:m,listExtractor:b,visible:D,enableSearch:h,searchFunction:g,searchPlaceholder:p,"data-testid":"dropdown-list",onBlur:A,onDismiss:B}):e.jsx(e.Fragment,{})]})})),Bj=U.default.forwardRef(((t,r)=>{var{addon:n,error:i,className:o}=t,a=ki(t,["addon","error","className"]);const s=()=>e.jsx(Ij,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],className:o,children:e.jsx(Mj,Object.assign({ref:r},a,{"data-testid":"input",styleType:"no-border"}))});if(!n)return s();{const{type:t="label",position:l="left"}=n,{allowClear:d}=a;switch(t){case"list":{const t=n.attributes;return t.options&&t.options.length>0?e.jsx(Aj,Object.assign({ref:r,addon:n,error:i,className:o},a)):s()}case"custom":{const t=n.attributes;return t.children?e.jsxs(Oj,{$error:i,$disabled:a.disabled,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(_j,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.children}),e.jsx(Mj,Object.assign({ref:r},a,{allowClear:d&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}default:{const t=n.attributes;return t.value?e.jsxs(Oj,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(_j,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.value}),e.jsx(Mj,Object.assign({ref:r},a,{allowClear:d&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}}}})),Rj=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(Bj,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),zj=q.default(Bj)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":bl["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Pj=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=hl.icon,$activeColor:r=hl["icon-primary"]})=>e?t:r};
    padding: ${bl["spacing-12"]} ${bl["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,Lj=q.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Nj=q.default(exports.Typography.BodyBL)`
    color: ${hl["text-subtler"]};
`,Hj=q.default(ld)`
    margin-right: ${bl["spacing-8"]};
    color: ${hl.icon};
`,Wj=q.default.span`
    color: ${hl["text-primary"]};
    text-decoration: underline;
    font-weight: ${gl.Spec["weight-semibold"]};
`,Yj=q.default.span`
    display: flex;
    align-items: center;
    margin-right: ${bl["spacing-8"]};
`,Vj=q.default(C.ExclamationTriangleIcon)`
    color: ${hl["icon-warning"]};
    margin-right: ${bl["spacing-8"]};
    height: 1em;
    width: 1em;
`,Uj=q.default.span`
    color: ${hl["text-warning"]};
`,Kj=q.default($h)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${gl["body-baseline-regular"]}

    :hover, :active, :focus {
        ${Wj} {
            color: ${hl["text-hover"]};
        }
    }
`;var qj={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,l=64,d=128,c=256,u=1/0,f=9007199254740991,h=NaN,g=4294967295,p=[["ary",d],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",l],["rearg",c]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",C="[object Map]",S="[object Number]",j="[object Object]",k="[object Promise]",D="[object RegExp]",E="[object Set]",T="[object String]",F="[object Symbol]",O="[object WeakMap]",I="[object ArrayBuffer]",M="[object DataView]",_="[object Float32Array]",A="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",z="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,Y=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,oe=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,de=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ce=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",Ce="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",Ee="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Fe="["+$e+"]",Oe="["+Ee+"]",Ie="["+Ce+"]",Me="\\d+",_e="["+Se+"]",Ae="["+je+"]",Be="[^"+$e+Ee+Me+Se+je+ke+"]",Re="\\ud83c[\\udffb-\\udfff]",ze="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",He="\\u200d",We="(?:"+Ae+"|"+Be+")",Ye="(?:"+Ne+"|"+Be+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+Ie+"|"+Re+")"+"?",qe="["+De+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[ze,Pe,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[_e,Pe,Le].join("|")+")"+Xe,Ze="(?:"+[ze+Ie+"?",Ie,Pe,Le,Fe].join("|")+")",Qe=RegExp(Te,"g"),Je=RegExp(Ie,"g"),et=RegExp(Re+"(?="+Re+")|"+Ze+Xe,"g"),tt=RegExp([Ne+"?"+Ae+"+"+Ve+"(?="+[Oe,Ne,"$"].join("|")+")",Ye+"+"+Ue+"(?="+[Oe,Ne+We,"$"].join("|")+")",Ne+"?"+We+"+"+Ve,Ne+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),rt=RegExp("["+He+$e+Ce+De+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,at={};at[_]=at[A]=at[B]=at[R]=at[z]=at[P]=at[L]=at[N]=at[H]=!0,at[m]=at[b]=at[I]=at[v]=at[M]=at[y]=at[x]=at[w]=at[C]=at[S]=at[j]=at[D]=at[E]=at[T]=at[O]=!1;var st={};st[m]=st[b]=st[I]=st[M]=st[v]=st[y]=st[_]=st[A]=st[B]=st[R]=st[z]=st[C]=st[S]=st[j]=st[D]=st[E]=st[T]=st[F]=st[P]=st[L]=st[N]=st[H]=!0,st[x]=st[w]=st[O]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dt=parseFloat,ct=parseInt,ut="object"==typeof Oi&&Oi&&Oi.Object===Object&&Oi,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),gt=t&&!t.nodeType&&t,pt=gt&&e&&!e.nodeType&&e,mt=pt&&pt.exports===gt,bt=mt&&ut.process,vt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,Ct=vt&&vt.isSet,St=vt&&vt.isTypedArray;function jt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ft(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Ot(e,t){return!!(null==e?0:e.length)&&Nt(e,t,0)>-1}function It(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function _t(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function At(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Bt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Vt("length");function Pt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Nt(e,t,r){return t==t?function(e,t,r){var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Wt,r)}function Ht(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Wt(e){return e!=e}function Yt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:h}function Vt(e){return function(t){return null==t?r:t[e]}}function Ut(e){return function(t){return null==e?r:e[t]}}function Kt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function qt(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,hr(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&Nt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Nt(t,e[r],0)>-1;);return r}var rr=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+lt[e]}function or(e){return rt.test(e)}function ar(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function sr(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var s=e[r];s!==t&&s!==o||(e[r]=o,a[i++]=r)}return a}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):zt(e)}function fr(e){return or(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var gr=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var pr=function e(t){var oe=(t=null==t?ht:pr.defaults(ht.Object(),t,pr.pick(ht,it))).Array,$e=t.Date,Ce=t.Error,Se=t.Function,je=t.Math,ke=t.Object,De=t.RegExp,Ee=t.String,Te=t.TypeError,Fe=oe.prototype,Oe=Se.prototype,Ie=ke.prototype,Me=t["__core-js_shared__"],_e=Oe.toString,Ae=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=_e.call(ke),Le=ht._,Ne=De("^"+_e.call(Ae).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:r,We=t.Symbol,Ye=t.Uint8Array,Ve=He?He.allocUnsafe:r,Ue=sr(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Xe=Fe.splice,Ge=We?We.isConcatSpreadable:r,Ze=We?We.iterator:r,et=We?We.toStringTag:r,rt=function(){try{var e=fo(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,gt=je.ceil,pt=je.floor,bt=ke.getOwnPropertySymbols,vt=He?He.isBuffer:r,zt=t.isFinite,Ut=Fe.join,mr=sr(ke.keys,ke),br=je.max,vr=je.min,yr=$e.now,xr=t.parseInt,wr=je.random,$r=Fe.reverse,Cr=fo(t,"DataView"),Sr=fo(t,"Map"),jr=fo(t,"Promise"),kr=fo(t,"Set"),Dr=fo(t,"WeakMap"),Er=fo(ke,"create"),Tr=Dr&&new Dr,Fr={},Or=zo(Cr),Ir=zo(Sr),Mr=zo(jr),_r=zo(kr),Ar=zo(Dr),Br=We?We.prototype:r,Rr=Br?Br.valueOf:r,zr=Br?Br.toString:r;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Ae.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Nr(){}function Hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Xr(e,t){var r=Ya(e),n=!r&&Wa(e),i=!r&&!n&&qa(e),o=!r&&!n&&!i&&ds(e),a=r||n||i||o,s=a?Xt(e.length,Ee):[],l=s.length;for(var d in e)!t&&!Ae.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yo(d,l))||s.push(d);return s}function Gr(e){var t=e.length;return t?e[qn(0,t-1)]:r}function Zr(e,t){return Ao(Ti(e),sn(t,0,e.length))}function Qr(e){return Ao(Ti(e))}function Jr(e,t,n){(n!==r&&!La(e[t],n)||n===r&&!(t in e))&&on(e,t,n)}function en(e,t,n){var i=e[t];Ae.call(e,t)&&La(i,n)&&(n!==r||t in e)||on(e,t,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Fi(t,Os(t),e)}function on(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(e,t){for(var n=-1,i=t.length,o=oe(i),a=null==e;++n<i;)o[n]=a?r:ks(e,t[n]);return o}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ln(e,t,n,i,o,a){var s,l=1&t,d=2&t,c=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!es(e))return e;var u=Ya(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ti(e,s)}else{var f=po(e),h=f==w||f==$;if(qa(e))return Ci(e,l);if(f==j||f==m||h&&!o){if(s=d||h?{}:bo(e),!l)return d?function(e,t){return Fi(e,go(e),t)}(e,function(e,t){return e&&Fi(t,Is(t),e)}(s,e)):function(e,t){return Fi(e,ho(e),t)}(e,nn(s,e))}else{if(!st[f])return o?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case I:return Si(e);case v:case y:return new n(+e);case M:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case _:case A:case B:case R:case z:case P:case L:case N:case H:return ji(e,r);case C:return new n;case S:case T:return new n(e);case D:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case E:return new n;case F:return i=e,Rr?ke(Rr.call(i)):{}}var i}(e,f,l)}}a||(a=new qr);var g=a.get(e);if(g)return g;a.set(e,s),as(e)?e.forEach((function(r){s.add(ln(r,t,n,r,e,a))})):rs(e)&&e.forEach((function(r,i){s.set(i,ln(r,t,n,i,e,a))}));var p=u?r:(c?d?io:no:d?Is:Os)(e);return Dt(p||e,(function(r,i){p&&(r=e[i=r]),en(s,i,ln(r,t,n,i,e,a))})),s}function dn(e,t,n){var i=n.length;if(null==e)return!i;for(e=ke(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}function cn(e,t,i){if("function"!=typeof e)throw new Te(n);return Oo((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,o=Ot,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=Mt(t,Zt(r))),n?(o=It,a=!1):t.length>=200&&(o=Jt,a=!1,t=new Kr(t));e:for(;++i<s;){var c=e[i],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var f=d;f--;)if(t[f]===u)continue e;l.push(c)}else o(t,u,n)||l.push(c)}return l}Pr.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Er?Er(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(e){var t=this.__data__;if(Er){var n=t[e];return n===i?r:n}return Ae.call(t,e)?t[e]:r},Yr.prototype.has=function(e){var t=this.__data__;return Er?t[e]!==r:Ae.call(t,e)},Yr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Er&&t===r?i:t,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Vr.prototype.get=function(e){var t=this.__data__,n=tn(t,e);return n<0?r:t[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,i),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Mi(xn),hn=Mi(wn,!0);function gn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function pn(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(l===r?s==s&&!ls(s):n(s,l)))var l=s,d=a}return d}function mn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):_t(i,s):n||(i[i.length]=s)}return i}var vn=_i(),yn=_i(!0);function xn(e,t){return e&&vn(e,t,Os)}function wn(e,t){return e&&yn(e,t,Os)}function $n(e,t){return Ft(t,(function(t){return Za(e[t])}))}function Cn(e,t){for(var n=0,i=(t=yi(t,e)).length;null!=e&&n<i;)e=e[Ro(t[n++])];return n&&n==i?e:r}function Sn(e,t,r){var n=t(e);return Ya(e)?n:_t(n,r(e))}function jn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in ke(e)?function(e){var t=Ae.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch(e){}var o=ze.call(e);i&&(t?e[et]=n:delete e[et]);return o}(e):function(e){return ze.call(e)}(e)}function kn(e,t){return e>t}function Dn(e,t){return null!=e&&Ae.call(e,t)}function En(e,t){return null!=e&&t in ke(e)}function Tn(e,t,n){for(var i=n?It:Ot,o=e[0].length,a=e.length,s=a,l=oe(a),d=1/0,c=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),d=vr(u.length,d),l[s]=!n&&(t||o>=120&&u.length>=120)?new Kr(s&&u):r}u=e[0];var f=-1,h=l[0];e:for(;++f<o&&c.length<d;){var g=u[f],p=t?t(g):g;if(g=n||0!==g?g:0,!(h?Jt(h,p):i(c,p,n))){for(s=a;--s;){var m=l[s];if(!(m?Jt(m,p):i(e[s],p,n)))continue e}h&&h.push(p),c.push(g)}}return c}function Fn(e,t,n){var i=null==(e=Eo(e,t=yi(t,e)))?e:e[Ro(Go(t))];return null==i?r:jt(i,e,n)}function On(e){return ts(e)&&jn(e)==m}function In(e,t,n,i,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,n,i,o,a){var s=Ya(e),l=Ya(t),d=s?b:po(e),c=l?b:po(t),u=(d=d==m?j:d)==j,f=(c=c==m?j:c)==j,h=d==c;if(h&&qa(e)){if(!qa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||ds(e)?to(e,t,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case I:return!(e.byteLength!=t.byteLength||!o(new Ye(e),new Ye(t)));case v:case y:case S:return La(+e,+t);case x:return e.name==t.name&&e.message==t.message;case D:case T:return e==t+"";case C:var s=ar;case E:var l=1&n;if(s||(s=dr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=to(s(e),s(t),n,i,o,a);return a.delete(e),c;case F:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,d,n,i,o,a);if(!(1&n)){var g=u&&Ae.call(e,"__wrapped__"),p=f&&Ae.call(t,"__wrapped__");if(g||p){var w=g?e.value():e,$=p?t.value():t;return a||(a=new qr),o(w,$,n,i,a)}}if(!h)return!1;return a||(a=new qr),function(e,t,n,i,o,a){var s=1&n,l=no(e),d=l.length,c=no(t),u=c.length;if(d!=u&&!s)return!1;var f=d;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var g=a.get(e),p=a.get(t);if(g&&p)return g==t&&p==e;var m=!0;a.set(e,t),a.set(t,e);var b=s;for(;++f<d;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,a):i(v,y,h,e,t,a);if(!(x===r?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,n,i,o,a)}(e,t,n,i,In,o))}function Mn(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=ke(e);o--;){var l=n[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var d=(l=n[o])[0],c=e[d],u=l[1];if(s&&l[2]){if(c===r&&!(d in e))return!1}else{var f=new qr;if(i)var h=i(c,u,d,e,t,f);if(!(h===r?In(u,c,3,i,f):h))return!1}}return!0}function _n(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:me).test(zo(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!So(e))return mr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?oe(e.length):[];return fn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?ko(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(e,t){return wo(e)&&jo(t)?ko(Ro(e),t):function(n){var i=ks(n,e);return i===r&&i===t?Ds(n,e):In(t,i,3)}}function Hn(e,t,n,i,o){e!==t&&vn(t,(function(a,s){if(o||(o=new qr),es(a))!function(e,t,n,i,o,a,s){var l=To(e,n),d=To(t,n),c=s.get(d);if(c)return void Jr(e,n,c);var u=a?a(l,d,n+"",e,t,s):r,f=u===r;if(f){var h=Ya(d),g=!h&&qa(d),p=!h&&!g&&ds(d);u=d,h||g||p?Ya(l)?u=l:Ka(l)?u=Ti(l):g?(f=!1,u=Ci(d,!0)):p?(f=!1,u=ji(d,!0)):u=[]:is(d)||Wa(d)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(d))):f=!1}f&&(s.set(d,u),o(u,d,i,a,s),s.delete(d));Jr(e,n,u)}(e,t,s,n,Hn,i,o);else{var l=i?i(To(e,s),a,s+"",e,t,o):r;l===r&&(l=a),Jr(e,s,l)}}),Is)}function Wn(e,t){var n=e.length;if(n)return yo(t+=t<0?n:0,n)?e[t]:r}function Yn(e,t,r){t=t.length?Mt(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,Zt(lo()));var i=Pn(e,(function(e,r,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;for(;++n<a;){var l=ki(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Ht:Nt,o=-1,a=t.length,s=e;for(e===t&&(t=Ti(t)),r&&(s=Mt(e,Zt(r)));++o<a;)for(var l=0,d=t[o],c=r?r(d):d;(l=i(s,c,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qn(e,t){return e+pt(wr()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>f)return r;do{t%2&&(r+=e),(t=pt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Io(Do(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Ao(r,sn(t,0,r.length))}function Jn(e,t,n,i){if(!es(e))return e;for(var o=-1,a=(t=yi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var d=Ro(t[o]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return e;if(o!=s){var u=l[d];(c=i?i(u,d,l):r)===r&&(c=es(u)?u:yo(t[o+1])?[]:{})}en(l,d,c),l=l[d]}return e}var ei=Tr?function(e,t){return Tr.set(e,t),e}:nl,ti=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Ao(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=oe(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,l=null===t,d=ls(t),c=t===r;o<a;){var u=pt((o+a)/2),f=n(e[u]),h=f!==r,g=null===f,p=f==f,m=ls(f);if(s)var b=i||p;else b=c?p&&(i||h):l?p&&h&&(i||!g):d?p&&h&&!g&&(i||!m):!g&&!m&&(i?f<=t:f<t);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function di(e){if("string"==typeof e)return e;if(Ya(e))return Mt(e,di)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function ci(e,t,r){var n=-1,i=Ot,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=It;else if(o>=200){var d=t?null:Xi(e);if(d)return dr(d);a=!1,i=Jt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(c)}else i(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ui(e,t){return null==(e=Eo(e,t=yi(t,e)))||delete e[Ro(Go(t))]}function fi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function gi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,_t([e],t.args))}),r)}function pi(e,t,r){var n=e.length;if(n<2)return n?ci(e[0]):[];for(var i=-1,o=oe(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return ci(bn(o,1),t,r)}function mi(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var l=i<a?t[i]:r;n(s,e[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Ya(e)?e:wo(e,t)?[e]:Bo(vs(e))}var xi=Gn;function wi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ni(e,t,n)}var $i=lt||function(e){return ht.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ji(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=ls(e),s=t!==r,l=null===t,d=t==t,c=ls(t);if(!l&&!c&&!a&&e>t||a&&s&&d&&!l&&!c||i&&s&&d||!n&&d||!o)return 1;if(!i&&!a&&!c&&e<t||c&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!d)return-1}return 0}function Di(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,d=br(o-a,0),c=oe(l+d),u=!n;++s<l;)c[s]=t[s];for(;++i<a;)(u||i<o)&&(c[r[i]]=e[i]);for(;d--;)c[s++]=e[i++];return c}function Ei(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,d=t.length,c=br(o-s,0),u=oe(c+d),f=!n;++i<c;)u[i]=e[i];for(var h=i;++l<d;)u[h+l]=t[l];for(;++a<s;)(f||i<o)&&(u[h+r[a]]=e[i++]);return u}function Ti(e,t){var r=-1,n=e.length;for(t||(t=oe(n));++r<n;)t[r]=e[r];return t}function Fi(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],d=i?i(n[l],e[l],l,n,e):r;d===r&&(d=e[l]),o?on(n,l,d):en(n,l,d)}return n}function Oi(e,t){return function(r,n){var i=Ya(r)?kt:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Ii(e){return Gn((function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&xo(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=ke(t);++i<o;){var l=n[i];l&&e(t,l,i,a)}return t}))}function Mi(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=ke(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function _i(e){return function(t,r,n){for(var i=-1,o=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Ai(e){return function(t){var n=or(t=vs(t))?fr(t):r,i=n?n[0]:t.charAt(0),o=n?wi(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(e){return function(t,n,i){var o=ke(t);if(!Ua(t)){var a=lo(n,3);t=Os(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}function Pi(e){return ro((function(t){var i=t.length,o=i,a=Hr.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Te(n);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var d=ao(s=t[o]),c="wrapper"==d?oo(s):r;l=c&&$o(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[ao(c[0])].apply(l,c[3]):1==s.length&&$o(s)?l[d]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Ya(r))return l.plant(r).value();for(var n=0,o=i?t[n].apply(this,e):r;++n<i;)o=t[n].call(this,o);return o}}))}function Li(e,t,n,i,o,a,s,l,c,u){var f=t&d,h=1&t,g=2&t,p=24&t,m=512&t,b=g?r:Ri(e);return function d(){for(var v=arguments.length,y=oe(v),x=v;x--;)y[x]=arguments[x];if(p)var w=so(d),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Di(y,i,o,p)),a&&(y=Ei(y,a,s,p)),v-=$,p&&v<u){var C=lr(y,w);return Ki(e,t,Li,d.placeholder,n,y,C,l,c,u-v)}var S=h?n:this,j=g?S[e]:e;return v=y.length,l?y=function(e,t){var n=e.length,i=vr(t.length,n),o=Ti(e);for(;i--;){var a=t[i];e[i]=yo(a,n)?o[a]:r}return e}(y,l):m&&v>1&&y.reverse(),f&&c<v&&(y.length=c),this&&this!==ht&&this instanceof d&&(j=b||Ri(j)),j.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=di(n),i=di(i)):(n=li(n),i=li(i)),o=e(n,i)}return o}}function Wi(e){return ro((function(t){return t=Mt(t,Zt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return jt(e,n,r)}))}))}))}function Yi(e,t){var n=(t=t===r?" ":di(t)).length;if(n<2)return n?Xn(t,e):t;var i=Xn(t,gt(e/ur(t)));return or(t)?wi(fr(i),0,e).join(""):i.slice(0,e)}function Vi(e){return function(t,n,i){return i&&"number"!=typeof i&&xo(t,n,i)&&(n=i=r),t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r,n){for(var i=-1,o=br(gt((t-e)/(r||1)),0),a=oe(o);o--;)a[n?o:++i]=e,e+=r;return a}(t,n,i=i===r?t<n?1:-1:hs(i),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(e,t,n,i,o,a,d,c,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var g=[e,t,o,h?a:r,h?d:r,h?r:a,h?r:d,c,u,f],p=n.apply(r,g);return $o(e)&&Fo(p,g),p.placeholder=i,Mo(p,e,t)}function qi(e){var t=je[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(gs(r),292))&&zt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Xi=kr&&1/dr(new kr([,-0]))[1]==u?function(e){return new kr(e)}:ll;function Gi(e){return function(t){var r=po(t);return r==C?ar(t):r==E?cr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,g,p){var m=2&t;if(!m&&"function"!=typeof e)throw new Te(n);var b=u?u.length:0;if(b||(t&=-97,u=f=r),g=g===r?g:br(gs(g),0),p=p===r?p:gs(p),b-=f?f.length:0,t&l){var v=u,y=f;u=f=r}var x=m?r:oo(e),w=[e,t,i,u,f,v,y,h,g,p];if(x&&function(e,t){var r=e[1],n=t[1],i=r|n,a=i<131,s=n==d&&8==r||n==d&&r==c&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!a&&!s)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Di(u,l,t[4]):l,e[4]=u?lr(e[3],o):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ei(u,l,t[6]):l,e[6]=u?lr(e[5],o):t[6]);(l=t[7])&&(e[7]=l);n&d&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(p=w[9]=w[9]===r?m?0:e.length:br(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==a?function(e,t,n){var i=Ri(e);return function o(){for(var a=arguments.length,s=oe(a),l=a,d=so(o);l--;)s[l]=arguments[l];var c=a<3&&s[0]!==d&&s[a-1]!==d?[]:lr(s,d);return(a-=c.length)<n?Ki(e,t,Li,o.placeholder,r,s,c,r,r,n-a):jt(this&&this!==ht&&this instanceof o?i:e,this,s)}}(e,t,p):t!=s&&33!=t||f.length?Li.apply(r,w):function(e,t,r,n){var i=1&t,o=Ri(e);return function t(){for(var a=-1,s=arguments.length,l=-1,d=n.length,c=oe(d+s),u=this&&this!==ht&&this instanceof t?o:e;++l<d;)c[l]=n[l];for(;s--;)c[l++]=arguments[++a];return jt(u,i?r:this,c)}}(e,t,i,u);else var $=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return Mo((x?ei:Fo)($,w),e,t)}function Qi(e,t,n,i){return e===r||La(e,Ie[n])&&!Ae.call(i,n)?t:e}function Ji(e,t,n,i,o,a){return es(e)&&es(t)&&(a.set(t,e),Hn(e,t,r,Ji,a),a.delete(t)),e}function eo(e){return is(e)?r:e}function to(e,t,n,i,o,a){var s=1&n,l=e.length,d=t.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var f=-1,h=!0,g=2&n?new Kr:r;for(a.set(e,t),a.set(t,e);++f<l;){var p=e[f],m=t[f];if(i)var b=s?i(m,p,f,t,e,a):i(p,m,f,e,t,a);if(b!==r){if(b)continue;h=!1;break}if(g){if(!Rt(t,(function(e,t){if(!Jt(g,t)&&(p===e||o(p,e,n,i,a)))return g.push(t)}))){h=!1;break}}else if(p!==m&&!o(p,m,n,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function ro(e){return Io(Do(e,r,Vo),e+"")}function no(e){return Sn(e,Os,ho)}function io(e){return Sn(e,Is,go)}var oo=Tr?function(e){return Tr.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Fr[t],n=Ae.call(Fr,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ae.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?An:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Os(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,jo(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return _n(n)?n:r}var ho=bt?function(e){return null==e?[]:(e=ke(e),Ft(bt(e),(function(t){return qe.call(e,t)})))}:pl,go=bt?function(e){for(var t=[];e;)_t(t,ho(e)),e=Ue(e);return t}:pl,po=jn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=Ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Ya(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yo(e,t){var r=typeof e;return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in ke(t))}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&po(new Cr(new ArrayBuffer(1)))!=M||Sr&&po(new Sr)!=C||jr&&po(jr.resolve())!=k||kr&&po(new kr)!=E||Dr&&po(new Dr)!=O)&&(po=function(e){var t=jn(e),n=t==j?e.constructor:r,i=n?zo(n):"";if(i)switch(i){case Or:return M;case Ir:return C;case Mr:return k;case _r:return E;case Ar:return O}return t});var Co=Me?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function jo(e){return e==e&&!es(e)}function ko(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in ke(n)))}}function Do(e,t,n){return t=br(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=br(r.length-t,0),a=oe(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=oe(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),jt(e,this,s)}}function Eo(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function To(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Fo=_o(ei),Oo=ft||function(e,t){return ht.setTimeout(e,t)},Io=_o(ti);function Mo(e,t,r){var n=t+"";return Io(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Dt(p,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(n),r)))}function _o(e){var t=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ao(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=qn(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var Bo=function(e){var t=_a(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)})),t}));function Ro(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return _e.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Ti(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),r,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Lt(e,lo(t,3),i)}function Yo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=gs(n),o=n<0?br(i+o,0):vr(o,i-1)),Lt(e,lo(t,3),o,!0)}function Vo(e){return(null==e?0:e.length)?bn(e,1):[]}function Uo(e){return e&&e.length?e[0]:r}var Ko=Gn((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?Tn(t):[]})),qo=Gn((function(e){var t=Go(e),n=Mt(e,bi);return t===Go(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Tn(n,lo(t,2)):[]})),Xo=Gn((function(e){var t=Go(e),n=Mt(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?Tn(n,r,t):[]}));function Go(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Mt(t,(function(e){return yo(e,r)?+e:e})).sort(ki)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return ci(bn(e,1,Ka,!0))})),ra=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),ci(bn(e,1,Ka,!0),lo(t,2))})),na=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,ci(bn(e,1,Ka,!0),r,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ft(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Vt(t))}))}function oa(e,t){if(!e||!e.length)return[];var n=ia(e);return null==t?n:Mt(n,(function(e){return jt(t,r,e)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return pi(Ft(e,Ka))})),la=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),pi(Ft(e,Ka),lo(t,2))})),da=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,pi(Ft(e,Ka),r,t)})),ca=Gn(ia);var ua=Gn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,oa(e,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var ga=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return an(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:r}),new Hr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var pa=Oi((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)}));var ma=zi(Wo),ba=zi(Yo);function va(e,t){return(Ya(e)?Dt:fn)(e,lo(t,3))}function ya(e,t){return(Ya(e)?Et:hn)(e,lo(t,3))}var xa=Oi((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])}));var wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?oe(e.length):[];return fn(e,(function(e){o[++n]=i?jt(t,e,r):Fn(e,t,r)})),o})),$a=Oi((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?Mt:Pn)(e,lo(t,3))}var Sa=Oi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var ja=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Da(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,d,r,r,r,r,t)}function Ea(e,t){var i;if("function"!=typeof t)throw new Te(n);return e=gs(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var Ta=Gn((function(e,t,r){var n=1;if(r.length){var i=lr(r,so(Ta));n|=s}return Zi(e,n,t,r,i)})),Fa=Gn((function(e,t,r){var n=3;if(r.length){var i=lr(r,so(Fa));n|=s}return Zi(t,n,e,r,i)}));function Oa(e,t,i){var o,a,s,l,d,c,u=0,f=!1,h=!1,g=!0;if("function"!=typeof e)throw new Te(n);function p(t){var n=o,i=a;return o=a=r,u=t,l=e.apply(i,n)}function m(e){var n=e-c;return c===r||n>=t||n<0||h&&e-u>=s}function b(){var e=ka();if(m(e))return v(e);d=Oo(b,function(e){var r=t-(e-c);return h?vr(r,s-(e-u)):r}(e))}function v(e){return d=r,g&&o?p(e):(o=a=r,l)}function y(){var e=ka(),n=m(e);if(o=arguments,a=this,c=e,n){if(d===r)return function(e){return u=e,d=Oo(b,t),f?p(e):l}(c);if(h)return $i(d),d=Oo(b,t),p(c)}return d===r&&(d=Oo(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?br(ms(i.maxWait)||0,t):s,g="trailing"in i?!!i.trailing:g),y.cancel=function(){d!==r&&$i(d),u=0,o=c=a=d=r},y.flush=function(){return d===r?l:v(ka())},y}var Ia=Gn((function(e,t){return cn(e,1,t)})),Ma=Gn((function(e,t,r){return cn(e,ms(t)||0,r)}));function _a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Te(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(_a.Cache||Ur),r}function Aa(e){if("function"!=typeof e)throw new Te(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}_a.Cache=Ur;var Ba=xi((function(e,t){var r=(t=1==t.length&&Ya(t[0])?Mt(t[0],Zt(lo())):Mt(bn(t,1),Zt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return jt(e,this,n)}))})),Ra=Gn((function(e,t){var n=lr(t,so(Ra));return Zi(e,s,r,t,n)})),za=Gn((function(e,t){var n=lr(t,so(za));return Zi(e,l,r,t,n)})),Pa=ro((function(e,t){return Zi(e,c,r,r,r,t)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(kn),Ha=Ui((function(e,t){return e>=t})),Wa=On(function(){return arguments}())?On:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Ya=oe.isArray,Va=yt?Zt(yt):function(e){return ts(e)&&jn(e)==I};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=vt||ml,Xa=xt?Zt(xt):function(e){return ts(e)&&jn(e)==y};function Ga(e){if(!ts(e))return!1;var t=jn(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=jn(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==gs(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=wt?Zt(wt):function(e){return ts(e)&&po(e)==C};function ns(e){return"number"==typeof e||ts(e)&&jn(e)==S}function is(e){if(!ts(e)||jn(e)!=j)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&_e.call(r)==Pe}var os=$t?Zt($t):function(e){return ts(e)&&jn(e)==D};var as=Ct?Zt(Ct):function(e){return ts(e)&&po(e)==E};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&jn(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&jn(e)==F}var ds=St?Zt(St):function(e){return ts(e)&&Ja(e.length)&&!!at[jn(e)]};var cs=Ui(zn),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?fr(e):Ti(e);if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ze]());var t=po(e);return(t==C?ar:t==E?dr:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function gs(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function ps(e){return e?sn(gs(e),0,g):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=pe.test(e);return r||be.test(e)?ct(e.slice(2),r?2:8):ge.test(e)?h:+e}function bs(e){return Fi(e,Is(e))}function vs(e){return null==e?"":di(e)}var ys=Ii((function(e,t){if(So(t)||Ua(t))Fi(t,Os(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Ii((function(e,t){Fi(t,Is(t),e)})),ws=Ii((function(e,t,r,n){Fi(t,Is(t),e,n)})),$s=Ii((function(e,t,r,n){Fi(t,Os(t),e,n)})),Cs=ro(an);var Ss=Gn((function(e,t){e=ke(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&xo(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=Is(a),l=-1,d=s.length;++l<d;){var c=s[l],u=e[c];(u===r||La(u,Ie[c])&&!Ae.call(e,c))&&(e[c]=a[c])}return e})),js=Gn((function(e){return e.push(r,Ji),jt(_s,r,e)}));function ks(e,t,n){var i=null==e?r:Cn(e,t);return i===r?n:i}function Ds(e,t){return null!=e&&mo(e,t,En)}var Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Ts=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Fs=Gn(Fn);function Os(e){return Ua(e)?Xr(e):Bn(e)}function Is(e){return Ua(e)?Xr(e,!0):Rn(e)}var Ms=Ii((function(e,t,r){Hn(e,t,r)})),_s=Ii((function(e,t,r,n){Hn(e,t,r,n)})),As=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Fi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r}));var Bs=ro((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=Mt(io(e),(function(e){return[e]}));return t=lo(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(Os),Ps=Gi(Is);function Ls(e){return null==e?[]:Qt(e,Os(e))}var Ns=Bi((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,rr).replace(Je,"")}var Ys=Bi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Bi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Bi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var qs=Bi((function(e,t,r){return e+(r?" ":"")+Gs(t)}));var Xs=Bi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,n){return e=vs(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(de)||[]}(e):e.match(t)||[]}var Qs=Gn((function(e,t){try{return jt(e,r,t)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return Dt(t,(function(t){t=Ro(t),on(e,t,Ta(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return An("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return Fn(r,e,t)}})),al=Gn((function(e,t){return function(r){return Fn(e,r,t)}}));function sl(e,t,r){var n=Os(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Os(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return Dt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ti(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,_t([this.value()],arguments))})})),e}function ll(){}var dl=Wi(Mt),cl=Wi(Tt),ul=Wi(Rt);function fl(e){return wo(e)?Vt(Ro(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Vi(),gl=Vi(!0);function pl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),Cl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,t){if("function"!=typeof t)throw new Te(n);return e=gs(e),function(){if(--e<1)return t.apply(this,arguments)}},Pr.ary=Da,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ea,Pr.bind=Ta,Pr.bindAll=Js,Pr.bindKey=Fa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(e,t,n){t=(n?xo(e,t,n):t===r)?1:br(gs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=oe(gt(i/t));o<i;)s[a++]=ni(e,o,o+=t);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return _t(Ya(r)?Ti(r):[r],bn(t,1))},Pr.cond=function(e){var t=null==e?0:e.length,r=lo();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new Te(n);return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n];if(jt(i[0],this,r))return jt(i[1],this,r)}}))},Pr.conforms=function(e){return function(e){var t=Os(e);return function(r){return dn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=pa,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.curryRight=function e(t,n,i){var o=Zi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.debounce=Oa,Pr.defaults=Ss,Pr.defaultsDeep=js,Pr.defer=Ia,Pr.delay=Ma,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=n||t===r?1:gs(t))<0?0:t,i):[]},Pr.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,0,(t=i-(t=n||t===r?1:gs(t)))<0?0:t):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0):[]},Pr.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&xo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=gs(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:gs(i))<0&&(i+=o),i=n>i?0:ps(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Pr.filter=function(e,t){return(Ya(e)?Ft:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),u)},Pr.flatMapDepth=function(e,t,n){return n=n===r?1:gs(n),bn(Ca(e,t),n)},Pr.flatten=Vo,Pr.flattenDeep=function(e){return(null==e?0:e.length)?bn(e,u):[]},Pr.flattenDepth=function(e,t){return(null==e?0:e.length)?bn(e,t=t===r?1:gs(t)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Os(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return(null==e?0:e.length)?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=qo,Pr.intersectionWith=Xo,Pr.invert=Es,Pr.invertBy=Ts,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Os,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=_a,Pr.merge=Ms,Pr.mergeWith=_s,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Aa,Pr.nthArg=function(e){return e=gs(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=As,Pr.omitBy=function(e,t){return Rs(e,Aa(lo(t)))},Pr.once=function(e){return Ea(2,e)},Pr.orderBy=function(e,t,n,i){return null==e?[]:(Ya(t)||(t=null==t?[]:[t]),Ya(n=i?r:n)||(n=null==n?[]:[n]),Yn(e,t,n))},Pr.over=dl,Pr.overArgs=Ba,Pr.overEvery=cl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(e){return function(t){return null==e?r:Cn(e,t)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Un(e,t,r,n):e},Pr.pullAt=Jo,Pr.range=hl,Pr.rangeRight=gl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?Ft:mn)(e,Aa(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(e,t){if("function"!=typeof e)throw new Te(n);return Gn(e,t=t===r?t:gs(t))},Pr.reverse=ea,Pr.sampleSize=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:gs(t),(Ya(e)?Zr:Qn)(e,t)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Jn(e,t,n,i)},Pr.shuffle=function(e){return(Ya(e)?Qr:ri)(e)},Pr.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&xo(e,t,n)?(t=0,n=i):(t=null==t?0:gs(t),n=n===r?i:gs(n)),ni(e,t,n)):[]},Pr.sortBy=ja,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(e,t,n){return n&&"number"!=typeof n&&xo(e,t,n)&&(t=n=r),(n=n===r?g:n>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=di(t))&&or(e)?wi(fr(e),0,n):e.split(t,n):[]},Pr.spread=function(e,t){if("function"!=typeof e)throw new Te(n);return t=null==t?0:br(gs(t),0),Gn((function(r){var n=r[t],i=wi(r,0,t);return n&&_t(i,n),jt(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(e,t,n){return e&&e.length?ni(e,0,(t=n||t===r?1:gs(t))<0?0:t):[]},Pr.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=i-(t=n||t===r?1:gs(t)))<0?0:t,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?hi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Te(n);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Oa(e,t,{leading:i,maxWait:t,trailing:o})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?Mt(e,Ro):ls(e)?[e]:Ti(Bo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),i=n||qa(e)||ds(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?Dt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Da(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?ci(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?ci(e,lo(t,2)):[]},Pr.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?ci(e,r,t):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:fi(e,t,vi(r))},Pr.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=da,Pr.zip=ca,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=bl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=vl,Pr.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ms(n))==n?n:0),t!==r&&(t=(t=ms(t))==t?t:0),sn(ms(e),t,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:r)},Pr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:r)},Pr.conformsTo=function(e,t){return null==t||dn(e,t,Os(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=yl,Pr.endsWith=function(e,t,n){e=vs(e),t=di(t);var i=e.length,o=n=n===r?i:sn(gs(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,nr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&ne.test(e)?e.replace(re,"\\$&"):e},Pr.every=function(e,t,n){var i=Ya(e)?Tt:gn;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return Pt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yo,Pr.findLastKey=function(e,t){return Pt(e,lo(t,3),wn)},Pr.floor=xl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Dn)},Pr.hasIn=Ds,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?gs(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Nt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Nt(e,t,i)},Pr.inRange=function(e,t,n){return t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(e=ms(e),t,n)},Pr.invoke=Fs,Pr.isArguments=Wa,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&jn(e)==v},Pr.isBuffer=qa,Pr.isDate=Xa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||ds(e)||Wa(e)))return!e.length;var t=po(e);if(t==C||t==E)return!e.size;if(So(e))return!Bn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?In(e,t,r,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&zt(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,uo(t))},Pr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Mn(e,t,uo(t),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return _n(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=f},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=ds,Pr.isUndefined=function(e){return e===r},Pr.isWeakMap=function(e){return ts(e)&&po(e)==O},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==jn(e)},Pr.join=function(e,t){return null==e?"":Ut.call(e,t)},Pr.kebabCase=Ys,Pr.last=Go,Pr.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=gs(n))<0?br(i+o,0):vr(o,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):Lt(e,Wt,o,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=cs,Pr.lte=us,Pr.max=function(e){return e&&e.length?pn(e,nl,kn):r},Pr.maxBy=function(e,t){return e&&e.length?pn(e,lo(t,2),kn):r},Pr.mean=function(e){return Yt(e,nl)},Pr.meanBy=function(e,t){return Yt(e,lo(t,2))},Pr.min=function(e){return e&&e.length?pn(e,nl,zn):r},Pr.minBy=function(e,t){return e&&e.length?pn(e,lo(t,2),zn):r},Pr.stubArray=pl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(e,t){return e&&e.length?Wn(e,gs(t)):r},Pr.noConflict=function(){return ht._===this&&(ht._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=gs(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Yi(pt(i),r)+e+Yi(gt(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=gs(t))?ur(e):0;return t&&n<t?e+Yi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=gs(t))?ur(e):0;return t&&n<t?Yi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(ie,""),t||0)},Pr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=hs(e),t===r?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=wr();return vr(e+o*(t-e+dt("1e-"+((o+"").length-1))),t)}return qn(e,t)},Pr.reduce=function(e,t,r){var n=Ya(e)?At:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,fn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?Bt:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.repeat=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:gs(t),Xn(vs(e),t)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(e,t,n){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[Ro(t[i])];a===r&&(i=o,a=n),e=Za(a)?a.call(e):a}return e},Pr.round=Cl,Pr.runInContext=e,Pr.sample=function(e){return(Ya(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=po(e);return t==C||t==E?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(e,t,n){var i=Ya(e)?Rt:ii;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(gs(r),0,e.length),t=di(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?qt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?qt(e,lo(t,2)):0},Pr.template=function(e,t,n){var i=Pr.templateSettings;n&&xo(e,t,n)&&(t=r),e=vs(e),t=ws({},t,i,Qi);var o,a,s=ws({},t.imports,i.imports,Qi),l=Os(s),d=Qt(s,l),c=0,u=t.interpolate||xe,f="__p += '",h=De((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),g="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(h,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(c,l).replace(we,ir),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),f+="';\n";var p=Ae.call(t,"variable")&&t.variable;if(p){if(ce.test(p))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(W,""):f).replace(Y,"$1").replace(V,"$1;"),f="function("+(p||"obj")+") {\n"+(p?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,g+"return "+f).apply(r,d)}));if(m.source=f,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=gs(e))<1||e>f)return[];var r=g,n=vr(e,g);t=lo(t),e-=g;for(var i=Xt(n,t);++r<e;)t(r);return i},Pr.toFinite=hs,Pr.toInteger=gs,Pr.toLength=ps,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(gs(e),-9007199254740991,f):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(e,t,n){if((e=vs(e))&&(n||t===r))return Gt(e);if(!e||!(t=di(t)))return e;var i=fr(e),o=fr(t);return wi(i,er(i,o),tr(i,o)+1).join("")},Pr.trimEnd=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.slice(0,hr(e)+1);if(!e||!(t=di(t)))return e;var i=fr(e);return wi(i,0,tr(i,fr(t))+1).join("")},Pr.trimStart=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=di(t)))return e;var i=fr(e);return wi(i,er(i,fr(t))).join("")},Pr.truncate=function(e,t){var n=30,i="...";if(es(t)){var o="separator"in t?t.separator:o;n="length"in t?gs(t.length):n,i="omission"in t?di(t.omission):i}var a=(e=vs(e)).length;if(or(e)){var s=fr(e);a=s.length}if(n>=a)return e;var l=n-ur(i);if(l<1)return i;var d=s?wi(s,0,l).join(""):e.slice(0,l);if(o===r)return d+i;if(s&&(l+=d.length-l),os(o)){if(e.slice(l).search(o)){var c,u=d;for(o.global||(o=De(o.source,vs(he.exec(o))+"g")),o.lastIndex=0;c=o.exec(u);)var f=c.index;d=d.slice(0,f===r?l:f)}}else if(e.indexOf(di(o),l)!=l){var h=d.lastIndexOf(o);h>-1&&(d=d.slice(0,h))}return d+i},Pr.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,gr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Xs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(wl={},xn(Pr,(function(e,t){Ae.call(Pr.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pr.VERSION="4.17.21",Dt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),Dt(["drop","take"],(function(e,t){Wr.prototype[e]=function(n){n=n===r?1:br(gs(n),0);var i=this.__filtered__&&!t?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,g),type:e+(i.__dir__<0?"Right":"")}),i},Wr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Dt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Dt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Dt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Fn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(lo(e)))},Wr.prototype.slice=function(e,t){e=gs(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Wr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=gs(t))<0?n.dropRight(-t):n.take(t-e)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(g)},xn(Wr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Pr[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Pr.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Wr,d=s[0],c=l||Ya(t),u=function(e){var t=o.apply(Pr,_t([e],s));return i&&f?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(l=c=!1);var f=this.__chain__,h=!!this.__actions__.length,g=a&&!f,p=l&&!h;if(!a&&c){t=p?t:new Wr(this);var m=e.apply(t,s);return m.__actions__.push({func:ha,args:[u],thisArg:r}),new Hr(m,f)}return g&&p?e.apply(this,s):(m=this.thru(u),g?i?m.value()[0]:m.value():m)})})),Dt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Fe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Ya(i)?i:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Ae.call(Fr,n)||(Fr[n]=[]),Fr[n].push({name:t,func:r})}})),Fr[Li(r,2).name]=[{name:"wrapper",func:r}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ti(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ti(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ti(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,i=r?e.length:0,o=function(e,t,r){var n=-1,i=r.length;for(;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,d=n?s:a-1,c=this.__iteratees__,u=c.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&i==l&&h==l)return gi(e,this.__actions__);var g=[];e:for(;l--&&f<h;){for(var p=-1,m=e[d+=t];++p<u;){var b=c[p],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}g[f++]=m}return g},Pr.prototype.at=ga,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===r&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Pr.prototype.plant=function(e){for(var t,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Pr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wr){var t=e;return this.__actions__.length&&(t=new Wr(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ea],thisArg:r}),new Hr(t,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Ze&&(Pr.prototype[Ze]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,gt._=pr):ht._=pr}).call(Oi)}(qj,qj.exports);var Xj=qj.exports;const Gj=U.default.forwardRef(((r,n)=>{var{value:i,readOnly:o,"data-testid":a,maskRange:s,unmaskRange:l,maskRegex:d,maskTransformer:c,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:g,maskChar:p="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:C,onChange:S,onFocus:j,onBlur:k,onTryAgain:D}=r,E=ki(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=o&&Xj.isEmpty(i),[F,O]=t.useState(!b),[I,M]=t.useState(i||"");t.useEffect((()=>{M(i||"")}),[i]);const _=e=>{P(!1),j&&j(e)},A=e=>{P(!0),k&&k(e)},B=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},R=()=>{o&&D&&D()},z=()=>{P(!F)},P=e=>{O(e),e?x&&x():C&&C()},L=()=>!(null==I?void 0:I.toString().length)||b,N=()=>{if(T)return e.jsx(e.Fragment,{});const t=L();return e.jsx(Pj,{"data-testid":"icon-"+(F?"masked":"unmasked"),onClick:t?void 0:z,$isDisabled:t,$inactiveColor:g,$activeColor:h,children:F?f:u})};return e.jsx("div",{"aria-busy":"loading"===y,"aria-live":"polite",children:(()=>{if(o)switch(y){case"fail":return e.jsxs(Kj,{onClick:R,"data-testid":"try-again-button",children:[e.jsxs(Yj,{children:[e.jsx(Vj,{}),e.jsx(Uj,{children:"Error"})]}),e.jsx(Wj,{children:"Try again?"})]});case"loading":return e.jsxs(Lj,{children:[e.jsx(Hj,{}),e.jsx(Nj,{children:"Retrieving..."})]})}return e.jsx(zj,Object.assign({ref:n,"data-testid":`${a||"masked-input"}${F?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:o?void 0:_,onBlur:o?void 0:A,onClick:o?z:void 0,onChange:B,value:T?"-":F&&!b?Rc.maskValue(I,{maskChar:p,maskRange:s,unmaskRange:l,maskRegex:d,maskTransformer:c}):I,readOnly:o,error:m,$isDisabled:L()},E))})()})})),Zj=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u}=t,f=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(Ux,{id:o,label:n,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,children:e.jsx(Gj,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},f))})})),Qj=q.default.div`
    font-weight: ${e=>e.$bold?gl.Spec["weight-semibold"]:gl.Spec["weight-regular"]};

    ${e=>e.$disabled?n.css`
                color: ${hl["text-disabled"]};
            `:e.$selected?n.css`
                color: ${hl["text-selected"]};
            `:n.css`
                color: ${hl.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nl(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Jj=q.default.div`
    color: ${hl["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nl(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?n.css`
                    ${gl["body-md-semibold"]}
                `:n.css`
                    ${gl["body-baseline-regular"]}
                `}
`,ek=q.default.span`
    font-weight: ${gl.Spec["weight-semibold"]};
`,tk=q.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return n.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return n.css`
                    ${Qj} {
                        display: inline;
                    }

                    ${Jj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,rk=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,nk=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ik=({bold:r,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:f="default"})=>{const h=n.useTheme(),g="small"===f?gl.Spec["body-size-md"]({theme:h}):gl.Spec["body-size-baseline"]({theme:h}),p=gl.Spec["font-family"]({theme:h}),{ref:m,width:b}=Ye(),v=t.useCallback((e=>{if("inline"!==i||!b)return!1;return Rc.getTextWidth(e,`${g} '${p}'`)>b*s-50}),[b,i,g,p,s]),y=t.useMemo((()=>v(o)),[v,o]),x=t.useMemo((()=>c&&v(c)),[v,c]),w=y||x?"next-line":i,$=t=>{if(!a)return t;const r=a.toLowerCase().trim(),n=t.toLowerCase().indexOf(r),i=n+a.length;return-1===n?t:e.jsxs(e.Fragment,{children:[o.slice(0,n),e.jsx(ek,{$variant:f,children:o.slice(n,i)}),o.slice(i)]})},C=t=>e.jsxs(e.Fragment,{children:[e.jsx(rk,{$maxLines:s,"aria-hidden":!0,children:$(t)}),e.jsx(nk,{$maxLines:s,"aria-hidden":!0,children:$(t)})]});return e.jsxs(tk,{ref:m,$labelDisplayType:w,$variant:f,children:[e.jsx(Qj,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&y?C(o):$(o)}),c&&e.jsx(Jj,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:i,children:"middle"===u&&x?C(c):c})]})};function ok(e){return()=>e}function ak(e){e()}function sk(e,t){return r=>e(t(r))}function lk(e,t){return()=>e(t)}function dk(e,t){return r=>e(t,r)}function ck(e){return void 0!==e}function uk(){}function fk(e,t){return t(e),e}function hk(e,t){return t(e)}function gk(...e){return e}function pk(e,t){return e(1,t)}function mk(e,t){e(0,t)}function bk(e){e(2)}function vk(e){return e(4)}function yk(e,t){return pk(e,dk(t,0))}function xk(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function wk(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function $k(e,t){return e===t}function Ck(e=$k){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Sk(e){return t=>r=>{e(r)&&t(r)}}function jk(e){return t=>sk(t,e)}function kk(e){return t=>()=>{t(e)}}function Dk(e,...t){const r=function(...e){return t=>e.reduceRight(hk,t)}(...t);return(t,n)=>{switch(t){case 2:return void bk(e);case 1:return pk(e,r(n))}}}function Ek(e,t){return r=>n=>{r(t=e(t,n))}}function Tk(e){return t=>r=>{e>0?e--:t(r)}}function Fk(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Ok(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);pk(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function Ik(e){let t=e;const r=_k();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Mk(e,t){return fk(Ik(t),(t=>yk(e,t)))}function _k(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Ak(e){return fk(_k(),(t=>yk(e,t)))}function Bk(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Rk(),singleton:r}}const Rk=()=>Symbol();function zk(...e){const t=_k(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);pk(e,(e=>{r[o]=e,n|=a,n===i&&mk(t,r)}))})),function(e,o){switch(e){case 2:return void bk(t);case 1:return n===i&&o(r),pk(t,o)}}}function Pk(e,t=$k){return Dk(e,Ck(t))}function Lk(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(ak)}}(...e.map((e=>pk(e,r))))}}}var Nk=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Nk||{});const Hk={0:"debug",3:"error",1:"log",2:"warn"},Wk=Bk((()=>{const e=Ik(3);return{log:Ik(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:vk(e))&&console[Hk[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Yk(e,t,r){return Vk(e,t,r).callbackRef}function Vk(e,t,r){const n=U.default.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const o=U.default.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(o.observe(e),n.current=e):(n.current&&o.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Uk(e,t,r,n,i,o,a,s,l){const d=U.default.useCallback((r=>{const l=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),d=t(i,r);if(0===d&&n("Zero-sized element, this should not happen",{child:i},Nk.ERROR),d===l)continue;const c=o[o.length-1];0===o.length||c.size!==d||c.endIndex!==s-1?o.push({endIndex:s,size:d,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,s?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?s?a.scrollLeft:a.scrollTop:c?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?d.scrollLeft:d.scrollTop,f=a?s?a.scrollWidth:a.scrollHeight:c?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?d.scrollWidth:d.scrollHeight,h=a?s?a.offsetWidth:a.offsetHeight:c?s?window.innerWidth:window.innerHeight:s?d.offsetWidth:d.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==o||o(s?Kk("column-gap",getComputedStyle(r).columnGap,i):Kk("row-gap",getComputedStyle(r).rowGap,i)),null!==l&&e(l)}),[e,t,i,o,a,n]);return Vk(d,r,l)}function Kk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Nk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function qk(e,t,r){const n=U.default.useRef(null),i=U.default.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:o,ref:a}=Vk(i,!0,r),s=U.default.useCallback((()=>{i(a.current)}),[i,a]);return U.default.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),o}const Xk=Bk((()=>{const e=_k(),t=_k(),r=Ik(0),n=_k(),i=Ik(0),o=_k(),a=_k(),s=Ik(0),l=Ik(0),d=Ik(0),c=Ik(0),u=_k(),f=_k(),h=Ik(!1),g=Ik(!1),p=Ik(!1);return yk(Dk(e,jk((({scrollTop:e})=>e))),t),yk(Dk(e,jk((({scrollHeight:e})=>e))),a),yk(t,i),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:g,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),Gk={lvl:0};function Zk(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function Qk(e){return e===Gk}function Jk(e,t){if(!Qk(e))return t===e.k?e.v:t<e.k?Jk(e.l,t):Jk(e.r,t)}function eD(e,t,r="k"){if(Qk(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=eD(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return eD(e.l,t,r)}function tD(e,t,r){return Qk(e)?fD(t,r,1):t===e.k?lD(e,{k:t,v:r}):t<e.k?hD(lD(e,{l:tD(e.l,t,r)})):hD(lD(e,{r:tD(e.r,t,r)}))}function rD(){return Gk}function nD(e,t,r){if(Qk(e))return[];return function(e){return Zk(e,(({k:e,v:t})=>({index:e,value:t})))}(aD(e,eD(e,t)[0],r))}function iD(e,t){if(Qk(e))return Gk;const{k:r,l:n,r:i}=e;if(t===r){if(Qk(n))return i;if(Qk(i))return n;{const[t,r]=uD(n);return sD(lD(e,{k:t,l:dD(n),v:r}))}}return sD(lD(e,t<r?{l:iD(n,t)}:{r:iD(i,t)}))}function oD(e){return Qk(e)?[]:[...oD(e.l),{k:e.k,v:e.v},...oD(e.r)]}function aD(e,t,r){if(Qk(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(aD(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(aD(o,t,r))),s}function sD(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(cD(t))return gD(lD(e,{lvl:r-1}));if(!Qk(t)&&!Qk(t.r))return lD(t.r,{l:lD(t,{r:t.r.l}),lvl:r,r:lD(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(cD(e))return pD(lD(e,{lvl:r-1}));if(Qk(n)||Qk(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=cD(t)?n.lvl-1:n.lvl;return lD(t,{l:lD(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:pD(lD(n,{l:t.r,lvl:i}))})}}function lD(e,t){return fD(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function dD(e){return Qk(e.r)?e.l:sD(lD(e,{r:dD(e.r)}))}function cD(e){return Qk(e)||e.lvl>e.r.lvl}function uD(e){return Qk(e.r)?[e.k,e.v]:uD(e.r)}function fD(e,t,r,n=Gk,i=Gk){return{k:e,l:n,lvl:r,r:i,v:t}}function hD(e){return pD(gD(e))}function gD(e){const{l:t}=e;return Qk(t)||t.lvl!==e.lvl?e:lD(t,{r:lD(e,{l:t.r})})}function pD(e){const{lvl:t,r:r}=e;return Qk(r)||Qk(r.r)||r.lvl!==t||r.r.lvl!==t?e:lD(r,{l:lD(e,{r:r.l}),lvl:t+1})}function mD(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function bD(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const vD=Bk((()=>({recalcInProgress:Ik(!1)})),[],{singleton:!0});function yD(e,t,r){return e[xD(e,t,r)]}function xD(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function wD(e,t){return Math.round(e.getBoundingClientRect()[t])}function $D(e){return!Qk(e.groupOffsetTree)}function CD({index:e},t){return t===e?0:t<e?-1:1}function SD({offset:e},t){return t===e?0:t<e?-1:1}function jD(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=yD(t,e,CD),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function kD(e,t){if(!$D(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function DD(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=kD("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function ED(e,t,r,n=0){return n>0&&(t=Math.max(t,yD(e,n,CD).offset)),Zk(function(e,t,r,n){const i=xD(e,t,n),o=xD(e,r,n,i);return e.slice(i,o+1)}(e,t,r,SD),ID)}function TD(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,Nk.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&Qk(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>tD(tD(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Qk(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),Qk(e)){e=tD(e,0,i);continue}const a=nD(e,o-1,t+1);if(a.some(MD(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=iD(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=tD(e,t+1,o));l&&(e=tD(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=OD(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>tD(e,t,jD(t,u,i))),rD()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function FD(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function OD(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=xD(i,t-1,CD),s=i[l].offset;const e=eD(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===eD(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of nD(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function ID(e){return{index:e.index,value:e}}function MD(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const _D={offsetHeight:"height",offsetWidth:"width"},AD=Bk((([{log:e},{recalcInProgress:t}])=>{const r=_k(),n=_k(),i=Mk(n,0),o=_k(),a=_k(),s=Ik(0),l=Ik([]),d=Ik(void 0),c=Ik(void 0),u=Ik(((e,t)=>wD(e,_D[t]))),f=Ik(void 0),h=Ik(0),g={groupIndices:[],groupOffsetTree:rD(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:rD()},p=Mk(Dk(r,Ok(l,e,h),Ek(TD,g),Ck()),g),m=Mk(Dk(l,Ck(),Ek(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),jk((({prev:e})=>e))),[]);yk(Dk(l,Sk((e=>e.length>0)),Ok(p,h),jk((([e,t,r])=>{const n=e.reduce(((e,n,i)=>tD(e,n,jD(n,t.offsetTree,r)||i)),rD());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),yk(Dk(n,Ok(p),Sk((([e,{lastIndex:t}])=>e<t)),jk((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),yk(d,c);const b=Mk(Dk(d,jk((e=>void 0===e))),!0);yk(Dk(c,Sk((e=>void 0!==e&&Qk(vk(p).sizeTree))),jk((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Ak(Dk(r,Ok(p),Ek((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:g}),jk((e=>e.changed))));pk(Dk(s,Ek(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),jk((e=>e.diff))),(e=>{const{groupIndices:r}=vk(p);if(e>0)mk(t,!0),mk(o,e+FD(e,r));else if(e<0){const t=vk(m);t.length>0&&(e-=FD(-e,t)),mk(a,e)}})),pk(Dk(s,Ok(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Nk.ERROR)}));const y=Ak(o);yk(Dk(o,Ok(p),jk((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=Jk(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=oD(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return oD(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=Ak(Dk(a,Ok(p,h),jk((([e,{offsetTree:t},r])=>jD(-e,t,r)))));return yk(Dk(a,Ok(p,h),jk((([e,t,r])=>{if(t.groupIndices.length>0){if(Qk(t.sizeTree))return t;let n=rD();const i=vk(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=oD(t.sizeTree).reduce(((t,{k:r,v:n})=>tD(t,Math.max(0,r+e),n)),n),o!==-e){n=tD(n,0,Jk(t.sizeTree,s));n=tD(n,1,eD(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...OD(t.offsetTree,0,n,r)}}{const n=oD(t.sizeTree).reduce(((t,{k:r,v:n})=>tD(t,Math.max(0,r+e),n)),rD());return{...t,sizeTree:n,...OD(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:y,data:f,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),gk(Wk,vD),{singleton:!0});function BD(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const RD=Bk((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=_k(),a=_k(),s=Ak(Dk(o,jk(BD)));return yk(Dk(s,jk((e=>e.totalCount))),r),yk(Dk(s,jk((e=>e.groupIndices))),e),yk(Dk(zk(i,t,n),Sk((([e,t])=>$D(t))),jk((([e,t,r])=>eD(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Ck(),jk((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),gk(AD,Xk)),zD=Bk((([{log:e}])=>{const t=Ik(!1),r=Ak(Dk(t,Sk((e=>e)),Ck()));return pk(t,(t=>{t&&vk(e)("props updated",{},Nk.DEBUG)})),{didMount:r,propsReady:t}}),gk(Wk),{singleton:!0}),PD=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function LD(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!PD)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const ND=Bk((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:f}])=>{const h=_k(),g=_k(),p=Ik(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),mk(l,!1)}return yk(Dk(h,Ok(r,u,n,p,s,a,f),Ok(e,o,i),jk((([[e,r,n,i,o,a,s,d],u,f,p])=>{const x=LD(e),{align:w,behavior:$,offset:C}=x,S=i-1,j=DD(x,r,S);let k=jD(j,r.offsetTree,u)+a;"end"===w?(k+=f+eD(r.sizeTree,j)[1]-n+p,j===S&&(k+=s)):"center"===w?k+=(f+eD(r.sizeTree,j)[1]-n+p)/2:k-=o,C&&(k+=C);const D=t=>{y(),t?(d("retrying to scroll to",{location:e},Nk.DEBUG),mk(h,e)):(mk(g,!0),d("list did not change, scroll successful",{},Nk.DEBUG))};if(y(),"smooth"===$){let e=!1;v=pk(t,(t=>{e=e||t})),m=xk(c,(()=>{D(e)}))}else m=xk(Dk(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),D);return b=setTimeout((()=>{y()}),1200),mk(l,!0),d("scrolling from index to",{behavior:$,index:j,top:k},Nk.DEBUG),{behavior:$,top:k}}))),d),{scrollTargetReached:g,scrollToIndex:h,topListHeight:p}}),gk(AD,Xk,Wk),{singleton:!0});function HD(e,t){0==e?t():requestAnimationFrame((()=>{HD(e-1,t)}))}function WD(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const YD=Bk((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=Ik(!0),l=Ik(0),d=Ik(!0);return yk(Dk(a,Ok(l),Sk((([e,t])=>!!t)),kk(!1)),s),yk(Dk(a,Ok(l),Sk((([e,t])=>!!t)),kk(!1)),d),pk(Dk(zk(t,a),Ok(s,r,e,d),Sk((([[,e],t,{sizeTree:r},n,i])=>e&&(!Qk(r)||ck(n))&&!t&&!i)),Ok(l)),(([,e])=>{xk(i,(()=>{mk(d,!0)})),HD(4,(()=>{xk(n,(()=>{mk(s,!0)})),mk(o,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),gk(AD,Xk,ND,zD),{singleton:!0});function VD(e,t){return Math.abs(e-t)<1.01}const UD="up",KD="down",qD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},XD=Bk((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=Ik(!1),s=Ik(!0),l=_k(),d=_k(),c=Ik(4),u=Ik(0),f=Mk(Dk(Lk(Dk(Pk(i),Tk(1),kk(!0)),Dk(Pk(i),Tk(1),kk(!1),wk(100))),Ck()),!1),h=Mk(Dk(Lk(Dk(r,kk(!0)),Dk(r,kk(!1),wk(200))),Ck()),!1);yk(Dk(zk(Pk(i),Pk(u)),jk((([e,t])=>e<=t)),Ck()),s),yk(Dk(s,Fk(50)),d);const g=Ak(Dk(zk(n,Pk(o),Pk(t),Pk(e),Pk(c)),Ek(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),qD),Ck(((e,t)=>e&&e.atBottom===t.atBottom)))),p=Mk(Dk(n,Ek(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(VD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Sk((e=>e.changed)),jk((e=>e.jump))),0);yk(Dk(g,jk((e=>e.atBottom))),a),yk(Dk(a,Fk(50)),l);const m=Ik(KD);yk(Dk(n,jk((({scrollTop:e})=>e)),Ck(),Ek(((e,t)=>vk(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?UD:KD,prevScrollTop:t}),{direction:KD,prevScrollTop:0}),jk((e=>e.direction))),m),yk(Dk(n,Fk(50),kk("none")),m);const b=Ik(0);return yk(Dk(f,Sk((e=>!e)),kk(0)),b),yk(Dk(i,Fk(100),Ok(f),Sk((([e,t])=>!!t)),Ek((([e,t],[r])=>[t,r]),[0,0]),jk((([e,t])=>t-e))),b),{atBottomState:g,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:p,scrollDirection:m,scrollVelocity:b}}),gk(Xk)),GD="top",ZD="bottom",QD="none";function JD(e,t,r){return"number"==typeof e?r===UD&&t===GD||r===KD&&t===ZD?e:0:r===UD?t===GD?e.main:e.reverse:t===ZD?e.main:e.reverse}function eE(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const tE=Bk((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=_k(),a=Ik(0),s=Ik(0),l=Ik(0),d=Mk(Dk(zk(Pk(n),Pk(i),Pk(r),Pk(o,bD),Pk(l),Pk(a),Pk(t),Pk(e),Pk(s)),jk((([e,t,r,[n,i],o,a,s,l,d])=>{const c=e-l,u=a+s,f=Math.max(r-c,0);let h=QD;const g=eE(d,GD),p=eE(d,ZD);return n-=l,i+=r+s,(n+=r+s)>e+u-g&&(h=UD),(i-=l)<e-f+t+p&&(h=KD),h!==QD?[Math.max(c-r-JD(o,GD,h)-g,0),c-f-s+t+JD(o,ZD,h)+p]:null})),Sk((e=>null!=e)),Ck(bD)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:d}}),gk(Xk),{singleton:!0});const rE={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function nE(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,f=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:o,items:oE(e,i,o),offsetBottom:h,offsetTop:d,top:f,topItems:oE(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function iE(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=WD(t,s);return nE(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function oE(e,t,r){if(0===e.length)return[];if(!$D(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=nD(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const aE=Bk((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},f,{didMount:h},{recalcInProgress:g}])=>{const p=Ik([]),m=Ik(0),b=_k();yk(o.topItemsIndexes,p);const v=Mk(Dk(zk(h,g,Pk(l,bD),Pk(i),Pk(n),Pk(d),c,Pk(p),Pk(t),Pk(r),e),Sk((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),jk((([,,[e,t],r,n,i,o,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:f}=c,h=vk(m);if(0===r)return{...rE,totalCount:r};if(0===e&&0===t)return 0===h?{...rE,totalCount:r}:iE(h,i,n,s,l,d||[]);if(Qk(f))return h>0?null:nE(function(e,t,r){if($D(t)){const n=kD(e,t);return[{index:eD(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(WD(i,r),c,d),[],r,l,c,s);const g=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of nD(f,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)g.push({data:null==d?void 0:d[e],index:e,offset:r,size:i}),r+=i}}if(!o)return nE([],g,r,l,c,s);const p=a.length>0?a[a.length-1]+1:0,b=ED(u,e,t,p);if(0===b.length)return null;const v=r-1;return nE(fk([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<p&&(o+=(p-a)*s,a=p);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(o>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:o,size:s}),o+=s+l}})),g,r,l,c,s)})),Sk((e=>null!==e)),Ck()),rE);yk(Dk(e,Sk(ck),jk((e=>null==e?void 0:e.length))),i),yk(Dk(v,jk((e=>e.topListHeight))),u),yk(u,s),yk(Dk(v,jk((e=>[e.top,e.bottom]))),a),yk(Dk(v,jk((e=>e.items))),b);const y=Ak(Dk(v,Sk((({items:e})=>e.length>0)),Ok(i,e),Sk((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),jk((([,e,t])=>[e-1,t])),Ck(bD),jk((([e])=>e)))),x=Ak(Dk(v,Fk(200),Sk((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),jk((({items:e})=>e[0].index)),Ck())),w=Ak(Dk(v,Sk((({items:e})=>e.length>0)),jk((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Ck(mD)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:p,...f}}),gk(AD,RD,tE,YD,ND,XD,zD,vD),{singleton:!0}),sE=Bk((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=_k(),a=Mk(Dk(zk(r,e,n,t,i),jk((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return yk(Pk(a),o),{totalListHeight:a,totalListHeightChanged:o}}),gk(Xk,aE),{singleton:!0}),lE=Bk((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Ik(!1),n=Mk(Dk(zk(r,e,t),Sk((([e])=>e)),jk((([,e,t])=>Math.max(0,e-t))),Fk(0),Ck()),0);return{alignToBottom:r,paddingTopAddition:n}}),gk(Xk,sE),{singleton:!0});function dE(e){return!!e&&("smooth"===e?"smooth":"auto")}const cE=Bk((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=Ik(!1),u=_k();let f=null;function h(e){mk(i,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=xk(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(vk(l)("scrolling to bottom due to increased size",{},Nk.DEBUG),h("auto"))}));setTimeout(t,100)}return pk(Dk(zk(Dk(Pk(t),Tk(1)),a),Ok(Pk(c),n,o,d),jk((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?dE(e(t)):t&&dE(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Sk((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=xk(e,(()=>{vk(l)("following output to ",{totalCount:r},Nk.DEBUG),h(t),f=null}))})),pk(Dk(zk(Pk(c),t,s),Sk((([e,,t])=>e&&t)),Ek((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Sk((({refreshed:e})=>e)),Ok(c,t)),(([,e])=>{vk(o)&&g(!1!==e)})),pk(u,(()=>{g(!1!==vk(c))})),pk(zk(Pk(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),gk(AD,XD,ND,YD,zD,Wk,Xk)),uE=Bk((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(yk(Dk(s,Ok(o),Sk((([,e])=>0!==e)),Ok(i,n,t,r,e),jk((([[,e],t,r,n,i,o=[]])=>iE(e,t,r,n,i,o)))),a),{})),gk(AD,YD,aE,zD),{singleton:!0}),fE=Bk((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Ik(0);return pk(Dk(e,Ok(n),Sk((([,e])=>0!==e)),jk((([,e])=>({top:e})))),(e=>{xk(Dk(r,Tk(1),Sk((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{mk(t,e)}))}))})),{initialScrollTop:n}}),gk(zD,Xk,aE),{singleton:!0}),hE=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,gE=Bk((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=_k();return yk(Dk(c,Ok(t,l,r,o,i,n,s),Ok(e),jk((([[e,t,r,n,i,o,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:f=hE,done:h,...g}=e,p=DD(e,t,n-1),m=jD(p,t.offsetTree,d)+i+o,b=f({itemBottom:m+eD(t.sizeTree,p)[1],itemTop:m,locationParams:{align:c,behavior:u,...g},viewportBottom:l+r-s,viewportTop:l+o});return b?h&&xk(Dk(a,Sk((e=>!e)),Tk(vk(a)?1:2)),h):h&&h(),b})),Sk((e=>null!==e))),d),{scrollIntoView:c}}),gk(AD,Xk,ND,aE,Wk),{singleton:!0}),pE=Bk((([{scrollVelocity:e}])=>{const t=Ik(!1),r=_k(),n=Ik(!1);return yk(Dk(e,Ok(n,t,r),Sk((([e,t])=>!!t)),jk((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),Ck()),t),pk(Dk(zk(t,e,r),Ok(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),gk(XD),{singleton:!0}),mE=Bk((([{scrollContainerState:e,scrollTo:t}])=>{const r=_k(),n=_k(),i=_k(),o=Ik(!1),a=Ik(void 0);return yk(Dk(zk(r,n),jk((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),yk(Dk(t,Ok(n),jk((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),gk(Xk)),bE=Bk((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=_k(),c=Ik(void 0),u=Ik(null),f=Ik(null);return yk(s,u),yk(l,f),pk(Dk(d,Ok(t,n,a,u,f,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return oD(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),yk(Dk(c,Sk(ck),jk(vE)),i),yk(Dk(o,Ok(c),Sk((([,e])=>void 0!==e)),Ck(),jk((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),gk(AD,Xk,YD,zD,mE));function vE(e){return{align:"start",index:0,offset:e.scrollTop}}const yE=Bk((([{topItemsIndexes:e}])=>{const t=Ik(0);return yk(Dk(t,Sk((e=>e>=0)),jk((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),gk(aE));function xE(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const wE=xE((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),$E=Bk((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:g}])=>{const p=Ak(Dk(l,Ok(a),Ek((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let d=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=s))),[d,i,a,l]}),[0,[],0,0]),Sk((([e])=>0!==e)),Ok(n,s,r,i,h,g),Sk((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===UD)),jk((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Nk.DEBUG),e)))));function m(r){r>0?(mk(t,{behavior:"auto",top:-r}),mk(e,0)):(mk(e,0),mk(t,{behavior:"auto",top:-r}))}return pk(Dk(p,Ok(e,o)),(([t,r,n])=>{n&&wE()?mk(e,r-t):m(-t)})),pk(Dk(zk(Mk(o,!1),e,g),Sk((([e,t,r])=>!e&&!r&&0!==t)),jk((([e,t])=>t)),Fk(1)),m),yk(Dk(u,jk((e=>({top:-e})))),t),pk(Dk(d,Ok(f,c),jk((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=Jk(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{mk(e,r),requestAnimationFrame((()=>{mk(t,{top:r}),requestAnimationFrame((()=>{mk(e,0),mk(g,!1)}))}))})),{deviation:e}}),gk(Xk,XD,aE,AD,Wk,vD)),CE=Bk((([e,t,r,n,i,o,a,s,l,d])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...d})),gk(tE,uE,zD,pE,sE,fE,lE,mE,gE,Wk)),SE=Bk((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:g},p,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},j])=>(yk(x.rangeChanged,j.scrollSeekRangeChanged),yk(Dk(j.windowViewportRect,jk((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:g,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...j,...p,sizes:l,...m})),gk(AD,YD,Xk,bE,cE,aE,ND,$E,yE,RD,CE));function jE(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const kE=typeof document<"u"?U.default.useLayoutEffect:U.default.useEffect;function DE(t,r,n){const i=Object.keys(r.required||{}),o=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),s=Object.keys(r.events||{}),l=U.default.createContext({});function d(e,t){e.propsReady&&mk(e.propsReady,!1);for(const n of i){mk(e[r.required[n]],t[n])}for(const n of o)if(n in t){mk(e[r.optional[n]],t[n])}e.propsReady&&mk(e.propsReady,!0)}function c(e){return s.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?r===o?void 0:(n(),r=o,t=pk(e,o),t):(n(),uk);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const u=U.default.forwardRef(((u,f)=>{const{children:h,...g}=u,[p]=U.default.useState((()=>fk(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{d(e,g)})))),[m]=U.default.useState(lk(c,p));kE((()=>{for(const e of s)e in g&&pk(m[e],g[e]);return()=>{Object.values(m).map(bk)}}),[g,m,p]),kE((()=>{d(p,g)})),U.default.useImperativeHandle(f,ok(function(e){return a.reduce(((t,n)=>(t[n]=t=>{mk(e[r.methods[n]],t)},t)),{})}(p)));const b=n;return e.jsx(l.Provider,{value:p,children:n?e.jsx(b,{...jE([...i,...o,...s],g),children:h}):h})})),f=U.default.version.startsWith("18")?e=>{const t=U.default.useContext(l)[e],r=U.default.useCallback((e=>pk(t,e)),[t]);return U.default.useSyncExternalStore(r,(()=>vk(t)),(()=>vk(t)))}:e=>{const t=U.default.useContext(l)[e],[r,n]=U.default.useState(lk(vk,t));return kE((()=>pk(t,(e=>{e!==r&&n(ok(e))}))),[t,r]),r};return{Component:u,useEmitter:(e,t)=>{const r=U.default.useContext(l)[e];kE((()=>pk(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>U.default.useCallback(dk(mk,U.default.useContext(l)[e]),[e])}}const EE=U.default.createContext(void 0),TE=U.default.createContext(void 0),FE=typeof document<"u"?U.default.useLayoutEffect:U.default.useEffect;function OE(e,t,r,n=uk,i,o){const a=U.default.useRef(null),s=U.default.useRef(null),l=U.default.useRef(null),d=U.default.useCallback((r=>{const n=r.target,i=n===window||n===document,a=o?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,d=o?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,c=o?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:d,scrollTop:Math.max(a,0),viewportHeight:c})};r.suppressFlushSync?u():K.default.flushSync(u),null!==s.current&&(a===s.current||a<=0||a===d-c)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return U.default.useEffect((()=>{const e=i||a.current;return n(i||a.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[a,d,r,n,i]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(o?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let d,c,u;n===window?(c=Math.max(wD(document.documentElement,o?"width":"height"),o?document.documentElement.scrollWidth:document.documentElement.scrollHeight),d=o?window.innerWidth:window.innerHeight,u=o?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[o?"scrollWidth":"scrollHeight"],d=wD(n,o?"width":"height"),u=n[o?"scrollLeft":"scrollTop"]);const f=c-d;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),VD(d,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:d}),void(i&&t(!0));i?(s.current=r.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,o&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const IE="-webkit-sticky",ME="sticky",_E=xE((()=>{if(typeof document>"u")return ME;const e=document.createElement("div");return e.style.position=IE,e.style.position===IE?IE:ME}));function AE(e){return e}const BE=Bk((()=>{const e=Ik((e=>`Item ${e}`)),t=Ik(null),r=Ik((e=>`Group ${e}`)),n=Ik({}),i=Ik(AE),o=Ik("div"),a=Ik(uk),s=(e,t=null)=>Mk(Dk(n,jk((t=>t[e])),Ck()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),RE=Bk((([e,t])=>({...e,...t})),gk(SE,BE)),zE=({height:t})=>e.jsx("div",{style:{height:t}}),PE={overflowAnchor:"none",position:_E(),zIndex:1},LE={overflowAnchor:"none"},NE={...LE,display:"inline-block",height:"100%"},HE=U.default.memo((function({showTopList:r=!1}){const n=oT("listState"),i=aT("sizeRanges"),o=oT("useWindowScroll"),a=oT("customScrollParent"),s=aT("windowScrollContainerState"),l=aT("scrollContainerState"),d=a||o?s:l,c=oT("itemContent"),u=oT("context"),f=oT("groupContent"),h=oT("trackItemSizes"),g=oT("itemSize"),p=oT("log"),m=aT("gap"),b=oT("horizontalDirection"),{callbackRef:v}=Uk(i,g,h,r?uk:d,p,m,a,b,oT("skipAnimationFrameInResizeObserver")),[y,x]=U.default.useState(0);iT("deviation",(e=>{y!==e&&x(e)}));const w=oT("EmptyPlaceholder"),$=oT("ScrollSeekPlaceholder")||zE,C=oT("ListComponent"),S=oT("ItemComponent"),j=oT("GroupComponent"),k=oT("computeItemKey"),D=oT("isSeeking"),E=oT("groupIndices").length>0,T=oT("alignToBottom"),F=oT("initialItemFinalLocationReached"),O=r?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:T?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:T?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...F?{}:{visibility:"hidden"}};return!r&&0===n.totalCount&&w?e.jsx(w,{...KE(w,u)}):e.jsx(C,{...KE(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:O,children:(r?n.topItems:n.items).map((e=>{const r=e.originalIndex,i=k(r+n.firstItemIndex,e.data,u);return D?t.createElement($,{...KE($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(j,{...KE(j,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:i,style:PE},f(e.index,u)):t.createElement(S,{...KE(S,u),...qE(S,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:b?NE:LE},E?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),WE={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},YE={outline:"none",overflowX:"auto",position:"relative"},VE=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),UE={position:_E(),top:0,width:"100%",zIndex:1};function KE(e,t){if("string"!=typeof e)return{context:t}}function qE(e,t){return{item:"string"==typeof e?void 0:t}}const XE=U.default.memo((function(){const t=oT("HeaderComponent"),r=aT("headerHeight"),n=oT("HeaderFooterTag"),i=Yk(U.default.useMemo((()=>e=>{r(wD(e,"height"))}),[r]),!0,oT("skipAnimationFrameInResizeObserver")),o=oT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...KE(t,o)})}):null})),GE=U.default.memo((function(){const t=oT("FooterComponent"),r=aT("footerHeight"),n=oT("HeaderFooterTag"),i=Yk(U.default.useMemo((()=>e=>{r(wD(e,"height"))}),[r]),!0,oT("skipAnimationFrameInResizeObserver")),o=oT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...KE(t,o)})}):null}));function ZE({useEmitter:t,useEmitterValue:r,usePublisher:n}){return U.default.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:g,scrollToCallback:p}=OE(s,d,l,c,void 0,f);return t("scrollTo",p),t("scrollBy",h),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...f?YE:WE,...o},tabIndex:0,...a,...KE(l,u),children:i})}))}function QE({useEmitter:t,useEmitterValue:r,usePublisher:n}){return U.default.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:g,scrollerRef:p,scrollToCallback:m}=OE(s,d,l,uk,f);return FE((()=>(p.current=f||window,()=>{p.current=null})),[p,f]),t("windowScrollTo",m),t("scrollBy",g),e.jsx(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==c?{height:c+u}:{}},...a,...KE(l,h),children:i})}))}const JE=({children:t})=>{const r=U.default.useContext(EE),n=aT("viewportHeight"),i=aT("fixedItemHeight"),o=oT("alignToBottom"),a=oT("horizontalDirection"),s=Yk(U.default.useMemo((()=>sk(n,(e=>wD(e,a?"width":"height")))),[n,a]),!0,oT("skipAnimationFrameInResizeObserver"));return U.default.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:VE(o),children:t})},eT=({children:t})=>{const r=U.default.useContext(EE),n=aT("windowViewportRect"),i=aT("fixedItemHeight"),o=oT("customScrollParent"),a=qk(n,o,oT("skipAnimationFrameInResizeObserver")),s=oT("alignToBottom");return U.default.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"window",ref:a,style:VE(s),children:t})},tT=({children:t})=>{const r=oT("TopItemListComponent")||"div",n=oT("headerHeight"),i={...UE,marginTop:`${n}px`},o=oT("context");return e.jsx(r,{style:i,...KE(r,o),children:t})},rT=U.default.memo((function(t){const r=oT("useWindowScroll"),n=oT("topItemsIndexes").length>0,i=oT("customScrollParent"),o=oT("context"),a=i||r?lT:sT,s=i||r?eT:JE;return e.jsxs(a,{...t,...KE(a,o),children:[n&&e.jsx(tT,{children:e.jsx(HE,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(XE,{}),e.jsx(HE,{}),e.jsx(GE,{})]})]})})),{Component:nT,useEmitter:iT,useEmitterValue:oT,usePublisher:aT}=DE(RE,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},rT),sT=ZE({useEmitter:iT,useEmitterValue:oT,usePublisher:aT}),lT=QE({useEmitter:iT,useEmitterValue:oT,usePublisher:aT}),dT=nT,cT={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},uT={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:fT,floor:hT,max:gT,min:pT,round:mT}=Math;function bT(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function vT(e,t){return e&&e.width===t.width&&e.height===t.height}function yT(e,t){return e&&e.column===t.column&&e.row===t.row}const xT=Bk((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},f,h,{didMount:g,propsReady:p},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Ik(0),C=Ik(0),S=Ik(cT),j=Ik({height:0,width:0}),k=Ik({height:0,width:0}),D=_k(),E=_k(),T=Ik(0),F=Ik(null),O=Ik({column:0,row:0}),I=_k(),M=_k(),_=Ik(!1),A=Ik(0),B=Ik(!0),R=Ik(!1),z=Ik(!1);pk(Dk(g,Ok(A),Sk((([e,t])=>!!t))),(()=>{mk(B,!1)})),pk(Dk(zk(g,B,k,j,A,R),Sk((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{mk(R,!0),HD(1,(()=>{mk(D,e)})),xk(Dk(d),(()=>{mk(t,[0,0]),mk(B,!0)}))})),yk(Dk(M,Sk((e=>null!=e&&e.scrollTop>0)),kk(0)),C),pk(Dk(g,Ok(M),Sk((([,e])=>null!=e))),(([,e])=>{e&&(mk(j,e.viewport),mk(k,e.item),mk(O,e.gap),e.scrollTop>0&&(mk(_,!0),xk(Dk(d,Tk(1)),(e=>{mk(_,!1)})),mk(l,{top:e.scrollTop})))})),yk(Dk(j,jk((({height:e})=>e))),u),yk(Dk(zk(Pk(j,vT),Pk(k,vT),Pk(O,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Pk(d)),jk((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),yk(Dk(zk(Pk($),n,Pk(O,yT),Pk(k,vT),Pk(j,vT),Pk(F),Pk(C),Pk(_),Pk(B),Pk(A)),Sk((([,,,,,,,e])=>!e)),jk((([e,[t,r],n,i,o,a,s,,l,d])=>{const{column:c,row:u}=n,{height:f,width:h}=i,{width:g}=o;if(0===s&&(0===e||0===g))return cT;if(0===h){const t=WD(d,e);return function(e){return{...uT,items:e}}(bT(t,t+Math.max(s-1,0),a))}const p=wT(g,h,c);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=p*hT((t+u)/(f+u)),b=p*fT((r+u)/(f+u))-1,b=pT(e-1,gT(b,p-1)),m=pT(b,gT(0,m))):(m=0,b=-1);const v=bT(m,b,a),{bottom:y,top:x}=$T(o,n,i,v),w=fT(e/p);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),yk(Dk(F,Sk((e=>null!==e)),jk((e=>e.length))),$),yk(Dk(zk(j,k,S,O),Sk((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),jk((([e,t,{items:r},n])=>{const{bottom:i,top:o}=$T(e,n,t,r);return[o,i]})),Ck(bD)),t);const P=Ik(!1);yk(Dk(d,Ok(P),jk((([e,t])=>t||0!==e))),P);const L=Ak(Dk(zk(S,$),Sk((([{items:e}])=>e.length>0)),Ok(P),Sk((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),jk((([[,e]])=>e-1)),Ck())),N=Ak(Dk(Pk(S),Sk((({items:e})=>e.length>0&&0===e[0].index)),kk(0),Ck())),H=Ak(Dk(Pk(S),Ok(_),Sk((([{items:e},t])=>e.length>0&&!t)),jk((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Ck(mD),Fk(0)));yk(H,h.scrollSeekRangeChanged),yk(Dk(D,Ok(j,k,$,O),jk((([e,t,r,n,i])=>{const o=LD(e),{align:a,behavior:s,offset:l}=o;let d=o.index;"LAST"===d&&(d=n-1),d=gT(0,d,pT(n-1,d));let c=CT(t,i,r,d);return"end"===a?c=mT(c-t.height+r.height):"center"===a&&(c=mT(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const W=Mk(Dk(S,jk((e=>e.offsetBottom+e.bottom))),0);return yk(Dk(x,jk((e=>({height:e.visibleHeight,width:e.visibleWidth})))),j),{customScrollParent:m,data:F,deviation:T,footerHeight:i,gap:O,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:E,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:j,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:A,totalListHeight:W,...f,endReached:L,propsReady:p,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:_,...w}}),gk(tE,Xk,XD,pE,zD,mE,Wk));function wT(e,t,r){return gT(1,hT((e+r)/(hT(t)+r)))}function $T(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=CT(e,t,r,n[0].index);return{bottom:CT(e,t,r,n[n.length-1].index)+i,top:o}}function CT(e,t,r,n){const i=wT(e.width,r.width,t.column),o=hT(n/i),a=o*r.height+gT(0,o-1)*t.row;return a>0?a+t.row:a}const ST=Bk((()=>{const e=Ik((e=>`Item ${e}`)),t=Ik({}),r=Ik(null),n=Ik("virtuoso-grid-item"),i=Ik("virtuoso-grid-list"),o=Ik(AE),a=Ik("div"),s=Ik(uk),l=(e,r=null)=>Mk(Dk(t,jk((t=>t[e])),Ck()),r),d=Ik(!1),c=Ik(!1);return yk(Pk(c),d),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),jT=Bk((([e,t])=>({...e,...t})),gk(xT,ST)),kT=U.default.memo((function(){const r=_T("gridState"),n=_T("listClassName"),i=_T("itemClassName"),o=_T("itemContent"),a=_T("computeItemKey"),s=_T("isSeeking"),l=AT("scrollHeight"),d=_T("ItemComponent"),c=_T("ListComponent"),u=_T("ScrollSeekPlaceholder"),f=_T("context"),h=AT("itemDimensions"),g=AT("gap"),p=_T("log"),m=_T("stateRestoreInProgress"),b=AT("reportReadyState"),v=Yk(U.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}g({column:zT("column-gap",getComputedStyle(e).columnGap,p),row:zT("row-gap",getComputedStyle(e).rowGap,p)})}),[l,h,g,p]),!0,!1);return FE((()=>{r.itemHeight>0&&r.itemWidth>0&&b(!0)}),[r]),m?null:e.jsx(c,{className:n,ref:v,...KE(c,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((n=>{const l=a(n.index,n.data,f);return s?e.jsx(u,{...KE(u,f),height:r.itemHeight,index:n.index,width:r.itemWidth},l):t.createElement(d,{...KE(d,f),className:i,"data-index":n.index,key:l},o(n.index,n.data,f))}))})})),DT=U.default.memo((function(){const t=_T("HeaderComponent"),r=AT("headerHeight"),n=_T("headerFooterTag"),i=Yk(U.default.useMemo((()=>e=>{r(wD(e,"height"))}),[r]),!0,!1),o=_T("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...KE(t,o)})}):null})),ET=U.default.memo((function(){const t=_T("FooterComponent"),r=AT("footerHeight"),n=_T("headerFooterTag"),i=Yk(U.default.useMemo((()=>e=>{r(wD(e,"height"))}),[r]),!0,!1),o=_T("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...KE(t,o)})}):null})),TT=({children:t})=>{const r=U.default.useContext(TE),n=AT("itemDimensions"),i=AT("viewportDimensions"),o=Yk(U.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return U.default.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e.jsx("div",{ref:o,style:VE(!1),children:t})},FT=({children:t})=>{const r=U.default.useContext(TE),n=AT("windowViewportRect"),i=AT("itemDimensions"),o=_T("customScrollParent"),a=qk(n,o,!1);return U.default.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e.jsx("div",{ref:a,style:VE(!1),children:t})},OT=U.default.memo((function({...t}){const r=_T("useWindowScroll"),n=_T("customScrollParent"),i=n||r?RT:BT,o=n||r?FT:TT,a=_T("context");return e.jsx(i,{...t,...KE(i,a),children:e.jsxs(o,{children:[e.jsx(DT,{}),e.jsx(kT,{}),e.jsx(ET,{})]})})})),{Component:IT,useEmitter:MT,useEmitterValue:_T,usePublisher:AT}=DE(jT,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},OT),BT=ZE({useEmitter:MT,useEmitterValue:_T,usePublisher:AT}),RT=QE({useEmitter:MT,useEmitterValue:_T,usePublisher:AT});function zT(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Nk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const PT=U.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),LT=({children:r})=>{const[n,i]=t.useState(-1);return e.jsx(PT.Provider,{value:{focusedIndex:n,setFocusedIndex:i},children:r})},NT=q.default.div`
    overflow: hidden;
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    background: ${hl.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}

    ${xl.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${yl["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${xl.MaxWidth.xs} {
        width: calc(100vw - ${yl["xs-margin"]} * 2);
    }

    ${xl.MaxWidth.xxs} {
        width: calc(100vw - ${yl["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${hl["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${vl.full};
        background-clip: padding-box;
    }
`,HT=q.default.div`
    background: transparent;
    padding: ${bl["spacing-8"]};
`,WT=q.default.ul`
    list-style-type: none;
`,YT=q.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${bl["spacing-8"]};
    padding: ${bl["spacing-12"]} ${bl["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${vl.none};
    outline: none;

    ${e=>e.$disabled?n.css`
                cursor: not-allowed;
            `:e.$active&&e.$selected?n.css`
                background: ${hl["bg-hover"]};
            `:e.$active?n.css`
                background: ${hl["bg-hover-subtle"]};
            `:void 0}
`,VT=q.default(D.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${hl["icon-selected"]};
`,UT=q.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,KT=q.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hl["icon-selected"]};
`,qT=q.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hl["icon-primary-subtlest"]};
`,XT=q.default(j.SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hl["icon-disabled-subtle"]};
`,GT=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,ZT=q.default($h)`
    cursor: pointer;
    overflow: hidden;
    color: ${hl["text-primary"]};
    font-size: inherit;
`,QT=q.default(ZT)`
    ${gl["body-baseline-semibold"]}
`,JT=q.default(ZT)`
    ${gl["body-md-semibold"]}
    padding: ${bl["spacing-8"]} ${bl["spacing-8"]};
`,eF=q.default.div`
    width: 100%;
    display: flex;
    padding: ${bl["spacing-12"]} ${bl["spacing-16"]};
    align-items: center;
`,tF=q.default(s.ExclamationCircleFillIcon)`
    margin-right: ${bl["spacing-4"]};
    color: ${hl["icon-error"]};
    height: 1em;
    width: 1em;
`,rF=q.default(ld)`
    margin-right: ${bl["spacing-8"]};
    color: ${hl.icon};
`,nF=q.default.div`
    ${Id()}
    color: ${hl["text-subtle"]};
    padding: 0 ${bl["spacing-16"]} ${bl["spacing-12"]}
        ${bl["spacing-16"]};
`,iF=q.default.div`
    background: ${hl["bg-strong"]};
    border-radius: ${vl.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}
`,oF=q.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${bl["spacing-8"]};
    padding: ${e=>"small"===e.$variant?n.css`
                  ${bl["spacing-8"]} ${bl["spacing-16"]}
              `:n.css`10px ${bl["spacing-16"]}`};
`,aF=q.default(wh)`
    flex: 1;
`,sF=q.default(x.MagnifierIcon)`
    color: ${hl.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,lF=q.default(Ll)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${bl["spacing-8"]};
    margin-left: -${bl["spacing-8"]};
    color: ${hl.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,dF=t.forwardRef(((t,r)=>{var{value:n,variant:i,onClear:o}=t,a=ki(t,["value","variant","onClear"]);return e.jsxs(iF,{$variant:i,children:[e.jsxs(oF,{$variant:i,children:[e.jsx(sF,{"aria-hidden":!0}),e.jsx(aF,Object.assign({ref:r,value:n,$variant:i},a))]}),n&&e.jsx(lF,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]})})),cF=({listItems:r,multiSelect:n,maxSelectable:i,selectedItems:o,disableItemFocus:a,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:d=2,labelDisplayType:c="inline",variant:u="default",listboxId:f,width:h,topScrollItem:g,onSelectItem:p,onSelectAll:m,onDismiss:b,onRetry:v,valueExtractor:y,listExtractor:x,renderListItem:w,renderCustomCallToAction:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:j,searchPlaceholder:k="Search",searchFunction:D,onSearch:E})=>{const{focusedIndex:T,setFocusedIndex:F}=t.useContext(PT),[O,I]=t.useState(""),[M,_]=t.useState(null!=r?r:[]),A=Wc(s),B=Nc(),R=t.useRef(null),z=t.useRef(null),P=t.useRef([]),L=t.useRef(null),N=t.useRef(null),H=!!i&&!!o&&(null==o?void 0:o.length)===i,W=e=>{const t=x?x(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Y=t.useCallback((e=>!!XS(o,(t=>ZS(t,e)))),[o]),V=zc((()=>null==D?void 0:D(O))),U=zc((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:r}=W(e),n=O.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),K=(e,t)=>{H&&!Y(e)||(F(t),null==p||p(e,(e=>y?y(e):e)(e)))},q=e=>{const t=e.target.value;I(t),null==E||E()},X=()=>{var e;I(""),null===(e=L.current)||void 0===e||e.focus(),null==E||E()},G=()=>{null==v||v()};Pc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),T<M.length-1){const e=T+1;null===(t=P.current[e])||void 0===t||t.focus(),F(e)}break;case"ArrowUp":if(e.preventDefault(),T>0){const e=T-1;null===(r=P.current[e])||void 0===r||r.focus(),F(e)}else 0===T&&L.current&&(L.current.focus(),F(-1));break;case"Space":case"Enter":document.activeElement===P.current[T]&&(e.preventDefault(),M[T]&&K(M[T],T))}})),t.useEffect((()=>{var e;if(!g)return void(null===(e=N.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(g);N.current&&-1!==e&&(N.current.scrollToIndex({index:e}),F(e))}),0);return()=>clearTimeout(t)}),[P,r,F,g]),t.useEffect((()=>{var e,t,n;if(B)return;if(a||!r)return;const i=r.findIndex((e=>Y(e)));L.current?(F(-1),setTimeout((()=>{var e;return null===(e=L.current)||void 0===e?void 0:e.focus()}),200)):T>0?(null===(e=N.current)||void 0===e||e.scrollToIndex({index:T,align:"center"}),setTimeout((()=>{var e;return null===(e=P.current[T])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=N.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),F(i),setTimeout((()=>{var e;return null===(e=P.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=N.current)||void 0===n||n.scrollToIndex({index:0}),F(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200))}),[Y,a,T,r,B,F]),t.useEffect((()=>{B&&A&&(a||"success"===s&&L.current&&(F(-1),L.current.focus()))}),[B,A,s,F,a]),t.useEffect((()=>{var e;_(null!==(e=""===O?r:D?V():U())&&void 0!==e?e:[])}),[V,U,r,D,O]);const Z=t=>n?H&&!t?e.jsx(XT,{"aria-hidden":!0}):t?e.jsx(KT,{"aria-hidden":!0}):e.jsx(qT,{"aria-hidden":!0}):t?e.jsx(VT,{"aria-hidden":!0}):e.jsx(UT,{}),Q=(t,r)=>{const{title:n,secondaryLabel:i}=W(t);return e.jsx(ik,{displayType:c,label:n,maxLines:d,selected:r,disabled:!r&&H,sublabel:i,truncationType:l,variant:u})},J=(t,r)=>{if(!v||"success"===s){const i=Y(t),o=r===T;return e.jsx(YT,{"aria-selected":i,"aria-multiselectable":n,"aria-disabled":!i&&H,"data-testid":"list-item",onClick:()=>K(t,r),onMouseEnter:()=>(e=>{F(e)})(r),ref:e=>{P.current[r]=e},role:"option",tabIndex:o?0:-1,$active:o,$selected:i,$disabled:!i&&H,children:w?w(t,{selected:i}):e.jsxs(e.Fragment,{children:[Z(i),Q(t,i)]})},((e,t)=>`item_${t}__${y?y(e):e}`)(t,r))}},ee=()=>{if((C||D)&&"success"===s)return e.jsx(dF,{ref:L,onChange:q,value:O,placeholder:k,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:u})},te=()=>{if(o&&n&&M.length>0&&!O&&"success"===s)return e.jsx(GT,{children:e.jsx(JT,{onClick:m,type:"button",$variant:u,children:i||0!==o.length?"Clear all":"Select all"})})},re=()=>{if(!S&&(O||!C)&&0===M.length&&"success"===s)return e.jsxs(e.Fragment,{children:[e.jsxs(eF,{"data-testid":"list-no-results",children:[e.jsx(tF,{"data-testid":"no-result-icon"}),"No results found."]}),j&&e.jsx(nF,{"data-testid":"no-result-desc",children:j})]})},ne=()=>{if(v&&"loading"===s)return e.jsxs(eF,{"data-testid":"list-loading",children:[e.jsx(rF,{}),"Loading..."]})},ie=()=>{if(v&&"fail"===s)return e.jsxs(eF,{"data-testid":"list-fail",children:[e.jsx(tF,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(QT,{onClick:G,type:"button",$variant:u,children:"Try again."})]})},oe=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx(WT,{role:"listbox",id:f,children:e.jsx(dT,Object.assign({ref:N,style:{height:"100%"},data:M,customScrollParent:null!==(t=R.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>J(t,e)},r?{initialItemCount:M.length}:{}),r?M.length:void 0)})};return e.jsxs(NT,{"data-testid":"dropdown-container",ref:R,$width:h,$variant:u,children:[e.jsxs(HT,{ref:z,"data-testid":"dropdown-list",children:[ee(),te(),re(),ne(),ie(),oe()]}),(()=>{if($)return e.jsx("div",{"data-testid":"custom-cta",children:$(b,M)})})()]})},uF=q.default($h)`
    display: flex;
    align-items: center;
    gap: ${bl["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${bl["spacing-16"]};

    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,fF=q.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${pl["duration-250"]} ${pl["ease-default"]};

    svg {
        color: ${hl.icon};
        height: 1em;
        width: 1em;
    }
`,hF=t.forwardRef((({children:t,disabled:r,expanded:n,listboxId:i,popupRole:o,readOnly:a,variant:s},l)=>e.jsxs(uF,{ref:l,type:"button","aria-expanded":n,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s,children:[t,!a&&e.jsx(fF,{$expanded:n,$variant:s,children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})})]})));var gF=Symbol.for("immer-nothing"),pF=Symbol.for("immer-draftable"),mF=Symbol.for("immer-state"),bF="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function vF(e,...t){if("production"!==process.env.NODE_ENV){const r=bF[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var yF=Object.getPrototypeOf;function xF(e){return!!e&&!!e[mF]}function wF(e){return!!e&&(CF(e)||Array.isArray(e)||!!e[pF]||!!e.constructor?.[pF]||EF(e)||TF(e))}var $F=Object.prototype.constructor.toString();function CF(e){if(!e||"object"!=typeof e)return!1;const t=yF(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===$F}function SF(e,t){0===jF(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function jF(e){const t=e[mF];return t?t.type_:Array.isArray(e)?1:EF(e)?2:TF(e)?3:0}function kF(e,t){return 2===jF(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function DF(e,t,r){const n=jF(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function EF(e){return e instanceof Map}function TF(e){return e instanceof Set}function FF(e){return e.copy_||e.base_}function OF(e,t){if(EF(e))return new Map(e);if(TF(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=CF(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[mF];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(yF(e),t)}{const t=yF(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function IF(e,t=!1){return _F(e)||xF(e)||!wF(e)||(jF(e)>1&&(e.set=e.add=e.clear=e.delete=MF),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>IF(t,!0)))),e}function MF(){vF(2)}function _F(e){return Object.isFrozen(e)}var AF,BF={};function RF(e){const t=BF[e];return t||vF(0,e),t}function zF(){return AF}function PF(e,t){t&&(RF("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function LF(e){NF(e),e.drafts_.forEach(WF),e.drafts_=null}function NF(e){e===AF&&(AF=e.parent_)}function HF(e){return AF={drafts_:[],parent_:AF,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function WF(e){const t=e[mF];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function YF(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[mF].modified_&&(LF(t),vF(4)),wF(e)&&(e=VF(t,e),t.parent_||KF(t,e)),t.patches_&&RF("Patches").generateReplacementPatches_(r[mF].base_,e,t.patches_,t.inversePatches_)):e=VF(t,r,[]),LF(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==gF?e:void 0}function VF(e,t,r){if(_F(t))return t;const n=t[mF];if(!n)return SF(t,((i,o)=>UF(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return KF(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),SF(i,((i,a)=>UF(e,n,t,i,a,r,o))),KF(e,t,!1),r&&e.patches_&&RF("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function UF(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&vF(5),xF(i)){const a=VF(e,i,o&&t&&3!==t.type_&&!kF(t.assigned_,n)?o.concat(n):void 0);if(DF(r,n,a),!xF(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(wF(i)&&!_F(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;VF(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||KF(e,i)}}function KF(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&IF(t,r)}var qF={get(e,t){if(t===mF)return e;const r=FF(e);if(!kF(r,t))return function(e,t,r){const n=ZF(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!wF(n)?n:n===GF(e.base_,t)?(JF(e),e.copy_[t]=eO(n,e)):n},has:(e,t)=>t in FF(e),ownKeys:e=>Reflect.ownKeys(FF(e)),set(e,t,r){const n=ZF(FF(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=GF(FF(e),t),i=n?.[mF];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||kF(e.base_,t)))return!0;JF(e),QF(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==GF(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,JF(e),QF(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=FF(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){vF(11)},getPrototypeOf:e=>yF(e.base_),setPrototypeOf(){vF(12)}},XF={};function GF(e,t){const r=e[mF];return(r?FF(r):e)[t]}function ZF(e,t){if(!(t in e))return;let r=yF(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=yF(r)}}function QF(e){e.modified_||(e.modified_=!0,e.parent_&&QF(e.parent_))}function JF(e){e.copy_||(e.copy_=OF(e.base_,e.scope_.immer_.useStrictShallowCopy_))}SF(qF,((e,t)=>{XF[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),XF.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&vF(13),XF.set.call(this,e,t,void 0)},XF.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&vF(14),qF.set.call(this,e[0],t,r,e[0])};function eO(e,t){const r=EF(e)?RF("MapSet").proxyMap_(e,t):TF(e)?RF("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:zF(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=qF;r&&(i=[n],o=XF);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:zF()).drafts_.push(r),r}function tO(e){if(!wF(e)||_F(e))return e;const t=e[mF];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=OF(e,t.scope_.immer_.useStrictShallowCopy_)}else r=OF(e,!0);return SF(r,((e,t)=>{DF(r,e,tO(t))})),t&&(t.finalized_=!1),r}var rO=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&vF(6),void 0!==r&&"function"!=typeof r&&vF(7),wF(e)){const i=HF(this),o=eO(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?LF(i):NF(i)}return PF(i,r),YF(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===gF&&(n=void 0),this.autoFreeze_&&IF(n,!0),r){const t=[],i=[];RF("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}vF(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){wF(e)||vF(8),xF(e)&&(e=function(e){xF(e)||vF(10,e);return tO(e)}(e));const t=HF(this),r=eO(e,void 0);return r[mF].isManual_=!0,NF(t),r}finishDraft(e,t){const r=e&&e[mF];r&&r.isManual_||vF(9);const{scope_:n}=r;return PF(n,t),YF(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=RF("Patches").applyPatches_;return xF(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},nO=rO.produce;rO.produceWithPatches.bind(rO),rO.setAutoFreeze.bind(rO),rO.setUseStrictShallowCopy.bind(rO),rO.applyPatches.bind(rO),rO.createDraft.bind(rO),rO.finishDraft.bind(rO);var iO=tC,oO=MC,aO=w$,sO=Mi,lO=iC,dO=S$,cO=X$,uO=P$,fO=Object.prototype.hasOwnProperty;var hO=function(e){if(null==e)return!0;if(lO(e)&&(sO(e)||"string"==typeof e||"function"==typeof e.splice||dO(e)||uO(e)||aO(e)))return!e.length;var t=oO(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(cO(e))return!iO(e).length;for(var r in e)if(fO.call(e,r))return!1;return!0},gO=Ii(hO);const pO=(e,t,r)=>{const n=nO(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=bO(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},mO=(e,t)=>{const[r,...n]=t;if(gO(e)||gO(r))return;const i=e.find((e=>e.key===r));return i&&n.length?mO(i.subItems,n):i},bO=e=>e.join(","),vO=e=>new Set(e.map((e=>e.join(",")))),yO=q.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,xO=q.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${bl["spacing-8"]};
    padding: ${bl["spacing-12"]} ${bl["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${vl.none};
    outline: none;

    ${e=>e.$active&&n.css`
            background: ${hl["bg-hover"]};
        `}
`,wO=q.default.div`
    height: 1px;
    width: calc((1lh + ${bl["spacing-8"]}) * ${e=>e.$level});
`,$O=q.default.div`
    width: 1lh;
    height: 1lh;
    color: ${hl["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${pl["duration-350"]}
            ${pl["ease-standard"]};

        ${e=>{if(e.$expanded)return n.css`
                    transform: rotate(90deg);
                `}}
    }
`,CO=q.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${bl["spacing-8"]};
`,SO=q.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":bl["spacing-16"]};

    display: flex;
    justify-content: center;
`,jO=q.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${hl["icon-selected"]};
`,kO=({listItems:r,multiSelect:n=!1,selectedKeyPaths:i,itemsLoadState:o="success",itemTruncationType:a="end",itemMaxLines:s=2,variant:l="default",listboxId:d,width:c,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:g,onRetry:p,enableSearch:m,hideNoResultsDisplay:b,noResultsDescription:v,searchPlaceholder:y="Search",onSearch:x})=>{const w=n||f,[$,C]=t.useState(""),S=$.toLowerCase().trim(),[j,k]=t.useState(!1),D=t.useRef(null),T=t.useRef(null),F=t.useRef([]),O=t.useRef(null),I=Nc(),[M,_]=t.useState([]),[A,B]=t.useState([]),R=j?A:M,z=t.useMemo((()=>{let e=0;for(const t of M)t.level>e&&(e=t.level);return e}),[M]),[P,L]=t.useState(0),[N,H]=t.useState([]),[W,Y]=t.useState(0),V=e=>{const t=e.target.value;C(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==x||x()},U=()=>{var e;C(""),k(!1),null===(e=O.current)||void 0===e||e.focus(),null==x||x()},K=()=>{null==p||p()},q=()=>{if(0===i.size){const e=[],t=[];M.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==g||g(e,t)}else null==g||g([],[])},X=zc(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var f,h;const g=s?s.level+1:0,p=s?[...s.keyPath,c.key]:[c.key],m=bO(p),b={item:c,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:p,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:g,visible:0===g||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(f=c.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(h=c.subItems)||void 0===h?void 0:h.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,n,S,t))),G=zc((e=>{return i.size?(t=X(e,!1),nO(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>nO(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);ZS(i,o)&&(n.visible=!0)}return e})))(X(e,!1));var t})),Z=zc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(S))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),Q=zc((()=>{_((e=>pO(e,i,n))),j&&B((e=>pO(e,i,n)))})),J=(e,t,r)=>{const n=((e,t,r)=>nO(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!ZS(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(R,e,t);L(e),Y(r),j?B(n):_(n)};Pc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(R,(e=>e.visible),P+1);r&&(Y((e=>e+1)),L(r.index),null===(t=F.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(R,(e=>e.visible),P-1);t?(Y((e=>e-1)),L(t.index),null===(r=F.current[t.index])||void 0===r||r.focus()):0===W&&O.current&&(O.current.focus(),Y(-1),L(-1));break}case"ArrowRight":e.preventDefault(),J(P,!0,W);break;case"ArrowLeft":e.preventDefault(),J(P,!1,W);break;case"Space":if(document.activeElement===F.current[P]){e.preventDefault();const t=R[P];if(t.hasSubItems&&!w)return;null==h||h(t)}}})),t.useEffect((()=>{let e=[];"default"===u?e=G(r):"expand"===u?e=X(r,!0):"collapse"===u&&(e=X(r,!1)),_(e)}),[X,G,r,u]),t.useEffect((()=>{H(R.filter((e=>e.visible)))}),[j,R]),t.useEffect((()=>{Q()}),[n,i,Q]),t.useEffect((()=>{if(j&&$.trim().length>=3){const e=Z(r),t=(e=>nO(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(X(e,!1));B(t)}}),[Z,X,r,j,$]),t.useEffect((()=>{I||(O.current?(L(-1),Y(-1),setTimeout((()=>{var e;return null===(e=O.current)||void 0===e?void 0:e.focus()}),200)):F.current[P]?setTimeout((()=>{var e;return null===(e=F.current[P])||void 0===e?void 0:e.focus()}),200):(L(0),Y(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200)))}),[P,W,I]);const ee=()=>{if(m&&"success"===o)return e.jsx(dF,{ref:O,onChange:V,value:$,placeholder:y,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:l})},te=()=>{if(n&&!j&&M.length>0&&"success"===o)return e.jsx(GT,{children:e.jsx(JT,{onClick:q,type:"button",$variant:l,children:0===i.size?"Select all":"Clear all"})})},re=()=>{if(!b&&j&&0===A.length&&"success"===o)return e.jsxs(e.Fragment,{children:[e.jsxs(eF,{"data-testid":"list-no-results",children:[e.jsx(tF,{"data-testid":"no-result-icon"}),"No results found."]}),v&&e.jsx(nF,{"data-testid":"no-result-desc",children:v})]})},ne=()=>{if(p&&"loading"===o)return e.jsxs(eF,{"data-testid":"list-loading",children:[e.jsx($d,{}),"Loading..."]})},ie=()=>{if(p&&"fail"===o)return e.jsxs(eF,{"data-testid":"list-fail",children:[e.jsx(tF,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(QT,{onClick:K,type:"button",$variant:l,children:"Try again."})]})},oe=t=>{if(n)switch(t.checked){case"mixed":return e.jsx(jO,{"aria-hidden":!0});case!0:return e.jsx(KT,{"aria-hidden":!0});default:return e.jsx(qT,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(SO,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e.jsx(VT,{"aria-hidden":!0})})},ae=(t,r)=>{const{level:i,visible:o,expanded:l,keyPath:d,checked:c,hasSubItems:u,indexInParent:f,parentSetSize:g}=t,p=t.index,m=W===r,b=u&&!w;return e.jsxs(yO,{$visible:o,children:[z>0&&e.jsx(wO,{$level:i}),z>0&&!u&&n&&e.jsx(CO,{}),e.jsxs(xO,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?J(p,!l,r):((e,t)=>{Y(t),L(e),null==h||h(R[e])})(p,r)},onMouseEnter:()=>((e,t)=>{L(t.index),Y(e)})(r,t),ref:e=>F.current[t.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[u&&e.jsx($O,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),J(p,!l,r)},$expanded:l,children:e.jsx(E.CaretRightIcon,{})}),oe(t),e.jsx(ik,{bold:u,searchTerm:j?S:void 0,label:t.item.label,selected:!!c,truncationType:a,maxLines:s})]})]},`[${d.join("---")}]`)},se=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx("div",{"aria-multiselectable":n,id:d,ref:T,role:"tree",children:e.jsx(dT,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=D.current)&&void 0!==t?t:void 0,data:N,itemContent:(e,t)=>ae(t,e)},r?{initialItemCount:N.length}:{}),r?N.length:void 0)})};return e.jsx(NT,{"data-testid":"dropdown-container",ref:D,$width:c,$variant:l,children:e.jsxs(HT,{"data-testid":"nested-dropdown-list",children:[ee(),te(),re(),ne(),ie(),se()]})})},DO=({selectedOptions:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:d,enableSearch:c=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:g,onSelectOptions:p,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,noResultsDescription:C,renderCustomCallToAction:S,onBlur:j,variant:k="default",readOnly:D,alignment:E,dropdownZIndex:T,maxSelectable:F,dropdownRootNode:O})=>{const[I,M]=t.useState(r||[]),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>Bc.generate())),P=t.useRef(null),L=t.useRef(null);t.useEffect((()=>{M(r||[])}),[r]);const N=()=>{I&&I.length>0||F?(M([]),K([])):(M(i),K(i))},H=(e,t)=>{const r=[...I],n=qS(I,(e=>(h?h(e):e)===t));n>-1?r.splice(n,1):r.push(e),M(r),K(r)},W=()=>{_&&(A(!1),U(!1))},Y=()=>{B||_||R(!0)},V=e=>{B&&!_&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==j||j())},U=e=>{!e&&b&&b(),e&&m&&m()},K=e=>{p&&p(e)};return e.jsx(LT,{children:e.jsx(ig,{enabled:!D&&!o,isOpen:_,renderElement:()=>e.jsx(yh,{className:s,"data-testid":l,id:d,ref:P,tabIndex:-1,onFocus:Y,onBlur:V,$focused:B,$disabled:o,$readOnly:D,$error:a,children:e.jsx(hF,{ref:L,disabled:o,expanded:_,listboxId:z,popupRole:"listbox",readOnly:D,variant:k,children:e.jsx(Gh,{$disabled:o,children:I&&0!==I.length?e.jsx(Zh,{$variant:k,children:i&&I.length===i.length?"All selected":`${I.length} selected`}):e.jsx(Qh,{truncateType:x,$variant:k,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(cF,{listboxId:z,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:h,listExtractor:g,enableSearch:c,searchFunction:u,searchPlaceholder:f,multiSelect:!0,maxSelectable:F,selectedItems:I,onSelectAll:N,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,noResultsDescription:C,renderCustomCallToAction:S,variant:k,width:t}),onOpen:()=>{A(!0),U(!0),R(!0)},onClose:e=>{A(!1),U(!1),"click"!==e&&(R(!1),null==j||j())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),U(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:T,rootNode:O})})},EO=(e,t)=>{const[r,...n]=t;if(gO(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?EO(i.subItems,n):i:void 0},TO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...TO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},FO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPaths:d,mode:c,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,noResultsDescription:p,readOnly:m,onSearch:b,onSelectOptions:v,onShowOptions:y,onHideOptions:x,onRetry:w,onBlur:$,optionsLoadState:C="success",optionTruncationType:S="end",variant:j="default",alignment:k,dropdownZIndex:D,dropdownRootNode:E})=>{const T=n,[F,O]=t.useState(d?vO(d):new Set),[I,M]=t.useState([]),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>Bc.generate())),P=t.useRef(null),L=t.useRef(null),N=t.useRef(null);t.useEffect((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=EO(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(T,e);O(vO(e)),M(t)}),[d,T]);const H=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));O(vO(e)),M(r),X(e,r)},W=e=>{const t=G(e),r=t.map((e=>e.keyPath));M(t),O(vO(r)),X(r,t)},Y=()=>{B||_||R(!0)},V=e=>{B&&!_&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==$||$())},U=()=>{if(I.length>1)return`${I.length} selected`;const{label:e,value:t}=I[0];return u?u(t):e},K=e=>{if("middle"===S){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Rc.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&x&&x(),e&&y&&y()},X=(e,t)=>{if(v){const r=t.map((e=>e.value));v(e,r)}},G=e=>{if(!0===e.checked)return I.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!ZS(e.keyPath,r)}));{const t=[...I],r=e.hasSubItems?((e,t)=>{const r=EO(e,t);return r&&r.subItems?TO(r.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{I.find((t=>ZS(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(ig,{enabled:!m&&!i,isOpen:_,renderElement:()=>e.jsx(yh,{className:a,"data-testid":s,id:l,ref:P,tabIndex:-1,onFocus:Y,onBlur:V,$focused:B,$disabled:i,$readOnly:m,$error:o,children:e.jsx(hF,{ref:L,disabled:i,expanded:_,listboxId:z,popupRole:"tree",readOnly:m,variant:j,children:e.jsx(Gh,{ref:N,$disabled:i,children:gO(I)?e.jsx(Qh,{truncateType:S,children:r}):e.jsx(Zh,{truncateType:S,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(kO,{listboxId:z,listItems:T,multiSelect:!0,selectedKeyPaths:F,itemsLoadState:C,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,noResultsDescription:p,onSelectItem:W,onSelectAll:H,onRetry:w,onSearch:b,variant:j,mode:c,width:t}),onOpen:()=>{A(!0),q(!0),R(!0)},onClose:e=>{A(!1),q(!1),"click"!==e&&(R(!1),null==$||$())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),q(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:D,rootNode:E})},OO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPath:d,mode:c,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:g,hideNoResultsDisplay:p,noResultsDescription:m,readOnly:b,onBlur:v,onSearch:y,onSelectOption:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:j="end",variant:k="default",alignment:D,dropdownZIndex:E,dropdownRootNode:T})=>{const F=n,[O,I]=t.useState(d?vO([d]):new Set),[M,_]=t.useState(),[A,B]=t.useState(!1),[R,z]=t.useState(!1),[P]=t.useState((()=>Bc.generate())),L=t.useRef(null),N=t.useRef(null),H=t.useRef(null);t.useEffect((()=>{I(d?vO([d]):new Set);const e=mO(F,d||[]);_(null!=e?e:void 0)}),[d,F]);const W=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;I(vO([r])),_({label:n,value:i}),B(!1),q(!1),null===(t=N.current)||void 0===t||t.focus(),null==x||x(r,i)},Y=()=>{R||A||z(!0)},V=e=>{R&&!A&&L.current&&!L.current.contains(e.relatedTarget)&&(z(!1),null==v||v())},U=()=>{if(!M)return"";const{label:e,value:t}=M;return u?u(t):e},K=e=>{if("middle"===j){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Rc.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&$&&$(),e&&w&&w()};return e.jsx(ig,{enabled:!b&&!i,isOpen:A,renderElement:()=>e.jsx(yh,{className:a,"data-testid":s,id:l,ref:L,tabIndex:-1,onFocus:Y,onBlur:V,$focused:R,$disabled:i,$readOnly:b,$error:o,children:e.jsx(hF,{ref:N,disabled:i,expanded:A,listboxId:P,popupRole:"tree",readOnly:b,variant:k,children:e.jsx(Gh,{ref:H,$disabled:i,children:gO(M)?e.jsx(Qh,{truncateType:j,children:r}):e.jsx(Zh,{truncateType:j,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(kO,{listboxId:P,listItems:F,selectedKeyPaths:O,selectableCategory:g,itemsLoadState:S,itemTruncationType:j,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,noResultsDescription:m,onSelectItem:W,onRetry:C,onSearch:y,variant:k,mode:c,width:t}),onOpen:()=>{B(!0),q(!0),z(!0)},onClose:e=>{B(!1),q(!1),"click"!==e&&(z(!1),null==v||v())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),B(!1),q(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:E,rootNode:T})};var IO=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var MO=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},_O=MO(),AO=lC;var BO=iC;var RO=function(e,t){return function(r,n){if(null==r)return r;if(!BO(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&_O(e,t,AO)}));var zO=IO,PO=RO,LO=AS,NO=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},HO=Mi;var WO=function(e,t,r){var n=HO(e)?zO:NO,i=arguments.length<3;return n(e,LO(t),r,i,PO)},YO=Ii(WO);const VO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],UO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var KO;!function(e){e.getCountries=()=>[].concat(...VO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:UO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return YO(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(KO||(KO={}));const qO=r=>{var{onChange:n,value:i,allowClear:o,onClear:a,onBlur:s,error:l,fixedCountry:d=!1,optionPlaceholder:c="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:g,placeholder:p,autoComplete:m}=r,b=ki(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(KO.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),C=t.useRef(null),S=Hc({ref:C,formatter:e=>KO.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===XO(null==i?void 0:i.countryCode)))[0];x(e),$(KO.formatNumber(null==i?void 0:i.number,e))}),[i]);const j=e=>{D(w,e),n&&k(w,e)},k=(e,t)=>{const r=KO.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&GO(t.countryCode)})},D=(e,t)=>{$(KO.formatNumber(e,t)),x(t)};return e.jsx(Bj,Object.assign({ref:C,value:w,onChange:()=>{const e=S();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),D(t,y),n&&k(t,y)},allowClear:o&&!!w,onClear:()=>{a?a():$("")},onBlur:s,error:l,placeholder:p,addon:d?{type:"label",attributes:{value:GO(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:c,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:GO(e.countryCode)}),onSelectOption:j,onHideOptions:h,onShowOptions:g}},inputMode:"numeric",autoComplete:m},b))},XO=e=>e?e.replace("+",""):"",GO=e=>e?e.includes("+")?e:`+${e}`:"",ZO=({className:r,"data-testid":n,selectedOption:i,minimumCharacters:o=3,fetchOptions:a,placeholder:s="Enter here...",readOnly:l=!1,disabled:d=!1,error:c,valueExtractor:u,listExtractor:f,displayValueExtractor:h,onSelectOption:g})=>{const[p,m]=t.useState((()=>i?z(i):"")),[b,v]=t.useState((()=>i?z(i):"")),[y,x]=t.useState([]),[w,$]=t.useState(!0),[C,S]=t.useState(!1),[j,k]=t.useState(!!i),[D,E]=t.useState(i),T=t.useRef(a),F=e=>Di(void 0,void 0,void 0,(function*(){S(!1),$(!0);try{const t=yield T.current(e);v(e),x(t),$(!1)}catch(e){S(!0)}})),O=t.useCallback(Tf((e=>F(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{T.current=a}),[a]),t.useEffect((()=>{p&&p.length>=o&&p!==b?O(p):O.cancel(),""===p&&D&&(g&&g(void 0,void 0),_(),E(void 0)),i&&p!==z(i)&&k(!1)}),[p,i]),t.useEffect((()=>{m(i?z(i):""),_(i),E(i)}),[i]);const I=e=>{m(e.target.value)},M=(e,t)=>{g&&g(e,t)},_=e=>{v(e?z(e):""),k(!!e),x([]),$(!0)},A=()=>{m(""),g&&g(void 0,void 0),_()},B=()=>{j||D?(_(D),m(z(D)),g&&g(D,P(D)),E(D)):A()},R=()=>!!p&&p.length>=o&&!j,z=e=>e?h?h(e):e.toString():"",P=e=>{if(e)return u?u(e):e},L=()=>e.jsx($w,{type:"text",value:p,onChange:I,placeholder:s,readOnly:l,disabled:d,allowClear:!0,onClear:A,styleType:"no-border",onBlur:p.length<o?B:void 0});return e.jsxs(Jh,{className:r,show:R(),error:c&&!R(),disabled:d,readOnly:l,testId:n,onBlur:B,children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(Uh,{children:L()}),!l&&R()&&e.jsx(Xh,{}),e.jsx(wj,{listItems:y,onSelectItem:M,valueExtractor:u,listExtractor:f,itemsLoadState:C?"fail":w?"loading":"success",visible:R(),disableItemFocus:!0,onRetry:()=>F(p),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},QO=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,JO=q.default(vw)`
    position: absolute;
    right: 0;
    padding-left: ${bl["spacing-8"]};
    margin-right: 0;
`,eI=q.default(Vh)`
    // space for clear icon
    padding-right: calc(1.25rem + ${bl["spacing-16"]});
`,tI=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:o,disabled:a,className:s,readOnly:l,error:d,"data-testid":c,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:g,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:k,renderListItem:D,renderCustomCallToAction:E}=r,T=ki(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[F,O]=t.useState(),[I,M]=t.useState(),_=t.useRef(null),A={from:t.useRef(null),to:t.useRef(null)},[B,R]=t.useState("none");t.useEffect((()=>{O(null==n?void 0:n.from),M(null==n?void 0:n.to)}),[n]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),a||l||R("from"===e?"from":"to"===e&&F?"to":"from")},P=e=>{var t;const r="from"===e?F:I;if(!r)return"";if(v)return v(r);if(p){const e=p(r);return m?m(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},L=(e,t)=>{if("middle"===j){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),Rc.truncateOneLine(t,r,120,8)}return t},N=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const r="from"===t?F:I;return r?k?k(r):e.jsx(Zh,{truncateType:j,children:L(t,P(t))}):e.jsx(Qh,{truncateType:j,children:L(t,i[t]||"")})},W=t=>e.jsx(Gh,{onClick:z(t),ref:A[t],$disabled:a,children:H(t)});return e.jsxs(Jh,{show:"none"!==B,error:d&&!("none"!==B),disabled:a,readOnly:l,testId:c,onBlur:()=>{N(!1),R("none"),F&&I||(M(void 0),O(void 0))},className:s,children:[e.jsxs(QO,{children:[e.jsx(eI,Object.assign({type:"button","data-testid":u||"selector",disabled:a,ref:_,onClick:z()},T,{children:e.jsxs(Dg,{currentActive:(()=>{switch(B){case"from":return"start";case"to":return"end";case"none":return B}})(),children:[W("from"),W("to")]})})),"none"===B&&F&&I&&!l&&!a&&e.jsx(JO,{onClick:e=>{e.stopPropagation(),O(void 0),M(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e.jsx(yw,{"aria-hidden":!0})})]}),"none"!==B&&e.jsx(Xh,{}),(()=>{if("none"===B)return null;const t=o[B];if(t&&t.length>0){const r="from"===B?F:I;return e.jsx(wj,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?O(e):M(e),N(!1),_&&(null===(n=_.current)||void 0===n||n.focus()),y&&y({[r]:e},t),"from"===r?(M(void 0),R("to"),N(!0)):R("none")})(e,t,B),onDismiss:()=>(()=>{var e;R("none"),N(!1),_&&(null===(e=_.current)||void 0===e||e.focus()),F&&I||(M(void 0),O(void 0))})(),valueExtractor:p,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:g,searchFunction:h,"data-testid":`${B}-dropdown-list`,selectedItems:r?[r]:[],onRetry:C,itemsLoadState:S[B],itemTruncationType:j,renderListItem:D,renderCustomCallToAction:E})}return null})()]})},rI=({selectedOption:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:d,enableSearch:c=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:g,listExtractor:p,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:C,renderListItem:S,hideNoResultsDisplay:j,noResultsDescription:k,renderCustomCallToAction:D,onBlur:E,variant:T="default",readOnly:F,alignment:O,dropdownZIndex:I,dropdownRootNode:M})=>{const[_,A]=t.useState(r),[B,R]=t.useState(!1),[z,P]=t.useState(!1),[L]=t.useState((()=>Bc.generate())),N=t.useRef(null),H=t.useRef(null),W=t.useRef(null);t.useEffect((()=>{A(r)}),[r]);const Y=(e,t)=>{var r;null===(r=H.current)||void 0===r||r.focus(),A(e),R(!1),G(!1),null==b||b(e,t)},V=()=>{B&&(R(!1),G(!1))},U=()=>{z||B||P(!0)},K=e=>{z&&!B&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},q=()=>{var e;if(!_)return"";if(m)return m(_);if(h){const t=h(_);return g?g(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return _.toString()},X=e=>{if("middle"===$){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Rc.truncateOneLine(e,t,120,8)}return e},G=e=>{e?null==v||v():null==y||y()};return e.jsx(LT,{children:e.jsx(ig,{enabled:!F&&!o,isOpen:B,renderElement:()=>e.jsx(yh,{className:s,"data-testid":l,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:o,$readOnly:F,$error:a,children:e.jsx(hF,{ref:H,disabled:o,expanded:B,listboxId:L,popupRole:"listbox",readOnly:F,variant:T,children:e.jsx(Gh,{ref:W,$disabled:o,children:_?C?C(_):e.jsx(Zh,{truncateType:$,$variant:T,children:X(q())}):e.jsx(Qh,{truncateType:$,$variant:T,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(cF,{listboxId:L,listItems:i,onSelectItem:Y,onDismiss:V,valueExtractor:h,listExtractor:p,enableSearch:c,searchPlaceholder:f,searchFunction:u,selectedItems:_?[_]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:j,noResultsDescription:k,renderCustomCallToAction:D,variant:T,width:t}),onOpen:()=>{R(!0),G(!0),P(!0)},onClose:e=>{R(!1),G(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),G(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:I,rootNode:M})})},nI=q.default.div`
    overflow: hidden;
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    background: ${hl.bg};
    padding: ${bl["spacing-16"]};
    min-width: 23rem;

    ${xl.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${yl["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${xl.MaxWidth.xs} {
        width: calc(100vw - ${yl["xs-margin"]} * 2);
    }

    ${xl.MaxWidth.xxs} {
        width: calc(100vw - ${yl["xxs-margin"]} * 2);
    }
`,iI=q.default.div`
    display: flex;
    align-items: baseline;
`,oI=q.default.div`
    margin: 0 0.5rem;
    color: ${hl.text};
`,aI=q.default.div`
    ${e=>"small"===e.$variant?gl["body-md-regular"]:gl["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return n.css`
                    ${Nl(1)}
                `}}
    overflow: hidden;
`,sI=q.default(aI)`
    color: ${hl["text-subtler"]};
`,lI=r=>{var{alignment:n="left",className:i,disabled:o,dropdownZIndex:a,error:s,histogramSlider:l,id:d,onBlur:c,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:g="Select",rangeLabelPrefix:p,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y,dropdownRootNode:x}=r,w=ki(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:$,bins:C=[],renderEmptyView:S,ariaLabels:j}=l,k=C.map((e=>e.minValue)),D=Math.min(...k),[E,T]=t.useState(W()),[F,O]=t.useState(!1),[I,M]=t.useState(!1),[_]=t.useState((()=>Bc.generate())),A=t.useRef(null),B=t.useRef(null),R=t.useRef(null),z=w["data-testid"]||"select-histogram";t.useEffect((()=>{y!==E&&T(W())}),[y]);const P=e=>{T(e),null==u||u(e)},L=e=>{T(e),null==f||f(e)},N=()=>{I||F||M(!0)},H=e=>{I&&!F&&A.current&&!A.current.contains(e.relatedTarget)&&(M(!1),null==c||c())};function W(){return null!=y?y:[D,D+$]}const Y=t=>v?v(t):e.jsxs(exports.Typography.BodyBL,{children:[p,t,m]});return e.jsx(LT,{children:e.jsx(ig,{enabled:!b&&!o,isOpen:F,renderElement:()=>e.jsx(yh,{className:i,"data-testid":z,id:d,ref:A,tabIndex:-1,onFocus:N,onBlur:H,$focused:I,$disabled:o,$readOnly:b,$error:s,children:e.jsx(hF,{ref:B,disabled:o,expanded:F,listboxId:_,popupRole:"dialog",readOnly:b,variant:"default",children:e.jsx(Gh,{ref:R,$disabled:o,children:k&&0!==k.length?e.jsxs(iI,{children:[Y(E[0]),e.jsx(oI,{children:"-"}),Y(E[1])]}):e.jsx(sI,{truncateType:h,$variant:"default",children:g})})})}),renderDropdown:({elementWidth:t})=>e.jsx(nI,{style:{width:t},children:e.jsx(mw,{interval:$,value:E,bins:C,onChange:P,onChangeEnd:L,showRangeLabels:!1,renderEmptyView:S,ariaLabels:j})}),onOpen:()=>{O(!0)},onClose:()=>{O(!1)},onDismiss:()=>{var e;null===(e=B.current)||void 0===e||e.focus(),O(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:x})})},dI=r=>{var{value:n,ariaLabel:i,onChange:o,onChangeEnd:a}=r,s=ki(r,["value","ariaLabel","onChange","onChangeEnd"]);const[l,d]=t.useState(c());t.useEffect((()=>{n!==l[0]&&d(c())}),[n]);function c(){return null!=n?[n]:[0]}return e.jsx(cw,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;d([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;d([t]),null==a||a(t)},ariaLabels:i?[i]:void 0}))},cI=q.default.p`
    text-align: right;
    ${gl["body-sm-semibold"]}
    color: ${hl["text-subtler"]};
`,uI=({value:r,maxLength:n,renderCustomCounter:i})=>{const[o,a]=t.useState("");t.useEffect((()=>{a(s(`${r||""}`))}),[r,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:U.default.isValidElement(o)?o:e.jsx(cI,{"data-testid":"counter-label",children:o})})},fI=q.default.div`
    display: flex;
    flex-direction: column;
`,hI=q.default.textarea`
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    background: ${hl.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${bl["spacing-12"]} ${bl["spacing-16"]};
    width: 100%;

    ${gl["body-baseline-regular"]}
    color: ${hl.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${ml["width-020"]} ${ml.solid}
            ${hl["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${hl["text-subtler"]};
    }

    ${e=>e.readOnly?n.css`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${hl["border-focus"]};
                }
            `:e.disabled?n.css`
                background: ${hl["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${hl["border-disabled"]};
                }
            `:e.$error?n.css`
                border-color: ${hl["border-error"]};

                :focus,
                :active {
                    outline-color: ${hl["border-error-focus"]};
                }
            `:void 0}
`,gI=U.default.forwardRef(((r,n)=>{var{value:i,disabled:o,error:a,rows:s=5,prefix:l,transformValue:d,onChange:c,maxLength:u}=r,f=ki(r,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,g]=t.useState(i);t.useEffect((()=>{g(i)}),[i]);return e.jsx(hI,Object.assign({ref:n,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=d?d(r):r;if(g(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=d?d(null!=t?t:""):t;g(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:a,rows:s,maxLength:l&&u?l.length+u:u},f))})),pI=U.default.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:a=5,onChange:s,transformValue:l,prefix:d,maxLength:c,renderCustomCounter:u}=r,f=ki(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,g]=t.useState(i);t.useEffect((()=>{g(i)}),[i]);return e.jsxs(fI,{children:[e.jsx(gI,Object.assign({ref:n,disabled:o,value:h,rows:a||5,onChange:e=>{const t=e.target.value;g(t),s&&s(e)},prefix:d,transformValue:l,maxLength:c},f)),c&&e.jsx(uI,{value:h,maxLength:c,renderCustomCounter:u})]})})),mI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${bl["spacing-4"]};
`,bI=q.default.div`
    display: flex;
    flex: 1;
    margin-right: ${bl["spacing-12"]};
`,vI=q.default(zx)`
    margin-top: 0;
`,yI=U.default.forwardRef(((r,n)=>{const{label:i,value:o,errorMessage:a,id:s="form-textarea","data-error-testid":l,"data-testid":d,onChange:c,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:g,xxsCols:p,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,transformValue:$,prefix:C=""}=r,S=ki(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[j,k]=t.useState(o);t.useEffect((()=>{k(o)}),[o]);return e.jsxs(Ux,{id:s,label:i,disabled:S.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:g,xxsCols:p,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,children:[e.jsx(gI,Object.assign({id:`${s}-base`,"data-testid":d||s,value:j,error:!!a,onChange:e=>{const t=e.target.value;k(t),c&&c(e)},ref:n,prefix:C,transformValue:$},S)),a||S.maxLength?e.jsxs(mI,{children:[a&&e.jsx(bI,{children:e.jsx(vI,{"data-testid":l||(s?`${s}-error-message`:"error-message"),children:a})}),S.maxLength&&e.jsx(uI,{value:j,maxLength:S.maxLength,renderCustomCounter:S.renderCustomCounter})]}):e.jsx(e.Fragment,{})]})})),xI=q.default.div`
    position: relative;
`,wI=q.default(xh)`
    height: 3rem;
    gap: ${bl["spacing-8"]};
`,$I=q.default(wh)`
    display: block;
    width: 100%;
    flex: 1;
`,CI=q.default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?n.css`
                    color: ${hl["icon-selected-disabled"]};
                `:n.css`
                    color: ${hl["icon-disabled-subtle"]};
                `:e.$active?n.css`
                color: ${hl["icon-selected"]};
            `:n.css`
            color: ${hl["icon-subtle"]};
        `};
`,SI=n.css`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${gl.Spec["weight-regular"]};
        ${e=>e.$size&&gl[`${e.$size}-regular`]}
        color: ${hl.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,jI=q.default.ol`
    ${SI}

    margin-left: 3rem;

    ${xl.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",i=e.$counterSeparator||")";return n.css`
            li:before {
                content: counter(list, ${r}) "${i}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){const e=t?r+1:r-1;return n.css`
                counter-reset: list ${e};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,kI=q.default.ul`
    ${SI}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,DI=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=ki(t,["size","bulletType","bottomMargin","children"]);return e.jsx(kI,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};DI.displayName="TextList.Ul";const EI=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=ki(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e.jsx(jI,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};EI.displayName="TextList.Ol";const TI={Ul:DI,Ol:EI},FI=q.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${vl.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${hl.bg};

    ${e=>{if(!e.$indicator)return n.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return n.css`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?n.css`
                            border-color: ${hl["border-error"]};
                        `:n.css`
                            border-color: ${hl["border-error"]};

                            &:has(${AI}:hover) {
                                background: ${hl["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?n.css`
                            border: none;
                            background: ${hl["bg-selected-disabled"]};
                        `:n.css`
                            border: none;
                        `:e.$selected?n.css`
                        border: none;
                        background: ${hl["bg-selected"]};

                        &:has(${AI}:hover) {
                            background: ${hl["bg-selected-hover"]};

                            & ${II} {
                                color: ${hl["text-selected-hover"]};
                            }

                            & ${YI} {
                                color: ${hl["icon-selected-hover"]};
                            }
                        }
                    `:n.css`
                    border: none;

                    &:has(${AI}:hover) {
                        background: ${hl["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?n.css`
                            border-color: ${hl["border-error"]};
                        `:n.css`
                            border-color: ${hl["border-error"]};

                            &:has(${AI}:hover) {
                                background: ${hl["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?n.css`
                            border-color: ${hl["border-selected-disabled"]};
                            background: ${hl["bg-selected-disabled"]};
                        `:n.css`
                            border-color: ${hl["border-disabled"]};
                            background: ${hl["bg-disabled"]};
                        `:e.$selected?n.css`
                        border-color: ${hl["border-selected"]};
                        background: ${hl["bg-selected"]};

                        &:has(${AI}:hover) {
                            background: ${hl["bg-selected-hover"]};

                            & ${II} {
                                color: ${hl["text-selected-hover"]};
                            }

                            & ${YI} {
                                color: ${hl["icon-selected-hover"]};
                            }
                        }
                    `:n.css`
                    border-color: ${hl.border};

                    &:has(${AI}:hover) {
                        background: ${hl["bg-hover-subtle"]};
                    }
                `}
`,OI=q.default.input`
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
`,II=q.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?n.css`
                    color: ${hl["text-selected-disabled"]};
                `:n.css`
                    color: ${hl["text-disabled"]};
                `:e.$selected?n.css`
                color: ${hl["text-selected"]};
            `:n.css`
            color: ${hl.text};
        `}
`,MI=q.default.label`
    ${gl["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${xl.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${xl.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,_I=q.default.div`
    ${gl["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${gl["body-md-semibold"]}
    }
`,AI=q.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,BI=q.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,RI=q.default.button`
    color: ${e=>e.$disabled?hl["text-disabled"]:hl["text-error"]};
    white-space: nowrap;
    ${gl["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,zI=q.default.button`
    color: ${e=>e.disabled?hl["text-disabled"]:hl["text-primary"]};
    ${gl["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${hl.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,PI=q.default.div`
    width: 100%;
    color: ${e=>e.$disabled?hl["text-disabled"]:hl["text-error"]};
    border: none;
    background: ${hl.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,LI=q.default(Ld)`
    width: 100%;
    user-select: none;
`,NI=q.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${hl.bg};
    ${Id({textSize:"body-md"})}

    ${e=>e.$disabled?n.css`
                color: ${hl["text-disabled"]};
            `:e.$selected?n.css`
                color: ${hl["text-selected"]};
            `:n.css`
                color: ${hl.text};
            `}
`,HI=q.default(exports.Typography.BodyMD)`
    color: ${e=>e.$disabled?hl["text-disabled"]:hl["text-error"]};
`,WI=q.default(TI.Ul)`
    color: ${e=>e.$disabled?hl["text-disabled"]:hl["text-error"]};
`,YI=q.default((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=r?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":o=r?e.jsx(O.CircleDotIcon,{}):e.jsx(F.CircleIcon,{});break;case"tick":o=e.jsx(D.TickIcon,{});break;case"cross":o=e.jsx(m.CrossIcon,{});break;default:o=null}return e.jsx(CI,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?n.css`
                    color: ${hl["icon-selected-disabled"]};
                `:n.css`
                    color: ${hl["icon-disabled-subtle"]};
                `:e.$selected?n.css`
                color: ${hl["icon-selected"]};
            `:n.css`
            color: ${hl["icon-subtle"]};
        `};
`,VI=({type:r="checkbox",indicator:n,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:h,id:g,className:p,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:C,children:S,initialExpanded:j}=m||{},[k,D]=t.useState(o),[E,T]=t.useState(!!j),F=t.useMemo((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[O]=t.useState(Bc.generate()),I=g?`${g}`:`tg-${O}`,M=t.useRef(null);t.useEffect((()=>{D(o)}),[o]),t.useEffect((()=>{k&&T(null==j||j)}),[k]);const _=e=>{if(!c){if(x)return void x(e);switch(r){case"checkbox":D((e=>!e));break;case"radio":case"yes":case"no":k||D(!0)}}},A=()=>{c||T(!E)},B=()=>{c||!v||v()},R=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e.jsx(YI,{type:t,active:k,disabled:c,$selected:k,$disabled:c})},z=()=>{if(!d)return null;let t;return t="function"==typeof d?d():d,e.jsx(_I,{"data-id":"toggle-sublabel",children:t})},P=()=>{const t=!E&&!F;return $&&e.jsxs(zI,{$paddingTopRequired:t,disabled:c,onClick:A,"data-testid":E?"collapse-button":"expand-button",children:[E?"Show less":"Show more",E?e.jsx(i.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]})},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(HI,{weight:"semibold",$disabled:c,children:"Error"}),e.jsx(WI,{$disabled:c,children:null==t?void 0:t.map(((t,r)=>e.jsx("li",{id:`${I}-error-list-item-${r}`,children:e.jsx(HI,{weight:"semibold",$disabled:c,children:t})},r)))})]});return e.jsxs(FI,{$selected:k,$disabled:c,className:p,$styleType:a,$error:u,$indicator:n,$useContentWidth:w,id:g,"data-testid":y,children:[e.jsxs(AI,{id:`${I}-header-container`,$disabled:c,$error:u,$selected:k,$indicator:n,$styleType:a,children:[e.jsxs(BI,{$addPadding:b,children:[e.jsx(OI,{ref:M,name:h,id:`${I}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:_,checked:k}),n&&R(),e.jsxs(II,{$selected:k,$disabled:c,children:[e.jsx(MI,{htmlFor:`${I}-input`,"data-testid":`${I}-toggle-label`,$maxLines:l,children:s}),d&&z()]})]}),b&&e.jsx(RI,{type:"button",$disabled:c,onClick:B,id:`${I}-remove-button`,children:"Remove"})]}),S&&e.jsxs("div",{children:[(!$||E)&&e.jsx(NI,{"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:c,children:S}),$&&!E&&F&&e.jsx(PI,{$disabled:c,onClick:A,id:`${I}-error-alert`,children:e.jsx(LI,{type:c?"description":"error",className:p,showIcon:!0,children:Array.isArray(C)?L(C):C})}),P()]})]})},UI=q.default(Ci.div)`
    position: absolute;
    top: calc(3rem + ${bl["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${xl.MaxWidth.xxs} {
        max-width: 100%;
    }
`,KI=q.default.div`
    position: relative;
    width: 100%;
    padding: ${bl["spacing-8"]} ${bl["spacing-20"]}
        ${bl["spacing-24"]} ${bl["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${hl.bg};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
`,qI=q.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${xl.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,XI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${bl["spacing-16"]};
    gap: ${bl["spacing-8"]} ${bl["spacing-16"]};

    ${xl.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${bl["spacing-32"]};
    }
`,GI=q.default.div`
    display: flex;
    align-items: center;
    margin-right: ${bl["spacing-32"]};

    ${xl.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,ZI=q.default.div`
    display: flex;
    gap: ${bl["spacing-8"]};

    ${xl.MaxWidth.lg} {
        flex-direction: column;
    }

    ${xl.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,QI=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${xl.MaxWidth.xxs} {
        width: 6rem;
    }
`,JI=q.default(Ll)`
    width: 5rem;
    padding: ${bl["spacing-16"]} 0;
    color: ${hl.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${hl["icon-hover"]};
    }
`,eM=q.default(exports.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,tM=q.default(yh)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${xl.MaxWidth.xxs} {
        width: 100%;
    }
`,rM=q.default(wh)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,nM=q.default(VI)`
    min-width: 5rem;
    flex: 1;
`,iM=q.default(kd.Small)`
    width: 7rem;

    ${xl.MaxWidth.sm} {
        flex: 1;
    }

    ${xl.MaxWidth.xxs} {
        width: 100%;
    }
`;var oM,aM,sM;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(oM||(oM={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(aM||(aM={})),function(e){e.AM="am",e.PM="pm"}(sM||(sM={}));const lM=({id:r,value:n,show:o,format:a,onChange:s,onCancel:l})=>{var d;const c=Mf.getTimeValues(a,n),[u,h]=t.useState(c.hour),[g,p]=t.useState(c.minute),[m,b]=t.useState(c.period),v=t.useRef(null),y=t.useRef(null),x=Ye();t.useEffect((()=>{if(o&&v.current&&v.current.focus(),o){const{hour:e,minute:t,period:r}=Mf.getTimeValues(a,n);h(e),p(t),b(r)}}),[o,n,a]),t.useEffect((()=>{const e=v.current,t=y.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=t.useCallback((e=>{switch(e.currentTarget.name){case oM.MINUTE_UP:p(Mf.updateMinutes(g,"add"));break;case oM.MINUTE_DOWN:p(Mf.updateMinutes(g,"minus"));break;case oM.HOUR_UP:h(Mf.updateHours(u,"add"));break;case oM.HOUR_DOWN:h(Mf.updateHours(u,"minus"))}}),[u,g]),C=e=>{e.target.select()},S=e=>{const t=e.target.value;switch(e.target.name){case aM.HOUR:t.length<=2&&h(t);break;case aM.MINUTE:t.length<=2&&p(t)}},j=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case aM.HOUR:{const r=t>23||t<0?c.hour:Mf.convertHourTo12HourFormat(e.target.value);h(r);break}case aM.MINUTE:{const r=t>59||t<0?c.minute:e.target.value;p(Rc.padValue(r));break}}},k=e=>{switch(e.target.name){case sM.AM:b(If.AM);break;case sM.PM:b(If.PM)}},D=e=>r?`${r}-${e}`:e,E=oi({opacity:o?1:0,height:o?(null!==(d=x.height)&&void 0!==d?d:0)+32+2:0});return e.jsx(UI,{"data-testid":"animated-dropdown-wrapper",style:E,children:e.jsxs(KI,{ref:x.ref,"data-testid":D("timepicker-dropdown"),inert:ji(!o),children:[e.jsxs(qI,{children:[e.jsxs(GI,{children:[e.jsxs(QI,{children:[e.jsx(JI,{"aria-label":"increase hour",name:oM.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":D("hour-increment-button"),children:e.jsx(i.ChevronUpIcon,{})}),e.jsx(tM,{children:e.jsx(rM,{"aria-label":"hour",type:"number",name:aM.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:C,onChange:S,onBlur:j,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")})}),e.jsx(JI,{"aria-label":"decrease hour",name:oM.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":D("hour-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]}),e.jsx(eM,{children:":"}),e.jsxs(QI,{children:[e.jsx(JI,{"aria-label":"increase minute",name:oM.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":D("minute-increment-button"),children:e.jsx(i.ChevronUpIcon,{})}),e.jsx(tM,{children:e.jsx(rM,{"aria-label":"minute",type:"number",name:aM.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:y,value:g,onChange:S,onBlur:j,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")})}),e.jsx(JI,{"aria-label":"decrease minute",name:oM.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":D("minute-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]})]}),e.jsxs(ZI,{children:[e.jsx(nM,{checked:m===If.AM,name:sM.AM,type:"radio",onChange:k,"data-testid":D("am-toggle"),"aria-label":"AM",children:"AM"}),e.jsx(nM,{checked:m===If.PM,name:sM.PM,type:"radio",onChange:k,"data-testid":D("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e.jsxs(XI,{children:[e.jsx(iM,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":D("cancel-button"),children:"Cancel"}),e.jsx(iM,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?Mf.convertTo24HourFormat({hour:u,minute:g,period:m}):`${u}:${g}${m}`,s(e)},disabled:""===u||""===g,"data-testid":D("confirm-button"),children:"Done"})]})]})})},dM=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="24hr",readOnly:l,onChange:d,onFocus:c,onBlur:u}=r,f=ki(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,g]=t.useState(!1),[p,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef(null);t.useEffect((()=>{a&&(v(a.start),x(a.end))}),[a]),Pc("mousedown",(function(e){i||j(e)}),"document"),Pc("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const $=()=>{S()},C=()=>{h||p||c&&c()},S=()=>{g(!1),m(!1),u&&u()},j=e=>{w.current&&!w.current.contains(e.target)&&(p||h)&&S()};return e.jsx(xI,Object.assign({ref:w,id:n},f,{children:e.jsxs(wI,{$disabled:i,$error:o,$readOnly:l,children:[e.jsxs(Dg,{error:o,currentActive:h?"start":p?"end":"none",children:[e.jsx($I,{onFocus:()=>{i||l||h||(m(!1),g(!0),C())},readOnly:!0,placeholder:"From",value:Mf.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx($I,{onFocus:()=>{i||l||p||(g(!1),m(!0),C())},readOnly:!0,placeholder:"To",value:Mf.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e.jsx(lM,{id:n,show:h,value:b,format:s,onCancel:$,onChange:e=>{g(!1),m(!0),v(e);d&&d({start:e,end:y})}}),e.jsx(lM,{id:n,show:p,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);d&&d({start:b,end:e}),""==b?g(!0):u&&u()}})]})}))},cM=q.default(xh)`
    height: 3rem;
    gap: ${bl["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${bl["spacing-20"]});
`,uM=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="12hr",readOnly:l,onChange:d,onFocus:c,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:g,endLimit:p,interval:m=15}=r,b=ki(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>Bc.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[C,S]=t.useState(""),[j,k]=t.useState(""),[D,E]=t.useState(""),[T,F]=t.useState(""),[O,I]=t.useState(""),M=t.useRef(null),_=t.useRef(null),A=t.useRef(null),B=t.useMemo((()=>Mf.generateTimings(m,s,g,p)),[m,s,g,p]),R=t.useMemo((()=>{if(""===T)return B;const e=Mf.findClosestFlooredTime(T,B);return e?B.slice(B.indexOf(e)):[]}),[B,T]),z=t.useCallback((e=>Mf.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(a){const r=null!==(e=z(a.start))&&void 0!==e?e:"",n=null!==(t=z(a.end))&&void 0!==t?t:"";k(r),E(n),F(r),I(n)}}),[a,z]),t.useEffect((()=>{if(o)return void $(!1);const e=z(j),t=z(D);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&Mf.to24Hour(t)<Mf.to24Hour(e)))return S(""),void(document.activeElement!==_.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[j,D,z,o]);const P=e=>{i||l||(y||w||null==c||c(),x(e),$(!0))},L=e=>{var t;i||l||(x(e),$(!0),null===(t=("start"===e?_:A).current)||void 0===t||t.select())};function N(e){var t;switch(e.code){case"Enter":"start"===y?H(j):"end"===y&&(w&&W(D),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":Y(j,D,{})}}const H=e=>{Y(e,D,{goToNextInput:!0})},W=e=>{Y(j,e,{triggerOnBlur:!0})},Y=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=z(e))&&void 0!==i?i:T,l=null!==(o=z(t))&&void 0!==o?o:O;k(s),E(l);s===T&&l===O||null==d||d({start:s,end:l}),r&&void 0!==z(e)&&(x("end"),null===(a=A.current)||void 0===a||a.select()),n&&(x(null),$(!1),null==u||u()),F(s),I(l)},V=e=>{e.stopPropagation(),k(""),E(""),F(""),I("");null==d||d({start:"",end:""}),x(null),$(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&y&&!w&&Y(j,D,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==j?void 0:j.length)>0||(null==D?void 0:D.length)>0))return e.jsx(JO,{onClick:V,type:"button","aria-label":"Clear",children:e.jsx(yw,{"aria-hidden":!0})})};return e.jsxs(xI,Object.assign({id:n},b,{children:[e.jsx(LT,{children:e.jsx(ig,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(cM,{ref:M,$disabled:i,$error:o||!!C,$readOnly:l,onBlur:U,children:[e.jsxs(Dg,{error:o||!!C,currentActive:null===y?"none":y,children:[e.jsx($I,{ref:_,onFocus:()=>P("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>k(e.target.value),value:j,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:N,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx($I,{ref:A,onFocus:()=>P("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>E(e.target.value),value:D,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:N,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(w)return"start"===y?e.jsx(cF,{listItems:B,onSelectItem:H,selectedItems:[j],disableItemFocus:!0,topScrollItem:Mf.findClosestFlooredTime(z(j),B),listboxId:v}):e.jsx(cF,{listItems:R,onSelectItem:W,selectedItems:[D],disableItemFocus:!0,topScrollItem:Mf.findClosestFlooredTime(z(D),R),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):Y(j,D,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===y?_:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!o&&C&&e.jsx(zx,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:C})]}))},fM=t=>{var{variant:r="dial"}=t,n=ki(t,["variant"]);return"combobox"===r?e.jsx(uM,Object.assign({},n)):e.jsx(dM,Object.assign({},n))};q.default.div`
    position: relative;
`;const hM=q.default(wh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,gM=r=>{var{id:n,disabled:i=!1,readOnly:o=!1,error:a,value:s,placeholder:l,format:d="24hr",onChange:c,onFocus:u,onBlur:f}=r,h=ki(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[g,p]=t.useState(!1),m=t.useRef(null);Pc("mousedown",(function(e){i||o||y(e)}),"document"),Pc("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||o||g||(p(!0),u&&u())};const v=()=>{p(!1),f&&f()},y=e=>{m.current&&!m.current.contains(e.target)&&g&&v()},x=t.useCallback((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,l]);return e.jsxs(xh,Object.assign({ref:m,id:n,$readOnly:o,$disabled:i,$error:a},h,{children:[e.jsx(hM,{onFocus:b,focused:g,readOnly:!0,placeholder:l||x(),value:Mf.formatDisplayValue(s,d),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e.jsx(lM,{id:n,show:g,value:s,format:d,onCancel:()=>{v()},onChange:e=>{c&&c(e),v()}})]}))},pM=q.default(_j)`
    margin-right: 0.5rem;
`,mM=q.default($w)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,bM=q.default(mM)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,vM=q.default(exports.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return n.css`
                color: ${hl["text-disabled"]};
            `}}
`,yM=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,xM=q.default(exports.Typography.BodyBL)``,wM=r=>{var{disabled:n,error:i,value:o,onChange:a,onBlur:s,onChangeRaw:l,onBlurRaw:d,readOnly:c,placeholder:u="00-8888",autoComplete:f}=r,h=ki(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[g,p]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),C=t.useRef(g),S=t.useRef(m),j=t.useRef(v),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),D=Hc({ref:w,formatter:k}),E=Hc({ref:$,formatter:k}),T=e=>{C.current=e,p(e)},F=e=>{S.current=e,b(e)},O=e=>{j.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===g.length&&$.current&&$.current.focus()}),[g]),t.useEffect((()=>{R(o)}),[o]);const I=e=>{O(e.target.name),e.target.select()},M=e=>{const t=e.target.name,r=e.target.value,n=B(r);"floor"===t?(T(n),n!==g&&z(n,t)):"unit"===t&&(F(n),n!==m&&z(n,t))},_=e=>{const t=e.target.name;if("floor"===t){const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),T(r),z(r,t)}else if("unit"===t){const e=E();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),F(r),z(r,t)}},A=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&(null===(t=w.current)||void 0===t||t.focus())},B=e=>/^[0-9]$/.test(e)?Rc.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==$M)if(void 0===e||0===e.length)T(""),F("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];T("floor"===v?e:B(e)),F("unit"===v?r:B(r))}}},z=(e,t)=>{if(!a&&!l)return;const r={floor:C.current,unit:S.current};if(r[t]=e,a){const e=L(r);a(e)}l&&l([r.floor,r.unit])},P=()=>{if(!s&&!d)return;const e={floor:B(C.current),unit:B(S.current)};if(s){const t=L(e);s(t)}d&&d([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":$M},N=e=>e.split("-");return e.jsxs(xh,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:n,$error:i,$readOnly:c,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==j.current&&(O("none"),P())},children:[e.jsx(pM,{"data-testid":"addon",$disabled:n,$readOnly:c,children:"#"}),c&&o?(t=>{const r=t.split("-");return e.jsxs(yM,{children:[e.jsx(xM,{children:r[0]}),e.jsx(vM,{children:"-"}),e.jsx(xM,{children:r[1]})]})})(o):e.jsxs(e.Fragment,{children:[e.jsx(mM,{name:"floor",maxLength:3,value:g,ref:w,onFocus:I,onBlur:M,onChange:_,disabled:n,readOnly:c,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||c?N(u)[0]:"",autoComplete:f,styleType:"no-border"}),e.jsx(vM,{$inactive:0===g.length,children:"-"}),e.jsx(bM,{name:"unit",maxLength:5,value:m,ref:$,onFocus:I,onBlur:M,onChange:_,onKeyDown:A,disabled:n,readOnly:c,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||c?N(u)[1]:"",autoComplete:f,styleType:"no-border"})]})]}))},$M="Invalid unit number",CM={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(pg,Object.assign({id:`${i}-base`,"data-testid":a||i,"aria-labelledby":`${i}-label`,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(Ig,Object.assign({id:`${i}-base`,"data-testid":a||i,"aria-labelledby":`${i}-label`,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(Fp,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(mw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:Cw,InputGroup:Rj,MaskedInput:Zj,Label:Lx,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ki(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(DO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(OO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(FO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ki(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(rI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(lI,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(dI,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(cw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ki(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(tI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:yI,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(gM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(fM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=ki(t,["id","data-error-testid","children"]);return e.jsx(Ux,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(wM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(qO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=ki(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Ux,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(ZO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},SM=q.default.li`
    display: flex;
    flex-direction: column;
    padding: ${bl["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
    }
`,jM=q.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${bl["spacing-16"]};
    width: 100%;
`,kM=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,DM=q.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${bl["spacing-16"]};

    ${xl.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,EM=q.default(exports.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${bl["spacing-16"]};

    ${xl.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${bl["spacing-8"]};
    }
`,TM=q.default(exports.Typography.BodyMD)``,FM=q.default.div`
    display: flex;
    ${xl.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return n.css`
                margin-left: calc(
                    96px + ${bl["spacing-32"]}
                ); // thumbnail width + right margin

                ${xl.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,OM=q.default(kd.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${bl["spacing-16"]};
    }

    ${xl.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${bl["spacing-16"]};
        }
    }
`,IM=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:n,onReplaceClick:i})=>e.jsxs(MM,{"data-testid":r,children:[e.jsx(_M,{"data-testid":r?`${r}-image`:void 0,src:t}),n&&e.jsx(AM,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),MM=q.default.div`
    width: auto;
    margin-right: ${bl["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,_M=q.default(em)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${vl.sm};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    object-fit: cover;

    ${xl.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,AM=q.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${bl["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${gl["body-md-semibold"]}
    color: ${hl["text-primary"]};

    :hover {
        color: ${hl["text-hover"]};
    }
`,BM=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:o,onCancel:a,onBlur:s})=>{const{id:l,name:d,size:c,truncateText:u=!0,thumbnailImageDataUrl:f}=r,[h,g]=t.useState(),[p,m]=t.useState(""),b=t.useRef(null),v=t.useRef(null);t.useEffect((()=>{g(y(d))}),[i]),t.useEffect((()=>{m(r.description||"")}),[r]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return Rc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(SM,{"data-testid":`${l}-edit-display`,children:[e.jsxs(jM,{children:[f&&e.jsx(IM,{thumbnailImageDataUrl:f}),e.jsxs(kM,{children:[e.jsxs(DM,{ref:v,children:[e.jsx(EM,{weight:"semibold",children:h}),e.jsx(TM,{children:Jp.formatFileSizeDisplay(c)})]}),e.jsx(CM.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:p,maxLength:n,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(FM,{$thumbnail:!!f,children:[e.jsx(OM,{"data-testid":`${l}-save-button`,type:"button",disabled:0===p.trim().length,onClick:()=>{b.current&&o(b.current.value.trim())},children:"Save"}),e.jsx(OM,{type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:a,children:"Cancel"})]})]})},RM=q.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${bl["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?n.css`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?n.css`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?n.css`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,zM=q.default(_.DragHandleIcon)`
    margin-right: ${bl["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${hl.icon};

    ${e=>e.$active?n.css`
                color: ${hl["icon-primary"]};
            `:e.$disabled?n.css`
                color: ${hl["icon-disabled"]};
            `:void 0};
`,PM=q.default.div`
    background: ${hl["bg-primary-subtlest"]};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.sm};
    padding: ${bl["spacing-16"]} ${bl["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${xl.MaxWidth.sm} {
        padding: ${bl["spacing-16"]};
    }

    ${e=>e.$focused?n.css`
                border-color: ${hl["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${hl["border-focus"]} r g b / 50%);
            `:e.$disabled?n.css`
                border-color: ${hl["border-disabled"]};
            `:e.$error?n.css`
                background: ${hl["bg-error"]};
                border-color: ${hl["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return n.css`
                ${xl.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,LM=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${xl.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return n.css`
                ${xl.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,NM=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,HM=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${xl.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,WM=q.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${bl["spacing-8"]};
    justify-content: flex-end;

    ${xl.MaxWidth.sm} {
        ${e=>e.$hideInMobile?n.css`
                    display: none;
                    visibility: hidden;
                `:n.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${bl["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,YM=q.default(exports.Typography.BodyMD)``,VM=q.default(YM)`
    margin-top: ${bl["spacing-4"]};
`,UM=q.default(exports.Typography.BodySM)`
    color: ${hl["text-error"]};
`,KM=q.default(UM)`
    margin-top: ${bl["spacing-4"]};
    ${xl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,qM=q.default(UM)`
    display: none;
    visibility: hidden;
    ${xl.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${bl["spacing-8"]};
    }
`,XM=q.default.div`
    width: 6rem;
    margin-left: ${bl["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${xl.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?n.css`
                    margin-left: 0;
                    margin-top: ${bl["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?n.css`
                    margin-left: 0;
                    margin-top: ${bl["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,GM=q.default(bg)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${bl["spacing-16"]};
    }
`,ZM=q.default(Ll)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${hl.icon};
    }
`,QM=t.memo((({fileItem:r,editable:n,sortable:i,wrapperWidth:o,disabled:a,readOnly:s,onDelete:l,onEditClick:d})=>{const{id:c,name:u,size:f,description:h,progress:g=1,errorMessage:p,thumbnailImageDataUrl:b,truncateText:v=!0}=r,[y,x]=t.useState(),{activeId:w}=t.useContext(vm),{attributes:$,listeners:C,setNodeRef:S,transform:j,transition:k}=bx({id:c}),D=t.useRef(null),E={transform:mv.Translate.toString(j),transition:k},T=Object.assign(Object.assign({style:E},$),C),F=g<1,O=Jp.formatFileSizeDisplay(f),_=w?w===c?"self":"others":"none";t.useEffect((()=>{x(z(u))}),[o]);const A=()=>{l()},B=()=>{d&&d()},R=e=>{i&&e.stopPropagation()},z=e=>{if(!v)return e;const t=D&&D.current?D.current.getBoundingClientRect().width:0;return Rc.truncateOneLine(e,t,t/2,t/2/8,16)},P=()=>a||!!w,L=()=>!!i&&!s,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(YM,{weight:h?"semibold":"regular",children:y}),h&&e.jsx(VM,{children:h})]});return e.jsxs(RM,Object.assign({id:c,ref:S,$sortable:L(),$disabled:P(),$focusType:_},L()?T:{},{children:[L()&&e.jsx(zM,{"data-testid":`${c}-drag-handle`,$disabled:P(),$active:"self"===_}),e.jsxs(PM,{$focused:"self"===_,$error:!!p,$loading:F,$disabled:P(),$editable:n,children:[(()=>{let t;return t=p?e.jsxs(e.Fragment,{children:[e.jsxs(NM,{ref:D,children:[N(),p&&e.jsx(KM,{weight:"semibold",children:p})]}),e.jsx(WM,{children:e.jsx(YM,{children:O})}),p&&e.jsx(qM,{weight:"semibold",children:p})]}):b?(t=>e.jsxs(e.Fragment,{children:[e.jsx(IM,{thumbnailImageDataUrl:t,"data-testid":`${c}-thumbnail`}),e.jsxs(HM,{children:[e.jsx(NM,{ref:D,children:N()}),e.jsx(WM,{children:e.jsx(YM,{children:O})})]})]}))(b):e.jsxs(e.Fragment,{children:[e.jsx(NM,{ref:D,children:N()}),e.jsx(WM,{$hideInMobile:F,children:e.jsx(YM,{children:O})})]}),e.jsx(LM,{$hasThumbnail:!!b,children:t})})(),!s&&(()=>{let t;return t=p?e.jsx(ZM,{onClick:A,"data-testid":`${c}-error-delete-button`,"aria-label":`delete-${u}`,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}):F?e.jsx(rp,{progress:g,"data-testid":`${c}-progress-bar`}):e.jsxs(e.Fragment,{children:[n&&e.jsx(GM,{"data-testid":`${c}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:P(),onClick:B,onKeyDown:R,children:e.jsx(M.PencilIcon,{"aria-hidden":!0})},"edit"),e.jsx(GM,{"data-testid":`${c}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:P(),onClick:A,onKeyDown:R,children:e.jsx(I.BinIcon,{"aria-hidden":!0})},"delete")]}),e.jsx(XM,{$editable:n,$error:!!p,$loading:F,children:t})})()]})]}))})),JM=q.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":bl["spacing-32"]};
`,e_=q.default.li`
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};

    :not(:last-child) {
        margin-bottom: ${bl["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${bl["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,t_=({fileItems:r,editableFileItems:n,fileDescriptionMaxLength:i,sortable:o,disabled:a,readOnly:s,onItemUpdate:l,onItemDelete:d,onSort:c})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(vm),{width:g=0,ref:p}=Ye(),m=t.useRef({}),b=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>[...r].filter((e=>null!=e))),[...r])}(Ev($x,{activationConstraint:{distance:8}}),Ev(wy,{activationConstraint:{delay:150,tolerance:5}}),Ev(uy,{coordinateGetter:xx})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(E(r))}),[r]);const y=e=>t=>{T(e.id,"display"),v(e.id);const r=Object.assign(Object.assign({},e),{description:t});l(r)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?T(e.id,"display"):d(e),v(e.id)},$=e=>()=>{T(e.id,"edit")},C=e=>()=>{d(e)},S=e=>{if(c&&r){const{active:t,over:n}=e;if(n&&t.id!==n.id){const e=r.findIndex((e=>e.id===t.id)),i=r.findIndex((e=>e.id===n.id)),o=rx(r,e,i);c(o)}}h(void 0)},j=e=>{const{active:t}=e;h(t.id)},k=e=>n&&Jp.isSupportedImageType(e.type),D=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&k(e)&&!e.description,E=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":u[r.id]?t[r.id]=u[r.id]:t[r.id]=D(r)?"edit":"display";return t},T=(e,t)=>{f((r=>Object.assign(Object.assign({},r),{[e]:t})))},F=()=>r&&r.length>1&&o&&Object.values(u).every((e=>"display"===e)),O=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(r,u);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==m.current[t.id]&&(r.description=m.current[t.id]),e.jsx(BM,{fileItem:r,wrapperWidth:g,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(e_,{children:e.jsx("ul",{children:n})},`editable-${r}`)})(t,r):e.jsx(QM,{fileItem:t,editable:k(t),wrapperWidth:g,sortable:F(),disabled:a,readOnly:s,onDelete:C(t),onEditClick:$(t)},t.id)))};return r&&0!==r.length?a||s||!F()?e.jsx(JM,{$readOnly:s,ref:p,children:O()}):e.jsx(Zy,{sensors:b,onDragEnd:S,onDragStart:j,children:e.jsx(cx,{items:r,strategy:sx,children:e.jsx(JM,{$readOnly:s,ref:p,children:O()})})}):null},r_=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${bl["spacing-32"]};
    gap: ${bl["spacing-8"]};
`,n_=q.default(exports.Typography.BodyBL)``,i_=q.default.div`
    color: ${hl.text};
    ${Id({textSize:"body-baseline"})}
`,o_=q.default(exports.Typography.BodyMD)`
    color: ${hl["text-subtler"]};
`,a_=q.default.div`
    color: ${hl.text};
    ${Id({textSize:"body-md"})}
`,s_=q.default(Ld)`
    margin-bottom: ${bl["spacing-32"]};
`,l_=q.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${xl.MaxWidth.sm} {
        align-items: flex-start;
    }
`,d_=q.default(kd.Small)`
    width: 10rem;

    ${xl.MaxWidth.sm} {
        width: 100%;
    }
`,c_=q.default.label`
    ${gl["body-md-semibold"]}
    color: ${hl["text-subtler"]};
    margin-top: ${bl["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${xl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,u_=q.default(Ld)`
    margin-bottom: ${bl["spacing-32"]};
`,f_=U.default.createContext({mode:"default",rootNode:{current:null}});var h_=Ii((function(e){return null==e}));const g_=q.default.div`
    background-color: ${e=>e.$collapsible?hl["bg-strong"]:hl.bg};
    ${xl.MaxWidth.lg} {
        background-color: ${hl["bg-strong"]};
    }
`,p_=q.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${hl.border};

    ${xl.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${bl["spacing-16"]};
    }
`,m_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${hl.bg};

    ${xl.MaxWidth.lg} {
        background-color: transparent;
    }
`,b_=q.default(Ll)`
    margin: 0 0 0 auto;

    color: ${hl.icon};
    &:hover {
        color: ${hl["icon-hover"]};
    }
`,v_=q.default(f.ChevronDownIcon)`
    height: ${gl.Spec["body-size-baseline"]};
    width: ${gl.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${pl["duration-350"]} ${pl["ease-standard"]};
`,y_=q.default.p`
    ${gl["heading-xs-semibold"]}
    color: ${hl.text};

    margin: ${bl["spacing-24"]} 0 ${bl["spacing-24"]}
        ${bl["spacing-20"]};

    ${xl.MaxWidth.lg} {
        ${gl["body-md-semibold"]}
        color: ${hl["text-subtle"]};

        margin: ${bl["spacing-24"]} ${bl["spacing-20"]} 0
            ${bl["spacing-20"]};
    }
`,x_=q.default(Ci.div)`
    overflow: hidden;
`,w_=q.default.div`
    padding: ${bl["spacing-24"]} ${bl["spacing-20"]};
`,$_=q.default(Ci.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,C_=q.default(kd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${bl["spacing-16"]} 0 0 0;
`,S_=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:f,addon:h,children:g}=r,p=ki(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:b}=t.useContext(f_),v="mobile"===m,[y,x]=t.useState(E()),[w,$]=t.useState(l),C=!v&&i,S=Ye(),j=Ye(),k=oi({height:y?S.height:0}),D=w?null!=d?d:Math.min(.5*(null!==(n=j.height)&&void 0!==n?n:0),216):j.height;t.useEffect((()=>{x(E())}),[i,a]);function E(){return!!v||(h_(a)?!i||o:a)}return e.jsxs(g_,{$collapsible:C,children:[e.jsx(p_,{$showDivider:c,$showMobileDivider:u}),(f||C)&&e.jsxs(m_,{children:[f&&e.jsxs(y_,{children:[f," ",h&&("popover"===(null==h?void 0:h.type)?e.jsx(Bx,{addon:h,rootNode:v?b:void 0}):null)]}),C&&e.jsx(b_,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!y;h_(a)&&x(e),s&&s(e)},"aria-label":y?"Collapse":"Expand",children:e.jsx(v_,{$expanded:y})})]}),e.jsx(x_,{"data-testid":"expandable-container","data-expanded":y,style:k,children:e.jsx("div",{ref:S.ref,children:e.jsxs(w_,Object.assign({},p,{children:[e.jsx($_,{"data-testid":"minimisable-container",$height:D,$minimisable:l,children:e.jsx("div",{ref:j.ref,children:e.jsx("div",{"data-id":"content-container",children:"function"==typeof g?g(m,{minimised:w}):g})})}),l&&e.jsxs(C_,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!w)},children:["View ",w?"more":"less"]})]}))})})]})};S_.displayName="Filter.Item";const j_=q.default(S_)`
    padding: 0 0 ${bl["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${bl["spacing-8"]} ${bl["spacing-8"]} 0;

        ${xl.MaxWidth.lg} {
            padding: ${bl["spacing-16"]} ${bl["spacing-20"]}
                ${bl["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${bl["spacing-8"]} ${bl["spacing-20"]} 0;
    }
`,k_=q.default.div`
    display: flex;
    flex-direction: column;

    ${xl.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${bl["spacing-16"]};
    }
`,D_=q.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${bl["spacing-8"]} ${bl["spacing-12"]};

    cursor: pointer;
    ${gl["body-md-regular"]}
    color: ${hl.text};
    ${e=>e.$selected&&n.css`
            color: ${hl["text-selected"]};
        `}

    ${xl.MaxWidth.lg} {
        padding: ${bl["spacing-8"]};
    }
`,E_=q.default(cf)`
    flex-shrink: 0;
    margin-right: ${bl["spacing-8"]};
`,T_=q.default(VI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,F_=q.default(kd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${bl["spacing-16"]} 0 ${bl["spacing-8"]}
        ${bl["spacing-12"]};

    ${xl.MaxWidth.lg} {
        margin: 0 0 ${bl["spacing-16"]} 0;
    }
`,O_=r=>{var{selectedOptions:n,options:i,onSelect:o,labelExtractor:a,valueExtractor:s,useToggleContentWidth:l}=r,d=ki(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:c}=t.useContext(f_),[u,f]=t.useState(n||[]),[h,g]=t.useState(),[p,m]=t.useState(i.length),b=t.useRef(null),v=t.useRef(null),y=e=>()=>{const t=[...u],r=u.findIndex((t=>$(t)===$(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==o||o(t)},x=()=>{const e=u.length?[]:i;f(e),null==o||o(e)},w=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},C=t.useCallback((()=>{if(!b.current)return void g(void 0);const e=Array.from(b.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}m(t),g(r>2?n-8:void 0)}),[]);t.useEffect((()=>{n!==u&&f(n||[])}),[n]),t.useEffect((()=>{"default"===c?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;g(e)})():C()}),[i]),Ye({handleWidth:"mobile"===c,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:C});return e.jsx(j_,Object.assign({minimisable:i.length>5,minimisedHeight:h},d,{children:(t,{minimised:r})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(F_,{styleType:"link",type:"button",onClick:x,children:u.length?"Clear all":"Select all"}),e.jsx(k_,{role:"group","aria-label":d.title,ref:b,children:i.map(((n,i)=>"default"===t?((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsxs(D_,{$visible:!n||r<5,$selected:a,ref:4===r?v:void 0,children:[e.jsx(E_,{displaySize:"small",checked:a,onChange:y(t)}),i]},o)})(n,i,r):((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsx(T_,{type:"checkbox",checked:a,$visible:!n||!!h&&r<=p,onChange:y(t),useContentWidth:l,children:i},o)})(n,i,r)))})]})}))};O_.displayName="Filter.Checkbox";const I_=q.default.div`
    background-color: ${hl.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,M_=q.default.div`
    background-color: ${hl.bg};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-radius: ${vl.md};
    overflow: hidden;
    width: 100%;
`,__=q.default.div`
    background-color: ${hl["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,A_=q.default.div`
    background-color: ${hl.bg};
    height: 100%;
    width: 100%;
`,B_=q.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,R_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${hl.bg};

    ${xl.MaxWidth.lg} {
        border-bottom: ${ml["width-010"]} ${ml.solid}
            ${hl.border};
    }
`,z_=q.default(exports.Typography.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${bl["spacing-24"]} 0 ${bl["spacing-24"]}
        ${bl["spacing-20"]};

    ${xl.MaxWidth.lg} {
        text-align: center;
        margin: ${bl["spacing-24"]} 0;
    }
`,P_=q.default(Ll)`
    padding: ${bl["spacing-24"]} ${bl["spacing-20"]};
    margin-right: auto;
    color: ${hl.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${hl["icon-hover"]};
    }
`,L_=q.default(kd.Small)`
    background-color: transparent;
    padding-right: ${bl["spacing-20"]};
    padding-left: ${bl["spacing-20"]};
    height: 100%;

    ${xl.MaxWidth.lg} {
        padding: ${bl["spacing-24"]} ${bl["spacing-20"]};
    }
`,N_=q.default(tu.Default)`
    width: 100%;
`,H_=q.default.div`
    padding: ${bl["spacing-24"]} ${bl["spacing-20"]};
    background-color: ${hl.bg};
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};
`,W_=q.default(kd.Default)`
    width: 100%;
`,Y_=({onDismiss:t,onDone:r,children:n})=>e.jsxs(I_,{children:[e.jsx(P_,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(g.ChevronLeftIcon,{})}),e.jsx(B_,{children:n}),e.jsx(H_,{children:e.jsx(W_,{onClick:r,type:"button",children:"Done"})})]});Y_.displayName="Filter.Page";const V_=r=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:o="light",headerTitle:a="Filters",clearButtonDisabled:s=!1,onClear:l,onDismiss:d,onDone:c,children:f}=r,h=ki(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[g,p]=t.useState(!1),m=t.useRef(null),b=t.useRef(null),v=n.useTheme(),y=yl["lg-max"]({theme:v}),x=tc.useMediaQuery({maxWidth:y});t.useEffect((()=>{x||$()}),[x]);const w=()=>{p(!0)},$=()=>{p(!1),d&&d()},C=()=>{p(!1),c&&c()},S=()=>{l&&l()},j=e=>"function"==typeof f?f(e):f,k=t=>e.jsxs(R_,{children:["mobile"===t&&e.jsx(P_,{onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(u.CrossIcon,{})}),e.jsx(z_,{weight:"semibold",children:a}),e.jsx(L_,{styleType:"link",type:"button",onClick:S,disabled:s,children:"Clear"})]});return e.jsx("div",Object.assign({},h,{children:x?e.jsx(f_.Provider,{value:{mode:"mobile",rootNode:m},children:e.jsxs(e.Fragment,{children:[e.jsx(N_,{"data-testid":"filter-show-button",styleType:o,onClick:w,type:"button",icon:e.jsx(u.FilterIcon,{}),children:i}),e.jsx(qg,{show:g,disableTransition:!0,children:e.jsx(A_,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:e.jsxs(__,{ref:m,children:[k("mobile"),e.jsx(B_,{children:j("mobile")}),e.jsx(H_,{children:e.jsx(W_,{onClick:C,type:"button",children:"Done"})})]})})})]})}):e.jsx(f_.Provider,{value:{mode:"default",rootNode:b},children:e.jsxs(M_,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b,children:[k("default"),j("default")]})})}))};V_.displayName="Filter";const U_=Object.assign(V_,{Item:S_,Page:Y_,Checkbox:O_}),K_=q.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${xl.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,q_=q.default(exports.Typography.BodyMD)`
    margin-bottom: ${bl["spacing-16"]};
`,X_=q.default.div`
    display: flex;
    align-items: flex-start;
`,G_=q.default.a`
    &:not(:last-child) {
        margin-right: ${bl["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${xl.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${bl["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,Z_=()=>e.jsxs(K_,{"data-testid":"download-app-section",children:[e.jsx(q_,{weight:"semibold",children:"Download the app"}),e.jsxs(X_,{children:[e.jsx(G_,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(G_,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),Q_={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},J_={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},eA={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var tA;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${mc(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return J_;case"mylegacy":return eA;default:return Q_}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(tA||(tA={}));const rA=q.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?n.css`
                padding: 0 ${yl["xxl-margin"]}px;
            `:n.css`
                padding: 0 ${yl["xxl-margin"]}px;
                max-width: 1440px;

                ${xl.MaxWidth.xl} {
                    padding: 0 ${yl["xl-margin"]}px;
                }

                ${xl.MaxWidth.lg} {
                    padding: 0 ${yl["lg-margin"]}px;
                }

                ${xl.MaxWidth.md} {
                    padding: 0 ${yl["md-margin"]}px;
                }

                ${xl.MaxWidth.sm} {
                    padding: 0 ${yl["sm-margin"]}px;
                }

                ${xl.MaxWidth.xs} {
                    padding: 0 ${yl["xs-margin"]}px;
                }

                ${xl.MaxWidth.xxs} {
                    padding: 0 ${yl["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return n.css`
                    column-gap: ${yl["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${yl["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${xl.MaxWidth.xl} {
                        column-gap: ${yl["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${yl["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${xl.MaxWidth.lg} {
                        column-gap: ${yl["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${yl["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${xl.MaxWidth.md} {
                        column-gap: ${yl["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${yl["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${xl.MaxWidth.sm} {
                        column-gap: ${yl["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${yl["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${xl.MaxWidth.xs} {
                        column-gap: ${yl["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${yl["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${xl.MaxWidth.xxs} {
                        column-gap: ${yl["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${yl["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return n.css`
                    display: flex;
                    flex-direction: column;
                `;default:return n.css`
                    display: flex;
                `}}}
`,nA=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=ki(t,["children","data-testid","type","stretch"]);return e.jsx(rA,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),iA=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=ki(t,["children","data-testid","stretch"]);return e.jsx(oA,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),oA=q.default.section`
    display: block;
    position: relative;
`,aA=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=ki(t,["children","data-testid","className","type","stretch"]);return e.jsx(iA,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(nA,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),sA={Section:iA,Container:nA,Content:aA,ColDiv:_g},lA=q.default.footer`
    background: ${hl["bg-strong"]};
`,dA=q.default(exports.Typography.LinkSM)`
    color: ${hl.text};
`,cA=q.default(Yg)`
    width: 100%;
`,uA=q.default(sA.Content)`
    padding: ${bl["spacing-64"]} 0;

    ${xl.MaxWidth.lg} {
        padding: ${bl["spacing-32"]} 0;
    }
`,fA=q.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${xl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${bl["spacing-32"]};
    }

    ${xl.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${bl["spacing-32"]};
    }
`,hA=q.default.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${bl["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${xl.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${xl.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,gA=q.default.div`
    grid-column: 13 / span 6;

    ${xl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${bl["spacing-32"]};
    }

    ${xl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,pA=q.default(sA.Content)`
    padding: ${bl["spacing-20"]} 0;

    ${xl.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${bl["spacing-16"]} 0;
    }
`,mA=q.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${bl["spacing-16"]};
    }

    ${xl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${xl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,bA=q.default(mA)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${xl.MaxWidth.lg} {
        margin-top: ${bl["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${xl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,vA=q.default(exports.Typography.LinkXS)`
    color: ${hl.text};
    &:not(:last-child) {
        margin-right: ${bl["spacing-16"]};
    }

    svg {
        color: ${hl.icon};
    }

    &:hover {
        color: ${hl["text-subtler"]};
        svg {
            color: ${hl["icon-subtle"]};
        }
    }

    ${xl.MaxWidth.lg} {
        margin-bottom: ${bl["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${xl.MaxWidth.lg} {
        margin-bottom: ${bl["spacing-8"]};
    }
`;var yA=function(e,t){return Number(e.toFixed(t))},xA=function(e,t,r){r&&"function"==typeof r&&r(e,t)},wA={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},$A=function(e){"number"==typeof e&&cancelAnimationFrame(e)},CA=function(e){e.mounted&&($A(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function SA(e,t,r,n){if(e.mounted){var i=(new Date).getTime();CA(e),e.animation=function(){if(!e.mounted)return $A(e.animation);var o=(new Date).getTime()-i,a=(0,wA[t])(o/r);o>=r?(n(1),e.animation=null):e.animation&&(n(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function jA(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,d=a.positionY,c=t.scale-s,u=t.positionX-l,f=t.positionY-d;0===r?o(t.scale,t.positionX,t.positionY):SA(e,n,r,(function(e){o(s+c*e,l+u*e,d+f*e)}))}}var kA=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},DA=function(e,t,r,n){return yA(n?e<t?t:e>r?r:e:e,2)},EA=function(e,t){var r=kA(e,t);return e.bounds=r,r};function TA(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,d=r.maxPositionX,c=r.maxPositionY,u=0,f=0;return a&&(u=i,f=o),{x:DA(e,s-u,d+u,n),y:DA(t,l-f,c+f,n)}}function FA(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,d=a.positionY,c=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:d}):TA(l-t*c,d-r*c,i,o,0,0,null)}function OA(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var IA=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!cB(o,r)},MA=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function _A(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,d=l.scale,c=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==c||r!==u)){var f=TA(t,r,s,o,n,i,a),h=f.x,g=f.y;e.setTransformState(d,h,g)}}var AA=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0};function BA(e,t,r,n,i,o,a,s,l,d){if(i){var c;if(t>a&&r>a)return(c=a+(e-a)*d)>l?l:c<a?a:c;if(t<o&&r<o)return(c=o+(e-o)*d)<s?s:c>o?o:c}return n?t:DA(e,o,a,i)}function RA(e,t){var r=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)}(e);if(r){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(n&&i&&a){var d=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),c=t.x-n.x,u=t.y-n.y,f=c/d,h=u/d,g=l-i,p=c*c+u*u,m=Math.sqrt(p)/g;e.velocity={velocityX:f,velocityY:h,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function zA(e,t){var r=e.transformState.scale;CA(e),EA(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function PA(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,d=i.animationType;if(!(o||t<n||!a&&!s)){var c=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,d=e.wrapperComponent;if(!a&&d&&e.bounds){var c=e.bounds,u=c.maxPositionX,f=c.minPositionX,h=c.maxPositionY,g=c.minPositionY,p=r>u||r<f,m=n>h||n<g,b=FA(e,r>u?d.offsetWidth:e.setup.minPositionX||0,n>h?d.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:p?v:r,positionY:m?y:n}}}(e);c&&jA(e,c,l,d)}}function LA(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,d=i.positionY;if(!n)return{x:l,y:d};var c=t-n.x,u=r-n.y;return{x:a?l:c,y:s?d:u}}(e,t,r),l=s.x,d=s.y,c=AA(e,o),u=AA(e,a);RA(e,{x:l,y:d}),_A(e,l,d,c,u)}}function NA(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,d=(null==a?void 0:a.width)||0,c=(null==a?void 0:a.height)||0,u=s<d||l<c;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!r||!n)}(e);if(o&&t&&r&&i){var a=t.velocityX,s=t.velocityY,l=t.total,d=r.maxPositionX,c=r.minPositionX,u=r.maxPositionY,f=r.minPositionY,h=n.limitToBounds,g=n.alignmentAnimation,p=n.zoomAnimation,m=n.panning,b=m.lockAxisY,v=m.lockAxisX,y=p.animationType,x=g.sizeX,w=g.sizeY,$=g.velocityAlignmentTime,C=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,l),S=Math.max(C,$),j=AA(e,x),k=AA(e,w),D=j*i.offsetWidth/100,E=k*i.offsetHeight/100,T=d+D,F=c-D,O=u+E,I=f-E,M=e.transformState,_=(new Date).getTime();SA(e,y,S,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,o=r.positionY,l=((new Date).getTime()-_)/$,p=1-(0,wA[g.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=BA(y,M.positionX,i,v,h,c,d,F,T,p),C=BA(x,M.positionY,o,b,h,f,u,I,O,p);i===y&&o===x||e.setTransformState(n,w,C)}))}}(e):PA(e)}}function HA(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=OA(yA(t,2),o,a,0,!1),d=FA(e,r,n,l,EA(e,l),s);return{scale:l,positionX:d.x,positionY:d.y}}function WA(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,d=l.disabled,c=l.animationTime,u=l.animationType,f=d||n>=a;if((n>=1||s)&&PA(e),!f&&i&&e.mounted){var h=HA(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);h&&jA(e,h,c,u)}}var YA=function(){return YA=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},YA.apply(this,arguments)};function VA(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var UA=1,KA=0,qA=0,XA={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},GA=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:UA,scale:null!==(r=e.initialScale)&&void 0!==r?r:UA,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:KA,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:qA}},ZA=function(e){var t=YA({},XA);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==XA[r]&&n){var i=Object.prototype.toString.call(XA[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?YA(YA({},XA[r]),e[r]):a?VA(VA([],XA[r],!0),e[r],!0):e[r]}})),t},QA=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,d=o.smooth,c=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=d?n*Math.exp(t*r):n+t*r;return OA(yA(u,3),s,a,c,!1)};function JA(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,d=a.positionY;if(!o)return console.error("No WrapperComponent found");var c=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-d)/s,f=HA(e,QA(e,t,r),c,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");jA(e,f,n,i)}function eB(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=GA(e.props),l=e.transformState,d=l.scale,c=l.positionX,u=l.positionY;if(o){var f=kA(e,s.scale),h=TA(s.positionX,s.positionY,f,a,0,0,o),g={scale:s.scale,positionX:h.x,positionY:h.y};d===s.scale&&c===s.positionX&&u===s.positionY||(null==n||n(),jA(e,g,t,r))}}var tB=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),JA(e,1,t,r,n)}},rB=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),JA(e,-1,t,r,n)}},nB=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,d=a.scale,c=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&c&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?d:n};jA(e,f,i,o)}}},iB=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),eB(e,t,r)}},oB=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=fB(t||i.scale,o,a);jA(e,s,r,n)}}},aB=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),CA(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,d=a.maxScale;if(!n||!i)return o;var c,u,f,h,g,p,m,b,v=n.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(c=n,u=i,f=o,h=t.getBoundingClientRect(),g=c.getBoundingClientRect(),p=u.getBoundingClientRect(),m=g.x*f.scale,b=g.y*f.scale,{x:(h.x-p.x+m)/f.scale,y:(h.y-p.y+b)/f.scale}),w=x.x,$=x.y,C=y.width/o.scale,S=y.height/o.scale,j=n.offsetWidth/C,k=n.offsetHeight/S,D=OA(r||Math.min(j,k),l,d,0,!1),E=(v.width-C*D)/2,T=(v.height-S*D)/2,F=TA((v.left-w)*D+E,(v.top-$)*D+T,kA(e,D),s,0,0,n);return{positionX:F.x,positionY:F.y,scale:D}}(e,a,r);jA(e,s,n,i)}}},sB=function(e){return{instance:e,zoomIn:tB(e),zoomOut:rB(e),setTransform:nB(e),resetTransform:iB(e),centerView:oB(e),zoomToElement:aB(e)}},lB=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,sB(e)),t};function dB(){try{return{get passive(){return!1}}}catch(e){return!1}}var cB=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},uB=function(e){e&&clearTimeout(e)},fB=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function hB(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var gB=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},pB=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,d=a.centerZoomedOut,c=a.zoomAnimation,u=a.wheel,f=a.disablePadding,h=a.smooth,g=c.size,p=c.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,d=s.minScale,c=s.zoomAnimation,u=s.disablePadding,f=c.size,h=c.disabled;if(!a)throw new Error("Wrapper is not mounted");var g=o+t*r;if(i)return g;var p=!n&&!h;return OA(yA(g,3),d,l,f,p&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=EA(e,y),w=hB(t,o,s),$=l&&(p||0===g||d||f),C=FA(e,w.x,w.y,y,x,$),S=C.x,j=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,j),xA(lB(e),t,n),xA(lB(e),t,i)}},mB=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;uB(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(WA(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(uB(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,xA(lB(e),t,n),xA(lB(e),t,i))}),160))},bB=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,d=l.disabled,c=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=yA(i[0].clientX-n.left,5),a=yA(i[0].clientY-n.top,5);return{x:(o+yA(i[1].clientX-n.left,5))/2/t,y:(a+yA(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=gB(t),h=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,d=s.size,c=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:OA(yA(t/n*r,2),a,o,d,!c&&!l)}(e,f);if(h!==i){var g=EA(e,h),p=a&&(d||0===c||s),m=FA(e,u.x,u.y,h,g,p),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},vB=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;uB(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,xA(lB(e),t,r)}),n)};function yB(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,d=s.onZoom,c=r.doubleClick,u=c.disabled,f=c.mode,h=c.step,g=c.animationTime,p=c.animationType;if(!u&&!n){if("reset"===f)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;xA(lB(e),t,n),eB(e,a,s,(function(){return xA(lB(e),t,i)})),vB(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=QA(e,m,h);if(a!==b){xA(lB(e),t,l);var v=hB(t,o,a),y=HA(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");xA(lB(e),t,d),jA(e,y,g,p),vB(e,t)}}}var xB=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,EA(t,t.transformState.scale),t.setup=ZA(e)},this.initializeWindowEvents=function(){var e,r,n=dB(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=dB(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),CA(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=dB();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(lB(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(lB(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,d=t.target;return!(!s||l||n||!d||i&&!t.ctrlKey||o&&t.ctrlKey||cB(d,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(CA(e),xA(lB(e),t,n),xA(lB(e),t,i))}(t,e),pB(t,e),mB(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,d=s-e.deltaX,c=l-e.deltaY,u=o.lockAxisX?s:d,f=o.lockAxisY?l:c,h=t.setup.alignmentAnimation,g=h.sizeX,p=h.sizeY,m=AA(t,g),b=AA(t,p);u===s&&f===l||_A(t,u,f,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||IA(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),CA(t),zA(t,e),xA(lB(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||MA(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),LA(t,e.clientX,e.clientY),xA(lB(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(NA(t),xA(lB(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||cB(a,i))}(t,e);a&&(function(e,t){var r=gB(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,CA(e)}(t,e),CA(t),xA(lB(t),e,i),xA(lB(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),bB(t,e),xA(lB(t),e,i),xA(lB(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,WA(r,null==n?void 0:n.x,null==n?void 0:n.y),xA(lB(t),e,o),xA(lB(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&IA(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,CA(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(CA(t),zA(t,e),xA(lB(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!MA(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];LA(t,i.clientX,i.clientY),xA(lB(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,d=null==i?void 0:i.contains(l);return!(!(r&&l&&d)||a||cB(l,s))}(t,e);r&&yB(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=lB(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),xA(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=fB(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return lB(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,EA(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=lB(t);xA(n,void 0,t.props.onInit)},this.props=e,this.setup=ZA(this.props),this.transformState=GA(this.props)},wB=U.default.createContext(null),$B=U.default.forwardRef((function(e,r){var n=t.useRef(new xB(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,sB(n));return t.useImperativeHandle(r,(function(){return sB(n)}),[n]),t.useEffect((function(){n.update(e)}),[n,e]),U.default.createElement(wB.Provider,{value:n},i)}));U.default.forwardRef((function(e,r){var n,i=t.useRef(null),o=t.useContext(wB);return t.useEffect((function(){return o.onChange((function(e){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),U.default.createElement("div",YA({},e,{ref:(n=[i,r],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var CB="transform-component-module_wrapper__SPB86",SB="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var jB=function(e){var r=e.children,n=e.wrapperClass,i=void 0===n?"":n,o=e.contentClass,a=void 0===o?"":o,s=e.wrapperStyle,l=e.contentStyle,d=e.wrapperProps,c=void 0===d?{}:d,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(wB),g=h.init,p=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&g&&(null==g||g(e,t)),function(){null==p||p()}}),[]),U.default.createElement("div",YA({},c,{ref:m,className:"react-transform-wrapper ".concat(CB," ").concat(i),style:s}),U.default.createElement("div",YA({},f,{ref:b,className:"react-transform-component ".concat(SB," ").concat(a),style:l}),r))};const kB=q.default.div`
    background-color: ${hl["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${hl["icon-subtle"]};
    }
`,DB=t=>e.jsx(kB,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),EB=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,TB=q.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,FB=q.default(DB)`
    width: 100%;
    height: 100%;
`,OB=({src:r,className:n,alt:i,fit:o,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[d,c]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{c(!0),f(void 0);const e=new Image;e.src=r,e.onload=()=>{s&&l&&l({src:r,width:e.width,height:e.height}),c(!1)},e.onerror=e=>{c(!1),f(e)}}),[r]);return e.jsx(EB,{className:n,children:u?null!=a?a:e.jsx(FB,{}):d?e.jsx(Ud,{}):e.jsx(TB,{src:r,alt:i,$fit:o})})},IB=q.default(Ll)`
    padding: 0;
    border-radius: 100%;
    background: ${hl.bg};
    color: ${hl["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,MB=q.default(IB)`
    position: absolute;
    top: ${bl["spacing-48"]};
    right: ${bl["spacing-48"]};
    z-index: 5;

    ${xl.MaxWidth.sm} {
        top: ${bl["spacing-20"]};
        right: ${bl["spacing-20"]};
    }
`,_B=q.default(IB)`
    position: absolute;
    top: ${bl["spacing-48"]};
    right: calc(
        2.5rem + ${bl["spacing-48"]} + ${bl["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${xl.MaxWidth.sm} {
        top: ${bl["spacing-20"]};
        right: calc(
            2.5rem + ${bl["spacing-20"]} + ${bl["spacing-16"]}
        );
    }
`,AB=q.default(IB)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&n.css`
            left: ${bl["spacing-48"]};
            ${xl.MaxWidth.sm} {
                left: ${bl["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&n.css`
            right: ${bl["spacing-48"]};
            ${xl.MaxWidth.sm} {
                right: ${bl["spacing-20"]};
            }
        `}
`,BB=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,RB=q.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,zB=q.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,PB=q.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,LB=q.default.div`
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
`,NB=q.default(OB)`
    height: 100%;
    width: 100%;
    border-radius: ${vl.none};
`,HB=q.default(DB)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${vl.none};
    aspect-ratio: 4 / 3;
`,WB=q.default.div`
    display: flex;
    justify-content: center;
    padding: ${bl["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,YB=q.default(exports.Typography.BodyXS)`
    display: inline-flex;
    padding: ${bl["spacing-4"]} ${bl["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${vl.full};
    background-color: ${hl.bg};
    text-align: center;
`,VB=q.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${hl["bg-inverse"]};
    padding: ${bl["spacing-24"]} ${bl["spacing-16"]};

    ${xl.MaxWidth.sm} {
        padding: ${bl["spacing-16"]} ${bl["spacing-20"]};
    }
`,UB=q.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${bl["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,KB=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${xl.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,qB=q.default.div`
    cursor: pointer;
    background-color: ${hl["bg-inverse"]};
    border-radius: ${vl.md};
    border: ${ml.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${xl.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?n.css`
                  border-width: ${ml["width-040"]};
                  border-color: ${hl["border-selected"]};

                  ${xl.MaxWidth.sm} {
                      border-width: ${ml["width-020"]};
                  }

                  :hover {
                      border-color: ${hl["border-selected-hover"]};
                  }
              `:n.css`
                  border-width: ${ml["width-010"]};

                  :hover {
                      border-color: ${hl["border-hover"]};
                  }
              `};
`,XB=q.default(OB)`
    height: 100%;
    width: 100%;
`,GB=(r,n)=>{var{items:i,initialActiveItemIndex:o,hideThumbnail:a=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:d=!1,onClose:c}=r,f=ki(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,g]=t.useState(null!=o?o:0),[p,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(),[w,$]=t.useState(),C=t.useRef(null),S=t.useRef([]),j=t.useRef([]),k=y&&w?y-w:0;t.useImperativeHandle(n,(()=>({currentItemIndex:h,setCurrentItem:I,goToPrevItem:F,goToNextItem:O}))),Pc("keydown",(function(e){"ArrowRight"===e.key?O():"ArrowLeft"===e.key?F():"Escape"===e.key&&c&&c()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const D=e=>{v(e.state.scale)};const E=({src:e,height:t,width:r})=>{m((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},T=()=>{const e=p[i[h].src];if(C.current&&e){const{clientHeight:t,clientWidth:r}=C.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},F=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),g((e=>0===e?i.length-1:e-1))},O=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),g((e=>e===i.length-1?0:e+1))},I=e=>{var t,r;null===(r=null===(t=j.current)||void 0===t?void 0:t[h])||void 0===r||r.resetTransform(),g(e)};return e.jsxs(dp,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e.jsx(MB,{"aria-label":"Close image carousel",onClick:c,focusHighlight:!1,children:e.jsx(u.CrossIcon,{"aria-hidden":!0})}),!d&&e.jsx(_B,{"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===b){const r=T();null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(r),v(null!=r?r:1)}else v(1),null===(n=null===(r=j.current)||void 0===r?void 0:r[h])||void 0===n||n.resetTransform()},focusHighlight:!1,children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})}),e.jsxs(BB,{children:[e.jsxs(RB,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(AB,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:F,children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})}),e.jsx(AB,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:O,children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})})]}),e.jsx(zB,{ref:C,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{C.current&&(Math.abs(k)>C.current.offsetWidth/3&&(k>0?O():F()),x(void 0),$(void 0))},children:e.jsx(PB,{style:{transform:`translateX(calc(${100*-h}% - ${k}px))`},children:i.map(((t,r)=>{var n;return e.jsx(LB,{"data-testid":"slide-item",children:e.jsx($B,{ref:e=>j.current[r]=e,panning:{disabled:b<=1},initialScale:1,onZoom:D,onZoomStop:D,onWheel:D,children:e.jsx(jB,{children:e.jsx(NB,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e.jsx(HB,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:E})})})},r)}))})}),!l&&e.jsx(WB,{children:e.jsx(YB,{weight:"semibold",children:`${h+1}/${i.length}`})})]}),!a&&e.jsx(VB,{children:e.jsx(UB,{children:i.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e.jsx(KB,{children:e.jsx(qB,{"data-testid":"thumbnail-item",$active:r===h,onClick:()=>I(r),ref:e=>S.current[r]=e,children:e.jsx(XB,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},ZB=t.forwardRef(GB),QB=q.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${hl.bg};
    border: ${ml["width-010"]} ${ml.solid} transparent;
    border-radius: ${vl.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${pl["duration-250"]} ${pl["ease-default"]};
    ${gl["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?hl["text-primary"]:hl.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${xl.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${gl["body-md-semibold"]}
    }

    ${e=>e.$error?n.css`
                background: ${hl.bg};
                border: ${ml["width-010"]} ${ml.solid}
                    ${hl["border-error"]};
            `:e.$selected?n.css`
                background: ${hl["bg-selected"]};
                border: ${ml["width-010"]} ${ml.solid}
                    ${hl["border-selected"]};

                &:hover {
                    background: ${hl["bg-selected-hover"]};
                    border: ${ml["width-010"]} ${ml.solid}
                        ${hl["border-selected-hover"]};
                }
            `:n.css`
                &:hover {
                    border: ${ml["width-010"]} ${ml.solid}
                        ${hl["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${ml["width-010"]} ${ml.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${hl["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,JB=U.default.forwardRef(((t,r)=>{var{children:n,imgSrc:i,selected:o,error:a,type:s="button"}=t,l=ki(t,["children","imgSrc","selected","error","type"]);return e.jsxs(QB,Object.assign({ref:r,$selected:o,$error:a,type:s},l,{children:[e.jsx(em,{src:i}),n]}))})),eR=n.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${hl["icon-primary"]};
`,tR=q.default.div`
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
`,rR=q.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    color: ${hl["text-primary"]};
    margin-bottom: 0.5rem;
`,nR=q.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    color: ${hl["text-primary"]};
`,iR=q.default(h.ChevronRightIcon)`
    ${eR}
`,oR=q.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
    }

    :hover {
        ${rR},
        ${nR},
        ${iR} {
            color: ${hl["text-hover"]};
        }
    }
`,aR=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,sR=q.default(exports.Typography.BodyMD)`
    margin-top: 0.25rem;
`,lR=q.default(Ci.div)`
    overflow: hidden;
`,dR=q.default.div`
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};
`,cR=q.default(exports.Typography.BodyMD).attrs({as:"span"})`
    color: ${hl["text-primary"]};
    margin-right: 1rem;
`,uR=q.default(B.PlusIcon)`
    ${eR}
`,fR=q.default(A.MinusIcon)`
    ${eR}
`,hR=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${ml["width-010"]} ${ml.solid} ${hl.border};

    :hover {
        ${cR},
        ${uR},
        ${fR} {
            color: ${hl["text-hover"]};
        }
    }
`,gR=q.default.div`
    ${e=>Id({textSize:e.$textSize})}
    ${e=>e.$textColor&&n.css`
            color: ${e.$textColor};
        `}
`,pR=t.forwardRef(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=ki(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(gR,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),mR=q.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,i=t.sm?t.sm<=2?t.sm:2:void 0,o=t.md||t.sm||2;return n.css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Rg.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${Rg.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${i||"auto-fill"},
                    minmax(calc(${100/(i||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,bR=q.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:i,colsMd:o,startSm:a,colsSm:s}=e;return n.css`
            grid-column: ${t||i||"auto"} / span
                ${r||o||1};

            ${Rg.MaxWidth.tablet} {
                grid-column: ${i||a||"auto"} / span
                    ${o||s||1};
            }

            ${Rg.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${s||1};
            }
        `}}
`,vR={Grid:U.default.forwardRef(((t,r)=>{const{children:n}=t,i=ki(t,["children"]);return e.jsx(mR,Object.assign({ref:r},i,{children:n}))})),Tile:U.default.forwardRef(((t,r)=>{const{children:n}=t,i=ki(t,["children"]);return e.jsx(bR,Object.assign({ref:r},i,{children:n}))}))},yR=q.default.div`
    // matches Layout.Container
    ${e=>e.$stretch?n.css`
                --sgds-mainnav-padding-x: ${yl["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${yl["xxl-margin"]}px;
            `:n.css`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${yl["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${yl["xxl-margin"]}px;

                ${xl.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${yl["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${yl["xl-margin"]}px;
                }

                ${xl.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${yl["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${yl["lg-margin"]}px;
                }

                ${xl.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${yl["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${yl["md-margin"]}px;
                }

                ${xl.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${yl["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${yl["sm-margin"]}px;
                }

                ${xl.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${yl["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${yl["xs-margin"]}px;
                }

                ${xl.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${yl["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${yl["xxs-margin"]}px;
                }
            `}
`,xR=({stretch:r=!1})=>{t.useEffect((()=>{n()||i()}),[]);const n=()=>document.getElementById(wR),i=()=>{if(!document.getElementById(wR)){const e=document.createElement("script");e.id=wR,e.type="module",e.src=$R,document.head.appendChild(e)}};return e.jsx(yR,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:r})},wR="lifesg-ds-masthead-script",$R="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",CR={notCompress:6,compress:4},SR=q.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${hl.bg};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,jR=q.default.nav`
    height: ${e=>e.$compress?CR.compress:CR.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${pl["duration-350"]} ${pl["ease-standard"]};

    ${xl.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,kR=q.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${xl.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,DR=q.default(Ll)`
    display: none;

    ${xl.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,ER=q.default(R.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${hl.icon};
`,TR=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${xl.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${xl.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,FR=q.default.div`
    display: flex;
    background-color: ${hl.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${xl.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${xl.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,OR=q.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${pl["duration-150"]} ${pl["ease-default"]};
        object-fit: contain;
    }
`,IR=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e.jsx(OR,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e.jsx(em,{src:t.logoSrc,alt:t.brandName})}),MR=q.default.div`
    display: none;

    ${xl.MaxWidth.lg} {
        display: flex;
    }
`,_R=q.default.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${bl["spacing-16"]};
    background-color: ${hl.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?n.css`
            right: 0;
            transition: all 300ms ${pl["ease-entrance"]};
            transition-delay: 200ms;
        `:n.css`
        right: -100%;
        transition: all 300ms ${pl["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return n.css`
            height: calc(${t} * 100);
        `}}

	${xl.MaxWidth.lg} {
        width: 75%;
    }

    ${xl.MaxWidth.sm} {
        width: 100%;
    }
`,AR=q.default.div`
    display: flex;
    flex-direction: column;
`,BR=q.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${bl["spacing-40"]} ${bl["spacing-20"]}
        ${bl["spacing-32"]};
`,RR=q.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,zR=q.default(Ll)`
    position: absolute;
    right: -${bl["spacing-4"]};
    color: ${hl.icon};

    :active,
    :focus {
        color: ${hl["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,PR=U.default.forwardRef(((r,n)=>{const{show:i,resources:o={},children:a,hideNavBranding:s,onClose:l,onBrandClick:d}=r,[c,u]=t.useState(0),{primary:f,secondary:h}=o;t.useEffect((()=>(g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)})),[]);const g=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(MR,{ref:n,"data-testid":"drawer",children:e.jsx(_R,{$show:i,$viewHeight:c,children:e.jsxs(AR,{children:[e.jsxs(BR,{children:[e.jsx(TR,{"data-id":"drawer-brand-container",children:!s&&e.jsxs(e.Fragment,{children:[f&&e.jsx(IR,{resources:f,compress:!0,onClick:d,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(FR,{}),e.jsx(IR,{resources:h,compress:!0,onClick:d,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e.jsx(zR,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:e.jsx(RR,{})})]}),a]})})})})),LR=q.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${bl["spacing-64"]};
    flex-shrink: 0;

    ${xl.MaxWidth.lg} {
        display: none;
    }
`,NR=q.default.ul`
    display: none;

    ${xl.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${bl["spacing-64"]};
        flex-shrink: 0;
    }
`,HR=q.default.ul`
    display: none;
    list-style: none;

    ${xl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${bl["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${xl.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,WR=q.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${bl["spacing-16"]};
    }

    ${xl.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${bl["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?bl["spacing-16"]:"0"};
        }
    }

    ${xl.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return n.css`
                    padding: 0 ${bl["spacing-16"]};
                `}}
    }
`,YR=q.default(kd.Small)`
    ${xl.MaxWidth.lg} {
        width: 100%;
    }
`,VR=q.default.div`
    display: none;

    ${xl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${bl["spacing-40"]};
    }
`,UR=q.default(exports.Typography.BodyMD)`
    margin-bottom: ${bl["spacing-8"]};
`,KR=q.default.div`
    display: flex;
`,qR=q.default.a`
    :not(:last-child) {
        margin-right: ${bl["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${xl.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${xl.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,XR=({actionButtons:t,mobile:r=!1,onActionButtonClick:n})=>{const i=e=>{e.stopPropagation()},o=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},a=(t,r)=>{const n=t?(e=>{const t=qS(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(r):r;return n.map(((r,n)=>{let a;switch(r.type){case"download":a=t?(s=r.args,e.jsxs(VR,{children:[e.jsx(UR,{weight:"semibold",children:s&&s.children||"Download the app"}),e.jsxs(KR,{children:[e.jsx(qR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(qR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e.jsx(YR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const i=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;a=e.jsx(YR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":i}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var s;if(a)return e.jsx(WR,{$mobile:t,children:a},`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,i=n.filter((e=>!!e.uncollapsible)),o=n.filter((e=>!e.uncollapsible));return r?e.jsx(e.Fragment,{children:o.length>0&&e.jsx(HR,{children:a(r,o)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(NR,{children:a(!1,i)}),t.desktop.length>0&&e.jsx(LR,{children:a(r,t.desktop)})]})}return e.jsx(e.Fragment,{})};var GR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(GR||(GR={}));const ZR=q.default.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${bl["spacing-8"]} 0;

    background: ${hl.bg};
    border-radius: ${vl.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${hl.Primitive["neutral-50"]} r g b / 25%);
`,QR=q.default.ul`
    display: none;
    list-style: none;

    ${xl.MaxWidth.lg} {
        border-left: ${ml["width-040"]} solid ${hl["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,JR=q.default(exports.Typography.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${hl.text};

    margin: 0 ${bl["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${ml.solid} transparent;
    border-width: ${bl["spacing-12"]} ${bl["spacing-8"]};

    border-radius: ${vl.md};

    ${Nl(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${hl["bg-hover"]};
        color: ${hl.text};
    }

    ${xl.MaxWidth.lg} {
        ${gl["body-md-regular"]}
    }
`,ez=q.default.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,tz=({items:t,mobile:r=!1,onItemClick:n})=>{const i=e=>t=>{t.stopPropagation(),n(t,e)},o=(r=!1)=>t.map(((t,n)=>{const{children:o,options:a}=t,s=ki(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e.jsx(ez,{children:e.jsx(JR,Object.assign({"data-testid":l},s,{onClick:i(t)},a,{children:o}))},n)}));if(t&&t.length>0){const t=r?QR:ZR;return e.jsx(t,{children:o(r)})}return e.jsx(e.Fragment,{})},rz=q.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${xl.MaxWidth.lg} {
        display: none;
    }
`,nz=q.default.ul`
    display: none;
    list-style: none;

    ${xl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,iz=q.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${xl.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,oz=q.default(exports.Typography.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${hl.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?hl["text-selected-hover"]:hl["text-hover"]};
    }

    ${xl.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,az=q.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,sz=q.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${hl["border-selected"]};

    :hover {
        ${e=>e.$selected&&hl["border-selected-hover"]};
    }

    ${xl.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,lz=q.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,dz=q.default(Ll)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,cz=q.default(i.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${hl.icon};
    :hover {
        ${e=>e.$selected?hl["icon-selected-hover"]:hl["icon-hover"]};
    }
`,uz=({items:r,selectedId:n,mobile:i=!1,hideNavBranding:o,onItemClick:a})=>{const[s,l]=t.useState(-1),[d,c]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{c(!1)},h=(e,t)=>r=>{r.stopPropagation(),l(t),c(!0),a(r,e)},g=(e,t)=>{e.stopPropagation(),a(e,t),c(!1)},p=()=>r.map(((t,r)=>{if("component"===t.itemType){const n=t&&t.children||null;return e.jsx("li",{children:n},r)}{const a=(e=>{if(e.id===n)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===n));return!1})(t),{children:l,options:c}=t,u=ki(t,["children","options"]),f=a?i?"bold":"semibold":"regular",p=i?`link__mobile-${r+1}`:`link__${r+1}`,m=s>=0&&s===r&&d;return e.jsxs(iz,{$hiddenBranding:o,children:[e.jsxs(oz,Object.assign({"data-testid":p,weight:f,$selected:a},u,{onClick:h(t,r)},c,{children:[e.jsx(az,{children:l}),a&&e.jsx(sz,{"data-testid":`${p}-indicator`,$selected:a}),i&&t.subMenu&&e.jsx(lz,{children:e.jsx(dz,{"data-testid":`${p}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e.jsx(cz,{$selected:a})})})]})),m&&t.subMenu&&e.jsx(tz,{items:t.subMenu,mobile:i,onItemClick:g})]},r)}}));return r&&r.length>0?i?e.jsx(nz,{ref:u,children:p()}):e.jsx(rz,{ref:u,$alignLeft:o,children:p()}):e.jsx(e.Fragment,{})},fz={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},hz={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},gz={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},pz={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},mz=t.forwardRef(((r,i)=>{var{items:o,className:a,id:s,selectedId:l,compress:d=!1,fixed:c=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:g=[],actionButtons:p,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=r,w=ki(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,C]=t.useState(!1),[S,j]=t.useState(!1),k="stretch"===x,D=t.useRef(null),E=n.useTheme(),T=(e=>{switch(e){case"bookingsg":return hz;case"mylegacy":return pz;case"ccube":return gz;default:return fz}})(null==E?void 0:E.resourceScheme),F=yl["lg-max"]({theme:E}),O=(null==u?void 0:u.primary)||T.primary,I=null==u?void 0:u.secondary;t.useImperativeHandle(i,(()=>Object.assign(D.current,{dismissDrawer:()=>{M()}})),[$]),t.useEffect((()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)})),[]);const M=()=>{C(!1),setTimeout((()=>{j(!1)}),550)},_=e=>$&&-1===g.indexOf(e),A=()=>{window.innerWidth<=F&&$&&M()},B=(e,t)=>{v&&(e.preventDefault(),v(t)),_("brand-click")&&M()},R=(e,t)=>{GR.isNavItemCommon(t)&&t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),GR.isNavItemLink(t)&&!t.subMenu&&_("item-click")&&M()},z=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?b&&(e.preventDefault(),b(t)):t.args.onClick(e),_("item-click")&&M()},P=()=>{C(!0),j(!0)},L=()=>{_("close-button-click")&&M()},N=()=>{const t=o.mobile||o.desktop;return t&&t.length>0||p&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(p)?e.jsx(DR,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1,children:e.jsx(ER,{})}):null};return e.jsxs(SR,{ref:D,$fixed:c,className:a,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper",children:[y&&e.jsx(xR,{stretch:k}),e.jsxs(sA.Content,{stretch:k,children:[e.jsxs(jR,{$compress:d,children:[!h&&e.jsxs(TR,{$compress:d,"data-id":"brand-container",children:[O&&e.jsx(IR,{resources:O,onClick:B,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),I&&e.jsxs(e.Fragment,{children:[e.jsx(FR,{$compress:d}),e.jsx(IR,{resources:I,onClick:B,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&e.jsxs(kR,{$hideNavBranding:h,children:[e.jsx(uz,{items:o.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(XR,{actionButtons:p,onActionButtonClick:z}),N()]})]}),!f&&e.jsx(qg,{show:S,enableOverlayClick:!0,onOverlayClick:L,children:e.jsxs(PR,{show:$,resources:{primary:O,secondary:I},onClose:L,onBrandClick:B,actionButtons:p,hideNavBranding:h,children:[e.jsx(uz,{items:o.mobile||o.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(XR,{actionButtons:p,onActionButtonClick:z,mobile:!0})]})})]})]})})),bz=CR,vz=n.css`
    color: ${hl["hyperlink-inverse"]};

    svg {
        color: ${hl["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${hl["hyperlink-inverse"]};
        svg {
            color: ${hl["icon-primary-inverse"]};
        }
    }
`,yz=q.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${pl["duration-800"]} ${pl["ease-default"]};
    background: ${hl["bg-inverse-subtle"]};
    border-radius: ${vl.none};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,xz=q.default(sA.Content)`
    display: flex;
`,wz=q.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,$z=q.default.div`
    display: inline-block;
    width: 100%;

    ${gl["body-baseline-regular"]}
    color: ${hl["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${gl["body-baseline-semibold"]}
        color: ${hl["text-inverse"]};
    }

    a {
        ${gl["body-baseline-regular"]}
        ${vz}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return n.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,Cz=q.default(exports.Typography.LinkBL)`
    position: relative;

    ${vz}
`,Sz=q.default(Ll)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,jz=q.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${hl["icon-inverse"]};
`,kz=q.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${hl["hyperlink-inverse"]};
    ${gl["body-md-semibold"]};

    cursor: pointer;
`,Dz=q.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,Ez=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:a=!0,onDismiss:s,id:l,forwardedRef:d,maxCollapsedHeight:c,onClick:u,actionButton:f}=r,h=ki(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const g=h["data-testid"],[p,m]=t.useState(i),{height:b=0,ref:v}=Ye();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),o&&s&&s()},x=e=>{(null==f?void 0:f.onClick)&&(e.stopPropagation(),f.onClick(e))};if(!p)return null;return e.jsxs(yz,Object.assign({ref:d,$sticky:a,$clickable:!!u,onClick:u},h,{children:[e.jsxs(xz,{id:Tz("container",l),children:[e.jsxs(wz,{children:[e.jsx($z,{"data-testid":Tz("text-content",g),$maxCollapsedHeight:c&&b>c?c:void 0,children:e.jsx("div",{ref:v,children:n})}),f?e.jsx(kz,Object.assign({id:Tz("action-button",l),"data-testid":Tz("action-button",g),type:"button"},f,{onClick:x,children:f.children})):null]}),o&&e.jsx(Sz,{onClick:y,id:Tz("dismiss-button",l),"data-testid":Tz("dismiss-button",g),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e.jsx(jz,{"aria-hidden":!0})})]}),u&&e.jsx(Dz,{"aria-label":"Clickable banner",type:"button"})]}))},Tz=(e,t="wrapper")=>`${t}-${e}`,Fz=U.default.forwardRef(((t,r)=>e.jsx(Ez,Object.assign({},t,{forwardedRef:r}))));Fz.displayName="NotificationBanner";const Oz=Object.assign(Fz,{Link:Cz}),{entries:Iz,setPrototypeOf:Mz,isFrozen:_z,getPrototypeOf:Az,getOwnPropertyDescriptor:Bz}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:Rz,seal:zz,create:Pz}=Object,{apply:Lz,construct:Nz}="undefined"!=typeof Reflect&&Reflect;Rz||(Rz=function(e){return e}),zz||(zz=function(e){return e}),Lz||(Lz=function(e,t,r){return e.apply(t,r)}),Nz||(Nz=function(e,t){return new e(...t)});const Hz=nP(Array.prototype.forEach),Wz=nP(Array.prototype.lastIndexOf),Yz=nP(Array.prototype.pop),Vz=nP(Array.prototype.push),Uz=nP(Array.prototype.splice),Kz=nP(String.prototype.toLowerCase),qz=nP(String.prototype.toString),Xz=nP(String.prototype.match),Gz=nP(String.prototype.replace),Zz=nP(String.prototype.indexOf),Qz=nP(String.prototype.trim),Jz=nP(Object.prototype.hasOwnProperty),eP=nP(RegExp.prototype.test),tP=(rP=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Nz(rP,t)});var rP;function nP(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Lz(e,t,n)}}function iP(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Kz;Mz&&Mz(e,null);let n=t.length;for(;n--;){let i=t[n];if("string"==typeof i){const e=r(i);e!==i&&(_z(t)||(t[n]=e),i=e)}e[i]=!0}return e}function oP(e){for(let t=0;t<e.length;t++){Jz(e,t)||(e[t]=null)}return e}function aP(e){const t=Pz(null);for(const[r,n]of Iz(e)){Jz(e,r)&&(Array.isArray(n)?t[r]=oP(n):n&&"object"==typeof n&&n.constructor===Object?t[r]=aP(n):t[r]=n)}return t}function sP(e,t){for(;null!==e;){const r=Bz(e,t);if(r){if(r.get)return nP(r.get);if("function"==typeof r.value)return nP(r.value)}e=Az(e)}return function(){return null}}const lP=Rz(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),dP=Rz(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),cP=Rz(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),uP=Rz(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fP=Rz(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hP=Rz(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),gP=Rz(["#text"]),pP=Rz(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),mP=Rz(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),bP=Rz(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vP=Rz(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),yP=zz(/\{\{[\w\W]*|[\w\W]*\}\}/gm),xP=zz(/<%[\w\W]*|[\w\W]*%>/gm),wP=zz(/\$\{[\w\W]*/gm),$P=zz(/^data-[\-\w.\u00B7-\uFFFF]+$/),CP=zz(/^aria-[\-\w]+$/),SP=zz(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jP=zz(/^(?:\w+script|data):/i),kP=zz(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),DP=zz(/^html$/i),EP=zz(/^[a-z][.\w]*(-[.\w]+)+$/i);var TP=Object.freeze({__proto__:null,ARIA_ATTR:CP,ATTR_WHITESPACE:kP,CUSTOM_ELEMENT:EP,DATA_ATTR:$P,DOCTYPE_NAME:DP,ERB_EXPR:xP,IS_ALLOWED_URI:SP,IS_SCRIPT_OR_DATA:jP,MUSTACHE_EXPR:yP,TMPLIT_EXPR:wP});const FP=1,OP=3,IP=7,MP=8,_P=9,AP=function(){return"undefined"==typeof window?null:window};var BP=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:AP();const r=t=>e(t);if(r.version="3.2.5",r.removed=[],!t||!t.document||t.document.nodeType!==_P||!t.Element)return r.isSupported=!1,r;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:d,NodeFilter:c,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:g}=t,p=d.prototype,m=sP(p,"cloneNode"),b=sP(p,"remove"),v=sP(p,"nextSibling"),y=sP(p,"childNodes"),x=sP(p,"parentNode");if("function"==typeof s){const e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:j,getElementsByTagName:k}=n,{importNode:D}=i;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof Iz&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:T,ERB_EXPR:F,TMPLIT_EXPR:O,DATA_ATTR:I,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:_,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:B}=TP;let{IS_ALLOWED_URI:R}=TP,z=null;const P=iP({},[...lP,...dP,...cP,...fP,...gP]);let L=null;const N=iP({},[...pP,...mP,...bP,...vP]);let H=Object.seal(Pz(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,Y=null,V=!0,U=!0,K=!1,q=!0,X=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,re=!1,ne=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const de=iP({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ce=null;const ue=iP({},["audio","video","img","source","image","track"]);let fe=null;const he=iP({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",pe="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=iP({},[ge,pe,me],qz);let we=iP({},["mi","mo","mn","ms","mtext"]),$e=iP({},["annotation-xml"]);const Ce=iP({},["title","style","font","a","script"]);let Se=null;const je=["application/xhtml+xml","text/html"];let ke=null,De=null;const Ee=n.createElement("form"),Te=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!De||De!==e){if(e&&"object"==typeof e||(e={}),e=aP(e),Se=-1===je.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ke="application/xhtml+xml"===Se?qz:Kz,z=Jz(e,"ALLOWED_TAGS")?iP({},e.ALLOWED_TAGS,ke):P,L=Jz(e,"ALLOWED_ATTR")?iP({},e.ALLOWED_ATTR,ke):N,ye=Jz(e,"ALLOWED_NAMESPACES")?iP({},e.ALLOWED_NAMESPACES,qz):xe,fe=Jz(e,"ADD_URI_SAFE_ATTR")?iP(aP(he),e.ADD_URI_SAFE_ATTR,ke):he,ce=Jz(e,"ADD_DATA_URI_TAGS")?iP(aP(ue),e.ADD_DATA_URI_TAGS,ke):ue,le=Jz(e,"FORBID_CONTENTS")?iP({},e.FORBID_CONTENTS,ke):de,W=Jz(e,"FORBID_TAGS")?iP({},e.FORBID_TAGS,ke):{},Y=Jz(e,"FORBID_ATTR")?iP({},e.FORBID_ATTR,ke):{},se=!!Jz(e,"USE_PROFILES")&&e.USE_PROFILES,V=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,q=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,ne=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||SP,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(U=!1),te&&(ee=!0),se&&(z=iP({},gP),L=[],!0===se.html&&(iP(z,lP),iP(L,pP)),!0===se.svg&&(iP(z,dP),iP(L,mP),iP(L,vP)),!0===se.svgFilters&&(iP(z,cP),iP(L,mP),iP(L,vP)),!0===se.mathMl&&(iP(z,fP),iP(L,bP),iP(L,vP))),e.ADD_TAGS&&(z===P&&(z=aP(z)),iP(z,e.ADD_TAGS,ke)),e.ADD_ATTR&&(L===N&&(L=aP(L)),iP(L,e.ADD_ATTR,ke)),e.ADD_URI_SAFE_ATTR&&iP(fe,e.ADD_URI_SAFE_ATTR,ke),e.FORBID_CONTENTS&&(le===de&&(le=aP(le)),iP(le,e.FORBID_CONTENTS,ke)),oe&&(z["#text"]=!0),Z&&iP(z,["html","head","body"]),z.table&&(iP(z,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw tP('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw tP('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(g,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));Rz&&Rz(e),De=e}},Oe=iP({},[...dP,...cP,...uP]),Ie=iP({},[...fP,...hP]),Me=function(e){Vz(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},_e=function(e,t){try{Vz(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Vz(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Me(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ae=function(e){let t=null,r=null;if(J)e="<remove></remove>"+e;else{const t=Xz(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new h).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&r&&o.insertBefore(n.createTextNode(r),o.childNodes[0]||null),be===me?k.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},Be=function(e){return S.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Re=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,n){Hz(e,(e=>{e.call(r,t,n,De)}))}const Le=function(e){let t=null;if(Pe(E.beforeSanitizeElements,e,null),Re(e))return Me(e),!0;const n=ke(e.nodeName);if(Pe(E.uponSanitizeElement,e,{tagName:n,allowedTags:z}),e.hasChildNodes()&&!ze(e.firstElementChild)&&eP(/<[/\w!]/g,e.innerHTML)&&eP(/<[/\w!]/g,e.textContent))return Me(e),!0;if(e.nodeType===IP)return Me(e),!0;if(G&&e.nodeType===MP&&eP(/<[/\w]/g,e.data))return Me(e),!0;if(!z[n]||W[n]){if(!W[n]&&He(n)){if(H.tagNameCheck instanceof RegExp&&eP(H.tagNameCheck,n))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(n))return!1}if(oe&&!le[n]){const t=x(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let n=r.length-1;n>=0;--n){const i=m(r[n],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return Me(e),!0}return e instanceof d&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const r=Kz(e.tagName),n=Kz(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===pe?t.namespaceURI===me?"svg"===r:t.namespaceURI===ge?"svg"===r&&("annotation-xml"===n||we[n]):Boolean(Oe[r]):e.namespaceURI===ge?t.namespaceURI===me?"math"===r:t.namespaceURI===pe?"math"===r&&$e[n]:Boolean(Ie[r]):e.namespaceURI===me?!(t.namespaceURI===pe&&!$e[n])&&!(t.namespaceURI===ge&&!we[n])&&!Ie[r]&&(Ce[r]||!Oe[r]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!eP(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&e.nodeType===OP&&(t=e.textContent,Hz([T,F,O],(e=>{t=Gz(t,e," ")})),e.textContent!==t&&(Vz(r.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(E.afterSanitizeElements,e,null),!1):(Me(e),!0)},Ne=function(e,t,r){if(ne&&("id"===t||"name"===t)&&(r in n||r in Ee))return!1;if(U&&!Y[t]&&eP(I,t));else if(V&&eP(M,t));else if(!L[t]||Y[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&eP(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&eP(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&eP(H.tagNameCheck,r)||H.tagNameCheck instanceof Function&&H.tagNameCheck(r))))return!1}else if(fe[t]);else if(eP(R,Gz(r,A,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Zz(r,"data:")||!ce[e]){if(K&&!eP(_,Gz(r,A,"")));else if(r)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&Xz(e,B)},We=function(e){Pe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Re(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,d=ke(a);let c="value"===a?l:Qz(l);if(n.attrName=d,n.attrValue=c,n.keepAttr=!0,n.forceKeepAttr=void 0,Pe(E.uponSanitizeAttribute,e,n),c=n.attrValue,!ie||"id"!==d&&"name"!==d||(_e(a,e),c="user-content-"+c),G&&eP(/((--!?|])>)|<\/(style|title)/i,c)){_e(a,e);continue}if(n.forceKeepAttr)continue;if(_e(a,e),!n.keepAttr)continue;if(!q&&eP(/\/>/i,c)){_e(a,e);continue}X&&Hz([T,F,O],(e=>{c=Gz(c,e," ")}));const u=ke(e.nodeName);if(Ne(u,d,c)){if(w&&"object"==typeof g&&"function"==typeof g.getAttributeType)if(s);else switch(g.getAttributeType(u,d)){case"TrustedHTML":c=w.createHTML(c);break;case"TrustedScriptURL":c=w.createScriptURL(c)}try{s?e.setAttributeNS(s,a,c):e.setAttribute(a,c),Re(e)?Me(e):Yz(r.removed)}catch(e){}}}Pe(E.afterSanitizeAttributes,e,null)},Ye=function e(t){let r=null;const n=Be(t);for(Pe(E.beforeSanitizeShadowDOM,t,null);r=n.nextNode();)Pe(E.uponSanitizeShadowNode,r,null),Le(r),We(r),r.content instanceof a&&e(r.content);Pe(E.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,d=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw tP("toString is not a function");if("string"!=typeof(e=e.toString()))throw tP("dirty is not a string, aborting")}if(!r.isSupported)return e;if(Q||Fe(t),r.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=ke(e.nodeName);if(!z[t]||W[t])throw tP("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)n=Ae("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,!0),o.nodeType===FP&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else{if(!ee&&!X&&!Z&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(n=Ae(e),!n)return ee?null:re?$:""}n&&J&&Me(n.firstChild);const c=Be(ae?e:n);for(;s=c.nextNode();)Le(s),We(s),s.content instanceof a&&Ye(s.content);if(ae)return e;if(ee){if(te)for(d=j.call(n.ownerDocument);n.firstChild;)d.appendChild(n.firstChild);else d=n;return(L.shadowroot||L.shadowrootmode)&&(d=D.call(i,d,!0)),d}let u=Z?n.outerHTML:n.innerHTML;return Z&&z["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&eP(DP,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),X&&Hz([T,F,O],(e=>{u=Gz(u,e," ")})),w&&re?w.createHTML(u):u},r.setConfig=function(){Fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},r.clearConfig=function(){De=null,Q=!1},r.isValidAttribute=function(e,t,r){De||Fe({});const n=ke(e),i=ke(t);return Ne(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&Vz(E[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=Wz(E[e],t);return-1===r?void 0:Uz(E[e],r,1)[0]}return Yz(E[e])},r.removeHooks=function(e){E[e]=[]},r.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const RP=q.default.div`
    display: flex;
    flex-direction: column;
`,zP=q.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${bl["spacing-8"]};
`,PP=q.default($w)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${xl.MaxWidth.xs} {
            padding: 0 ${bl["spacing-8"]};
        }
    }
`,LP=q.default(kd.Small)`
    margin: ${bl["spacing-32"]} 0;
`,NP=q.default.nav`
    display: flex;
`,HP=q.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${xl.MaxWidth.lg} {
        align-self: center;
    }
`,WP=q.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,YP=q.default(Ll)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${vl.sm};
    color: ${hl["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${hl["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${hl["bg-hover"]};
    }
`,VP=q.default(Ll)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${vl.sm};
    color: ${hl["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${hl["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${hl["bg-hover"]};
    }

    ${e=>"left"===e.$position?n.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:n.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${xl.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,UP=q.default.button`
    background: ${e=>e.$selected?hl["bg-primary"]:hl.bg};
    border: ${ml["width-010"]} ${ml.solid}
        ${e=>n.css`
                ${e.$selected?hl["bg-primary"]:hl.border}
            `};
    color: ${e=>e.$selected?hl["text-inverse"]:hl.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${vl.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?n.css`
                  ${gl["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${hl["bg-selected-strongest-hover"]};
                      background-color: ${hl["bg-selected-strongest-hover"]};
                      color: ${hl["text-inverse"]};
                  }
              `:n.css`
                  ${gl["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${hl["bg-hover"]};
                      background-color: ${hl["bg-hover"]};
                      color: ${hl["text-hover"]};
                      ${gl["body-baseline-semibold"]};
                  }
              `}
`;q.default(Ll)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${hl["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${vl.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${hl["icon-hover"]};
        }
    }
`;const KP=q.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${vl.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,qP=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${hl.text};

    display: flex;
    justify-content: center;
`,XP=q.default(exports.Typography.BodyBL)`
    white-space: nowrap;
`,GP=q.default(exports.Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,ZP=q.default($w)`
    ${gl["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${vl.sm};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${gl["body-xs-regular"]}
        }
    }
`,QP=q.default.div`
    ${gl["body-xs-regular"]}
    background-color: ${hl["bg-hover"]};
    border: none;
    border-radius: ${vl.sm};
    color: ${hl["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,JP=q.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,eL=U.default.forwardRef((({id:r,"data-testid":i,className:o,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:d=tL,showFirstAndLastNav:c,showPageSizeChanger:u=!1,onPageChange:f,onPageSizeChange:p},m)=>{const b=n.useTheme(),v=yl["sm-max"]({theme:b}),y=tc.useMediaQuery({maxWidth:v}),[x,w]=t.useState(!1),[$,C]=t.useState(!1),[S,j]=t.useState(""),[k,D]=t.useState(d[0]),[E,T]=t.useState(!y&&u&&k?k.value:a),F=Math.ceil(s/E),O=1===l,I=l===F,M=l>1?()=>U(1):void 0,_=l<F?()=>U(F):void 0,A=l>1?()=>U(l-1):void 0,B=l<F?()=>U(parseInt(l.toString())+1):void 0,R=e=>e?()=>J():()=>Z(),W=e=>e?()=>ee():()=>Q();t.useEffect((()=>{l&&Y(l)}),[l]),t.useEffect((()=>{T(a),D(d.find((e=>e.value===a)))}),[a]);const Y=e=>{j(e.toString())},V=()=>{w(!1),C(!1)},U=e=>{f&&(f(e),Y(e))},K=()=>{const e=Math.min(F,l+5);U(e),Y(e),w(!0),C(!1)},q=()=>{const e=Math.max(1,l-5);U(e),Y(e),w(!1),C(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(F,e)))}else j(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),S&&(null==f||f(parseInt(S)))},Z=()=>{w(!0)},Q=()=>{w(!1)},J=()=>{C(!0)},ee=()=>{C(!1)},te=(t,r,n)=>e.jsxs(KP,{children:[e.jsx(YP,{focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:R(t),onMouseOut:W(t),onFocus:R(t),onBlur:W(t),onClick:t?q:K,children:t&&$?e.jsx(z.Chevron2LeftIcon,{"aria-hidden":!0}):r&&x?e.jsx(P.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(H.EllipsisHorizontalIcon,{"aria-hidden":!0})}),t&&$&&e.jsx(QP,{children:"Previous 5 pages"}),r&&x&&e.jsx(QP,{children:"Next 5 pages"})]},n);return e.jsxs(NP,{className:o,ref:m,id:r||"pagination-wrapper","data-testid":i||"pagination","aria-label":"Pagination",children:[e.jsx(HP,{children:e.jsxs(WP,{children:[c&&e.jsx(VP,{onClick:M,disabled:O,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e.jsx(L.ChevronLineLeftIcon,{"aria-hidden":!0})}),e.jsx(VP,{onClick:A,disabled:O,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e.jsx(g.ChevronLeftIcon,{"aria-hidden":!0})}),y?e.jsxs(qP,{children:[e.jsx("form",{onSubmit:G,children:e.jsx(ZP,{value:S,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(i||"pagination")+"-input"})}),e.jsx(GP,{children:"/"}),e.jsx(XP,{children:F})]}):[...Array(F)].map(((t,r)=>{const n=r+1,i=F-5,o=l===n;if(F<=7)return e.jsx(UP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:V,onFocus:V,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===F-1-1;return a||s?te(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>F-1?e.jsx(UP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:V,onFocus:V,children:n},n):null})),e.jsx(VP,{onClick:B,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})}),c&&e.jsx(VP,{onClick:_,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e.jsx(N.ChevronLineRightIcon,{"aria-hidden":!0})})]})}),u&&!y&&e.jsx(JP,{children:e.jsx(rI,{options:d,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);T(t);p&&p(l>=r?r:l,t)}})})]})})),tL=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],rL=q.default.div`
    border-radius: ${vl.full};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${gl["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,i;if("solid"===e.$type)switch(i=hl["text-inverse"],e.$color){case"grey":t=hl["bg-inverse-subtler"];break;case"green":t=hl["bg-success-strong"];break;case"yellow":t=hl["bg-warning-strong"];break;case"red":t=hl["bg-error-strong"];break;case"blue":t=hl["bg-info-strong"];break;default:t=hl["bg-inverse"]}else switch(e.$color){case"grey":t=hl["bg-stronger"],r=hl["border-strong"],i=hl["text-subtler"];break;case"green":t=hl["bg-success"],r=hl["border-success"],i=hl["text-success"];break;case"yellow":t=hl["bg-warning"],r=hl["border-warning"],i=hl["text-warning"];break;case"red":t=hl["bg-error"],r=hl["border-error"],i=hl["text-error"];break;case"blue":t=hl["bg-info"],r=hl["border-info"],i=hl["text-info"];break;default:t=hl.bg,r=hl.border,i=hl.text}return n.css`
            background: ${t};
            border: ${ml["width-010"]} ${ml.solid} ${r};
            color: ${i};
        `}}
`,nL=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,iL=t=>{var{type:r,colorType:n="black",children:i,icon:o}=t,a=ki(t,["type","colorType","children","icon"]);return e.jsxs(rL,Object.assign({$type:r,$color:n},a,{children:[o,e.jsx(nL,{children:i})]}))},oL=(e,t,r)=>t?ds(r,t)||ds(e,t):r||e,aL=(e,t)=>{const r=t||e.defaultValue;return ds(e.collections,r)};var sL;exports.V2_ThemeContextKeys=void 0,(sL=exports.V2_ThemeContextKeys||(exports.V2_ThemeContextKeys={})).colorScheme="colorScheme",sL.layout="layout",sL.textStyleScheme="textStyleScheme",sL.designTokenScheme="designTokenScheme",sL.resourceScheme="resourceScheme";const lL={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},dL=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=aL(lL,null==n?void 0:n[exports.V2_ThemeContextKeys.colorScheme]);return n.options&&n.options.color?oL(i,e,n.options.color):oL(i,e)},cL={Brand:{1:dL("Brand.1"),2:dL("Brand.2"),3:dL("Brand.3"),4:dL("Brand.4"),5:dL("Brand.5"),6:dL("Brand.6")},Primary:dL("Primary"),PrimaryDark:dL("PrimaryDark"),Secondary:dL("Secondary"),Accent:{Light:{1:dL("Accent.Light.1"),2:dL("Accent.Light.2"),3:dL("Accent.Light.3"),4:dL("Accent.Light.4"),5:dL("Accent.Light.5"),6:dL("Accent.Light.6")},Dark:{1:dL("Accent.Dark.1"),2:dL("Accent.Dark.2"),3:dL("Accent.Dark.3")}},Neutral:{1:dL("Neutral.1"),2:dL("Neutral.2"),3:dL("Neutral.3"),4:dL("Neutral.4"),5:dL("Neutral.5"),6:dL("Neutral.6"),7:dL("Neutral.7"),8:dL("Neutral.8")},Validation:{Green:{Text:dL("Validation.Green.Text"),Icon:dL("Validation.Green.Icon"),Border:dL("Validation.Green.Border"),Background:dL("Validation.Green.Background")},Orange:{Text:dL("Validation.Orange.Text"),Icon:dL("Validation.Orange.Icon"),Border:dL("Validation.Orange.Border"),Background:dL("Validation.Orange.Background"),Badge:dL("Validation.Orange.Badge")},Red:{Text:dL("Validation.Red.Text"),Icon:dL("Validation.Red.Icon"),Border:dL("Validation.Red.Border"),Background:dL("Validation.Red.Background")},Blue:{Text:dL("Validation.Blue.Text"),Icon:dL("Validation.Blue.Icon"),Border:dL("Validation.Blue.Border"),Background:dL("Validation.Blue.Background")}},Shadow:{Accent:dL("Shadow.Accent"),Red:dL("Shadow.Red"),Elevation:dL("Shadow.Elevation")}},uL={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},fL={D1:{fontFamily:uL.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:uL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:uL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:uL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:uL.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:uL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:uL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:uL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:uL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:uL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:uL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:uL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:uL.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:uL.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},hL={D1:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:uL.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:uL.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:uL.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:uL.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:uL.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},gL={collections:{base:fL,oneservice:{D1:{fontFamily:uL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:uL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:uL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:uL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:uL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:uL.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:uL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:uL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:uL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:uL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:uL.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:uL.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:uL.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:uL.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:hL},defaultValue:"base"},pL=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=aL(gL,null==n?void 0:n[exports.V2_ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?oL(i,e,n.options.textStyle):oL(i,e)},mL={D1:{fontFamily:pL("D1.fontFamily"),fontSize:pL("D1.fontSize"),fontWeight:pL("D1.fontWeight"),lineHeight:pL("D1.lineHeight"),letterSpacing:pL("D1.letterSpacing"),fontVariant:pL("D1.fontVariant")},D2:{fontFamily:pL("D2.fontFamily"),fontSize:pL("D2.fontSize"),fontWeight:pL("D2.fontWeight"),lineHeight:pL("D2.lineHeight"),letterSpacing:pL("D2.letterSpacing"),fontVariant:pL("D2.fontVariant")},D3:{fontFamily:pL("D3.fontFamily"),fontSize:pL("D3.fontSize"),fontWeight:pL("D3.fontWeight"),lineHeight:pL("D3.lineHeight"),letterSpacing:pL("D3.letterSpacing"),fontVariant:pL("D3.fontVariant")},D4:{fontFamily:pL("D4.fontFamily"),fontSize:pL("D4.fontSize"),fontWeight:pL("D4.fontWeight"),lineHeight:pL("D4.lineHeight"),letterSpacing:pL("D4.letterSpacing"),fontVariant:pL("D4.fontVariant")},DBody:{fontFamily:pL("DBody.fontFamily"),fontSize:pL("DBody.fontSize"),fontWeight:pL("DBody.fontWeight"),lineHeight:pL("DBody.lineHeight"),letterSpacing:pL("DBody.letterSpacing"),fontVariant:pL("DBody.fontVariant")},H1:{fontFamily:pL("H1.fontFamily"),fontSize:pL("H1.fontSize"),fontWeight:pL("H1.fontWeight"),lineHeight:pL("H1.lineHeight"),letterSpacing:pL("H1.letterSpacing"),fontVariant:pL("H1.fontVariant")},H2:{fontFamily:pL("H2.fontFamily"),fontSize:pL("H2.fontSize"),fontWeight:pL("H2.fontWeight"),lineHeight:pL("H2.lineHeight"),letterSpacing:pL("H2.letterSpacing"),fontVariant:pL("H2.fontVariant")},H3:{fontFamily:pL("H3.fontFamily"),fontSize:pL("H3.fontSize"),fontWeight:pL("H3.fontWeight"),lineHeight:pL("H3.lineHeight"),letterSpacing:pL("H3.letterSpacing"),fontVariant:pL("H3.fontVariant")},H4:{fontFamily:pL("H4.fontFamily"),fontSize:pL("H4.fontSize"),fontWeight:pL("H4.fontWeight"),lineHeight:pL("H4.lineHeight"),letterSpacing:pL("H4.letterSpacing"),fontVariant:pL("H4.fontVariant")},H5:{fontFamily:pL("H5.fontFamily"),fontSize:pL("H5.fontSize"),fontWeight:pL("H5.fontWeight"),lineHeight:pL("H5.lineHeight"),letterSpacing:pL("H5.letterSpacing"),fontVariant:pL("H5.fontVariant")},H6:{fontFamily:pL("H6.fontFamily"),fontSize:pL("H6.fontSize"),fontWeight:pL("H6.fontWeight"),lineHeight:pL("H6.lineHeight"),letterSpacing:pL("H6.letterSpacing"),fontVariant:pL("H6.fontVariant")},Body:{fontFamily:pL("Body.fontFamily"),fontSize:pL("Body.fontSize"),fontWeight:pL("Body.fontWeight"),lineHeight:pL("Body.lineHeight"),letterSpacing:pL("Body.letterSpacing"),fontVariant:pL("Body.fontVariant")},BodySmall:{fontFamily:pL("BodySmall.fontFamily"),fontSize:pL("BodySmall.fontSize"),fontWeight:pL("BodySmall.fontWeight"),lineHeight:pL("BodySmall.lineHeight"),letterSpacing:pL("BodySmall.letterSpacing"),fontVariant:pL("BodySmall.fontVariant")},XSmall:{fontFamily:pL("XSmall.fontFamily"),fontSize:pL("XSmall.fontSize"),fontWeight:pL("XSmall.fontWeight"),lineHeight:pL("XSmall.lineHeight"),letterSpacing:pL("XSmall.letterSpacing"),fontVariant:pL("XSmall.fontVariant")}},bL=[uL.OpenSans,uL.PlusJakartaSans],vL=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},yL=(e,t)=>r=>{var i,o,a,s,l;const d=null===(o=(i=mL[e]).fontFamily)||void 0===o?void 0:o.call(i,r),c=null===(s=(a=mL[e]).fontWeight)||void 0===s?void 0:s.call(a,r),u=bL.find((e=>Object.values(e).includes(d)));return u?n.css`
                font-family: ${vL(u,t)||vL(u,c)||d};
                font-weight: normal !important;
            `:n.css`
            font-family: ${d};
            font-weight: ${null!==(l=xL(t)||c)&&void 0!==l?l:"normal"};
        `},xL=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wL=e=>{if(e)return n.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$L={getFontFamily:yL,getTextStyle:(e,t,r=!1)=>i=>{var o,a,s;const l=mL[e],d=(null===(o=l.fontSize)||void 0===o?void 0:o.call(l,i))||1;return n.css`
            ${yL(e,t)}
            font-size: ${d}rem !important;
            line-height: ${l.lineHeight}rem !important;
            letter-spacing: ${(null===(a=l.letterSpacing)||void 0===a?void 0:a.call(l,i))||0}rem !important;
            font-variant: ${(null===(s=l.fontVariant)||void 0===s?void 0:s.call(l,i))||"normal"};
            ${(()=>{const e=r?1.05:0;return n.css`
                margin-bottom: ${d*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?n.css`
            display: block;
            ${wL(r)}
        `:e?n.css`
            display: inline;
        `:n.css`
            display: block;
            ${wL(r)}
        `};var CL;exports.V2_Text=void 0,(CL=exports.V2_Text||(exports.V2_Text={})).D1=q.default.h1`
        ${e=>n.css`
                ${$L.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.D2=q.default.h1`
        ${e=>n.css`
                ${$L.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.D3=q.default.h1`
        ${e=>n.css`
                ${$L.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.D4=q.default.h1`
        ${e=>n.css`
                ${$L.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.DBody=q.default.h1`
        ${e=>n.css`
                ${$L.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.H1=q.default.h1`
        ${e=>n.css`
                ${$L.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.H2=q.default.h2`
        ${e=>n.css`
                ${$L.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.H3=q.default.h3`
        ${e=>n.css`
                ${$L.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.H4=q.default.h4`
        ${e=>n.css`
                ${$L.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.H5=q.default.h5`
        ${e=>n.css`
                ${$L.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.H6=q.default.h6`
        ${e=>n.css`
                ${$L.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.Body=q.default.p`
        ${e=>n.css`
                ${$L.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.BodySmall=q.default.p`
        ${e=>n.css`
                ${$L.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.XSmall=q.default.span`
        ${e=>n.css`
                ${$L.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${cL.Neutral[1]};
                ${$L.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,CL.Hyperlink={Default:e=>kL(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>kL(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const SL=q.default.a`
    ${e=>n.css`
            ${$L.getTextStyle(e.textStyle,e.weight)}
            color: ${cL.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${cL.Secondary};

                svg {
                    color: ${cL.Secondary};
                }
            }
        `}
`,jL=q.default(o.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,kL=t=>{var{external:r=!1,children:n}=t,i=ki(t,["external","children"]);return e.jsxs(SL,Object.assign({},i,{children:[n,r&&e.jsx(jL,{})]}))},DL={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},EL=q.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?n.css`
            visibility: visible;
            opacity: 1;
            transition: ${DL.Base};
            z-index: 50;
        `:n.css`
            visibility: hidden;
            opacity: 0;
            transition: ${DL.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return n.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return n.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return n.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return n.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return n.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return n.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${Rg.MaxWidth.mobileL} {
        display: none;
    }
`,TL=q.default(lp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,FL=q.default.div`
    position: relative;
    width: fit-content;
`,OL=q.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,IL=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,ML=r=>{var{children:n,visible:i,onMobileClose:o}=r,a=ki(r,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",[l,d]=t.useState("none"),c=t.useRef(null),u=tc.useMediaQuery({maxWidth:Ag.mobileL}),f=t.useRef(l);t.useEffect((()=>(p(),window.addEventListener("resize",Tf(h,300)),()=>{window.removeEventListener("resize",Tf(h,300))})),[]);const h=()=>{p()},g=()=>{o&&o()},p=()=>{const e=m();var t;e&&(t=e,f.current=t,d(t))},m=()=>{if(c.current){const e=c.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},b=()=>"string"==typeof n?e.jsx(exports.V2_Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[e.jsx(EL,Object.assign({ref:c,"data-testid":s,$visible:i,$offset:l},a,{children:e.jsx(ef,{children:b()})})),u&&e.jsx(op,{show:null!=i&&i,onOverlayClick:g,children:e.jsx(TL,{onClose:g,children:e.jsx(IL,{children:b()})})})]})},_L=q.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${xl.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${xl.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,AL=q.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,BL=q.default.div`
    height: 4px;
    margin-bottom: ${bl["spacing-8"]};
    border-radius: ${vl.full};
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?hl["bg-primary-subtle"]:hl["bg-disabled"])(e)};\n        `}};
`,RL=q.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?hl["text-primary"]:hl["text-disabled"])(e)};`}};
`,zL=q.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${hl.text};
`,PL=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var LL=function(e){return function(t){return null==e?void 0:e[t]}},NL=LL({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),HL=Ga,WL=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,YL=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var VL=function(e){return(e=HL(e))&&e.replace(WL,NL).replace(YL,"")},UL=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var KL=function(e){return e.match(UL)||[]},qL=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var XL=function(e){return qL.test(e)},GL="\\ud800-\\udfff",ZL="\\u2700-\\u27bf",QL="a-z\\xdf-\\xf6\\xf8-\\xff",JL="A-Z\\xc0-\\xd6\\xd8-\\xde",eN="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tN="["+eN+"]",rN="\\d+",nN="["+ZL+"]",iN="["+QL+"]",oN="[^"+GL+eN+rN+ZL+QL+JL+"]",aN="(?:\\ud83c[\\udde6-\\uddff]){2}",sN="[\\ud800-\\udbff][\\udc00-\\udfff]",lN="["+JL+"]",dN="(?:"+iN+"|"+oN+")",cN="(?:"+lN+"|"+oN+")",uN="(?:['’](?:d|ll|m|re|s|t|ve))?",fN="(?:['’](?:D|LL|M|RE|S|T|VE))?",hN="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",gN="[\\ufe0e\\ufe0f]?",pN=gN+hN+("(?:\\u200d(?:"+["[^"+GL+"]",aN,sN].join("|")+")"+gN+hN+")*"),mN="(?:"+[nN,aN,sN].join("|")+")"+pN,bN=RegExp([lN+"?"+iN+"+"+uN+"(?="+[tN,lN,"$"].join("|")+")",cN+"+"+fN+"(?="+[tN,lN+dN,"$"].join("|")+")",lN+"?"+dN+"+"+uN,lN+"+"+fN,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rN,mN].join("|"),"g");var vN=KL,yN=XL,xN=Ga,wN=function(e){return e.match(bN)||[]};var $N=IO,CN=VL,SN=function(e,t,r){return e=xN(e),void 0===(t=r?void 0:t)?yN(e)?wN(e):vN(e):e.match(t)||[]},jN=RegExp("['’]","g");var kN=Ii(function(e){return function(t){return $N(SN(CN(t).replace(jN,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const DN=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?n.css`
                height: 1.5rem;
                width: 1.5rem;
            `:n.css`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,EN=q.default(u.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?hl["icon-disabled-subtle"](e):hl["icon-subtle"](e)};
    transition: ${pl["duration-150"]} ${pl["ease-default"]};
`,TN=q.default(u.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?hl["icon-selected-disabled"](e):hl["icon-selected"](e)};

    transition: ${pl["duration-150"]} ${pl["ease-default"]};
`,FN=q.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${EN}, &:hover + ${TN} {
        color: ${e=>!e.disabled&&hl["icon-hover"](e)};
    }
`,ON=q.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,IN=q.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};
    background-color: ${hl["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,MN=q.default(IN)`
    height: 100vh;
    left: 0;
    top: 0;
    ${xl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,_N=q.default(IN)`
    display: none;
    visibility: hidden;
    ${xl.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,AN=q.default(Ci.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${hl["bg-primary-subtlest"]};
    border-top-right-radius: ${vl.md};
    border-bottom-right-radius: ${vl.md};
    border: ${ml["width-010"]} ${ml.solid} ${hl.border};

    ${e=>e.$showDrawer?n.css`
                  box-shadow: 0 0 4px
                      rgb(from ${hl.Primitive["neutral-20"]} r g b / 25%);
              `:n.css`
                  border: 0;
                  padding: 0;
              `};
`,BN=q.default.li`
    width: 100%;
`,RN=q.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${vl.md};
    color: ${hl["icon-primary"]};
    transition: ${pl["duration-250"]} ${pl["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,zN=q.default(exports.Typography.BodyXS)`
    ${Nl(2)}
    margin-top: 0.25rem;
    transition: ${pl["duration-250"]} ${pl["ease-default"]};
`,PN=q.default($h)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${RN} {
            background-color: ${hl["bg-hover"]};
        }

        ${zN} {
            ${gl["body-xs-semibold"]}
            color: ${hl["text-hover"]};
        }
    }

    ${e=>e.$highlight&&n.css`
            ${RN} {
                background-color: ${hl["bg-hover"]};
            }

            ${zN} {
                ${gl["body-xs-semibold"]}
                color: ${hl["text-selected"]};
            }
        `}
`,LN=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),NN=q.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,HN=q.default.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${hl.border};
`,WN=q.default(Ci.li)``,YN=q.default($h)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${vl.md};

    ${gl["body-md-semibold"]}
    color: ${hl.text};

    ${e=>e.$noChildren?n.css`
                  :hover,
                  :focus {
                      background: ${hl["bg-hover"]};
                      color: ${hl["text-hover"]};
                  }
              `:n.css`
                  :hover,
                  :focus {
                      background: ${hl["bg-hover-strong"]};
                  }
              `}
`,VN=q.default(Ci.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,UN=q.default(i.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${hl.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${pl["duration-150"]} ${pl["ease-default"]};
`,KN=q.default.span`
    ${Nl(2)}
    text-align: left;
`,qN=q.default(Ci.ul)``,XN=q.default.li``,GN=q.default($h)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${vl.md};

    ${gl["body-md-regular"]}
    color: ${hl.text};
    ${Nl(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${hl["bg-hover"]};
        color: ${hl["text-hover"]};
    }
`,ZN=Object.assign((r=>{var{fixed:n=!0,children:i}=r,o=ki(r,["fixed","children"]);const a=t.useRef(null),[s,l]=t.useState(void 0),[d,c]=t.useState(void 0),[u,f]=t.useState(void 0),[h,g]=t.useState(!1),p=t.useMemo((()=>({currentItem:s,selectedItem:d,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:c,setPreviouslySelectedItemId:f})),[s,d,u,l,c,f]),m=oi({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return Pc("click",(e=>{a.current&&!a.current.contains(e.target)&&(c({itemId:u||(d?d.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{g(!!(null==d?void 0:d.content)||!!(null==s?void 0:s.content))}),[s,d]),e.jsx(LN.Provider,{value:p,children:e.jsxs(ON,Object.assign({$fixed:n},o,{ref:a,onMouseLeave:()=>{l(void 0)},children:[e.jsx(MN,{children:i}),e.jsx(AN,{style:m,$showDrawer:h,"data-testid":"sidenav-drawer",children:s&&s.content||d&&d.content}),e.jsx(_N,{})]}))})}),{Group:t=>{var{separator:r,children:n}=t,i=ki(t,["separator","children"]);return e.jsxs(NN,Object.assign({},i,{children:[n,r&&e.jsx(HN,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=ki(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:d,previouslySelectedItemId:c,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:g}=t.useContext(LN);t.useEffect((()=>{s.selected&&g({itemId:l,content:void 0})}),[s.selected]);return e.jsx(BN,{children:e.jsxs(PN,Object.assign({type:"button",onClick:()=>{h((()=>{if(n&&u)return c||u.itemId})()),f({itemId:l,content:n}),g({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{f({itemId:l,content:n})}},s,{$highlight:!!u&&u.itemId===l||!!d&&d.itemId===l,children:[e.jsx(RN,{children:i}),e.jsx(zN,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:a}=r,s=ki(r,["id","title","onClick","children"]);const[l,d]=t.useState(!0),[c,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:g,setCurrentItem:p}=t.useContext(LN),m=oi({from:{opacity:0},to:{opacity:1}}),b=Ye(),v=b.ref,y=oi({height:a&&l?b.height:0});return e.jsxs(WN,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m,children:[e.jsxs(YN,{type:"button",onClick:()=>{a?d(!l):(h({itemId:null==f?void 0:f.itemId,content:void 0}),p(void 0),g(void 0),o&&o(n))},$highlight:c&&l,$noChildren:!a,children:[e.jsx(KN,{children:i}),a&&e.jsx(UN,{"aria-hidden":!0,$expanded:l})]}),e.jsx(VN,{style:y,children:e.jsx(qN,{ref:v,children:a})})]}))},DrawerSubitem:r=>{var{id:n,title:i,onClick:o}=r,a=ki(r,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:d,setPreviouslySelectedItemId:c}=t.useContext(LN);return e.jsx(XN,Object.assign({},a,{children:e.jsx(GN,{type:"button",onClick:()=>{o&&o(n),l({itemId:null==s?void 0:s.itemId,content:void 0}),d(void 0),c(void 0)},children:i})}))}}),QN=e=>"red-filled"===e?"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_red_filled.svg":"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_white_filled.svg",JN=q.default.button`
    padding: ${bl["spacing-8"]} ${bl["spacing-16"]};
    transition: all ${pl["duration-250"]} ${pl["ease-default"]};
    border-radius: ${hd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${e=>"red-filled"===e.$buttonStyle?n.css`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    background-color: #b0262d;
                }
            `:n.css`
            background-color: ${hl.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                background-color: #f5f5f7;
            }
        `}

    ${e=>{switch(e.$buttonSizeStyle){case"small":return n.css`
                    height: 2.5rem;
                `;case"large":return n.css`
                    min-height: 4rem;
                `;default:return n.css`
                    min-height: 3rem;
                `}}}
`,eH=q.default.span`
    img {
        height: 100%;
    }

    height: ${e=>"large"===e.$buttonSizeStyle?2.5:1.5}rem;
`,tH=(t,r)=>{const{styleType:n="white-filled"}=t,i=ki(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"default"};return e.jsx(JN,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e.jsx(eH,{$buttonSizeStyle:"default",children:e.jsx("img",{src:QN(n),alt:""})})}))};tH.displayName="SingpassButton.Default";const rH=(t,r)=>{const{styleType:n="white-filled"}=t,i=ki(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"small"};return e.jsx(JN,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e.jsx(eH,{$buttonSizeStyle:"small",children:e.jsx("img",{src:QN(n),alt:""})})}))};rH.displayName="SingpassButton.Small";const nH=(t,r)=>{const{styleType:n="white-filled"}=t,i=ki(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"large"};return e.jsx(JN,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e.jsx(eH,{$buttonSizeStyle:"large",children:e.jsx("img",{src:QN(n),alt:""})})}))};nH.displayName="SingpassButton.Large";const iH={Default:U.default.forwardRef(tH),Small:U.default.forwardRef(rH),Large:U.default.forwardRef(nH)},oH=n.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,aH=q.default.div`
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
    background: ${hl.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${vl.md};
    ${e=>{if(e.$isAnimated)return n.css`
                animation: ${oH} 0.3s;
            `}}
`,sH=q.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,lH=q.default(Ll)`
    padding: 0;
`,dH=q.default(m.CrossIcon)`
    color: ${hl.icon};
    height: 1.25rem;
    width: 1.25rem;
`,cH=q.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,uH=q.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${xl.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,fH=q.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,hH=q.default.div`
    max-width: 30%;
`,gH=q.default(kd.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${gl["body-xs-semibold"]}
    }
`,pH=q.default(exports.Typography.BodySM)`
    font-weight: ${gl.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${xl.MaxWidth.xs} {
        ${gl["body-xs-bold"]}
    }
`,mH=q.default(exports.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,bH=q.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,vH=n.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,yH=q.default(v.StarFillIcon)`
    ${vH}
`,xH=q.default(W.StarHalfIcon)`
    ${vH}
`,wH=q.default(b.StarIcon)`
    ${vH}
`,$H="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",CH="smart-app-banner";const SH=U.default.forwardRef((function(t,r){const{className:n,show:i,href:o,content:a,offset:s=0,icon:l=$H,animated:d=!1,onDismiss:c,onClick:u}=t,{title:f,message:h,buttonLabel:g,buttonAriaLabel:p,numberOfStars:m}=a,b=e=>{e.stopPropagation(),window.open(o,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(aH,{ref:r,$isAnimated:d,$offset:s,className:n,children:[e.jsx(sH,{onClick:c,id:`${CH}-dismiss`,"data-testid":`${CH}-dismiss-container`,children:e.jsx(lH,{"aria-label":"Dismiss",children:e.jsx(dH,{})})}),e.jsxs(cH,{onClick:b,id:`${CH}-proceed`,"data-testid":`${CH}-proceed-container`,children:[e.jsx(fH,{src:l,alt:"lifesg-app-icon"}),e.jsxs(uH,{children:[e.jsx(pH,{children:f}),e.jsx(mH,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],r=m-Math.floor(m)>=.4;for(let r=0;r<Math.floor(m);r++)t.push(e.jsx(yH,{},`star${r}`));if(r&&t.push(e.jsx(xH,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e.jsx(wH,{},`emptystar${n}`))}return e.jsx(bH,{children:t.slice(0,5)})})()]}),e.jsx(hH,{children:e.jsx(gH,{type:"button",onClick:b,"aria-label":p,children:g})})]})]})})})),jH=U.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),kH=q.default.div`
    position: relative;
    width: 100%;
`,DH=q.default.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",i=hl.bg(e);return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?`${i}, ${i}`:`${i}`)},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?`${i}, ${i}`:`${i}`)},\n                    ${r}\n                );\n            `,n.css`
            ${xl.MaxWidth.lg} {
                ${t}
            }
        `}};
`,EH=q.default.div`
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
`,TH=q.default(Ll)`
    display: none;

    ${xl.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?n.css`
                    justify-content: left;
                    padding-left: ${bl["spacing-8"]};
                `:n.css`
                    justify-content: right;
                    padding-right: ${bl["spacing-8"]};
                `}

        svg {
            color: ${hl.icon};
        }
    }
`,FH=t.forwardRef(((r,n)=>{var{children:i,fadeColor:o,fadePosition:a="both",showIndicator:s=!1,onResize:l}=r,d=ki(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[c,u]=t.useState("left"===a||"both"===a),[f,p]=t.useState("right"===a||"both"===a),m=t.useRef(null),b=t.useRef(null),v=Af(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(p(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(p(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}Ye({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(n,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(kH,Object.assign({ref:m},d,{children:[e.jsx(EH,{ref:b,children:i}),(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[c&&e.jsx(DH,{$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade",children:s&&e.jsx(TH,{$position:"left","data-id":"left-fade-indicator-button",children:e.jsx(g.ChevronLeftIcon,{})})}),f&&e.jsx(DH,{$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade",children:s&&e.jsx(TH,{$position:"right","data-id":"right-fade-indicator-button",children:e.jsx(h.ChevronRightIcon,{})})})]})})()]}))})),OH=q.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return n.css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${ml["width-040"]} ${ml.solid}
                        ${hl.border};
                }
            `}}
`,IH=q.default.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${ml["width-040"]} ${ml.solid} ${hl.border};

    ${e=>{if(e.$width)return n.css`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return n.css`
                border-color: ${hl["border-primary"]};
            `}}

    ${xl.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,MH=q.default.button`
    position: relative;
    padding: ${bl["spacing-16"]} ${bl["spacing-16"]}
        ${bl["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,_H=q.default(exports.Typography.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${hl["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return n.css`
                opacity: 0;
            `}}
`,AH=q.default(exports.Typography.BodyBL)`
    color: ${hl["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return n.css`
                opacity: 1;
            `}}
`,BH=q.default(FH)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${bl["spacing-4"]};
    }
`,RH=({controlledMode:r,"data-testid":i,onTabClick:o,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:d}=t.useContext(jH),c=n.useTheme(),u=yl["md-max"]({theme:c}),f=tc.useMediaQuery({maxWidth:u}),h=yl["lg-max"]({theme:c}),g=t.useRef(null),p=e=>t=>{t.preventDefault(),r||s(e),o&&o(d[e].title,e)},m=e=>f&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(BH,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=h&&g.current&&(e.scrollLeft=g.current.getBoundingClientRect().left)},"data-testid":i,children:e.jsx(OH,{role:"tablist",$fullWidthIndicatorLine:a,children:d.map(((t,r)=>{const n=l===r;return e.jsx(IH,{role:"none",$active:n,ref:n?g:null,$width:t.width,children:e.jsxs(MH,{role:"tab",type:"button","aria-selected":n,onClick:p(r),"data-testid":`${i}-link-${r}`,children:[e.jsx(_H,{$active:n,weight:"regular",children:m(t.title)}),e.jsx(AH,{$active:n,weight:"semibold","aria-hidden":"true",children:m(t.title)})]})},r)}))})})},zH=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,PH=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:a,"data-testid":s,fullWidthIndicatorLine:l}=r,d=ki(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[c,u]=t.useState(i||o),f=t.useMemo((()=>t.Children.toArray(n).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[n]);t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);return e.jsx(zH,Object.assign({"data-testid":s},d,{children:e.jsxs(jH.Provider,{value:{tabLinks:f,currentActiveIndex:c,setCurrentActiveIndex:u},children:[e.jsx(RH,{controlledMode:"number"==typeof i,onTabClick:a,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(n).filter(Boolean).map(((e,r)=>t.cloneElement(e,{key:r,index:r})))]})}))}),{Item:r=>{var{index:n,children:i}=r,o=ki(r,["index","children"]);const{currentActiveIndex:a}=t.useContext(jH);return a===n?e.jsx("div",Object.assign({role:"tabpanel"},o,{children:i})):null}}),LH=q.default.div`
    border-radius: ${vl.sm};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${gl["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,i,o,a;if("solid"===e.$type)switch(i=hl["text-inverse"],e.$color){case"grey":t=hl["bg-inverse-subtler"],o=hl["bg-inverse-hover"];break;case"green":t=hl["bg-success-strong"],o=hl["bg-success-strong-hover"];break;case"yellow":t=hl["bg-warning-strong"],o=hl["bg-warning-strong-hover"];break;case"red":t=hl["bg-error-strong"],o=hl["bg-error-strong-hover"];break;case"blue":t=hl["bg-info-strong"],o=hl["bg-info-strong-hover"];break;default:t=hl["bg-inverse"],o=hl["bg-inverse-hover"]}else switch(e.$color){case"grey":t=hl["bg-strong"],r=hl["border-strong"],i=hl["text-subtle"],o=hl["bg-hover-neutral-strong"];break;case"green":t=hl["bg-success"],r=hl["border-success"],i=hl["text-success"],o=hl["bg-success-hover"];break;case"yellow":t=hl["bg-warning"],r=hl["border-warning"],i=hl["text-warning"],o=hl["bg-warning-hover"];break;case"red":t=hl["bg-error"],r=hl["border-error"],i=hl["text-error"],o=hl["bg-error-hover"];break;case"blue":t=hl["bg-info"],r=hl["border-info"],i=hl["text-info"],o=hl["bg-info-hover"];break;default:t=hl.bg,r=hl.border,i=hl.text,o=hl["bg-hover-neutral"]}return n.css`
            background: ${t};
            border: ${ml["width-010"]} ${ml.solid} ${r};
            color: ${i};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&o&&`background: ${o(e)};`}
                    ${e.$interactive&&a}
                }
            }
        `}}

    ${xl.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return n.css`
                    ${gl["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,NH=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var HH;mc.extend(vc),function(e){e.formatHourlyDisplay=e=>mc(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>_c.getTimeDiffInMinutes(e,t)/15*(r/2)}(HH||(HH={}));const WH=1.25,YH=e=>"minified"===e?12:40,VH=e=>"minified"===e?12:40,UH=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,KH=q.default(Ll)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${hl.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${hl.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?n.css`
                  right: 0;
              `:n.css`
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
`,qH=q.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${hl["icon-primary"]};
`,XH=q.default(g.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${hl["icon-primary"]};
`,GH=q.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+VH(e)}px`};
`,ZH=q.default.div`
    position: relative;
    white-space: nowrap;
    height: ${WH}rem;
`,QH=q.default.div`
    display: flex;
    white-space: nowrap;
`,JH=q.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${YH(e)}px`};
    position: relative;
    border-left: ${ml["width-010"]} ${ml.solid}
        ${hl["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?WH:.625;break;case"minified":t=e.$isLongMarker?WH:0;break;default:t=0}return n.css`
            height: ${t}rem;
        `}}
`,eW=q.default(exports.Typography.BodyXS)`
    color: ${hl["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,tW=q.default.div`
    ${e=>"vertical"===e.$type?n.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:n.css`
                position: absolute;
                height: ${VH(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&n.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||hl["bg-strongest"]} 0px,
                ${e.$bgColor2||hl["bg-strongest"]} 10px,
                ${e.$bgColor||hl["bg-stronger"]} 10px,
                ${e.$bgColor||hl["bg-stronger"]} 20px
            );
        `}
`,rW=q.default.div`
    position: absolute;
    top: ${WH}rem;
    height: ${({$variant:e})=>`${VH(e)}px`};
    z-index: 1;
    border-right: ${ml["width-010"]} ${ml.solid}
        ${hl["border-stronger"]};
`,nW=q.default(exports.Typography.BodyXS)`
    color: ${e=>e.$color||hl.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,iW=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${bl["spacing-8"]};
    flex: 1;
`,oW=q.default(exports.Typography.BodyXS)`
    ${e=>e.$disabled&&n.css`
            color: ${hl["text-disabled-subtlest"]};
        `}
`,aW=q.default.div`
    grid-column: 2 / -1;
    display: flex;
`,sW=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${bl["spacing-4"]};
`,lW=q.default(Ci.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,dW=q.default.div`
    display: flex;
    gap: ${bl["spacing-4"]};
    transition: all ${pl["duration-250"]} ${pl["ease-default"]};
    overflow: hidden;
`,cW=q.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${bl["spacing-4"]};
    width: 1.375rem;
    transition: all ${pl["duration-250"]} ${pl["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,uW=q.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,fW=q.default.div`
    ${gl["body-xs-bold"]}
    color: ${hl["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${gl.Spec["body-size-sm"]};
    }
`,hW=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${bl["spacing-4"]};
`,gW=q.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${bl["spacing-8"]};
`,pW=q.default(kd.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${bl["spacing-8"]};
    }
`,mW=q.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${pl["duration-250"]} ${pl["ease-default"]};
`,bW=q.default(tW)`
    ${e=>{if("vertical"===e.$type)return n.css`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${vl.xs};
            `}}

    ${e=>e.$halfFill?n.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${hl["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||hl["bg-strongest"]} 0px,\n                            ${e.$bgColor2||hl["bg-strongest"]} 10px,\n                            ${e.$bgColor||hl["bg-stronger"]} 10px,\n                            ${e.$bgColor||hl["bg-stronger"]} 20px\n                        )`};
            `:n.css`
                background-color: ${e.$bgColor};
            `}
`;var vW=Ji;var yW=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!vW(a):r(a,s)))var s=a,l=o}return l};var xW=yW,wW=AS,$W=function(e,t){return e<t};var CW=Ii((function(e,t){return e&&e.length?xW(e,wW(t),$W):void 0}));var SW=yW,jW=function(e,t){return e>t},kW=AS;var DW=Ii((function(e,t){return e&&e.length?SW(e,kW(t),jW):void 0}));const EW=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,startTime:l,endTime:d,maxVisibleCellHeight:c,slots:u,interval:f=30,variant:h="flexible",enableSelection:g=!0,onSlotClick:p})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[C,S]=t.useState(),j=t.useMemo((()=>Ec.generateDaysForCurrentWeek(r)),[r]),k=Object.values(null!=u?u:{}).flat(),D=null!==(b=null!=l?l:null===(m=CW(k,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",E=null!==(y=null!=d?d:null===(v=DW(k,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",T=Math.ceil(_c.getTimeDiffInMinutes(D,E)/f),{height:F=0,ref:O}=Ye(),I=c?F<c||w?F:c:F,M=oi({height:I}),_=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,r])=>{const n=function(e){const t=Array(T).fill({});return e.forEach((e=>{const r=Math.max(0,_c.getTimeDiffInMinutes(D,e.startTime)/f),n=Math.min(T,_c.getTimeDiffInMinutes(D,e.endTime)/f),i=Math.ceil(n)-Math.floor(r);switch(h){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=_c.addMinutesToTime(D,Math.floor(r+o)*f),s=_c.addMinutesToTime(a,f);let l;gO(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return gO(t)&&gO(r)?e:[...e,t]}),[{}]);o<e.length;){if(gO(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:D,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:E;if(a!==s){const t=_c.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},P(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)gO(e[o])?(e[o]=P(o),o++):o+=e[o].cellLength}return e.filter((e=>!gO(e)&&e.cellLength>0))}(n)})),e}return{}}),[u]),A=e=>{S(e)},B=()=>{S(void 0)},R=e=>{e.preventDefault(),$((e=>!e))},z=e=>{var t;const r=Ec.isWithinRange(e,a?mc(a):void 0,s?mc(s):void 0),i=null!==(t=n&&n.includes(e.format(x)))&&void 0!==t&&t;return!r||i};function P(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:hl["bg-stronger"]},cellLength:t}}return e.jsxs(sW,{children:[e.jsx(aW,{children:j.map(((t,r)=>{const n=(e=>{const t=e.format(x),r=z(e),n={},o=g&&!r;r&&(n.disabled=!0),n.interactive=g?o:null;const a=o&&C&&e.isSame(C,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e.jsx(Lu,Object.assign({date:t,calendarDate:mc(i),onSelect:()=>{((e,t)=>{!t&&g&&o(e)})(t,!n.interactive)},onHover:A,onHoverEnd:B},n),`day-${r}`)}))}),e.jsx(aW,{children:j.map(((t,r)=>e.jsx(iW,{children:e.jsx(oW,{weight:"semibold",$disabled:z(t),children:mc(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=mc(D,"HH:mm").add(4*e*f,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e.jsx(cW,{$height:I,children:Array(Math.ceil(T/4)).fill(void 0).map(((t,n)=>e.jsx(uW,{children:e.jsx(fW,{children:r(n)})},`time-${n}`)))})})(),e.jsx(lW,{style:M,children:e.jsx(dW,{ref:O,children:j.map(((t,r)=>{var n;const i=t.format(x),o=null!==(n=_[i])&&void 0!==n?n:Array("flexible"===h?T:1).fill(void 0).map(((e,t)=>P(t,"fixed"===h?T:void 0)));return e.jsx(hW,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:d,backgroundColor2:c}=o;return e.jsx(bW,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:d,$bgColor2:c,$halfFill:s,$clickable:n,$height:"fixed"===h?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{p&&p(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(x)}`)}),(()=>{if(c&&O.current&&!(F&&F<c))return e.jsx(gW,{children:e.jsxs(pW,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:R,children:[e.jsx(mW,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]})})})()]})},TW=q.default.div`
    --header-bottom-spacing: 0.5rem;

    ${xl.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,FW="YYYY-MM-DD",OW=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,IW=q.default.div`
    ${gl["body-xs-semibold"]}
    color:${hl.text};

    ${e=>e.$disabled&&n.css`
            color: ${hl["text-disabled-subtlest"]};
        `};
`,MW=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,_W=q.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,AW=q.default.div`
    ${gl["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${hl.text};
    span {
        display: block;
    }
`,BW=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;mc.extend(xc);const RW="YYYY-MM-DD",zW={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:hl["bg-stronger"],backgroundColor2:hl["bg-strongest"]}},PW=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:d=!0,onSlotClick:c})=>{const u=t.useMemo((()=>Ec.generateDaysForCurrentWeek(r)),[r]),[f,h]=t.useState(),g=e=>{h(e)},p=()=>{h(void 0)},m=e=>{const t=e.format(RW),r=(e=>{const t=Ec.isWithinRange(e,a?mc(a):void 0,s?mc(s):void 0),r=!!n&&n.includes(e.format(RW));return!t||r})(e),o=d&&!r,l=o&&f&&e.isSame(f,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),c&&l?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):l&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return e.jsxs(MW,{children:[u.map(((t,r)=>{const n=m(t);return e.jsxs(OW,{children:[e.jsx(Lu,Object.assign({date:t,calendarDate:mc(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(t,!n.interactive)},onHover:g,onHoverEnd:p},n),`day-${r}`),e.jsx(IW,{$disabled:n.disabled,children:mc(t).format("ddd")})]},`week-day-${r}`)})),e.jsx(_W,{children:u.map(((t,r)=>{const n=t.format(RW),i=l&&(l[n]?l[n]:[zW]);return e.jsx(BW,{children:i&&i.map((t=>{const{id:r,startTime:i,endTime:o,clickable:a=!0,styleAttributes:s}=t,{color:l,styleType:d="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(tW,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:u,$bgColor2:f,$clickable:a,onClick:()=>a&&((e,t)=>{null==c||c(e,t)})(n,t),children:e.jsxs(AW,{style:{color:l},children:[e.jsx("span",{children:Ec.convertTo12HourFormat(i)}),o&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Ec.convertTo12HourFormat(o)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(RW)}`)]})},LW=q.default.div`
    --header-bottom-spacing: 0.5rem;

    ${xl.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,NW="YYYY-MM-DD",HW=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    ${e=>{switch(e.$variant){case"current":return n.css`
                    background-color: ${hl["icon-primary-subtle"]};
                `;case"upcoming-active":return n.css`
                    border: 4px solid ${hl["icon-primary-subtle"]};
                `;case"upcoming-inactive":return n.css`
                    border: 4px solid ${hl["icon-subtle"]};
                `;case"disabled":return n.css`
                    background-color: ${hl["icon-disabled-subtle"]};
                `;case"completed":return n.css`
                    background-color: ${hl["icon-success"]};
                    svg {
                        color: ${hl["icon-inverse"]};
                    }
                `;case"error":return n.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${hl["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,WW=q.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${vl.full};

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return n.css`
                    background-color: ${hl["icon-primary-subtle"]};
                `;case"upcoming-inactive":return n.css`
                    background-color: ${hl["icon-subtle"]};
                `;case"disabled":return n.css`
                    background-color: ${hl["icon-disabled-subtle"]};
                `;case"completed":return n.css`
                    background-color: ${hl["icon-success"]};
                `;case"error":return n.css`
                    margin-left: -0.15rem;
                    background-color: ${hl["icon-error"]};
                `}}}
`,YW=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,VW=q.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${xl.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${xl.MaxWidth.sm} {
        grid-column: span 8;
    }
`,UW=q.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${xl.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,KW=q.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,qW=q.default.div`
    display: flex;

    :last-of-type ${WW} {
        margin-bottom: 0;
    }
`,XW=q.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,GW=q.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,ZW=q.default(iL)`
    padding: 0.125rem 0.5rem;
`,QW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],JW=15,eY=252,tY=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],rY=n.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,nY=q.default(bg)`
    color: ${hl.icon};
    svg {
        ${e=>{if(e.$loading)return n.css`
                    animation: ${rY} 4s linear infinite;
                `}}
    }
`,iY=q.default.div`
    display: flex;
    padding-bottom: ${bl["spacing-16"]};
    justify-content: space-between;
    gap: ${bl["spacing-8"]};
`,oY=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${bl["spacing-8"]};
`,aY=q.default(exports.Typography.BodySM)`
    color: ${hl["text-subtler"]};
`,sY=q.default(wg)`
    width: 400px;
`,lY=t=>{var{selectedDate:r,loading:n,tableContainerRef:i,totalRecords:o,onPreviousDayClick:a,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:d}=t,c=ki(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(iY,{children:[e.jsx(sY,Object.assign({selectedDate:r,loading:n},c,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),a(e)},onCalendarDateSelect:d})),void 0===o?e.jsx(e.Fragment,{}):e.jsxs(oY,{children:[e.jsxs(aY,{"data-testid":"timetable-records-results",weight:"semibold",children:[o," results found"]}),l&&e.jsx(nY,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:n,onClick:h,$loading:n,children:e.jsx(u.RefreshIcon,{})})]})]})},dY=q.default.div`
    display: flex;
    width: 100%;
`,cY=q.default.div`
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
    ${e=>{if(e.$isOnTheHour)return n.css`
                box-shadow: inset -0.5px 0px ${hl["border-primary"]};
            `}}
`,uY=q.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,fY=q.default.div`
    width: 2px;
    height: 100%;
`,hY=q.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${vl.sm};
    box-sizing: border-box;
    padding: ${bl["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:r,$altColor:i})=>{switch(e){case"blocked":return n.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${hl["bg-stronger"]} 0px 6px,
                        ${hl["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return n.css`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return n.css`
                    background: ${hl["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"pending":return n.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${t} 0px 6px,
                        ${i} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return n.css`
                    &:hover {
                        background-color: ${r?hl["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,gY=q.default(exports.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,pY=q.default(exports.Typography.BodyXS)`
    color: ${hl["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,mY=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e.jsx(Fx,Object.assign({},i))},bY=U.default.memo((({id:t,startTime:r,endTime:n,title:i,subtitle:o,status:a,intervalWidth:s,rowBarColor:l,containerRef:d,customPopover:c,roundedStartTime:u=r,roundedEndTime:f=n,onClick:h})=>{const g=0===mc(f,"HH:mm").get("minutes"),p=_c.getTimeDiffInMinutes(u,f)/JW*s-2,m=!!h||c&&"click"===c.trigger;return e.jsx(mY,{containerRef:d,customPopover:c,children:e.jsx(cY,{"data-testid":"block-container",$isOnTheHour:g,children:e.jsxs(uY,{children:[e.jsxs(hY,{$width:p,$status:a,$mainColor:l.mainColor,$altColor:l.alternateColor,$isClickable:m,onClick:e=>{h&&h({id:t,startTime:r,endTime:n,status:a,title:i,subtitle:o,customPopover:c},e)},children:[i&&e.jsx(gY,{weight:"semibold",children:i}),o&&e.jsx(pY,{weight:"bold",children:o})]}),e.jsx(fY,{})]})},"block-container-key")})})),vY=({id:r,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o,rowMaxTime:a,rowCells:s,rowBarColor:l,intervalWidth:d,containerRef:c,outOfRangeCellPopover:u})=>{const f=o?Mf.roundToNearestInterval(o,JW):n,h=a?Mf.roundToNearestInterval(a,JW,!0):i,g=t.useMemo((()=>{const e=[];f&&mc(n,"HH:mm").isBefore(mc(f,"HH:mm"))&&e.push({id:r,startTime:n,endTime:f,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const r=mc(e.startTime,"HH:mm"),n=mc(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));let l;return t.forEach(((t,n)=>{var i;const{startTime:o,endTime:a}=t;let d=Mf.roundToNearestInterval(o,JW);l&&mc(d,"HH:mm").isBefore(mc(l,"HH:mm"))&&(d=Mf.roundToNearestInterval(o,JW,!0));const c=Mf.roundToNearestInterval(a,JW,!0);e.push(Object.assign(Object.assign({},t),{roundedStartTime:d,roundedEndTime:c}));const u=(null===(i=s[n+1])||void 0===i?void 0:i.startTime)||h,f=mc(Mf.roundToNearestInterval(u,JW),"HH:mm");let g=mc(c,"HH:mm");for(;g.isBefore(f);)if(p=f,g.get("hour")!=p.get("hour")){const t=g.add(1,"hour").startOf("hour");e.push({id:r,startTime:g.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),g=t}else e.push({id:r,startTime:g.format("HH:mm").toString(),endTime:f.format("HH:mm").toString(),status:"disabled"}),g=f;var p;l=g.format("HH:mm").toString()})),h&&mc(i,"HH:mm").isAfter(mc(h,"HH:mm"))&&e.push({id:r,startTime:h,endTime:i,status:"blocked",customPopover:u}),0!==t.length||o||a||e.push({id:r,startTime:n,endTime:i,status:"blocked",customPopover:u}),e}),[f,n,s,h,i,o,a,r,u]);return e.jsx(dY,{"data-testid":"timetable-row",children:g.map(((t,r)=>e.jsx(bY,Object.assign({},t,{intervalWidth:d,rowBarColor:l,containerRef:c}),`${r}-row-cell-key`)))})},yY=q.default.div``,xY=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${eY}px auto;
`,wY=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${eY}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return n.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,$Y=q.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${hl.bg};
    width: ${eY}px;
    z-index: 2;
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?n.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${hl.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:n.css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,CY=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${hl.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,SY=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${hl.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return n.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${hl.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,jY=q.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${bl["spacing-4"]};
`,kY=q.default(exports.Typography.BodySM)`
    color: ${hl["text-subtler"]};
`,DY=q.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,EY=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${hl.bg};
    width: ${eY}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${bl["spacing-16"]} 0 ${bl["spacing-32"]};
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
    border-left: ${ml["width-010"]} ${ml.solid} ${hl.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?n.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${hl.Primitive["neutral-20"]} r g b / 25%);
            `:n.css`
                box-shadow: inset -0.5px 0px ${hl["border-primary"]};
            `};
`,TY=q.default(exports.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${hl["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,FY=q.default(exports.Typography.BodyXS)`
    display: inline-flex;
    gap: ${bl["spacing-4"]};
    align-items: center;
    color: ${hl["text-subtler"]};
    ${e=>{if(!e.$show)return n.css`
                display: none;
            `}}
`,OY=q.default(Gd)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,IY=q.default(gh)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${bl["spacing-72"]} 0;
`,MY=q.default.div`
    display: flex;
    border-bottom: ${ml["width-010"]} ${ml.solid} ${hl.border};
`,_Y=q.default.div`
    border-right: ${ml["width-005"]} ${ml.solid}
        ${hl["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${bl["spacing-20"]} ${bl["spacing-12"]};
`,AY=n.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,BY=q.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${hl.Primitive["neutral-95"]} 8%,
        ${hl.Primitive["neutral-100"]} 18%,
        ${hl.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${AY} 1.5s forwards infinite;
`,RY=q.default(Fx)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,zY=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:hl[t.Background],Border:hl[t.Border],Text:hl[t.Text],Icon:hl[t.Icon]}},PY=q.default(Ci.div)`
    display: flex;
    flex-direction: row;
    position: ${e=>e.$fixed?"fixed":"relative"};
    margin: ${e=>e.$fixed?"1rem":0};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: ${vl.md};
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${xl.MaxWidth.lg} {
        left: 0;
    }

    ${e=>n.css`
            background: ${zY(e).Background};
            border: 1px solid ${zY(e).Border};
            color: ${zY(e).Text};
        `};
`,LY=q.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${xl.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,NY=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>n.css`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${zY(e).Icon};
            }
        `};
`,HY=q.default.div`
    display: flex;
    flex-direction: column;
`,WY=q.default(exports.Typography.HeadingXS)`
    display: flex;

    ${e=>n.css`
            color: ${zY(e).Text};
        `}
`,YY=q.default.div`
    ${e=>n.css`
            p {
                color: ${zY(e).Text};
            }
        `}
`,VY=q.default(kd.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${xl.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,UY=q.default(Ll)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>n.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${zY(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${xl.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,KY=4e3,qY=q.default.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return n.css`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Rg.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return n.css`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Rg.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return n.css`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${Rg.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return n.css`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${Rg.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?n.css`
            visibility: "visible";
            opacity: 1;
            transition: ${DL.Base};
            z-index: 2;
        `:n.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${DL.Base};
            z-index: -1;
        `}
`,XY=q.default(ef)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,GY=q.default.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return n.css`
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
                        border-color: ${cL.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return n.css`
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
                        border-color: transparent ${cL.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return n.css`
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
                            ${cL.Neutral[8]};
                    }
                `;case"bottom":return n.css`
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
                            ${cL.Neutral[8]} transparent;
                    }
                `}}}
`,ZY=q.default.div`
    position: relative;
`,QY=r=>{var{visible:n,position:i="top",children:o}=r,a=ki(r,["visible","position","children"]);const s=a["data-testid"]||"tooltip",[l,d]=t.useState(i),c=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",Tf(u,300)),()=>{window.removeEventListener("resize",Tf(u,300))})),[]);const u=()=>{f()},f=()=>{if(c.current){const e=c.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":d("right");break;case"right":d("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":d("left");break;case"left":d("top")}else d(i)}};return e.jsxs(qY,Object.assign({position:l,"data-testid":s,visible:n,ref:c},a,{children:[e.jsx(XY,{children:"string"==typeof o?e.jsx(exports.V2_Text.BodySmall,{children:o}):o}),e.jsx(GY,{position:l})]}))},JY=n.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${xl.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,eV=q.default(sA.Content)`
    background: ${({$background:e})=>e?hl["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,tV=q.default(exports.Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${JY}
`,rV=q.default(exports.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${JY}
`,nV=q.default.div`
    ${JY}
`,iV=q.default.ul`
    ${JY}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${xl.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${xl.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,oV=U.default.forwardRef(((t,r)=>{var{stretch:n}=t,i=ki(t,["stretch"]);return e.jsx(iV,Object.assign({ref:r,$stretch:n},i))})),aV=q.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return n.css`
                    grid-column: auto / span 4;
                `;case"full":return n.css`
                    grid-column: auto / span 8;
                `}}}

    ${xl.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,sV=q.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${hl["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${gl.Spec["body-size-baseline"]};
        height: ${gl.Spec["body-size-baseline"]};
    }
`,lV=q.default.button`
    ${gl["body-baseline-regular"]}
    color: ${hl.text};
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
`,dV=q.default.span`
    color: ${hl["text-disabled"]};
`,cV=q.default(ld)`
    margin-right: 0.5rem;
    color: ${hl["text-disabled"]};
`,uV=q.default(C.ExclamationTriangleIcon)`
    color: ${hl["icon-warning"]};
    margin-right: 0.5rem;
    height: ${gl.Spec["body-size-baseline"]};
    width: ${gl.Spec["body-size-baseline"]};
`,fV=q.default.span`
    color: ${hl["text-warning"]};
`,hV=q.default.span`
    ${gl["body-baseline-semibold"]}
    color: ${hl.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,gV=q.default(Ld)`
    margin-top: 0.5rem;
`,pV=({label:r,value:n,displayWidth:i="full",maskState:o,maskLoadingState:a,maskChar:s="•",maskRange:l,unmaskRange:d,maskRegex:c,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:g,onUnmask:p,onTryAgain:m})=>{const[b,v]=t.useState(o);t.useEffect((()=>{v(o)}),[o]);const y=()=>{switch("fail"===a&&m&&m(),b){case"masked":p&&p(),v("unmasked");break;case"unmasked":g&&g(),v("masked")}},x=()=>"string"!=typeof n?n:"masked"===b?Rc.maskValue(n,{maskChar:s,maskRange:l,unmaskRange:d,maskRegex:c,maskTransformer:h}):n,C=()=>{switch(a){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(uV,{}),e.jsx(fV,{children:"Error"}),e.jsx(hV,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(cV,{}),e.jsx(dV,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(sV,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(aV,{$widthStyle:i,children:[e.jsx(Lx,{children:r}),"string"!=typeof n?n:b?u?e.jsx(exports.Typography.BodyBL,{children:x()}):e.jsx(lV,{"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===a,"aria-live":"polite",type:"button",children:C()}):e.jsx(exports.Typography.BodyBL,{children:n}),f&&e.jsx(gV,Object.assign({sizeType:"small"},f))]})},mV=Object.assign((t=>{var{items:r,title:n,description:i,topSection:o,bottomSection:a,children:s,background:l=!0,stretch:d,onMask:c,onUnmask:u,onTryAgain:f}=t,h=ki(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const g=e=>()=>{c&&c(e)},p=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(r&&r.length>0){const t=r.map(((t,r)=>e.jsx(pV,Object.assign({},t,{onMask:g(t),onUnmask:p(t),onTryAgain:m(t)}),r)));return e.jsx(iV,{$stretch:d,children:t})}return null};return e.jsx(eV,Object.assign({$background:l},h,{type:"grid",children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx(tV,{weight:"semibold",$stretch:d,children:n}),i&&e.jsx(rV,{$stretch:d,children:i}),o&&e.jsx(nV,{"data-id":"top-section",$stretch:d,children:o}),b(),a&&e.jsx(nV,{"data-id":"bottom-section",$stretch:d,children:a})]})}))}),{ItemSection:oV,Item:pV}),bV={collections:{base:{InputBoxShadow:n.css`
        inset 0 0 4px 0px ${cL.Shadow.Accent}
    `,InputErrorBoxShadow:n.css`
        inset 0 0 4px 0px ${cL.Shadow.Red}
    `,ElevationBoxShadow:n.css`
      0px 2px 8px ${cL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n.css`
        inset 0 0 3px 0px ${cL.Shadow.Accent}
    `,InputErrorBoxShadow:n.css`
        inset 0 0 3px 0px ${cL.Shadow.Red}
    `,ElevationBoxShadow:n.css`
      0px 2px 8px ${cL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},vV=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=aL(bV,null==i?void 0:i[exports.V2_ThemeContextKeys.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?oL(o,e,i.options.designToken):oL(o,e)},yV={InputBoxShadow:vV("InputBoxShadow"),InputErrorBoxShadow:vV("InputErrorBoxShadow"),ElevationBoxShadow:vV("ElevationBoxShadow"),Table:{Header:vV("Table.Header"),Cell:{Primary:vV("Table.Cell.Primary"),Secondary:vV("Table.Cell.Secondary"),Selected:vV("Table.Cell.Selected"),Hover:vV("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:vV("Button.Danger.BackgroundColor"),Hover:vV("Button.Danger.Hover"),Primary:vV("Button.Danger.Primary"),Border:vV("Button.Danger.Border")}}},xV=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=ki(t,["children","data-testid","type","stretch"]);return e.jsx(wV,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),wV=q.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?n.css`
                padding: 0 3rem;
            `:n.css`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Rg.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Rg.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Rg.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return n.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Rg.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Rg.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return n.css`
                    display: flex;
                    flex-direction: column;
                `;default:return n.css`
                    display: flex;
                `}}}
`,$V=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=ki(t,["children","data-testid","stretch"]);return e.jsx(CV,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),CV=q.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?n.css`
                ${Rg.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:n.css`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,SV=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=ki(t,["children","data-testid","className","type","stretch"]);return e.jsx($V,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(xV,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),jV={Section:$V,Container:xV,Content:SV,ColDiv:Lg};var kV;exports.RedirectScope=void 0,(kV=exports.RedirectScope||(exports.RedirectScope={}))[kV.Subpage=0]="Subpage",kV[kV.Domain=1]="Domain";const DV=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,EV=q.default.ol`
    ${e=>DV(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Rg.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>$L.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${cL.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",i=e.counterSeparator||")";return n.css`
            li:before {
                content: counter(list, ${r}) "${i}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){const e=t?r+1:r-1;return n.css`
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
`,TV=q.default.ul`
    ${e=>DV(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>$L.getTextStyle(e.size,"regular")}
        color: ${cL.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,FV={Ul:t=>{var{size:r="Body",children:n}=t,i=ki(t,["size","children"]);return e.jsx(TV,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=ki(t,["size","children"]);return e.jsx(EV,Object.assign({size:r},i,{children:n}))}},OV={[exports.V2_ThemeContextKeys.colorScheme]:"base",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"},IV={[exports.V2_ThemeContextKeys.colorScheme]:"bookingsg",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"bookingsg"},MV={[exports.V2_ThemeContextKeys.colorScheme]:"rbs",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"rbs",[exports.V2_ThemeContextKeys.resourceScheme]:"rbs"},_V={[exports.V2_ThemeContextKeys.colorScheme]:"mylegacy",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"mylegacy"},AV={[exports.V2_ThemeContextKeys.colorScheme]:"ccube",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"ccube"},BV={[exports.V2_ThemeContextKeys.colorScheme]:"oneservice",[exports.V2_ThemeContextKeys.textStyleScheme]:"oneservice",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"};exports.A11yPlaygroundTheme=Rl,exports.Accordion=Od,exports.Alert=Ld,exports.BookingSGTheme=Ol,exports.Border=ml,exports.BoxContainer=r=>{var{children:i,title:o,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:d="default",subComponentTestIds:c,clickableHeader:u}=r,f=ki(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,g]=t.useState(!a||s),p=Ye(),m=p.ref,b=n.useTheme(),v=yl["sm-max"]({theme:b}),y=tc.useMediaQuery({maxWidth:v}),x=u&&a,w=e=>{e.stopPropagation(),g(!h)},$=oi({height:h?p.height:0}),C=()=>a&&e.jsx(fc,{onClick:w,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==c?void 0:c.handle)||"handle",children:e.jsx(hc,{$expanded:h,children:e.jsx(gc,{"aria-hidden":!0})})});return e.jsxs(rc,Object.assign({},f,{children:[e.jsxs(ac,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[e.jsxs(lc,{children:[e.jsx(sc,{"data-testid":(null==c?void 0:c.title)||"title",children:o}),(()=>{switch(d){case"error":case"warning":return e.jsx(dc,{$displayState:d,"data-testid":(null==c?void 0:c.displayStateIcon)||`${d}-icon`,children:e.jsx(cc,{})});default:return null}})(),y&&C()]}),l&&e.jsx(uc,{$collapsible:a,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),a?e.jsx(nc,{style:$,"data-testid":"expandable-container",children:e.jsx(oc,{ref:m,children:i})}):e.jsx(ic,{"data-testid":"non-expandable-container",children:e.jsx(oc,{children:i})})]}))},exports.Breadcrumb=r=>{var{links:i,fadeColor:o,fadePosition:a="both",itemStyle:s,id:l}=r,d=ki(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[c,u]=t.useState(!1),[f,h]=t.useState(!1),[g,p]=t.useState(!1),m="left"===a||"both"===a,b="right"===a||"both"===a,v=t.useRef(null),y=t.useRef(null),x=n.useTheme(),w=yl["lg-max"]({theme:x}),$=zc((()=>{const e=y.current,t=v.current;e&&t&&i&&i.length>1&&window.innerWidth<=w&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),C=zc((()=>{const e=window.innerWidth<=w;u(e);const t=y.current,r=v.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return h(t.scrollLeft>=1),void p(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);h(!1),p(!1)}));if(Pc("resize",C),Pc("scroll",C,y.current),Lc((()=>{$(),C()}),[$,C]),Ye({onResize:$,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return e.jsxs(Vc,Object.assign({ref:v,id:l||"breadcrumb"},d,{children:[e.jsx("nav",{children:e.jsx(Uc,{ref:y,children:i.map(((t,r)=>{let n;return t.children?(n=r!==i.length-1&&t.href?e.jsx(Zc,Object.assign({},t,{weight:"semibold"})):e.jsx(Gc,{weight:"semibold",children:t.children}),e.jsxs(qc,{$styleProps:s,children:[n,r<i.length-1&&e.jsx(Xc,{})]},r)):null}))})}),c&&(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[f&&m&&e.jsx(Kc,{$backgroundColor:t.left,$position:"left"}),g&&b&&e.jsx(Kc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Breakpoint=yl,exports.Button=kd,exports.ButtonWithIcon=tu,exports.CCubeTheme=Il,exports.Calendar=r=>{var{className:n,styleType:i="bordered",value:o,onSelect:a}=r,s=ki(r,["className","styleType","value","onSelect"]);const[l,d]=t.useState(o);return t.useEffect((()=>{d(o)}),[o]),e.jsx(Qu,{className:n,$hasBorder:"bordered"===i,children:e.jsx(Gu,Object.assign({value:l,initialCalendarDate:l,isFocusable:!0,onSelect:e=>{d(e),null==a||a(e)}},s))})},exports.Card=ef,exports.Checkbox=cf,exports.Colour=hl,exports.Component=GB,exports.CountdownTimer=r=>{var{className:i,align:o="right",timer:a,timestamp:s,notifyTimer:l,offset:d,mobileOffset:c,show:u,fixed:f=!0,"data-testid":h,onFinish:g,onNotify:p,onTick:m}=r,b=ki(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(null),y=t.useRef(!1),[x,w]=t.useState(0),[$,C]=t.useState(0),[S,j]=t.useState(0),[k,D]=t.useState(!1),[E]=((e,r,n)=>{const[i,o]=t.useState((()=>{const t=Jf(e,r)-Date.now();return eh(t)}));t.useEffect((()=>{if(!n)return;const t=Jf(e,r),i=a(t);return()=>clearTimeout(i)}),[r,n,e]);const a=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,i=eh(r);if(o(i),0!==i)return setTimeout(t,n>500?n:n+1e3)};return t()};return[i]})(a,s,k),{ref:T,inView:F}=Nf({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),O=!f||F,I="number"==typeof l&&E<=l,M=n.useTheme(),_=yl["sm-max"]({theme:M}),A=tc.useMediaQuery({maxWidth:_});t.useEffect((()=>{D(u)}),[u]),t.useEffect((()=>{0===E?P():"number"==typeof l&&E<=l&&(R(),z())}),[E]),t.useEffect((()=>{const e=function(){var e,t;const r=null!==(e=null==d?void 0:d.top)&&void 0!==e?e:168,n=null!==(t=null==c?void 0:c.top)&&void 0!==t?t:80,i=A?n:r;return i}();w(e)}),[A,null==d?void 0:d.top,null==c?void 0:c.top]),t.useEffect((()=>{if(v.current){const e=Af(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[a,u]);const B=()=>{if(!v.current)return;const e=v.current.getBoundingClientRect();j(e.x),C(e.right)},R=()=>{m&&m(E)},z=()=>{p&&!y.current&&(y.current=!0,p())},P=()=>{D(!1),g&&g()};const L=()=>{const{minutes:t,seconds:r}=Mf.toMinutesSeconds(E),n=1!==t?"mins":"min",i=1!==r?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(Qf,{$warn:I}),e.jsx(Gf,{children:"Time left:"}),e.jsxs(Zf,{children:[t," ",n," ",String(r).padStart(2,"0")," ",i]})]})};return k||0===E?e.jsxs(Uf,Object.assign({className:i},b,{children:[e.jsx("div",{ref:T}),e.jsx(qf,{"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:ji(!O),$visible:O,$warn:I,children:L()}),v.current&&!O&&(()=>{var t,r;const n=null!==(t=null==d?void 0:d.left)&&void 0!==t?t:"left"===o?S:void 0,i=null!==(r=null==d?void 0:d.right)&&void 0!==r?r:"right"===o?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(Xf,{"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:I,$top:x,$left:n,$right:i,children:L()})})()]})):e.jsx(e.Fragment,{})},exports.DSThemeProvider=({theme:r,children:i})=>{const[o,a]=t.useState(null==r?void 0:r.colourMode);t.useEffect((()=>{if(!r)return void a("light");if(r.colourMode)return void a(r.colourMode);const e=ul();if(a(e),"undefined"!=typeof window&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{r.colourMode||a(e.matches?"dark":"light")};return e.addEventListener?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):(e.addListener(t),()=>e.removeListener(t))}}),[null==r?void 0:r.colourMode]);const s=Object.assign(Object.assign({},r),{colourMode:o||"light"});return e.jsx(n.ThemeProvider,{theme:s,children:i})},exports.DataTable=r=>{var{id:n,headers:i,rows:o,className:a,sortIndicators:s,alternatingRows:l,loadState:d="success",enableMultiSelect:c,selectedIds:f,disabledIds:h,enableActionBar:g,enableSelectAll:p,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:C}=r,S=ki(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=t.useRef(null),k=t.useRef(null),D=t.useRef(null),E=t.useRef(null),T=t.useRef(null),[F,O]=t.useState(!1),[I,M]=t.useState(!1),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z,P]=t.useState(!1),{ref:L,inView:N}=Nf(),H=t.useCallback((()=>{if(!T.current||!E.current)return;const e=T.current.scrollHeight>T.current.clientHeight;O(e),e?E.current.style.transform="translateY(0)":G()}),[]);t.useEffect((()=>{H()}),[]),Ye({onResize:H});Pc("scroll",(()=>{requestAnimationFrame((()=>{F?X():G()})),T.current&&A(T.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Z()}),[o]);const W=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),Y=e=>!!(null==f?void 0:f.includes(e)),V=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(c?1:0),X=()=>{if(!T.current)return;const e=T.current.getBoundingClientRect();R(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},G=()=>{if(!(j.current&&k.current&&T.current&&E.current&&D.current))return;const e=k.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=j.current.getBoundingClientRect().height-D.current.clientHeight-32,n=Math.min(t,r);E.current.style.transform=`translateY(-${n}px)`}else E.current.style.transform="translateY(0)"},Z=()=>{j.current&&T.current&&P(j.current.clientHeight+(g?56:0)<T.current.clientHeight)},Q=t=>{const{fieldKey:r,label:n,clickable:i=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Mh,{"data-testid":K(`header-${r}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(r)),style:o,$isCheckbox:!1,children:e.jsxs(_h,{children:["string"==typeof n?e.jsx(exports.Typography.BodyBL,{weight:"bold",children:n}):n,J(r)]})},r)},J=t=>{const r=null==s?void 0:s[t];return r?"asc"===r?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},ee=()=>e.jsx(Mh,{"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0,children:e.jsx(zh,{children:p&&e.jsx(cf,{checked:W(),indeterminate:!!f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})}),te=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e.jsx(Bh,{"data-testid":K(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e.jsx(Rh,{children:a}):"function"==typeof a?a(r,{isSelected:Y(o)}):a},s)},re=t=>e.jsx(Bh,{"data-testid":K(`row-${t}-selection`),$isCheckbox:!0,children:e.jsx(zh,{children:e.jsx(cf,{checked:Y(t),onClick:()=>{w&&w(t,!Y(t))},disabled:U(t)})})}),ne=()=>e.jsx(gh,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(Lh,{weight:"bold",children:b.title}):b.title:e.jsx(Lh,{weight:"bold",children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(jh,{id:n||"table-wrapper","data-testid":S["data-testid"]||"table",className:a,ref:T,onScroll:()=>{F&&T.current&&M(T.current.scrollTop+T.current.clientHeight>=T.current.scrollHeight)},children:[e.jsx(kh,{children:e.jsxs(Dh,{$end:_,$scrollable:F,ref:j,$stickyHeader:m,children:[e.jsx("thead",{ref:D,children:e.jsxs(Ih,{children:[c&&ee(),i.map(Q)]})}),e.jsx(Eh,{$showLastRowBottomBorder:z,children:"success"===d?!o||o.length<1?e.jsx("tr",{children:e.jsx(Nh,{colSpan:q(),children:y?y():ne()})}):e.jsx(e.Fragment,{children:null==o?void 0:o.map(((t,r)=>e.jsxs(Ah,{"data-testid":K(`row-${t.id.toString()}`),$alternating:V(r),$isSelectable:c,$isSelected:Y(t.id.toString()),children:[c&&re(t.id.toString()),i.map((e=>te(e,t)))]},t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",{colSpan:q(),children:e.jsx(Ph,{children:"loading"===d&&e.jsx(Gd,{})})})})})]})}),g&&f&&f.length>0&&(()=>{var t,r,n,i;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e.jsx(Th,{ref:E,$fixed:B,$left:null===(n=null===(r=null==j?void 0:j.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth,children:e.jsxs(Oh,{$float:(F?!I:!N)||B,$scrollable:F,children:[e.jsx(exports.Typography.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e.jsx(Fh,{type:"button",onClick:C,children:"Clear selection"}),v]})})})(),e.jsx("div",{ref:e=>{k.current=e,L(e)}})]})},exports.DateInput=pg,exports.DateNavigator=wg,exports.DateRangeInput=Ig,exports.Divider=Yg,exports.Drawer=r=>{var{children:n,heading:i,show:o,onClose:a,onOverlayClick:s}=r,l=ki(r,["children","heading","show","onClose","onOverlayClick"]);const[d,c]=t.useState(o),[u]=t.useState((()=>Bc.generate())),f=t.useRef(null);t.useEffect((()=>{if(!o){const e=setTimeout((()=>c(!1)),500);return()=>clearTimeout(e)}c(!0)}),[o]);return e.jsx(qg,{show:d,enableOverlayClick:!0,onOverlayClick:s,children:e.jsxs(Zg,Object.assign({$show:o,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&o&&(null===(t=f.current)||void 0===t||t.focus())}},l,{children:[e.jsxs(Qg,{children:[e.jsx(ep,{id:u,ref:f,tabIndex:-1,weight:"bold",children:i}),e.jsx(Jg,{"aria-label":"Close drawer",onClick:a,focusHighlight:!1,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]}),e.jsx(tp,{children:n})]}))})},exports.ESignature=Fp,exports.ErrorDisplay=gh,exports.FeedbackRating=t=>{const{imgSrc:r,buttonLabel:n,description:i,rating:o,onRatingChange:a,onSubmit:s}=t,l=ki(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:Op,c=null!=i?i:Mp;return e.jsxs(Wp,Object.assign({},l,{children:[d&&e.jsx(Hp,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(Yp,{children:[e.jsx(exports.Typography.HeadingSM,{as:"div",weight:"semibold",children:c}),e.jsx(Np,{description:c,rating:o,onRatingChange:a}),e.jsx(Vp,{disabled:!o,onClick:s,type:"button",children:null!=n?n:Ip})]})]}))},exports.FileDownload=({id:t,fileItems:r,title:n,description:i,onDownload:o,"data-testid":a,className:s,styleType:l="bordered"})=>{const d=e=>Di(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return e.jsxs(Up,{id:t?`${t}-file-download`:"file-download",className:s,"data-testid":a,$border:"bordered"===l,children:[(n||i)&&e.jsxs(Kp,{children:[n?"string"==typeof n?e.jsx(qp,{children:n}):e.jsx(Xp,{children:n}):null,i?"string"==typeof i?e.jsx(Gp,{children:i}):e.jsx(Zp,{children:i}):null]}),e.jsx(Qp,{children:r&&r.length>0&&r.map((t=>e.jsx(mm,{fileItem:t,onDownload:d},t.id)))})]})},exports.FileUpload=({styleType:r="bordered",fileItems:n,title:i,description:o,maxFiles:a,warning:s,className:l,name:d,id:c,"data-testid":u,accept:f,capture:h,multiple:g,disabled:p,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:C,onSort:S})=>{const j=t.useRef(null),[k,D]=t.useState(),E=()=>!(!a||!n)&&n.length>=a;return e.jsx(vm.Provider,{value:{activeId:k,setActiveId:D},children:e.jsxs(qb,{ref:j,onChange:e=>{!p&&w&&w(e)},id:c?`${c}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===r,className:l,"data-testid":u,name:d,multiple:g,disabled:p||E()||x,children:[!(!i&&!o)&&e.jsxs(r_,{children:[i?"string"==typeof i?e.jsx(n_,{children:i}):e.jsx(i_,{children:i}):null,o?"string"==typeof o?e.jsx(o_,{children:o}):e.jsx(a_,{children:o}):null]}),!!s&&e.jsx(s_,{type:"warning",children:s}),e.jsx(t_,{fileItems:n,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:p,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{C&&C(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(u_,{type:"error",children:y}),!x&&e.jsxs(l_,{children:[e.jsx(d_,{type:"button",styleType:"secondary",disabled:!!k||p||E(),onClick:e=>{p||(e.preventDefault(),j.current&&j.current.openFileDialog())},children:"Upload files"}),e.jsx(c_,{children:"or drop them here"})]})]})})},exports.Filter=U_,exports.Font=gl,exports.Footer=t=>{var{children:r,links:i,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:s,logoSrc:l,copyrightInfo:d,onFooterLinkClick:c,layout:u="default"}=t,f=ki(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,g=n.useTheme(),p=t=>t.map(((t,r)=>{const n=ki(t,["data-options"]);return e.jsx("li",{children:e.jsx(dA,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):c&&(e.preventDefault(),c(t))})(e,t)}))},r)}));return e.jsxs(lA,Object.assign({},f,{children:[(()=>{let t=null;return r||((i||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(fA,{"data-testid":"logo-section",children:e.jsx("img",{src:l||tA.getFooterLogo(null==g?void 0:g.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==i?void 0:i[0])&&e.jsx(hA,{"data-testid":"link-col-1",children:p(i[0])},"link-col-1"),(null==i?void 0:i[1])&&e.jsx(hA,{"data-testid":"link-col-2",children:p(i[1])},"link-col-2"),s&&e.jsx(gA,{children:e.jsx(Z_,{})})]})),t?e.jsxs(e.Fragment,{children:[e.jsx(uA,{type:"grid",stretch:h,children:t}),e.jsx(cA,{})]}):null)})(),e.jsxs(pA,{type:"grid",stretch:h,children:[e.jsx(mA,{children:(()=>{const t=tA.getDisclaimerLinks(null==g?void 0:g.resourceScheme,a);return Object.keys(t).map((r=>e.jsx(vA,Object.assign({},t[r]),r)))})()},"disclaimer"),e.jsx(bA,{children:e.jsx(exports.Typography.BodyXS,{"data-testid":"copyright-text",children:d||e.jsxs(e.Fragment,{children:["©"," ",tA.getCopyrightInfo(o,null==g?void 0:g.resourceScheme)]})})},"copyright")]})]}))},exports.Form=CM,exports.FullscreenImageCarousel=ZB,exports.HistogramSlider=mw,exports.IconButton=bg,exports.ImageButton=JB,exports.Input=$w,exports.InputGroup=Bj,exports.InputMultiSelect=DO,exports.InputNestedMultiSelect=FO,exports.InputNestedSelect=OO,exports.InputRangeSelect=tI,exports.InputRangeSlider=cw,exports.InputSelect=rI,exports.InputSlider=dI,exports.Layout=sA,exports.LifeSGTheme=Fl,exports.LinkList=r=>{var{items:n,maxShown:i,style:o="default",onItemClick:a}=r,s=ki(r,["items","maxShown","style","onItemClick"]);const[l,d]=t.useState(!i||i>=n.length),c=i?n.slice(0,i):n,u=i?n.slice(i):[],f=Ye(),h=f.ref,g=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):a&&(e.preventDefault(),a(t,e))},p=()=>{d(!l)},m=(t,r,n,i)=>{const a="small"===o?nR:rR;return e.jsxs(e.Fragment,{children:[e.jsxs(aR,{children:[e.jsx(a,{"data-testid":`link-title-${t}`,weight:"semibold",children:r}),n&&e.jsx(sR,{"data-testid":`link-description-${t}`,children:n}),i]}),e.jsx(iR,{})]})},b=oi({height:l?f.height:0});return e.jsxs(tR,Object.assign({},s,{children:[c.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=ki(t,["title","description","secondaryDescription","onClick"]);return e.jsx(oR,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>g(e,t)},s,{children:m(r,n,i,o)}),`list-item-shown-${r}`)})),u.length>0&&e.jsx(lR,{style:b,"data-testid":"minimised-content",children:e.jsx(dR,{ref:h,children:u.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=ki(t,["title","description","onClick","secondaryDescription"]);return e.jsx(oR,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>g(e,t)},s,{children:m(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),u.length>0&&e.jsxs(hR,{type:"button",onClick:p,"data-testid":"toggle-button",$showMinimised:l,children:[e.jsx(cR,{weight:"semibold","data-testid":"toggle-button-label",children:l?"View less":"View more"}),l?e.jsx(fR,{}):e.jsx(uR,{})]})]}))},exports.LoadingDots=Ud,exports.LoadingDotsSpinner=Gd,exports.LoadingSpinner=Hd,exports.Markup=pR,exports.MaskedInput=Gj,exports.Masonry=vR,exports.Masthead=xR,exports.MediaQuery=xl,exports.Modal=dp,exports.Motion=pl,exports.MyLegacyTheme=Ml,exports.NBComponent=Ez,exports.Navbar=mz,exports.NavbarHeight=bz,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=Oz,exports.OneServiceTheme=Al,exports.OtpInput=r=>{var{id:n,value:i=[],"data-testid":o,className:a,cooldownDuration:s,actionButtonProps:l,errorMessage:d,numOfInput:c,onChange:u,onCooldownStart:f,onCooldownEnd:h}=r,g=ki(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const p=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=p,y=ki(p,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,C]=t.useState(new Array(c).fill("")),[S,j]=t.useState(s),[k,D]=t.useState(new Date),[E]=t.useState((()=>Bc.generate())),T=!!d,F=`${E}-error`,O=`${E}-timer`;t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=R();return()=>e()}}),[k]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===c&&C(i)}),[i]);const I=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(A(n)){const t=[...$];t[e]=n.substring(n.length-1),null===(r=x.current[e+1])||void 0===r||r.focus(),C(t),u&&u(t)}},M=e=>t=>{var r,n,i;const{key:o,code:a}=t;if("Backspace"===o||"Backspace"===a){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=x.current[e-1])||void 0===r||r.focus()),C(t),u&&u(t)}else"ArrowRight"===t.code?null===(n=x.current[e+1])||void 0===n||n.focus():"ArrowLeft"===t.code&&(null===(i=x.current[e-1])||void 0===i||i.focus())},_=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&A(t,c)?(C(r),w.current&&w.current(r)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),B=()=>{const e=Date.now(),t=1e3*s;return e<k.valueOf()+t},R=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*s,n=Math.ceil((k.valueOf()+r-t)/1e3);j(n),n<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},z=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`,P=e=>`${e} second${1===e?"":"s"}`;return e.jsxs(RP,{id:n,"data-testid":o,className:a,children:[e.jsx(zP,{role:"group","aria-label":`${c}-digit OTP input field`,children:$.map(((t,r)=>e.jsx(PP,Object.assign({id:z(r,"otp-input",n),"data-testid":z(r,"otp-input",o),"aria-label":`${Rc.formatOrdinal(r+1)} digit`,"aria-invalid":T,"aria-describedby":T?F:void 0,ref:e=>x.current[r]=e,type:"text",inputMode:"numeric",value:t,error:T,onChange:I(r),onKeyDown:M(r),autoComplete:"off"},g),r)))}),d&&e.jsx(Nx,{id:F,children:d}),e.jsxs(Si,{role:"timer",id:O,children:[P(S)," remaining"]}),e.jsx(Si,{"aria-live":"polite",children:S>0?"":"Ready to resend OTP"}),e.jsx(LP,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{C(new Array(c).fill("")),B()||(D(new Date),j(s)),b&&b(e)},disabled:m||B()},y.children?{children:y.children}:{children:S>0?`Resend OTP in ${P(S)}`:"Resend OTP","aria-label":S>0?`Resend OTP in ${P(s)}`:"Resend OTP","aria-describedby":O}))]})},exports.Overlay=qg,exports.PATheme=Bl,exports.Pagination=eL,exports.PhoneNumberInput=qO,exports.Pill=iL,exports.Popover=ML,exports.PopoverInline=_x,exports.PopoverTrigger=Fx,exports.PopoverV2=Ex,exports.PredictiveTextInput=ZO,exports.ProgressIndicator=t=>{var{steps:r,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=t,l=ki(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const d=n.useTheme(),c=yl["lg-max"]({theme:d}),u=tc.useMediaQuery({maxWidth:c}),f=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},h=(e,t)=>kN(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return e.jsxs(_L,Object.assign({},l,{children:[e.jsx(AL,{children:r.map(((t,r)=>{const n=r<=i;return e.jsx(PL,{id:h(r,i),children:e.jsx(BL,{highlighted:n})},r)}))}),e.jsx(AL,{children:u?e.jsxs(PL,{id:h(i,i),children:[e.jsxs(zL,{weight:"semibold",id:`${h(i,i)}-counter`,children:["Step ",i+1," of ",r.length]}),e.jsx(zL,{weight:"regular",id:`${h(i,i)}-title`,children:f(r[i])})]},i):r.map(((t,r)=>{const n=r<=i,o=r===i,a=o?"bold":"regular";return e.jsx(PL,{id:`${h(r,i)}-title`,children:e.jsx(RL,{highlighted:n,weight:a,"aria-current":o,children:f(t)})},r)}))})]}))},exports.RBSTheme=_l,exports.RadioButton=t=>{var{className:r,checked:n,disabled:i,displaySize:o="default",onChange:a}=t,s=ki(t,["className","checked","disabled","displaySize","onChange"]);return e.jsxs(DN,{$selected:n,$disabled:i,className:r,$displaySize:o,"data-testid":"radio-button",children:[e.jsx(FN,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:n,disabled:i},s)),n?e.jsx(TN,{"data-testid":"radio-checked",$disabled:i}):e.jsx(EN,{"data-testid":"radio-unchecked",$disabled:i})]})},exports.Radius=vl,exports.SelectHistogram=lI,exports.Sidenav=ZN,exports.SignatureCanvas=Ep,exports.SignatureCanvasContainer=Dp,exports.SingpassButton=iH,exports.SmartAppBanner=SH,exports.Spacing=bl,exports.SupportGoWhereTheme=zl,exports.SupportGoWhereThemeBase=Tl,exports.Tab=PH,exports.Tag=t=>{var{type:r,colorType:n="black",children:i,interactive:o=!1,icon:a,iconPosition:s="left"}=t,l=ki(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(LH,Object.assign({as:o?"button":"div",$type:r,$color:n,$interactive:o},l,{children:["left"===s&&a,e.jsx(NH,{children:i}),"right"===s&&a]}))},exports.TextList=TI,exports.Textarea=pI,exports.ThemedLoadingSpinner=t=>{const r=n.useTheme();return"lifesg"===(null==r?void 0:r.resourceScheme)?e.jsx(Hd,Object.assign({},t)):e.jsx(Gd,Object.assign({},t))},exports.TimeRangePicker=fM,exports.TimeSlotBar=({"data-testid":r,className:n,variant:i="default",startTime:o,endTime:a,slots:s,onSlotClick:l,onClick:d,styleAttributes:c})=>{const u=t.useRef(null),[f,h]=t.useState(0),[g,p]=t.useState(0),m=YH(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};Ye({onResize:()=>{u.current&&p(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(r)return`${r}-${e}`},$=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(UH,{className:n,children:[e.jsxs(GH,{"data-testid":r,ref:u,$variant:i,children:[e.jsx(ZH,{"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=mc(o,"HH:mm"),n=mc(a,"HH:mm"),s=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=$(o,s,i);t.push(e.jsx(JH,{$isLongMarker:r,$variant:i,children:r&&e.jsx(eW,{weight:"semibold",children:HH.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),e.jsxs(QH,{"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!c)return;const{backgroundColor:t,backgroundColor2:r,styleType:n="default"}=c,s=HH.calculateWidth(o,a,m),l=!!d&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(rW,{$variant:i}),e.jsx(tW,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:n,$bgColor:t,$bgColor2:r,$clickable:l,onClick:l?d:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:r,startTime:n,endTime:s,label:d,clickable:c=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:g,backgroundColor2:p}=u,b=HH.calculateWidth(n,s,m),v=HH.calculateWidth(o,n,m),y=c&&"default"===i;return e.jsxs("div",{children:[e.jsx(rW,{$variant:i,style:{left:`${v}px`}}),e.jsx(tW,{"data-testid":w(`${r}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:g,$bgColor2:p,$clickable:y,onClick:()=>y&&l(t),children:d&&"default"===i&&e.jsx(nW,{$slotWidth:b,$color:f,weight:"semibold",children:x(b)?"...":d})}),a!==s&&e.jsx(rW,{$variant:i,style:{left:`${v+b}px`}})]},r)}))]})]}),e.jsx(e.Fragment,{children:f>0&&e.jsx(KH,{"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")},children:e.jsx(XH,{})})}),f+g<HH.calculateWidth(o,a,m)?e.jsx(KH,{"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")},children:e.jsx(qH,{})}):e.jsx(e.Fragment,{})]})},exports.TimeSlotBarWeek=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,startTime:d,endTime:c,slots:u,interval:f,variant:h,maxVisibleCellHeight:g,showNavigationHeader:p=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=r,y=ki(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(a),$=t.useRef(null),C=t.useRef(void 0);t.useEffect((()=>{w(a)}),[a]);const S=e=>{const t=e.format(FW);w(t),o&&o(t)},j=(e,t)=>{b&&b(e,t)},k=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(FW),lastDayOfWeek:e.endOf("week").format(FW)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(TW,Object.assign({},y,{children:e.jsx(ju,{ref:$,dynamicHeight:!0,initialCalendarDate:_c.toDayjs(x||v).endOf("week").format(FW),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&mc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&mc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{C.current&&C.current.isSame(e,"week")||k(e),C.current=e},showNavigationHeader:p,minDate:s,maxDate:l,getMonthHeaderLabel:e=>mc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>mc(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e.jsx(EW,{calendarDate:t,disabledDates:n,selectedDate:x,minDate:s,maxDate:l,startTime:d,endTime:c,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:g,enableSelection:m,onSlotClick:j}))(t)})}))},exports.TimeSlotWeekView=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,slots:d,showNavigationHeader:c=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=r,g=ki(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,m]=t.useState(a),b=t.useRef(null),v=t.useRef(void 0);t.useEffect((()=>{m(a)}),[a]);const y=e=>{const t=e.format(NW);m(t),o&&o(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(NW),lastDayOfWeek:e.endOf("week").format(NW)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(LW,Object.assign({},g,{children:e.jsx(ju,{ref:b,dynamicHeight:!0,initialCalendarDate:_c.toDayjs(p||h).endOf("week").format(NW),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&mc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&mc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:c,minDate:s,maxDate:l,getMonthHeaderLabel:e=>mc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>mc(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e.jsx(PW,{calendarDate:t,disabledDates:n,selectedDate:p,minDate:s,maxDate:l,onSelect:y,slots:d,enableSelection:u,onSlotClick:x})})}))},exports.TimeTable=r=>{var{date:n,emptyContentMessage:i,rowData:o,loading:a,minTime:s="00:00",maxTime:l="23:00",minDate:d,maxDate:c,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:g,onRefresh:p,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=r,y=ki(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=Mf.roundToNearestInterval(s,60),$=Mf.roundToNearestInterval(l,60,!0),C=Mf.generateHourlyIntervals(w,$),S=0===u||Xj.isEmpty(o),j=S||o.length===u,k=t.useRef(null),D=t.useRef(null),[E,T]=t.useState(!1),[F,O]=t.useState(!1),[I,M]=t.useState(0),[_,A]=t.useState(!1);t.useEffect((()=>{const e=Xj.throttle((()=>{if(k.current&&(T(k.current.scrollLeft>0),O(k.current.scrollTop>0)),_||!k.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!j&&g&&!a&&(A(!0),g())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[j,_,a,g]),t.useEffect((()=>{A(!1)}),[o]);Ye({onResize:()=>{if(k.current){const e=Math.ceil(60*C.length/JW),t=(k.current.clientWidth-eY)/e;M(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const B=(()=>{let e=0;const t=QW.length;return()=>{const r=QW[e],n=tY[e];return e=(e+1)%t,{mainColor:r,alternateColor:n}}})(),R=({wrapper:e,children:t})=>e(t),z=()=>{if(!a&&_)return e.jsx(EY,{$isScrolled:E,children:e.jsx(BY,{})})},P=()=>{if(!a&&_)return e.jsx(MY,{"data-testid":"lazy-loader",children:C.map(((t,r)=>e.jsx(_Y,{$width:4*I,children:e.jsx(BY,{})},`lazy-load-cell-${r}`)))})};return S?e.jsxs(yY,Object.assign({},y,{"data-testid":x,children:[e.jsx(lY,{selectedDate:n,loading:a||_,tableContainerRef:k,minDate:d,maxDate:c,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:p,onCalendarDateSelect:v}),e.jsx(xY,{className:"empty-container",children:a?e.jsx(OY,{$isEmptyContent:S}):e.jsx(IY,{type:"no-item-found",description:i})})]})):e.jsxs(yY,Object.assign({},y,{"data-testid":x,children:[e.jsx(lY,{"data-id":"timetable-date-navigator",selectedDate:n,loading:a||_,tableContainerRef:k,minDate:d,maxDate:c,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:p,onCalendarDateSelect:v}),e.jsxs(wY,{"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:a,$allRecordsLoaded:j||!g,children:[e.jsx($Y,{$isScrolledY:F,$isScrolledX:E}),e.jsx(CY,{$numOfRows:o.length,$isScrolled:E,"data-testid":"row-header-column-id",children:e.jsxs(e.Fragment,{children:[o.map(((r,n)=>e.jsx(R,{wrapper:e=>((e,r)=>{if(!e.rowHeaderPopover)return r;const n={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:r,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(RY,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),r)})(r,e),children:e.jsxs(EY,{$isScrolled:E,children:[e.jsx(TY,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e.jsx(FY,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),z()]})}),e.jsx(SY,{$numOfColumns:C.length,$isScrolled:F,children:C.map((t=>e.jsx(jY,{"data-testid":`${t}-column`,children:e.jsx(kY,{weight:"semibold",children:t})},`${t}-column-key`)))}),a?e.jsx(OY,{$isEmptyContent:S}):e.jsxs(DY,{"data-testid":"content-container-id",ref:D,$numOfRows:o.length,children:[o.map(((t,r)=>e.jsx(vY,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:B(),intervalWidth:I,containerRef:D},t),`${r}-row-bar`))),P()]})]})]}))},exports.Timeline=({items:r,className:n,id:i,title:o,startCol:a,colSpan:s,"data-base-indicator-testid":l,"data-testid":d="timeline"})=>{const c=t=>"string"==typeof t?e.jsx(exports.Typography.BodyMD,{className:"timeline-item-content-text",children:t}):e.jsx(e.Fragment,{children:t}),f=t=>"string"==typeof t?e.jsx(KW,{weight:"semibold",className:"timeline-item-title",children:t}):e.jsx(e.Fragment,{children:t}),h=e=>e.slice(0,2).map(((e,r)=>t.createElement(ZW,Object.assign({},e,{type:e.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),g=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(VW,{className:n,id:i,"data-testid":d,$startCol:a,$colSpan:s,children:[e.jsx(UW,{"data-testid":"timeline-title",weight:"bold",children:o}),r.map(((t,r)=>{const{title:n,content:i,statuses:o,variant:a}=t,s=l?`circleindicator${r+1}_div_${l}`:"circleindicator",d=a||(0===r?"current":"upcoming-active");return e.jsxs(qW,{children:[e.jsxs(YW,{children:[e.jsx(HW,{"data-testid":s,$variant:d,children:g(d)}),e.jsx(WW,{$variant:d})]}),e.jsxs(XW,{className:"timeline-item-content",children:[f(n),o&&e.jsx(GW,{children:h(o)}),c(i)]})]},`timeline-item-${r}`)}))]})},exports.Timepicker=gM,exports.Toast=r=>{var{type:i="success",title:o,label:a,autoDismiss:s,autoDismissTime:l=KY,onDismiss:d,fixed:c=!0,actionButton:f}=r,h=ki(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[g,p]=t.useState(!1),m=n.useTheme(),b=yl["lg-max"]({theme:m}),v=tc.useMediaQuery({maxWidth:b});t.useEffect((()=>{p(!0)}),[]),t.useEffect((()=>{if(!s)return;const e=setTimeout((()=>{p(!1)}),l);return()=>clearTimeout(e)}),[s]);const y=oi({opacity:g?1:0,transform:g?v?"translateY(0%)":"translateX(0%)":v?"translateY(-1500%)":"translateX(150%)",config:{easing:ar.easeInOutQuart,duration:1e3},onRest:()=>{g||null==d||d()}});return e.jsxs(PY,Object.assign({style:y,$type:i,$fixed:c},h,{children:[e.jsxs(LY,{children:[e.jsxs(NY,{$type:i,children:[(()=>{switch(i){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(HY,{children:[o&&(U.default.isValidElement(o)?o:e.jsx(WY,{$type:i,weight:"semibold",children:o})),a&&e.jsx(YY,{$type:i,children:U.default.isValidElement(a)?a:o?e.jsx(exports.Typography.BodyMD,{children:a}):e.jsx(exports.Typography.BodyBL,{children:a})})]})]}),f&&e.jsx(VY,{styleType:"light",onClick:f.onClick,children:f.label})]}),e.jsx(UY,{$type:i,onClick:()=>{p(!1)},children:e.jsx(u.CrossIcon,{})})]}))},exports.Toggle=VI,exports.Tooltip=QY,exports.UneditableSection=mV,exports.UnitNumberInput=wM,exports.V2_BaseTheme=OV,exports.V2_BookingSGTheme=IV,exports.V2_CCubeTheme=AV,exports.V2_Color=cL,exports.V2_DesignToken=yV,exports.V2_Layout=jV,exports.V2_MediaQuery=Rg,exports.V2_MediaWidths=zg,exports.V2_MyLegacyTheme=_V,exports.V2_OneServiceTheme=BV,exports.V2_RBSTheme=MV,exports.V2_TextList=FV,exports.V2_TextStyle=mL,exports.V2_TextStyleHelper=$L,exports.V2_Transition=DL,exports.__awaiter=Di,exports.commonjsGlobal=Oi,exports.createThemeWithColourMode=fl,exports.getSystemColourMode=ul,exports.useDSTheme=()=>{const e=t.useContext(n.ThemeContext);return e?{colourMode:e.colourMode||"light",theme:e}:(console.warn("useDSTheme must be used within a DSThemeProvider or ThemeProvider"),{colourMode:"light",theme:null})},exports.withNotificationBanner=t=>U.default.forwardRef(((r,n)=>e.jsx(Ez,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=BP.sanitize(t.content);return e.jsx("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e.jsx(Oz.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(r,n)=>i=>{const{onPopoverAppear:o,onPopoverDismiss:a}=i,s=ki(i,["onPopoverAppear","onPopoverDismiss"]),l=n.trigger||"click",d=s,[c,u]=t.useState(!1),f=t.useRef(null),h=tc.useMediaQuery({maxWidth:Ag.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}}),[c]);const g=e=>{f&&!f.current.contains(e.target)&&(c&&u(!1),a&&a())};return e.jsxs(FL,{id:"popover-hoc-wrapper",ref:f,children:[e.jsx(OL,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!c),!c&&o&&o(),c&&a&&a())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&c&&!h&&u(!1)},"aria-label":"popover-button",children:e.jsx(r,Object.assign({},d))}),e.jsx(ML,{visible:c,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{u(!1)},children:n.content})]})},exports.withTooltip=(t,r)=>n=>{const{tooltipVisible:i,position:o}=n,a=ki(n,["tooltipVisible","position"]);return e.jsxs(ZY,{children:[e.jsx(t,Object.assign({},a)),e.jsx(QY,{visible:i,position:o,children:r.content})]})};
//# sourceMappingURL=index.0cf2f113.js.map
