"use strict";var e=require("react/jsx-runtime"),t=require("react"),n=require("react-dom"),r=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),a=require("@lifesg/react-icons/external"),o=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),p=require("@lifesg/react-icons/chevron-down"),f=require("@lifesg/react-icons/chevron-right"),h=require("@lifesg/react-icons/chevron-left"),m=require("@floating-ui/react"),g=require("@lifesg/react-icons/cross"),v=require("@lifesg/react-icons/star"),b=require("@lifesg/react-icons/star-fill"),x=require("@lifesg/react-icons/cloud-arrow-up-fill"),y=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),j=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),k=require("@lifesg/react-icons/square-tick-fill"),C=require("@lifesg/react-icons/tick"),O=require("@lifesg/react-icons/caret-right"),T=require("@lifesg/react-icons/minus-square-fill"),D=require("@lifesg/react-icons/circle"),I=require("@lifesg/react-icons/circle-dot"),E=require("@lifesg/react-icons/bin"),_=require("@lifesg/react-icons/pencil"),M=require("@lifesg/react-icons/drag-handle"),R=require("@lifesg/react-icons/minus"),A=require("@lifesg/react-icons/plus"),N=require("@lifesg/react-icons/menu"),B=require("@lifesg/react-icons/chevron-2-left"),F=require("@lifesg/react-icons/chevron-2-right"),L=require("@lifesg/react-icons/chevron-line-left"),P=require("@lifesg/react-icons/chevron-line-right"),z=require("@lifesg/react-icons/ellipsis-horizontal"),H=require("@lifesg/react-icons/star-half");function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var Y=V(t),U=W(n),q=W(i);const K=Y.default.createContext(!1);function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function G(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Z=function(e,t){return Z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Z(e,t)};var Q=function(){return Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Q.apply(this,arguments)};var J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ee=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},te="object"==typeof J&&J&&J.Object===Object&&J,ne="object"==typeof self&&self&&self.Object===Object&&self,re=te||ne||Function("return this")(),ie=re,ae=function(){return ie.Date.now()},oe=/\s/;var se=function(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t},le=/^\s+/;var ce=function(e){return e?e.slice(0,se(e)+1).replace(le,""):e},de=re.Symbol,ue=de,pe=Object.prototype,fe=pe.hasOwnProperty,he=pe.toString,me=ue?ue.toStringTag:void 0;var ge=function(e){var t=fe.call(e,me),n=e[me];try{e[me]=void 0;var r=!0}catch(e){}var i=he.call(e);return r&&(t?e[me]=n:delete e[me]),i},ve=Object.prototype.toString;var be=ge,xe=function(e){return ve.call(e)},ye=de?de.toStringTag:void 0;var we=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ye&&ye in Object(e)?be(e):xe(e)},$e=function(e){return null!=e&&"object"==typeof e};var je=ce,Se=ee,ke=function(e){return"symbol"==typeof e||$e(e)&&"[object Symbol]"==we(e)},Ce=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,Te=/^0o[0-7]+$/i,De=parseInt;var Ie=ee,Ee=ae,_e=function(e){if("number"==typeof e)return e;if(ke(e))return NaN;if(Se(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Se(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=je(e);var n=Oe.test(e);return n||Te.test(e)?De(e.slice(2),n?2:8):Ce.test(e)?NaN:+e},Me=Math.max,Re=Math.min;var Ae=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function m(){var e=Ee();if(h(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return u?Re(n,a-(e-c)):n}(e))}function g(e){return s=void 0,p&&r?f(e):(r=i=void 0,o)}function v(){var e=Ee(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?f(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=_e(t)||0,Ie(n)&&(d=!!n.leading,a=(u="maxWait"in n)?Me(_e(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?o:g(Ee())},v},Ne=Ae,Be=ee;var Fe=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Be(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ne(e,t,{leading:r,maxWait:t,trailing:i})},Le=function(e,t,n,r){switch(t){case"debounce":return Ae(e,n,r);case"throttle":return Fe(e,n,r);default:return e}},Pe=function(e){return"function"==typeof e},ze=function(){return"undefined"==typeof window},He=function(e){return e instanceof Element||e instanceof HTMLDocument},We=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&Pe(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function r(r){var i=e.call(this,r)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,n=e.observerOptions;if(!ze()){t&&t.current&&(i.targetRef.current=t.current);var r=i.getElement();r&&(i.observableElement&&i.observableElement===r||(i.observableElement=r,i.resizeObserver.observe(r,n)))}},i.getElement=function(){var e=i.props,t=e.querySelector,r=e.targetDomEl;if(ze())return null;if(t)return document.querySelector(t);if(r&&He(r))return r;if(i.targetRef&&He(i.targetRef.current))return i.targetRef.current;var a=n.findDOMNode(i);if(!a)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},i.createResizeHandler=function(e){var t=i.props,n=t.handleWidth,r=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(r||o){var l=We(s,i.setState.bind(i),r,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,r=t.height;!i.skipOnMount&&!ze()&&l({width:n,height:r}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,n=e.render,r=e.children;return Pe(n)?"renderProp":Pe(r)?"childFunction":t.isValidElement(r)?"child":Array.isArray(r)?"childArray":"parent"};var a=r.skipOnMount,o=r.refreshMode,s=r.refreshRate,l=void 0===s?1e3:s,c=r.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=a,i.targetRef=t.createRef(),i.observableElement=null,ze()||(i.resizeHandler=Le(i.createResizeHandler,o,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Z(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ze()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,n=this.props,r=n.render,i=n.children,a=n.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return Y.createElement(o,null)}}}(t.PureComponent);var Ve=ze()?t.useEffect:t.useLayoutEffect;function Ye(e){void 0===e&&(e={});var n=e.skipOnMount,r=void 0!==n&&n,i=e.refreshMode,a=e.refreshRate,o=void 0===a?1e3:a,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,p=e.targetRef,f=e.observerOptions,h=e.onResize,m=t.useRef(r),g=t.useRef(null),v=null!=p?p:g,b=t.useRef(),x=t.useState({width:void 0,height:void 0}),y=x[0],w=x[1];return Ve((function(){if(!ze()){var e=We(h,w,c,u);b.current=Le((function(t){(c||u)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!ze()&&e({width:r,height:i}),m.current=!1}))}),i,o,s);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[i,o,s,c,u,h,f,v.current]),Q({ref:v},y)}var Ue=lt(),qe=e=>it(e,Ue),Ke=lt();qe.write=e=>it(e,Ke);var Xe=lt();qe.onStart=e=>it(e,Xe);var Ge=lt();qe.onFrame=e=>it(e,Ge);var Ze=lt();qe.onFinish=e=>it(e,Ze);var Qe=[];qe.setTimeout=(e,t)=>{const n=qe.now()+t,r=()=>{const e=Qe.findIndex((e=>e.cancel==r));~e&&Qe.splice(e,1),nt-=~e?1:0},i={time:n,handler:e,cancel:r};return Qe.splice(Je(n),0,i),nt+=1,at(),i};var Je=e=>~(~Qe.findIndex((t=>t.time>e))||~Qe.length);qe.cancel=e=>{Xe.delete(e),Ge.delete(e),Ze.delete(e),Ue.delete(e),Ke.delete(e)},qe.sync=e=>{rt=!0,qe.batchedUpdates(e),rt=!1},qe.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,qe.onStart(n)}return r.handler=e,r.cancel=()=>{Xe.delete(n),t=null},r};var et="undefined"!=typeof window?window.requestAnimationFrame:()=>{};qe.use=e=>et=e,qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,qe.batchedUpdates=e=>e(),qe.catch=console.error,qe.frameLoop="always",qe.advance=()=>{"demand"!==qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):st()};var tt=-1,nt=0,rt=!1;function it(e,t){rt?(t.delete(e),e(0)):(t.add(e),at())}function at(){tt<0&&(tt=0,"demand"!==qe.frameLoop&&et(ot))}function ot(){~tt&&(et(ot),qe.batchedUpdates(st))}function st(){const e=tt;tt=qe.now();const t=Je(tt);t&&(ct(Qe.splice(0,t),(e=>e.handler())),nt-=t),nt?(Xe.flush(),Ue.flush(e?Math.min(64,tt-e):16.667),Ge.flush(),Ke.flush(),Ze.flush()):tt=-1}function lt(){let e=new Set,t=e;return{add(n){nt+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(nt-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,nt-=t.size,ct(t,(t=>t(n)&&e.add(t))),nt+=e.size,t=e)}}}function ct(e,t){e.forEach((e=>{try{t(e)}catch(e){qe.catch(e)}}))}var dt=Object.defineProperty,ut={};function pt(){}((e,t)=>{for(var n in t)dt(e,n,{get:t[n],enumerable:!0})})(ut,{assign:()=>Ct,colors:()=>jt,createStringInterpolator:()=>xt,skipAnimation:()=>St,to:()=>yt,willAdvance:()=>kt});var ft={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ht(e,t){if(ft.arr(e)){if(!ft.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var mt=(e,t)=>e.forEach(t);function gt(e,t,n){if(ft.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var vt=e=>ft.und(e)?[]:ft.arr(e)?e:[e];function bt(e,t){if(e.size){const n=Array.from(e);e.clear(),mt(n,t)}}var xt,yt,wt=(e,...t)=>bt(e,(e=>e(...t))),$t=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),jt=null,St=!1,kt=pt,Ct=e=>{e.to&&(yt=e.to),e.now&&(qe.now=e.now),void 0!==e.colors&&(jt=e.colors),null!=e.skipAnimation&&(St=e.skipAnimation),e.createStringInterpolator&&(xt=e.createStringInterpolator),e.requestAnimationFrame&&qe.use(e.requestAnimationFrame),e.batchedUpdates&&(qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(kt=e.willAdvance),e.frameLoop&&(qe.frameLoop=e.frameLoop)},Ot=new Set,Tt=[],Dt=[],It=0,Et={get idle(){return!Ot.size&&!Tt.length},start(e){It>e.priority?(Ot.add(e),qe.onStart(_t)):(Mt(e),qe(At))},advance:At,sort(e){if(It)qe.onFrame((()=>Et.sort(e)));else{const t=Tt.indexOf(e);~t&&(Tt.splice(t,1),Rt(e))}},clear(){Tt=[],Ot.clear()}};function _t(){Ot.forEach(Mt),Ot.clear(),qe(At)}function Mt(e){Tt.includes(e)||Rt(e)}function Rt(e){Tt.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Tt,(t=>t.priority>e.priority)),0,e)}function At(e){const t=Dt;for(let n=0;n<Tt.length;n++){const r=Tt[n];It=r.priority,r.idle||(kt(r),r.advance(e),r.idle||t.push(r))}return It=0,(Dt=Tt).length=0,(Tt=t).length>0}var Nt="[-+]?\\d*\\.?\\d+",Bt=Nt+"%";function Ft(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Lt=new RegExp("rgb"+Ft(Nt,Nt,Nt)),Pt=new RegExp("rgba"+Ft(Nt,Nt,Nt,Nt)),zt=new RegExp("hsl"+Ft(Nt,Bt,Bt)),Ht=new RegExp("hsla"+Ft(Nt,Bt,Bt,Nt)),Wt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Vt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yt=/^#([0-9a-fA-F]{6})$/,Ut=/^#([0-9a-fA-F]{8})$/;function qt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Kt(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=qt(i,r,e+1/3),o=qt(i,r,e),s=qt(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Xt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Gt(e){return(parseFloat(e)%360+360)%360/360}function Zt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Qt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Jt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Yt.exec(e))?parseInt(t[1]+"ff",16)>>>0:jt&&void 0!==jt[e]?jt[e]:(t=Lt.exec(e))?(Xt(t[1])<<24|Xt(t[2])<<16|Xt(t[3])<<8|255)>>>0:(t=Pt.exec(e))?(Xt(t[1])<<24|Xt(t[2])<<16|Xt(t[3])<<8|Zt(t[4]))>>>0:(t=Wt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ut.exec(e))?parseInt(t[1],16)>>>0:(t=Vt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=zt.exec(e))?(255|Kt(Gt(t[1]),Qt(t[2]),Qt(t[3])))>>>0:(t=Ht.exec(e))?(Kt(Gt(t[1]),Qt(t[2]),Qt(t[3]))|Zt(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var en=(e,t,n)=>{if(ft.fun(e))return e;if(ft.arr(e))return en({range:e,output:t,extrapolate:n});if(ft.str(e.output[0]))return xt(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var tn=1.70158,nn=1.525*tn,rn=tn+1,an=2*Math.PI/3,on=2*Math.PI/4.5,sn=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ln={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>rn*e*e*e-tn*e*e,easeOutBack:e=>1+rn*Math.pow(e-1,3)+tn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-nn)/2:(Math.pow(2*e-2,2)*((nn+1)*(2*e-2)+nn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*an),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*an)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*on)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*on)/2+1,easeInBounce:e=>1-sn(1-e),easeOutBounce:sn,easeInOutBounce:e=>e<.5?(1-sn(1-2*e))/2:(1+sn(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}},cn=Symbol.for("FluidValue.get"),dn=Symbol.for("FluidValue.observers"),un=e=>Boolean(e&&e[cn]),pn=e=>e&&e[cn]?e[cn]():e,fn=e=>e[dn]||null;function hn(e,t){const n=e[dn];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var mn=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");gn(this,e)}},gn=(e,t)=>yn(e,cn,t);function vn(e,t){if(e[cn]){let n=e[dn];n||yn(e,dn,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function bn(e,t){const n=e[dn];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[dn]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var xn,yn=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),wn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,$n=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,jn=new RegExp(`(${wn.source})(%|[a-z]+)`,"i"),Sn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,kn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Cn=e=>{const[t,n]=On(e);if(!t||$t())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&kn.test(n)?Cn(n):n||e},On=e=>{const t=kn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Tn=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Dn=e=>{xn||(xn=jt?new RegExp(`(${Object.keys(jt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pn(e).replace(kn,Cn).replace($n,Jt).replace(xn,Jt))),n=t.map((e=>e.match(wn).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>en({...e,output:t})));return e=>{const n=!jn.test(t[0])&&t.find((e=>jn.test(e)))?.replace(wn,"");let r=0;return t[0].replace(wn,(()=>`${i[r++](e)}${n||""}`)).replace(Sn,Tn)}},In="react-spring: ",En=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${In}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},_n=En(console.warn);var Mn=En(console.warn);function Rn(e){return ft.str(e)&&("#"==e[0]||/\d/.test(e)||!$t()&&kn.test(e)||e in(jt||{}))}var An=$t()?t.useEffect:t.useLayoutEffect;function Nn(){const e=t.useState()[1],n=(()=>{const e=t.useRef(!1);return An((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{n.current&&e(Math.random())}}var Bn=e=>t.useEffect(e,Fn),Fn=[];function Ln(e){const n=t.useRef();return t.useEffect((()=>{n.current=e})),n.current}var Pn=Symbol.for("Animated:node"),zn=e=>e&&e[Pn],Hn=(e,t)=>{return n=e,r=Pn,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Wn=e=>e&&e[Pn]&&e[Pn].getPayload(),Vn=class{constructor(){Hn(this,this)}getPayload(){return this.payload||[]}},Yn=class extends Vn{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ft.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Yn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ft.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ft.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Un=class extends Yn{constructor(e){super(0),this._string=null,this._toString=en({output:[e,e]})}static create(e){return new Un(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ft.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=en({output:[this.getValue(),e]})),this._value=0,super.reset()}},qn={dependencies:null},Kn=class extends Vn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return gt(this.source,((n,r)=>{var i;(i=n)&&i[Pn]===i?t[r]=n.getValue(e):un(n)?t[r]=pn(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&mt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return gt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){qn.dependencies&&un(e)&&qn.dependencies.add(e);const t=Wn(e);t&&mt(t,(e=>this.add(e)))}},Xn=class extends Kn{constructor(e){super(e)}static create(e){return new Xn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Gn)),!0)}};function Gn(e){return(Rn(e)?Un:Yn).create(e)}function Zn(e){const t=zn(e);return t?t.constructor:ft.arr(e)?Xn:Rn(e)?Un:Yn}var Qn=(e,n)=>{const r=!ft.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,a)=>{const o=t.useRef(null),s=r&&t.useCallback((e=>{o.current=function(e,t){e&&(ft.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[l,c]=function(e,t){const n=new Set;qn.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Kn(e),qn.dependencies=null,[e,n]}(i,n),d=Nn(),u=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&n.applyAnimatedValues(e,l.getValue(!0)))&&d()},p=new Jn(u,c),f=t.useRef();An((()=>(f.current=p,mt(c,(e=>vn(e,p))),()=>{f.current&&(mt(f.current.deps,(e=>bn(e,f.current))),qe.cancel(f.current.update))}))),t.useEffect(u,[]),Bn((()=>()=>{const e=f.current;mt(e.deps,(t=>bn(t,e)))}));const h=n.getComponentProps(l.getValue());return Y.createElement(e,{...h,ref:s})}))},Jn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&qe.write(this.update)}};var er=Symbol.for("AnimatedComponent"),tr=e=>ft.str(e)?e:e&&ft.str(e.displayName)?e.displayName:ft.fun(e)&&e.name||null;function nr(e,...t){return ft.fun(e)?e(...t):e}var rr=(e,t)=>!0===e||!!(t&&e&&(ft.fun(e)?e(t):vt(e).includes(t))),ir=(e,t)=>ft.obj(e)?t&&e[t]:e,ar=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,or=e=>e,sr=(e,t=or)=>{let n=lr;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);ft.und(n)||(r[i]=n)}return r},lr=["config","onProps","onStart","onChange","onPause","onResume","onRest"],cr={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function dr(e){const t=function(e){const t={};let n=0;if(gt(e,((e,r)=>{cr[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return gt(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function ur(e){return e=pn(e),ft.arr(e)?e.map(ur):Rn(e)?ut.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function pr(e){return ft.fun(e)||ft.arr(e)&&ft.obj(e[0])}var fr={tension:170,friction:26,mass:1,damping:1,easing:ln.linear,clamp:!1},hr=class{constructor(){this.velocity=0,Object.assign(this,fr)}};function mr(e,t){if(ft.und(t.decay)){const n=!ft.und(t.tension)||!ft.und(t.friction);!n&&ft.und(t.frequency)&&ft.und(t.damping)&&ft.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var gr=[],vr=class{constructor(){this.changed=!1,this.values=gr,this.toValues=null,this.fromValues=gr,this.config=new hr,this.immediate=!1}};function br(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,d=rr(n.cancel??r?.cancel,t);if(d)f();else{ft.und(n.pause)||(i.paused=rr(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||rr(e,t)),l=nr(n.delay||0,t),e?(i.resumeQueue.add(p),a.pause()):(a.resume(),p())}function u(){i.resumeQueue.add(p),i.timeouts.delete(c),c.cancel(),l=c.time-qe.now()}function p(){l>0&&!ut.skipAnimation?(i.delayed=!0,c=qe.setTimeout(f,l),i.pauseQueue.add(u),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{a.start({...n,callId:e,cancel:d},o)}catch(e){s(e)}}}))}var xr=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?$r(e.get()):t.every((e=>e.noop))?yr(e.get()):wr(e.get(),t.every((e=>e.finished))),yr=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),wr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),$r=e=>({value:e,cancelled:!0,finished:!1});function jr(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=sr(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const p=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=i<=(n.cancelId||0)&&$r(r)||i!==n.asyncId&&wr(r,!1);if(t)throw e.result=t,u(e),e},h=(e,t)=>{const a=new kr,o=new Cr;return(async()=>{if(ut.skipAnimation)throw Sr(n),o.result=wr(r,!1),u(o),o;f(a);const s=ft.obj(e)?{...e}:{...t,to:e};s.parentId=i,gt(c,((e,t)=>{ft.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(ut.skipAnimation)return Sr(n),wr(r,!1);try{let t;t=ft.arr(e)?(async e=>{for(const t of e)await h(t)})(e):Promise.resolve(e(h,r.stop.bind(r))),await Promise.all([t.then(d),p]),m=wr(r.get(),!0,!1)}catch(e){if(e instanceof kr)m=e.result;else{if(!(e instanceof Cr))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return ft.fun(o)&&qe.batchedUpdates((()=>{o(m,r,r.item)})),m})():l}function Sr(e,t){bt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var kr=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Cr=class extends Error{constructor(){super("SkipAnimationSignal")}},Or=e=>e instanceof Dr,Tr=1,Dr=class extends mn{constructor(){super(...arguments),this.id=Tr++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=zn(this);return e&&e.getValue()}to(...e){return ut.to(this,e)}interpolate(...e){return _n(`${In}The "interpolate" function is deprecated in v9 (use "to" instead)`),ut.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){hn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Et.sort(this),hn(this,{type:"priority",parent:this,priority:e})}},Ir=Symbol.for("SpringPhase"),Er=e=>(1&e[Ir])>0,_r=e=>(2&e[Ir])>0,Mr=e=>(4&e[Ir])>0,Rr=(e,t)=>t?e[Ir]|=3:e[Ir]&=-3,Ar=(e,t)=>t?e[Ir]|=4:e[Ir]&=-5,Nr=class extends Dr{constructor(e,t){if(super(),this.animation=new vr,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ft.und(e)||!ft.und(t)){const n=ft.obj(e)?{...e}:{...t,from:e};ft.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(_r(this)||this._state.asyncTo)||Mr(this)}get goal(){return pn(this.animation.to)}get velocity(){const e=zn(this);return e instanceof Yn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Er(this)}get isAnimating(){return _r(this)}get isPaused(){return Mr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=Wn(r.to);!o&&un(r.to)&&(i=vt(pn(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Un?1:o?o[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=ft.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const p=a.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(ft.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=p,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||p/10,r=a.clamp?0:a.bounce,l=!ft.und(r),f=n==c?s.v0>0:n<c;let h,m=!1;const g=1,v=Math.ceil(e/g);for(let e=0;e<v&&(h=Math.abs(o)>t,h||(d=Math.abs(c-u)<=p,!d));++e){l&&(m=u==c||u>c==f,m&&(o=-o*r,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*g,u+=o*g}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+a.easing(r)*(c-n),o=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(n=!0)}));const s=zn(this),l=s.getValue();if(t){const e=pn(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(_r(this)){const{to:e,config:t}=this.animation;qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return ft.und(e)?(n=this.queue||[],this.queue=[]):n=[ft.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>xr(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Sr(this._state,e&&this._lastCallId),qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=ft.obj(n)?n[t]:n,(null==n||pr(n))&&(n=void 0),r=ft.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Er(this)||(e.reverse&&([n,r]=[r,n]),r=pn(r),ft.und(r)?zn(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,sr(e,((e,t)=>/^on/.test(t)?ir(e,n):e))),Wr(this,e,"onProps"),Vr(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return br(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Mr(this)||(Ar(this,!0),wt(a.pauseQueue),Vr(this,"onPause",wr(this,Br(this,this.animation.to)),this))},resume:()=>{Mr(this)&&(Ar(this,!1),_r(this)&&this._resume(),wt(a.resumeQueue),Vr(this,"onResume",wr(this,Br(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Fr(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n($r(this));const r=!ft.und(e.to),i=!ft.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n($r(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!ft.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const p=!ht(u,c);p&&(s.from=u),u=pn(u);const f=!ht(d,l);f&&this._focus(d);const h=pr(t.to),{config:m}=s,{decay:g,velocity:v}=m;(r||i)&&(m.velocity=0),t.config&&!h&&function(e,t,n){n&&(mr(n={...n},t),t={...n,...t}),mr(e,t),Object.assign(e,t);for(const t in fr)null==e[t]&&(e[t]=fr[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;ft.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(m,nr(t.config,a),t.config!==o.config?nr(o.config,a):void 0);let b=zn(this);if(!b||ft.und(d))return n(wr(this,!0));const x=ft.und(t.reset)?i&&!t.default:!ft.und(u)&&rr(t.reset,a),y=x?u:this.get(),w=ur(d),$=ft.num(w)||ft.arr(w)||Rn(w),j=!h&&(!$||rr(o.immediate||t.immediate,a));if(f){const e=Zn(d);if(e!==b.constructor){if(!j)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const S=b.constructor;let k=un(d),C=!1;if(!k){const e=x||!Er(this)&&p;(f||e)&&(C=ht(ur(y),w),k=!C),(ht(s.immediate,j)||j)&&ht(m.decay,g)&&ht(m.velocity,v)||(k=!0)}if(C&&_r(this)&&(s.changed&&!x?k=!0:k||this._stop(l)),!h&&((k||un(l))&&(s.values=b.getPayload(),s.toValues=un(d)?null:S==Un?[1]:vt(w)),s.immediate!=j&&(s.immediate=j,j||x||this._set(l)),k)){const{onRest:e}=s;mt(Hr,(e=>Wr(this,t,e)));const r=wr(this,Br(this,l));wt(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&qe.batchedUpdates((()=>{s.changed=!x,e?.(r,this),x?nr(o.onRest,r):s.onStart?.(r,this)}))}x&&this._set(y),h?n(jr(t.to,t,this._state,this)):k?this._start():_r(this)&&!f?this._pendingCalls.add(n):n(yr(y))}_focus(e){const t=this.animation;e!==t.to&&(fn(this)&&this._detach(),t.to=e,fn(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;un(t)&&(vn(t,this),Or(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;un(e)&&bn(e,this)}_set(e,t=!0){const n=pn(e);if(!ft.und(n)){const e=zn(this);if(!e||!ht(n,e.getValue())){const r=Zn(n);e&&e.constructor==r?e.setValue(n):Hn(this,r.create(n)),e&&qe.batchedUpdates((()=>{this._onChange(n,t)}))}}return zn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Vr(this,"onStart",wr(this,Br(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),nr(this.animation.onChange,e,this)),nr(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;zn(this).reset(pn(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),_r(this)||(Rr(this,!0),Mr(this)||this._resume())}_resume(){ut.skipAnimation?this.finish():Et.start(this)}_stop(e,t){if(_r(this)){Rr(this,!1);const n=this.animation;mt(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),hn(this,{type:"idle",parent:this});const r=t?$r(this.get()):wr(this.get(),Br(this,e??n.to));wt(this._pendingCalls,r),n.changed&&(n.changed=!1,Vr(this,"onRest",r,this))}}};function Br(e,t){const n=ur(t);return ht(ur(e.get()),n)}function Fr(e,t=e.loop,n=e.to){const r=nr(t);if(r){const i=!0!==r&&dr(r),a=(i||e).reverse,o=!i||i.reset;return Lr({...e,loop:t,default:!1,pause:void 0,to:!a||pr(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Lr(e){const{to:t,from:n}=e=dr(e),r=new Set;return ft.obj(t)&&zr(t,r),ft.obj(n)&&zr(n,r),e.keys=r.size?Array.from(r):null,e}function Pr(e){const t=Lr(e);return ft.und(t.default)&&(t.default=sr(t)),t}function zr(e,t){gt(e,((e,n)=>null!=e&&t.add(n)))}var Hr=["onStart","onRest","onChange","onPause","onResume"];function Wr(e,t,n){e.animation[n]=t[n]!==ar(t,n)?ir(t[n],e.key):void 0}function Vr(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Yr=["onStart","onChange","onRest"],Ur=1,qr=class{constructor(e,t){this.id=Ur++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];ft.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Lr(e)),this}start(e){let{queue:t}=this;return e?t=vt(e).map(Lr):this.queue=[],this._flush?this._flush(this,t):(ei(this,t),Kr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;mt(vt(t),(t=>n[t].stop(!!e)))}else Sr(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ft.und(e))this.start({pause:!0});else{const t=this.springs;mt(vt(e),(e=>t[e].pause()))}return this}resume(e){if(ft.und(e))this.start({pause:!1});else{const t=this.springs;mt(vt(e),(e=>t[e].resume()))}return this}each(e){gt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,bt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&bt(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,bt(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}qe.onFrame(this._onFrame)}};function Kr(e,t){return Promise.all(t.map((t=>Xr(e,t)))).then((t=>xr(e,t)))}async function Xr(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=ft.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const d=ft.arr(i)||ft.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):mt(Yr,(n=>{const r=t[n];if(ft.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,wt(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const p=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===ar(t,"cancel");(d||f&&u.asyncId)&&p.push(br(++e._lastAsyncId,{props:t,state:u,actions:{pause:pt,resume:pt,start(t,n){f?(Sr(u,e._lastAsyncId),n($r(e))):(t.onRest=s,n(jr(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const h=xr(e,await Promise.all(p));if(o&&h.finished&&(!n||!h.noop)){const n=Fr(t,o,i);if(n)return ei(e,[n]),Xr(e,n,!0)}return l&&qe.batchedUpdates((()=>l(h,e,e.item))),h}function Gr(e,t){const n={...e.springs};return t&&mt(vt(t),(e=>{ft.und(e.keys)&&(e=Lr(e)),ft.obj(e.to)||(e={...e,to:void 0}),Jr(n,e,(e=>Qr(e)))})),Zr(e,n),n}function Zr(e,t){gt(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,vn(t,e))}))}function Qr(e,t){const n=new Nr;return n.key=e,t&&vn(n,t),n}function Jr(e,t,n){t.keys&&mt(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ei(e,t){mt(t,(t=>{Jr(e.springs,t,(t=>Qr(t,e)))}))}var ti,ni,ri=({children:e,...n})=>{const r=t.useContext(ii),i=n.pause||!!r.pause,a=n.immediate||!!r.immediate;n=function(e,n){const[r]=t.useState((()=>({inputs:n,result:e()}))),i=t.useRef(),a=i.current;let o=a;if(o){const t=Boolean(n&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(n,o.inputs));t||(o={inputs:n,result:e()})}else o=r;return t.useEffect((()=>{i.current=o,a==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:o}=ii;return Y.createElement(o,{value:n},e)},ii=(ti=ri,ni={},Object.assign(ti,Y.createContext(ni)),ti.Provider._context=ti,ti.Consumer._context=ti,ti);ri.Provider=ii.Provider,ri.Consumer=ii.Consumer;var ai=()=>{const e=[],t=function(t){Mn(`${In}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return mt(e,((e,i)=>{if(ft.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return mt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return mt(e,(e=>e.resume(...arguments))),this},t.set=function(t){mt(e,((e,n)=>{const r=ft.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return mt(e,((e,r)=>{if(ft.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return mt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return mt(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return ft.fun(e)?e(n,t):e};return t._getProps=n,t};function oi(e,n){const r=ft.fun(e),[[i],a]=function(e,n,r){const i=ft.fun(n)&&n;i&&!r&&(r=[]);const a=t.useMemo((()=>i||3==arguments.length?ai():void 0),[]),o=t.useRef(0),s=Nn(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const n=Gr(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Kr(e,t):new Promise((r=>{Zr(e,n),l.queue.push((()=>{r(Kr(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Ln(e)||0;function p(e,t){for(let r=e;r<t;r++){const e=c.current[r]||(c.current[r]=new qr(null,l.flush)),t=i?i(r,e):n[r];t&&(d[r]=Pr(t))}}t.useMemo((()=>{mt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,p(u,e)}),[e]),t.useMemo((()=>{p(0,Math.min(u,e))}),r);const f=c.current.map(((e,t)=>Gr(e,d[t]))),h=t.useContext(ri),m=Ln(h),g=h!==m&&function(e){for(const t in e)return!0;return!1}(h);An((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],mt(e,(e=>e()))),mt(c.current,((e,t)=>{a?.add(e),g&&e.start({default:h});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Bn((()=>()=>{mt(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>({...e})));return a?[v,a]:v}(1,r?e:[e],r?n||[]:n);return r||2==arguments.length?[i,a]:i}var si=class extends Dr{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=en(...t);const n=this._get(),r=Zn(n);Hn(this,r.create(n))}advance(e){const t=this._get();ht(t,this.get())||(zn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ci(this._active)&&di(this)}_get(){const e=ft.arr(this.source)?this.source.map(pn):vt(pn(this.source));return this.calc(...e)}_start(){this.idle&&!ci(this._active)&&(this.idle=!1,mt(Wn(this),(e=>{e.done=!1})),ut.skipAnimation?(qe.batchedUpdates((()=>this.advance())),di(this)):Et.start(this))}_attach(){let e=1;mt(vt(this.source),(t=>{un(t)&&vn(t,this),Or(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){mt(vt(this.source),(e=>{un(e)&&bn(e,this)})),this._active.clear(),di(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=vt(this.source).reduce(((e,t)=>Math.max(e,(Or(t)?t.priority:0)+1)),0))}};function li(e){return!1!==e.idle}function ci(e){return!e.size||Array.from(e).every(li)}function di(e){e.idle||(e.idle=!0,mt(Wn(e),(e=>{e.done=!0})),hn(e,{type:"idle",parent:e}))}ut.assign({createStringInterpolator:Dn,to:(e,t)=>new si(e,t)});var ui=/^--/;function pi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ui.test(e)||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}var fi={};var hi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mi=["Webkit","Ms","Moz","O"];hi=Object.keys(hi).reduce(((e,t)=>(mi.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),hi);var gi=/^(matrix|translate|scale|rotate|skew)/,vi=/^(translate)/,bi=/^(rotate|skew)/,xi=(e,t)=>ft.num(e)&&0!==e?e+t:e,yi=(e,t)=>ft.arr(e)?e.every((e=>yi(e,t))):ft.num(e)?e===t:parseFloat(e)===t,wi=class extends Kn{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>xi(e,"px"))).join(",")})`,yi(e,0)]))),gt(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(gi.test(t)){if(delete r[t],ft.und(e))return;const n=vi.test(t)?"px":bi.test(t)?"deg":"";i.push(vt(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${xi(i,n)})`,yi(i,0)]:e=>[`${t}(${e.map((e=>xi(e,n))).join(",")})`,yi(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new $i(i,a)),super(r)}},$i=class extends mn{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return mt(this.inputs,((n,r)=>{const i=pn(n[0]),[a,o]=this.transforms[r](ft.arr(i)?i:n.map(pn));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&mt(this.inputs,(e=>mt(e,(e=>un(e)&&vn(e,this)))))}observerRemoved(e){0==e&&mt(this.inputs,(e=>mt(e,(e=>un(e)&&bn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),hn(this,e)}};ut.assign({batchedUpdates:n.unstable_batchedUpdates,createStringInterpolator:Dn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ji=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new Kn(e),getComponentProps:r=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=tr(e)||"Anonymous";return(e=ft.str(e)?a[e]||(a[e]=Qn(e,i)):e[er]||(e[er]=Qn(e,i))).displayName=`Animated(${t})`,e};return gt(e,((t,n)=>{ft.arr(e)&&(n=tr(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:r,style:i,children:a,scrollTop:o,scrollLeft:s,viewBox:l,...c}=t,d=Object.values(c),u=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:fi[t]||(fi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in i)if(i.hasOwnProperty(t)){const n=pi(t,i[t]);ui.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,d[n])})),void 0!==r&&(e.className=r),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new wi(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Si=ji.animated;var ki="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ci(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oi=Array.isArray,Ti="object"==typeof ki&&ki&&ki.Object===Object&&ki,Di=Ti,Ii="object"==typeof self&&self&&self.Object===Object&&self,Ei=Di||Ii||Function("return this")(),_i=Ei.Symbol,Mi=_i,Ri=Object.prototype,Ai=Ri.hasOwnProperty,Ni=Ri.toString,Bi=Mi?Mi.toStringTag:void 0;var Fi=function(e){var t=Ai.call(e,Bi),n=e[Bi];try{e[Bi]=void 0;var r=!0}catch(e){}var i=Ni.call(e);return r&&(t?e[Bi]=n:delete e[Bi]),i},Li=Object.prototype.toString;var Pi=Fi,zi=function(e){return Li.call(e)},Hi=_i?_i.toStringTag:void 0;var Wi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Hi&&Hi in Object(e)?Pi(e):zi(e)};var Vi=function(e){return null!=e&&"object"==typeof e},Yi=Wi,Ui=Vi;var qi=function(e){return"symbol"==typeof e||Ui(e)&&"[object Symbol]"==Yi(e)},Ki=Oi,Xi=qi,Gi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zi=/^\w*$/;var Qi=function(e,t){if(Ki(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Xi(e))||(Zi.test(e)||!Gi.test(e)||null!=t&&e in Object(t))};var Ji=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ea=Wi,ta=Ji;var na,ra=function(e){if(!ta(e))return!1;var t=ea(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ia=Ei["__core-js_shared__"],aa=(na=/[^.]+$/.exec(ia&&ia.keys&&ia.keys.IE_PROTO||""))?"Symbol(src)_1."+na:"";var oa=function(e){return!!aa&&aa in e},sa=Function.prototype.toString;var la=function(e){if(null!=e){try{return sa.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ca=ra,da=oa,ua=Ji,pa=la,fa=/^\[object .+?Constructor\]$/,ha=Function.prototype,ma=Object.prototype,ga=ha.toString,va=ma.hasOwnProperty,ba=RegExp("^"+ga.call(va).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xa=function(e){return!(!ua(e)||da(e))&&(ca(e)?ba:fa).test(pa(e))},ya=function(e,t){return null==e?void 0:e[t]};var wa=function(e,t){var n=ya(e,t);return xa(n)?n:void 0},$a=wa(Object,"create"),ja=$a;var Sa=function(){this.__data__=ja?ja(null):{},this.size=0};var ka=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ca=$a,Oa=Object.prototype.hasOwnProperty;var Ta=function(e){var t=this.__data__;if(Ca){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Oa.call(t,e)?t[e]:void 0},Da=$a,Ia=Object.prototype.hasOwnProperty;var Ea=$a;var _a=Sa,Ma=ka,Ra=Ta,Aa=function(e){var t=this.__data__;return Da?void 0!==t[e]:Ia.call(t,e)},Na=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ea&&void 0===t?"__lodash_hash_undefined__":t,this};function Ba(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ba.prototype.clear=_a,Ba.prototype.delete=Ma,Ba.prototype.get=Ra,Ba.prototype.has=Aa,Ba.prototype.set=Na;var Fa=Ba;var La=function(){this.__data__=[],this.size=0};var Pa=function(e,t){return e===t||e!=e&&t!=t},za=Pa;var Ha=function(e,t){for(var n=e.length;n--;)if(za(e[n][0],t))return n;return-1},Wa=Ha,Va=Array.prototype.splice;var Ya=Ha;var Ua=Ha;var qa=Ha;var Ka=La,Xa=function(e){var t=this.__data__,n=Wa(t,e);return!(n<0)&&(n==t.length-1?t.pop():Va.call(t,n,1),--this.size,!0)},Ga=function(e){var t=this.__data__,n=Ya(t,e);return n<0?void 0:t[n][1]},Za=function(e){return Ua(this.__data__,e)>-1},Qa=function(e,t){var n=this.__data__,r=qa(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ja(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ja.prototype.clear=Ka,Ja.prototype.delete=Xa,Ja.prototype.get=Ga,Ja.prototype.has=Za,Ja.prototype.set=Qa;var eo=Ja,to=wa(Ei,"Map"),no=Fa,ro=eo,io=to;var ao=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var oo=function(e,t){var n=e.__data__;return ao(t)?n["string"==typeof t?"string":"hash"]:n.map},so=oo;var lo=oo;var co=oo;var uo=oo;var po=function(){this.size=0,this.__data__={hash:new no,map:new(io||ro),string:new no}},fo=function(e){var t=so(this,e).delete(e);return this.size-=t?1:0,t},ho=function(e){return lo(this,e).get(e)},mo=function(e){return co(this,e).has(e)},go=function(e,t){var n=uo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function vo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vo.prototype.clear=po,vo.prototype.delete=fo,vo.prototype.get=ho,vo.prototype.has=mo,vo.prototype.set=go;var bo=vo,xo=bo;function yo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(yo.Cache||xo),n}yo.Cache=xo;var wo=yo;var $o=function(e){var t=wo(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},jo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,So=/\\(\\)?/g,ko=$o((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(jo,(function(e,n,r,i){t.push(r?i.replace(So,"$1"):n||e)})),t}));var Co=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Oo=Oi,To=qi,Do=_i?_i.prototype:void 0,Io=Do?Do.toString:void 0;var Eo=function e(t){if("string"==typeof t)return t;if(Oo(t))return Co(t,e)+"";if(To(t))return Io?Io.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},_o=Eo;var Mo=function(e){return null==e?"":_o(e)},Ro=Oi,Ao=Qi,No=ko,Bo=Mo;var Fo=function(e,t){return Ro(e)?e:Ao(e,t)?[e]:No(Bo(e))},Lo=qi;var Po=function(e){if("string"==typeof e||Lo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zo=Fo,Ho=Po;var Wo=function(e,t){for(var n=0,r=(t=zo(t,e)).length;null!=e&&n<r;)e=e[Ho(t[n++])];return n&&n==r?e:void 0},Vo=Wo;var Yo=function(e,t,n){var r=null==e?void 0:Vo(e,t);return void 0===r?n:r},Uo=Ci(Yo);const qo=(e,t,n)=>t?Uo(n,t)||Uo(e,t):n||e,Ko=(e,t)=>{const n=t||e.defaultValue;return Uo(e.collections,n)};var Xo;exports.ThemeContextKeys=void 0,(Xo=exports.ThemeContextKeys||(exports.ThemeContextKeys={})).colorScheme="colorScheme",Xo.layout="layout",Xo.textStyleScheme="textStyleScheme",Xo.designTokenScheme="designTokenScheme",Xo.resourceScheme="resourceScheme";const Go={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Zo=e=>t=>{const n=t.theme,r=Ko(Go,n[exports.ThemeContextKeys.colorScheme]);return n.options&&n.options.color?qo(r,e,n.options.color):qo(r,e)},Qo={Brand:{1:Zo("Brand.1"),2:Zo("Brand.2"),3:Zo("Brand.3"),4:Zo("Brand.4"),5:Zo("Brand.5"),6:Zo("Brand.6")},Primary:Zo("Primary"),PrimaryDark:Zo("PrimaryDark"),Secondary:Zo("Secondary"),Accent:{Light:{1:Zo("Accent.Light.1"),2:Zo("Accent.Light.2"),3:Zo("Accent.Light.3"),4:Zo("Accent.Light.4"),5:Zo("Accent.Light.5"),6:Zo("Accent.Light.6")},Dark:{1:Zo("Accent.Dark.1"),2:Zo("Accent.Dark.2"),3:Zo("Accent.Dark.3")}},Neutral:{1:Zo("Neutral.1"),2:Zo("Neutral.2"),3:Zo("Neutral.3"),4:Zo("Neutral.4"),5:Zo("Neutral.5"),6:Zo("Neutral.6"),7:Zo("Neutral.7"),8:Zo("Neutral.8")},Validation:{Green:{Text:Zo("Validation.Green.Text"),Icon:Zo("Validation.Green.Icon"),Border:Zo("Validation.Green.Border"),Background:Zo("Validation.Green.Background")},Orange:{Text:Zo("Validation.Orange.Text"),Icon:Zo("Validation.Orange.Icon"),Border:Zo("Validation.Orange.Border"),Background:Zo("Validation.Orange.Background"),Badge:Zo("Validation.Orange.Badge")},Red:{Text:Zo("Validation.Red.Text"),Icon:Zo("Validation.Red.Icon"),Border:Zo("Validation.Red.Border"),Background:Zo("Validation.Red.Background")},Blue:{Text:Zo("Validation.Blue.Text"),Icon:Zo("Validation.Blue.Icon"),Border:Zo("Validation.Blue.Border"),Background:Zo("Validation.Blue.Background")}},Shadow:{Accent:Zo("Shadow.Accent"),Red:Zo("Shadow.Red"),Elevation:Zo("Shadow.Elevation")}},Jo={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},es=e=>Object.keys(Jo).reduce(((t,n)=>{const r=Jo[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ts={MaxWidth:es("max-width"),MinWidth:es("min-width")},ns=Jo,rs=q.default.button`
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
                background-color: ${Qo.Neutral[7]};
            `}
    }
`,is=Y.default.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=t,s=X(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(rs,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),as={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},os={D1:{fontFamily:as.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:as.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:as.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:as.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:as.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:as.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:as.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:as.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:as.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:as.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:as.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:as.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:as.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:as.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ss={D1:{fontFamily:as.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:as.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:as.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:as.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:as.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:as.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:as.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:as.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:as.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:as.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:as.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:as.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:as.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:as.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},ls={collections:{base:os,oneservice:{D1:{fontFamily:as.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:as.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:as.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:as.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:as.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:as.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:as.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:as.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:as.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:as.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:as.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:as.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:as.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:as.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:ss},defaultValue:"base"},cs=e=>t=>{const n=t.theme,r=Ko(ls,n[exports.ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?qo(r,e,n.options.textStyle):qo(r,e)},ds={D1:{fontFamily:cs("D1.fontFamily"),fontSize:cs("D1.fontSize"),fontWeight:cs("D1.fontWeight"),lineHeight:cs("D1.lineHeight"),letterSpacing:cs("D1.letterSpacing"),fontVariant:cs("D1.fontVariant")},D2:{fontFamily:cs("D2.fontFamily"),fontSize:cs("D2.fontSize"),fontWeight:cs("D2.fontWeight"),lineHeight:cs("D2.lineHeight"),letterSpacing:cs("D2.letterSpacing"),fontVariant:cs("D2.fontVariant")},D3:{fontFamily:cs("D3.fontFamily"),fontSize:cs("D3.fontSize"),fontWeight:cs("D3.fontWeight"),lineHeight:cs("D3.lineHeight"),letterSpacing:cs("D3.letterSpacing"),fontVariant:cs("D3.fontVariant")},D4:{fontFamily:cs("D4.fontFamily"),fontSize:cs("D4.fontSize"),fontWeight:cs("D4.fontWeight"),lineHeight:cs("D4.lineHeight"),letterSpacing:cs("D4.letterSpacing"),fontVariant:cs("D4.fontVariant")},DBody:{fontFamily:cs("DBody.fontFamily"),fontSize:cs("DBody.fontSize"),fontWeight:cs("DBody.fontWeight"),lineHeight:cs("DBody.lineHeight"),letterSpacing:cs("DBody.letterSpacing"),fontVariant:cs("DBody.fontVariant")},H1:{fontFamily:cs("H1.fontFamily"),fontSize:cs("H1.fontSize"),fontWeight:cs("H1.fontWeight"),lineHeight:cs("H1.lineHeight"),letterSpacing:cs("H1.letterSpacing"),fontVariant:cs("H1.fontVariant")},H2:{fontFamily:cs("H2.fontFamily"),fontSize:cs("H2.fontSize"),fontWeight:cs("H2.fontWeight"),lineHeight:cs("H2.lineHeight"),letterSpacing:cs("H2.letterSpacing"),fontVariant:cs("H2.fontVariant")},H3:{fontFamily:cs("H3.fontFamily"),fontSize:cs("H3.fontSize"),fontWeight:cs("H3.fontWeight"),lineHeight:cs("H3.lineHeight"),letterSpacing:cs("H3.letterSpacing"),fontVariant:cs("H3.fontVariant")},H4:{fontFamily:cs("H4.fontFamily"),fontSize:cs("H4.fontSize"),fontWeight:cs("H4.fontWeight"),lineHeight:cs("H4.lineHeight"),letterSpacing:cs("H4.letterSpacing"),fontVariant:cs("H4.fontVariant")},H5:{fontFamily:cs("H5.fontFamily"),fontSize:cs("H5.fontSize"),fontWeight:cs("H5.fontWeight"),lineHeight:cs("H5.lineHeight"),letterSpacing:cs("H5.letterSpacing"),fontVariant:cs("H5.fontVariant")},H6:{fontFamily:cs("H6.fontFamily"),fontSize:cs("H6.fontSize"),fontWeight:cs("H6.fontWeight"),lineHeight:cs("H6.lineHeight"),letterSpacing:cs("H6.letterSpacing"),fontVariant:cs("H6.fontVariant")},Body:{fontFamily:cs("Body.fontFamily"),fontSize:cs("Body.fontSize"),fontWeight:cs("Body.fontWeight"),lineHeight:cs("Body.lineHeight"),letterSpacing:cs("Body.letterSpacing"),fontVariant:cs("Body.fontVariant")},BodySmall:{fontFamily:cs("BodySmall.fontFamily"),fontSize:cs("BodySmall.fontSize"),fontWeight:cs("BodySmall.fontWeight"),lineHeight:cs("BodySmall.lineHeight"),letterSpacing:cs("BodySmall.letterSpacing"),fontVariant:cs("BodySmall.fontVariant")},XSmall:{fontFamily:cs("XSmall.fontFamily"),fontSize:cs("XSmall.fontSize"),fontWeight:cs("XSmall.fontWeight"),lineHeight:cs("XSmall.lineHeight"),letterSpacing:cs("XSmall.letterSpacing"),fontVariant:cs("XSmall.fontVariant")}},us=[as.OpenSans,as.PlusJakartaSans],ps=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},fs=(e,t)=>n=>{var r;const a=ds[e].fontFamily(n),o=ds[e].fontWeight(n),s=us.find((e=>Object.values(e).includes(a)));return s?i.css`
                font-family: ${ps(s,t)||ps(s,o)||a};
                font-weight: normal !important;
            `:i.css`
            font-family: ${a};
            font-weight: ${null!==(r=hs(t)||o)&&void 0!==r?r:"normal"};
        `},hs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ms=e=>{if(e>0)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},gs={getFontFamily:fs,getTextStyle:(e,t,n=!1)=>r=>{const a=ds[e],o=a.fontSize(r);return i.css`
            ${fs(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${(()=>{const e=n?1.05:0;return i.css`
                margin-bottom: ${o*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?i.css`
            display: block;
            ${ms(n)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${ms(n)}
        `};var vs;exports.Text=void 0,(vs=exports.Text||(exports.Text={})).D1=q.default.h1`
        ${e=>i.css`
                ${gs.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.D2=q.default.h1`
        ${e=>i.css`
                ${gs.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.D3=q.default.h1`
        ${e=>i.css`
                ${gs.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.D4=q.default.h1`
        ${e=>i.css`
                ${gs.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.DBody=q.default.h1`
        ${e=>i.css`
                ${gs.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.H1=q.default.h1`
        ${e=>i.css`
                ${gs.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.H2=q.default.h2`
        ${e=>i.css`
                ${gs.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.H3=q.default.h3`
        ${e=>i.css`
                ${gs.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.H4=q.default.h4`
        ${e=>i.css`
                ${gs.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.H5=q.default.h5`
        ${e=>i.css`
                ${gs.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.H6=q.default.h6`
        ${e=>i.css`
                ${gs.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.Body=q.default.p`
        ${e=>i.css`
                ${gs.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.BodySmall=q.default.p`
        ${e=>i.css`
                ${gs.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.XSmall=q.default.span`
        ${e=>i.css`
                ${gs.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${Qo.Neutral[1]};
                ${gs.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,vs.Hyperlink={Default:e=>ys(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ys(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const bs=q.default.a`
    ${e=>i.css`
            ${gs.getTextStyle(e.textStyle,e.weight)}
            color: ${Qo.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Qo.Secondary};

                svg {
                    color: ${Qo.Secondary};
                }
            }
        `}
`,xs=q.default(a.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ys=t=>{var{external:n=!1,children:r}=t,i=X(t,["external","children"]);return e.jsxs(bs,Object.assign({},i,{children:[r,n&&e.jsx(xs,{})]}))},ws={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},$s=q.default.div`
    background-color: ${Qo.Neutral[8]} !important;
    border-top: 1px solid ${Qo.Neutral[6]};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${ts.MaxWidth.mobileL} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,js=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Ss=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${ws.Base};
`,ks=q.default(exports.Text.H3)`
    ${e=>Ss(e.$isCollapsed)}
`,Cs=q.default(exports.Text.H4)`
    ${e=>Ss(e.$isCollapsed)}
`,Os=q.default(is)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`,Ts=q.default(r.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Qo.Primary};
`,Ds=q.default(Si.div)`
    overflow: hidden;
`,Is=q.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${ts.MaxWidth.tablet} {
        padding-right: 0;
    }
`;const Es=t.forwardRef((function(n,r){var{title:i,children:a,expanded:o,type:s="default",collapsible:l=!0}=n,c=X(n,["title","children","expanded","type","collapsible"]);const d=t.useRef(),u=t.useContext(K),[p,f]=t.useState(!l||(null!=o?o:u)),[h,m]=t.useState(!1),g=c["data-testid"]||"accordion-item",v=Ye(),b=v.ref;t.useImperativeHandle(r,(()=>Object.assign(d.current,{expand(){f(!0)},collapse(){f(!1)},isExpanded:()=>p})),[p]),t.useEffect((()=>{h&&f(!l||u)}),[u]),t.useEffect((()=>{h&&f(o)}),[o]),t.useEffect((()=>{m(!0)}),[]);const x={height:p?v.height:0},y=oi(x);return e.jsxs($s,Object.assign({"data-testid":g,className:c.className,$isCollapsed:p,ref:d},{children:[e.jsxs(js,Object.assign({$isCollapsed:l,onClick:l?e=>{e.preventDefault(),f((e=>!e))}:void 0},{children:["string"!=typeof i?i:"small"===s?e.jsx(Cs,Object.assign({"data-testid":`${g}-title`,$isCollapsed:p},{children:i})):e.jsx(ks,Object.assign({"data-testid":`${g}-title`,$isCollapsed:p},{children:i})),l&&e.jsx(Os,Object.assign({"data-testid":`${g}-expand-collapse-button`,$isCollapsed:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:e.jsx(Ts,{})}))]})),e.jsx(Ds,Object.assign({style:h?y:x,$isCollapsed:p,"data-testid":`${g}-expandable-container`},{children:e.jsx(Is,Object.assign({ref:b,id:"content-container"},{children:a}))}))]}))})),_s={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${Qo.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${Qo.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${Qo.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${Qo.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${Qo.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${Qo.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ms=e=>t=>{var n;const r=t.theme,i=Ko(_s,r[exports.ThemeContextKeys.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?qo(i,e,r.options.designToken):qo(i,e)},Rs={InputBoxShadow:Ms("InputBoxShadow"),InputErrorBoxShadow:Ms("InputErrorBoxShadow"),ElevationBoxShadow:Ms("ElevationBoxShadow"),Table:{Header:Ms("Table.Header"),Cell:{Primary:Ms("Table.Cell.Primary"),Secondary:Ms("Table.Cell.Secondary"),Selected:Ms("Table.Cell.Selected"),Hover:Ms("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ms("Button.Danger.BackgroundColor"),Hover:Ms("Button.Danger.Hover"),Primary:Ms("Button.Danger.Primary"),Border:Ms("Button.Danger.Border")}}},As=q.default.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ns=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Bs=q.default.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Qo.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ns} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Fs=q.default(Bs)`
    animation-delay: -0.45s;
`,Ls=q.default(Bs)`
    animation-delay: -0.3s;
`,Ps=q.default(Bs)`
    animation-delay: -0.15s;
`,zs=({color:t,className:n,size:r=18})=>e.jsxs(As,Object.assign({className:n,$size:r,$color:t,"data-testid":"component-loading-spinner"},{children:[e.jsx(Bs,{id:"inner1",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Fs,{id:"inner2",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Ls,{id:"inner3",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Ps,{id:"inner4",$size:r-2,$borderWidth:2,$color:t})]}));var Hs;exports.RedirectScope=void 0,(Hs=exports.RedirectScope||(exports.RedirectScope={}))[Hs.Subpage=0]="Subpage",Hs[Hs.Domain=1]="Domain";const Ws=q.default.button`
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
                    background-color: ${Qo.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Rs.Button.Danger.Border:Qo.Primary};

                    color: ${e.$buttonIsDanger?Rs.Button.Danger.Primary:Qo.Primary};
                `;case"light":return i.css`
                    background-color: ${Qo.Neutral[8]};
                    border: 1px solid ${Qo.Neutral[5]};

                    color: ${e.$buttonIsDanger?Rs.Button.Danger.Primary:Qo.Primary};
                `;case"disabled":return i.css`
                    background-color: ${Qo.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Qo.Neutral[3]};
                `;case"link":return i.css`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Rs.Button.Danger.Primary:Qo.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Rs.Button.Danger.Hover:Qo.Secondary};
                    }
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?Rs.Button.Danger.BackgroundColor:Qo.Primary};
                    border: 1px solid transparent;

                    ${ts.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    color: ${Qo.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i.css`
                    height: 2.5rem;
                    ${gs.getTextStyle("H5","semibold")}

                    ${ts.MaxWidth.mobileS} {
                        height: auto;
                    }
                `:i.css`
                    height: 3rem;
                    ${gs.getTextStyle("H4","semibold")}

                    ${ts.MaxWidth.mobileS} {
                        height: auto;
                    }
                `}
`,Vs=q.default(zs)`
    ${e=>{let t=e.$buttonIsDanger?Rs.Button.Danger.Primary:Qo.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Qo.Neutral[3](e);break;default:t=Qo.Neutral[8](e)}return i.css`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Ys={Default:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(Ws,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(Vs,Object.assign({},c)),e.jsx("span",{children:r})]}))})),Small:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(Ws,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(Vs,Object.assign({},c,{size:16})),e.jsx("span",{children:r})]}))}))},Us=q.default.div`
    width: 100%;
    border-bottom: 1px solid ${Qo.Neutral[6]};
`,qs=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${ts.MaxWidth.mobileL} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return i.css`
                ${ts.MaxWidth.mobileL} {
                    display: none;
                }
            `}}
`,Ks=q.default(exports.Text.H2)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${ts.MaxWidth.mobileL} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return i.css`
                ${ts.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Xs=q.default(Ys.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Gs=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:a="expand-all",showTitleInMobile:o=!1,className:s})=>{const[l,c]=t.useState("expand-all"===a),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(K.Provider,Object.assign({value:l},{children:e.jsxs(Us,Object.assign({className:s},{children:[r||i?e.jsxs(qs,Object.assign({$showTitleInMobile:o,$hasExpandAll:i},{children:[r&&e.jsx(Ks,Object.assign({$showInMobile:o,"data-testid":"accordion-title"},{children:r})),i&&e.jsx(Xs,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button"},{children:l?"Hide all":"Show all"}))]})):null,n]}))}))}),{Item:Es}),Zs=e=>{const{textSize:t}=e||{};return i.css`
        // Text styling
        ${t&&gs.getTextStyle(t,"regular")}

        strong {
            font-family: ${as.OpenSans.Semibold};
            ${t&&gs.getTextStyle(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${as.OpenSans.Semibold};
            ${t&&gs.getTextStyle(t,"semibold")}
            color: ${Qo.Primary};
            text-decoration: none;

            svg {
                color: ${Qo.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Qo.Secondary};

                svg {
                    color: ${Qo.Secondary};
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
    `},Qs=q.default.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Qo.Validation.Red.Background(e),n=Qo.Validation.Red.Border(e);break;case"success":t=Qo.Validation.Green.Background(e),n=Qo.Validation.Green.Border(e);break;case"warning":default:t=Qo.Validation.Orange.Background(e),n=Qo.Validation.Orange.Border(e);break;case"info":t=Qo.Validation.Blue.Background(e),n=Qo.Validation.Blue.Border(e);break;case"description":t=Qo.Neutral[7](e),n=Qo.Neutral[4](e)}return i.css`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Qo.Neutral[1]};
    ${e=>"small"===e.$sizeType?Zs({textSize:"H6"}):Zs({textSize:"BodySmall"})}
`,Js=q.default.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&i.css`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Qo.Validation.Red.Icon(e);break;case"success":t=Qo.Validation.Green.Icon(e);break;case"warning":default:t=Qo.Validation.Orange.Icon(e);break;case"info":t=Qo.Validation.Blue.Icon(e);break;case"description":t=Qo.Neutral[4](e)}return i.css`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,el=q.default(exports.Text.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?i.css`
                ${gs.getTextStyle("H6","semibold")}
                margin-top: 0.25rem;
            `:i.css`
                ${gs.getTextStyle("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Qo.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Qo.Primary};
    }
`,tl=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,nl=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,rl=q.default.button`
    ${e=>"small"===e.$sizeType?i.css`
                ${gs.getTextStyle("H6","semibold")}
            `:i.css`
                ${gs.getTextStyle("H5","semibold")}
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

    color: ${Qo.Primary};
`,il=q.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,al=n=>{var{type:r,className:i,children:a,actionLink:u,actionLinkIcon:p,sizeType:f="default",showIcon:h=!1,customIcon:m,maxCollapsedHeight:g}=n,v=X(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,x]=t.useState(!1),[y,w]=t.useState(!1),{height:$,ref:j}=Ye();t.useEffect((()=>{S()}),[g,$]);const S=()=>{x(!g),w(k())},k=()=>!!g&&$>g;return e.jsxs(Qs,Object.assign({className:i,$type:r,$sizeType:f,"data-testid":v["data-testid"]},{children:[h&&e.jsx(Js,Object.assign({$sizeType:f,$type:r},{children:(()=>{if(r&&m)return m;switch(r){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()})),e.jsxs(tl,{children:[e.jsxs(nl,Object.assign({$maxCollapsedHeight:k()?g:void 0,$showMore:b,$hasActionLink:!!u},{children:[e.jsx("div",Object.assign({ref:j},{children:a})),u&&e.jsxs(el,Object.assign({"data-testid":"action-link",$type:r,$sizeType:f},u,{children:[u.children,p||e.jsx(o.ArrowRightIcon,{})]}))]})),y&&e.jsxs(rl,Object.assign({$sizeType:f,$type:r,type:"button",onClick:()=>x(!b)},{children:["Show ",b?"less":"more",e.jsx(il,{$expanded:b})]}))]})]}))},ol=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.7555cbe1.js")}))).LottieSpinner}})))),sl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),ll=q.default.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,cl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.6f4de23a.js")}))).LottieLoadingDots}})))),dl=n=>e.jsx(pl,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(ul,{})},{children:e.jsx(cl,{})}))})),ul=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),pl=q.default.div`
    margin: 0 auto;
`,fl={[exports.ThemeContextKeys.colorScheme]:"base",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},hl={[exports.ThemeContextKeys.colorScheme]:"bookingsg",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"bookingsg"},ml={[exports.ThemeContextKeys.colorScheme]:"rbs",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"rbs",[exports.ThemeContextKeys.resourceScheme]:"rbs"},gl={[exports.ThemeContextKeys.colorScheme]:"mylegacy",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"mylegacy"},vl={[exports.ThemeContextKeys.colorScheme]:"ccube",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"ccube"},bl={[exports.ThemeContextKeys.colorScheme]:"oneservice",[exports.ThemeContextKeys.textStyleScheme]:"oneservice",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},xl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.454bd84c.js")}))).LottieLoadingDotsSpinner}})))),yl=n=>{var{color:r}=n,a=X(n,["color"]);const o=i.useTheme(),s=r||Qo.Primary({theme:o||fl});return e.jsx($l,Object.assign({},a,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(wl,{})},{children:e.jsx(xl,{color:s})}))}))},wl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),$l=q.default.div`
    margin: 0 auto;
`;var jl,Sl={exports:{}};jl=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(o(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,n,null,i)}catch(e){d=e}if(!d||d instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in a)){a[d.message]=!0;var p=l?l():"";r("Failed "+n+" type: "+d.message+(null!=p?p:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),a=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:h(c),arrayOf:function(e){return h((function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new f("Invalid "+i+" `"+a+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:h((function(t,n,r,i,a){var o=t[n];return e(o)?null:new f("Invalid "+i+" `"+a+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:h((function(e,t,n,r,a){var o=e[t];return i.isValidElementType(o)?null:new f("Invalid "+r+" `"+a+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||d;return new f("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:h((function(e,t,n,r,i){return v(e[t])?null:new f("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new f("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,a+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new f("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+y(n)+" at index "+t+"."),c}return h((function(t,n,r,i,a){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,a,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+i+" `"+a+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(t,n,r,i,a){var s=t[n],l=b(s);if("object"!==l)return new f("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return g(r,i,a,c,x(d));var u=d(s,c,r,i,a+"."+c,o);if(u)return u}return null}))},exact:function(e){return h((function(t,n,r,i,l){var c=t[n],d=b(c);if("object"!==d)return new f("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=a({},t[n],e);for(var p in u){var h=e[p];if(s(e,p)&&"function"!=typeof h)return g(r,i,l,p,x(h));if(!h)return new f("Invalid "+i+" `"+l+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,p,r,i,l+"."+p,o);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function h(e){var n={},i=0;function a(a,s,l,c,u,p,h){if(c=c||d,p=p||l,h!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?a?null===s[l]?new f("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,p)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function m(e){return h((function(t,n,r,i,a,o){var s=t[n];return b(s)!==e?new f("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,i){return new f((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,a=r.call(t);if(r!==t.entries){for(;!(i=a.next()).done;)if(!v(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case d:case i:case o:case a:case p:return f;default:var g=f&&f.$$typeof;switch(g){case l:case u:case m:case h:case s:return g;default:return t}}case r:return t}}}var w=c,$=d,j=l,S=s,k=n,C=u,O=i,T=m,D=h,I=r,E=o,_=a,M=p,R=!1;function A(e){return y(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=j,t.ContextProvider=S,t.Element=k,t.ForwardRef=C,t.Fragment=O,t.Lazy=T,t.Memo=D,t.Portal=I,t.Profiler=E,t.StrictMode=_,t.Suspense=M,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return y(e)===l},t.isContextProvider=function(e){return y(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return y(e)===u},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===m},t.isMemo=function(e){return y(e)===h},t.isPortal=function(e){return y(e)===r},t.isProfiler=function(e){return y(e)===o},t.isStrictMode=function(e){return y(e)===a},t.isSuspense=function(e){return y(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===o||e===a||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===g)},t.typeOf=y}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=r({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},d),p=r(r({},l),u);t.default={all:p,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),a=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,o.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},p=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&a(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),a=r[0],o=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,t]),a}(t),o=p(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,a.default)(e,t||{},!!t)},r=(0,i.useState)(n),o=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,r),f=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),h=u();return(0,i.useEffect)((function(){h&&n&&n(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var kl=Sl.exports=jl(Y.default);const Cl=q.default.div`
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,Ol=q.default(Si.div)`
    overflow: hidden;
`,Tl=q.default.div`
    height: max-content;
`,Dl=q.default.div`
    border-top: 1px solid ${Qo.Neutral[5]};
`,Il=q.default.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ts.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }

    ${e=>{if(e.$interactive)return i.css`
                cursor: pointer;
            `}}
`,El=q.default(exports.Text.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`,_l=q.default.div`
    display: flex;
`,Ml=q.default.span`
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${ts.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${e=>{switch(e.$displayState){case"error":return i.css`
                    color: ${Qo.Validation.Red.Icon(e)};
                `;case"warning":return i.css`
                    color: ${Qo.Validation.Orange.Icon(e)};
                `}}}
`,Rl=q.default(s.ExclamationCircleFillIcon)`
    height: 1.375rem;
    width: 1.375rem;
`,Al=q.default.div`
    display: flex;
    margin-left: auto;
    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return i.css`
                margin-right: 2.5rem;
                ${ts.MaxWidth.mobileL} {
                    margin-right: 0rem;
                    margin-top: 1rem;
                }
            `}}
`,Nl=q.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
    display: flex;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        margin: -1rem -1rem -1rem 0;
        margin-left: auto;
    }
`;q.default(exports.Text.H4)`
    color: ${Qo.Primary};
`;const Bl=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ws.Base};
`,Fl=q.default(p.ChevronDownIcon)`
    color: ${Qo.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`;var Ll={exports:{}};Ll.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",p="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:p,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",y={};y[x]=g;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},j=function e(t,n,r){var i;if(!t)return x;if("string"==typeof t){var a=t.toLowerCase();y[a]&&(i=a),n&&(y[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;y[s]=t,i=s}return!r&&i&&(x=i),i||!r&&x},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},k=b;k.l=j,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function g(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return k},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!k.u(t)||t,d=k.p(e),f=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},h=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var x=this.$locale().weekStart||0,y=(m<x?m+7:m)-x;return f(r?v-y:v+(6-y),g);case s:case p:return h(b+"Hours",0);case o:return h(b+"Minutes",1);case a:return h(b+"Seconds",2);case i:return h(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=k.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[p]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var m=this.clone().set(p,1);m.$d[f](h),m.init(),this.$d=m.set(p,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[k.p(e)]()},v.add=function(r,d){var p,f=this;r=Number(r);var h=k.p(d),m=function(e){var t=S(f);return k.w(t.date(t.date()+Math.round(e*r)),f)};if(h===c)return this.set(c,this.$M+r);if(h===u)return this.set(u,this.$y+r);if(h===s)return m(1);if(h===l)return m(7);var g=(p={},p[a]=t,p[o]=n,p[i]=e,p)[h]||1,v=this.$d.getTime()+r*g;return k.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},p=function(e){return k.s(a%12||12,e,"0")},h=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return h(a,o,!0);case"A":return h(a,o,!1);case"m":return String(o);case"mm":return k.s(o,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,p,f){var h,m=this,g=k.p(p),v=S(r),b=(v.utcOffset()-this.utcOffset())*t,x=this-v,y=function(){return k.m(m,v)};switch(g){case u:h=y()/12;break;case c:h=y();break;case d:h=y()/3;break;case l:h=(x-b)/6048e5;break;case s:h=(x-b)/864e5;break;case o:h=x/n;break;case a:h=x/t;break;case i:h=x/e;break;default:h=x}return f?h:k.a(h)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return k.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),O=C.prototype;return S.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",p]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,C,S),e.$i=!0),S},S.locale=j,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=y[x],S.Ls=y,S.p={},S}();var Pl=Ci(Ll.exports),zl={exports:{}};zl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},p={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[i,l("week")],ww:[r,l("week")],M:[i,l("month")],MM:[r,l("month")],MMM:[a,function(e){var t=d("months"),n=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=p[c],u=d&&d[0],f=d&&d[1];a[l]=f?{regex:u,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=f(t)(e),a=i.year,o=i.month,s=i.day,l=i.hours,c=i.minutes,d=i.seconds,u=i.milliseconds,p=i.zone,h=i.week,m=new Date,g=s||(a||o?1:m.getDate()),v=a||m.getFullYear(),b=0;a&&!o||(b=o>0?o-1:m.getMonth());var x,y=l||0,w=c||0,$=d||0,j=u||0;return p?new Date(Date.UTC(v,b,g,y,w,$,j+60*p.offset*1e3)):n?new Date(Date.UTC(v,b,g,y,w,$,j)):(x=new Date(v,b,g,y,w,$,j),h&&(x=r(x).week(h).toDate()),x)}catch(e){return new Date("")}}(t,s,r,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Hl=Ci(zl.exports),Wl={exports:{}};Wl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Vl=Ci(Wl.exports),Yl={exports:{}};Yl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ul=Ci(Yl.exports),ql={exports:{}};ql.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Kl,Xl,Gl=Ci(ql.exports),Zl={exports:{}};Zl.exports=(Kl={year:0,month:1,day:2,hour:3,minute:4,second:5},Xl={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Xl[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Xl[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=Kl[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],p=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+p+":"+a[4]+":"+a[5]+":000",h=+e;return(n.utc(f).valueOf()-(h-=h%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i,a=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(s))/1e3/60),c=15*-Math.round(o.getTimezoneOffset()/15)-l;if(Number(c)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var d=i.utcOffset();i=i.add(a-d,"minute")}}else i=this.utcOffset(0,t);return i.$x.$timezone=e,i},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],p=n(d).utcOffset(u);return p.$x.$timezone=s,p},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var Ql,Jl=Ci(Zl.exports);Pl.extend(Vl),Pl.extend(Gl),Pl.extend(Ul),Pl.extend(Hl),Pl.extend(Jl),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Pl(t).startOf("week");return ec(n).map((e=>tc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return tc(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Pl(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Pl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Pl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Pl(r):void 0,i?Pl(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Ql||(Ql={}));const ec=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},tc=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},nc=[1,3,5,7,8,10,12],rc=[4,6,9,11];var ic,ac,oc,sc;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":nc.includes(a)?Math.min(i,31).toString():rc.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Pl(e,n);return Pl(t,n).diff(r,"minute")},e.toDayjs=e=>e?Pl(e):Pl(),e.addMinutesToTime=(e,t,n="HH:mm")=>Pl(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Pl(e).isSame(Pl(t),n)}(ic||(ic={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Pl(e).isBefore(r,"day"))||!(!i||!Pl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Pl(e).isValid())return e}return""}}(ac||(ac={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(oc||(oc={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(sc||(sc={}));function lc(e){const n=t.useRef(null);return t.useLayoutEffect((()=>{n.current=e}),[e]),t.useCallback(((...e)=>n.current(...e)),[])}const cc=(e,n,r="window",i)=>{const a=t.useRef();t.useEffect((()=>{a.current=n}),[n]),t.useEffect((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const n=e=>a.current(e);return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}),[e,r])},dc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,uc=()=>{const[e,n]=t.useState(!1);return t.useEffect((()=>{n(!0)}),[]),e};function pc({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),a=r.substring(0,n.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}const fc=e=>{const n=(e=>{const n=t.useRef(e),r=t.useRef();return t.useEffect((()=>{r.current=n.current,n.current=e}),[e]),r.current})(e);return n!==e},hc=e=>{const[n,r]=t.useState(e),i=t.useRef(e),a=t.useCallback((e=>{i.current=e,r(e)}),[]);return[n,a,i]},mc=q.default.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${ts.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${ts.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,gc=q.default.ul`
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

    ${ts.MaxWidth.tablet} {
        flex-wrap: nowrap;
    }
`,vc=q.default.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${ts.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,bc=q.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,xc=q.default(f.ChevronRightIcon)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${Qo.Neutral[4]};
`,yc=q.default(exports.Text.BodySmall)`
    margin: 0.25rem !important;
`,wc=q.default(exports.Text.Hyperlink.Small)`
    margin: 0.25rem !important;
`,$c=q.default(Ws)`
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
`,jc={Default:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,styleType:a="default",danger:o=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:o,$buttonWithIcon:!0};return e.jsxs($c,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(Vs,Object.assign({},u)):s,e.jsx("span",{children:r})]}))})),Small:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,styleType:a="default",danger:o=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:o,$buttonWithIcon:!0};return e.jsxs($c,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(Vs,Object.assign({},u,{size:16})):s,e.jsx("span",{children:r})]}))}))},Sc=q.default.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${ts.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`,kc=i.css`
    color: ${Qo.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Cc=q.default(h.ChevronLeftIcon)`
    ${kc}
`,Oc=q.default(f.ChevronRightIcon)`
    ${kc}
`,Tc=q.default(p.ChevronDownIcon)`
    ${kc}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Dc=q.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ic=q.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ec=q.default.div`
    isolation: isolate;
    width: 100%;
`,_c=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Qo.Neutral[8]};

    ${e=>{if(!e.$visible)return i.css`
                display: none;
            `}}
`,Mc=q.default.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Rc=q.default.div`
    display: flex;
`,Ac=q.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${Tc} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Nc=q.default.p`
    ${gs.getTextStyle("H5","regular")}
`,Bc=q.default.div`
    display: flex;
`,Fc=q.default(is)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Lc=q.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Pc=q.default(Ys.Small)`
    flex: 1;
`,zc=q.default.div`
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
`,Hc=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?i.css`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Qo.Shadow.Accent};
                    border: 1px solid ${Qo.Accent.Light[1]};
                }
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return i.css`
                    background-color: ${Qo.Accent.Light[6](e)};
                `;case"selected-month":return i.css`
                    background-color: ${Qo.Accent.Light[5](e)};
                    border: 1px solid ${Qo.Primary(e)};
                `}}}
`,Wc=q.default(exports.Text.H5)`
    ${e=>{if(e.$disabledDisplay)return i.css`
                color: ${Qo.Neutral[4]};
            `;switch(e.$variant){case"current-month":return i.css`
                    color: ${Qo.Neutral[3](e)};
                `;case"selected-month":return i.css`
                    ${gs.getTextStyle("H5","semibold")}
                    color: ${Qo.Primary(e)};
                `}}}
`,Vc=({calendarDate:n,currentFocus:r,selectedStartDate:i,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:p})=>{const f=t.useMemo((()=>Ql.generateMonths(Pl(n))),[n]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,n="end"===r&&i&&e.isBefore(i,"month")&&l;return t||n},m=e=>{const t=e.format("MMMM"),n=(r=e,!Ql.isWithinRange(r,c?Pl(c):void 0,d?Pl(d):void 0,"month"));var r;const i=o.isSame(e,"month")?"selected-month":Pl().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||u,month:t,variant:i}};return f.length?e.jsx(zc,Object.assign({$type:s},{children:f.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:a}=m(t);return e.jsx(Hc,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||p(e)})(t,!r)},{children:e.jsx(Wc,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:a}))}),a)}))})):null},Yc=q.default.div`
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
`,Uc=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?i.css`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Qo.Shadow.Accent};
                    border: 1px solid ${Qo.Accent.Light[1]};
                }
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return i.css`
                    background: ${Qo.Accent.Light[6](e)};
                `;case"selected-year":return i.css`
                    background: ${Qo.Accent.Light[5](e)};
                    border: 1px solid ${Qo.Primary(e)};
                `}}};
`,qc=q.default(exports.Text.H5)`
    ${e=>{if(e.$disabledDisplay)return i.css`
                color: ${Qo.Neutral[4]};
            `;switch(e.$variant){case"current-year":return i.css`
                    color: ${Qo.Neutral[3](e)};
                `;case"selected-year":return i.css`
                    ${gs.getTextStyle("H5","semibold")}
                    color: ${Qo.Primary(e)};
                `;case"other-decade":return i.css`
                    color: ${Qo.Neutral[4](e)};
                `}}}
`,Kc=({calendarDate:n,currentFocus:r,selectedStartDate:i,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:p})=>{const f=t.useMemo((()=>Ql.generateDecadeOfYears(Pl(n))),[n]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,n="end"===r&&i&&e.isBefore(i,"year")&&l;return t||n},m=e=>{const t=[0,11].includes(f.indexOf(e)),n=e.year(),r=(i=e,!Ql.isWithinRange(i,c?Pl(c):void 0,d?Pl(d):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Pl().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||u,year:n,variant:a}};return f.length?e.jsx(Yc,Object.assign({$type:s},{children:f.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:a}=m(t);return e.jsx(Uc,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||p(e)})(t,!r)},{children:e.jsx(qc,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:a}))}),a)}))})):null},Xc=Y.default.forwardRef(((n,r)=>{var{children:i,initialCalendarDate:a,type:o,minDate:s,maxDate:l,currentFocus:c,selectedStartDate:d,selectedEndDate:u,selectWithinRange:p,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:m,withButton:g,doneButtonDisabled:v,onDismiss:b,showNavigationHeader:x=!0,getLeftArrowDate:y,getRightArrowDate:w,isLeftArrowDisabled:$,isRightArrowDisabled:j,getMonthHeaderLabel:S,getYearHeaderLabel:k}=n,C=X(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[O,T]=t.useState(ic.toDayjs(a)),[D,I]=t.useState(ic.toDayjs(a)),[E,_]=t.useState("default"),M=t.useRef(null),R=t.useRef(null),A=t.useRef();t.useImperativeHandle(r,(()=>({defaultView(){_("default")},resetView(){const e=ic.toDayjs(a);T(e),I(e),_("default")},setCalendarDate(e){const t=ic.toDayjs(e);T(t),I(t)}}))),t.useEffect((()=>{const e=ic.toDayjs(a);T(e),I(e)}),[a]),t.useEffect((()=>{H(D)}),[D]);const N=()=>{var e;"month-options"!==E?(_("month-options"),null===(e=A.current)||void 0===e||e.focus()):(_("default"),T(D))},B=()=>{"default"!==E?(_("default"),T(D)):_("year-options")},F=()=>{var e;null===(e=A.current)||void 0===e||e.focus();const t=y?y(O):O.subtract(1,"month");switch(E){case"default":I(t),T(t);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},L=()=>{var e;null===(e=A.current)||void 0===e||e.focus();const t=w?w(O):O.add(1,"month");switch(E){case"default":I(t),T(t);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},P=e=>{T(e),I(e),g||_("default")},z=()=>{const e=ic.toDayjs(a);T(e),I(e),"default"===E?W("reset"):_("default")},H=e=>{m&&m(e)},W=e=>{b&&b(e)},V=()=>{if(!s||h)return!1;const e=Pl(s);return"month-options"===E?!Ql.isPreviousYearWithinRange(O,e):"year-options"===E?!Ql.isPreviousDecadeWithinRange(O,e):$?$(O):!Ql.isPreviousMonthWithinRange(O,e)},Y=()=>{if(!l||h)return!1;const e=Pl(l);return"month-options"===E?!Ql.isNextYearWithinRange(O,e):"year-options"===E?!Ql.isNextDecadeWithinRange(O,e):j?j(O):!Ql.isNextMonthWithinRange(O,e)},U=()=>{if("year-options"===E){const{beginDecade:e,endDecade:t}=Ql.getStartEndDecade(O);return`${e} to ${t}`}return k?k(O):O.format("YYYY")},q=()=>{const t=S?S(O):O.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(Ac,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===E,$visible:"default"===E,id:"month-dropdown",onClick:N},{children:[e.jsx(Nc,{children:t}),e.jsx(Tc,{})]})),e.jsxs(Ac,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==E,id:"year-dropdown",onClick:B},{children:[e.jsx(Nc,{children:U()}),e.jsx(Tc,{})]}))]})},K=()=>{switch(E){case"month-options":return e.jsx(Vc,{type:o,calendarDate:O,currentFocus:c,minDate:s,maxDate:l,selectedStartDate:d,selectedEndDate:u,viewCalendarDate:D,isNewSelection:p,onMonthSelect:P,allowDisabledSelection:h});case"year-options":return e.jsx(Kc,{type:o,calendarDate:O,currentFocus:c,minDate:s,maxDate:l,selectedStartDate:d,selectedEndDate:u,viewCalendarDate:D,isNewSelection:p,onYearSelect:P,allowDisabledSelection:h});default:return null}};return e.jsxs(Dc,Object.assign({ref:A,"data-id":"calendar-container","data-testid":"calendar-container"},C,{children:[x&&e.jsxs(Mc,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e.jsx(Rc,{children:q()}),e.jsxs(Bc,{children:[e.jsx(Fc,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:V(),focusHighlight:!1,tabIndex:-1,onClick:F},{children:e.jsx(Cc,{})})),e.jsx(Fc,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:Y(),focusHighlight:!1,tabIndex:-1,onClick:L},{children:e.jsx(Oc,{})}))]})]})),e.jsx(Ic,{children:(()=>{const t="function"==typeof i?i({calendarDate:D,currentView:E}):i;return f?e.jsxs(e.Fragment,{children:["default"===E&&t,K()]}):e.jsxs(e.Fragment,{children:[e.jsx(Ec,{children:t}),e.jsx(_c,Object.assign({$visible:"default"!==E},{children:K()}))]})})()}),(()=>{if(!g)return;const t=!!("default"===E)&&v;return e.jsxs(Lc,{children:[e.jsx(Pc,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:z},{children:"Cancel"})),e.jsx(Pc,Object.assign({"data-testid":"done-button",ref:M,type:"button",onClick:()=>{t||(T(D),"default"===E?W("confirmed"):_("default"))},disabled:t},{children:"Done"}))]})})()]}))})),Gc=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Zc=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Qc=q.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Jc=q.default.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,ed=q.default.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return i.css`
                    left: 0;
                `;case"right":return i.css`
                    right: 0;
                `}}}
`,td=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,nd=q.default(exports.Text.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return i.css`
                ${gs.getTextStyle("H5","semibold")};
                color: ${Qo.Accent.Light[2]};
            `;if(t)return i.css`
                color: ${Qo.Neutral[4]};
            `;if(n)return i.css`
                ${gs.getTextStyle("H5","semibold")};
                color: ${Qo.Primary};
            `;switch(r){case"other-month":return i.css`
                    color: ${Qo.Neutral[4]};
                `;case"today":return i.css`
                    color: ${Qo.Neutral[3]};
                `;case"default":return i.css`
                    color: ${Qo.Neutral[1]};
                `}}}
`;q.default(ed)`
    ${e=>{const{$selected:t}=e;if(t)return i.css`
                border-top: 1px solid ${Qo.Accent.Light[4]};
                border-bottom: 1px solid ${Qo.Accent.Light[4]};
                background-color: ${Qo.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?i.css`
                border-top: 1px dashed ${Qo.Accent.Light[4]};
                border-bottom: 1px dashed ${Qo.Accent.Light[4]};
                background-color: ${Qo.Accent.Light[6]};
            `:n?i.css`
                background-color: ${Qo.Accent.Light[4]};
            `:void 0}}
`;const rd=q.default(td)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?i.css`
                background: ${Qo.Accent.Light[5]};
                border: 1px solid ${Qo.Primary};
            `:t?i.css`
                box-shadow: 0px 0px 4px 1px ${Qo.Shadow.Accent};
                border: 1px solid ${Qo.Accent.Light[1]};
                background-color: ${Qo.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?i.css`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Qo.Shadow.Accent};
                    border: 1px solid ${Qo.Accent.Light[1]};
                    background-color: ${Qo.Neutral[8]};
                }
            `:n?i.css`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?i.css`
                border: 1px solid ${Qo.Accent.Light[1]};
                background: ${Qo.Accent.Light[4]};

                :hover {
                    background: ${Qo.Accent.Light[4]};
                }
            `:t?i.css`
                color: ${Qo.Neutral[4]};
            `:"today"===r?i.css`
                    background: ${Qo.Accent.Light[5]};
                `:void 0}}
`,id=e=>{let t=Qo.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Qo.Accent.Light[5];break;case"hover-dash":t=Qo.Accent.Light[6],n=`1px dashed ${Qo.Accent.Light[4](e)}`;break;case"hover-current":t=Qo.Neutral[8],n=`1px solid ${Qo.Primary(e)}`;break;case"selected":t=Qo.Accent.Light[5],n=`1px solid ${Qo.Accent.Light[4](e)}`;break;case"selected-outline":t=Qo.Accent.Light[5],n=`1px solid ${Qo.Primary(e)}`;break;case"overlap":t=Qo.Accent.Light[4],n=`1px solid ${Qo.Accent.Light[4](e)}`;break;case"overlap-outline":t=Qo.Accent.Light[4],n=`1px solid ${Qo.Primary(e)}`}return{color:t,border:n}},ad=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,od=q.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=id(e);return i.css`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,sd=q.default(od)`
    left: 0;
`,ld=q.default(od)`
    right: 0;
`,cd=q.default.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Qo.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,dd=q.default(cd)`
    left: 0;
`,ud=q.default(cd)`
    right: 0;
`,pd=q.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=id(e);return i.css`
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
`,fd=q.default(pd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Qo.Shadow.Accent};
    }
`,hd=q.default(pd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Qo.Shadow.Accent};
    }
`,md=q.default(exports.Text.H5)`
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
                    ${gs.getTextStyle("H5","semibold")};
                    color: ${Qo.Accent.Light[2]};
                `:"hidden"===n?i.css`
                    visibility: hidden;
                `:i.css`
                color: ${Qo.Neutral[4]};
            `;switch(n){case"selected":return i.css`
                    ${gs.getTextStyle("H5","semibold")};
                    color: ${Qo.Primary};
                `;case"current":return i.css`
                    color: ${Qo.Neutral[3]};
                `;case"unavailable":return i.css`
                    color: ${Qo.Neutral[4]};
                `;case"hidden":return i.css`
                    visibility: hidden;
                `;default:return i.css`
                    color: ${Qo.Neutral[1]};
                `}}}
`,gd=({bgLeft:t,bgRight:n,circleLeft:r,circleRight:i,shadow:a,circleShadow:o,labelType:s,disabled:l,interactive:c,date:d,onSelect:u,onHover:p,onHoverEnd:f})=>e.jsxs(ad,{children:[e.jsx(dd,{$shadow:t&&a}),e.jsx(sd,{$type:t,$shadow:t&&a}),e.jsx(fd,{$type:r,$shadow:r&&o}),e.jsx(ud,{$shadow:n&&a}),e.jsx(ld,{$type:n,$shadow:n&&a}),e.jsx(hd,{$type:i,$shadow:i&&o}),e.jsx(md,Object.assign({weight:"regular",$type:s,$disabled:l,$interactive:c,onClick:()=>{u(d)},onMouseEnter:()=>{p(d)},onMouseLeave:()=>{f&&f(d)}},{children:d.date()}))]}),vd=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:a,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:p,onSelect:f,onHover:h})=>{const m=Ql.isDisabledDay(t,c,s,l),g=!m||d,v=()=>{const e=Pl(o),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===a&&i&&t&&(r&&n?(c=o,d=i):(s=o,l=r||i)),"end"===a&&r&&n&&(i&&t?(c=r,d=o):(s=i||r,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},b={date:t,calendarDate:n,disabled:m,interactive:g,onSelect:()=>{f(t,!g)},onHover:()=>{h(t.format("YYYY-MM-DD"),!g)}};return e.jsx(gd,Object.assign({},b,(()=>{const e={};if(n.month()!==t.month())e.labelType=p?"hidden":"unavailable";else if(Pl().isSame(t,"day")&&!m)e.labelType="current",e.circleLeft="current",e.circleRight="current";else if(u){const n="end"===a&&r&&t.isBefore(r),o="start"===a&&i&&t.isAfter(i);(n||o)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},a=t.isSame(r,"day"),o=t.isSame(i,"day");return p&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&a||i&&o)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",a||(e.bgLeft="selected"),o||(e.bgRight="selected")),e)})(),(()=>{if(!o)return;const e={};t.isSame(o,"day")&&(e.circleShadow=!0,e.circleLeft="hover-current",e.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:i,overlapEnd:a}=v();if(n&&r){if(t.isBetween(n,r,"day","[]")){const i=t.isSame(n,"day"),a=t.isSame(r,"day");e.labelType="selected",i||(e.bgLeft="hover-dash"),a||(e.bgRight="hover-dash")}return e}if(i&&a){if(t.isBetween(i,a,"day","[]")){const n=t.isSame(i,"day"),r=t.isSame(a,"day");e.labelType="selected",(n||r)&&(e.circleShadow=!0,e.circleLeft="overlap-outline",e.circleRight="overlap-outline"),n||(e.bgLeft="overlap"),r||(e.bgRight="overlap")}return e}return e})()))};Pl.extend(Vl);const bd=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:a,selectedEndDate:o,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:p,showActiveMonthDaysOnly:f})=>{const h=t.useMemo((()=>Ql.generateDays(n)),[n]),[m,g]=t.useState(""),v=(e,t)=>{t&&!p||s(e)},b=(e,t)=>{t&&!p||(g(e),l(e))},x=()=>{g(""),l("")};return e.jsxs(Gc,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((t,n)=>e.jsx(Zc,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Pl(t).format("ddd")}))},`week-day-${n}`))),h.map(((t,s)=>e.jsx(Qc,Object.assign({onMouseLeave:x},{children:t.map(((t,s)=>e.jsx(vd,{date:t,calendarDate:n,startDate:a,endDate:o,hoverDate:m,currentFocus:r,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:p,isNewSelection:c,showActiveMonthDaysOnly:f,onSelect:v,onHover:b},`day-${s}`)))}),s)))]}))},xd=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const p=Ql.isDisabledDay(t,s,a,o),f=!p||l,{start:h,end:m}=r?Ql.getFixedRangeStartEnd(ic.toDayjs(r),c):{start:void 0,end:void 0},{start:g,end:v}=i?Ql.getFixedRangeStartEnd(ic.toDayjs(i),c):{start:void 0,end:void 0},b=r&&t.isBetween(h,m,"day","[]"),x=i&&t.isBetween(g,v,"day","[]"),y=b&&t.isSame(h,"day")||x&&t.isSame(g,"day"),w=b&&t.isSame(m,"day")||x&&t.isSame(v,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},j={date:t,calendarDate:n,disabled:p,interactive:f,onSelect:()=>{d(t,!f)},onHover:()=>{u(t.format("YYYY-MM-DD"),!f)}};return e.jsx(gd,Object.assign({},j,(()=>{const e={};return b||x?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Pl().isSame(t,"day")&&!p&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return x&&$(e,"hover-dash",n===g,n===v),b&&$(e,"selected",n===h,n===m),b&&x&&$(e,"overlap",y,w),n===h&&(x?(e.circleLeft="overlap-outline",e.circleRight="overlap-outline"):(e.circleRight="selected-outline",e.circleLeft="selected-outline")),n===g&&(e.circleLeft="hover-current",e.circleRight="hover-current",e.circleShadow=!0,g>=h&&g<m&&(e.circleLeft="overlap-outline",e.circleRight="overlap-outline")),e})()))},yd=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>Ql.generateDays(n)),[n]),[p,f]=t.useState(""),h=(e,t)=>{t&&!c||(a(e),e&&!Pl(e).isSame(e,"month")&&f(""))},m=(e,t)=>{t&&!c||(f(e),o(e))},g=()=>{f(""),o("")};return e.jsxs(Gc,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,n)=>e.jsx(Zc,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Pl(t).format("ddd")}))},`week-day-${n}`))),u.map(((t,a)=>e.jsx(Qc,Object.assign({onMouseLeave:g},{children:t.map(((t,a)=>e.jsx(xd,{date:t,calendarDate:n,selectedDate:i,hoverDate:p,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:c,onSelect:h,onHover:m,numberOfDays:d},`day-${a}`)))}),a)))]}))},wd=q.default.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Qo.Neutral[8]};

    ${e=>{if("input"===e.$type)return i.css`
                border: 1px solid ${Qo.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,$d=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Ql.isDisabledDay(t,s,a,o),p=!u||l,{start:f,end:h}=Ql.getWeekStartEnd(ic.toDayjs(r)),{start:m,end:g}=Ql.getWeekStartEnd(ic.toDayjs(i)),v=r&&t.isBetween(f,h,"day","[]"),b=i&&t.isBetween(m,g,"day","[]"),x=v&&t.isSame(f)||b&&t.isSame(m),y=v&&t.isSame(h)||b&&t.isSame(g),w={date:t,calendarDate:n,disabled:u,interactive:p,onSelect:()=>{c(t,!p)},onHover:()=>{d(t.format("YYYY-MM-DD"),!p)}};return e.jsx(gd,Object.assign({},w,(()=>{const e={};return v||b?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Pl().isSame(t,"day")&&!u&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={};let t;return v&&b?(t="hover-current",e.shadow=!0,e.circleShadow=x||y):v?t="selected-outline":b&&(t="hover-dash"),t&&(x?e.circleLeft=t:e.bgLeft=t,y?e.circleRight=t:e.bgRight=t),e})()))},jd=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>Ql.generateDays(n)),[n]),[u,p]=t.useState(""),f=(e,t)=>{if(t&&!c)return;const n=e.startOf("week");a(n),e&&!Pl(e).isSame(n,"month")&&p("")},h=(e,t)=>{t&&!c||(p(e),o(e))},m=()=>{p(""),o("")};return e.jsxs(Gc,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((t,n)=>e.jsx(Zc,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Pl(t).format("ddd")}))},`week-day-${n}`))),d.map(((t,a)=>e.jsx(Qc,Object.assign({onMouseLeave:m},{children:t.map(((t,a)=>e.jsx($d,{date:t,calendarDate:n,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:c,onSelect:f,onHover:h},`day-${a}`)))}),a)))]}))},Sd=Y.default.forwardRef((({disabledDates:n,onYearMonthDisplayChange:r,onSelect:i,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:p,maxDate:f,allowDisabledSelection:h,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v,numberOfDays:b,showActiveMonthDaysOnly:x=!1},y)=>{const w=t.useRef(),$=t.useRef(void 0);t.useImperativeHandle(y,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const j=e=>{var t;const n=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(n),k(n)},S=e=>{C(e)},k=e=>{i&&i(e)},C=e=>{a&&a(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e.jsx(wd,Object.assign({$type:m},{children:e.jsx(Xc,Object.assign({type:m,ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:p,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||O(e),$.current=e},initialCalendarDate:v},{children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(jd,{calendarDate:t,disabledDates:n,selectedStartDate:s,minDate:p,maxDate:f,allowDisabledSelection:h,onSelect:j,onHover:S});case"fixed-range":return e.jsx(yd,{calendarDate:t,disabledDates:n,selectedStartDate:s,minDate:p,maxDate:f,allowDisabledSelection:h,onSelect:j,onHover:S,numberOfDays:b});default:return e.jsx(bd,{calendarDate:t,currentFocus:c,disabledDates:n,selectedStartDate:s,selectedEndDate:l,minDate:p,maxDate:f,isNewSelection:g,allowDisabledSelection:h,showActiveMonthDaysOnly:x,onSelect:j,onHover:S})}})(t)}))}))})),kd=Y.default.forwardRef(((t,n)=>{var{width:r}=t,i=X(t,["width"]);return e.jsx(Sc,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:e.jsx(Sd,Object.assign({ref:n},i))}))})),Cd=q.default.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: 1px solid ${Qo.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`,Od=q.default.div`
    border-radius: 0.5rem;
    background: ${Qo.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Td=t=>{var{children:n}=t,r=X(t,["children"]);const i=r["data-testid"]||"card";return e.jsx(Od,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e.jsx(exports.Text.Body,{children:n}):n}))},Dd=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Id=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return i.css`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Dd};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Qo.Neutral[4](e):e.$unchecked?Qo.Accent.Light[2](e):Qo.Primary(e)};
    }
`,Ed=q.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,_d=n=>{var{className:r,checked:i,disabled:a,indeterminate:o,onChange:s,onKeyPress:l,displaySize:c="default"}=n,d=X(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=t.useRef();t.useEffect((()=>{p.current.indeterminate=o}),[o]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(Id,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:c,$disabled:a,$unchecked:!(o||i||a)},{children:[e.jsx(Ed,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:a},d)),o?e.jsx(u.MinusSquareFillIcon,{"data-testid":"indeterminate"}):i?e.jsx(u.SquareTickFillIcon,{"data-testid":"checkmark"}):a?e.jsx(u.SquareFillIcon,{"data-testid":"disabled-empty-checkbox"}):e.jsx(u.SquareIcon,{"data-testid":"empty-checkbox"})]}))};var Md=Ei,Rd=/\s/;var Ad=function(e){for(var t=e.length;t--&&Rd.test(e.charAt(t)););return t},Nd=/^\s+/;var Bd=function(e){return e?e.slice(0,Ad(e)+1).replace(Nd,""):e},Fd=Ji,Ld=qi,Pd=/^[-+]0x[0-9a-f]+$/i,zd=/^0b[01]+$/i,Hd=/^0o[0-7]+$/i,Wd=parseInt;var Vd=function(e){if("number"==typeof e)return e;if(Ld(e))return NaN;if(Fd(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Fd(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Bd(e);var n=zd.test(e);return n||Hd.test(e)?Wd(e.slice(2),n?2:8):Pd.test(e)?NaN:+e},Yd=Ji,Ud=function(){return Md.Date.now()},qd=Vd,Kd=Math.max,Xd=Math.min;var Gd=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function m(){var e=Ud();if(h(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return u?Xd(n,a-(e-c)):n}(e))}function g(e){return s=void 0,p&&r?f(e):(r=i=void 0,o)}function v(){var e=Ud(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?f(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=qd(t)||0,Yd(n)&&(d=!!n.leading,a=(u="maxWait"in n)?Kd(qd(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?o:g(Ud())},v},Zd=Ci(Gd),Qd=Gd,Jd=Ji;var eu=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Jd(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Qd(e,t,{leading:r,maxWait:t,trailing:i})},tu=Ci(eu),nu=new Map,ru=new WeakMap,iu=0;function au(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(ru.has(e)||(iu+=1,ru.set(e,iu.toString())),ru.get(e)):"0"}(e.root):e[t]}`)).toString()}function ou(e,t,n={},r=undefined){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=au(e);let n=nu.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},nu.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),nu.delete(i))}}function su({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,p]=Y.useState(null),f=Y.useRef(c),[h,m]=Y.useState({inView:!!s,entry:void 0});f.current=c,Y.useEffect((()=>{if(o||!u)return;let s;return s=ou(u,((e,t)=>{m({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,r,a,o,n,l,t]);const g=null==(d=h.entry)?void 0:d.target,v=Y.useRef(void 0);u||!g||a||o||v.current===g||(v.current=g,m({inView:!!s,entry:void 0}));const b=[p,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const lu=q.default.div`
    width: 100%;
`,cu=q.default.div`
    ${gs.getTextStyle("H4","semibold")}
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${Qo.Primary};
    border: 1px solid ${Qo.Primary};
    background-color: ${Qo.Neutral[8]};

    ${ts.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>{if(e.$warn)return i.css`
                color: ${Qo.Validation.Red.Text};
                border: 1px solid ${Qo.Validation.Red.Border};
            `}}
`,du=q.default(cu)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,uu=q.default(cu)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:a}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}
            box-shadow: 0px 0px 4px 1px
                ${a?Qo.Validation.Red.Border:Qo.Accent.Light[2]};

            ${ts.MaxWidth.mobileL} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
            }
        `}}
`,pu=q.default.div`
    ${gs.getTextStyle("H4","bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${ts.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`,fu=q.default.div`
    margin-left: auto;
`;var hu,mu;!function(e){e.AM="AM",e.PM="PM"}(hu||(hu={})),function(e){e.roundToNearestInterval=(e,t,n)=>{const[r,i]=e.split(":"),a=parseInt(r,10),o=parseInt(i,10);if(isNaN(a)||isNaN(o)||o<0||o>=60)throw new Error("Invalid time format");const s=60*a+o,l=s%t,c=0===l?s:n?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=Pl(e,r),a=Pl(t,r);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(n)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:hu.AM};if(!t)return n;try{if("24hr"===e){const r=bu(t,e);n.minute=sc.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=hu.AM,n.hour=0===i?"12":sc.padValue(i.toString())):(n.period=hu.PM,n.hour=12===i?i.toString():sc.padValue((i-12).toString()))}else{const r=bu(t,e);n.hour=sc.padValue(r.hour),n.minute=sc.padValue(r.minute),n.period="am"===r.period.toLowerCase()?hu.AM:hu.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?sc.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return sc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?sc.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?sc.padValue(r.toString()):13===r?sc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===hu.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return sc.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=bu(e,t),r=sc.padValue(n.hour);let i=`${r}:${sc.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&a<12&&(a+=12),"am"===n&&12===a&&(a=0),xu(a,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const a=[];let o=0,s=1440-t;for(r&&(o=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const r=o%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=xu(e,r,t);a.push(n)}else{const t=xu(e,r);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const a=parseInt(r[3]||"0",10);let o=r[4];if(void 0===r[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),xu(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return xu(i,a,o)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",a=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<a)a=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&12!==a&&(a+=12),"am"===n&&12===a&&(a=0),60*a+i}}(mu||(mu={}));const gu=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},vu=e=>{const t=parseInt(e);return t>=0&&t<=59},bu=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!gu(n[0],t)||!vu(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!gu(n[0],t)||!vu(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},xu=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,yu=t=>n=>{switch(t){case"maintenance":{const t=n;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=n,r=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",r," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=e=>{const{base:t,md:n,lg:r,width:i,height:a}=e;return{srcSet:`${t} 400w, ${n} 800w, ${r} 1200w`,src:r,sizes:`(max-width: ${Jo.mobileL}px) 400px, (max-width: ${Jo.tablet}px) 800px, 1200px`,width:i,height:a}};const{imgAttributeHelper:wu}=exports.ErrorDisplayHelper,$u={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},ju={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Su=Object.assign(Object.assign({},$u),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),ku=Object.assign(Object.assign({},$u),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Cu=e=>new Map([["400",{img:wu(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:wu(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:wu(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:wu(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:wu(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:wu(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:wu(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:wu(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:wu(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:wu(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:wu(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:wu(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:wu(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:yu("inactivity")}],["maintenance",{img:wu(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:yu("maintenance")}],["no-item-found",{img:wu(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:wu(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:wu(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:wu(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:wu(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:wu(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),Ou=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Tu=q.default.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${ts.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${ts.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${ts.MaxWidth.mobileS} {
        width: 15rem;
    }
`,Du=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Iu=q.default(exports.Text.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Eu=q.default.div`
    ${gs.getTextStyle("Body","regular")} // Follow styling of Text.Body
    color: ${Qo.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${gs.getFontFamily("Body","semibold")}
    }

    a {
        ${gs.getTextStyle("Body","semibold")}
        color: ${Qo.Primary};

        :hover,
        :active,
        :focus {
            color: ${Qo.Secondary};
        }
    }
`,_u=q.default(Ys.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${ts.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Mu=t=>{var{type:n,img:r,title:a,description:o,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=X(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const p=i.useTheme(),f=((e,t)=>{switch(t){case"bookingsg":return Cu(ju).get(e);case"ccube":return Cu(Su).get(e);case"mylegacy":return Cu(ku).get(e);default:return Cu($u).get(e)}})(n,d||(p||fl).resourceScheme),h=u["data-testid"]||"error-display",m=()=>{switch(n){case"maintenance":{const e=l;return l&&e.dateString?f.renderDescription(e):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?f.renderDescription(e):o||void 0}default:return o||void 0}};if(!f)return null;const g=Object.assign(Object.assign(Object.assign(Object.assign({},f),r&&{img:r}),a&&{title:a}),m()&&{description:m()});return e.jsxs(Ou,Object.assign({},u,{"data-testid":h},{children:[e.jsx(Tu,Object.assign({},g.img,{alt:"","data-id":"error-display-image"})),!c&&(g.title||g.description?e.jsxs(Du,{children:[g.title&&("string"==typeof g.title?e.jsx(Iu,Object.assign({"data-testid":`${h}--title`,"data-id":"error-display-title",weight:"semibold"},{children:g.title})):g.title),g.description&&e.jsx(Eu,Object.assign({"data-testid":`${h}--description`,"data-id":"error-display-description"},{children:"string"==typeof g.description?e.jsx("p",{children:g.description}):g.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(_u,Object.assign({},t))})()]}))},Ru=Qo.Neutral[5],Au=Qo.Neutral[1],Nu=q.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${Ru};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Bu=q.default.div`
    flex: 1;
`,Fu=q.default.table`
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
`,Lu=q.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${Ru}`:"none"};
        }
    }
`,Pu=q.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,zu=q.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${Ru};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${Ru};
    border-radius: 0 0 4px 4px;
    background-color: ${Rs.Table.Cell.Selected};
    transition: all 300ms ease;
`,Hu=q.default.tr`
    background-color: ${Rs.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${Ru};
`,Wu=q.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Au};
    border-bottom: 1px solid ${Ru};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,Vu=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Qo.Neutral[1]};
        margin-left: 0.5rem;
    }
`,Yu=q.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${Rs.Table.Cell.Selected};
            `:e.$alternating?i.css`
                ${Rs.Table.Cell.Primary};
            `:i.css`
                ${Rs.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${Ru};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return i.css`
                    background-color: ${Rs.Table.Cell.Hover};
                `}};
    }
`,Uu=q.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Au};
    border-bottom: 1px solid ${Ru};
`,qu=q.default(exports.Text.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,Ku=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Xu=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,Gu=q.default(Mu)`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,Zu=q.default.td`
    padding: 4rem 0;
`,Qu=e=>"small"===e?2.5:3,Ju=q.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Qu(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,ep=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Qu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Qo.Accent.Light[3]};
    }
`,tp=q.default.button`
    ${ep}
    cursor: pointer;
`,np=q.default.div`
    ${ep}
`,rp=i.keyframes`
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
`,ip=q.default.div`
    position: relative;
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Qo.Neutral[8]};

    :focus-within {
        border: 1px solid ${Qo.Accent.Light[1]};
        box-shadow: ${Rs.InputBoxShadow};
    }

    ${e=>e.expanded?i.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:i.css`
                animation: ${rp} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${Qo.Neutral[6](e)};

                ${tp} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Qo.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${tp} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?i.css`
                border: 1px solid ${Qo.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Qo.Validation.Red.Border(e)};
                    box-shadow: ${Rs.InputErrorBoxShadow};
                }
            `:void 0}
`;q.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${ws.Base};
    margin-left: 1rem;
`,q.default(p.ChevronDownIcon)`
    color: ${Qo.Neutral[3]};
    ${e=>{let t=ds.Body.fontSize;return"small"===e.$variant&&(t=ds.BodySmall.fontSize),i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const ap=q.default.div`
    height: 1px;
    background: ${Qo.Neutral[5]};
    margin: 0 0.5rem;
`,op=q.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${Qo.Neutral[3]};
            `}}
`,sp=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,lp=q.default(sp)`
    color: ${Qo.Neutral[3]};
`,cp=({children:n,show:r,error:i,disabled:a,testId:o,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef();return cc("mousedown",(function(e){if(!a){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e.jsx(Ju,Object.assign({className:c,$variant:d},{children:e.jsx(ip,Object.assign({ref:u,error:i&&!r,disabled:a,$readOnly:l,expanded:r,"data-testid":o},{children:n}))}))};var dp;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(dp||(dp={}));const up=()=>{const[e,n]=t.useState(void 0),r=m.useFloatingTree();return t.useEffect((()=>{if(!r)return void n(void 0);const e=e=>{n(e.zIndex)};return r.events.on(dp.Change,e),r.events.emit(dp.Ready),()=>r.events.off(dp.Change,e)}),[r]),e},pp=q.default.div`
    display: flex;
    flex-direction: column;
`,fp=e=>"right"===e?"bottom-end":"bottom-start",hp=({enabled:n,isOpen:r,onOpen:i,onClose:a,onDismiss:o,renderElement:s,renderDropdown:l,customZIndex:c,clickToToggle:d=!1,offset:u=0,alignment:p="left",fitAvailableHeight:f})=>{var h;const g=t.useRef(null),v=t.useRef(null),{width:b}=Ye({targetRef:g,handleHeight:!1}),x={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<ns.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:y,floatingStyles:w,context:$}=m.useFloating({open:r,onOpenChange:(e,t,n)=>{"escape-key"===n?null==o||o():e&&!r?null==i||i():!e&&r&&(null==a||a(n))},whileElementsMounted:m.autoUpdate,placement:fp(p),middleware:[m.offset(u),m.flip(),m.shift({limiter:m.limitShift()}),m.size({apply({availableHeight:e}){v.current&&Object.assign(v.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),x]}),j=up(),{isMounted:S,styles:k}=m.useTransitionStyles($,{initial:{opacity:0},open:{opacity:1},duration:300}),C=m.useClick($,{enabled:n,toggle:d}),O=m.useDismiss($,{enabled:n}),{getReferenceProps:T,getFloatingProps:D}=m.useInteractions([C,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{g.current=e,y.setReference(e)}},T(),{children:s()})),S&&e.jsx(m.FloatingPortal,{children:e.jsx(m.FloatingFocusManager,Object.assign({context:$,modal:!1,initialFocus:v,returnFocus:!1},{children:e.jsx("div",Object.assign({ref:y.setFloating,style:Object.assign(Object.assign({},w),{zIndex:null!==(h=null!=c?c:j)&&void 0!==h?h:50})},D(),{children:e.jsx(pp,Object.assign({ref:v,style:Object.assign({},k),inert:k.opacity<1?"":void 0},{children:l({elementWidth:b})}))}))}))})]})},mp=i.css`
    border: 1px solid ${Qo.Accent.Light[1]};
    box-shadow: ${Rs.InputBoxShadow};
`,gp=i.css`
    border: 1px solid ${Qo.Accent.Light[1]};
    box-shadow: none;
`,vp=i.css`
    border: 1px solid ${Qo.Neutral[5]};
    box-shadow: none;
`,bp=i.css`
    border: 1px solid ${Qo.Validation.Red.Border};
    box-shadow: ${Rs.InputErrorBoxShadow};
`,xp=q.default.div`
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    background: ${Qo.Neutral[8]};

    :focus-within {
        ${mp}
    }
    ${e=>e.$focused&&mp}

    ${e=>e.$readOnly?i.css`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${gp}
                }
                ${e.$focused&&gp}
            `:e.$disabled?i.css`
                background: ${Qo.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${vp}
                }
                ${e.$focused&&vp}
            `:e.$error?i.css`
                border: 1px solid ${Qo.Validation.Red.Border};

                :focus-within {
                    ${bp}
                }
                ${e.$focused&&bp}
            `:void 0}
`,yp=q.default(xp)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,wp=q.default.input`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Qo.Neutral[1]};
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
        color: ${Qo.Neutral[3]};
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
`,$p=q.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Qo.Primary};
    }
`,jp=q.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Sp=q.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${kp}, ${Dp} {
                    color: ${Qo.Neutral[4]};
                }
            `}}
`,kp=q.default(wp)`
    background: transparent;
    text-align: center;
`,Cp=q.default(kp)`
    width: 2rem;
    margin-right: 0.25rem;
`,Op=q.default(kp)`
    width: 2.5rem;
`,Tp=q.default(kp)`
    width: 3rem;
    margin-left: 0.25rem;
`,Dp=q.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${Qo.Neutral[3](e)};
            `}}
`,Ip=q.default.div`
    ${gs.getTextStyle("Body","regular")}
    background-color: ${Qo.Neutral[8]};
    color: ${Qo.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i.css`
                background-color: ${Qo.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?i.css`
                display: none;
            `:void 0}
`;Pl.extend(Hl);const Ep=Y.default.forwardRef((({disabled:n,readOnly:r,names:i,value:a,focused:o,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:p,hideInputKeyboard:f},h)=>{const m=f?"none":"numeric",[g,v,b]=hc(""),[x,y,w]=hc(""),[$,j,S]=hc(""),[k,C]=t.useState("none"),[O,T]=t.useState(!1),D=t.useRef(null),I=t.useRef(null),E=t.useRef(null),_=t.useRef(null),[M,R,A]=z(s);t.useEffect((()=>{var e;const[t="",n="",r=""]=z(a);v(t),y(n),j(r),t||n||r||!D.current||!D.current.contains(document.activeElement)||null===(e=I.current)||void 0===e||e.focus()}),[a]),t.useEffect((()=>{o||C("none"),o&&(T(!0),I.current&&D.current&&!D.current.contains(document.activeElement)&&I.current.focus())}),[o]),t.useImperativeHandle(h,(()=>({ref:D,resetPlaceholder(){T(!1)},resetInput(){const[e="",t="",n=""]=z(a);v(e),y(t),j(n)}})),[a]);const N=e=>{var t;e.preventDefault(),null===(t=I.current)||void 0===t||t.focus()},B=e=>{e.target.select();const t=e.target.name;C(t)},F=e=>{const[t,n,r]=i,a={[t]:b.current,[n]:w.current,[r]:S.current},o=e.target.name,s=a[o],l=o!==r?sc.padValue(s,!0):s;switch(o){case t:a[t]=l,v(l);break;case n:a[n]=l,y(l)}const c=`${a[r]}-${a[n]}-${a[t]}`,u=Pl(c,"YYYY-MM-DD",!0).isValid(),f=!a[t]&&!a[n]&&!a[r];u&&s!==l&&d(c),D.current&&!D.current.contains(e.relatedTarget)&&(C("none"),null==p||p(f||u))},L=e=>{var t,n;if(s)return;const r=e.target.name,a=e.target.value.replace(/[^0-9]/g,""),o={day:g,month:x,year:$};switch(r){case i[0]:o.day=a,v(a),2===a.length&&(null===(t=E.current)||void 0===t||t.focus());break;case i[1]:o.month=a,y(a),2===a.length&&(null===(n=_.current)||void 0===n||n.focus());break;case i[2]:o.year=a,j(a)}if(!o.day&&!o.month&&!o.year)return void d("");const l=`${o.year}-${o.month}-${o.day}`;Pl(l,"YYYY-MM-DD",!0).isValid()&&d(l)},P=e=>{var t,n;"Backspace"!==e.code&&"Backspace"!==e.key||(k===i[1]&&0===x.length&&(null===(t=I.current)||void 0===t||t.focus()),k===i[2]&&0===$.length&&(null===(n=E.current)||void 0===n||n.focus()))};function z(e){if(e){const t=Pl(new Date(e));return t.isValid()?[sc.padValue(t.date().toString()),sc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(jp,Object.assign({role:"group","aria-label":c,onClick:()=>{n||r||(T(!0),I.current&&D.current&&!D.current.contains(document.activeElement)&&I.current.focus())},onFocus:e=>{n||(T(!0),o||null==u||u(e))}},{children:[e.jsxs(Sp,Object.assign({ref:D,$hover:!!s},{children:[e.jsx(Cp,{ref:I,name:i[0],maxLength:2,value:null!=M?M:g,onFocus:B,onBlur:F,onChange:L,type:"text",inputMode:m,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[0]||r?"DD":""}),e.jsx(Dp,Object.assign({$inactive:0===g.length},{children:"/"})),e.jsx(Op,{ref:E,name:i[1],maxLength:2,value:null!=R?R:x,onFocus:B,onBlur:F,onChange:L,onKeyDown:P,type:"text",inputMode:m,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[1]||r?"MM":""}),e.jsx(Dp,Object.assign({$inactive:0===x.length},{children:"/"})),e.jsx(Tp,{ref:_,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:B,onBlur:F,onChange:L,onKeyDown:P,type:"text",inputMode:m,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[2]||r?"YYYY":""})]})),(()=>{if(!a&&!r&&l)return e.jsx(Ip,Object.assign({$hide:O,$disabled:n,onMouseDown:N},{children:l}))})()]}))})),_p=q.default(yp)`
    height: 3rem;
`,Mp=n=>{var{minDate:r,maxDate:i,disabled:a,disabledDates:o,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:p,onYearMonthDisplayChange:f,withButton:h=!0,readOnly:m,id:g,allowDisabledSelection:v,zIndex:b}=n,x=X(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[y,w]=t.useState(ac.sanitizeInput(c)),[$,j]=t.useState(ac.sanitizeInput(c)),[S,k]=t.useState(void 0),[C,O]=t.useState(!1),[T,D]=t.useState(!1),I=t.useRef(null),E=t.useRef();t.useEffect((()=>{const e=ac.sanitizeInput(c);w(e),j(e)}),[c]);const _=e=>{!v&&ac.isDateDisabled(e,{disabledDates:o,minDate:r,maxDate:i})||(j(e),h||(F(e),w(e),e&&O(!1)))},M=e=>{var t;j(e),h||(F(e),w(e),e&&(null===(t=I.current)||void 0===t||t.focus(),O(!1)),S&&k(void 0))},R=()=>{m||a||(O(!0),T||(D(!0),u&&u()))},A=e=>{var t;T&&!C&&I.current&&!I.current.contains(e.relatedTarget)&&(null===(t=E.current)||void 0===t||t.resetInput(),j(y),D(!1),L())},N=e=>{k(e)},B=e=>{var t;switch(e){case"reset":j(y);break;case"confirmed":w($),F($)}null===(t=I.current)||void 0===t||t.focus(),O(!1)},F=e=>{d&&d(e)},L=()=>{p&&p()};return e.jsx(hp,{enabled:!m&&!a,isOpen:C,renderElement:()=>e.jsx(_p,Object.assign({tabIndex:-1,ref:I,onBlur:A,onFocus:R,$disabled:a,$readOnly:m,$focused:T,$error:s,id:g,"data-testid":x["data-testid"]},x,{children:e.jsx(Ep,{ref:E,disabled:a,onChange:_,readOnly:m,focused:C,names:["start-day","start-month","start-year"],value:$,hoverValue:S,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(kd,{type:"input",variant:"single",initialCalendarDate:$,withButton:h,value:$,disabledDates:o,minDate:r,maxDate:i,allowDisabledSelection:v,onHover:N,onSelect:M,onDismiss:B,onYearMonthDisplayChange:f,width:t}),onClose:()=>{var e;null===(e=E.current)||void 0===e||e.resetInput(),j(y),O(!1),D(!1),L()},onDismiss:()=>{var e,t;null===(e=E.current)||void 0===e||e.resetInput(),null===(t=I.current)||void 0===t||t.focus(),j(y),O(!1)},customZIndex:b,offset:16})},Rp=q.default(is)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Qo.Neutral[5]};
    background-color: ${Qo.Neutral[8]};
    :hover {
        background-color: ${Qo.Neutral[7]};
    }
    :disabled {
        cursor: not-allowed;
        background-color: ${Qo.Neutral[6]};
    }
`,Ap=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Qo.Neutral[7]};
    border-radius: 0.25rem;
`,Np=q.default(Ys.Default)`
    color: ${e=>e.$enableDateClick?Qo.Primary:Qo.Neutral[1]};
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
            background-color: ${Qo.Neutral[7]};
            :hover {
                cursor: default;
            }
        `}
`,Bp=n=>{var{selectedDate:r,minDate:i,maxDate:a,loading:o,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=n,p=X(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const f=ic.toDayjs(r),h=ic.toDayjs(r).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),m=ic.isSame(r,Pl())&&l?"Today":f.format(s?"ddd":"dddd"),[g,v]=t.useState(!1),b=e=>{u&&u(e),v(!g)},x=()=>{v(!1),c(r)},y=()=>{v(!1),d(r)};return e.jsx(hp,{enabled:!o,isOpen:g,renderElement:()=>e.jsxs(Ap,Object.assign({},p,{children:[e.jsx(Rp,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:o||!!i&&(Ql.isDisabledDay(f,void 0,i)||ic.isSame(f,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:x},{children:e.jsx(Cc,{})})),e.jsx(Np,Object.assign({onClick:()=>!!u&&!o&&v(!g),$enableDateClick:!!u&&!o,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||o},{children:`${h}, ${m}`})),e.jsx(Rp,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:o||!!a&&(Ql.isDisabledDay(f,void 0,void 0,a)||ic.isSame(f,a)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:y},{children:e.jsx(Oc,{})}))]})),renderDropdown:({elementWidth:t})=>e.jsx(kd,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:a,onSelect:b,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},Fp=q.default.div`
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
`,Lp=q.default.div`
    width: 100%; // Force next flex item to break to next line
`,Pp=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,zp=q.default(u.ArrowRightIcon)`
    color: ${Qo.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Hp=q.default.div`
    position: absolute;
    background: ${e=>e.$error?Qo.Validation.Red.Border(e):Qo.Primary(e)};
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
`,Wp=({children:t,currentActive:n,error:r,className:i,wrap:a})=>{const[o,s]=t;return e.jsxs(Fp,Object.assign({className:i,$wrap:a},{children:[e.jsx(Pp,Object.assign({"data-id":"range-container-elem1-container"},{children:o})),e.jsx(zp,{}),a&&e.jsx(Lp,{}),e.jsx(Pp,Object.assign({"data-id":"range-container-elem2-container"},{children:s})),e.jsx(Hp,{"data-id":"range-container-indicator",$position:n,$error:r,$wrap:a})]}))},Vp=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Yp=q.default(yp)`
    ${e=>e.$wrap&&i.css`
            padding: 0.75rem 1rem;
        `}
`,Up=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,qp={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Kp=n=>{var{minDate:r,maxDate:i,disabled:a,disabledDates:o,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:p,onBlur:f,onYearMonthDisplayChange:h,withButton:m=!0,variant:g="range",numberOfDays:v=7,readOnly:b,id:x,allowDisabledSelection:y,zIndex:w}=n,$=X(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[j,S]=t.useState(),[k,C]=t.useState(void 0),[O,T]=t.useState(!1),[D,I]=t.useState(!1),E="week"===g,_="fixed-range"===g,[{selectedStart:M,selectedEnd:R,currentFocus:A,calendarOpen:N,isStartDirty:B,isEndDirty:F,focused:L},P]=(({initialState:e,reducers:n,name:r,debug:i})=>{const[a,o]=t.useReducer(((e,t)=>n[t.type]?n[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(n).map((e=>[e,t=>{i&&Vp(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:qp,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:E?"none":_?"start":t,calendarOpen:!b,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),z=t.useRef(!1),H=t.useRef(),W=t.useRef(),V=t.useRef(),Y=t.useRef(),U=(({maxWidth:e,targetRef:n})=>{const[r,i]=t.useState(!1);return Ye({targetRef:n,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),r})({maxWidth:320,targetRef:H});t.useEffect((()=>{P.resetRange({start:ac.sanitizeInput(c),end:ac.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?S(M):"end"===A&&S(R)}),[A]);const q=e=>{var t,n,r;"Enter"!==e.code||m||(M&&R?(P.done({start:M,end:R}),null==u||u(M,R)):(P.dismiss(),null===(t=H.current)||void 0===t||t.focus(),null===(n=V.current)||void 0===n||n.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder()))},K=e=>{var t;if(le(e))return void(z.current=!0);if(P.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),z.current=!1,!e)return void(m||R||!F||(P.resetRange({start:"",end:""}),null==u||u("","")));if(!R)return void P.focus("end");if(Pl(e).isAfter(R,"day"))P.reselectEnd();else{if(F)return m?void 0:(P.done({start:e,end:R}),void(null==u||u(e,R)));P.focus("end")}},G=e=>{var t;if(le(e))return void(z.current=!0);if(Pl(e).isBefore(M,"day")&&W.current)return P.changeStart(e),W.current.setCalendarDate(e),void P.reselectEnd();if(P.changeEnd(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),e){if(M)return m?void 0:(P.done({start:M,end:e}),void(null==u||u(M,e)));P.focus("start")}else m||M||!B||(P.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{var t;if(le(e))return void(z.current=!0);if(P.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),z.current=!1,!e)return void(m?P.changeEnd(""):(P.resetRange({start:"",end:""}),null==u||u("","")));const n=Pl(e).format("YYYY-MM-DD"),r=Pl(n).add(v-1,"day").format("YYYY-MM-DD");return P.changeStart(n),P.changeEnd(r),z.current=!1,m?void 0:(P.done({start:n,end:r}),void(null==u||u(n,r)))},Q=()=>{b||a||L||(P.focus("start"),null==p||p())},J=e=>{var t,n,r;L&&!N&&H.current&&!(null===(t=H.current)||void 0===t?void 0:t.contains(e.relatedTarget))&&(P.blur(),T(!1),I(!1),null===(n=V.current)||void 0===n||n.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder(),null==f||f())},ee=e=>t=>{t.stopPropagation(),b||(P.focus(e),te(),ne(),L||null==p||p())},te=()=>{if(E){const e=ic.toDayjs(M).startOf("week").format("YYYY-MM-DD");T(!0),I(!0),S(e)}},ne=()=>{_&&(I(!0),S(M))},re=e=>{var t;e&&!z.current||(P.resetStart(),null===(t=V.current)||void 0===t||t.resetInput())},ie=e=>{var t;e&&!z.current||(P.resetEnd(),null===(t=Y.current)||void 0===t||t.resetInput())},ae=e=>{switch(g){case"week":(e=>{const t=Pl(e).startOf("week").format("YYYY-MM-DD"),n=Pl(e).endOf("week").format("YYYY-MM-DD");if(P.changeStart(t),P.changeEnd(n),z.current=!1,!m)P.done({start:t,end:n}),null==u||u(t,n)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?K(e):"end"===A&&G(e)}},oe=e=>{var t;switch(null===(t=H.current)||void 0===t||t.focus(),e){case"reset":P.cancel();break;case"confirmed":P.done({start:M,end:R}),null==u||u(M,R)}},se=e=>{C(e)},le=e=>!y&&e&&ac.isDateDisabled(e,{disabledDates:o,minDate:r,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(g){case"range":t={start:"start"===A?k:void 0,end:"end"===A?k:void 0};break;case"week":if(!k)return;t={start:Pl(k).startOf("week").format("YYYY-MM-DD"),end:Pl(k).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!k)return;t={start:Pl(k).format("YYYY-MM-DD"),end:Pl(k).add(v-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(hp,{enabled:!b&&!a,isOpen:N,onClose:()=>{var e,t;P.blur(),T(!1),I(!1),null===(e=V.current)||void 0===e||e.resetPlaceholder(),null===(t=Y.current)||void 0===t||t.resetPlaceholder(),null==f||f()},onDismiss:()=>{var e,t,n;P.dismiss(),null===(e=H.current)||void 0===e||e.focus(),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(n=Y.current)||void 0===n||n.resetPlaceholder()},renderElement:()=>e.jsx(Yp,Object.assign({ref:H,tabIndex:-1,onFocus:Q,onBlur:J,$focused:L,$disabled:a,$readOnly:b,$error:s,$wrap:U,id:x,"data-testid":$["data-testid"],onKeyDown:q},$,{children:e.jsxs(Wp,Object.assign({currentActive:A,wrap:U,error:s},{children:[e.jsx(Up,Object.assign({$wrap:U},{children:e.jsx(Ep,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:M,disabled:a,readOnly:O||b,focused:"start"===A,hoverValue:ce("start"),onChange:_?Z:K,onFocus:ee("start"),onBlur:re,hideInputKeyboard:l})})),e.jsx(Up,Object.assign({$wrap:U},{children:e.jsx(Ep,{ref:Y,placeholder:"To",names:["end-day","end-month","end-year"],value:R,disabled:a,readOnly:D||b,focused:"end"===A,hoverValue:ce("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})}))]}))})),renderDropdown:({elementWidth:t})=>e.jsx(kd,{ref:W,type:"input",variant:g,initialCalendarDate:j,withButton:m,value:M,endValue:R,selectWithinRange:B||F,currentFocus:A,disabledDates:o,minDate:r,maxDate:i,allowDisabledSelection:y,onSelect:ae,onDismiss:oe,onHover:se,onYearMonthDisplayChange:h,numberOfDays:v,width:t}),customZIndex:w,offset:16})},Xp=q.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${n||1};

            ${ts.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${a||1};
            }

            ${ts.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,Gp=Y.default.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=X(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Xp,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=Zp(a||i||r),o=Zp(e),s=Zp(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),Zp=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Qp=()=>e=>{let t;t=e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Qo.Neutral[5](e);const n=encodeURIComponent(t),r=e.$thickness||1,a=r+1;return i.css`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${a}" stroke-dasharray="4 4" /></svg>');
    `},Jp=q.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${Qp}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Qo.Neutral[5]};
                `}}}
`,ef=q.default.div`
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
`,tf=q.default.div`
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
`,nf=({show:n=!1,rootId:r,onOverlayClick:i,children:a,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[p,f]=t.useState(null),[h,g]=t.useState(),[v]=t.useState((()=>oc.generate())),b=m.useFloatingNodeId(),x=t.useRef(),y=t.useRef(null),w=a&&Y.default.cloneElement(a,{ref:y}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",j=null!=d?d:h?99999:99998;(e=>{const n=m.useFloatingTree();t.useEffect((()=>{if(!n)return;const t={zIndex:e};n.events.emit(dp.Change,t)}),[n,e]),t.useEffect((()=>{if(!n)return;const t=()=>{const t={zIndex:e};n.events.emit(dp.Change,t)};return null==n||n.events.on(dp.Ready,t),()=>null==n?void 0:n.events.off(dp.Ready,t)}),[n,e])})(j),t.useEffect((()=>(O(),f(k()),()=>{E(),D().length<1&&T("remove")})),[]),t.useEffect((()=>{if(n){const e=C();S(e),I();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{E();const e=setTimeout((()=>{D().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[n]);const S=e=>{x.current=e,g(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,C=()=>D().length>0,O=()=>{if(!document.getElementById(af)){const e=document.createElement("style");e.id=af;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${of} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${of}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(of);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(of):document.body.classList.add(of)},D=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},I=()=>{const e=D();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},E=()=>{const e=D();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},_=e=>{var t;const n=null===(t=y.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||i&&c&&(e.preventDefault(),i())};return p?U.default.createPortal(e.jsx(ef,Object.assign({id:$,"data-testid":$,$show:n,$zIndex:j},{children:a&&e.jsx(m.FloatingNode,Object.assign({id:b},{children:e.jsx(tf,Object.assign({"data-testid":"overlay-wrapper",$show:n,$backgroundOpacity:o||(h?.5:.8),$backgroundBlur:s,$disableTransition:l,onClick:_},{children:w}))}))})),p):null},rf=t=>e.jsx(m.FloatingTree,{children:e.jsx(nf,Object.assign({},t))}),af="lifesg-ds-overlay-stylesheet",of="lifesg-ds-overlay-open",sf=q.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Qo.Neutral[8]};
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

    ${ts.MaxWidth.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${ts.MaxWidth.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,lf=q.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${Qo.Neutral[8]};
    border-bottom: 1px solid ${Qo.Neutral[5]};

    ${ts.MaxWidth.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,cf=q.default(is)`
    color: ${Qo.Neutral[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${Qo.Primary};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,df=q.default(exports.Text.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,uf=q.default.div`
    flex: 1;
    overflow-y: auto;
`,pf=({className:t,progress:n,color:r,"data-testid":i})=>e.jsx(ff,Object.assign({className:t,$innerWidth:n,$color:r,"data-testid":i},{children:e.jsx("progress",{value:100*n,max:100})})),ff=q.default.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):Qo.Accent.Light[1](e),i.css`
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
`,hf=q.default.button`
    align-items: center;
    background-color: ${Qo.Primary};
    border-radius: 0.25rem;
    color: ${Qo.Neutral[8]};
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
                    background-color: ${Qo.Neutral[8]};
                    border: 1px solid ${Qo.Primary};
                    color: ${Qo.Primary};
                `;case"light":return i.css`
                    background-color: ${Qo.Neutral[8]};
                    border: 1px solid ${Qo.Neutral[5]};
                    color: ${Qo.Primary};
                `;default:return i.css`
                    background-color: ${Qo.Primary};
                    border: none;
                    color: ${Qo.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${Qo.Neutral[6]};
        border: 1px solid ${Qo.Neutral[6]};
        color: ${Qo.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,mf=Y.default.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(hf,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:o,$styleType:i},l,{children:a}))})),gf=q.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${ts.MaxWidth.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,vf=n=>{var{id:r="modal",show:i,animationFrom:a="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=n,p=X(n,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,h]=t.useState(),[m,g]=t.useState();t.useEffect((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const v=()=>{const e=.01*window.innerHeight;h(e)},b=()=>{const e=.01*window.visualViewport.height;h(e),g(window.visualViewport.offsetTop)};return e.jsx(rf,Object.assign({"data-testid":`${r}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c},{children:e.jsx(gf,Object.assign({show:i,animationFrom:a,"data-testid":r,verticalHeight:f,offsetTop:m},p,{children:o}))}))},bf=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Qo.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ts.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,xf=q.default(is)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Qo.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Qo.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ts.MaxWidth.mobileL} {
        right: 1.25rem;
    }
`,yf=t=>{var{id:n="modal-box",children:r,onClose:i,showCloseButton:a=!0}=t,o=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(bf,Object.assign({"data-testid":n},o,{onClick:e=>{e.stopPropagation()}},{children:[a&&e.jsx(xf,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e.jsx(g.CrossIcon,{})})),r]}))},wf=Object.assign(vf,{Box:yf}),$f=` ${ts.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${ns.mobileL}px)`,jf=`@media(orientation: landscape) and (max-height: ${ns.mobileL}px)`,Sf=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(Qo.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${Qo.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,kf=q.default(Ys.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Cf=q.default(mf)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,Of=q.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,Tf=q.default.div`
    background: ${Qo.Accent.Light[6]};
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Df=q.default(exports.Text.H6)`
    margin-top: 1rem;
`,If=q.default(wf)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Ef=q.default.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${$f} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,_f=q.default(wf.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${$f} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,Mf=q.default.h4`
    ${gs.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${Qo.Neutral[1]};
    text-align: center;

    ${$f} {
        ${gs.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,Rf=q.default.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${$f} {
        border-radius: 0;
        flex: 1;
    }

    ${jf} {
        background: ${Qo.Neutral[7]};
    }
`,Af=q.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Qo.Neutral[6]};
    margin: auto;

    ${$f} {
        aspect-ratio: 4/3;
    }
    ${ts.MaxWidth.mobileL} {
        width: 100%;
        height: auto;
    }
    ${jf} {
        width: auto;
        height: 100%;
    }
`,Nf=q.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Qo.Neutral[4]};
    pointer-events: none;

    ${$f} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,Bf=q.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${jf} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,Ff=q.default(Ys.Default)`
    width: 8.5rem;
    ${ts.MaxWidth.mobileL} {
        width: 100%;
    }
    ${jf} {
        height: 2.5rem;
    }
`,Lf=q.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Pf=q.default.canvas`
    cursor: crosshair;
`,zf=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.b6b593f8.js")}))).ESignatureCanvas}})))),Hf=n=>{const{description:r,id:i,loadingProgress:a,loadingLabel:o="Uploading...",onChange:s,value:l}=n,c=X(n,["description","id","loadingProgress","loadingLabel","onChange","value"]),[d,p]=t.useState(!1),f=t.useRef(null),[h,m]=t.useState(l),g=kl.useMediaQuery({maxWidth:ns.mobileL}),v=()=>{var e;null===(e=f.current)||void 0===e||e.clear()},b=()=>{var e;if(f.current){const t=null===(e=f.current)||void 0===e?void 0:e.export();m(t),p(!1),null==s||s(t)}};t.useEffect((()=>{m(l)}),[l]);return e.jsxs("div",Object.assign({},c,{children:[e.jsx(Sf,{children:isNaN(a)?h?e.jsxs(e.Fragment,{children:[e.jsx(Of,{src:h,alt:"Signature preview"}),e.jsx(Cf,Object.assign({styleType:"light",onClick:()=>p(!0),id:i,"aria-label":"Edit signature"},{children:e.jsx(u.PencilIcon,{})}))]}):e.jsx(kf,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>p(!0)},{children:"Add signature"})):e.jsxs(Tf,{children:[o&&e.jsx(exports.Text.BodySmall,{children:o}),e.jsx(pf,{progress:a,"data-testid":`${i||"e-signature"}-progress-bar`})]})}),e.jsx(If,Object.assign({"data-testid":"signature-modal",show:d},{children:e.jsx(Ef,{children:e.jsxs(_f,Object.assign({onClose:()=>p(!1)},{children:[e.jsx(Mf,{children:"Signature"}),e.jsx(Rf,{children:e.jsxs(Af,{children:[e.jsx(Nf,{}),e.jsx(t.Suspense,Object.assign({fallback:null},{children:d&&e.jsx(zf,{ref:f,baseImageDataURL:h})}))]})}),e.jsxs(Bf,{children:[e.jsx(Ff,Object.assign({as:jc.Default,type:"button",styleType:g?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:v},{children:"Clear"})),e.jsx(Ff,Object.assign({type:"button",onClick:b},{children:"Save"}))]})]}))})})),r?e.jsx(Df,Object.assign({weight:"regular",as:"p"},{children:r})):null]}))},Wf="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Vf="Submit",Yf="Rate your experience",Uf=5,qf=q.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Kf=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Qo.Primary};
    ${qf}:focus-visible + & {
        outline: 0.125rem solid ${Qo.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Xf=q.default(v.StarIcon)`
    ${Kf}
`,Gf=q.default(b.StarFillIcon)`
    ${Kf}
`,Zf=q.default.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Qf=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Jf=t=>{const{description:n,rating:r,onRatingChange:i}=t,a=t=>{const n=`${t} star${1===t?"":"s"}`;return t<=r?e.jsx(Gf,{"aria-label":n}):e.jsx(Xf,{"aria-label":n})};return e.jsx(Qf,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Uf)].map(((t,n)=>{const o=n+1;return e.jsxs(Zf,{children:[e.jsx(qf,{type:"radio",name:"star",checked:o===r,onChange:()=>(e=>{i(e)})(o)}),a(o)]},o)}))}))},eh=q.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,th=q.default.div`
    border-top: 1px solid ${Qo.Neutral[5]};
    border-bottom: 1px solid ${Qo.Neutral[5]};
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
`,nh=q.default.div`
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
`,rh=q.default(Ys.Default)`
    margin-top: 1rem;
    width: 100%;
`,ih=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(Qo.Neutral[5](e));return i.css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${ts.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,ah=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,oh=q.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,sh=q.default.div`
    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"Body"})}
`,lh=q.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${Qo.Neutral[3]};
`,ch=q.default.div`
    color: ${Qo.Neutral[3]};
    ${Zs({textSize:"BodySmall"})}
`,dh=q.default.ul`
    list-style-type: none;
`;var uh;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(uh||(uh={}));const ph=({src:t,alt:n,className:r,"data-testid":i})=>e.jsx("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),fh=q.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }
`,hh=q.default.div`
    background: ${Qo.Accent.Light[6]};
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    ${ts.MaxWidth.mobileL} {
        padding: 1rem;
    }
    :hover {
        background: ${Qo.Accent.Light[5]};
    }
`,mh=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${ts.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,gh=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,vh=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,bh=q.default.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;
    ${ts.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }
`,xh=q.default(exports.Text.BodySmall)`
    ${ts.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;q.default(xh)`
    margin-top: 0.25rem;
`;const yh=q.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${Qo.Validation.Red.Text};
`,wh=q.default(yh)`
    margin-top: 0.25rem;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,$h=q.default(yh)`
    display: none;
    visibility: hidden;
    ${ts.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,jh=q.default(zs)`
    ${e=>{let t=Qo.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Qo.Neutral[3](e);break;default:t=Qo.Neutral[8](e)}return i.css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Sh=q.default.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,kh=q.default(mf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,Ch=q.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${ts.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,Oh=q.default(ph)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${Qo.Neutral[5]};
    object-fit: cover;

    ${ts.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,Th=t.memo((({fileItem:n,onDownload:r})=>{const{id:i,name:a,size:o,errorMessage:s,thumbnailImageDataUrl:l,truncateText:c=!0,ready:d=!0}=n,[p,f]=t.useState(!1),[h,m]=t.useState(!1),g=uh.formatFileSizeDisplay(o),v=kl.useMediaQuery({maxWidth:ns.mobileL}),[b,x]=t.useState(),y=t.useRef();t.useEffect((()=>{y.current&&x(v?w(a):a)}),[a,v]);const w=e=>{if(!c)return e;const t=y&&y.current?y.current.getBoundingClientRect().width:0;return sc.truncateTwoLines(e,t,16,1.5)},$=()=>e.jsxs(e.Fragment,{children:[e.jsx(xh,Object.assign({weight:"regular",ref:y},{children:b})),h&&e.jsx(wh,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]});return e.jsx(fh,Object.assign({"data-testid":i},{children:e.jsxs(hh,Object.assign({onClick:()=>G(void 0,void 0,void 0,(function*(){if(d&&!p){f(!0);try{m(!1),yield r(n)}catch(e){m(!0)}finally{f(!1)}}}))},{children:[(()=>{let t;return t=l?e.jsxs(e.Fragment,{children:[e.jsx(Ch,Object.assign({"data-testid":`${i}-thumbnail`},{children:e.jsx(Oh,{"data-testid":`${i}-thumbnail-image`,src:l})})),e.jsxs(vh,{children:[e.jsx(gh,{children:$()}),e.jsx(bh,{children:e.jsx(xh,{children:g||"-"})}),h&&e.jsx($h,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]})]}):e.jsxs(e.Fragment,{children:[e.jsx(gh,{children:$()}),e.jsx(bh,{children:e.jsx(xh,{children:g||"-"})}),h&&e.jsx($h,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]}),e.jsx(mh,Object.assign({$hasThumbnail:!!l},{children:t}))})(),e.jsx(Sh,{children:e.jsx(kh,Object.assign({"data-testid":`${i}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`},{children:p||!d?e.jsx(jh,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})}))})]}))}))})),Dh={activeId:void 0,setActiveId:void 0},Ih=t.createContext(Dh);var Eh,_h={exports:{}},Mh={exports:{}},Rh={};var Ah,Nh,Bh,Fh,Lh,Ph,zh,Hh,Wh,Vh,Yh,Uh,qh,Kh,Xh={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Gh(){return Nh||(Nh=1,"production"===process.env.NODE_ENV?Mh.exports=function(){if(Eh)return Rh;Eh=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:switch(e=e.type){case l:case c:case r:case a:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case h:case f:case o:return e;default:return p}}case n:return p}}}function y(e){return x(e)===c}return Rh.AsyncMode=l,Rh.ConcurrentMode=c,Rh.ContextConsumer=s,Rh.ContextProvider=o,Rh.Element=t,Rh.ForwardRef=d,Rh.Fragment=r,Rh.Lazy=h,Rh.Memo=f,Rh.Portal=n,Rh.Profiler=a,Rh.StrictMode=i,Rh.Suspense=u,Rh.isAsyncMode=function(e){return y(e)||x(e)===l},Rh.isConcurrentMode=y,Rh.isContextConsumer=function(e){return x(e)===s},Rh.isContextProvider=function(e){return x(e)===o},Rh.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Rh.isForwardRef=function(e){return x(e)===d},Rh.isFragment=function(e){return x(e)===r},Rh.isLazy=function(e){return x(e)===h},Rh.isMemo=function(e){return x(e)===f},Rh.isPortal=function(e){return x(e)===n},Rh.isProfiler=function(e){return x(e)===a},Rh.isStrictMode=function(e){return x(e)===i},Rh.isSuspense=function(e){return x(e)===u},Rh.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},Rh.typeOf=x,Rh}():Mh.exports=(Ah||(Ah=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var m=e.type;switch(m){case l:case c:case r:case a:case i:case u:return m;default:var g=m&&m.$$typeof;switch(g){case s:case d:case h:case f:case o:return g;default:return p}}case n:return p}}}var y=l,w=c,$=s,j=o,S=t,k=d,C=r,O=h,T=f,D=n,I=a,E=i,_=u,M=!1;function R(e){return x(e)===c}Xh.AsyncMode=y,Xh.ConcurrentMode=w,Xh.ContextConsumer=$,Xh.ContextProvider=j,Xh.Element=S,Xh.ForwardRef=k,Xh.Fragment=C,Xh.Lazy=O,Xh.Memo=T,Xh.Portal=D,Xh.Profiler=I,Xh.StrictMode=E,Xh.Suspense=_,Xh.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||x(e)===l},Xh.isConcurrentMode=R,Xh.isContextConsumer=function(e){return x(e)===s},Xh.isContextProvider=function(e){return x(e)===o},Xh.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Xh.isForwardRef=function(e){return x(e)===d},Xh.isFragment=function(e){return x(e)===r},Xh.isLazy=function(e){return x(e)===h},Xh.isMemo=function(e){return x(e)===f},Xh.isPortal=function(e){return x(e)===n},Xh.isProfiler=function(e){return x(e)===a},Xh.isStrictMode=function(e){return x(e)===i},Xh.isSuspense=function(e){return x(e)===u},Xh.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},Xh.typeOf=x}()),Xh)),Mh.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Zh(){if(Fh)return Bh;Fh=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return Bh=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(e){o=e(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s},Bh}function Qh(){if(Ph)return Lh;Ph=1;return Lh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Jh(){return Hh?zh:(Hh=1,zh=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var em=Gh();_h.exports=function(){if(Uh)return Yh;Uh=1;var e=Gh(),t=Zh(),n=Qh(),r=Jh(),i=function(){if(Vh)return Wh;Vh=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Qh(),n={},r=Jh();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,a,o,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](a,c,s,o,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+o+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var p=l?l():"";e("Failed "+o+" type: "+d.message+(null!=p?p:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},Wh=i}(),a=function(){};function o(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Yh=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:h(o),arrayOf:function(e){return h((function(t,r,i,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+a+" `"+o+"` of type `"+b(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,a,o+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:h((function(e,t,n,r,i){var a=e[t];return s(a)?null:new f("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:h((function(t,n,r,i,a){var o=t[n];return e.isValidElementType(o)?null:new f("Invalid "+i+" `"+a+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||d;return new f("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:h((function(e,t,n,r,i){return v(e[t])?null:new f("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(t,i,a,o,s){if("function"!=typeof e)return new f("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var l=t[i],c=b(l);if("object"!==c)return new f("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,a,o,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new f("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),o)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+y(i)+" at index "+t+"."),o}return h((function(t,i,a,o,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,a,o,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+o+" `"+s+"` supplied to `"+a+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(t,r,i,a,o){var s=t[r],l=b(s);if("object"!==l)return new f("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return g(i,a,o,c,x(d));var u=d(s,c,i,a,o+"."+c,n);if(u)return u}return null}))},exact:function(e){return h((function(i,a,o,s,l){var c=i[a],d=b(c);if("object"!==d)return new f("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+o+"`, expected `object`.");var u=t({},i[a],e);for(var p in u){var h=e[p];if(r(e,p)&&"function"!=typeof h)return g(o,s,l,p,x(h));if(!h)return new f("Invalid "+s+" `"+l+"` key `"+p+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(i[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,p,o,s,l+"."+p,n);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function h(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,o,s,c,u,p,h){if(c=c||d,p=p||s,h!==n){if(l){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var g=c+":"+s;!t[g]&&r<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[g]=!0,r++)}}return null==o[s]?i?null===o[s]?new f("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,s,c,u,p)}var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function m(e){return h((function(t,n,r,i,a,o){var s=t[n];return b(s)!==e?new f("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,i){return new f((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},Yh}()(em.isElement,!0)}else _h.exports=function(){if(Kh)return qh;Kh=1;var e=Qh();function t(){}function n(){}return n.resetWarningCache=t,qh=function(){function r(t,n,r,i,a,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a}}()();var tm=Ci(_h.exports);const nm=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function rm(e,t,n){const r=function(e){const{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){const n=t.split(".").pop().toLowerCase(),r=nm.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e),{webkitRelativePath:i}=e,a="string"==typeof t?t:"string"==typeof i&&i.length>0?i:`./${e.name}`;return"string"!=typeof r.path&&im(r,"path",a),void 0!==n&&Object.defineProperty(r,"handle",{value:n,writable:!1,configurable:!1,enumerable:!0}),im(r,"relativePath",a),r}function im(e,t,n){Object.defineProperty(e,t,{value:n,writable:!1,configurable:!1,enumerable:!0})}const am=[".DS_Store","Thumbs.db"];function om(e){return"object"==typeof e&&null!==e}function sm(e){return e.filter((e=>-1===am.indexOf(e.name)))}function lm(e){if(null===e)return[];const t=[];for(let n=0;n<e.length;n++){const r=e[n];t.push(r)}return t}function cm(e){if("function"!=typeof e.webkitGetAsEntry)return um(e);const t=e.webkitGetAsEntry();return t&&t.isDirectory?fm(t):um(e,t)}function dm(e){return e.reduce(((e,t)=>[...e,...Array.isArray(t)?dm(t):[t]]),[])}function um(e,t){return G(this,void 0,void 0,(function*(){var n;if(globalThis.isSecureContext&&"function"==typeof e.getAsFileSystemHandle){const t=yield e.getAsFileSystemHandle();if(null===t)throw new Error(`${e} is not a File`);if(void 0!==t){const e=yield t.getFile();return e.handle=t,rm(e)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return rm(r,null!==(n=null==t?void 0:t.fullPath)&&void 0!==n?n:void 0)}))}function pm(e){return G(this,void 0,void 0,(function*(){return e.isDirectory?fm(e):function(e){return G(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{e.file((n=>{const r=rm(n,e.fullPath);t(r)}),(e=>{n(e)}))}))}))}(e)}))}function fm(e){const t=e.createReader();return new Promise(((e,n)=>{const r=[];!function i(){t.readEntries((t=>G(this,void 0,void 0,(function*(){if(t.length){const e=Promise.all(t.map(pm));r.push(e),i()}else try{const t=yield Promise.all(r);e(t)}catch(e){n(e)}}))),(e=>{n(e)}))}()}))}var hm=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(",");if(0===n.length)return!0;var r=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):i===t}))}return!0};function mm(e){return function(e){if(Array.isArray(e))return wm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ym(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function vm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gm(Object(n),!0).forEach((function(t){bm(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gm(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function bm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||ym(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ym(e,t){if(e){if("string"==typeof e)return wm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wm(e,t):void 0}}function wm(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $m=hm,jm=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(","),t=e.length>1?"one of ".concat(e.join(", ")):e[0];return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Sm=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},km=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Cm={code:"too-many-files",message:"Too many files"};function Om(e,t){var n="application/x-moz-file"===e.type||$m(e,t);return[n,n?null:jm(t)]}function Tm(e,t,n){if(Dm(e.size))if(Dm(t)&&Dm(n)){if(e.size>n)return[!1,Sm(n)];if(e.size<t)return[!1,km(t)]}else{if(Dm(t)&&e.size<t)return[!1,km(t)];if(Dm(n)&&e.size>n)return[!1,Sm(n)]}return[!0,null]}function Dm(e){return null!=e}function Im(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Em(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function _m(e){e.preventDefault()}function Mm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!Im(e)&&t&&t.apply(void 0,[e].concat(r)),Im(e)}))}}function Rm(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||"application/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Am(e){return/^.*\.[\w]+$/.test(e)}var Nm=["children"],Bm=["open"],Fm=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Lm=["refKey","onChange","onClick"];function Pm(e){return function(e){if(Array.isArray(e))return Wm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Hm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||Hm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Hm(e,t){if(e){if("string"==typeof e)return Wm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wm(e,t):void 0}}function Wm(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ym(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Vm(Object(n),!0).forEach((function(t){Um(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vm(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Um(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qm(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Km=t.forwardRef((function(e,n){var r=e.children,i=Zm(qm(e,Nm)),a=i.open,o=qm(i,Bm);return t.useImperativeHandle(n,(function(){return{open:a}}),[a]),Y.default.createElement(t.Fragment,null,r(Ym(Ym({},o),{},{open:a})))}));Km.displayName="Dropzone";var Xm={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function*(){return om(e)&&om(e.dataTransfer)?function(e,t){return G(this,void 0,void 0,(function*(){if(e.items){const n=lm(e.items).filter((e=>"file"===e.kind));if("drop"!==t)return n;return sm(dm(yield Promise.all(n.map(cm))))}return sm(lm(e.files).map((e=>rm(e))))}))}(e.dataTransfer,e.type):function(e){return om(e)&&om(e.target)}(e)?function(e){return lm(e.target.files).map((e=>rm(e)))}(e):Array.isArray(e)&&e.every((e=>"getFile"in e&&"function"==typeof e.getFile))?function(e){return G(this,void 0,void 0,(function*(){return(yield Promise.all(e.map((e=>e.getFile())))).map((e=>rm(e)))}))}(e):[]}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Km.defaultProps=Xm,Km.propTypes={children:tm.func,accept:tm.objectOf(tm.arrayOf(tm.string)),multiple:tm.bool,preventDropOnDocument:tm.bool,noClick:tm.bool,noKeyboard:tm.bool,noDrag:tm.bool,noDragEventsBubbling:tm.bool,minSize:tm.number,maxSize:tm.number,maxFiles:tm.number,disabled:tm.bool,getFilesFromEvent:tm.func,onFileDialogCancel:tm.func,onFileDialogOpen:tm.func,useFsAccessApi:tm.bool,autoFocus:tm.bool,onDragEnter:tm.func,onDragLeave:tm.func,onDragOver:tm.func,onDrop:tm.func,onDropAccepted:tm.func,onDropRejected:tm.func,onError:tm.func,validator:tm.func};var Gm={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Zm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Ym(Ym({},Xm),e),r=n.accept,i=n.disabled,a=n.getFilesFromEvent,o=n.maxSize,s=n.minSize,l=n.multiple,c=n.maxFiles,d=n.onDragEnter,u=n.onDragLeave,p=n.onDragOver,f=n.onDrop,h=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,v=n.onFileDialogOpen,b=n.useFsAccessApi,x=n.autoFocus,y=n.preventDropOnDocument,w=n.noClick,$=n.noKeyboard,j=n.noDrag,S=n.noDragEventsBubbling,k=n.onError,C=n.validator,O=t.useMemo((function(){return function(e){if(Dm(e))return Object.entries(e).reduce((function(e,t){var n=xm(t,2),r=n[0],i=n[1];return[].concat(mm(e),[r],mm(i))}),[]).filter((function(e){return Rm(e)||Am(e)})).join(",")}(r)}),[r]),T=t.useMemo((function(){return function(e){return Dm(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=xm(e,2),n=t[0],r=t[1],i=!0;return Rm(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(Am)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=xm(t,2),r=n[0],i=n[1];return vm(vm({},e),{},bm({},r,i))}),{})}]:e}(r)}),[r]),D=t.useMemo((function(){return"function"==typeof v?v:Jm}),[v]),I=t.useMemo((function(){return"function"==typeof g?g:Jm}),[g]),E=t.useRef(null),_=t.useRef(null),M=zm(t.useReducer(Qm,Gm),2),R=M[0],A=M[1],N=R.isFocused,B=R.isFileDialogActive,F=t.useRef("undefined"!=typeof window&&window.isSecureContext&&b&&"showOpenFilePicker"in window),L=function(){!F.current&&B&&setTimeout((function(){_.current&&(_.current.files.length||(A({type:"closeDialog"}),I()))}),300)};t.useEffect((function(){return window.addEventListener("focus",L,!1),function(){window.removeEventListener("focus",L,!1)}}),[_,B,I,F]);var P=t.useRef([]),z=function(e){E.current&&E.current.contains(e.target)||(e.preventDefault(),P.current=[])};t.useEffect((function(){return y&&(document.addEventListener("dragover",_m,!1),document.addEventListener("drop",z,!1)),function(){y&&(document.removeEventListener("dragover",_m),document.removeEventListener("drop",z))}}),[E,y]),t.useEffect((function(){return!i&&x&&E.current&&E.current.focus(),function(){}}),[E,x,i]);var H=t.useCallback((function(e){k?k(e):console.error(e)}),[k]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),P.current=[].concat(Pm(P.current),[e.target]),Em(e)&&Promise.resolve(a(e)).then((function(t){if(!Im(e)||S){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,a=e.multiple,o=e.maxFiles,s=e.validator;return!(!a&&t.length>1||a&&o>=1&&t.length>o)&&t.every((function(e){var t=xm(Om(e,n),1)[0],a=xm(Tm(e,r,i),1)[0],o=s?s(e):null;return t&&a&&!o}))}({files:t,accept:O,minSize:s,maxSize:o,multiple:l,maxFiles:c,validator:C});A({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[a,d,H,S,O,s,o,l,c,C]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=Em(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1}),[p,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=P.current.filter((function(e){return E.current&&E.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),P.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Em(e)&&u&&u(e))}),[E,u,S]),U=t.useCallback((function(e,t){var n=[],r=[];e.forEach((function(e){var t=zm(Om(e,O),2),i=t[0],a=t[1],l=zm(Tm(e,s,o),2),c=l[0],d=l[1],u=C?C(e):null;if(i&&c&&!u)n.push(e);else{var p=[a,d];u&&(p=p.concat(u)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[Cm]})})),n.splice(0)),A({acceptedFiles:n,fileRejections:r,isDragReject:r.length>0,type:"setFiles"}),f&&f(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&h&&h(n,t)}),[A,l,O,s,o,c,f,h,m,C]),q=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),P.current=[],Em(e)&&Promise.resolve(a(e)).then((function(t){Im(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[a,U,H,S]),K=t.useCallback((function(){if(F.current){A({type:"openDialog"}),D();var e={multiple:l,types:T};window.showOpenFilePicker(e).then((function(e){return a(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){!function(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}(e)?!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(F.current=!1,_.current?(_.current.value=null,_.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):(I(e),A({type:"closeDialog"}))}))}else _.current&&(A({type:"openDialog"}),D(),_.current.value=null,_.current.click())}),[A,D,I,b,U,H,T,l]),X=t.useCallback((function(e){E.current&&E.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),K()))}),[E,K]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?K():setTimeout(K,0))}),[w,K]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return j?null:J(e)},ne=function(e){S&&e.stopPropagation()},re=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,a=e.onKeyDown,o=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,p=e.onDrop,f=qm(e,Fm);return Ym(Ym(Um({onKeyDown:ee(Mm(a,X)),onFocus:ee(Mm(o,G)),onBlur:ee(Mm(s,Z)),onClick:J(Mm(l,Q)),onDragEnter:te(Mm(c,W)),onDragOver:te(Mm(d,V)),onDragLeave:te(Mm(u,Y)),onDrop:te(Mm(p,q)),role:"string"==typeof r&&""!==r?r:"presentation"},n,E),i||$?{}:{tabIndex:0}),f)}}),[E,X,G,Z,Q,W,V,Y,q,$,j,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),ae=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,a=qm(e,Lm);return Ym(Ym({},Um({accept:O,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:J(Mm(r,q)),onClick:J(Mm(i,ie)),tabIndex:-1},n,_)),a)}}),[_,r,l,q,i]);return Ym(Ym({},R),{},{isFocused:N&&!i,getRootProps:re,getInputProps:ae,rootRef:E,inputRef:_,open:J(K)})}function Qm(e,t){switch(t.type){case"focus":return Ym(Ym({},e),{},{isFocused:!0});case"blur":return Ym(Ym({},e),{},{isFocused:!1});case"openDialog":return Ym(Ym({},Gm),{},{isFileDialogActive:!0});case"closeDialog":return Ym(Ym({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Ym(Ym({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Ym(Ym({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections,isDragReject:t.isDragReject});case"reset":return Ym({},Gm);default:return e}}function Jm(){}const eg=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(Qo.Neutral[5](e));return i.css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${ts.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,tg=q.default.input`
    display: none;
`,ng=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Qo.Accent.Light[5]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${e=>{const t=encodeURIComponent(Qo.Primary(e));return i.css`
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 4px;
        `}}
`,rg=q.default(exports.Text.BodySmall)`
    color: ${Qo.Primary};
    text-align: center;
`,ig=q.default(x.CloudArrowUpFillIcon)`
    color: ${Qo.Primary};
    height: 4rem;
    width: 4rem;
`,ag=t.forwardRef((({children:n,accept:r,capture:i,multiple:a,id:o,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":p},f)=>{const h=t.useRef(),{getRootProps:m,isDragActive:g}=Zm({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(f,(()=>Object.assign(Object.assign({},h.current),{openFileDialog:()=>{h.current&&(h.current.value=null,h.current.click())}})));return e.jsxs(eg,Object.assign({id:o,"data-testid":p||"dropzone",$border:c,className:s},m(),{children:[e.jsx(tg,{type:"file",name:l,ref:h,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:a,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),n,g&&e.jsxs(ng,{children:[e.jsx(ig,{}),e.jsx(rg,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const og="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function sg(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function lg(e){return"nodeType"in e}function cg(e){var t,n;return e?sg(e)?e:lg(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function dg(e){const{Document:t}=cg(e);return e instanceof t}function ug(e){return!sg(e)&&e instanceof cg(e).HTMLElement}function pg(e){return e instanceof cg(e).SVGElement}function fg(e){return e?sg(e)?e.document:lg(e)?dg(e)?e:ug(e)||pg(e)?e.ownerDocument:document:document:document}const hg=og?t.useLayoutEffect:t.useEffect;function mg(e){const n=t.useRef(e);return hg((()=>{n.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)}),[])}function gg(e,n){void 0===n&&(n=[e]);const r=t.useRef(e);return hg((()=>{r.current!==e&&(r.current=e)}),n),r}function vg(e,n){const r=t.useRef();return t.useMemo((()=>{const t=e(r.current);return r.current=t,t}),[...n])}function bg(e){const n=mg(e),r=t.useRef(null),i=t.useCallback((e=>{e!==r.current&&(null==n||n(e,r.current)),r.current=e}),[]);return[r,i]}function xg(e){const n=t.useRef();return t.useEffect((()=>{n.current=e}),[e]),n.current}let yg={};function wg(e,n){return t.useMemo((()=>{if(n)return n;const t=null==yg[e]?0:yg[e]+1;return yg[e]=t,e+"-"+t}),[e,n])}function $g(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const jg=$g(1),Sg=$g(-1);function kg(e){if(!e)return!1;const{KeyboardEvent:t}=cg(e.target);return t&&e instanceof t}function Cg(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=cg(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Og=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Og.Translate.toString(e),Og.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Tg="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Dg(e){return e.matches(Tg)?e:e.querySelector(Tg)}const Ig={display:"none"};function Eg(e){let{id:t,value:n}=e;return Y.default.createElement("div",{id:t,style:Ig},n)}function _g(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const Mg=t.createContext(null);const Rg={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Ag={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Ng(e){let{announcements:r=Ag,container:i,hiddenTextDescribedById:a,screenReaderInstructions:o=Rg}=e;const{announce:s,announcement:l}=function(){const[e,n]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&n(e)}),[]),announcement:e}}(),c=wg("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const n=t.useContext(Mg);t.useEffect((()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)}),[e,n])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(r.onDragStart({active:t}))},onDragMove(e){let{active:t,over:n}=e;r.onDragMove&&s(r.onDragMove({active:t,over:n}))},onDragOver(e){let{active:t,over:n}=e;s(r.onDragOver({active:t,over:n}))},onDragEnd(e){let{active:t,over:n}=e;s(r.onDragEnd({active:t,over:n}))},onDragCancel(e){let{active:t,over:n}=e;s(r.onDragCancel({active:t,over:n}))}})),[s,r])),!d)return null;const p=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(Eg,{id:a,value:o.draggable}),Y.default.createElement(_g,{id:c,announcement:l}));return i?n.createPortal(p,i):p}var Bg;function Fg(){}function Lg(e,n){return t.useMemo((()=>({sensor:e,options:null!=n?n:{}})),[e,n])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Bg||(Bg={}));const Pg=Object.freeze({x:0,y:0});function zg(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Hg(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Wg(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function Vg(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function Yg(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){const n=t.width*t.height,r=e.width*e.height,i=o*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const Ug=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,a=n.get(r);if(a){const n=Yg(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Hg)};function qg(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Pg}function Kg(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const Xg=Kg(1);const Gg={ignoreTransform:!1};function Zg(e,t){void 0===t&&(t=Gg);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=cg(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:a,x:o,y:s}=r,l=e.left-o-(1-i)*parseFloat(n),c=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:a,height:o,bottom:s,right:l}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:l}}function Qg(e){return Zg(e,{ignoreTransform:!0})}function Jg(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(dg(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!ug(i)||pg(i))return n;if(n.includes(i))return n;const a=cg(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=cg(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,a)&&n.push(i),function(e,t){return void 0===t&&(t=cg(e).getComputedStyle(e)),"fixed"===t.position}(i,a)?n:r(i.parentNode)}(e):n}function ev(e){const[t]=Jg(e,1);return null!=t?t:null}function tv(e){return og&&e?sg(e)?e:lg(e)?dg(e)||e===fg(e).scrollingElement?window:ug(e)?e:null:null:null}function nv(e){return sg(e)?e.scrollX:e.scrollLeft}function rv(e){return sg(e)?e.scrollY:e.scrollTop}function iv(e){return{x:nv(e),y:rv(e)}}var av;function ov(e){return!(!og||!e)&&e===document.scrollingElement}function sv(e){const t={x:0,y:0},n=ov(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(av||(av={}));const lv={x:.2,y:.2};function cv(e,t,n,r,i){let{top:a,left:o,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=lv);const{isTop:c,isBottom:d,isLeft:u,isRight:p}=sv(e),f={x:0,y:0},h={x:0,y:0},m=t.height*i.y,g=t.width*i.x;return!c&&a<=t.top+m?(f.y=av.Backward,h.y=r*Math.abs((t.top+m-a)/m)):!d&&l>=t.bottom-m&&(f.y=av.Forward,h.y=r*Math.abs((t.bottom-m-l)/m)),!p&&s>=t.right-g?(f.x=av.Forward,h.x=r*Math.abs((t.right-g-s)/g)):!u&&o<=t.left+g&&(f.x=av.Backward,h.x=r*Math.abs((t.left+g-o)/g)),{direction:f,speed:h}}function dv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function uv(e){return e.reduce(((e,t)=>jg(e,iv(t))),Pg)}const pv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+nv(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+rv(t)),0)}]];class fv{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=Jg(t),r=uv(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of pv)for(const a of t)Object.defineProperty(this,a,{get:()=>{const t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class hv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function mv(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var gv,vv;function bv(e){e.preventDefault()}function xv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(gv||(gv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"}(vv||(vv={}));const yv={start:[vv.Space,vv.Enter],cancel:[vv.Esc],end:[vv.Space,vv.Enter,vv.Tab]},wv=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case vv.Right:return{...n,x:n.x+25};case vv.Left:return{...n,x:n.x-25};case vv.Down:return{...n,y:n.y+25};case vv.Up:return{...n,y:n.y-25}}};let $v=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new hv(fg(t)),this.windowListeners=new hv(cg(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(gv.Resize,this.handleCancel),this.windowListeners.add(gv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(gv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=Zg),!e)return;const{top:n,left:r,bottom:i,right:a}=t(e);ev(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(Pg)}handleKeyDown(e){if(kg(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=yv,coordinateGetter:a=wv,scrollBehavior:o="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Pg;this.referenceCoordinates||(this.referenceCoordinates=c);const d=a(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=Sg(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:p}=sv(n),f=dv(n),h={x:Math.min(i===vv.Right?f.right-f.width/2:f.right,Math.max(i===vv.Right?f.left:f.left+f.width/2,d.x)),y:Math.min(i===vv.Down?f.bottom-f.height/2:f.bottom,Math.max(i===vv.Down?f.top:f.top+f.height/2,d.y))},m=i===vv.Right&&!s||i===vv.Left&&!l,g=i===vv.Down&&!c||i===vv.Up&&!a;if(m&&h.x!==d.x){const e=n.scrollLeft+t.x,a=i===vv.Right&&e<=u.x||i===vv.Left&&e>=p.x;if(a&&!t.y)return void n.scrollTo({left:e,behavior:o});r.x=a?n.scrollLeft-e:i===vv.Right?n.scrollLeft-u.x:n.scrollLeft-p.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(g&&h.y!==d.y){const e=n.scrollTop+t.y,a=i===vv.Down&&e<=u.y||i===vv.Up&&e>=p.y;if(a&&!t.x)return void n.scrollTo({top:e,behavior:o});r.y=a?n.scrollTop-e:i===vv.Down?n.scrollTop-u.y:n.scrollTop-p.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,jg(Sg(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function jv(e){return Boolean(e&&"distance"in e)}function Sv(e){return Boolean(e&&"delay"in e)}$v.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=yv,onActivation:i}=t,{active:a}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const t=a.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class kv{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=cg(e);return e instanceof t?e:fg(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:a}=i;this.props=e,this.events=t,this.document=fg(a),this.documentListeners=new hv(this.document),this.listeners=new hv(n),this.windowListeners=new hv(cg(a)),this.initialCoordinates=null!=(r=Cg(i))?r:Pg,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(gv.Resize,this.handleCancel),this.windowListeners.add(gv.DragStart,bv),this.windowListeners.add(gv.VisibilityChange,this.handleCancel),this.windowListeners.add(gv.ContextMenu,bv),this.documentListeners.add(gv.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Sv(t))return this.timeoutId=setTimeout(this.handleStart,t.delay),void this.handlePending(t);if(jv(t))return void this.handlePending(t)}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){const{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(gv.Click,xv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(gv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:a,options:{activationConstraint:o}}=i;if(!r)return;const s=null!=(t=Cg(e))?t:Pg,l=Sg(r,s);if(!n&&o){if(jv(o)){if(null!=o.tolerance&&mv(l,o.tolerance))return this.handleCancel();if(mv(l,o.distance))return this.handleStart()}return Sv(o)&&mv(l,o.tolerance)?this.handleCancel():void this.handlePending(o,l)}e.cancelable&&e.preventDefault(),a(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===vv.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Cv={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Ov extends kv{constructor(e){const{event:t}=e,n=fg(t.target);super(e,Cv,n)}}Ov.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const Tv={move:{name:"mousemove"},end:{name:"mouseup"}};var Dv;!function(e){e[e.RightClick=2]="RightClick"}(Dv||(Dv={}));let Iv=class extends kv{constructor(e){super(e,Tv,fg(e.event.target))}};Iv.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==Dv.RightClick&&(null==r||r({event:n}),!0)}}];const Ev={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class _v extends kv{constructor(e){super(e,Ev)}static setup(){return window.addEventListener(Ev.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Ev.move.name,e)};function e(){}}}var Mv,Rv;function Av(e){let{acceleration:n,activator:r=Mv.Pointer,canScroll:i,draggingRect:a,enabled:o,interval:s=5,order:l=Rv.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const h=function(e){let{delta:t,disabled:n}=e;const r=xg(t);return vg((e=>{if(n||!r||!e)return Nv;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[av.Backward]:e.x[av.Backward]||-1===i.x,[av.Forward]:e.x[av.Forward]||1===i.x},y:{[av.Backward]:e.y[av.Backward]||-1===i.y,[av.Forward]:e.y[av.Forward]||1===i.y}}}),[n,t,r])}({delta:p,disabled:!o}),[m,g]=function(){const e=t.useRef(null);return[t.useCallback(((t,n)=>{e.current=setInterval(t,n)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),v=t.useRef({x:0,y:0}),b=t.useRef({x:0,y:0}),x=t.useMemo((()=>{switch(r){case Mv.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Mv.DraggableRect:return a}}),[r,a,c]),y=t.useRef(null),w=t.useCallback((()=>{const e=y.current;if(!e)return;const t=v.current.x*b.current.x,n=v.current.y*b.current.y;e.scrollBy(t,n)}),[]),$=t.useMemo((()=>l===Rv.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(o&&d.length&&x){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),r=u[t];if(!r)continue;const{direction:a,speed:o}=cv(e,r,x,n,f);for(const e of["x","y"])h[e][a[e]]||(o[e]=0,a[e]=0);if(o.x>0||o.y>0)return g(),y.current=e,m(w,s),v.current=o,void(b.current=a)}v.current={x:0,y:0},b.current={x:0,y:0},g()}else g()}),[n,w,i,g,o,s,JSON.stringify(x),JSON.stringify(h),m,d,$,u,JSON.stringify(f)])}_v.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Mv||(Mv={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Rv||(Rv={}));const Nv={x:{[av.Backward]:!1,[av.Forward]:!1},y:{[av.Backward]:!1,[av.Forward]:!1}};var Bv,Fv;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Bv||(Bv={})),function(e){e.Optimized="optimized"}(Fv||(Fv={}));const Lv=new Map;function Pv(e,t){return vg((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function zv(e){let{callback:n,disabled:r}=e;const i=mg(n),a=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[r]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}function Hv(e){return new fv(Zg(e),e)}function Wv(e,n,r){void 0===n&&(n=Hv);const[i,a]=t.useState(null);function o(){a((t=>{if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:r)?i:null;const a=n(e);return JSON.stringify(t)===JSON.stringify(a)?t:a}))}const s=function(e){let{callback:n,disabled:r}=e;const i=mg(n),a=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,r]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){o();break}}}}),l=zv({callback:o});return hg((()=>{o(),e?(null==l||l.observe(e),null==s||s.observe(document.body,{childList:!0,subtree:!0})):(null==l||l.disconnect(),null==s||s.disconnect())}),[e]),i}const Vv=[];function Yv(e,n){void 0===n&&(n=[]);const r=t.useRef(null);return t.useEffect((()=>{r.current=null}),n),t.useEffect((()=>{const t=e!==Pg;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Sg(e,r.current):Pg}function Uv(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const qv=[];function Kv(e){let{measure:n}=e;const[r,i]=t.useState(null),a=t.useCallback((e=>{for(const{target:t}of e)if(ug(t)){i((e=>{const r=n(t);return e?{...e,width:r.width,height:r.height}:r}));break}}),[n]),o=zv({callback:a}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ug(t)?t:e}(e);null==o||o.disconnect(),t&&(null==o||o.observe(t)),i(t?n(t):null)}),[n,o]),[l,c]=bg(s);return t.useMemo((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const Xv=[{sensor:Ov,options:{}},{sensor:$v,options:{}}],Gv={current:{}},Zv={draggable:{measure:Qg},droppable:{measure:Qg,strategy:Bv.WhileDragging,frequency:Fv.Optimized},dragOverlay:{measure:Zg}};class Qv extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const Jv={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Qv,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Fg},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Zv,measureDroppableContainers:Fg,windowRect:null,measuringScheduled:!1},eb={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Fg,draggableNodes:new Map,over:null,measureDroppableContainers:Fg},tb=t.createContext(eb),nb=t.createContext(Jv);function rb(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Qv}}}function ib(e,t){switch(t.type){case Bg.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Bg.DragMove:return null==e.draggable.active?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Bg.DragEnd:case Bg.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Bg.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new Qv(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Bg.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const o=new Qv(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Bg.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const a=new Qv(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function ab(e){let{disabled:n}=e;const{active:r,activatorEvent:i,draggableNodes:a}=t.useContext(tb),o=xg(i),s=xg(null==r?void 0:r.id);return t.useEffect((()=>{if(!n&&!i&&o&&null!=s){if(!kg(o))return;if(document.activeElement===o.target)return;const e=a.get(s);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Dg(e);if(t){t.focus();break}}}))}}),[i,n,a,s,o]),null}const ob=t.createContext({...Pg,scaleX:1,scaleY:1});var sb;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(sb||(sb={}));const lb=t.memo((function(e){var r,i,a,o;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=Xv,collisionDetection:p=Ug,measuring:f,modifiers:h,...m}=e;const g=t.useReducer(ib,void 0,rb),[v,b]=g,[x,y]=function(){const[e]=t.useState((()=>new Set)),n=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),n]}(),[w,$]=t.useState(sb.Uninitialized),j=w===sb.Initialized,{draggable:{active:S,nodes:k,translate:C},droppable:{containers:O}}=v,T=null!=S?k.get(S):null,D=t.useRef({initial:null,translated:null}),I=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==T?void 0:T.data)?e:Gv,rect:D}:null}),[S,T]),E=t.useRef(null),[_,M]=t.useState(null),[R,A]=t.useState(null),N=gg(m,Object.values(m)),B=wg("DndDescribedBy",s),F=t.useMemo((()=>O.getEnabled()),[O]),L=function(e){return t.useMemo((()=>({draggable:{...Zv.draggable,...null==e?void 0:e.draggable},droppable:{...Zv.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Zv.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(f),{droppableRects:P,measureDroppableContainers:z,measuringScheduled:H}=function(e,n){let{dragging:r,dependencies:i,config:a}=n;const[o,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=a,u=t.useRef(e),p=function(){switch(d){case Bv.Always:return!1;case Bv.BeforeDragging:return r;default:return!r}}(),f=gg(p),h=t.useCallback((function(e){void 0===e&&(e=[]),f.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[f]),m=t.useRef(null),g=vg((t=>{if(p&&!r)return Lv;if(!t||t===Lv||u.current!==e||null!=o){const t=new Map;for(let n of e){if(!n)continue;if(o&&o.length>0&&!o.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new fv(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,o,r,p,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{p||h()}),[r,p]),t.useEffect((()=>{o&&o.length>0&&s(null)}),[JSON.stringify(o)]),t.useEffect((()=>{p||"number"!=typeof l||null!==m.current||(m.current=setTimeout((()=>{h(),m.current=null}),l))}),[l,p,h,...i]),{droppableRects:g,measureDroppableContainers:h,measuringScheduled:null!=o}}(F,{dragging:j,dependencies:[C.x,C.y],config:L.droppable}),W=function(e,t){const n=null!=t?e.get(t):void 0,r=n?n.node.current:null;return vg((e=>{var n;return null==t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(k,S),V=t.useMemo((()=>R?Cg(R):null),[R]),U=function(){const e=!1===(null==_?void 0:_.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,n=j&&!e&&!t;if("object"==typeof c)return{...c,enabled:n};return{enabled:n}}(),q=function(e,t){return Pv(e,t)}(W,L.draggable.measure);!function(e){let{activeNode:n,measure:r,initialRect:i,config:a=!0}=e;const o=t.useRef(!1),{x:s,y:l}="boolean"==typeof a?{x:a,y:a}:a;hg((()=>{if(!s&&!l||!n)return void(o.current=!1);if(o.current||!i)return;const e=null==n?void 0:n.node.current;if(!e||!1===e.isConnected)return;const t=qg(r(e),i);if(s||(t.x=0),l||(t.y=0),o.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const n=ev(e);n&&n.scrollBy({top:t.y,left:t.x})}}),[n,s,l,i,r])}({activeNode:null!=S?k.get(S):null,config:U.layoutShiftCompensation,initialRect:q,measure:L.draggable.measure});const K=Wv(W,L.draggable.measure,q),X=Wv(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:P,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=O.getNodeFor(null==(r=G.current.over)?void 0:r.id),Q=Kv({measure:L.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=j?null!=(a=Q.rect)?a:K:null,te=Boolean(Q.nodeRef.current&&Q.rect),ne=qg(re=te?null:K,Pv(re));var re;const ie=Uv(J?cg(J):null),ae=function(e){const n=t.useRef(e),r=vg((t=>e?t&&t!==Vv&&e&&n.current&&e.parentNode===n.current.parentNode?t:Jg(e):Vv),[e]);return t.useEffect((()=>{n.current=e}),[e]),r}(j?null!=Z?Z:W:null),oe=function(e,n){void 0===n&&(n=Zg);const[r]=e,i=Uv(r?cg(r):null),[a,o]=t.useState(qv);function s(){o((()=>e.length?e.map((e=>ov(e)?i:new fv(n(e),e))):qv))}const l=zv({callback:s});return hg((()=>{null==l||l.disconnect(),s(),e.forEach((e=>null==l?void 0:l.observe(e)))}),[e]),a}(ae),se=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(h,{transform:{x:C.x-ne.x,y:C.y-ne.y,scaleX:1,scaleY:1},activatorEvent:R,active:I,activeNodeRect:K,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:ae,scrollableAncestorRects:oe,windowRect:ie}),le=V?jg(V,C):null,ce=function(e){const[n,r]=t.useState(null),i=t.useRef(e),a=t.useCallback((e=>{const t=tv(e.target);t&&r((e=>e?(e.set(t,iv(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){n(t);const o=e.map((e=>{const t=tv(e);return t?(t.addEventListener("scroll",a,{passive:!0}),[t,iv(t)]):null})).filter((e=>null!=e));r(o.length?new Map(o):null),i.current=e}return()=>{n(e),n(t)};function n(e){e.forEach((e=>{const t=tv(e);null==t||t.removeEventListener("scroll",a)}))}}),[a,e]),t.useMemo((()=>e.length?n?Array.from(n.values()).reduce(((e,t)=>jg(e,t)),Pg):uv(e):Pg),[e,n])}(ae),de=Yv(ce),ue=Yv(ce,[K]),pe=jg(se,de),fe=ee?Xg(ee,se):null,he=I&&fe?p({active:I,collisionRect:fe,droppableRects:P,droppableContainers:F,pointerCoordinates:le}):null,me=Vg(he,"id"),[ge,ve]=t.useState(null),be=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(te?se:jg(se,ue),null!=(o=null==ge?void 0:ge.rect)?o:null,K),xe=t.useRef(null),ye=t.useCallback(((e,t)=>{let{sensor:r,options:i}=t;if(null==E.current)return;const a=k.get(E.current);if(!a)return;const o=e.nativeEvent,s=new r({active:E.current,activeNode:a,event:o,options:i,context:G,onAbort(e){if(!k.get(e))return;const{onDragAbort:t}=N.current,n={id:e};null==t||t(n),x({type:"onDragAbort",event:n})},onPending(e,t,n,r){if(!k.get(e))return;const{onDragPending:i}=N.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};null==i||i(a),x({type:"onDragPending",event:a})},onStart(e){const t=E.current;if(null==t)return;const r=k.get(t);if(!r)return;const{onDragStart:i}=N.current,a={activatorEvent:o,active:{id:t,data:r.data,rect:D}};n.unstable_batchedUpdates((()=>{null==i||i(a),$(sb.Initializing),b({type:Bg.DragStart,initialCoordinates:e,active:t}),x({type:"onDragStart",event:a}),M(xe.current),A(o)}))},onMove(e){b({type:Bg.DragMove,coordinates:e})},onEnd:l(Bg.DragEnd),onCancel:l(Bg.DragCancel)});function l(e){return async function(){const{active:t,collisions:r,over:i,scrollAdjustedTranslate:a}=G.current;let s=null;if(t&&a){const{cancelDrop:n}=N.current;if(s={activatorEvent:o,active:t,collisions:r,delta:a,over:i},e===Bg.DragEnd&&"function"==typeof n){await Promise.resolve(n(s))&&(e=Bg.DragCancel)}}E.current=null,n.unstable_batchedUpdates((()=>{b({type:e}),$(sb.Uninitialized),ve(null),M(null),A(null),xe.current=null;const t=e===Bg.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=N.current[t];null==e||e(s),x({type:t,event:s})}}))}}xe.current=s}),[k]),we=t.useCallback(((e,t)=>(n,r)=>{const i=n.nativeEvent,a=k.get(r);if(null!==E.current||!a||i.dndKit||i.defaultPrevented)return;const o={active:a};!0===e(n,t.options,o)&&(i.dndKit={capturedBy:t.sensor},E.current=r,ye(n,t))}),[k,ye]),$e=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:r}=t;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:n(e.handler,t)})))]}),[])),[e,n])}(u,we);!function(e){t.useEffect((()=>{if(!og)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),hg((()=>{K&&w===sb.Initializing&&$(sb.Initialized)}),[K,w]),t.useEffect((()=>{const{onDragMove:e}=N.current,{active:t,activatorEvent:r,collisions:i,over:a}=G.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:i,delta:{x:pe.x,y:pe.y},over:a};n.unstable_batchedUpdates((()=>{null==e||e(o),x({type:"onDragMove",event:o})}))}),[pe.x,pe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:i,scrollAdjustedTranslate:a}=G.current;if(!e||null==E.current||!t||!a)return;const{onDragOver:o}=N.current,s=i.get(me),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:r,delta:{x:a.x,y:a.y},over:l};n.unstable_batchedUpdates((()=>{ve(l),null==o||o(c),x({type:"onDragOver",event:c})}))}),[me]),hg((()=>{G.current={activatorEvent:R,active:I,activeNode:W,collisionRect:fe,collisions:he,droppableRects:P,draggableNodes:k,draggingNode:J,draggingNodeRect:ee,droppableContainers:O,over:ge,scrollableAncestors:ae,scrollAdjustedTranslate:pe},D.current={initial:ee,translated:fe}}),[I,W,he,fe,k,J,ee,P,O,ge,ae,pe]),Av({...U,delta:C,draggingRect:fe,pointerCoordinates:le,scrollableAncestors:ae,scrollableAncestorRects:oe});const je=t.useMemo((()=>({active:I,activeNode:W,activeNodeRect:K,activatorEvent:R,collisions:he,containerNodeRect:X,dragOverlay:Q,draggableNodes:k,droppableContainers:O,droppableRects:P,over:ge,measureDroppableContainers:z,scrollableAncestors:ae,scrollableAncestorRects:oe,measuringConfiguration:L,measuringScheduled:H,windowRect:ie})),[I,W,K,R,he,X,Q,k,O,P,ge,z,ae,oe,L,H,ie]),Se=t.useMemo((()=>({activatorEvent:R,activators:$e,active:I,activeNodeRect:K,ariaDescribedById:{draggable:B},dispatch:b,draggableNodes:k,over:ge,measureDroppableContainers:z})),[R,$e,I,K,b,B,k,ge,z]);return Y.default.createElement(Mg.Provider,{value:y},Y.default.createElement(tb.Provider,{value:Se},Y.default.createElement(nb.Provider,{value:je},Y.default.createElement(ob.Provider,{value:be},d)),Y.default.createElement(ab,{disabled:!1===(null==l?void 0:l.restoreFocus)})),Y.default.createElement(Ng,{...l,hiddenTextDescribedById:B}))})),cb=t.createContext(null),db="button";function ub(e){let{id:n,data:r,disabled:i=!1,attributes:a}=e;const o=wg("Draggable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=t.useContext(tb),{role:h=db,roleDescription:m="draggable",tabIndex:g=0}=null!=a?a:{},v=(null==c?void 0:c.id)===n,b=t.useContext(v?ob:cb),[x,y]=bg(),[w,$]=bg(),j=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:r,handler:i}=t;return e[r]=e=>{i(e,n)},e}),{})),[e,n])}(s,n),S=gg(r);hg((()=>(p.set(n,{id:n,key:o,node:x,activatorNode:w,data:S}),()=>{const e=p.get(n);e&&e.key===o&&p.delete(n)})),[p,n]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:h,tabIndex:g,"aria-disabled":i,"aria-pressed":!(!v||h!==db)||void 0,"aria-roledescription":m,"aria-describedby":u.draggable})),[i,h,g,v,m,u.draggable]),isDragging:v,listeners:i?void 0:j,node:x,over:f,setNodeRef:y,setActivatorNodeRef:$,transform:b}}const pb={timeout:25};function fb(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function hb(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function mb(e){return null!==e&&e>=0}const gb=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const a=fb(t,r,n),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},vb={scaleX:1,scaleY:1},bb=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[n])?t:r;if(!s)return null;if(i===n){const e=a[o];return e?{x:0,y:n<o?e.top+e.height-(s.top+s.height):e.top-s.top,...vb}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],a=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0;return a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(a,i,n);return i>n&&i<=o?{x:0,y:-s.height-l,...vb}:i<n&&i>=o?{x:0,y:s.height+l,...vb}:{x:0,y:0,...vb}};const xb="Sortable",yb=Y.default.createContext({activeIndex:-1,containerId:xb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:gb,disabled:{draggable:!1,droppable:!1}});function wb(e){let{children:n,id:r,items:i,strategy:a=gb,disabled:o=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(nb),p=wg(xb,r),f=Boolean(null!==l.rect),h=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),m=null!=s,g=s?h.indexOf(s.id):-1,v=d?h.indexOf(d.id):-1,b=t.useRef(h),x=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(h,b.current),y=-1!==v&&-1===g||x,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(o);hg((()=>{x&&m&&u(h)}),[x,h,m,u]),t.useEffect((()=>{b.current=h}),[h]);const $=t.useMemo((()=>({activeIndex:g,containerId:p,disabled:w,disableTransforms:y,items:h,overIndex:v,useDragOverlay:f,sortedRects:hb(h,c),strategy:a})),[g,p,w.draggable,w.droppable,y,h,v,c,f,a]);return Y.default.createElement(yb.Provider,{value:$},n)}const $b=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return fb(n,r,i).indexOf(t)},jb=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===a||i!==o)&&(!!n||o!==i&&t===l))},Sb={duration:200,easing:"ease"},kb="transform",Cb=Og.Transition.toString({property:kb,duration:0,easing:"linear"}),Ob={roleDescription:"sortable"};function Tb(e){let{animateLayoutChanges:n=jb,attributes:r,disabled:i,data:a,getNewIndex:o=$b,id:s,strategy:l,resizeObserverConfig:c,transition:d=Sb}=e;const{items:u,containerId:p,activeIndex:f,disabled:h,disableTransforms:m,sortedRects:g,overIndex:v,useDragOverlay:b,strategy:x}=t.useContext(yb),y=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(i,h),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:p,index:w,items:u},...a})),[p,a,w,u]),j=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:k,isOver:C,setNodeRef:O}=function(e){let{data:n,disabled:r=!1,id:i,resizeObserverConfig:a}=e;const o=wg("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(tb),u=t.useRef({disabled:r}),p=t.useRef(!1),f=t.useRef(null),h=t.useRef(null),{disabled:m,updateMeasurementsFor:g,timeout:v}={...pb,...a},b=gg(null!=g?g:i),x=zv({callback:t.useCallback((()=>{p.current?(null!=h.current&&clearTimeout(h.current),h.current=setTimeout((()=>{d(Array.isArray(b.current)?b.current:[b.current]),h.current=null}),v)):p.current=!0}),[v]),disabled:m||!s}),y=t.useCallback(((e,t)=>{x&&(t&&(x.unobserve(t),p.current=!1),e&&x.observe(e))}),[x]),[w,$]=bg(y),j=gg(n);return t.useEffect((()=>{x&&w.current&&(x.disconnect(),p.current=!1,x.observe(w.current))}),[w,x]),t.useEffect((()=>(l({type:Bg.RegisterDroppable,element:{id:i,key:o,disabled:r,node:w,rect:f,data:j}}),()=>l({type:Bg.UnregisterDroppable,key:o,id:i}))),[i]),t.useEffect((()=>{r!==u.current.disabled&&(l({type:Bg.SetDroppableDisabled,id:i,key:o,disabled:r}),u.current.disabled=r)}),[i,o,r,l]),{active:s,rect:f,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...c}}),{active:T,activatorEvent:D,activeNodeRect:I,attributes:E,setNodeRef:_,listeners:M,isDragging:R,over:A,setActivatorNodeRef:N,transform:B}=ub({id:s,data:$,attributes:{...Ob,...r},disabled:y.draggable}),F=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>e=>{n.forEach((t=>t(e)))}),n)}(O,_),L=Boolean(T),P=L&&!m&&mb(f)&&mb(v),z=!b&&R,H=z&&P?B:null,W=P?null!=H?H:(null!=l?l:x)({rects:g,activeNodeRect:I,activeIndex:f,overIndex:v,index:w}):null,V=mb(f)&&mb(v)?o({id:s,items:u,activeIndex:f,overIndex:v}):w,Y=null==T?void 0:T.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:p}),q=u!==U.current.items,K=n({active:T,containerId:p,isDragging:R,isSorting:L,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:n,index:r,node:i,rect:a}=e;const[o,s]=t.useState(null),l=t.useRef(r);return hg((()=>{if(!n&&r!==l.current&&i.current){const e=a.current;if(e){const t=Zg(i.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&s(n)}}r!==l.current&&(l.current=r)}),[n,r,i,a]),t.useEffect((()=>{o&&s(null)}),[o]),o}({disabled:!K,index:w,node:k,rect:S});return t.useEffect((()=>{L&&U.current.newIndex!==V&&(U.current.newIndex=V),p!==U.current.containerId&&(U.current.containerId=p),u!==U.current.items&&(U.current.items=u)}),[L,V,p,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:T,activeIndex:f,attributes:E,data:$,rect:S,index:w,newIndex:V,items:u,isOver:C,isSorting:L,isDragging:R,listeners:M,node:k,overIndex:v,over:A,setNodeRef:F,setActivatorNodeRef:N,setDroppableNodeRef:O,setDraggableNodeRef:_,transform:null!=X?X:W,transition:function(){if(X||q&&U.current.newIndex===w)return Cb;if(z&&!kg(D)||!d)return;if(L||K)return Og.Transition.toString({...d,property:kb});return}()}}function Db(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Ib=[vv.Down,vv.Right,vv.Up,vv.Left],Eb=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:a,over:o,scrollableAncestors:s}}=t;if(Ib.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];a.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const a=i.get(n.id);if(a)switch(e.code){case vv.Down:r.top<a.top&&t.push(n);break;case vv.Up:r.top>a.top&&t.push(n);break;case vv.Left:r.left>a.left&&t.push(n);break;case vv.Right:r.left<a.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Wg(t),a=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=Wg(r),o=i.reduce(((e,t,r)=>{return e+(i=n[r],a=t,Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)));var i,a}),0),s=Number((o/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(zg)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Vg(l,"id");if(c===(null==o?void 0:o.id)&&l.length>1&&(c=l[1].id),null!=c){const e=a.get(n.id),t=a.get(c),o=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&o&&e&&t){const n=Jg(l).some(((e,t)=>s[t]!==e)),i=_b(e,t),a=function(e,t){if(!Db(e)||!Db(t))return!1;if(!_b(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:a?r.width-o.width:0,y:a?r.height-o.height:0},d={x:o.left,y:o.top};return c.x&&c.y?d:Sg(d,c)}}}};function _b(e,t){return!(!Db(e)||!Db(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Mb extends Iv{}Mb.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Rb(e.target)}];function Rb(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends $v{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Rb(e.target)}];const Ab=q.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Nb=q.default(Td)`
    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"BodySmall"})}

    ${ts.MaxWidth.mobileL} {
        display: none;
    }
`,Bb=q.default(yf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Fb=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"BodySmall"})}
`,Lb=t=>{var{children:n,visible:r,onMobileClose:i}=t,a=X(t,["children","visible","onMobileClose"]);const o=a["data-testid"]||"popover",s=kl.useMediaQuery({maxWidth:Jo.mobileL}),l=()=>{i&&i()},c=()=>"string"==typeof n?e.jsx(exports.Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[r&&e.jsx(Ab,Object.assign({"data-testid":o},a,{children:e.jsx(Nb,{children:c()})})),s&&e.jsx(vf,Object.assign({show:r,onOverlayClick:l},{children:e.jsx(Bb,Object.assign({onClose:l},{children:e.jsx(Fb,{children:c()})}))}))]})},Pb=q.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,zb=n=>{var r,i,{children:a,popoverContent:o,trigger:s="click",position:l="top",zIndex:c,rootNode:d,customOffset:u,delay:p,onPopoverAppear:f,onPopoverDismiss:h}=n,g=X(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,b]=t.useState(!1),x=t.useRef(),y=t.useRef(),w=kl.useMediaQuery({maxWidth:ns.mobileL}),{refs:$,floatingStyles:j,context:S}=m.useFloating({open:v,placement:l,whileElementsMounted:m.autoUpdate,middleware:[m.offset(null!=u?u:16),m.flip(),m.shift({limiter:m.limitShift()})],onOpenChange:e=>{b(e),v!==e&&M(e)}}),k=up(),C=w?"click":s,O=m.useClick(S,{ignoreMouse:"hover"===C}),T=m.useDismiss(S),D=m.useHover(S,{enabled:"hover"===C,delay:{open:null!==(r=null==p?void 0:p.open)&&void 0!==r?r:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:I,getFloatingProps:E}=m.useInteractions([O,T,D]),_=()=>{b(!1),M(!1)},M=e=>{e&&f&&f(),!e&&h&&h()};return e.jsxs(e.Fragment,{children:[e.jsx(Pb,Object.assign({ref:e=>{x.current=e,$.setReference(e)}},I({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),g,{children:a})),v&&e.jsx(m.FloatingPortal,Object.assign({root:d},{children:e.jsx(m.FloatingFocusManager,Object.assign({context:S},{children:e.jsx("div",Object.assign({ref:e=>{y.current=e,$.setFloating(e)},style:Object.assign(Object.assign({},j),{outline:"none",zIndex:null!=c?c:k})},E(),{children:"function"==typeof o?o():e.jsx(Lb,Object.assign({visible:!0,onMobileClose:_},{children:o}))}))}))}))]})},Hb=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Wb=q.default.span`
    color: ${Qo.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Hb(e)}

    &:hover,
    &:focus-visible {
        color: ${Qo.Secondary};
        ${({$hoverStyle:e})=>Hb(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Vb=q.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Yb=t=>{var{ariaLabel:n,content:r,icon:i,underlineStyle:a="default",underlineHoverStyle:o="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!r;return e.jsx(zb,Object.assign({},s,{children:e.jsxs(Wb,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:o,"aria-label":null!=n?n:l?void 0:"More info"},{children:[r,i&&e.jsx(Vb,Object.assign({$standalone:!l},{children:i}))]}))}))};q.default.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Qo.Primary};
    }
`;const Ub=q.default.div`
    padding-left: 0.25rem;
    display: inline;
`,qb=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=t;return e.jsx(Ub,{children:e.jsx(Yb,{trigger:"click",id:o,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=a?a:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Kb=q.default.label`
    ${gs.getTextStyle("H5","semibold")}
    color: ${Qo.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${gs.getTextStyle("H5","semibold")}
    }

    a {
        color: ${Qo.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Qo.Secondary};

            svg {
                color: ${Qo.Secondary};
            }
        }
    }
`,Xb=q.default(exports.Text.H6)`
    color: ${Qo.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,Gb=q.default(exports.Text.BodySmall)`
    && {
        color: ${Qo.Neutral[3]};
        ${gs.getFontFamily("BodySmall","regular")}
    }
`,Zb=t=>{var{children:n,addon:r,subtitle:i,"data-testid":a}=t,o=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Kb,Object.assign({},o,{children:[n,r&&r.type&&("popover"===r.type?e.jsx(qb,{addon:r}):null),"string"==typeof i?e.jsx(Gb,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},o,{children:i})):i]}))},Qb=t=>e.jsx(Xb,Object.assign({weight:"semibold"},t)),Jb=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(ex,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),ex=q.default.div`
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

                ${ts.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${ts.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${ts.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${ts.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${ts.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,tx=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=X(t,["children","data-testid","stretch"]);return e.jsx(nx,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),nx=q.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${ts.MaxWidth.tablet} {
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
`,rx=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(tx,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},l,{children:e.jsx(Jb,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),ix={Section:tx,Container:Jb,Content:rx,ColDiv:Gp},ax=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,ox=q.default.div`
    ${ax}
`,sx=q.default(ix.ColDiv)`
    ${ax}
`,lx=({label:n,errorMessage:r,id:i,disabled:a,children:o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,"data-error-testid":u})=>{const p=!s&&(l||c||d)?"grid":s||"flex",f=()=>u||(i?`${i}-error-message`:"error-message"),h=()=>!!r;const m="grid"===p?sx:ox;return e.jsxs(m,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"flex":return}})(p),{children:[n&&("string"==typeof n?e.jsx(Zb,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},{children:n})):e.jsx(Zb,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},n))),(()=>{const e={"aria-invalid":h(),"aria-describedby":h()&&f()};return t.Children.map(o,(n=>t.cloneElement(n,e)))})(),r&&e.jsx(Xb,Object.assign({id:f(),weight:"semibold",tabIndex:0,"data-testid":f()},{children:r}))]}))};function cx(e,t){return cx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},cx(e,t)}function dx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function ux(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function px(e){return null!==e&&1===e.length?e[0]:e.slice()}function fx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function hx(e,t){return mx(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function mx(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let gx=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),fx(n.getMouseEventMap())}))}dx(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=hx(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),fx(n.getKeyDownEventMap()),dx(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),fx(n.getMouseEventMap()),dx(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),fx(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},a={index:t,value:px(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(a)),n.props.renderThumb(i,a)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},a={index:e,value:px(n.state.value)};return n.props.renderTrack(i,a)};let r=ux(t.value);r.length||(r=ux(t.defaultValue)),n.pendingResizeTimeouts=[];const i=[];for(let e=0;e<r.length;e+=1)r[e]=hx(r[e],t),i.push(e);return n.resizeObserver=null,n.resizeElementRef=Y.default.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:i},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,cx(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=ux(e.value);return n.length?t.pending?null:{value:n.map((t=>hx(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return px(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let a=0;a<i;a+=1){const i=this.calcOffset(r[a]),o=Math.abs(e-i);o<t&&(t=o,n=a)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return hx(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],a=r[this.posMaxKey()],o=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(a-o);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=hx(this.calcValue(n),this.props),a=this.state.value.slice();a[r]=i;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=hx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=hx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:s,minDistance:l}=this.props;if(!a){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,a&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const a=r-i*n;t[e-1-i]>a&&(t[e-1-i]=a)}}(r,t,l,o)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=mx(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=mx(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](px(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return Y.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,i,a)},t}(Y.default.Component);gx.displayName="ReactSlider",gx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>Y.default.createElement("div",e),renderTrack:e=>Y.default.createElement("div",e),renderMark:e=>Y.default.createElement("span",e)};var vx=gx;const bx=q.default.div`
    isolation: isolate;
`,xx=q.default.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,yx=q.default.div`
    margin-bottom: 1rem;
`,wx=q.default(exports.Text.Body)`
    overflow-wrap: anywhere;
`,$x=q.default(vx)`
    height: 0.875rem;
`,jx=q.default.div`
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

        background-color: ${Qo.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Qo.Neutral[4]};
        border-radius: 50%;
    }
`,Sx=q.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${jx}:after {
        border: 1px solid ${Qo.Primary};
    }
`,kx=q.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Qo.Neutral[4](e)};
`,Cx=n=>{var{value:r,min:i=0,max:a=100,step:o=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:h,sliderLabelSuffix:m,showIndicatorLabel:g,indicatorLabelPrefix:v,indicatorLabelSuffix:b,renderSliderLabel:x,onChange:y,onChangeEnd:w}=n,$=X(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[j,S]=t.useState(C()),k=function(){const e=function(){const e=d||u?Qo.Neutral[5]:Qo.Neutral[4],t=d||u?Qo.Neutral[4]:Qo.Primary;if(1===l)return[t,e];const n=[];n.push(e);for(let e=0;e<l-1;e++)n.push(t);return n.push(e),n}();return new Array(l+1).fill(0).map(((t,n)=>(null==c?void 0:c[n])||e[n]))}();t.useEffect((()=>{r!==j&&S(C())}),[r]);function C(){if(r&&r.length===l)return r;const e=[];for(let t=0;t<l;t++)e.push(i+o*t);return e}const O=t=>x?x(t):e.jsxs(wx,{children:[h,t,m]});return e.jsxs(bx,Object.assign({},$,{children:[g&&e.jsx(yx,{children:(()=>{let t="";if(1===j.length)t=`${j[0]}`;else if(2===j.length)t=`${j[0]} - ${j[1]}`;else if(j.length>2){t=`${Math.min(...j)} - ${Math.max(...j)}`}return e.jsxs(wx,{children:[v,t,b]})})()}),e.jsx($x,{step:o,min:i,max:a,value:j,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==y||y(t)}else{if(t>-1&&j[t]===e[t])return;S(e),null==y||y(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else S(e),null==w||w(e)},minDistance:s,ariaLabel:p,renderThumb:(t,n)=>e.jsx(Sx,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:d?void 0:t.tabIndex},{children:e.jsx(jx,{$disabled:d,$readOnly:u})})),renderTrack:(t,n)=>e.jsx(kx,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:k[n.index]}))}),f&&e.jsxs(xx,{children:[e.jsx("div",{children:O(i)}),e.jsx("div",{children:O(a)})]})]}))},Ox=q.default.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Tx=q.default.div`
    margin: 0 0.5rem;
`,Dx=q.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Ix=q.default.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${Qo.Neutral[8]};

    ${e=>{let t=Qo.Neutral[6];return e.$disabled&&e.$selected?t=Qo.Neutral[4]:e.$disabled?t=Qo.Neutral[5]:e.$selected&&(t=Qo.Accent.Light[1]),i.css`
            background-color: ${t};
        `}}
`,Ex=q.default(Cx)`
    margin-top: -0.3125rem;
`,_x=n=>{var{bins:r=[],interval:i,disabled:a,readOnly:o,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:p,onChangeEnd:f,renderEmptyView:h,renderRangeLabel:m}=n,g=X(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const v=r.map((e=>e.count)),b=Math.max(...v),x=r.map((e=>e.minValue)),y=Math.max(...x),w=Math.min(...x),[$,j]=t.useState(O()),S=t.useMemo((()=>{const e=[...r].sort(((e,t)=>e.minValue-t.minValue)),t=(y-w)/i+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===w+i*r));t?n.push(t):n.push({count:0,minValue:w+i*r})}return n}),[r,i]);t.useEffect((()=>{s!==$&&j(O())}),[s]);const k=e=>{j(e),null==p||p(e)},C=e=>{j(e),null==f||f(e)};function O(){return null!=s?s:[w,w+i]}const T=t=>m?m(t):e.jsxs(exports.Text.Body,{children:[c,t,d]});return e.jsxs("div",Object.assign({},g,{children:[l&&e.jsxs(Ox,{children:[T($[0]),e.jsx(Tx,{children:"-"}),T($[1])]}),S.every((e=>0===e.count))&&h?h():e.jsxs(e.Fragment,{children:[e.jsx(Dx,{children:S.map(((t,n)=>{const r=t.count/b;return e.jsx(Ix,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:a||o},n)}))}),e.jsx(Ex,{min:w,max:y+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:a,readOnly:o,ariaLabels:u,onChange:k,onChangeEnd:C})]})]}))},Mx=q.default.input`
    ${gs.getTextStyle("Body","regular")}
    color: ${Qo.Neutral[1]};

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
        color: ${Qo.Neutral[3]};
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
`,Rx=q.default.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Qo.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ax=q.default(g.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Nx=q.default.div`
    display: flex;
    width: 100%;
`,Bx=Y.default.forwardRef(((n,r)=>{var{value:i,spacing:a,type:o,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:p=!1,className:f,styleType:h="bordered"}=n,m=X(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const g=t.useRef();t.useImperativeHandle(r,(()=>g.current),[]);const v=pc({ref:g,formatter:e=>sc.transformWithSpaces(e,a)}),b=e=>{d&&(y()?w(e):d(e))},x=()=>{u&&u(),g&&g.current&&g.current.focus()},y=()=>"tel"===o&&a,w=e=>{const{nextValue:t,updateCaretPosition:n}=v(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},$=i?(e=>e?y()?sc.transformWithSpaces(e,a):e:"")(i):i,j=()=>e.jsxs(e.Fragment,{children:[e.jsx(Mx,Object.assign({"data-testid":"input",ref:g,disabled:l,value:$,onChange:b,type:o,readOnly:c},m)),p&&!l&&!c&&!!i&&e.jsx(Rx,Object.assign({onClick:x,type:"button"},{children:e.jsx(Ax,{"aria-hidden":!0})}))]});return e.jsx(e.Fragment,{children:"no-border"===h?e.jsx(Nx,Object.assign({className:f},{children:j()})):e.jsx(yp,Object.assign({$disabled:l,$error:s,$readOnly:c,className:f},{children:j()}))})})),Fx=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Bx,Object.assign({id:`${a}-base`,"data-testid":s||a,ref:n,error:!!i},p))}))})),Lx=q.default.div`
    display: flex;
    position: relative;
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    background: ${Qo.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Qo.Accent.Light[1]};
        box-shadow: ${Rs.InputBoxShadow};
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
                background: ${Qo.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Qo.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?i.css`
                border: 1px solid ${Qo.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Qo.Validation.Red.Border(e)};
                    box-shadow: ${Rs.InputErrorBoxShadow};
                }
            `:void 0}
`,Px=q.default(Bx)`
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
`,zx=q.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${gs.getTextStyle("Body","regular")}
    color: ${Qo.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Qo.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return i.css`
                color: ${Qo.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Qo.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:i.css`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Hx=eo;var Wx=eo,Vx=to,Yx=bo;var Ux=eo,qx=function(){this.__data__=new Hx,this.size=0},Kx=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Xx=function(e){return this.__data__.get(e)},Gx=function(e){return this.__data__.has(e)},Zx=function(e,t){var n=this.__data__;if(n instanceof Wx){var r=n.__data__;if(!Vx||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Yx(r)}return n.set(e,t),this.size=n.size,this};function Qx(e){var t=this.__data__=new Ux(e);this.size=t.size}Qx.prototype.clear=qx,Qx.prototype.delete=Kx,Qx.prototype.get=Xx,Qx.prototype.has=Gx,Qx.prototype.set=Zx;var Jx=Qx;var ey=bo,ty=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ny=function(e){return this.__data__.has(e)};function ry(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ey;++t<n;)this.add(e[t])}ry.prototype.add=ry.prototype.push=ty,ry.prototype.has=ny;var iy=ry,ay=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},oy=function(e,t){return e.has(t)};var sy=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,p=!0,f=2&n?new iy:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var h=e[u],m=t[u];if(r)var g=o?r(m,h,u,t,e,a):r(h,m,u,e,t,a);if(void 0!==g){if(g)continue;p=!1;break}if(f){if(!ay(t,(function(e,t){if(!oy(f,t)&&(h===e||i(h,e,n,r,a)))return f.push(t)}))){p=!1;break}}else if(h!==m&&!i(h,m,n,r,a)){p=!1;break}}return a.delete(e),a.delete(t),p};var ly=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},cy=Ei.Uint8Array,dy=Pa,uy=sy,py=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},fy=ly,hy=_i?_i.prototype:void 0,my=hy?hy.valueOf:void 0;var gy=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new cy(e),new cy(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return dy(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=py;case"[object Set]":var l=1&r;if(s||(s=fy),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=uy(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(my)return my.call(e)==my.call(t)}return!1};var vy=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},by=Oi;var xy=function(e,t,n){var r=t(e);return by(e)?r:vy(r,n(e))};var yy=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},wy=function(){return[]},$y=Object.prototype.propertyIsEnumerable,jy=Object.getOwnPropertySymbols,Sy=jy?function(e){return null==e?[]:(e=Object(e),yy(jy(e),(function(t){return $y.call(e,t)})))}:wy;var ky=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Cy=Wi,Oy=Vi;var Ty=function(e){return Oy(e)&&"[object Arguments]"==Cy(e)},Dy=Vi,Iy=Object.prototype,Ey=Iy.hasOwnProperty,_y=Iy.propertyIsEnumerable,My=Ty(function(){return arguments}())?Ty:function(e){return Dy(e)&&Ey.call(e,"callee")&&!_y.call(e,"callee")},Ry={exports:{}};var Ay=function(){return!1};!function(e,t){var n=Ei,r=Ay,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(Ry,Ry.exports);var Ny=Ry.exports,By=/^(?:0|[1-9]\d*)$/;var Fy=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&By.test(e))&&e>-1&&e%1==0&&e<t};var Ly=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Py=Wi,zy=Ly,Hy=Vi,Wy={};Wy["[object Float32Array]"]=Wy["[object Float64Array]"]=Wy["[object Int8Array]"]=Wy["[object Int16Array]"]=Wy["[object Int32Array]"]=Wy["[object Uint8Array]"]=Wy["[object Uint8ClampedArray]"]=Wy["[object Uint16Array]"]=Wy["[object Uint32Array]"]=!0,Wy["[object Arguments]"]=Wy["[object Array]"]=Wy["[object ArrayBuffer]"]=Wy["[object Boolean]"]=Wy["[object DataView]"]=Wy["[object Date]"]=Wy["[object Error]"]=Wy["[object Function]"]=Wy["[object Map]"]=Wy["[object Number]"]=Wy["[object Object]"]=Wy["[object RegExp]"]=Wy["[object Set]"]=Wy["[object String]"]=Wy["[object WeakMap]"]=!1;var Vy=function(e){return Hy(e)&&zy(e.length)&&!!Wy[Py(e)]};var Yy=function(e){return function(t){return e(t)}},Uy={exports:{}};!function(e,t){var n=Ti,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Uy,Uy.exports);var qy=Uy.exports,Ky=Vy,Xy=Yy,Gy=qy&&qy.isTypedArray,Zy=Gy?Xy(Gy):Ky,Qy=ky,Jy=My,ew=Oi,tw=Ny,nw=Fy,rw=Zy,iw=Object.prototype.hasOwnProperty;var aw=function(e,t){var n=ew(e),r=!n&&Jy(e),i=!n&&!r&&tw(e),a=!n&&!r&&!i&&rw(e),o=n||r||i||a,s=o?Qy(e.length,String):[],l=s.length;for(var c in e)!t&&!iw.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||nw(c,l))||s.push(c);return s},ow=Object.prototype;var sw=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ow)};var lw=function(e,t){return function(n){return e(t(n))}},cw=lw(Object.keys,Object),dw=sw,uw=cw,pw=Object.prototype.hasOwnProperty;var fw=function(e){if(!dw(e))return uw(e);var t=[];for(var n in Object(e))pw.call(e,n)&&"constructor"!=n&&t.push(n);return t},hw=ra,mw=Ly;var gw=function(e){return null!=e&&mw(e.length)&&!hw(e)},vw=aw,bw=fw,xw=gw;var yw=function(e){return xw(e)?vw(e):bw(e)},ww=xy,$w=Sy,jw=yw;var Sw=function(e){return ww(e,jw,$w)},kw=Object.prototype.hasOwnProperty;var Cw=function(e,t,n,r,i,a){var o=1&n,s=Sw(e),l=s.length;if(l!=Sw(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:kw.call(t,d)))return!1}var u=a.get(e),p=a.get(t);if(u&&p)return u==t&&p==e;var f=!0;a.set(e,t),a.set(t,e);for(var h=o;++c<l;){var m=e[d=s[c]],g=t[d];if(r)var v=o?r(g,m,d,t,e,a):r(m,g,d,e,t,a);if(!(void 0===v?m===g||i(m,g,n,r,a):v)){f=!1;break}h||(h="constructor"==d)}if(f&&!h){var b=e.constructor,x=t.constructor;b==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof x&&x instanceof x||(f=!1)}return a.delete(e),a.delete(t),f},Ow=wa(Ei,"DataView"),Tw=to,Dw=wa(Ei,"Promise"),Iw=wa(Ei,"Set"),Ew=wa(Ei,"WeakMap"),_w=Wi,Mw=la,Rw="[object Map]",Aw="[object Promise]",Nw="[object Set]",Bw="[object WeakMap]",Fw="[object DataView]",Lw=Mw(Ow),Pw=Mw(Tw),zw=Mw(Dw),Hw=Mw(Iw),Ww=Mw(Ew),Vw=_w;(Ow&&Vw(new Ow(new ArrayBuffer(1)))!=Fw||Tw&&Vw(new Tw)!=Rw||Dw&&Vw(Dw.resolve())!=Aw||Iw&&Vw(new Iw)!=Nw||Ew&&Vw(new Ew)!=Bw)&&(Vw=function(e){var t=_w(e),n="[object Object]"==t?e.constructor:void 0,r=n?Mw(n):"";if(r)switch(r){case Lw:return Fw;case Pw:return Rw;case zw:return Aw;case Hw:return Nw;case Ww:return Bw}return t});var Yw=Vw,Uw=Jx,qw=sy,Kw=gy,Xw=Cw,Gw=Yw,Zw=Oi,Qw=Ny,Jw=Zy,e$="[object Arguments]",t$="[object Array]",n$="[object Object]",r$=Object.prototype.hasOwnProperty;var i$=function(e,t,n,r,i,a){var o=Zw(e),s=Zw(t),l=o?t$:Gw(e),c=s?t$:Gw(t),d=(l=l==e$?n$:l)==n$,u=(c=c==e$?n$:c)==n$,p=l==c;if(p&&Qw(e)){if(!Qw(t))return!1;o=!0,d=!1}if(p&&!d)return a||(a=new Uw),o||Jw(e)?qw(e,t,n,r,i,a):Kw(e,t,l,n,r,i,a);if(!(1&n)){var f=d&&r$.call(e,"__wrapped__"),h=u&&r$.call(t,"__wrapped__");if(f||h){var m=f?e.value():e,g=h?t.value():t;return a||(a=new Uw),i(m,g,n,r,a)}}return!!p&&(a||(a=new Uw),Xw(e,t,n,r,i,a))},a$=Vi;var o$=function e(t,n,r,i,a){return t===n||(null==t||null==n||!a$(t)&&!a$(n)?t!=t&&n!=n:i$(t,n,r,i,e,a))},s$=Jx,l$=o$;var c$=Ji;var d$=function(e){return e==e&&!c$(e)},u$=d$,p$=yw;var f$=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},h$=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new s$;if(r)var p=r(c,d,l,e,t,u);if(!(void 0===p?l$(d,c,3,r,u):p))return!1}}return!0},m$=function(e){for(var t=p$(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,u$(i)]}return t},g$=f$;var v$=Fo,b$=My,x$=Oi,y$=Fy,w$=Ly,$$=Po;var j$=function(e,t){return null!=e&&t in Object(e)},S$=function(e,t,n){for(var r=-1,i=(t=v$(t,e)).length,a=!1;++r<i;){var o=$$(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&w$(i)&&y$(o,i)&&(x$(e)||b$(e))};var k$=o$,C$=Yo,O$=function(e,t){return null!=e&&S$(e,t,j$)},T$=Qi,D$=d$,I$=f$,E$=Po;var _$=Wo;var M$=function(e){return function(t){return null==t?void 0:t[e]}},R$=function(e){return function(t){return _$(t,e)}},A$=Qi,N$=Po;var B$=function(e){var t=m$(e);return 1==t.length&&t[0][2]?g$(t[0][0],t[0][1]):function(n){return n===e||h$(n,e,t)}},F$=function(e,t){return T$(e)&&D$(t)?I$(E$(e),t):function(n){var r=C$(n,e);return void 0===r&&r===t?O$(n,e):k$(t,r,3)}},L$=function(e){return e},P$=Oi,z$=function(e){return A$(e)?M$(N$(e)):R$(e)};var H$=function(e){return"function"==typeof e?e:null==e?L$:"object"==typeof e?P$(e)?F$(e[0],e[1]):B$(e):z$(e)},W$=H$,V$=gw,Y$=yw;var U$=function(e){return function(t,n,r){var i=Object(t);if(!V$(t)){var a=W$(n);t=Y$(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var q$=Vd,K$=1/0;var X$=function(e){return e?(e=q$(e))===K$||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var G$=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},Z$=H$,Q$=function(e){var t=X$(e),n=t%1;return t==t?n?t-n:t:0},J$=Math.max;var ej=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Q$(n);return i<0&&(i=J$(r+i,0)),G$(e,Z$(t),i)},tj=Ci(ej),nj=Ci(U$(ej)),rj=o$;var ij=Ci((function(e,t){return rj(e,t)}));const aj=q.default(Si.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,oj=q.default.ul`
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
        background: ${Qo.Neutral[4]};
        border-right: 5px solid ${Qo.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${ts.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`,sj=q.default.li`
    :hover,
    :focus,
    :active {
        background: ${Qo.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${Qo.Accent.Light[5]};
            `}}
`,lj=q.default.button`
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
        outline-color: ${Qo.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,cj=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,dj=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Qo.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&cj}
`,uj=q.default.div`
    color: ${Qo.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&cj}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${gs.getTextStyle("BodySmall","semibold")}
                `:i.css`
                    ${gs.getTextStyle("Body","regular")}
                `}
`,pj=q.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${dj} {
                        display: inline;
                    }

                    ${uj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,fj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,hj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,mj=q.default(_d)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,gj=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,vj=q.default.button`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Qo.Primary(e)};\n\t\t`}
`,bj=q.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,xj=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,yj=q.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.5;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Qo.Validation.Red.Icon};
`,wj=e=>"small"===e?1:1.375,$j=e=>i.css`
        height: ${wj(e)}rem;
        width: ${wj(e)}rem;
    `,jj=q.default.li`
    background: ${Qo.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Sj=q.default(wp)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,kj=q.default(y.MagnifierIcon)`
    ${e=>$j(e.$variant)}
    margin: 0 0.5rem;
    color: ${Qo.Neutral[3]};
`,Cj=q.default(is)`
    ${e=>$j(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${Qo.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${$j(e.$variant)}
                }
            `}}
`,Oj=t.forwardRef(((t,n)=>{const{onClear:r}=t,i=X(t,["onClear"]);return e.jsxs(jj,{children:[e.jsx(kj,{$variant:t.variant}),e.jsx(Sj,Object.assign({ref:n,$variant:t.variant},i)),i.value&&e.jsx(Cj,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:r,$variant:t.variant},{children:e.jsx(u.CrossIcon,{})}))]},"search")})),Tj=n=>{var{listItems:r,listExtractor:i,valueExtractor:a,onSelectItem:o,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:p,onDismiss:f,disableItemFocus:h,multiSelect:m,selectedItems:g,onSelectAll:v,onRetry:b,itemsLoadState:x="success",itemTruncationType:y="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:j,onBlur:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,variant:O="default"}=n,T=X(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[D,I]=t.useState(0),[E,_]=t.useState(""),[M,R]=t.useState(r),[A,N]=t.useState(0),B=oi({height:A}),F=t.useRef(),L=t.useRef(),P=t.useRef([]),z=t.useRef(),H=t.useRef(),W=t.useRef(D),V=t.useRef(M),Y=e=>{W.current=e,I(e)},U=e=>{V.current=e,R(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(E)}),[E]),t.useEffect((()=>{if(_(""),l){if(setTimeout((()=>{N(Q())})),h)return;z&&z.current?(z.current.focus(),Y(-1)):P.current[D]&&P.current[D].focus()}else N(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();N(e)}}),[M,x]),t.useEffect((()=>{U(r),_(""),Y(0)}),[r]);const q=e=>i?i(e):e.toString(),K=e=>{if("inline"!==$)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return sc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},G=e=>!!nj(g,(t=>ij(t,e))),Z=e=>{if(""===e)U(r);else if(p){const t=p(e);U(t)}else{const t=r.filter((t=>{var n;const r=q(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),a="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));U(t)}},Q=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{if(F&&F.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current&&V.current&&W.current<V.current.length-1){const e=W.current+1;P.current[e].focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;P.current[e].focus(),Y(W.current-1)}break;case"Escape":f&&f(!0)}},ee=(e,t)=>{e.preventDefault(),o&&o(t,(e=>a?a(e):e)(t))},te=e=>{const t=e.target.value;_(t),u&&u()},ne=()=>{var e;_(""),null===(e=z.current)||void 0===e||e.focus(),u&&u()},re=()=>{b&&b()},ie=()=>{S&&S()},ae=t=>e.jsxs(e.Fragment,{children:[e.jsx(fj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t})),e.jsx(hj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t}))]}),oe=t=>{const n=q(t),r="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,a=K(r),o=i&&K(i),s=a||o?"next-line":$;return e.jsxs(pj,Object.assign({$labelDisplayType:s},{children:[e.jsx(dj,Object.assign({$truncateType:y,$maxLines:w,$variant:O,"aria-label":r},{children:"middle"===y&&a?ae(r):r})),i&&e.jsx(uj,Object.assign({$truncateType:y,$maxLines:w,$labelDisplayType:$,"aria-label":i},{children:"middle"===y&&o?ae(i):i}))]}))},se=()=>{if(!b||b&&"success"===x)return M.map(((t,n)=>e.jsx(sj,Object.assign({$checked:G(t)&&!m},{children:e.jsxs(lj,Object.assign({$hasNextLineLabel:"next-line"===$&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{ee(e,t)},ref:e=>P.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:m,onBlur:ie,$variant:O},{children:[m&&e.jsx(mj,{checked:G(t),displaySize:"small"}),j?j(t,{selected:G(t)}):oe(t)]}))}),((e,t)=>`item_${t}__${a?a(e):e}`)(t,n))))},le=()=>{if(m&&M.length>0&&!E&&"success"===x)return e.jsx(gj,{children:e.jsx(vj,Object.assign({onClick:v,type:"button",$variant:O},{children:0===g.length?"Select all":"Clear all"}))},"selectAll")},ce=()=>{if(!k&&(E||!c)&&0===M.length&&"success"===x)return e.jsxs(bj,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(yj,{"data-testid":"no-result-icon",$variant:O}),e.jsx(xj,Object.assign({$variant:O},{children:"No results found."}))]}),"noResults")},de=()=>{if(b&&"loading"===x){const t="small"===O?16:24;return e.jsxs(bj,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Vs,{$buttonStyle:"secondary",size:t}),e.jsx(xj,Object.assign({$variant:O},{children:"Loading..."}))]}),"loading")}},ue=()=>{if(b&&"fail"===x)return e.jsxs(bj,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(yj,{"data-testid":"load-error-icon",$variant:O}),e.jsx(xj,Object.assign({$variant:O},{children:"Failed to load."}))," ",e.jsx(vj,Object.assign({onClick:re,type:"button",$variant:O},{children:"Try again."}))]}),"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(aj,Object.assign({style:B,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:F},{children:[(()=>{if(l)return e.jsxs(oj,Object.assign({ref:L,"data-testid":"dropdown-list",width:s,role:"list"},T,{children:[(c||p)&&"success"===x?e.jsx(Oj,{ref:z,onChange:te,value:E,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:ne,variant:O}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&C)return e.jsx("div",Object.assign({ref:H,"data-testid":"custom-cta"},{children:C(f,M)}))})()]}))})},Dj=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return i.css`
                border-bottom: 1px solid ${Qo.Neutral[5](e)};
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
`,Ij=q.default(tp)`
    padding: 0;
    width: auto;
`,Ej=q.default.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,_j=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ws.Base};
    margin: 0 0.75rem;
`,Mj=q.default(p.ChevronDownIcon)`
    color: ${Qo.Neutral[3]};
    height: ${ds.Body.fontSize}rem;
    width: ${ds.Body.fontSize}rem;
    vertical-align: bottom;
`,Rj=q.default.div`
    display: flex;
    flex: 1 1 auto;
`,Aj=q.default(exports.Text.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Nj=q.default(Aj)`
    color: ${Qo.Neutral[3]};
`,Bj=q.default.div`
    width: 1px;
    background: ${Qo.Neutral[5]};
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
`,Fj=Y.default.forwardRef(((n,r)=>{var{addon:i,error:a,onChange:o,readOnly:s,className:l,onBlur:c}=n,d=X(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:p,enableSearch:f,searchFunction:h,searchPlaceholder:m,valueExtractor:g,listExtractor:v,displayValueExtractor:b,selectedOption:x,onSelectOption:y,onHideOptions:w,onShowOptions:$,"data-selector-testid":j}=i.attributes,{position:S}=i,[k,C]=t.useState(x),[O,T]=t.useState(!1),D=t.useRef();t.useEffect((()=>{C(x)}),[x]);const I=()=>b?b(k):g?g(k):k.toString(),E=e=>{!e&&w&&w(),e&&$&&$()},_=e=>{e.preventDefault(),d.disabled||(T(!O),E(!O))},M=(e,t)=>{C(e),T(!1),E(!1),D&&D.current&&D.current.focus(),y&&y(e,t)},R=e=>{o&&o(e)},A=()=>{c&&c()},N=()=>{T(!1),E(!1),D&&D.current&&D.current.focus()};return e.jsxs(cp,Object.assign({className:l,show:O,error:a&&!O,disabled:d.disabled,readOnly:s,onBlur:()=>{T(!1),E(!1),A()}},{children:[e.jsxs(Dj,Object.assign({$expanded:O,$readOnly:s,$position:S},{children:[s?k?e.jsx(Ej,{children:e.jsx(Aj,Object.assign({"data-testid":"selector-label"},{children:I()}))}):null:e.jsx(Ij,Object.assign({ref:D,type:"button",disabled:d.disabled,"data-testid":j||"addon-selector",onClick:_},{children:e.jsxs(e.Fragment,{children:[e.jsxs(Rj,{children:[u&&!k&&e.jsx(Nj,{children:u}),k&&e.jsx(Aj,Object.assign({"data-testid":"selector-label"},{children:I()}))]}),e.jsx(_j,Object.assign({$expanded:O},{children:e.jsx(Mj,{})}))]})})),e.jsx(Bj,{$readOnly:s,$position:S}),e.jsx(Px,Object.assign({ref:r},d,{readOnly:s,error:a,onChange:R,"data-testid":d["data-testid"]||"input",onBlur:A}))]})),p&&p.length>0?e.jsx(Tj,{listItems:p,selectedItems:x?[x]:[],onSelectItem:M,valueExtractor:g,listExtractor:v,visible:O,enableSearch:f,searchFunction:h,searchPlaceholder:m,"data-testid":"dropdown-list",onBlur:A,onDismiss:N}):null]}))})),Lj=Y.default.forwardRef(((t,n)=>{var{addon:r,error:i,className:a}=t,o=X(t,["addon","error","className"]);const s=()=>e.jsx(Lx,Object.assign({disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:a},{children:e.jsx(Px,Object.assign({ref:n},o,{"data-testid":"input"}))}));if(!r)return s();{const{type:t="label",position:l="left"}=r,{allowClear:c}=o;switch(t){case"list":{const t=r.attributes;return t.options&&t.options.length>0?e.jsx(Fj,Object.assign({ref:n,addon:r,error:i,className:a},o)):s()}case"custom":{const t=r.attributes;return t.children?e.jsxs(yp,Object.assign({$error:i,$disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(zx,Object.assign({"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.children})),e.jsx(Px,Object.assign({ref:n},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}default:{const t=r.attributes;return t.value?e.jsxs(yp,Object.assign({$disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(zx,Object.assign({"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.value})),e.jsx(Px,Object.assign({ref:n},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}}}})),Pj=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-group","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Lj,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},p))}))})),zj=q.default(Lj)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":"1rem"};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Hj=q.default.div`
    display: flex;
    height: calc(3rem - 2px);
    width: 3.25rem;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Qo.Neutral[3],$activeColor:n=Qo.Primary})=>e?t:n};

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,Wj=q.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Vj=q.default(exports.Text.Body)`
    color: ${Qo.Neutral[3]};
`,Yj=q.default(zs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Qo.Neutral[3]} transparent transparent transparent;
    }
`,Uj=q.default(exports.Text.Body)`
    color: ${Qo.Primary};
    text-decoration: underline;
`,qj=q.default.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,Kj=q.default(j.ExclamationTriangleIcon)`
    color: ${Qo.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,Xj=q.default(exports.Text.Body)`
    color: ${Qo.Validation.Orange.Text};
`,Gj=q.default.button`
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
        ${Uj} {
            color: ${Qo.Secondary};
        }
    }
`;var Zj={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",a="__lodash_placeholder__",o=16,s=32,l=64,c=128,d=256,u=1/0,p=9007199254740991,f=NaN,h=4294967295,m=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",s],["partialRight",l],["rearg",d]],g="[object Arguments]",v="[object Array]",b="[object Boolean]",x="[object Date]",y="[object Error]",w="[object Function]",$="[object GeneratorFunction]",j="[object Map]",S="[object Number]",k="[object Object]",C="[object Promise]",O="[object RegExp]",T="[object Set]",D="[object String]",I="[object Symbol]",E="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",R="[object Float32Array]",A="[object Float64Array]",N="[object Int8Array]",B="[object Int16Array]",F="[object Int32Array]",L="[object Uint8Array]",P="[object Uint8ClampedArray]",z="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,q=/[&<>"']/g,K=RegExp(U.source),X=RegExp(q.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,re=RegExp(ne.source),ie=/^\s+/,ae=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,be=/^(?:0|[1-9]\d*)$/,xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ye=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="['’]",Ie="["+$e+"]",Ee="["+Te+"]",_e="["+je+"]",Me="\\d+",Re="["+Se+"]",Ae="["+ke+"]",Ne="[^"+$e+Te+Me+Se+ke+Ce+"]",Be="\\ud83c[\\udffb-\\udfff]",Fe="[^"+$e+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",ze="["+Ce+"]",He="\\u200d",We="(?:"+Ae+"|"+Ne+")",Ve="(?:"+ze+"|"+Ne+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",qe="(?:"+_e+"|"+Be+")"+"?",Ke="["+Oe+"]?",Xe=Ke+qe+("(?:"+He+"(?:"+[Fe,Le,Pe].join("|")+")"+Ke+qe+")*"),Ge="(?:"+[Re,Le,Pe].join("|")+")"+Xe,Ze="(?:"+[Fe+_e+"?",_e,Le,Pe,Ie].join("|")+")",Qe=RegExp(De,"g"),Je=RegExp(_e,"g"),et=RegExp(Be+"(?="+Be+")|"+Ze+Xe,"g"),tt=RegExp([ze+"?"+Ae+"+"+Ye+"(?="+[Ee,ze,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Ee,ze+We,"$"].join("|")+")",ze+"?"+We+"+"+Ye,ze+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),nt=RegExp("["+He+$e+je+Oe+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],at=-1,ot={};ot[R]=ot[A]=ot[N]=ot[B]=ot[F]=ot[L]=ot[P]=ot[z]=ot[H]=!0,ot[g]=ot[v]=ot[_]=ot[b]=ot[M]=ot[x]=ot[y]=ot[w]=ot[j]=ot[S]=ot[k]=ot[O]=ot[T]=ot[D]=ot[E]=!1;var st={};st[g]=st[v]=st[_]=st[M]=st[b]=st[x]=st[R]=st[A]=st[N]=st[B]=st[F]=st[j]=st[S]=st[k]=st[O]=st[T]=st[D]=st[I]=st[L]=st[P]=st[z]=st[H]=!0,st[y]=st[w]=st[E]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof ki&&ki&&ki.Object===Object&&ki,pt="object"==typeof self&&self&&self.Object===Object&&self,ft=ut||pt||Function("return this")(),ht=t&&!t.nodeType&&t,mt=ht&&e&&!e.nodeType&&e,gt=mt&&mt.exports===ht,vt=gt&&ut.process,bt=function(){try{var e=mt&&mt.require&&mt.require("util").types;return e||vt&&vt.binding&&vt.binding("util")}catch(e){}}(),xt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,wt=bt&&bt.isMap,$t=bt&&bt.isRegExp,jt=bt&&bt.isSet,St=bt&&bt.isTypedArray;function kt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ct(e,t,n,r){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function It(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function Et(e,t){return!!(null==e?0:e.length)&&zt(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Mt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Rt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function At(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function Nt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Bt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Ft=Yt("length");function Lt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Pt(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function zt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Pt(e,Wt,n)}function Ht(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var n=null==e?0:e.length;return n?Kt(e,t)/n:f}function Yt(e){return function(t){return null==t?n:t[e]}}function Ut(e){return function(t){return null==e?n:e[t]}}function qt(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n}function Kt(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function Xt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Gt(e){return e?e.slice(0,hn(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function en(e,t){for(var n=-1,r=e.length;++n<r&&zt(t,e[n],0)>-1;);return n}function tn(e,t){for(var n=e.length;n--&&zt(t,e[n],0)>-1;);return n}var nn=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rn=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function an(e){return"\\"+lt[e]}function on(e){return nt.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function ln(e,t){return function(n){return e(t(n))}}function cn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];s!==t&&s!==a||(e[n]=a,o[i++]=n)}return o}function dn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function pn(e){return on(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):Ft(e)}function fn(e){return on(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hn(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var mn=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gn=function e(t){var ae=(t=null==t?ft:gn.defaults(ft.Object(),t,gn.pick(ft,it))).Array,$e=t.Date,je=t.Error,Se=t.Function,ke=t.Math,Ce=t.Object,Oe=t.RegExp,Te=t.String,De=t.TypeError,Ie=ae.prototype,Ee=Se.prototype,_e=Ce.prototype,Me=t["__core-js_shared__"],Re=Ee.toString,Ae=_e.hasOwnProperty,Ne=0,Be=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fe=_e.toString,Le=Re.call(Ce),Pe=ft._,ze=Oe("^"+Re.call(Ae).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?t.Buffer:n,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:n,Ue=ln(Ce.getPrototypeOf,Ce),qe=Ce.create,Ke=_e.propertyIsEnumerable,Xe=Ie.splice,Ge=We?We.isConcatSpreadable:n,Ze=We?We.iterator:n,et=We?We.toStringTag:n,nt=function(){try{var e=ua(Ce,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ft.Date.now&&$e.now,pt=t.setTimeout!==ft.setTimeout&&t.setTimeout,ht=ke.ceil,mt=ke.floor,vt=Ce.getOwnPropertySymbols,bt=He?He.isBuffer:n,Ft=t.isFinite,Ut=Ie.join,vn=ln(Ce.keys,Ce),bn=ke.max,xn=ke.min,yn=$e.now,wn=t.parseInt,$n=ke.random,jn=Ie.reverse,Sn=ua(t,"DataView"),kn=ua(t,"Map"),Cn=ua(t,"Promise"),On=ua(t,"Set"),Tn=ua(t,"WeakMap"),Dn=ua(Ce,"create"),In=Tn&&new Tn,En={},_n=Ba(Sn),Mn=Ba(kn),Rn=Ba(Cn),An=Ba(On),Nn=Ba(Tn),Bn=We?We.prototype:n,Fn=Bn?Bn.valueOf:n,Ln=Bn?Bn.toString:n;function Pn(e){if(ts(e)&&!Vo(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ae.call(e,"__wrapped__"))return Fa(e)}return new Wn(e)}var zn=function(){function e(){}return function(t){if(!es(t))return{};if(qe)return qe(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function Hn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new qn;++t<n;)this.add(e[t])}function Xn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Vo(e),r=!n&&Wo(e),i=!n&&!r&&Ko(e),a=!n&&!r&&!i&&cs(e),o=n||r||i||a,s=o?Xt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ba(c,l))||s.push(c);return s}function Zn(e){var t=e.length;return t?e[Kr(0,t-1)]:n}function Qn(e,t){return Ra(Di(e),sr(t,0,e.length))}function Jn(e){return Ra(Di(e))}function er(e,t,r){(r!==n&&!Po(e[t],r)||r===n&&!(t in e))&&ar(e,t,r)}function tr(e,t,r){var i=e[t];Ae.call(e,t)&&Po(i,r)&&(r!==n||t in e)||ar(e,t,r)}function nr(e,t){for(var n=e.length;n--;)if(Po(e[n][0],t))return n;return-1}function rr(e,t,n,r){return pr(e,(function(e,i,a){t(r,e,n(e),a)})),r}function ir(e,t){return e&&Ii(t,Es(t),e)}function ar(e,t,n){"__proto__"==t&&nt?nt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function or(e,t){for(var r=-1,i=t.length,a=ae(i),o=null==e;++r<i;)a[r]=o?n:Cs(e,t[r]);return a}function sr(e,t,r){return e==e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function lr(e,t,r,i,a,o){var s,l=1&t,c=2&t,d=4&t;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!es(e))return e;var u=Vo(e);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Di(e,s)}else{var p=ha(e),f=p==w||p==$;if(Ko(e))return ji(e,l);if(p==k||p==g||f&&!a){if(s=c||f?{}:ga(e),!l)return c?function(e,t){return Ii(e,fa(e),t)}(e,function(e,t){return e&&Ii(t,_s(t),e)}(s,e)):function(e,t){return Ii(e,pa(e),t)}(e,ir(s,e))}else{if(!st[p])return a?e:{};s=function(e,t,n){var r=e.constructor;switch(t){case _:return Si(e);case b:case x:return new r(+e);case M:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case R:case A:case N:case B:case F:case L:case P:case z:case H:return ki(e,n);case j:return new r;case S:case D:return new r(e);case O:return function(e){var t=new e.constructor(e.source,fe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new r;case I:return i=e,Fn?Ce(Fn.call(i)):{}}var i}(e,p,l)}}o||(o=new Xn);var h=o.get(e);if(h)return h;o.set(e,s),os(e)?e.forEach((function(n){s.add(lr(n,t,r,n,e,o))})):ns(e)&&e.forEach((function(n,i){s.set(i,lr(n,t,r,i,e,o))}));var m=u?n:(d?c?ia:ra:c?_s:Es)(e);return Ot(m||e,(function(n,i){m&&(n=e[i=n]),tr(s,i,lr(n,t,r,i,e,o))})),s}function cr(e,t,r){var i=r.length;if(null==e)return!i;for(e=Ce(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function dr(e,t,i){if("function"!=typeof e)throw new De(r);return Ia((function(){e.apply(n,i)}),t)}function ur(e,t,n,r){var i=-1,a=Et,o=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=Mt(t,Zt(n))),r?(a=_t,o=!1):t.length>=200&&(a=Jt,o=!1,t=new Kn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,o&&u==u){for(var p=c;p--;)if(t[p]===u)continue e;l.push(d)}else a(t,u,r)||l.push(d)}return l}Pn.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pn}},Pn.prototype=Hn.prototype,Pn.prototype.constructor=Pn,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=Dn?Dn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(e){var t=this.__data__;if(Dn){var r=t[e];return r===i?n:r}return Ae.call(t,e)?t[e]:n},Yn.prototype.has=function(e){var t=this.__data__;return Dn?t[e]!==n:Ae.call(t,e)},Yn.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Dn&&t===n?i:t,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},Un.prototype.get=function(e){var t=this.__data__,r=nr(t,e);return r<0?n:t[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},qn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(kn||Un),string:new Yn}},qn.prototype.delete=function(e){var t=ca(this,e).delete(e);return this.size-=t?1:0,t},qn.prototype.get=function(e){return ca(this,e).get(e)},qn.prototype.has=function(e){return ca(this,e).has(e)},qn.prototype.set=function(e,t){var n=ca(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Kn.prototype.add=Kn.prototype.push=function(e){return this.__data__.set(e,i),this},Kn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.clear=function(){this.__data__=new Un,this.size=0},Xn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Xn.prototype.get=function(e){return this.__data__.get(e)},Xn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new qn(r)}return n.set(e,t),this.size=n.size,this};var pr=Mi(yr),fr=Mi(wr,!0);function hr(e,t){var n=!0;return pr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function mr(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(null!=s&&(l===n?s==s&&!ls(s):r(s,l)))var l=s,c=o}return c}function gr(e,t){var n=[];return pr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function vr(e,t,n,r,i){var a=-1,o=e.length;for(n||(n=va),i||(i=[]);++a<o;){var s=e[a];t>0&&n(s)?t>1?vr(s,t-1,n,r,i):Rt(i,s):r||(i[i.length]=s)}return i}var br=Ri(),xr=Ri(!0);function yr(e,t){return e&&br(e,t,Es)}function wr(e,t){return e&&xr(e,t,Es)}function $r(e,t){return It(t,(function(t){return Zo(e[t])}))}function jr(e,t){for(var r=0,i=(t=xi(t,e)).length;null!=e&&r<i;)e=e[Na(t[r++])];return r&&r==i?e:n}function Sr(e,t,n){var r=t(e);return Vo(e)?r:Rt(r,n(e))}function kr(e){return null==e?e===n?"[object Undefined]":"[object Null]":et&&et in Ce(e)?function(e){var t=Ae.call(e,et),r=e[et];try{e[et]=n;var i=!0}catch(e){}var a=Fe.call(e);i&&(t?e[et]=r:delete e[et]);return a}(e):function(e){return Fe.call(e)}(e)}function Cr(e,t){return e>t}function Or(e,t){return null!=e&&Ae.call(e,t)}function Tr(e,t){return null!=e&&t in Ce(e)}function Dr(e,t,r){for(var i=r?_t:Et,a=e[0].length,o=e.length,s=o,l=ae(o),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),c=xn(u.length,c),l[s]=!r&&(t||a>=120&&u.length>=120)?new Kn(s&&u):n}u=e[0];var p=-1,f=l[0];e:for(;++p<a&&d.length<c;){var h=u[p],m=t?t(h):h;if(h=r||0!==h?h:0,!(f?Jt(f,m):i(d,m,r))){for(s=o;--s;){var g=l[s];if(!(g?Jt(g,m):i(e[s],m,r)))continue e}f&&f.push(m),d.push(h)}}return d}function Ir(e,t,r){var i=null==(e=Oa(e,t=xi(t,e)))?e:e[Na(Xa(t))];return null==i?n:kt(i,e,r)}function Er(e){return ts(e)&&kr(e)==g}function _r(e,t,r,i,a){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,r,i,a,o){var s=Vo(e),l=Vo(t),c=s?v:ha(e),d=l?v:ha(t),u=(c=c==g?k:c)==k,p=(d=d==g?k:d)==k,f=c==d;if(f&&Ko(e)){if(!Ko(t))return!1;s=!0,u=!1}if(f&&!u)return o||(o=new Xn),s||cs(e)?ta(e,t,r,i,a,o):function(e,t,n,r,i,a,o){switch(n){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!a(new Ve(e),new Ve(t)));case b:case x:case S:return Po(+e,+t);case y:return e.name==t.name&&e.message==t.message;case O:case D:return e==t+"";case j:var s=sn;case T:var l=1&r;if(s||(s=dn),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=ta(s(e),s(t),r,i,a,o);return o.delete(e),d;case I:if(Fn)return Fn.call(e)==Fn.call(t)}return!1}(e,t,c,r,i,a,o);if(!(1&r)){var h=u&&Ae.call(e,"__wrapped__"),m=p&&Ae.call(t,"__wrapped__");if(h||m){var w=h?e.value():e,$=m?t.value():t;return o||(o=new Xn),a(w,$,r,i,o)}}if(!f)return!1;return o||(o=new Xn),function(e,t,r,i,a,o){var s=1&r,l=ra(e),c=l.length,d=ra(t),u=d.length;if(c!=u&&!s)return!1;var p=c;for(;p--;){var f=l[p];if(!(s?f in t:Ae.call(t,f)))return!1}var h=o.get(e),m=o.get(t);if(h&&m)return h==t&&m==e;var g=!0;o.set(e,t),o.set(t,e);var v=s;for(;++p<c;){var b=e[f=l[p]],x=t[f];if(i)var y=s?i(x,b,f,t,e,o):i(b,x,f,e,t,o);if(!(y===n?b===x||a(b,x,r,i,o):y)){g=!1;break}v||(v="constructor"==f)}if(g&&!v){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(g=!1)}return o.delete(e),o.delete(t),g}(e,t,r,i,a,o)}(e,t,r,i,_r,a))}function Mr(e,t,r,i){var a=r.length,o=a,s=!i;if(null==e)return!o;for(e=Ce(e);a--;){var l=r[a];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<o;){var c=(l=r[a])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===n&&!(c in e))return!1}else{var p=new Xn;if(i)var f=i(d,u,c,e,t,p);if(!(f===n?_r(u,d,3,i,p):f))return!1}}return!0}function Rr(e){return!(!es(e)||(t=e,Be&&Be in t))&&(Zo(e)?ze:ge).test(Ba(e));var t}function Ar(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Vo(e)?zr(e[0],e[1]):Pr(e):pl(e)}function Nr(e){if(!ja(e))return vn(e);var t=[];for(var n in Ce(e))Ae.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Br(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Ce(e))t.push(n);return t}(e);var t=ja(e),n=[];for(var r in e)("constructor"!=r||!t&&Ae.call(e,r))&&n.push(r);return n}function Fr(e,t){return e<t}function Lr(e,t){var n=-1,r=Uo(e)?ae(e.length):[];return pr(e,(function(e,i,a){r[++n]=t(e,i,a)})),r}function Pr(e){var t=da(e);return 1==t.length&&t[0][2]?ka(t[0][0],t[0][1]):function(n){return n===e||Mr(n,e,t)}}function zr(e,t){return ya(e)&&Sa(t)?ka(Na(e),t):function(r){var i=Cs(r,e);return i===n&&i===t?Os(r,e):_r(t,i,3)}}function Hr(e,t,r,i,a){e!==t&&br(t,(function(o,s){if(a||(a=new Xn),es(o))!function(e,t,r,i,a,o,s){var l=Ta(e,r),c=Ta(t,r),d=s.get(c);if(d)return void er(e,r,d);var u=o?o(l,c,r+"",e,t,s):n,p=u===n;if(p){var f=Vo(c),h=!f&&Ko(c),m=!f&&!h&&cs(c);u=c,f||h||m?Vo(l)?u=l:qo(l)?u=Di(l):h?(p=!1,u=ji(c,!0)):m?(p=!1,u=ki(c,!0)):u=[]:is(c)||Wo(c)?(u=l,Wo(l)?u=vs(l):es(l)&&!Zo(l)||(u=ga(c))):p=!1}p&&(s.set(c,u),a(u,c,i,o,s),s.delete(c));er(e,r,u)}(e,t,s,r,Hr,i,a);else{var l=i?i(Ta(e,s),o,s+"",e,t,a):n;l===n&&(l=o),er(e,s,l)}}),_s)}function Wr(e,t){var r=e.length;if(r)return ba(t+=t<0?r:0,r)?e[t]:n}function Vr(e,t,n){t=t.length?Mt(t,(function(e){return Vo(e)?function(t){return jr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=Mt(t,Zt(la()));var i=Lr(e,(function(e,n,i){var a=Mt(t,(function(t){return t(e)}));return{criteria:a,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;for(;++r<o;){var l=Ci(i[r],a[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=jr(e,o);n(s,o)&&Jr(a,xi(o,e),s)}return a}function Ur(e,t,n,r){var i=r?Ht:zt,a=-1,o=t.length,s=e;for(e===t&&(t=Di(t)),n&&(s=Mt(e,Zt(n)));++a<o;)for(var l=0,c=t[a],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function qr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;ba(i)?Xe.call(e,i,1):ui(e,i)}}return e}function Kr(e,t){return e+mt($n()*(t-e+1))}function Xr(e,t){var n="";if(!e||t<1||t>p)return n;do{t%2&&(n+=e),(t=mt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Ea(Ca(e,t,rl),e+"")}function Zr(e){return Zn(Ps(e))}function Qr(e,t){var n=Ps(e);return Ra(n,sr(t,0,n.length))}function Jr(e,t,r,i){if(!es(e))return e;for(var a=-1,o=(t=xi(t,e)).length,s=o-1,l=e;null!=l&&++a<o;){var c=Na(t[a]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(a!=s){var u=l[c];(d=i?i(u,c,l):n)===n&&(d=es(u)?u:ba(t[a+1])?[]:{})}tr(l,c,d),l=l[c]}return e}var ei=In?function(e,t){return In.set(e,t),e}:rl,ti=nt?function(e,t){return nt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Ra(Ps(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=ae(i);++r<i;)a[r]=e[r+t];return a}function ii(e,t){var n;return pr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var a=r+i>>>1,o=e[a];null!==o&&!ls(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return oi(e,t,rl,n)}function oi(e,t,r,i){var a=0,o=null==e?0:e.length;if(0===o)return 0;for(var s=(t=r(t))!=t,l=null===t,c=ls(t),d=t===n;a<o;){var u=mt((a+o)/2),p=r(e[u]),f=p!==n,h=null===p,m=p==p,g=ls(p);if(s)var v=i||m;else v=d?m&&(i||f):l?m&&f&&(i||!h):c?m&&f&&!h&&(i||!g):!h&&!g&&(i?p<=t:p<t);v?a=u+1:o=u}return xn(o,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Po(s,l)){var l=s;a[i++]=0===o?0:o}}return a}function li(e){return"number"==typeof e?e:ls(e)?f:+e}function ci(e){if("string"==typeof e)return e;if(Vo(e))return Mt(e,ci)+"";if(ls(e))return Ln?Ln.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Et,a=e.length,o=!0,s=[],l=s;if(n)o=!1,i=_t;else if(a>=200){var c=t?null:Xi(e);if(c)return dn(c);o=!1,i=Jt,l=new Kn}else l=t?[]:s;e:for(;++r<a;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,o&&u==u){for(var p=l.length;p--;)if(l[p]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Oa(e,t=xi(t,e)))||delete e[Na(Xa(t))]}function pi(e,t,n,r){return Jr(e,t,n(jr(e,t)),r)}function fi(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ri(e,r?0:a,r?a+1:i):ri(e,r?a+1:0,r?i:a)}function hi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Rt([e],t.args))}),n)}function mi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,a=ae(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ur(a[i]||o,e[s],t,n));return di(vr(a,1),t,n)}function gi(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var l=i<o?t[i]:n;r(s,e[i],l)}return s}function vi(e){return qo(e)?e:[]}function bi(e){return"function"==typeof e?e:rl}function xi(e,t){return Vo(e)?e:ya(e,t)?[e]:Aa(bs(e))}var yi=Gr;function wi(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ri(e,t,r)}var $i=lt||function(e){return ft.clearTimeout(e)};function ji(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ki(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(e,t){if(e!==t){var r=e!==n,i=null===e,a=e==e,o=ls(e),s=t!==n,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!o&&e>t||o&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!a)return 1;if(!i&&!o&&!d&&e<t||d&&r&&a&&!i&&!o||l&&r&&a||!s&&a||!c)return-1}return 0}function Oi(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,l=t.length,c=bn(a-o,0),d=ae(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<o;)(u||i<a)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,l=-1,c=t.length,d=bn(a-s,0),u=ae(d+c),p=!r;++i<d;)u[i]=e[i];for(var f=i;++l<c;)u[f+l]=t[l];for(;++o<s;)(p||i<a)&&(u[f+n[o]]=e[i++]);return u}function Di(e,t){var n=-1,r=e.length;for(t||(t=ae(r));++n<r;)t[n]=e[n];return t}function Ii(e,t,r,i){var a=!r;r||(r={});for(var o=-1,s=t.length;++o<s;){var l=t[o],c=i?i(r[l],e[l],l,r,e):n;c===n&&(c=e[l]),a?ar(r,l,c):tr(r,l,c)}return r}function Ei(e,t){return function(n,r){var i=Vo(n)?Ct:rr,a=t?t():{};return i(n,e,la(r,2),a)}}function _i(e){return Gr((function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&"function"==typeof o?(a--,o):n,s&&xa(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=Ce(t);++i<a;){var l=r[i];l&&e(t,l,i,o)}return t}))}function Mi(e,t){return function(n,r){if(null==n)return n;if(!Uo(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Ce(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}function Ri(e){return function(t,n,r){for(var i=-1,a=Ce(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}function Ai(e){return function(t){var r=on(t=bs(t))?fn(t):n,i=r?r[0]:t.charAt(0),a=r?wi(r,1).join(""):t.slice(1);return i[e]()+a}}function Ni(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Bi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Fi(e){return function(t,r,i){var a=Ce(t);if(!Uo(t)){var o=la(r,3);t=Es(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function Li(e){return na((function(t){var i=t.length,a=i,o=Wn.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if("function"!=typeof s)throw new De(r);if(o&&!l&&"wrapper"==oa(s))var l=new Wn([],!0)}for(a=l?a:i;++a<i;){var c=oa(s=t[a]),d="wrapper"==c?aa(s):n;l=d&&wa(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[oa(d[0])].apply(l,d[3]):1==s.length&&wa(s)?l[c]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&Vo(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}}))}function Pi(e,t,r,i,a,o,s,l,d,u){var p=t&c,f=1&t,h=2&t,m=24&t,g=512&t,v=h?n:Bi(e);return function c(){for(var b=arguments.length,x=ae(b),y=b;y--;)x[y]=arguments[y];if(m)var w=sa(c),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(x,w);if(i&&(x=Oi(x,i,a,m)),o&&(x=Ti(x,o,s,m)),b-=$,m&&b<u){var j=cn(x,w);return qi(e,t,Pi,c.placeholder,r,x,j,l,d,u-b)}var S=f?r:this,k=h?S[e]:e;return b=x.length,l?x=function(e,t){var r=e.length,i=xn(t.length,r),a=Di(e);for(;i--;){var o=t[i];e[i]=ba(o,r)?a[o]:n}return e}(x,l):g&&b>1&&x.reverse(),p&&d<b&&(x.length=d),this&&this!==ft&&this instanceof c&&(k=v||Bi(k)),k.apply(S,x)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return yr(e,(function(e,i,a){t(r,n(e),i,a)})),r}(n,e,t(r),{})}}function Hi(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),a=e(r,i)}return a}}function Wi(e){return na((function(t){return t=Mt(t,Zt(la())),Gr((function(n){var r=this;return e(t,(function(e){return kt(e,r,n)}))}))}))}function Vi(e,t){var r=(t=t===n?" ":ci(t)).length;if(r<2)return r?Xr(t,e):t;var i=Xr(t,ht(e/pn(t)));return on(t)?wi(fn(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,r,i){return i&&"number"!=typeof i&&xa(t,r,i)&&(r=i=n),t=fs(t),r===n?(r=t,t=0):r=fs(r),function(e,t,n,r){for(var i=-1,a=bn(ht((t-e)/(n||1)),0),o=ae(a);a--;)o[r?a:++i]=e,e+=n;return o}(t,r,i=i===n?t<r?1:-1:fs(i),e)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=gs(t),n=gs(n)),e(t,n)}}function qi(e,t,r,i,a,o,c,d,u,p){var f=8&t;t|=f?s:l,4&(t&=~(f?l:s))||(t&=-4);var h=[e,t,a,f?o:n,f?c:n,f?n:o,f?n:c,d,u,p],m=r.apply(n,h);return wa(e)&&Da(m,h),m.placeholder=i,_a(m,e,t)}function Ki(e){var t=ke[e];return function(e,n){if(e=gs(e),(n=null==n?0:xn(hs(n),292))&&Ft(e)){var r=(bs(e)+"e").split("e");return+((r=(bs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Xi=On&&1/dn(new On([,-0]))[1]==u?function(e){return new On(e)}:ll;function Gi(e){return function(t){var n=ha(t);return n==j?sn(t):n==T?un(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,p,f,h,m){var g=2&t;if(!g&&"function"!=typeof e)throw new De(r);var v=u?u.length:0;if(v||(t&=-97,u=p=n),h=h===n?h:bn(hs(h),0),m=m===n?m:hs(m),v-=p?p.length:0,t&l){var b=u,x=p;u=p=n}var y=g?n:aa(e),w=[e,t,i,u,p,b,x,f,h,m];if(y&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,s=r==c&&8==n||r==c&&n==d&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!s)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Oi(u,l,t[4]):l,e[4]=u?cn(e[3],a):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ti(u,l,t[6]):l,e[6]=u?cn(e[5],a):t[6]);(l=t[7])&&(e[7]=l);r&c&&(e[8]=null==e[8]?t[8]:xn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,y),e=w[0],t=w[1],i=w[2],u=w[3],p=w[4],!(m=w[9]=w[9]===n?g?0:e.length:bn(w[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==o?function(e,t,r){var i=Bi(e);return function a(){for(var o=arguments.length,s=ae(o),l=o,c=sa(a);l--;)s[l]=arguments[l];var d=o<3&&s[0]!==c&&s[o-1]!==c?[]:cn(s,c);return(o-=d.length)<r?qi(e,t,Pi,a.placeholder,n,s,d,n,n,r-o):kt(this&&this!==ft&&this instanceof a?i:e,this,s)}}(e,t,m):t!=s&&33!=t||p.length?Pi.apply(n,w):function(e,t,n,r){var i=1&t,a=Bi(e);return function t(){for(var o=-1,s=arguments.length,l=-1,c=r.length,d=ae(c+s),u=this&&this!==ft&&this instanceof t?a:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++o];return kt(u,i?n:this,d)}}(e,t,i,u);else var $=function(e,t,n){var r=1&t,i=Bi(e);return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,i);return _a((y?ei:Da)($,w),e,t)}function Qi(e,t,r,i){return e===n||Po(e,_e[r])&&!Ae.call(i,r)?t:e}function Ji(e,t,r,i,a,o){return es(e)&&es(t)&&(o.set(t,e),Hr(e,t,n,Ji,o),o.delete(t)),e}function ea(e){return is(e)?n:e}function ta(e,t,r,i,a,o){var s=1&r,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=o.get(e),u=o.get(t);if(d&&u)return d==t&&u==e;var p=-1,f=!0,h=2&r?new Kn:n;for(o.set(e,t),o.set(t,e);++p<l;){var m=e[p],g=t[p];if(i)var v=s?i(g,m,p,t,e,o):i(m,g,p,e,t,o);if(v!==n){if(v)continue;f=!1;break}if(h){if(!Bt(t,(function(e,t){if(!Jt(h,t)&&(m===e||a(m,e,r,i,o)))return h.push(t)}))){f=!1;break}}else if(m!==g&&!a(m,g,r,i,o)){f=!1;break}}return o.delete(e),o.delete(t),f}function na(e){return Ea(Ca(e,n,Va),e+"")}function ra(e){return Sr(e,Es,pa)}function ia(e){return Sr(e,_s,fa)}var aa=In?function(e){return In.get(e)}:ll;function oa(e){for(var t=e.name+"",n=En[t],r=Ae.call(En,t)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==e)return i.name}return t}function sa(e){return(Ae.call(Pn,"placeholder")?Pn:e).placeholder}function la(){var e=Pn.iteratee||il;return e=e===il?Ar:e,arguments.length?e(arguments[0],arguments[1]):e}function ca(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function da(e){for(var t=Es(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Sa(i)]}return t}function ua(e,t){var r=function(e,t){return null==e?n:e[t]}(e,t);return Rr(r)?r:n}var pa=vt?function(e){return null==e?[]:(e=Ce(e),It(vt(e),(function(t){return Ke.call(e,t)})))}:ml,fa=vt?function(e){for(var t=[];e;)Rt(t,pa(e)),e=Ue(e);return t}:ml,ha=kr;function ma(e,t,n){for(var r=-1,i=(t=xi(t,e)).length,a=!1;++r<i;){var o=Na(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Jo(i)&&ba(o,i)&&(Vo(e)||Wo(e))}function ga(e){return"function"!=typeof e.constructor||ja(e)?{}:zn(Ue(e))}function va(e){return Vo(e)||Wo(e)||!!(Ge&&e&&e[Ge])}function ba(e,t){var n=typeof e;return!!(t=null==t?p:t)&&("number"==n||"symbol"!=n&&be.test(e))&&e>-1&&e%1==0&&e<t}function xa(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Uo(n)&&ba(t,n.length):"string"==r&&t in n)&&Po(n[t],e)}function ya(e,t){if(Vo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in Ce(t))}function wa(e){var t=oa(e),n=Pn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=aa(n);return!!r&&e===r[0]}(Sn&&ha(new Sn(new ArrayBuffer(1)))!=M||kn&&ha(new kn)!=j||Cn&&ha(Cn.resolve())!=C||On&&ha(new On)!=T||Tn&&ha(new Tn)!=E)&&(ha=function(e){var t=kr(e),r=t==k?e.constructor:n,i=r?Ba(r):"";if(i)switch(i){case _n:return M;case Mn:return j;case Rn:return C;case An:return T;case Nn:return E}return t});var $a=Me?Zo:gl;function ja(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_e)}function Sa(e){return e==e&&!es(e)}function ka(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==n||e in Ce(r)))}}function Ca(e,t,r){return t=bn(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=bn(n.length-t,0),o=ae(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=ae(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),kt(e,this,s)}}function Oa(e,t){return t.length<2?e:jr(e,ri(t,0,-1))}function Ta(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Da=Ma(ei),Ia=pt||function(e,t){return ft.setTimeout(e,t)},Ea=Ma(ti);function _a(e,t,n){var r=t+"";return Ea(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(m,(function(n){var r="_."+n[0];t&n[1]&&!Et(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(r),n)))}function Ma(e){var t=0,r=0;return function(){var i=yn(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Ra(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=Kr(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var Aa=function(e){var t=Ro(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,n,r,i){t.push(r?i.replace(ue,"$1"):n||e)})),t}));function Na(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ba(e){if(null!=e){try{return Re.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Fa(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Di(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var La=Gr((function(e,t){return qo(e)?ur(e,vr(t,1,qo,!0)):[]})),Pa=Gr((function(e,t){var r=Xa(t);return qo(r)&&(r=n),qo(e)?ur(e,vr(t,1,qo,!0),la(r,2)):[]})),za=Gr((function(e,t){var r=Xa(t);return qo(r)&&(r=n),qo(e)?ur(e,vr(t,1,qo,!0),n,r):[]}));function Ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:hs(n);return i<0&&(i=bn(r+i,0)),Pt(e,la(t,3),i)}function Wa(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=hs(r),a=r<0?bn(i+a,0):xn(a,i-1)),Pt(e,la(t,3),a,!0)}function Va(e){return(null==e?0:e.length)?vr(e,1):[]}function Ya(e){return e&&e.length?e[0]:n}var Ua=Gr((function(e){var t=Mt(e,vi);return t.length&&t[0]===e[0]?Dr(t):[]})),qa=Gr((function(e){var t=Xa(e),r=Mt(e,vi);return t===Xa(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Dr(r,la(t,2)):[]})),Ka=Gr((function(e){var t=Xa(e),r=Mt(e,vi);return(t="function"==typeof t?t:n)&&r.pop(),r.length&&r[0]===e[0]?Dr(r,n,t):[]}));function Xa(e){var t=null==e?0:e.length;return t?e[t-1]:n}var Ga=Gr(Za);function Za(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Qa=na((function(e,t){var n=null==e?0:e.length,r=or(e,t);return qr(e,Mt(t,(function(e){return ba(e,n)?+e:e})).sort(Ci)),r}));function Ja(e){return null==e?e:jn.call(e)}var eo=Gr((function(e){return di(vr(e,1,qo,!0))})),to=Gr((function(e){var t=Xa(e);return qo(t)&&(t=n),di(vr(e,1,qo,!0),la(t,2))})),no=Gr((function(e){var t=Xa(e);return t="function"==typeof t?t:n,di(vr(e,1,qo,!0),n,t)}));function ro(e){if(!e||!e.length)return[];var t=0;return e=It(e,(function(e){if(qo(e))return t=bn(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Yt(t))}))}function io(e,t){if(!e||!e.length)return[];var r=ro(e);return null==t?r:Mt(r,(function(e){return kt(t,n,e)}))}var ao=Gr((function(e,t){return qo(e)?ur(e,t):[]})),oo=Gr((function(e){return mi(It(e,qo))})),so=Gr((function(e){var t=Xa(e);return qo(t)&&(t=n),mi(It(e,qo),la(t,2))})),lo=Gr((function(e){var t=Xa(e);return t="function"==typeof t?t:n,mi(It(e,qo),n,t)})),co=Gr(ro);var uo=Gr((function(e){var t=e.length,r=t>1?e[t-1]:n;return r="function"==typeof r?(e.pop(),r):n,io(e,r)}));function po(e){var t=Pn(e);return t.__chain__=!0,t}function fo(e,t){return t(e)}var ho=na((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return or(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Vn&&ba(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:fo,args:[a],thisArg:n}),new Wn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(a)}));var mo=Ei((function(e,t,n){Ae.call(e,n)?++e[n]:ar(e,n,1)}));var go=Fi(Ha),vo=Fi(Wa);function bo(e,t){return(Vo(e)?Ot:pr)(e,la(t,3))}function xo(e,t){return(Vo(e)?Tt:fr)(e,la(t,3))}var yo=Ei((function(e,t,n){Ae.call(e,n)?e[n].push(t):ar(e,n,[t])}));var wo=Gr((function(e,t,n){var r=-1,i="function"==typeof t,a=Uo(e)?ae(e.length):[];return pr(e,(function(e){a[++r]=i?kt(t,e,n):Ir(e,t,n)})),a})),$o=Ei((function(e,t,n){ar(e,n,t)}));function jo(e,t){return(Vo(e)?Mt:Lr)(e,la(t,3))}var So=Ei((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var ko=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xa(e,t[0],t[1])?t=[]:n>2&&xa(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,vr(t,1),[])})),Co=ut||function(){return ft.Date.now()};function Oo(e,t,r){return t=r?n:t,t=e&&null==t?e.length:t,Zi(e,c,n,n,n,n,t)}function To(e,t){var i;if("function"!=typeof t)throw new De(r);return e=hs(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Do=Gr((function(e,t,n){var r=1;if(n.length){var i=cn(n,sa(Do));r|=s}return Zi(e,r,t,n,i)})),Io=Gr((function(e,t,n){var r=3;if(n.length){var i=cn(n,sa(Io));r|=s}return Zi(t,r,e,n,i)}));function Eo(e,t,i){var a,o,s,l,c,d,u=0,p=!1,f=!1,h=!0;if("function"!=typeof e)throw new De(r);function m(t){var r=a,i=o;return a=o=n,u=t,l=e.apply(i,r)}function g(e){var r=e-d;return d===n||r>=t||r<0||f&&e-u>=s}function v(){var e=Co();if(g(e))return b(e);c=Ia(v,function(e){var n=t-(e-d);return f?xn(n,s-(e-u)):n}(e))}function b(e){return c=n,h&&a?m(e):(a=o=n,l)}function x(){var e=Co(),r=g(e);if(a=arguments,o=this,d=e,r){if(c===n)return function(e){return u=e,c=Ia(v,t),p?m(e):l}(d);if(f)return $i(c),c=Ia(v,t),m(d)}return c===n&&(c=Ia(v,t)),l}return t=gs(t)||0,es(i)&&(p=!!i.leading,s=(f="maxWait"in i)?bn(gs(i.maxWait)||0,t):s,h="trailing"in i?!!i.trailing:h),x.cancel=function(){c!==n&&$i(c),u=0,a=d=o=c=n},x.flush=function(){return c===n?l:b(Co())},x}var _o=Gr((function(e,t){return dr(e,1,t)})),Mo=Gr((function(e,t,n){return dr(e,gs(t)||0,n)}));function Ro(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new De(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ro.Cache||qn),n}function Ao(e){if("function"!=typeof e)throw new De(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ro.Cache=qn;var No=yi((function(e,t){var n=(t=1==t.length&&Vo(t[0])?Mt(t[0],Zt(la())):Mt(vr(t,1),Zt(la()))).length;return Gr((function(r){for(var i=-1,a=xn(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return kt(e,this,r)}))})),Bo=Gr((function(e,t){var r=cn(t,sa(Bo));return Zi(e,s,n,t,r)})),Fo=Gr((function(e,t){var r=cn(t,sa(Fo));return Zi(e,l,n,t,r)})),Lo=na((function(e,t){return Zi(e,d,n,n,n,t)}));function Po(e,t){return e===t||e!=e&&t!=t}var zo=Ui(Cr),Ho=Ui((function(e,t){return e>=t})),Wo=Er(function(){return arguments}())?Er:function(e){return ts(e)&&Ae.call(e,"callee")&&!Ke.call(e,"callee")},Vo=ae.isArray,Yo=xt?Zt(xt):function(e){return ts(e)&&kr(e)==_};function Uo(e){return null!=e&&Jo(e.length)&&!Zo(e)}function qo(e){return ts(e)&&Uo(e)}var Ko=bt||gl,Xo=yt?Zt(yt):function(e){return ts(e)&&kr(e)==x};function Go(e){if(!ts(e))return!1;var t=kr(e);return t==y||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Zo(e){if(!es(e))return!1;var t=kr(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(e){return"number"==typeof e&&e==hs(e)}function Jo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=p}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=wt?Zt(wt):function(e){return ts(e)&&ha(e)==j};function rs(e){return"number"==typeof e||ts(e)&&kr(e)==S}function is(e){if(!ts(e)||kr(e)!=k)return!1;var t=Ue(e);if(null===t)return!0;var n=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Re.call(n)==Le}var as=$t?Zt($t):function(e){return ts(e)&&kr(e)==O};var os=jt?Zt(jt):function(e){return ts(e)&&ha(e)==T};function ss(e){return"string"==typeof e||!Vo(e)&&ts(e)&&kr(e)==D}function ls(e){return"symbol"==typeof e||ts(e)&&kr(e)==I}var cs=St?Zt(St):function(e){return ts(e)&&Jo(e.length)&&!!ot[kr(e)]};var ds=Ui(Fr),us=Ui((function(e,t){return e<=t}));function ps(e){if(!e)return[];if(Uo(e))return ss(e)?fn(e):Di(e);if(Ze&&e[Ze])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Ze]());var t=ha(e);return(t==j?sn:t==T?dn:Ps)(e)}function fs(e){return e?(e=gs(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function hs(e){var t=fs(e),n=t%1;return t==t?n?t-n:t:0}function ms(e){return e?sr(hs(e),0,h):0}function gs(e){if("number"==typeof e)return e;if(ls(e))return f;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var n=me.test(e);return n||ve.test(e)?dt(e.slice(2),n?2:8):he.test(e)?f:+e}function vs(e){return Ii(e,_s(e))}function bs(e){return null==e?"":ci(e)}var xs=_i((function(e,t){if(ja(t)||Uo(t))Ii(t,Es(t),e);else for(var n in t)Ae.call(t,n)&&tr(e,n,t[n])})),ys=_i((function(e,t){Ii(t,_s(t),e)})),ws=_i((function(e,t,n,r){Ii(t,_s(t),e,r)})),$s=_i((function(e,t,n,r){Ii(t,Es(t),e,r)})),js=na(or);var Ss=Gr((function(e,t){e=Ce(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&xa(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=_s(o),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===n||Po(u,_e[d])&&!Ae.call(e,d))&&(e[d]=o[d])}return e})),ks=Gr((function(e){return e.push(n,Ji),kt(Rs,n,e)}));function Cs(e,t,r){var i=null==e?n:jr(e,t);return i===n?r:i}function Os(e,t){return null!=e&&ma(e,t,Tr)}var Ts=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),e[t]=n}),el(rl)),Ds=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),Ae.call(e,t)?e[t].push(n):e[t]=[n]}),la),Is=Gr(Ir);function Es(e){return Uo(e)?Gn(e):Nr(e)}function _s(e){return Uo(e)?Gn(e,!0):Br(e)}var Ms=_i((function(e,t,n){Hr(e,t,n)})),Rs=_i((function(e,t,n,r){Hr(e,t,n,r)})),As=na((function(e,t){var n={};if(null==e)return n;var r=!1;t=Mt(t,(function(t){return t=xi(t,e),r||(r=t.length>1),t})),Ii(e,ia(e),n),r&&(n=lr(n,7,ea));for(var i=t.length;i--;)ui(n,t[i]);return n}));var Ns=na((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Os(e,n)}))}(e,t)}));function Bs(e,t){if(null==e)return{};var n=Mt(ia(e),(function(e){return[e]}));return t=la(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Fs=Gi(Es),Ls=Gi(_s);function Ps(e){return null==e?[]:Qt(e,Es(e))}var zs=Ni((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(bs(e).toLowerCase())}function Ws(e){return(e=bs(e))&&e.replace(xe,nn).replace(Je,"")}var Vs=Ni((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Ni((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var qs=Ni((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ks=Ni((function(e,t,n){return e+(n?" ":"")+Gs(t)}));var Xs=Ni((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,r){return e=bs(e),(t=r?n:t)===n?function(e){return rt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gr((function(e,t){try{return kt(e,n,t)}catch(e){return Go(e)?e:new je(e)}})),Js=na((function(e,t){return Ot(t,(function(t){t=Na(t),ar(e,t,Do(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Li(),nl=Li(!0);function rl(e){return e}function il(e){return Ar("function"==typeof e?e:lr(e,1))}var al=Gr((function(e,t){return function(n){return Ir(n,e,t)}})),ol=Gr((function(e,t){return function(n){return Ir(e,n,t)}}));function sl(e,t,n){var r=Es(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Es(t)));var a=!(es(n)&&"chain"in n&&!n.chain),o=Zo(e);return Ot(i,(function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Di(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Rt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Dt),ul=Wi(Bt);function pl(e){return ya(e)?Yt(Na(e)):function(e){return function(t){return jr(t,e)}}(e)}var fl=Yi(),hl=Yi(!0);function ml(){return[]}function gl(){return!1}var vl=Hi((function(e,t){return e+t}),0),bl=Ki("ceil"),xl=Hi((function(e,t){return e/t}),1),yl=Ki("floor");var wl,$l=Hi((function(e,t){return e*t}),1),jl=Ki("round"),Sl=Hi((function(e,t){return e-t}),0);return Pn.after=function(e,t){if("function"!=typeof t)throw new De(r);return e=hs(e),function(){if(--e<1)return t.apply(this,arguments)}},Pn.ary=Oo,Pn.assign=xs,Pn.assignIn=ys,Pn.assignInWith=ws,Pn.assignWith=$s,Pn.at=js,Pn.before=To,Pn.bind=Do,Pn.bindAll=Js,Pn.bindKey=Io,Pn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Vo(e)?e:[e]},Pn.chain=po,Pn.chunk=function(e,t,r){t=(r?xa(e,t,r):t===n)?1:bn(hs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=ae(ht(i/t));a<i;)s[o++]=ri(e,a,a+=t);return s},Pn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i},Pn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=ae(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Rt(Vo(n)?Di(n):[n],vr(t,1))},Pn.cond=function(e){var t=null==e?0:e.length,n=la();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new De(r);return[n(e[0]),e[1]]})):[],Gr((function(n){for(var r=-1;++r<t;){var i=e[r];if(kt(i[0],this,n))return kt(i[1],this,n)}}))},Pn.conforms=function(e){return function(e){var t=Es(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Pn.constant=el,Pn.countBy=mo,Pn.create=function(e,t){var n=zn(e);return null==t?n:ir(n,t)},Pn.curry=function e(t,r,i){var a=Zi(t,8,n,n,n,n,n,r=i?n:r);return a.placeholder=e.placeholder,a},Pn.curryRight=function e(t,r,i){var a=Zi(t,o,n,n,n,n,n,r=i?n:r);return a.placeholder=e.placeholder,a},Pn.debounce=Eo,Pn.defaults=Ss,Pn.defaultsDeep=ks,Pn.defer=_o,Pn.delay=Mo,Pn.difference=La,Pn.differenceBy=Pa,Pn.differenceWith=za,Pn.drop=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=r||t===n?1:hs(t))<0?0:t,i):[]},Pn.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,0,(t=i-(t=r||t===n?1:hs(t)))<0?0:t):[]},Pn.dropRightWhile=function(e,t){return e&&e.length?fi(e,la(t,3),!0,!0):[]},Pn.dropWhile=function(e,t){return e&&e.length?fi(e,la(t,3),!0):[]},Pn.fill=function(e,t,r,i){var a=null==e?0:e.length;return a?(r&&"number"!=typeof r&&xa(e,t,r)&&(r=0,i=a),function(e,t,r,i){var a=e.length;for((r=hs(r))<0&&(r=-r>a?0:a+r),(i=i===n||i>a?a:hs(i))<0&&(i+=a),i=r>i?0:ms(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},Pn.filter=function(e,t){return(Vo(e)?It:gr)(e,la(t,3))},Pn.flatMap=function(e,t){return vr(jo(e,t),1)},Pn.flatMapDeep=function(e,t){return vr(jo(e,t),u)},Pn.flatMapDepth=function(e,t,r){return r=r===n?1:hs(r),vr(jo(e,t),r)},Pn.flatten=Va,Pn.flattenDeep=function(e){return(null==e?0:e.length)?vr(e,u):[]},Pn.flattenDepth=function(e,t){return(null==e?0:e.length)?vr(e,t=t===n?1:hs(t)):[]},Pn.flip=function(e){return Zi(e,512)},Pn.flow=tl,Pn.flowRight=nl,Pn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Pn.functions=function(e){return null==e?[]:$r(e,Es(e))},Pn.functionsIn=function(e){return null==e?[]:$r(e,_s(e))},Pn.groupBy=yo,Pn.initial=function(e){return(null==e?0:e.length)?ri(e,0,-1):[]},Pn.intersection=Ua,Pn.intersectionBy=qa,Pn.intersectionWith=Ka,Pn.invert=Ts,Pn.invertBy=Ds,Pn.invokeMap=wo,Pn.iteratee=il,Pn.keyBy=$o,Pn.keys=Es,Pn.keysIn=_s,Pn.map=jo,Pn.mapKeys=function(e,t){var n={};return t=la(t,3),yr(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},Pn.mapValues=function(e,t){var n={};return t=la(t,3),yr(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},Pn.matches=function(e){return Pr(lr(e,1))},Pn.matchesProperty=function(e,t){return zr(e,lr(t,1))},Pn.memoize=Ro,Pn.merge=Ms,Pn.mergeWith=Rs,Pn.method=al,Pn.methodOf=ol,Pn.mixin=sl,Pn.negate=Ao,Pn.nthArg=function(e){return e=hs(e),Gr((function(t){return Wr(t,e)}))},Pn.omit=As,Pn.omitBy=function(e,t){return Bs(e,Ao(la(t)))},Pn.once=function(e){return To(2,e)},Pn.orderBy=function(e,t,r,i){return null==e?[]:(Vo(t)||(t=null==t?[]:[t]),Vo(r=i?n:r)||(r=null==r?[]:[r]),Vr(e,t,r))},Pn.over=cl,Pn.overArgs=No,Pn.overEvery=dl,Pn.overSome=ul,Pn.partial=Bo,Pn.partialRight=Fo,Pn.partition=So,Pn.pick=Ns,Pn.pickBy=Bs,Pn.property=pl,Pn.propertyOf=function(e){return function(t){return null==e?n:jr(e,t)}},Pn.pull=Ga,Pn.pullAll=Za,Pn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,la(n,2)):e},Pn.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Ur(e,t,n,r):e},Pn.pullAt=Qa,Pn.range=fl,Pn.rangeRight=hl,Pn.rearg=Lo,Pn.reject=function(e,t){return(Vo(e)?It:gr)(e,Ao(la(t,3)))},Pn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],a=e.length;for(t=la(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return qr(e,i),n},Pn.rest=function(e,t){if("function"!=typeof e)throw new De(r);return Gr(e,t=t===n?t:hs(t))},Pn.reverse=Ja,Pn.sampleSize=function(e,t,r){return t=(r?xa(e,t,r):t===n)?1:hs(t),(Vo(e)?Qn:Qr)(e,t)},Pn.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Pn.setWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:Jr(e,t,r,i)},Pn.shuffle=function(e){return(Vo(e)?Jn:ni)(e)},Pn.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&xa(e,t,r)?(t=0,r=i):(t=null==t?0:hs(t),r=r===n?i:hs(r)),ri(e,t,r)):[]},Pn.sortBy=ko,Pn.sortedUniq=function(e){return e&&e.length?si(e):[]},Pn.sortedUniqBy=function(e,t){return e&&e.length?si(e,la(t,2)):[]},Pn.split=function(e,t,r){return r&&"number"!=typeof r&&xa(e,t,r)&&(t=r=n),(r=r===n?h:r>>>0)?(e=bs(e))&&("string"==typeof t||null!=t&&!as(t))&&!(t=ci(t))&&on(e)?wi(fn(e),0,r):e.split(t,r):[]},Pn.spread=function(e,t){if("function"!=typeof e)throw new De(r);return t=null==t?0:bn(hs(t),0),Gr((function(n){var r=n[t],i=wi(n,0,t);return r&&Rt(i,r),kt(e,this,i)}))},Pn.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Pn.take=function(e,t,r){return e&&e.length?ri(e,0,(t=r||t===n?1:hs(t))<0?0:t):[]},Pn.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=i-(t=r||t===n?1:hs(t)))<0?0:t,i):[]},Pn.takeRightWhile=function(e,t){return e&&e.length?fi(e,la(t,3),!1,!0):[]},Pn.takeWhile=function(e,t){return e&&e.length?fi(e,la(t,3)):[]},Pn.tap=function(e,t){return t(e),e},Pn.throttle=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new De(r);return es(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),Eo(e,t,{leading:i,maxWait:t,trailing:a})},Pn.thru=fo,Pn.toArray=ps,Pn.toPairs=Fs,Pn.toPairsIn=Ls,Pn.toPath=function(e){return Vo(e)?Mt(e,Na):ls(e)?[e]:Di(Aa(bs(e)))},Pn.toPlainObject=vs,Pn.transform=function(e,t,n){var r=Vo(e),i=r||Ko(e)||cs(e);if(t=la(t,4),null==n){var a=e&&e.constructor;n=i?r?new a:[]:es(e)&&Zo(a)?zn(Ue(e)):{}}return(i?Ot:yr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Pn.unary=function(e){return Oo(e,1)},Pn.union=eo,Pn.unionBy=to,Pn.unionWith=no,Pn.uniq=function(e){return e&&e.length?di(e):[]},Pn.uniqBy=function(e,t){return e&&e.length?di(e,la(t,2)):[]},Pn.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?di(e,n,t):[]},Pn.unset=function(e,t){return null==e||ui(e,t)},Pn.unzip=ro,Pn.unzipWith=io,Pn.update=function(e,t,n){return null==e?e:pi(e,t,bi(n))},Pn.updateWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:pi(e,t,bi(r),i)},Pn.values=Ps,Pn.valuesIn=function(e){return null==e?[]:Qt(e,_s(e))},Pn.without=ao,Pn.words=Zs,Pn.wrap=function(e,t){return Bo(bi(t),e)},Pn.xor=oo,Pn.xorBy=so,Pn.xorWith=lo,Pn.zip=co,Pn.zipObject=function(e,t){return gi(e||[],t||[],tr)},Pn.zipObjectDeep=function(e,t){return gi(e||[],t||[],Jr)},Pn.zipWith=uo,Pn.entries=Fs,Pn.entriesIn=Ls,Pn.extend=ys,Pn.extendWith=ws,sl(Pn,Pn),Pn.add=vl,Pn.attempt=Qs,Pn.camelCase=zs,Pn.capitalize=Hs,Pn.ceil=bl,Pn.clamp=function(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=(r=gs(r))==r?r:0),t!==n&&(t=(t=gs(t))==t?t:0),sr(gs(e),t,r)},Pn.clone=function(e){return lr(e,4)},Pn.cloneDeep=function(e){return lr(e,5)},Pn.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:n)},Pn.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:n)},Pn.conformsTo=function(e,t){return null==t||cr(e,t,Es(t))},Pn.deburr=Ws,Pn.defaultTo=function(e,t){return null==e||e!=e?t:e},Pn.divide=xl,Pn.endsWith=function(e,t,r){e=bs(e),t=ci(t);var i=e.length,a=r=r===n?i:sr(hs(r),0,i);return(r-=t.length)>=0&&e.slice(r,a)==t},Pn.eq=Po,Pn.escape=function(e){return(e=bs(e))&&X.test(e)?e.replace(q,rn):e},Pn.escapeRegExp=function(e){return(e=bs(e))&&re.test(e)?e.replace(ne,"\\$&"):e},Pn.every=function(e,t,r){var i=Vo(e)?Dt:hr;return r&&xa(e,t,r)&&(t=n),i(e,la(t,3))},Pn.find=go,Pn.findIndex=Ha,Pn.findKey=function(e,t){return Lt(e,la(t,3),yr)},Pn.findLast=vo,Pn.findLastIndex=Wa,Pn.findLastKey=function(e,t){return Lt(e,la(t,3),wr)},Pn.floor=yl,Pn.forEach=bo,Pn.forEachRight=xo,Pn.forIn=function(e,t){return null==e?e:br(e,la(t,3),_s)},Pn.forInRight=function(e,t){return null==e?e:xr(e,la(t,3),_s)},Pn.forOwn=function(e,t){return e&&yr(e,la(t,3))},Pn.forOwnRight=function(e,t){return e&&wr(e,la(t,3))},Pn.get=Cs,Pn.gt=zo,Pn.gte=Ho,Pn.has=function(e,t){return null!=e&&ma(e,t,Or)},Pn.hasIn=Os,Pn.head=Ya,Pn.identity=rl,Pn.includes=function(e,t,n,r){e=Uo(e)?e:Ps(e),n=n&&!r?hs(n):0;var i=e.length;return n<0&&(n=bn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&zt(e,t,n)>-1},Pn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:hs(n);return i<0&&(i=bn(r+i,0)),zt(e,t,i)},Pn.inRange=function(e,t,r){return t=fs(t),r===n?(r=t,t=0):r=fs(r),function(e,t,n){return e>=xn(t,n)&&e<bn(t,n)}(e=gs(e),t,r)},Pn.invoke=Is,Pn.isArguments=Wo,Pn.isArray=Vo,Pn.isArrayBuffer=Yo,Pn.isArrayLike=Uo,Pn.isArrayLikeObject=qo,Pn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kr(e)==b},Pn.isBuffer=Ko,Pn.isDate=Xo,Pn.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pn.isEmpty=function(e){if(null==e)return!0;if(Uo(e)&&(Vo(e)||"string"==typeof e||"function"==typeof e.splice||Ko(e)||cs(e)||Wo(e)))return!e.length;var t=ha(e);if(t==j||t==T)return!e.size;if(ja(e))return!Nr(e).length;for(var n in e)if(Ae.call(e,n))return!1;return!0},Pn.isEqual=function(e,t){return _r(e,t)},Pn.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:n)?r(e,t):n;return i===n?_r(e,t,n,r):!!i},Pn.isError=Go,Pn.isFinite=function(e){return"number"==typeof e&&Ft(e)},Pn.isFunction=Zo,Pn.isInteger=Qo,Pn.isLength=Jo,Pn.isMap=ns,Pn.isMatch=function(e,t){return e===t||Mr(e,t,da(t))},Pn.isMatchWith=function(e,t,r){return r="function"==typeof r?r:n,Mr(e,t,da(t),r)},Pn.isNaN=function(e){return rs(e)&&e!=+e},Pn.isNative=function(e){if($a(e))throw new je("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Rr(e)},Pn.isNil=function(e){return null==e},Pn.isNull=function(e){return null===e},Pn.isNumber=rs,Pn.isObject=es,Pn.isObjectLike=ts,Pn.isPlainObject=is,Pn.isRegExp=as,Pn.isSafeInteger=function(e){return Qo(e)&&e>=-9007199254740991&&e<=p},Pn.isSet=os,Pn.isString=ss,Pn.isSymbol=ls,Pn.isTypedArray=cs,Pn.isUndefined=function(e){return e===n},Pn.isWeakMap=function(e){return ts(e)&&ha(e)==E},Pn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kr(e)},Pn.join=function(e,t){return null==e?"":Ut.call(e,t)},Pn.kebabCase=Vs,Pn.last=Xa,Pn.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=(a=hs(r))<0?bn(i+a,0):xn(a,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,a):Pt(e,Wt,a,!0)},Pn.lowerCase=Ys,Pn.lowerFirst=Us,Pn.lt=ds,Pn.lte=us,Pn.max=function(e){return e&&e.length?mr(e,rl,Cr):n},Pn.maxBy=function(e,t){return e&&e.length?mr(e,la(t,2),Cr):n},Pn.mean=function(e){return Vt(e,rl)},Pn.meanBy=function(e,t){return Vt(e,la(t,2))},Pn.min=function(e){return e&&e.length?mr(e,rl,Fr):n},Pn.minBy=function(e,t){return e&&e.length?mr(e,la(t,2),Fr):n},Pn.stubArray=ml,Pn.stubFalse=gl,Pn.stubObject=function(){return{}},Pn.stubString=function(){return""},Pn.stubTrue=function(){return!0},Pn.multiply=$l,Pn.nth=function(e,t){return e&&e.length?Wr(e,hs(t)):n},Pn.noConflict=function(){return ft._===this&&(ft._=Pe),this},Pn.noop=ll,Pn.now=Co,Pn.pad=function(e,t,n){e=bs(e);var r=(t=hs(t))?pn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(mt(i),n)+e+Vi(ht(i),n)},Pn.padEnd=function(e,t,n){e=bs(e);var r=(t=hs(t))?pn(e):0;return t&&r<t?e+Vi(t-r,n):e},Pn.padStart=function(e,t,n){e=bs(e);var r=(t=hs(t))?pn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Pn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(bs(e).replace(ie,""),t||0)},Pn.random=function(e,t,r){if(r&&"boolean"!=typeof r&&xa(e,t,r)&&(t=r=n),r===n&&("boolean"==typeof t?(r=t,t=n):"boolean"==typeof e&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=fs(e),t===n?(t=e,e=0):t=fs(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=$n();return xn(e+a*(t-e+ct("1e-"+((a+"").length-1))),t)}return Kr(e,t)},Pn.reduce=function(e,t,n){var r=Vo(e)?At:qt,i=arguments.length<3;return r(e,la(t,4),n,i,pr)},Pn.reduceRight=function(e,t,n){var r=Vo(e)?Nt:qt,i=arguments.length<3;return r(e,la(t,4),n,i,fr)},Pn.repeat=function(e,t,r){return t=(r?xa(e,t,r):t===n)?1:hs(t),Xr(bs(e),t)},Pn.replace=function(){var e=arguments,t=bs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pn.result=function(e,t,r){var i=-1,a=(t=xi(t,e)).length;for(a||(a=1,e=n);++i<a;){var o=null==e?n:e[Na(t[i])];o===n&&(i=a,o=r),e=Zo(o)?o.call(e):o}return e},Pn.round=jl,Pn.runInContext=e,Pn.sample=function(e){return(Vo(e)?Zn:Zr)(e)},Pn.size=function(e){if(null==e)return 0;if(Uo(e))return ss(e)?pn(e):e.length;var t=ha(e);return t==j||t==T?e.size:Nr(e).length},Pn.snakeCase=qs,Pn.some=function(e,t,r){var i=Vo(e)?Bt:ii;return r&&xa(e,t,r)&&(t=n),i(e,la(t,3))},Pn.sortedIndex=function(e,t){return ai(e,t)},Pn.sortedIndexBy=function(e,t,n){return oi(e,t,la(n,2))},Pn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&Po(e[r],t))return r}return-1},Pn.sortedLastIndex=function(e,t){return ai(e,t,!0)},Pn.sortedLastIndexBy=function(e,t,n){return oi(e,t,la(n,2),!0)},Pn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ai(e,t,!0)-1;if(Po(e[n],t))return n}return-1},Pn.startCase=Ks,Pn.startsWith=function(e,t,n){return e=bs(e),n=null==n?0:sr(hs(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Pn.subtract=Sl,Pn.sum=function(e){return e&&e.length?Kt(e,rl):0},Pn.sumBy=function(e,t){return e&&e.length?Kt(e,la(t,2)):0},Pn.template=function(e,t,r){var i=Pn.templateSettings;r&&xa(e,t,r)&&(t=n),e=bs(e),t=ws({},t,i,Qi);var a,o,s=ws({},t.imports,i.imports,Qi),l=Es(s),c=Qt(s,l),d=0,u=t.interpolate||ye,p="__p += '",f=Oe((t.escape||ye).source+"|"+u.source+"|"+(u===Q?pe:ye).source+"|"+(t.evaluate||ye).source+"|$","g"),h="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++at+"]")+"\n";e.replace(f,(function(t,n,r,i,s,l){return r||(r=i),p+=e.slice(d,l).replace(we,an),n&&(a=!0,p+="' +\n__e("+n+") +\n'"),s&&(o=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),p+="';\n";var m=Ae.call(t,"variable")&&t.variable;if(m){if(de.test(m))throw new je("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";p=(o?p.replace(W,""):p).replace(V,"$1").replace(Y,"$1;"),p="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Qs((function(){return Se(l,h+"return "+p).apply(n,c)}));if(g.source=p,Go(g))throw g;return g},Pn.times=function(e,t){if((e=hs(e))<1||e>p)return[];var n=h,r=xn(e,h);t=la(t),e-=h;for(var i=Xt(r,t);++n<e;)t(n);return i},Pn.toFinite=fs,Pn.toInteger=hs,Pn.toLength=ms,Pn.toLower=function(e){return bs(e).toLowerCase()},Pn.toNumber=gs,Pn.toSafeInteger=function(e){return e?sr(hs(e),-9007199254740991,p):0===e?e:0},Pn.toString=bs,Pn.toUpper=function(e){return bs(e).toUpperCase()},Pn.trim=function(e,t,r){if((e=bs(e))&&(r||t===n))return Gt(e);if(!e||!(t=ci(t)))return e;var i=fn(e),a=fn(t);return wi(i,en(i,a),tn(i,a)+1).join("")},Pn.trimEnd=function(e,t,r){if((e=bs(e))&&(r||t===n))return e.slice(0,hn(e)+1);if(!e||!(t=ci(t)))return e;var i=fn(e);return wi(i,0,tn(i,fn(t))+1).join("")},Pn.trimStart=function(e,t,r){if((e=bs(e))&&(r||t===n))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=fn(e);return wi(i,en(i,fn(t))).join("")},Pn.truncate=function(e,t){var r=30,i="...";if(es(t)){var a="separator"in t?t.separator:a;r="length"in t?hs(t.length):r,i="omission"in t?ci(t.omission):i}var o=(e=bs(e)).length;if(on(e)){var s=fn(e);o=s.length}if(r>=o)return e;var l=r-pn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(a===n)return c+i;if(s&&(l+=c.length-l),as(a)){if(e.slice(l).search(a)){var d,u=c;for(a.global||(a=Oe(a.source,bs(fe.exec(a))+"g")),a.lastIndex=0;d=a.exec(u);)var p=d.index;c=c.slice(0,p===n?l:p)}}else if(e.indexOf(ci(a),l)!=l){var f=c.lastIndexOf(a);f>-1&&(c=c.slice(0,f))}return c+i},Pn.unescape=function(e){return(e=bs(e))&&K.test(e)?e.replace(U,mn):e},Pn.uniqueId=function(e){var t=++Ne;return bs(e)+t},Pn.upperCase=Xs,Pn.upperFirst=Gs,Pn.each=bo,Pn.eachRight=xo,Pn.first=Ya,sl(Pn,(wl={},yr(Pn,(function(e,t){Ae.call(Pn.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pn[e].placeholder=Pn})),Ot(["drop","take"],(function(e,t){Vn.prototype[e]=function(r){r=r===n?1:bn(hs(r),0);var i=this.__filtered__&&!t?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=xn(r,i.__takeCount__):i.__views__.push({size:xn(r,h),type:e+(i.__dir__<0?"Right":"")}),i},Vn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:la(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return Ir(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Ao(la(e)))},Vn.prototype.slice=function(e,t){e=hs(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Vn(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(r=(t=hs(t))<0?r.dropRight(-t):r.take(t-e)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(h)},yr(Vn.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=Pn[i?"take"+("last"==t?"Right":""):t],o=i||/^find/.test(t);a&&(Pn.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Vn,c=s[0],d=l||Vo(t),u=function(e){var t=a.apply(Pn,Rt([e],s));return i&&p?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var p=this.__chain__,f=!!this.__actions__.length,h=o&&!p,m=l&&!f;if(!o&&d){t=m?t:new Vn(this);var g=e.apply(t,s);return g.__actions__.push({func:fo,args:[u],thisArg:n}),new Wn(g,p)}return h&&m?e.apply(this,s):(g=this.thru(u),h?i?g.value()[0]:g.value():g)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ie[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Pn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Vo(i)?i:[],e)}return this[n]((function(n){return t.apply(Vo(n)?n:[],e)}))}})),yr(Vn.prototype,(function(e,t){var n=Pn[t];if(n){var r=n.name+"";Ae.call(En,r)||(En[r]=[]),En[r].push({name:t,func:n})}})),En[Pi(n,2).name]=[{name:"wrapper",func:n}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Di(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Di(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Di(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Vo(e),r=t<0,i=n?e.length:0,a=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=xn(t,e+o);break;case"takeRight":e=bn(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,s=a.end,l=s-o,c=r?s:o-1,d=this.__iteratees__,u=d.length,p=0,f=xn(l,this.__takeCount__);if(!n||!r&&i==l&&f==l)return hi(e,this.__actions__);var h=[];e:for(;l--&&p<f;){for(var m=-1,g=e[c+=t];++m<u;){var v=d[m],b=v.iteratee,x=v.type,y=b(g);if(2==x)g=y;else if(!y){if(1==x)continue e;break e}}h[p++]=g}return h},Pn.prototype.at=ho,Pn.prototype.chain=function(){return po(this)},Pn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Pn.prototype.next=function(){this.__values__===n&&(this.__values__=ps(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},Pn.prototype.plant=function(e){for(var t,r=this;r instanceof Hn;){var i=Fa(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t},Pn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Vn){var t=e;return this.__actions__.length&&(t=new Vn(this)),(t=t.reverse()).__actions__.push({func:fo,args:[Ja],thisArg:n}),new Wn(t,this.__chain__)}return this.thru(Ja)},Pn.prototype.toJSON=Pn.prototype.valueOf=Pn.prototype.value=function(){return hi(this.__wrapped__,this.__actions__)},Pn.prototype.first=Pn.prototype.head,Ze&&(Pn.prototype[Ze]=function(){return this}),Pn}();mt?((mt.exports=gn)._=gn,ht._=gn):ft._=gn}).call(ki)}(Zj,Zj.exports);var Qj=Zj.exports;const Jj=Y.default.forwardRef(((n,r)=>{var{value:i,readOnly:a,"data-testid":o,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:p=e.jsx(w.EyeIcon,{}),iconActiveColor:f,iconInactiveColor:h,maskChar:m="•",error:g,disableMask:v,transformInput:b,loadState:x,onMask:y,onUnmask:j,onChange:S,onFocus:k,onBlur:C,onTryAgain:O}=n,T=X(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const D=a&&Qj.isEmpty(i),[I,E]=t.useState(!v),[_,M]=t.useState(i||"");t.useEffect((()=>{M(i)}),[i]);const R=e=>{L(!1),k&&k(e)},A=e=>{L(!0),C&&C(e)},N=e=>{let t=e.target.value;switch(b){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},B=()=>{a&&O&&O()},F=()=>{L(!I)},L=e=>{E(e),e?y&&y():j&&j()},P=()=>!(null==_?void 0:_.toString().length)||v,z=()=>{const t=P();return!D&&e.jsx(Hj,Object.assign({"data-testid":"icon-"+(I?"masked":"unmasked"),onClick:t?void 0:F,$isDisabled:t,$inactiveColor:h,$activeColor:f},{children:I?p:u}))};return e.jsx("div",Object.assign({"aria-busy":"loading"===x,"aria-live":"polite"},{children:(()=>{if(a)switch(x){case"fail":return e.jsxs(Gj,Object.assign({onClick:B,"data-testid":"try-again-button"},{children:[e.jsxs(qj,{children:[e.jsx(Kj,{}),e.jsx(Xj,{children:"Error"})]}),e.jsx(Uj,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return e.jsxs(Wj,{children:[e.jsx(Yj,{}),e.jsx(Vj,{children:"Retrieving..."})]})}return e.jsx(zj,Object.assign({ref:r,"data-testid":`${o||"masked-input"}${I?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:z()},position:"right"},onFocus:a?void 0:R,onBlur:a?void 0:A,onClick:a?F:void 0,onChange:N,value:D?"-":I&&!v?sc.maskValue(null==_?void 0:_.toString(),{maskChar:m,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):_,readOnly:a,error:g,$isDisabled:P()},T))})()}))})),eS=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-masked-input","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Jj,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},p))}))})),tS=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,nS=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Qo.Primary:Qo.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&tS}
`,rS=q.default.div`
    color: ${Qo.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&tS}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${gs.getTextStyle("BodySmall","semibold")}
                `:i.css`
                    ${gs.getTextStyle("Body","regular")}
                `}
`,iS=q.default.span`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
`,aS=q.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${nS} {
                        display: inline;
                    }

                    ${rS} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,oS=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,sS=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,lS=({bold:n,displayType:r="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const p=i.useTheme()||fl,f=ds.Body.fontSize({theme:p}),h=ds.Body.fontFamily({theme:p}),{ref:m,width:g}=Ye(),v=t.useCallback((e=>{if("inline"!==r)return!1;return sc.getTextWidth(e,`${f}rem '${h}'`)>g*s-50}),[g,r,f,h,s]),b=t.useMemo((()=>v(a)),[v,a]),x=t.useMemo((()=>c&&v(c)),[v,c]),y=b||x?"next-line":r,w=t=>{if(!o)return t;const n=o.toLowerCase().trim(),r=t.toLowerCase().indexOf(n),i=r+o.length;return-1===r?t:e.jsxs(e.Fragment,{children:[a.slice(0,r),e.jsx(iS,Object.assign({$variant:u},{children:a.slice(r,i)})),a.slice(i)]})},$=t=>e.jsxs(e.Fragment,{children:[e.jsx(oS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)})),e.jsx(sS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)}))]});return e.jsxs(aS,Object.assign({ref:m,$labelDisplayType:y},{children:[e.jsx(nS,Object.assign({"aria-label":a,$bold:n,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&b?$(a):w(a)})),c&&e.jsx(rS,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:r},{children:"middle"===d&&x?$(c):c}))]}))};function cS(e){return()=>e}function dS(e){e()}function uS(e,t){return n=>e(t(n))}function pS(e,t){return()=>e(t)}function fS(e){return void 0!==e}function hS(){}function mS(e,t){return t(e),e}function gS(e,t){return t(e)}function vS(...e){return e}function bS(e,t){return e(1,t)}function xS(e,t){e(0,t)}function yS(e){e(2)}function wS(e){return e(4)}function $S(e,t){return bS(e,function(e,t){return n=>e(t,n)}(t,0))}function jS(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function SS(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function kS(e,t){return e===t}function CS(e=kS){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function OS(e){return t=>n=>{e(n)&&t(n)}}function TS(e){return t=>uS(t,e)}function DS(e){return t=>()=>{t(e)}}function IS(e,...t){const n=function(...e){return t=>e.reduceRight(gS,t)}(...t);return(t,r)=>{switch(t){case 2:return void yS(e);case 1:return bS(e,n(r))}}}function ES(e,t){return n=>r=>{n(t=e(t,r))}}function _S(e){return t=>n=>{e>0?e--:t(n)}}function MS(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function RS(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,a)=>{const o=Math.pow(2,a);bS(e,(e=>{const s=n;n|=o,t[a]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>a=>{const o=()=>{e([a].concat(t))};n===i?o():r=o}}function AS(e){let t=e;const n=BS();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function NS(e,t){return mS(AS(t),(t=>$S(e,t)))}function BS(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function FS(e){return mS(BS(),(t=>$S(e,t)))}function LS(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:PS(),singleton:n}}const PS=()=>Symbol();function zS(...e){const t=BS(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,a)=>{const o=Math.pow(2,a);bS(e,(e=>{n[a]=e,r|=o,r===i&&xS(t,n)}))})),function(e,a){switch(e){case 2:return void yS(t);case 1:return r===i&&a(n),bS(t,a)}}}function HS(e,t=kS){return IS(e,CS(t))}function WS(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(dS)}}(...e.map((e=>bS(e,n))))}}}var VS=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(VS||{});const YS={0:"debug",3:"error",1:"log",2:"warn"},US=LS((()=>{const e=AS(3);return{log:AS(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:wS(e))&&console[YS[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function qS(e,t,n){return KS(e,t,n).callbackRef}function KS(e,t,n){const r=Y.default.useRef(null);let i=e=>{};const a=Y.default.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return i=e=>{e&&t?(null==a||a.observe(e),r.current=e):(r.current&&(null==a||a.unobserve(r.current)),r.current=null)},{callbackRef:i,ref:r}}function XS(e,t,n,r,i,a,o,s,l){const c=Y.default.useCallback((n=>{const l=function(e,t,n,r){const i=e.length;if(0===i)return null;const a=[];for(let o=0;o<i;o++){const i=e.item(o);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},VS.ERROR),c===l)continue;const d=a[a.length-1];0===a.length||d.size!==c||d.endIndex!==s-1?a.push({endIndex:s,size:c,startIndex:s}):a[a.length-1].endIndex++}return a}(n.children,t,s?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType;let u;d&&(u=c.ownerDocument.defaultView);const p=o?s?o.scrollLeft:o.scrollTop:d?s?u.scrollX||u.document.documentElement.scrollLeft:u.scrollY||u.document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,f=o?s?o.scrollWidth:o.scrollHeight:d?s?u.document.documentElement.scrollWidth:u.document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,h=o?s?o.offsetWidth:o.offsetHeight:d?s?u.innerWidth:u.innerHeight:s?c.offsetWidth:c.offsetHeight;r({scrollHeight:f,scrollTop:Math.max(p,0),viewportHeight:h}),null==a||a(s?GS("column-gap",getComputedStyle(n).columnGap,i):GS("row-gap",getComputedStyle(n).rowGap,i)),null!==l&&e(l)}),[e,t,i,a,o,r,s]);return KS(c,n,l)}function GS(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,VS.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function ZS(e,t,n){const r=Y.default.useRef(null),i=Y.default.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),a=i.width;let s,l;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;l=e.height-Math.max(0,n),s=n+t.scrollTop}else{const e=o.current.ownerDocument.defaultView;l=e.innerHeight-Math.max(0,i.top),s=i.top+e.scrollY}r.current={offsetTop:s,visibleHeight:l,visibleWidth:a},e(r.current)}),[e,t]),{callbackRef:a,ref:o}=KS(i,!0,n),s=Y.default.useCallback((()=>{i(o.current)}),[i,o]);return Y.default.useEffect((()=>{var e;if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}{const t=null==(e=o.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",s),null==t||t.addEventListener("resize",s),()=>{null==t||t.removeEventListener("scroll",s),null==t||t.removeEventListener("resize",s)}}}),[s,t,o]),a}const QS=LS((()=>{const e=BS(),t=BS(),n=AS(0),r=BS(),i=AS(0),a=BS(),o=BS(),s=AS(0),l=AS(0),c=AS(0),d=AS(0),u=BS(),p=BS(),f=AS(!1),h=AS(!1),m=AS(!1);return $S(IS(e,TS((({scrollTop:e})=>e))),t),$S(IS(e,TS((({scrollHeight:e})=>e))),o),$S(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:h,scrollBy:p,scrollContainerState:e,scrollHeight:o,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:a}}),[],{singleton:!0}),JS={lvl:0};function ek(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const a=[];for(let o=1;o<n;o++){const{index:n,value:s}=t(e[o]);a.push({end:n-1,start:r,value:i}),r=n,i=s}return a.push({end:1/0,start:r,value:i}),a}function tk(e){return e===JS}function nk(e,t){if(!tk(e))return t===e.k?e.v:t<e.k?nk(e.l,t):nk(e.r,t)}function rk(e,t,n="k"){if(tk(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=rk(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return rk(e.l,t,n)}function ik(e,t,n){return tk(e)?mk(t,n,1):t===e.k?uk(e,{k:t,v:n}):t<e.k?gk(uk(e,{l:ik(e.l,t,n)})):gk(uk(e,{r:ik(e.r,t,n)}))}function ak(){return JS}function ok(e,t,n){if(tk(e))return[];return function(e){return ek(e,(({k:e,v:t})=>({index:e,value:t})))}(ck(e,rk(e,t)[0],n))}function sk(e,t){if(tk(e))return JS;const{k:n,l:r,r:i}=e;if(t===n){if(tk(r))return i;if(tk(i))return r;{const[t,n]=hk(r);return dk(uk(e,{k:t,l:pk(r),v:n}))}}return dk(uk(e,t<n?{l:sk(r,t)}:{r:sk(i,t)}))}function lk(e){return tk(e)?[]:[...lk(e.l),{k:e.k,v:e.v},...lk(e.r)]}function ck(e,t,n){if(tk(e))return[];const{k:r,l:i,r:a,v:o}=e;let s=[];return r>t&&(s=s.concat(ck(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:o}),r<=n&&(s=s.concat(ck(a,t,n))),s}function dk(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(fk(t))return vk(uk(e,{lvl:n-1}));if(!tk(t)&&!tk(t.r))return uk(t.r,{l:uk(t,{r:t.r.l}),lvl:n,r:uk(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(fk(e))return bk(uk(e,{lvl:n-1}));if(tk(r)||tk(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=fk(t)?r.lvl-1:r.lvl;return uk(t,{l:uk(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:bk(uk(r,{l:t.r,lvl:i}))})}}function uk(e,t){return mk(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function pk(e){return tk(e.r)?e.l:dk(uk(e,{r:pk(e.r)}))}function fk(e){return tk(e)||e.lvl>e.r.lvl}function hk(e){return tk(e.r)?[e.k,e.v]:hk(e.r)}function mk(e,t,n,r=JS,i=JS){return{k:e,l:r,lvl:n,r:i,v:t}}function gk(e){return bk(vk(e))}function vk(e){const{l:t}=e;return tk(t)||t.lvl!==e.lvl?e:uk(t,{r:uk(e,{l:t.r})})}function bk(e){const{lvl:t,r:n}=e;return tk(n)||tk(n.r)||n.lvl!==t||n.r.lvl!==t?e:uk(n,{l:uk(e,{r:n.l}),lvl:t+1})}function xk(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function yk(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const wk=LS((()=>({recalcInProgress:AS(!1)})),[],{singleton:!0});function $k(e,t,n){return e[jk(e,t,n)]}function jk(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const a=Math.floor((r+i)/2),o=n(e[a],t);if(0===o)return a;if(-1===o){if(i-r<2)return a-1;i=a-1}else{if(i===r)return a;r=a+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Sk(e,t){return Math.round(e.getBoundingClientRect()[t])}function kk(e){return!tk(e.groupOffsetTree)}function Ck({index:e},t){return t===e?0:t<e?-1:1}function Ok({offset:e},t){return t===e?0:t<e?-1:1}function Tk(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:a}=$k(t,e,Ck),o=e-r,s=a*o+(o-1)*n+i;return s>0?s+n:s}function Dk(e,t){if(!kk(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Ik(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Dk("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Ek(e,t,n,r=0){return r>0&&(t=Math.max(t,$k(e,r,Ck).offset)),ek(function(e,t,n,r){const i=jk(e,t,r),a=jk(e,n,r,i);return e.slice(i,a+1)}(e,t,n,Ok),Ak)}function _k(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,VS.DEBUG);const a=e.sizeTree;let o=a,s=0;if(n.length>0&&tk(a)&&2===t.length){const e=t[0].size,r=t[1].size;o=n.reduce(((t,n)=>ik(ik(t,n,e),n+1,r)),o)}else[o,s]=function(e,t){let n=tk(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:a}=r;if(n=Math.min(n,a),tk(e)){e=ik(e,0,i);continue}const o=ok(e,a-1,t+1);if(o.some(Nk(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:a}of o)s?(t>=r||i===a)&&(e=sk(e,r)):(l=a!==i,s=!0),n>t&&t>=r&&a!==i&&(e=ik(e,t+1,a));l&&(e=ik(e,a,i))}return[e,n]}(o,t);if(o===a)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Rk(e.offsetTree,s,o,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>ik(e,t,Tk(t,u,i))),ak()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:o}}function Mk(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Rk(e,t,n,r){let i=e,a=0,o=0,s=0,l=0;if(0!==t){l=jk(i,t-1,Ck),s=i[l].offset;const e=rk(n,t-1);a=e[0],o=e[1],i.length&&i[l].size===rk(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of ok(n,t,1/0)){const t=e-a,n=t*o+s+t*r;i.push({index:e,offset:n,size:l}),a=e,s=n,o=l}return{lastIndex:a,lastOffset:s,lastSize:o,offsetTree:i}}function Ak(e){return{index:e.index,value:e}}function Nk(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Bk={offsetHeight:"height",offsetWidth:"width"},Fk=LS((([{log:e},{recalcInProgress:t}])=>{const n=BS(),r=BS(),i=NS(r,0),a=BS(),o=BS(),s=AS(0),l=AS([]),c=AS(void 0),d=AS(void 0),u=AS(((e,t)=>Sk(e,Bk[t]))),p=AS(void 0),f=AS(0),h={groupIndices:[],groupOffsetTree:ak(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:ak()},m=NS(IS(n,RS(l,e,f),ES(_k,h),CS()),h),g=NS(IS(l,CS(),ES(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),TS((({prev:e})=>e))),[]);$S(IS(l,OS((e=>e.length>0)),RS(m,f),TS((([e,t,n])=>{const r=e.reduce(((e,r,i)=>ik(e,r,Tk(r,t.offsetTree,n)||i)),ak());return{...t,groupIndices:e,groupOffsetTree:r}}))),m),$S(IS(r,RS(m),OS((([e,{lastIndex:t}])=>e<t)),TS((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),$S(c,d);const v=NS(IS(c,TS((e=>void 0===e))),!0);$S(IS(d,OS((e=>void 0!==e&&tk(wS(m).sizeTree))),TS((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const b=FS(IS(n,RS(m),ES((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:h}),TS((e=>e.changed))));bS(IS(s,ES(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),TS((e=>e.diff))),(e=>{const{groupIndices:n}=wS(m);if(e>0)xS(t,!0),xS(a,e+Mk(e,n));else if(e<0){const t=wS(g);t.length>0&&(e-=Mk(-e,t)),xS(o,e)}})),bS(IS(s,RS(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},VS.ERROR)}));const x=FS(a);$S(IS(a,RS(m),TS((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=nk(t.sizeTree,0);let a=0,o=0;for(;a<e;){const e=t.groupIndices[o],s=t.groupIndices.length===o+1?1/0:t.groupIndices[o+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),o++,a+=s+1}const s=lk(t.sizeTree);return a!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return lk(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const y=FS(IS(o,RS(m,f),TS((([e,{offsetTree:t},n])=>Tk(-e,t,n)))));return $S(IS(o,RS(m,f),TS((([e,t,n])=>{if(t.groupIndices.length>0){if(tk(t.sizeTree))return t;let r=ak();const i=wS(g);let a=0,o=0,s=0;for(;a<-e;){s=i[o];const e=i[o+1]-s-1;o++,a+=e+1}if(r=lk(t.sizeTree).reduce(((t,{k:n,v:r})=>ik(t,Math.max(0,n+e),r)),r),a!==-e){r=ik(r,0,nk(t.sizeTree,s));r=ik(r,1,rk(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Rk(t.offsetTree,0,r,n)}}{const r=lk(t.sizeTree).reduce(((t,{k:n,v:r})=>ik(t,Math.max(0,n+e),r)),ak());return{...t,sizeTree:r,...Rk(t.offsetTree,0,r,n)}}}))),m),{beforeUnshiftWith:x,data:p,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:b,shiftWith:o,shiftWithOffset:y,sizeRanges:n,sizes:m,statefulTotalCount:i,totalCount:r,trackItemSizes:v,unshiftWith:a}}),vS(US,wk),{singleton:!0});function Lk(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Pk=LS((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const a=BS(),o=BS(),s=FS(IS(a,TS(Lk)));return $S(IS(s,TS((e=>e.totalCount))),n),$S(IS(s,TS((e=>e.groupIndices))),e),$S(IS(zS(i,t,r),OS((([e,t])=>kk(t))),TS((([e,t,n])=>rk(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),CS(),TS((e=>[e]))),o),{groupCounts:a,topItemsIndexes:o}}),vS(Fk,QS)),zk=LS((([{log:e}])=>{const t=AS(!1),n=FS(IS(t,OS((e=>e)),CS()));return bS(t,(t=>{t&&wS(e)("props updated",{},VS.DEBUG)})),{didMount:n,propsReady:t}}),vS(US),{singleton:!0}),Hk=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Wk(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Hk)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Vk=LS((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:a,footerHeight:o,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:p}])=>{const f=BS(),h=BS(),m=AS(0);let g=null,v=null,b=null;function x(){g&&(g(),g=null),b&&(b(),b=null),v&&(clearTimeout(v),v=null),xS(l,!1)}return $S(IS(f,RS(n,u,r,m,s,o,p),RS(e,a,i),TS((([[e,n,r,i,a,o,s,c],u,p,m])=>{const y=Wk(e),{align:w,behavior:$,offset:j}=y,S=i-1,k=Ik(y,n,S);let C=Tk(k,n.offsetTree,u)+o;"end"===w?(C+=p+rk(n.sizeTree,k)[1]-r+m,k===S&&(C+=s)):"center"===w?C+=(p+rk(n.sizeTree,k)[1]-r+m)/2:C-=a,j&&(C+=j);const O=t=>{x(),t?(c("retrying to scroll to",{location:e},VS.DEBUG),xS(f,e)):(xS(h,!0),c("list did not change, scroll successful",{},VS.DEBUG))};if(x(),"smooth"===$){let e=!1;b=bS(t,(t=>{e=e||t})),g=jS(d,(()=>{O(e)}))}else g=jS(IS(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),O);return v=setTimeout((()=>{x()}),1200),xS(l,!0),c("scrolling from index to",{behavior:$,index:k,top:C},VS.DEBUG),{behavior:$,top:C}}))),c),{scrollTargetReached:h,scrollToIndex:f,topListHeight:m}}),vS(Fk,QS,US),{singleton:!0});function Yk(e,t){0==e?t():requestAnimationFrame((()=>{Yk(e-1,t)}))}function Uk(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const qk=LS((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:a},{didMount:o}])=>{const s=AS(!0),l=AS(0),c=AS(!0);return $S(IS(o,RS(l),OS((([e,t])=>!!t)),DS(!1)),s),$S(IS(o,RS(l),OS((([e,t])=>!!t)),DS(!1)),c),bS(IS(zS(t,o),RS(s,n,e,c),OS((([[,e],t,{sizeTree:n},r,i])=>e&&(!tk(n)||fS(r))&&!t&&!i)),RS(l)),(([,e])=>{jS(i,(()=>{xS(c,!0)})),Yk(4,(()=>{jS(r,(()=>{xS(s,!0)})),xS(a,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),vS(Fk,QS,Vk,zk),{singleton:!0});function Kk(e,t){return Math.abs(e-t)<1.01}const Xk="up",Gk="down",Zk={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Qk=LS((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:a}])=>{const o=AS(!1),s=AS(!0),l=BS(),c=BS(),d=AS(4),u=AS(0),p=NS(IS(WS(IS(HS(i),_S(1),DS(!0)),IS(HS(i),_S(1),DS(!1),SS(100))),CS()),!1),f=NS(IS(WS(IS(n,DS(!0)),IS(n,DS(!1),SS(200))),CS()),!1);$S(IS(zS(HS(i),HS(u)),TS((([e,t])=>e<=t)),CS()),s),$S(IS(s,MS(50)),c);const h=FS(IS(zS(r,HS(a),HS(t),HS(e),HS(d)),ES(((e,[{scrollHeight:t,scrollTop:n},r,i,a,o])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-o){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Zk),CS(((e,t)=>e&&e.atBottom===t.atBottom)))),m=NS(IS(r,ES(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(Kk(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),OS((e=>e.changed)),TS((e=>e.jump))),0);$S(IS(h,TS((e=>e.atBottom))),o),$S(IS(o,MS(50)),l);const g=AS(Gk);$S(IS(r,TS((({scrollTop:e})=>e)),CS(),ES(((e,t)=>wS(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Xk:Gk,prevScrollTop:t}),{direction:Gk,prevScrollTop:0}),TS((e=>e.direction))),g),$S(IS(r,MS(50),DS("none")),g);const v=AS(0);return $S(IS(p,OS((e=>!e)),DS(0)),v),$S(IS(i,MS(100),RS(p),OS((([e,t])=>!!t)),ES((([e,t],[n])=>[t,n]),[0,0]),TS((([e,t])=>t-e))),v),{atBottomState:h,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:o,isAtTop:s,isScrolling:p,lastJumpDueToItemResize:m,scrollDirection:g,scrollVelocity:v}}),vS(QS)),Jk="top",eC="bottom",tC="none";function nC(e,t,n){return"number"==typeof e?n===Xk&&t===Jk||n===Gk&&t===eC?e:0:n===Xk?t===Jk?e.main:e.reverse:t===eC?e.main:e.reverse}function rC(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const iC=LS((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const a=BS(),o=AS(0),s=AS(0),l=AS(0),c=NS(IS(zS(HS(r),HS(i),HS(n),HS(a,yk),HS(l),HS(o),HS(t),HS(e),HS(s)),TS((([e,t,n,[r,i],a,o,s,l,c])=>{const d=e-l,u=o+s,p=Math.max(n-d,0);let f=tC;const h=rC(c,Jk),m=rC(c,eC);return r-=l,i+=n+s,(r+=n+s)>e+u-h&&(f=Xk),(i-=l)<e-p+t+m&&(f=Gk),f!==tC?[Math.max(d-n-nC(a,Jk,f)-h,0),d-p-s+t+nC(a,eC,f)+m]:null})),OS((e=>null!=e)),CS(yk)),[0,0]);return{increaseViewportBy:s,listBoundary:a,overscan:l,topListHeight:o,visibleRange:c}}),vS(QS),{singleton:!0});const aC={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function oC(e,t,n,r,i,a){const{lastIndex:o,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-o,p=c,f=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:a,items:lC(e,i,a),offsetBottom:f,offsetTop:c,top:p,topItems:lC(t,i,a),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function sC(e,t,n,r,i,a){let o=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-o>=e)break;o++}const s=e+o,l=Uk(t,s);return oC(Array.from({length:s}).map(((e,t)=>({data:a[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function lC(e,t,n){if(0===e.length)return[];if(!kk(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,a=[],o=ok(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=o.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},a.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return a}const cC=LS((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},a,{listBoundary:o,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},p,{didMount:f},{recalcInProgress:h}])=>{const m=AS([]),g=AS(0),v=BS();$S(a.topItemsIndexes,m);const b=NS(IS(zS(f,h,HS(l,yk),HS(i),HS(r),HS(c),d,HS(m),HS(t),HS(n),e),OS((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),TS((([,,[e,t],n,r,i,a,o,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:p}=d,f=wS(g);if(0===n)return{...aC,totalCount:n};if(0===e&&0===t)return 0===f?{...aC,totalCount:n}:sC(f,i,r,s,l,c||[]);if(tk(p))return f>0?null:oC(function(e,t,n){if(kk(t)){const r=Dk(e,t);return[{index:rk(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(Uk(i,n),d,c),[],n,l,d,s);const h=[];if(o.length>0){const e=o[0],t=o[o.length-1];let n=0;for(const r of ok(p,e,t)){const i=r.value,a=Math.max(r.start,e),o=Math.min(r.end,t);for(let e=a;e<=o;e++)h.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!a)return oC([],h,n,l,d,s);const m=o.length>0?o[o.length-1]+1:0,v=Ek(u,e,t,m);if(0===v.length)return null;const b=n-1;return oC(mS([],(n=>{for(const r of v){const i=r.value;let a=i.offset,o=r.start;const s=i.size;if(i.offset<e){o+=Math.floor((e-i.offset+l)/(s+l));const t=o-r.start;a+=t*s+t*l}o<m&&(a+=(m-o)*s,o=m);const d=Math.min(r.end,b);for(let e=o;e<=d&&!(a>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:a,size:s}),a+=s+l}})),h,n,l,d,s)})),OS((e=>null!==e)),CS()),aC);$S(IS(e,OS(fS),TS((e=>null==e?void 0:e.length))),i),$S(IS(b,TS((e=>e.topListHeight))),u),$S(u,s),$S(IS(b,TS((e=>[e.top,e.bottom]))),o),$S(IS(b,TS((e=>e.items))),v);const x=FS(IS(b,OS((({items:e})=>e.length>0)),RS(i,e),OS((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),TS((([,e,t])=>[e-1,t])),CS(yk),TS((([e])=>e)))),y=FS(IS(b,MS(200),OS((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),TS((({items:e})=>e[0].index)),CS())),w=FS(IS(b,OS((({items:e})=>e.length>0)),TS((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),CS(xk)));return{endReached:x,initialItemCount:g,itemsRendered:v,listState:b,rangeChanged:w,startReached:y,topItemsIndexes:m,...p}}),vS(Fk,Pk,iC,qk,Vk,Qk,zk,wk),{singleton:!0}),dC=LS((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const a=BS(),o=NS(IS(zS(n,e,r,t,i),TS((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return $S(HS(o),a),{totalListHeight:o,totalListHeightChanged:a}}),vS(QS,cC),{singleton:!0}),uC=LS((([{viewportHeight:e},{totalListHeight:t}])=>{const n=AS(!1),r=NS(IS(zS(n,e,t),OS((([e])=>e)),TS((([,e,t])=>Math.max(0,e-t))),MS(0),CS()),0);return{alignToBottom:n,paddingTopAddition:r}}),vS(QS,dC),{singleton:!0});function pC(e){return!!e&&("smooth"===e?"smooth":"auto")}const fC=LS((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:i},{scrollToIndex:a},{scrolledToInitialItem:o},{didMount:s,propsReady:l},{log:c},{scrollingInProgress:d}])=>{const u=AS(!1),p=BS();let f=null;function h(e){xS(a,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=jS(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(wS(c)("scrolling to bottom due to increased size",{},VS.DEBUG),h("auto"))}));setTimeout(t,100)}return bS(IS(zS(IS(HS(t),_S(1)),s),RS(HS(u),i,o,d),TS((([[e,t],n,r,i,a])=>{let o=t&&i,s="auto";return o&&(s=((e,t)=>"function"==typeof e?pC(e(t)):t&&pC(e))(n,r||a),o=o&&!!s),{followOutputBehavior:s,shouldFollow:o,totalCount:e}})),OS((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),wS(n)?requestAnimationFrame((()=>{wS(c)("following output to ",{totalCount:r},VS.DEBUG),h(t)})):f=jS(e,(()=>{wS(c)("following output to ",{totalCount:r},VS.DEBUG),h(t),f=null}))})),bS(IS(zS(HS(u),t,l),OS((([e,,t])=>e&&t)),ES((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),OS((({refreshed:e})=>e)),RS(u,t)),(([,e])=>{wS(o)&&m(!1!==e)})),bS(p,(()=>{m(!1!==wS(u))})),bS(zS(HS(u),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:p,followOutput:u}}),vS(Fk,Qk,Vk,qk,zk,US,QS)),hC=LS((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:a,listState:o},{didMount:s}])=>($S(IS(s,RS(a),OS((([,e])=>0!==e)),RS(i,r,t,n,e),TS((([[,e],t,n,r,i,a=[]])=>sC(e,t,n,r,i,a)))),o),{})),vS(Fk,qk,cC,zk),{singleton:!0}),mC=LS((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=AS(0);return bS(IS(e,RS(r),OS((([,e])=>0!==e)),TS((([,e])=>({top:e})))),(e=>{jS(IS(n,_S(1),OS((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{xS(t,e)}))}))})),{initialScrollTop:r}}),vS(zk,QS,cC),{singleton:!0}),gC=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:a,viewportTop:o})=>t<o?{...i,align:null!=n?n:"start",behavior:r}:e>a?{...i,align:null!=n?n:"end",behavior:r}:null,vC=LS((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:a,scrollingInProgress:o,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=BS();return $S(IS(d,RS(t,l,n,a,i,r,s),RS(e),TS((([[e,t,n,r,i,a,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:p=gC,done:f,...h}=e,m=Ik(e,t,r-1),g=Tk(m,t.offsetTree,c)+i+a,v=p({itemBottom:g+rk(t.sizeTree,m)[1],itemTop:g,locationParams:{align:d,behavior:u,...h},viewportBottom:l+n-s,viewportTop:l+a});return v?f&&jS(IS(o,OS((e=>!e)),_S(wS(o)?1:2)),f):f&&f(),v})),OS((e=>null!==e))),c),{scrollIntoView:d}}),vS(Fk,QS,Vk,cC,US),{singleton:!0}),bC=LS((([{scrollVelocity:e}])=>{const t=AS(!1),n=BS(),r=AS(!1);return $S(IS(e,RS(r,t,n),OS((([e,t])=>!!t)),TS((([e,t,n,r])=>{const{enter:i,exit:a}=t;if(n){if(a(e,r))return!1}else if(i(e,r))return!0;return n})),CS()),t),bS(IS(zS(t,e,n),RS(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),vS(Qk),{singleton:!0}),xC=LS((([{scrollContainerState:e,scrollTo:t}])=>{const n=BS(),r=BS(),i=BS(),a=AS(!1),o=AS(void 0);return $S(IS(zS(n,r),TS((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),$S(IS(t,RS(r),TS((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:o,useWindowScroll:a,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),vS(QS)),yC=LS((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:a},{useWindowScroll:o,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=BS(),d=AS(void 0),u=AS(null),p=AS(null);return $S(s,u),$S(l,p),bS(IS(c,RS(t,r,o,u,p,n)),(([e,t,n,r,i,a,o])=>{const s=function(e){return lk(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==a&&(n=i.scrollTop-a.offsetTop),e({ranges:s,scrollTop:n-=o})})),$S(IS(d,OS(fS),TS(wC)),i),$S(IS(a,RS(d),OS((([,e])=>void 0!==e)),CS(),TS((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),vS(Fk,QS,qk,zk,xC));function wC(e){return{align:"start",index:0,offset:e.scrollTop}}const $C=LS((([{topItemsIndexes:e}])=>{const t=AS(0);return $S(IS(t,OS((e=>e>=0)),TS((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),vS(cC));function jC(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const SC=jC((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),kC=LS((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:a,lastJumpDueToItemResize:o,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:p},{log:f},{recalcInProgress:h}])=>{const m=FS(IS(l,RS(o),ES((([,e,t,n],[{bottom:r,items:i,offsetBottom:a,totalCount:o},s])=>{const l=r+a;let c=0;return t===o&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,o,l]}),[0,[],0,0]),OS((([e])=>0!==e)),RS(r,s,n,i,f,h),OS((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===Xk)),TS((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},VS.DEBUG),e)))));function g(n){n>0?(xS(t,{behavior:"auto",top:-n}),xS(e,0)):(xS(e,0),xS(t,{behavior:"auto",top:-n}))}return bS(IS(m,RS(e,a)),(([t,n,r])=>{r&&SC()?xS(e,n-t):g(-t)})),bS(IS(zS(NS(a,!1),e,h),OS((([e,t,n])=>!e&&!n&&0!==t)),TS((([e,t])=>t)),MS(1)),g),$S(IS(u,TS((e=>({top:-e})))),t),bS(IS(c,RS(p,d),TS((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function a(e){return e*(n+i)}if(0===t.length)return a(e);{let n=0;const i=nk(r,0);let o=0,s=0;for(;o<e;){o++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;o+r>e&&(n-=i,r=e-o+1),o+=r,n+=a(r),s++}return n}}))),(n=>{xS(e,n),requestAnimationFrame((()=>{xS(t,{top:n}),requestAnimationFrame((()=>{xS(e,0),xS(h,!1)}))}))})),{deviation:e}}),vS(QS,Qk,cC,Fk,US,wk)),CC=LS((([e,t,n,r,i,a,o,s,l,c])=>({...e,...t,...n,...r,...i,...a,...o,...s,...l,...c})),vS(iC,hC,zk,bC,dC,mC,uC,xC,vC,US)),OC=LS((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:a,itemSize:o,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:p,initialTopMostItemIndex:f,scrolledToInitialItem:h},m,g,v,{listState:b,topItemsIndexes:x,...y},{scrollToIndex:w},$,{topItemCount:j},{groupCounts:S},k])=>($S(y.rangeChanged,k.scrollSeekRangeChanged),$S(IS(k.windowViewportRect,TS((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:S,initialItemFinalLocationReached:p,initialTopMostItemIndex:f,scrolledToInitialItem:h,sizeRanges:s,topItemCount:j,topItemsIndexes:x,totalCount:d,...v,groupIndices:a,itemSize:o,listState:b,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...y,...k,...m,sizes:l,...g})),vS(Fk,qk,QS,yC,fC,cC,Vk,kC,$C,Pk,CC));function TC(e,t){const n={},r={};let i=0;const a=e.length;for(;i<a;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const DC=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function IC(t,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),o=Object.keys(n.methods||{}),s=Object.keys(n.events||{}),l=Y.default.createContext({});function c(e,t){e.propsReady&&xS(e.propsReady,!1);for(const r of i){xS(e[n.required[r]],t[r])}for(const r of a)if(r in t){xS(e[n.optional[r]],t[r])}e.propsReady&&xS(e.propsReady,!0)}function d(e){return s.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,a){switch(i){case 1:return a?n===a?void 0:(r(),n=a,t=bS(e,a),t):(r(),hS);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const u=Y.default.forwardRef(((u,p)=>{const{children:f,...h}=u,[m]=Y.default.useState((()=>mS(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:a})=>{if(a&&t.has(i))return t.get(i);const o=e(r.map((e=>n(e))));return a&&t.set(i,o),o};return n(e)}(t),(e=>{c(e,h)})))),[g]=Y.default.useState(pS(d,m));DC((()=>{for(const e of s)e in h&&bS(g[e],h[e]);return()=>{Object.values(g).map(yS)}}),[h,g,m]),DC((()=>{c(m,h)})),Y.default.useImperativeHandle(p,cS(function(e){return o.reduce(((t,r)=>(t[r]=t=>{xS(e[n.methods[r]],t)},t)),{})}(m)));const v=r;return e.jsx(l.Provider,{value:m,children:r?e.jsx(v,{...TC([...i,...a,...s],h),children:f}):f})}));return{Component:u,useEmitter:(e,t)=>{const n=Y.default.useContext(l)[e];DC((()=>bS(n,t)),[t,n])},useEmitterValue:Y.default.version.startsWith("18")?e=>{const t=Y.default.useContext(l)[e],n=Y.default.useCallback((e=>bS(t,e)),[t]);return Y.default.useSyncExternalStore(n,(()=>wS(t)),(()=>wS(t)))}:e=>{const t=Y.default.useContext(l)[e],[n,r]=Y.default.useState(pS(wS,t));return DC((()=>bS(t,(e=>{e!==n&&r(cS(e))}))),[t,n]),n},usePublisher:e=>{const t=Y.default.useContext(l);return Y.default.useCallback((n=>{xS(t[e],n)}),[t,e])}}}const EC=Y.default.createContext(void 0),_C=Y.default.createContext(void 0),MC=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function RC(e){return"self"in e}function AC(e,t,n,r=hS,i,a){const o=Y.default.useRef(null),s=Y.default.useRef(null),l=Y.default.useRef(null),c=Y.default.useCallback((n=>{let r,i,o;const c=n.target;if(function(e){return"body"in e}(c)||RC(c)){const e=RC(c)?c:c.defaultView;o=a?e.scrollX:e.scrollY,r=a?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,i=a?e.innerWidth:e.innerHeight}else o=a?c.scrollLeft:c.scrollTop,r=a?c.scrollWidth:c.scrollHeight,i=a?c.offsetWidth:c.offsetHeight;const d=()=>{e({scrollHeight:r,scrollTop:Math.max(o,0),viewportHeight:i})};n.suppressFlushSync?d():U.default.flushSync(d),null!==s.current&&(o===s.current||o<=0||o===r-i)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t,a]);return Y.default.useEffect((()=>{const e=i||o.current;return r(i||o.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",c)}}),[o,c,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),o.current.scrollBy(e)},scrollerRef:o,scrollToCallback:function(n){const r=o.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let c,d,u;RC(r)?(d=Math.max(Sk(r.document.documentElement,a?"width":"height"),a?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),c=a?r.innerWidth:r.innerHeight,u=a?window.scrollX:window.scrollY):(d=r[a?"scrollWidth":"scrollHeight"],c=Sk(r,a?"width":"height"),u=r[a?"scrollLeft":"scrollTop"]);const p=d-c;if(n.top=Math.ceil(Math.max(Math.min(p,n.top),0)),Kk(c,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(i&&t(!0));i?(s.current=n.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const NC="-webkit-sticky",BC="sticky",FC=jC((()=>{if(typeof document>"u")return BC;const e=document.createElement("div");return e.style.position=NC,e.style.position===NC?NC:BC}));function LC(e){return e}const PC=LS((()=>{const e=AS((e=>`Item ${e}`)),t=AS(null),n=AS((e=>`Group ${e}`)),r=AS({}),i=AS(LC),a=AS("div"),o=AS(hS),s=(e,t=null)=>NS(IS(r,TS((t=>t[e])),CS()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:a,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:o,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),zC=LS((([e,t])=>({...e,...t})),vS(OC,PC)),HC=({height:t})=>e.jsx("div",{style:{height:t}}),WC={overflowAnchor:"none",position:FC(),zIndex:1},VC={overflowAnchor:"none"},YC={...VC,display:"inline-block",height:"100%"},UC=Y.default.memo((function({showTopList:n=!1}){const r=cO("listState"),i=dO("sizeRanges"),a=cO("useWindowScroll"),o=cO("customScrollParent"),s=dO("windowScrollContainerState"),l=dO("scrollContainerState"),c=o||a?s:l,d=cO("itemContent"),u=cO("context"),p=cO("groupContent"),f=cO("trackItemSizes"),h=cO("itemSize"),m=cO("log"),g=dO("gap"),v=cO("horizontalDirection"),{callbackRef:b}=XS(i,h,f,n?hS:c,m,g,o,v,cO("skipAnimationFrameInResizeObserver")),[x,y]=Y.default.useState(0);lO("deviation",(e=>{x!==e&&y(e)}));const w=cO("EmptyPlaceholder"),$=cO("ScrollSeekPlaceholder")||HC,j=cO("ListComponent"),S=cO("ItemComponent"),k=cO("GroupComponent"),C=cO("computeItemKey"),O=cO("isSeeking"),T=cO("groupIndices").length>0,D=cO("alignToBottom"),I=cO("initialItemFinalLocationReached"),E=n?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==x?x:D?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:D?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...I?{}:{visibility:"hidden"}};return!n&&0===r.totalCount&&w?e.jsx(w,{...ZC(w,u)}):e.jsx(j,{...ZC(j,u),"data-testid":n?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:E,children:(n?r.topItems:r.items).map((e=>{const n=e.originalIndex,i=C(n+r.firstItemIndex,e.data,u);return O?t.createElement($,{...ZC($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(k,{...ZC(k,u),"data-index":n,"data-item-index":e.index,"data-known-size":e.size,key:i,style:WC},p(e.index,u)):t.createElement(S,{...ZC(S,u),...QC(S,e.data),"data-index":n,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:v?YC:VC},T?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),qC={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},KC={outline:"none",overflowX:"auto",position:"relative"},XC=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),GC={position:FC(),top:0,width:"100%",zIndex:1};function ZC(e,t){if("string"!=typeof e)return{context:t}}function QC(e,t){return{item:"string"==typeof e?void 0:t}}const JC=Y.default.memo((function(){const t=cO("HeaderComponent"),n=dO("headerHeight"),r=cO("HeaderFooterTag"),i=qS(Y.default.useMemo((()=>e=>{n(Sk(e,"height"))}),[n]),!0,cO("skipAnimationFrameInResizeObserver")),a=cO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...ZC(t,a)})}):null})),eO=Y.default.memo((function(){const t=cO("FooterComponent"),n=dO("footerHeight"),r=cO("HeaderFooterTag"),i=qS(Y.default.useMemo((()=>e=>{n(Sk(e,"height"))}),[n]),!0,cO("skipAnimationFrameInResizeObserver")),a=cO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...ZC(t,a)})}):null}));function tO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return Y.default.memo((function({children:i,style:a,...o}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),p=n("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:h,scrollToCallback:m}=AC(s,c,l,d,void 0,p);return t("scrollTo",m),t("scrollBy",f),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:h,style:{...p?KC:qC,...a},tabIndex:0,...o,...ZC(l,u),children:i})}))}function nO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return Y.default.memo((function({children:i,style:a,...o}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("totalListHeight"),u=n("deviation"),p=n("customScrollParent"),f=n("context"),h=Y.default.useRef(null),m=n("scrollerRef"),{scrollByCallback:g,scrollerRef:v,scrollToCallback:b}=AC(s,c,l,m,p);return MC((()=>{var e;return v.current=p||(null==(e=h.current)?void 0:e.ownerDocument.defaultView),()=>{v.current=null}}),[v,p]),t("windowScrollTo",b),t("scrollBy",g),e.jsx(l,{ref:h,"data-virtuoso-scroller":!0,style:{position:"relative",...a,...0!==d?{height:d+u}:{}},...o,...ZC(l,f),children:i})}))}const rO=({children:t})=>{const n=Y.default.useContext(EC),r=dO("viewportHeight"),i=dO("fixedItemHeight"),a=cO("alignToBottom"),o=cO("horizontalDirection"),s=qS(Y.default.useMemo((()=>uS(r,(e=>Sk(e,o?"width":"height")))),[r,o]),!0,cO("skipAnimationFrameInResizeObserver"));return Y.default.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:XC(a),children:t})},iO=({children:t})=>{const n=Y.default.useContext(EC),r=dO("windowViewportRect"),i=dO("fixedItemHeight"),a=cO("customScrollParent"),o=ZS(r,a,cO("skipAnimationFrameInResizeObserver")),s=cO("alignToBottom");return Y.default.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),e.jsx("div",{"data-viewport-type":"window",ref:o,style:XC(s),children:t})},aO=({children:t})=>{const n=cO("TopItemListComponent")||"div",r=cO("headerHeight"),i={...GC,marginTop:`${r}px`},a=cO("context");return e.jsx(n,{style:i,...ZC(n,a),children:t})},oO=Y.default.memo((function(t){const n=cO("useWindowScroll"),r=cO("topItemsIndexes").length>0,i=cO("customScrollParent"),a=cO("context"),o=i||n?pO:uO,s=i||n?iO:rO;return e.jsxs(o,{...t,...ZC(o,a),children:[r&&e.jsx(aO,{children:e.jsx(UC,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(JC,{}),e.jsx(UC,{}),e.jsx(eO,{})]})]})})),{Component:sO,useEmitter:lO,useEmitterValue:cO,usePublisher:dO}=IC(zC,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},oO),uO=tO({useEmitter:lO,useEmitterValue:cO,usePublisher:dO}),pO=nO({useEmitter:lO,useEmitterValue:cO,usePublisher:dO}),fO=sO,hO={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},mO={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:gO,floor:vO,max:bO,min:xO,round:yO}=Math;function wO(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function $O(e,t){return e&&e.width===t.width&&e.height===t.height}function jO(e,t){return e&&e.column===t.column&&e.row===t.row}const SO=LS((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:a,scrollBy:o,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},p,f,{didMount:h,propsReady:m},{customScrollParent:g,useWindowScroll:v,windowScrollContainerState:b,windowScrollTo:x,windowViewportRect:y},w])=>{const $=AS(0),j=AS(0),S=AS(hO),k=AS({height:0,width:0}),C=AS({height:0,width:0}),O=BS(),T=BS(),D=AS(0),I=AS(null),E=AS({column:0,row:0}),_=BS(),M=BS(),R=AS(!1),A=AS(0),N=AS(!0),B=AS(!1),F=AS(!1);bS(IS(h,RS(A),OS((([e,t])=>!!t))),(()=>{xS(N,!1)})),bS(IS(zS(h,N,C,k,A,B),OS((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{xS(B,!0),Yk(1,(()=>{xS(O,e)})),jS(IS(c),(()=>{xS(t,[0,0]),xS(N,!0)}))})),$S(IS(M,OS((e=>null!=e&&e.scrollTop>0)),DS(0)),j),bS(IS(h,RS(M),OS((([,e])=>null!=e))),(([,e])=>{e&&(xS(k,e.viewport),xS(C,e.item),xS(E,e.gap),e.scrollTop>0&&(xS(R,!0),jS(IS(c,_S(1)),(e=>{xS(R,!1)})),xS(l,{top:e.scrollTop})))})),$S(IS(k,TS((({height:e})=>e))),u),$S(IS(zS(HS(k,$O),HS(C,$O),HS(E,((e,t)=>e&&e.column===t.column&&e.row===t.row)),HS(c)),TS((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),_),$S(IS(zS(HS($),r,HS(E,jO),HS(C,$O),HS(k,$O),HS(I),HS(j),HS(R),HS(N),HS(A)),OS((([,,,,,,,e])=>!e)),TS((([e,[t,n],r,i,a,o,s,,l,c])=>{const{column:d,row:u}=r,{height:p,width:f}=i,{width:h}=a;if(0===s&&(0===e||0===h))return hO;if(0===f){const t=Uk(c,e);return function(e){return{...mO,items:e}}(wO(t,t+Math.max(s-1,0),o))}const m=kO(h,f,d);let g,v;l?0===t&&0===n&&s>0?(g=0,v=s-1):(g=m*vO((t+u)/(p+u)),v=m*gO((n+u)/(p+u))-1,v=xO(e-1,bO(v,m-1)),g=xO(v,bO(0,g))):(g=0,v=-1);const b=wO(g,v,o),{bottom:x,top:y}=CO(a,r,i,b),w=gO(e/m);return{bottom:x,itemHeight:p,items:b,itemWidth:f,offsetBottom:w*p+(w-1)*u-x,offsetTop:y,top:y}}))),S),$S(IS(I,OS((e=>null!==e)),TS((e=>e.length))),$),$S(IS(zS(k,C,S,E),OS((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),TS((([e,t,{items:n},r])=>{const{bottom:i,top:a}=CO(e,r,t,n);return[a,i]})),CS(yk)),t);const L=AS(!1);$S(IS(c,RS(L),TS((([e,t])=>t||0!==e))),L);const P=FS(IS(zS(S,$),OS((([{items:e}])=>e.length>0)),RS(L),OS((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),TS((([[,e]])=>e-1)),CS())),z=FS(IS(HS(S),OS((({items:e})=>e.length>0&&0===e[0].index)),DS(0),CS())),H=FS(IS(HS(S),RS(R),OS((([{items:e},t])=>e.length>0&&!t)),TS((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),CS(xk),MS(0)));$S(H,f.scrollSeekRangeChanged),$S(IS(O,RS(k,C,$,E),TS((([e,t,n,r,i])=>{const a=Wk(e),{align:o,behavior:s,offset:l}=a;let c=a.index;"LAST"===c&&(c=r-1),c=bO(0,c,xO(r-1,c));let d=OO(t,i,n,c);return"end"===o?d=yO(d-t.height+n.height):"center"===o&&(d=yO(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=NS(IS(S,TS((e=>e.offsetBottom+e.bottom))),0);return $S(IS(y,TS((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:g,data:I,deviation:D,footerHeight:i,gap:E,headerHeight:a,increaseViewportBy:e,initialItemCount:j,itemDimensions:C,overscan:n,restoreStateFrom:M,scrollBy:o,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:O,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:v,viewportDimensions:k,windowScrollContainerState:b,windowScrollTo:x,windowViewportRect:y,...f,gridState:S,horizontalDirection:F,initialTopMostItemIndex:A,totalListHeight:W,...p,endReached:P,propsReady:m,rangeChanged:H,startReached:z,stateChanged:_,stateRestoreInProgress:R,...w}}),vS(iC,QS,Qk,bC,zk,xC,US));function kO(e,t,n){return bO(1,vO((e+n)/(vO(t)+n)))}function CO(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const a=OO(e,t,n,r[0].index);return{bottom:OO(e,t,n,r[r.length-1].index)+i,top:a}}function OO(e,t,n,r){const i=kO(e.width,n.width,t.column),a=vO(r/i),o=a*n.height+bO(0,a-1)*t.row;return o>0?o+t.row:o}const TO=LS((()=>{const e=AS((e=>`Item ${e}`)),t=AS({}),n=AS(null),r=AS("virtuoso-grid-item"),i=AS("virtuoso-grid-list"),a=AS(LC),o=AS("div"),s=AS(hS),l=(e,n=null)=>NS(IS(t,TS((t=>t[e])),CS()),n),c=AS(!1),d=AS(!1);return $S(HS(d),c),{components:t,computeItemKey:a,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:o,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),DO=LS((([e,t])=>({...e,...t})),vS(SO,TO)),IO=Y.default.memo((function(){const n=FO("gridState"),r=FO("listClassName"),i=FO("itemClassName"),a=FO("itemContent"),o=FO("computeItemKey"),s=FO("isSeeking"),l=LO("scrollHeight"),c=FO("ItemComponent"),d=FO("ListComponent"),u=FO("ScrollSeekPlaceholder"),p=FO("context"),f=LO("itemDimensions"),h=LO("gap"),m=FO("log"),g=FO("stateRestoreInProgress"),v=LO("reportReadyState"),b=qS(Y.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();f({height:e,width:t})}h({column:HO("column-gap",getComputedStyle(e).columnGap,m),row:HO("row-gap",getComputedStyle(e).rowGap,m)})}),[l,f,h,m]),!0,!1);return MC((()=>{n.itemHeight>0&&n.itemWidth>0&&v(!0)}),[n]),g?null:e.jsx(d,{className:r,ref:b,...ZC(d,p),"data-testid":"virtuoso-item-list",style:{paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},children:n.items.map((r=>{const l=o(r.index,r.data,p);return s?e.jsx(u,{...ZC(u,p),height:n.itemHeight,index:r.index,width:n.itemWidth},l):t.createElement(c,{...ZC(c,p),className:i,"data-index":r.index,key:l},a(r.index,r.data,p))}))})})),EO=Y.default.memo((function(){const t=FO("HeaderComponent"),n=LO("headerHeight"),r=FO("headerFooterTag"),i=qS(Y.default.useMemo((()=>e=>{n(Sk(e,"height"))}),[n]),!0,!1),a=FO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...ZC(t,a)})}):null})),_O=Y.default.memo((function(){const t=FO("FooterComponent"),n=LO("footerHeight"),r=FO("headerFooterTag"),i=qS(Y.default.useMemo((()=>e=>{n(Sk(e,"height"))}),[n]),!0,!1),a=FO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...ZC(t,a)})}):null})),MO=({children:t})=>{const n=Y.default.useContext(_C),r=LO("itemDimensions"),i=LO("viewportDimensions"),a=qS(Y.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return Y.default.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),e.jsx("div",{ref:a,style:XC(!1),children:t})},RO=({children:t})=>{const n=Y.default.useContext(_C),r=LO("windowViewportRect"),i=LO("itemDimensions"),a=FO("customScrollParent"),o=ZS(r,a,!1);return Y.default.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),e.jsx("div",{ref:o,style:XC(!1),children:t})},AO=Y.default.memo((function({...t}){const n=FO("useWindowScroll"),r=FO("customScrollParent"),i=r||n?zO:PO,a=r||n?RO:MO,o=FO("context");return e.jsx(i,{...t,...ZC(i,o),children:e.jsxs(a,{children:[e.jsx(EO,{}),e.jsx(IO,{}),e.jsx(_O,{})]})})})),{Component:NO,useEmitter:BO,useEmitterValue:FO,usePublisher:LO}=IC(DO,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},AO),PO=tO({useEmitter:BO,useEmitterValue:FO,usePublisher:LO}),zO=nO({useEmitter:BO,useEmitterValue:FO,usePublisher:LO});function HO(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,VS.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const WO=Y.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),VO=({children:n})=>{const[r,i]=t.useState(-1);return e.jsx(WO.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:i}},{children:n}))},YO=q.default.div`
    overflow: hidden;
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    background: ${Qo.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${ts.MaxWidth.mobileL} {
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
        background: ${Qo.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,UO=q.default.div`
    background: transparent;
    padding: 0.5rem;
`,qO=q.default.ul`
    list-style-type: none;
`,KO=q.default.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Qo.Accent.Light[3]};

    ${e=>e.$active&&i.css`
            background: ${Qo.Accent.Light[5]};
        `}
`,XO=q.default(C.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Qo.Primary};
`,GO=q.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,ZO=q.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Qo.Primary};
`,QO=q.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Qo.Accent.Light[2]};
`,JO=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,eT=q.default($p)`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Qo.Primary};
`,tT=q.default(eT)`
    outline-offset: 0.25rem;
`,nT=q.default(eT)`
    padding: 0.5rem 1rem;
`,rT=q.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,iT=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,aT=q.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.125;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Qo.Validation.Red.Icon};
`,oT=e=>"small"===e?1:1.125,sT=e=>i.css`
        height: ${oT(e)}rem;
        width: ${oT(e)}rem;
    `,lT=q.default.div`
    background: ${Qo.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,cT=q.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,dT=q.default(wp)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,uT=q.default(y.MagnifierIcon)`
    color: ${Qo.Neutral[3]};
    flex-shrink: 0;
    ${e=>sT(e.$variant)}
`,pT=q.default(is)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Qo.Neutral[3]};
    cursor: pointer;

    ${e=>i.css`
            svg {
                ${sT(e.$variant)}
            }
        `}
`,fT=t.forwardRef(((t,n)=>{var{value:r,variant:i,onClear:a}=t,o=X(t,["value","variant","onClear"]);return e.jsxs(lT,{children:[e.jsxs(cT,{children:[e.jsx(uT,{$variant:i,"aria-hidden":!0}),e.jsx(dT,Object.assign({ref:n,value:r,$variant:i},o))]}),r&&e.jsx(pT,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:e.jsx(g.CrossIcon,{"aria-hidden":!0})}))]})})),hT=({listItems:n,multiSelect:r,selectedItems:i,disableItemFocus:a,itemsLoadState:o="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:p,topScrollItem:f,onSelectItem:h,onSelectAll:m,onDismiss:g,onRetry:v,valueExtractor:b,listExtractor:x,renderListItem:y,renderCustomCallToAction:w,enableSearch:$,hideNoResultsDisplay:j,searchPlaceholder:S="Search",searchFunction:k,onSearch:C})=>{const{focusedIndex:O,setFocusedIndex:T}=t.useContext(WO),[D,I]=t.useState(""),[E,_]=t.useState(n),M=fc(o),R=uc(),A=t.useRef(),N=t.useRef(),B=t.useRef([]),F=t.useRef(),L=t.useRef(null),P=e=>x?x(e):e.toString(),z=t.useCallback((e=>!!nj(i,(t=>ij(t,e)))),[i]),H=lc((()=>k(D))),W=lc((()=>n.filter((e=>{var t;const n=P(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=D.trim().toLowerCase();return r.includes(a)||i&&i.includes(a)})))),V=(e,t)=>{T(t),null==h||h(e,(e=>b?b(e):e)(e))},Y=e=>{const t=e.target.value;I(t),null==C||C()},U=()=>{var e;I(""),null===(e=F.current)||void 0===e||e.focus(),null==C||C()},q=()=>{null==v||v()};cc("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),O<E.length-1){const e=O+1;null===(t=B.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),O>0){const e=O-1;null===(n=B.current[e])||void 0===n||n.focus(),T(e)}else 0===O&&F.current&&(F.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===B.current[O]&&(e.preventDefault(),E[O]&&V(E[O],O))}})),t.useEffect((()=>{if(!f&&L.current)return void L.current.scrollTo({top:0});const e=setTimeout((()=>{const e=n.indexOf(f);L.current&&-1!==e&&(L.current.scrollToIndex({index:e}),T(e))}),0);return()=>clearTimeout(e)}),[B,n,T,f]),t.useEffect((()=>{var e,t,r;if(R)return;if(a)return;const i=n.findIndex((e=>z(e)));F.current?(T(-1),setTimeout((()=>F.current.focus()),200)):O>0?(null===(e=L.current)||void 0===e||e.scrollToIndex({index:O,align:"center"}),setTimeout((()=>{var e;return null===(e=B.current[O])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=L.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),T(i),setTimeout((()=>{var e;return null===(e=B.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(r=L.current)||void 0===r||r.scrollToIndex({index:0}),T(0),setTimeout((()=>{var e;return null===(e=B.current[0])||void 0===e?void 0:e.focus()}),200))}),[z,a,O,n,R,T]),t.useEffect((()=>{R&&M&&(a||"success"===o&&F.current&&(T(-1),F.current.focus()))}),[R,M,o,T,a]),t.useEffect((()=>{_(""===D?n:k?H():W())}),[H,W,n,k,D]);const K=t=>r?t?e.jsx(ZO,{"aria-hidden":!0}):e.jsx(QO,{"aria-hidden":!0}):t?e.jsx(XO,{"aria-hidden":!0}):e.jsx(GO,{}),X=(t,n)=>{const r=P(t),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel;return e.jsx(lS,{displayType:c,label:i,maxLines:l,selected:n,sublabel:a,truncationType:s,variant:d})},G=(t,n)=>{if(!v||v&&"success"===o){const i=z(t),a=n===O;return e.jsx(KO,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{T(e)})(n),ref:e=>{B.current[n]=e},role:"option",tabIndex:a?0:-1,$active:a},{children:y?y(t,{selected:i}):e.jsxs(e.Fragment,{children:[K(i),X(t,i)]})}),((e,t)=>`item_${t}__${b?b(e):e}`)(t,n))}},Z=()=>{if(($||k)&&"success"===o)return e.jsx(fT,{ref:F,onChange:Y,value:D,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:d})},Q=()=>{if(r&&E.length>0&&!D&&"success"===o)return e.jsx(JO,{children:e.jsx(nT,Object.assign({onClick:m,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},J=()=>{if(!j&&(D||!$)&&0===E.length&&"success"===o)return e.jsxs(rT,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(aT,{"data-testid":"no-result-icon",$variant:d}),e.jsx(iT,Object.assign({$variant:d},{children:"No results found."}))]}))},ee=()=>{if(v&&"loading"===o){const t="small"===d?16:18;return e.jsxs(rT,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Vs,{$buttonStyle:"secondary",size:t}),e.jsx(iT,Object.assign({$variant:d},{children:"Loading..."}))]}))}},te=()=>{if(v&&"fail"===o)return e.jsxs(rT,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(aT,{"data-testid":"load-error-icon",$variant:d}),e.jsx(iT,Object.assign({$variant:d},{children:"Failed to load."}))," ",e.jsx(tT,Object.assign({onClick:q,type:"button",$variant:d},{children:"Try again."}))]}))},ne=()=>{const t="test"===process.env.NODE_ENV;return e.jsx(qO,Object.assign({role:"listbox",id:u},{children:e.jsx(fO,Object.assign({ref:L,style:{height:"100%"},data:E,customScrollParent:A.current,itemContent:(e,t)=>G(t,e)},t?{initialItemCount:E.length}:{}),t?E.length:void 0)}))};return e.jsxs(YO,Object.assign({"data-testid":"dropdown-container",ref:A,$width:p},{children:[e.jsxs(UO,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[Z(),Q(),J(),ee(),te(),ne()]})),(()=>{if(w)return e.jsx("div",Object.assign({"data-testid":"custom-cta"},{children:w(g,E)}))})()]}))},mT=q.default($p)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,gT=q.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ws.Base};

    svg {
        color: ${Qo.Neutral[3]};
        ${e=>{const t="small"===e.$variant?ds.BodySmall.fontSize:ds.Body.fontSize;return i.css`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,vT=t.forwardRef((({children:t,disabled:n,expanded:r,listboxId:i,popupRole:a,readOnly:o,variant:s},l)=>e.jsxs(mT,Object.assign({ref:l,type:"button","aria-expanded":r,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:s},{children:[t,!o&&e.jsx(gT,Object.assign({$expanded:r,$variant:s},{children:e.jsx(p.ChevronDownIcon,{"aria-hidden":!0})}))]}))));var bT=Symbol.for("immer-nothing"),xT=Symbol.for("immer-draftable"),yT=Symbol.for("immer-state"),wT="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function $T(e,...t){if("production"!==process.env.NODE_ENV){const n=wT[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var jT=Object.getPrototypeOf;function ST(e){return!!e&&!!e[yT]}function kT(e){return!!e&&(OT(e)||Array.isArray(e)||!!e[xT]||!!e.constructor?.[xT]||_T(e)||MT(e))}var CT=Object.prototype.constructor.toString();function OT(e){if(!e||"object"!=typeof e)return!1;const t=jT(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===CT}function TT(e,t){0===DT(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function DT(e){const t=e[yT];return t?t.type_:Array.isArray(e)?1:_T(e)?2:MT(e)?3:0}function IT(e,t){return 2===DT(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ET(e,t,n){const r=DT(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function _T(e){return e instanceof Map}function MT(e){return e instanceof Set}function RT(e){return e.copy_||e.base_}function AT(e,t){if(_T(e))return new Map(e);if(MT(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=OT(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[yT];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(jT(e),t)}{const t=jT(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function NT(e,t=!1){return FT(e)||ST(e)||!kT(e)||(DT(e)>1&&(e.set=e.add=e.clear=e.delete=BT),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>NT(t,!0)))),e}function BT(){$T(2)}function FT(e){return Object.isFrozen(e)}var LT,PT={};function zT(e){const t=PT[e];return t||$T(0,e),t}function HT(){return LT}function WT(e,t){t&&(zT("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function VT(e){YT(e),e.drafts_.forEach(qT),e.drafts_=null}function YT(e){e===LT&&(LT=e.parent_)}function UT(e){return LT={drafts_:[],parent_:LT,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function qT(e){const t=e[yT];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function KT(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[yT].modified_&&(VT(t),$T(4)),kT(e)&&(e=XT(t,e),t.parent_||ZT(t,e)),t.patches_&&zT("Patches").generateReplacementPatches_(n[yT].base_,e,t.patches_,t.inversePatches_)):e=XT(t,n,[]),VT(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==bT?e:void 0}function XT(e,t,n){if(FT(t))return t;const r=t[yT];if(!r)return TT(t,((i,a)=>GT(e,r,t,i,a,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return ZT(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,a=!1;3===r.type_&&(i=new Set(t),t.clear(),a=!0),TT(i,((i,o)=>GT(e,r,t,i,o,n,a))),ZT(e,t,!1),n&&e.patches_&&zT("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function GT(e,t,n,r,i,a,o){if("production"!==process.env.NODE_ENV&&i===n&&$T(5),ST(i)){const o=XT(e,i,a&&t&&3!==t.type_&&!IT(t.assigned_,r)?a.concat(r):void 0);if(ET(n,r,o),!ST(o))return;e.canAutoFreeze_=!1}else o&&n.add(i);if(kT(i)&&!FT(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;XT(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||ZT(e,i)}}function ZT(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&NT(t,n)}var QT={get(e,t){if(t===yT)return e;const n=RT(e);if(!IT(n,t))return function(e,t,n){const r=tD(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!kT(r)?r:r===eD(e.base_,t)?(rD(e),e.copy_[t]=iD(r,e)):r},has:(e,t)=>t in RT(e),ownKeys:e=>Reflect.ownKeys(RT(e)),set(e,t,n){const r=tD(RT(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=eD(RT(e),t),i=r?.[yT];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||IT(e.base_,t)))return!0;rD(e),nD(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==eD(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,rD(e),nD(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=RT(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){$T(11)},getPrototypeOf:e=>jT(e.base_),setPrototypeOf(){$T(12)}},JT={};function eD(e,t){const n=e[yT];return(n?RT(n):e)[t]}function tD(e,t){if(!(t in e))return;let n=jT(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=jT(n)}}function nD(e){e.modified_||(e.modified_=!0,e.parent_&&nD(e.parent_))}function rD(e){e.copy_||(e.copy_=AT(e.base_,e.scope_.immer_.useStrictShallowCopy_))}TT(QT,((e,t)=>{JT[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),JT.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&$T(13),JT.set.call(this,e,t,void 0)},JT.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&$T(14),QT.set.call(this,e[0],t,n,e[0])};function iD(e,t){const n=_T(e)?zT("MapSet").proxyMap_(e,t):MT(e)?zT("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:HT(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=QT;n&&(i=[r],a=JT);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}(e,t);return(t?t.scope_:HT()).drafts_.push(n),n}function aD(e){if(!kT(e)||FT(e))return e;const t=e[yT];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=AT(e,t.scope_.immer_.useStrictShallowCopy_)}else n=AT(e,!0);return TT(n,((e,t)=>{ET(n,e,aD(t))})),t&&(t.finalized_=!1),n}var oD=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&$T(6),void 0!==n&&"function"!=typeof n&&$T(7),kT(e)){const i=UT(this),a=iD(e,void 0);let o=!0;try{r=t(a),o=!1}finally{o?VT(i):YT(i)}return WT(i,n),KT(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===bT&&(r=void 0),this.autoFreeze_&&NT(r,!0),n){const t=[],i=[];zT("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}$T(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){kT(e)||$T(8),ST(e)&&(e=function(e){ST(e)||$T(10,e);return aD(e)}(e));const t=UT(this),n=iD(e,void 0);return n[yT].isManual_=!0,YT(t),n}finishDraft(e,t){const n=e&&e[yT];n&&n.isManual_||$T(9);const{scope_:r}=n;return WT(r,t),KT(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=zT("Patches").applyPatches_;return ST(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},sD=oD.produce;oD.produceWithPatches.bind(oD),oD.setAutoFreeze.bind(oD),oD.setUseStrictShallowCopy.bind(oD),oD.applyPatches.bind(oD),oD.createDraft.bind(oD),oD.finishDraft.bind(oD);var lD=fw,cD=Yw,dD=My,uD=Oi,pD=gw,fD=Ny,hD=sw,mD=Zy,gD=Object.prototype.hasOwnProperty;var vD=Ci((function(e){if(null==e)return!0;if(pD(e)&&(uD(e)||"string"==typeof e||"function"==typeof e.splice||fD(e)||mD(e)||dD(e)))return!e.length;var t=cD(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(hD(e))return!lD(e).length;for(var n in e)if(gD.call(e,n))return!1;return!0}));const bD=(e,t,n)=>{const r=sD(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],a=yD(i.keyPath);if(i.checked=t.has(a),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},xD=(e,t)=>{const[n,...r]=t;if(vD(e)||vD(n))return;const i=e.find((e=>e.key===n));return i&&r.length?xD(i.subItems,r):i},yD=e=>e.join(","),wD=e=>new Set(e.map((e=>e.join(",")))),$D=q.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,jD=q.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${Qo.Accent.Light[3]};

    ${e=>e.$active&&i.css`
            background: ${Qo.Accent.Light[5]};
        `}
`,SD=q.default.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,kD=q.default.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${Qo.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,CD=q.default.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,OD=q.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,TD=q.default(C.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Qo.Primary};
`,DD=q.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Qo.Primary};
`,ID=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:a="success",itemTruncationType:o="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:p,onSelectItem:f,onSelectAll:h,onRetry:m,enableSearch:g,hideNoResultsDisplay:v,searchPlaceholder:b="Search",onSearch:x})=>{const y=r||p,[w,$]=t.useState(""),j=w.toLowerCase().trim(),[S,k]=t.useState(!1),C=t.useRef(),T=t.useRef(),D=t.useRef([]),I=t.useRef(),E=uc(),[_,M]=t.useState([]),[R,A]=t.useState([]),N=S?R:_,B=t.useMemo((()=>{let e=0;for(const t of _)t.level>e&&(e=t.level);return e}),[_]),[F,L]=t.useState(0),[P,z]=t.useState([]),[H,W]=t.useState(0),V=e=>{const t=e.target.value;$(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==x||x()},Y=()=>{var e;$(""),k(!1),null===(e=I.current)||void 0===e||e.focus(),null==x||x()},U=()=>{null==m||m()},q=()=>{if(0===i.size){const e=[],t=[];_.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==h||h(e,t)}else null==h||h([],[])},K=lc(((e,t)=>((e,t,n,r,i)=>{const a=[],o=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var p,f;const h=s?s.level+1:0,m=s?[...s.keyPath,d.key]:[d.key],g=yD(m),v={item:d,index:a.length,indexInParent:u,parentSetSize:e.length,keyPath:m,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:h,visible:0===h||i||(null==s?void 0:s.expanded),expanded:i,checked:t.has(g),hasSubItems:!!(null===(p=d.subItems)||void 0===p?void 0:p.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(v),a.push(v),null===(f=d.subItems)||void 0===f?void 0:f.length){const e=o(d.subItems,v);if(n&&!0!==v.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?v.checked=!0:n&&(v.checked="mixed")}v.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),v.subItemIndexes=e.map((e=>e.index))}})),l};return o(e,void 0),a})(e,i,r,j,t))),X=lc((e=>{return i.size?(t=K(e,!1),sD(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>sD(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),a=e[n].keyPath.slice(0,i.length);ij(i,a)&&(r.visible=!0)}return e})))(K(e,!1));var t})),G=lc((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(j))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),Z=lc((()=>{M((e=>bD(e,i,r))),S&&A((e=>bD(e,i,r)))})),Q=(e,t,n)=>{const r=((e,t,n)=>sD(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,r.length);if(!ij(r,o))break;t.visible=n&&a.expanded&&a.visible}})))(N,e,t);L(e),W(n),S?A(r):M(r)};cc("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(N,(e=>e.visible),F+1);t&&(W((e=>e+1)),L(t.index),D.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(N,(e=>e.visible),F-1);t?(W((e=>e-1)),L(t.index),D.current[t.index].focus()):0===H&&I.current&&(I.current.focus(),W(-1),L(-1));break}case"ArrowRight":e.preventDefault(),Q(F,!0,H);break;case"ArrowLeft":e.preventDefault(),Q(F,!1,H);break;case"Space":if(document.activeElement===D.current[F]){e.preventDefault();const t=N[F];if(t.hasSubItems&&!y)return;null==f||f(t)}}})),t.useEffect((()=>{let e;"default"===u?e=X(n):"expand"===u?e=K(n,!0):"collapse"===u&&(e=K(n,!1)),M(e)}),[K,X,n,u]),t.useEffect((()=>{z(N.filter((e=>e.visible)))}),[S,N]),t.useEffect((()=>{Z()}),[r,i,Z]),t.useEffect((()=>{if(S&&w.trim().length>=3){const e=G(n),t=(e=>sD(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(K(e,!1));A(t)}}),[G,K,n,S,w]),t.useEffect((()=>{E||(I.current?(L(-1),W(-1),setTimeout((()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.focus()}),200)):D.current[F]?setTimeout((()=>{var e;return null===(e=D.current[F])||void 0===e?void 0:e.focus()}),200):(L(0),W(0),setTimeout((()=>{var e;return null===(e=D.current[0])||void 0===e?void 0:e.focus()}),200)))}),[F,H,E]);const J=()=>{if(g&&"success"===a)return e.jsx(fT,{ref:I,onChange:V,value:w,placeholder:b,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:l})},ee=()=>{if(r&&!S&&_.length>0&&"success"===a)return e.jsx(JO,{children:e.jsx(nT,Object.assign({onClick:q,type:"button",$variant:l},{children:0===i.size?"Select all":"Clear all"}))})},te=()=>{if(!v&&S&&0===R.length&&"success"===a)return e.jsxs(rT,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(aT,{$variant:l}),e.jsx(iT,Object.assign({$variant:l},{children:"No results found."}))]}))},ne=()=>{if(m&&"loading"===a){const t="small"===l?16:18;return e.jsxs(rT,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Vs,{$buttonStyle:"secondary",size:t}),e.jsx(iT,Object.assign({$variant:l},{children:"Loading..."}))]}))}},re=()=>{if(m&&"fail"===a)return e.jsxs(rT,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(aT,{"data-testid":"load-error-icon",$variant:l}),e.jsx(iT,Object.assign({$variant:l},{children:"Failed to load."}))," ",e.jsx(tT,Object.assign({onClick:U,type:"button",$variant:l},{children:"Try again."}))]}))},ie=t=>{if(r)switch(t.checked){case"mixed":return e.jsx(DD,{"aria-hidden":!0});case!0:return e.jsx(ZO,{"aria-hidden":!0});default:return e.jsx(QO,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(OD,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e.jsx(TD,{"aria-hidden":!0})}))},ae=(t,n)=>{const{level:i,visible:a,expanded:l,keyPath:c,checked:d,hasSubItems:u,indexInParent:p,parentSetSize:h}=t,m=t.index,g=H===n,v=u&&!y;return e.jsxs($D,Object.assign({$visible:a},{children:[B>0&&e.jsx(SD,{$level:i}),B>0&&!u&&r&&e.jsx(CD,{}),e.jsxs(jD,Object.assign({"aria-checked":d,"aria-selected":!!d,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":p+1,"aria-setsize":h,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),v?Q(m,!l,n):((e,t)=>{W(t),L(e),null==f||f(N[e])})(m,n)},onMouseEnter:()=>((e,t)=>{L(t.index),W(e)})(n,t),ref:e=>D.current[t.index]=e,role:"treeitem",tabIndex:g?0:-1,$active:g,$toggleable:v},{children:[u&&e.jsx(kD,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),Q(m,!l,n)},$expanded:l},{children:e.jsx(O.CaretRightIcon,{})})),ie(t),e.jsx(lS,{bold:u,searchTerm:S?j:void 0,label:t.item.label,selected:!!d,truncationType:o,maxLines:s})]}))]}),`[${c.join("---")}]`)},oe=()=>{const t="test"===process.env.NODE_ENV;return e.jsx("div",Object.assign({"aria-multiselectable":r,id:c,ref:T,role:"tree"},{children:e.jsx(fO,Object.assign({style:{height:"100%"},customScrollParent:C.current,data:P,itemContent:(e,t)=>ae(t,e)},t?{initialItemCount:P.length}:{}),t?P.length:void 0)}))};return e.jsx(YO,Object.assign({"data-testid":"dropdown-container",ref:C,$width:d},{children:e.jsxs(UO,Object.assign({"data-testid":"nested-dropdown-list"},{children:[J(),ee(),te(),ne(),re(),oe()]}))}))},ED=({selectedOptions:n,placeholder:r="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:p,valueExtractor:f,listExtractor:h,onSelectOptions:m,onShowOptions:g,onHideOptions:v,onRetry:b,optionsLoadState:x="success",optionTruncationType:y="end",renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,onBlur:S,variant:k="default",readOnly:C,alignment:O,dropdownZIndex:T})=>{const[D,I]=t.useState(n||[]),[E,_]=t.useState(!1),[M,R]=t.useState(!1),[A]=t.useState((()=>oc.generate())),N=t.useRef(),B=t.useRef();t.useEffect((()=>{I(n||[])}),[n]);const F=()=>{D&&D.length>0?(I([]),V([])):(I(i),V(i))},L=(e,t)=>{const n=[...D],r=tj(D,(e=>(f?f(e):e)===t));r>-1?n.splice(r,1):n.push(e),I(n),V(n)},P=()=>{E&&(_(!1),W(!1))},z=()=>{M||E||R(!0)},H=e=>{M&&!E&&N.current&&!N.current.contains(e.relatedTarget)&&(R(!1),null==S||S())},W=e=>{!e&&v&&v(),e&&g&&g()},V=e=>{m&&m(e)};return e.jsx(VO,{children:e.jsx(hp,{enabled:!C&&!a,isOpen:E,renderElement:()=>e.jsx(xp,Object.assign({className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:z,onBlur:H,$focused:M,$disabled:a,$readOnly:C,$error:o},{children:e.jsx(vT,Object.assign({ref:B,disabled:a,expanded:E,listboxId:A,popupRole:"listbox",readOnly:C,variant:k},{children:e.jsx(op,Object.assign({$disabled:a},{children:D&&0!==D.length?e.jsx(sp,Object.assign({$variant:k},{children:i&&D.length===i.length?"All selected":`${D.length} selected`})):e.jsx(lp,Object.assign({truncateType:y,$variant:k},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(hT,{listboxId:A,listItems:i,onSelectItem:L,onDismiss:P,valueExtractor:f,listExtractor:h,enableSearch:d,searchFunction:u,searchPlaceholder:p,multiSelect:!0,selectedItems:D,onSelectAll:F,onRetry:b,itemsLoadState:x,itemTruncationType:y,renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,variant:k,width:t}),onOpen:()=>{_(!0),W(!0),R(!0)},onClose:e=>{_(!1),W(!1),"click"!==e&&(R(!1),null==S||S())},onDismiss:()=>{var e;null===(e=B.current)||void 0===e||e.focus(),_(!1),W(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:T})})},_D=(e,t)=>{const[n,...r]=t;if(vD(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?_D(i.subItems,r):i:void 0},MD=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...MD(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},RD=({placeholder:n="Select",options:r,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:h,readOnly:m,onSearch:g,onSelectOptions:v,onShowOptions:b,onHideOptions:x,onRetry:y,onBlur:w,optionsLoadState:$="success",optionTruncationType:j="end",variant:S,alignment:k,dropdownZIndex:C})=>{const O=r,[T,D]=t.useState(c?wD(c):new Set),[I,E]=t.useState([]),[_,M]=t.useState(!1),[R,A]=t.useState(!1),[N]=t.useState((()=>oc.generate())),B=t.useRef(),F=t.useRef(),L=t.useRef();t.useEffect((()=>{const e=c||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],a=_D(e,i);a&&n.push({value:a.value,label:a.label,keyPath:i})}return n})(O,e);D(wD(e)),E(t)}),[c,O]);const P=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));D(wD(e)),E(n),q(e,n)},z=e=>{const t=K(e),n=t.map((e=>e.keyPath));E(t),D(wD(n)),q(n,t)},H=()=>{R||_||A(!0)},W=e=>{R&&!_&&B.current&&!B.current.contains(e.relatedTarget)&&(A(!1),null==w||w())},V=()=>{const{label:e,value:t}=I[0];return I.length>1?`${I.length} selected`:u?u(t)||t.toString():e},Y=e=>{if("middle"===j){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),sc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&x&&x(),e&&b&&b()},q=(e,t)=>{if(v){const n=t.map((e=>e.value));v(e,n)}},K=e=>{if(!0===e.checked)return I.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!ij(e.keyPath,n)}));{const t=[...I],n=e.hasSubItems?((e,t)=>{const n=_D(e,t);return n&&n.subItems?MD(n.subItems,t):[]})(O,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{I.find((t=>ij(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(hp,{enabled:!m&&!i,isOpen:_,renderElement:()=>e.jsx(xp,Object.assign({className:o,"data-testid":s,id:l,ref:B,tabIndex:-1,onFocus:H,onBlur:W,$focused:R,$disabled:i,$readOnly:m,$error:a},{children:e.jsx(vT,Object.assign({ref:F,disabled:i,expanded:_,listboxId:N,popupRole:"tree",readOnly:m,variant:S},{children:e.jsx(op,Object.assign({ref:L,$disabled:i},{children:vD(I)?e.jsx(lp,Object.assign({truncateType:j},{children:n})):e.jsx(sp,Object.assign({truncateType:j},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(ID,{listboxId:N,listItems:O,multiSelect:!0,selectedKeyPaths:T,itemsLoadState:$,itemTruncationType:j,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:h,onSelectItem:z,onSelectAll:P,onRetry:y,onSearch:g,variant:S,mode:d,width:t}),onOpen:()=>{M(!0),U(!0),A(!0)},onClose:e=>{M(!1),U(!1),"click"!==e&&(A(!1),null==w||w())},onDismiss:()=>{var e;null===(e=F.current)||void 0===e||e.focus(),M(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:C})},AD=({placeholder:n="Select",options:r,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:p,searchPlaceholder:f,selectableCategory:h,hideNoResultsDisplay:m,readOnly:g,onBlur:v,onSearch:b,onSelectOption:x,onShowOptions:y,onHideOptions:w,onRetry:$,optionsLoadState:j="success",optionTruncationType:S="end",variant:k,alignment:C,dropdownZIndex:O})=>{const T=r,[D,I]=t.useState(c?wD([c]):new Set),[E,_]=t.useState(),[M,R]=t.useState(!1),[A,N]=t.useState(!1),[B]=t.useState((()=>oc.generate())),F=t.useRef(),L=t.useRef(),P=t.useRef();t.useEffect((()=>{I(c?wD([c]):new Set);const e=xD(T,c||[]);_(null!=e?e:void 0)}),[c,T]);const z=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;I(wD([n])),_({label:r,value:i}),R(!1),U(!1),null===(t=L.current)||void 0===t||t.focus(),null==x||x(n,i)},H=()=>{A||M||N(!0)},W=e=>{A&&!M&&F.current&&!F.current.contains(e.relatedTarget)&&(N(!1),null==v||v())},V=()=>{const{label:e,value:t}=E;return u?u(t)||t.toString():e},Y=e=>{if("middle"===S){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),sc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&w&&w(),e&&y&&y()};return e.jsx(hp,{enabled:!g&&!i,isOpen:M,renderElement:()=>e.jsx(xp,Object.assign({className:o,"data-testid":s,id:l,ref:F,tabIndex:-1,onFocus:H,onBlur:W,$focused:A,$disabled:i,$readOnly:g,$error:a},{children:e.jsx(vT,Object.assign({ref:L,disabled:i,expanded:M,listboxId:B,popupRole:"tree",readOnly:g,variant:k},{children:e.jsx(op,Object.assign({ref:P,$disabled:i},{children:vD(E)?e.jsx(lp,Object.assign({truncateType:S},{children:n})):e.jsx(sp,Object.assign({truncateType:S},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(ID,{listboxId:B,listItems:T,selectedKeyPaths:D,selectableCategory:h,itemsLoadState:j,itemTruncationType:S,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,onSelectItem:z,onRetry:$,onSearch:b,variant:k,mode:d,width:t}),onOpen:()=>{R(!0),U(!0),N(!0)},onClose:e=>{R(!1),U(!1),"click"!==e&&(N(!1),null==v||v())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),R(!1),U(!1)},clickToToggle:!0,offset:8,alignment:C,fitAvailableHeight:!0,customZIndex:O})};var ND=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var BD=function(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}(),FD=yw;var LD=gw;var PD=function(e,t){return function(n,r){if(null==n)return n;if(!LD(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}((function(e,t){return e&&BD(e,t,FD)}));var zD=ND,HD=PD,WD=H$,VD=function(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n},YD=Oi;var UD=function(e,t,n){var r=YD(e)?zD:VD,i=arguments.length<3;return r(e,WD(t),n,i,HD)},qD=Ci(UD);const KD=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],XD=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var GD;!function(e){e.getCountries=()=>[].concat(...KD.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:XD("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const a=i.join(" ");return qD(a,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(GD||(GD={}));const ZD=n=>{var{onChange:r,value:i,allowClear:a,onClear:o,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:p,onHideOptions:f,onShowOptions:h,placeholder:m,autoComplete:g}=n,v=X(n,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[b]=t.useState(GD.getCountries()),[x,y]=t.useState(void 0),[w,$]=t.useState(""),j=t.useRef(),S=pc({ref:j,formatter:e=>GD.formatNumber(e.replace(/[^0-9]/g,""),x)});t.useEffect((()=>{const e=b.filter((e=>e.countryCode===QD(null==i?void 0:i.countryCode)))[0];y(e),$(GD.formatNumber(null==i?void 0:i.number,e))}),[i]);const k=e=>{O(w,e),r&&C(w,e)},C=(e,t)=>{const n=GD.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&JD(t.countryCode)})},O=(e,t)=>{$(GD.formatNumber(e,t)),y(t)};return e.jsx(Lj,Object.assign({ref:j,value:w,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=S();t(),O(e,x),r&&C(e,x)},allowClear:a&&!!w,onClear:()=>{o?o():$("")},onBlur:s,error:l,placeholder:m,addon:c?{type:"label",attributes:{value:JD(null==x?void 0:x.countryCode)}}:{type:"list",attributes:{placeholder:d,options:b,selectedOption:x,enableSearch:p,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:JD(e.countryCode)}),onSelectOption:k,onHideOptions:f,onShowOptions:h}},inputMode:"numeric",autoComplete:g},v))},QD=e=>e?e.replace("+",""):"",JD=e=>e?e.includes("+")?e:`+${e}`:"",eI=({className:n,"data-testid":r,selectedOption:i,minimumCharacters:a=3,fetchOptions:o,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:p,displayValueExtractor:f=e=>e.toString(),onSelectOption:h})=>{const m=i&&f(i),[g,v]=t.useState(m||""),[b,x]=t.useState(m||""),[y,w]=t.useState([]),[$,j]=t.useState(!0),[S,k]=t.useState(!1),[C,O]=t.useState(!!i),[T,D]=t.useState(i),I=t.useRef(o),E=e=>G(void 0,void 0,void 0,(function*(){k(!1),j(!0);try{const t=yield I.current(e);x(e),w(t),j(!1)}catch(e){k(!0)}})),_=t.useCallback(Zd((e=>E(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{I.current=o}),[o]),t.useEffect((()=>{g&&g.length>=a&&g!==b?_(g):_.cancel(),""===g&&T&&(h&&h(void 0,void 0),A(),D(void 0)),i&&g!==f(i)&&O(!1)}),[g,i]),t.useEffect((()=>{v(i?f(i):""),A(i),D(i)}),[i]);const M=e=>{v(e.target.value)},R=(e,t)=>{h&&h(e,t)},A=e=>{x(e?f(e):""),O(!!e),w([]),j(!0)},N=()=>{v(""),h&&h(void 0,void 0),A()},B=()=>{C||T?(A(T),v(f(T)),h&&h(T,L(T)),D(T)):N()},F=()=>g&&g.length>=a&&!C,L=e=>u?u(e):e,P=()=>e.jsx(Bx,{type:"text",value:g,onChange:M,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:N,styleType:"no-border",onBlur:g.length<a?B:void 0});return e.jsxs(cp,Object.assign({className:n,show:F(),error:d&&!F(),disabled:c,readOnly:l,testId:r,onBlur:B},{children:[l?e.jsx(e.Fragment,{children:P()}):e.jsx(np,{children:P()}),!l&&F()&&e.jsx(ap,{}),e.jsx(Tj,{listItems:y,onSelectItem:R,valueExtractor:u,listExtractor:p,itemsLoadState:S?"fail":$?"loading":"success",visible:F(),disableItemFocus:!0,onRetry:()=>E(g),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},tI=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,nI=q.default(Rx)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,rI=q.default(tp)`
    padding-right: 2.75rem;
`,iI=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:a,disabled:o,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:p=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:m,valueToStringFunction:g,listExtractor:v,displayValueExtractor:b,onSelectOption:x,listStyleWidth:y,onShowOptions:w,onHideOptions:$,onRetry:j,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:k="middle",renderCustomSelectedOption:C,renderListItem:O,renderCustomCallToAction:T}=n,D=X(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,E]=t.useState(),[_,M]=t.useState(),R=t.useRef(),A={from:t.useRef(),to:t.useRef()},[N,B]=t.useState("none");t.useEffect((()=>{E(null==r?void 0:r.from),M(null==r?void 0:r.to)}),[r]);const F=e=>t=>{t.stopPropagation(),t.preventDefault(),o||l||B("from"===e?"from":"to"===e&&I?"to":"from")},L=e=>{const t="from"===e?I:_;return b?b(t):m?m(t):null==t?void 0:t.toString()},P=(e,t)=>{if("middle"===k){let n=0;return A[e]&&A[e].current&&(n=A[e].current.getBoundingClientRect().width),sc.truncateOneLine((e=>"string"==typeof e?e:g(e)||e.toString())(t),n,120,8)}return t},z=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const n="from"===t?I:_;return n?C?C(n):e.jsx(sp,Object.assign({truncateType:k},{children:P(t,L(t))})):e.jsx(lp,Object.assign({truncateType:k},{children:P(t,i[t])}))},W=t=>e.jsx(op,Object.assign({onClick:F(t),ref:A[t],$disabled:o},{children:H(t)}));return e.jsxs(cp,Object.assign({show:"none"!==N,"data-testid":D["data-testid"],error:c&&!("none"!==N),disabled:o,readOnly:l,testId:d,onBlur:()=>{z(!1),B("none"),I&&_||(M(void 0),E(void 0))},className:s},{children:[e.jsxs(tI,{children:[e.jsx(rI,Object.assign({type:"button","data-testid":u||"selector",disabled:o,ref:R,onClick:F()},D,{children:e.jsxs(Wp,Object.assign({currentActive:(()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}})()},{children:[W("from"),W("to")]}))})),"none"===N&&I&&_&&!l&&!o&&e.jsx(nI,Object.assign({onClick:e=>{e.stopPropagation(),E(void 0),M(void 0),x&&x({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e.jsx(Ax,{"aria-hidden":!0})}))]}),"none"!==N&&e.jsx(ap,{}),(()=>{if("none"===N)return null;const t=a[N];if(t&&t.length>0){const n="from"===N?I:_;return e.jsx(Tj,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=N)?E(n):M(n),z(!1),R&&R.current&&R.current.focus(),x&&x({[i]:n},r),void("from"===i?(M(void 0),B("to"),z(!0)):B("none"));var n,r,i},onDismiss:()=>(B("none"),z(!1),R&&R.current&&R.current.focus(),void(I&&_||(M(void 0),E(void 0)))),valueExtractor:m,listExtractor:v,listStyleWidth:y,visible:!0,enableSearch:p,searchPlaceholder:h,searchFunction:f,"data-testid":`${N}-dropdown-list`,selectedItems:n?[n]:[],onRetry:j,itemsLoadState:S[N],itemTruncationType:k,renderListItem:O,renderCustomCallToAction:T})}return null})()]}))},aI=({selectedOption:n,placeholder:r="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:h,listExtractor:m,displayValueExtractor:g,onSelectOption:v,onShowOptions:b,onHideOptions:x,onRetry:y,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:j,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,onBlur:O,variant:T="default",readOnly:D,alignment:I,dropdownZIndex:E})=>{const[_,M]=t.useState(n),[R,A]=t.useState(!1),[N,B]=t.useState(!1),[F]=t.useState((()=>oc.generate())),L=t.useRef(),P=t.useRef(),z=t.useRef();t.useEffect((()=>{M(n)}),[n]);const H=(e,t)=>{var n;null===(n=P.current)||void 0===n||n.focus(),M(e),A(!1),q(!1),null==v||v(e,t)},W=()=>{R&&(A(!1),q(!1))},V=()=>{N||R||B(!0)},Y=e=>{N&&!R&&L.current&&!L.current.contains(e.relatedTarget)&&(B(!1),null==O||O())},U=e=>{if("middle"===$){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),sc.truncateOneLine((e=>"string"==typeof e?e:h(e)||e.toString())(e),t,120,8)}return e},q=e=>{e?null==b||b():null==x||x()};return e.jsx(VO,{children:e.jsx(hp,{enabled:!D&&!a,isOpen:R,renderElement:()=>e.jsx(xp,Object.assign({className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:V,onBlur:Y,$focused:N,$disabled:a,$readOnly:D,$error:o},{children:e.jsx(vT,Object.assign({ref:P,disabled:a,expanded:R,listboxId:F,popupRole:"listbox",readOnly:D,variant:T},{children:e.jsx(op,Object.assign({ref:z,$disabled:a},{children:_?j?j(_):e.jsx(sp,Object.assign({truncateType:$,$variant:T},{children:U(g?g(_):f?f(_):_.toString())})):e.jsx(lp,Object.assign({truncateType:$,$variant:T},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(hT,{listboxId:F,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:f,listExtractor:m,enableSearch:d,searchPlaceholder:p,searchFunction:u,selectedItems:_?[_]:[],onRetry:y,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,variant:T,width:t}),onOpen:()=>{A(!0),q(!0),B(!0)},onClose:e=>{A(!1),q(!1),"click"!==e&&(B(!1),null==O||O())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1),q(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:E})})},oI=q.default.div`
    overflow: hidden;
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    background: ${Qo.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${ts.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,sI=q.default.div`
    display: flex;
    align-items: baseline;
`,lI=q.default.div`
    margin: 0 0.5rem;
`,cI=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,dI=q.default(cI)`
    color: ${Qo.Neutral[3]};
`,uI=n=>{var{alignment:r="left",className:i,disabled:a,dropdownZIndex:o,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:p,optionTruncationType:f="end",placeholder:h="Select",rangeLabelPrefix:m,rangeLabelSuffix:g,readOnly:v,renderRangeLabel:b,value:x}=n,y=X(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:j,ariaLabels:S}=l,[k,C]=t.useState(H()),[O,T]=t.useState(!1),[D,I]=t.useState(!1),[E]=t.useState((()=>oc.generate())),_=$.map((e=>e.minValue)),M=Math.min(..._),R=t.useRef(),A=t.useRef(),N=t.useRef(),B=y["data-testid"]||"select-histogram";t.useEffect((()=>{x!==k&&C(H())}),[x]);const F=e=>{C(e),null==u||u(e)},L=e=>{C(e),null==p||p(e)},P=()=>{D||O||I(!0)},z=e=>{D&&!O&&R.current&&!R.current.contains(e.relatedTarget)&&(I(!1),null==d||d())};function H(){return null!=x?x:[M,M+w]}const W=t=>b?b(t):e.jsxs(exports.Text.Body,{children:[m,t,g]});return e.jsx(VO,{children:e.jsx(hp,{enabled:!v&&!a,isOpen:O,renderElement:()=>e.jsx(xp,Object.assign({className:i,"data-testid":B,id:c,ref:R,tabIndex:-1,onFocus:P,onBlur:z,$focused:D,$disabled:a,$readOnly:v,$error:s},{children:e.jsx(vT,Object.assign({ref:A,disabled:a,expanded:O,listboxId:E,popupRole:"dialog",readOnly:v,variant:"default"},{children:e.jsx(op,Object.assign({ref:N,$disabled:a},{children:_&&0!==_.length?e.jsxs(sI,{children:[W(k[0]),e.jsx(lI,{children:"-"}),W(k[1])]}):e.jsx(dI,Object.assign({truncateType:f,$variant:"default"},{children:h}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(oI,Object.assign({style:{width:t}},{children:e.jsx(_x,{interval:w,value:k,bins:$,onChange:F,onChangeEnd:L,showRangeLabels:!1,renderEmptyView:j,ariaLabels:S})})),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{var e;null===(e=A.current)||void 0===e||e.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:o})})},pI=n=>{var{value:r,ariaLabel:i,onChange:a,onChangeEnd:o}=n,s=X(n,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e.jsx(Cx,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==a||a(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:i?[i]:void 0}))},fI=q.default(exports.Text.H6)`
    text-align: right;
    color: ${Qo.Neutral[3]};

    ${e=>{if(e.disabled)return i.css`
                color: ${Qo.Neutral[4](e)};
            `}}
`,hI=({value:n,maxLength:r,disabled:i,renderCustomCounter:a})=>{const[o,s]=t.useState("");t.useEffect((()=>{s(l(`${n||""}`))}),[n,r]);const l=e=>{if(a)return a(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:Y.default.isValidElement(o)?o:e.jsx(fI,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:i},{children:o}))})},mI=q.default.div`
    display: flex;
    flex-direction: column;
`,gI=q.default.textarea`
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${ws.Base};

    ${gs.getTextStyle("Body","regular")}
    color: ${Qo.Neutral[1]};
    background: ${Qo.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Qo.Accent.Light[1]};
        box-shadow: ${Rs.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Qo.Neutral[3]};
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
                background: ${Qo.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Qo.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?i.css`
                border: 1px solid ${Qo.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Qo.Validation.Red.Border(e)};
                    box-shadow: ${Rs.InputErrorBoxShadow};
                }
            `:void 0}
`,vI=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:a,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=n,p=X(n,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[f,h]=t.useState(i);t.useEffect((()=>{h(i)}),[i]);return e.jsx(gI,Object.assign({ref:r,disabled:a,value:l?l+(null!=f?f:""):f,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(h(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;h(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:o,rows:s,maxLength:l?l.length+u:u},p))})),bI=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:a,rows:o=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=n,p=X(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,h]=t.useState(i);t.useEffect((()=>{h(i)}),[i]);return e.jsxs(mI,{children:[e.jsx(vI,Object.assign({ref:r,disabled:a,value:f,rows:o||5,onChange:e=>{const t=e.target.value;h(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},p)),d&&e.jsx(hI,{disabled:a,value:f,maxLength:d,renderCustomCounter:u})]})})),xI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,yI=q.default.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,wI=q.default(Xb)`
    margin-top: 0;
`,$I=Y.default.forwardRef(((n,r)=>{const{label:i,value:a,errorMessage:o,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:p,tabletCols:f,desktopCols:h,transformValue:m,prefix:g=""}=n,v=X(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[b,x]=t.useState(a);t.useEffect((()=>{x(a)}),[a]);return e.jsxs(lx,Object.assign({id:s,label:i,disabled:v.disabled,layoutType:u,mobileCols:p,tabletCols:f,desktopCols:h},{children:[e.jsx(vI,Object.assign({id:`${s}-base`,"data-testid":c||s,value:b,error:!!o,onChange:e=>{const t=e.target.value;x(t),d&&d(e)},ref:r,prefix:g,transformValue:m},v)),o||v.maxLength?e.jsxs(xI,{children:[o&&e.jsx(yI,{children:e.jsx(wI,Object.assign({weight:"semibold","data-testid":l||(s?`${s}-error-message`:"error-message")},{children:o}))}),v.maxLength&&e.jsx(hI,{disabled:v.disabled,value:b,maxLength:v.maxLength,renderCustomCounter:v.renderCustomCounter})]}):e.jsx(e.Fragment,{})]}))})),jI=q.default.div`
    position: relative;
`,SI=q.default(yp)`
    height: 3rem;
    gap: 0.5rem;
`,kI=q.default(wp)`
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

        ${e=>e.$active&&!e.disabled?i.css`
                    color: ${Qo.Primary};
                `:i.css`
                    color: ${Qo.Neutral[4]};
                `};
    }
`,OI=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=n?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":a=n?e.jsx(I.CircleDotIcon,{}):e.jsx(D.CircleIcon,{});break;case"tick":a=e.jsx(C.TickIcon,{});break;case"cross":a=e.jsx(g.CrossIcon,{});break;default:a=null}return e.jsx(CI,Object.assign({className:i,$active:n,disabled:r},{children:a}))},TI=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,DI=q.default.ol`
    ${e=>TI(e.bottomMargin)}
    margin-left: ${3}rem;

    ${ts.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>gs.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${Qo.Neutral[1]};
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
`,II=q.default.ul`
    ${e=>TI(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>gs.getTextStyle(e.size,"regular")}
        color: ${Qo.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,EI={Ul:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(II,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(DI,Object.assign({size:n},i,{children:r}))}},_I=q.default.div`
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
                        border-color: ${Qo.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Qo.Shadow.Red};
                        }
                    `:e.$disabled?i.css`
                        border-color: transparent;
                    `:i.css`
                        border-color: transparent;

                        :hover {
                            background: ${Qo.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?i.css`
                        border-color: ${Qo.Neutral[5]};
                    `:e.$disabled&&e.$selected?i.css`
                        border-color: ${Qo.Neutral[4]};
                    `:e.$error?i.css`
                        border-color: ${Qo.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Qo.Shadow.Red};
                        }
                    `:e.$selected?i.css`
                        border-color: ${Qo.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Qo.Shadow.Accent};
                        }
                    `:i.css`
                        background: ${Qo.Neutral[8]};
                        border-color: ${Qo.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Qo.Shadow.Accent};
                            border-color: ${Qo.Accent.Light[1]};
                        }
                    `}
`,MI=q.default.input`
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
`,RI=q.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,AI=q.default.label`
    ${e=>e.$selected&&!e.$indicator?i.css`
                ${gs.getTextStyle("H4","semibold")}
            `:i.css`
                ${gs.getTextStyle("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${ts.MaxWidth.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${ts.MaxWidth.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${Qo.Neutral[1]};

    ${e=>e.$disabled?i.css`
                color: ${Qo.Neutral[3]};
            `:e.$selected?i.css`
                color: ${Qo.Primary};
            `:void 0}
`,NI=q.default.div`
    ${gs.getTextStyle("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${gs.getFontFamily("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?i.css`
                color: ${Qo.Neutral[3]};
            `:e.$selected?i.css`
                color: ${Qo.Primary};
            `:i.css`
                color: ${Qo.Neutral[1]};
            `}
`,BI=q.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?i.css`
                        background: ${Qo.Neutral[8]};
                    `:e.$disabled?i.css``:i.css`
                        :hover {
                            background: ${Qo.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?i.css`
                        background: ${Qo.Neutral[6]};
                    `:e.$error?i.css`
                        background: ${Qo.Neutral[8]};
                    `:e.$selected?i.css`
                        background: ${Qo.Accent.Light[5]};
                    `:i.css`
                        background: ${Qo.Neutral[8]};
                    `}
`,FI=q.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,LI=q.default.button`
    color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Validation.Red.Icon};
    white-space: nowrap;
    ${gs.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,PI=q.default.button`
    color: ${e=>e.disabled?Qo.Neutral[3]:Qo.Primary};
    ${gs.getTextStyle("H4","semibold")}
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
`,zI=q.default.div`
    width: 100%;
    color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,HI=q.default(al)`
    width: 100%;
    user-select: none;
`,WI=q.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Zs({textSize:"BodySmall"})}

    ${e=>e.$disabled?i.css`
                color: ${Qo.Neutral[3]};
            `:e.$selected?i.css`
                color: ${Qo.Primary};
            `:i.css`
                color: ${Qo.Neutral[1]};
            `}
`,VI=q.default(exports.Text.BodySmall)`
    color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Validation.Red.Text};
`,YI=q.default(EI.Ul)`
    li {
        color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Validation.Red.Text};
    }
`,UI=({type:n="checkbox",indicator:i,checked:a,styleType:o="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:f,id:h,className:m,compositeSection:g,removable:v,onRemove:b,"data-testid":x,onChange:y,useContentWidth:w})=>{const{collapsible:$=!0,errors:j,children:S,initialExpanded:k}=g||{},[C,O]=t.useState(a),[T,D]=t.useState(k),I=t.useMemo((()=>{const e=Array.isArray(j)&&(null==j?void 0:j.length)>0,t=!Array.isArray(j)&&!!j;return e||t}),[j]),[E]=t.useState(oc.generate()),_=h?`${h}`:`tg-${E}`,M=t.useRef();t.useEffect((()=>{O(a)}),[a]),t.useEffect((()=>{C&&D(null==k||k)}),[C]);const R=e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":C||O(!0)}}},A=()=>{d||D(!T)},N=()=>{d||!b||b()},B=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e.jsx(OI,{type:t,active:C,disabled:d})},F=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(NI,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:C},{children:t}))},L=()=>{const t=!T&&!I;return $&&e.jsxs(PI,Object.assign({$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":T?"collapse-button":"expand-button"},{children:[T?"Show less":"Show more",T?e.jsx(r.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(p.ChevronDownIcon,{"aria-hidden":!0})]}))},P=t=>e.jsxs(e.Fragment,{children:[e.jsx(VI,Object.assign({weight:"semibold",$disabled:d},{children:"Error"})),e.jsx(YI,Object.assign({$disabled:d},{children:null==t?void 0:t.map(((t,n)=>e.jsx("li",Object.assign({id:`${_}-error-list-item-${n}`},{children:e.jsx(VI,Object.assign({weight:"semibold",$disabled:d},{children:t}))}),n)))}))]});return e.jsxs(_I,Object.assign({$selected:C,$disabled:d,className:m,$styleType:o,$error:u,$indicator:i,$useContentWidth:w,id:h,"data-testid":x},{children:[e.jsxs(BI,Object.assign({id:`${_}-header-container`,$disabled:d,$error:u,$selected:C,$indicator:i,$styleType:o},{children:[e.jsxs(FI,Object.assign({$addPadding:v},{children:[e.jsx(MI,{ref:M,name:f,id:`${_}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:R,checked:C}),i&&B(),e.jsxs(RI,{children:[e.jsx(AI,Object.assign({htmlFor:`${_}-input`,$selected:C,$indicator:i,$disabled:d,"data-testid":`${_}-toggle-label`,$maxLines:l},{children:s})),c&&F()]})]})),v&&e.jsx(LI,Object.assign({type:"button",$disabled:d,onClick:N,id:`${_}-remove-button`},{children:"Remove"}))]})),S&&e.jsxs("div",{children:[(!$||T)&&e.jsx(WI,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d},{children:S})),$&&!T&&I&&e.jsx(zI,Object.assign({$disabled:d,onClick:A,id:`${_}-error-alert`},{children:e.jsx(HI,Object.assign({type:d?"description":"error",className:m,showIcon:!0},{children:Array.isArray(j)?P(j):j}))})),L()]})]}))},qI=q.default(Si.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Qo.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${ts.MaxWidth.mobileS} {
        max-width: 100%;
    }
`,KI=q.default.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,XI=q.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ts.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,GI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${ts.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,ZI=q.default.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${ts.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,QI=q.default.div`
    display: flex;
    gap: 0.5rem;

    ${ts.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${ts.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,JI=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ts.MaxWidth.mobileS} {
        width: 6rem;
    }
`,eE=q.default(is)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Qo.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Qo.Primary};
    }
`,tE=q.default(exports.Text.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${ts.MaxWidth.tablet} {
        margin: 0;
    }

    ${ts.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,nE=q.default(wp)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Qo.Neutral[5]};
    background: ${Qo.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Qo.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Qo.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${ts.MaxWidth.mobileS} {
        width: 100%;
    }
`,rE=q.default(UI)`
    min-width: 5rem;
    flex: 1;
`,iE=q.default(Ys.Small)`
    width: 7rem;

    ${ts.MaxWidth.mobileL} {
        flex: 1;
    }

    ${ts.MaxWidth.mobileS} {
        width: 100%;
    }
`;var aE,oE,sE;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(aE||(aE={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(oE||(oE={})),function(e){e.AM="am",e.PM="pm"}(sE||(sE={}));const lE=({id:n,value:i,show:a,format:o,onChange:s,onCancel:l})=>{const c=mu.getTimeValues(o,i),[d,u]=t.useState(c.hour),[f,h]=t.useState(c.minute),[m,g]=t.useState(c.period),v=t.useRef(),b=t.useRef(),x=Ye();t.useEffect((()=>{if(a&&v.current&&v.current.focus(),a){const{hour:e,minute:t,period:n}=mu.getTimeValues(o,i);u(e),h(t),g(n)}}),[a,i,o]),t.useEffect((()=>{const e=v.current,t=b.current;return e&&e.addEventListener("keydown",y),t&&t.addEventListener("keydown",y),()=>{e&&e.removeEventListener("keydown",y),t&&t.removeEventListener("keydown",y)}}),[]);const y=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},w=t.useCallback((e=>{switch(e.currentTarget.name){case aE.MINUTE_UP:h(mu.updateMinutes(f,"add"));break;case aE.MINUTE_DOWN:h(mu.updateMinutes(f,"minus"));break;case aE.HOUR_UP:u(mu.updateHours(d,"add"));break;case aE.HOUR_DOWN:u(mu.updateHours(d,"minus"))}}),[d,f]),$=e=>{e.target.select()},j=e=>{const t=e.target.value;switch(e.target.name){case oE.HOUR:t.length<=2&&u(t);break;case oE.MINUTE:t.length<=2&&h(t)}},S=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case oE.HOUR:{const n=t>23||t<0?c.hour:mu.convertHourTo12HourFormat(e.target.value);u(n);break}case oE.MINUTE:{const n=t>59||t<0?c.minute:e.target.value;h(sc.padValue(n));break}}},k=e=>{switch(e.target.name){case sE.AM:g(hu.AM);break;case sE.PM:g(hu.PM)}},C=e=>n?`${n}-${e}`:e,O=oi({height:a?x.height+32:0});return e.jsx(qI,Object.assign({"data-testid":"animated-dropdown-wrapper",style:O},{children:e.jsxs(KI,Object.assign({ref:x.ref,"data-testid":C("timepicker-dropdown"),inert:a?void 0:""},{children:[e.jsxs(XI,{children:[e.jsxs(ZI,{children:[e.jsxs(JI,{children:[e.jsx(eE,Object.assign({"aria-label":"increase hour",name:aE.HOUR_UP,tabIndex:-1,onClick:w,"data-testid":C("hour-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(nE,{"aria-label":"hour",type:"number",name:oE.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:d,onFocus:$,onChange:j,onBlur:S,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),e.jsx(eE,Object.assign({"aria-label":"decrease hour",name:aE.HOUR_DOWN,tabIndex:-1,onClick:w,"data-testid":C("hour-decrement-button")},{children:e.jsx(p.ChevronDownIcon,{})}))]}),e.jsx(tE,{children:":"}),e.jsxs(JI,{children:[e.jsx(eE,Object.assign({"aria-label":"increase minute",name:aE.MINUTE_UP,tabIndex:-1,onClick:w,"data-testid":C("minute-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(nE,{"aria-label":"minute",type:"number",name:oE.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:b,value:f,onChange:j,onBlur:S,onFocus:$,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),e.jsx(eE,Object.assign({"aria-label":"decrease minute",name:aE.MINUTE_DOWN,tabIndex:-1,onClick:w,"data-testid":C("minute-decrement-button")},{children:e.jsx(p.ChevronDownIcon,{})}))]})]}),e.jsxs(QI,{children:[e.jsx(rE,Object.assign({checked:m===hu.AM,name:sE.AM,type:"radio",onChange:k,"data-testid":C("am-toggle"),"aria-label":"AM"},{children:"AM"})),e.jsx(rE,Object.assign({checked:m===hu.PM,name:sE.PM,type:"radio",onChange:k,"data-testid":C("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e.jsxs(GI,{children:[e.jsx(iE,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":C("cancel-button")},{children:"Cancel"})),e.jsx(iE,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===o?mu.convertTo24HourFormat({hour:d,minute:f,period:m}):`${d}:${f}${m}`,s(e)},disabled:""===d||""===f,"data-testid":C("confirm-button")},{children:"Done"}))]})]}))}))},cE=n=>{var{id:r,disabled:i=!1,error:a,value:o,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=n,p=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,h]=t.useState(!1),[m,g]=t.useState(!1),[v,b]=t.useState(""),[x,y]=t.useState(""),w=t.useRef();t.useEffect((()=>{o&&(b(o.start),y(o.end))}),[o]),cc("mousedown",(function(e){i||k(e)}),"document"),cc("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const $=()=>{S()},j=()=>{f||m||d&&d()},S=()=>{h(!1),g(!1),u&&u()},k=e=>{w.current&&!w.current.contains(e.target)&&(m||f)&&S()};return e.jsx(jI,Object.assign({ref:w,id:r},p,{children:e.jsxs(SI,Object.assign({$disabled:i,$error:a,$readOnly:l},{children:[e.jsxs(Wp,Object.assign({error:a,currentActive:f?"start":m?"end":"none"},{children:[e.jsx(kI,{onFocus:()=>{i||l||f||(g(!1),h(!0),j())},readOnly:!0,placeholder:"From",value:mu.formatDisplayValue(v,s),disabled:i,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(kI,{onFocus:()=>{i||l||m||(h(!1),g(!0),j())},readOnly:!0,placeholder:"To",value:mu.formatDisplayValue(x,s),disabled:i,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e.jsx(lE,{id:r,show:f,value:v,format:s,onCancel:$,onChange:e=>{h(!1),g(!0),b(e);c&&c({start:e,end:x})}}),e.jsx(lE,{id:r,show:m,value:x,format:s,onCancel:$,onChange:e=>{g(!1),y(e);c&&c({start:v,end:e}),""==v?h(!0):u&&u()}})]}))}))},dE=q.default(yp)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,uE=n=>{var{id:r,disabled:i=!1,error:a,value:o,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:p="left",dropdownZIndex:f,startLimit:h,endLimit:m,interval:g=15}=n,v=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[b]=t.useState((()=>oc.generate())),[x,y]=t.useState(null),[w,$]=t.useState(!1),[j,S]=t.useState(""),[k,C]=t.useState(""),[O,T]=t.useState(""),[D,I]=t.useState(""),[E,_]=t.useState(""),M=t.useRef(),R=t.useRef(),A=t.useRef(),N=t.useMemo((()=>mu.generateTimings(g,s,h,m)),[g,s,h,m]),B=t.useMemo((()=>{if(""===D)return N;const e=mu.findClosestFlooredTime(D,N);return N.slice(N.indexOf(e))}),[N,D]),F=t.useCallback((e=>mu.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(o){const n=null!==(e=F(o.start))&&void 0!==e?e:"",r=null!==(t=F(o.end))&&void 0!==t?t:"";C(n),T(r),I(n),_(r)}}),[o,F]),t.useEffect((()=>{if(a)return void $(!1);const e=F(k),t=F(O);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&mu.to24Hour(t)<mu.to24Hour(e)))return S(""),void(document.activeElement!==R.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[k,O,F,a]);const L=e=>{i||l||(x||w||null==d||d(),y(e),$(!0))},P=e=>{var t;i||l||(y(e),$(!0),null===(t=("start"===e?R:A).current)||void 0===t||t.select())};function z(e){var t;switch(e.code){case"Enter":"start"===x?H(k):"end"===x&&(w&&W(O),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":V(k,O,{})}}const H=e=>{V(e,O,{goToNextInput:!0})},W=e=>{V(k,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,a,o;const s=null!==(i=F(e))&&void 0!==i?i:D,l=null!==(a=F(t))&&void 0!==a?a:E;C(s),T(l);s===D&&l===E||null==c||c({start:s,end:l}),n&&void 0!==F(e)&&(y("end"),null===(o=A.current)||void 0===o||o.select()),r&&(y(null),$(!1),null==u||u()),I(s),_(l)},Y=e=>{e.stopPropagation(),C(""),T(""),I(""),_("");null==c||c({start:"",end:""}),y(null),$(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&x&&!w&&V(k,O,{triggerOnBlur:!0})},q=()=>{if(!l&&!i&&((null==k?void 0:k.length)>0||(null==O?void 0:O.length)>0))return e.jsx(nI,Object.assign({onClick:Y,type:"button","aria-label":"Clear"},{children:e.jsx(Ax,{"aria-hidden":!0})}))};return e.jsxs(jI,Object.assign({id:r},v,{children:[e.jsx(VO,{children:e.jsx(hp,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(dE,Object.assign({ref:M,$disabled:i,$error:a||!!j,$readOnly:l,onBlur:U},{children:[e.jsxs(Wp,Object.assign({error:a||!!j,currentActive:null===x?"none":x},{children:[e.jsx(kI,{ref:R,onFocus:()=>L("start"),placeholder:"start"===x?"hh:mm":"From",onChange:e=>C(e.target.value),value:k,disabled:i,readOnly:l,"data-testid":v["data-testid"]?`${v["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>P("start"),onKeyDown:z,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":b,"aria-autocomplete":"list"}),e.jsx(kI,{ref:A,onFocus:()=>L("end"),placeholder:"end"===x?"hh:mm":"To",onChange:e=>T(e.target.value),value:O,disabled:i,readOnly:l,"data-testid":v["data-testid"]?`${v["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>P("end"),onKeyDown:z,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":b,"aria-autocomplete":"list"})]})),q()]})),renderDropdown:()=>{if(w)return"start"===x?e.jsx(hT,{listItems:N,onSelectItem:H,selectedItems:[k],disableItemFocus:!0,topScrollItem:mu.findClosestFlooredTime(F(k),N),listboxId:b}):e.jsx(hT,{listItems:B,onSelectItem:W,selectedItems:[O],disableItemFocus:!0,topScrollItem:mu.findClosestFlooredTime(F(O),B),listboxId:b})},onClose:e=>{"outside-press"===e?(y(null),$(!1),null==u||u()):V(k,O,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===x?R:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:f})}),!a&&j&&e.jsx(Xb,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:j}))]}))},pE=t=>{var{variant:n="dial"}=t,r=X(t,["variant"]);return"dial"===n?e.jsx(cE,Object.assign({},r)):"combobox"===n?e.jsx(uE,Object.assign({},r)):void 0};q.default.div`
    position: relative;
`;const fE=q.default(wp)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,hE=n=>{var{id:r,disabled:i=!1,readOnly:a=!1,error:o,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:p}=n,f=X(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[h,m]=t.useState(!1),g=t.useRef();cc("mousedown",(function(e){i||a||x(e)}),"document"),cc("keyup",(function(e){if("Tab"===e.code)x(e)}),"document");const v=()=>{i||a||h||(m(!0),u&&u())};const b=()=>{m(!1),p&&p()},x=e=>{g.current&&!g.current.contains(e.target)&&h&&b()},y=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(yp,Object.assign({ref:g,id:r,$readOnly:a,$disabled:i,$error:o},f,{children:[e.jsx(fE,{onFocus:v,focused:h,readOnly:!0,placeholder:l||y(),value:mu.formatDisplayValue(s,c),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e.jsx(lE,{id:r,show:h,value:s,format:c,onCancel:()=>{b()},onChange:e=>{d&&d(e),b()}})]}))},mE=q.default(zx)`
    margin-right: 0.25rem;
`,gE=q.default(Bx)`
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
`,vE=q.default(gE)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,bE=q.default(exports.Text.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${Qo.Neutral[3]};
            `}}
`,xE=q.default.div`
    display: flex;
`,yE=q.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${Qo.Neutral[3]};
            `}}
`,wE=n=>{var{disabled:r,error:i,value:a,onChange:o,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:p}=n,f=X(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[h,m]=t.useState(""),[g,v]=t.useState(""),[b,x]=t.useState("none"),y=t.useRef(null),w=t.useRef(null),$=t.useRef(null),j=t.useRef(h),S=t.useRef(g),k=t.useRef(b),C=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),O=pc({ref:w,formatter:C}),T=pc({ref:$,formatter:C}),D=e=>{j.current=e,m(e)},I=e=>{S.current=e,v(e)},E=e=>{k.current=e,x(e)};t.useEffect((()=>{"floor"===b&&3===h.length&&$.current&&$.current.focus()}),[h]),t.useEffect((()=>{B(a)}),[a]);const _=e=>{E(e.target.name),e.target.select()},M=e=>{const t=e.target.name,n=e.target.value,r=N(n);"floor"===t?(D(r),r!==h&&F(r,t)):(I(r),r!==g&&F(r,t))},R=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=O();n(),D(e),F(e,t)}else{const{nextValue:e,updateCaretPosition:n}=T();n(),I(e),F(e,t)}},A=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||w.current&&"unit"===b&&0===g.length&&w.current.focus()},N=e=>/^[0-9]$/.test(e)?sc.padValue(e,!0):e.toLocaleUpperCase(),B=e=>{if(e!==$E)if(void 0===e||0===e.length)D(""),I("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];D("floor"===b?e:N(e)),I("unit"===b?n:N(n))}}},F=(e,t)=>{if(!o&&!l)return;const n={floor:j.current,unit:S.current};if(n[t]=e,o){const e=P(n);o(e)}l&&l([n.floor,n.unit])},L=()=>{if(!s&&!c)return;const e={floor:N(j.current),unit:N(S.current)};if(s){const t=P(e);s(t)}c&&c([e.floor,e.unit])},P=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":$E},z=e=>e.split("-");return e.jsxs(yp,Object.assign({},f,{ref:y,onClick:()=>{"none"===b&&w.current&&w.current.focus()},$disabled:r,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{y.current&&y.current.contains(e.relatedTarget)||"none"!==k.current&&(E("none"),L())}},{children:[e.jsx(mE,Object.assign({"data-testid":"addon",disabled:r,$readOnly:d},{children:"#"})),d&&a?(()=>{const t=a.split("-");return e.jsxs(xE,{children:[e.jsx(yE,{children:t[0]}),e.jsx(bE,{children:"-"}),e.jsx(yE,{children:t[1]})]})})():e.jsxs(e.Fragment,{children:[e.jsx(gE,{name:"floor",maxLength:3,value:h,ref:w,onFocus:_,onBlur:M,onChange:R,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==b||d?z(u)[0]:"",autoComplete:p}),e.jsx(bE,Object.assign({$inactive:0===h.length},{children:"-"})),e.jsx(vE,{name:"unit",maxLength:5,value:g,ref:$,onFocus:_,onBlur:M,onChange:R,onKeyDown:A,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==b||d?z(u)[1]:"",autoComplete:p})]})]}))},$E="Invalid unit number",jE={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Mp,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Kp,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Hf,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(_x,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},Input:Fx,InputGroup:Pj,MaskedInput:eS,Label:Zb,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:p}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(ED,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:p},f))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(AD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(RD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:p}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(aI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:p},f))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(uI,Object.assign({histogramSlider:u,error:!!r,"data-testid":o||i,id:`${i}-base`},p))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(pI,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Cx,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(iI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s},p))}))},Textarea:$I,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(hE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(pE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,a=X(t,["id","data-error-testid","children"]);return e.jsx(lx,Object.assign({id:n,"data-error-testid":r},a,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(wE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(ZD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(eI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))}},SE=q.default.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${Qo.Neutral[5]};
    }
`,kE=q.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,CE=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,OE=q.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,TE=q.default(exports.Text.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${ts.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,DE=q.default(exports.Text.BodySmall)``,IE=q.default.div`
    display: flex;
    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return i.css`
                margin-left: 8rem; // 6rem width + 2rem gap

                ${ts.MaxWidth.mobileL} {
                    margin-left: 0;
                }
            `}}
`,EE=q.default(Ys.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${ts.MaxWidth.mobileL} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`,_E=({thumbnailImageDataUrl:t,"data-testid":n,renderReplaceButton:r,onReplaceClick:i})=>e.jsxs(ME,Object.assign({"data-testid":n},{children:[e.jsx(RE,{"data-testid":n?`${n}-image`:void 0,src:t}),r&&e.jsx(AE,Object.assign({type:"button",onClick:e=>{i&&i()}},{children:"Replace"}))]})),ME=q.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,RE=q.default(ph)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${Qo.Neutral[5]};
    object-fit: cover;

    ${ts.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,AE=q.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    ${gs.getTextStyle("BodySmall","semibold")};
    color: ${Qo.Primary};
    :hover {
        color: ${Qo.PrimaryDark};
    }
`,NE=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:a,onCancel:o,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:p}=n,[f,h]=t.useState(),[m,g]=t.useState(""),v=t.useRef(),b=t.useRef();t.useEffect((()=>{h(x(c))}),[i]),t.useEffect((()=>{g(n.description||"")}),[n]);const x=e=>{if(!u)return e;const t=b&&b.current?b.current.getBoundingClientRect().width:0;return sc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(SE,Object.assign({"data-testid":`${l}-edit-display`},{children:[e.jsxs(kE,{children:[p&&e.jsx(_E,{thumbnailImageDataUrl:p}),e.jsxs(CE,{children:[e.jsxs(OE,Object.assign({ref:b},{children:[e.jsx(TE,Object.assign({weight:"semibold"},{children:f})),e.jsx(DE,{children:uh.formatFileSizeDisplay(d)})]})),e.jsx(jE.Textarea,{ref:v,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:m,maxLength:r,onChange:e=>{g(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(IE,Object.assign({$thumbnail:!!p},{children:[e.jsx(EE,Object.assign({"data-testid":`${l}-save-button`,type:"button",disabled:0===m.trim().length,onClick:()=>{v.current&&a(v.current.value.trim())}},{children:"Save"})),e.jsx(EE,Object.assign({type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:o},{children:"Cancel"}))]}))]}))},BE=q.default.li`
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
`,FE=q.default(M.DragHandleIcon)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return i.css`
                color: ${Qo.Neutral[4]};
            `}}
`,LE=q.default.div`
    background: ${Qo.Accent.Light[6]};
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;

    ${ts.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>e.$focused?i.css`
                border-color: ${Qo.Accent.Light[1]};
                box-shadow: 0 0 4px 1px ${Qo.Shadow.Accent};
            `:e.$disabled?i.css`
                background: ${Qo.Neutral[7]};
            `:e.$error?i.css`
                background: ${Qo.Validation.Red.Background};
                border-color: ${Qo.Validation.Red.Border};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return i.css`
                ${ts.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,PE=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${ts.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,zE=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,HE=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,WE=q.default.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${ts.MaxWidth.mobileL} {
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
`,VE=q.default(exports.Text.BodySmall)``,YE=q.default(VE)`
    margin-top: 0.25rem;
`,UE=q.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${Qo.Validation.Red.Text};
`,qE=q.default(UE)`
    margin-top: 0.25rem;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,KE=q.default(UE)`
    display: none;
    visibility: hidden;
    ${ts.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,XE=q.default.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
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
`,GE=q.default(mf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,ZE=q.default(is)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Qo.Neutral[3]};
    }
`,QE=t.memo((({fileItem:n,editable:r,sortable:i,wrapperWidth:a,disabled:o,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:p,description:f,progress:h=1,errorMessage:m,thumbnailImageDataUrl:v,truncateText:b=!0}=n,[x,y]=t.useState(),{activeId:w}=t.useContext(Ih),{attributes:$,listeners:j,setNodeRef:S,transform:k,transition:C}=Tb({id:d}),O=t.useRef(),T={transform:Og.Translate.toString(k),transition:C},D=Object.assign(Object.assign({style:T},$),j),I=h<1,M=uh.formatFileSizeDisplay(p),R=w?w===d?"self":"others":"none";t.useEffect((()=>{y(F(u))}),[a]);const A=()=>{l()},N=()=>{c&&c()},B=e=>{i&&e.stopPropagation()},F=e=>{if(!b)return e;const t=O&&O.current?O.current.getBoundingClientRect().width:0;return sc.truncateOneLine(e,t,t/2,t/2/8,16)},L=()=>o||!!w,P=()=>i&&!s,z=()=>e.jsxs(e.Fragment,{children:[e.jsx(VE,Object.assign({weight:f?"semibold":"regular"},{children:x})),f&&e.jsx(YE,{children:f})]});return e.jsxs(BE,Object.assign({id:d,ref:S,$sortable:P(),$disabled:L(),$focusType:R},P()?D:{},{children:[P()&&e.jsx(FE,{"data-testid":`${d}-drag-handle`,$disabled:L()}),e.jsxs(LE,Object.assign({$focused:"self"===R,$error:!!m,$loading:I,$disabled:L(),$editable:r},{children:[(()=>{let t;return t=m?e.jsxs(e.Fragment,{children:[e.jsxs(zE,Object.assign({ref:O},{children:[z(),m&&e.jsx(qE,Object.assign({weight:"semibold"},{children:m}))]})),e.jsx(WE,{children:e.jsx(VE,{children:M})}),m&&e.jsx(KE,Object.assign({weight:"semibold"},{children:m}))]}):v?e.jsxs(e.Fragment,{children:[e.jsx(_E,{thumbnailImageDataUrl:v,"data-testid":`${d}-thumbnail`}),e.jsxs(HE,{children:[e.jsx(zE,Object.assign({ref:O},{children:z()})),e.jsx(WE,{children:e.jsx(VE,{children:M})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(zE,Object.assign({ref:O},{children:z()})),e.jsx(WE,Object.assign({$hideInMobile:I},{children:e.jsx(VE,{children:M})}))]}),e.jsx(PE,Object.assign({$hasThumbnail:!!v},{children:t}))})(),!s&&(()=>{let t;return t=m?e.jsx(ZE,Object.assign({onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`},{children:e.jsx(g.CrossIcon,{"aria-hidden":!0})})):I?e.jsx(pf,{progress:h,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[r&&e.jsx(GE,Object.assign({"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:L(),onClick:N,onKeyDown:B},{children:e.jsx(_.PencilIcon,{"aria-hidden":!0})}),"edit"),e.jsx(GE,Object.assign({"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:L(),onClick:A,onKeyDown:B},{children:e.jsx(E.BinIcon,{"aria-hidden":!0})}),"delete")]}),e.jsx(XE,Object.assign({$editable:r,$error:!!m,$loading:I},{children:t}))})()]}))]}))})),JE=q.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,e_=q.default.li`
    border-top: 1px solid ${Qo.Neutral[5]};
    border-bottom: 1px solid ${Qo.Neutral[5]};

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    :not(:first-child) {
        margin-top: 2rem;
    }

    ul {
        list-style-type: none;
    }
`,t_=({fileItems:n,editableFileItems:r,fileDescriptionMaxLength:i,sortable:a,disabled:o,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,p]=t.useState({}),{setActiveId:f}=t.useContext(Ih),{width:h,ref:m}=Ye(),g=t.useRef({}),v=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>[...n].filter((e=>null!=e))),[...n])}(Lg(Mb,{activationConstraint:{distance:8}}),Lg(_v,{activationConstraint:{delay:150,tolerance:5}}),Lg($v,{coordinateGetter:Eb})),b=e=>{delete g.current[e]};t.useEffect((()=>{p(T(n))}),[n]);const x=e=>t=>{D(e.id,"display"),b(e.id);const n=Object.assign(Object.assign({},e),{description:t});l(n)},y=e=>t=>{g.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?D(e.id,"display"):c(e),b(e.id)},$=e=>()=>{D(e.id,"edit")},j=e=>()=>{c(e)},S=e=>{if(d){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),i=n.findIndex((e=>e.id===r.id)),a=fb(n,e,i);d(a)}}f(void 0)},k=e=>{const{active:t}=e;f(t.id)},C=e=>r&&uh.isSupportedImageType(e.type),O=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&C(e)&&!e.description,T=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":u[n.id]?t[n.id]=u[n.id]:t[n.id]=O(n)?"edit":"display";return t},D=(e,t)=>{p((n=>Object.assign(Object.assign({},n),{[e]:t})))},I=()=>n&&n.length>1&&a&&Object.values(u).every((e=>"display"===e)),E=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(n,u);return 0===t.length?null:t.map(((t,n)=>Array.isArray(t)?((t,n)=>{const r=t.map((t=>{const n=Object.assign({},t);return void 0!==g.current[t.id]&&(n.description=g.current[t.id]),e.jsx(NE,{fileItem:n,wrapperWidth:h,fileDescriptionMaxLength:i,onSave:x(t),onCancel:w(t),onBlur:y(t)},t.id)}));return e.jsx(e_,{children:e.jsx("ul",{children:r})},`editable-${n}`)})(t,n):e.jsx(QE,{fileItem:t,editable:C(t),wrapperWidth:h,sortable:I(),disabled:o,readOnly:s,onDelete:j(t),onEditClick:$(t)},t.id)))};return n&&0!==n.length?o||s||!I()?e.jsx(JE,Object.assign({$readOnly:s,ref:m},{children:E()})):e.jsx(lb,Object.assign({sensors:v,onDragEnd:S,onDragStart:k},{children:e.jsx(wb,Object.assign({items:n,strategy:bb},{children:e.jsx(JE,Object.assign({$readOnly:s,ref:m},{children:E()}))}))})):null},n_=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,r_=q.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,i_=q.default.div`
    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"Body"})}
`,a_=q.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${Qo.Neutral[3]};
`,o_=q.default.div`
    color: ${Qo.Neutral[3]};
    ${Zs({textSize:"BodySmall"})}
`,s_=q.default(al)`
    margin-bottom: 2rem;
`,l_=q.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${ts.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,c_=q.default(Ys.Small)`
    width: 10rem;

    ${ts.MaxWidth.mobileL} {
        width: 100%;
    }
`,d_=q.default.label`
    ${gs.getTextStyle("BodySmall","semibold")}
    color: ${Qo.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,u_=q.default(al)`
    margin-bottom: 2rem;
`,p_=q.default.div`
    background-color: ${Qo.Neutral[8]};
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,f_=q.default.div`
    background-color: ${Qo.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,h_=q.default.div`
    background-color: ${Qo.Neutral[8]};
    height: 100%;
    width: 100%;
`,m_=q.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,g_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${Qo.Neutral[8]};

    ${ts.MaxWidth.tablet} {
        border-bottom: 1px solid ${Qo.Neutral[5]};
    }
`,v_=q.default(exports.Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${ts.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,b_=q.default(is)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${Qo.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Qo.Neutral[2]};
    }
`,x_=q.default(Ys.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${ts.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,y_=q.default(jc.Default)`
    width: 100%;
`,w_=q.default.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Qo.Neutral[8]};
    border-top: 1px solid ${Qo.Neutral[5]};
`,$_=q.default(Ys.Default)`
    width: 100%;
`,j_=Y.default.createContext({mode:"default",rootNode:null});var S_=Ci((function(e){return null==e}));const k_=q.default.div`
    background-color: ${e=>e.$collapsible?Qo.Neutral[7](e):Qo.Neutral[8](e)};

    ${ts.MaxWidth.tablet} {
        background-color: ${Qo.Neutral[7]};
    }
`,C_=q.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Qo.Neutral[5]};

    ${ts.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,O_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${Qo.Neutral[8]};

    ${ts.MaxWidth.tablet} {
        background-color: transparent;
    }
`,T_=q.default(is)`
    margin: 0 0 0 auto;
`,D_=q.default(p.ChevronDownIcon)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Qo.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Qo.Neutral[2]};
    }
`,I_=q.default(exports.Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${ts.MaxWidth.tablet} {
        ${gs.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,E_=q.default(Si.div)`
    overflow: hidden;
`,__=q.default.div`
    padding: 1rem 1.25rem;
`,M_=q.default(Si.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,R_=q.default(Ys.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,A_=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:a,onExpandChange:o,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:d=!0,title:u,addon:p,children:f}=n,h=X(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:g}=t.useContext(j_),v="mobile"===m,[b,x]=t.useState(O()),[y,w]=t.useState(s),$=!v&&r,j=Ye(),S=Ye(),k=oi({height:b?j.height:0}),C=y?null!=l?l:Math.min(.5*S.height,216):S.height;t.useEffect((()=>{x(O())}),[r,a]);function O(){return!!v||(S_(a)?!r||i:a)}return e.jsxs(k_,Object.assign({$collapsible:$},{children:[e.jsx(C_,{$showDivider:c,$showMobileDivider:d}),(u||$)&&e.jsxs(O_,{children:[u&&e.jsxs(I_,Object.assign({weight:"semibold"},{children:[u," ",p&&("popover"===p.type?e.jsx(qb,{addon:p,rootNode:v?g:void 0}):null)]})),$&&e.jsx(T_,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!b;S_(a)&&x(e),o&&o(e)},"aria-label":b?"Collapse":"Expand"},{children:e.jsx(D_,{$expanded:b})}))]}),e.jsx(E_,Object.assign({"data-testid":"expandable-container","data-expanded":b,style:k},{children:e.jsx("div",Object.assign({ref:j.ref},{children:e.jsxs(__,Object.assign({},h,{children:[e.jsx(M_,Object.assign({"data-testid":"minimisable-container",$height:C,$minimisable:s},{children:e.jsx("div",Object.assign({ref:S.ref},{children:e.jsx("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof f?f(m,{minimised:y}):f}))}))})),s&&e.jsxs(R_,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{w(!y)}},{children:["View ",y?"more":"less"]}))]}))}))}))]}))},N_=q.default(A_)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${ts.MaxWidth.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${ts.MaxWidth.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,B_=q.default.div`
    display: flex;
    flex-direction: column;

    ${ts.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,F_=q.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${gs.getTextStyle("BodySmall","regular")}
    ${e=>e.$selected&&i.css`
            color: ${Qo.Primary};
        `}
`,L_=q.default.input`
    appearance: none;
`,P_=q.default(OI)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${L_}:focus-visible + & {
        outline: 2px solid ${Qo.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,z_=q.default(UI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,H_=q.default(Ys.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${ts.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,W_=q.default.div`
    background-color: ${Qo.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,V_=Object.assign((n=>{var{toggleFilterButtonLabel:r="Filters",toggleFilterButtonStyle:i="light",headerTitle:a="Filters",clearButtonDisabled:o=!1,onClear:s,onDismiss:l,onDone:c,children:d}=n,p=X(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[f,h]=t.useState(!1),m=t.useRef(null),g=t.useRef(null),v=kl.useMediaQuery({maxWidth:Jo.tablet});t.useEffect((()=>{v||x()}),[v]);const b=()=>{h(!0)},x=()=>{h(!1),l&&l()},y=()=>{h(!1),c&&c()},w=()=>{s&&s()},$=e=>"function"==typeof d?d(e):d,j=t=>e.jsxs(g_,{children:["mobile"===t&&e.jsx(b_,Object.assign({onClick:x,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(u.CrossIcon,{})})),e.jsx(v_,Object.assign({weight:"semibold"},{children:a})),e.jsx(x_,Object.assign({styleType:"link",type:"button",onClick:w,disabled:o},{children:"Clear"}))]});return e.jsx("div",Object.assign({},p,{children:v?e.jsx(j_.Provider,Object.assign({value:{mode:"mobile",rootNode:m}},{children:e.jsxs(e.Fragment,{children:[e.jsx(y_,Object.assign({"data-testid":"filter-show-button",styleType:i,onClick:b,type:"button",icon:e.jsx(u.FilterIcon,{})},{children:r})),e.jsx(rf,Object.assign({show:f,disableTransition:!0},{children:e.jsx(h_,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e.jsxs(f_,Object.assign({ref:m},{children:[j("mobile"),e.jsx(m_,{children:$("mobile")}),e.jsx(w_,{children:e.jsx($_,Object.assign({onClick:y,type:"button"},{children:"Done"}))})]}))}))}))]})})):e.jsx(j_.Provider,Object.assign({value:{mode:"default",rootNode:g}},{children:e.jsxs(p_,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:g},{children:[j("default"),$("default")]}))}))}))}),{Item:A_,Page:({onDismiss:t,onDone:n,children:r})=>e.jsxs(W_,{children:[e.jsx(b_,Object.assign({onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(h.ChevronLeftIcon,{})})),e.jsx(m_,{children:r}),e.jsx(w_,{children:e.jsx($_,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]}),Checkbox:n=>{var{selectedOptions:r,options:i,onSelect:a,labelExtractor:o,valueExtractor:s,useToggleContentWidth:l}=n,c=X(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(j_),[u,p]=t.useState(r||[]),[f,h]=t.useState(),[m,g]=t.useState(i.length),v=t.useRef(),b=t.useRef(),x=e=>()=>{const t=[...u],n=u.findIndex((t=>$(t)===$(e)));n>=0?t.splice(n,1):t.push(e),p(t),null==a||a(t)},y=()=>{const e=u.length?[]:i;p(e),null==a||a(e)},w=e=>{var t;return o?o(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=t.useCallback((()=>{if(!v.current)return void h(void 0);const e=Array.from(v.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const a=e[i].offsetTop;if(a>r&&(n++,r=a,n>2))break;t=i}g(t),h(n>2?r-8:void 0)}),[]);t.useEffect((()=>{r!==u&&p(r||[])}),[r]),t.useEffect((()=>{"default"===d?(()=>{const e=b.current?b.current.offsetTop+b.current.clientHeight:void 0;h(e)})():j()}),[i]),Ye({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:v,onResize:j});return e.jsx(N_,Object.assign({minimisable:i.length>5,minimisedHeight:f},c,{children:(t,{minimised:n})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(H_,Object.assign({styleType:"link",type:"button",onClick:y},{children:u.length?"Clear all":"Select all"})),e.jsx(B_,Object.assign({role:"group","aria-label":c.title,ref:v},{children:i.map(((r,i)=>"default"===t?((t,n,r)=>{const i=w(t),a=$(t),o=!!u.find((e=>$(e)===a));return e.jsxs(F_,Object.assign({$visible:!r||n<5,$selected:o,ref:4===n?b:void 0},{children:[e.jsx(L_,{type:"checkbox",checked:o,onChange:x(t)}),e.jsx(P_,{type:"checkbox",active:o}),i]}),a)})(r,i,n):((t,n,r)=>{const i=w(t),a=$(t),o=!!u.find((e=>$(e)===a));return e.jsx(z_,Object.assign({type:"checkbox",checked:o,$visible:!r||f&&n<=m,onChange:x(t),useContentWidth:l},{children:i}),a)})(r,i,n)))}))]})}))}}),Y_=q.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${ts.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,U_=q.default(exports.Text.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,q_=q.default.div`
    display: flex;
    align-items: flex-start;
`,K_=q.default.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${ts.MaxWidth.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,X_=()=>e.jsxs(Y_,Object.assign({"data-testid":"download-app-section"},{children:[e.jsx(U_,Object.assign({weight:"semibold"},{children:"Download the app"})),e.jsxs(q_,{children:[e.jsx(K_,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(K_,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),G_={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Z_={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Q_={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var J_;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${Pl(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogoAttribute=e=>{switch(e){case"bookingsg":return{src:"https://home.booking.gov.sg/images/bookingsg/footer.svg",alt:"BookingSG"};case"mylegacy":return{src:"https://mylegacy.life.gov.sg/images/site-logo.png",alt:"MyLegacy",style:{width:"10rem",maxHeight:"2rem"}};case"ccube":return{src:"https://assets.life.gov.sg/ccube/logo-ccube.svg",alt:"Ccube"};default:return{src:"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG"}}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return Z_;case"mylegacy":return Q_;default:return G_}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(J_||(J_={}));const eM=q.default.img`
    max-height: 4.5rem;
    max-width: 100%;
`,tM=q.default.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 1rem;
`,nM=()=>{const t=i.useTheme();return e.jsx("div",Object.assign({"data-testid":"resource-addon-section"},{children:"mylegacy"===(null==t?void 0:t.resourceScheme)?e.jsxs(e.Fragment,{children:[e.jsx(exports.Text.XSmall,{children:"My Legacy is a LifeSG initiative, brought to you by the following government agencies:"}),e.jsxs(tM,{children:[e.jsx(eM,{"data-testid":"footer-govtech-logo",src:"https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png",alt:"GovTech Singapore"}),e.jsx(eM,{"data-testid":"footer-psd-logo",src:"https://mylegacy.life.gov.sg/images/agencies/psd-logo.png",alt:"Public Service Division",style:{maxHeight:"3.5rem"}})]})]}):null}))},rM=q.default.footer`
    background: ${Qo.Neutral[7]};
`,iM=q.default(exports.Text.Hyperlink.Small)`
    color: ${Qo.Neutral[1]};
`,aM=q.default(ix.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Qo.Neutral[5]};

    ${ts.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,oM=q.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${ts.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,sM=q.default.ul`
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

    ${ts.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${ts.MaxWidth.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,lM=q.default.div`
    grid-column: 9 / span 4;

    ${ts.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,cM=q.default.div`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${Qo.Neutral[6]};
    }
`,dM=q.default(ix.Content)`
    padding: 1.375rem 0;

    ${ts.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,uM=q.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${ts.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,pM=q.default(uM)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${ts.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,fM=q.default(exports.Text.Hyperlink.Small)`
    ${gs.getTextStyle("XSmall","regular")}
    color: ${Qo.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${Qo.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${Qo.Neutral[3]};
        svg {
            color: ${Qo.Neutral[3]};
        }
    }

    ${ts.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${ts.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`;var hM=function(e,t){return Number(e.toFixed(t))},mM=function(e,t,n){n&&"function"==typeof n&&n(e,t)},gM={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},vM=function(e){"number"==typeof e&&cancelAnimationFrame(e)},bM=function(e){e.mounted&&(vM(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function xM(e,t,n,r){if(e.mounted){var i=(new Date).getTime();bM(e),e.animation=function(){if(!e.mounted)return vM(e.animation);var a=(new Date).getTime()-i,o=(0,gM[t])(a/n);a>=n?(r(1),e.animation=null):e.animation&&(r(o),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function yM(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var a=e.setTransformState,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=t.scale-s,u=t.positionX-l,p=t.positionY-c;0===n?a(t.scale,t.positionX,t.positionY):xM(e,r,n,(function(e){a(s+d*e,l+u*e,c+p*e)}))}}var wM=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var a=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,a=t.offsetWidth*n,o=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:a,newDiffWidth:r-a,newContentHeight:o,newDiffHeight:i-o}}(n,r,t),o=a.wrapperWidth,s=a.wrapperHeight,l=function(e,t,n,r,i,a,o){var s=e>t?n*(o?1:.5):0,l=r>i?a*(o?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(o,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return l},$M=function(e,t,n,r){return hM(r?e<t?t:e>n?n:e:e,2)},jM=function(e,t){var n=wM(e,t);return e.bounds=n,n};function SM(e,t,n,r,i,a,o){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,p=0;return o&&(u=i,p=a),{x:$M(e,s-u,c+u,r),y:$M(t,l-p,d+p,r)}}function kM(e,t,n,r,i,a){var o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):SM(l-t*d,c-n*d,i,a,0,0,null)}function CM(e,t,n,r,i){var a=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=a?a:e}var OM=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,a=t.target,o="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(a);return!!(r&&a&&o)&&!lR(a,n)},TM=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function DM(e,t,n,r,i){var a=e.setup.limitToBounds,o=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==o&&null!==s&&(t!==d||n!==u)){var p=SM(t,n,s,a,r,i,o),f=p.x,h=p.y;e.setTransformState(c,f,h)}}var IM=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,a=n.disablePadding;return t>0&&r>=i&&!a?t:0};function EM(e,t,n,r,i,a,o,s,l,c){if(i){var d;if(t>o&&n>o)return(d=o+(e-o)*c)>l?l:d<o?o:d;if(t<a&&n<a)return(d=a+(e-a)*c)<s?s:d>a?a:d}return r?t:$M(e,a,o,i)}function _M(e,t){var n=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,a=e.transformState.scale;return!(i.disabled&&!(a>1)&&r&&!t)}(e);if(n){var r=e.lastMousePosition,i=e.velocityTime,a=e.setup,o=e.wrapperComponent,s=a.velocityAnimation.equalToMove,l=Date.now();if(r&&i&&o){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,s),d=t.x-r.x,u=t.y-r.y,p=d/c,f=u/c,h=l-i,m=d*d+u*u,g=Math.sqrt(m)/h;e.velocity={velocityX:p,velocityY:f,total:g}}e.lastMousePosition=t,e.velocityTime=l}}function MM(e,t){var n=e.transformState.scale;bM(e),jM(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,a=r.positionY;if(e.isPanning=!0,1===n.length){var o=n[0].clientX,s=n[0].clientY;e.startCoords={x:o-i,y:s-a}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var a=t.clientX,o=t.clientY;e.startCoords={x:a-r,y:o-i}}(e,t)}function RM(e,t){var n=e.transformState.scale,r=e.setup,i=r.minScale,a=r.alignmentAnimation,o=a.disabled,s=a.sizeX,l=a.sizeY,c=a.animationTime,d=a.animationType;if(!(o||n<i||!s&&!l)){var u=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,a=e.setup,o=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,c=e.wrapperComponent;if(!o&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,p=d.minPositionX,f=d.maxPositionY,h=d.minPositionY,m=n>u||n<p,g=r>f||r<h,v=kM(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>f?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),b=v.x,x=v.y;return{scale:i,positionX:m?b:n,positionY:g?x:r}}}(e);u&&yM(e,u,null!=t?t:c,d)}}function AM(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,a=i.sizeX,o=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,a=e.setup.panning,o=a.lockAxisX,s=a.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:o?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=IM(e,a),u=IM(e,o);_M(e,{x:l,y:c}),DM(e,l,c,d,u)}}function NM(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var a=null==r?void 0:r.getBoundingClientRect(),o=null==i?void 0:i.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,l=(null==a?void 0:a.height)||0,c=(null==o?void 0:o.width)||0,d=(null==o?void 0:o.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent,a=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,a=i.disabled,o=i.velocityAnimation,s=e.transformState.scale;return!(o.disabled&&!(s>1)&&a&&!t||!n||!r)}(e);if(a&&t&&n&&i){var o=t.velocityX,s=t.velocityY,l=t.total,c=n.maxPositionX,d=n.minPositionX,u=n.maxPositionY,p=n.minPositionY,f=r.limitToBounds,h=r.alignmentAnimation,m=r.zoomAnimation,g=r.panning,v=g.lockAxisY,b=g.lockAxisX,x=m.animationType,y=h.sizeX,w=h.sizeY,$=h.velocityAlignmentTime,j=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,a=n.sensitivity;return r?i*t*a:i}(e,l),S=Math.max(j,$),k=IM(e,y),C=IM(e,w),O=k*i.offsetWidth/100,T=C*i.offsetHeight/100,D=c+O,I=d-O,E=u+T,_=p-T,M=e.transformState,R=(new Date).getTime();xM(e,x,S,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,a=n.positionY,l=((new Date).getTime()-R)/$,m=1-(0,gM[h.animationType])(Math.min(1,l)),g=1-t,x=i+o*g,y=a+s*g,w=EM(x,M.positionX,i,b,f,d,c,I,D,m),j=EM(y,M.positionY,a,v,f,p,u,_,E,m);i===x&&a===y||e.setTransformState(r,w,j)}))}}(e):RM(e)}}function BM(e,t,n,r){var i=e.setup,a=i.minScale,o=i.maxScale,s=i.limitToBounds,l=CM(hM(t,2),a,o,0,!1),c=kM(e,n,r,l,jM(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function FM(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,p=c||r>=o;if((r>=1||s)&&RM(e),!p&&i&&e.mounted){var f=BM(e,o,t||i.offsetWidth/2,n||i.offsetHeight/2);f&&yM(e,f,d,u)}}var LM=function(){return LM=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},LM.apply(this,arguments)};function PM(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var zM=1,HM=0,WM=0,VM={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},YM="react-transform-wrapper",UM="react-transform-component",qM=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:zM,scale:null!==(n=e.initialScale)&&void 0!==n?n:zM,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:HM,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:WM}},KM=function(e){var t=LM({},VM);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==VM[n]&&r){var i=Object.prototype.toString.call(VM[n]),a="[object Object]"===i,o="[object Array]"===i;t[n]=a?LM(LM({},VM[n]),e[n]):o?PM(PM([],VM[n],!0),e[n],!0):e[n]}})),t},XM=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.maxScale,s=a.minScale,l=a.zoomAnimation,c=a.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return CM(hM(u,3),s,o,d,!1)};function GM(e,t,n,r,i){var a=e.wrapperComponent,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY;if(!a)return console.error("No WrapperComponent found");var d=(a.offsetWidth/2-l)/s,u=(a.offsetHeight/2-c)/s,p=BM(e,XM(e,t,n),d,u);if(!p)return console.error("Error during zoom event. New transformation state was not calculated.");yM(e,p,r,i)}function ZM(e,t,n,r){var i=e.setup,a=e.wrapperComponent,o=i.limitToBounds,s=qM(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(a){var p=wM(e,s.scale),f=SM(s.positionX,s.positionY,p,o,0,0,a),h={scale:s.scale,positionX:f.x,positionY:f.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),yM(e,h,t,n))}}var QM=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),GM(e,1,t,n,r)}},JM=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),GM(e,-1,t,n,r)}},eR=function(e){return function(t,n,r,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var o=e.transformState,s=o.positionX,l=o.positionY,c=o.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var p={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};yM(e,p,i,a)}}},tR=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),ZM(e,t,n)}},nR=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,a=e.wrapperComponent,o=e.contentComponent;if(a&&o){var s=dR(t||i.scale,a,o);yM(e,s,n,r)}}},rR=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),bM(e);var a=e.wrapperComponent,o="string"==typeof t?document.getElementById(t):t;if(a&&o&&a.contains(o)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,a=e.transformState,o=e.setup,s=o.limitToBounds,l=o.minScale,c=o.maxScale;if(!r||!i)return a;var d,u,p,f,h,m,g,v,b=r.getBoundingClientRect(),x=t.getBoundingClientRect(),y=(d=r,u=i,p=a,f=t.getBoundingClientRect(),h=d.getBoundingClientRect(),m=u.getBoundingClientRect(),g=h.x*p.scale,v=h.y*p.scale,{x:(f.x-m.x+g)/p.scale,y:(f.y-m.y+v)/p.scale}),w=y.x,$=y.y,j=x.width/a.scale,S=x.height/a.scale,k=r.offsetWidth/j,C=r.offsetHeight/S,O=CM(n||Math.min(k,C),l,c,0,!1),T=(b.width-j*O)/2,D=(b.height-S*O)/2,I=SM((b.left-w)*O+T,(b.top-$)*O+D,wM(e,O),s,0,0,r);return{positionX:I.x,positionY:I.y,scale:O}}(e,o,n);yM(e,s,r,i)}}},iR=function(e){return{instance:e,zoomIn:QM(e),zoomOut:JM(e),setTransform:eR(e),resetTransform:tR(e),centerView:nR(e),zoomToElement:rR(e)}},aR=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,iR(e)),t};function oR(){try{return{get passive(){return!1}}}catch(e){return!1}}var sR=".".concat(YM),lR=function(e,t){return t.some((function(t){return e.matches("".concat(sR," ").concat(t,", ").concat(sR," .").concat(t,", ").concat(sR," ").concat(t," *, ").concat(sR," .").concat(t," *"))}))},cR=function(e){e&&clearTimeout(e)},dR=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function uR(e,t,n){var r=t.getBoundingClientRect(),i=0,a=0;if("clientX"in e)i=(e.clientX-r.left)/n,a=(e.clientY-r.top)/n;else{var o=e.touches[0];i=(o.clientX-r.left)/n,a=(o.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var pR=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},fR=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,a=e.contentComponent,o=e.setup,s=e.transformState.scale,l=o.limitToBounds,c=o.centerZoomedOut,d=o.zoomAnimation,u=o.wheel,p=o.disablePadding,f=o.smooth,h=d.size,m=d.disabled,g=u.step,v=u.smoothStep;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var b=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),x=function(e,t,n,r,i){var a=e.transformState.scale,o=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,p=d.size,f=d.disabled;if(!o)throw new Error("Wrapper is not mounted");var h=a+t*n;if(i)return h;var m=!r&&!f;return CM(hM(h,3),c,l,p,m&&!u)}(e,b,f?v*Math.abs(t.deltaY):g,!t.ctrlKey);if(s!==x){var y=jM(e,x),w=uR(t,a,s),$=l&&(m||0===h||c||p),j=kM(e,w.x,w.y,x,y,$),S=j.x,k=j.y;e.previousWheelEvent=t,e.setTransformState(x,S,k),mM(aR(e),t,r),mM(aR(e),t,i)}},hR=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;cR(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(FM(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var a=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,a=i.maxScale,o=i.minScale;return!!n&&(r<a||r>o||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);a&&(cR(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,mM(aR(e),t,r),mM(aR(e),t,i))}),160))},mR=function(e){for(var t=0,n=0,r=0;r<2;r+=1)t+=e.touches[r].clientX,n+=e.touches[r].clientY;return{x:t/2,y:n/2}},gR=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.wrapperComponent,a=e.transformState.scale,o=e.setup,s=o.limitToBounds,l=o.centerZoomedOut,c=o.zoomAnimation,d=o.alignmentAnimation,u=c.disabled,p=c.size;if(null!==r&&n){var f=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,a=hM(i[0].clientX-r.left,5),o=hM(i[0].clientY-r.top,5);return{x:(a+hM(i[1].clientX-r.left,5))/2/t,y:(o+hM(i[1].clientY-r.top,5))/2/t}}(t,a,n);if(Number.isFinite(f.x)&&Number.isFinite(f.y)){var h=pR(t),m=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,a=i.maxScale,o=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:CM(hM(t/r*n,2),o,a,c,!d&&!l)}(e,h),g=mR(t),v=g.x-(e.pinchLastCenterX||0),b=g.y-(e.pinchLastCenterY||0);if(m!==a||0!==v||0!==b){e.pinchLastCenterX=g.x,e.pinchLastCenterY=g.y;var x=jM(e,m),y=s&&(u||0===p||l),w=kM(e,f.x,f.y,m,x,y),$=w.x,j=w.y;e.pinchMidpoint=f,e.lastDistance=h;var S=d.sizeX,k=d.sizeY,C=SM($+v,j+b,x,s,IM(e,S),IM(e,k),i),O=C.x,T=C.y;e.setTransformState(m,O,T)}}}},vR=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;cR(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,mM(aR(e),t,n)}),r)};function bR(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,a=e.contentComponent,o=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,p=d.mode,f=d.step,h=d.animationTime,m=d.animationType;if(!u&&!r){if("reset"===p)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,a=e.setup.doubleClick,o=a.animationTime,s=a.animationType;mM(aR(e),t,r),ZM(e,o,s,(function(){return mM(aR(e),t,i)})),vR(e,t)}(e,t);if(!a)return console.error("No ContentComponent found");var g=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(p,e.transformState.scale),v=XM(e,g,f);if(o!==v){mM(aR(e),t,l);var b=uR(t,a,o),x=BM(e,v,b.x,b.y);if(!x)return console.error("Error during zoom event. New transformation state was not calculated.");mM(aR(e),t,c),yM(e,x,h,m),vR(e,t)}}}var xR=function(e){var t=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,jM(t,t.transformState.scale),t.setup=KM(e)},this.initializeWindowEvents=function(){var e,n,r=oR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==a||a.addEventListener("mousedown",t.onPanningStart,r),null==a||a.addEventListener("mousemove",t.onPanning,r),null==a||a.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==a||a.addEventListener("keyup",t.setKeyUnPressed,r),null==a||a.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=oR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,r),null==a||a.removeEventListener("mousemove",t.onPanning,r),null==a||a.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,r),null==a||a.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),bM(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=oR();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e,n){var r=!1,i=t.setup.centerOnInit,a=function(e,t){for(var n=0,r=e;n<r.length;n++)if(r[n].target===t)return!0;return!1};t.applyTransformation(),t.onInitCallbacks.forEach((function(e){e(aR(t))})),t.observer=new ResizeObserver((function(o){if(a(o,e)||a(o,n))if(i&&!r){var s=n.offsetWidth,l=n.offsetHeight;(s>0||l>0)&&(r=!0,t.setCenter())}else bM(t),jM(t,t.transformState.scale),RM(t,0)})),t.observer.observe(e),t.observer.observe(n)},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,a=n.touchPadDisabled,o=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||a&&t.ctrlKey||lR(c,o))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(bM(e),mM(aR(e),t,r),mM(aR(e),t,i))}(t,e),fR(t,e),hR(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,a=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!a.disabled&&a.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var o=t.transformState,s=o.positionX,l=o.positionY,c=s-e.deltaX,d=l-e.deltaY,u=a.lockAxisX?s:c,p=a.lockAxisY?l:d,f=t.setup.alignmentAnimation,h=f.sizeX,m=f.sizeY,g=IM(t,h),v=IM(t,m);u===s&&p===l||DM(t,u,p,g,v)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||OM(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),bM(t),MM(t,e),mM(aR(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||TM(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),AM(t,e.clientX,e.clientY),mM(aR(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(NM(t),mM(aR(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,a=r.onZoomStart;if(!n){var o=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,a=e.isInitialized,o=t.target;return!(!a||r||!o||lR(o,i))}(t,e);o&&(function(e,t){var n=pR(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1;var r=mR(t);e.pinchLastCenterX=r.x,e.pinchLastCenterY=r.y,bM(e)}(t,e),bM(t),mM(aR(t),e,i),mM(aR(t),e,a))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,a=r.onZoom;if(!n){var o=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);o&&(e.preventDefault(),e.stopPropagation(),gR(t,e),mM(aR(t),e,i),mM(aR(t),e,a))}},this.onPinchStop=function(e){var n,r,i=t.props,a=i.onPinchingStop,o=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,FM(n,null==r?void 0:r.x,null==r?void 0:r.y),mM(aR(t),e,a),mM(aR(t),e,o))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&OM(t,e)&&!(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)){t.lastTouch=+new Date,bM(t);var i=e.touches,a=1===i.length,o=2===i.length;a&&(bM(t),MM(t,e),mM(aR(t),e,r)),o&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!TM(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];AM(t,i.clientX,i.clientY),mM(aR(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,a=r.doubleClick,o=a.disabled,s=a.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||o||lR(l,s))}(t,e);n&&bR(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var a=aR(t);t.onChangeCallbacks.forEach((function(e){return e(a)})),mM(a,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=dR(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,a=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=a}},this.getContext=function(){return aR(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,jM(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(e,n),t.initializeWindowEvents(),t.isInitialized=!0;var r=aR(t);mM(r,void 0,t.props.onInit)},this.props=e,this.setup=KM(this.props),this.transformState=qM(this.props)},yR=Y.default.createContext(null),wR=Y.default.forwardRef((function(e,n){var r=t.useRef(new xR(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,iR(r));return t.useImperativeHandle(n,(function(){return iR(r)}),[r]),t.useEffect((function(){r.update(e)}),[r,e]),Y.default.createElement(yR.Provider,{value:r},i)}));Y.default.forwardRef((function(e,n){var r,i=t.useRef(null),a=t.useContext(yR);return t.useEffect((function(){return a.onChange((function(e){if(i.current){i.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),Y.default.createElement("div",LM({},e,{ref:(r=[i,n],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var $R="transform-component-module_wrapper__SPB86",jR="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  transform: translate3d(0, 0, 0);\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var SR=function(e){var n=e.children,r=e.wrapperClass,i=void 0===r?"":r,a=e.contentClass,o=void 0===a?"":a,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,p=void 0===u?{}:u,f=t.useContext(yR),h=f.init,m=f.cleanupWindowEvents,g=t.useRef(null),v=t.useRef(null);return t.useEffect((function(){var e=g.current,t=v.current;return null!==e&&null!==t&&h&&(null==h||h(e,t)),function(){null==m||m()}}),[]),Y.default.createElement("div",LM({},d,{ref:g,className:"".concat(YM," ").concat($R," ").concat(i),style:s}),Y.default.createElement("div",LM({},p,{ref:v,className:"".concat(UM," ").concat(jR," ").concat(o),style:l}),n))};const kR=q.default.div`
    background-color: ${Qo.Neutral[6]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 3rem;
        width: 18%;
        height: auto;
    }
`,CR=t=>e.jsx(kR,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),OR=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,TR=q.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,DR=q.default(CR)`
    width: 100%;
    height: 100%;
`,IR=({src:n,className:r,alt:i,fit:a,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,p]=t.useState();t.useEffect((()=>{d(!0),p(void 0);const e=new Image;e.src=n,e.onload=()=>{s&&l({src:n,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),p(e)}}),[n]);return e.jsx(OR,Object.assign({className:r},{children:u?null!=o?o:e.jsx(DR,{}):c?e.jsx(dl,{}):e.jsx(TR,{src:n,alt:i,$fit:a})}))},ER=q.default(is)`
    padding: 0;
    border-radius: 100%;
    background: ${Qo.Neutral[8]};
    color: ${Qo.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,_R=q.default(ER)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${ts.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,MR=q.default(ER)`
    position: absolute;
    top: 3rem;
    right: 6.5rem;
    z-index: 5;

    ${ts.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 4.75rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,RR=q.default(ER)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&i.css`
            left: 3rem;
            ${ts.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${e=>"right"===e.$position&&i.css`
            right: 3rem;
            ${ts.MaxWidth.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,AR=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,NR=q.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,BR=q.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,FR=q.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,LR=q.default.div`
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
`,PR=q.default(IR)`
    height: 100%;
    width: 100%;
`,zR=q.default(CR)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,HR=q.default.div`
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
`,WR=q.default(exports.Text.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${Qo.Neutral[8]};
    text-align: center;
`,VR=q.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Qo.Neutral[1]};
    padding: 1.5rem 1rem;

    ${ts.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,YR=q.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,UR=q.default.div`
    cursor: pointer;
    background-color: ${Qo.Neutral[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${ts.MaxWidth.mobileL} {
        height: 4rem;
        width: 4rem;
    }

    ${e=>e.$active?i.css`
                  border: 4px solid ${Qo.Primary};

                  ${ts.MaxWidth.mobileL} {
                      border: 2px solid ${Qo.Primary};
                  }
              `:i.css`
                  :hover {
                      border: 1px solid ${Qo.Neutral[5]};
                  }
              `};
`,qR=q.default(IR)`
    height: 100%;
    width: 100%;
`,KR=(n,r)=>{var{items:i,initialActiveItemIndex:a,hideThumbnail:o=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=n,p=X(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[f,h]=t.useState(null!=a?a:0),[m,g]=t.useState({}),[v,b]=t.useState(1),[x,y]=t.useState(null),[w,$]=t.useState(null),j=t.useRef(null),S=t.useRef([]),k=t.useRef([]),C=x&&w?x-w:0;t.useImperativeHandle(r,(()=>({currentItemIndex:f,setCurrentItem:_,goToPrevItem:I,goToNextItem:E}))),cc("keydown",(function(e){"ArrowRight"===e.key?E():"ArrowLeft"===e.key?I():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[f])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),b(1)}),[f]);const O=e=>{b(e.state.scale)};const T=({src:e,height:t,width:n})=>{g((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},D=()=>{const e=m[i[f].src];if((null==j?void 0:j.current)&&e){const{clientHeight:t,clientWidth:n}=j.current,{width:r,height:i}=e,a=i/r<t/n;return r<n&&i<t?a?n/r:t/i:a?t/(i/(r/n)):n/(r/(i/t))}},I=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[f])||void 0===t||t.resetTransform(),h((e=>0===e?i.length-1:e-1))},E=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[f])||void 0===t||t.resetTransform(),h((e=>e===i.length-1?0:e+1))},_=e=>{var t,n;null===(n=null===(t=k.current)||void 0===t?void 0:t[f])||void 0===n||n.resetTransform(),h(e)};return e.jsxs(wf,Object.assign({},p,{"data-testid":"image-carousel-modal"},{children:[e.jsx(_R,Object.assign({"aria-label":"Close image carousel",onClick:d,focusHighlight:!1},{children:e.jsx(u.CrossIcon,{"aria-hidden":!0})})),!c&&e.jsx(MR,Object.assign({"aria-label":1===v?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===v){const n=D();null===(t=null===(e=k.current)||void 0===e?void 0:e[f])||void 0===t||t.centerView(n),b(n)}else b(1),null===(r=null===(n=k.current)||void 0===n?void 0:n[f])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:1===v?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})})),e.jsxs(AR,{children:[e.jsxs(NR,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(RR,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:I},{children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})})),e.jsx(RR,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:E},{children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})}))]}),e.jsx(BR,Object.assign({ref:j,onTouchStart:e=>{v<=1&&y(e.touches[0].clientX)},onTouchMove:e=>{!x||v>1||$(e.touches[0].clientX)},onTouchEnd:()=>{j.current&&Math.abs(C)>j.current.offsetWidth/3&&(C>0?E():I()),y(null),$(null)}},{children:e.jsx(FR,Object.assign({style:{transform:`translateX(calc(${100*-f}% - ${C}px))`}},{children:i.map(((t,n)=>{var r;return e.jsx(LR,Object.assign({"data-testid":"slide-item"},{children:e.jsx(wR,Object.assign({ref:e=>k.current[n]=e,panning:{disabled:v<=1},initialScale:1,onZoom:O,onZoomStop:O,onWheel:O},{children:e.jsx(SR,{children:e.jsx(PR,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e.jsx(zR,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:T})})}))}),n)}))}))})),!l&&e.jsx(HR,{children:e.jsx(WR,Object.assign({weight:"semibold"},{children:`${f+1}/${i.length}`}))})]}),!o&&e.jsx(VR,{children:e.jsx(YR,{children:i.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e.jsx(UR,Object.assign({"data-testid":"thumbnail-item",$active:n===f,onClick:()=>_(n),ref:e=>S.current[n]=e},{children:e.jsx(qR,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},XR=t.forwardRef(KR),GR=q.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Qo.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${gs.getTextStyle("Body","semibold")}
    color: ${({$selected:e})=>e&&Qo.Primary};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${ts.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${gs.getTextStyle("BodySmall","semibold")}
    }

    ${e=>e.$error?i.css`
                background: ${Qo.Neutral[8]};
                border: 1px solid ${Qo.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${Qo.Shadow.Red};
                }
            `:e.$selected?i.css`
                background: ${Qo.Accent.Light[5]};
                border: 1px solid ${Qo.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${Qo.Shadow.Accent};
                }
            `:i.css`
                &:hover {
                    border: 1px solid ${Qo.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${Qo.Shadow.Accent};
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
        color: ${Qo.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`,ZR=Y.default.forwardRef(((t,n)=>{var{children:r,imgSrc:i,selected:a,error:o,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(GR,Object.assign({ref:n,$selected:a,$error:o,type:s},l,{children:[e.jsx(ph,{src:i}),r]}))})),QR=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Qo.Primary};
`,JR=q.default.div`
    border-top: 1px solid ${Qo.Neutral[5]};
    border-bottom: 1px solid ${Qo.Neutral[5]};
`,eA=q.default(exports.Text.H3)`
    color: ${Qo.Primary};
    margin-bottom: 0.5rem;
`,tA=q.default(exports.Text.Body)`
    color: ${Qo.Primary};
`,nA=q.default(f.ChevronRightIcon)`
    ${QR}
`,rA=q.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${Qo.Neutral[5]};
    }

    :hover {
        ${eA},
        ${tA},
        ${nA} {
            color: ${Qo.PrimaryDark};
        }
    }
`,iA=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,aA=q.default(exports.Text.BodySmall)`
    margin-top: 0.25rem;
`,oA=q.default(Si.div)`
    overflow: hidden;
`,sA=q.default.div`
    border-top: 1px solid ${Qo.Neutral[5]};
`,lA=q.default(exports.Text.H5)`
    color: ${Qo.Primary};
    margin-right: 0.5rem;
`,cA=q.default(A.PlusIcon)`
    ${QR}
`,dA=q.default(R.MinusIcon)`
    ${QR}
`,uA=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: border-width 300ms linear;
    border-top: 1px solid ${Qo.Neutral[5]};

    :hover {
        ${lA},
        ${cA},
        ${dA} {
            color: ${Qo.PrimaryDark};
        }
    }
`,pA=q.default.div`
    ${e=>Zs({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,fA=t.forwardRef(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:a}=t,o=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(pA,Object.assign({ref:n,as:a?"span":"div",$textSize:i,$textColor:r},o))})),hA=q.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,a=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${ts.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/a}% - 2rem), 1fr)
                );
            }

            ${ts.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,mA=q.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:a,startSm:o,colsSm:s}=e;return i.css`
            grid-column: ${t||r||"auto"} / span
                ${n||a||1};

            ${ts.MaxWidth.tablet} {
                grid-column: ${r||o||"auto"} / span
                    ${a||s||1};
            }

            ${ts.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${s||1};
            }
        `}}
`,gA={Grid:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(hA,Object.assign({ref:n},i,{children:r}))})),Tile:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(mA,Object.assign({ref:n},i,{children:r}))}))},vA=q.default.div`
    // matches Layout.Container
    // not able to fully align with Layout.Section due to dynamic spacing
    --sgds-mainnav-max-width: 1320px;
    --sgds-mainnav-padding-x: 0.75rem;
    --sgds-mainnav-mobile-padding-x: 0.75rem;

    ${ts.MaxWidth.desktopM} {
        --sgds-mainnav-max-width: 1140px;
    }

    ${ts.MaxWidth.tablet} {
        --sgds-mainnav-max-width: 720px;
    }

    ${ts.MaxWidth.mobileL} {
        --sgds-mainnav-max-width: 100%;
    }
`,bA=()=>{t.useEffect((()=>{n()||r()}),[]);const n=()=>document.getElementById(xA),r=()=>{if(!document.getElementById(xA)){const e=document.createElement("script");e.id=xA,e.type="module",e.src=yA,document.head.appendChild(e)}};return e.jsx(vA,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},xA="lifesg-ds-masthead-script",yA="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",wA={notCompress:6,compress:4},$A=q.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,jA=q.default.nav`
    height: ${e=>e.$compress?wA.compress:wA.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${ws.Base};

    ${ts.MaxWidth.tablet} {
        height: ${3.5}rem;
    }
`,SA=q.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${ts.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,kA=q.default(is)`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,CA=q.default(N.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Qo.Neutral[1]};
`,OA=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${ts.MaxWidth.tablet} {
        height: 1.5rem;
    }

    ${ts.MaxWidth.mobileS} {
        height: 1.25rem;
    }
`,TA=q.default.div`
    display: flex;
    background-color: ${Qo.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${ts.MaxWidth.tablet} {
        margin: 0 1rem;
    }

    ${ts.MaxWidth.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,DA=q.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${ws.Base};
        object-fit: contain;
    }
`,IA=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:a})=>e.jsx(DA,Object.assign({role:"link",onClick:e=>{n&&n(e,a)},tabIndex:0,"data-id":r,"data-testid":i,$type:a},{children:e.jsx(ph,{src:t.logoSrc,alt:t.brandName})})),EA=q.default.div`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
    }
`,_A=q.default.div`
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

	${ts.MaxWidth.tablet} {
        width: 75%;
    }

    ${ts.MaxWidth.mobileL} {
        width: 100%;
    }
`,MA=q.default.div`
    display: flex;
    flex-direction: column;
`,RA=q.default.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,AA=q.default(g.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,NA=q.default(is)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Qo.Neutral[1]};

    :active,
    :focus {
        color: ${Qo.Primary};
    }
`,BA=Y.default.forwardRef(((n,r)=>{const{show:i,resources:a,children:o,hideNavBranding:s,onClose:l,onBrandClick:c}=n,[d,u]=t.useState(0),{primary:p,secondary:f}=a;t.useEffect((()=>(h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)})),[]);const h=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(EA,Object.assign({ref:r,"data-testid":"drawer"},{children:e.jsx(_A,Object.assign({$show:i,$viewHeight:d},{children:e.jsxs(MA,{children:[e.jsxs(RA,{children:[e.jsx(OA,Object.assign({"data-id":"drawer-brand-container"},{children:!s&&e.jsxs(e.Fragment,{children:[e.jsx(IA,{resources:p,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&e.jsxs(e.Fragment,{children:[e.jsx(TA,{}),e.jsx(IA,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e.jsx(NA,Object.assign({onClick:l,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e.jsx(AA,{})}))]}),o]})}))}))})),FA={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},LA={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},PA={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},zA={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},HA=q.default.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${ts.MaxWidth.tablet} {
        display: none;
    }
`,WA=q.default.ul`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,VA=q.default.ul`
    display: none;
    list-style: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${ts.MaxWidth.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,YA=q.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${ts.MaxWidth.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${ts.MaxWidth.mobileL} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 1rem;
                `}}
    }
`,UA=q.default(Ys.Small)`
    ${ts.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,qA=q.default.div`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,KA=q.default(exports.Text.BodySmall)`
    margin-bottom: 0.5rem;
`,XA=q.default.div`
    display: flex;
`,GA=q.default.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${ts.MaxWidth.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${ts.MaxWidth.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,ZA=({actionButtons:t,mobile:n=!1,onActionButtonClick:r})=>{const i=e=>{e.stopPropagation()},a=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},o=(t,n)=>{const r=t?(e=>{const t=tj(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(n):n;return r.map(((n,r)=>{let o;switch(n.type){case"download":o=t?(s=n.args,e.jsxs(qA,{children:[e.jsx(KA,Object.assign({weight:"semibold"},{children:s&&s.children||"Download the app"})),e.jsxs(XA,{children:[e.jsx(GA,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(GA,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e.jsx(UA,Object.assign({},n.args,{type:"button",onClick:a(n),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const i=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;o=e.jsx(UA,Object.assign({},n.args,{type:"button",onClick:a(n),"data-testid":i}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var s;if(o)return e.jsx(YA,Object.assign({$mobile:t},{children:o}),`action-button-${r+1}`)}))};if(t){const r=(null==t?void 0:t.mobile)||t.desktop,i=r.filter((e=>!!e.uncollapsible)),a=r.filter((e=>!e.uncollapsible));return n?e.jsx(e.Fragment,{children:a.length>0&&e.jsx(VA,{children:o(n,a)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(WA,{children:o(!1,i)}),t.desktop.length>0&&e.jsx(HA,{children:o(n,t.desktop)})]})}return e.jsx(e.Fragment,{})},QA=q.default.ul`
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

    background: ${Qo.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Rs.ElevationBoxShadow};
`,JA=q.default.ul`
    display: none;
    list-style: none;

    ${ts.MaxWidth.tablet} {
        border-left: 0.25rem solid ${Qo.Primary};
        display: flex;
        flex-direction: column;
    }
`,eN=q.default(exports.Text.Hyperlink.Small)`
    ${gs.getTextStyle("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Qo.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Qo.Primary};
    }
    :hover {
        color: ${Qo.Accent.Light[1]};
    }

    ${ts.MaxWidth.tablet} {
        ${gs.getTextStyle("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,tN=q.default.li`
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

    ${ts.MaxWidth.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,nN=({items:t,mobile:n=!1,onItemClick:r})=>{const i=e=>t=>{t.stopPropagation(),r(t,e)},a=(n=!1)=>t.map(((t,r)=>{const{children:a,options:o}=t,s=X(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e.jsx(tN,{children:e.jsx(eN,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:i(t)},o,{children:a}))},r)}));if(t&&t.length>0){const t=n?JA:QA;return e.jsx(t,{children:a(n)})}return e.jsx(e.Fragment,{})},rN=q.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${ts.MaxWidth.tablet} {
        display: none;
    }
`,iN=q.default.ul`
    display: none;
    list-style: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,aN=q.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${ts.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,oN=q.default(exports.Text.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Qo.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Qo.Neutral[1]};
    }

    ${ts.MaxWidth.tablet} {
        color: ${Qo.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Qo.Neutral[1]};
        }
    }
`,sN=q.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,lN=q.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Qo.Primary};

    ${ts.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Qo.Primary};
    }
`,cN=q.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,dN=q.default(is)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,uN=q.default(r.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Qo.Neutral[3]};
    :hover {
        color: ${Qo.Neutral[1]};
    }
`,pN=({items:n,selectedId:r,mobile:i=!1,hideNavBranding:a,onItemClick:o})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&p()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const p=()=>{d(!1)},f=(e,t)=>n=>{n.stopPropagation(),l(t),d(!0),o(n,e)},h=(e,t)=>{e.stopPropagation(),o(e,t),d(!1)},m=()=>n.map(((t,n)=>{if("component"===t.itemType){const r=t&&t.children||null;return e.jsx("li",{children:r},n)}{const o=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),p=o?i?"bold":"semibold":"regular",m=i?`link__mobile-${n+1}`:`link__${n+1}`,g=s>=0&&s===n&&c;return e.jsxs(aN,Object.assign({$hiddenBranding:a},{children:[e.jsxs(oN,Object.assign({"data-testid":m,weight:p,$selected:o},u,{onClick:f(t,n)},d,{children:[e.jsx(sN,{children:l}),o&&e.jsx(lN,{"data-testid":`${m}-indicator`}),i&&t.subMenu&&e.jsx(cN,{children:e.jsx(dN,Object.assign({"data-testid":`${m}-expand-collapse-button`,$selected:g,focusHighlight:!1,focusOutline:"browser","aria-label":g?"Collapse":"Expand"},{children:e.jsx(uN,{})}))})]})),g&&e.jsx(nN,{items:t.subMenu,mobile:i,onItemClick:h})]}),n)}}));return n&&n.length>0?i?e.jsx(iN,Object.assign({ref:u},{children:m()})):e.jsx(rN,Object.assign({ref:u,$alignLeft:a},{children:m()})):e.jsx(e.Fragment,{})},fN=t.forwardRef(((n,r)=>{var{items:a,className:o,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:p=!1,hideNavBranding:f=!1,drawerDismissalExclusions:h=[],actionButtons:m,onItemClick:g,onActionButtonClick:v,onBrandClick:b,masthead:x=!0,layout:y="default"}=n,w=X(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,j]=t.useState(!1),[S,k]=t.useState(!1),C="stretch"===y,O=t.useRef(),T=i.useTheme(),D=(e=>{switch(e){case"bookingsg":return LA;case"mylegacy":return zA;case"ccube":return PA;default:return FA}})(null==T?void 0:T.resourceScheme),I=(null==u?void 0:u.primary)||D.primary,E=null==u?void 0:u.secondary;t.useImperativeHandle(r,(()=>Object.assign(O.current,{dismissDrawer:()=>{_()}})),[$]),t.useEffect((()=>(R(),window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)})),[]);const _=()=>{j(!1),setTimeout((()=>{k(!1)}),550)},M=e=>$&&-1===h.indexOf(e),R=()=>{window.innerWidth<=Jo.tablet&&$&&_()},A=(e,t)=>{b&&(e.preventDefault(),b(t)),M("brand-click")&&_()},N=(e,t)=>{t.onClick?t.onClick(e):g&&(e.preventDefault(),g(t)),!(null==t?void 0:t.subMenu)&&M("item-click")&&_()},B=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):v&&(e.preventDefault(),v(t)),M("item-click")&&_()},F=()=>{j(!0),k(!0)},L=()=>{M("close-button-click")&&_()},P=()=>{const t=a.mobile||a.desktop;return t&&t.length>0||m&&(()=>{const e=m.mobile||m.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e.jsx(kA,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:F,focusHighlight:!1},{children:e.jsx(CA,{})})):null};return e.jsxs($A,Object.assign({ref:O,$fixed:d,className:o,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper"},{children:[x&&e.jsx(bA,{}),e.jsxs(ix.Content,Object.assign({stretch:C},{children:[e.jsxs(jA,Object.assign({$compress:c},{children:[!f&&e.jsxs(OA,Object.assign({$compress:c,"data-id":"brand-container"},{children:[e.jsx(IA,{resources:I,onClick:A,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),E&&e.jsxs(e.Fragment,{children:[e.jsx(TA,{$compress:c}),e.jsx(IA,{resources:E,onClick:A,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!p&&e.jsxs(SA,Object.assign({$hideNavBranding:f},{children:[e.jsx(pN,{items:a.desktop,onItemClick:N,selectedId:l,hideNavBranding:f}),e.jsx(ZA,{actionButtons:m,onActionButtonClick:B}),P()]}))]})),!p&&e.jsx(rf,Object.assign({show:S,enableOverlayClick:!0,onOverlayClick:L},{children:e.jsxs(BA,Object.assign({show:$,resources:{primary:I,secondary:E},onClose:L,onBrandClick:A,actionButtons:m,hideNavBranding:f},{children:[e.jsx(pN,{items:a.mobile||a.desktop,onItemClick:N,selectedId:l,mobile:!0}),e.jsx(ZA,{actionButtons:m,onActionButtonClick:B,mobile:!0})]}))}))]}))]}))})),hN=wA,mN=i.css`
    color: ${Qo.Validation.Orange.Icon};

    svg {
        color: ${Qo.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Qo.Validation.Orange.Icon};
        svg {
            color: ${Qo.Validation.Orange.Icon};
        }
    }
`,gN=q.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${ws.Base};
    background: ${Qo.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,vN=q.default(ix.Content)`
    display: flex;
`,bN=q.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,xN=q.default.div`
    display: inline-block;
    width: 100%;

    ${gs.getTextStyle("Body","regular")}
    color: ${Qo.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${gs.getFontFamily("Body","semibold")}
        color: ${Qo.Neutral[8]};
    }

    a {
        ${gs.getTextStyle("Body","regular")}
        ${mN}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,yN=q.default(exports.Text.Hyperlink.Default)`
    position: relative;

    ${mN}
`,wN=q.default(is)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,$N=q.default(g.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Qo.Neutral[8]};
`,jN=q.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Qo.Validation.Orange.Icon};
    ${gs.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,SN=q.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,kN=n=>{var{children:r,visible:i=!0,dismissible:a=!0,sticky:o=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:p}=n,f=X(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const h=f["data-testid"],[m,g]=t.useState(i),{height:v,ref:b}=Ye();t.useEffect((()=>{g(i)}),[i]);const x=e=>{e.stopPropagation(),g(!1),a&&s&&s()},y=e=>{p.onClick&&(e.stopPropagation(),p.onClick(e))};if(!m)return null;return e.jsxs(gN,Object.assign({ref:c,$sticky:o,$clickable:!!u,onClick:u},f,{children:[e.jsxs(vN,Object.assign({id:CN("container",l)},{children:[e.jsxs(bN,{children:[e.jsx(xN,Object.assign({"data-testid":CN("text-content",h),$maxCollapsedHeight:d&&v>d?d:void 0},{children:e.jsx("div",Object.assign({ref:b},{children:r}))})),p&&e.jsx(jN,Object.assign({id:CN("action-button",l),"data-testid":CN("action-button",h),type:"button"},p,{onClick:y},{children:p.children}))]}),a&&e.jsx(wN,Object.assign({onClick:x,id:CN("dismiss-button",l),"data-testid":CN("dismiss-button",h),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e.jsx($N,{"aria-hidden":!0})}))]})),u&&e.jsx(SN,{"aria-label":"Clickable banner",type:"button"})]}))},CN=(e,t="wrapper")=>`${t}-${e}`,ON=Y.default.forwardRef(((t,n)=>e.jsx(kN,Object.assign({},t,{forwardedRef:n})))),TN=Object.assign(ON,{Link:yN}),{entries:DN,setPrototypeOf:IN,isFrozen:EN,getPrototypeOf:_N,getOwnPropertyDescriptor:MN}=Object;let{freeze:RN,seal:AN,create:NN}=Object,{apply:BN,construct:FN}="undefined"!=typeof Reflect&&Reflect;RN||(RN=function(e){return e}),AN||(AN=function(e){return e}),BN||(BN=function(e,t,n){return e.apply(t,n)}),FN||(FN=function(e,t){return new e(...t)});const LN=eB(Array.prototype.forEach),PN=eB(Array.prototype.lastIndexOf),zN=eB(Array.prototype.pop),HN=eB(Array.prototype.push),WN=eB(Array.prototype.splice),VN=eB(String.prototype.toLowerCase),YN=eB(String.prototype.toString),UN=eB(String.prototype.match),qN=eB(String.prototype.replace),KN=eB(String.prototype.indexOf),XN=eB(String.prototype.trim),GN=eB(Object.prototype.hasOwnProperty),ZN=eB(RegExp.prototype.test),QN=(JN=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return FN(JN,t)});var JN;function eB(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return BN(e,t,r)}}function tB(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:VN;IN&&IN(e,null);let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(EN(t)||(t[r]=e),i=e)}e[i]=!0}return e}function nB(e){for(let t=0;t<e.length;t++){GN(e,t)||(e[t]=null)}return e}function rB(e){const t=NN(null);for(const[n,r]of DN(e)){GN(e,n)&&(Array.isArray(r)?t[n]=nB(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=rB(r):t[n]=r)}return t}function iB(e,t){for(;null!==e;){const n=MN(e,t);if(n){if(n.get)return eB(n.get);if("function"==typeof n.value)return eB(n.value)}e=_N(e)}return function(){return null}}const aB=RN(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),oB=RN(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sB=RN(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),lB=RN(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),cB=RN(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),dB=RN(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),uB=RN(["#text"]),pB=RN(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),fB=RN(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),hB=RN(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),mB=RN(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),gB=AN(/\{\{[\w\W]*|[\w\W]*\}\}/gm),vB=AN(/<%[\w\W]*|[\w\W]*%>/gm),bB=AN(/\$\{[\w\W]*/gm),xB=AN(/^data-[\-\w.\u00B7-\uFFFF]+$/),yB=AN(/^aria-[\-\w]+$/),wB=AN(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$B=AN(/^(?:\w+script|data):/i),jB=AN(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),SB=AN(/^html$/i),kB=AN(/^[a-z][.\w]*(-[.\w]+)+$/i);var CB=Object.freeze({__proto__:null,ARIA_ATTR:yB,ATTR_WHITESPACE:jB,CUSTOM_ELEMENT:kB,DATA_ATTR:xB,DOCTYPE_NAME:SB,ERB_EXPR:vB,IS_ALLOWED_URI:wB,IS_SCRIPT_OR_DATA:$B,MUSTACHE_EXPR:gB,TMPLIT_EXPR:bB});const OB=1,TB=3,DB=7,IB=8,EB=9,_B=function(){return"undefined"==typeof window?null:window};var MB=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_B();const n=t=>e(t);if(n.version="3.2.6",n.removed=[],!t||!t.document||t.document.nodeType!==EB||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,a=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:f,trustedTypes:h}=t,m=c.prototype,g=iB(m,"cloneNode"),v=iB(m,"remove"),b=iB(m,"nextSibling"),x=iB(m,"childNodes"),y=iB(m,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let w,$="";const{implementation:j,createNodeIterator:S,createDocumentFragment:k,getElementsByTagName:C}=r,{importNode:O}=i;let T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof DN&&"function"==typeof y&&j&&void 0!==j.createHTMLDocument;const{MUSTACHE_EXPR:D,ERB_EXPR:I,TMPLIT_EXPR:E,DATA_ATTR:_,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:N}=CB;let{IS_ALLOWED_URI:B}=CB,F=null;const L=tB({},[...aB,...oB,...sB,...cB,...uB]);let P=null;const z=tB({},[...pB,...fB,...hB,...mB]);let H=Object.seal(NN(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,Y=!0,U=!0,q=!1,K=!0,X=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,ne=!1,re=!0,ie=!1,ae=!0,oe=!1,se={},le=null;const ce=tB({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=tB({},["audio","video","img","source","image","track"]);let pe=null;const fe=tB({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",me="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml";let ve=ge,be=!1,xe=null;const ye=tB({},[he,me,ge],YN);let we=tB({},["mi","mo","mn","ms","mtext"]),$e=tB({},["annotation-xml"]);const je=tB({},["title","style","font","a","script"]);let Se=null;const ke=["application/xhtml+xml","text/html"];let Ce=null,Oe=null;const Te=r.createElement("form"),De=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Oe||Oe!==e){if(e&&"object"==typeof e||(e={}),e=rB(e),Se=-1===ke.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Ce="application/xhtml+xml"===Se?YN:VN,F=GN(e,"ALLOWED_TAGS")?tB({},e.ALLOWED_TAGS,Ce):L,P=GN(e,"ALLOWED_ATTR")?tB({},e.ALLOWED_ATTR,Ce):z,xe=GN(e,"ALLOWED_NAMESPACES")?tB({},e.ALLOWED_NAMESPACES,YN):ye,pe=GN(e,"ADD_URI_SAFE_ATTR")?tB(rB(fe),e.ADD_URI_SAFE_ATTR,Ce):fe,de=GN(e,"ADD_DATA_URI_TAGS")?tB(rB(ue),e.ADD_DATA_URI_TAGS,Ce):ue,le=GN(e,"FORBID_CONTENTS")?tB({},e.FORBID_CONTENTS,Ce):ce,W=GN(e,"FORBID_TAGS")?tB({},e.FORBID_TAGS,Ce):rB({}),V=GN(e,"FORBID_ATTR")?tB({},e.FORBID_ATTR,Ce):rB({}),se=!!GN(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,q=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,ae=!1!==e.KEEP_CONTENT,oe=e.IN_PLACE||!1,B=e.ALLOWED_URI_REGEXP||wB,ve=e.NAMESPACE||ge,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&De(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&De(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(U=!1),te&&(ee=!0),se&&(F=tB({},uB),P=[],!0===se.html&&(tB(F,aB),tB(P,pB)),!0===se.svg&&(tB(F,oB),tB(P,fB),tB(P,mB)),!0===se.svgFilters&&(tB(F,sB),tB(P,fB),tB(P,mB)),!0===se.mathMl&&(tB(F,cB),tB(P,hB),tB(P,mB))),e.ADD_TAGS&&(F===L&&(F=rB(F)),tB(F,e.ADD_TAGS,Ce)),e.ADD_ATTR&&(P===z&&(P=rB(P)),tB(P,e.ADD_ATTR,Ce)),e.ADD_URI_SAFE_ATTR&&tB(pe,e.ADD_URI_SAFE_ATTR,Ce),e.FORBID_CONTENTS&&(le===ce&&(le=rB(le)),tB(le,e.FORBID_CONTENTS,Ce)),ae&&(F["#text"]=!0),Z&&tB(F,["html","head","body"]),F.table&&(tB(F,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw QN('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw QN('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(h,a)),null!==w&&"string"==typeof $&&($=w.createHTML(""));RN&&RN(e),Oe=e}},Ee=tB({},[...oB,...sB,...lB]),_e=tB({},[...cB,...dB]),Me=function(e){HN(n.removed,{element:e});try{y(e).removeChild(e)}catch(t){v(e)}},Re=function(e,t){try{HN(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){HN(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Me(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ae=function(e){let t=null,n=null;if(J)e="<remove></remove>"+e;else{const t=UN(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Se&&ve===ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(ve===ge)try{t=(new f).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=j.createDocument(ve,"template",null);try{t.documentElement.innerHTML=be?$:i}catch(e){}}const a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),ve===ge?C.call(t,Z?"html":"body")[0]:Z?t.documentElement:a},Ne=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Be=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Fe=function(e){return"function"==typeof l&&e instanceof l};function Le(e,t,r){LN(e,(e=>{e.call(n,t,r,Oe)}))}const Pe=function(e){let t=null;if(Le(T.beforeSanitizeElements,e,null),Be(e))return Me(e),!0;const r=Ce(e.nodeName);if(Le(T.uponSanitizeElement,e,{tagName:r,allowedTags:F}),G&&e.hasChildNodes()&&!Fe(e.firstElementChild)&&ZN(/<[/\w!]/g,e.innerHTML)&&ZN(/<[/\w!]/g,e.textContent))return Me(e),!0;if(e.nodeType===DB)return Me(e),!0;if(G&&e.nodeType===IB&&ZN(/<[/\w]/g,e.data))return Me(e),!0;if(!F[r]||W[r]){if(!W[r]&&He(r)){if(H.tagNameCheck instanceof RegExp&&ZN(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(ae&&!le[r]){const t=y(e)||e.parentNode,n=x(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const i=g(n[r],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,b(e))}}}return Me(e),!0}return e instanceof c&&!function(e){let t=y(e);t&&t.tagName||(t={namespaceURI:ve,tagName:"template"});const n=VN(e.tagName),r=VN(t.tagName);return!!xe[e.namespaceURI]&&(e.namespaceURI===me?t.namespaceURI===ge?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||we[r]):Boolean(Ee[n]):e.namespaceURI===he?t.namespaceURI===ge?"math"===n:t.namespaceURI===me?"math"===n&&$e[r]:Boolean(_e[n]):e.namespaceURI===ge?!(t.namespaceURI===me&&!$e[r])&&!(t.namespaceURI===he&&!we[r])&&!_e[n]&&(je[n]||!Ee[n]):!("application/xhtml+xml"!==Se||!xe[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!ZN(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&e.nodeType===TB&&(t=e.textContent,LN([D,I,E],(e=>{t=qN(t,e," ")})),e.textContent!==t&&(HN(n.removed,{element:e.cloneNode()}),e.textContent=t)),Le(T.afterSanitizeElements,e,null),!1):(Me(e),!0)},ze=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in r||n in Te))return!1;if(U&&!V[t]&&ZN(_,t));else if(Y&&ZN(M,t));else if(!P[t]||V[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&ZN(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&ZN(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&ZN(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(pe[t]);else if(ZN(B,qN(n,A,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==KN(n,"data:")||!de[e]){if(q&&!ZN(R,qN(n,A,"")));else if(n)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&UN(e,N)},We=function(e){Le(T.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Be(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P,forceKeepAttr:void 0};let i=t.length;for(;i--;){const a=t[i],{name:o,namespaceURI:s,value:l}=a,c=Ce(o),d=l;let u="value"===o?d:XN(d);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,Le(T.uponSanitizeAttribute,e,r),u=r.attrValue,!ie||"id"!==c&&"name"!==c||(Re(o,e),u="user-content-"+u),G&&ZN(/((--!?|])>)|<\/(style|title)/i,u)){Re(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){Re(o,e);continue}if(!K&&ZN(/\/>/i,u)){Re(o,e);continue}X&&LN([D,I,E],(e=>{u=qN(u,e," ")}));const p=Ce(e.nodeName);if(ze(p,c,u)){if(w&&"object"==typeof h&&"function"==typeof h.getAttributeType)if(s);else switch(h.getAttributeType(p,c)){case"TrustedHTML":u=w.createHTML(u);break;case"TrustedScriptURL":u=w.createScriptURL(u)}if(u!==d)try{s?e.setAttributeNS(s,o,u):e.setAttribute(o,u),Be(e)?Me(e):zN(n.removed)}catch(t){Re(o,e)}}else Re(o,e)}Le(T.afterSanitizeAttributes,e,null)},Ve=function e(t){let n=null;const r=Ne(t);for(Le(T.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Le(T.uponSanitizeShadowNode,n,null),Pe(n),We(n),n.content instanceof o&&e(n.content);Le(T.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,a=null,s=null,c=null;if(be=!e,be&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Fe(e)){if("function"!=typeof e.toString)throw QN("toString is not a function");if("string"!=typeof(e=e.toString()))throw QN("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Q||Ie(t),n.removed=[],"string"==typeof e&&(oe=!1),oe){if(e.nodeName){const t=Ce(e.nodeName);if(!F[t]||W[t])throw QN("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=Ae("\x3c!----\x3e"),a=r.ownerDocument.importNode(e,!0),a.nodeType===OB&&"BODY"===a.nodeName||"HTML"===a.nodeName?r=a:r.appendChild(a);else{if(!ee&&!X&&!Z&&-1===e.indexOf("<"))return w&&ne?w.createHTML(e):e;if(r=Ae(e),!r)return ee?null:ne?$:""}r&&J&&Me(r.firstChild);const d=Ne(oe?e:r);for(;s=d.nextNode();)Pe(s),We(s),s.content instanceof o&&Ve(s.content);if(oe)return e;if(ee){if(te)for(c=k.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(P.shadowroot||P.shadowrootmode)&&(c=O.call(i,c,!0)),c}let u=Z?r.outerHTML:r.innerHTML;return Z&&F["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&ZN(SB,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),X&&LN([D,I,E],(e=>{u=qN(u,e," ")})),w&&ne?w.createHTML(u):u},n.setConfig=function(){Ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},n.clearConfig=function(){Oe=null,Q=!1},n.isValidAttribute=function(e,t,n){Oe||Ie({});const r=Ce(e),i=Ce(t);return ze(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&HN(T[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=PN(T[e],t);return-1===n?void 0:WN(T[e],n,1)[0]}return zN(T[e])},n.removeHooks=function(e){T[e]=[]},n.removeAllHooks=function(){T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const RB=q.default.div`
    display: flex;
    flex-direction: column;
`,AB=q.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,NB=q.default(Bx)`
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

    ${ts.MaxWidth.mobileM} {
        padding: 0 0.5rem;
    }
`,BB=q.default(Ys.Small)`
    margin: 2rem 0rem;
`,FB=q.default.nav`
    display: flex;
`,LB=q.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${ts.MaxWidth.tablet} {
        align-self: center;
    }
`,PB=q.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,zB=q.default(is)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${Qo.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Qo.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Qo.Accent.Light[1]};
    }
`,HB=q.default(is)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${Qo.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Qo.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Qo.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?i.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:i.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${ts.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,WB=q.default(Ys.Default)`
    background: ${e=>e.$selected?Qo.Primary:Qo.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?Qo.Primary:Qo.Neutral[5]};
    color: ${e=>e.$selected?Qo.Neutral[8]:Qo.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?Qo.Neutral[8]:Qo.Neutral[1]};
        ${e=>e.$selected?i.css`
                    ${gs.getTextStyle("Body",700)};
                `:i.css`
                    ${gs.getTextStyle("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?Qo.Primary:Qo.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?Qo.Primary:Qo.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?Qo.Neutral[8]:Qo.Primary};
            ${e=>e.$selected?i.css`
                        ${gs.getTextStyle("Body",700)};
                    `:i.css`
                        ${gs.getTextStyle("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?Qo.Primary:Qo.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Qo.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?Qo.Neutral[8]:Qo.Primary};

            ${e=>e.$selected?i.css`
                        ${gs.getTextStyle("Body",700)};
                    `:i.css`
                        ${gs.getTextStyle("Body",400)};
                    `}
        }
    }
`;q.default(is)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Qo.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${Qo.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${Qo.Accent.Light[1]};
    }
`;const VB=q.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,YB=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Qo.Neutral[1]};

    display: flex;
    justify-content: center;
`,UB=q.default(exports.Text.Body)`
    white-space: nowrap;
`,qB=q.default(exports.Text.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,KB=q.default(Bx)`
    ${gs.getTextStyle("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Qo.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${gs.getTextStyle("XSmall",400)};
        }
    }
`,XB=q.default.div`
    ${gs.getTextStyle("XSmall",400)};

    background-color: ${Qo.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${Qo.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,GB=q.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,ZB=Y.default.forwardRef((({id:n,"data-testid":r,className:i,pageSize:a=10,totalItems:o,activePage:s,pageSizeOptions:l=QB,showFirstAndLastNav:c,showPageSizeChanger:d=!1,onPageChange:u,onPageSizeChange:p},m)=>{const g=kl.useMediaQuery({maxWidth:Jo.mobileL}),v=l,[b,x]=t.useState(!1),[y,w]=t.useState(!1),[$,j]=t.useState(""),[S,k]=t.useState(v&&v.length>=1?v[0]:null),[C,O]=t.useState(!g&&d&&S?S.value:a),T=Math.ceil(o/C),D=1===s,I=s===T,E=s>1?()=>V(1):void 0,_=s<T?()=>V(T):void 0,M=s>1?()=>V(s-1):void 0,R=s<T?()=>V(parseInt(s.toString())+1):void 0,A=e=>e?()=>Z():()=>X(),N=e=>e?()=>Q():()=>G();t.useEffect((()=>{s&&H(s)}),[s]),t.useEffect((()=>{var e;O(a),k(null!==(e=v.find((e=>e.value===a)))&&void 0!==e?e:null)}),[a]);const H=e=>{j(e.toString())},W=()=>{x(!1),w(!1)},V=e=>{u&&(u(e),H(e))},Y=()=>{const e=Math.min(T,s+5);V(e),H(e),x(!0),w(!1)},U=()=>{const e=Math.max(1,s-5);V(e),H(e),x(!1),w(!0)},q=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));H(Math.max(1,Math.min(T,e)))}else j(t.replace(/[^0-9]/g,""))},K=e=>{e.preventDefault(),$&&u(parseInt($))},X=()=>{x(!0)},G=()=>{x(!1)},Z=()=>{w(!0)},Q=()=>{w(!1)},J=(t,n,r)=>e.jsxs(VB,{children:[e.jsx(zB,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:A(t),onMouseOut:N(t),onFocus:A(t),onBlur:N(t),onClick:t?U:Y},{children:t&&y?e.jsx(B.Chevron2LeftIcon,{"aria-hidden":!0}):n&&b?e.jsx(F.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(z.EllipsisHorizontalIcon,{"aria-hidden":!0})})),t&&y&&e.jsx(XB,{children:"Previous 5 pages"}),n&&b&&e.jsx(XB,{children:"Next 5 pages"})]},r);return e.jsxs(FB,Object.assign({className:i,ref:m,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e.jsx(LB,{children:e.jsxs(PB,{children:[c&&e.jsx(HB,Object.assign({onClick:E,disabled:D,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e.jsx(L.ChevronLineLeftIcon,{"aria-hidden":!0})})),e.jsx(HB,Object.assign({onClick:M,disabled:D,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e.jsx(h.ChevronLeftIcon,{"aria-hidden":!0})})),g?e.jsxs(YB,{children:[e.jsx("form",Object.assign({onSubmit:K},{children:e.jsx(KB,{value:$,onChange:q,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e.jsx(qB,{children:"/"}),e.jsx(UB,{children:T})]}):[...Array(T)].map(((t,n)=>{const r=n+1,i=T-5,a=s===r;if(T<=7)return e.jsx(WB,Object.assign({onClick:()=>V(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:W,onFocus:W},{children:r}),r);const o=s+1>5&&2===r,l=s-1<=i&&r===T-1-1;return o||l?J(o,l,r):r<=5&&s+1<=5||r<=1||r===s||r<=s+1&&r>=s-1-1||r>i&&s-1>i||r>T-1?e.jsx(WB,Object.assign({onClick:()=>V(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:W,onFocus:W},{children:r}),r):null})),e.jsx(HB,Object.assign({onClick:R,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e.jsx(f.ChevronRightIcon,{"aria-hidden":!0})})),c&&e.jsx(HB,Object.assign({onClick:_,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e.jsx(P.ChevronLineRightIcon,{"aria-hidden":!0})}))]})}),d&&!g&&e.jsx(GB,{children:e.jsx(aI,{options:v,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:S,onSelectOption:e=>{k(e);const t=e.value,n=Math.ceil(o/t);O(t);p&&p(s>=n?n:s,t)}})})]}))})),QB=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],JB=q.default.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${gs.getTextStyle("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=Qo.Neutral[8],e.$color){case"grey":t=Qo.Neutral[3],n=Qo.Neutral[3];break;case"green":t=Qo.Validation.Green.Text,n=Qo.Validation.Green.Text;break;case"yellow":t=Qo.Validation.Orange.Text,n=Qo.Validation.Orange.Text;break;case"red":t=Qo.Validation.Red.Text,n=Qo.Validation.Red.Text;break;case"blue":t=Qo.Validation.Blue.Text,n=Qo.Validation.Blue.Text;break;default:t=Qo.Neutral[1],n=Qo.Neutral[1]}else switch(e.$color){case"grey":t=Qo.Neutral[6],n=Qo.Neutral[4],r=Qo.Neutral[3];break;case"green":t=Qo.Validation.Green.Background,n=Qo.Validation.Green.Border,r=Qo.Validation.Green.Text;break;case"yellow":t=Qo.Validation.Orange.Background,n=Qo.Validation.Orange.Border,r=Qo.Validation.Orange.Text;break;case"red":t=Qo.Validation.Red.Background,n=Qo.Validation.Red.Border,r=Qo.Validation.Red.Text;break;case"blue":t=Qo.Validation.Blue.Background,n=Qo.Validation.Blue.Border,r=Qo.Validation.Blue.Text;break;default:t=Qo.Neutral[8],n=Qo.Neutral[5],r=Qo.Neutral[1]}return i.css`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};
        `}}
`,eF=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,tF=t=>{var{type:n,colorType:r="black",children:i,icon:a}=t,o=X(t,["type","colorType","children","icon"]);return e.jsxs(JB,Object.assign({$type:n,$color:r},o,{children:[a,e.jsx(eF,{children:i})]}))},nF=q.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${ws.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${ws.Base};
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

	${ts.MaxWidth.mobileL} {
        display: none;
    }
`,rF=q.default(yf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,iF=q.default.div`
    position: relative;
    width: fit-content;
`,aF=q.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,oF=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,sF=n=>{var{children:r,visible:i,onMobileClose:a}=n,o=X(n,["children","visible","onMobileClose"]);const s=o["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=kl.useMediaQuery({maxWidth:Jo.mobileL}),p=t.useRef(l);t.useEffect((()=>(m(),window.addEventListener("resize",Zd(f,300)),()=>{window.removeEventListener("resize",Zd(f,300))})),[]);const f=()=>{m()},h=()=>{a&&a()},m=()=>{const e=g();var t;e&&(t=e,p.current=t,c(t))},g=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===p.current||"left"===p.current)&&e.x-e.width/2>t||("top-right"===p.current||"right"===p.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},v=()=>"string"==typeof r?e.jsx(exports.Text.BodySmall,{children:r}):r;return e.jsxs(e.Fragment,{children:[e.jsx(nF,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},o,{children:e.jsx(Td,{children:v()})})),u&&e.jsx(vf,Object.assign({show:i,onOverlayClick:h},{children:e.jsx(rF,Object.assign({onClose:h},{children:e.jsx(oF,{children:v()})}))}))]})},lF=q.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${ts.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${ts.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,cF=q.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,dF=q.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Qo.Accent.Light[1]:Qo.Neutral[6])(e)};\n        `}};
`,uF=q.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Qo.Primary:Qo.Neutral[3])(e)};`}};
`,pF=q.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    color: ${Qo.Neutral[1]};
`,fF=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var hF=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),mF=Mo,gF=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,vF=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var bF=function(e){return(e=mF(e))&&e.replace(gF,hF).replace(vF,"")},xF=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var yF=function(e){return e.match(xF)||[]},wF=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var $F=function(e){return wF.test(e)},jF="\\ud800-\\udfff",SF="\\u2700-\\u27bf",kF="a-z\\xdf-\\xf6\\xf8-\\xff",CF="A-Z\\xc0-\\xd6\\xd8-\\xde",OF="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",TF="["+OF+"]",DF="\\d+",IF="["+SF+"]",EF="["+kF+"]",_F="[^"+jF+OF+DF+SF+kF+CF+"]",MF="(?:\\ud83c[\\udde6-\\uddff]){2}",RF="[\\ud800-\\udbff][\\udc00-\\udfff]",AF="["+CF+"]",NF="(?:"+EF+"|"+_F+")",BF="(?:"+AF+"|"+_F+")",FF="(?:['’](?:d|ll|m|re|s|t|ve))?",LF="(?:['’](?:D|LL|M|RE|S|T|VE))?",PF="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",zF="[\\ufe0e\\ufe0f]?",HF=zF+PF+("(?:\\u200d(?:"+["[^"+jF+"]",MF,RF].join("|")+")"+zF+PF+")*"),WF="(?:"+[IF,MF,RF].join("|")+")"+HF,VF=RegExp([AF+"?"+EF+"+"+FF+"(?="+[TF,AF,"$"].join("|")+")",BF+"+"+LF+"(?="+[TF,AF+NF,"$"].join("|")+")",AF+"?"+NF+"+"+FF,AF+"+"+LF,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",DF,WF].join("|"),"g");var YF=yF,UF=$F,qF=Mo,KF=function(e){return e.match(VF)||[]};var XF=ND,GF=bF,ZF=function(e,t,n){return e=qF(e),void 0===(t=n?void 0:t)?UF(e)?KF(e):YF(e):e.match(t)||[]},QF=RegExp("['’]","g");var JF=Ci(function(e){return function(t){return XF(ZF(GF(t).replace(QF,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const eL=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${Qo.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${Qo.Neutral[4](e)};\n\t\t\t`}}
`,tL=q.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,nL=q.default.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?Qo.Neutral[4](e):Qo.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,rL=q.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,iL=q.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${Qo.Neutral[5]};
    background-color: ${Qo.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,aL=q.default(iL)`
    height: 100vh;
    left: 0;
    top: 0;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,oL=q.default(iL)`
    display: none;
    visibility: hidden;
    ${ts.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,sL=q.default(Si.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Qo.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${Qo.Neutral[5]};

    ${e=>e.$showDrawer?i.css`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:i.css`
                  border: 0;
                  padding: 0;
              `};
`,lL=q.default.li`
    width: 100%;
`,cL=q.default(Ys.Default)`
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
            ${gs.getFontFamily("XSmall","regular")}
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
                background-color: ${Qo.Accent.Light[5]};
                color: ${Qo.Primary} !important;
            }

            span {
                ${gs.getFontFamily("XSmall","semibold")}
                color: ${Qo.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&i.css`
            span {
                div {
                    background-color: ${Qo.Accent.Light[5]};
                }

                span {
                    ${gs.getFontFamily("XSmall","semibold")}
                    color: ${Qo.Primary};
                }
            }
        `}
`,dL=q.default.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,uL=q.default(exports.Text.XSmall)``,pL=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),fL=q.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,hL=q.default.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${Qo.Neutral[5]};
`,mL=q.default(Si.li)``,gL=q.default(Ys.Default)`
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
        ${gs.getFontFamily("H5","semibold")}
        font-size: 1rem !important;
        color: ${Qo.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Qo.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&i.css`
                    color: ${Qo.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&i.css`
            background-color: ${Qo.Accent.Light[4]};
        `}
`,vL=q.default(Si.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,bL=q.default.div`
    align-self: center;
    padding-left: 0.5rem;
`,xL=q.default(r.ChevronUpIcon)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${Qo.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,yL=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,wL=q.default(Si.ul)``,$L=q.default.li``,jL=q.default(Ys.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${gs.getFontFamily("H5","regular")}
        font-size: 1rem !important;
        color: ${Qo.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${Qo.Accent.Light[5]};
        span {
            ${gs.getFontFamily("H5","semibold")}
            color: ${Qo.Primary} !important;
        }
    }
`,SL=Object.assign((n=>{var{fixed:r=!0,children:i}=n,a=X(n,["fixed","children"]);const o=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,p]=t.useState(void 0),[f,h]=t.useState(!1),m=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:p})),[s,c,u,l,d,p]),g=oi({width:f?240:0,borderRightWidth:f?1:0,borderTopWidth:f?1:0,borderBottomWidth:f?1:0,borderLeftWidth:0});return cc("click",(e=>{o.current&&!o.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),p(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{h(c&&!!c.content||s&&!!s.content)}),[s,c]),e.jsx(pL.Provider,Object.assign({value:m},{children:e.jsxs(rL,Object.assign({$fixed:r},a,{ref:o,onMouseLeave:()=>{l(void 0)}},{children:[e.jsx(aL,{children:i}),e.jsx(sL,Object.assign({style:g,$showDrawer:f,"data-testid":"sidenav-drawer"},{children:s&&s.content||c&&c.content})),e.jsx(oL,{})]}))}))}),{Group:t=>{var{separator:n,children:r}=t,i=X(t,["separator","children"]);return e.jsxs(fL,Object.assign({},i,{children:[r,n&&e.jsx(hL,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:a,onClick:o}=n,s=X(n,["children","icon","title","onClick"]);const l=s.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:p,setPreviouslySelectedItemId:f,setSelectedItem:h}=t.useContext(pL);t.useEffect((()=>{s.selected&&h({itemId:l,content:void 0})}),[s.selected]);return e.jsx(lL,{children:e.jsxs(cL,Object.assign({styleType:"link",type:"button",onClick:()=>{f((()=>{if(r&&u)return d||u.itemId})()),p({itemId:l,content:r}),h({itemId:l,content:r}),o&&!r&&o(l)},onMouseEnter:()=>{p({itemId:l,content:r})}},s,{$highlight:u&&u.itemId===l||c&&c.itemId===l},{children:[e.jsx(dL,{children:i}),e.jsx(uL,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:a,children:o}=n,s=X(n,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:p,setSelectedItem:f,setPreviouslySelectedItemId:h,setCurrentItem:m}=t.useContext(pL),g=oi({from:{opacity:0},to:{opacity:1}}),v=Ye(),b=v.ref,x=oi({height:o&&l?v.height:0});return e.jsxs(mL,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:g},{children:[e.jsxs(gL,Object.assign({styleType:"link",type:"button",onClick:()=>{o?c(!l):(f({itemId:p.itemId,content:void 0}),m(void 0),h(void 0),a&&a(r))},$highlight:d&&l,$noChildren:!o},{children:[e.jsx(yL,{children:i}),o&&e.jsx(bL,{children:e.jsx(xL,{"aria-hidden":!0,$expanded:l})})]})),e.jsx(vL,Object.assign({style:x},{children:e.jsx(wL,Object.assign({ref:b},{children:o}))}))]}))},DrawerSubitem:n=>{var{id:r,title:i,onClick:a}=n,o=X(n,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(pL);return e.jsx($L,Object.assign({},o,{children:e.jsx(jL,Object.assign({styleType:"link",type:"button",onClick:()=>{a&&a(r),l({itemId:s.itemId,content:void 0}),c(void 0),d(void 0)}},{children:i}))}))}}),kL=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,CL=q.default.div`
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
    background: ${Qo.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${kL} 0.3s;
            `}}
`,OL=q.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,TL=q.default(is)`
    padding: 0;
`,DL=q.default(g.CrossIcon)`
    color: ${Qo.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,IL=q.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,EL=q.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${ts.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,_L=q.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,ML=q.default.div`
    max-width: 30%;
`,RL=q.default(Ys.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${gs.getTextStyle("XSmall","semibold")};
    }
`,AL=q.default(exports.Text.H6)`
    overflow-wrap: anywhere;
    ${ts.MaxWidth.mobileM} {
        ${gs.getTextStyle("XSmall","semibold")}
    }
`,NL=q.default(exports.Text.XSmall)`
    overflow-wrap: anywhere;
`,BL=q.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,FL=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,LL=q.default(b.StarFillIcon)`
    ${FL}
`,PL=q.default(H.StarHalfIcon)`
    ${FL}
`,zL=q.default(v.StarIcon)`
    ${FL}
`,HL="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",WL="smart-app-banner";const VL=Y.default.forwardRef((function(t,n){const{className:r,show:i,href:a,content:o,offset:s=0,icon:l=HL,animated:c=!1,onDismiss:d,onClick:u}=t,{title:p,message:f,buttonLabel:h,buttonAriaLabel:m,numberOfStars:g}=o,v=e=>{e.stopPropagation(),window.open(a,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(CL,Object.assign({ref:n,$isAnimated:c,$offset:s,className:r},{children:[e.jsx(OL,Object.assign({onClick:d,id:`${WL}-dismiss`,"data-testid":`${WL}-dismiss-container`},{children:e.jsx(TL,Object.assign({"aria-label":"Dismiss"},{children:e.jsx(DL,{})}))})),e.jsxs(IL,Object.assign({onClick:v,id:`${WL}-proceed`,"data-testid":`${WL}-proceed-container`},{children:[e.jsx(_L,{src:l,alt:"lifesg-app-icon"}),e.jsxs(EL,{children:[e.jsx(AL,{children:p}),e.jsx(NL,{children:f}),(()=>{if(isNaN(g)||g<0)return;const t=[],n=g-Math.floor(g)>=.4;for(let n=0;n<Math.floor(g);n++)t.push(e.jsx(LL,{},`star${n}`));if(n&&t.push(e.jsx(PL,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e.jsx(zL,{},`emptystar${r}`))}return e.jsx(BL,{children:t.slice(0,5)})})()]}),e.jsx(ML,{children:e.jsx(RL,Object.assign({type:"button",onClick:v,"aria-label":m},{children:h}))})]}))]}))})})),YL=Y.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),UL=q.default.div`
    position: relative;
    width: 100%;
`,qL=q.default.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${ts.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,KL=q.default.div`
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
`,XL=q.default(is)`
    display: none;

    ${ts.MaxWidth.tablet} {
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
            color: ${Qo.Neutral[3]};
        }
    }
`,GL=t.forwardRef(((n,r)=>{var{children:i,fadeColor:a,fadePosition:o="both",showIndicator:s=!1,onResize:l}=n,c=X(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===o||"both"===o),[p,m]=t.useState("right"===o||"both"===o),g=t.useRef(null),v=t.useRef(null),b=tu(x,50);function x(){const e=g.current,t=v.current;e&&t&&t.scrollWidth>e.offsetWidth?(m(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(m(!1),u(!1))}function y(){x(),l&&l({content:v.current,wrapper:g.current})}Ye({onResize:y,targetRef:g,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(r,(()=>({resize(){y()}}))),t.useEffect((()=>{const e=v.current;return x(),e&&e.addEventListener("scroll",b),()=>{e&&e.removeEventListener("scroll",b)}}),[]);return e.jsxs(UL,Object.assign({ref:g},c,{children:[e.jsx(KL,Object.assign({ref:v},{children:i})),(()=>{let t;return t=Array.isArray(a)&&a.length>0?{left:a,right:a}:a||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(qL,Object.assign({$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e.jsx(XL,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e.jsx(h.ChevronLeftIcon,{})}))})),p&&e.jsx(qL,Object.assign({$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e.jsx(XL,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e.jsx(f.ChevronRightIcon,{})}))}))]})})()]}))})),ZL=q.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return i.css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: 4px solid ${Qo.Neutral[5]};
                }
            `}}
`,QL=q.default.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: 4px solid ${Qo.Neutral[5]};

    ${e=>{if(e.$width)return i.css`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return i.css`
                border-bottom: 4px solid ${Qo.Primary};
            `}}

    ${ts.MaxWidth.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,JL=q.default.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,eP=q.default(exports.Text.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Qo.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,tP=q.default(exports.Text.Body)`
    color: ${Qo.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,nP=q.default(GL)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,rP=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:o,currentActiveIndex:s,tabLinks:l}=t.useContext(YL),c=kl.useMediaQuery({maxWidth:ns.mobileL}),d=t.useRef(null),u=e=>t=>{t.preventDefault(),n||o(e),i&&i(l[e].title,e)},p=e=>c&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(nP,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=ns.tablet&&d.current&&(e.scrollLeft=d.current.getBoundingClientRect().left)},"data-testid":r},{children:e.jsx(ZL,Object.assign({role:"tablist",$fullWidthIndicatorLine:a},{children:l.map(((t,n)=>{const i=s===n;return e.jsx(QL,Object.assign({role:"none",$active:i,ref:i?d:null,$width:t.width},{children:e.jsxs(JL,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:u(n),"data-testid":`${r}-link-${n}`},{children:[e.jsx(eP,Object.assign({$active:i,weight:"regular"},{children:p(t.title)})),e.jsx(tP,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:p(t.title)}))]}))}),n)}))}))}))},iP=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,aP=Object.assign((n=>{var{children:r,currentActive:i,initialActive:a=0,onTabClick:o,"data-testid":s,fullWidthIndicatorLine:l}=n,c=X(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[d,u]=t.useState(i||a),p=t.useMemo((()=>t.Children.toArray(r).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[r]);t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);return e.jsx(iP,Object.assign({"data-testid":s},c,{children:e.jsxs(YL.Provider,Object.assign({value:{tabLinks:p,currentActiveIndex:d,setCurrentActiveIndex:u}},{children:[e.jsx(rP,{controlledMode:"number"==typeof i,onTabClick:o,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(r).filter(Boolean).map(((e,n)=>t.cloneElement(e,{key:n,index:n})))]}))}))}),{Item:n=>{var{index:r,children:i}=n,a=X(n,["index","children"]);const{currentActiveIndex:o}=t.useContext(YL);return o===r?e.jsx("div",Object.assign({role:"tabpanel"},a,{children:i})):null}}),oP=q.default.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${gs.getTextStyle("XSmall","semibold")}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,a;if("solid"===e.$type)switch(r=Qo.Neutral[8],a=`0px 0px 4px 1px ${Qo.Neutral[4](e)}`,e.$color){case"grey":t=Qo.Neutral[3],n=Qo.Neutral[3];break;case"green":t=Qo.Validation.Green.Text,n=Qo.Validation.Green.Text;break;case"yellow":t=Qo.Validation.Orange.Text,n=Qo.Validation.Orange.Text;break;case"red":t=Qo.Validation.Red.Text,n=Qo.Validation.Red.Text;break;case"blue":t=Qo.Validation.Blue.Text,n=Qo.Validation.Blue.Text;break;default:t=Qo.Neutral[1],n=Qo.Neutral[1]}else switch(a="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=Qo.Neutral[6],n=Qo.Neutral[4],r=Qo.Neutral[3];break;case"green":t=Qo.Validation.Green.Background,n=Qo.Validation.Green.Border,r=Qo.Validation.Green.Text;break;case"yellow":t=Qo.Validation.Orange.Background,n=Qo.Validation.Orange.Border,r=Qo.Validation.Orange.Text;break;case"red":t=Qo.Validation.Red.Background,n=Qo.Validation.Red.Border,r=Qo.Validation.Red.Text;break;case"blue":t=Qo.Validation.Blue.Background,n=Qo.Validation.Blue.Border,r=Qo.Validation.Blue.Text;break;default:t=Qo.Neutral[8],n=Qo.Neutral[5],r=Qo.Neutral[1],a="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return i.css`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?a:"none"};
                }
            }
        `}}

    ${ts.MaxWidth.tablet} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${gs.getTextStyle("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,sP=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var lP;Pl.extend(Hl),function(e){e.formatHourlyDisplay=e=>Pl(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>ic.getTimeDiffInMinutes(e,t)/15*(n/2)}(lP||(lP={}));const cP=1.25,dP=e=>"minified"===e?12:40,uP=e=>"minified"===e?12:40,pP=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,fP=q.default(is)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Qo.Neutral[8]};
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
`,hP=q.default(f.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Qo.Primary};
`,mP=q.default(h.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Qo.Primary};
`,gP=q.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+uP(e)}px`};
`,vP=q.default.div`
    position: relative;
    white-space: nowrap;
    height: ${cP}rem;
`,bP=q.default.div`
    display: flex;
    white-space: nowrap;
`,xP=q.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${dP(e)}px`};
    position: relative;
    border-left: 1px solid ${Qo.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?cP:.625;break;case"minified":t=e.$isLongMarker?cP:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,yP=q.default(exports.Text.XSmall)`
    color: ${Qo.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,wP=q.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${uP(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&i.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Qo.Neutral[5]} 0px,
                ${e.$bgColor2||Qo.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`,$P=q.default.div`
    position: absolute;
    top: ${cP}rem;
    height: ${({$variant:e})=>`${uP(e)}px`};
    z-index: 1;
    border-right: 1px solid ${Qo.Neutral[2]};
`,jP=q.default(exports.Text.XSmall)`
    color: ${e=>e.$color||Qo.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,SP=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,kP=q.default(exports.Text.XSmall)`
    ${e=>e.$disabled&&i.css`
            color: ${Qo.Neutral[4]};
        `}
`,CP=q.default.div`
    grid-column: 2 / -1;
    display: flex;
`,OP=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,TP=q.default(Si.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,DP=q.default.div`
    display: flex;
    gap: 0.25rem;
    transition: ${ws.Base};
    overflow: hidden;
`,IP=q.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${ws.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,EP=q.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,_P=q.default.div`
    ${gs.getFontFamily("Body",700)}
    color: ${Qo.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,MP=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,RP=q.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,AP=q.default(Ys.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,NP=q.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,BP=q.default(wP)`
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
                        ${Qo.Neutral[5]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||Qo.Neutral[5]} 0px,\n                            ${e.$bgColor2||Qo.Neutral[5]} 10px,\n                            ${e.$bgColor} 10px,\n                            ${e.$bgColor} 20px\n                        )`};
            `:i.css`
                background-color: ${e.$bgColor};
            `}
`;var FP=qi;var LP=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o==o&&!FP(o):n(o,s)))var s=o,l=a}return l};var PP=LP,zP=H$,HP=function(e,t){return e<t};var WP=Ci((function(e,t){return e&&e.length?PP(e,zP(t),HP):void 0}));var VP=LP,YP=function(e,t){return e>t},UP=H$;var qP=Ci((function(e,t){return e&&e.length?VP(e,UP(t),YP):void 0}));const KP=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:p=30,variant:f="flexible",enableSelection:h=!0,onSlotClick:m})=>{var g,v,b,x;const y="YYYY-MM-DD",[w,$]=t.useState(!1),[j,S]=t.useState(),k=t.useMemo((()=>Ql.generateDaysForCurrentWeek(n)),[n]),C=Object.values(null!=u?u:{}).flat(),O=null!==(v=null!=l?l:null===(g=WP(C,"startTime"))||void 0===g?void 0:g.startTime)&&void 0!==v?v:"00:00",T=null!==(x=null!=c?c:null===(b=qP(C,"endTime"))||void 0===b?void 0:b.endTime)&&void 0!==x?x:"24:00",D=Math.ceil(ic.getTimeDiffInMinutes(O,T)/p),{height:I,ref:E}=Ye(),_=d?I<d||w?I:d:I,M=oi({height:_}),R=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,n])=>{const r=function(e){const t=Array(D).fill({});return e.forEach((e=>{const n=Math.max(0,ic.getTimeDiffInMinutes(O,e.startTime)/p),r=Math.min(D,ic.getTimeDiffInMinutes(O,e.endTime)/p),i=Math.ceil(r)-Math.floor(n);switch(f){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let a=0;a<i;a++){const o=ic.addMinutesToTime(O,Math.floor(n+a)*p),s=ic.addMinutesToTime(o,p);let l;vD(t[Math.floor(n+a)])?0===a&&n%1!=0?l="top":a===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let a=0;switch(f){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return vD(t)&&vD(n)?e:[...e,t]}),[{}]);a<e.length;){if(vD(e[a])){const o=null!==(n=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:O,s=null!==(i=null===(r=e[a+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:T;if(o!==s){const t=ic.getTimeDiffInMinutes(o,s)/p;e[a]=Object.assign(Object.assign({},L(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)vD(e[a])?(e[a]=L(a),a++):a+=e[a].cellLength}return e.filter((e=>!vD(e)&&e.cellLength>0))}(r)})),e}return{}}),[u]),A=e=>{S(e)},N=()=>{S(void 0)},B=e=>{e.preventDefault(),$((e=>!e))},F=e=>{var t;const n=Ql.isWithinRange(e,o?Pl(o):void 0,s?Pl(s):void 0),i=null!==(t=r&&r.includes(e.format(y)))&&void 0!==t&&t;return!n||i};function L(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return e.jsxs(OP,{children:[e.jsx(CP,{children:k.map(((t,n)=>{const r=(e=>{const t=e.format(y),n=F(e),r={},a=h&&!n;return n&&(r.disabled=!0),r.interactive=h?a:null,a&&j&&e.isSame(j,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e.jsx(gd,Object.assign({date:t,calendarDate:Pl(i),onSelect:()=>{((e,t)=>{!t&&h&&a(e)})(t,!r.interactive)},onHover:A,onHoverEnd:N},r),`day-${n}`)}))}),e.jsx(CP,{children:k.map(((t,n)=>e.jsx(SP,{children:e.jsx(kP,Object.assign({weight:"semibold",$disabled:F(t)},{children:Pl(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=Pl(O,"HH:mm").add(4*e*p,"minutes"),r=n.format("h"),i=n.format("mm"),a=n.format("a");let o=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==a||"00"!==i||(o+=` ${a}`,t=!0),o};return e.jsx(IP,Object.assign({$height:_},{children:Array(Math.ceil(D/4)).fill(void 0).map(((t,r)=>e.jsx(EP,{children:e.jsx(_P,{children:n(r)})},`time-${r}`)))}))})(),e.jsx(TP,Object.assign({style:M},{children:e.jsx(DP,Object.assign({ref:E},{children:k.map(((t,n)=>{var r;const i=t.format(y),a=null!==(r=R[i])&&void 0!==r?r:Array("flexible"===f?D:1).fill(void 0).map(((e,t)=>L(t,"fixed"===f?D:void 0)));return e.jsx(MP,{children:a.map((t=>{const{id:n,clickable:r=!0,styleAttributes:a,cellLength:o,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=a;return e.jsx(BP,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===f?12*o+4*(o-1):12,onClick:()=>r&&((e,t)=>{m&&m(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format(y)}`)})),(()=>{if(d&&E.current&&!(I&&I<d))return e.jsx(RP,{children:e.jsxs(AP,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:B},{children:[e.jsx(NP,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]}))})})()]})},XP=q.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${ts.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,GP="YYYY-MM-DD",ZP=q.default(nd)`
    ${e=>{const{$variant:t}=e;if("default"===t)return i.css`
                    ${gs.getFontFamily("H5","semibold")}
                    color: ${Qo.Neutral[3]};
                `}}
`,QP=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,JP=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,ez=q.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,tz=q.default.div`
    ${gs.getTextStyle("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Qo.Neutral[1]};
    span {
        display: block;
    }
`,nz=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Pl.extend(Vl);const rz={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},iz=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>Ql.generateDaysForCurrentWeek(n)),[n]),p="YYYY-MM-DD",f=e=>{const t=e.format(p),n=(e=>{const t=Ql.isWithinRange(e,o?Pl(o):void 0,s?Pl(s):void 0),n=r&&r.includes(e.format(p));return!t||n})(e),a={},l={};return n&&(a.$disabledDisplay=!0,l.$disabledDisplay=!0),a.$interactive=c&&!n,[i].includes(t)&&(a.$selected=!0,l.$selected=!0),{styleCircleProps:a,styleLabelProps:l}};return e.jsxs(JP,{children:[e.jsx(Qc,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:o}=f(t);return e.jsx(Jc,{children:e.jsx(rd,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&a(e)})(t,!i.$interactive)},i,{children:e.jsx(ZP,Object.assign({weight:o.$selected?"semibold":"regular",$variant:r},o,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e.jsx(QP,{children:e.jsx(exports.Text.XSmall,Object.assign({weight:"semibold"},{children:Pl(t).format("ddd")}))},`week-day-${n}`))),e.jsx(ez,{children:u.map(((t,n)=>{const r=t.format(p),i=l&&(l[r]?l[r]:[rz]);return e.jsx(nz,{children:i&&i.map((t=>{const{id:n,startTime:i,endTime:a,clickable:o=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:p}=s;return e.jsx(wP,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:p,$clickable:o,onClick:()=>o&&((e,t)=>{d(e,t)})(r,t)},{children:e.jsxs(tz,Object.assign({style:{color:l}},{children:[e.jsx("span",{children:Ql.convertTo12HourFormat(i)}),a&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Ql.convertTo12HourFormat(a)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${n.format(p)}`)]})},az=q.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${ts.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,oz="YYYY-MM-DD",sz=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return i.css`
                    background-color: ${Qo.Accent.Light[1]};
                `;case"upcoming-active":return i.css`
                    border: 4px solid ${Qo.Accent.Light[1]};
                `;case"upcoming-inactive":return i.css`
                    border: 4px solid ${Qo.Neutral[4]};
                `;case"completed":return i.css`
                    background-color: ${Qo.Validation.Green.Icon};
                    svg {
                        color: ${Qo.Neutral[8]};
                    }
                `;case"error":return i.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Qo.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return i.css`
                    background-color: ${Qo.Neutral[4]};
                `}}}
`,lz=q.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    background-color: ${Qo.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return i.css`
                    background-color: ${Qo.Neutral[4]};
                `;case"completed":return i.css`
                    background-color: ${Qo.Validation.Green.Icon};
                `;case"error":return i.css`
                    margin-left: -0.15rem;
                    background-color: ${Qo.Validation.Red.Icon};
                `}}}
`,cz=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,dz=q.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${ts.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,uz=q.default(exports.Text.H3)`
    margin-bottom: 1rem;

    ${ts.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,pz=q.default(exports.Text.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,fz=q.default.div`
    display: flex;

    :last-of-type ${lz} {
        margin-bottom: 0;
    }
`,hz=q.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,mz=q.default(exports.Text.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,gz=q.default(tF)`
    padding: 0.125rem 0.5rem;
`,vz=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],bz=15,xz=252,yz=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],wz=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,$z=q.default(mf)`
    color: ${Qo.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${wz} 4s linear infinite;
                `}}
    }
`,jz=q.default.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,Sz=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,kz=q.default(exports.Text.H6)`
    color: ${Qo.Neutral[3]};
`,Cz=q.default(Bp)`
    width: 400px;
`,Oz=t=>{var{selectedDate:n,loading:r,tableContainerRef:i,totalRecords:a,onPreviousDayClick:o,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const p=()=>{i.current&&(i.current.scrollTop=0)},f=()=>{l&&(p(),l())};return e.jsxs(jz,{children:[e.jsx(Cz,Object.assign({selectedDate:n,loading:r},d,{onRightArrowClick:e=>{p(),s(e)},onLeftArrowClick:e=>{p(),o(e)},onCalendarDateSelect:c})),void 0===a?e.jsx(e.Fragment,{}):e.jsxs(Sz,{children:[e.jsxs(kz,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[a," results found"]})),l&&e.jsx($z,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:r,onClick:f,$loading:r},{children:e.jsx(u.RefreshIcon,{})}))]})]})},Tz=q.default.div`
    display: flex;
    width: 100%;
`,Dz=q.default.div`
    border-bottom: 1px solid ${Qo.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${Qo.Accent.Light[1]};
            `}}
`,Iz=q.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,Ez=q.default.div`
    width: 2px;
    height: 100%;
`,_z=q.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({$status:e,$mainColor:t,$altColor:n,$isClickable:r})=>{switch(e){case"blocked":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
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
                    background: ${Qo.Neutral[6]};
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
                        background-color: ${r?Qo.Accent.Light[5]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,Mz=q.default(exports.Text.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Rz=q.default(exports.Text.XSmall)`
    color: ${Qo.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Az=Y.default.memo((({id:t,startTime:n,endTime:r,title:i,subtitle:a,status:o,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,roundedStartTime:u=n,roundedEndTime:p=r,onClick:f})=>{const h=0===Pl(p,"HH:mm").get("minutes"),m=ic.getTimeDiffInMinutes(u,p)/bz*s-2,g=!!f||d&&"click"===d.trigger;return e.jsx((({wrapper:e,children:t})=>d?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:c,customOffset:d.offset,children:t,trigger:d.trigger,delay:d.delay,popoverContent:d.content};return e.jsx(zb,Object.assign({},n,{children:t}))})(t)},{children:e.jsx(Dz,Object.assign({"data-testid":"block-container",$isOnTheHour:h},{children:e.jsxs(Iz,{children:[e.jsxs(_z,Object.assign({$width:m,$status:o,$mainColor:l.mainColor,$altColor:l.alternateColor,$isClickable:g,onClick:e=>{f&&f({id:t,startTime:n,endTime:r,status:o,title:i,subtitle:a,customPopover:d},e)}},{children:[i&&e.jsx(Mz,Object.assign({weight:"semibold"},{children:i})),a&&e.jsx(Rz,Object.assign({weight:"bold"},{children:a}))]})),e.jsx(Ez,{})]})}),"block-container-key")}))})),Nz=n=>{var{id:r,timetableMinTime:i,timetableMaxTime:a,rowMinTime:o,rowMaxTime:s,rowCells:l,rowBarColor:c,intervalWidth:d,containerRef:u,outOfRangeCellPopover:p}=n,f=X(n,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const h=f["data-testid"]||"timetable-row",m=o?mu.roundToNearestInterval(o,bz):i,g=s?mu.roundToNearestInterval(s,bz,!0):a,v=t.useMemo((()=>{const e=[];m&&Pl(i,"HH:mm").isBefore(Pl(m,"HH:mm"))&&e.push({id:r,startTime:i,endTime:m,status:"blocked",customPopover:p});const t=[...l].sort(((e,t)=>{const n=Pl(e.startTime,"HH:mm"),r=Pl(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));let n;return t.forEach(((i,a)=>{var o;const{startTime:s,endTime:l}=i;let c=mu.roundToNearestInterval(s,bz);n&&Pl(c,"HH:mm").isBefore(Pl(n,"HH:mm"))&&(c=mu.roundToNearestInterval(s,bz,!0));const d=mu.roundToNearestInterval(l,bz,!0);e.push(Object.assign(Object.assign({},i),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(o=t[a+1])||void 0===o?void 0:o.startTime)||g,p=Pl(mu.roundToNearestInterval(u,bz),"HH:mm");let f=Pl(d,"HH:mm");for(;f.isBefore(p);)if(h=p,f.get("hour")!=h.get("hour")){const t=f.add(1,"hour").startOf("hour");e.push({id:r,startTime:f.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),f=t}else e.push({id:r,startTime:f.format("HH:mm").toString(),endTime:p.format("HH:mm").toString(),status:"disabled"}),f=p;var h;n=f.format("HH:mm").toString()})),g&&Pl(a,"HH:mm").isAfter(Pl(g,"HH:mm"))&&e.push({id:r,startTime:g,endTime:a,status:"blocked",customPopover:p}),0!==t.length||o||s||e.push({id:r,startTime:i,endTime:a,status:"blocked",customPopover:p}),e}),[m,i,l,g,a,o,s,r,p]);return e.jsx(Tz,Object.assign({"data-testid":h},f,{children:v.map(((t,n)=>e.jsx(Az,Object.assign({},t,{intervalWidth:d,rowBarColor:c,containerRef:u}),`${n}-row-cell-key`)))}))},Bz=q.default.div``,Fz=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${xz}px auto;
`,Lz=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${xz}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,Pz=q.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${xz}px;
    z-index: 2;
    border-bottom: 1px solid ${Qo.Neutral[5]};
    ${e=>e.$isScrolledX||e.$isScrolledY?i.css`
                box-shadow: 0.125rem 0.125rem 0.5rem ${Qo.Neutral[5]};
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
`,zz=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,Hz=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: white;
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: 1px solid ${Qo.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return i.css`
                box-shadow: 0rem 0.125rem 0.5rem ${Qo.Neutral[5]};
            `}};
`,Wz=q.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,Vz=q.default(exports.Text.H6)`
    color: ${Qo.Neutral[3]};
`,Yz=q.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,Uz=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${xz}px;
    height: ${68}px;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${Qo.Neutral[5]};
    border-left: 1px solid ${Qo.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 0.125rem 0.125rem 0.5rem ${Qo.Neutral[5]};
            `:i.css`
                box-shadow: inset -0.5px 0px ${Qo.Accent.Light[1]};
            `};
`,qz=q.default(exports.Text.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Qo.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,Kz=q.default(exports.Text.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${Qo.Neutral[3]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,Xz=q.default(yl)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,Gz=q.default(Mu)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,Zz=q.default.div`
    display: flex;
    border-bottom: 1px solid ${Qo.Neutral[5]};
`,Qz=q.default.div`
    border-right: 0.5px solid ${Qo.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,Jz=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,eH=q.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Qo.Neutral[6]} 8%,
        ${Qo.Neutral[7]} 18%,
        ${Qo.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${Jz} 1.5s forwards infinite;
`,tH=q.default(zb)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,nH=e=>{switch(e.$type){case"success":return Qo.Validation.Green;case"warning":return Qo.Validation.Orange;case"error":return Qo.Validation.Red;case"info":return Qo.Validation.Blue;default:return}},rH=q.default(Si.div)`
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

    ${ts.MaxWidth.tablet} {
        left: 0;
    }

    ${e=>i.css`
            background: ${nH(e).Background};
            border: 1px solid ${nH(e).Border};
            color: ${nH(e).Text};
        `};
`,iH=q.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${ts.MaxWidth.mobileL} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,aH=q.default.div`
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
                color: ${nH(e).Icon};
            }
        `};
`,oH=q.default.div`
    display: flex;
    flex-direction: column;
`,sH=q.default(exports.Text.H4)`
    display: flex;

    ${e=>i.css`
            color: ${nH(e).Text};
        `}
`,lH=q.default.div`
    ${e=>i.css`
            p {
                color: ${nH(e).Text};
            }
        `}
`,cH=q.default(Ys.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${ts.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,dH=q.default(is)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${nH(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${ts.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,uH=4e3,pH=q.default.div`
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

                ${ts.MaxWidth.mobileL} {
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

                ${ts.MaxWidth.mobileL} {
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

                ${ts.MaxWidth.mobileL} {
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

                ${ts.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${ws.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${ws.Base};
            z-index: -1;
        `}
`,fH=q.default(Td)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,hH=q.default.div`
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
                        border-color: ${Qo.Neutral[8]} transparent
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
                        border-color: transparent ${Qo.Neutral[8]}
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
                            ${Qo.Neutral[8]};
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
                            ${Qo.Neutral[8]} transparent;
                    }
                `}}}
`,mH=q.default.div`
    position: relative;
`,gH=n=>{var{visible:r,position:i="top",children:a}=n,o=X(n,["visible","position","children"]);const s=o["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(p(),window.addEventListener("resize",Zd(u,300)),()=>{window.removeEventListener("resize",Zd(u,300))})),[]);const u=()=>{p()},p=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(pH,Object.assign({position:l,"data-testid":s,visible:r,ref:d},o,{children:[e.jsx(fH,{children:"string"==typeof a?e.jsx(exports.Text.BodySmall,{children:a}):a}),e.jsx(hH,{position:l})]}))},vH=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,bH=q.default(ix.Content)`
    background: ${({$background:e})=>e?Qo.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,xH=q.default(exports.Text.H3)`
    margin-bottom: 1rem;
    ${vH}
`,yH=q.default(exports.Text.Body)`
    margin-bottom: 2rem;
    ${vH}
`,wH=q.default.div`
    ${vH}
`,$H=q.default.ul`
    ${vH}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${ts.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${ts.MaxWidth.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,jH=Y.default.forwardRef(((t,n)=>{var{stretch:r}=t,i=X(t,["stretch"]);return e.jsx($H,Object.assign({ref:n,$stretch:r},i))})),SH=q.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i.css`
                    grid-column: auto / span 4;
                `;case"full":return i.css`
                    grid-column: auto / span 8;
                `}}}

    ${ts.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,kH=q.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Qo.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,CH=q.default.button`
    ${gs.getTextStyle("Body","regular")}
    color: ${Qo.Neutral[1]};
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
`,OH=q.default.span`
    color: ${Qo.Neutral[3]};
`,TH=q.default(zs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Qo.Neutral[3]} transparent transparent transparent;
    }
`,DH=q.default(j.ExclamationTriangleIcon)`
    color: ${Qo.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,IH=q.default.span`
    color: ${Qo.Validation.Orange.Text};
`,EH=q.default.span`
    ${gs.getTextStyle("Body","semibold")}
    color: ${Qo.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,_H=q.default(al)`
    margin-top: 0.5rem;
`,MH=({label:n,value:r,displayWidth:i="full",maskState:a,maskLoadingState:o,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:p,maskTransformer:f,onMask:h,onUnmask:m,onTryAgain:g})=>{const[v,b]=t.useState(a);t.useEffect((()=>{b(a)}),[a]);const x=()=>{switch("fail"===o&&g&&g(),v){case"masked":m&&m(),b("unmasked");break;case"unmasked":h&&h(),b("masked")}},y=()=>"string"!=typeof r?r:"masked"===v?sc.maskValue(r,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:f}):r,j=()=>{switch(o){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(DH,{}),e.jsx(IH,{children:"Error"}),e.jsx(EH,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(TH,{}),e.jsx(OH,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[y(),e.jsx(kH,{children:"masked"===v?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(SH,Object.assign({$widthStyle:i},{children:[e.jsx(Zb,{children:n}),"string"!=typeof r?r:v?u?e.jsx(exports.Text.Body,{children:y()}):e.jsx(CH,Object.assign({"data-testid":"clickable-label",onClick:x,"aria-busy":"loading"===o,"aria-live":"polite",type:"button"},{children:j()})):e.jsx(exports.Text.Body,{children:r}),p&&e.jsx(_H,Object.assign({sizeType:"small"},p))]}))},RH=Object.assign((t=>{var{items:n,title:r,description:i,topSection:a,bottomSection:o,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:p}=t,f=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const h=e=>()=>{d&&d(e)},m=e=>()=>{u&&u(e)},g=e=>()=>{p&&p(e)},v=()=>{if(n&&n.length>0){const t=n.map(((t,n)=>e.jsx(MH,Object.assign({},t,{onMask:h(t),onUnmask:m(t),onTryAgain:g(t)}),n)));return e.jsx($H,Object.assign({$stretch:c},{children:t}))}return null};return e.jsx(bH,Object.assign({$background:l},f,{type:"grid"},{children:s||e.jsxs(e.Fragment,{children:[r&&e.jsx(xH,Object.assign({weight:"semibold",$stretch:c},{children:r})),i&&e.jsx(yH,Object.assign({$stretch:c},{children:i})),a&&e.jsx(wH,Object.assign({"data-id":"top-section",$stretch:c},{children:a})),v(),o&&e.jsx(wH,Object.assign({"data-id":"bottom-section",$stretch:c},{children:o}))]})}))}),{ItemSection:jH,Item:MH});exports.Accordion=Gs,exports.Alert=al,exports.BaseTheme=fl,exports.BookingSGTheme=hl,exports.BoxContainer=n=>{var{children:r,title:i,collapsible:a=!0,expanded:o=!1,callToActionComponent:s,displayState:l="default",subComponentTestIds:c,clickableHeader:d}=n,u=X(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[p,f]=t.useState(!a||o),h=Ye(),m=h.ref,g=kl.useMediaQuery({maxWidth:ns.mobileL}),v=e=>{e.stopPropagation(),f(!p)},b=oi({height:p?h.height:0}),x=()=>a&&e.jsx(Nl,Object.assign({onClick:v,type:"button","aria-label":p?"Collapse":"Expand","data-testid":(null==c?void 0:c.handle)||"handle"},{children:e.jsx(Bl,Object.assign({$expanded:p},{children:e.jsx(Fl,{"aria-hidden":!0})}))}));return e.jsxs(Cl,Object.assign({},u,{children:[e.jsxs(Il,Object.assign({"data-testid":"header",onClick:d&&a&&v,$interactive:d&&a},{children:[e.jsxs(_l,{children:[e.jsx(El,Object.assign({id:"title","data-testid":(null==c?void 0:c.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(l){case"error":case"warning":return e.jsx(Ml,Object.assign({$displayState:l,"data-testid":(null==c?void 0:c.displayStateIcon)||`${l}-icon`},{children:e.jsx(Rl,{})}));default:return null}})(),g&&x()]}),s&&e.jsx(Al,Object.assign({$collapsible:a,"data-testid":"call-to-action-container"},{children:s})),!g&&x()]})),a?e.jsx(Ol,Object.assign({style:b,"data-testid":"expandable-container"},{children:e.jsx(Dl,Object.assign({ref:m},{children:r}))})):e.jsx(Tl,Object.assign({"data-testid":"non-expandable-container"},{children:e.jsx(Dl,{children:r})}))]}))},exports.Breadcrumb=n=>{var{links:r,fadeColor:i,fadePosition:a="both",itemStyle:o,id:s}=n,l=X(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[c,d]=t.useState(!1),[u,p]=t.useState(!1),[f,h]=t.useState(!1),m="left"===a||"both"===a,g="right"===a||"both"===a,v=t.useRef(null),b=t.useRef(null),x=lc((()=>{const e=b.current,t=v.current;e&&t&&r&&r.length>1&&window.innerWidth<=Jo.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),y=lc((()=>{const e=window.innerWidth<=Jo.tablet;d(e);const t=b.current,n=v.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return p(t.scrollLeft>=1),void h(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);p(!1),h(!1)}));if(cc("resize",y),cc("scroll",y,b.current),dc((()=>{x(),y()}),[x,y]),Ye({onResize:x,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!r)return null;return e.jsxs(mc,Object.assign({ref:v,id:s||"breadcrumb"},l,{children:[e.jsx("nav",{children:e.jsx(gc,Object.assign({ref:b},{children:r.map(((t,n)=>{let i;return t.children?(i=n!==r.length-1&&t.href?e.jsx(wc,Object.assign({},t,{weight:"semibold"})):e.jsx(yc,Object.assign({weight:"semibold"},{children:t.children})),e.jsxs(bc,Object.assign({$styleProps:o},{children:[i,n<r.length-1&&e.jsx(xc,{})]}),n)):null}))}))}),c&&(()=>{let t;return t=Array.isArray(i)&&i.length>0?{left:i,right:i}:i||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[u&&m&&e.jsx(vc,{$backgroundColor:t.left,$position:"left"}),f&&g&&e.jsx(vc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Button=Ys,exports.ButtonWithIcon=jc,exports.CCubeTheme=vl,exports.Calendar=n=>{var{className:r,styleType:i="bordered",value:a,onSelect:o}=n,s=X(n,["className","styleType","value","onSelect"]);const[l,c]=t.useState(a);return t.useEffect((()=>{c(a)}),[a]),e.jsx(Cd,Object.assign({className:r,$hasBorder:"bordered"===i},{children:e.jsx(Sd,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))}))},exports.Card=Td,exports.Checkbox=_d,exports.Color=Qo,exports.Component=KR,exports.CountdownTimer=n=>{var{className:r,align:i="right",timer:a,timestamp:o,notifyTimer:s,offset:l,mobileOffset:c,show:d,fixed:p=!0,"data-testid":f,onFinish:h,onNotify:m,onTick:g}=n,v=X(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const b=t.useRef(),x=t.useRef(!1),[y,w]=t.useState(0),[$,j]=t.useState(0),[S,k]=t.useState(0),[C,O]=t.useState(!1),[T]=((e,n,r)=>{const[i,a]=t.useState(e);t.useEffect((()=>{if(!n)return;const t=null!=r?r:Date.now()+1e3*e,i=o(t);return()=>clearTimeout(i)}),[r,n,e]);const o=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,i=Math.max(Math.round(n/1e3),0);if(a(i),0!==i)return setTimeout(t,r>500?r:r+1e3)};return t()};return[i]})(a,C,o),{ref:D,inView:I}=su({threshold:1,rootMargin:-1*y+"px 0px 0px 0px",initialInView:!0}),E=!p||I,_=kl.useMediaQuery({maxWidth:Jo.mobileL});t.useEffect((()=>{O(d)}),[d]),t.useEffect((()=>{0===T?N():T<=s&&(R(),A())}),[T]),t.useEffect((()=>{const e=function(){var e,t;const n=null!==(e=null==l?void 0:l.top)&&void 0!==e?e:168,r=null!==(t=null==c?void 0:c.top)&&void 0!==t?t:80,i=_?r:n;return i}();w(e)}),[_,null==l?void 0:l.top,null==c?void 0:c.top]),t.useEffect((()=>{if(b.current){const e=tu(M,300);return M(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[b.current]),t.useEffect((()=>{x.current=!1}),[a,d]);const M=()=>{var e;const t=null===(e=b.current)||void 0===e?void 0:e.getBoundingClientRect();k(t.x),j(t.right)},R=()=>{g&&g(T)},A=()=>{m&&!x.current&&(x.current=!0,m())},N=()=>{O(!1),h&&h()};const B=()=>{const{minutes:t,seconds:n}=mu.toMinutesSeconds(T),r=1!==t?"mins":"min",i=1!==n?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(u.ClockIcon,{}),e.jsx(pu,{children:"Time left:"}),e.jsxs(fu,{children:[t," ",r," ",String(n).padStart(2,"0")," ",i]})]})};if(void 0!==typeof window)return C||0===T?e.jsxs(lu,Object.assign({className:r},v,{children:[e.jsx("div",{ref:D}),e.jsx(du,Object.assign({"data-testid":f,"data-id":"countdown-wrapper",ref:b,inert:E?void 0:"",$visible:E,$warn:T<=s},{children:B()})),b.current&&!E&&(()=>{var t,n;const r=null!==(t=null==l?void 0:l.left)&&void 0!==t?t:"left"===i?S:void 0,a=null!==(n=null==l?void 0:l.right)&&void 0!==n?n:"right"===i?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(uu,Object.assign({"data-testid":f,"data-id":"fixed-countdown-wrapper",$warn:T<=s,$top:y,$left:r,$right:a},{children:B()}))})()]})):e.jsx(e.Fragment,{})},exports.DataTable=n=>{var{id:r,headers:i,rows:a,className:o,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:p,disabledIds:f,enableActionBar:h,enableSelectAll:m,enableStickyHeader:g,emptyView:v,actionBarContent:b,renderCustomEmptyView:x,onHeaderClick:y,onSelect:w,onSelectAll:$,onClearSelectionClick:j}=n,S=X(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const k=t.useRef(null),C=t.useRef(null),O=t.useRef(null),T=t.useRef(null),D=t.useRef(null),[I,E]=t.useState(!1),[_,M]=t.useState(!1),[R,A]=t.useState(!1),[N,B]=t.useState(!1),[F,L]=t.useState(!1),{ref:P,inView:z}=su(),H=t.useCallback((()=>{if(!D.current||!T.current)return;const e=D.current.scrollHeight>D.current.clientHeight;E(e),e?T.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),Ye({onResize:H});cc("scroll",(()=>{requestAnimationFrame((()=>{I?G():Z()})),D.current&&A(D.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[a]);const W=()=>(null==p?void 0:p.length)===a.length,V=e=>!!(null==p?void 0:p.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==f?void 0:f.includes(e)),q=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},K=()=>i.length+(d?1:0),G=()=>{if(!D.current)return;const e=D.current.getBoundingClientRect();B(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(k.current&&C.current&&D.current&&T.current&&O.current))return;const e=C.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=k.current.getBoundingClientRect().height-O.current.clientHeight-32,r=Math.min(t,n);T.current.style.transform=`translateY(-${r}px)`}else T.current.style.transform="translateY(0)"},Q=()=>{k.current&&D.current&&L(k.current.clientHeight+(h?56:0)<D.current.clientHeight)},J=t=>{const{fieldKey:n,label:r,clickable:i=!1,style:a}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Wu,Object.assign({"data-testid":q(`header-${n}`),$clickable:i,onClick:()=>i&&(null==y?void 0:y(n)),style:a,$isCheckbox:!1},{children:e.jsxs(Vu,{children:["string"==typeof r?e.jsx(exports.Text.H4,Object.assign({weight:"bold"},{children:r})):r,ee(n)]})}),n)},ee=t=>{const n=null==s?void 0:s[t];return n?"asc"===n?e.jsx(u.ArrowUpIcon,{"data-testid":q(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":q(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Wu,Object.assign({"data-testid":q("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e.jsx(Ku,{children:m&&e.jsx(_d,{displaySize:"small",checked:W(),indeterminate:p&&0!==p.length&&!W(),onClick:()=>{$&&$(W())}})})})),ne=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,a=n.id.toString(),o=n[i],s=`${a}-${i}`;return e.jsx(Uu,Object.assign({"data-testid":q(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e.jsx(qu,{children:o}):"function"==typeof o?o(n,{isSelected:V(a)}):o}),s)},re=t=>e.jsx(Uu,Object.assign({"data-testid":q(`row-${t}-selection`),$isCheckbox:!0},{children:e.jsx(Ku,{children:e.jsx(_d,{displaySize:"small",checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})})),ie=()=>e.jsx(Gu,Object.assign({type:"no-item-found"},v,{title:(null==v?void 0:v.title)?"string"==typeof v.title?e.jsx(exports.Text.H3,{children:v.title}):v.title:e.jsx(exports.Text.H3,{children:"No <items> found"}),description:(null==v?void 0:v.description)?v.description:"No matching rows"}));return e.jsxs(Nu,Object.assign({id:r||"table-wrapper","data-testid":S["data-testid"]||"table",className:o,ref:D,onScroll:()=>{I&&D.current&&M(D.current.scrollTop+D.current.clientHeight>=D.current.scrollHeight)}},{children:[e.jsx(Bu,{children:e.jsxs(Fu,Object.assign({$end:R,$scrollable:I,ref:k,$stickyHeader:g},{children:[e.jsx("thead",Object.assign({ref:O},{children:e.jsxs(Hu,{children:[d&&te(),i.map(J)]})})),e.jsx(Lu,Object.assign({$showLastRowBottomBorder:F},{children:"success"===c?!a||a.length<1?e.jsx("tr",{children:e.jsx(Zu,Object.assign({colSpan:K()},{children:x?x():ie()}))}):e.jsx(e.Fragment,{children:null==a?void 0:a.map(((t,n)=>e.jsxs(Yu,Object.assign({"data-testid":q(`row-${t.id.toString()}`),$alternating:Y(n),$isSelectable:d,$isSelected:V(t.id.toString())},{children:[d&&re(t.id.toString()),i.map((e=>ne(e,t)))]}),t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",Object.assign({colSpan:K()},{children:e.jsx(Xu,{children:"loading"===c&&e.jsx(yl,{})})}))})}))]}))}),h&&p&&p.length>0&&(()=>{var t,n,r;return e.jsx(Pu,Object.assign({ref:T,$fixed:N,$left:null===(n=null===(t=null==k?void 0:k.current)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(r=null==k?void 0:k.current)||void 0===r?void 0:r.clientWidth},{children:e.jsxs(zu,Object.assign({$float:(I?!_:!z)||N,$scrollable:I},{children:[e.jsx(exports.Text.H5,Object.assign({weight:"semibold"},{children:`${p.length} item${p.length>1?"s":""} selected`})),e.jsx(Ys.Small,Object.assign({styleType:"link",onClick:j},{children:"Clear selection"})),b]}))}))})(),e.jsx("div",{ref:e=>{C.current=e,P(e)}})]}))},exports.DateInput=Mp,exports.DateNavigator=Bp,exports.DateRangeInput=Kp,exports.DesignToken=Rs,exports.Divider=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:a,className:o,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=X(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e.jsx(Jp,Object.assign({className:o,$thickness:n,$lineStyle:r,$color:a},d));case"grid":return e.jsx(Gp,Object.assign({className:o,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e.jsx(Jp,{$thickness:n,$lineStyle:r,$color:a})}))}},exports.Drawer=n=>{var{children:r,heading:i,show:a,onClose:o,onOverlayClick:s}=n,l=X(n,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(a),[u]=t.useState((()=>oc.generate())),p=t.useRef();t.useEffect((()=>{if(!a){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[a]);return e.jsx(rf,Object.assign({show:c,enableOverlayClick:!0,onOverlayClick:s},{children:e.jsxs(sf,Object.assign({$show:a,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{"visibility"===e.propertyName&&a&&p.current&&p.current.focus()}},l,{children:[e.jsxs(lf,{children:[e.jsx(df,Object.assign({id:u,ref:p,tabIndex:-1},{children:i})),e.jsx(cf,Object.assign({"aria-label":"Close drawer",onClick:o,focusHighlight:!1},{children:e.jsx(g.CrossIcon,{"aria-hidden":!0})}))]}),e.jsx(uf,{children:r})]}))}))},exports.ESignature=Hf,exports.ErrorDisplay=Mu,exports.FeedbackRating=t=>{const{imgSrc:n,buttonLabel:r,description:i,rating:a,onRatingChange:o,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=n?n:Wf,d=null!=i?i:Yf;return e.jsxs(th,Object.assign({},l,{children:[c&&e.jsx(eh,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(nh,{children:[e.jsx(exports.Text.H3,Object.assign({weight:"semibold"},{children:d})),e.jsx(Jf,{description:d,rating:a,onRatingChange:o}),e.jsx(rh,Object.assign({disabled:!a,onClick:s,type:"button"},{children:null!=r?r:Vf}))]})]}))},exports.FileDownload=({id:t,fileItems:n,title:r,description:i,onDownload:a,"data-testid":o,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return e.jsxs(ih,Object.assign({id:t?`${t}-file-download`:"file-download",className:s,"data-testid":o,$border:"bordered"===l},{children:[(r||i)&&e.jsxs(ah,{children:[r?"string"==typeof r?e.jsx(oh,Object.assign({weight:"regular"},{children:r})):e.jsx(sh,{children:r}):null,i?"string"==typeof i?e.jsx(lh,Object.assign({weight:"regular"},{children:i})):e.jsx(ch,{children:i}):null]}),e.jsx(dh,{children:n&&n.length>0&&n.map((t=>e.jsx(Th,{fileItem:t,onDownload:c},t.id)))})]}))},exports.FileUpload=({styleType:n="bordered",fileItems:r,title:i,description:a,maxFiles:o,warning:s,className:l,name:c,id:d,"data-testid":u,accept:p,capture:f,multiple:h,disabled:m,sortable:g=!1,fileDescriptionMaxLength:v,editableFileItems:b=!1,errorMessage:x,readOnly:y,onChange:w,onDelete:$,onEdit:j,onSort:S})=>{const k=t.useRef(),[C,O]=t.useState(),T=()=>!!o&&r.length>=o;return e.jsx(Ih.Provider,Object.assign({value:{activeId:C,setActiveId:O}},{children:e.jsxs(ag,Object.assign({ref:k,onChange:e=>{!m&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===n,className:l,"data-testid":u,name:c,multiple:h,disabled:m||T()||y},{children:[(i||a)&&e.jsxs(n_,{children:[i?"string"==typeof i?e.jsx(r_,Object.assign({weight:"regular"},{children:i})):e.jsx(i_,{children:i}):null,a?"string"==typeof a?e.jsx(a_,Object.assign({weight:"regular"},{children:a})):e.jsx(o_,{children:a}):null]}),s&&e.jsx(s_,Object.assign({type:"warning"},{children:s})),e.jsx(t_,{fileItems:r,editableFileItems:b,fileDescriptionMaxLength:v,sortable:g,disabled:m,readOnly:y,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{j&&j(e)},onSort:e=>{S&&S(e)}}),x&&e.jsx(u_,Object.assign({type:"error"},{children:x})),!y&&e.jsxs(l_,{children:[e.jsx(c_,Object.assign({type:"button",styleType:"secondary",disabled:!!C||m||T(),onClick:e=>{m||(e.preventDefault(),k.current&&k.current.openFileDialog())}},{children:"Upload files"})),e.jsx(d_,{children:"or drop them here"})]})]}))}))},exports.Filter=V_,exports.Footer=t=>{var{children:n,links:r,lastUpdated:a,disclaimerLinks:o,showDownloadAddon:s,showResourceAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:p="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","showResourceAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===p,m=i.useTheme(),g=t=>t.map(((t,n)=>{const r=X(t,["data-options"]);return e.jsx("li",{children:e.jsx(iM,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},n)}));return e.jsxs(rM,Object.assign({},f,{children:[(()=>{let t=null;if(n)return n;if(r||s){const n=J_.getFooterLogoAttribute(null==m?void 0:m.resourceScheme),{src:i}=n,a=X(n,["src"]);t=e.jsxs(e.Fragment,{children:[e.jsx(oM,Object.assign({"data-testid":"logo-section"},{children:e.jsx("img",Object.assign({src:c||i,"data-testid":"logo"},a))})),(null==r?void 0:r[0])&&e.jsx(sM,Object.assign({"data-testid":"link-col-1"},{children:g(r[0])}),"link-col-1"),(null==r?void 0:r[1])&&e.jsx(sM,Object.assign({"data-testid":"link-col-2"},{children:g(r[1])}),"link-col-2"),s&&e.jsx(lM,{children:e.jsx(X_,{})}),!s&&l&&e.jsx(lM,{children:e.jsx(nM,{})})]})}return t?e.jsx(aM,Object.assign({type:"grid",stretch:h},{children:t})):null})(),e.jsx(cM,{}),e.jsxs(dM,Object.assign({type:"grid",stretch:h},{children:[e.jsx(uM,{children:(()=>{const t=J_.getDisclaimerLinks(null==m?void 0:m.resourceScheme,o);return Object.keys(t).map((n=>e.jsx(fM,Object.assign({},t[n]),n)))})()},"disclaimer"),e.jsx(pM,{children:e.jsx(exports.Text.XSmall,Object.assign({"data-testid":"copyright-text"},{children:d||e.jsxs(e.Fragment,{children:["©"," ",J_.getCopyrightInfo(a,null==m?void 0:m.resourceScheme)]})}))},"copyright")]}))]}))},exports.Form=jE,exports.FullscreenImageCarousel=XR,exports.HistogramSlider=_x,exports.IconButton=mf,exports.ImageButton=ZR,exports.Input=Bx,exports.InputGroup=Lj,exports.InputMultiSelect=ED,exports.InputNestedMultiSelect=RD,exports.InputNestedSelect=AD,exports.InputRangeSelect=iI,exports.InputRangeSlider=Cx,exports.InputSelect=aI,exports.InputSlider=pI,exports.Layout=ix,exports.LinkList=n=>{var{items:r,maxShown:i,style:a="default",onItemClick:o}=n,s=X(n,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=r.length),d=i?r.slice(0,i):r,u=i?r.slice(i):[],p=Ye(),f=p.ref,h=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):o&&(e.preventDefault(),o(t,e))},m=()=>{c(!l)},g=(t,n,r,i)=>{const o="small"===a?tA:eA;return e.jsxs(e.Fragment,{children:[e.jsxs(iA,{children:[e.jsx(o,Object.assign({"data-testid":`link-title-${t}`,weight:"semibold"},{children:n})),r&&e.jsx(aA,Object.assign({"data-testid":`link-description-${t}`},{children:r})),i]}),e.jsx(nA,{})]})},v=oi({height:l?p.height:0});return e.jsxs(JR,Object.assign({},s,{children:[d.map(((t,n)=>{const{title:r,description:i,secondaryDescription:a,onClick:o}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(rA,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>h(e,t)},s,{children:g(n,r,i,a)}),`list-item-shown-${n}`)})),u.length>0&&e.jsx(oA,Object.assign({style:v,"data-testid":"minimised-content"},{children:e.jsx(sA,Object.assign({ref:f},{children:u.map(((t,n)=>{const{title:r,description:i,onClick:a,secondaryDescription:o}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(rA,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>h(e,t)},s,{children:g(n,r,i,o)}),`list-item-minimised-${n}`)}))}))})),u.length>0&&e.jsxs(uA,Object.assign({type:"button",onClick:m,"data-testid":"toggle-button",$showMinimised:l},{children:[e.jsx(lA,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:l?"View less":"View more"})),l?e.jsx(dA,{}):e.jsx(cA,{})]}))]}))},exports.LoadingDots=dl,exports.LoadingDotsSpinner=yl,exports.LoadingSpinner=n=>e.jsx(ll,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(sl,{})},{children:e.jsx(ol,{})}))})),exports.Markup=fA,exports.MaskedInput=Jj,exports.Masonry=gA,exports.Masthead=bA,exports.MediaQuery=ts,exports.MediaWidths=ns,exports.Modal=wf,exports.MyLegacyTheme=gl,exports.NBComponent=kN,exports.Navbar=fN,exports.NavbarHeight=hN,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=TN,exports.OneServiceTheme=bl,exports.OtpInput=n=>{var{id:r,value:i=[],"data-testid":a,className:o,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:p,onCooldownEnd:f}=n,h=X(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const m=null!=l?l:{},{disabled:g,onClick:v,styleType:b="secondary"}=m,x=X(m,["disabled","onClick","styleType"]),y=t.useRef([]),w=t.useRef(u),[$,j]=t.useState(new Array(d).fill("")),[S,k]=t.useState(s),[C,O]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==y?void 0:y.current[0])||void 0===e||e.focus(),document.addEventListener("paste",I),()=>document.removeEventListener("paste",I)}),[]),t.useEffect((()=>{if(0!==s){p&&p();const e=M();return()=>e()}}),[C]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&j(i)}),[i]);const T=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(E(r)){const t=[...$];t[e]=r.substring(r.length-1),null===(n=y.current[e+1])||void 0===n||n.focus(),j(t),u&&u(t)}},D=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=y.current[e-1])||void 0===n||n.focus()),j(t),u&&u(t)}},I=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&E(t,d)?(j(n),w.current&&w.current(n)):e.preventDefault()},E=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*s;return e<C.valueOf()+t},M=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*s,r=Math.ceil((C.valueOf()+n-t)/1e3);k(r),r<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},R=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(RB,Object.assign({id:r,"data-testid":a,className:o},{children:[e.jsx(AB,{children:$.map(((t,n)=>e.jsx(NB,Object.assign({id:R(n,"otp-input",r),"data-testid":R(n,"otp-input",a),"aria-label":`Enter OTP character ${n+1}`,ref:e=>y.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:T(n),onKeyDown:D(n),autoComplete:"off"},h),n)))}),c&&e.jsx(Qb,{children:c}),e.jsx(BB,Object.assign({styleType:b,type:"button"},x,{onClick:e=>{j(new Array(d).fill("")),_()||(O(new Date),k(s)),v&&v(e)},disabled:g||_()},{children:x.children?x.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]}))},exports.Overlay=rf,exports.Pagination=ZB,exports.PhoneNumberInput=ZD,exports.Pill=tF,exports.Popover=sF,exports.PopoverInline=Yb,exports.PopoverTrigger=zb,exports.PopoverV2=Lb,exports.PredictiveTextInput=eI,exports.ProgressIndicator=t=>{var{steps:n,currentIndex:r,displayExtractor:i,fadeColor:a,fadePosition:o="both"}=t,s=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const l=kl.useMediaQuery({maxWidth:ns.tablet}),c=e=>i?i(e):e.toString(),d=(e,t)=>JF(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return e.jsxs(lF,Object.assign({},s,{children:[e.jsx(cF,{children:n.map(((t,n)=>{const i=n<=r;return e.jsx(fF,Object.assign({id:d(n,r)},{children:e.jsx(dF,{highlighted:i})}),n)}))}),e.jsx(cF,{children:l?e.jsxs(fF,Object.assign({id:d(r,r)},{children:[e.jsxs(pF,Object.assign({weight:"semibold",id:`${d(r,r)}-counter`},{children:["Step ",r+1," of ",n.length]})),e.jsx(pF,Object.assign({weight:"regular",id:`${d(r,r)}-title`},{children:c(n[r])}))]}),r):n.map(((t,n)=>{const i=n<=r,a=n===r,o=a?"bold":"regular";return e.jsx(fF,Object.assign({id:`${d(n,r)}-title`},{children:e.jsx(uF,Object.assign({highlighted:i,weight:o,"aria-current":a},{children:c(t)}))}),n)}))})]}))},exports.RBSTheme=ml,exports.RadioButton=t=>{var{className:n,checked:r,disabled:i,onChange:a}=t,o=X(t,["className","checked","disabled","onChange"]);return e.jsxs(eL,Object.assign({$selected:r,$disabled:i,className:n,"data-testid":"radio-button"},{children:[e.jsx(tL,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:r,disabled:i},o)),e.jsx(nL,{id:"checkmark","data-testid":"checkmark",$disabled:i,$selected:r})]}))},exports.SelectHistogram=uI,exports.Sidenav=SL,exports.SignatureCanvas=Pf,exports.SignatureCanvasContainer=Lf,exports.SmartAppBanner=VL,exports.Tab=aP,exports.Tag=t=>{var{type:n,colorType:r="black",children:i,interactive:a=!1,icon:o,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(oP,Object.assign({as:a?"button":"div",$type:n,$color:r,$interactive:a},l,{children:["left"===s&&o,e.jsx(sP,{children:i}),"right"===s&&o]}))},exports.TextList=EI,exports.TextStyle=ds,exports.TextStyleHelper=gs,exports.Textarea=bI,exports.TimeRangePicker=pE,exports.TimeSlotBar=({"data-testid":n,className:r,variant:i="default",startTime:a,endTime:o,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[p,f]=t.useState(0),[h,m]=t.useState(0),g=dP(i),v=2.5*g;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",b),()=>{e&&e.removeEventListener("scroll",b)}}),[]);const b=()=>{u.current&&f(u.current.scrollLeft)},x=e=>{u.current&&u.current.scrollBy({left:"left"===e?-v:v,behavior:"smooth"})};Ye({onResize:()=>{u.current&&m(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const y=e=>e<=g/2,w=e=>{if(n)return`${n}-${e}`},$=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(pP,Object.assign({className:r},{children:[e.jsxs(gP,Object.assign({"data-testid":n,ref:u,$variant:i},{children:[e.jsx(vP,Object.assign({"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=Pl(a,"HH:mm"),r=Pl(o,"HH:mm"),s=n.hour()%2==0;for(let a=n;a.isBefore(r);a=a.add(30,"minute")){const n=$(a,s,i);t.push(e.jsx(xP,Object.assign({$isLongMarker:n,$variant:i},{children:n&&e.jsx(yP,Object.assign({weight:"semibold"},{children:lP.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return t})()})),e.jsxs(bP,Object.assign({"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[d&&(()=>{const{backgroundColor:t,backgroundColor2:n,styleType:r="default"}=d,s=lP.calculateWidth(a,o,g),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx($P,{$variant:i}),e.jsx(wP,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:r,$bgColor:t,$bgColor2:n,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:n,startTime:r,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:p,styleType:f="default",backgroundColor:h,backgroundColor2:m}=u,v=lP.calculateWidth(r,s,g),b=lP.calculateWidth(a,r,g),x=d&&"default"===i;return e.jsxs("div",{children:[e.jsx($P,{$variant:i,style:{left:`${b}px`}}),e.jsx(wP,Object.assign({"data-testid":w(`${n}-timeslot`),$width:v,$left:b,$styleType:f,$variant:i,$bgColor:h,$bgColor2:m,$clickable:x,onClick:()=>x&&l(t)},{children:c&&"default"===i&&e.jsx(jP,Object.assign({$slotWidth:v,$color:p,weight:"semibold"},{children:y(v)?"...":c}))})),o!==s&&e.jsx($P,{$variant:i,style:{left:`${b+v}px`}})]},n)}))]}))]})),e.jsx(e.Fragment,{children:p>0&&e.jsx(fP,Object.assign({"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{x("left")}},{children:e.jsx(mP,{})}))}),p+h<lP.calculateWidth(a,o,g)?e.jsx(fP,Object.assign({"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{x("right")}},{children:e.jsx(hP,{})})):e.jsx(e.Fragment,{})]}))},exports.TimeSlotBarWeek=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:p,variant:f,maxVisibleCellHeight:h,showNavigationHeader:m=!0,enableSelection:g,onSlotClick:v,currentCalendarDate:b}=n,x=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[y,w]=t.useState(o),$=t.useRef(),j=t.useRef(void 0);t.useEffect((()=>{w(o)}),[o]);const S=e=>{const t=e.format(GP);w(t),a&&a(t)},k=(e,t)=>{v&&v(e,t)},C=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(GP),lastDayOfWeek:e.endOf("week").format(GP)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(XP,Object.assign({},x,{children:e.jsx(Xc,Object.assign({ref:$,type:"standalone",dynamicHeight:!0,initialCalendarDate:ic.toDayjs(y||b).endOf("week").format(GP),selectedStartDate:y,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Pl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Pl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{j.current&&j.current.isSame(e,"week")||C(e),j.current=e},showNavigationHeader:m,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Pl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Pl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e.jsx(KP,{calendarDate:t,disabledDates:r,selectedDate:y,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:p,variant:f,maxVisibleCellHeight:h,enableSelection:g,onSlotClick:k}))(t)}))}))},exports.TimeSlotWeekView=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:p,currentCalendarDate:f}=n,h=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[m,g]=t.useState(o),v=t.useRef(),b=t.useRef(void 0);t.useEffect((()=>{g(o)}),[o]);const x=e=>{const t=e.format(oz);g(t),a&&a(t)},y=(e,t)=>{p&&p(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(oz),lastDayOfWeek:e.endOf("week").format(oz)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(az,Object.assign({},h,{children:e.jsx(Xc,Object.assign({ref:v,type:"standalone",dynamicHeight:!0,initialCalendarDate:ic.toDayjs(m||f).endOf("week").format(oz),selectedStartDate:m,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Pl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Pl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{b.current&&b.current.isSame(e,"week")||w(e),b.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Pl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Pl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e.jsx(iz,{calendarDate:t,disabledDates:r,selectedDate:m,minDate:s,maxDate:l,onSelect:x,slots:c,enableSelection:u,onSlotClick:y})}))}))},exports.TimeTable=n=>{var{date:r,emptyContentMessage:i,rowData:a,loading:o,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:p,showDateAsShortForm:f,onPage:h,onRefresh:m,onNextDayClick:g,onPreviousDayClick:v,onCalendarDateSelect:b}=n,x=X(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const y=x["data-testid"]||"timetable",w=mu.roundToNearestInterval(s,60),$=mu.roundToNearestInterval(l,60,!0),j=mu.generateHourlyIntervals(w,$),S=0===u||Qj.isEmpty(a),k=S||a.length===u,C=t.useRef(null),O=t.useRef(null),[T,D]=t.useState(!1),[I,E]=t.useState(!1),[_,M]=t.useState(0),[R,A]=t.useState(!1);t.useEffect((()=>{const e=Qj.throttle((()=>{if(C.current&&(D(C.current.scrollLeft>0),E(C.current.scrollTop>0)),R)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=C.current;Math.ceil(e+t)>=n-1&&!k&&h&&!o&&(A(!0),h())}),100),t=C.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[k,R,o,h]),t.useEffect((()=>{A(!1)}),[a]);Ye({onResize:()=>{if(C.current){const e=Math.ceil(60*j.length/bz),t=(C.current.clientWidth-xz)/e;M(t>21?t:21)}},targetRef:C,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=vz.length;return()=>{const n=vz[e],r=yz[e];return e=(e+1)%t,{mainColor:n,alternateColor:r}}})(),B=({wrapper:e,children:t})=>e(t),F=()=>{if(!o&&R)return e.jsx(Uz,Object.assign({$isScrolled:T},{children:e.jsx(eH,{})}))},L=()=>{if(!o&&R)return e.jsx(Zz,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,n)=>e.jsx(Qz,Object.assign({$width:4*_},{children:e.jsx(eH,{})}),`lazy-load-cell-${n}`)))}))};return S?e.jsxs(Bz,Object.assign({},x,{"data-testid":y},{children:[e.jsx(Oz,{selectedDate:r,loading:o||R,tableContainerRef:C,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:p,showDateAsShortForm:f,onPreviousDayClick:v,onNextDayClick:g,onRefresh:m,onCalendarDateSelect:b}),e.jsx(Fz,Object.assign({className:"empty-container"},{children:o?e.jsx(Xz,{$isEmptyContent:S}):e.jsx(Gz,{type:"no-item-found",description:i})}))]})):e.jsxs(Bz,Object.assign({},x,{"data-testid":y},{children:[e.jsx(Oz,{"data-id":"timetable-date-navigator",selectedDate:r,loading:o||R,tableContainerRef:C,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:p,showDateAsShortForm:f,onPreviousDayClick:v,onNextDayClick:g,onRefresh:m,onCalendarDateSelect:b}),e.jsxs(Lz,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:C,$loading:o,$allRecordsLoaded:k||!h},{children:[e.jsx(Pz,{$isScrolledY:I,$isScrolledX:T}),e.jsx(zz,Object.assign({$numOfRows:a.length,$isScrolled:T,"data-testid":"row-header-column-id"},{children:e.jsxs(e.Fragment,{children:[a.map(((n,r)=>e.jsx(B,Object.assign({wrapper:e=>((e,n)=>{if(!e.rowHeaderPopover)return n;const r={position:"bottom-start",rootNode:C,customOffset:e.rowHeaderPopover.offset,children:n,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(tH,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),n)})(n,e)},{children:e.jsxs(Uz,Object.assign({$isScrolled:T},{children:[e.jsx(qz,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e.jsx(Kz,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),F()]})})),e.jsx(Hz,Object.assign({$numOfColumns:j.length,$isScrolled:I},{children:j.map((t=>e.jsx(Wz,Object.assign({"data-testid":`${t}-column`},{children:e.jsx(Vz,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),o?e.jsx(Xz,{$isEmptyContent:S}):e.jsxs(Yz,Object.assign({"data-testid":"content-container-id",ref:O,$numOfRows:a.length},{children:[a.map(((t,n)=>e.jsx(Nz,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:N(),intervalWidth:_,containerRef:O},t),`${n}-row-bar`))),L()]}))]}))]}))},exports.Timeline=({items:n,className:r,title:i,startCol:a,colSpan:o,"data-base-indicator-testid":s,"data-testid":l="timeline"})=>{const c=t=>"string"==typeof t?e.jsx(exports.Text.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e.jsx(e.Fragment,{children:t}),d=t=>"string"==typeof t?e.jsx(pz,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e.jsx(e.Fragment,{children:t}),p=e=>e.slice(0,2).map(((e,n)=>t.createElement(gz,Object.assign({},e,{type:e.type,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),f=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(dz,Object.assign({className:r,"data-testid":l,$startCol:a,$colSpan:o},{children:[e.jsx(uz,Object.assign({id:"timeline-title"},{children:i})),n.map(((t,n)=>{const{title:r,content:i,statuses:a,variant:o}=t,l=s?`circleindicator${n+1}_div_${s}`:"circleindicator",u=o||(0===n?"current":"upcoming-active");return e.jsxs(fz,{children:[e.jsxs(cz,{children:[e.jsx(sz,Object.assign({"data-testid":l,$variant:u},{children:f(u)})),e.jsx(lz,{$variant:u})]}),e.jsxs(hz,Object.assign({className:"timeline-item-content"},{children:[d(r),a&&e.jsx(mz,{children:p(a)}),c(i)]}))]},`timeline-item-${n}`)}))]}))},exports.Timepicker=hE,exports.Toast=n=>{var{type:r="success",title:i,label:a,autoDismiss:o,autoDismissTime:s=uH,onDismiss:l,fixed:c=!0,actionButton:d}=n,p=X(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,h]=t.useState(!1),m=kl.useMediaQuery({maxWidth:Jo.tablet});t.useEffect((()=>{h(!0)}),[]),t.useEffect((()=>{if(!o)return;const e=setTimeout((()=>{h(!1)}),s);return()=>clearTimeout(e)}),[o]);const g=oi({opacity:f?1:0,transform:f?m?"translateY(0%)":"translateX(0%)":m?"translateY(-1500%)":"translateX(150%)",config:{easing:ln.easeInOutQuart,duration:1e3},onRest:()=>{f||null==l||l()}});return e.jsxs(rH,Object.assign({style:g,$type:r,$fixed:c},p,{children:[e.jsxs(iH,{children:[e.jsxs(aH,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(oH,{children:[i&&(Y.default.isValidElement(i)?i:e.jsx(sH,Object.assign({$type:r,weight:"semibold"},{children:i}))),a&&e.jsx(lH,Object.assign({$type:r},{children:Y.default.isValidElement(a)?a:i?e.jsx(exports.Text.BodySmall,{children:a}):e.jsx(exports.Text.Body,{children:a})}))]})]})),d&&e.jsx(cH,Object.assign({styleType:"light",onClick:d.onClick},{children:d.label}))]}),e.jsx(dH,Object.assign({$type:r,onClick:()=>{h(!1)}},{children:e.jsx(u.CrossIcon,{})}))]}))},exports.Toggle=UI,exports.Tooltip=gH,exports.Transition=ws,exports.UneditableSection=RH,exports.UnitNumberInput=wE,exports.__awaiter=G,exports.commonjsGlobal=ki,exports.withNotificationBanner=t=>Y.default.forwardRef(((n,r)=>e.jsx(kN,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=MB.sanitize(t.content);return e.jsx("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e.jsx(TN.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(n,r)=>i=>{const{onPopoverAppear:a,onPopoverDismiss:o}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=r.trigger||"click",c=s,[d,u]=t.useState(!1),p=t.useRef(),f=kl.useMediaQuery({maxWidth:Jo.mobileL});t.useEffect((()=>{if(!f)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[d]);const h=e=>{p&&!p.current.contains(e.target)&&(d&&u(!1),o&&o())};return e.jsxs(iF,Object.assign({id:"popover-hoc-wrapper",ref:p},{children:[e.jsx(aF,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||f)&&(u(!d),!d&&a&&a(),d&&o&&o())},onMouseEnter:()=>{"hover"!==l||f||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!f&&u(!1)},"aria-label":"popover-button"},{children:e.jsx(n,Object.assign({},c))})),e.jsx(sF,Object.assign({visible:d,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{u(!1)}},{children:r.content}))]}))},exports.withTooltip=(t,n)=>r=>{const{tooltipVisible:i,position:a}=r,o=X(r,["tooltipVisible","position"]);return e.jsxs(mH,{children:[e.jsx(t,Object.assign({},o)),e.jsx(gH,Object.assign({visible:i,position:a},{children:n.content}))]})};
//# sourceMappingURL=index.4555bf84.js.map
