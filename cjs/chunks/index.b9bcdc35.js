"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("react-dom"),n=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),o=require("@lifesg/react-icons/external"),a=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),d=require("@lifesg/react-icons/i-circle-fill"),c=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),g=require("@lifesg/react-icons/chevron-left"),p=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),C=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),j=require("@lifesg/react-icons/square-fill"),k=require("@lifesg/react-icons/square-tick-fill"),D=require("@lifesg/react-icons/tick"),E=require("@lifesg/react-icons/caret-right"),T=require("@lifesg/react-icons/minus-square-fill"),F=require("@lifesg/react-icons/circle"),O=require("@lifesg/react-icons/circle-dot"),I=require("@lifesg/react-icons/bin"),M=require("@lifesg/react-icons/pencil"),_=require("@lifesg/react-icons/drag-handle"),A=require("@lifesg/react-icons/minus"),B=require("@lifesg/react-icons/plus"),R=require("@lifesg/react-icons/menu"),z=require("@lifesg/react-icons/chevron-2-left"),P=require("@lifesg/react-icons/chevron-2-right"),L=require("@lifesg/react-icons/chevron-line-left"),N=require("@lifesg/react-icons/chevron-line-right"),H=require("@lifesg/react-icons/ellipsis-horizontal"),W=require("@lifesg/react-icons/star-half");function V(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function Y(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var U=Y(t),K=V(r),q=V(i);const X=U.default.createContext(!1);function G(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function Z(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function Q(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function J(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function ee(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var te=function(e,t){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},te(e,t)};var re=function(){return re=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},re.apply(this,arguments)};var ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ie=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},oe="object"==typeof ne&&ne&&ne.Object===Object&&ne,ae="object"==typeof self&&self&&self.Object===Object&&self,se=oe||ae||Function("return this")(),le=se,de=function(){return le.Date.now()},ce=/\s/;var ue=function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t},fe=/^\s+/;var he=function(e){return e?e.slice(0,ue(e)+1).replace(fe,""):e},ge=se.Symbol,pe=ge,me=Object.prototype,be=me.hasOwnProperty,ve=me.toString,ye=pe?pe.toStringTag:void 0;var xe=function(e){var t=be.call(e,ye),r=e[ye];try{e[ye]=void 0;var n=!0}catch(e){}var i=ve.call(e);return n&&(t?e[ye]=r:delete e[ye]),i},we=Object.prototype.toString;var $e=xe,Ce=function(e){return we.call(e)},Se=ge?ge.toStringTag:void 0;var je=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Se&&Se in Object(e)?$e(e):Ce(e)},ke=function(e){return null!=e&&"object"==typeof e};var De=he,Ee=ie,Te=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==je(e)},Fe=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,Me=parseInt;var _e=ie,Ae=de,Be=function(e){if("number"==typeof e)return e;if(Te(e))return NaN;if(Ee(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ee(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=De(e);var r=Oe.test(e);return r||Ie.test(e)?Me(e.slice(2),r?2:8):Fe.test(e)?NaN:+e},Re=Math.max,ze=Math.min;var Pe=function(e,t,r){var n,i,o,a,s,l,d=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,d=t,a=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function p(){var e=Ae();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?ze(r,o-(e-d)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=Ae(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(p,t),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),a}return t=Be(t)||0,_e(r)&&(c=!!r.leading,o=(u="maxWait"in r)?Re(Be(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Ae())},b},Le=Pe,Ne=ie;var He=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ne(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Le(e,t,{leading:n,maxWait:t,trailing:i})},We=function(e,t,r,n){switch(t){case"debounce":return Pe(e,r,n);case"throttle":return He(e,r,n);default:return e}},Ve=function(e){return"function"==typeof e},Ye=function(){return"undefined"==typeof window},Ue=function(e){return e instanceof Element||e instanceof HTMLDocument},Ke=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&Ve(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function n(n){var i=e.call(this,n)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,r=e.observerOptions;if(!Ye()){t&&t.current&&(i.targetRef.current=t.current);var n=i.getElement();n&&(i.observableElement&&i.observableElement===n||(i.observableElement=n,i.resizeObserver.observe(n,r)))}},i.getElement=function(){var e=i.props,t=e.querySelector,n=e.targetDomEl;if(Ye())return null;if(t)return document.querySelector(t);if(n&&Ue(n))return n;if(i.targetRef&&Ue(i.targetRef.current))return i.targetRef.current;var o=r.findDOMNode(i);if(!o)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},i.createResizeHandler=function(e){var t=i.props,r=t.handleWidth,n=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(n||a){var l=Ke(s,i.setState.bind(i),n,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,n=t.height;!i.skipOnMount&&!Ye()&&l({width:r,height:n}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,r=e.render,n=e.children;return Ve(r)?"renderProp":Ve(n)?"childFunction":t.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var o=n.skipOnMount,a=n.refreshMode,s=n.refreshRate,l=void 0===s?1e3:s,d=n.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=o,i.targetRef=t.createRef(),i.observableElement=null,Ye()||(i.resizeHandler=We(i.createResizeHandler,a,l,d),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}te(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(n,e),n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){Ye()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return t.cloneElement(e,d)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return U.createElement(a,null)}}}(t.PureComponent);var qe=Ye()?t.useEffect:t.useLayoutEffect;function Xe(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,l=e.handleWidth,d=void 0===l||l,c=e.handleHeight,u=void 0===c||c,f=e.targetRef,h=e.observerOptions,g=e.onResize,p=t.useRef(n),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return qe((function(){if(!Ye()){var e=Ke(g,w,d,u);v.current=We((function(t){(d||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!Ye()&&e({width:n,height:i}),p.current=!1}))}),i,a,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,a,s,d,u,g,h,b.current]),re({ref:b},x)}var Ge=Object.defineProperty,Ze={};((e,t)=>{for(var r in t)Ge(e,r,{get:t[r],enumerable:!0})})(Ze,{assign:()=>Ft,colors:()=>Dt,createStringInterpolator:()=>Ct,skipAnimation:()=>Et,to:()=>St,willAdvance:()=>Tt});var Qe=gt(),Je=e=>ct(e,Qe),et=gt();Je.write=e=>ct(e,et);var tt=gt();Je.onStart=e=>ct(e,tt);var rt=gt();Je.onFrame=e=>ct(e,rt);var nt=gt();Je.onFinish=e=>ct(e,nt);var it=[];Je.setTimeout=(e,t)=>{const r=Je.now()+t,n=()=>{const e=it.findIndex((e=>e.cancel==n));~e&&it.splice(e,1),lt-=~e?1:0},i={time:r,handler:e,cancel:n};return it.splice(ot(r),0,i),lt+=1,ut(),i};var ot=e=>~(~it.findIndex((t=>t.time>e))||~it.length);Je.cancel=e=>{tt.delete(e),rt.delete(e),nt.delete(e),Qe.delete(e),et.delete(e)},Je.sync=e=>{dt=!0,Je.batchedUpdates(e),dt=!1},Je.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Je.onStart(r)}return n.handler=e,n.cancel=()=>{tt.delete(r),t=null},n};var at="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Je.use=e=>at=e,Je.now="undefined"!=typeof performance?()=>performance.now():Date.now,Je.batchedUpdates=e=>e(),Je.catch=console.error,Je.frameLoop="always",Je.advance=()=>{"demand"!==Je.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ht()};var st=-1,lt=0,dt=!1;function ct(e,t){dt?(t.delete(e),e(0)):(t.add(e),ut())}function ut(){st<0&&(st=0,"demand"!==Je.frameLoop&&at(ft))}function ft(){~st&&(at(ft),Je.batchedUpdates(ht))}function ht(){const e=st;st=Je.now();const t=ot(st);t&&(pt(it.splice(0,t),(e=>e.handler())),lt-=t),lt?(tt.flush(),Qe.flush(e?Math.min(64,st-e):16.667),rt.flush(),et.flush(),nt.flush()):st=-1}function gt(){let e=new Set,t=e;return{add(r){lt+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(lt-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,lt-=t.size,pt(t,(t=>t(r)&&e.add(t))),lt+=e.size,t=e)}}}function pt(e,t){e.forEach((e=>{try{t(e)}catch(e){Je.catch(e)}}))}function mt(){}var bt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function vt(e,t){if(bt.arr(e)){if(!bt.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var yt=(e,t)=>e.forEach(t);function xt(e,t,r){if(bt.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var wt=e=>bt.und(e)?[]:bt.arr(e)?e:[e];function $t(e,t){if(e.size){const r=Array.from(e);e.clear(),yt(r,t)}}var Ct,St,jt=(e,...t)=>$t(e,(e=>e(...t))),kt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Dt=null,Et=!1,Tt=mt,Ft=e=>{e.to&&(St=e.to),e.now&&(Je.now=e.now),void 0!==e.colors&&(Dt=e.colors),null!=e.skipAnimation&&(Et=e.skipAnimation),e.createStringInterpolator&&(Ct=e.createStringInterpolator),e.requestAnimationFrame&&Je.use(e.requestAnimationFrame),e.batchedUpdates&&(Je.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Tt=e.willAdvance),e.frameLoop&&(Je.frameLoop=e.frameLoop)},Ot=new Set,It=[],Mt=[],_t=0,At={get idle(){return!Ot.size&&!It.length},start(e){_t>e.priority?(Ot.add(e),Je.onStart(Bt)):(Rt(e),Je(Pt))},advance:Pt,sort(e){if(_t)Je.onFrame((()=>At.sort(e)));else{const t=It.indexOf(e);~t&&(It.splice(t,1),zt(e))}},clear(){It=[],Ot.clear()}};function Bt(){Ot.forEach(Rt),Ot.clear(),Je(Pt)}function Rt(e){It.includes(e)||zt(e)}function zt(e){It.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(It,(t=>t.priority>e.priority)),0,e)}function Pt(e){const t=Mt;for(let r=0;r<It.length;r++){const n=It[r];_t=n.priority,n.idle||(Tt(n),n.advance(e),n.idle||t.push(n))}return _t=0,(Mt=It).length=0,(It=t).length>0}var Lt="[-+]?\\d*\\.?\\d+",Nt=Lt+"%";function Ht(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Wt=new RegExp("rgb"+Ht(Lt,Lt,Lt)),Vt=new RegExp("rgba"+Ht(Lt,Lt,Lt,Lt)),Yt=new RegExp("hsl"+Ht(Lt,Nt,Nt)),Ut=new RegExp("hsla"+Ht(Lt,Nt,Nt,Lt)),Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xt=/^#([0-9a-fA-F]{6})$/,Gt=/^#([0-9a-fA-F]{8})$/;function Zt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Qt(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Zt(i,n,e+1/3),a=Zt(i,n,e),s=Zt(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Jt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function er(e){return(parseFloat(e)%360+360)%360/360}function tr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function rr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function nr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Xt.exec(e))?parseInt(t[1]+"ff",16)>>>0:Dt&&void 0!==Dt[e]?Dt[e]:(t=Wt.exec(e))?(Jt(t[1])<<24|Jt(t[2])<<16|Jt(t[3])<<8|255)>>>0:(t=Vt.exec(e))?(Jt(t[1])<<24|Jt(t[2])<<16|Jt(t[3])<<8|tr(t[4]))>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Gt.exec(e))?parseInt(t[1],16)>>>0:(t=qt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Yt.exec(e))?(255|Qt(er(t[1]),rr(t[2]),rr(t[3])))>>>0:(t=Ut.exec(e))?(Qt(er(t[1]),rr(t[2]),rr(t[3]))|tr(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ir=(e,t,r)=>{if(bt.fun(e))return e;if(bt.arr(e))return ir({range:e,output:t,extrapolate:r});if(bt.str(e.output[0]))return Ct(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let d=l?l(e):e;if(d<t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var or=1.70158,ar=1.525*or,sr=or+1,lr=2*Math.PI/3,dr=2*Math.PI/4.5,cr=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ur={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>sr*e*e*e-or*e*e,easeOutBack:e=>1+sr*Math.pow(e-1,3)+or*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ar)/2:(Math.pow(2*e-2,2)*((ar+1)*(2*e-2)+ar)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*lr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*lr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*dr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*dr)/2+1,easeInBounce:e=>1-cr(1-e),easeOutBounce:cr,easeInOutBounce:e=>e<.5?(1-cr(1-2*e))/2:(1+cr(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},fr=Symbol.for("FluidValue.get"),hr=Symbol.for("FluidValue.observers"),gr=e=>Boolean(e&&e[fr]),pr=e=>e&&e[fr]?e[fr]():e,mr=e=>e[hr]||null;function br(e,t){const r=e[hr];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var vr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");yr(this,e)}},yr=(e,t)=>Cr(e,fr,t);function xr(e,t){if(e[fr]){let r=e[hr];r||Cr(e,hr,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function wr(e,t){const r=e[hr];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[hr]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var $r,Cr=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Sr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,jr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,kr=new RegExp(`(${Sr.source})(%|[a-z]+)`,"i"),Dr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Er=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Tr=e=>{const[t,r]=Fr(e);if(!t||kt())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Er.test(r)?Tr(r):r||e},Fr=e=>{const t=Er.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Or=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ir=e=>{$r||($r=Dt?new RegExp(`(${Object.keys(Dt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pr(e).replace(Er,Tr).replace(jr,nr).replace($r,nr))),r=t.map((e=>e.match(Sr).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>ir({...e,output:t})));return e=>{const r=!kr.test(t[0])&&t.find((e=>kr.test(e)))?.replace(Sr,"");let n=0;return t[0].replace(Sr,(()=>`${i[n++](e)}${r||""}`)).replace(Dr,Or)}},Mr="react-spring: ",_r=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Mr}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ar=_r(console.warn);var Br=_r(console.warn);function Rr(e){return bt.str(e)&&("#"==e[0]||/\d/.test(e)||!kt()&&Er.test(e)||e in(Dt||{}))}var zr=kt()?t.useEffect:t.useLayoutEffect;function Pr(){const e=t.useState()[1],r=(()=>{const e=t.useRef(!1);return zr((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Lr=e=>t.useEffect(e,Nr),Nr=[];function Hr(e){const r=t.useRef();return t.useEffect((()=>{r.current=e})),r.current}var Wr=Symbol.for("Animated:node"),Vr=e=>e&&e[Wr],Yr=(e,t)=>{return r=e,n=Wr,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ur=e=>e&&e[Wr]&&e[Wr].getPayload(),Kr=class{constructor(){Yr(this,this)}getPayload(){return this.payload||[]}},qr=class extends Kr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,bt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new qr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return bt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,bt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Xr=class extends qr{constructor(e){super(0),this._string=null,this._toString=ir({output:[e,e]})}static create(e){return new Xr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(bt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ir({output:[this.getValue(),e]})),this._value=0,super.reset()}},Gr={dependencies:null},Zr=class extends Kr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return xt(this.source,((r,n)=>{var i;(i=r)&&i[Wr]===i?t[n]=r.getValue(e):gr(r)?t[n]=pr(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&yt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return xt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Gr.dependencies&&gr(e)&&Gr.dependencies.add(e);const t=Ur(e);t&&yt(t,(e=>this.add(e)))}},Qr=class extends Zr{constructor(e){super(e)}static create(e){return new Qr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Jr)),!0)}};function Jr(e){return(Rr(e)?Xr:qr).create(e)}function en(e){const t=Vr(e);return t?t.constructor:bt.arr(e)?Qr:Rr(e)?Xr:qr}var tn=(e,r)=>{const n=!bt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,o)=>{const a=t.useRef(null),s=n&&t.useCallback((e=>{a.current=function(e,t){e&&(bt.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,d]=function(e,t){const r=new Set;Gr.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Zr(e),Gr.dependencies=null,[e,r]}(i,r),c=Pr(),u=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,l.getValue(!0)))&&c()},f=new rn(u,d),h=t.useRef();zr((()=>(h.current=f,yt(d,(e=>xr(e,f))),()=>{h.current&&(yt(h.current.deps,(e=>wr(e,h.current))),Je.cancel(h.current.update))}))),t.useEffect(u,[]),Lr((()=>()=>{const e=h.current;yt(e.deps,(t=>wr(t,e)))}));const g=r.getComponentProps(l.getValue());return U.createElement(e,{...g,ref:s})}))},rn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Je.write(this.update)}};var nn=Symbol.for("AnimatedComponent"),on=e=>bt.str(e)?e:e&&bt.str(e.displayName)?e.displayName:bt.fun(e)&&e.name||null;function an(e,...t){return bt.fun(e)?e(...t):e}var sn=(e,t)=>!0===e||!!(t&&e&&(bt.fun(e)?e(t):wt(e).includes(t))),ln=(e,t)=>bt.obj(e)?t&&e[t]:e,dn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,cn=e=>e,un=(e,t=cn)=>{let r=fn;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);bt.und(r)||(n[i]=r)}return n},fn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],hn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function gn(e){const t=function(e){const t={};let r=0;if(xt(e,((e,n)=>{hn[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return xt(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function pn(e){return e=pr(e),bt.arr(e)?e.map(pn):Rr(e)?Ze.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mn(e){return bt.fun(e)||bt.arr(e)&&bt.obj(e[0])}var bn={tension:170,friction:26,mass:1,damping:1,easing:ur.linear,clamp:!1},vn=class{constructor(){this.velocity=0,Object.assign(this,bn)}};function yn(e,t){if(bt.und(t.decay)){const r=!bt.und(t.tension)||!bt.und(t.friction);!r&&bt.und(t.frequency)&&bt.und(t.damping)&&bt.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var xn=[],wn=class{constructor(){this.changed=!1,this.values=xn,this.toValues=null,this.fromValues=xn,this.config=new vn,this.immediate=!1}};function $n(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,d,c=sn(r.cancel??n?.cancel,t);if(c)h();else{bt.und(r.pause)||(i.paused=sn(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||sn(e,t)),l=an(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(d),d.cancel(),l=d.time-Je.now()}function f(){l>0&&!Ze.skipAnimation?(i.delayed=!0,d=Je.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(d)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...r,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var Cn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?kn(e.get()):t.every((e=>e.noop))?Sn(e.get()):jn(e.get(),t.every((e=>e.finished))),Sn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),jn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),kn=e=>({value:e,cancelled:!0,finished:!1});function Dn(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=un(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const f=new Promise(((e,t)=>(c=e,u=t))),h=e=>{const t=i<=(r.cancelId||0)&&kn(n)||i!==r.asyncId&&jn(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const o=new Tn,a=new Fn;return(async()=>{if(Ze.skipAnimation)throw En(r),a.result=jn(n,!1),u(a),a;h(o);const s=bt.obj(e)?{...e}:{...t,to:e};s.parentId=i,xt(d,((e,t)=>{bt.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Ze.skipAnimation)return En(r),jn(n,!1);try{let t;t=bt.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(c),f]),p=jn(n.get(),!0,!1)}catch(e){if(e instanceof Tn)p=e.result;else{if(!(e instanceof Fn))throw e;p=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return bt.fun(a)&&Je.batchedUpdates((()=>{a(p,n,n.item)})),p})():l}function En(e,t){$t(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Tn=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Fn=class extends Error{constructor(){super("SkipAnimationSignal")}},On=e=>e instanceof Mn,In=1,Mn=class extends vr{constructor(){super(...arguments),this.id=In++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Vr(this);return e&&e.getValue()}to(...e){return Ze.to(this,e)}interpolate(...e){return Ar(`${Mr}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ze.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){br(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||At.sort(this),br(this,{type:"priority",parent:this,priority:e})}},_n=Symbol.for("SpringPhase"),An=e=>(1&e[_n])>0,Bn=e=>(2&e[_n])>0,Rn=e=>(4&e[_n])>0,zn=(e,t)=>t?e[_n]|=3:e[_n]&=-3,Pn=(e,t)=>t?e[_n]|=4:e[_n]&=-5,Ln=class extends Mn{constructor(e,t){if(super(),this.animation=new wn,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!bt.und(e)||!bt.und(t)){const r=bt.obj(e)?{...e}:{...t,from:e};bt.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Bn(this)||this._state.asyncTo)||Rn(this)}get goal(){return pr(this.animation.to)}get velocity(){const e=Vr(this);return e instanceof qr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return An(this)}get isAnimating(){return Bn(this)}get isPaused(){return Rn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=Ur(n.to);!a&&gr(n.to)&&(i=wt(pr(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==Xr?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=bt.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(bt.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=f,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,n=o.clamp?0:o.bounce,l=!bt.und(n),h=r==d?s.v0>0:r<d;let g,p=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(g=Math.abs(a)>t,g||(c=Math.abs(d-u)<=f,!c));++e){l&&(p=u==d||u>d==h,p&&(a=-a*n,u=d));a+=(1e-6*-o.tension*(u-d)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(d-r),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=Vr(this),l=s.getValue();if(t){const e=pr(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Je.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Bn(this)){const{to:e,config:t}=this.animation;Je.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return bt.und(e)?(r=this.queue||[],this.queue=[]):r=[bt.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Cn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),En(this._state,e&&this._lastCallId),Je.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=bt.obj(r)?r[t]:r,(null==r||mn(r))&&(r=void 0),n=bt.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return An(this)||(e.reverse&&([r,n]=[n,r]),n=pr(n),bt.und(n)?Vr(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,un(e,((e,t)=>/^on/.test(t)?ln(e,r):e))),Kn(this,e,"onProps"),qn(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return $n(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Rn(this)||(Pn(this,!0),jt(o.pauseQueue),qn(this,"onPause",jn(this,Nn(this,this.animation.to)),this))},resume:()=>{Rn(this)&&(Pn(this,!1),Bn(this)&&this._resume(),jt(o.resumeQueue),qn(this,"onResume",jn(this,Nn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Hn(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(kn(this));const n=!bt.und(e.to),i=!bt.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(kn(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||t.default&&!bt.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const f=!vt(u,d);f&&(s.from=u),u=pr(u);const h=!vt(c,l);h&&this._focus(c);const g=mn(t.to),{config:p}=s,{decay:m,velocity:b}=p;(n||i)&&(p.velocity=0),t.config&&!g&&function(e,t,r){r&&(yn(r={...r},t),t={...r,...t}),yn(e,t),Object.assign(e,t);for(const t in bn)null==e[t]&&(e[t]=bn[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;bt.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(p,an(t.config,o),t.config!==a.config?an(a.config,o):void 0);let v=Vr(this);if(!v||bt.und(c))return r(jn(this,!0));const y=bt.und(t.reset)?i&&!t.default:!bt.und(u)&&sn(t.reset,o),x=y?u:this.get(),w=pn(c),$=bt.num(w)||bt.arr(w)||Rr(w),C=!g&&(!$||sn(a.immediate||t.immediate,o));if(h){const e=en(c);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let j=gr(c),k=!1;if(!j){const e=y||!An(this)&&f;(h||e)&&(k=vt(pn(x),w),j=!k),(vt(s.immediate,C)||C)&&vt(p.decay,m)&&vt(p.velocity,b)||(j=!0)}if(k&&Bn(this)&&(s.changed&&!y?j=!0:j||this._stop(l)),!g&&((j||gr(l))&&(s.values=v.getPayload(),s.toValues=gr(c)?null:S==Xr?[1]:wt(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),j)){const{onRest:e}=s;yt(Un,(e=>Kn(this,t,e)));const n=jn(this,Nn(this,l));jt(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Je.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?an(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),g?r(Dn(t.to,t,this._state,this)):j?this._start():Bn(this)&&!h?this._pendingCalls.add(r):r(Sn(x))}_focus(e){const t=this.animation;e!==t.to&&(mr(this)&&this._detach(),t.to=e,mr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;gr(t)&&(xr(t,this),On(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;gr(e)&&wr(e,this)}_set(e,t=!0){const r=pr(e);if(!bt.und(r)){const e=Vr(this);if(!e||!vt(r,e.getValue())){const n=en(r);e&&e.constructor==n?e.setValue(r):Yr(this,n.create(r)),e&&Je.batchedUpdates((()=>{this._onChange(r,t)}))}}return Vr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qn(this,"onStart",jn(this,Nn(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),an(this.animation.onChange,e,this)),an(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Vr(this).reset(pr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Bn(this)||(zn(this,!0),Rn(this)||this._resume())}_resume(){Ze.skipAnimation?this.finish():At.start(this)}_stop(e,t){if(Bn(this)){zn(this,!1);const r=this.animation;yt(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),br(this,{type:"idle",parent:this});const n=t?kn(this.get()):jn(this.get(),Nn(this,e??r.to));jt(this._pendingCalls,n),r.changed&&(r.changed=!1,qn(this,"onRest",n,this))}}};function Nn(e,t){const r=pn(t);return vt(pn(e.get()),r)}function Hn(e,t=e.loop,r=e.to){const n=an(t);if(n){const i=!0!==n&&gn(n),o=(i||e).reverse,a=!i||i.reset;return Wn({...e,loop:t,default:!1,pause:void 0,to:!o||mn(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function Wn(e){const{to:t,from:r}=e=gn(e),n=new Set;return bt.obj(t)&&Yn(t,n),bt.obj(r)&&Yn(r,n),e.keys=n.size?Array.from(n):null,e}function Vn(e){const t=Wn(e);return bt.und(t.default)&&(t.default=un(t)),t}function Yn(e,t){xt(e,((e,r)=>null!=e&&t.add(r)))}var Un=["onStart","onRest","onChange","onPause","onResume"];function Kn(e,t,r){e.animation[r]=t[r]!==dn(t,r)?ln(t[r],e.key):void 0}function qn(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Xn=["onStart","onChange","onRest"],Gn=1,Zn=class{constructor(e,t){this.id=Gn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];bt.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Wn(e)),this}start(e){let{queue:t}=this;return e?t=wt(e).map(Wn):this.queue=[],this._flush?this._flush(this,t):(ii(this,t),Qn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;yt(wt(t),(t=>r[t].stop(!!e)))}else En(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(bt.und(e))this.start({pause:!0});else{const t=this.springs;yt(wt(e),(e=>t[e].pause()))}return this}resume(e){if(bt.und(e))this.start({pause:!1});else{const t=this.springs;yt(wt(e),(e=>t[e].resume()))}return this}each(e){xt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,$t(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&$t(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,$t(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Je.onFrame(this._onFrame)}};function Qn(e,t){return Promise.all(t.map((t=>Jn(e,t)))).then((t=>Cn(e,t)))}async function Jn(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,d=bt.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=bt.arr(i)||bt.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):yt(Xn,(r=>{const n=t[r];if(bt.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,jt(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===dn(t,"cancel");(c||h&&u.asyncId)&&f.push($n(++e._lastAsyncId,{props:t,state:u,actions:{pause:mt,resume:mt,start(t,r){h?(En(u,e._lastAsyncId),r(kn(e))):(t.onRest=s,r(Dn(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=Cn(e,await Promise.all(f));if(a&&g.finished&&(!r||!g.noop)){const r=Hn(t,a,i);if(r)return ii(e,[r]),Jn(e,r,!0)}return l&&Je.batchedUpdates((()=>l(g,e,e.item))),g}function ei(e,t){const r={...e.springs};return t&&yt(wt(t),(e=>{bt.und(e.keys)&&(e=Wn(e)),bt.obj(e.to)||(e={...e,to:void 0}),ni(r,e,(e=>ri(e)))})),ti(e,r),r}function ti(e,t){xt(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,xr(t,e))}))}function ri(e,t){const r=new Ln;return r.key=e,t&&xr(r,t),r}function ni(e,t,r){t.keys&&yt(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ii(e,t){yt(t,(t=>{ni(e.springs,t,(t=>ri(t,e)))}))}var oi,ai,si=({children:e,...r})=>{const n=t.useContext(li),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,r){const[n]=t.useState((()=>({inputs:r,result:e()}))),i=t.useRef(),o=i.current;let a=o;if(a){const t=Boolean(r&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,a.inputs));t||(a={inputs:r,result:e()})}else a=n;return t.useEffect((()=>{i.current=a,o==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=li;return U.createElement(a,{value:r},e)},li=(oi=si,ai={},Object.assign(oi,U.createContext(ai)),oi.Provider._context=oi,oi.Consumer._context=oi,oi);si.Provider=li.Provider,si.Consumer=li.Consumer;var di=()=>{const e=[],t=function(t){Br(`${Mr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return yt(e,((e,i)=>{if(bt.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return yt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return yt(e,(e=>e.resume(...arguments))),this},t.set=function(t){yt(e,((e,r)=>{const n=bt.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return yt(e,((e,n)=>{if(bt.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return yt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return yt(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return bt.fun(e)?e(r,t):e};return t._getProps=r,t};function ci(e,r){const n=bt.fun(e),[[i],o]=function(e,r,n){const i=bt.fun(r)&&r;i&&!n&&(n=[]);const o=t.useMemo((()=>i||3==arguments.length?di():void 0),[]),a=t.useRef(0),s=Pr(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=ei(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Qn(e,t):new Promise((n=>{ti(e,r),l.queue.push((()=>{n(Qn(e,t))})),s()}))}})),[]),d=t.useRef([...l.ctrls]),c=[],u=Hr(e)||0;function f(e,t){for(let n=e;n<t;n++){const e=d.current[n]||(d.current[n]=new Zn(null,l.flush)),t=i?i(n,e):r[n];t&&(c[n]=Vn(t))}}t.useMemo((()=>{yt(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),n);const h=d.current.map(((e,t)=>ei(e,c[t]))),g=t.useContext(si),p=Hr(g),m=g!==p&&function(e){for(const t in e)return!0;return!1}(g);zr((()=>{a.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],yt(e,(e=>e()))),yt(d.current,((e,t)=>{o?.add(e),m&&e.start({default:g});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Lr((()=>()=>{yt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?r||[]:r);return n||2==arguments.length?[i,o]:i}var ui=class extends Mn{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ir(...t);const r=this._get(),n=en(r);Yr(this,n.create(r))}advance(e){const t=this._get();vt(t,this.get())||(Vr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&hi(this._active)&&gi(this)}_get(){const e=bt.arr(this.source)?this.source.map(pr):wt(pr(this.source));return this.calc(...e)}_start(){this.idle&&!hi(this._active)&&(this.idle=!1,yt(Ur(this),(e=>{e.done=!1})),Ze.skipAnimation?(Je.batchedUpdates((()=>this.advance())),gi(this)):At.start(this))}_attach(){let e=1;yt(wt(this.source),(t=>{gr(t)&&xr(t,this),On(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){yt(wt(this.source),(e=>{gr(e)&&wr(e,this)})),this._active.clear(),gi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=wt(this.source).reduce(((e,t)=>Math.max(e,(On(t)?t.priority:0)+1)),0))}};function fi(e){return!1!==e.idle}function hi(e){return!e.size||Array.from(e).every(fi)}function gi(e){e.idle||(e.idle=!0,yt(Ur(e),(e=>{e.done=!0})),br(e,{type:"idle",parent:e}))}Ze.assign({createStringInterpolator:Ir,to:(e,t)=>new ui(e,t)});var pi=/^--/;function mi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||pi.test(e)||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}var bi={};var vi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","Ms","Moz","O"];vi=Object.keys(vi).reduce(((e,t)=>(yi.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),vi);var xi=/^(matrix|translate|scale|rotate|skew)/,wi=/^(translate)/,$i=/^(rotate|skew)/,Ci=(e,t)=>bt.num(e)&&0!==e?e+t:e,Si=(e,t)=>bt.arr(e)?e.every((e=>Si(e,t))):bt.num(e)?e===t:parseFloat(e)===t,ji=class extends Zr{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Ci(e,"px"))).join(",")})`,Si(e,0)]))),xt(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(xi.test(t)){if(delete n[t],bt.und(e))return;const r=wi.test(t)?"px":$i.test(t)?"deg":"";i.push(wt(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Ci(i,r)})`,Si(i,0)]:e=>[`${t}(${e.map((e=>Ci(e,r))).join(",")})`,Si(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new ki(i,o)),super(n)}},ki=class extends vr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return yt(this.inputs,((r,n)=>{const i=pr(r[0]),[o,a]=this.transforms[n](bt.arr(i)?i:r.map(pr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&yt(this.inputs,(e=>yt(e,(e=>gr(e)&&xr(e,this)))))}observerRemoved(e){0==e&&yt(this.inputs,(e=>yt(e,(e=>gr(e)&&wr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),br(this,e)}};Ze.assign({batchedUpdates:r.unstable_batchedUpdates,createStringInterpolator:Ir,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Di=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Zr(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=on(e)||"Anonymous";return(e=bt.str(e)?o[e]||(o[e]=tn(e,i)):e[nn]||(e[nn]=tn(e,i))).displayName=`Animated(${t})`,e};return xt(e,((t,r)=>{bt.arr(e)&&(r=on(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:bi[t]||(bi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=mi(t,n[t]);pi.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ji(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ei=Di.animated,Ti="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Fi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oi=Array.isArray,Ii="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,Mi=Ii,_i="object"==typeof self&&self&&self.Object===Object&&self,Ai=Mi||_i||Function("return this")(),Bi=Ai.Symbol,Ri=Bi,zi=Object.prototype,Pi=zi.hasOwnProperty,Li=zi.toString,Ni=Ri?Ri.toStringTag:void 0;var Hi=function(e){var t=Pi.call(e,Ni),r=e[Ni];try{e[Ni]=void 0;var n=!0}catch(e){}var i=Li.call(e);return n&&(t?e[Ni]=r:delete e[Ni]),i},Wi=Object.prototype.toString;var Vi=Hi,Yi=function(e){return Wi.call(e)},Ui=Bi?Bi.toStringTag:void 0;var Ki=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Vi(e):Yi(e)};var qi=function(e){return null!=e&&"object"==typeof e},Xi=Ki,Gi=qi;var Zi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Xi(e)},Qi=Oi,Ji=Zi,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,to=/^\w*$/;var ro=function(e,t){if(Qi(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ji(e))||(to.test(e)||!eo.test(e)||null!=t&&e in Object(t))};var no=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},io=Ki,oo=no;var ao,so=function(e){if(!oo(e))return!1;var t=io(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lo=Ai["__core-js_shared__"],co=(ao=/[^.]+$/.exec(lo&&lo.keys&&lo.keys.IE_PROTO||""))?"Symbol(src)_1."+ao:"";var uo=function(e){return!!co&&co in e},fo=Function.prototype.toString;var ho=function(e){if(null!=e){try{return fo.call(e)}catch(e){}try{return e+""}catch(e){}}return""},go=so,po=uo,mo=no,bo=ho,vo=/^\[object .+?Constructor\]$/,yo=Function.prototype,xo=Object.prototype,wo=yo.toString,$o=xo.hasOwnProperty,Co=RegExp("^"+wo.call($o).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var So=function(e,t){return null==e?void 0:e[t]},jo=function(e){return!(!mo(e)||po(e))&&(go(e)?Co:vo).test(bo(e))},ko=So;var Do=function(e,t){var r=ko(e,t);return jo(r)?r:void 0},Eo=Do(Object,"create"),To=Eo;var Fo=function(){this.__data__=To?To(null):{},this.size=0};var Oo=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Io=Eo,Mo=Object.prototype.hasOwnProperty;var _o=function(e){var t=this.__data__;if(Io){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Mo.call(t,e)?t[e]:void 0},Ao=Eo,Bo=Object.prototype.hasOwnProperty;var Ro=function(e){var t=this.__data__;return Ao?void 0!==t[e]:Bo.call(t,e)},zo=Eo;var Po=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=zo&&void 0===t?"__lodash_hash_undefined__":t,this},Lo=Fo,No=Oo,Ho=_o,Wo=Ro,Vo=Po;function Yo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yo.prototype.clear=Lo,Yo.prototype.delete=No,Yo.prototype.get=Ho,Yo.prototype.has=Wo,Yo.prototype.set=Vo;var Uo=Yo;var Ko=function(){this.__data__=[],this.size=0};var qo=function(e,t){return e===t||e!=e&&t!=t},Xo=qo;var Go=function(e,t){for(var r=e.length;r--;)if(Xo(e[r][0],t))return r;return-1},Zo=Go,Qo=Array.prototype.splice;var Jo=function(e){var t=this.__data__,r=Zo(t,e);return!(r<0)&&(r==t.length-1?t.pop():Qo.call(t,r,1),--this.size,!0)},ea=Go;var ta=function(e){var t=this.__data__,r=ea(t,e);return r<0?void 0:t[r][1]},ra=Go;var na=function(e){return ra(this.__data__,e)>-1},ia=Go;var oa=function(e,t){var r=this.__data__,n=ia(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},aa=Ko,sa=Jo,la=ta,da=na,ca=oa;function ua(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ua.prototype.clear=aa,ua.prototype.delete=sa,ua.prototype.get=la,ua.prototype.has=da,ua.prototype.set=ca;var fa=ua,ha=Do(Ai,"Map"),ga=Uo,pa=fa,ma=ha;var ba=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var va=function(e,t){var r=e.__data__;return ba(t)?r["string"==typeof t?"string":"hash"]:r.map},ya=va;var xa=function(e){var t=ya(this,e).delete(e);return this.size-=t?1:0,t},wa=va;var $a=function(e){return wa(this,e).get(e)},Ca=va;var Sa=function(e){return Ca(this,e).has(e)},ja=va;var ka=function(e,t){var r=ja(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Da=function(){this.size=0,this.__data__={hash:new ga,map:new(ma||pa),string:new ga}},Ea=xa,Ta=$a,Fa=Sa,Oa=ka;function Ia(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ia.prototype.clear=Da,Ia.prototype.delete=Ea,Ia.prototype.get=Ta,Ia.prototype.has=Fa,Ia.prototype.set=Oa;var Ma=Ia,_a=Ma;function Aa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||_a),r}Aa.Cache=_a;var Ba=Aa;var Ra=function(e){var t=Ba(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pa=/\\(\\)?/g,La=Ra((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(za,(function(e,r,n,i){t.push(n?i.replace(Pa,"$1"):r||e)})),t}));var Na=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ha=Oi,Wa=Zi,Va=Bi?Bi.prototype:void 0,Ya=Va?Va.toString:void 0;var Ua=function e(t){if("string"==typeof t)return t;if(Ha(t))return Na(t,e)+"";if(Wa(t))return Ya?Ya.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Ka=Ua;var qa=function(e){return null==e?"":Ka(e)},Xa=Oi,Ga=ro,Za=La,Qa=qa;var Ja=function(e,t){return Xa(e)?e:Ga(e,t)?[e]:Za(Qa(e))},es=Zi;var ts=function(e){if("string"==typeof e||es(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},rs=Ja,ns=ts;var is=function(e,t){for(var r=0,n=(t=rs(t,e)).length;null!=e&&r<n;)e=e[ns(t[r++])];return r&&r==n?e:void 0},os=is;var as=function(e,t,r){var n=null==e?void 0:os(e,t);return void 0===n?r:n},ss=Fi(as);const ls=(e,t,r)=>ss(r,t)||ss(e,t),ds=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)},cs={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},us=e=>t=>{var r;const n=t.theme,i=ds(cs,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${ls(i,e,n.overrides.border)}px`:`${i[e]}px`},fs={"width-005":us("width-005"),"width-010":us("width-010"),"width-020":us("width-020"),"width-040":us("width-040"),solid:(hs="solid",e=>{var t;const r=e.theme,n=ds(cs,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?ls(n,hs,r.overrides.border):n[hs];return"function"==typeof i?i(e):i})};var hs;const gs={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ps={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ms={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bs={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vs={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ys={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xs={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ws={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$s={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Cs={collections:{lifesg:ms,bookingsg:gs,rbs:xs,mylegacy:bs,ccube:ps,oneservice:vs,pa:ys,a11yplayground:ws,supportgowhere:$s},defaultValue:"lifesg"},Ss={collections:{lifesg:ms,bookingsg:gs,rbs:xs,mylegacy:bs,ccube:ps,oneservice:vs,pa:ys,a11yplayground:ws,supportgowhere:$s},defaultValue:"lifesg"},js=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=ds(i?Ss:Cs,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?ls(o,e,s):o[e]},ks={"brand-10":js("brand-10"),"brand-20":js("brand-20"),"brand-30":js("brand-30"),"brand-40":js("brand-40"),"brand-50":js("brand-50"),"brand-60":js("brand-60"),"brand-70":js("brand-70"),"brand-80":js("brand-80"),"brand-90":js("brand-90"),"brand-95":js("brand-95"),"brand-100":js("brand-100"),"primary-10":js("primary-10"),"primary-20":js("primary-20"),"primary-30":js("primary-30"),"primary-40":js("primary-40"),"primary-50":js("primary-50"),"primary-60":js("primary-60"),"primary-70":js("primary-70"),"primary-80":js("primary-80"),"primary-90":js("primary-90"),"primary-95":js("primary-95"),"primary-100":js("primary-100"),"secondary-10":js("secondary-10"),"secondary-20":js("secondary-20"),"secondary-30":js("secondary-30"),"secondary-40":js("secondary-40"),"secondary-50":js("secondary-50"),"secondary-60":js("secondary-60"),"secondary-70":js("secondary-70"),"secondary-80":js("secondary-80"),"secondary-90":js("secondary-90"),"secondary-95":js("secondary-95"),"secondary-100":js("secondary-100"),"neutral-10":js("neutral-10"),"neutral-20":js("neutral-20"),"neutral-30":js("neutral-30"),"neutral-40":js("neutral-40"),"neutral-50":js("neutral-50"),"neutral-60":js("neutral-60"),"neutral-70":js("neutral-70"),"neutral-80":js("neutral-80"),"neutral-90":js("neutral-90"),"neutral-95":js("neutral-95"),"neutral-100":js("neutral-100"),"success-10":js("success-10"),"success-20":js("success-20"),"success-30":js("success-30"),"success-40":js("success-40"),"success-50":js("success-50"),"success-60":js("success-60"),"success-70":js("success-70"),"success-80":js("success-80"),"success-90":js("success-90"),"success-95":js("success-95"),"success-100":js("success-100"),"warning-10":js("warning-10"),"warning-20":js("warning-20"),"warning-30":js("warning-30"),"warning-40":js("warning-40"),"warning-50":js("warning-50"),"warning-60":js("warning-60"),"warning-70":js("warning-70"),"warning-80":js("warning-80"),"warning-90":js("warning-90"),"warning-95":js("warning-95"),"warning-100":js("warning-100"),"error-10":js("error-10"),"error-20":js("error-20"),"error-30":js("error-30"),"error-40":js("error-40"),"error-50":js("error-50"),"error-60":js("error-60"),"error-70":js("error-70"),"error-80":js("error-80"),"error-90":js("error-90"),"error-95":js("error-95"),"error-100":js("error-100"),"info-10":js("info-10"),"info-20":js("info-20"),"info-30":js("info-30"),"info-40":js("info-40"),"info-50":js("info-50"),"info-60":js("info-60"),"info-70":js("info-70"),"info-80":js("info-80"),"info-90":js("info-90"),"info-95":js("info-95"),"info-100":js("info-100"),white:js("white"),black:js("black"),"primary-inverse":js("primary-inverse")},Ds={text:js("neutral-20"),"text-subtle":js("neutral-30"),"text-subtler":js("neutral-50"),"text-subtlest":js("neutral-60"),"text-primary":js("primary-50"),"text-hover":js("primary-40"),"text-selected":js("primary-50"),"text-selected-hover":js("primary-40"),"text-disabled":js("neutral-50"),"text-disabled-subtle":js("neutral-60"),"text-disabled-subtlest":js("neutral-80"),"text-selected-disabled":js("neutral-20"),"text-success":js("success-40"),"text-warning":js("warning-40"),"text-error":js("error-40"),"text-info":js("info-40"),"text-inverse":js("white"),icon:js("neutral-50"),"icon-subtle":js("neutral-60"),"icon-strongest":js("neutral-20"),"icon-primary":js("primary-50"),"icon-primary-subtle":js("primary-60"),"icon-primary-subtlest":js("primary-70"),"icon-hover":js("primary-40"),"icon-selected":js("primary-50"),"icon-selected-hover":js("primary-40"),"icon-disabled":js("neutral-50"),"icon-disabled-subtle":js("neutral-60"),"icon-selected-disabled":js("neutral-60"),"icon-success":js("success-50"),"icon-warning":js("warning-60"),"icon-error":js("error-50"),"icon-error-strong":js("error-40"),"icon-info":js("info-50"),"icon-inverse":js("white"),"icon-primary-inverse":js("primary-inverse"),border:js("neutral-90"),"border-strong":js("neutral-70"),"border-stronger":js("neutral-50"),"border-primary":js("primary-50"),"border-primary-subtle":js("primary-60"),"border-hover":js("primary-90"),"border-hover-strong":js("primary-60"),"border-selected":js("primary-50"),"border-selected-subtle":js("primary-70"),"border-selected-subtlest":js("primary-90"),"border-selected-hover":js("primary-40"),"border-focus":js("primary-60"),"border-focus-strong":js("primary-50"),"border-disabled":js("neutral-90"),"border-selected-disabled":js("neutral-70"),"border-success":js("success-60"),"border-warning":js("warning-60"),"border-error":js("error-60"),"border-error-focus":js("error-60"),"border-error-focus-strong":js("error-40"),"border-error-strong":js("error-40"),"border-info":js("info-60"),bg:js("white"),"bg-strong":js("neutral-100"),"bg-stronger":js("neutral-95"),"bg-strongest":js("neutral-90"),"bg-hover":js("primary-95"),"bg-hover-strong":js("primary-90"),"bg-hover-subtle":js("primary-100"),"bg-hover-neutral":js("neutral-100"),"bg-hover-neutral-strong":js("neutral-90"),"bg-selected":js("primary-95"),"bg-selected-hover":js("primary-90"),"bg-selected-strong":js("primary-90"),"bg-selected-stronger":js("primary-70"),"bg-selected-strongest":js("primary-50"),"bg-selected-strongest-hover":js("primary-40"),"bg-disabled":js("neutral-95"),"bg-selected-disabled":js("neutral-95"),"bg-selected-stronger-disabled":js("neutral-70"),"bg-success":js("success-100"),"bg-success-hover":js("success-95"),"bg-success-strong":js("success-50"),"bg-success-strong-hover":js("success-40"),"bg-warning":js("warning-100"),"bg-warning-hover":js("warning-95"),"bg-warning-strong":js("warning-50"),"bg-warning-strong-hover":js("warning-40"),"bg-info":js("info-100"),"bg-info-hover":js("info-95"),"bg-info-strong":js("info-50"),"bg-info-strong-hover":js("info-40"),"bg-error":js("error-100"),"bg-error-hover":js("error-95"),"bg-error-strong":js("error-50"),"bg-error-strong-hover":js("error-40"),"bg-inverse":js("neutral-20"),"bg-inverse-subtle":js("neutral-30"),"bg-inverse-subtler":js("neutral-50"),"bg-inverse-subtlest":js("neutral-60"),"bg-inverse-hover":js("neutral-40"),"bg-primary":js("primary-50"),"bg-primary-subtle":js("primary-60"),"bg-primary-subtler":js("primary-95"),"bg-primary-subtlest":js("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":js("primary-40"),"bg-primary-subtlest-hover":js("primary-90"),"bg-primary-subtlest-selected":js("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:js("primary-50"),"hyperlink-hover":js("primary-40"),"hyperlink-visited":js("primary-40"),"hyperlink-inverse":js("primary-inverse"),"focus-ring":js("black"),"focus-ring-inverse":js("white")},Es={text:js("neutral-100"),"text-subtle":js("neutral-80"),"text-subtler":js("neutral-60"),"text-subtlest":js("neutral-50"),"text-primary":js("primary-60"),"text-hover":js("primary-70"),"text-selected":js("primary-60"),"text-selected-hover":js("primary-70"),"text-disabled":js("neutral-60"),"text-disabled-subtle":js("neutral-50"),"text-disabled-subtlest":js("neutral-30"),"text-selected-disabled":js("neutral-90"),"text-success":js("success-70"),"text-warning":js("warning-70"),"text-error":js("error-70"),"text-info":js("info-70"),"text-inverse":js("black"),icon:js("neutral-60"),"icon-subtle":js("neutral-50"),"icon-strongest":js("neutral-90"),"icon-primary":js("primary-60"),"icon-primary-subtle":js("primary-50"),"icon-primary-subtlest":js("primary-40"),"icon-hover":js("primary-70"),"icon-selected":js("primary-60"),"icon-selected-hover":js("primary-70"),"icon-disabled":js("neutral-60"),"icon-disabled-subtle":js("neutral-50"),"icon-selected-disabled":js("neutral-50"),"icon-success":js("success-60"),"icon-warning":js("warning-50"),"icon-error":js("error-60"),"icon-error-strong":js("error-70"),"icon-info":js("info-60"),"icon-inverse":js("black"),"icon-primary-inverse":js("primary-inverse"),border:js("neutral-20"),"border-strong":js("neutral-40"),"border-stronger":js("neutral-60"),"border-primary":js("primary-60"),"border-primary-subtle":js("primary-50"),"border-hover":js("primary-20"),"border-hover-strong":js("primary-50"),"border-selected":js("primary-60"),"border-selected-subtle":js("primary-40"),"border-selected-subtlest":js("primary-20"),"border-selected-hover":js("primary-70"),"border-focus":js("primary-50"),"border-focus-strong":js("primary-60"),"border-disabled":js("neutral-20"),"border-selected-disabled":js("neutral-40"),"border-success":js("success-50"),"border-warning":js("warning-50"),"border-error":js("error-50"),"border-error-focus":js("error-50"),"border-error-focus-strong":js("error-70"),"border-error-strong":js("error-70"),"border-info":js("info-50"),bg:js("black"),"bg-strong":js("neutral-10"),"bg-stronger":js("neutral-20"),"bg-strongest":js("neutral-20"),"bg-hover":js("primary-20"),"bg-hover-strong":js("primary-20"),"bg-hover-subtle":js("primary-10"),"bg-hover-neutral":js("neutral-10"),"bg-hover-neutral-strong":js("neutral-20"),"bg-selected":js("primary-20"),"bg-selected-hover":js("primary-20"),"bg-selected-strong":js("primary-20"),"bg-selected-stronger":js("primary-40"),"bg-selected-strongest":js("primary-60"),"bg-selected-strongest-hover":js("primary-70"),"bg-disabled":js("neutral-20"),"bg-selected-disabled":js("neutral-20"),"bg-selected-stronger-disabled":js("neutral-40"),"bg-success":js("success-10"),"bg-success-hover":js("success-20"),"bg-success-strong":js("success-60"),"bg-success-strong-hover":js("success-70"),"bg-warning":js("warning-10"),"bg-warning-hover":js("warning-20"),"bg-warning-strong":js("warning-60"),"bg-warning-strong-hover":js("warning-70"),"bg-info":js("info-10"),"bg-info-hover":js("info-20"),"bg-info-strong":js("info-60"),"bg-info-strong-hover":js("info-70"),"bg-error":js("error-10"),"bg-error-hover":js("error-20"),"bg-error-strong":js("error-60"),"bg-error-strong-hover":js("error-70"),"bg-inverse":js("neutral-90"),"bg-inverse-subtle":js("neutral-80"),"bg-inverse-subtler":js("neutral-60"),"bg-inverse-subtlest":js("neutral-50"),"bg-inverse-hover":js("neutral-70"),"bg-primary":js("primary-60"),"bg-primary-subtle":js("primary-50"),"bg-primary-subtler":js("primary-20"),"bg-primary-subtlest":js("primary-10"),"bg-available":"#185339","bg-primary-hover":js("primary-70"),"bg-primary-subtlest-hover":js("primary-20"),"bg-primary-subtlest-selected":js("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:js("primary-60"),"hyperlink-hover":js("primary-70"),"hyperlink-visited":js("primary-70"),"hyperlink-inverse":js("primary-inverse"),"focus-ring":js("primary-60"),"focus-ring-inverse":js("black")},Ts={text:js("neutral-30"),"text-subtle":js("neutral-40"),"text-subtler":js("neutral-50"),"text-subtlest":js("neutral-70"),"text-primary":js("neutral-10"),"text-hover":js("neutral-70"),"text-selected":js("neutral-20"),"text-selected-hover":js("neutral-10"),"text-disabled":js("neutral-50"),"text-disabled-subtle":js("neutral-60"),"text-disabled-subtlest":js("neutral-80"),"text-selected-disabled":js("neutral-40"),"text-success":js("success-40"),"text-warning":js("warning-40"),"text-error":js("brand-30"),"text-info":js("neutral-40"),"text-inverse":js("neutral-100"),icon:js("neutral-40"),"icon-subtle":js("neutral-50"),"icon-strongest":js("neutral-10"),"icon-primary":js("neutral-10"),"icon-primary-subtle":js("neutral-30"),"icon-primary-subtlest":js("neutral-60"),"icon-hover":js("neutral-70"),"icon-selected":js("brand-20"),"icon-selected-hover":js("brand-10"),"icon-disabled":js("neutral-50"),"icon-disabled-subtle":js("neutral-60"),"icon-selected-disabled":js("neutral-40"),"icon-success":js("success-40"),"icon-warning":js("warning-60"),"icon-error":js("brand-30"),"icon-error-strong":js("brand-10"),"icon-info":js("neutral-40"),"icon-inverse":js("neutral-100"),"icon-primary-inverse":"#F9B371",border:js("neutral-90"),"border-strong":js("neutral-30"),"border-stronger":js("neutral-20"),"border-primary":js("neutral-40"),"border-primary-subtle":js("neutral-60"),"border-hover":js("neutral-80"),"border-hover-strong":js("neutral-10"),"border-selected":js("brand-20"),"border-selected-subtle":js("neutral-40"),"border-selected-subtlest":js("neutral-70"),"border-selected-hover":js("neutral-10"),"border-focus":js("neutral-20"),"border-focus-strong":js("neutral-10"),"border-disabled":js("neutral-90"),"border-selected-disabled":js("neutral-80"),"border-success":js("success-40"),"border-warning":js("warning-60"),"border-error":js("brand-30"),"border-error-focus":js("brand-20"),"border-error-focus-strong":js("brand-10"),"border-error-strong":js("brand-20"),"border-info":js("neutral-40"),bg:js("neutral-100"),"bg-strong":js("neutral-95"),"bg-stronger":js("neutral-90"),"bg-strongest":js("neutral-80"),"bg-hover":js("brand-90"),"bg-hover-strong":js("brand-80"),"bg-hover-subtle":js("neutral-90"),"bg-hover-neutral":js("neutral-90"),"bg-hover-neutral-strong":js("neutral-90"),"bg-selected":js("brand-100"),"bg-selected-hover":js("brand-30"),"bg-selected-strong":js("brand-50"),"bg-selected-stronger":js("brand-40"),"bg-selected-strongest":js("brand-20"),"bg-selected-strongest-hover":js("brand-10"),"bg-disabled":js("neutral-90"),"bg-selected-disabled":js("neutral-90"),"bg-selected-stronger-disabled":js("neutral-80"),"bg-success":js("success-100"),"bg-success-hover":js("success-95"),"bg-success-strong":js("success-50"),"bg-success-strong-hover":js("success-40"),"bg-warning":js("warning-100"),"bg-warning-hover":js("warning-95"),"bg-warning-strong":js("warning-50"),"bg-warning-strong-hover":js("warning-40"),"bg-info":js("neutral-95"),"bg-info-hover":js("info-95"),"bg-info-strong":js("info-50"),"bg-info-strong-hover":js("info-40"),"bg-error":js("brand-100"),"bg-error-hover":js("error-95"),"bg-error-strong":js("error-50"),"bg-error-strong-hover":js("error-40"),"bg-inverse":js("neutral-40"),"bg-inverse-subtle":js("neutral-60"),"bg-inverse-subtler":js("neutral-70"),"bg-inverse-subtlest":js("neutral-80"),"bg-inverse-hover":js("neutral-30"),"bg-primary":js("brand-20"),"bg-primary-subtle":js("brand-60"),"bg-primary-subtler":js("brand-80"),"bg-primary-subtlest":js("brand-100"),"bg-available":js("success-60"),"bg-primary-hover":js("brand-10"),"bg-primary-subtlest-hover":js("brand-80"),"bg-primary-subtlest-selected":js("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:js("neutral-10"),"hyperlink-hover":js("neutral-40"),"hyperlink-visited":js("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":js("black"),"focus-ring-inverse":js("white")},Fs={text:js("neutral-20"),"text-subtle":js("neutral-30"),"text-subtler":js("neutral-50"),"text-subtlest":js("neutral-60"),"text-primary":js("primary-50"),"text-hover":js("primary-40"),"text-selected":js("primary-50"),"text-selected-hover":js("primary-40"),"text-disabled":js("neutral-50"),"text-disabled-subtle":js("neutral-60"),"text-disabled-subtlest":js("neutral-80"),"text-selected-disabled":js("neutral-20"),"text-success":js("success-40"),"text-warning":js("warning-40"),"text-error":js("error-40"),"text-info":js("info-40"),"text-inverse":js("white"),icon:js("neutral-50"),"icon-subtle":js("neutral-60"),"icon-strongest":js("neutral-20"),"icon-primary":js("primary-50"),"icon-primary-subtle":js("primary-60"),"icon-primary-subtlest":js("primary-70"),"icon-hover":js("primary-40"),"icon-selected":js("primary-50"),"icon-selected-hover":js("primary-40"),"icon-disabled":js("neutral-50"),"icon-disabled-subtle":js("neutral-60"),"icon-selected-disabled":js("neutral-60"),"icon-success":js("success-50"),"icon-warning":js("warning-60"),"icon-error":js("error-50"),"icon-error-strong":js("error-40"),"icon-info":js("info-50"),"icon-inverse":js("white"),"icon-primary-inverse":js("primary-inverse"),border:js("neutral-90"),"border-strong":js("neutral-70"),"border-stronger":js("neutral-50"),"border-primary":js("primary-50"),"border-primary-subtle":js("primary-60"),"border-hover":js("primary-90"),"border-hover-strong":js("primary-60"),"border-selected":js("primary-50"),"border-selected-subtle":js("primary-70"),"border-selected-subtlest":js("primary-90"),"border-selected-hover":js("primary-40"),"border-focus":js("primary-60"),"border-focus-strong":js("primary-50"),"border-disabled":js("neutral-90"),"border-selected-disabled":js("neutral-70"),"border-success":js("success-60"),"border-warning":js("warning-60"),"border-error":js("error-60"),"border-error-focus":js("error-60"),"border-error-focus-strong":js("error-40"),"border-error-strong":js("error-40"),"border-info":js("info-60"),bg:js("white"),"bg-strong":js("neutral-100"),"bg-stronger":js("neutral-95"),"bg-strongest":js("neutral-90"),"bg-hover":js("primary-95"),"bg-hover-strong":js("primary-90"),"bg-hover-subtle":js("primary-100"),"bg-hover-neutral":js("neutral-100"),"bg-hover-neutral-strong":js("neutral-90"),"bg-selected":js("primary-95"),"bg-selected-hover":js("primary-90"),"bg-selected-strong":js("primary-90"),"bg-selected-stronger":js("primary-70"),"bg-selected-strongest":js("primary-50"),"bg-selected-strongest-hover":js("primary-40"),"bg-disabled":js("neutral-95"),"bg-selected-disabled":js("neutral-95"),"bg-selected-stronger-disabled":js("neutral-70"),"bg-success":js("success-100"),"bg-success-hover":js("success-95"),"bg-success-strong":js("success-50"),"bg-success-strong-hover":js("success-40"),"bg-warning":js("warning-100"),"bg-warning-hover":js("warning-95"),"bg-warning-strong":js("warning-50"),"bg-warning-strong-hover":js("warning-40"),"bg-info":js("info-100"),"bg-info-hover":js("info-95"),"bg-info-strong":js("info-50"),"bg-info-strong-hover":js("info-40"),"bg-error":js("error-100"),"bg-error-hover":js("error-95"),"bg-error-strong":js("error-50"),"bg-error-strong-hover":js("error-40"),"bg-inverse":js("neutral-20"),"bg-inverse-subtle":js("neutral-30"),"bg-inverse-subtler":js("neutral-50"),"bg-inverse-subtlest":js("neutral-60"),"bg-inverse-hover":js("neutral-40"),"bg-primary":js("primary-50"),"bg-primary-subtle":js("primary-60"),"bg-primary-subtler":js("primary-95"),"bg-primary-subtlest":js("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":js("primary-40"),"bg-primary-subtlest-hover":js("primary-90"),"bg-primary-subtlest-selected":js("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:js("primary-50"),"hyperlink-hover":js("primary-40"),"hyperlink-visited":js("primary-40"),"hyperlink-inverse":js("primary-inverse"),"focus-ring":js("black"),"focus-ring-inverse":js("white")},Os={text:js("neutral-100"),"text-subtle":js("neutral-80"),"text-subtler":js("neutral-60"),"text-subtlest":js("neutral-50"),"text-primary":js("primary-60"),"text-hover":js("primary-70"),"text-selected":js("primary-60"),"text-selected-hover":js("primary-70"),"text-disabled":js("neutral-60"),"text-disabled-subtle":js("neutral-50"),"text-disabled-subtlest":js("neutral-30"),"text-selected-disabled":js("neutral-90"),"text-success":js("success-70"),"text-warning":js("warning-70"),"text-error":js("error-70"),"text-info":js("info-70"),"text-inverse":js("black"),icon:js("neutral-60"),"icon-subtle":js("neutral-50"),"icon-strongest":js("neutral-90"),"icon-primary":js("primary-60"),"icon-primary-subtle":js("primary-50"),"icon-primary-subtlest":js("primary-40"),"icon-hover":js("primary-70"),"icon-selected":js("primary-60"),"icon-selected-hover":js("primary-70"),"icon-disabled":js("neutral-60"),"icon-disabled-subtle":js("neutral-50"),"icon-selected-disabled":js("neutral-50"),"icon-success":js("success-60"),"icon-warning":js("warning-50"),"icon-error":js("error-60"),"icon-error-strong":js("error-70"),"icon-info":js("info-60"),"icon-inverse":js("black"),"icon-primary-inverse":js("primary-inverse"),border:js("neutral-20"),"border-strong":js("neutral-40"),"border-stronger":js("neutral-60"),"border-primary":js("primary-60"),"border-primary-subtle":js("primary-50"),"border-hover":js("primary-20"),"border-hover-strong":js("primary-50"),"border-selected":js("primary-60"),"border-selected-subtle":js("primary-40"),"border-selected-subtlest":js("primary-20"),"border-selected-hover":js("primary-70"),"border-focus":js("primary-50"),"border-focus-strong":js("primary-60"),"border-disabled":js("neutral-20"),"border-selected-disabled":js("neutral-40"),"border-success":js("success-50"),"border-warning":js("warning-50"),"border-error":js("error-50"),"border-error-focus":js("error-50"),"border-error-focus-strong":js("error-70"),"border-error-strong":js("error-70"),"border-info":js("info-50"),bg:js("black"),"bg-strong":js("neutral-10"),"bg-stronger":js("neutral-20"),"bg-strongest":js("neutral-20"),"bg-hover":js("primary-20"),"bg-hover-strong":js("primary-20"),"bg-hover-subtle":js("primary-10"),"bg-hover-neutral":js("neutral-10"),"bg-hover-neutral-strong":js("neutral-20"),"bg-selected":js("primary-20"),"bg-selected-hover":js("primary-20"),"bg-selected-strong":js("primary-20"),"bg-selected-stronger":js("primary-40"),"bg-selected-strongest":js("primary-60"),"bg-selected-strongest-hover":js("primary-70"),"bg-disabled":js("neutral-20"),"bg-selected-disabled":js("neutral-20"),"bg-selected-stronger-disabled":js("neutral-40"),"bg-success":js("success-10"),"bg-success-hover":js("success-20"),"bg-success-strong":js("success-60"),"bg-success-strong-hover":js("success-70"),"bg-warning":js("warning-10"),"bg-warning-hover":js("warning-20"),"bg-warning-strong":js("warning-60"),"bg-warning-strong-hover":js("warning-70"),"bg-info":js("info-10"),"bg-info-hover":js("info-20"),"bg-info-strong":js("info-60"),"bg-info-strong-hover":js("info-70"),"bg-error":js("error-10"),"bg-error-hover":js("error-20"),"bg-error-strong":js("error-60"),"bg-error-strong-hover":js("error-70"),"bg-inverse":js("neutral-90"),"bg-inverse-subtle":js("neutral-80"),"bg-inverse-subtler":js("neutral-60"),"bg-inverse-subtlest":js("neutral-50"),"bg-inverse-hover":js("neutral-70"),"bg-primary":js("primary-60"),"bg-primary-subtle":js("primary-50"),"bg-primary-subtler":js("primary-20"),"bg-primary-subtlest":js("primary-10"),"bg-available":"#185339","bg-primary-hover":js("primary-70"),"bg-primary-subtlest-hover":js("primary-20"),"bg-primary-subtlest-selected":js("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:js("primary-60"),"hyperlink-hover":js("primary-70"),"hyperlink-visited":js("primary-70"),"hyperlink-inverse":js("primary-inverse"),"focus-ring":js("primary-60"),"focus-ring-inverse":js("black")},Is={collections:{lifesg:Ds,bookingsg:Ds,rbs:Ds,mylegacy:Ds,ccube:Ds,oneservice:Ds,pa:Ts,a11yplayground:Fs,supportgowhere:Ds},defaultValue:"lifesg"},Ms={collections:{lifesg:Es,bookingsg:Es,rbs:Es,mylegacy:Es,ccube:Es,oneservice:Es,pa:Es,a11yplayground:Os,supportgowhere:Es},defaultValue:"lifesg"},_s=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=ds(i?Ms:Is,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?ls(o,e,s):o[e];return"function"==typeof l?l(t):l},As={text:_s("text"),"text-subtle":_s("text-subtle"),"text-subtler":_s("text-subtler"),"text-subtlest":_s("text-subtlest"),"text-primary":_s("text-primary"),"text-hover":_s("text-hover"),"text-selected":_s("text-selected"),"text-selected-hover":_s("text-selected-hover"),"text-disabled":_s("text-disabled"),"text-disabled-subtle":_s("text-disabled-subtle"),"text-disabled-subtlest":_s("text-disabled-subtlest"),"text-selected-disabled":_s("text-selected-disabled"),"text-success":_s("text-success"),"text-warning":_s("text-warning"),"text-error":_s("text-error"),"text-info":_s("text-info"),"text-inverse":_s("text-inverse"),icon:_s("icon"),"icon-subtle":_s("icon-subtle"),"icon-strongest":_s("icon-strongest"),"icon-primary":_s("icon-primary"),"icon-primary-subtle":_s("icon-primary-subtle"),"icon-primary-subtlest":_s("icon-primary-subtlest"),"icon-hover":_s("icon-hover"),"icon-selected":_s("icon-selected"),"icon-selected-hover":_s("icon-selected-hover"),"icon-disabled":_s("icon-disabled"),"icon-disabled-subtle":_s("icon-disabled-subtle"),"icon-selected-disabled":_s("icon-selected-disabled"),"icon-success":_s("icon-success"),"icon-warning":_s("icon-warning"),"icon-error":_s("icon-error"),"icon-error-strong":_s("icon-error-strong"),"icon-info":_s("icon-info"),"icon-inverse":_s("icon-inverse"),"icon-primary-inverse":_s("icon-primary-inverse"),border:_s("border"),"border-strong":_s("border-strong"),"border-stronger":_s("border-stronger"),"border-primary":_s("border-primary"),"border-primary-subtle":_s("border-primary-subtle"),"border-hover":_s("border-hover"),"border-hover-strong":_s("border-hover-strong"),"border-selected":_s("border-selected"),"border-selected-subtle":_s("border-selected-subtle"),"border-selected-subtlest":_s("border-selected-subtlest"),"border-selected-hover":_s("border-selected-hover"),"border-focus":_s("border-focus"),"border-focus-strong":_s("border-focus-strong"),"border-disabled":_s("border-disabled"),"border-selected-disabled":_s("border-selected-disabled"),"border-success":_s("border-success"),"border-warning":_s("border-warning"),"border-error":_s("border-error"),"border-error-focus":_s("border-error-focus"),"border-error-focus-strong":_s("border-error-focus-strong"),"border-error-strong":_s("border-error-strong"),"border-info":_s("border-info"),bg:_s("bg"),"bg-strong":_s("bg-strong"),"bg-stronger":_s("bg-stronger"),"bg-strongest":_s("bg-strongest"),"bg-hover":_s("bg-hover"),"bg-hover-strong":_s("bg-hover-strong"),"bg-hover-subtle":_s("bg-hover-subtle"),"bg-hover-neutral":_s("bg-hover-neutral"),"bg-hover-neutral-strong":_s("bg-hover-neutral-strong"),"bg-selected":_s("bg-selected"),"bg-selected-hover":_s("bg-selected-hover"),"bg-selected-strong":_s("bg-selected-strong"),"bg-selected-stronger":_s("bg-selected-stronger"),"bg-selected-strongest":_s("bg-selected-strongest"),"bg-selected-strongest-hover":_s("bg-selected-strongest-hover"),"bg-disabled":_s("bg-disabled"),"bg-selected-disabled":_s("bg-selected-disabled"),"bg-selected-stronger-disabled":_s("bg-selected-stronger-disabled"),"bg-success":_s("bg-success"),"bg-success-hover":_s("bg-success-hover"),"bg-success-strong":_s("bg-success-strong"),"bg-success-strong-hover":_s("bg-success-strong-hover"),"bg-warning":_s("bg-warning"),"bg-warning-hover":_s("bg-warning-hover"),"bg-warning-strong":_s("bg-warning-strong"),"bg-warning-strong-hover":_s("bg-warning-strong-hover"),"bg-info":_s("bg-info"),"bg-info-hover":_s("bg-info-hover"),"bg-info-strong":_s("bg-info-strong"),"bg-info-strong-hover":_s("bg-info-strong-hover"),"bg-error":_s("bg-error"),"bg-error-hover":_s("bg-error-hover"),"bg-error-strong":_s("bg-error-strong"),"bg-error-strong-hover":_s("bg-error-strong-hover"),"bg-inverse":_s("bg-inverse"),"bg-inverse-subtle":_s("bg-inverse-subtle"),"bg-inverse-subtler":_s("bg-inverse-subtler"),"bg-inverse-subtlest":_s("bg-inverse-subtlest"),"bg-inverse-hover":_s("bg-inverse-hover"),"bg-primary":_s("bg-primary"),"bg-primary-subtle":_s("bg-primary-subtle"),"bg-primary-subtler":_s("bg-primary-subtler"),"bg-primary-subtlest":_s("bg-primary-subtlest"),"bg-available":_s("bg-available"),"bg-primary-hover":_s("bg-primary-hover"),"bg-primary-subtlest-hover":_s("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":_s("bg-primary-subtlest-selected"),"overlay-strong":_s("overlay-strong"),"overlay-subtle":_s("overlay-subtle"),hyperlink:_s("hyperlink"),"hyperlink-hover":_s("hyperlink-hover"),"hyperlink-visited":_s("hyperlink-visited"),"hyperlink-inverse":_s("hyperlink-inverse"),"focus-ring":_s("focus-ring"),"focus-ring-inverse":_s("focus-ring-inverse")},Bs={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},d=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:fs["width-010"](t),c=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:As.border(t),f=fs.solid;return i.css`
            border: ${d} ${f} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},d=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:fs["width-010"](t),c=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:As.border(t),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return i.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Rs=e=>1===e.length&&"theme"in e[0],zs=e=>(...t)=>r=>{const n=Rs(t)?[]:t,i=Rs(t)?t[0]:r,o=i.theme;return(0,ds(Bs,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ps={solid:zs("solid"),"dashed-default":zs("dashed-default")},Ls={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Ns=e=>t=>{var r;const n=t.theme,i=ds(Ls,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?ls(i,e,n.overrides.breakpoint):i[e],o},Hs={"xxs-min":Ns("xxs-min"),"xxs-max":Ns("xxs-max"),"xs-min":Ns("xs-min"),"xs-max":Ns("xs-max"),"sm-min":Ns("sm-min"),"sm-max":Ns("sm-max"),"md-min":Ns("md-min"),"md-max":Ns("md-max"),"lg-min":Ns("lg-min"),"lg-max":Ns("lg-max"),"xl-min":Ns("xl-min"),"xl-max":Ns("xl-max"),"xxl-min":Ns("xxl-min"),"xxs-column":Ns("xxs-column"),"xs-column":Ns("xs-column"),"sm-column":Ns("sm-column"),"md-column":Ns("md-column"),"lg-column":Ns("lg-column"),"xl-column":Ns("xl-column"),"xxl-column":Ns("xxl-column"),"xxs-gutter":Ns("xxs-gutter"),"xs-gutter":Ns("xs-gutter"),"sm-gutter":Ns("sm-gutter"),"md-gutter":Ns("md-gutter"),"lg-gutter":Ns("lg-gutter"),"xl-gutter":Ns("xl-gutter"),"xxl-gutter":Ns("xxl-gutter"),"xxs-margin":Ns("xxs-margin"),"xs-margin":Ns("xs-margin"),"sm-margin":Ns("sm-margin"),"md-margin":Ns("md-margin"),"lg-margin":Ns("lg-margin"),"xl-margin":Ns("xl-margin"),"xxl-margin":Ns("xxl-margin")},Ws=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Hs["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Vs={MaxWidth:Ws("max-width"),MinWidth:Ws("min-width")},Ys={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Us=e=>t=>{var r;const n=t.theme,i=ds(Ys,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?ls(i,e,n.overrides.fontSpec):i[e]},Ks={"heading-size-xxl":Us("heading-size-xxl"),"heading-size-xl":Us("heading-size-xl"),"heading-size-lg":Us("heading-size-lg"),"heading-size-md":Us("heading-size-md"),"heading-size-sm":Us("heading-size-sm"),"heading-size-xs":Us("heading-size-xs"),"heading-lh-xxl":Us("heading-lh-xxl"),"heading-lh-xl":Us("heading-lh-xl"),"heading-lh-lg":Us("heading-lh-lg"),"heading-lh-md":Us("heading-lh-md"),"heading-lh-sm":Us("heading-lh-sm"),"heading-lh-xs":Us("heading-lh-xs"),"heading-ls-xxl":Us("heading-ls-xxl"),"heading-ls-xl":Us("heading-ls-xl"),"heading-ls-lg":Us("heading-ls-lg"),"heading-ls-md":Us("heading-ls-md"),"heading-ls-sm":Us("heading-ls-sm"),"heading-ls-xs":Us("heading-ls-xs"),"weight-light":Us("weight-light"),"weight-regular":Us("weight-regular"),"weight-semibold":Us("weight-semibold"),"weight-bold":Us("weight-bold"),"font-family":Us("font-family"),"body-size-baseline":Us("body-size-baseline"),"body-size-md":Us("body-size-md"),"body-size-sm":Us("body-size-sm"),"body-size-xs":Us("body-size-xs"),"body-lh-baseline":Us("body-lh-baseline"),"body-lh-md":Us("body-lh-md"),"body-lh-sm":Us("body-lh-sm"),"body-lh-xs":Us("body-lh-xs"),"body-ls-baseline":Us("body-ls-baseline"),"body-ls-md":Us("body-ls-md"),"body-ls-sm":Us("body-ls-sm"),"body-ls-xs":Us("body-ls-xs"),"form-label-size":Us("form-label-size"),"form-description-size":Us("form-description-size"),"form-label-lh":Us("form-label-lh"),"form-description-lh":Us("form-description-lh"),"form-label-ls":Us("form-label-ls"),"form-description-ls":Us("form-description-ls")},qs=(e,t,r,n,o)=>{const{disableLigatures:a}=o||{};return i.css`
        font-family: ${Us("font-family")};
        font-size: ${Us(e)};
        font-weight: ${Us(t)};
        line-height: ${Us(r)};
        letter-spacing: ${Us(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Xs=(e={})=>({"heading-xxl-light":qs("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":qs("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":qs("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":qs("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":qs("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":qs("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":qs("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":qs("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":qs("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":qs("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":qs("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":qs("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":qs("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":qs("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":qs("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":qs("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":qs("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":qs("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":qs("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":qs("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":qs("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":qs("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":qs("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":qs("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":qs("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":qs("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":qs("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":qs("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":qs("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":qs("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":qs("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":qs("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":qs("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":qs("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":qs("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":qs("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":qs("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":qs("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":qs("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":qs("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":qs("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":qs("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Gs=Xs({disableLigatures:!0}),Zs={collections:{default:Xs(),bookingsg:Gs,pa:Xs({disableLigatures:!0}),a11yplayground:Xs({disableLigatures:!0}),supportgowhere:Xs({disableLigatures:!0})},defaultValue:"default"},Qs=e=>t=>{var r;const n=t.theme,i=ds(Zs,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?ls(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},Js={"heading-xxl-light":Qs("heading-xxl-light"),"heading-xxl-regular":Qs("heading-xxl-regular"),"heading-xxl-semibold":Qs("heading-xxl-semibold"),"heading-xxl-bold":Qs("heading-xxl-bold"),"heading-xl-light":Qs("heading-xl-light"),"heading-xl-regular":Qs("heading-xl-regular"),"heading-xl-semibold":Qs("heading-xl-semibold"),"heading-xl-bold":Qs("heading-xl-bold"),"heading-lg-light":Qs("heading-lg-light"),"heading-lg-regular":Qs("heading-lg-regular"),"heading-lg-semibold":Qs("heading-lg-semibold"),"heading-lg-bold":Qs("heading-lg-bold"),"heading-md-light":Qs("heading-md-light"),"heading-md-regular":Qs("heading-md-regular"),"heading-md-semibold":Qs("heading-md-semibold"),"heading-md-bold":Qs("heading-md-bold"),"heading-sm-light":Qs("heading-sm-light"),"heading-sm-regular":Qs("heading-sm-regular"),"heading-sm-semibold":Qs("heading-sm-semibold"),"heading-sm-bold":Qs("heading-sm-bold"),"heading-xs-light":Qs("heading-xs-light"),"heading-xs-regular":Qs("heading-xs-regular"),"heading-xs-semibold":Qs("heading-xs-semibold"),"heading-xs-bold":Qs("heading-xs-bold"),"body-baseline-light":Qs("body-baseline-light"),"body-baseline-regular":Qs("body-baseline-regular"),"body-baseline-semibold":Qs("body-baseline-semibold"),"body-baseline-bold":Qs("body-baseline-bold"),"body-md-light":Qs("body-md-light"),"body-md-regular":Qs("body-md-regular"),"body-md-semibold":Qs("body-md-semibold"),"body-md-bold":Qs("body-md-bold"),"body-sm-light":Qs("body-sm-light"),"body-sm-regular":Qs("body-sm-regular"),"body-sm-semibold":Qs("body-sm-semibold"),"body-sm-bold":Qs("body-sm-bold"),"body-xs-light":Qs("body-xs-light"),"body-xs-regular":Qs("body-xs-regular"),"body-xs-semibold":Qs("body-xs-semibold"),"body-xs-bold":Qs("body-xs-bold"),"form-label":Qs("form-label"),"form-description":Qs("form-description")},el={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},tl=e=>t=>{var r;const n=t.theme,i=ds(el,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?ls(i,e,n.overrides.motion):i[e]},rl={"duration-150":tl("duration-150"),"duration-250":tl("duration-250"),"duration-350":tl("duration-350"),"duration-500":tl("duration-500"),"duration-800":tl("duration-800"),"duration-1000":tl("duration-1000"),"ease-default":tl("ease-default"),"ease-standard":tl("ease-standard"),"ease-entrance":tl("ease-entrance"),"ease-exit":tl("ease-exit")},nl={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},il=e=>t=>{var r;const n=t.theme,i=ds(nl,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${ls(i,e,n.overrides.radius)}px`:`${i[e]}px`},ol={none:il("none"),xs:il("xs"),sm:il("sm"),md:il("md"),lg:il("lg"),full:il("full")},al={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},sl=e=>t=>{var r;const n=t.theme,i=ds(al,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${ls(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ll={"spacing-0":sl("spacing-0"),"spacing-4":sl("spacing-4"),"spacing-8":sl("spacing-8"),"spacing-12":sl("spacing-12"),"spacing-16":sl("spacing-16"),"spacing-20":sl("spacing-20"),"spacing-24":sl("spacing-24"),"spacing-32":sl("spacing-32"),"spacing-40":sl("spacing-40"),"spacing-48":sl("spacing-48"),"spacing-64":sl("spacing-64"),"spacing-72":sl("spacing-72"),"layout-xs":sl("layout-xs"),"layout-sm":sl("layout-sm"),"layout-md":sl("layout-md"),"layout-lg":sl("layout-lg"),"layout-xl":sl("layout-xl"),"layout-xxl":sl("layout-xxl"),"layout-xxxl":sl("layout-xxxl")},dl=()=>"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",cl=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),ul=Object.assign(Object.assign({},As),{Primitive:ks}),fl=Object.assign(Object.assign({},Js),{Spec:Ks}),hl=rl,gl=Object.assign(Object.assign({},fs),{Util:Ps}),pl=ll,ml=ol,bl=Hs,vl=Vs,yl={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},xl={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},wl={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},$l={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Cl={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Sl={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},jl={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},kl={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Dl={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},El=Object.assign(Object.assign({},yl),{light:cl(yl,"light"),dark:cl(yl,"dark")}),Tl=Object.assign(Object.assign({},xl),{light:cl(xl,"light"),dark:cl(xl,"dark")}),Fl=Object.assign(Object.assign({},wl),{light:cl(wl,"light"),dark:cl(wl,"dark")}),Ol=Object.assign(Object.assign({},$l),{light:cl($l,"light"),dark:cl($l,"dark")}),Il=Object.assign(Object.assign({},Cl),{light:cl(Cl,"light"),dark:cl(Cl,"dark")}),Ml=Object.assign(Object.assign({},Sl),{light:cl(Sl,"light"),dark:cl(Sl,"dark")}),_l=Object.assign(Object.assign({},jl),{light:cl(jl,"light"),dark:cl(jl,"dark")}),Al=Object.assign(Object.assign({},kl),{light:cl(kl,"light"),dark:cl(kl,"dark")}),Bl=Object.assign(Object.assign({},Dl),{light:cl(Dl,"light"),dark:cl(Dl,"dark")}),Rl=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${pl["spacing-24"]};
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
                background-color: ${ul["bg-hover-neutral"]};
            `}
    }
`,zl=U.default.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=G(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(Rl,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),Pl=e=>i.css`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ll=(e,t,r=!1)=>{const n=`${e}-${t}`;return i.css`
        ${fl[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Nl=e=>{if(e)return i.css`
            ${Pl(e)}
        `},Hl=(e,t)=>i.css`
    ${Ll(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?i.css`
            display: block;
            ${Nl(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${Nl(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${ul.text};
`;exports.Typography=void 0,function(t){const r=(e,t,r)=>{const n=q.default(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Hl(t,e)}
        `;return n.displayName=`Typography.${r}`,n};t.HeadingXXL=r("h1","heading-xxl","HeadingXXL"),t.HeadingXL=r("h2","heading-xl","HeadingXL"),t.HeadingLG=r("h3","heading-lg","HeadingLG"),t.HeadingMD=r("h4","heading-md","HeadingMD"),t.HeadingSM=r("h5","heading-sm","HeadingSM"),t.HeadingXS=r("h6","heading-xs","HeadingXS");const n=(e,t)=>{const r=q.default.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Hl(e,t)}
        `;return r.displayName=`Typography.${t}`,r};t.BodyBL=n("body-baseline","BodyBL"),t.BodyMD=n("body-md","BodyMD"),t.BodySM=n("body-sm","BodySM"),t.BodyXS=n("body-xs","BodyXS");const o=(t,r)=>{const n=q.default.a`
            ${e=>i.css`
                ${Ll(t,e.weight||"regular")}
                color: ${ul.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${ul["text-hover"]};
                }
            `}
        `,o=t=>{var{external:r=!1,children:i}=t,o=G(t,["external","children"]);return e.jsxs(n,Object.assign({},o,{children:[i,r&&e.jsx(Wl,{})]}))};return o.displayName=`Typography.${r}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(exports.Typography||(exports.Typography={}));const Wl=q.default(o.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Vl=q.default.div`
    background-color: ${ul.bg} !important;
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${vl.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Yl=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Ul=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${hl["duration-250"]} ${hl["ease-standard"]};
`,Kl=q.default(exports.Typography.HeadingSM)`
    ${e=>Ul(e.$isCollapsed)}
`,ql=q.default(exports.Typography.HeadingXS)`
    ${e=>Ul(e.$isCollapsed)}
`,Xl=q.default(zl)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${hl["duration-250"]} ${hl["ease-default"]};
    margin: auto -1rem auto 0;
`,Gl=q.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ul["icon-primary"]};
`,Zl=q.default(Ei.div)`
    overflow: hidden;
`,Ql=q.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${vl.MaxWidth.lg} {
        padding-right: 0;
    }
`;const Jl=t.forwardRef((function(r,n){var{title:i,children:o,expanded:a,type:s="default",collapsible:l=!0}=r,d=G(r,["title","children","expanded","type","collapsible"]);const c=t.useRef(null),u=t.useContext(X),[f,h]=t.useState(!l||(null!=a?a:u)),[g,p]=t.useState(!1),m=d["data-testid"]||"accordion-item",b=Xe(),v=b.ref;t.useImperativeHandle(n,(()=>Object.assign(c.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{g&&h(!l||u)}),[u]),t.useEffect((()=>{g&&h(!!a)}),[a]),t.useEffect((()=>{p(!0)}),[]);const y={height:f?b.height:0},x=ci(y);return e.jsxs(Vl,{"data-testid":m,className:d.className,$isCollapsed:f,ref:c,children:[e.jsxs(Yl,{$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0,children:["string"!=typeof i?i:"small"===s?e.jsx(ql,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}):e.jsx(Kl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}),l&&e.jsx(Xl,{"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e.jsx(Gl,{})})]}),e.jsx(Zl,{style:g?x:y,$isCollapsed:f,"data-testid":`${m}-expandable-container`,children:e.jsx(Ql,{ref:v,id:"content-container",children:o})})]})})),ed=q.default.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,td=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,rd=q.default.div`
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
    animation: ${td} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,nd=q.default(rd)`
    animation-delay: -0.45s;
`,id=q.default(rd)`
    animation-delay: -0.3s;
`,od=q.default(rd)`
    animation-delay: -0.15s;
`,ad=({color:t,className:r,size:n})=>e.jsxs(ed,{className:r,$size:n,$color:t,"data-testid":"component-loading-spinner",children:[e.jsx(rd,{id:"inner1"}),e.jsx(nd,{id:"inner2"}),e.jsx(id,{id:"inner3"}),e.jsx(od,{id:"inner4"})]}),sd={Button:{"button-radius":ol.md,"button-default-colour-bg":As["bg-primary"],"button-default-colour-bg-hover":As["bg-primary-hover"],"button-default-colour-text":As["text-inverse"],"button-secondary-colour-border":As["border-primary"],"button-secondary-colour-text":As["text-primary"],"button-light-colour-text":As["text-primary"],"button-link-colour-text":As["text-primary"]}},ld={collections:{default:{Button:{"button-radius":ol.sm,"button-default-colour-bg":As["bg-primary"],"button-default-colour-bg-hover":As["bg-primary-hover"],"button-default-colour-text":As["text-inverse"],"button-secondary-colour-border":As["border-primary"],"button-secondary-colour-text":As["text-primary"],"button-light-colour-text":As["text-primary"],"button-link-colour-text":As["text-primary"]}},pa:{Button:{"button-radius":ol.full,"button-default-colour-bg":As["bg-primary"],"button-default-colour-bg-hover":As["bg-primary-hover"],"button-default-colour-text":As["text-inverse"],"button-secondary-colour-border":As["border-primary"],"button-secondary-colour-text":As["text-primary"],"button-light-colour-text":As["text-primary"],"button-link-colour-text":As["text-primary"]}},a11yplayground:sd},defaultValue:"default"},dd=(e,t)=>r=>{var n,i;const o=r.theme,a=ds(ld,null==o?void 0:o.componentScheme);return cd((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||a[e][t],r)},cd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},ud=dd("Button","button-radius"),fd=dd("Button","button-default-colour-bg"),hd=dd("Button","button-default-colour-bg-hover"),gd=dd("Button","button-default-colour-text"),pd=dd("Button","button-secondary-colour-border"),md=dd("Button","button-secondary-colour-text"),bd=dd("Button","button-light-colour-text"),vd=dd("Button","button-link-colour-text"),yd=q.default.button`
    padding: ${pl["spacing-8"]} ${pl["spacing-16"]};
    min-width: 4rem;
    border: ${gl["width-010"]} ${gl.solid} transparent;
    transition: all ${hl["duration-250"]} ${hl["ease-default"]};
    border-radius: ${ud};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return i.css`
                    background-color: ${ul.Primitive.white};
                    border-color: ${e.$buttonIsDanger?ul["border-error-strong"]:pd};

                    color: ${e.$buttonIsDanger?ul["text-error"]:md};

                    &:hover,
                    &:active {
                        background-color: ${ul["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${ul.bg};
                    border-color: ${ul.border};

                    color: ${e.$buttonIsDanger?ul["text-error"]:bd};

                    &:hover,
                    &:active {
                        background-color: ${ul["bg-hover-neutral"]};
                    }
                `;case"link":return i.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?ul["text-error"]:vd};
                    &:hover,
                    &:active {
                        background-color: ${ul["bg-hover-neutral"]};
                    }
                `;case"disabled":return i.css`
                    background-color: ${ul["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ul["text-disabled"]};
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?ul["bg-error-strong"]:fd};};

                    ${vl.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${gd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?ul["bg-error-strong-hover"]:hd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return i.css`
                    height: 2.5rem;
                    ${fl["body-md-semibold"]}

                    ${vl.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return i.css`
                    height: 4rem;
                    ${fl["heading-md-semibold"]}

                    ${vl.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return i.css`
                    height: 3rem;
                    ${fl["heading-xs-semibold"]}

                    ${vl.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,xd=q.default(ad)`
    margin-right: 0.5rem;
`,wd=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=G(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(yd,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},d,l,{children:[o&&e.jsx(xd,{}),e.jsx("span",{children:n})]}))};wd.displayName="Button.Default";const $d=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=G(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(yd,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},d,l,{children:[o&&e.jsx(xd,{}),e.jsx("span",{children:n})]}))};$d.displayName="Button.Small";const Cd=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=G(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:s};return e.jsxs(yd,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},d,l,{children:[o&&e.jsx(xd,{}),e.jsx("span",{children:n})]}))};Cd.displayName="Button.Large";const Sd={Default:U.default.forwardRef(wd),Small:U.default.forwardRef($d),Large:U.default.forwardRef(Cd)},jd=q.default.div`
    width: 100%;
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
`,kd=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${vl.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return i.css`
                ${vl.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Dd=q.default(exports.Typography.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${vl.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return i.css`
                ${vl.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Ed=q.default(Sd.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Td=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:a=!1,className:s})=>{const[l,d]=t.useState("expand-all"===o),c=e=>{e.preventDefault(),d((e=>!e))};return e.jsx(X.Provider,{value:l,children:e.jsxs(jd,{className:s,children:[n||i?e.jsxs(kd,{$showTitleInMobile:a,$hasExpandAll:i,children:[n&&e.jsx(Dd,{weight:"bold",$showInMobile:a,"data-testid":"accordion-title",children:n}),i&&e.jsx(Ed,{"data-testid":"accordion-expand-collapse-button",onClick:c,styleType:"link",type:"button",children:l?"Hide all":"Show all"})]}):null,r]})})}),{Item:Jl}),Fd=e=>{const{textSize:t}=e||{};return i.css`
        // Text styling
        ${t&&fl[`${t}-regular`]}

        strong {
            font-weight: ${fl.Spec["weight-semibold"]};
            ${t&&fl[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${fl.Spec["weight-semibold"]};
            ${t&&fl[`${t}-semibold`]}
            color: ${ul.hyperlink};
            text-decoration: none;

            svg {
                color: ${ul["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${ul["hyperlink-hover"]};

                svg {
                    color: ${ul["icon-hover"]};
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
    `},Od=q.default.div`
    padding: ${pl["spacing-8"]} ${pl["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=ul["bg-error"](e),r=ul["border-error"](e);break;case"success":t=ul["bg-success"](e),r=ul["border-success"](e);break;case"warning":default:t=ul["bg-warning"](e),r=ul["border-warning"](e);break;case"info":t=ul["bg-info"](e),r=ul["border-info"](e);break;case"description":t=ul["bg-strong"](e),r=ul["border-strong"](e)}return i.css`
            background: ${t};
            border-left: ${gl["width-020"]} ${gl.solid}
                ${r};
        `}}

    color: ${ul.text};
    ${e=>"small"===e.$sizeType?Fd({textSize:"body-sm"}):Fd({textSize:"body-md"})}
`,Id=q.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${pl["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ul["icon-error"](e);break;case"success":t=ul["icon-success"](e);break;case"warning":default:t=ul["icon-warning"](e);break;case"info":t=ul["icon-info"](e);break;case"description":t=ul["icon-subtle"](e)}return i.css`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Md=q.default(exports.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?i.css`
                ${fl["body-sm-semibold"]}
                margin-top: ${pl["spacing-4"]};
            `:i.css`
                ${fl["body-md-semibold"]}
                margin-top: ${pl["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${pl["spacing-4"]};
    }
`,_d=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ad=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i.css`
                margin-bottom: ${pl["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Bd=q.default.button`
    ${e=>"small"===e.$sizeType?i.css`
                ${fl["body-sm-semibold"]}
            `:i.css`
                ${fl["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${pl["spacing-4"]};
    margin-top: ${pl["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${ul["text-primary"]};
`,Rd=q.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hl["duration-350"]} ${hl["ease-standard"]};
`,zd=r=>{var{type:n,className:i,children:o,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:g=!1,customIcon:p,maxCollapsedHeight:m}=r,b=G(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:C}=Xe();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(j())},j=()=>!(!$||!m)&&$>m;return e.jsxs(Od,{className:i,$type:n,$sizeType:h,"data-testid":b["data-testid"],children:[g&&e.jsx(Id,{$sizeType:h,$type:n,children:(()=>{if(n&&p)return p;switch(n){case"success":return e.jsx(c.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(d.ICircleFillIcon,{});default:return null}})()}),e.jsxs(_d,{children:[e.jsxs(Ad,{$maxCollapsedHeight:j()?m:void 0,$showMore:v,$hasActionLink:!!u,children:[e.jsx("div",{ref:C,children:o}),u?e.jsxs(Md,Object.assign({"data-testid":"action-link",$type:n,$sizeType:h},u,{children:[u.children,f||e.jsx(a.ArrowRightIcon,{})]})):null]}),x&&e.jsxs(Bd,{$sizeType:h,$type:n,type:"button",onClick:()=>y(!v),children:["Show ",v?"less":"more",e.jsx(Rd,{$expanded:v})]})]})]})},Pd=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.06d657a0.js")}))).LottieSpinner}})))),Ld=r=>e.jsx(Hd,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(Nd,{}),children:e.jsx(Pd,{})})})),Nd=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),Hd=q.default.div`
    margin: 0 auto;
    padding: ${pl["spacing-32"]} ${pl["spacing-16"]};
`,Wd=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.fa992b1c.js")}))).LottieLoadingDots}})))),Vd=r=>e.jsx(Ud,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(Yd,{}),children:e.jsx(Wd,{})})})),Yd=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),Ud=q.default.div`
    margin: 0 auto;
`,Kd=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.130ff2b5.js")}))).LottieLoadingDotsSpinner}})))),qd=r=>{var{color:n}=r,o=G(r,["color"]);const a=i.useTheme(),s=n||ul["icon-primary"]({theme:a});return e.jsx(Gd,Object.assign({},o,{children:e.jsx(t.Suspense,{fallback:e.jsx(Xd,{}),children:e.jsx(Kd,{color:s})})}))},Xd=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),Gd=q.default.div`
    margin: 0 auto;
`;var Zd,Qd={exports:{}};Zd=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Jd=Qd.exports=Zd(U.default);const ec=q.default.div`
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    margin-bottom: ${pl["spacing-32"]};
`,tc=q.default(Ei.div)`
    overflow: hidden;
`,rc=q.default.div`
    height: max-content;
`,nc=q.default.div`
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};
`,ic=q.default.div`
    padding: ${pl["spacing-16"]} ${pl["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${vl.MaxWidth.sm} {
        padding: ${pl["spacing-16"]} ${pl["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return i.css`
                cursor: pointer;
            `}}
`,oc=q.default.div`
    ${fl["heading-sm-semibold"]}
    color: ${ul.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${pl["spacing-16"]};
`,ac=q.default.div`
    display: flex;
`,sc=q.default.span`
    display: flex;
    align-items: center;
    margin-right: ${pl["spacing-40"]};

    ${vl.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return i.css`
                    color: ${ul["icon-error"]};
                `;case"warning":return i.css`
                    color: ${ul["icon-warning"]};
                `}}}
`,lc=q.default(s.ExclamationCircleFillIcon)`
    height: ${fl.Spec["heading-size-sm"]};
    width: ${fl.Spec["heading-size-sm"]};
`,dc=q.default.div`
    display: flex;
    margin-left: auto;
    ${vl.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return i.css`
                margin-right: ${pl["spacing-40"]};
                ${vl.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${pl["spacing-16"]};
                }
            `}}
`,cc=q.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${pl["spacing-16"]};
    margin: -${pl["spacing-16"]};
    display: flex;
    align-items: center;

    ${vl.MaxWidth.sm} {
        margin: -${pl["spacing-16"]} -${pl["spacing-16"]} -${pl["spacing-16"]} 0;
        margin-left: auto;
    }
`,uc=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${hl["duration-250"]} ${hl["ease-default"]};
`,fc=q.default(f.ChevronDownIcon)`
    color: ${ul.icon};
    height: ${fl.Spec["heading-size-sm"]};
    width: ${fl.Spec["heading-size-sm"]};
`;var hc={exports:{}};hc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,a=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:f,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},j=v;j.l=C,j.i=$,j.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return j},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!j.u(t)||t,c=j.p(e),h=function(e,t){var i=j.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return j.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(p<y?p+7:p)-y;return h(n?b-x:b+(6-x),m);case s:case f:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=j.p(e),c="set"+(this.$u?"UTC":""),h=(r={},r[s]=c+"Date",r[f]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[j.p(e)]()},b.add=function(n,c){var f,h=this;n=Number(n);var g=j.p(c),p=function(e){var t=S(h);return j.w(t.date(t.date()+Math.round(e*n)),h)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(f={},f[o]=t,f[a]=r,f[i]=e,f)[g]||1,b=this.$d.getTime()+n*m;return j.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return j.s(o%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return s+1;case"MM":return j.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return j.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var g,p=this,m=j.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return j.m(p,b)};switch(m){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(y-v)/6048e5;break;case s:g=(y-v)/864e5;break;case a:g=y/r;break;case o:g=y/t;break;case i:g=y/e;break;default:g=y}return h?g:j.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return j.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return S.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var gc=Fi(hc.exports),pc={exports:{}};pc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],f=c&&c[0],h=c&&c[1];a[l]=h?{regex:f,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,g=a||(i||o?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var b=s||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(p,m,g,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,b,v,y,x)):new Date(p,m,g,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){a[1]=s[g-1];var p=r.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var mc=Fi(pc.exports),bc={exports:{}};bc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var vc=Fi(bc.exports),yc={exports:{}};yc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var xc=Fi(yc.exports),wc={exports:{}};wc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var $c,Cc,Sc=Fi(wc.exports),jc={exports:{}};jc.exports=($c={year:0,month:1,day:2,hour:3,minute:4,second:5},Cc={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Cc[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Cc[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=$c[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],f=r(c).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var kc,Dc=Fi(jc.exports);gc.extend(vc),gc.extend(Sc),gc.extend(xc),gc.extend(mc),gc.extend(Dc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=gc(t).startOf("week");return Ec(r).map((e=>Tc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Tc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(gc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+gc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=gc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?gc(n):void 0,i?gc(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(kc||(kc={}));const Ec=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Tc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Fc=[1,3,5,7,8,10,12],Oc=[4,6,9,11];var Ic,Mc,_c,Ac;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Fc.includes(o)?Math.min(i,31).toString():Oc.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=gc(e,r);return gc(t,r).diff(n,"minute")},e.toDayjs=e=>e?gc(e):gc(),e.addMinutesToTime=(e,t,r="HH:mm")=>gc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>gc(e).isSame(gc(t),r)}(Ic||(Ic={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!gc(e).isBefore(n,"day"))||!(!i||!gc(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(gc(e).isValid())return e}return""}}(Mc||(Mc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(_c||(_c={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(Ac||(Ac={}));function Bc(e){const r=t.useRef(null);return t.useLayoutEffect((()=>{r.current=e}),[e]),t.useCallback(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const Rc=(e,r,n="window",i)=>{const o=t.useRef();t.useEffect((()=>{o.current=r}),[r]),t.useEffect((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const r=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,r,i),()=>{null==t||t.removeEventListener(e,r,i)}}),[e,n])},zc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Pc=()=>{const[e,r]=t.useState(!1);return t.useEffect((()=>{r(!0)}),[]),e};function Lc({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(c,c)}}}}const Nc=e=>{const r=(e=>{const r=t.useRef(e),n=t.useRef();return t.useEffect((()=>{n.current=r.current,r.current=e}),[e]),n.current})(e);return r!==e},Hc=e=>{const[r,n]=t.useState(e),i=t.useRef(e);return[r,t.useCallback((e=>{i.current=e,n(e)}),[]),i]},Wc=q.default.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${pl["spacing-32"]} 0;

    ${vl.MaxWidth.xl} {
        margin: ${pl["spacing-24"]} 0;
    }

    ${vl.MaxWidth.lg} {
        margin: ${pl["spacing-16"]} 0;
    }
`,Vc=q.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${pl["spacing-8"]};
    font-size: ${fl.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${vl.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,Yc=q.default.div`
    width: ${pl["spacing-64"]};
    height: calc(1lh + ${pl["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",n=ul.bg(e);return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||n}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||n},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,i.css`
            ${vl.MaxWidth.lg} {
                ${t}
            }
        `}};
`,Uc=q.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Kc=q.default(h.ChevronRightIcon)`
    margin: ${pl["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${ul["icon-subtle"]};
`,qc=q.default(exports.Typography.BodyMD)`
    margin: ${pl["spacing-8"]} !important;
`,Xc=q.default(exports.Typography.LinkMD)`
    margin: ${pl["spacing-8"]} !important;
`,Gc=q.default(yd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Zc=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:d=!1}=t,c=G(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:a};return e.jsxs(Gc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},u,c,{children:[d?e.jsx(ad,{}):s,e.jsx("span",{children:n})]}))};Zc.displayName="ButtonWithIcon.Default";const Qc=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:d=!1}=t,c=G(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:a};return e.jsxs(Gc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},u,c,{children:[d?e.jsx(ad,{}):s,e.jsx("span",{children:n})]}))};Qc.displayName="ButtonWithIcon.Small";const Jc={Default:U.default.forwardRef(Zc),Small:U.default.forwardRef(Qc)},eu=q.default.div`
    --vertical-inset: ${pl["spacing-24"]};
    --horizontal-inset: ${pl["spacing-20"]};
    --header-bottom-spacing: ${pl["spacing-4"]};

    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${vl.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,tu=i.css`
    color: ${ul.icon};
    height: 1rem;
    width: 1rem;
`,ru=q.default(g.ChevronLeftIcon)`
    ${tu}
`,nu=q.default(h.ChevronRightIcon)`
    ${tu}
`,iu=q.default(f.ChevronDownIcon)`
    ${tu}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ou=q.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,au=q.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,su=q.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,lu=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ul.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return i.css`
                display: none;
            `}}
`,du=q.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,cu=q.default.div`
    display: flex;
`,uu=q.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${iu} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,fu=q.default.span`
    ${fl["body-md-regular"]}
    color: ${ul.text};
`,hu=q.default.div`
    display: flex;
`,gu=q.default(zl)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,pu=q.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,mu=q.default(Sd.Small)`
    flex: 1;
`,bu=q.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,vu=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${ml.md};
    margin: 0 0.5rem;
    transition: ${hl["duration-150"]} ${hl["ease-default"]};

    // default styles
    ${fl["body-md-regular"]}
    border-radius: ${ml.md};
    border: ${gl["width-010"]} ${gl.solid} transparent;
    background-clip: border-box;
    color: ${ul.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?i.css`
                cursor: pointer;
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?i.css`
                background: ${ul["bg-selected"]};
                border-color: ${ul["border-selected"]};
                color: ${ul["text-selected"]};
                font-weight: ${fl.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${ul["bg-selected-hover"]};
                        border-color: ${ul["border-selected-hover"]};
                        color: ${ul["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?i.css`
                color: ${ul["text-primary"]};
                font-weight: ${fl.Spec["weight-semibold"]};
            `:r?i.css`
                color: ${ul["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?i.css`
                &:hover {
                    background: ${ul["bg-selected-hover"]};
                    border-color: ${ul["border-selected-hover"]};
                    color: ${ul["text-selected-hover"]};
                    font-weight: ${fl.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${ul["bg-hover"]};
                color: ${ul["text-hover"]};
                font-weight: ${fl.Spec["weight-semibold"]};
            }
        `}}
`,yu=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const f=t.useMemo((()=>kc.generateMonths(gc(r))),[r]),h=t.useRef(new Array(f.length).fill(null)),[g,p]=t.useState(f.findIndex((e=>e.isSame(a,"month"))));t.useEffect((()=>{var e;null!==g&&(null===(e=h.current[g])||void 0===e||e.focus())}),[g,f]);const m=(e,t)=>{t||u(e)},b=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,r="end"===n&&i&&e.isBefore(i,"month")&&s;return!(!t&&!r)},v=e=>{const t=e.format("MMMM"),r=(n=e,!kc.isWithinRange(n,l?gc(l):void 0,d?gc(d):void 0,"month"));var n;const i=a.isSame(e,"month"),o=i?"selected-month":gc().isSame(e,"month")?"current-month":"default",s=a.isSame(e,"year")?i?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||b(e),interactive:!r||c,month:t,variant:o,tabIndex:s}};return f.length?e.jsx(bu,{onBlur:()=>{p(null)},children:f.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,month:a,tabIndex:s}=v(t);return e.jsx(vu,{ref:e=>h.current[r]=e,tabIndex:s,role:"button","aria-disabled":!i,"aria-selected":"selected-month"===o,$variant:o,$disabledDisplay:n,$interactive:i,onClick:()=>m(t,!i),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let i;const o=f.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),m(t,r);break;case"ArrowLeft":i=o-1;break;case"ArrowRight":i=o+1;break;case"ArrowUp":i=o-2;break;case"ArrowDown":i=o+2}void 0!==i&&i>=0&&i<f.length&&(e.preventDefault(),p(i))})(e,t,!i)},children:a},a)}))}):null},xu=q.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,wu=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${hl["duration-150"]} ${hl["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${fl["body-md-regular"]}
    border-radius: ${ml.md};
    border: ${gl["width-010"]} ${gl.solid} transparent;
    background-clip: border-box;
    color: ${ul.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?i.css`
                cursor: pointer;
            `:t?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?i.css`
                background: ${ul["bg-selected"]};
                border-color: ${ul["border-selected"]};
                color: ${ul["text-selected"]};
                font-weight: ${fl.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${ul["bg-selected-hover"]};
                        border-color: ${ul["border-selected-hover"]};
                        color: ${ul["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?i.css`
                color: ${ul["text-primary"]};
                font-weight: ${fl.Spec["weight-semibold"]};
            `:"other-decade"===e||r?i.css`
                color: ${ul["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?i.css`
                &:hover {
                    background: ${ul["bg-selected-hover"]};
                    border-color: ${ul["border-selected-hover"]};
                    color: ${ul["text-selected-hover"]};
                    font-weight: ${fl.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${ul["bg-hover"]};
                color: ${ul["text-hover"]};
                font-weight: ${fl.Spec["weight-semibold"]};
            }
        `}}
`,$u=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u,setCalendarDate:f})=>{const h=t.useMemo((()=>kc.generateDecadeOfYears(gc(r))),[r]),g=t.useRef(new Array(h.length).fill(null)),[p,m]=t.useState(r);t.useEffect((()=>{var e;if(null===p)return;const t=h.findIndex((e=>e.isSame(p,"year")));t>=0&&(null===(e=g.current[t])||void 0===e||e.focus())}),[p,h]);const b=(e,t)=>{t||u(e)},v=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,r="end"===n&&i&&e.isBefore(i,"year")&&s;return!(!t&&!r)},y=e=>{const t=h.indexOf(e),r=[0,11].includes(t),n=e.year(),i=(o=e,!kc.isWithinRange(o,l?gc(l):void 0,d?gc(d):void 0,"year"));var o;const s=r?"other-decade":a.isSame(e,"year")?"selected-year":gc().isSame(e,"year")?"current-year":"default",u=a.year()>=h[0].year()&&a.year()<=h[h.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:i||v(e),interactive:!i||c,year:n,variant:s,tabIndex:u}};return h.length?e.jsx(xu,{onBlur:()=>{m(null)},children:h.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,year:a,tabIndex:s}=y(t);return e.jsx(wu,{ref:e=>{g.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!i,"aria-selected":"selected-year"===o,$variant:o,$disabledDisplay:n,$interactive:!!i,onClick:()=>b(t,!i),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),b(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),f(n),m(n))})(e,t,!i)},children:a},a)}))}):null},Cu=U.default.forwardRef(((r,n)=>{var{children:i,initialCalendarDate:o,minDate:a,maxDate:s,currentFocus:l,selectedStartDate:d,selectedEndDate:c,selectWithinRange:u,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:g,withButton:p,doneButtonDisabled:m,onDismiss:b,showNavigationHeader:v=!0,getLeftArrowDate:y,getRightArrowDate:x,isLeftArrowDisabled:w,isRightArrowDisabled:$,getMonthHeaderLabel:C,getYearHeaderLabel:S,isFocusable:j=!1}=r,k=G(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[D,E]=t.useState(Ic.toDayjs(o)),[T,F]=t.useState(Ic.toDayjs(o)),[O,I]=t.useState("default"),M=t.useRef(null),_=t.useRef(null),A=t.useRef(null),B=t.useRef(null);t.useImperativeHandle(n,(()=>({defaultView(){I("default")},resetView(){const e=Ic.toDayjs(o);E(e),F(e),I("default")},setCalendarDate(e){const t=Ic.toDayjs(e);E(t),F(t)}}))),t.useEffect((()=>{const e=Ic.toDayjs(o);E(e),F(e)}),[o]),t.useEffect((()=>{Y(T)}),[T]);const R=()=>{var e;"month-options"!==O?(I("month-options"),null===(e=A.current)||void 0===e||e.focus()):(I("default"),E(T))},z=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),R(),null===(t=B.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?D.subtract(1,"month"):D.add(1,"month");if(!kc.isWithinRange(t,a?gc(a):void 0,s?gc(s):void 0,"month"))return;E(t),"default"===O&&F(t)}},P=()=>{"default"!==O?(I("default"),E(T)):I("year-options")},L=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),P()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===O?"ArrowUp"===e.key?D.subtract(10,"year"):D.add(10,"year"):"ArrowUp"===e.key?D.subtract(1,"year"):D.add(1,"year"),!kc.isWithinRange(t,a?gc(a):void 0,s?gc(s):void 0,"year"))return;E(t),"default"===O&&F(t)}},N=()=>{var e;null===(e=A.current)||void 0===e||e.focus();const t=y?y(D):D.subtract(1,"month");switch(O){case"default":F(t),E(t);break;case"month-options":E((e=>e.subtract(1,"year")));break;case"year-options":E((e=>e.subtract(10,"year")))}},H=()=>{var e;null===(e=A.current)||void 0===e||e.focus();const t=x?x(D):D.add(1,"month");switch(O){case"default":F(t),E(t);break;case"month-options":E((e=>e.add(1,"year")));break;case"year-options":E((e=>e.add(10,"year")))}},W=e=>{E(e),F(e),p||I("default")},V=()=>{const e=Ic.toDayjs(o);E(e),F(e),"default"===O?U("reset"):I("default")},Y=e=>{g&&g(e)},U=e=>{b&&b(e)},K=()=>{if(!a||h)return!1;const e=gc(a);return"month-options"===O?!kc.isPreviousYearWithinRange(D,e):"year-options"===O?!kc.isPreviousDecadeWithinRange(D,e):w?w(D):!kc.isPreviousMonthWithinRange(D,e)},q=()=>{if(!s||h)return!1;const e=gc(s);return"month-options"===O?!kc.isNextYearWithinRange(D,e):"year-options"===O?!kc.isNextDecadeWithinRange(D,e):$?$(D):!kc.isNextMonthWithinRange(D,e)},X=()=>{const t=C?C(D):D.format("MMM"),r=gc(t,"MMM").format("MMMM"),n=(()=>{if("year-options"===O){const{beginDecade:e,endDecade:t}=kc.getStartEndDecade(D);return`${e} to ${t}`}return S?S(D):D.format("YYYY")})(),i={"month-options":`${n}, Close month selection`,"year-options":`${n}, Close year selection`,default:`${n}, Select year`};return e.jsxs(e.Fragment,{children:[e.jsxs(uu,{"aria-label":`${r}, Select month`,type:"button",$expanded:"month-options"===O,$visible:"default"===O,id:"month-dropdown",onClick:R,onKeyDown:z,tabIndex:j?0:-1,children:[e.jsx(fu,{children:t}),e.jsx(iu,{})]}),e.jsxs(uu,{ref:B,"aria-label":i[O],type:"button",$expanded:"default"!==O,id:"year-dropdown",onClick:P,onKeyDown:L,tabIndex:j?0:-1,children:[e.jsx(fu,{children:n}),e.jsx(iu,{})]})]})},Z=()=>{switch(O){case"month-options":return e.jsx(yu,{calendarDate:D,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:d,selectedEndDate:c,viewCalendarDate:T,isNewSelection:!!u,onMonthSelect:W,allowDisabledSelection:h});case"year-options":return e.jsx($u,{setCalendarDate:E,calendarDate:D,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:d,selectedEndDate:c,viewCalendarDate:T,isNewSelection:!!u,onYearSelect:W,allowDisabledSelection:h});default:return null}};return e.jsxs(ou,Object.assign({ref:A,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":T.format("MMMM, YYYY"),role:"group"},k,{children:[v&&(()=>{const t={"month-options":"year","year-options":"decade",default:"month"}[O];return e.jsxs(du,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e.jsx(cu,{children:X()}),e.jsxs(hu,{children:[e.jsx(gu,{"aria-label":`Previous ${t}`,"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,focusOutline:"browser",onClick:N,tabIndex:j?0:-1,children:e.jsx(ru,{})}),e.jsx(gu,{"aria-label":`Next ${t}`,"data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,focusOutline:"browser",onClick:H,tabIndex:j?0:-1,children:e.jsx(nu,{})})]})]})})(),e.jsx(au,{children:(()=>{const t="function"==typeof i?i({calendarDate:T,currentView:O}):i;if(f)return e.jsxs(e.Fragment,{children:["default"===O&&t,Z()]});{const r="default"===O;return e.jsxs(e.Fragment,{children:[e.jsx(su,{inert:r?void 0:"",children:t}),e.jsx(lu,{$visible:!r,children:Z()})]})}})()}),(()=>{if(!p)return;const t=!!("default"===O)&&m;return e.jsxs(pu,{children:[e.jsx(mu,{ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:V,children:"Cancel"}),e.jsx(mu,{"data-testid":"done-button",ref:M,type:"button",onClick:()=>{t||(E(T),"default"===O?U("confirmed"):I("default"))},disabled:t,children:"Done"})]})})()]}))})),Su=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ju=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${fl["body-sm-semibold"]};
    color: ${ul.text};
`,ku=q.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Du=e=>{let t=ul.bg,r="transparent";switch(e.$type){case"hover-subtle":t=ul["bg-hover"],r=ul["bg-hover"];break;case"hover":t=ul["bg-hover-strong"],r=ul["bg-hover-strong"];break;case"hover-outline":t=ul["bg-hover-subtle"],r=ul["border-hover"];break;case"selected-outline":t=ul["bg-selected"],r=ul["border-selected"];break;case"selected-outline-subtle":t=ul["bg-selected"],r=ul["border-selected-subtle"];break;case"selected-hover":t=ul["bg-selected-hover"];break;case"selected-hover-outline":t=ul["bg-selected-hover"],r=ul["border-selected-hover"]}return{color:t,borderColor:r}},Eu=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Tu=q.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${hl["duration-150"]} ${hl["ease-default"]};
    border: ${gl["width-010"]} ${gl.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Du(e);return i.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Fu=q.default(Tu)`
    left: 0;
`,Ou=q.default(Tu)`
    right: 0;
`,Iu=q.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${hl["duration-150"]} ${hl["ease-default"]};

    border: ${gl["width-010"]} ${gl.solid} transparent;
    border-radius: ${ml.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Du(e);return i.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Mu=q.default(Iu)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,_u=q.default(Iu)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Au=q.default.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Bu=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${fl["body-md-regular"]}
    transition: ${hl["duration-150"]} ${hl["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?i.css`
                    visibility: hidden;
                `:i.css`
                color: ${ul["text-disabled-subtlest"]};
            `;switch(r){case"selected":return i.css`
                    font-weight: ${fl.Spec["weight-semibold"]};
                    color: ${ul["text-selected"]};
                `;case"selected-hover":return i.css`
                    font-weight: ${fl.Spec["weight-semibold"]};
                    color: ${ul["text-selected-hover"]};
                `;case"current":return i.css`
                    font-weight: ${fl.Spec["weight-semibold"]};
                    color: ${ul["text-primary"]};
                `;case"hover":return i.css`
                    font-weight: ${fl.Spec["weight-semibold"]};
                    color: ${ul["text-hover"]};
                `;case"unavailable":return i.css`
                    color: ${ul["text-disabled-subtlest"]};
                `;case"hidden":return i.css`
                    visibility: hidden;
                `;default:return i.css`
                    color: ${ul.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Ru=q.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,zu=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:o,labelType:a,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:f,onFocus:h,onHoverEnd:g,onKeyDown:p,tabIndex:m=-1,role:b="button",focusDate:v})=>{const y=gc().isSame(c,"day"),x=`${c.format("D MMMM YYYY dddd")}, ${s?"Unavailable":"Available"}`,w=!!v&&v.isSame(c,"day"),$=t.useRef(null);t.useEffect((()=>{var e;w&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[w]);return e.jsxs(Eu,{children:[e.jsx(Fu,{$type:r}),e.jsx(Mu,{$type:i}),e.jsx(Ou,{$type:n}),e.jsx(_u,{$type:o}),e.jsx(Au,{$interactive:l,children:e.jsxs(Bu,{ref:$,tabIndex:m,role:b,"aria-label":x,"aria-disabled":!l,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:s,$interactive:l,onClick:()=>{u(c)},onKeyDown:e=>{p&&p(e)},onMouseEnter:()=>{f(c)},onMouseLeave:()=>{g&&g(c)},onFocus:()=>{h&&h(c)},children:[c.date(),d&&y&&e.jsx(Ru,{$disabled:s})]})})]})},Pu=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:f,showActiveMonthDaysOnly:h,onSelect:g,onHover:p,onFocus:m,setFocusCell:b,tabIndex:v=-1})=>{const y=kc.isDisabledDay(t,c,l,d),x=!y||u,w=()=>{g(t,!x)},$=()=>{const e=gc(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,d,c;return"start"===o&&i&&t&&(n&&r?(d=a,c=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(d=n,c=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{p(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.add(1,"month"),PageDown:()=>e.shiftKey?t.subtract(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:gc(s),tabIndex:v};return e.jsx(zu,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(gc().isSame(t,"day")&&!y)e.labelType="current";else if(f){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&d?(t.isBetween(l,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};gc.extend(vc);const Lu=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:d,minDate:c,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h,setCalendarDate:g})=>{const p=t.useRef(null);t.useEffect((()=>{if(p.current){const e=p.current;p.current=null,w(e)}}),[r]);const m=t.useCallback((()=>o&&gc(o).isSame(r,"month")?gc(o):a&&gc(a).isSame(r,"month")?gc(a):gc().isSame(r,"month")?gc():c&&r.isSame(gc(c),"month")?gc(c):gc(r).startOf("month")),[o,r,a,c]),b=e=>{const t=gc(e);if(kc.isWithinRange(t,c?gc(c):void 0,u?gc(u):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(p.current=e);w(e)}},v=t.useMemo((()=>kc.generateDays(r)),[r]),y=t.useMemo((()=>m()),[m]),[x,w]=t.useState(""),[$,C]=t.useState(""),S=(e,t)=>{t&&!f||s(e)},j=(e,t)=>{t&&!f||(C(e),l(e))},k=e=>{C(e),l(e)},D=()=>{C(""),l("")};return e.jsxs(Su,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(w(""),C(""),l(""))},children:[v[0].map(((t,r)=>e.jsx(ju,{"aria-hidden":!0,children:gc(t).format("ddd")},`week-day-${r}`))),v.map(((t,s)=>e.jsx(ku,{role:"row","aria-label":`Week ${s+1}`,onMouseLeave:D,children:t.map(((t,s)=>e.jsx(Pu,{date:t,calendarDate:r,startDate:o,endDate:a,hoverDate:$,focusDate:x,currentFocus:n,minDate:c,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:d,showActiveMonthDaysOnly:h,onSelect:S,onHover:j,onFocus:k,setFocusCell:b,tabIndex:t.isSame(y,"day")?0:-1},`day-${s}`)))},s)))]})},Nu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const f=kc.isDisabledDay(t,s,o,a),h=!f||l,{start:g,end:p}=n?kc.getFixedRangeStartEnd(Ic.toDayjs(n),d):{start:void 0,end:void 0},{start:m,end:b}=i?kc.getFixedRangeStartEnd(Ic.toDayjs(i),d):{start:void 0,end:void 0},v=!!n&&t.isBetween(g,p,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(g,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(p,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(zu,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":gc().isSame(t,"day")&&!f&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===g,r===p),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==g&&(e.circleLeft="selected-hover")),e})()))},Hu=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:d,numberOfDays:c})=>{const u=t.useMemo((()=>kc.generateDays(r)),[r]),[f,h]=t.useState(""),g=(e,t)=>{t&&!d||(o(e),e&&!gc(e).isSame(e,"month")&&h(""))},p=(e,t)=>{t&&!d||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Su,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(ju,{children:gc(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(ku,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(Nu,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:d,onSelect:g,onHover:p,numberOfDays:c},`day-${o}`)))},o)))]})},Wu=q.default.div`
    width: 100%;
    background: ${ul.bg};
`,Vu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const f=kc.isDisabledDay(t,s,o,a),h=!f||l,g={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(zu,Object.assign({},g,(()=>{const e={};r.month()!==t.month()?e.labelType=d?"hidden":"unavailable":gc().isSame(t,"day")&&!f&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};gc.extend(vc);const Yu=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c})=>{const u=t.useMemo((()=>kc.generateDays(r)),[r]),[f,h]=t.useState(""),g=(e,t)=>{t&&!d||o(e)},p=(e,t)=>{t&&!d||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Su,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(ju,{children:gc(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(ku,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(Vu,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:g,onHover:p},`day-${o}`)))},o)))]})},Uu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=kc.isDisabledDay(t,s,o,a),f=!u||l,{start:h,end:g}=kc.getWeekStartEnd(Ic.toDayjs(n)),{start:p,end:m}=kc.getWeekStartEnd(Ic.toDayjs(i)),b=n&&t.isBetween(h,g,"day","[]"),v=i&&t.isBetween(p,m,"day","[]"),y=b&&t.isSame(h)||v&&t.isSame(p),x=b&&t.isSame(g)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:f,currentDateIndicator:!0,onSelect:()=>{d(t,!f)},onHover:()=>{c(t.format("YYYY-MM-DD"),!f)}};return e.jsx(zu,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":gc().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Ku=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:d})=>{const c=t.useMemo((()=>kc.generateDays(r)),[r]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");o(r),e&&!gc(e).isSame(r,"month")&&f("")},g=(e,t)=>{t&&!d||(f(e),a(e))},p=()=>{f(""),a("")};return e.jsxs(Su,{"data-testid":"calendar-content",children:[c[0].map(((t,r)=>e.jsx(ju,{children:gc(t).format("ddd")},`week-day-${r}`))),c.map(((t,o)=>e.jsx(ku,{onMouseLeave:p,children:t.map(((t,o)=>e.jsx(Uu,{date:t,calendarDate:r,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:d,onSelect:h,onHover:g},`day-${o}`)))},o)))]})},qu=U.default.forwardRef((({disabledDates:r,onYearMonthDisplayChange:n,onSelect:i,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:f,maxDate:h,allowDisabledSelection:g,selectWithinRange:p=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1,isFocusable:y=!1},x)=>{const w=t.useRef(null),$=t.useRef(void 0);t.useImperativeHandle(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const C=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(r),j(r)},S=e=>{k(e)},j=e=>{i&&i(e)},k=e=>{o&&o(e)},D=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e.jsx(Wu,{children:e.jsx(Cu,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:f,maxDate:h,selectWithinRange:p,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;$.current&&$.current.isSame(e,"month")||(null===(t=w.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),D(e)),$.current=e},initialCalendarDate:m,isFocusable:y,children:({calendarDate:t})=>(t=>{var n;switch(u){case"week":return e.jsx(Ku,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,onSelect:C,onHover:S});case"fixed-range":return e.jsx(Hu,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:b});case"single":return e.jsx(Yu,{calendarDate:t,disabledDates:r,selectedDate:s,minDate:f,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:C,onHover:S});default:return e.jsx(Lu,{calendarDate:t,currentFocus:d,disabledDates:r,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:p,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:C,onHover:S,setCalendarDate:null===(n=w.current)||void 0===n?void 0:n.setCalendarDate})}})(t)})})})),Xu=U.default.forwardRef(((t,r)=>{var{width:n}=t,i=G(t,["width"]);return e.jsx(eu,{$width:n,"data-testid":"calendar-dropdown",children:e.jsx(qu,Object.assign({ref:r},i))})})),Gu=q.default.div`
    --vertical-inset: ${pl["spacing-24"]};
    --horizontal-inset: ${pl["spacing-32"]};
    --header-bottom-spacing: ${pl["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${gl["width-010"]} ${gl.solid} ${ul.border};
                border-radius: ${ml.lg};
                overflow: hidden;
            `}}
`,Zu=q.default.div`
    border-radius: ${ml.md};
    background: ${ul.bg};
    padding: ${pl["spacing-16"]} ${pl["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Qu=t=>{var{children:r}=t,n=G(t,["children"]);const i=n["data-testid"]||"card";return e.jsx(Zu,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e.jsx(exports.Typography.BodyBL,{children:r}):r}))},Ju=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ef=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>i.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,tf=i.css`
    animation: ${hl["duration-150"]} ${hl["ease-default"]} ${Ju};
    width: 100%;
    height: 100%;
    transition: color ${hl["duration-150"]} ${hl["ease-default"]};
`,rf=q.default(u.SquareIcon)`
    ${tf}
    color: ${ul["icon-primary-subtlest"]};
`,nf=q.default(u.SquareFillIcon)`
    ${tf}
    color: ${ul["icon-disabled-subtle"]};
`,of=q.default(u.SquareTickFillIcon)`
    ${tf}
    color: ${e=>e.$disabled?ul["icon-disabled-subtle"](e):ul["icon-selected"](e)};
`,af=q.default(u.MinusSquareFillIcon)`
    ${tf}
    color: ${e=>e.$disabled?ul["icon-disabled-subtle"](e):ul["icon-selected"](e)};
`,sf=q.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${rf},
        &:hover
        + ${of},
        &:hover
        + ${af} {
        color: ${e=>!e.disabled&&ul["icon-hover"](e)};
    }
`,lf=r=>{var{className:n,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:d="default"}=r,c=G(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=t.useRef(null);t.useEffect((()=>{u.current&&(u.current.indeterminate=null!=a&&a)}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(ef,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:d,$disabled:o,$unchecked:!(a||i||o),children:[e.jsx(sf,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:f,disabled:o},c)),a?e.jsx(af,{$disabled:o,"data-testid":"indeterminate"}):i?e.jsx(of,{$disabled:o,"data-testid":"checkmark"}):o?e.jsx(nf,{"data-testid":"empty-disabled-checkbox"}):e.jsx(rf,{$disabled:o,"data-testid":"empty-checkbox"})]})};var df=Ai,cf=/\s/;var uf=function(e){for(var t=e.length;t--&&cf.test(e.charAt(t)););return t},ff=/^\s+/;var hf=function(e){return e?e.slice(0,uf(e)+1).replace(ff,""):e},gf=no,pf=Zi,mf=/^[-+]0x[0-9a-f]+$/i,bf=/^0b[01]+$/i,vf=/^0o[0-7]+$/i,yf=parseInt;var xf=function(e){if("number"==typeof e)return e;if(pf(e))return NaN;if(gf(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=gf(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=hf(e);var r=bf.test(e);return r||vf.test(e)?yf(e.slice(2),r?2:8):mf.test(e)?NaN:+e},wf=no,$f=function(){return df.Date.now()},Cf=xf,Sf=Math.max,jf=Math.min;var kf=function(e,t,r){var n,i,o,a,s,l,d=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,d=t,a=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function p(){var e=$f();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?jf(r,o-(e-d)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=$f(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(p,t),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),a}return t=Cf(t)||0,wf(r)&&(c=!!r.leading,o=(u="maxWait"in r)?Sf(Cf(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m($f())},b},Df=Fi(kf),Ef=kf,Tf=no;var Ff,Of,If=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Tf(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ef(e,t,{leading:n,maxWait:t,trailing:i})},Mf=Fi(If),_f=new Map,Af=new WeakMap,Bf=0;function Rf(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Af.has(e)||(Bf+=1,Af.set(e,Bf.toString())),Af.get(e)):"0"}(e.root):e[t]}`)).toString()}function zf(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=Rf(e);let r=_f.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},_f.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),_f.delete(i))}}function Pf({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:d}={}){var c;const[u,f]=U.useState(null),h=U.useRef(),[g,p]=U.useState({inView:!!s,entry:void 0});h.current=d,U.useEffect((()=>{if(a||!u)return;let s;return s=zf(u,((e,t)=>{p({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,n,o,a,r,l,t]);const m=null==(c=g.entry)?void 0:c.target,b=U.useRef();u||!m||o||a||b.current===m||(b.current=m,p({inView:!!s,entry:void 0}));const v=[f,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}!function(e){e.AM="AM",e.PM="PM"}(Ff||(Ff={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,i]=e.split(":"),o=parseInt(n,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,d=0===l?s:r?s+(t-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=gc(e,n),o=gc(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Ff.AM};if(!t)return r;try{if("24hr"===e){const n=Hf(t,e);r.minute=Ac.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Ff.AM,r.hour=0===i?"12":Ac.padValue(i.toString())):(r.period=Ff.PM,r.hour=12===i?i.toString():Ac.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=Hf(t,e);r.hour=Ac.padValue(n),r.minute=Ac.padValue(i),r.period="am"===o.toLowerCase()?Ff.AM:Ff.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Ac.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Ac.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Ac.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Ac.padValue(n.toString()):13===n?Ac.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Ff.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Ac.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=Hf(e,t),o=Ac.padValue(r);let a=`${o}:${Ac.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),Wf(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Wf(e,n,t);o.push(r)}else{const t=Wf(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),Wf(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Wf(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(Of||(Of={}));const Lf=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Nf=e=>{const t=parseInt(e);return t>=0&&t<=59},Hf=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!Lf(r[0],t)||!Nf(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Lf(r[0],t)||!Nf(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Wf=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Vf=q.default.div`
    width: 100%;
`,Yf=q.default.div`
    ${fl["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${pl["spacing-8"]} ${pl["spacing-16"]};
    border-radius: ${ml.sm};
    color: ${ul["text-primary"]};
    border: ${gl["width-010"]} ${gl.solid};
    border-color: ${ul["border-primary"]};
    background-color: ${ul.bg};

    ${vl.MaxWidth.sm} {
        padding: ${pl["spacing-16"]};
    }

    ${e=>{if(e.$warn)return i.css`
                color: ${ul["text-error"]};
                border-color: ${ul["border-error"]};
            `}}
`,Uf=q.default(Yf)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Kf=q.default(Yf)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:o}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${o?ul["border-error"]:ul["border-primary-subtle"]} r g b / 50%);

            ${vl.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,qf=q.default.div`
    font-weight: ${fl.Spec["weight-bold"]};
    margin-left: ${pl["spacing-8"]};
    margin-right: ${pl["spacing-24"]};

    ${vl.MaxWidth.sm} {
        margin-right: ${pl["spacing-48"]};
    }
`,Xf=q.default.div`
    font-weight: ${fl.Spec["weight-semibold"]};
    margin-left: auto;
`,Gf=q.default(u.ClockIcon)`
    color: ${e=>e.$warn?ul["icon-error"]:ul["icon-primary"]};
`,Zf=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),Qf=e=>Math.max(Math.round(e/1e3),0),Jf=t=>r=>{switch(t){case"maintenance":{const t=r;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=r,n=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${bl["sm-max"]({theme:t})}px) 400px, (max-width: ${bl["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}};const{imgAttributeHelper:eh}=exports.ErrorDisplayHelper,th={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},rh={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},nh=Object.assign(Object.assign({},th),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),ih=Object.assign(Object.assign({},th),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),oh=(e,t)=>new Map([["400",{img:eh(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:eh(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:eh(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:eh(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:eh(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:eh(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:eh(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:eh(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:eh(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:eh(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:eh(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:eh(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:eh(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Jf("inactivity")}],["maintenance",{img:eh(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Jf("maintenance")}],["no-item-found",{img:eh(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:eh(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:eh(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:eh(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:eh(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:eh(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),ah=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,sh=q.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${vl.MaxWidth.sm} {
        width: 320px;
    }

    ${vl.MaxWidth.xs} {
        width: 288px;
    }

    ${vl.MaxWidth.xxs} {
        width: 240px;
    }
`,lh=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,dh=q.default(exports.Typography.HeadingMD)`
    margin: ${pl["spacing-32"]} 0 ${pl["spacing-16"]};
    text-align: center;
`,ch=q.default.div`
    color: ${ul.text};
    text-align: center;

    ${Fd({textSize:"body-baseline"})}
`,uh=q.default(Sd.Default)`
    margin: ${pl["spacing-32"]} auto 0;
    width: 21rem;

    ${vl.MaxWidth.sm} {
        width: 100%;
    }
`,fh=t=>{var{type:r,img:n,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:d,illustrationScheme:c}=t,u=G(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t,r)=>{switch(t){case"bookingsg":return oh(rh,r).get(e);case"ccube":return oh(nh,r).get(e);case"mylegacy":return oh(ih,r).get(e);default:return oh(th,r).get(e)}})(r,c||(f||El).resourceScheme,f),g=u["data-testid"]||"error-display",p=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==h?void 0:h.renderDescription)||void 0===e?void 0:e.call(h,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==h?void 0:h.renderDescription)||void 0===t?void 0:t.call(h,e):a||void 0}default:return a||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),n&&{img:n}),o&&{title:o}),p()&&{description:p()});return e.jsxs(ah,Object.assign({},u,{"data-testid":g,children:[e.jsx(sh,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!d&&(m.title||m.description?e.jsxs(lh,{children:[m.title&&("string"==typeof m.title?e.jsx(dh,{"data-testid":`${g}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e.jsx(ch,{"data-testid":`${g}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(uh,Object.assign({},t))})()]}))},hh=i.css`
    outline-offset: -1px;
    outline: ${gl["width-020"]} ${gl.solid} ${ul["border-focus"]};
`,gh=i.css`
    outline-color: ${ul["border-focus"]};
`,ph=i.css`
    outline-color: ${ul["border-disabled"]};
`,mh=i.css`
    outline-color: ${ul["border-error-focus"]};
`,bh=q.default.div`
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    background: ${ul.bg};

    :focus-within {
        ${hh}
    }
    ${e=>e.$focused&&hh}

    ${e=>e.$readOnly?i.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${gh}
                }
                ${e.$focused&&gh}
            `:e.$disabled?i.css`
                background: ${ul["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${ph}
                }
                ${e.$focused&&ph}
            `:e.$error?i.css`
                border-color: ${ul["border-error"]};

                :focus-within {
                    ${mh}
                }
                ${e.$focused&&mh}
            `:void 0}
`,vh=q.default(bh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${pl["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,yh=q.default.input`
    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}
    color: ${ul.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${ul["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ul["text-subtler"]};
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
`,xh=q.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${gl["width-010"]} ${gl.solid}
            ${ul["border-focus"]};
        border-radius: ${ml.sm};
    }
`,wh=ul.border,$h=ul.text,Ch=q.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${gl["width-010"]} ${gl.solid} ${wh};
    border-radius: ${ml.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Sh=q.default.div`
    flex: 1;
`,jh=q.default.table`
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
`,kh=q.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${gl["width-010"]} ${gl.solid} ${wh}`:"none"};
        }
    }
`,Dh=q.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,Eh=q.default(xh)`
    ${fl["body-md-semibold"]}
    cursor: pointer;
    color: ${ul["text-primary"]};
    transition: ${hl["duration-150"]} ${hl["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${ul["text-hover"]};
    }
`,Th=q.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&i.css`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${ml.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${gl["width-010"]} ${gl.solid} ${wh};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${gl["width-010"]} ${gl.solid} ${wh};
    border-radius: 0 0 ${ml.sm} ${ml.sm};
    background-color: ${ul["bg-selected"]};
    transition: all 300ms ease;
`,Fh=q.default.tr`
    background-color: ${ul["bg-stronger"]};
    height: 6rem;
    border-bottom: ${gl["width-010"]} ${gl.solid} ${wh};
`,Oh=q.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${$h};
    border-bottom: ${gl["width-010"]} ${gl.solid} ${wh};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,Ih=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${$h};
        margin-left: 0.5rem;
    }
`,Mh=q.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${ul["bg-selected"]};
            `:e.$alternating?i.css`
                ${ul["bg-strong"]};
            `:i.css`
                ${ul.bg};
            `};
    border-top: ${gl["width-010"]} ${gl.solid} ${wh};
    &:hover {
        ${e=>{if(e.$isSelectable)return i.css`
                    background-color: ${ul["bg-hover-strong"]};
                `}};
    }
`,_h=q.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${$h};
    border-bottom: ${gl["width-010"]} ${gl.solid} ${wh};
`,Ah=q.default(exports.Typography.BodyBL)`
    ${Pl(2)}
    text-overflow: ellipsis;
`,Bh=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Rh=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,zh=q.default(exports.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,Ph=q.default.td`
    padding: 4rem 0;
`,Lh=e=>"small"===e?2.5:3,Nh=q.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Lh(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Hh=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${pl["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Lh(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ml.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${ul["border-focus"]};
    }
`,Wh=q.default.button`
    ${Hh}
    cursor: pointer;
`,Vh=q.default.div`
    ${Hh}
`,Yh=i.keyframes`
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
`,Uh=q.default.div`
    position: relative;
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    background: ${ul.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${ul["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${ul["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?i.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:i.css`
                animation: ${Yh} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${ul["bg-disabled"]};

                ${Wh} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${ul.border};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${Wh} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?i.css`
                border-color: ${ul["border-error"]};

                :focus-within {
                    border-color: ${ul["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${ul["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;q.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${hl["duration-250"]} ${hl["ease-default"]};
    margin-left: ${pl["spacing-16"]};
`,q.default(f.ChevronDownIcon)`
    color: ${ul.icon};
`;const Kh=q.default.div`
    height: 1px;
    background: ${ul.border};
    margin: 0 ${pl["spacing-8"]};
`,qh=q.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${ul["text-disabled"]};
            `}}
`,Xh=q.default.div`
    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${Pl(1)}
                `}}
    overflow: hidden;
`,Gh=q.default(Xh)`
    color: ${ul["text-subtler"]};
`,Zh=({children:r,show:n,error:i,disabled:o,testId:a,onBlur:s,readOnly:l,className:d,variant:c})=>{const u=t.useRef(null);return Rc("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e.jsx(Nh,{className:d,$variant:c,children:e.jsx(Uh,{ref:u,error:i&&!n,disabled:o,$readOnly:l,expanded:n,"data-testid":a,children:r})})};var Qh;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Qh||(Qh={}));const Jh=()=>{const[e,r]=t.useState(void 0),n=p.useFloatingTree();return t.useEffect((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(Qh.Change,e),n.events.emit(Qh.Ready),()=>n.events.off(Qh.Change,e)}),[n]),e},eg=q.default.div`
    display: flex;
    flex-direction: column;
`,tg=e=>"right"===e?"bottom-end":"bottom-start",rg=({enabled:r,isOpen:n,onOpen:o,onClose:a,onDismiss:s,renderElement:l,renderDropdown:d,customZIndex:c,clickToToggle:u=!1,offset:f=0,alignment:h="left",fitAvailableHeight:g,rootNode:m})=>{var b;const v=i.useTheme(),y=bl["sm-max"]({theme:v}),x=t.useRef(null),w=t.useRef(null),{width:$=0}=Xe({targetRef:x,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:j,context:k}=p.useFloating({open:n,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!n?null==o||o():!e&&n&&(null==a||a(r))},whileElementsMounted:p.autoUpdate,placement:tg(h),middleware:[p.offset(f),p.flip(),p.shift({limiter:p.limitShift()}),p.size({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),C]}),D=Jh(),{isMounted:E,styles:T}=p.useTransitionStyles(k,{initial:{opacity:0},open:{opacity:1},duration:300}),F=p.useClick(k,{enabled:r,toggle:u}),O=p.useDismiss(k,{enabled:r}),{getReferenceProps:I,getFloatingProps:M}=p.useInteractions([F,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{x.current=e,S.setReference(e)}},I(),{children:l()})),E&&e.jsx(p.FloatingPortal,{root:m,children:e.jsx(p.FloatingFocusManager,{context:k,modal:!1,initialFocus:w,returnFocus:!1,children:e.jsx("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},j),{zIndex:null!==(b=null!=c?c:D)&&void 0!==b?b:50})},M(),{children:e.jsx(eg,{ref:w,style:Object.assign({},T),inert:T.opacity<1?"":void 0,children:d({elementWidth:$})})}))})})]})},ng=q.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ig=q.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${og}, ${dg} {
                    color: ${ul["text-subtler"]};
                }
            `}}
`,og=q.default(yh)`
    background: transparent;
    text-align: center;
`,ag=q.default(og)`
    width: 2rem;
    margin-right: ${pl["spacing-4"]};
`,sg=q.default(og)`
    width: 2.5rem;
`,lg=q.default(og)`
    width: 3rem;
    margin-left: ${pl["spacing-4"]};
`,dg=q.default.span`
    ${fl["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return i.css`
                color: ${ul.text};
            `}}
`,cg=q.default.div`
    ${fl["body-baseline-regular"]}
    background-color: ${ul.bg};
    color: ${ul["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i.css`
                background-color: ${ul["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?i.css`
                display: none;
            `:void 0}
`;gc.extend(mc);const ug=U.default.forwardRef((({disabled:r,readOnly:n,names:i,value:o,focused:a,hoverValue:s,placeholder:l,label:d,onChange:c,onFocus:u,onBlur:f,hideInputKeyboard:h},g)=>{const p=h?"none":"numeric",[m,b,v]=Hc(""),[y,x,w]=Hc(""),[$,C,S]=Hc(""),[j,k]=t.useState("none"),[D,E]=t.useState(!1),T=t.useRef(null),F=t.useRef(null),O=t.useRef(null),I=t.useRef(null),[M,_,A]=N(s);t.useEffect((()=>{var e;const[t="",r="",n=""]=N(o);b(t),x(r),C(n),t||r||n||!T.current||!T.current.contains(document.activeElement)||null===(e=F.current)||void 0===e||e.focus()}),[o]),t.useEffect((()=>{var e;a||k("none"),a&&(E(!0),T.current&&!T.current.contains(document.activeElement)&&(null===(e=F.current)||void 0===e||e.focus()))}),[a]),t.useImperativeHandle(g,(()=>({ref:T,resetPlaceholder(){E(!1)},resetInput(){const[e="",t="",r=""]=N(o);b(e),x(t),C(r)}})),[o]);const B=e=>{var t;e.preventDefault(),null===(t=F.current)||void 0===t||t.focus()},R=e=>{e.target.select();const t=e.target.name;k(t)},z=e=>{const[t,r,n]=i,o={[t]:v.current,[r]:w.current,[n]:S.current},a=e.target.name,s=o[a],l=a!==n?Ac.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case r:o[r]=l,x(l)}const d=`${o[n]}-${o[r]}-${o[t]}`,u=gc(d,"YYYY-MM-DD",!0).isValid(),h=!o[t]&&!o[r]&&!o[n];u&&s!==l&&c(d),T.current&&!T.current.contains(e.relatedTarget)&&(k("none"),null==f||f(h||u))},P=e=>{var t,r;if(s)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:m,month:y,year:$};switch(n){case i[0]:a.day=o,b(o),2===o.length&&(null===(t=O.current)||void 0===t||t.focus());break;case i[1]:a.month=o,x(o),2===o.length&&(null===(r=I.current)||void 0===r||r.focus());break;case i[2]:a.year=o,C(o)}if(!a.day&&!a.month&&!a.year)return void c("");const l=`${a.year}-${a.month}-${a.day}`;gc(l,"YYYY-MM-DD",!0).isValid()&&c(l)},L=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(j===i[1]&&0===y.length&&(null===(t=F.current)||void 0===t||t.focus()),j===i[2]&&0===$.length&&(null===(r=O.current)||void 0===r||r.focus()))};function N(e){if(e){const t=gc(new Date(e));return t.isValid()?[Ac.padValue(t.date().toString()),Ac.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(ng,{role:"group","aria-label":d,onClick:()=>{var e;r||n||(E(!0),T.current&&!T.current.contains(document.activeElement)&&(null===(e=F.current)||void 0===e||e.focus()))},onFocus:e=>{r||(E(!0),a||null==u||u(e))},children:[e.jsxs(ig,{ref:T,$hover:!!s,children:[e.jsx(ag,{ref:F,name:i[0],maxLength:2,value:null!=M?M:m,onFocus:R,onBlur:z,onChange:P,type:"text",inputMode:p,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[0]||n?"DD":""}),e.jsx(dg,{$inactive:0===m.length,children:"/"}),e.jsx(sg,{ref:O,name:i[1],maxLength:2,value:null!=_?_:y,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:p,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[1]||n?"MM":""}),e.jsx(dg,{$inactive:0===y.length,children:"/"}),e.jsx(lg,{ref:I,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:p,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[2]||n?"YYYY":""})]}),(()=>{if(!o&&!n&&l)return e.jsx(cg,{$hide:D,$disabled:r,onMouseDown:B,children:l})})()]})})),fg=q.default(vh)`
    height: 3rem;
`,hg=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:d,onChange:c,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:g=!0,readOnly:p,id:m,allowDisabledSelection:b,zIndex:v,dropdownRootNode:y}=r,x=G(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[w,$]=t.useState(Mc.sanitizeInput(d)),[C,S]=t.useState(Mc.sanitizeInput(d)),[j,k]=t.useState(void 0),[D,E]=t.useState(!1),[T,F]=t.useState(!1),O=t.useRef(null),I=t.useRef(null);t.useEffect((()=>{const e=Mc.sanitizeInput(d);$(e),S(e)}),[d]);const M=e=>{!b&&Mc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i})||(S(e),g||(P(e),$(e),e&&E(!1)))},_=e=>{var t;S(e),g||(P(e),$(e),e&&(null===(t=O.current)||void 0===t||t.focus(),E(!1)),j&&k(void 0))},A=()=>{p||o||(E(!0),T||(F(!0),u&&u()))},B=e=>{var t;T&&!D&&O.current&&!O.current.contains(e.relatedTarget)&&(null===(t=I.current)||void 0===t||t.resetInput(),S(w),F(!1),L())},R=e=>{k(e)},z=e=>{var t;switch(e){case"reset":S(w);break;case"confirmed":$(C),P(C)}null===(t=O.current)||void 0===t||t.focus(),E(!1)},P=e=>{c&&c(e)},L=()=>{f&&f()};return e.jsx(rg,{enabled:!p&&!o,isOpen:D,renderElement:()=>e.jsx(fg,Object.assign({tabIndex:-1,ref:O,onBlur:B,onFocus:A,$disabled:o,$readOnly:p,$focused:T,$error:s,id:m,"data-testid":x["data-testid"]},x,{children:e.jsx(ug,{ref:I,disabled:o,onChange:M,readOnly:p,focused:D,names:["start-day","start-month","start-year"],value:C,hoverValue:j,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(Xu,{variant:"single",initialCalendarDate:C,withButton:g,value:C,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:b,onHover:R,onSelect:_,onDismiss:z,onYearMonthDisplayChange:h,width:t}),onClose:()=>{var e;null===(e=I.current)||void 0===e||e.resetInput(),S(w),E(!1),F(!1),L()},onDismiss:()=>{var e,t;null===(e=I.current)||void 0===e||e.resetInput(),null===(t=O.current)||void 0===t||t.focus(),S(w),E(!1)},customZIndex:v,offset:16,rootNode:y})},gg=q.default.button`
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
                    background-color: ${ul.bg};
                    border: ${gl["width-010"]} ${gl.solid}
                        ${ul["border-primary"]};
                    color: ${ul["text-primary"]};

                    :hover {
                        background-color: ${ul["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${ul.bg};
                    border: ${gl["width-010"]} ${gl.solid}
                        ${ul.border};
                    color: ${ul["text-primary"]};

                    :hover {
                        background-color: ${ul["bg-hover-neutral"]};
                    }
                `;default:return i.css`
                    background-color: ${ul["bg-primary"]};
                    border: none;
                    color: ${ul["text-inverse"]};

                    :hover {
                        background-color: ${ul["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${ul["bg-disabled"]};
        border: ${gl["width-010"]} ${gl.solid}
            ${ul["border-disabled"]};
        color: ${ul["text-disabled"]};
        cursor: not-allowed;
    }
`,pg=U.default.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=G(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(gg,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),mg=q.default(pg)`
    margin: ${pl["spacing-8"]};
`,bg=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${ul["bg-strong"]};
    border-radius: ${ml.sm};
`,vg=q.default(Sd.Default)`
    color: ${e=>e.$enableDateClick?ul["text-primary"]:ul.text};
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
`,yg=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:a,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:d,onRightArrowClick:c,onCalendarDateSelect:u,dropdownRootNode:f}=r,h=G(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const g=Ic.toDayjs(n),p=Ic.toDayjs(n).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),m=Ic.isSame(n,gc())&&l?"Today":g.format(s?"ddd":"dddd"),[b,v]=t.useState(!1),y=e=>{u&&u(e),v(!b)},x=()=>{v(!1),d(n)},w=()=>{v(!1),c(n)};return e.jsx(rg,{enabled:!a,isOpen:b,renderElement:()=>e.jsxs(bg,Object.assign({},h,{children:[e.jsx(mg,{"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(kc.isDisabledDay(g,void 0,i)||Ic.isSame(g,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small",children:e.jsx(ru,{})}),e.jsx(vg,{onClick:()=>!!u&&!a&&v(!b),$enableDateClick:!!u&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||a,children:`${p}, ${m}`}),e.jsx(mg,{"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(kc.isDisabledDay(g,void 0,void 0,o)||Ic.isSame(g,o)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small",children:e.jsx(nu,{})})]})),renderDropdown:({elementWidth:t})=>e.jsx(Xu,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8,rootNode:f})},xg=q.default.div`
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
                        100% - ${fl.Spec["body-size-baseline"]} -
                            ${pl["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${pl["spacing-8"]};
                }
            `}}
`,wg=q.default.div`
    width: 100%; // Force next flex item to break to next line
`,$g=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Cg=q.default(u.ArrowRightIcon)`
    color: ${ul.icon};
    width: ${fl.Spec["body-size-baseline"]};
    height: ${fl.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${pl["spacing-8"]};
    align-self: center;
`,Sg=q.default.div`
    position: absolute;
    background: ${e=>e.$error?ul["border-error-focus-strong"]:ul["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${pl["spacing-8"]} - (${fl.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${hl["duration-350"]} ${hl["ease-standard"]},
        opacity ${hl["duration-350"]} ${hl["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return i.css`
                    opacity: 1;
                `;case"end":return i.css`
                    left: calc(50% + ${pl["spacing-16"]});
                    opacity: 1;
                `;case"none":return i.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return i.css`
                display: none;
            `}}
`,jg=({children:t,currentActive:r,error:n,className:i,wrap:o})=>{const[a,s]=t;return e.jsxs(xg,{className:i,$wrap:o,children:[e.jsx($g,{"data-id":"range-container-elem1-container",children:a}),e.jsx(Cg,{}),o&&e.jsx(wg,{}),e.jsx($g,{"data-id":"range-container-elem2-container",children:s}),e.jsx(Sg,{"data-id":"range-container-indicator",$position:r,$error:n,$wrap:o})]})},kg=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Dg=q.default(vh)`
    ${e=>e.$wrap&&i.css`
            padding: ${pl["spacing-12"]} ${pl["spacing-16"]};
        `}
`,Eg=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,Tg={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Fg=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:d,valueEnd:c,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:g,withButton:p=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w,dropdownRootNode:$}=r,C=G(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[S,j]=t.useState(),[k,D]=t.useState(void 0),[E,T]=t.useState(!1),[F,O]=t.useState(!1),I="week"===m,M="fixed-range"===m,[{selectedStart:_,selectedEnd:A,currentFocus:B,calendarOpen:R,isStartDirty:z,isEndDirty:P,focused:L},N]=(({initialState:e,reducers:r,name:n,debug:i})=>{const[o,a]=t.useReducer(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[o,Object.fromEntries(Object.keys(r).map((e=>[e,t=>{i&&kg(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Tg,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:I?"none":M?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),H=t.useRef(!1),W=t.useRef(null),V=t.useRef(null),Y=t.useRef(null),U=t.useRef(null),K=(({maxWidth:e,targetRef:r})=>{const[n,i]=t.useState(!1);return Xe({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),n})({maxWidth:320,targetRef:W});t.useEffect((()=>{N.resetRange({start:Mc.sanitizeInput(d),end:Mc.sanitizeInput(c)})}),[d,c]),t.useEffect((()=>{"start"===B?j(_):"end"===B&&j(A)}),[B]);const q=e=>{var t,r,n;"Enter"!==e.code||p||(_&&A?(N.done({start:_,end:A}),null==u||u(_,A)):(N.dismiss(),null===(t=W.current)||void 0===t||t.focus(),null===(r=Y.current)||void 0===r||r.resetPlaceholder(),null===(n=U.current)||void 0===n||n.resetPlaceholder()))},X=e=>{var t;if(de(e))return void(H.current=!0);if(N.changeStart(e),null===(t=V.current)||void 0===t||t.setCalendarDate(e),H.current=!1,!e)return void(p||A||!P||(N.resetRange({start:"",end:""}),null==u||u("","")));if(!A)return void N.focus("end");if(gc(e).isAfter(A,"day"))N.reselectEnd();else{if(P)return p?void 0:(N.done({start:e,end:A}),void(null==u||u(e,A)));N.focus("end")}},Z=e=>{var t,r;if(de(e))return void(H.current=!0);if(gc(e).isBefore(_,"day"))return N.changeStart(e),null===(t=V.current)||void 0===t||t.setCalendarDate(e),void N.reselectEnd();if(N.changeEnd(e),null===(r=V.current)||void 0===r||r.setCalendarDate(e),e){if(_)return p?void 0:(N.done({start:_,end:e}),void(null==u||u(_,e)));N.focus("start")}else p||_||!z||(N.resetRange({start:"",end:""}),null==u||u("",""))},Q=e=>{var t;if(de(e))return void(H.current=!0);if(N.changeStart(e),null===(t=V.current)||void 0===t||t.setCalendarDate(e),H.current=!1,!e)return void(p?N.changeEnd(""):(N.resetRange({start:"",end:""}),null==u||u("","")));const r=gc(e).format("YYYY-MM-DD"),n=gc(r).add(b-1,"day").format("YYYY-MM-DD");return N.changeStart(r),N.changeEnd(n),H.current=!1,p?void 0:(N.done({start:r,end:n}),void(null==u||u(r,n)))},J=()=>{v||o||L||(N.focus("start"),null==f||f())},ee=e=>{var t,r;L&&!R&&W.current&&W.current.contains(e.relatedTarget)&&(N.blur(),T(!1),O(!1),null===(t=Y.current)||void 0===t||t.resetPlaceholder(),null===(r=U.current)||void 0===r||r.resetPlaceholder(),null==h||h())},te=e=>t=>{t.stopPropagation(),v||(N.focus(e),re(),ne(),L||null==f||f())},re=()=>{if(I){const e=Ic.toDayjs(_).startOf("week").format("YYYY-MM-DD");T(!0),O(!0),j(e)}},ne=()=>{M&&(O(!0),j(_))},ie=e=>{var t;e&&!H.current||(N.resetStart(),null===(t=Y.current)||void 0===t||t.resetInput())},oe=e=>{var t;e&&!H.current||(N.resetEnd(),null===(t=U.current)||void 0===t||t.resetInput())},ae=e=>{switch(m){case"week":(e=>{const t=gc(e).startOf("week").format("YYYY-MM-DD"),r=gc(e).endOf("week").format("YYYY-MM-DD");if(N.changeStart(t),N.changeEnd(r),H.current=!1,!p)N.done({start:t,end:r}),null==u||u(t,r)})(e);break;case"fixed-range":Q(e);break;default:"start"===B?X(e):"end"===B&&Z(e)}},se=e=>{var t;switch(null===(t=W.current)||void 0===t||t.focus(),e){case"reset":N.cancel();break;case"confirmed":N.done({start:_,end:A}),null==u||u(_,A)}},le=e=>{D(e)},de=e=>!x&&e&&Mc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===B?k:void 0,end:"end"===B?k:void 0};break;case"week":if(!k)return;t={start:gc(k).startOf("week").format("YYYY-MM-DD"),end:gc(k).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!k)return;t={start:gc(k).format("YYYY-MM-DD"),end:gc(k).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(rg,{enabled:!v&&!o,isOpen:R,onClose:()=>{var e,t;N.blur(),T(!1),O(!1),null===(e=Y.current)||void 0===e||e.resetPlaceholder(),null===(t=U.current)||void 0===t||t.resetPlaceholder(),null==h||h()},onDismiss:()=>{var e,t,r;N.dismiss(),null===(e=W.current)||void 0===e||e.focus(),null===(t=Y.current)||void 0===t||t.resetPlaceholder(),null===(r=U.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e.jsx(Dg,Object.assign({ref:W,tabIndex:-1,onFocus:J,onBlur:ee,$focused:L,$disabled:o,$readOnly:v,$error:s,$wrap:K,id:y,"data-testid":C["data-testid"],onKeyDown:q},C,{children:e.jsxs(jg,{currentActive:B,wrap:K,error:s,children:[e.jsx(Eg,{$wrap:K,children:e.jsx(ug,{ref:Y,placeholder:"From",names:["start-day","start-month","start-year"],value:_,disabled:o,readOnly:E||v,focused:"start"===B,hoverValue:ce("start"),onChange:M?Q:X,onFocus:te("start"),onBlur:ie,hideInputKeyboard:l})}),e.jsx(Eg,{$wrap:K,children:e.jsx(ug,{ref:U,placeholder:"To",names:["end-day","end-month","end-year"],value:A,disabled:o,readOnly:F||v,focused:"end"===B,hoverValue:ce("end"),onChange:Z,onFocus:te("end"),onBlur:oe,hideInputKeyboard:l})})]})})),renderDropdown:({elementWidth:t})=>e.jsx(Xu,{ref:V,variant:m,initialCalendarDate:S,withButton:p,value:_,endValue:A,selectWithinRange:z||P,currentFocus:B,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:x,onSelect:ae,onDismiss:se,onHover:le,onYearMonthDisplayChange:g,numberOfDays:b,width:t}),customZIndex:w,offset:16,rootNode:$})},Og=q.default.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:a,$lgSpan:s,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:f,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Vs.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Vs.MaxWidth.lg} {
                grid-column: ${a||"auto"} / span ${s||1};
            }

            ${Vs.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${Vs.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${Vs.MaxWidth.xs} {
                grid-column: ${f||"auto"} / span ${h||1};
            }

            ${Vs.MaxWidth.xxs} {
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,Ig=U.default.forwardRef(((t,r)=>{const n=i.useTheme(),{xxlCols:o,xlCols:a,lgCols:s,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=t,f=G(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e.jsx(Og,Object.assign({ref:r},(()=>{const e=Hs["xxl-column"]({theme:n}),t=Hs["xl-column"]({theme:n}),r=Hs["lg-column"]({theme:n}),i=Hs["md-column"]({theme:n}),f=Hs["sm-column"]({theme:n}),g=Hs["xs-column"]({theme:n}),p=Hs["xxs-column"]({theme:n}),m=h(o||a||s||l||d||c||u,e,"xxl"),b=h(a||s||l||d||c||u,t,"xl"),v=h(s||l||d||c||u,r,"lg"),y=h(l||d||c||u,i,"md"),x=h(d||c||u,f,"sm"),w=h(c||u,g,"xs"),$=h(u,p,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),f))})),Mg={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},_g=e=>Object.keys(Mg).reduce(((t,r)=>{const n=Mg[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ag={MaxWidth:_g("max-width"),MinWidth:_g("min-width")},Bg=Mg,Rg=q.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Ag.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Ag.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,zg=U.default.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=G(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Rg,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=Pg(o||i||n),a=Pg(e),s=Pg(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Pg=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Lg=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||ul.border(e);const r=encodeURIComponent(t),n=e.$thickness||1,o=n+1;return i.css`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${o}" stroke-dasharray="4 4" /></svg>');
    `},Ng=q.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${Lg}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||ul.border};
                `}}}
`,Hg=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:d,mdCols:c,lgCols:u,xlCols:f,xxlCols:h,mobileCols:g,tabletCols:p,desktopCols:m}=t,b=G(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==g||void 0!==p||void 0!==m;switch(i){case"flex":return e.jsx(Ng,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e.jsx(zg,Object.assign({className:a,mobileCols:g,tabletCols:p,desktopCols:m},b,{children:e.jsx(Ng,{$thickness:r,$lineStyle:n,$color:o})})):e.jsx(Ig,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=d||t,n=c||r,i=u||n,o=f||i;return{xxlCols:h||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e.jsx(Ng,{$thickness:r,$lineStyle:n,$color:o})}))}},Wg=q.default.div`
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
`,Vg=q.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?ul["overlay-subtle"]:ul["overlay-strong"]};
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
`,Yg=({show:r=!1,rootId:n,onOverlayClick:i,children:o,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:d=!1,zIndex:c,id:u})=>{const[f,h]=t.useState(null),[g,m]=t.useState(),[b]=t.useState((()=>_c.generate())),v=p.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=o&&U.default.cloneElement(o,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",C=null!=c?c:g?99999:99998;(e=>{const r=p.useFloatingTree();t.useEffect((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Qh.Change,t)}),[r,e]),t.useEffect((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Qh.Change,t)};return null==r||r.events.on(Qh.Ready,t),()=>null==r?void 0:r.events.off(Qh.Ready,t)}),[r,e])})(C),t.useEffect((()=>(D(),h(j()),()=>{O(),T().length<1&&E("remove")})),[]),t.useEffect((()=>{if(r){const e=k();S(e),F();const t=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(t)}{O();const e=setTimeout((()=>{T().length<1&&E("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{y.current=e,m(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>T().length>0,D=()=>{if(!document.getElementById(Kg)){const e=document.createElement("style");e.id=Kg;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${qg} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${qg}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(qg);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(qg):document.body.classList.add(qg)},T=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},F=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},O=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},I=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||i&&d&&(e.preventDefault(),i())};return f?K.default.createPortal(e.jsx(Wg,{id:$,"data-testid":$,$show:r,$zIndex:C,children:o&&e.jsx(p.FloatingNode,{id:v,children:e.jsx(Vg,{"data-testid":"overlay-wrapper",$show:r,$stacked:g,$backgroundBlur:s,$disableTransition:l,onClick:I,children:w})})}),f):null},Ug=t=>e.jsx(p.FloatingTree,{children:e.jsx(Yg,Object.assign({},t))}),Kg="lifesg-ds-overlay-stylesheet",qg="lifesg-ds-overlay-open",Xg=q.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${ul.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${ul.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?i.css`
            right: 0;
            transition: all ${hl["duration-800"]} ${hl["ease-exit"]};
        `:i.css`
        right: -100%;
        transition: all ${hl["duration-800"]} ${hl["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${ml.md};
    border-bottom-left-radius: ${ml.md};
    overflow: hidden;

    ${vl.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${vl.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Gg=q.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${pl["spacing-16"]};
    padding: ${pl["spacing-32"]} ${pl["spacing-16"]}
        ${pl["spacing-16"]};
    background-color: ${ul.bg};
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};

    ${vl.MaxWidth.lg} {
        gap: ${pl["spacing-8"]};
        padding: ${pl["spacing-32"]} ${pl["spacing-20"]}
            ${pl["spacing-16"]};
    }
`,Zg=q.default(zl)`
    color: ${ul.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${ul["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Qg=q.default(exports.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Jg=q.default.div`
    flex: 1;
    overflow-y: auto;
`,ep=({className:t,progress:r,color:n,"data-testid":i})=>e.jsx(tp,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e.jsx("progress",{value:100*r,max:100})}),tp=q.default.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):ul["icon-primary-subtle"](e),i.css`
            border: ${gl["width-010"]} ${gl.solid} ${r};
            border-radius: ${ml.sm};

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
`,rp=q.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${vl.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,np=r=>{var{id:n="modal",show:i,animationFrom:o="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0}=r,f=G(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,g]=t.useState(),[p,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;g(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;g(e),m(window.visualViewport.offsetTop)}};return e.jsx(Ug,{"data-testid":`${n}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:c,id:n,rootId:l,zIndex:d,children:e.jsx(rp,Object.assign({show:i,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:p},f,{children:a}))})},ip=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ul.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${vl.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,op=q.default(zl)`
    position: absolute;
    top: var(--close-button-top-inset, ${pl["spacing-16"]});
    right: var(--close-button-right-inset, ${pl["spacing-16"]});
    padding: 0;
    color: ${ul.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${vl.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${pl["spacing-20"]});
    }
`,ap=t=>{var{id:r="modal-box",children:n,onClose:i,showCloseButton:o=!0}=t,a=G(t,["id","children","onClose","showCloseButton"]);return e.jsxs(ip,Object.assign({"data-testid":r},a,{onClick:e=>{e.stopPropagation()},children:[o&&e.jsx(op,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e.jsx(m.CrossIcon,{})}),n]}))},sp=Object.assign(np,{Box:ap}),lp=i.css`
    ${e=>`\n        ${vl.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${bl["sm-max"](e)}px)\n    `}
`,dp=i.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${bl["sm-max"](e)}px)\n    `}
`,cp=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>i.css`
            ${gl.Util["dashed-default"]({radius:ml.sm,thickness:gl["width-040"],colour:e.$disabled?ul["border-disabled"]:ul.border})}

            background-color: ${e.$disabled?ul["bg-disabled"]:ul.bg};
        `}
    height: 14.125rem;
`,up=q.default(Sd.Default)`
    width: fit-content;
    margin: 0 ${pl["spacing-20"]};

    :disabled {
        border-color: ${ul["border-strong"]};
    }
`,fp=q.default(pg)`
    position: absolute;
    top: ${pl["spacing-16"]};
    right: ${pl["spacing-16"]};

    :disabled {
        border-color: ${ul["border-strong"]};
    }
`,hp=q.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${pl["spacing-16"]}) * 2);
    height: 100%;
`,gp=q.default.div`
    background: ${ul["bg-primary-subtlest"]};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    margin: 0 ${pl["spacing-20"]};
    padding: ${pl["spacing-16"]};
    display: flex;
    gap: ${pl["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,pp=q.default(exports.Typography.BodySM)`
    margin-top: ${pl["spacing-16"]};
`,mp=q.default(sp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,bp=q.default.div`
    width: 100%;
    margin: auto;
    padding: ${pl["layout-xxl"]} ${pl["layout-sm"]};

    ${lp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,vp=q.default(sp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${pl["spacing-16"]};

    ${lp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${pl["spacing-8"]};
        --close-button-right-inset: ${pl["spacing-20"]};
    }
`,yp=q.default.h2`
    ${fl["body-baseline-semibold"]}
    color: ${ul.text};
    margin-bottom: ${pl["spacing-16"]};
    text-align: center;

    ${lp} {
        ${fl["body-md-semibold"]}
        margin: ${pl["spacing-12"]} 0;
    }
`,xp=q.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${ml.lg};
    overflow: hidden;

    ${lp} {
        border-radius: 0;
        flex: 1;
    }

    ${dp} {
        background: ${ul["bg-strong"]};
    }
`,wp=q.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ul["bg-stronger"]};
    margin: auto;

    ${lp} {
        aspect-ratio: 4/3;
    }
    ${vl.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${dp} {
        width: auto;
        height: 100%;
    }
`,$p=q.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ul["border-strong"]};
    pointer-events: none;

    ${lp} {
        width: calc(100% - ${pl["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Cp=q.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${pl["spacing-16"]};

    ${vl.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${pl["spacing-16"]} ${pl["spacing-24"]}
            ${pl["spacing-48"]};
        gap: ${pl["spacing-16"]};
    }

    ${dp} {
        flex-direction: row;
        margin: ${pl["spacing-16"]} ${pl["spacing-20"]};
    }
`,Sp=q.default(Sd.Default)`
    width: 8.5rem;
    ${vl.MaxWidth.sm} {
        width: 100%;
    }
    ${dp} {
        height: 2.5rem;
    }
`,jp=q.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,kp=q.default.canvas`
    cursor: crosshair;
`,Dp=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.2d27d01e.js")}))).ESignatureCanvas}})))),Ep=r=>{const{description:n,id:o,loadingProgress:a,loadingLabel:s="Uploading...",onChange:l,value:d,disabled:c}=r,f=G(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[h,g]=t.useState(!1),p=t.useRef(null),[m,b]=t.useState(d),v=i.useTheme(),y=bl["sm-max"]({theme:v}),x=Jd.useMediaQuery({maxWidth:y}),w=Jd.useMediaQuery({maxHeight:y,orientation:"landscape"}),$=()=>{var e;null===(e=p.current)||void 0===e||e.clear()},C=()=>{if(p.current){const e=p.current.export();b(e),g(!1),null==l||l(e)}};t.useEffect((()=>{b(d)}),[d]);return e.jsxs("div",Object.assign({},f,{children:[e.jsx(cp,{$disabled:c,children:"number"==typeof a?e.jsxs(gp,{children:[s&&e.jsx(exports.Typography.BodyMD,{children:s}),e.jsx(ep,{progress:null!=a?a:0,"data-testid":`${o||"e-signature"}-progress-bar`})]}):m?e.jsxs(e.Fragment,{children:[e.jsx(hp,{src:m,alt:"Signature preview"}),e.jsx(fp,{styleType:"light",onClick:()=>g(!0),id:o,"aria-label":"Edit signature",disabled:c,children:e.jsx(u.PencilIcon,{})})]}):e.jsx(up,{type:"button",styleType:"secondary","aria-label":"Add signature",id:o,onClick:()=>g(!0),disabled:c,children:"Add signature"})}),e.jsx(mp,{"data-testid":"signature-modal",show:h,children:e.jsx(bp,{children:e.jsxs(vp,{onClose:()=>g(!1),children:[e.jsx(yp,{children:"Signature"}),e.jsx(xp,{children:e.jsxs(wp,{children:[e.jsx($p,{}),e.jsx(t.Suspense,{fallback:null,children:h&&e.jsx(Dp,{ref:p,baseImageDataURL:m})})]})}),e.jsxs(Cp,{children:[e.jsx(Sp,{as:w?Jc.Small:Jc.Default,type:"button",styleType:x&&!w?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:$,children:"Clear"}),e.jsx(Sp,{as:w?Sd.Small:Sd.Default,type:"button",onClick:C,children:"Save"})]})]})})}),n?e.jsx(pp,{children:n}):null]}))},Tp="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Fp="Submit",Op="Rate your experience",Ip=5,Mp=q.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,_p=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${ul["icon-primary"]};
    ${Mp}:focus-visible + & {
        outline: ${gl["width-020"]} ${gl.solid}
            ${ul["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${ml.sm};
    }
`,Ap=q.default(b.StarIcon)`
    ${_p}
`,Bp=q.default(v.StarFillIcon)`
    ${_p}
`,Rp=q.default.label`
    margin: 0 ${pl["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${vl.MaxWidth.md} {
        margin: 0 ${pl["spacing-8"]};
    }
`,zp=q.default.div`
    display: flex;
    justify-content: center;
    margin: ${pl["spacing-8"]} ${pl["spacing-16"]};
`,Pp=t=>{const{description:r,rating:n,onRatingChange:i}=t,o=t=>{const r=`${t} star${1===t?"":"s"}`;return t<=n?e.jsx(Bp,{"aria-label":r}):e.jsx(Ap,{"aria-label":r})};return e.jsx(zp,{role:"radiogroup","aria-label":r,children:[...Array(Ip)].map(((t,r)=>{const a=r+1;return e.jsxs(Rp,{children:[e.jsx(Mp,{type:"radio",name:"star",checked:a===n,onChange:()=>(e=>{i(e)})(a)}),o(a)]},a)}))})},Lp=q.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${vl.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Np=q.default.div`
    border-top: 1px solid ${ul.border};
    border-bottom: 1px solid ${ul.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${vl.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,Hp=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${vl.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,Wp=q.default(Sd.Default)`
    margin-top: 1rem;
    width: 100%;
`,Vp=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${gl.Util["dashed-default"]({radius:ml.sm,thickness:gl["width-040"],colour:ul.border})}
                padding: ${pl["spacing-32"]};

                ${vl.MaxWidth.sm} {
                    padding: ${pl["spacing-32"]} ${pl["spacing-20"]};
                }
            `}}
`,Yp=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${pl["spacing-32"]};
`,Up=q.default.p`
    ${fl["heading-xs-regular"]}
    color: ${ul.text};
    margin-bottom: ${pl["spacing-8"]};
`,Kp=q.default.div`
    ${Fd({textSize:"heading-xs"})}
    color: ${ul.text};
`,qp=q.default.p`
    ${fl["body-md-regular"]}
    color: ${ul["text-subtler"]};
`,Xp=q.default.div`
    ${Fd({textSize:"body-md"})}
    color: ${ul["text-subtler"]};
`,Gp=q.default.ul`
    list-style-type: none;
`;var Zp;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Zp||(Zp={}));const Qp=({src:t,alt:r,className:n,"data-testid":i})=>e.jsx("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Jp=q.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${pl["spacing-16"]};
    }
`,em=q.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${pl["spacing-16"]} ${pl["spacing-32"]};
    cursor: pointer;

    background: ${ul["bg-primary-subtlest"]};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};

    ${vl.MaxWidth.lg} {
        padding: ${pl["spacing-16"]};
    }

    :hover {
        background: ${ul["bg-hover"]};
    }
`,tm=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${vl.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${vl.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,rm=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,nm=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${vl.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,im=q.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${pl["spacing-8"]};

    ${fl["body-md-regular"]}
    color: ${ul.text};

    ${vl.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${pl["spacing-8"]};

        ${Pl(2)}
    }
`,om=q.default.div`
    ${fl["body-md-regular"]}
    color: ${ul.text};

    ${vl.MaxWidth.lg} {
        ${Pl(2)}
    }
`;q.default(om)`
    ${fl["body-md-regular"]}
    margin-top: ${pl["spacing-4"]};
`;const am=q.default.div`
    ${fl["body-sm-semibold"]}
    color: ${ul["text-error"]};
`,sm=q.default(am)`
    margin-top: ${pl["spacing-4"]};
    ${vl.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,lm=q.default(am)`
    display: none;
    visibility: hidden;
    ${vl.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${pl["spacing-8"]};
    }
`,dm=q.default(ad)`
    color: ${ul["icon-primary"]};
`,cm=q.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${pl["spacing-32"]};

    ${vl.MaxWidth.lg} {
        margin-left: ${pl["spacing-16"]};
    }
`,um=q.default(pg)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${pl["spacing-16"]};
    }
`,fm=q.default.div`
    width: auto;
    margin-right: ${pl["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${vl.MaxWidth.lg} {
        margin-right: ${pl["spacing-16"]};
    }
`,hm=q.default(Qp)`
    border-radius: ${ml.sm};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${vl.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,gm=t.memo((({fileItem:r,onDownload:n})=>{const{id:o,name:a,size:s,errorMessage:l,thumbnailImageDataUrl:d,truncateText:c=!0,ready:f=!0}=r,[h,g]=t.useState(!1),[p,m]=t.useState(!1),b=Zp.formatFileSizeDisplay(s),v=i.useTheme(),y=bl["sm-max"]({theme:v}),x=Jd.useMediaQuery({maxWidth:y}),[w,$]=t.useState(),C=t.useRef(null);t.useEffect((()=>{C.current&&$(x?S(a):a)}),[a,x]);const S=e=>{if(!c)return e;const t=C&&C.current?C.current.getBoundingClientRect().width:0;return Ac.truncateTwoLines(e,t,16,1.5)},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(om,{ref:C,children:w}),p&&e.jsx(sm,{children:l||"Something went wrong"})]});return e.jsx(Jp,{"data-testid":o,children:e.jsxs(em,{onClick:()=>Z(void 0,void 0,void 0,(function*(){if(f&&!h){g(!0);try{m(!1),yield n(r)}catch(e){m(!0)}finally{g(!1)}}})),children:[(()=>{let t;var r;return d?(r=d,t=e.jsxs(e.Fragment,{children:[e.jsx(fm,{"data-testid":`${o}-thumbnail`,children:e.jsx(hm,{"data-testid":`${o}-thumbnail-image`,src:r})}),e.jsxs(nm,{children:[e.jsx(rm,{children:j()}),e.jsx(im,{children:b||"-"}),p&&e.jsx(lm,{children:l||"Something went wrong"})]})]})):t=e.jsxs(e.Fragment,{children:[e.jsx(rm,{children:j()}),e.jsx(im,{children:b||"-"}),p&&e.jsx(lm,{children:l||"Something went wrong"})]}),e.jsx(tm,{$hasThumbnail:!!d,children:t})})(),e.jsx(cm,{children:e.jsx(um,{"data-testid":`${o}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`,children:h||!f?e.jsx(dm,{size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})})})]})})})),pm={activeId:void 0,setActiveId:()=>{}},mm=t.createContext(pm);var bm,vm={exports:{}},ym={exports:{}},xm={};var wm,$m,Cm,Sm,jm,km,Dm,Em,Tm,Fm,Om,Im,Mm,_m,Am={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Bm(){return $m||($m=1,"production"===process.env.NODE_ENV?ym.exports=function(){if(bm)return xm;bm=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case d:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case c:case g:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===d}return xm.AsyncMode=l,xm.ConcurrentMode=d,xm.ContextConsumer=s,xm.ContextProvider=a,xm.Element=t,xm.ForwardRef=c,xm.Fragment=n,xm.Lazy=g,xm.Memo=h,xm.Portal=r,xm.Profiler=o,xm.StrictMode=i,xm.Suspense=u,xm.isAsyncMode=function(e){return x(e)||y(e)===l},xm.isConcurrentMode=x,xm.isContextConsumer=function(e){return y(e)===s},xm.isContextProvider=function(e){return y(e)===a},xm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},xm.isForwardRef=function(e){return y(e)===c},xm.isFragment=function(e){return y(e)===n},xm.isLazy=function(e){return y(e)===g},xm.isMemo=function(e){return y(e)===h},xm.isPortal=function(e){return y(e)===r},xm.isProfiler=function(e){return y(e)===o},xm.isStrictMode=function(e){return y(e)===i},xm.isSuspense=function(e){return y(e)===u},xm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===d||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===c||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===p)},xm.typeOf=y,xm}():ym.exports=(wm||(wm=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var p=e.type;switch(p){case l:case d:case n:case o:case i:case u:return p;default:var m=p&&p.$$typeof;switch(m){case s:case c:case g:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=d,$=s,C=a,S=t,j=c,k=n,D=g,E=h,T=r,F=o,O=i,I=u,M=!1;function _(e){return y(e)===d}Am.AsyncMode=x,Am.ConcurrentMode=w,Am.ContextConsumer=$,Am.ContextProvider=C,Am.Element=S,Am.ForwardRef=j,Am.Fragment=k,Am.Lazy=D,Am.Memo=E,Am.Portal=T,Am.Profiler=F,Am.StrictMode=O,Am.Suspense=I,Am.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||y(e)===l},Am.isConcurrentMode=_,Am.isContextConsumer=function(e){return y(e)===s},Am.isContextProvider=function(e){return y(e)===a},Am.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Am.isForwardRef=function(e){return y(e)===c},Am.isFragment=function(e){return y(e)===n},Am.isLazy=function(e){return y(e)===g},Am.isMemo=function(e){return y(e)===h},Am.isPortal=function(e){return y(e)===r},Am.isProfiler=function(e){return y(e)===o},Am.isStrictMode=function(e){return y(e)===i},Am.isSuspense=function(e){return y(e)===u},Am.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===d||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===c||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===p)},Am.typeOf=y}()),Am)),ym.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Rm(){if(Sm)return Cm;Sm=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Cm=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))t.call(o,d)&&(s[d]=o[d]);if(e){a=e(o);for(var c=0;c<a.length;c++)r.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s},Cm}function zm(){if(km)return jm;km=1;return jm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Pm(){return Em?Dm:(Em=1,Dm=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Lm=Bm();vm.exports=function(){if(Im)return Om;Im=1;var e=Bm(),t=Rm(),r=zm(),n=Pm(),i=function(){if(Fm)return Tm;Fm=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=zm(),r={},n=Pm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var d in i)if(n(i,d)){var c;try{if("function"!=typeof i[d]){var u=Error((s||"React class")+": "+a+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=i[d](o,d,s,a,null,t)}catch(e){c=e}if(!c||c instanceof Error||e((s||"React class")+": type specification of "+a+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in r)){r[c.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+c.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Tm=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Om=function(s,l){var d="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:g(a),arrayOf:function(e){return g((function(t,n,i,o,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,i,o,a+"["+l+"]",r);if(d instanceof Error)return d}return null}))},element:g((function(e,t,r,n,i){var o=e[t];return s(o)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||c;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,i){return b(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,o,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],d=v(l);if("object"!==d)return new h("Invalid "+a+" `"+s+"` of type `"+d+"` supplied to `"+o+"`, expected an object.");for(var c in l)if(n(l,c)){var u=e(l,c,o,a,s+"."+c,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return g((function(t,i,o,a,s){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,i,o,a,s,r);if(null==c)return null;c.data&&n(c.data,"expectedType")&&l.push(c.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,i,o,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return m(i,o,a,d,y(c));var u=c(s,d,i,o,a+"."+d,r);if(u)return u}return null}))},exact:function(e){return g((function(i,o,a,s,l){var d=i[o],c=v(d);if("object"!==c)return new h("Invalid "+s+" `"+l+"` of type `"+c+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var f in u){var g=e[f];if(n(e,f)&&"function"!=typeof g)return m(a,s,l,f,y(g));if(!g)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=g(d,f,a,s,l+"."+f,r);if(p)return p}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,d,u,f,g){if(d=d||c,f=f||s,g!==r){if(l){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=d+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,s,d,u,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function p(e){return g((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(d&&e[d]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},Om}()(Lm.isElement,!0)}else vm.exports=function(){if(_m)return Mm;_m=1;var e=zm();function t(){}function r(){}return r.resetWarningCache=t,Mm=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var Nm=Fi(vm.exports),Hm=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Wm(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=Hm.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var Vm=[".DS_Store","Thumbs.db"];function Ym(e){return"object"==typeof e&&null!==e}function Um(e){return Gm(e.target.files).map((function(e){return Wm(e)}))}function Km(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Wm(e)}))]}}))}))}function qm(e,t){return Z(this,void 0,void 0,(function(){var r;return Q(this,(function(n){switch(n.label){case 0:return e.items?(r=Gm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Zm))]):[3,2];case 1:return[2,Xm(Qm(n.sent()))];case 2:return[2,Xm(Gm(e.files).map((function(e){return Wm(e)})))]}}))}))}function Xm(e){return e.filter((function(e){return-1===Vm.indexOf(e.name)}))}function Gm(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Zm(e){if("function"!=typeof e.webkitGetAsEntry)return Jm(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?tb(t):Jm(e)}function Qm(e){return e.reduce((function(e,t){return ee(ee([],J(e),!1),J(Array.isArray(t)?Qm(t):[t]),!1)}),[])}function Jm(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=Wm(t);return Promise.resolve(r)}function eb(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){return[2,e.isDirectory?tb(e):rb(e)]}))}))}function tb(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return Z(o,void 0,void 0,(function(){var o,a,s;return Q(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(eb)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function rb(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=Wm(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function nb(e){return function(e){if(Array.isArray(e))return db(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||lb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ib(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ob(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ib(Object(r),!0).forEach((function(t){ab(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ib(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ab(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||lb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lb(e,t){if(e){if("string"==typeof e)return db(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?db(e,t):void 0}}function db(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var cb=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},ub=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},fb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},hb={code:"too-many-files",message:"Too many files"};function gb(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:cb(t)]}function pb(e,t,r){if(mb(e.size))if(mb(t)&&mb(r)){if(e.size>r)return[!1,ub(r)];if(e.size<t)return[!1,fb(t)]}else{if(mb(t)&&e.size<t)return[!1,fb(t)];if(mb(r)&&e.size>r)return[!1,ub(r)]}return[!0,null]}function mb(e){return null!=e}function bb(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function vb(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function yb(e){e.preventDefault()}function xb(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!bb(e)&&t&&t.apply(void 0,[e].concat(n)),bb(e)}))}}function wb(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function $b(e){return/^.*\.[\w]+$/.test(e)}var Cb=["children"],Sb=["open"],jb=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],kb=["refKey","onChange","onClick"];function Db(e){return function(e){if(Array.isArray(e))return Fb(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Tb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Eb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Tb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tb(e,t){if(e){if("string"==typeof e)return Fb(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Fb(e,t):void 0}}function Fb(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ob(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ib(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ob(Object(r),!0).forEach((function(t){Mb(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ob(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Mb(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Ab=t.forwardRef((function(e,r){var n=e.children,i=zb(_b(e,Cb)),o=i.open,a=_b(i,Sb);return t.useImperativeHandle(r,(function(){return{open:o}}),[o]),U.default.createElement(t.Fragment,null,n(Ib(Ib({},a),{},{open:o})))}));Ab.displayName="Dropzone";var Bb={disabled:!1,getFilesFromEvent:function(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){return Ym(e)&&Ym(e.dataTransfer)?[2,qm(e.dataTransfer,e.type)]:function(e){return Ym(e)&&Ym(e.target)}(e)?[2,Um(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Km(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ab.defaultProps=Bb,Ab.propTypes={children:Nm.func,accept:Nm.objectOf(Nm.arrayOf(Nm.string)),multiple:Nm.bool,preventDropOnDocument:Nm.bool,noClick:Nm.bool,noKeyboard:Nm.bool,noDrag:Nm.bool,noDragEventsBubbling:Nm.bool,minSize:Nm.number,maxSize:Nm.number,maxFiles:Nm.number,disabled:Nm.bool,getFilesFromEvent:Nm.func,onFileDialogCancel:Nm.func,onFileDialogOpen:Nm.func,useFsAccessApi:Nm.bool,autoFocus:Nm.bool,onDragEnter:Nm.func,onDragLeave:Nm.func,onDragOver:Nm.func,onDrop:Nm.func,onDropAccepted:Nm.func,onDropRejected:Nm.func,onError:Nm.func,validator:Nm.func};var Rb={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function zb(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Ib(Ib({},Bb),e),n=r.accept,i=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,s=r.minSize,l=r.multiple,d=r.maxFiles,c=r.onDragEnter,u=r.onDragLeave,f=r.onDragOver,h=r.onDrop,g=r.onDropAccepted,p=r.onDropRejected,m=r.onFileDialogCancel,b=r.onFileDialogOpen,v=r.useFsAccessApi,y=r.autoFocus,x=r.preventDropOnDocument,w=r.noClick,$=r.noKeyboard,C=r.noDrag,S=r.noDragEventsBubbling,j=r.onError,k=r.validator,D=t.useMemo((function(){return function(e){if(mb(e))return Object.entries(e).reduce((function(e,t){var r=sb(t,2),n=r[0],i=r[1];return[].concat(nb(e),[n],nb(i))}),[]).filter((function(e){return wb(e)||$b(e)})).join(",")}(n)}),[n]),E=t.useMemo((function(){return function(e){return mb(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=sb(e,2),r=t[0],n=t[1],i=!0;return wb(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every($b)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=sb(t,2),n=r[0],i=r[1];return ob(ob({},e),{},ab({},n,i))}),{})}]:e}(n)}),[n]),T=t.useMemo((function(){return"function"==typeof b?b:Lb}),[b]),F=t.useMemo((function(){return"function"==typeof m?m:Lb}),[m]),O=t.useRef(null),I=t.useRef(null),M=Eb(t.useReducer(Pb,Rb),2),_=M[0],A=M[1],B=_.isFocused,R=_.isFileDialogActive,z=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),P=function(){!z.current&&R&&setTimeout((function(){I.current&&(I.current.files.length||(A({type:"closeDialog"}),F()))}),300)};t.useEffect((function(){return window.addEventListener("focus",P,!1),function(){window.removeEventListener("focus",P,!1)}}),[I,R,F,z]);var L=t.useRef([]),N=function(e){O.current&&O.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",yb,!1),document.addEventListener("drop",N,!1)),function(){x&&(document.removeEventListener("dragover",yb),document.removeEventListener("drop",N))}}),[O,x]),t.useEffect((function(){return!i&&y&&O.current&&O.current.focus(),function(){}}),[O,y,i]);var H=t.useCallback((function(e){j?j(e):console.error(e)}),[j]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[].concat(Db(L.current),[e.target]),vb(e)&&Promise.resolve(o(e)).then((function(t){if(!bb(e)||S){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=sb(gb(e,r),1)[0],o=sb(pb(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:D,minSize:s,maxSize:a,multiple:l,maxFiles:d,validator:k});A({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),c&&c(e)}})).catch((function(e){return H(e)}))}),[o,c,H,S,D,s,a,l,d,k]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=vb(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=L.current.filter((function(e){return O.current&&O.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),vb(e)&&u&&u(e))}),[O,u,S]),U=t.useCallback((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Eb(gb(e,D),2),i=t[0],o=t[1],l=Eb(pb(e,s,a),2),d=l[0],c=l[1],u=k?k(e):null;if(i&&d&&!u)r.push(e);else{var f=[o,c];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&d>=1&&r.length>d)&&(r.forEach((function(e){n.push({file:e,errors:[hb]})})),r.splice(0)),A({acceptedFiles:r,fileRejections:n,type:"setFiles"}),h&&h(r,n,t),n.length>0&&p&&p(n,t),r.length>0&&g&&g(r,t)}),[A,l,D,s,a,d,h,g,p,k]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[],vb(e)&&Promise.resolve(o(e)).then((function(t){bb(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[o,U,H,S]),q=t.useCallback((function(){if(z.current){A({type:"openDialog"}),T();var e={multiple:l,types:E};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(F(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(z.current=!1,I.current?(I.current.value=null,I.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else I.current&&(A({type:"openDialog"}),T(),I.current.value=null,I.current.click())}),[A,T,F,v,U,H,E,l]),X=t.useCallback((function(e){O.current&&O.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[O,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return C?null:J(e)},re=function(e){S&&e.stopPropagation()},ne=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,d=e.onDragEnter,c=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=_b(e,jb);return Ib(Ib(Mb({onKeyDown:ee(xb(o,X)),onFocus:ee(xb(a,G)),onBlur:ee(xb(s,Z)),onClick:J(xb(l,Q)),onDragEnter:te(xb(d,W)),onDragOver:te(xb(c,V)),onDragLeave:te(xb(u,Y)),onDrop:te(xb(f,K)),role:"string"==typeof n&&""!==n?n:"presentation"},r,O),i||$?{}:{tabIndex:0}),h)}}),[O,X,G,Z,Q,W,V,Y,K,$,C,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),oe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=_b(e,kb);return Ib(Ib({},Mb({accept:D,multiple:l,type:"file",style:{display:"none"},onChange:J(xb(n,K)),onClick:J(xb(i,ie)),tabIndex:-1},r,I)),o)}}),[I,n,l,K,i]);return Ib(Ib({},_),{},{isFocused:B&&!i,getRootProps:ne,getInputProps:oe,rootRef:O,inputRef:I,open:J(q)})}function Pb(e,t){switch(t.type){case"focus":return Ib(Ib({},e),{},{isFocused:!0});case"blur":return Ib(Ib({},e),{},{isFocused:!1});case"openDialog":return Ib(Ib({},Rb),{},{isFileDialogActive:!0});case"closeDialog":return Ib(Ib({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Ib(Ib({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Ib(Ib({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Ib({},Rb);default:return e}}function Lb(){}const Nb=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${gl.Util["dashed-default"]({radius:ml.sm,thickness:gl["width-040"],colour:ul.border})}
                padding: ${pl["spacing-32"]};

                ${vl.MaxWidth.sm} {
                    padding: ${pl["spacing-32"]} ${pl["spacing-20"]};
                }
            `}}
`,Hb=q.default.input`
    display: none;
`,Wb=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${ul["bg-primary-subtler"]};
    ${gl.Util["dashed-default"]({radius:ml.sm,thickness:gl["width-040"],colour:ul["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Vb=q.default(exports.Typography.BodyMD)`
    color: ${ul["text-primary"]};
    text-align: center;
`,Yb=q.default(y.CloudArrowUpFillIcon)`
    color: ${ul["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Ub=t.forwardRef((({children:r,accept:n,capture:i,multiple:o,id:a,className:s,name:l,border:d,disabled:c,onChange:u,"data-testid":f},h)=>{const g=t.useRef(null),{getRootProps:p,isDragActive:m}=zb({onDrop:u,noClick:!0,disabled:c});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},g.current),{openFileDialog:()=>{g.current&&(g.current.value="",g.current.click())}})));return e.jsxs(Nb,Object.assign({id:a,"data-testid":f||"dropzone",$border:d,className:s},p(),{children:[e.jsx(Hb,{type:"file",name:l,ref:g,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:o,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),r,m&&e.jsxs(Wb,{children:[e.jsx(Yb,{}),e.jsx(Vb,{weight:"semibold",children:"Drop files here"})]})]}))}));const Kb="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function qb(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Xb(e){return"nodeType"in e}function Gb(e){var t,r;return e?qb(e)?e:Xb(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Zb(e){const{Document:t}=Gb(e);return e instanceof t}function Qb(e){return!qb(e)&&e instanceof Gb(e).HTMLElement}function Jb(e){return e instanceof Gb(e).SVGElement}function ev(e){return e?qb(e)?e.document:Xb(e)?Zb(e)?e:Qb(e)||Jb(e)?e.ownerDocument:document:document:document}const tv=Kb?t.useLayoutEffect:t.useEffect;function rv(e){const r=t.useRef(e);return tv((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function nv(e,r){void 0===r&&(r=[e]);const n=t.useRef(e);return tv((()=>{n.current!==e&&(n.current=e)}),r),n}function iv(e,r){const n=t.useRef();return t.useMemo((()=>{const t=e(n.current);return n.current=t,t}),[...r])}function ov(e){const r=rv(e),n=t.useRef(null),i=t.useCallback((e=>{e!==n.current&&(null==r||r(e,n.current)),n.current=e}),[]);return[n,i]}function av(e){const r=t.useRef();return t.useEffect((()=>{r.current=e}),[e]),r.current}let sv={};function lv(e,r){return t.useMemo((()=>{if(r)return r;const t=null==sv[e]?0:sv[e]+1;return sv[e]=t,e+"-"+t}),[e,r])}function dv(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const cv=dv(1),uv=dv(-1);function fv(e){if(!e)return!1;const{KeyboardEvent:t}=Gb(e.target);return t&&e instanceof t}function hv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Gb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const gv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[gv.Translate.toString(e),gv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),pv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function mv(e){return e.matches(pv)?e:e.querySelector(pv)}const bv={display:"none"};function vv(e){let{id:t,value:r}=e;return U.default.createElement("div",{id:t,style:bv},r)}function yv(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return U.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const xv=t.createContext(null);const wv={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},$v={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Cv(e){let{announcements:n=$v,container:i,hiddenTextDescribedById:o,screenReaderInstructions:a=wv}=e;const{announce:s,announcement:l}=function(){const[e,r]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&r(e)}),[]),announcement:e}}(),d=lv("DndLiveRegion"),[c,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const r=t.useContext(xv);t.useEffect((()=>{if(!r)throw new Error("useDndMonitor must be used within a children of <DndContext>");return r(e)}),[e,r])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}})),[s,n])),!c)return null;const f=U.default.createElement(U.default.Fragment,null,U.default.createElement(vv,{id:o,value:a.draggable}),U.default.createElement(yv,{id:d,announcement:l}));return i?r.createPortal(f,i):f}var Sv;function jv(){}function kv(e,r){return t.useMemo((()=>({sensor:e,options:null!=r?r:{}})),[e,r])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Sv||(Sv={}));const Dv=Object.freeze({x:0,y:0});function Ev(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Tv(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Fv(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function Ov(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function Iv(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const Mv=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=Iv(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(Tv)};function _v(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Dv}function Av(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Bv=Av(1);const Rv={ignoreTransform:!1};function zv(e,t){void 0===t&&(t=Rv);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Gb(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),d=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:c,height:u,top:d,right:l+c,bottom:d+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function Pv(e){return zv(e,{ignoreTransform:!0})}function Lv(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Zb(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!Qb(i)||Jb(i))return r;if(r.includes(i))return r;const o=Gb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Gb(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=Gb(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function Nv(e){const[t]=Lv(e,1);return null!=t?t:null}function Hv(e){return Kb&&e?qb(e)?e:Xb(e)?Zb(e)||e===ev(e).scrollingElement?window:Qb(e)?e:null:null:null}function Wv(e){return qb(e)?e.scrollX:e.scrollLeft}function Vv(e){return qb(e)?e.scrollY:e.scrollTop}function Yv(e){return{x:Wv(e),y:Vv(e)}}var Uv;function Kv(e){return!(!Kb||!e)&&e===document.scrollingElement}function qv(e){const t={x:0,y:0},r=Kv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Uv||(Uv={}));const Xv={x:.2,y:.2};function Gv(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=Xv);const{isTop:d,isBottom:c,isLeft:u,isRight:f}=qv(e),h={x:0,y:0},g={x:0,y:0},p=t.height*i.y,m=t.width*i.x;return!d&&o<=t.top+p?(h.y=Uv.Backward,g.y=n*Math.abs((t.top+p-o)/p)):!c&&l>=t.bottom-p&&(h.y=Uv.Forward,g.y=n*Math.abs((t.bottom-p-l)/p)),!f&&s>=t.right-m?(h.x=Uv.Forward,g.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=Uv.Backward,g.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:g}}function Zv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Qv(e){return e.reduce(((e,t)=>cv(e,Yv(t))),Dv)}const Jv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Wv(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Vv(t)),0)}]];class ey{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Lv(t),n=Qv(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of Jv)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ty{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function ry(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var ny,iy;function oy(e){e.preventDefault()}function ay(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(ny||(ny={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(iy||(iy={}));const sy={start:[iy.Space,iy.Enter],cancel:[iy.Esc],end:[iy.Space,iy.Enter]},ly=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case iy.Right:return{...r,x:r.x+25};case iy.Left:return{...r,x:r.x-25};case iy.Down:return{...r,y:r.y+25};case iy.Up:return{...r,y:r.y-25}}};let dy=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new ty(ev(t)),this.windowListeners=new ty(Gb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ny.Resize,this.handleCancel),this.windowListeners.add(ny.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(ny.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=zv),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);Nv(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Dv)}handleKeyDown(e){if(fv(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=sy,coordinateGetter:o=ly,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,d=l?{x:l.left,y:l.top}:Dv;this.referenceCoordinates||(this.referenceCoordinates=d);const c=o(e,{active:t,context:r.current,currentCoordinates:d});if(c){const t=uv(c,d),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:d,maxScroll:u,minScroll:f}=qv(r),h=Zv(r),g={x:Math.min(i===iy.Right?h.right-h.width/2:h.right,Math.max(i===iy.Right?h.left:h.left+h.width/2,c.x)),y:Math.min(i===iy.Down?h.bottom-h.height/2:h.bottom,Math.max(i===iy.Down?h.top:h.top+h.height/2,c.y))},p=i===iy.Right&&!s||i===iy.Left&&!l,m=i===iy.Down&&!d||i===iy.Up&&!o;if(p&&g.x!==c.x){const e=r.scrollLeft+t.x,o=i===iy.Right&&e<=u.x||i===iy.Left&&e>=f.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===iy.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&g.y!==c.y){const e=r.scrollTop+t.y,o=i===iy.Down&&e<=u.y||i===iy.Up&&e>=f.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===iy.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,cv(uv(c,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function cy(e){return Boolean(e&&"distance"in e)}function uy(e){return Boolean(e&&"delay"in e)}dy.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=sy,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class fy{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Gb(e);return e instanceof t?e:ev(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=ev(o),this.documentListeners=new ty(this.document),this.listeners=new ty(r),this.windowListeners=new ty(Gb(o)),this.initialCoordinates=null!=(n=hv(i))?n:Dv,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(ny.Resize,this.handleCancel),this.windowListeners.add(ny.DragStart,oy),this.windowListeners.add(ny.VisibilityChange,this.handleCancel),this.windowListeners.add(ny.ContextMenu,oy),this.documentListeners.add(ny.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(uy(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(cy(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(ny.Click,ay,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ny.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=hv(e))?t:Dv,l=uv(n,s);if(!r&&a){if(cy(a)){if(null!=a.tolerance&&ry(l,a.tolerance))return this.handleCancel();if(ry(l,a.distance))return this.handleStart()}return uy(a)&&ry(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===iy.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const hy={move:{name:"pointermove"},end:{name:"pointerup"}};class gy extends fy{constructor(e){const{event:t}=e,r=ev(t.target);super(e,hy,r)}}gy.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const py={move:{name:"mousemove"},end:{name:"mouseup"}};var my;!function(e){e[e.RightClick=2]="RightClick"}(my||(my={}));let by=class extends fy{constructor(e){super(e,py,ev(e.event.target))}};by.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==my.RightClick&&(null==n||n({event:r}),!0)}}];const vy={move:{name:"touchmove"},end:{name:"touchend"}};class yy extends fy{constructor(e){super(e,vy)}static setup(){return window.addEventListener(vy.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(vy.move.name,e)};function e(){}}}var xy,wy;function $y(e){let{acceleration:r,activator:n=xy.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=wy.TreeOrder,pointerCoordinates:d,scrollableAncestors:c,scrollableAncestorRects:u,delta:f,threshold:h}=e;const g=function(e){let{delta:t,disabled:r}=e;const n=av(t);return iv((e=>{if(r||!n||!e)return Cy;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Uv.Backward]:e.x[Uv.Backward]||-1===i.x,[Uv.Forward]:e.x[Uv.Forward]||1===i.x},y:{[Uv.Backward]:e.y[Uv.Backward]||-1===i.y,[Uv.Forward]:e.y[Uv.Forward]||1===i.y}}}),[r,t,n])}({delta:f,disabled:!a}),[p,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,r)=>{e.current=setInterval(t,r)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(n){case xy.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case xy.DraggableRect:return o}}),[n,o,d]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,r=b.current.y*v.current.y;e.scrollBy(t,r)}),[]),$=t.useMemo((()=>l===wy.TreeOrder?[...c].reverse():c),[l,c]);t.useEffect((()=>{if(a&&c.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=c.indexOf(e),n=u[t];if(!n)continue;const{direction:o,speed:a}=Gv(e,n,y,r,h);for(const e of["x","y"])g[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return m(),x.current=e,p(w,s),b.current=a,void(v.current=o)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[r,w,i,m,a,s,JSON.stringify(y),JSON.stringify(g),p,c,$,u,JSON.stringify(h)])}yy.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(xy||(xy={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(wy||(wy={}));const Cy={x:{[Uv.Backward]:!1,[Uv.Forward]:!1},y:{[Uv.Backward]:!1,[Uv.Forward]:!1}};var Sy,jy;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Sy||(Sy={})),function(e){e.Optimized="optimized"}(jy||(jy={}));const ky=new Map;function Dy(e,t){return iv((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Ey(e){let{callback:r,disabled:n}=e;const i=rv(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Ty(e){return new ey(zv(e),e)}function Fy(e,r,n){void 0===r&&(r=Ty);const[i,o]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:n)?i:null;const o=r(e);if(JSON.stringify(t)===JSON.stringify(o))return t;return o}),null),a=function(e){let{callback:r,disabled:n}=e;const i=rv(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=Ey({callback:o});return tv((()=>{o(),e?(null==s||s.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==a||a.disconnect())}),[e]),i}const Oy=[];function Iy(e,r){void 0===r&&(r=[]);const n=t.useRef(null);return t.useEffect((()=>{n.current=null}),r),t.useEffect((()=>{const t=e!==Dv;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?uv(e,n.current):Dv}function My(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const _y=[];function Ay(e){let{measure:r}=e;const[n,i]=t.useState(null),o=t.useCallback((e=>{for(const{target:t}of e)if(Qb(t)){i((e=>{const n=r(t);return e?{...e,width:n.width,height:n.height}:n}));break}}),[r]),a=Ey({callback:o}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Qb(t)?t:e}(e);null==a||a.disconnect(),t&&(null==a||a.observe(t)),i(t?r(t):null)}),[r,a]),[l,d]=ov(s);return t.useMemo((()=>({nodeRef:l,rect:n,setRef:d})),[n,l,d])}const By=[{sensor:gy,options:{}},{sensor:dy,options:{}}],Ry={current:{}},zy={draggable:{measure:Pv},droppable:{measure:Pv,strategy:Sy.WhileDragging,frequency:jy.Optimized},dragOverlay:{measure:zv}};class Py extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Ly={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Py,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:jv},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:zy,measureDroppableContainers:jv,windowRect:null,measuringScheduled:!1},Ny={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:jv,draggableNodes:new Map,over:null,measureDroppableContainers:jv},Hy=t.createContext(Ny),Wy=t.createContext(Ly);function Vy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Py}}}function Yy(e,t){switch(t.type){case Sv.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Sv.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Sv.DragEnd:case Sv.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Sv.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new Py(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case Sv.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new Py(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Sv.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new Py(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Uy(e){let{disabled:r}=e;const{active:n,activatorEvent:i,draggableNodes:o}=t.useContext(Hy),a=av(i),s=av(null==n?void 0:n.id);return t.useEffect((()=>{if(!r&&!i&&a&&null!=s){if(!fv(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=mv(e);if(t){t.focus();break}}}))}}),[i,r,o,s,a]),null}const Ky=t.createContext({...Dv,scaleX:1,scaleY:1});var qy;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(qy||(qy={}));const Xy=t.memo((function(e){var n,i,o,a;let{id:s,accessibility:l,autoScroll:d=!0,children:c,sensors:u=By,collisionDetection:f=Mv,measuring:h,modifiers:g,...p}=e;const m=t.useReducer(Yy,void 0,Vy),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),r=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),r]}(),[w,$]=t.useState(qy.Uninitialized),C=w===qy.Initialized,{draggable:{active:S,nodes:j,translate:k},droppable:{containers:D}}=b,E=S?j.get(S):null,T=t.useRef({initial:null,translated:null}),F=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==E?void 0:E.data)?e:Ry,rect:T}:null}),[S,E]),O=t.useRef(null),[I,M]=t.useState(null),[_,A]=t.useState(null),B=nv(p,Object.values(p)),R=lv("DndDescribedBy",s),z=t.useMemo((()=>D.getEnabled()),[D]),P=function(e){return t.useMemo((()=>({draggable:{...zy.draggable,...null==e?void 0:e.draggable},droppable:{...zy.droppable,...null==e?void 0:e.droppable},dragOverlay:{...zy.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:N,measuringScheduled:H}=function(e,r){let{dragging:n,dependencies:i,config:o}=r;const[a,s]=t.useState(null),{frequency:l,measure:d,strategy:c}=o,u=t.useRef(e),f=function(){switch(c){case Sy.Always:return!1;case Sy.BeforeDragging:return n;default:return!n}}(),h=nv(f),g=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),p=t.useRef(null),m=iv((t=>{if(f&&!n)return ky;if(!t||t===ky||u.current!==e||null!=a){const t=new Map;for(let r of e){if(!r)continue;if(a&&a.length>0&&!a.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new ey(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,a,n,f,d]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||g()}),[n,f]),t.useEffect((()=>{a&&a.length>0&&s(null)}),[JSON.stringify(a)]),t.useEffect((()=>{f||"number"!=typeof l||null!==p.current||(p.current=setTimeout((()=>{g(),p.current=null}),l))}),[l,f,g,...i]),{droppableRects:m,measureDroppableContainers:g,measuringScheduled:null!=a}}(z,{dragging:C,dependencies:[k.x,k.y],config:P.droppable}),W=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return iv((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(j,S),V=t.useMemo((()=>_?hv(_):null),[_]),Y=function(){const e=!1===(null==I?void 0:I.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,r=C&&!e&&!t;if("object"==typeof d)return{...d,enabled:r};return{enabled:r}}(),K=function(e,t){return Dy(e,t)}(W,P.draggable.measure);!function(e){let{activeNode:r,measure:n,initialRect:i,config:o=!0}=e;const a=t.useRef(!1),{x:s,y:l}="boolean"==typeof o?{x:o,y:o}:o;tv((()=>{if(!s&&!l||!r)return void(a.current=!1);if(a.current||!i)return;const e=null==r?void 0:r.node.current;if(!e||!1===e.isConnected)return;const t=_v(n(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const r=Nv(e);r&&r.scrollBy({top:t.y,left:t.x})}}),[r,s,l,i,n])}({activeNode:S?j.get(S):null,config:Y.layoutShiftCompensation,initialRect:K,measure:P.draggable.measure});const q=Fy(W,P.draggable.measure,K),X=Fy(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:j,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=D.getNodeFor(null==(n=G.current.over)?void 0:n.id),Q=Ay({measure:P.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=C?null!=(o=Q.rect)?o:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),re=_v(ne=te?null:q,Dy(ne));var ne;const ie=My(J?Gb(J):null),oe=function(e){const r=t.useRef(e),n=iv((t=>e?t&&t!==Oy&&e&&r.current&&e.parentNode===r.current.parentNode?t:Lv(e):Oy),[e]);return t.useEffect((()=>{r.current=e}),[e]),n}(C?null!=Z?Z:W:null),ae=function(e,r){void 0===r&&(r=zv);const[n]=e,i=My(n?Gb(n):null),[o,a]=t.useReducer((function(){return e.length?e.map((e=>Kv(e)?i:new ey(r(e),e))):_y}),_y),s=Ey({callback:a});return e.length>0&&o===_y&&a(),tv((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),a())}),[e]),o}(oe),se=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(g,{transform:{x:k.x-re.x,y:k.y-re.y,scaleX:1,scaleY:1},activatorEvent:_,active:F,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=V?cv(V,k):null,de=function(e){const[r,n]=t.useState(null),i=t.useRef(e),o=t.useCallback((e=>{const t=Hv(e.target);t&&n((e=>e?(e.set(t,Yv(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){r(t);const a=e.map((e=>{const t=Hv(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Yv(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),i.current=e}return()=>{r(e),r(t)};function r(e){e.forEach((e=>{const t=Hv(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),t.useMemo((()=>e.length?r?Array.from(r.values()).reduce(((e,t)=>cv(e,t)),Dv):Qv(e):Dv),[e,r])}(oe),ce=Iy(de),ue=Iy(de,[q]),fe=cv(se,ce),he=ee?Bv(ee,se):null,ge=F&&he?f({active:F,collisionRect:he,droppableRects:L,droppableContainers:z,pointerCoordinates:le}):null,pe=Ov(ge,"id"),[me,be]=t.useState(null),ve=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(te?se:cv(se,ue),null!=(a=null==me?void 0:me.rect)?a:null,q),ye=t.useCallback(((e,t)=>{let{sensor:n,options:i}=t;if(null==O.current)return;const o=j.get(O.current);if(!o)return;const a=e.nativeEvent,s=new n({active:O.current,activeNode:o,event:a,options:i,context:G,onStart(e){const t=O.current;if(null==t)return;const n=j.get(t);if(!n)return;const{onDragStart:i}=B.current,o={active:{id:t,data:n.data,rect:T}};r.unstable_batchedUpdates((()=>{null==i||i(o),$(qy.Initializing),v({type:Sv.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:o})}))},onMove(e){v({type:Sv.DragMove,coordinates:e})},onEnd:l(Sv.DragEnd),onCancel:l(Sv.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:i,scrollAdjustedTranslate:o}=G.current;let s=null;if(t&&o){const{cancelDrop:r}=B.current;if(s={activatorEvent:a,active:t,collisions:n,delta:o,over:i},e===Sv.DragEnd&&"function"==typeof r){await Promise.resolve(r(s))&&(e=Sv.DragCancel)}}O.current=null,r.unstable_batchedUpdates((()=>{v({type:e}),$(qy.Uninitialized),be(null),M(null),A(null);const t=e===Sv.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=B.current[t];null==e||e(s),y({type:t,event:s})}}))}}r.unstable_batchedUpdates((()=>{M(s),A(e.nativeEvent)}))}),[j]),xe=t.useCallback(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=j.get(n);if(null!==O.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},O.current=n,ye(r,t))}),[j,ye]),we=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:n}=t;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:r(e.handler,t)})))]}),[])),[e,r])}(u,xe);!function(e){t.useEffect((()=>{if(!Kb)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),tv((()=>{q&&w===qy.Initializing&&$(qy.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=B.current,{active:t,activatorEvent:n,collisions:i,over:o}=G.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:i,delta:{x:fe.x,y:fe.y},over:o};r.unstable_batchedUpdates((()=>{null==e||e(a),y({type:"onDragMove",event:a})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:i,scrollAdjustedTranslate:o}=G.current;if(!e||null==O.current||!t||!o)return;const{onDragOver:a}=B.current,s=i.get(pe),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,d={active:e,activatorEvent:t,collisions:n,delta:{x:o.x,y:o.y},over:l};r.unstable_batchedUpdates((()=>{be(l),null==a||a(d),y({type:"onDragOver",event:d})}))}),[pe]),tv((()=>{G.current={activatorEvent:_,active:F,activeNode:W,collisionRect:he,collisions:ge,droppableRects:L,draggableNodes:j,draggingNode:J,draggingNodeRect:ee,droppableContainers:D,over:me,scrollableAncestors:oe,scrollAdjustedTranslate:fe},T.current={initial:ee,translated:he}}),[F,W,ge,he,j,J,ee,L,D,me,oe,fe]),$y({...Y,delta:k,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const $e=t.useMemo((()=>({active:F,activeNode:W,activeNodeRect:q,activatorEvent:_,collisions:ge,containerNodeRect:X,dragOverlay:Q,draggableNodes:j,droppableContainers:D,droppableRects:L,over:me,measureDroppableContainers:N,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:P,measuringScheduled:H,windowRect:ie})),[F,W,q,_,ge,X,Q,j,D,L,me,N,oe,ae,P,H,ie]),Ce=t.useMemo((()=>({activatorEvent:_,activators:we,active:F,activeNodeRect:q,ariaDescribedById:{draggable:R},dispatch:v,draggableNodes:j,over:me,measureDroppableContainers:N})),[_,we,F,q,v,R,j,me,N]);return U.default.createElement(xv.Provider,{value:x},U.default.createElement(Hy.Provider,{value:Ce},U.default.createElement(Wy.Provider,{value:$e},U.default.createElement(Ky.Provider,{value:ve},c)),U.default.createElement(Uy,{disabled:!1===(null==l?void 0:l.restoreFocus)})),U.default.createElement(Cv,{...l,hiddenTextDescribedById:R}))})),Gy=t.createContext(null),Zy="button";function Qy(e){let{id:r,data:n,disabled:i=!1,attributes:o}=e;const a=lv("Droppable"),{activators:s,activatorEvent:l,active:d,activeNodeRect:c,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(Hy),{role:g=Zy,roleDescription:p="draggable",tabIndex:m=0}=null!=o?o:{},b=(null==d?void 0:d.id)===r,v=t.useContext(b?Ky:Gy),[y,x]=ov(),[w,$]=ov(),C=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:n,handler:i}=t;return e[n]=e=>{i(e,r)},e}),{})),[e,r])}(s,r),S=nv(n);tv((()=>(f.set(r,{id:r,key:a,node:y,activatorNode:w,data:S}),()=>{const e=f.get(r);e&&e.key===a&&f.delete(r)})),[f,r]);return{active:d,activatorEvent:l,activeNodeRect:c,attributes:t.useMemo((()=>({role:g,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||g!==Zy)||void 0,"aria-roledescription":p,"aria-describedby":u.draggable})),[i,g,m,b,p,u.draggable]),isDragging:b,listeners:i?void 0:C,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const Jy={timeout:25};function ex(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function tx(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function rx(e){return null!==e&&e>=0}const nx=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=ex(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},ix={scaleX:1,scaleY:1},ox=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...ix}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...ix}:i<r&&i>=a?{x:0,y:s.height+l,...ix}:{x:0,y:0,...ix}};const ax="Sortable",sx=U.default.createContext({activeIndex:-1,containerId:ax,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:nx,disabled:{draggable:!1,droppable:!1}});function lx(e){let{children:r,id:n,items:i,strategy:o=nx,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:d,over:c,measureDroppableContainers:u}=t.useContext(Wy),f=lv(ax,n),h=Boolean(null!==l.rect),g=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),p=null!=s,m=s?g.indexOf(s.id):-1,b=c?g.indexOf(c.id):-1,v=t.useRef(g),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(g,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(a);tv((()=>{y&&p&&u(g)}),[y,g,p,u]),t.useEffect((()=>{v.current=g}),[g]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:g,overIndex:b,useDragOverlay:h,sortedRects:tx(g,d),strategy:o})),[m,f,w.draggable,w.droppable,x,g,b,d,h,o]);return U.default.createElement(sx.Provider,{value:$},r)}const dx=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return ex(r,n,i).indexOf(t)},cx=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:d}=e;return!(!d||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},ux={duration:200,easing:"ease"},fx="transform",hx=gv.Transition.toString({property:fx,duration:0,easing:"linear"}),gx={roleDescription:"sortable"};function px(e){let{animateLayoutChanges:r=cx,attributes:n,disabled:i,data:o,getNewIndex:a=dx,id:s,strategy:l,resizeObserverConfig:d,transition:c=ux}=e;const{items:u,containerId:f,activeIndex:h,disabled:g,disableTransforms:p,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(sx),x=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,g),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...o})),[f,o,w,u]),C=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:j,isOver:k,setNodeRef:D}=function(e){let{data:r,disabled:n=!1,id:i,resizeObserverConfig:o}=e;const a=lv("Droppable"),{active:s,dispatch:l,over:d,measureDroppableContainers:c}=t.useContext(Hy),u=t.useRef({disabled:n}),f=t.useRef(!1),h=t.useRef(null),g=t.useRef(null),{disabled:p,updateMeasurementsFor:m,timeout:b}={...Jy,...o},v=nv(null!=m?m:i),y=Ey({callback:t.useCallback((()=>{f.current?(null!=g.current&&clearTimeout(g.current),g.current=setTimeout((()=>{c(Array.isArray(v.current)?v.current:[v.current]),g.current=null}),b)):f.current=!0}),[b]),disabled:p||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=ov(x),C=nv(r);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),tv((()=>(l({type:Sv.RegisterDroppable,element:{id:i,key:a,disabled:n,node:w,rect:h,data:C}}),()=>l({type:Sv.UnregisterDroppable,key:a,id:i}))),[i]),t.useEffect((()=>{n!==u.current.disabled&&(l({type:Sv.SetDroppableDisabled,id:i,key:a,disabled:n}),u.current.disabled=n)}),[i,a,n,l]),{active:s,rect:h,isOver:(null==d?void 0:d.id)===i,node:w,over:d,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...d}}),{active:E,activatorEvent:T,activeNodeRect:F,attributes:O,setNodeRef:I,listeners:M,isDragging:_,over:A,setActivatorNodeRef:B,transform:R}=Qy({id:s,data:$,attributes:{...gx,...n},disabled:x.draggable}),z=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>e=>{r.forEach((t=>t(e)))}),r)}(D,I),P=Boolean(E),L=P&&!p&&rx(h)&&rx(b),N=!v&&_,H=N&&L?R:null,W=L?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:F,activeIndex:h,overIndex:b,index:w}):null,V=rx(h)&&rx(b)?a({id:s,items:u,activeIndex:h,overIndex:b}):w,Y=null==E?void 0:E.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:f}),K=u!==U.current.items,q=r({active:E,containerId:f,isDragging:_,isSorting:P,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:c,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:r,index:n,node:i,rect:o}=e;const[a,s]=t.useState(null),l=t.useRef(n);return tv((()=>{if(!r&&n!==l.current&&i.current){const e=o.current;if(e){const t=zv(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==l.current&&(l.current=n)}),[r,n,i,o]),t.useEffect((()=>{a&&s(null)}),[a]),a}({disabled:!q,index:w,node:j,rect:S});return t.useEffect((()=>{P&&U.current.newIndex!==V&&(U.current.newIndex=V),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[P,V,f,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:E,activeIndex:h,attributes:O,data:$,rect:S,index:w,newIndex:V,items:u,isOver:k,isSorting:P,isDragging:_,listeners:M,node:j,overIndex:b,over:A,setNodeRef:z,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:I,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return hx;if(N&&!fv(T)||!c)return;if(P||q)return gv.Transition.toString({...c,property:fx});return}()}}function mx(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const bx=[iy.Down,iy.Right,iy.Up,iy.Left],vx=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(bx.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case iy.Down:n.top<o.top&&t.push(r);break;case iy.Up:n.top>o.top&&t.push(r);break;case iy.Left:n.left>o.left&&t.push(r);break;case iy.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=Fv(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Fv(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(Ev)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let d=Ov(l,"id");if(d===(null==a?void 0:a.id)&&l.length>1&&(d=l[1].id),null!=d){const e=o.get(r.id),t=o.get(d),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Lv(l).some(((e,t)=>s[t]!==e)),i=yx(e,t),o=function(e,t){if(!mx(e)||!mx(t))return!1;if(!yx(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),d=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},c={x:a.left,y:a.top};return d.x&&d.y?c:uv(c,d)}}}};function yx(e,t){return!(!mx(e)||!mx(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class xx extends by{}xx.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>wx(e.target)}];function wx(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends dy{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>wx(e.target)}];const $x=q.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Cx=q.default(Qu)`
    color: ${ul.text};
    ${Fd({textSize:"body-md"})}

    ${vl.MaxWidth.sm} {
        display: none;
    }
`,Sx=q.default(ap)`
    padding: 3.5rem 1.25rem 2.5rem;
`,jx=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ul.text};
    ${Fd({textSize:"body-md"})}
`,kx=t=>{var{children:r,visible:n,onMobileClose:o}=t,a=G(t,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",l=i.useTheme(),d=bl["sm-max"]({theme:l}),c=Jd.useMediaQuery({maxWidth:d}),u=()=>{o&&o()},f=()=>"string"==typeof r?e.jsx(exports.Typography.BodyMD,{children:r}):r;return e.jsxs(e.Fragment,{children:[n&&e.jsx($x,Object.assign({"data-testid":s},a,{children:e.jsx(Cx,{children:f()})})),c&&e.jsx(np,{show:null!=n&&n,onOverlayClick:u,children:e.jsx(Sx,{onClose:u,children:e.jsx(jx,{children:f()})})})]})},Dx=q.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Ex=r=>{var n,o,{children:a,popoverContent:s,trigger:l="click",position:d="top",zIndex:c,rootNode:u,customOffset:f,delay:h,onPopoverAppear:g,onPopoverDismiss:m}=r,b=G(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,y]=t.useState(!1),x=t.useRef(null),w=t.useRef(null),$=i.useTheme(),C=bl["sm-max"]({theme:$}),S=Jd.useMediaQuery({maxWidth:C}),{refs:j,floatingStyles:k,context:D}=p.useFloating({open:v,placement:d,whileElementsMounted:p.autoUpdate,middleware:[p.offset(null!=f?f:16),p.flip(),p.shift({limiter:p.limitShift()})],onOpenChange:e=>{y(e),v!==e&&B(e)}}),E=Jh(),T=S?"click":l,F=p.useClick(D,{ignoreMouse:"hover"===T}),O=p.useDismiss(D),I=p.useHover(D,{enabled:"hover"===T,delay:{open:null!==(n=null==h?void 0:h.open)&&void 0!==n?n:0,close:null!==(o=null==h?void 0:h.close)&&void 0!==o?o:500}}),{getReferenceProps:M,getFloatingProps:_}=p.useInteractions([F,O,I]),A=()=>{y(!1),B(!1)},B=e=>{e&&g&&g(),!e&&m&&m()};return e.jsxs(e.Fragment,{children:[e.jsx(Dx,Object.assign({ref:e=>{x.current=e,j.setReference(e)}},M({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:a})),v&&e.jsx(p.FloatingPortal,{root:u,children:e.jsx(p.FloatingFocusManager,{context:D,children:e.jsx("div",Object.assign({ref:e=>{w.current=e,j.setFloating(e)},style:Object.assign(Object.assign({},k),{outline:"none",zIndex:null!=c?c:E})},_(),{children:"function"==typeof s?s():e.jsx(kx,{visible:!0,onMobileClose:A,children:s})}))})})]})},Tx=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Fx=q.default.span`
    color: ${ul["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Tx(e)}

    &:hover,
    &:focus-visible {
        color: ${ul["text-hover"]};
        ${({$hoverStyle:e})=>Tx(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Ox=q.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Ix=t=>{var{ariaLabel:r,content:n,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=t,s=G(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!n;return e.jsx(Ex,Object.assign({},s,{children:e.jsxs(Fx,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a,"aria-label":null!=r?r:l?void 0:"More info",children:[n,i&&e.jsx(Ox,{$standalone:!l,children:i})]})}))},Mx=q.default.div`
    padding-left: ${pl["spacing-4"]};
    display: inline;
`,_x=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e.jsx(Mx,{children:e.jsx(Ix,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e.jsx(d.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Ax=q.default.label`
    color: ${ul["text-subtle"]};
    margin-bottom: ${pl["spacing-8"]};
    display: inline-block;

    ${fl["form-label"]}
    ${Fd()}
    font-weight: ${fl.Spec["weight-semibold"]};
`,Bx=q.default.p`
    ${fl["body-sm-semibold"]}
    color: ${ul["text-error"]};
    margin-top: ${pl["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Rx=q.default.span`
    ${fl["form-description"]}
    color: ${ul["text-subtler"]};
    display: block;
`,zx=t=>{var{children:r,addon:n,subtitle:i,"data-testid":o}=t,a=G(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Ax,Object.assign({},a,{children:[r,n&&n.type&&("popover"===(null==n?void 0:n.type)?e.jsx(_x,{addon:n}):null),"string"==typeof i?e.jsx(Rx,Object.assign({"data-testid":o?`${o}-subtitle`:"subtitle"},a,{children:i})):i]}))},Px=t=>e.jsx(Bx,Object.assign({},t)),Lx=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${pl["spacing-32"]};
    }
`,Nx=q.default.div`
    ${Lx}
`,Hx=q.default(Ig)`
    ${Lx}
`,Wx=q.default(zg)`
    ${Lx}
`,Vx=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||d||c)?"v2-grid":!s&&(u||f||h||g||p||m||b)?"grid":s||"flex",x=()=>v||(i?`${i}-error-message`:"error-message"),w=()=>!!n;const $=(e=>{switch(e){case"v2-grid":return Wx;case"grid":return Hx;case"flex":return Nx}})(y);return e.jsxs($,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:c};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&("string"==typeof r?e.jsx(zx,{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:r}):e.jsx(zx,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r))),(()=>{const e={"aria-invalid":w(),"aria-describedby":w()&&x()};return t.Children.map(a,(r=>t.cloneElement(r,e)))})(),n&&e.jsx(Bx,{id:x(),tabIndex:0,"data-testid":x(),children:n})]}))};function Yx(e,t){return Yx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Yx(e,t)}function Ux(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Kx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function qx(e){return null!==e&&1===e.length?e[0]:e.slice()}function Xx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Gx(e,t){return Zx(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Zx(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Qx=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Xx(r.getMouseEventMap())}))}Ux(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Gx(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Xx(r.getKeyDownEventMap()),Ux(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Xx(r.getMouseEventMap()),Ux(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Xx(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:qx(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:qx(r.state.value)};return r.props.renderTrack(i,o)};let n=Kx(t.value);n.length||(n=Kx(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Gx(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=U.default.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Yx(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Kx(e.value);return r.length?t.pending?null:{value:r.map((t=>Gx(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return qx(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Gx(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,d=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:d,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=Gx(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Gx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Gx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=Zx(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=Zx(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](qx(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return U.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,o)},t}(U.default.Component);Qx.displayName="ReactSlider",Qx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>U.default.createElement("div",e),renderTrack:e=>U.default.createElement("div",e),renderMark:e=>U.default.createElement("span",e)};var Jx=Qx;const ew=q.default.div`
    isolation: isolate;
`,tw=q.default.div`
    margin-top: ${pl["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${pl["spacing-8"]};
`,rw=q.default.div`
    margin-bottom: ${pl["spacing-8"]};
`,nw=q.default(exports.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,iw=q.default(Jx)`
    height: 0.875rem;
`,ow=q.default.div`
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

        background-color: ${ul.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${gl["width-010"]} ${gl.solid}
            ${e=>e.$disabled?ul["border-selected-disabled"]:ul["border-strong"]};
        border-radius: 50%;
    }
`,aw=q.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${ow}:after {
        outline-offset: -1px;
        outline: ${gl["width-040"]} ${gl.solid}
            ${ul["border-selected"]};
    }
`,sw=q.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ml.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ul["border-strong"](e)};
`,lw=r=>{var{value:n,min:i=0,max:o=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:d,disabled:c,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:g,sliderLabelSuffix:p,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=r,$=G(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,S]=t.useState(k()),j=function(){const e=function(){const e=c||u?ul["border-disabled"]:ul["border-strong"],t=c||u?ul["border-selected-disabled"]:ul["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();t.useEffect((()=>{n!==C&&S(k())}),[n]);function k(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(i+a*t);return e}const D=t=>y?y(t):e.jsxs(nw,{children:[g,t,p]});return e.jsxs(ew,Object.assign({},$,{children:[m&&e.jsx(rw,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e.jsxs(nw,{children:[b,t,v]})})()}),e.jsx(iw,{step:a,min:i,max:o,value:C,disabled:c||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&C[t]===e[t])return;const r=[...e];S(r),null==x||x(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else{const t=[...e];S(t),null==w||w(t)}},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e.jsx(aw,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:c?void 0:t.tabIndex,children:e.jsx(ow,{$disabled:c,$readOnly:u})})),renderTrack:(t,r)=>e.jsx(sw,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:j[r.index]}))}),h&&e.jsxs(tw,{children:[e.jsx("div",{children:D(i)}),e.jsx("div",{children:D(o)})]})]}))},dw=q.default.div`
    display: flex;
    margin-bottom: ${pl["spacing-16"]};
    align-items: baseline;
`,cw=q.default.div`
    margin: 0 0.5rem;
`,uw=q.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,fw=q.default.div`
    flex: 1;
    border-radius: ${ml.sm} ${ml.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=ul["bg-strongest"];return e.$disabled&&e.$selected?t=ul["bg-selected-stronger-disabled"]:e.$disabled?t=ul["bg-disabled"]:e.$selected&&(t=ul["bg-selected-stronger"]),i.css`
            background-color: ${t};
        `}}
`,hw=q.default(lw)`
    margin-top: -0.3125rem;
`,gw=r=>{var{bins:n=[],interval:i,disabled:o,readOnly:a,value:s,showRangeLabels:l,rangeLabelPrefix:d,rangeLabelSuffix:c,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:g,renderRangeLabel:p}=r,m=G(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=n.map((e=>e.count)),v=Math.max(...b),y=n.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,C]=t.useState(D()),S=t.useMemo((()=>{const e=[...n].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===w+i*n));t?r.push(t):r.push({count:0,minValue:w+i*n})}return r}),[n,i]);t.useEffect((()=>{s!==$&&C(D())}),[s]);const j=e=>{const[t,r]=e,n=[t,r];C(n),null==f||f(n)},k=e=>{const[t,r]=e,n=[t,r];C(n),null==h||h(n)};function D(){return null!=s?s:[w,w+i]}const E=t=>p?p(t):e.jsxs(exports.Typography.BodyBL,{children:[d,t,c]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(dw,{children:[E($[0]),e.jsx(cw,{children:"-"}),E($[1])]}),S.every((e=>0===e.count))&&g?g():e.jsxs(e.Fragment,{children:[e.jsx(uw,{children:S.map(((t,r)=>{const n=t.count/v;return e.jsx(fw,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:o||a},r)}))}),e.jsx(hw,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:o,readOnly:a,ariaLabels:u,onChange:j,onChangeEnd:k})]})]}))},pw=q.default(yh)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&i.css`
            padding-left: ${pl["spacing-16"]};
            padding-right: ${e.$showClear?0:pl["spacing-16"]};
        `}
`,mw=q.default(xh)`
    height: auto;
    padding: ${pl["spacing-12"]} ${pl["spacing-16"]};

    cursor: pointer;
    color: ${ul.icon};

    ${e=>"no-border"===e.$styleType&&i.css`
            margin-right: -${pl["spacing-12"]};
        `}
`,bw=q.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,vw=q.default.div`
    display: flex;
    width: 100%;
`,yw=q.default(bh)`
    display: flex;
    align-items: center;
    width: 100%;
`,xw=U.default.forwardRef(((r,n)=>{var{value:i,spacing:o,type:a,error:s,disabled:l,readOnly:d,onChange:c,onClear:u,allowClear:f=!1,className:h,styleType:g="bordered"}=r,p=G(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=((e,t)=>"tel"===e&&!!t)(a,o),b=t.useRef(null);t.useImperativeHandle(n,(()=>b.current),[]);const v=Lc({ref:b,formatter:e=>m?Ac.transformWithSpaces(e,o):e}),y=e=>{c&&(m?w(e):c(e))},x=()=>{u&&u(),b&&b.current&&b.current.focus()},w=e=>{const t=v();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==c||c(e),n()},$=i?(e=>e?m?Ac.transformWithSpaces(e,o):e:"")(i):i,C=f&&!l&&!d&&!!i,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(pw,Object.assign({"data-testid":"input",ref:b,disabled:l,value:$,onChange:y,type:a,readOnly:d,$showClear:C,$styleType:g},p)),C&&e.jsx(mw,{onClick:x,type:"button",$styleType:g,children:e.jsx(bw,{"aria-hidden":!0})})]});return e.jsx(e.Fragment,{children:"no-border"===g?e.jsx(vw,{className:h,children:S()}):e.jsx(yw,{$disabled:l,$error:s,$readOnly:d,className:h,children:S()})})})),ww=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(xw,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var $w=fa;var Cw=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Sw=function(e){return this.__data__.get(e)};var jw=function(e){return this.__data__.has(e)},kw=fa,Dw=ha,Ew=Ma;var Tw=function(e,t){var r=this.__data__;if(r instanceof kw){var n=r.__data__;if(!Dw||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ew(n)}return r.set(e,t),this.size=r.size,this},Fw=fa,Ow=function(){this.__data__=new $w,this.size=0},Iw=Cw,Mw=Sw,_w=jw,Aw=Tw;function Bw(e){var t=this.__data__=new Fw(e);this.size=t.size}Bw.prototype.clear=Ow,Bw.prototype.delete=Iw,Bw.prototype.get=Mw,Bw.prototype.has=_w,Bw.prototype.set=Aw;var Rw=Bw;var zw=Ma,Pw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Lw=function(e){return this.__data__.has(e)};function Nw(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new zw;++t<r;)this.add(e[t])}Nw.prototype.add=Nw.prototype.push=Pw,Nw.prototype.has=Lw;var Hw=function(e,t){return e.has(t)},Ww=Nw,Vw=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Yw=Hw;var Uw=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(t);if(d&&c)return d==t&&c==e;var u=-1,f=!0,h=2&r?new Ww:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var g=e[u],p=t[u];if(n)var m=a?n(p,g,u,t,e,o):n(g,p,u,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Vw(t,(function(e,t){if(!Yw(h,t)&&(g===e||i(g,e,r,n,o)))return h.push(t)}))){f=!1;break}}else if(g!==p&&!i(g,p,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var Kw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var qw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Xw=Ai.Uint8Array,Gw=qo,Zw=Uw,Qw=Kw,Jw=qw,e$=Bi?Bi.prototype:void 0,t$=e$?e$.valueOf:void 0;var r$=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Xw(e),new Xw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Gw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Qw;case"[object Set]":var l=1&n;if(s||(s=Jw),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=Zw(s(e),s(t),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(t$)return t$.call(e)==t$.call(t)}return!1};var n$=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},i$=Oi;var o$=function(e,t,r){var n=t(e);return i$(e)?n:n$(n,r(e))};var a$=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},s$=function(){return[]},l$=Object.prototype.propertyIsEnumerable,d$=Object.getOwnPropertySymbols,c$=d$?function(e){return null==e?[]:(e=Object(e),a$(d$(e),(function(t){return l$.call(e,t)})))}:s$;var u$=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},f$=Ki,h$=qi;var g$=function(e){return h$(e)&&"[object Arguments]"==f$(e)},p$=qi,m$=Object.prototype,b$=m$.hasOwnProperty,v$=m$.propertyIsEnumerable,y$=g$(function(){return arguments}())?g$:function(e){return p$(e)&&b$.call(e,"callee")&&!v$.call(e,"callee")},x$={exports:{}};var w$=function(){return!1};!function(e,t){var r=Ai,n=w$,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(x$,x$.exports);var $$=x$.exports,C$=/^(?:0|[1-9]\d*)$/;var S$=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&C$.test(e))&&e>-1&&e%1==0&&e<t};var j$=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},k$=Ki,D$=j$,E$=qi,T$={};T$["[object Float32Array]"]=T$["[object Float64Array]"]=T$["[object Int8Array]"]=T$["[object Int16Array]"]=T$["[object Int32Array]"]=T$["[object Uint8Array]"]=T$["[object Uint8ClampedArray]"]=T$["[object Uint16Array]"]=T$["[object Uint32Array]"]=!0,T$["[object Arguments]"]=T$["[object Array]"]=T$["[object ArrayBuffer]"]=T$["[object Boolean]"]=T$["[object DataView]"]=T$["[object Date]"]=T$["[object Error]"]=T$["[object Function]"]=T$["[object Map]"]=T$["[object Number]"]=T$["[object Object]"]=T$["[object RegExp]"]=T$["[object Set]"]=T$["[object String]"]=T$["[object WeakMap]"]=!1;var F$=function(e){return E$(e)&&D$(e.length)&&!!T$[k$(e)]};var O$=function(e){return function(t){return e(t)}},I$={exports:{}};!function(e,t){var r=Ii,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(I$,I$.exports);var M$=I$.exports,_$=F$,A$=O$,B$=M$&&M$.isTypedArray,R$=B$?A$(B$):_$,z$=u$,P$=y$,L$=Oi,N$=$$,H$=S$,W$=R$,V$=Object.prototype.hasOwnProperty;var Y$=function(e,t){var r=L$(e),n=!r&&P$(e),i=!r&&!n&&N$(e),o=!r&&!n&&!i&&W$(e),a=r||n||i||o,s=a?z$(e.length,String):[],l=s.length;for(var d in e)!t&&!V$.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||H$(d,l))||s.push(d);return s},U$=Object.prototype;var K$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||U$)};var q$=function(e,t){return function(r){return e(t(r))}},X$=q$(Object.keys,Object),G$=K$,Z$=X$,Q$=Object.prototype.hasOwnProperty;var J$=function(e){if(!G$(e))return Z$(e);var t=[];for(var r in Object(e))Q$.call(e,r)&&"constructor"!=r&&t.push(r);return t},eC=so,tC=j$;var rC=function(e){return null!=e&&tC(e.length)&&!eC(e)},nC=Y$,iC=J$,oC=rC;var aC=function(e){return oC(e)?nC(e):iC(e)},sC=o$,lC=c$,dC=aC;var cC=function(e){return sC(e,dC,lC)},uC=Object.prototype.hasOwnProperty;var fC=function(e,t,r,n,i,o){var a=1&r,s=cC(e),l=s.length;if(l!=cC(t).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in t:uC.call(t,c)))return!1}var u=o.get(e),f=o.get(t);if(u&&f)return u==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var g=a;++d<l;){var p=e[c=s[d]],m=t[c];if(n)var b=a?n(m,p,c,t,e,o):n(p,m,c,e,t,o);if(!(void 0===b?p===m||i(p,m,r,n,o):b)){h=!1;break}g||(g="constructor"==c)}if(h&&!g){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return o.delete(e),o.delete(t),h},hC=Do(Ai,"DataView"),gC=ha,pC=Do(Ai,"Promise"),mC=Do(Ai,"Set"),bC=Do(Ai,"WeakMap"),vC=Ki,yC=ho,xC="[object Map]",wC="[object Promise]",$C="[object Set]",CC="[object WeakMap]",SC="[object DataView]",jC=yC(hC),kC=yC(gC),DC=yC(pC),EC=yC(mC),TC=yC(bC),FC=vC;(hC&&FC(new hC(new ArrayBuffer(1)))!=SC||gC&&FC(new gC)!=xC||pC&&FC(pC.resolve())!=wC||mC&&FC(new mC)!=$C||bC&&FC(new bC)!=CC)&&(FC=function(e){var t=vC(e),r="[object Object]"==t?e.constructor:void 0,n=r?yC(r):"";if(n)switch(n){case jC:return SC;case kC:return xC;case DC:return wC;case EC:return $C;case TC:return CC}return t});var OC=FC,IC=Rw,MC=Uw,_C=r$,AC=fC,BC=OC,RC=Oi,zC=$$,PC=R$,LC="[object Arguments]",NC="[object Array]",HC="[object Object]",WC=Object.prototype.hasOwnProperty;var VC=function(e,t,r,n,i,o){var a=RC(e),s=RC(t),l=a?NC:BC(e),d=s?NC:BC(t),c=(l=l==LC?HC:l)==HC,u=(d=d==LC?HC:d)==HC,f=l==d;if(f&&zC(e)){if(!zC(t))return!1;a=!0,c=!1}if(f&&!c)return o||(o=new IC),a||PC(e)?MC(e,t,r,n,i,o):_C(e,t,l,r,n,i,o);if(!(1&r)){var h=c&&WC.call(e,"__wrapped__"),g=u&&WC.call(t,"__wrapped__");if(h||g){var p=h?e.value():e,m=g?t.value():t;return o||(o=new IC),i(p,m,r,n,o)}}return!!f&&(o||(o=new IC),AC(e,t,r,n,i,o))},YC=qi;var UC=function e(t,r,n,i,o){return t===r||(null==t||null==r||!YC(t)&&!YC(r)?t!=t&&r!=r:VC(t,r,n,i,e,o))},KC=Rw,qC=UC;var XC=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new KC;if(n)var f=n(d,c,l,e,t,u);if(!(void 0===f?qC(c,d,3,n,u):f))return!1}}return!0},GC=no;var ZC=function(e){return e==e&&!GC(e)},QC=ZC,JC=aC;var eS=function(e){for(var t=JC(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,QC(i)]}return t};var tS=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},rS=XC,nS=eS,iS=tS;var oS=function(e,t){return null!=e&&t in Object(e)},aS=Ja,sS=y$,lS=Oi,dS=S$,cS=j$,uS=ts;var fS=function(e,t,r){for(var n=-1,i=(t=aS(t,e)).length,o=!1;++n<i;){var a=uS(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&cS(i)&&dS(a,i)&&(lS(e)||sS(e))},hS=oS,gS=fS;var pS=UC,mS=as,bS=function(e,t){return null!=e&&gS(e,t,hS)},vS=ro,yS=ZC,xS=tS,wS=ts;var $S=function(e){return function(t){return null==t?void 0:t[e]}},CS=is;var SS=$S,jS=function(e){return function(t){return CS(t,e)}},kS=ro,DS=ts;var ES=function(e){var t=nS(e);return 1==t.length&&t[0][2]?iS(t[0][0],t[0][1]):function(r){return r===e||rS(r,e,t)}},TS=function(e,t){return vS(e)&&yS(t)?xS(wS(e),t):function(r){var n=mS(r,e);return void 0===n&&n===t?bS(r,e):pS(t,n,3)}},FS=function(e){return e},OS=Oi,IS=function(e){return kS(e)?SS(DS(e)):jS(e)};var MS=function(e){return"function"==typeof e?e:null==e?FS:"object"==typeof e?OS(e)?TS(e[0],e[1]):ES(e):IS(e)},_S=MS,AS=rC,BS=aC;var RS=function(e){return function(t,r,n){var i=Object(t);if(!AS(t)){var o=_S(r);t=BS(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var zS=xf,PS=1/0;var LS=function(e){return e?(e=zS(e))===PS||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var NS=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},HS=MS,WS=function(e){var t=LS(e),r=t%1;return t==t?r?t-r:t:0},VS=Math.max;var YS=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:WS(r);return i<0&&(i=VS(n+i,0)),NS(e,HS(t),i)},US=Fi(YS),KS=Fi(RS(YS)),qS=UC;var XS=Fi((function(e,t){return qS(e,t)}));const GS=q.default(Ei.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,ZS=q.default.ul`
    border-bottom-left-radius: ${ml.sm};
    border-bottom-right-radius: ${ml.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${pl["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${ul["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${vl.MaxWidth.sm} {
        max-height: 15rem;
    }
`,QS=q.default.li`
    :hover,
    :focus,
    :active {
        background: ${ul["bg-hover"]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${ul["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${ul["bg-selected-hover"]};
                }
            `}}
`,JS=q.default.button`
    display: flex;
    ${e=>e.$multiSelect?i.css`
                padding: ${pl["spacing-8"]} ${pl["spacing-16"]};
            `:i.css`
                padding: 15px ${pl["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${pl["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${ul["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,ej=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,tj=q.default.div`
    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}
    color: ${ul.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ej}
`,rj=q.default.div`
    color: ${ul["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ej}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${fl["body-md-semibold"]}
                `:i.css`
                    ${fl["body-baseline-regular"]}
                `}
`,nj=q.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${tj} {
                        display: inline;
                    }

                    ${rj} {
                        display: inline;
                        margin-left: ${pl["spacing-8"]};
                    }
                `}}}
`,ij=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,oj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,aj=q.default(lf)`
    flex-shrink: 0;
    margin-right: ${pl["spacing-16"]};
`,sj=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${pl["spacing-16"]} 0 ${pl["spacing-8"]} 0;
`,lj=q.default.button`
    ${e=>"small"===e.$variant?fl["body-md-semibold"]:fl["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${ul["text-primary"]};
`,dj=q.default.div`
    width: 100%;
    display: flex;
    padding: 15px ${pl["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}
`,cj=q.default(s.ExclamationCircleFillIcon)`
    height: 1em;
    width: 1em;
    margin-right: ${pl["spacing-4"]};
    color: ${ul["icon-error"]};
`,uj=q.default(ad)`
    margin-right: ${pl["spacing-4"]};
    color: ${ul.icon};
`,fj=e=>"small"===e?1:1.375,hj=e=>i.css`
        height: ${fj(e)}rem;
        width: ${fj(e)}rem;
    `,gj=q.default.li`
    background: ${ul["bg-strong"]};
    display: flex;
    border-radius: ${ml.sm};
    align-items: center;
`,pj=q.default(yh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${pl["spacing-8"]} 0 0;
    width: 100%;
`,mj=q.default(x.MagnifierIcon)`
    ${e=>hj(e.$variant)}
    margin: 0 ${pl["spacing-8"]};
    color: ${ul.icon};
`,bj=q.default(zl)`
    ${e=>hj(e.$variant)}
    padding: 0;
    margin: 0 ${pl["spacing-8"]};
    color: ${ul.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${hj(e.$variant)}
                }
            `}}
`,vj=t.forwardRef(((t,r)=>{const{onClear:n}=t,i=G(t,["onClear"]);return e.jsxs(gj,{children:[e.jsx(mj,{$variant:t.variant}),e.jsx(pj,Object.assign({ref:r,$variant:t.variant},i)),i.value&&e.jsx(bj,{"aria-label":"Clear search",focusOutline:"browser",onClick:n,$variant:t.variant,children:e.jsx(u.CrossIcon,{})})]},"search")})),yj=r=>{var{listItems:n,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:d,searchPlaceholder:c="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:g,multiSelect:p,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:C,onBlur:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:D="default"}=r,E=G(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[T,F]=t.useState(0),[O,I]=t.useState(""),[M,_]=t.useState(null!=n?n:[]),[A,B]=t.useState(0),R=ci({height:A}),z=t.useRef(null),P=t.useRef(null),L=t.useRef([]),N=t.useRef(null),H=t.useRef(null),W=t.useRef(T),V=t.useRef(M),Y=e=>{W.current=e,F(e)},U=e=>{V.current=e,_(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(O)}),[O]),t.useEffect((()=>{if(I(""),l){if(setTimeout((()=>{B(Q())})),g)return;N&&N.current?(N.current.focus(),Y(-1)):L.current[T]&&L.current[T].focus()}else B(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();B(e)}}),[M,y]),t.useEffect((()=>{U(null!=n?n:[]),I(""),Y(0)}),[n]);const K=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=e=>{if("inline"!==$)return!1;let t=0;P&&P.current&&(t=P.current.getBoundingClientRect().width-60);return Ac.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},X=e=>!!KS(m,(t=>XS(t,e))),Z=e=>{if(""===e)U(null!=n?n:[]);else if(f){const t=f(e);U(t)}else{const t=null==n?void 0:n.filter((t=>{const{title:r,secondaryLabel:n}=K(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));U(null!=t?t:[])}},Q=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{var t,r;if(z&&z.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<V.current.length-1){const e=W.current+1;null===(t=L.current[e])||void 0===t||t.focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;null===(r=L.current[e])||void 0===r||r.focus(),Y(W.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},te=e=>{const t=e.target.value;I(t),u&&u()},re=()=>{var e;I(""),null===(e=N.current)||void 0===e||e.focus(),u&&u()},ne=()=>{v&&v()},ie=()=>{S&&S()},oe=t=>e.jsxs(e.Fragment,{children:[e.jsx(ij,{$maxLines:w,"aria-hidden":!0,children:t}),e.jsx(oj,{$maxLines:w,"aria-hidden":!0,children:t})]}),ae=t=>{const{title:r,secondaryLabel:n}=K(t),i=q(r),o=n&&q(n),a=i||o?"next-line":$;return e.jsxs(nj,{$labelDisplayType:a,children:[e.jsx(tj,{$truncateType:x,$maxLines:w,$variant:D,"aria-label":r,children:"middle"===x&&i?oe(r):r}),n&&e.jsx(rj,{$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":n,children:"middle"===x&&o?oe(n):n})]})},se=()=>{if(!v||"success"===y)return M.map(((t,r)=>e.jsx(QS,{$checked:X(t)&&!p,children:e.jsxs(JS,{$hasNextLineLabel:"next-line"===$&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{ee(e,t)},ref:e=>L.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:p,onBlur:ie,$variant:D,children:[p&&e.jsx(aj,{checked:X(t),displaySize:"small"}),C?C(t,{selected:X(t)}):ae(t)]})},((e,t)=>`item_${t}__${o?o(e):e}`)(t,r))))},le=()=>{if(m&&p&&M.length>0&&!O&&"success"===y)return e.jsx(sj,{children:e.jsx(lj,{onClick:b,type:"button",$variant:D,children:0===m.length?"Select all":"Clear all"})},"selectAll")},de=()=>{if(!j&&(O||!d)&&0===M.length&&"success"===y)return e.jsxs(dj,{"data-testid":"list-no-results",$variant:D,children:[e.jsx(cj,{"data-testid":"no-result-icon",$variant:D}),"No results found."]},"noResults")},ce=()=>{if(v&&"loading"===y)return e.jsxs(dj,{"data-testid":"list-loading",$variant:D,children:[e.jsx(uj,{}),"Loading..."]},"loading")},ue=()=>{if(v&&"fail"===y)return e.jsxs(dj,{"data-testid":"list-fail",$variant:D,children:[e.jsx(cj,{"data-testid":"load-error-icon",$variant:D}),"Failed to load. ",e.jsx(lj,{onClick:ne,type:"button",$variant:D,children:"Try again."})]},"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(GS,{style:R,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:z,children:[(()=>{if(l)return e.jsxs(ZS,Object.assign({ref:P,"data-testid":"dropdown-list",width:s,role:"list"},E,{children:[(d||f)&&"success"===y?e.jsx(vj,{ref:N,onChange:te,value:O,placeholder:c,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:re,variant:D}):null,le(),de(),ce(),ue(),se()]}))})(),(()=>{if(l&&k)return e.jsx("div",{ref:H,"data-testid":"custom-cta",children:k(h,M)})})()]})})},xj=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return i.css`
                border-bottom: ${gl["width-010"]} ${gl.solid}
                    ${ul.border};
            `}}

    ${e=>e.$readOnly?i.css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?i.css`
                        flex-direction: row-reverse;
                        margin: 0 ${pl["spacing-16"]};
                    `:i.css`
                        flex-direction: row;
                        margin: 0 ${pl["spacing-16"]};
                    `}
`,wj=q.default(Wh)`
    padding: 0;
    width: auto;
`,$j=q.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${pl["spacing-12"]};
`,Cj=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${hl["duration-250"]} ${hl["ease-default"]};
    margin: 0 ${pl["spacing-12"]};
    display: flex;
    align-items: center;
`,Sj=q.default(f.ChevronDownIcon)`
    color: ${ul.icon};
    height: ${fl.Spec["body-size-baseline"]};
    width: ${fl.Spec["body-size-baseline"]};
`,jj=q.default.div`
    display: flex;
    flex: 1 1 auto;
`,kj=q.default(exports.Typography.BodyBL)`
    text-align: left;
    ${Pl(2)}
    text-overflow: ellipsis;
`,Dj=q.default(kj)`
    color: ${ul["text-subtler"]};
`,Ej=q.default.div`
    width: 1px;
    background: ${ul.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return i.css`
                display: none;
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin: 0 ${pl["spacing-12"]};
                `:i.css`
                    margin: 0 ${pl["spacing-12"]} 0 0;
                `}
`,Tj=q.default(bh)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${pl["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Fj=q.default(bh)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${pl["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Oj=q.default(xw)``,Ij=q.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${fl["body-baseline-regular"]}
    color: ${ul.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return i.css`
                color: ${ul["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin-left: ${e.$readOnly?pl["spacing-4"]:pl["spacing-12"]};
                `:i.css`
                    margin-right: ${e.$readOnly?pl["spacing-4"]:pl["spacing-12"]};
                `};
`,Mj=U.default.forwardRef(((r,n)=>{var{addon:i,error:o,onChange:a,readOnly:s,className:l,onBlur:d}=r,c=G(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:g,searchPlaceholder:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":C}=i.attributes,{position:S}=i,[j,k]=t.useState(y),[D,E]=t.useState(!1),T=t.useRef(null);t.useEffect((()=>{k(y)}),[y]);const F=()=>{if(j)return v?v(j):m?m(j):j.toString()},O=e=>{!e&&w&&w(),e&&$&&$()},I=e=>{e.preventDefault(),c.disabled||(E(!D),O(!D))},M=(e,t)=>{var r;k(e),E(!1),O(!1),T&&(null===(r=T.current)||void 0===r||r.focus()),x&&x(e,t)},_=e=>{a&&a(e)},A=()=>{d&&d()},B=()=>{var e;E(!1),O(!1),T&&(null===(e=T.current)||void 0===e||e.focus())};return e.jsxs(Zh,{className:l,show:D,error:o&&!D,disabled:c.disabled,readOnly:s,onBlur:()=>{E(!1),O(!1),A()},children:[e.jsxs(xj,{$expanded:D,$readOnly:s,$position:S,children:[s?j?e.jsx($j,{children:e.jsx(kj,{"data-testid":"selector-label",children:F()})}):null:e.jsx(wj,{ref:T,type:"button",disabled:c.disabled,"data-testid":C||"addon-selector",onClick:I,children:e.jsxs(e.Fragment,{children:[e.jsxs(jj,{children:[u&&!j&&e.jsx(Dj,{children:u}),j&&e.jsx(kj,{"data-testid":"selector-label",children:F()})]}),e.jsx(Cj,{$expanded:D,children:e.jsx(Sj,{})})]})}),e.jsx(Ej,{$readOnly:s,$position:S}),e.jsx(Oj,Object.assign({ref:n},c,{readOnly:s,error:o,onChange:_,"data-testid":c["data-testid"]||"input",onBlur:A,styleType:"no-border"}))]}),f&&f.length>0?e.jsx(yj,{listItems:f,selectedItems:y?[y]:[],onSelectItem:M,valueExtractor:m,listExtractor:b,visible:D,enableSearch:h,searchFunction:g,searchPlaceholder:p,"data-testid":"dropdown-list",onBlur:A,onDismiss:B}):e.jsx(e.Fragment,{})]})})),_j=U.default.forwardRef(((t,r)=>{var{addon:n,error:i,className:o}=t,a=G(t,["addon","error","className"]);const s=()=>e.jsx(Fj,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],className:o,children:e.jsx(Oj,Object.assign({ref:r},a,{"data-testid":"input",styleType:"no-border"}))});if(!n)return s();{const{type:t="label",position:l="left"}=n,{allowClear:d}=a;switch(t){case"list":{const t=n.attributes;return t.options&&t.options.length>0?e.jsx(Mj,Object.assign({ref:r,addon:n,error:i,className:o},a)):s()}case"custom":{const t=n.attributes;return t.children?e.jsxs(Tj,{$error:i,$disabled:a.disabled,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(Ij,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.children}),e.jsx(Oj,Object.assign({ref:r},a,{allowClear:d&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}default:{const t=n.attributes;return t.value?e.jsxs(Tj,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(Ij,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.value}),e.jsx(Oj,Object.assign({ref:r},a,{allowClear:d&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}}}})),Aj=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(_j,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),Bj=q.default(_j)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":pl["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Rj=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=ul.icon,$activeColor:r=ul["icon-primary"]})=>e?t:r};
    padding: ${pl["spacing-12"]} ${pl["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,zj=q.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Pj=q.default(exports.Typography.BodyBL)`
    color: ${ul["text-subtler"]};
`,Lj=q.default(ad)`
    margin-right: ${pl["spacing-8"]};
    color: ${ul.icon};
`,Nj=q.default.span`
    color: ${ul["text-primary"]};
    text-decoration: underline;
    font-weight: ${fl.Spec["weight-semibold"]};
`,Hj=q.default.span`
    display: flex;
    align-items: center;
    margin-right: ${pl["spacing-8"]};
`,Wj=q.default(C.ExclamationTriangleIcon)`
    color: ${ul["icon-warning"]};
    margin-right: ${pl["spacing-8"]};
    height: 1em;
    width: 1em;
`,Vj=q.default.span`
    color: ${ul["text-warning"]};
`,Yj=q.default(xh)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${fl["body-baseline-regular"]}

    :hover, :active, :focus {
        ${Nj} {
            color: ${ul["text-hover"]};
        }
    }
`;var Uj={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,l=64,d=128,c=256,u=1/0,f=9007199254740991,h=NaN,g=4294967295,p=[["ary",d],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",l],["rearg",c]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",C="[object Map]",S="[object Number]",j="[object Object]",k="[object Promise]",D="[object RegExp]",E="[object Set]",T="[object String]",F="[object Symbol]",O="[object WeakMap]",I="[object ArrayBuffer]",M="[object DataView]",_="[object Float32Array]",A="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",z="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,oe=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,de=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ce=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",Ce="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",Ee="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Fe="["+$e+"]",Oe="["+Ee+"]",Ie="["+Ce+"]",Me="\\d+",_e="["+Se+"]",Ae="["+je+"]",Be="[^"+$e+Ee+Me+Se+je+ke+"]",Re="\\ud83c[\\udffb-\\udfff]",ze="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",He="\\u200d",We="(?:"+Ae+"|"+Be+")",Ve="(?:"+Ne+"|"+Be+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+Ie+"|"+Re+")"+"?",qe="["+De+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[ze,Pe,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[_e,Pe,Le].join("|")+")"+Xe,Ze="(?:"+[ze+Ie+"?",Ie,Pe,Le,Fe].join("|")+")",Qe=RegExp(Te,"g"),Je=RegExp(Ie,"g"),et=RegExp(Re+"(?="+Re+")|"+Ze+Xe,"g"),tt=RegExp([Ne+"?"+Ae+"+"+Ye+"(?="+[Oe,Ne,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Oe,Ne+We,"$"].join("|")+")",Ne+"?"+We+"+"+Ye,Ne+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),rt=RegExp("["+He+$e+Ce+De+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,at={};at[_]=at[A]=at[B]=at[R]=at[z]=at[P]=at[L]=at[N]=at[H]=!0,at[m]=at[b]=at[I]=at[v]=at[M]=at[y]=at[x]=at[w]=at[C]=at[S]=at[j]=at[D]=at[E]=at[T]=at[O]=!1;var st={};st[m]=st[b]=st[I]=st[M]=st[v]=st[y]=st[_]=st[A]=st[B]=st[R]=st[z]=st[C]=st[S]=st[j]=st[D]=st[E]=st[T]=st[F]=st[P]=st[L]=st[N]=st[H]=!0,st[x]=st[w]=st[O]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dt=parseFloat,ct=parseInt,ut="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),gt=t&&!t.nodeType&&t,pt=gt&&e&&!e.nodeType&&e,mt=pt&&pt.exports===gt,bt=mt&&ut.process,vt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,Ct=vt&&vt.isSet,St=vt&&vt.isTypedArray;function jt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ft(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Ot(e,t){return!!(null==e?0:e.length)&&Nt(e,t,0)>-1}function It(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function _t(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function At(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Bt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Yt("length");function Pt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Nt(e,t,r){return t==t?function(e,t,r){var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Wt,r)}function Ht(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:h}function Yt(e){return function(t){return null==t?r:t[e]}}function Ut(e){return function(t){return null==e?r:e[t]}}function Kt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function qt(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,hr(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&Nt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Nt(t,e[r],0)>-1;);return r}var rr=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+lt[e]}function or(e){return rt.test(e)}function ar(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function sr(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var s=e[r];s!==t&&s!==o||(e[r]=o,a[i++]=r)}return a}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):zt(e)}function fr(e){return or(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var gr=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var pr=function e(t){var oe=(t=null==t?ht:pr.defaults(ht.Object(),t,pr.pick(ht,it))).Array,$e=t.Date,Ce=t.Error,Se=t.Function,je=t.Math,ke=t.Object,De=t.RegExp,Ee=t.String,Te=t.TypeError,Fe=oe.prototype,Oe=Se.prototype,Ie=ke.prototype,Me=t["__core-js_shared__"],_e=Oe.toString,Ae=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=_e.call(ke),Le=ht._,Ne=De("^"+_e.call(Ae).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:r,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:r,Ue=sr(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Xe=Fe.splice,Ge=We?We.isConcatSpreadable:r,Ze=We?We.iterator:r,et=We?We.toStringTag:r,rt=function(){try{var e=fo(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,gt=je.ceil,pt=je.floor,bt=ke.getOwnPropertySymbols,vt=He?He.isBuffer:r,zt=t.isFinite,Ut=Fe.join,mr=sr(ke.keys,ke),br=je.max,vr=je.min,yr=$e.now,xr=t.parseInt,wr=je.random,$r=Fe.reverse,Cr=fo(t,"DataView"),Sr=fo(t,"Map"),jr=fo(t,"Promise"),kr=fo(t,"Set"),Dr=fo(t,"WeakMap"),Er=fo(ke,"create"),Tr=Dr&&new Dr,Fr={},Or=zo(Cr),Ir=zo(Sr),Mr=zo(jr),_r=zo(kr),Ar=zo(Dr),Br=We?We.prototype:r,Rr=Br?Br.valueOf:r,zr=Br?Br.toString:r;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Ae.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Nr(){}function Hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Xr(e,t){var r=Va(e),n=!r&&Wa(e),i=!r&&!n&&qa(e),o=!r&&!n&&!i&&ds(e),a=r||n||i||o,s=a?Xt(e.length,Ee):[],l=s.length;for(var d in e)!t&&!Ae.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yo(d,l))||s.push(d);return s}function Gr(e){var t=e.length;return t?e[qn(0,t-1)]:r}function Zr(e,t){return Ao(Ti(e),sn(t,0,e.length))}function Qr(e){return Ao(Ti(e))}function Jr(e,t,n){(n!==r&&!La(e[t],n)||n===r&&!(t in e))&&on(e,t,n)}function en(e,t,n){var i=e[t];Ae.call(e,t)&&La(i,n)&&(n!==r||t in e)||on(e,t,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Fi(t,Os(t),e)}function on(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(e,t){for(var n=-1,i=t.length,o=oe(i),a=null==e;++n<i;)o[n]=a?r:ks(e,t[n]);return o}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ln(e,t,n,i,o,a){var s,l=1&t,d=2&t,c=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!es(e))return e;var u=Va(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ti(e,s)}else{var f=po(e),h=f==w||f==$;if(qa(e))return Ci(e,l);if(f==j||f==m||h&&!o){if(s=d||h?{}:bo(e),!l)return d?function(e,t){return Fi(e,go(e),t)}(e,function(e,t){return e&&Fi(t,Is(t),e)}(s,e)):function(e,t){return Fi(e,ho(e),t)}(e,nn(s,e))}else{if(!st[f])return o?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case I:return Si(e);case v:case y:return new n(+e);case M:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case _:case A:case B:case R:case z:case P:case L:case N:case H:return ji(e,r);case C:return new n;case S:case T:return new n(e);case D:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case E:return new n;case F:return i=e,Rr?ke(Rr.call(i)):{}}var i}(e,f,l)}}a||(a=new qr);var g=a.get(e);if(g)return g;a.set(e,s),as(e)?e.forEach((function(r){s.add(ln(r,t,n,r,e,a))})):rs(e)&&e.forEach((function(r,i){s.set(i,ln(r,t,n,i,e,a))}));var p=u?r:(c?d?io:no:d?Is:Os)(e);return Dt(p||e,(function(r,i){p&&(r=e[i=r]),en(s,i,ln(r,t,n,i,e,a))})),s}function dn(e,t,n){var i=n.length;if(null==e)return!i;for(e=ke(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}function cn(e,t,i){if("function"!=typeof e)throw new Te(n);return Oo((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,o=Ot,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=Mt(t,Zt(r))),n?(o=It,a=!1):t.length>=200&&(o=Jt,a=!1,t=new Kr(t));e:for(;++i<s;){var c=e[i],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var f=d;f--;)if(t[f]===u)continue e;l.push(c)}else o(t,u,n)||l.push(c)}return l}Pr.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Er?Er(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(e){var t=this.__data__;if(Er){var n=t[e];return n===i?r:n}return Ae.call(t,e)?t[e]:r},Vr.prototype.has=function(e){var t=this.__data__;return Er?t[e]!==r:Ae.call(t,e)},Vr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Er&&t===r?i:t,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Yr.prototype.get=function(e){var t=this.__data__,n=tn(t,e);return n<0?r:t[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,i),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Mi(xn),hn=Mi(wn,!0);function gn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function pn(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(l===r?s==s&&!ls(s):n(s,l)))var l=s,d=a}return d}function mn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):_t(i,s):n||(i[i.length]=s)}return i}var vn=_i(),yn=_i(!0);function xn(e,t){return e&&vn(e,t,Os)}function wn(e,t){return e&&yn(e,t,Os)}function $n(e,t){return Ft(t,(function(t){return Za(e[t])}))}function Cn(e,t){for(var n=0,i=(t=yi(t,e)).length;null!=e&&n<i;)e=e[Ro(t[n++])];return n&&n==i?e:r}function Sn(e,t,r){var n=t(e);return Va(e)?n:_t(n,r(e))}function jn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in ke(e)?function(e){var t=Ae.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch(e){}var o=ze.call(e);i&&(t?e[et]=n:delete e[et]);return o}(e):function(e){return ze.call(e)}(e)}function kn(e,t){return e>t}function Dn(e,t){return null!=e&&Ae.call(e,t)}function En(e,t){return null!=e&&t in ke(e)}function Tn(e,t,n){for(var i=n?It:Ot,o=e[0].length,a=e.length,s=a,l=oe(a),d=1/0,c=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),d=vr(u.length,d),l[s]=!n&&(t||o>=120&&u.length>=120)?new Kr(s&&u):r}u=e[0];var f=-1,h=l[0];e:for(;++f<o&&c.length<d;){var g=u[f],p=t?t(g):g;if(g=n||0!==g?g:0,!(h?Jt(h,p):i(c,p,n))){for(s=a;--s;){var m=l[s];if(!(m?Jt(m,p):i(e[s],p,n)))continue e}h&&h.push(p),c.push(g)}}return c}function Fn(e,t,n){var i=null==(e=Eo(e,t=yi(t,e)))?e:e[Ro(Go(t))];return null==i?r:jt(i,e,n)}function On(e){return ts(e)&&jn(e)==m}function In(e,t,n,i,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,n,i,o,a){var s=Va(e),l=Va(t),d=s?b:po(e),c=l?b:po(t),u=(d=d==m?j:d)==j,f=(c=c==m?j:c)==j,h=d==c;if(h&&qa(e)){if(!qa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||ds(e)?to(e,t,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case I:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case v:case y:case S:return La(+e,+t);case x:return e.name==t.name&&e.message==t.message;case D:case T:return e==t+"";case C:var s=ar;case E:var l=1&n;if(s||(s=dr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=to(s(e),s(t),n,i,o,a);return a.delete(e),c;case F:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,d,n,i,o,a);if(!(1&n)){var g=u&&Ae.call(e,"__wrapped__"),p=f&&Ae.call(t,"__wrapped__");if(g||p){var w=g?e.value():e,$=p?t.value():t;return a||(a=new qr),o(w,$,n,i,a)}}if(!h)return!1;return a||(a=new qr),function(e,t,n,i,o,a){var s=1&n,l=no(e),d=l.length,c=no(t),u=c.length;if(d!=u&&!s)return!1;var f=d;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var g=a.get(e),p=a.get(t);if(g&&p)return g==t&&p==e;var m=!0;a.set(e,t),a.set(t,e);var b=s;for(;++f<d;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,a):i(v,y,h,e,t,a);if(!(x===r?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,n,i,o,a)}(e,t,n,i,In,o))}function Mn(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=ke(e);o--;){var l=n[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var d=(l=n[o])[0],c=e[d],u=l[1];if(s&&l[2]){if(c===r&&!(d in e))return!1}else{var f=new qr;if(i)var h=i(c,u,d,e,t,f);if(!(h===r?In(u,c,3,i,f):h))return!1}}return!0}function _n(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:me).test(zo(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!So(e))return mr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?oe(e.length):[];return fn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?ko(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(e,t){return wo(e)&&jo(t)?ko(Ro(e),t):function(n){var i=ks(n,e);return i===r&&i===t?Ds(n,e):In(t,i,3)}}function Hn(e,t,n,i,o){e!==t&&vn(t,(function(a,s){if(o||(o=new qr),es(a))!function(e,t,n,i,o,a,s){var l=To(e,n),d=To(t,n),c=s.get(d);if(c)return void Jr(e,n,c);var u=a?a(l,d,n+"",e,t,s):r,f=u===r;if(f){var h=Va(d),g=!h&&qa(d),p=!h&&!g&&ds(d);u=d,h||g||p?Va(l)?u=l:Ka(l)?u=Ti(l):g?(f=!1,u=Ci(d,!0)):p?(f=!1,u=ji(d,!0)):u=[]:is(d)||Wa(d)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(d))):f=!1}f&&(s.set(d,u),o(u,d,i,a,s),s.delete(d));Jr(e,n,u)}(e,t,s,n,Hn,i,o);else{var l=i?i(To(e,s),a,s+"",e,t,o):r;l===r&&(l=a),Jr(e,s,l)}}),Is)}function Wn(e,t){var n=e.length;if(n)return yo(t+=t<0?n:0,n)?e[t]:r}function Vn(e,t,r){t=t.length?Mt(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,Zt(lo()));var i=Pn(e,(function(e,r,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;for(;++n<a;){var l=ki(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Ht:Nt,o=-1,a=t.length,s=e;for(e===t&&(t=Ti(t)),r&&(s=Mt(e,Zt(r)));++o<a;)for(var l=0,d=t[o],c=r?r(d):d;(l=i(s,c,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qn(e,t){return e+pt(wr()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>f)return r;do{t%2&&(r+=e),(t=pt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Io(Do(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Ao(r,sn(t,0,r.length))}function Jn(e,t,n,i){if(!es(e))return e;for(var o=-1,a=(t=yi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var d=Ro(t[o]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return e;if(o!=s){var u=l[d];(c=i?i(u,d,l):r)===r&&(c=es(u)?u:yo(t[o+1])?[]:{})}en(l,d,c),l=l[d]}return e}var ei=Tr?function(e,t){return Tr.set(e,t),e}:nl,ti=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Ao(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=oe(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,l=null===t,d=ls(t),c=t===r;o<a;){var u=pt((o+a)/2),f=n(e[u]),h=f!==r,g=null===f,p=f==f,m=ls(f);if(s)var b=i||p;else b=c?p&&(i||h):l?p&&h&&(i||!g):d?p&&h&&!g&&(i||!m):!g&&!m&&(i?f<=t:f<t);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function di(e){if("string"==typeof e)return e;if(Va(e))return Mt(e,di)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function ci(e,t,r){var n=-1,i=Ot,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=It;else if(o>=200){var d=t?null:Xi(e);if(d)return dr(d);a=!1,i=Jt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(c)}else i(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ui(e,t){return null==(e=Eo(e,t=yi(t,e)))||delete e[Ro(Go(t))]}function fi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function gi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,_t([e],t.args))}),r)}function pi(e,t,r){var n=e.length;if(n<2)return n?ci(e[0]):[];for(var i=-1,o=oe(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return ci(bn(o,1),t,r)}function mi(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var l=i<a?t[i]:r;n(s,e[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:Bo(vs(e))}var xi=Gn;function wi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ni(e,t,n)}var $i=lt||function(e){return ht.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ji(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=ls(e),s=t!==r,l=null===t,d=t==t,c=ls(t);if(!l&&!c&&!a&&e>t||a&&s&&d&&!l&&!c||i&&s&&d||!n&&d||!o)return 1;if(!i&&!a&&!c&&e<t||c&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!d)return-1}return 0}function Di(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,d=br(o-a,0),c=oe(l+d),u=!n;++s<l;)c[s]=t[s];for(;++i<a;)(u||i<o)&&(c[r[i]]=e[i]);for(;d--;)c[s++]=e[i++];return c}function Ei(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,d=t.length,c=br(o-s,0),u=oe(c+d),f=!n;++i<c;)u[i]=e[i];for(var h=i;++l<d;)u[h+l]=t[l];for(;++a<s;)(f||i<o)&&(u[h+r[a]]=e[i++]);return u}function Ti(e,t){var r=-1,n=e.length;for(t||(t=oe(n));++r<n;)t[r]=e[r];return t}function Fi(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],d=i?i(n[l],e[l],l,n,e):r;d===r&&(d=e[l]),o?on(n,l,d):en(n,l,d)}return n}function Oi(e,t){return function(r,n){var i=Va(r)?kt:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Ii(e){return Gn((function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&xo(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=ke(t);++i<o;){var l=n[i];l&&e(t,l,i,a)}return t}))}function Mi(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=ke(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function _i(e){return function(t,r,n){for(var i=-1,o=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Ai(e){return function(t){var n=or(t=vs(t))?fr(t):r,i=n?n[0]:t.charAt(0),o=n?wi(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(e){return function(t,n,i){var o=ke(t);if(!Ua(t)){var a=lo(n,3);t=Os(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}function Pi(e){return ro((function(t){var i=t.length,o=i,a=Hr.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Te(n);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var d=ao(s=t[o]),c="wrapper"==d?oo(s):r;l=c&&$o(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[ao(c[0])].apply(l,c[3]):1==s.length&&$o(s)?l[d]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Va(r))return l.plant(r).value();for(var n=0,o=i?t[n].apply(this,e):r;++n<i;)o=t[n].call(this,o);return o}}))}function Li(e,t,n,i,o,a,s,l,c,u){var f=t&d,h=1&t,g=2&t,p=24&t,m=512&t,b=g?r:Ri(e);return function d(){for(var v=arguments.length,y=oe(v),x=v;x--;)y[x]=arguments[x];if(p)var w=so(d),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Di(y,i,o,p)),a&&(y=Ei(y,a,s,p)),v-=$,p&&v<u){var C=lr(y,w);return Ki(e,t,Li,d.placeholder,n,y,C,l,c,u-v)}var S=h?n:this,j=g?S[e]:e;return v=y.length,l?y=function(e,t){var n=e.length,i=vr(t.length,n),o=Ti(e);for(;i--;){var a=t[i];e[i]=yo(a,n)?o[a]:r}return e}(y,l):m&&v>1&&y.reverse(),f&&c<v&&(y.length=c),this&&this!==ht&&this instanceof d&&(j=b||Ri(j)),j.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=di(n),i=di(i)):(n=li(n),i=li(i)),o=e(n,i)}return o}}function Wi(e){return ro((function(t){return t=Mt(t,Zt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return jt(e,n,r)}))}))}))}function Vi(e,t){var n=(t=t===r?" ":di(t)).length;if(n<2)return n?Xn(t,e):t;var i=Xn(t,gt(e/ur(t)));return or(t)?wi(fr(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,n,i){return i&&"number"!=typeof i&&xo(t,n,i)&&(n=i=r),t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r,n){for(var i=-1,o=br(gt((t-e)/(r||1)),0),a=oe(o);o--;)a[n?o:++i]=e,e+=r;return a}(t,n,i=i===r?t<n?1:-1:hs(i),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(e,t,n,i,o,a,d,c,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var g=[e,t,o,h?a:r,h?d:r,h?r:a,h?r:d,c,u,f],p=n.apply(r,g);return $o(e)&&Fo(p,g),p.placeholder=i,Mo(p,e,t)}function qi(e){var t=je[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(gs(r),292))&&zt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Xi=kr&&1/dr(new kr([,-0]))[1]==u?function(e){return new kr(e)}:ll;function Gi(e){return function(t){var r=po(t);return r==C?ar(t):r==E?cr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,g,p){var m=2&t;if(!m&&"function"!=typeof e)throw new Te(n);var b=u?u.length:0;if(b||(t&=-97,u=f=r),g=g===r?g:br(gs(g),0),p=p===r?p:gs(p),b-=f?f.length:0,t&l){var v=u,y=f;u=f=r}var x=m?r:oo(e),w=[e,t,i,u,f,v,y,h,g,p];if(x&&function(e,t){var r=e[1],n=t[1],i=r|n,a=i<131,s=n==d&&8==r||n==d&&r==c&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!a&&!s)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Di(u,l,t[4]):l,e[4]=u?lr(e[3],o):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ei(u,l,t[6]):l,e[6]=u?lr(e[5],o):t[6]);(l=t[7])&&(e[7]=l);n&d&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(p=w[9]=w[9]===r?m?0:e.length:br(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==a?function(e,t,n){var i=Ri(e);return function o(){for(var a=arguments.length,s=oe(a),l=a,d=so(o);l--;)s[l]=arguments[l];var c=a<3&&s[0]!==d&&s[a-1]!==d?[]:lr(s,d);return(a-=c.length)<n?Ki(e,t,Li,o.placeholder,r,s,c,r,r,n-a):jt(this&&this!==ht&&this instanceof o?i:e,this,s)}}(e,t,p):t!=s&&33!=t||f.length?Li.apply(r,w):function(e,t,r,n){var i=1&t,o=Ri(e);return function t(){for(var a=-1,s=arguments.length,l=-1,d=n.length,c=oe(d+s),u=this&&this!==ht&&this instanceof t?o:e;++l<d;)c[l]=n[l];for(;s--;)c[l++]=arguments[++a];return jt(u,i?r:this,c)}}(e,t,i,u);else var $=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return Mo((x?ei:Fo)($,w),e,t)}function Qi(e,t,n,i){return e===r||La(e,Ie[n])&&!Ae.call(i,n)?t:e}function Ji(e,t,n,i,o,a){return es(e)&&es(t)&&(a.set(t,e),Hn(e,t,r,Ji,a),a.delete(t)),e}function eo(e){return is(e)?r:e}function to(e,t,n,i,o,a){var s=1&n,l=e.length,d=t.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var f=-1,h=!0,g=2&n?new Kr:r;for(a.set(e,t),a.set(t,e);++f<l;){var p=e[f],m=t[f];if(i)var b=s?i(m,p,f,t,e,a):i(p,m,f,e,t,a);if(b!==r){if(b)continue;h=!1;break}if(g){if(!Rt(t,(function(e,t){if(!Jt(g,t)&&(p===e||o(p,e,n,i,a)))return g.push(t)}))){h=!1;break}}else if(p!==m&&!o(p,m,n,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function ro(e){return Io(Do(e,r,Yo),e+"")}function no(e){return Sn(e,Os,ho)}function io(e){return Sn(e,Is,go)}var oo=Tr?function(e){return Tr.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Fr[t],n=Ae.call(Fr,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ae.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?An:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Os(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,jo(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return _n(n)?n:r}var ho=bt?function(e){return null==e?[]:(e=ke(e),Ft(bt(e),(function(t){return qe.call(e,t)})))}:pl,go=bt?function(e){for(var t=[];e;)_t(t,ho(e)),e=Ue(e);return t}:pl,po=jn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=Ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yo(e,t){var r=typeof e;return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in ke(t))}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&po(new Cr(new ArrayBuffer(1)))!=M||Sr&&po(new Sr)!=C||jr&&po(jr.resolve())!=k||kr&&po(new kr)!=E||Dr&&po(new Dr)!=O)&&(po=function(e){var t=jn(e),n=t==j?e.constructor:r,i=n?zo(n):"";if(i)switch(i){case Or:return M;case Ir:return C;case Mr:return k;case _r:return E;case Ar:return O}return t});var Co=Me?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function jo(e){return e==e&&!es(e)}function ko(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in ke(n)))}}function Do(e,t,n){return t=br(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=br(r.length-t,0),a=oe(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=oe(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),jt(e,this,s)}}function Eo(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function To(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Fo=_o(ei),Oo=ft||function(e,t){return ht.setTimeout(e,t)},Io=_o(ti);function Mo(e,t,r){var n=t+"";return Io(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Dt(p,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(n),r)))}function _o(e){var t=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ao(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=qn(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var Bo=function(e){var t=_a(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)})),t}));function Ro(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return _e.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Ti(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),r,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Lt(e,lo(t,3),i)}function Vo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=gs(n),o=n<0?br(i+o,0):vr(o,i-1)),Lt(e,lo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?bn(e,1):[]}function Uo(e){return e&&e.length?e[0]:r}var Ko=Gn((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?Tn(t):[]})),qo=Gn((function(e){var t=Go(e),n=Mt(e,bi);return t===Go(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Tn(n,lo(t,2)):[]})),Xo=Gn((function(e){var t=Go(e),n=Mt(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?Tn(n,r,t):[]}));function Go(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Mt(t,(function(e){return yo(e,r)?+e:e})).sort(ki)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return ci(bn(e,1,Ka,!0))})),ra=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),ci(bn(e,1,Ka,!0),lo(t,2))})),na=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,ci(bn(e,1,Ka,!0),r,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ft(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Yt(t))}))}function oa(e,t){if(!e||!e.length)return[];var n=ia(e);return null==t?n:Mt(n,(function(e){return jt(t,r,e)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return pi(Ft(e,Ka))})),la=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),pi(Ft(e,Ka),lo(t,2))})),da=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,pi(Ft(e,Ka),r,t)})),ca=Gn(ia);var ua=Gn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,oa(e,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var ga=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return an(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:r}),new Hr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var pa=Oi((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)}));var ma=zi(Wo),ba=zi(Vo);function va(e,t){return(Va(e)?Dt:fn)(e,lo(t,3))}function ya(e,t){return(Va(e)?Et:hn)(e,lo(t,3))}var xa=Oi((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])}));var wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?oe(e.length):[];return fn(e,(function(e){o[++n]=i?jt(t,e,r):Fn(e,t,r)})),o})),$a=Oi((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?Mt:Pn)(e,lo(t,3))}var Sa=Oi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var ja=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Da(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,d,r,r,r,r,t)}function Ea(e,t){var i;if("function"!=typeof t)throw new Te(n);return e=gs(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var Ta=Gn((function(e,t,r){var n=1;if(r.length){var i=lr(r,so(Ta));n|=s}return Zi(e,n,t,r,i)})),Fa=Gn((function(e,t,r){var n=3;if(r.length){var i=lr(r,so(Fa));n|=s}return Zi(t,n,e,r,i)}));function Oa(e,t,i){var o,a,s,l,d,c,u=0,f=!1,h=!1,g=!0;if("function"!=typeof e)throw new Te(n);function p(t){var n=o,i=a;return o=a=r,u=t,l=e.apply(i,n)}function m(e){var n=e-c;return c===r||n>=t||n<0||h&&e-u>=s}function b(){var e=ka();if(m(e))return v(e);d=Oo(b,function(e){var r=t-(e-c);return h?vr(r,s-(e-u)):r}(e))}function v(e){return d=r,g&&o?p(e):(o=a=r,l)}function y(){var e=ka(),n=m(e);if(o=arguments,a=this,c=e,n){if(d===r)return function(e){return u=e,d=Oo(b,t),f?p(e):l}(c);if(h)return $i(d),d=Oo(b,t),p(c)}return d===r&&(d=Oo(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?br(ms(i.maxWait)||0,t):s,g="trailing"in i?!!i.trailing:g),y.cancel=function(){d!==r&&$i(d),u=0,o=c=a=d=r},y.flush=function(){return d===r?l:v(ka())},y}var Ia=Gn((function(e,t){return cn(e,1,t)})),Ma=Gn((function(e,t,r){return cn(e,ms(t)||0,r)}));function _a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Te(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(_a.Cache||Ur),r}function Aa(e){if("function"!=typeof e)throw new Te(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}_a.Cache=Ur;var Ba=xi((function(e,t){var r=(t=1==t.length&&Va(t[0])?Mt(t[0],Zt(lo())):Mt(bn(t,1),Zt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return jt(e,this,n)}))})),Ra=Gn((function(e,t){var n=lr(t,so(Ra));return Zi(e,s,r,t,n)})),za=Gn((function(e,t){var n=lr(t,so(za));return Zi(e,l,r,t,n)})),Pa=ro((function(e,t){return Zi(e,c,r,r,r,t)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(kn),Ha=Ui((function(e,t){return e>=t})),Wa=On(function(){return arguments}())?On:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Va=oe.isArray,Ya=yt?Zt(yt):function(e){return ts(e)&&jn(e)==I};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=vt||ml,Xa=xt?Zt(xt):function(e){return ts(e)&&jn(e)==y};function Ga(e){if(!ts(e))return!1;var t=jn(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=jn(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==gs(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=wt?Zt(wt):function(e){return ts(e)&&po(e)==C};function ns(e){return"number"==typeof e||ts(e)&&jn(e)==S}function is(e){if(!ts(e)||jn(e)!=j)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&_e.call(r)==Pe}var os=$t?Zt($t):function(e){return ts(e)&&jn(e)==D};var as=Ct?Zt(Ct):function(e){return ts(e)&&po(e)==E};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&jn(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&jn(e)==F}var ds=St?Zt(St):function(e){return ts(e)&&Ja(e.length)&&!!at[jn(e)]};var cs=Ui(zn),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?fr(e):Ti(e);if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ze]());var t=po(e);return(t==C?ar:t==E?dr:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function gs(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function ps(e){return e?sn(gs(e),0,g):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=pe.test(e);return r||be.test(e)?ct(e.slice(2),r?2:8):ge.test(e)?h:+e}function bs(e){return Fi(e,Is(e))}function vs(e){return null==e?"":di(e)}var ys=Ii((function(e,t){if(So(t)||Ua(t))Fi(t,Os(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Ii((function(e,t){Fi(t,Is(t),e)})),ws=Ii((function(e,t,r,n){Fi(t,Is(t),e,n)})),$s=Ii((function(e,t,r,n){Fi(t,Os(t),e,n)})),Cs=ro(an);var Ss=Gn((function(e,t){e=ke(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&xo(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=Is(a),l=-1,d=s.length;++l<d;){var c=s[l],u=e[c];(u===r||La(u,Ie[c])&&!Ae.call(e,c))&&(e[c]=a[c])}return e})),js=Gn((function(e){return e.push(r,Ji),jt(_s,r,e)}));function ks(e,t,n){var i=null==e?r:Cn(e,t);return i===r?n:i}function Ds(e,t){return null!=e&&mo(e,t,En)}var Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Ts=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Fs=Gn(Fn);function Os(e){return Ua(e)?Xr(e):Bn(e)}function Is(e){return Ua(e)?Xr(e,!0):Rn(e)}var Ms=Ii((function(e,t,r){Hn(e,t,r)})),_s=Ii((function(e,t,r,n){Hn(e,t,r,n)})),As=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Fi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r}));var Bs=ro((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=Mt(io(e),(function(e){return[e]}));return t=lo(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(Os),Ps=Gi(Is);function Ls(e){return null==e?[]:Qt(e,Os(e))}var Ns=Bi((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,rr).replace(Je,"")}var Vs=Bi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Bi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var qs=Bi((function(e,t,r){return e+(r?" ":"")+Gs(t)}));var Xs=Bi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,n){return e=vs(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(de)||[]}(e):e.match(t)||[]}var Qs=Gn((function(e,t){try{return jt(e,r,t)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return Dt(t,(function(t){t=Ro(t),on(e,t,Ta(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return An("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return Fn(r,e,t)}})),al=Gn((function(e,t){return function(r){return Fn(e,r,t)}}));function sl(e,t,r){var n=Os(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Os(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return Dt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ti(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,_t([this.value()],arguments))})})),e}function ll(){}var dl=Wi(Mt),cl=Wi(Tt),ul=Wi(Rt);function fl(e){return wo(e)?Yt(Ro(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Yi(),gl=Yi(!0);function pl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),Cl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,t){if("function"!=typeof t)throw new Te(n);return e=gs(e),function(){if(--e<1)return t.apply(this,arguments)}},Pr.ary=Da,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ea,Pr.bind=Ta,Pr.bindAll=Js,Pr.bindKey=Fa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(e,t,n){t=(n?xo(e,t,n):t===r)?1:br(gs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=oe(gt(i/t));o<i;)s[a++]=ni(e,o,o+=t);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return _t(Va(r)?Ti(r):[r],bn(t,1))},Pr.cond=function(e){var t=null==e?0:e.length,r=lo();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new Te(n);return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n];if(jt(i[0],this,r))return jt(i[1],this,r)}}))},Pr.conforms=function(e){return function(e){var t=Os(e);return function(r){return dn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=pa,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.curryRight=function e(t,n,i){var o=Zi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.debounce=Oa,Pr.defaults=Ss,Pr.defaultsDeep=js,Pr.defer=Ia,Pr.delay=Ma,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=n||t===r?1:gs(t))<0?0:t,i):[]},Pr.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,0,(t=i-(t=n||t===r?1:gs(t)))<0?0:t):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0):[]},Pr.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&xo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=gs(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:gs(i))<0&&(i+=o),i=n>i?0:ps(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Pr.filter=function(e,t){return(Va(e)?Ft:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),u)},Pr.flatMapDepth=function(e,t,n){return n=n===r?1:gs(n),bn(Ca(e,t),n)},Pr.flatten=Yo,Pr.flattenDeep=function(e){return(null==e?0:e.length)?bn(e,u):[]},Pr.flattenDepth=function(e,t){return(null==e?0:e.length)?bn(e,t=t===r?1:gs(t)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Os(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return(null==e?0:e.length)?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=qo,Pr.intersectionWith=Xo,Pr.invert=Es,Pr.invertBy=Ts,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Os,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=_a,Pr.merge=Ms,Pr.mergeWith=_s,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Aa,Pr.nthArg=function(e){return e=gs(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=As,Pr.omitBy=function(e,t){return Rs(e,Aa(lo(t)))},Pr.once=function(e){return Ea(2,e)},Pr.orderBy=function(e,t,n,i){return null==e?[]:(Va(t)||(t=null==t?[]:[t]),Va(n=i?r:n)||(n=null==n?[]:[n]),Vn(e,t,n))},Pr.over=dl,Pr.overArgs=Ba,Pr.overEvery=cl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(e){return function(t){return null==e?r:Cn(e,t)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Un(e,t,r,n):e},Pr.pullAt=Jo,Pr.range=hl,Pr.rangeRight=gl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Ft:mn)(e,Aa(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(e,t){if("function"!=typeof e)throw new Te(n);return Gn(e,t=t===r?t:gs(t))},Pr.reverse=ea,Pr.sampleSize=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:gs(t),(Va(e)?Zr:Qn)(e,t)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Jn(e,t,n,i)},Pr.shuffle=function(e){return(Va(e)?Qr:ri)(e)},Pr.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&xo(e,t,n)?(t=0,n=i):(t=null==t?0:gs(t),n=n===r?i:gs(n)),ni(e,t,n)):[]},Pr.sortBy=ja,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(e,t,n){return n&&"number"!=typeof n&&xo(e,t,n)&&(t=n=r),(n=n===r?g:n>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=di(t))&&or(e)?wi(fr(e),0,n):e.split(t,n):[]},Pr.spread=function(e,t){if("function"!=typeof e)throw new Te(n);return t=null==t?0:br(gs(t),0),Gn((function(r){var n=r[t],i=wi(r,0,t);return n&&_t(i,n),jt(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(e,t,n){return e&&e.length?ni(e,0,(t=n||t===r?1:gs(t))<0?0:t):[]},Pr.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=i-(t=n||t===r?1:gs(t)))<0?0:t,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?hi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Te(n);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Oa(e,t,{leading:i,maxWait:t,trailing:o})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?Mt(e,Ro):ls(e)?[e]:Ti(Bo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),i=n||qa(e)||ds(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?Dt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Da(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?ci(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?ci(e,lo(t,2)):[]},Pr.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?ci(e,r,t):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:fi(e,t,vi(r))},Pr.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=da,Pr.zip=ca,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=bl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=vl,Pr.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ms(n))==n?n:0),t!==r&&(t=(t=ms(t))==t?t:0),sn(ms(e),t,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:r)},Pr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:r)},Pr.conformsTo=function(e,t){return null==t||dn(e,t,Os(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=yl,Pr.endsWith=function(e,t,n){e=vs(e),t=di(t);var i=e.length,o=n=n===r?i:sn(gs(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,nr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&ne.test(e)?e.replace(re,"\\$&"):e},Pr.every=function(e,t,n){var i=Va(e)?Tt:gn;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return Pt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vo,Pr.findLastKey=function(e,t){return Pt(e,lo(t,3),wn)},Pr.floor=xl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Dn)},Pr.hasIn=Ds,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?gs(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Nt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Nt(e,t,i)},Pr.inRange=function(e,t,n){return t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(e=ms(e),t,n)},Pr.invoke=Fs,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&jn(e)==v},Pr.isBuffer=qa,Pr.isDate=Xa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||ds(e)||Wa(e)))return!e.length;var t=po(e);if(t==C||t==E)return!e.size;if(So(e))return!Bn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?In(e,t,r,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&zt(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,uo(t))},Pr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Mn(e,t,uo(t),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return _n(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=f},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=ds,Pr.isUndefined=function(e){return e===r},Pr.isWeakMap=function(e){return ts(e)&&po(e)==O},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==jn(e)},Pr.join=function(e,t){return null==e?"":Ut.call(e,t)},Pr.kebabCase=Vs,Pr.last=Go,Pr.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=gs(n))<0?br(i+o,0):vr(o,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):Lt(e,Wt,o,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=cs,Pr.lte=us,Pr.max=function(e){return e&&e.length?pn(e,nl,kn):r},Pr.maxBy=function(e,t){return e&&e.length?pn(e,lo(t,2),kn):r},Pr.mean=function(e){return Vt(e,nl)},Pr.meanBy=function(e,t){return Vt(e,lo(t,2))},Pr.min=function(e){return e&&e.length?pn(e,nl,zn):r},Pr.minBy=function(e,t){return e&&e.length?pn(e,lo(t,2),zn):r},Pr.stubArray=pl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(e,t){return e&&e.length?Wn(e,gs(t)):r},Pr.noConflict=function(){return ht._===this&&(ht._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=gs(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Vi(pt(i),r)+e+Vi(gt(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=gs(t))?ur(e):0;return t&&n<t?e+Vi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=gs(t))?ur(e):0;return t&&n<t?Vi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(ie,""),t||0)},Pr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=hs(e),t===r?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=wr();return vr(e+o*(t-e+dt("1e-"+((o+"").length-1))),t)}return qn(e,t)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?Bt:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.repeat=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:gs(t),Xn(vs(e),t)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(e,t,n){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[Ro(t[i])];a===r&&(i=o,a=n),e=Za(a)?a.call(e):a}return e},Pr.round=Cl,Pr.runInContext=e,Pr.sample=function(e){return(Va(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=po(e);return t==C||t==E?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(e,t,n){var i=Va(e)?Rt:ii;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(gs(r),0,e.length),t=di(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?qt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?qt(e,lo(t,2)):0},Pr.template=function(e,t,n){var i=Pr.templateSettings;n&&xo(e,t,n)&&(t=r),e=vs(e),t=ws({},t,i,Qi);var o,a,s=ws({},t.imports,i.imports,Qi),l=Os(s),d=Qt(s,l),c=0,u=t.interpolate||xe,f="__p += '",h=De((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),g="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(h,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(c,l).replace(we,ir),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),f+="';\n";var p=Ae.call(t,"variable")&&t.variable;if(p){if(ce.test(p))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(W,""):f).replace(V,"$1").replace(Y,"$1;"),f="function("+(p||"obj")+") {\n"+(p?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,g+"return "+f).apply(r,d)}));if(m.source=f,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=gs(e))<1||e>f)return[];var r=g,n=vr(e,g);t=lo(t),e-=g;for(var i=Xt(n,t);++r<e;)t(r);return i},Pr.toFinite=hs,Pr.toInteger=gs,Pr.toLength=ps,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(gs(e),-9007199254740991,f):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(e,t,n){if((e=vs(e))&&(n||t===r))return Gt(e);if(!e||!(t=di(t)))return e;var i=fr(e),o=fr(t);return wi(i,er(i,o),tr(i,o)+1).join("")},Pr.trimEnd=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.slice(0,hr(e)+1);if(!e||!(t=di(t)))return e;var i=fr(e);return wi(i,0,tr(i,fr(t))+1).join("")},Pr.trimStart=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=di(t)))return e;var i=fr(e);return wi(i,er(i,fr(t))).join("")},Pr.truncate=function(e,t){var n=30,i="...";if(es(t)){var o="separator"in t?t.separator:o;n="length"in t?gs(t.length):n,i="omission"in t?di(t.omission):i}var a=(e=vs(e)).length;if(or(e)){var s=fr(e);a=s.length}if(n>=a)return e;var l=n-ur(i);if(l<1)return i;var d=s?wi(s,0,l).join(""):e.slice(0,l);if(o===r)return d+i;if(s&&(l+=d.length-l),os(o)){if(e.slice(l).search(o)){var c,u=d;for(o.global||(o=De(o.source,vs(he.exec(o))+"g")),o.lastIndex=0;c=o.exec(u);)var f=c.index;d=d.slice(0,f===r?l:f)}}else if(e.indexOf(di(o),l)!=l){var h=d.lastIndexOf(o);h>-1&&(d=d.slice(0,h))}return d+i},Pr.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,gr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Xs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(wl={},xn(Pr,(function(e,t){Ae.call(Pr.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pr.VERSION="4.17.21",Dt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),Dt(["drop","take"],(function(e,t){Wr.prototype[e]=function(n){n=n===r?1:br(gs(n),0);var i=this.__filtered__&&!t?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,g),type:e+(i.__dir__<0?"Right":"")}),i},Wr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Dt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Dt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Dt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Fn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(lo(e)))},Wr.prototype.slice=function(e,t){e=gs(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Wr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=gs(t))<0?n.dropRight(-t):n.take(t-e)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(g)},xn(Wr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Pr[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Pr.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Wr,d=s[0],c=l||Va(t),u=function(e){var t=o.apply(Pr,_t([e],s));return i&&f?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(l=c=!1);var f=this.__chain__,h=!!this.__actions__.length,g=a&&!f,p=l&&!h;if(!a&&c){t=p?t:new Wr(this);var m=e.apply(t,s);return m.__actions__.push({func:ha,args:[u],thisArg:r}),new Hr(m,f)}return g&&p?e.apply(this,s):(m=this.thru(u),g?i?m.value()[0]:m.value():m)})})),Dt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Fe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Ae.call(Fr,n)||(Fr[n]=[]),Fr[n].push({name:t,func:r})}})),Fr[Li(r,2).name]=[{name:"wrapper",func:r}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ti(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ti(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ti(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,i=r?e.length:0,o=function(e,t,r){var n=-1,i=r.length;for(;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,d=n?s:a-1,c=this.__iteratees__,u=c.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&i==l&&h==l)return gi(e,this.__actions__);var g=[];e:for(;l--&&f<h;){for(var p=-1,m=e[d+=t];++p<u;){var b=c[p],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}g[f++]=m}return g},Pr.prototype.at=ga,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===r&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Pr.prototype.plant=function(e){for(var t,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Pr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wr){var t=e;return this.__actions__.length&&(t=new Wr(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ea],thisArg:r}),new Hr(t,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Ze&&(Pr.prototype[Ze]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,gt._=pr):ht._=pr}).call(Ti)}(Uj,Uj.exports);var Kj=Uj.exports;const qj=U.default.forwardRef(((r,n)=>{var{value:i,readOnly:o,"data-testid":a,maskRange:s,unmaskRange:l,maskRegex:d,maskTransformer:c,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:g,maskChar:p="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:C,onChange:S,onFocus:j,onBlur:k,onTryAgain:D}=r,E=G(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=o&&Kj.isEmpty(i),[F,O]=t.useState(!b),[I,M]=t.useState(i||"");t.useEffect((()=>{M(i||"")}),[i]);const _=e=>{P(!1),j&&j(e)},A=e=>{P(!0),k&&k(e)},B=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},R=()=>{o&&D&&D()},z=()=>{P(!F)},P=e=>{O(e),e?x&&x():C&&C()},L=()=>!(null==I?void 0:I.toString().length)||b,N=()=>{if(T)return e.jsx(e.Fragment,{});const t=L();return e.jsx(Rj,{"data-testid":"icon-"+(F?"masked":"unmasked"),onClick:t?void 0:z,$isDisabled:t,$inactiveColor:g,$activeColor:h,children:F?f:u})};return e.jsx("div",{"aria-busy":"loading"===y,"aria-live":"polite",children:(()=>{if(o)switch(y){case"fail":return e.jsxs(Yj,{onClick:R,"data-testid":"try-again-button",children:[e.jsxs(Hj,{children:[e.jsx(Wj,{}),e.jsx(Vj,{children:"Error"})]}),e.jsx(Nj,{children:"Try again?"})]});case"loading":return e.jsxs(zj,{children:[e.jsx(Lj,{}),e.jsx(Pj,{children:"Retrieving..."})]})}return e.jsx(Bj,Object.assign({ref:n,"data-testid":`${a||"masked-input"}${F?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:o?void 0:_,onBlur:o?void 0:A,onClick:o?z:void 0,onChange:B,value:T?"-":F&&!b?Ac.maskValue(I,{maskChar:p,maskRange:s,unmaskRange:l,maskRegex:d,maskTransformer:c}):I,readOnly:o,error:m,$isDisabled:L()},E))})()})})),Xj=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u}=t,f=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(Vx,{id:o,label:n,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,children:e.jsx(qj,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},f))})})),Gj=q.default.div`
    font-weight: ${e=>e.$bold?fl.Spec["weight-semibold"]:fl.Spec["weight-regular"]};

    ${e=>e.$disabled?i.css`
                color: ${ul["text-disabled"]};
            `:e.$selected?i.css`
                color: ${ul["text-selected"]};
            `:i.css`
                color: ${ul.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Pl(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Zj=q.default.div`
    color: ${ul["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Pl(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${fl["body-md-semibold"]}
                `:i.css`
                    ${fl["body-baseline-regular"]}
                `}
`,Qj=q.default.span`
    font-weight: ${fl.Spec["weight-semibold"]};
`,Jj=q.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${Gj} {
                        display: inline;
                    }

                    ${Zj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ek=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,tk=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,rk=({bold:r,displayType:n="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:f="default"})=>{const h=i.useTheme(),g="small"===f?fl.Spec["body-size-md"]({theme:h}):fl.Spec["body-size-baseline"]({theme:h}),p=fl.Spec["font-family"]({theme:h}),{ref:m,width:b}=Xe(),v=t.useCallback((e=>{if("inline"!==n||!b)return!1;return Ac.getTextWidth(e,`${g} '${p}'`)>b*s-50}),[b,n,g,p,s]),y=t.useMemo((()=>v(o)),[v,o]),x=t.useMemo((()=>c&&v(c)),[v,c]),w=y||x?"next-line":n,$=t=>{if(!a)return t;const r=a.toLowerCase().trim(),n=t.toLowerCase().indexOf(r),i=n+a.length;return-1===n?t:e.jsxs(e.Fragment,{children:[o.slice(0,n),e.jsx(Qj,{$variant:f,children:o.slice(n,i)}),o.slice(i)]})},C=t=>e.jsxs(e.Fragment,{children:[e.jsx(ek,{$maxLines:s,"aria-hidden":!0,children:$(t)}),e.jsx(tk,{$maxLines:s,"aria-hidden":!0,children:$(t)})]});return e.jsxs(Jj,{ref:m,$labelDisplayType:w,$variant:f,children:[e.jsx(Gj,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&y?C(o):$(o)}),c&&e.jsx(Zj,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:n,children:"middle"===u&&x?C(c):c})]})};function nk(e){return()=>e}function ik(e){e()}function ok(e,t){return r=>e(t(r))}function ak(e,t){return()=>e(t)}function sk(e,t){return r=>e(t,r)}function lk(e){return void 0!==e}function dk(){}function ck(e,t){return t(e),e}function uk(e,t){return t(e)}function fk(...e){return e}function hk(e,t){return e(1,t)}function gk(e,t){e(0,t)}function pk(e){e(2)}function mk(e){return e(4)}function bk(e,t){return hk(e,sk(t,0))}function vk(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function yk(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function xk(e,t){return e===t}function wk(e=xk){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function $k(e){return t=>r=>{e(r)&&t(r)}}function Ck(e){return t=>ok(t,e)}function Sk(e){return t=>()=>{t(e)}}function jk(e,...t){const r=function(...e){return t=>e.reduceRight(uk,t)}(...t);return(t,n)=>{switch(t){case 2:return void pk(e);case 1:return hk(e,r(n))}}}function kk(e,t){return r=>n=>{r(t=e(t,n))}}function Dk(e){return t=>r=>{e>0?e--:t(r)}}function Ek(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Tk(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);hk(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function Fk(e){let t=e;const r=Ik();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Ok(e,t){return ck(Fk(t),(t=>bk(e,t)))}function Ik(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Mk(e){return ck(Ik(),(t=>bk(e,t)))}function _k(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Ak(),singleton:r}}const Ak=()=>Symbol();function Bk(...e){const t=Ik(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);hk(e,(e=>{r[o]=e,n|=a,n===i&&gk(t,r)}))})),function(e,o){switch(e){case 2:return void pk(t);case 1:return n===i&&o(r),hk(t,o)}}}function Rk(e,t=xk){return jk(e,wk(t))}function zk(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(ik)}}(...e.map((e=>hk(e,r))))}}}var Pk=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Pk||{});const Lk={0:"debug",3:"error",1:"log",2:"warn"},Nk=_k((()=>{const e=Fk(3);return{log:Fk(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:mk(e))&&console[Lk[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Hk(e,t,r){return Wk(e,t,r).callbackRef}function Wk(e,t,r){const n=U.default.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const o=U.default.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(o.observe(e),n.current=e):(n.current&&o.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Vk(e,t,r,n,i,o,a,s,l){const d=U.default.useCallback((r=>{const l=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),d=t(i,r);if(0===d&&n("Zero-sized element, this should not happen",{child:i},Pk.ERROR),d===l)continue;const c=o[o.length-1];0===o.length||c.size!==d||c.endIndex!==s-1?o.push({endIndex:s,size:d,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,s?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?s?a.scrollLeft:a.scrollTop:c?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?d.scrollLeft:d.scrollTop,f=a?s?a.scrollWidth:a.scrollHeight:c?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?d.scrollWidth:d.scrollHeight,h=a?s?a.offsetWidth:a.offsetHeight:c?s?window.innerWidth:window.innerHeight:s?d.offsetWidth:d.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==o||o(s?Yk("column-gap",getComputedStyle(r).columnGap,i):Yk("row-gap",getComputedStyle(r).rowGap,i)),null!==l&&e(l)}),[e,t,i,o,a,n]);return Wk(d,r,l)}function Yk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Pk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Uk(e,t,r){const n=U.default.useRef(null),i=U.default.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:o,ref:a}=Wk(i,!0,r),s=U.default.useCallback((()=>{i(a.current)}),[i,a]);return U.default.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),o}const Kk=_k((()=>{const e=Ik(),t=Ik(),r=Fk(0),n=Ik(),i=Fk(0),o=Ik(),a=Ik(),s=Fk(0),l=Fk(0),d=Fk(0),c=Fk(0),u=Ik(),f=Ik(),h=Fk(!1),g=Fk(!1),p=Fk(!1);return bk(jk(e,Ck((({scrollTop:e})=>e))),t),bk(jk(e,Ck((({scrollHeight:e})=>e))),a),bk(t,i),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:g,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),qk={lvl:0};function Xk(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function Gk(e){return e===qk}function Zk(e,t){if(!Gk(e))return t===e.k?e.v:t<e.k?Zk(e.l,t):Zk(e.r,t)}function Qk(e,t,r="k"){if(Gk(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Qk(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Qk(e.l,t,r)}function Jk(e,t,r){return Gk(e)?cD(t,r,1):t===e.k?aD(e,{k:t,v:r}):t<e.k?uD(aD(e,{l:Jk(e.l,t,r)})):uD(aD(e,{r:Jk(e.r,t,r)}))}function eD(){return qk}function tD(e,t,r){if(Gk(e))return[];return function(e){return Xk(e,(({k:e,v:t})=>({index:e,value:t})))}(iD(e,Qk(e,t)[0],r))}function rD(e,t){if(Gk(e))return qk;const{k:r,l:n,r:i}=e;if(t===r){if(Gk(n))return i;if(Gk(i))return n;{const[t,r]=dD(n);return oD(aD(e,{k:t,l:sD(n),v:r}))}}return oD(aD(e,t<r?{l:rD(n,t)}:{r:rD(i,t)}))}function nD(e){return Gk(e)?[]:[...nD(e.l),{k:e.k,v:e.v},...nD(e.r)]}function iD(e,t,r){if(Gk(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(iD(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(iD(o,t,r))),s}function oD(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(lD(t))return fD(aD(e,{lvl:r-1}));if(!Gk(t)&&!Gk(t.r))return aD(t.r,{l:aD(t,{r:t.r.l}),lvl:r,r:aD(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(lD(e))return hD(aD(e,{lvl:r-1}));if(Gk(n)||Gk(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=lD(t)?n.lvl-1:n.lvl;return aD(t,{l:aD(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:hD(aD(n,{l:t.r,lvl:i}))})}}function aD(e,t){return cD(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function sD(e){return Gk(e.r)?e.l:oD(aD(e,{r:sD(e.r)}))}function lD(e){return Gk(e)||e.lvl>e.r.lvl}function dD(e){return Gk(e.r)?[e.k,e.v]:dD(e.r)}function cD(e,t,r,n=qk,i=qk){return{k:e,l:n,lvl:r,r:i,v:t}}function uD(e){return hD(fD(e))}function fD(e){const{l:t}=e;return Gk(t)||t.lvl!==e.lvl?e:aD(t,{r:aD(e,{l:t.r})})}function hD(e){const{lvl:t,r:r}=e;return Gk(r)||Gk(r.r)||r.lvl!==t||r.r.lvl!==t?e:aD(r,{l:aD(e,{r:r.l}),lvl:t+1})}function gD(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function pD(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const mD=_k((()=>({recalcInProgress:Fk(!1)})),[],{singleton:!0});function bD(e,t,r){return e[vD(e,t,r)]}function vD(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function yD(e,t){return Math.round(e.getBoundingClientRect()[t])}function xD(e){return!Gk(e.groupOffsetTree)}function wD({index:e},t){return t===e?0:t<e?-1:1}function $D({offset:e},t){return t===e?0:t<e?-1:1}function CD(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=bD(t,e,wD),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function SD(e,t){if(!xD(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function jD(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=SD("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function kD(e,t,r,n=0){return n>0&&(t=Math.max(t,bD(e,n,wD).offset)),Xk(function(e,t,r,n){const i=vD(e,t,n),o=vD(e,r,n,i);return e.slice(i,o+1)}(e,t,r,$D),FD)}function DD(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,Pk.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&Gk(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Jk(Jk(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Gk(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),Gk(e)){e=Jk(e,0,i);continue}const a=tD(e,o-1,t+1);if(a.some(OD(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=rD(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=Jk(e,t+1,o));l&&(e=Jk(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=TD(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Jk(e,t,CD(t,u,i))),eD()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function ED(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function TD(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=vD(i,t-1,wD),s=i[l].offset;const e=Qk(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===Qk(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of tD(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function FD(e){return{index:e.index,value:e}}function OD(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const ID={offsetHeight:"height",offsetWidth:"width"},MD=_k((([{log:e},{recalcInProgress:t}])=>{const r=Ik(),n=Ik(),i=Ok(n,0),o=Ik(),a=Ik(),s=Fk(0),l=Fk([]),d=Fk(void 0),c=Fk(void 0),u=Fk(((e,t)=>yD(e,ID[t]))),f=Fk(void 0),h=Fk(0),g={groupIndices:[],groupOffsetTree:eD(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:eD()},p=Ok(jk(r,Tk(l,e,h),kk(DD,g),wk()),g),m=Ok(jk(l,wk(),kk(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Ck((({prev:e})=>e))),[]);bk(jk(l,$k((e=>e.length>0)),Tk(p,h),Ck((([e,t,r])=>{const n=e.reduce(((e,n,i)=>Jk(e,n,CD(n,t.offsetTree,r)||i)),eD());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),bk(jk(n,Tk(p),$k((([e,{lastIndex:t}])=>e<t)),Ck((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),bk(d,c);const b=Ok(jk(d,Ck((e=>void 0===e))),!0);bk(jk(c,$k((e=>void 0!==e&&Gk(mk(p).sizeTree))),Ck((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Mk(jk(r,Tk(p),kk((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:g}),Ck((e=>e.changed))));hk(jk(s,kk(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Ck((e=>e.diff))),(e=>{const{groupIndices:r}=mk(p);if(e>0)gk(t,!0),gk(o,e+ED(e,r));else if(e<0){const t=mk(m);t.length>0&&(e-=ED(-e,t)),gk(a,e)}})),hk(jk(s,Tk(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Pk.ERROR)}));const y=Mk(o);bk(jk(o,Tk(p),Ck((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=Zk(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=nD(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return nD(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=Mk(jk(a,Tk(p,h),Ck((([e,{offsetTree:t},r])=>CD(-e,t,r)))));return bk(jk(a,Tk(p,h),Ck((([e,t,r])=>{if(t.groupIndices.length>0){if(Gk(t.sizeTree))return t;let n=eD();const i=mk(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=nD(t.sizeTree).reduce(((t,{k:r,v:n})=>Jk(t,Math.max(0,r+e),n)),n),o!==-e){n=Jk(n,0,Zk(t.sizeTree,s));n=Jk(n,1,Qk(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...TD(t.offsetTree,0,n,r)}}{const n=nD(t.sizeTree).reduce(((t,{k:r,v:n})=>Jk(t,Math.max(0,r+e),n)),eD());return{...t,sizeTree:n,...TD(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:y,data:f,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),fk(Nk,mD),{singleton:!0});function _D(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const AD=_k((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=Ik(),a=Ik(),s=Mk(jk(o,Ck(_D)));return bk(jk(s,Ck((e=>e.totalCount))),r),bk(jk(s,Ck((e=>e.groupIndices))),e),bk(jk(Bk(i,t,n),$k((([e,t])=>xD(t))),Ck((([e,t,r])=>Qk(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),wk(),Ck((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),fk(MD,Kk)),BD=_k((([{log:e}])=>{const t=Fk(!1),r=Mk(jk(t,$k((e=>e)),wk()));return hk(t,(t=>{t&&mk(e)("props updated",{},Pk.DEBUG)})),{didMount:r,propsReady:t}}),fk(Nk),{singleton:!0}),RD=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function zD(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!RD)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const PD=_k((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:f}])=>{const h=Ik(),g=Ik(),p=Fk(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),gk(l,!1)}return bk(jk(h,Tk(r,u,n,p,s,a,f),Tk(e,o,i),Ck((([[e,r,n,i,o,a,s,d],u,f,p])=>{const x=zD(e),{align:w,behavior:$,offset:C}=x,S=i-1,j=jD(x,r,S);let k=CD(j,r.offsetTree,u)+a;"end"===w?(k+=f+Qk(r.sizeTree,j)[1]-n+p,j===S&&(k+=s)):"center"===w?k+=(f+Qk(r.sizeTree,j)[1]-n+p)/2:k-=o,C&&(k+=C);const D=t=>{y(),t?(d("retrying to scroll to",{location:e},Pk.DEBUG),gk(h,e)):(gk(g,!0),d("list did not change, scroll successful",{},Pk.DEBUG))};if(y(),"smooth"===$){let e=!1;v=hk(t,(t=>{e=e||t})),m=vk(c,(()=>{D(e)}))}else m=vk(jk(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),D);return b=setTimeout((()=>{y()}),1200),gk(l,!0),d("scrolling from index to",{behavior:$,index:j,top:k},Pk.DEBUG),{behavior:$,top:k}}))),d),{scrollTargetReached:g,scrollToIndex:h,topListHeight:p}}),fk(MD,Kk,Nk),{singleton:!0});function LD(e,t){0==e?t():requestAnimationFrame((()=>{LD(e-1,t)}))}function ND(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const HD=_k((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=Fk(!0),l=Fk(0),d=Fk(!0);return bk(jk(a,Tk(l),$k((([e,t])=>!!t)),Sk(!1)),s),bk(jk(a,Tk(l),$k((([e,t])=>!!t)),Sk(!1)),d),hk(jk(Bk(t,a),Tk(s,r,e,d),$k((([[,e],t,{sizeTree:r},n,i])=>e&&(!Gk(r)||lk(n))&&!t&&!i)),Tk(l)),(([,e])=>{vk(i,(()=>{gk(d,!0)})),LD(4,(()=>{vk(n,(()=>{gk(s,!0)})),gk(o,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),fk(MD,Kk,PD,BD),{singleton:!0});function WD(e,t){return Math.abs(e-t)<1.01}const VD="up",YD="down",UD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},KD=_k((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=Fk(!1),s=Fk(!0),l=Ik(),d=Ik(),c=Fk(4),u=Fk(0),f=Ok(jk(zk(jk(Rk(i),Dk(1),Sk(!0)),jk(Rk(i),Dk(1),Sk(!1),yk(100))),wk()),!1),h=Ok(jk(zk(jk(r,Sk(!0)),jk(r,Sk(!1),yk(200))),wk()),!1);bk(jk(Bk(Rk(i),Rk(u)),Ck((([e,t])=>e<=t)),wk()),s),bk(jk(s,Ek(50)),d);const g=Mk(jk(Bk(n,Rk(o),Rk(t),Rk(e),Rk(c)),kk(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),UD),wk(((e,t)=>e&&e.atBottom===t.atBottom)))),p=Ok(jk(n,kk(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(WD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),$k((e=>e.changed)),Ck((e=>e.jump))),0);bk(jk(g,Ck((e=>e.atBottom))),a),bk(jk(a,Ek(50)),l);const m=Fk(YD);bk(jk(n,Ck((({scrollTop:e})=>e)),wk(),kk(((e,t)=>mk(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?VD:YD,prevScrollTop:t}),{direction:YD,prevScrollTop:0}),Ck((e=>e.direction))),m),bk(jk(n,Ek(50),Sk("none")),m);const b=Fk(0);return bk(jk(f,$k((e=>!e)),Sk(0)),b),bk(jk(i,Ek(100),Tk(f),$k((([e,t])=>!!t)),kk((([e,t],[r])=>[t,r]),[0,0]),Ck((([e,t])=>t-e))),b),{atBottomState:g,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:p,scrollDirection:m,scrollVelocity:b}}),fk(Kk)),qD="top",XD="bottom",GD="none";function ZD(e,t,r){return"number"==typeof e?r===VD&&t===qD||r===YD&&t===XD?e:0:r===VD?t===qD?e.main:e.reverse:t===XD?e.main:e.reverse}function QD(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const JD=_k((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=Ik(),a=Fk(0),s=Fk(0),l=Fk(0),d=Ok(jk(Bk(Rk(n),Rk(i),Rk(r),Rk(o,pD),Rk(l),Rk(a),Rk(t),Rk(e),Rk(s)),Ck((([e,t,r,[n,i],o,a,s,l,d])=>{const c=e-l,u=a+s,f=Math.max(r-c,0);let h=GD;const g=QD(d,qD),p=QD(d,XD);return n-=l,i+=r+s,(n+=r+s)>e+u-g&&(h=VD),(i-=l)<e-f+t+p&&(h=YD),h!==GD?[Math.max(c-r-ZD(o,qD,h)-g,0),c-f-s+t+ZD(o,XD,h)+p]:null})),$k((e=>null!=e)),wk(pD)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:d}}),fk(Kk),{singleton:!0});const eE={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function tE(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,f=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:o,items:nE(e,i,o),offsetBottom:h,offsetTop:d,top:f,topItems:nE(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function rE(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=ND(t,s);return tE(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function nE(e,t,r){if(0===e.length)return[];if(!xD(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=tD(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const iE=_k((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},f,{didMount:h},{recalcInProgress:g}])=>{const p=Fk([]),m=Fk(0),b=Ik();bk(o.topItemsIndexes,p);const v=Ok(jk(Bk(h,g,Rk(l,pD),Rk(i),Rk(n),Rk(d),c,Rk(p),Rk(t),Rk(r),e),$k((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),Ck((([,,[e,t],r,n,i,o,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:f}=c,h=mk(m);if(0===r)return{...eE,totalCount:r};if(0===e&&0===t)return 0===h?{...eE,totalCount:r}:rE(h,i,n,s,l,d||[]);if(Gk(f))return h>0?null:tE(function(e,t,r){if(xD(t)){const n=SD(e,t);return[{index:Qk(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(ND(i,r),c,d),[],r,l,c,s);const g=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of tD(f,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)g.push({data:null==d?void 0:d[e],index:e,offset:r,size:i}),r+=i}}if(!o)return tE([],g,r,l,c,s);const p=a.length>0?a[a.length-1]+1:0,b=kD(u,e,t,p);if(0===b.length)return null;const v=r-1;return tE(ck([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<p&&(o+=(p-a)*s,a=p);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(o>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:o,size:s}),o+=s+l}})),g,r,l,c,s)})),$k((e=>null!==e)),wk()),eE);bk(jk(e,$k(lk),Ck((e=>null==e?void 0:e.length))),i),bk(jk(v,Ck((e=>e.topListHeight))),u),bk(u,s),bk(jk(v,Ck((e=>[e.top,e.bottom]))),a),bk(jk(v,Ck((e=>e.items))),b);const y=Mk(jk(v,$k((({items:e})=>e.length>0)),Tk(i,e),$k((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Ck((([,e,t])=>[e-1,t])),wk(pD),Ck((([e])=>e)))),x=Mk(jk(v,Ek(200),$k((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Ck((({items:e})=>e[0].index)),wk())),w=Mk(jk(v,$k((({items:e})=>e.length>0)),Ck((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),wk(gD)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:p,...f}}),fk(MD,AD,JD,HD,PD,KD,BD,mD),{singleton:!0}),oE=_k((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=Ik(),a=Ok(jk(Bk(r,e,n,t,i),Ck((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return bk(Rk(a),o),{totalListHeight:a,totalListHeightChanged:o}}),fk(Kk,iE),{singleton:!0}),aE=_k((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Fk(!1),n=Ok(jk(Bk(r,e,t),$k((([e])=>e)),Ck((([,e,t])=>Math.max(0,e-t))),Ek(0),wk()),0);return{alignToBottom:r,paddingTopAddition:n}}),fk(Kk,oE),{singleton:!0});function sE(e){return!!e&&("smooth"===e?"smooth":"auto")}const lE=_k((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=Fk(!1),u=Ik();let f=null;function h(e){gk(i,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=vk(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(mk(l)("scrolling to bottom due to increased size",{},Pk.DEBUG),h("auto"))}));setTimeout(t,100)}return hk(jk(Bk(jk(Rk(t),Dk(1)),a),Tk(Rk(c),n,o,d),Ck((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?sE(e(t)):t&&sE(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),$k((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=vk(e,(()=>{mk(l)("following output to ",{totalCount:r},Pk.DEBUG),h(t),f=null}))})),hk(jk(Bk(Rk(c),t,s),$k((([e,,t])=>e&&t)),kk((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),$k((({refreshed:e})=>e)),Tk(c,t)),(([,e])=>{mk(o)&&g(!1!==e)})),hk(u,(()=>{g(!1!==mk(c))})),hk(Bk(Rk(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),fk(MD,KD,PD,HD,BD,Nk,Kk)),dE=_k((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(bk(jk(s,Tk(o),$k((([,e])=>0!==e)),Tk(i,n,t,r,e),Ck((([[,e],t,r,n,i,o=[]])=>rE(e,t,r,n,i,o)))),a),{})),fk(MD,HD,iE,BD),{singleton:!0}),cE=_k((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Fk(0);return hk(jk(e,Tk(n),$k((([,e])=>0!==e)),Ck((([,e])=>({top:e})))),(e=>{vk(jk(r,Dk(1),$k((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{gk(t,e)}))}))})),{initialScrollTop:n}}),fk(BD,Kk,iE),{singleton:!0}),uE=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,fE=_k((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=Ik();return bk(jk(c,Tk(t,l,r,o,i,n,s),Tk(e),Ck((([[e,t,r,n,i,o,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:f=uE,done:h,...g}=e,p=jD(e,t,n-1),m=CD(p,t.offsetTree,d)+i+o,b=f({itemBottom:m+Qk(t.sizeTree,p)[1],itemTop:m,locationParams:{align:c,behavior:u,...g},viewportBottom:l+r-s,viewportTop:l+o});return b?h&&vk(jk(a,$k((e=>!e)),Dk(mk(a)?1:2)),h):h&&h(),b})),$k((e=>null!==e))),d),{scrollIntoView:c}}),fk(MD,Kk,PD,iE,Nk),{singleton:!0}),hE=_k((([{scrollVelocity:e}])=>{const t=Fk(!1),r=Ik(),n=Fk(!1);return bk(jk(e,Tk(n,t,r),$k((([e,t])=>!!t)),Ck((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),wk()),t),hk(jk(Bk(t,e,r),Tk(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),fk(KD),{singleton:!0}),gE=_k((([{scrollContainerState:e,scrollTo:t}])=>{const r=Ik(),n=Ik(),i=Ik(),o=Fk(!1),a=Fk(void 0);return bk(jk(Bk(r,n),Ck((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),bk(jk(t,Tk(n),Ck((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),fk(Kk)),pE=_k((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=Ik(),c=Fk(void 0),u=Fk(null),f=Fk(null);return bk(s,u),bk(l,f),hk(jk(d,Tk(t,n,a,u,f,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return nD(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),bk(jk(c,$k(lk),Ck(mE)),i),bk(jk(o,Tk(c),$k((([,e])=>void 0!==e)),wk(),Ck((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),fk(MD,Kk,HD,BD,gE));function mE(e){return{align:"start",index:0,offset:e.scrollTop}}const bE=_k((([{topItemsIndexes:e}])=>{const t=Fk(0);return bk(jk(t,$k((e=>e>=0)),Ck((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),fk(iE));function vE(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const yE=vE((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),xE=_k((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:g}])=>{const p=Mk(jk(l,Tk(a),kk((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let d=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=s))),[d,i,a,l]}),[0,[],0,0]),$k((([e])=>0!==e)),Tk(n,s,r,i,h,g),$k((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===VD)),Ck((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Pk.DEBUG),e)))));function m(r){r>0?(gk(t,{behavior:"auto",top:-r}),gk(e,0)):(gk(e,0),gk(t,{behavior:"auto",top:-r}))}return hk(jk(p,Tk(e,o)),(([t,r,n])=>{n&&yE()?gk(e,r-t):m(-t)})),hk(jk(Bk(Ok(o,!1),e,g),$k((([e,t,r])=>!e&&!r&&0!==t)),Ck((([e,t])=>t)),Ek(1)),m),bk(jk(u,Ck((e=>({top:-e})))),t),hk(jk(d,Tk(f,c),Ck((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=Zk(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{gk(e,r),requestAnimationFrame((()=>{gk(t,{top:r}),requestAnimationFrame((()=>{gk(e,0),gk(g,!1)}))}))})),{deviation:e}}),fk(Kk,KD,iE,MD,Nk,mD)),wE=_k((([e,t,r,n,i,o,a,s,l,d])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...d})),fk(JD,dE,BD,hE,oE,cE,aE,gE,fE,Nk)),$E=_k((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:g},p,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},j])=>(bk(x.rangeChanged,j.scrollSeekRangeChanged),bk(jk(j.windowViewportRect,Ck((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:g,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...j,...p,sizes:l,...m})),fk(MD,HD,Kk,pE,lE,iE,PD,xE,bE,AD,wE));function CE(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const SE=typeof document<"u"?U.default.useLayoutEffect:U.default.useEffect;function jE(t,r,n){const i=Object.keys(r.required||{}),o=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),s=Object.keys(r.events||{}),l=U.default.createContext({});function d(e,t){e.propsReady&&gk(e.propsReady,!1);for(const n of i){gk(e[r.required[n]],t[n])}for(const n of o)if(n in t){gk(e[r.optional[n]],t[n])}e.propsReady&&gk(e.propsReady,!0)}function c(e){return s.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?r===o?void 0:(n(),r=o,t=hk(e,o),t):(n(),dk);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const u=U.default.forwardRef(((u,f)=>{const{children:h,...g}=u,[p]=U.default.useState((()=>ck(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{d(e,g)})))),[m]=U.default.useState(ak(c,p));SE((()=>{for(const e of s)e in g&&hk(m[e],g[e]);return()=>{Object.values(m).map(pk)}}),[g,m,p]),SE((()=>{d(p,g)})),U.default.useImperativeHandle(f,nk(function(e){return a.reduce(((t,n)=>(t[n]=t=>{gk(e[r.methods[n]],t)},t)),{})}(p)));const b=n;return e.jsx(l.Provider,{value:p,children:n?e.jsx(b,{...CE([...i,...o,...s],g),children:h}):h})})),f=U.default.version.startsWith("18")?e=>{const t=U.default.useContext(l)[e],r=U.default.useCallback((e=>hk(t,e)),[t]);return U.default.useSyncExternalStore(r,(()=>mk(t)),(()=>mk(t)))}:e=>{const t=U.default.useContext(l)[e],[r,n]=U.default.useState(ak(mk,t));return SE((()=>hk(t,(e=>{e!==r&&n(nk(e))}))),[t,r]),r};return{Component:u,useEmitter:(e,t)=>{const r=U.default.useContext(l)[e];SE((()=>hk(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>U.default.useCallback(sk(gk,U.default.useContext(l)[e]),[e])}}const kE=U.default.createContext(void 0),DE=U.default.createContext(void 0),EE=typeof document<"u"?U.default.useLayoutEffect:U.default.useEffect;function TE(e,t,r,n=dk,i,o){const a=U.default.useRef(null),s=U.default.useRef(null),l=U.default.useRef(null),d=U.default.useCallback((r=>{const n=r.target,i=n===window||n===document,a=o?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,d=o?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,c=o?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:d,scrollTop:Math.max(a,0),viewportHeight:c})};r.suppressFlushSync?u():K.default.flushSync(u),null!==s.current&&(a===s.current||a<=0||a===d-c)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return U.default.useEffect((()=>{const e=i||a.current;return n(i||a.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[a,d,r,n,i]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(o?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let d,c,u;n===window?(c=Math.max(yD(document.documentElement,o?"width":"height"),o?document.documentElement.scrollWidth:document.documentElement.scrollHeight),d=o?window.innerWidth:window.innerHeight,u=o?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[o?"scrollWidth":"scrollHeight"],d=yD(n,o?"width":"height"),u=n[o?"scrollLeft":"scrollTop"]);const f=c-d;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),WD(d,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:d}),void(i&&t(!0));i?(s.current=r.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,o&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const FE="-webkit-sticky",OE="sticky",IE=vE((()=>{if(typeof document>"u")return OE;const e=document.createElement("div");return e.style.position=FE,e.style.position===FE?FE:OE}));function ME(e){return e}const _E=_k((()=>{const e=Fk((e=>`Item ${e}`)),t=Fk(null),r=Fk((e=>`Group ${e}`)),n=Fk({}),i=Fk(ME),o=Fk("div"),a=Fk(dk),s=(e,t=null)=>Ok(jk(n,Ck((t=>t[e])),wk()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),AE=_k((([e,t])=>({...e,...t})),fk($E,_E)),BE=({height:t})=>e.jsx("div",{style:{height:t}}),RE={overflowAnchor:"none",position:IE(),zIndex:1},zE={overflowAnchor:"none"},PE={...zE,display:"inline-block",height:"100%"},LE=U.default.memo((function({showTopList:r=!1}){const n=nT("listState"),i=iT("sizeRanges"),o=nT("useWindowScroll"),a=nT("customScrollParent"),s=iT("windowScrollContainerState"),l=iT("scrollContainerState"),d=a||o?s:l,c=nT("itemContent"),u=nT("context"),f=nT("groupContent"),h=nT("trackItemSizes"),g=nT("itemSize"),p=nT("log"),m=iT("gap"),b=nT("horizontalDirection"),{callbackRef:v}=Vk(i,g,h,r?dk:d,p,m,a,b,nT("skipAnimationFrameInResizeObserver")),[y,x]=U.default.useState(0);rT("deviation",(e=>{y!==e&&x(e)}));const w=nT("EmptyPlaceholder"),$=nT("ScrollSeekPlaceholder")||BE,C=nT("ListComponent"),S=nT("ItemComponent"),j=nT("GroupComponent"),k=nT("computeItemKey"),D=nT("isSeeking"),E=nT("groupIndices").length>0,T=nT("alignToBottom"),F=nT("initialItemFinalLocationReached"),O=r?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:T?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:T?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...F?{}:{visibility:"hidden"}};return!r&&0===n.totalCount&&w?e.jsx(w,{...YE(w,u)}):e.jsx(C,{...YE(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:O,children:(r?n.topItems:n.items).map((e=>{const r=e.originalIndex,i=k(r+n.firstItemIndex,e.data,u);return D?t.createElement($,{...YE($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(j,{...YE(j,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:i,style:RE},f(e.index,u)):t.createElement(S,{...YE(S,u),...UE(S,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:b?PE:zE},E?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),NE={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},HE={outline:"none",overflowX:"auto",position:"relative"},WE=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),VE={position:IE(),top:0,width:"100%",zIndex:1};function YE(e,t){if("string"!=typeof e)return{context:t}}function UE(e,t){return{item:"string"==typeof e?void 0:t}}const KE=U.default.memo((function(){const t=nT("HeaderComponent"),r=iT("headerHeight"),n=nT("HeaderFooterTag"),i=Hk(U.default.useMemo((()=>e=>{r(yD(e,"height"))}),[r]),!0,nT("skipAnimationFrameInResizeObserver")),o=nT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...YE(t,o)})}):null})),qE=U.default.memo((function(){const t=nT("FooterComponent"),r=iT("footerHeight"),n=nT("HeaderFooterTag"),i=Hk(U.default.useMemo((()=>e=>{r(yD(e,"height"))}),[r]),!0,nT("skipAnimationFrameInResizeObserver")),o=nT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...YE(t,o)})}):null}));function XE({useEmitter:t,useEmitterValue:r,usePublisher:n}){return U.default.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:g,scrollToCallback:p}=TE(s,d,l,c,void 0,f);return t("scrollTo",p),t("scrollBy",h),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...f?HE:NE,...o},tabIndex:0,...a,...YE(l,u),children:i})}))}function GE({useEmitter:t,useEmitterValue:r,usePublisher:n}){return U.default.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:g,scrollerRef:p,scrollToCallback:m}=TE(s,d,l,dk,f);return EE((()=>(p.current=f||window,()=>{p.current=null})),[p,f]),t("windowScrollTo",m),t("scrollBy",g),e.jsx(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==c?{height:c+u}:{}},...a,...YE(l,h),children:i})}))}const ZE=({children:t})=>{const r=U.default.useContext(kE),n=iT("viewportHeight"),i=iT("fixedItemHeight"),o=nT("alignToBottom"),a=nT("horizontalDirection"),s=Hk(U.default.useMemo((()=>ok(n,(e=>yD(e,a?"width":"height")))),[n,a]),!0,nT("skipAnimationFrameInResizeObserver"));return U.default.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:WE(o),children:t})},QE=({children:t})=>{const r=U.default.useContext(kE),n=iT("windowViewportRect"),i=iT("fixedItemHeight"),o=nT("customScrollParent"),a=Uk(n,o,nT("skipAnimationFrameInResizeObserver")),s=nT("alignToBottom");return U.default.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"window",ref:a,style:WE(s),children:t})},JE=({children:t})=>{const r=nT("TopItemListComponent")||"div",n=nT("headerHeight"),i={...VE,marginTop:`${n}px`},o=nT("context");return e.jsx(r,{style:i,...YE(r,o),children:t})},eT=U.default.memo((function(t){const r=nT("useWindowScroll"),n=nT("topItemsIndexes").length>0,i=nT("customScrollParent"),o=nT("context"),a=i||r?aT:oT,s=i||r?QE:ZE;return e.jsxs(a,{...t,...YE(a,o),children:[n&&e.jsx(JE,{children:e.jsx(LE,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(KE,{}),e.jsx(LE,{}),e.jsx(qE,{})]})]})})),{Component:tT,useEmitter:rT,useEmitterValue:nT,usePublisher:iT}=jE(AE,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},eT),oT=XE({useEmitter:rT,useEmitterValue:nT,usePublisher:iT}),aT=GE({useEmitter:rT,useEmitterValue:nT,usePublisher:iT}),sT=tT,lT={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},dT={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:cT,floor:uT,max:fT,min:hT,round:gT}=Math;function pT(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function mT(e,t){return e&&e.width===t.width&&e.height===t.height}function bT(e,t){return e&&e.column===t.column&&e.row===t.row}const vT=_k((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},f,h,{didMount:g,propsReady:p},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Fk(0),C=Fk(0),S=Fk(lT),j=Fk({height:0,width:0}),k=Fk({height:0,width:0}),D=Ik(),E=Ik(),T=Fk(0),F=Fk(null),O=Fk({column:0,row:0}),I=Ik(),M=Ik(),_=Fk(!1),A=Fk(0),B=Fk(!0),R=Fk(!1),z=Fk(!1);hk(jk(g,Tk(A),$k((([e,t])=>!!t))),(()=>{gk(B,!1)})),hk(jk(Bk(g,B,k,j,A,R),$k((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{gk(R,!0),LD(1,(()=>{gk(D,e)})),vk(jk(d),(()=>{gk(t,[0,0]),gk(B,!0)}))})),bk(jk(M,$k((e=>null!=e&&e.scrollTop>0)),Sk(0)),C),hk(jk(g,Tk(M),$k((([,e])=>null!=e))),(([,e])=>{e&&(gk(j,e.viewport),gk(k,e.item),gk(O,e.gap),e.scrollTop>0&&(gk(_,!0),vk(jk(d,Dk(1)),(e=>{gk(_,!1)})),gk(l,{top:e.scrollTop})))})),bk(jk(j,Ck((({height:e})=>e))),u),bk(jk(Bk(Rk(j,mT),Rk(k,mT),Rk(O,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Rk(d)),Ck((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),bk(jk(Bk(Rk($),n,Rk(O,bT),Rk(k,mT),Rk(j,mT),Rk(F),Rk(C),Rk(_),Rk(B),Rk(A)),$k((([,,,,,,,e])=>!e)),Ck((([e,[t,r],n,i,o,a,s,,l,d])=>{const{column:c,row:u}=n,{height:f,width:h}=i,{width:g}=o;if(0===s&&(0===e||0===g))return lT;if(0===h){const t=ND(d,e);return function(e){return{...dT,items:e}}(pT(t,t+Math.max(s-1,0),a))}const p=yT(g,h,c);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=p*uT((t+u)/(f+u)),b=p*cT((r+u)/(f+u))-1,b=hT(e-1,fT(b,p-1)),m=hT(b,fT(0,m))):(m=0,b=-1);const v=pT(m,b,a),{bottom:y,top:x}=xT(o,n,i,v),w=cT(e/p);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),bk(jk(F,$k((e=>null!==e)),Ck((e=>e.length))),$),bk(jk(Bk(j,k,S,O),$k((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Ck((([e,t,{items:r},n])=>{const{bottom:i,top:o}=xT(e,n,t,r);return[o,i]})),wk(pD)),t);const P=Fk(!1);bk(jk(d,Tk(P),Ck((([e,t])=>t||0!==e))),P);const L=Mk(jk(Bk(S,$),$k((([{items:e}])=>e.length>0)),Tk(P),$k((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Ck((([[,e]])=>e-1)),wk())),N=Mk(jk(Rk(S),$k((({items:e})=>e.length>0&&0===e[0].index)),Sk(0),wk())),H=Mk(jk(Rk(S),Tk(_),$k((([{items:e},t])=>e.length>0&&!t)),Ck((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),wk(gD),Ek(0)));bk(H,h.scrollSeekRangeChanged),bk(jk(D,Tk(j,k,$,O),Ck((([e,t,r,n,i])=>{const o=zD(e),{align:a,behavior:s,offset:l}=o;let d=o.index;"LAST"===d&&(d=n-1),d=fT(0,d,hT(n-1,d));let c=wT(t,i,r,d);return"end"===a?c=gT(c-t.height+r.height):"center"===a&&(c=gT(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const W=Ok(jk(S,Ck((e=>e.offsetBottom+e.bottom))),0);return bk(jk(x,Ck((e=>({height:e.visibleHeight,width:e.visibleWidth})))),j),{customScrollParent:m,data:F,deviation:T,footerHeight:i,gap:O,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:E,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:j,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:A,totalListHeight:W,...f,endReached:L,propsReady:p,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:_,...w}}),fk(JD,Kk,KD,hE,BD,gE,Nk));function yT(e,t,r){return fT(1,uT((e+r)/(uT(t)+r)))}function xT(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=wT(e,t,r,n[0].index);return{bottom:wT(e,t,r,n[n.length-1].index)+i,top:o}}function wT(e,t,r,n){const i=yT(e.width,r.width,t.column),o=uT(n/i),a=o*r.height+fT(0,o-1)*t.row;return a>0?a+t.row:a}const $T=_k((()=>{const e=Fk((e=>`Item ${e}`)),t=Fk({}),r=Fk(null),n=Fk("virtuoso-grid-item"),i=Fk("virtuoso-grid-list"),o=Fk(ME),a=Fk("div"),s=Fk(dk),l=(e,r=null)=>Ok(jk(t,Ck((t=>t[e])),wk()),r),d=Fk(!1),c=Fk(!1);return bk(Rk(c),d),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),CT=_k((([e,t])=>({...e,...t})),fk(vT,$T)),ST=U.default.memo((function(){const r=IT("gridState"),n=IT("listClassName"),i=IT("itemClassName"),o=IT("itemContent"),a=IT("computeItemKey"),s=IT("isSeeking"),l=MT("scrollHeight"),d=IT("ItemComponent"),c=IT("ListComponent"),u=IT("ScrollSeekPlaceholder"),f=IT("context"),h=MT("itemDimensions"),g=MT("gap"),p=IT("log"),m=IT("stateRestoreInProgress"),b=MT("reportReadyState"),v=Hk(U.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}g({column:BT("column-gap",getComputedStyle(e).columnGap,p),row:BT("row-gap",getComputedStyle(e).rowGap,p)})}),[l,h,g,p]),!0,!1);return EE((()=>{r.itemHeight>0&&r.itemWidth>0&&b(!0)}),[r]),m?null:e.jsx(c,{className:n,ref:v,...YE(c,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((n=>{const l=a(n.index,n.data,f);return s?e.jsx(u,{...YE(u,f),height:r.itemHeight,index:n.index,width:r.itemWidth},l):t.createElement(d,{...YE(d,f),className:i,"data-index":n.index,key:l},o(n.index,n.data,f))}))})})),jT=U.default.memo((function(){const t=IT("HeaderComponent"),r=MT("headerHeight"),n=IT("headerFooterTag"),i=Hk(U.default.useMemo((()=>e=>{r(yD(e,"height"))}),[r]),!0,!1),o=IT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...YE(t,o)})}):null})),kT=U.default.memo((function(){const t=IT("FooterComponent"),r=MT("footerHeight"),n=IT("headerFooterTag"),i=Hk(U.default.useMemo((()=>e=>{r(yD(e,"height"))}),[r]),!0,!1),o=IT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...YE(t,o)})}):null})),DT=({children:t})=>{const r=U.default.useContext(DE),n=MT("itemDimensions"),i=MT("viewportDimensions"),o=Hk(U.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return U.default.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e.jsx("div",{ref:o,style:WE(!1),children:t})},ET=({children:t})=>{const r=U.default.useContext(DE),n=MT("windowViewportRect"),i=MT("itemDimensions"),o=IT("customScrollParent"),a=Uk(n,o,!1);return U.default.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e.jsx("div",{ref:a,style:WE(!1),children:t})},TT=U.default.memo((function({...t}){const r=IT("useWindowScroll"),n=IT("customScrollParent"),i=n||r?AT:_T,o=n||r?ET:DT,a=IT("context");return e.jsx(i,{...t,...YE(i,a),children:e.jsxs(o,{children:[e.jsx(jT,{}),e.jsx(ST,{}),e.jsx(kT,{})]})})})),{Component:FT,useEmitter:OT,useEmitterValue:IT,usePublisher:MT}=jE(CT,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},TT),_T=XE({useEmitter:OT,useEmitterValue:IT,usePublisher:MT}),AT=GE({useEmitter:OT,useEmitterValue:IT,usePublisher:MT});function BT(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Pk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const RT=U.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),zT=({children:r})=>{const[n,i]=t.useState(-1);return e.jsx(RT.Provider,{value:{focusedIndex:n,setFocusedIndex:i},children:r})},PT=q.default.div`
    overflow: hidden;
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    background: ${ul.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}

    ${vl.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${bl["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${vl.MaxWidth.xs} {
        width: calc(100vw - ${bl["xs-margin"]} * 2);
    }

    ${vl.MaxWidth.xxs} {
        width: calc(100vw - ${bl["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${ul["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,LT=q.default.div`
    background: transparent;
    padding: ${pl["spacing-8"]};
`,NT=q.default.ul`
    list-style-type: none;
`,HT=q.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${pl["spacing-8"]};
    padding: ${pl["spacing-12"]} ${pl["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?i.css`
                cursor: not-allowed;
            `:e.$active&&e.$selected?i.css`
                background: ${ul["bg-hover"]};
            `:e.$active?i.css`
                background: ${ul["bg-hover-subtle"]};
            `:void 0}
`,WT=q.default(D.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${ul["icon-selected"]};
`,VT=q.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,YT=q.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ul["icon-selected"]};
`,UT=q.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ul["icon-primary-subtlest"]};
`,KT=q.default(j.SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ul["icon-disabled-subtle"]};
`,qT=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,XT=q.default(xh)`
    cursor: pointer;
    overflow: hidden;
    color: ${ul["text-primary"]};
    font-size: inherit;
`,GT=q.default(XT)`
    ${fl["body-baseline-semibold"]}
`,ZT=q.default(XT)`
    ${fl["body-md-semibold"]}
    padding: ${pl["spacing-8"]} ${pl["spacing-8"]};
`,QT=q.default.div`
    width: 100%;
    display: flex;
    padding: ${pl["spacing-12"]} ${pl["spacing-16"]};
    align-items: center;
`,JT=q.default(s.ExclamationCircleFillIcon)`
    margin-right: ${pl["spacing-4"]};
    color: ${ul["icon-error"]};
    height: 1em;
    width: 1em;
`,eF=q.default(ad)`
    margin-right: ${pl["spacing-8"]};
    color: ${ul.icon};
`,tF=q.default.div`
    ${Fd()}
    color: ${ul["text-subtle"]};
    padding: 0 ${pl["spacing-16"]} ${pl["spacing-12"]}
        ${pl["spacing-16"]};
`,rF=q.default.div`
    background: ${ul["bg-strong"]};
    border-radius: ${ml.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}
`,nF=q.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${pl["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${pl["spacing-8"]} ${pl["spacing-16"]}
              `:i.css`10px ${pl["spacing-16"]}`};
`,iF=q.default(yh)`
    flex: 1;
`,oF=q.default(x.MagnifierIcon)`
    color: ${ul.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,aF=q.default(zl)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${pl["spacing-8"]};
    margin-left: -${pl["spacing-8"]};
    color: ${ul.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,sF=t.forwardRef(((t,r)=>{var{value:n,variant:i,onClear:o}=t,a=G(t,["value","variant","onClear"]);return e.jsxs(rF,{$variant:i,children:[e.jsxs(nF,{$variant:i,children:[e.jsx(oF,{"aria-hidden":!0}),e.jsx(iF,Object.assign({ref:r,value:n,$variant:i},a))]}),n&&e.jsx(aF,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]})})),lF=({listItems:r,multiSelect:n,maxSelectable:i,selectedItems:o,disableItemFocus:a,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:d=2,labelDisplayType:c="inline",variant:u="default",listboxId:f,width:h,topScrollItem:g,onSelectItem:p,onSelectAll:m,onDismiss:b,onRetry:v,valueExtractor:y,listExtractor:x,renderListItem:w,renderCustomCallToAction:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:j,searchPlaceholder:k="Search",searchFunction:D,onSearch:E})=>{const{focusedIndex:T,setFocusedIndex:F}=t.useContext(RT),[O,I]=t.useState(""),[M,_]=t.useState(null!=r?r:[]),A=Nc(s),B=Pc(),R=t.useRef(null),z=t.useRef(null),P=t.useRef([]),L=t.useRef(null),N=t.useRef(null),H=!!i&&!!o&&(null==o?void 0:o.length)===i,W=e=>{const t=x?x(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},V=t.useCallback((e=>!!KS(o,(t=>XS(t,e)))),[o]),Y=Bc((()=>null==D?void 0:D(O))),U=Bc((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:r}=W(e),n=O.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),K=(e,t)=>{H&&!V(e)||(F(t),null==p||p(e,(e=>y?y(e):e)(e)))},q=e=>{const t=e.target.value;I(t),null==E||E()},X=()=>{var e;I(""),null===(e=L.current)||void 0===e||e.focus(),null==E||E()},G=()=>{null==v||v()};Rc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),T<M.length-1){const e=T+1;null===(t=P.current[e])||void 0===t||t.focus(),F(e)}break;case"ArrowUp":if(e.preventDefault(),T>0){const e=T-1;null===(r=P.current[e])||void 0===r||r.focus(),F(e)}else 0===T&&L.current&&(L.current.focus(),F(-1));break;case"Space":case"Enter":document.activeElement===P.current[T]&&(e.preventDefault(),M[T]&&K(M[T],T))}})),t.useEffect((()=>{var e;if(!g)return void(null===(e=N.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(g);N.current&&-1!==e&&(N.current.scrollToIndex({index:e}),F(e))}),0);return()=>clearTimeout(t)}),[P,r,F,g]),t.useEffect((()=>{var e,t,n;if(B)return;if(a||!r)return;const i=r.findIndex((e=>V(e)));L.current?(F(-1),setTimeout((()=>{var e;return null===(e=L.current)||void 0===e?void 0:e.focus()}),200)):T>0?(null===(e=N.current)||void 0===e||e.scrollToIndex({index:T,align:"center"}),setTimeout((()=>{var e;return null===(e=P.current[T])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=N.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),F(i),setTimeout((()=>{var e;return null===(e=P.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=N.current)||void 0===n||n.scrollToIndex({index:0}),F(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200))}),[V,a,T,r,B,F]),t.useEffect((()=>{B&&A&&(a||"success"===s&&L.current&&(F(-1),L.current.focus()))}),[B,A,s,F,a]),t.useEffect((()=>{var e;_(null!==(e=""===O?r:D?Y():U())&&void 0!==e?e:[])}),[Y,U,r,D,O]);const Z=t=>n?H&&!t?e.jsx(KT,{"aria-hidden":!0}):t?e.jsx(YT,{"aria-hidden":!0}):e.jsx(UT,{"aria-hidden":!0}):t?e.jsx(WT,{"aria-hidden":!0}):e.jsx(VT,{}),Q=(t,r)=>{const{title:n,secondaryLabel:i}=W(t);return e.jsx(rk,{displayType:c,label:n,maxLines:d,selected:r,disabled:!r&&H,sublabel:i,truncationType:l,variant:u})},J=(t,r)=>{if(!v||"success"===s){const i=V(t),o=r===T;return e.jsx(HT,{"aria-selected":i,"aria-multiselectable":n,"aria-disabled":!i&&H,"data-testid":"list-item",onClick:()=>K(t,r),onMouseEnter:()=>(e=>{F(e)})(r),ref:e=>{P.current[r]=e},role:"option",tabIndex:o?0:-1,$active:o,$selected:i,$disabled:!i&&H,children:w?w(t,{selected:i}):e.jsxs(e.Fragment,{children:[Z(i),Q(t,i)]})},((e,t)=>`item_${t}__${y?y(e):e}`)(t,r))}},ee=()=>{if((C||D)&&"success"===s)return e.jsx(sF,{ref:L,onChange:q,value:O,placeholder:k,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:u})},te=()=>{if(o&&n&&M.length>0&&!O&&"success"===s)return e.jsx(qT,{children:e.jsx(ZT,{onClick:m,type:"button",$variant:u,children:i||0!==o.length?"Clear all":"Select all"})})},re=()=>{if(!S&&(O||!C)&&0===M.length&&"success"===s)return e.jsxs(e.Fragment,{children:[e.jsxs(QT,{"data-testid":"list-no-results",children:[e.jsx(JT,{"data-testid":"no-result-icon"}),"No results found."]}),j&&e.jsx(tF,{"data-testid":"no-result-desc",children:j})]})},ne=()=>{if(v&&"loading"===s)return e.jsxs(QT,{"data-testid":"list-loading",children:[e.jsx(eF,{}),"Loading..."]})},ie=()=>{if(v&&"fail"===s)return e.jsxs(QT,{"data-testid":"list-fail",children:[e.jsx(JT,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(GT,{onClick:G,type:"button",$variant:u,children:"Try again."})]})},oe=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx(NT,{role:"listbox",id:f,children:e.jsx(sT,Object.assign({ref:N,style:{height:"100%"},data:M,customScrollParent:null!==(t=R.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>J(t,e)},r?{initialItemCount:M.length}:{}),r?M.length:void 0)})};return e.jsxs(PT,{"data-testid":"dropdown-container",ref:R,$width:h,$variant:u,children:[e.jsxs(LT,{ref:z,"data-testid":"dropdown-list",children:[ee(),te(),re(),ne(),ie(),oe()]}),(()=>{if($)return e.jsx("div",{"data-testid":"custom-cta",children:$(b,M)})})()]})},dF=q.default(xh)`
    display: flex;
    align-items: center;
    gap: ${pl["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${pl["spacing-16"]};

    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,cF=q.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hl["duration-250"]} ${hl["ease-default"]};

    svg {
        color: ${ul.icon};
        height: 1em;
        width: 1em;
    }
`,uF=t.forwardRef((({children:t,disabled:r,expanded:n,listboxId:i,popupRole:o,readOnly:a,variant:s},l)=>e.jsxs(dF,{ref:l,type:"button","aria-expanded":n,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s,children:[t,!a&&e.jsx(cF,{$expanded:n,$variant:s,children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})})]})));var fF=Symbol.for("immer-nothing"),hF=Symbol.for("immer-draftable"),gF=Symbol.for("immer-state"),pF="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function mF(e,...t){if("production"!==process.env.NODE_ENV){const r=pF[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var bF=Object.getPrototypeOf;function vF(e){return!!e&&!!e[gF]}function yF(e){return!!e&&(wF(e)||Array.isArray(e)||!!e[hF]||!!e.constructor?.[hF]||kF(e)||DF(e))}var xF=Object.prototype.constructor.toString();function wF(e){if(!e||"object"!=typeof e)return!1;const t=bF(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===xF}function $F(e,t){0===CF(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function CF(e){const t=e[gF];return t?t.type_:Array.isArray(e)?1:kF(e)?2:DF(e)?3:0}function SF(e,t){return 2===CF(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function jF(e,t,r){const n=CF(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function kF(e){return e instanceof Map}function DF(e){return e instanceof Set}function EF(e){return e.copy_||e.base_}function TF(e,t){if(kF(e))return new Map(e);if(DF(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=wF(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[gF];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(bF(e),t)}{const t=bF(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function FF(e,t=!1){return IF(e)||vF(e)||!yF(e)||(CF(e)>1&&(e.set=e.add=e.clear=e.delete=OF),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>FF(t,!0)))),e}function OF(){mF(2)}function IF(e){return Object.isFrozen(e)}var MF,_F={};function AF(e){const t=_F[e];return t||mF(0,e),t}function BF(){return MF}function RF(e,t){t&&(AF("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function zF(e){PF(e),e.drafts_.forEach(NF),e.drafts_=null}function PF(e){e===MF&&(MF=e.parent_)}function LF(e){return MF={drafts_:[],parent_:MF,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function NF(e){const t=e[gF];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function HF(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[gF].modified_&&(zF(t),mF(4)),yF(e)&&(e=WF(t,e),t.parent_||YF(t,e)),t.patches_&&AF("Patches").generateReplacementPatches_(r[gF].base_,e,t.patches_,t.inversePatches_)):e=WF(t,r,[]),zF(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==fF?e:void 0}function WF(e,t,r){if(IF(t))return t;const n=t[gF];if(!n)return $F(t,((i,o)=>VF(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return YF(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),$F(i,((i,a)=>VF(e,n,t,i,a,r,o))),YF(e,t,!1),r&&e.patches_&&AF("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function VF(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&mF(5),vF(i)){const a=WF(e,i,o&&t&&3!==t.type_&&!SF(t.assigned_,n)?o.concat(n):void 0);if(jF(r,n,a),!vF(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(yF(i)&&!IF(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;WF(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||YF(e,i)}}function YF(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&FF(t,r)}var UF={get(e,t){if(t===gF)return e;const r=EF(e);if(!SF(r,t))return function(e,t,r){const n=XF(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!yF(n)?n:n===qF(e.base_,t)?(ZF(e),e.copy_[t]=QF(n,e)):n},has:(e,t)=>t in EF(e),ownKeys:e=>Reflect.ownKeys(EF(e)),set(e,t,r){const n=XF(EF(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=qF(EF(e),t),i=n?.[gF];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||SF(e.base_,t)))return!0;ZF(e),GF(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==qF(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,ZF(e),GF(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=EF(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){mF(11)},getPrototypeOf:e=>bF(e.base_),setPrototypeOf(){mF(12)}},KF={};function qF(e,t){const r=e[gF];return(r?EF(r):e)[t]}function XF(e,t){if(!(t in e))return;let r=bF(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=bF(r)}}function GF(e){e.modified_||(e.modified_=!0,e.parent_&&GF(e.parent_))}function ZF(e){e.copy_||(e.copy_=TF(e.base_,e.scope_.immer_.useStrictShallowCopy_))}$F(UF,((e,t)=>{KF[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),KF.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&mF(13),KF.set.call(this,e,t,void 0)},KF.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&mF(14),UF.set.call(this,e[0],t,r,e[0])};function QF(e,t){const r=kF(e)?AF("MapSet").proxyMap_(e,t):DF(e)?AF("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:BF(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=UF;r&&(i=[n],o=KF);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:BF()).drafts_.push(r),r}function JF(e){if(!yF(e)||IF(e))return e;const t=e[gF];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=TF(e,t.scope_.immer_.useStrictShallowCopy_)}else r=TF(e,!0);return $F(r,((e,t)=>{jF(r,e,JF(t))})),t&&(t.finalized_=!1),r}var eO=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&mF(6),void 0!==r&&"function"!=typeof r&&mF(7),yF(e)){const i=LF(this),o=QF(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?zF(i):PF(i)}return RF(i,r),HF(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===fF&&(n=void 0),this.autoFreeze_&&FF(n,!0),r){const t=[],i=[];AF("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}mF(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){yF(e)||mF(8),vF(e)&&(e=function(e){vF(e)||mF(10,e);return JF(e)}(e));const t=LF(this),r=QF(e,void 0);return r[gF].isManual_=!0,PF(t),r}finishDraft(e,t){const r=e&&e[gF];r&&r.isManual_||mF(9);const{scope_:n}=r;return RF(n,t),HF(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=AF("Patches").applyPatches_;return vF(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},tO=eO.produce;eO.produceWithPatches.bind(eO),eO.setAutoFreeze.bind(eO),eO.setUseStrictShallowCopy.bind(eO),eO.applyPatches.bind(eO),eO.createDraft.bind(eO),eO.finishDraft.bind(eO);var rO=J$,nO=OC,iO=y$,oO=Oi,aO=rC,sO=$$,lO=K$,dO=R$,cO=Object.prototype.hasOwnProperty;var uO=function(e){if(null==e)return!0;if(aO(e)&&(oO(e)||"string"==typeof e||"function"==typeof e.splice||sO(e)||dO(e)||iO(e)))return!e.length;var t=nO(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(lO(e))return!rO(e).length;for(var r in e)if(cO.call(e,r))return!1;return!0},fO=Fi(uO);const hO=(e,t,r)=>{const n=tO(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=pO(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},gO=(e,t)=>{const[r,...n]=t;if(fO(e)||fO(r))return;const i=e.find((e=>e.key===r));return i&&n.length?gO(i.subItems,n):i},pO=e=>e.join(","),mO=e=>new Set(e.map((e=>e.join(",")))),bO=q.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,vO=q.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${pl["spacing-8"]};
    padding: ${pl["spacing-12"]} ${pl["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&i.css`
            background: ${ul["bg-hover"]};
        `}
`,yO=q.default.div`
    height: 1px;
    width: calc((1lh + ${pl["spacing-8"]}) * ${e=>e.$level});
`,xO=q.default.div`
    width: 1lh;
    height: 1lh;
    color: ${ul["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${hl["duration-350"]}
            ${hl["ease-standard"]};

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,wO=q.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${pl["spacing-8"]};
`,$O=q.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":pl["spacing-16"]};

    display: flex;
    justify-content: center;
`,CO=q.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ul["icon-selected"]};
`,SO=({listItems:r,multiSelect:n=!1,selectedKeyPaths:i,itemsLoadState:o="success",itemTruncationType:a="end",itemMaxLines:s=2,variant:l="default",listboxId:d,width:c,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:g,onRetry:p,enableSearch:m,hideNoResultsDisplay:b,noResultsDescription:v,searchPlaceholder:y="Search",onSearch:x})=>{const w=n||f,[$,C]=t.useState(""),S=$.toLowerCase().trim(),[j,k]=t.useState(!1),D=t.useRef(null),T=t.useRef(null),F=t.useRef([]),O=t.useRef(null),I=Pc(),[M,_]=t.useState([]),[A,B]=t.useState([]),R=j?A:M,z=t.useMemo((()=>{let e=0;for(const t of M)t.level>e&&(e=t.level);return e}),[M]),[P,L]=t.useState(0),[N,H]=t.useState([]),[W,V]=t.useState(0),Y=e=>{const t=e.target.value;C(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==x||x()},U=()=>{var e;C(""),k(!1),null===(e=O.current)||void 0===e||e.focus(),null==x||x()},K=()=>{null==p||p()},q=()=>{if(0===i.size){const e=[],t=[];M.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==g||g(e,t)}else null==g||g([],[])},X=Bc(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var f,h;const g=s?s.level+1:0,p=s?[...s.keyPath,c.key]:[c.key],m=pO(p),b={item:c,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:p,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:g,visible:0===g||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(f=c.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(h=c.subItems)||void 0===h?void 0:h.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,n,S,t))),G=Bc((e=>{return i.size?(t=X(e,!1),tO(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>tO(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);XS(i,o)&&(n.visible=!0)}return e})))(X(e,!1));var t})),Z=Bc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(S))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),Q=Bc((()=>{_((e=>hO(e,i,n))),j&&B((e=>hO(e,i,n)))})),J=(e,t,r)=>{const n=((e,t,r)=>tO(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!XS(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(R,e,t);L(e),V(r),j?B(n):_(n)};Rc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(R,(e=>e.visible),P+1);r&&(V((e=>e+1)),L(r.index),null===(t=F.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(R,(e=>e.visible),P-1);t?(V((e=>e-1)),L(t.index),null===(r=F.current[t.index])||void 0===r||r.focus()):0===W&&O.current&&(O.current.focus(),V(-1),L(-1));break}case"ArrowRight":e.preventDefault(),J(P,!0,W);break;case"ArrowLeft":e.preventDefault(),J(P,!1,W);break;case"Space":if(document.activeElement===F.current[P]){e.preventDefault();const t=R[P];if(t.hasSubItems&&!w)return;null==h||h(t)}}})),t.useEffect((()=>{let e=[];"default"===u?e=G(r):"expand"===u?e=X(r,!0):"collapse"===u&&(e=X(r,!1)),_(e)}),[X,G,r,u]),t.useEffect((()=>{H(R.filter((e=>e.visible)))}),[j,R]),t.useEffect((()=>{Q()}),[n,i,Q]),t.useEffect((()=>{if(j&&$.trim().length>=3){const e=Z(r),t=(e=>tO(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(X(e,!1));B(t)}}),[Z,X,r,j,$]),t.useEffect((()=>{I||(O.current?(L(-1),V(-1),setTimeout((()=>{var e;return null===(e=O.current)||void 0===e?void 0:e.focus()}),200)):F.current[P]?setTimeout((()=>{var e;return null===(e=F.current[P])||void 0===e?void 0:e.focus()}),200):(L(0),V(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200)))}),[P,W,I]);const ee=()=>{if(m&&"success"===o)return e.jsx(sF,{ref:O,onChange:Y,value:$,placeholder:y,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:l})},te=()=>{if(n&&!j&&M.length>0&&"success"===o)return e.jsx(qT,{children:e.jsx(ZT,{onClick:q,type:"button",$variant:l,children:0===i.size?"Select all":"Clear all"})})},re=()=>{if(!b&&j&&0===A.length&&"success"===o)return e.jsxs(e.Fragment,{children:[e.jsxs(QT,{"data-testid":"list-no-results",children:[e.jsx(JT,{"data-testid":"no-result-icon"}),"No results found."]}),v&&e.jsx(tF,{"data-testid":"no-result-desc",children:v})]})},ne=()=>{if(p&&"loading"===o)return e.jsxs(QT,{"data-testid":"list-loading",children:[e.jsx(xd,{}),"Loading..."]})},ie=()=>{if(p&&"fail"===o)return e.jsxs(QT,{"data-testid":"list-fail",children:[e.jsx(JT,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(GT,{onClick:K,type:"button",$variant:l,children:"Try again."})]})},oe=t=>{if(n)switch(t.checked){case"mixed":return e.jsx(CO,{"aria-hidden":!0});case!0:return e.jsx(YT,{"aria-hidden":!0});default:return e.jsx(UT,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx($O,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e.jsx(WT,{"aria-hidden":!0})})},ae=(t,r)=>{const{level:i,visible:o,expanded:l,keyPath:d,checked:c,hasSubItems:u,indexInParent:f,parentSetSize:g}=t,p=t.index,m=W===r,b=u&&!w;return e.jsxs(bO,{$visible:o,children:[z>0&&e.jsx(yO,{$level:i}),z>0&&!u&&n&&e.jsx(wO,{}),e.jsxs(vO,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?J(p,!l,r):((e,t)=>{V(t),L(e),null==h||h(R[e])})(p,r)},onMouseEnter:()=>((e,t)=>{L(t.index),V(e)})(r,t),ref:e=>F.current[t.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[u&&e.jsx(xO,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),J(p,!l,r)},$expanded:l,children:e.jsx(E.CaretRightIcon,{})}),oe(t),e.jsx(rk,{bold:u,searchTerm:j?S:void 0,label:t.item.label,selected:!!c,truncationType:a,maxLines:s})]})]},`[${d.join("---")}]`)},se=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx("div",{"aria-multiselectable":n,id:d,ref:T,role:"tree",children:e.jsx(sT,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=D.current)&&void 0!==t?t:void 0,data:N,itemContent:(e,t)=>ae(t,e)},r?{initialItemCount:N.length}:{}),r?N.length:void 0)})};return e.jsx(PT,{"data-testid":"dropdown-container",ref:D,$width:c,$variant:l,children:e.jsxs(LT,{"data-testid":"nested-dropdown-list",children:[ee(),te(),re(),ne(),ie(),se()]})})},jO=({selectedOptions:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:d,enableSearch:c=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:g,onSelectOptions:p,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,noResultsDescription:C,renderCustomCallToAction:S,onBlur:j,variant:k="default",readOnly:D,alignment:E,dropdownZIndex:T,maxSelectable:F,dropdownRootNode:O})=>{const[I,M]=t.useState(r||[]),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>_c.generate())),P=t.useRef(null),L=t.useRef(null);t.useEffect((()=>{M(r||[])}),[r]);const N=()=>{I&&I.length>0||F?(M([]),K([])):(M(i),K(i))},H=(e,t)=>{const r=[...I],n=US(I,(e=>(h?h(e):e)===t));n>-1?r.splice(n,1):r.push(e),M(r),K(r)},W=()=>{_&&(A(!1),U(!1))},V=()=>{B||_||R(!0)},Y=e=>{B&&!_&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==j||j())},U=e=>{!e&&b&&b(),e&&m&&m()},K=e=>{p&&p(e)};return e.jsx(zT,{children:e.jsx(rg,{enabled:!D&&!o,isOpen:_,renderElement:()=>e.jsx(bh,{className:s,"data-testid":l,id:d,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:o,$readOnly:D,$error:a,children:e.jsx(uF,{ref:L,disabled:o,expanded:_,listboxId:z,popupRole:"listbox",readOnly:D,variant:k,children:e.jsx(qh,{$disabled:o,children:I&&0!==I.length?e.jsx(Xh,{$variant:k,children:i&&I.length===i.length?"All selected":`${I.length} selected`}):e.jsx(Gh,{truncateType:x,$variant:k,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(lF,{listboxId:z,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:h,listExtractor:g,enableSearch:c,searchFunction:u,searchPlaceholder:f,multiSelect:!0,maxSelectable:F,selectedItems:I,onSelectAll:N,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,noResultsDescription:C,renderCustomCallToAction:S,variant:k,width:t}),onOpen:()=>{A(!0),U(!0),R(!0)},onClose:e=>{A(!1),U(!1),"click"!==e&&(R(!1),null==j||j())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),U(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:T,rootNode:O})})},kO=(e,t)=>{const[r,...n]=t;if(fO(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?kO(i.subItems,n):i:void 0},DO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...DO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},EO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPaths:d,mode:c,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,noResultsDescription:p,readOnly:m,onSearch:b,onSelectOptions:v,onShowOptions:y,onHideOptions:x,onRetry:w,onBlur:$,optionsLoadState:C="success",optionTruncationType:S="end",variant:j="default",alignment:k,dropdownZIndex:D,dropdownRootNode:E})=>{const T=n,[F,O]=t.useState(d?mO(d):new Set),[I,M]=t.useState([]),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>_c.generate())),P=t.useRef(null),L=t.useRef(null),N=t.useRef(null);t.useEffect((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=kO(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(T,e);O(mO(e)),M(t)}),[d,T]);const H=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));O(mO(e)),M(r),X(e,r)},W=e=>{const t=G(e),r=t.map((e=>e.keyPath));M(t),O(mO(r)),X(r,t)},V=()=>{B||_||R(!0)},Y=e=>{B&&!_&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==$||$())},U=()=>{if(I.length>1)return`${I.length} selected`;const{label:e,value:t}=I[0];return u?u(t):e},K=e=>{if("middle"===S){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Ac.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&x&&x(),e&&y&&y()},X=(e,t)=>{if(v){const r=t.map((e=>e.value));v(e,r)}},G=e=>{if(!0===e.checked)return I.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!XS(e.keyPath,r)}));{const t=[...I],r=e.hasSubItems?((e,t)=>{const r=kO(e,t);return r&&r.subItems?DO(r.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{I.find((t=>XS(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(rg,{enabled:!m&&!i,isOpen:_,renderElement:()=>e.jsx(bh,{className:a,"data-testid":s,id:l,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:i,$readOnly:m,$error:o,children:e.jsx(uF,{ref:L,disabled:i,expanded:_,listboxId:z,popupRole:"tree",readOnly:m,variant:j,children:e.jsx(qh,{ref:N,$disabled:i,children:fO(I)?e.jsx(Gh,{truncateType:S,children:r}):e.jsx(Xh,{truncateType:S,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(SO,{listboxId:z,listItems:T,multiSelect:!0,selectedKeyPaths:F,itemsLoadState:C,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,noResultsDescription:p,onSelectItem:W,onSelectAll:H,onRetry:w,onSearch:b,variant:j,mode:c,width:t}),onOpen:()=>{A(!0),q(!0),R(!0)},onClose:e=>{A(!1),q(!1),"click"!==e&&(R(!1),null==$||$())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),q(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:D,rootNode:E})},TO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPath:d,mode:c,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:g,hideNoResultsDisplay:p,noResultsDescription:m,readOnly:b,onBlur:v,onSearch:y,onSelectOption:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:j="end",variant:k="default",alignment:D,dropdownZIndex:E,dropdownRootNode:T})=>{const F=n,[O,I]=t.useState(d?mO([d]):new Set),[M,_]=t.useState(),[A,B]=t.useState(!1),[R,z]=t.useState(!1),[P]=t.useState((()=>_c.generate())),L=t.useRef(null),N=t.useRef(null),H=t.useRef(null);t.useEffect((()=>{I(d?mO([d]):new Set);const e=gO(F,d||[]);_(null!=e?e:void 0)}),[d,F]);const W=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;I(mO([r])),_({label:n,value:i}),B(!1),q(!1),null===(t=N.current)||void 0===t||t.focus(),null==x||x(r,i)},V=()=>{R||A||z(!0)},Y=e=>{R&&!A&&L.current&&!L.current.contains(e.relatedTarget)&&(z(!1),null==v||v())},U=()=>{if(!M)return"";const{label:e,value:t}=M;return u?u(t):e},K=e=>{if("middle"===j){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Ac.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&$&&$(),e&&w&&w()};return e.jsx(rg,{enabled:!b&&!i,isOpen:A,renderElement:()=>e.jsx(bh,{className:a,"data-testid":s,id:l,ref:L,tabIndex:-1,onFocus:V,onBlur:Y,$focused:R,$disabled:i,$readOnly:b,$error:o,children:e.jsx(uF,{ref:N,disabled:i,expanded:A,listboxId:P,popupRole:"tree",readOnly:b,variant:k,children:e.jsx(qh,{ref:H,$disabled:i,children:fO(M)?e.jsx(Gh,{truncateType:j,children:r}):e.jsx(Xh,{truncateType:j,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(SO,{listboxId:P,listItems:F,selectedKeyPaths:O,selectableCategory:g,itemsLoadState:S,itemTruncationType:j,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,noResultsDescription:m,onSelectItem:W,onRetry:C,onSearch:y,variant:k,mode:c,width:t}),onOpen:()=>{B(!0),q(!0),z(!0)},onClose:e=>{B(!1),q(!1),"click"!==e&&(z(!1),null==v||v())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),B(!1),q(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:E,rootNode:T})};var FO=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var OO=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},IO=OO(),MO=aC;var _O=rC;var AO=function(e,t){return function(r,n){if(null==r)return r;if(!_O(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&IO(e,t,MO)}));var BO=FO,RO=AO,zO=MS,PO=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},LO=Oi;var NO=function(e,t,r){var n=LO(e)?BO:PO,i=arguments.length<3;return n(e,zO(t),r,i,RO)},HO=Fi(NO);const WO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],VO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var YO;!function(e){e.getCountries=()=>[].concat(...WO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:VO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return HO(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(YO||(YO={}));const UO=r=>{var{onChange:n,value:i,allowClear:o,onClear:a,onBlur:s,error:l,fixedCountry:d=!1,optionPlaceholder:c="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:g,placeholder:p,autoComplete:m}=r,b=G(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(YO.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),C=t.useRef(null),S=Lc({ref:C,formatter:e=>YO.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===KO(null==i?void 0:i.countryCode)))[0];x(e),$(YO.formatNumber(null==i?void 0:i.number,e))}),[i]);const j=e=>{D(w,e),n&&k(w,e)},k=(e,t)=>{const r=YO.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&qO(t.countryCode)})},D=(e,t)=>{$(YO.formatNumber(e,t)),x(t)};return e.jsx(_j,Object.assign({ref:C,value:w,onChange:()=>{const e=S();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),D(t,y),n&&k(t,y)},allowClear:o&&!!w,onClear:()=>{a?a():$("")},onBlur:s,error:l,placeholder:p,addon:d?{type:"label",attributes:{value:qO(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:c,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:qO(e.countryCode)}),onSelectOption:j,onHideOptions:h,onShowOptions:g}},inputMode:"numeric",autoComplete:m},b))},KO=e=>e?e.replace("+",""):"",qO=e=>e?e.includes("+")?e:`+${e}`:"",XO=({className:r,"data-testid":n,selectedOption:i,minimumCharacters:o=3,fetchOptions:a,placeholder:s="Enter here...",readOnly:l=!1,disabled:d=!1,error:c,valueExtractor:u,listExtractor:f,displayValueExtractor:h,onSelectOption:g})=>{const[p,m]=t.useState((()=>i?z(i):"")),[b,v]=t.useState((()=>i?z(i):"")),[y,x]=t.useState([]),[w,$]=t.useState(!0),[C,S]=t.useState(!1),[j,k]=t.useState(!!i),[D,E]=t.useState(i),T=t.useRef(a),F=e=>Z(void 0,void 0,void 0,(function*(){S(!1),$(!0);try{const t=yield T.current(e);v(e),x(t),$(!1)}catch(e){S(!0)}})),O=t.useCallback(Df((e=>F(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{T.current=a}),[a]),t.useEffect((()=>{p&&p.length>=o&&p!==b?O(p):O.cancel(),""===p&&D&&(g&&g(void 0,void 0),_(),E(void 0)),i&&p!==z(i)&&k(!1)}),[p,i]),t.useEffect((()=>{m(i?z(i):""),_(i),E(i)}),[i]);const I=e=>{m(e.target.value)},M=(e,t)=>{g&&g(e,t)},_=e=>{v(e?z(e):""),k(!!e),x([]),$(!0)},A=()=>{m(""),g&&g(void 0,void 0),_()},B=()=>{j||D?(_(D),m(z(D)),g&&g(D,P(D)),E(D)):A()},R=()=>!!p&&p.length>=o&&!j,z=e=>e?h?h(e):e.toString():"",P=e=>{if(e)return u?u(e):e},L=()=>e.jsx(xw,{type:"text",value:p,onChange:I,placeholder:s,readOnly:l,disabled:d,allowClear:!0,onClear:A,styleType:"no-border",onBlur:p.length<o?B:void 0});return e.jsxs(Zh,{className:r,show:R(),error:c&&!R(),disabled:d,readOnly:l,testId:n,onBlur:B,children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(Vh,{children:L()}),!l&&R()&&e.jsx(Kh,{}),e.jsx(yj,{listItems:y,onSelectItem:M,valueExtractor:u,listExtractor:f,itemsLoadState:C?"fail":w?"loading":"success",visible:R(),disableItemFocus:!0,onRetry:()=>F(p),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},GO=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,ZO=q.default(mw)`
    position: absolute;
    right: 0;
    padding-left: ${pl["spacing-8"]};
    margin-right: 0;
`,QO=q.default(Wh)`
    // space for clear icon
    padding-right: calc(1.25rem + ${pl["spacing-16"]});
`,JO=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:o,disabled:a,className:s,readOnly:l,error:d,"data-testid":c,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:g,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:k,renderListItem:D,renderCustomCallToAction:E}=r,T=G(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[F,O]=t.useState(),[I,M]=t.useState(),_=t.useRef(null),A={from:t.useRef(null),to:t.useRef(null)},[B,R]=t.useState("none");t.useEffect((()=>{O(null==n?void 0:n.from),M(null==n?void 0:n.to)}),[n]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),a||l||R("from"===e?"from":"to"===e&&F?"to":"from")},P=e=>{var t;const r="from"===e?F:I;if(!r)return"";if(v)return v(r);if(p){const e=p(r);return m?m(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},L=(e,t)=>{if("middle"===j){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),Ac.truncateOneLine(t,r,120,8)}return t},N=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const r="from"===t?F:I;return r?k?k(r):e.jsx(Xh,{truncateType:j,children:L(t,P(t))}):e.jsx(Gh,{truncateType:j,children:L(t,i[t]||"")})},W=t=>e.jsx(qh,{onClick:z(t),ref:A[t],$disabled:a,children:H(t)});return e.jsxs(Zh,{show:"none"!==B,error:d&&!("none"!==B),disabled:a,readOnly:l,testId:c,onBlur:()=>{N(!1),R("none"),F&&I||(M(void 0),O(void 0))},className:s,children:[e.jsxs(GO,{children:[e.jsx(QO,Object.assign({type:"button","data-testid":u||"selector",disabled:a,ref:_,onClick:z()},T,{children:e.jsxs(jg,{currentActive:(()=>{switch(B){case"from":return"start";case"to":return"end";case"none":return B}})(),children:[W("from"),W("to")]})})),"none"===B&&F&&I&&!l&&!a&&e.jsx(ZO,{onClick:e=>{e.stopPropagation(),O(void 0),M(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e.jsx(bw,{"aria-hidden":!0})})]}),"none"!==B&&e.jsx(Kh,{}),(()=>{if("none"===B)return null;const t=o[B];if(t&&t.length>0){const r="from"===B?F:I;return e.jsx(yj,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?O(e):M(e),N(!1),_&&(null===(n=_.current)||void 0===n||n.focus()),y&&y({[r]:e},t),"from"===r?(M(void 0),R("to"),N(!0)):R("none")})(e,t,B),onDismiss:()=>(()=>{var e;R("none"),N(!1),_&&(null===(e=_.current)||void 0===e||e.focus()),F&&I||(M(void 0),O(void 0))})(),valueExtractor:p,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:g,searchFunction:h,"data-testid":`${B}-dropdown-list`,selectedItems:r?[r]:[],onRetry:C,itemsLoadState:S[B],itemTruncationType:j,renderListItem:D,renderCustomCallToAction:E})}return null})()]})},eI=({selectedOption:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:d,enableSearch:c=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:g,listExtractor:p,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:C,renderListItem:S,hideNoResultsDisplay:j,noResultsDescription:k,renderCustomCallToAction:D,onBlur:E,variant:T="default",readOnly:F,alignment:O,dropdownZIndex:I,dropdownRootNode:M})=>{const[_,A]=t.useState(r),[B,R]=t.useState(!1),[z,P]=t.useState(!1),[L]=t.useState((()=>_c.generate())),N=t.useRef(null),H=t.useRef(null),W=t.useRef(null);t.useEffect((()=>{A(r)}),[r]);const V=(e,t)=>{var r;null===(r=H.current)||void 0===r||r.focus(),A(e),R(!1),G(!1),null==b||b(e,t)},Y=()=>{B&&(R(!1),G(!1))},U=()=>{z||B||P(!0)},K=e=>{z&&!B&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},q=()=>{var e;if(!_)return"";if(m)return m(_);if(h){const t=h(_);return g?g(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return _.toString()},X=e=>{if("middle"===$){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Ac.truncateOneLine(e,t,120,8)}return e},G=e=>{e?null==v||v():null==y||y()};return e.jsx(zT,{children:e.jsx(rg,{enabled:!F&&!o,isOpen:B,renderElement:()=>e.jsx(bh,{className:s,"data-testid":l,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:o,$readOnly:F,$error:a,children:e.jsx(uF,{ref:H,disabled:o,expanded:B,listboxId:L,popupRole:"listbox",readOnly:F,variant:T,children:e.jsx(qh,{ref:W,$disabled:o,children:_?C?C(_):e.jsx(Xh,{truncateType:$,$variant:T,children:X(q())}):e.jsx(Gh,{truncateType:$,$variant:T,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(lF,{listboxId:L,listItems:i,onSelectItem:V,onDismiss:Y,valueExtractor:h,listExtractor:p,enableSearch:c,searchPlaceholder:f,searchFunction:u,selectedItems:_?[_]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:j,noResultsDescription:k,renderCustomCallToAction:D,variant:T,width:t}),onOpen:()=>{R(!0),G(!0),P(!0)},onClose:e=>{R(!1),G(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),G(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:I,rootNode:M})})},tI=q.default.div`
    overflow: hidden;
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    background: ${ul.bg};
    padding: ${pl["spacing-16"]};
    min-width: 23rem;

    ${vl.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${bl["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${vl.MaxWidth.xs} {
        width: calc(100vw - ${bl["xs-margin"]} * 2);
    }

    ${vl.MaxWidth.xxs} {
        width: calc(100vw - ${bl["xxs-margin"]} * 2);
    }
`,rI=q.default.div`
    display: flex;
    align-items: baseline;
`,nI=q.default.div`
    margin: 0 0.5rem;
    color: ${ul.text};
`,iI=q.default.div`
    ${e=>"small"===e.$variant?fl["body-md-regular"]:fl["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${Pl(1)}
                `}}
    overflow: hidden;
`,oI=q.default(iI)`
    color: ${ul["text-subtler"]};
`,aI=r=>{var{alignment:n="left",className:i,disabled:o,dropdownZIndex:a,error:s,histogramSlider:l,id:d,onBlur:c,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:g="Select",rangeLabelPrefix:p,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y,dropdownRootNode:x}=r,w=G(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:$,bins:C=[],renderEmptyView:S,ariaLabels:j}=l,k=C.map((e=>e.minValue)),D=Math.min(...k),[E,T]=t.useState(W()),[F,O]=t.useState(!1),[I,M]=t.useState(!1),[_]=t.useState((()=>_c.generate())),A=t.useRef(null),B=t.useRef(null),R=t.useRef(null),z=w["data-testid"]||"select-histogram";t.useEffect((()=>{y!==E&&T(W())}),[y]);const P=e=>{T(e),null==u||u(e)},L=e=>{T(e),null==f||f(e)},N=()=>{I||F||M(!0)},H=e=>{I&&!F&&A.current&&!A.current.contains(e.relatedTarget)&&(M(!1),null==c||c())};function W(){return null!=y?y:[D,D+$]}const V=t=>v?v(t):e.jsxs(exports.Typography.BodyBL,{children:[p,t,m]});return e.jsx(zT,{children:e.jsx(rg,{enabled:!b&&!o,isOpen:F,renderElement:()=>e.jsx(bh,{className:i,"data-testid":z,id:d,ref:A,tabIndex:-1,onFocus:N,onBlur:H,$focused:I,$disabled:o,$readOnly:b,$error:s,children:e.jsx(uF,{ref:B,disabled:o,expanded:F,listboxId:_,popupRole:"dialog",readOnly:b,variant:"default",children:e.jsx(qh,{ref:R,$disabled:o,children:k&&0!==k.length?e.jsxs(rI,{children:[V(E[0]),e.jsx(nI,{children:"-"}),V(E[1])]}):e.jsx(oI,{truncateType:h,$variant:"default",children:g})})})}),renderDropdown:({elementWidth:t})=>e.jsx(tI,{style:{width:t},children:e.jsx(gw,{interval:$,value:E,bins:C,onChange:P,onChangeEnd:L,showRangeLabels:!1,renderEmptyView:S,ariaLabels:j})}),onOpen:()=>{O(!0)},onClose:()=>{O(!1)},onDismiss:()=>{var e;null===(e=B.current)||void 0===e||e.focus(),O(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:x})})},sI=r=>{var{value:n,ariaLabel:i,onChange:o,onChangeEnd:a}=r,s=G(r,["value","ariaLabel","onChange","onChangeEnd"]);const[l,d]=t.useState(c());t.useEffect((()=>{n!==l[0]&&d(c())}),[n]);function c(){return null!=n?[n]:[0]}return e.jsx(lw,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;d([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;d([t]),null==a||a(t)},ariaLabels:i?[i]:void 0}))},lI=q.default.p`
    text-align: right;
    ${fl["body-sm-semibold"]}
    color: ${ul["text-subtler"]};
`,dI=({value:r,maxLength:n,renderCustomCounter:i})=>{const[o,a]=t.useState("");t.useEffect((()=>{a(s(`${r||""}`))}),[r,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:U.default.isValidElement(o)?o:e.jsx(lI,{"data-testid":"counter-label",children:o})})},cI=q.default.div`
    display: flex;
    flex-direction: column;
`,uI=q.default.textarea`
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    background: ${ul.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${pl["spacing-12"]} ${pl["spacing-16"]};
    width: 100%;

    ${fl["body-baseline-regular"]}
    color: ${ul.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${gl["width-020"]} ${gl.solid}
            ${ul["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ul["text-subtler"]};
    }

    ${e=>e.readOnly?i.css`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${ul["border-focus"]};
                }
            `:e.disabled?i.css`
                background: ${ul["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${ul["border-disabled"]};
                }
            `:e.$error?i.css`
                border-color: ${ul["border-error"]};

                :focus,
                :active {
                    outline-color: ${ul["border-error-focus"]};
                }
            `:void 0}
`,fI=U.default.forwardRef(((r,n)=>{var{value:i,disabled:o,error:a,rows:s=5,prefix:l,transformValue:d,onChange:c,maxLength:u}=r,f=G(r,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,g]=t.useState(i);t.useEffect((()=>{g(i)}),[i]);return e.jsx(uI,Object.assign({ref:n,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=d?d(r):r;if(g(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=d?d(null!=t?t:""):t;g(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:a,rows:s,maxLength:l&&u?l.length+u:u},f))})),hI=U.default.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:a=5,onChange:s,transformValue:l,prefix:d,maxLength:c,renderCustomCounter:u}=r,f=G(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,g]=t.useState(i);t.useEffect((()=>{g(i)}),[i]);return e.jsxs(cI,{children:[e.jsx(fI,Object.assign({ref:n,disabled:o,value:h,rows:a||5,onChange:e=>{const t=e.target.value;g(t),s&&s(e)},prefix:d,transformValue:l,maxLength:c},f)),c&&e.jsx(dI,{value:h,maxLength:c,renderCustomCounter:u})]})})),gI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${pl["spacing-4"]};
`,pI=q.default.div`
    display: flex;
    flex: 1;
    margin-right: ${pl["spacing-12"]};
`,mI=q.default(Bx)`
    margin-top: 0;
`,bI=U.default.forwardRef(((r,n)=>{const{label:i,value:o,errorMessage:a,id:s="form-textarea","data-error-testid":l,"data-testid":d,onChange:c,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:g,xxsCols:p,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,transformValue:$,prefix:C=""}=r,S=G(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[j,k]=t.useState(o);t.useEffect((()=>{k(o)}),[o]);return e.jsxs(Vx,{id:s,label:i,disabled:S.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:g,xxsCols:p,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,children:[e.jsx(fI,Object.assign({id:`${s}-base`,"data-testid":d||s,value:j,error:!!a,onChange:e=>{const t=e.target.value;k(t),c&&c(e)},ref:n,prefix:C,transformValue:$},S)),a||S.maxLength?e.jsxs(gI,{children:[a&&e.jsx(pI,{children:e.jsx(mI,{"data-testid":l||(s?`${s}-error-message`:"error-message"),children:a})}),S.maxLength&&e.jsx(dI,{value:j,maxLength:S.maxLength,renderCustomCounter:S.renderCustomCounter})]}):e.jsx(e.Fragment,{})]})})),vI=q.default.div`
    position: relative;
`,yI=q.default(vh)`
    height: 3rem;
    gap: ${pl["spacing-8"]};
`,xI=q.default(yh)`
    display: block;
    width: 100%;
    flex: 1;
`,wI=q.default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?i.css`
                    color: ${ul["icon-selected-disabled"]};
                `:i.css`
                    color: ${ul["icon-disabled-subtle"]};
                `:e.$active?i.css`
                color: ${ul["icon-selected"]};
            `:i.css`
            color: ${ul["icon-subtle"]};
        `};
`,$I=i.css`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${fl.Spec["weight-regular"]};
        ${e=>e.$size&&fl[`${e.$size}-regular`]}
        color: ${ul.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,CI=q.default.ol`
    ${$I}

    margin-left: 3rem;

    ${vl.MaxWidth.lg} {
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
`,SI=q.default.ul`
    ${$I}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,jI=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=G(t,["size","bulletType","bottomMargin","children"]);return e.jsx(SI,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};jI.displayName="TextList.Ul";const kI=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=G(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e.jsx(CI,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};kI.displayName="TextList.Ol";const DI={Ul:jI,Ol:kI},EI=q.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${ul.bg};

    ${e=>{if(!e.$indicator)return i.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return i.css`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?i.css`
                            border-color: ${ul["border-error"]};
                        `:i.css`
                            border-color: ${ul["border-error"]};

                            &:has(${MI}:hover) {
                                background: ${ul["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border: none;
                            background: ${ul["bg-selected-disabled"]};
                        `:i.css`
                            border: none;
                        `:e.$selected?i.css`
                        border: none;
                        background: ${ul["bg-selected"]};

                        &:has(${MI}:hover) {
                            background: ${ul["bg-selected-hover"]};

                            & ${FI} {
                                color: ${ul["text-selected-hover"]};
                            }

                            & ${HI} {
                                color: ${ul["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border: none;

                    &:has(${MI}:hover) {
                        background: ${ul["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?i.css`
                            border-color: ${ul["border-error"]};
                        `:i.css`
                            border-color: ${ul["border-error"]};

                            &:has(${MI}:hover) {
                                background: ${ul["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border-color: ${ul["border-selected-disabled"]};
                            background: ${ul["bg-selected-disabled"]};
                        `:i.css`
                            border-color: ${ul["border-disabled"]};
                            background: ${ul["bg-disabled"]};
                        `:e.$selected?i.css`
                        border-color: ${ul["border-selected"]};
                        background: ${ul["bg-selected"]};

                        &:has(${MI}:hover) {
                            background: ${ul["bg-selected-hover"]};

                            & ${FI} {
                                color: ${ul["text-selected-hover"]};
                            }

                            & ${HI} {
                                color: ${ul["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border-color: ${ul.border};

                    &:has(${MI}:hover) {
                        background: ${ul["bg-hover-subtle"]};
                    }
                `}
`,TI=q.default.input`
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
`,FI=q.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${ul["text-selected-disabled"]};
                `:i.css`
                    color: ${ul["text-disabled"]};
                `:e.$selected?i.css`
                color: ${ul["text-selected"]};
            `:i.css`
            color: ${ul.text};
        `}
`,OI=q.default.label`
    ${fl["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${vl.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${vl.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,II=q.default.div`
    ${fl["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${fl["body-md-semibold"]}
    }
`,MI=q.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,_I=q.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,AI=q.default.button`
    color: ${e=>e.$disabled?ul["text-disabled"]:ul["text-error"]};
    white-space: nowrap;
    ${fl["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,BI=q.default.button`
    color: ${e=>e.disabled?ul["text-disabled"]:ul["text-primary"]};
    ${fl["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${ul.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,RI=q.default.div`
    width: 100%;
    color: ${e=>e.$disabled?ul["text-disabled"]:ul["text-error"]};
    border: none;
    background: ${ul.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,zI=q.default(zd)`
    width: 100%;
    user-select: none;
`,PI=q.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${ul.bg};
    ${Fd({textSize:"body-md"})}

    ${e=>e.$disabled?i.css`
                color: ${ul["text-disabled"]};
            `:e.$selected?i.css`
                color: ${ul["text-selected"]};
            `:i.css`
                color: ${ul.text};
            `}
`,LI=q.default(exports.Typography.BodyMD)`
    color: ${e=>e.$disabled?ul["text-disabled"]:ul["text-error"]};
`,NI=q.default(DI.Ul)`
    color: ${e=>e.$disabled?ul["text-disabled"]:ul["text-error"]};
`,HI=q.default((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=r?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":o=r?e.jsx(O.CircleDotIcon,{}):e.jsx(F.CircleIcon,{});break;case"tick":o=e.jsx(D.TickIcon,{});break;case"cross":o=e.jsx(m.CrossIcon,{});break;default:o=null}return e.jsx(wI,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${ul["icon-selected-disabled"]};
                `:i.css`
                    color: ${ul["icon-disabled-subtle"]};
                `:e.$selected?i.css`
                color: ${ul["icon-selected"]};
            `:i.css`
            color: ${ul["icon-subtle"]};
        `};
`,WI=({type:r="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:d,disabled:c,error:u,name:h,id:g,className:p,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:C,children:S,initialExpanded:j}=m||{},[k,D]=t.useState(o),[E,T]=t.useState(!!j),F=t.useMemo((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[O]=t.useState(_c.generate()),I=g?`${g}`:`tg-${O}`,M=t.useRef(null);t.useEffect((()=>{D(o)}),[o]),t.useEffect((()=>{k&&T(null==j||j)}),[k]);const _=e=>{if(!c){if(x)return void x(e);switch(r){case"checkbox":D((e=>!e));break;case"radio":case"yes":case"no":k||D(!0)}}},A=()=>{c||T(!E)},B=()=>{c||!v||v()},R=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e.jsx(HI,{type:t,active:k,disabled:c,$selected:k,$disabled:c})},z=()=>{if(!d)return null;let t;return t="function"==typeof d?d():d,e.jsx(II,{"data-id":"toggle-sublabel",children:t})},P=()=>{const t=!E&&!F;return $&&e.jsxs(BI,{$paddingTopRequired:t,disabled:c,onClick:A,"data-testid":E?"collapse-button":"expand-button",children:[E?"Show less":"Show more",E?e.jsx(n.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]})},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(LI,{weight:"semibold",$disabled:c,children:"Error"}),e.jsx(NI,{$disabled:c,children:null==t?void 0:t.map(((t,r)=>e.jsx("li",{id:`${I}-error-list-item-${r}`,children:e.jsx(LI,{weight:"semibold",$disabled:c,children:t})},r)))})]});return e.jsxs(EI,{$selected:k,$disabled:c,className:p,$styleType:a,$error:u,$indicator:i,$useContentWidth:w,id:g,"data-testid":y,children:[e.jsxs(MI,{id:`${I}-header-container`,$disabled:c,$error:u,$selected:k,$indicator:i,$styleType:a,children:[e.jsxs(_I,{$addPadding:b,children:[e.jsx(TI,{ref:M,name:h,id:`${I}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:_,checked:k}),i&&R(),e.jsxs(FI,{$selected:k,$disabled:c,children:[e.jsx(OI,{htmlFor:`${I}-input`,"data-testid":`${I}-toggle-label`,$maxLines:l,children:s}),d&&z()]})]}),b&&e.jsx(AI,{type:"button",$disabled:c,onClick:B,id:`${I}-remove-button`,children:"Remove"})]}),S&&e.jsxs("div",{children:[(!$||E)&&e.jsx(PI,{"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:c,children:S}),$&&!E&&F&&e.jsx(RI,{$disabled:c,onClick:A,id:`${I}-error-alert`,children:e.jsx(zI,{type:c?"description":"error",className:p,showIcon:!0,children:Array.isArray(C)?L(C):C})}),P()]})]})},VI=q.default(Ei.div)`
    position: absolute;
    top: calc(3rem + ${pl["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${vl.MaxWidth.xxs} {
        max-width: 100%;
    }
`,YI=q.default.div`
    position: relative;
    width: 100%;
    padding: ${pl["spacing-8"]} ${pl["spacing-20"]}
        ${pl["spacing-24"]} ${pl["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${ul.bg};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
`,UI=q.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${vl.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,KI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${pl["spacing-16"]};
    gap: ${pl["spacing-8"]} ${pl["spacing-16"]};

    ${vl.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${pl["spacing-32"]};
    }
`,qI=q.default.div`
    display: flex;
    align-items: center;
    margin-right: ${pl["spacing-32"]};

    ${vl.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,XI=q.default.div`
    display: flex;
    gap: ${pl["spacing-8"]};

    ${vl.MaxWidth.lg} {
        flex-direction: column;
    }

    ${vl.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,GI=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${vl.MaxWidth.xxs} {
        width: 6rem;
    }
`,ZI=q.default(zl)`
    width: 5rem;
    padding: ${pl["spacing-16"]} 0;
    color: ${ul.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${ul["icon-hover"]};
    }
`,QI=q.default(exports.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,JI=q.default(bh)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${vl.MaxWidth.xxs} {
        width: 100%;
    }
`,eM=q.default(yh)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,tM=q.default(WI)`
    min-width: 5rem;
    flex: 1;
`,rM=q.default(Sd.Small)`
    width: 7rem;

    ${vl.MaxWidth.sm} {
        flex: 1;
    }

    ${vl.MaxWidth.xxs} {
        width: 100%;
    }
`;var nM,iM,oM;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(nM||(nM={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(iM||(iM={})),function(e){e.AM="am",e.PM="pm"}(oM||(oM={}));const aM=({id:r,value:i,show:o,format:a,onChange:s,onCancel:l})=>{var d;const c=Of.getTimeValues(a,i),[u,h]=t.useState(c.hour),[g,p]=t.useState(c.minute),[m,b]=t.useState(c.period),v=t.useRef(null),y=t.useRef(null),x=Xe();t.useEffect((()=>{if(o&&v.current&&v.current.focus(),o){const{hour:e,minute:t,period:r}=Of.getTimeValues(a,i);h(e),p(t),b(r)}}),[o,i,a]),t.useEffect((()=>{const e=v.current,t=y.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=t.useCallback((e=>{switch(e.currentTarget.name){case nM.MINUTE_UP:p(Of.updateMinutes(g,"add"));break;case nM.MINUTE_DOWN:p(Of.updateMinutes(g,"minus"));break;case nM.HOUR_UP:h(Of.updateHours(u,"add"));break;case nM.HOUR_DOWN:h(Of.updateHours(u,"minus"))}}),[u,g]),C=e=>{e.target.select()},S=e=>{const t=e.target.value;switch(e.target.name){case iM.HOUR:t.length<=2&&h(t);break;case iM.MINUTE:t.length<=2&&p(t)}},j=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case iM.HOUR:{const r=t>23||t<0?c.hour:Of.convertHourTo12HourFormat(e.target.value);h(r);break}case iM.MINUTE:{const r=t>59||t<0?c.minute:e.target.value;p(Ac.padValue(r));break}}},k=e=>{switch(e.target.name){case oM.AM:b(Ff.AM);break;case oM.PM:b(Ff.PM)}},D=e=>r?`${r}-${e}`:e,E=ci({opacity:o?1:0,height:o?(null!==(d=x.height)&&void 0!==d?d:0)+32+2:0});return e.jsx(VI,{"data-testid":"animated-dropdown-wrapper",style:E,children:e.jsxs(YI,{ref:x.ref,"data-testid":D("timepicker-dropdown"),inert:o?void 0:"",children:[e.jsxs(UI,{children:[e.jsxs(qI,{children:[e.jsxs(GI,{children:[e.jsx(ZI,{"aria-label":"increase hour",name:nM.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":D("hour-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(JI,{children:e.jsx(eM,{"aria-label":"hour",type:"number",name:iM.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:C,onChange:S,onBlur:j,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")})}),e.jsx(ZI,{"aria-label":"decrease hour",name:nM.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":D("hour-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]}),e.jsx(QI,{children:":"}),e.jsxs(GI,{children:[e.jsx(ZI,{"aria-label":"increase minute",name:nM.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":D("minute-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(JI,{children:e.jsx(eM,{"aria-label":"minute",type:"number",name:iM.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:y,value:g,onChange:S,onBlur:j,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")})}),e.jsx(ZI,{"aria-label":"decrease minute",name:nM.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":D("minute-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]})]}),e.jsxs(XI,{children:[e.jsx(tM,{checked:m===Ff.AM,name:oM.AM,type:"radio",onChange:k,"data-testid":D("am-toggle"),"aria-label":"AM",children:"AM"}),e.jsx(tM,{checked:m===Ff.PM,name:oM.PM,type:"radio",onChange:k,"data-testid":D("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e.jsxs(KI,{children:[e.jsx(rM,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":D("cancel-button"),children:"Cancel"}),e.jsx(rM,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?Of.convertTo24HourFormat({hour:u,minute:g,period:m}):`${u}:${g}${m}`,s(e)},disabled:""===u||""===g,"data-testid":D("confirm-button"),children:"Done"})]})]})})},sM=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="24hr",readOnly:l,onChange:d,onFocus:c,onBlur:u}=r,f=G(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,g]=t.useState(!1),[p,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef(null);t.useEffect((()=>{a&&(v(a.start),x(a.end))}),[a]),Rc("mousedown",(function(e){i||j(e)}),"document"),Rc("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const $=()=>{S()},C=()=>{h||p||c&&c()},S=()=>{g(!1),m(!1),u&&u()},j=e=>{w.current&&!w.current.contains(e.target)&&(p||h)&&S()};return e.jsx(vI,Object.assign({ref:w,id:n},f,{children:e.jsxs(yI,{$disabled:i,$error:o,$readOnly:l,children:[e.jsxs(jg,{error:o,currentActive:h?"start":p?"end":"none",children:[e.jsx(xI,{onFocus:()=>{i||l||h||(m(!1),g(!0),C())},readOnly:!0,placeholder:"From",value:Of.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(xI,{onFocus:()=>{i||l||p||(g(!1),m(!0),C())},readOnly:!0,placeholder:"To",value:Of.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e.jsx(aM,{id:n,show:h,value:b,format:s,onCancel:$,onChange:e=>{g(!1),m(!0),v(e);d&&d({start:e,end:y})}}),e.jsx(aM,{id:n,show:p,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);d&&d({start:b,end:e}),""==b?g(!0):u&&u()}})]})}))},lM=q.default(vh)`
    height: 3rem;
    gap: ${pl["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${pl["spacing-20"]});
`,dM=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="12hr",readOnly:l,onChange:d,onFocus:c,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:g,endLimit:p,interval:m=15}=r,b=G(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>_c.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[C,S]=t.useState(""),[j,k]=t.useState(""),[D,E]=t.useState(""),[T,F]=t.useState(""),[O,I]=t.useState(""),M=t.useRef(null),_=t.useRef(null),A=t.useRef(null),B=t.useMemo((()=>Of.generateTimings(m,s,g,p)),[m,s,g,p]),R=t.useMemo((()=>{if(""===T)return B;const e=Of.findClosestFlooredTime(T,B);return e?B.slice(B.indexOf(e)):[]}),[B,T]),z=t.useCallback((e=>Of.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(a){const r=null!==(e=z(a.start))&&void 0!==e?e:"",n=null!==(t=z(a.end))&&void 0!==t?t:"";k(r),E(n),F(r),I(n)}}),[a,z]),t.useEffect((()=>{if(o)return void $(!1);const e=z(j),t=z(D);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&Of.to24Hour(t)<Of.to24Hour(e)))return S(""),void(document.activeElement!==_.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[j,D,z,o]);const P=e=>{i||l||(y||w||null==c||c(),x(e),$(!0))},L=e=>{var t;i||l||(x(e),$(!0),null===(t=("start"===e?_:A).current)||void 0===t||t.select())};function N(e){var t;switch(e.code){case"Enter":"start"===y?H(j):"end"===y&&(w&&W(D),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":V(j,D,{})}}const H=e=>{V(e,D,{goToNextInput:!0})},W=e=>{V(j,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=z(e))&&void 0!==i?i:T,l=null!==(o=z(t))&&void 0!==o?o:O;k(s),E(l);s===T&&l===O||null==d||d({start:s,end:l}),r&&void 0!==z(e)&&(x("end"),null===(a=A.current)||void 0===a||a.select()),n&&(x(null),$(!1),null==u||u()),F(s),I(l)},Y=e=>{e.stopPropagation(),k(""),E(""),F(""),I("");null==d||d({start:"",end:""}),x(null),$(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&y&&!w&&V(j,D,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==j?void 0:j.length)>0||(null==D?void 0:D.length)>0))return e.jsx(ZO,{onClick:Y,type:"button","aria-label":"Clear",children:e.jsx(bw,{"aria-hidden":!0})})};return e.jsxs(vI,Object.assign({id:n},b,{children:[e.jsx(zT,{children:e.jsx(rg,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(lM,{ref:M,$disabled:i,$error:o||!!C,$readOnly:l,onBlur:U,children:[e.jsxs(jg,{error:o||!!C,currentActive:null===y?"none":y,children:[e.jsx(xI,{ref:_,onFocus:()=>P("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>k(e.target.value),value:j,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:N,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx(xI,{ref:A,onFocus:()=>P("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>E(e.target.value),value:D,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:N,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(w)return"start"===y?e.jsx(lF,{listItems:B,onSelectItem:H,selectedItems:[j],disableItemFocus:!0,topScrollItem:Of.findClosestFlooredTime(z(j),B),listboxId:v}):e.jsx(lF,{listItems:R,onSelectItem:W,selectedItems:[D],disableItemFocus:!0,topScrollItem:Of.findClosestFlooredTime(z(D),R),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):V(j,D,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===y?_:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!o&&C&&e.jsx(Bx,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:C})]}))},cM=t=>{var{variant:r="dial"}=t,n=G(t,["variant"]);return"combobox"===r?e.jsx(dM,Object.assign({},n)):e.jsx(sM,Object.assign({},n))};q.default.div`
    position: relative;
`;const uM=q.default(yh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,fM=r=>{var{id:n,disabled:i=!1,readOnly:o=!1,error:a,value:s,placeholder:l,format:d="24hr",onChange:c,onFocus:u,onBlur:f}=r,h=G(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[g,p]=t.useState(!1),m=t.useRef(null);Rc("mousedown",(function(e){i||o||y(e)}),"document"),Rc("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||o||g||(p(!0),u&&u())};const v=()=>{p(!1),f&&f()},y=e=>{m.current&&!m.current.contains(e.target)&&g&&v()},x=t.useCallback((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,l]);return e.jsxs(vh,Object.assign({ref:m,id:n,$readOnly:o,$disabled:i,$error:a},h,{children:[e.jsx(uM,{onFocus:b,focused:g,readOnly:!0,placeholder:l||x(),value:Of.formatDisplayValue(s,d),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e.jsx(aM,{id:n,show:g,value:s,format:d,onCancel:()=>{v()},onChange:e=>{c&&c(e),v()}})]}))},hM=q.default(Ij)`
    margin-right: 0.5rem;
`,gM=q.default(xw)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,pM=q.default(gM)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,mM=q.default(exports.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${ul["text-disabled"]};
            `}}
`,bM=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,vM=q.default(exports.Typography.BodyBL)``,yM=r=>{var{disabled:n,error:i,value:o,onChange:a,onBlur:s,onChangeRaw:l,onBlurRaw:d,readOnly:c,placeholder:u="00-8888",autoComplete:f}=r,h=G(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[g,p]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),C=t.useRef(g),S=t.useRef(m),j=t.useRef(v),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),D=Lc({ref:w,formatter:k}),E=Lc({ref:$,formatter:k}),T=e=>{C.current=e,p(e)},F=e=>{S.current=e,b(e)},O=e=>{j.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===g.length&&$.current&&$.current.focus()}),[g]),t.useEffect((()=>{R(o)}),[o]);const I=e=>{O(e.target.name),e.target.select()},M=e=>{const t=e.target.name,r=e.target.value,n=B(r);"floor"===t?(T(n),n!==g&&z(n,t)):"unit"===t&&(F(n),n!==m&&z(n,t))},_=e=>{const t=e.target.name;if("floor"===t){const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),T(r),z(r,t)}else if("unit"===t){const e=E();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),F(r),z(r,t)}},A=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&(null===(t=w.current)||void 0===t||t.focus())},B=e=>/^[0-9]$/.test(e)?Ac.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==xM)if(void 0===e||0===e.length)T(""),F("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];T("floor"===v?e:B(e)),F("unit"===v?r:B(r))}}},z=(e,t)=>{if(!a&&!l)return;const r={floor:C.current,unit:S.current};if(r[t]=e,a){const e=L(r);a(e)}l&&l([r.floor,r.unit])},P=()=>{if(!s&&!d)return;const e={floor:B(C.current),unit:B(S.current)};if(s){const t=L(e);s(t)}d&&d([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":xM},N=e=>e.split("-");return e.jsxs(vh,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:n,$error:i,$readOnly:c,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==j.current&&(O("none"),P())},children:[e.jsx(hM,{"data-testid":"addon",$disabled:n,$readOnly:c,children:"#"}),c&&o?(t=>{const r=t.split("-");return e.jsxs(bM,{children:[e.jsx(vM,{children:r[0]}),e.jsx(mM,{children:"-"}),e.jsx(vM,{children:r[1]})]})})(o):e.jsxs(e.Fragment,{children:[e.jsx(gM,{name:"floor",maxLength:3,value:g,ref:w,onFocus:I,onBlur:M,onChange:_,disabled:n,readOnly:c,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||c?N(u)[0]:"",autoComplete:f,styleType:"no-border"}),e.jsx(mM,{$inactive:0===g.length,children:"-"}),e.jsx(pM,{name:"unit",maxLength:5,value:m,ref:$,onFocus:I,onBlur:M,onChange:_,onKeyDown:A,disabled:n,readOnly:c,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||c?N(u)[1]:"",autoComplete:f,styleType:"no-border"})]})]}))},xM="Invalid unit number",wM={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(hg,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(Fg,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(Ep,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(gw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:ww,InputGroup:Aj,MaskedInput:Xj,Label:zx,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=G(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(jO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(TO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(EO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=G(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(eI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(aI,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(sI,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(lw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:g,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(JO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:bI,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(fM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(cM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=G(t,["id","data-error-testid","children"]);return e.jsx(Vx,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(yM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(UO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Vx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:g,lgCols:p,xlCols:m,xxlCols:b,children:e.jsx(XO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},$M=q.default.li`
    display: flex;
    flex-direction: column;
    padding: ${pl["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
    }
`,CM=q.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${pl["spacing-16"]};
    width: 100%;
`,SM=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,jM=q.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${pl["spacing-16"]};

    ${vl.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,kM=q.default(exports.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${pl["spacing-16"]};

    ${vl.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${pl["spacing-8"]};
    }
`,DM=q.default(exports.Typography.BodyMD)``,EM=q.default.div`
    display: flex;
    ${vl.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return i.css`
                margin-left: calc(
                    96px + ${pl["spacing-32"]}
                ); // thumbnail width + right margin

                ${vl.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,TM=q.default(Sd.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${pl["spacing-16"]};
    }

    ${vl.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${pl["spacing-16"]};
        }
    }
`,FM=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:n,onReplaceClick:i})=>e.jsxs(OM,{"data-testid":r,children:[e.jsx(IM,{"data-testid":r?`${r}-image`:void 0,src:t}),n&&e.jsx(MM,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),OM=q.default.div`
    width: auto;
    margin-right: ${pl["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,IM=q.default(Qp)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${ml.sm};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    object-fit: cover;

    ${vl.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,MM=q.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${pl["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${fl["body-md-semibold"]}
    color: ${ul["text-primary"]};

    :hover {
        color: ${ul["text-hover"]};
    }
`,_M=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:o,onCancel:a,onBlur:s})=>{const{id:l,name:d,size:c,truncateText:u=!0,thumbnailImageDataUrl:f}=r,[h,g]=t.useState(),[p,m]=t.useState(""),b=t.useRef(null),v=t.useRef(null);t.useEffect((()=>{g(y(d))}),[i]),t.useEffect((()=>{m(r.description||"")}),[r]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return Ac.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs($M,{"data-testid":`${l}-edit-display`,children:[e.jsxs(CM,{children:[f&&e.jsx(FM,{thumbnailImageDataUrl:f}),e.jsxs(SM,{children:[e.jsxs(jM,{ref:v,children:[e.jsx(kM,{weight:"semibold",children:h}),e.jsx(DM,{children:Zp.formatFileSizeDisplay(c)})]}),e.jsx(wM.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:p,maxLength:n,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(EM,{$thumbnail:!!f,children:[e.jsx(TM,{"data-testid":`${l}-save-button`,type:"button",disabled:0===p.trim().length,onClick:()=>{b.current&&o(b.current.value.trim())},children:"Save"}),e.jsx(TM,{type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:a,children:"Cancel"})]})]})},AM=q.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${pl["spacing-16"]};
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
`,BM=q.default(_.DragHandleIcon)`
    margin-right: ${pl["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${ul.icon};

    ${e=>e.$active?i.css`
                color: ${ul["icon-primary"]};
            `:e.$disabled?i.css`
                color: ${ul["icon-disabled"]};
            `:void 0};
`,RM=q.default.div`
    background: ${ul["bg-primary-subtlest"]};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.sm};
    padding: ${pl["spacing-16"]} ${pl["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${vl.MaxWidth.sm} {
        padding: ${pl["spacing-16"]};
    }

    ${e=>e.$focused?i.css`
                border-color: ${ul["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${ul["border-focus"]} r g b / 50%);
            `:e.$disabled?i.css`
                border-color: ${ul["border-disabled"]};
            `:e.$error?i.css`
                background: ${ul["bg-error"]};
                border-color: ${ul["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return i.css`
                ${vl.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,zM=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${vl.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${vl.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,PM=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,LM=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${vl.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,NM=q.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${pl["spacing-8"]};
    justify-content: flex-end;

    ${vl.MaxWidth.sm} {
        ${e=>e.$hideInMobile?i.css`
                    display: none;
                    visibility: hidden;
                `:i.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${pl["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,HM=q.default(exports.Typography.BodyMD)``,WM=q.default(HM)`
    margin-top: ${pl["spacing-4"]};
`,VM=q.default(exports.Typography.BodySM)`
    color: ${ul["text-error"]};
`,YM=q.default(VM)`
    margin-top: ${pl["spacing-4"]};
    ${vl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,UM=q.default(VM)`
    display: none;
    visibility: hidden;
    ${vl.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${pl["spacing-8"]};
    }
`,KM=q.default.div`
    width: 6rem;
    margin-left: ${pl["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${vl.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${pl["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${pl["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,qM=q.default(pg)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${pl["spacing-16"]};
    }
`,XM=q.default(zl)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ul.icon};
    }
`,GM=t.memo((({fileItem:r,editable:n,sortable:i,wrapperWidth:o,disabled:a,readOnly:s,onDelete:l,onEditClick:d})=>{const{id:c,name:u,size:f,description:h,progress:g=1,errorMessage:p,thumbnailImageDataUrl:b,truncateText:v=!0}=r,[y,x]=t.useState(),{activeId:w}=t.useContext(mm),{attributes:$,listeners:C,setNodeRef:S,transform:j,transition:k}=px({id:c}),D=t.useRef(null),E={transform:gv.Translate.toString(j),transition:k},T=Object.assign(Object.assign({style:E},$),C),F=g<1,O=Zp.formatFileSizeDisplay(f),_=w?w===c?"self":"others":"none";t.useEffect((()=>{x(z(u))}),[o]);const A=()=>{l()},B=()=>{d&&d()},R=e=>{i&&e.stopPropagation()},z=e=>{if(!v)return e;const t=D&&D.current?D.current.getBoundingClientRect().width:0;return Ac.truncateOneLine(e,t,t/2,t/2/8,16)},P=()=>a||!!w,L=()=>!!i&&!s,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(HM,{weight:h?"semibold":"regular",children:y}),h&&e.jsx(WM,{children:h})]});return e.jsxs(AM,Object.assign({id:c,ref:S,$sortable:L(),$disabled:P(),$focusType:_},L()?T:{},{children:[L()&&e.jsx(BM,{"data-testid":`${c}-drag-handle`,$disabled:P(),$active:"self"===_}),e.jsxs(RM,{$focused:"self"===_,$error:!!p,$loading:F,$disabled:P(),$editable:n,children:[(()=>{let t;return t=p?e.jsxs(e.Fragment,{children:[e.jsxs(PM,{ref:D,children:[N(),p&&e.jsx(YM,{weight:"semibold",children:p})]}),e.jsx(NM,{children:e.jsx(HM,{children:O})}),p&&e.jsx(UM,{weight:"semibold",children:p})]}):b?(t=>e.jsxs(e.Fragment,{children:[e.jsx(FM,{thumbnailImageDataUrl:t,"data-testid":`${c}-thumbnail`}),e.jsxs(LM,{children:[e.jsx(PM,{ref:D,children:N()}),e.jsx(NM,{children:e.jsx(HM,{children:O})})]})]}))(b):e.jsxs(e.Fragment,{children:[e.jsx(PM,{ref:D,children:N()}),e.jsx(NM,{$hideInMobile:F,children:e.jsx(HM,{children:O})})]}),e.jsx(zM,{$hasThumbnail:!!b,children:t})})(),!s&&(()=>{let t;return t=p?e.jsx(XM,{onClick:A,"data-testid":`${c}-error-delete-button`,"aria-label":`delete-${u}`,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}):F?e.jsx(ep,{progress:g,"data-testid":`${c}-progress-bar`}):e.jsxs(e.Fragment,{children:[n&&e.jsx(qM,{"data-testid":`${c}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:P(),onClick:B,onKeyDown:R,children:e.jsx(M.PencilIcon,{"aria-hidden":!0})},"edit"),e.jsx(qM,{"data-testid":`${c}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:P(),onClick:A,onKeyDown:R,children:e.jsx(I.BinIcon,{"aria-hidden":!0})},"delete")]}),e.jsx(KM,{$editable:n,$error:!!p,$loading:F,children:t})})()]})]}))})),ZM=q.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":pl["spacing-32"]};
`,QM=q.default.li`
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};

    :not(:last-child) {
        margin-bottom: ${pl["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${pl["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,JM=({fileItems:r,editableFileItems:n,fileDescriptionMaxLength:i,sortable:o,disabled:a,readOnly:s,onItemUpdate:l,onItemDelete:d,onSort:c})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(mm),{width:g=0,ref:p}=Xe(),m=t.useRef({}),b=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>[...r].filter((e=>null!=e))),[...r])}(kv(xx,{activationConstraint:{distance:8}}),kv(yy,{activationConstraint:{delay:150,tolerance:5}}),kv(dy,{coordinateGetter:vx})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(E(r))}),[r]);const y=e=>t=>{T(e.id,"display"),v(e.id);const r=Object.assign(Object.assign({},e),{description:t});l(r)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?T(e.id,"display"):d(e),v(e.id)},$=e=>()=>{T(e.id,"edit")},C=e=>()=>{d(e)},S=e=>{if(c&&r){const{active:t,over:n}=e;if(n&&t.id!==n.id){const e=r.findIndex((e=>e.id===t.id)),i=r.findIndex((e=>e.id===n.id)),o=ex(r,e,i);c(o)}}h(void 0)},j=e=>{const{active:t}=e;h(t.id)},k=e=>n&&Zp.isSupportedImageType(e.type),D=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&k(e)&&!e.description,E=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":u[r.id]?t[r.id]=u[r.id]:t[r.id]=D(r)?"edit":"display";return t},T=(e,t)=>{f((r=>Object.assign(Object.assign({},r),{[e]:t})))},F=()=>r&&r.length>1&&o&&Object.values(u).every((e=>"display"===e)),O=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(r,u);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==m.current[t.id]&&(r.description=m.current[t.id]),e.jsx(_M,{fileItem:r,wrapperWidth:g,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(QM,{children:e.jsx("ul",{children:n})},`editable-${r}`)})(t,r):e.jsx(GM,{fileItem:t,editable:k(t),wrapperWidth:g,sortable:F(),disabled:a,readOnly:s,onDelete:C(t),onEditClick:$(t)},t.id)))};return r&&0!==r.length?a||s||!F()?e.jsx(ZM,{$readOnly:s,ref:p,children:O()}):e.jsx(Xy,{sensors:b,onDragEnd:S,onDragStart:j,children:e.jsx(lx,{items:r,strategy:ox,children:e.jsx(ZM,{$readOnly:s,ref:p,children:O()})})}):null},e_=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${pl["spacing-32"]};
    gap: ${pl["spacing-8"]};
`,t_=q.default(exports.Typography.BodyBL)``,r_=q.default.div`
    color: ${ul.text};
    ${Fd({textSize:"body-baseline"})}
`,n_=q.default(exports.Typography.BodyMD)`
    color: ${ul["text-subtler"]};
`,i_=q.default.div`
    color: ${ul.text};
    ${Fd({textSize:"body-md"})}
`,o_=q.default(zd)`
    margin-bottom: ${pl["spacing-32"]};
`,a_=q.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${vl.MaxWidth.sm} {
        align-items: flex-start;
    }
`,s_=q.default(Sd.Small)`
    width: 10rem;

    ${vl.MaxWidth.sm} {
        width: 100%;
    }
`,l_=q.default.label`
    ${fl["body-md-semibold"]}
    color: ${ul["text-subtler"]};
    margin-top: ${pl["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${vl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,d_=q.default(zd)`
    margin-bottom: ${pl["spacing-32"]};
`,c_=U.default.createContext({mode:"default",rootNode:{current:null}});var u_=Fi((function(e){return null==e}));const f_=q.default.div`
    background-color: ${e=>e.$collapsible?ul["bg-strong"]:ul.bg};
    ${vl.MaxWidth.lg} {
        background-color: ${ul["bg-strong"]};
    }
`,h_=q.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${ul.border};

    ${vl.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${pl["spacing-16"]};
    }
`,g_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${ul.bg};

    ${vl.MaxWidth.lg} {
        background-color: transparent;
    }
`,p_=q.default(zl)`
    margin: 0 0 0 auto;

    color: ${ul.icon};
    &:hover {
        color: ${ul["icon-hover"]};
    }
`,m_=q.default(f.ChevronDownIcon)`
    height: ${fl.Spec["body-size-baseline"]};
    width: ${fl.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hl["duration-350"]} ${hl["ease-standard"]};
`,b_=q.default.p`
    ${fl["heading-xs-semibold"]}
    color: ${ul.text};

    margin: ${pl["spacing-24"]} 0 ${pl["spacing-24"]}
        ${pl["spacing-20"]};

    ${vl.MaxWidth.lg} {
        ${fl["body-md-semibold"]}
        color: ${ul["text-subtle"]};

        margin: ${pl["spacing-24"]} ${pl["spacing-20"]} 0
            ${pl["spacing-20"]};
    }
`,v_=q.default(Ei.div)`
    overflow: hidden;
`,y_=q.default.div`
    padding: ${pl["spacing-24"]} ${pl["spacing-20"]};
`,x_=q.default(Ei.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,w_=q.default(Sd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${pl["spacing-16"]} 0 0 0;
`,$_=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:d,showDivider:c=!0,showMobileDivider:u=!0,title:f,addon:h,children:g}=r,p=G(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:b}=t.useContext(c_),v="mobile"===m,[y,x]=t.useState(E()),[w,$]=t.useState(l),C=!v&&i,S=Xe(),j=Xe(),k=ci({height:y?S.height:0}),D=w?null!=d?d:Math.min(.5*(null!==(n=j.height)&&void 0!==n?n:0),216):j.height;t.useEffect((()=>{x(E())}),[i,a]);function E(){return!!v||(u_(a)?!i||o:a)}return e.jsxs(f_,{$collapsible:C,children:[e.jsx(h_,{$showDivider:c,$showMobileDivider:u}),(f||C)&&e.jsxs(g_,{children:[f&&e.jsxs(b_,{children:[f," ",h&&("popover"===(null==h?void 0:h.type)?e.jsx(_x,{addon:h,rootNode:v?b:void 0}):null)]}),C&&e.jsx(p_,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!y;u_(a)&&x(e),s&&s(e)},"aria-label":y?"Collapse":"Expand",children:e.jsx(m_,{$expanded:y})})]}),e.jsx(v_,{"data-testid":"expandable-container","data-expanded":y,style:k,children:e.jsx("div",{ref:S.ref,children:e.jsxs(y_,Object.assign({},p,{children:[e.jsx(x_,{"data-testid":"minimisable-container",$height:D,$minimisable:l,children:e.jsx("div",{ref:j.ref,children:e.jsx("div",{"data-id":"content-container",children:"function"==typeof g?g(m,{minimised:w}):g})})}),l&&e.jsxs(w_,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!w)},children:["View ",w?"more":"less"]})]}))})})]})};$_.displayName="Filter.Item";const C_=q.default($_)`
    padding: 0 0 ${pl["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${pl["spacing-8"]} ${pl["spacing-8"]} 0;

        ${vl.MaxWidth.lg} {
            padding: ${pl["spacing-16"]} ${pl["spacing-20"]}
                ${pl["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${pl["spacing-8"]} ${pl["spacing-20"]} 0;
    }
`,S_=q.default.div`
    display: flex;
    flex-direction: column;

    ${vl.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${pl["spacing-16"]};
    }
`,j_=q.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${pl["spacing-8"]} ${pl["spacing-12"]};

    cursor: pointer;
    ${fl["body-md-regular"]}
    color: ${ul.text};
    ${e=>e.$selected&&i.css`
            color: ${ul["text-selected"]};
        `}

    ${vl.MaxWidth.lg} {
        padding: ${pl["spacing-8"]};
    }
`,k_=q.default(lf)`
    flex-shrink: 0;
    margin-right: ${pl["spacing-8"]};
`,D_=q.default(WI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,E_=q.default(Sd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${pl["spacing-16"]} 0 ${pl["spacing-8"]}
        ${pl["spacing-12"]};

    ${vl.MaxWidth.lg} {
        margin: 0 0 ${pl["spacing-16"]} 0;
    }
`,T_=r=>{var{selectedOptions:n,options:i,onSelect:o,labelExtractor:a,valueExtractor:s,useToggleContentWidth:l}=r,d=G(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:c}=t.useContext(c_),[u,f]=t.useState(n||[]),[h,g]=t.useState(),[p,m]=t.useState(i.length),b=t.useRef(null),v=t.useRef(null),y=e=>()=>{const t=[...u],r=u.findIndex((t=>$(t)===$(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==o||o(t)},x=()=>{const e=u.length?[]:i;f(e),null==o||o(e)},w=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},C=t.useCallback((()=>{if(!b.current)return void g(void 0);const e=Array.from(b.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}m(t),g(r>2?n-8:void 0)}),[]);t.useEffect((()=>{n!==u&&f(n||[])}),[n]),t.useEffect((()=>{"default"===c?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;g(e)})():C()}),[i]),Xe({handleWidth:"mobile"===c,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:C});return e.jsx(C_,Object.assign({minimisable:i.length>5,minimisedHeight:h},d,{children:(t,{minimised:r})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(E_,{styleType:"link",type:"button",onClick:x,children:u.length?"Clear all":"Select all"}),e.jsx(S_,{role:"group","aria-label":d.title,ref:b,children:i.map(((n,i)=>"default"===t?((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsxs(j_,{$visible:!n||r<5,$selected:a,ref:4===r?v:void 0,children:[e.jsx(k_,{displaySize:"small",checked:a,onChange:y(t)}),i]},o)})(n,i,r):((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsx(D_,{type:"checkbox",checked:a,$visible:!n||!!h&&r<=p,onChange:y(t),useContentWidth:l,children:i},o)})(n,i,r)))})]})}))};T_.displayName="Filter.Checkbox";const F_=q.default.div`
    background-color: ${ul.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,O_=q.default.div`
    background-color: ${ul.bg};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-radius: ${ml.md};
    overflow: hidden;
    width: 100%;
`,I_=q.default.div`
    background-color: ${ul["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,M_=q.default.div`
    background-color: ${ul.bg};
    height: 100%;
    width: 100%;
`,__=q.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,A_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${ul.bg};

    ${vl.MaxWidth.lg} {
        border-bottom: ${gl["width-010"]} ${gl.solid}
            ${ul.border};
    }
`,B_=q.default(exports.Typography.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${pl["spacing-24"]} 0 ${pl["spacing-24"]}
        ${pl["spacing-20"]};

    ${vl.MaxWidth.lg} {
        text-align: center;
        margin: ${pl["spacing-24"]} 0;
    }
`,R_=q.default(zl)`
    padding: ${pl["spacing-24"]} ${pl["spacing-20"]};
    margin-right: auto;
    color: ${ul.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${ul["icon-hover"]};
    }
`,z_=q.default(Sd.Small)`
    background-color: transparent;
    padding-right: ${pl["spacing-20"]};
    padding-left: ${pl["spacing-20"]};
    height: 100%;

    ${vl.MaxWidth.lg} {
        padding: ${pl["spacing-24"]} ${pl["spacing-20"]};
    }
`,P_=q.default(Jc.Default)`
    width: 100%;
`,L_=q.default.div`
    padding: ${pl["spacing-24"]} ${pl["spacing-20"]};
    background-color: ${ul.bg};
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};
`,N_=q.default(Sd.Default)`
    width: 100%;
`,H_=({onDismiss:t,onDone:r,children:n})=>e.jsxs(F_,{children:[e.jsx(R_,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(g.ChevronLeftIcon,{})}),e.jsx(__,{children:n}),e.jsx(L_,{children:e.jsx(N_,{onClick:r,type:"button",children:"Done"})})]});H_.displayName="Filter.Page";const W_=r=>{var{toggleFilterButtonLabel:n="Filters",toggleFilterButtonStyle:o="light",headerTitle:a="Filters",clearButtonDisabled:s=!1,onClear:l,onDismiss:d,onDone:c,children:f}=r,h=G(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[g,p]=t.useState(!1),m=t.useRef(null),b=t.useRef(null),v=i.useTheme(),y=bl["lg-max"]({theme:v}),x=Jd.useMediaQuery({maxWidth:y});t.useEffect((()=>{x||$()}),[x]);const w=()=>{p(!0)},$=()=>{p(!1),d&&d()},C=()=>{p(!1),c&&c()},S=()=>{l&&l()},j=e=>"function"==typeof f?f(e):f,k=t=>e.jsxs(A_,{children:["mobile"===t&&e.jsx(R_,{onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(u.CrossIcon,{})}),e.jsx(B_,{weight:"semibold",children:a}),e.jsx(z_,{styleType:"link",type:"button",onClick:S,disabled:s,children:"Clear"})]});return e.jsx("div",Object.assign({},h,{children:x?e.jsx(c_.Provider,{value:{mode:"mobile",rootNode:m},children:e.jsxs(e.Fragment,{children:[e.jsx(P_,{"data-testid":"filter-show-button",styleType:o,onClick:w,type:"button",icon:e.jsx(u.FilterIcon,{}),children:n}),e.jsx(Ug,{show:g,disableTransition:!0,children:e.jsx(M_,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:e.jsxs(I_,{ref:m,children:[k("mobile"),e.jsx(__,{children:j("mobile")}),e.jsx(L_,{children:e.jsx(N_,{onClick:C,type:"button",children:"Done"})})]})})})]})}):e.jsx(c_.Provider,{value:{mode:"default",rootNode:b},children:e.jsxs(O_,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b,children:[k("default"),j("default")]})})}))};W_.displayName="Filter";const V_=Object.assign(W_,{Item:$_,Page:H_,Checkbox:T_}),Y_=q.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${vl.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,U_=q.default(exports.Typography.BodyMD)`
    margin-bottom: ${pl["spacing-16"]};
`,K_=q.default.div`
    display: flex;
    align-items: flex-start;
`,q_=q.default.a`
    &:not(:last-child) {
        margin-right: ${pl["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${vl.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${pl["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,X_=()=>e.jsxs(Y_,{"data-testid":"download-app-section",children:[e.jsx(U_,{weight:"semibold",children:"Download the app"}),e.jsxs(K_,{children:[e.jsx(q_,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(q_,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),G_={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Z_={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Q_={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var J_;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${gc(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return Z_;case"mylegacy":return Q_;default:return G_}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(J_||(J_={}));const eA=q.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i.css`
                padding: 0 ${bl["xxl-margin"]}px;
            `:i.css`
                padding: 0 ${bl["xxl-margin"]}px;
                max-width: 1440px;

                ${vl.MaxWidth.xl} {
                    padding: 0 ${bl["xl-margin"]}px;
                }

                ${vl.MaxWidth.lg} {
                    padding: 0 ${bl["lg-margin"]}px;
                }

                ${vl.MaxWidth.md} {
                    padding: 0 ${bl["md-margin"]}px;
                }

                ${vl.MaxWidth.sm} {
                    padding: 0 ${bl["sm-margin"]}px;
                }

                ${vl.MaxWidth.xs} {
                    padding: 0 ${bl["xs-margin"]}px;
                }

                ${vl.MaxWidth.xxs} {
                    padding: 0 ${bl["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: ${bl["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${bl["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${vl.MaxWidth.xl} {
                        column-gap: ${bl["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${bl["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${vl.MaxWidth.lg} {
                        column-gap: ${bl["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${bl["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${vl.MaxWidth.md} {
                        column-gap: ${bl["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${bl["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${vl.MaxWidth.sm} {
                        column-gap: ${bl["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${bl["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${vl.MaxWidth.xs} {
                        column-gap: ${bl["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${bl["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${vl.MaxWidth.xxs} {
                        column-gap: ${bl["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${bl["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,tA=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=G(t,["children","data-testid","type","stretch"]);return e.jsx(eA,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),rA=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=G(t,["children","data-testid","stretch"]);return e.jsx(nA,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),nA=q.default.section`
    display: block;
    position: relative;
`,iA=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=G(t,["children","data-testid","className","type","stretch"]);return e.jsx(rA,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(tA,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),oA={Section:rA,Container:tA,Content:iA,ColDiv:Ig},aA=q.default.footer`
    background: ${ul["bg-strong"]};
`,sA=q.default(exports.Typography.LinkSM)`
    color: ${ul.text};
`,lA=q.default(Hg)`
    width: 100%;
`,dA=q.default(oA.Content)`
    padding: ${pl["spacing-64"]} 0;

    ${vl.MaxWidth.lg} {
        padding: ${pl["spacing-32"]} 0;
    }
`,cA=q.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${vl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${pl["spacing-32"]};
    }

    ${vl.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${pl["spacing-32"]};
    }
`,uA=q.default.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${pl["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${vl.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${vl.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,fA=q.default.div`
    grid-column: 13 / span 6;

    ${vl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${pl["spacing-32"]};
    }

    ${vl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,hA=q.default(oA.Content)`
    padding: ${pl["spacing-20"]} 0;

    ${vl.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${pl["spacing-16"]} 0;
    }
`,gA=q.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${pl["spacing-16"]};
    }

    ${vl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${vl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,pA=q.default(gA)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${vl.MaxWidth.lg} {
        margin-top: ${pl["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${vl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,mA=q.default(exports.Typography.LinkXS)`
    color: ${ul.text};
    &:not(:last-child) {
        margin-right: ${pl["spacing-16"]};
    }

    svg {
        color: ${ul.icon};
    }

    &:hover {
        color: ${ul["text-subtler"]};
        svg {
            color: ${ul["icon-subtle"]};
        }
    }

    ${vl.MaxWidth.lg} {
        margin-bottom: ${pl["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${vl.MaxWidth.lg} {
        margin-bottom: ${pl["spacing-8"]};
    }
`;var bA=function(e,t){return Number(e.toFixed(t))},vA=function(e,t,r){r&&"function"==typeof r&&r(e,t)},yA={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},xA=function(e){"number"==typeof e&&cancelAnimationFrame(e)},wA=function(e){e.mounted&&(xA(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function $A(e,t,r,n){if(e.mounted){var i=(new Date).getTime();wA(e),e.animation=function(){if(!e.mounted)return xA(e.animation);var o=(new Date).getTime()-i,a=(0,yA[t])(o/r);o>=r?(n(1),e.animation=null):e.animation&&(n(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function CA(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,d=a.positionY,c=t.scale-s,u=t.positionX-l,f=t.positionY-d;0===r?o(t.scale,t.positionX,t.positionY):$A(e,n,r,(function(e){o(s+c*e,l+u*e,d+f*e)}))}}var SA=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},jA=function(e,t,r,n){return bA(n?e<t?t:e>r?r:e:e,2)},kA=function(e,t){var r=SA(e,t);return e.bounds=r,r};function DA(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,d=r.maxPositionX,c=r.maxPositionY,u=0,f=0;return a&&(u=i,f=o),{x:jA(e,s-u,d+u,n),y:jA(t,l-f,c+f,n)}}function EA(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,d=a.positionY,c=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:d}):DA(l-t*c,d-r*c,i,o,0,0,null)}function TA(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var FA=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!lB(o,r)},OA=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function IA(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,d=l.scale,c=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==c||r!==u)){var f=DA(t,r,s,o,n,i,a),h=f.x,g=f.y;e.setTransformState(d,h,g)}}var MA=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0};function _A(e,t,r,n,i,o,a,s,l,d){if(i){var c;if(t>a&&r>a)return(c=a+(e-a)*d)>l?l:c<a?a:c;if(t<o&&r<o)return(c=o+(e-o)*d)<s?s:c>o?o:c}return n?t:jA(e,o,a,i)}function AA(e,t){var r=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)}(e);if(r){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(n&&i&&a){var d=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),c=t.x-n.x,u=t.y-n.y,f=c/d,h=u/d,g=l-i,p=c*c+u*u,m=Math.sqrt(p)/g;e.velocity={velocityX:f,velocityY:h,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function BA(e,t){var r=e.transformState.scale;wA(e),kA(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function RA(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,d=i.animationType;if(!(o||t<n||!a&&!s)){var c=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,d=e.wrapperComponent;if(!a&&d&&e.bounds){var c=e.bounds,u=c.maxPositionX,f=c.minPositionX,h=c.maxPositionY,g=c.minPositionY,p=r>u||r<f,m=n>h||n<g,b=EA(e,r>u?d.offsetWidth:e.setup.minPositionX||0,n>h?d.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:p?v:r,positionY:m?y:n}}}(e);c&&CA(e,c,l,d)}}function zA(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,d=i.positionY;if(!n)return{x:l,y:d};var c=t-n.x,u=r-n.y;return{x:a?l:c,y:s?d:u}}(e,t,r),l=s.x,d=s.y,c=MA(e,o),u=MA(e,a);AA(e,{x:l,y:d}),IA(e,l,d,c,u)}}function PA(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,d=(null==a?void 0:a.width)||0,c=(null==a?void 0:a.height)||0,u=s<d||l<c;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!r||!n)}(e);if(o&&t&&r&&i){var a=t.velocityX,s=t.velocityY,l=t.total,d=r.maxPositionX,c=r.minPositionX,u=r.maxPositionY,f=r.minPositionY,h=n.limitToBounds,g=n.alignmentAnimation,p=n.zoomAnimation,m=n.panning,b=m.lockAxisY,v=m.lockAxisX,y=p.animationType,x=g.sizeX,w=g.sizeY,$=g.velocityAlignmentTime,C=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,l),S=Math.max(C,$),j=MA(e,x),k=MA(e,w),D=j*i.offsetWidth/100,E=k*i.offsetHeight/100,T=d+D,F=c-D,O=u+E,I=f-E,M=e.transformState,_=(new Date).getTime();$A(e,y,S,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,o=r.positionY,l=((new Date).getTime()-_)/$,p=1-(0,yA[g.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=_A(y,M.positionX,i,v,h,c,d,F,T,p),C=_A(x,M.positionY,o,b,h,f,u,I,O,p);i===y&&o===x||e.setTransformState(n,w,C)}))}}(e):RA(e)}}function LA(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=TA(bA(t,2),o,a,0,!1),d=EA(e,r,n,l,kA(e,l),s);return{scale:l,positionX:d.x,positionY:d.y}}function NA(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,d=l.disabled,c=l.animationTime,u=l.animationType,f=d||n>=a;if((n>=1||s)&&RA(e),!f&&i&&e.mounted){var h=LA(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);h&&CA(e,h,c,u)}}var HA=function(){return HA=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},HA.apply(this,arguments)};function WA(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var VA=1,YA=0,UA=0,KA={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},qA=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:VA,scale:null!==(r=e.initialScale)&&void 0!==r?r:VA,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:YA,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:UA}},XA=function(e){var t=HA({},KA);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==KA[r]&&n){var i=Object.prototype.toString.call(KA[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?HA(HA({},KA[r]),e[r]):a?WA(WA([],KA[r],!0),e[r],!0):e[r]}})),t},GA=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,d=o.smooth,c=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=d?n*Math.exp(t*r):n+t*r;return TA(bA(u,3),s,a,c,!1)};function ZA(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,d=a.positionY;if(!o)return console.error("No WrapperComponent found");var c=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-d)/s,f=LA(e,GA(e,t,r),c,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");CA(e,f,n,i)}function QA(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=qA(e.props),l=e.transformState,d=l.scale,c=l.positionX,u=l.positionY;if(o){var f=SA(e,s.scale),h=DA(s.positionX,s.positionY,f,a,0,0,o),g={scale:s.scale,positionX:h.x,positionY:h.y};d===s.scale&&c===s.positionX&&u===s.positionY||(null==n||n(),CA(e,g,t,r))}}var JA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),ZA(e,1,t,r,n)}},eB=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),ZA(e,-1,t,r,n)}},tB=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,d=a.scale,c=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&c&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?d:n};CA(e,f,i,o)}}},rB=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),QA(e,t,r)}},nB=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=cB(t||i.scale,o,a);CA(e,s,r,n)}}},iB=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),wA(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,d=a.maxScale;if(!n||!i)return o;var c,u,f,h,g,p,m,b,v=n.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(c=n,u=i,f=o,h=t.getBoundingClientRect(),g=c.getBoundingClientRect(),p=u.getBoundingClientRect(),m=g.x*f.scale,b=g.y*f.scale,{x:(h.x-p.x+m)/f.scale,y:(h.y-p.y+b)/f.scale}),w=x.x,$=x.y,C=y.width/o.scale,S=y.height/o.scale,j=n.offsetWidth/C,k=n.offsetHeight/S,D=TA(r||Math.min(j,k),l,d,0,!1),E=(v.width-C*D)/2,T=(v.height-S*D)/2,F=DA((v.left-w)*D+E,(v.top-$)*D+T,SA(e,D),s,0,0,n);return{positionX:F.x,positionY:F.y,scale:D}}(e,a,r);CA(e,s,n,i)}}},oB=function(e){return{instance:e,zoomIn:JA(e),zoomOut:eB(e),setTransform:tB(e),resetTransform:rB(e),centerView:nB(e),zoomToElement:iB(e)}},aB=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,oB(e)),t};function sB(){try{return{get passive(){return!1}}}catch(e){return!1}}var lB=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},dB=function(e){e&&clearTimeout(e)},cB=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function uB(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var fB=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},hB=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,d=a.centerZoomedOut,c=a.zoomAnimation,u=a.wheel,f=a.disablePadding,h=a.smooth,g=c.size,p=c.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,d=s.minScale,c=s.zoomAnimation,u=s.disablePadding,f=c.size,h=c.disabled;if(!a)throw new Error("Wrapper is not mounted");var g=o+t*r;if(i)return g;var p=!n&&!h;return TA(bA(g,3),d,l,f,p&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=kA(e,y),w=uB(t,o,s),$=l&&(p||0===g||d||f),C=EA(e,w.x,w.y,y,x,$),S=C.x,j=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,j),vA(aB(e),t,n),vA(aB(e),t,i)}},gB=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;dB(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(NA(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(dB(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,vA(aB(e),t,n),vA(aB(e),t,i))}),160))},pB=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,d=l.disabled,c=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=bA(i[0].clientX-n.left,5),a=bA(i[0].clientY-n.top,5);return{x:(o+bA(i[1].clientX-n.left,5))/2/t,y:(a+bA(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=fB(t),h=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,d=s.size,c=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:TA(bA(t/n*r,2),a,o,d,!c&&!l)}(e,f);if(h!==i){var g=kA(e,h),p=a&&(d||0===c||s),m=EA(e,u.x,u.y,h,g,p),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},mB=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;dB(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,vA(aB(e),t,r)}),n)};function bB(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,d=s.onZoom,c=r.doubleClick,u=c.disabled,f=c.mode,h=c.step,g=c.animationTime,p=c.animationType;if(!u&&!n){if("reset"===f)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;vA(aB(e),t,n),QA(e,a,s,(function(){return vA(aB(e),t,i)})),mB(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=GA(e,m,h);if(a!==b){vA(aB(e),t,l);var v=uB(t,o,a),y=LA(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");vA(aB(e),t,d),CA(e,y,g,p),mB(e,t)}}}var vB=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,kA(t,t.transformState.scale),t.setup=XA(e)},this.initializeWindowEvents=function(){var e,r,n=sB(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=sB(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),wA(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=sB();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(aB(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(aB(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,d=t.target;return!(!s||l||n||!d||i&&!t.ctrlKey||o&&t.ctrlKey||lB(d,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(wA(e),vA(aB(e),t,n),vA(aB(e),t,i))}(t,e),hB(t,e),gB(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,d=s-e.deltaX,c=l-e.deltaY,u=o.lockAxisX?s:d,f=o.lockAxisY?l:c,h=t.setup.alignmentAnimation,g=h.sizeX,p=h.sizeY,m=MA(t,g),b=MA(t,p);u===s&&f===l||IA(t,u,f,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||FA(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),wA(t),BA(t,e),vA(aB(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||OA(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),zA(t,e.clientX,e.clientY),vA(aB(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(PA(t),vA(aB(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||lB(a,i))}(t,e);a&&(function(e,t){var r=fB(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,wA(e)}(t,e),wA(t),vA(aB(t),e,i),vA(aB(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),pB(t,e),vA(aB(t),e,i),vA(aB(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,NA(r,null==n?void 0:n.x,null==n?void 0:n.y),vA(aB(t),e,o),vA(aB(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&FA(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,wA(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(wA(t),BA(t,e),vA(aB(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!OA(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];zA(t,i.clientX,i.clientY),vA(aB(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,d=null==i?void 0:i.contains(l);return!(!(r&&l&&d)||a||lB(l,s))}(t,e);r&&bB(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=aB(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),vA(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=cB(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return aB(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,kA(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=aB(t);vA(n,void 0,t.props.onInit)},this.props=e,this.setup=XA(this.props),this.transformState=qA(this.props)},yB=U.default.createContext(null),xB=U.default.forwardRef((function(e,r){var n=t.useRef(new vB(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,oB(n));return t.useImperativeHandle(r,(function(){return oB(n)}),[n]),t.useEffect((function(){n.update(e)}),[n,e]),U.default.createElement(yB.Provider,{value:n},i)}));U.default.forwardRef((function(e,r){var n,i=t.useRef(null),o=t.useContext(yB);return t.useEffect((function(){return o.onChange((function(e){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),U.default.createElement("div",HA({},e,{ref:(n=[i,r],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var wB="transform-component-module_wrapper__SPB86",$B="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var CB=function(e){var r=e.children,n=e.wrapperClass,i=void 0===n?"":n,o=e.contentClass,a=void 0===o?"":o,s=e.wrapperStyle,l=e.contentStyle,d=e.wrapperProps,c=void 0===d?{}:d,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(yB),g=h.init,p=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&g&&(null==g||g(e,t)),function(){null==p||p()}}),[]),U.default.createElement("div",HA({},c,{ref:m,className:"react-transform-wrapper ".concat(wB," ").concat(i),style:s}),U.default.createElement("div",HA({},f,{ref:b,className:"react-transform-component ".concat($B," ").concat(a),style:l}),r))};const SB=q.default.div`
    background-color: ${ul["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${ul["icon-subtle"]};
    }
`,jB=t=>e.jsx(SB,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),kB=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,DB=q.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,EB=q.default(jB)`
    width: 100%;
    height: 100%;
`,TB=({src:r,className:n,alt:i,fit:o,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[d,c]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{c(!0),f(void 0);const e=new Image;e.src=r,e.onload=()=>{s&&l&&l({src:r,width:e.width,height:e.height}),c(!1)},e.onerror=e=>{c(!1),f(e)}}),[r]);return e.jsx(kB,{className:n,children:u?null!=a?a:e.jsx(EB,{}):d?e.jsx(Vd,{}):e.jsx(DB,{src:r,alt:i,$fit:o})})},FB=q.default(zl)`
    padding: 0;
    border-radius: 100%;
    background: ${ul.bg};
    color: ${ul["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,OB=q.default(FB)`
    position: absolute;
    top: ${pl["spacing-48"]};
    right: ${pl["spacing-48"]};
    z-index: 5;

    ${vl.MaxWidth.sm} {
        top: ${pl["spacing-20"]};
        right: ${pl["spacing-20"]};
    }
`,IB=q.default(FB)`
    position: absolute;
    top: ${pl["spacing-48"]};
    right: calc(
        2.5rem + ${pl["spacing-48"]} + ${pl["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${vl.MaxWidth.sm} {
        top: ${pl["spacing-20"]};
        right: calc(
            2.5rem + ${pl["spacing-20"]} + ${pl["spacing-16"]}
        );
    }
`,MB=q.default(FB)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&i.css`
            left: ${pl["spacing-48"]};
            ${vl.MaxWidth.sm} {
                left: ${pl["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&i.css`
            right: ${pl["spacing-48"]};
            ${vl.MaxWidth.sm} {
                right: ${pl["spacing-20"]};
            }
        `}
`,_B=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,AB=q.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,BB=q.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,RB=q.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,zB=q.default.div`
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
`,PB=q.default(TB)`
    height: 100%;
    width: 100%;
`,LB=q.default(jB)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,NB=q.default.div`
    display: flex;
    justify-content: center;
    padding: ${pl["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,HB=q.default(exports.Typography.BodyXS)`
    display: inline-flex;
    padding: ${pl["spacing-4"]} ${pl["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${ml.full};
    background-color: ${ul.bg};
    text-align: center;
`,WB=q.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${ul["bg-inverse"]};
    padding: ${pl["spacing-24"]} ${pl["spacing-16"]};

    ${vl.MaxWidth.sm} {
        padding: ${pl["spacing-16"]} ${pl["spacing-20"]};
    }
`,VB=q.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${pl["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,YB=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${vl.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,UB=q.default.div`
    cursor: pointer;
    background-color: ${ul["bg-inverse"]};
    border-radius: ${ml.md};
    border: ${gl.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${vl.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?i.css`
                  border-width: ${gl["width-040"]};
                  border-color: ${ul["border-selected"]};

                  ${vl.MaxWidth.sm} {
                      border-width: ${gl["width-020"]};
                  }

                  :hover {
                      border-color: ${ul["border-selected-hover"]};
                  }
              `:i.css`
                  border-width: ${gl["width-010"]};

                  :hover {
                      border-color: ${ul["border-hover"]};
                  }
              `};
`,KB=q.default(TB)`
    height: 100%;
    width: 100%;
`,qB=(r,n)=>{var{items:i,initialActiveItemIndex:o,hideThumbnail:a=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:d=!1,onClose:c}=r,f=G(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,g]=t.useState(null!=o?o:0),[p,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(),[w,$]=t.useState(),C=t.useRef(null),S=t.useRef([]),j=t.useRef([]),k=y&&w?y-w:0;t.useImperativeHandle(n,(()=>({currentItemIndex:h,setCurrentItem:I,goToPrevItem:F,goToNextItem:O}))),Rc("keydown",(function(e){"ArrowRight"===e.key?O():"ArrowLeft"===e.key?F():"Escape"===e.key&&c&&c()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const D=e=>{v(e.state.scale)};const E=({src:e,height:t,width:r})=>{m((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},T=()=>{const e=p[i[h].src];if(C.current&&e){const{clientHeight:t,clientWidth:r}=C.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},F=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),g((e=>0===e?i.length-1:e-1))},O=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),g((e=>e===i.length-1?0:e+1))},I=e=>{var t,r;null===(r=null===(t=j.current)||void 0===t?void 0:t[h])||void 0===r||r.resetTransform(),g(e)};return e.jsxs(sp,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e.jsx(OB,{"aria-label":"Close image carousel",onClick:c,focusHighlight:!1,children:e.jsx(u.CrossIcon,{"aria-hidden":!0})}),!d&&e.jsx(IB,{"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===b){const r=T();null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(r),v(null!=r?r:1)}else v(1),null===(n=null===(r=j.current)||void 0===r?void 0:r[h])||void 0===n||n.resetTransform()},focusHighlight:!1,children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})}),e.jsxs(_B,{children:[e.jsxs(AB,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(MB,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:F,children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})}),e.jsx(MB,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:O,children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})})]}),e.jsx(BB,{ref:C,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{C.current&&(Math.abs(k)>C.current.offsetWidth/3&&(k>0?O():F()),x(void 0),$(void 0))},children:e.jsx(RB,{style:{transform:`translateX(calc(${100*-h}% - ${k}px))`},children:i.map(((t,r)=>{var n;return e.jsx(zB,{"data-testid":"slide-item",children:e.jsx(xB,{ref:e=>j.current[r]=e,panning:{disabled:b<=1},initialScale:1,onZoom:D,onZoomStop:D,onWheel:D,children:e.jsx(CB,{children:e.jsx(PB,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e.jsx(LB,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:E})})})},r)}))})}),!l&&e.jsx(NB,{children:e.jsx(HB,{weight:"semibold",children:`${h+1}/${i.length}`})})]}),!a&&e.jsx(WB,{children:e.jsx(VB,{children:i.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e.jsx(YB,{children:e.jsx(UB,{"data-testid":"thumbnail-item",$active:r===h,onClick:()=>I(r),ref:e=>S.current[r]=e,children:e.jsx(KB,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},XB=t.forwardRef(qB),GB=q.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${ul.bg};
    border: ${gl["width-010"]} ${gl.solid} transparent;
    border-radius: ${ml.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${hl["duration-250"]} ${hl["ease-default"]};
    ${fl["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?ul["text-primary"]:ul.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${vl.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${fl["body-md-semibold"]}
    }

    ${e=>e.$error?i.css`
                background: ${ul.bg};
                border: ${gl["width-010"]} ${gl.solid}
                    ${ul["border-error"]};
            `:e.$selected?i.css`
                background: ${ul["bg-selected"]};
                border: ${gl["width-010"]} ${gl.solid}
                    ${ul["border-selected"]};

                &:hover {
                    background: ${ul["bg-selected-hover"]};
                    border: ${gl["width-010"]} ${gl.solid}
                        ${ul["border-selected-hover"]};
                }
            `:i.css`
                &:hover {
                    border: ${gl["width-010"]} ${gl.solid}
                        ${ul["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${gl["width-010"]} ${gl.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${ul["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,ZB=U.default.forwardRef(((t,r)=>{var{children:n,imgSrc:i,selected:o,error:a,type:s="button"}=t,l=G(t,["children","imgSrc","selected","error","type"]);return e.jsxs(GB,Object.assign({ref:r,$selected:o,$error:a,type:s},l,{children:[e.jsx(Qp,{src:i}),n]}))})),QB=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ul["icon-primary"]};
`,JB=q.default.div`
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
`,eR=q.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    color: ${ul["text-primary"]};
    margin-bottom: 0.5rem;
`,tR=q.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    color: ${ul["text-primary"]};
`,rR=q.default(h.ChevronRightIcon)`
    ${QB}
`,nR=q.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
    }

    :hover {
        ${eR},
        ${tR},
        ${rR} {
            color: ${ul["text-hover"]};
        }
    }
`,iR=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,oR=q.default(exports.Typography.BodyMD)`
    margin-top: 0.25rem;
`,aR=q.default(Ei.div)`
    overflow: hidden;
`,sR=q.default.div`
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};
`,lR=q.default(exports.Typography.BodyMD).attrs({as:"span"})`
    color: ${ul["text-primary"]};
    margin-right: 1rem;
`,dR=q.default(B.PlusIcon)`
    ${QB}
`,cR=q.default(A.MinusIcon)`
    ${QB}
`,uR=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${gl["width-010"]} ${gl.solid} ${ul.border};

    :hover {
        ${lR},
        ${dR},
        ${cR} {
            color: ${ul["text-hover"]};
        }
    }
`,fR=q.default.div`
    ${e=>Fd({textSize:e.$textSize})}
    ${e=>e.$textColor&&i.css`
            color: ${e.$textColor};
        `}
`,hR=t.forwardRef(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=G(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(fR,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),gR=q.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,o=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Ag.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${Ag.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,pR=q.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:o,startSm:a,colsSm:s}=e;return i.css`
            grid-column: ${t||n||"auto"} / span
                ${r||o||1};

            ${Ag.MaxWidth.tablet} {
                grid-column: ${n||a||"auto"} / span
                    ${o||s||1};
            }

            ${Ag.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${s||1};
            }
        `}}
`,mR={Grid:U.default.forwardRef(((t,r)=>{const{children:n}=t,i=G(t,["children"]);return e.jsx(gR,Object.assign({ref:r},i,{children:n}))})),Tile:U.default.forwardRef(((t,r)=>{const{children:n}=t,i=G(t,["children"]);return e.jsx(pR,Object.assign({ref:r},i,{children:n}))}))},bR=q.default.div`
    // matches Layout.Container
    ${e=>e.$stretch?i.css`
                --sgds-mainnav-padding-x: ${bl["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${bl["xxl-margin"]}px;
            `:i.css`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${bl["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${bl["xxl-margin"]}px;

                ${vl.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${bl["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${bl["xl-margin"]}px;
                }

                ${vl.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${bl["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${bl["lg-margin"]}px;
                }

                ${vl.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${bl["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${bl["md-margin"]}px;
                }

                ${vl.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${bl["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${bl["sm-margin"]}px;
                }

                ${vl.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${bl["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${bl["xs-margin"]}px;
                }

                ${vl.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${bl["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${bl["xxs-margin"]}px;
                }
            `}
`,vR=({stretch:r=!1})=>{t.useEffect((()=>{n()||i()}),[]);const n=()=>document.getElementById(yR),i=()=>{if(!document.getElementById(yR)){const e=document.createElement("script");e.id=yR,e.type="module",e.src=xR,document.head.appendChild(e)}};return e.jsx(bR,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:r})},yR="lifesg-ds-masthead-script",xR="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",wR={notCompress:6,compress:4},$R=q.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${ul.bg};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,CR=q.default.nav`
    height: ${e=>e.$compress?wR.compress:wR.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${hl["duration-350"]} ${hl["ease-standard"]};

    ${vl.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,SR=q.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${vl.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,jR=q.default(zl)`
    display: none;

    ${vl.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,kR=q.default(R.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ul.icon};
`,DR=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${vl.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${vl.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,ER=q.default.div`
    display: flex;
    background-color: ${ul.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${vl.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${vl.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,TR=q.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${hl["duration-150"]} ${hl["ease-default"]};
        object-fit: contain;
    }
`,FR=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e.jsx(TR,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e.jsx(Qp,{src:t.logoSrc,alt:t.brandName})}),OR=q.default.div`
    display: none;

    ${vl.MaxWidth.lg} {
        display: flex;
    }
`,IR=q.default.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${pl["spacing-16"]};
    background-color: ${ul.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms ${hl["ease-entrance"]};
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms ${hl["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return i.css`
            height: calc(${t} * 100);
        `}}

	${vl.MaxWidth.lg} {
        width: 75%;
    }

    ${vl.MaxWidth.sm} {
        width: 100%;
    }
`,MR=q.default.div`
    display: flex;
    flex-direction: column;
`,_R=q.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${pl["spacing-40"]} ${pl["spacing-20"]}
        ${pl["spacing-32"]};
`,AR=q.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,BR=q.default(zl)`
    position: absolute;
    right: -${pl["spacing-4"]};
    color: ${ul.icon};

    :active,
    :focus {
        color: ${ul["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,RR=U.default.forwardRef(((r,n)=>{const{show:i,resources:o={},children:a,hideNavBranding:s,onClose:l,onBrandClick:d}=r,[c,u]=t.useState(0),{primary:f,secondary:h}=o;t.useEffect((()=>(g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)})),[]);const g=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(OR,{ref:n,"data-testid":"drawer",children:e.jsx(IR,{$show:i,$viewHeight:c,children:e.jsxs(MR,{children:[e.jsxs(_R,{children:[e.jsx(DR,{"data-id":"drawer-brand-container",children:!s&&e.jsxs(e.Fragment,{children:[f&&e.jsx(FR,{resources:f,compress:!0,onClick:d,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(ER,{}),e.jsx(FR,{resources:h,compress:!0,onClick:d,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e.jsx(BR,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:e.jsx(AR,{})})]}),a]})})})})),zR=q.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${pl["spacing-64"]};
    flex-shrink: 0;

    ${vl.MaxWidth.lg} {
        display: none;
    }
`,PR=q.default.ul`
    display: none;

    ${vl.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${pl["spacing-64"]};
        flex-shrink: 0;
    }
`,LR=q.default.ul`
    display: none;
    list-style: none;

    ${vl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${pl["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${vl.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,NR=q.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${pl["spacing-16"]};
    }

    ${vl.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${pl["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?pl["spacing-16"]:"0"};
        }
    }

    ${vl.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 ${pl["spacing-16"]};
                `}}
    }
`,HR=q.default(Sd.Small)`
    ${vl.MaxWidth.lg} {
        width: 100%;
    }
`,WR=q.default.div`
    display: none;

    ${vl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${pl["spacing-40"]};
    }
`,VR=q.default(exports.Typography.BodyMD)`
    margin-bottom: ${pl["spacing-8"]};
`,YR=q.default.div`
    display: flex;
`,UR=q.default.a`
    :not(:last-child) {
        margin-right: ${pl["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${vl.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${vl.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,KR=({actionButtons:t,mobile:r=!1,onActionButtonClick:n})=>{const i=e=>{e.stopPropagation()},o=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},a=(t,r)=>{const n=t?(e=>{const t=US(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(r):r;return n.map(((r,n)=>{let a;switch(r.type){case"download":a=t?(s=r.args,e.jsxs(WR,{children:[e.jsx(VR,{weight:"semibold",children:s&&s.children||"Download the app"}),e.jsxs(YR,{children:[e.jsx(UR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(UR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e.jsx(HR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const i=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;a=e.jsx(HR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":i}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var s;if(a)return e.jsx(NR,{$mobile:t,children:a},`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,i=n.filter((e=>!!e.uncollapsible)),o=n.filter((e=>!e.uncollapsible));return r?e.jsx(e.Fragment,{children:o.length>0&&e.jsx(LR,{children:a(r,o)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(PR,{children:a(!1,i)}),t.desktop.length>0&&e.jsx(zR,{children:a(r,t.desktop)})]})}return e.jsx(e.Fragment,{})};var qR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(qR||(qR={}));const XR=q.default.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${pl["spacing-8"]} 0;

    background: ${ul.bg};
    border-radius: ${ml.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${ul.Primitive["neutral-50"]} r g b / 25%);
`,GR=q.default.ul`
    display: none;
    list-style: none;

    ${vl.MaxWidth.lg} {
        border-left: ${gl["width-040"]} solid ${ul["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,ZR=q.default(exports.Typography.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${ul.text};

    margin: 0 ${pl["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${gl.solid} transparent;
    border-width: ${pl["spacing-12"]} ${pl["spacing-8"]};

    border-radius: ${ml.md};

    ${Pl(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${ul["bg-hover"]};
        color: ${ul.text};
    }

    ${vl.MaxWidth.lg} {
        ${fl["body-md-regular"]}
    }
`,QR=q.default.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,JR=({items:t,mobile:r=!1,onItemClick:n})=>{const i=e=>t=>{t.stopPropagation(),n(t,e)},o=(r=!1)=>t.map(((t,n)=>{const{children:o,options:a}=t,s=G(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e.jsx(QR,{children:e.jsx(ZR,Object.assign({"data-testid":l},s,{onClick:i(t)},a,{children:o}))},n)}));if(t&&t.length>0){const t=r?GR:XR;return e.jsx(t,{children:o(r)})}return e.jsx(e.Fragment,{})},ez=q.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${vl.MaxWidth.lg} {
        display: none;
    }
`,tz=q.default.ul`
    display: none;
    list-style: none;

    ${vl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,rz=q.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${vl.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,nz=q.default(exports.Typography.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${ul.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?ul["text-selected-hover"]:ul["text-hover"]};
    }

    ${vl.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,iz=q.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,oz=q.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${ul["border-selected"]};

    :hover {
        ${e=>e.$selected&&ul["border-selected-hover"]};
    }

    ${vl.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,az=q.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,sz=q.default(zl)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,lz=q.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ul.icon};
    :hover {
        ${e=>e.$selected?ul["icon-selected-hover"]:ul["icon-hover"]};
    }
`,dz=({items:r,selectedId:n,mobile:i=!1,hideNavBranding:o,onItemClick:a})=>{const[s,l]=t.useState(-1),[d,c]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{c(!1)},h=(e,t)=>r=>{r.stopPropagation(),l(t),c(!0),a(r,e)},g=(e,t)=>{e.stopPropagation(),a(e,t),c(!1)},p=()=>r.map(((t,r)=>{if("component"===t.itemType){const n=t&&t.children||null;return e.jsx("li",{children:n},r)}{const a=(e=>{if(e.id===n)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===n));return!1})(t),{children:l,options:c}=t,u=G(t,["children","options"]),f=a?i?"bold":"semibold":"regular",p=i?`link__mobile-${r+1}`:`link__${r+1}`,m=s>=0&&s===r&&d;return e.jsxs(rz,{$hiddenBranding:o,children:[e.jsxs(nz,Object.assign({"data-testid":p,weight:f,$selected:a},u,{onClick:h(t,r)},c,{children:[e.jsx(iz,{children:l}),a&&e.jsx(oz,{"data-testid":`${p}-indicator`,$selected:a}),i&&t.subMenu&&e.jsx(az,{children:e.jsx(sz,{"data-testid":`${p}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e.jsx(lz,{$selected:a})})})]})),m&&t.subMenu&&e.jsx(JR,{items:t.subMenu,mobile:i,onItemClick:g})]},r)}}));return r&&r.length>0?i?e.jsx(tz,{ref:u,children:p()}):e.jsx(ez,{ref:u,$alignLeft:o,children:p()}):e.jsx(e.Fragment,{})},cz={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},uz={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},fz={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},hz={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},gz=t.forwardRef(((r,n)=>{var{items:o,className:a,id:s,selectedId:l,compress:d=!1,fixed:c=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:g=[],actionButtons:p,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=r,w=G(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,C]=t.useState(!1),[S,j]=t.useState(!1),k="stretch"===x,D=t.useRef(null),E=i.useTheme(),T=(e=>{switch(e){case"bookingsg":return uz;case"mylegacy":return hz;case"ccube":return fz;default:return cz}})(null==E?void 0:E.resourceScheme),F=bl["lg-max"]({theme:E}),O=(null==u?void 0:u.primary)||T.primary,I=null==u?void 0:u.secondary;t.useImperativeHandle(n,(()=>Object.assign(D.current,{dismissDrawer:()=>{M()}})),[$]),t.useEffect((()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)})),[]);const M=()=>{C(!1),setTimeout((()=>{j(!1)}),550)},_=e=>$&&-1===g.indexOf(e),A=()=>{window.innerWidth<=F&&$&&M()},B=(e,t)=>{v&&(e.preventDefault(),v(t)),_("brand-click")&&M()},R=(e,t)=>{qR.isNavItemCommon(t)&&t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),qR.isNavItemLink(t)&&!t.subMenu&&_("item-click")&&M()},z=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?b&&(e.preventDefault(),b(t)):t.args.onClick(e),_("item-click")&&M()},P=()=>{C(!0),j(!0)},L=()=>{_("close-button-click")&&M()},N=()=>{const t=o.mobile||o.desktop;return t&&t.length>0||p&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(p)?e.jsx(jR,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1,children:e.jsx(kR,{})}):null};return e.jsxs($R,{ref:D,$fixed:c,className:a,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper",children:[y&&e.jsx(vR,{stretch:k}),e.jsxs(oA.Content,{stretch:k,children:[e.jsxs(CR,{$compress:d,children:[!h&&e.jsxs(DR,{$compress:d,"data-id":"brand-container",children:[O&&e.jsx(FR,{resources:O,onClick:B,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),I&&e.jsxs(e.Fragment,{children:[e.jsx(ER,{$compress:d}),e.jsx(FR,{resources:I,onClick:B,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&e.jsxs(SR,{$hideNavBranding:h,children:[e.jsx(dz,{items:o.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(KR,{actionButtons:p,onActionButtonClick:z}),N()]})]}),!f&&e.jsx(Ug,{show:S,enableOverlayClick:!0,onOverlayClick:L,children:e.jsxs(RR,{show:$,resources:{primary:O,secondary:I},onClose:L,onBrandClick:B,actionButtons:p,hideNavBranding:h,children:[e.jsx(dz,{items:o.mobile||o.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(KR,{actionButtons:p,onActionButtonClick:z,mobile:!0})]})})]})]})})),pz=wR,mz=i.css`
    color: ${ul["hyperlink-inverse"]};

    svg {
        color: ${ul["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${ul["hyperlink-inverse"]};
        svg {
            color: ${ul["icon-primary-inverse"]};
        }
    }
`,bz=q.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${hl["duration-800"]} ${hl["ease-default"]};
    background: ${ul["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,vz=q.default(oA.Content)`
    display: flex;
`,yz=q.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,xz=q.default.div`
    display: inline-block;
    width: 100%;

    ${fl["body-baseline-regular"]}
    color: ${ul["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${fl["body-baseline-semibold"]}
        color: ${ul["text-inverse"]};
    }

    a {
        ${fl["body-baseline-regular"]}
        ${mz}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,wz=q.default(exports.Typography.LinkBL)`
    position: relative;

    ${mz}
`,$z=q.default(zl)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,Cz=q.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${ul["icon-inverse"]};
`,Sz=q.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${ul["hyperlink-inverse"]};
    ${fl["body-md-semibold"]};

    cursor: pointer;
`,jz=q.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,kz=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:a=!0,onDismiss:s,id:l,forwardedRef:d,maxCollapsedHeight:c,onClick:u,actionButton:f}=r,h=G(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const g=h["data-testid"],[p,m]=t.useState(i),{height:b=0,ref:v}=Xe();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),o&&s&&s()},x=e=>{(null==f?void 0:f.onClick)&&(e.stopPropagation(),f.onClick(e))};if(!p)return null;return e.jsxs(bz,Object.assign({ref:d,$sticky:a,$clickable:!!u,onClick:u},h,{children:[e.jsxs(vz,{id:Dz("container",l),children:[e.jsxs(yz,{children:[e.jsx(xz,{"data-testid":Dz("text-content",g),$maxCollapsedHeight:c&&b>c?c:void 0,children:e.jsx("div",{ref:v,children:n})}),f?e.jsx(Sz,Object.assign({id:Dz("action-button",l),"data-testid":Dz("action-button",g),type:"button"},f,{onClick:x,children:f.children})):null]}),o&&e.jsx($z,{onClick:y,id:Dz("dismiss-button",l),"data-testid":Dz("dismiss-button",g),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e.jsx(Cz,{"aria-hidden":!0})})]}),u&&e.jsx(jz,{"aria-label":"Clickable banner",type:"button"})]}))},Dz=(e,t="wrapper")=>`${t}-${e}`,Ez=U.default.forwardRef(((t,r)=>e.jsx(kz,Object.assign({},t,{forwardedRef:r}))));Ez.displayName="NotificationBanner";const Tz=Object.assign(Ez,{Link:wz}),{entries:Fz,setPrototypeOf:Oz,isFrozen:Iz,getPrototypeOf:Mz,getOwnPropertyDescriptor:_z}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:Az,seal:Bz,create:Rz}=Object,{apply:zz,construct:Pz}="undefined"!=typeof Reflect&&Reflect;Az||(Az=function(e){return e}),Bz||(Bz=function(e){return e}),zz||(zz=function(e,t,r){return e.apply(t,r)}),Pz||(Pz=function(e,t){return new e(...t)});const Lz=tP(Array.prototype.forEach),Nz=tP(Array.prototype.lastIndexOf),Hz=tP(Array.prototype.pop),Wz=tP(Array.prototype.push),Vz=tP(Array.prototype.splice),Yz=tP(String.prototype.toLowerCase),Uz=tP(String.prototype.toString),Kz=tP(String.prototype.match),qz=tP(String.prototype.replace),Xz=tP(String.prototype.indexOf),Gz=tP(String.prototype.trim),Zz=tP(Object.prototype.hasOwnProperty),Qz=tP(RegExp.prototype.test),Jz=(eP=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Pz(eP,t)});var eP;function tP(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return zz(e,t,n)}}function rP(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Yz;Oz&&Oz(e,null);let n=t.length;for(;n--;){let i=t[n];if("string"==typeof i){const e=r(i);e!==i&&(Iz(t)||(t[n]=e),i=e)}e[i]=!0}return e}function nP(e){for(let t=0;t<e.length;t++){Zz(e,t)||(e[t]=null)}return e}function iP(e){const t=Rz(null);for(const[r,n]of Fz(e)){Zz(e,r)&&(Array.isArray(n)?t[r]=nP(n):n&&"object"==typeof n&&n.constructor===Object?t[r]=iP(n):t[r]=n)}return t}function oP(e,t){for(;null!==e;){const r=_z(e,t);if(r){if(r.get)return tP(r.get);if("function"==typeof r.value)return tP(r.value)}e=Mz(e)}return function(){return null}}const aP=Az(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),sP=Az(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),lP=Az(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),dP=Az(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),cP=Az(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),uP=Az(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),fP=Az(["#text"]),hP=Az(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),gP=Az(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pP=Az(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),mP=Az(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bP=Bz(/\{\{[\w\W]*|[\w\W]*\}\}/gm),vP=Bz(/<%[\w\W]*|[\w\W]*%>/gm),yP=Bz(/\$\{[\w\W]*/gm),xP=Bz(/^data-[\-\w.\u00B7-\uFFFF]+$/),wP=Bz(/^aria-[\-\w]+$/),$P=Bz(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),CP=Bz(/^(?:\w+script|data):/i),SP=Bz(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jP=Bz(/^html$/i),kP=Bz(/^[a-z][.\w]*(-[.\w]+)+$/i);var DP=Object.freeze({__proto__:null,ARIA_ATTR:wP,ATTR_WHITESPACE:SP,CUSTOM_ELEMENT:kP,DATA_ATTR:xP,DOCTYPE_NAME:jP,ERB_EXPR:vP,IS_ALLOWED_URI:$P,IS_SCRIPT_OR_DATA:CP,MUSTACHE_EXPR:bP,TMPLIT_EXPR:yP});const EP=1,TP=3,FP=7,OP=8,IP=9,MP=function(){return"undefined"==typeof window?null:window};var _P=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:MP();const r=t=>e(t);if(r.version="3.2.5",r.removed=[],!t||!t.document||t.document.nodeType!==IP||!t.Element)return r.isSupported=!1,r;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:d,NodeFilter:c,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:g}=t,p=d.prototype,m=oP(p,"cloneNode"),b=oP(p,"remove"),v=oP(p,"nextSibling"),y=oP(p,"childNodes"),x=oP(p,"parentNode");if("function"==typeof s){const e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:j,getElementsByTagName:k}=n,{importNode:D}=i;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof Fz&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:T,ERB_EXPR:F,TMPLIT_EXPR:O,DATA_ATTR:I,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:_,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:B}=DP;let{IS_ALLOWED_URI:R}=DP,z=null;const P=rP({},[...aP,...sP,...lP,...cP,...fP]);let L=null;const N=rP({},[...hP,...gP,...pP,...mP]);let H=Object.seal(Rz(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,Y=!0,U=!0,K=!1,q=!0,X=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,re=!1,ne=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const de=rP({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ce=null;const ue=rP({},["audio","video","img","source","image","track"]);let fe=null;const he=rP({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",pe="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=rP({},[ge,pe,me],Uz);let we=rP({},["mi","mo","mn","ms","mtext"]),$e=rP({},["annotation-xml"]);const Ce=rP({},["title","style","font","a","script"]);let Se=null;const je=["application/xhtml+xml","text/html"];let ke=null,De=null;const Ee=n.createElement("form"),Te=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!De||De!==e){if(e&&"object"==typeof e||(e={}),e=iP(e),Se=-1===je.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ke="application/xhtml+xml"===Se?Uz:Yz,z=Zz(e,"ALLOWED_TAGS")?rP({},e.ALLOWED_TAGS,ke):P,L=Zz(e,"ALLOWED_ATTR")?rP({},e.ALLOWED_ATTR,ke):N,ye=Zz(e,"ALLOWED_NAMESPACES")?rP({},e.ALLOWED_NAMESPACES,Uz):xe,fe=Zz(e,"ADD_URI_SAFE_ATTR")?rP(iP(he),e.ADD_URI_SAFE_ATTR,ke):he,ce=Zz(e,"ADD_DATA_URI_TAGS")?rP(iP(ue),e.ADD_DATA_URI_TAGS,ke):ue,le=Zz(e,"FORBID_CONTENTS")?rP({},e.FORBID_CONTENTS,ke):de,W=Zz(e,"FORBID_TAGS")?rP({},e.FORBID_TAGS,ke):{},V=Zz(e,"FORBID_ATTR")?rP({},e.FORBID_ATTR,ke):{},se=!!Zz(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,q=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,ne=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||$P,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(U=!1),te&&(ee=!0),se&&(z=rP({},fP),L=[],!0===se.html&&(rP(z,aP),rP(L,hP)),!0===se.svg&&(rP(z,sP),rP(L,gP),rP(L,mP)),!0===se.svgFilters&&(rP(z,lP),rP(L,gP),rP(L,mP)),!0===se.mathMl&&(rP(z,cP),rP(L,pP),rP(L,mP))),e.ADD_TAGS&&(z===P&&(z=iP(z)),rP(z,e.ADD_TAGS,ke)),e.ADD_ATTR&&(L===N&&(L=iP(L)),rP(L,e.ADD_ATTR,ke)),e.ADD_URI_SAFE_ATTR&&rP(fe,e.ADD_URI_SAFE_ATTR,ke),e.FORBID_CONTENTS&&(le===de&&(le=iP(le)),rP(le,e.FORBID_CONTENTS,ke)),oe&&(z["#text"]=!0),Z&&rP(z,["html","head","body"]),z.table&&(rP(z,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw Jz('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw Jz('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(g,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));Az&&Az(e),De=e}},Oe=rP({},[...sP,...lP,...dP]),Ie=rP({},[...cP,...uP]),Me=function(e){Wz(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},_e=function(e,t){try{Wz(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Wz(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Me(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ae=function(e){let t=null,r=null;if(J)e="<remove></remove>"+e;else{const t=Kz(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new h).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&r&&o.insertBefore(n.createTextNode(r),o.childNodes[0]||null),be===me?k.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},Be=function(e){return S.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Re=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,n){Lz(e,(e=>{e.call(r,t,n,De)}))}const Le=function(e){let t=null;if(Pe(E.beforeSanitizeElements,e,null),Re(e))return Me(e),!0;const n=ke(e.nodeName);if(Pe(E.uponSanitizeElement,e,{tagName:n,allowedTags:z}),e.hasChildNodes()&&!ze(e.firstElementChild)&&Qz(/<[/\w!]/g,e.innerHTML)&&Qz(/<[/\w!]/g,e.textContent))return Me(e),!0;if(e.nodeType===FP)return Me(e),!0;if(G&&e.nodeType===OP&&Qz(/<[/\w]/g,e.data))return Me(e),!0;if(!z[n]||W[n]){if(!W[n]&&He(n)){if(H.tagNameCheck instanceof RegExp&&Qz(H.tagNameCheck,n))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(n))return!1}if(oe&&!le[n]){const t=x(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let n=r.length-1;n>=0;--n){const i=m(r[n],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return Me(e),!0}return e instanceof d&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const r=Yz(e.tagName),n=Yz(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===pe?t.namespaceURI===me?"svg"===r:t.namespaceURI===ge?"svg"===r&&("annotation-xml"===n||we[n]):Boolean(Oe[r]):e.namespaceURI===ge?t.namespaceURI===me?"math"===r:t.namespaceURI===pe?"math"===r&&$e[n]:Boolean(Ie[r]):e.namespaceURI===me?!(t.namespaceURI===pe&&!$e[n])&&!(t.namespaceURI===ge&&!we[n])&&!Ie[r]&&(Ce[r]||!Oe[r]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!Qz(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&e.nodeType===TP&&(t=e.textContent,Lz([T,F,O],(e=>{t=qz(t,e," ")})),e.textContent!==t&&(Wz(r.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(E.afterSanitizeElements,e,null),!1):(Me(e),!0)},Ne=function(e,t,r){if(ne&&("id"===t||"name"===t)&&(r in n||r in Ee))return!1;if(U&&!V[t]&&Qz(I,t));else if(Y&&Qz(M,t));else if(!L[t]||V[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&Qz(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&Qz(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&Qz(H.tagNameCheck,r)||H.tagNameCheck instanceof Function&&H.tagNameCheck(r))))return!1}else if(fe[t]);else if(Qz(R,qz(r,A,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Xz(r,"data:")||!ce[e]){if(K&&!Qz(_,qz(r,A,"")));else if(r)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&Kz(e,B)},We=function(e){Pe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Re(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,d=ke(a);let c="value"===a?l:Gz(l);if(n.attrName=d,n.attrValue=c,n.keepAttr=!0,n.forceKeepAttr=void 0,Pe(E.uponSanitizeAttribute,e,n),c=n.attrValue,!ie||"id"!==d&&"name"!==d||(_e(a,e),c="user-content-"+c),G&&Qz(/((--!?|])>)|<\/(style|title)/i,c)){_e(a,e);continue}if(n.forceKeepAttr)continue;if(_e(a,e),!n.keepAttr)continue;if(!q&&Qz(/\/>/i,c)){_e(a,e);continue}X&&Lz([T,F,O],(e=>{c=qz(c,e," ")}));const u=ke(e.nodeName);if(Ne(u,d,c)){if(w&&"object"==typeof g&&"function"==typeof g.getAttributeType)if(s);else switch(g.getAttributeType(u,d)){case"TrustedHTML":c=w.createHTML(c);break;case"TrustedScriptURL":c=w.createScriptURL(c)}try{s?e.setAttributeNS(s,a,c):e.setAttribute(a,c),Re(e)?Me(e):Hz(r.removed)}catch(e){}}}Pe(E.afterSanitizeAttributes,e,null)},Ve=function e(t){let r=null;const n=Be(t);for(Pe(E.beforeSanitizeShadowDOM,t,null);r=n.nextNode();)Pe(E.uponSanitizeShadowNode,r,null),Le(r),We(r),r.content instanceof a&&e(r.content);Pe(E.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,d=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw Jz("toString is not a function");if("string"!=typeof(e=e.toString()))throw Jz("dirty is not a string, aborting")}if(!r.isSupported)return e;if(Q||Fe(t),r.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=ke(e.nodeName);if(!z[t]||W[t])throw Jz("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)n=Ae("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,!0),o.nodeType===EP&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else{if(!ee&&!X&&!Z&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(n=Ae(e),!n)return ee?null:re?$:""}n&&J&&Me(n.firstChild);const c=Be(ae?e:n);for(;s=c.nextNode();)Le(s),We(s),s.content instanceof a&&Ve(s.content);if(ae)return e;if(ee){if(te)for(d=j.call(n.ownerDocument);n.firstChild;)d.appendChild(n.firstChild);else d=n;return(L.shadowroot||L.shadowrootmode)&&(d=D.call(i,d,!0)),d}let u=Z?n.outerHTML:n.innerHTML;return Z&&z["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&Qz(jP,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),X&&Lz([T,F,O],(e=>{u=qz(u,e," ")})),w&&re?w.createHTML(u):u},r.setConfig=function(){Fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},r.clearConfig=function(){De=null,Q=!1},r.isValidAttribute=function(e,t,r){De||Fe({});const n=ke(e),i=ke(t);return Ne(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&Wz(E[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=Nz(E[e],t);return-1===r?void 0:Vz(E[e],r,1)[0]}return Hz(E[e])},r.removeHooks=function(e){E[e]=[]},r.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const AP=q.default.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,BP=q.default.div`
    display: flex;
    flex-direction: column;
`,RP=q.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${pl["spacing-8"]};
`,zP=q.default(xw)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${vl.MaxWidth.xs} {
            padding: 0 ${pl["spacing-8"]};
        }
    }
`,PP=q.default(Sd.Small)`
    margin: ${pl["spacing-32"]} 0;
`,LP=q.default.nav`
    display: flex;
`,NP=q.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${vl.MaxWidth.lg} {
        align-self: center;
    }
`,HP=q.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,WP=q.default(zl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${ml.sm};
    color: ${ul["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${ul["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${ul["bg-hover"]};
    }
`,VP=q.default(zl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${ml.sm};
    color: ${ul["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${ul["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${ul["bg-hover"]};
    }

    ${e=>"left"===e.$position?i.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:i.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${vl.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,YP=q.default.button`
    background: ${e=>e.$selected?ul["bg-primary"]:ul.bg};
    border: ${gl["width-010"]} ${gl.solid}
        ${e=>i.css`
                ${e.$selected?ul["bg-primary"]:ul.border}
            `};
    color: ${e=>e.$selected?ul["text-inverse"]:ul.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${ml.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?i.css`
                  ${fl["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${ul["bg-selected-strongest-hover"]};
                      background-color: ${ul["bg-selected-strongest-hover"]};
                      color: ${ul["text-inverse"]};
                  }
              `:i.css`
                  ${fl["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${ul["bg-hover"]};
                      background-color: ${ul["bg-hover"]};
                      color: ${ul["text-hover"]};
                      ${fl["body-baseline-semibold"]};
                  }
              `}
`;q.default(zl)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ul["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${ml.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${ul["icon-hover"]};
        }
    }
`;const UP=q.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${ml.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,KP=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${ul.text};

    display: flex;
    justify-content: center;
`,qP=q.default(exports.Typography.BodyBL)`
    white-space: nowrap;
`,XP=q.default(exports.Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,GP=q.default(xw)`
    ${fl["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${ml.sm};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${fl["body-xs-regular"]}
        }
    }
`,ZP=q.default.div`
    ${fl["body-xs-regular"]}
    background-color: ${ul["bg-hover"]};
    border: none;
    border-radius: ${ml.sm};
    color: ${ul["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,QP=q.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,JP=U.default.forwardRef((({id:r,"data-testid":n,className:o,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:d=eL,showFirstAndLastNav:c,showPageSizeChanger:u=!1,onPageChange:f,onPageSizeChange:p},m)=>{const b=i.useTheme(),v=bl["sm-max"]({theme:b}),y=Jd.useMediaQuery({maxWidth:v}),[x,w]=t.useState(!1),[$,C]=t.useState(!1),[S,j]=t.useState(""),[k,D]=t.useState(d[0]),[E,T]=t.useState(!y&&u&&k?k.value:a),F=Math.ceil(s/E),O=1===l,I=l===F,M=l>1?()=>U(1):void 0,_=l<F?()=>U(F):void 0,A=l>1?()=>U(l-1):void 0,B=l<F?()=>U(parseInt(l.toString())+1):void 0,R=e=>e?()=>J():()=>Z(),W=e=>e?()=>ee():()=>Q();t.useEffect((()=>{l&&V(l)}),[l]),t.useEffect((()=>{T(a),D(d.find((e=>e.value===a)))}),[a]);const V=e=>{j(e.toString())},Y=()=>{w(!1),C(!1)},U=e=>{f&&(f(e),V(e))},K=()=>{const e=Math.min(F,l+5);U(e),V(e),w(!0),C(!1)},q=()=>{const e=Math.max(1,l-5);U(e),V(e),w(!1),C(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(F,e)))}else j(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),S&&(null==f||f(parseInt(S)))},Z=()=>{w(!0)},Q=()=>{w(!1)},J=()=>{C(!0)},ee=()=>{C(!1)},te=(t,r,n)=>e.jsxs(UP,{children:[e.jsx(WP,{focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:R(t),onMouseOut:W(t),onFocus:R(t),onBlur:W(t),onClick:t?q:K,children:t&&$?e.jsx(z.Chevron2LeftIcon,{"aria-hidden":!0}):r&&x?e.jsx(P.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(H.EllipsisHorizontalIcon,{"aria-hidden":!0})}),t&&$&&e.jsx(ZP,{children:"Previous 5 pages"}),r&&x&&e.jsx(ZP,{children:"Next 5 pages"})]},n);return e.jsxs(LP,{className:o,ref:m,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e.jsx(NP,{children:e.jsxs(HP,{children:[c&&e.jsx(VP,{onClick:M,disabled:O,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e.jsx(L.ChevronLineLeftIcon,{"aria-hidden":!0})}),e.jsx(VP,{onClick:A,disabled:O,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e.jsx(g.ChevronLeftIcon,{"aria-hidden":!0})}),y?e.jsxs(KP,{children:[e.jsx("form",{onSubmit:G,children:e.jsx(GP,{value:S,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e.jsx(XP,{children:"/"}),e.jsx(qP,{children:F})]}):[...Array(F)].map(((t,r)=>{const n=r+1,i=F-5,o=l===n;if(F<=7)return e.jsx(YP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===F-1-1;return a||s?te(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>F-1?e.jsx(YP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n):null})),e.jsx(VP,{onClick:B,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})}),c&&e.jsx(VP,{onClick:_,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e.jsx(N.ChevronLineRightIcon,{"aria-hidden":!0})})]})}),u&&!y&&e.jsx(QP,{children:e.jsx(eI,{options:d,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);T(t);p&&p(l>=r?r:l,t)}})})]})})),eL=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],tL=q.default.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${fl["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=ul["text-inverse"],e.$color){case"grey":t=ul["bg-inverse-subtler"];break;case"green":t=ul["bg-success-strong"];break;case"yellow":t=ul["bg-warning-strong"];break;case"red":t=ul["bg-error-strong"];break;case"blue":t=ul["bg-info-strong"];break;default:t=ul["bg-inverse"]}else switch(e.$color){case"grey":t=ul["bg-stronger"],r=ul["border-strong"],n=ul["text-subtler"];break;case"green":t=ul["bg-success"],r=ul["border-success"],n=ul["text-success"];break;case"yellow":t=ul["bg-warning"],r=ul["border-warning"],n=ul["text-warning"];break;case"red":t=ul["bg-error"],r=ul["border-error"],n=ul["text-error"];break;case"blue":t=ul["bg-info"],r=ul["border-info"],n=ul["text-info"];break;default:t=ul.bg,r=ul.border,n=ul.text}return i.css`
            background: ${t};
            border: ${gl["width-010"]} ${gl.solid} ${r};
            color: ${n};
        `}}
`,rL=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,nL=t=>{var{type:r,colorType:n="black",children:i,icon:o}=t,a=G(t,["type","colorType","children","icon"]);return e.jsxs(tL,Object.assign({$type:r,$color:n},a,{children:[o,e.jsx(rL,{children:i})]}))},iL=(e,t,r)=>t?ss(r,t)||ss(e,t):r||e,oL=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)};var aL;exports.V2_ThemeContextKeys=void 0,(aL=exports.V2_ThemeContextKeys||(exports.V2_ThemeContextKeys={})).colorScheme="colorScheme",aL.layout="layout",aL.textStyleScheme="textStyleScheme",aL.designTokenScheme="designTokenScheme",aL.resourceScheme="resourceScheme";const sL={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},lL=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=oL(sL,null==n?void 0:n[exports.V2_ThemeContextKeys.colorScheme]);return n.options&&n.options.color?iL(i,e,n.options.color):iL(i,e)},dL={Brand:{1:lL("Brand.1"),2:lL("Brand.2"),3:lL("Brand.3"),4:lL("Brand.4"),5:lL("Brand.5"),6:lL("Brand.6")},Primary:lL("Primary"),PrimaryDark:lL("PrimaryDark"),Secondary:lL("Secondary"),Accent:{Light:{1:lL("Accent.Light.1"),2:lL("Accent.Light.2"),3:lL("Accent.Light.3"),4:lL("Accent.Light.4"),5:lL("Accent.Light.5"),6:lL("Accent.Light.6")},Dark:{1:lL("Accent.Dark.1"),2:lL("Accent.Dark.2"),3:lL("Accent.Dark.3")}},Neutral:{1:lL("Neutral.1"),2:lL("Neutral.2"),3:lL("Neutral.3"),4:lL("Neutral.4"),5:lL("Neutral.5"),6:lL("Neutral.6"),7:lL("Neutral.7"),8:lL("Neutral.8")},Validation:{Green:{Text:lL("Validation.Green.Text"),Icon:lL("Validation.Green.Icon"),Border:lL("Validation.Green.Border"),Background:lL("Validation.Green.Background")},Orange:{Text:lL("Validation.Orange.Text"),Icon:lL("Validation.Orange.Icon"),Border:lL("Validation.Orange.Border"),Background:lL("Validation.Orange.Background"),Badge:lL("Validation.Orange.Badge")},Red:{Text:lL("Validation.Red.Text"),Icon:lL("Validation.Red.Icon"),Border:lL("Validation.Red.Border"),Background:lL("Validation.Red.Background")},Blue:{Text:lL("Validation.Blue.Text"),Icon:lL("Validation.Blue.Icon"),Border:lL("Validation.Blue.Border"),Background:lL("Validation.Blue.Background")}},Shadow:{Accent:lL("Shadow.Accent"),Red:lL("Shadow.Red"),Elevation:lL("Shadow.Elevation")}},cL={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},uL={D1:{fontFamily:cL.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:cL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:cL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cL.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:cL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:cL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:cL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:cL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:cL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:cL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:cL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:cL.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:cL.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},fL={D1:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:cL.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:cL.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:cL.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:cL.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:cL.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},hL={collections:{base:uL,oneservice:{D1:{fontFamily:cL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:cL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:cL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:cL.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:cL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:cL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:cL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:cL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:cL.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:cL.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:cL.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:cL.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:fL},defaultValue:"base"},gL=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=oL(hL,null==n?void 0:n[exports.V2_ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?iL(i,e,n.options.textStyle):iL(i,e)},pL={D1:{fontFamily:gL("D1.fontFamily"),fontSize:gL("D1.fontSize"),fontWeight:gL("D1.fontWeight"),lineHeight:gL("D1.lineHeight"),letterSpacing:gL("D1.letterSpacing"),fontVariant:gL("D1.fontVariant")},D2:{fontFamily:gL("D2.fontFamily"),fontSize:gL("D2.fontSize"),fontWeight:gL("D2.fontWeight"),lineHeight:gL("D2.lineHeight"),letterSpacing:gL("D2.letterSpacing"),fontVariant:gL("D2.fontVariant")},D3:{fontFamily:gL("D3.fontFamily"),fontSize:gL("D3.fontSize"),fontWeight:gL("D3.fontWeight"),lineHeight:gL("D3.lineHeight"),letterSpacing:gL("D3.letterSpacing"),fontVariant:gL("D3.fontVariant")},D4:{fontFamily:gL("D4.fontFamily"),fontSize:gL("D4.fontSize"),fontWeight:gL("D4.fontWeight"),lineHeight:gL("D4.lineHeight"),letterSpacing:gL("D4.letterSpacing"),fontVariant:gL("D4.fontVariant")},DBody:{fontFamily:gL("DBody.fontFamily"),fontSize:gL("DBody.fontSize"),fontWeight:gL("DBody.fontWeight"),lineHeight:gL("DBody.lineHeight"),letterSpacing:gL("DBody.letterSpacing"),fontVariant:gL("DBody.fontVariant")},H1:{fontFamily:gL("H1.fontFamily"),fontSize:gL("H1.fontSize"),fontWeight:gL("H1.fontWeight"),lineHeight:gL("H1.lineHeight"),letterSpacing:gL("H1.letterSpacing"),fontVariant:gL("H1.fontVariant")},H2:{fontFamily:gL("H2.fontFamily"),fontSize:gL("H2.fontSize"),fontWeight:gL("H2.fontWeight"),lineHeight:gL("H2.lineHeight"),letterSpacing:gL("H2.letterSpacing"),fontVariant:gL("H2.fontVariant")},H3:{fontFamily:gL("H3.fontFamily"),fontSize:gL("H3.fontSize"),fontWeight:gL("H3.fontWeight"),lineHeight:gL("H3.lineHeight"),letterSpacing:gL("H3.letterSpacing"),fontVariant:gL("H3.fontVariant")},H4:{fontFamily:gL("H4.fontFamily"),fontSize:gL("H4.fontSize"),fontWeight:gL("H4.fontWeight"),lineHeight:gL("H4.lineHeight"),letterSpacing:gL("H4.letterSpacing"),fontVariant:gL("H4.fontVariant")},H5:{fontFamily:gL("H5.fontFamily"),fontSize:gL("H5.fontSize"),fontWeight:gL("H5.fontWeight"),lineHeight:gL("H5.lineHeight"),letterSpacing:gL("H5.letterSpacing"),fontVariant:gL("H5.fontVariant")},H6:{fontFamily:gL("H6.fontFamily"),fontSize:gL("H6.fontSize"),fontWeight:gL("H6.fontWeight"),lineHeight:gL("H6.lineHeight"),letterSpacing:gL("H6.letterSpacing"),fontVariant:gL("H6.fontVariant")},Body:{fontFamily:gL("Body.fontFamily"),fontSize:gL("Body.fontSize"),fontWeight:gL("Body.fontWeight"),lineHeight:gL("Body.lineHeight"),letterSpacing:gL("Body.letterSpacing"),fontVariant:gL("Body.fontVariant")},BodySmall:{fontFamily:gL("BodySmall.fontFamily"),fontSize:gL("BodySmall.fontSize"),fontWeight:gL("BodySmall.fontWeight"),lineHeight:gL("BodySmall.lineHeight"),letterSpacing:gL("BodySmall.letterSpacing"),fontVariant:gL("BodySmall.fontVariant")},XSmall:{fontFamily:gL("XSmall.fontFamily"),fontSize:gL("XSmall.fontSize"),fontWeight:gL("XSmall.fontWeight"),lineHeight:gL("XSmall.lineHeight"),letterSpacing:gL("XSmall.letterSpacing"),fontVariant:gL("XSmall.fontVariant")}},mL=[cL.OpenSans,cL.PlusJakartaSans],bL=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},vL=(e,t)=>r=>{var n,o,a,s,l;const d=null===(o=(n=pL[e]).fontFamily)||void 0===o?void 0:o.call(n,r),c=null===(s=(a=pL[e]).fontWeight)||void 0===s?void 0:s.call(a,r),u=mL.find((e=>Object.values(e).includes(d)));return u?i.css`
                font-family: ${bL(u,t)||bL(u,c)||d};
                font-weight: normal !important;
            `:i.css`
            font-family: ${d};
            font-weight: ${null!==(l=yL(t)||c)&&void 0!==l?l:"normal"};
        `},yL=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xL=e=>{if(e)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wL={getFontFamily:vL,getTextStyle:(e,t,r=!1)=>n=>{var o,a,s;const l=pL[e],d=(null===(o=l.fontSize)||void 0===o?void 0:o.call(l,n))||1;return i.css`
            ${vL(e,t)}
            font-size: ${d}rem !important;
            line-height: ${l.lineHeight}rem !important;
            letter-spacing: ${(null===(a=l.letterSpacing)||void 0===a?void 0:a.call(l,n))||0}rem !important;
            font-variant: ${(null===(s=l.fontVariant)||void 0===s?void 0:s.call(l,n))||"normal"};
            ${(()=>{const e=r?1.05:0;return i.css`
                margin-bottom: ${d*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?i.css`
            display: block;
            ${xL(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${xL(r)}
        `};var $L;exports.V2_Text=void 0,($L=exports.V2_Text||(exports.V2_Text={})).D1=q.default.h1`
        ${e=>i.css`
                ${wL.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.D2=q.default.h1`
        ${e=>i.css`
                ${wL.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.D3=q.default.h1`
        ${e=>i.css`
                ${wL.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.D4=q.default.h1`
        ${e=>i.css`
                ${wL.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.DBody=q.default.h1`
        ${e=>i.css`
                ${wL.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.H1=q.default.h1`
        ${e=>i.css`
                ${wL.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.H2=q.default.h2`
        ${e=>i.css`
                ${wL.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.H3=q.default.h3`
        ${e=>i.css`
                ${wL.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.H4=q.default.h4`
        ${e=>i.css`
                ${wL.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.H5=q.default.h5`
        ${e=>i.css`
                ${wL.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.H6=q.default.h6`
        ${e=>i.css`
                ${wL.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.Body=q.default.p`
        ${e=>i.css`
                ${wL.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.BodySmall=q.default.p`
        ${e=>i.css`
                ${wL.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.XSmall=q.default.span`
        ${e=>i.css`
                ${wL.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${dL.Neutral[1]};
                ${wL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,$L.Hyperlink={Default:e=>jL(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>jL(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const CL=q.default.a`
    ${e=>i.css`
            ${wL.getTextStyle(e.textStyle,e.weight)}
            color: ${dL.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${dL.Secondary};

                svg {
                    color: ${dL.Secondary};
                }
            }
        `}
`,SL=q.default(o.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,jL=t=>{var{external:r=!1,children:n}=t,i=G(t,["external","children"]);return e.jsxs(CL,Object.assign({},i,{children:[n,r&&e.jsx(SL,{})]}))},kL={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},DL=q.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${kL.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${kL.Base};
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

	${Ag.MaxWidth.mobileL} {
        display: none;
    }
`,EL=q.default(ap)`
    padding: 3.5rem 1.25rem 2.5rem;
`,TL=q.default.div`
    position: relative;
    width: fit-content;
`,FL=q.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,OL=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,IL=r=>{var{children:n,visible:i,onMobileClose:o}=r,a=G(r,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",[l,d]=t.useState("none"),c=t.useRef(null),u=Jd.useMediaQuery({maxWidth:Mg.mobileL}),f=t.useRef(l);t.useEffect((()=>(p(),window.addEventListener("resize",Df(h,300)),()=>{window.removeEventListener("resize",Df(h,300))})),[]);const h=()=>{p()},g=()=>{o&&o()},p=()=>{const e=m();var t;e&&(t=e,f.current=t,d(t))},m=()=>{if(c.current){const e=c.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},b=()=>"string"==typeof n?e.jsx(exports.V2_Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[e.jsx(DL,Object.assign({ref:c,"data-testid":s,$visible:i,$offset:l},a,{children:e.jsx(Qu,{children:b()})})),u&&e.jsx(np,{show:null!=i&&i,onOverlayClick:g,children:e.jsx(EL,{onClose:g,children:e.jsx(OL,{children:b()})})})]})},ML=q.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${vl.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${vl.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,_L=q.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,AL=q.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?ul["bg-primary-subtle"]:ul["bg-disabled"])(e)};\n        `}};
`,BL=q.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?ul["text-primary"]:ul["text-disabled"])(e)};`}};
`,RL=q.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${ul.text};
`,zL=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var PL=function(e){return function(t){return null==e?void 0:e[t]}},LL=PL({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),NL=qa,HL=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,WL=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var VL=function(e){return(e=NL(e))&&e.replace(HL,LL).replace(WL,"")},YL=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var UL=function(e){return e.match(YL)||[]},KL=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var qL=function(e){return KL.test(e)},XL="\\ud800-\\udfff",GL="\\u2700-\\u27bf",ZL="a-z\\xdf-\\xf6\\xf8-\\xff",QL="A-Z\\xc0-\\xd6\\xd8-\\xde",JL="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",eN="["+JL+"]",tN="\\d+",rN="["+GL+"]",nN="["+ZL+"]",iN="[^"+XL+JL+tN+GL+ZL+QL+"]",oN="(?:\\ud83c[\\udde6-\\uddff]){2}",aN="[\\ud800-\\udbff][\\udc00-\\udfff]",sN="["+QL+"]",lN="(?:"+nN+"|"+iN+")",dN="(?:"+sN+"|"+iN+")",cN="(?:['’](?:d|ll|m|re|s|t|ve))?",uN="(?:['’](?:D|LL|M|RE|S|T|VE))?",fN="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",hN="[\\ufe0e\\ufe0f]?",gN=hN+fN+("(?:\\u200d(?:"+["[^"+XL+"]",oN,aN].join("|")+")"+hN+fN+")*"),pN="(?:"+[rN,oN,aN].join("|")+")"+gN,mN=RegExp([sN+"?"+nN+"+"+cN+"(?="+[eN,sN,"$"].join("|")+")",dN+"+"+uN+"(?="+[eN,sN+lN,"$"].join("|")+")",sN+"?"+lN+"+"+cN,sN+"+"+uN,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tN,pN].join("|"),"g");var bN=UL,vN=qL,yN=qa,xN=function(e){return e.match(mN)||[]};var wN=FO,$N=VL,CN=function(e,t,r){return e=yN(e),void 0===(t=r?void 0:t)?vN(e)?xN(e):bN(e):e.match(t)||[]},SN=RegExp("['’]","g");var jN=Fi(function(e){return function(t){return wN(CN($N(t).replace(SN,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const kN=q.default.div`
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
`,DN=q.default(u.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?ul["icon-disabled-subtle"](e):ul["icon-subtle"](e)};
    transition: ${hl["duration-150"]} ${hl["ease-default"]};
`,EN=q.default(u.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?ul["icon-selected-disabled"](e):ul["icon-selected"](e)};

    transition: ${hl["duration-150"]} ${hl["ease-default"]};
`,TN=q.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${DN}, &:hover + ${EN} {
        color: ${e=>!e.disabled&&ul["icon-hover"](e)};
    }
`,FN=q.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,ON=q.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};
    background-color: ${ul["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,IN=q.default(ON)`
    height: 100vh;
    left: 0;
    top: 0;
    ${vl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,MN=q.default(ON)`
    display: none;
    visibility: hidden;
    ${vl.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,_N=q.default(Ei.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${ul["bg-primary-subtlest"]};
    border-top-right-radius: ${ml.md};
    border-bottom-right-radius: ${ml.md};
    border: ${gl["width-010"]} ${gl.solid} ${ul.border};

    ${e=>e.$showDrawer?i.css`
                  box-shadow: 0 0 4px
                      rgb(from ${ul.Primitive["neutral-20"]} r g b / 25%);
              `:i.css`
                  border: 0;
                  padding: 0;
              `};
`,AN=q.default.li`
    width: 100%;
`,BN=q.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${ml.md};
    color: ${ul["icon-primary"]};
    transition: ${hl["duration-250"]} ${hl["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,RN=q.default(exports.Typography.BodyXS)`
    ${Pl(2)}
    margin-top: 0.25rem;
    transition: ${hl["duration-250"]} ${hl["ease-default"]};
`,zN=q.default(xh)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${BN} {
            background-color: ${ul["bg-hover"]};
        }

        ${RN} {
            ${fl["body-xs-semibold"]}
            color: ${ul["text-hover"]};
        }
    }

    ${e=>e.$highlight&&i.css`
            ${BN} {
                background-color: ${ul["bg-hover"]};
            }

            ${RN} {
                ${fl["body-xs-semibold"]}
                color: ${ul["text-selected"]};
            }
        `}
`,PN=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),LN=q.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,NN=q.default.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${ul.border};
`,HN=q.default(Ei.li)``,WN=q.default(xh)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${ml.md};

    ${fl["body-md-semibold"]}
    color: ${ul.text};

    ${e=>e.$noChildren?i.css`
                  :hover,
                  :focus {
                      background: ${ul["bg-hover"]};
                      color: ${ul["text-hover"]};
                  }
              `:i.css`
                  :hover,
                  :focus {
                      background: ${ul["bg-hover-strong"]};
                  }
              `}
`,VN=q.default(Ei.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,YN=q.default(n.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${ul.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${hl["duration-150"]} ${hl["ease-default"]};
`,UN=q.default.span`
    ${Pl(2)}
    text-align: left;
`,KN=q.default(Ei.ul)``,qN=q.default.li``,XN=q.default(xh)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${ml.md};

    ${fl["body-md-regular"]}
    color: ${ul.text};
    ${Pl(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${ul["bg-hover"]};
        color: ${ul["text-hover"]};
    }
`,GN=Object.assign((r=>{var{fixed:n=!0,children:i}=r,o=G(r,["fixed","children"]);const a=t.useRef(null),[s,l]=t.useState(void 0),[d,c]=t.useState(void 0),[u,f]=t.useState(void 0),[h,g]=t.useState(!1),p=t.useMemo((()=>({currentItem:s,selectedItem:d,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:c,setPreviouslySelectedItemId:f})),[s,d,u,l,c,f]),m=ci({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return Rc("click",(e=>{a.current&&!a.current.contains(e.target)&&(c({itemId:u||(d?d.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{g(!!(null==d?void 0:d.content)||!!(null==s?void 0:s.content))}),[s,d]),e.jsx(PN.Provider,{value:p,children:e.jsxs(FN,Object.assign({$fixed:n},o,{ref:a,onMouseLeave:()=>{l(void 0)},children:[e.jsx(IN,{children:i}),e.jsx(_N,{style:m,$showDrawer:h,"data-testid":"sidenav-drawer",children:s&&s.content||d&&d.content}),e.jsx(MN,{})]}))})}),{Group:t=>{var{separator:r,children:n}=t,i=G(t,["separator","children"]);return e.jsxs(LN,Object.assign({},i,{children:[n,r&&e.jsx(NN,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=G(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:d,previouslySelectedItemId:c,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:g}=t.useContext(PN);t.useEffect((()=>{s.selected&&g({itemId:l,content:void 0})}),[s.selected]);return e.jsx(AN,{children:e.jsxs(zN,Object.assign({type:"button",onClick:()=>{h((()=>{if(n&&u)return c||u.itemId})()),f({itemId:l,content:n}),g({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{f({itemId:l,content:n})}},s,{$highlight:!!u&&u.itemId===l||!!d&&d.itemId===l,children:[e.jsx(BN,{children:i}),e.jsx(RN,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:a}=r,s=G(r,["id","title","onClick","children"]);const[l,d]=t.useState(!0),[c,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:g,setCurrentItem:p}=t.useContext(PN),m=ci({from:{opacity:0},to:{opacity:1}}),b=Xe(),v=b.ref,y=ci({height:a&&l?b.height:0});return e.jsxs(HN,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m,children:[e.jsxs(WN,{type:"button",onClick:()=>{a?d(!l):(h({itemId:null==f?void 0:f.itemId,content:void 0}),p(void 0),g(void 0),o&&o(n))},$highlight:c&&l,$noChildren:!a,children:[e.jsx(UN,{children:i}),a&&e.jsx(YN,{"aria-hidden":!0,$expanded:l})]}),e.jsx(VN,{style:y,children:e.jsx(KN,{ref:v,children:a})})]}))},DrawerSubitem:r=>{var{id:n,title:i,onClick:o}=r,a=G(r,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:d,setPreviouslySelectedItemId:c}=t.useContext(PN);return e.jsx(qN,Object.assign({},a,{children:e.jsx(XN,{type:"button",onClick:()=>{o&&o(n),l({itemId:null==s?void 0:s.itemId,content:void 0}),d(void 0),c(void 0)},children:i})}))}}),ZN=e=>"red-filled"===e?"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_red_filled.svg":"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_white_filled.svg",QN=q.default.button`
    padding: ${pl["spacing-8"]} ${pl["spacing-16"]};
    transition: all ${hl["duration-250"]} ${hl["ease-default"]};
    border-radius: ${ud};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${e=>"red-filled"===e.$buttonStyle?i.css`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    background-color: #b0262d;
                }
            `:i.css`
            background-color: ${ul.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                background-color: #f5f5f7;
            }
        `}

    ${e=>{switch(e.$buttonSizeStyle){case"small":return i.css`
                    height: 2.5rem;
                `;case"large":return i.css`
                    min-height: 4rem;
                `;default:return i.css`
                    min-height: 3rem;
                `}}}
`,JN=q.default.span`
    img {
        height: 100%;
    }

    height: ${e=>"large"===e.$buttonSizeStyle?2.5:1.5}rem;
`,eH=(t,r)=>{const{styleType:n="white-filled"}=t,i=G(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"default"};return e.jsx(QN,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e.jsx(JN,{$buttonSizeStyle:"default",children:e.jsx("img",{src:ZN(n),alt:""})})}))};eH.displayName="SingpassButton.Default";const tH=(t,r)=>{const{styleType:n="white-filled"}=t,i=G(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"small"};return e.jsx(QN,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e.jsx(JN,{$buttonSizeStyle:"small",children:e.jsx("img",{src:ZN(n),alt:""})})}))};tH.displayName="SingpassButton.Small";const rH=(t,r)=>{const{styleType:n="white-filled"}=t,i=G(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"large"};return e.jsx(QN,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e.jsx(JN,{$buttonSizeStyle:"large",children:e.jsx("img",{src:ZN(n),alt:""})})}))};rH.displayName="SingpassButton.Large";const nH={Default:U.default.forwardRef(eH),Small:U.default.forwardRef(tH),Large:U.default.forwardRef(rH)},iH=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,oH=q.default.div`
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
    background: ${ul.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${ml.md};
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${iH} 0.3s;
            `}}
`,aH=q.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,sH=q.default(zl)`
    padding: 0;
`,lH=q.default(m.CrossIcon)`
    color: ${ul.icon};
    height: 1.25rem;
    width: 1.25rem;
`,dH=q.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,cH=q.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${vl.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,uH=q.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,fH=q.default.div`
    max-width: 30%;
`,hH=q.default(Sd.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${fl["body-xs-semibold"]}
    }
`,gH=q.default(exports.Typography.BodySM)`
    font-weight: ${fl.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${vl.MaxWidth.xs} {
        ${fl["body-xs-bold"]}
    }
`,pH=q.default(exports.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,mH=q.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,bH=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,vH=q.default(v.StarFillIcon)`
    ${bH}
`,yH=q.default(W.StarHalfIcon)`
    ${bH}
`,xH=q.default(b.StarIcon)`
    ${bH}
`,wH="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",$H="smart-app-banner";const CH=U.default.forwardRef((function(t,r){const{className:n,show:i,href:o,content:a,offset:s=0,icon:l=wH,animated:d=!1,onDismiss:c,onClick:u}=t,{title:f,message:h,buttonLabel:g,buttonAriaLabel:p,numberOfStars:m}=a,b=e=>{e.stopPropagation(),window.open(o,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(oH,{ref:r,$isAnimated:d,$offset:s,className:n,children:[e.jsx(aH,{onClick:c,id:`${$H}-dismiss`,"data-testid":`${$H}-dismiss-container`,children:e.jsx(sH,{"aria-label":"Dismiss",children:e.jsx(lH,{})})}),e.jsxs(dH,{onClick:b,id:`${$H}-proceed`,"data-testid":`${$H}-proceed-container`,children:[e.jsx(uH,{src:l,alt:"lifesg-app-icon"}),e.jsxs(cH,{children:[e.jsx(gH,{children:f}),e.jsx(pH,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],r=m-Math.floor(m)>=.4;for(let r=0;r<Math.floor(m);r++)t.push(e.jsx(vH,{},`star${r}`));if(r&&t.push(e.jsx(yH,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e.jsx(xH,{},`emptystar${n}`))}return e.jsx(mH,{children:t.slice(0,5)})})()]}),e.jsx(fH,{children:e.jsx(hH,{type:"button",onClick:b,"aria-label":p,children:g})})]})]})})})),SH=U.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),jH=q.default.div`
    position: relative;
    width: 100%;
`,kH=q.default.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",n=ul.bg(e);return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?`${n}, ${n}`:`${n}`)},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?`${n}, ${n}`:`${n}`)},\n                    ${r}\n                );\n            `,i.css`
            ${vl.MaxWidth.lg} {
                ${t}
            }
        `}};
`,DH=q.default.div`
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
`,EH=q.default(zl)`
    display: none;

    ${vl.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?i.css`
                    justify-content: left;
                    padding-left: ${pl["spacing-8"]};
                `:i.css`
                    justify-content: right;
                    padding-right: ${pl["spacing-8"]};
                `}

        svg {
            color: ${ul.icon};
        }
    }
`,TH=t.forwardRef(((r,n)=>{var{children:i,fadeColor:o,fadePosition:a="both",showIndicator:s=!1,onResize:l}=r,d=G(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[c,u]=t.useState("left"===a||"both"===a),[f,p]=t.useState("right"===a||"both"===a),m=t.useRef(null),b=t.useRef(null),v=Mf(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(p(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(p(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}Xe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(n,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(jH,Object.assign({ref:m},d,{children:[e.jsx(DH,{ref:b,children:i}),(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[c&&e.jsx(kH,{$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade",children:s&&e.jsx(EH,{$position:"left","data-id":"left-fade-indicator-button",children:e.jsx(g.ChevronLeftIcon,{})})}),f&&e.jsx(kH,{$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade",children:s&&e.jsx(EH,{$position:"right","data-id":"right-fade-indicator-button",children:e.jsx(h.ChevronRightIcon,{})})})]})})()]}))})),FH=q.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return i.css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${gl["width-040"]} ${gl.solid}
                        ${ul.border};
                }
            `}}
`,OH=q.default.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${gl["width-040"]} ${gl.solid} ${ul.border};

    ${e=>{if(e.$width)return i.css`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return i.css`
                border-color: ${ul["border-primary"]};
            `}}

    ${vl.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,IH=q.default.button`
    position: relative;
    padding: ${pl["spacing-16"]} ${pl["spacing-16"]}
        ${pl["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,MH=q.default(exports.Typography.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${ul["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,_H=q.default(exports.Typography.BodyBL)`
    color: ${ul["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,AH=q.default(TH)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${pl["spacing-4"]};
    }
`,BH=({controlledMode:r,"data-testid":n,onTabClick:o,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:d}=t.useContext(SH),c=i.useTheme(),u=bl["md-max"]({theme:c}),f=Jd.useMediaQuery({maxWidth:u}),h=bl["lg-max"]({theme:c}),g=t.useRef(null),p=e=>t=>{t.preventDefault(),r||s(e),o&&o(d[e].title,e)},m=e=>f&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(AH,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=h&&g.current&&(e.scrollLeft=g.current.getBoundingClientRect().left)},"data-testid":n,children:e.jsx(FH,{role:"tablist",$fullWidthIndicatorLine:a,children:d.map(((t,r)=>{const i=l===r;return e.jsx(OH,{role:"none",$active:i,ref:i?g:null,$width:t.width,children:e.jsxs(IH,{role:"tab",type:"button","aria-selected":i,onClick:p(r),"data-testid":`${n}-link-${r}`,children:[e.jsx(MH,{$active:i,weight:"regular",children:m(t.title)}),e.jsx(_H,{$active:i,weight:"semibold","aria-hidden":"true",children:m(t.title)})]})},r)}))})})},RH=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,zH=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:a,"data-testid":s,fullWidthIndicatorLine:l}=r,d=G(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[c,u]=t.useState(i||o),f=t.useMemo((()=>t.Children.toArray(n).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[n]);t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);return e.jsx(RH,Object.assign({"data-testid":s},d,{children:e.jsxs(SH.Provider,{value:{tabLinks:f,currentActiveIndex:c,setCurrentActiveIndex:u},children:[e.jsx(BH,{controlledMode:"number"==typeof i,onTabClick:a,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(n).filter(Boolean).map(((e,r)=>t.cloneElement(e,{key:r,index:r})))]})}))}),{Item:r=>{var{index:n,children:i}=r,o=G(r,["index","children"]);const{currentActiveIndex:a}=t.useContext(SH);return a===n?e.jsx("div",Object.assign({role:"tabpanel"},o,{children:i})):null}}),PH=q.default.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${fl["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,o,a;if("solid"===e.$type)switch(n=ul["text-inverse"],e.$color){case"grey":t=ul["bg-inverse-subtler"],o=ul["bg-inverse-hover"];break;case"green":t=ul["bg-success-strong"],o=ul["bg-success-strong-hover"];break;case"yellow":t=ul["bg-warning-strong"],o=ul["bg-warning-strong-hover"];break;case"red":t=ul["bg-error-strong"],o=ul["bg-error-strong-hover"];break;case"blue":t=ul["bg-info-strong"],o=ul["bg-info-strong-hover"];break;default:t=ul["bg-inverse"],o=ul["bg-inverse-hover"]}else switch(e.$color){case"grey":t=ul["bg-strong"],r=ul["border-strong"],n=ul["text-subtle"],o=ul["bg-hover-neutral-strong"];break;case"green":t=ul["bg-success"],r=ul["border-success"],n=ul["text-success"],o=ul["bg-success-hover"];break;case"yellow":t=ul["bg-warning"],r=ul["border-warning"],n=ul["text-warning"],o=ul["bg-warning-hover"];break;case"red":t=ul["bg-error"],r=ul["border-error"],n=ul["text-error"],o=ul["bg-error-hover"];break;case"blue":t=ul["bg-info"],r=ul["border-info"],n=ul["text-info"],o=ul["bg-info-hover"];break;default:t=ul.bg,r=ul.border,n=ul.text,o=ul["bg-hover-neutral"]}return i.css`
            background: ${t};
            border: ${gl["width-010"]} ${gl.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&o&&`background: ${o(e)};`}
                    ${e.$interactive&&a}
                }
            }
        `}}

    ${vl.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${fl["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,LH=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var NH;gc.extend(mc),function(e){e.formatHourlyDisplay=e=>gc(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>Ic.getTimeDiffInMinutes(e,t)/15*(r/2)}(NH||(NH={}));const HH=1.25,WH=e=>"minified"===e?12:40,VH=e=>"minified"===e?12:40,YH=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,UH=q.default(zl)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${ul.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${ul.Primitive["neutral-50"]} r g b / 50%);
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
`,KH=q.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${ul["icon-primary"]};
`,qH=q.default(g.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${ul["icon-primary"]};
`,XH=q.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+VH(e)}px`};
`,GH=q.default.div`
    position: relative;
    white-space: nowrap;
    height: ${HH}rem;
`,ZH=q.default.div`
    display: flex;
    white-space: nowrap;
`,QH=q.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${WH(e)}px`};
    position: relative;
    border-left: ${gl["width-010"]} ${gl.solid}
        ${ul["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?HH:.625;break;case"minified":t=e.$isLongMarker?HH:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,JH=q.default(exports.Typography.BodyXS)`
    color: ${ul["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,eW=q.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${VH(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&i.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||ul["bg-strongest"]} 0px,
                ${e.$bgColor2||ul["bg-strongest"]} 10px,
                ${e.$bgColor||ul["bg-stronger"]} 10px,
                ${e.$bgColor||ul["bg-stronger"]} 20px
            );
        `}
`,tW=q.default.div`
    position: absolute;
    top: ${HH}rem;
    height: ${({$variant:e})=>`${VH(e)}px`};
    z-index: 1;
    border-right: ${gl["width-010"]} ${gl.solid}
        ${ul["border-stronger"]};
`,rW=q.default(exports.Typography.BodyXS)`
    color: ${e=>e.$color||ul.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,nW=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${pl["spacing-8"]};
    flex: 1;
`,iW=q.default(exports.Typography.BodyXS)`
    ${e=>e.$disabled&&i.css`
            color: ${ul["text-disabled-subtlest"]};
        `}
`,oW=q.default.div`
    grid-column: 2 / -1;
    display: flex;
`,aW=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${pl["spacing-4"]};
`,sW=q.default(Ei.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,lW=q.default.div`
    display: flex;
    gap: ${pl["spacing-4"]};
    transition: all ${hl["duration-250"]} ${hl["ease-default"]};
    overflow: hidden;
`,dW=q.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${pl["spacing-4"]};
    width: 1.375rem;
    transition: all ${hl["duration-250"]} ${hl["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,cW=q.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,uW=q.default.div`
    ${fl["body-xs-bold"]}
    color: ${ul["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${fl.Spec["body-size-sm"]};
    }
`,fW=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${pl["spacing-4"]};
`,hW=q.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${pl["spacing-8"]};
`,gW=q.default(Sd.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${pl["spacing-8"]};
    }
`,pW=q.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${hl["duration-250"]} ${hl["ease-default"]};
`,mW=q.default(eW)`
    ${e=>{if("vertical"===e.$type)return i.css`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${ml.xs};
            `}}

    ${e=>e.$halfFill?i.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${ul["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||ul["bg-strongest"]} 0px,\n                            ${e.$bgColor2||ul["bg-strongest"]} 10px,\n                            ${e.$bgColor||ul["bg-stronger"]} 10px,\n                            ${e.$bgColor||ul["bg-stronger"]} 20px\n                        )`};
            `:i.css`
                background-color: ${e.$bgColor};
            `}
`;var bW=Zi;var vW=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!bW(a):r(a,s)))var s=a,l=o}return l};var yW=vW,xW=MS,wW=function(e,t){return e<t};var $W=Fi((function(e,t){return e&&e.length?yW(e,xW(t),wW):void 0}));var CW=vW,SW=function(e,t){return e>t},jW=MS;var kW=Fi((function(e,t){return e&&e.length?CW(e,jW(t),SW):void 0}));const DW=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,startTime:l,endTime:d,maxVisibleCellHeight:c,slots:u,interval:f=30,variant:h="flexible",enableSelection:g=!0,onSlotClick:p})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[C,S]=t.useState(),j=t.useMemo((()=>kc.generateDaysForCurrentWeek(r)),[r]),k=Object.values(null!=u?u:{}).flat(),D=null!==(b=null!=l?l:null===(m=$W(k,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",E=null!==(y=null!=d?d:null===(v=kW(k,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",T=Math.ceil(Ic.getTimeDiffInMinutes(D,E)/f),{height:F=0,ref:O}=Xe(),I=c?F<c||w?F:c:F,M=ci({height:I}),_=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,r])=>{const n=function(e){const t=Array(T).fill({});return e.forEach((e=>{const r=Math.max(0,Ic.getTimeDiffInMinutes(D,e.startTime)/f),n=Math.min(T,Ic.getTimeDiffInMinutes(D,e.endTime)/f),i=Math.ceil(n)-Math.floor(r);switch(h){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=Ic.addMinutesToTime(D,Math.floor(r+o)*f),s=Ic.addMinutesToTime(a,f);let l;fO(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return fO(t)&&fO(r)?e:[...e,t]}),[{}]);o<e.length;){if(fO(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:D,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:E;if(a!==s){const t=Ic.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},P(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)fO(e[o])?(e[o]=P(o),o++):o+=e[o].cellLength}return e.filter((e=>!fO(e)&&e.cellLength>0))}(n)})),e}return{}}),[u]),A=e=>{S(e)},B=()=>{S(void 0)},R=e=>{e.preventDefault(),$((e=>!e))},z=e=>{var t;const r=kc.isWithinRange(e,a?gc(a):void 0,s?gc(s):void 0),i=null!==(t=n&&n.includes(e.format(x)))&&void 0!==t&&t;return!r||i};function P(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:ul["bg-stronger"]},cellLength:t}}return e.jsxs(aW,{children:[e.jsx(oW,{children:j.map(((t,r)=>{const n=(e=>{const t=e.format(x),r=z(e),n={},o=g&&!r;r&&(n.disabled=!0),n.interactive=g?o:null;const a=o&&C&&e.isSame(C,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e.jsx(zu,Object.assign({date:t,calendarDate:gc(i),onSelect:()=>{((e,t)=>{!t&&g&&o(e)})(t,!n.interactive)},onHover:A,onHoverEnd:B},n),`day-${r}`)}))}),e.jsx(oW,{children:j.map(((t,r)=>e.jsx(nW,{children:e.jsx(iW,{weight:"semibold",$disabled:z(t),children:gc(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=gc(D,"HH:mm").add(4*e*f,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e.jsx(dW,{$height:I,children:Array(Math.ceil(T/4)).fill(void 0).map(((t,n)=>e.jsx(cW,{children:e.jsx(uW,{children:r(n)})},`time-${n}`)))})})(),e.jsx(sW,{style:M,children:e.jsx(lW,{ref:O,children:j.map(((t,r)=>{var n;const i=t.format(x),o=null!==(n=_[i])&&void 0!==n?n:Array("flexible"===h?T:1).fill(void 0).map(((e,t)=>P(t,"fixed"===h?T:void 0)));return e.jsx(fW,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:d,backgroundColor2:c}=o;return e.jsx(mW,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:d,$bgColor2:c,$halfFill:s,$clickable:n,$height:"fixed"===h?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{p&&p(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(x)}`)}),(()=>{if(c&&O.current&&!(F&&F<c))return e.jsx(hW,{children:e.jsxs(gW,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:R,children:[e.jsx(pW,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]})})})()]})},EW=q.default.div`
    --header-bottom-spacing: 0.5rem;

    ${vl.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,TW="YYYY-MM-DD",FW=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,OW=q.default.div`
    ${fl["body-xs-semibold"]}
    color:${ul.text};

    ${e=>e.$disabled&&i.css`
            color: ${ul["text-disabled-subtlest"]};
        `};
`,IW=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,MW=q.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,_W=q.default.div`
    ${fl["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${ul.text};
    span {
        display: block;
    }
`,AW=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;gc.extend(vc);const BW="YYYY-MM-DD",RW={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:ul["bg-stronger"],backgroundColor2:ul["bg-strongest"]}},zW=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:d=!0,onSlotClick:c})=>{const u=t.useMemo((()=>kc.generateDaysForCurrentWeek(r)),[r]),[f,h]=t.useState(),g=e=>{h(e)},p=()=>{h(void 0)},m=e=>{const t=e.format(BW),r=(e=>{const t=kc.isWithinRange(e,a?gc(a):void 0,s?gc(s):void 0),r=!!n&&n.includes(e.format(BW));return!t||r})(e),o=d&&!r,l=o&&f&&e.isSame(f,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),c&&l?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):l&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return e.jsxs(IW,{children:[u.map(((t,r)=>{const n=m(t);return e.jsxs(FW,{children:[e.jsx(zu,Object.assign({date:t,calendarDate:gc(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(t,!n.interactive)},onHover:g,onHoverEnd:p},n),`day-${r}`),e.jsx(OW,{$disabled:n.disabled,children:gc(t).format("ddd")})]},`week-day-${r}`)})),e.jsx(MW,{children:u.map(((t,r)=>{const n=t.format(BW),i=l&&(l[n]?l[n]:[RW]);return e.jsx(AW,{children:i&&i.map((t=>{const{id:r,startTime:i,endTime:o,clickable:a=!0,styleAttributes:s}=t,{color:l,styleType:d="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(eW,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:u,$bgColor2:f,$clickable:a,onClick:()=>a&&((e,t)=>{null==c||c(e,t)})(n,t),children:e.jsxs(_W,{style:{color:l},children:[e.jsx("span",{children:kc.convertTo12HourFormat(i)}),o&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:kc.convertTo12HourFormat(o)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(BW)}`)]})},PW=q.default.div`
    --header-bottom-spacing: 0.5rem;

    ${vl.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,LW="YYYY-MM-DD",NW=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return i.css`
                    background-color: ${ul["icon-primary-subtle"]};
                `;case"upcoming-active":return i.css`
                    border: 4px solid ${ul["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    border: 4px solid ${ul["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${ul["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${ul["icon-success"]};
                    svg {
                        color: ${ul["icon-inverse"]};
                    }
                `;case"error":return i.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${ul["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,HW=q.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    background-color: ${ul["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    background-color: ${ul["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${ul["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${ul["icon-success"]};
                `;case"error":return i.css`
                    margin-left: -0.15rem;
                    background-color: ${ul["icon-error"]};
                `}}}
`,WW=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,VW=q.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${vl.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${vl.MaxWidth.sm} {
        grid-column: span 8;
    }
`,YW=q.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${vl.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,UW=q.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,KW=q.default.div`
    display: flex;

    :last-of-type ${HW} {
        margin-bottom: 0;
    }
`,qW=q.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,XW=q.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,GW=q.default(nL)`
    padding: 0.125rem 0.5rem;
`,ZW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],QW=15,JW=252,eV=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],tV=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,rV=q.default(pg)`
    color: ${ul.icon};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${tV} 4s linear infinite;
                `}}
    }
`,nV=q.default.div`
    display: flex;
    padding-bottom: ${pl["spacing-16"]};
    justify-content: space-between;
    gap: ${pl["spacing-8"]};
`,iV=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${pl["spacing-8"]};
`,oV=q.default(exports.Typography.BodySM)`
    color: ${ul["text-subtler"]};
`,aV=q.default(yg)`
    width: 400px;
`,sV=t=>{var{selectedDate:r,loading:n,tableContainerRef:i,totalRecords:o,onPreviousDayClick:a,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:d}=t,c=G(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(nV,{children:[e.jsx(aV,Object.assign({selectedDate:r,loading:n},c,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),a(e)},onCalendarDateSelect:d})),void 0===o?e.jsx(e.Fragment,{}):e.jsxs(iV,{children:[e.jsxs(oV,{"data-testid":"timetable-records-results",weight:"semibold",children:[o," results found"]}),l&&e.jsx(rV,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:n,onClick:h,$loading:n,children:e.jsx(u.RefreshIcon,{})})]})]})},lV=q.default.div`
    display: flex;
    width: 100%;
`,dV=q.default.div`
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${ul["border-primary"]};
            `}}
`,cV=q.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,uV=q.default.div`
    width: 2px;
    height: 100%;
`,fV=q.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${ml.sm};
    box-sizing: border-box;
    padding: ${pl["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:r,$altColor:n})=>{switch(e){case"blocked":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${ul["bg-stronger"]} 0px 6px,
                        ${ul["bg-strongest"]} 6px 12px
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
                    background: ${ul["bg-disabled"]};
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
                        background-color: ${r?ul["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,hV=q.default(exports.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,gV=q.default(exports.Typography.BodyXS)`
    color: ${ul["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,pV=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e.jsx(Ex,Object.assign({},i))},mV=U.default.memo((({id:t,startTime:r,endTime:n,title:i,subtitle:o,status:a,intervalWidth:s,rowBarColor:l,containerRef:d,customPopover:c,roundedStartTime:u=r,roundedEndTime:f=n,onClick:h})=>{const g=0===gc(f,"HH:mm").get("minutes"),p=Ic.getTimeDiffInMinutes(u,f)/QW*s-2,m=!!h||c&&"click"===c.trigger;return e.jsx(pV,{containerRef:d,customPopover:c,children:e.jsx(dV,{"data-testid":"block-container",$isOnTheHour:g,children:e.jsxs(cV,{children:[e.jsxs(fV,{$width:p,$status:a,$mainColor:l.mainColor,$altColor:l.alternateColor,$isClickable:m,onClick:e=>{h&&h({id:t,startTime:r,endTime:n,status:a,title:i,subtitle:o,customPopover:c},e)},children:[i&&e.jsx(hV,{weight:"semibold",children:i}),o&&e.jsx(gV,{weight:"bold",children:o})]}),e.jsx(uV,{})]})},"block-container-key")})})),bV=({id:r,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o,rowMaxTime:a,rowCells:s,rowBarColor:l,intervalWidth:d,containerRef:c,outOfRangeCellPopover:u})=>{const f=o?Of.roundToNearestInterval(o,QW):n,h=a?Of.roundToNearestInterval(a,QW,!0):i,g=t.useMemo((()=>{const e=[];f&&gc(n,"HH:mm").isBefore(gc(f,"HH:mm"))&&e.push({id:r,startTime:n,endTime:f,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const r=gc(e.startTime,"HH:mm"),n=gc(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));let l;return t.forEach(((t,n)=>{var i;const{startTime:o,endTime:a}=t;let d=Of.roundToNearestInterval(o,QW);l&&gc(d,"HH:mm").isBefore(gc(l,"HH:mm"))&&(d=Of.roundToNearestInterval(o,QW,!0));const c=Of.roundToNearestInterval(a,QW,!0);e.push(Object.assign(Object.assign({},t),{roundedStartTime:d,roundedEndTime:c}));const u=(null===(i=s[n+1])||void 0===i?void 0:i.startTime)||h,f=gc(Of.roundToNearestInterval(u,QW),"HH:mm");let g=gc(c,"HH:mm");for(;g.isBefore(f);)if(p=f,g.get("hour")!=p.get("hour")){const t=g.add(1,"hour").startOf("hour");e.push({id:r,startTime:g.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),g=t}else e.push({id:r,startTime:g.format("HH:mm").toString(),endTime:f.format("HH:mm").toString(),status:"disabled"}),g=f;var p;l=g.format("HH:mm").toString()})),h&&gc(i,"HH:mm").isAfter(gc(h,"HH:mm"))&&e.push({id:r,startTime:h,endTime:i,status:"blocked",customPopover:u}),0!==t.length||o||a||e.push({id:r,startTime:n,endTime:i,status:"blocked",customPopover:u}),e}),[f,n,s,h,i,o,a,r,u]);return e.jsx(lV,{"data-testid":"timetable-row",children:g.map(((t,r)=>e.jsx(mV,Object.assign({},t,{intervalWidth:d,rowBarColor:l,containerRef:c}),`${r}-row-cell-key`)))})},vV=q.default.div``,yV=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${JW}px auto;
`,xV=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${JW}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,wV=q.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${ul.bg};
    width: ${JW}px;
    z-index: 2;
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${ul.Primitive["neutral-20"]} r g b / 25%);
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
`,$V=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${ul.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,CV=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${ul.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${ul.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,SV=q.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${pl["spacing-4"]};
`,jV=q.default(exports.Typography.BodySM)`
    color: ${ul["text-subtler"]};
`,kV=q.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,DV=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${ul.bg};
    width: ${JW}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${pl["spacing-16"]} 0 ${pl["spacing-32"]};
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
    border-left: ${gl["width-010"]} ${gl.solid} ${ul.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${ul.Primitive["neutral-20"]} r g b / 25%);
            `:i.css`
                box-shadow: inset -0.5px 0px ${ul["border-primary"]};
            `};
`,EV=q.default(exports.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${ul["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,TV=q.default(exports.Typography.BodyXS)`
    display: inline-flex;
    gap: ${pl["spacing-4"]};
    align-items: center;
    color: ${ul["text-subtler"]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,FV=q.default(qd)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,OV=q.default(fh)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${pl["spacing-72"]} 0;
`,IV=q.default.div`
    display: flex;
    border-bottom: ${gl["width-010"]} ${gl.solid} ${ul.border};
`,MV=q.default.div`
    border-right: ${gl["width-005"]} ${gl.solid}
        ${ul["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${pl["spacing-20"]} ${pl["spacing-12"]};
`,_V=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,AV=q.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${ul.Primitive["neutral-95"]} 8%,
        ${ul.Primitive["neutral-100"]} 18%,
        ${ul.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${_V} 1.5s forwards infinite;
`,BV=q.default(Ex)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,RV=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:ul[t.Background],Border:ul[t.Border],Text:ul[t.Text],Icon:ul[t.Icon]}},zV=q.default(Ei.div)`
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

    ${vl.MaxWidth.lg} {
        left: 0;
    }

    ${e=>i.css`
            background: ${RV(e).Background};
            border: 1px solid ${RV(e).Border};
            color: ${RV(e).Text};
        `};
`,PV=q.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${vl.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,LV=q.default.div`
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
                color: ${RV(e).Icon};
            }
        `};
`,NV=q.default.div`
    display: flex;
    flex-direction: column;
`,HV=q.default(exports.Typography.HeadingXS)`
    display: flex;

    ${e=>i.css`
            color: ${RV(e).Text};
        `}
`,WV=q.default.div`
    ${e=>i.css`
            p {
                color: ${RV(e).Text};
            }
        `}
`,VV=q.default(Sd.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${vl.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,YV=q.default(zl)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${RV(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${vl.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,UV=4e3,KV=q.default.div`
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

                ${Ag.MaxWidth.mobileL} {
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

                ${Ag.MaxWidth.mobileL} {
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

                ${Ag.MaxWidth.mobileL} {
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

                ${Ag.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${kL.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${kL.Base};
            z-index: -1;
        `}
`,qV=q.default(Qu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,XV=q.default.div`
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
                        border-color: ${dL.Neutral[8]} transparent
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
                        border-color: transparent ${dL.Neutral[8]}
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
                            ${dL.Neutral[8]};
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
                            ${dL.Neutral[8]} transparent;
                    }
                `}}}
`,GV=q.default.div`
    position: relative;
`,ZV=r=>{var{visible:n,position:i="top",children:o}=r,a=G(r,["visible","position","children"]);const s=a["data-testid"]||"tooltip",[l,d]=t.useState(i),c=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",Df(u,300)),()=>{window.removeEventListener("resize",Df(u,300))})),[]);const u=()=>{f()},f=()=>{if(c.current){const e=c.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":d("right");break;case"right":d("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":d("left");break;case"left":d("top")}else d(i)}};return e.jsxs(KV,Object.assign({position:l,"data-testid":s,visible:n,ref:c},a,{children:[e.jsx(qV,{children:"string"==typeof o?e.jsx(exports.V2_Text.BodySmall,{children:o}):o}),e.jsx(XV,{position:l})]}))},QV=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${vl.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,JV=q.default(oA.Content)`
    background: ${({$background:e})=>e?ul["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,eY=q.default(exports.Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${QV}
`,tY=q.default(exports.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${QV}
`,rY=q.default.div`
    ${QV}
`,nY=q.default.ul`
    ${QV}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${vl.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${vl.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,iY=U.default.forwardRef(((t,r)=>{var{stretch:n}=t,i=G(t,["stretch"]);return e.jsx(nY,Object.assign({ref:r,$stretch:n},i))})),oY=q.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i.css`
                    grid-column: auto / span 4;
                `;case"full":return i.css`
                    grid-column: auto / span 8;
                `}}}

    ${vl.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,aY=q.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${ul["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${fl.Spec["body-size-baseline"]};
        height: ${fl.Spec["body-size-baseline"]};
    }
`,sY=q.default.button`
    ${fl["body-baseline-regular"]}
    color: ${ul.text};
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
`,lY=q.default.span`
    color: ${ul["text-disabled"]};
`,dY=q.default(ad)`
    margin-right: 0.5rem;
    color: ${ul["text-disabled"]};
`,cY=q.default(C.ExclamationTriangleIcon)`
    color: ${ul["icon-warning"]};
    margin-right: 0.5rem;
    height: ${fl.Spec["body-size-baseline"]};
    width: ${fl.Spec["body-size-baseline"]};
`,uY=q.default.span`
    color: ${ul["text-warning"]};
`,fY=q.default.span`
    ${fl["body-baseline-semibold"]}
    color: ${ul.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,hY=q.default(zd)`
    margin-top: 0.5rem;
`,gY=({label:r,value:n,displayWidth:i="full",maskState:o,maskLoadingState:a,maskChar:s="•",maskRange:l,unmaskRange:d,maskRegex:c,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:g,onUnmask:p,onTryAgain:m})=>{const[b,v]=t.useState(o);t.useEffect((()=>{v(o)}),[o]);const y=()=>{switch("fail"===a&&m&&m(),b){case"masked":p&&p(),v("unmasked");break;case"unmasked":g&&g(),v("masked")}},x=()=>"string"!=typeof n?n:"masked"===b?Ac.maskValue(n,{maskChar:s,maskRange:l,unmaskRange:d,maskRegex:c,maskTransformer:h}):n,C=()=>{switch(a){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(cY,{}),e.jsx(uY,{children:"Error"}),e.jsx(fY,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(dY,{}),e.jsx(lY,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(aY,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(oY,{$widthStyle:i,children:[e.jsx(zx,{children:r}),"string"!=typeof n?n:b?u?e.jsx(exports.Typography.BodyBL,{children:x()}):e.jsx(sY,{"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===a,"aria-live":"polite",type:"button",children:C()}):e.jsx(exports.Typography.BodyBL,{children:n}),f&&e.jsx(hY,Object.assign({sizeType:"small"},f))]})},pY=Object.assign((t=>{var{items:r,title:n,description:i,topSection:o,bottomSection:a,children:s,background:l=!0,stretch:d,onMask:c,onUnmask:u,onTryAgain:f}=t,h=G(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const g=e=>()=>{c&&c(e)},p=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(r&&r.length>0){const t=r.map(((t,r)=>e.jsx(gY,Object.assign({},t,{onMask:g(t),onUnmask:p(t),onTryAgain:m(t)}),r)));return e.jsx(nY,{$stretch:d,children:t})}return null};return e.jsx(JV,Object.assign({$background:l},h,{type:"grid",children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx(eY,{weight:"semibold",$stretch:d,children:n}),i&&e.jsx(tY,{$stretch:d,children:i}),o&&e.jsx(rY,{"data-id":"top-section",$stretch:d,children:o}),b(),a&&e.jsx(rY,{"data-id":"bottom-section",$stretch:d,children:a})]})}))}),{ItemSection:iY,Item:gY}),mY={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${dL.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${dL.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${dL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${dL.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${dL.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${dL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},bY=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=oL(mY,null==i?void 0:i[exports.V2_ThemeContextKeys.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?iL(o,e,i.options.designToken):iL(o,e)},vY={InputBoxShadow:bY("InputBoxShadow"),InputErrorBoxShadow:bY("InputErrorBoxShadow"),ElevationBoxShadow:bY("ElevationBoxShadow"),Table:{Header:bY("Table.Header"),Cell:{Primary:bY("Table.Cell.Primary"),Secondary:bY("Table.Cell.Secondary"),Selected:bY("Table.Cell.Selected"),Hover:bY("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:bY("Button.Danger.BackgroundColor"),Hover:bY("Button.Danger.Hover"),Primary:bY("Button.Danger.Primary"),Border:bY("Button.Danger.Border")}}},yY=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=G(t,["children","data-testid","type","stretch"]);return e.jsx(xY,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),xY=q.default.div`
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

                ${Ag.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ag.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Ag.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ag.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ag.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,wY=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=G(t,["children","data-testid","stretch"]);return e.jsx($Y,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),$Y=q.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${Ag.MaxWidth.tablet} {
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
`,CY=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=G(t,["children","data-testid","className","type","stretch"]);return e.jsx(wY,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(yY,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),SY={Section:wY,Container:yY,Content:CY,ColDiv:zg};var jY;exports.RedirectScope=void 0,(jY=exports.RedirectScope||(exports.RedirectScope={}))[jY.Subpage=0]="Subpage",jY[jY.Domain=1]="Domain";const kY=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,DY=q.default.ol`
    ${e=>kY(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Ag.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>wL.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${dL.Neutral[1]};
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
`,EY=q.default.ul`
    ${e=>kY(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>wL.getTextStyle(e.size,"regular")}
        color: ${dL.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,TY={Ul:t=>{var{size:r="Body",children:n}=t,i=G(t,["size","children"]);return e.jsx(EY,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=G(t,["size","children"]);return e.jsx(DY,Object.assign({size:r},i,{children:n}))}},FY={[exports.V2_ThemeContextKeys.colorScheme]:"base",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"},OY={[exports.V2_ThemeContextKeys.colorScheme]:"bookingsg",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"bookingsg"},IY={[exports.V2_ThemeContextKeys.colorScheme]:"rbs",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"rbs",[exports.V2_ThemeContextKeys.resourceScheme]:"rbs"},MY={[exports.V2_ThemeContextKeys.colorScheme]:"mylegacy",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"mylegacy"},_Y={[exports.V2_ThemeContextKeys.colorScheme]:"ccube",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"ccube"},AY={[exports.V2_ThemeContextKeys.colorScheme]:"oneservice",[exports.V2_ThemeContextKeys.textStyleScheme]:"oneservice",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"};exports.A11yPlaygroundTheme=Al,exports.Accordion=Td,exports.Alert=zd,exports.BookingSGTheme=Tl,exports.Border=gl,exports.BoxContainer=r=>{var{children:n,title:o,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:d="default",subComponentTestIds:c,clickableHeader:u}=r,f=G(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,g]=t.useState(!a||s),p=Xe(),m=p.ref,b=i.useTheme(),v=bl["sm-max"]({theme:b}),y=Jd.useMediaQuery({maxWidth:v}),x=u&&a,w=e=>{e.stopPropagation(),g(!h)},$=ci({height:h?p.height:0}),C=()=>a&&e.jsx(cc,{onClick:w,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==c?void 0:c.handle)||"handle",children:e.jsx(uc,{$expanded:h,children:e.jsx(fc,{"aria-hidden":!0})})});return e.jsxs(ec,Object.assign({},f,{children:[e.jsxs(ic,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[e.jsxs(ac,{children:[e.jsx(oc,{"data-testid":(null==c?void 0:c.title)||"title",children:o}),(()=>{switch(d){case"error":case"warning":return e.jsx(sc,{$displayState:d,"data-testid":(null==c?void 0:c.displayStateIcon)||`${d}-icon`,children:e.jsx(lc,{})});default:return null}})(),y&&C()]}),l&&e.jsx(dc,{$collapsible:a,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),a?e.jsx(tc,{style:$,"data-testid":"expandable-container",children:e.jsx(nc,{ref:m,children:n})}):e.jsx(rc,{"data-testid":"non-expandable-container",children:e.jsx(nc,{children:n})})]}))},exports.Breadcrumb=r=>{var{links:n,fadeColor:o,fadePosition:a="both",itemStyle:s,id:l}=r,d=G(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[c,u]=t.useState(!1),[f,h]=t.useState(!1),[g,p]=t.useState(!1),m="left"===a||"both"===a,b="right"===a||"both"===a,v=t.useRef(null),y=t.useRef(null),x=i.useTheme(),w=bl["lg-max"]({theme:x}),$=Bc((()=>{const e=y.current,t=v.current;e&&t&&n&&n.length>1&&window.innerWidth<=w&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),C=Bc((()=>{const e=window.innerWidth<=w;u(e);const t=y.current,r=v.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return h(t.scrollLeft>=1),void p(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);h(!1),p(!1)}));if(Rc("resize",C),Rc("scroll",C,y.current),zc((()=>{$(),C()}),[$,C]),Xe({onResize:$,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!n)return null;return e.jsxs(Wc,Object.assign({ref:v,id:l||"breadcrumb"},d,{children:[e.jsx("nav",{children:e.jsx(Vc,{ref:y,children:n.map(((t,r)=>{let i;return t.children?(i=r!==n.length-1&&t.href?e.jsx(Xc,Object.assign({},t,{weight:"semibold"})):e.jsx(qc,{weight:"semibold",children:t.children}),e.jsxs(Uc,{$styleProps:s,children:[i,r<n.length-1&&e.jsx(Kc,{})]},r)):null}))})}),c&&(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[f&&m&&e.jsx(Yc,{$backgroundColor:t.left,$position:"left"}),g&&b&&e.jsx(Yc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Breakpoint=bl,exports.Button=Sd,exports.ButtonWithIcon=Jc,exports.CCubeTheme=Fl,exports.Calendar=r=>{var{className:n,styleType:i="bordered",value:o,onSelect:a}=r,s=G(r,["className","styleType","value","onSelect"]);const[l,d]=t.useState(o);return t.useEffect((()=>{d(o)}),[o]),e.jsx(Gu,{className:n,$hasBorder:"bordered"===i,children:e.jsx(qu,Object.assign({value:l,initialCalendarDate:l,isFocusable:!0,onSelect:e=>{d(e),null==a||a(e)}},s))})},exports.Card=Qu,exports.Checkbox=lf,exports.Colour=ul,exports.Component=qB,exports.CountdownTimer=r=>{var{className:n,align:o="right",timer:a,timestamp:s,notifyTimer:l,offset:d,mobileOffset:c,show:u,fixed:f=!0,"data-testid":h,onFinish:g,onNotify:p,onTick:m}=r,b=G(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(null),y=t.useRef(!1),[x,w]=t.useState(0),[$,C]=t.useState(0),[S,j]=t.useState(0),[k,D]=t.useState(!1),[E]=((e,r,n)=>{const[i,o]=t.useState((()=>{const t=Zf(e,r)-Date.now();return Qf(t)}));t.useEffect((()=>{if(!n)return;const t=Zf(e,r),i=a(t);return()=>clearTimeout(i)}),[r,n,e]);const a=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,i=Qf(r);if(o(i),0!==i)return setTimeout(t,n>500?n:n+1e3)};return t()};return[i]})(a,s,k),{ref:T,inView:F}=Pf({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),O=!f||F,I="number"==typeof l&&E<=l,M=i.useTheme(),_=bl["sm-max"]({theme:M}),A=Jd.useMediaQuery({maxWidth:_});t.useEffect((()=>{D(u)}),[u]),t.useEffect((()=>{0===E?P():"number"==typeof l&&E<=l&&(R(),z())}),[E]),t.useEffect((()=>{const e=function(){var e,t;const r=null!==(e=null==d?void 0:d.top)&&void 0!==e?e:168,n=null!==(t=null==c?void 0:c.top)&&void 0!==t?t:80,i=A?n:r;return i}();w(e)}),[A,null==d?void 0:d.top,null==c?void 0:c.top]),t.useEffect((()=>{if(v.current){const e=Mf(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[a,u]);const B=()=>{if(!v.current)return;const e=v.current.getBoundingClientRect();j(e.x),C(e.right)},R=()=>{m&&m(E)},z=()=>{p&&!y.current&&(y.current=!0,p())},P=()=>{D(!1),g&&g()};const L=()=>{const{minutes:t,seconds:r}=Of.toMinutesSeconds(E),n=1!==t?"mins":"min",i=1!==r?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(Gf,{$warn:I}),e.jsx(qf,{children:"Time left:"}),e.jsxs(Xf,{children:[t," ",n," ",String(r).padStart(2,"0")," ",i]})]})};return k||0===E?e.jsxs(Vf,Object.assign({className:n},b,{children:[e.jsx("div",{ref:T}),e.jsx(Uf,{"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:O?void 0:"",$visible:O,$warn:I,children:L()}),v.current&&!O&&(()=>{var t,r;const n=null!==(t=null==d?void 0:d.left)&&void 0!==t?t:"left"===o?S:void 0,i=null!==(r=null==d?void 0:d.right)&&void 0!==r?r:"right"===o?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(Kf,{"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:I,$top:x,$left:n,$right:i,children:L()})})()]})):e.jsx(e.Fragment,{})},exports.DSThemeProvider=({theme:r,children:n})=>{const[o,a]=t.useState(null==r?void 0:r.colourMode);t.useEffect((()=>{if(!r)return void a("light");if(r.colourMode)return void a(r.colourMode);const e=dl();if(a(e),"undefined"!=typeof window&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{r.colourMode||a(e.matches?"dark":"light")};return e.addEventListener?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):(e.addListener(t),()=>e.removeListener(t))}}),[null==r?void 0:r.colourMode]);const s=Object.assign(Object.assign({},r),{colourMode:o||"light"});return e.jsx(i.ThemeProvider,{theme:s,children:n})},exports.DataTable=r=>{var{id:n,headers:i,rows:o,className:a,sortIndicators:s,alternatingRows:l,loadState:d="success",enableMultiSelect:c,selectedIds:f,disabledIds:h,enableActionBar:g,enableSelectAll:p,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:C}=r,S=G(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=t.useRef(null),k=t.useRef(null),D=t.useRef(null),E=t.useRef(null),T=t.useRef(null),[F,O]=t.useState(!1),[I,M]=t.useState(!1),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z,P]=t.useState(!1),{ref:L,inView:N}=Pf(),H=t.useCallback((()=>{if(!T.current||!E.current)return;const e=T.current.scrollHeight>T.current.clientHeight;O(e),e?E.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),Xe({onResize:H});Rc("scroll",(()=>{requestAnimationFrame((()=>{F?X():Z()})),T.current&&A(T.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[o]);const W=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),V=e=>!!(null==f?void 0:f.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(c?1:0),X=()=>{if(!T.current)return;const e=T.current.getBoundingClientRect();R(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(j.current&&k.current&&T.current&&E.current&&D.current))return;const e=k.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=j.current.getBoundingClientRect().height-D.current.clientHeight-32,n=Math.min(t,r);E.current.style.transform=`translateY(-${n}px)`}else E.current.style.transform="translateY(0)"},Q=()=>{j.current&&T.current&&P(j.current.clientHeight+(g?56:0)<T.current.clientHeight)},J=t=>{const{fieldKey:r,label:n,clickable:i=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Oh,{"data-testid":K(`header-${r}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(r)),style:o,$isCheckbox:!1,children:e.jsxs(Ih,{children:["string"==typeof n?e.jsx(exports.Typography.BodyBL,{weight:"bold",children:n}):n,ee(r)]})},r)},ee=t=>{const r=null==s?void 0:s[t];return r?"asc"===r?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Oh,{"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0,children:e.jsx(Bh,{children:p&&e.jsx(lf,{checked:W(),indeterminate:!!f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})}),re=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e.jsx(_h,{"data-testid":K(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e.jsx(Ah,{children:a}):"function"==typeof a?a(r,{isSelected:V(o)}):a},s)},ne=t=>e.jsx(_h,{"data-testid":K(`row-${t}-selection`),$isCheckbox:!0,children:e.jsx(Bh,{children:e.jsx(lf,{checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})}),ie=()=>e.jsx(fh,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(zh,{weight:"bold",children:b.title}):b.title:e.jsx(zh,{weight:"bold",children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(Ch,{id:n||"table-wrapper","data-testid":S["data-testid"]||"table",className:a,ref:T,onScroll:()=>{F&&T.current&&M(T.current.scrollTop+T.current.clientHeight>=T.current.scrollHeight)},children:[e.jsx(Sh,{children:e.jsxs(jh,{$end:_,$scrollable:F,ref:j,$stickyHeader:m,children:[e.jsx("thead",{ref:D,children:e.jsxs(Fh,{children:[c&&te(),i.map(J)]})}),e.jsx(kh,{$showLastRowBottomBorder:z,children:"success"===d?!o||o.length<1?e.jsx("tr",{children:e.jsx(Ph,{colSpan:q(),children:y?y():ie()})}):e.jsx(e.Fragment,{children:null==o?void 0:o.map(((t,r)=>e.jsxs(Mh,{"data-testid":K(`row-${t.id.toString()}`),$alternating:Y(r),$isSelectable:c,$isSelected:V(t.id.toString()),children:[c&&ne(t.id.toString()),i.map((e=>re(e,t)))]},t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",{colSpan:q(),children:e.jsx(Rh,{children:"loading"===d&&e.jsx(qd,{})})})})})]})}),g&&f&&f.length>0&&(()=>{var t,r,n,i;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e.jsx(Dh,{ref:E,$fixed:B,$left:null===(n=null===(r=null==j?void 0:j.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth,children:e.jsxs(Th,{$float:(F?!I:!N)||B,$scrollable:F,children:[e.jsx(exports.Typography.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e.jsx(Eh,{type:"button",onClick:C,children:"Clear selection"}),v]})})})(),e.jsx("div",{ref:e=>{k.current=e,L(e)}})]})},exports.DateInput=hg,exports.DateNavigator=yg,exports.DateRangeInput=Fg,exports.Divider=Hg,exports.Drawer=r=>{var{children:n,heading:i,show:o,onClose:a,onOverlayClick:s}=r,l=G(r,["children","heading","show","onClose","onOverlayClick"]);const[d,c]=t.useState(o),[u]=t.useState((()=>_c.generate())),f=t.useRef(null);t.useEffect((()=>{if(!o){const e=setTimeout((()=>c(!1)),500);return()=>clearTimeout(e)}c(!0)}),[o]);return e.jsx(Ug,{show:d,enableOverlayClick:!0,onOverlayClick:s,children:e.jsxs(Xg,Object.assign({$show:o,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&o&&(null===(t=f.current)||void 0===t||t.focus())}},l,{children:[e.jsxs(Gg,{children:[e.jsx(Qg,{id:u,ref:f,tabIndex:-1,weight:"bold",children:i}),e.jsx(Zg,{"aria-label":"Close drawer",onClick:a,focusHighlight:!1,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]}),e.jsx(Jg,{children:n})]}))})},exports.ESignature=Ep,exports.ErrorDisplay=fh,exports.FeedbackRating=t=>{const{imgSrc:r,buttonLabel:n,description:i,rating:o,onRatingChange:a,onSubmit:s}=t,l=G(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:Tp,c=null!=i?i:Op;return e.jsxs(Np,Object.assign({},l,{children:[d&&e.jsx(Lp,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(Hp,{children:[e.jsx(exports.Typography.HeadingSM,{as:"div",weight:"semibold",children:c}),e.jsx(Pp,{description:c,rating:o,onRatingChange:a}),e.jsx(Wp,{disabled:!o,onClick:s,type:"button",children:null!=n?n:Fp})]})]}))},exports.FileDownload=({id:t,fileItems:r,title:n,description:i,onDownload:o,"data-testid":a,className:s,styleType:l="bordered"})=>{const d=e=>Z(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return e.jsxs(Vp,{id:t?`${t}-file-download`:"file-download",className:s,"data-testid":a,$border:"bordered"===l,children:[(n||i)&&e.jsxs(Yp,{children:[n?"string"==typeof n?e.jsx(Up,{children:n}):e.jsx(Kp,{children:n}):null,i?"string"==typeof i?e.jsx(qp,{children:i}):e.jsx(Xp,{children:i}):null]}),e.jsx(Gp,{children:r&&r.length>0&&r.map((t=>e.jsx(gm,{fileItem:t,onDownload:d},t.id)))})]})},exports.FileUpload=({styleType:r="bordered",fileItems:n,title:i,description:o,maxFiles:a,warning:s,className:l,name:d,id:c,"data-testid":u,accept:f,capture:h,multiple:g,disabled:p,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:C,onSort:S})=>{const j=t.useRef(null),[k,D]=t.useState(),E=()=>!(!a||!n)&&n.length>=a;return e.jsx(mm.Provider,{value:{activeId:k,setActiveId:D},children:e.jsxs(Ub,{ref:j,onChange:e=>{!p&&w&&w(e)},id:c?`${c}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===r,className:l,"data-testid":u,name:d,multiple:g,disabled:p||E()||x,children:[!(!i&&!o)&&e.jsxs(e_,{children:[i?"string"==typeof i?e.jsx(t_,{children:i}):e.jsx(r_,{children:i}):null,o?"string"==typeof o?e.jsx(n_,{children:o}):e.jsx(i_,{children:o}):null]}),!!s&&e.jsx(o_,{type:"warning",children:s}),e.jsx(JM,{fileItems:n,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:p,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{C&&C(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(d_,{type:"error",children:y}),!x&&e.jsxs(a_,{children:[e.jsx(s_,{type:"button",styleType:"secondary",disabled:!!k||p||E(),onClick:e=>{p||(e.preventDefault(),j.current&&j.current.openFileDialog())},children:"Upload files"}),e.jsx(l_,{children:"or drop them here"})]})]})})},exports.Filter=V_,exports.Font=fl,exports.Footer=t=>{var{children:r,links:n,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:s,logoSrc:l,copyrightInfo:d,onFooterLinkClick:c,layout:u="default"}=t,f=G(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,g=i.useTheme(),p=t=>t.map(((t,r)=>{const n=G(t,["data-options"]);return e.jsx("li",{children:e.jsx(sA,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):c&&(e.preventDefault(),c(t))})(e,t)}))},r)}));return e.jsxs(aA,Object.assign({},f,{children:[(()=>{let t=null;return r||((n||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(cA,{"data-testid":"logo-section",children:e.jsx("img",{src:l||J_.getFooterLogo(null==g?void 0:g.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==n?void 0:n[0])&&e.jsx(uA,{"data-testid":"link-col-1",children:p(n[0])},"link-col-1"),(null==n?void 0:n[1])&&e.jsx(uA,{"data-testid":"link-col-2",children:p(n[1])},"link-col-2"),s&&e.jsx(fA,{children:e.jsx(X_,{})})]})),t?e.jsxs(e.Fragment,{children:[e.jsx(dA,{type:"grid",stretch:h,children:t}),e.jsx(lA,{})]}):null)})(),e.jsxs(hA,{type:"grid",stretch:h,children:[e.jsx(gA,{children:(()=>{const t=J_.getDisclaimerLinks(null==g?void 0:g.resourceScheme,a);return Object.keys(t).map((r=>e.jsx(mA,Object.assign({},t[r]),r)))})()},"disclaimer"),e.jsx(pA,{children:e.jsx(exports.Typography.BodyXS,{"data-testid":"copyright-text",children:d||e.jsxs(e.Fragment,{children:["©"," ",J_.getCopyrightInfo(o,null==g?void 0:g.resourceScheme)]})})},"copyright")]})]}))},exports.Form=wM,exports.FullscreenImageCarousel=XB,exports.HistogramSlider=gw,exports.IconButton=pg,exports.ImageButton=ZB,exports.Input=xw,exports.InputGroup=_j,exports.InputMultiSelect=jO,exports.InputNestedMultiSelect=EO,exports.InputNestedSelect=TO,exports.InputRangeSelect=JO,exports.InputRangeSlider=lw,exports.InputSelect=eI,exports.InputSlider=sI,exports.Layout=oA,exports.LifeSGTheme=El,exports.LinkList=r=>{var{items:n,maxShown:i,style:o="default",onItemClick:a}=r,s=G(r,["items","maxShown","style","onItemClick"]);const[l,d]=t.useState(!i||i>=n.length),c=i?n.slice(0,i):n,u=i?n.slice(i):[],f=Xe(),h=f.ref,g=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):a&&(e.preventDefault(),a(t,e))},p=()=>{d(!l)},m=(t,r,n,i)=>{const a="small"===o?tR:eR;return e.jsxs(e.Fragment,{children:[e.jsxs(iR,{children:[e.jsx(a,{"data-testid":`link-title-${t}`,weight:"semibold",children:r}),n&&e.jsx(oR,{"data-testid":`link-description-${t}`,children:n}),i]}),e.jsx(rR,{})]})},b=ci({height:l?f.height:0});return e.jsxs(JB,Object.assign({},s,{children:[c.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=G(t,["title","description","secondaryDescription","onClick"]);return e.jsx(nR,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>g(e,t)},s,{children:m(r,n,i,o)}),`list-item-shown-${r}`)})),u.length>0&&e.jsx(aR,{style:b,"data-testid":"minimised-content",children:e.jsx(sR,{ref:h,children:u.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=G(t,["title","description","onClick","secondaryDescription"]);return e.jsx(nR,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>g(e,t)},s,{children:m(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),u.length>0&&e.jsxs(uR,{type:"button",onClick:p,"data-testid":"toggle-button",$showMinimised:l,children:[e.jsx(lR,{weight:"semibold","data-testid":"toggle-button-label",children:l?"View less":"View more"}),l?e.jsx(cR,{}):e.jsx(dR,{})]})]}))},exports.LoadingDots=Vd,exports.LoadingDotsSpinner=qd,exports.LoadingSpinner=Ld,exports.Markup=hR,exports.MaskedInput=qj,exports.Masonry=mR,exports.Masthead=vR,exports.MediaQuery=vl,exports.Modal=sp,exports.Motion=hl,exports.MyLegacyTheme=Ol,exports.NBComponent=kz,exports.Navbar=gz,exports.NavbarHeight=pz,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=Tz,exports.OneServiceTheme=Ml,exports.OtpInput=r=>{var{id:n,value:i=[],"data-testid":o,className:a,cooldownDuration:s,actionButtonProps:l,errorMessage:d,numOfInput:c,onChange:u,onCooldownStart:f,onCooldownEnd:h}=r,g=G(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const p=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=p,y=G(p,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,C]=t.useState(new Array(c).fill("")),[S,j]=t.useState(s),[k,D]=t.useState(new Date),[E]=t.useState((()=>_c.generate())),T=!!d,F=`${E}-error`,O=`${E}-timer`;t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=R();return()=>e()}}),[k]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===c&&C(i)}),[i]);const I=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(A(n)){const t=[...$];t[e]=n.substring(n.length-1),null===(r=x.current[e+1])||void 0===r||r.focus(),C(t),u&&u(t)}},M=e=>t=>{var r,n,i;const{key:o,code:a}=t;if("Backspace"===o||"Backspace"===a){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=x.current[e-1])||void 0===r||r.focus()),C(t),u&&u(t)}else"ArrowRight"===t.code?null===(n=x.current[e+1])||void 0===n||n.focus():"ArrowLeft"===t.code&&(null===(i=x.current[e-1])||void 0===i||i.focus())},_=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&A(t,c)?(C(r),w.current&&w.current(r)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),B=()=>{const e=Date.now(),t=1e3*s;return e<k.valueOf()+t},R=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*s,n=Math.ceil((k.valueOf()+r-t)/1e3);j(n),n<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},z=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`,P=e=>`${e} second${1===e?"":"s"}`;return e.jsxs(BP,{id:n,"data-testid":o,className:a,children:[e.jsx(RP,{role:"group","aria-label":`${c}-digit OTP input field`,children:$.map(((t,r)=>e.jsx(zP,Object.assign({id:z(r,"otp-input",n),"data-testid":z(r,"otp-input",o),"aria-label":`${Ac.formatOrdinal(r+1)} digit`,"aria-invalid":T,"aria-describedby":T?F:void 0,ref:e=>x.current[r]=e,type:"text",inputMode:"numeric",value:t,error:T,onChange:I(r),onKeyDown:M(r),autoComplete:"off"},g),r)))}),d&&e.jsx(Px,{id:F,children:d}),e.jsxs(AP,{role:"timer",id:O,children:[P(S)," remaining"]}),e.jsx(AP,{"aria-live":"polite",children:S>0?"":"Ready to resend OTP"}),e.jsx(PP,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{C(new Array(c).fill("")),B()||(D(new Date),j(s)),b&&b(e)},disabled:m||B()},y.children?{children:y.children}:{children:S>0?`Resend OTP in ${P(S)}`:"Resend OTP","aria-label":S>0?`Resend OTP in ${P(s)}`:"Resend OTP","aria-describedby":O}))]})},exports.Overlay=Ug,exports.PATheme=_l,exports.Pagination=JP,exports.PhoneNumberInput=UO,exports.Pill=nL,exports.Popover=IL,exports.PopoverInline=Ix,exports.PopoverTrigger=Ex,exports.PopoverV2=kx,exports.PredictiveTextInput=XO,exports.ProgressIndicator=t=>{var{steps:r,currentIndex:n,displayExtractor:o,fadeColor:a,fadePosition:s}=t,l=G(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const d=i.useTheme(),c=bl["lg-max"]({theme:d}),u=Jd.useMediaQuery({maxWidth:c}),f=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},h=(e,t)=>jN(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return e.jsxs(ML,Object.assign({},l,{children:[e.jsx(_L,{children:r.map(((t,r)=>{const i=r<=n;return e.jsx(zL,{id:h(r,n),children:e.jsx(AL,{highlighted:i})},r)}))}),e.jsx(_L,{children:u?e.jsxs(zL,{id:h(n,n),children:[e.jsxs(RL,{weight:"semibold",id:`${h(n,n)}-counter`,children:["Step ",n+1," of ",r.length]}),e.jsx(RL,{weight:"regular",id:`${h(n,n)}-title`,children:f(r[n])})]},n):r.map(((t,r)=>{const i=r<=n,o=r===n,a=o?"bold":"regular";return e.jsx(zL,{id:`${h(r,n)}-title`,children:e.jsx(BL,{highlighted:i,weight:a,"aria-current":o,children:f(t)})},r)}))})]}))},exports.RBSTheme=Il,exports.RadioButton=t=>{var{className:r,checked:n,disabled:i,displaySize:o="default",onChange:a}=t,s=G(t,["className","checked","disabled","displaySize","onChange"]);return e.jsxs(kN,{$selected:n,$disabled:i,className:r,$displaySize:o,"data-testid":"radio-button",children:[e.jsx(TN,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:n,disabled:i},s)),n?e.jsx(EN,{"data-testid":"radio-checked",$disabled:i}):e.jsx(DN,{"data-testid":"radio-unchecked",$disabled:i})]})},exports.Radius=ml,exports.SelectHistogram=aI,exports.Sidenav=GN,exports.SignatureCanvas=kp,exports.SignatureCanvasContainer=jp,exports.SingpassButton=nH,exports.SmartAppBanner=CH,exports.Spacing=pl,exports.SupportGoWhereTheme=Bl,exports.SupportGoWhereThemeBase=Dl,exports.Tab=zH,exports.Tag=t=>{var{type:r,colorType:n="black",children:i,interactive:o=!1,icon:a,iconPosition:s="left"}=t,l=G(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(PH,Object.assign({as:o?"button":"div",$type:r,$color:n,$interactive:o},l,{children:["left"===s&&a,e.jsx(LH,{children:i}),"right"===s&&a]}))},exports.TextList=DI,exports.Textarea=hI,exports.ThemedLoadingSpinner=t=>{const r=i.useTheme();return"lifesg"===(null==r?void 0:r.resourceScheme)?e.jsx(Ld,Object.assign({},t)):e.jsx(qd,Object.assign({},t))},exports.TimeRangePicker=cM,exports.TimeSlotBar=({"data-testid":r,className:n,variant:i="default",startTime:o,endTime:a,slots:s,onSlotClick:l,onClick:d,styleAttributes:c})=>{const u=t.useRef(null),[f,h]=t.useState(0),[g,p]=t.useState(0),m=WH(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};Xe({onResize:()=>{u.current&&p(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(r)return`${r}-${e}`},$=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(YH,{className:n,children:[e.jsxs(XH,{"data-testid":r,ref:u,$variant:i,children:[e.jsx(GH,{"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=gc(o,"HH:mm"),n=gc(a,"HH:mm"),s=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=$(o,s,i);t.push(e.jsx(QH,{$isLongMarker:r,$variant:i,children:r&&e.jsx(JH,{weight:"semibold",children:NH.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),e.jsxs(ZH,{"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!c)return;const{backgroundColor:t,backgroundColor2:r,styleType:n="default"}=c,s=NH.calculateWidth(o,a,m),l=!!d&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(tW,{$variant:i}),e.jsx(eW,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:n,$bgColor:t,$bgColor2:r,$clickable:l,onClick:l?d:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:r,startTime:n,endTime:s,label:d,clickable:c=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:g,backgroundColor2:p}=u,b=NH.calculateWidth(n,s,m),v=NH.calculateWidth(o,n,m),y=c&&"default"===i;return e.jsxs("div",{children:[e.jsx(tW,{$variant:i,style:{left:`${v}px`}}),e.jsx(eW,{"data-testid":w(`${r}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:g,$bgColor2:p,$clickable:y,onClick:()=>y&&l(t),children:d&&"default"===i&&e.jsx(rW,{$slotWidth:b,$color:f,weight:"semibold",children:x(b)?"...":d})}),a!==s&&e.jsx(tW,{$variant:i,style:{left:`${v+b}px`}})]},r)}))]})]}),e.jsx(e.Fragment,{children:f>0&&e.jsx(UH,{"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")},children:e.jsx(qH,{})})}),f+g<NH.calculateWidth(o,a,m)?e.jsx(UH,{"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")},children:e.jsx(KH,{})}):e.jsx(e.Fragment,{})]})},exports.TimeSlotBarWeek=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,startTime:d,endTime:c,slots:u,interval:f,variant:h,maxVisibleCellHeight:g,showNavigationHeader:p=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=r,y=G(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(a),$=t.useRef(null),C=t.useRef(void 0);t.useEffect((()=>{w(a)}),[a]);const S=e=>{const t=e.format(TW);w(t),o&&o(t)},j=(e,t)=>{b&&b(e,t)},k=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(TW),lastDayOfWeek:e.endOf("week").format(TW)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(EW,Object.assign({},y,{children:e.jsx(Cu,{ref:$,dynamicHeight:!0,initialCalendarDate:Ic.toDayjs(x||v).endOf("week").format(TW),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&gc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&gc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{C.current&&C.current.isSame(e,"week")||k(e),C.current=e},showNavigationHeader:p,minDate:s,maxDate:l,getMonthHeaderLabel:e=>gc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>gc(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e.jsx(DW,{calendarDate:t,disabledDates:n,selectedDate:x,minDate:s,maxDate:l,startTime:d,endTime:c,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:g,enableSelection:m,onSlotClick:j}))(t)})}))},exports.TimeSlotWeekView=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,slots:d,showNavigationHeader:c=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=r,g=G(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,m]=t.useState(a),b=t.useRef(null),v=t.useRef(void 0);t.useEffect((()=>{m(a)}),[a]);const y=e=>{const t=e.format(LW);m(t),o&&o(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(LW),lastDayOfWeek:e.endOf("week").format(LW)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(PW,Object.assign({},g,{children:e.jsx(Cu,{ref:b,dynamicHeight:!0,initialCalendarDate:Ic.toDayjs(p||h).endOf("week").format(LW),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&gc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&gc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:c,minDate:s,maxDate:l,getMonthHeaderLabel:e=>gc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>gc(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e.jsx(zW,{calendarDate:t,disabledDates:n,selectedDate:p,minDate:s,maxDate:l,onSelect:y,slots:d,enableSelection:u,onSlotClick:x})})}))},exports.TimeTable=r=>{var{date:n,emptyContentMessage:i,rowData:o,loading:a,minTime:s="00:00",maxTime:l="23:00",minDate:d,maxDate:c,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:g,onRefresh:p,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=r,y=G(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=Of.roundToNearestInterval(s,60),$=Of.roundToNearestInterval(l,60,!0),C=Of.generateHourlyIntervals(w,$),S=0===u||Kj.isEmpty(o),j=S||o.length===u,k=t.useRef(null),D=t.useRef(null),[E,T]=t.useState(!1),[F,O]=t.useState(!1),[I,M]=t.useState(0),[_,A]=t.useState(!1);t.useEffect((()=>{const e=Kj.throttle((()=>{if(k.current&&(T(k.current.scrollLeft>0),O(k.current.scrollTop>0)),_||!k.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!j&&g&&!a&&(A(!0),g())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[j,_,a,g]),t.useEffect((()=>{A(!1)}),[o]);Xe({onResize:()=>{if(k.current){const e=Math.ceil(60*C.length/QW),t=(k.current.clientWidth-JW)/e;M(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const B=(()=>{let e=0;const t=ZW.length;return()=>{const r=ZW[e],n=eV[e];return e=(e+1)%t,{mainColor:r,alternateColor:n}}})(),R=({wrapper:e,children:t})=>e(t),z=()=>{if(!a&&_)return e.jsx(DV,{$isScrolled:E,children:e.jsx(AV,{})})},P=()=>{if(!a&&_)return e.jsx(IV,{"data-testid":"lazy-loader",children:C.map(((t,r)=>e.jsx(MV,{$width:4*I,children:e.jsx(AV,{})},`lazy-load-cell-${r}`)))})};return S?e.jsxs(vV,Object.assign({},y,{"data-testid":x,children:[e.jsx(sV,{selectedDate:n,loading:a||_,tableContainerRef:k,minDate:d,maxDate:c,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:p,onCalendarDateSelect:v}),e.jsx(yV,{className:"empty-container",children:a?e.jsx(FV,{$isEmptyContent:S}):e.jsx(OV,{type:"no-item-found",description:i})})]})):e.jsxs(vV,Object.assign({},y,{"data-testid":x,children:[e.jsx(sV,{"data-id":"timetable-date-navigator",selectedDate:n,loading:a||_,tableContainerRef:k,minDate:d,maxDate:c,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:p,onCalendarDateSelect:v}),e.jsxs(xV,{"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:a,$allRecordsLoaded:j||!g,children:[e.jsx(wV,{$isScrolledY:F,$isScrolledX:E}),e.jsx($V,{$numOfRows:o.length,$isScrolled:E,"data-testid":"row-header-column-id",children:e.jsxs(e.Fragment,{children:[o.map(((r,n)=>e.jsx(R,{wrapper:e=>((e,r)=>{if(!e.rowHeaderPopover)return r;const n={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:r,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(BV,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),r)})(r,e),children:e.jsxs(DV,{$isScrolled:E,children:[e.jsx(EV,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e.jsx(TV,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),z()]})}),e.jsx(CV,{$numOfColumns:C.length,$isScrolled:F,children:C.map((t=>e.jsx(SV,{"data-testid":`${t}-column`,children:e.jsx(jV,{weight:"semibold",children:t})},`${t}-column-key`)))}),a?e.jsx(FV,{$isEmptyContent:S}):e.jsxs(kV,{"data-testid":"content-container-id",ref:D,$numOfRows:o.length,children:[o.map(((t,r)=>e.jsx(bV,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:B(),intervalWidth:I,containerRef:D},t),`${r}-row-bar`))),P()]})]})]}))},exports.Timeline=({items:r,className:n,id:i,title:o,startCol:a,colSpan:s,"data-base-indicator-testid":l,"data-testid":d="timeline"})=>{const c=t=>"string"==typeof t?e.jsx(exports.Typography.BodyMD,{className:"timeline-item-content-text",children:t}):e.jsx(e.Fragment,{children:t}),f=t=>"string"==typeof t?e.jsx(UW,{weight:"semibold",className:"timeline-item-title",children:t}):e.jsx(e.Fragment,{children:t}),h=e=>e.slice(0,2).map(((e,r)=>t.createElement(GW,Object.assign({},e,{type:e.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),g=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(VW,{className:n,id:i,"data-testid":d,$startCol:a,$colSpan:s,children:[e.jsx(YW,{"data-testid":"timeline-title",weight:"bold",children:o}),r.map(((t,r)=>{const{title:n,content:i,statuses:o,variant:a}=t,s=l?`circleindicator${r+1}_div_${l}`:"circleindicator",d=a||(0===r?"current":"upcoming-active");return e.jsxs(KW,{children:[e.jsxs(WW,{children:[e.jsx(NW,{"data-testid":s,$variant:d,children:g(d)}),e.jsx(HW,{$variant:d})]}),e.jsxs(qW,{className:"timeline-item-content",children:[f(n),o&&e.jsx(XW,{children:h(o)}),c(i)]})]},`timeline-item-${r}`)}))]})},exports.Timepicker=fM,exports.Toast=r=>{var{type:n="success",title:o,label:a,autoDismiss:s,autoDismissTime:l=UV,onDismiss:d,fixed:c=!0,actionButton:f}=r,h=G(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[g,p]=t.useState(!1),m=i.useTheme(),b=bl["lg-max"]({theme:m}),v=Jd.useMediaQuery({maxWidth:b});t.useEffect((()=>{p(!0)}),[]),t.useEffect((()=>{if(!s)return;const e=setTimeout((()=>{p(!1)}),l);return()=>clearTimeout(e)}),[s]);const y=ci({opacity:g?1:0,transform:g?v?"translateY(0%)":"translateX(0%)":v?"translateY(-1500%)":"translateX(150%)",config:{easing:ur.easeInOutQuart,duration:1e3},onRest:()=>{g||null==d||d()}});return e.jsxs(zV,Object.assign({style:y,$type:n,$fixed:c},h,{children:[e.jsxs(PV,{children:[e.jsxs(LV,{$type:n,children:[(()=>{switch(n){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(NV,{children:[o&&(U.default.isValidElement(o)?o:e.jsx(HV,{$type:n,weight:"semibold",children:o})),a&&e.jsx(WV,{$type:n,children:U.default.isValidElement(a)?a:o?e.jsx(exports.Typography.BodyMD,{children:a}):e.jsx(exports.Typography.BodyBL,{children:a})})]})]}),f&&e.jsx(VV,{styleType:"light",onClick:f.onClick,children:f.label})]}),e.jsx(YV,{$type:n,onClick:()=>{p(!1)},children:e.jsx(u.CrossIcon,{})})]}))},exports.Toggle=WI,exports.Tooltip=ZV,exports.UneditableSection=pY,exports.UnitNumberInput=yM,exports.V2_BaseTheme=FY,exports.V2_BookingSGTheme=OY,exports.V2_CCubeTheme=_Y,exports.V2_Color=dL,exports.V2_DesignToken=vY,exports.V2_Layout=SY,exports.V2_MediaQuery=Ag,exports.V2_MediaWidths=Bg,exports.V2_MyLegacyTheme=MY,exports.V2_OneServiceTheme=AY,exports.V2_RBSTheme=IY,exports.V2_TextList=TY,exports.V2_TextStyle=pL,exports.V2_TextStyleHelper=wL,exports.V2_Transition=kL,exports.__awaiter=Z,exports.commonjsGlobal=Ti,exports.createThemeWithColourMode=cl,exports.getSystemColourMode=dl,exports.useDSTheme=()=>{const e=t.useContext(i.ThemeContext);return e?{colourMode:e.colourMode||"light",theme:e}:(console.warn("useDSTheme must be used within a DSThemeProvider or ThemeProvider"),{colourMode:"light",theme:null})},exports.withNotificationBanner=t=>U.default.forwardRef(((r,n)=>e.jsx(kz,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=_P.sanitize(t.content);return e.jsx("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e.jsx(Tz.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(r,n)=>i=>{const{onPopoverAppear:o,onPopoverDismiss:a}=i,s=G(i,["onPopoverAppear","onPopoverDismiss"]),l=n.trigger||"click",d=s,[c,u]=t.useState(!1),f=t.useRef(null),h=Jd.useMediaQuery({maxWidth:Mg.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}}),[c]);const g=e=>{f&&!f.current.contains(e.target)&&(c&&u(!1),a&&a())};return e.jsxs(TL,{id:"popover-hoc-wrapper",ref:f,children:[e.jsx(FL,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!c),!c&&o&&o(),c&&a&&a())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&c&&!h&&u(!1)},"aria-label":"popover-button",children:e.jsx(r,Object.assign({},d))}),e.jsx(IL,{visible:c,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{u(!1)},children:n.content})]})},exports.withTooltip=(t,r)=>n=>{const{tooltipVisible:i,position:o}=n,a=G(n,["tooltipVisible","position"]);return e.jsxs(GV,{children:[e.jsx(t,Object.assign({},a)),e.jsx(ZV,{visible:i,position:o,children:r.content})]})};
//# sourceMappingURL=index.b9bcdc35.js.map
