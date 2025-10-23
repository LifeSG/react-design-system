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
`,al=n=>{var{type:r,className:i,children:a,actionLink:u,actionLinkIcon:p,sizeType:f="default",showIcon:h=!1,customIcon:m,maxCollapsedHeight:g}=n,v=X(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,x]=t.useState(!1),[y,w]=t.useState(!1),{height:$,ref:j}=Ye();t.useEffect((()=>{S()}),[g,$]);const S=()=>{x(!g),w(k())},k=()=>!!g&&$>g;return e.jsxs(Qs,Object.assign({className:i,$type:r,$sizeType:f,"data-testid":v["data-testid"]},{children:[h&&e.jsx(Js,Object.assign({$sizeType:f,$type:r},{children:(()=>{if(r&&m)return m;switch(r){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()})),e.jsxs(tl,{children:[e.jsxs(nl,Object.assign({$maxCollapsedHeight:k()?g:void 0,$showMore:b,$hasActionLink:!!u},{children:[e.jsx("div",Object.assign({ref:j},{children:a})),u&&e.jsxs(el,Object.assign({"data-testid":"action-link",$type:r,$sizeType:f},u,{children:[u.children,p||e.jsx(o.ArrowRightIcon,{})]}))]})),y&&e.jsxs(rl,Object.assign({$sizeType:f,$type:r,type:"button",onClick:()=>x(!b)},{children:["Show ",b?"less":"more",e.jsx(il,{$expanded:b})]}))]})]}))},ol=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.b7d07c18.js")}))).LottieSpinner}})))),sl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),ll=q.default.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,cl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.c3b251a5.js")}))).LottieLoadingDots}})))),dl=n=>e.jsx(pl,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(ul,{})},{children:e.jsx(cl,{})}))})),ul=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),pl=q.default.div`
    margin: 0 auto;
`,fl={[exports.ThemeContextKeys.colorScheme]:"base",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},hl={[exports.ThemeContextKeys.colorScheme]:"bookingsg",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"bookingsg"},ml={[exports.ThemeContextKeys.colorScheme]:"rbs",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"rbs",[exports.ThemeContextKeys.resourceScheme]:"rbs"},gl={[exports.ThemeContextKeys.colorScheme]:"mylegacy",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"mylegacy"},vl={[exports.ThemeContextKeys.colorScheme]:"ccube",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"ccube"},bl={[exports.ThemeContextKeys.colorScheme]:"oneservice",[exports.ThemeContextKeys.textStyleScheme]:"oneservice",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},xl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.73e69f85.js")}))).LottieLoadingDotsSpinner}})))),yl=n=>{var{color:r}=n,a=X(n,["color"]);const o=i.useTheme(),s=r||Qo.Primary({theme:o||fl});return e.jsx($l,Object.assign({},a,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(wl,{})},{children:e.jsx(xl,{color:s})}))}))},wl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),$l=q.default.div`
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
`,nf=({show:n=!1,rootId:r,onOverlayClick:i,children:a,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[p,f]=t.useState(null),[h,g]=t.useState(),[v]=t.useState((()=>oc.generate())),b=m.useFloatingNodeId(),x=t.useRef(),y=t.useRef(null),w=a&&Y.default.cloneElement(a,{ref:y}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",j=null!=d?d:h?99999:99998;(e=>{const n=m.useFloatingTree();t.useEffect((()=>{if(!n)return;const t={zIndex:e};n.events.emit(dp.Change,t)}),[n,e]),t.useEffect((()=>{if(!n)return;const t=()=>{const t={zIndex:e};n.events.emit(dp.Change,t)};return null==n||n.events.on(dp.Ready,t),()=>null==n?void 0:n.events.off(dp.Ready,t)}),[n,e])})(j),t.useEffect((()=>(T(),f(C()),()=>{_(),I().length<1&&(M("remove"),A(),D("remove"))})),[]),t.useEffect((()=>{if(n){const e=O();S(e),E(),k()&&1===I().length&&(R(),M("add"));const t=setTimeout((()=>{D("add")}),200);return()=>clearTimeout(t)}{_(),k()&&I().length<1&&(M("remove"),A());const e=setTimeout((()=>{I().length<1&&D("remove")}),200);return()=>clearTimeout(e)}}),[n]);const S=e=>{x.current=e,g(e)},k=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),C=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,T=()=>{if(!document.getElementById(af)){const e=document.createElement("style");e.id=af;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${of} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${of}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${sf} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${lf}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},D=e=>{const t=document.body.classList.contains(of);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(of):document.body.classList.add(of)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},E=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},_=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},M=e=>{if(!k())return;const t=document.body.classList.contains(sf);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(sf):document.body.classList.add(sf)},R=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(lf,t)},A=()=>{const e=document.body.style.getPropertyValue(lf);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},N=e=>{var t;const n=null===(t=y.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||i&&c&&(e.preventDefault(),i())};return p?U.default.createPortal(e.jsx(ef,Object.assign({id:$,"data-testid":$,$show:n,$zIndex:j},{children:a&&e.jsx(m.FloatingNode,Object.assign({id:b},{children:e.jsx(tf,Object.assign({"data-testid":"overlay-wrapper",$show:n,$backgroundOpacity:o||(h?.5:.8),$backgroundBlur:s,$disableTransition:l,onClick:N},{children:w}))}))})),p):null},rf=t=>e.jsx(m.FloatingTree,{children:e.jsx(nf,Object.assign({},t))}),af="lifesg-ds-overlay-stylesheet",of="lifesg-ds-overlay-open",sf="lifesg-ds-overlay-scroll-lock",lf="--lifesg-ds-overlay-scroll-y",cf=q.default.div`
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
`,df=q.default.div`
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
`,uf=q.default(is)`
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
`,pf=q.default(exports.Text.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,ff=q.default.div`
    flex: 1;
    overflow-y: auto;
`,hf=({className:t,progress:n,color:r,"data-testid":i})=>e.jsx(mf,Object.assign({className:t,$innerWidth:n,$color:r,"data-testid":i},{children:e.jsx("progress",{value:100*n,max:100})})),mf=q.default.div`
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
`,gf=q.default.button`
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
`,vf=Y.default.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(gf,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:o,$styleType:i},l,{children:a}))})),bf=q.default.div`
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
`,xf=n=>{var{id:r="modal",show:i,animationFrom:a="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=n,p=X(n,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,h]=t.useState(),[m,g]=t.useState();t.useEffect((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const v=()=>{const e=.01*window.innerHeight;h(e)},b=()=>{const e=.01*window.visualViewport.height;h(e),g(window.visualViewport.offsetTop)};return e.jsx(rf,Object.assign({"data-testid":`${r}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c},{children:e.jsx(bf,Object.assign({show:i,animationFrom:a,"data-testid":r,verticalHeight:f,offsetTop:m},p,{children:o}))}))},yf=q.default.div`
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
`,wf=q.default(is)`
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
`,$f=t=>{var{id:n="modal-box",children:r,onClose:i,showCloseButton:a=!0}=t,o=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(yf,Object.assign({"data-testid":n},o,{onClick:e=>{e.stopPropagation()}},{children:[a&&e.jsx(wf,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e.jsx(g.CrossIcon,{})})),r]}))},jf=Object.assign(xf,{Box:$f}),Sf=` ${ts.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${ns.mobileL}px)`,kf=`@media(orientation: landscape) and (max-height: ${ns.mobileL}px)`,Cf=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(Qo.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${Qo.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,Of=q.default(Ys.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Tf=q.default(vf)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,Df=q.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,If=q.default.div`
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
`,Ef=q.default(exports.Text.H6)`
    margin-top: 1rem;
`,_f=q.default(jf)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Mf=q.default.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${Sf} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Rf=q.default(jf.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${Sf} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,Af=q.default.h4`
    ${gs.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${Qo.Neutral[1]};
    text-align: center;

    ${Sf} {
        ${gs.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,Nf=q.default.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${Sf} {
        border-radius: 0;
        flex: 1;
    }

    ${kf} {
        background: ${Qo.Neutral[7]};
    }
`,Bf=q.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Qo.Neutral[6]};
    margin: auto;

    ${Sf} {
        aspect-ratio: 4/3;
    }
    ${ts.MaxWidth.mobileL} {
        width: 100%;
        height: auto;
    }
    ${kf} {
        width: auto;
        height: 100%;
    }
`,Ff=q.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Qo.Neutral[4]};
    pointer-events: none;

    ${Sf} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,Lf=q.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${kf} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,Pf=q.default(Ys.Default)`
    width: 8.5rem;
    ${ts.MaxWidth.mobileL} {
        width: 100%;
    }
    ${kf} {
        height: 2.5rem;
    }
`,zf=q.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Hf=q.default.canvas`
    cursor: crosshair;
`,Wf=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.c5d122e1.js")}))).ESignatureCanvas}})))),Vf=n=>{const{description:r,id:i,loadingProgress:a,loadingLabel:o="Uploading...",onChange:s,value:l}=n,c=X(n,["description","id","loadingProgress","loadingLabel","onChange","value"]),[d,p]=t.useState(!1),f=t.useRef(null),[h,m]=t.useState(l),g=kl.useMediaQuery({maxWidth:ns.mobileL}),v=()=>{var e;null===(e=f.current)||void 0===e||e.clear()},b=()=>{var e;if(f.current){const t=null===(e=f.current)||void 0===e?void 0:e.export();m(t),p(!1),null==s||s(t)}};t.useEffect((()=>{m(l)}),[l]);return e.jsxs("div",Object.assign({},c,{children:[e.jsx(Cf,{children:isNaN(a)?h?e.jsxs(e.Fragment,{children:[e.jsx(Df,{src:h,alt:"Signature preview"}),e.jsx(Tf,Object.assign({styleType:"light",onClick:()=>p(!0),id:i,"aria-label":"Edit signature"},{children:e.jsx(u.PencilIcon,{})}))]}):e.jsx(Of,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>p(!0)},{children:"Add signature"})):e.jsxs(If,{children:[o&&e.jsx(exports.Text.BodySmall,{children:o}),e.jsx(hf,{progress:a,"data-testid":`${i||"e-signature"}-progress-bar`})]})}),e.jsx(_f,Object.assign({"data-testid":"signature-modal",show:d},{children:e.jsx(Mf,{children:e.jsxs(Rf,Object.assign({onClose:()=>p(!1)},{children:[e.jsx(Af,{children:"Signature"}),e.jsx(Nf,{children:e.jsxs(Bf,{children:[e.jsx(Ff,{}),e.jsx(t.Suspense,Object.assign({fallback:null},{children:d&&e.jsx(Wf,{ref:f,baseImageDataURL:h})}))]})}),e.jsxs(Lf,{children:[e.jsx(Pf,Object.assign({as:jc.Default,type:"button",styleType:g?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:v},{children:"Clear"})),e.jsx(Pf,Object.assign({type:"button",onClick:b},{children:"Save"}))]})]}))})})),r?e.jsx(Ef,Object.assign({weight:"regular",as:"p"},{children:r})):null]}))},Yf="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Uf="Submit",qf="Rate your experience",Kf=5,Xf=q.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Gf=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Qo.Primary};
    ${Xf}:focus-visible + & {
        outline: 0.125rem solid ${Qo.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Zf=q.default(v.StarIcon)`
    ${Gf}
`,Qf=q.default(b.StarFillIcon)`
    ${Gf}
`,Jf=q.default.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,eh=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,th=t=>{const{description:n,rating:r,onRatingChange:i}=t,a=t=>{const n=`${t} star${1===t?"":"s"}`;return t<=r?e.jsx(Qf,{"aria-label":n}):e.jsx(Zf,{"aria-label":n})};return e.jsx(eh,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Kf)].map(((t,n)=>{const o=n+1;return e.jsxs(Jf,{children:[e.jsx(Xf,{type:"radio",name:"star",checked:o===r,onChange:()=>(e=>{i(e)})(o)}),a(o)]},o)}))}))},nh=q.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,rh=q.default.div`
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
`,ih=q.default.div`
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
`,ah=q.default(Ys.Default)`
    margin-top: 1rem;
    width: 100%;
`,oh=q.default.div`
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
`,sh=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,lh=q.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,ch=q.default.div`
    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"Body"})}
`,dh=q.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${Qo.Neutral[3]};
`,uh=q.default.div`
    color: ${Qo.Neutral[3]};
    ${Zs({textSize:"BodySmall"})}
`,ph=q.default.ul`
    list-style-type: none;
`;var fh;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(fh||(fh={}));const hh=({src:t,alt:n,className:r,"data-testid":i})=>e.jsx("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),mh=q.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }
`,gh=q.default.div`
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
`,vh=q.default.div`
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
`,bh=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,xh=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,yh=q.default.div`
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
`,wh=q.default(exports.Text.BodySmall)`
    ${ts.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;q.default(wh)`
    margin-top: 0.25rem;
`;const $h=q.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${Qo.Validation.Red.Text};
`,jh=q.default($h)`
    margin-top: 0.25rem;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Sh=q.default($h)`
    display: none;
    visibility: hidden;
    ${ts.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,kh=q.default(zs)`
    ${e=>{let t=Qo.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Qo.Neutral[3](e);break;default:t=Qo.Neutral[8](e)}return i.css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Ch=q.default.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,Oh=q.default(vf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,Th=q.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${ts.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,Dh=q.default(hh)`
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
`,Ih=t.memo((({fileItem:n,onDownload:r})=>{const{id:i,name:a,size:o,errorMessage:s,thumbnailImageDataUrl:l,truncateText:c=!0,ready:d=!0}=n,[p,f]=t.useState(!1),[h,m]=t.useState(!1),g=fh.formatFileSizeDisplay(o),v=kl.useMediaQuery({maxWidth:ns.mobileL}),[b,x]=t.useState(),y=t.useRef();t.useEffect((()=>{y.current&&x(v?w(a):a)}),[a,v]);const w=e=>{if(!c)return e;const t=y&&y.current?y.current.getBoundingClientRect().width:0;return sc.truncateTwoLines(e,t,16,1.5)},$=()=>e.jsxs(e.Fragment,{children:[e.jsx(wh,Object.assign({weight:"regular",ref:y},{children:b})),h&&e.jsx(jh,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]});return e.jsx(mh,Object.assign({"data-testid":i},{children:e.jsxs(gh,Object.assign({onClick:()=>G(void 0,void 0,void 0,(function*(){if(d&&!p){f(!0);try{m(!1),yield r(n)}catch(e){m(!0)}finally{f(!1)}}}))},{children:[(()=>{let t;return t=l?e.jsxs(e.Fragment,{children:[e.jsx(Th,Object.assign({"data-testid":`${i}-thumbnail`},{children:e.jsx(Dh,{"data-testid":`${i}-thumbnail-image`,src:l})})),e.jsxs(xh,{children:[e.jsx(bh,{children:$()}),e.jsx(yh,{children:e.jsx(wh,{children:g||"-"})}),h&&e.jsx(Sh,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]})]}):e.jsxs(e.Fragment,{children:[e.jsx(bh,{children:$()}),e.jsx(yh,{children:e.jsx(wh,{children:g||"-"})}),h&&e.jsx(Sh,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]}),e.jsx(vh,Object.assign({$hasThumbnail:!!l},{children:t}))})(),e.jsx(Ch,{children:e.jsx(Oh,Object.assign({"data-testid":`${i}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`},{children:p||!d?e.jsx(kh,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})}))})]}))}))})),Eh={activeId:void 0,setActiveId:void 0},_h=t.createContext(Eh);var Mh,Rh={exports:{}},Ah={exports:{}},Nh={};var Bh,Fh,Lh,Ph,zh,Hh,Wh,Vh,Yh,Uh,qh,Kh,Xh,Gh,Zh={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Qh(){return Fh||(Fh=1,"production"===process.env.NODE_ENV?Ah.exports=function(){if(Mh)return Nh;Mh=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:switch(e=e.type){case l:case c:case r:case a:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case h:case f:case o:return e;default:return p}}case n:return p}}}function y(e){return x(e)===c}return Nh.AsyncMode=l,Nh.ConcurrentMode=c,Nh.ContextConsumer=s,Nh.ContextProvider=o,Nh.Element=t,Nh.ForwardRef=d,Nh.Fragment=r,Nh.Lazy=h,Nh.Memo=f,Nh.Portal=n,Nh.Profiler=a,Nh.StrictMode=i,Nh.Suspense=u,Nh.isAsyncMode=function(e){return y(e)||x(e)===l},Nh.isConcurrentMode=y,Nh.isContextConsumer=function(e){return x(e)===s},Nh.isContextProvider=function(e){return x(e)===o},Nh.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Nh.isForwardRef=function(e){return x(e)===d},Nh.isFragment=function(e){return x(e)===r},Nh.isLazy=function(e){return x(e)===h},Nh.isMemo=function(e){return x(e)===f},Nh.isPortal=function(e){return x(e)===n},Nh.isProfiler=function(e){return x(e)===a},Nh.isStrictMode=function(e){return x(e)===i},Nh.isSuspense=function(e){return x(e)===u},Nh.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},Nh.typeOf=x,Nh}():Ah.exports=(Bh||(Bh=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var m=e.type;switch(m){case l:case c:case r:case a:case i:case u:return m;default:var g=m&&m.$$typeof;switch(g){case s:case d:case h:case f:case o:return g;default:return p}}case n:return p}}}var y=l,w=c,$=s,j=o,S=t,k=d,C=r,O=h,T=f,D=n,I=a,E=i,_=u,M=!1;function R(e){return x(e)===c}Zh.AsyncMode=y,Zh.ConcurrentMode=w,Zh.ContextConsumer=$,Zh.ContextProvider=j,Zh.Element=S,Zh.ForwardRef=k,Zh.Fragment=C,Zh.Lazy=O,Zh.Memo=T,Zh.Portal=D,Zh.Profiler=I,Zh.StrictMode=E,Zh.Suspense=_,Zh.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||x(e)===l},Zh.isConcurrentMode=R,Zh.isContextConsumer=function(e){return x(e)===s},Zh.isContextProvider=function(e){return x(e)===o},Zh.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Zh.isForwardRef=function(e){return x(e)===d},Zh.isFragment=function(e){return x(e)===r},Zh.isLazy=function(e){return x(e)===h},Zh.isMemo=function(e){return x(e)===f},Zh.isPortal=function(e){return x(e)===n},Zh.isProfiler=function(e){return x(e)===a},Zh.isStrictMode=function(e){return x(e)===i},Zh.isSuspense=function(e){return x(e)===u},Zh.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},Zh.typeOf=x}()),Zh)),Ah.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Jh(){if(Ph)return Lh;Ph=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return Lh=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(e){o=e(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s},Lh}function em(){if(Hh)return zh;Hh=1;return zh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function tm(){return Vh?Wh:(Vh=1,Wh=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var nm=Qh();Rh.exports=function(){if(Kh)return qh;Kh=1;var e=Qh(),t=Jh(),n=em(),r=tm(),i=function(){if(Uh)return Yh;Uh=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=em(),n={},r=tm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,a,o,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](a,c,s,o,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+o+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var p=l?l():"";e("Failed "+o+" type: "+d.message+(null!=p?p:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},Yh=i}(),a=function(){};function o(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),qh=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:h(o),arrayOf:function(e){return h((function(t,r,i,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+a+" `"+o+"` of type `"+b(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,a,o+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:h((function(e,t,n,r,i){var a=e[t];return s(a)?null:new f("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:h((function(t,n,r,i,a){var o=t[n];return e.isValidElementType(o)?null:new f("Invalid "+i+" `"+a+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||d;return new f("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:h((function(e,t,n,r,i){return v(e[t])?null:new f("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(t,i,a,o,s){if("function"!=typeof e)return new f("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var l=t[i],c=b(l);if("object"!==c)return new f("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,a,o,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new f("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),o)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+y(i)+" at index "+t+"."),o}return h((function(t,i,a,o,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,a,o,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+o+" `"+s+"` supplied to `"+a+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(t,r,i,a,o){var s=t[r],l=b(s);if("object"!==l)return new f("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return g(i,a,o,c,x(d));var u=d(s,c,i,a,o+"."+c,n);if(u)return u}return null}))},exact:function(e){return h((function(i,a,o,s,l){var c=i[a],d=b(c);if("object"!==d)return new f("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+o+"`, expected `object`.");var u=t({},i[a],e);for(var p in u){var h=e[p];if(r(e,p)&&"function"!=typeof h)return g(o,s,l,p,x(h));if(!h)return new f("Invalid "+s+" `"+l+"` key `"+p+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(i[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,p,o,s,l+"."+p,n);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function h(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,o,s,c,u,p,h){if(c=c||d,p=p||s,h!==n){if(l){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var g=c+":"+s;!t[g]&&r<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[g]=!0,r++)}}return null==o[s]?i?null===o[s]?new f("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,s,c,u,p)}var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function m(e){return h((function(t,n,r,i,a,o){var s=t[n];return b(s)!==e?new f("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,i){return new f((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},qh}()(nm.isElement,!0)}else Rh.exports=function(){if(Gh)return Xh;Gh=1;var e=em();function t(){}function n(){}return n.resetWarningCache=t,Xh=function(){function r(t,n,r,i,a,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a}}()();var rm=Ci(Rh.exports);const im=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function am(e,t,n){const r=function(e){const{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){const n=t.split(".").pop().toLowerCase(),r=im.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e),{webkitRelativePath:i}=e,a="string"==typeof t?t:"string"==typeof i&&i.length>0?i:`./${e.name}`;return"string"!=typeof r.path&&om(r,"path",a),void 0!==n&&Object.defineProperty(r,"handle",{value:n,writable:!1,configurable:!1,enumerable:!0}),om(r,"relativePath",a),r}function om(e,t,n){Object.defineProperty(e,t,{value:n,writable:!1,configurable:!1,enumerable:!0})}const sm=[".DS_Store","Thumbs.db"];function lm(e){return"object"==typeof e&&null!==e}function cm(e){return e.filter((e=>-1===sm.indexOf(e.name)))}function dm(e){if(null===e)return[];const t=[];for(let n=0;n<e.length;n++){const r=e[n];t.push(r)}return t}function um(e){if("function"!=typeof e.webkitGetAsEntry)return fm(e);const t=e.webkitGetAsEntry();return t&&t.isDirectory?mm(t):fm(e,t)}function pm(e){return e.reduce(((e,t)=>[...e,...Array.isArray(t)?pm(t):[t]]),[])}function fm(e,t){return G(this,void 0,void 0,(function*(){var n;if(globalThis.isSecureContext&&"function"==typeof e.getAsFileSystemHandle){const t=yield e.getAsFileSystemHandle();if(null===t)throw new Error(`${e} is not a File`);if(void 0!==t){const e=yield t.getFile();return e.handle=t,am(e)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return am(r,null!==(n=null==t?void 0:t.fullPath)&&void 0!==n?n:void 0)}))}function hm(e){return G(this,void 0,void 0,(function*(){return e.isDirectory?mm(e):function(e){return G(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{e.file((n=>{const r=am(n,e.fullPath);t(r)}),(e=>{n(e)}))}))}))}(e)}))}function mm(e){const t=e.createReader();return new Promise(((e,n)=>{const r=[];!function i(){t.readEntries((t=>G(this,void 0,void 0,(function*(){if(t.length){const e=Promise.all(t.map(hm));r.push(e),i()}else try{const t=yield Promise.all(r);e(t)}catch(e){n(e)}}))),(e=>{n(e)}))}()}))}var gm=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(",");if(0===n.length)return!0;var r=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):i===t}))}return!0};function vm(e){return function(e){if(Array.isArray(e))return jm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bm(Object(n),!0).forEach((function(t){ym(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bm(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ym(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||$m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $m(e,t){if(e){if("string"==typeof e)return jm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?jm(e,t):void 0}}function jm(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Sm=gm,km=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(","),t=e.length>1?"one of ".concat(e.join(", ")):e[0];return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Cm=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Om=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Tm={code:"too-many-files",message:"Too many files"};function Dm(e,t){var n="application/x-moz-file"===e.type||Sm(e,t);return[n,n?null:km(t)]}function Im(e,t,n){if(Em(e.size))if(Em(t)&&Em(n)){if(e.size>n)return[!1,Cm(n)];if(e.size<t)return[!1,Om(t)]}else{if(Em(t)&&e.size<t)return[!1,Om(t)];if(Em(n)&&e.size>n)return[!1,Cm(n)]}return[!0,null]}function Em(e){return null!=e}function _m(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Mm(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Rm(e){e.preventDefault()}function Am(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!_m(e)&&t&&t.apply(void 0,[e].concat(r)),_m(e)}))}}function Nm(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||"application/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Bm(e){return/^.*\.[\w]+$/.test(e)}var Fm=["children"],Lm=["open"],Pm=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],zm=["refKey","onChange","onClick"];function Hm(e){return function(e){if(Array.isArray(e))return Ym(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Vm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Wm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||Vm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Vm(e,t){if(e){if("string"==typeof e)return Ym(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ym(e,t):void 0}}function Ym(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Um(Object(n),!0).forEach((function(t){Km(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Km(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xm(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Gm=t.forwardRef((function(e,n){var r=e.children,i=Jm(Xm(e,Fm)),a=i.open,o=Xm(i,Lm);return t.useImperativeHandle(n,(function(){return{open:a}}),[a]),Y.default.createElement(t.Fragment,null,r(qm(qm({},o),{},{open:a})))}));Gm.displayName="Dropzone";var Zm={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function*(){return lm(e)&&lm(e.dataTransfer)?function(e,t){return G(this,void 0,void 0,(function*(){if(e.items){const n=dm(e.items).filter((e=>"file"===e.kind));if("drop"!==t)return n;return cm(pm(yield Promise.all(n.map(um))))}return cm(dm(e.files).map((e=>am(e))))}))}(e.dataTransfer,e.type):function(e){return lm(e)&&lm(e.target)}(e)?function(e){return dm(e.target.files).map((e=>am(e)))}(e):Array.isArray(e)&&e.every((e=>"getFile"in e&&"function"==typeof e.getFile))?function(e){return G(this,void 0,void 0,(function*(){return(yield Promise.all(e.map((e=>e.getFile())))).map((e=>am(e)))}))}(e):[]}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Gm.defaultProps=Zm,Gm.propTypes={children:rm.func,accept:rm.objectOf(rm.arrayOf(rm.string)),multiple:rm.bool,preventDropOnDocument:rm.bool,noClick:rm.bool,noKeyboard:rm.bool,noDrag:rm.bool,noDragEventsBubbling:rm.bool,minSize:rm.number,maxSize:rm.number,maxFiles:rm.number,disabled:rm.bool,getFilesFromEvent:rm.func,onFileDialogCancel:rm.func,onFileDialogOpen:rm.func,useFsAccessApi:rm.bool,autoFocus:rm.bool,onDragEnter:rm.func,onDragLeave:rm.func,onDragOver:rm.func,onDrop:rm.func,onDropAccepted:rm.func,onDropRejected:rm.func,onError:rm.func,validator:rm.func};var Qm={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Jm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=qm(qm({},Zm),e),r=n.accept,i=n.disabled,a=n.getFilesFromEvent,o=n.maxSize,s=n.minSize,l=n.multiple,c=n.maxFiles,d=n.onDragEnter,u=n.onDragLeave,p=n.onDragOver,f=n.onDrop,h=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,v=n.onFileDialogOpen,b=n.useFsAccessApi,x=n.autoFocus,y=n.preventDropOnDocument,w=n.noClick,$=n.noKeyboard,j=n.noDrag,S=n.noDragEventsBubbling,k=n.onError,C=n.validator,O=t.useMemo((function(){return function(e){if(Em(e))return Object.entries(e).reduce((function(e,t){var n=wm(t,2),r=n[0],i=n[1];return[].concat(vm(e),[r],vm(i))}),[]).filter((function(e){return Nm(e)||Bm(e)})).join(",")}(r)}),[r]),T=t.useMemo((function(){return function(e){return Em(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=wm(e,2),n=t[0],r=t[1],i=!0;return Nm(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(Bm)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=wm(t,2),r=n[0],i=n[1];return xm(xm({},e),{},ym({},r,i))}),{})}]:e}(r)}),[r]),D=t.useMemo((function(){return"function"==typeof v?v:tg}),[v]),I=t.useMemo((function(){return"function"==typeof g?g:tg}),[g]),E=t.useRef(null),_=t.useRef(null),M=Wm(t.useReducer(eg,Qm),2),R=M[0],A=M[1],N=R.isFocused,B=R.isFileDialogActive,F=t.useRef("undefined"!=typeof window&&window.isSecureContext&&b&&"showOpenFilePicker"in window),L=function(){!F.current&&B&&setTimeout((function(){_.current&&(_.current.files.length||(A({type:"closeDialog"}),I()))}),300)};t.useEffect((function(){return window.addEventListener("focus",L,!1),function(){window.removeEventListener("focus",L,!1)}}),[_,B,I,F]);var P=t.useRef([]),z=function(e){E.current&&E.current.contains(e.target)||(e.preventDefault(),P.current=[])};t.useEffect((function(){return y&&(document.addEventListener("dragover",Rm,!1),document.addEventListener("drop",z,!1)),function(){y&&(document.removeEventListener("dragover",Rm),document.removeEventListener("drop",z))}}),[E,y]),t.useEffect((function(){return!i&&x&&E.current&&E.current.focus(),function(){}}),[E,x,i]);var H=t.useCallback((function(e){k?k(e):console.error(e)}),[k]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),P.current=[].concat(Hm(P.current),[e.target]),Mm(e)&&Promise.resolve(a(e)).then((function(t){if(!_m(e)||S){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,a=e.multiple,o=e.maxFiles,s=e.validator;return!(!a&&t.length>1||a&&o>=1&&t.length>o)&&t.every((function(e){var t=wm(Dm(e,n),1)[0],a=wm(Im(e,r,i),1)[0],o=s?s(e):null;return t&&a&&!o}))}({files:t,accept:O,minSize:s,maxSize:o,multiple:l,maxFiles:c,validator:C});A({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[a,d,H,S,O,s,o,l,c,C]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=Mm(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1}),[p,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=P.current.filter((function(e){return E.current&&E.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),P.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Mm(e)&&u&&u(e))}),[E,u,S]),U=t.useCallback((function(e,t){var n=[],r=[];e.forEach((function(e){var t=Wm(Dm(e,O),2),i=t[0],a=t[1],l=Wm(Im(e,s,o),2),c=l[0],d=l[1],u=C?C(e):null;if(i&&c&&!u)n.push(e);else{var p=[a,d];u&&(p=p.concat(u)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[Tm]})})),n.splice(0)),A({acceptedFiles:n,fileRejections:r,isDragReject:r.length>0,type:"setFiles"}),f&&f(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&h&&h(n,t)}),[A,l,O,s,o,c,f,h,m,C]),q=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),P.current=[],Mm(e)&&Promise.resolve(a(e)).then((function(t){_m(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[a,U,H,S]),K=t.useCallback((function(){if(F.current){A({type:"openDialog"}),D();var e={multiple:l,types:T};window.showOpenFilePicker(e).then((function(e){return a(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){!function(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}(e)?!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(F.current=!1,_.current?(_.current.value=null,_.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):(I(e),A({type:"closeDialog"}))}))}else _.current&&(A({type:"openDialog"}),D(),_.current.value=null,_.current.click())}),[A,D,I,b,U,H,T,l]),X=t.useCallback((function(e){E.current&&E.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),K()))}),[E,K]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?K():setTimeout(K,0))}),[w,K]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return j?null:J(e)},ne=function(e){S&&e.stopPropagation()},re=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,a=e.onKeyDown,o=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,p=e.onDrop,f=Xm(e,Pm);return qm(qm(Km({onKeyDown:ee(Am(a,X)),onFocus:ee(Am(o,G)),onBlur:ee(Am(s,Z)),onClick:J(Am(l,Q)),onDragEnter:te(Am(c,W)),onDragOver:te(Am(d,V)),onDragLeave:te(Am(u,Y)),onDrop:te(Am(p,q)),role:"string"==typeof r&&""!==r?r:"presentation"},n,E),i||$?{}:{tabIndex:0}),f)}}),[E,X,G,Z,Q,W,V,Y,q,$,j,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),ae=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,a=Xm(e,zm);return qm(qm({},Km({accept:O,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:J(Am(r,q)),onClick:J(Am(i,ie)),tabIndex:-1},n,_)),a)}}),[_,r,l,q,i]);return qm(qm({},R),{},{isFocused:N&&!i,getRootProps:re,getInputProps:ae,rootRef:E,inputRef:_,open:J(K)})}function eg(e,t){switch(t.type){case"focus":return qm(qm({},e),{},{isFocused:!0});case"blur":return qm(qm({},e),{},{isFocused:!1});case"openDialog":return qm(qm({},Qm),{},{isFileDialogActive:!0});case"closeDialog":return qm(qm({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return qm(qm({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return qm(qm({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections,isDragReject:t.isDragReject});case"reset":return qm({},Qm);default:return e}}function tg(){}const ng=q.default.div`
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
`,rg=q.default.input`
    display: none;
`,ig=q.default.div`
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
`,ag=q.default(exports.Text.BodySmall)`
    color: ${Qo.Primary};
    text-align: center;
`,og=q.default(x.CloudArrowUpFillIcon)`
    color: ${Qo.Primary};
    height: 4rem;
    width: 4rem;
`,sg=t.forwardRef((({children:n,accept:r,capture:i,multiple:a,id:o,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":p},f)=>{const h=t.useRef(),{getRootProps:m,isDragActive:g}=Jm({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(f,(()=>Object.assign(Object.assign({},h.current),{openFileDialog:()=>{h.current&&(h.current.value=null,h.current.click())}})));return e.jsxs(ng,Object.assign({id:o,"data-testid":p||"dropzone",$border:c,className:s},m(),{children:[e.jsx(rg,{type:"file",name:l,ref:h,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:a,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),n,g&&e.jsxs(ig,{children:[e.jsx(og,{}),e.jsx(ag,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const lg="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function cg(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function dg(e){return"nodeType"in e}function ug(e){var t,n;return e?cg(e)?e:dg(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function pg(e){const{Document:t}=ug(e);return e instanceof t}function fg(e){return!cg(e)&&e instanceof ug(e).HTMLElement}function hg(e){return e instanceof ug(e).SVGElement}function mg(e){return e?cg(e)?e.document:dg(e)?pg(e)?e:fg(e)||hg(e)?e.ownerDocument:document:document:document}const gg=lg?t.useLayoutEffect:t.useEffect;function vg(e){const n=t.useRef(e);return gg((()=>{n.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)}),[])}function bg(e,n){void 0===n&&(n=[e]);const r=t.useRef(e);return gg((()=>{r.current!==e&&(r.current=e)}),n),r}function xg(e,n){const r=t.useRef();return t.useMemo((()=>{const t=e(r.current);return r.current=t,t}),[...n])}function yg(e){const n=vg(e),r=t.useRef(null),i=t.useCallback((e=>{e!==r.current&&(null==n||n(e,r.current)),r.current=e}),[]);return[r,i]}function wg(e){const n=t.useRef();return t.useEffect((()=>{n.current=e}),[e]),n.current}let $g={};function jg(e,n){return t.useMemo((()=>{if(n)return n;const t=null==$g[e]?0:$g[e]+1;return $g[e]=t,e+"-"+t}),[e,n])}function Sg(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const kg=Sg(1),Cg=Sg(-1);function Og(e){if(!e)return!1;const{KeyboardEvent:t}=ug(e.target);return t&&e instanceof t}function Tg(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=ug(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Dg=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Dg.Translate.toString(e),Dg.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Ig="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Eg(e){return e.matches(Ig)?e:e.querySelector(Ig)}const _g={display:"none"};function Mg(e){let{id:t,value:n}=e;return Y.default.createElement("div",{id:t,style:_g},n)}function Rg(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const Ag=t.createContext(null);const Ng={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Bg={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Fg(e){let{announcements:r=Bg,container:i,hiddenTextDescribedById:a,screenReaderInstructions:o=Ng}=e;const{announce:s,announcement:l}=function(){const[e,n]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&n(e)}),[]),announcement:e}}(),c=jg("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const n=t.useContext(Ag);t.useEffect((()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)}),[e,n])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(r.onDragStart({active:t}))},onDragMove(e){let{active:t,over:n}=e;r.onDragMove&&s(r.onDragMove({active:t,over:n}))},onDragOver(e){let{active:t,over:n}=e;s(r.onDragOver({active:t,over:n}))},onDragEnd(e){let{active:t,over:n}=e;s(r.onDragEnd({active:t,over:n}))},onDragCancel(e){let{active:t,over:n}=e;s(r.onDragCancel({active:t,over:n}))}})),[s,r])),!d)return null;const p=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(Mg,{id:a,value:o.draggable}),Y.default.createElement(Rg,{id:c,announcement:l}));return i?n.createPortal(p,i):p}var Lg;function Pg(){}function zg(e,n){return t.useMemo((()=>({sensor:e,options:null!=n?n:{}})),[e,n])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Lg||(Lg={}));const Hg=Object.freeze({x:0,y:0});function Wg(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Vg(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Yg(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function Ug(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function qg(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){const n=t.width*t.height,r=e.width*e.height,i=o*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const Kg=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,a=n.get(r);if(a){const n=qg(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Vg)};function Xg(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Hg}function Gg(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const Zg=Gg(1);const Qg={ignoreTransform:!1};function Jg(e,t){void 0===t&&(t=Qg);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=ug(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:a,x:o,y:s}=r,l=e.left-o-(1-i)*parseFloat(n),c=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:a,height:o,bottom:s,right:l}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:l}}function ev(e){return Jg(e,{ignoreTransform:!0})}function tv(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(pg(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!fg(i)||hg(i))return n;if(n.includes(i))return n;const a=ug(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=ug(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,a)&&n.push(i),function(e,t){return void 0===t&&(t=ug(e).getComputedStyle(e)),"fixed"===t.position}(i,a)?n:r(i.parentNode)}(e):n}function nv(e){const[t]=tv(e,1);return null!=t?t:null}function rv(e){return lg&&e?cg(e)?e:dg(e)?pg(e)||e===mg(e).scrollingElement?window:fg(e)?e:null:null:null}function iv(e){return cg(e)?e.scrollX:e.scrollLeft}function av(e){return cg(e)?e.scrollY:e.scrollTop}function ov(e){return{x:iv(e),y:av(e)}}var sv;function lv(e){return!(!lg||!e)&&e===document.scrollingElement}function cv(e){const t={x:0,y:0},n=lv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(sv||(sv={}));const dv={x:.2,y:.2};function uv(e,t,n,r,i){let{top:a,left:o,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=dv);const{isTop:c,isBottom:d,isLeft:u,isRight:p}=cv(e),f={x:0,y:0},h={x:0,y:0},m=t.height*i.y,g=t.width*i.x;return!c&&a<=t.top+m?(f.y=sv.Backward,h.y=r*Math.abs((t.top+m-a)/m)):!d&&l>=t.bottom-m&&(f.y=sv.Forward,h.y=r*Math.abs((t.bottom-m-l)/m)),!p&&s>=t.right-g?(f.x=sv.Forward,h.x=r*Math.abs((t.right-g-s)/g)):!u&&o<=t.left+g&&(f.x=sv.Backward,h.x=r*Math.abs((t.left+g-o)/g)),{direction:f,speed:h}}function pv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function fv(e){return e.reduce(((e,t)=>kg(e,ov(t))),Hg)}const hv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+iv(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+av(t)),0)}]];class mv{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=tv(t),r=fv(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of hv)for(const a of t)Object.defineProperty(this,a,{get:()=>{const t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class gv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function vv(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var bv,xv;function yv(e){e.preventDefault()}function wv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(bv||(bv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"}(xv||(xv={}));const $v={start:[xv.Space,xv.Enter],cancel:[xv.Esc],end:[xv.Space,xv.Enter,xv.Tab]},jv=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case xv.Right:return{...n,x:n.x+25};case xv.Left:return{...n,x:n.x-25};case xv.Down:return{...n,y:n.y+25};case xv.Up:return{...n,y:n.y-25}}};let Sv=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new gv(mg(t)),this.windowListeners=new gv(ug(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(bv.Resize,this.handleCancel),this.windowListeners.add(bv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(bv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=Jg),!e)return;const{top:n,left:r,bottom:i,right:a}=t(e);nv(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(Hg)}handleKeyDown(e){if(Og(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=$v,coordinateGetter:a=jv,scrollBehavior:o="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Hg;this.referenceCoordinates||(this.referenceCoordinates=c);const d=a(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=Cg(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:p}=cv(n),f=pv(n),h={x:Math.min(i===xv.Right?f.right-f.width/2:f.right,Math.max(i===xv.Right?f.left:f.left+f.width/2,d.x)),y:Math.min(i===xv.Down?f.bottom-f.height/2:f.bottom,Math.max(i===xv.Down?f.top:f.top+f.height/2,d.y))},m=i===xv.Right&&!s||i===xv.Left&&!l,g=i===xv.Down&&!c||i===xv.Up&&!a;if(m&&h.x!==d.x){const e=n.scrollLeft+t.x,a=i===xv.Right&&e<=u.x||i===xv.Left&&e>=p.x;if(a&&!t.y)return void n.scrollTo({left:e,behavior:o});r.x=a?n.scrollLeft-e:i===xv.Right?n.scrollLeft-u.x:n.scrollLeft-p.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(g&&h.y!==d.y){const e=n.scrollTop+t.y,a=i===xv.Down&&e<=u.y||i===xv.Up&&e>=p.y;if(a&&!t.x)return void n.scrollTo({top:e,behavior:o});r.y=a?n.scrollTop-e:i===xv.Down?n.scrollTop-u.y:n.scrollTop-p.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,kg(Cg(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function kv(e){return Boolean(e&&"distance"in e)}function Cv(e){return Boolean(e&&"delay"in e)}Sv.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=$v,onActivation:i}=t,{active:a}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const t=a.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Ov{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=ug(e);return e instanceof t?e:mg(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:a}=i;this.props=e,this.events=t,this.document=mg(a),this.documentListeners=new gv(this.document),this.listeners=new gv(n),this.windowListeners=new gv(ug(a)),this.initialCoordinates=null!=(r=Tg(i))?r:Hg,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(bv.Resize,this.handleCancel),this.windowListeners.add(bv.DragStart,yv),this.windowListeners.add(bv.VisibilityChange,this.handleCancel),this.windowListeners.add(bv.ContextMenu,yv),this.documentListeners.add(bv.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Cv(t))return this.timeoutId=setTimeout(this.handleStart,t.delay),void this.handlePending(t);if(kv(t))return void this.handlePending(t)}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){const{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(bv.Click,wv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(bv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:a,options:{activationConstraint:o}}=i;if(!r)return;const s=null!=(t=Tg(e))?t:Hg,l=Cg(r,s);if(!n&&o){if(kv(o)){if(null!=o.tolerance&&vv(l,o.tolerance))return this.handleCancel();if(vv(l,o.distance))return this.handleStart()}return Cv(o)&&vv(l,o.tolerance)?this.handleCancel():void this.handlePending(o,l)}e.cancelable&&e.preventDefault(),a(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===xv.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Tv={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Dv extends Ov{constructor(e){const{event:t}=e,n=mg(t.target);super(e,Tv,n)}}Dv.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const Iv={move:{name:"mousemove"},end:{name:"mouseup"}};var Ev;!function(e){e[e.RightClick=2]="RightClick"}(Ev||(Ev={}));let _v=class extends Ov{constructor(e){super(e,Iv,mg(e.event.target))}};_v.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==Ev.RightClick&&(null==r||r({event:n}),!0)}}];const Mv={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Rv extends Ov{constructor(e){super(e,Mv)}static setup(){return window.addEventListener(Mv.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Mv.move.name,e)};function e(){}}}var Av,Nv;function Bv(e){let{acceleration:n,activator:r=Av.Pointer,canScroll:i,draggingRect:a,enabled:o,interval:s=5,order:l=Nv.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const h=function(e){let{delta:t,disabled:n}=e;const r=wg(t);return xg((e=>{if(n||!r||!e)return Fv;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[sv.Backward]:e.x[sv.Backward]||-1===i.x,[sv.Forward]:e.x[sv.Forward]||1===i.x},y:{[sv.Backward]:e.y[sv.Backward]||-1===i.y,[sv.Forward]:e.y[sv.Forward]||1===i.y}}}),[n,t,r])}({delta:p,disabled:!o}),[m,g]=function(){const e=t.useRef(null);return[t.useCallback(((t,n)=>{e.current=setInterval(t,n)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),v=t.useRef({x:0,y:0}),b=t.useRef({x:0,y:0}),x=t.useMemo((()=>{switch(r){case Av.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Av.DraggableRect:return a}}),[r,a,c]),y=t.useRef(null),w=t.useCallback((()=>{const e=y.current;if(!e)return;const t=v.current.x*b.current.x,n=v.current.y*b.current.y;e.scrollBy(t,n)}),[]),$=t.useMemo((()=>l===Nv.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(o&&d.length&&x){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),r=u[t];if(!r)continue;const{direction:a,speed:o}=uv(e,r,x,n,f);for(const e of["x","y"])h[e][a[e]]||(o[e]=0,a[e]=0);if(o.x>0||o.y>0)return g(),y.current=e,m(w,s),v.current=o,void(b.current=a)}v.current={x:0,y:0},b.current={x:0,y:0},g()}else g()}),[n,w,i,g,o,s,JSON.stringify(x),JSON.stringify(h),m,d,$,u,JSON.stringify(f)])}Rv.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Av||(Av={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Nv||(Nv={}));const Fv={x:{[sv.Backward]:!1,[sv.Forward]:!1},y:{[sv.Backward]:!1,[sv.Forward]:!1}};var Lv,Pv;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Lv||(Lv={})),function(e){e.Optimized="optimized"}(Pv||(Pv={}));const zv=new Map;function Hv(e,t){return xg((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function Wv(e){let{callback:n,disabled:r}=e;const i=vg(n),a=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[r]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}function Vv(e){return new mv(Jg(e),e)}function Yv(e,n,r){void 0===n&&(n=Vv);const[i,a]=t.useState(null);function o(){a((t=>{if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:r)?i:null;const a=n(e);return JSON.stringify(t)===JSON.stringify(a)?t:a}))}const s=function(e){let{callback:n,disabled:r}=e;const i=vg(n),a=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,r]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){o();break}}}}),l=Wv({callback:o});return gg((()=>{o(),e?(null==l||l.observe(e),null==s||s.observe(document.body,{childList:!0,subtree:!0})):(null==l||l.disconnect(),null==s||s.disconnect())}),[e]),i}const Uv=[];function qv(e,n){void 0===n&&(n=[]);const r=t.useRef(null);return t.useEffect((()=>{r.current=null}),n),t.useEffect((()=>{const t=e!==Hg;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Cg(e,r.current):Hg}function Kv(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const Xv=[];function Gv(e){let{measure:n}=e;const[r,i]=t.useState(null),a=t.useCallback((e=>{for(const{target:t}of e)if(fg(t)){i((e=>{const r=n(t);return e?{...e,width:r.width,height:r.height}:r}));break}}),[n]),o=Wv({callback:a}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return fg(t)?t:e}(e);null==o||o.disconnect(),t&&(null==o||o.observe(t)),i(t?n(t):null)}),[n,o]),[l,c]=yg(s);return t.useMemo((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const Zv=[{sensor:Dv,options:{}},{sensor:Sv,options:{}}],Qv={current:{}},Jv={draggable:{measure:ev},droppable:{measure:ev,strategy:Lv.WhileDragging,frequency:Pv.Optimized},dragOverlay:{measure:Jg}};class eb extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const tb={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new eb,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Pg},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Jv,measureDroppableContainers:Pg,windowRect:null,measuringScheduled:!1},nb={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Pg,draggableNodes:new Map,over:null,measureDroppableContainers:Pg},rb=t.createContext(nb),ib=t.createContext(tb);function ab(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new eb}}}function ob(e,t){switch(t.type){case Lg.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Lg.DragMove:return null==e.draggable.active?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Lg.DragEnd:case Lg.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Lg.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new eb(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Lg.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const o=new eb(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Lg.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const a=new eb(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function sb(e){let{disabled:n}=e;const{active:r,activatorEvent:i,draggableNodes:a}=t.useContext(rb),o=wg(i),s=wg(null==r?void 0:r.id);return t.useEffect((()=>{if(!n&&!i&&o&&null!=s){if(!Og(o))return;if(document.activeElement===o.target)return;const e=a.get(s);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Eg(e);if(t){t.focus();break}}}))}}),[i,n,a,s,o]),null}const lb=t.createContext({...Hg,scaleX:1,scaleY:1});var cb;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(cb||(cb={}));const db=t.memo((function(e){var r,i,a,o;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=Zv,collisionDetection:p=Kg,measuring:f,modifiers:h,...m}=e;const g=t.useReducer(ob,void 0,ab),[v,b]=g,[x,y]=function(){const[e]=t.useState((()=>new Set)),n=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),n]}(),[w,$]=t.useState(cb.Uninitialized),j=w===cb.Initialized,{draggable:{active:S,nodes:k,translate:C},droppable:{containers:O}}=v,T=null!=S?k.get(S):null,D=t.useRef({initial:null,translated:null}),I=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==T?void 0:T.data)?e:Qv,rect:D}:null}),[S,T]),E=t.useRef(null),[_,M]=t.useState(null),[R,A]=t.useState(null),N=bg(m,Object.values(m)),B=jg("DndDescribedBy",s),F=t.useMemo((()=>O.getEnabled()),[O]),L=function(e){return t.useMemo((()=>({draggable:{...Jv.draggable,...null==e?void 0:e.draggable},droppable:{...Jv.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Jv.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(f),{droppableRects:P,measureDroppableContainers:z,measuringScheduled:H}=function(e,n){let{dragging:r,dependencies:i,config:a}=n;const[o,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=a,u=t.useRef(e),p=function(){switch(d){case Lv.Always:return!1;case Lv.BeforeDragging:return r;default:return!r}}(),f=bg(p),h=t.useCallback((function(e){void 0===e&&(e=[]),f.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[f]),m=t.useRef(null),g=xg((t=>{if(p&&!r)return zv;if(!t||t===zv||u.current!==e||null!=o){const t=new Map;for(let n of e){if(!n)continue;if(o&&o.length>0&&!o.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new mv(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,o,r,p,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{p||h()}),[r,p]),t.useEffect((()=>{o&&o.length>0&&s(null)}),[JSON.stringify(o)]),t.useEffect((()=>{p||"number"!=typeof l||null!==m.current||(m.current=setTimeout((()=>{h(),m.current=null}),l))}),[l,p,h,...i]),{droppableRects:g,measureDroppableContainers:h,measuringScheduled:null!=o}}(F,{dragging:j,dependencies:[C.x,C.y],config:L.droppable}),W=function(e,t){const n=null!=t?e.get(t):void 0,r=n?n.node.current:null;return xg((e=>{var n;return null==t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(k,S),V=t.useMemo((()=>R?Tg(R):null),[R]),U=function(){const e=!1===(null==_?void 0:_.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,n=j&&!e&&!t;if("object"==typeof c)return{...c,enabled:n};return{enabled:n}}(),q=function(e,t){return Hv(e,t)}(W,L.draggable.measure);!function(e){let{activeNode:n,measure:r,initialRect:i,config:a=!0}=e;const o=t.useRef(!1),{x:s,y:l}="boolean"==typeof a?{x:a,y:a}:a;gg((()=>{if(!s&&!l||!n)return void(o.current=!1);if(o.current||!i)return;const e=null==n?void 0:n.node.current;if(!e||!1===e.isConnected)return;const t=Xg(r(e),i);if(s||(t.x=0),l||(t.y=0),o.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const n=nv(e);n&&n.scrollBy({top:t.y,left:t.x})}}),[n,s,l,i,r])}({activeNode:null!=S?k.get(S):null,config:U.layoutShiftCompensation,initialRect:q,measure:L.draggable.measure});const K=Yv(W,L.draggable.measure,q),X=Yv(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:P,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=O.getNodeFor(null==(r=G.current.over)?void 0:r.id),Q=Gv({measure:L.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=j?null!=(a=Q.rect)?a:K:null,te=Boolean(Q.nodeRef.current&&Q.rect),ne=Xg(re=te?null:K,Hv(re));var re;const ie=Kv(J?ug(J):null),ae=function(e){const n=t.useRef(e),r=xg((t=>e?t&&t!==Uv&&e&&n.current&&e.parentNode===n.current.parentNode?t:tv(e):Uv),[e]);return t.useEffect((()=>{n.current=e}),[e]),r}(j?null!=Z?Z:W:null),oe=function(e,n){void 0===n&&(n=Jg);const[r]=e,i=Kv(r?ug(r):null),[a,o]=t.useState(Xv);function s(){o((()=>e.length?e.map((e=>lv(e)?i:new mv(n(e),e))):Xv))}const l=Wv({callback:s});return gg((()=>{null==l||l.disconnect(),s(),e.forEach((e=>null==l?void 0:l.observe(e)))}),[e]),a}(ae),se=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(h,{transform:{x:C.x-ne.x,y:C.y-ne.y,scaleX:1,scaleY:1},activatorEvent:R,active:I,activeNodeRect:K,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:ae,scrollableAncestorRects:oe,windowRect:ie}),le=V?kg(V,C):null,ce=function(e){const[n,r]=t.useState(null),i=t.useRef(e),a=t.useCallback((e=>{const t=rv(e.target);t&&r((e=>e?(e.set(t,ov(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){n(t);const o=e.map((e=>{const t=rv(e);return t?(t.addEventListener("scroll",a,{passive:!0}),[t,ov(t)]):null})).filter((e=>null!=e));r(o.length?new Map(o):null),i.current=e}return()=>{n(e),n(t)};function n(e){e.forEach((e=>{const t=rv(e);null==t||t.removeEventListener("scroll",a)}))}}),[a,e]),t.useMemo((()=>e.length?n?Array.from(n.values()).reduce(((e,t)=>kg(e,t)),Hg):fv(e):Hg),[e,n])}(ae),de=qv(ce),ue=qv(ce,[K]),pe=kg(se,de),fe=ee?Zg(ee,se):null,he=I&&fe?p({active:I,collisionRect:fe,droppableRects:P,droppableContainers:F,pointerCoordinates:le}):null,me=Ug(he,"id"),[ge,ve]=t.useState(null),be=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(te?se:kg(se,ue),null!=(o=null==ge?void 0:ge.rect)?o:null,K),xe=t.useRef(null),ye=t.useCallback(((e,t)=>{let{sensor:r,options:i}=t;if(null==E.current)return;const a=k.get(E.current);if(!a)return;const o=e.nativeEvent,s=new r({active:E.current,activeNode:a,event:o,options:i,context:G,onAbort(e){if(!k.get(e))return;const{onDragAbort:t}=N.current,n={id:e};null==t||t(n),x({type:"onDragAbort",event:n})},onPending(e,t,n,r){if(!k.get(e))return;const{onDragPending:i}=N.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};null==i||i(a),x({type:"onDragPending",event:a})},onStart(e){const t=E.current;if(null==t)return;const r=k.get(t);if(!r)return;const{onDragStart:i}=N.current,a={activatorEvent:o,active:{id:t,data:r.data,rect:D}};n.unstable_batchedUpdates((()=>{null==i||i(a),$(cb.Initializing),b({type:Lg.DragStart,initialCoordinates:e,active:t}),x({type:"onDragStart",event:a}),M(xe.current),A(o)}))},onMove(e){b({type:Lg.DragMove,coordinates:e})},onEnd:l(Lg.DragEnd),onCancel:l(Lg.DragCancel)});function l(e){return async function(){const{active:t,collisions:r,over:i,scrollAdjustedTranslate:a}=G.current;let s=null;if(t&&a){const{cancelDrop:n}=N.current;if(s={activatorEvent:o,active:t,collisions:r,delta:a,over:i},e===Lg.DragEnd&&"function"==typeof n){await Promise.resolve(n(s))&&(e=Lg.DragCancel)}}E.current=null,n.unstable_batchedUpdates((()=>{b({type:e}),$(cb.Uninitialized),ve(null),M(null),A(null),xe.current=null;const t=e===Lg.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=N.current[t];null==e||e(s),x({type:t,event:s})}}))}}xe.current=s}),[k]),we=t.useCallback(((e,t)=>(n,r)=>{const i=n.nativeEvent,a=k.get(r);if(null!==E.current||!a||i.dndKit||i.defaultPrevented)return;const o={active:a};!0===e(n,t.options,o)&&(i.dndKit={capturedBy:t.sensor},E.current=r,ye(n,t))}),[k,ye]),$e=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:r}=t;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:n(e.handler,t)})))]}),[])),[e,n])}(u,we);!function(e){t.useEffect((()=>{if(!lg)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),gg((()=>{K&&w===cb.Initializing&&$(cb.Initialized)}),[K,w]),t.useEffect((()=>{const{onDragMove:e}=N.current,{active:t,activatorEvent:r,collisions:i,over:a}=G.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:i,delta:{x:pe.x,y:pe.y},over:a};n.unstable_batchedUpdates((()=>{null==e||e(o),x({type:"onDragMove",event:o})}))}),[pe.x,pe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:i,scrollAdjustedTranslate:a}=G.current;if(!e||null==E.current||!t||!a)return;const{onDragOver:o}=N.current,s=i.get(me),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:r,delta:{x:a.x,y:a.y},over:l};n.unstable_batchedUpdates((()=>{ve(l),null==o||o(c),x({type:"onDragOver",event:c})}))}),[me]),gg((()=>{G.current={activatorEvent:R,active:I,activeNode:W,collisionRect:fe,collisions:he,droppableRects:P,draggableNodes:k,draggingNode:J,draggingNodeRect:ee,droppableContainers:O,over:ge,scrollableAncestors:ae,scrollAdjustedTranslate:pe},D.current={initial:ee,translated:fe}}),[I,W,he,fe,k,J,ee,P,O,ge,ae,pe]),Bv({...U,delta:C,draggingRect:fe,pointerCoordinates:le,scrollableAncestors:ae,scrollableAncestorRects:oe});const je=t.useMemo((()=>({active:I,activeNode:W,activeNodeRect:K,activatorEvent:R,collisions:he,containerNodeRect:X,dragOverlay:Q,draggableNodes:k,droppableContainers:O,droppableRects:P,over:ge,measureDroppableContainers:z,scrollableAncestors:ae,scrollableAncestorRects:oe,measuringConfiguration:L,measuringScheduled:H,windowRect:ie})),[I,W,K,R,he,X,Q,k,O,P,ge,z,ae,oe,L,H,ie]),Se=t.useMemo((()=>({activatorEvent:R,activators:$e,active:I,activeNodeRect:K,ariaDescribedById:{draggable:B},dispatch:b,draggableNodes:k,over:ge,measureDroppableContainers:z})),[R,$e,I,K,b,B,k,ge,z]);return Y.default.createElement(Ag.Provider,{value:y},Y.default.createElement(rb.Provider,{value:Se},Y.default.createElement(ib.Provider,{value:je},Y.default.createElement(lb.Provider,{value:be},d)),Y.default.createElement(sb,{disabled:!1===(null==l?void 0:l.restoreFocus)})),Y.default.createElement(Fg,{...l,hiddenTextDescribedById:B}))})),ub=t.createContext(null),pb="button";function fb(e){let{id:n,data:r,disabled:i=!1,attributes:a}=e;const o=jg("Draggable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=t.useContext(rb),{role:h=pb,roleDescription:m="draggable",tabIndex:g=0}=null!=a?a:{},v=(null==c?void 0:c.id)===n,b=t.useContext(v?lb:ub),[x,y]=yg(),[w,$]=yg(),j=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:r,handler:i}=t;return e[r]=e=>{i(e,n)},e}),{})),[e,n])}(s,n),S=bg(r);gg((()=>(p.set(n,{id:n,key:o,node:x,activatorNode:w,data:S}),()=>{const e=p.get(n);e&&e.key===o&&p.delete(n)})),[p,n]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:h,tabIndex:g,"aria-disabled":i,"aria-pressed":!(!v||h!==pb)||void 0,"aria-roledescription":m,"aria-describedby":u.draggable})),[i,h,g,v,m,u.draggable]),isDragging:v,listeners:i?void 0:j,node:x,over:f,setNodeRef:y,setActivatorNodeRef:$,transform:b}}const hb={timeout:25};function mb(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function gb(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function vb(e){return null!==e&&e>=0}const bb=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const a=mb(t,r,n),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},xb={scaleX:1,scaleY:1},yb=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[n])?t:r;if(!s)return null;if(i===n){const e=a[o];return e?{x:0,y:n<o?e.top+e.height-(s.top+s.height):e.top-s.top,...xb}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],a=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0;return a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(a,i,n);return i>n&&i<=o?{x:0,y:-s.height-l,...xb}:i<n&&i>=o?{x:0,y:s.height+l,...xb}:{x:0,y:0,...xb}};const wb="Sortable",$b=Y.default.createContext({activeIndex:-1,containerId:wb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:bb,disabled:{draggable:!1,droppable:!1}});function jb(e){let{children:n,id:r,items:i,strategy:a=bb,disabled:o=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(ib),p=jg(wb,r),f=Boolean(null!==l.rect),h=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),m=null!=s,g=s?h.indexOf(s.id):-1,v=d?h.indexOf(d.id):-1,b=t.useRef(h),x=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(h,b.current),y=-1!==v&&-1===g||x,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(o);gg((()=>{x&&m&&u(h)}),[x,h,m,u]),t.useEffect((()=>{b.current=h}),[h]);const $=t.useMemo((()=>({activeIndex:g,containerId:p,disabled:w,disableTransforms:y,items:h,overIndex:v,useDragOverlay:f,sortedRects:gb(h,c),strategy:a})),[g,p,w.draggable,w.droppable,y,h,v,c,f,a]);return Y.default.createElement($b.Provider,{value:$},n)}const Sb=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return mb(n,r,i).indexOf(t)},kb=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===a||i!==o)&&(!!n||o!==i&&t===l))},Cb={duration:200,easing:"ease"},Ob="transform",Tb=Dg.Transition.toString({property:Ob,duration:0,easing:"linear"}),Db={roleDescription:"sortable"};function Ib(e){let{animateLayoutChanges:n=kb,attributes:r,disabled:i,data:a,getNewIndex:o=Sb,id:s,strategy:l,resizeObserverConfig:c,transition:d=Cb}=e;const{items:u,containerId:p,activeIndex:f,disabled:h,disableTransforms:m,sortedRects:g,overIndex:v,useDragOverlay:b,strategy:x}=t.useContext($b),y=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(i,h),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:p,index:w,items:u},...a})),[p,a,w,u]),j=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:k,isOver:C,setNodeRef:O}=function(e){let{data:n,disabled:r=!1,id:i,resizeObserverConfig:a}=e;const o=jg("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(rb),u=t.useRef({disabled:r}),p=t.useRef(!1),f=t.useRef(null),h=t.useRef(null),{disabled:m,updateMeasurementsFor:g,timeout:v}={...hb,...a},b=bg(null!=g?g:i),x=Wv({callback:t.useCallback((()=>{p.current?(null!=h.current&&clearTimeout(h.current),h.current=setTimeout((()=>{d(Array.isArray(b.current)?b.current:[b.current]),h.current=null}),v)):p.current=!0}),[v]),disabled:m||!s}),y=t.useCallback(((e,t)=>{x&&(t&&(x.unobserve(t),p.current=!1),e&&x.observe(e))}),[x]),[w,$]=yg(y),j=bg(n);return t.useEffect((()=>{x&&w.current&&(x.disconnect(),p.current=!1,x.observe(w.current))}),[w,x]),t.useEffect((()=>(l({type:Lg.RegisterDroppable,element:{id:i,key:o,disabled:r,node:w,rect:f,data:j}}),()=>l({type:Lg.UnregisterDroppable,key:o,id:i}))),[i]),t.useEffect((()=>{r!==u.current.disabled&&(l({type:Lg.SetDroppableDisabled,id:i,key:o,disabled:r}),u.current.disabled=r)}),[i,o,r,l]),{active:s,rect:f,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...c}}),{active:T,activatorEvent:D,activeNodeRect:I,attributes:E,setNodeRef:_,listeners:M,isDragging:R,over:A,setActivatorNodeRef:N,transform:B}=fb({id:s,data:$,attributes:{...Db,...r},disabled:y.draggable}),F=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>e=>{n.forEach((t=>t(e)))}),n)}(O,_),L=Boolean(T),P=L&&!m&&vb(f)&&vb(v),z=!b&&R,H=z&&P?B:null,W=P?null!=H?H:(null!=l?l:x)({rects:g,activeNodeRect:I,activeIndex:f,overIndex:v,index:w}):null,V=vb(f)&&vb(v)?o({id:s,items:u,activeIndex:f,overIndex:v}):w,Y=null==T?void 0:T.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:p}),q=u!==U.current.items,K=n({active:T,containerId:p,isDragging:R,isSorting:L,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:n,index:r,node:i,rect:a}=e;const[o,s]=t.useState(null),l=t.useRef(r);return gg((()=>{if(!n&&r!==l.current&&i.current){const e=a.current;if(e){const t=Jg(i.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&s(n)}}r!==l.current&&(l.current=r)}),[n,r,i,a]),t.useEffect((()=>{o&&s(null)}),[o]),o}({disabled:!K,index:w,node:k,rect:S});return t.useEffect((()=>{L&&U.current.newIndex!==V&&(U.current.newIndex=V),p!==U.current.containerId&&(U.current.containerId=p),u!==U.current.items&&(U.current.items=u)}),[L,V,p,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:T,activeIndex:f,attributes:E,data:$,rect:S,index:w,newIndex:V,items:u,isOver:C,isSorting:L,isDragging:R,listeners:M,node:k,overIndex:v,over:A,setNodeRef:F,setActivatorNodeRef:N,setDroppableNodeRef:O,setDraggableNodeRef:_,transform:null!=X?X:W,transition:function(){if(X||q&&U.current.newIndex===w)return Tb;if(z&&!Og(D)||!d)return;if(L||K)return Dg.Transition.toString({...d,property:Ob});return}()}}function Eb(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const _b=[xv.Down,xv.Right,xv.Up,xv.Left],Mb=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:a,over:o,scrollableAncestors:s}}=t;if(_b.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];a.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const a=i.get(n.id);if(a)switch(e.code){case xv.Down:r.top<a.top&&t.push(n);break;case xv.Up:r.top>a.top&&t.push(n);break;case xv.Left:r.left>a.left&&t.push(n);break;case xv.Right:r.left<a.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Yg(t),a=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=Yg(r),o=i.reduce(((e,t,r)=>{return e+(i=n[r],a=t,Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)));var i,a}),0),s=Number((o/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(Wg)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Ug(l,"id");if(c===(null==o?void 0:o.id)&&l.length>1&&(c=l[1].id),null!=c){const e=a.get(n.id),t=a.get(c),o=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&o&&e&&t){const n=tv(l).some(((e,t)=>s[t]!==e)),i=Rb(e,t),a=function(e,t){if(!Eb(e)||!Eb(t))return!1;if(!Rb(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:a?r.width-o.width:0,y:a?r.height-o.height:0},d={x:o.left,y:o.top};return c.x&&c.y?d:Cg(d,c)}}}};function Rb(e,t){return!(!Eb(e)||!Eb(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Ab extends _v{}Ab.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Nb(e.target)}];function Nb(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Sv{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Nb(e.target)}];const Bb=q.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Fb=q.default(Td)`
    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"BodySmall"})}

    ${ts.MaxWidth.mobileL} {
        display: none;
    }
`,Lb=q.default($f)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Pb=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"BodySmall"})}
`,zb=t=>{var{children:n,visible:r,onMobileClose:i}=t,a=X(t,["children","visible","onMobileClose"]);const o=a["data-testid"]||"popover",s=kl.useMediaQuery({maxWidth:Jo.mobileL}),l=()=>{i&&i()},c=()=>"string"==typeof n?e.jsx(exports.Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[r&&e.jsx(Bb,Object.assign({"data-testid":o},a,{children:e.jsx(Fb,{children:c()})})),s&&e.jsx(xf,Object.assign({show:r,onOverlayClick:l},{children:e.jsx(Lb,Object.assign({onClose:l},{children:e.jsx(Pb,{children:c()})}))}))]})},Hb=q.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Wb=n=>{var r,i,{children:a,popoverContent:o,trigger:s="click",position:l="top",zIndex:c,rootNode:d,customOffset:u,delay:p,onPopoverAppear:f,onPopoverDismiss:h}=n,g=X(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,b]=t.useState(!1),x=t.useRef(),y=t.useRef(),w=kl.useMediaQuery({maxWidth:ns.mobileL}),{refs:$,floatingStyles:j,context:S}=m.useFloating({open:v,placement:l,whileElementsMounted:m.autoUpdate,middleware:[m.offset(null!=u?u:16),m.flip(),m.shift({limiter:m.limitShift()})],onOpenChange:e=>{b(e),v!==e&&M(e)}}),k=up(),C=w?"click":s,O=m.useClick(S,{ignoreMouse:"hover"===C}),T=m.useDismiss(S),D=m.useHover(S,{enabled:"hover"===C,delay:{open:null!==(r=null==p?void 0:p.open)&&void 0!==r?r:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:I,getFloatingProps:E}=m.useInteractions([O,T,D]),_=()=>{b(!1),M(!1)},M=e=>{e&&f&&f(),!e&&h&&h()};return e.jsxs(e.Fragment,{children:[e.jsx(Hb,Object.assign({ref:e=>{x.current=e,$.setReference(e)}},I({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),g,{children:a})),v&&e.jsx(m.FloatingPortal,Object.assign({root:d},{children:e.jsx(m.FloatingFocusManager,Object.assign({context:S},{children:e.jsx("div",Object.assign({ref:e=>{y.current=e,$.setFloating(e)},style:Object.assign(Object.assign({},j),{outline:"none",zIndex:null!=c?c:k})},E(),{children:"function"==typeof o?o():e.jsx(zb,Object.assign({visible:!0,onMobileClose:_},{children:o}))}))}))}))]})},Vb=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Yb=q.default.span`
    color: ${Qo.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Vb(e)}

    &:hover,
    &:focus-visible {
        color: ${Qo.Secondary};
        ${({$hoverStyle:e})=>Vb(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Ub=q.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,qb=t=>{var{ariaLabel:n,content:r,icon:i,underlineStyle:a="default",underlineHoverStyle:o="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!r;return e.jsx(Wb,Object.assign({},s,{children:e.jsxs(Yb,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:o,"aria-label":null!=n?n:l?void 0:"More info"},{children:[r,i&&e.jsx(Ub,Object.assign({$standalone:!l},{children:i}))]}))}))};q.default.button`
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
`;const Kb=q.default.div`
    padding-left: 0.25rem;
    display: inline;
`,Xb=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=t;return e.jsx(Kb,{children:e.jsx(qb,{trigger:"click",id:o,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=a?a:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Gb=q.default.label`
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
`,Zb=q.default(exports.Text.H6)`
    color: ${Qo.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,Qb=q.default(exports.Text.BodySmall)`
    && {
        color: ${Qo.Neutral[3]};
        ${gs.getFontFamily("BodySmall","regular")}
    }
`,Jb=t=>{var{children:n,addon:r,subtitle:i,"data-testid":a}=t,o=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Gb,Object.assign({},o,{children:[n,r&&r.type&&("popover"===r.type?e.jsx(Xb,{addon:r}):null),"string"==typeof i?e.jsx(Qb,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},o,{children:i})):i]}))},ex=t=>e.jsx(Zb,Object.assign({weight:"semibold"},t)),tx=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(nx,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),nx=q.default.div`
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
`,rx=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=X(t,["children","data-testid","stretch"]);return e.jsx(ix,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),ix=q.default.section`
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
`,ax=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(rx,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},l,{children:e.jsx(tx,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),ox={Section:rx,Container:tx,Content:ax,ColDiv:Gp},sx=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,lx=q.default.div`
    ${sx}
`,cx=q.default(ox.ColDiv)`
    ${sx}
`,dx=({label:n,errorMessage:r,id:i,disabled:a,children:o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,"data-error-testid":u})=>{const p=!s&&(l||c||d)?"grid":s||"flex",f=()=>u||(i?`${i}-error-message`:"error-message"),h=()=>!!r;const m="grid"===p?cx:lx;return e.jsxs(m,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"flex":return}})(p),{children:[n&&("string"==typeof n?e.jsx(Jb,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},{children:n})):e.jsx(Jb,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},n))),(()=>{const e={"aria-invalid":h(),"aria-describedby":h()&&f()};return t.Children.map(o,(n=>t.cloneElement(n,e)))})(),r&&e.jsx(Zb,Object.assign({id:f(),weight:"semibold",tabIndex:0,"data-testid":f()},{children:r}))]}))};function ux(e,t){return ux=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ux(e,t)}function px(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function fx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function hx(e){return null!==e&&1===e.length?e[0]:e.slice()}function mx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function gx(e,t){return vx(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function vx(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let bx=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),mx(n.getMouseEventMap())}))}px(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=gx(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),mx(n.getKeyDownEventMap()),px(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),mx(n.getMouseEventMap()),px(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),mx(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},a={index:t,value:hx(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(a)),n.props.renderThumb(i,a)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},a={index:e,value:hx(n.state.value)};return n.props.renderTrack(i,a)};let r=fx(t.value);r.length||(r=fx(t.defaultValue)),n.pendingResizeTimeouts=[];const i=[];for(let e=0;e<r.length;e+=1)r[e]=gx(r[e],t),i.push(e);return n.resizeObserver=null,n.resizeElementRef=Y.default.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:i},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ux(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=fx(e.value);return n.length?t.pending?null:{value:n.map((t=>gx(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return hx(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let a=0;a<i;a+=1){const i=this.calcOffset(r[a]),o=Math.abs(e-i);o<t&&(t=o,n=a)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return gx(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],a=r[this.posMaxKey()],o=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(a-o);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=gx(this.calcValue(n),this.props),a=this.state.value.slice();a[r]=i;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=gx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=gx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:s,minDistance:l}=this.props;if(!a){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,a&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const a=r-i*n;t[e-1-i]>a&&(t[e-1-i]=a)}}(r,t,l,o)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=vx(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=vx(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](hx(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return Y.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,i,a)},t}(Y.default.Component);bx.displayName="ReactSlider",bx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>Y.default.createElement("div",e),renderTrack:e=>Y.default.createElement("div",e),renderMark:e=>Y.default.createElement("span",e)};var xx=bx;const yx=q.default.div`
    isolation: isolate;
`,wx=q.default.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,$x=q.default.div`
    margin-bottom: 1rem;
`,jx=q.default(exports.Text.Body)`
    overflow-wrap: anywhere;
`,Sx=q.default(xx)`
    height: 0.875rem;
`,kx=q.default.div`
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
`,Cx=q.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${kx}:after {
        border: 1px solid ${Qo.Primary};
    }
`,Ox=q.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Qo.Neutral[4](e)};
`,Tx=n=>{var{value:r,min:i=0,max:a=100,step:o=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:h,sliderLabelSuffix:m,showIndicatorLabel:g,indicatorLabelPrefix:v,indicatorLabelSuffix:b,renderSliderLabel:x,onChange:y,onChangeEnd:w}=n,$=X(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[j,S]=t.useState(C()),k=function(){const e=function(){const e=d||u?Qo.Neutral[5]:Qo.Neutral[4],t=d||u?Qo.Neutral[4]:Qo.Primary;if(1===l)return[t,e];const n=[];n.push(e);for(let e=0;e<l-1;e++)n.push(t);return n.push(e),n}();return new Array(l+1).fill(0).map(((t,n)=>(null==c?void 0:c[n])||e[n]))}();t.useEffect((()=>{r!==j&&S(C())}),[r]);function C(){if(r&&r.length===l)return r;const e=[];for(let t=0;t<l;t++)e.push(i+o*t);return e}const O=t=>x?x(t):e.jsxs(jx,{children:[h,t,m]});return e.jsxs(yx,Object.assign({},$,{children:[g&&e.jsx($x,{children:(()=>{let t="";if(1===j.length)t=`${j[0]}`;else if(2===j.length)t=`${j[0]} - ${j[1]}`;else if(j.length>2){t=`${Math.min(...j)} - ${Math.max(...j)}`}return e.jsxs(jx,{children:[v,t,b]})})()}),e.jsx(Sx,{step:o,min:i,max:a,value:j,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==y||y(t)}else{if(t>-1&&j[t]===e[t])return;S(e),null==y||y(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else S(e),null==w||w(e)},minDistance:s,ariaLabel:p,renderThumb:(t,n)=>e.jsx(Cx,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:d?void 0:t.tabIndex},{children:e.jsx(kx,{$disabled:d,$readOnly:u})})),renderTrack:(t,n)=>e.jsx(Ox,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:k[n.index]}))}),f&&e.jsxs(wx,{children:[e.jsx("div",{children:O(i)}),e.jsx("div",{children:O(a)})]})]}))},Dx=q.default.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Ix=q.default.div`
    margin: 0 0.5rem;
`,Ex=q.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,_x=q.default.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${Qo.Neutral[8]};

    ${e=>{let t=Qo.Neutral[6];return e.$disabled&&e.$selected?t=Qo.Neutral[4]:e.$disabled?t=Qo.Neutral[5]:e.$selected&&(t=Qo.Accent.Light[1]),i.css`
            background-color: ${t};
        `}}
`,Mx=q.default(Tx)`
    margin-top: -0.3125rem;
`,Rx=n=>{var{bins:r=[],interval:i,disabled:a,readOnly:o,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:p,onChangeEnd:f,renderEmptyView:h,renderRangeLabel:m}=n,g=X(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const v=r.map((e=>e.count)),b=Math.max(...v),x=r.map((e=>e.minValue)),y=Math.max(...x),w=Math.min(...x),[$,j]=t.useState(O()),S=t.useMemo((()=>{const e=[...r].sort(((e,t)=>e.minValue-t.minValue)),t=(y-w)/i+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===w+i*r));t?n.push(t):n.push({count:0,minValue:w+i*r})}return n}),[r,i]);t.useEffect((()=>{s!==$&&j(O())}),[s]);const k=e=>{j(e),null==p||p(e)},C=e=>{j(e),null==f||f(e)};function O(){return null!=s?s:[w,w+i]}const T=t=>m?m(t):e.jsxs(exports.Text.Body,{children:[c,t,d]});return e.jsxs("div",Object.assign({},g,{children:[l&&e.jsxs(Dx,{children:[T($[0]),e.jsx(Ix,{children:"-"}),T($[1])]}),S.every((e=>0===e.count))&&h?h():e.jsxs(e.Fragment,{children:[e.jsx(Ex,{children:S.map(((t,n)=>{const r=t.count/b;return e.jsx(_x,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:a||o},n)}))}),e.jsx(Mx,{min:w,max:y+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:a,readOnly:o,ariaLabels:u,onChange:k,onChangeEnd:C})]})]}))},Ax=q.default.input`
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
`,Nx=q.default.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Qo.Neutral[3]};
    background-color: transparent;
    border: none;
`,Bx=q.default(g.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Fx=q.default.div`
    display: flex;
    width: 100%;
`,Lx=Y.default.forwardRef(((n,r)=>{var{value:i,spacing:a,type:o,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:p=!1,className:f,styleType:h="bordered"}=n,m=X(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const g=t.useRef();t.useImperativeHandle(r,(()=>g.current),[]);const v=pc({ref:g,formatter:e=>sc.transformWithSpaces(e,a)}),b=e=>{d&&(y()?w(e):d(e))},x=()=>{u&&u(),g&&g.current&&g.current.focus()},y=()=>"tel"===o&&a,w=e=>{const{nextValue:t,updateCaretPosition:n}=v(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},$=i?(e=>e?y()?sc.transformWithSpaces(e,a):e:"")(i):i,j=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ax,Object.assign({"data-testid":"input",ref:g,disabled:l,value:$,onChange:b,type:o,readOnly:c},m)),p&&!l&&!c&&!!i&&e.jsx(Nx,Object.assign({onClick:x,type:"button"},{children:e.jsx(Bx,{"aria-hidden":!0})}))]});return e.jsx(e.Fragment,{children:"no-border"===h?e.jsx(Fx,Object.assign({className:f},{children:j()})):e.jsx(yp,Object.assign({$disabled:l,$error:s,$readOnly:c,className:f},{children:j()}))})})),Px=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Lx,Object.assign({id:`${a}-base`,"data-testid":s||a,ref:n,error:!!i},p))}))})),zx=q.default.div`
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
`,Hx=q.default(Lx)`
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
`,Wx=q.default.div`
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
`;var Vx=eo;var Yx=eo,Ux=to,qx=bo;var Kx=eo,Xx=function(){this.__data__=new Vx,this.size=0},Gx=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Zx=function(e){return this.__data__.get(e)},Qx=function(e){return this.__data__.has(e)},Jx=function(e,t){var n=this.__data__;if(n instanceof Yx){var r=n.__data__;if(!Ux||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new qx(r)}return n.set(e,t),this.size=n.size,this};function ey(e){var t=this.__data__=new Kx(e);this.size=t.size}ey.prototype.clear=Xx,ey.prototype.delete=Gx,ey.prototype.get=Zx,ey.prototype.has=Qx,ey.prototype.set=Jx;var ty=ey;var ny=bo,ry=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},iy=function(e){return this.__data__.has(e)};function ay(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ny;++t<n;)this.add(e[t])}ay.prototype.add=ay.prototype.push=ry,ay.prototype.has=iy;var oy=ay,sy=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},ly=function(e,t){return e.has(t)};var cy=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,p=!0,f=2&n?new oy:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var h=e[u],m=t[u];if(r)var g=o?r(m,h,u,t,e,a):r(h,m,u,e,t,a);if(void 0!==g){if(g)continue;p=!1;break}if(f){if(!sy(t,(function(e,t){if(!ly(f,t)&&(h===e||i(h,e,n,r,a)))return f.push(t)}))){p=!1;break}}else if(h!==m&&!i(h,m,n,r,a)){p=!1;break}}return a.delete(e),a.delete(t),p};var dy=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},uy=Ei.Uint8Array,py=Pa,fy=cy,hy=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},my=dy,gy=_i?_i.prototype:void 0,vy=gy?gy.valueOf:void 0;var by=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new uy(e),new uy(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return py(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=hy;case"[object Set]":var l=1&r;if(s||(s=my),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=fy(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(vy)return vy.call(e)==vy.call(t)}return!1};var xy=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},yy=Oi;var wy=function(e,t,n){var r=t(e);return yy(e)?r:xy(r,n(e))};var $y=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},jy=function(){return[]},Sy=Object.prototype.propertyIsEnumerable,ky=Object.getOwnPropertySymbols,Cy=ky?function(e){return null==e?[]:(e=Object(e),$y(ky(e),(function(t){return Sy.call(e,t)})))}:jy;var Oy=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Ty=Wi,Dy=Vi;var Iy=function(e){return Dy(e)&&"[object Arguments]"==Ty(e)},Ey=Vi,_y=Object.prototype,My=_y.hasOwnProperty,Ry=_y.propertyIsEnumerable,Ay=Iy(function(){return arguments}())?Iy:function(e){return Ey(e)&&My.call(e,"callee")&&!Ry.call(e,"callee")},Ny={exports:{}};var By=function(){return!1};!function(e,t){var n=Ei,r=By,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(Ny,Ny.exports);var Fy=Ny.exports,Ly=/^(?:0|[1-9]\d*)$/;var Py=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Ly.test(e))&&e>-1&&e%1==0&&e<t};var zy=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Hy=Wi,Wy=zy,Vy=Vi,Yy={};Yy["[object Float32Array]"]=Yy["[object Float64Array]"]=Yy["[object Int8Array]"]=Yy["[object Int16Array]"]=Yy["[object Int32Array]"]=Yy["[object Uint8Array]"]=Yy["[object Uint8ClampedArray]"]=Yy["[object Uint16Array]"]=Yy["[object Uint32Array]"]=!0,Yy["[object Arguments]"]=Yy["[object Array]"]=Yy["[object ArrayBuffer]"]=Yy["[object Boolean]"]=Yy["[object DataView]"]=Yy["[object Date]"]=Yy["[object Error]"]=Yy["[object Function]"]=Yy["[object Map]"]=Yy["[object Number]"]=Yy["[object Object]"]=Yy["[object RegExp]"]=Yy["[object Set]"]=Yy["[object String]"]=Yy["[object WeakMap]"]=!1;var Uy=function(e){return Vy(e)&&Wy(e.length)&&!!Yy[Hy(e)]};var qy=function(e){return function(t){return e(t)}},Ky={exports:{}};!function(e,t){var n=Ti,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Ky,Ky.exports);var Xy=Ky.exports,Gy=Uy,Zy=qy,Qy=Xy&&Xy.isTypedArray,Jy=Qy?Zy(Qy):Gy,ew=Oy,tw=Ay,nw=Oi,rw=Fy,iw=Py,aw=Jy,ow=Object.prototype.hasOwnProperty;var sw=function(e,t){var n=nw(e),r=!n&&tw(e),i=!n&&!r&&rw(e),a=!n&&!r&&!i&&aw(e),o=n||r||i||a,s=o?ew(e.length,String):[],l=s.length;for(var c in e)!t&&!ow.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||iw(c,l))||s.push(c);return s},lw=Object.prototype;var cw=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||lw)};var dw=function(e,t){return function(n){return e(t(n))}},uw=dw(Object.keys,Object),pw=cw,fw=uw,hw=Object.prototype.hasOwnProperty;var mw=function(e){if(!pw(e))return fw(e);var t=[];for(var n in Object(e))hw.call(e,n)&&"constructor"!=n&&t.push(n);return t},gw=ra,vw=zy;var bw=function(e){return null!=e&&vw(e.length)&&!gw(e)},xw=sw,yw=mw,ww=bw;var $w=function(e){return ww(e)?xw(e):yw(e)},jw=wy,Sw=Cy,kw=$w;var Cw=function(e){return jw(e,kw,Sw)},Ow=Object.prototype.hasOwnProperty;var Tw=function(e,t,n,r,i,a){var o=1&n,s=Cw(e),l=s.length;if(l!=Cw(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:Ow.call(t,d)))return!1}var u=a.get(e),p=a.get(t);if(u&&p)return u==t&&p==e;var f=!0;a.set(e,t),a.set(t,e);for(var h=o;++c<l;){var m=e[d=s[c]],g=t[d];if(r)var v=o?r(g,m,d,t,e,a):r(m,g,d,e,t,a);if(!(void 0===v?m===g||i(m,g,n,r,a):v)){f=!1;break}h||(h="constructor"==d)}if(f&&!h){var b=e.constructor,x=t.constructor;b==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof x&&x instanceof x||(f=!1)}return a.delete(e),a.delete(t),f},Dw=wa(Ei,"DataView"),Iw=to,Ew=wa(Ei,"Promise"),_w=wa(Ei,"Set"),Mw=wa(Ei,"WeakMap"),Rw=Wi,Aw=la,Nw="[object Map]",Bw="[object Promise]",Fw="[object Set]",Lw="[object WeakMap]",Pw="[object DataView]",zw=Aw(Dw),Hw=Aw(Iw),Ww=Aw(Ew),Vw=Aw(_w),Yw=Aw(Mw),Uw=Rw;(Dw&&Uw(new Dw(new ArrayBuffer(1)))!=Pw||Iw&&Uw(new Iw)!=Nw||Ew&&Uw(Ew.resolve())!=Bw||_w&&Uw(new _w)!=Fw||Mw&&Uw(new Mw)!=Lw)&&(Uw=function(e){var t=Rw(e),n="[object Object]"==t?e.constructor:void 0,r=n?Aw(n):"";if(r)switch(r){case zw:return Pw;case Hw:return Nw;case Ww:return Bw;case Vw:return Fw;case Yw:return Lw}return t});var qw=Uw,Kw=ty,Xw=cy,Gw=by,Zw=Tw,Qw=qw,Jw=Oi,e$=Fy,t$=Jy,n$="[object Arguments]",r$="[object Array]",i$="[object Object]",a$=Object.prototype.hasOwnProperty;var o$=function(e,t,n,r,i,a){var o=Jw(e),s=Jw(t),l=o?r$:Qw(e),c=s?r$:Qw(t),d=(l=l==n$?i$:l)==i$,u=(c=c==n$?i$:c)==i$,p=l==c;if(p&&e$(e)){if(!e$(t))return!1;o=!0,d=!1}if(p&&!d)return a||(a=new Kw),o||t$(e)?Xw(e,t,n,r,i,a):Gw(e,t,l,n,r,i,a);if(!(1&n)){var f=d&&a$.call(e,"__wrapped__"),h=u&&a$.call(t,"__wrapped__");if(f||h){var m=f?e.value():e,g=h?t.value():t;return a||(a=new Kw),i(m,g,n,r,a)}}return!!p&&(a||(a=new Kw),Zw(e,t,n,r,i,a))},s$=Vi;var l$=function e(t,n,r,i,a){return t===n||(null==t||null==n||!s$(t)&&!s$(n)?t!=t&&n!=n:o$(t,n,r,i,e,a))},c$=ty,d$=l$;var u$=Ji;var p$=function(e){return e==e&&!u$(e)},f$=p$,h$=$w;var m$=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},g$=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new c$;if(r)var p=r(c,d,l,e,t,u);if(!(void 0===p?d$(d,c,3,r,u):p))return!1}}return!0},v$=function(e){for(var t=h$(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,f$(i)]}return t},b$=m$;var x$=Fo,y$=Ay,w$=Oi,$$=Py,j$=zy,S$=Po;var k$=function(e,t){return null!=e&&t in Object(e)},C$=function(e,t,n){for(var r=-1,i=(t=x$(t,e)).length,a=!1;++r<i;){var o=S$(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&j$(i)&&$$(o,i)&&(w$(e)||y$(e))};var O$=l$,T$=Yo,D$=function(e,t){return null!=e&&C$(e,t,k$)},I$=Qi,E$=p$,_$=m$,M$=Po;var R$=Wo;var A$=function(e){return function(t){return null==t?void 0:t[e]}},N$=function(e){return function(t){return R$(t,e)}},B$=Qi,F$=Po;var L$=function(e){var t=v$(e);return 1==t.length&&t[0][2]?b$(t[0][0],t[0][1]):function(n){return n===e||g$(n,e,t)}},P$=function(e,t){return I$(e)&&E$(t)?_$(M$(e),t):function(n){var r=T$(n,e);return void 0===r&&r===t?D$(n,e):O$(t,r,3)}},z$=function(e){return e},H$=Oi,W$=function(e){return B$(e)?A$(F$(e)):N$(e)};var V$=function(e){return"function"==typeof e?e:null==e?z$:"object"==typeof e?H$(e)?P$(e[0],e[1]):L$(e):W$(e)},Y$=V$,U$=bw,q$=$w;var K$=function(e){return function(t,n,r){var i=Object(t);if(!U$(t)){var a=Y$(n);t=q$(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var X$=Vd,G$=1/0;var Z$=function(e){return e?(e=X$(e))===G$||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Q$=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},J$=V$,ej=function(e){var t=Z$(e),n=t%1;return t==t?n?t-n:t:0},tj=Math.max;var nj=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ej(n);return i<0&&(i=tj(r+i,0)),Q$(e,J$(t),i)},rj=Ci(nj),ij=Ci(K$(nj)),aj=l$;var oj=Ci((function(e,t){return aj(e,t)}));const sj=q.default(Si.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,lj=q.default.ul`
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
`,cj=q.default.li`
    :hover,
    :focus,
    :active {
        background: ${Qo.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${Qo.Accent.Light[5]};
            `}}
`,dj=q.default.button`
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
`,uj=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,pj=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Qo.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&uj}
`,fj=q.default.div`
    color: ${Qo.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&uj}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${gs.getTextStyle("BodySmall","semibold")}
                `:i.css`
                    ${gs.getTextStyle("Body","regular")}
                `}
`,hj=q.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${pj} {
                        display: inline;
                    }

                    ${fj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,mj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,gj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,vj=q.default(_d)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,bj=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,xj=q.default.button`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Qo.Primary(e)};\n\t\t`}
`,yj=q.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,wj=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,$j=q.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.5;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Qo.Validation.Red.Icon};
`,jj=e=>"small"===e?1:1.375,Sj=e=>i.css`
        height: ${jj(e)}rem;
        width: ${jj(e)}rem;
    `,kj=q.default.li`
    background: ${Qo.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Cj=q.default(wp)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Oj=q.default(y.MagnifierIcon)`
    ${e=>Sj(e.$variant)}
    margin: 0 0.5rem;
    color: ${Qo.Neutral[3]};
`,Tj=q.default(is)`
    ${e=>Sj(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${Qo.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${Sj(e.$variant)}
                }
            `}}
`,Dj=t.forwardRef(((t,n)=>{const{onClear:r}=t,i=X(t,["onClear"]);return e.jsxs(kj,{children:[e.jsx(Oj,{$variant:t.variant}),e.jsx(Cj,Object.assign({ref:n,$variant:t.variant},i)),i.value&&e.jsx(Tj,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:r,$variant:t.variant},{children:e.jsx(u.CrossIcon,{})}))]},"search")})),Ij=n=>{var{listItems:r,listExtractor:i,valueExtractor:a,onSelectItem:o,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:p,onDismiss:f,disableItemFocus:h,multiSelect:m,selectedItems:g,onSelectAll:v,onRetry:b,itemsLoadState:x="success",itemTruncationType:y="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:j,onBlur:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,variant:O="default"}=n,T=X(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[D,I]=t.useState(0),[E,_]=t.useState(""),[M,R]=t.useState(r),[A,N]=t.useState(0),B=oi({height:A}),F=t.useRef(),L=t.useRef(),P=t.useRef([]),z=t.useRef(),H=t.useRef(),W=t.useRef(D),V=t.useRef(M),Y=e=>{W.current=e,I(e)},U=e=>{V.current=e,R(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(E)}),[E]),t.useEffect((()=>{if(_(""),l){if(setTimeout((()=>{N(Q())})),h)return;z&&z.current?(z.current.focus(),Y(-1)):P.current[D]&&P.current[D].focus()}else N(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();N(e)}}),[M,x]),t.useEffect((()=>{U(r),_(""),Y(0)}),[r]);const q=e=>i?i(e):e.toString(),K=e=>{if("inline"!==$)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return sc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},G=e=>!!ij(g,(t=>oj(t,e))),Z=e=>{if(""===e)U(r);else if(p){const t=p(e);U(t)}else{const t=r.filter((t=>{var n;const r=q(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),a="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));U(t)}},Q=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{if(F&&F.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current&&V.current&&W.current<V.current.length-1){const e=W.current+1;P.current[e].focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;P.current[e].focus(),Y(W.current-1)}break;case"Escape":f&&f(!0)}},ee=(e,t)=>{e.preventDefault(),o&&o(t,(e=>a?a(e):e)(t))},te=e=>{const t=e.target.value;_(t),u&&u()},ne=()=>{var e;_(""),null===(e=z.current)||void 0===e||e.focus(),u&&u()},re=()=>{b&&b()},ie=()=>{S&&S()},ae=t=>e.jsxs(e.Fragment,{children:[e.jsx(mj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t})),e.jsx(gj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t}))]}),oe=t=>{const n=q(t),r="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,a=K(r),o=i&&K(i),s=a||o?"next-line":$;return e.jsxs(hj,Object.assign({$labelDisplayType:s},{children:[e.jsx(pj,Object.assign({$truncateType:y,$maxLines:w,$variant:O,"aria-label":r},{children:"middle"===y&&a?ae(r):r})),i&&e.jsx(fj,Object.assign({$truncateType:y,$maxLines:w,$labelDisplayType:$,"aria-label":i},{children:"middle"===y&&o?ae(i):i}))]}))},se=()=>{if(!b||b&&"success"===x)return M.map(((t,n)=>e.jsx(cj,Object.assign({$checked:G(t)&&!m},{children:e.jsxs(dj,Object.assign({$hasNextLineLabel:"next-line"===$&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{ee(e,t)},ref:e=>P.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:m,onBlur:ie,$variant:O},{children:[m&&e.jsx(vj,{checked:G(t),displaySize:"small"}),j?j(t,{selected:G(t)}):oe(t)]}))}),((e,t)=>`item_${t}__${a?a(e):e}`)(t,n))))},le=()=>{if(m&&M.length>0&&!E&&"success"===x)return e.jsx(bj,{children:e.jsx(xj,Object.assign({onClick:v,type:"button",$variant:O},{children:0===g.length?"Select all":"Clear all"}))},"selectAll")},ce=()=>{if(!k&&(E||!c)&&0===M.length&&"success"===x)return e.jsxs(yj,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx($j,{"data-testid":"no-result-icon",$variant:O}),e.jsx(wj,Object.assign({$variant:O},{children:"No results found."}))]}),"noResults")},de=()=>{if(b&&"loading"===x){const t="small"===O?16:24;return e.jsxs(yj,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Vs,{$buttonStyle:"secondary",size:t}),e.jsx(wj,Object.assign({$variant:O},{children:"Loading..."}))]}),"loading")}},ue=()=>{if(b&&"fail"===x)return e.jsxs(yj,Object.assign({"data-testid":"list-fail"},{children:[e.jsx($j,{"data-testid":"load-error-icon",$variant:O}),e.jsx(wj,Object.assign({$variant:O},{children:"Failed to load."}))," ",e.jsx(xj,Object.assign({onClick:re,type:"button",$variant:O},{children:"Try again."}))]}),"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(sj,Object.assign({style:B,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:F},{children:[(()=>{if(l)return e.jsxs(lj,Object.assign({ref:L,"data-testid":"dropdown-list",width:s,role:"list"},T,{children:[(c||p)&&"success"===x?e.jsx(Dj,{ref:z,onChange:te,value:E,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:ne,variant:O}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&C)return e.jsx("div",Object.assign({ref:H,"data-testid":"custom-cta"},{children:C(f,M)}))})()]}))})},Ej=q.default.div`
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
`,_j=q.default(tp)`
    padding: 0;
    width: auto;
`,Mj=q.default.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Rj=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ws.Base};
    margin: 0 0.75rem;
`,Aj=q.default(p.ChevronDownIcon)`
    color: ${Qo.Neutral[3]};
    height: ${ds.Body.fontSize}rem;
    width: ${ds.Body.fontSize}rem;
    vertical-align: bottom;
`,Nj=q.default.div`
    display: flex;
    flex: 1 1 auto;
`,Bj=q.default(exports.Text.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Fj=q.default(Bj)`
    color: ${Qo.Neutral[3]};
`,Lj=q.default.div`
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
`,Pj=Y.default.forwardRef(((n,r)=>{var{addon:i,error:a,onChange:o,readOnly:s,className:l,onBlur:c}=n,d=X(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:p,enableSearch:f,searchFunction:h,searchPlaceholder:m,valueExtractor:g,listExtractor:v,displayValueExtractor:b,selectedOption:x,onSelectOption:y,onHideOptions:w,onShowOptions:$,"data-selector-testid":j}=i.attributes,{position:S}=i,[k,C]=t.useState(x),[O,T]=t.useState(!1),D=t.useRef();t.useEffect((()=>{C(x)}),[x]);const I=()=>b?b(k):g?g(k):k.toString(),E=e=>{!e&&w&&w(),e&&$&&$()},_=e=>{e.preventDefault(),d.disabled||(T(!O),E(!O))},M=(e,t)=>{C(e),T(!1),E(!1),D&&D.current&&D.current.focus(),y&&y(e,t)},R=e=>{o&&o(e)},A=()=>{c&&c()},N=()=>{T(!1),E(!1),D&&D.current&&D.current.focus()};return e.jsxs(cp,Object.assign({className:l,show:O,error:a&&!O,disabled:d.disabled,readOnly:s,onBlur:()=>{T(!1),E(!1),A()}},{children:[e.jsxs(Ej,Object.assign({$expanded:O,$readOnly:s,$position:S},{children:[s?k?e.jsx(Mj,{children:e.jsx(Bj,Object.assign({"data-testid":"selector-label"},{children:I()}))}):null:e.jsx(_j,Object.assign({ref:D,type:"button",disabled:d.disabled,"data-testid":j||"addon-selector",onClick:_},{children:e.jsxs(e.Fragment,{children:[e.jsxs(Nj,{children:[u&&!k&&e.jsx(Fj,{children:u}),k&&e.jsx(Bj,Object.assign({"data-testid":"selector-label"},{children:I()}))]}),e.jsx(Rj,Object.assign({$expanded:O},{children:e.jsx(Aj,{})}))]})})),e.jsx(Lj,{$readOnly:s,$position:S}),e.jsx(Hx,Object.assign({ref:r},d,{readOnly:s,error:a,onChange:R,"data-testid":d["data-testid"]||"input",onBlur:A}))]})),p&&p.length>0?e.jsx(Ij,{listItems:p,selectedItems:x?[x]:[],onSelectItem:M,valueExtractor:g,listExtractor:v,visible:O,enableSearch:f,searchFunction:h,searchPlaceholder:m,"data-testid":"dropdown-list",onBlur:A,onDismiss:N}):null]}))})),zj=Y.default.forwardRef(((t,n)=>{var{addon:r,error:i,className:a}=t,o=X(t,["addon","error","className"]);const s=()=>e.jsx(zx,Object.assign({disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:a},{children:e.jsx(Hx,Object.assign({ref:n},o,{"data-testid":"input"}))}));if(!r)return s();{const{type:t="label",position:l="left"}=r,{allowClear:c}=o;switch(t){case"list":{const t=r.attributes;return t.options&&t.options.length>0?e.jsx(Pj,Object.assign({ref:n,addon:r,error:i,className:a},o)):s()}case"custom":{const t=r.attributes;return t.children?e.jsxs(yp,Object.assign({$error:i,$disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(Wx,Object.assign({"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.children})),e.jsx(Hx,Object.assign({ref:n},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}default:{const t=r.attributes;return t.value?e.jsxs(yp,Object.assign({$disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(Wx,Object.assign({"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.value})),e.jsx(Hx,Object.assign({ref:n},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}}}})),Hj=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-group","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(zj,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},p))}))})),Wj=q.default(zj)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":"1rem"};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Vj=q.default.div`
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
`,Yj=q.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Uj=q.default(exports.Text.Body)`
    color: ${Qo.Neutral[3]};
`,qj=q.default(zs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Qo.Neutral[3]} transparent transparent transparent;
    }
`,Kj=q.default(exports.Text.Body)`
    color: ${Qo.Primary};
    text-decoration: underline;
`,Xj=q.default.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,Gj=q.default(j.ExclamationTriangleIcon)`
    color: ${Qo.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,Zj=q.default(exports.Text.Body)`
    color: ${Qo.Validation.Orange.Text};
`,Qj=q.default.button`
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
        ${Kj} {
            color: ${Qo.Secondary};
        }
    }
`;var Jj={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",a="__lodash_placeholder__",o=16,s=32,l=64,c=128,d=256,u=1/0,p=9007199254740991,f=NaN,h=4294967295,m=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",s],["partialRight",l],["rearg",d]],g="[object Arguments]",v="[object Array]",b="[object Boolean]",x="[object Date]",y="[object Error]",w="[object Function]",$="[object GeneratorFunction]",j="[object Map]",S="[object Number]",k="[object Object]",C="[object Promise]",O="[object RegExp]",T="[object Set]",D="[object String]",I="[object Symbol]",E="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",R="[object Float32Array]",A="[object Float64Array]",N="[object Int8Array]",B="[object Int16Array]",F="[object Int32Array]",L="[object Uint8Array]",P="[object Uint8ClampedArray]",z="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,q=/[&<>"']/g,K=RegExp(U.source),X=RegExp(q.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,re=RegExp(ne.source),ie=/^\s+/,ae=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,be=/^(?:0|[1-9]\d*)$/,xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ye=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="['’]",Ie="["+$e+"]",Ee="["+Te+"]",_e="["+je+"]",Me="\\d+",Re="["+Se+"]",Ae="["+ke+"]",Ne="[^"+$e+Te+Me+Se+ke+Ce+"]",Be="\\ud83c[\\udffb-\\udfff]",Fe="[^"+$e+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",ze="["+Ce+"]",He="\\u200d",We="(?:"+Ae+"|"+Ne+")",Ve="(?:"+ze+"|"+Ne+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",qe="(?:"+_e+"|"+Be+")"+"?",Ke="["+Oe+"]?",Xe=Ke+qe+("(?:"+He+"(?:"+[Fe,Le,Pe].join("|")+")"+Ke+qe+")*"),Ge="(?:"+[Re,Le,Pe].join("|")+")"+Xe,Ze="(?:"+[Fe+_e+"?",_e,Le,Pe,Ie].join("|")+")",Qe=RegExp(De,"g"),Je=RegExp(_e,"g"),et=RegExp(Be+"(?="+Be+")|"+Ze+Xe,"g"),tt=RegExp([ze+"?"+Ae+"+"+Ye+"(?="+[Ee,ze,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Ee,ze+We,"$"].join("|")+")",ze+"?"+We+"+"+Ye,ze+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),nt=RegExp("["+He+$e+je+Oe+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],at=-1,ot={};ot[R]=ot[A]=ot[N]=ot[B]=ot[F]=ot[L]=ot[P]=ot[z]=ot[H]=!0,ot[g]=ot[v]=ot[_]=ot[b]=ot[M]=ot[x]=ot[y]=ot[w]=ot[j]=ot[S]=ot[k]=ot[O]=ot[T]=ot[D]=ot[E]=!1;var st={};st[g]=st[v]=st[_]=st[M]=st[b]=st[x]=st[R]=st[A]=st[N]=st[B]=st[F]=st[j]=st[S]=st[k]=st[O]=st[T]=st[D]=st[I]=st[L]=st[P]=st[z]=st[H]=!0,st[y]=st[w]=st[E]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof ki&&ki&&ki.Object===Object&&ki,pt="object"==typeof self&&self&&self.Object===Object&&self,ft=ut||pt||Function("return this")(),ht=t&&!t.nodeType&&t,mt=ht&&e&&!e.nodeType&&e,gt=mt&&mt.exports===ht,vt=gt&&ut.process,bt=function(){try{var e=mt&&mt.require&&mt.require("util").types;return e||vt&&vt.binding&&vt.binding("util")}catch(e){}}(),xt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,wt=bt&&bt.isMap,$t=bt&&bt.isRegExp,jt=bt&&bt.isSet,St=bt&&bt.isTypedArray;function kt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ct(e,t,n,r){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function It(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function Et(e,t){return!!(null==e?0:e.length)&&zt(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Mt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Rt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function At(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function Nt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Bt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Ft=Yt("length");function Lt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Pt(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function zt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Pt(e,Wt,n)}function Ht(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var n=null==e?0:e.length;return n?Kt(e,t)/n:f}function Yt(e){return function(t){return null==t?n:t[e]}}function Ut(e){return function(t){return null==e?n:e[t]}}function qt(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n}function Kt(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function Xt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Gt(e){return e?e.slice(0,hn(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function en(e,t){for(var n=-1,r=e.length;++n<r&&zt(t,e[n],0)>-1;);return n}function tn(e,t){for(var n=e.length;n--&&zt(t,e[n],0)>-1;);return n}var nn=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rn=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function an(e){return"\\"+lt[e]}function on(e){return nt.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function ln(e,t){return function(n){return e(t(n))}}function cn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];s!==t&&s!==a||(e[n]=a,o[i++]=n)}return o}function dn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function pn(e){return on(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):Ft(e)}function fn(e){return on(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hn(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var mn=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gn=function e(t){var ae=(t=null==t?ft:gn.defaults(ft.Object(),t,gn.pick(ft,it))).Array,$e=t.Date,je=t.Error,Se=t.Function,ke=t.Math,Ce=t.Object,Oe=t.RegExp,Te=t.String,De=t.TypeError,Ie=ae.prototype,Ee=Se.prototype,_e=Ce.prototype,Me=t["__core-js_shared__"],Re=Ee.toString,Ae=_e.hasOwnProperty,Ne=0,Be=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fe=_e.toString,Le=Re.call(Ce),Pe=ft._,ze=Oe("^"+Re.call(Ae).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?t.Buffer:n,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:n,Ue=ln(Ce.getPrototypeOf,Ce),qe=Ce.create,Ke=_e.propertyIsEnumerable,Xe=Ie.splice,Ge=We?We.isConcatSpreadable:n,Ze=We?We.iterator:n,et=We?We.toStringTag:n,nt=function(){try{var e=ua(Ce,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ft.Date.now&&$e.now,pt=t.setTimeout!==ft.setTimeout&&t.setTimeout,ht=ke.ceil,mt=ke.floor,vt=Ce.getOwnPropertySymbols,bt=He?He.isBuffer:n,Ft=t.isFinite,Ut=Ie.join,vn=ln(Ce.keys,Ce),bn=ke.max,xn=ke.min,yn=$e.now,wn=t.parseInt,$n=ke.random,jn=Ie.reverse,Sn=ua(t,"DataView"),kn=ua(t,"Map"),Cn=ua(t,"Promise"),On=ua(t,"Set"),Tn=ua(t,"WeakMap"),Dn=ua(Ce,"create"),In=Tn&&new Tn,En={},_n=Ba(Sn),Mn=Ba(kn),Rn=Ba(Cn),An=Ba(On),Nn=Ba(Tn),Bn=We?We.prototype:n,Fn=Bn?Bn.valueOf:n,Ln=Bn?Bn.toString:n;function Pn(e){if(ts(e)&&!Vo(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ae.call(e,"__wrapped__"))return Fa(e)}return new Wn(e)}var zn=function(){function e(){}return function(t){if(!es(t))return{};if(qe)return qe(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function Hn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new qn;++t<n;)this.add(e[t])}function Xn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Vo(e),r=!n&&Wo(e),i=!n&&!r&&Ko(e),a=!n&&!r&&!i&&cs(e),o=n||r||i||a,s=o?Xt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ba(c,l))||s.push(c);return s}function Zn(e){var t=e.length;return t?e[Kr(0,t-1)]:n}function Qn(e,t){return Ra(Di(e),sr(t,0,e.length))}function Jn(e){return Ra(Di(e))}function er(e,t,r){(r!==n&&!Po(e[t],r)||r===n&&!(t in e))&&ar(e,t,r)}function tr(e,t,r){var i=e[t];Ae.call(e,t)&&Po(i,r)&&(r!==n||t in e)||ar(e,t,r)}function nr(e,t){for(var n=e.length;n--;)if(Po(e[n][0],t))return n;return-1}function rr(e,t,n,r){return pr(e,(function(e,i,a){t(r,e,n(e),a)})),r}function ir(e,t){return e&&Ii(t,Es(t),e)}function ar(e,t,n){"__proto__"==t&&nt?nt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function or(e,t){for(var r=-1,i=t.length,a=ae(i),o=null==e;++r<i;)a[r]=o?n:Cs(e,t[r]);return a}function sr(e,t,r){return e==e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function lr(e,t,r,i,a,o){var s,l=1&t,c=2&t,d=4&t;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!es(e))return e;var u=Vo(e);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Di(e,s)}else{var p=ha(e),f=p==w||p==$;if(Ko(e))return ji(e,l);if(p==k||p==g||f&&!a){if(s=c||f?{}:ga(e),!l)return c?function(e,t){return Ii(e,fa(e),t)}(e,function(e,t){return e&&Ii(t,_s(t),e)}(s,e)):function(e,t){return Ii(e,pa(e),t)}(e,ir(s,e))}else{if(!st[p])return a?e:{};s=function(e,t,n){var r=e.constructor;switch(t){case _:return Si(e);case b:case x:return new r(+e);case M:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case R:case A:case N:case B:case F:case L:case P:case z:case H:return ki(e,n);case j:return new r;case S:case D:return new r(e);case O:return function(e){var t=new e.constructor(e.source,fe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new r;case I:return i=e,Fn?Ce(Fn.call(i)):{}}var i}(e,p,l)}}o||(o=new Xn);var h=o.get(e);if(h)return h;o.set(e,s),os(e)?e.forEach((function(n){s.add(lr(n,t,r,n,e,o))})):ns(e)&&e.forEach((function(n,i){s.set(i,lr(n,t,r,i,e,o))}));var m=u?n:(d?c?ia:ra:c?_s:Es)(e);return Ot(m||e,(function(n,i){m&&(n=e[i=n]),tr(s,i,lr(n,t,r,i,e,o))})),s}function cr(e,t,r){var i=r.length;if(null==e)return!i;for(e=Ce(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function dr(e,t,i){if("function"!=typeof e)throw new De(r);return Ia((function(){e.apply(n,i)}),t)}function ur(e,t,n,r){var i=-1,a=Et,o=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=Mt(t,Zt(n))),r?(a=_t,o=!1):t.length>=200&&(a=Jt,o=!1,t=new Kn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,o&&u==u){for(var p=c;p--;)if(t[p]===u)continue e;l.push(d)}else a(t,u,r)||l.push(d)}return l}Pn.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pn}},Pn.prototype=Hn.prototype,Pn.prototype.constructor=Pn,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=Dn?Dn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(e){var t=this.__data__;if(Dn){var r=t[e];return r===i?n:r}return Ae.call(t,e)?t[e]:n},Yn.prototype.has=function(e){var t=this.__data__;return Dn?t[e]!==n:Ae.call(t,e)},Yn.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Dn&&t===n?i:t,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},Un.prototype.get=function(e){var t=this.__data__,r=nr(t,e);return r<0?n:t[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},qn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(kn||Un),string:new Yn}},qn.prototype.delete=function(e){var t=ca(this,e).delete(e);return this.size-=t?1:0,t},qn.prototype.get=function(e){return ca(this,e).get(e)},qn.prototype.has=function(e){return ca(this,e).has(e)},qn.prototype.set=function(e,t){var n=ca(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Kn.prototype.add=Kn.prototype.push=function(e){return this.__data__.set(e,i),this},Kn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.clear=function(){this.__data__=new Un,this.size=0},Xn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Xn.prototype.get=function(e){return this.__data__.get(e)},Xn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new qn(r)}return n.set(e,t),this.size=n.size,this};var pr=Mi(yr),fr=Mi(wr,!0);function hr(e,t){var n=!0;return pr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function mr(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(null!=s&&(l===n?s==s&&!ls(s):r(s,l)))var l=s,c=o}return c}function gr(e,t){var n=[];return pr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function vr(e,t,n,r,i){var a=-1,o=e.length;for(n||(n=va),i||(i=[]);++a<o;){var s=e[a];t>0&&n(s)?t>1?vr(s,t-1,n,r,i):Rt(i,s):r||(i[i.length]=s)}return i}var br=Ri(),xr=Ri(!0);function yr(e,t){return e&&br(e,t,Es)}function wr(e,t){return e&&xr(e,t,Es)}function $r(e,t){return It(t,(function(t){return Zo(e[t])}))}function jr(e,t){for(var r=0,i=(t=xi(t,e)).length;null!=e&&r<i;)e=e[Na(t[r++])];return r&&r==i?e:n}function Sr(e,t,n){var r=t(e);return Vo(e)?r:Rt(r,n(e))}function kr(e){return null==e?e===n?"[object Undefined]":"[object Null]":et&&et in Ce(e)?function(e){var t=Ae.call(e,et),r=e[et];try{e[et]=n;var i=!0}catch(e){}var a=Fe.call(e);i&&(t?e[et]=r:delete e[et]);return a}(e):function(e){return Fe.call(e)}(e)}function Cr(e,t){return e>t}function Or(e,t){return null!=e&&Ae.call(e,t)}function Tr(e,t){return null!=e&&t in Ce(e)}function Dr(e,t,r){for(var i=r?_t:Et,a=e[0].length,o=e.length,s=o,l=ae(o),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),c=xn(u.length,c),l[s]=!r&&(t||a>=120&&u.length>=120)?new Kn(s&&u):n}u=e[0];var p=-1,f=l[0];e:for(;++p<a&&d.length<c;){var h=u[p],m=t?t(h):h;if(h=r||0!==h?h:0,!(f?Jt(f,m):i(d,m,r))){for(s=o;--s;){var g=l[s];if(!(g?Jt(g,m):i(e[s],m,r)))continue e}f&&f.push(m),d.push(h)}}return d}function Ir(e,t,r){var i=null==(e=Oa(e,t=xi(t,e)))?e:e[Na(Xa(t))];return null==i?n:kt(i,e,r)}function Er(e){return ts(e)&&kr(e)==g}function _r(e,t,r,i,a){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,r,i,a,o){var s=Vo(e),l=Vo(t),c=s?v:ha(e),d=l?v:ha(t),u=(c=c==g?k:c)==k,p=(d=d==g?k:d)==k,f=c==d;if(f&&Ko(e)){if(!Ko(t))return!1;s=!0,u=!1}if(f&&!u)return o||(o=new Xn),s||cs(e)?ta(e,t,r,i,a,o):function(e,t,n,r,i,a,o){switch(n){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!a(new Ve(e),new Ve(t)));case b:case x:case S:return Po(+e,+t);case y:return e.name==t.name&&e.message==t.message;case O:case D:return e==t+"";case j:var s=sn;case T:var l=1&r;if(s||(s=dn),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=ta(s(e),s(t),r,i,a,o);return o.delete(e),d;case I:if(Fn)return Fn.call(e)==Fn.call(t)}return!1}(e,t,c,r,i,a,o);if(!(1&r)){var h=u&&Ae.call(e,"__wrapped__"),m=p&&Ae.call(t,"__wrapped__");if(h||m){var w=h?e.value():e,$=m?t.value():t;return o||(o=new Xn),a(w,$,r,i,o)}}if(!f)return!1;return o||(o=new Xn),function(e,t,r,i,a,o){var s=1&r,l=ra(e),c=l.length,d=ra(t),u=d.length;if(c!=u&&!s)return!1;var p=c;for(;p--;){var f=l[p];if(!(s?f in t:Ae.call(t,f)))return!1}var h=o.get(e),m=o.get(t);if(h&&m)return h==t&&m==e;var g=!0;o.set(e,t),o.set(t,e);var v=s;for(;++p<c;){var b=e[f=l[p]],x=t[f];if(i)var y=s?i(x,b,f,t,e,o):i(b,x,f,e,t,o);if(!(y===n?b===x||a(b,x,r,i,o):y)){g=!1;break}v||(v="constructor"==f)}if(g&&!v){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(g=!1)}return o.delete(e),o.delete(t),g}(e,t,r,i,a,o)}(e,t,r,i,_r,a))}function Mr(e,t,r,i){var a=r.length,o=a,s=!i;if(null==e)return!o;for(e=Ce(e);a--;){var l=r[a];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<o;){var c=(l=r[a])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===n&&!(c in e))return!1}else{var p=new Xn;if(i)var f=i(d,u,c,e,t,p);if(!(f===n?_r(u,d,3,i,p):f))return!1}}return!0}function Rr(e){return!(!es(e)||(t=e,Be&&Be in t))&&(Zo(e)?ze:ge).test(Ba(e));var t}function Ar(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Vo(e)?zr(e[0],e[1]):Pr(e):pl(e)}function Nr(e){if(!ja(e))return vn(e);var t=[];for(var n in Ce(e))Ae.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Br(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Ce(e))t.push(n);return t}(e);var t=ja(e),n=[];for(var r in e)("constructor"!=r||!t&&Ae.call(e,r))&&n.push(r);return n}function Fr(e,t){return e<t}function Lr(e,t){var n=-1,r=Uo(e)?ae(e.length):[];return pr(e,(function(e,i,a){r[++n]=t(e,i,a)})),r}function Pr(e){var t=da(e);return 1==t.length&&t[0][2]?ka(t[0][0],t[0][1]):function(n){return n===e||Mr(n,e,t)}}function zr(e,t){return ya(e)&&Sa(t)?ka(Na(e),t):function(r){var i=Cs(r,e);return i===n&&i===t?Os(r,e):_r(t,i,3)}}function Hr(e,t,r,i,a){e!==t&&br(t,(function(o,s){if(a||(a=new Xn),es(o))!function(e,t,r,i,a,o,s){var l=Ta(e,r),c=Ta(t,r),d=s.get(c);if(d)return void er(e,r,d);var u=o?o(l,c,r+"",e,t,s):n,p=u===n;if(p){var f=Vo(c),h=!f&&Ko(c),m=!f&&!h&&cs(c);u=c,f||h||m?Vo(l)?u=l:qo(l)?u=Di(l):h?(p=!1,u=ji(c,!0)):m?(p=!1,u=ki(c,!0)):u=[]:is(c)||Wo(c)?(u=l,Wo(l)?u=vs(l):es(l)&&!Zo(l)||(u=ga(c))):p=!1}p&&(s.set(c,u),a(u,c,i,o,s),s.delete(c));er(e,r,u)}(e,t,s,r,Hr,i,a);else{var l=i?i(Ta(e,s),o,s+"",e,t,a):n;l===n&&(l=o),er(e,s,l)}}),_s)}function Wr(e,t){var r=e.length;if(r)return ba(t+=t<0?r:0,r)?e[t]:n}function Vr(e,t,n){t=t.length?Mt(t,(function(e){return Vo(e)?function(t){return jr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=Mt(t,Zt(la()));var i=Lr(e,(function(e,n,i){var a=Mt(t,(function(t){return t(e)}));return{criteria:a,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;for(;++r<o;){var l=Ci(i[r],a[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=jr(e,o);n(s,o)&&Jr(a,xi(o,e),s)}return a}function Ur(e,t,n,r){var i=r?Ht:zt,a=-1,o=t.length,s=e;for(e===t&&(t=Di(t)),n&&(s=Mt(e,Zt(n)));++a<o;)for(var l=0,c=t[a],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function qr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;ba(i)?Xe.call(e,i,1):ui(e,i)}}return e}function Kr(e,t){return e+mt($n()*(t-e+1))}function Xr(e,t){var n="";if(!e||t<1||t>p)return n;do{t%2&&(n+=e),(t=mt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Ea(Ca(e,t,rl),e+"")}function Zr(e){return Zn(Ps(e))}function Qr(e,t){var n=Ps(e);return Ra(n,sr(t,0,n.length))}function Jr(e,t,r,i){if(!es(e))return e;for(var a=-1,o=(t=xi(t,e)).length,s=o-1,l=e;null!=l&&++a<o;){var c=Na(t[a]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(a!=s){var u=l[c];(d=i?i(u,c,l):n)===n&&(d=es(u)?u:ba(t[a+1])?[]:{})}tr(l,c,d),l=l[c]}return e}var ei=In?function(e,t){return In.set(e,t),e}:rl,ti=nt?function(e,t){return nt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Ra(Ps(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=ae(i);++r<i;)a[r]=e[r+t];return a}function ii(e,t){var n;return pr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var a=r+i>>>1,o=e[a];null!==o&&!ls(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return oi(e,t,rl,n)}function oi(e,t,r,i){var a=0,o=null==e?0:e.length;if(0===o)return 0;for(var s=(t=r(t))!=t,l=null===t,c=ls(t),d=t===n;a<o;){var u=mt((a+o)/2),p=r(e[u]),f=p!==n,h=null===p,m=p==p,g=ls(p);if(s)var v=i||m;else v=d?m&&(i||f):l?m&&f&&(i||!h):c?m&&f&&!h&&(i||!g):!h&&!g&&(i?p<=t:p<t);v?a=u+1:o=u}return xn(o,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Po(s,l)){var l=s;a[i++]=0===o?0:o}}return a}function li(e){return"number"==typeof e?e:ls(e)?f:+e}function ci(e){if("string"==typeof e)return e;if(Vo(e))return Mt(e,ci)+"";if(ls(e))return Ln?Ln.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Et,a=e.length,o=!0,s=[],l=s;if(n)o=!1,i=_t;else if(a>=200){var c=t?null:Xi(e);if(c)return dn(c);o=!1,i=Jt,l=new Kn}else l=t?[]:s;e:for(;++r<a;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,o&&u==u){for(var p=l.length;p--;)if(l[p]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Oa(e,t=xi(t,e)))||delete e[Na(Xa(t))]}function pi(e,t,n,r){return Jr(e,t,n(jr(e,t)),r)}function fi(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ri(e,r?0:a,r?a+1:i):ri(e,r?a+1:0,r?i:a)}function hi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Rt([e],t.args))}),n)}function mi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,a=ae(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ur(a[i]||o,e[s],t,n));return di(vr(a,1),t,n)}function gi(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var l=i<o?t[i]:n;r(s,e[i],l)}return s}function vi(e){return qo(e)?e:[]}function bi(e){return"function"==typeof e?e:rl}function xi(e,t){return Vo(e)?e:ya(e,t)?[e]:Aa(bs(e))}var yi=Gr;function wi(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ri(e,t,r)}var $i=lt||function(e){return ft.clearTimeout(e)};function ji(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ki(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(e,t){if(e!==t){var r=e!==n,i=null===e,a=e==e,o=ls(e),s=t!==n,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!o&&e>t||o&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!a)return 1;if(!i&&!o&&!d&&e<t||d&&r&&a&&!i&&!o||l&&r&&a||!s&&a||!c)return-1}return 0}function Oi(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,l=t.length,c=bn(a-o,0),d=ae(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<o;)(u||i<a)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,l=-1,c=t.length,d=bn(a-s,0),u=ae(d+c),p=!r;++i<d;)u[i]=e[i];for(var f=i;++l<c;)u[f+l]=t[l];for(;++o<s;)(p||i<a)&&(u[f+n[o]]=e[i++]);return u}function Di(e,t){var n=-1,r=e.length;for(t||(t=ae(r));++n<r;)t[n]=e[n];return t}function Ii(e,t,r,i){var a=!r;r||(r={});for(var o=-1,s=t.length;++o<s;){var l=t[o],c=i?i(r[l],e[l],l,r,e):n;c===n&&(c=e[l]),a?ar(r,l,c):tr(r,l,c)}return r}function Ei(e,t){return function(n,r){var i=Vo(n)?Ct:rr,a=t?t():{};return i(n,e,la(r,2),a)}}function _i(e){return Gr((function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&"function"==typeof o?(a--,o):n,s&&xa(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=Ce(t);++i<a;){var l=r[i];l&&e(t,l,i,o)}return t}))}function Mi(e,t){return function(n,r){if(null==n)return n;if(!Uo(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Ce(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}function Ri(e){return function(t,n,r){for(var i=-1,a=Ce(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}function Ai(e){return function(t){var r=on(t=bs(t))?fn(t):n,i=r?r[0]:t.charAt(0),a=r?wi(r,1).join(""):t.slice(1);return i[e]()+a}}function Ni(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Bi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Fi(e){return function(t,r,i){var a=Ce(t);if(!Uo(t)){var o=la(r,3);t=Es(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function Li(e){return na((function(t){var i=t.length,a=i,o=Wn.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if("function"!=typeof s)throw new De(r);if(o&&!l&&"wrapper"==oa(s))var l=new Wn([],!0)}for(a=l?a:i;++a<i;){var c=oa(s=t[a]),d="wrapper"==c?aa(s):n;l=d&&wa(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[oa(d[0])].apply(l,d[3]):1==s.length&&wa(s)?l[c]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&Vo(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}}))}function Pi(e,t,r,i,a,o,s,l,d,u){var p=t&c,f=1&t,h=2&t,m=24&t,g=512&t,v=h?n:Bi(e);return function c(){for(var b=arguments.length,x=ae(b),y=b;y--;)x[y]=arguments[y];if(m)var w=sa(c),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(x,w);if(i&&(x=Oi(x,i,a,m)),o&&(x=Ti(x,o,s,m)),b-=$,m&&b<u){var j=cn(x,w);return qi(e,t,Pi,c.placeholder,r,x,j,l,d,u-b)}var S=f?r:this,k=h?S[e]:e;return b=x.length,l?x=function(e,t){var r=e.length,i=xn(t.length,r),a=Di(e);for(;i--;){var o=t[i];e[i]=ba(o,r)?a[o]:n}return e}(x,l):g&&b>1&&x.reverse(),p&&d<b&&(x.length=d),this&&this!==ft&&this instanceof c&&(k=v||Bi(k)),k.apply(S,x)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return yr(e,(function(e,i,a){t(r,n(e),i,a)})),r}(n,e,t(r),{})}}function Hi(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),a=e(r,i)}return a}}function Wi(e){return na((function(t){return t=Mt(t,Zt(la())),Gr((function(n){var r=this;return e(t,(function(e){return kt(e,r,n)}))}))}))}function Vi(e,t){var r=(t=t===n?" ":ci(t)).length;if(r<2)return r?Xr(t,e):t;var i=Xr(t,ht(e/pn(t)));return on(t)?wi(fn(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,r,i){return i&&"number"!=typeof i&&xa(t,r,i)&&(r=i=n),t=fs(t),r===n?(r=t,t=0):r=fs(r),function(e,t,n,r){for(var i=-1,a=bn(ht((t-e)/(n||1)),0),o=ae(a);a--;)o[r?a:++i]=e,e+=n;return o}(t,r,i=i===n?t<r?1:-1:fs(i),e)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=gs(t),n=gs(n)),e(t,n)}}function qi(e,t,r,i,a,o,c,d,u,p){var f=8&t;t|=f?s:l,4&(t&=~(f?l:s))||(t&=-4);var h=[e,t,a,f?o:n,f?c:n,f?n:o,f?n:c,d,u,p],m=r.apply(n,h);return wa(e)&&Da(m,h),m.placeholder=i,_a(m,e,t)}function Ki(e){var t=ke[e];return function(e,n){if(e=gs(e),(n=null==n?0:xn(hs(n),292))&&Ft(e)){var r=(bs(e)+"e").split("e");return+((r=(bs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Xi=On&&1/dn(new On([,-0]))[1]==u?function(e){return new On(e)}:ll;function Gi(e){return function(t){var n=ha(t);return n==j?sn(t):n==T?un(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,p,f,h,m){var g=2&t;if(!g&&"function"!=typeof e)throw new De(r);var v=u?u.length:0;if(v||(t&=-97,u=p=n),h=h===n?h:bn(hs(h),0),m=m===n?m:hs(m),v-=p?p.length:0,t&l){var b=u,x=p;u=p=n}var y=g?n:aa(e),w=[e,t,i,u,p,b,x,f,h,m];if(y&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,s=r==c&&8==n||r==c&&n==d&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!s)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Oi(u,l,t[4]):l,e[4]=u?cn(e[3],a):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ti(u,l,t[6]):l,e[6]=u?cn(e[5],a):t[6]);(l=t[7])&&(e[7]=l);r&c&&(e[8]=null==e[8]?t[8]:xn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,y),e=w[0],t=w[1],i=w[2],u=w[3],p=w[4],!(m=w[9]=w[9]===n?g?0:e.length:bn(w[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==o?function(e,t,r){var i=Bi(e);return function a(){for(var o=arguments.length,s=ae(o),l=o,c=sa(a);l--;)s[l]=arguments[l];var d=o<3&&s[0]!==c&&s[o-1]!==c?[]:cn(s,c);return(o-=d.length)<r?qi(e,t,Pi,a.placeholder,n,s,d,n,n,r-o):kt(this&&this!==ft&&this instanceof a?i:e,this,s)}}(e,t,m):t!=s&&33!=t||p.length?Pi.apply(n,w):function(e,t,n,r){var i=1&t,a=Bi(e);return function t(){for(var o=-1,s=arguments.length,l=-1,c=r.length,d=ae(c+s),u=this&&this!==ft&&this instanceof t?a:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++o];return kt(u,i?n:this,d)}}(e,t,i,u);else var $=function(e,t,n){var r=1&t,i=Bi(e);return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,i);return _a((y?ei:Da)($,w),e,t)}function Qi(e,t,r,i){return e===n||Po(e,_e[r])&&!Ae.call(i,r)?t:e}function Ji(e,t,r,i,a,o){return es(e)&&es(t)&&(o.set(t,e),Hr(e,t,n,Ji,o),o.delete(t)),e}function ea(e){return is(e)?n:e}function ta(e,t,r,i,a,o){var s=1&r,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=o.get(e),u=o.get(t);if(d&&u)return d==t&&u==e;var p=-1,f=!0,h=2&r?new Kn:n;for(o.set(e,t),o.set(t,e);++p<l;){var m=e[p],g=t[p];if(i)var v=s?i(g,m,p,t,e,o):i(m,g,p,e,t,o);if(v!==n){if(v)continue;f=!1;break}if(h){if(!Bt(t,(function(e,t){if(!Jt(h,t)&&(m===e||a(m,e,r,i,o)))return h.push(t)}))){f=!1;break}}else if(m!==g&&!a(m,g,r,i,o)){f=!1;break}}return o.delete(e),o.delete(t),f}function na(e){return Ea(Ca(e,n,Va),e+"")}function ra(e){return Sr(e,Es,pa)}function ia(e){return Sr(e,_s,fa)}var aa=In?function(e){return In.get(e)}:ll;function oa(e){for(var t=e.name+"",n=En[t],r=Ae.call(En,t)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==e)return i.name}return t}function sa(e){return(Ae.call(Pn,"placeholder")?Pn:e).placeholder}function la(){var e=Pn.iteratee||il;return e=e===il?Ar:e,arguments.length?e(arguments[0],arguments[1]):e}function ca(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function da(e){for(var t=Es(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Sa(i)]}return t}function ua(e,t){var r=function(e,t){return null==e?n:e[t]}(e,t);return Rr(r)?r:n}var pa=vt?function(e){return null==e?[]:(e=Ce(e),It(vt(e),(function(t){return Ke.call(e,t)})))}:ml,fa=vt?function(e){for(var t=[];e;)Rt(t,pa(e)),e=Ue(e);return t}:ml,ha=kr;function ma(e,t,n){for(var r=-1,i=(t=xi(t,e)).length,a=!1;++r<i;){var o=Na(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Jo(i)&&ba(o,i)&&(Vo(e)||Wo(e))}function ga(e){return"function"!=typeof e.constructor||ja(e)?{}:zn(Ue(e))}function va(e){return Vo(e)||Wo(e)||!!(Ge&&e&&e[Ge])}function ba(e,t){var n=typeof e;return!!(t=null==t?p:t)&&("number"==n||"symbol"!=n&&be.test(e))&&e>-1&&e%1==0&&e<t}function xa(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Uo(n)&&ba(t,n.length):"string"==r&&t in n)&&Po(n[t],e)}function ya(e,t){if(Vo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in Ce(t))}function wa(e){var t=oa(e),n=Pn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=aa(n);return!!r&&e===r[0]}(Sn&&ha(new Sn(new ArrayBuffer(1)))!=M||kn&&ha(new kn)!=j||Cn&&ha(Cn.resolve())!=C||On&&ha(new On)!=T||Tn&&ha(new Tn)!=E)&&(ha=function(e){var t=kr(e),r=t==k?e.constructor:n,i=r?Ba(r):"";if(i)switch(i){case _n:return M;case Mn:return j;case Rn:return C;case An:return T;case Nn:return E}return t});var $a=Me?Zo:gl;function ja(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_e)}function Sa(e){return e==e&&!es(e)}function ka(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==n||e in Ce(r)))}}function Ca(e,t,r){return t=bn(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=bn(n.length-t,0),o=ae(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=ae(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),kt(e,this,s)}}function Oa(e,t){return t.length<2?e:jr(e,ri(t,0,-1))}function Ta(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Da=Ma(ei),Ia=pt||function(e,t){return ft.setTimeout(e,t)},Ea=Ma(ti);function _a(e,t,n){var r=t+"";return Ea(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(m,(function(n){var r="_."+n[0];t&n[1]&&!Et(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(r),n)))}function Ma(e){var t=0,r=0;return function(){var i=yn(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Ra(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=Kr(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var Aa=function(e){var t=Ro(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,n,r,i){t.push(r?i.replace(ue,"$1"):n||e)})),t}));function Na(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ba(e){if(null!=e){try{return Re.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Fa(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Di(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var La=Gr((function(e,t){return qo(e)?ur(e,vr(t,1,qo,!0)):[]})),Pa=Gr((function(e,t){var r=Xa(t);return qo(r)&&(r=n),qo(e)?ur(e,vr(t,1,qo,!0),la(r,2)):[]})),za=Gr((function(e,t){var r=Xa(t);return qo(r)&&(r=n),qo(e)?ur(e,vr(t,1,qo,!0),n,r):[]}));function Ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:hs(n);return i<0&&(i=bn(r+i,0)),Pt(e,la(t,3),i)}function Wa(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=hs(r),a=r<0?bn(i+a,0):xn(a,i-1)),Pt(e,la(t,3),a,!0)}function Va(e){return(null==e?0:e.length)?vr(e,1):[]}function Ya(e){return e&&e.length?e[0]:n}var Ua=Gr((function(e){var t=Mt(e,vi);return t.length&&t[0]===e[0]?Dr(t):[]})),qa=Gr((function(e){var t=Xa(e),r=Mt(e,vi);return t===Xa(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Dr(r,la(t,2)):[]})),Ka=Gr((function(e){var t=Xa(e),r=Mt(e,vi);return(t="function"==typeof t?t:n)&&r.pop(),r.length&&r[0]===e[0]?Dr(r,n,t):[]}));function Xa(e){var t=null==e?0:e.length;return t?e[t-1]:n}var Ga=Gr(Za);function Za(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Qa=na((function(e,t){var n=null==e?0:e.length,r=or(e,t);return qr(e,Mt(t,(function(e){return ba(e,n)?+e:e})).sort(Ci)),r}));function Ja(e){return null==e?e:jn.call(e)}var eo=Gr((function(e){return di(vr(e,1,qo,!0))})),to=Gr((function(e){var t=Xa(e);return qo(t)&&(t=n),di(vr(e,1,qo,!0),la(t,2))})),no=Gr((function(e){var t=Xa(e);return t="function"==typeof t?t:n,di(vr(e,1,qo,!0),n,t)}));function ro(e){if(!e||!e.length)return[];var t=0;return e=It(e,(function(e){if(qo(e))return t=bn(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Yt(t))}))}function io(e,t){if(!e||!e.length)return[];var r=ro(e);return null==t?r:Mt(r,(function(e){return kt(t,n,e)}))}var ao=Gr((function(e,t){return qo(e)?ur(e,t):[]})),oo=Gr((function(e){return mi(It(e,qo))})),so=Gr((function(e){var t=Xa(e);return qo(t)&&(t=n),mi(It(e,qo),la(t,2))})),lo=Gr((function(e){var t=Xa(e);return t="function"==typeof t?t:n,mi(It(e,qo),n,t)})),co=Gr(ro);var uo=Gr((function(e){var t=e.length,r=t>1?e[t-1]:n;return r="function"==typeof r?(e.pop(),r):n,io(e,r)}));function po(e){var t=Pn(e);return t.__chain__=!0,t}function fo(e,t){return t(e)}var ho=na((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return or(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Vn&&ba(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:fo,args:[a],thisArg:n}),new Wn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(a)}));var mo=Ei((function(e,t,n){Ae.call(e,n)?++e[n]:ar(e,n,1)}));var go=Fi(Ha),vo=Fi(Wa);function bo(e,t){return(Vo(e)?Ot:pr)(e,la(t,3))}function xo(e,t){return(Vo(e)?Tt:fr)(e,la(t,3))}var yo=Ei((function(e,t,n){Ae.call(e,n)?e[n].push(t):ar(e,n,[t])}));var wo=Gr((function(e,t,n){var r=-1,i="function"==typeof t,a=Uo(e)?ae(e.length):[];return pr(e,(function(e){a[++r]=i?kt(t,e,n):Ir(e,t,n)})),a})),$o=Ei((function(e,t,n){ar(e,n,t)}));function jo(e,t){return(Vo(e)?Mt:Lr)(e,la(t,3))}var So=Ei((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var ko=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xa(e,t[0],t[1])?t=[]:n>2&&xa(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,vr(t,1),[])})),Co=ut||function(){return ft.Date.now()};function Oo(e,t,r){return t=r?n:t,t=e&&null==t?e.length:t,Zi(e,c,n,n,n,n,t)}function To(e,t){var i;if("function"!=typeof t)throw new De(r);return e=hs(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Do=Gr((function(e,t,n){var r=1;if(n.length){var i=cn(n,sa(Do));r|=s}return Zi(e,r,t,n,i)})),Io=Gr((function(e,t,n){var r=3;if(n.length){var i=cn(n,sa(Io));r|=s}return Zi(t,r,e,n,i)}));function Eo(e,t,i){var a,o,s,l,c,d,u=0,p=!1,f=!1,h=!0;if("function"!=typeof e)throw new De(r);function m(t){var r=a,i=o;return a=o=n,u=t,l=e.apply(i,r)}function g(e){var r=e-d;return d===n||r>=t||r<0||f&&e-u>=s}function v(){var e=Co();if(g(e))return b(e);c=Ia(v,function(e){var n=t-(e-d);return f?xn(n,s-(e-u)):n}(e))}function b(e){return c=n,h&&a?m(e):(a=o=n,l)}function x(){var e=Co(),r=g(e);if(a=arguments,o=this,d=e,r){if(c===n)return function(e){return u=e,c=Ia(v,t),p?m(e):l}(d);if(f)return $i(c),c=Ia(v,t),m(d)}return c===n&&(c=Ia(v,t)),l}return t=gs(t)||0,es(i)&&(p=!!i.leading,s=(f="maxWait"in i)?bn(gs(i.maxWait)||0,t):s,h="trailing"in i?!!i.trailing:h),x.cancel=function(){c!==n&&$i(c),u=0,a=d=o=c=n},x.flush=function(){return c===n?l:b(Co())},x}var _o=Gr((function(e,t){return dr(e,1,t)})),Mo=Gr((function(e,t,n){return dr(e,gs(t)||0,n)}));function Ro(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new De(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ro.Cache||qn),n}function Ao(e){if("function"!=typeof e)throw new De(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ro.Cache=qn;var No=yi((function(e,t){var n=(t=1==t.length&&Vo(t[0])?Mt(t[0],Zt(la())):Mt(vr(t,1),Zt(la()))).length;return Gr((function(r){for(var i=-1,a=xn(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return kt(e,this,r)}))})),Bo=Gr((function(e,t){var r=cn(t,sa(Bo));return Zi(e,s,n,t,r)})),Fo=Gr((function(e,t){var r=cn(t,sa(Fo));return Zi(e,l,n,t,r)})),Lo=na((function(e,t){return Zi(e,d,n,n,n,t)}));function Po(e,t){return e===t||e!=e&&t!=t}var zo=Ui(Cr),Ho=Ui((function(e,t){return e>=t})),Wo=Er(function(){return arguments}())?Er:function(e){return ts(e)&&Ae.call(e,"callee")&&!Ke.call(e,"callee")},Vo=ae.isArray,Yo=xt?Zt(xt):function(e){return ts(e)&&kr(e)==_};function Uo(e){return null!=e&&Jo(e.length)&&!Zo(e)}function qo(e){return ts(e)&&Uo(e)}var Ko=bt||gl,Xo=yt?Zt(yt):function(e){return ts(e)&&kr(e)==x};function Go(e){if(!ts(e))return!1;var t=kr(e);return t==y||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Zo(e){if(!es(e))return!1;var t=kr(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(e){return"number"==typeof e&&e==hs(e)}function Jo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=p}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=wt?Zt(wt):function(e){return ts(e)&&ha(e)==j};function rs(e){return"number"==typeof e||ts(e)&&kr(e)==S}function is(e){if(!ts(e)||kr(e)!=k)return!1;var t=Ue(e);if(null===t)return!0;var n=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Re.call(n)==Le}var as=$t?Zt($t):function(e){return ts(e)&&kr(e)==O};var os=jt?Zt(jt):function(e){return ts(e)&&ha(e)==T};function ss(e){return"string"==typeof e||!Vo(e)&&ts(e)&&kr(e)==D}function ls(e){return"symbol"==typeof e||ts(e)&&kr(e)==I}var cs=St?Zt(St):function(e){return ts(e)&&Jo(e.length)&&!!ot[kr(e)]};var ds=Ui(Fr),us=Ui((function(e,t){return e<=t}));function ps(e){if(!e)return[];if(Uo(e))return ss(e)?fn(e):Di(e);if(Ze&&e[Ze])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Ze]());var t=ha(e);return(t==j?sn:t==T?dn:Ps)(e)}function fs(e){return e?(e=gs(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function hs(e){var t=fs(e),n=t%1;return t==t?n?t-n:t:0}function ms(e){return e?sr(hs(e),0,h):0}function gs(e){if("number"==typeof e)return e;if(ls(e))return f;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var n=me.test(e);return n||ve.test(e)?dt(e.slice(2),n?2:8):he.test(e)?f:+e}function vs(e){return Ii(e,_s(e))}function bs(e){return null==e?"":ci(e)}var xs=_i((function(e,t){if(ja(t)||Uo(t))Ii(t,Es(t),e);else for(var n in t)Ae.call(t,n)&&tr(e,n,t[n])})),ys=_i((function(e,t){Ii(t,_s(t),e)})),ws=_i((function(e,t,n,r){Ii(t,_s(t),e,r)})),$s=_i((function(e,t,n,r){Ii(t,Es(t),e,r)})),js=na(or);var Ss=Gr((function(e,t){e=Ce(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&xa(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=_s(o),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===n||Po(u,_e[d])&&!Ae.call(e,d))&&(e[d]=o[d])}return e})),ks=Gr((function(e){return e.push(n,Ji),kt(Rs,n,e)}));function Cs(e,t,r){var i=null==e?n:jr(e,t);return i===n?r:i}function Os(e,t){return null!=e&&ma(e,t,Tr)}var Ts=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),e[t]=n}),el(rl)),Ds=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),Ae.call(e,t)?e[t].push(n):e[t]=[n]}),la),Is=Gr(Ir);function Es(e){return Uo(e)?Gn(e):Nr(e)}function _s(e){return Uo(e)?Gn(e,!0):Br(e)}var Ms=_i((function(e,t,n){Hr(e,t,n)})),Rs=_i((function(e,t,n,r){Hr(e,t,n,r)})),As=na((function(e,t){var n={};if(null==e)return n;var r=!1;t=Mt(t,(function(t){return t=xi(t,e),r||(r=t.length>1),t})),Ii(e,ia(e),n),r&&(n=lr(n,7,ea));for(var i=t.length;i--;)ui(n,t[i]);return n}));var Ns=na((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Os(e,n)}))}(e,t)}));function Bs(e,t){if(null==e)return{};var n=Mt(ia(e),(function(e){return[e]}));return t=la(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Fs=Gi(Es),Ls=Gi(_s);function Ps(e){return null==e?[]:Qt(e,Es(e))}var zs=Ni((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(bs(e).toLowerCase())}function Ws(e){return(e=bs(e))&&e.replace(xe,nn).replace(Je,"")}var Vs=Ni((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Ni((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var qs=Ni((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ks=Ni((function(e,t,n){return e+(n?" ":"")+Gs(t)}));var Xs=Ni((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,r){return e=bs(e),(t=r?n:t)===n?function(e){return rt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gr((function(e,t){try{return kt(e,n,t)}catch(e){return Go(e)?e:new je(e)}})),Js=na((function(e,t){return Ot(t,(function(t){t=Na(t),ar(e,t,Do(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Li(),nl=Li(!0);function rl(e){return e}function il(e){return Ar("function"==typeof e?e:lr(e,1))}var al=Gr((function(e,t){return function(n){return Ir(n,e,t)}})),ol=Gr((function(e,t){return function(n){return Ir(e,n,t)}}));function sl(e,t,n){var r=Es(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Es(t)));var a=!(es(n)&&"chain"in n&&!n.chain),o=Zo(e);return Ot(i,(function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Di(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Rt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Dt),ul=Wi(Bt);function pl(e){return ya(e)?Yt(Na(e)):function(e){return function(t){return jr(t,e)}}(e)}var fl=Yi(),hl=Yi(!0);function ml(){return[]}function gl(){return!1}var vl=Hi((function(e,t){return e+t}),0),bl=Ki("ceil"),xl=Hi((function(e,t){return e/t}),1),yl=Ki("floor");var wl,$l=Hi((function(e,t){return e*t}),1),jl=Ki("round"),Sl=Hi((function(e,t){return e-t}),0);return Pn.after=function(e,t){if("function"!=typeof t)throw new De(r);return e=hs(e),function(){if(--e<1)return t.apply(this,arguments)}},Pn.ary=Oo,Pn.assign=xs,Pn.assignIn=ys,Pn.assignInWith=ws,Pn.assignWith=$s,Pn.at=js,Pn.before=To,Pn.bind=Do,Pn.bindAll=Js,Pn.bindKey=Io,Pn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Vo(e)?e:[e]},Pn.chain=po,Pn.chunk=function(e,t,r){t=(r?xa(e,t,r):t===n)?1:bn(hs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=ae(ht(i/t));a<i;)s[o++]=ri(e,a,a+=t);return s},Pn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i},Pn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=ae(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Rt(Vo(n)?Di(n):[n],vr(t,1))},Pn.cond=function(e){var t=null==e?0:e.length,n=la();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new De(r);return[n(e[0]),e[1]]})):[],Gr((function(n){for(var r=-1;++r<t;){var i=e[r];if(kt(i[0],this,n))return kt(i[1],this,n)}}))},Pn.conforms=function(e){return function(e){var t=Es(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Pn.constant=el,Pn.countBy=mo,Pn.create=function(e,t){var n=zn(e);return null==t?n:ir(n,t)},Pn.curry=function e(t,r,i){var a=Zi(t,8,n,n,n,n,n,r=i?n:r);return a.placeholder=e.placeholder,a},Pn.curryRight=function e(t,r,i){var a=Zi(t,o,n,n,n,n,n,r=i?n:r);return a.placeholder=e.placeholder,a},Pn.debounce=Eo,Pn.defaults=Ss,Pn.defaultsDeep=ks,Pn.defer=_o,Pn.delay=Mo,Pn.difference=La,Pn.differenceBy=Pa,Pn.differenceWith=za,Pn.drop=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=r||t===n?1:hs(t))<0?0:t,i):[]},Pn.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,0,(t=i-(t=r||t===n?1:hs(t)))<0?0:t):[]},Pn.dropRightWhile=function(e,t){return e&&e.length?fi(e,la(t,3),!0,!0):[]},Pn.dropWhile=function(e,t){return e&&e.length?fi(e,la(t,3),!0):[]},Pn.fill=function(e,t,r,i){var a=null==e?0:e.length;return a?(r&&"number"!=typeof r&&xa(e,t,r)&&(r=0,i=a),function(e,t,r,i){var a=e.length;for((r=hs(r))<0&&(r=-r>a?0:a+r),(i=i===n||i>a?a:hs(i))<0&&(i+=a),i=r>i?0:ms(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},Pn.filter=function(e,t){return(Vo(e)?It:gr)(e,la(t,3))},Pn.flatMap=function(e,t){return vr(jo(e,t),1)},Pn.flatMapDeep=function(e,t){return vr(jo(e,t),u)},Pn.flatMapDepth=function(e,t,r){return r=r===n?1:hs(r),vr(jo(e,t),r)},Pn.flatten=Va,Pn.flattenDeep=function(e){return(null==e?0:e.length)?vr(e,u):[]},Pn.flattenDepth=function(e,t){return(null==e?0:e.length)?vr(e,t=t===n?1:hs(t)):[]},Pn.flip=function(e){return Zi(e,512)},Pn.flow=tl,Pn.flowRight=nl,Pn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Pn.functions=function(e){return null==e?[]:$r(e,Es(e))},Pn.functionsIn=function(e){return null==e?[]:$r(e,_s(e))},Pn.groupBy=yo,Pn.initial=function(e){return(null==e?0:e.length)?ri(e,0,-1):[]},Pn.intersection=Ua,Pn.intersectionBy=qa,Pn.intersectionWith=Ka,Pn.invert=Ts,Pn.invertBy=Ds,Pn.invokeMap=wo,Pn.iteratee=il,Pn.keyBy=$o,Pn.keys=Es,Pn.keysIn=_s,Pn.map=jo,Pn.mapKeys=function(e,t){var n={};return t=la(t,3),yr(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},Pn.mapValues=function(e,t){var n={};return t=la(t,3),yr(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},Pn.matches=function(e){return Pr(lr(e,1))},Pn.matchesProperty=function(e,t){return zr(e,lr(t,1))},Pn.memoize=Ro,Pn.merge=Ms,Pn.mergeWith=Rs,Pn.method=al,Pn.methodOf=ol,Pn.mixin=sl,Pn.negate=Ao,Pn.nthArg=function(e){return e=hs(e),Gr((function(t){return Wr(t,e)}))},Pn.omit=As,Pn.omitBy=function(e,t){return Bs(e,Ao(la(t)))},Pn.once=function(e){return To(2,e)},Pn.orderBy=function(e,t,r,i){return null==e?[]:(Vo(t)||(t=null==t?[]:[t]),Vo(r=i?n:r)||(r=null==r?[]:[r]),Vr(e,t,r))},Pn.over=cl,Pn.overArgs=No,Pn.overEvery=dl,Pn.overSome=ul,Pn.partial=Bo,Pn.partialRight=Fo,Pn.partition=So,Pn.pick=Ns,Pn.pickBy=Bs,Pn.property=pl,Pn.propertyOf=function(e){return function(t){return null==e?n:jr(e,t)}},Pn.pull=Ga,Pn.pullAll=Za,Pn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,la(n,2)):e},Pn.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Ur(e,t,n,r):e},Pn.pullAt=Qa,Pn.range=fl,Pn.rangeRight=hl,Pn.rearg=Lo,Pn.reject=function(e,t){return(Vo(e)?It:gr)(e,Ao(la(t,3)))},Pn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],a=e.length;for(t=la(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return qr(e,i),n},Pn.rest=function(e,t){if("function"!=typeof e)throw new De(r);return Gr(e,t=t===n?t:hs(t))},Pn.reverse=Ja,Pn.sampleSize=function(e,t,r){return t=(r?xa(e,t,r):t===n)?1:hs(t),(Vo(e)?Qn:Qr)(e,t)},Pn.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Pn.setWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:Jr(e,t,r,i)},Pn.shuffle=function(e){return(Vo(e)?Jn:ni)(e)},Pn.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&xa(e,t,r)?(t=0,r=i):(t=null==t?0:hs(t),r=r===n?i:hs(r)),ri(e,t,r)):[]},Pn.sortBy=ko,Pn.sortedUniq=function(e){return e&&e.length?si(e):[]},Pn.sortedUniqBy=function(e,t){return e&&e.length?si(e,la(t,2)):[]},Pn.split=function(e,t,r){return r&&"number"!=typeof r&&xa(e,t,r)&&(t=r=n),(r=r===n?h:r>>>0)?(e=bs(e))&&("string"==typeof t||null!=t&&!as(t))&&!(t=ci(t))&&on(e)?wi(fn(e),0,r):e.split(t,r):[]},Pn.spread=function(e,t){if("function"!=typeof e)throw new De(r);return t=null==t?0:bn(hs(t),0),Gr((function(n){var r=n[t],i=wi(n,0,t);return r&&Rt(i,r),kt(e,this,i)}))},Pn.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Pn.take=function(e,t,r){return e&&e.length?ri(e,0,(t=r||t===n?1:hs(t))<0?0:t):[]},Pn.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=i-(t=r||t===n?1:hs(t)))<0?0:t,i):[]},Pn.takeRightWhile=function(e,t){return e&&e.length?fi(e,la(t,3),!1,!0):[]},Pn.takeWhile=function(e,t){return e&&e.length?fi(e,la(t,3)):[]},Pn.tap=function(e,t){return t(e),e},Pn.throttle=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new De(r);return es(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),Eo(e,t,{leading:i,maxWait:t,trailing:a})},Pn.thru=fo,Pn.toArray=ps,Pn.toPairs=Fs,Pn.toPairsIn=Ls,Pn.toPath=function(e){return Vo(e)?Mt(e,Na):ls(e)?[e]:Di(Aa(bs(e)))},Pn.toPlainObject=vs,Pn.transform=function(e,t,n){var r=Vo(e),i=r||Ko(e)||cs(e);if(t=la(t,4),null==n){var a=e&&e.constructor;n=i?r?new a:[]:es(e)&&Zo(a)?zn(Ue(e)):{}}return(i?Ot:yr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Pn.unary=function(e){return Oo(e,1)},Pn.union=eo,Pn.unionBy=to,Pn.unionWith=no,Pn.uniq=function(e){return e&&e.length?di(e):[]},Pn.uniqBy=function(e,t){return e&&e.length?di(e,la(t,2)):[]},Pn.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?di(e,n,t):[]},Pn.unset=function(e,t){return null==e||ui(e,t)},Pn.unzip=ro,Pn.unzipWith=io,Pn.update=function(e,t,n){return null==e?e:pi(e,t,bi(n))},Pn.updateWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:pi(e,t,bi(r),i)},Pn.values=Ps,Pn.valuesIn=function(e){return null==e?[]:Qt(e,_s(e))},Pn.without=ao,Pn.words=Zs,Pn.wrap=function(e,t){return Bo(bi(t),e)},Pn.xor=oo,Pn.xorBy=so,Pn.xorWith=lo,Pn.zip=co,Pn.zipObject=function(e,t){return gi(e||[],t||[],tr)},Pn.zipObjectDeep=function(e,t){return gi(e||[],t||[],Jr)},Pn.zipWith=uo,Pn.entries=Fs,Pn.entriesIn=Ls,Pn.extend=ys,Pn.extendWith=ws,sl(Pn,Pn),Pn.add=vl,Pn.attempt=Qs,Pn.camelCase=zs,Pn.capitalize=Hs,Pn.ceil=bl,Pn.clamp=function(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=(r=gs(r))==r?r:0),t!==n&&(t=(t=gs(t))==t?t:0),sr(gs(e),t,r)},Pn.clone=function(e){return lr(e,4)},Pn.cloneDeep=function(e){return lr(e,5)},Pn.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:n)},Pn.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:n)},Pn.conformsTo=function(e,t){return null==t||cr(e,t,Es(t))},Pn.deburr=Ws,Pn.defaultTo=function(e,t){return null==e||e!=e?t:e},Pn.divide=xl,Pn.endsWith=function(e,t,r){e=bs(e),t=ci(t);var i=e.length,a=r=r===n?i:sr(hs(r),0,i);return(r-=t.length)>=0&&e.slice(r,a)==t},Pn.eq=Po,Pn.escape=function(e){return(e=bs(e))&&X.test(e)?e.replace(q,rn):e},Pn.escapeRegExp=function(e){return(e=bs(e))&&re.test(e)?e.replace(ne,"\\$&"):e},Pn.every=function(e,t,r){var i=Vo(e)?Dt:hr;return r&&xa(e,t,r)&&(t=n),i(e,la(t,3))},Pn.find=go,Pn.findIndex=Ha,Pn.findKey=function(e,t){return Lt(e,la(t,3),yr)},Pn.findLast=vo,Pn.findLastIndex=Wa,Pn.findLastKey=function(e,t){return Lt(e,la(t,3),wr)},Pn.floor=yl,Pn.forEach=bo,Pn.forEachRight=xo,Pn.forIn=function(e,t){return null==e?e:br(e,la(t,3),_s)},Pn.forInRight=function(e,t){return null==e?e:xr(e,la(t,3),_s)},Pn.forOwn=function(e,t){return e&&yr(e,la(t,3))},Pn.forOwnRight=function(e,t){return e&&wr(e,la(t,3))},Pn.get=Cs,Pn.gt=zo,Pn.gte=Ho,Pn.has=function(e,t){return null!=e&&ma(e,t,Or)},Pn.hasIn=Os,Pn.head=Ya,Pn.identity=rl,Pn.includes=function(e,t,n,r){e=Uo(e)?e:Ps(e),n=n&&!r?hs(n):0;var i=e.length;return n<0&&(n=bn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&zt(e,t,n)>-1},Pn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:hs(n);return i<0&&(i=bn(r+i,0)),zt(e,t,i)},Pn.inRange=function(e,t,r){return t=fs(t),r===n?(r=t,t=0):r=fs(r),function(e,t,n){return e>=xn(t,n)&&e<bn(t,n)}(e=gs(e),t,r)},Pn.invoke=Is,Pn.isArguments=Wo,Pn.isArray=Vo,Pn.isArrayBuffer=Yo,Pn.isArrayLike=Uo,Pn.isArrayLikeObject=qo,Pn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kr(e)==b},Pn.isBuffer=Ko,Pn.isDate=Xo,Pn.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pn.isEmpty=function(e){if(null==e)return!0;if(Uo(e)&&(Vo(e)||"string"==typeof e||"function"==typeof e.splice||Ko(e)||cs(e)||Wo(e)))return!e.length;var t=ha(e);if(t==j||t==T)return!e.size;if(ja(e))return!Nr(e).length;for(var n in e)if(Ae.call(e,n))return!1;return!0},Pn.isEqual=function(e,t){return _r(e,t)},Pn.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:n)?r(e,t):n;return i===n?_r(e,t,n,r):!!i},Pn.isError=Go,Pn.isFinite=function(e){return"number"==typeof e&&Ft(e)},Pn.isFunction=Zo,Pn.isInteger=Qo,Pn.isLength=Jo,Pn.isMap=ns,Pn.isMatch=function(e,t){return e===t||Mr(e,t,da(t))},Pn.isMatchWith=function(e,t,r){return r="function"==typeof r?r:n,Mr(e,t,da(t),r)},Pn.isNaN=function(e){return rs(e)&&e!=+e},Pn.isNative=function(e){if($a(e))throw new je("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Rr(e)},Pn.isNil=function(e){return null==e},Pn.isNull=function(e){return null===e},Pn.isNumber=rs,Pn.isObject=es,Pn.isObjectLike=ts,Pn.isPlainObject=is,Pn.isRegExp=as,Pn.isSafeInteger=function(e){return Qo(e)&&e>=-9007199254740991&&e<=p},Pn.isSet=os,Pn.isString=ss,Pn.isSymbol=ls,Pn.isTypedArray=cs,Pn.isUndefined=function(e){return e===n},Pn.isWeakMap=function(e){return ts(e)&&ha(e)==E},Pn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kr(e)},Pn.join=function(e,t){return null==e?"":Ut.call(e,t)},Pn.kebabCase=Vs,Pn.last=Xa,Pn.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=(a=hs(r))<0?bn(i+a,0):xn(a,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,a):Pt(e,Wt,a,!0)},Pn.lowerCase=Ys,Pn.lowerFirst=Us,Pn.lt=ds,Pn.lte=us,Pn.max=function(e){return e&&e.length?mr(e,rl,Cr):n},Pn.maxBy=function(e,t){return e&&e.length?mr(e,la(t,2),Cr):n},Pn.mean=function(e){return Vt(e,rl)},Pn.meanBy=function(e,t){return Vt(e,la(t,2))},Pn.min=function(e){return e&&e.length?mr(e,rl,Fr):n},Pn.minBy=function(e,t){return e&&e.length?mr(e,la(t,2),Fr):n},Pn.stubArray=ml,Pn.stubFalse=gl,Pn.stubObject=function(){return{}},Pn.stubString=function(){return""},Pn.stubTrue=function(){return!0},Pn.multiply=$l,Pn.nth=function(e,t){return e&&e.length?Wr(e,hs(t)):n},Pn.noConflict=function(){return ft._===this&&(ft._=Pe),this},Pn.noop=ll,Pn.now=Co,Pn.pad=function(e,t,n){e=bs(e);var r=(t=hs(t))?pn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(mt(i),n)+e+Vi(ht(i),n)},Pn.padEnd=function(e,t,n){e=bs(e);var r=(t=hs(t))?pn(e):0;return t&&r<t?e+Vi(t-r,n):e},Pn.padStart=function(e,t,n){e=bs(e);var r=(t=hs(t))?pn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Pn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(bs(e).replace(ie,""),t||0)},Pn.random=function(e,t,r){if(r&&"boolean"!=typeof r&&xa(e,t,r)&&(t=r=n),r===n&&("boolean"==typeof t?(r=t,t=n):"boolean"==typeof e&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=fs(e),t===n?(t=e,e=0):t=fs(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=$n();return xn(e+a*(t-e+ct("1e-"+((a+"").length-1))),t)}return Kr(e,t)},Pn.reduce=function(e,t,n){var r=Vo(e)?At:qt,i=arguments.length<3;return r(e,la(t,4),n,i,pr)},Pn.reduceRight=function(e,t,n){var r=Vo(e)?Nt:qt,i=arguments.length<3;return r(e,la(t,4),n,i,fr)},Pn.repeat=function(e,t,r){return t=(r?xa(e,t,r):t===n)?1:hs(t),Xr(bs(e),t)},Pn.replace=function(){var e=arguments,t=bs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pn.result=function(e,t,r){var i=-1,a=(t=xi(t,e)).length;for(a||(a=1,e=n);++i<a;){var o=null==e?n:e[Na(t[i])];o===n&&(i=a,o=r),e=Zo(o)?o.call(e):o}return e},Pn.round=jl,Pn.runInContext=e,Pn.sample=function(e){return(Vo(e)?Zn:Zr)(e)},Pn.size=function(e){if(null==e)return 0;if(Uo(e))return ss(e)?pn(e):e.length;var t=ha(e);return t==j||t==T?e.size:Nr(e).length},Pn.snakeCase=qs,Pn.some=function(e,t,r){var i=Vo(e)?Bt:ii;return r&&xa(e,t,r)&&(t=n),i(e,la(t,3))},Pn.sortedIndex=function(e,t){return ai(e,t)},Pn.sortedIndexBy=function(e,t,n){return oi(e,t,la(n,2))},Pn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&Po(e[r],t))return r}return-1},Pn.sortedLastIndex=function(e,t){return ai(e,t,!0)},Pn.sortedLastIndexBy=function(e,t,n){return oi(e,t,la(n,2),!0)},Pn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ai(e,t,!0)-1;if(Po(e[n],t))return n}return-1},Pn.startCase=Ks,Pn.startsWith=function(e,t,n){return e=bs(e),n=null==n?0:sr(hs(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Pn.subtract=Sl,Pn.sum=function(e){return e&&e.length?Kt(e,rl):0},Pn.sumBy=function(e,t){return e&&e.length?Kt(e,la(t,2)):0},Pn.template=function(e,t,r){var i=Pn.templateSettings;r&&xa(e,t,r)&&(t=n),e=bs(e),t=ws({},t,i,Qi);var a,o,s=ws({},t.imports,i.imports,Qi),l=Es(s),c=Qt(s,l),d=0,u=t.interpolate||ye,p="__p += '",f=Oe((t.escape||ye).source+"|"+u.source+"|"+(u===Q?pe:ye).source+"|"+(t.evaluate||ye).source+"|$","g"),h="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++at+"]")+"\n";e.replace(f,(function(t,n,r,i,s,l){return r||(r=i),p+=e.slice(d,l).replace(we,an),n&&(a=!0,p+="' +\n__e("+n+") +\n'"),s&&(o=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),p+="';\n";var m=Ae.call(t,"variable")&&t.variable;if(m){if(de.test(m))throw new je("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";p=(o?p.replace(W,""):p).replace(V,"$1").replace(Y,"$1;"),p="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Qs((function(){return Se(l,h+"return "+p).apply(n,c)}));if(g.source=p,Go(g))throw g;return g},Pn.times=function(e,t){if((e=hs(e))<1||e>p)return[];var n=h,r=xn(e,h);t=la(t),e-=h;for(var i=Xt(r,t);++n<e;)t(n);return i},Pn.toFinite=fs,Pn.toInteger=hs,Pn.toLength=ms,Pn.toLower=function(e){return bs(e).toLowerCase()},Pn.toNumber=gs,Pn.toSafeInteger=function(e){return e?sr(hs(e),-9007199254740991,p):0===e?e:0},Pn.toString=bs,Pn.toUpper=function(e){return bs(e).toUpperCase()},Pn.trim=function(e,t,r){if((e=bs(e))&&(r||t===n))return Gt(e);if(!e||!(t=ci(t)))return e;var i=fn(e),a=fn(t);return wi(i,en(i,a),tn(i,a)+1).join("")},Pn.trimEnd=function(e,t,r){if((e=bs(e))&&(r||t===n))return e.slice(0,hn(e)+1);if(!e||!(t=ci(t)))return e;var i=fn(e);return wi(i,0,tn(i,fn(t))+1).join("")},Pn.trimStart=function(e,t,r){if((e=bs(e))&&(r||t===n))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=fn(e);return wi(i,en(i,fn(t))).join("")},Pn.truncate=function(e,t){var r=30,i="...";if(es(t)){var a="separator"in t?t.separator:a;r="length"in t?hs(t.length):r,i="omission"in t?ci(t.omission):i}var o=(e=bs(e)).length;if(on(e)){var s=fn(e);o=s.length}if(r>=o)return e;var l=r-pn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(a===n)return c+i;if(s&&(l+=c.length-l),as(a)){if(e.slice(l).search(a)){var d,u=c;for(a.global||(a=Oe(a.source,bs(fe.exec(a))+"g")),a.lastIndex=0;d=a.exec(u);)var p=d.index;c=c.slice(0,p===n?l:p)}}else if(e.indexOf(ci(a),l)!=l){var f=c.lastIndexOf(a);f>-1&&(c=c.slice(0,f))}return c+i},Pn.unescape=function(e){return(e=bs(e))&&K.test(e)?e.replace(U,mn):e},Pn.uniqueId=function(e){var t=++Ne;return bs(e)+t},Pn.upperCase=Xs,Pn.upperFirst=Gs,Pn.each=bo,Pn.eachRight=xo,Pn.first=Ya,sl(Pn,(wl={},yr(Pn,(function(e,t){Ae.call(Pn.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pn[e].placeholder=Pn})),Ot(["drop","take"],(function(e,t){Vn.prototype[e]=function(r){r=r===n?1:bn(hs(r),0);var i=this.__filtered__&&!t?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=xn(r,i.__takeCount__):i.__views__.push({size:xn(r,h),type:e+(i.__dir__<0?"Right":"")}),i},Vn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:la(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return Ir(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Ao(la(e)))},Vn.prototype.slice=function(e,t){e=hs(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Vn(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(r=(t=hs(t))<0?r.dropRight(-t):r.take(t-e)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(h)},yr(Vn.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=Pn[i?"take"+("last"==t?"Right":""):t],o=i||/^find/.test(t);a&&(Pn.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Vn,c=s[0],d=l||Vo(t),u=function(e){var t=a.apply(Pn,Rt([e],s));return i&&p?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var p=this.__chain__,f=!!this.__actions__.length,h=o&&!p,m=l&&!f;if(!o&&d){t=m?t:new Vn(this);var g=e.apply(t,s);return g.__actions__.push({func:fo,args:[u],thisArg:n}),new Wn(g,p)}return h&&m?e.apply(this,s):(g=this.thru(u),h?i?g.value()[0]:g.value():g)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ie[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Pn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Vo(i)?i:[],e)}return this[n]((function(n){return t.apply(Vo(n)?n:[],e)}))}})),yr(Vn.prototype,(function(e,t){var n=Pn[t];if(n){var r=n.name+"";Ae.call(En,r)||(En[r]=[]),En[r].push({name:t,func:n})}})),En[Pi(n,2).name]=[{name:"wrapper",func:n}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Di(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Di(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Di(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Vo(e),r=t<0,i=n?e.length:0,a=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=xn(t,e+o);break;case"takeRight":e=bn(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,s=a.end,l=s-o,c=r?s:o-1,d=this.__iteratees__,u=d.length,p=0,f=xn(l,this.__takeCount__);if(!n||!r&&i==l&&f==l)return hi(e,this.__actions__);var h=[];e:for(;l--&&p<f;){for(var m=-1,g=e[c+=t];++m<u;){var v=d[m],b=v.iteratee,x=v.type,y=b(g);if(2==x)g=y;else if(!y){if(1==x)continue e;break e}}h[p++]=g}return h},Pn.prototype.at=ho,Pn.prototype.chain=function(){return po(this)},Pn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Pn.prototype.next=function(){this.__values__===n&&(this.__values__=ps(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},Pn.prototype.plant=function(e){for(var t,r=this;r instanceof Hn;){var i=Fa(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t},Pn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Vn){var t=e;return this.__actions__.length&&(t=new Vn(this)),(t=t.reverse()).__actions__.push({func:fo,args:[Ja],thisArg:n}),new Wn(t,this.__chain__)}return this.thru(Ja)},Pn.prototype.toJSON=Pn.prototype.valueOf=Pn.prototype.value=function(){return hi(this.__wrapped__,this.__actions__)},Pn.prototype.first=Pn.prototype.head,Ze&&(Pn.prototype[Ze]=function(){return this}),Pn}();mt?((mt.exports=gn)._=gn,ht._=gn):ft._=gn}).call(ki)}(Jj,Jj.exports);var eS=Jj.exports;const tS=Y.default.forwardRef(((n,r)=>{var{value:i,readOnly:a,"data-testid":o,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:p=e.jsx(w.EyeIcon,{}),iconActiveColor:f,iconInactiveColor:h,maskChar:m="•",error:g,disableMask:v,transformInput:b,loadState:x,onMask:y,onUnmask:j,onChange:S,onFocus:k,onBlur:C,onTryAgain:O}=n,T=X(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const D=a&&eS.isEmpty(i),[I,E]=t.useState(!v),[_,M]=t.useState(i||"");t.useEffect((()=>{M(i)}),[i]);const R=e=>{L(!1),k&&k(e)},A=e=>{L(!0),C&&C(e)},N=e=>{let t=e.target.value;switch(b){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},B=()=>{a&&O&&O()},F=()=>{L(!I)},L=e=>{E(e),e?y&&y():j&&j()},P=()=>!(null==_?void 0:_.toString().length)||v,z=()=>{const t=P();return!D&&e.jsx(Vj,Object.assign({"data-testid":"icon-"+(I?"masked":"unmasked"),onClick:t?void 0:F,$isDisabled:t,$inactiveColor:h,$activeColor:f},{children:I?p:u}))};return e.jsx("div",Object.assign({"aria-busy":"loading"===x,"aria-live":"polite"},{children:(()=>{if(a)switch(x){case"fail":return e.jsxs(Qj,Object.assign({onClick:B,"data-testid":"try-again-button"},{children:[e.jsxs(Xj,{children:[e.jsx(Gj,{}),e.jsx(Zj,{children:"Error"})]}),e.jsx(Kj,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return e.jsxs(Yj,{children:[e.jsx(qj,{}),e.jsx(Uj,{children:"Retrieving..."})]})}return e.jsx(Wj,Object.assign({ref:r,"data-testid":`${o||"masked-input"}${I?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:z()},position:"right"},onFocus:a?void 0:R,onBlur:a?void 0:A,onClick:a?F:void 0,onChange:N,value:D?"-":I&&!v?sc.maskValue(null==_?void 0:_.toString(),{maskChar:m,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):_,readOnly:a,error:g,$isDisabled:P()},T))})()}))})),nS=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-masked-input","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(tS,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},p))}))})),rS=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,iS=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Qo.Primary:Qo.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rS}
`,aS=q.default.div`
    color: ${Qo.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rS}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${gs.getTextStyle("BodySmall","semibold")}
                `:i.css`
                    ${gs.getTextStyle("Body","regular")}
                `}
`,oS=q.default.span`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
`,sS=q.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${iS} {
                        display: inline;
                    }

                    ${aS} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,lS=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,cS=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,dS=({bold:n,displayType:r="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const p=i.useTheme()||fl,f=ds.Body.fontSize({theme:p}),h=ds.Body.fontFamily({theme:p}),{ref:m,width:g}=Ye(),v=t.useCallback((e=>{if("inline"!==r)return!1;return sc.getTextWidth(e,`${f}rem '${h}'`)>g*s-50}),[g,r,f,h,s]),b=t.useMemo((()=>v(a)),[v,a]),x=t.useMemo((()=>c&&v(c)),[v,c]),y=b||x?"next-line":r,w=t=>{if(!o)return t;const n=o.toLowerCase().trim(),r=t.toLowerCase().indexOf(n),i=r+o.length;return-1===r?t:e.jsxs(e.Fragment,{children:[a.slice(0,r),e.jsx(oS,Object.assign({$variant:u},{children:a.slice(r,i)})),a.slice(i)]})},$=t=>e.jsxs(e.Fragment,{children:[e.jsx(lS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)})),e.jsx(cS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)}))]});return e.jsxs(sS,Object.assign({ref:m,$labelDisplayType:y},{children:[e.jsx(iS,Object.assign({"aria-label":a,$bold:n,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&b?$(a):w(a)})),c&&e.jsx(aS,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:r},{children:"middle"===d&&x?$(c):c}))]}))};function uS(e){return()=>e}function pS(e){e()}function fS(e,t){return n=>e(t(n))}function hS(e,t){return()=>e(t)}function mS(e){return void 0!==e}function gS(){}function vS(e,t){return t(e),e}function bS(e,t){return t(e)}function xS(...e){return e}function yS(e,t){return e(1,t)}function wS(e,t){e(0,t)}function $S(e){e(2)}function jS(e){return e(4)}function SS(e,t){return yS(e,function(e,t){return n=>e(t,n)}(t,0))}function kS(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function CS(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function OS(e,t){return e===t}function TS(e=OS){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function DS(e){return t=>n=>{e(n)&&t(n)}}function IS(e){return t=>fS(t,e)}function ES(e){return t=>()=>{t(e)}}function _S(e,...t){const n=function(...e){return t=>e.reduceRight(bS,t)}(...t);return(t,r)=>{switch(t){case 2:return void $S(e);case 1:return yS(e,n(r))}}}function MS(e,t){return n=>r=>{n(t=e(t,r))}}function RS(e){return t=>n=>{e>0?e--:t(n)}}function AS(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function NS(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,a)=>{const o=Math.pow(2,a);yS(e,(e=>{const s=n;n|=o,t[a]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>a=>{const o=()=>{e([a].concat(t))};n===i?o():r=o}}function BS(e){let t=e;const n=LS();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function FS(e,t){return vS(BS(t),(t=>SS(e,t)))}function LS(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function PS(e){return vS(LS(),(t=>SS(e,t)))}function zS(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:HS(),singleton:n}}const HS=()=>Symbol();function WS(...e){const t=LS(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,a)=>{const o=Math.pow(2,a);yS(e,(e=>{n[a]=e,r|=o,r===i&&wS(t,n)}))})),function(e,a){switch(e){case 2:return void $S(t);case 1:return r===i&&a(n),yS(t,a)}}}function VS(e,t=OS){return _S(e,TS(t))}function YS(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(pS)}}(...e.map((e=>yS(e,n))))}}}var US=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(US||{});const qS={0:"debug",3:"error",1:"log",2:"warn"},KS=zS((()=>{const e=BS(3);return{log:BS(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:jS(e))&&console[qS[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function XS(e,t,n){return GS(e,t,n).callbackRef}function GS(e,t,n){const r=Y.default.useRef(null);let i=e=>{};const a=Y.default.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return i=e=>{e&&t?(null==a||a.observe(e),r.current=e):(r.current&&(null==a||a.unobserve(r.current)),r.current=null)},{callbackRef:i,ref:r}}function ZS(e,t,n,r,i,a,o,s,l){const c=Y.default.useCallback((n=>{const l=function(e,t,n,r){const i=e.length;if(0===i)return null;const a=[];for(let o=0;o<i;o++){const i=e.item(o);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},US.ERROR),c===l)continue;const d=a[a.length-1];0===a.length||d.size!==c||d.endIndex!==s-1?a.push({endIndex:s,size:c,startIndex:s}):a[a.length-1].endIndex++}return a}(n.children,t,s?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType;let u;d&&(u=c.ownerDocument.defaultView);const p=o?s?o.scrollLeft:o.scrollTop:d?s?u.scrollX||u.document.documentElement.scrollLeft:u.scrollY||u.document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,f=o?s?o.scrollWidth:o.scrollHeight:d?s?u.document.documentElement.scrollWidth:u.document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,h=o?s?o.offsetWidth:o.offsetHeight:d?s?u.innerWidth:u.innerHeight:s?c.offsetWidth:c.offsetHeight;r({scrollHeight:f,scrollTop:Math.max(p,0),viewportHeight:h}),null==a||a(s?QS("column-gap",getComputedStyle(n).columnGap,i):QS("row-gap",getComputedStyle(n).rowGap,i)),null!==l&&e(l)}),[e,t,i,a,o,r,s]);return GS(c,n,l)}function QS(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,US.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function JS(e,t,n){const r=Y.default.useRef(null),i=Y.default.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),a=i.width;let s,l;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;l=e.height-Math.max(0,n),s=n+t.scrollTop}else{const e=o.current.ownerDocument.defaultView;l=e.innerHeight-Math.max(0,i.top),s=i.top+e.scrollY}r.current={offsetTop:s,visibleHeight:l,visibleWidth:a},e(r.current)}),[e,t]),{callbackRef:a,ref:o}=GS(i,!0,n),s=Y.default.useCallback((()=>{i(o.current)}),[i,o]);return Y.default.useEffect((()=>{var e;if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}{const t=null==(e=o.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",s),null==t||t.addEventListener("resize",s),()=>{null==t||t.removeEventListener("scroll",s),null==t||t.removeEventListener("resize",s)}}}),[s,t,o]),a}const ek=zS((()=>{const e=LS(),t=LS(),n=BS(0),r=LS(),i=BS(0),a=LS(),o=LS(),s=BS(0),l=BS(0),c=BS(0),d=BS(0),u=LS(),p=LS(),f=BS(!1),h=BS(!1),m=BS(!1);return SS(_S(e,IS((({scrollTop:e})=>e))),t),SS(_S(e,IS((({scrollHeight:e})=>e))),o),SS(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:h,scrollBy:p,scrollContainerState:e,scrollHeight:o,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:a}}),[],{singleton:!0}),tk={lvl:0};function nk(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const a=[];for(let o=1;o<n;o++){const{index:n,value:s}=t(e[o]);a.push({end:n-1,start:r,value:i}),r=n,i=s}return a.push({end:1/0,start:r,value:i}),a}function rk(e){return e===tk}function ik(e,t){if(!rk(e))return t===e.k?e.v:t<e.k?ik(e.l,t):ik(e.r,t)}function ak(e,t,n="k"){if(rk(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=ak(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return ak(e.l,t,n)}function ok(e,t,n){return rk(e)?vk(t,n,1):t===e.k?fk(e,{k:t,v:n}):t<e.k?bk(fk(e,{l:ok(e.l,t,n)})):bk(fk(e,{r:ok(e.r,t,n)}))}function sk(){return tk}function lk(e,t,n){if(rk(e))return[];return function(e){return nk(e,(({k:e,v:t})=>({index:e,value:t})))}(uk(e,ak(e,t)[0],n))}function ck(e,t){if(rk(e))return tk;const{k:n,l:r,r:i}=e;if(t===n){if(rk(r))return i;if(rk(i))return r;{const[t,n]=gk(r);return pk(fk(e,{k:t,l:hk(r),v:n}))}}return pk(fk(e,t<n?{l:ck(r,t)}:{r:ck(i,t)}))}function dk(e){return rk(e)?[]:[...dk(e.l),{k:e.k,v:e.v},...dk(e.r)]}function uk(e,t,n){if(rk(e))return[];const{k:r,l:i,r:a,v:o}=e;let s=[];return r>t&&(s=s.concat(uk(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:o}),r<=n&&(s=s.concat(uk(a,t,n))),s}function pk(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(mk(t))return xk(fk(e,{lvl:n-1}));if(!rk(t)&&!rk(t.r))return fk(t.r,{l:fk(t,{r:t.r.l}),lvl:n,r:fk(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(mk(e))return yk(fk(e,{lvl:n-1}));if(rk(r)||rk(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=mk(t)?r.lvl-1:r.lvl;return fk(t,{l:fk(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:yk(fk(r,{l:t.r,lvl:i}))})}}function fk(e,t){return vk(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function hk(e){return rk(e.r)?e.l:pk(fk(e,{r:hk(e.r)}))}function mk(e){return rk(e)||e.lvl>e.r.lvl}function gk(e){return rk(e.r)?[e.k,e.v]:gk(e.r)}function vk(e,t,n,r=tk,i=tk){return{k:e,l:r,lvl:n,r:i,v:t}}function bk(e){return yk(xk(e))}function xk(e){const{l:t}=e;return rk(t)||t.lvl!==e.lvl?e:fk(t,{r:fk(e,{l:t.r})})}function yk(e){const{lvl:t,r:n}=e;return rk(n)||rk(n.r)||n.lvl!==t||n.r.lvl!==t?e:fk(n,{l:fk(e,{r:n.l}),lvl:t+1})}function wk(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function $k(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const jk=zS((()=>({recalcInProgress:BS(!1)})),[],{singleton:!0});function Sk(e,t,n){return e[kk(e,t,n)]}function kk(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const a=Math.floor((r+i)/2),o=n(e[a],t);if(0===o)return a;if(-1===o){if(i-r<2)return a-1;i=a-1}else{if(i===r)return a;r=a+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Ck(e,t){return Math.round(e.getBoundingClientRect()[t])}function Ok(e){return!rk(e.groupOffsetTree)}function Tk({index:e},t){return t===e?0:t<e?-1:1}function Dk({offset:e},t){return t===e?0:t<e?-1:1}function Ik(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:a}=Sk(t,e,Tk),o=e-r,s=a*o+(o-1)*n+i;return s>0?s+n:s}function Ek(e,t){if(!Ok(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function _k(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Ek("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Mk(e,t,n,r=0){return r>0&&(t=Math.max(t,Sk(e,r,Tk).offset)),nk(function(e,t,n,r){const i=kk(e,t,r),a=kk(e,n,r,i);return e.slice(i,a+1)}(e,t,n,Dk),Bk)}function Rk(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,US.DEBUG);const a=e.sizeTree;let o=a,s=0;if(n.length>0&&rk(a)&&2===t.length){const e=t[0].size,r=t[1].size;o=n.reduce(((t,n)=>ok(ok(t,n,e),n+1,r)),o)}else[o,s]=function(e,t){let n=rk(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:a}=r;if(n=Math.min(n,a),rk(e)){e=ok(e,0,i);continue}const o=lk(e,a-1,t+1);if(o.some(Fk(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:a}of o)s?(t>=r||i===a)&&(e=ck(e,r)):(l=a!==i,s=!0),n>t&&t>=r&&a!==i&&(e=ok(e,t+1,a));l&&(e=ok(e,a,i))}return[e,n]}(o,t);if(o===a)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Nk(e.offsetTree,s,o,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>ok(e,t,Ik(t,u,i))),sk()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:o}}function Ak(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Nk(e,t,n,r){let i=e,a=0,o=0,s=0,l=0;if(0!==t){l=kk(i,t-1,Tk),s=i[l].offset;const e=ak(n,t-1);a=e[0],o=e[1],i.length&&i[l].size===ak(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of lk(n,t,1/0)){const t=e-a,n=t*o+s+t*r;i.push({index:e,offset:n,size:l}),a=e,s=n,o=l}return{lastIndex:a,lastOffset:s,lastSize:o,offsetTree:i}}function Bk(e){return{index:e.index,value:e}}function Fk(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Lk={offsetHeight:"height",offsetWidth:"width"},Pk=zS((([{log:e},{recalcInProgress:t}])=>{const n=LS(),r=LS(),i=FS(r,0),a=LS(),o=LS(),s=BS(0),l=BS([]),c=BS(void 0),d=BS(void 0),u=BS(((e,t)=>Ck(e,Lk[t]))),p=BS(void 0),f=BS(0),h={groupIndices:[],groupOffsetTree:sk(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:sk()},m=FS(_S(n,NS(l,e,f),MS(Rk,h),TS()),h),g=FS(_S(l,TS(),MS(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),IS((({prev:e})=>e))),[]);SS(_S(l,DS((e=>e.length>0)),NS(m,f),IS((([e,t,n])=>{const r=e.reduce(((e,r,i)=>ok(e,r,Ik(r,t.offsetTree,n)||i)),sk());return{...t,groupIndices:e,groupOffsetTree:r}}))),m),SS(_S(r,NS(m),DS((([e,{lastIndex:t}])=>e<t)),IS((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),SS(c,d);const v=FS(_S(c,IS((e=>void 0===e))),!0);SS(_S(d,DS((e=>void 0!==e&&rk(jS(m).sizeTree))),IS((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const b=PS(_S(n,NS(m),MS((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:h}),IS((e=>e.changed))));yS(_S(s,MS(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),IS((e=>e.diff))),(e=>{const{groupIndices:n}=jS(m);if(e>0)wS(t,!0),wS(a,e+Ak(e,n));else if(e<0){const t=jS(g);t.length>0&&(e-=Ak(-e,t)),wS(o,e)}})),yS(_S(s,NS(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},US.ERROR)}));const x=PS(a);SS(_S(a,NS(m),IS((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=ik(t.sizeTree,0);let a=0,o=0;for(;a<e;){const e=t.groupIndices[o],s=t.groupIndices.length===o+1?1/0:t.groupIndices[o+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),o++,a+=s+1}const s=dk(t.sizeTree);return a!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return dk(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const y=PS(_S(o,NS(m,f),IS((([e,{offsetTree:t},n])=>Ik(-e,t,n)))));return SS(_S(o,NS(m,f),IS((([e,t,n])=>{if(t.groupIndices.length>0){if(rk(t.sizeTree))return t;let r=sk();const i=jS(g);let a=0,o=0,s=0;for(;a<-e;){s=i[o];const e=i[o+1]-s-1;o++,a+=e+1}if(r=dk(t.sizeTree).reduce(((t,{k:n,v:r})=>ok(t,Math.max(0,n+e),r)),r),a!==-e){r=ok(r,0,ik(t.sizeTree,s));r=ok(r,1,ak(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Nk(t.offsetTree,0,r,n)}}{const r=dk(t.sizeTree).reduce(((t,{k:n,v:r})=>ok(t,Math.max(0,n+e),r)),sk());return{...t,sizeTree:r,...Nk(t.offsetTree,0,r,n)}}}))),m),{beforeUnshiftWith:x,data:p,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:b,shiftWith:o,shiftWithOffset:y,sizeRanges:n,sizes:m,statefulTotalCount:i,totalCount:r,trackItemSizes:v,unshiftWith:a}}),xS(KS,jk),{singleton:!0});function zk(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Hk=zS((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const a=LS(),o=LS(),s=PS(_S(a,IS(zk)));return SS(_S(s,IS((e=>e.totalCount))),n),SS(_S(s,IS((e=>e.groupIndices))),e),SS(_S(WS(i,t,r),DS((([e,t])=>Ok(t))),IS((([e,t,n])=>ak(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),TS(),IS((e=>[e]))),o),{groupCounts:a,topItemsIndexes:o}}),xS(Pk,ek)),Wk=zS((([{log:e}])=>{const t=BS(!1),n=PS(_S(t,DS((e=>e)),TS()));return yS(t,(t=>{t&&jS(e)("props updated",{},US.DEBUG)})),{didMount:n,propsReady:t}}),xS(KS),{singleton:!0}),Vk=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Yk(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Vk)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Uk=zS((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:a,footerHeight:o,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:p}])=>{const f=LS(),h=LS(),m=BS(0);let g=null,v=null,b=null;function x(){g&&(g(),g=null),b&&(b(),b=null),v&&(clearTimeout(v),v=null),wS(l,!1)}return SS(_S(f,NS(n,u,r,m,s,o,p),NS(e,a,i),IS((([[e,n,r,i,a,o,s,c],u,p,m])=>{const y=Yk(e),{align:w,behavior:$,offset:j}=y,S=i-1,k=_k(y,n,S);let C=Ik(k,n.offsetTree,u)+o;"end"===w?(C+=p+ak(n.sizeTree,k)[1]-r+m,k===S&&(C+=s)):"center"===w?C+=(p+ak(n.sizeTree,k)[1]-r+m)/2:C-=a,j&&(C+=j);const O=t=>{x(),t?(c("retrying to scroll to",{location:e},US.DEBUG),wS(f,e)):(wS(h,!0),c("list did not change, scroll successful",{},US.DEBUG))};if(x(),"smooth"===$){let e=!1;b=yS(t,(t=>{e=e||t})),g=kS(d,(()=>{O(e)}))}else g=kS(_S(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),O);return v=setTimeout((()=>{x()}),1200),wS(l,!0),c("scrolling from index to",{behavior:$,index:k,top:C},US.DEBUG),{behavior:$,top:C}}))),c),{scrollTargetReached:h,scrollToIndex:f,topListHeight:m}}),xS(Pk,ek,KS),{singleton:!0});function qk(e,t){0==e?t():requestAnimationFrame((()=>{qk(e-1,t)}))}function Kk(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const Xk=zS((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:a},{didMount:o}])=>{const s=BS(!0),l=BS(0),c=BS(!0);return SS(_S(o,NS(l),DS((([e,t])=>!!t)),ES(!1)),s),SS(_S(o,NS(l),DS((([e,t])=>!!t)),ES(!1)),c),yS(_S(WS(t,o),NS(s,n,e,c),DS((([[,e],t,{sizeTree:n},r,i])=>e&&(!rk(n)||mS(r))&&!t&&!i)),NS(l)),(([,e])=>{kS(i,(()=>{wS(c,!0)})),qk(4,(()=>{kS(r,(()=>{wS(s,!0)})),wS(a,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),xS(Pk,ek,Uk,Wk),{singleton:!0});function Gk(e,t){return Math.abs(e-t)<1.01}const Zk="up",Qk="down",Jk={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},eC=zS((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:a}])=>{const o=BS(!1),s=BS(!0),l=LS(),c=LS(),d=BS(4),u=BS(0),p=FS(_S(YS(_S(VS(i),RS(1),ES(!0)),_S(VS(i),RS(1),ES(!1),CS(100))),TS()),!1),f=FS(_S(YS(_S(n,ES(!0)),_S(n,ES(!1),CS(200))),TS()),!1);SS(_S(WS(VS(i),VS(u)),IS((([e,t])=>e<=t)),TS()),s),SS(_S(s,AS(50)),c);const h=PS(_S(WS(r,VS(a),VS(t),VS(e),VS(d)),MS(((e,[{scrollHeight:t,scrollTop:n},r,i,a,o])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-o){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Jk),TS(((e,t)=>e&&e.atBottom===t.atBottom)))),m=FS(_S(r,MS(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(Gk(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),DS((e=>e.changed)),IS((e=>e.jump))),0);SS(_S(h,IS((e=>e.atBottom))),o),SS(_S(o,AS(50)),l);const g=BS(Qk);SS(_S(r,IS((({scrollTop:e})=>e)),TS(),MS(((e,t)=>jS(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Zk:Qk,prevScrollTop:t}),{direction:Qk,prevScrollTop:0}),IS((e=>e.direction))),g),SS(_S(r,AS(50),ES("none")),g);const v=BS(0);return SS(_S(p,DS((e=>!e)),ES(0)),v),SS(_S(i,AS(100),NS(p),DS((([e,t])=>!!t)),MS((([e,t],[n])=>[t,n]),[0,0]),IS((([e,t])=>t-e))),v),{atBottomState:h,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:o,isAtTop:s,isScrolling:p,lastJumpDueToItemResize:m,scrollDirection:g,scrollVelocity:v}}),xS(ek)),tC="top",nC="bottom",rC="none";function iC(e,t,n){return"number"==typeof e?n===Zk&&t===tC||n===Qk&&t===nC?e:0:n===Zk?t===tC?e.main:e.reverse:t===nC?e.main:e.reverse}function aC(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const oC=zS((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const a=LS(),o=BS(0),s=BS(0),l=BS(0),c=FS(_S(WS(VS(r),VS(i),VS(n),VS(a,$k),VS(l),VS(o),VS(t),VS(e),VS(s)),IS((([e,t,n,[r,i],a,o,s,l,c])=>{const d=e-l,u=o+s,p=Math.max(n-d,0);let f=rC;const h=aC(c,tC),m=aC(c,nC);return r-=l,i+=n+s,(r+=n+s)>e+u-h&&(f=Zk),(i-=l)<e-p+t+m&&(f=Qk),f!==rC?[Math.max(d-n-iC(a,tC,f)-h,0),d-p-s+t+iC(a,nC,f)+m]:null})),DS((e=>null!=e)),TS($k)),[0,0]);return{increaseViewportBy:s,listBoundary:a,overscan:l,topListHeight:o,visibleRange:c}}),xS(ek),{singleton:!0});const sC={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function lC(e,t,n,r,i,a){const{lastIndex:o,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-o,p=c,f=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:a,items:dC(e,i,a),offsetBottom:f,offsetTop:c,top:p,topItems:dC(t,i,a),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function cC(e,t,n,r,i,a){let o=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-o>=e)break;o++}const s=e+o,l=Kk(t,s);return lC(Array.from({length:s}).map(((e,t)=>({data:a[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function dC(e,t,n){if(0===e.length)return[];if(!Ok(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,a=[],o=lk(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=o.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},a.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return a}const uC=zS((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},a,{listBoundary:o,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},p,{didMount:f},{recalcInProgress:h}])=>{const m=BS([]),g=BS(0),v=LS();SS(a.topItemsIndexes,m);const b=FS(_S(WS(f,h,VS(l,$k),VS(i),VS(r),VS(c),d,VS(m),VS(t),VS(n),e),DS((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),IS((([,,[e,t],n,r,i,a,o,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:p}=d,f=jS(g);if(0===n)return{...sC,totalCount:n};if(0===e&&0===t)return 0===f?{...sC,totalCount:n}:cC(f,i,r,s,l,c||[]);if(rk(p))return f>0?null:lC(function(e,t,n){if(Ok(t)){const r=Ek(e,t);return[{index:ak(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(Kk(i,n),d,c),[],n,l,d,s);const h=[];if(o.length>0){const e=o[0],t=o[o.length-1];let n=0;for(const r of lk(p,e,t)){const i=r.value,a=Math.max(r.start,e),o=Math.min(r.end,t);for(let e=a;e<=o;e++)h.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!a)return lC([],h,n,l,d,s);const m=o.length>0?o[o.length-1]+1:0,v=Mk(u,e,t,m);if(0===v.length)return null;const b=n-1;return lC(vS([],(n=>{for(const r of v){const i=r.value;let a=i.offset,o=r.start;const s=i.size;if(i.offset<e){o+=Math.floor((e-i.offset+l)/(s+l));const t=o-r.start;a+=t*s+t*l}o<m&&(a+=(m-o)*s,o=m);const d=Math.min(r.end,b);for(let e=o;e<=d&&!(a>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:a,size:s}),a+=s+l}})),h,n,l,d,s)})),DS((e=>null!==e)),TS()),sC);SS(_S(e,DS(mS),IS((e=>null==e?void 0:e.length))),i),SS(_S(b,IS((e=>e.topListHeight))),u),SS(u,s),SS(_S(b,IS((e=>[e.top,e.bottom]))),o),SS(_S(b,IS((e=>e.items))),v);const x=PS(_S(b,DS((({items:e})=>e.length>0)),NS(i,e),DS((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),IS((([,e,t])=>[e-1,t])),TS($k),IS((([e])=>e)))),y=PS(_S(b,AS(200),DS((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),IS((({items:e})=>e[0].index)),TS())),w=PS(_S(b,DS((({items:e})=>e.length>0)),IS((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),TS(wk)));return{endReached:x,initialItemCount:g,itemsRendered:v,listState:b,rangeChanged:w,startReached:y,topItemsIndexes:m,...p}}),xS(Pk,Hk,oC,Xk,Uk,eC,Wk,jk),{singleton:!0}),pC=zS((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const a=LS(),o=FS(_S(WS(n,e,r,t,i),IS((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return SS(VS(o),a),{totalListHeight:o,totalListHeightChanged:a}}),xS(ek,uC),{singleton:!0}),fC=zS((([{viewportHeight:e},{totalListHeight:t}])=>{const n=BS(!1),r=FS(_S(WS(n,e,t),DS((([e])=>e)),IS((([,e,t])=>Math.max(0,e-t))),AS(0),TS()),0);return{alignToBottom:n,paddingTopAddition:r}}),xS(ek,pC),{singleton:!0});function hC(e){return!!e&&("smooth"===e?"smooth":"auto")}const mC=zS((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:i},{scrollToIndex:a},{scrolledToInitialItem:o},{didMount:s,propsReady:l},{log:c},{scrollingInProgress:d}])=>{const u=BS(!1),p=LS();let f=null;function h(e){wS(a,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=kS(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(jS(c)("scrolling to bottom due to increased size",{},US.DEBUG),h("auto"))}));setTimeout(t,100)}return yS(_S(WS(_S(VS(t),RS(1)),s),NS(VS(u),i,o,d),IS((([[e,t],n,r,i,a])=>{let o=t&&i,s="auto";return o&&(s=((e,t)=>"function"==typeof e?hC(e(t)):t&&hC(e))(n,r||a),o=o&&!!s),{followOutputBehavior:s,shouldFollow:o,totalCount:e}})),DS((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),jS(n)?requestAnimationFrame((()=>{jS(c)("following output to ",{totalCount:r},US.DEBUG),h(t)})):f=kS(e,(()=>{jS(c)("following output to ",{totalCount:r},US.DEBUG),h(t),f=null}))})),yS(_S(WS(VS(u),t,l),DS((([e,,t])=>e&&t)),MS((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),DS((({refreshed:e})=>e)),NS(u,t)),(([,e])=>{jS(o)&&m(!1!==e)})),yS(p,(()=>{m(!1!==jS(u))})),yS(WS(VS(u),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:p,followOutput:u}}),xS(Pk,eC,Uk,Xk,Wk,KS,ek)),gC=zS((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:a,listState:o},{didMount:s}])=>(SS(_S(s,NS(a),DS((([,e])=>0!==e)),NS(i,r,t,n,e),IS((([[,e],t,n,r,i,a=[]])=>cC(e,t,n,r,i,a)))),o),{})),xS(Pk,Xk,uC,Wk),{singleton:!0}),vC=zS((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=BS(0);return yS(_S(e,NS(r),DS((([,e])=>0!==e)),IS((([,e])=>({top:e})))),(e=>{kS(_S(n,RS(1),DS((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{wS(t,e)}))}))})),{initialScrollTop:r}}),xS(Wk,ek,uC),{singleton:!0}),bC=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:a,viewportTop:o})=>t<o?{...i,align:null!=n?n:"start",behavior:r}:e>a?{...i,align:null!=n?n:"end",behavior:r}:null,xC=zS((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:a,scrollingInProgress:o,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=LS();return SS(_S(d,NS(t,l,n,a,i,r,s),NS(e),IS((([[e,t,n,r,i,a,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:p=bC,done:f,...h}=e,m=_k(e,t,r-1),g=Ik(m,t.offsetTree,c)+i+a,v=p({itemBottom:g+ak(t.sizeTree,m)[1],itemTop:g,locationParams:{align:d,behavior:u,...h},viewportBottom:l+n-s,viewportTop:l+a});return v?f&&kS(_S(o,DS((e=>!e)),RS(jS(o)?1:2)),f):f&&f(),v})),DS((e=>null!==e))),c),{scrollIntoView:d}}),xS(Pk,ek,Uk,uC,KS),{singleton:!0}),yC=zS((([{scrollVelocity:e}])=>{const t=BS(!1),n=LS(),r=BS(!1);return SS(_S(e,NS(r,t,n),DS((([e,t])=>!!t)),IS((([e,t,n,r])=>{const{enter:i,exit:a}=t;if(n){if(a(e,r))return!1}else if(i(e,r))return!0;return n})),TS()),t),yS(_S(WS(t,e,n),NS(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),xS(eC),{singleton:!0}),wC=zS((([{scrollContainerState:e,scrollTo:t}])=>{const n=LS(),r=LS(),i=LS(),a=BS(!1),o=BS(void 0);return SS(_S(WS(n,r),IS((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),SS(_S(t,NS(r),IS((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:o,useWindowScroll:a,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),xS(ek)),$C=zS((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:a},{useWindowScroll:o,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=LS(),d=BS(void 0),u=BS(null),p=BS(null);return SS(s,u),SS(l,p),yS(_S(c,NS(t,r,o,u,p,n)),(([e,t,n,r,i,a,o])=>{const s=function(e){return dk(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==a&&(n=i.scrollTop-a.offsetTop),e({ranges:s,scrollTop:n-=o})})),SS(_S(d,DS(mS),IS(jC)),i),SS(_S(a,NS(d),DS((([,e])=>void 0!==e)),TS(),IS((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),xS(Pk,ek,Xk,Wk,wC));function jC(e){return{align:"start",index:0,offset:e.scrollTop}}const SC=zS((([{topItemsIndexes:e}])=>{const t=BS(0);return SS(_S(t,DS((e=>e>=0)),IS((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),xS(uC));function kC(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const CC=kC((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),OC=zS((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:a,lastJumpDueToItemResize:o,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:p},{log:f},{recalcInProgress:h}])=>{const m=PS(_S(l,NS(o),MS((([,e,t,n],[{bottom:r,items:i,offsetBottom:a,totalCount:o},s])=>{const l=r+a;let c=0;return t===o&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,o,l]}),[0,[],0,0]),DS((([e])=>0!==e)),NS(r,s,n,i,f,h),DS((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===Zk)),IS((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},US.DEBUG),e)))));function g(n){n>0?(wS(t,{behavior:"auto",top:-n}),wS(e,0)):(wS(e,0),wS(t,{behavior:"auto",top:-n}))}return yS(_S(m,NS(e,a)),(([t,n,r])=>{r&&CC()?wS(e,n-t):g(-t)})),yS(_S(WS(FS(a,!1),e,h),DS((([e,t,n])=>!e&&!n&&0!==t)),IS((([e,t])=>t)),AS(1)),g),SS(_S(u,IS((e=>({top:-e})))),t),yS(_S(c,NS(p,d),IS((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function a(e){return e*(n+i)}if(0===t.length)return a(e);{let n=0;const i=ik(r,0);let o=0,s=0;for(;o<e;){o++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;o+r>e&&(n-=i,r=e-o+1),o+=r,n+=a(r),s++}return n}}))),(n=>{wS(e,n),requestAnimationFrame((()=>{wS(t,{top:n}),requestAnimationFrame((()=>{wS(e,0),wS(h,!1)}))}))})),{deviation:e}}),xS(ek,eC,uC,Pk,KS,jk)),TC=zS((([e,t,n,r,i,a,o,s,l,c])=>({...e,...t,...n,...r,...i,...a,...o,...s,...l,...c})),xS(oC,gC,Wk,yC,pC,vC,fC,wC,xC,KS)),DC=zS((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:a,itemSize:o,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:p,initialTopMostItemIndex:f,scrolledToInitialItem:h},m,g,v,{listState:b,topItemsIndexes:x,...y},{scrollToIndex:w},$,{topItemCount:j},{groupCounts:S},k])=>(SS(y.rangeChanged,k.scrollSeekRangeChanged),SS(_S(k.windowViewportRect,IS((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:S,initialItemFinalLocationReached:p,initialTopMostItemIndex:f,scrolledToInitialItem:h,sizeRanges:s,topItemCount:j,topItemsIndexes:x,totalCount:d,...v,groupIndices:a,itemSize:o,listState:b,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...y,...k,...m,sizes:l,...g})),xS(Pk,Xk,ek,$C,mC,uC,Uk,OC,SC,Hk,TC));function IC(e,t){const n={},r={};let i=0;const a=e.length;for(;i<a;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const EC=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function _C(t,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),o=Object.keys(n.methods||{}),s=Object.keys(n.events||{}),l=Y.default.createContext({});function c(e,t){e.propsReady&&wS(e.propsReady,!1);for(const r of i){wS(e[n.required[r]],t[r])}for(const r of a)if(r in t){wS(e[n.optional[r]],t[r])}e.propsReady&&wS(e.propsReady,!0)}function d(e){return s.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,a){switch(i){case 1:return a?n===a?void 0:(r(),n=a,t=yS(e,a),t):(r(),gS);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const u=Y.default.forwardRef(((u,p)=>{const{children:f,...h}=u,[m]=Y.default.useState((()=>vS(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:a})=>{if(a&&t.has(i))return t.get(i);const o=e(r.map((e=>n(e))));return a&&t.set(i,o),o};return n(e)}(t),(e=>{c(e,h)})))),[g]=Y.default.useState(hS(d,m));EC((()=>{for(const e of s)e in h&&yS(g[e],h[e]);return()=>{Object.values(g).map($S)}}),[h,g,m]),EC((()=>{c(m,h)})),Y.default.useImperativeHandle(p,uS(function(e){return o.reduce(((t,r)=>(t[r]=t=>{wS(e[n.methods[r]],t)},t)),{})}(m)));const v=r;return e.jsx(l.Provider,{value:m,children:r?e.jsx(v,{...IC([...i,...a,...s],h),children:f}):f})}));return{Component:u,useEmitter:(e,t)=>{const n=Y.default.useContext(l)[e];EC((()=>yS(n,t)),[t,n])},useEmitterValue:Y.default.version.startsWith("18")?e=>{const t=Y.default.useContext(l)[e],n=Y.default.useCallback((e=>yS(t,e)),[t]);return Y.default.useSyncExternalStore(n,(()=>jS(t)),(()=>jS(t)))}:e=>{const t=Y.default.useContext(l)[e],[n,r]=Y.default.useState(hS(jS,t));return EC((()=>yS(t,(e=>{e!==n&&r(uS(e))}))),[t,n]),n},usePublisher:e=>{const t=Y.default.useContext(l);return Y.default.useCallback((n=>{wS(t[e],n)}),[t,e])}}}const MC=Y.default.createContext(void 0),RC=Y.default.createContext(void 0),AC=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function NC(e){return"self"in e}function BC(e,t,n,r=gS,i,a){const o=Y.default.useRef(null),s=Y.default.useRef(null),l=Y.default.useRef(null),c=Y.default.useCallback((n=>{let r,i,o;const c=n.target;if(function(e){return"body"in e}(c)||NC(c)){const e=NC(c)?c:c.defaultView;o=a?e.scrollX:e.scrollY,r=a?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,i=a?e.innerWidth:e.innerHeight}else o=a?c.scrollLeft:c.scrollTop,r=a?c.scrollWidth:c.scrollHeight,i=a?c.offsetWidth:c.offsetHeight;const d=()=>{e({scrollHeight:r,scrollTop:Math.max(o,0),viewportHeight:i})};n.suppressFlushSync?d():U.default.flushSync(d),null!==s.current&&(o===s.current||o<=0||o===r-i)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t,a]);return Y.default.useEffect((()=>{const e=i||o.current;return r(i||o.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",c)}}),[o,c,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),o.current.scrollBy(e)},scrollerRef:o,scrollToCallback:function(n){const r=o.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let c,d,u;NC(r)?(d=Math.max(Ck(r.document.documentElement,a?"width":"height"),a?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),c=a?r.innerWidth:r.innerHeight,u=a?window.scrollX:window.scrollY):(d=r[a?"scrollWidth":"scrollHeight"],c=Ck(r,a?"width":"height"),u=r[a?"scrollLeft":"scrollTop"]);const p=d-c;if(n.top=Math.ceil(Math.max(Math.min(p,n.top),0)),Gk(c,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(i&&t(!0));i?(s.current=n.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const FC="-webkit-sticky",LC="sticky",PC=kC((()=>{if(typeof document>"u")return LC;const e=document.createElement("div");return e.style.position=FC,e.style.position===FC?FC:LC}));function zC(e){return e}const HC=zS((()=>{const e=BS((e=>`Item ${e}`)),t=BS(null),n=BS((e=>`Group ${e}`)),r=BS({}),i=BS(zC),a=BS("div"),o=BS(gS),s=(e,t=null)=>FS(_S(r,IS((t=>t[e])),TS()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:a,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:o,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),WC=zS((([e,t])=>({...e,...t})),xS(DC,HC)),VC=({height:t})=>e.jsx("div",{style:{height:t}}),YC={overflowAnchor:"none",position:PC(),zIndex:1},UC={overflowAnchor:"none"},qC={...UC,display:"inline-block",height:"100%"},KC=Y.default.memo((function({showTopList:n=!1}){const r=uO("listState"),i=pO("sizeRanges"),a=uO("useWindowScroll"),o=uO("customScrollParent"),s=pO("windowScrollContainerState"),l=pO("scrollContainerState"),c=o||a?s:l,d=uO("itemContent"),u=uO("context"),p=uO("groupContent"),f=uO("trackItemSizes"),h=uO("itemSize"),m=uO("log"),g=pO("gap"),v=uO("horizontalDirection"),{callbackRef:b}=ZS(i,h,f,n?gS:c,m,g,o,v,uO("skipAnimationFrameInResizeObserver")),[x,y]=Y.default.useState(0);dO("deviation",(e=>{x!==e&&y(e)}));const w=uO("EmptyPlaceholder"),$=uO("ScrollSeekPlaceholder")||VC,j=uO("ListComponent"),S=uO("ItemComponent"),k=uO("GroupComponent"),C=uO("computeItemKey"),O=uO("isSeeking"),T=uO("groupIndices").length>0,D=uO("alignToBottom"),I=uO("initialItemFinalLocationReached"),E=n?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==x?x:D?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:D?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...I?{}:{visibility:"hidden"}};return!n&&0===r.totalCount&&w?e.jsx(w,{...JC(w,u)}):e.jsx(j,{...JC(j,u),"data-testid":n?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:E,children:(n?r.topItems:r.items).map((e=>{const n=e.originalIndex,i=C(n+r.firstItemIndex,e.data,u);return O?t.createElement($,{...JC($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(k,{...JC(k,u),"data-index":n,"data-item-index":e.index,"data-known-size":e.size,key:i,style:YC},p(e.index,u)):t.createElement(S,{...JC(S,u),...eO(S,e.data),"data-index":n,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:v?qC:UC},T?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),XC={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},GC={outline:"none",overflowX:"auto",position:"relative"},ZC=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),QC={position:PC(),top:0,width:"100%",zIndex:1};function JC(e,t){if("string"!=typeof e)return{context:t}}function eO(e,t){return{item:"string"==typeof e?void 0:t}}const tO=Y.default.memo((function(){const t=uO("HeaderComponent"),n=pO("headerHeight"),r=uO("HeaderFooterTag"),i=XS(Y.default.useMemo((()=>e=>{n(Ck(e,"height"))}),[n]),!0,uO("skipAnimationFrameInResizeObserver")),a=uO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...JC(t,a)})}):null})),nO=Y.default.memo((function(){const t=uO("FooterComponent"),n=pO("footerHeight"),r=uO("HeaderFooterTag"),i=XS(Y.default.useMemo((()=>e=>{n(Ck(e,"height"))}),[n]),!0,uO("skipAnimationFrameInResizeObserver")),a=uO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...JC(t,a)})}):null}));function rO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return Y.default.memo((function({children:i,style:a,...o}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),p=n("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:h,scrollToCallback:m}=BC(s,c,l,d,void 0,p);return t("scrollTo",m),t("scrollBy",f),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:h,style:{...p?GC:XC,...a},tabIndex:0,...o,...JC(l,u),children:i})}))}function iO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return Y.default.memo((function({children:i,style:a,...o}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("totalListHeight"),u=n("deviation"),p=n("customScrollParent"),f=n("context"),h=Y.default.useRef(null),m=n("scrollerRef"),{scrollByCallback:g,scrollerRef:v,scrollToCallback:b}=BC(s,c,l,m,p);return AC((()=>{var e;return v.current=p||(null==(e=h.current)?void 0:e.ownerDocument.defaultView),()=>{v.current=null}}),[v,p]),t("windowScrollTo",b),t("scrollBy",g),e.jsx(l,{ref:h,"data-virtuoso-scroller":!0,style:{position:"relative",...a,...0!==d?{height:d+u}:{}},...o,...JC(l,f),children:i})}))}const aO=({children:t})=>{const n=Y.default.useContext(MC),r=pO("viewportHeight"),i=pO("fixedItemHeight"),a=uO("alignToBottom"),o=uO("horizontalDirection"),s=XS(Y.default.useMemo((()=>fS(r,(e=>Ck(e,o?"width":"height")))),[r,o]),!0,uO("skipAnimationFrameInResizeObserver"));return Y.default.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:ZC(a),children:t})},oO=({children:t})=>{const n=Y.default.useContext(MC),r=pO("windowViewportRect"),i=pO("fixedItemHeight"),a=uO("customScrollParent"),o=JS(r,a,uO("skipAnimationFrameInResizeObserver")),s=uO("alignToBottom");return Y.default.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),e.jsx("div",{"data-viewport-type":"window",ref:o,style:ZC(s),children:t})},sO=({children:t})=>{const n=uO("TopItemListComponent")||"div",r=uO("headerHeight"),i={...QC,marginTop:`${r}px`},a=uO("context");return e.jsx(n,{style:i,...JC(n,a),children:t})},lO=Y.default.memo((function(t){const n=uO("useWindowScroll"),r=uO("topItemsIndexes").length>0,i=uO("customScrollParent"),a=uO("context"),o=i||n?hO:fO,s=i||n?oO:aO;return e.jsxs(o,{...t,...JC(o,a),children:[r&&e.jsx(sO,{children:e.jsx(KC,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(tO,{}),e.jsx(KC,{}),e.jsx(nO,{})]})]})})),{Component:cO,useEmitter:dO,useEmitterValue:uO,usePublisher:pO}=_C(WC,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},lO),fO=rO({useEmitter:dO,useEmitterValue:uO,usePublisher:pO}),hO=iO({useEmitter:dO,useEmitterValue:uO,usePublisher:pO}),mO=cO,gO={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},vO={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:bO,floor:xO,max:yO,min:wO,round:$O}=Math;function jO(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function SO(e,t){return e&&e.width===t.width&&e.height===t.height}function kO(e,t){return e&&e.column===t.column&&e.row===t.row}const CO=zS((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:a,scrollBy:o,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},p,f,{didMount:h,propsReady:m},{customScrollParent:g,useWindowScroll:v,windowScrollContainerState:b,windowScrollTo:x,windowViewportRect:y},w])=>{const $=BS(0),j=BS(0),S=BS(gO),k=BS({height:0,width:0}),C=BS({height:0,width:0}),O=LS(),T=LS(),D=BS(0),I=BS(null),E=BS({column:0,row:0}),_=LS(),M=LS(),R=BS(!1),A=BS(0),N=BS(!0),B=BS(!1),F=BS(!1);yS(_S(h,NS(A),DS((([e,t])=>!!t))),(()=>{wS(N,!1)})),yS(_S(WS(h,N,C,k,A,B),DS((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{wS(B,!0),qk(1,(()=>{wS(O,e)})),kS(_S(c),(()=>{wS(t,[0,0]),wS(N,!0)}))})),SS(_S(M,DS((e=>null!=e&&e.scrollTop>0)),ES(0)),j),yS(_S(h,NS(M),DS((([,e])=>null!=e))),(([,e])=>{e&&(wS(k,e.viewport),wS(C,e.item),wS(E,e.gap),e.scrollTop>0&&(wS(R,!0),kS(_S(c,RS(1)),(e=>{wS(R,!1)})),wS(l,{top:e.scrollTop})))})),SS(_S(k,IS((({height:e})=>e))),u),SS(_S(WS(VS(k,SO),VS(C,SO),VS(E,((e,t)=>e&&e.column===t.column&&e.row===t.row)),VS(c)),IS((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),_),SS(_S(WS(VS($),r,VS(E,kO),VS(C,SO),VS(k,SO),VS(I),VS(j),VS(R),VS(N),VS(A)),DS((([,,,,,,,e])=>!e)),IS((([e,[t,n],r,i,a,o,s,,l,c])=>{const{column:d,row:u}=r,{height:p,width:f}=i,{width:h}=a;if(0===s&&(0===e||0===h))return gO;if(0===f){const t=Kk(c,e);return function(e){return{...vO,items:e}}(jO(t,t+Math.max(s-1,0),o))}const m=OO(h,f,d);let g,v;l?0===t&&0===n&&s>0?(g=0,v=s-1):(g=m*xO((t+u)/(p+u)),v=m*bO((n+u)/(p+u))-1,v=wO(e-1,yO(v,m-1)),g=wO(v,yO(0,g))):(g=0,v=-1);const b=jO(g,v,o),{bottom:x,top:y}=TO(a,r,i,b),w=bO(e/m);return{bottom:x,itemHeight:p,items:b,itemWidth:f,offsetBottom:w*p+(w-1)*u-x,offsetTop:y,top:y}}))),S),SS(_S(I,DS((e=>null!==e)),IS((e=>e.length))),$),SS(_S(WS(k,C,S,E),DS((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),IS((([e,t,{items:n},r])=>{const{bottom:i,top:a}=TO(e,r,t,n);return[a,i]})),TS($k)),t);const L=BS(!1);SS(_S(c,NS(L),IS((([e,t])=>t||0!==e))),L);const P=PS(_S(WS(S,$),DS((([{items:e}])=>e.length>0)),NS(L),DS((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),IS((([[,e]])=>e-1)),TS())),z=PS(_S(VS(S),DS((({items:e})=>e.length>0&&0===e[0].index)),ES(0),TS())),H=PS(_S(VS(S),NS(R),DS((([{items:e},t])=>e.length>0&&!t)),IS((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),TS(wk),AS(0)));SS(H,f.scrollSeekRangeChanged),SS(_S(O,NS(k,C,$,E),IS((([e,t,n,r,i])=>{const a=Yk(e),{align:o,behavior:s,offset:l}=a;let c=a.index;"LAST"===c&&(c=r-1),c=yO(0,c,wO(r-1,c));let d=DO(t,i,n,c);return"end"===o?d=$O(d-t.height+n.height):"center"===o&&(d=$O(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=FS(_S(S,IS((e=>e.offsetBottom+e.bottom))),0);return SS(_S(y,IS((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:g,data:I,deviation:D,footerHeight:i,gap:E,headerHeight:a,increaseViewportBy:e,initialItemCount:j,itemDimensions:C,overscan:n,restoreStateFrom:M,scrollBy:o,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:O,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:v,viewportDimensions:k,windowScrollContainerState:b,windowScrollTo:x,windowViewportRect:y,...f,gridState:S,horizontalDirection:F,initialTopMostItemIndex:A,totalListHeight:W,...p,endReached:P,propsReady:m,rangeChanged:H,startReached:z,stateChanged:_,stateRestoreInProgress:R,...w}}),xS(oC,ek,eC,yC,Wk,wC,KS));function OO(e,t,n){return yO(1,xO((e+n)/(xO(t)+n)))}function TO(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const a=DO(e,t,n,r[0].index);return{bottom:DO(e,t,n,r[r.length-1].index)+i,top:a}}function DO(e,t,n,r){const i=OO(e.width,n.width,t.column),a=xO(r/i),o=a*n.height+yO(0,a-1)*t.row;return o>0?o+t.row:o}const IO=zS((()=>{const e=BS((e=>`Item ${e}`)),t=BS({}),n=BS(null),r=BS("virtuoso-grid-item"),i=BS("virtuoso-grid-list"),a=BS(zC),o=BS("div"),s=BS(gS),l=(e,n=null)=>FS(_S(t,IS((t=>t[e])),TS()),n),c=BS(!1),d=BS(!1);return SS(VS(d),c),{components:t,computeItemKey:a,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:o,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),EO=zS((([e,t])=>({...e,...t})),xS(CO,IO)),_O=Y.default.memo((function(){const n=PO("gridState"),r=PO("listClassName"),i=PO("itemClassName"),a=PO("itemContent"),o=PO("computeItemKey"),s=PO("isSeeking"),l=zO("scrollHeight"),c=PO("ItemComponent"),d=PO("ListComponent"),u=PO("ScrollSeekPlaceholder"),p=PO("context"),f=zO("itemDimensions"),h=zO("gap"),m=PO("log"),g=PO("stateRestoreInProgress"),v=zO("reportReadyState"),b=XS(Y.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();f({height:e,width:t})}h({column:VO("column-gap",getComputedStyle(e).columnGap,m),row:VO("row-gap",getComputedStyle(e).rowGap,m)})}),[l,f,h,m]),!0,!1);return AC((()=>{n.itemHeight>0&&n.itemWidth>0&&v(!0)}),[n]),g?null:e.jsx(d,{className:r,ref:b,...JC(d,p),"data-testid":"virtuoso-item-list",style:{paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},children:n.items.map((r=>{const l=o(r.index,r.data,p);return s?e.jsx(u,{...JC(u,p),height:n.itemHeight,index:r.index,width:n.itemWidth},l):t.createElement(c,{...JC(c,p),className:i,"data-index":r.index,key:l},a(r.index,r.data,p))}))})})),MO=Y.default.memo((function(){const t=PO("HeaderComponent"),n=zO("headerHeight"),r=PO("headerFooterTag"),i=XS(Y.default.useMemo((()=>e=>{n(Ck(e,"height"))}),[n]),!0,!1),a=PO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...JC(t,a)})}):null})),RO=Y.default.memo((function(){const t=PO("FooterComponent"),n=zO("footerHeight"),r=PO("headerFooterTag"),i=XS(Y.default.useMemo((()=>e=>{n(Ck(e,"height"))}),[n]),!0,!1),a=PO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...JC(t,a)})}):null})),AO=({children:t})=>{const n=Y.default.useContext(RC),r=zO("itemDimensions"),i=zO("viewportDimensions"),a=XS(Y.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return Y.default.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),e.jsx("div",{ref:a,style:ZC(!1),children:t})},NO=({children:t})=>{const n=Y.default.useContext(RC),r=zO("windowViewportRect"),i=zO("itemDimensions"),a=PO("customScrollParent"),o=JS(r,a,!1);return Y.default.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),e.jsx("div",{ref:o,style:ZC(!1),children:t})},BO=Y.default.memo((function({...t}){const n=PO("useWindowScroll"),r=PO("customScrollParent"),i=r||n?WO:HO,a=r||n?NO:AO,o=PO("context");return e.jsx(i,{...t,...JC(i,o),children:e.jsxs(a,{children:[e.jsx(MO,{}),e.jsx(_O,{}),e.jsx(RO,{})]})})})),{Component:FO,useEmitter:LO,useEmitterValue:PO,usePublisher:zO}=_C(EO,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},BO),HO=rO({useEmitter:LO,useEmitterValue:PO,usePublisher:zO}),WO=iO({useEmitter:LO,useEmitterValue:PO,usePublisher:zO});function VO(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,US.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const YO=Y.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),UO=({children:n})=>{const[r,i]=t.useState(-1);return e.jsx(YO.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:i}},{children:n}))},qO=q.default.div`
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
`,KO=q.default.div`
    background: transparent;
    padding: 0.5rem;
`,XO=q.default.ul`
    list-style-type: none;
`,GO=q.default.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Qo.Accent.Light[3]};

    ${e=>e.$active&&i.css`
            background: ${Qo.Accent.Light[5]};
        `}
`,ZO=q.default(C.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Qo.Primary};
`,QO=q.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,JO=q.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Qo.Primary};
`,eT=q.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Qo.Accent.Light[2]};
`,tT=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,nT=q.default($p)`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Qo.Primary};
`,rT=q.default(nT)`
    outline-offset: 0.25rem;
`,iT=q.default(nT)`
    padding: 0.5rem 1rem;
`,aT=q.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,oT=q.default.div`
    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,sT=q.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.125;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Qo.Validation.Red.Icon};
`,lT=e=>"small"===e?1:1.125,cT=e=>i.css`
        height: ${lT(e)}rem;
        width: ${lT(e)}rem;
    `,dT=q.default.div`
    background: ${Qo.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,uT=q.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,pT=q.default(wp)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,fT=q.default(y.MagnifierIcon)`
    color: ${Qo.Neutral[3]};
    flex-shrink: 0;
    ${e=>cT(e.$variant)}
`,hT=q.default(is)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Qo.Neutral[3]};
    cursor: pointer;

    ${e=>i.css`
            svg {
                ${cT(e.$variant)}
            }
        `}
`,mT=t.forwardRef(((t,n)=>{var{value:r,variant:i,onClear:a}=t,o=X(t,["value","variant","onClear"]);return e.jsxs(dT,{children:[e.jsxs(uT,{children:[e.jsx(fT,{$variant:i,"aria-hidden":!0}),e.jsx(pT,Object.assign({ref:n,value:r,$variant:i},o))]}),r&&e.jsx(hT,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:e.jsx(g.CrossIcon,{"aria-hidden":!0})}))]})})),gT=({listItems:n,multiSelect:r,selectedItems:i,disableItemFocus:a,itemsLoadState:o="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:p,topScrollItem:f,onSelectItem:h,onSelectAll:m,onDismiss:g,onRetry:v,valueExtractor:b,listExtractor:x,renderListItem:y,renderCustomCallToAction:w,enableSearch:$,hideNoResultsDisplay:j,searchPlaceholder:S="Search",searchFunction:k,onSearch:C})=>{const{focusedIndex:O,setFocusedIndex:T}=t.useContext(YO),[D,I]=t.useState(""),[E,_]=t.useState(n),M=fc(o),R=uc(),A=t.useRef(),N=t.useRef(),B=t.useRef([]),F=t.useRef(),L=t.useRef(null),P=e=>x?x(e):e.toString(),z=t.useCallback((e=>!!ij(i,(t=>oj(t,e)))),[i]),H=lc((()=>k(D))),W=lc((()=>n.filter((e=>{var t;const n=P(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=D.trim().toLowerCase();return r.includes(a)||i&&i.includes(a)})))),V=(e,t)=>{T(t),null==h||h(e,(e=>b?b(e):e)(e))},Y=e=>{const t=e.target.value;I(t),null==C||C()},U=()=>{var e;I(""),null===(e=F.current)||void 0===e||e.focus(),null==C||C()},q=()=>{null==v||v()};cc("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),O<E.length-1){const e=O+1;null===(t=B.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),O>0){const e=O-1;null===(n=B.current[e])||void 0===n||n.focus(),T(e)}else 0===O&&F.current&&(F.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===B.current[O]&&(e.preventDefault(),E[O]&&V(E[O],O))}})),t.useEffect((()=>{if(!f&&L.current)return void L.current.scrollTo({top:0});const e=setTimeout((()=>{const e=n.indexOf(f);L.current&&-1!==e&&(L.current.scrollToIndex({index:e}),T(e))}),0);return()=>clearTimeout(e)}),[B,n,T,f]),t.useEffect((()=>{var e,t,r;if(R)return;if(a)return;const i=n.findIndex((e=>z(e)));F.current?(T(-1),setTimeout((()=>F.current.focus()),200)):O>0?(null===(e=L.current)||void 0===e||e.scrollToIndex({index:O,align:"center"}),setTimeout((()=>{var e;return null===(e=B.current[O])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=L.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),T(i),setTimeout((()=>{var e;return null===(e=B.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(r=L.current)||void 0===r||r.scrollToIndex({index:0}),T(0),setTimeout((()=>{var e;return null===(e=B.current[0])||void 0===e?void 0:e.focus()}),200))}),[z,a,O,n,R,T]),t.useEffect((()=>{R&&M&&(a||"success"===o&&F.current&&(T(-1),F.current.focus()))}),[R,M,o,T,a]),t.useEffect((()=>{_(""===D?n:k?H():W())}),[H,W,n,k,D]);const K=t=>r?t?e.jsx(JO,{"aria-hidden":!0}):e.jsx(eT,{"aria-hidden":!0}):t?e.jsx(ZO,{"aria-hidden":!0}):e.jsx(QO,{}),X=(t,n)=>{const r=P(t),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel;return e.jsx(dS,{displayType:c,label:i,maxLines:l,selected:n,sublabel:a,truncationType:s,variant:d})},G=(t,n)=>{if(!v||v&&"success"===o){const i=z(t),a=n===O;return e.jsx(GO,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{T(e)})(n),ref:e=>{B.current[n]=e},role:"option",tabIndex:a?0:-1,$active:a},{children:y?y(t,{selected:i}):e.jsxs(e.Fragment,{children:[K(i),X(t,i)]})}),((e,t)=>`item_${t}__${b?b(e):e}`)(t,n))}},Z=()=>{if(($||k)&&"success"===o)return e.jsx(mT,{ref:F,onChange:Y,value:D,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:d})},Q=()=>{if(r&&E.length>0&&!D&&"success"===o)return e.jsx(tT,{children:e.jsx(iT,Object.assign({onClick:m,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},J=()=>{if(!j&&(D||!$)&&0===E.length&&"success"===o)return e.jsxs(aT,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(sT,{"data-testid":"no-result-icon",$variant:d}),e.jsx(oT,Object.assign({$variant:d},{children:"No results found."}))]}))},ee=()=>{if(v&&"loading"===o){const t="small"===d?16:18;return e.jsxs(aT,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Vs,{$buttonStyle:"secondary",size:t}),e.jsx(oT,Object.assign({$variant:d},{children:"Loading..."}))]}))}},te=()=>{if(v&&"fail"===o)return e.jsxs(aT,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(sT,{"data-testid":"load-error-icon",$variant:d}),e.jsx(oT,Object.assign({$variant:d},{children:"Failed to load."}))," ",e.jsx(rT,Object.assign({onClick:q,type:"button",$variant:d},{children:"Try again."}))]}))},ne=()=>{const t="test"===process.env.NODE_ENV;return e.jsx(XO,Object.assign({role:"listbox",id:u},{children:e.jsx(mO,Object.assign({ref:L,style:{height:"100%"},data:E,customScrollParent:A.current,itemContent:(e,t)=>G(t,e)},t?{initialItemCount:E.length}:{}),t?E.length:void 0)}))};return e.jsxs(qO,Object.assign({"data-testid":"dropdown-container",ref:A,$width:p},{children:[e.jsxs(KO,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[Z(),Q(),J(),ee(),te(),ne()]})),(()=>{if(w)return e.jsx("div",Object.assign({"data-testid":"custom-cta"},{children:w(g,E)}))})()]}))},vT=q.default($p)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>gs.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,bT=q.default.div`
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
`,xT=t.forwardRef((({children:t,disabled:n,expanded:r,listboxId:i,popupRole:a,readOnly:o,variant:s},l)=>e.jsxs(vT,Object.assign({ref:l,type:"button","aria-expanded":r,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:s},{children:[t,!o&&e.jsx(bT,Object.assign({$expanded:r,$variant:s},{children:e.jsx(p.ChevronDownIcon,{"aria-hidden":!0})}))]}))));var yT=Symbol.for("immer-nothing"),wT=Symbol.for("immer-draftable"),$T=Symbol.for("immer-state"),jT="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function ST(e,...t){if("production"!==process.env.NODE_ENV){const n=jT[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var kT=Object.getPrototypeOf;function CT(e){return!!e&&!!e[$T]}function OT(e){return!!e&&(DT(e)||Array.isArray(e)||!!e[wT]||!!e.constructor?.[wT]||RT(e)||AT(e))}var TT=Object.prototype.constructor.toString();function DT(e){if(!e||"object"!=typeof e)return!1;const t=kT(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===TT}function IT(e,t){0===ET(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function ET(e){const t=e[$T];return t?t.type_:Array.isArray(e)?1:RT(e)?2:AT(e)?3:0}function _T(e,t){return 2===ET(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function MT(e,t,n){const r=ET(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function RT(e){return e instanceof Map}function AT(e){return e instanceof Set}function NT(e){return e.copy_||e.base_}function BT(e,t){if(RT(e))return new Map(e);if(AT(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=DT(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[$T];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(kT(e),t)}{const t=kT(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function FT(e,t=!1){return PT(e)||CT(e)||!OT(e)||(ET(e)>1&&(e.set=e.add=e.clear=e.delete=LT),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>FT(t,!0)))),e}function LT(){ST(2)}function PT(e){return Object.isFrozen(e)}var zT,HT={};function WT(e){const t=HT[e];return t||ST(0,e),t}function VT(){return zT}function YT(e,t){t&&(WT("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function UT(e){qT(e),e.drafts_.forEach(XT),e.drafts_=null}function qT(e){e===zT&&(zT=e.parent_)}function KT(e){return zT={drafts_:[],parent_:zT,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function XT(e){const t=e[$T];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function GT(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[$T].modified_&&(UT(t),ST(4)),OT(e)&&(e=ZT(t,e),t.parent_||JT(t,e)),t.patches_&&WT("Patches").generateReplacementPatches_(n[$T].base_,e,t.patches_,t.inversePatches_)):e=ZT(t,n,[]),UT(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==yT?e:void 0}function ZT(e,t,n){if(PT(t))return t;const r=t[$T];if(!r)return IT(t,((i,a)=>QT(e,r,t,i,a,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return JT(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,a=!1;3===r.type_&&(i=new Set(t),t.clear(),a=!0),IT(i,((i,o)=>QT(e,r,t,i,o,n,a))),JT(e,t,!1),n&&e.patches_&&WT("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function QT(e,t,n,r,i,a,o){if("production"!==process.env.NODE_ENV&&i===n&&ST(5),CT(i)){const o=ZT(e,i,a&&t&&3!==t.type_&&!_T(t.assigned_,r)?a.concat(r):void 0);if(MT(n,r,o),!CT(o))return;e.canAutoFreeze_=!1}else o&&n.add(i);if(OT(i)&&!PT(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ZT(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||JT(e,i)}}function JT(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&FT(t,n)}var eD={get(e,t){if(t===$T)return e;const n=NT(e);if(!_T(n,t))return function(e,t,n){const r=rD(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!OT(r)?r:r===nD(e.base_,t)?(aD(e),e.copy_[t]=oD(r,e)):r},has:(e,t)=>t in NT(e),ownKeys:e=>Reflect.ownKeys(NT(e)),set(e,t,n){const r=rD(NT(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=nD(NT(e),t),i=r?.[$T];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||_T(e.base_,t)))return!0;aD(e),iD(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==nD(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,aD(e),iD(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=NT(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){ST(11)},getPrototypeOf:e=>kT(e.base_),setPrototypeOf(){ST(12)}},tD={};function nD(e,t){const n=e[$T];return(n?NT(n):e)[t]}function rD(e,t){if(!(t in e))return;let n=kT(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=kT(n)}}function iD(e){e.modified_||(e.modified_=!0,e.parent_&&iD(e.parent_))}function aD(e){e.copy_||(e.copy_=BT(e.base_,e.scope_.immer_.useStrictShallowCopy_))}IT(eD,((e,t)=>{tD[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),tD.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&ST(13),tD.set.call(this,e,t,void 0)},tD.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&ST(14),eD.set.call(this,e[0],t,n,e[0])};function oD(e,t){const n=RT(e)?WT("MapSet").proxyMap_(e,t):AT(e)?WT("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:VT(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=eD;n&&(i=[r],a=tD);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}(e,t);return(t?t.scope_:VT()).drafts_.push(n),n}function sD(e){if(!OT(e)||PT(e))return e;const t=e[$T];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=BT(e,t.scope_.immer_.useStrictShallowCopy_)}else n=BT(e,!0);return IT(n,((e,t)=>{MT(n,e,sD(t))})),t&&(t.finalized_=!1),n}var lD=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&ST(6),void 0!==n&&"function"!=typeof n&&ST(7),OT(e)){const i=KT(this),a=oD(e,void 0);let o=!0;try{r=t(a),o=!1}finally{o?UT(i):qT(i)}return YT(i,n),GT(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===yT&&(r=void 0),this.autoFreeze_&&FT(r,!0),n){const t=[],i=[];WT("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}ST(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){OT(e)||ST(8),CT(e)&&(e=function(e){CT(e)||ST(10,e);return sD(e)}(e));const t=KT(this),n=oD(e,void 0);return n[$T].isManual_=!0,qT(t),n}finishDraft(e,t){const n=e&&e[$T];n&&n.isManual_||ST(9);const{scope_:r}=n;return YT(r,t),GT(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=WT("Patches").applyPatches_;return CT(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},cD=lD.produce;lD.produceWithPatches.bind(lD),lD.setAutoFreeze.bind(lD),lD.setUseStrictShallowCopy.bind(lD),lD.applyPatches.bind(lD),lD.createDraft.bind(lD),lD.finishDraft.bind(lD);var dD=mw,uD=qw,pD=Ay,fD=Oi,hD=bw,mD=Fy,gD=cw,vD=Jy,bD=Object.prototype.hasOwnProperty;var xD=Ci((function(e){if(null==e)return!0;if(hD(e)&&(fD(e)||"string"==typeof e||"function"==typeof e.splice||mD(e)||vD(e)||pD(e)))return!e.length;var t=uD(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(gD(e))return!dD(e).length;for(var n in e)if(bD.call(e,n))return!1;return!0}));const yD=(e,t,n)=>{const r=cD(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],a=$D(i.keyPath);if(i.checked=t.has(a),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},wD=(e,t)=>{const[n,...r]=t;if(xD(e)||xD(n))return;const i=e.find((e=>e.key===n));return i&&r.length?wD(i.subItems,r):i},$D=e=>e.join(","),jD=e=>new Set(e.map((e=>e.join(",")))),SD=q.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,kD=q.default.div`
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
`,CD=q.default.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,OD=q.default.div`
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
`,TD=q.default.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,DD=q.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,ID=q.default(C.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Qo.Primary};
`,ED=q.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Qo.Primary};
`,_D=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:a="success",itemTruncationType:o="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:p,onSelectItem:f,onSelectAll:h,onRetry:m,enableSearch:g,hideNoResultsDisplay:v,searchPlaceholder:b="Search",onSearch:x})=>{const y=r||p,[w,$]=t.useState(""),j=w.toLowerCase().trim(),[S,k]=t.useState(!1),C=t.useRef(),T=t.useRef(),D=t.useRef([]),I=t.useRef(),E=uc(),[_,M]=t.useState([]),[R,A]=t.useState([]),N=S?R:_,B=t.useMemo((()=>{let e=0;for(const t of _)t.level>e&&(e=t.level);return e}),[_]),[F,L]=t.useState(0),[P,z]=t.useState([]),[H,W]=t.useState(0),V=e=>{const t=e.target.value;$(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==x||x()},Y=()=>{var e;$(""),k(!1),null===(e=I.current)||void 0===e||e.focus(),null==x||x()},U=()=>{null==m||m()},q=()=>{if(0===i.size){const e=[],t=[];_.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==h||h(e,t)}else null==h||h([],[])},K=lc(((e,t)=>((e,t,n,r,i)=>{const a=[],o=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var p,f;const h=s?s.level+1:0,m=s?[...s.keyPath,d.key]:[d.key],g=$D(m),v={item:d,index:a.length,indexInParent:u,parentSetSize:e.length,keyPath:m,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:h,visible:0===h||i||(null==s?void 0:s.expanded),expanded:i,checked:t.has(g),hasSubItems:!!(null===(p=d.subItems)||void 0===p?void 0:p.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(v),a.push(v),null===(f=d.subItems)||void 0===f?void 0:f.length){const e=o(d.subItems,v);if(n&&!0!==v.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?v.checked=!0:n&&(v.checked="mixed")}v.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),v.subItemIndexes=e.map((e=>e.index))}})),l};return o(e,void 0),a})(e,i,r,j,t))),X=lc((e=>{return i.size?(t=K(e,!1),cD(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>cD(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),a=e[n].keyPath.slice(0,i.length);oj(i,a)&&(r.visible=!0)}return e})))(K(e,!1));var t})),G=lc((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(j))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),Z=lc((()=>{M((e=>yD(e,i,r))),S&&A((e=>yD(e,i,r)))})),Q=(e,t,n)=>{const r=((e,t,n)=>cD(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,r.length);if(!oj(r,o))break;t.visible=n&&a.expanded&&a.visible}})))(N,e,t);L(e),W(n),S?A(r):M(r)};cc("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(N,(e=>e.visible),F+1);t&&(W((e=>e+1)),L(t.index),D.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(N,(e=>e.visible),F-1);t?(W((e=>e-1)),L(t.index),D.current[t.index].focus()):0===H&&I.current&&(I.current.focus(),W(-1),L(-1));break}case"ArrowRight":e.preventDefault(),Q(F,!0,H);break;case"ArrowLeft":e.preventDefault(),Q(F,!1,H);break;case"Space":if(document.activeElement===D.current[F]){e.preventDefault();const t=N[F];if(t.hasSubItems&&!y)return;null==f||f(t)}}})),t.useEffect((()=>{let e;"default"===u?e=X(n):"expand"===u?e=K(n,!0):"collapse"===u&&(e=K(n,!1)),M(e)}),[K,X,n,u]),t.useEffect((()=>{z(N.filter((e=>e.visible)))}),[S,N]),t.useEffect((()=>{Z()}),[r,i,Z]),t.useEffect((()=>{if(S&&w.trim().length>=3){const e=G(n),t=(e=>cD(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(K(e,!1));A(t)}}),[G,K,n,S,w]),t.useEffect((()=>{E||(I.current?(L(-1),W(-1),setTimeout((()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.focus()}),200)):D.current[F]?setTimeout((()=>{var e;return null===(e=D.current[F])||void 0===e?void 0:e.focus()}),200):(L(0),W(0),setTimeout((()=>{var e;return null===(e=D.current[0])||void 0===e?void 0:e.focus()}),200)))}),[F,H,E]);const J=()=>{if(g&&"success"===a)return e.jsx(mT,{ref:I,onChange:V,value:w,placeholder:b,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:l})},ee=()=>{if(r&&!S&&_.length>0&&"success"===a)return e.jsx(tT,{children:e.jsx(iT,Object.assign({onClick:q,type:"button",$variant:l},{children:0===i.size?"Select all":"Clear all"}))})},te=()=>{if(!v&&S&&0===R.length&&"success"===a)return e.jsxs(aT,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(sT,{$variant:l}),e.jsx(oT,Object.assign({$variant:l},{children:"No results found."}))]}))},ne=()=>{if(m&&"loading"===a){const t="small"===l?16:18;return e.jsxs(aT,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Vs,{$buttonStyle:"secondary",size:t}),e.jsx(oT,Object.assign({$variant:l},{children:"Loading..."}))]}))}},re=()=>{if(m&&"fail"===a)return e.jsxs(aT,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(sT,{"data-testid":"load-error-icon",$variant:l}),e.jsx(oT,Object.assign({$variant:l},{children:"Failed to load."}))," ",e.jsx(rT,Object.assign({onClick:U,type:"button",$variant:l},{children:"Try again."}))]}))},ie=t=>{if(r)switch(t.checked){case"mixed":return e.jsx(ED,{"aria-hidden":!0});case!0:return e.jsx(JO,{"aria-hidden":!0});default:return e.jsx(eT,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(DD,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e.jsx(ID,{"aria-hidden":!0})}))},ae=(t,n)=>{const{level:i,visible:a,expanded:l,keyPath:c,checked:d,hasSubItems:u,indexInParent:p,parentSetSize:h}=t,m=t.index,g=H===n,v=u&&!y;return e.jsxs(SD,Object.assign({$visible:a},{children:[B>0&&e.jsx(CD,{$level:i}),B>0&&!u&&r&&e.jsx(TD,{}),e.jsxs(kD,Object.assign({"aria-checked":d,"aria-selected":!!d,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":p+1,"aria-setsize":h,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),v?Q(m,!l,n):((e,t)=>{W(t),L(e),null==f||f(N[e])})(m,n)},onMouseEnter:()=>((e,t)=>{L(t.index),W(e)})(n,t),ref:e=>D.current[t.index]=e,role:"treeitem",tabIndex:g?0:-1,$active:g,$toggleable:v},{children:[u&&e.jsx(OD,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),Q(m,!l,n)},$expanded:l},{children:e.jsx(O.CaretRightIcon,{})})),ie(t),e.jsx(dS,{bold:u,searchTerm:S?j:void 0,label:t.item.label,selected:!!d,truncationType:o,maxLines:s})]}))]}),`[${c.join("---")}]`)},oe=()=>{const t="test"===process.env.NODE_ENV;return e.jsx("div",Object.assign({"aria-multiselectable":r,id:c,ref:T,role:"tree"},{children:e.jsx(mO,Object.assign({style:{height:"100%"},customScrollParent:C.current,data:P,itemContent:(e,t)=>ae(t,e)},t?{initialItemCount:P.length}:{}),t?P.length:void 0)}))};return e.jsx(qO,Object.assign({"data-testid":"dropdown-container",ref:C,$width:d},{children:e.jsxs(KO,Object.assign({"data-testid":"nested-dropdown-list"},{children:[J(),ee(),te(),ne(),re(),oe()]}))}))},MD=({selectedOptions:n,placeholder:r="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:p,valueExtractor:f,listExtractor:h,onSelectOptions:m,onShowOptions:g,onHideOptions:v,onRetry:b,optionsLoadState:x="success",optionTruncationType:y="end",renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,onBlur:S,variant:k="default",readOnly:C,alignment:O,dropdownZIndex:T})=>{const[D,I]=t.useState(n||[]),[E,_]=t.useState(!1),[M,R]=t.useState(!1),[A]=t.useState((()=>oc.generate())),N=t.useRef(),B=t.useRef();t.useEffect((()=>{I(n||[])}),[n]);const F=()=>{D&&D.length>0?(I([]),V([])):(I(i),V(i))},L=(e,t)=>{const n=[...D],r=rj(D,(e=>(f?f(e):e)===t));r>-1?n.splice(r,1):n.push(e),I(n),V(n)},P=()=>{E&&(_(!1),W(!1))},z=()=>{M||E||R(!0)},H=e=>{M&&!E&&N.current&&!N.current.contains(e.relatedTarget)&&(R(!1),null==S||S())},W=e=>{!e&&v&&v(),e&&g&&g()},V=e=>{m&&m(e)};return e.jsx(UO,{children:e.jsx(hp,{enabled:!C&&!a,isOpen:E,renderElement:()=>e.jsx(xp,Object.assign({className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:z,onBlur:H,$focused:M,$disabled:a,$readOnly:C,$error:o},{children:e.jsx(xT,Object.assign({ref:B,disabled:a,expanded:E,listboxId:A,popupRole:"listbox",readOnly:C,variant:k},{children:e.jsx(op,Object.assign({$disabled:a},{children:D&&0!==D.length?e.jsx(sp,Object.assign({$variant:k},{children:i&&D.length===i.length?"All selected":`${D.length} selected`})):e.jsx(lp,Object.assign({truncateType:y,$variant:k},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(gT,{listboxId:A,listItems:i,onSelectItem:L,onDismiss:P,valueExtractor:f,listExtractor:h,enableSearch:d,searchFunction:u,searchPlaceholder:p,multiSelect:!0,selectedItems:D,onSelectAll:F,onRetry:b,itemsLoadState:x,itemTruncationType:y,renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,variant:k,width:t}),onOpen:()=>{_(!0),W(!0),R(!0)},onClose:e=>{_(!1),W(!1),"click"!==e&&(R(!1),null==S||S())},onDismiss:()=>{var e;null===(e=B.current)||void 0===e||e.focus(),_(!1),W(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:T})})},RD=(e,t)=>{const[n,...r]=t;if(xD(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?RD(i.subItems,r):i:void 0},AD=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...AD(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},ND=({placeholder:n="Select",options:r,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:h,readOnly:m,onSearch:g,onSelectOptions:v,onShowOptions:b,onHideOptions:x,onRetry:y,onBlur:w,optionsLoadState:$="success",optionTruncationType:j="end",variant:S,alignment:k,dropdownZIndex:C})=>{const O=r,[T,D]=t.useState(c?jD(c):new Set),[I,E]=t.useState([]),[_,M]=t.useState(!1),[R,A]=t.useState(!1),[N]=t.useState((()=>oc.generate())),B=t.useRef(),F=t.useRef(),L=t.useRef();t.useEffect((()=>{const e=c||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],a=RD(e,i);a&&n.push({value:a.value,label:a.label,keyPath:i})}return n})(O,e);D(jD(e)),E(t)}),[c,O]);const P=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));D(jD(e)),E(n),q(e,n)},z=e=>{const t=K(e),n=t.map((e=>e.keyPath));E(t),D(jD(n)),q(n,t)},H=()=>{R||_||A(!0)},W=e=>{R&&!_&&B.current&&!B.current.contains(e.relatedTarget)&&(A(!1),null==w||w())},V=()=>{const{label:e,value:t}=I[0];return I.length>1?`${I.length} selected`:u?u(t)||t.toString():e},Y=e=>{if("middle"===j){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),sc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&x&&x(),e&&b&&b()},q=(e,t)=>{if(v){const n=t.map((e=>e.value));v(e,n)}},K=e=>{if(!0===e.checked)return I.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!oj(e.keyPath,n)}));{const t=[...I],n=e.hasSubItems?((e,t)=>{const n=RD(e,t);return n&&n.subItems?AD(n.subItems,t):[]})(O,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{I.find((t=>oj(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(hp,{enabled:!m&&!i,isOpen:_,renderElement:()=>e.jsx(xp,Object.assign({className:o,"data-testid":s,id:l,ref:B,tabIndex:-1,onFocus:H,onBlur:W,$focused:R,$disabled:i,$readOnly:m,$error:a},{children:e.jsx(xT,Object.assign({ref:F,disabled:i,expanded:_,listboxId:N,popupRole:"tree",readOnly:m,variant:S},{children:e.jsx(op,Object.assign({ref:L,$disabled:i},{children:xD(I)?e.jsx(lp,Object.assign({truncateType:j},{children:n})):e.jsx(sp,Object.assign({truncateType:j},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(_D,{listboxId:N,listItems:O,multiSelect:!0,selectedKeyPaths:T,itemsLoadState:$,itemTruncationType:j,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:h,onSelectItem:z,onSelectAll:P,onRetry:y,onSearch:g,variant:S,mode:d,width:t}),onOpen:()=>{M(!0),U(!0),A(!0)},onClose:e=>{M(!1),U(!1),"click"!==e&&(A(!1),null==w||w())},onDismiss:()=>{var e;null===(e=F.current)||void 0===e||e.focus(),M(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:C})},BD=({placeholder:n="Select",options:r,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:p,searchPlaceholder:f,selectableCategory:h,hideNoResultsDisplay:m,readOnly:g,onBlur:v,onSearch:b,onSelectOption:x,onShowOptions:y,onHideOptions:w,onRetry:$,optionsLoadState:j="success",optionTruncationType:S="end",variant:k,alignment:C,dropdownZIndex:O})=>{const T=r,[D,I]=t.useState(c?jD([c]):new Set),[E,_]=t.useState(),[M,R]=t.useState(!1),[A,N]=t.useState(!1),[B]=t.useState((()=>oc.generate())),F=t.useRef(),L=t.useRef(),P=t.useRef();t.useEffect((()=>{I(c?jD([c]):new Set);const e=wD(T,c||[]);_(null!=e?e:void 0)}),[c,T]);const z=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;I(jD([n])),_({label:r,value:i}),R(!1),U(!1),null===(t=L.current)||void 0===t||t.focus(),null==x||x(n,i)},H=()=>{A||M||N(!0)},W=e=>{A&&!M&&F.current&&!F.current.contains(e.relatedTarget)&&(N(!1),null==v||v())},V=()=>{const{label:e,value:t}=E;return u?u(t)||t.toString():e},Y=e=>{if("middle"===S){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),sc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&w&&w(),e&&y&&y()};return e.jsx(hp,{enabled:!g&&!i,isOpen:M,renderElement:()=>e.jsx(xp,Object.assign({className:o,"data-testid":s,id:l,ref:F,tabIndex:-1,onFocus:H,onBlur:W,$focused:A,$disabled:i,$readOnly:g,$error:a},{children:e.jsx(xT,Object.assign({ref:L,disabled:i,expanded:M,listboxId:B,popupRole:"tree",readOnly:g,variant:k},{children:e.jsx(op,Object.assign({ref:P,$disabled:i},{children:xD(E)?e.jsx(lp,Object.assign({truncateType:S},{children:n})):e.jsx(sp,Object.assign({truncateType:S},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(_D,{listboxId:B,listItems:T,selectedKeyPaths:D,selectableCategory:h,itemsLoadState:j,itemTruncationType:S,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,onSelectItem:z,onRetry:$,onSearch:b,variant:k,mode:d,width:t}),onOpen:()=>{R(!0),U(!0),N(!0)},onClose:e=>{R(!1),U(!1),"click"!==e&&(N(!1),null==v||v())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),R(!1),U(!1)},clickToToggle:!0,offset:8,alignment:C,fitAvailableHeight:!0,customZIndex:O})};var FD=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var LD=function(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}(),PD=$w;var zD=bw;var HD=function(e,t){return function(n,r){if(null==n)return n;if(!zD(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}((function(e,t){return e&&LD(e,t,PD)}));var WD=FD,VD=HD,YD=V$,UD=function(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n},qD=Oi;var KD=function(e,t,n){var r=qD(e)?WD:UD,i=arguments.length<3;return r(e,YD(t),n,i,VD)},XD=Ci(KD);const GD=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],ZD=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var QD;!function(e){e.getCountries=()=>[].concat(...GD.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:ZD("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const a=i.join(" ");return XD(a,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(QD||(QD={}));const JD=n=>{var{onChange:r,value:i,allowClear:a,onClear:o,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:p,onHideOptions:f,onShowOptions:h,placeholder:m,autoComplete:g}=n,v=X(n,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[b]=t.useState(QD.getCountries()),[x,y]=t.useState(void 0),[w,$]=t.useState(""),j=t.useRef(),S=pc({ref:j,formatter:e=>QD.formatNumber(e.replace(/[^0-9]/g,""),x)});t.useEffect((()=>{const e=b.filter((e=>e.countryCode===eI(null==i?void 0:i.countryCode)))[0];y(e),$(QD.formatNumber(null==i?void 0:i.number,e))}),[i]);const k=e=>{O(w,e),r&&C(w,e)},C=(e,t)=>{const n=QD.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&tI(t.countryCode)})},O=(e,t)=>{$(QD.formatNumber(e,t)),y(t)};return e.jsx(zj,Object.assign({ref:j,value:w,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=S();t(),O(e,x),r&&C(e,x)},allowClear:a&&!!w,onClear:()=>{o?o():$("")},onBlur:s,error:l,placeholder:m,addon:c?{type:"label",attributes:{value:tI(null==x?void 0:x.countryCode)}}:{type:"list",attributes:{placeholder:d,options:b,selectedOption:x,enableSearch:p,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:tI(e.countryCode)}),onSelectOption:k,onHideOptions:f,onShowOptions:h}},inputMode:"numeric",autoComplete:g},v))},eI=e=>e?e.replace("+",""):"",tI=e=>e?e.includes("+")?e:`+${e}`:"",nI=({className:n,"data-testid":r,selectedOption:i,minimumCharacters:a=3,fetchOptions:o,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:p,displayValueExtractor:f=e=>e.toString(),onSelectOption:h})=>{const m=i&&f(i),[g,v]=t.useState(m||""),[b,x]=t.useState(m||""),[y,w]=t.useState([]),[$,j]=t.useState(!0),[S,k]=t.useState(!1),[C,O]=t.useState(!!i),[T,D]=t.useState(i),I=t.useRef(o),E=e=>G(void 0,void 0,void 0,(function*(){k(!1),j(!0);try{const t=yield I.current(e);x(e),w(t),j(!1)}catch(e){k(!0)}})),_=t.useCallback(Zd((e=>E(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{I.current=o}),[o]),t.useEffect((()=>{g&&g.length>=a&&g!==b?_(g):_.cancel(),""===g&&T&&(h&&h(void 0,void 0),A(),D(void 0)),i&&g!==f(i)&&O(!1)}),[g,i]),t.useEffect((()=>{v(i?f(i):""),A(i),D(i)}),[i]);const M=e=>{v(e.target.value)},R=(e,t)=>{h&&h(e,t)},A=e=>{x(e?f(e):""),O(!!e),w([]),j(!0)},N=()=>{v(""),h&&h(void 0,void 0),A()},B=()=>{C||T?(A(T),v(f(T)),h&&h(T,L(T)),D(T)):N()},F=()=>g&&g.length>=a&&!C,L=e=>u?u(e):e,P=()=>e.jsx(Lx,{type:"text",value:g,onChange:M,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:N,styleType:"no-border",onBlur:g.length<a?B:void 0});return e.jsxs(cp,Object.assign({className:n,show:F(),error:d&&!F(),disabled:c,readOnly:l,testId:r,onBlur:B},{children:[l?e.jsx(e.Fragment,{children:P()}):e.jsx(np,{children:P()}),!l&&F()&&e.jsx(ap,{}),e.jsx(Ij,{listItems:y,onSelectItem:R,valueExtractor:u,listExtractor:p,itemsLoadState:S?"fail":$?"loading":"success",visible:F(),disableItemFocus:!0,onRetry:()=>E(g),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},rI=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,iI=q.default(Nx)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,aI=q.default(tp)`
    padding-right: 2.75rem;
`,oI=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:a,disabled:o,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:p=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:m,valueToStringFunction:g,listExtractor:v,displayValueExtractor:b,onSelectOption:x,listStyleWidth:y,onShowOptions:w,onHideOptions:$,onRetry:j,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:k="middle",renderCustomSelectedOption:C,renderListItem:O,renderCustomCallToAction:T}=n,D=X(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,E]=t.useState(),[_,M]=t.useState(),R=t.useRef(),A={from:t.useRef(),to:t.useRef()},[N,B]=t.useState("none");t.useEffect((()=>{E(null==r?void 0:r.from),M(null==r?void 0:r.to)}),[r]);const F=e=>t=>{t.stopPropagation(),t.preventDefault(),o||l||B("from"===e?"from":"to"===e&&I?"to":"from")},L=e=>{const t="from"===e?I:_;return b?b(t):m?m(t):null==t?void 0:t.toString()},P=(e,t)=>{if("middle"===k){let n=0;return A[e]&&A[e].current&&(n=A[e].current.getBoundingClientRect().width),sc.truncateOneLine((e=>"string"==typeof e?e:g(e)||e.toString())(t),n,120,8)}return t},z=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const n="from"===t?I:_;return n?C?C(n):e.jsx(sp,Object.assign({truncateType:k},{children:P(t,L(t))})):e.jsx(lp,Object.assign({truncateType:k},{children:P(t,i[t])}))},W=t=>e.jsx(op,Object.assign({onClick:F(t),ref:A[t],$disabled:o},{children:H(t)}));return e.jsxs(cp,Object.assign({show:"none"!==N,"data-testid":D["data-testid"],error:c&&!("none"!==N),disabled:o,readOnly:l,testId:d,onBlur:()=>{z(!1),B("none"),I&&_||(M(void 0),E(void 0))},className:s},{children:[e.jsxs(rI,{children:[e.jsx(aI,Object.assign({type:"button","data-testid":u||"selector",disabled:o,ref:R,onClick:F()},D,{children:e.jsxs(Wp,Object.assign({currentActive:(()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}})()},{children:[W("from"),W("to")]}))})),"none"===N&&I&&_&&!l&&!o&&e.jsx(iI,Object.assign({onClick:e=>{e.stopPropagation(),E(void 0),M(void 0),x&&x({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e.jsx(Bx,{"aria-hidden":!0})}))]}),"none"!==N&&e.jsx(ap,{}),(()=>{if("none"===N)return null;const t=a[N];if(t&&t.length>0){const n="from"===N?I:_;return e.jsx(Ij,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=N)?E(n):M(n),z(!1),R&&R.current&&R.current.focus(),x&&x({[i]:n},r),void("from"===i?(M(void 0),B("to"),z(!0)):B("none"));var n,r,i},onDismiss:()=>(B("none"),z(!1),R&&R.current&&R.current.focus(),void(I&&_||(M(void 0),E(void 0)))),valueExtractor:m,listExtractor:v,listStyleWidth:y,visible:!0,enableSearch:p,searchPlaceholder:h,searchFunction:f,"data-testid":`${N}-dropdown-list`,selectedItems:n?[n]:[],onRetry:j,itemsLoadState:S[N],itemTruncationType:k,renderListItem:O,renderCustomCallToAction:T})}return null})()]}))},sI=({selectedOption:n,placeholder:r="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:h,listExtractor:m,displayValueExtractor:g,onSelectOption:v,onShowOptions:b,onHideOptions:x,onRetry:y,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:j,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,onBlur:O,variant:T="default",readOnly:D,alignment:I,dropdownZIndex:E})=>{const[_,M]=t.useState(n),[R,A]=t.useState(!1),[N,B]=t.useState(!1),[F]=t.useState((()=>oc.generate())),L=t.useRef(),P=t.useRef(),z=t.useRef();t.useEffect((()=>{M(n)}),[n]);const H=(e,t)=>{var n;null===(n=P.current)||void 0===n||n.focus(),M(e),A(!1),q(!1),null==v||v(e,t)},W=()=>{R&&(A(!1),q(!1))},V=()=>{N||R||B(!0)},Y=e=>{N&&!R&&L.current&&!L.current.contains(e.relatedTarget)&&(B(!1),null==O||O())},U=e=>{if("middle"===$){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),sc.truncateOneLine((e=>"string"==typeof e?e:h(e)||e.toString())(e),t,120,8)}return e},q=e=>{e?null==b||b():null==x||x()};return e.jsx(UO,{children:e.jsx(hp,{enabled:!D&&!a,isOpen:R,renderElement:()=>e.jsx(xp,Object.assign({className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:V,onBlur:Y,$focused:N,$disabled:a,$readOnly:D,$error:o},{children:e.jsx(xT,Object.assign({ref:P,disabled:a,expanded:R,listboxId:F,popupRole:"listbox",readOnly:D,variant:T},{children:e.jsx(op,Object.assign({ref:z,$disabled:a},{children:_?j?j(_):e.jsx(sp,Object.assign({truncateType:$,$variant:T},{children:U(g?g(_):f?f(_):_.toString())})):e.jsx(lp,Object.assign({truncateType:$,$variant:T},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(gT,{listboxId:F,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:f,listExtractor:m,enableSearch:d,searchPlaceholder:p,searchFunction:u,selectedItems:_?[_]:[],onRetry:y,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,variant:T,width:t}),onOpen:()=>{A(!0),q(!0),B(!0)},onClose:e=>{A(!1),q(!1),"click"!==e&&(B(!1),null==O||O())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1),q(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:E})})},lI=q.default.div`
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
`,cI=q.default.div`
    display: flex;
    align-items: baseline;
`,dI=q.default.div`
    margin: 0 0.5rem;
`,uI=q.default.div`
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
`,pI=q.default(uI)`
    color: ${Qo.Neutral[3]};
`,fI=n=>{var{alignment:r="left",className:i,disabled:a,dropdownZIndex:o,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:p,optionTruncationType:f="end",placeholder:h="Select",rangeLabelPrefix:m,rangeLabelSuffix:g,readOnly:v,renderRangeLabel:b,value:x}=n,y=X(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:j,ariaLabels:S}=l,[k,C]=t.useState(H()),[O,T]=t.useState(!1),[D,I]=t.useState(!1),[E]=t.useState((()=>oc.generate())),_=$.map((e=>e.minValue)),M=Math.min(..._),R=t.useRef(),A=t.useRef(),N=t.useRef(),B=y["data-testid"]||"select-histogram";t.useEffect((()=>{x!==k&&C(H())}),[x]);const F=e=>{C(e),null==u||u(e)},L=e=>{C(e),null==p||p(e)},P=()=>{D||O||I(!0)},z=e=>{D&&!O&&R.current&&!R.current.contains(e.relatedTarget)&&(I(!1),null==d||d())};function H(){return null!=x?x:[M,M+w]}const W=t=>b?b(t):e.jsxs(exports.Text.Body,{children:[m,t,g]});return e.jsx(UO,{children:e.jsx(hp,{enabled:!v&&!a,isOpen:O,renderElement:()=>e.jsx(xp,Object.assign({className:i,"data-testid":B,id:c,ref:R,tabIndex:-1,onFocus:P,onBlur:z,$focused:D,$disabled:a,$readOnly:v,$error:s},{children:e.jsx(xT,Object.assign({ref:A,disabled:a,expanded:O,listboxId:E,popupRole:"dialog",readOnly:v,variant:"default"},{children:e.jsx(op,Object.assign({ref:N,$disabled:a},{children:_&&0!==_.length?e.jsxs(cI,{children:[W(k[0]),e.jsx(dI,{children:"-"}),W(k[1])]}):e.jsx(pI,Object.assign({truncateType:f,$variant:"default"},{children:h}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(lI,Object.assign({style:{width:t}},{children:e.jsx(Rx,{interval:w,value:k,bins:$,onChange:F,onChangeEnd:L,showRangeLabels:!1,renderEmptyView:j,ariaLabels:S})})),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{var e;null===(e=A.current)||void 0===e||e.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:o})})},hI=n=>{var{value:r,ariaLabel:i,onChange:a,onChangeEnd:o}=n,s=X(n,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e.jsx(Tx,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==a||a(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:i?[i]:void 0}))},mI=q.default(exports.Text.H6)`
    text-align: right;
    color: ${Qo.Neutral[3]};

    ${e=>{if(e.disabled)return i.css`
                color: ${Qo.Neutral[4](e)};
            `}}
`,gI=({value:n,maxLength:r,disabled:i,renderCustomCounter:a})=>{const[o,s]=t.useState("");t.useEffect((()=>{s(l(`${n||""}`))}),[n,r]);const l=e=>{if(a)return a(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:Y.default.isValidElement(o)?o:e.jsx(mI,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:i},{children:o}))})},vI=q.default.div`
    display: flex;
    flex-direction: column;
`,bI=q.default.textarea`
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
`,xI=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:a,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=n,p=X(n,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[f,h]=t.useState(i);t.useEffect((()=>{h(i)}),[i]);return e.jsx(bI,Object.assign({ref:r,disabled:a,value:l?l+(null!=f?f:""):f,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(h(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;h(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:o,rows:s,maxLength:l?l.length+u:u},p))})),yI=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:a,rows:o=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=n,p=X(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,h]=t.useState(i);t.useEffect((()=>{h(i)}),[i]);return e.jsxs(vI,{children:[e.jsx(xI,Object.assign({ref:r,disabled:a,value:f,rows:o||5,onChange:e=>{const t=e.target.value;h(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},p)),d&&e.jsx(gI,{disabled:a,value:f,maxLength:d,renderCustomCounter:u})]})})),wI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,$I=q.default.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,jI=q.default(Zb)`
    margin-top: 0;
`,SI=Y.default.forwardRef(((n,r)=>{const{label:i,value:a,errorMessage:o,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:p,tabletCols:f,desktopCols:h,transformValue:m,prefix:g=""}=n,v=X(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[b,x]=t.useState(a);t.useEffect((()=>{x(a)}),[a]);return e.jsxs(dx,Object.assign({id:s,label:i,disabled:v.disabled,layoutType:u,mobileCols:p,tabletCols:f,desktopCols:h},{children:[e.jsx(xI,Object.assign({id:`${s}-base`,"data-testid":c||s,value:b,error:!!o,onChange:e=>{const t=e.target.value;x(t),d&&d(e)},ref:r,prefix:g,transformValue:m},v)),o||v.maxLength?e.jsxs(wI,{children:[o&&e.jsx($I,{children:e.jsx(jI,Object.assign({weight:"semibold","data-testid":l||(s?`${s}-error-message`:"error-message")},{children:o}))}),v.maxLength&&e.jsx(gI,{disabled:v.disabled,value:b,maxLength:v.maxLength,renderCustomCounter:v.renderCustomCounter})]}):e.jsx(e.Fragment,{})]}))})),kI=q.default.div`
    position: relative;
`,CI=q.default(yp)`
    height: 3rem;
    gap: 0.5rem;
`,OI=q.default(wp)`
    display: block;
    width: 100%;
    flex: 1;
`,TI=q.default.div`
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
`,DI=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=n?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":a=n?e.jsx(I.CircleDotIcon,{}):e.jsx(D.CircleIcon,{});break;case"tick":a=e.jsx(C.TickIcon,{});break;case"cross":a=e.jsx(g.CrossIcon,{});break;default:a=null}return e.jsx(TI,Object.assign({className:i,$active:n,disabled:r},{children:a}))},II=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,EI=q.default.ol`
    ${e=>II(e.bottomMargin)}
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
`,_I=q.default.ul`
    ${e=>II(e.bottomMargin)}
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
`,MI={Ul:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(_I,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(EI,Object.assign({size:n},i,{children:r}))}},RI=q.default.div`
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
`,AI=q.default.input`
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
`,NI=q.default.div`
    display: flex;
`,BI=q.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,FI=q.default.label`
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
`,LI=q.default.div`
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
`,PI=q.default.div`
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
`,zI=q.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,HI=q.default.button`
    color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Validation.Red.Icon};
    white-space: nowrap;
    ${gs.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,WI=q.default.button`
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
`,VI=q.default.div`
    width: 100%;
    color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,YI=q.default(al)`
    width: 100%;
    user-select: none;
`,UI=q.default.div`
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
`,qI=q.default(exports.Text.BodySmall)`
    color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Validation.Red.Text};
`,KI=q.default(MI.Ul)`
    li {
        color: ${e=>e.$disabled?Qo.Neutral[3]:Qo.Validation.Red.Text};
    }
`,XI=({type:n="checkbox",indicator:i,checked:a,styleType:o="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:f,id:h,className:m,compositeSection:g,removable:v,onRemove:b,"data-testid":x,onChange:y,useContentWidth:w})=>{const{collapsible:$=!0,errors:j,children:S,initialExpanded:k}=g||{},[C,O]=t.useState(a),[T,D]=t.useState(k),I=t.useMemo((()=>{const e=Array.isArray(j)&&(null==j?void 0:j.length)>0,t=!Array.isArray(j)&&!!j;return e||t}),[j]),[E]=t.useState(oc.generate()),_=h?`${h}`:`tg-${E}`,M=t.useRef();t.useEffect((()=>{O(a)}),[a]),t.useEffect((()=>{C&&D(null==k||k)}),[C]);const R=e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":C||O(!0)}}},A=()=>{d||D(!T)},N=()=>{d||!b||b()},B=()=>{var e;null===(e=null==M?void 0:M.current)||void 0===e||e.click()},F=e=>{e.stopPropagation()},L=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e.jsx(DI,{type:t,active:C,disabled:d})},P=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(LI,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:C},{children:t}))},z=()=>{const t=!T&&!I;return $&&e.jsxs(WI,Object.assign({$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":T?"collapse-button":"expand-button"},{children:[T?"Show less":"Show more",T?e.jsx(r.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(p.ChevronDownIcon,{"aria-hidden":!0})]}))},H=t=>e.jsxs(e.Fragment,{children:[e.jsx(qI,Object.assign({weight:"semibold",$disabled:d},{children:"Error"})),e.jsx(KI,Object.assign({$disabled:d},{children:null==t?void 0:t.map(((t,n)=>e.jsx("li",Object.assign({id:`${_}-error-list-item-${n}`},{children:e.jsx(qI,Object.assign({weight:"semibold",$disabled:d},{children:t}))}),n)))}))]});return e.jsxs(RI,Object.assign({$selected:C,$disabled:d,className:m,$styleType:o,$error:u,$indicator:i,$useContentWidth:w,id:h,"data-testid":x},{children:[e.jsxs(PI,Object.assign({id:`${_}-header-container`,$disabled:d,$error:u,$selected:C,$indicator:i,$styleType:o},{children:[e.jsx(zI,Object.assign({$addPadding:v},{children:e.jsxs(NI,Object.assign({id:`${_}-input-container`,onClick:B},{children:[e.jsx(AI,{ref:M,name:f,id:`${_}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:R,onClick:F,checked:C}),i&&L(),e.jsxs(BI,{children:[e.jsx(FI,Object.assign({htmlFor:`${_}-input`,$selected:C,$indicator:i,$disabled:d,"data-testid":`${_}-toggle-label`,$maxLines:l},{children:s})),c&&P()]})]}))})),v&&e.jsx(HI,Object.assign({type:"button",$disabled:d,onClick:N,id:`${_}-remove-button`},{children:"Remove"}))]})),S&&e.jsxs("div",{children:[(!$||T)&&e.jsx(UI,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d},{children:S})),$&&!T&&I&&e.jsx(VI,Object.assign({$disabled:d,onClick:A,id:`${_}-error-alert`},{children:e.jsx(YI,Object.assign({type:d?"description":"error",className:m,showIcon:!0},{children:Array.isArray(j)?H(j):j}))})),z()]})]}))},GI=q.default(Si.div)`
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
`,ZI=q.default.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,QI=q.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ts.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,JI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${ts.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,eE=q.default.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${ts.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,tE=q.default.div`
    display: flex;
    gap: 0.5rem;

    ${ts.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${ts.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,nE=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ts.MaxWidth.mobileS} {
        width: 6rem;
    }
`,rE=q.default(is)`
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
`,iE=q.default(exports.Text.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${ts.MaxWidth.tablet} {
        margin: 0;
    }

    ${ts.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,aE=q.default(wp)`
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
`,oE=q.default(XI)`
    min-width: 5rem;
    flex: 1;
`,sE=q.default(Ys.Small)`
    width: 7rem;

    ${ts.MaxWidth.mobileL} {
        flex: 1;
    }

    ${ts.MaxWidth.mobileS} {
        width: 100%;
    }
`;var lE,cE,dE;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(lE||(lE={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(cE||(cE={})),function(e){e.AM="am",e.PM="pm"}(dE||(dE={}));const uE=({id:n,value:i,show:a,format:o,onChange:s,onCancel:l})=>{const c=mu.getTimeValues(o,i),[d,u]=t.useState(c.hour),[f,h]=t.useState(c.minute),[m,g]=t.useState(c.period),v=t.useRef(),b=t.useRef(),x=Ye();t.useEffect((()=>{if(a&&v.current&&v.current.focus(),a){const{hour:e,minute:t,period:n}=mu.getTimeValues(o,i);u(e),h(t),g(n)}}),[a,i,o]),t.useEffect((()=>{const e=v.current,t=b.current;return e&&e.addEventListener("keydown",y),t&&t.addEventListener("keydown",y),()=>{e&&e.removeEventListener("keydown",y),t&&t.removeEventListener("keydown",y)}}),[]);const y=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},w=t.useCallback((e=>{switch(e.currentTarget.name){case lE.MINUTE_UP:h(mu.updateMinutes(f,"add"));break;case lE.MINUTE_DOWN:h(mu.updateMinutes(f,"minus"));break;case lE.HOUR_UP:u(mu.updateHours(d,"add"));break;case lE.HOUR_DOWN:u(mu.updateHours(d,"minus"))}}),[d,f]),$=e=>{e.target.select()},j=e=>{const t=e.target.value;switch(e.target.name){case cE.HOUR:t.length<=2&&u(t);break;case cE.MINUTE:t.length<=2&&h(t)}},S=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case cE.HOUR:{const n=t>23||t<0?c.hour:mu.convertHourTo12HourFormat(e.target.value);u(n);break}case cE.MINUTE:{const n=t>59||t<0?c.minute:e.target.value;h(sc.padValue(n));break}}},k=e=>{switch(e.target.name){case dE.AM:g(hu.AM);break;case dE.PM:g(hu.PM)}},C=e=>n?`${n}-${e}`:e,O=oi({height:a?x.height+32:0});return e.jsx(GI,Object.assign({"data-testid":"animated-dropdown-wrapper",style:O},{children:e.jsxs(ZI,Object.assign({ref:x.ref,"data-testid":C("timepicker-dropdown"),inert:a?void 0:""},{children:[e.jsxs(QI,{children:[e.jsxs(eE,{children:[e.jsxs(nE,{children:[e.jsx(rE,Object.assign({"aria-label":"increase hour",name:lE.HOUR_UP,tabIndex:-1,onClick:w,"data-testid":C("hour-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(aE,{"aria-label":"hour",type:"number",name:cE.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:d,onFocus:$,onChange:j,onBlur:S,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),e.jsx(rE,Object.assign({"aria-label":"decrease hour",name:lE.HOUR_DOWN,tabIndex:-1,onClick:w,"data-testid":C("hour-decrement-button")},{children:e.jsx(p.ChevronDownIcon,{})}))]}),e.jsx(iE,{children:":"}),e.jsxs(nE,{children:[e.jsx(rE,Object.assign({"aria-label":"increase minute",name:lE.MINUTE_UP,tabIndex:-1,onClick:w,"data-testid":C("minute-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(aE,{"aria-label":"minute",type:"number",name:cE.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:b,value:f,onChange:j,onBlur:S,onFocus:$,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),e.jsx(rE,Object.assign({"aria-label":"decrease minute",name:lE.MINUTE_DOWN,tabIndex:-1,onClick:w,"data-testid":C("minute-decrement-button")},{children:e.jsx(p.ChevronDownIcon,{})}))]})]}),e.jsxs(tE,{children:[e.jsx(oE,Object.assign({checked:m===hu.AM,name:dE.AM,type:"radio",onChange:k,"data-testid":C("am-toggle"),"aria-label":"AM"},{children:"AM"})),e.jsx(oE,Object.assign({checked:m===hu.PM,name:dE.PM,type:"radio",onChange:k,"data-testid":C("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e.jsxs(JI,{children:[e.jsx(sE,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":C("cancel-button")},{children:"Cancel"})),e.jsx(sE,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===o?mu.convertTo24HourFormat({hour:d,minute:f,period:m}):`${d}:${f}${m}`,s(e)},disabled:""===d||""===f,"data-testid":C("confirm-button")},{children:"Done"}))]})]}))}))},pE=n=>{var{id:r,disabled:i=!1,error:a,value:o,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=n,p=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,h]=t.useState(!1),[m,g]=t.useState(!1),[v,b]=t.useState(""),[x,y]=t.useState(""),w=t.useRef();t.useEffect((()=>{o&&(b(o.start),y(o.end))}),[o]),cc("mousedown",(function(e){i||k(e)}),"document"),cc("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const $=()=>{S()},j=()=>{f||m||d&&d()},S=()=>{h(!1),g(!1),u&&u()},k=e=>{w.current&&!w.current.contains(e.target)&&(m||f)&&S()};return e.jsx(kI,Object.assign({ref:w,id:r},p,{children:e.jsxs(CI,Object.assign({$disabled:i,$error:a,$readOnly:l},{children:[e.jsxs(Wp,Object.assign({error:a,currentActive:f?"start":m?"end":"none"},{children:[e.jsx(OI,{onFocus:()=>{i||l||f||(g(!1),h(!0),j())},readOnly:!0,placeholder:"From",value:mu.formatDisplayValue(v,s),disabled:i,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(OI,{onFocus:()=>{i||l||m||(h(!1),g(!0),j())},readOnly:!0,placeholder:"To",value:mu.formatDisplayValue(x,s),disabled:i,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e.jsx(uE,{id:r,show:f,value:v,format:s,onCancel:$,onChange:e=>{h(!1),g(!0),b(e);c&&c({start:e,end:x})}}),e.jsx(uE,{id:r,show:m,value:x,format:s,onCancel:$,onChange:e=>{g(!1),y(e);c&&c({start:v,end:e}),""==v?h(!0):u&&u()}})]}))}))},fE=q.default(yp)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,hE=n=>{var{id:r,disabled:i=!1,error:a,value:o,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:p="left",dropdownZIndex:f,startLimit:h,endLimit:m,interval:g=15}=n,v=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[b]=t.useState((()=>oc.generate())),[x,y]=t.useState(null),[w,$]=t.useState(!1),[j,S]=t.useState(""),[k,C]=t.useState(""),[O,T]=t.useState(""),[D,I]=t.useState(""),[E,_]=t.useState(""),M=t.useRef(),R=t.useRef(),A=t.useRef(),N=t.useMemo((()=>mu.generateTimings(g,s,h,m)),[g,s,h,m]),B=t.useMemo((()=>{if(""===D)return N;const e=mu.findClosestFlooredTime(D,N);return N.slice(N.indexOf(e))}),[N,D]),F=t.useCallback((e=>mu.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(o){const n=null!==(e=F(o.start))&&void 0!==e?e:"",r=null!==(t=F(o.end))&&void 0!==t?t:"";C(n),T(r),I(n),_(r)}}),[o,F]),t.useEffect((()=>{if(a)return void $(!1);const e=F(k),t=F(O);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&mu.to24Hour(t)<mu.to24Hour(e)))return S(""),void(document.activeElement!==R.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[k,O,F,a]);const L=e=>{i||l||(x||w||null==d||d(),y(e),$(!0))},P=e=>{var t;i||l||(y(e),$(!0),null===(t=("start"===e?R:A).current)||void 0===t||t.select())};function z(e){var t;switch(e.code){case"Enter":"start"===x?H(k):"end"===x&&(w&&W(O),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":V(k,O,{})}}const H=e=>{V(e,O,{goToNextInput:!0})},W=e=>{V(k,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,a,o;const s=null!==(i=F(e))&&void 0!==i?i:D,l=null!==(a=F(t))&&void 0!==a?a:E;C(s),T(l);s===D&&l===E||null==c||c({start:s,end:l}),n&&void 0!==F(e)&&(y("end"),null===(o=A.current)||void 0===o||o.select()),r&&(y(null),$(!1),null==u||u()),I(s),_(l)},Y=e=>{e.stopPropagation(),C(""),T(""),I(""),_("");null==c||c({start:"",end:""}),y(null),$(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&x&&!w&&V(k,O,{triggerOnBlur:!0})},q=()=>{if(!l&&!i&&((null==k?void 0:k.length)>0||(null==O?void 0:O.length)>0))return e.jsx(iI,Object.assign({onClick:Y,type:"button","aria-label":"Clear"},{children:e.jsx(Bx,{"aria-hidden":!0})}))};return e.jsxs(kI,Object.assign({id:r},v,{children:[e.jsx(UO,{children:e.jsx(hp,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(fE,Object.assign({ref:M,$disabled:i,$error:a||!!j,$readOnly:l,onBlur:U},{children:[e.jsxs(Wp,Object.assign({error:a||!!j,currentActive:null===x?"none":x},{children:[e.jsx(OI,{ref:R,onFocus:()=>L("start"),placeholder:"start"===x?"hh:mm":"From",onChange:e=>C(e.target.value),value:k,disabled:i,readOnly:l,"data-testid":v["data-testid"]?`${v["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>P("start"),onKeyDown:z,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":b,"aria-autocomplete":"list"}),e.jsx(OI,{ref:A,onFocus:()=>L("end"),placeholder:"end"===x?"hh:mm":"To",onChange:e=>T(e.target.value),value:O,disabled:i,readOnly:l,"data-testid":v["data-testid"]?`${v["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>P("end"),onKeyDown:z,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":b,"aria-autocomplete":"list"})]})),q()]})),renderDropdown:()=>{if(w)return"start"===x?e.jsx(gT,{listItems:N,onSelectItem:H,selectedItems:[k],disableItemFocus:!0,topScrollItem:mu.findClosestFlooredTime(F(k),N),listboxId:b}):e.jsx(gT,{listItems:B,onSelectItem:W,selectedItems:[O],disableItemFocus:!0,topScrollItem:mu.findClosestFlooredTime(F(O),B),listboxId:b})},onClose:e=>{"outside-press"===e?(y(null),$(!1),null==u||u()):V(k,O,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===x?R:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:f})}),!a&&j&&e.jsx(Zb,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:j}))]}))},mE=t=>{var{variant:n="dial"}=t,r=X(t,["variant"]);return"dial"===n?e.jsx(pE,Object.assign({},r)):"combobox"===n?e.jsx(hE,Object.assign({},r)):void 0};q.default.div`
    position: relative;
`;const gE=q.default(wp)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,vE=n=>{var{id:r,disabled:i=!1,readOnly:a=!1,error:o,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:p}=n,f=X(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[h,m]=t.useState(!1),g=t.useRef();cc("mousedown",(function(e){i||a||x(e)}),"document"),cc("keyup",(function(e){if("Tab"===e.code)x(e)}),"document");const v=()=>{i||a||h||(m(!0),u&&u())};const b=()=>{m(!1),p&&p()},x=e=>{g.current&&!g.current.contains(e.target)&&h&&b()},y=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(yp,Object.assign({ref:g,id:r,$readOnly:a,$disabled:i,$error:o},f,{children:[e.jsx(gE,{onFocus:v,focused:h,readOnly:!0,placeholder:l||y(),value:mu.formatDisplayValue(s,c),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e.jsx(uE,{id:r,show:h,value:s,format:c,onCancel:()=>{b()},onChange:e=>{d&&d(e),b()}})]}))},bE=q.default(Wx)`
    margin-right: 0.25rem;
`,xE=q.default(Lx)`
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
`,yE=q.default(xE)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,wE=q.default(exports.Text.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${Qo.Neutral[3]};
            `}}
`,$E=q.default.div`
    display: flex;
`,jE=q.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${Qo.Neutral[3]};
            `}}
`,SE=n=>{var{disabled:r,error:i,value:a,onChange:o,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:p}=n,f=X(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[h,m]=t.useState(""),[g,v]=t.useState(""),[b,x]=t.useState("none"),y=t.useRef(null),w=t.useRef(null),$=t.useRef(null),j=t.useRef(h),S=t.useRef(g),k=t.useRef(b),C=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),O=pc({ref:w,formatter:C}),T=pc({ref:$,formatter:C}),D=e=>{j.current=e,m(e)},I=e=>{S.current=e,v(e)},E=e=>{k.current=e,x(e)};t.useEffect((()=>{"floor"===b&&3===h.length&&$.current&&$.current.focus()}),[h]),t.useEffect((()=>{B(a)}),[a]);const _=e=>{E(e.target.name),e.target.select()},M=e=>{const t=e.target.name,n=e.target.value,r=N(n);"floor"===t?(D(r),r!==h&&F(r,t)):(I(r),r!==g&&F(r,t))},R=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=O();n(),D(e),F(e,t)}else{const{nextValue:e,updateCaretPosition:n}=T();n(),I(e),F(e,t)}},A=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||w.current&&"unit"===b&&0===g.length&&w.current.focus()},N=e=>/^[0-9]$/.test(e)?sc.padValue(e,!0):e.toLocaleUpperCase(),B=e=>{if(e!==kE)if(void 0===e||0===e.length)D(""),I("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];D("floor"===b?e:N(e)),I("unit"===b?n:N(n))}}},F=(e,t)=>{if(!o&&!l)return;const n={floor:j.current,unit:S.current};if(n[t]=e,o){const e=P(n);o(e)}l&&l([n.floor,n.unit])},L=()=>{if(!s&&!c)return;const e={floor:N(j.current),unit:N(S.current)};if(s){const t=P(e);s(t)}c&&c([e.floor,e.unit])},P=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":kE},z=e=>e.split("-");return e.jsxs(yp,Object.assign({},f,{ref:y,onClick:()=>{"none"===b&&w.current&&w.current.focus()},$disabled:r,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{y.current&&y.current.contains(e.relatedTarget)||"none"!==k.current&&(E("none"),L())}},{children:[e.jsx(bE,Object.assign({"data-testid":"addon",disabled:r,$readOnly:d},{children:"#"})),d&&a?(()=>{const t=a.split("-");return e.jsxs($E,{children:[e.jsx(jE,{children:t[0]}),e.jsx(wE,{children:"-"}),e.jsx(jE,{children:t[1]})]})})():e.jsxs(e.Fragment,{children:[e.jsx(xE,{name:"floor",maxLength:3,value:h,ref:w,onFocus:_,onBlur:M,onChange:R,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==b||d?z(u)[0]:"",autoComplete:p}),e.jsx(wE,Object.assign({$inactive:0===h.length},{children:"-"})),e.jsx(yE,{name:"unit",maxLength:5,value:g,ref:$,onFocus:_,onBlur:M,onChange:R,onKeyDown:A,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==b||d?z(u)[1]:"",autoComplete:p})]})]}))},kE="Invalid unit number",CE={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Mp,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Kp,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Vf,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Rx,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},Input:Px,InputGroup:Hj,MaskedInput:nS,Label:Jb,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:p}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(MD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:p},f))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(BD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(ND,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:p}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(sI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:p},f))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(fI,Object.assign({histogramSlider:u,error:!!r,"data-testid":o||i,id:`${i}-base`},p))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(hI,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Tx,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(oI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s},p))}))},Textarea:SI,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(vE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(mE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,a=X(t,["id","data-error-testid","children"]);return e.jsx(dx,Object.assign({id:n,"data-error-testid":r},a,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(SE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(JD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(dx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(nI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))}},OE=q.default.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${Qo.Neutral[5]};
    }
`,TE=q.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,DE=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,IE=q.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,EE=q.default(exports.Text.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${ts.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,_E=q.default(exports.Text.BodySmall)``,ME=q.default.div`
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
`,RE=q.default(Ys.Small)`
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
`,AE=({thumbnailImageDataUrl:t,"data-testid":n,renderReplaceButton:r,onReplaceClick:i})=>e.jsxs(NE,Object.assign({"data-testid":n},{children:[e.jsx(BE,{"data-testid":n?`${n}-image`:void 0,src:t}),r&&e.jsx(FE,Object.assign({type:"button",onClick:e=>{i&&i()}},{children:"Replace"}))]})),NE=q.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,BE=q.default(hh)`
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
`,FE=q.default.button`
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
`,LE=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:a,onCancel:o,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:p}=n,[f,h]=t.useState(),[m,g]=t.useState(""),v=t.useRef(),b=t.useRef();t.useEffect((()=>{h(x(c))}),[i]),t.useEffect((()=>{g(n.description||"")}),[n]);const x=e=>{if(!u)return e;const t=b&&b.current?b.current.getBoundingClientRect().width:0;return sc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(OE,Object.assign({"data-testid":`${l}-edit-display`},{children:[e.jsxs(TE,{children:[p&&e.jsx(AE,{thumbnailImageDataUrl:p}),e.jsxs(DE,{children:[e.jsxs(IE,Object.assign({ref:b},{children:[e.jsx(EE,Object.assign({weight:"semibold"},{children:f})),e.jsx(_E,{children:fh.formatFileSizeDisplay(d)})]})),e.jsx(CE.Textarea,{ref:v,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:m,maxLength:r,onChange:e=>{g(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(ME,Object.assign({$thumbnail:!!p},{children:[e.jsx(RE,Object.assign({"data-testid":`${l}-save-button`,type:"button",disabled:0===m.trim().length,onClick:()=>{v.current&&a(v.current.value.trim())}},{children:"Save"})),e.jsx(RE,Object.assign({type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:o},{children:"Cancel"}))]}))]}))},PE=q.default.li`
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
`,zE=q.default(M.DragHandleIcon)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return i.css`
                color: ${Qo.Neutral[4]};
            `}}
`,HE=q.default.div`
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
`,WE=q.default.div`
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
`,VE=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,YE=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ts.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,UE=q.default.div`
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
`,qE=q.default(exports.Text.BodySmall)``,KE=q.default(qE)`
    margin-top: 0.25rem;
`,XE=q.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${Qo.Validation.Red.Text};
`,GE=q.default(XE)`
    margin-top: 0.25rem;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,ZE=q.default(XE)`
    display: none;
    visibility: hidden;
    ${ts.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,QE=q.default.div`
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
`,JE=q.default(vf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,e_=q.default(is)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Qo.Neutral[3]};
    }
`,t_=t.memo((({fileItem:n,editable:r,sortable:i,wrapperWidth:a,disabled:o,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:p,description:f,progress:h=1,errorMessage:m,thumbnailImageDataUrl:v,truncateText:b=!0}=n,[x,y]=t.useState(),{activeId:w}=t.useContext(_h),{attributes:$,listeners:j,setNodeRef:S,transform:k,transition:C}=Ib({id:d}),O=t.useRef(),T={transform:Dg.Translate.toString(k),transition:C},D=Object.assign(Object.assign({style:T},$),j),I=h<1,M=fh.formatFileSizeDisplay(p),R=w?w===d?"self":"others":"none";t.useEffect((()=>{y(F(u))}),[a]);const A=()=>{l()},N=()=>{c&&c()},B=e=>{i&&e.stopPropagation()},F=e=>{if(!b)return e;const t=O&&O.current?O.current.getBoundingClientRect().width:0;return sc.truncateOneLine(e,t,t/2,t/2/8,16)},L=()=>o||!!w,P=()=>i&&!s,z=()=>e.jsxs(e.Fragment,{children:[e.jsx(qE,Object.assign({weight:f?"semibold":"regular"},{children:x})),f&&e.jsx(KE,{children:f})]});return e.jsxs(PE,Object.assign({id:d,ref:S,$sortable:P(),$disabled:L(),$focusType:R},P()?D:{},{children:[P()&&e.jsx(zE,{"data-testid":`${d}-drag-handle`,$disabled:L()}),e.jsxs(HE,Object.assign({$focused:"self"===R,$error:!!m,$loading:I,$disabled:L(),$editable:r},{children:[(()=>{let t;return t=m?e.jsxs(e.Fragment,{children:[e.jsxs(VE,Object.assign({ref:O},{children:[z(),m&&e.jsx(GE,Object.assign({weight:"semibold"},{children:m}))]})),e.jsx(UE,{children:e.jsx(qE,{children:M})}),m&&e.jsx(ZE,Object.assign({weight:"semibold"},{children:m}))]}):v?e.jsxs(e.Fragment,{children:[e.jsx(AE,{thumbnailImageDataUrl:v,"data-testid":`${d}-thumbnail`}),e.jsxs(YE,{children:[e.jsx(VE,Object.assign({ref:O},{children:z()})),e.jsx(UE,{children:e.jsx(qE,{children:M})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(VE,Object.assign({ref:O},{children:z()})),e.jsx(UE,Object.assign({$hideInMobile:I},{children:e.jsx(qE,{children:M})}))]}),e.jsx(WE,Object.assign({$hasThumbnail:!!v},{children:t}))})(),!s&&(()=>{let t;return t=m?e.jsx(e_,Object.assign({onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`},{children:e.jsx(g.CrossIcon,{"aria-hidden":!0})})):I?e.jsx(hf,{progress:h,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[r&&e.jsx(JE,Object.assign({"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:L(),onClick:N,onKeyDown:B},{children:e.jsx(_.PencilIcon,{"aria-hidden":!0})}),"edit"),e.jsx(JE,Object.assign({"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:L(),onClick:A,onKeyDown:B},{children:e.jsx(E.BinIcon,{"aria-hidden":!0})}),"delete")]}),e.jsx(QE,Object.assign({$editable:r,$error:!!m,$loading:I},{children:t}))})()]}))]}))})),n_=q.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,r_=q.default.li`
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
`,i_=({fileItems:n,editableFileItems:r,fileDescriptionMaxLength:i,sortable:a,disabled:o,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,p]=t.useState({}),{setActiveId:f}=t.useContext(_h),{width:h,ref:m}=Ye(),g=t.useRef({}),v=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>[...n].filter((e=>null!=e))),[...n])}(zg(Ab,{activationConstraint:{distance:8}}),zg(Rv,{activationConstraint:{delay:150,tolerance:5}}),zg(Sv,{coordinateGetter:Mb})),b=e=>{delete g.current[e]};t.useEffect((()=>{p(T(n))}),[n]);const x=e=>t=>{D(e.id,"display"),b(e.id);const n=Object.assign(Object.assign({},e),{description:t});l(n)},y=e=>t=>{g.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?D(e.id,"display"):c(e),b(e.id)},$=e=>()=>{D(e.id,"edit")},j=e=>()=>{c(e)},S=e=>{if(d){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),i=n.findIndex((e=>e.id===r.id)),a=mb(n,e,i);d(a)}}f(void 0)},k=e=>{const{active:t}=e;f(t.id)},C=e=>r&&fh.isSupportedImageType(e.type),O=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&C(e)&&!e.description,T=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":u[n.id]?t[n.id]=u[n.id]:t[n.id]=O(n)?"edit":"display";return t},D=(e,t)=>{p((n=>Object.assign(Object.assign({},n),{[e]:t})))},I=()=>n&&n.length>1&&a&&Object.values(u).every((e=>"display"===e)),E=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(n,u);return 0===t.length?null:t.map(((t,n)=>Array.isArray(t)?((t,n)=>{const r=t.map((t=>{const n=Object.assign({},t);return void 0!==g.current[t.id]&&(n.description=g.current[t.id]),e.jsx(LE,{fileItem:n,wrapperWidth:h,fileDescriptionMaxLength:i,onSave:x(t),onCancel:w(t),onBlur:y(t)},t.id)}));return e.jsx(r_,{children:e.jsx("ul",{children:r})},`editable-${n}`)})(t,n):e.jsx(t_,{fileItem:t,editable:C(t),wrapperWidth:h,sortable:I(),disabled:o,readOnly:s,onDelete:j(t),onEditClick:$(t)},t.id)))};return n&&0!==n.length?o||s||!I()?e.jsx(n_,Object.assign({$readOnly:s,ref:m},{children:E()})):e.jsx(db,Object.assign({sensors:v,onDragEnd:S,onDragStart:k},{children:e.jsx(jb,Object.assign({items:n,strategy:yb},{children:e.jsx(n_,Object.assign({$readOnly:s,ref:m},{children:E()}))}))})):null},a_=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,o_=q.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,s_=q.default.div`
    color: ${Qo.Neutral[1]};
    ${Zs({textSize:"Body"})}
`,l_=q.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${Qo.Neutral[3]};
`,c_=q.default.div`
    color: ${Qo.Neutral[3]};
    ${Zs({textSize:"BodySmall"})}
`,d_=q.default(al)`
    margin-bottom: 2rem;
`,u_=q.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${ts.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,p_=q.default(Ys.Small)`
    width: 10rem;

    ${ts.MaxWidth.mobileL} {
        width: 100%;
    }
`,f_=q.default.label`
    ${gs.getTextStyle("BodySmall","semibold")}
    color: ${Qo.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,h_=q.default(al)`
    margin-bottom: 2rem;
`,m_=q.default.div`
    background-color: ${Qo.Neutral[8]};
    border: 1px solid ${Qo.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,g_=q.default.div`
    background-color: ${Qo.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,v_=q.default.div`
    background-color: ${Qo.Neutral[8]};
    height: 100%;
    width: 100%;
`,b_=q.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,x_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${Qo.Neutral[8]};

    ${ts.MaxWidth.tablet} {
        border-bottom: 1px solid ${Qo.Neutral[5]};
    }
`,y_=q.default(exports.Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${ts.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,w_=q.default(is)`
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
`,$_=q.default(Ys.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${ts.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,j_=q.default(jc.Default)`
    width: 100%;
`,S_=q.default.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Qo.Neutral[8]};
    border-top: 1px solid ${Qo.Neutral[5]};
`,k_=q.default(Ys.Default)`
    width: 100%;
`,C_=Y.default.createContext({mode:"default",rootNode:null});var O_=Ci((function(e){return null==e}));const T_=q.default.div`
    background-color: ${e=>e.$collapsible?Qo.Neutral[7](e):Qo.Neutral[8](e)};

    ${ts.MaxWidth.tablet} {
        background-color: ${Qo.Neutral[7]};
    }
`,D_=q.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Qo.Neutral[5]};

    ${ts.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,I_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${Qo.Neutral[8]};

    ${ts.MaxWidth.tablet} {
        background-color: transparent;
    }
`,E_=q.default(is)`
    margin: 0 0 0 auto;
`,__=q.default(p.ChevronDownIcon)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Qo.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Qo.Neutral[2]};
    }
`,M_=q.default(exports.Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${ts.MaxWidth.tablet} {
        ${gs.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,R_=q.default(Si.div)`
    overflow: hidden;
`,A_=q.default.div`
    padding: 1rem 1.25rem;
`,N_=q.default(Si.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,B_=q.default(Ys.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,F_=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:a,onExpandChange:o,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:d=!0,title:u,addon:p,children:f}=n,h=X(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:g}=t.useContext(C_),v="mobile"===m,[b,x]=t.useState(O()),[y,w]=t.useState(s),$=!v&&r,j=Ye(),S=Ye(),k=oi({height:b?j.height:0}),C=y?null!=l?l:Math.min(.5*S.height,216):S.height;t.useEffect((()=>{x(O())}),[r,a]);function O(){return!!v||(O_(a)?!r||i:a)}return e.jsxs(T_,Object.assign({$collapsible:$},{children:[e.jsx(D_,{$showDivider:c,$showMobileDivider:d}),(u||$)&&e.jsxs(I_,{children:[u&&e.jsxs(M_,Object.assign({weight:"semibold"},{children:[u," ",p&&("popover"===p.type?e.jsx(Xb,{addon:p,rootNode:v?g:void 0}):null)]})),$&&e.jsx(E_,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!b;O_(a)&&x(e),o&&o(e)},"aria-label":b?"Collapse":"Expand"},{children:e.jsx(__,{$expanded:b})}))]}),e.jsx(R_,Object.assign({"data-testid":"expandable-container","data-expanded":b,style:k},{children:e.jsx("div",Object.assign({ref:j.ref},{children:e.jsxs(A_,Object.assign({},h,{children:[e.jsx(N_,Object.assign({"data-testid":"minimisable-container",$height:C,$minimisable:s},{children:e.jsx("div",Object.assign({ref:S.ref},{children:e.jsx("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof f?f(m,{minimised:y}):f}))}))})),s&&e.jsxs(B_,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{w(!y)}},{children:["View ",y?"more":"less"]}))]}))}))}))]}))},L_=q.default(F_)`
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
`,P_=q.default.div`
    display: flex;
    flex-direction: column;

    ${ts.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,z_=q.default.label`
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
`,H_=q.default.input`
    appearance: none;
`,W_=q.default(DI)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${H_}:focus-visible + & {
        outline: 2px solid ${Qo.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,V_=q.default(XI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,Y_=q.default(Ys.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${ts.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,U_=q.default.div`
    background-color: ${Qo.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,q_=Object.assign((n=>{var{toggleFilterButtonLabel:r="Filters",toggleFilterButtonStyle:i="light",headerTitle:a="Filters",clearButtonDisabled:o=!1,onClear:s,onDismiss:l,onDone:c,children:d}=n,p=X(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[f,h]=t.useState(!1),m=t.useRef(null),g=t.useRef(null),v=kl.useMediaQuery({maxWidth:Jo.tablet});t.useEffect((()=>{v||x()}),[v]);const b=()=>{h(!0)},x=()=>{h(!1),l&&l()},y=()=>{h(!1),c&&c()},w=()=>{s&&s()},$=e=>"function"==typeof d?d(e):d,j=t=>e.jsxs(x_,{children:["mobile"===t&&e.jsx(w_,Object.assign({onClick:x,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(u.CrossIcon,{})})),e.jsx(y_,Object.assign({weight:"semibold"},{children:a})),e.jsx($_,Object.assign({styleType:"link",type:"button",onClick:w,disabled:o},{children:"Clear"}))]});return e.jsx("div",Object.assign({},p,{children:v?e.jsx(C_.Provider,Object.assign({value:{mode:"mobile",rootNode:m}},{children:e.jsxs(e.Fragment,{children:[e.jsx(j_,Object.assign({"data-testid":"filter-show-button",styleType:i,onClick:b,type:"button",icon:e.jsx(u.FilterIcon,{})},{children:r})),e.jsx(rf,Object.assign({show:f,disableTransition:!0},{children:e.jsx(v_,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e.jsxs(g_,Object.assign({ref:m},{children:[j("mobile"),e.jsx(b_,{children:$("mobile")}),e.jsx(S_,{children:e.jsx(k_,Object.assign({onClick:y,type:"button"},{children:"Done"}))})]}))}))}))]})})):e.jsx(C_.Provider,Object.assign({value:{mode:"default",rootNode:g}},{children:e.jsxs(m_,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:g},{children:[j("default"),$("default")]}))}))}))}),{Item:F_,Page:({onDismiss:t,onDone:n,children:r})=>e.jsxs(U_,{children:[e.jsx(w_,Object.assign({onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(h.ChevronLeftIcon,{})})),e.jsx(b_,{children:r}),e.jsx(S_,{children:e.jsx(k_,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]}),Checkbox:n=>{var{selectedOptions:r,options:i,onSelect:a,labelExtractor:o,valueExtractor:s,useToggleContentWidth:l}=n,c=X(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(C_),[u,p]=t.useState(r||[]),[f,h]=t.useState(),[m,g]=t.useState(i.length),v=t.useRef(),b=t.useRef(),x=e=>()=>{const t=[...u],n=u.findIndex((t=>$(t)===$(e)));n>=0?t.splice(n,1):t.push(e),p(t),null==a||a(t)},y=()=>{const e=u.length?[]:i;p(e),null==a||a(e)},w=e=>{var t;return o?o(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=t.useCallback((()=>{if(!v.current)return void h(void 0);const e=Array.from(v.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const a=e[i].offsetTop;if(a>r&&(n++,r=a,n>2))break;t=i}g(t),h(n>2?r-8:void 0)}),[]);t.useEffect((()=>{r!==u&&p(r||[])}),[r]),t.useEffect((()=>{"default"===d?(()=>{const e=b.current?b.current.offsetTop+b.current.clientHeight:void 0;h(e)})():j()}),[i]),Ye({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:v,onResize:j});return e.jsx(L_,Object.assign({minimisable:i.length>5,minimisedHeight:f},c,{children:(t,{minimised:n})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(Y_,Object.assign({styleType:"link",type:"button",onClick:y},{children:u.length?"Clear all":"Select all"})),e.jsx(P_,Object.assign({role:"group","aria-label":c.title,ref:v},{children:i.map(((r,i)=>"default"===t?((t,n,r)=>{const i=w(t),a=$(t),o=!!u.find((e=>$(e)===a));return e.jsxs(z_,Object.assign({$visible:!r||n<5,$selected:o,ref:4===n?b:void 0},{children:[e.jsx(H_,{type:"checkbox",checked:o,onChange:x(t)}),e.jsx(W_,{type:"checkbox",active:o}),i]}),a)})(r,i,n):((t,n,r)=>{const i=w(t),a=$(t),o=!!u.find((e=>$(e)===a));return e.jsx(V_,Object.assign({type:"checkbox",checked:o,$visible:!r||f&&n<=m,onChange:x(t),useContentWidth:l},{children:i}),a)})(r,i,n)))}))]})}))}}),K_=q.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${ts.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,X_=q.default(exports.Text.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,G_=q.default.div`
    display: flex;
    align-items: flex-start;
`,Z_=q.default.a`
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
`,Q_=()=>e.jsxs(K_,Object.assign({"data-testid":"download-app-section"},{children:[e.jsx(X_,Object.assign({weight:"semibold"},{children:"Download the app"})),e.jsxs(G_,{children:[e.jsx(Z_,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(Z_,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),J_={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},eM={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},tM={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var nM;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${Pl(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogoAttribute=e=>{switch(e){case"bookingsg":return{src:"https://home.booking.gov.sg/images/bookingsg/footer.svg",alt:"BookingSG"};case"mylegacy":return{src:"https://mylegacy.life.gov.sg/images/site-logo.png",alt:"MyLegacy",style:{width:"10rem",maxHeight:"2rem"}};case"ccube":return{src:"https://assets.life.gov.sg/ccube/logo-ccube.svg",alt:"Ccube"};default:return{src:"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG"}}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return eM;case"mylegacy":return tM;default:return J_}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(nM||(nM={}));const rM=q.default.img`
    max-height: 4.5rem;
    max-width: 100%;
`,iM=q.default.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 1rem;
`,aM=()=>{const t=i.useTheme();return e.jsx("div",Object.assign({"data-testid":"resource-addon-section"},{children:"mylegacy"===(null==t?void 0:t.resourceScheme)?e.jsxs(e.Fragment,{children:[e.jsx(exports.Text.XSmall,{children:"My Legacy is a LifeSG initiative, brought to you by the following government agencies:"}),e.jsxs(iM,{children:[e.jsx(rM,{"data-testid":"footer-govtech-logo",src:"https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png",alt:"GovTech Singapore"}),e.jsx(rM,{"data-testid":"footer-psd-logo",src:"https://mylegacy.life.gov.sg/images/agencies/psd-logo.png",alt:"Public Service Division",style:{maxHeight:"3.5rem"}})]})]}):null}))},oM=q.default.footer`
    background: ${Qo.Neutral[7]};
`,sM=q.default(exports.Text.Hyperlink.Small)`
    color: ${Qo.Neutral[1]};
`,lM=q.default(ox.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Qo.Neutral[5]};

    ${ts.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,cM=q.default.div`
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
`,dM=q.default.ul`
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
`,uM=q.default.div`
    grid-column: 9 / span 4;

    ${ts.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,pM=q.default.div`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${Qo.Neutral[6]};
    }
`,fM=q.default(ox.Content)`
    padding: 1.375rem 0;

    ${ts.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,hM=q.default.div`
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
`,mM=q.default(hM)`
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
`,gM=q.default(exports.Text.Hyperlink.Small)`
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
`;var vM=function(e,t){return Number(e.toFixed(t))},bM=function(e,t,n){n&&"function"==typeof n&&n(e,t)},xM={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},yM=function(e){"number"==typeof e&&cancelAnimationFrame(e)},wM=function(e){e.mounted&&(yM(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function $M(e,t,n,r){if(e.mounted){var i=(new Date).getTime();wM(e),e.animation=function(){if(!e.mounted)return yM(e.animation);var a=(new Date).getTime()-i,o=(0,xM[t])(a/n);a>=n?(r(1),e.animation=null):e.animation&&(r(o),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function jM(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var a=e.setTransformState,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=t.scale-s,u=t.positionX-l,p=t.positionY-c;0===n?a(t.scale,t.positionX,t.positionY):$M(e,r,n,(function(e){a(s+d*e,l+u*e,c+p*e)}))}}var SM=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var a=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,a=t.offsetWidth*n,o=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:a,newDiffWidth:r-a,newContentHeight:o,newDiffHeight:i-o}}(n,r,t),o=a.wrapperWidth,s=a.wrapperHeight,l=function(e,t,n,r,i,a,o){var s=e>t?n*(o?1:.5):0,l=r>i?a*(o?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(o,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return l},kM=function(e,t,n,r){return vM(r?e<t?t:e>n?n:e:e,2)},CM=function(e,t){var n=SM(e,t);return e.bounds=n,n};function OM(e,t,n,r,i,a,o){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,p=0;return o&&(u=i,p=a),{x:kM(e,s-u,c+u,r),y:kM(t,l-p,d+p,r)}}function TM(e,t,n,r,i,a){var o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):OM(l-t*d,c-n*d,i,a,0,0,null)}function DM(e,t,n,r,i){var a=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=a?a:e}var IM=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,a=t.target,o="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(a);return!!(r&&a&&o)&&!uR(a,n)},EM=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function _M(e,t,n,r,i){var a=e.setup.limitToBounds,o=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==o&&null!==s&&(t!==d||n!==u)){var p=OM(t,n,s,a,r,i,o),f=p.x,h=p.y;e.setTransformState(c,f,h)}}var MM=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,a=n.disablePadding;return t>0&&r>=i&&!a?t:0};function RM(e,t,n,r,i,a,o,s,l,c){if(i){var d;if(t>o&&n>o)return(d=o+(e-o)*c)>l?l:d<o?o:d;if(t<a&&n<a)return(d=a+(e-a)*c)<s?s:d>a?a:d}return r?t:kM(e,a,o,i)}function AM(e,t){var n=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,a=e.transformState.scale;return!(i.disabled&&!(a>1)&&r&&!t)}(e);if(n){var r=e.lastMousePosition,i=e.velocityTime,a=e.setup,o=e.wrapperComponent,s=a.velocityAnimation.equalToMove,l=Date.now();if(r&&i&&o){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,s),d=t.x-r.x,u=t.y-r.y,p=d/c,f=u/c,h=l-i,m=d*d+u*u,g=Math.sqrt(m)/h;e.velocity={velocityX:p,velocityY:f,total:g}}e.lastMousePosition=t,e.velocityTime=l}}function NM(e,t){var n=e.transformState.scale;wM(e),CM(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,a=r.positionY;if(e.isPanning=!0,1===n.length){var o=n[0].clientX,s=n[0].clientY;e.startCoords={x:o-i,y:s-a}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var a=t.clientX,o=t.clientY;e.startCoords={x:a-r,y:o-i}}(e,t)}function BM(e,t){var n=e.transformState.scale,r=e.setup,i=r.minScale,a=r.alignmentAnimation,o=a.disabled,s=a.sizeX,l=a.sizeY,c=a.animationTime,d=a.animationType;if(!(o||n<i||!s&&!l)){var u=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,a=e.setup,o=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,c=e.wrapperComponent;if(!o&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,p=d.minPositionX,f=d.maxPositionY,h=d.minPositionY,m=n>u||n<p,g=r>f||r<h,v=TM(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>f?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),b=v.x,x=v.y;return{scale:i,positionX:m?b:n,positionY:g?x:r}}}(e);u&&jM(e,u,null!=t?t:c,d)}}function FM(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,a=i.sizeX,o=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,a=e.setup.panning,o=a.lockAxisX,s=a.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:o?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=MM(e,a),u=MM(e,o);AM(e,{x:l,y:c}),_M(e,l,c,d,u)}}function LM(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var a=null==r?void 0:r.getBoundingClientRect(),o=null==i?void 0:i.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,l=(null==a?void 0:a.height)||0,c=(null==o?void 0:o.width)||0,d=(null==o?void 0:o.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent,a=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,a=i.disabled,o=i.velocityAnimation,s=e.transformState.scale;return!(o.disabled&&!(s>1)&&a&&!t||!n||!r)}(e);if(a&&t&&n&&i){var o=t.velocityX,s=t.velocityY,l=t.total,c=n.maxPositionX,d=n.minPositionX,u=n.maxPositionY,p=n.minPositionY,f=r.limitToBounds,h=r.alignmentAnimation,m=r.zoomAnimation,g=r.panning,v=g.lockAxisY,b=g.lockAxisX,x=m.animationType,y=h.sizeX,w=h.sizeY,$=h.velocityAlignmentTime,j=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,a=n.sensitivity;return r?i*t*a:i}(e,l),S=Math.max(j,$),k=MM(e,y),C=MM(e,w),O=k*i.offsetWidth/100,T=C*i.offsetHeight/100,D=c+O,I=d-O,E=u+T,_=p-T,M=e.transformState,R=(new Date).getTime();$M(e,x,S,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,a=n.positionY,l=((new Date).getTime()-R)/$,m=1-(0,xM[h.animationType])(Math.min(1,l)),g=1-t,x=i+o*g,y=a+s*g,w=RM(x,M.positionX,i,b,f,d,c,I,D,m),j=RM(y,M.positionY,a,v,f,p,u,_,E,m);i===x&&a===y||e.setTransformState(r,w,j)}))}}(e):BM(e)}}function PM(e,t,n,r){var i=e.setup,a=i.minScale,o=i.maxScale,s=i.limitToBounds,l=DM(vM(t,2),a,o,0,!1),c=TM(e,n,r,l,CM(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function zM(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,p=c||r>=o;if((r>=1||s)&&BM(e),!p&&i&&e.mounted){var f=PM(e,o,t||i.offsetWidth/2,n||i.offsetHeight/2);f&&jM(e,f,d,u)}}var HM=function(){return HM=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},HM.apply(this,arguments)};function WM(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var VM=1,YM=0,UM=0,qM={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},KM="react-transform-wrapper",XM="react-transform-component",GM=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:VM,scale:null!==(n=e.initialScale)&&void 0!==n?n:VM,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:YM,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:UM}},ZM=function(e){var t=HM({},qM);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==qM[n]&&r){var i=Object.prototype.toString.call(qM[n]),a="[object Object]"===i,o="[object Array]"===i;t[n]=a?HM(HM({},qM[n]),e[n]):o?WM(WM([],qM[n],!0),e[n],!0):e[n]}})),t},QM=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.maxScale,s=a.minScale,l=a.zoomAnimation,c=a.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return DM(vM(u,3),s,o,d,!1)};function JM(e,t,n,r,i){var a=e.wrapperComponent,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY;if(!a)return console.error("No WrapperComponent found");var d=(a.offsetWidth/2-l)/s,u=(a.offsetHeight/2-c)/s,p=PM(e,QM(e,t,n),d,u);if(!p)return console.error("Error during zoom event. New transformation state was not calculated.");jM(e,p,r,i)}function eR(e,t,n,r){var i=e.setup,a=e.wrapperComponent,o=i.limitToBounds,s=GM(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(a){var p=SM(e,s.scale),f=OM(s.positionX,s.positionY,p,o,0,0,a),h={scale:s.scale,positionX:f.x,positionY:f.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),jM(e,h,t,n))}}var tR=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),JM(e,1,t,n,r)}},nR=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),JM(e,-1,t,n,r)}},rR=function(e){return function(t,n,r,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var o=e.transformState,s=o.positionX,l=o.positionY,c=o.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var p={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};jM(e,p,i,a)}}},iR=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),eR(e,t,n)}},aR=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,a=e.wrapperComponent,o=e.contentComponent;if(a&&o){var s=fR(t||i.scale,a,o);jM(e,s,n,r)}}},oR=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),wM(e);var a=e.wrapperComponent,o="string"==typeof t?document.getElementById(t):t;if(a&&o&&a.contains(o)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,a=e.transformState,o=e.setup,s=o.limitToBounds,l=o.minScale,c=o.maxScale;if(!r||!i)return a;var d,u,p,f,h,m,g,v,b=r.getBoundingClientRect(),x=t.getBoundingClientRect(),y=(d=r,u=i,p=a,f=t.getBoundingClientRect(),h=d.getBoundingClientRect(),m=u.getBoundingClientRect(),g=h.x*p.scale,v=h.y*p.scale,{x:(f.x-m.x+g)/p.scale,y:(f.y-m.y+v)/p.scale}),w=y.x,$=y.y,j=x.width/a.scale,S=x.height/a.scale,k=r.offsetWidth/j,C=r.offsetHeight/S,O=DM(n||Math.min(k,C),l,c,0,!1),T=(b.width-j*O)/2,D=(b.height-S*O)/2,I=OM((b.left-w)*O+T,(b.top-$)*O+D,SM(e,O),s,0,0,r);return{positionX:I.x,positionY:I.y,scale:O}}(e,o,n);jM(e,s,r,i)}}},sR=function(e){return{instance:e,zoomIn:tR(e),zoomOut:nR(e),setTransform:rR(e),resetTransform:iR(e),centerView:aR(e),zoomToElement:oR(e)}},lR=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,sR(e)),t};function cR(){try{return{get passive(){return!1}}}catch(e){return!1}}var dR=".".concat(KM),uR=function(e,t){return t.some((function(t){return e.matches("".concat(dR," ").concat(t,", ").concat(dR," .").concat(t,", ").concat(dR," ").concat(t," *, ").concat(dR," .").concat(t," *"))}))},pR=function(e){e&&clearTimeout(e)},fR=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function hR(e,t,n){var r=t.getBoundingClientRect(),i=0,a=0;if("clientX"in e)i=(e.clientX-r.left)/n,a=(e.clientY-r.top)/n;else{var o=e.touches[0];i=(o.clientX-r.left)/n,a=(o.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var mR=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},gR=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,a=e.contentComponent,o=e.setup,s=e.transformState.scale,l=o.limitToBounds,c=o.centerZoomedOut,d=o.zoomAnimation,u=o.wheel,p=o.disablePadding,f=o.smooth,h=d.size,m=d.disabled,g=u.step,v=u.smoothStep;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var b=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),x=function(e,t,n,r,i){var a=e.transformState.scale,o=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,p=d.size,f=d.disabled;if(!o)throw new Error("Wrapper is not mounted");var h=a+t*n;if(i)return h;var m=!r&&!f;return DM(vM(h,3),c,l,p,m&&!u)}(e,b,f?v*Math.abs(t.deltaY):g,!t.ctrlKey);if(s!==x){var y=CM(e,x),w=hR(t,a,s),$=l&&(m||0===h||c||p),j=TM(e,w.x,w.y,x,y,$),S=j.x,k=j.y;e.previousWheelEvent=t,e.setTransformState(x,S,k),bM(lR(e),t,r),bM(lR(e),t,i)}},vR=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;pR(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(zM(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var a=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,a=i.maxScale,o=i.minScale;return!!n&&(r<a||r>o||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);a&&(pR(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,bM(lR(e),t,r),bM(lR(e),t,i))}),160))},bR=function(e){for(var t=0,n=0,r=0;r<2;r+=1)t+=e.touches[r].clientX,n+=e.touches[r].clientY;return{x:t/2,y:n/2}},xR=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.wrapperComponent,a=e.transformState.scale,o=e.setup,s=o.limitToBounds,l=o.centerZoomedOut,c=o.zoomAnimation,d=o.alignmentAnimation,u=c.disabled,p=c.size;if(null!==r&&n){var f=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,a=vM(i[0].clientX-r.left,5),o=vM(i[0].clientY-r.top,5);return{x:(a+vM(i[1].clientX-r.left,5))/2/t,y:(o+vM(i[1].clientY-r.top,5))/2/t}}(t,a,n);if(Number.isFinite(f.x)&&Number.isFinite(f.y)){var h=mR(t),m=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,a=i.maxScale,o=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:DM(vM(t/r*n,2),o,a,c,!d&&!l)}(e,h),g=bR(t),v=g.x-(e.pinchLastCenterX||0),b=g.y-(e.pinchLastCenterY||0);if(m!==a||0!==v||0!==b){e.pinchLastCenterX=g.x,e.pinchLastCenterY=g.y;var x=CM(e,m),y=s&&(u||0===p||l),w=TM(e,f.x,f.y,m,x,y),$=w.x,j=w.y;e.pinchMidpoint=f,e.lastDistance=h;var S=d.sizeX,k=d.sizeY,C=OM($+v,j+b,x,s,MM(e,S),MM(e,k),i),O=C.x,T=C.y;e.setTransformState(m,O,T)}}}},yR=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;pR(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,bM(lR(e),t,n)}),r)};function wR(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,a=e.contentComponent,o=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,p=d.mode,f=d.step,h=d.animationTime,m=d.animationType;if(!u&&!r){if("reset"===p)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,a=e.setup.doubleClick,o=a.animationTime,s=a.animationType;bM(lR(e),t,r),eR(e,o,s,(function(){return bM(lR(e),t,i)})),yR(e,t)}(e,t);if(!a)return console.error("No ContentComponent found");var g=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(p,e.transformState.scale),v=QM(e,g,f);if(o!==v){bM(lR(e),t,l);var b=hR(t,a,o),x=PM(e,v,b.x,b.y);if(!x)return console.error("Error during zoom event. New transformation state was not calculated.");bM(lR(e),t,c),jM(e,x,h,m),yR(e,t)}}}var $R=function(e){var t=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,CM(t,t.transformState.scale),t.setup=ZM(e)},this.initializeWindowEvents=function(){var e,n,r=cR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==a||a.addEventListener("mousedown",t.onPanningStart,r),null==a||a.addEventListener("mousemove",t.onPanning,r),null==a||a.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==a||a.addEventListener("keyup",t.setKeyUnPressed,r),null==a||a.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=cR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,r),null==a||a.removeEventListener("mousemove",t.onPanning,r),null==a||a.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,r),null==a||a.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),wM(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=cR();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e,n){var r=!1,i=t.setup.centerOnInit,a=function(e,t){for(var n=0,r=e;n<r.length;n++)if(r[n].target===t)return!0;return!1};t.applyTransformation(),t.onInitCallbacks.forEach((function(e){e(lR(t))})),t.observer=new ResizeObserver((function(o){if(a(o,e)||a(o,n))if(i&&!r){var s=n.offsetWidth,l=n.offsetHeight;(s>0||l>0)&&(r=!0,t.setCenter())}else wM(t),CM(t,t.transformState.scale),BM(t,0)})),t.observer.observe(e),t.observer.observe(n)},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,a=n.touchPadDisabled,o=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||a&&t.ctrlKey||uR(c,o))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(wM(e),bM(lR(e),t,r),bM(lR(e),t,i))}(t,e),gR(t,e),vR(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,a=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!a.disabled&&a.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var o=t.transformState,s=o.positionX,l=o.positionY,c=s-e.deltaX,d=l-e.deltaY,u=a.lockAxisX?s:c,p=a.lockAxisY?l:d,f=t.setup.alignmentAnimation,h=f.sizeX,m=f.sizeY,g=MM(t,h),v=MM(t,m);u===s&&p===l||_M(t,u,p,g,v)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||IM(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),wM(t),NM(t,e),bM(lR(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||EM(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),FM(t,e.clientX,e.clientY),bM(lR(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(LM(t),bM(lR(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,a=r.onZoomStart;if(!n){var o=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,a=e.isInitialized,o=t.target;return!(!a||r||!o||uR(o,i))}(t,e);o&&(function(e,t){var n=mR(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1;var r=bR(t);e.pinchLastCenterX=r.x,e.pinchLastCenterY=r.y,wM(e)}(t,e),wM(t),bM(lR(t),e,i),bM(lR(t),e,a))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,a=r.onZoom;if(!n){var o=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);o&&(e.preventDefault(),e.stopPropagation(),xR(t,e),bM(lR(t),e,i),bM(lR(t),e,a))}},this.onPinchStop=function(e){var n,r,i=t.props,a=i.onPinchingStop,o=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,zM(n,null==r?void 0:r.x,null==r?void 0:r.y),bM(lR(t),e,a),bM(lR(t),e,o))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&IM(t,e)&&!(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)){t.lastTouch=+new Date,wM(t);var i=e.touches,a=1===i.length,o=2===i.length;a&&(wM(t),NM(t,e),bM(lR(t),e,r)),o&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!EM(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];FM(t,i.clientX,i.clientY),bM(lR(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,a=r.doubleClick,o=a.disabled,s=a.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||o||uR(l,s))}(t,e);n&&wR(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var a=lR(t);t.onChangeCallbacks.forEach((function(e){return e(a)})),bM(a,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=fR(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,a=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=a}},this.getContext=function(){return lR(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,CM(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(e,n),t.initializeWindowEvents(),t.isInitialized=!0;var r=lR(t);bM(r,void 0,t.props.onInit)},this.props=e,this.setup=ZM(this.props),this.transformState=GM(this.props)},jR=Y.default.createContext(null),SR=Y.default.forwardRef((function(e,n){var r=t.useRef(new $R(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,sR(r));return t.useImperativeHandle(n,(function(){return sR(r)}),[r]),t.useEffect((function(){r.update(e)}),[r,e]),Y.default.createElement(jR.Provider,{value:r},i)}));Y.default.forwardRef((function(e,n){var r,i=t.useRef(null),a=t.useContext(jR);return t.useEffect((function(){return a.onChange((function(e){if(i.current){i.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),Y.default.createElement("div",HM({},e,{ref:(r=[i,n],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var kR="transform-component-module_wrapper__SPB86",CR="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  transform: translate3d(0, 0, 0);\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var OR=function(e){var n=e.children,r=e.wrapperClass,i=void 0===r?"":r,a=e.contentClass,o=void 0===a?"":a,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,p=void 0===u?{}:u,f=t.useContext(jR),h=f.init,m=f.cleanupWindowEvents,g=t.useRef(null),v=t.useRef(null);return t.useEffect((function(){var e=g.current,t=v.current;return null!==e&&null!==t&&h&&(null==h||h(e,t)),function(){null==m||m()}}),[]),Y.default.createElement("div",HM({},d,{ref:g,className:"".concat(KM," ").concat(kR," ").concat(i),style:s}),Y.default.createElement("div",HM({},p,{ref:v,className:"".concat(XM," ").concat(CR," ").concat(o),style:l}),n))};const TR=q.default.div`
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
`,DR=t=>e.jsx(TR,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),IR=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,ER=q.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,_R=q.default(DR)`
    width: 100%;
    height: 100%;
`,MR=({src:n,className:r,alt:i,fit:a,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,p]=t.useState();t.useEffect((()=>{d(!0),p(void 0);const e=new Image;e.src=n,e.onload=()=>{s&&l({src:n,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),p(e)}}),[n]);return e.jsx(IR,Object.assign({className:r},{children:u?null!=o?o:e.jsx(_R,{}):c?e.jsx(dl,{}):e.jsx(ER,{src:n,alt:i,$fit:a})}))},RR=q.default(is)`
    padding: 0;
    border-radius: 100%;
    background: ${Qo.Neutral[8]};
    color: ${Qo.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,AR=q.default(RR)`
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
`,NR=q.default(RR)`
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
`,BR=q.default(RR)`
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
`,FR=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,LR=q.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,PR=q.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,zR=q.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,HR=q.default.div`
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
`,WR=q.default(MR)`
    height: 100%;
    width: 100%;
`,VR=q.default(DR)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,YR=q.default.div`
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
`,UR=q.default(exports.Text.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${Qo.Neutral[8]};
    text-align: center;
`,qR=q.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Qo.Neutral[1]};
    padding: 1.5rem 1rem;

    ${ts.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,KR=q.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,XR=q.default.div`
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
`,GR=q.default(MR)`
    height: 100%;
    width: 100%;
`,ZR=(n,r)=>{var{items:i,initialActiveItemIndex:a,hideThumbnail:o=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=n,p=X(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[f,h]=t.useState(null!=a?a:0),[m,g]=t.useState({}),[v,b]=t.useState(1),[x,y]=t.useState(null),[w,$]=t.useState(null),j=t.useRef(null),S=t.useRef([]),k=t.useRef([]),C=x&&w?x-w:0;t.useImperativeHandle(r,(()=>({currentItemIndex:f,setCurrentItem:_,goToPrevItem:I,goToNextItem:E}))),cc("keydown",(function(e){"ArrowRight"===e.key?E():"ArrowLeft"===e.key?I():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[f])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),b(1)}),[f]);const O=e=>{b(e.state.scale)};const T=({src:e,height:t,width:n})=>{g((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},D=()=>{const e=m[i[f].src];if((null==j?void 0:j.current)&&e){const{clientHeight:t,clientWidth:n}=j.current,{width:r,height:i}=e,a=i/r<t/n;return r<n&&i<t?a?n/r:t/i:a?t/(i/(r/n)):n/(r/(i/t))}},I=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[f])||void 0===t||t.resetTransform(),h((e=>0===e?i.length-1:e-1))},E=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[f])||void 0===t||t.resetTransform(),h((e=>e===i.length-1?0:e+1))},_=e=>{var t,n;null===(n=null===(t=k.current)||void 0===t?void 0:t[f])||void 0===n||n.resetTransform(),h(e)};return e.jsxs(jf,Object.assign({},p,{"data-testid":"image-carousel-modal"},{children:[e.jsx(AR,Object.assign({"aria-label":"Close image carousel",onClick:d,focusHighlight:!1},{children:e.jsx(u.CrossIcon,{"aria-hidden":!0})})),!c&&e.jsx(NR,Object.assign({"aria-label":1===v?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===v){const n=D();null===(t=null===(e=k.current)||void 0===e?void 0:e[f])||void 0===t||t.centerView(n),b(n)}else b(1),null===(r=null===(n=k.current)||void 0===n?void 0:n[f])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:1===v?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})})),e.jsxs(FR,{children:[e.jsxs(LR,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(BR,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:I},{children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})})),e.jsx(BR,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:E},{children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})}))]}),e.jsx(PR,Object.assign({ref:j,onTouchStart:e=>{v<=1&&y(e.touches[0].clientX)},onTouchMove:e=>{!x||v>1||$(e.touches[0].clientX)},onTouchEnd:()=>{j.current&&Math.abs(C)>j.current.offsetWidth/3&&(C>0?E():I()),y(null),$(null)}},{children:e.jsx(zR,Object.assign({style:{transform:`translateX(calc(${100*-f}% - ${C}px))`}},{children:i.map(((t,n)=>{var r;return e.jsx(HR,Object.assign({"data-testid":"slide-item"},{children:e.jsx(SR,Object.assign({ref:e=>k.current[n]=e,panning:{disabled:v<=1},initialScale:1,onZoom:O,onZoomStop:O,onWheel:O},{children:e.jsx(OR,{children:e.jsx(WR,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e.jsx(VR,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:T})})}))}),n)}))}))})),!l&&e.jsx(YR,{children:e.jsx(UR,Object.assign({weight:"semibold"},{children:`${f+1}/${i.length}`}))})]}),!o&&e.jsx(qR,{children:e.jsx(KR,{children:i.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e.jsx(XR,Object.assign({"data-testid":"thumbnail-item",$active:n===f,onClick:()=>_(n),ref:e=>S.current[n]=e},{children:e.jsx(GR,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},QR=t.forwardRef(ZR),JR=q.default.button`
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
`,eA=Y.default.forwardRef(((t,n)=>{var{children:r,imgSrc:i,selected:a,error:o,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(JR,Object.assign({ref:n,$selected:a,$error:o,type:s},l,{children:[e.jsx(hh,{src:i}),r]}))})),tA=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Qo.Primary};
`,nA=q.default.div`
    border-top: 1px solid ${Qo.Neutral[5]};
    border-bottom: 1px solid ${Qo.Neutral[5]};
`,rA=q.default(exports.Text.H3)`
    color: ${Qo.Primary};
    margin-bottom: 0.5rem;
`,iA=q.default(exports.Text.Body)`
    color: ${Qo.Primary};
`,aA=q.default(f.ChevronRightIcon)`
    ${tA}
`,oA=q.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${Qo.Neutral[5]};
    }

    :hover {
        ${rA},
        ${iA},
        ${aA} {
            color: ${Qo.PrimaryDark};
        }
    }
`,sA=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,lA=q.default(exports.Text.BodySmall)`
    margin-top: 0.25rem;
`,cA=q.default(Si.div)`
    overflow: hidden;
`,dA=q.default.div`
    border-top: 1px solid ${Qo.Neutral[5]};
`,uA=q.default(exports.Text.H5)`
    color: ${Qo.Primary};
    margin-right: 0.5rem;
`,pA=q.default(A.PlusIcon)`
    ${tA}
`,fA=q.default(R.MinusIcon)`
    ${tA}
`,hA=q.default.button`
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
        ${uA},
        ${pA},
        ${fA} {
            color: ${Qo.PrimaryDark};
        }
    }
`,mA=q.default.div`
    ${e=>Zs({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,gA=t.forwardRef(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:a}=t,o=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(mA,Object.assign({ref:n,as:a?"span":"div",$textSize:i,$textColor:r},o))})),vA=q.default.div`
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
`,bA=q.default.div`
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
`,xA={Grid:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(vA,Object.assign({ref:n},i,{children:r}))})),Tile:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(bA,Object.assign({ref:n},i,{children:r}))}))},yA=q.default.div`
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
`,wA=()=>{t.useEffect((()=>{n()||r()}),[]);const n=()=>document.getElementById($A),r=()=>{if(!document.getElementById($A)){const e=document.createElement("script");e.id=$A,e.type="module",e.src=jA,document.head.appendChild(e)}};return e.jsx(yA,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},$A="lifesg-ds-masthead-script",jA="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",SA={notCompress:6,compress:4},kA=q.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,CA=q.default.nav`
    height: ${e=>e.$compress?SA.compress:SA.notCompress}rem;
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
`,OA=q.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${ts.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,TA=q.default(is)`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,DA=q.default(N.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Qo.Neutral[1]};
`,IA=q.default.div`
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
`,EA=q.default.div`
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
`,_A=q.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${ws.Base};
        object-fit: contain;
    }
`,MA=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:a})=>e.jsx(_A,Object.assign({role:"link",onClick:e=>{n&&n(e,a)},tabIndex:0,"data-id":r,"data-testid":i,$type:a},{children:e.jsx(hh,{src:t.logoSrc,alt:t.brandName})})),RA=q.default.div`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
    }
`,AA=q.default.div`
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
`,NA=q.default.div`
    display: flex;
    flex-direction: column;
`,BA=q.default.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,FA=q.default(g.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,LA=q.default(is)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Qo.Neutral[1]};

    :active,
    :focus {
        color: ${Qo.Primary};
    }
`,PA=Y.default.forwardRef(((n,r)=>{const{show:i,resources:a,children:o,hideNavBranding:s,onClose:l,onBrandClick:c}=n,[d,u]=t.useState(0),{primary:p,secondary:f}=a;t.useEffect((()=>(h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)})),[]);const h=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(RA,Object.assign({ref:r,"data-testid":"drawer"},{children:e.jsx(AA,Object.assign({$show:i,$viewHeight:d},{children:e.jsxs(NA,{children:[e.jsxs(BA,{children:[e.jsx(IA,Object.assign({"data-id":"drawer-brand-container"},{children:!s&&e.jsxs(e.Fragment,{children:[e.jsx(MA,{resources:p,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&e.jsxs(e.Fragment,{children:[e.jsx(EA,{}),e.jsx(MA,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e.jsx(LA,Object.assign({onClick:l,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e.jsx(FA,{})}))]}),o]})}))}))})),zA={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},HA={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},WA={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},VA={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},YA=q.default.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${ts.MaxWidth.tablet} {
        display: none;
    }
`,UA=q.default.ul`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,qA=q.default.ul`
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
`,KA=q.default.li`
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
`,XA=q.default(Ys.Small)`
    ${ts.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,GA=q.default.div`
    display: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,ZA=q.default(exports.Text.BodySmall)`
    margin-bottom: 0.5rem;
`,QA=q.default.div`
    display: flex;
`,JA=q.default.a`
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
`,eN=({actionButtons:t,mobile:n=!1,onActionButtonClick:r})=>{const i=e=>{e.stopPropagation()},a=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},o=(t,n)=>{const r=t?(e=>{const t=rj(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(n):n;return r.map(((n,r)=>{let o;switch(n.type){case"download":o=t?(s=n.args,e.jsxs(GA,{children:[e.jsx(ZA,Object.assign({weight:"semibold"},{children:s&&s.children||"Download the app"})),e.jsxs(QA,{children:[e.jsx(JA,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(JA,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e.jsx(XA,Object.assign({},n.args,{type:"button",onClick:a(n),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const i=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;o=e.jsx(XA,Object.assign({},n.args,{type:"button",onClick:a(n),"data-testid":i}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var s;if(o)return e.jsx(KA,Object.assign({$mobile:t},{children:o}),`action-button-${r+1}`)}))};if(t){const r=(null==t?void 0:t.mobile)||t.desktop,i=r.filter((e=>!!e.uncollapsible)),a=r.filter((e=>!e.uncollapsible));return n?e.jsx(e.Fragment,{children:a.length>0&&e.jsx(qA,{children:o(n,a)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(UA,{children:o(!1,i)}),t.desktop.length>0&&e.jsx(YA,{children:o(n,t.desktop)})]})}return e.jsx(e.Fragment,{})},tN=q.default.ul`
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
`,nN=q.default.ul`
    display: none;
    list-style: none;

    ${ts.MaxWidth.tablet} {
        border-left: 0.25rem solid ${Qo.Primary};
        display: flex;
        flex-direction: column;
    }
`,rN=q.default(exports.Text.Hyperlink.Small)`
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
`,iN=q.default.li`
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
`,aN=({items:t,mobile:n=!1,onItemClick:r})=>{const i=e=>t=>{t.stopPropagation(),r(t,e)},a=(n=!1)=>t.map(((t,r)=>{const{children:a,options:o}=t,s=X(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e.jsx(iN,{children:e.jsx(rN,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:i(t)},o,{children:a}))},r)}));if(t&&t.length>0){const t=n?nN:tN;return e.jsx(t,{children:a(n)})}return e.jsx(e.Fragment,{})},oN=q.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${ts.MaxWidth.tablet} {
        display: none;
    }
`,sN=q.default.ul`
    display: none;
    list-style: none;

    ${ts.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,lN=q.default.li`
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
`,cN=q.default(exports.Text.Hyperlink.Small)`
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
`,dN=q.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,uN=q.default.div`
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
`,pN=q.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,fN=q.default(is)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,hN=q.default(r.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Qo.Neutral[3]};
    :hover {
        color: ${Qo.Neutral[1]};
    }
`,mN=({items:n,selectedId:r,mobile:i=!1,hideNavBranding:a,onItemClick:o})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&p()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const p=()=>{d(!1)},f=(e,t)=>n=>{n.stopPropagation(),l(t),d(!0),o(n,e)},h=(e,t)=>{e.stopPropagation(),o(e,t),d(!1)},m=()=>n.map(((t,n)=>{if("component"===t.itemType){const r=t&&t.children||null;return e.jsx("li",{children:r},n)}{const o=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),p=o?i?"bold":"semibold":"regular",m=i?`link__mobile-${n+1}`:`link__${n+1}`,g=s>=0&&s===n&&c;return e.jsxs(lN,Object.assign({$hiddenBranding:a},{children:[e.jsxs(cN,Object.assign({"data-testid":m,weight:p,$selected:o},u,{onClick:f(t,n)},d,{children:[e.jsx(dN,{children:l}),o&&e.jsx(uN,{"data-testid":`${m}-indicator`}),i&&t.subMenu&&e.jsx(pN,{children:e.jsx(fN,Object.assign({"data-testid":`${m}-expand-collapse-button`,$selected:g,focusHighlight:!1,focusOutline:"browser","aria-label":g?"Collapse":"Expand"},{children:e.jsx(hN,{})}))})]})),g&&e.jsx(aN,{items:t.subMenu,mobile:i,onItemClick:h})]}),n)}}));return n&&n.length>0?i?e.jsx(sN,Object.assign({ref:u},{children:m()})):e.jsx(oN,Object.assign({ref:u,$alignLeft:a},{children:m()})):e.jsx(e.Fragment,{})},gN=t.forwardRef(((n,r)=>{var{items:a,className:o,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:p=!1,hideNavBranding:f=!1,drawerDismissalExclusions:h=[],actionButtons:m,onItemClick:g,onActionButtonClick:v,onBrandClick:b,masthead:x=!0,layout:y="default"}=n,w=X(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,j]=t.useState(!1),[S,k]=t.useState(!1),C="stretch"===y,O=t.useRef(),T=i.useTheme(),D=(e=>{switch(e){case"bookingsg":return HA;case"mylegacy":return VA;case"ccube":return WA;default:return zA}})(null==T?void 0:T.resourceScheme),I=(null==u?void 0:u.primary)||D.primary,E=null==u?void 0:u.secondary;t.useImperativeHandle(r,(()=>Object.assign(O.current,{dismissDrawer:()=>{_()}})),[$]),t.useEffect((()=>(R(),window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)})),[]);const _=()=>{j(!1),setTimeout((()=>{k(!1)}),550)},M=e=>$&&-1===h.indexOf(e),R=()=>{window.innerWidth<=Jo.tablet&&$&&_()},A=(e,t)=>{b&&(e.preventDefault(),b(t)),M("brand-click")&&_()},N=(e,t)=>{t.onClick?t.onClick(e):g&&(e.preventDefault(),g(t)),!(null==t?void 0:t.subMenu)&&M("item-click")&&_()},B=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):v&&(e.preventDefault(),v(t)),M("item-click")&&_()},F=()=>{j(!0),k(!0)},L=()=>{M("close-button-click")&&_()},P=()=>{const t=a.mobile||a.desktop;return t&&t.length>0||m&&(()=>{const e=m.mobile||m.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e.jsx(TA,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:F,focusHighlight:!1},{children:e.jsx(DA,{})})):null};return e.jsxs(kA,Object.assign({ref:O,$fixed:d,className:o,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper"},{children:[x&&e.jsx(wA,{}),e.jsxs(ox.Content,Object.assign({stretch:C},{children:[e.jsxs(CA,Object.assign({$compress:c},{children:[!f&&e.jsxs(IA,Object.assign({$compress:c,"data-id":"brand-container"},{children:[e.jsx(MA,{resources:I,onClick:A,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),E&&e.jsxs(e.Fragment,{children:[e.jsx(EA,{$compress:c}),e.jsx(MA,{resources:E,onClick:A,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!p&&e.jsxs(OA,Object.assign({$hideNavBranding:f},{children:[e.jsx(mN,{items:a.desktop,onItemClick:N,selectedId:l,hideNavBranding:f}),e.jsx(eN,{actionButtons:m,onActionButtonClick:B}),P()]}))]})),!p&&e.jsx(rf,Object.assign({show:S,enableOverlayClick:!0,onOverlayClick:L},{children:e.jsxs(PA,Object.assign({show:$,resources:{primary:I,secondary:E},onClose:L,onBrandClick:A,actionButtons:m,hideNavBranding:f},{children:[e.jsx(mN,{items:a.mobile||a.desktop,onItemClick:N,selectedId:l,mobile:!0}),e.jsx(eN,{actionButtons:m,onActionButtonClick:B,mobile:!0})]}))}))]}))]}))})),vN=SA,bN=i.css`
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
`,xN=q.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${ws.Base};
    background: ${Qo.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,yN=q.default(ox.Content)`
    display: flex;
`,wN=q.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,$N=q.default.div`
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
        ${bN}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,jN=q.default(exports.Text.Hyperlink.Default)`
    position: relative;

    ${bN}
`,SN=q.default(is)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,kN=q.default(g.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Qo.Neutral[8]};
`,CN=q.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Qo.Validation.Orange.Icon};
    ${gs.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,ON=q.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,TN=n=>{var{children:r,visible:i=!0,dismissible:a=!0,sticky:o=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:p}=n,f=X(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const h=f["data-testid"],[m,g]=t.useState(i),{height:v,ref:b}=Ye();t.useEffect((()=>{g(i)}),[i]);const x=e=>{e.stopPropagation(),g(!1),a&&s&&s()},y=e=>{p.onClick&&(e.stopPropagation(),p.onClick(e))};if(!m)return null;return e.jsxs(xN,Object.assign({ref:c,$sticky:o,$clickable:!!u,onClick:u},f,{children:[e.jsxs(yN,Object.assign({id:DN("container",l)},{children:[e.jsxs(wN,{children:[e.jsx($N,Object.assign({"data-testid":DN("text-content",h),$maxCollapsedHeight:d&&v>d?d:void 0},{children:e.jsx("div",Object.assign({ref:b},{children:r}))})),p&&e.jsx(CN,Object.assign({id:DN("action-button",l),"data-testid":DN("action-button",h),type:"button"},p,{onClick:y},{children:p.children}))]}),a&&e.jsx(SN,Object.assign({onClick:x,id:DN("dismiss-button",l),"data-testid":DN("dismiss-button",h),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e.jsx(kN,{"aria-hidden":!0})}))]})),u&&e.jsx(ON,{"aria-label":"Clickable banner",type:"button"})]}))},DN=(e,t="wrapper")=>`${t}-${e}`,IN=Y.default.forwardRef(((t,n)=>e.jsx(TN,Object.assign({},t,{forwardedRef:n})))),EN=Object.assign(IN,{Link:jN}),{entries:_N,setPrototypeOf:MN,isFrozen:RN,getPrototypeOf:AN,getOwnPropertyDescriptor:NN}=Object;let{freeze:BN,seal:FN,create:LN}=Object,{apply:PN,construct:zN}="undefined"!=typeof Reflect&&Reflect;BN||(BN=function(e){return e}),FN||(FN=function(e){return e}),PN||(PN=function(e,t,n){return e.apply(t,n)}),zN||(zN=function(e,t){return new e(...t)});const HN=rB(Array.prototype.forEach),WN=rB(Array.prototype.lastIndexOf),VN=rB(Array.prototype.pop),YN=rB(Array.prototype.push),UN=rB(Array.prototype.splice),qN=rB(String.prototype.toLowerCase),KN=rB(String.prototype.toString),XN=rB(String.prototype.match),GN=rB(String.prototype.replace),ZN=rB(String.prototype.indexOf),QN=rB(String.prototype.trim),JN=rB(Object.prototype.hasOwnProperty),eB=rB(RegExp.prototype.test),tB=(nB=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return zN(nB,t)});var nB;function rB(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return PN(e,t,r)}}function iB(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:qN;MN&&MN(e,null);let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(RN(t)||(t[r]=e),i=e)}e[i]=!0}return e}function aB(e){for(let t=0;t<e.length;t++){JN(e,t)||(e[t]=null)}return e}function oB(e){const t=LN(null);for(const[n,r]of _N(e)){JN(e,n)&&(Array.isArray(r)?t[n]=aB(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=oB(r):t[n]=r)}return t}function sB(e,t){for(;null!==e;){const n=NN(e,t);if(n){if(n.get)return rB(n.get);if("function"==typeof n.value)return rB(n.value)}e=AN(e)}return function(){return null}}const lB=BN(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),cB=BN(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),dB=BN(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),uB=BN(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),pB=BN(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),fB=BN(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),hB=BN(["#text"]),mB=BN(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),gB=BN(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),vB=BN(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),bB=BN(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xB=FN(/\{\{[\w\W]*|[\w\W]*\}\}/gm),yB=FN(/<%[\w\W]*|[\w\W]*%>/gm),wB=FN(/\$\{[\w\W]*/gm),$B=FN(/^data-[\-\w.\u00B7-\uFFFF]+$/),jB=FN(/^aria-[\-\w]+$/),SB=FN(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kB=FN(/^(?:\w+script|data):/i),CB=FN(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),OB=FN(/^html$/i),TB=FN(/^[a-z][.\w]*(-[.\w]+)+$/i);var DB=Object.freeze({__proto__:null,ARIA_ATTR:jB,ATTR_WHITESPACE:CB,CUSTOM_ELEMENT:TB,DATA_ATTR:$B,DOCTYPE_NAME:OB,ERB_EXPR:yB,IS_ALLOWED_URI:SB,IS_SCRIPT_OR_DATA:kB,MUSTACHE_EXPR:xB,TMPLIT_EXPR:wB});const IB=1,EB=3,_B=7,MB=8,RB=9,AB=function(){return"undefined"==typeof window?null:window};var NB=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:AB();const n=t=>e(t);if(n.version="3.2.6",n.removed=[],!t||!t.document||t.document.nodeType!==RB||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,a=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:f,trustedTypes:h}=t,m=c.prototype,g=sB(m,"cloneNode"),v=sB(m,"remove"),b=sB(m,"nextSibling"),x=sB(m,"childNodes"),y=sB(m,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let w,$="";const{implementation:j,createNodeIterator:S,createDocumentFragment:k,getElementsByTagName:C}=r,{importNode:O}=i;let T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof _N&&"function"==typeof y&&j&&void 0!==j.createHTMLDocument;const{MUSTACHE_EXPR:D,ERB_EXPR:I,TMPLIT_EXPR:E,DATA_ATTR:_,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:N}=DB;let{IS_ALLOWED_URI:B}=DB,F=null;const L=iB({},[...lB,...cB,...dB,...pB,...hB]);let P=null;const z=iB({},[...mB,...gB,...vB,...bB]);let H=Object.seal(LN(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,Y=!0,U=!0,q=!1,K=!0,X=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,ne=!1,re=!0,ie=!1,ae=!0,oe=!1,se={},le=null;const ce=iB({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=iB({},["audio","video","img","source","image","track"]);let pe=null;const fe=iB({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",me="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml";let ve=ge,be=!1,xe=null;const ye=iB({},[he,me,ge],KN);let we=iB({},["mi","mo","mn","ms","mtext"]),$e=iB({},["annotation-xml"]);const je=iB({},["title","style","font","a","script"]);let Se=null;const ke=["application/xhtml+xml","text/html"];let Ce=null,Oe=null;const Te=r.createElement("form"),De=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Oe||Oe!==e){if(e&&"object"==typeof e||(e={}),e=oB(e),Se=-1===ke.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Ce="application/xhtml+xml"===Se?KN:qN,F=JN(e,"ALLOWED_TAGS")?iB({},e.ALLOWED_TAGS,Ce):L,P=JN(e,"ALLOWED_ATTR")?iB({},e.ALLOWED_ATTR,Ce):z,xe=JN(e,"ALLOWED_NAMESPACES")?iB({},e.ALLOWED_NAMESPACES,KN):ye,pe=JN(e,"ADD_URI_SAFE_ATTR")?iB(oB(fe),e.ADD_URI_SAFE_ATTR,Ce):fe,de=JN(e,"ADD_DATA_URI_TAGS")?iB(oB(ue),e.ADD_DATA_URI_TAGS,Ce):ue,le=JN(e,"FORBID_CONTENTS")?iB({},e.FORBID_CONTENTS,Ce):ce,W=JN(e,"FORBID_TAGS")?iB({},e.FORBID_TAGS,Ce):oB({}),V=JN(e,"FORBID_ATTR")?iB({},e.FORBID_ATTR,Ce):oB({}),se=!!JN(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,q=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,ae=!1!==e.KEEP_CONTENT,oe=e.IN_PLACE||!1,B=e.ALLOWED_URI_REGEXP||SB,ve=e.NAMESPACE||ge,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&De(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&De(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(U=!1),te&&(ee=!0),se&&(F=iB({},hB),P=[],!0===se.html&&(iB(F,lB),iB(P,mB)),!0===se.svg&&(iB(F,cB),iB(P,gB),iB(P,bB)),!0===se.svgFilters&&(iB(F,dB),iB(P,gB),iB(P,bB)),!0===se.mathMl&&(iB(F,pB),iB(P,vB),iB(P,bB))),e.ADD_TAGS&&(F===L&&(F=oB(F)),iB(F,e.ADD_TAGS,Ce)),e.ADD_ATTR&&(P===z&&(P=oB(P)),iB(P,e.ADD_ATTR,Ce)),e.ADD_URI_SAFE_ATTR&&iB(pe,e.ADD_URI_SAFE_ATTR,Ce),e.FORBID_CONTENTS&&(le===ce&&(le=oB(le)),iB(le,e.FORBID_CONTENTS,Ce)),ae&&(F["#text"]=!0),Z&&iB(F,["html","head","body"]),F.table&&(iB(F,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw tB('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw tB('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(h,a)),null!==w&&"string"==typeof $&&($=w.createHTML(""));BN&&BN(e),Oe=e}},Ee=iB({},[...cB,...dB,...uB]),_e=iB({},[...pB,...fB]),Me=function(e){YN(n.removed,{element:e});try{y(e).removeChild(e)}catch(t){v(e)}},Re=function(e,t){try{YN(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){YN(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Me(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ae=function(e){let t=null,n=null;if(J)e="<remove></remove>"+e;else{const t=XN(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Se&&ve===ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(ve===ge)try{t=(new f).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=j.createDocument(ve,"template",null);try{t.documentElement.innerHTML=be?$:i}catch(e){}}const a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),ve===ge?C.call(t,Z?"html":"body")[0]:Z?t.documentElement:a},Ne=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Be=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Fe=function(e){return"function"==typeof l&&e instanceof l};function Le(e,t,r){HN(e,(e=>{e.call(n,t,r,Oe)}))}const Pe=function(e){let t=null;if(Le(T.beforeSanitizeElements,e,null),Be(e))return Me(e),!0;const r=Ce(e.nodeName);if(Le(T.uponSanitizeElement,e,{tagName:r,allowedTags:F}),G&&e.hasChildNodes()&&!Fe(e.firstElementChild)&&eB(/<[/\w!]/g,e.innerHTML)&&eB(/<[/\w!]/g,e.textContent))return Me(e),!0;if(e.nodeType===_B)return Me(e),!0;if(G&&e.nodeType===MB&&eB(/<[/\w]/g,e.data))return Me(e),!0;if(!F[r]||W[r]){if(!W[r]&&He(r)){if(H.tagNameCheck instanceof RegExp&&eB(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(ae&&!le[r]){const t=y(e)||e.parentNode,n=x(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const i=g(n[r],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,b(e))}}}return Me(e),!0}return e instanceof c&&!function(e){let t=y(e);t&&t.tagName||(t={namespaceURI:ve,tagName:"template"});const n=qN(e.tagName),r=qN(t.tagName);return!!xe[e.namespaceURI]&&(e.namespaceURI===me?t.namespaceURI===ge?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||we[r]):Boolean(Ee[n]):e.namespaceURI===he?t.namespaceURI===ge?"math"===n:t.namespaceURI===me?"math"===n&&$e[r]:Boolean(_e[n]):e.namespaceURI===ge?!(t.namespaceURI===me&&!$e[r])&&!(t.namespaceURI===he&&!we[r])&&!_e[n]&&(je[n]||!Ee[n]):!("application/xhtml+xml"!==Se||!xe[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!eB(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&e.nodeType===EB&&(t=e.textContent,HN([D,I,E],(e=>{t=GN(t,e," ")})),e.textContent!==t&&(YN(n.removed,{element:e.cloneNode()}),e.textContent=t)),Le(T.afterSanitizeElements,e,null),!1):(Me(e),!0)},ze=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in r||n in Te))return!1;if(U&&!V[t]&&eB(_,t));else if(Y&&eB(M,t));else if(!P[t]||V[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&eB(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&eB(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&eB(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(pe[t]);else if(eB(B,GN(n,A,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==ZN(n,"data:")||!de[e]){if(q&&!eB(R,GN(n,A,"")));else if(n)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&XN(e,N)},We=function(e){Le(T.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Be(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P,forceKeepAttr:void 0};let i=t.length;for(;i--;){const a=t[i],{name:o,namespaceURI:s,value:l}=a,c=Ce(o),d=l;let u="value"===o?d:QN(d);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,Le(T.uponSanitizeAttribute,e,r),u=r.attrValue,!ie||"id"!==c&&"name"!==c||(Re(o,e),u="user-content-"+u),G&&eB(/((--!?|])>)|<\/(style|title)/i,u)){Re(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){Re(o,e);continue}if(!K&&eB(/\/>/i,u)){Re(o,e);continue}X&&HN([D,I,E],(e=>{u=GN(u,e," ")}));const p=Ce(e.nodeName);if(ze(p,c,u)){if(w&&"object"==typeof h&&"function"==typeof h.getAttributeType)if(s);else switch(h.getAttributeType(p,c)){case"TrustedHTML":u=w.createHTML(u);break;case"TrustedScriptURL":u=w.createScriptURL(u)}if(u!==d)try{s?e.setAttributeNS(s,o,u):e.setAttribute(o,u),Be(e)?Me(e):VN(n.removed)}catch(t){Re(o,e)}}else Re(o,e)}Le(T.afterSanitizeAttributes,e,null)},Ve=function e(t){let n=null;const r=Ne(t);for(Le(T.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Le(T.uponSanitizeShadowNode,n,null),Pe(n),We(n),n.content instanceof o&&e(n.content);Le(T.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,a=null,s=null,c=null;if(be=!e,be&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Fe(e)){if("function"!=typeof e.toString)throw tB("toString is not a function");if("string"!=typeof(e=e.toString()))throw tB("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Q||Ie(t),n.removed=[],"string"==typeof e&&(oe=!1),oe){if(e.nodeName){const t=Ce(e.nodeName);if(!F[t]||W[t])throw tB("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=Ae("\x3c!----\x3e"),a=r.ownerDocument.importNode(e,!0),a.nodeType===IB&&"BODY"===a.nodeName||"HTML"===a.nodeName?r=a:r.appendChild(a);else{if(!ee&&!X&&!Z&&-1===e.indexOf("<"))return w&&ne?w.createHTML(e):e;if(r=Ae(e),!r)return ee?null:ne?$:""}r&&J&&Me(r.firstChild);const d=Ne(oe?e:r);for(;s=d.nextNode();)Pe(s),We(s),s.content instanceof o&&Ve(s.content);if(oe)return e;if(ee){if(te)for(c=k.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(P.shadowroot||P.shadowrootmode)&&(c=O.call(i,c,!0)),c}let u=Z?r.outerHTML:r.innerHTML;return Z&&F["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&eB(OB,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),X&&HN([D,I,E],(e=>{u=GN(u,e," ")})),w&&ne?w.createHTML(u):u},n.setConfig=function(){Ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},n.clearConfig=function(){Oe=null,Q=!1},n.isValidAttribute=function(e,t,n){Oe||Ie({});const r=Ce(e),i=Ce(t);return ze(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&YN(T[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=WN(T[e],t);return-1===n?void 0:UN(T[e],n,1)[0]}return VN(T[e])},n.removeHooks=function(e){T[e]=[]},n.removeAllHooks=function(){T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const BB=q.default.div`
    display: flex;
    flex-direction: column;
`,FB=q.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,LB=q.default(Lx)`
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
`,PB=q.default(Ys.Small)`
    margin: 2rem 0rem;
`,zB=q.default.nav`
    display: flex;
`,HB=q.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${ts.MaxWidth.tablet} {
        align-self: center;
    }
`,WB=q.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,VB=q.default(is)`
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
`,YB=q.default(is)`
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
`,UB=q.default(Ys.Default)`
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
`;const qB=q.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,KB=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Qo.Neutral[1]};

    display: flex;
    justify-content: center;
`,XB=q.default(exports.Text.Body)`
    white-space: nowrap;
`,GB=q.default(exports.Text.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,ZB=q.default(Lx)`
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
`,QB=q.default.div`
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
`,JB=q.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,eF=Y.default.forwardRef((({id:n,"data-testid":r,className:i,pageSize:a=10,totalItems:o,activePage:s,pageSizeOptions:l=tF,showFirstAndLastNav:c,showPageSizeChanger:d=!1,onPageChange:u,onPageSizeChange:p},m)=>{const g=kl.useMediaQuery({maxWidth:Jo.mobileL}),v=l,[b,x]=t.useState(!1),[y,w]=t.useState(!1),[$,j]=t.useState(""),[S,k]=t.useState(v&&v.length>=1?v[0]:null),[C,O]=t.useState(!g&&d&&S?S.value:a),T=Math.ceil(o/C),D=1===s,I=s===T,E=s>1?()=>V(1):void 0,_=s<T?()=>V(T):void 0,M=s>1?()=>V(s-1):void 0,R=s<T?()=>V(parseInt(s.toString())+1):void 0,A=e=>e?()=>Z():()=>X(),N=e=>e?()=>Q():()=>G();t.useEffect((()=>{s&&H(s)}),[s]),t.useEffect((()=>{var e;O(a),k(null!==(e=v.find((e=>e.value===a)))&&void 0!==e?e:null)}),[a]);const H=e=>{j(e.toString())},W=()=>{x(!1),w(!1)},V=e=>{u&&(u(e),H(e))},Y=()=>{const e=Math.min(T,s+5);V(e),H(e),x(!0),w(!1)},U=()=>{const e=Math.max(1,s-5);V(e),H(e),x(!1),w(!0)},q=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));H(Math.max(1,Math.min(T,e)))}else j(t.replace(/[^0-9]/g,""))},K=e=>{e.preventDefault(),$&&u(parseInt($))},X=()=>{x(!0)},G=()=>{x(!1)},Z=()=>{w(!0)},Q=()=>{w(!1)},J=(t,n,r)=>e.jsxs(qB,{children:[e.jsx(VB,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:A(t),onMouseOut:N(t),onFocus:A(t),onBlur:N(t),onClick:t?U:Y},{children:t&&y?e.jsx(B.Chevron2LeftIcon,{"aria-hidden":!0}):n&&b?e.jsx(F.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(z.EllipsisHorizontalIcon,{"aria-hidden":!0})})),t&&y&&e.jsx(QB,{children:"Previous 5 pages"}),n&&b&&e.jsx(QB,{children:"Next 5 pages"})]},r);return e.jsxs(zB,Object.assign({className:i,ref:m,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e.jsx(HB,{children:e.jsxs(WB,{children:[c&&e.jsx(YB,Object.assign({onClick:E,disabled:D,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e.jsx(L.ChevronLineLeftIcon,{"aria-hidden":!0})})),e.jsx(YB,Object.assign({onClick:M,disabled:D,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e.jsx(h.ChevronLeftIcon,{"aria-hidden":!0})})),g?e.jsxs(KB,{children:[e.jsx("form",Object.assign({onSubmit:K},{children:e.jsx(ZB,{value:$,onChange:q,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e.jsx(GB,{children:"/"}),e.jsx(XB,{children:T})]}):[...Array(T)].map(((t,n)=>{const r=n+1,i=T-5,a=s===r;if(T<=7)return e.jsx(UB,Object.assign({onClick:()=>V(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:W,onFocus:W},{children:r}),r);const o=s+1>5&&2===r,l=s-1<=i&&r===T-1-1;return o||l?J(o,l,r):r<=5&&s+1<=5||r<=1||r===s||r<=s+1&&r>=s-1-1||r>i&&s-1>i||r>T-1?e.jsx(UB,Object.assign({onClick:()=>V(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:W,onFocus:W},{children:r}),r):null})),e.jsx(YB,Object.assign({onClick:R,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e.jsx(f.ChevronRightIcon,{"aria-hidden":!0})})),c&&e.jsx(YB,Object.assign({onClick:_,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e.jsx(P.ChevronLineRightIcon,{"aria-hidden":!0})}))]})}),d&&!g&&e.jsx(JB,{children:e.jsx(sI,{options:v,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:S,onSelectOption:e=>{k(e);const t=e.value,n=Math.ceil(o/t);O(t);p&&p(s>=n?n:s,t)}})})]}))})),tF=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],nF=q.default.div`
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
`,rF=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,iF=t=>{var{type:n,colorType:r="black",children:i,icon:a}=t,o=X(t,["type","colorType","children","icon"]);return e.jsxs(nF,Object.assign({$type:n,$color:r},o,{children:[a,e.jsx(rF,{children:i})]}))},aF=q.default.div`
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
`,oF=q.default($f)`
    padding: 3.5rem 1.25rem 2.5rem;
`,sF=q.default.div`
    position: relative;
    width: fit-content;
`,lF=q.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,cF=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,dF=n=>{var{children:r,visible:i,onMobileClose:a}=n,o=X(n,["children","visible","onMobileClose"]);const s=o["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=kl.useMediaQuery({maxWidth:Jo.mobileL}),p=t.useRef(l);t.useEffect((()=>(m(),window.addEventListener("resize",Zd(f,300)),()=>{window.removeEventListener("resize",Zd(f,300))})),[]);const f=()=>{m()},h=()=>{a&&a()},m=()=>{const e=g();var t;e&&(t=e,p.current=t,c(t))},g=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===p.current||"left"===p.current)&&e.x-e.width/2>t||("top-right"===p.current||"right"===p.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},v=()=>"string"==typeof r?e.jsx(exports.Text.BodySmall,{children:r}):r;return e.jsxs(e.Fragment,{children:[e.jsx(aF,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},o,{children:e.jsx(Td,{children:v()})})),u&&e.jsx(xf,Object.assign({show:i,onOverlayClick:h},{children:e.jsx(oF,Object.assign({onClose:h},{children:e.jsx(cF,{children:v()})}))}))]})},uF=q.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${ts.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${ts.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,pF=q.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,fF=q.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Qo.Accent.Light[1]:Qo.Neutral[6])(e)};\n        `}};
`,hF=q.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Qo.Primary:Qo.Neutral[3])(e)};`}};
`,mF=q.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    color: ${Qo.Neutral[1]};
`,gF=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var vF=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),bF=Mo,xF=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yF=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var wF=function(e){return(e=bF(e))&&e.replace(xF,vF).replace(yF,"")},$F=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var jF=function(e){return e.match($F)||[]},SF=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var kF=function(e){return SF.test(e)},CF="\\ud800-\\udfff",OF="\\u2700-\\u27bf",TF="a-z\\xdf-\\xf6\\xf8-\\xff",DF="A-Z\\xc0-\\xd6\\xd8-\\xde",IF="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",EF="["+IF+"]",_F="\\d+",MF="["+OF+"]",RF="["+TF+"]",AF="[^"+CF+IF+_F+OF+TF+DF+"]",NF="(?:\\ud83c[\\udde6-\\uddff]){2}",BF="[\\ud800-\\udbff][\\udc00-\\udfff]",FF="["+DF+"]",LF="(?:"+RF+"|"+AF+")",PF="(?:"+FF+"|"+AF+")",zF="(?:['’](?:d|ll|m|re|s|t|ve))?",HF="(?:['’](?:D|LL|M|RE|S|T|VE))?",WF="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",VF="[\\ufe0e\\ufe0f]?",YF=VF+WF+("(?:\\u200d(?:"+["[^"+CF+"]",NF,BF].join("|")+")"+VF+WF+")*"),UF="(?:"+[MF,NF,BF].join("|")+")"+YF,qF=RegExp([FF+"?"+RF+"+"+zF+"(?="+[EF,FF,"$"].join("|")+")",PF+"+"+HF+"(?="+[EF,FF+LF,"$"].join("|")+")",FF+"?"+LF+"+"+zF,FF+"+"+HF,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_F,UF].join("|"),"g");var KF=jF,XF=kF,GF=Mo,ZF=function(e){return e.match(qF)||[]};var QF=FD,JF=wF,eL=function(e,t,n){return e=GF(e),void 0===(t=n?void 0:t)?XF(e)?ZF(e):KF(e):e.match(t)||[]},tL=RegExp("['’]","g");var nL=Ci(function(e){return function(t){return QF(eL(JF(t).replace(tL,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const rL=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${Qo.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${Qo.Neutral[4](e)};\n\t\t\t`}}
`,iL=q.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,aL=q.default.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?Qo.Neutral[4](e):Qo.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,oL=q.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,sL=q.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${Qo.Neutral[5]};
    background-color: ${Qo.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,lL=q.default(sL)`
    height: 100vh;
    left: 0;
    top: 0;
    ${ts.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,cL=q.default(sL)`
    display: none;
    visibility: hidden;
    ${ts.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,dL=q.default(Si.ul)`
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
`,uL=q.default.li`
    width: 100%;
`,pL=q.default(Ys.Default)`
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
`,fL=q.default.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,hL=q.default(exports.Text.XSmall)``,mL=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),gL=q.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,vL=q.default.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${Qo.Neutral[5]};
`,bL=q.default(Si.li)``,xL=q.default(Ys.Default)`
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
`,yL=q.default(Si.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,wL=q.default.div`
    align-self: center;
    padding-left: 0.5rem;
`,$L=q.default(r.ChevronUpIcon)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${Qo.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,jL=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,SL=q.default(Si.ul)``,kL=q.default.li``,CL=q.default(Ys.Default)`
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
`,OL=Object.assign((n=>{var{fixed:r=!0,children:i}=n,a=X(n,["fixed","children"]);const o=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,p]=t.useState(void 0),[f,h]=t.useState(!1),m=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:p})),[s,c,u,l,d,p]),g=oi({width:f?240:0,borderRightWidth:f?1:0,borderTopWidth:f?1:0,borderBottomWidth:f?1:0,borderLeftWidth:0});return cc("click",(e=>{o.current&&!o.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),p(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{h(c&&!!c.content||s&&!!s.content)}),[s,c]),e.jsx(mL.Provider,Object.assign({value:m},{children:e.jsxs(oL,Object.assign({$fixed:r},a,{ref:o,onMouseLeave:()=>{l(void 0)}},{children:[e.jsx(lL,{children:i}),e.jsx(dL,Object.assign({style:g,$showDrawer:f,"data-testid":"sidenav-drawer"},{children:s&&s.content||c&&c.content})),e.jsx(cL,{})]}))}))}),{Group:t=>{var{separator:n,children:r}=t,i=X(t,["separator","children"]);return e.jsxs(gL,Object.assign({},i,{children:[r,n&&e.jsx(vL,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:a,onClick:o}=n,s=X(n,["children","icon","title","onClick"]);const l=s.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:p,setPreviouslySelectedItemId:f,setSelectedItem:h}=t.useContext(mL);t.useEffect((()=>{s.selected&&h({itemId:l,content:void 0})}),[s.selected]);return e.jsx(uL,{children:e.jsxs(pL,Object.assign({styleType:"link",type:"button",onClick:()=>{f((()=>{if(r&&u)return d||u.itemId})()),p({itemId:l,content:r}),h({itemId:l,content:r}),o&&!r&&o(l)},onMouseEnter:()=>{p({itemId:l,content:r})}},s,{$highlight:u&&u.itemId===l||c&&c.itemId===l},{children:[e.jsx(fL,{children:i}),e.jsx(hL,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:a,children:o}=n,s=X(n,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:p,setSelectedItem:f,setPreviouslySelectedItemId:h,setCurrentItem:m}=t.useContext(mL),g=oi({from:{opacity:0},to:{opacity:1}}),v=Ye(),b=v.ref,x=oi({height:o&&l?v.height:0});return e.jsxs(bL,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:g},{children:[e.jsxs(xL,Object.assign({styleType:"link",type:"button",onClick:()=>{o?c(!l):(f({itemId:p.itemId,content:void 0}),m(void 0),h(void 0),a&&a(r))},$highlight:d&&l,$noChildren:!o},{children:[e.jsx(jL,{children:i}),o&&e.jsx(wL,{children:e.jsx($L,{"aria-hidden":!0,$expanded:l})})]})),e.jsx(yL,Object.assign({style:x},{children:e.jsx(SL,Object.assign({ref:b},{children:o}))}))]}))},DrawerSubitem:n=>{var{id:r,title:i,onClick:a}=n,o=X(n,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(mL);return e.jsx(kL,Object.assign({},o,{children:e.jsx(CL,Object.assign({styleType:"link",type:"button",onClick:()=>{a&&a(r),l({itemId:s.itemId,content:void 0}),c(void 0),d(void 0)}},{children:i}))}))}}),TL=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,DL=q.default.div`
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
                animation: ${TL} 0.3s;
            `}}
`,IL=q.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,EL=q.default(is)`
    padding: 0;
`,_L=q.default(g.CrossIcon)`
    color: ${Qo.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,ML=q.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,RL=q.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${ts.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,AL=q.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,NL=q.default.div`
    max-width: 30%;
`,BL=q.default(Ys.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${gs.getTextStyle("XSmall","semibold")};
    }
`,FL=q.default(exports.Text.H6)`
    overflow-wrap: anywhere;
    ${ts.MaxWidth.mobileM} {
        ${gs.getTextStyle("XSmall","semibold")}
    }
`,LL=q.default(exports.Text.XSmall)`
    overflow-wrap: anywhere;
`,PL=q.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,zL=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,HL=q.default(b.StarFillIcon)`
    ${zL}
`,WL=q.default(H.StarHalfIcon)`
    ${zL}
`,VL=q.default(v.StarIcon)`
    ${zL}
`,YL="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",UL="smart-app-banner";const qL=Y.default.forwardRef((function(t,n){const{className:r,show:i,href:a,content:o,offset:s=0,icon:l=YL,animated:c=!1,onDismiss:d,onClick:u}=t,{title:p,message:f,buttonLabel:h,buttonAriaLabel:m,numberOfStars:g}=o,v=e=>{e.stopPropagation(),window.open(a,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(DL,Object.assign({ref:n,$isAnimated:c,$offset:s,className:r},{children:[e.jsx(IL,Object.assign({onClick:d,id:`${UL}-dismiss`,"data-testid":`${UL}-dismiss-container`},{children:e.jsx(EL,Object.assign({"aria-label":"Dismiss"},{children:e.jsx(_L,{})}))})),e.jsxs(ML,Object.assign({onClick:v,id:`${UL}-proceed`,"data-testid":`${UL}-proceed-container`},{children:[e.jsx(AL,{src:l,alt:"lifesg-app-icon"}),e.jsxs(RL,{children:[e.jsx(FL,{children:p}),e.jsx(LL,{children:f}),(()=>{if(isNaN(g)||g<0)return;const t=[],n=g-Math.floor(g)>=.4;for(let n=0;n<Math.floor(g);n++)t.push(e.jsx(HL,{},`star${n}`));if(n&&t.push(e.jsx(WL,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e.jsx(VL,{},`emptystar${r}`))}return e.jsx(PL,{children:t.slice(0,5)})})()]}),e.jsx(NL,{children:e.jsx(BL,Object.assign({type:"button",onClick:v,"aria-label":m},{children:h}))})]}))]}))})})),KL=Y.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),XL=q.default.div`
    position: relative;
    width: 100%;
`,GL=q.default.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${ts.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,ZL=q.default.div`
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
`,QL=q.default(is)`
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
`,JL=t.forwardRef(((n,r)=>{var{children:i,fadeColor:a,fadePosition:o="both",showIndicator:s=!1,onResize:l}=n,c=X(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===o||"both"===o),[p,m]=t.useState("right"===o||"both"===o),g=t.useRef(null),v=t.useRef(null),b=tu(x,50);function x(){const e=g.current,t=v.current;e&&t&&t.scrollWidth>e.offsetWidth?(m(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(m(!1),u(!1))}function y(){x(),l&&l({content:v.current,wrapper:g.current})}Ye({onResize:y,targetRef:g,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(r,(()=>({resize(){y()}}))),t.useEffect((()=>{const e=v.current;return x(),e&&e.addEventListener("scroll",b),()=>{e&&e.removeEventListener("scroll",b)}}),[]);return e.jsxs(XL,Object.assign({ref:g},c,{children:[e.jsx(ZL,Object.assign({ref:v},{children:i})),(()=>{let t;return t=Array.isArray(a)&&a.length>0?{left:a,right:a}:a||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(GL,Object.assign({$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e.jsx(QL,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e.jsx(h.ChevronLeftIcon,{})}))})),p&&e.jsx(GL,Object.assign({$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e.jsx(QL,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e.jsx(f.ChevronRightIcon,{})}))}))]})})()]}))})),eP=q.default.ul`
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
`,tP=q.default.li`
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
`,nP=q.default.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,rP=q.default(exports.Text.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Qo.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,iP=q.default(exports.Text.Body)`
    color: ${Qo.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,aP=q.default(JL)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,oP=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:o,currentActiveIndex:s,tabLinks:l}=t.useContext(KL),c=kl.useMediaQuery({maxWidth:ns.mobileL}),d=t.useRef(null),u=e=>t=>{t.preventDefault(),n||o(e),i&&i(l[e].title,e)},p=e=>c&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(aP,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=ns.tablet&&d.current&&(e.scrollLeft=d.current.getBoundingClientRect().left)},"data-testid":r},{children:e.jsx(eP,Object.assign({role:"tablist",$fullWidthIndicatorLine:a},{children:l.map(((t,n)=>{const i=s===n;return e.jsx(tP,Object.assign({role:"none",$active:i,ref:i?d:null,$width:t.width},{children:e.jsxs(nP,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:u(n),"data-testid":`${r}-link-${n}`},{children:[e.jsx(rP,Object.assign({$active:i,weight:"regular"},{children:p(t.title)})),e.jsx(iP,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:p(t.title)}))]}))}),n)}))}))}))},sP=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,lP=Object.assign((n=>{var{children:r,currentActive:i,initialActive:a=0,onTabClick:o,"data-testid":s,fullWidthIndicatorLine:l}=n,c=X(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[d,u]=t.useState(i||a),p=t.useMemo((()=>t.Children.toArray(r).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[r]);t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);return e.jsx(sP,Object.assign({"data-testid":s},c,{children:e.jsxs(KL.Provider,Object.assign({value:{tabLinks:p,currentActiveIndex:d,setCurrentActiveIndex:u}},{children:[e.jsx(oP,{controlledMode:"number"==typeof i,onTabClick:o,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(r).filter(Boolean).map(((e,n)=>t.cloneElement(e,{key:n,index:n})))]}))}))}),{Item:n=>{var{index:r,children:i}=n,a=X(n,["index","children"]);const{currentActiveIndex:o}=t.useContext(KL);return o===r?e.jsx("div",Object.assign({role:"tabpanel"},a,{children:i})):null}}),cP=q.default.div`
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
`,dP=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var uP;Pl.extend(Hl),function(e){e.formatHourlyDisplay=e=>Pl(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>ic.getTimeDiffInMinutes(e,t)/15*(n/2)}(uP||(uP={}));const pP=1.25,fP=e=>"minified"===e?12:40,hP=e=>"minified"===e?12:40,mP=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,gP=q.default(is)`
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
`,vP=q.default(f.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Qo.Primary};
`,bP=q.default(h.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Qo.Primary};
`,xP=q.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+hP(e)}px`};
`,yP=q.default.div`
    position: relative;
    white-space: nowrap;
    height: ${pP}rem;
`,wP=q.default.div`
    display: flex;
    white-space: nowrap;
`,$P=q.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${fP(e)}px`};
    position: relative;
    border-left: 1px solid ${Qo.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?pP:.625;break;case"minified":t=e.$isLongMarker?pP:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,jP=q.default(exports.Text.XSmall)`
    color: ${Qo.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,SP=q.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${hP(e.$variant)}px;
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
`,kP=q.default.div`
    position: absolute;
    top: ${pP}rem;
    height: ${({$variant:e})=>`${hP(e)}px`};
    z-index: 1;
    border-right: 1px solid ${Qo.Neutral[2]};
`,CP=q.default(exports.Text.XSmall)`
    color: ${e=>e.$color||Qo.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,OP=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,TP=q.default(exports.Text.XSmall)`
    ${e=>e.$disabled&&i.css`
            color: ${Qo.Neutral[4]};
        `}
`,DP=q.default.div`
    grid-column: 2 / -1;
    display: flex;
`,IP=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,EP=q.default(Si.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,_P=q.default.div`
    display: flex;
    gap: 0.25rem;
    transition: ${ws.Base};
    overflow: hidden;
`,MP=q.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${ws.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,RP=q.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,AP=q.default.div`
    ${gs.getFontFamily("Body",700)}
    color: ${Qo.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,NP=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,BP=q.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,FP=q.default(Ys.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,LP=q.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,PP=q.default(SP)`
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
`;var zP=qi;var HP=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o==o&&!zP(o):n(o,s)))var s=o,l=a}return l};var WP=HP,VP=V$,YP=function(e,t){return e<t};var UP=Ci((function(e,t){return e&&e.length?WP(e,VP(t),YP):void 0}));var qP=HP,KP=function(e,t){return e>t},XP=V$;var GP=Ci((function(e,t){return e&&e.length?qP(e,XP(t),KP):void 0}));const ZP=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:p=30,variant:f="flexible",enableSelection:h=!0,onSlotClick:m})=>{var g,v,b,x;const y="YYYY-MM-DD",[w,$]=t.useState(!1),[j,S]=t.useState(),k=t.useMemo((()=>Ql.generateDaysForCurrentWeek(n)),[n]),C=Object.values(null!=u?u:{}).flat(),O=null!==(v=null!=l?l:null===(g=UP(C,"startTime"))||void 0===g?void 0:g.startTime)&&void 0!==v?v:"00:00",T=null!==(x=null!=c?c:null===(b=GP(C,"endTime"))||void 0===b?void 0:b.endTime)&&void 0!==x?x:"24:00",D=Math.ceil(ic.getTimeDiffInMinutes(O,T)/p),{height:I,ref:E}=Ye(),_=d?I<d||w?I:d:I,M=oi({height:_}),R=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,n])=>{const r=function(e){const t=Array(D).fill({});return e.forEach((e=>{const n=Math.max(0,ic.getTimeDiffInMinutes(O,e.startTime)/p),r=Math.min(D,ic.getTimeDiffInMinutes(O,e.endTime)/p),i=Math.ceil(r)-Math.floor(n);switch(f){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let a=0;a<i;a++){const o=ic.addMinutesToTime(O,Math.floor(n+a)*p),s=ic.addMinutesToTime(o,p);let l;xD(t[Math.floor(n+a)])?0===a&&n%1!=0?l="top":a===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let a=0;switch(f){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return xD(t)&&xD(n)?e:[...e,t]}),[{}]);a<e.length;){if(xD(e[a])){const o=null!==(n=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:O,s=null!==(i=null===(r=e[a+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:T;if(o!==s){const t=ic.getTimeDiffInMinutes(o,s)/p;e[a]=Object.assign(Object.assign({},L(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)xD(e[a])?(e[a]=L(a),a++):a+=e[a].cellLength}return e.filter((e=>!xD(e)&&e.cellLength>0))}(r)})),e}return{}}),[u]),A=e=>{S(e)},N=()=>{S(void 0)},B=e=>{e.preventDefault(),$((e=>!e))},F=e=>{var t;const n=Ql.isWithinRange(e,o?Pl(o):void 0,s?Pl(s):void 0),i=null!==(t=r&&r.includes(e.format(y)))&&void 0!==t&&t;return!n||i};function L(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return e.jsxs(IP,{children:[e.jsx(DP,{children:k.map(((t,n)=>{const r=(e=>{const t=e.format(y),n=F(e),r={},a=h&&!n;return n&&(r.disabled=!0),r.interactive=h?a:null,a&&j&&e.isSame(j,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e.jsx(gd,Object.assign({date:t,calendarDate:Pl(i),onSelect:()=>{((e,t)=>{!t&&h&&a(e)})(t,!r.interactive)},onHover:A,onHoverEnd:N},r),`day-${n}`)}))}),e.jsx(DP,{children:k.map(((t,n)=>e.jsx(OP,{children:e.jsx(TP,Object.assign({weight:"semibold",$disabled:F(t)},{children:Pl(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=Pl(O,"HH:mm").add(4*e*p,"minutes"),r=n.format("h"),i=n.format("mm"),a=n.format("a");let o=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==a||"00"!==i||(o+=` ${a}`,t=!0),o};return e.jsx(MP,Object.assign({$height:_},{children:Array(Math.ceil(D/4)).fill(void 0).map(((t,r)=>e.jsx(RP,{children:e.jsx(AP,{children:n(r)})},`time-${r}`)))}))})(),e.jsx(EP,Object.assign({style:M},{children:e.jsx(_P,Object.assign({ref:E},{children:k.map(((t,n)=>{var r;const i=t.format(y),a=null!==(r=R[i])&&void 0!==r?r:Array("flexible"===f?D:1).fill(void 0).map(((e,t)=>L(t,"fixed"===f?D:void 0)));return e.jsx(NP,{children:a.map((t=>{const{id:n,clickable:r=!0,styleAttributes:a,cellLength:o,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=a;return e.jsx(PP,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===f?12*o+4*(o-1):12,onClick:()=>r&&((e,t)=>{m&&m(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format(y)}`)})),(()=>{if(d&&E.current&&!(I&&I<d))return e.jsx(BP,{children:e.jsxs(FP,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:B},{children:[e.jsx(LP,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]}))})})()]})},QP=q.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${ts.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,JP="YYYY-MM-DD",ez=q.default(nd)`
    ${e=>{const{$variant:t}=e;if("default"===t)return i.css`
                    ${gs.getFontFamily("H5","semibold")}
                    color: ${Qo.Neutral[3]};
                `}}
`,tz=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,nz=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,rz=q.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,iz=q.default.div`
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
`,az=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Pl.extend(Vl);const oz={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},sz=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>Ql.generateDaysForCurrentWeek(n)),[n]),p="YYYY-MM-DD",f=e=>{const t=e.format(p),n=(e=>{const t=Ql.isWithinRange(e,o?Pl(o):void 0,s?Pl(s):void 0),n=r&&r.includes(e.format(p));return!t||n})(e),a={},l={};return n&&(a.$disabledDisplay=!0,l.$disabledDisplay=!0),a.$interactive=c&&!n,[i].includes(t)&&(a.$selected=!0,l.$selected=!0),{styleCircleProps:a,styleLabelProps:l}};return e.jsxs(nz,{children:[e.jsx(Qc,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:o}=f(t);return e.jsx(Jc,{children:e.jsx(rd,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&a(e)})(t,!i.$interactive)},i,{children:e.jsx(ez,Object.assign({weight:o.$selected?"semibold":"regular",$variant:r},o,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e.jsx(tz,{children:e.jsx(exports.Text.XSmall,Object.assign({weight:"semibold"},{children:Pl(t).format("ddd")}))},`week-day-${n}`))),e.jsx(rz,{children:u.map(((t,n)=>{const r=t.format(p),i=l&&(l[r]?l[r]:[oz]);return e.jsx(az,{children:i&&i.map((t=>{const{id:n,startTime:i,endTime:a,clickable:o=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:p}=s;return e.jsx(SP,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:p,$clickable:o,onClick:()=>o&&((e,t)=>{d(e,t)})(r,t)},{children:e.jsxs(iz,Object.assign({style:{color:l}},{children:[e.jsx("span",{children:Ql.convertTo12HourFormat(i)}),a&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Ql.convertTo12HourFormat(a)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${n.format(p)}`)]})},lz=q.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${ts.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,cz="YYYY-MM-DD",dz=q.default.div`
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
`,uz=q.default.div`
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
`,pz=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,fz=q.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${ts.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${ts.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,hz=q.default(exports.Text.H3)`
    margin-bottom: 1rem;

    ${ts.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,mz=q.default(exports.Text.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,gz=q.default.div`
    display: flex;

    :last-of-type ${uz} {
        margin-bottom: 0;
    }
`,vz=q.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,bz=q.default(exports.Text.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,xz=q.default(iF)`
    padding: 0.125rem 0.5rem;
`,yz=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],wz=15,$z=252,jz=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],Sz=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,kz=q.default(vf)`
    color: ${Qo.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${Sz} 4s linear infinite;
                `}}
    }
`,Cz=q.default.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,Oz=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,Tz=q.default(exports.Text.H6)`
    color: ${Qo.Neutral[3]};
`,Dz=q.default(Bp)`
    width: 400px;
`,Iz=t=>{var{selectedDate:n,loading:r,tableContainerRef:i,totalRecords:a,onPreviousDayClick:o,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const p=()=>{i.current&&(i.current.scrollTop=0)},f=()=>{l&&(p(),l())};return e.jsxs(Cz,{children:[e.jsx(Dz,Object.assign({selectedDate:n,loading:r},d,{onRightArrowClick:e=>{p(),s(e)},onLeftArrowClick:e=>{p(),o(e)},onCalendarDateSelect:c})),void 0===a?e.jsx(e.Fragment,{}):e.jsxs(Oz,{children:[e.jsxs(Tz,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[a," results found"]})),l&&e.jsx(kz,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:r,onClick:f,$loading:r},{children:e.jsx(u.RefreshIcon,{})}))]})]})},Ez=q.default.div`
    display: flex;
    width: 100%;
`,_z=q.default.div`
    border-bottom: 1px solid ${Qo.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${Qo.Accent.Light[1]};
            `}}
`,Mz=q.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,Rz=q.default.div`
    width: 2px;
    height: 100%;
`,Az=q.default.div`
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
`,Nz=q.default(exports.Text.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Bz=q.default(exports.Text.XSmall)`
    color: ${Qo.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Fz=Y.default.memo((({id:t,startTime:n,endTime:r,title:i,subtitle:a,status:o,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,roundedStartTime:u=n,roundedEndTime:p=r,onClick:f})=>{const h=0===Pl(p,"HH:mm").get("minutes"),m=ic.getTimeDiffInMinutes(u,p)/wz*s-2,g=!!f||d&&"click"===d.trigger;return e.jsx((({wrapper:e,children:t})=>d?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:c,customOffset:d.offset,children:t,trigger:d.trigger,delay:d.delay,popoverContent:d.content};return e.jsx(Wb,Object.assign({},n,{children:t}))})(t)},{children:e.jsx(_z,Object.assign({"data-testid":"block-container",$isOnTheHour:h},{children:e.jsxs(Mz,{children:[e.jsxs(Az,Object.assign({$width:m,$status:o,$mainColor:l.mainColor,$altColor:l.alternateColor,$isClickable:g,onClick:e=>{f&&f({id:t,startTime:n,endTime:r,status:o,title:i,subtitle:a,customPopover:d},e)}},{children:[i&&e.jsx(Nz,Object.assign({weight:"semibold"},{children:i})),a&&e.jsx(Bz,Object.assign({weight:"bold"},{children:a}))]})),e.jsx(Rz,{})]})}),"block-container-key")}))})),Lz=n=>{var{id:r,timetableMinTime:i,timetableMaxTime:a,rowMinTime:o,rowMaxTime:s,rowCells:l,rowBarColor:c,intervalWidth:d,containerRef:u,outOfRangeCellPopover:p}=n,f=X(n,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const h=f["data-testid"]||"timetable-row",m=o?mu.roundToNearestInterval(o,wz):i,g=s?mu.roundToNearestInterval(s,wz,!0):a,v=t.useMemo((()=>{const e=[];m&&Pl(i,"HH:mm").isBefore(Pl(m,"HH:mm"))&&e.push({id:r,startTime:i,endTime:m,status:"blocked",customPopover:p});const t=[...l].sort(((e,t)=>{const n=Pl(e.startTime,"HH:mm"),r=Pl(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));let n;return t.forEach(((i,a)=>{var o;const{startTime:s,endTime:l}=i;let c=mu.roundToNearestInterval(s,wz);n&&Pl(c,"HH:mm").isBefore(Pl(n,"HH:mm"))&&(c=mu.roundToNearestInterval(s,wz,!0));const d=mu.roundToNearestInterval(l,wz,!0);e.push(Object.assign(Object.assign({},i),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(o=t[a+1])||void 0===o?void 0:o.startTime)||g,p=Pl(mu.roundToNearestInterval(u,wz),"HH:mm");let f=Pl(d,"HH:mm");for(;f.isBefore(p);)if(h=p,f.get("hour")!=h.get("hour")){const t=f.add(1,"hour").startOf("hour");e.push({id:r,startTime:f.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),f=t}else e.push({id:r,startTime:f.format("HH:mm").toString(),endTime:p.format("HH:mm").toString(),status:"disabled"}),f=p;var h;n=f.format("HH:mm").toString()})),g&&Pl(a,"HH:mm").isAfter(Pl(g,"HH:mm"))&&e.push({id:r,startTime:g,endTime:a,status:"blocked",customPopover:p}),0!==t.length||o||s||e.push({id:r,startTime:i,endTime:a,status:"blocked",customPopover:p}),e}),[m,i,l,g,a,o,s,r,p]);return e.jsx(Ez,Object.assign({"data-testid":h},f,{children:v.map(((t,n)=>e.jsx(Fz,Object.assign({},t,{intervalWidth:d,rowBarColor:c,containerRef:u}),`${n}-row-cell-key`)))}))},Pz=q.default.div``,zz=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${$z}px auto;
`,Hz=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${$z}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,Wz=q.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${$z}px;
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
`,Vz=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,Yz=q.default.div`
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
`,Uz=q.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,qz=q.default(exports.Text.H6)`
    color: ${Qo.Neutral[3]};
`,Kz=q.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,Xz=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${$z}px;
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
`,Gz=q.default(exports.Text.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Qo.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,Zz=q.default(exports.Text.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${Qo.Neutral[3]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,Qz=q.default(yl)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,Jz=q.default(Mu)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,eH=q.default.div`
    display: flex;
    border-bottom: 1px solid ${Qo.Neutral[5]};
`,tH=q.default.div`
    border-right: 0.5px solid ${Qo.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,nH=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,rH=q.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Qo.Neutral[6]} 8%,
        ${Qo.Neutral[7]} 18%,
        ${Qo.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${nH} 1.5s forwards infinite;
`,iH=q.default(Wb)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,aH=e=>{switch(e.$type){case"success":return Qo.Validation.Green;case"warning":return Qo.Validation.Orange;case"error":return Qo.Validation.Red;case"info":return Qo.Validation.Blue;default:return}},oH=q.default(Si.div)`
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
            background: ${aH(e).Background};
            border: 1px solid ${aH(e).Border};
            color: ${aH(e).Text};
        `};
`,sH=q.default.div`
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
`,lH=q.default.div`
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
                color: ${aH(e).Icon};
            }
        `};
`,cH=q.default.div`
    display: flex;
    flex-direction: column;
`,dH=q.default(exports.Text.H4)`
    display: flex;

    ${e=>i.css`
            color: ${aH(e).Text};
        `}
`,uH=q.default.div`
    ${e=>i.css`
            p {
                color: ${aH(e).Text};
            }
        `}
`,pH=q.default(Ys.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${ts.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,fH=q.default(is)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${aH(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${ts.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,hH=4e3,mH=q.default.div`
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
`,gH=q.default(Td)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,vH=q.default.div`
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
`,bH=q.default.div`
    position: relative;
`,xH=n=>{var{visible:r,position:i="top",children:a}=n,o=X(n,["visible","position","children"]);const s=o["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(p(),window.addEventListener("resize",Zd(u,300)),()=>{window.removeEventListener("resize",Zd(u,300))})),[]);const u=()=>{p()},p=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(mH,Object.assign({position:l,"data-testid":s,visible:r,ref:d},o,{children:[e.jsx(gH,{children:"string"==typeof a?e.jsx(exports.Text.BodySmall,{children:a}):a}),e.jsx(vH,{position:l})]}))},yH=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${ts.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,wH=q.default(ox.Content)`
    background: ${({$background:e})=>e?Qo.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,$H=q.default(exports.Text.H3)`
    margin-bottom: 1rem;
    ${yH}
`,jH=q.default(exports.Text.Body)`
    margin-bottom: 2rem;
    ${yH}
`,SH=q.default.div`
    ${yH}
`,kH=q.default.ul`
    ${yH}
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
`,CH=Y.default.forwardRef(((t,n)=>{var{stretch:r}=t,i=X(t,["stretch"]);return e.jsx(kH,Object.assign({ref:n,$stretch:r},i))})),OH=q.default.li`
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
`,TH=q.default.div`
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
`,DH=q.default.button`
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
`,IH=q.default.span`
    color: ${Qo.Neutral[3]};
`,EH=q.default(zs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Qo.Neutral[3]} transparent transparent transparent;
    }
`,_H=q.default(j.ExclamationTriangleIcon)`
    color: ${Qo.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,MH=q.default.span`
    color: ${Qo.Validation.Orange.Text};
`,RH=q.default.span`
    ${gs.getTextStyle("Body","semibold")}
    color: ${Qo.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,AH=q.default(al)`
    margin-top: 0.5rem;
`,NH=({label:n,value:r,displayWidth:i="full",maskState:a,maskLoadingState:o,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:p,maskTransformer:f,onMask:h,onUnmask:m,onTryAgain:g})=>{const[v,b]=t.useState(a);t.useEffect((()=>{b(a)}),[a]);const x=()=>{switch("fail"===o&&g&&g(),v){case"masked":m&&m(),b("unmasked");break;case"unmasked":h&&h(),b("masked")}},y=()=>"string"!=typeof r?r:"masked"===v?sc.maskValue(r,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:f}):r,j=()=>{switch(o){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(_H,{}),e.jsx(MH,{children:"Error"}),e.jsx(RH,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(EH,{}),e.jsx(IH,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[y(),e.jsx(TH,{children:"masked"===v?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(OH,Object.assign({$widthStyle:i},{children:[e.jsx(Jb,{children:n}),"string"!=typeof r?r:v?u?e.jsx(exports.Text.Body,{children:y()}):e.jsx(DH,Object.assign({"data-testid":"clickable-label",onClick:x,"aria-busy":"loading"===o,"aria-live":"polite",type:"button"},{children:j()})):e.jsx(exports.Text.Body,{children:r}),p&&e.jsx(AH,Object.assign({sizeType:"small"},p))]}))},BH=Object.assign((t=>{var{items:n,title:r,description:i,topSection:a,bottomSection:o,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:p}=t,f=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const h=e=>()=>{d&&d(e)},m=e=>()=>{u&&u(e)},g=e=>()=>{p&&p(e)},v=()=>{if(n&&n.length>0){const t=n.map(((t,n)=>e.jsx(NH,Object.assign({},t,{onMask:h(t),onUnmask:m(t),onTryAgain:g(t)}),n)));return e.jsx(kH,Object.assign({$stretch:c},{children:t}))}return null};return e.jsx(wH,Object.assign({$background:l},f,{type:"grid"},{children:s||e.jsxs(e.Fragment,{children:[r&&e.jsx($H,Object.assign({weight:"semibold",$stretch:c},{children:r})),i&&e.jsx(jH,Object.assign({$stretch:c},{children:i})),a&&e.jsx(SH,Object.assign({"data-id":"top-section",$stretch:c},{children:a})),v(),o&&e.jsx(SH,Object.assign({"data-id":"bottom-section",$stretch:c},{children:o}))]})}))}),{ItemSection:CH,Item:NH});exports.Accordion=Gs,exports.Alert=al,exports.BaseTheme=fl,exports.BookingSGTheme=hl,exports.BoxContainer=n=>{var{children:r,title:i,collapsible:a=!0,expanded:o=!1,callToActionComponent:s,displayState:l="default",subComponentTestIds:c,clickableHeader:d}=n,u=X(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[p,f]=t.useState(!a||o),h=Ye(),m=h.ref,g=kl.useMediaQuery({maxWidth:ns.mobileL}),v=e=>{e.stopPropagation(),f(!p)},b=oi({height:p?h.height:0}),x=()=>a&&e.jsx(Nl,Object.assign({onClick:v,type:"button","aria-label":p?"Collapse":"Expand","data-testid":(null==c?void 0:c.handle)||"handle"},{children:e.jsx(Bl,Object.assign({$expanded:p},{children:e.jsx(Fl,{"aria-hidden":!0})}))}));return e.jsxs(Cl,Object.assign({},u,{children:[e.jsxs(Il,Object.assign({"data-testid":"header",onClick:d&&a&&v,$interactive:d&&a},{children:[e.jsxs(_l,{children:[e.jsx(El,Object.assign({id:"title","data-testid":(null==c?void 0:c.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(l){case"error":case"warning":return e.jsx(Ml,Object.assign({$displayState:l,"data-testid":(null==c?void 0:c.displayStateIcon)||`${l}-icon`},{children:e.jsx(Rl,{})}));default:return null}})(),g&&x()]}),s&&e.jsx(Al,Object.assign({$collapsible:a,"data-testid":"call-to-action-container"},{children:s})),!g&&x()]})),a?e.jsx(Ol,Object.assign({style:b,"data-testid":"expandable-container"},{children:e.jsx(Dl,Object.assign({ref:m},{children:r}))})):e.jsx(Tl,Object.assign({"data-testid":"non-expandable-container"},{children:e.jsx(Dl,{children:r})}))]}))},exports.Breadcrumb=n=>{var{links:r,fadeColor:i,fadePosition:a="both",itemStyle:o,id:s}=n,l=X(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[c,d]=t.useState(!1),[u,p]=t.useState(!1),[f,h]=t.useState(!1),m="left"===a||"both"===a,g="right"===a||"both"===a,v=t.useRef(null),b=t.useRef(null),x=lc((()=>{const e=b.current,t=v.current;e&&t&&r&&r.length>1&&window.innerWidth<=Jo.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),y=lc((()=>{const e=window.innerWidth<=Jo.tablet;d(e);const t=b.current,n=v.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return p(t.scrollLeft>=1),void h(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);p(!1),h(!1)}));if(cc("resize",y),cc("scroll",y,b.current),dc((()=>{x(),y()}),[x,y]),Ye({onResize:x,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!r)return null;return e.jsxs(mc,Object.assign({ref:v,id:s||"breadcrumb"},l,{children:[e.jsx("nav",{children:e.jsx(gc,Object.assign({ref:b},{children:r.map(((t,n)=>{let i;return t.children?(i=n!==r.length-1&&t.href?e.jsx(wc,Object.assign({},t,{weight:"semibold"})):e.jsx(yc,Object.assign({weight:"semibold"},{children:t.children})),e.jsxs(bc,Object.assign({$styleProps:o},{children:[i,n<r.length-1&&e.jsx(xc,{})]}),n)):null}))}))}),c&&(()=>{let t;return t=Array.isArray(i)&&i.length>0?{left:i,right:i}:i||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[u&&m&&e.jsx(vc,{$backgroundColor:t.left,$position:"left"}),f&&g&&e.jsx(vc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Button=Ys,exports.ButtonWithIcon=jc,exports.CCubeTheme=vl,exports.Calendar=n=>{var{className:r,styleType:i="bordered",value:a,onSelect:o}=n,s=X(n,["className","styleType","value","onSelect"]);const[l,c]=t.useState(a);return t.useEffect((()=>{c(a)}),[a]),e.jsx(Cd,Object.assign({className:r,$hasBorder:"bordered"===i},{children:e.jsx(Sd,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))}))},exports.Card=Td,exports.Checkbox=_d,exports.Color=Qo,exports.Component=ZR,exports.CountdownTimer=n=>{var{className:r,align:i="right",timer:a,timestamp:o,notifyTimer:s,offset:l,mobileOffset:c,show:d,fixed:p=!0,"data-testid":f,onFinish:h,onNotify:m,onTick:g}=n,v=X(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const b=t.useRef(),x=t.useRef(!1),[y,w]=t.useState(0),[$,j]=t.useState(0),[S,k]=t.useState(0),[C,O]=t.useState(!1),[T]=((e,n,r)=>{const[i,a]=t.useState(e);t.useEffect((()=>{if(!n)return;const t=null!=r?r:Date.now()+1e3*e,i=o(t);return()=>clearTimeout(i)}),[r,n,e]);const o=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,i=Math.max(Math.round(n/1e3),0);if(a(i),0!==i)return setTimeout(t,r>500?r:r+1e3)};return t()};return[i]})(a,C,o),{ref:D,inView:I}=su({threshold:1,rootMargin:-1*y+"px 0px 0px 0px",initialInView:!0}),E=!p||I,_=kl.useMediaQuery({maxWidth:Jo.mobileL});t.useEffect((()=>{O(d)}),[d]),t.useEffect((()=>{0===T?N():T<=s&&(R(),A())}),[T]),t.useEffect((()=>{const e=function(){var e,t;const n=null!==(e=null==l?void 0:l.top)&&void 0!==e?e:168,r=null!==(t=null==c?void 0:c.top)&&void 0!==t?t:80,i=_?r:n;return i}();w(e)}),[_,null==l?void 0:l.top,null==c?void 0:c.top]),t.useEffect((()=>{if(b.current){const e=tu(M,300);return M(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[b.current]),t.useEffect((()=>{x.current=!1}),[a,d]);const M=()=>{var e;const t=null===(e=b.current)||void 0===e?void 0:e.getBoundingClientRect();k(t.x),j(t.right)},R=()=>{g&&g(T)},A=()=>{m&&!x.current&&(x.current=!0,m())},N=()=>{O(!1),h&&h()};const B=()=>{const{minutes:t,seconds:n}=mu.toMinutesSeconds(T),r=1!==t?"mins":"min",i=1!==n?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(u.ClockIcon,{}),e.jsx(pu,{children:"Time left:"}),e.jsxs(fu,{children:[t," ",r," ",String(n).padStart(2,"0")," ",i]})]})};if(void 0!==typeof window)return C||0===T?e.jsxs(lu,Object.assign({className:r},v,{children:[e.jsx("div",{ref:D}),e.jsx(du,Object.assign({"data-testid":f,"data-id":"countdown-wrapper",ref:b,inert:E?void 0:"",$visible:E,$warn:T<=s},{children:B()})),b.current&&!E&&(()=>{var t,n;const r=null!==(t=null==l?void 0:l.left)&&void 0!==t?t:"left"===i?S:void 0,a=null!==(n=null==l?void 0:l.right)&&void 0!==n?n:"right"===i?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(uu,Object.assign({"data-testid":f,"data-id":"fixed-countdown-wrapper",$warn:T<=s,$top:y,$left:r,$right:a},{children:B()}))})()]})):e.jsx(e.Fragment,{})},exports.DataTable=n=>{var{id:r,headers:i,rows:a,className:o,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:p,disabledIds:f,enableActionBar:h,enableSelectAll:m,enableStickyHeader:g,emptyView:v,actionBarContent:b,renderCustomEmptyView:x,onHeaderClick:y,onSelect:w,onSelectAll:$,onClearSelectionClick:j}=n,S=X(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const k=t.useRef(null),C=t.useRef(null),O=t.useRef(null),T=t.useRef(null),D=t.useRef(null),[I,E]=t.useState(!1),[_,M]=t.useState(!1),[R,A]=t.useState(!1),[N,B]=t.useState(!1),[F,L]=t.useState(!1),{ref:P,inView:z}=su(),H=t.useCallback((()=>{if(!D.current||!T.current)return;const e=D.current.scrollHeight>D.current.clientHeight;E(e),e?T.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),Ye({onResize:H});cc("scroll",(()=>{requestAnimationFrame((()=>{I?G():Z()})),D.current&&A(D.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[a]);const W=()=>(null==p?void 0:p.length)===a.length,V=e=>!!(null==p?void 0:p.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==f?void 0:f.includes(e)),q=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},K=()=>i.length+(d?1:0),G=()=>{if(!D.current)return;const e=D.current.getBoundingClientRect();B(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(k.current&&C.current&&D.current&&T.current&&O.current))return;const e=C.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=k.current.getBoundingClientRect().height-O.current.clientHeight-32,r=Math.min(t,n);T.current.style.transform=`translateY(-${r}px)`}else T.current.style.transform="translateY(0)"},Q=()=>{k.current&&D.current&&L(k.current.clientHeight+(h?56:0)<D.current.clientHeight)},J=t=>{const{fieldKey:n,label:r,clickable:i=!1,style:a}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Wu,Object.assign({"data-testid":q(`header-${n}`),$clickable:i,onClick:()=>i&&(null==y?void 0:y(n)),style:a,$isCheckbox:!1},{children:e.jsxs(Vu,{children:["string"==typeof r?e.jsx(exports.Text.H4,Object.assign({weight:"bold"},{children:r})):r,ee(n)]})}),n)},ee=t=>{const n=null==s?void 0:s[t];return n?"asc"===n?e.jsx(u.ArrowUpIcon,{"data-testid":q(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":q(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Wu,Object.assign({"data-testid":q("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e.jsx(Ku,{children:m&&e.jsx(_d,{displaySize:"small",checked:W(),indeterminate:p&&0!==p.length&&!W(),onClick:()=>{$&&$(W())}})})})),ne=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,a=n.id.toString(),o=n[i],s=`${a}-${i}`;return e.jsx(Uu,Object.assign({"data-testid":q(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e.jsx(qu,{children:o}):"function"==typeof o?o(n,{isSelected:V(a)}):o}),s)},re=t=>e.jsx(Uu,Object.assign({"data-testid":q(`row-${t}-selection`),$isCheckbox:!0},{children:e.jsx(Ku,{children:e.jsx(_d,{displaySize:"small",checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})})),ie=()=>e.jsx(Gu,Object.assign({type:"no-item-found"},v,{title:(null==v?void 0:v.title)?"string"==typeof v.title?e.jsx(exports.Text.H3,{children:v.title}):v.title:e.jsx(exports.Text.H3,{children:"No <items> found"}),description:(null==v?void 0:v.description)?v.description:"No matching rows"}));return e.jsxs(Nu,Object.assign({id:r||"table-wrapper","data-testid":S["data-testid"]||"table",className:o,ref:D,onScroll:()=>{I&&D.current&&M(D.current.scrollTop+D.current.clientHeight>=D.current.scrollHeight)}},{children:[e.jsx(Bu,{children:e.jsxs(Fu,Object.assign({$end:R,$scrollable:I,ref:k,$stickyHeader:g},{children:[e.jsx("thead",Object.assign({ref:O},{children:e.jsxs(Hu,{children:[d&&te(),i.map(J)]})})),e.jsx(Lu,Object.assign({$showLastRowBottomBorder:F},{children:"success"===c?!a||a.length<1?e.jsx("tr",{children:e.jsx(Zu,Object.assign({colSpan:K()},{children:x?x():ie()}))}):e.jsx(e.Fragment,{children:null==a?void 0:a.map(((t,n)=>e.jsxs(Yu,Object.assign({"data-testid":q(`row-${t.id.toString()}`),$alternating:Y(n),$isSelectable:d,$isSelected:V(t.id.toString())},{children:[d&&re(t.id.toString()),i.map((e=>ne(e,t)))]}),t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",Object.assign({colSpan:K()},{children:e.jsx(Xu,{children:"loading"===c&&e.jsx(yl,{})})}))})}))]}))}),h&&p&&p.length>0&&(()=>{var t,n,r;return e.jsx(Pu,Object.assign({ref:T,$fixed:N,$left:null===(n=null===(t=null==k?void 0:k.current)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(r=null==k?void 0:k.current)||void 0===r?void 0:r.clientWidth},{children:e.jsxs(zu,Object.assign({$float:(I?!_:!z)||N,$scrollable:I},{children:[e.jsx(exports.Text.H5,Object.assign({weight:"semibold"},{children:`${p.length} item${p.length>1?"s":""} selected`})),e.jsx(Ys.Small,Object.assign({styleType:"link",onClick:j},{children:"Clear selection"})),b]}))}))})(),e.jsx("div",{ref:e=>{C.current=e,P(e)}})]}))},exports.DateInput=Mp,exports.DateNavigator=Bp,exports.DateRangeInput=Kp,exports.DesignToken=Rs,exports.Divider=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:a,className:o,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=X(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e.jsx(Jp,Object.assign({className:o,$thickness:n,$lineStyle:r,$color:a},d));case"grid":return e.jsx(Gp,Object.assign({className:o,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e.jsx(Jp,{$thickness:n,$lineStyle:r,$color:a})}))}},exports.Drawer=n=>{var{children:r,heading:i,show:a,onClose:o,onOverlayClick:s}=n,l=X(n,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(a),[u]=t.useState((()=>oc.generate())),p=t.useRef();t.useEffect((()=>{if(!a){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[a]);return e.jsx(rf,Object.assign({show:c,enableOverlayClick:!0,onOverlayClick:s},{children:e.jsxs(cf,Object.assign({$show:a,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{"visibility"===e.propertyName&&a&&p.current&&p.current.focus()}},l,{children:[e.jsxs(df,{children:[e.jsx(pf,Object.assign({id:u,ref:p,tabIndex:-1},{children:i})),e.jsx(uf,Object.assign({"aria-label":"Close drawer",onClick:o,focusHighlight:!1},{children:e.jsx(g.CrossIcon,{"aria-hidden":!0})}))]}),e.jsx(ff,{children:r})]}))}))},exports.ESignature=Vf,exports.ErrorDisplay=Mu,exports.FeedbackRating=t=>{const{imgSrc:n,buttonLabel:r,description:i,rating:a,onRatingChange:o,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=n?n:Yf,d=null!=i?i:qf;return e.jsxs(rh,Object.assign({},l,{children:[c&&e.jsx(nh,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(ih,{children:[e.jsx(exports.Text.H3,Object.assign({weight:"semibold"},{children:d})),e.jsx(th,{description:d,rating:a,onRatingChange:o}),e.jsx(ah,Object.assign({disabled:!a,onClick:s,type:"button"},{children:null!=r?r:Uf}))]})]}))},exports.FileDownload=({id:t,fileItems:n,title:r,description:i,onDownload:a,"data-testid":o,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return e.jsxs(oh,Object.assign({id:t?`${t}-file-download`:"file-download",className:s,"data-testid":o,$border:"bordered"===l},{children:[(r||i)&&e.jsxs(sh,{children:[r?"string"==typeof r?e.jsx(lh,Object.assign({weight:"regular"},{children:r})):e.jsx(ch,{children:r}):null,i?"string"==typeof i?e.jsx(dh,Object.assign({weight:"regular"},{children:i})):e.jsx(uh,{children:i}):null]}),e.jsx(ph,{children:n&&n.length>0&&n.map((t=>e.jsx(Ih,{fileItem:t,onDownload:c},t.id)))})]}))},exports.FileUpload=({styleType:n="bordered",fileItems:r,title:i,description:a,maxFiles:o,warning:s,className:l,name:c,id:d,"data-testid":u,accept:p,capture:f,multiple:h,disabled:m,sortable:g=!1,fileDescriptionMaxLength:v,editableFileItems:b=!1,errorMessage:x,readOnly:y,onChange:w,onDelete:$,onEdit:j,onSort:S})=>{const k=t.useRef(),[C,O]=t.useState(),T=()=>!!o&&r.length>=o;return e.jsx(_h.Provider,Object.assign({value:{activeId:C,setActiveId:O}},{children:e.jsxs(sg,Object.assign({ref:k,onChange:e=>{!m&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===n,className:l,"data-testid":u,name:c,multiple:h,disabled:m||T()||y},{children:[(i||a)&&e.jsxs(a_,{children:[i?"string"==typeof i?e.jsx(o_,Object.assign({weight:"regular"},{children:i})):e.jsx(s_,{children:i}):null,a?"string"==typeof a?e.jsx(l_,Object.assign({weight:"regular"},{children:a})):e.jsx(c_,{children:a}):null]}),s&&e.jsx(d_,Object.assign({type:"warning"},{children:s})),e.jsx(i_,{fileItems:r,editableFileItems:b,fileDescriptionMaxLength:v,sortable:g,disabled:m,readOnly:y,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{j&&j(e)},onSort:e=>{S&&S(e)}}),x&&e.jsx(h_,Object.assign({type:"error"},{children:x})),!y&&e.jsxs(u_,{children:[e.jsx(p_,Object.assign({type:"button",styleType:"secondary",disabled:!!C||m||T(),onClick:e=>{m||(e.preventDefault(),k.current&&k.current.openFileDialog())}},{children:"Upload files"})),e.jsx(f_,{children:"or drop them here"})]})]}))}))},exports.Filter=q_,exports.Footer=t=>{var{children:n,links:r,lastUpdated:a,disclaimerLinks:o,showDownloadAddon:s,showResourceAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:p="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","showResourceAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===p,m=i.useTheme(),g=t=>t.map(((t,n)=>{const r=X(t,["data-options"]);return e.jsx("li",{children:e.jsx(sM,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},n)}));return e.jsxs(oM,Object.assign({},f,{children:[(()=>{let t=null;if(n)return n;if(r||s){const n=nM.getFooterLogoAttribute(null==m?void 0:m.resourceScheme),{src:i}=n,a=X(n,["src"]);t=e.jsxs(e.Fragment,{children:[e.jsx(cM,Object.assign({"data-testid":"logo-section"},{children:e.jsx("img",Object.assign({src:c||i,"data-testid":"logo"},a))})),(null==r?void 0:r[0])&&e.jsx(dM,Object.assign({"data-testid":"link-col-1"},{children:g(r[0])}),"link-col-1"),(null==r?void 0:r[1])&&e.jsx(dM,Object.assign({"data-testid":"link-col-2"},{children:g(r[1])}),"link-col-2"),s&&e.jsx(uM,{children:e.jsx(Q_,{})}),!s&&l&&e.jsx(uM,{children:e.jsx(aM,{})})]})}return t?e.jsx(lM,Object.assign({type:"grid",stretch:h},{children:t})):null})(),e.jsx(pM,{}),e.jsxs(fM,Object.assign({type:"grid",stretch:h},{children:[e.jsx(hM,{children:(()=>{const t=nM.getDisclaimerLinks(null==m?void 0:m.resourceScheme,o);return Object.keys(t).map((n=>e.jsx(gM,Object.assign({},t[n]),n)))})()},"disclaimer"),e.jsx(mM,{children:e.jsx(exports.Text.XSmall,Object.assign({"data-testid":"copyright-text"},{children:d||e.jsxs(e.Fragment,{children:["©"," ",nM.getCopyrightInfo(a,null==m?void 0:m.resourceScheme)]})}))},"copyright")]}))]}))},exports.Form=CE,exports.FullscreenImageCarousel=QR,exports.HistogramSlider=Rx,exports.IconButton=vf,exports.ImageButton=eA,exports.Input=Lx,exports.InputGroup=zj,exports.InputMultiSelect=MD,exports.InputNestedMultiSelect=ND,exports.InputNestedSelect=BD,exports.InputRangeSelect=oI,exports.InputRangeSlider=Tx,exports.InputSelect=sI,exports.InputSlider=hI,exports.Layout=ox,exports.LinkList=n=>{var{items:r,maxShown:i,style:a="default",onItemClick:o}=n,s=X(n,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=r.length),d=i?r.slice(0,i):r,u=i?r.slice(i):[],p=Ye(),f=p.ref,h=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):o&&(e.preventDefault(),o(t,e))},m=()=>{c(!l)},g=(t,n,r,i)=>{const o="small"===a?iA:rA;return e.jsxs(e.Fragment,{children:[e.jsxs(sA,{children:[e.jsx(o,Object.assign({"data-testid":`link-title-${t}`,weight:"semibold"},{children:n})),r&&e.jsx(lA,Object.assign({"data-testid":`link-description-${t}`},{children:r})),i]}),e.jsx(aA,{})]})},v=oi({height:l?p.height:0});return e.jsxs(nA,Object.assign({},s,{children:[d.map(((t,n)=>{const{title:r,description:i,secondaryDescription:a,onClick:o}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(oA,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>h(e,t)},s,{children:g(n,r,i,a)}),`list-item-shown-${n}`)})),u.length>0&&e.jsx(cA,Object.assign({style:v,"data-testid":"minimised-content"},{children:e.jsx(dA,Object.assign({ref:f},{children:u.map(((t,n)=>{const{title:r,description:i,onClick:a,secondaryDescription:o}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(oA,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>h(e,t)},s,{children:g(n,r,i,o)}),`list-item-minimised-${n}`)}))}))})),u.length>0&&e.jsxs(hA,Object.assign({type:"button",onClick:m,"data-testid":"toggle-button",$showMinimised:l},{children:[e.jsx(uA,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:l?"View less":"View more"})),l?e.jsx(fA,{}):e.jsx(pA,{})]}))]}))},exports.LoadingDots=dl,exports.LoadingDotsSpinner=yl,exports.LoadingSpinner=n=>e.jsx(ll,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(sl,{})},{children:e.jsx(ol,{})}))})),exports.Markup=gA,exports.MaskedInput=tS,exports.Masonry=xA,exports.Masthead=wA,exports.MediaQuery=ts,exports.MediaWidths=ns,exports.Modal=jf,exports.MyLegacyTheme=gl,exports.NBComponent=TN,exports.Navbar=gN,exports.NavbarHeight=vN,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=EN,exports.OneServiceTheme=bl,exports.OtpInput=n=>{var{id:r,value:i=[],"data-testid":a,className:o,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:p,onCooldownEnd:f}=n,h=X(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const m=null!=l?l:{},{disabled:g,onClick:v,styleType:b="secondary"}=m,x=X(m,["disabled","onClick","styleType"]),y=t.useRef([]),w=t.useRef(u),[$,j]=t.useState(new Array(d).fill("")),[S,k]=t.useState(s),[C,O]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==y?void 0:y.current[0])||void 0===e||e.focus(),document.addEventListener("paste",I),()=>document.removeEventListener("paste",I)}),[]),t.useEffect((()=>{if(0!==s){p&&p();const e=M();return()=>e()}}),[C]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&j(i)}),[i]);const T=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(E(r)){const t=[...$];t[e]=r.substring(r.length-1),null===(n=y.current[e+1])||void 0===n||n.focus(),j(t),u&&u(t)}},D=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=y.current[e-1])||void 0===n||n.focus()),j(t),u&&u(t)}},I=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&E(t,d)?(j(n),w.current&&w.current(n)):e.preventDefault()},E=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*s;return e<C.valueOf()+t},M=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*s,r=Math.ceil((C.valueOf()+n-t)/1e3);k(r),r<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},R=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(BB,Object.assign({id:r,"data-testid":a,className:o},{children:[e.jsx(FB,{children:$.map(((t,n)=>e.jsx(LB,Object.assign({id:R(n,"otp-input",r),"data-testid":R(n,"otp-input",a),"aria-label":`Enter OTP character ${n+1}`,ref:e=>y.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:T(n),onKeyDown:D(n),autoComplete:"off"},h),n)))}),c&&e.jsx(ex,{children:c}),e.jsx(PB,Object.assign({styleType:b,type:"button"},x,{onClick:e=>{j(new Array(d).fill("")),_()||(O(new Date),k(s)),v&&v(e)},disabled:g||_()},{children:x.children?x.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]}))},exports.Overlay=rf,exports.Pagination=eF,exports.PhoneNumberInput=JD,exports.Pill=iF,exports.Popover=dF,exports.PopoverInline=qb,exports.PopoverTrigger=Wb,exports.PopoverV2=zb,exports.PredictiveTextInput=nI,exports.ProgressIndicator=t=>{var{steps:n,currentIndex:r,displayExtractor:i,fadeColor:a,fadePosition:o="both"}=t,s=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const l=kl.useMediaQuery({maxWidth:ns.tablet}),c=e=>i?i(e):e.toString(),d=(e,t)=>nL(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return e.jsxs(uF,Object.assign({},s,{children:[e.jsx(pF,{children:n.map(((t,n)=>{const i=n<=r;return e.jsx(gF,Object.assign({id:d(n,r)},{children:e.jsx(fF,{highlighted:i})}),n)}))}),e.jsx(pF,{children:l?e.jsxs(gF,Object.assign({id:d(r,r)},{children:[e.jsxs(mF,Object.assign({weight:"semibold",id:`${d(r,r)}-counter`},{children:["Step ",r+1," of ",n.length]})),e.jsx(mF,Object.assign({weight:"regular",id:`${d(r,r)}-title`},{children:c(n[r])}))]}),r):n.map(((t,n)=>{const i=n<=r,a=n===r,o=a?"bold":"regular";return e.jsx(gF,Object.assign({id:`${d(n,r)}-title`},{children:e.jsx(hF,Object.assign({highlighted:i,weight:o,"aria-current":a},{children:c(t)}))}),n)}))})]}))},exports.RBSTheme=ml,exports.RadioButton=t=>{var{className:n,checked:r,disabled:i,onChange:a}=t,o=X(t,["className","checked","disabled","onChange"]);return e.jsxs(rL,Object.assign({$selected:r,$disabled:i,className:n,"data-testid":"radio-button"},{children:[e.jsx(iL,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:r,disabled:i},o)),e.jsx(aL,{id:"checkmark","data-testid":"checkmark",$disabled:i,$selected:r})]}))},exports.SelectHistogram=fI,exports.Sidenav=OL,exports.SignatureCanvas=Hf,exports.SignatureCanvasContainer=zf,exports.SmartAppBanner=qL,exports.Tab=lP,exports.Tag=t=>{var{type:n,colorType:r="black",children:i,interactive:a=!1,icon:o,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(cP,Object.assign({as:a?"button":"div",$type:n,$color:r,$interactive:a},l,{children:["left"===s&&o,e.jsx(dP,{children:i}),"right"===s&&o]}))},exports.TextList=MI,exports.TextStyle=ds,exports.TextStyleHelper=gs,exports.Textarea=yI,exports.TimeRangePicker=mE,exports.TimeSlotBar=({"data-testid":n,className:r,variant:i="default",startTime:a,endTime:o,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[p,f]=t.useState(0),[h,m]=t.useState(0),g=fP(i),v=2.5*g;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",b),()=>{e&&e.removeEventListener("scroll",b)}}),[]);const b=()=>{u.current&&f(u.current.scrollLeft)},x=e=>{u.current&&u.current.scrollBy({left:"left"===e?-v:v,behavior:"smooth"})};Ye({onResize:()=>{u.current&&m(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const y=e=>e<=g/2,w=e=>{if(n)return`${n}-${e}`},$=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(mP,Object.assign({className:r},{children:[e.jsxs(xP,Object.assign({"data-testid":n,ref:u,$variant:i},{children:[e.jsx(yP,Object.assign({"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=Pl(a,"HH:mm"),r=Pl(o,"HH:mm"),s=n.hour()%2==0;for(let a=n;a.isBefore(r);a=a.add(30,"minute")){const n=$(a,s,i);t.push(e.jsx($P,Object.assign({$isLongMarker:n,$variant:i},{children:n&&e.jsx(jP,Object.assign({weight:"semibold"},{children:uP.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return t})()})),e.jsxs(wP,Object.assign({"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[d&&(()=>{const{backgroundColor:t,backgroundColor2:n,styleType:r="default"}=d,s=uP.calculateWidth(a,o,g),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(kP,{$variant:i}),e.jsx(SP,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:r,$bgColor:t,$bgColor2:n,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:n,startTime:r,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:p,styleType:f="default",backgroundColor:h,backgroundColor2:m}=u,v=uP.calculateWidth(r,s,g),b=uP.calculateWidth(a,r,g),x=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(kP,{$variant:i,style:{left:`${b}px`}}),e.jsx(SP,Object.assign({"data-testid":w(`${n}-timeslot`),$width:v,$left:b,$styleType:f,$variant:i,$bgColor:h,$bgColor2:m,$clickable:x,onClick:()=>x&&l(t)},{children:c&&"default"===i&&e.jsx(CP,Object.assign({$slotWidth:v,$color:p,weight:"semibold"},{children:y(v)?"...":c}))})),o!==s&&e.jsx(kP,{$variant:i,style:{left:`${b+v}px`}})]},n)}))]}))]})),e.jsx(e.Fragment,{children:p>0&&e.jsx(gP,Object.assign({"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{x("left")}},{children:e.jsx(bP,{})}))}),p+h<uP.calculateWidth(a,o,g)?e.jsx(gP,Object.assign({"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{x("right")}},{children:e.jsx(vP,{})})):e.jsx(e.Fragment,{})]}))},exports.TimeSlotBarWeek=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:p,variant:f,maxVisibleCellHeight:h,showNavigationHeader:m=!0,enableSelection:g,onSlotClick:v,currentCalendarDate:b}=n,x=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[y,w]=t.useState(o),$=t.useRef(),j=t.useRef(void 0);t.useEffect((()=>{w(o)}),[o]);const S=e=>{const t=e.format(JP);w(t),a&&a(t)},k=(e,t)=>{v&&v(e,t)},C=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(JP),lastDayOfWeek:e.endOf("week").format(JP)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(QP,Object.assign({},x,{children:e.jsx(Xc,Object.assign({ref:$,type:"standalone",dynamicHeight:!0,initialCalendarDate:ic.toDayjs(y||b).endOf("week").format(JP),selectedStartDate:y,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Pl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Pl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{j.current&&j.current.isSame(e,"week")||C(e),j.current=e},showNavigationHeader:m,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Pl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Pl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e.jsx(ZP,{calendarDate:t,disabledDates:r,selectedDate:y,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:p,variant:f,maxVisibleCellHeight:h,enableSelection:g,onSlotClick:k}))(t)}))}))},exports.TimeSlotWeekView=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:p,currentCalendarDate:f}=n,h=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[m,g]=t.useState(o),v=t.useRef(),b=t.useRef(void 0);t.useEffect((()=>{g(o)}),[o]);const x=e=>{const t=e.format(cz);g(t),a&&a(t)},y=(e,t)=>{p&&p(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(cz),lastDayOfWeek:e.endOf("week").format(cz)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(lz,Object.assign({},h,{children:e.jsx(Xc,Object.assign({ref:v,type:"standalone",dynamicHeight:!0,initialCalendarDate:ic.toDayjs(m||f).endOf("week").format(cz),selectedStartDate:m,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Pl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Pl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{b.current&&b.current.isSame(e,"week")||w(e),b.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Pl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Pl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e.jsx(sz,{calendarDate:t,disabledDates:r,selectedDate:m,minDate:s,maxDate:l,onSelect:x,slots:c,enableSelection:u,onSlotClick:y})}))}))},exports.TimeTable=n=>{var{date:r,emptyContentMessage:i,rowData:a,loading:o,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:p,showDateAsShortForm:f,onPage:h,onRefresh:m,onNextDayClick:g,onPreviousDayClick:v,onCalendarDateSelect:b}=n,x=X(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const y=x["data-testid"]||"timetable",w=mu.roundToNearestInterval(s,60),$=mu.roundToNearestInterval(l,60,!0),j=mu.generateHourlyIntervals(w,$),S=0===u||eS.isEmpty(a),k=S||a.length===u,C=t.useRef(null),O=t.useRef(null),[T,D]=t.useState(!1),[I,E]=t.useState(!1),[_,M]=t.useState(0),[R,A]=t.useState(!1);t.useEffect((()=>{const e=eS.throttle((()=>{if(C.current&&(D(C.current.scrollLeft>0),E(C.current.scrollTop>0)),R)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=C.current;Math.ceil(e+t)>=n-1&&!k&&h&&!o&&(A(!0),h())}),100),t=C.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[k,R,o,h]),t.useEffect((()=>{A(!1)}),[a]);Ye({onResize:()=>{if(C.current){const e=Math.ceil(60*j.length/wz),t=(C.current.clientWidth-$z)/e;M(t>21?t:21)}},targetRef:C,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=yz.length;return()=>{const n=yz[e],r=jz[e];return e=(e+1)%t,{mainColor:n,alternateColor:r}}})(),B=({wrapper:e,children:t})=>e(t),F=()=>{if(!o&&R)return e.jsx(Xz,Object.assign({$isScrolled:T},{children:e.jsx(rH,{})}))},L=()=>{if(!o&&R)return e.jsx(eH,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,n)=>e.jsx(tH,Object.assign({$width:4*_},{children:e.jsx(rH,{})}),`lazy-load-cell-${n}`)))}))};return S?e.jsxs(Pz,Object.assign({},x,{"data-testid":y},{children:[e.jsx(Iz,{selectedDate:r,loading:o||R,tableContainerRef:C,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:p,showDateAsShortForm:f,onPreviousDayClick:v,onNextDayClick:g,onRefresh:m,onCalendarDateSelect:b}),e.jsx(zz,Object.assign({className:"empty-container"},{children:o?e.jsx(Qz,{$isEmptyContent:S}):e.jsx(Jz,{type:"no-item-found",description:i})}))]})):e.jsxs(Pz,Object.assign({},x,{"data-testid":y},{children:[e.jsx(Iz,{"data-id":"timetable-date-navigator",selectedDate:r,loading:o||R,tableContainerRef:C,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:p,showDateAsShortForm:f,onPreviousDayClick:v,onNextDayClick:g,onRefresh:m,onCalendarDateSelect:b}),e.jsxs(Hz,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:C,$loading:o,$allRecordsLoaded:k||!h},{children:[e.jsx(Wz,{$isScrolledY:I,$isScrolledX:T}),e.jsx(Vz,Object.assign({$numOfRows:a.length,$isScrolled:T,"data-testid":"row-header-column-id"},{children:e.jsxs(e.Fragment,{children:[a.map(((n,r)=>e.jsx(B,Object.assign({wrapper:e=>((e,n)=>{if(!e.rowHeaderPopover)return n;const r={position:"bottom-start",rootNode:C,customOffset:e.rowHeaderPopover.offset,children:n,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(iH,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),n)})(n,e)},{children:e.jsxs(Xz,Object.assign({$isScrolled:T},{children:[e.jsx(Gz,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e.jsx(Zz,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),F()]})})),e.jsx(Yz,Object.assign({$numOfColumns:j.length,$isScrolled:I},{children:j.map((t=>e.jsx(Uz,Object.assign({"data-testid":`${t}-column`},{children:e.jsx(qz,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),o?e.jsx(Qz,{$isEmptyContent:S}):e.jsxs(Kz,Object.assign({"data-testid":"content-container-id",ref:O,$numOfRows:a.length},{children:[a.map(((t,n)=>e.jsx(Lz,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:N(),intervalWidth:_,containerRef:O},t),`${n}-row-bar`))),L()]}))]}))]}))},exports.Timeline=({items:n,className:r,title:i,startCol:a,colSpan:o,"data-base-indicator-testid":s,"data-testid":l="timeline"})=>{const c=t=>"string"==typeof t?e.jsx(exports.Text.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e.jsx(e.Fragment,{children:t}),d=t=>"string"==typeof t?e.jsx(mz,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e.jsx(e.Fragment,{children:t}),p=e=>e.slice(0,2).map(((e,n)=>t.createElement(xz,Object.assign({},e,{type:e.type,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),f=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(fz,Object.assign({className:r,"data-testid":l,$startCol:a,$colSpan:o},{children:[e.jsx(hz,Object.assign({id:"timeline-title"},{children:i})),n.map(((t,n)=>{const{title:r,content:i,statuses:a,variant:o}=t,l=s?`circleindicator${n+1}_div_${s}`:"circleindicator",u=o||(0===n?"current":"upcoming-active");return e.jsxs(gz,{children:[e.jsxs(pz,{children:[e.jsx(dz,Object.assign({"data-testid":l,$variant:u},{children:f(u)})),e.jsx(uz,{$variant:u})]}),e.jsxs(vz,Object.assign({className:"timeline-item-content"},{children:[d(r),a&&e.jsx(bz,{children:p(a)}),c(i)]}))]},`timeline-item-${n}`)}))]}))},exports.Timepicker=vE,exports.Toast=n=>{var{type:r="success",title:i,label:a,autoDismiss:o,autoDismissTime:s=hH,onDismiss:l,fixed:c=!0,actionButton:d}=n,p=X(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,h]=t.useState(!1),m=kl.useMediaQuery({maxWidth:Jo.tablet});t.useEffect((()=>{h(!0)}),[]),t.useEffect((()=>{if(!o)return;const e=setTimeout((()=>{h(!1)}),s);return()=>clearTimeout(e)}),[o]);const g=oi({opacity:f?1:0,transform:f?m?"translateY(0%)":"translateX(0%)":m?"translateY(-1500%)":"translateX(150%)",config:{easing:ln.easeInOutQuart,duration:1e3},onRest:()=>{f||null==l||l()}});return e.jsxs(oH,Object.assign({style:g,$type:r,$fixed:c},p,{children:[e.jsxs(sH,{children:[e.jsxs(lH,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(cH,{children:[i&&(Y.default.isValidElement(i)?i:e.jsx(dH,Object.assign({$type:r,weight:"semibold"},{children:i}))),a&&e.jsx(uH,Object.assign({$type:r},{children:Y.default.isValidElement(a)?a:i?e.jsx(exports.Text.BodySmall,{children:a}):e.jsx(exports.Text.Body,{children:a})}))]})]})),d&&e.jsx(pH,Object.assign({styleType:"light",onClick:d.onClick},{children:d.label}))]}),e.jsx(fH,Object.assign({$type:r,onClick:()=>{h(!1)}},{children:e.jsx(u.CrossIcon,{})}))]}))},exports.Toggle=XI,exports.Tooltip=xH,exports.Transition=ws,exports.UneditableSection=BH,exports.UnitNumberInput=SE,exports.__awaiter=G,exports.commonjsGlobal=ki,exports.withNotificationBanner=t=>Y.default.forwardRef(((n,r)=>e.jsx(TN,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=NB.sanitize(t.content);return e.jsx("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e.jsx(EN.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(n,r)=>i=>{const{onPopoverAppear:a,onPopoverDismiss:o}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=r.trigger||"click",c=s,[d,u]=t.useState(!1),p=t.useRef(),f=kl.useMediaQuery({maxWidth:Jo.mobileL});t.useEffect((()=>{if(!f)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[d]);const h=e=>{p&&!p.current.contains(e.target)&&(d&&u(!1),o&&o())};return e.jsxs(sF,Object.assign({id:"popover-hoc-wrapper",ref:p},{children:[e.jsx(lF,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||f)&&(u(!d),!d&&a&&a(),d&&o&&o())},onMouseEnter:()=>{"hover"!==l||f||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!f&&u(!1)},"aria-label":"popover-button"},{children:e.jsx(n,Object.assign({},c))})),e.jsx(dF,Object.assign({visible:d,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{u(!1)}},{children:r.content}))]}))},exports.withTooltip=(t,n)=>r=>{const{tooltipVisible:i,position:a}=r,o=X(r,["tooltipVisible","position"]);return e.jsxs(bH,{children:[e.jsx(t,Object.assign({},o)),e.jsx(xH,Object.assign({visible:i,position:a},{children:n.content}))]})};
//# sourceMappingURL=index.c69ba3db.js.map
