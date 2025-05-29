"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("react-dom"),n=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),o=require("@lifesg/react-icons/external"),a=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),p=require("@lifesg/react-icons/chevron-left"),g=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),C=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),j=require("@lifesg/react-icons/square-fill"),k=require("@lifesg/react-icons/square-tick-fill"),D=require("@lifesg/react-icons/tick"),T=require("@lifesg/react-icons/caret-right"),E=require("@lifesg/react-icons/minus-square-fill"),O=require("@lifesg/react-icons/circle"),F=require("@lifesg/react-icons/circle-dot"),I=require("@lifesg/react-icons/bin"),_=require("@lifesg/react-icons/pencil"),M=require("@lifesg/react-icons/drag-handle"),A=require("@lifesg/react-icons/minus"),B=require("@lifesg/react-icons/plus"),R=require("@lifesg/react-icons/menu"),z=require("@lifesg/react-icons/chevron-2-left"),P=require("@lifesg/react-icons/chevron-2-right"),L=require("@lifesg/react-icons/chevron-line-left"),N=require("@lifesg/react-icons/chevron-line-right"),H=require("@lifesg/react-icons/ellipsis-horizontal"),W=require("@lifesg/react-icons/star-half");function V(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function Y(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var U=Y(t),K=V(r),q=V(i);const X=U.default.createContext(!1);function G(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function Z(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function Q(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function J(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function ee(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var te=function(e,t){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},te(e,t)};var re=function(){return re=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},re.apply(this,arguments)};var ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ie=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},oe="object"==typeof ne&&ne&&ne.Object===Object&&ne,ae="object"==typeof self&&self&&self.Object===Object&&self,se=oe||ae||Function("return this")(),le=se,ce=function(){return le.Date.now()},de=/\s/;var ue=function(e){for(var t=e.length;t--&&de.test(e.charAt(t)););return t},fe=/^\s+/;var he=function(e){return e?e.slice(0,ue(e)+1).replace(fe,""):e},pe=se.Symbol,ge=pe,me=Object.prototype,be=me.hasOwnProperty,ve=me.toString,ye=ge?ge.toStringTag:void 0;var xe=function(e){var t=be.call(e,ye),r=e[ye];try{e[ye]=void 0;var n=!0}catch(e){}var i=ve.call(e);return n&&(t?e[ye]=r:delete e[ye]),i},we=Object.prototype.toString;var $e=xe,Ce=function(e){return we.call(e)},Se=pe?pe.toStringTag:void 0;var je=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Se&&Se in Object(e)?$e(e):Ce(e)},ke=function(e){return null!=e&&"object"==typeof e};var De=he,Te=ie,Ee=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==je(e)},Oe=/^[-+]0x[0-9a-f]+$/i,Fe=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,_e=parseInt;var Me=ie,Ae=ce,Be=function(e){if("number"==typeof e)return e;if(Ee(e))return NaN;if(Te(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Te(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=De(e);var r=Fe.test(e);return r||Ie.test(e)?_e(e.slice(2),r?2:8):Oe.test(e)?NaN:+e},Re=Math.max,ze=Math.min;var Pe=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function g(){var e=Ae();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?ze(r,o-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=Ae(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Be(t)||0,Me(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Re(Be(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Ae())},b},Le=Pe,Ne=ie;var He=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ne(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Le(e,t,{leading:n,maxWait:t,trailing:i})},We=function(e,t,r,n){switch(t){case"debounce":return Pe(e,r,n);case"throttle":return He(e,r,n);default:return e}},Ve=function(e){return"function"==typeof e},Ye=function(){return"undefined"==typeof window},Ue=function(e){return e instanceof Element||e instanceof HTMLDocument},Ke=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&Ve(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function n(n){var i=e.call(this,n)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,r=e.observerOptions;if(!Ye()){t&&t.current&&(i.targetRef.current=t.current);var n=i.getElement();n&&(i.observableElement&&i.observableElement===n||(i.observableElement=n,i.resizeObserver.observe(n,r)))}},i.getElement=function(){var e=i.props,t=e.querySelector,n=e.targetDomEl;if(Ye())return null;if(t)return document.querySelector(t);if(n&&Ue(n))return n;if(i.targetRef&&Ue(i.targetRef.current))return i.targetRef.current;var o=r.findDOMNode(i);if(!o)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},i.createResizeHandler=function(e){var t=i.props,r=t.handleWidth,n=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(n||a){var l=Ke(s,i.setState.bind(i),n,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,n=t.height;!i.skipOnMount&&!Ye()&&l({width:r,height:n}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,r=e.render,n=e.children;return Ve(r)?"renderProp":Ve(n)?"childFunction":t.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var o=n.skipOnMount,a=n.refreshMode,s=n.refreshRate,l=void 0===s?1e3:s,c=n.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=o,i.targetRef=t.createRef(),i.observableElement=null,Ye()||(i.resizeHandler=We(i.createResizeHandler,a,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}te(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(n,e),n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){Ye()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return U.createElement(a,null)}}}(t.PureComponent);var qe=Ye()?t.useEffect:t.useLayoutEffect;function Xe(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,g=t.useRef(n),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return qe((function(){if(!Ye()){var e=Ke(p,w,c,u);v.current=We((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!g.current&&!Ye()&&e({width:n,height:i}),g.current=!1}))}),i,a,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,a,s,c,u,p,h,b.current]),re({ref:b},x)}var Ge=Object.defineProperty,Ze={};((e,t)=>{for(var r in t)Ge(e,r,{get:t[r],enumerable:!0})})(Ze,{assign:()=>Ot,colors:()=>Dt,createStringInterpolator:()=>Ct,skipAnimation:()=>Tt,to:()=>St,willAdvance:()=>Et});var Qe=pt(),Je=e=>dt(e,Qe),et=pt();Je.write=e=>dt(e,et);var tt=pt();Je.onStart=e=>dt(e,tt);var rt=pt();Je.onFrame=e=>dt(e,rt);var nt=pt();Je.onFinish=e=>dt(e,nt);var it=[];Je.setTimeout=(e,t)=>{const r=Je.now()+t,n=()=>{const e=it.findIndex((e=>e.cancel==n));~e&&it.splice(e,1),lt-=~e?1:0},i={time:r,handler:e,cancel:n};return it.splice(ot(r),0,i),lt+=1,ut(),i};var ot=e=>~(~it.findIndex((t=>t.time>e))||~it.length);Je.cancel=e=>{tt.delete(e),rt.delete(e),nt.delete(e),Qe.delete(e),et.delete(e)},Je.sync=e=>{ct=!0,Je.batchedUpdates(e),ct=!1},Je.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Je.onStart(r)}return n.handler=e,n.cancel=()=>{tt.delete(r),t=null},n};var at="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Je.use=e=>at=e,Je.now="undefined"!=typeof performance?()=>performance.now():Date.now,Je.batchedUpdates=e=>e(),Je.catch=console.error,Je.frameLoop="always",Je.advance=()=>{"demand"!==Je.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ht()};var st=-1,lt=0,ct=!1;function dt(e,t){ct?(t.delete(e),e(0)):(t.add(e),ut())}function ut(){st<0&&(st=0,"demand"!==Je.frameLoop&&at(ft))}function ft(){~st&&(at(ft),Je.batchedUpdates(ht))}function ht(){const e=st;st=Je.now();const t=ot(st);t&&(gt(it.splice(0,t),(e=>e.handler())),lt-=t),lt?(tt.flush(),Qe.flush(e?Math.min(64,st-e):16.667),rt.flush(),et.flush(),nt.flush()):st=-1}function pt(){let e=new Set,t=e;return{add(r){lt+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(lt-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,lt-=t.size,gt(t,(t=>t(r)&&e.add(t))),lt+=e.size,t=e)}}}function gt(e,t){e.forEach((e=>{try{t(e)}catch(e){Je.catch(e)}}))}function mt(){}var bt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function vt(e,t){if(bt.arr(e)){if(!bt.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var yt=(e,t)=>e.forEach(t);function xt(e,t,r){if(bt.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var wt=e=>bt.und(e)?[]:bt.arr(e)?e:[e];function $t(e,t){if(e.size){const r=Array.from(e);e.clear(),yt(r,t)}}var Ct,St,jt=(e,...t)=>$t(e,(e=>e(...t))),kt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Dt=null,Tt=!1,Et=mt,Ot=e=>{e.to&&(St=e.to),e.now&&(Je.now=e.now),void 0!==e.colors&&(Dt=e.colors),null!=e.skipAnimation&&(Tt=e.skipAnimation),e.createStringInterpolator&&(Ct=e.createStringInterpolator),e.requestAnimationFrame&&Je.use(e.requestAnimationFrame),e.batchedUpdates&&(Je.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Et=e.willAdvance),e.frameLoop&&(Je.frameLoop=e.frameLoop)},Ft=new Set,It=[],_t=[],Mt=0,At={get idle(){return!Ft.size&&!It.length},start(e){Mt>e.priority?(Ft.add(e),Je.onStart(Bt)):(Rt(e),Je(Pt))},advance:Pt,sort(e){if(Mt)Je.onFrame((()=>At.sort(e)));else{const t=It.indexOf(e);~t&&(It.splice(t,1),zt(e))}},clear(){It=[],Ft.clear()}};function Bt(){Ft.forEach(Rt),Ft.clear(),Je(Pt)}function Rt(e){It.includes(e)||zt(e)}function zt(e){It.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(It,(t=>t.priority>e.priority)),0,e)}function Pt(e){const t=_t;for(let r=0;r<It.length;r++){const n=It[r];Mt=n.priority,n.idle||(Et(n),n.advance(e),n.idle||t.push(n))}return Mt=0,(_t=It).length=0,(It=t).length>0}var Lt="[-+]?\\d*\\.?\\d+",Nt=Lt+"%";function Ht(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Wt=new RegExp("rgb"+Ht(Lt,Lt,Lt)),Vt=new RegExp("rgba"+Ht(Lt,Lt,Lt,Lt)),Yt=new RegExp("hsl"+Ht(Lt,Nt,Nt)),Ut=new RegExp("hsla"+Ht(Lt,Nt,Nt,Lt)),Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xt=/^#([0-9a-fA-F]{6})$/,Gt=/^#([0-9a-fA-F]{8})$/;function Zt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Qt(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Zt(i,n,e+1/3),a=Zt(i,n,e),s=Zt(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Jt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function er(e){return(parseFloat(e)%360+360)%360/360}function tr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function rr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function nr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Xt.exec(e))?parseInt(t[1]+"ff",16)>>>0:Dt&&void 0!==Dt[e]?Dt[e]:(t=Wt.exec(e))?(Jt(t[1])<<24|Jt(t[2])<<16|Jt(t[3])<<8|255)>>>0:(t=Vt.exec(e))?(Jt(t[1])<<24|Jt(t[2])<<16|Jt(t[3])<<8|tr(t[4]))>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Gt.exec(e))?parseInt(t[1],16)>>>0:(t=qt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Yt.exec(e))?(255|Qt(er(t[1]),rr(t[2]),rr(t[3])))>>>0:(t=Ut.exec(e))?(Qt(er(t[1]),rr(t[2]),rr(t[3]))|tr(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ir=(e,t,r)=>{if(bt.fun(e))return e;if(bt.arr(e))return ir({range:e,output:t,extrapolate:r});if(bt.str(e.output[0]))return Ct(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var or=1.70158,ar=1.525*or,sr=or+1,lr=2*Math.PI/3,cr=2*Math.PI/4.5,dr=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ur={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>sr*e*e*e-or*e*e,easeOutBack:e=>1+sr*Math.pow(e-1,3)+or*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ar)/2:(Math.pow(2*e-2,2)*((ar+1)*(2*e-2)+ar)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*lr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*lr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*cr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*cr)/2+1,easeInBounce:e=>1-dr(1-e),easeOutBounce:dr,easeInOutBounce:e=>e<.5?(1-dr(1-2*e))/2:(1+dr(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},fr=Symbol.for("FluidValue.get"),hr=Symbol.for("FluidValue.observers"),pr=e=>Boolean(e&&e[fr]),gr=e=>e&&e[fr]?e[fr]():e,mr=e=>e[hr]||null;function br(e,t){const r=e[hr];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var vr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");yr(this,e)}},yr=(e,t)=>Cr(e,fr,t);function xr(e,t){if(e[fr]){let r=e[hr];r||Cr(e,hr,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function wr(e,t){const r=e[hr];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[hr]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var $r,Cr=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Sr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,jr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,kr=new RegExp(`(${Sr.source})(%|[a-z]+)`,"i"),Dr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Tr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Er=e=>{const[t,r]=Or(e);if(!t||kt())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Tr.test(r)?Er(r):r||e},Or=e=>{const t=Tr.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Fr=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ir=e=>{$r||($r=Dt?new RegExp(`(${Object.keys(Dt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>gr(e).replace(Tr,Er).replace(jr,nr).replace($r,nr))),r=t.map((e=>e.match(Sr).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>ir({...e,output:t})));return e=>{const r=!kr.test(t[0])&&t.find((e=>kr.test(e)))?.replace(Sr,"");let n=0;return t[0].replace(Sr,(()=>`${i[n++](e)}${r||""}`)).replace(Dr,Fr)}},_r="react-spring: ",Mr=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${_r}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ar=Mr(console.warn);var Br=Mr(console.warn);function Rr(e){return bt.str(e)&&("#"==e[0]||/\d/.test(e)||!kt()&&Tr.test(e)||e in(Dt||{}))}var zr=kt()?t.useEffect:t.useLayoutEffect;function Pr(){const e=t.useState()[1],r=(()=>{const e=t.useRef(!1);return zr((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Lr=e=>t.useEffect(e,Nr),Nr=[];function Hr(e){const r=t.useRef();return t.useEffect((()=>{r.current=e})),r.current}var Wr=Symbol.for("Animated:node"),Vr=e=>e&&e[Wr],Yr=(e,t)=>{return r=e,n=Wr,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ur=e=>e&&e[Wr]&&e[Wr].getPayload(),Kr=class{constructor(){Yr(this,this)}getPayload(){return this.payload||[]}},qr=class extends Kr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,bt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new qr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return bt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,bt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Xr=class extends qr{constructor(e){super(0),this._string=null,this._toString=ir({output:[e,e]})}static create(e){return new Xr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(bt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ir({output:[this.getValue(),e]})),this._value=0,super.reset()}},Gr={dependencies:null},Zr=class extends Kr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return xt(this.source,((r,n)=>{var i;(i=r)&&i[Wr]===i?t[n]=r.getValue(e):pr(r)?t[n]=gr(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&yt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return xt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Gr.dependencies&&pr(e)&&Gr.dependencies.add(e);const t=Ur(e);t&&yt(t,(e=>this.add(e)))}},Qr=class extends Zr{constructor(e){super(e)}static create(e){return new Qr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Jr)),!0)}};function Jr(e){return(Rr(e)?Xr:qr).create(e)}function en(e){const t=Vr(e);return t?t.constructor:bt.arr(e)?Qr:Rr(e)?Xr:qr}var tn=(e,r)=>{const n=!bt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,o)=>{const a=t.useRef(null),s=n&&t.useCallback((e=>{a.current=function(e,t){e&&(bt.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,c]=function(e,t){const r=new Set;Gr.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Zr(e),Gr.dependencies=null,[e,r]}(i,r),d=Pr(),u=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,l.getValue(!0)))&&d()},f=new rn(u,c),h=t.useRef();zr((()=>(h.current=f,yt(c,(e=>xr(e,f))),()=>{h.current&&(yt(h.current.deps,(e=>wr(e,h.current))),Je.cancel(h.current.update))}))),t.useEffect(u,[]),Lr((()=>()=>{const e=h.current;yt(e.deps,(t=>wr(t,e)))}));const p=r.getComponentProps(l.getValue());return U.createElement(e,{...p,ref:s})}))},rn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Je.write(this.update)}};var nn=Symbol.for("AnimatedComponent"),on=e=>bt.str(e)?e:e&&bt.str(e.displayName)?e.displayName:bt.fun(e)&&e.name||null;function an(e,...t){return bt.fun(e)?e(...t):e}var sn=(e,t)=>!0===e||!!(t&&e&&(bt.fun(e)?e(t):wt(e).includes(t))),ln=(e,t)=>bt.obj(e)?t&&e[t]:e,cn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,dn=e=>e,un=(e,t=dn)=>{let r=fn;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);bt.und(r)||(n[i]=r)}return n},fn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],hn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function pn(e){const t=function(e){const t={};let r=0;if(xt(e,((e,n)=>{hn[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return xt(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function gn(e){return e=gr(e),bt.arr(e)?e.map(gn):Rr(e)?Ze.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mn(e){return bt.fun(e)||bt.arr(e)&&bt.obj(e[0])}var bn={tension:170,friction:26,mass:1,damping:1,easing:ur.linear,clamp:!1},vn=class{constructor(){this.velocity=0,Object.assign(this,bn)}};function yn(e,t){if(bt.und(t.decay)){const r=!bt.und(t.tension)||!bt.und(t.friction);!r&&bt.und(t.frequency)&&bt.und(t.damping)&&bt.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var xn=[],wn=class{constructor(){this.changed=!1,this.values=xn,this.toValues=null,this.fromValues=xn,this.config=new vn,this.immediate=!1}};function $n(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=sn(r.cancel??n?.cancel,t);if(d)h();else{bt.und(r.pause)||(i.paused=sn(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||sn(e,t)),l=an(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-Je.now()}function f(){l>0&&!Ze.skipAnimation?(i.delayed=!0,c=Je.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Cn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?kn(e.get()):t.every((e=>e.noop))?Sn(e.get()):jn(e.get(),t.every((e=>e.finished))),Sn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),jn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),kn=e=>({value:e,cancelled:!0,finished:!1});function Dn(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=un(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(r.cancelId||0)&&kn(n)||i!==r.asyncId&&jn(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new En,a=new On;return(async()=>{if(Ze.skipAnimation)throw Tn(r),a.result=jn(n,!1),u(a),a;h(o);const s=bt.obj(e)?{...e}:{...t,to:e};s.parentId=i,xt(c,((e,t)=>{bt.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Ze.skipAnimation)return Tn(r),jn(n,!1);try{let t;t=bt.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),f]),g=jn(n.get(),!0,!1)}catch(e){if(e instanceof En)g=e.result;else{if(!(e instanceof On))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return bt.fun(a)&&Je.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Tn(e,t){$t(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var En=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},On=class extends Error{constructor(){super("SkipAnimationSignal")}},Fn=e=>e instanceof _n,In=1,_n=class extends vr{constructor(){super(...arguments),this.id=In++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Vr(this);return e&&e.getValue()}to(...e){return Ze.to(this,e)}interpolate(...e){return Ar(`${_r}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ze.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){br(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||At.sort(this),br(this,{type:"priority",parent:this,priority:e})}},Mn=Symbol.for("SpringPhase"),An=e=>(1&e[Mn])>0,Bn=e=>(2&e[Mn])>0,Rn=e=>(4&e[Mn])>0,zn=(e,t)=>t?e[Mn]|=3:e[Mn]&=-3,Pn=(e,t)=>t?e[Mn]|=4:e[Mn]&=-5,Ln=class extends _n{constructor(e,t){if(super(),this.animation=new wn,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!bt.und(e)||!bt.und(t)){const r=bt.obj(e)?{...e}:{...t,from:e};bt.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Bn(this)||this._state.asyncTo)||Rn(this)}get goal(){return gr(this.animation.to)}get velocity(){const e=Vr(this);return e instanceof qr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return An(this)}get isAnimating(){return Bn(this)}get isPaused(){return Rn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=Ur(n.to);!a&&pr(n.to)&&(i=wt(gr(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Xr?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=bt.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(bt.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,n=o.clamp?0:o.bounce,l=!bt.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=Vr(this),l=s.getValue();if(t){const e=gr(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Je.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Bn(this)){const{to:e,config:t}=this.animation;Je.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return bt.und(e)?(r=this.queue||[],this.queue=[]):r=[bt.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Cn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Tn(this._state,e&&this._lastCallId),Je.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=bt.obj(r)?r[t]:r,(null==r||mn(r))&&(r=void 0),n=bt.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return An(this)||(e.reverse&&([r,n]=[n,r]),n=gr(n),bt.und(n)?Vr(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,un(e,((e,t)=>/^on/.test(t)?ln(e,r):e))),Kn(this,e,"onProps"),qn(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return $n(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Rn(this)||(Pn(this,!0),jt(o.pauseQueue),qn(this,"onPause",jn(this,Nn(this,this.animation.to)),this))},resume:()=>{Rn(this)&&(Pn(this,!1),Bn(this)&&this._resume(),jt(o.resumeQueue),qn(this,"onResume",jn(this,Nn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Hn(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(kn(this));const n=!bt.und(e.to),i=!bt.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(kn(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!bt.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!vt(u,c);f&&(s.from=u),u=gr(u);const h=!vt(d,l);h&&this._focus(d);const p=mn(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(yn(r={...r},t),t={...r,...t}),yn(e,t),Object.assign(e,t);for(const t in bn)null==e[t]&&(e[t]=bn[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;bt.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,an(t.config,o),t.config!==a.config?an(a.config,o):void 0);let v=Vr(this);if(!v||bt.und(d))return r(jn(this,!0));const y=bt.und(t.reset)?i&&!t.default:!bt.und(u)&&sn(t.reset,o),x=y?u:this.get(),w=gn(d),$=bt.num(w)||bt.arr(w)||Rr(w),C=!p&&(!$||sn(a.immediate||t.immediate,o));if(h){const e=en(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let j=pr(d),k=!1;if(!j){const e=y||!An(this)&&f;(h||e)&&(k=vt(gn(x),w),j=!k),(vt(s.immediate,C)||C)&&vt(g.decay,m)&&vt(g.velocity,b)||(j=!0)}if(k&&Bn(this)&&(s.changed&&!y?j=!0:j||this._stop(l)),!p&&((j||pr(l))&&(s.values=v.getPayload(),s.toValues=pr(d)?null:S==Xr?[1]:wt(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),j)){const{onRest:e}=s;yt(Un,(e=>Kn(this,t,e)));const n=jn(this,Nn(this,l));jt(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Je.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?an(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Dn(t.to,t,this._state,this)):j?this._start():Bn(this)&&!h?this._pendingCalls.add(r):r(Sn(x))}_focus(e){const t=this.animation;e!==t.to&&(mr(this)&&this._detach(),t.to=e,mr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;pr(t)&&(xr(t,this),Fn(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;pr(e)&&wr(e,this)}_set(e,t=!0){const r=gr(e);if(!bt.und(r)){const e=Vr(this);if(!e||!vt(r,e.getValue())){const n=en(r);e&&e.constructor==n?e.setValue(r):Yr(this,n.create(r)),e&&Je.batchedUpdates((()=>{this._onChange(r,t)}))}}return Vr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qn(this,"onStart",jn(this,Nn(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),an(this.animation.onChange,e,this)),an(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Vr(this).reset(gr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Bn(this)||(zn(this,!0),Rn(this)||this._resume())}_resume(){Ze.skipAnimation?this.finish():At.start(this)}_stop(e,t){if(Bn(this)){zn(this,!1);const r=this.animation;yt(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),br(this,{type:"idle",parent:this});const n=t?kn(this.get()):jn(this.get(),Nn(this,e??r.to));jt(this._pendingCalls,n),r.changed&&(r.changed=!1,qn(this,"onRest",n,this))}}};function Nn(e,t){const r=gn(t);return vt(gn(e.get()),r)}function Hn(e,t=e.loop,r=e.to){const n=an(t);if(n){const i=!0!==n&&pn(n),o=(i||e).reverse,a=!i||i.reset;return Wn({...e,loop:t,default:!1,pause:void 0,to:!o||mn(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function Wn(e){const{to:t,from:r}=e=pn(e),n=new Set;return bt.obj(t)&&Yn(t,n),bt.obj(r)&&Yn(r,n),e.keys=n.size?Array.from(n):null,e}function Vn(e){const t=Wn(e);return bt.und(t.default)&&(t.default=un(t)),t}function Yn(e,t){xt(e,((e,r)=>null!=e&&t.add(r)))}var Un=["onStart","onRest","onChange","onPause","onResume"];function Kn(e,t,r){e.animation[r]=t[r]!==cn(t,r)?ln(t[r],e.key):void 0}function qn(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Xn=["onStart","onChange","onRest"],Gn=1,Zn=class{constructor(e,t){this.id=Gn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];bt.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Wn(e)),this}start(e){let{queue:t}=this;return e?t=wt(e).map(Wn):this.queue=[],this._flush?this._flush(this,t):(ii(this,t),Qn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;yt(wt(t),(t=>r[t].stop(!!e)))}else Tn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(bt.und(e))this.start({pause:!0});else{const t=this.springs;yt(wt(e),(e=>t[e].pause()))}return this}resume(e){if(bt.und(e))this.start({pause:!1});else{const t=this.springs;yt(wt(e),(e=>t[e].resume()))}return this}each(e){xt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,$t(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&$t(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,$t(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Je.onFrame(this._onFrame)}};function Qn(e,t){return Promise.all(t.map((t=>Jn(e,t)))).then((t=>Cn(e,t)))}async function Jn(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=bt.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=bt.arr(i)||bt.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):yt(Xn,(r=>{const n=t[r];if(bt.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,jt(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===cn(t,"cancel");(d||h&&u.asyncId)&&f.push($n(++e._lastAsyncId,{props:t,state:u,actions:{pause:mt,resume:mt,start(t,r){h?(Tn(u,e._lastAsyncId),r(kn(e))):(t.onRest=s,r(Dn(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Cn(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=Hn(t,a,i);if(r)return ii(e,[r]),Jn(e,r,!0)}return l&&Je.batchedUpdates((()=>l(p,e,e.item))),p}function ei(e,t){const r={...e.springs};return t&&yt(wt(t),(e=>{bt.und(e.keys)&&(e=Wn(e)),bt.obj(e.to)||(e={...e,to:void 0}),ni(r,e,(e=>ri(e)))})),ti(e,r),r}function ti(e,t){xt(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,xr(t,e))}))}function ri(e,t){const r=new Ln;return r.key=e,t&&xr(r,t),r}function ni(e,t,r){t.keys&&yt(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ii(e,t){yt(t,(t=>{ni(e.springs,t,(t=>ri(t,e)))}))}var oi,ai,si=({children:e,...r})=>{const n=t.useContext(li),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,r){const[n]=t.useState((()=>({inputs:r,result:e()}))),i=t.useRef(),o=i.current;let a=o;if(a){const t=Boolean(r&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,a.inputs));t||(a={inputs:r,result:e()})}else a=n;return t.useEffect((()=>{i.current=a,o==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=li;return U.createElement(a,{value:r},e)},li=(oi=si,ai={},Object.assign(oi,U.createContext(ai)),oi.Provider._context=oi,oi.Consumer._context=oi,oi);si.Provider=li.Provider,si.Consumer=li.Consumer;var ci=()=>{const e=[],t=function(t){Br(`${_r}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return yt(e,((e,i)=>{if(bt.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return yt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return yt(e,(e=>e.resume(...arguments))),this},t.set=function(t){yt(e,((e,r)=>{const n=bt.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return yt(e,((e,n)=>{if(bt.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return yt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return yt(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return bt.fun(e)?e(r,t):e};return t._getProps=r,t};function di(e,r){const n=bt.fun(e),[[i],o]=function(e,r,n){const i=bt.fun(r)&&r;i&&!n&&(n=[]);const o=t.useMemo((()=>i||3==arguments.length?ci():void 0),[]),a=t.useRef(0),s=Pr(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=ei(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Qn(e,t):new Promise((n=>{ti(e,r),l.queue.push((()=>{n(Qn(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Hr(e)||0;function f(e,t){for(let n=e;n<t;n++){const e=c.current[n]||(c.current[n]=new Zn(null,l.flush)),t=i?i(n,e):r[n];t&&(d[n]=Vn(t))}}t.useMemo((()=>{yt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),n);const h=c.current.map(((e,t)=>ei(e,d[t]))),p=t.useContext(si),g=Hr(p),m=p!==g&&function(e){for(const t in e)return!0;return!1}(p);zr((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],yt(e,(e=>e()))),yt(c.current,((e,t)=>{o?.add(e),m&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Lr((()=>()=>{yt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?r||[]:r);return n||2==arguments.length?[i,o]:i}var ui=class extends _n{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ir(...t);const r=this._get(),n=en(r);Yr(this,n.create(r))}advance(e){const t=this._get();vt(t,this.get())||(Vr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&hi(this._active)&&pi(this)}_get(){const e=bt.arr(this.source)?this.source.map(gr):wt(gr(this.source));return this.calc(...e)}_start(){this.idle&&!hi(this._active)&&(this.idle=!1,yt(Ur(this),(e=>{e.done=!1})),Ze.skipAnimation?(Je.batchedUpdates((()=>this.advance())),pi(this)):At.start(this))}_attach(){let e=1;yt(wt(this.source),(t=>{pr(t)&&xr(t,this),Fn(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){yt(wt(this.source),(e=>{pr(e)&&wr(e,this)})),this._active.clear(),pi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=wt(this.source).reduce(((e,t)=>Math.max(e,(Fn(t)?t.priority:0)+1)),0))}};function fi(e){return!1!==e.idle}function hi(e){return!e.size||Array.from(e).every(fi)}function pi(e){e.idle||(e.idle=!0,yt(Ur(e),(e=>{e.done=!0})),br(e,{type:"idle",parent:e}))}Ze.assign({createStringInterpolator:Ir,to:(e,t)=>new ui(e,t)});var gi=/^--/;function mi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||gi.test(e)||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}var bi={};var vi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","Ms","Moz","O"];vi=Object.keys(vi).reduce(((e,t)=>(yi.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),vi);var xi=/^(matrix|translate|scale|rotate|skew)/,wi=/^(translate)/,$i=/^(rotate|skew)/,Ci=(e,t)=>bt.num(e)&&0!==e?e+t:e,Si=(e,t)=>bt.arr(e)?e.every((e=>Si(e,t))):bt.num(e)?e===t:parseFloat(e)===t,ji=class extends Zr{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Ci(e,"px"))).join(",")})`,Si(e,0)]))),xt(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(xi.test(t)){if(delete n[t],bt.und(e))return;const r=wi.test(t)?"px":$i.test(t)?"deg":"";i.push(wt(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Ci(i,r)})`,Si(i,0)]:e=>[`${t}(${e.map((e=>Ci(e,r))).join(",")})`,Si(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new ki(i,o)),super(n)}},ki=class extends vr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return yt(this.inputs,((r,n)=>{const i=gr(r[0]),[o,a]=this.transforms[n](bt.arr(i)?i:r.map(gr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&yt(this.inputs,(e=>yt(e,(e=>pr(e)&&xr(e,this)))))}observerRemoved(e){0==e&&yt(this.inputs,(e=>yt(e,(e=>pr(e)&&wr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),br(this,e)}};Ze.assign({batchedUpdates:r.unstable_batchedUpdates,createStringInterpolator:Ir,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Di=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Zr(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=on(e)||"Anonymous";return(e=bt.str(e)?o[e]||(o[e]=tn(e,i)):e[nn]||(e[nn]=tn(e,i))).displayName=`Animated(${t})`,e};return xt(e,((t,r)=>{bt.arr(e)&&(r=on(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:bi[t]||(bi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=mi(t,n[t]);gi.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ji(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ti=Di.animated,Ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fi=Array.isArray,Ii="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,_i=Ii,Mi="object"==typeof self&&self&&self.Object===Object&&self,Ai=_i||Mi||Function("return this")(),Bi=Ai.Symbol,Ri=Bi,zi=Object.prototype,Pi=zi.hasOwnProperty,Li=zi.toString,Ni=Ri?Ri.toStringTag:void 0;var Hi=function(e){var t=Pi.call(e,Ni),r=e[Ni];try{e[Ni]=void 0;var n=!0}catch(e){}var i=Li.call(e);return n&&(t?e[Ni]=r:delete e[Ni]),i},Wi=Object.prototype.toString;var Vi=Hi,Yi=function(e){return Wi.call(e)},Ui=Bi?Bi.toStringTag:void 0;var Ki=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Vi(e):Yi(e)};var qi=function(e){return null!=e&&"object"==typeof e},Xi=Ki,Gi=qi;var Zi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Xi(e)},Qi=Fi,Ji=Zi,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,to=/^\w*$/;var ro=function(e,t){if(Qi(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ji(e))||(to.test(e)||!eo.test(e)||null!=t&&e in Object(t))};var no=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},io=Ki,oo=no;var ao,so=function(e){if(!oo(e))return!1;var t=io(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lo=Ai["__core-js_shared__"],co=(ao=/[^.]+$/.exec(lo&&lo.keys&&lo.keys.IE_PROTO||""))?"Symbol(src)_1."+ao:"";var uo=function(e){return!!co&&co in e},fo=Function.prototype.toString;var ho=function(e){if(null!=e){try{return fo.call(e)}catch(e){}try{return e+""}catch(e){}}return""},po=so,go=uo,mo=no,bo=ho,vo=/^\[object .+?Constructor\]$/,yo=Function.prototype,xo=Object.prototype,wo=yo.toString,$o=xo.hasOwnProperty,Co=RegExp("^"+wo.call($o).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var So=function(e,t){return null==e?void 0:e[t]},jo=function(e){return!(!mo(e)||go(e))&&(po(e)?Co:vo).test(bo(e))},ko=So;var Do=function(e,t){var r=ko(e,t);return jo(r)?r:void 0},To=Do(Object,"create"),Eo=To;var Oo=function(){this.__data__=Eo?Eo(null):{},this.size=0};var Fo=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Io=To,_o=Object.prototype.hasOwnProperty;var Mo=function(e){var t=this.__data__;if(Io){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return _o.call(t,e)?t[e]:void 0},Ao=To,Bo=Object.prototype.hasOwnProperty;var Ro=function(e){var t=this.__data__;return Ao?void 0!==t[e]:Bo.call(t,e)},zo=To;var Po=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=zo&&void 0===t?"__lodash_hash_undefined__":t,this},Lo=Oo,No=Fo,Ho=Mo,Wo=Ro,Vo=Po;function Yo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yo.prototype.clear=Lo,Yo.prototype.delete=No,Yo.prototype.get=Ho,Yo.prototype.has=Wo,Yo.prototype.set=Vo;var Uo=Yo;var Ko=function(){this.__data__=[],this.size=0};var qo=function(e,t){return e===t||e!=e&&t!=t},Xo=qo;var Go=function(e,t){for(var r=e.length;r--;)if(Xo(e[r][0],t))return r;return-1},Zo=Go,Qo=Array.prototype.splice;var Jo=function(e){var t=this.__data__,r=Zo(t,e);return!(r<0)&&(r==t.length-1?t.pop():Qo.call(t,r,1),--this.size,!0)},ea=Go;var ta=function(e){var t=this.__data__,r=ea(t,e);return r<0?void 0:t[r][1]},ra=Go;var na=function(e){return ra(this.__data__,e)>-1},ia=Go;var oa=function(e,t){var r=this.__data__,n=ia(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},aa=Ko,sa=Jo,la=ta,ca=na,da=oa;function ua(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ua.prototype.clear=aa,ua.prototype.delete=sa,ua.prototype.get=la,ua.prototype.has=ca,ua.prototype.set=da;var fa=ua,ha=Do(Ai,"Map"),pa=Uo,ga=fa,ma=ha;var ba=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var va=function(e,t){var r=e.__data__;return ba(t)?r["string"==typeof t?"string":"hash"]:r.map},ya=va;var xa=function(e){var t=ya(this,e).delete(e);return this.size-=t?1:0,t},wa=va;var $a=function(e){return wa(this,e).get(e)},Ca=va;var Sa=function(e){return Ca(this,e).has(e)},ja=va;var ka=function(e,t){var r=ja(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Da=function(){this.size=0,this.__data__={hash:new pa,map:new(ma||ga),string:new pa}},Ta=xa,Ea=$a,Oa=Sa,Fa=ka;function Ia(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ia.prototype.clear=Da,Ia.prototype.delete=Ta,Ia.prototype.get=Ea,Ia.prototype.has=Oa,Ia.prototype.set=Fa;var _a=Ia,Ma=_a;function Aa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||Ma),r}Aa.Cache=Ma;var Ba=Aa;var Ra=function(e){var t=Ba(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pa=/\\(\\)?/g,La=Ra((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(za,(function(e,r,n,i){t.push(n?i.replace(Pa,"$1"):r||e)})),t}));var Na=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ha=Fi,Wa=Zi,Va=Bi?Bi.prototype:void 0,Ya=Va?Va.toString:void 0;var Ua=function e(t){if("string"==typeof t)return t;if(Ha(t))return Na(t,e)+"";if(Wa(t))return Ya?Ya.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Ka=Ua;var qa=function(e){return null==e?"":Ka(e)},Xa=Fi,Ga=ro,Za=La,Qa=qa;var Ja=function(e,t){return Xa(e)?e:Ga(e,t)?[e]:Za(Qa(e))},es=Zi;var ts=function(e){if("string"==typeof e||es(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},rs=Ja,ns=ts;var is=function(e,t){for(var r=0,n=(t=rs(t,e)).length;null!=e&&r<n;)e=e[ns(t[r++])];return r&&r==n?e:void 0},os=is;var as=function(e,t,r){var n=null==e?void 0:os(e,t);return void 0===n?r:n},ss=Oi(as);const ls=(e,t,r)=>ss(r,t)||ss(e,t),cs=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)},ds={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},us=e=>t=>{var r;const n=t.theme,i=cs(ds,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${ls(i,e,n.overrides.border)}px`:`${i[e]}px`},fs={"width-005":us("width-005"),"width-010":us("width-010"),"width-020":us("width-020"),"width-040":us("width-040"),solid:(hs="solid",e=>{var t;const r=e.theme,n=cs(ds,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?ls(n,hs,r.overrides.border):n[hs];return"function"==typeof i?i(e):i})};var hs;const ps={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},gs=e=>t=>{var r;const n=t.theme,i=cs(ps,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?ls(i,e,n.overrides.primitiveColour):i[e]},ms={"brand-10":gs("brand-10"),"brand-20":gs("brand-20"),"brand-30":gs("brand-30"),"brand-40":gs("brand-40"),"brand-50":gs("brand-50"),"brand-60":gs("brand-60"),"brand-70":gs("brand-70"),"brand-80":gs("brand-80"),"brand-90":gs("brand-90"),"brand-95":gs("brand-95"),"brand-100":gs("brand-100"),"primary-10":gs("primary-10"),"primary-20":gs("primary-20"),"primary-30":gs("primary-30"),"primary-40":gs("primary-40"),"primary-50":gs("primary-50"),"primary-60":gs("primary-60"),"primary-70":gs("primary-70"),"primary-80":gs("primary-80"),"primary-90":gs("primary-90"),"primary-95":gs("primary-95"),"primary-100":gs("primary-100"),"secondary-10":gs("secondary-10"),"secondary-20":gs("secondary-20"),"secondary-30":gs("secondary-30"),"secondary-40":gs("secondary-40"),"secondary-50":gs("secondary-50"),"secondary-60":gs("secondary-60"),"secondary-70":gs("secondary-70"),"secondary-80":gs("secondary-80"),"secondary-90":gs("secondary-90"),"secondary-95":gs("secondary-95"),"secondary-100":gs("secondary-100"),"neutral-10":gs("neutral-10"),"neutral-20":gs("neutral-20"),"neutral-30":gs("neutral-30"),"neutral-40":gs("neutral-40"),"neutral-50":gs("neutral-50"),"neutral-60":gs("neutral-60"),"neutral-70":gs("neutral-70"),"neutral-80":gs("neutral-80"),"neutral-90":gs("neutral-90"),"neutral-95":gs("neutral-95"),"neutral-100":gs("neutral-100"),"success-10":gs("success-10"),"success-20":gs("success-20"),"success-30":gs("success-30"),"success-40":gs("success-40"),"success-50":gs("success-50"),"success-60":gs("success-60"),"success-70":gs("success-70"),"success-80":gs("success-80"),"success-90":gs("success-90"),"success-95":gs("success-95"),"success-100":gs("success-100"),"warning-10":gs("warning-10"),"warning-20":gs("warning-20"),"warning-30":gs("warning-30"),"warning-40":gs("warning-40"),"warning-50":gs("warning-50"),"warning-60":gs("warning-60"),"warning-70":gs("warning-70"),"warning-80":gs("warning-80"),"warning-90":gs("warning-90"),"warning-95":gs("warning-95"),"warning-100":gs("warning-100"),"error-10":gs("error-10"),"error-20":gs("error-20"),"error-30":gs("error-30"),"error-40":gs("error-40"),"error-50":gs("error-50"),"error-60":gs("error-60"),"error-70":gs("error-70"),"error-80":gs("error-80"),"error-90":gs("error-90"),"error-95":gs("error-95"),"error-100":gs("error-100"),"info-10":gs("info-10"),"info-20":gs("info-20"),"info-30":gs("info-30"),"info-40":gs("info-40"),"info-50":gs("info-50"),"info-60":gs("info-60"),"info-70":gs("info-70"),"info-80":gs("info-80"),"info-90":gs("info-90"),"info-95":gs("info-95"),"info-100":gs("info-100"),white:gs("white"),black:gs("black"),"primary-inverse":gs("primary-inverse")},bs={text:gs("neutral-20"),"text-subtle":gs("neutral-30"),"text-subtler":gs("neutral-50"),"text-subtlest":gs("neutral-60"),"text-primary":gs("primary-50"),"text-hover":gs("primary-40"),"text-selected":gs("primary-50"),"text-selected-hover":gs("primary-40"),"text-disabled":gs("neutral-50"),"text-disabled-subtle":gs("neutral-60"),"text-disabled-subtlest":gs("neutral-80"),"text-selected-disabled":gs("neutral-20"),"text-success":gs("success-40"),"text-warning":gs("warning-40"),"text-error":gs("error-40"),"text-info":gs("info-40"),"text-inverse":gs("white"),icon:gs("neutral-50"),"icon-subtle":gs("neutral-60"),"icon-strongest":gs("neutral-20"),"icon-primary":gs("primary-50"),"icon-primary-subtle":gs("primary-60"),"icon-primary-subtlest":gs("primary-70"),"icon-hover":gs("primary-40"),"icon-selected":gs("primary-50"),"icon-selected-hover":gs("primary-40"),"icon-disabled":gs("neutral-50"),"icon-disabled-subtle":gs("neutral-60"),"icon-selected-disabled":gs("neutral-60"),"icon-success":gs("success-50"),"icon-warning":gs("warning-60"),"icon-error":gs("error-50"),"icon-error-strong":gs("error-40"),"icon-info":gs("info-50"),"icon-inverse":gs("white"),"icon-primary-inverse":gs("primary-inverse"),border:gs("neutral-90"),"border-strong":gs("neutral-70"),"border-stronger":gs("neutral-50"),"border-primary":gs("primary-50"),"border-primary-subtle":gs("primary-60"),"border-hover":gs("primary-90"),"border-hover-strong":gs("primary-60"),"border-selected":gs("primary-50"),"border-selected-subtle":gs("primary-70"),"border-selected-subtlest":gs("primary-90"),"border-selected-hover":gs("primary-40"),"border-focus":gs("primary-60"),"border-focus-strong":gs("primary-50"),"border-disabled":gs("neutral-90"),"border-selected-disabled":gs("neutral-70"),"border-success":gs("success-60"),"border-warning":gs("warning-60"),"border-error":gs("error-60"),"border-error-focus":gs("error-60"),"border-error-focus-strong":gs("error-40"),"border-error-strong":gs("error-40"),"border-info":gs("info-60"),bg:gs("white"),"bg-strong":gs("neutral-100"),"bg-stronger":gs("neutral-95"),"bg-strongest":gs("neutral-90"),"bg-hover":gs("primary-95"),"bg-hover-strong":gs("primary-90"),"bg-hover-subtle":gs("primary-100"),"bg-hover-neutral":gs("neutral-100"),"bg-hover-neutral-strong":gs("neutral-90"),"bg-selected":gs("primary-95"),"bg-selected-hover":gs("primary-90"),"bg-selected-strong":gs("primary-90"),"bg-selected-stronger":gs("primary-70"),"bg-selected-strongest":gs("primary-50"),"bg-selected-strongest-hover":gs("primary-40"),"bg-disabled":gs("neutral-95"),"bg-selected-disabled":gs("neutral-95"),"bg-selected-stronger-disabled":gs("neutral-70"),"bg-success":gs("success-100"),"bg-success-hover":gs("success-95"),"bg-success-strong":gs("success-50"),"bg-success-strong-hover":gs("success-40"),"bg-warning":gs("warning-100"),"bg-warning-hover":gs("warning-95"),"bg-warning-strong":gs("warning-50"),"bg-warning-strong-hover":gs("warning-40"),"bg-info":gs("info-100"),"bg-info-hover":gs("info-95"),"bg-info-strong":gs("info-50"),"bg-info-strong-hover":gs("info-40"),"bg-error":gs("error-100"),"bg-error-hover":gs("error-95"),"bg-error-strong":gs("error-50"),"bg-error-strong-hover":gs("error-40"),"bg-inverse":gs("neutral-20"),"bg-inverse-subtle":gs("neutral-30"),"bg-inverse-subtler":gs("neutral-50"),"bg-inverse-subtlest":gs("neutral-60"),"bg-inverse-hover":gs("neutral-40"),"bg-primary":gs("primary-50"),"bg-primary-subtle":gs("primary-60"),"bg-primary-subtler":gs("primary-95"),"bg-primary-subtlest":gs("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":gs("primary-40"),"bg-primary-subtlest-hover":gs("primary-90"),"bg-primary-subtlest-selected":gs("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:gs("primary-50"),"hyperlink-hover":gs("primary-40"),"hyperlink-visited":gs("primary-40"),"hyperlink-inverse":gs("primary-inverse"),"focus-ring":gs("black"),"focus-ring-inverse":gs("white")},vs={collections:{lifesg:bs,bookingsg:bs,rbs:bs,mylegacy:bs,ccube:bs,oneservice:bs,pa:{text:gs("neutral-30"),"text-subtle":gs("neutral-40"),"text-subtler":gs("neutral-50"),"text-subtlest":gs("neutral-70"),"text-primary":gs("neutral-10"),"text-hover":gs("neutral-70"),"text-selected":gs("neutral-20"),"text-selected-hover":gs("neutral-10"),"text-disabled":gs("neutral-50"),"text-disabled-subtle":gs("neutral-60"),"text-disabled-subtlest":gs("neutral-80"),"text-selected-disabled":gs("neutral-40"),"text-success":gs("success-40"),"text-warning":gs("warning-40"),"text-error":gs("brand-30"),"text-info":gs("neutral-40"),"text-inverse":gs("neutral-100"),icon:gs("neutral-40"),"icon-subtle":gs("neutral-50"),"icon-strongest":gs("neutral-10"),"icon-primary":gs("neutral-10"),"icon-primary-subtle":gs("neutral-30"),"icon-primary-subtlest":gs("neutral-60"),"icon-hover":gs("neutral-70"),"icon-selected":gs("brand-20"),"icon-selected-hover":gs("brand-10"),"icon-disabled":gs("neutral-50"),"icon-disabled-subtle":gs("neutral-60"),"icon-selected-disabled":gs("neutral-40"),"icon-success":gs("success-40"),"icon-warning":gs("warning-60"),"icon-error":gs("brand-30"),"icon-error-strong":gs("brand-10"),"icon-info":gs("neutral-40"),"icon-inverse":gs("neutral-100"),"icon-primary-inverse":"#F9B371",border:gs("neutral-90"),"border-strong":gs("neutral-30"),"border-stronger":gs("neutral-20"),"border-primary":gs("neutral-40"),"border-primary-subtle":gs("neutral-60"),"border-hover":gs("neutral-80"),"border-hover-strong":gs("neutral-10"),"border-selected":gs("brand-20"),"border-selected-subtle":gs("neutral-40"),"border-selected-subtlest":gs("neutral-70"),"border-selected-hover":gs("neutral-10"),"border-focus":gs("neutral-20"),"border-focus-strong":gs("neutral-10"),"border-disabled":gs("neutral-90"),"border-selected-disabled":gs("neutral-80"),"border-success":gs("success-40"),"border-warning":gs("warning-60"),"border-error":gs("brand-30"),"border-error-focus":gs("brand-20"),"border-error-focus-strong":gs("brand-10"),"border-error-strong":gs("brand-20"),"border-info":gs("neutral-40"),bg:gs("neutral-100"),"bg-strong":gs("neutral-95"),"bg-stronger":gs("neutral-90"),"bg-strongest":gs("neutral-80"),"bg-hover":gs("brand-90"),"bg-hover-strong":gs("brand-80"),"bg-hover-subtle":gs("neutral-90"),"bg-hover-neutral":gs("neutral-90"),"bg-hover-neutral-strong":gs("neutral-90"),"bg-selected":gs("brand-100"),"bg-selected-hover":gs("brand-30"),"bg-selected-strong":gs("brand-50"),"bg-selected-stronger":gs("brand-40"),"bg-selected-strongest":gs("brand-20"),"bg-selected-strongest-hover":gs("brand-10"),"bg-disabled":gs("neutral-90"),"bg-selected-disabled":gs("neutral-90"),"bg-selected-stronger-disabled":gs("neutral-80"),"bg-success":gs("success-100"),"bg-success-hover":gs("success-95"),"bg-success-strong":gs("success-50"),"bg-success-strong-hover":gs("success-40"),"bg-warning":gs("warning-100"),"bg-warning-hover":gs("warning-95"),"bg-warning-strong":gs("warning-50"),"bg-warning-strong-hover":gs("warning-40"),"bg-info":gs("neutral-95"),"bg-info-hover":gs("info-95"),"bg-info-strong":gs("info-50"),"bg-info-strong-hover":gs("info-40"),"bg-error":gs("brand-100"),"bg-error-hover":gs("error-95"),"bg-error-strong":gs("error-50"),"bg-error-strong-hover":gs("error-40"),"bg-inverse":gs("neutral-40"),"bg-inverse-subtle":gs("neutral-60"),"bg-inverse-subtler":gs("neutral-70"),"bg-inverse-subtlest":gs("neutral-80"),"bg-inverse-hover":gs("neutral-30"),"bg-primary":gs("brand-20"),"bg-primary-subtle":gs("brand-60"),"bg-primary-subtler":gs("brand-80"),"bg-primary-subtlest":gs("brand-100"),"bg-available":gs("success-60"),"bg-primary-hover":gs("brand-10"),"bg-primary-subtlest-hover":gs("brand-80"),"bg-primary-subtlest-selected":gs("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:gs("neutral-10"),"hyperlink-hover":gs("neutral-40"),"hyperlink-visited":gs("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":gs("black"),"focus-ring-inverse":gs("white")}},defaultValue:"lifesg"},ys=e=>t=>{var r;const n=t.theme,i=cs(vs,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?ls(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},xs={text:ys("text"),"text-subtle":ys("text-subtle"),"text-subtler":ys("text-subtler"),"text-subtlest":ys("text-subtlest"),"text-primary":ys("text-primary"),"text-hover":ys("text-hover"),"text-selected":ys("text-selected"),"text-selected-hover":ys("text-selected-hover"),"text-disabled":ys("text-disabled"),"text-disabled-subtle":ys("text-disabled-subtle"),"text-disabled-subtlest":ys("text-disabled-subtlest"),"text-selected-disabled":ys("text-selected-disabled"),"text-success":ys("text-success"),"text-warning":ys("text-warning"),"text-error":ys("text-error"),"text-info":ys("text-info"),"text-inverse":ys("text-inverse"),icon:ys("icon"),"icon-subtle":ys("icon-subtle"),"icon-strongest":ys("icon-strongest"),"icon-primary":ys("icon-primary"),"icon-primary-subtle":ys("icon-primary-subtle"),"icon-primary-subtlest":ys("icon-primary-subtlest"),"icon-hover":ys("icon-hover"),"icon-selected":ys("icon-selected"),"icon-selected-hover":ys("icon-selected-hover"),"icon-disabled":ys("icon-disabled"),"icon-disabled-subtle":ys("icon-disabled-subtle"),"icon-selected-disabled":ys("icon-selected-disabled"),"icon-success":ys("icon-success"),"icon-warning":ys("icon-warning"),"icon-error":ys("icon-error"),"icon-error-strong":ys("icon-error-strong"),"icon-info":ys("icon-info"),"icon-inverse":ys("icon-inverse"),"icon-primary-inverse":ys("icon-primary-inverse"),border:ys("border"),"border-strong":ys("border-strong"),"border-stronger":ys("border-stronger"),"border-primary":ys("border-primary"),"border-primary-subtle":ys("border-primary-subtle"),"border-hover":ys("border-hover"),"border-hover-strong":ys("border-hover-strong"),"border-selected":ys("border-selected"),"border-selected-subtle":ys("border-selected-subtle"),"border-selected-subtlest":ys("border-selected-subtlest"),"border-selected-hover":ys("border-selected-hover"),"border-focus":ys("border-focus"),"border-focus-strong":ys("border-focus-strong"),"border-disabled":ys("border-disabled"),"border-selected-disabled":ys("border-selected-disabled"),"border-success":ys("border-success"),"border-warning":ys("border-warning"),"border-error":ys("border-error"),"border-error-focus":ys("border-error-focus"),"border-error-focus-strong":ys("border-error-focus-strong"),"border-error-strong":ys("border-error-strong"),"border-info":ys("border-info"),bg:ys("bg"),"bg-strong":ys("bg-strong"),"bg-stronger":ys("bg-stronger"),"bg-strongest":ys("bg-strongest"),"bg-hover":ys("bg-hover"),"bg-hover-strong":ys("bg-hover-strong"),"bg-hover-subtle":ys("bg-hover-subtle"),"bg-hover-neutral":ys("bg-hover-neutral"),"bg-hover-neutral-strong":ys("bg-hover-neutral-strong"),"bg-selected":ys("bg-selected"),"bg-selected-hover":ys("bg-selected-hover"),"bg-selected-strong":ys("bg-selected-strong"),"bg-selected-stronger":ys("bg-selected-stronger"),"bg-selected-strongest":ys("bg-selected-strongest"),"bg-selected-strongest-hover":ys("bg-selected-strongest-hover"),"bg-disabled":ys("bg-disabled"),"bg-selected-disabled":ys("bg-selected-disabled"),"bg-selected-stronger-disabled":ys("bg-selected-stronger-disabled"),"bg-success":ys("bg-success"),"bg-success-hover":ys("bg-success-hover"),"bg-success-strong":ys("bg-success-strong"),"bg-success-strong-hover":ys("bg-success-strong-hover"),"bg-warning":ys("bg-warning"),"bg-warning-hover":ys("bg-warning-hover"),"bg-warning-strong":ys("bg-warning-strong"),"bg-warning-strong-hover":ys("bg-warning-strong-hover"),"bg-info":ys("bg-info"),"bg-info-hover":ys("bg-info-hover"),"bg-info-strong":ys("bg-info-strong"),"bg-info-strong-hover":ys("bg-info-strong-hover"),"bg-error":ys("bg-error"),"bg-error-hover":ys("bg-error-hover"),"bg-error-strong":ys("bg-error-strong"),"bg-error-strong-hover":ys("bg-error-strong-hover"),"bg-inverse":ys("bg-inverse"),"bg-inverse-subtle":ys("bg-inverse-subtle"),"bg-inverse-subtler":ys("bg-inverse-subtler"),"bg-inverse-subtlest":ys("bg-inverse-subtlest"),"bg-inverse-hover":ys("bg-inverse-hover"),"bg-primary":ys("bg-primary"),"bg-primary-subtle":ys("bg-primary-subtle"),"bg-primary-subtler":ys("bg-primary-subtler"),"bg-primary-subtlest":ys("bg-primary-subtlest"),"bg-available":ys("bg-available"),"bg-primary-hover":ys("bg-primary-hover"),"bg-primary-subtlest-hover":ys("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ys("bg-primary-subtlest-selected"),"overlay-strong":ys("overlay-strong"),"overlay-subtle":ys("overlay-subtle"),hyperlink:ys("hyperlink"),"hyperlink-hover":ys("hyperlink-hover"),"hyperlink-visited":ys("hyperlink-visited"),"hyperlink-inverse":ys("hyperlink-inverse"),"focus-ring":ys("focus-ring"),"focus-ring-inverse":ys("focus-ring-inverse")},ws={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:fs["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:xs.border(t),f=fs.solid;return i.css`
            border: ${c} ${f} ${u};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:fs["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:xs.border(t),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${c}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return i.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${d};
        `}}},defaultValue:"default"},$s=e=>1===e.length&&"theme"in e[0],Cs=e=>(...t)=>r=>{const n=$s(t)?[]:t,i=$s(t)?t[0]:r,o=i.theme;return(0,cs(ws,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ss={solid:Cs("solid"),"dashed-default":Cs("dashed-default")},js={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},ks=e=>t=>{var r;const n=t.theme,i=cs(js,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?ls(i,e,n.overrides.breakpoint):i[e],o},Ds={"xxs-min":ks("xxs-min"),"xxs-max":ks("xxs-max"),"xs-min":ks("xs-min"),"xs-max":ks("xs-max"),"sm-min":ks("sm-min"),"sm-max":ks("sm-max"),"md-min":ks("md-min"),"md-max":ks("md-max"),"lg-min":ks("lg-min"),"lg-max":ks("lg-max"),"xl-min":ks("xl-min"),"xl-max":ks("xl-max"),"xxl-min":ks("xxl-min"),"xxs-column":ks("xxs-column"),"xs-column":ks("xs-column"),"sm-column":ks("sm-column"),"md-column":ks("md-column"),"lg-column":ks("lg-column"),"xl-column":ks("xl-column"),"xxl-column":ks("xxl-column"),"xxs-gutter":ks("xxs-gutter"),"xs-gutter":ks("xs-gutter"),"sm-gutter":ks("sm-gutter"),"md-gutter":ks("md-gutter"),"lg-gutter":ks("lg-gutter"),"xl-gutter":ks("xl-gutter"),"xxl-gutter":ks("xxl-gutter"),"xxs-margin":ks("xxs-margin"),"xs-margin":ks("xs-margin"),"sm-margin":ks("sm-margin"),"md-margin":ks("md-margin"),"lg-margin":ks("lg-margin"),"xl-margin":ks("xl-margin"),"xxl-margin":ks("xxl-margin")},Ts=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Ds["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Es={MaxWidth:Ts("max-width"),MinWidth:Ts("min-width")},Os={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Fs=e=>t=>{var r;const n=t.theme,i=cs(Os,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?ls(i,e,n.overrides.fontSpec):i[e]},Is={"heading-size-xxl":Fs("heading-size-xxl"),"heading-size-xl":Fs("heading-size-xl"),"heading-size-lg":Fs("heading-size-lg"),"heading-size-md":Fs("heading-size-md"),"heading-size-sm":Fs("heading-size-sm"),"heading-size-xs":Fs("heading-size-xs"),"heading-lh-xxl":Fs("heading-lh-xxl"),"heading-lh-xl":Fs("heading-lh-xl"),"heading-lh-lg":Fs("heading-lh-lg"),"heading-lh-md":Fs("heading-lh-md"),"heading-lh-sm":Fs("heading-lh-sm"),"heading-lh-xs":Fs("heading-lh-xs"),"heading-ls-xxl":Fs("heading-ls-xxl"),"heading-ls-xl":Fs("heading-ls-xl"),"heading-ls-lg":Fs("heading-ls-lg"),"heading-ls-md":Fs("heading-ls-md"),"heading-ls-sm":Fs("heading-ls-sm"),"heading-ls-xs":Fs("heading-ls-xs"),"weight-light":Fs("weight-light"),"weight-regular":Fs("weight-regular"),"weight-semibold":Fs("weight-semibold"),"weight-bold":Fs("weight-bold"),"font-family":Fs("font-family"),"body-size-baseline":Fs("body-size-baseline"),"body-size-md":Fs("body-size-md"),"body-size-sm":Fs("body-size-sm"),"body-size-xs":Fs("body-size-xs"),"body-lh-baseline":Fs("body-lh-baseline"),"body-lh-md":Fs("body-lh-md"),"body-lh-sm":Fs("body-lh-sm"),"body-lh-xs":Fs("body-lh-xs"),"body-ls-baseline":Fs("body-ls-baseline"),"body-ls-md":Fs("body-ls-md"),"body-ls-sm":Fs("body-ls-sm"),"body-ls-xs":Fs("body-ls-xs"),"form-label-size":Fs("form-label-size"),"form-description-size":Fs("form-description-size"),"form-label-lh":Fs("form-label-lh"),"form-description-lh":Fs("form-description-lh"),"form-label-ls":Fs("form-label-ls"),"form-description-ls":Fs("form-description-ls")},_s=(e,t,r,n,o)=>{const{disableLigatures:a}=o||{};return i.css`
        font-family: ${Fs("font-family")};
        font-size: ${Fs(e)};
        font-weight: ${Fs(t)};
        line-height: ${Fs(r)};
        letter-spacing: ${Fs(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Ms=(e={})=>({"heading-xxl-light":_s("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":_s("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":_s("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":_s("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":_s("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":_s("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":_s("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":_s("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":_s("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":_s("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":_s("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":_s("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":_s("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":_s("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":_s("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":_s("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":_s("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":_s("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":_s("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":_s("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":_s("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":_s("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":_s("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":_s("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":_s("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":_s("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":_s("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":_s("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":_s("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":_s("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":_s("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":_s("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":_s("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":_s("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":_s("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":_s("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":_s("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":_s("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":_s("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":_s("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":_s("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":_s("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),As=Ms({disableLigatures:!0}),Bs={collections:{default:Ms(),bookingsg:As,pa:Ms({disableLigatures:!0})},defaultValue:"default"},Rs=e=>t=>{var r;const n=t.theme,i=cs(Bs,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?ls(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},zs={"heading-xxl-light":Rs("heading-xxl-light"),"heading-xxl-regular":Rs("heading-xxl-regular"),"heading-xxl-semibold":Rs("heading-xxl-semibold"),"heading-xxl-bold":Rs("heading-xxl-bold"),"heading-xl-light":Rs("heading-xl-light"),"heading-xl-regular":Rs("heading-xl-regular"),"heading-xl-semibold":Rs("heading-xl-semibold"),"heading-xl-bold":Rs("heading-xl-bold"),"heading-lg-light":Rs("heading-lg-light"),"heading-lg-regular":Rs("heading-lg-regular"),"heading-lg-semibold":Rs("heading-lg-semibold"),"heading-lg-bold":Rs("heading-lg-bold"),"heading-md-light":Rs("heading-md-light"),"heading-md-regular":Rs("heading-md-regular"),"heading-md-semibold":Rs("heading-md-semibold"),"heading-md-bold":Rs("heading-md-bold"),"heading-sm-light":Rs("heading-sm-light"),"heading-sm-regular":Rs("heading-sm-regular"),"heading-sm-semibold":Rs("heading-sm-semibold"),"heading-sm-bold":Rs("heading-sm-bold"),"heading-xs-light":Rs("heading-xs-light"),"heading-xs-regular":Rs("heading-xs-regular"),"heading-xs-semibold":Rs("heading-xs-semibold"),"heading-xs-bold":Rs("heading-xs-bold"),"body-baseline-light":Rs("body-baseline-light"),"body-baseline-regular":Rs("body-baseline-regular"),"body-baseline-semibold":Rs("body-baseline-semibold"),"body-baseline-bold":Rs("body-baseline-bold"),"body-md-light":Rs("body-md-light"),"body-md-regular":Rs("body-md-regular"),"body-md-semibold":Rs("body-md-semibold"),"body-md-bold":Rs("body-md-bold"),"body-sm-light":Rs("body-sm-light"),"body-sm-regular":Rs("body-sm-regular"),"body-sm-semibold":Rs("body-sm-semibold"),"body-sm-bold":Rs("body-sm-bold"),"body-xs-light":Rs("body-xs-light"),"body-xs-regular":Rs("body-xs-regular"),"body-xs-semibold":Rs("body-xs-semibold"),"body-xs-bold":Rs("body-xs-bold"),"form-label":Rs("form-label"),"form-description":Rs("form-description")},Ps={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ls=e=>t=>{var r;const n=t.theme,i=cs(Ps,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?ls(i,e,n.overrides.motion):i[e]},Ns={"duration-150":Ls("duration-150"),"duration-250":Ls("duration-250"),"duration-350":Ls("duration-350"),"duration-500":Ls("duration-500"),"duration-800":Ls("duration-800"),"duration-1000":Ls("duration-1000"),"ease-default":Ls("ease-default"),"ease-standard":Ls("ease-standard"),"ease-entrance":Ls("ease-entrance"),"ease-exit":Ls("ease-exit")},Hs={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Ws=e=>t=>{var r;const n=t.theme,i=cs(Hs,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${ls(i,e,n.overrides.radius)}px`:`${i[e]}px`},Vs={none:Ws("none"),xs:Ws("xs"),sm:Ws("sm"),md:Ws("md"),lg:Ws("lg"),full:Ws("full")},Ys={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Us=e=>t=>{var r;const n=t.theme,i=cs(Ys,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${ls(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Ks={"spacing-0":Us("spacing-0"),"spacing-4":Us("spacing-4"),"spacing-8":Us("spacing-8"),"spacing-12":Us("spacing-12"),"spacing-16":Us("spacing-16"),"spacing-20":Us("spacing-20"),"spacing-24":Us("spacing-24"),"spacing-32":Us("spacing-32"),"spacing-40":Us("spacing-40"),"spacing-48":Us("spacing-48"),"spacing-64":Us("spacing-64"),"spacing-72":Us("spacing-72"),"layout-xs":Us("layout-xs"),"layout-sm":Us("layout-sm"),"layout-md":Us("layout-md"),"layout-lg":Us("layout-lg"),"layout-xl":Us("layout-xl"),"layout-xxl":Us("layout-xxl"),"layout-xxxl":Us("layout-xxxl")},qs=Object.assign(Object.assign({},xs),{Primitive:ms}),Xs=Object.assign(Object.assign({},zs),{Spec:Is}),Gs=Ns,Zs=Object.assign(Object.assign({},fs),{Util:Ss}),Qs=Ks,Js=Vs,el=Ds,tl=Es,rl={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},nl=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Qs["spacing-24"]};
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
                background-color: ${qs["bg-hover-neutral"]};
            `}
    }
`,il=U.default.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=G(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(nl,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),ol=e=>i.css`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,al=(e,t,r=!1)=>{const n=`${e}-${t}`;return i.css`
        ${Xs[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},sl=e=>{if(e)return i.css`
            ${ol(e)}
        `},ll=(e,t)=>i.css`
    ${al(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?i.css`
            display: block;
            ${sl(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${sl(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${qs.text};
`;exports.Typography=void 0,function(t){const r=(e,t,r)=>{const n=q.default(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ll(t,e)}
        `;return n.displayName=`Typography.${r}`,n};t.HeadingXXL=r("h1","heading-xxl","HeadingXXL"),t.HeadingXL=r("h2","heading-xl","HeadingXL"),t.HeadingLG=r("h3","heading-lg","HeadingLG"),t.HeadingMD=r("h4","heading-md","HeadingMD"),t.HeadingSM=r("h5","heading-sm","HeadingSM"),t.HeadingXS=r("h6","heading-xs","HeadingXS");const n=(e,t)=>{const r=q.default.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>ll(e,t)}
        `;return r.displayName=`Typography.${t}`,r};t.BodyBL=n("body-baseline","BodyBL"),t.BodyMD=n("body-md","BodyMD"),t.BodySM=n("body-sm","BodySM"),t.BodyXS=n("body-xs","BodyXS");const o=(t,r)=>{const n=q.default.a`
            ${e=>i.css`
                ${al(t,e.weight||"regular")}
                color: ${qs.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${qs["text-hover"]};
                }
            `}
        `,o=t=>{var{external:r=!1,children:i}=t,o=G(t,["external","children"]);return e.jsxs(n,Object.assign({},o,{children:[i,r&&e.jsx(cl,{})]}))};return o.displayName=`Typography.${r}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(exports.Typography||(exports.Typography={}));const cl=q.default(o.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,dl=q.default.div`
    background-color: ${qs.bg} !important;
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${tl.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,ul=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,fl=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${Gs["duration-250"]} ${Gs["ease-standard"]};
`,hl=q.default(exports.Typography.HeadingSM)`
    ${e=>fl(e.$isCollapsed)}
`,pl=q.default(exports.Typography.HeadingXS)`
    ${e=>fl(e.$isCollapsed)}
`,gl=q.default(il)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${Gs["duration-250"]} ${Gs["ease-default"]};
    margin: auto -1rem auto 0;
`,ml=q.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${qs["icon-primary"]};
`,bl=q.default(Ti.div)`
    overflow: hidden;
`,vl=q.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${tl.MaxWidth.lg} {
        padding-right: 0;
    }
`;const yl=t.forwardRef((function(r,n){var{title:i,children:o,expanded:a,type:s="default",collapsible:l=!0}=r,c=G(r,["title","children","expanded","type","collapsible"]);const d=t.useRef(null),u=t.useContext(X),[f,h]=t.useState(!l||(null!=a?a:u)),[p,g]=t.useState(!1),m=c["data-testid"]||"accordion-item",b=Xe(),v=b.ref;t.useImperativeHandle(n,(()=>Object.assign(d.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{p&&h(!l||u)}),[u]),t.useEffect((()=>{p&&h(!!a)}),[a]),t.useEffect((()=>{g(!0)}),[]);const y={height:f?b.height:0},x=di(y);return e.jsxs(dl,{"data-testid":m,className:c.className,$isCollapsed:f,ref:d,children:[e.jsxs(ul,{$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0,children:["string"!=typeof i?i:"small"===s?e.jsx(pl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}):e.jsx(hl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}),l&&e.jsx(gl,{"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e.jsx(ml,{})})]}),e.jsx(bl,{style:p?x:y,$isCollapsed:f,"data-testid":`${m}-expandable-container`,children:e.jsx(vl,{ref:v,id:"content-container",children:o})})]})})),xl=q.default.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,wl=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,$l=q.default.div`
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
    animation: ${wl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Cl=q.default($l)`
    animation-delay: -0.45s;
`,Sl=q.default($l)`
    animation-delay: -0.3s;
`,jl=q.default($l)`
    animation-delay: -0.15s;
`,kl=({color:t,className:r,size:n})=>e.jsxs(xl,{className:r,$size:n,$color:t,"data-testid":"component-loading-spinner",children:[e.jsx($l,{id:"inner1"}),e.jsx(Cl,{id:"inner2"}),e.jsx(Sl,{id:"inner3"}),e.jsx(jl,{id:"inner4"})]}),Dl={collections:{default:{Button:{"button-radius":Vs.sm,"button-default-colour-bg":xs["bg-primary"],"button-default-colour-bg-hover":xs["bg-primary-hover"],"button-default-colour-text":xs["text-inverse"],"button-secondary-colour-border":xs["border-primary"],"button-secondary-colour-text":xs["text-primary"],"button-light-colour-text":xs["text-primary"],"button-link-colour-text":xs["text-primary"]}},pa:{Button:{"button-radius":Vs.full,"button-default-colour-bg":xs["bg-primary"],"button-default-colour-bg-hover":xs["bg-primary-hover"],"button-default-colour-text":xs["text-inverse"],"button-secondary-colour-border":xs["border-primary"],"button-secondary-colour-text":xs["text-primary"],"button-light-colour-text":xs["text-primary"],"button-link-colour-text":xs["text-primary"]}}},defaultValue:"default"},Tl=(e,t)=>r=>{var n,i;const o=r.theme,a=cs(Dl,null==o?void 0:o.componentScheme);return El((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||a[e][t],r)},El=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Ol=Tl("Button","button-radius"),Fl=Tl("Button","button-default-colour-bg"),Il=Tl("Button","button-default-colour-bg-hover"),_l=Tl("Button","button-default-colour-text"),Ml=Tl("Button","button-secondary-colour-border"),Al=Tl("Button","button-secondary-colour-text"),Bl=Tl("Button","button-light-colour-text"),Rl=Tl("Button","button-link-colour-text"),zl=q.default.button`
    padding: ${Qs["spacing-8"]} ${Qs["spacing-16"]};
    min-width: 4rem;
    border: ${Zs["width-010"]} ${Zs.solid} transparent;
    transition: all ${Gs["duration-250"]} ${Gs["ease-default"]};
    border-radius: ${Ol};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return i.css`
                    background-color: ${qs.Primitive.white};
                    border-color: ${e.$buttonIsDanger?qs["border-error-strong"]:Ml};

                    color: ${e.$buttonIsDanger?qs["text-error"]:Al};

                    &:hover,
                    &:active {
                        background-color: ${qs["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${qs.bg};
                    border-color: ${qs.border};

                    color: ${e.$buttonIsDanger?qs["text-error"]:Bl};

                    &:hover,
                    &:active {
                        background-color: ${qs["bg-hover-neutral"]};
                    }
                `;case"link":return i.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?qs["text-error"]:Rl};
                    &:hover,
                    &:active {
                        background-color: ${qs["bg-hover-neutral"]};
                    }
                `;case"disabled":return i.css`
                    background-color: ${qs["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qs["text-disabled"]};
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?qs["bg-error-strong"]:Fl};};

                    ${tl.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${_l}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?qs["bg-error-strong-hover"]:Il}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return i.css`
                    height: 2.5rem;
                    ${Xs["body-md-semibold"]}

                    ${tl.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return i.css`
                    height: 4rem;
                    ${Xs["heading-md-semibold"]}

                    ${tl.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return i.css`
                    height: 3rem;
                    ${Xs["heading-xs-semibold"]}

                    ${tl.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Pl=q.default(kl)`
    margin-right: 0.5rem;
`,Ll=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=G(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(zl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Pl,{}),e.jsx("span",{children:n})]}))};Ll.displayName="Button.Default";const Nl=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=G(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(zl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Pl,{}),e.jsx("span",{children:n})]}))};Nl.displayName="Button.Small";const Hl=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=G(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:s};return e.jsxs(zl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Pl,{}),e.jsx("span",{children:n})]}))};Hl.displayName="Button.Large";const Wl={Default:U.default.forwardRef(Ll),Small:U.default.forwardRef(Nl),Large:U.default.forwardRef(Hl)},Vl=q.default.div`
    width: 100%;
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
`,Yl=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${tl.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return i.css`
                ${tl.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Ul=q.default(exports.Typography.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${tl.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return i.css`
                ${tl.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Kl=q.default(Wl.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,ql=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:a=!1,className:s})=>{const[l,c]=t.useState("expand-all"===o),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(X.Provider,{value:l,children:e.jsxs(Vl,{className:s,children:[n||i?e.jsxs(Yl,{$showTitleInMobile:a,$hasExpandAll:i,children:[n&&e.jsx(Ul,{weight:"bold",$showInMobile:a,"data-testid":"accordion-title",children:n}),i&&e.jsx(Kl,{"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button",children:l?"Hide all":"Show all"})]}):null,r]})})}),{Item:yl}),Xl=e=>{const{textSize:t}=e||{};return i.css`
        // Text styling
        ${t&&Xs[`${t}-regular`]}

        strong {
            font-weight: ${Xs.Spec["weight-semibold"]};
            ${t&&Xs[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Xs.Spec["weight-semibold"]};
            ${t&&Xs[`${t}-semibold`]}
            color: ${qs.hyperlink};
            text-decoration: none;

            svg {
                color: ${qs["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${qs["hyperlink-hover"]};

                svg {
                    color: ${qs["icon-hover"]};
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
    `},Gl=q.default.div`
    padding: ${Qs["spacing-8"]} ${Qs["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=qs["bg-error"](e),r=qs["border-error"](e);break;case"success":t=qs["bg-success"](e),r=qs["border-success"](e);break;case"warning":default:t=qs["bg-warning"](e),r=qs["border-warning"](e);break;case"info":t=qs["bg-info"](e),r=qs["border-info"](e);break;case"description":t=qs["bg-strong"](e),r=qs["border-strong"](e)}return i.css`
            background: ${t};
            border-left: ${Zs["width-020"]} ${Zs.solid}
                ${r};
        `}}

    color: ${qs.text};
    ${e=>"small"===e.$sizeType?Xl({textSize:"body-sm"}):Xl({textSize:"body-md"})}
`,Zl=q.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Qs["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=qs["icon-error"](e);break;case"success":t=qs["icon-success"](e);break;case"warning":default:t=qs["icon-warning"](e);break;case"info":t=qs["icon-info"](e);break;case"description":t=qs["icon-subtle"](e)}return i.css`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Ql=q.default(exports.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?i.css`
                ${Xs["body-sm-semibold"]}
                margin-top: ${Qs["spacing-4"]};
            `:i.css`
                ${Xs["body-md-semibold"]}
                margin-top: ${Qs["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Qs["spacing-4"]};
    }
`,Jl=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ec=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i.css`
                margin-bottom: ${Qs["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,tc=q.default.button`
    ${e=>"small"===e.$sizeType?i.css`
                ${Xs["body-sm-semibold"]}
            `:i.css`
                ${Xs["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Qs["spacing-4"]};
    margin-top: ${Qs["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${qs["text-primary"]};
`,rc=q.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Gs["duration-350"]} ${Gs["ease-standard"]};
`,nc=r=>{var{type:n,className:i,children:o,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:p=!1,customIcon:g,maxCollapsedHeight:m}=r,b=G(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:C}=Xe();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(j())},j=()=>!(!$||!m)&&$>m;return e.jsxs(Gl,{className:i,$type:n,$sizeType:h,"data-testid":b["data-testid"],children:[p&&e.jsx(Zl,{$sizeType:h,$type:n,children:(()=>{if(n&&g)return g;switch(n){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()}),e.jsxs(Jl,{children:[e.jsxs(ec,{$maxCollapsedHeight:j()?m:void 0,$showMore:v,$hasActionLink:!!u,children:[e.jsx("div",{ref:C,children:o}),u?e.jsxs(Ql,Object.assign({"data-testid":"action-link",$type:n,$sizeType:h},u,{children:[u.children,f||e.jsx(a.ArrowRightIcon,{})]})):null]}),x&&e.jsxs(tc,{$sizeType:h,$type:n,type:"button",onClick:()=>y(!v),children:["Show ",v?"less":"more",e.jsx(rc,{$expanded:v})]})]})]})},ic=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.946a672c.js")}))).LottieSpinner}})))),oc=r=>e.jsx(sc,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(ac,{}),children:e.jsx(ic,{})})})),ac=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),sc=q.default.div`
    margin: 0 auto;
    padding: ${Qs["spacing-32"]} ${Qs["spacing-16"]};
`,lc=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.a2a20709.js")}))).LottieLoadingDots}})))),cc=r=>e.jsx(uc,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(dc,{}),children:e.jsx(lc,{})})})),dc=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),uc=q.default.div`
    margin: 0 auto;
`,fc=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.97656638.js")}))).LottieLoadingDotsSpinner}})))),hc=r=>{var{color:n}=r,o=G(r,["color"]);const a=i.useTheme(),s=n||qs["icon-primary"]({theme:a});return e.jsx(gc,Object.assign({},o,{children:e.jsx(t.Suspense,{fallback:e.jsx(pc,{}),children:e.jsx(fc,{color:s})})}))},pc=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),gc=q.default.div`
    margin: 0 auto;
`;var mc,bc={exports:{}};mc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var vc=bc.exports=mc(U.default);const yc=q.default.div`
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    margin-bottom: ${Qs["spacing-32"]};
`,xc=q.default(Ti.div)`
    overflow: hidden;
`,wc=q.default.div`
    height: max-content;
`,$c=q.default.div`
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
`,Cc=q.default.div`
    padding: ${Qs["spacing-16"]} ${Qs["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${tl.MaxWidth.sm} {
        padding: ${Qs["spacing-16"]} ${Qs["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return i.css`
                cursor: pointer;
            `}}
`,Sc=q.default.div`
    ${Xs["heading-sm-semibold"]}
    color: ${qs.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Qs["spacing-16"]};
`,jc=q.default.div`
    display: flex;
`,kc=q.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Qs["spacing-40"]};

    ${tl.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return i.css`
                    color: ${qs["icon-error"]};
                `;case"warning":return i.css`
                    color: ${qs["icon-warning"]};
                `}}}
`,Dc=q.default(s.ExclamationCircleFillIcon)`
    height: ${Xs.Spec["heading-size-sm"]};
    width: ${Xs.Spec["heading-size-sm"]};
`,Tc=q.default.div`
    display: flex;
    margin-left: auto;
    ${tl.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return i.css`
                margin-right: ${Qs["spacing-40"]};
                ${tl.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${Qs["spacing-16"]};
                }
            `}}
`,Ec=q.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Qs["spacing-16"]};
    margin: -${Qs["spacing-16"]};
    display: flex;
    align-items: center;

    ${tl.MaxWidth.sm} {
        margin: -${Qs["spacing-16"]} -${Qs["spacing-16"]} -${Qs["spacing-16"]} 0;
        margin-left: auto;
    }
`,Oc=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Gs["duration-250"]} ${Gs["ease-default"]};
`,Fc=q.default(f.ChevronDownIcon)`
    color: ${qs.icon};
    height: ${Xs.Spec["heading-size-sm"]};
    width: ${Xs.Spec["heading-size-sm"]};
`;var Ic={exports:{}};Ic.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},j=v;j.l=C,j.i=$,j.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return j},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!j.u(t)||t,d=j.p(e),h=function(e,t){var i=j.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return j.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=j.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[j.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var p=j.p(d),g=function(e){var t=S(h);return j.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[o]=t,f[a]=r,f[i]=e,f)[p]||1,b=this.$d.getTime()+n*m;return j.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return j.s(o%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return s+1;case"MM":return j.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return j.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=j.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return j.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return h?p:j.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return j.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return S.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var _c=Oi(Ic.exports),Mc={exports:{}};Mc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,p=a||(i||o?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ac=Oi(Mc.exports),Bc={exports:{}};Bc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Rc=Oi(Bc.exports),zc={exports:{}};zc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Pc=Oi(zc.exports),Lc={exports:{}};Lc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Nc,Hc,Wc=Oi(Lc.exports),Vc={exports:{}};Vc.exports=(Nc={year:0,month:1,day:2,hour:3,minute:4,second:5},Hc={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Hc[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Hc[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Nc[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Yc,Uc=Oi(Vc.exports);_c.extend(Rc),_c.extend(Wc),_c.extend(Pc),_c.extend(Ac),_c.extend(Uc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=_c(t).startOf("week");return Kc(r).map((e=>qc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return qc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(_c(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+_c(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=_c(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?_c(n):void 0,i?_c(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Yc||(Yc={}));const Kc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},qc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Xc=[1,3,5,7,8,10,12],Gc=[4,6,9,11];var Zc,Qc,Jc,ed;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Xc.includes(o)?Math.min(i,31).toString():Gc.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=_c(e,r);return _c(t,r).diff(n,"minute")},e.toDayjs=e=>e?_c(e):_c(),e.addMinutesToTime=(e,t,r="HH:mm")=>_c(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>_c(e).isSame(_c(t),r)}(Zc||(Zc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!_c(e).isBefore(n,"day"))||!(!i||!_c(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(_c(e).isValid())return e}return""}}(Qc||(Qc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Jc||(Jc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ed||(ed={}));function td(e){const r=t.useRef(null);return t.useLayoutEffect((()=>{r.current=e}),[e]),t.useCallback(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const rd=(e,r,n="window",i)=>{const o=t.useRef();t.useEffect((()=>{o.current=r}),[r]),t.useEffect((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const r=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,r,i),()=>{null==t||t.removeEventListener(e,r,i)}}),[e,n])},nd="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,id=()=>{const[e,r]=t.useState(!1);return t.useEffect((()=>{r(!0)}),[]),e};function od({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(d,d)}}}}const ad=e=>{const r=(e=>{const r=t.useRef(e),n=t.useRef();return t.useEffect((()=>{n.current=r.current,r.current=e}),[e]),n.current})(e);return r!==e},sd=e=>{const[r,n]=t.useState(e),i=t.useRef(e);return[r,t.useCallback((e=>{i.current=e,n(e)}),[]),i]},ld=q.default.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${Qs["spacing-32"]} 0;

    ${tl.MaxWidth.xl} {
        margin: ${Qs["spacing-24"]} 0;
    }

    ${tl.MaxWidth.lg} {
        margin: ${Qs["spacing-16"]} 0;
    }
`,cd=q.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Qs["spacing-8"]};
    font-size: ${Xs.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${tl.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,dd=q.default.div`
    width: ${Qs["spacing-64"]};
    height: calc(1lh + ${Qs["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,i.css`
            ${tl.MaxWidth.lg} {
                ${t}
            }
        `}};
`,ud=q.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,fd=q.default(h.ChevronRightIcon)`
    margin: ${Qs["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${qs["icon-subtle"]};
`,hd=q.default(exports.Typography.BodyMD)`
    margin: ${Qs["spacing-8"]} !important;
`,pd=q.default(exports.Typography.LinkMD)`
    margin: ${Qs["spacing-8"]} !important;
`,gd=q.default(zl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,md=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=G(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:a};return e.jsxs(gd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(kl,{}):s,e.jsx("span",{children:n})]}))};md.displayName="ButtonWithIcon.Default";const bd=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=G(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:a};return e.jsxs(gd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(kl,{}):s,e.jsx("span",{children:n})]}))};bd.displayName="ButtonWithIcon.Small";const vd={Default:U.default.forwardRef(md),Small:U.default.forwardRef(bd)},yd=q.default.div`
    --vertical-inset: ${Qs["spacing-24"]};
    --horizontal-inset: ${Qs["spacing-20"]};
    --header-bottom-spacing: ${Qs["spacing-4"]};

    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${tl.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,xd=i.css`
    color: ${qs.icon};
    height: 1rem;
    width: 1rem;
`,wd=q.default(p.ChevronLeftIcon)`
    ${xd}
`,$d=q.default(h.ChevronRightIcon)`
    ${xd}
`,Cd=q.default(f.ChevronDownIcon)`
    ${xd}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Sd=q.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,jd=q.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,kd=q.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Dd=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${qs.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return i.css`
                display: none;
            `}}
`,Td=q.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ed=q.default.div`
    display: flex;
`,Od=q.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${Cd} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Fd=q.default.span`
    ${Xs["body-md-regular"]}
    color: ${qs.text};
`,Id=q.default.div`
    display: flex;
`,_d=q.default(il)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Md=q.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ad=q.default(Wl.Small)`
    flex: 1;
`,Bd=q.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Rd=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Js.md};
    margin: 0 0.5rem;
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};

    // default styles
    ${Xs["body-md-regular"]}
    border-radius: ${Js.md};
    border: ${Zs["width-010"]} ${Zs.solid} transparent;
    background-clip: border-box;
    color: ${qs.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?i.css`
                cursor: pointer;
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?i.css`
                background: ${qs["bg-selected"]};
                border-color: ${qs["border-selected"]};
                color: ${qs["text-selected"]};
                font-weight: ${Xs.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${qs["bg-selected-hover"]};
                        border-color: ${qs["border-selected-hover"]};
                        color: ${qs["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?i.css`
                color: ${qs["text-primary"]};
                font-weight: ${Xs.Spec["weight-semibold"]};
            `:r?i.css`
                color: ${qs["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?i.css`
                &:hover {
                    background: ${qs["bg-selected-hover"]};
                    border-color: ${qs["border-selected-hover"]};
                    color: ${qs["text-selected-hover"]};
                    font-weight: ${Xs.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${qs["bg-hover"]};
                color: ${qs["text-hover"]};
                font-weight: ${Xs.Spec["weight-semibold"]};
            }
        `}}
`,zd=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const f=t.useMemo((()=>Yc.generateMonths(_c(r))),[r]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,r="end"===n&&i&&e.isBefore(i,"month")&&s;return!(!t&&!r)},p=e=>{const t=e.format("MMMM"),r=(n=e,!Yc.isWithinRange(n,l?_c(l):void 0,c?_c(c):void 0,"month"));var n;const i=a.isSame(e,"month")?"selected-month":_c().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||d,month:t,variant:i}};return f.length?e.jsx(Bd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,month:o}=p(t);return e.jsx(Rd,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(t,!n),children:o},o)}))}):null},Pd=q.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ld=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Xs["body-md-regular"]}
    border-radius: ${Js.md};
    border: ${Zs["width-010"]} ${Zs.solid} transparent;
    background-clip: border-box;
    color: ${qs.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?i.css`
                cursor: pointer;
            `:t?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?i.css`
                background: ${qs["bg-selected"]};
                border-color: ${qs["border-selected"]};
                color: ${qs["text-selected"]};
                font-weight: ${Xs.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${qs["bg-selected-hover"]};
                        border-color: ${qs["border-selected-hover"]};
                        color: ${qs["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?i.css`
                color: ${qs["text-primary"]};
                font-weight: ${Xs.Spec["weight-semibold"]};
            `:"other-decade"===e||r?i.css`
                color: ${qs["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?i.css`
                &:hover {
                    background: ${qs["bg-selected-hover"]};
                    border-color: ${qs["border-selected-hover"]};
                    color: ${qs["text-selected-hover"]};
                    font-weight: ${Xs.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${qs["bg-hover"]};
                color: ${qs["text-hover"]};
                font-weight: ${Xs.Spec["weight-semibold"]};
            }
        `}}
`,Nd=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const f=t.useMemo((()=>Yc.generateDecadeOfYears(_c(r))),[r]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,r="end"===n&&i&&e.isBefore(i,"year")&&s;return!(!t&&!r)},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!Yc.isWithinRange(i,l?_c(l):void 0,c?_c(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":_c().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:r,variant:o}};return f.length?e.jsx(Pd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,year:o}=p(t);return e.jsx(Ld,{$variant:i,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,t)=>{t||u(e)})(t,!n),children:o},o)}))}):null},Hd=U.default.forwardRef(((r,n)=>{var{children:i,initialCalendarDate:o,minDate:a,maxDate:s,currentFocus:l,selectedStartDate:c,selectedEndDate:d,selectWithinRange:u,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:p,withButton:g,doneButtonDisabled:m,onDismiss:b,showNavigationHeader:v=!0,getLeftArrowDate:y,getRightArrowDate:x,isLeftArrowDisabled:w,isRightArrowDisabled:$,getMonthHeaderLabel:C,getYearHeaderLabel:S}=r,j=G(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[k,D]=t.useState(Zc.toDayjs(o)),[T,E]=t.useState(Zc.toDayjs(o)),[O,F]=t.useState("default"),I=t.useRef(null),_=t.useRef(null),M=t.useRef(null);t.useImperativeHandle(n,(()=>({defaultView(){F("default")},resetView(){const e=Zc.toDayjs(o);D(e),E(e),F("default")},setCalendarDate(e){const t=Zc.toDayjs(e);D(t),E(t)}}))),t.useEffect((()=>{const e=Zc.toDayjs(o);D(e),E(e)}),[o]),t.useEffect((()=>{N(T)}),[T]);const A=()=>{var e;"month-options"!==O?(F("month-options"),null===(e=M.current)||void 0===e||e.focus()):(F("default"),D(T))},B=()=>{"default"!==O?(F("default"),D(T)):F("year-options")},R=()=>{var e;null===(e=M.current)||void 0===e||e.focus();const t=y?y(k):k.subtract(1,"month");switch(O){case"default":E(t),D(t);break;case"month-options":D((e=>e.subtract(1,"year")));break;case"year-options":D((e=>e.subtract(10,"year")))}},z=()=>{var e;null===(e=M.current)||void 0===e||e.focus();const t=x?x(k):k.add(1,"month");switch(O){case"default":E(t),D(t);break;case"month-options":D((e=>e.add(1,"year")));break;case"year-options":D((e=>e.add(10,"year")))}},P=e=>{D(e),E(e),g||F("default")},L=()=>{const e=Zc.toDayjs(o);D(e),E(e),"default"===O?H("reset"):F("default")},N=e=>{p&&p(e)},H=e=>{b&&b(e)},W=()=>{if(!a||h)return!1;const e=_c(a);return"month-options"===O?!Yc.isPreviousYearWithinRange(k,e):"year-options"===O?!Yc.isPreviousDecadeWithinRange(k,e):w?w(k):!Yc.isPreviousMonthWithinRange(k,e)},V=()=>{if(!s||h)return!1;const e=_c(s);return"month-options"===O?!Yc.isNextYearWithinRange(k,e):"year-options"===O?!Yc.isNextDecadeWithinRange(k,e):$?$(k):!Yc.isNextMonthWithinRange(k,e)},Y=()=>{if("year-options"===O){const{beginDecade:e,endDecade:t}=Yc.getStartEndDecade(k);return`${e} to ${t}`}return S?S(k):k.format("YYYY")},U=()=>{const t=C?C(k):k.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(Od,{type:"button",tabIndex:-1,$expanded:"month-options"===O,$visible:"default"===O,id:"month-dropdown",onClick:A,children:[e.jsx(Fd,{children:t}),e.jsx(Cd,{})]}),e.jsxs(Od,{type:"button",tabIndex:-1,$expanded:"default"!==O,id:"year-dropdown",onClick:B,children:[e.jsx(Fd,{children:Y()}),e.jsx(Cd,{})]})]})},K=()=>{switch(O){case"month-options":return e.jsx(zd,{calendarDate:k,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:T,isNewSelection:!!u,onMonthSelect:P,allowDisabledSelection:h});case"year-options":return e.jsx(Nd,{calendarDate:k,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:T,isNewSelection:!!u,onYearSelect:P,allowDisabledSelection:h});default:return null}};return e.jsxs(Sd,Object.assign({ref:M,"data-id":"calendar-container","data-testid":"calendar-container"},j,{children:[v&&e.jsxs(Td,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e.jsx(Ed,{children:U()}),e.jsxs(Id,{children:[e.jsx(_d,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:W(),focusHighlight:!1,tabIndex:-1,onClick:R,children:e.jsx(wd,{})}),e.jsx(_d,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:V(),focusHighlight:!1,tabIndex:-1,onClick:z,children:e.jsx($d,{})})]})]}),e.jsx(jd,{children:(()=>{const t="function"==typeof i?i({calendarDate:T,currentView:O}):i;return f?e.jsxs(e.Fragment,{children:["default"===O&&t,K()]}):e.jsxs(e.Fragment,{children:[e.jsx(kd,{children:t}),e.jsx(Dd,{$visible:"default"!==O,children:K()})]})})()}),(()=>{if(!g)return;const t=!!("default"===O)&&m;return e.jsxs(Md,{children:[e.jsx(Ad,{ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:L,children:"Cancel"}),e.jsx(Ad,{"data-testid":"done-button",ref:I,type:"button",onClick:()=>{t||(D(T),"default"===O?H("confirmed"):F("default"))},disabled:t,children:"Done"})]})})()]}))})),Wd=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Vd=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Xs["body-sm-semibold"]};
    color: ${qs.text};
`,Yd=q.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Ud=e=>{let t=qs.bg,r="transparent";switch(e.$type){case"hover-subtle":t=qs["bg-hover"],r=qs["bg-hover"];break;case"hover":t=qs["bg-hover-strong"],r=qs["bg-hover-strong"];break;case"hover-outline":t=qs["bg-hover-subtle"],r=qs["border-hover"];break;case"selected-outline":t=qs["bg-selected"],r=qs["border-selected"];break;case"selected-outline-subtle":t=qs["bg-selected"],r=qs["border-selected-subtle"];break;case"selected-hover":t=qs["bg-selected-hover"];break;case"selected-hover-outline":t=qs["bg-selected-hover"],r=qs["border-selected-hover"]}return{color:t,borderColor:r}},Kd=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,qd=q.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};
    border: ${Zs["width-010"]} ${Zs.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Ud(e);return i.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Xd=q.default(qd)`
    left: 0;
`,Gd=q.default(qd)`
    right: 0;
`,Zd=q.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};

    border: ${Zs["width-010"]} ${Zs.solid} transparent;
    border-radius: ${Js.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Ud(e);return i.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Qd=q.default(Zd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Jd=q.default(Zd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,eu=q.default.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Xs["body-md-regular"]}
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?i.css`
                    visibility: hidden;
                `:i.css`
                color: ${qs["text-disabled-subtlest"]};
            `;switch(r){case"selected":return i.css`
                    font-weight: ${Xs.Spec["weight-semibold"]};
                    color: ${qs["text-selected"]};
                `;case"selected-hover":return i.css`
                    font-weight: ${Xs.Spec["weight-semibold"]};
                    color: ${qs["text-selected-hover"]};
                `;case"current":return i.css`
                    font-weight: ${Xs.Spec["weight-semibold"]};
                    color: ${qs["text-primary"]};
                `;case"hover":return i.css`
                    font-weight: ${Xs.Spec["weight-semibold"]};
                    color: ${qs["text-hover"]};
                `;case"unavailable":return i.css`
                    color: ${qs["text-disabled-subtlest"]};
                `;case"hidden":return i.css`
                    visibility: hidden;
                `;default:return i.css`
                    color: ${qs.text};
                `}}}
`,tu=q.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,ru=({bgLeft:t,bgRight:r,circleLeft:n,circleRight:i,labelType:o,disabled:a,interactive:s,currentDateIndicator:l,date:c,onSelect:d,onHover:u,onHoverEnd:f})=>{const h=_c().isSame(c,"day");return e.jsxs(Kd,{children:[e.jsx(Xd,{$type:t}),e.jsx(Qd,{$type:n}),e.jsx(Gd,{$type:r}),e.jsx(Jd,{$type:i}),e.jsxs(eu,{$type:o,$disabled:a,$interactive:s,onClick:()=>{d(c)},onMouseEnter:()=>{u(c)},onMouseLeave:()=>{f&&f(c)},children:[c.date(),l&&h&&e.jsx(tu,{$disabled:a})]})]})},nu=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=Yc.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=_c(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:()=>{h(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e.jsx(ru,Object.assign({},v,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(_c().isSame(t,"day")&&!g)e.labelType="current";else if(u){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};_c.extend(Rc);const iu=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h})=>{const p=t.useMemo((()=>Yc.generateDays(r)),[r]),[g,m]=t.useState(""),b=(e,t)=>{t&&!f||s(e)},v=(e,t)=>{t&&!f||(m(e),l(e))},y=()=>{m(""),l("")};return e.jsxs(Wd,{"data-testid":"calendar-content",children:[p[0].map(((t,r)=>e.jsx(Vd,{children:_c(t).format("ddd")},`week-day-${r}`))),p.map(((t,s)=>e.jsx(Yd,{onMouseLeave:y,children:t.map(((t,s)=>e.jsx(nu,{date:t,calendarDate:r,startDate:o,endDate:a,hoverDate:g,currentFocus:n,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:c,showActiveMonthDaysOnly:h,onSelect:b,onHover:v},`day-${s}`)))},s)))]})},ou=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const f=Yc.isDisabledDay(t,s,o,a),h=!f||l,{start:p,end:g}=n?Yc.getFixedRangeStartEnd(Zc.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Yc.getFixedRangeStartEnd(Zc.toDayjs(i),c):{start:void 0,end:void 0},v=!!n&&t.isBetween(p,g,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(ru,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":_c().isSame(t,"day")&&!f&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===p,r===g),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==p&&(e.circleLeft="selected-hover")),e})()))},au=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>Yc.generateDays(r)),[r]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||(o(e),e&&!_c(e).isSame(e,"month")&&h(""))},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Wd,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(Vd,{children:_c(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(Yd,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(ou,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:p,onHover:g,numberOfDays:d},`day-${o}`)))},o)))]})},su=q.default.div`
    width: 100%;
    background: ${qs.bg};
`,lu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const f=Yc.isDisabledDay(t,s,o,a),h=!f||l,p={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(ru,Object.assign({},p,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":_c().isSame(t,"day")&&!f&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};_c.extend(Rc);const cu=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d})=>{const u=t.useMemo((()=>Yc.generateDays(r)),[r]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||o(e)},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Wd,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(Vd,{children:_c(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(Yd,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(lu,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:p,onHover:g},`day-${o}`)))},o)))]})},du=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Yc.isDisabledDay(t,s,o,a),f=!u||l,{start:h,end:p}=Yc.getWeekStartEnd(Zc.toDayjs(n)),{start:g,end:m}=Yc.getWeekStartEnd(Zc.toDayjs(i)),b=n&&t.isBetween(h,p,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(h)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(t,!f)},onHover:()=>{d(t.format("YYYY-MM-DD"),!f)}};return e.jsx(ru,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":_c().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},uu=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>Yc.generateDays(r)),[r]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!c)return;const r=e.startOf("week");o(r),e&&!_c(e).isSame(r,"month")&&f("")},p=(e,t)=>{t&&!c||(f(e),a(e))},g=()=>{f(""),a("")};return e.jsxs(Wd,{"data-testid":"calendar-content",children:[d[0].map(((t,r)=>e.jsx(Vd,{children:_c(t).format("ddd")},`week-day-${r}`))),d.map(((t,o)=>e.jsx(Yd,{onMouseLeave:g,children:t.map(((t,o)=>e.jsx(du,{date:t,calendarDate:r,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:h,onHover:p},`day-${o}`)))},o)))]})},fu=U.default.forwardRef((({disabledDates:r,onYearMonthDisplayChange:n,onSelect:i,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:h,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1},y)=>{const x=t.useRef(null),w=t.useRef(void 0);t.useImperativeHandle(y,(()=>({reset(){var e;null===(e=x.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=x.current)||void 0===t||t.setCalendarDate(e)}})));const $=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=x.current)||void 0===t||t.setCalendarDate(r),S(r)},C=e=>{j(e)},S=e=>{i&&i(e)},j=e=>{o&&o(e)},k=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e.jsx(su,{children:e.jsx(Hd,{ref:x,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:f,maxDate:h,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||k(e),w.current=e},initialCalendarDate:m,children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(uu,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:C});case"fixed-range":return e.jsx(au,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:C,numberOfDays:b});case"single":return e.jsx(cu,{calendarDate:t,disabledDates:r,selectedDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:$,onHover:C});default:return e.jsx(iu,{calendarDate:t,currentFocus:c,disabledDates:r,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:$,onHover:C})}})(t)})})})),hu=U.default.forwardRef(((t,r)=>{var{width:n}=t,i=G(t,["width"]);return e.jsx(yd,{$width:n,"data-testid":"calendar-dropdown",children:e.jsx(fu,Object.assign({ref:r},i))})})),pu=q.default.div`
    --vertical-inset: ${Qs["spacing-24"]};
    --horizontal-inset: ${Qs["spacing-32"]};
    --header-bottom-spacing: ${Qs["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
                border-radius: ${Js.lg};
                overflow: hidden;
            `}}
`,gu=q.default.div`
    border-radius: ${Js.md};
    background: ${qs.bg};
    padding: ${Qs["spacing-16"]} ${Qs["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,mu=t=>{var{children:r}=t,n=G(t,["children"]);const i=n["data-testid"]||"card";return e.jsx(gu,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e.jsx(exports.Typography.BodyBL,{children:r}):r}))},bu=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,vu=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>i.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,yu=i.css`
    animation: ${Gs["duration-150"]} ${Gs["ease-default"]} ${bu};
    width: 100%;
    height: 100%;
    transition: color ${Gs["duration-150"]} ${Gs["ease-default"]};
`,xu=q.default(u.SquareIcon)`
    ${yu}
    color: ${qs["icon-primary-subtlest"]};
`,wu=q.default(u.SquareFillIcon)`
    ${yu}
    color: ${qs["icon-disabled-subtle"]};
`,$u=q.default(u.SquareTickFillIcon)`
    ${yu}
    color: ${e=>e.$disabled?qs["icon-disabled-subtle"](e):qs["icon-selected"](e)};
`,Cu=q.default(u.MinusSquareFillIcon)`
    ${yu}
    color: ${e=>e.$disabled?qs["icon-disabled-subtle"](e):qs["icon-selected"](e)};
`,Su=q.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${xu},
        &:hover
        + ${$u},
        &:hover
        + ${Cu} {
        color: ${e=>!e.disabled&&qs["icon-hover"](e)};
    }
`,ju=r=>{var{className:n,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:c="default"}=r,d=G(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=t.useRef(null);t.useEffect((()=>{u.current&&(u.current.indeterminate=null!=a&&a)}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(vu,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:c,$disabled:o,$unchecked:!(a||i||o),children:[e.jsx(Su,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:f,disabled:o},d)),a?e.jsx(Cu,{$disabled:o,"data-testid":"indeterminate"}):i?e.jsx($u,{$disabled:o,"data-testid":"checkmark"}):o?e.jsx(wu,{"data-testid":"empty-disabled-checkbox"}):e.jsx(xu,{$disabled:o,"data-testid":"empty-checkbox"})]})};var ku=Ai,Du=/\s/;var Tu=function(e){for(var t=e.length;t--&&Du.test(e.charAt(t)););return t},Eu=/^\s+/;var Ou=function(e){return e?e.slice(0,Tu(e)+1).replace(Eu,""):e},Fu=no,Iu=Zi,_u=/^[-+]0x[0-9a-f]+$/i,Mu=/^0b[01]+$/i,Au=/^0o[0-7]+$/i,Bu=parseInt;var Ru=function(e){if("number"==typeof e)return e;if(Iu(e))return NaN;if(Fu(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Fu(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ou(e);var r=Mu.test(e);return r||Au.test(e)?Bu(e.slice(2),r?2:8):_u.test(e)?NaN:+e},zu=no,Pu=function(){return ku.Date.now()},Lu=Ru,Nu=Math.max,Hu=Math.min;var Wu=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function g(){var e=Pu();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Hu(r,o-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=Pu(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Lu(t)||0,zu(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Nu(Lu(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Pu())},b},Vu=Oi(Wu),Yu=Wu,Uu=no;var Ku,qu,Xu=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Uu(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Yu(e,t,{leading:n,maxWait:t,trailing:i})},Gu=Oi(Xu),Zu=new Map,Qu=new WeakMap,Ju=0;function ef(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Qu.has(e)||(Ju+=1,Qu.set(e,Ju.toString())),Qu.get(e)):"0"}(e.root):e[t]}`)).toString()}function tf(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=ef(e);let r=Zu.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},Zu.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Zu.delete(i))}}function rf({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,f]=U.useState(null),h=U.useRef(),[p,g]=U.useState({inView:!!s,entry:void 0});h.current=c,U.useEffect((()=>{if(a||!u)return;let s;return s=tf(u,((e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,n,o,a,r,l,t]);const m=null==(d=p.entry)?void 0:d.target,b=U.useRef();u||!m||o||a||b.current===m||(b.current=m,g({inView:!!s,entry:void 0}));const v=[f,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}!function(e){e.AM="AM",e.PM="PM"}(Ku||(Ku={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,i]=e.split(":"),o=parseInt(n,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=_c(e,n),o=_c(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Ku.AM};if(!t)return r;try{if("24hr"===e){const n=af(t,e);r.minute=ed.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Ku.AM,r.hour=0===i?"12":ed.padValue(i.toString())):(r.period=Ku.PM,r.hour=12===i?i.toString():ed.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=af(t,e);r.hour=ed.padValue(n),r.minute=ed.padValue(i),r.period="am"===o.toLowerCase()?Ku.AM:Ku.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?ed.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return ed.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?ed.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?ed.padValue(n.toString()):13===n?ed.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Ku.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return ed.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=af(e,t),o=ed.padValue(r);let a=`${o}:${ed.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),sf(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=sf(e,n,t);o.push(r)}else{const t=sf(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),sf(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return sf(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(qu||(qu={}));const nf=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},of=e=>{const t=parseInt(e);return t>=0&&t<=59},af=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!nf(r[0],t)||!of(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!nf(r[0],t)||!of(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},sf=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,lf=q.default.div`
    width: 100%;
`,cf=q.default.div`
    ${Xs["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${Qs["spacing-8"]} ${Qs["spacing-16"]};
    border-radius: ${Js.sm};
    color: ${qs["text-primary"]};
    border: ${Zs["width-010"]} ${Zs.solid};
    border-color: ${qs["border-primary"]};
    background-color: ${qs.bg};

    ${tl.MaxWidth.sm} {
        padding: ${Qs["spacing-16"]};
    }

    ${e=>{if(e.$warn)return i.css`
                color: ${qs["text-error"]};
                border-color: ${qs["border-error"]};
            `}}
`,df=q.default(cf)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,uf=q.default(cf)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:o}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${o?qs["border-error"]:qs["border-primary-subtle"]} r g b / 50%);

            ${tl.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,ff=q.default.div`
    font-weight: ${Xs.Spec["weight-bold"]};
    margin-left: ${Qs["spacing-8"]};
    margin-right: ${Qs["spacing-24"]};

    ${tl.MaxWidth.sm} {
        margin-right: ${Qs["spacing-48"]};
    }
`,hf=q.default.div`
    font-weight: ${Xs.Spec["weight-semibold"]};
    margin-left: auto;
`,pf=q.default(u.ClockIcon)`
    color: ${e=>e.$warn?qs["icon-error"]:qs["icon-primary"]};
`,gf=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),mf=e=>Math.max(Math.round(e/1e3),0),bf=t=>r=>{switch(t){case"maintenance":{const t=r;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=r,n=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${el["sm-max"]({theme:t})}px) 400px, (max-width: ${el["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}};const{imgAttributeHelper:vf}=exports.ErrorDisplayHelper,yf={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},xf={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},wf=Object.assign(Object.assign({},yf),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),$f=Object.assign(Object.assign({},yf),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Cf=(e,t)=>new Map([["400",{img:vf(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:vf(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:vf(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:vf(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:vf(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:vf(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:vf(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:vf(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:vf(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:vf(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:vf(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:vf(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:vf(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:bf("inactivity")}],["maintenance",{img:vf(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:bf("maintenance")}],["no-item-found",{img:vf(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:vf(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:vf(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:vf(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:vf(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:vf(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Sf=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,jf=q.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${tl.MaxWidth.sm} {
        width: 320px;
    }

    ${tl.MaxWidth.xs} {
        width: 288px;
    }

    ${tl.MaxWidth.xxs} {
        width: 240px;
    }
`,kf=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,Df=q.default(exports.Typography.HeadingMD)`
    margin: ${Qs["spacing-32"]} 0 ${Qs["spacing-16"]};
    text-align: center;
`,Tf=q.default.div`
    color: ${qs.text};
    text-align: center;

    ${Xl({textSize:"body-baseline"})}
`,Ef=q.default(Wl.Default)`
    margin: ${Qs["spacing-32"]} auto 0;
    width: 21rem;

    ${tl.MaxWidth.sm} {
        width: 100%;
    }
`,Of=t=>{var{type:r,img:n,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=G(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t,r)=>{switch(t){case"bookingsg":return Cf(xf,r).get(e);case"ccube":return Cf(wf,r).get(e);case"mylegacy":return Cf($f,r).get(e);default:return Cf(yf,r).get(e)}})(r,d||(f||rl).resourceScheme,f),p=u["data-testid"]||"error-display",g=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==h?void 0:h.renderDescription)||void 0===e?void 0:e.call(h,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==h?void 0:h.renderDescription)||void 0===t?void 0:t.call(h,e):a||void 0}default:return a||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),n&&{img:n}),o&&{title:o}),g()&&{description:g()});return e.jsxs(Sf,Object.assign({},u,{"data-testid":p,children:[e.jsx(jf,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e.jsxs(kf,{children:[m.title&&("string"==typeof m.title?e.jsx(Df,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e.jsx(Tf,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(Ef,Object.assign({},t))})()]}))},Ff=i.css`
    outline-offset: -1px;
    outline: ${Zs["width-020"]} ${Zs.solid} ${qs["border-focus"]};
`,If=i.css`
    outline-color: ${qs["border-focus"]};
`,_f=i.css`
    outline-color: ${qs["border-disabled"]};
`,Mf=i.css`
    outline-color: ${qs["border-error-focus"]};
`,Af=q.default.div`
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    background: ${qs.bg};

    :focus-within {
        ${Ff}
    }
    ${e=>e.$focused&&Ff}

    ${e=>e.$readOnly?i.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${If}
                }
                ${e.$focused&&If}
            `:e.$disabled?i.css`
                background: ${qs["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${_f}
                }
                ${e.$focused&&_f}
            `:e.$error?i.css`
                border-color: ${qs["border-error"]};

                :focus-within {
                    ${Mf}
                }
                ${e.$focused&&Mf}
            `:void 0}
`,Bf=q.default(Af)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Qs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Rf=q.default.input`
    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}
    color: ${qs.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${qs["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${qs["text-subtler"]};
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
`,zf=q.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Zs["width-010"]} ${Zs.solid}
            ${qs["border-focus"]};
        border-radius: ${Js.sm};
    }
`,Pf=qs.border,Lf=qs.text,Nf=q.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Zs["width-010"]} ${Zs.solid} ${Pf};
    border-radius: ${Js.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Hf=q.default.div`
    flex: 1;
`,Wf=q.default.table`
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
`,Vf=q.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Zs["width-010"]} ${Zs.solid} ${Pf}`:"none"};
        }
    }
`,Yf=q.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,Uf=q.default(zf)`
    ${Xs["body-md-semibold"]}
    cursor: pointer;
    color: ${qs["text-primary"]};
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${qs["text-hover"]};
    }
`,Kf=q.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&i.css`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Js.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Zs["width-010"]} ${Zs.solid} ${Pf};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Zs["width-010"]} ${Zs.solid} ${Pf};
    border-radius: 0 0 ${Js.sm} ${Js.sm};
    background-color: ${qs["bg-selected"]};
    transition: all 300ms ease;
`,qf=q.default.tr`
    background-color: ${qs["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${Pf};
`,Xf=q.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Lf};
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${Pf};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,Gf=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Lf};
        margin-left: 0.5rem;
    }
`,Zf=q.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${qs["bg-selected"]};
            `:e.$alternating?i.css`
                ${qs["bg-strong"]};
            `:i.css`
                ${qs.bg};
            `};
    border-top: ${Zs["width-010"]} ${Zs.solid} ${Pf};
    &:hover {
        ${e=>{if(e.$isSelectable)return i.css`
                    background-color: ${qs["bg-hover-strong"]};
                `}};
    }
`,Qf=q.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Lf};
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${Pf};
`,Jf=q.default(exports.Typography.BodyBL)`
    ${ol(2)}
    text-overflow: ellipsis;
`,eh=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,th=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,rh=q.default(exports.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,nh=q.default.td`
    padding: 4rem 0;
`,ih=e=>"small"===e?2.5:3,oh=q.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=ih(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,ah=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Qs["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>ih(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Js.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${qs["border-focus"]};
    }
`,sh=q.default.button`
    ${ah}
    cursor: pointer;
`,lh=q.default.div`
    ${ah}
`,ch=i.keyframes`
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
`,dh=q.default.div`
    position: relative;
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    background: ${qs.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${qs["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${qs["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?i.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:i.css`
                animation: ${ch} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${qs["bg-disabled"]};

                ${sh} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${qs.border};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${sh} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?i.css`
                border-color: ${qs["border-error"]};

                :focus-within {
                    border-color: ${qs["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${qs["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;q.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Gs["duration-250"]} ${Gs["ease-default"]};
    margin-left: ${Qs["spacing-16"]};
`,q.default(f.ChevronDownIcon)`
    color: ${qs.icon};
`;const uh=q.default.div`
    height: 1px;
    background: ${qs.border};
    margin: 0 ${Qs["spacing-8"]};
`,fh=q.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${qs["text-disabled"]};
            `}}
`,hh=q.default.div`
    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${ol(1)}
                `}}
    overflow: hidden;
`,ph=q.default(hh)`
    color: ${qs["text-subtler"]};
`,gh=({children:r,show:n,error:i,disabled:o,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef(null);return rd("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e.jsx(oh,{className:c,$variant:d,children:e.jsx(dh,{ref:u,error:i&&!n,disabled:o,$readOnly:l,expanded:n,"data-testid":a,children:r})})};var mh;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(mh||(mh={}));const bh=()=>{const[e,r]=t.useState(void 0),n=g.useFloatingTree();return t.useEffect((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(mh.Change,e),n.events.emit(mh.Ready),()=>n.events.off(mh.Change,e)}),[n]),e},vh=q.default.div`
    display: flex;
    flex-direction: column;
`,yh=e=>"right"===e?"bottom-end":"bottom-start",xh=({enabled:r,isOpen:n,onOpen:o,onClose:a,onDismiss:s,renderElement:l,renderDropdown:c,customZIndex:d,clickToToggle:u=!1,offset:f=0,alignment:h="left",fitAvailableHeight:p})=>{var m;const b=i.useTheme(),v=el["sm-max"]({theme:b}),y=t.useRef(null),x=t.useRef(null),{width:w=0}=Xe({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:j}=g.useFloating({open:n,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!n?null==o||o():!e&&n&&(null==a||a(r))},whileElementsMounted:g.autoUpdate,placement:yh(h),middleware:[g.offset(f),g.flip(),g.shift({limiter:g.limitShift()}),g.size({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),$]}),k=bh(),{isMounted:D,styles:T}=g.useTransitionStyles(j,{initial:{opacity:0},open:{opacity:1},duration:300}),E=g.useClick(j,{enabled:r,toggle:u}),O=g.useDismiss(j,{enabled:r}),{getReferenceProps:F,getFloatingProps:I}=g.useInteractions([E,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},F(),{children:l()})),D&&e.jsx(g.FloatingPortal,{children:e.jsx(g.FloatingFocusManager,{context:j,modal:!1,initialFocus:x,returnFocus:!1,children:e.jsx("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=d?d:k)&&void 0!==m?m:50})},I(),{children:e.jsx(vh,{ref:x,style:Object.assign({},T),inert:T.opacity<1?"":void 0,children:c({elementWidth:w})})}))})})]})},wh=q.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,$h=q.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${Ch}, ${Dh} {
                    color: ${qs["text-subtler"]};
                }
            `}}
`,Ch=q.default(Rf)`
    background: transparent;
    text-align: center;
`,Sh=q.default(Ch)`
    width: 2rem;
    margin-right: ${Qs["spacing-4"]};
`,jh=q.default(Ch)`
    width: 2.5rem;
`,kh=q.default(Ch)`
    width: 3rem;
    margin-left: ${Qs["spacing-4"]};
`,Dh=q.default.span`
    ${Xs["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return i.css`
                color: ${qs.text};
            `}}
`,Th=q.default.div`
    ${Xs["body-baseline-regular"]}
    background-color: ${qs.bg};
    color: ${qs["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i.css`
                background-color: ${qs["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?i.css`
                display: none;
            `:void 0}
`;_c.extend(Ac);const Eh=U.default.forwardRef((({disabled:r,readOnly:n,names:i,value:o,focused:a,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:f,hideInputKeyboard:h},p)=>{const g=h?"none":"numeric",[m,b,v]=sd(""),[y,x,w]=sd(""),[$,C,S]=sd(""),[j,k]=t.useState("none"),[D,T]=t.useState(!1),E=t.useRef(null),O=t.useRef(null),F=t.useRef(null),I=t.useRef(null),[_,M,A]=N(s);t.useEffect((()=>{var e;const[t="",r="",n=""]=N(o);b(t),x(r),C(n),t||r||n||!E.current||!E.current.contains(document.activeElement)||null===(e=O.current)||void 0===e||e.focus()}),[o]),t.useEffect((()=>{var e;a||k("none"),a&&(T(!0),E.current&&!E.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))}),[a]),t.useImperativeHandle(p,(()=>({ref:E,resetPlaceholder(){T(!1)},resetInput(){const[e="",t="",r=""]=N(o);b(e),x(t),C(r)}})),[o]);const B=e=>{var t;e.preventDefault(),null===(t=O.current)||void 0===t||t.focus()},R=e=>{e.target.select();const t=e.target.name;k(t)},z=e=>{const[t,r,n]=i,o={[t]:v.current,[r]:w.current,[n]:S.current},a=e.target.name,s=o[a],l=a!==n?ed.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case r:o[r]=l,x(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,u=_c(c,"YYYY-MM-DD",!0).isValid(),h=!o[t]&&!o[r]&&!o[n];u&&s!==l&&d(c),E.current&&!E.current.contains(e.relatedTarget)&&(k("none"),null==f||f(h||u))},P=e=>{var t,r;if(s)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:m,month:y,year:$};switch(n){case i[0]:a.day=o,b(o),2===o.length&&(null===(t=F.current)||void 0===t||t.focus());break;case i[1]:a.month=o,x(o),2===o.length&&(null===(r=I.current)||void 0===r||r.focus());break;case i[2]:a.year=o,C(o)}if(!a.day&&!a.month&&!a.year)return void d("");const l=`${a.year}-${a.month}-${a.day}`;_c(l,"YYYY-MM-DD",!0).isValid()&&d(l)},L=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(j===i[1]&&0===y.length&&(null===(t=O.current)||void 0===t||t.focus()),j===i[2]&&0===$.length&&(null===(r=F.current)||void 0===r||r.focus()))};function N(e){if(e){const t=_c(new Date(e));return t.isValid()?[ed.padValue(t.date().toString()),ed.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(wh,{role:"group","aria-label":c,onClick:()=>{var e;r||n||(T(!0),E.current&&!E.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))},onFocus:e=>{r||(T(!0),a||null==u||u(e))},children:[e.jsxs($h,{ref:E,$hover:!!s,children:[e.jsx(Sh,{ref:O,name:i[0],maxLength:2,value:null!=_?_:m,onFocus:R,onBlur:z,onChange:P,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[0]||n?"DD":""}),e.jsx(Dh,{$inactive:0===m.length,children:"/"}),e.jsx(jh,{ref:F,name:i[1],maxLength:2,value:null!=M?M:y,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[1]||n?"MM":""}),e.jsx(Dh,{$inactive:0===y.length,children:"/"}),e.jsx(kh,{ref:I,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[2]||n?"YYYY":""})]}),(()=>{if(!o&&!n&&l)return e.jsx(Th,{$hide:D,$disabled:r,onMouseDown:B,children:l})})()]})})),Oh=q.default(Bf)`
    height: 3rem;
`,Fh=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:p=!0,readOnly:g,id:m,allowDisabledSelection:b,zIndex:v}=r,y=G(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,w]=t.useState(Qc.sanitizeInput(c)),[$,C]=t.useState(Qc.sanitizeInput(c)),[S,j]=t.useState(void 0),[k,D]=t.useState(!1),[T,E]=t.useState(!1),O=t.useRef(null),F=t.useRef(null);t.useEffect((()=>{const e=Qc.sanitizeInput(c);w(e),C(e)}),[c]);const I=e=>{!b&&Qc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i})||(C(e),p||(z(e),w(e),e&&D(!1)))},_=e=>{var t;C(e),p||(z(e),w(e),e&&(null===(t=O.current)||void 0===t||t.focus(),D(!1)),S&&j(void 0))},M=()=>{g||o||(D(!0),T||(E(!0),u&&u()))},A=e=>{var t;T&&!k&&O.current&&!O.current.contains(e.relatedTarget)&&(null===(t=F.current)||void 0===t||t.resetInput(),C(x),E(!1),P())},B=e=>{j(e)},R=e=>{var t;switch(e){case"reset":C(x);break;case"confirmed":w($),z($)}null===(t=O.current)||void 0===t||t.focus(),D(!1)},z=e=>{d&&d(e)},P=()=>{f&&f()};return e.jsx(xh,{enabled:!g&&!o,isOpen:k,renderElement:()=>e.jsx(Oh,Object.assign({tabIndex:-1,ref:O,onBlur:A,onFocus:M,$disabled:o,$readOnly:g,$focused:T,$error:s,id:m,"data-testid":y["data-testid"]},y,{children:e.jsx(Eh,{ref:F,disabled:o,onChange:I,readOnly:g,focused:k,names:["start-day","start-month","start-year"],value:$,hoverValue:S,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(hu,{variant:"single",initialCalendarDate:$,withButton:p,value:$,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:b,onHover:B,onSelect:_,onDismiss:R,onYearMonthDisplayChange:h,width:t}),onClose:()=>{var e;null===(e=F.current)||void 0===e||e.resetInput(),C(x),D(!1),E(!1),P()},onDismiss:()=>{var e,t;null===(e=F.current)||void 0===e||e.resetInput(),null===(t=O.current)||void 0===t||t.focus(),C(x),D(!1)},customZIndex:v,offset:16})},Ih=q.default.button`
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
                    background-color: ${qs.bg};
                    border: ${Zs["width-010"]} ${Zs.solid}
                        ${qs["border-primary"]};
                    color: ${qs["text-primary"]};

                    :hover {
                        background-color: ${qs["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${qs.bg};
                    border: ${Zs["width-010"]} ${Zs.solid}
                        ${qs.border};
                    color: ${qs["text-primary"]};

                    :hover {
                        background-color: ${qs["bg-hover-neutral"]};
                    }
                `;default:return i.css`
                    background-color: ${qs["bg-primary"]};
                    border: none;
                    color: ${qs["text-inverse"]};

                    :hover {
                        background-color: ${qs["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${qs["bg-disabled"]};
        border: ${Zs["width-010"]} ${Zs.solid}
            ${qs["border-disabled"]};
        color: ${qs["text-disabled"]};
        cursor: not-allowed;
    }
`,_h=U.default.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=G(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(Ih,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),Mh=q.default(_h)`
    margin: ${Qs["spacing-8"]};
`,Ah=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${qs["bg-strong"]};
    border-radius: ${Js.sm};
`,Bh=q.default(Wl.Default)`
    color: ${e=>e.$enableDateClick?qs["text-primary"]:qs.text};
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
`,Rh=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:a,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=r,f=G(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=Zc.toDayjs(n),p=Zc.toDayjs(n).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),g=Zc.isSame(n,_c())&&l?"Today":h.format(s?"ddd":"dddd"),[m,b]=t.useState(!1),v=e=>{u&&u(e),b(!m)},y=()=>{b(!1),c(n)},x=()=>{b(!1),d(n)};return e.jsx(xh,{enabled:!a,isOpen:m,renderElement:()=>e.jsxs(Ah,Object.assign({},f,{children:[e.jsx(Mh,{"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(Yc.isDisabledDay(h,void 0,i)||Zc.isSame(h,i)),"aria-label":"Previous day",onClick:y,styleType:"light",sizeType:"small",children:e.jsx(wd,{})}),e.jsx(Bh,{onClick:()=>!!u&&!a&&b(!m),$enableDateClick:!!u&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||a,children:`${p}, ${g}`}),e.jsx(Mh,{"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(Yc.isDisabledDay(h,void 0,void 0,o)||Zc.isSame(h,o)),"aria-label":"Next day",onClick:x,styleType:"light",sizeType:"small",children:e.jsx($d,{})})]})),renderDropdown:({elementWidth:t})=>e.jsx(hu,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:v,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},zh=q.default.div`
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
                        100% - ${Xs.Spec["body-size-baseline"]} -
                            ${Qs["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Qs["spacing-8"]};
                }
            `}}
`,Ph=q.default.div`
    width: 100%; // Force next flex item to break to next line
`,Lh=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Nh=q.default(u.ArrowRightIcon)`
    color: ${qs.icon};
    width: ${Xs.Spec["body-size-baseline"]};
    height: ${Xs.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Qs["spacing-8"]};
    align-self: center;
`,Hh=q.default.div`
    position: absolute;
    background: ${e=>e.$error?qs["border-error-focus-strong"]:qs["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Qs["spacing-8"]} - (${Xs.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Gs["duration-350"]} ${Gs["ease-standard"]},
        opacity ${Gs["duration-350"]} ${Gs["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return i.css`
                    opacity: 1;
                `;case"end":return i.css`
                    left: calc(50% + ${Qs["spacing-16"]});
                    opacity: 1;
                `;case"none":return i.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return i.css`
                display: none;
            `}}
`,Wh=({children:t,currentActive:r,error:n,className:i,wrap:o})=>{const[a,s]=t;return e.jsxs(zh,{className:i,$wrap:o,children:[e.jsx(Lh,{"data-id":"range-container-elem1-container",children:a}),e.jsx(Nh,{}),o&&e.jsx(Ph,{}),e.jsx(Lh,{"data-id":"range-container-elem2-container",children:s}),e.jsx(Hh,{"data-id":"range-container-indicator",$position:r,$error:n,$wrap:o})]})},Vh=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Yh=q.default(Bf)`
    ${e=>e.$wrap&&i.css`
            padding: ${Qs["spacing-12"]} ${Qs["spacing-16"]};
        `}
`,Uh=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,Kh={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},qh=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:g=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w}=r,$=G(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[C,S]=t.useState(),[j,k]=t.useState(void 0),[D,T]=t.useState(!1),[E,O]=t.useState(!1),F="week"===m,I="fixed-range"===m,[{selectedStart:_,selectedEnd:M,currentFocus:A,calendarOpen:B,isStartDirty:R,isEndDirty:z,focused:P},L]=(({initialState:e,reducers:r,name:n,debug:i})=>{const[o,a]=t.useReducer(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[o,Object.fromEntries(Object.keys(r).map((e=>[e,t=>{i&&Vh(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Kh,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:F?"none":I?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),N=t.useRef(!1),H=t.useRef(null),W=t.useRef(null),V=t.useRef(null),Y=t.useRef(null),U=(({maxWidth:e,targetRef:r})=>{const[n,i]=t.useState(!1);return Xe({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),n})({maxWidth:320,targetRef:H});t.useEffect((()=>{L.resetRange({start:Qc.sanitizeInput(c),end:Qc.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?S(_):"end"===A&&S(M)}),[A]);const K=e=>{var t,r,n;"Enter"!==e.code||g||(_&&M?(L.done({start:_,end:M}),null==u||u(_,M)):(L.dismiss(),null===(t=H.current)||void 0===t||t.focus(),null===(r=V.current)||void 0===r||r.resetPlaceholder(),null===(n=Y.current)||void 0===n||n.resetPlaceholder()))},q=e=>{var t;if(le(e))return void(N.current=!0);if(L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),N.current=!1,!e)return void(g||M||!z||(L.resetRange({start:"",end:""}),null==u||u("","")));if(!M)return void L.focus("end");if(_c(e).isAfter(M,"day"))L.reselectEnd();else{if(z)return g?void 0:(L.done({start:e,end:M}),void(null==u||u(e,M)));L.focus("end")}},X=e=>{var t,r;if(le(e))return void(N.current=!0);if(_c(e).isBefore(_,"day"))return L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),void L.reselectEnd();if(L.changeEnd(e),null===(r=W.current)||void 0===r||r.setCalendarDate(e),e){if(_)return g?void 0:(L.done({start:_,end:e}),void(null==u||u(_,e)));L.focus("start")}else g||_||!R||(L.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{var t;if(le(e))return void(N.current=!0);if(L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),N.current=!1,!e)return void(g?L.changeEnd(""):(L.resetRange({start:"",end:""}),null==u||u("","")));const r=_c(e).format("YYYY-MM-DD"),n=_c(r).add(b-1,"day").format("YYYY-MM-DD");return L.changeStart(r),L.changeEnd(n),N.current=!1,g?void 0:(L.done({start:r,end:n}),void(null==u||u(r,n)))},Q=()=>{v||o||P||(L.focus("start"),null==f||f())},J=e=>{var t,r;P&&!B&&H.current&&H.current.contains(e.relatedTarget)&&(L.blur(),T(!1),O(!1),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder(),null==h||h())},ee=e=>t=>{t.stopPropagation(),v||(L.focus(e),te(),re(),P||null==f||f())},te=()=>{if(F){const e=Zc.toDayjs(_).startOf("week").format("YYYY-MM-DD");T(!0),O(!0),S(e)}},re=()=>{I&&(O(!0),S(_))},ne=e=>{var t;e&&!N.current||(L.resetStart(),null===(t=V.current)||void 0===t||t.resetInput())},ie=e=>{var t;e&&!N.current||(L.resetEnd(),null===(t=Y.current)||void 0===t||t.resetInput())},oe=e=>{switch(m){case"week":(e=>{const t=_c(e).startOf("week").format("YYYY-MM-DD"),r=_c(e).endOf("week").format("YYYY-MM-DD");if(L.changeStart(t),L.changeEnd(r),N.current=!1,!g)L.done({start:t,end:r}),null==u||u(t,r)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?q(e):"end"===A&&X(e)}},ae=e=>{var t;switch(null===(t=H.current)||void 0===t||t.focus(),e){case"reset":L.cancel();break;case"confirmed":L.done({start:_,end:M}),null==u||u(_,M)}},se=e=>{k(e)},le=e=>!x&&e&&Qc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===A?j:void 0,end:"end"===A?j:void 0};break;case"week":if(!j)return;t={start:_c(j).startOf("week").format("YYYY-MM-DD"),end:_c(j).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!j)return;t={start:_c(j).format("YYYY-MM-DD"),end:_c(j).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(xh,{enabled:!v&&!o,isOpen:B,onClose:()=>{var e,t;L.blur(),T(!1),O(!1),null===(e=V.current)||void 0===e||e.resetPlaceholder(),null===(t=Y.current)||void 0===t||t.resetPlaceholder(),null==h||h()},onDismiss:()=>{var e,t,r;L.dismiss(),null===(e=H.current)||void 0===e||e.focus(),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e.jsx(Yh,Object.assign({ref:H,tabIndex:-1,onFocus:Q,onBlur:J,$focused:P,$disabled:o,$readOnly:v,$error:s,$wrap:U,id:y,"data-testid":$["data-testid"],onKeyDown:K},$,{children:e.jsxs(Wh,{currentActive:A,wrap:U,error:s,children:[e.jsx(Uh,{$wrap:U,children:e.jsx(Eh,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:_,disabled:o,readOnly:D||v,focused:"start"===A,hoverValue:ce("start"),onChange:I?Z:q,onFocus:ee("start"),onBlur:ne,hideInputKeyboard:l})}),e.jsx(Uh,{$wrap:U,children:e.jsx(Eh,{ref:Y,placeholder:"To",names:["end-day","end-month","end-year"],value:M,disabled:o,readOnly:E||v,focused:"end"===A,hoverValue:ce("end"),onChange:X,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})})]})})),renderDropdown:({elementWidth:t})=>e.jsx(hu,{ref:W,variant:m,initialCalendarDate:C,withButton:g,value:_,endValue:M,selectWithinRange:R||z,currentFocus:A,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:x,onSelect:oe,onDismiss:ae,onHover:se,onYearMonthDisplayChange:p,numberOfDays:b,width:t}),customZIndex:w,offset:16})},Xh=q.default.div`
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
`,Gh=U.default.forwardRef(((t,r)=>{const n=i.useTheme(),{xxlCols:o,xlCols:a,lgCols:s,mdCols:l,smCols:c,xsCols:d,xxsCols:u}=t,f=G(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e.jsx(Xh,Object.assign({ref:r},(()=>{const e=Ds["xxl-column"]({theme:n}),t=Ds["xl-column"]({theme:n}),r=Ds["lg-column"]({theme:n}),i=Ds["md-column"]({theme:n}),f=Ds["sm-column"]({theme:n}),p=Ds["xs-column"]({theme:n}),g=Ds["xxs-column"]({theme:n}),m=h(o||a||s||l||c||d||u,e,"xxl"),b=h(a||s||l||c||d||u,t,"xl"),v=h(s||l||c||d||u,r,"lg"),y=h(l||c||d||u,i,"md"),x=h(c||d||u,f,"sm"),w=h(d||u,p,"xs"),$=h(u,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),f))})),Zh={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Qh=e=>Object.keys(Zh).reduce(((t,r)=>{const n=Zh[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Jh={MaxWidth:Qh("max-width"),MinWidth:Qh("min-width")},ep=Zh,tp=q.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Jh.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Jh.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,rp=U.default.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=G(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(tp,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=np(o||i||n),a=np(e),s=np(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),np=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},ip=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||qs.border(e);const r=encodeURIComponent(t),n=e.$thickness||1,o=n+1;return i.css`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${o}" stroke-dasharray="4 4" /></svg>');
    `},op=q.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${ip}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||qs.border};
                `}}}
`,ap=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:f,xxlCols:h,mobileCols:p,tabletCols:g,desktopCols:m}=t,b=G(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==g||void 0!==m;switch(i){case"flex":return e.jsx(op,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e.jsx(rp,Object.assign({className:a,mobileCols:p,tabletCols:g,desktopCols:m},b,{children:e.jsx(op,{$thickness:r,$lineStyle:n,$color:o})})):e.jsx(Gh,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=f||i;return{xxlCols:h||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e.jsx(op,{$thickness:r,$lineStyle:n,$color:o})}))}},sp=q.default.div`
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
`,lp=q.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?qs["overlay-subtle"]:qs["overlay-strong"]};
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
`,cp=({show:r=!1,rootId:n,onOverlayClick:i,children:o,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[f,h]=t.useState(null),[p,m]=t.useState(),[b]=t.useState((()=>Jc.generate())),v=g.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=o&&U.default.cloneElement(o,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",C=null!=d?d:p?99999:99998;(e=>{const r=g.useFloatingTree();t.useEffect((()=>{if(!r)return;const t={zIndex:e};r.events.emit(mh.Change,t)}),[r,e]),t.useEffect((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(mh.Change,t)};return null==r||r.events.on(mh.Ready,t),()=>null==r?void 0:r.events.off(mh.Ready,t)}),[r,e])})(C),t.useEffect((()=>(D(),h(j()),()=>{F(),E().length<1&&T("remove")})),[]),t.useEffect((()=>{if(r){const e=k();S(e),O();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{F();const e=setTimeout((()=>{E().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{y.current=e,m(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>E().length>0,D=()=>{if(!document.getElementById(up)){const e=document.createElement("style");e.id=up;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${fp} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${fp}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(fp);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(fp):document.body.classList.add(fp)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},O=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},F=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},I=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||i&&c&&(e.preventDefault(),i())};return f?K.default.createPortal(e.jsx(sp,{id:$,"data-testid":$,$show:r,$zIndex:C,children:o&&e.jsx(g.FloatingNode,{id:v,children:e.jsx(lp,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:s,$disableTransition:l,onClick:I,children:w})})}),f):null},dp=t=>e.jsx(g.FloatingTree,{children:e.jsx(cp,Object.assign({},t))}),up="lifesg-ds-overlay-stylesheet",fp="lifesg-ds-overlay-open",hp=q.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${qs.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${qs.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?i.css`
            right: 0;
            transition: all ${Gs["duration-800"]} ${Gs["ease-exit"]};
        `:i.css`
        right: -100%;
        transition: all ${Gs["duration-800"]} ${Gs["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${Js.md};
    border-bottom-left-radius: ${Js.md};
    overflow: hidden;

    ${tl.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${tl.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,pp=q.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${Qs["spacing-16"]};
    padding: ${Qs["spacing-32"]} ${Qs["spacing-16"]}
        ${Qs["spacing-16"]};
    background-color: ${qs.bg};
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};

    ${tl.MaxWidth.lg} {
        gap: ${Qs["spacing-8"]};
        padding: ${Qs["spacing-32"]} ${Qs["spacing-20"]}
            ${Qs["spacing-16"]};
    }
`,gp=q.default(il)`
    color: ${qs.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${qs["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,mp=q.default(exports.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,bp=q.default.div`
    flex: 1;
    overflow-y: auto;
`,vp=({className:t,progress:r,color:n,"data-testid":i})=>e.jsx(yp,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e.jsx("progress",{value:100*r,max:100})}),yp=q.default.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):qs["icon-primary-subtle"](e),i.css`
            border: ${Zs["width-010"]} ${Zs.solid} ${r};
            border-radius: ${Js.sm};

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
`,xp=q.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${tl.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,wp=r=>{var{id:n="modal",show:i,animationFrom:o="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=r,f=G(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=t.useState(),[g,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),m(window.visualViewport.offsetTop)}};return e.jsx(dp,{"data-testid":`${n}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c,children:e.jsx(xp,Object.assign({show:i,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},f,{children:a}))})},$p=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${qs.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${tl.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Cp=q.default(il)`
    position: absolute;
    top: var(--close-button-top-inset, ${Qs["spacing-16"]});
    right: var(--close-button-right-inset, ${Qs["spacing-16"]});
    padding: 0;
    color: ${qs.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${tl.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Qs["spacing-20"]});
    }
`,Sp=t=>{var{id:r="modal-box",children:n,onClose:i,showCloseButton:o=!0}=t,a=G(t,["id","children","onClose","showCloseButton"]);return e.jsxs($p,Object.assign({"data-testid":r},a,{onClick:e=>{e.stopPropagation()},children:[o&&e.jsx(Cp,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e.jsx(m.CrossIcon,{})}),n]}))},jp=Object.assign(wp,{Box:Sp}),kp=i.css`
    ${e=>`\n        ${tl.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${el["sm-max"](e)}px)\n    `}
`,Dp=i.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${el["sm-max"](e)}px)\n    `}
`,Tp=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>i.css`
            ${Zs.Util["dashed-default"]({radius:Js.sm,thickness:Zs["width-040"],colour:e.$disabled?qs["border-disabled"]:qs.border})}

            background-color: ${e.$disabled?qs["bg-disabled"]:qs.bg};
        `}
    height: 14.125rem;
`,Ep=q.default(Wl.Default)`
    width: fit-content;
    margin: 0 ${Qs["spacing-20"]};

    :disabled {
        border-color: ${qs["border-strong"]};
    }
`,Op=q.default(_h)`
    position: absolute;
    top: ${Qs["spacing-16"]};
    right: ${Qs["spacing-16"]};

    :disabled {
        border-color: ${qs["border-strong"]};
    }
`,Fp=q.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Qs["spacing-16"]}) * 2);
    height: 100%;
`,Ip=q.default.div`
    background: ${qs["bg-primary-subtlest"]};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    margin: 0 ${Qs["spacing-20"]};
    padding: ${Qs["spacing-16"]};
    display: flex;
    gap: ${Qs["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,_p=q.default(exports.Typography.BodySM)`
    margin-top: ${Qs["spacing-16"]};
`,Mp=q.default(jp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Ap=q.default.div`
    width: 100%;
    margin: auto;
    padding: ${Qs["layout-xxl"]} ${Qs["layout-sm"]};

    ${kp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Bp=q.default(jp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Qs["spacing-16"]};

    ${kp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Qs["spacing-8"]};
        --close-button-right-inset: ${Qs["spacing-20"]};
    }
`,Rp=q.default.h2`
    ${Xs["body-baseline-semibold"]}
    color: ${qs.text};
    margin-bottom: ${Qs["spacing-16"]};
    text-align: center;

    ${kp} {
        ${Xs["body-md-semibold"]}
        margin: ${Qs["spacing-12"]} 0;
    }
`,zp=q.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Js.lg};
    overflow: hidden;

    ${kp} {
        border-radius: 0;
        flex: 1;
    }

    ${Dp} {
        background: ${qs["bg-strong"]};
    }
`,Pp=q.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${qs["bg-stronger"]};
    margin: auto;

    ${kp} {
        aspect-ratio: 4/3;
    }
    ${tl.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Dp} {
        width: auto;
        height: 100%;
    }
`,Lp=q.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${qs["border-strong"]};
    pointer-events: none;

    ${kp} {
        width: calc(100% - ${Qs["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Np=q.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Qs["spacing-16"]};

    ${tl.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Qs["spacing-16"]} ${Qs["spacing-24"]}
            ${Qs["spacing-48"]};
        gap: ${Qs["spacing-16"]};
    }

    ${Dp} {
        flex-direction: row;
        margin: ${Qs["spacing-16"]} ${Qs["spacing-20"]};
    }
`,Hp=q.default(Wl.Default)`
    width: 8.5rem;
    ${tl.MaxWidth.sm} {
        width: 100%;
    }
    ${Dp} {
        height: 2.5rem;
    }
`,Wp=q.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Vp=q.default.canvas`
    cursor: crosshair;
`,Yp=t.lazy((()=>Z(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.ea10d2ce.js")}))).ESignatureCanvas}})))),Up=r=>{const{description:n,id:o,loadingProgress:a,loadingLabel:s="Uploading...",onChange:l,value:c,disabled:d}=r,f=G(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[h,p]=t.useState(!1),g=t.useRef(null),[m,b]=t.useState(c),v=i.useTheme(),y=el["sm-max"]({theme:v}),x=vc.useMediaQuery({maxWidth:y}),w=vc.useMediaQuery({maxHeight:y,orientation:"landscape"}),$=()=>{var e;null===(e=g.current)||void 0===e||e.clear()},C=()=>{if(g.current){const e=g.current.export();b(e),p(!1),null==l||l(e)}};t.useEffect((()=>{b(c)}),[c]);return e.jsxs("div",Object.assign({},f,{children:[e.jsx(Tp,{$disabled:d,children:"number"==typeof a?e.jsxs(Ip,{children:[s&&e.jsx(exports.Typography.BodyMD,{children:s}),e.jsx(vp,{progress:null!=a?a:0,"data-testid":`${o||"e-signature"}-progress-bar`})]}):m?e.jsxs(e.Fragment,{children:[e.jsx(Fp,{src:m,alt:"Signature preview"}),e.jsx(Op,{styleType:"light",onClick:()=>p(!0),id:o,"aria-label":"Edit signature",disabled:d,children:e.jsx(u.PencilIcon,{})})]}):e.jsx(Ep,{type:"button",styleType:"secondary","aria-label":"Add signature",id:o,onClick:()=>p(!0),disabled:d,children:"Add signature"})}),e.jsx(Mp,{"data-testid":"signature-modal",show:h,children:e.jsx(Ap,{children:e.jsxs(Bp,{onClose:()=>p(!1),children:[e.jsx(Rp,{children:"Signature"}),e.jsx(zp,{children:e.jsxs(Pp,{children:[e.jsx(Lp,{}),e.jsx(t.Suspense,{fallback:null,children:h&&e.jsx(Yp,{ref:g,baseImageDataURL:m})})]})}),e.jsxs(Np,{children:[e.jsx(Hp,{as:w?vd.Small:vd.Default,type:"button",styleType:x&&!w?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:$,children:"Clear"}),e.jsx(Hp,{as:w?Wl.Small:Wl.Default,type:"button",onClick:C,children:"Save"})]})]})})}),n?e.jsx(_p,{children:n}):null]}))},Kp="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",qp="Submit",Xp="Rate your experience",Gp=5,Zp=q.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Qp=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${qs["icon-primary"]};
    ${Zp}:focus-visible + & {
        outline: ${Zs["width-020"]} ${Zs.solid}
            ${qs["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${Js.sm};
    }
`,Jp=q.default(b.StarIcon)`
    ${Qp}
`,eg=q.default(v.StarFillIcon)`
    ${Qp}
`,tg=q.default.label`
    margin: 0 ${Qs["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${tl.MaxWidth.md} {
        margin: 0 ${Qs["spacing-8"]};
    }
`,rg=q.default.div`
    display: flex;
    justify-content: center;
    margin: ${Qs["spacing-8"]} ${Qs["spacing-16"]};
`,ng=t=>{const{description:r,rating:n,onRatingChange:i}=t,o=t=>{const r=`${t} star${1===t?"":"s"}`;return t<=n?e.jsx(eg,{"aria-label":r}):e.jsx(Jp,{"aria-label":r})};return e.jsx(rg,{role:"radiogroup","aria-label":r,children:[...Array(Gp)].map(((t,r)=>{const a=r+1;return e.jsxs(tg,{children:[e.jsx(Zp,{type:"radio",name:"star",checked:a===n,onChange:()=>(e=>{i(e)})(a)}),o(a)]},a)}))})},ig=q.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${tl.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,og=q.default.div`
    border-top: 1px solid ${qs.border};
    border-bottom: 1px solid ${qs.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${tl.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,ag=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${tl.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,sg=q.default(Wl.Default)`
    margin-top: 1rem;
    width: 100%;
`,lg=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${Zs.Util["dashed-default"]({radius:Js.sm,thickness:Zs["width-040"],colour:qs.border})}
                padding: ${Qs["spacing-32"]};

                ${tl.MaxWidth.sm} {
                    padding: ${Qs["spacing-32"]} ${Qs["spacing-20"]};
                }
            `}}
`,cg=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Qs["spacing-32"]};
`,dg=q.default.p`
    ${Xs["heading-xs-regular"]}
    color: ${qs.text};
    margin-bottom: ${Qs["spacing-8"]};
`,ug=q.default.div`
    ${Xl({textSize:"heading-xs"})}
    color: ${qs.text};
`,fg=q.default.p`
    ${Xs["body-md-regular"]}
    color: ${qs["text-subtler"]};
`,hg=q.default.div`
    ${Xl({textSize:"body-md"})}
    color: ${qs["text-subtler"]};
`,pg=q.default.ul`
    list-style-type: none;
`;var gg;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(gg||(gg={}));const mg=({src:t,alt:r,className:n,"data-testid":i})=>e.jsx("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),bg=q.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Qs["spacing-16"]};
    }
`,vg=q.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${Qs["spacing-16"]} ${Qs["spacing-32"]};
    cursor: pointer;

    background: ${qs["bg-primary-subtlest"]};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};

    ${tl.MaxWidth.lg} {
        padding: ${Qs["spacing-16"]};
    }

    :hover {
        background: ${qs["bg-hover"]};
    }
`,yg=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${tl.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${tl.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,xg=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,wg=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${tl.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,$g=q.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${Qs["spacing-8"]};

    ${Xs["body-md-regular"]}
    color: ${qs.text};

    ${tl.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${Qs["spacing-8"]};

        ${ol(2)}
    }
`,Cg=q.default.div`
    ${Xs["body-md-regular"]}
    color: ${qs.text};

    ${tl.MaxWidth.lg} {
        ${ol(2)}
    }
`;q.default(Cg)`
    ${Xs["body-md-regular"]}
    margin-top: ${Qs["spacing-4"]};
`;const Sg=q.default.div`
    ${Xs["body-sm-semibold"]}
    color: ${qs["text-error"]};
`,jg=q.default(Sg)`
    margin-top: ${Qs["spacing-4"]};
    ${tl.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,kg=q.default(Sg)`
    display: none;
    visibility: hidden;
    ${tl.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${Qs["spacing-8"]};
    }
`,Dg=q.default(kl)`
    color: ${qs["icon-primary"]};
`,Tg=q.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Qs["spacing-32"]};

    ${tl.MaxWidth.lg} {
        margin-left: ${Qs["spacing-16"]};
    }
`,Eg=q.default(_h)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Qs["spacing-16"]};
    }
`,Og=q.default.div`
    width: auto;
    margin-right: ${Qs["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${tl.MaxWidth.lg} {
        margin-right: ${Qs["spacing-16"]};
    }
`,Fg=q.default(mg)`
    border-radius: ${Js.sm};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${tl.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,Ig=t.memo((({fileItem:r,onDownload:n})=>{const{id:o,name:a,size:s,errorMessage:l,thumbnailImageDataUrl:c,truncateText:d=!0,ready:f=!0}=r,[h,p]=t.useState(!1),[g,m]=t.useState(!1),b=gg.formatFileSizeDisplay(s),v=i.useTheme(),y=el["sm-max"]({theme:v}),x=vc.useMediaQuery({maxWidth:y}),[w,$]=t.useState(),C=t.useRef(null);t.useEffect((()=>{C.current&&$(x?S(a):a)}),[a,x]);const S=e=>{if(!d)return e;const t=C&&C.current?C.current.getBoundingClientRect().width:0;return ed.truncateTwoLines(e,t,16,1.5)},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(Cg,{ref:C,children:w}),g&&e.jsx(jg,{children:l||"Something went wrong"})]});return e.jsx(bg,{"data-testid":o,children:e.jsxs(vg,{onClick:()=>Z(void 0,void 0,void 0,(function*(){if(f&&!h){p(!0);try{m(!1),yield n(r)}catch(e){m(!0)}finally{p(!1)}}})),children:[(()=>{let t;var r;return c?(r=c,t=e.jsxs(e.Fragment,{children:[e.jsx(Og,{"data-testid":`${o}-thumbnail`,children:e.jsx(Fg,{"data-testid":`${o}-thumbnail-image`,src:r})}),e.jsxs(wg,{children:[e.jsx(xg,{children:j()}),e.jsx($g,{children:b||"-"}),g&&e.jsx(kg,{children:l||"Something went wrong"})]})]})):t=e.jsxs(e.Fragment,{children:[e.jsx(xg,{children:j()}),e.jsx($g,{children:b||"-"}),g&&e.jsx(kg,{children:l||"Something went wrong"})]}),e.jsx(yg,{$hasThumbnail:!!c,children:t})})(),e.jsx(Tg,{children:e.jsx(Eg,{"data-testid":`${o}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`,children:h||!f?e.jsx(Dg,{size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})})})]})})})),_g={activeId:void 0,setActiveId:()=>{}},Mg=t.createContext(_g);var Ag,Bg={exports:{}},Rg={exports:{}},zg={};var Pg,Lg,Ng,Hg,Wg,Vg,Yg,Ug,Kg,qg,Xg,Gg,Zg,Qg,Jg={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function em(){return Lg||(Lg=1,"production"===process.env.NODE_ENV?Rg.exports=function(){if(Ag)return zg;Ag=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return zg.AsyncMode=l,zg.ConcurrentMode=c,zg.ContextConsumer=s,zg.ContextProvider=a,zg.Element=t,zg.ForwardRef=d,zg.Fragment=n,zg.Lazy=p,zg.Memo=h,zg.Portal=r,zg.Profiler=o,zg.StrictMode=i,zg.Suspense=u,zg.isAsyncMode=function(e){return x(e)||y(e)===l},zg.isConcurrentMode=x,zg.isContextConsumer=function(e){return y(e)===s},zg.isContextProvider=function(e){return y(e)===a},zg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},zg.isForwardRef=function(e){return y(e)===d},zg.isFragment=function(e){return y(e)===n},zg.isLazy=function(e){return y(e)===p},zg.isMemo=function(e){return y(e)===h},zg.isPortal=function(e){return y(e)===r},zg.isProfiler=function(e){return y(e)===o},zg.isStrictMode=function(e){return y(e)===i},zg.isSuspense=function(e){return y(e)===u},zg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},zg.typeOf=y,zg}():Rg.exports=(Pg||(Pg=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case o:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,j=d,k=n,D=p,T=h,E=r,O=o,F=i,I=u,_=!1;function M(e){return y(e)===c}Jg.AsyncMode=x,Jg.ConcurrentMode=w,Jg.ContextConsumer=$,Jg.ContextProvider=C,Jg.Element=S,Jg.ForwardRef=j,Jg.Fragment=k,Jg.Lazy=D,Jg.Memo=T,Jg.Portal=E,Jg.Profiler=O,Jg.StrictMode=F,Jg.Suspense=I,Jg.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||y(e)===l},Jg.isConcurrentMode=M,Jg.isContextConsumer=function(e){return y(e)===s},Jg.isContextProvider=function(e){return y(e)===a},Jg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Jg.isForwardRef=function(e){return y(e)===d},Jg.isFragment=function(e){return y(e)===n},Jg.isLazy=function(e){return y(e)===p},Jg.isMemo=function(e){return y(e)===h},Jg.isPortal=function(e){return y(e)===r},Jg.isProfiler=function(e){return y(e)===o},Jg.isStrictMode=function(e){return y(e)===i},Jg.isSuspense=function(e){return y(e)===u},Jg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Jg.typeOf=y}()),Jg)),Rg.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function tm(){if(Hg)return Ng;Hg=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Ng=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},Ng}function rm(){if(Vg)return Wg;Vg=1;return Wg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function nm(){return Ug?Yg:(Ug=1,Yg=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var im=em();Bg.exports=function(){if(Gg)return Xg;Gg=1;var e=em(),t=tm(),r=rm(),n=nm(),i=function(){if(qg)return Kg;qg=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=rm(),r={},n=nm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Kg=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Xg=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,i,o,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,i){var o=e[t];return s(o)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return b(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,i,o,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return p((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,i,o,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(i,o,a,c,y(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(i,o,a,s,l){var c=i[o],d=v(c);if("object"!==d)return new h("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var f in u){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,u,f,p){if(c=c||d,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function g(e){return p((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},Xg}()(im.isElement,!0)}else Bg.exports=function(){if(Qg)return Zg;Qg=1;var e=rm();function t(){}function r(){}return r.resetWarningCache=t,Zg=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var om=Oi(Bg.exports),am=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function sm(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=am.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var lm=[".DS_Store","Thumbs.db"];function cm(e){return"object"==typeof e&&null!==e}function dm(e){return pm(e.target.files).map((function(e){return sm(e)}))}function um(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return sm(e)}))]}}))}))}function fm(e,t){return Z(this,void 0,void 0,(function(){var r;return Q(this,(function(n){switch(n.label){case 0:return e.items?(r=pm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(gm))]):[3,2];case 1:return[2,hm(mm(n.sent()))];case 2:return[2,hm(pm(e.files).map((function(e){return sm(e)})))]}}))}))}function hm(e){return e.filter((function(e){return-1===lm.indexOf(e.name)}))}function pm(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function gm(e){if("function"!=typeof e.webkitGetAsEntry)return bm(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?ym(t):bm(e)}function mm(e){return e.reduce((function(e,t){return ee(ee([],J(e),!1),J(Array.isArray(t)?mm(t):[t]),!1)}),[])}function bm(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=sm(t);return Promise.resolve(r)}function vm(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){return[2,e.isDirectory?ym(e):xm(e)]}))}))}function ym(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return Z(o,void 0,void 0,(function(){var o,a,s;return Q(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(vm)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function xm(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=sm(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function wm(e){return function(e){if(Array.isArray(e))return Dm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||km(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Cm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$m(Object(r),!0).forEach((function(t){Sm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Sm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function jm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||km(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function km(e,t){if(e){if("string"==typeof e)return Dm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Dm(e,t):void 0}}function Dm(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Tm=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Em=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Om=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Fm={code:"too-many-files",message:"Too many files"};function Im(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:Tm(t)]}function _m(e,t,r){if(Mm(e.size))if(Mm(t)&&Mm(r)){if(e.size>r)return[!1,Em(r)];if(e.size<t)return[!1,Om(t)]}else{if(Mm(t)&&e.size<t)return[!1,Om(t)];if(Mm(r)&&e.size>r)return[!1,Em(r)]}return[!0,null]}function Mm(e){return null!=e}function Am(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Bm(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Rm(e){e.preventDefault()}function zm(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!Am(e)&&t&&t.apply(void 0,[e].concat(n)),Am(e)}))}}function Pm(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Lm(e){return/^.*\.[\w]+$/.test(e)}var Nm=["children"],Hm=["open"],Wm=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Vm=["refKey","onChange","onClick"];function Ym(e){return function(e){if(Array.isArray(e))return qm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Km(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Um(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Km(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Km(e,t){if(e){if("string"==typeof e)return qm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?qm(e,t):void 0}}function qm(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Xm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Gm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Xm(Object(r),!0).forEach((function(t){Zm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xm(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Zm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Qm(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Jm=t.forwardRef((function(e,r){var n=e.children,i=rb(Qm(e,Nm)),o=i.open,a=Qm(i,Hm);return t.useImperativeHandle(r,(function(){return{open:o}}),[o]),U.default.createElement(t.Fragment,null,n(Gm(Gm({},a),{},{open:o})))}));Jm.displayName="Dropzone";var eb={disabled:!1,getFilesFromEvent:function(e){return Z(this,void 0,void 0,(function(){return Q(this,(function(t){return cm(e)&&cm(e.dataTransfer)?[2,fm(e.dataTransfer,e.type)]:function(e){return cm(e)&&cm(e.target)}(e)?[2,dm(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,um(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Jm.defaultProps=eb,Jm.propTypes={children:om.func,accept:om.objectOf(om.arrayOf(om.string)),multiple:om.bool,preventDropOnDocument:om.bool,noClick:om.bool,noKeyboard:om.bool,noDrag:om.bool,noDragEventsBubbling:om.bool,minSize:om.number,maxSize:om.number,maxFiles:om.number,disabled:om.bool,getFilesFromEvent:om.func,onFileDialogCancel:om.func,onFileDialogOpen:om.func,useFsAccessApi:om.bool,autoFocus:om.bool,onDragEnter:om.func,onDragLeave:om.func,onDragOver:om.func,onDrop:om.func,onDropAccepted:om.func,onDropRejected:om.func,onError:om.func,validator:om.func};var tb={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function rb(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Gm(Gm({},eb),e),n=r.accept,i=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,s=r.minSize,l=r.multiple,c=r.maxFiles,d=r.onDragEnter,u=r.onDragLeave,f=r.onDragOver,h=r.onDrop,p=r.onDropAccepted,g=r.onDropRejected,m=r.onFileDialogCancel,b=r.onFileDialogOpen,v=r.useFsAccessApi,y=r.autoFocus,x=r.preventDropOnDocument,w=r.noClick,$=r.noKeyboard,C=r.noDrag,S=r.noDragEventsBubbling,j=r.onError,k=r.validator,D=t.useMemo((function(){return function(e){if(Mm(e))return Object.entries(e).reduce((function(e,t){var r=jm(t,2),n=r[0],i=r[1];return[].concat(wm(e),[n],wm(i))}),[]).filter((function(e){return Pm(e)||Lm(e)})).join(",")}(n)}),[n]),T=t.useMemo((function(){return function(e){return Mm(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=jm(e,2),r=t[0],n=t[1],i=!0;return Pm(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(Lm)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=jm(t,2),n=r[0],i=r[1];return Cm(Cm({},e),{},Sm({},n,i))}),{})}]:e}(n)}),[n]),E=t.useMemo((function(){return"function"==typeof b?b:ib}),[b]),O=t.useMemo((function(){return"function"==typeof m?m:ib}),[m]),F=t.useRef(null),I=t.useRef(null),_=Um(t.useReducer(nb,tb),2),M=_[0],A=_[1],B=M.isFocused,R=M.isFileDialogActive,z=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),P=function(){!z.current&&R&&setTimeout((function(){I.current&&(I.current.files.length||(A({type:"closeDialog"}),O()))}),300)};t.useEffect((function(){return window.addEventListener("focus",P,!1),function(){window.removeEventListener("focus",P,!1)}}),[I,R,O,z]);var L=t.useRef([]),N=function(e){F.current&&F.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",Rm,!1),document.addEventListener("drop",N,!1)),function(){x&&(document.removeEventListener("dragover",Rm),document.removeEventListener("drop",N))}}),[F,x]),t.useEffect((function(){return!i&&y&&F.current&&F.current.focus(),function(){}}),[F,y,i]);var H=t.useCallback((function(e){j?j(e):console.error(e)}),[j]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[].concat(Ym(L.current),[e.target]),Bm(e)&&Promise.resolve(o(e)).then((function(t){if(!Am(e)||S){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=jm(Im(e,r),1)[0],o=jm(_m(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:D,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:k});A({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[o,d,H,S,D,s,a,l,c,k]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=Bm(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=L.current.filter((function(e){return F.current&&F.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Bm(e)&&u&&u(e))}),[F,u,S]),U=t.useCallback((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Um(Im(e,D),2),i=t[0],o=t[1],l=Um(_m(e,s,a),2),c=l[0],d=l[1],u=k?k(e):null;if(i&&c&&!u)r.push(e);else{var f=[o,d];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[Fm]})})),r.splice(0)),A({acceptedFiles:r,fileRejections:n,type:"setFiles"}),h&&h(r,n,t),n.length>0&&g&&g(n,t),r.length>0&&p&&p(r,t)}),[A,l,D,s,a,c,h,p,g,k]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[],Bm(e)&&Promise.resolve(o(e)).then((function(t){Am(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[o,U,H,S]),q=t.useCallback((function(){if(z.current){A({type:"openDialog"}),E();var e={multiple:l,types:T};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(O(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(z.current=!1,I.current?(I.current.value=null,I.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else I.current&&(A({type:"openDialog"}),E(),I.current.value=null,I.current.click())}),[A,E,O,v,U,H,T,l]),X=t.useCallback((function(e){F.current&&F.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[F,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return C?null:J(e)},re=function(e){S&&e.stopPropagation()},ne=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Qm(e,Wm);return Gm(Gm(Zm({onKeyDown:ee(zm(o,X)),onFocus:ee(zm(a,G)),onBlur:ee(zm(s,Z)),onClick:J(zm(l,Q)),onDragEnter:te(zm(c,W)),onDragOver:te(zm(d,V)),onDragLeave:te(zm(u,Y)),onDrop:te(zm(f,K)),role:"string"==typeof n&&""!==n?n:"presentation"},r,F),i||$?{}:{tabIndex:0}),h)}}),[F,X,G,Z,Q,W,V,Y,K,$,C,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),oe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=Qm(e,Vm);return Gm(Gm({},Zm({accept:D,multiple:l,type:"file",style:{display:"none"},onChange:J(zm(n,K)),onClick:J(zm(i,ie)),tabIndex:-1},r,I)),o)}}),[I,n,l,K,i]);return Gm(Gm({},M),{},{isFocused:B&&!i,getRootProps:ne,getInputProps:oe,rootRef:F,inputRef:I,open:J(q)})}function nb(e,t){switch(t.type){case"focus":return Gm(Gm({},e),{},{isFocused:!0});case"blur":return Gm(Gm({},e),{},{isFocused:!1});case"openDialog":return Gm(Gm({},tb),{},{isFileDialogActive:!0});case"closeDialog":return Gm(Gm({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Gm(Gm({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Gm(Gm({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Gm({},tb);default:return e}}function ib(){}const ob=q.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${Zs.Util["dashed-default"]({radius:Js.sm,thickness:Zs["width-040"],colour:qs.border})}
                padding: ${Qs["spacing-32"]};

                ${tl.MaxWidth.sm} {
                    padding: ${Qs["spacing-32"]} ${Qs["spacing-20"]};
                }
            `}}
`,ab=q.default.input`
    display: none;
`,sb=q.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${qs["bg-primary-subtler"]};
    ${Zs.Util["dashed-default"]({radius:Js.sm,thickness:Zs["width-040"],colour:qs["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,lb=q.default(exports.Typography.BodyMD)`
    color: ${qs["text-primary"]};
    text-align: center;
`,cb=q.default(y.CloudArrowUpFillIcon)`
    color: ${qs["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,db=t.forwardRef((({children:r,accept:n,capture:i,multiple:o,id:a,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":f},h)=>{const p=t.useRef(null),{getRootProps:g,isDragActive:m}=rb({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},p.current),{openFileDialog:()=>{p.current&&(p.current.value="",p.current.click())}})));return e.jsxs(ob,Object.assign({id:a,"data-testid":f||"dropzone",$border:c,className:s},g(),{children:[e.jsx(ab,{type:"file",name:l,ref:p,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:o,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),r,m&&e.jsxs(sb,{children:[e.jsx(cb,{}),e.jsx(lb,{weight:"semibold",children:"Drop files here"})]})]}))}));const ub="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function fb(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function hb(e){return"nodeType"in e}function pb(e){var t,r;return e?fb(e)?e:hb(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function gb(e){const{Document:t}=pb(e);return e instanceof t}function mb(e){return!fb(e)&&e instanceof pb(e).HTMLElement}function bb(e){return e instanceof pb(e).SVGElement}function vb(e){return e?fb(e)?e.document:hb(e)?gb(e)?e:mb(e)||bb(e)?e.ownerDocument:document:document:document}const yb=ub?t.useLayoutEffect:t.useEffect;function xb(e){const r=t.useRef(e);return yb((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function wb(e,r){void 0===r&&(r=[e]);const n=t.useRef(e);return yb((()=>{n.current!==e&&(n.current=e)}),r),n}function $b(e,r){const n=t.useRef();return t.useMemo((()=>{const t=e(n.current);return n.current=t,t}),[...r])}function Cb(e){const r=xb(e),n=t.useRef(null),i=t.useCallback((e=>{e!==n.current&&(null==r||r(e,n.current)),n.current=e}),[]);return[n,i]}function Sb(e){const r=t.useRef();return t.useEffect((()=>{r.current=e}),[e]),r.current}let jb={};function kb(e,r){return t.useMemo((()=>{if(r)return r;const t=null==jb[e]?0:jb[e]+1;return jb[e]=t,e+"-"+t}),[e,r])}function Db(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const Tb=Db(1),Eb=Db(-1);function Ob(e){if(!e)return!1;const{KeyboardEvent:t}=pb(e.target);return t&&e instanceof t}function Fb(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=pb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Ib=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Ib.Translate.toString(e),Ib.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),_b="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Mb(e){return e.matches(_b)?e:e.querySelector(_b)}const Ab={display:"none"};function Bb(e){let{id:t,value:r}=e;return U.default.createElement("div",{id:t,style:Ab},r)}function Rb(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return U.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const zb=t.createContext(null);const Pb={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Lb={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Nb(e){let{announcements:n=Lb,container:i,hiddenTextDescribedById:o,screenReaderInstructions:a=Pb}=e;const{announce:s,announcement:l}=function(){const[e,r]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&r(e)}),[]),announcement:e}}(),c=kb("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const r=t.useContext(zb);t.useEffect((()=>{if(!r)throw new Error("useDndMonitor must be used within a children of <DndContext>");return r(e)}),[e,r])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}})),[s,n])),!d)return null;const f=U.default.createElement(U.default.Fragment,null,U.default.createElement(Bb,{id:o,value:a.draggable}),U.default.createElement(Rb,{id:c,announcement:l}));return i?r.createPortal(f,i):f}var Hb;function Wb(){}function Vb(e,r){return t.useMemo((()=>({sensor:e,options:null!=r?r:{}})),[e,r])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Hb||(Hb={}));const Yb=Object.freeze({x:0,y:0});function Ub(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Kb(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function qb(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function Xb(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function Gb(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const Zb=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=Gb(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(Kb)};function Qb(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Yb}function Jb(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const ev=Jb(1);const tv={ignoreTransform:!1};function rv(e,t){void 0===t&&(t=tv);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=pb(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function nv(e){return rv(e,{ignoreTransform:!0})}function iv(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(gb(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!mb(i)||bb(i))return r;if(r.includes(i))return r;const o=pb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=pb(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=pb(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function ov(e){const[t]=iv(e,1);return null!=t?t:null}function av(e){return ub&&e?fb(e)?e:hb(e)?gb(e)||e===vb(e).scrollingElement?window:mb(e)?e:null:null:null}function sv(e){return fb(e)?e.scrollX:e.scrollLeft}function lv(e){return fb(e)?e.scrollY:e.scrollTop}function cv(e){return{x:sv(e),y:lv(e)}}var dv;function uv(e){return!(!ub||!e)&&e===document.scrollingElement}function fv(e){const t={x:0,y:0},r=uv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(dv||(dv={}));const hv={x:.2,y:.2};function pv(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=hv);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=fv(e),h={x:0,y:0},p={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+g?(h.y=dv.Backward,p.y=n*Math.abs((t.top+g-o)/g)):!d&&l>=t.bottom-g&&(h.y=dv.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=dv.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=dv.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function gv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function mv(e){return e.reduce(((e,t)=>Tb(e,cv(t))),Yb)}const bv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+sv(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+lv(t)),0)}]];class vv{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=iv(t),n=mv(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of bv)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class yv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function xv(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var wv,$v;function Cv(e){e.preventDefault()}function Sv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(wv||(wv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}($v||($v={}));const jv={start:[$v.Space,$v.Enter],cancel:[$v.Esc],end:[$v.Space,$v.Enter]},kv=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case $v.Right:return{...r,x:r.x+25};case $v.Left:return{...r,x:r.x-25};case $v.Down:return{...r,y:r.y+25};case $v.Up:return{...r,y:r.y-25}}};let Dv=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new yv(vb(t)),this.windowListeners=new yv(pb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(wv.Resize,this.handleCancel),this.windowListeners.add(wv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(wv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=rv),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);ov(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Yb)}handleKeyDown(e){if(Ob(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=jv,coordinateGetter:o=kv,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Yb;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=Eb(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=fv(r),h=gv(r),p={x:Math.min(i===$v.Right?h.right-h.width/2:h.right,Math.max(i===$v.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===$v.Down?h.bottom-h.height/2:h.bottom,Math.max(i===$v.Down?h.top:h.top+h.height/2,d.y))},g=i===$v.Right&&!s||i===$v.Left&&!l,m=i===$v.Down&&!c||i===$v.Up&&!o;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,o=i===$v.Right&&e<=u.x||i===$v.Left&&e>=f.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===$v.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,o=i===$v.Down&&e<=u.y||i===$v.Up&&e>=f.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===$v.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Tb(Eb(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Tv(e){return Boolean(e&&"distance"in e)}function Ev(e){return Boolean(e&&"delay"in e)}Dv.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=jv,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Ov{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=pb(e);return e instanceof t?e:vb(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=vb(o),this.documentListeners=new yv(this.document),this.listeners=new yv(r),this.windowListeners=new yv(pb(o)),this.initialCoordinates=null!=(n=Fb(i))?n:Yb,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(wv.Resize,this.handleCancel),this.windowListeners.add(wv.DragStart,Cv),this.windowListeners.add(wv.VisibilityChange,this.handleCancel),this.windowListeners.add(wv.ContextMenu,Cv),this.documentListeners.add(wv.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ev(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Tv(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(wv.Click,Sv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(wv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=Fb(e))?t:Yb,l=Eb(n,s);if(!r&&a){if(Tv(a)){if(null!=a.tolerance&&xv(l,a.tolerance))return this.handleCancel();if(xv(l,a.distance))return this.handleStart()}return Ev(a)&&xv(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===$v.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Fv={move:{name:"pointermove"},end:{name:"pointerup"}};class Iv extends Ov{constructor(e){const{event:t}=e,r=vb(t.target);super(e,Fv,r)}}Iv.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const _v={move:{name:"mousemove"},end:{name:"mouseup"}};var Mv;!function(e){e[e.RightClick=2]="RightClick"}(Mv||(Mv={}));let Av=class extends Ov{constructor(e){super(e,_v,vb(e.event.target))}};Av.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Mv.RightClick&&(null==n||n({event:r}),!0)}}];const Bv={move:{name:"touchmove"},end:{name:"touchend"}};class Rv extends Ov{constructor(e){super(e,Bv)}static setup(){return window.addEventListener(Bv.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Bv.move.name,e)};function e(){}}}var zv,Pv;function Lv(e){let{acceleration:r,activator:n=zv.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=Pv.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:f,threshold:h}=e;const p=function(e){let{delta:t,disabled:r}=e;const n=Sb(t);return $b((e=>{if(r||!n||!e)return Nv;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[dv.Backward]:e.x[dv.Backward]||-1===i.x,[dv.Forward]:e.x[dv.Forward]||1===i.x},y:{[dv.Backward]:e.y[dv.Backward]||-1===i.y,[dv.Forward]:e.y[dv.Forward]||1===i.y}}}),[r,t,n])}({delta:f,disabled:!a}),[g,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,r)=>{e.current=setInterval(t,r)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(n){case zv.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case zv.DraggableRect:return o}}),[n,o,c]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,r=b.current.y*v.current.y;e.scrollBy(t,r)}),[]),$=t.useMemo((()=>l===Pv.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(a&&d.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),n=u[t];if(!n)continue;const{direction:o,speed:a}=pv(e,n,y,r,h);for(const e of["x","y"])p[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return m(),x.current=e,g(w,s),b.current=a,void(v.current=o)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[r,w,i,m,a,s,JSON.stringify(y),JSON.stringify(p),g,d,$,u,JSON.stringify(h)])}Rv.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(zv||(zv={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Pv||(Pv={}));const Nv={x:{[dv.Backward]:!1,[dv.Forward]:!1},y:{[dv.Backward]:!1,[dv.Forward]:!1}};var Hv,Wv;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Hv||(Hv={})),function(e){e.Optimized="optimized"}(Wv||(Wv={}));const Vv=new Map;function Yv(e,t){return $b((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Uv(e){let{callback:r,disabled:n}=e;const i=xb(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Kv(e){return new vv(rv(e),e)}function qv(e,r,n){void 0===r&&(r=Kv);const[i,o]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:n)?i:null;const o=r(e);if(JSON.stringify(t)===JSON.stringify(o))return t;return o}),null),a=function(e){let{callback:r,disabled:n}=e;const i=xb(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=Uv({callback:o});return yb((()=>{o(),e?(null==s||s.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==a||a.disconnect())}),[e]),i}const Xv=[];function Gv(e,r){void 0===r&&(r=[]);const n=t.useRef(null);return t.useEffect((()=>{n.current=null}),r),t.useEffect((()=>{const t=e!==Yb;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?Eb(e,n.current):Yb}function Zv(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const Qv=[];function Jv(e){let{measure:r}=e;const[n,i]=t.useState(null),o=t.useCallback((e=>{for(const{target:t}of e)if(mb(t)){i((e=>{const n=r(t);return e?{...e,width:n.width,height:n.height}:n}));break}}),[r]),a=Uv({callback:o}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return mb(t)?t:e}(e);null==a||a.disconnect(),t&&(null==a||a.observe(t)),i(t?r(t):null)}),[r,a]),[l,c]=Cb(s);return t.useMemo((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const ey=[{sensor:Iv,options:{}},{sensor:Dv,options:{}}],ty={current:{}},ry={draggable:{measure:nv},droppable:{measure:nv,strategy:Hv.WhileDragging,frequency:Wv.Optimized},dragOverlay:{measure:rv}};class ny extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const iy={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ny,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Wb},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ry,measureDroppableContainers:Wb,windowRect:null,measuringScheduled:!1},oy={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Wb,draggableNodes:new Map,over:null,measureDroppableContainers:Wb},ay=t.createContext(oy),sy=t.createContext(iy);function ly(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ny}}}function cy(e,t){switch(t.type){case Hb.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Hb.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Hb.DragEnd:case Hb.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Hb.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new ny(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case Hb.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new ny(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Hb.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new ny(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function dy(e){let{disabled:r}=e;const{active:n,activatorEvent:i,draggableNodes:o}=t.useContext(ay),a=Sb(i),s=Sb(null==n?void 0:n.id);return t.useEffect((()=>{if(!r&&!i&&a&&null!=s){if(!Ob(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Mb(e);if(t){t.focus();break}}}))}}),[i,r,o,s,a]),null}const uy=t.createContext({...Yb,scaleX:1,scaleY:1});var fy;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(fy||(fy={}));const hy=t.memo((function(e){var n,i,o,a;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=ey,collisionDetection:f=Zb,measuring:h,modifiers:p,...g}=e;const m=t.useReducer(cy,void 0,ly),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),r=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),r]}(),[w,$]=t.useState(fy.Uninitialized),C=w===fy.Initialized,{draggable:{active:S,nodes:j,translate:k},droppable:{containers:D}}=b,T=S?j.get(S):null,E=t.useRef({initial:null,translated:null}),O=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==T?void 0:T.data)?e:ty,rect:E}:null}),[S,T]),F=t.useRef(null),[I,_]=t.useState(null),[M,A]=t.useState(null),B=wb(g,Object.values(g)),R=kb("DndDescribedBy",s),z=t.useMemo((()=>D.getEnabled()),[D]),P=function(e){return t.useMemo((()=>({draggable:{...ry.draggable,...null==e?void 0:e.draggable},droppable:{...ry.droppable,...null==e?void 0:e.droppable},dragOverlay:{...ry.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:N,measuringScheduled:H}=function(e,r){let{dragging:n,dependencies:i,config:o}=r;const[a,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=o,u=t.useRef(e),f=function(){switch(d){case Hv.Always:return!1;case Hv.BeforeDragging:return n;default:return!n}}(),h=wb(f),p=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),g=t.useRef(null),m=$b((t=>{if(f&&!n)return Vv;if(!t||t===Vv||u.current!==e||null!=a){const t=new Map;for(let r of e){if(!r)continue;if(a&&a.length>0&&!a.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new vv(c(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,a,n,f,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||p()}),[n,f]),t.useEffect((()=>{a&&a.length>0&&s(null)}),[JSON.stringify(a)]),t.useEffect((()=>{f||"number"!=typeof l||null!==g.current||(g.current=setTimeout((()=>{p(),g.current=null}),l))}),[l,f,p,...i]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:null!=a}}(z,{dragging:C,dependencies:[k.x,k.y],config:P.droppable}),W=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return $b((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(j,S),V=t.useMemo((()=>M?Fb(M):null),[M]),Y=function(){const e=!1===(null==I?void 0:I.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,r=C&&!e&&!t;if("object"==typeof c)return{...c,enabled:r};return{enabled:r}}(),K=function(e,t){return Yv(e,t)}(W,P.draggable.measure);!function(e){let{activeNode:r,measure:n,initialRect:i,config:o=!0}=e;const a=t.useRef(!1),{x:s,y:l}="boolean"==typeof o?{x:o,y:o}:o;yb((()=>{if(!s&&!l||!r)return void(a.current=!1);if(a.current||!i)return;const e=null==r?void 0:r.node.current;if(!e||!1===e.isConnected)return;const t=Qb(n(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const r=ov(e);r&&r.scrollBy({top:t.y,left:t.x})}}),[r,s,l,i,n])}({activeNode:S?j.get(S):null,config:Y.layoutShiftCompensation,initialRect:K,measure:P.draggable.measure});const q=qv(W,P.draggable.measure,K),X=qv(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:j,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=D.getNodeFor(null==(n=G.current.over)?void 0:n.id),Q=Jv({measure:P.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=C?null!=(o=Q.rect)?o:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),re=Qb(ne=te?null:q,Yv(ne));var ne;const ie=Zv(J?pb(J):null),oe=function(e){const r=t.useRef(e),n=$b((t=>e?t&&t!==Xv&&e&&r.current&&e.parentNode===r.current.parentNode?t:iv(e):Xv),[e]);return t.useEffect((()=>{r.current=e}),[e]),n}(C?null!=Z?Z:W:null),ae=function(e,r){void 0===r&&(r=rv);const[n]=e,i=Zv(n?pb(n):null),[o,a]=t.useReducer((function(){return e.length?e.map((e=>uv(e)?i:new vv(r(e),e))):Qv}),Qv),s=Uv({callback:a});return e.length>0&&o===Qv&&a(),yb((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),a())}),[e]),o}(oe),se=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(p,{transform:{x:k.x-re.x,y:k.y-re.y,scaleX:1,scaleY:1},activatorEvent:M,active:O,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=V?Tb(V,k):null,ce=function(e){const[r,n]=t.useState(null),i=t.useRef(e),o=t.useCallback((e=>{const t=av(e.target);t&&n((e=>e?(e.set(t,cv(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){r(t);const a=e.map((e=>{const t=av(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,cv(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),i.current=e}return()=>{r(e),r(t)};function r(e){e.forEach((e=>{const t=av(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),t.useMemo((()=>e.length?r?Array.from(r.values()).reduce(((e,t)=>Tb(e,t)),Yb):mv(e):Yb),[e,r])}(oe),de=Gv(ce),ue=Gv(ce,[q]),fe=Tb(se,de),he=ee?ev(ee,se):null,pe=O&&he?f({active:O,collisionRect:he,droppableRects:L,droppableContainers:z,pointerCoordinates:le}):null,ge=Xb(pe,"id"),[me,be]=t.useState(null),ve=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(te?se:Tb(se,ue),null!=(a=null==me?void 0:me.rect)?a:null,q),ye=t.useCallback(((e,t)=>{let{sensor:n,options:i}=t;if(null==F.current)return;const o=j.get(F.current);if(!o)return;const a=e.nativeEvent,s=new n({active:F.current,activeNode:o,event:a,options:i,context:G,onStart(e){const t=F.current;if(null==t)return;const n=j.get(t);if(!n)return;const{onDragStart:i}=B.current,o={active:{id:t,data:n.data,rect:E}};r.unstable_batchedUpdates((()=>{null==i||i(o),$(fy.Initializing),v({type:Hb.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:o})}))},onMove(e){v({type:Hb.DragMove,coordinates:e})},onEnd:l(Hb.DragEnd),onCancel:l(Hb.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:i,scrollAdjustedTranslate:o}=G.current;let s=null;if(t&&o){const{cancelDrop:r}=B.current;if(s={activatorEvent:a,active:t,collisions:n,delta:o,over:i},e===Hb.DragEnd&&"function"==typeof r){await Promise.resolve(r(s))&&(e=Hb.DragCancel)}}F.current=null,r.unstable_batchedUpdates((()=>{v({type:e}),$(fy.Uninitialized),be(null),_(null),A(null);const t=e===Hb.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=B.current[t];null==e||e(s),y({type:t,event:s})}}))}}r.unstable_batchedUpdates((()=>{_(s),A(e.nativeEvent)}))}),[j]),xe=t.useCallback(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=j.get(n);if(null!==F.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},F.current=n,ye(r,t))}),[j,ye]),we=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:n}=t;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:r(e.handler,t)})))]}),[])),[e,r])}(u,xe);!function(e){t.useEffect((()=>{if(!ub)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),yb((()=>{q&&w===fy.Initializing&&$(fy.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=B.current,{active:t,activatorEvent:n,collisions:i,over:o}=G.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:i,delta:{x:fe.x,y:fe.y},over:o};r.unstable_batchedUpdates((()=>{null==e||e(a),y({type:"onDragMove",event:a})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:i,scrollAdjustedTranslate:o}=G.current;if(!e||null==F.current||!t||!o)return;const{onDragOver:a}=B.current,s=i.get(ge),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:o.x,y:o.y},over:l};r.unstable_batchedUpdates((()=>{be(l),null==a||a(c),y({type:"onDragOver",event:c})}))}),[ge]),yb((()=>{G.current={activatorEvent:M,active:O,activeNode:W,collisionRect:he,collisions:pe,droppableRects:L,draggableNodes:j,draggingNode:J,draggingNodeRect:ee,droppableContainers:D,over:me,scrollableAncestors:oe,scrollAdjustedTranslate:fe},E.current={initial:ee,translated:he}}),[O,W,pe,he,j,J,ee,L,D,me,oe,fe]),Lv({...Y,delta:k,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const $e=t.useMemo((()=>({active:O,activeNode:W,activeNodeRect:q,activatorEvent:M,collisions:pe,containerNodeRect:X,dragOverlay:Q,draggableNodes:j,droppableContainers:D,droppableRects:L,over:me,measureDroppableContainers:N,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:P,measuringScheduled:H,windowRect:ie})),[O,W,q,M,pe,X,Q,j,D,L,me,N,oe,ae,P,H,ie]),Ce=t.useMemo((()=>({activatorEvent:M,activators:we,active:O,activeNodeRect:q,ariaDescribedById:{draggable:R},dispatch:v,draggableNodes:j,over:me,measureDroppableContainers:N})),[M,we,O,q,v,R,j,me,N]);return U.default.createElement(zb.Provider,{value:x},U.default.createElement(ay.Provider,{value:Ce},U.default.createElement(sy.Provider,{value:$e},U.default.createElement(uy.Provider,{value:ve},d)),U.default.createElement(dy,{disabled:!1===(null==l?void 0:l.restoreFocus)})),U.default.createElement(Nb,{...l,hiddenTextDescribedById:R}))})),py=t.createContext(null),gy="button";function my(e){let{id:r,data:n,disabled:i=!1,attributes:o}=e;const a=kb("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(ay),{role:p=gy,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},b=(null==c?void 0:c.id)===r,v=t.useContext(b?uy:py),[y,x]=Cb(),[w,$]=Cb(),C=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:n,handler:i}=t;return e[n]=e=>{i(e,r)},e}),{})),[e,r])}(s,r),S=wb(n);yb((()=>(f.set(r,{id:r,key:a,node:y,activatorNode:w,data:S}),()=>{const e=f.get(r);e&&e.key===a&&f.delete(r)})),[f,r]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:p,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||p!==gy)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[i,p,m,b,g,u.draggable]),isDragging:b,listeners:i?void 0:C,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const by={timeout:25};function vy(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function yy(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function xy(e){return null!==e&&e>=0}const wy=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=vy(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},$y={scaleX:1,scaleY:1},Cy=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...$y}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...$y}:i<r&&i>=a?{x:0,y:s.height+l,...$y}:{x:0,y:0,...$y}};const Sy="Sortable",jy=U.default.createContext({activeIndex:-1,containerId:Sy,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:wy,disabled:{draggable:!1,droppable:!1}});function ky(e){let{children:r,id:n,items:i,strategy:o=wy,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(sy),f=kb(Sy,n),h=Boolean(null!==l.rect),p=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),g=null!=s,m=s?p.indexOf(s.id):-1,b=d?p.indexOf(d.id):-1,v=t.useRef(p),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(p,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(a);yb((()=>{y&&g&&u(p)}),[y,p,g,u]),t.useEffect((()=>{v.current=p}),[p]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:p,overIndex:b,useDragOverlay:h,sortedRects:yy(p,c),strategy:o})),[m,f,w.draggable,w.droppable,x,p,b,c,h,o]);return U.default.createElement(jy.Provider,{value:$},r)}const Dy=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return vy(r,n,i).indexOf(t)},Ty=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},Ey={duration:200,easing:"ease"},Oy="transform",Fy=Ib.Transition.toString({property:Oy,duration:0,easing:"linear"}),Iy={roleDescription:"sortable"};function _y(e){let{animateLayoutChanges:r=Ty,attributes:n,disabled:i,data:o,getNewIndex:a=Dy,id:s,strategy:l,resizeObserverConfig:c,transition:d=Ey}=e;const{items:u,containerId:f,activeIndex:h,disabled:p,disableTransforms:g,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(jy),x=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,p),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...o})),[f,o,w,u]),C=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:j,isOver:k,setNodeRef:D}=function(e){let{data:r,disabled:n=!1,id:i,resizeObserverConfig:o}=e;const a=kb("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(ay),u=t.useRef({disabled:n}),f=t.useRef(!1),h=t.useRef(null),p=t.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:b}={...by,...o},v=wb(null!=m?m:i),y=Uv({callback:t.useCallback((()=>{f.current?(null!=p.current&&clearTimeout(p.current),p.current=setTimeout((()=>{d(Array.isArray(v.current)?v.current:[v.current]),p.current=null}),b)):f.current=!0}),[b]),disabled:g||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=Cb(x),C=wb(r);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),yb((()=>(l({type:Hb.RegisterDroppable,element:{id:i,key:a,disabled:n,node:w,rect:h,data:C}}),()=>l({type:Hb.UnregisterDroppable,key:a,id:i}))),[i]),t.useEffect((()=>{n!==u.current.disabled&&(l({type:Hb.SetDroppableDisabled,id:i,key:a,disabled:n}),u.current.disabled=n)}),[i,a,n,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...c}}),{active:T,activatorEvent:E,activeNodeRect:O,attributes:F,setNodeRef:I,listeners:_,isDragging:M,over:A,setActivatorNodeRef:B,transform:R}=my({id:s,data:$,attributes:{...Iy,...n},disabled:x.draggable}),z=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>e=>{r.forEach((t=>t(e)))}),r)}(D,I),P=Boolean(T),L=P&&!g&&xy(h)&&xy(b),N=!v&&M,H=N&&L?R:null,W=L?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:O,activeIndex:h,overIndex:b,index:w}):null,V=xy(h)&&xy(b)?a({id:s,items:u,activeIndex:h,overIndex:b}):w,Y=null==T?void 0:T.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:f}),K=u!==U.current.items,q=r({active:T,containerId:f,isDragging:M,isSorting:P,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:r,index:n,node:i,rect:o}=e;const[a,s]=t.useState(null),l=t.useRef(n);return yb((()=>{if(!r&&n!==l.current&&i.current){const e=o.current;if(e){const t=rv(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==l.current&&(l.current=n)}),[r,n,i,o]),t.useEffect((()=>{a&&s(null)}),[a]),a}({disabled:!q,index:w,node:j,rect:S});return t.useEffect((()=>{P&&U.current.newIndex!==V&&(U.current.newIndex=V),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[P,V,f,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:T,activeIndex:h,attributes:F,data:$,rect:S,index:w,newIndex:V,items:u,isOver:k,isSorting:P,isDragging:M,listeners:_,node:j,overIndex:b,over:A,setNodeRef:z,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:I,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return Fy;if(N&&!Ob(E)||!d)return;if(P||q)return Ib.Transition.toString({...d,property:Oy});return}()}}function My(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Ay=[$v.Down,$v.Right,$v.Up,$v.Left],By=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(Ay.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case $v.Down:n.top<o.top&&t.push(r);break;case $v.Up:n.top>o.top&&t.push(r);break;case $v.Left:n.left>o.left&&t.push(r);break;case $v.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=qb(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=qb(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(Ub)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Xb(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=iv(l).some(((e,t)=>s[t]!==e)),i=Ry(e,t),o=function(e,t){if(!My(e)||!My(t))return!1;if(!Ry(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Eb(d,c)}}}};function Ry(e,t){return!(!My(e)||!My(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class zy extends Av{}zy.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Py(e.target)}];function Py(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Dv{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Py(e.target)}];const Ly=q.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ny=q.default(mu)`
    color: ${qs.text};
    ${Xl({textSize:"body-md"})}

    ${tl.MaxWidth.sm} {
        display: none;
    }
`,Hy=q.default(Sp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Wy=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${qs.text};
    ${Xl({textSize:"body-md"})}
`,Vy=t=>{var{children:r,visible:n,onMobileClose:o}=t,a=G(t,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",l=i.useTheme(),c=el["sm-max"]({theme:l}),d=vc.useMediaQuery({maxWidth:c}),u=()=>{o&&o()},f=()=>"string"==typeof r?e.jsx(exports.Typography.BodyMD,{children:r}):r;return e.jsxs(e.Fragment,{children:[n&&e.jsx(Ly,Object.assign({"data-testid":s},a,{children:e.jsx(Ny,{children:f()})})),d&&e.jsx(wp,{show:null!=n&&n,onOverlayClick:u,children:e.jsx(Hy,{onClose:u,children:e.jsx(Wy,{children:f()})})})]})},Yy=q.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Uy=r=>{var n,o,{children:a,popoverContent:s,trigger:l="click",position:c="top",zIndex:d,rootNode:u,customOffset:f,delay:h,onPopoverAppear:p,onPopoverDismiss:m}=r,b=G(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,y]=t.useState(!1),x=t.useRef(null),w=t.useRef(null),$=i.useTheme(),C=el["sm-max"]({theme:$}),S=vc.useMediaQuery({maxWidth:C}),{refs:j,floatingStyles:k,context:D}=g.useFloating({open:v,placement:c,whileElementsMounted:g.autoUpdate,middleware:[g.offset(null!=f?f:16),g.flip(),g.shift({limiter:g.limitShift()})],onOpenChange:e=>{y(e),v!==e&&B(e)}}),T=bh(),E=S?"click":l,O=g.useClick(D,{ignoreMouse:"hover"===E}),F=g.useDismiss(D),I=g.useHover(D,{enabled:"hover"===E,delay:{open:null!==(n=null==h?void 0:h.open)&&void 0!==n?n:0,close:null!==(o=null==h?void 0:h.close)&&void 0!==o?o:500}}),{getReferenceProps:_,getFloatingProps:M}=g.useInteractions([O,F,I]),A=()=>{y(!1),B(!1)},B=e=>{e&&p&&p(),!e&&m&&m()};return e.jsxs(e.Fragment,{children:[e.jsx(Yy,Object.assign({ref:e=>{x.current=e,j.setReference(e)}},_({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:a})),v&&e.jsx(g.FloatingPortal,{root:u,children:e.jsx(g.FloatingFocusManager,{context:D,children:e.jsx("div",Object.assign({ref:e=>{w.current=e,j.setFloating(e)},style:Object.assign(Object.assign({},k),{outline:"none",zIndex:null!=d?d:T})},M(),{children:"function"==typeof s?s():e.jsx(Vy,{visible:!0,onMobileClose:A,children:s})}))})})]})},Ky=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},qy=q.default.span`
    color: ${qs["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ky(e)}

    &:hover,
    &:focus-visible {
        color: ${qs["text-hover"]};
        ${({$hoverStyle:e})=>Ky(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Xy=q.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Gy=t=>{var{ariaLabel:r,content:n,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=t,s=G(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!n;return e.jsx(Uy,Object.assign({},s,{children:e.jsxs(qy,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a,"aria-label":null!=r?r:l?void 0:"More info",children:[n,i&&e.jsx(Xy,{$standalone:!l,children:i})]})}))},Zy=q.default.div`
    padding-left: ${Qs["spacing-4"]};
    display: inline;
`,Qy=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e.jsx(Zy,{children:e.jsx(Gy,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Jy=q.default.label`
    color: ${qs["text-subtle"]};
    margin-bottom: ${Qs["spacing-8"]};
    display: inline-block;

    ${Xs["form-label"]}
    ${Xl()}
    font-weight: ${Xs.Spec["weight-semibold"]};
`,ex=q.default.p`
    ${Xs["body-sm-semibold"]}
    color: ${qs["text-error"]};
    margin-top: ${Qs["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,tx=q.default.span`
    ${Xs["form-description"]}
    color: ${qs["text-subtler"]};
    display: block;
`,rx=t=>{var{children:r,addon:n,subtitle:i,"data-testid":o}=t,a=G(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Jy,Object.assign({},a,{children:[r,n&&n.type&&("popover"===(null==n?void 0:n.type)?e.jsx(Qy,{addon:n}):null),"string"==typeof i?e.jsx(tx,Object.assign({"data-testid":o?`${o}-subtitle`:"subtitle"},a,{children:i})):i]}))},nx=t=>e.jsx(ex,Object.assign({},t)),ix=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Qs["spacing-32"]};
    }
`,ox=q.default.div`
    ${ix}
`,ax=q.default(Gh)`
    ${ix}
`,sx=q.default(rp)`
    ${ix}
`,lx=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||p||g||m||b)?"grid":s||"flex",x=()=>v||(i?`${i}-error-message`:"error-message"),w=()=>!!n;const $=(e=>{switch(e){case"v2-grid":return sx;case"grid":return ax;case"flex":return ox}})(y);return e.jsxs($,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&("string"==typeof r?e.jsx(rx,{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:r}):e.jsx(rx,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r))),(()=>{const e={"aria-invalid":w(),"aria-describedby":w()&&x()};return t.Children.map(a,(r=>t.cloneElement(r,e)))})(),n&&e.jsx(ex,{id:x(),tabIndex:0,"data-testid":x(),children:n})]}))};function cx(e,t){return cx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},cx(e,t)}function dx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function ux(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function fx(e){return null!==e&&1===e.length?e[0]:e.slice()}function hx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function px(e,t){return gx(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function gx(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let mx=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),hx(r.getMouseEventMap())}))}dx(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=px(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),hx(r.getKeyDownEventMap()),dx(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),hx(r.getMouseEventMap()),dx(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),hx(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:fx(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:fx(r.state.value)};return r.props.renderTrack(i,o)};let n=ux(t.value);n.length||(n=ux(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=px(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=U.default.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,cx(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=ux(e.value);return r.length?t.pending?null:{value:r.map((t=>px(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return fx(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return px(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=px(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=px(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=px(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=gx(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=gx(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](fx(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return U.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,o)},t}(U.default.Component);mx.displayName="ReactSlider",mx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>U.default.createElement("div",e),renderTrack:e=>U.default.createElement("div",e),renderMark:e=>U.default.createElement("span",e)};var bx=mx;const vx=q.default.div`
    isolation: isolate;
`,yx=q.default.div`
    margin-top: ${Qs["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Qs["spacing-8"]};
`,xx=q.default.div`
    margin-bottom: ${Qs["spacing-8"]};
`,wx=q.default(exports.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,$x=q.default(bx)`
    height: 0.875rem;
`,Cx=q.default.div`
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

        background-color: ${qs.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Zs["width-010"]} ${Zs.solid}
            ${e=>e.$disabled?qs["border-selected-disabled"]:qs["border-strong"]};
        border-radius: 50%;
    }
`,Sx=q.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Cx}:after {
        outline-offset: -1px;
        outline: ${Zs["width-040"]} ${Zs.solid}
            ${qs["border-selected"]};
    }
`,jx=q.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Js.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||qs["border-strong"](e)};
`,kx=r=>{var{value:n,min:i=0,max:o=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:p,sliderLabelSuffix:g,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=r,$=G(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,S]=t.useState(k()),j=function(){const e=function(){const e=d||u?qs["border-disabled"]:qs["border-strong"],t=d||u?qs["border-selected-disabled"]:qs["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();t.useEffect((()=>{n!==C&&S(k())}),[n]);function k(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(i+a*t);return e}const D=t=>y?y(t):e.jsxs(wx,{children:[p,t,g]});return e.jsxs(vx,Object.assign({},$,{children:[m&&e.jsx(xx,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e.jsxs(wx,{children:[b,t,v]})})()}),e.jsx($x,{step:a,min:i,max:o,value:C,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&C[t]===e[t])return;const r=[...e];S(r),null==x||x(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else{const t=[...e];S(t),null==w||w(t)}},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e.jsx(Sx,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:d?void 0:t.tabIndex,children:e.jsx(Cx,{$disabled:d,$readOnly:u})})),renderTrack:(t,r)=>e.jsx(jx,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:j[r.index]}))}),h&&e.jsxs(yx,{children:[e.jsx("div",{children:D(i)}),e.jsx("div",{children:D(o)})]})]}))},Dx=q.default.div`
    display: flex;
    margin-bottom: ${Qs["spacing-16"]};
    align-items: baseline;
`,Tx=q.default.div`
    margin: 0 0.5rem;
`,Ex=q.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Ox=q.default.div`
    flex: 1;
    border-radius: ${Js.sm} ${Js.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=qs["bg-strongest"];return e.$disabled&&e.$selected?t=qs["bg-selected-stronger-disabled"]:e.$disabled?t=qs["bg-disabled"]:e.$selected&&(t=qs["bg-selected-stronger"]),i.css`
            background-color: ${t};
        `}}
`,Fx=q.default(kx)`
    margin-top: -0.3125rem;
`,Ix=r=>{var{bins:n=[],interval:i,disabled:o,readOnly:a,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:p,renderRangeLabel:g}=r,m=G(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=n.map((e=>e.count)),v=Math.max(...b),y=n.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,C]=t.useState(D()),S=t.useMemo((()=>{const e=[...n].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===w+i*n));t?r.push(t):r.push({count:0,minValue:w+i*n})}return r}),[n,i]);t.useEffect((()=>{s!==$&&C(D())}),[s]);const j=e=>{const[t,r]=e,n=[t,r];C(n),null==f||f(n)},k=e=>{const[t,r]=e,n=[t,r];C(n),null==h||h(n)};function D(){return null!=s?s:[w,w+i]}const T=t=>g?g(t):e.jsxs(exports.Typography.BodyBL,{children:[c,t,d]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(Dx,{children:[T($[0]),e.jsx(Tx,{children:"-"}),T($[1])]}),S.every((e=>0===e.count))&&p?p():e.jsxs(e.Fragment,{children:[e.jsx(Ex,{children:S.map(((t,r)=>{const n=t.count/v;return e.jsx(Ox,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:o||a},r)}))}),e.jsx(Fx,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:o,readOnly:a,ariaLabels:u,onChange:j,onChangeEnd:k})]})]}))},_x=q.default(Rf)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&i.css`
            padding-left: ${Qs["spacing-16"]};
            padding-right: ${e.$showClear?0:Qs["spacing-16"]};
        `}
`,Mx=q.default(zf)`
    height: auto;
    padding: ${Qs["spacing-12"]} ${Qs["spacing-16"]};

    cursor: pointer;
    color: ${qs.icon};

    ${e=>"no-border"===e.$styleType&&i.css`
            margin-right: -${Qs["spacing-12"]};
        `}
`,Ax=q.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Bx=q.default.div`
    display: flex;
    width: 100%;
`,Rx=q.default(Af)`
    display: flex;
    align-items: center;
    width: 100%;
`,zx=U.default.forwardRef(((r,n)=>{var{value:i,spacing:o,type:a,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:f=!1,className:h,styleType:p="bordered"}=r,g=G(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=((e,t)=>"tel"===e&&!!t)(a,o),b=t.useRef(null);t.useImperativeHandle(n,(()=>b.current),[]);const v=od({ref:b,formatter:e=>m?ed.transformWithSpaces(e,o):e}),y=e=>{d&&(m?w(e):d(e))},x=()=>{u&&u(),b&&b.current&&b.current.focus()},w=e=>{const t=v();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==d||d(e),n()},$=i?(e=>e?m?ed.transformWithSpaces(e,o):e:"")(i):i,C=f&&!l&&!c&&!!i,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(_x,Object.assign({"data-testid":"input",ref:b,disabled:l,value:$,onChange:y,type:a,readOnly:c,$showClear:C,$styleType:p},g)),C&&e.jsx(Mx,{onClick:x,type:"button",$styleType:p,children:e.jsx(Ax,{"aria-hidden":!0})})]});return e.jsx(e.Fragment,{children:"no-border"===p?e.jsx(Bx,{className:h,children:S()}):e.jsx(Rx,{$disabled:l,$error:s,$readOnly:c,className:h,children:S()})})})),Px=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(zx,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var Lx=fa;var Nx=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Hx=function(e){return this.__data__.get(e)};var Wx=function(e){return this.__data__.has(e)},Vx=fa,Yx=ha,Ux=_a;var Kx=function(e,t){var r=this.__data__;if(r instanceof Vx){var n=r.__data__;if(!Yx||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ux(n)}return r.set(e,t),this.size=r.size,this},qx=fa,Xx=function(){this.__data__=new Lx,this.size=0},Gx=Nx,Zx=Hx,Qx=Wx,Jx=Kx;function ew(e){var t=this.__data__=new qx(e);this.size=t.size}ew.prototype.clear=Xx,ew.prototype.delete=Gx,ew.prototype.get=Zx,ew.prototype.has=Qx,ew.prototype.set=Jx;var tw=ew;var rw=_a,nw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},iw=function(e){return this.__data__.has(e)};function ow(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new rw;++t<r;)this.add(e[t])}ow.prototype.add=ow.prototype.push=nw,ow.prototype.has=iw;var aw=function(e,t){return e.has(t)},sw=ow,lw=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},cw=aw;var dw=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new sw:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,o):n(p,g,u,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!lw(t,(function(e,t){if(!cw(h,t)&&(p===e||i(p,e,r,n,o)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var uw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var fw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},hw=Ai.Uint8Array,pw=qo,gw=dw,mw=uw,bw=fw,vw=Bi?Bi.prototype:void 0,yw=vw?vw.valueOf:void 0;var xw=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new hw(e),new hw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return pw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=mw;case"[object Set]":var l=1&n;if(s||(s=bw),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=gw(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(yw)return yw.call(e)==yw.call(t)}return!1};var ww=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},$w=Fi;var Cw=function(e,t,r){var n=t(e);return $w(e)?n:ww(n,r(e))};var Sw=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},jw=function(){return[]},kw=Object.prototype.propertyIsEnumerable,Dw=Object.getOwnPropertySymbols,Tw=Dw?function(e){return null==e?[]:(e=Object(e),Sw(Dw(e),(function(t){return kw.call(e,t)})))}:jw;var Ew=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Ow=Ki,Fw=qi;var Iw=function(e){return Fw(e)&&"[object Arguments]"==Ow(e)},_w=qi,Mw=Object.prototype,Aw=Mw.hasOwnProperty,Bw=Mw.propertyIsEnumerable,Rw=Iw(function(){return arguments}())?Iw:function(e){return _w(e)&&Aw.call(e,"callee")&&!Bw.call(e,"callee")},zw={exports:{}};var Pw=function(){return!1};!function(e,t){var r=Ai,n=Pw,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(zw,zw.exports);var Lw=zw.exports,Nw=/^(?:0|[1-9]\d*)$/;var Hw=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Nw.test(e))&&e>-1&&e%1==0&&e<t};var Ww=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Vw=Ki,Yw=Ww,Uw=qi,Kw={};Kw["[object Float32Array]"]=Kw["[object Float64Array]"]=Kw["[object Int8Array]"]=Kw["[object Int16Array]"]=Kw["[object Int32Array]"]=Kw["[object Uint8Array]"]=Kw["[object Uint8ClampedArray]"]=Kw["[object Uint16Array]"]=Kw["[object Uint32Array]"]=!0,Kw["[object Arguments]"]=Kw["[object Array]"]=Kw["[object ArrayBuffer]"]=Kw["[object Boolean]"]=Kw["[object DataView]"]=Kw["[object Date]"]=Kw["[object Error]"]=Kw["[object Function]"]=Kw["[object Map]"]=Kw["[object Number]"]=Kw["[object Object]"]=Kw["[object RegExp]"]=Kw["[object Set]"]=Kw["[object String]"]=Kw["[object WeakMap]"]=!1;var qw=function(e){return Uw(e)&&Yw(e.length)&&!!Kw[Vw(e)]};var Xw=function(e){return function(t){return e(t)}},Gw={exports:{}};!function(e,t){var r=Ii,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Gw,Gw.exports);var Zw=Gw.exports,Qw=qw,Jw=Xw,e$=Zw&&Zw.isTypedArray,t$=e$?Jw(e$):Qw,r$=Ew,n$=Rw,i$=Fi,o$=Lw,a$=Hw,s$=t$,l$=Object.prototype.hasOwnProperty;var c$=function(e,t){var r=i$(e),n=!r&&n$(e),i=!r&&!n&&o$(e),o=!r&&!n&&!i&&s$(e),a=r||n||i||o,s=a?r$(e.length,String):[],l=s.length;for(var c in e)!t&&!l$.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||a$(c,l))||s.push(c);return s},d$=Object.prototype;var u$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||d$)};var f$=function(e,t){return function(r){return e(t(r))}},h$=f$(Object.keys,Object),p$=u$,g$=h$,m$=Object.prototype.hasOwnProperty;var b$=function(e){if(!p$(e))return g$(e);var t=[];for(var r in Object(e))m$.call(e,r)&&"constructor"!=r&&t.push(r);return t},v$=so,y$=Ww;var x$=function(e){return null!=e&&y$(e.length)&&!v$(e)},w$=c$,$$=b$,C$=x$;var S$=function(e){return C$(e)?w$(e):$$(e)},j$=Cw,k$=Tw,D$=S$;var T$=function(e){return j$(e,D$,k$)},E$=Object.prototype.hasOwnProperty;var O$=function(e,t,r,n,i,o){var a=1&r,s=T$(e),l=s.length;if(l!=T$(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:E$.call(t,d)))return!1}var u=o.get(e),f=o.get(t);if(u&&f)return u==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===b?g===m||i(g,m,r,n,o):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return o.delete(e),o.delete(t),h},F$=Do(Ai,"DataView"),I$=ha,_$=Do(Ai,"Promise"),M$=Do(Ai,"Set"),A$=Do(Ai,"WeakMap"),B$=Ki,R$=ho,z$="[object Map]",P$="[object Promise]",L$="[object Set]",N$="[object WeakMap]",H$="[object DataView]",W$=R$(F$),V$=R$(I$),Y$=R$(_$),U$=R$(M$),K$=R$(A$),q$=B$;(F$&&q$(new F$(new ArrayBuffer(1)))!=H$||I$&&q$(new I$)!=z$||_$&&q$(_$.resolve())!=P$||M$&&q$(new M$)!=L$||A$&&q$(new A$)!=N$)&&(q$=function(e){var t=B$(e),r="[object Object]"==t?e.constructor:void 0,n=r?R$(r):"";if(n)switch(n){case W$:return H$;case V$:return z$;case Y$:return P$;case U$:return L$;case K$:return N$}return t});var X$=q$,G$=tw,Z$=dw,Q$=xw,J$=O$,eC=X$,tC=Fi,rC=Lw,nC=t$,iC="[object Arguments]",oC="[object Array]",aC="[object Object]",sC=Object.prototype.hasOwnProperty;var lC=function(e,t,r,n,i,o){var a=tC(e),s=tC(t),l=a?oC:eC(e),c=s?oC:eC(t),d=(l=l==iC?aC:l)==aC,u=(c=c==iC?aC:c)==aC,f=l==c;if(f&&rC(e)){if(!rC(t))return!1;a=!0,d=!1}if(f&&!d)return o||(o=new G$),a||nC(e)?Z$(e,t,r,n,i,o):Q$(e,t,l,r,n,i,o);if(!(1&r)){var h=d&&sC.call(e,"__wrapped__"),p=u&&sC.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return o||(o=new G$),i(g,m,r,n,o)}}return!!f&&(o||(o=new G$),J$(e,t,r,n,i,o))},cC=qi;var dC=function e(t,r,n,i,o){return t===r||(null==t||null==r||!cC(t)&&!cC(r)?t!=t&&r!=r:lC(t,r,n,i,e,o))},uC=tw,fC=dC;var hC=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new uC;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?fC(d,c,3,n,u):f))return!1}}return!0},pC=no;var gC=function(e){return e==e&&!pC(e)},mC=gC,bC=S$;var vC=function(e){for(var t=bC(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,mC(i)]}return t};var yC=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},xC=hC,wC=vC,$C=yC;var CC=function(e,t){return null!=e&&t in Object(e)},SC=Ja,jC=Rw,kC=Fi,DC=Hw,TC=Ww,EC=ts;var OC=function(e,t,r){for(var n=-1,i=(t=SC(t,e)).length,o=!1;++n<i;){var a=EC(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&TC(i)&&DC(a,i)&&(kC(e)||jC(e))},FC=CC,IC=OC;var _C=dC,MC=as,AC=function(e,t){return null!=e&&IC(e,t,FC)},BC=ro,RC=gC,zC=yC,PC=ts;var LC=function(e){return function(t){return null==t?void 0:t[e]}},NC=is;var HC=LC,WC=function(e){return function(t){return NC(t,e)}},VC=ro,YC=ts;var UC=function(e){var t=wC(e);return 1==t.length&&t[0][2]?$C(t[0][0],t[0][1]):function(r){return r===e||xC(r,e,t)}},KC=function(e,t){return BC(e)&&RC(t)?zC(PC(e),t):function(r){var n=MC(r,e);return void 0===n&&n===t?AC(r,e):_C(t,n,3)}},qC=function(e){return e},XC=Fi,GC=function(e){return VC(e)?HC(YC(e)):WC(e)};var ZC=function(e){return"function"==typeof e?e:null==e?qC:"object"==typeof e?XC(e)?KC(e[0],e[1]):UC(e):GC(e)},QC=ZC,JC=x$,eS=S$;var tS=function(e){return function(t,r,n){var i=Object(t);if(!JC(t)){var o=QC(r);t=eS(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var rS=Ru,nS=1/0;var iS=function(e){return e?(e=rS(e))===nS||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var oS=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},aS=ZC,sS=function(e){var t=iS(e),r=t%1;return t==t?r?t-r:t:0},lS=Math.max;var cS=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:sS(r);return i<0&&(i=lS(n+i,0)),oS(e,aS(t),i)},dS=Oi(cS),uS=Oi(tS(cS)),fS=dC;var hS=Oi((function(e,t){return fS(e,t)}));const pS=q.default(Ti.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,gS=q.default.ul`
    border-bottom-left-radius: ${Js.sm};
    border-bottom-right-radius: ${Js.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Qs["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${qs["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${tl.MaxWidth.sm} {
        max-height: 15rem;
    }
`,mS=q.default.li`
    :hover,
    :focus,
    :active {
        background: ${qs["bg-hover"]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${qs["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${qs["bg-selected-hover"]};
                }
            `}}
`,bS=q.default.button`
    display: flex;
    ${e=>e.$multiSelect?i.css`
                padding: ${Qs["spacing-8"]} ${Qs["spacing-16"]};
            `:i.css`
                padding: 15px ${Qs["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Qs["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${qs["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,vS=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,yS=q.default.div`
    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}
    color: ${qs.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&vS}
`,xS=q.default.div`
    color: ${qs["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&vS}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${Xs["body-md-semibold"]}
                `:i.css`
                    ${Xs["body-baseline-regular"]}
                `}
`,wS=q.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${yS} {
                        display: inline;
                    }

                    ${xS} {
                        display: inline;
                        margin-left: ${Qs["spacing-8"]};
                    }
                `}}}
`,$S=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,CS=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,SS=q.default(ju)`
    flex-shrink: 0;
    margin-right: ${Qs["spacing-16"]};
`,jS=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Qs["spacing-16"]} 0 ${Qs["spacing-8"]} 0;
`,kS=q.default.button`
    ${e=>"small"===e.$variant?Xs["body-md-semibold"]:Xs["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${qs["text-primary"]};
`,DS=q.default.div`
    width: 100%;
    display: flex;
    padding: 15px ${Qs["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}
`,TS=q.default(s.ExclamationCircleFillIcon)`
    height: 1em;
    width: 1em;
    margin-right: ${Qs["spacing-4"]};
    color: ${qs["icon-error"]};
`,ES=q.default(kl)`
    margin-right: ${Qs["spacing-4"]};
    color: ${qs.icon};
`,OS=e=>"small"===e?1:1.375,FS=e=>i.css`
        height: ${OS(e)}rem;
        width: ${OS(e)}rem;
    `,IS=q.default.li`
    background: ${qs["bg-strong"]};
    display: flex;
    border-radius: ${Js.sm};
    align-items: center;
`,_S=q.default(Rf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Qs["spacing-8"]} 0 0;
    width: 100%;
`,MS=q.default(x.MagnifierIcon)`
    ${e=>FS(e.$variant)}
    margin: 0 ${Qs["spacing-8"]};
    color: ${qs.icon};
`,AS=q.default(il)`
    ${e=>FS(e.$variant)}
    padding: 0;
    margin: 0 ${Qs["spacing-8"]};
    color: ${qs.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${FS(e.$variant)}
                }
            `}}
`,BS=t.forwardRef(((t,r)=>{const{onClear:n}=t,i=G(t,["onClear"]);return e.jsxs(IS,{children:[e.jsx(MS,{$variant:t.variant}),e.jsx(_S,Object.assign({ref:r,$variant:t.variant},i)),i.value&&e.jsx(AS,{"aria-label":"Clear search",focusOutline:"browser",onClick:n,$variant:t.variant,children:e.jsx(u.CrossIcon,{})})]},"search")})),RS=r=>{var{listItems:n,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:p,multiSelect:g,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:C,onBlur:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:D="default"}=r,T=G(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[E,O]=t.useState(0),[F,I]=t.useState(""),[_,M]=t.useState(null!=n?n:[]),[A,B]=t.useState(0),R=di({height:A}),z=t.useRef(null),P=t.useRef(null),L=t.useRef([]),N=t.useRef(null),H=t.useRef(null),W=t.useRef(E),V=t.useRef(_),Y=e=>{W.current=e,O(e)},U=e=>{V.current=e,M(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(F)}),[F]),t.useEffect((()=>{if(I(""),l){if(setTimeout((()=>{B(Q())})),p)return;N&&N.current?(N.current.focus(),Y(-1)):L.current[E]&&L.current[E].focus()}else B(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();B(e)}}),[_,y]),t.useEffect((()=>{U(null!=n?n:[]),I(""),Y(0)}),[n]);const K=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=e=>{if("inline"!==$)return!1;let t=0;P&&P.current&&(t=P.current.getBoundingClientRect().width-60);return ed.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},X=e=>!!uS(m,(t=>hS(t,e))),Z=e=>{if(""===e)U(null!=n?n:[]);else if(f){const t=f(e);U(t)}else{const t=null==n?void 0:n.filter((t=>{const{title:r,secondaryLabel:n}=K(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));U(null!=t?t:[])}},Q=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{var t,r;if(z&&z.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<V.current.length-1){const e=W.current+1;null===(t=L.current[e])||void 0===t||t.focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;null===(r=L.current[e])||void 0===r||r.focus(),Y(W.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},te=e=>{const t=e.target.value;I(t),u&&u()},re=()=>{var e;I(""),null===(e=N.current)||void 0===e||e.focus(),u&&u()},ne=()=>{v&&v()},ie=()=>{S&&S()},oe=t=>e.jsxs(e.Fragment,{children:[e.jsx($S,{$maxLines:w,"aria-hidden":!0,children:t}),e.jsx(CS,{$maxLines:w,"aria-hidden":!0,children:t})]}),ae=t=>{const{title:r,secondaryLabel:n}=K(t),i=q(r),o=n&&q(n),a=i||o?"next-line":$;return e.jsxs(wS,{$labelDisplayType:a,children:[e.jsx(yS,{$truncateType:x,$maxLines:w,$variant:D,"aria-label":r,children:"middle"===x&&i?oe(r):r}),n&&e.jsx(xS,{$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":n,children:"middle"===x&&o?oe(n):n})]})},se=()=>{if(!v||"success"===y)return _.map(((t,r)=>e.jsx(mS,{$checked:X(t)&&!g,children:e.jsxs(bS,{$hasNextLineLabel:"next-line"===$&&_.length>0&&i&&"string"!=typeof i(_[0]),onClick:e=>{ee(e,t)},ref:e=>L.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:g,onBlur:ie,$variant:D,children:[g&&e.jsx(SS,{checked:X(t),displaySize:"small"}),C?C(t,{selected:X(t)}):ae(t)]})},((e,t)=>`item_${t}__${o?o(e):e}`)(t,r))))},le=()=>{if(m&&g&&_.length>0&&!F&&"success"===y)return e.jsx(jS,{children:e.jsx(kS,{onClick:b,type:"button",$variant:D,children:0===m.length?"Select all":"Clear all"})},"selectAll")},ce=()=>{if(!j&&(F||!c)&&0===_.length&&"success"===y)return e.jsxs(DS,{"data-testid":"list-no-results",$variant:D,children:[e.jsx(TS,{"data-testid":"no-result-icon",$variant:D}),"No results found."]},"noResults")},de=()=>{if(v&&"loading"===y)return e.jsxs(DS,{"data-testid":"list-loading",$variant:D,children:[e.jsx(ES,{}),"Loading..."]},"loading")},ue=()=>{if(v&&"fail"===y)return e.jsxs(DS,{"data-testid":"list-fail",$variant:D,children:[e.jsx(TS,{"data-testid":"load-error-icon",$variant:D}),"Failed to load. ",e.jsx(kS,{onClick:ne,type:"button",$variant:D,children:"Try again."})]},"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(pS,{style:R,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:z,children:[(()=>{if(l)return e.jsxs(gS,Object.assign({ref:P,"data-testid":"dropdown-list",width:s,role:"list"},T,{children:[(c||f)&&"success"===y?e.jsx(BS,{ref:N,onChange:te,value:F,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:re,variant:D}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&k)return e.jsx("div",{ref:H,"data-testid":"custom-cta",children:k(h,_)})})()]})})},zS=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return i.css`
                border-bottom: ${Zs["width-010"]} ${Zs.solid}
                    ${qs.border};
            `}}

    ${e=>e.$readOnly?i.css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?i.css`
                        flex-direction: row-reverse;
                        margin: 0 ${Qs["spacing-16"]};
                    `:i.css`
                        flex-direction: row;
                        margin: 0 ${Qs["spacing-16"]};
                    `}
`,PS=q.default(sh)`
    padding: 0;
    width: auto;
`,LS=q.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Qs["spacing-12"]};
`,NS=q.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Gs["duration-250"]} ${Gs["ease-default"]};
    margin: 0 ${Qs["spacing-12"]};
    display: flex;
    align-items: center;
`,HS=q.default(f.ChevronDownIcon)`
    color: ${qs.icon};
    height: ${Xs.Spec["body-size-baseline"]};
    width: ${Xs.Spec["body-size-baseline"]};
`,WS=q.default.div`
    display: flex;
    flex: 1 1 auto;
`,VS=q.default(exports.Typography.BodyBL)`
    text-align: left;
    ${ol(2)}
    text-overflow: ellipsis;
`,YS=q.default(VS)`
    color: ${qs["text-subtler"]};
`,US=q.default.div`
    width: 1px;
    background: ${qs.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return i.css`
                display: none;
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin: 0 ${Qs["spacing-12"]};
                `:i.css`
                    margin: 0 ${Qs["spacing-12"]} 0 0;
                `}
`,KS=q.default(Af)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Qs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,qS=q.default(Af)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Qs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,XS=q.default(zx)``,GS=q.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Xs["body-baseline-regular"]}
    color: ${qs.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return i.css`
                color: ${qs["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin-left: ${e.$readOnly?Qs["spacing-4"]:Qs["spacing-12"]};
                `:i.css`
                    margin-right: ${e.$readOnly?Qs["spacing-4"]:Qs["spacing-12"]};
                `};
`,ZS=U.default.forwardRef(((r,n)=>{var{addon:i,error:o,onChange:a,readOnly:s,className:l,onBlur:c}=r,d=G(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:p,searchPlaceholder:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":C}=i.attributes,{position:S}=i,[j,k]=t.useState(y),[D,T]=t.useState(!1),E=t.useRef(null);t.useEffect((()=>{k(y)}),[y]);const O=()=>{if(j)return v?v(j):m?m(j):j.toString()},F=e=>{!e&&w&&w(),e&&$&&$()},I=e=>{e.preventDefault(),d.disabled||(T(!D),F(!D))},_=(e,t)=>{var r;k(e),T(!1),F(!1),E&&(null===(r=E.current)||void 0===r||r.focus()),x&&x(e,t)},M=e=>{a&&a(e)},A=()=>{c&&c()},B=()=>{var e;T(!1),F(!1),E&&(null===(e=E.current)||void 0===e||e.focus())};return e.jsxs(gh,{className:l,show:D,error:o&&!D,disabled:d.disabled,readOnly:s,onBlur:()=>{T(!1),F(!1),A()},children:[e.jsxs(zS,{$expanded:D,$readOnly:s,$position:S,children:[s?j?e.jsx(LS,{children:e.jsx(VS,{"data-testid":"selector-label",children:O()})}):null:e.jsx(PS,{ref:E,type:"button",disabled:d.disabled,"data-testid":C||"addon-selector",onClick:I,children:e.jsxs(e.Fragment,{children:[e.jsxs(WS,{children:[u&&!j&&e.jsx(YS,{children:u}),j&&e.jsx(VS,{"data-testid":"selector-label",children:O()})]}),e.jsx(NS,{$expanded:D,children:e.jsx(HS,{})})]})}),e.jsx(US,{$readOnly:s,$position:S}),e.jsx(XS,Object.assign({ref:n},d,{readOnly:s,error:o,onChange:M,"data-testid":d["data-testid"]||"input",onBlur:A,styleType:"no-border"}))]}),f&&f.length>0?e.jsx(RS,{listItems:f,selectedItems:y?[y]:[],onSelectItem:_,valueExtractor:m,listExtractor:b,visible:D,enableSearch:h,searchFunction:p,searchPlaceholder:g,"data-testid":"dropdown-list",onBlur:A,onDismiss:B}):e.jsx(e.Fragment,{})]})})),QS=U.default.forwardRef(((t,r)=>{var{addon:n,error:i,className:o}=t,a=G(t,["addon","error","className"]);const s=()=>e.jsx(qS,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],className:o,children:e.jsx(XS,Object.assign({ref:r},a,{"data-testid":"input",styleType:"no-border"}))});if(!n)return s();{const{type:t="label",position:l="left"}=n,{allowClear:c}=a;switch(t){case"list":{const t=n.attributes;return t.options&&t.options.length>0?e.jsx(ZS,Object.assign({ref:r,addon:n,error:i,className:o},a)):s()}case"custom":{const t=n.attributes;return t.children?e.jsxs(KS,{$error:i,$disabled:a.disabled,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(GS,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.children}),e.jsx(XS,Object.assign({ref:r},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}default:{const t=n.attributes;return t.value?e.jsxs(KS,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(GS,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.value}),e.jsx(XS,Object.assign({ref:r},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}}}})),JS=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(QS,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),ej=q.default(QS)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Qs["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,tj=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=qs.icon,$activeColor:r=qs["icon-primary"]})=>e?t:r};
    padding: ${Qs["spacing-12"]} ${Qs["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,rj=q.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,nj=q.default(exports.Typography.BodyBL)`
    color: ${qs["text-subtler"]};
`,ij=q.default(kl)`
    margin-right: ${Qs["spacing-8"]};
    color: ${qs.icon};
`,oj=q.default.span`
    color: ${qs["text-primary"]};
    text-decoration: underline;
    font-weight: ${Xs.Spec["weight-semibold"]};
`,aj=q.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Qs["spacing-8"]};
`,sj=q.default(C.ExclamationTriangleIcon)`
    color: ${qs["icon-warning"]};
    margin-right: ${Qs["spacing-8"]};
    height: 1em;
    width: 1em;
`,lj=q.default.span`
    color: ${qs["text-warning"]};
`,cj=q.default(zf)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Xs["body-baseline-regular"]}

    :hover, :active, :focus {
        ${oj} {
            color: ${qs["text-hover"]};
        }
    }
`;var dj={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,l=64,c=128,d=256,u=1/0,f=9007199254740991,h=NaN,p=4294967295,g=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",l],["rearg",d]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",C="[object Map]",S="[object Number]",j="[object Object]",k="[object Promise]",D="[object RegExp]",T="[object Set]",E="[object String]",O="[object Symbol]",F="[object WeakMap]",I="[object ArrayBuffer]",_="[object DataView]",M="[object Float32Array]",A="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",z="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,oe=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",Ce="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Oe="["+$e+"]",Fe="["+Te+"]",Ie="["+Ce+"]",_e="\\d+",Me="["+Se+"]",Ae="["+je+"]",Be="[^"+$e+Te+_e+Se+je+ke+"]",Re="\\ud83c[\\udffb-\\udfff]",ze="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",He="\\u200d",We="(?:"+Ae+"|"+Be+")",Ve="(?:"+Ne+"|"+Be+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+Ie+"|"+Re+")"+"?",qe="["+De+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[ze,Pe,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[Me,Pe,Le].join("|")+")"+Xe,Ze="(?:"+[ze+Ie+"?",Ie,Pe,Le,Oe].join("|")+")",Qe=RegExp(Ee,"g"),Je=RegExp(Ie,"g"),et=RegExp(Re+"(?="+Re+")|"+Ze+Xe,"g"),tt=RegExp([Ne+"?"+Ae+"+"+Ye+"(?="+[Fe,Ne,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Fe,Ne+We,"$"].join("|")+")",Ne+"?"+We+"+"+Ye,Ne+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_e,Ge].join("|"),"g"),rt=RegExp("["+He+$e+Ce+De+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,at={};at[M]=at[A]=at[B]=at[R]=at[z]=at[P]=at[L]=at[N]=at[H]=!0,at[m]=at[b]=at[I]=at[v]=at[_]=at[y]=at[x]=at[w]=at[C]=at[S]=at[j]=at[D]=at[T]=at[E]=at[F]=!1;var st={};st[m]=st[b]=st[I]=st[_]=st[v]=st[y]=st[M]=st[A]=st[B]=st[R]=st[z]=st[C]=st[S]=st[j]=st[D]=st[T]=st[E]=st[O]=st[P]=st[L]=st[N]=st[H]=!0,st[x]=st[w]=st[F]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),pt=t&&!t.nodeType&&t,gt=pt&&e&&!e.nodeType&&e,mt=gt&&gt.exports===pt,bt=mt&&ut.process,vt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,Ct=vt&&vt.isSet,St=vt&&vt.isTypedArray;function jt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Ft(e,t){return!!(null==e?0:e.length)&&Nt(e,t,0)>-1}function It(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function _t(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Mt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function At(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Bt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Yt("length");function Pt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Nt(e,t,r){return t==t?function(e,t,r){var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Wt,r)}function Ht(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:h}function Yt(e){return function(t){return null==t?r:t[e]}}function Ut(e){return function(t){return null==e?r:e[t]}}function Kt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function qt(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,hr(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return _t(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&Nt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Nt(t,e[r],0)>-1;);return r}var rr=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+lt[e]}function or(e){return rt.test(e)}function ar(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function sr(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var s=e[r];s!==t&&s!==o||(e[r]=o,a[i++]=r)}return a}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):zt(e)}function fr(e){return or(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var pr=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gr=function e(t){var oe=(t=null==t?ht:gr.defaults(ht.Object(),t,gr.pick(ht,it))).Array,$e=t.Date,Ce=t.Error,Se=t.Function,je=t.Math,ke=t.Object,De=t.RegExp,Te=t.String,Ee=t.TypeError,Oe=oe.prototype,Fe=Se.prototype,Ie=ke.prototype,_e=t["__core-js_shared__"],Me=Fe.toString,Ae=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=Me.call(ke),Le=ht._,Ne=De("^"+Me.call(Ae).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:r,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:r,Ue=sr(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Xe=Oe.splice,Ge=We?We.isConcatSpreadable:r,Ze=We?We.iterator:r,et=We?We.toStringTag:r,rt=function(){try{var e=fo(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,pt=je.ceil,gt=je.floor,bt=ke.getOwnPropertySymbols,vt=He?He.isBuffer:r,zt=t.isFinite,Ut=Oe.join,mr=sr(ke.keys,ke),br=je.max,vr=je.min,yr=$e.now,xr=t.parseInt,wr=je.random,$r=Oe.reverse,Cr=fo(t,"DataView"),Sr=fo(t,"Map"),jr=fo(t,"Promise"),kr=fo(t,"Set"),Dr=fo(t,"WeakMap"),Tr=fo(ke,"create"),Er=Dr&&new Dr,Or={},Fr=zo(Cr),Ir=zo(Sr),_r=zo(jr),Mr=zo(kr),Ar=zo(Dr),Br=We?We.prototype:r,Rr=Br?Br.valueOf:r,zr=Br?Br.toString:r;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Ae.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Nr(){}function Hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Xr(e,t){var r=Va(e),n=!r&&Wa(e),i=!r&&!n&&qa(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Xt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(e){var t=e.length;return t?e[qn(0,t-1)]:r}function Zr(e,t){return Ao(Ei(e),sn(t,0,e.length))}function Qr(e){return Ao(Ei(e))}function Jr(e,t,n){(n!==r&&!La(e[t],n)||n===r&&!(t in e))&&on(e,t,n)}function en(e,t,n){var i=e[t];Ae.call(e,t)&&La(i,n)&&(n!==r||t in e)||on(e,t,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Oi(t,Fs(t),e)}function on(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(e,t){for(var n=-1,i=t.length,o=oe(i),a=null==e;++n<i;)o[n]=a?r:ks(e,t[n]);return o}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ln(e,t,n,i,o,a){var s,l=1&t,c=2&t,d=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!es(e))return e;var u=Va(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ei(e,s)}else{var f=go(e),h=f==w||f==$;if(qa(e))return Ci(e,l);if(f==j||f==m||h&&!o){if(s=c||h?{}:bo(e),!l)return c?function(e,t){return Oi(e,po(e),t)}(e,function(e,t){return e&&Oi(t,Is(t),e)}(s,e)):function(e,t){return Oi(e,ho(e),t)}(e,nn(s,e))}else{if(!st[f])return o?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case I:return Si(e);case v:case y:return new n(+e);case _:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case A:case B:case R:case z:case P:case L:case N:case H:return ji(e,r);case C:return new n;case S:case E:return new n(e);case D:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new n;case O:return i=e,Rr?ke(Rr.call(i)):{}}var i}(e,f,l)}}a||(a=new qr);var p=a.get(e);if(p)return p;a.set(e,s),as(e)?e.forEach((function(r){s.add(ln(r,t,n,r,e,a))})):rs(e)&&e.forEach((function(r,i){s.set(i,ln(r,t,n,i,e,a))}));var g=u?r:(d?c?io:no:c?Is:Fs)(e);return Dt(g||e,(function(r,i){g&&(r=e[i=r]),en(s,i,ln(r,t,n,i,e,a))})),s}function cn(e,t,n){var i=n.length;if(null==e)return!i;for(e=ke(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}function dn(e,t,i){if("function"!=typeof e)throw new Ee(n);return Fo((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,o=Ft,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=_t(t,Zt(r))),n?(o=It,a=!1):t.length>=200&&(o=Jt,a=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Tr?Tr(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(e){var t=this.__data__;if(Tr){var n=t[e];return n===i?r:n}return Ae.call(t,e)?t[e]:r},Vr.prototype.has=function(e){var t=this.__data__;return Tr?t[e]!==r:Ae.call(t,e)},Vr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Tr&&t===r?i:t,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Yr.prototype.get=function(e){var t=this.__data__,n=tn(t,e);return n<0?r:t[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,i),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=_i(xn),hn=_i(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function gn(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(l===r?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):Mt(i,s):n||(i[i.length]=s)}return i}var vn=Mi(),yn=Mi(!0);function xn(e,t){return e&&vn(e,t,Fs)}function wn(e,t){return e&&yn(e,t,Fs)}function $n(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cn(e,t){for(var n=0,i=(t=yi(t,e)).length;null!=e&&n<i;)e=e[Ro(t[n++])];return n&&n==i?e:r}function Sn(e,t,r){var n=t(e);return Va(e)?n:Mt(n,r(e))}function jn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in ke(e)?function(e){var t=Ae.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch(e){}var o=ze.call(e);i&&(t?e[et]=n:delete e[et]);return o}(e):function(e){return ze.call(e)}(e)}function kn(e,t){return e>t}function Dn(e,t){return null!=e&&Ae.call(e,t)}function Tn(e,t){return null!=e&&t in ke(e)}function En(e,t,n){for(var i=n?It:Ft,o=e[0].length,a=e.length,s=a,l=oe(a),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=_t(u,Zt(t))),c=vr(u.length,c),l[s]=!n&&(t||o>=120&&u.length>=120)?new Kr(s&&u):r}u=e[0];var f=-1,h=l[0];e:for(;++f<o&&d.length<c;){var p=u[f],g=t?t(p):p;if(p=n||0!==p?p:0,!(h?Jt(h,g):i(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Jt(m,g):i(e[s],g,n)))continue e}h&&h.push(g),d.push(p)}}return d}function On(e,t,n){var i=null==(e=To(e,t=yi(t,e)))?e:e[Ro(Go(t))];return null==i?r:jt(i,e,n)}function Fn(e){return ts(e)&&jn(e)==m}function In(e,t,n,i,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,n,i,o,a){var s=Va(e),l=Va(t),c=s?b:go(e),d=l?b:go(t),u=(c=c==m?j:c)==j,f=(d=d==m?j:d)==j,h=c==d;if(h&&qa(e)){if(!qa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||cs(e)?to(e,t,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case _:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case I:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case v:case y:case S:return La(+e,+t);case x:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case C:var s=ar;case T:var l=1&n;if(s||(s=cr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case O:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,c,n,i,o,a);if(!(1&n)){var p=u&&Ae.call(e,"__wrapped__"),g=f&&Ae.call(t,"__wrapped__");if(p||g){var w=p?e.value():e,$=g?t.value():t;return a||(a=new qr),o(w,$,n,i,a)}}if(!h)return!1;return a||(a=new qr),function(e,t,n,i,o,a){var s=1&n,l=no(e),c=l.length,d=no(t),u=d.length;if(c!=u&&!s)return!1;var f=c;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var p=a.get(e),g=a.get(t);if(p&&g)return p==t&&g==e;var m=!0;a.set(e,t),a.set(t,e);var b=s;for(;++f<c;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,a):i(v,y,h,e,t,a);if(!(x===r?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,n,i,o,a)}(e,t,n,i,In,o))}function _n(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=ke(e);o--;){var l=n[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var c=(l=n[o])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===r&&!(c in e))return!1}else{var f=new qr;if(i)var h=i(d,u,c,e,t,f);if(!(h===r?In(u,d,3,i,f):h))return!1}}return!0}function Mn(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:me).test(zo(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!So(e))return mr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?oe(e.length):[];return fn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?ko(t[0][0],t[0][1]):function(r){return r===e||_n(r,e,t)}}function Nn(e,t){return wo(e)&&jo(t)?ko(Ro(e),t):function(n){var i=ks(n,e);return i===r&&i===t?Ds(n,e):In(t,i,3)}}function Hn(e,t,n,i,o){e!==t&&vn(t,(function(a,s){if(o||(o=new qr),es(a))!function(e,t,n,i,o,a,s){var l=Eo(e,n),c=Eo(t,n),d=s.get(c);if(d)return void Jr(e,n,d);var u=a?a(l,c,n+"",e,t,s):r,f=u===r;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Va(l)?u=l:Ka(l)?u=Ei(l):p?(f=!1,u=Ci(c,!0)):g?(f=!1,u=ji(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):f=!1}f&&(s.set(c,u),o(u,c,i,a,s),s.delete(c));Jr(e,n,u)}(e,t,s,n,Hn,i,o);else{var l=i?i(Eo(e,s),a,s+"",e,t,o):r;l===r&&(l=a),Jr(e,s,l)}}),Is)}function Wn(e,t){var n=e.length;if(n)return yo(t+=t<0?n:0,n)?e[t]:r}function Vn(e,t,r){t=t.length?_t(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=_t(t,Zt(lo()));var i=Pn(e,(function(e,r,i){var o=_t(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;for(;++n<a;){var l=ki(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Ht:Nt,o=-1,a=t.length,s=e;for(e===t&&(t=Ei(t)),r&&(s=_t(e,Zt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qn(e,t){return e+gt(wr()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>f)return r;do{t%2&&(r+=e),(t=gt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Io(Do(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Ao(r,sn(t,0,r.length))}function Jn(e,t,n,i){if(!es(e))return e;for(var o=-1,a=(t=yi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var c=Ro(t[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=s){var u=l[c];(d=i?i(u,c,l):r)===r&&(d=es(u)?u:yo(t[o+1])?[]:{})}en(l,c,d),l=l[c]}return e}var ei=Er?function(e,t){return Er.set(e,t),e}:nl,ti=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Ao(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=oe(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,l=null===t,c=ls(t),d=t===r;o<a;){var u=gt((o+a)/2),f=n(e[u]),h=f!==r,p=null===f,g=f==f,m=ls(f);if(s)var b=i||g;else b=d?g&&(i||h):l?g&&h&&(i||!p):c?g&&h&&!p&&(i||!m):!p&&!m&&(i?f<=t:f<t);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function ci(e){if("string"==typeof e)return e;if(Va(e))return _t(e,ci)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Ft,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=It;else if(o>=200){var c=t?null:Xi(e);if(c)return cr(c);a=!1,i=Jt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=To(e,t=yi(t,e)))||delete e[Ro(Go(t))]}function fi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function gi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=oe(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var l=i<a?t[i]:r;n(s,e[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:Bo(vs(e))}var xi=Gn;function wi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ni(e,t,n)}var $i=lt||function(e){return ht.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ji(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=ls(e),s=t!==r,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!a&&e>t||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&e<t||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Di(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=oe(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=oe(d+c),f=!n;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||i<o)&&(u[h+r[a]]=e[i++]);return u}function Ei(e,t){var r=-1,n=e.length;for(t||(t=oe(n));++r<n;)t[r]=e[r];return t}function Oi(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],c=i?i(n[l],e[l],l,n,e):r;c===r&&(c=e[l]),o?on(n,l,c):en(n,l,c)}return n}function Fi(e,t){return function(r,n){var i=Va(r)?kt:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Ii(e){return Gn((function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&xo(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=ke(t);++i<o;){var l=n[i];l&&e(t,l,i,a)}return t}))}function _i(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=ke(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Mi(e){return function(t,r,n){for(var i=-1,o=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Ai(e){return function(t){var n=or(t=vs(t))?fr(t):r,i=n?n[0]:t.charAt(0),o=n?wi(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(e){return function(t,n,i){var o=ke(t);if(!Ua(t)){var a=lo(n,3);t=Fs(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}function Pi(e){return ro((function(t){var i=t.length,o=i,a=Hr.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Ee(n);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=t[o]),d="wrapper"==c?oo(s):r;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Va(r))return l.plant(r).value();for(var n=0,o=i?t[n].apply(this,e):r;++n<i;)o=t[n].call(this,o);return o}}))}function Li(e,t,n,i,o,a,s,l,d,u){var f=t&c,h=1&t,p=2&t,g=24&t,m=512&t,b=p?r:Ri(e);return function c(){for(var v=arguments.length,y=oe(v),x=v;x--;)y[x]=arguments[x];if(g)var w=so(c),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Di(y,i,o,g)),a&&(y=Ti(y,a,s,g)),v-=$,g&&v<u){var C=lr(y,w);return Ki(e,t,Li,c.placeholder,n,y,C,l,d,u-v)}var S=h?n:this,j=p?S[e]:e;return v=y.length,l?y=function(e,t){var n=e.length,i=vr(t.length,n),o=Ei(e);for(;i--;){var a=t[i];e[i]=yo(a,n)?o[a]:r}return e}(y,l):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ht&&this instanceof c&&(j=b||Ri(j)),j.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=e(n,i)}return o}}function Wi(e){return ro((function(t){return t=_t(t,Zt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return jt(e,n,r)}))}))}))}function Vi(e,t){var n=(t=t===r?" ":ci(t)).length;if(n<2)return n?Xn(t,e):t;var i=Xn(t,pt(e/ur(t)));return or(t)?wi(fr(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,n,i){return i&&"number"!=typeof i&&xo(t,n,i)&&(n=i=r),t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r,n){for(var i=-1,o=br(pt((t-e)/(r||1)),0),a=oe(o);o--;)a[n?o:++i]=e,e+=r;return a}(t,n,i=i===r?t<n?1:-1:hs(i),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(e,t,n,i,o,a,c,d,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var p=[e,t,o,h?a:r,h?c:r,h?r:a,h?r:c,d,u,f],g=n.apply(r,p);return $o(e)&&Oo(g,p),g.placeholder=i,_o(g,e,t)}function qi(e){var t=je[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&zt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Xi=kr&&1/cr(new kr([,-0]))[1]==u?function(e){return new kr(e)}:ll;function Gi(e){return function(t){var r=go(t);return r==C?ar(t):r==T?dr(t):function(e,t){return _t(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Ee(n);var b=u?u.length:0;if(b||(t&=-97,u=f=r),p=p===r?p:br(ps(p),0),g=g===r?g:ps(g),b-=f?f.length:0,t&l){var v=u,y=f;u=f=r}var x=m?r:oo(e),w=[e,t,i,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],n=t[1],i=r|n,a=i<131,s=n==c&&8==r||n==c&&r==d&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!a&&!s)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Di(u,l,t[4]):l,e[4]=u?lr(e[3],o):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ti(u,l,t[6]):l,e[6]=u?lr(e[5],o):t[6]);(l=t[7])&&(e[7]=l);n&c&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===r?m?0:e.length:br(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==a?function(e,t,n){var i=Ri(e);return function o(){for(var a=arguments.length,s=oe(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:lr(s,c);return(a-=d.length)<n?Ki(e,t,Li,o.placeholder,r,s,d,r,r,n-a):jt(this&&this!==ht&&this instanceof o?i:e,this,s)}}(e,t,g):t!=s&&33!=t||f.length?Li.apply(r,w):function(e,t,r,n){var i=1&t,o=Ri(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=oe(c+s),u=this&&this!==ht&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return jt(u,i?r:this,d)}}(e,t,i,u);else var $=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return _o((x?ei:Oo)($,w),e,t)}function Qi(e,t,n,i){return e===r||La(e,Ie[n])&&!Ae.call(i,n)?t:e}function Ji(e,t,n,i,o,a){return es(e)&&es(t)&&(a.set(t,e),Hn(e,t,r,Ji,a),a.delete(t)),e}function eo(e){return is(e)?r:e}function to(e,t,n,i,o,a){var s=1&n,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(e),u=a.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,p=2&n?new Kr:r;for(a.set(e,t),a.set(t,e);++f<l;){var g=e[f],m=t[f];if(i)var b=s?i(m,g,f,t,e,a):i(g,m,f,e,t,a);if(b!==r){if(b)continue;h=!1;break}if(p){if(!Rt(t,(function(e,t){if(!Jt(p,t)&&(g===e||o(g,e,n,i,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,n,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function ro(e){return Io(Do(e,r,Yo),e+"")}function no(e){return Sn(e,Fs,ho)}function io(e){return Sn(e,Is,po)}var oo=Er?function(e){return Er.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Or[t],n=Ae.call(Or,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ae.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?An:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Fs(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,jo(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return Mn(n)?n:r}var ho=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,po=bt?function(e){for(var t=[];e;)Mt(t,ho(e)),e=Ue(e);return t}:gl,go=jn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=Ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yo(e,t){var r=typeof e;return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in ke(t))}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&go(new Cr(new ArrayBuffer(1)))!=_||Sr&&go(new Sr)!=C||jr&&go(jr.resolve())!=k||kr&&go(new kr)!=T||Dr&&go(new Dr)!=F)&&(go=function(e){var t=jn(e),n=t==j?e.constructor:r,i=n?zo(n):"";if(i)switch(i){case Fr:return _;case Ir:return C;case _r:return k;case Mr:return T;case Ar:return F}return t});var Co=_e?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function jo(e){return e==e&&!es(e)}function ko(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in ke(n)))}}function Do(e,t,n){return t=br(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=br(r.length-t,0),a=oe(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=oe(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),jt(e,this,s)}}function To(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Eo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oo=Mo(ei),Fo=ft||function(e,t){return ht.setTimeout(e,t)},Io=Mo(ti);function _o(e,t,r){var n=t+"";return Io(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Dt(g,(function(r){var n="_."+r[0];t&r[1]&&!Ft(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(n),r)))}function Mo(e){var t=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ao(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=qn(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var Bo=function(e){var t=Ma(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)})),t}));function Ro(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),r,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Lt(e,lo(t,3),i)}function Vo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ps(n),o=n<0?br(i+o,0):vr(o,i-1)),Lt(e,lo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?bn(e,1):[]}function Uo(e){return e&&e.length?e[0]:r}var Ko=Gn((function(e){var t=_t(e,bi);return t.length&&t[0]===e[0]?En(t):[]})),qo=Gn((function(e){var t=Go(e),n=_t(e,bi);return t===Go(n)?t=r:n.pop(),n.length&&n[0]===e[0]?En(n,lo(t,2)):[]})),Xo=Gn((function(e){var t=Go(e),n=_t(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?En(n,r,t):[]}));function Go(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,_t(t,(function(e){return yo(e,r)?+e:e})).sort(ki)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return di(bn(e,1,Ka,!0))})),ra=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),di(bn(e,1,Ka,!0),lo(t,2))})),na=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,di(bn(e,1,Ka,!0),r,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return _t(e,Yt(t))}))}function oa(e,t){if(!e||!e.length)return[];var n=ia(e);return null==t?n:_t(n,(function(e){return jt(t,r,e)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return gi(Ot(e,Ka))})),la=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),gi(Ot(e,Ka),lo(t,2))})),ca=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,gi(Ot(e,Ka),r,t)})),da=Gn(ia);var ua=Gn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,oa(e,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return an(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:r}),new Hr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var ga=Fi((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)}));var ma=zi(Wo),ba=zi(Vo);function va(e,t){return(Va(e)?Dt:fn)(e,lo(t,3))}function ya(e,t){return(Va(e)?Tt:hn)(e,lo(t,3))}var xa=Fi((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])}));var wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?oe(e.length):[];return fn(e,(function(e){o[++n]=i?jt(t,e,r):On(e,t,r)})),o})),$a=Fi((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?_t:Pn)(e,lo(t,3))}var Sa=Fi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var ja=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Da(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,c,r,r,r,r,t)}function Ta(e,t){var i;if("function"!=typeof t)throw new Ee(n);return e=ps(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var i=lr(r,so(Ea));n|=s}return Zi(e,n,t,r,i)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var i=lr(r,so(Oa));n|=s}return Zi(t,n,e,r,i)}));function Fa(e,t,i){var o,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof e)throw new Ee(n);function g(t){var n=o,i=a;return o=a=r,u=t,l=e.apply(i,n)}function m(e){var n=e-d;return d===r||n>=t||n<0||h&&e-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Fo(b,function(e){var r=t-(e-d);return h?vr(r,s-(e-u)):r}(e))}function v(e){return c=r,p&&o?g(e):(o=a=r,l)}function y(){var e=ka(),n=m(e);if(o=arguments,a=this,d=e,n){if(c===r)return function(e){return u=e,c=Fo(b,t),f?g(e):l}(d);if(h)return $i(c),c=Fo(b,t),g(d)}return c===r&&(c=Fo(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?br(ms(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==r&&$i(c),u=0,o=d=a=c=r},y.flush=function(){return c===r?l:v(ka())},y}var Ia=Gn((function(e,t){return dn(e,1,t)})),_a=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Ma(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ee(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Ma.Cache||Ur),r}function Aa(e){if("function"!=typeof e)throw new Ee(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ma.Cache=Ur;var Ba=xi((function(e,t){var r=(t=1==t.length&&Va(t[0])?_t(t[0],Zt(lo())):_t(bn(t,1),Zt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return jt(e,this,n)}))})),Ra=Gn((function(e,t){var n=lr(t,so(Ra));return Zi(e,s,r,t,n)})),za=Gn((function(e,t){var n=lr(t,so(za));return Zi(e,l,r,t,n)})),Pa=ro((function(e,t){return Zi(e,d,r,r,r,t)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(kn),Ha=Ui((function(e,t){return e>=t})),Wa=Fn(function(){return arguments}())?Fn:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Va=oe.isArray,Ya=yt?Zt(yt):function(e){return ts(e)&&jn(e)==I};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=vt||ml,Xa=xt?Zt(xt):function(e){return ts(e)&&jn(e)==y};function Ga(e){if(!ts(e))return!1;var t=jn(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=jn(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=wt?Zt(wt):function(e){return ts(e)&&go(e)==C};function ns(e){return"number"==typeof e||ts(e)&&jn(e)==S}function is(e){if(!ts(e)||jn(e)!=j)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Me.call(r)==Pe}var os=$t?Zt($t):function(e){return ts(e)&&jn(e)==D};var as=Ct?Zt(Ct):function(e){return ts(e)&&go(e)==T};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&jn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&jn(e)==O}var cs=St?Zt(St):function(e){return ts(e)&&Ja(e.length)&&!!at[jn(e)]};var ds=Ui(zn),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?fr(e):Ei(e);if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ze]());var t=go(e);return(t==C?ar:t==T?cr:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,p):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=ge.test(e);return r||be.test(e)?dt(e.slice(2),r?2:8):pe.test(e)?h:+e}function bs(e){return Oi(e,Is(e))}function vs(e){return null==e?"":ci(e)}var ys=Ii((function(e,t){if(So(t)||Ua(t))Oi(t,Fs(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Ii((function(e,t){Oi(t,Is(t),e)})),ws=Ii((function(e,t,r,n){Oi(t,Is(t),e,n)})),$s=Ii((function(e,t,r,n){Oi(t,Fs(t),e,n)})),Cs=ro(an);var Ss=Gn((function(e,t){e=ke(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&xo(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===r||La(u,Ie[d])&&!Ae.call(e,d))&&(e[d]=a[d])}return e})),js=Gn((function(e){return e.push(r,Ji),jt(Ms,r,e)}));function ks(e,t,n){var i=null==e?r:Cn(e,t);return i===r?n:i}function Ds(e,t){return null!=e&&mo(e,t,Tn)}var Ts=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Os=Gn(On);function Fs(e){return Ua(e)?Xr(e):Bn(e)}function Is(e){return Ua(e)?Xr(e,!0):Rn(e)}var _s=Ii((function(e,t,r){Hn(e,t,r)})),Ms=Ii((function(e,t,r,n){Hn(e,t,r,n)})),As=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=_t(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Oi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r}));var Bs=ro((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=_t(io(e),(function(e){return[e]}));return t=lo(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(Fs),Ps=Gi(Is);function Ls(e){return null==e?[]:Qt(e,Fs(e))}var Ns=Bi((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,rr).replace(Je,"")}var Vs=Bi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Bi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var qs=Bi((function(e,t,r){return e+(r?" ":"")+Gs(t)}));var Xs=Bi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,n){return e=vs(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gn((function(e,t){try{return jt(e,r,t)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return Dt(t,(function(t){t=Ro(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return An("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Fs(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Fs(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return Dt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ei(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(_t),dl=Wi(Et),ul=Wi(Rt);function fl(e){return wo(e)?Yt(Ro(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Yi(),pl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),Cl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,t){if("function"!=typeof t)throw new Ee(n);return e=ps(e),function(){if(--e<1)return t.apply(this,arguments)}},Pr.ary=Da,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ta,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=Oa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(e,t,n){t=(n?xo(e,t,n):t===r)?1:br(ps(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=oe(pt(i/t));o<i;)s[a++]=ni(e,o,o+=t);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Va(r)?Ei(r):[r],bn(t,1))},Pr.cond=function(e){var t=null==e?0:e.length,r=lo();return e=t?_t(e,(function(e){if("function"!=typeof e[1])throw new Ee(n);return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n];if(jt(i[0],this,r))return jt(i[1],this,r)}}))},Pr.conforms=function(e){return function(e){var t=Fs(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.curryRight=function e(t,n,i){var o=Zi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.debounce=Fa,Pr.defaults=Ss,Pr.defaultsDeep=js,Pr.defer=Ia,Pr.delay=_a,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=n||t===r?1:ps(t))<0?0:t,i):[]},Pr.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,0,(t=i-(t=n||t===r?1:ps(t)))<0?0:t):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0):[]},Pr.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&xo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ps(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ps(i))<0&&(i+=o),i=n>i?0:gs(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Pr.filter=function(e,t){return(Va(e)?Ot:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),u)},Pr.flatMapDepth=function(e,t,n){return n=n===r?1:ps(n),bn(Ca(e,t),n)},Pr.flatten=Yo,Pr.flattenDeep=function(e){return(null==e?0:e.length)?bn(e,u):[]},Pr.flattenDepth=function(e,t){return(null==e?0:e.length)?bn(e,t=t===r?1:ps(t)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Fs(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return(null==e?0:e.length)?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=qo,Pr.intersectionWith=Xo,Pr.invert=Ts,Pr.invertBy=Es,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Fs,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Ma,Pr.merge=_s,Pr.mergeWith=Ms,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Aa,Pr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=As,Pr.omitBy=function(e,t){return Rs(e,Aa(lo(t)))},Pr.once=function(e){return Ta(2,e)},Pr.orderBy=function(e,t,n,i){return null==e?[]:(Va(t)||(t=null==t?[]:[t]),Va(n=i?r:n)||(n=null==n?[]:[n]),Vn(e,t,n))},Pr.over=cl,Pr.overArgs=Ba,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(e){return function(t){return null==e?r:Cn(e,t)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Un(e,t,r,n):e},Pr.pullAt=Jo,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Ot:mn)(e,Aa(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(e,t){if("function"!=typeof e)throw new Ee(n);return Gn(e,t=t===r?t:ps(t))},Pr.reverse=ea,Pr.sampleSize=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:ps(t),(Va(e)?Zr:Qn)(e,t)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Jn(e,t,n,i)},Pr.shuffle=function(e){return(Va(e)?Qr:ri)(e)},Pr.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&xo(e,t,n)?(t=0,n=i):(t=null==t?0:ps(t),n=n===r?i:ps(n)),ni(e,t,n)):[]},Pr.sortBy=ja,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(e,t,n){return n&&"number"!=typeof n&&xo(e,t,n)&&(t=n=r),(n=n===r?p:n>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=ci(t))&&or(e)?wi(fr(e),0,n):e.split(t,n):[]},Pr.spread=function(e,t){if("function"!=typeof e)throw new Ee(n);return t=null==t?0:br(ps(t),0),Gn((function(r){var n=r[t],i=wi(r,0,t);return n&&Mt(i,n),jt(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(e,t,n){return e&&e.length?ni(e,0,(t=n||t===r?1:ps(t))<0?0:t):[]},Pr.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=i-(t=n||t===r?1:ps(t)))<0?0:t,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?hi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Ee(n);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Fa(e,t,{leading:i,maxWait:t,trailing:o})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?_t(e,Ro):ls(e)?[e]:Ei(Bo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),i=n||qa(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?Dt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Da(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?di(e,r,t):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:fi(e,t,vi(r))},Pr.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=bl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=vl,Pr.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ms(n))==n?n:0),t!==r&&(t=(t=ms(t))==t?t:0),sn(ms(e),t,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:r)},Pr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:r)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Fs(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=yl,Pr.endsWith=function(e,t,n){e=vs(e),t=ci(t);var i=e.length,o=n=n===r?i:sn(ps(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,nr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&ne.test(e)?e.replace(re,"\\$&"):e},Pr.every=function(e,t,n){var i=Va(e)?Et:pn;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return Pt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vo,Pr.findLastKey=function(e,t){return Pt(e,lo(t,3),wn)},Pr.floor=xl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Dn)},Pr.hasIn=Ds,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Nt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Nt(e,t,i)},Pr.inRange=function(e,t,n){return t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(e=ms(e),t,n)},Pr.invoke=Os,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&jn(e)==v},Pr.isBuffer=qa,Pr.isDate=Xa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=go(e);if(t==C||t==T)return!e.size;if(So(e))return!Bn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?In(e,t,r,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&zt(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||_n(e,t,uo(t))},Pr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,_n(e,t,uo(t),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Mn(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=f},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(e){return e===r},Pr.isWeakMap=function(e){return ts(e)&&go(e)==F},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==jn(e)},Pr.join=function(e,t){return null==e?"":Ut.call(e,t)},Pr.kebabCase=Vs,Pr.last=Go,Pr.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ps(n))<0?br(i+o,0):vr(o,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):Lt(e,Wt,o,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(e){return e&&e.length?gn(e,nl,kn):r},Pr.maxBy=function(e,t){return e&&e.length?gn(e,lo(t,2),kn):r},Pr.mean=function(e){return Vt(e,nl)},Pr.meanBy=function(e,t){return Vt(e,lo(t,2))},Pr.min=function(e){return e&&e.length?gn(e,nl,zn):r},Pr.minBy=function(e,t){return e&&e.length?gn(e,lo(t,2),zn):r},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(e,t){return e&&e.length?Wn(e,ps(t)):r},Pr.noConflict=function(){return ht._===this&&(ht._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Vi(gt(i),r)+e+Vi(pt(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?e+Vi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?Vi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(ie,""),t||0)},Pr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=hs(e),t===r?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=wr();return vr(e+o*(t-e+ct("1e-"+((o+"").length-1))),t)}return qn(e,t)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?Bt:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.repeat=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:ps(t),Xn(vs(e),t)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(e,t,n){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[Ro(t[i])];a===r&&(i=o,a=n),e=Za(a)?a.call(e):a}return e},Pr.round=Cl,Pr.runInContext=e,Pr.sample=function(e){return(Va(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=go(e);return t==C||t==T?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(e,t,n){var i=Va(e)?Rt:ii;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?qt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?qt(e,lo(t,2)):0},Pr.template=function(e,t,n){var i=Pr.templateSettings;n&&xo(e,t,n)&&(t=r),e=vs(e),t=ws({},t,i,Qi);var o,a,s=ws({},t.imports,i.imports,Qi),l=Fs(s),c=Qt(s,l),d=0,u=t.interpolate||xe,f="__p += '",h=De((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),p="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(h,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(d,l).replace(we,ir),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),f+="';\n";var g=Ae.call(t,"variable")&&t.variable;if(g){if(de.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(W,""):f).replace(V,"$1").replace(Y,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+f).apply(r,c)}));if(m.source=f,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>f)return[];var r=p,n=vr(e,p);t=lo(t),e-=p;for(var i=Xt(n,t);++r<e;)t(r);return i},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,f):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(e,t,n){if((e=vs(e))&&(n||t===r))return Gt(e);if(!e||!(t=ci(t)))return e;var i=fr(e),o=fr(t);return wi(i,er(i,o),tr(i,o)+1).join("")},Pr.trimEnd=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.slice(0,hr(e)+1);if(!e||!(t=ci(t)))return e;var i=fr(e);return wi(i,0,tr(i,fr(t))+1).join("")},Pr.trimStart=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=fr(e);return wi(i,er(i,fr(t))).join("")},Pr.truncate=function(e,t){var n=30,i="...";if(es(t)){var o="separator"in t?t.separator:o;n="length"in t?ps(t.length):n,i="omission"in t?ci(t.omission):i}var a=(e=vs(e)).length;if(or(e)){var s=fr(e);a=s.length}if(n>=a)return e;var l=n-ur(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(o===r)return c+i;if(s&&(l+=c.length-l),os(o)){if(e.slice(l).search(o)){var d,u=c;for(o.global||(o=De(o.source,vs(he.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var f=d.index;c=c.slice(0,f===r?l:f)}}else if(e.indexOf(ci(o),l)!=l){var h=c.lastIndexOf(o);h>-1&&(c=c.slice(0,h))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,pr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Xs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(wl={},xn(Pr,(function(e,t){Ae.call(Pr.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pr.VERSION="4.17.21",Dt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),Dt(["drop","take"],(function(e,t){Wr.prototype[e]=function(n){n=n===r?1:br(ps(n),0);var i=this.__filtered__&&!t?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,p),type:e+(i.__dir__<0?"Right":"")}),i},Wr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Dt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Dt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Dt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(lo(e)))},Wr.prototype.slice=function(e,t){e=ps(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Wr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ps(t))<0?n.dropRight(-t):n.take(t-e)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(p)},xn(Wr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Pr[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Pr.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Wr,c=s[0],d=l||Va(t),u=function(e){var t=o.apply(Pr,Mt([e],s));return i&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){t=g?t:new Wr(this);var m=e.apply(t,s);return m.__actions__.push({func:ha,args:[u],thisArg:r}),new Hr(m,f)}return p&&g?e.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),Dt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Ae.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Li(r,2).name]=[{name:"wrapper",func:r}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,i=r?e.length:0,o=function(e,t,r){var n=-1,i=r.length;for(;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&i==l&&h==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===r&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Pr.prototype.plant=function(e){for(var t,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Pr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wr){var t=e;return this.__actions__.length&&(t=new Wr(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ea],thisArg:r}),new Hr(t,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Ze&&(Pr.prototype[Ze]=function(){return this}),Pr}();gt?((gt.exports=gr)._=gr,pt._=gr):ht._=gr}).call(Ei)}(dj,dj.exports);var uj=dj.exports;const fj=U.default.forwardRef(((r,n)=>{var{value:i,readOnly:o,"data-testid":a,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:p,maskChar:g="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:C,onChange:S,onFocus:j,onBlur:k,onTryAgain:D}=r,T=G(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const E=o&&uj.isEmpty(i),[O,F]=t.useState(!b),[I,_]=t.useState(i||"");t.useEffect((()=>{_(i||"")}),[i]);const M=e=>{P(!1),j&&j(e)},A=e=>{P(!0),k&&k(e)},B=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}_(t),e.target.value=t,S&&S(e)},R=()=>{o&&D&&D()},z=()=>{P(!O)},P=e=>{F(e),e?x&&x():C&&C()},L=()=>!(null==I?void 0:I.toString().length)||b,N=()=>{if(E)return e.jsx(e.Fragment,{});const t=L();return e.jsx(tj,{"data-testid":"icon-"+(O?"masked":"unmasked"),onClick:t?void 0:z,$isDisabled:t,$inactiveColor:p,$activeColor:h,children:O?f:u})};return e.jsx("div",{"aria-busy":"loading"===y,"aria-live":"polite",children:(()=>{if(o)switch(y){case"fail":return e.jsxs(cj,{onClick:R,"data-testid":"try-again-button",children:[e.jsxs(aj,{children:[e.jsx(sj,{}),e.jsx(lj,{children:"Error"})]}),e.jsx(oj,{children:"Try again?"})]});case"loading":return e.jsxs(rj,{children:[e.jsx(ij,{}),e.jsx(nj,{children:"Retrieving..."})]})}return e.jsx(ej,Object.assign({ref:n,"data-testid":`${a||"masked-input"}${O?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:o?void 0:M,onBlur:o?void 0:A,onClick:o?z:void 0,onChange:B,value:E?"-":O&&!b?ed.maskValue(I,{maskChar:g,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):I,readOnly:o,error:m,$isDisabled:L()},T))})()})})),hj=U.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(lx,{id:o,label:n,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e.jsx(fj,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},f))})})),pj=q.default.div`
    font-weight: ${e=>e.$bold?Xs.Spec["weight-semibold"]:Xs.Spec["weight-regular"]};

    ${e=>e.$disabled?i.css`
                color: ${qs["text-disabled"]};
            `:e.$selected?i.css`
                color: ${qs["text-selected"]};
            `:i.css`
                color: ${qs.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ol(e.$maxLines||2)}
    overflow-wrap: break-word;
`,gj=q.default.div`
    color: ${qs["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ol(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${Xs["body-md-semibold"]}
                `:i.css`
                    ${Xs["body-baseline-regular"]}
                `}
`,mj=q.default.span`
    font-weight: ${Xs.Spec["weight-semibold"]};
`,bj=q.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${pj} {
                        display: inline;
                    }

                    ${gj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,vj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,yj=q.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,xj=({bold:r,displayType:n="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:f="default"})=>{const h=i.useTheme(),p="small"===f?Xs.Spec["body-size-md"]({theme:h}):Xs.Spec["body-size-baseline"]({theme:h}),g=Xs.Spec["font-family"]({theme:h}),{ref:m,width:b}=Xe(),v=t.useCallback((e=>{if("inline"!==n||!b)return!1;return ed.getTextWidth(e,`${p} '${g}'`)>b*s-50}),[b,n,p,g,s]),y=t.useMemo((()=>v(o)),[v,o]),x=t.useMemo((()=>d&&v(d)),[v,d]),w=y||x?"next-line":n,$=t=>{if(!a)return t;const r=a.toLowerCase().trim(),n=t.toLowerCase().indexOf(r),i=n+a.length;return-1===n?t:e.jsxs(e.Fragment,{children:[o.slice(0,n),e.jsx(mj,{$variant:f,children:o.slice(n,i)}),o.slice(i)]})},C=t=>e.jsxs(e.Fragment,{children:[e.jsx(vj,{$maxLines:s,"aria-hidden":!0,children:$(t)}),e.jsx(yj,{$maxLines:s,"aria-hidden":!0,children:$(t)})]});return e.jsxs(bj,{ref:m,$labelDisplayType:w,$variant:f,children:[e.jsx(pj,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&y?C(o):$(o)}),d&&e.jsx(gj,{"aria-label":d,$maxLines:s,$truncateType:u,$labelDisplayType:n,children:"middle"===u&&x?C(d):d})]})};function wj(e){return()=>e}function $j(e){e()}function Cj(e,t){return r=>e(t(r))}function Sj(e,t){return()=>e(t)}function jj(e,t){return r=>e(t,r)}function kj(e){return void 0!==e}function Dj(){}function Tj(e,t){return t(e),e}function Ej(e,t){return t(e)}function Oj(...e){return e}function Fj(e,t){return e(1,t)}function Ij(e,t){e(0,t)}function _j(e){e(2)}function Mj(e){return e(4)}function Aj(e,t){return Fj(e,jj(t,0))}function Bj(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function Rj(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function zj(e,t){return e===t}function Pj(e=zj){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Lj(e){return t=>r=>{e(r)&&t(r)}}function Nj(e){return t=>Cj(t,e)}function Hj(e){return t=>()=>{t(e)}}function Wj(e,...t){const r=function(...e){return t=>e.reduceRight(Ej,t)}(...t);return(t,n)=>{switch(t){case 2:return void _j(e);case 1:return Fj(e,r(n))}}}function Vj(e,t){return r=>n=>{r(t=e(t,n))}}function Yj(e){return t=>r=>{e>0?e--:t(r)}}function Uj(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Kj(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);Fj(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function qj(e){let t=e;const r=Gj();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Xj(e,t){return Tj(qj(t),(t=>Aj(e,t)))}function Gj(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Zj(e){return Tj(Gj(),(t=>Aj(e,t)))}function Qj(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Jj(),singleton:r}}const Jj=()=>Symbol();function ek(...e){const t=Gj(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);Fj(e,(e=>{r[o]=e,n|=a,n===i&&Ij(t,r)}))})),function(e,o){switch(e){case 2:return void _j(t);case 1:return n===i&&o(r),Fj(t,o)}}}function tk(e,t=zj){return Wj(e,Pj(t))}function rk(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map($j)}}(...e.map((e=>Fj(e,r))))}}}var nk=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(nk||{});const ik={0:"debug",3:"error",1:"log",2:"warn"},ok=Qj((()=>{const e=qj(3);return{log:qj(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:Mj(e))&&console[ik[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function ak(e,t,r){return sk(e,t,r).callbackRef}function sk(e,t,r){const n=U.default.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const o=U.default.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(o.observe(e),n.current=e):(n.current&&o.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function lk(e,t,r,n,i,o,a,s,l){const c=U.default.useCallback((r=>{const l=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,r);if(0===c&&n("Zero-sized element, this should not happen",{child:i},nk.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,s?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=a?s?a.scrollLeft:a.scrollTop:d?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,f=a?s?a.scrollWidth:a.scrollHeight:d?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,h=a?s?a.offsetWidth:a.offsetHeight:d?s?window.innerWidth:window.innerHeight:s?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==o||o(s?ck("column-gap",getComputedStyle(r).columnGap,i):ck("row-gap",getComputedStyle(r).rowGap,i)),null!==l&&e(l)}),[e,t,i,o,a,n]);return sk(c,r,l)}function ck(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,nk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function dk(e,t,r){const n=U.default.useRef(null),i=U.default.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:o,ref:a}=sk(i,!0,r),s=U.default.useCallback((()=>{i(a.current)}),[i,a]);return U.default.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),o}const uk=Qj((()=>{const e=Gj(),t=Gj(),r=qj(0),n=Gj(),i=qj(0),o=Gj(),a=Gj(),s=qj(0),l=qj(0),c=qj(0),d=qj(0),u=Gj(),f=Gj(),h=qj(!1),p=qj(!1),g=qj(!1);return Aj(Wj(e,Nj((({scrollTop:e})=>e))),t),Aj(Wj(e,Nj((({scrollHeight:e})=>e))),a),Aj(t,i),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),fk={lvl:0};function hk(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function pk(e){return e===fk}function gk(e,t){if(!pk(e))return t===e.k?e.v:t<e.k?gk(e.l,t):gk(e.r,t)}function mk(e,t,r="k"){if(pk(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=mk(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return mk(e.l,t,r)}function bk(e,t,r){return pk(e)?Tk(t,r,1):t===e.k?Sk(e,{k:t,v:r}):t<e.k?Ek(Sk(e,{l:bk(e.l,t,r)})):Ek(Sk(e,{r:bk(e.r,t,r)}))}function vk(){return fk}function yk(e,t,r){if(pk(e))return[];return function(e){return hk(e,(({k:e,v:t})=>({index:e,value:t})))}($k(e,mk(e,t)[0],r))}function xk(e,t){if(pk(e))return fk;const{k:r,l:n,r:i}=e;if(t===r){if(pk(n))return i;if(pk(i))return n;{const[t,r]=Dk(n);return Ck(Sk(e,{k:t,l:jk(n),v:r}))}}return Ck(Sk(e,t<r?{l:xk(n,t)}:{r:xk(i,t)}))}function wk(e){return pk(e)?[]:[...wk(e.l),{k:e.k,v:e.v},...wk(e.r)]}function $k(e,t,r){if(pk(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat($k(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat($k(o,t,r))),s}function Ck(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(kk(t))return Ok(Sk(e,{lvl:r-1}));if(!pk(t)&&!pk(t.r))return Sk(t.r,{l:Sk(t,{r:t.r.l}),lvl:r,r:Sk(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(kk(e))return Fk(Sk(e,{lvl:r-1}));if(pk(n)||pk(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=kk(t)?n.lvl-1:n.lvl;return Sk(t,{l:Sk(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Fk(Sk(n,{l:t.r,lvl:i}))})}}function Sk(e,t){return Tk(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function jk(e){return pk(e.r)?e.l:Ck(Sk(e,{r:jk(e.r)}))}function kk(e){return pk(e)||e.lvl>e.r.lvl}function Dk(e){return pk(e.r)?[e.k,e.v]:Dk(e.r)}function Tk(e,t,r,n=fk,i=fk){return{k:e,l:n,lvl:r,r:i,v:t}}function Ek(e){return Fk(Ok(e))}function Ok(e){const{l:t}=e;return pk(t)||t.lvl!==e.lvl?e:Sk(t,{r:Sk(e,{l:t.r})})}function Fk(e){const{lvl:t,r:r}=e;return pk(r)||pk(r.r)||r.lvl!==t||r.r.lvl!==t?e:Sk(r,{l:Sk(e,{r:r.l}),lvl:t+1})}function Ik(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function _k(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Mk=Qj((()=>({recalcInProgress:qj(!1)})),[],{singleton:!0});function Ak(e,t,r){return e[Bk(e,t,r)]}function Bk(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Rk(e,t){return Math.round(e.getBoundingClientRect()[t])}function zk(e){return!pk(e.groupOffsetTree)}function Pk({index:e},t){return t===e?0:t<e?-1:1}function Lk({offset:e},t){return t===e?0:t<e?-1:1}function Nk(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=Ak(t,e,Pk),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function Hk(e,t){if(!zk(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Wk(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Hk("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Vk(e,t,r,n=0){return n>0&&(t=Math.max(t,Ak(e,n,Pk).offset)),hk(function(e,t,r,n){const i=Bk(e,t,n),o=Bk(e,r,n,i);return e.slice(i,o+1)}(e,t,r,Lk),qk)}function Yk(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,nk.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&pk(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>bk(bk(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=pk(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),pk(e)){e=bk(e,0,i);continue}const a=yk(e,o-1,t+1);if(a.some(Xk(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=xk(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=bk(e,t+1,o));l&&(e=bk(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Kk(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>bk(e,t,Nk(t,u,i))),vk()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Uk(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Kk(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=Bk(i,t-1,Pk),s=i[l].offset;const e=mk(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===mk(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of yk(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function qk(e){return{index:e.index,value:e}}function Xk(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Gk={offsetHeight:"height",offsetWidth:"width"},Zk=Qj((([{log:e},{recalcInProgress:t}])=>{const r=Gj(),n=Gj(),i=Xj(n,0),o=Gj(),a=Gj(),s=qj(0),l=qj([]),c=qj(void 0),d=qj(void 0),u=qj(((e,t)=>Rk(e,Gk[t]))),f=qj(void 0),h=qj(0),p={groupIndices:[],groupOffsetTree:vk(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:vk()},g=Xj(Wj(r,Kj(l,e,h),Vj(Yk,p),Pj()),p),m=Xj(Wj(l,Pj(),Vj(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Nj((({prev:e})=>e))),[]);Aj(Wj(l,Lj((e=>e.length>0)),Kj(g,h),Nj((([e,t,r])=>{const n=e.reduce(((e,n,i)=>bk(e,n,Nk(n,t.offsetTree,r)||i)),vk());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),Aj(Wj(n,Kj(g),Lj((([e,{lastIndex:t}])=>e<t)),Nj((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Aj(c,d);const b=Xj(Wj(c,Nj((e=>void 0===e))),!0);Aj(Wj(d,Lj((e=>void 0!==e&&pk(Mj(g).sizeTree))),Nj((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Zj(Wj(r,Kj(g),Vj((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),Nj((e=>e.changed))));Fj(Wj(s,Vj(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Nj((e=>e.diff))),(e=>{const{groupIndices:r}=Mj(g);if(e>0)Ij(t,!0),Ij(o,e+Uk(e,r));else if(e<0){const t=Mj(m);t.length>0&&(e-=Uk(-e,t)),Ij(a,e)}})),Fj(Wj(s,Kj(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},nk.ERROR)}));const y=Zj(o);Aj(Wj(o,Kj(g),Nj((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=gk(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=wk(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return wk(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=Zj(Wj(a,Kj(g,h),Nj((([e,{offsetTree:t},r])=>Nk(-e,t,r)))));return Aj(Wj(a,Kj(g,h),Nj((([e,t,r])=>{if(t.groupIndices.length>0){if(pk(t.sizeTree))return t;let n=vk();const i=Mj(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=wk(t.sizeTree).reduce(((t,{k:r,v:n})=>bk(t,Math.max(0,r+e),n)),n),o!==-e){n=bk(n,0,gk(t.sizeTree,s));n=bk(n,1,mk(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Kk(t.offsetTree,0,n,r)}}{const n=wk(t.sizeTree).reduce(((t,{k:r,v:n})=>bk(t,Math.max(0,r+e),n)),vk());return{...t,sizeTree:n,...Kk(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),Oj(ok,Mk),{singleton:!0});function Qk(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Jk=Qj((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=Gj(),a=Gj(),s=Zj(Wj(o,Nj(Qk)));return Aj(Wj(s,Nj((e=>e.totalCount))),r),Aj(Wj(s,Nj((e=>e.groupIndices))),e),Aj(Wj(ek(i,t,n),Lj((([e,t])=>zk(t))),Nj((([e,t,r])=>mk(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Pj(),Nj((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),Oj(Zk,uk)),eD=Qj((([{log:e}])=>{const t=qj(!1),r=Zj(Wj(t,Lj((e=>e)),Pj()));return Fj(t,(t=>{t&&Mj(e)("props updated",{},nk.DEBUG)})),{didMount:r,propsReady:t}}),Oj(ok),{singleton:!0}),tD=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function rD(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!tD)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const nD=Qj((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=Gj(),p=Gj(),g=qj(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Ij(l,!1)}return Aj(Wj(h,Kj(r,u,n,g,s,a,f),Kj(e,o,i),Nj((([[e,r,n,i,o,a,s,c],u,f,g])=>{const x=rD(e),{align:w,behavior:$,offset:C}=x,S=i-1,j=Wk(x,r,S);let k=Nk(j,r.offsetTree,u)+a;"end"===w?(k+=f+mk(r.sizeTree,j)[1]-n+g,j===S&&(k+=s)):"center"===w?k+=(f+mk(r.sizeTree,j)[1]-n+g)/2:k-=o,C&&(k+=C);const D=t=>{y(),t?(c("retrying to scroll to",{location:e},nk.DEBUG),Ij(h,e)):(Ij(p,!0),c("list did not change, scroll successful",{},nk.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Fj(t,(t=>{e=e||t})),m=Bj(d,(()=>{D(e)}))}else m=Bj(Wj(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),D);return b=setTimeout((()=>{y()}),1200),Ij(l,!0),c("scrolling from index to",{behavior:$,index:j,top:k},nk.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Oj(Zk,uk,ok),{singleton:!0});function iD(e,t){0==e?t():requestAnimationFrame((()=>{iD(e-1,t)}))}function oD(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const aD=Qj((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=qj(!0),l=qj(0),c=qj(!0);return Aj(Wj(a,Kj(l),Lj((([e,t])=>!!t)),Hj(!1)),s),Aj(Wj(a,Kj(l),Lj((([e,t])=>!!t)),Hj(!1)),c),Fj(Wj(ek(t,a),Kj(s,r,e,c),Lj((([[,e],t,{sizeTree:r},n,i])=>e&&(!pk(r)||kj(n))&&!t&&!i)),Kj(l)),(([,e])=>{Bj(i,(()=>{Ij(c,!0)})),iD(4,(()=>{Bj(n,(()=>{Ij(s,!0)})),Ij(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Oj(Zk,uk,nD,eD),{singleton:!0});function sD(e,t){return Math.abs(e-t)<1.01}const lD="up",cD="down",dD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},uD=Qj((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=qj(!1),s=qj(!0),l=Gj(),c=Gj(),d=qj(4),u=qj(0),f=Xj(Wj(rk(Wj(tk(i),Yj(1),Hj(!0)),Wj(tk(i),Yj(1),Hj(!1),Rj(100))),Pj()),!1),h=Xj(Wj(rk(Wj(r,Hj(!0)),Wj(r,Hj(!1),Rj(200))),Pj()),!1);Aj(Wj(ek(tk(i),tk(u)),Nj((([e,t])=>e<=t)),Pj()),s),Aj(Wj(s,Uj(50)),c);const p=Zj(Wj(ek(n,tk(o),tk(t),tk(e),tk(d)),Vj(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),dD),Pj(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Xj(Wj(n,Vj(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(sD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Lj((e=>e.changed)),Nj((e=>e.jump))),0);Aj(Wj(p,Nj((e=>e.atBottom))),a),Aj(Wj(a,Uj(50)),l);const m=qj(cD);Aj(Wj(n,Nj((({scrollTop:e})=>e)),Pj(),Vj(((e,t)=>Mj(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?lD:cD,prevScrollTop:t}),{direction:cD,prevScrollTop:0}),Nj((e=>e.direction))),m),Aj(Wj(n,Uj(50),Hj("none")),m);const b=qj(0);return Aj(Wj(f,Lj((e=>!e)),Hj(0)),b),Aj(Wj(i,Uj(100),Kj(f),Lj((([e,t])=>!!t)),Vj((([e,t],[r])=>[t,r]),[0,0]),Nj((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),Oj(uk)),fD="top",hD="bottom",pD="none";function gD(e,t,r){return"number"==typeof e?r===lD&&t===fD||r===cD&&t===hD?e:0:r===lD?t===fD?e.main:e.reverse:t===hD?e.main:e.reverse}function mD(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const bD=Qj((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=Gj(),a=qj(0),s=qj(0),l=qj(0),c=Xj(Wj(ek(tk(n),tk(i),tk(r),tk(o,_k),tk(l),tk(a),tk(t),tk(e),tk(s)),Nj((([e,t,r,[n,i],o,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(r-d,0);let h=pD;const p=mD(c,fD),g=mD(c,hD);return n-=l,i+=r+s,(n+=r+s)>e+u-p&&(h=lD),(i-=l)<e-f+t+g&&(h=cD),h!==pD?[Math.max(d-r-gD(o,fD,h)-p,0),d-f-s+t+gD(o,hD,h)+g]:null})),Lj((e=>null!=e)),Pj(_k)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),Oj(uk),{singleton:!0});const vD={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function yD(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,f=c,h=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:o,items:wD(e,i,o),offsetBottom:h,offsetTop:c,top:f,topItems:wD(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function xD(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=oD(t,s);return yD(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function wD(e,t,r){if(0===e.length)return[];if(!zk(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=yk(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const $D=Qj((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=qj([]),m=qj(0),b=Gj();Aj(o.topItemsIndexes,g);const v=Xj(Wj(ek(h,p,tk(l,_k),tk(i),tk(n),tk(c),d,tk(g),tk(t),tk(r),e),Lj((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),Nj((([,,[e,t],r,n,i,o,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:f}=d,h=Mj(m);if(0===r)return{...vD,totalCount:r};if(0===e&&0===t)return 0===h?{...vD,totalCount:r}:xD(h,i,n,s,l,c||[]);if(pk(f))return h>0?null:yD(function(e,t,r){if(zk(t)){const n=Hk(e,t);return[{index:mk(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(oD(i,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of yk(f,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:i}),r+=i}}if(!o)return yD([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=Vk(u,e,t,g);if(0===b.length)return null;const v=r-1;return yD(Tj([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<g&&(o+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(o>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,r,l,d,s)})),Lj((e=>null!==e)),Pj()),vD);Aj(Wj(e,Lj(kj),Nj((e=>null==e?void 0:e.length))),i),Aj(Wj(v,Nj((e=>e.topListHeight))),u),Aj(u,s),Aj(Wj(v,Nj((e=>[e.top,e.bottom]))),a),Aj(Wj(v,Nj((e=>e.items))),b);const y=Zj(Wj(v,Lj((({items:e})=>e.length>0)),Kj(i,e),Lj((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Nj((([,e,t])=>[e-1,t])),Pj(_k),Nj((([e])=>e)))),x=Zj(Wj(v,Uj(200),Lj((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Nj((({items:e})=>e[0].index)),Pj())),w=Zj(Wj(v,Lj((({items:e})=>e.length>0)),Nj((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Pj(Ik)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),Oj(Zk,Jk,bD,aD,nD,uD,eD,Mk),{singleton:!0}),CD=Qj((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=Gj(),a=Xj(Wj(ek(r,e,n,t,i),Nj((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return Aj(tk(a),o),{totalListHeight:a,totalListHeightChanged:o}}),Oj(uk,$D),{singleton:!0}),SD=Qj((([{viewportHeight:e},{totalListHeight:t}])=>{const r=qj(!1),n=Xj(Wj(ek(r,e,t),Lj((([e])=>e)),Nj((([,e,t])=>Math.max(0,e-t))),Uj(0),Pj()),0);return{alignToBottom:r,paddingTopAddition:n}}),Oj(uk,CD),{singleton:!0});function jD(e){return!!e&&("smooth"===e?"smooth":"auto")}const kD=Qj((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=qj(!1),u=Gj();let f=null;function h(e){Ij(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Bj(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(Mj(l)("scrolling to bottom due to increased size",{},nk.DEBUG),h("auto"))}));setTimeout(t,100)}return Fj(Wj(ek(Wj(tk(t),Yj(1)),a),Kj(tk(d),n,o,c),Nj((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?jD(e(t)):t&&jD(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Lj((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=Bj(e,(()=>{Mj(l)("following output to ",{totalCount:r},nk.DEBUG),h(t),f=null}))})),Fj(Wj(ek(tk(d),t,s),Lj((([e,,t])=>e&&t)),Vj((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Lj((({refreshed:e})=>e)),Kj(d,t)),(([,e])=>{Mj(o)&&p(!1!==e)})),Fj(u,(()=>{p(!1!==Mj(d))})),Fj(ek(tk(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),Oj(Zk,uD,nD,aD,eD,ok,uk)),DD=Qj((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(Aj(Wj(s,Kj(o),Lj((([,e])=>0!==e)),Kj(i,n,t,r,e),Nj((([[,e],t,r,n,i,o=[]])=>xD(e,t,r,n,i,o)))),a),{})),Oj(Zk,aD,$D,eD),{singleton:!0}),TD=Qj((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=qj(0);return Fj(Wj(e,Kj(n),Lj((([,e])=>0!==e)),Nj((([,e])=>({top:e})))),(e=>{Bj(Wj(r,Yj(1),Lj((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Ij(t,e)}))}))})),{initialScrollTop:n}}),Oj(eD,uk,$D),{singleton:!0}),ED=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,OD=Qj((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=Gj();return Aj(Wj(d,Kj(t,l,r,o,i,n,s),Kj(e),Nj((([[e,t,r,n,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=ED,done:h,...p}=e,g=Wk(e,t,n-1),m=Nk(g,t.offsetTree,c)+i+o,b=f({itemBottom:m+mk(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+o});return b?h&&Bj(Wj(a,Lj((e=>!e)),Yj(Mj(a)?1:2)),h):h&&h(),b})),Lj((e=>null!==e))),c),{scrollIntoView:d}}),Oj(Zk,uk,nD,$D,ok),{singleton:!0}),FD=Qj((([{scrollVelocity:e}])=>{const t=qj(!1),r=Gj(),n=qj(!1);return Aj(Wj(e,Kj(n,t,r),Lj((([e,t])=>!!t)),Nj((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),Pj()),t),Fj(Wj(ek(t,e,r),Kj(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Oj(uD),{singleton:!0}),ID=Qj((([{scrollContainerState:e,scrollTo:t}])=>{const r=Gj(),n=Gj(),i=Gj(),o=qj(!1),a=qj(void 0);return Aj(Wj(ek(r,n),Nj((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Aj(Wj(t,Kj(n),Nj((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),Oj(uk)),_D=Qj((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Gj(),d=qj(void 0),u=qj(null),f=qj(null);return Aj(s,u),Aj(l,f),Fj(Wj(c,Kj(t,n,a,u,f,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return wk(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),Aj(Wj(d,Lj(kj),Nj(MD)),i),Aj(Wj(o,Kj(d),Lj((([,e])=>void 0!==e)),Pj(),Nj((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),Oj(Zk,uk,aD,eD,ID));function MD(e){return{align:"start",index:0,offset:e.scrollTop}}const AD=Qj((([{topItemsIndexes:e}])=>{const t=qj(0);return Aj(Wj(t,Lj((e=>e>=0)),Nj((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Oj($D));function BD(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const RD=BD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),zD=Qj((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Zj(Wj(l,Kj(a),Vj((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),Lj((([e])=>0!==e)),Kj(n,s,r,i,h,p),Lj((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===lD)),Nj((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},nk.DEBUG),e)))));function m(r){r>0?(Ij(t,{behavior:"auto",top:-r}),Ij(e,0)):(Ij(e,0),Ij(t,{behavior:"auto",top:-r}))}return Fj(Wj(g,Kj(e,o)),(([t,r,n])=>{n&&RD()?Ij(e,r-t):m(-t)})),Fj(Wj(ek(Xj(o,!1),e,p),Lj((([e,t,r])=>!e&&!r&&0!==t)),Nj((([e,t])=>t)),Uj(1)),m),Aj(Wj(u,Nj((e=>({top:-e})))),t),Fj(Wj(c,Kj(f,d),Nj((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=gk(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{Ij(e,r),requestAnimationFrame((()=>{Ij(t,{top:r}),requestAnimationFrame((()=>{Ij(e,0),Ij(p,!1)}))}))})),{deviation:e}}),Oj(uk,uD,$D,Zk,ok,Mk)),PD=Qj((([e,t,r,n,i,o,a,s,l,c])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...c})),Oj(bD,DD,eD,FD,CD,TD,SD,ID,OD,ok)),LD=Qj((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},j])=>(Aj(x.rangeChanged,j.scrollSeekRangeChanged),Aj(Wj(j.windowViewportRect,Nj((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...j,...g,sizes:l,...m})),Oj(Zk,aD,uk,_D,kD,$D,nD,zD,AD,Jk,PD));function ND(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const HD=typeof document<"u"?U.default.useLayoutEffect:U.default.useEffect;function WD(t,r,n){const i=Object.keys(r.required||{}),o=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),s=Object.keys(r.events||{}),l=U.default.createContext({});function c(e,t){e.propsReady&&Ij(e.propsReady,!1);for(const n of i){Ij(e[r.required[n]],t[n])}for(const n of o)if(n in t){Ij(e[r.optional[n]],t[n])}e.propsReady&&Ij(e.propsReady,!0)}function d(e){return s.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?r===o?void 0:(n(),r=o,t=Fj(e,o),t):(n(),Dj);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const u=U.default.forwardRef(((u,f)=>{const{children:h,...p}=u,[g]=U.default.useState((()=>Tj(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{c(e,p)})))),[m]=U.default.useState(Sj(d,g));HD((()=>{for(const e of s)e in p&&Fj(m[e],p[e]);return()=>{Object.values(m).map(_j)}}),[p,m,g]),HD((()=>{c(g,p)})),U.default.useImperativeHandle(f,wj(function(e){return a.reduce(((t,n)=>(t[n]=t=>{Ij(e[r.methods[n]],t)},t)),{})}(g)));const b=n;return e.jsx(l.Provider,{value:g,children:n?e.jsx(b,{...ND([...i,...o,...s],p),children:h}):h})})),f=U.default.version.startsWith("18")?e=>{const t=U.default.useContext(l)[e],r=U.default.useCallback((e=>Fj(t,e)),[t]);return U.default.useSyncExternalStore(r,(()=>Mj(t)),(()=>Mj(t)))}:e=>{const t=U.default.useContext(l)[e],[r,n]=U.default.useState(Sj(Mj,t));return HD((()=>Fj(t,(e=>{e!==r&&n(wj(e))}))),[t,r]),r};return{Component:u,useEmitter:(e,t)=>{const r=U.default.useContext(l)[e];HD((()=>Fj(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>U.default.useCallback(jj(Ij,U.default.useContext(l)[e]),[e])}}const VD=U.default.createContext(void 0),YD=U.default.createContext(void 0),UD=typeof document<"u"?U.default.useLayoutEffect:U.default.useEffect;function KD(e,t,r,n=Dj,i,o){const a=U.default.useRef(null),s=U.default.useRef(null),l=U.default.useRef(null),c=U.default.useCallback((r=>{const n=r.target,i=n===window||n===document,a=o?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,c=o?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,d=o?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:c,scrollTop:Math.max(a,0),viewportHeight:d})};r.suppressFlushSync?u():K.default.flushSync(u),null!==s.current&&(a===s.current||a<=0||a===c-d)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return U.default.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(o?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let c,d,u;n===window?(d=Math.max(Rk(document.documentElement,o?"width":"height"),o?document.documentElement.scrollWidth:document.documentElement.scrollHeight),c=o?window.innerWidth:window.innerHeight,u=o?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[o?"scrollWidth":"scrollHeight"],c=Rk(n,o?"width":"height"),u=n[o?"scrollLeft":"scrollTop"]);const f=d-c;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),sD(c,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(i&&t(!0));i?(s.current=r.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,o&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const qD="-webkit-sticky",XD="sticky",GD=BD((()=>{if(typeof document>"u")return XD;const e=document.createElement("div");return e.style.position=qD,e.style.position===qD?qD:XD}));function ZD(e){return e}const QD=Qj((()=>{const e=qj((e=>`Item ${e}`)),t=qj(null),r=qj((e=>`Group ${e}`)),n=qj({}),i=qj(ZD),o=qj("div"),a=qj(Dj),s=(e,t=null)=>Xj(Wj(n,Nj((t=>t[e])),Pj()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),JD=Qj((([e,t])=>({...e,...t})),Oj(LD,QD)),eT=({height:t})=>e.jsx("div",{style:{height:t}}),tT={overflowAnchor:"none",position:GD(),zIndex:1},rT={overflowAnchor:"none"},nT={...rT,display:"inline-block",height:"100%"},iT=U.default.memo((function({showTopList:r=!1}){const n=wT("listState"),i=$T("sizeRanges"),o=wT("useWindowScroll"),a=wT("customScrollParent"),s=$T("windowScrollContainerState"),l=$T("scrollContainerState"),c=a||o?s:l,d=wT("itemContent"),u=wT("context"),f=wT("groupContent"),h=wT("trackItemSizes"),p=wT("itemSize"),g=wT("log"),m=$T("gap"),b=wT("horizontalDirection"),{callbackRef:v}=lk(i,p,h,r?Dj:c,g,m,a,b,wT("skipAnimationFrameInResizeObserver")),[y,x]=U.default.useState(0);xT("deviation",(e=>{y!==e&&x(e)}));const w=wT("EmptyPlaceholder"),$=wT("ScrollSeekPlaceholder")||eT,C=wT("ListComponent"),S=wT("ItemComponent"),j=wT("GroupComponent"),k=wT("computeItemKey"),D=wT("isSeeking"),T=wT("groupIndices").length>0,E=wT("alignToBottom"),O=wT("initialItemFinalLocationReached"),F=r?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:E?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:E?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...O?{}:{visibility:"hidden"}};return!r&&0===n.totalCount&&w?e.jsx(w,{...cT(w,u)}):e.jsx(C,{...cT(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:F,children:(r?n.topItems:n.items).map((e=>{const r=e.originalIndex,i=k(r+n.firstItemIndex,e.data,u);return D?t.createElement($,{...cT($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(j,{...cT(j,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:i,style:tT},f(e.index,u)):t.createElement(S,{...cT(S,u),...dT(S,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:b?nT:rT},T?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),oT={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},aT={outline:"none",overflowX:"auto",position:"relative"},sT=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),lT={position:GD(),top:0,width:"100%",zIndex:1};function cT(e,t){if("string"!=typeof e)return{context:t}}function dT(e,t){return{item:"string"==typeof e?void 0:t}}const uT=U.default.memo((function(){const t=wT("HeaderComponent"),r=$T("headerHeight"),n=wT("HeaderFooterTag"),i=ak(U.default.useMemo((()=>e=>{r(Rk(e,"height"))}),[r]),!0,wT("skipAnimationFrameInResizeObserver")),o=wT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...cT(t,o)})}):null})),fT=U.default.memo((function(){const t=wT("FooterComponent"),r=$T("footerHeight"),n=wT("HeaderFooterTag"),i=ak(U.default.useMemo((()=>e=>{r(Rk(e,"height"))}),[r]),!0,wT("skipAnimationFrameInResizeObserver")),o=wT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...cT(t,o)})}):null}));function hT({useEmitter:t,useEmitterValue:r,usePublisher:n}){return U.default.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=KD(s,c,l,d,void 0,f);return t("scrollTo",g),t("scrollBy",h),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?aT:oT,...o},tabIndex:0,...a,...cT(l,u),children:i})}))}function pT({useEmitter:t,useEmitterValue:r,usePublisher:n}){return U.default.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=KD(s,c,l,Dj,f);return UD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e.jsx(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...cT(l,h),children:i})}))}const gT=({children:t})=>{const r=U.default.useContext(VD),n=$T("viewportHeight"),i=$T("fixedItemHeight"),o=wT("alignToBottom"),a=wT("horizontalDirection"),s=ak(U.default.useMemo((()=>Cj(n,(e=>Rk(e,a?"width":"height")))),[n,a]),!0,wT("skipAnimationFrameInResizeObserver"));return U.default.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:sT(o),children:t})},mT=({children:t})=>{const r=U.default.useContext(VD),n=$T("windowViewportRect"),i=$T("fixedItemHeight"),o=wT("customScrollParent"),a=dk(n,o,wT("skipAnimationFrameInResizeObserver")),s=wT("alignToBottom");return U.default.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"window",ref:a,style:sT(s),children:t})},bT=({children:t})=>{const r=wT("TopItemListComponent")||"div",n=wT("headerHeight"),i={...lT,marginTop:`${n}px`},o=wT("context");return e.jsx(r,{style:i,...cT(r,o),children:t})},vT=U.default.memo((function(t){const r=wT("useWindowScroll"),n=wT("topItemsIndexes").length>0,i=wT("customScrollParent"),o=wT("context"),a=i||r?ST:CT,s=i||r?mT:gT;return e.jsxs(a,{...t,...cT(a,o),children:[n&&e.jsx(bT,{children:e.jsx(iT,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(uT,{}),e.jsx(iT,{}),e.jsx(fT,{})]})]})})),{Component:yT,useEmitter:xT,useEmitterValue:wT,usePublisher:$T}=WD(JD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},vT),CT=hT({useEmitter:xT,useEmitterValue:wT,usePublisher:$T}),ST=pT({useEmitter:xT,useEmitterValue:wT,usePublisher:$T}),jT=yT,kT={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},DT={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:TT,floor:ET,max:OT,min:FT,round:IT}=Math;function _T(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function MT(e,t){return e&&e.width===t.width&&e.height===t.height}function AT(e,t){return e&&e.column===t.column&&e.row===t.row}const BT=Qj((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=qj(0),C=qj(0),S=qj(kT),j=qj({height:0,width:0}),k=qj({height:0,width:0}),D=Gj(),T=Gj(),E=qj(0),O=qj(null),F=qj({column:0,row:0}),I=Gj(),_=Gj(),M=qj(!1),A=qj(0),B=qj(!0),R=qj(!1),z=qj(!1);Fj(Wj(p,Kj(A),Lj((([e,t])=>!!t))),(()=>{Ij(B,!1)})),Fj(Wj(ek(p,B,k,j,A,R),Lj((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{Ij(R,!0),iD(1,(()=>{Ij(D,e)})),Bj(Wj(c),(()=>{Ij(t,[0,0]),Ij(B,!0)}))})),Aj(Wj(_,Lj((e=>null!=e&&e.scrollTop>0)),Hj(0)),C),Fj(Wj(p,Kj(_),Lj((([,e])=>null!=e))),(([,e])=>{e&&(Ij(j,e.viewport),Ij(k,e.item),Ij(F,e.gap),e.scrollTop>0&&(Ij(M,!0),Bj(Wj(c,Yj(1)),(e=>{Ij(M,!1)})),Ij(l,{top:e.scrollTop})))})),Aj(Wj(j,Nj((({height:e})=>e))),u),Aj(Wj(ek(tk(j,MT),tk(k,MT),tk(F,((e,t)=>e&&e.column===t.column&&e.row===t.row)),tk(c)),Nj((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),Aj(Wj(ek(tk($),n,tk(F,AT),tk(k,MT),tk(j,MT),tk(O),tk(C),tk(M),tk(B),tk(A)),Lj((([,,,,,,,e])=>!e)),Nj((([e,[t,r],n,i,o,a,s,,l,c])=>{const{column:d,row:u}=n,{height:f,width:h}=i,{width:p}=o;if(0===s&&(0===e||0===p))return kT;if(0===h){const t=oD(c,e);return function(e){return{...DT,items:e}}(_T(t,t+Math.max(s-1,0),a))}const g=RT(p,h,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*ET((t+u)/(f+u)),b=g*TT((r+u)/(f+u))-1,b=FT(e-1,OT(b,g-1)),m=FT(b,OT(0,m))):(m=0,b=-1);const v=_T(m,b,a),{bottom:y,top:x}=zT(o,n,i,v),w=TT(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),Aj(Wj(O,Lj((e=>null!==e)),Nj((e=>e.length))),$),Aj(Wj(ek(j,k,S,F),Lj((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Nj((([e,t,{items:r},n])=>{const{bottom:i,top:o}=zT(e,n,t,r);return[o,i]})),Pj(_k)),t);const P=qj(!1);Aj(Wj(c,Kj(P),Nj((([e,t])=>t||0!==e))),P);const L=Zj(Wj(ek(S,$),Lj((([{items:e}])=>e.length>0)),Kj(P),Lj((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Nj((([[,e]])=>e-1)),Pj())),N=Zj(Wj(tk(S),Lj((({items:e})=>e.length>0&&0===e[0].index)),Hj(0),Pj())),H=Zj(Wj(tk(S),Kj(M),Lj((([{items:e},t])=>e.length>0&&!t)),Nj((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Pj(Ik),Uj(0)));Aj(H,h.scrollSeekRangeChanged),Aj(Wj(D,Kj(j,k,$,F),Nj((([e,t,r,n,i])=>{const o=rD(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=n-1),c=OT(0,c,FT(n-1,c));let d=PT(t,i,r,c);return"end"===a?d=IT(d-t.height+r.height):"center"===a&&(d=IT(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=Xj(Wj(S,Nj((e=>e.offsetBottom+e.bottom))),0);return Aj(Wj(x,Nj((e=>({height:e.visibleHeight,width:e.visibleWidth})))),j),{customScrollParent:m,data:O,deviation:E,footerHeight:i,gap:F,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:_,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:D,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:j,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:A,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:M,...w}}),Oj(bD,uk,uD,FD,eD,ID,ok));function RT(e,t,r){return OT(1,ET((e+r)/(ET(t)+r)))}function zT(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=PT(e,t,r,n[0].index);return{bottom:PT(e,t,r,n[n.length-1].index)+i,top:o}}function PT(e,t,r,n){const i=RT(e.width,r.width,t.column),o=ET(n/i),a=o*r.height+OT(0,o-1)*t.row;return a>0?a+t.row:a}const LT=Qj((()=>{const e=qj((e=>`Item ${e}`)),t=qj({}),r=qj(null),n=qj("virtuoso-grid-item"),i=qj("virtuoso-grid-list"),o=qj(ZD),a=qj("div"),s=qj(Dj),l=(e,r=null)=>Xj(Wj(t,Nj((t=>t[e])),Pj()),r),c=qj(!1),d=qj(!1);return Aj(tk(d),c),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),NT=Qj((([e,t])=>({...e,...t})),Oj(BT,LT)),HT=U.default.memo((function(){const r=GT("gridState"),n=GT("listClassName"),i=GT("itemClassName"),o=GT("itemContent"),a=GT("computeItemKey"),s=GT("isSeeking"),l=ZT("scrollHeight"),c=GT("ItemComponent"),d=GT("ListComponent"),u=GT("ScrollSeekPlaceholder"),f=GT("context"),h=ZT("itemDimensions"),p=ZT("gap"),g=GT("log"),m=GT("stateRestoreInProgress"),b=ZT("reportReadyState"),v=ak(U.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:eE("column-gap",getComputedStyle(e).columnGap,g),row:eE("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return UD((()=>{r.itemHeight>0&&r.itemWidth>0&&b(!0)}),[r]),m?null:e.jsx(d,{className:n,ref:v,...cT(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((n=>{const l=a(n.index,n.data,f);return s?e.jsx(u,{...cT(u,f),height:r.itemHeight,index:n.index,width:r.itemWidth},l):t.createElement(c,{...cT(c,f),className:i,"data-index":n.index,key:l},o(n.index,n.data,f))}))})})),WT=U.default.memo((function(){const t=GT("HeaderComponent"),r=ZT("headerHeight"),n=GT("headerFooterTag"),i=ak(U.default.useMemo((()=>e=>{r(Rk(e,"height"))}),[r]),!0,!1),o=GT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...cT(t,o)})}):null})),VT=U.default.memo((function(){const t=GT("FooterComponent"),r=ZT("footerHeight"),n=GT("headerFooterTag"),i=ak(U.default.useMemo((()=>e=>{r(Rk(e,"height"))}),[r]),!0,!1),o=GT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...cT(t,o)})}):null})),YT=({children:t})=>{const r=U.default.useContext(YD),n=ZT("itemDimensions"),i=ZT("viewportDimensions"),o=ak(U.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return U.default.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e.jsx("div",{ref:o,style:sT(!1),children:t})},UT=({children:t})=>{const r=U.default.useContext(YD),n=ZT("windowViewportRect"),i=ZT("itemDimensions"),o=GT("customScrollParent"),a=dk(n,o,!1);return U.default.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e.jsx("div",{ref:a,style:sT(!1),children:t})},KT=U.default.memo((function({...t}){const r=GT("useWindowScroll"),n=GT("customScrollParent"),i=n||r?JT:QT,o=n||r?UT:YT,a=GT("context");return e.jsx(i,{...t,...cT(i,a),children:e.jsxs(o,{children:[e.jsx(WT,{}),e.jsx(HT,{}),e.jsx(VT,{})]})})})),{Component:qT,useEmitter:XT,useEmitterValue:GT,usePublisher:ZT}=WD(NT,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},KT),QT=hT({useEmitter:XT,useEmitterValue:GT,usePublisher:ZT}),JT=pT({useEmitter:XT,useEmitterValue:GT,usePublisher:ZT});function eE(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,nk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const tE=U.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),rE=({children:r})=>{const[n,i]=t.useState(-1);return e.jsx(tE.Provider,{value:{focusedIndex:n,setFocusedIndex:i},children:r})},nE=q.default.div`
    overflow: hidden;
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    background: ${qs.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}

    ${tl.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${el["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${tl.MaxWidth.xs} {
        width: calc(100vw - ${el["xs-margin"]} * 2);
    }

    ${tl.MaxWidth.xxs} {
        width: calc(100vw - ${el["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${qs["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,iE=q.default.div`
    background: transparent;
    padding: ${Qs["spacing-8"]};
`,oE=q.default.ul`
    list-style-type: none;
`,aE=q.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${Qs["spacing-8"]};
    padding: ${Qs["spacing-12"]} ${Qs["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?i.css`
                cursor: not-allowed;
            `:e.$active&&e.$selected?i.css`
                background: ${qs["bg-hover"]};
            `:e.$active?i.css`
                background: ${qs["bg-hover-subtle"]};
            `:void 0}
`,sE=q.default(D.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${qs["icon-selected"]};
`,lE=q.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,cE=q.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qs["icon-selected"]};
`,dE=q.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qs["icon-primary-subtlest"]};
`,uE=q.default(j.SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qs["icon-disabled-subtle"]};
`,fE=q.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,hE=q.default(zf)`
    cursor: pointer;
    overflow: hidden;
    color: ${qs["text-primary"]};
    font-size: inherit;
`,pE=q.default(hE)`
    ${Xs["body-baseline-semibold"]}
`,gE=q.default(hE)`
    ${Xs["body-md-semibold"]}
    padding: ${Qs["spacing-8"]} ${Qs["spacing-8"]};
`,mE=q.default.div`
    width: 100%;
    display: flex;
    padding: ${Qs["spacing-12"]} ${Qs["spacing-16"]};
    align-items: center;
`,bE=q.default(s.ExclamationCircleFillIcon)`
    margin-right: ${Qs["spacing-4"]};
    color: ${qs["icon-error"]};
    height: 1em;
    width: 1em;
`,vE=q.default(kl)`
    margin-right: ${Qs["spacing-8"]};
    color: ${qs.icon};
`,yE=q.default.div`
    ${Xl()}
    color: ${qs["text-subtle"]};
    padding: 0 ${Qs["spacing-16"]} ${Qs["spacing-12"]}
        ${Qs["spacing-16"]};
`,xE=q.default.div`
    background: ${qs["bg-strong"]};
    border-radius: ${Js.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}
`,wE=q.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Qs["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${Qs["spacing-8"]} ${Qs["spacing-16"]}
              `:i.css`10px ${Qs["spacing-16"]}`};
`,$E=q.default(Rf)`
    flex: 1;
`,CE=q.default(x.MagnifierIcon)`
    color: ${qs.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,SE=q.default(il)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Qs["spacing-8"]};
    margin-left: -${Qs["spacing-8"]};
    color: ${qs.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,jE=t.forwardRef(((t,r)=>{var{value:n,variant:i,onClear:o}=t,a=G(t,["value","variant","onClear"]);return e.jsxs(xE,{$variant:i,children:[e.jsxs(wE,{$variant:i,children:[e.jsx(CE,{"aria-hidden":!0}),e.jsx($E,Object.assign({ref:r,value:n,$variant:i},a))]}),n&&e.jsx(SE,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]})})),kE=({listItems:r,multiSelect:n,maxSelectable:i,selectedItems:o,disableItemFocus:a,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,labelDisplayType:d="inline",variant:u="default",listboxId:f,width:h,topScrollItem:p,onSelectItem:g,onSelectAll:m,onDismiss:b,onRetry:v,valueExtractor:y,listExtractor:x,renderListItem:w,renderCustomCallToAction:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:j,searchPlaceholder:k="Search",searchFunction:D,onSearch:T})=>{const{focusedIndex:E,setFocusedIndex:O}=t.useContext(tE),[F,I]=t.useState(""),[_,M]=t.useState(null!=r?r:[]),A=ad(s),B=id(),R=t.useRef(null),z=t.useRef(null),P=t.useRef([]),L=t.useRef(null),N=t.useRef(null),H=!!i&&!!o&&(null==o?void 0:o.length)===i,W=e=>{const t=x?x(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},V=t.useCallback((e=>!!uS(o,(t=>hS(t,e)))),[o]),Y=td((()=>null==D?void 0:D(F))),U=td((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:r}=W(e),n=F.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),K=(e,t)=>{H&&!V(e)||(O(t),null==g||g(e,(e=>y?y(e):e)(e)))},q=e=>{const t=e.target.value;I(t),null==T||T()},X=()=>{var e;I(""),null===(e=L.current)||void 0===e||e.focus(),null==T||T()},G=()=>{null==v||v()};rd("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),E<_.length-1){const e=E+1;null===(t=P.current[e])||void 0===t||t.focus(),O(e)}break;case"ArrowUp":if(e.preventDefault(),E>0){const e=E-1;null===(r=P.current[e])||void 0===r||r.focus(),O(e)}else 0===E&&L.current&&(L.current.focus(),O(-1));break;case"Space":case"Enter":document.activeElement===P.current[E]&&(e.preventDefault(),_[E]&&K(_[E],E))}})),t.useEffect((()=>{var e;if(!p)return void(null===(e=N.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(p);N.current&&-1!==e&&(N.current.scrollToIndex({index:e}),O(e))}),0);return()=>clearTimeout(t)}),[P,r,O,p]),t.useEffect((()=>{var e,t,n;if(B)return;if(a||!r)return;const i=r.findIndex((e=>V(e)));L.current?(O(-1),setTimeout((()=>{var e;return null===(e=L.current)||void 0===e?void 0:e.focus()}),200)):E>0?(null===(e=N.current)||void 0===e||e.scrollToIndex({index:E,align:"center"}),setTimeout((()=>{var e;return null===(e=P.current[E])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=N.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),O(i),setTimeout((()=>{var e;return null===(e=P.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=N.current)||void 0===n||n.scrollToIndex({index:0}),O(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200))}),[V,a,E,r,B,O]),t.useEffect((()=>{B&&A&&(a||"success"===s&&L.current&&(O(-1),L.current.focus()))}),[B,A,s,O,a]),t.useEffect((()=>{var e;M(null!==(e=""===F?r:D?Y():U())&&void 0!==e?e:[])}),[Y,U,r,D,F]);const Z=t=>n?H&&!t?e.jsx(uE,{"aria-hidden":!0}):t?e.jsx(cE,{"aria-hidden":!0}):e.jsx(dE,{"aria-hidden":!0}):t?e.jsx(sE,{"aria-hidden":!0}):e.jsx(lE,{}),Q=(t,r)=>{const{title:n,secondaryLabel:i}=W(t);return e.jsx(xj,{displayType:d,label:n,maxLines:c,selected:r,disabled:!r&&H,sublabel:i,truncationType:l,variant:u})},J=(t,r)=>{if(!v||"success"===s){const i=V(t),o=r===E;return e.jsx(aE,{"aria-selected":i,"aria-multiselectable":n,"aria-disabled":!i&&H,"data-testid":"list-item",onClick:()=>K(t,r),onMouseEnter:()=>(e=>{O(e)})(r),ref:e=>{P.current[r]=e},role:"option",tabIndex:o?0:-1,$active:o,$selected:i,$disabled:!i&&H,children:w?w(t,{selected:i}):e.jsxs(e.Fragment,{children:[Z(i),Q(t,i)]})},((e,t)=>`item_${t}__${y?y(e):e}`)(t,r))}},ee=()=>{if((C||D)&&"success"===s)return e.jsx(jE,{ref:L,onChange:q,value:F,placeholder:k,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:u})},te=()=>{if(o&&n&&_.length>0&&!F&&"success"===s)return e.jsx(fE,{children:e.jsx(gE,{onClick:m,type:"button",$variant:u,children:i||0!==o.length?"Clear all":"Select all"})})},re=()=>{if(!S&&(F||!C)&&0===_.length&&"success"===s)return e.jsxs(e.Fragment,{children:[e.jsxs(mE,{"data-testid":"list-no-results",children:[e.jsx(bE,{"data-testid":"no-result-icon"}),"No results found."]}),j&&e.jsx(yE,{"data-testid":"no-result-desc",children:j})]})},ne=()=>{if(v&&"loading"===s)return e.jsxs(mE,{"data-testid":"list-loading",children:[e.jsx(vE,{}),"Loading..."]})},ie=()=>{if(v&&"fail"===s)return e.jsxs(mE,{"data-testid":"list-fail",children:[e.jsx(bE,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(pE,{onClick:G,type:"button",$variant:u,children:"Try again."})]})},oe=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx(oE,{role:"listbox",id:f,children:e.jsx(jT,Object.assign({ref:N,style:{height:"100%"},data:_,customScrollParent:null!==(t=R.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>J(t,e)},r?{initialItemCount:_.length}:{}),r?_.length:void 0)})};return e.jsxs(nE,{"data-testid":"dropdown-container",ref:R,$width:h,$variant:u,children:[e.jsxs(iE,{ref:z,"data-testid":"dropdown-list",children:[ee(),te(),re(),ne(),ie(),oe()]}),(()=>{if($)return e.jsx("div",{"data-testid":"custom-cta",children:$(b,_)})})()]})},DE=q.default(zf)`
    display: flex;
    align-items: center;
    gap: ${Qs["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Qs["spacing-16"]};

    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,TE=q.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Gs["duration-250"]} ${Gs["ease-default"]};

    svg {
        color: ${qs.icon};
        height: 1em;
        width: 1em;
    }
`,EE=t.forwardRef((({children:t,disabled:r,expanded:n,listboxId:i,popupRole:o,readOnly:a,variant:s},l)=>e.jsxs(DE,{ref:l,type:"button","aria-expanded":n,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s,children:[t,!a&&e.jsx(TE,{$expanded:n,$variant:s,children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})})]})));var OE=Symbol.for("immer-nothing"),FE=Symbol.for("immer-draftable"),IE=Symbol.for("immer-state"),_E="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function ME(e,...t){if("production"!==process.env.NODE_ENV){const r=_E[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var AE=Object.getPrototypeOf;function BE(e){return!!e&&!!e[IE]}function RE(e){return!!e&&(PE(e)||Array.isArray(e)||!!e[FE]||!!e.constructor?.[FE]||VE(e)||YE(e))}var zE=Object.prototype.constructor.toString();function PE(e){if(!e||"object"!=typeof e)return!1;const t=AE(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===zE}function LE(e,t){0===NE(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function NE(e){const t=e[IE];return t?t.type_:Array.isArray(e)?1:VE(e)?2:YE(e)?3:0}function HE(e,t){return 2===NE(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function WE(e,t,r){const n=NE(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function VE(e){return e instanceof Map}function YE(e){return e instanceof Set}function UE(e){return e.copy_||e.base_}function KE(e,t){if(VE(e))return new Map(e);if(YE(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=PE(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[IE];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(AE(e),t)}{const t=AE(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function qE(e,t=!1){return GE(e)||BE(e)||!RE(e)||(NE(e)>1&&(e.set=e.add=e.clear=e.delete=XE),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>qE(t,!0)))),e}function XE(){ME(2)}function GE(e){return Object.isFrozen(e)}var ZE,QE={};function JE(e){const t=QE[e];return t||ME(0,e),t}function eO(){return ZE}function tO(e,t){t&&(JE("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function rO(e){nO(e),e.drafts_.forEach(oO),e.drafts_=null}function nO(e){e===ZE&&(ZE=e.parent_)}function iO(e){return ZE={drafts_:[],parent_:ZE,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function oO(e){const t=e[IE];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function aO(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[IE].modified_&&(rO(t),ME(4)),RE(e)&&(e=sO(t,e),t.parent_||cO(t,e)),t.patches_&&JE("Patches").generateReplacementPatches_(r[IE].base_,e,t.patches_,t.inversePatches_)):e=sO(t,r,[]),rO(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==OE?e:void 0}function sO(e,t,r){if(GE(t))return t;const n=t[IE];if(!n)return LE(t,((i,o)=>lO(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return cO(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),LE(i,((i,a)=>lO(e,n,t,i,a,r,o))),cO(e,t,!1),r&&e.patches_&&JE("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function lO(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&ME(5),BE(i)){const a=sO(e,i,o&&t&&3!==t.type_&&!HE(t.assigned_,n)?o.concat(n):void 0);if(WE(r,n,a),!BE(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(RE(i)&&!GE(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;sO(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||cO(e,i)}}function cO(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&qE(t,r)}var dO={get(e,t){if(t===IE)return e;const r=UE(e);if(!HE(r,t))return function(e,t,r){const n=hO(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!RE(n)?n:n===fO(e.base_,t)?(gO(e),e.copy_[t]=mO(n,e)):n},has:(e,t)=>t in UE(e),ownKeys:e=>Reflect.ownKeys(UE(e)),set(e,t,r){const n=hO(UE(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=fO(UE(e),t),i=n?.[IE];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||HE(e.base_,t)))return!0;gO(e),pO(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==fO(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,gO(e),pO(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=UE(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){ME(11)},getPrototypeOf:e=>AE(e.base_),setPrototypeOf(){ME(12)}},uO={};function fO(e,t){const r=e[IE];return(r?UE(r):e)[t]}function hO(e,t){if(!(t in e))return;let r=AE(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=AE(r)}}function pO(e){e.modified_||(e.modified_=!0,e.parent_&&pO(e.parent_))}function gO(e){e.copy_||(e.copy_=KE(e.base_,e.scope_.immer_.useStrictShallowCopy_))}LE(dO,((e,t)=>{uO[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),uO.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&ME(13),uO.set.call(this,e,t,void 0)},uO.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&ME(14),dO.set.call(this,e[0],t,r,e[0])};function mO(e,t){const r=VE(e)?JE("MapSet").proxyMap_(e,t):YE(e)?JE("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:eO(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=dO;r&&(i=[n],o=uO);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:eO()).drafts_.push(r),r}function bO(e){if(!RE(e)||GE(e))return e;const t=e[IE];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=KE(e,t.scope_.immer_.useStrictShallowCopy_)}else r=KE(e,!0);return LE(r,((e,t)=>{WE(r,e,bO(t))})),t&&(t.finalized_=!1),r}var vO=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&ME(6),void 0!==r&&"function"!=typeof r&&ME(7),RE(e)){const i=iO(this),o=mO(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?rO(i):nO(i)}return tO(i,r),aO(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===OE&&(n=void 0),this.autoFreeze_&&qE(n,!0),r){const t=[],i=[];JE("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}ME(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){RE(e)||ME(8),BE(e)&&(e=function(e){BE(e)||ME(10,e);return bO(e)}(e));const t=iO(this),r=mO(e,void 0);return r[IE].isManual_=!0,nO(t),r}finishDraft(e,t){const r=e&&e[IE];r&&r.isManual_||ME(9);const{scope_:n}=r;return tO(n,t),aO(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=JE("Patches").applyPatches_;return BE(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},yO=vO.produce;vO.produceWithPatches.bind(vO),vO.setAutoFreeze.bind(vO),vO.setUseStrictShallowCopy.bind(vO),vO.applyPatches.bind(vO),vO.createDraft.bind(vO),vO.finishDraft.bind(vO);var xO=b$,wO=X$,$O=Rw,CO=Fi,SO=x$,jO=Lw,kO=u$,DO=t$,TO=Object.prototype.hasOwnProperty;var EO=function(e){if(null==e)return!0;if(SO(e)&&(CO(e)||"string"==typeof e||"function"==typeof e.splice||jO(e)||DO(e)||$O(e)))return!e.length;var t=wO(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(kO(e))return!xO(e).length;for(var r in e)if(TO.call(e,r))return!1;return!0},OO=Oi(EO);const FO=(e,t,r)=>{const n=yO(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=_O(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},IO=(e,t)=>{const[r,...n]=t;if(OO(e)||OO(r))return;const i=e.find((e=>e.key===r));return i&&n.length?IO(i.subItems,n):i},_O=e=>e.join(","),MO=e=>new Set(e.map((e=>e.join(",")))),AO=q.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,BO=q.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Qs["spacing-8"]};
    padding: ${Qs["spacing-12"]} ${Qs["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&i.css`
            background: ${qs["bg-hover"]};
        `}
`,RO=q.default.div`
    height: 1px;
    width: calc((1lh + ${Qs["spacing-8"]}) * ${e=>e.$level});
`,zO=q.default.div`
    width: 1lh;
    height: 1lh;
    color: ${qs["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Gs["duration-350"]}
            ${Gs["ease-standard"]};

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,PO=q.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Qs["spacing-8"]};
`,LO=q.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Qs["spacing-16"]};

    display: flex;
    justify-content: center;
`,NO=q.default(E.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qs["icon-selected"]};
`,HO=({listItems:r,multiSelect:n=!1,selectedKeyPaths:i,itemsLoadState:o="success",itemTruncationType:a="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:p,onRetry:g,enableSearch:m,hideNoResultsDisplay:b,noResultsDescription:v,searchPlaceholder:y="Search",onSearch:x})=>{const w=n||f,[$,C]=t.useState(""),S=$.toLowerCase().trim(),[j,k]=t.useState(!1),D=t.useRef(null),E=t.useRef(null),O=t.useRef([]),F=t.useRef(null),I=id(),[_,M]=t.useState([]),[A,B]=t.useState([]),R=j?A:_,z=t.useMemo((()=>{let e=0;for(const t of _)t.level>e&&(e=t.level);return e}),[_]),[P,L]=t.useState(0),[N,H]=t.useState([]),[W,V]=t.useState(0),Y=e=>{const t=e.target.value;C(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==x||x()},U=()=>{var e;C(""),k(!1),null===(e=F.current)||void 0===e||e.focus(),null==x||x()},K=()=>{null==g||g()},q=()=>{if(0===i.size){const e=[],t=[];_.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==p||p(e,t)}else null==p||p([],[])},X=td(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=_O(g),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,n,S,t))),G=td((e=>{return i.size?(t=X(e,!1),yO(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>yO(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);hS(i,o)&&(n.visible=!0)}return e})))(X(e,!1));var t})),Z=td((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(S))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),Q=td((()=>{M((e=>FO(e,i,n))),j&&B((e=>FO(e,i,n)))})),J=(e,t,r)=>{const n=((e,t,r)=>yO(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!hS(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(R,e,t);L(e),V(r),j?B(n):M(n)};rd("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(R,(e=>e.visible),P+1);r&&(V((e=>e+1)),L(r.index),null===(t=O.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(R,(e=>e.visible),P-1);t?(V((e=>e-1)),L(t.index),null===(r=O.current[t.index])||void 0===r||r.focus()):0===W&&F.current&&(F.current.focus(),V(-1),L(-1));break}case"ArrowRight":e.preventDefault(),J(P,!0,W);break;case"ArrowLeft":e.preventDefault(),J(P,!1,W);break;case"Space":if(document.activeElement===O.current[P]){e.preventDefault();const t=R[P];if(t.hasSubItems&&!w)return;null==h||h(t)}}})),t.useEffect((()=>{let e=[];"default"===u?e=G(r):"expand"===u?e=X(r,!0):"collapse"===u&&(e=X(r,!1)),M(e)}),[X,G,r,u]),t.useEffect((()=>{H(R.filter((e=>e.visible)))}),[j,R]),t.useEffect((()=>{Q()}),[n,i,Q]),t.useEffect((()=>{if(j&&$.trim().length>=3){const e=Z(r),t=(e=>yO(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(X(e,!1));B(t)}}),[Z,X,r,j,$]),t.useEffect((()=>{I||(F.current?(L(-1),V(-1),setTimeout((()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.focus()}),200)):O.current[P]?setTimeout((()=>{var e;return null===(e=O.current[P])||void 0===e?void 0:e.focus()}),200):(L(0),V(0),setTimeout((()=>{var e;return null===(e=O.current[0])||void 0===e?void 0:e.focus()}),200)))}),[P,W,I]);const ee=()=>{if(m&&"success"===o)return e.jsx(jE,{ref:F,onChange:Y,value:$,placeholder:y,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:l})},te=()=>{if(n&&!j&&_.length>0&&"success"===o)return e.jsx(fE,{children:e.jsx(gE,{onClick:q,type:"button",$variant:l,children:0===i.size?"Select all":"Clear all"})})},re=()=>{if(!b&&j&&0===A.length&&"success"===o)return e.jsxs(e.Fragment,{children:[e.jsxs(mE,{"data-testid":"list-no-results",children:[e.jsx(bE,{"data-testid":"no-result-icon"}),"No results found."]}),v&&e.jsx(yE,{"data-testid":"no-result-desc",children:v})]})},ne=()=>{if(g&&"loading"===o)return e.jsxs(mE,{"data-testid":"list-loading",children:[e.jsx(Pl,{}),"Loading..."]})},ie=()=>{if(g&&"fail"===o)return e.jsxs(mE,{"data-testid":"list-fail",children:[e.jsx(bE,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(pE,{onClick:K,type:"button",$variant:l,children:"Try again."})]})},oe=t=>{if(n)switch(t.checked){case"mixed":return e.jsx(NO,{"aria-hidden":!0});case!0:return e.jsx(cE,{"aria-hidden":!0});default:return e.jsx(dE,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(LO,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e.jsx(sE,{"aria-hidden":!0})})},ae=(t,r)=>{const{level:i,visible:o,expanded:l,keyPath:c,checked:d,hasSubItems:u,indexInParent:f,parentSetSize:p}=t,g=t.index,m=W===r,b=u&&!w;return e.jsxs(AO,{$visible:o,children:[z>0&&e.jsx(RO,{$level:i}),z>0&&!u&&n&&e.jsx(PO,{}),e.jsxs(BO,{"aria-checked":d,"aria-selected":!!d,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?J(g,!l,r):((e,t)=>{V(t),L(e),null==h||h(R[e])})(g,r)},onMouseEnter:()=>((e,t)=>{L(t.index),V(e)})(r,t),ref:e=>O.current[t.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[u&&e.jsx(zO,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),J(g,!l,r)},$expanded:l,children:e.jsx(T.CaretRightIcon,{})}),oe(t),e.jsx(xj,{bold:u,searchTerm:j?S:void 0,label:t.item.label,selected:!!d,truncationType:a,maxLines:s})]})]},`[${c.join("---")}]`)},se=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx("div",{"aria-multiselectable":n,id:c,ref:E,role:"tree",children:e.jsx(jT,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=D.current)&&void 0!==t?t:void 0,data:N,itemContent:(e,t)=>ae(t,e)},r?{initialItemCount:N.length}:{}),r?N.length:void 0)})};return e.jsx(nE,{"data-testid":"dropdown-container",ref:D,$width:d,$variant:l,children:e.jsxs(iE,{"data-testid":"nested-dropdown-list",children:[ee(),te(),re(),ne(),ie(),se()]})})},WO=({selectedOptions:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:p,onSelectOptions:g,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,noResultsDescription:C,renderCustomCallToAction:S,onBlur:j,variant:k="default",readOnly:D,alignment:T,dropdownZIndex:E,maxSelectable:O})=>{const[F,I]=t.useState(r||[]),[_,M]=t.useState(!1),[A,B]=t.useState(!1),[R]=t.useState((()=>Jc.generate())),z=t.useRef(null),P=t.useRef(null);t.useEffect((()=>{I(r||[])}),[r]);const L=()=>{F&&F.length>0||O?(I([]),U([])):(I(i),U(i))},N=(e,t)=>{const r=[...F],n=dS(F,(e=>(h?h(e):e)===t));n>-1?r.splice(n,1):r.push(e),I(r),U(r)},H=()=>{_&&(M(!1),Y(!1))},W=()=>{A||_||B(!0)},V=e=>{A&&!_&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==j||j())},Y=e=>{!e&&b&&b(),e&&m&&m()},U=e=>{g&&g(e)};return e.jsx(rE,{children:e.jsx(xh,{enabled:!D&&!o,isOpen:_,renderElement:()=>e.jsx(Af,{className:s,"data-testid":l,id:c,ref:z,tabIndex:-1,onFocus:W,onBlur:V,$focused:A,$disabled:o,$readOnly:D,$error:a,children:e.jsx(EE,{ref:P,disabled:o,expanded:_,listboxId:R,popupRole:"listbox",readOnly:D,variant:k,children:e.jsx(fh,{$disabled:o,children:F&&0!==F.length?e.jsx(hh,{$variant:k,children:i&&F.length===i.length?"All selected":`${F.length} selected`}):e.jsx(ph,{truncateType:x,$variant:k,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(kE,{listboxId:R,listItems:i,onSelectItem:N,onDismiss:H,valueExtractor:h,listExtractor:p,enableSearch:d,searchFunction:u,searchPlaceholder:f,multiSelect:!0,maxSelectable:O,selectedItems:F,onSelectAll:L,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,noResultsDescription:C,renderCustomCallToAction:S,variant:k,width:t}),onOpen:()=>{M(!0),Y(!0),B(!0)},onClose:e=>{M(!1),Y(!1),"click"!==e&&(B(!1),null==j||j())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),M(!1),Y(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:E})})},VO=(e,t)=>{const[r,...n]=t;if(OO(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?VO(i.subItems,n):i:void 0},YO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...YO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},UO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,noResultsDescription:g,readOnly:m,onSearch:b,onSelectOptions:v,onShowOptions:y,onHideOptions:x,onRetry:w,onBlur:$,optionsLoadState:C="success",optionTruncationType:S="end",variant:j="default",alignment:k,dropdownZIndex:D})=>{const T=n,[E,O]=t.useState(c?MO(c):new Set),[F,I]=t.useState([]),[_,M]=t.useState(!1),[A,B]=t.useState(!1),[R]=t.useState((()=>Jc.generate())),z=t.useRef(null),P=t.useRef(null),L=t.useRef(null);t.useEffect((()=>{const e=c||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=VO(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(T,e);O(MO(e)),I(t)}),[c,T]);const N=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));O(MO(e)),I(r),q(e,r)},H=e=>{const t=X(e),r=t.map((e=>e.keyPath));I(t),O(MO(r)),q(r,t)},W=()=>{A||_||B(!0)},V=e=>{A&&!_&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==$||$())},Y=()=>{if(F.length>1)return`${F.length} selected`;const{label:e,value:t}=F[0];return u?u(t):e},U=e=>{if("middle"===S){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),ed.truncateOneLine(e,t,120,6)}return e},K=e=>{!e&&x&&x(),e&&y&&y()},q=(e,t)=>{if(v){const r=t.map((e=>e.value));v(e,r)}},X=e=>{if(!0===e.checked)return F.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!hS(e.keyPath,r)}));{const t=[...F],r=e.hasSubItems?((e,t)=>{const r=VO(e,t);return r&&r.subItems?YO(r.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{F.find((t=>hS(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(xh,{enabled:!m&&!i,isOpen:_,renderElement:()=>e.jsx(Af,{className:a,"data-testid":s,id:l,ref:z,tabIndex:-1,onFocus:W,onBlur:V,$focused:A,$disabled:i,$readOnly:m,$error:o,children:e.jsx(EE,{ref:P,disabled:i,expanded:_,listboxId:R,popupRole:"tree",readOnly:m,variant:j,children:e.jsx(fh,{ref:L,$disabled:i,children:OO(F)?e.jsx(ph,{truncateType:S,children:r}):e.jsx(hh,{truncateType:S,children:U(Y())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(HO,{listboxId:R,listItems:T,multiSelect:!0,selectedKeyPaths:E,itemsLoadState:C,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,noResultsDescription:g,onSelectItem:H,onSelectAll:N,onRetry:w,onSearch:b,variant:j,mode:d,width:t}),onOpen:()=>{M(!0),K(!0),B(!0)},onClose:e=>{M(!1),K(!1),"click"!==e&&(B(!1),null==$||$())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),M(!1),K(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:D})},KO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:p,hideNoResultsDisplay:g,noResultsDescription:m,readOnly:b,onBlur:v,onSearch:y,onSelectOption:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:j="end",variant:k="default",alignment:D,dropdownZIndex:T})=>{const E=n,[O,F]=t.useState(c?MO([c]):new Set),[I,_]=t.useState(),[M,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>Jc.generate())),P=t.useRef(null),L=t.useRef(null),N=t.useRef(null);t.useEffect((()=>{F(c?MO([c]):new Set);const e=IO(E,c||[]);_(null!=e?e:void 0)}),[c,E]);const H=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;F(MO([r])),_({label:n,value:i}),A(!1),K(!1),null===(t=L.current)||void 0===t||t.focus(),null==x||x(r,i)},W=()=>{B||M||R(!0)},V=e=>{B&&!M&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==v||v())},Y=()=>{if(!I)return"";const{label:e,value:t}=I;return u?u(t):e},U=e=>{if("middle"===j){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),ed.truncateOneLine(e,t,120,6)}return e},K=e=>{!e&&$&&$(),e&&w&&w()};return e.jsx(xh,{enabled:!b&&!i,isOpen:M,renderElement:()=>e.jsx(Af,{className:a,"data-testid":s,id:l,ref:P,tabIndex:-1,onFocus:W,onBlur:V,$focused:B,$disabled:i,$readOnly:b,$error:o,children:e.jsx(EE,{ref:L,disabled:i,expanded:M,listboxId:z,popupRole:"tree",readOnly:b,variant:k,children:e.jsx(fh,{ref:N,$disabled:i,children:OO(I)?e.jsx(ph,{truncateType:j,children:r}):e.jsx(hh,{truncateType:j,children:U(Y())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(HO,{listboxId:z,listItems:E,selectedKeyPaths:O,selectableCategory:p,itemsLoadState:S,itemTruncationType:j,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,noResultsDescription:m,onSelectItem:H,onRetry:C,onSearch:y,variant:k,mode:d,width:t}),onOpen:()=>{A(!0),K(!0),R(!0)},onClose:e=>{A(!1),K(!1),"click"!==e&&(R(!1),null==v||v())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),K(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:T})};var qO=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var XO=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},GO=XO(),ZO=S$;var QO=x$;var JO=function(e,t){return function(r,n){if(null==r)return r;if(!QO(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&GO(e,t,ZO)}));var eF=qO,tF=JO,rF=ZC,nF=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},iF=Fi;var oF=function(e,t,r){var n=iF(e)?eF:nF,i=arguments.length<3;return n(e,rF(t),r,i,tF)},aF=Oi(oF);const sF=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],lF=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var cF;!function(e){e.getCountries=()=>[].concat(...sF.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:lF("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return aF(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(cF||(cF={}));const dF=r=>{var{onChange:n,value:i,allowClear:o,onClear:a,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:p,placeholder:g,autoComplete:m}=r,b=G(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(cF.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),C=t.useRef(null),S=od({ref:C,formatter:e=>cF.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===uF(null==i?void 0:i.countryCode)))[0];x(e),$(cF.formatNumber(null==i?void 0:i.number,e))}),[i]);const j=e=>{D(w,e),n&&k(w,e)},k=(e,t)=>{const r=cF.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&fF(t.countryCode)})},D=(e,t)=>{$(cF.formatNumber(e,t)),x(t)};return e.jsx(QS,Object.assign({ref:C,value:w,onChange:()=>{const e=S();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),D(t,y),n&&k(t,y)},allowClear:o&&!!w,onClear:()=>{a?a():$("")},onBlur:s,error:l,placeholder:g,addon:c?{type:"label",attributes:{value:fF(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:d,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:fF(e.countryCode)}),onSelectOption:j,onHideOptions:h,onShowOptions:p}},inputMode:"numeric",autoComplete:m},b))},uF=e=>e?e.replace("+",""):"",fF=e=>e?e.includes("+")?e:`+${e}`:"",hF=({className:r,"data-testid":n,selectedOption:i,minimumCharacters:o=3,fetchOptions:a,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:f,displayValueExtractor:h,onSelectOption:p})=>{const[g,m]=t.useState((()=>i?z(i):"")),[b,v]=t.useState((()=>i?z(i):"")),[y,x]=t.useState([]),[w,$]=t.useState(!0),[C,S]=t.useState(!1),[j,k]=t.useState(!!i),[D,T]=t.useState(i),E=t.useRef(a),O=e=>Z(void 0,void 0,void 0,(function*(){S(!1),$(!0);try{const t=yield E.current(e);v(e),x(t),$(!1)}catch(e){S(!0)}})),F=t.useCallback(Vu((e=>O(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{E.current=a}),[a]),t.useEffect((()=>{g&&g.length>=o&&g!==b?F(g):F.cancel(),""===g&&D&&(p&&p(void 0,void 0),M(),T(void 0)),i&&g!==z(i)&&k(!1)}),[g,i]),t.useEffect((()=>{m(i?z(i):""),M(i),T(i)}),[i]);const I=e=>{m(e.target.value)},_=(e,t)=>{p&&p(e,t)},M=e=>{v(e?z(e):""),k(!!e),x([]),$(!0)},A=()=>{m(""),p&&p(void 0,void 0),M()},B=()=>{j||D?(M(D),m(z(D)),p&&p(D,P(D)),T(D)):A()},R=()=>!!g&&g.length>=o&&!j,z=e=>e?h?h(e):e.toString():"",P=e=>{if(e)return u?u(e):e},L=()=>e.jsx(zx,{type:"text",value:g,onChange:I,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:A,styleType:"no-border",onBlur:g.length<o?B:void 0});return e.jsxs(gh,{className:r,show:R(),error:d&&!R(),disabled:c,readOnly:l,testId:n,onBlur:B,children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(lh,{children:L()}),!l&&R()&&e.jsx(uh,{}),e.jsx(RS,{listItems:y,onSelectItem:_,valueExtractor:u,listExtractor:f,itemsLoadState:C?"fail":w?"loading":"success",visible:R(),disableItemFocus:!0,onRetry:()=>O(g),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},pF=q.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,gF=q.default(Mx)`
    position: absolute;
    right: 0;
    padding-left: ${Qs["spacing-8"]};
    margin-right: 0;
`,mF=q.default(sh)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Qs["spacing-16"]});
`,bF=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:o,disabled:a,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:k,renderListItem:D,renderCustomCallToAction:T}=r,E=G(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[O,F]=t.useState(),[I,_]=t.useState(),M=t.useRef(null),A={from:t.useRef(null),to:t.useRef(null)},[B,R]=t.useState("none");t.useEffect((()=>{F(null==n?void 0:n.from),_(null==n?void 0:n.to)}),[n]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),a||l||R("from"===e?"from":"to"===e&&O?"to":"from")},P=e=>{var t;const r="from"===e?O:I;if(!r)return"";if(v)return v(r);if(g){const e=g(r);return m?m(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},L=(e,t)=>{if("middle"===j){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),ed.truncateOneLine(t,r,120,8)}return t},N=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const r="from"===t?O:I;return r?k?k(r):e.jsx(hh,{truncateType:j,children:L(t,P(t))}):e.jsx(ph,{truncateType:j,children:L(t,i[t]||"")})},W=t=>e.jsx(fh,{onClick:z(t),ref:A[t],$disabled:a,children:H(t)});return e.jsxs(gh,{show:"none"!==B,error:c&&!("none"!==B),disabled:a,readOnly:l,testId:d,onBlur:()=>{N(!1),R("none"),O&&I||(_(void 0),F(void 0))},className:s,children:[e.jsxs(pF,{children:[e.jsx(mF,Object.assign({type:"button","data-testid":u||"selector",disabled:a,ref:M,onClick:z()},E,{children:e.jsxs(Wh,{currentActive:(()=>{switch(B){case"from":return"start";case"to":return"end";case"none":return B}})(),children:[W("from"),W("to")]})})),"none"===B&&O&&I&&!l&&!a&&e.jsx(gF,{onClick:e=>{e.stopPropagation(),F(void 0),_(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e.jsx(Ax,{"aria-hidden":!0})})]}),"none"!==B&&e.jsx(uh,{}),(()=>{if("none"===B)return null;const t=o[B];if(t&&t.length>0){const r="from"===B?O:I;return e.jsx(RS,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?F(e):_(e),N(!1),M&&(null===(n=M.current)||void 0===n||n.focus()),y&&y({[r]:e},t),"from"===r?(_(void 0),R("to"),N(!0)):R("none")})(e,t,B),onDismiss:()=>(()=>{var e;R("none"),N(!1),M&&(null===(e=M.current)||void 0===e||e.focus()),O&&I||(_(void 0),F(void 0))})(),valueExtractor:g,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:p,searchFunction:h,"data-testid":`${B}-dropdown-list`,selectedItems:r?[r]:[],onRetry:C,itemsLoadState:S[B],itemTruncationType:j,renderListItem:D,renderCustomCallToAction:T})}return null})()]})},vF=({selectedOption:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:p,listExtractor:g,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:C,renderListItem:S,hideNoResultsDisplay:j,noResultsDescription:k,renderCustomCallToAction:D,onBlur:T,variant:E="default",readOnly:O,alignment:F,dropdownZIndex:I})=>{const[_,M]=t.useState(r),[A,B]=t.useState(!1),[R,z]=t.useState(!1),[P]=t.useState((()=>Jc.generate())),L=t.useRef(null),N=t.useRef(null),H=t.useRef(null);t.useEffect((()=>{M(r)}),[r]);const W=(e,t)=>{var r;null===(r=N.current)||void 0===r||r.focus(),M(e),B(!1),X(!1),null==b||b(e,t)},V=()=>{A&&(B(!1),X(!1))},Y=()=>{R||A||z(!0)},U=e=>{R&&!A&&L.current&&!L.current.contains(e.relatedTarget)&&(z(!1),null==T||T())},K=()=>{var e;if(!_)return"";if(m)return m(_);if(h){const t=h(_);return p?p(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return _.toString()},q=e=>{if("middle"===$){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),ed.truncateOneLine(e,t,120,8)}return e},X=e=>{e?null==v||v():null==y||y()};return e.jsx(rE,{children:e.jsx(xh,{enabled:!O&&!o,isOpen:A,renderElement:()=>e.jsx(Af,{className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:Y,onBlur:U,$focused:R,$disabled:o,$readOnly:O,$error:a,children:e.jsx(EE,{ref:N,disabled:o,expanded:A,listboxId:P,popupRole:"listbox",readOnly:O,variant:E,children:e.jsx(fh,{ref:H,$disabled:o,children:_?C?C(_):e.jsx(hh,{truncateType:$,$variant:E,children:q(K())}):e.jsx(ph,{truncateType:$,$variant:E,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(kE,{listboxId:P,listItems:i,onSelectItem:W,onDismiss:V,valueExtractor:h,listExtractor:g,enableSearch:d,searchPlaceholder:f,searchFunction:u,selectedItems:_?[_]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:j,noResultsDescription:k,renderCustomCallToAction:D,variant:E,width:t}),onOpen:()=>{B(!0),X(!0),z(!0)},onClose:e=>{B(!1),X(!1),"click"!==e&&(z(!1),null==T||T())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),B(!1),X(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:I})})},yF=q.default.div`
    overflow: hidden;
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    background: ${qs.bg};
    padding: ${Qs["spacing-16"]};
    min-width: 23rem;

    ${tl.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${el["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${tl.MaxWidth.xs} {
        width: calc(100vw - ${el["xs-margin"]} * 2);
    }

    ${tl.MaxWidth.xxs} {
        width: calc(100vw - ${el["xxs-margin"]} * 2);
    }
`,xF=q.default.div`
    display: flex;
    align-items: baseline;
`,wF=q.default.div`
    margin: 0 0.5rem;
`,$F=q.default.div`
    ${e=>"small"===e.$variant?Xs["body-md-regular"]:Xs["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${ol(1)}
                `}}
    overflow: hidden;
`,CF=q.default($F)`
    color: ${qs["text-subtler"]};
`,SF=r=>{var{alignment:n="left",className:i,disabled:o,dropdownZIndex:a,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:p="Select",rangeLabelPrefix:g,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y}=r,x=G(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:C,ariaLabels:S}=l,[j,k]=t.useState(H()),[D,T]=t.useState(!1),[E,O]=t.useState(!1),[F]=t.useState((()=>Jc.generate())),I=$.map((e=>e.minValue)),_=Math.min(...I),M=t.useRef(null),A=t.useRef(null),B=t.useRef(null),R=x["data-testid"]||"select-histogram";t.useEffect((()=>{y!==j&&k(H())}),[y]);const z=e=>{k(e),null==u||u(e)},P=e=>{k(e),null==f||f(e)},L=()=>{E||D||O(!0)},N=e=>{E&&!D&&M.current&&!M.current.contains(e.relatedTarget)&&(O(!1),null==d||d())};function H(){return null!=y?y:[_,_+w]}const W=t=>v?v(t):e.jsxs(exports.Typography.BodyBL,{children:[g,t,m]});return e.jsx(rE,{children:e.jsx(xh,{enabled:!b&&!o,isOpen:D,renderElement:()=>e.jsx(Af,{className:i,"data-testid":R,id:c,ref:M,tabIndex:-1,onFocus:L,onBlur:N,$focused:E,$disabled:o,$readOnly:b,$error:s,children:e.jsx(EE,{ref:A,disabled:o,expanded:D,listboxId:F,popupRole:"dialog",readOnly:b,variant:"default",children:e.jsx(fh,{ref:B,$disabled:o,children:I&&0!==I.length?e.jsxs(xF,{children:[W(j[0]),e.jsx(wF,{children:"-"}),W(j[1])]}):e.jsx(CF,{truncateType:h,$variant:"default",children:p})})})}),renderDropdown:({elementWidth:t})=>e.jsx(yF,{style:{width:t},children:e.jsx(Ix,{interval:w,value:j,bins:$,onChange:z,onChangeEnd:P,showRangeLabels:!1,renderEmptyView:C,ariaLabels:S})}),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{var e;null===(e=A.current)||void 0===e||e.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a})})},jF=r=>{var{value:n,ariaLabel:i,onChange:o,onChangeEnd:a}=r,s=G(r,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e.jsx(kx,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==a||a(t)},ariaLabels:i?[i]:void 0}))},kF=q.default.p`
    text-align: right;
    ${Xs["body-sm-semibold"]}
    color: ${qs["text-subtler"]};
`,DF=({value:r,maxLength:n,renderCustomCounter:i})=>{const[o,a]=t.useState("");t.useEffect((()=>{a(s(`${r||""}`))}),[r,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:U.default.isValidElement(o)?o:e.jsx(kF,{"data-testid":"counter-label",children:o})})},TF=q.default.div`
    display: flex;
    flex-direction: column;
`,EF=q.default.textarea`
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    background: ${qs.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Qs["spacing-12"]} ${Qs["spacing-16"]};
    width: 100%;

    ${Xs["body-baseline-regular"]}
    color: ${qs.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Zs["width-020"]} ${Zs.solid}
            ${qs["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${qs["text-subtler"]};
    }

    ${e=>e.readOnly?i.css`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${qs["border-focus"]};
                }
            `:e.disabled?i.css`
                background: ${qs["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${qs["border-disabled"]};
                }
            `:e.$error?i.css`
                border-color: ${qs["border-error"]};

                :focus,
                :active {
                    outline-color: ${qs["border-error-focus"]};
                }
            `:void 0}
`,OF=U.default.forwardRef(((r,n)=>{var{value:i,disabled:o,error:a,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=r,f=G(r,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsx(EF,Object.assign({ref:n,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(p(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:a,rows:s,maxLength:l&&u?l.length+u:u},f))})),FF=U.default.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:a=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=r,f=G(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsxs(TF,{children:[e.jsx(OF,Object.assign({ref:n,disabled:o,value:h,rows:a||5,onChange:e=>{const t=e.target.value;p(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},f)),d&&e.jsx(DF,{value:h,maxLength:d,renderCustomCounter:u})]})})),IF=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Qs["spacing-4"]};
`,_F=q.default.div`
    display: flex;
    flex: 1;
    margin-right: ${Qs["spacing-12"]};
`,MF=q.default(ex)`
    margin-top: 0;
`,AF=U.default.forwardRef(((r,n)=>{const{label:i,value:o,errorMessage:a,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,xxsCols:g,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,transformValue:$,prefix:C=""}=r,S=G(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[j,k]=t.useState(o);t.useEffect((()=>{k(o)}),[o]);return e.jsxs(lx,{id:s,label:i,disabled:S.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,xxsCols:g,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,children:[e.jsx(OF,Object.assign({id:`${s}-base`,"data-testid":c||s,value:j,error:!!a,onChange:e=>{const t=e.target.value;k(t),d&&d(e)},ref:n,prefix:C,transformValue:$},S)),a||S.maxLength?e.jsxs(IF,{children:[a&&e.jsx(_F,{children:e.jsx(MF,{"data-testid":l||(s?`${s}-error-message`:"error-message"),children:a})}),S.maxLength&&e.jsx(DF,{value:j,maxLength:S.maxLength,renderCustomCounter:S.renderCustomCounter})]}):e.jsx(e.Fragment,{})]})})),BF=q.default.div`
    position: relative;
`,RF=q.default(Bf)`
    height: 3rem;
    gap: ${Qs["spacing-8"]};
`,zF=q.default(Rf)`
    display: block;
    width: 100%;
    flex: 1;
`,PF=q.default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?i.css`
                    color: ${qs["icon-selected-disabled"]};
                `:i.css`
                    color: ${qs["icon-disabled-subtle"]};
                `:e.$active?i.css`
                color: ${qs["icon-selected"]};
            `:i.css`
            color: ${qs["icon-subtle"]};
        `};
`,LF=i.css`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Xs.Spec["weight-regular"]};
        ${e=>e.$size&&Xs[`${e.$size}-regular`]}
        color: ${qs.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,NF=q.default.ol`
    ${LF}

    margin-left: 3rem;

    ${tl.MaxWidth.lg} {
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
`,HF=q.default.ul`
    ${LF}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,WF=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=G(t,["size","bulletType","bottomMargin","children"]);return e.jsx(HF,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};WF.displayName="TextList.Ul";const VF=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=G(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e.jsx(NF,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};VF.displayName="TextList.Ol";const YF={Ul:WF,Ol:VF},UF=q.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${qs.bg};

    ${e=>{if(!e.$indicator)return i.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return i.css`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?i.css`
                            border-color: ${qs["border-error"]};
                        `:i.css`
                            border-color: ${qs["border-error"]};

                            &:has(${ZF}:hover) {
                                background: ${qs["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border: none;
                            background: ${qs["bg-selected-disabled"]};
                        `:i.css`
                            border: none;
                        `:e.$selected?i.css`
                        border: none;
                        background: ${qs["bg-selected"]};

                        &:has(${ZF}:hover) {
                            background: ${qs["bg-selected-hover"]};

                            & ${qF} {
                                color: ${qs["text-selected-hover"]};
                            }

                            & ${aI} {
                                color: ${qs["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border: none;

                    &:has(${ZF}:hover) {
                        background: ${qs["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?i.css`
                            border-color: ${qs["border-error"]};
                        `:i.css`
                            border-color: ${qs["border-error"]};

                            &:has(${ZF}:hover) {
                                background: ${qs["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border-color: ${qs["border-selected-disabled"]};
                            background: ${qs["bg-selected-disabled"]};
                        `:i.css`
                            border-color: ${qs["border-disabled"]};
                            background: ${qs["bg-disabled"]};
                        `:e.$selected?i.css`
                        border-color: ${qs["border-selected"]};
                        background: ${qs["bg-selected"]};

                        &:has(${ZF}:hover) {
                            background: ${qs["bg-selected-hover"]};

                            & ${qF} {
                                color: ${qs["text-selected-hover"]};
                            }

                            & ${aI} {
                                color: ${qs["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border-color: ${qs.border};

                    &:has(${ZF}:hover) {
                        background: ${qs["bg-hover-subtle"]};
                    }
                `}
`,KF=q.default.input`
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
`,qF=q.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${qs["text-selected-disabled"]};
                `:i.css`
                    color: ${qs["text-disabled"]};
                `:e.$selected?i.css`
                color: ${qs["text-selected"]};
            `:i.css`
            color: ${qs.text};
        `}
`,XF=q.default.label`
    ${Xs["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${tl.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${tl.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,GF=q.default.div`
    ${Xs["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Xs["body-md-semibold"]}
    }
`,ZF=q.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,QF=q.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,JF=q.default.button`
    color: ${e=>e.$disabled?qs["text-disabled"]:qs["text-error"]};
    white-space: nowrap;
    ${Xs["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,eI=q.default.button`
    color: ${e=>e.disabled?qs["text-disabled"]:qs["text-primary"]};
    ${Xs["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${qs.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,tI=q.default.div`
    width: 100%;
    color: ${e=>e.$disabled?qs["text-disabled"]:qs["text-error"]};
    border: none;
    background: ${qs.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,rI=q.default(nc)`
    width: 100%;
    user-select: none;
`,nI=q.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${qs.bg};
    ${Xl({textSize:"body-md"})}

    ${e=>e.$disabled?i.css`
                color: ${qs["text-disabled"]};
            `:e.$selected?i.css`
                color: ${qs["text-selected"]};
            `:i.css`
                color: ${qs.text};
            `}
`,iI=q.default(exports.Typography.BodyMD)`
    color: ${e=>e.$disabled?qs["text-disabled"]:qs["text-error"]};
`,oI=q.default(YF.Ul)`
    color: ${e=>e.$disabled?qs["text-disabled"]:qs["text-error"]};
`,aI=q.default((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=r?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":o=r?e.jsx(F.CircleDotIcon,{}):e.jsx(O.CircleIcon,{});break;case"tick":o=e.jsx(D.TickIcon,{});break;case"cross":o=e.jsx(m.CrossIcon,{});break;default:o=null}return e.jsx(PF,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${qs["icon-selected-disabled"]};
                `:i.css`
                    color: ${qs["icon-disabled-subtle"]};
                `:e.$selected?i.css`
                color: ${qs["icon-selected"]};
            `:i.css`
            color: ${qs["icon-subtle"]};
        `};
`,sI=({type:r="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:h,id:p,className:g,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:C,children:S,initialExpanded:j}=m||{},[k,D]=t.useState(o),[T,E]=t.useState(!!j),O=t.useMemo((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[F]=t.useState(Jc.generate()),I=p?`${p}`:`tg-${F}`,_=t.useRef(null);t.useEffect((()=>{D(o)}),[o]),t.useEffect((()=>{k&&E(null==j||j)}),[k]);const M=e=>{if(!d){if(x)return void x(e);switch(r){case"checkbox":D((e=>!e));break;case"radio":case"yes":case"no":k||D(!0)}}},A=()=>{d||E(!T)},B=()=>{d||!v||v()},R=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e.jsx(aI,{type:t,active:k,disabled:d,$selected:k,$disabled:d})},z=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(GF,{"data-id":"toggle-sublabel",children:t})},P=()=>{const t=!T&&!O;return $&&e.jsxs(eI,{$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",T?e.jsx(n.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]})},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(iI,{weight:"semibold",$disabled:d,children:"Error"}),e.jsx(oI,{$disabled:d,children:null==t?void 0:t.map(((t,r)=>e.jsx("li",{id:`${I}-error-list-item-${r}`,children:e.jsx(iI,{weight:"semibold",$disabled:d,children:t})},r)))})]});return e.jsxs(UF,{$selected:k,$disabled:d,className:g,$styleType:a,$error:u,$indicator:i,$useContentWidth:w,id:p,"data-testid":y,children:[e.jsxs(ZF,{id:`${I}-header-container`,$disabled:d,$error:u,$selected:k,$indicator:i,$styleType:a,children:[e.jsxs(QF,{$addPadding:b,children:[e.jsx(KF,{ref:_,name:h,id:`${I}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:M,checked:k}),i&&R(),e.jsxs(qF,{$selected:k,$disabled:d,children:[e.jsx(XF,{htmlFor:`${I}-input`,"data-testid":`${I}-toggle-label`,$maxLines:l,children:s}),c&&z()]})]}),b&&e.jsx(JF,{type:"button",$disabled:d,onClick:B,id:`${I}-remove-button`,children:"Remove"})]}),S&&e.jsxs("div",{children:[(!$||T)&&e.jsx(nI,{"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d,children:S}),$&&!T&&O&&e.jsx(tI,{$disabled:d,onClick:A,id:`${I}-error-alert`,children:e.jsx(rI,{type:d?"description":"error",className:g,showIcon:!0,children:Array.isArray(C)?L(C):C})}),P()]})]})},lI=q.default(Ti.div)`
    position: absolute;
    top: calc(3rem + ${Qs["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${tl.MaxWidth.xxs} {
        max-width: 100%;
    }
`,cI=q.default.div`
    position: relative;
    width: 100%;
    padding: ${Qs["spacing-8"]} ${Qs["spacing-20"]}
        ${Qs["spacing-24"]} ${Qs["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${qs.bg};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
`,dI=q.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${tl.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,uI=q.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Qs["spacing-16"]};
    gap: ${Qs["spacing-8"]} ${Qs["spacing-16"]};

    ${tl.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Qs["spacing-32"]};
    }
`,fI=q.default.div`
    display: flex;
    align-items: center;
    margin-right: ${Qs["spacing-32"]};

    ${tl.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,hI=q.default.div`
    display: flex;
    gap: ${Qs["spacing-8"]};

    ${tl.MaxWidth.lg} {
        flex-direction: column;
    }

    ${tl.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,pI=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${tl.MaxWidth.xxs} {
        width: 6rem;
    }
`,gI=q.default(il)`
    width: 5rem;
    padding: ${Qs["spacing-16"]} 0;
    color: ${qs.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${qs["icon-hover"]};
    }
`,mI=q.default(exports.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,bI=q.default(Af)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${tl.MaxWidth.xxs} {
        width: 100%;
    }
`,vI=q.default(Rf)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,yI=q.default(sI)`
    min-width: 5rem;
    flex: 1;
`,xI=q.default(Wl.Small)`
    width: 7rem;

    ${tl.MaxWidth.sm} {
        flex: 1;
    }

    ${tl.MaxWidth.xxs} {
        width: 100%;
    }
`;var wI,$I,CI;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(wI||(wI={})),function(e){e.HOUR="hour",e.MINUTE="minute"}($I||($I={})),function(e){e.AM="am",e.PM="pm"}(CI||(CI={}));const SI=({id:r,value:i,show:o,format:a,onChange:s,onCancel:l})=>{var c;const d=qu.getTimeValues(a,i),[u,h]=t.useState(d.hour),[p,g]=t.useState(d.minute),[m,b]=t.useState(d.period),v=t.useRef(null),y=t.useRef(null),x=Xe();t.useEffect((()=>{if(o&&v.current&&v.current.focus(),o){const{hour:e,minute:t,period:r}=qu.getTimeValues(a,i);h(e),g(t),b(r)}}),[o,i,a]),t.useEffect((()=>{const e=v.current,t=y.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=t.useCallback((e=>{switch(e.currentTarget.name){case wI.MINUTE_UP:g(qu.updateMinutes(p,"add"));break;case wI.MINUTE_DOWN:g(qu.updateMinutes(p,"minus"));break;case wI.HOUR_UP:h(qu.updateHours(u,"add"));break;case wI.HOUR_DOWN:h(qu.updateHours(u,"minus"))}}),[u,p]),C=e=>{e.target.select()},S=e=>{const t=e.target.value;switch(e.target.name){case $I.HOUR:t.length<=2&&h(t);break;case $I.MINUTE:t.length<=2&&g(t)}},j=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case $I.HOUR:{const r=t>23||t<0?d.hour:qu.convertHourTo12HourFormat(e.target.value);h(r);break}case $I.MINUTE:{const r=t>59||t<0?d.minute:e.target.value;g(ed.padValue(r));break}}},k=e=>{switch(e.target.name){case CI.AM:b(Ku.AM);break;case CI.PM:b(Ku.PM)}},D=e=>r?`${r}-${e}`:e,T=di({opacity:o?1:0,height:o?(null!==(c=x.height)&&void 0!==c?c:0)+32+2:0});return e.jsx(lI,{"data-testid":"animated-dropdown-wrapper",style:T,children:e.jsxs(cI,{ref:x.ref,"data-testid":D("timepicker-dropdown"),inert:o?void 0:"",children:[e.jsxs(dI,{children:[e.jsxs(fI,{children:[e.jsxs(pI,{children:[e.jsx(gI,{"aria-label":"increase hour",name:wI.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":D("hour-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(bI,{children:e.jsx(vI,{"aria-label":"hour",type:"number",name:$I.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:C,onChange:S,onBlur:j,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")})}),e.jsx(gI,{"aria-label":"decrease hour",name:wI.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":D("hour-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]}),e.jsx(mI,{children:":"}),e.jsxs(pI,{children:[e.jsx(gI,{"aria-label":"increase minute",name:wI.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":D("minute-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(bI,{children:e.jsx(vI,{"aria-label":"minute",type:"number",name:$I.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:y,value:p,onChange:S,onBlur:j,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")})}),e.jsx(gI,{"aria-label":"decrease minute",name:wI.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":D("minute-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]})]}),e.jsxs(hI,{children:[e.jsx(yI,{checked:m===Ku.AM,name:CI.AM,type:"radio",onChange:k,"data-testid":D("am-toggle"),"aria-label":"AM",children:"AM"}),e.jsx(yI,{checked:m===Ku.PM,name:CI.PM,type:"radio",onChange:k,"data-testid":D("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e.jsxs(uI,{children:[e.jsx(xI,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":D("cancel-button"),children:"Cancel"}),e.jsx(xI,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?qu.convertTo24HourFormat({hour:u,minute:p,period:m}):`${u}:${p}${m}`,s(e)},disabled:""===u||""===p,"data-testid":D("confirm-button"),children:"Done"})]})]})})},jI=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=r,f=G(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,p]=t.useState(!1),[g,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef(null);t.useEffect((()=>{a&&(v(a.start),x(a.end))}),[a]),rd("mousedown",(function(e){i||j(e)}),"document"),rd("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const $=()=>{S()},C=()=>{h||g||d&&d()},S=()=>{p(!1),m(!1),u&&u()},j=e=>{w.current&&!w.current.contains(e.target)&&(g||h)&&S()};return e.jsx(BF,Object.assign({ref:w,id:n},f,{children:e.jsxs(RF,{$disabled:i,$error:o,$readOnly:l,children:[e.jsxs(Wh,{error:o,currentActive:h?"start":g?"end":"none",children:[e.jsx(zF,{onFocus:()=>{i||l||h||(m(!1),p(!0),C())},readOnly:!0,placeholder:"From",value:qu.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(zF,{onFocus:()=>{i||l||g||(p(!1),m(!0),C())},readOnly:!0,placeholder:"To",value:qu.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e.jsx(SI,{id:n,show:h,value:b,format:s,onCancel:$,onChange:e=>{p(!1),m(!0),v(e);c&&c({start:e,end:y})}}),e.jsx(SI,{id:n,show:g,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);c&&c({start:b,end:e}),""==b?p(!0):u&&u()}})]})}))},kI=q.default(Bf)`
    height: 3rem;
    gap: ${Qs["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Qs["spacing-20"]});
`,DI=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:p,endLimit:g,interval:m=15}=r,b=G(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>Jc.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[C,S]=t.useState(""),[j,k]=t.useState(""),[D,T]=t.useState(""),[E,O]=t.useState(""),[F,I]=t.useState(""),_=t.useRef(null),M=t.useRef(null),A=t.useRef(null),B=t.useMemo((()=>qu.generateTimings(m,s,p,g)),[m,s,p,g]),R=t.useMemo((()=>{if(""===E)return B;const e=qu.findClosestFlooredTime(E,B);return e?B.slice(B.indexOf(e)):[]}),[B,E]),z=t.useCallback((e=>qu.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(a){const r=null!==(e=z(a.start))&&void 0!==e?e:"",n=null!==(t=z(a.end))&&void 0!==t?t:"";k(r),T(n),O(r),I(n)}}),[a,z]),t.useEffect((()=>{if(o)return void $(!1);const e=z(j),t=z(D);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&qu.to24Hour(t)<qu.to24Hour(e)))return S(""),void(document.activeElement!==M.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[j,D,z,o]);const P=e=>{i||l||(y||w||null==d||d(),x(e),$(!0))},L=e=>{var t;i||l||(x(e),$(!0),null===(t=("start"===e?M:A).current)||void 0===t||t.select())};function N(e){var t;switch(e.code){case"Enter":"start"===y?H(j):"end"===y&&(w&&W(D),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":V(j,D,{})}}const H=e=>{V(e,D,{goToNextInput:!0})},W=e=>{V(j,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=z(e))&&void 0!==i?i:E,l=null!==(o=z(t))&&void 0!==o?o:F;k(s),T(l);s===E&&l===F||null==c||c({start:s,end:l}),r&&void 0!==z(e)&&(x("end"),null===(a=A.current)||void 0===a||a.select()),n&&(x(null),$(!1),null==u||u()),O(s),I(l)},Y=e=>{e.stopPropagation(),k(""),T(""),O(""),I("");null==c||c({start:"",end:""}),x(null),$(!1)},U=e=>{_.current&&!_.current.contains(e.relatedTarget)&&y&&!w&&V(j,D,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==j?void 0:j.length)>0||(null==D?void 0:D.length)>0))return e.jsx(gF,{onClick:Y,type:"button","aria-label":"Clear",children:e.jsx(Ax,{"aria-hidden":!0})})};return e.jsxs(BF,Object.assign({id:n},b,{children:[e.jsx(rE,{children:e.jsx(xh,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(kI,{ref:_,$disabled:i,$error:o||!!C,$readOnly:l,onBlur:U,children:[e.jsxs(Wh,{error:o||!!C,currentActive:null===y?"none":y,children:[e.jsx(zF,{ref:M,onFocus:()=>P("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>k(e.target.value),value:j,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:N,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx(zF,{ref:A,onFocus:()=>P("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>T(e.target.value),value:D,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:N,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(w)return"start"===y?e.jsx(kE,{listItems:B,onSelectItem:H,selectedItems:[j],disableItemFocus:!0,topScrollItem:qu.findClosestFlooredTime(z(j),B),listboxId:v}):e.jsx(kE,{listItems:R,onSelectItem:W,selectedItems:[D],disableItemFocus:!0,topScrollItem:qu.findClosestFlooredTime(z(D),R),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):V(j,D,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===y?M:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!o&&C&&e.jsx(ex,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:C})]}))},TI=t=>{var{variant:r="dial"}=t,n=G(t,["variant"]);return"combobox"===r?e.jsx(DI,Object.assign({},n)):e.jsx(jI,Object.assign({},n))};q.default.div`
    position: relative;
`;const EI=q.default(Rf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,OI=r=>{var{id:n,disabled:i=!1,readOnly:o=!1,error:a,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:f}=r,h=G(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[p,g]=t.useState(!1),m=t.useRef(null);rd("mousedown",(function(e){i||o||y(e)}),"document"),rd("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||o||p||(g(!0),u&&u())};const v=()=>{g(!1),f&&f()},y=e=>{m.current&&!m.current.contains(e.target)&&p&&v()},x=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(Bf,Object.assign({ref:m,id:n,$readOnly:o,$disabled:i,$error:a},h,{children:[e.jsx(EI,{onFocus:b,focused:p,readOnly:!0,placeholder:l||x(),value:qu.formatDisplayValue(s,c),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e.jsx(SI,{id:n,show:p,value:s,format:c,onCancel:()=>{v()},onChange:e=>{d&&d(e),v()}})]}))},FI=q.default(GS)`
    margin-right: 0.5rem;
`,II=q.default(zx)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,_I=q.default(II)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,MI=q.default(exports.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${qs["text-disabled"]};
            `}}
`,AI=q.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,BI=q.default(exports.Typography.BodyBL)``,RI=r=>{var{disabled:n,error:i,value:o,onChange:a,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:f}=r,h=G(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[p,g]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),C=t.useRef(p),S=t.useRef(m),j=t.useRef(v),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),D=od({ref:w,formatter:k}),T=od({ref:$,formatter:k}),E=e=>{C.current=e,g(e)},O=e=>{S.current=e,b(e)},F=e=>{j.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===p.length&&$.current&&$.current.focus()}),[p]),t.useEffect((()=>{R(o)}),[o]);const I=e=>{F(e.target.name),e.target.select()},_=e=>{const t=e.target.name,r=e.target.value,n=B(r);"floor"===t?(E(n),n!==p&&z(n,t)):"unit"===t&&(O(n),n!==m&&z(n,t))},M=e=>{const t=e.target.name;if("floor"===t){const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),E(r),z(r,t)}else if("unit"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),O(r),z(r,t)}},A=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&(null===(t=w.current)||void 0===t||t.focus())},B=e=>/^[0-9]$/.test(e)?ed.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==zI)if(void 0===e||0===e.length)E(""),O("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];E("floor"===v?e:B(e)),O("unit"===v?r:B(r))}}},z=(e,t)=>{if(!a&&!l)return;const r={floor:C.current,unit:S.current};if(r[t]=e,a){const e=L(r);a(e)}l&&l([r.floor,r.unit])},P=()=>{if(!s&&!c)return;const e={floor:B(C.current),unit:B(S.current)};if(s){const t=L(e);s(t)}c&&c([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":zI},N=e=>e.split("-");return e.jsxs(Bf,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:n,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==j.current&&(F("none"),P())},children:[e.jsx(FI,{"data-testid":"addon",$disabled:n,$readOnly:d,children:"#"}),d&&o?(t=>{const r=t.split("-");return e.jsxs(AI,{children:[e.jsx(BI,{children:r[0]}),e.jsx(MI,{children:"-"}),e.jsx(BI,{children:r[1]})]})})(o):e.jsxs(e.Fragment,{children:[e.jsx(II,{name:"floor",maxLength:3,value:p,ref:w,onFocus:I,onBlur:_,onChange:M,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||d?N(u)[0]:"",autoComplete:f,styleType:"no-border"}),e.jsx(MI,{$inactive:0===p.length,children:"-"}),e.jsx(_I,{name:"unit",maxLength:5,value:m,ref:$,onFocus:I,onBlur:_,onChange:M,onKeyDown:A,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||d?N(u)[1]:"",autoComplete:f,styleType:"no-border"})]})]}))},zI="Invalid unit number",PI={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Fh,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(qh,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Up,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Ix,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:Px,InputGroup:JS,MaskedInput:hj,Label:rx,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=G(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(WO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(KO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(UO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=G(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(vF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(SF,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(jF,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(kx,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=G(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(bF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:AF,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(OI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(TI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=G(t,["id","data-error-testid","children"]);return e.jsx(lx,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(RI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(dF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=G(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(lx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(hF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},LI=q.default.li`
    display: flex;
    flex-direction: column;
    padding: ${Qs["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    }
`,NI=q.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Qs["spacing-16"]};
    width: 100%;
`,HI=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,WI=q.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Qs["spacing-16"]};

    ${tl.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,VI=q.default(exports.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Qs["spacing-16"]};

    ${tl.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Qs["spacing-8"]};
    }
`,YI=q.default(exports.Typography.BodyMD)``,UI=q.default.div`
    display: flex;
    ${tl.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return i.css`
                margin-left: calc(
                    96px + ${Qs["spacing-32"]}
                ); // thumbnail width + right margin

                ${tl.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,KI=q.default(Wl.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Qs["spacing-16"]};
    }

    ${tl.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Qs["spacing-16"]};
        }
    }
`,qI=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:n,onReplaceClick:i})=>e.jsxs(XI,{"data-testid":r,children:[e.jsx(GI,{"data-testid":r?`${r}-image`:void 0,src:t}),n&&e.jsx(ZI,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),XI=q.default.div`
    width: auto;
    margin-right: ${Qs["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,GI=q.default(mg)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Js.sm};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    object-fit: cover;

    ${tl.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,ZI=q.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Qs["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Xs["body-md-semibold"]}
    color: ${qs["text-primary"]};

    :hover {
        color: ${qs["text-hover"]};
    }
`,QI=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:o,onCancel:a,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:f}=r,[h,p]=t.useState(),[g,m]=t.useState(""),b=t.useRef(null),v=t.useRef(null);t.useEffect((()=>{p(y(c))}),[i]),t.useEffect((()=>{m(r.description||"")}),[r]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return ed.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(LI,{"data-testid":`${l}-edit-display`,children:[e.jsxs(NI,{children:[f&&e.jsx(qI,{thumbnailImageDataUrl:f}),e.jsxs(HI,{children:[e.jsxs(WI,{ref:v,children:[e.jsx(VI,{weight:"semibold",children:h}),e.jsx(YI,{children:gg.formatFileSizeDisplay(d)})]}),e.jsx(PI.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:g,maxLength:n,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(UI,{$thumbnail:!!f,children:[e.jsx(KI,{"data-testid":`${l}-save-button`,type:"button",disabled:0===g.trim().length,onClick:()=>{b.current&&o(b.current.value.trim())},children:"Save"}),e.jsx(KI,{type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:a,children:"Cancel"})]})]})},JI=q.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Qs["spacing-16"]};
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
`,e_=q.default(M.DragHandleIcon)`
    margin-right: ${Qs["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${qs.icon};

    ${e=>e.$active?i.css`
                color: ${qs["icon-primary"]};
            `:e.$disabled?i.css`
                color: ${qs["icon-disabled"]};
            `:void 0};
`,t_=q.default.div`
    background: ${qs["bg-primary-subtlest"]};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.sm};
    padding: ${Qs["spacing-16"]} ${Qs["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${tl.MaxWidth.sm} {
        padding: ${Qs["spacing-16"]};
    }

    ${e=>e.$focused?i.css`
                border-color: ${qs["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${qs["border-focus"]} r g b / 50%);
            `:e.$disabled?i.css`
                border-color: ${qs["border-disabled"]};
            `:e.$error?i.css`
                background: ${qs["bg-error"]};
                border-color: ${qs["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return i.css`
                ${tl.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,r_=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${tl.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${tl.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,n_=q.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,i_=q.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${tl.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,o_=q.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${Qs["spacing-8"]};
    justify-content: flex-end;

    ${tl.MaxWidth.sm} {
        ${e=>e.$hideInMobile?i.css`
                    display: none;
                    visibility: hidden;
                `:i.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Qs["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,a_=q.default(exports.Typography.BodyMD)``,s_=q.default(a_)`
    margin-top: ${Qs["spacing-4"]};
`,l_=q.default(exports.Typography.BodySM)`
    color: ${qs["text-error"]};
`,c_=q.default(l_)`
    margin-top: ${Qs["spacing-4"]};
    ${tl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,d_=q.default(l_)`
    display: none;
    visibility: hidden;
    ${tl.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Qs["spacing-8"]};
    }
`,u_=q.default.div`
    width: 6rem;
    margin-left: ${Qs["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${tl.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${Qs["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${Qs["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,f_=q.default(_h)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Qs["spacing-16"]};
    }
`,h_=q.default(il)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${qs.icon};
    }
`,p_=t.memo((({fileItem:r,editable:n,sortable:i,wrapperWidth:o,disabled:a,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:f,description:h,progress:p=1,errorMessage:g,thumbnailImageDataUrl:b,truncateText:v=!0}=r,[y,x]=t.useState(),{activeId:w}=t.useContext(Mg),{attributes:$,listeners:C,setNodeRef:S,transform:j,transition:k}=_y({id:d}),D=t.useRef(null),T={transform:Ib.Translate.toString(j),transition:k},E=Object.assign(Object.assign({style:T},$),C),O=p<1,F=gg.formatFileSizeDisplay(f),M=w?w===d?"self":"others":"none";t.useEffect((()=>{x(z(u))}),[o]);const A=()=>{l()},B=()=>{c&&c()},R=e=>{i&&e.stopPropagation()},z=e=>{if(!v)return e;const t=D&&D.current?D.current.getBoundingClientRect().width:0;return ed.truncateOneLine(e,t,t/2,t/2/8,16)},P=()=>a||!!w,L=()=>!!i&&!s,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(a_,{weight:h?"semibold":"regular",children:y}),h&&e.jsx(s_,{children:h})]});return e.jsxs(JI,Object.assign({id:d,ref:S,$sortable:L(),$disabled:P(),$focusType:M},L()?E:{},{children:[L()&&e.jsx(e_,{"data-testid":`${d}-drag-handle`,$disabled:P(),$active:"self"===M}),e.jsxs(t_,{$focused:"self"===M,$error:!!g,$loading:O,$disabled:P(),$editable:n,children:[(()=>{let t;return t=g?e.jsxs(e.Fragment,{children:[e.jsxs(n_,{ref:D,children:[N(),g&&e.jsx(c_,{weight:"semibold",children:g})]}),e.jsx(o_,{children:e.jsx(a_,{children:F})}),g&&e.jsx(d_,{weight:"semibold",children:g})]}):b?(t=>e.jsxs(e.Fragment,{children:[e.jsx(qI,{thumbnailImageDataUrl:t,"data-testid":`${d}-thumbnail`}),e.jsxs(i_,{children:[e.jsx(n_,{ref:D,children:N()}),e.jsx(o_,{children:e.jsx(a_,{children:F})})]})]}))(b):e.jsxs(e.Fragment,{children:[e.jsx(n_,{ref:D,children:N()}),e.jsx(o_,{$hideInMobile:O,children:e.jsx(a_,{children:F})})]}),e.jsx(r_,{$hasThumbnail:!!b,children:t})})(),!s&&(()=>{let t;return t=g?e.jsx(h_,{onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}):O?e.jsx(vp,{progress:p,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[n&&e.jsx(f_,{"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:P(),onClick:B,onKeyDown:R,children:e.jsx(_.PencilIcon,{"aria-hidden":!0})},"edit"),e.jsx(f_,{"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:P(),onClick:A,onKeyDown:R,children:e.jsx(I.BinIcon,{"aria-hidden":!0})},"delete")]}),e.jsx(u_,{$editable:n,$error:!!g,$loading:O,children:t})})()]})]}))})),g_=q.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Qs["spacing-32"]};
`,m_=q.default.li`
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};

    :not(:last-child) {
        margin-bottom: ${Qs["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Qs["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,b_=({fileItems:r,editableFileItems:n,fileDescriptionMaxLength:i,sortable:o,disabled:a,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(Mg),{width:p=0,ref:g}=Xe(),m=t.useRef({}),b=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>[...r].filter((e=>null!=e))),[...r])}(Vb(zy,{activationConstraint:{distance:8}}),Vb(Rv,{activationConstraint:{delay:150,tolerance:5}}),Vb(Dv,{coordinateGetter:By})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(T(r))}),[r]);const y=e=>t=>{E(e.id,"display"),v(e.id);const r=Object.assign(Object.assign({},e),{description:t});l(r)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?E(e.id,"display"):c(e),v(e.id)},$=e=>()=>{E(e.id,"edit")},C=e=>()=>{c(e)},S=e=>{if(d&&r){const{active:t,over:n}=e;if(n&&t.id!==n.id){const e=r.findIndex((e=>e.id===t.id)),i=r.findIndex((e=>e.id===n.id)),o=vy(r,e,i);d(o)}}h(void 0)},j=e=>{const{active:t}=e;h(t.id)},k=e=>n&&gg.isSupportedImageType(e.type),D=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&k(e)&&!e.description,T=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":u[r.id]?t[r.id]=u[r.id]:t[r.id]=D(r)?"edit":"display";return t},E=(e,t)=>{f((r=>Object.assign(Object.assign({},r),{[e]:t})))},O=()=>r&&r.length>1&&o&&Object.values(u).every((e=>"display"===e)),F=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(r,u);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==m.current[t.id]&&(r.description=m.current[t.id]),e.jsx(QI,{fileItem:r,wrapperWidth:p,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(m_,{children:e.jsx("ul",{children:n})},`editable-${r}`)})(t,r):e.jsx(p_,{fileItem:t,editable:k(t),wrapperWidth:p,sortable:O(),disabled:a,readOnly:s,onDelete:C(t),onEditClick:$(t)},t.id)))};return r&&0!==r.length?a||s||!O()?e.jsx(g_,{$readOnly:s,ref:g,children:F()}):e.jsx(hy,{sensors:b,onDragEnd:S,onDragStart:j,children:e.jsx(ky,{items:r,strategy:Cy,children:e.jsx(g_,{$readOnly:s,ref:g,children:F()})})}):null},v_=q.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Qs["spacing-32"]};
    gap: ${Qs["spacing-8"]};
`,y_=q.default(exports.Typography.BodyBL)``,x_=q.default.div`
    color: ${qs.text};
    ${Xl({textSize:"body-baseline"})}
`,w_=q.default(exports.Typography.BodyMD)`
    color: ${qs["text-subtler"]};
`,$_=q.default.div`
    color: ${qs.text};
    ${Xl({textSize:"body-md"})}
`,C_=q.default(nc)`
    margin-bottom: ${Qs["spacing-32"]};
`,S_=q.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${tl.MaxWidth.sm} {
        align-items: flex-start;
    }
`,j_=q.default(Wl.Small)`
    width: 10rem;

    ${tl.MaxWidth.sm} {
        width: 100%;
    }
`,k_=q.default.label`
    ${Xs["body-md-semibold"]}
    color: ${qs["text-subtler"]};
    margin-top: ${Qs["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${tl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,D_=q.default(nc)`
    margin-bottom: ${Qs["spacing-32"]};
`,T_=U.default.createContext({mode:"default",rootNode:{current:null}});var E_=Oi((function(e){return null==e}));const O_=q.default.div`
    background-color: ${e=>e.$collapsible?qs["bg-strong"]:qs.bg};
    ${tl.MaxWidth.lg} {
        background-color: ${qs["bg-strong"]};
    }
`,F_=q.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${qs.border};

    ${tl.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Qs["spacing-16"]};
    }
`,I_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${qs.bg};

    ${tl.MaxWidth.lg} {
        background-color: transparent;
    }
`,__=q.default(il)`
    margin: 0 0 0 auto;

    color: ${qs.icon};
    &:hover {
        color: ${qs["icon-hover"]};
    }
`,M_=q.default(f.ChevronDownIcon)`
    height: ${Xs.Spec["body-size-baseline"]};
    width: ${Xs.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Gs["duration-350"]} ${Gs["ease-standard"]};
`,A_=q.default.p`
    ${Xs["heading-xs-semibold"]}
    color: ${qs.text};

    margin: ${Qs["spacing-24"]} 0 ${Qs["spacing-24"]}
        ${Qs["spacing-20"]};

    ${tl.MaxWidth.lg} {
        ${Xs["body-md-semibold"]}
        color: ${qs["text-subtle"]};

        margin: ${Qs["spacing-24"]} ${Qs["spacing-20"]} 0
            ${Qs["spacing-20"]};
    }
`,B_=q.default(Ti.div)`
    overflow: hidden;
`,R_=q.default.div`
    padding: ${Qs["spacing-24"]} ${Qs["spacing-20"]};
`,z_=q.default(Ti.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,P_=q.default(Wl.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Qs["spacing-16"]} 0 0 0;
`,L_=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:u=!0,title:f,addon:h,children:p}=r,g=G(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:b}=t.useContext(T_),v="mobile"===m,[y,x]=t.useState(T()),[w,$]=t.useState(l),C=!v&&i,S=Xe(),j=Xe(),k=di({height:y?S.height:0}),D=w?null!=c?c:Math.min(.5*(null!==(n=j.height)&&void 0!==n?n:0),216):j.height;t.useEffect((()=>{x(T())}),[i,a]);function T(){return!!v||(E_(a)?!i||o:a)}return e.jsxs(O_,{$collapsible:C,children:[e.jsx(F_,{$showDivider:d,$showMobileDivider:u}),(f||C)&&e.jsxs(I_,{children:[f&&e.jsxs(A_,{children:[f," ",h&&("popover"===(null==h?void 0:h.type)?e.jsx(Qy,{addon:h,rootNode:v?b:void 0}):null)]}),C&&e.jsx(__,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!y;E_(a)&&x(e),s&&s(e)},"aria-label":y?"Collapse":"Expand",children:e.jsx(M_,{$expanded:y})})]}),e.jsx(B_,{"data-testid":"expandable-container","data-expanded":y,style:k,children:e.jsx("div",{ref:S.ref,children:e.jsxs(R_,Object.assign({},g,{children:[e.jsx(z_,{"data-testid":"minimisable-container",$height:D,$minimisable:l,children:e.jsx("div",{ref:j.ref,children:e.jsx("div",{"data-id":"content-container",children:"function"==typeof p?p(m,{minimised:w}):p})})}),l&&e.jsxs(P_,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!w)},children:["View ",w?"more":"less"]})]}))})})]})};L_.displayName="Filter.Item";const N_=q.default(L_)`
    padding: 0 0 ${Qs["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Qs["spacing-8"]} ${Qs["spacing-8"]} 0;

        ${tl.MaxWidth.lg} {
            padding: ${Qs["spacing-16"]} ${Qs["spacing-20"]}
                ${Qs["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Qs["spacing-8"]} ${Qs["spacing-20"]} 0;
    }
`,H_=q.default.div`
    display: flex;
    flex-direction: column;

    ${tl.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Qs["spacing-16"]};
    }
`,W_=q.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Qs["spacing-8"]} ${Qs["spacing-12"]};

    cursor: pointer;
    ${Xs["body-md-regular"]}
    color: ${qs.text};
    ${e=>e.$selected&&i.css`
            color: ${qs["text-selected"]};
        `}

    ${tl.MaxWidth.lg} {
        padding: ${Qs["spacing-8"]};
    }
`,V_=q.default(ju)`
    flex-shrink: 0;
    margin-right: ${Qs["spacing-8"]};
`,Y_=q.default(sI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,U_=q.default(Wl.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Qs["spacing-16"]} 0 ${Qs["spacing-8"]}
        ${Qs["spacing-12"]};

    ${tl.MaxWidth.lg} {
        margin: 0 0 ${Qs["spacing-16"]} 0;
    }
`,K_=r=>{var{selectedOptions:n,options:i,onSelect:o,labelExtractor:a,valueExtractor:s,useToggleContentWidth:l}=r,c=G(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(T_),[u,f]=t.useState(n||[]),[h,p]=t.useState(),[g,m]=t.useState(i.length),b=t.useRef(null),v=t.useRef(null),y=e=>()=>{const t=[...u],r=u.findIndex((t=>$(t)===$(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==o||o(t)},x=()=>{const e=u.length?[]:i;f(e),null==o||o(e)},w=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},C=t.useCallback((()=>{if(!b.current)return void p(void 0);const e=Array.from(b.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}m(t),p(r>2?n-8:void 0)}),[]);t.useEffect((()=>{n!==u&&f(n||[])}),[n]),t.useEffect((()=>{"default"===d?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;p(e)})():C()}),[i]),Xe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:C});return e.jsx(N_,Object.assign({minimisable:i.length>5,minimisedHeight:h},c,{children:(t,{minimised:r})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(U_,{styleType:"link",type:"button",onClick:x,children:u.length?"Clear all":"Select all"}),e.jsx(H_,{role:"group","aria-label":c.title,ref:b,children:i.map(((n,i)=>"default"===t?((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsxs(W_,{$visible:!n||r<5,$selected:a,ref:4===r?v:void 0,children:[e.jsx(V_,{displaySize:"small",checked:a,onChange:y(t)}),i]},o)})(n,i,r):((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsx(Y_,{type:"checkbox",checked:a,$visible:!n||!!h&&r<=g,onChange:y(t),useContentWidth:l,children:i},o)})(n,i,r)))})]})}))};K_.displayName="Filter.Checkbox";const q_=q.default.div`
    background-color: ${qs.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,X_=q.default.div`
    background-color: ${qs.bg};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-radius: ${Js.md};
    overflow: hidden;
    width: 100%;
`,G_=q.default.div`
    background-color: ${qs["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Z_=q.default.div`
    background-color: ${qs.bg};
    height: 100%;
    width: 100%;
`,Q_=q.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,J_=q.default.div`
    display: flex;
    align-items: center;

    background-color: ${qs.bg};

    ${tl.MaxWidth.lg} {
        border-bottom: ${Zs["width-010"]} ${Zs.solid}
            ${qs.border};
    }
`,eM=q.default(exports.Typography.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Qs["spacing-24"]} 0 ${Qs["spacing-24"]}
        ${Qs["spacing-20"]};

    ${tl.MaxWidth.lg} {
        text-align: center;
        margin: ${Qs["spacing-24"]} 0;
    }
`,tM=q.default(il)`
    padding: ${Qs["spacing-24"]} ${Qs["spacing-20"]};
    margin-right: auto;
    color: ${qs.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${qs["icon-hover"]};
    }
`,rM=q.default(Wl.Small)`
    background-color: transparent;
    padding-right: ${Qs["spacing-20"]};
    padding-left: ${Qs["spacing-20"]};
    height: 100%;

    ${tl.MaxWidth.lg} {
        padding: ${Qs["spacing-24"]} ${Qs["spacing-20"]};
    }
`,nM=q.default(vd.Default)`
    width: 100%;
`,iM=q.default.div`
    padding: ${Qs["spacing-24"]} ${Qs["spacing-20"]};
    background-color: ${qs.bg};
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
`,oM=q.default(Wl.Default)`
    width: 100%;
`,aM=({onDismiss:t,onDone:r,children:n})=>e.jsxs(q_,{children:[e.jsx(tM,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(p.ChevronLeftIcon,{})}),e.jsx(Q_,{children:n}),e.jsx(iM,{children:e.jsx(oM,{onClick:r,type:"button",children:"Done"})})]});aM.displayName="Filter.Page";const sM=r=>{var{toggleFilterButtonLabel:n="Filters",toggleFilterButtonStyle:o="light",headerTitle:a="Filters",clearButtonDisabled:s=!1,onClear:l,onDismiss:c,onDone:d,children:f}=r,h=G(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[p,g]=t.useState(!1),m=t.useRef(null),b=t.useRef(null),v=i.useTheme(),y=el["lg-max"]({theme:v}),x=vc.useMediaQuery({maxWidth:y});t.useEffect((()=>{x||$()}),[x]);const w=()=>{g(!0)},$=()=>{g(!1),c&&c()},C=()=>{g(!1),d&&d()},S=()=>{l&&l()},j=e=>"function"==typeof f?f(e):f,k=t=>e.jsxs(J_,{children:["mobile"===t&&e.jsx(tM,{onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(u.CrossIcon,{})}),e.jsx(eM,{weight:"semibold",children:a}),e.jsx(rM,{styleType:"link",type:"button",onClick:S,disabled:s,children:"Clear"})]});return e.jsx("div",Object.assign({},h,{children:x?e.jsx(T_.Provider,{value:{mode:"mobile",rootNode:m},children:e.jsxs(e.Fragment,{children:[e.jsx(nM,{"data-testid":"filter-show-button",styleType:o,onClick:w,type:"button",icon:e.jsx(u.FilterIcon,{}),children:n}),e.jsx(dp,{show:p,disableTransition:!0,children:e.jsx(Z_,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:e.jsxs(G_,{ref:m,children:[k("mobile"),e.jsx(Q_,{children:j("mobile")}),e.jsx(iM,{children:e.jsx(oM,{onClick:C,type:"button",children:"Done"})})]})})})]})}):e.jsx(T_.Provider,{value:{mode:"default",rootNode:b},children:e.jsxs(X_,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b,children:[k("default"),j("default")]})})}))};sM.displayName="Filter";const lM=Object.assign(sM,{Item:L_,Page:aM,Checkbox:K_}),cM=q.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${tl.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,dM=q.default(exports.Typography.BodyMD)`
    margin-bottom: ${Qs["spacing-16"]};
`,uM=q.default.div`
    display: flex;
    align-items: flex-start;
`,fM=q.default.a`
    &:not(:last-child) {
        margin-right: ${Qs["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${tl.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${Qs["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,hM=()=>e.jsxs(cM,{"data-testid":"download-app-section",children:[e.jsx(dM,{weight:"semibold",children:"Download the app"}),e.jsxs(uM,{children:[e.jsx(fM,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(fM,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),pM={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},gM={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},mM={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var bM;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${_c(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return gM;case"mylegacy":return mM;default:return pM}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(bM||(bM={}));const vM=q.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i.css`
                padding: 0 ${el["xxl-margin"]}px;
            `:i.css`
                padding: 0 ${el["xxl-margin"]}px;
                max-width: 1440px;

                ${tl.MaxWidth.xl} {
                    padding: 0 ${el["xl-margin"]}px;
                }

                ${tl.MaxWidth.lg} {
                    padding: 0 ${el["lg-margin"]}px;
                }

                ${tl.MaxWidth.md} {
                    padding: 0 ${el["md-margin"]}px;
                }

                ${tl.MaxWidth.sm} {
                    padding: 0 ${el["sm-margin"]}px;
                }

                ${tl.MaxWidth.xs} {
                    padding: 0 ${el["xs-margin"]}px;
                }

                ${tl.MaxWidth.xxs} {
                    padding: 0 ${el["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: ${el["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${el["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${tl.MaxWidth.xl} {
                        column-gap: ${el["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${el["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${tl.MaxWidth.lg} {
                        column-gap: ${el["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${el["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${tl.MaxWidth.md} {
                        column-gap: ${el["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${el["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${tl.MaxWidth.sm} {
                        column-gap: ${el["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${el["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${tl.MaxWidth.xs} {
                        column-gap: ${el["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${el["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${tl.MaxWidth.xxs} {
                        column-gap: ${el["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${el["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,yM=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=G(t,["children","data-testid","type","stretch"]);return e.jsx(vM,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),xM=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=G(t,["children","data-testid","stretch"]);return e.jsx(wM,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),wM=q.default.section`
    display: block;
    position: relative;
`,$M=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=G(t,["children","data-testid","className","type","stretch"]);return e.jsx(xM,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(yM,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),CM={Section:xM,Container:yM,Content:$M,ColDiv:Gh},SM=q.default.footer`
    background: ${qs["bg-strong"]};
`,jM=q.default(exports.Typography.LinkSM)`
    color: ${qs.text};
`,kM=q.default(ap)`
    width: 100%;
`,DM=q.default(CM.Content)`
    padding: ${Qs["spacing-64"]} 0;

    ${tl.MaxWidth.lg} {
        padding: ${Qs["spacing-32"]} 0;
    }
`,TM=q.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${tl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${Qs["spacing-32"]};
    }

    ${tl.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${Qs["spacing-32"]};
    }
`,EM=q.default.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${Qs["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${tl.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${tl.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,OM=q.default.div`
    grid-column: 13 / span 6;

    ${tl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Qs["spacing-32"]};
    }

    ${tl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,FM=q.default(CM.Content)`
    padding: ${Qs["spacing-20"]} 0;

    ${tl.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Qs["spacing-16"]} 0;
    }
`,IM=q.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${Qs["spacing-16"]};
    }

    ${tl.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${tl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,_M=q.default(IM)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${tl.MaxWidth.lg} {
        margin-top: ${Qs["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${tl.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,MM=q.default(exports.Typography.LinkXS)`
    color: ${qs.text};
    &:not(:last-child) {
        margin-right: ${Qs["spacing-16"]};
    }

    svg {
        color: ${qs.icon};
    }

    &:hover {
        color: ${qs["text-subtler"]};
        svg {
            color: ${qs["icon-subtle"]};
        }
    }

    ${tl.MaxWidth.lg} {
        margin-bottom: ${Qs["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${tl.MaxWidth.lg} {
        margin-bottom: ${Qs["spacing-8"]};
    }
`;var AM=function(e,t){return Number(e.toFixed(t))},BM=function(e,t,r){r&&"function"==typeof r&&r(e,t)},RM={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},zM=function(e){"number"==typeof e&&cancelAnimationFrame(e)},PM=function(e){e.mounted&&(zM(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function LM(e,t,r,n){if(e.mounted){var i=(new Date).getTime();PM(e),e.animation=function(){if(!e.mounted)return zM(e.animation);var o=(new Date).getTime()-i,a=(0,RM[t])(o/r);o>=r?(n(1),e.animation=null):e.animation&&(n(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function NM(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,f=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):LM(e,n,r,(function(e){o(s+d*e,l+u*e,c+f*e)}))}}var HM=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},WM=function(e,t,r,n){return AM(n?e<t?t:e>r?r:e:e,2)},VM=function(e,t){var r=HM(e,t);return e.bounds=r,r};function YM(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,f=0;return a&&(u=i,f=o),{x:WM(e,s-u,c+u,n),y:WM(t,l-f,d+f,n)}}function UM(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):YM(l-t*d,c-r*d,i,o,0,0,null)}function KM(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var qM=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!kA(o,r)},XM=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function GM(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var f=YM(t,r,s,o,n,i,a),h=f.x,p=f.y;e.setTransformState(c,h,p)}}var ZM=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0};function QM(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:WM(e,o,a,i)}function JM(e,t){var r=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)}(e);if(r){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(n&&i&&a){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),d=t.x-n.x,u=t.y-n.y,f=d/c,h=u/c,p=l-i,g=d*d+u*u,m=Math.sqrt(g)/p;e.velocity={velocityX:f,velocityY:h,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function eA(e,t){var r=e.transformState.scale;PM(e),VM(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function tA(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,f=d.minPositionX,h=d.maxPositionY,p=d.minPositionY,g=r>u||r<f,m=n>h||n<p,b=UM(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:r,positionY:m?y:n}}}(e);d&&NM(e,d,l,c)}}function rA(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=ZM(e,o),u=ZM(e,a);JM(e,{x:l,y:c}),GM(e,l,c,d,u)}}function nA(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!r||!n)}(e);if(o&&t&&r&&i){var a=t.velocityX,s=t.velocityY,l=t.total,c=r.maxPositionX,d=r.minPositionX,u=r.maxPositionY,f=r.minPositionY,h=n.limitToBounds,p=n.alignmentAnimation,g=n.zoomAnimation,m=n.panning,b=m.lockAxisY,v=m.lockAxisX,y=g.animationType,x=p.sizeX,w=p.sizeY,$=p.velocityAlignmentTime,C=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,l),S=Math.max(C,$),j=ZM(e,x),k=ZM(e,w),D=j*i.offsetWidth/100,T=k*i.offsetHeight/100,E=c+D,O=d-D,F=u+T,I=f-T,_=e.transformState,M=(new Date).getTime();LM(e,y,S,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,o=r.positionY,l=((new Date).getTime()-M)/$,g=1-(0,RM[p.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=QM(y,_.positionX,i,v,h,d,c,O,E,g),C=QM(x,_.positionY,o,b,h,f,u,I,F,g);i===y&&o===x||e.setTransformState(n,w,C)}))}}(e):tA(e)}}function iA(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=KM(AM(t,2),o,a,0,!1),c=UM(e,r,n,l,VM(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function oA(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,f=c||n>=a;if((n>=1||s)&&tA(e),!f&&i&&e.mounted){var h=iA(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);h&&NM(e,h,d,u)}}var aA=function(){return aA=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},aA.apply(this,arguments)};function sA(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var lA=1,cA=0,dA=0,uA={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},fA=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:lA,scale:null!==(r=e.initialScale)&&void 0!==r?r:lA,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:cA,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:dA}},hA=function(e){var t=aA({},uA);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==uA[r]&&n){var i=Object.prototype.toString.call(uA[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?aA(aA({},uA[r]),e[r]):a?sA(sA([],uA[r],!0),e[r],!0):e[r]}})),t},pA=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return KM(AM(u,3),s,a,d,!1)};function gA(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,f=iA(e,pA(e,t,r),d,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");NM(e,f,n,i)}function mA(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=fA(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var f=HM(e,s.scale),h=YM(s.positionX,s.positionY,f,a,0,0,o),p={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),NM(e,p,t,r))}}var bA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),gA(e,1,t,r,n)}},vA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),gA(e,-1,t,r,n)}},yA=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};NM(e,f,i,o)}}},xA=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),mA(e,t,r)}},wA=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=TA(t||i.scale,o,a);NM(e,s,r,n)}}},$A=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),PM(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d,u,f,h,p,g,m,b,v=n.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(d=n,u=i,f=o,h=t.getBoundingClientRect(),p=d.getBoundingClientRect(),g=u.getBoundingClientRect(),m=p.x*f.scale,b=p.y*f.scale,{x:(h.x-g.x+m)/f.scale,y:(h.y-g.y+b)/f.scale}),w=x.x,$=x.y,C=y.width/o.scale,S=y.height/o.scale,j=n.offsetWidth/C,k=n.offsetHeight/S,D=KM(r||Math.min(j,k),l,c,0,!1),T=(v.width-C*D)/2,E=(v.height-S*D)/2,O=YM((v.left-w)*D+T,(v.top-$)*D+E,HM(e,D),s,0,0,n);return{positionX:O.x,positionY:O.y,scale:D}}(e,a,r);NM(e,s,n,i)}}},CA=function(e){return{instance:e,zoomIn:bA(e),zoomOut:vA(e),setTransform:yA(e),resetTransform:xA(e),centerView:wA(e),zoomToElement:$A(e)}},SA=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,CA(e)),t};function jA(){try{return{get passive(){return!1}}}catch(e){return!1}}var kA=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},DA=function(e){e&&clearTimeout(e)},TA=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function EA(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var OA=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},FA=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,f=a.disablePadding,h=a.smooth,p=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,f=d.size,h=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*r;if(i)return p;var g=!n&&!h;return KM(AM(p,3),c,l,f,g&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=VM(e,y),w=EA(t,o,s),$=l&&(g||0===p||c||f),C=UM(e,w.x,w.y,y,x,$),S=C.x,j=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,j),BM(SA(e),t,n),BM(SA(e),t,i)}},IA=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;DA(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(oA(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(DA(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,BM(SA(e),t,n),BM(SA(e),t,i))}),160))},_A=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=AM(i[0].clientX-n.left,5),a=AM(i[0].clientY-n.top,5);return{x:(o+AM(i[1].clientX-n.left,5))/2/t,y:(a+AM(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=OA(t),h=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:KM(AM(t/n*r,2),a,o,c,!d&&!l)}(e,f);if(h!==i){var p=VM(e,h),g=a&&(c||0===d||s),m=UM(e,u.x,u.y,h,p,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},MA=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;DA(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,BM(SA(e),t,r)}),n)};function AA(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,f=d.mode,h=d.step,p=d.animationTime,g=d.animationType;if(!u&&!n){if("reset"===f)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;BM(SA(e),t,n),mA(e,a,s,(function(){return BM(SA(e),t,i)})),MA(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=pA(e,m,h);if(a!==b){BM(SA(e),t,l);var v=EA(t,o,a),y=iA(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");BM(SA(e),t,c),NM(e,y,p,g),MA(e,t)}}}var BA=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,VM(t,t.transformState.scale),t.setup=hA(e)},this.initializeWindowEvents=function(){var e,r,n=jA(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=jA(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),PM(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=jA();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(SA(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(SA(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||kA(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(PM(e),BM(SA(e),t,n),BM(SA(e),t,i))}(t,e),FA(t,e),IA(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,f=o.lockAxisY?l:d,h=t.setup.alignmentAnimation,p=h.sizeX,g=h.sizeY,m=ZM(t,p),b=ZM(t,g);u===s&&f===l||GM(t,u,f,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||qM(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),PM(t),eA(t,e),BM(SA(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||XM(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),rA(t,e.clientX,e.clientY),BM(SA(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(nA(t),BM(SA(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||kA(a,i))}(t,e);a&&(function(e,t){var r=OA(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,PM(e)}(t,e),PM(t),BM(SA(t),e,i),BM(SA(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),_A(t,e),BM(SA(t),e,i),BM(SA(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,oA(r,null==n?void 0:n.x,null==n?void 0:n.y),BM(SA(t),e,o),BM(SA(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&qM(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,PM(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(PM(t),eA(t,e),BM(SA(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!XM(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];rA(t,i.clientX,i.clientY),BM(SA(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||kA(l,s))}(t,e);r&&AA(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=SA(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),BM(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=TA(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return SA(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,VM(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=SA(t);BM(n,void 0,t.props.onInit)},this.props=e,this.setup=hA(this.props),this.transformState=fA(this.props)},RA=U.default.createContext(null),zA=U.default.forwardRef((function(e,r){var n=t.useRef(new BA(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,CA(n));return t.useImperativeHandle(r,(function(){return CA(n)}),[n]),t.useEffect((function(){n.update(e)}),[n,e]),U.default.createElement(RA.Provider,{value:n},i)}));U.default.forwardRef((function(e,r){var n,i=t.useRef(null),o=t.useContext(RA);return t.useEffect((function(){return o.onChange((function(e){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),U.default.createElement("div",aA({},e,{ref:(n=[i,r],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var PA="transform-component-module_wrapper__SPB86",LA="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var NA=function(e){var r=e.children,n=e.wrapperClass,i=void 0===n?"":n,o=e.contentClass,a=void 0===o?"":o,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(RA),p=h.init,g=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&p&&(null==p||p(e,t)),function(){null==g||g()}}),[]),U.default.createElement("div",aA({},d,{ref:m,className:"react-transform-wrapper ".concat(PA," ").concat(i),style:s}),U.default.createElement("div",aA({},f,{ref:b,className:"react-transform-component ".concat(LA," ").concat(a),style:l}),r))};const HA=q.default.div`
    background-color: ${qs["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${qs["icon-subtle"]};
    }
`,WA=t=>e.jsx(HA,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),VA=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,YA=q.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,UA=q.default(WA)`
    width: 100%;
    height: 100%;
`,KA=({src:r,className:n,alt:i,fit:o,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{d(!0),f(void 0);const e=new Image;e.src=r,e.onload=()=>{s&&l&&l({src:r,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[r]);return e.jsx(VA,{className:n,children:u?null!=a?a:e.jsx(UA,{}):c?e.jsx(cc,{}):e.jsx(YA,{src:r,alt:i,$fit:o})})},qA=q.default(il)`
    padding: 0;
    border-radius: 100%;
    background: ${qs.bg};
    color: ${qs["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,XA=q.default(qA)`
    position: absolute;
    top: ${Qs["spacing-48"]};
    right: ${Qs["spacing-48"]};
    z-index: 5;

    ${tl.MaxWidth.sm} {
        top: ${Qs["spacing-20"]};
        right: ${Qs["spacing-20"]};
    }
`,GA=q.default(qA)`
    position: absolute;
    top: ${Qs["spacing-48"]};
    right: calc(
        2.5rem + ${Qs["spacing-48"]} + ${Qs["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${tl.MaxWidth.sm} {
        top: ${Qs["spacing-20"]};
        right: calc(
            2.5rem + ${Qs["spacing-20"]} + ${Qs["spacing-16"]}
        );
    }
`,ZA=q.default(qA)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&i.css`
            left: ${Qs["spacing-48"]};
            ${tl.MaxWidth.sm} {
                left: ${Qs["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&i.css`
            right: ${Qs["spacing-48"]};
            ${tl.MaxWidth.sm} {
                right: ${Qs["spacing-20"]};
            }
        `}
`,QA=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,JA=q.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,eB=q.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,tB=q.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,rB=q.default.div`
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
`,nB=q.default(KA)`
    height: 100%;
    width: 100%;
`,iB=q.default(WA)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,oB=q.default.div`
    display: flex;
    justify-content: center;
    padding: ${Qs["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,aB=q.default(exports.Typography.BodyXS)`
    display: inline-flex;
    padding: ${Qs["spacing-4"]} ${Qs["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${Js.full};
    background-color: ${qs.bg};
    text-align: center;
`,sB=q.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${qs["bg-inverse"]};
    padding: ${Qs["spacing-24"]} ${Qs["spacing-16"]};

    ${tl.MaxWidth.sm} {
        padding: ${Qs["spacing-16"]} ${Qs["spacing-20"]};
    }
`,lB=q.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Qs["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,cB=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${tl.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,dB=q.default.div`
    cursor: pointer;
    background-color: ${qs["bg-inverse"]};
    border-radius: ${Js.md};
    border: ${Zs.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${tl.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?i.css`
                  border-width: ${Zs["width-040"]};
                  border-color: ${qs["border-selected"]};

                  ${tl.MaxWidth.sm} {
                      border-width: ${Zs["width-020"]};
                  }

                  :hover {
                      border-color: ${qs["border-selected-hover"]};
                  }
              `:i.css`
                  border-width: ${Zs["width-010"]};

                  :hover {
                      border-color: ${qs["border-hover"]};
                  }
              `};
`,uB=q.default(KA)`
    height: 100%;
    width: 100%;
`,fB=(r,n)=>{var{items:i,initialActiveItemIndex:o,hideThumbnail:a=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=r,f=G(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,p]=t.useState(null!=o?o:0),[g,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(),[w,$]=t.useState(),C=t.useRef(null),S=t.useRef([]),j=t.useRef([]),k=y&&w?y-w:0;t.useImperativeHandle(n,(()=>({currentItemIndex:h,setCurrentItem:I,goToPrevItem:O,goToNextItem:F}))),rd("keydown",(function(e){"ArrowRight"===e.key?F():"ArrowLeft"===e.key?O():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const D=e=>{v(e.state.scale)};const T=({src:e,height:t,width:r})=>{m((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},E=()=>{const e=g[i[h].src];if(C.current&&e){const{clientHeight:t,clientWidth:r}=C.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},O=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>0===e?i.length-1:e-1))},F=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>e===i.length-1?0:e+1))},I=e=>{var t,r;null===(r=null===(t=j.current)||void 0===t?void 0:t[h])||void 0===r||r.resetTransform(),p(e)};return e.jsxs(jp,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e.jsx(XA,{"aria-label":"Close image carousel",onClick:d,focusHighlight:!1,children:e.jsx(u.CrossIcon,{"aria-hidden":!0})}),!c&&e.jsx(GA,{"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===b){const r=E();null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(r),v(null!=r?r:1)}else v(1),null===(n=null===(r=j.current)||void 0===r?void 0:r[h])||void 0===n||n.resetTransform()},focusHighlight:!1,children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})}),e.jsxs(QA,{children:[e.jsxs(JA,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(ZA,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:O,children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})}),e.jsx(ZA,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:F,children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})})]}),e.jsx(eB,{ref:C,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{C.current&&(Math.abs(k)>C.current.offsetWidth/3&&(k>0?F():O()),x(void 0),$(void 0))},children:e.jsx(tB,{style:{transform:`translateX(calc(${100*-h}% - ${k}px))`},children:i.map(((t,r)=>{var n;return e.jsx(rB,{"data-testid":"slide-item",children:e.jsx(zA,{ref:e=>j.current[r]=e,panning:{disabled:b<=1},initialScale:1,onZoom:D,onZoomStop:D,onWheel:D,children:e.jsx(NA,{children:e.jsx(nB,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e.jsx(iB,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:T})})})},r)}))})}),!l&&e.jsx(oB,{children:e.jsx(aB,{weight:"semibold",children:`${h+1}/${i.length}`})})]}),!a&&e.jsx(sB,{children:e.jsx(lB,{children:i.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e.jsx(cB,{children:e.jsx(dB,{"data-testid":"thumbnail-item",$active:r===h,onClick:()=>I(r),ref:e=>S.current[r]=e,children:e.jsx(uB,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},hB=t.forwardRef(fB),pB=q.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${qs.bg};
    border: ${Zs["width-010"]} ${Zs.solid} transparent;
    border-radius: ${Js.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Gs["duration-250"]} ${Gs["ease-default"]};
    ${Xs["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?qs["text-primary"]:qs.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${tl.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${Xs["body-md-semibold"]}
    }

    ${e=>e.$error?i.css`
                background: ${qs.bg};
                border: ${Zs["width-010"]} ${Zs.solid}
                    ${qs["border-error"]};
            `:e.$selected?i.css`
                background: ${qs["bg-selected"]};
                border: ${Zs["width-010"]} ${Zs.solid}
                    ${qs["border-selected"]};

                &:hover {
                    background: ${qs["bg-selected-hover"]};
                    border: ${Zs["width-010"]} ${Zs.solid}
                        ${qs["border-selected-hover"]};
                }
            `:i.css`
                &:hover {
                    border: ${Zs["width-010"]} ${Zs.solid}
                        ${qs["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${Zs["width-010"]} ${Zs.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${qs["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,gB=U.default.forwardRef(((t,r)=>{var{children:n,imgSrc:i,selected:o,error:a,type:s="button"}=t,l=G(t,["children","imgSrc","selected","error","type"]);return e.jsxs(pB,Object.assign({ref:r,$selected:o,$error:a,type:s},l,{children:[e.jsx(mg,{src:i}),n]}))})),mB=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${qs["icon-primary"]};
`,bB=q.default.div`
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
`,vB=q.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    color: ${qs["text-primary"]};
    margin-bottom: 0.5rem;
`,yB=q.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    color: ${qs["text-primary"]};
`,xB=q.default(h.ChevronRightIcon)`
    ${mB}
`,wB=q.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    }

    :hover {
        ${vB},
        ${yB},
        ${xB} {
            color: ${qs["text-hover"]};
        }
    }
`,$B=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,CB=q.default(exports.Typography.BodyMD)`
    margin-top: 0.25rem;
`,SB=q.default(Ti.div)`
    overflow: hidden;
`,jB=q.default.div`
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
`,kB=q.default(exports.Typography.BodyMD).attrs({as:"span"})`
    color: ${qs["text-primary"]};
    margin-right: 1rem;
`,DB=q.default(B.PlusIcon)`
    ${mB}
`,TB=q.default(A.MinusIcon)`
    ${mB}
`,EB=q.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${Zs["width-010"]} ${Zs.solid} ${qs.border};

    :hover {
        ${kB},
        ${DB},
        ${TB} {
            color: ${qs["text-hover"]};
        }
    }
`,OB=q.default.div`
    ${e=>Xl({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,FB=t.forwardRef(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=G(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(OB,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),IB=q.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,o=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Jh.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${Jh.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,_B=q.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:o,startSm:a,colsSm:s}=e;return i.css`
            grid-column: ${t||n||"auto"} / span
                ${r||o||1};

            ${Jh.MaxWidth.tablet} {
                grid-column: ${n||a||"auto"} / span
                    ${o||s||1};
            }

            ${Jh.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${s||1};
            }
        `}}
`,MB={Grid:U.default.forwardRef(((t,r)=>{const{children:n}=t,i=G(t,["children"]);return e.jsx(IB,Object.assign({ref:r},i,{children:n}))})),Tile:U.default.forwardRef(((t,r)=>{const{children:n}=t,i=G(t,["children"]);return e.jsx(_B,Object.assign({ref:r},i,{children:n}))}))},AB=q.default.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${tl.MaxWidth.sm} {
        padding: 0;
    }
`,BB=()=>{t.useEffect((()=>{r()||n()}),[]);const r=()=>document.getElementById(RB),n=()=>{if(!document.getElementById(RB)){const e=document.createElement("script");e.id=RB,e.type="module",e.src=zB,document.head.appendChild(e)}};return e.jsx(AB,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},RB="lifesg-ds-masthead-script",zB="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",PB={notCompress:6,compress:4},LB=q.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,NB=q.default.nav`
    height: ${e=>e.$compress?PB.compress:PB.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Gs["duration-350"]} ${Gs["ease-standard"]};

    ${tl.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,HB=q.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${tl.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,WB=q.default(il)`
    display: none;

    ${tl.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,VB=q.default(R.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${qs.icon};
`,YB=q.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${tl.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${tl.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,UB=q.default.div`
    display: flex;
    background-color: ${qs.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${tl.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${tl.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,KB=q.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Gs["duration-150"]} ${Gs["ease-default"]};
        object-fit: contain;
    }
`,qB=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e.jsx(KB,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e.jsx(mg,{src:t.logoSrc,alt:t.brandName})}),XB=q.default.div`
    display: none;

    ${tl.MaxWidth.lg} {
        display: flex;
    }
`,GB=q.default.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Qs["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms ${Gs["ease-entrance"]};
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms ${Gs["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return i.css`
            height: calc(${t} * 100);
        `}}

	${tl.MaxWidth.lg} {
        width: 75%;
    }

    ${tl.MaxWidth.sm} {
        width: 100%;
    }
`,ZB=q.default.div`
    display: flex;
    flex-direction: column;
`,QB=q.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Qs["spacing-40"]} ${Qs["spacing-20"]}
        ${Qs["spacing-32"]};
`,JB=q.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,eR=q.default(il)`
    position: absolute;
    right: -${Qs["spacing-4"]};
    color: ${qs.icon};

    :active,
    :focus {
        color: ${qs["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,tR=U.default.forwardRef(((r,n)=>{const{show:i,resources:o={},children:a,hideNavBranding:s,onClose:l,onBrandClick:c}=r,[d,u]=t.useState(0),{primary:f,secondary:h}=o;t.useEffect((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(XB,{ref:n,"data-testid":"drawer",children:e.jsx(GB,{$show:i,$viewHeight:d,children:e.jsxs(ZB,{children:[e.jsxs(QB,{children:[e.jsx(YB,{"data-id":"drawer-brand-container",children:!s&&e.jsxs(e.Fragment,{children:[f&&e.jsx(qB,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(UB,{}),e.jsx(qB,{resources:h,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e.jsx(eR,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:e.jsx(JB,{})})]}),a]})})})})),rR=q.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${Qs["spacing-64"]};
    flex-shrink: 0;

    ${tl.MaxWidth.lg} {
        display: none;
    }
`,nR=q.default.ul`
    display: none;

    ${tl.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Qs["spacing-64"]};
        flex-shrink: 0;
    }
`,iR=q.default.ul`
    display: none;
    list-style: none;

    ${tl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Qs["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${tl.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,oR=q.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Qs["spacing-16"]};
    }

    ${tl.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Qs["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Qs["spacing-16"]:"0"};
        }
    }

    ${tl.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 ${Qs["spacing-16"]};
                `}}
    }
`,aR=q.default(Wl.Small)`
    ${tl.MaxWidth.lg} {
        width: 100%;
    }
`,sR=q.default.div`
    display: none;

    ${tl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Qs["spacing-40"]};
    }
`,lR=q.default(exports.Typography.BodyMD)`
    margin-bottom: ${Qs["spacing-8"]};
`,cR=q.default.div`
    display: flex;
`,dR=q.default.a`
    :not(:last-child) {
        margin-right: ${Qs["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${tl.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${tl.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,uR=({actionButtons:t,mobile:r=!1,onActionButtonClick:n})=>{const i=e=>{e.stopPropagation()},o=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},a=(t,r)=>{const n=t?(e=>{const t=dS(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(r):r;return n.map(((r,n)=>{let a;switch(r.type){case"download":a=t?(s=r.args,e.jsxs(sR,{children:[e.jsx(lR,{weight:"semibold",children:s&&s.children||"Download the app"}),e.jsxs(cR,{children:[e.jsx(dR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(dR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e.jsx(aR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const i=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;a=e.jsx(aR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":i}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var s;if(a)return e.jsx(oR,{$mobile:t,children:a},`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,i=n.filter((e=>!!e.uncollapsible)),o=n.filter((e=>!e.uncollapsible));return r?e.jsx(e.Fragment,{children:o.length>0&&e.jsx(iR,{children:a(r,o)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(nR,{children:a(!1,i)}),t.desktop.length>0&&e.jsx(rR,{children:a(r,t.desktop)})]})}return e.jsx(e.Fragment,{})};var fR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(fR||(fR={}));const hR=q.default.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Qs["spacing-8"]} 0;

    background: ${qs.bg};
    border-radius: ${Js.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${qs.Primitive["neutral-50"]} r g b / 25%);
`,pR=q.default.ul`
    display: none;
    list-style: none;

    ${tl.MaxWidth.lg} {
        border-left: ${Zs["width-040"]} solid ${qs["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,gR=q.default(exports.Typography.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${qs.text};

    margin: 0 ${Qs["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Zs.solid} transparent;
    border-width: ${Qs["spacing-12"]} ${Qs["spacing-8"]};

    border-radius: ${Js.md};

    ${ol(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${qs["bg-hover"]};
        color: ${qs.text};
    }

    ${tl.MaxWidth.lg} {
        ${Xs["body-md-regular"]}
    }
`,mR=q.default.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,bR=({items:t,mobile:r=!1,onItemClick:n})=>{const i=e=>t=>{t.stopPropagation(),n(t,e)},o=(r=!1)=>t.map(((t,n)=>{const{children:o,options:a}=t,s=G(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e.jsx(mR,{children:e.jsx(gR,Object.assign({"data-testid":l},s,{onClick:i(t)},a,{children:o}))},n)}));if(t&&t.length>0){const t=r?pR:hR;return e.jsx(t,{children:o(r)})}return e.jsx(e.Fragment,{})},vR=q.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${tl.MaxWidth.lg} {
        display: none;
    }
`,yR=q.default.ul`
    display: none;
    list-style: none;

    ${tl.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,xR=q.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${tl.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,wR=q.default(exports.Typography.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${qs.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?qs["text-selected-hover"]:qs["text-hover"]};
    }

    ${tl.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,$R=q.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,CR=q.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${qs["border-selected"]};

    :hover {
        ${e=>e.$selected&&qs["border-selected-hover"]};
    }

    ${tl.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,SR=q.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,jR=q.default(il)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,kR=q.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${qs.icon};
    :hover {
        ${e=>e.$selected?qs["icon-selected-hover"]:qs["icon-hover"]};
    }
`,DR=({items:r,selectedId:n,mobile:i=!1,hideNavBranding:o,onItemClick:a})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{d(!1)},h=(e,t)=>r=>{r.stopPropagation(),l(t),d(!0),a(r,e)},p=(e,t)=>{e.stopPropagation(),a(e,t),d(!1)},g=()=>r.map(((t,r)=>{if("component"===t.itemType){const n=t&&t.children||null;return e.jsx("li",{children:n},r)}{const a=(e=>{if(e.id===n)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===n));return!1})(t),{children:l,options:d}=t,u=G(t,["children","options"]),f=a?i?"bold":"semibold":"regular",g=i?`link__mobile-${r+1}`:`link__${r+1}`,m=s>=0&&s===r&&c;return e.jsxs(xR,{$hiddenBranding:o,children:[e.jsxs(wR,Object.assign({"data-testid":g,weight:f,$selected:a},u,{onClick:h(t,r)},d,{children:[e.jsx($R,{children:l}),a&&e.jsx(CR,{"data-testid":`${g}-indicator`,$selected:a}),i&&t.subMenu&&e.jsx(SR,{children:e.jsx(jR,{"data-testid":`${g}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e.jsx(kR,{$selected:a})})})]})),m&&t.subMenu&&e.jsx(bR,{items:t.subMenu,mobile:i,onItemClick:p})]},r)}}));return r&&r.length>0?i?e.jsx(yR,{ref:u,children:g()}):e.jsx(vR,{ref:u,$alignLeft:o,children:g()}):e.jsx(e.Fragment,{})},TR={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},ER={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},OR={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},FR={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},IR=t.forwardRef(((r,n)=>{var{items:o,className:a,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:p=[],actionButtons:g,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=r,w=G(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,C]=t.useState(!1),[S,j]=t.useState(!1),k="stretch"===x,D=t.useRef(null),T=i.useTheme(),E=(e=>{switch(e){case"bookingsg":return ER;case"mylegacy":return FR;case"ccube":return OR;default:return TR}})(null==T?void 0:T.resourceScheme),O=el["lg-max"]({theme:T}),F=(null==u?void 0:u.primary)||E.primary,I=null==u?void 0:u.secondary;t.useImperativeHandle(n,(()=>Object.assign(D.current,{dismissDrawer:()=>{_()}})),[$]),t.useEffect((()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)})),[]);const _=()=>{C(!1),setTimeout((()=>{j(!1)}),550)},M=e=>$&&-1===p.indexOf(e),A=()=>{window.innerWidth<=O&&$&&_()},B=(e,t)=>{v&&(e.preventDefault(),v(t)),M("brand-click")&&_()},R=(e,t)=>{fR.isNavItemCommon(t)&&t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),fR.isNavItemLink(t)&&!t.subMenu&&M("item-click")&&_()},z=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?b&&(e.preventDefault(),b(t)):t.args.onClick(e),M("item-click")&&_()},P=()=>{C(!0),j(!0)},L=()=>{M("close-button-click")&&_()},N=()=>{const t=o.mobile||o.desktop;return t&&t.length>0||g&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(g)?e.jsx(WB,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1,children:e.jsx(VB,{})}):null};return e.jsxs(LB,{ref:D,$fixed:d,className:a,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper",children:[y&&e.jsx(BB,{}),e.jsxs(CM.Content,{stretch:k,children:[e.jsxs(NB,{$compress:c,children:[!h&&e.jsxs(YB,{$compress:c,"data-id":"brand-container",children:[F&&e.jsx(qB,{resources:F,onClick:B,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),I&&e.jsxs(e.Fragment,{children:[e.jsx(UB,{$compress:c}),e.jsx(qB,{resources:I,onClick:B,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&e.jsxs(HB,{$hideNavBranding:h,children:[e.jsx(DR,{items:o.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(uR,{actionButtons:g,onActionButtonClick:z}),N()]})]}),!f&&e.jsx(dp,{show:S,enableOverlayClick:!0,onOverlayClick:L,children:e.jsxs(tR,{show:$,resources:{primary:F,secondary:I},onClose:L,onBrandClick:B,actionButtons:g,hideNavBranding:h,children:[e.jsx(DR,{items:o.mobile||o.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(uR,{actionButtons:g,onActionButtonClick:z,mobile:!0})]})})]})]})})),_R=PB,MR=i.css`
    color: ${qs["hyperlink-inverse"]};

    svg {
        color: ${qs["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${qs["hyperlink-inverse"]};
        svg {
            color: ${qs["icon-primary-inverse"]};
        }
    }
`,AR=q.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Gs["duration-800"]} ${Gs["ease-default"]};
    background: ${qs["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,BR=q.default(CM.Content)`
    display: flex;
`,RR=q.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,zR=q.default.div`
    display: inline-block;
    width: 100%;

    ${Xs["body-baseline-regular"]}
    color: ${qs["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${Xs["body-baseline-semibold"]}
        color: ${qs["text-inverse"]};
    }

    a {
        ${Xs["body-baseline-regular"]}
        ${MR}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,PR=q.default(exports.Typography.LinkBL)`
    position: relative;

    ${MR}
`,LR=q.default(il)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,NR=q.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${qs["icon-inverse"]};
`,HR=q.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${qs["hyperlink-inverse"]};
    ${Xs["body-md-semibold"]};

    cursor: pointer;
`,WR=q.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,VR=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:a=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:f}=r,h=G(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const p=h["data-testid"],[g,m]=t.useState(i),{height:b=0,ref:v}=Xe();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),o&&s&&s()},x=e=>{(null==f?void 0:f.onClick)&&(e.stopPropagation(),f.onClick(e))};if(!g)return null;return e.jsxs(AR,Object.assign({ref:c,$sticky:a,$clickable:!!u,onClick:u},h,{children:[e.jsxs(BR,{id:YR("container",l),children:[e.jsxs(RR,{children:[e.jsx(zR,{"data-testid":YR("text-content",p),$maxCollapsedHeight:d&&b>d?d:void 0,children:e.jsx("div",{ref:v,children:n})}),f?e.jsx(HR,Object.assign({id:YR("action-button",l),"data-testid":YR("action-button",p),type:"button"},f,{onClick:x,children:f.children})):null]}),o&&e.jsx(LR,{onClick:y,id:YR("dismiss-button",l),"data-testid":YR("dismiss-button",p),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e.jsx(NR,{"aria-hidden":!0})})]}),u&&e.jsx(WR,{"aria-label":"Clickable banner",type:"button"})]}))},YR=(e,t="wrapper")=>`${t}-${e}`,UR=U.default.forwardRef(((t,r)=>e.jsx(VR,Object.assign({},t,{forwardedRef:r}))));UR.displayName="NotificationBanner";const KR=Object.assign(UR,{Link:PR}),{entries:qR,setPrototypeOf:XR,isFrozen:GR,getPrototypeOf:ZR,getOwnPropertyDescriptor:QR}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:JR,seal:ez,create:tz}=Object,{apply:rz,construct:nz}="undefined"!=typeof Reflect&&Reflect;JR||(JR=function(e){return e}),ez||(ez=function(e){return e}),rz||(rz=function(e,t,r){return e.apply(t,r)}),nz||(nz=function(e,t){return new e(...t)});const iz=yz(Array.prototype.forEach),oz=yz(Array.prototype.lastIndexOf),az=yz(Array.prototype.pop),sz=yz(Array.prototype.push),lz=yz(Array.prototype.splice),cz=yz(String.prototype.toLowerCase),dz=yz(String.prototype.toString),uz=yz(String.prototype.match),fz=yz(String.prototype.replace),hz=yz(String.prototype.indexOf),pz=yz(String.prototype.trim),gz=yz(Object.prototype.hasOwnProperty),mz=yz(RegExp.prototype.test),bz=(vz=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return nz(vz,t)});var vz;function yz(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return rz(e,t,n)}}function xz(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:cz;XR&&XR(e,null);let n=t.length;for(;n--;){let i=t[n];if("string"==typeof i){const e=r(i);e!==i&&(GR(t)||(t[n]=e),i=e)}e[i]=!0}return e}function wz(e){for(let t=0;t<e.length;t++){gz(e,t)||(e[t]=null)}return e}function $z(e){const t=tz(null);for(const[r,n]of qR(e)){gz(e,r)&&(Array.isArray(n)?t[r]=wz(n):n&&"object"==typeof n&&n.constructor===Object?t[r]=$z(n):t[r]=n)}return t}function Cz(e,t){for(;null!==e;){const r=QR(e,t);if(r){if(r.get)return yz(r.get);if("function"==typeof r.value)return yz(r.value)}e=ZR(e)}return function(){return null}}const Sz=JR(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),jz=JR(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),kz=JR(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Dz=JR(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Tz=JR(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ez=JR(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Oz=JR(["#text"]),Fz=JR(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Iz=JR(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_z=JR(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Mz=JR(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Az=ez(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Bz=ez(/<%[\w\W]*|[\w\W]*%>/gm),Rz=ez(/\$\{[\w\W]*/gm),zz=ez(/^data-[\-\w.\u00B7-\uFFFF]+$/),Pz=ez(/^aria-[\-\w]+$/),Lz=ez(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Nz=ez(/^(?:\w+script|data):/i),Hz=ez(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wz=ez(/^html$/i),Vz=ez(/^[a-z][.\w]*(-[.\w]+)+$/i);var Yz=Object.freeze({__proto__:null,ARIA_ATTR:Pz,ATTR_WHITESPACE:Hz,CUSTOM_ELEMENT:Vz,DATA_ATTR:zz,DOCTYPE_NAME:Wz,ERB_EXPR:Bz,IS_ALLOWED_URI:Lz,IS_SCRIPT_OR_DATA:Nz,MUSTACHE_EXPR:Az,TMPLIT_EXPR:Rz});const Uz=1,Kz=3,qz=7,Xz=8,Gz=9,Zz=function(){return"undefined"==typeof window?null:window};var Qz=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zz();const r=t=>e(t);if(r.version="3.2.5",r.removed=[],!t||!t.document||t.document.nodeType!==Gz||!t.Element)return r.isSupported=!1,r;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:p}=t,g=c.prototype,m=Cz(g,"cloneNode"),b=Cz(g,"remove"),v=Cz(g,"nextSibling"),y=Cz(g,"childNodes"),x=Cz(g,"parentNode");if("function"==typeof s){const e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:j,getElementsByTagName:k}=n,{importNode:D}=i;let T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof qR&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:E,ERB_EXPR:O,TMPLIT_EXPR:F,DATA_ATTR:I,ARIA_ATTR:_,IS_SCRIPT_OR_DATA:M,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:B}=Yz;let{IS_ALLOWED_URI:R}=Yz,z=null;const P=xz({},[...Sz,...jz,...kz,...Tz,...Oz]);let L=null;const N=xz({},[...Fz,...Iz,..._z,...Mz]);let H=Object.seal(tz(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,Y=!0,U=!0,K=!1,q=!0,X=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,re=!1,ne=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const ce=xz({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=xz({},["audio","video","img","source","image","track"]);let fe=null;const he=xz({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pe="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=xz({},[pe,ge,me],dz);let we=xz({},["mi","mo","mn","ms","mtext"]),$e=xz({},["annotation-xml"]);const Ce=xz({},["title","style","font","a","script"]);let Se=null;const je=["application/xhtml+xml","text/html"];let ke=null,De=null;const Te=n.createElement("form"),Ee=function(e){return e instanceof RegExp||e instanceof Function},Oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!De||De!==e){if(e&&"object"==typeof e||(e={}),e=$z(e),Se=-1===je.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ke="application/xhtml+xml"===Se?dz:cz,z=gz(e,"ALLOWED_TAGS")?xz({},e.ALLOWED_TAGS,ke):P,L=gz(e,"ALLOWED_ATTR")?xz({},e.ALLOWED_ATTR,ke):N,ye=gz(e,"ALLOWED_NAMESPACES")?xz({},e.ALLOWED_NAMESPACES,dz):xe,fe=gz(e,"ADD_URI_SAFE_ATTR")?xz($z(he),e.ADD_URI_SAFE_ATTR,ke):he,de=gz(e,"ADD_DATA_URI_TAGS")?xz($z(ue),e.ADD_DATA_URI_TAGS,ke):ue,le=gz(e,"FORBID_CONTENTS")?xz({},e.FORBID_CONTENTS,ke):ce,W=gz(e,"FORBID_TAGS")?xz({},e.FORBID_TAGS,ke):{},V=gz(e,"FORBID_ATTR")?xz({},e.FORBID_ATTR,ke):{},se=!!gz(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,q=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,ne=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||Lz,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ee(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ee(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(U=!1),te&&(ee=!0),se&&(z=xz({},Oz),L=[],!0===se.html&&(xz(z,Sz),xz(L,Fz)),!0===se.svg&&(xz(z,jz),xz(L,Iz),xz(L,Mz)),!0===se.svgFilters&&(xz(z,kz),xz(L,Iz),xz(L,Mz)),!0===se.mathMl&&(xz(z,Tz),xz(L,_z),xz(L,Mz))),e.ADD_TAGS&&(z===P&&(z=$z(z)),xz(z,e.ADD_TAGS,ke)),e.ADD_ATTR&&(L===N&&(L=$z(L)),xz(L,e.ADD_ATTR,ke)),e.ADD_URI_SAFE_ATTR&&xz(fe,e.ADD_URI_SAFE_ATTR,ke),e.FORBID_CONTENTS&&(le===ce&&(le=$z(le)),xz(le,e.FORBID_CONTENTS,ke)),oe&&(z["#text"]=!0),Z&&xz(z,["html","head","body"]),z.table&&(xz(z,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw bz('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw bz('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(p,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));JR&&JR(e),De=e}},Fe=xz({},[...jz,...kz,...Dz]),Ie=xz({},[...Tz,...Ez]),_e=function(e){sz(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},Me=function(e,t){try{sz(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){sz(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{_e(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ae=function(e){let t=null,r=null;if(J)e="<remove></remove>"+e;else{const t=uz(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new h).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&r&&o.insertBefore(n.createTextNode(r),o.childNodes[0]||null),be===me?k.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},Be=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Re=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,n){iz(e,(e=>{e.call(r,t,n,De)}))}const Le=function(e){let t=null;if(Pe(T.beforeSanitizeElements,e,null),Re(e))return _e(e),!0;const n=ke(e.nodeName);if(Pe(T.uponSanitizeElement,e,{tagName:n,allowedTags:z}),e.hasChildNodes()&&!ze(e.firstElementChild)&&mz(/<[/\w!]/g,e.innerHTML)&&mz(/<[/\w!]/g,e.textContent))return _e(e),!0;if(e.nodeType===qz)return _e(e),!0;if(G&&e.nodeType===Xz&&mz(/<[/\w]/g,e.data))return _e(e),!0;if(!z[n]||W[n]){if(!W[n]&&He(n)){if(H.tagNameCheck instanceof RegExp&&mz(H.tagNameCheck,n))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(n))return!1}if(oe&&!le[n]){const t=x(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let n=r.length-1;n>=0;--n){const i=m(r[n],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return _e(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const r=cz(e.tagName),n=cz(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===ge?t.namespaceURI===me?"svg"===r:t.namespaceURI===pe?"svg"===r&&("annotation-xml"===n||we[n]):Boolean(Fe[r]):e.namespaceURI===pe?t.namespaceURI===me?"math"===r:t.namespaceURI===ge?"math"===r&&$e[n]:Boolean(Ie[r]):e.namespaceURI===me?!(t.namespaceURI===ge&&!$e[n])&&!(t.namespaceURI===pe&&!we[n])&&!Ie[r]&&(Ce[r]||!Fe[r]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(_e(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!mz(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&e.nodeType===Kz&&(t=e.textContent,iz([E,O,F],(e=>{t=fz(t,e," ")})),e.textContent!==t&&(sz(r.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(T.afterSanitizeElements,e,null),!1):(_e(e),!0)},Ne=function(e,t,r){if(ne&&("id"===t||"name"===t)&&(r in n||r in Te))return!1;if(U&&!V[t]&&mz(I,t));else if(Y&&mz(_,t));else if(!L[t]||V[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&mz(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&mz(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&mz(H.tagNameCheck,r)||H.tagNameCheck instanceof Function&&H.tagNameCheck(r))))return!1}else if(fe[t]);else if(mz(R,fz(r,A,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==hz(r,"data:")||!de[e]){if(K&&!mz(M,fz(r,A,"")));else if(r)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&uz(e,B)},We=function(e){Pe(T.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Re(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,c=ke(a);let d="value"===a?l:pz(l);if(n.attrName=c,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,Pe(T.uponSanitizeAttribute,e,n),d=n.attrValue,!ie||"id"!==c&&"name"!==c||(Me(a,e),d="user-content-"+d),G&&mz(/((--!?|])>)|<\/(style|title)/i,d)){Me(a,e);continue}if(n.forceKeepAttr)continue;if(Me(a,e),!n.keepAttr)continue;if(!q&&mz(/\/>/i,d)){Me(a,e);continue}X&&iz([E,O,F],(e=>{d=fz(d,e," ")}));const u=ke(e.nodeName);if(Ne(u,c,d)){if(w&&"object"==typeof p&&"function"==typeof p.getAttributeType)if(s);else switch(p.getAttributeType(u,c)){case"TrustedHTML":d=w.createHTML(d);break;case"TrustedScriptURL":d=w.createScriptURL(d)}try{s?e.setAttributeNS(s,a,d):e.setAttribute(a,d),Re(e)?_e(e):az(r.removed)}catch(e){}}}Pe(T.afterSanitizeAttributes,e,null)},Ve=function e(t){let r=null;const n=Be(t);for(Pe(T.beforeSanitizeShadowDOM,t,null);r=n.nextNode();)Pe(T.uponSanitizeShadowNode,r,null),Le(r),We(r),r.content instanceof a&&e(r.content);Pe(T.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,c=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw bz("toString is not a function");if("string"!=typeof(e=e.toString()))throw bz("dirty is not a string, aborting")}if(!r.isSupported)return e;if(Q||Oe(t),r.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=ke(e.nodeName);if(!z[t]||W[t])throw bz("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)n=Ae("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,!0),o.nodeType===Uz&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else{if(!ee&&!X&&!Z&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(n=Ae(e),!n)return ee?null:re?$:""}n&&J&&_e(n.firstChild);const d=Be(ae?e:n);for(;s=d.nextNode();)Le(s),We(s),s.content instanceof a&&Ve(s.content);if(ae)return e;if(ee){if(te)for(c=j.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return(L.shadowroot||L.shadowrootmode)&&(c=D.call(i,c,!0)),c}let u=Z?n.outerHTML:n.innerHTML;return Z&&z["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&mz(Wz,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),X&&iz([E,O,F],(e=>{u=fz(u,e," ")})),w&&re?w.createHTML(u):u},r.setConfig=function(){Oe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},r.clearConfig=function(){De=null,Q=!1},r.isValidAttribute=function(e,t,r){De||Oe({});const n=ke(e),i=ke(t);return Ne(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&sz(T[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=oz(T[e],t);return-1===r?void 0:lz(T[e],r,1)[0]}return az(T[e])},r.removeHooks=function(e){T[e]=[]},r.removeAllHooks=function(){T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const Jz=q.default.div`
    display: flex;
    flex-direction: column;
`,eP=q.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${Qs["spacing-8"]};
`,tP=q.default(zx)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${tl.MaxWidth.xs} {
            padding: 0 ${Qs["spacing-8"]};
        }
    }
`,rP=q.default(Wl.Small)`
    margin: ${Qs["spacing-32"]} 0;
`,nP=q.default.nav`
    display: flex;
`,iP=q.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${tl.MaxWidth.lg} {
        align-self: center;
    }
`,oP=q.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,aP=q.default(il)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Js.sm};
    color: ${qs["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${qs["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${qs["bg-hover"]};
    }
`,sP=q.default(il)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Js.sm};
    color: ${qs["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${qs["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${qs["bg-hover"]};
    }

    ${e=>"left"===e.$position?i.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:i.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${tl.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,lP=q.default.button`
    background: ${e=>e.$selected?qs["bg-primary"]:qs.bg};
    border: ${Zs["width-010"]} ${Zs.solid}
        ${e=>i.css`
                ${e.$selected?qs["bg-primary"]:qs.border}
            `};
    color: ${e=>e.$selected?qs["text-inverse"]:qs.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${Js.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?i.css`
                  ${Xs["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${qs["bg-selected-strongest-hover"]};
                      background-color: ${qs["bg-selected-strongest-hover"]};
                      color: ${qs["text-inverse"]};
                  }
              `:i.css`
                  ${Xs["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${qs["bg-hover"]};
                      background-color: ${qs["bg-hover"]};
                      color: ${qs["text-hover"]};
                      ${Xs["body-baseline-semibold"]};
                  }
              `}
`;q.default(il)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${qs["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${Js.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${qs["icon-hover"]};
        }
    }
`;const cP=q.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Js.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,dP=q.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${qs.text};

    display: flex;
    justify-content: center;
`,uP=q.default(exports.Typography.BodyBL)`
    white-space: nowrap;
`,fP=q.default(exports.Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,hP=q.default(zx)`
    ${Xs["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${Js.sm};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Xs["body-xs-regular"]}
        }
    }
`,pP=q.default.div`
    ${Xs["body-xs-regular"]}
    background-color: ${qs["bg-hover"]};
    border: none;
    border-radius: ${Js.sm};
    color: ${qs["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,gP=q.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,mP=U.default.forwardRef((({id:r,"data-testid":n,className:o,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:c=bP,showFirstAndLastNav:d,showPageSizeChanger:u=!1,onPageChange:f,onPageSizeChange:g},m)=>{const b=i.useTheme(),v=el["sm-max"]({theme:b}),y=vc.useMediaQuery({maxWidth:v}),[x,w]=t.useState(!1),[$,C]=t.useState(!1),[S,j]=t.useState(""),[k,D]=t.useState(c[0]),[T,E]=t.useState(!y&&u&&k?k.value:a),O=Math.ceil(s/T),F=1===l,I=l===O,_=l>1?()=>U(1):void 0,M=l<O?()=>U(O):void 0,A=l>1?()=>U(l-1):void 0,B=l<O?()=>U(parseInt(l.toString())+1):void 0,R=e=>e?()=>J():()=>Z(),W=e=>e?()=>ee():()=>Q();t.useEffect((()=>{l&&V(l)}),[l]),t.useEffect((()=>{E(a),D(c.find((e=>e.value===a)))}),[a]);const V=e=>{j(e.toString())},Y=()=>{w(!1),C(!1)},U=e=>{f&&(f(e),V(e))},K=()=>{const e=Math.min(O,l+5);U(e),V(e),w(!0),C(!1)},q=()=>{const e=Math.max(1,l-5);U(e),V(e),w(!1),C(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(O,e)))}else j(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),S&&(null==f||f(parseInt(S)))},Z=()=>{w(!0)},Q=()=>{w(!1)},J=()=>{C(!0)},ee=()=>{C(!1)},te=(t,r,n)=>e.jsxs(cP,{children:[e.jsx(aP,{focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:R(t),onMouseOut:W(t),onFocus:R(t),onBlur:W(t),onClick:t?q:K,children:t&&$?e.jsx(z.Chevron2LeftIcon,{"aria-hidden":!0}):r&&x?e.jsx(P.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(H.EllipsisHorizontalIcon,{"aria-hidden":!0})}),t&&$&&e.jsx(pP,{children:"Previous 5 pages"}),r&&x&&e.jsx(pP,{children:"Next 5 pages"})]},n);return e.jsxs(nP,{className:o,ref:m,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e.jsx(iP,{children:e.jsxs(oP,{children:[d&&e.jsx(sP,{onClick:_,disabled:F,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e.jsx(L.ChevronLineLeftIcon,{"aria-hidden":!0})}),e.jsx(sP,{onClick:A,disabled:F,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e.jsx(p.ChevronLeftIcon,{"aria-hidden":!0})}),y?e.jsxs(dP,{children:[e.jsx("form",{onSubmit:G,children:e.jsx(hP,{value:S,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e.jsx(fP,{children:"/"}),e.jsx(uP,{children:O})]}):[...Array(O)].map(((t,r)=>{const n=r+1,i=O-5,o=l===n;if(O<=7)return e.jsx(lP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===O-1-1;return a||s?te(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>O-1?e.jsx(lP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n):null})),e.jsx(sP,{onClick:B,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})}),d&&e.jsx(sP,{onClick:M,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e.jsx(N.ChevronLineRightIcon,{"aria-hidden":!0})})]})}),u&&!y&&e.jsx(gP,{children:e.jsx(vF,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);E(t);g&&g(l>=r?r:l,t)}})})]})})),bP=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],vP=q.default.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Xs["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=qs["text-inverse"],e.$color){case"grey":t=qs["bg-inverse-subtler"];break;case"green":t=qs["bg-success-strong"];break;case"yellow":t=qs["bg-warning-strong"];break;case"red":t=qs["bg-error-strong"];break;case"blue":t=qs["bg-info-strong"];break;default:t=qs["bg-inverse"]}else switch(e.$color){case"grey":t=qs["bg-stronger"],r=qs["border-strong"],n=qs["text-subtler"];break;case"green":t=qs["bg-success"],r=qs["border-success"],n=qs["text-success"];break;case"yellow":t=qs["bg-warning"],r=qs["border-warning"],n=qs["text-warning"];break;case"red":t=qs["bg-error"],r=qs["border-error"],n=qs["text-error"];break;case"blue":t=qs["bg-info"],r=qs["border-info"],n=qs["text-info"];break;default:t=qs.bg,r=qs.border,n=qs.text}return i.css`
            background: ${t};
            border: ${Zs["width-010"]} ${Zs.solid} ${r};
            color: ${n};
        `}}
`,yP=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,xP=t=>{var{type:r,colorType:n="black",children:i,icon:o}=t,a=G(t,["type","colorType","children","icon"]);return e.jsxs(vP,Object.assign({$type:r,$color:n},a,{children:[o,e.jsx(yP,{children:i})]}))},wP=(e,t,r)=>t?ss(r,t)||ss(e,t):r||e,$P=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)};var CP;exports.V2_ThemeContextKeys=void 0,(CP=exports.V2_ThemeContextKeys||(exports.V2_ThemeContextKeys={})).colorScheme="colorScheme",CP.layout="layout",CP.textStyleScheme="textStyleScheme",CP.designTokenScheme="designTokenScheme",CP.resourceScheme="resourceScheme";const SP={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},jP=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=$P(SP,null==n?void 0:n[exports.V2_ThemeContextKeys.colorScheme]);return n.options&&n.options.color?wP(i,e,n.options.color):wP(i,e)},kP={Brand:{1:jP("Brand.1"),2:jP("Brand.2"),3:jP("Brand.3"),4:jP("Brand.4"),5:jP("Brand.5"),6:jP("Brand.6")},Primary:jP("Primary"),PrimaryDark:jP("PrimaryDark"),Secondary:jP("Secondary"),Accent:{Light:{1:jP("Accent.Light.1"),2:jP("Accent.Light.2"),3:jP("Accent.Light.3"),4:jP("Accent.Light.4"),5:jP("Accent.Light.5"),6:jP("Accent.Light.6")},Dark:{1:jP("Accent.Dark.1"),2:jP("Accent.Dark.2"),3:jP("Accent.Dark.3")}},Neutral:{1:jP("Neutral.1"),2:jP("Neutral.2"),3:jP("Neutral.3"),4:jP("Neutral.4"),5:jP("Neutral.5"),6:jP("Neutral.6"),7:jP("Neutral.7"),8:jP("Neutral.8")},Validation:{Green:{Text:jP("Validation.Green.Text"),Icon:jP("Validation.Green.Icon"),Border:jP("Validation.Green.Border"),Background:jP("Validation.Green.Background")},Orange:{Text:jP("Validation.Orange.Text"),Icon:jP("Validation.Orange.Icon"),Border:jP("Validation.Orange.Border"),Background:jP("Validation.Orange.Background"),Badge:jP("Validation.Orange.Badge")},Red:{Text:jP("Validation.Red.Text"),Icon:jP("Validation.Red.Icon"),Border:jP("Validation.Red.Border"),Background:jP("Validation.Red.Background")},Blue:{Text:jP("Validation.Blue.Text"),Icon:jP("Validation.Blue.Icon"),Border:jP("Validation.Blue.Border"),Background:jP("Validation.Blue.Background")}},Shadow:{Accent:jP("Shadow.Accent"),Red:jP("Shadow.Red"),Elevation:jP("Shadow.Elevation")}},DP={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},TP={D1:{fontFamily:DP.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:DP.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:DP.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:DP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:DP.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:DP.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:DP.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:DP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:DP.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:DP.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:DP.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:DP.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:DP.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:DP.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},EP={D1:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:DP.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:DP.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:DP.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:DP.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:DP.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},OP={collections:{base:TP,oneservice:{D1:{fontFamily:DP.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:DP.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:DP.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:DP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:DP.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:DP.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:DP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:DP.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:DP.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:DP.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:DP.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:DP.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:DP.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:DP.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:EP},defaultValue:"base"},FP=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=$P(OP,null==n?void 0:n[exports.V2_ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?wP(i,e,n.options.textStyle):wP(i,e)},IP={D1:{fontFamily:FP("D1.fontFamily"),fontSize:FP("D1.fontSize"),fontWeight:FP("D1.fontWeight"),lineHeight:FP("D1.lineHeight"),letterSpacing:FP("D1.letterSpacing"),fontVariant:FP("D1.fontVariant")},D2:{fontFamily:FP("D2.fontFamily"),fontSize:FP("D2.fontSize"),fontWeight:FP("D2.fontWeight"),lineHeight:FP("D2.lineHeight"),letterSpacing:FP("D2.letterSpacing"),fontVariant:FP("D2.fontVariant")},D3:{fontFamily:FP("D3.fontFamily"),fontSize:FP("D3.fontSize"),fontWeight:FP("D3.fontWeight"),lineHeight:FP("D3.lineHeight"),letterSpacing:FP("D3.letterSpacing"),fontVariant:FP("D3.fontVariant")},D4:{fontFamily:FP("D4.fontFamily"),fontSize:FP("D4.fontSize"),fontWeight:FP("D4.fontWeight"),lineHeight:FP("D4.lineHeight"),letterSpacing:FP("D4.letterSpacing"),fontVariant:FP("D4.fontVariant")},DBody:{fontFamily:FP("DBody.fontFamily"),fontSize:FP("DBody.fontSize"),fontWeight:FP("DBody.fontWeight"),lineHeight:FP("DBody.lineHeight"),letterSpacing:FP("DBody.letterSpacing"),fontVariant:FP("DBody.fontVariant")},H1:{fontFamily:FP("H1.fontFamily"),fontSize:FP("H1.fontSize"),fontWeight:FP("H1.fontWeight"),lineHeight:FP("H1.lineHeight"),letterSpacing:FP("H1.letterSpacing"),fontVariant:FP("H1.fontVariant")},H2:{fontFamily:FP("H2.fontFamily"),fontSize:FP("H2.fontSize"),fontWeight:FP("H2.fontWeight"),lineHeight:FP("H2.lineHeight"),letterSpacing:FP("H2.letterSpacing"),fontVariant:FP("H2.fontVariant")},H3:{fontFamily:FP("H3.fontFamily"),fontSize:FP("H3.fontSize"),fontWeight:FP("H3.fontWeight"),lineHeight:FP("H3.lineHeight"),letterSpacing:FP("H3.letterSpacing"),fontVariant:FP("H3.fontVariant")},H4:{fontFamily:FP("H4.fontFamily"),fontSize:FP("H4.fontSize"),fontWeight:FP("H4.fontWeight"),lineHeight:FP("H4.lineHeight"),letterSpacing:FP("H4.letterSpacing"),fontVariant:FP("H4.fontVariant")},H5:{fontFamily:FP("H5.fontFamily"),fontSize:FP("H5.fontSize"),fontWeight:FP("H5.fontWeight"),lineHeight:FP("H5.lineHeight"),letterSpacing:FP("H5.letterSpacing"),fontVariant:FP("H5.fontVariant")},H6:{fontFamily:FP("H6.fontFamily"),fontSize:FP("H6.fontSize"),fontWeight:FP("H6.fontWeight"),lineHeight:FP("H6.lineHeight"),letterSpacing:FP("H6.letterSpacing"),fontVariant:FP("H6.fontVariant")},Body:{fontFamily:FP("Body.fontFamily"),fontSize:FP("Body.fontSize"),fontWeight:FP("Body.fontWeight"),lineHeight:FP("Body.lineHeight"),letterSpacing:FP("Body.letterSpacing"),fontVariant:FP("Body.fontVariant")},BodySmall:{fontFamily:FP("BodySmall.fontFamily"),fontSize:FP("BodySmall.fontSize"),fontWeight:FP("BodySmall.fontWeight"),lineHeight:FP("BodySmall.lineHeight"),letterSpacing:FP("BodySmall.letterSpacing"),fontVariant:FP("BodySmall.fontVariant")},XSmall:{fontFamily:FP("XSmall.fontFamily"),fontSize:FP("XSmall.fontSize"),fontWeight:FP("XSmall.fontWeight"),lineHeight:FP("XSmall.lineHeight"),letterSpacing:FP("XSmall.letterSpacing"),fontVariant:FP("XSmall.fontVariant")}},_P=[DP.OpenSans,DP.PlusJakartaSans],MP=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},AP=(e,t)=>r=>{var n,o,a,s,l;const c=null===(o=(n=IP[e]).fontFamily)||void 0===o?void 0:o.call(n,r),d=null===(s=(a=IP[e]).fontWeight)||void 0===s?void 0:s.call(a,r),u=_P.find((e=>Object.values(e).includes(c)));return u?i.css`
                font-family: ${MP(u,t)||MP(u,d)||c};
                font-weight: normal !important;
            `:i.css`
            font-family: ${c};
            font-weight: ${null!==(l=BP(t)||d)&&void 0!==l?l:"normal"};
        `},BP=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},RP=e=>{if(e)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zP={getFontFamily:AP,getTextStyle:(e,t,r=!1)=>n=>{var o,a,s;const l=IP[e],c=(null===(o=l.fontSize)||void 0===o?void 0:o.call(l,n))||1;return i.css`
            ${AP(e,t)}
            font-size: ${c}rem !important;
            line-height: ${l.lineHeight}rem !important;
            letter-spacing: ${(null===(a=l.letterSpacing)||void 0===a?void 0:a.call(l,n))||0}rem !important;
            font-variant: ${(null===(s=l.fontVariant)||void 0===s?void 0:s.call(l,n))||"normal"};
            ${(()=>{const e=r?1.05:0;return i.css`
                margin-bottom: ${c*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?i.css`
            display: block;
            ${RP(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${RP(r)}
        `};var PP;exports.V2_Text=void 0,(PP=exports.V2_Text||(exports.V2_Text={})).D1=q.default.h1`
        ${e=>i.css`
                ${zP.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.D2=q.default.h1`
        ${e=>i.css`
                ${zP.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.D3=q.default.h1`
        ${e=>i.css`
                ${zP.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.D4=q.default.h1`
        ${e=>i.css`
                ${zP.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.DBody=q.default.h1`
        ${e=>i.css`
                ${zP.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.H1=q.default.h1`
        ${e=>i.css`
                ${zP.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.H2=q.default.h2`
        ${e=>i.css`
                ${zP.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.H3=q.default.h3`
        ${e=>i.css`
                ${zP.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.H4=q.default.h4`
        ${e=>i.css`
                ${zP.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.H5=q.default.h5`
        ${e=>i.css`
                ${zP.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.H6=q.default.h6`
        ${e=>i.css`
                ${zP.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.Body=q.default.p`
        ${e=>i.css`
                ${zP.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.BodySmall=q.default.p`
        ${e=>i.css`
                ${zP.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.XSmall=q.default.span`
        ${e=>i.css`
                ${zP.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${kP.Neutral[1]};
                ${zP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,PP.Hyperlink={Default:e=>HP(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>HP(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const LP=q.default.a`
    ${e=>i.css`
            ${zP.getTextStyle(e.textStyle,e.weight)}
            color: ${kP.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kP.Secondary};

                svg {
                    color: ${kP.Secondary};
                }
            }
        `}
`,NP=q.default(o.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,HP=t=>{var{external:r=!1,children:n}=t,i=G(t,["external","children"]);return e.jsxs(LP,Object.assign({},i,{children:[n,r&&e.jsx(NP,{})]}))},WP={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},VP=q.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${WP.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${WP.Base};
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

	${Jh.MaxWidth.mobileL} {
        display: none;
    }
`,YP=q.default(Sp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,UP=q.default.div`
    position: relative;
    width: fit-content;
`,KP=q.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,qP=q.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,XP=r=>{var{children:n,visible:i,onMobileClose:o}=r,a=G(r,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=vc.useMediaQuery({maxWidth:Zh.mobileL}),f=t.useRef(l);t.useEffect((()=>(g(),window.addEventListener("resize",Vu(h,300)),()=>{window.removeEventListener("resize",Vu(h,300))})),[]);const h=()=>{g()},p=()=>{o&&o()},g=()=>{const e=m();var t;e&&(t=e,f.current=t,c(t))},m=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},b=()=>"string"==typeof n?e.jsx(exports.V2_Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[e.jsx(VP,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},a,{children:e.jsx(mu,{children:b()})})),u&&e.jsx(wp,{show:null!=i&&i,onOverlayClick:p,children:e.jsx(YP,{onClose:p,children:e.jsx(qP,{children:b()})})})]})},GP=q.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${tl.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${tl.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,ZP=q.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,QP=q.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?qs["bg-primary-subtle"]:qs["bg-disabled"])(e)};\n        `}};
`,JP=q.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?qs["text-primary"]:qs["text-disabled"])(e)};`}};
`,eL=q.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${qs.text};
`,tL=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var rL=function(e){return function(t){return null==e?void 0:e[t]}},nL=rL({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),iL=qa,oL=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,aL=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var sL=function(e){return(e=iL(e))&&e.replace(oL,nL).replace(aL,"")},lL=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var cL=function(e){return e.match(lL)||[]},dL=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var uL=function(e){return dL.test(e)},fL="\\ud800-\\udfff",hL="\\u2700-\\u27bf",pL="a-z\\xdf-\\xf6\\xf8-\\xff",gL="A-Z\\xc0-\\xd6\\xd8-\\xde",mL="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bL="["+mL+"]",vL="\\d+",yL="["+hL+"]",xL="["+pL+"]",wL="[^"+fL+mL+vL+hL+pL+gL+"]",$L="(?:\\ud83c[\\udde6-\\uddff]){2}",CL="[\\ud800-\\udbff][\\udc00-\\udfff]",SL="["+gL+"]",jL="(?:"+xL+"|"+wL+")",kL="(?:"+SL+"|"+wL+")",DL="(?:['’](?:d|ll|m|re|s|t|ve))?",TL="(?:['’](?:D|LL|M|RE|S|T|VE))?",EL="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",OL="[\\ufe0e\\ufe0f]?",FL=OL+EL+("(?:\\u200d(?:"+["[^"+fL+"]",$L,CL].join("|")+")"+OL+EL+")*"),IL="(?:"+[yL,$L,CL].join("|")+")"+FL,_L=RegExp([SL+"?"+xL+"+"+DL+"(?="+[bL,SL,"$"].join("|")+")",kL+"+"+TL+"(?="+[bL,SL+jL,"$"].join("|")+")",SL+"?"+jL+"+"+DL,SL+"+"+TL,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vL,IL].join("|"),"g");var ML=cL,AL=uL,BL=qa,RL=function(e){return e.match(_L)||[]};var zL=qO,PL=sL,LL=function(e,t,r){return e=BL(e),void 0===(t=r?void 0:t)?AL(e)?RL(e):ML(e):e.match(t)||[]},NL=RegExp("['’]","g");var HL=Oi(function(e){return function(t){return zL(LL(PL(t).replace(NL,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const WL=q.default.div`
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
`,VL=q.default(u.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?qs["icon-disabled-subtle"](e):qs["icon-subtle"](e)};
    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};
`,YL=q.default(u.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?qs["icon-selected-disabled"](e):qs["icon-selected"](e)};

    transition: ${Gs["duration-150"]} ${Gs["ease-default"]};
`,UL=q.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${VL}, &:hover + ${YL} {
        color: ${e=>!e.disabled&&qs["icon-hover"](e)};
    }
`,KL=q.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,qL=q.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    background-color: ${qs["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,XL=q.default(qL)`
    height: 100vh;
    left: 0;
    top: 0;
    ${tl.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,GL=q.default(qL)`
    display: none;
    visibility: hidden;
    ${tl.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,ZL=q.default(Ti.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${qs["bg-primary-subtlest"]};
    border-top-right-radius: ${Js.md};
    border-bottom-right-radius: ${Js.md};
    border: ${Zs["width-010"]} ${Zs.solid} ${qs.border};

    ${e=>e.$showDrawer?i.css`
                  box-shadow: 0 0 4px
                      rgb(from ${qs.Primitive["neutral-20"]} r g b / 25%);
              `:i.css`
                  border: 0;
                  padding: 0;
              `};
`,QL=q.default.li`
    width: 100%;
`,JL=q.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${Js.md};
    color: ${qs["icon-primary"]};
    transition: ${Gs["duration-250"]} ${Gs["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,eN=q.default(exports.Typography.BodyXS)`
    ${ol(2)}
    margin-top: 0.25rem;
    transition: ${Gs["duration-250"]} ${Gs["ease-default"]};
`,tN=q.default(zf)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${JL} {
            background-color: ${qs["bg-hover"]};
        }

        ${eN} {
            ${Xs["body-xs-semibold"]}
            color: ${qs["text-hover"]};
        }
    }

    ${e=>e.$highlight&&i.css`
            ${JL} {
                background-color: ${qs["bg-hover"]};
            }

            ${eN} {
                ${Xs["body-xs-semibold"]}
                color: ${qs["text-selected"]};
            }
        `}
`,rN=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),nN=q.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,iN=q.default.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${qs.border};
`,oN=q.default(Ti.li)``,aN=q.default(zf)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Js.md};

    ${Xs["body-md-semibold"]}
    color: ${qs.text};

    ${e=>e.$noChildren?i.css`
                  :hover,
                  :focus {
                      background: ${qs["bg-hover"]};
                      color: ${qs["text-hover"]};
                  }
              `:i.css`
                  :hover,
                  :focus {
                      background: ${qs["bg-hover-strong"]};
                  }
              `}
`,sN=q.default(Ti.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,lN=q.default(n.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${qs.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${Gs["duration-150"]} ${Gs["ease-default"]};
`,cN=q.default.span`
    ${ol(2)}
    text-align: left;
`,dN=q.default(Ti.ul)``,uN=q.default.li``,fN=q.default(zf)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Js.md};

    ${Xs["body-md-regular"]}
    color: ${qs.text};
    ${ol(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${qs["bg-hover"]};
        color: ${qs["text-hover"]};
    }
`,hN=Object.assign((r=>{var{fixed:n=!0,children:i}=r,o=G(r,["fixed","children"]);const a=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,f]=t.useState(void 0),[h,p]=t.useState(!1),g=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:f})),[s,c,u,l,d,f]),m=di({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return rd("click",(e=>{a.current&&!a.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{p(!!(null==c?void 0:c.content)||!!(null==s?void 0:s.content))}),[s,c]),e.jsx(rN.Provider,{value:g,children:e.jsxs(KL,Object.assign({$fixed:n},o,{ref:a,onMouseLeave:()=>{l(void 0)},children:[e.jsx(XL,{children:i}),e.jsx(ZL,{style:m,$showDrawer:h,"data-testid":"sidenav-drawer",children:s&&s.content||c&&c.content}),e.jsx(GL,{})]}))})}),{Group:t=>{var{separator:r,children:n}=t,i=G(t,["separator","children"]);return e.jsxs(nN,Object.assign({},i,{children:[n,r&&e.jsx(iN,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=G(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:p}=t.useContext(rN);t.useEffect((()=>{s.selected&&p({itemId:l,content:void 0})}),[s.selected]);return e.jsx(QL,{children:e.jsxs(tN,Object.assign({type:"button",onClick:()=>{h((()=>{if(n&&u)return d||u.itemId})()),f({itemId:l,content:n}),p({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{f({itemId:l,content:n})}},s,{$highlight:!!u&&u.itemId===l||!!c&&c.itemId===l,children:[e.jsx(JL,{children:i}),e.jsx(eN,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:a}=r,s=G(r,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:p,setCurrentItem:g}=t.useContext(rN),m=di({from:{opacity:0},to:{opacity:1}}),b=Xe(),v=b.ref,y=di({height:a&&l?b.height:0});return e.jsxs(oN,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m,children:[e.jsxs(aN,{type:"button",onClick:()=>{a?c(!l):(h({itemId:null==f?void 0:f.itemId,content:void 0}),g(void 0),p(void 0),o&&o(n))},$highlight:d&&l,$noChildren:!a,children:[e.jsx(cN,{children:i}),a&&e.jsx(lN,{"aria-hidden":!0,$expanded:l})]}),e.jsx(sN,{style:y,children:e.jsx(dN,{ref:v,children:a})})]}))},DrawerSubitem:r=>{var{id:n,title:i,onClick:o}=r,a=G(r,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(rN);return e.jsx(uN,Object.assign({},a,{children:e.jsx(fN,{type:"button",onClick:()=>{o&&o(n),l({itemId:null==s?void 0:s.itemId,content:void 0}),c(void 0),d(void 0)},children:i})}))}}),pN=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,gN=q.default.div`
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
    background: ${qs.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${Js.md};
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${pN} 0.3s;
            `}}
`,mN=q.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,bN=q.default(il)`
    padding: 0;
`,vN=q.default(m.CrossIcon)`
    color: ${qs.icon};
    height: 1.25rem;
    width: 1.25rem;
`,yN=q.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,xN=q.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${tl.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,wN=q.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,$N=q.default.div`
    max-width: 30%;
`,CN=q.default(Wl.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Xs["body-xs-semibold"]}
    }
`,SN=q.default(exports.Typography.BodySM)`
    font-weight: ${Xs.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${tl.MaxWidth.xs} {
        ${Xs["body-xs-bold"]}
    }
`,jN=q.default(exports.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,kN=q.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,DN=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,TN=q.default(v.StarFillIcon)`
    ${DN}
`,EN=q.default(W.StarHalfIcon)`
    ${DN}
`,ON=q.default(b.StarIcon)`
    ${DN}
`,FN="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",IN="smart-app-banner";const _N=U.default.forwardRef((function(t,r){const{className:n,show:i,href:o,content:a,offset:s=0,icon:l=FN,animated:c=!1,onDismiss:d,onClick:u}=t,{title:f,message:h,buttonLabel:p,buttonAriaLabel:g,numberOfStars:m}=a,b=e=>{e.stopPropagation(),window.open(o,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(gN,{ref:r,$isAnimated:c,$offset:s,className:n,children:[e.jsx(mN,{onClick:d,id:`${IN}-dismiss`,"data-testid":`${IN}-dismiss-container`,children:e.jsx(bN,{"aria-label":"Dismiss",children:e.jsx(vN,{})})}),e.jsxs(yN,{onClick:b,id:`${IN}-proceed`,"data-testid":`${IN}-proceed-container`,children:[e.jsx(wN,{src:l,alt:"lifesg-app-icon"}),e.jsxs(xN,{children:[e.jsx(SN,{children:f}),e.jsx(jN,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],r=m-Math.floor(m)>=.4;for(let r=0;r<Math.floor(m);r++)t.push(e.jsx(TN,{},`star${r}`));if(r&&t.push(e.jsx(EN,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e.jsx(ON,{},`emptystar${n}`))}return e.jsx(kN,{children:t.slice(0,5)})})()]}),e.jsx($N,{children:e.jsx(CN,{type:"button",onClick:b,"aria-label":g,children:p})})]})]})})})),MN=U.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),AN=q.default.div`
    position: relative;
    width: 100%;
`,BN=q.default.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `,i.css`
            ${tl.MaxWidth.lg} {
                ${t}
            }
        `}};
`,RN=q.default.div`
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
`,zN=q.default(il)`
    display: none;

    ${tl.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?i.css`
                    justify-content: left;
                    padding-left: ${Qs["spacing-8"]};
                `:i.css`
                    justify-content: right;
                    padding-right: ${Qs["spacing-8"]};
                `}

        svg {
            color: ${qs.icon};
        }
    }
`,PN=t.forwardRef(((r,n)=>{var{children:i,fadeColor:o,fadePosition:a="both",showIndicator:s=!1,onResize:l}=r,c=G(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===a||"both"===a),[f,g]=t.useState("right"===a||"both"===a),m=t.useRef(null),b=t.useRef(null),v=Gu(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(g(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(g(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}Xe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(n,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(AN,Object.assign({ref:m},c,{children:[e.jsx(RN,{ref:b,children:i}),(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(BN,{$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade",children:s&&e.jsx(zN,{$position:"left","data-id":"left-fade-indicator-button",children:e.jsx(p.ChevronLeftIcon,{})})}),f&&e.jsx(BN,{$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade",children:s&&e.jsx(zN,{$position:"right","data-id":"right-fade-indicator-button",children:e.jsx(h.ChevronRightIcon,{})})})]})})()]}))})),LN=q.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return i.css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${Zs["width-040"]} ${Zs.solid}
                        ${qs.border};
                }
            `}}
`,NN=q.default.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${Zs["width-040"]} ${Zs.solid} ${qs.border};

    ${e=>{if(e.$width)return i.css`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return i.css`
                border-color: ${qs["border-primary"]};
            `}}

    ${tl.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,HN=q.default.button`
    position: relative;
    padding: ${Qs["spacing-16"]} ${Qs["spacing-16"]}
        ${Qs["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,WN=q.default(exports.Typography.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${qs["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,VN=q.default(exports.Typography.BodyBL)`
    color: ${qs["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,YN=q.default(PN)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Qs["spacing-4"]};
    }
`,UN=({controlledMode:r,"data-testid":n,onTabClick:o,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=t.useContext(MN),d=i.useTheme(),u=el["md-max"]({theme:d}),f=vc.useMediaQuery({maxWidth:u}),h=el["lg-max"]({theme:d}),p=t.useRef(null),g=e=>t=>{t.preventDefault(),r||s(e),o&&o(c[e].title,e)},m=e=>f&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(YN,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=h&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":n,children:e.jsx(LN,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((t,r)=>{const i=l===r;return e.jsx(NN,{role:"none",$active:i,ref:i?p:null,$width:t.width,children:e.jsxs(HN,{role:"tab",type:"button","aria-selected":i,onClick:g(r),"data-testid":`${n}-link-${r}`,children:[e.jsx(WN,{$active:i,weight:"regular",children:m(t.title)}),e.jsx(VN,{$active:i,weight:"semibold","aria-hidden":"true",children:m(t.title)})]})},r)}))})})},KN=q.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,qN=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:a,"data-testid":s,fullWidthIndicatorLine:l}=r,c=G(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[d,u]=t.useState(i||o),f=t.useMemo((()=>t.Children.toArray(n).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[n]);t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);return e.jsx(KN,Object.assign({"data-testid":s},c,{children:e.jsxs(MN.Provider,{value:{tabLinks:f,currentActiveIndex:d,setCurrentActiveIndex:u},children:[e.jsx(UN,{controlledMode:"number"==typeof i,onTabClick:a,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(n).filter(Boolean).map(((e,r)=>t.cloneElement(e,{key:r,index:r})))]})}))}),{Item:r=>{var{index:n,children:i}=r,o=G(r,["index","children"]);const{currentActiveIndex:a}=t.useContext(MN);return a===n?e.jsx("div",Object.assign({role:"tabpanel"},o,{children:i})):null}}),XN=q.default.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Xs["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,o,a;if("solid"===e.$type)switch(n=qs["text-inverse"],e.$color){case"grey":t=qs["bg-inverse-subtler"],o=qs["bg-inverse-hover"];break;case"green":t=qs["bg-success-strong"],o=qs["bg-success-strong-hover"];break;case"yellow":t=qs["bg-warning-strong"],o=qs["bg-warning-strong-hover"];break;case"red":t=qs["bg-error-strong"],o=qs["bg-error-strong-hover"];break;case"blue":t=qs["bg-info-strong"],o=qs["bg-info-strong-hover"];break;default:t=qs["bg-inverse"],o=qs["bg-inverse-hover"]}else switch(e.$color){case"grey":t=qs["bg-strong"],r=qs["border-strong"],n=qs["text-subtle"],o=qs["bg-hover-neutral-strong"];break;case"green":t=qs["bg-success"],r=qs["border-success"],n=qs["text-success"],o=qs["bg-success-hover"];break;case"yellow":t=qs["bg-warning"],r=qs["border-warning"],n=qs["text-warning"],o=qs["bg-warning-hover"];break;case"red":t=qs["bg-error"],r=qs["border-error"],n=qs["text-error"],o=qs["bg-error-hover"];break;case"blue":t=qs["bg-info"],r=qs["border-info"],n=qs["text-info"],o=qs["bg-info-hover"];break;default:t=qs.bg,r=qs.border,n=qs.text,o=qs["bg-hover-neutral"]}return i.css`
            background: ${t};
            border: ${Zs["width-010"]} ${Zs.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&o&&`background: ${o(e)};`}
                    ${e.$interactive&&a}
                }
            }
        `}}

    ${tl.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${Xs["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,GN=q.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var ZN;_c.extend(Ac),function(e){e.formatHourlyDisplay=e=>_c(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>Zc.getTimeDiffInMinutes(e,t)/15*(r/2)}(ZN||(ZN={}));const QN=1.25,JN=e=>"minified"===e?12:40,eH=e=>"minified"===e?12:40,tH=q.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,rH=q.default(il)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${qs.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${qs.Primitive["neutral-50"]} r g b / 50%);
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
`,nH=q.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${qs["icon-primary"]};
`,iH=q.default(p.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${qs["icon-primary"]};
`,oH=q.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+eH(e)}px`};
`,aH=q.default.div`
    position: relative;
    white-space: nowrap;
    height: ${QN}rem;
`,sH=q.default.div`
    display: flex;
    white-space: nowrap;
`,lH=q.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${JN(e)}px`};
    position: relative;
    border-left: ${Zs["width-010"]} ${Zs.solid}
        ${qs["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?QN:.625;break;case"minified":t=e.$isLongMarker?QN:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,cH=q.default(exports.Typography.BodyXS)`
    color: ${qs["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,dH=q.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${eH(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&i.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||qs["bg-strongest"]} 0px,
                ${e.$bgColor2||qs["bg-strongest"]} 10px,
                ${e.$bgColor||qs["bg-stronger"]} 10px,
                ${e.$bgColor||qs["bg-stronger"]} 20px
            );
        `}
`,uH=q.default.div`
    position: absolute;
    top: ${QN}rem;
    height: ${({$variant:e})=>`${eH(e)}px`};
    z-index: 1;
    border-right: ${Zs["width-010"]} ${Zs.solid}
        ${qs["border-stronger"]};
`,fH=q.default(exports.Typography.BodyXS)`
    color: ${e=>e.$color||qs.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,hH=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Qs["spacing-8"]};
    flex: 1;
`,pH=q.default(exports.Typography.BodyXS)`
    ${e=>e.$disabled&&i.css`
            color: ${qs["text-disabled-subtlest"]};
        `}
`,gH=q.default.div`
    grid-column: 2 / -1;
    display: flex;
`,mH=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Qs["spacing-4"]};
`,bH=q.default(Ti.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,vH=q.default.div`
    display: flex;
    gap: ${Qs["spacing-4"]};
    transition: all ${Gs["duration-250"]} ${Gs["ease-default"]};
    overflow: hidden;
`,yH=q.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Qs["spacing-4"]};
    width: 1.375rem;
    transition: all ${Gs["duration-250"]} ${Gs["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,xH=q.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,wH=q.default.div`
    ${Xs["body-xs-bold"]}
    color: ${qs["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${Xs.Spec["body-size-sm"]};
    }
`,$H=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Qs["spacing-4"]};
`,CH=q.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${Qs["spacing-8"]};
`,SH=q.default(Wl.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${Qs["spacing-8"]};
    }
`,jH=q.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${Gs["duration-250"]} ${Gs["ease-default"]};
`,kH=q.default(dH)`
    ${e=>{if("vertical"===e.$type)return i.css`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${Js.xs};
            `}}

    ${e=>e.$halfFill?i.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${qs["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||qs["bg-strongest"]} 0px,\n                            ${e.$bgColor2||qs["bg-strongest"]} 10px,\n                            ${e.$bgColor||qs["bg-stronger"]} 10px,\n                            ${e.$bgColor||qs["bg-stronger"]} 20px\n                        )`};
            `:i.css`
                background-color: ${e.$bgColor};
            `}
`;var DH=Zi;var TH=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!DH(a):r(a,s)))var s=a,l=o}return l};var EH=TH,OH=ZC,FH=function(e,t){return e<t};var IH=Oi((function(e,t){return e&&e.length?EH(e,OH(t),FH):void 0}));var _H=TH,MH=function(e,t){return e>t},AH=ZC;var BH=Oi((function(e,t){return e&&e.length?_H(e,AH(t),MH):void 0}));const RH=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:f=30,variant:h="flexible",enableSelection:p=!0,onSlotClick:g})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[C,S]=t.useState(),j=t.useMemo((()=>Yc.generateDaysForCurrentWeek(r)),[r]),k=Object.values(null!=u?u:{}).flat(),D=null!==(b=null!=l?l:null===(m=IH(k,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",T=null!==(y=null!=c?c:null===(v=BH(k,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",E=Math.ceil(Zc.getTimeDiffInMinutes(D,T)/f),{height:O=0,ref:F}=Xe(),I=d?O<d||w?O:d:O,_=di({height:I}),M=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,r])=>{const n=function(e){const t=Array(E).fill({});return e.forEach((e=>{const r=Math.max(0,Zc.getTimeDiffInMinutes(D,e.startTime)/f),n=Math.min(E,Zc.getTimeDiffInMinutes(D,e.endTime)/f),i=Math.ceil(n)-Math.floor(r);switch(h){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=Zc.addMinutesToTime(D,Math.floor(r+o)*f),s=Zc.addMinutesToTime(a,f);let l;OO(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return OO(t)&&OO(r)?e:[...e,t]}),[{}]);o<e.length;){if(OO(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:D,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:T;if(a!==s){const t=Zc.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},P(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)OO(e[o])?(e[o]=P(o),o++):o+=e[o].cellLength}return e.filter((e=>!OO(e)&&e.cellLength>0))}(n)})),e}return{}}),[u]),A=e=>{S(e)},B=()=>{S(void 0)},R=e=>{e.preventDefault(),$((e=>!e))},z=e=>{var t;const r=Yc.isWithinRange(e,a?_c(a):void 0,s?_c(s):void 0),i=null!==(t=n&&n.includes(e.format(x)))&&void 0!==t&&t;return!r||i};function P(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:qs["bg-stronger"]},cellLength:t}}return e.jsxs(mH,{children:[e.jsx(gH,{children:j.map(((t,r)=>{const n=(e=>{const t=e.format(x),r=z(e),n={},o=p&&!r;r&&(n.disabled=!0),n.interactive=p?o:null;const a=o&&C&&e.isSame(C,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e.jsx(ru,Object.assign({date:t,calendarDate:_c(i),onSelect:()=>{((e,t)=>{!t&&p&&o(e)})(t,!n.interactive)},onHover:A,onHoverEnd:B},n),`day-${r}`)}))}),e.jsx(gH,{children:j.map(((t,r)=>e.jsx(hH,{children:e.jsx(pH,{weight:"semibold",$disabled:z(t),children:_c(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=_c(D,"HH:mm").add(4*e*f,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e.jsx(yH,{$height:I,children:Array(Math.ceil(E/4)).fill(void 0).map(((t,n)=>e.jsx(xH,{children:e.jsx(wH,{children:r(n)})},`time-${n}`)))})})(),e.jsx(bH,{style:_,children:e.jsx(vH,{ref:F,children:j.map(((t,r)=>{var n;const i=t.format(x),o=null!==(n=M[i])&&void 0!==n?n:Array("flexible"===h?E:1).fill(void 0).map(((e,t)=>P(t,"fixed"===h?E:void 0)));return e.jsx($H,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e.jsx(kH,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===h?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{g&&g(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(x)}`)}),(()=>{if(d&&F.current&&!(O&&O<d))return e.jsx(CH,{children:e.jsxs(SH,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:R,children:[e.jsx(jH,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]})})})()]})},zH=q.default.div`
    --header-bottom-spacing: 0.5rem;

    ${tl.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,PH="YYYY-MM-DD",LH=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,NH=q.default.div`
    ${Xs["body-xs-semibold"]}
    color:${qs.text};

    ${e=>e.$disabled&&i.css`
            color: ${qs["text-disabled-subtlest"]};
        `};
`,HH=q.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,WH=q.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,VH=q.default.div`
    ${Xs["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${qs.text};
    span {
        display: block;
    }
`,YH=q.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;_c.extend(Rc);const UH="YYYY-MM-DD",KH={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:qs["bg-stronger"],backgroundColor2:qs["bg-strongest"]}},qH=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>Yc.generateDaysForCurrentWeek(r)),[r]),[f,h]=t.useState(),p=e=>{h(e)},g=()=>{h(void 0)},m=e=>{const t=e.format(UH),r=(e=>{const t=Yc.isWithinRange(e,a?_c(a):void 0,s?_c(s):void 0),r=!!n&&n.includes(e.format(UH));return!t||r})(e),o=c&&!r,l=o&&f&&e.isSame(f,"day"),d=[i].includes(t),u={labelType:"available",interactive:c?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),d&&l?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):d?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):l&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return e.jsxs(HH,{children:[u.map(((t,r)=>{const n=m(t);return e.jsxs(LH,{children:[e.jsx(ru,Object.assign({date:t,calendarDate:_c(i),onSelect:()=>{((e,t)=>{!t&&c&&o(e)})(t,!n.interactive)},onHover:p,onHoverEnd:g},n),`day-${r}`),e.jsx(NH,{$disabled:n.disabled,children:_c(t).format("ddd")})]},`week-day-${r}`)})),e.jsx(WH,{children:u.map(((t,r)=>{const n=t.format(UH),i=l&&(l[n]?l[n]:[KH]);return e.jsx(YH,{children:i&&i.map((t=>{const{id:r,startTime:i,endTime:o,clickable:a=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(dH,{$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:f,$clickable:a,onClick:()=>a&&((e,t)=>{null==d||d(e,t)})(n,t),children:e.jsxs(VH,{style:{color:l},children:[e.jsx("span",{children:Yc.convertTo12HourFormat(i)}),o&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Yc.convertTo12HourFormat(o)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(UH)}`)]})},XH=q.default.div`
    --header-bottom-spacing: 0.5rem;

    ${tl.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,GH="YYYY-MM-DD",ZH=q.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    border: 4px solid ${qs["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    border: 4px solid ${qs["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${qs["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${qs["icon-success"]};
                    svg {
                        color: ${qs["icon-inverse"]};
                    }
                `;case"error":return i.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${qs["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,QH=q.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    background-color: ${qs["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    background-color: ${qs["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${qs["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${qs["icon-success"]};
                `;case"error":return i.css`
                    margin-left: -0.15rem;
                    background-color: ${qs["icon-error"]};
                `}}}
`,JH=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,eW=q.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${tl.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${tl.MaxWidth.sm} {
        grid-column: span 8;
    }
`,tW=q.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${tl.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,rW=q.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,nW=q.default.div`
    display: flex;

    :last-of-type ${QH} {
        margin-bottom: 0;
    }
`,iW=q.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,oW=q.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,aW=q.default(xP)`
    padding: 0.125rem 0.5rem;
`,sW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],lW=15,cW=252,dW=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],uW=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,fW=q.default(_h)`
    color: ${qs.icon};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${uW} 4s linear infinite;
                `}}
    }
`,hW=q.default.div`
    display: flex;
    padding-bottom: ${Qs["spacing-16"]};
    justify-content: space-between;
    gap: ${Qs["spacing-8"]};
`,pW=q.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Qs["spacing-8"]};
`,gW=q.default(exports.Typography.BodySM)`
    color: ${qs["text-subtler"]};
`,mW=q.default(Rh)`
    width: 400px;
`,bW=t=>{var{selectedDate:r,loading:n,tableContainerRef:i,totalRecords:o,onPreviousDayClick:a,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=G(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(hW,{children:[e.jsx(mW,Object.assign({selectedDate:r,loading:n},d,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),a(e)},onCalendarDateSelect:c})),void 0===o?e.jsx(e.Fragment,{}):e.jsxs(pW,{children:[e.jsxs(gW,{"data-testid":"timetable-records-results",weight:"semibold",children:[o," results found"]}),l&&e.jsx(fW,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:n,onClick:h,$loading:n,children:e.jsx(u.RefreshIcon,{})})]})]})},vW=q.default.div`
    display: flex;
    width: 100%;
`,yW=q.default.div`
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${qs["border-primary"]};
            `}}
`,xW=q.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,wW=q.default.div`
    width: 2px;
    height: 100%;
`,$W=q.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${Js.sm};
    box-sizing: border-box;
    padding: ${Qs["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:r,$altColor:n})=>{switch(e){case"blocked":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${qs["bg-stronger"]} 0px 6px,
                        ${qs["bg-strongest"]} 6px 12px
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
                    background: ${qs["bg-disabled"]};
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
                        background-color: ${r?qs["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,CW=q.default(exports.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,SW=q.default(exports.Typography.BodyXS)`
    color: ${qs["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,jW=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e.jsx(Uy,Object.assign({},i))},kW=U.default.memo((({id:t,startTime:r,endTime:n,title:i,subtitle:o,status:a,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,roundedStartTime:u=r,roundedEndTime:f=n,onClick:h})=>{const p=0===_c(f,"HH:mm").get("minutes"),g=Zc.getTimeDiffInMinutes(u,f)/lW*s-2,m=!!h||d&&"click"===d.trigger;return e.jsx(jW,{containerRef:c,customPopover:d,children:e.jsx(yW,{"data-testid":"block-container",$isOnTheHour:p,children:e.jsxs(xW,{children:[e.jsxs($W,{$width:g,$status:a,$mainColor:l.mainColor,$altColor:l.alternateColor,$isClickable:m,onClick:e=>{h&&h({id:t,startTime:r,endTime:n,status:a,title:i,subtitle:o,customPopover:d},e)},children:[i&&e.jsx(CW,{weight:"semibold",children:i}),o&&e.jsx(SW,{weight:"bold",children:o})]}),e.jsx(wW,{})]})},"block-container-key")})})),DW=({id:r,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o,rowMaxTime:a,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u})=>{const f=o?qu.roundToNearestInterval(o,lW):n,h=a?qu.roundToNearestInterval(a,lW,!0):i,p=t.useMemo((()=>{const e=[];f&&_c(n,"HH:mm").isBefore(_c(f,"HH:mm"))&&e.push({id:r,startTime:n,endTime:f,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const r=_c(e.startTime,"HH:mm"),n=_c(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));let l;return t.forEach(((t,n)=>{var i;const{startTime:o,endTime:a}=t;let c=qu.roundToNearestInterval(o,lW);l&&_c(c,"HH:mm").isBefore(_c(l,"HH:mm"))&&(c=qu.roundToNearestInterval(o,lW,!0));const d=qu.roundToNearestInterval(a,lW,!0);e.push(Object.assign(Object.assign({},t),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(i=s[n+1])||void 0===i?void 0:i.startTime)||h,f=_c(qu.roundToNearestInterval(u,lW),"HH:mm");let p=_c(d,"HH:mm");for(;p.isBefore(f);)if(g=f,p.get("hour")!=g.get("hour")){const t=p.add(1,"hour").startOf("hour");e.push({id:r,startTime:p.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),p=t}else e.push({id:r,startTime:p.format("HH:mm").toString(),endTime:f.format("HH:mm").toString(),status:"disabled"}),p=f;var g;l=p.format("HH:mm").toString()})),h&&_c(i,"HH:mm").isAfter(_c(h,"HH:mm"))&&e.push({id:r,startTime:h,endTime:i,status:"blocked",customPopover:u}),0!==t.length||o||a||e.push({id:r,startTime:n,endTime:i,status:"blocked",customPopover:u}),e}),[f,n,s,h,i,o,a,r,u]);return e.jsx(vW,{"data-testid":"timetable-row",children:p.map(((t,r)=>e.jsx(kW,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${r}-row-cell-key`)))})},TW=q.default.div``,EW=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${cW}px auto;
`,OW=q.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${cW}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,FW=q.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${qs.bg};
    width: ${cW}px;
    z-index: 2;
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${qs.Primitive["neutral-20"]} r g b / 25%);
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
`,IW=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${qs.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,_W=q.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${qs.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${qs.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,MW=q.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${Qs["spacing-4"]};
`,AW=q.default(exports.Typography.BodySM)`
    color: ${qs["text-subtler"]};
`,BW=q.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,RW=q.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${qs.bg};
    width: ${cW}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${Qs["spacing-16"]} 0 ${Qs["spacing-32"]};
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    border-left: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${qs.Primitive["neutral-20"]} r g b / 25%);
            `:i.css`
                box-shadow: inset -0.5px 0px ${qs["border-primary"]};
            `};
`,zW=q.default(exports.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${qs["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,PW=q.default(exports.Typography.BodyXS)`
    display: inline-flex;
    gap: ${Qs["spacing-4"]};
    align-items: center;
    color: ${qs["text-subtler"]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,LW=q.default(hc)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,NW=q.default(Of)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Qs["spacing-72"]} 0;
`,HW=q.default.div`
    display: flex;
    border-bottom: ${Zs["width-010"]} ${Zs.solid} ${qs.border};
`,WW=q.default.div`
    border-right: ${Zs["width-005"]} ${Zs.solid}
        ${qs["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${Qs["spacing-20"]} ${Qs["spacing-12"]};
`,VW=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,YW=q.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${qs.Primitive["neutral-95"]} 8%,
        ${qs.Primitive["neutral-100"]} 18%,
        ${qs.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${VW} 1.5s forwards infinite;
`,UW=q.default(Uy)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,KW=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:qs[t.Background],Border:qs[t.Border],Text:qs[t.Text],Icon:qs[t.Icon]}},qW=q.default(Ti.div)`
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

    ${tl.MaxWidth.lg} {
        left: 0;
    }

    ${e=>i.css`
            background: ${KW(e).Background};
            border: 1px solid ${KW(e).Border};
            color: ${KW(e).Text};
        `};
`,XW=q.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${tl.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,GW=q.default.div`
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
                color: ${KW(e).Icon};
            }
        `};
`,ZW=q.default.div`
    display: flex;
    flex-direction: column;
`,QW=q.default(exports.Typography.HeadingXS)`
    display: flex;

    ${e=>i.css`
            color: ${KW(e).Text};
        `}
`,JW=q.default.div`
    ${e=>i.css`
            p {
                color: ${KW(e).Text};
            }
        `}
`,eV=q.default(Wl.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${tl.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,tV=q.default(il)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${KW(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${tl.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,rV=4e3,nV=q.default.div`
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

                ${Jh.MaxWidth.mobileL} {
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

                ${Jh.MaxWidth.mobileL} {
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

                ${Jh.MaxWidth.mobileL} {
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

                ${Jh.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${WP.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${WP.Base};
            z-index: -1;
        `}
`,iV=q.default(mu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,oV=q.default.div`
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
                        border-color: ${kP.Neutral[8]} transparent
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
                        border-color: transparent ${kP.Neutral[8]}
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
                            ${kP.Neutral[8]};
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
                            ${kP.Neutral[8]} transparent;
                    }
                `}}}
`,aV=q.default.div`
    position: relative;
`,sV=r=>{var{visible:n,position:i="top",children:o}=r,a=G(r,["visible","position","children"]);const s=a["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",Vu(u,300)),()=>{window.removeEventListener("resize",Vu(u,300))})),[]);const u=()=>{f()},f=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(nV,Object.assign({position:l,"data-testid":s,visible:n,ref:d},a,{children:[e.jsx(iV,{children:"string"==typeof o?e.jsx(exports.V2_Text.BodySmall,{children:o}):o}),e.jsx(oV,{position:l})]}))},lV=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${tl.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,cV=q.default(CM.Content)`
    background: ${({$background:e})=>e?qs["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,dV=q.default(exports.Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${lV}
`,uV=q.default(exports.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${lV}
`,fV=q.default.div`
    ${lV}
`,hV=q.default.ul`
    ${lV}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${tl.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${tl.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,pV=U.default.forwardRef(((t,r)=>{var{stretch:n}=t,i=G(t,["stretch"]);return e.jsx(hV,Object.assign({ref:r,$stretch:n},i))})),gV=q.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i.css`
                    grid-column: auto / span 4;
                `;case"full":return i.css`
                    grid-column: auto / span 8;
                `}}}

    ${tl.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,mV=q.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${qs["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${Xs.Spec["body-size-baseline"]};
        height: ${Xs.Spec["body-size-baseline"]};
    }
`,bV=q.default.button`
    ${Xs["body-baseline-regular"]}
    color: ${qs.text};
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
`,vV=q.default.span`
    color: ${qs["text-disabled"]};
`,yV=q.default(kl)`
    margin-right: 0.5rem;
    color: ${qs["text-disabled"]};
`,xV=q.default(C.ExclamationTriangleIcon)`
    color: ${qs["icon-warning"]};
    margin-right: 0.5rem;
    height: ${Xs.Spec["body-size-baseline"]};
    width: ${Xs.Spec["body-size-baseline"]};
`,wV=q.default.span`
    color: ${qs["text-warning"]};
`,$V=q.default.span`
    ${Xs["body-baseline-semibold"]}
    color: ${qs.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,CV=q.default(nc)`
    margin-top: 0.5rem;
`,SV=({label:r,value:n,displayWidth:i="full",maskState:o,maskLoadingState:a,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:p,onUnmask:g,onTryAgain:m})=>{const[b,v]=t.useState(o);t.useEffect((()=>{v(o)}),[o]);const y=()=>{switch("fail"===a&&m&&m(),b){case"masked":g&&g(),v("unmasked");break;case"unmasked":p&&p(),v("masked")}},x=()=>"string"!=typeof n?n:"masked"===b?ed.maskValue(n,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):n,C=()=>{switch(a){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(xV,{}),e.jsx(wV,{children:"Error"}),e.jsx($V,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(yV,{}),e.jsx(vV,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(mV,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(gV,{$widthStyle:i,children:[e.jsx(rx,{children:r}),"string"!=typeof n?n:b?u?e.jsx(exports.Typography.BodyBL,{children:x()}):e.jsx(bV,{"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===a,"aria-live":"polite",type:"button",children:C()}):e.jsx(exports.Typography.BodyBL,{children:n}),f&&e.jsx(CV,Object.assign({sizeType:"small"},f))]})},jV=Object.assign((t=>{var{items:r,title:n,description:i,topSection:o,bottomSection:a,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:f}=t,h=G(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const p=e=>()=>{d&&d(e)},g=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(r&&r.length>0){const t=r.map(((t,r)=>e.jsx(SV,Object.assign({},t,{onMask:p(t),onUnmask:g(t),onTryAgain:m(t)}),r)));return e.jsx(hV,{$stretch:c,children:t})}return null};return e.jsx(cV,Object.assign({$background:l},h,{type:"grid",children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx(dV,{weight:"semibold",$stretch:c,children:n}),i&&e.jsx(uV,{$stretch:c,children:i}),o&&e.jsx(fV,{"data-id":"top-section",$stretch:c,children:o}),b(),a&&e.jsx(fV,{"data-id":"bottom-section",$stretch:c,children:a})]})}))}),{ItemSection:pV,Item:SV}),kV={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${kP.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${kP.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${kP.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${kP.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${kP.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${kP.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},DV=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=$P(kV,null==i?void 0:i[exports.V2_ThemeContextKeys.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?wP(o,e,i.options.designToken):wP(o,e)},TV={InputBoxShadow:DV("InputBoxShadow"),InputErrorBoxShadow:DV("InputErrorBoxShadow"),ElevationBoxShadow:DV("ElevationBoxShadow"),Table:{Header:DV("Table.Header"),Cell:{Primary:DV("Table.Cell.Primary"),Secondary:DV("Table.Cell.Secondary"),Selected:DV("Table.Cell.Selected"),Hover:DV("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:DV("Button.Danger.BackgroundColor"),Hover:DV("Button.Danger.Hover"),Primary:DV("Button.Danger.Primary"),Border:DV("Button.Danger.Border")}}},EV=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=G(t,["children","data-testid","type","stretch"]);return e.jsx(OV,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),OV=q.default.div`
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

                ${Jh.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Jh.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Jh.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Jh.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Jh.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,FV=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=G(t,["children","data-testid","stretch"]);return e.jsx(IV,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),IV=q.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${Jh.MaxWidth.tablet} {
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
`,_V=U.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=G(t,["children","data-testid","className","type","stretch"]);return e.jsx(FV,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(EV,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),MV={Section:FV,Container:EV,Content:_V,ColDiv:rp};var AV;exports.RedirectScope=void 0,(AV=exports.RedirectScope||(exports.RedirectScope={}))[AV.Subpage=0]="Subpage",AV[AV.Domain=1]="Domain";const BV=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,RV=q.default.ol`
    ${e=>BV(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Jh.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>zP.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${kP.Neutral[1]};
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
`,zV=q.default.ul`
    ${e=>BV(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>zP.getTextStyle(e.size,"regular")}
        color: ${kP.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,PV={Ul:t=>{var{size:r="Body",children:n}=t,i=G(t,["size","children"]);return e.jsx(zV,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=G(t,["size","children"]);return e.jsx(RV,Object.assign({size:r},i,{children:n}))}},LV={[exports.V2_ThemeContextKeys.colorScheme]:"base",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"},NV={[exports.V2_ThemeContextKeys.colorScheme]:"bookingsg",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"bookingsg"},HV={[exports.V2_ThemeContextKeys.colorScheme]:"rbs",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"rbs",[exports.V2_ThemeContextKeys.resourceScheme]:"rbs"},WV={[exports.V2_ThemeContextKeys.colorScheme]:"mylegacy",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"mylegacy"},VV={[exports.V2_ThemeContextKeys.colorScheme]:"ccube",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"ccube"},YV={[exports.V2_ThemeContextKeys.colorScheme]:"oneservice",[exports.V2_ThemeContextKeys.textStyleScheme]:"oneservice",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"};exports.Accordion=ql,exports.Alert=nc,exports.BookingSGTheme={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},exports.Border=Zs,exports.BoxContainer=r=>{var{children:n,title:o,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,f=G(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,p]=t.useState(!a||s),g=Xe(),m=g.ref,b=i.useTheme(),v=el["sm-max"]({theme:b}),y=vc.useMediaQuery({maxWidth:v}),x=u&&a,w=e=>{e.stopPropagation(),p(!h)},$=di({height:h?g.height:0}),C=()=>a&&e.jsx(Ec,{onClick:w,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e.jsx(Oc,{$expanded:h,children:e.jsx(Fc,{"aria-hidden":!0})})});return e.jsxs(yc,Object.assign({},f,{children:[e.jsxs(Cc,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[e.jsxs(jc,{children:[e.jsx(Sc,{"data-testid":(null==d?void 0:d.title)||"title",children:o}),(()=>{switch(c){case"error":case"warning":return e.jsx(kc,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e.jsx(Dc,{})});default:return null}})(),y&&C()]}),l&&e.jsx(Tc,{$collapsible:a,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),a?e.jsx(xc,{style:$,"data-testid":"expandable-container",children:e.jsx($c,{ref:m,children:n})}):e.jsx(wc,{"data-testid":"non-expandable-container",children:e.jsx($c,{children:n})})]}))},exports.Breadcrumb=r=>{var{links:n,fadeColor:o,fadePosition:a="both",itemStyle:s,id:l}=r,c=G(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[d,u]=t.useState(!1),[f,h]=t.useState(!1),[p,g]=t.useState(!1),m="left"===a||"both"===a,b="right"===a||"both"===a,v=t.useRef(null),y=t.useRef(null),x=i.useTheme(),w=el["lg-max"]({theme:x}),$=td((()=>{const e=y.current,t=v.current;e&&t&&n&&n.length>1&&window.innerWidth<=w&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),C=td((()=>{const e=window.innerWidth<=w;u(e);const t=y.current,r=v.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return h(t.scrollLeft>=1),void g(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);h(!1),g(!1)}));if(rd("resize",C),rd("scroll",C,y.current),nd((()=>{$(),C()}),[$,C]),Xe({onResize:$,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!n)return null;return e.jsxs(ld,Object.assign({ref:v,id:l||"breadcrumb"},c,{children:[e.jsx("nav",{children:e.jsx(cd,{ref:y,children:n.map(((t,r)=>{let i;return t.children?(i=r!==n.length-1&&t.href?e.jsx(pd,Object.assign({},t,{weight:"semibold"})):e.jsx(hd,{weight:"semibold",children:t.children}),e.jsxs(ud,{$styleProps:s,children:[i,r<n.length-1&&e.jsx(fd,{})]},r)):null}))})}),d&&(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[f&&m&&e.jsx(dd,{$backgroundColor:t.left,$position:"left"}),p&&b&&e.jsx(dd,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Breakpoint=el,exports.Button=Wl,exports.ButtonWithIcon=vd,exports.CCubeTheme={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},exports.Calendar=r=>{var{className:n,styleType:i="bordered",value:o,onSelect:a}=r,s=G(r,["className","styleType","value","onSelect"]);const[l,c]=t.useState(o);return t.useEffect((()=>{c(o)}),[o]),e.jsx(pu,{className:n,$hasBorder:"bordered"===i,children:e.jsx(fu,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==a||a(e)}},s))})},exports.Card=mu,exports.Checkbox=ju,exports.Colour=qs,exports.Component=fB,exports.CountdownTimer=r=>{var{className:n,align:o="right",timer:a,timestamp:s,notifyTimer:l,offset:c,mobileOffset:d,show:u,fixed:f=!0,"data-testid":h,onFinish:p,onNotify:g,onTick:m}=r,b=G(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(null),y=t.useRef(!1),[x,w]=t.useState(0),[$,C]=t.useState(0),[S,j]=t.useState(0),[k,D]=t.useState(!1),[T]=((e,r,n)=>{const[i,o]=t.useState((()=>{const t=gf(e,r)-Date.now();return mf(t)}));t.useEffect((()=>{if(!n)return;const t=gf(e,r),i=a(t);return()=>clearTimeout(i)}),[r,n,e]);const a=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,i=mf(r);if(o(i),0!==i)return setTimeout(t,n>500?n:n+1e3)};return t()};return[i]})(a,s,k),{ref:E,inView:O}=rf({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),F=!f||O,I="number"==typeof l&&T<=l,_=i.useTheme(),M=el["sm-max"]({theme:_}),A=vc.useMediaQuery({maxWidth:M});t.useEffect((()=>{D(u)}),[u]),t.useEffect((()=>{0===T?P():"number"==typeof l&&T<=l&&(R(),z())}),[T]),t.useEffect((()=>{const e=function(){var e,t;const r=null!==(e=null==c?void 0:c.top)&&void 0!==e?e:168,n=null!==(t=null==d?void 0:d.top)&&void 0!==t?t:80,i=A?n:r;return i}();w(e)}),[A,null==c?void 0:c.top,null==d?void 0:d.top]),t.useEffect((()=>{if(v.current){const e=Gu(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[a,u]);const B=()=>{if(!v.current)return;const e=v.current.getBoundingClientRect();j(e.x),C(e.right)},R=()=>{m&&m(T)},z=()=>{g&&!y.current&&(y.current=!0,g())},P=()=>{D(!1),p&&p()};const L=()=>{const{minutes:t,seconds:r}=qu.toMinutesSeconds(T),n=1!==t?"mins":"min",i=1!==r?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(pf,{$warn:I}),e.jsx(ff,{children:"Time left:"}),e.jsxs(hf,{children:[t," ",n," ",String(r).padStart(2,"0")," ",i]})]})};return k||0===T?e.jsxs(lf,Object.assign({className:n},b,{children:[e.jsx("div",{ref:E}),e.jsx(df,{"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:F?void 0:"",$visible:F,$warn:I,children:L()}),v.current&&!F&&(()=>{var t,r;const n=null!==(t=null==c?void 0:c.left)&&void 0!==t?t:"left"===o?S:void 0,i=null!==(r=null==c?void 0:c.right)&&void 0!==r?r:"right"===o?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(uf,{"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:I,$top:x,$left:n,$right:i,children:L()})})()]})):e.jsx(e.Fragment,{})},exports.DataTable=r=>{var{id:n,headers:i,rows:o,className:a,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:f,disabledIds:h,enableActionBar:p,enableSelectAll:g,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:C}=r,S=G(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=t.useRef(null),k=t.useRef(null),D=t.useRef(null),T=t.useRef(null),E=t.useRef(null),[O,F]=t.useState(!1),[I,_]=t.useState(!1),[M,A]=t.useState(!1),[B,R]=t.useState(!1),[z,P]=t.useState(!1),{ref:L,inView:N}=rf(),H=t.useCallback((()=>{if(!E.current||!T.current)return;const e=E.current.scrollHeight>E.current.clientHeight;F(e),e?T.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),Xe({onResize:H});rd("scroll",(()=>{requestAnimationFrame((()=>{O?X():Z()})),E.current&&A(E.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[o]);const W=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),V=e=>!!(null==f?void 0:f.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(d?1:0),X=()=>{if(!E.current)return;const e=E.current.getBoundingClientRect();R(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(j.current&&k.current&&E.current&&T.current&&D.current))return;const e=k.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=j.current.getBoundingClientRect().height-D.current.clientHeight-32,n=Math.min(t,r);T.current.style.transform=`translateY(-${n}px)`}else T.current.style.transform="translateY(0)"},Q=()=>{j.current&&E.current&&P(j.current.clientHeight+(p?56:0)<E.current.clientHeight)},J=t=>{const{fieldKey:r,label:n,clickable:i=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Xf,{"data-testid":K(`header-${r}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(r)),style:o,$isCheckbox:!1,children:e.jsxs(Gf,{children:["string"==typeof n?e.jsx(exports.Typography.BodyBL,{weight:"bold",children:n}):n,ee(r)]})},r)},ee=t=>{const r=null==s?void 0:s[t];return r?"asc"===r?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Xf,{"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0,children:e.jsx(eh,{children:g&&e.jsx(ju,{checked:W(),indeterminate:!!f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})}),re=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e.jsx(Qf,{"data-testid":K(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e.jsx(Jf,{children:a}):"function"==typeof a?a(r,{isSelected:V(o)}):a},s)},ne=t=>e.jsx(Qf,{"data-testid":K(`row-${t}-selection`),$isCheckbox:!0,children:e.jsx(eh,{children:e.jsx(ju,{checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})}),ie=()=>e.jsx(Of,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(rh,{weight:"bold",children:b.title}):b.title:e.jsx(rh,{weight:"bold",children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(Nf,{id:n||"table-wrapper","data-testid":S["data-testid"]||"table",className:a,ref:E,onScroll:()=>{O&&E.current&&_(E.current.scrollTop+E.current.clientHeight>=E.current.scrollHeight)},children:[e.jsx(Hf,{children:e.jsxs(Wf,{$end:M,$scrollable:O,ref:j,$stickyHeader:m,children:[e.jsx("thead",{ref:D,children:e.jsxs(qf,{children:[d&&te(),i.map(J)]})}),e.jsx(Vf,{$showLastRowBottomBorder:z,children:"success"===c?!o||o.length<1?e.jsx("tr",{children:e.jsx(nh,{colSpan:q(),children:y?y():ie()})}):e.jsx(e.Fragment,{children:null==o?void 0:o.map(((t,r)=>e.jsxs(Zf,{"data-testid":K(`row-${t.id.toString()}`),$alternating:Y(r),$isSelectable:d,$isSelected:V(t.id.toString()),children:[d&&ne(t.id.toString()),i.map((e=>re(e,t)))]},t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",{colSpan:q(),children:e.jsx(th,{children:"loading"===c&&e.jsx(hc,{})})})})})]})}),p&&f&&f.length>0&&(()=>{var t,r,n,i;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e.jsx(Yf,{ref:T,$fixed:B,$left:null===(n=null===(r=null==j?void 0:j.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth,children:e.jsxs(Kf,{$float:(O?!I:!N)||B,$scrollable:O,children:[e.jsx(exports.Typography.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e.jsx(Uf,{type:"button",onClick:C,children:"Clear selection"}),v]})})})(),e.jsx("div",{ref:e=>{k.current=e,L(e)}})]})},exports.DateInput=Fh,exports.DateNavigator=Rh,exports.DateRangeInput=qh,exports.Divider=ap,exports.Drawer=r=>{var{children:n,heading:i,show:o,onClose:a,onOverlayClick:s}=r,l=G(r,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(o),[u]=t.useState((()=>Jc.generate())),f=t.useRef(null);t.useEffect((()=>{if(!o){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[o]);return e.jsx(dp,{show:c,enableOverlayClick:!0,onOverlayClick:s,children:e.jsxs(hp,Object.assign({$show:o,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&o&&(null===(t=f.current)||void 0===t||t.focus())}},l,{children:[e.jsxs(pp,{children:[e.jsx(mp,{id:u,ref:f,tabIndex:-1,weight:"bold",children:i}),e.jsx(gp,{"aria-label":"Close drawer",onClick:a,focusHighlight:!1,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]}),e.jsx(bp,{children:n})]}))})},exports.ESignature=Up,exports.ErrorDisplay=Of,exports.FeedbackRating=t=>{const{imgSrc:r,buttonLabel:n,description:i,rating:o,onRatingChange:a,onSubmit:s}=t,l=G(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=r?r:Kp,d=null!=i?i:Xp;return e.jsxs(og,Object.assign({},l,{children:[c&&e.jsx(ig,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(ag,{children:[e.jsx(exports.Typography.HeadingSM,{as:"div",weight:"semibold",children:d}),e.jsx(ng,{description:d,rating:o,onRatingChange:a}),e.jsx(sg,{disabled:!o,onClick:s,type:"button",children:null!=n?n:qp})]})]}))},exports.FileDownload=({id:t,fileItems:r,title:n,description:i,onDownload:o,"data-testid":a,className:s,styleType:l="bordered"})=>{const c=e=>Z(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return e.jsxs(lg,{id:t?`${t}-file-download`:"file-download",className:s,"data-testid":a,$border:"bordered"===l,children:[(n||i)&&e.jsxs(cg,{children:[n?"string"==typeof n?e.jsx(dg,{children:n}):e.jsx(ug,{children:n}):null,i?"string"==typeof i?e.jsx(fg,{children:i}):e.jsx(hg,{children:i}):null]}),e.jsx(pg,{children:r&&r.length>0&&r.map((t=>e.jsx(Ig,{fileItem:t,onDownload:c},t.id)))})]})},exports.FileUpload=({styleType:r="bordered",fileItems:n,title:i,description:o,maxFiles:a,warning:s,className:l,name:c,id:d,"data-testid":u,accept:f,capture:h,multiple:p,disabled:g,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:C,onSort:S})=>{const j=t.useRef(null),[k,D]=t.useState(),T=()=>!(!a||!n)&&n.length>=a;return e.jsx(Mg.Provider,{value:{activeId:k,setActiveId:D},children:e.jsxs(db,{ref:j,onChange:e=>{!g&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===r,className:l,"data-testid":u,name:c,multiple:p,disabled:g||T()||x,children:[!(!i&&!o)&&e.jsxs(v_,{children:[i?"string"==typeof i?e.jsx(y_,{children:i}):e.jsx(x_,{children:i}):null,o?"string"==typeof o?e.jsx(w_,{children:o}):e.jsx($_,{children:o}):null]}),!!s&&e.jsx(C_,{type:"warning",children:s}),e.jsx(b_,{fileItems:n,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:g,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{C&&C(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(D_,{type:"error",children:y}),!x&&e.jsxs(S_,{children:[e.jsx(j_,{type:"button",styleType:"secondary",disabled:!!k||g||T(),onClick:e=>{g||(e.preventDefault(),j.current&&j.current.openFileDialog())},children:"Upload files"}),e.jsx(k_,{children:"or drop them here"})]})]})})},exports.Filter=lM,exports.Font=Xs,exports.Footer=t=>{var{children:r,links:n,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:s,logoSrc:l,copyrightInfo:c,onFooterLinkClick:d,layout:u="default"}=t,f=G(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,p=i.useTheme(),g=t=>t.map(((t,r)=>{const n=G(t,["data-options"]);return e.jsx("li",{children:e.jsx(jM,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):d&&(e.preventDefault(),d(t))})(e,t)}))},r)}));return e.jsxs(SM,Object.assign({},f,{children:[(()=>{let t=null;return r||((n||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(TM,{"data-testid":"logo-section",children:e.jsx("img",{src:l||bM.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==n?void 0:n[0])&&e.jsx(EM,{"data-testid":"link-col-1",children:g(n[0])},"link-col-1"),(null==n?void 0:n[1])&&e.jsx(EM,{"data-testid":"link-col-2",children:g(n[1])},"link-col-2"),s&&e.jsx(OM,{children:e.jsx(hM,{})})]})),t?e.jsxs(e.Fragment,{children:[e.jsx(DM,{type:"grid",stretch:h,children:t}),e.jsx(kM,{})]}):null)})(),e.jsxs(FM,{type:"grid",stretch:h,children:[e.jsx(IM,{children:(()=>{const t=bM.getDisclaimerLinks(null==p?void 0:p.resourceScheme,a);return Object.keys(t).map((r=>e.jsx(MM,Object.assign({},t[r]),r)))})()},"disclaimer"),e.jsx(_M,{children:e.jsx(exports.Typography.BodyXS,{"data-testid":"copyright-text",children:c||e.jsxs(e.Fragment,{children:["©"," ",bM.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})})},"copyright")]})]}))},exports.Form=PI,exports.FullscreenImageCarousel=hB,exports.HistogramSlider=Ix,exports.IconButton=_h,exports.ImageButton=gB,exports.Input=zx,exports.InputGroup=QS,exports.InputMultiSelect=WO,exports.InputNestedMultiSelect=UO,exports.InputNestedSelect=KO,exports.InputRangeSelect=bF,exports.InputRangeSlider=kx,exports.InputSelect=vF,exports.InputSlider=jF,exports.Layout=CM,exports.LifeSGTheme=rl,exports.LinkList=r=>{var{items:n,maxShown:i,style:o="default",onItemClick:a}=r,s=G(r,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=n.length),d=i?n.slice(0,i):n,u=i?n.slice(i):[],f=Xe(),h=f.ref,p=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):a&&(e.preventDefault(),a(t,e))},g=()=>{c(!l)},m=(t,r,n,i)=>{const a="small"===o?yB:vB;return e.jsxs(e.Fragment,{children:[e.jsxs($B,{children:[e.jsx(a,{"data-testid":`link-title-${t}`,weight:"semibold",children:r}),n&&e.jsx(CB,{"data-testid":`link-description-${t}`,children:n}),i]}),e.jsx(xB,{})]})},b=di({height:l?f.height:0});return e.jsxs(bB,Object.assign({},s,{children:[d.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=G(t,["title","description","secondaryDescription","onClick"]);return e.jsx(wB,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>p(e,t)},s,{children:m(r,n,i,o)}),`list-item-shown-${r}`)})),u.length>0&&e.jsx(SB,{style:b,"data-testid":"minimised-content",children:e.jsx(jB,{ref:h,children:u.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=G(t,["title","description","onClick","secondaryDescription"]);return e.jsx(wB,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>p(e,t)},s,{children:m(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),u.length>0&&e.jsxs(EB,{type:"button",onClick:g,"data-testid":"toggle-button",$showMinimised:l,children:[e.jsx(kB,{weight:"semibold","data-testid":"toggle-button-label",children:l?"View less":"View more"}),l?e.jsx(TB,{}):e.jsx(DB,{})]})]}))},exports.LoadingDots=cc,exports.LoadingDotsSpinner=hc,exports.LoadingSpinner=oc,exports.Markup=FB,exports.MaskedInput=fj,exports.Masonry=MB,exports.Masthead=BB,exports.MediaQuery=tl,exports.Modal=jp,exports.Motion=Gs,exports.MyLegacyTheme={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},exports.NBComponent=VR,exports.Navbar=IR,exports.NavbarHeight=_R,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=KR,exports.OneServiceTheme={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},exports.OtpInput=r=>{var{id:n,value:i=[],"data-testid":o,className:a,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:f,onCooldownEnd:h}=r,p=G(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const g=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=g,y=G(g,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,C]=t.useState(new Array(d).fill("")),[S,j]=t.useState(s),[k,D]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",O),()=>document.removeEventListener("paste",O)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=_();return()=>e()}}),[k]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&C(i)}),[i]);const T=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(F(n)){const t=[...$];t[e]=n.substring(n.length-1),null===(r=x.current[e+1])||void 0===r||r.focus(),C(t),u&&u(t)}},E=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=x.current[e-1])||void 0===r||r.focus()),C(t),u&&u(t)}},O=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&F(t,d)?(C(r),w.current&&w.current(r)):e.preventDefault()},F=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),I=()=>{const e=Date.now(),t=1e3*s;return e<k.valueOf()+t},_=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*s,n=Math.ceil((k.valueOf()+r-t)/1e3);j(n),n<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},M=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(Jz,{id:n,"data-testid":o,className:a,children:[e.jsx(eP,{children:$.map(((t,r)=>e.jsx(tP,Object.assign({id:M(r,"otp-input",n),"data-testid":M(r,"otp-input",o),"aria-label":`Enter OTP character ${r+1}`,ref:e=>x.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:T(r),onKeyDown:E(r),autoComplete:"off"},p),r)))}),c&&e.jsx(nx,{children:c}),e.jsx(rP,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{C(new Array(d).fill("")),I()||(D(new Date),j(s)),b&&b(e)},disabled:m||I(),children:y.children?y.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]})},exports.Overlay=dp,exports.PATheme={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},exports.Pagination=mP,exports.PhoneNumberInput=dF,exports.Pill=xP,exports.Popover=XP,exports.PopoverInline=Gy,exports.PopoverTrigger=Uy,exports.PopoverV2=Vy,exports.PredictiveTextInput=hF,exports.ProgressIndicator=t=>{var{steps:r,currentIndex:n,displayExtractor:o,fadeColor:a,fadePosition:s}=t,l=G(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=i.useTheme(),d=el["lg-max"]({theme:c}),u=vc.useMediaQuery({maxWidth:d}),f=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},h=(e,t)=>HL(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return e.jsxs(GP,Object.assign({},l,{children:[e.jsx(ZP,{children:r.map(((t,r)=>{const i=r<=n;return e.jsx(tL,{id:h(r,n),children:e.jsx(QP,{highlighted:i})},r)}))}),e.jsx(ZP,{children:u?e.jsxs(tL,{id:h(n,n),children:[e.jsxs(eL,{weight:"semibold",id:`${h(n,n)}-counter`,children:["Step ",n+1," of ",r.length]}),e.jsx(eL,{weight:"regular",id:`${h(n,n)}-title`,children:f(r[n])})]},n):r.map(((t,r)=>{const i=r<=n,o=r===n,a=o?"bold":"regular";return e.jsx(tL,{id:`${h(r,n)}-title`,children:e.jsx(JP,{highlighted:i,weight:a,"aria-current":o,children:f(t)})},r)}))})]}))},exports.RBSTheme={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},exports.RadioButton=t=>{var{className:r,checked:n,disabled:i,displaySize:o="default",onChange:a}=t,s=G(t,["className","checked","disabled","displaySize","onChange"]);return e.jsxs(WL,{$selected:n,$disabled:i,className:r,$displaySize:o,"data-testid":"radio-button",children:[e.jsx(UL,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:n,disabled:i},s)),n?e.jsx(YL,{"data-testid":"radio-checked",$disabled:i}):e.jsx(VL,{"data-testid":"radio-unchecked",$disabled:i})]})},exports.Radius=Js,exports.SelectHistogram=SF,exports.Sidenav=hN,exports.SignatureCanvas=Vp,exports.SignatureCanvasContainer=Wp,exports.SmartAppBanner=_N,exports.Spacing=Qs,exports.Tab=qN,exports.Tag=t=>{var{type:r,colorType:n="black",children:i,interactive:o=!1,icon:a,iconPosition:s="left"}=t,l=G(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(XN,Object.assign({as:o?"button":"div",$type:r,$color:n,$interactive:o},l,{children:["left"===s&&a,e.jsx(GN,{children:i}),"right"===s&&a]}))},exports.TextList=YF,exports.Textarea=FF,exports.ThemedLoadingSpinner=t=>{const r=i.useTheme();return"lifesg"===(null==r?void 0:r.resourceScheme)?e.jsx(oc,Object.assign({},t)):e.jsx(hc,Object.assign({},t))},exports.TimeRangePicker=TI,exports.TimeSlotBar=({"data-testid":r,className:n,variant:i="default",startTime:o,endTime:a,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[f,h]=t.useState(0),[p,g]=t.useState(0),m=JN(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};Xe({onResize:()=>{u.current&&g(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(r)return`${r}-${e}`},$=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(tH,{className:n,children:[e.jsxs(oH,{"data-testid":r,ref:u,$variant:i,children:[e.jsx(aH,{"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=_c(o,"HH:mm"),n=_c(a,"HH:mm"),s=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=$(o,s,i);t.push(e.jsx(lH,{$isLongMarker:r,$variant:i,children:r&&e.jsx(cH,{weight:"semibold",children:ZN.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),e.jsxs(sH,{"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!d)return;const{backgroundColor:t,backgroundColor2:r,styleType:n="default"}=d,s=ZN.calculateWidth(o,a,m),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(uH,{$variant:i}),e.jsx(dH,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:n,$bgColor:t,$bgColor2:r,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:r,startTime:n,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:p,backgroundColor2:g}=u,b=ZN.calculateWidth(n,s,m),v=ZN.calculateWidth(o,n,m),y=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(uH,{$variant:i,style:{left:`${v}px`}}),e.jsx(dH,{"data-testid":w(`${r}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:p,$bgColor2:g,$clickable:y,onClick:()=>y&&l(t),children:c&&"default"===i&&e.jsx(fH,{$slotWidth:b,$color:f,weight:"semibold",children:x(b)?"...":c})}),a!==s&&e.jsx(uH,{$variant:i,style:{left:`${v+b}px`}})]},r)}))]})]}),e.jsx(e.Fragment,{children:f>0&&e.jsx(rH,{"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")},children:e.jsx(iH,{})})}),f+p<ZN.calculateWidth(o,a,m)?e.jsx(rH,{"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")},children:e.jsx(nH,{})}):e.jsx(e.Fragment,{})]})},exports.TimeSlotBarWeek=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,showNavigationHeader:g=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=r,y=G(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(a),$=t.useRef(null),C=t.useRef(void 0);t.useEffect((()=>{w(a)}),[a]);const S=e=>{const t=e.format(PH);w(t),o&&o(t)},j=(e,t)=>{b&&b(e,t)},k=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(PH),lastDayOfWeek:e.endOf("week").format(PH)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(zH,Object.assign({},y,{children:e.jsx(Hd,{ref:$,dynamicHeight:!0,initialCalendarDate:Zc.toDayjs(x||v).endOf("week").format(PH),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&_c(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&_c(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{C.current&&C.current.isSame(e,"week")||k(e),C.current=e},showNavigationHeader:g,minDate:s,maxDate:l,getMonthHeaderLabel:e=>_c(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>_c(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e.jsx(RH,{calendarDate:t,disabledDates:n,selectedDate:x,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,enableSelection:m,onSlotClick:j}))(t)})}))},exports.TimeSlotWeekView=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=r,p=G(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[g,m]=t.useState(a),b=t.useRef(null),v=t.useRef(void 0);t.useEffect((()=>{m(a)}),[a]);const y=e=>{const t=e.format(GH);m(t),o&&o(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(GH),lastDayOfWeek:e.endOf("week").format(GH)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(XH,Object.assign({},p,{children:e.jsx(Hd,{ref:b,dynamicHeight:!0,initialCalendarDate:Zc.toDayjs(g||h).endOf("week").format(GH),selectedStartDate:g,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&_c(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&_c(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>_c(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>_c(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e.jsx(qH,{calendarDate:t,disabledDates:n,selectedDate:g,minDate:s,maxDate:l,onSelect:y,slots:c,enableSelection:u,onSlotClick:x})})}))},exports.TimeTable=r=>{var{date:n,emptyContentMessage:i,rowData:o,loading:a,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:p,onRefresh:g,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=r,y=G(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=qu.roundToNearestInterval(s,60),$=qu.roundToNearestInterval(l,60,!0),C=qu.generateHourlyIntervals(w,$),S=0===u||uj.isEmpty(o),j=S||o.length===u,k=t.useRef(null),D=t.useRef(null),[T,E]=t.useState(!1),[O,F]=t.useState(!1),[I,_]=t.useState(0),[M,A]=t.useState(!1);t.useEffect((()=>{const e=uj.throttle((()=>{if(k.current&&(E(k.current.scrollLeft>0),F(k.current.scrollTop>0)),M||!k.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!j&&p&&!a&&(A(!0),p())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[j,M,a,p]),t.useEffect((()=>{A(!1)}),[o]);Xe({onResize:()=>{if(k.current){const e=Math.ceil(60*C.length/lW),t=(k.current.clientWidth-cW)/e;_(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const B=(()=>{let e=0;const t=sW.length;return()=>{const r=sW[e],n=dW[e];return e=(e+1)%t,{mainColor:r,alternateColor:n}}})(),R=({wrapper:e,children:t})=>e(t),z=()=>{if(!a&&M)return e.jsx(RW,{$isScrolled:T,children:e.jsx(YW,{})})},P=()=>{if(!a&&M)return e.jsx(HW,{"data-testid":"lazy-loader",children:C.map(((t,r)=>e.jsx(WW,{$width:4*I,children:e.jsx(YW,{})},`lazy-load-cell-${r}`)))})};return S?e.jsxs(TW,Object.assign({},y,{"data-testid":x,children:[e.jsx(bW,{selectedDate:n,loading:a||M,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsx(EW,{className:"empty-container",children:a?e.jsx(LW,{$isEmptyContent:S}):e.jsx(NW,{type:"no-item-found",description:i})})]})):e.jsxs(TW,Object.assign({},y,{"data-testid":x,children:[e.jsx(bW,{"data-id":"timetable-date-navigator",selectedDate:n,loading:a||M,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsxs(OW,{"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:a,$allRecordsLoaded:j||!p,children:[e.jsx(FW,{$isScrolledY:O,$isScrolledX:T}),e.jsx(IW,{$numOfRows:o.length,$isScrolled:T,"data-testid":"row-header-column-id",children:e.jsxs(e.Fragment,{children:[o.map(((r,n)=>e.jsx(R,{wrapper:e=>((e,r)=>{if(!e.rowHeaderPopover)return r;const n={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:r,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(UW,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),r)})(r,e),children:e.jsxs(RW,{$isScrolled:T,children:[e.jsx(zW,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e.jsx(PW,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),z()]})}),e.jsx(_W,{$numOfColumns:C.length,$isScrolled:O,children:C.map((t=>e.jsx(MW,{"data-testid":`${t}-column`,children:e.jsx(AW,{weight:"semibold",children:t})},`${t}-column-key`)))}),a?e.jsx(LW,{$isEmptyContent:S}):e.jsxs(BW,{"data-testid":"content-container-id",ref:D,$numOfRows:o.length,children:[o.map(((t,r)=>e.jsx(DW,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:B(),intervalWidth:I,containerRef:D},t),`${r}-row-bar`))),P()]})]})]}))},exports.Timeline=({items:r,className:n,id:i,title:o,startCol:a,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e.jsx(exports.Typography.BodyMD,{className:"timeline-item-content-text",children:t}):e.jsx(e.Fragment,{children:t}),f=t=>"string"==typeof t?e.jsx(rW,{weight:"semibold",className:"timeline-item-title",children:t}):e.jsx(e.Fragment,{children:t}),h=e=>e.slice(0,2).map(((e,r)=>t.createElement(aW,Object.assign({},e,{type:e.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(eW,{className:n,id:i,"data-testid":c,$startCol:a,$colSpan:s,children:[e.jsx(tW,{"data-testid":"timeline-title",weight:"bold",children:o}),r.map(((t,r)=>{const{title:n,content:i,statuses:o,variant:a}=t,s=l?`circleindicator${r+1}_div_${l}`:"circleindicator",c=a||(0===r?"current":"upcoming-active");return e.jsxs(nW,{children:[e.jsxs(JH,{children:[e.jsx(ZH,{"data-testid":s,$variant:c,children:p(c)}),e.jsx(QH,{$variant:c})]}),e.jsxs(iW,{className:"timeline-item-content",children:[f(n),o&&e.jsx(oW,{children:h(o)}),d(i)]})]},`timeline-item-${r}`)}))]})},exports.Timepicker=OI,exports.Toast=r=>{var{type:n="success",title:o,label:a,autoDismiss:s,autoDismissTime:l=rV,onDismiss:c,fixed:d=!0,actionButton:f}=r,h=G(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[p,g]=t.useState(!1),m=i.useTheme(),b=el["lg-max"]({theme:m}),v=vc.useMediaQuery({maxWidth:b});t.useEffect((()=>{g(!0)}),[]),t.useEffect((()=>{if(!s)return;const e=setTimeout((()=>{g(!1)}),l);return()=>clearTimeout(e)}),[s]);const y=di({opacity:p?1:0,transform:p?v?"translateY(0%)":"translateX(0%)":v?"translateY(-1500%)":"translateX(150%)",config:{easing:ur.easeInOutQuart,duration:1e3},onRest:()=>{p||null==c||c()}});return e.jsxs(qW,Object.assign({style:y,$type:n,$fixed:d},h,{children:[e.jsxs(XW,{children:[e.jsxs(GW,{$type:n,children:[(()=>{switch(n){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(ZW,{children:[o&&(U.default.isValidElement(o)?o:e.jsx(QW,{$type:n,weight:"semibold",children:o})),a&&e.jsx(JW,{$type:n,children:U.default.isValidElement(a)?a:o?e.jsx(exports.Typography.BodyMD,{children:a}):e.jsx(exports.Typography.BodyBL,{children:a})})]})]}),f&&e.jsx(eV,{styleType:"light",onClick:f.onClick,children:f.label})]}),e.jsx(tV,{$type:n,onClick:()=>{g(!1)},children:e.jsx(u.CrossIcon,{})})]}))},exports.Toggle=sI,exports.Tooltip=sV,exports.UneditableSection=jV,exports.UnitNumberInput=RI,exports.V2_BaseTheme=LV,exports.V2_BookingSGTheme=NV,exports.V2_CCubeTheme=VV,exports.V2_Color=kP,exports.V2_DesignToken=TV,exports.V2_Layout=MV,exports.V2_MediaQuery=Jh,exports.V2_MediaWidths=ep,exports.V2_MyLegacyTheme=WV,exports.V2_OneServiceTheme=YV,exports.V2_RBSTheme=HV,exports.V2_TextList=PV,exports.V2_TextStyle=IP,exports.V2_TextStyleHelper=zP,exports.V2_Transition=WP,exports.__awaiter=Z,exports.commonjsGlobal=Ei,exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r},exports.withNotificationBanner=t=>U.default.forwardRef(((r,n)=>e.jsx(VR,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=Qz.sanitize(t.content);return e.jsx("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e.jsx(KR.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(r,n)=>i=>{const{onPopoverAppear:o,onPopoverDismiss:a}=i,s=G(i,["onPopoverAppear","onPopoverDismiss"]),l=n.trigger||"click",c=s,[d,u]=t.useState(!1),f=t.useRef(null),h=vc.useMediaQuery({maxWidth:Zh.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}}),[d]);const p=e=>{f&&!f.current.contains(e.target)&&(d&&u(!1),a&&a())};return e.jsxs(UP,{id:"popover-hoc-wrapper",ref:f,children:[e.jsx(KP,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!d),!d&&o&&o(),d&&a&&a())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!h&&u(!1)},"aria-label":"popover-button",children:e.jsx(r,Object.assign({},c))}),e.jsx(XP,{visible:d,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{u(!1)},children:n.content})]})},exports.withTooltip=(t,r)=>n=>{const{tooltipVisible:i,position:o}=n,a=G(n,["tooltipVisible","position"]);return e.jsxs(aV,{children:[e.jsx(t,Object.assign({},a)),e.jsx(sV,{visible:i,position:o,children:r.content})]})};
//# sourceMappingURL=index.a98094f2.js.map
