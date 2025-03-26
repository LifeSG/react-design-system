import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as g,useCallback as p,useContext as f,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as C,Children as S,createElement as k}from"react";import D,{findDOMNode as T,unstable_batchedUpdates as O,createPortal as E}from"react-dom";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";import M,{css as F,keyframes as I,useTheme as A}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";import{ArrowRightIcon as j}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as z}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as L}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as N,SquareIcon as H,SquareFillIcon as W,SquareTickFillIcon as V,MinusSquareFillIcon as Y,ClockIcon as U,ArrowUpIcon as K,ArrowDownIcon as X,ArrowRightIcon as q,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as ne,MagnifierMinusIcon as re,ChevronLeftIcon as ie,ChevronRightIcon as oe,CircleIcon as ae,CircleDotIcon as se,ChevronUpIcon as le,ExclamationCircleFillIcon as ce,TickIcon as de,RefreshIcon as ue,ICircleFillIcon as he,ExclamationTriangleFillIcon as ge,TickCircleFillIcon as pe}from"@lifesg/react-icons";import{ChevronDownIcon as fe}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as me}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as be}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as ve,useFloating as ye,autoUpdate as xe,offset as we,flip as $e,shift as Ce,limitShift as Se,size as ke,useTransitionStyles as De,useClick as Te,useDismiss as Oe,useInteractions as Ee,FloatingPortal as _e,FloatingFocusManager as Me,FloatingTree as Fe,useFloatingNodeId as Ie,FloatingNode as Ae,useHover as Be}from"@floating-ui/react";import{CrossIcon as je}from"@lifesg/react-icons/cross";import{StarIcon as ze}from"@lifesg/react-icons/star";import{StarFillIcon as Re}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Pe}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Le}from"@lifesg/react-icons/magnifier";import{EyeIcon as Ne}from"@lifesg/react-icons/eye";import{EyeSlashIcon as He}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as We}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as Ve}from"@lifesg/react-icons/square";import{SquareTickFillIcon as Ye}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ue}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ke}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Xe}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as qe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Ge}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ze}from"@lifesg/react-icons/bin";import{PencilIcon as Qe}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Je}from"@lifesg/react-icons/drag-handle";import{MinusIcon as et}from"@lifesg/react-icons/minus";import{PlusIcon as tt}from"@lifesg/react-icons/plus";import{MenuIcon as nt}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as rt}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as it}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as ot}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as at}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as st}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as lt}from"@lifesg/react-icons/star-half";const ct=i.createContext(!1);function dt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ut(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function ht(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function gt(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function pt(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ft=function(e,t){return ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ft(e,t)};var mt=function(){return mt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},mt.apply(this,arguments)};var bt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yt="object"==typeof bt&&bt&&bt.Object===Object&&bt,xt="object"==typeof self&&self&&self.Object===Object&&self,wt=yt||xt||Function("return this")(),$t=wt,Ct=function(){return $t.Date.now()},St=/\s/;var kt=function(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t},Dt=/^\s+/;var Tt=function(e){return e?e.slice(0,kt(e)+1).replace(Dt,""):e},Ot=wt.Symbol,Et=Ot,_t=Object.prototype,Mt=_t.hasOwnProperty,Ft=_t.toString,It=Et?Et.toStringTag:void 0;var At=function(e){var t=Mt.call(e,It),n=e[It];try{e[It]=void 0;var r=!0}catch(e){}var i=Ft.call(e);return r&&(t?e[It]=n:delete e[It]),i},Bt=Object.prototype.toString;var jt=At,zt=function(e){return Bt.call(e)},Rt=Ot?Ot.toStringTag:void 0;var Pt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Rt&&Rt in Object(e)?jt(e):zt(e)},Lt=function(e){return null!=e&&"object"==typeof e};var Nt=Tt,Ht=vt,Wt=function(e){return"symbol"==typeof e||Lt(e)&&"[object Symbol]"==Pt(e)},Vt=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,Kt=parseInt;var Xt=vt,qt=Ct,Gt=function(e){if("number"==typeof e)return e;if(Wt(e))return NaN;if(Ht(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ht(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Nt(e);var n=Yt.test(e);return n||Ut.test(e)?Kt(e.slice(2),n?2:8):Vt.test(e)?NaN:+e},Zt=Math.max,Qt=Math.min;var Jt=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function f(){var e=qt();if(p(e))return m(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?Qt(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?g(e):(r=i=void 0,a)}function b(){var e=qt(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Gt(t)||0,Xt(n)&&(d=!!n.leading,o=(u="maxWait"in n)?Zt(Gt(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(qt())},b},en=Jt,tn=vt;var nn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return tn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),en(e,t,{leading:r,maxWait:t,trailing:i})},rn=function(e,t,n,r){switch(t){case"debounce":return Jt(e,n,r);case"throttle":return nn(e,n,r);default:return e}},on=function(e){return"function"==typeof e},an=function(){return"undefined"==typeof window},sn=function(e){return e instanceof Element||e instanceof HTMLDocument},ln=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&on(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!an()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(an())return null;if(t)return document.querySelector(t);if(r&&sn(r))return r;if(n.targetRef&&sn(n.targetRef.current))return n.targetRef.current;var i=T(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ln(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!an()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return on(t)?"renderProp":on(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,an()||(n.resizeHandler=rn(n.createResizeHandler,i,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ft(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){an()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(a,null)}}}(d);var cn=an()?u:h;function dn(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,p=e.observerOptions,f=e.onResize,m=o(n),b=o(null),v=null!=g?g:b,y=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return cn((function(){if(!an()){var e=ln(f,$,d,h);y.current=rn((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!an()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,d,h,f,p,v.current]),mt({ref:v},w)}var un=Object.defineProperty,hn={};((e,t)=>{for(var n in t)un(e,n,{get:t[n],enumerable:!0})})(hn,{assign:()=>Yn,colors:()=>Hn,createStringInterpolator:()=>Rn,skipAnimation:()=>Wn,to:()=>Pn,willAdvance:()=>Vn});var gn=En(),pn=e=>kn(e,gn),fn=En();pn.write=e=>kn(e,fn);var mn=En();pn.onStart=e=>kn(e,mn);var bn=En();pn.onFrame=e=>kn(e,bn);var vn=En();pn.onFinish=e=>kn(e,vn);var yn=[];pn.setTimeout=(e,t)=>{const n=pn.now()+t,r=()=>{const e=yn.findIndex((e=>e.cancel==r));~e&&yn.splice(e,1),Cn-=~e?1:0},i={time:n,handler:e,cancel:r};return yn.splice(xn(n),0,i),Cn+=1,Dn(),i};var xn=e=>~(~yn.findIndex((t=>t.time>e))||~yn.length);pn.cancel=e=>{mn.delete(e),bn.delete(e),vn.delete(e),gn.delete(e),fn.delete(e)},pn.sync=e=>{Sn=!0,pn.batchedUpdates(e),Sn=!1},pn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,pn.onStart(n)}return r.handler=e,r.cancel=()=>{mn.delete(n),t=null},r};var wn="undefined"!=typeof window?window.requestAnimationFrame:()=>{};pn.use=e=>wn=e,pn.now="undefined"!=typeof performance?()=>performance.now():Date.now,pn.batchedUpdates=e=>e(),pn.catch=console.error,pn.frameLoop="always",pn.advance=()=>{"demand"!==pn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):On()};var $n=-1,Cn=0,Sn=!1;function kn(e,t){Sn?(t.delete(e),e(0)):(t.add(e),Dn())}function Dn(){$n<0&&($n=0,"demand"!==pn.frameLoop&&wn(Tn))}function Tn(){~$n&&(wn(Tn),pn.batchedUpdates(On))}function On(){const e=$n;$n=pn.now();const t=xn($n);t&&(_n(yn.splice(0,t),(e=>e.handler())),Cn-=t),Cn?(mn.flush(),gn.flush(e?Math.min(64,$n-e):16.667),bn.flush(),fn.flush(),vn.flush()):$n=-1}function En(){let e=new Set,t=e;return{add(n){Cn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Cn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Cn-=t.size,_n(t,(t=>t(n)&&e.add(t))),Cn+=e.size,t=e)}}}function _n(e,t){e.forEach((e=>{try{t(e)}catch(e){pn.catch(e)}}))}function Mn(){}var Fn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function In(e,t){if(Fn.arr(e)){if(!Fn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var An=(e,t)=>e.forEach(t);function Bn(e,t,n){if(Fn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var jn=e=>Fn.und(e)?[]:Fn.arr(e)?e:[e];function zn(e,t){if(e.size){const n=Array.from(e);e.clear(),An(n,t)}}var Rn,Pn,Ln=(e,...t)=>zn(e,(e=>e(...t))),Nn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Hn=null,Wn=!1,Vn=Mn,Yn=e=>{e.to&&(Pn=e.to),e.now&&(pn.now=e.now),void 0!==e.colors&&(Hn=e.colors),null!=e.skipAnimation&&(Wn=e.skipAnimation),e.createStringInterpolator&&(Rn=e.createStringInterpolator),e.requestAnimationFrame&&pn.use(e.requestAnimationFrame),e.batchedUpdates&&(pn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Vn=e.willAdvance),e.frameLoop&&(pn.frameLoop=e.frameLoop)},Un=new Set,Kn=[],Xn=[],qn=0,Gn={get idle(){return!Un.size&&!Kn.length},start(e){qn>e.priority?(Un.add(e),pn.onStart(Zn)):(Qn(e),pn(er))},advance:er,sort(e){if(qn)pn.onFrame((()=>Gn.sort(e)));else{const t=Kn.indexOf(e);~t&&(Kn.splice(t,1),Jn(e))}},clear(){Kn=[],Un.clear()}};function Zn(){Un.forEach(Qn),Un.clear(),pn(er)}function Qn(e){Kn.includes(e)||Jn(e)}function Jn(e){Kn.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Kn,(t=>t.priority>e.priority)),0,e)}function er(e){const t=Xn;for(let n=0;n<Kn.length;n++){const r=Kn[n];qn=r.priority,r.idle||(Vn(r),r.advance(e),r.idle||t.push(r))}return qn=0,(Xn=Kn).length=0,(Kn=t).length>0}var tr="[-+]?\\d*\\.?\\d+",nr=tr+"%";function rr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ir=new RegExp("rgb"+rr(tr,tr,tr)),or=new RegExp("rgba"+rr(tr,tr,tr,tr)),ar=new RegExp("hsl"+rr(tr,nr,nr)),sr=new RegExp("hsla"+rr(tr,nr,nr,tr)),lr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,dr=/^#([0-9a-fA-F]{6})$/,ur=/^#([0-9a-fA-F]{8})$/;function hr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function gr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=hr(i,r,e+1/3),a=hr(i,r,e),s=hr(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function pr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fr(e){return(parseFloat(e)%360+360)%360/360}function mr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function br(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function vr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=dr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Hn&&void 0!==Hn[e]?Hn[e]:(t=ir.exec(e))?(pr(t[1])<<24|pr(t[2])<<16|pr(t[3])<<8|255)>>>0:(t=or.exec(e))?(pr(t[1])<<24|pr(t[2])<<16|pr(t[3])<<8|mr(t[4]))>>>0:(t=lr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ur.exec(e))?parseInt(t[1],16)>>>0:(t=cr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ar.exec(e))?(255|gr(fr(t[1]),br(t[2]),br(t[3])))>>>0:(t=sr.exec(e))?(gr(fr(t[1]),br(t[2]),br(t[3]))|mr(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var yr=(e,t,n)=>{if(Fn.fun(e))return e;if(Fn.arr(e))return yr({range:e,output:t,extrapolate:n});if(Fn.str(e.output[0]))return Rn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var xr=1.70158,wr=1.525*xr,$r=xr+1,Cr=2*Math.PI/3,Sr=2*Math.PI/4.5,kr=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Dr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>$r*e*e*e-xr*e*e,easeOutBack:e=>1+$r*Math.pow(e-1,3)+xr*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-wr)/2:(Math.pow(2*e-2,2)*((wr+1)*(2*e-2)+wr)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Cr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Cr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Sr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Sr)/2+1,easeInBounce:e=>1-kr(1-e),easeOutBounce:kr,easeInOutBounce:e=>e<.5?(1-kr(1-2*e))/2:(1+kr(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Tr=Symbol.for("FluidValue.get"),Or=Symbol.for("FluidValue.observers"),Er=e=>Boolean(e&&e[Tr]),_r=e=>e&&e[Tr]?e[Tr]():e,Mr=e=>e[Or]||null;function Fr(e,t){const n=e[Or];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ir=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ar(this,e)}},Ar=(e,t)=>Rr(e,Tr,t);function Br(e,t){if(e[Tr]){let n=e[Or];n||Rr(e,Or,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function jr(e,t){const n=e[Or];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Or]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var zr,Rr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Pr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Lr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Nr=new RegExp(`(${Pr.source})(%|[a-z]+)`,"i"),Hr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Wr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vr=e=>{const[t,n]=Yr(e);if(!t||Nn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Wr.test(n)?Vr(n):n||e},Yr=e=>{const t=Wr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Ur=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Kr=e=>{zr||(zr=Hn?new RegExp(`(${Object.keys(Hn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>_r(e).replace(Wr,Vr).replace(Lr,vr).replace(zr,vr))),n=t.map((e=>e.match(Pr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>yr({...e,output:t})));return e=>{const n=!Nr.test(t[0])&&t.find((e=>Nr.test(e)))?.replace(Pr,"");let r=0;return t[0].replace(Pr,(()=>`${i[r++](e)}${n||""}`)).replace(Hr,Ur)}},Xr="react-spring: ",qr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Xr}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Gr=qr(console.warn);var Zr=qr(console.warn);function Qr(e){return Fn.str(e)&&("#"==e[0]||/\d/.test(e)||!Nn()&&Wr.test(e)||e in(Hn||{}))}var Jr=Nn()?u:h,ei=()=>{const e=o(!1);return Jr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ti(){const e=a()[1],t=ei();return()=>{t.current&&e(Math.random())}}var ni=e=>u(e,ri),ri=[];function ii(e){const t=o();return u((()=>{t.current=e})),t.current}var oi=Symbol.for("Animated:node"),ai=e=>e&&e[oi],si=(e,t)=>{return n=e,r=oi,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},li=e=>e&&e[oi]&&e[oi].getPayload(),ci=class{constructor(){si(this,this)}getPayload(){return this.payload||[]}},di=class extends ci{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Fn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new di(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Fn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Fn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ui=class extends di{constructor(e){super(0),this._string=null,this._toString=yr({output:[e,e]})}static create(e){return new ui(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Fn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=yr({output:[this.getValue(),e]})),this._value=0,super.reset()}},hi={dependencies:null},gi=class extends ci{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Bn(this.source,((n,r)=>{var i;(i=n)&&i[oi]===i?t[r]=n.getValue(e):Er(n)?t[r]=_r(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&An(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Bn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){hi.dependencies&&Er(e)&&hi.dependencies.add(e);const t=li(e);t&&An(t,(e=>this.add(e)))}},pi=class extends gi{constructor(e){super(e)}static create(e){return new pi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(fi)),!0)}};function fi(e){return(Qr(e)?ui:di).create(e)}function mi(e){const t=ai(e);return t?t.constructor:Fn.arr(e)?pi:Qr(e)?ui:di}var bi=(e,t)=>{const n=!Fn.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((i,a)=>{const s=o(null),l=n&&p((e=>{s.current=function(e,t){e&&(Fn.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const n=new Set;hi.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new gi(e),hi.dependencies=null,[e,n]}(i,t),h=ti(),g=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new vi(g,d),m=o();Jr((()=>(m.current=f,An(d,(e=>Br(e,f))),()=>{m.current&&(An(m.current.deps,(e=>jr(e,m.current))),pn.cancel(m.current.update))}))),u(g,[]),ni((()=>()=>{const e=m.current;An(e.deps,(t=>jr(t,e)))}));const b=t.getComponentProps(c.getValue());return r.createElement(e,{...b,ref:l})}))},vi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&pn.write(this.update)}};var yi=Symbol.for("AnimatedComponent"),xi=e=>Fn.str(e)?e:e&&Fn.str(e.displayName)?e.displayName:Fn.fun(e)&&e.name||null;function wi(e,...t){return Fn.fun(e)?e(...t):e}var $i=(e,t)=>!0===e||!!(t&&e&&(Fn.fun(e)?e(t):jn(e).includes(t))),Ci=(e,t)=>Fn.obj(e)?t&&e[t]:e,Si=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ki=e=>e,Di=(e,t=ki)=>{let n=Ti;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Fn.und(n)||(r[i]=n)}return r},Ti=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Oi={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ei(e){const t=function(e){const t={};let n=0;if(Bn(e,((e,r)=>{Oi[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Bn(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function _i(e){return e=_r(e),Fn.arr(e)?e.map(_i):Qr(e)?hn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Mi(e){return Fn.fun(e)||Fn.arr(e)&&Fn.obj(e[0])}var Fi={tension:170,friction:26,mass:1,damping:1,easing:Dr.linear,clamp:!1},Ii=class{constructor(){this.velocity=0,Object.assign(this,Fi)}};function Ai(e,t){if(Fn.und(t.decay)){const n=!Fn.und(t.tension)||!Fn.und(t.friction);!n&&Fn.und(t.frequency)&&Fn.und(t.damping)&&Fn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Bi=[],ji=class{constructor(){this.changed=!1,this.values=Bi,this.toValues=null,this.fromValues=Bi,this.config=new Ii,this.immediate=!1}};function zi(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=$i(n.cancel??r?.cancel,t);if(d)g();else{Fn.und(n.pause)||(i.paused=$i(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||$i(e,t)),l=wi(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-pn.now()}function h(){l>0&&!hn.skipAnimation?(i.delayed=!0,c=pn.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(c)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...n,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Ri=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ni(e.get()):t.every((e=>e.noop))?Pi(e.get()):Li(e.get(),t.every((e=>e.finished))),Pi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Li=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ni=e=>({value:e,cancelled:!0,finished:!1});function Hi(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Di(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),g=e=>{const t=i<=(n.cancelId||0)&&Ni(r)||i!==n.asyncId&&Li(r,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Vi,a=new Yi;return(async()=>{if(hn.skipAnimation)throw Wi(n),a.result=Li(r,!1),u(a),a;g(o);const s=Fn.obj(e)?{...e}:{...t,to:e};s.parentId=i,Bn(c,((e,t)=>{Fn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return g(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let f;if(hn.skipAnimation)return Wi(n),Li(r,!1);try{let t;t=Fn.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(d),h]),f=Li(r.get(),!0,!1)}catch(e){if(e instanceof Vi)f=e.result;else{if(!(e instanceof Yi))throw e;f=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Fn.fun(a)&&pn.batchedUpdates((()=>{a(f,r,r.item)})),f})():l}function Wi(e,t){zn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Vi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Yi=class extends Error{constructor(){super("SkipAnimationSignal")}},Ui=e=>e instanceof Xi,Ki=1,Xi=class extends Ir{constructor(){super(...arguments),this.id=Ki++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ai(this);return e&&e.getValue()}to(...e){return hn.to(this,e)}interpolate(...e){return Gr(`${Xr}The "interpolate" function is deprecated in v9 (use "to" instead)`),hn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Fr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Gn.sort(this),Fr(this,{type:"priority",parent:this,priority:e})}},qi=Symbol.for("SpringPhase"),Gi=e=>(1&e[qi])>0,Zi=e=>(2&e[qi])>0,Qi=e=>(4&e[qi])>0,Ji=(e,t)=>t?e[qi]|=3:e[qi]&=-3,eo=(e,t)=>t?e[qi]|=4:e[qi]&=-5,to=class extends Xi{constructor(e,t){if(super(),this.animation=new ji,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Fn.und(e)||!Fn.und(t)){const n=Fn.obj(e)?{...e}:{...t,from:e};Fn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Zi(this)||this._state.asyncTo)||Qi(this)}get goal(){return _r(this.animation.to)}get velocity(){const e=ai(this);return e instanceof di?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Gi(this)}get isAnimating(){return Zi(this)}get isPaused(){return Qi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=li(r.to);!a&&Er(r.to)&&(i=jn(_r(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ui?1:a?a[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Fn.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Fn.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!Fn.und(r),g=n==c?s.v0>0:n<c;let p,f=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(f=u==c||u>c==g,f&&(a=-a*r,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+o.easing(r)*(c-n),a=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(n=!0)}));const s=ai(this),l=s.getValue();if(t){const e=_r(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return pn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Zi(this)){const{to:e,config:t}=this.animation;pn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Fn.und(e)?(n=this.queue||[],this.queue=[]):n=[Fn.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ri(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Wi(this._state,e&&this._lastCallId),pn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Fn.obj(n)?n[t]:n,(null==n||Mi(n))&&(n=void 0),r=Fn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Gi(this)||(e.reverse&&([n,r]=[r,n]),r=_r(r),Fn.und(r)?ai(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Di(e,((e,t)=>/^on/.test(t)?Ci(e,n):e))),lo(this,e,"onProps"),co(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return zi(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Qi(this)||(eo(this,!0),Ln(o.pauseQueue),co(this,"onPause",Li(this,no(this,this.animation.to)),this))},resume:()=>{Qi(this)&&(eo(this,!1),Zi(this)&&this._resume(),Ln(o.resumeQueue),co(this,"onResume",Li(this,no(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ro(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ni(this));const r=!Fn.und(e.to),i=!Fn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ni(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!Fn.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!In(u,c);h&&(s.from=u),u=_r(u);const g=!In(d,l);g&&this._focus(d);const p=Mi(t.to),{config:f}=s,{decay:m,velocity:b}=f;(r||i)&&(f.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ai(n={...n},t),t={...n,...t}),Ai(e,t),Object.assign(e,t);for(const t in Fi)null==e[t]&&(e[t]=Fi[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;Fn.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(f,wi(t.config,o),t.config!==a.config?wi(a.config,o):void 0);let v=ai(this);if(!v||Fn.und(d))return n(Li(this,!0));const y=Fn.und(t.reset)?i&&!t.default:!Fn.und(u)&&$i(t.reset,o),x=y?u:this.get(),w=_i(d),$=Fn.num(w)||Fn.arr(w)||Qr(w),C=!p&&(!$||$i(a.immediate||t.immediate,o));if(g){const e=mi(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=Er(d),D=!1;if(!k){const e=y||!Gi(this)&&h;(g||e)&&(D=In(_i(x),w),k=!D),(In(s.immediate,C)||C)&&In(f.decay,m)&&In(f.velocity,b)||(k=!0)}if(D&&Zi(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||Er(l))&&(s.values=v.getPayload(),s.toValues=Er(d)?null:S==ui?[1]:jn(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;An(so,(e=>lo(this,t,e)));const r=Li(this,no(this,l));Ln(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&pn.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?wi(a.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),p?n(Hi(t.to,t,this._state,this)):k?this._start():Zi(this)&&!g?this._pendingCalls.add(n):n(Pi(x))}_focus(e){const t=this.animation;e!==t.to&&(Mr(this)&&this._detach(),t.to=e,Mr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Er(t)&&(Br(t,this),Ui(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Er(e)&&jr(e,this)}_set(e,t=!0){const n=_r(e);if(!Fn.und(n)){const e=ai(this);if(!e||!In(n,e.getValue())){const r=mi(n);e&&e.constructor==r?e.setValue(n):si(this,r.create(n)),e&&pn.batchedUpdates((()=>{this._onChange(n,t)}))}}return ai(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,co(this,"onStart",Li(this,no(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),wi(this.animation.onChange,e,this)),wi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ai(this).reset(_r(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Zi(this)||(Ji(this,!0),Qi(this)||this._resume())}_resume(){hn.skipAnimation?this.finish():Gn.start(this)}_stop(e,t){if(Zi(this)){Ji(this,!1);const n=this.animation;An(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Fr(this,{type:"idle",parent:this});const r=t?Ni(this.get()):Li(this.get(),no(this,e??n.to));Ln(this._pendingCalls,r),n.changed&&(n.changed=!1,co(this,"onRest",r,this))}}};function no(e,t){const n=_i(t);return In(_i(e.get()),n)}function ro(e,t=e.loop,n=e.to){const r=wi(t);if(r){const i=!0!==r&&Ei(r),o=(i||e).reverse,a=!i||i.reset;return io({...e,loop:t,default:!1,pause:void 0,to:!o||Mi(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function io(e){const{to:t,from:n}=e=Ei(e),r=new Set;return Fn.obj(t)&&ao(t,r),Fn.obj(n)&&ao(n,r),e.keys=r.size?Array.from(r):null,e}function oo(e){const t=io(e);return Fn.und(t.default)&&(t.default=Di(t)),t}function ao(e,t){Bn(e,((e,n)=>null!=e&&t.add(n)))}var so=["onStart","onRest","onChange","onPause","onResume"];function lo(e,t,n){e.animation[n]=t[n]!==Si(t,n)?Ci(t[n],e.key):void 0}function co(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var uo=["onStart","onChange","onRest"],ho=1,go=class{constructor(e,t){this.id=ho++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Fn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(io(e)),this}start(e){let{queue:t}=this;return e?t=jn(e).map(io):this.queue=[],this._flush?this._flush(this,t):(xo(this,t),po(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;An(jn(t),(t=>n[t].stop(!!e)))}else Wi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Fn.und(e))this.start({pause:!0});else{const t=this.springs;An(jn(e),(e=>t[e].pause()))}return this}resume(e){if(Fn.und(e))this.start({pause:!1});else{const t=this.springs;An(jn(e),(e=>t[e].resume()))}return this}each(e){Bn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,zn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&zn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,zn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}pn.onFrame(this._onFrame)}};function po(e,t){return Promise.all(t.map((t=>fo(e,t)))).then((t=>Ri(e,t)))}async function fo(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Fn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=Fn.arr(i)||Fn.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):An(uo,(n=>{const r=t[n];if(Fn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ln(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),g=!0===t.cancel||!0===Si(t,"cancel");(d||g&&u.asyncId)&&h.push(zi(++e._lastAsyncId,{props:t,state:u,actions:{pause:Mn,resume:Mn,start(t,n){g?(Wi(u,e._lastAsyncId),n(Ni(e))):(t.onRest=s,n(Hi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Ri(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=ro(t,a,i);if(n)return xo(e,[n]),fo(e,n,!0)}return l&&pn.batchedUpdates((()=>l(p,e,e.item))),p}function mo(e,t){const n={...e.springs};return t&&An(jn(t),(e=>{Fn.und(e.keys)&&(e=io(e)),Fn.obj(e.to)||(e={...e,to:void 0}),yo(n,e,(e=>vo(e)))})),bo(e,n),n}function bo(e,t){Bn(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Br(t,e))}))}function vo(e,t){const n=new to;return n.key=e,t&&Br(n,t),n}function yo(e,t,n){t.keys&&An(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function xo(e,t){An(t,(t=>{yo(e.springs,t,(t=>vo(t,e)))}))}var wo,$o,Co=({children:e,...t})=>{const n=f(So),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;if(s){const n=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs));n||(s={inputs:t,result:e()})}else s=n;return u((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=So;return r.createElement(l,{value:t},e)},So=(wo=Co,$o={},Object.assign(wo,r.createContext($o)),wo.Provider._context=wo,wo.Consumer._context=wo,wo);Co.Provider=So.Provider,Co.Consumer=So.Consumer;var ko=()=>{const e=[],t=function(t){Zr(`${Xr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return An(e,((e,i)=>{if(Fn.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return An(e,(e=>e.pause(...arguments))),this},t.resume=function(){return An(e,(e=>e.resume(...arguments))),this},t.set=function(t){An(e,((e,n)=>{const r=Fn.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return An(e,((e,r)=>{if(Fn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return An(e,(e=>e.stop(...arguments))),this},t.update=function(t){return An(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Fn.fun(e)?e(n,t):e};return t._getProps=n,t};function Do(e,t){const n=Fn.fun(e),[[r],i]=function(e,t,n){const r=Fn.fun(t)&&t;r&&!n&&(n=[]);const i=m((()=>r||3==arguments.length?ko():void 0),[]),a=o(0),s=ti(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const n=mo(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?po(e,t):new Promise((r=>{bo(e,n),l.queue.push((()=>{r(po(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ii(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new go(null,l.flush)),n=r?r(i,e):t[i];n&&(d[i]=oo(n))}}m((()=>{An(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),n);const g=c.current.map(((e,t)=>mo(e,d[t]))),p=f(Co),b=ii(p),v=p!==b&&function(e){for(const t in e)return!0;return!1}(p);Jr((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],An(e,(e=>e()))),An(c.current,((e,t)=>{i?.add(e),v&&e.start({default:p});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ni((()=>()=>{An(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var To=class extends Xi{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=yr(...t);const n=this._get(),r=mi(n);si(this,r.create(n))}advance(e){const t=this._get();In(t,this.get())||(ai(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Eo(this._active)&&_o(this)}_get(){const e=Fn.arr(this.source)?this.source.map(_r):jn(_r(this.source));return this.calc(...e)}_start(){this.idle&&!Eo(this._active)&&(this.idle=!1,An(li(this),(e=>{e.done=!1})),hn.skipAnimation?(pn.batchedUpdates((()=>this.advance())),_o(this)):Gn.start(this))}_attach(){let e=1;An(jn(this.source),(t=>{Er(t)&&Br(t,this),Ui(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){An(jn(this.source),(e=>{Er(e)&&jr(e,this)})),this._active.clear(),_o(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=jn(this.source).reduce(((e,t)=>Math.max(e,(Ui(t)?t.priority:0)+1)),0))}};function Oo(e){return!1!==e.idle}function Eo(e){return!e.size||Array.from(e).every(Oo)}function _o(e){e.idle||(e.idle=!0,An(li(e),(e=>{e.done=!0})),Fr(e,{type:"idle",parent:e}))}hn.assign({createStringInterpolator:Kr,to:(e,t)=>new To(e,t)});var Mo=/^--/;function Fo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Mo.test(e)||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}var Io={};var Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bo=["Webkit","Ms","Moz","O"];Ao=Object.keys(Ao).reduce(((e,t)=>(Bo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ao);var jo=/^(matrix|translate|scale|rotate|skew)/,zo=/^(translate)/,Ro=/^(rotate|skew)/,Po=(e,t)=>Fn.num(e)&&0!==e?e+t:e,Lo=(e,t)=>Fn.arr(e)?e.every((e=>Lo(e,t))):Fn.num(e)?e===t:parseFloat(e)===t,No=class extends gi{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Po(e,"px"))).join(",")})`,Lo(e,0)]))),Bn(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(jo.test(t)){if(delete r[t],Fn.und(e))return;const n=zo.test(t)?"px":Ro.test(t)?"deg":"";i.push(jn(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Po(i,n)})`,Lo(i,0)]:e=>[`${t}(${e.map((e=>Po(e,n))).join(",")})`,Lo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Ho(i,o)),super(r)}},Ho=class extends Ir{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return An(this.inputs,((n,r)=>{const i=_r(n[0]),[o,a]=this.transforms[r](Fn.arr(i)?i:n.map(_r));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&An(this.inputs,(e=>An(e,(e=>Er(e)&&Br(e,this)))))}observerRemoved(e){0==e&&An(this.inputs,(e=>An(e,(e=>Er(e)&&jr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Fr(this,e)}};hn.assign({batchedUpdates:O,createStringInterpolator:Kr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Wo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new gi(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=xi(e)||"Anonymous";return(e=Fn.str(e)?o[e]||(o[e]=bi(e,i)):e[yi]||(e[yi]=bi(e,i))).displayName=`Animated(${t})`,e};return Bn(e,((t,n)=>{Fn.arr(e)&&(n=xi(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Io[t]||(Io[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Fo(t,r[t]);Mo.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new No(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Vo=Wo.animated,Yo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ko(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var Xo=Array.isArray,qo="object"==typeof Yo&&Yo&&Yo.Object===Object&&Yo,Go=qo,Zo="object"==typeof self&&self&&self.Object===Object&&self,Qo=Go||Zo||Function("return this")(),Jo=Qo.Symbol,ea=Jo,ta=Object.prototype,na=ta.hasOwnProperty,ra=ta.toString,ia=ea?ea.toStringTag:void 0;var oa=function(e){var t=na.call(e,ia),n=e[ia];try{e[ia]=void 0;var r=!0}catch(e){}var i=ra.call(e);return r&&(t?e[ia]=n:delete e[ia]),i},aa=Object.prototype.toString;var sa=oa,la=function(e){return aa.call(e)},ca=Jo?Jo.toStringTag:void 0;var da=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ca&&ca in Object(e)?sa(e):la(e)};var ua=function(e){return null!=e&&"object"==typeof e},ha=da,ga=ua;var pa=function(e){return"symbol"==typeof e||ga(e)&&"[object Symbol]"==ha(e)},fa=Xo,ma=pa,ba=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,va=/^\w*$/;var ya=function(e,t){if(fa(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ma(e))||(va.test(e)||!ba.test(e)||null!=t&&e in Object(t))};var xa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},wa=da,$a=xa;var Ca,Sa=function(e){if(!$a(e))return!1;var t=wa(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ka=Qo["__core-js_shared__"],Da=(Ca=/[^.]+$/.exec(ka&&ka.keys&&ka.keys.IE_PROTO||""))?"Symbol(src)_1."+Ca:"";var Ta=function(e){return!!Da&&Da in e},Oa=Function.prototype.toString;var Ea=function(e){if(null!=e){try{return Oa.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_a=Sa,Ma=Ta,Fa=xa,Ia=Ea,Aa=/^\[object .+?Constructor\]$/,Ba=Function.prototype,ja=Object.prototype,za=Ba.toString,Ra=ja.hasOwnProperty,Pa=RegExp("^"+za.call(Ra).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var La=function(e,t){return null==e?void 0:e[t]},Na=function(e){return!(!Fa(e)||Ma(e))&&(_a(e)?Pa:Aa).test(Ia(e))},Ha=La;var Wa=function(e,t){var n=Ha(e,t);return Na(n)?n:void 0},Va=Wa(Object,"create"),Ya=Va;var Ua=function(){this.__data__=Ya?Ya(null):{},this.size=0};var Ka=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Xa=Va,qa=Object.prototype.hasOwnProperty;var Ga=function(e){var t=this.__data__;if(Xa){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return qa.call(t,e)?t[e]:void 0},Za=Va,Qa=Object.prototype.hasOwnProperty;var Ja=function(e){var t=this.__data__;return Za?void 0!==t[e]:Qa.call(t,e)},es=Va;var ts=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=es&&void 0===t?"__lodash_hash_undefined__":t,this},ns=Ua,rs=Ka,is=Ga,os=Ja,as=ts;function ss(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ss.prototype.clear=ns,ss.prototype.delete=rs,ss.prototype.get=is,ss.prototype.has=os,ss.prototype.set=as;var ls=ss;var cs=function(){this.__data__=[],this.size=0};var ds=function(e,t){return e===t||e!=e&&t!=t},us=ds;var hs=function(e,t){for(var n=e.length;n--;)if(us(e[n][0],t))return n;return-1},gs=hs,ps=Array.prototype.splice;var fs=function(e){var t=this.__data__,n=gs(t,e);return!(n<0)&&(n==t.length-1?t.pop():ps.call(t,n,1),--this.size,!0)},ms=hs;var bs=function(e){var t=this.__data__,n=ms(t,e);return n<0?void 0:t[n][1]},vs=hs;var ys=function(e){return vs(this.__data__,e)>-1},xs=hs;var ws=function(e,t){var n=this.__data__,r=xs(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},$s=cs,Cs=fs,Ss=bs,ks=ys,Ds=ws;function Ts(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ts.prototype.clear=$s,Ts.prototype.delete=Cs,Ts.prototype.get=Ss,Ts.prototype.has=ks,Ts.prototype.set=Ds;var Os=Ts,Es=Wa(Qo,"Map"),_s=ls,Ms=Os,Fs=Es;var Is=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var As=function(e,t){var n=e.__data__;return Is(t)?n["string"==typeof t?"string":"hash"]:n.map},Bs=As;var js=function(e){var t=Bs(this,e).delete(e);return this.size-=t?1:0,t},zs=As;var Rs=function(e){return zs(this,e).get(e)},Ps=As;var Ls=function(e){return Ps(this,e).has(e)},Ns=As;var Hs=function(e,t){var n=Ns(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ws=function(){this.size=0,this.__data__={hash:new _s,map:new(Fs||Ms),string:new _s}},Vs=js,Ys=Rs,Us=Ls,Ks=Hs;function Xs(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xs.prototype.clear=Ws,Xs.prototype.delete=Vs,Xs.prototype.get=Ys,Xs.prototype.has=Us,Xs.prototype.set=Ks;var qs=Xs,Gs=qs;function Zs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Zs.Cache||Gs),n}Zs.Cache=Gs;var Qs=Zs;var Js=function(e){var t=Qs(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},el=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tl=/\\(\\)?/g,nl=Js((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(el,(function(e,n,r,i){t.push(r?i.replace(tl,"$1"):n||e)})),t}));var rl=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},il=Xo,ol=pa,al=Jo?Jo.prototype:void 0,sl=al?al.toString:void 0;var ll=function e(t){if("string"==typeof t)return t;if(il(t))return rl(t,e)+"";if(ol(t))return sl?sl.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},cl=ll;var dl=function(e){return null==e?"":cl(e)},ul=Xo,hl=ya,gl=nl,pl=dl;var fl=function(e,t){return ul(e)?e:hl(e,t)?[e]:gl(pl(e))},ml=pa;var bl=function(e){if("string"==typeof e||ml(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},vl=fl,yl=bl;var xl=function(e,t){for(var n=0,r=(t=vl(t,e)).length;null!=e&&n<r;)e=e[yl(t[n++])];return n&&n==r?e:void 0},wl=xl;var $l=function(e,t,n){var r=null==e?void 0:wl(e,t);return void 0===r?n:r},Cl=Uo($l);const Sl=(e,t,n)=>Cl(n,t)||Cl(e,t),kl=(e,t)=>{const n=t||e.defaultValue;return Cl(e.collections,n)},Dl={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Tl=e=>t=>{var n;const r=t.theme,i=kl(Dl,null==r?void 0:r.borderScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.border)?`${Sl(i,e,r.overrides.border)}px`:`${i[e]}px`},Ol={"width-005":Tl("width-005"),"width-010":Tl("width-010"),"width-020":Tl("width-020"),"width-040":Tl("width-040"),solid:(El="solid",e=>{var t;const n=e.theme,r=kl(Dl,null==n?void 0:n.borderScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?Sl(r,El,n.overrides.border):r[El];return"function"==typeof i?i(e):i})};var El;const _l={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Ml=e=>t=>{var n;const r=t.theme,i=kl(_l,null==r?void 0:r.colourScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.primitiveColour)?Sl(i,e,r.overrides.primitiveColour):i[e]},Fl={"brand-10":Ml("brand-10"),"brand-20":Ml("brand-20"),"brand-30":Ml("brand-30"),"brand-40":Ml("brand-40"),"brand-50":Ml("brand-50"),"brand-60":Ml("brand-60"),"brand-70":Ml("brand-70"),"brand-80":Ml("brand-80"),"brand-90":Ml("brand-90"),"brand-95":Ml("brand-95"),"brand-100":Ml("brand-100"),"primary-10":Ml("primary-10"),"primary-20":Ml("primary-20"),"primary-30":Ml("primary-30"),"primary-40":Ml("primary-40"),"primary-50":Ml("primary-50"),"primary-60":Ml("primary-60"),"primary-70":Ml("primary-70"),"primary-80":Ml("primary-80"),"primary-90":Ml("primary-90"),"primary-95":Ml("primary-95"),"primary-100":Ml("primary-100"),"secondary-10":Ml("secondary-10"),"secondary-20":Ml("secondary-20"),"secondary-30":Ml("secondary-30"),"secondary-40":Ml("secondary-40"),"secondary-50":Ml("secondary-50"),"secondary-60":Ml("secondary-60"),"secondary-70":Ml("secondary-70"),"secondary-80":Ml("secondary-80"),"secondary-90":Ml("secondary-90"),"secondary-95":Ml("secondary-95"),"secondary-100":Ml("secondary-100"),"neutral-10":Ml("neutral-10"),"neutral-20":Ml("neutral-20"),"neutral-30":Ml("neutral-30"),"neutral-40":Ml("neutral-40"),"neutral-50":Ml("neutral-50"),"neutral-60":Ml("neutral-60"),"neutral-70":Ml("neutral-70"),"neutral-80":Ml("neutral-80"),"neutral-90":Ml("neutral-90"),"neutral-95":Ml("neutral-95"),"neutral-100":Ml("neutral-100"),"success-10":Ml("success-10"),"success-20":Ml("success-20"),"success-30":Ml("success-30"),"success-40":Ml("success-40"),"success-50":Ml("success-50"),"success-60":Ml("success-60"),"success-70":Ml("success-70"),"success-80":Ml("success-80"),"success-90":Ml("success-90"),"success-95":Ml("success-95"),"success-100":Ml("success-100"),"warning-10":Ml("warning-10"),"warning-20":Ml("warning-20"),"warning-30":Ml("warning-30"),"warning-40":Ml("warning-40"),"warning-50":Ml("warning-50"),"warning-60":Ml("warning-60"),"warning-70":Ml("warning-70"),"warning-80":Ml("warning-80"),"warning-90":Ml("warning-90"),"warning-95":Ml("warning-95"),"warning-100":Ml("warning-100"),"error-10":Ml("error-10"),"error-20":Ml("error-20"),"error-30":Ml("error-30"),"error-40":Ml("error-40"),"error-50":Ml("error-50"),"error-60":Ml("error-60"),"error-70":Ml("error-70"),"error-80":Ml("error-80"),"error-90":Ml("error-90"),"error-95":Ml("error-95"),"error-100":Ml("error-100"),"info-10":Ml("info-10"),"info-20":Ml("info-20"),"info-30":Ml("info-30"),"info-40":Ml("info-40"),"info-50":Ml("info-50"),"info-60":Ml("info-60"),"info-70":Ml("info-70"),"info-80":Ml("info-80"),"info-90":Ml("info-90"),"info-95":Ml("info-95"),"info-100":Ml("info-100"),white:Ml("white"),black:Ml("black"),"primary-inverse":Ml("primary-inverse")},Il={text:Ml("neutral-20"),"text-subtle":Ml("neutral-30"),"text-subtler":Ml("neutral-50"),"text-subtlest":Ml("neutral-60"),"text-primary":Ml("primary-50"),"text-hover":Ml("primary-40"),"text-selected":Ml("primary-50"),"text-selected-hover":Ml("primary-40"),"text-disabled":Ml("neutral-50"),"text-disabled-subtle":Ml("neutral-60"),"text-disabled-subtlest":Ml("neutral-80"),"text-selected-disabled":Ml("neutral-20"),"text-success":Ml("success-40"),"text-warning":Ml("warning-40"),"text-error":Ml("error-40"),"text-info":Ml("info-40"),"text-inverse":Ml("white"),icon:Ml("neutral-50"),"icon-subtle":Ml("neutral-60"),"icon-strongest":Ml("neutral-20"),"icon-primary":Ml("primary-50"),"icon-primary-subtle":Ml("primary-60"),"icon-primary-subtlest":Ml("primary-70"),"icon-hover":Ml("primary-40"),"icon-selected":Ml("primary-50"),"icon-selected-hover":Ml("primary-40"),"icon-disabled":Ml("neutral-50"),"icon-disabled-subtle":Ml("neutral-60"),"icon-selected-disabled":Ml("neutral-60"),"icon-success":Ml("success-50"),"icon-warning":Ml("warning-60"),"icon-error":Ml("error-50"),"icon-error-strong":Ml("error-40"),"icon-info":Ml("info-50"),"icon-inverse":Ml("white"),"icon-primary-inverse":Ml("primary-inverse"),border:Ml("neutral-90"),"border-strong":Ml("neutral-70"),"border-stronger":Ml("neutral-50"),"border-primary":Ml("primary-50"),"border-primary-subtle":Ml("primary-60"),"border-hover":Ml("primary-90"),"border-hover-strong":Ml("primary-60"),"border-selected":Ml("primary-50"),"border-selected-subtle":Ml("primary-70"),"border-selected-subtlest":Ml("primary-90"),"border-selected-hover":Ml("primary-40"),"border-focus":Ml("primary-60"),"border-focus-strong":Ml("primary-50"),"border-disabled":Ml("neutral-90"),"border-selected-disabled":Ml("neutral-70"),"border-success":Ml("success-60"),"border-warning":Ml("warning-60"),"border-error":Ml("error-60"),"border-error-focus":Ml("error-60"),"border-error-focus-strong":Ml("error-40"),"border-error-strong":Ml("error-40"),"border-info":Ml("info-60"),bg:Ml("white"),"bg-strong":Ml("neutral-100"),"bg-stronger":Ml("neutral-95"),"bg-strongest":Ml("neutral-90"),"bg-hover":Ml("primary-95"),"bg-hover-strong":Ml("primary-90"),"bg-hover-subtle":Ml("primary-100"),"bg-hover-neutral":Ml("neutral-100"),"bg-hover-neutral-strong":Ml("neutral-90"),"bg-selected":Ml("primary-95"),"bg-selected-hover":Ml("primary-90"),"bg-selected-strong":Ml("primary-90"),"bg-selected-stronger":Ml("primary-70"),"bg-selected-strongest":Ml("primary-50"),"bg-selected-strongest-hover":Ml("primary-40"),"bg-disabled":Ml("neutral-95"),"bg-selected-disabled":Ml("neutral-95"),"bg-selected-stronger-disabled":Ml("neutral-70"),"bg-success":Ml("success-100"),"bg-success-hover":Ml("success-95"),"bg-success-strong":Ml("success-50"),"bg-success-strong-hover":Ml("success-40"),"bg-warning":Ml("warning-100"),"bg-warning-hover":Ml("warning-95"),"bg-warning-strong":Ml("warning-50"),"bg-warning-strong-hover":Ml("warning-40"),"bg-info":Ml("info-100"),"bg-info-hover":Ml("info-95"),"bg-info-strong":Ml("info-50"),"bg-info-strong-hover":Ml("info-40"),"bg-error":Ml("error-100"),"bg-error-hover":Ml("error-95"),"bg-error-strong":Ml("error-50"),"bg-error-strong-hover":Ml("error-40"),"bg-inverse":Ml("neutral-20"),"bg-inverse-subtle":Ml("neutral-30"),"bg-inverse-subtler":Ml("neutral-50"),"bg-inverse-subtlest":Ml("neutral-60"),"bg-inverse-hover":Ml("neutral-40"),"bg-primary":Ml("primary-50"),"bg-primary-subtle":Ml("primary-60"),"bg-primary-subtler":Ml("primary-95"),"bg-primary-subtlest":Ml("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ml("primary-40"),"bg-primary-subtlest-hover":Ml("primary-90"),"bg-primary-subtlest-selected":Ml("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ml("primary-50"),"hyperlink-hover":Ml("primary-40"),"hyperlink-visited":Ml("primary-40"),"hyperlink-inverse":Ml("primary-inverse"),"focus-ring":Ml("black"),"focus-ring-inverse":Ml("white")},Al={collections:{lifesg:Il,bookingsg:Il,rbs:Il,mylegacy:Il,ccube:Il,pa:{text:Ml("neutral-30"),"text-subtle":Ml("neutral-40"),"text-subtler":Ml("neutral-50"),"text-subtlest":Ml("neutral-70"),"text-primary":Ml("neutral-10"),"text-hover":Ml("neutral-70"),"text-selected":Ml("neutral-20"),"text-selected-hover":Ml("neutral-10"),"text-disabled":Ml("neutral-50"),"text-disabled-subtle":Ml("neutral-60"),"text-disabled-subtlest":Ml("neutral-80"),"text-selected-disabled":Ml("neutral-40"),"text-success":Ml("success-40"),"text-warning":Ml("warning-40"),"text-error":Ml("brand-30"),"text-info":Ml("neutral-40"),"text-inverse":Ml("neutral-100"),icon:Ml("neutral-40"),"icon-subtle":Ml("neutral-50"),"icon-strongest":Ml("neutral-10"),"icon-primary":Ml("neutral-10"),"icon-primary-subtle":Ml("neutral-30"),"icon-primary-subtlest":Ml("neutral-60"),"icon-hover":Ml("neutral-70"),"icon-selected":Ml("brand-20"),"icon-selected-hover":Ml("brand-10"),"icon-disabled":Ml("neutral-50"),"icon-disabled-subtle":Ml("neutral-60"),"icon-selected-disabled":Ml("neutral-40"),"icon-success":Ml("success-40"),"icon-warning":Ml("warning-60"),"icon-error":Ml("brand-30"),"icon-error-strong":Ml("brand-10"),"icon-info":Ml("neutral-40"),"icon-inverse":Ml("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ml("neutral-90"),"border-strong":Ml("neutral-30"),"border-stronger":Ml("neutral-20"),"border-primary":Ml("neutral-40"),"border-primary-subtle":Ml("neutral-60"),"border-hover":Ml("neutral-80"),"border-hover-strong":Ml("neutral-10"),"border-selected":Ml("neutral-20"),"border-selected-subtle":Ml("neutral-40"),"border-selected-subtlest":Ml("neutral-70"),"border-selected-hover":Ml("neutral-10"),"border-focus":Ml("brand-60"),"border-focus-strong":Ml("brand-40"),"border-disabled":Ml("neutral-90"),"border-selected-disabled":Ml("neutral-80"),"border-success":Ml("success-40"),"border-warning":Ml("warning-60"),"border-error":Ml("brand-30"),"border-error-focus":Ml("brand-20"),"border-error-focus-strong":Ml("brand-10"),"border-error-strong":Ml("brand-20"),"border-info":Ml("neutral-40"),bg:Ml("neutral-100"),"bg-strong":Ml("neutral-95"),"bg-stronger":Ml("neutral-90"),"bg-strongest":Ml("neutral-80"),"bg-hover":Ml("brand-90"),"bg-hover-strong":Ml("brand-80"),"bg-hover-subtle":Ml("neutral-90"),"bg-hover-neutral":Ml("neutral-90"),"bg-hover-neutral-strong":Ml("neutral-90"),"bg-selected":Ml("brand-50"),"bg-selected-hover":Ml("brand-70"),"bg-selected-strong":Ml("brand-90"),"bg-selected-stronger":Ml("brand-40"),"bg-selected-strongest":Ml("brand-20"),"bg-selected-strongest-hover":Ml("brand-10"),"bg-disabled":Ml("neutral-90"),"bg-selected-disabled":Ml("neutral-90"),"bg-selected-stronger-disabled":Ml("neutral-80"),"bg-success":Ml("success-100"),"bg-success-hover":Ml("success-95"),"bg-success-strong":Ml("success-50"),"bg-success-strong-hover":Ml("success-40"),"bg-warning":Ml("warning-100"),"bg-warning-hover":Ml("warning-95"),"bg-warning-strong":Ml("warning-50"),"bg-warning-strong-hover":Ml("warning-40"),"bg-info":Ml("neutral-95"),"bg-info-hover":Ml("info-95"),"bg-info-strong":Ml("info-50"),"bg-info-strong-hover":Ml("info-40"),"bg-error":Ml("brand-100"),"bg-error-hover":Ml("error-95"),"bg-error-strong":Ml("error-50"),"bg-error-strong-hover":Ml("error-40"),"bg-inverse":Ml("neutral-40"),"bg-inverse-subtle":Ml("neutral-60"),"bg-inverse-subtler":Ml("neutral-70"),"bg-inverse-subtlest":Ml("neutral-80"),"bg-inverse-hover":Ml("neutral-30"),"bg-primary":Ml("brand-20"),"bg-primary-subtle":Ml("brand-60"),"bg-primary-subtler":Ml("brand-80"),"bg-primary-subtlest":Ml("brand-100"),"bg-available":Ml("success-60"),"bg-primary-hover":Ml("brand-10"),"bg-primary-subtlest-hover":Ml("brand-80"),"bg-primary-subtlest-selected":Ml("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ml("neutral-10"),"hyperlink-hover":Ml("neutral-40"),"hyperlink-visited":Ml("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ml("black"),"focus-ring-inverse":Ml("white")}},defaultValue:"lifesg"},Bl=e=>t=>{var n;const r=t.theme,i=kl(Al,null==r?void 0:r.colourScheme),o=(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.semanticColour)?Sl(i,e,r.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},jl={text:Bl("text"),"text-subtle":Bl("text-subtle"),"text-subtler":Bl("text-subtler"),"text-subtlest":Bl("text-subtlest"),"text-primary":Bl("text-primary"),"text-hover":Bl("text-hover"),"text-selected":Bl("text-selected"),"text-selected-hover":Bl("text-selected-hover"),"text-disabled":Bl("text-disabled"),"text-disabled-subtle":Bl("text-disabled-subtle"),"text-disabled-subtlest":Bl("text-disabled-subtlest"),"text-selected-disabled":Bl("text-selected-disabled"),"text-success":Bl("text-success"),"text-warning":Bl("text-warning"),"text-error":Bl("text-error"),"text-info":Bl("text-info"),"text-inverse":Bl("text-inverse"),icon:Bl("icon"),"icon-subtle":Bl("icon-subtle"),"icon-strongest":Bl("icon-strongest"),"icon-primary":Bl("icon-primary"),"icon-primary-subtle":Bl("icon-primary-subtle"),"icon-primary-subtlest":Bl("icon-primary-subtlest"),"icon-hover":Bl("icon-hover"),"icon-selected":Bl("icon-selected"),"icon-selected-hover":Bl("icon-selected-hover"),"icon-disabled":Bl("icon-disabled"),"icon-disabled-subtle":Bl("icon-disabled-subtle"),"icon-selected-disabled":Bl("icon-selected-disabled"),"icon-success":Bl("icon-success"),"icon-warning":Bl("icon-warning"),"icon-error":Bl("icon-error"),"icon-error-strong":Bl("icon-error-strong"),"icon-info":Bl("icon-info"),"icon-inverse":Bl("icon-inverse"),"icon-primary-inverse":Bl("icon-primary-inverse"),border:Bl("border"),"border-strong":Bl("border-strong"),"border-stronger":Bl("border-stronger"),"border-primary":Bl("border-primary"),"border-primary-subtle":Bl("border-primary-subtle"),"border-hover":Bl("border-hover"),"border-hover-strong":Bl("border-hover-strong"),"border-selected":Bl("border-selected"),"border-selected-subtle":Bl("border-selected-subtle"),"border-selected-subtlest":Bl("border-selected-subtlest"),"border-selected-hover":Bl("border-selected-hover"),"border-focus":Bl("border-focus"),"border-focus-strong":Bl("border-focus-strong"),"border-disabled":Bl("border-disabled"),"border-selected-disabled":Bl("border-selected-disabled"),"border-success":Bl("border-success"),"border-warning":Bl("border-warning"),"border-error":Bl("border-error"),"border-error-focus":Bl("border-error-focus"),"border-error-focus-strong":Bl("border-error-focus-strong"),"border-error-strong":Bl("border-error-strong"),"border-info":Bl("border-info"),bg:Bl("bg"),"bg-strong":Bl("bg-strong"),"bg-stronger":Bl("bg-stronger"),"bg-strongest":Bl("bg-strongest"),"bg-hover":Bl("bg-hover"),"bg-hover-strong":Bl("bg-hover-strong"),"bg-hover-subtle":Bl("bg-hover-subtle"),"bg-hover-neutral":Bl("bg-hover-neutral"),"bg-hover-neutral-strong":Bl("bg-hover-neutral-strong"),"bg-selected":Bl("bg-selected"),"bg-selected-hover":Bl("bg-selected-hover"),"bg-selected-strong":Bl("bg-selected-strong"),"bg-selected-stronger":Bl("bg-selected-stronger"),"bg-selected-strongest":Bl("bg-selected-strongest"),"bg-selected-strongest-hover":Bl("bg-selected-strongest-hover"),"bg-disabled":Bl("bg-disabled"),"bg-selected-disabled":Bl("bg-selected-disabled"),"bg-selected-stronger-disabled":Bl("bg-selected-stronger-disabled"),"bg-success":Bl("bg-success"),"bg-success-hover":Bl("bg-success-hover"),"bg-success-strong":Bl("bg-success-strong"),"bg-success-strong-hover":Bl("bg-success-strong-hover"),"bg-warning":Bl("bg-warning"),"bg-warning-hover":Bl("bg-warning-hover"),"bg-warning-strong":Bl("bg-warning-strong"),"bg-warning-strong-hover":Bl("bg-warning-strong-hover"),"bg-info":Bl("bg-info"),"bg-info-hover":Bl("bg-info-hover"),"bg-info-strong":Bl("bg-info-strong"),"bg-info-strong-hover":Bl("bg-info-strong-hover"),"bg-error":Bl("bg-error"),"bg-error-hover":Bl("bg-error-hover"),"bg-error-strong":Bl("bg-error-strong"),"bg-error-strong-hover":Bl("bg-error-strong-hover"),"bg-inverse":Bl("bg-inverse"),"bg-inverse-subtle":Bl("bg-inverse-subtle"),"bg-inverse-subtler":Bl("bg-inverse-subtler"),"bg-inverse-subtlest":Bl("bg-inverse-subtlest"),"bg-inverse-hover":Bl("bg-inverse-hover"),"bg-primary":Bl("bg-primary"),"bg-primary-subtle":Bl("bg-primary-subtle"),"bg-primary-subtler":Bl("bg-primary-subtler"),"bg-primary-subtlest":Bl("bg-primary-subtlest"),"bg-available":Bl("bg-available"),"bg-primary-hover":Bl("bg-primary-hover"),"bg-primary-subtlest-hover":Bl("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bl("bg-primary-subtlest-selected"),"overlay-strong":Bl("overlay-strong"),"overlay-subtle":Bl("overlay-subtle"),hyperlink:Bl("hyperlink"),"hyperlink-hover":Bl("hyperlink-hover"),"hyperlink-visited":Bl("hyperlink-visited"),"hyperlink-inverse":Bl("hyperlink-inverse"),"focus-ring":Bl("focus-ring"),"focus-ring-inverse":Bl("focus-ring-inverse")},zl={collections:{default:{solid:e=>t=>{var n,r,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(t):o)&&void 0!==n?n:Ol["width-010"](t),c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:jl.border(t),u=Ol.solid;return F`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var n,r,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(t):o)&&void 0!==n?n:Ol["width-010"](t),c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:jl.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Rl=e=>1===e.length&&"theme"in e[0],Pl=e=>(...t)=>n=>{const r=Rl(t)?[]:t,i=Rl(t)?t[0]:n,o=i.theme;return(0,kl(zl,null==o?void 0:o.borderScheme)[e])(...r)(i)},Ll={solid:Pl("solid"),"dashed-default":Pl("dashed-default")},Nl={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Hl=e=>t=>{var n;const r=t.theme,i=kl(Nl,null==r?void 0:r.breakpointScheme);let o;return o=(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.breakpoint)?Sl(i,e,r.overrides.breakpoint):i[e],o},Wl={"xxs-min":Hl("xxs-min"),"xxs-max":Hl("xxs-max"),"xs-min":Hl("xs-min"),"xs-max":Hl("xs-max"),"sm-min":Hl("sm-min"),"sm-max":Hl("sm-max"),"md-min":Hl("md-min"),"md-max":Hl("md-max"),"lg-min":Hl("lg-min"),"lg-max":Hl("lg-max"),"xl-min":Hl("xl-min"),"xl-max":Hl("xl-max"),"xxl-min":Hl("xxl-min"),"xxs-column":Hl("xxs-column"),"xs-column":Hl("xs-column"),"sm-column":Hl("sm-column"),"md-column":Hl("md-column"),"lg-column":Hl("lg-column"),"xl-column":Hl("xl-column"),"xxl-column":Hl("xxl-column"),"xxs-gutter":Hl("xxs-gutter"),"xs-gutter":Hl("xs-gutter"),"sm-gutter":Hl("sm-gutter"),"md-gutter":Hl("md-gutter"),"lg-gutter":Hl("lg-gutter"),"xl-gutter":Hl("xl-gutter"),"xxl-gutter":Hl("xxl-gutter"),"xxs-margin":Hl("xxs-margin"),"xs-margin":Hl("xs-margin"),"sm-margin":Hl("sm-margin"),"md-margin":Hl("md-margin"),"lg-margin":Hl("lg-margin"),"xl-margin":Hl("xl-margin"),"xxl-margin":Hl("xxl-margin")},Vl=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,n)=>(t[n]=((e,t)=>{const n=Wl["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const r=n(t);return`@media screen and (${e}: ${r}px)`}})(e,n),t)),{}),Yl={MaxWidth:Vl("max-width"),MinWidth:Vl("min-width")},Ul={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Kl=e=>t=>{var n;const r=t.theme,i=kl(Ul,null==r?void 0:r.fontScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.fontSpec)?Sl(i,e,r.overrides.fontSpec):i[e]},Xl={"heading-size-xxl":Kl("heading-size-xxl"),"heading-size-xl":Kl("heading-size-xl"),"heading-size-lg":Kl("heading-size-lg"),"heading-size-md":Kl("heading-size-md"),"heading-size-sm":Kl("heading-size-sm"),"heading-size-xs":Kl("heading-size-xs"),"heading-lh-xxl":Kl("heading-lh-xxl"),"heading-lh-xl":Kl("heading-lh-xl"),"heading-lh-lg":Kl("heading-lh-lg"),"heading-lh-md":Kl("heading-lh-md"),"heading-lh-sm":Kl("heading-lh-sm"),"heading-lh-xs":Kl("heading-lh-xs"),"heading-ls-xxl":Kl("heading-ls-xxl"),"heading-ls-xl":Kl("heading-ls-xl"),"heading-ls-lg":Kl("heading-ls-lg"),"heading-ls-md":Kl("heading-ls-md"),"heading-ls-sm":Kl("heading-ls-sm"),"heading-ls-xs":Kl("heading-ls-xs"),"weight-light":Kl("weight-light"),"weight-regular":Kl("weight-regular"),"weight-semibold":Kl("weight-semibold"),"weight-bold":Kl("weight-bold"),"font-family":Kl("font-family"),"body-size-baseline":Kl("body-size-baseline"),"body-size-md":Kl("body-size-md"),"body-size-sm":Kl("body-size-sm"),"body-size-xs":Kl("body-size-xs"),"body-lh-baseline":Kl("body-lh-baseline"),"body-lh-md":Kl("body-lh-md"),"body-lh-sm":Kl("body-lh-sm"),"body-lh-xs":Kl("body-lh-xs"),"body-ls-baseline":Kl("body-ls-baseline"),"body-ls-md":Kl("body-ls-md"),"body-ls-sm":Kl("body-ls-sm"),"body-ls-xs":Kl("body-ls-xs"),"form-label-size":Kl("form-label-size"),"form-description-size":Kl("form-description-size"),"form-label-lh":Kl("form-label-lh"),"form-description-lh":Kl("form-description-lh"),"form-label-ls":Kl("form-label-ls"),"form-description-ls":Kl("form-description-ls")},ql=(e,t,n,r,i)=>{const{disableLigatures:o}=i||{};return F`
        font-family: ${Kl("font-family")};
        font-size: ${Kl(e)};
        font-weight: ${Kl(t)};
        line-height: ${Kl(n)};
        letter-spacing: ${Kl(r)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Gl=(e={})=>({"heading-xxl-light":ql("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ql("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ql("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ql("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ql("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ql("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ql("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ql("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ql("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ql("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ql("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ql("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ql("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ql("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ql("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ql("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ql("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ql("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ql("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ql("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ql("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ql("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ql("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ql("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ql("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ql("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ql("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ql("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ql("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ql("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ql("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ql("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ql("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ql("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ql("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ql("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ql("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ql("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ql("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ql("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ql("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ql("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Zl={collections:{default:Gl(),bookingsg:Gl({disableLigatures:!0}),pa:Gl({disableLigatures:!0})},defaultValue:"default"},Ql=e=>t=>{var n;const r=t.theme,i=kl(Zl,null==r?void 0:r.fontScheme),o=(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.font)?Sl(i,e,r.overrides.font):i[e];return"function"==typeof o?o(t):o},Jl={"heading-xxl-light":Ql("heading-xxl-light"),"heading-xxl-regular":Ql("heading-xxl-regular"),"heading-xxl-semibold":Ql("heading-xxl-semibold"),"heading-xxl-bold":Ql("heading-xxl-bold"),"heading-xl-light":Ql("heading-xl-light"),"heading-xl-regular":Ql("heading-xl-regular"),"heading-xl-semibold":Ql("heading-xl-semibold"),"heading-xl-bold":Ql("heading-xl-bold"),"heading-lg-light":Ql("heading-lg-light"),"heading-lg-regular":Ql("heading-lg-regular"),"heading-lg-semibold":Ql("heading-lg-semibold"),"heading-lg-bold":Ql("heading-lg-bold"),"heading-md-light":Ql("heading-md-light"),"heading-md-regular":Ql("heading-md-regular"),"heading-md-semibold":Ql("heading-md-semibold"),"heading-md-bold":Ql("heading-md-bold"),"heading-sm-light":Ql("heading-sm-light"),"heading-sm-regular":Ql("heading-sm-regular"),"heading-sm-semibold":Ql("heading-sm-semibold"),"heading-sm-bold":Ql("heading-sm-bold"),"heading-xs-light":Ql("heading-xs-light"),"heading-xs-regular":Ql("heading-xs-regular"),"heading-xs-semibold":Ql("heading-xs-semibold"),"heading-xs-bold":Ql("heading-xs-bold"),"body-baseline-light":Ql("body-baseline-light"),"body-baseline-regular":Ql("body-baseline-regular"),"body-baseline-semibold":Ql("body-baseline-semibold"),"body-baseline-bold":Ql("body-baseline-bold"),"body-md-light":Ql("body-md-light"),"body-md-regular":Ql("body-md-regular"),"body-md-semibold":Ql("body-md-semibold"),"body-md-bold":Ql("body-md-bold"),"body-sm-light":Ql("body-sm-light"),"body-sm-regular":Ql("body-sm-regular"),"body-sm-semibold":Ql("body-sm-semibold"),"body-sm-bold":Ql("body-sm-bold"),"body-xs-light":Ql("body-xs-light"),"body-xs-regular":Ql("body-xs-regular"),"body-xs-semibold":Ql("body-xs-semibold"),"body-xs-bold":Ql("body-xs-bold"),"form-label":Ql("form-label"),"form-description":Ql("form-description")},ec={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},tc=e=>t=>{var n;const r=t.theme,i=kl(ec,null==r?void 0:r.motionScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.motion)?Sl(i,e,r.overrides.motion):i[e]},nc={"duration-150":tc("duration-150"),"duration-250":tc("duration-250"),"duration-350":tc("duration-350"),"duration-500":tc("duration-500"),"duration-800":tc("duration-800"),"duration-1000":tc("duration-1000"),"ease-default":tc("ease-default"),"ease-standard":tc("ease-standard"),"ease-entrance":tc("ease-entrance"),"ease-exit":tc("ease-exit")},rc={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},ic=e=>t=>{var n;const r=t.theme,i=kl(rc,null==r?void 0:r.radiusScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.radius)?`${Sl(i,e,r.overrides.radius)}px`:`${i[e]}px`},oc={none:ic("none"),xs:ic("xs"),sm:ic("sm"),md:ic("md"),lg:ic("lg"),full:ic("full")},ac={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},sc=e=>t=>{var n;const r=t.theme,i=kl(ac,null==r?void 0:r.spacingScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.spacing)?`${Sl(i,e,r.overrides.spacing)}px`:`${i[e]}px`},lc={"spacing-0":sc("spacing-0"),"spacing-4":sc("spacing-4"),"spacing-8":sc("spacing-8"),"spacing-12":sc("spacing-12"),"spacing-16":sc("spacing-16"),"spacing-20":sc("spacing-20"),"spacing-24":sc("spacing-24"),"spacing-32":sc("spacing-32"),"spacing-40":sc("spacing-40"),"spacing-48":sc("spacing-48"),"spacing-64":sc("spacing-64"),"spacing-72":sc("spacing-72"),"layout-xs":sc("layout-xs"),"layout-sm":sc("layout-sm"),"layout-md":sc("layout-md"),"layout-lg":sc("layout-lg"),"layout-xl":sc("layout-xl"),"layout-xxl":sc("layout-xxl"),"layout-xxxl":sc("layout-xxxl")},cc=Object.assign(Object.assign({},jl),{Primitive:Fl}),dc=Object.assign(Object.assign({},Jl),{Spec:Xl}),uc=nc,hc=Object.assign(Object.assign({},Ol),{Util:Ll}),gc=lc,pc=oc,fc=Wl,mc=Yl,bc={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},vc={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},yc={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},xc={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},wc={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},$c={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa"},Cc=M.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${gc["spacing-24"]};
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

        ${({$highlight:e})=>e&&F`
                background-color: ${cc["bg-hover-neutral"]};
            `}
    }
`,Sc=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=dt(t,["children","focusHighlight","focusOutline","type"]);return e(Cc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),kc=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Dc=(e,t,n=!1)=>F`
        ${dc[`${e}-${t}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Tc=e=>{if(e)return F`
            ${kc(e)}
        `},Oc=(e,t)=>F`
    ${Dc(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,n)=>t?F`
            display: block;
            ${Tc(n)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Tc(n)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${cc.text};
`;var Ec;!function(n){const r=(e,t,n)=>{const r=M(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Oc(t,e)}
        `;return r.displayName=`Typography.${n}`,r};n.HeadingXXL=r("h1","heading-xxl","HeadingXXL"),n.HeadingXL=r("h2","heading-xl","HeadingXL"),n.HeadingLG=r("h3","heading-lg","HeadingLG"),n.HeadingMD=r("h4","heading-md","HeadingMD"),n.HeadingSM=r("h5","heading-sm","HeadingSM"),n.HeadingXS=r("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=M.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Oc(e,t)}
        `;return n.displayName=`Typography.${t}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const o=(n,r)=>{const i=M.a`
            ${e=>F`
                ${Dc(n,e.weight||"regular")}
                color: ${cc.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${cc["text-hover"]};
                }
            `}
        `,o=n=>{var{external:r=!1,children:o}=n,a=dt(n,["external","children"]);return t(i,Object.assign({},a,{children:[o,r&&e(_c,{})]}))};return o.displayName=`Typography.${r}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(Ec||(Ec={}));const _c=M(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Mc=M.div`
    background-color: ${cc.bg} !important;
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${mc.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Fc=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Ic=e=>F`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${uc["duration-250"]} ${uc["ease-standard"]};
`,Ac=M(Ec.HeadingSM)`
    ${e=>Ic(e.$isCollapsed)}
`,Bc=M(Ec.HeadingXS)`
    ${e=>Ic(e.$isCollapsed)}
`,jc=M(Sc)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${uc["duration-250"]} ${uc["ease-default"]};
    margin: auto -1rem auto 0;
`,zc=M(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${cc["icon-primary"]};
`,Rc=M(Vo.div)`
    overflow: hidden;
`,Pc=M.div`
    display: inline-block;
    padding-right: 4rem;

    ${mc.MaxWidth.lg} {
        padding-right: 0;
    }
`;const Lc=g((function(n,r){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=n,h=dt(n,["title","children","expanded","type","collapsible"]);const g=o(null),p=f(ct),[m,v]=a(!d||(null!=l?l:p)),[y,x]=a(!1),w=h["data-testid"]||"accordion-item",$=dn(),C=$.ref;b(r,(()=>Object.assign(g.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||p)}),[p]),u((()=>{y&&v(!!l)}),[l]),u((()=>{x(!0)}),[]);const S={height:m?$.height:0},k=Do(S);return t(Mc,{"data-testid":w,className:h.className,$isCollapsed:m,ref:g,children:[t(Fc,{$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0,children:["string"!=typeof i?i:e("small"===c?Bc:Ac,{weight:"bold","data-testid":`${w}-title`,$isCollapsed:m,children:i}),d&&e(jc,{"data-testid":`${w}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e(zc,{})})]}),e(Rc,{style:y?k:S,$isCollapsed:m,"data-testid":`${w}-expandable-container`,children:e(Pc,{ref:C,id:"content-container",children:s})})]})})),Nc=M.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Hc=I`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Wc=M.div`
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
    animation: ${Hc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Vc=M(Wc)`
    animation-delay: -0.45s;
`,Yc=M(Wc)`
    animation-delay: -0.3s;
`,Uc=M(Wc)`
    animation-delay: -0.15s;
`,Kc=({color:n,className:r,size:i})=>t(Nc,{className:r,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(Wc,{id:"inner1"}),e(Vc,{id:"inner2"}),e(Yc,{id:"inner3"}),e(Uc,{id:"inner4"})]}),Xc=M.button`
    padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
    min-width: 4rem;
    border: ${hc["width-010"]} ${hc.solid} transparent;
    border-radius: ${pc.sm};
    transition: all ${uc["duration-250"]} ${uc["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${cc.Primitive.white};
                    border-color: ${e.$buttonIsDanger?cc["border-error-strong"]:cc["border-primary"]};

                    color: ${e.$buttonIsDanger?cc["text-error"]:cc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${cc["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${cc.bg};
                    border-color: ${cc.border};

                    color: ${e.$buttonIsDanger?cc["text-error"]:cc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${cc["bg-hover-neutral"]};
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?cc["text-error"]:cc["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${cc["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${cc["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${cc["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?cc["bg-error-strong"]:cc["bg-primary"]};

                    ${mc.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${cc["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?cc["bg-error-strong-hover"]:cc["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${dc["body-md-semibold"]}

                    ${mc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${dc["heading-md-semibold"]}

                    ${mc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${dc["heading-xs-semibold"]}

                    ${mc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,qc=M(Kc)`
    margin-right: 0.5rem;
`,Gc=(n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=dt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Xc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(qc,{}),e("span",{children:i})]}))};Gc.displayName="Button.Default";const Zc=(n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=dt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Xc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(qc,{}),e("span",{children:i})]}))};Zc.displayName="Button.Small";const Qc=(n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=dt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Xc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(qc,{}),e("span",{children:i})]}))};Qc.displayName="Button.Large";const Jc={Default:i.forwardRef(Gc),Small:i.forwardRef(Zc),Large:i.forwardRef(Qc)},ed=M.div`
    width: 100%;
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
`,td=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${mc.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return F`
                ${mc.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,nd=M(Ec.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${mc.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return F`
                ${mc.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,rd=M(Jc.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,id=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=a("expand-all"===o),u=e=>{e.preventDefault(),d((e=>!e))};return e(ct.Provider,{value:c,children:t(ed,{className:l,children:[r||i?t(td,{$showTitleInMobile:s,$hasExpandAll:i,children:[r&&e(nd,{weight:"bold",$showInMobile:s,"data-testid":"accordion-title",children:r}),i&&e(rd,{"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button",children:c?"Hide all":"Show all"})]}):null,n]})})}),{Item:Lc}),od=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&dc[`${t}-regular`]}

        strong {
            font-weight: ${dc.Spec["weight-semibold"]};
            ${t&&dc[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${dc.Spec["weight-semibold"]};
            ${t&&dc[`${t}-semibold`]}
            color: ${cc.hyperlink};
            text-decoration: none;

            svg {
                color: ${cc["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${cc["hyperlink-hover"]};

                svg {
                    color: ${cc["icon-hover"]};
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
    `},ad=M.div`
    padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=cc["bg-error"](e),n=cc["border-error"](e);break;case"success":t=cc["bg-success"](e),n=cc["border-success"](e);break;case"warning":default:t=cc["bg-warning"](e),n=cc["border-warning"](e);break;case"info":t=cc["bg-info"](e),n=cc["border-info"](e);break;case"description":t=cc["bg-strong"](e),n=cc["border-strong"](e)}return F`
            background: ${t};
            border-left: ${hc["width-020"]} ${hc.solid}
                ${n};
        `}}

    color: ${cc.text};
    ${e=>"small"===e.$sizeType?od({textSize:"body-sm"}):od({textSize:"body-md"})}
`,sd=M.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${gc["spacing-8"]};

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=cc["icon-error"](e);break;case"success":t=cc["icon-success"](e);break;case"warning":default:t=cc["icon-warning"](e);break;case"info":t=cc["icon-info"](e);break;case"description":t=cc["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,ld=M(Ec.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${dc["body-sm-semibold"]}
                margin-top: ${gc["spacing-4"]};
            `:F`
                ${dc["body-md-semibold"]}
                margin-top: ${gc["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${gc["spacing-4"]};
    }
`,cd=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,dd=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${gc["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ud=M.button`
    ${e=>"small"===e.$sizeType?F`
                ${dc["body-sm-semibold"]}
            `:F`
                ${dc["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${gc["spacing-4"]};
    margin-top: ${gc["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${cc["text-primary"]};
`,hd=M(N)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${uc["duration-350"]} ${uc["ease-standard"]};
`,gd=n=>{var{type:r,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:g}=n,p=dt(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=dn();u((()=>{w()}),[g,y]);const w=()=>{m(!g),v($())},$=()=>!(!y||!g)&&y>g;return t(ad,{className:i,$type:r,$sizeType:c,"data-testid":p["data-testid"],children:[d&&e(sd,{$sizeType:c,$type:r,children:(()=>{if(r&&h)return h;switch(r){case"success":return e(L,{});case"warning":return e(R,{});case"error":return e(z,{});case"info":case"description":return e(P,{});default:return null}})()}),t(cd,{children:[t(dd,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(ld,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||e(j,{})]})):null]}),b&&t(ud,{$sizeType:c,$type:r,type:"button",onClick:()=>m(!f),children:["Show ",f?"less":"more",e(hd,{$expanded:f})]})]})]})},pd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.5d7a5c2e.js")).LottieSpinner}})))),fd=t=>e(bd,Object.assign({},t,{children:e(y,{fallback:e(md,{}),children:e(pd,{})})})),md=()=>e("div",{style:{height:"200px",width:"200px"}}),bd=M.div`
    margin: 0 auto;
    padding: ${gc["spacing-32"]} ${gc["spacing-16"]};
`,vd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.0394acce.js")).LottieLoadingDots}})))),yd=t=>e(wd,Object.assign({},t,{children:e(y,{fallback:e(xd,{}),children:e(vd,{})})})),xd=()=>e("div",{style:{height:"16px",width:"64px"}}),wd=M.div`
    margin: 0 auto;
`,$d=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.c0459a0a.js")).LottieLoadingDotsSpinner}})))),Cd=t=>{var{color:n}=t,r=dt(t,["color"]);const i=A(),o=n||cc["icon-primary"]({theme:i});return e(kd,Object.assign({},r,{children:e(y,{fallback:e(Sd,{}),children:e($d,{color:o})})}))},Sd=()=>e("div",{style:{height:"200px",width:"200px"}}),kd=M.div`
    margin: 0 auto;
`;var Dd,Td={exports:{}};Dd=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,n,null,i)}catch(e){d=e}if(!d||d instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in o)){o[d.message]=!0;var h=l?l():"";r("Failed "+n+" type: "+d.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(c),arrayOf:function(e){return f((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:f((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=y(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return f((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,n,r,i,o){var s=t[n],l=y(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(r,i,o,c,x(d));var u=d(s,c,r,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return f((function(t,n,r,i,l){var c=t[n],d=y(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=o({},t[n],e);for(var h in u){var g=e[h];if(s(e,h)&&"function"!=typeof g)return b(r,i,l,h,x(g));if(!g)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=g(c,h,r,i,l+"."+h,a);if(f)return f}return null}))}};function g(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){var n={},i=0;function o(o,s,l,c,d,h,g){if(c=c||u,h=h||l,g!==a){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return f((function(t,n,r,i,o,a){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[d]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var g=e.type;switch(g){case c:case d:case i:case a:case o:case h:return g;default:var m=g&&g.$$typeof;switch(m){case l:case u:case f:case p:case s:return m;default:return t}}case r:return t}}}var w=c,$=d,C=l,S=s,k=n,D=u,T=i,O=f,E=p,_=r,M=a,F=o,I=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=D,t.Fragment=T,t.Lazy=O,t.Memo=E,t.Portal=_,t.Profiler=M,t.StrictMode=F,t.Suspense=I,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),h=r(r({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),g=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=u();return(0,i.useEffect)((function(){p&&n&&n(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Od=Td.exports=Dd(i);const Ed=M.div`
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    margin-bottom: ${gc["spacing-32"]};
`,_d=M(Vo.div)`
    overflow: hidden;
`,Md=M.div`
    height: max-content;
`,Fd=M.div`
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};
`,Id=M.div`
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]} ${gc["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return F`
                cursor: pointer;
            `}}
`,Ad=M.div`
    ${dc["heading-sm-semibold"]}
    color: ${cc.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-16"]};
`,Bd=M.div`
    display: flex;
`,jd=M.span`
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-40"]};

    ${mc.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return F`
                    color: ${cc["icon-error"]};
                `;case"warning":return F`
                    color: ${cc["icon-warning"]};
                `}}}
`,zd=M(z)`
    height: ${dc.Spec["heading-size-sm"]};
    width: ${dc.Spec["heading-size-sm"]};
`,Rd=M.div`
    display: flex;
    margin-left: auto;
    ${mc.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return F`
                margin-right: ${gc["spacing-40"]};
                ${mc.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${gc["spacing-16"]};
                }
            `}}
`,Pd=M.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${gc["spacing-16"]};
    margin: -${gc["spacing-16"]};
    display: flex;
    align-items: center;

    ${mc.MaxWidth.sm} {
        margin: -${gc["spacing-16"]} -${gc["spacing-16"]} -${gc["spacing-16"]} 0;
        margin-left: auto;
    }
`,Ld=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${uc["duration-250"]} ${uc["ease-default"]};
`,Nd=M(fe)`
    color: ${cc.icon};
    height: ${dc.Spec["heading-size-sm"]};
    width: ${dc.Spec["heading-size-sm"]};
`,Hd=n=>{var{children:r,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=n,h=dt(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[g,p]=a(!o||s),f=dn(),m=f.ref,b=A(),v=fc["sm-max"]({theme:b}),y=Od.useMediaQuery({maxWidth:v}),x=u&&o,w=e=>{e.stopPropagation(),p(!g)},$=Do({height:g?f.height:0}),C=()=>o&&e(Pd,{onClick:w,type:"button","aria-label":g?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e(Ld,{$expanded:g,children:e(Nd,{"aria-hidden":!0})})});return t(Ed,Object.assign({},h,{children:[t(Id,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[t(Bd,{children:[e(Ad,{"data-testid":(null==d?void 0:d.title)||"title",children:i}),(()=>{switch(c){case"error":case"warning":return e(jd,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e(zd,{})});default:return null}})(),y&&C()]}),l&&e(Rd,{$collapsible:o,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),o?e(_d,{style:$,"data-testid":"expandable-container",children:e(Fd,{ref:m,children:r})}):e(Md,{"data-testid":"non-expandable-container",children:e(Fd,{children:r})})]}))};var Wd={exports:{}};Wd.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},C=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!k.u(t)||t,d=k.p(e),g=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?g(1,0):g(31,11);case c:return r?g(1,m):g(0,m+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(r?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=k.p(e),d="set"+(this.$u?"UTC":""),g=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(h,1);f.$d[g](p),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(r,d){var h,g=this;r=Number(r);var p=k.p(d),f=function(e){var t=S(g);return k.w(t.date(t.date()+Math.round(e*r)),g)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return f(1);if(p===l)return f(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,b=this.$d.getTime()+r*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return k.s(o%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,h,g){var p,f=this,m=k.p(h),b=S(r),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(f,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/n;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return g?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),T=D.prototype;return S.prototype=T,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Vd=Uo(Wd.exports),Yd={exports:{}};Yd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],g=d&&d[1];a[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,g=new Date,p=a||(i||o?1:g.getDate()),f=i||g.getFullYear(),m=0;i&&!o||(m=o>0?o-1:g.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(f,m,p,b,v,y,x+60*u.offset*1e3)):n?new Date(Date.UTC(f,m,p,b,v,y,x)):new Date(f,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,p=1;p<=g;p+=1){a[1]=s[p-1];var f=n.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}p===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ud=Uo(Yd.exports),Kd={exports:{}};Kd.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Xd=Uo(Kd.exports),qd={exports:{}};qd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Gd=Uo(qd.exports),Zd={exports:{}};Zd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Qd,Jd,eu=Uo(Zd.exports),tu={exports:{}};tu.exports=(Qd={year:0,month:1,day:2,hour:3,minute:4,second:5},Jd={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Jd[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Jd[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=Qd[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(g).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var nu,ru=Uo(tu.exports);Vd.extend(Xd),Vd.extend(eu),Vd.extend(Gd),Vd.extend(Ud),Vd.extend(ru),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Vd(t).startOf("week");return iu(n).map((e=>ou(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ou(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Vd(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Vd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Vd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Vd(r):void 0,i?Vd(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(nu||(nu={}));const iu=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},ou=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},au=[1,3,5,7,8,10,12],su=[4,6,9,11];var lu,cu,du,uu;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":au.includes(o)?Math.min(i,31).toString():su.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Vd(e,n);return Vd(t,n).diff(r,"minute")},e.toDayjs=e=>e?Vd(e):Vd(),e.addMinutesToTime=(e,t,n="HH:mm")=>Vd(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Vd(e).isSame(Vd(t),n)}(lu||(lu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(e&&n&&n.length&&n.includes(e))||(!(!r||!Vd(e).isBefore(r,"day"))||!(!i||!Vd(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Vd(e).isValid())return e}return""}}(cu||(cu={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(du||(du={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(uu||(uu={}));function hu(e){const t=o(null);return h((()=>{t.current=e}),[e]),p(((...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}const gu=(e,t,n="window",r)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.call(i,e)};return t.addEventListener(e,o,r),()=>{null==t||t.removeEventListener(e,o,r)}}),[e,n])},pu="undefined"!=typeof window?h:u,fu=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function mu({ref:e,formatter:t}){return()=>{var n;const r=e.current;if(!r)return;const i=r.value,o=t(i),a=null!==(n=r.selectionEnd)&&void 0!==n?n:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{r.value=o,r.setSelectionRange(d,d)}}}}const bu=e=>{const t=(e=>{const t=o(e),n=o();return u((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},vu=e=>{const[t,n]=a(e),r=o(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]},yu=M.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${gc["spacing-32"]} 0;

    ${mc.MaxWidth.xl} {
        margin: ${gc["spacing-24"]} 0;
    }

    ${mc.MaxWidth.lg} {
        margin: ${gc["spacing-16"]} 0;
    }
`,xu=M.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${gc["spacing-8"]};
    font-size: ${dc.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${mc.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,wu=M.div`
    width: ${gc["spacing-64"]};
    height: calc(1lh + ${gc["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,F`
            ${mc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,$u=M.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Cu=M(me)`
    margin: ${gc["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${cc["icon-subtle"]};
`,Su=M(Ec.BodyMD)`
    margin: ${gc["spacing-8"]} !important;
`,ku=M(Ec.LinkMD)`
    margin: ${gc["spacing-8"]} !important;
`,Du=r=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=r,u=dt(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,g]=a(!1),[p,f]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),w=o(null),$=A(),C=fc["lg-max"]({theme:$}),S=hu((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=C&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=hu((()=>{const e=window.innerWidth<=C;g(e);const t=w.current,n=x.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return f(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);f(!1),b(!1)}));if(gu("resize",k),gu("scroll",k,w.current),pu((()=>{S(),k()}),[S,k]),dn({onResize:S,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(yu,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(xu,{ref:w,children:i.map(((n,r)=>{let o;return n.children?(o=r!==i.length-1&&n.href?e(ku,Object.assign({},n,{weight:"semibold"})):e(Su,{weight:"semibold",children:n.children}),t($u,{$styleProps:c,children:[o,r<i.length-1&&e(Cu,{})]},r)):null}))})}),h&&(()=>{let r;return r=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(n,{children:[p&&v&&e(wu,{$backgroundColor:r.left,$position:"left"}),m&&y&&e(wu,{$backgroundColor:r.right,$position:"right"})]})})()]}))},Tu=M(Xc)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Ou=(n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=n,u=dt(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Tu,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(Kc,{}):l,e("span",{children:i})]}))};Ou.displayName="ButtonWithIcon.Default";const Eu=(n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=n,u=dt(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Tu,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(Kc,{}):l,e("span",{children:i})]}))};Eu.displayName="ButtonWithIcon.Small";const _u={Default:i.forwardRef(Ou),Small:i.forwardRef(Eu)},Mu=M.div`
    --vertical-inset: ${gc["spacing-24"]};
    --horizontal-inset: ${gc["spacing-20"]};
    --header-bottom-spacing: ${gc["spacing-4"]};

    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${mc.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Fu=F`
    color: ${cc.icon};
    height: 1rem;
    width: 1rem;
`,Iu=M(be)`
    ${Fu}
`,Au=M(me)`
    ${Fu}
`,Bu=M(fe)`
    ${Fu}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ju=M.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,zu=M.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ru=M.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Pu=M.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${cc.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Lu=M.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Nu=M.div`
    display: flex;
`,Hu=M.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${Bu} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Wu=M.span`
    ${dc["body-md-regular"]}
    color: ${cc.text};
`,Vu=M.div`
    display: flex;
`,Yu=M(Sc)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Uu=M.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ku=M(Jc.Small)`
    flex: 1;
`,Xu=M.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,qu=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${pc.md};
    margin: 0 0.5rem;
    transition: ${uc["duration-150"]} ${uc["ease-default"]};

    // default styles
    ${dc["body-md-regular"]}
    border-radius: ${pc.md};
    border: ${hc["width-010"]} ${hc.solid} transparent;
    background-clip: border-box;
    color: ${cc.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:n})=>"selected-month"===e?F`
                background: ${cc["bg-selected"]};
                border-color: ${cc["border-selected"]};
                color: ${cc["text-selected"]};
                font-weight: ${dc.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${cc["bg-selected-hover"]};
                        border-color: ${cc["border-selected-hover"]};
                        color: ${cc["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${cc["text-primary"]};
                font-weight: ${dc.Spec["weight-semibold"]};
            `:n?F`
                color: ${cc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${cc["bg-selected-hover"]};
                    border-color: ${cc["border-selected-hover"]};
                    color: ${cc["text-selected-hover"]};
                    font-weight: ${dc.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${cc["bg-hover"]};
                color: ${cc["text-hover"]};
                font-weight: ${dc.Spec["weight-semibold"]};
            }
        `}}
`,Gu=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onMonthSelect:d})=>{const u=m((()=>nu.generateMonths(Vd(t))),[t]),h=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&a,o="end"===n&&r&&e.isBefore(r,"month")&&a;return!(!t&&!o)},g=e=>{const t=e.format("MMMM"),n=(r=e,!nu.isWithinRange(r,s?Vd(s):void 0,l?Vd(l):void 0,"month"));var r;const i=o.isSame(e,"month")?"selected-month":Vd().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||c,month:t,variant:i}};return u.length?e(Xu,{children:u.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:o}=g(t);return e(qu,{$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(t,!r),children:o},o)}))}):null},Zu=M.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Qu=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${uc["duration-150"]} ${uc["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${dc["body-md-regular"]}
    border-radius: ${pc.md};
    border: ${hc["width-010"]} ${hc.solid} transparent;
    background-clip: border-box;
    color: ${cc.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:n})=>"selected-year"===e?F`
                background: ${cc["bg-selected"]};
                border-color: ${cc["border-selected"]};
                color: ${cc["text-selected"]};
                font-weight: ${dc.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${cc["bg-selected-hover"]};
                        border-color: ${cc["border-selected-hover"]};
                        color: ${cc["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${cc["text-primary"]};
                font-weight: ${dc.Spec["weight-semibold"]};
            `:"other-decade"===e||n?F`
                color: ${cc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${cc["bg-selected-hover"]};
                    border-color: ${cc["border-selected-hover"]};
                    color: ${cc["text-selected-hover"]};
                    font-weight: ${dc.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${cc["bg-hover"]};
                color: ${cc["text-hover"]};
                font-weight: ${dc.Spec["weight-semibold"]};
            }
        `}}
`,Ju=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onYearSelect:d})=>{const u=m((()=>nu.generateDecadeOfYears(Vd(t))),[t]),h=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&a,o="end"===n&&r&&e.isBefore(r,"year")&&a;return!(!t&&!o)},g=e=>{const t=[0,11].includes(u.indexOf(e)),n=e.year(),r=(i=e,!nu.isWithinRange(i,s?Vd(s):void 0,l?Vd(l):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Vd().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||c,year:n,variant:a}};return u.length?e(Zu,{children:u.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:o}=g(t);return e(Qu,{$variant:i,$disabledDisplay:n,$interactive:!!r,onClick:()=>((e,t)=>{t||d(e)})(t,!r),children:o},o)}))}):null},eh=i.forwardRef(((r,i)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:g,selectedEndDate:p,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:T,getMonthHeaderLabel:O,getYearHeaderLabel:E}=r,_=dt(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,F]=a(lu.toDayjs(l)),[I,A]=a(lu.toDayjs(l)),[B,j]=a("default"),z=o(null),R=o(null),P=o(null);b(i,(()=>({defaultView(){j("default")},resetView(){const e=lu.toDayjs(l);F(e),A(e),j("default")},setCalendarDate(e){const t=lu.toDayjs(e);F(t),A(t)}}))),u((()=>{const e=lu.toDayjs(l);F(e),A(e)}),[l]),u((()=>{U(I)}),[I]);const L=()=>{var e;"month-options"!==B?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),F(I))},N=()=>{"default"!==B?(j("default"),F(I)):j("year-options")},H=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(M):M.subtract(1,"month");switch(B){case"default":A(t),F(t);break;case"month-options":F((e=>e.subtract(1,"year")));break;case"year-options":F((e=>e.subtract(10,"year")))}},W=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=k?k(M):M.add(1,"month");switch(B){case"default":A(t),F(t);break;case"month-options":F((e=>e.add(1,"year")));break;case"year-options":F((e=>e.add(10,"year")))}},V=e=>{F(e),A(e),x||j("default")},Y=()=>{const e=lu.toDayjs(l);F(e),A(e),"default"===B?K("reset"):j("default")},U=e=>{y&&y(e)},K=e=>{$&&$(e)},X=()=>{if(!c||v)return!1;const e=Vd(c);return"month-options"===B?!nu.isPreviousYearWithinRange(M,e):"year-options"===B?!nu.isPreviousDecadeWithinRange(M,e):D?D(M):!nu.isPreviousMonthWithinRange(M,e)},q=()=>{if(!d||v)return!1;const e=Vd(d);return"month-options"===B?!nu.isNextYearWithinRange(M,e):"year-options"===B?!nu.isNextDecadeWithinRange(M,e):T?T(M):!nu.isNextMonthWithinRange(M,e)},G=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=nu.getStartEndDecade(M);return`${e} to ${t}`}return E?E(M):M.format("YYYY")},Z=()=>{const r=O?O(M):M.format("MMM");return t(n,{children:[t(Hu,{type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:L,children:[e(Wu,{children:r}),e(Bu,{})]}),t(Hu,{type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:N,children:[e(Wu,{children:G()}),e(Bu,{})]})]})},Q=()=>{switch(B){case"month-options":return e(Gu,{calendarDate:M,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:I,isNewSelection:!!f,onMonthSelect:V,allowDisabledSelection:v});case"year-options":return e(Ju,{calendarDate:M,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:I,isNewSelection:!!f,onYearSelect:V,allowDisabledSelection:v});default:return null}};return t(ju,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},_,{children:[C&&t(Lu,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Nu,{children:Z()}),t(Vu,{children:[e(Yu,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:H,children:e(Iu,{})}),e(Yu,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:W,children:e(Au,{})})]})]}),e(zu,{children:(()=>{const r="function"==typeof s?s({calendarDate:I,currentView:B}):s;return t(n,m?{children:["default"===B&&r,Q()]}:{children:[e(Ru,{children:r}),e(Pu,{$visible:"default"!==B,children:Q()})]})})()}),(()=>{if(!x)return;const n=!!("default"===B)&&w;return t(Uu,{children:[e(Ku,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Y,children:"Cancel"}),e(Ku,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{n||(F(I),"default"===B?K("confirmed"):j("default"))},disabled:n,children:"Done"})]})})()]}))})),th=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,nh=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${dc["body-sm-semibold"]};
    color: ${cc.text};
`,rh=M.div`
    grid-column: 1 / -1;
    display: flex;
`,ih=e=>{let t=cc.bg,n="transparent";switch(e.$type){case"hover-subtle":t=cc["bg-hover"],n=cc["bg-hover"];break;case"hover":t=cc["bg-hover-strong"],n=cc["bg-hover-strong"];break;case"hover-outline":t=cc["bg-hover-subtle"],n=cc["border-hover"];break;case"selected-outline":t=cc["bg-selected"],n=cc["border-selected"];break;case"selected-outline-subtle":t=cc["bg-selected"],n=cc["border-selected-subtle"];break;case"selected-hover":t=cc["bg-selected-hover"];break;case"selected-hover-outline":t=cc["bg-selected-hover"],n=cc["border-selected-hover"]}return{color:t,borderColor:n}},oh=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,ah=M.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${uc["duration-150"]} ${uc["ease-default"]};
    border: ${hc["width-010"]} ${hc.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:n}=ih(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${n};
            border-bottom-color: ${n};
        `}}
`,sh=M(ah)`
    left: 0;
`,lh=M(ah)`
    right: 0;
`,ch=M.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${uc["duration-150"]} ${uc["ease-default"]};

    border: ${hc["width-010"]} ${hc.solid} transparent;
    border-radius: ${pc.md};

    ${e=>{if(e.$type){const{color:t,borderColor:n}=ih(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${n};
            `}}}
`,dh=M(ch)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,uh=M(ch)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,hh=M.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${dc["body-md-regular"]}
    transition: ${uc["duration-150"]} ${uc["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"hidden"===n?F`
                    visibility: hidden;
                `:F`
                color: ${cc["text-disabled-subtlest"]};
            `;switch(n){case"selected":return F`
                    font-weight: ${dc.Spec["weight-semibold"]};
                    color: ${cc["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${dc.Spec["weight-semibold"]};
                    color: ${cc["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${dc.Spec["weight-semibold"]};
                    color: ${cc["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${dc.Spec["weight-semibold"]};
                    color: ${cc["text-hover"]};
                `;case"unavailable":return F`
                    color: ${cc["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${cc.text};
                `}}}
`,gh=M.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,ph=({bgLeft:n,bgRight:r,circleLeft:i,circleRight:o,labelType:a,disabled:s,interactive:l,currentDateIndicator:c,date:d,onSelect:u,onHover:h,onHoverEnd:g})=>{const p=Vd().isSame(d,"day");return t(oh,{children:[e(sh,{$type:n}),e(dh,{$type:i}),e(lh,{$type:r}),e(uh,{$type:o}),t(hh,{$type:a,$disabled:s,$interactive:l,onClick:()=>{u(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{g&&g(d)},children:[d.date(),c&&p&&e(gh,{$disabled:s})]})]})},fh=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:g,onHover:p})=>{const f=nu.isDisabledDay(t,c,s,l),m=!f||d,b=()=>{const e=Vd(a),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===o&&i&&t&&(r&&n?(c=a,d=i):(s=a,l=r||i)),"end"===o&&r&&n&&(i&&t?(c=r,d=a):(s=i||r,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:n,disabled:f,interactive:m,currentDateIndicator:!0,onSelect:()=>{g(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e(ph,Object.assign({},v,(()=>{const e={};if(n.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(Vd().isSame(t,"day")&&!f)e.labelType="current";else if(u){const n="end"===o&&r&&t.isBefore(r),a="start"===o&&i&&t.isAfter(i);(n||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(r,"day"),a=t.isSame(i,"day");return h&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},n=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(n){const n=t.isSame(r,"day"),o=t.isSame(i,"day");n||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const n=t.isSame(o,"day"),r=t.isSame(s,"day");n||(e.labelType="hover",e.bgLeft="hover-outline"),r||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&n&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Vd.extend(Xd);const mh=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:p})=>{const f=m((()=>nu.generateDays(n)),[n]),[b,v]=a(""),y=(e,t)=>{t&&!g||l(e)},x=(e,t)=>{t&&!g||(v(e),c(e))},w=()=>{v(""),c("")};return t(th,{"data-testid":"calendar-content",children:[f[0].map(((t,n)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${n}`))),f.map(((t,a)=>e(rh,{onMouseLeave:w,children:t.map(((t,a)=>e(fh,{date:t,calendarDate:n,startDate:o,endDate:s,hoverDate:b,currentFocus:r,minDate:u,maxDate:h,disabledDates:i,allowDisabledSelection:g,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:y,onHover:x},`day-${a}`)))},a)))]})},bh=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const h=nu.isDisabledDay(t,s,o,a),g=!h||l,{start:p,end:f}=r?nu.getFixedRangeStartEnd(lu.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:b}=i?nu.getFixedRangeStartEnd(lu.toDayjs(i),c):{start:void 0,end:void 0},v=!!r&&t.isBetween(p,f,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(f,"day")||y&&t.isSame(b,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:n,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(ph,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Vd().isSame(t,"day")&&!h&&(e.labelType="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover",n===m,n===b),v&&$(e,"selected-outline",n===p,n===f),v&&y&&($(e,"selected-hover-outline",x,w),n===m&&n!==p&&(e.circleLeft="selected-hover")),e})()))},vh=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>nu.generateDays(n)),[n]),[g,p]=a(""),f=(e,t)=>{t&&!d||(o(e),e&&!Vd(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(th,{"data-testid":"calendar-content",children:[h[0].map(((t,n)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${n}`))),h.map(((t,o)=>e(rh,{onMouseLeave:v,children:t.map(((t,o)=>e(bh,{date:t,calendarDate:n,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:f,onHover:b,numberOfDays:u},`day-${o}`)))},o)))]})},yh=M.div`
    width: 100%;
    background: ${cc.bg};
`,xh=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const h=nu.isDisabledDay(t,s,o,a),g=!h||l,p={date:t,calendarDate:n,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(ph,Object.assign({},p,(()=>{const e={};n.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Vd().isSame(t,"day")&&!h&&(e.labelType="current");const o=t.isSame(r,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Vd.extend(Xd);const wh=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const h=m((()=>nu.generateDays(n)),[n]),[g,p]=a(""),f=(e,t)=>{t&&!d||o(e)},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(th,{"data-testid":"calendar-content",children:[h[0].map(((t,n)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${n}`))),h.map(((t,o)=>e(rh,{onMouseLeave:v,children:t.map(((t,o)=>e(xh,{date:t,calendarDate:n,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:f,onHover:b},`day-${o}`)))},o)))]})},$h=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=nu.isDisabledDay(t,s,o,a),h=!u||l,{start:g,end:p}=nu.getWeekStartEnd(lu.toDayjs(r)),{start:f,end:m}=nu.getWeekStartEnd(lu.toDayjs(i)),b=r&&t.isBetween(g,p,"day","[]"),v=i&&t.isBetween(f,m,"day","[]"),y=b&&t.isSame(g)||v&&t.isSame(f),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:n,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(ph,Object.assign({},w,(()=>{const e={};return n.month()!==t.month()?e.labelType="unavailable":Vd().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,n;return b&&v?(t="selected-hover-outline",n="selected-hover"):b?(t="selected-outline",n="selected"):v&&(t="hover",n="hover"),t&&(e.labelType=n,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Ch=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>nu.generateDays(n)),[n]),[h,g]=a(""),p=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");o(n),e&&!Vd(e).isSame(n,"month")&&g("")},f=(e,t)=>{t&&!d||(g(e),s(e))},b=()=>{g(""),s("")};return t(th,{"data-testid":"calendar-content",children:[u[0].map(((t,n)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${n}`))),u.map(((t,o)=>e(rh,{onMouseLeave:b,children:t.map(((t,o)=>e($h,{date:t,calendarDate:n,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:p,onHover:f},`day-${o}`)))},o)))]})},Sh=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:g,allowDisabledSelection:p,selectWithinRange:f=!0,initialCalendarDate:m,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=o(null),$=o(void 0);b(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const C=e=>{var t;const n=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(n),k(n)},S=e=>{D(e)},k=e=>{r&&r(e)},D=e=>{i&&i(e)},T=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e(yh,{children:e(eh,{ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:g,selectWithinRange:f,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||T(e),$.current=e},initialCalendarDate:m,children:({calendarDate:n})=>(n=>{switch(u){case"week":return e(Ch,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:C,onHover:S});case"fixed-range":return e(vh,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:C,onHover:S,numberOfDays:v});case"single":return e(wh,{calendarDate:n,disabledDates:t,selectedDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:C,onHover:S});default:return e(mh,{calendarDate:n,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:f,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:C,onHover:S})}})(n)})})})),kh=i.forwardRef(((t,n)=>{var{width:r}=t,i=dt(t,["width"]);return e(Mu,{$width:r,"data-testid":"calendar-dropdown",children:e(Sh,Object.assign({ref:n},i))})})),Dh=t=>{var{className:n,styleType:r="bordered",value:i,onSelect:o}=t,s=dt(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(Th,{className:n,$hasBorder:"bordered"===r,children:e(Sh,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))})},Th=M.div`
    --vertical-inset: ${gc["spacing-24"]};
    --horizontal-inset: ${gc["spacing-32"]};
    --header-bottom-spacing: ${gc["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return F`
                border: ${hc["width-010"]} ${hc.solid} ${cc.border};
                border-radius: ${pc.lg};
                overflow: hidden;
            `}}
`,Oh=M.div`
    border-radius: ${pc.md};
    background: ${cc.bg};
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Eh=t=>{var{children:n}=t,r=dt(t,["children"]);const i=r["data-testid"]||"card";return e(Oh,Object.assign({},r,{"data-testid":i,children:"string"==typeof n?e(Ec.BodyBL,{children:n}):n}))},_h=I`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Mh=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>F`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Fh=F`
    animation: ${uc["duration-150"]} ${uc["ease-default"]} ${_h};
    width: 100%;
    height: 100%;
    transition: color ${uc["duration-150"]} ${uc["ease-default"]};
`,Ih=M(H)`
    ${Fh}
    color: ${cc["icon-primary-subtlest"]};
`,Ah=M(W)`
    ${Fh}
    color: ${cc["icon-disabled-subtle"]};
`,Bh=M(V)`
    ${Fh}
    color: ${e=>e.$disabled?cc["icon-disabled-subtle"](e):cc["icon-selected"](e)};
`,jh=M(Y)`
    ${Fh}
    color: ${e=>e.$disabled?cc["icon-disabled-subtle"](e):cc["icon-selected"](e)};
`,zh=M.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Ih},
        &:hover
        + ${Bh},
        &:hover
        + ${jh} {
        color: ${e=>!e.disabled&&cc["icon-hover"](e)};
    }
`,Rh=n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=n,h=dt(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=o(null);u((()=>{g.current&&(g.current.indeterminate=null!=s&&s)}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Mh,{className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||i||a),children:[e(zh,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:g,tabIndex:-1,onChange:p,disabled:a},h)),s?e(jh,{$disabled:a,"data-testid":"indeterminate"}):i?e(Bh,{$disabled:a,"data-testid":"checkmark"}):a?e(Ah,{"data-testid":"empty-disabled-checkbox"}):e(Ih,{$disabled:a,"data-testid":"empty-checkbox"})]})};var Ph=Qo,Lh=/\s/;var Nh=function(e){for(var t=e.length;t--&&Lh.test(e.charAt(t)););return t},Hh=/^\s+/;var Wh=function(e){return e?e.slice(0,Nh(e)+1).replace(Hh,""):e},Vh=xa,Yh=pa,Uh=/^[-+]0x[0-9a-f]+$/i,Kh=/^0b[01]+$/i,Xh=/^0o[0-7]+$/i,qh=parseInt;var Gh=function(e){if("number"==typeof e)return e;if(Yh(e))return NaN;if(Vh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Vh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Wh(e);var n=Kh.test(e);return n||Xh.test(e)?qh(e.slice(2),n?2:8):Uh.test(e)?NaN:+e},Zh=xa,Qh=function(){return Ph.Date.now()},Jh=Gh,eg=Math.max,tg=Math.min;var ng=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function f(){var e=Qh();if(p(e))return m(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?tg(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?g(e):(r=i=void 0,a)}function b(){var e=Qh(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Jh(t)||0,Zh(n)&&(d=!!n.leading,o=(u="maxWait"in n)?eg(Jh(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Qh())},b},rg=Uo(ng),ig=ng,og=xa;var ag,sg,lg=Uo((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return og(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ig(e,t,{leading:r,maxWait:t,trailing:i})})),cg=new Map,dg=new WeakMap,ug=0,hg=void 0;function gg(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(dg.has(e)||(ug+=1,dg.set(e,ug.toString())),dg.get(e)):"0"}(e.root):e[t]}`)).toString()}function pg(e,t,n={},r=hg){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=gg(e);let n=cg.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},cg.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),cg.delete(i))}}function fg({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,g]=r.useState(null),p=r.useRef(),[f,m]=r.useState({inView:!!l,entry:void 0});p.current=d,r.useEffect((()=>{if(s||!h)return;let r;return r=pg(h,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,n,c,t]);const b=null==(u=f.entry)?void 0:u.target,v=r.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[g,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(ag||(ag={})),function(e){e.roundToNearestHour=(e,t)=>{const n=Vd(e,"HH:mm");return(0===n.minute()?n:t?n.minute(0).add(1,"hour"):n.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=Vd(e,r),o=Vd(t,r);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(n)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:ag.AM};if(!t)return n;try{if("24hr"===e){const r=vg(t,e);n.minute=uu.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=ag.AM,n.hour=0===i?"12":uu.padValue(i.toString())):(n.period=ag.PM,n.hour=12===i?i.toString():uu.padValue((i-12).toString()))}else{const{hour:r,minute:i,period:o=""}=vg(t,e);n.hour=uu.padValue(r),n.minute=uu.padValue(i),n.period="am"===o.toLowerCase()?ag.AM:ag.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?uu.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return uu.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?uu.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?uu.padValue(r.toString()):13===r?uu.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===ag.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return uu.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const{hour:n,minute:r,period:i=""}=vg(e,t),o=uu.padValue(n);let a=`${o}:${uu.padValue(r)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&o<12&&(o+=12),"am"===n&&12===o&&(o=0),yg(o,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const o=[];let a=0,s=1440-t;for(r&&(a=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const r=a%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=yg(e,r,t);o.push(n)}else{const t=yg(e,r);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const o=parseInt(r[3]||"0",10);let a=r[4];if(void 0===r[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),yg(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return yg(i,o,a)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",o=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<o)o=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&12!==o&&(o+=12),"am"===n&&12===o&&(o=0),60*o+i}}(sg||(sg={}));const mg=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},bg=e=>{const t=parseInt(e);return t>=0&&t<=59},vg=(e,t)=>{const n=e?e.split(":"):[],r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!mg(n[0],t)||!bg(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!mg(n[0],t)||!bg(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},yg=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,xg=M.div`
    width: 100%;
`,wg=M.div`
    ${dc["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
    border-radius: ${pc.sm};
    color: ${cc["text-primary"]};
    border: ${hc["width-010"]} ${hc.solid};
    border-color: ${cc["border-primary"]};
    background-color: ${cc.bg};

    ${mc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]};
    }

    ${e=>{if(e.$warn)return F`
                color: ${cc["text-error"]};
                border-color: ${cc["border-error"]};
            `}}
`,$g=M(wg)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Cg=M(wg)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:i}=e;return F`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}

            box-shadow: 0px 0px 4px 1px rgb(from ${i?cc["border-error"]:cc["border-primary-subtle"]} r g b / 50%);

            ${mc.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,Sg=M.div`
    font-weight: ${dc.Spec["weight-bold"]};
    margin-left: ${gc["spacing-8"]};
    margin-right: ${gc["spacing-24"]};

    ${mc.MaxWidth.sm} {
        margin-right: ${gc["spacing-48"]};
    }
`,kg=M.div`
    font-weight: ${dc.Spec["weight-semibold"]};
    margin-left: auto;
`,Dg=M(U)`
    color: ${e=>e.$warn?cc["icon-error"]:cc["icon-primary"]};
`,Tg=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),Og=e=>Math.max(Math.round(e/1e3),0),Eg=r=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:g,show:p,fixed:f=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=r,x=dt(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=o(null),$=o(!1),[C,S]=a(0),[k,D]=a(0),[T,O]=a(0),[E,_]=a(!1),[M]=((e,t,n)=>{const[r,i]=a((()=>{const n=Tg(e,t)-Date.now();return Og(n)}));u((()=>{if(!n)return;const r=Tg(e,t),i=o(r);return()=>clearTimeout(i)}),[t,n,e]);const o=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,o=Og(n);if(i(o),0!==o)return setTimeout(t,r>500?r:r+1e3)};return t()};return[r]})(l,c,E),{ref:F,inView:I}=fg({threshold:1,rootMargin:-1*C+"px 0px 0px 0px",initialInView:!0}),B=!f||I,j="number"==typeof d&&M<=d,z=A(),R=fc["sm-max"]({theme:z}),P=Od.useMediaQuery({maxWidth:R});u((()=>{_(p)}),[p]),u((()=>{0===M?W():"number"==typeof d&&M<=d&&(N(),H())}),[M]),u((()=>{const e=function(){var e,t;const n=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,r=null!==(t=null==g?void 0:g.top)&&void 0!==t?t:80,i=P?r:n;return i}();S(e)}),[P,null==h?void 0:h.top,null==g?void 0:g.top]),u((()=>{if(w.current){const e=lg(L,300);return L(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,p]);const L=()=>{if(!w.current)return;const e=w.current.getBoundingClientRect();O(e.x),D(e.right)},N=()=>{y&&y(M)},H=()=>{v&&!$.current&&($.current=!0,v())},W=()=>{_(!1),b&&b()};const V=()=>{const{minutes:r,seconds:i}=sg.toMinutesSeconds(M),o=1!==r?"mins":"min",a=1!==i?"secs":"sec";return t(n,{children:[e(Dg,{$warn:j}),e(Sg,{children:"Time left:"}),t(kg,{children:[r," ",o," ",String(i).padStart(2,"0")," ",a]})]})};return E||0===M?t(xg,Object.assign({className:i},x,{children:[e("div",{ref:F}),e($g,{"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:B?void 0:"",$visible:B,$warn:j,children:V()}),w.current&&!B&&(()=>{var t,n;const r=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?T:void 0,i=null!==(n=null==h?void 0:h.right)&&void 0!==n?n:"right"===s?Math.floor(document.body.clientWidth-k):void 0;return e(Cg,{"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:j,$top:C,$left:r,$right:i,children:V()})})()]})):e(n,{})},_g=r=>i=>{switch(r){case"maintenance":return t(n,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const r=i,o=Math.floor(r.secondsLeft/60),a=r.secondsLeft%60;return t(n,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var Mg;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:n,md:r,lg:i,width:o,height:a}=e;return{srcSet:`${n} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${fc["sm-max"]({theme:t})}px) 400px, (max-width: ${fc["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}}}(Mg||(Mg={}));const{imgAttributeHelper:Fg}=Mg,Ig={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Ag={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Bg=Object.assign(Object.assign({},Ig),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),jg=Object.assign(Object.assign({},Ig),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),zg=(e,t)=>new Map([["400",{img:Fg(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Fg(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Fg(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Fg(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Fg(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Fg(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Fg(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Fg(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Fg(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Fg(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Fg(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Fg(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Fg(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:_g("inactivity")}],["maintenance",{img:Fg(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:_g("maintenance")}],["no-item-found",{img:Fg(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Fg(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Fg(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Fg(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Fg(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Fg(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Rg=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Pg=M.img`
    position: relative;
    width: 400px;
    height: auto;

    ${mc.MaxWidth.sm} {
        width: 320px;
    }

    ${mc.MaxWidth.xs} {
        width: 288px;
    }

    ${mc.MaxWidth.xxs} {
        width: 240px;
    }
`,Lg=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,Ng=M(Ec.HeadingMD)`
    margin: ${gc["spacing-32"]} 0 ${gc["spacing-16"]};
    text-align: center;
`,Hg=M.div`
    color: ${cc.text};
    text-align: center;

    ${od({textSize:"body-baseline"})}
`,Wg=M(Jc.Default)`
    margin: ${gc["spacing-32"]} auto 0;
    width: 21rem;

    ${mc.MaxWidth.sm} {
        width: 100%;
    }
`,Vg=n=>{var{type:r,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=n,u=dt(n,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=A(),g=((e,t,n)=>{switch(t){case"bookingsg":return zg(Ag,n).get(e);case"ccube":return zg(Bg,n).get(e);case"mylegacy":return zg(jg,n).get(e);default:return zg(Ig,n).get(e)}})(r,d||(h||bc).resourceScheme,h),p=u["data-testid"]||"error-display",f=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==g?void 0:g.renderDescription)||void 0===e?void 0:e.call(g,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==g?void 0:g.renderDescription)||void 0===t?void 0:t.call(g,e):a||void 0}default:return a||void 0}};if(!g)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},g),i&&{img:i}),o&&{title:o}),f()&&{description:f()});return t(Rg,Object.assign({},u,{"data-testid":p,children:[e(Pg,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Lg,{children:[m.title&&("string"==typeof m.title?e(Ng,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e(Hg,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(Wg,Object.assign({},t))})()]}))},Yg=F`
    outline-offset: -1px;
    outline: ${hc["width-020"]} ${hc.solid} ${cc["border-focus"]};
`,Ug=F`
    outline-color: ${cc["border-focus"]};
`,Kg=F`
    outline-color: ${cc["border-disabled"]};
`,Xg=F`
    outline-color: ${cc["border-error-focus"]};
`,qg=M.div`
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    background: ${cc.bg};

    :focus-within {
        ${Yg}
    }
    ${e=>e.$focused&&Yg}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ug}
                }
                ${e.$focused&&Ug}
            `:e.$disabled?F`
                background: ${cc["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Kg}
                }
                ${e.$focused&&Kg}
            `:e.$error?F`
                border-color: ${cc["border-error"]};

                :focus-within {
                    ${Xg}
                }
                ${e.$focused&&Xg}
            `:void 0}
`,Gg=M(qg)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${gc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Zg=M.input`
    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}
    color: ${cc.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${cc["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${cc["text-subtler"]};
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
`,Qg=M.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${hc["width-010"]} ${hc.solid}
            ${cc["border-focus"]};
        border-radius: ${pc.sm};
    }
`,Jg=cc.border,ep=cc.text,tp=M.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${hc["width-010"]} ${hc.solid} ${Jg};
    border-radius: ${pc.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,np=M.div`
    flex: 1;
`,rp=M.table`
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

    ${e=>{if(e.$stickyHeader)return F`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,ip=M.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${hc["width-010"]} ${hc.solid} ${Jg}`:"none"};
        }
    }
`,op=M.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return F`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return F`
                position: sticky;
                left: 0;
            `}};
`,ap=M(Qg)`
    ${dc["body-md-semibold"]}
    cursor: pointer;
    color: ${cc["text-primary"]};
    transition: ${uc["duration-150"]} ${uc["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${cc["text-hover"]};
    }
`,sp=M.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&F`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${pc.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${hc["width-010"]} ${hc.solid} ${Jg};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${hc["width-010"]} ${hc.solid} ${Jg};
    border-radius: 0 0 ${pc.sm} ${pc.sm};
    background-color: ${cc["bg-selected"]};
    transition: all 300ms ease;
`,lp=M.tr`
    background-color: ${cc["bg-stronger"]};
    height: 6rem;
    border-bottom: ${hc["width-010"]} ${hc.solid} ${Jg};
`,cp=M.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${ep};
    border-bottom: ${hc["width-010"]} ${hc.solid} ${Jg};
    ${e=>{if(e.$isCheckbox)return F`
                width: 4rem;
            `}};
`,dp=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${ep};
        margin-left: 0.5rem;
    }
`,up=M.tr`
    background-color: ${e=>e.$isSelected?F`
                ${cc["bg-selected"]};
            `:e.$alternating?F`
                ${cc["bg-strong"]};
            `:F`
                ${cc.bg};
            `};
    border-top: ${hc["width-010"]} ${hc.solid} ${Jg};
    &:hover {
        ${e=>{if(e.$isSelectable)return F`
                    background-color: ${cc["bg-hover-strong"]};
                `}};
    }
`,hp=M.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${ep};
    border-bottom: ${hc["width-010"]} ${hc.solid} ${Jg};
`,gp=M(Ec.BodyBL)`
    ${kc(2)}
    text-overflow: ellipsis;
`,pp=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,fp=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,mp=M(Ec.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,bp=M.td`
    padding: 4rem 0;
`,vp=r=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:g="success",enableMultiSelect:f,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:C,onHeaderClick:S,onSelect:k,onSelectAll:D,onClearSelectionClick:T}=r,O=dt(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const E=o(null),_=o(null),M=o(null),F=o(null),I=o(null),[A,B]=a(!1),[j,z]=a(!1),[R,P]=a(!1),[L,N]=a(!1),[H,W]=a(!1),{ref:V,inView:Y}=fg(),U=p((()=>{if(!I.current||!F.current)return;const e=I.current.scrollHeight>I.current.clientHeight;B(e),e?F.current.style.transform="translateY(0)":ne()}),[]);u((()=>{U()}),[]),dn({onResize:U});gu("scroll",(()=>{requestAnimationFrame((()=>{A?te():ne()})),I.current&&P(I.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{re()}),[l]);const q=()=>(null==m?void 0:m.length)===(null==l?void 0:l.length),G=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(O["data-testid"])return`${O["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!I.current)return;const e=I.current.getBoundingClientRect();N(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},ne=()=>{if(!(E.current&&_.current&&I.current&&F.current&&M.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=E.current.getBoundingClientRect().height-M.current.clientHeight-32,r=Math.min(t,n);F.current.style.transform=`translateY(-${r}px)`}else F.current.style.transform="translateY(0)"},re=()=>{E.current&&I.current&&W(E.current.clientHeight+(v?56:0)<I.current.clientHeight)},ie=n=>{const{fieldKey:r,label:i,clickable:o=!1,style:a}="string"==typeof n?{fieldKey:n,label:n,style:void 0}:n;return e(cp,{"data-testid":J(`header-${r}`),$clickable:o,onClick:()=>o&&(null==S?void 0:S(r)),style:a,$isCheckbox:!1,children:t(dp,{children:["string"==typeof i?e(Ec.BodyBL,{weight:"bold",children:i}):i,oe(r)]})},r)},oe=t=>{const r=null==d?void 0:d[t];return r?"asc"===r?e(K,{"data-testid":J(`header-${t}-arrowup`)}):e(X,{"data-testid":J(`header-${t}-arrowdown`)}):e(n,{})},ae=()=>e(cp,{"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(pp,{children:y&&e(Rh,{checked:q(),indeterminate:!!m&&0!==m.length&&!q(),onClick:()=>{D&&D(q())}})})}),se=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=n.id.toString(),a=n[i],s=`${o}-${i}`;return e(hp,{"data-testid":J(`row-${s}`),style:r,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e(gp,{children:a}):"function"==typeof a?a(n,{isSelected:G(o)}):a},s)},le=t=>e(hp,{"data-testid":J(`row-${t}-selection`),$isCheckbox:!0,children:e(pp,{children:e(Rh,{checked:G(t),onClick:()=>{k&&k(t,!G(t))},disabled:Q(t)})})}),ce=()=>e(Vg,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(mp,{weight:"bold",children:w.title}):w.title:e(mp,{weight:"bold",children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(tp,{id:i||"table-wrapper","data-testid":O["data-testid"]||"table",className:c,ref:I,onScroll:()=>{A&&I.current&&z(I.current.scrollTop+I.current.clientHeight>=I.current.scrollHeight)},children:[e(np,{children:t(rp,{$end:R,$scrollable:A,ref:E,$stickyHeader:x,children:[e("thead",{ref:M,children:t(lp,{children:[f&&ae(),s.map(ie)]})}),e(ip,{$showLastRowBottomBorder:H,children:"success"===g?!l||l.length<1?e("tr",{children:e(bp,{colSpan:ee(),children:C?C():ce()})}):e(n,{children:null==l?void 0:l.map(((e,n)=>t(up,{"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(n),$isSelectable:f,$isSelected:G(e.id.toString()),children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ee(),children:e(fp,{children:"loading"===g&&e(Cd,{})})})})})]})}),v&&m&&m.length>0&&(()=>{var n,r,i,o;const a=null!==(n=null==m?void 0:m.length)&&void 0!==n?n:0;return e(op,{ref:F,$fixed:L,$left:null===(i=null===(r=null==E?void 0:E.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(o=null==E?void 0:E.current)||void 0===o?void 0:o.clientWidth,children:t(sp,{$float:(A?!j:!Y)||L,$scrollable:A,children:[e(Ec.BodyMD,{weight:"semibold",children:`${a} item${a>1?"s":""} selected`}),e(ap,{type:"button",onClick:T,children:"Clear selection"}),$]})})})(),e("div",{ref:e=>{_.current=e,V(e)}})]})},yp=e=>"small"===e?2.5:3,xp=M.div`
    position: relative;
    width: 100%;
    ${e=>{const t=yp(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,wp=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${gc["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>yp(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${pc.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${cc["border-focus"]};
    }
`,$p=M.button`
    ${wp}
    cursor: pointer;
`,Cp=M.div`
    ${wp}
`,Sp=I`
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
`,kp=M.div`
    position: relative;
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    background: ${cc.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${cc["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${cc["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Sp} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?F`
                background: ${cc["bg-disabled"]};

                ${$p} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${cc.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${$p} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?F`
                border-color: ${cc["border-error"]};

                :focus-within {
                    border-color: ${cc["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${cc["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;M.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${uc["duration-250"]} ${uc["ease-default"]};
    margin-left: ${gc["spacing-16"]};
`,M(fe)`
    color: ${cc.icon};
`;const Dp=M.div`
    height: 1px;
    background: ${cc.border};
    margin: 0 ${gc["spacing-8"]};
`,Tp=M.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${cc["text-disabled"]};
            `}}
`,Op=M.div`
    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return F`
                    ${kc(1)}
                `}}
    overflow: hidden;
`,Ep=M(Op)`
    color: ${cc["text-subtler"]};
`,_p=({children:t,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o(null);return gu("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e(xp,{className:c,$variant:d,children:e(kp,{ref:u,error:r&&!n,disabled:i,$readOnly:l,expanded:n,"data-testid":a,children:t})})};var Mp;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Mp||(Mp={}));const Fp=()=>{const[e,t]=a(void 0),n=ve();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Mp.Change,e),n.events.emit(Mp.Ready),()=>n.events.off(Mp.Change,e)}),[n]),e},Ip=M.div`
    display: flex;
    flex-direction: column;
`,Ap=e=>"right"===e?"bottom-end":"bottom-start",Bp=({enabled:r,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:g=0,alignment:p="left",fitAvailableHeight:f})=>{var m;const b=A(),v=fc["sm-max"]({theme:b}),y=o(null),x=o(null),{width:w=0}=dn({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<v;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:k}=ye({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(n))},whileElementsMounted:xe,placement:Ap(p),middleware:[we(g),$e(),Ce({limiter:Se()}),ke({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),$]}),D=Fp(),{isMounted:T,styles:O}=De(k,{initial:{opacity:0},open:{opacity:1},duration:300}),E=Te(k,{enabled:r,toggle:h}),_=Oe(k,{enabled:r}),{getReferenceProps:M,getFloatingProps:F}=Ee([E,_]);return t(n,{children:[e("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},M(),{children:c()})),T&&e(_e,{children:e(Me,{context:k,modal:!1,initialFocus:x,returnFocus:!1,children:e("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=u?u:D)&&void 0!==m?m:50})},F(),{children:e(Ip,{ref:x,style:Object.assign({},O),inert:O.opacity<1?"":void 0,children:d({elementWidth:w})})}))})})]})},jp=M.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,zp=M.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Rp}, ${Hp} {
                    color: ${cc["text-subtler"]};
                }
            `}}
`,Rp=M(Zg)`
    background: transparent;
    text-align: center;
`,Pp=M(Rp)`
    width: 2rem;
    margin-right: ${gc["spacing-4"]};
`,Lp=M(Rp)`
    width: 2.5rem;
`,Np=M(Rp)`
    width: 3rem;
    margin-left: ${gc["spacing-4"]};
`,Hp=M.span`
    ${dc["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${cc.text};
            `}}
`,Wp=M.div`
    ${dc["body-baseline-regular"]}
    background-color: ${cc.bg};
    color: ${cc["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${cc["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Vd.extend(Ud);const Vp=i.forwardRef((({disabled:n,readOnly:r,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:g,onFocus:p,onBlur:f,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,w,$]=vu(""),[C,S,k]=vu(""),[D,T,O]=vu(""),[E,_]=a("none"),[M,F]=a(!1),I=o(null),A=o(null),B=o(null),j=o(null),[z,R,P]=Y(c);u((()=>{var e;const[t="",n="",r=""]=Y(s);w(t),S(n),T(r),t||n||r||!I.current||!I.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||_("none"),l&&(F(!0),I.current&&!I.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),b(v,(()=>({ref:I,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",n=""]=Y(s);w(e),S(t),T(n)}})),[s]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;_(t)},H=e=>{const[t,n,r]=i,o={[t]:$.current,[n]:k.current,[r]:O.current},a=e.target.name,s=o[a],l=a!==r?uu.padValue(s,!0):s;switch(a){case t:o[t]=l,w(l);break;case n:o[n]=l,S(l)}const c=`${o[r]}-${o[n]}-${o[t]}`,d=Vd(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[n]&&!o[r];d&&s!==l&&g(c),I.current&&!I.current.contains(e.relatedTarget)&&(_("none"),null==f||f(u||d))},W=e=>{var t,n;if(c)return;const r=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:D};switch(r){case i[0]:a.day=o,w(o),2===o.length&&(null===(t=B.current)||void 0===t||t.focus());break;case i[1]:a.month=o,S(o),2===o.length&&(null===(n=j.current)||void 0===n||n.focus());break;case i[2]:a.year=o,T(o)}if(!a.day&&!a.month&&!a.year)return void g("");const s=`${a.year}-${a.month}-${a.day}`;Vd(s,"YYYY-MM-DD",!0).isValid()&&g(s)},V=e=>{var t,n;"Backspace"!==e.code&&"Backspace"!==e.key||(E===i[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),E===i[2]&&0===D.length&&(null===(n=B.current)||void 0===n||n.focus()))};function Y(e){if(e){const t=Vd(new Date(e));return t.isValid()?[uu.padValue(t.date().toString()),uu.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(jp,{role:"group","aria-label":h,onClick:()=>{var e;n||r||(F(!0),I.current&&!I.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{n||(F(!0),l||null==p||p(e))},children:[t(zp,{ref:I,$hover:!!c,children:[e(Pp,{ref:A,name:i[0],maxLength:2,value:null!=z?z:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:E!==i[0]||r?"DD":""}),e(Hp,{$inactive:0===x.length,children:"/"}),e(Lp,{ref:B,name:i[1],maxLength:2,value:null!=R?R:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:E!==i[1]||r?"MM":""}),e(Hp,{$inactive:0===C.length,children:"/"}),e(Np,{ref:j,name:i[2],maxLength:4,value:null!=P?P:D,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:E!==i[2]||r?"YYYY":""})]}),(()=>{if(!s&&!r&&d)return e(Wp,{$hide:M,$disabled:n,onMouseDown:L,children:d})})()]})})),Yp=M(Gg)`
    height: 3rem;
`,Up=t=>{var{minDate:n,maxDate:r,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:g,onBlur:p,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=t,w=dt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,C]=a(cu.sanitizeInput(d)),[S,k]=a(cu.sanitizeInput(d)),[D,T]=a(void 0),[O,E]=a(!1),[_,M]=a(!1),F=o(null),I=o(null);u((()=>{const e=cu.sanitizeInput(d);C(e),k(e)}),[d]);const A=e=>{!y&&cu.isDateDisabled(e,{disabledDates:s,minDate:n,maxDate:r})||(k(e),m||(L(e),C(e),e&&E(!1)))},B=e=>{var t;k(e),m||(L(e),C(e),e&&(null===(t=F.current)||void 0===t||t.focus(),E(!1)),D&&T(void 0))},j=()=>{b||i||(E(!0),_||(M(!0),g&&g()))},z=e=>{var t;_&&!O&&F.current&&!F.current.contains(e.relatedTarget)&&(null===(t=I.current)||void 0===t||t.resetInput(),k($),M(!1),N())},R=e=>{T(e)},P=e=>{var t;switch(e){case"reset":k($);break;case"confirmed":C(S),L(S)}null===(t=F.current)||void 0===t||t.focus(),E(!1)},L=e=>{h&&h(e)},N=()=>{p&&p()};return e(Bp,{enabled:!b&&!i,isOpen:O,renderElement:()=>e(Yp,Object.assign({tabIndex:-1,ref:F,onBlur:z,onFocus:j,$disabled:i,$readOnly:b,$focused:_,$error:l,id:v,"data-testid":w["data-testid"]},w,{children:e(Vp,{ref:I,disabled:i,onChange:A,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:S,hoverValue:D,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(kh,{variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:s,minDate:n,maxDate:r,allowDisabledSelection:y,onHover:R,onSelect:B,onDismiss:P,onYearMonthDisplayChange:f,width:t}),onClose:()=>{var e;null===(e=I.current)||void 0===e||e.resetInput(),k($),E(!1),M(!1),N()},onDismiss:()=>{var e,t;null===(e=I.current)||void 0===e||e.resetInput(),null===(t=F.current)||void 0===t||t.focus(),k($),E(!1)},customZIndex:x,offset:16})},Kp=M.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return F`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return F`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return F`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return F`
                    background-color: ${cc.bg};
                    border: ${hc["width-010"]} ${hc.solid}
                        ${cc["border-primary"]};
                    color: ${cc["text-primary"]};

                    :hover {
                        background-color: ${cc["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${cc.bg};
                    border: ${hc["width-010"]} ${hc.solid}
                        ${cc.border};
                    color: ${cc["text-primary"]};

                    :hover {
                        background-color: ${cc["bg-hover-neutral"]};
                    }
                `;default:return F`
                    background-color: ${cc["bg-primary"]};
                    border: none;
                    color: ${cc["text-inverse"]};

                    :hover {
                        background-color: ${cc["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${cc["bg-disabled"]};
        border: ${hc["width-010"]} ${hc.solid}
            ${cc["border-disabled"]};
        color: ${cc["text-disabled"]};
        cursor: not-allowed;
    }
`,Xp=i.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=dt(t,["data-testid","styleType","children","sizeType","type"]);return e(Kp,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),qp=M(Xp)`
    margin: ${gc["spacing-8"]};
`,Gp=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${cc["bg-strong"]};
    border-radius: ${pc.sm};
`,Zp=M(Jc.Default)`
    color: ${e=>e.$enableDateClick?cc["text-primary"]:cc.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return F`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,Qp=n=>{var{selectedDate:r,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=n,g=dt(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const p=lu.toDayjs(r),f=lu.toDayjs(r).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=lu.isSame(r,Vd())&&c?"Today":p.format(l?"ddd":"dddd"),[b,v]=a(!1),y=e=>{h&&h(e),v(!b)},x=()=>{v(!1),d(r)},w=()=>{v(!1),u(r)};return e(Bp,{enabled:!s,isOpen:b,renderElement:()=>t(Gp,Object.assign({},g,{children:[e(qp,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(nu.isDisabledDay(p,void 0,i)||lu.isSame(p,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small",children:e(Iu,{})}),e(Zp,{onClick:()=>!!h&&!s&&v(!b),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s,children:`${f}, ${m}`}),e(qp,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(nu.isDisabledDay(p,void 0,void 0,o)||lu.isSame(p,o)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small",children:e(Au,{})})]})),renderDropdown:({elementWidth:t})=>e(kh,{variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},Jp=M.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return F`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${dc.Spec["body-size-baseline"]} -
                            ${gc["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${gc["spacing-8"]};
                }
            `}}
`,ef=M.div`
    width: 100%; // Force next flex item to break to next line
`,tf=M.div`
    display: flex;
    flex: 1;
    align-items: center;
`,nf=M(q)`
    color: ${cc.icon};
    width: ${dc.Spec["body-size-baseline"]};
    height: ${dc.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${gc["spacing-8"]};
    align-self: center;
`,rf=M.div`
    position: absolute;
    background: ${e=>e.$error?cc["border-error-focus-strong"]:cc["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${gc["spacing-8"]} - (${dc.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${uc["duration-350"]} ${uc["ease-standard"]},
        opacity ${uc["duration-350"]} ${uc["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${gc["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,of=({children:n,currentActive:r,error:i,className:o,wrap:a})=>{const[s,l]=n;return t(Jp,{className:o,$wrap:a,children:[e(tf,{"data-id":"range-container-elem1-container",children:s}),e(nf,{}),a&&e(ef,{}),e(tf,{"data-id":"range-container-elem2-container",children:l}),e(rf,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:a})]})},af=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},sf=M(Gg)`
    ${e=>e.$wrap&&F`
            padding: ${gc["spacing-12"]} ${gc["spacing-16"]};
        `}
`,lf=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,cf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},df=n=>{var{minDate:r,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:g,onChange:f,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:D}=n,T=dt(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[O,E]=a(),[_,M]=a(void 0),[F,I]=a(!1),[A,B]=a(!1),j="week"===w,z="fixed-range"===w,[{selectedStart:R,selectedEnd:P,currentFocus:L,calendarOpen:N,isStartDirty:H,isEndDirty:W,focused:V},Y]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[i,o]=x(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&af(n,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:cf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:j?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=o(!1),K=o(null),X=o(null),q=o(null),G=o(null),Z=(({maxWidth:e,targetRef:t})=>{const[n,r]=a(!1);return dn({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:K});u((()=>{Y.resetRange({start:cu.sanitizeInput(h),end:cu.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===L?E(R):"end"===L&&E(P)}),[L]);const Q=e=>{var t,n,r;"Enter"!==e.code||y||(R&&P?(Y.done({start:R,end:P}),null==f||f(R,P)):(Y.dismiss(),null===(t=K.current)||void 0===t||t.focus(),null===(n=q.current)||void 0===n||n.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder()))},J=e=>{var t;if(he(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y||P||!W||(Y.resetRange({start:"",end:""}),null==f||f("","")));if(!P)return void Y.focus("end");if(Vd(e).isAfter(P,"day"))Y.reselectEnd();else{if(W)return y?void 0:(Y.done({start:e,end:P}),void(null==f||f(e,P)));Y.focus("end")}},ee=e=>{var t,n;if(he(e))return void(U.current=!0);if(Vd(e).isBefore(R,"day"))return Y.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),void Y.reselectEnd();if(Y.changeEnd(e),null===(n=X.current)||void 0===n||n.setCalendarDate(e),e){if(R)return y?void 0:(Y.done({start:R,end:e}),void(null==f||f(R,e)));Y.focus("start")}else y||R||!H||(Y.resetRange({start:"",end:""}),null==f||f("",""))},te=e=>{var t;if(he(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y?Y.changeEnd(""):(Y.resetRange({start:"",end:""}),null==f||f("","")));const n=Vd(e).format("YYYY-MM-DD"),r=Vd(n).add($-1,"day").format("YYYY-MM-DD");return Y.changeStart(n),Y.changeEnd(r),U.current=!1,y?void 0:(Y.done({start:n,end:r}),void(null==f||f(n,r)))},ne=()=>{C||s||V||(Y.focus("start"),null==m||m())},re=e=>{var t,n;V&&!N&&K.current&&K.current.contains(e.relatedTarget)&&(Y.blur(),I(!1),B(!1),null===(t=q.current)||void 0===t||t.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null==b||b())},ie=e=>t=>{t.stopPropagation(),C||(Y.focus(e),oe(),ae(),V||null==m||m())},oe=()=>{if(j){const e=lu.toDayjs(R).startOf("week").format("YYYY-MM-DD");I(!0),B(!0),E(e)}},ae=()=>{z&&(B(!0),E(R))},se=e=>{var t;e&&!U.current||(Y.resetStart(),null===(t=q.current)||void 0===t||t.resetInput())},le=e=>{var t;e&&!U.current||(Y.resetEnd(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=Vd(e).startOf("week").format("YYYY-MM-DD"),n=Vd(e).endOf("week").format("YYYY-MM-DD");if(Y.changeStart(t),Y.changeEnd(n),U.current=!1,!y)Y.done({start:t,end:n}),null==f||f(t,n)})(e);break;case"fixed-range":te(e);break;default:"start"===L?J(e):"end"===L&&ee(e)}},de=e=>{var t;switch(null===(t=K.current)||void 0===t||t.focus(),e){case"reset":Y.cancel();break;case"confirmed":Y.done({start:R,end:P}),null==f||f(R,P)}},ue=e=>{M(e)},he=e=>!k&&e&&cu.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i}),ge=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===L?_:void 0,end:"end"===L?_:void 0};break;case"week":if(!_)return;t={start:Vd(_).startOf("week").format("YYYY-MM-DD"),end:Vd(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:Vd(_).format("YYYY-MM-DD"),end:Vd(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Bp,{enabled:!C&&!s,isOpen:N,onClose:()=>{var e,t;Y.blur(),I(!1),B(!1),null===(e=q.current)||void 0===e||e.resetPlaceholder(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null==b||b()},onDismiss:()=>{var e,t,n;Y.dismiss(),null===(e=K.current)||void 0===e||e.focus(),null===(t=q.current)||void 0===t||t.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder()},renderElement:()=>e(sf,Object.assign({ref:K,tabIndex:-1,onFocus:ne,onBlur:re,$focused:V,$disabled:s,$readOnly:C,$error:c,$wrap:Z,id:S,"data-testid":T["data-testid"],onKeyDown:Q},T,{children:t(of,{currentActive:L,wrap:Z,error:c,children:[e(lf,{$wrap:Z,children:e(Vp,{ref:q,placeholder:"From",names:["start-day","start-month","start-year"],value:R,disabled:s,readOnly:F||C,focused:"start"===L,hoverValue:ge("start"),onChange:z?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})}),e(lf,{$wrap:Z,children:e(Vp,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:A||C,focused:"end"===L,hoverValue:ge("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(kh,{ref:X,variant:w,initialCalendarDate:O,withButton:y,value:R,endValue:P,selectWithinRange:H||W,currentFocus:L,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:k,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:v,numberOfDays:$,width:t}),customZIndex:D,offset:16})},uf=M.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:n,$xlStart:r,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return F`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Yl.MaxWidth.xl} {
                grid-column: ${r||"auto"} / span ${i||1};
            }

            ${Yl.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${a||1};
            }

            ${Yl.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${Yl.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${Yl.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${Yl.MaxWidth.xxs} {
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,hf=i.forwardRef(((t,n)=>{const r=A(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=dt(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${n}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,r]=e;if(-1===r)return{start:n,span:t-n+1};return{start:n,span:Math.min(r-n,t)}}return{start:void 0,span:Math.min(e,t)}};return e(uf,Object.assign({ref:n},(()=>{const e=Wl["xxl-column"]({theme:r}),t=Wl["xl-column"]({theme:r}),n=Wl["lg-column"]({theme:r}),u=Wl["md-column"]({theme:r}),g=Wl["sm-column"]({theme:r}),p=Wl["xs-column"]({theme:r}),f=Wl["xxs-column"]({theme:r}),m=h(i||o||a||s||l||c||d,e,"xxl"),b=h(o||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,n,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,g,"sm"),w=h(c||d,p,"xs"),$=h(d,f,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),gf={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},pf=e=>Object.keys(gf).reduce(((t,n)=>{const r=gf[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ff={MaxWidth:pf("max-width"),MinWidth:pf("min-width")},mf=gf,bf=M.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${n||1};

            ${ff.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${ff.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,vf=i.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=t,a=dt(t,["mobileCols","tabletCols","desktopCols"]);return e(bf,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=yf(o||i||r),a=yf(e),s=yf(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),yf=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},xf=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||cc.border(e);const n=encodeURIComponent(t),r=e.$thickness||1;return F`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${r+1}" stroke-dasharray="4 4" /></svg>');
    `},wf=M.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return F`
                    ${xf}
                `;case"solid":return F`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||cc.border};
                `}}}
`,$f=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:h,xxlCols:g,mobileCols:p,tabletCols:f,desktopCols:m}=t,b=dt(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==f||void 0!==m;switch(i){case"flex":return e(wf,Object.assign({className:a,$thickness:n,$lineStyle:r,$color:o},b));case"grid":return v?e(vf,Object.assign({className:a,mobileCols:p,tabletCols:f,desktopCols:m},b,{children:e(wf,{$thickness:n,$lineStyle:r,$color:o})})):e(hf,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,n=c||t,r=d||n,i=u||r,o=h||i;return{xxlCols:g||o,xlCols:o,lgCols:i,mdCols:r,smCols:n,xsCols:t,xxsCols:e}})(),b,{children:e(wf,{$thickness:n,$lineStyle:r,$color:o})}))}},Cf=M.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return F`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Sf=M.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?cc["overlay-subtle"]:cc["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=F`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=F`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=F`
                transition: none;
            `),t}}
`,kf=({show:t=!1,rootId:n,onOverlayClick:r,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[f,m]=a(null),[b,v]=a(),[y]=a((()=>du.generate())),x=Ie(),w=o(),$=o(null),C=s&&i.cloneElement(s,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=g?g:b?99999:99998;(e=>{const t=ve();u((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Mp.Change,n)}),[t,e]),u((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Mp.Change,n)};return null==t||t.events.on(Mp.Ready,n),()=>null==t?void 0:t.events.off(Mp.Ready,n)}),[t,e])})(k),u((()=>(_(),m(O()),()=>{A(),F().length<1&&M("remove")})),[]),u((()=>{if(t){const e=E();T(e),I();const t=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{F().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[t]);const T=e=>{w.current=e,v(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>F().length>0,_=()=>{if(!document.getElementById(Tf)){const e=document.createElement("style");e.id=Tf;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Of} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Of}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(Of);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Of):document.body.classList.add(Of)},F=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},I=()=>{const e=F();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=F();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return f?D.createPortal(e(Cf,{id:S,"data-testid":S,$show:t,$zIndex:k,children:s&&e(Ae,{id:x,children:e(Sf,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:B,children:C})})}),f):null},Df=t=>e(Fe,{children:e(kf,Object.assign({},t))}),Tf="lifesg-ds-overlay-stylesheet",Of="lifesg-ds-overlay-open",Ef=M.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${cc.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${cc.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?F`
            right: 0;
            transition: all ${uc["duration-800"]} ${uc["ease-exit"]};
        `:F`
        right: -100%;
        transition: all ${uc["duration-800"]} ${uc["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${pc.md};
    border-bottom-left-radius: ${pc.md};
    overflow: hidden;

    ${mc.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${mc.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,_f=M.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${gc["spacing-16"]};
    padding: ${gc["spacing-32"]} ${gc["spacing-16"]}
        ${gc["spacing-16"]};
    background-color: ${cc.bg};
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};

    ${mc.MaxWidth.lg} {
        gap: ${gc["spacing-8"]};
        padding: ${gc["spacing-32"]} ${gc["spacing-20"]}
            ${gc["spacing-16"]};
    }
`,Mf=M(Sc)`
    color: ${cc.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${cc["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Ff=M(Ec.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,If=M.div`
    flex: 1;
    overflow-y: auto;
`,Af=n=>{var{children:r,heading:i,show:s,onClose:l,onOverlayClick:c}=n,d=dt(n,["children","heading","show","onClose","onOverlayClick"]);const[h,g]=a(s),[p]=a((()=>du.generate())),f=o(null);u((()=>{if(!s){const e=setTimeout((()=>g(!1)),500);return()=>clearTimeout(e)}g(!0)}),[s]);return e(Df,{show:h,enableOverlayClick:!0,onOverlayClick:c,children:t(Ef,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&s&&(null===(t=f.current)||void 0===t||t.focus())}},d,{children:[t(_f,{children:[e(Ff,{id:p,ref:f,tabIndex:-1,weight:"bold",children:i}),e(Mf,{"aria-label":"Close drawer",onClick:l,focusHighlight:!1,children:e(je,{"aria-hidden":!0})})]}),e(If,{children:r})]}))})},Bf=({className:t,progress:n,color:r,"data-testid":i})=>e(jf,{className:t,$innerWidth:n,$color:r,"data-testid":i,children:e("progress",{value:100*n,max:100})}),jf=M.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):cc["icon-primary-subtle"](e),F`
            border: ${hc["width-010"]} ${hc.solid} ${n};
            border-radius: ${pc.sm};

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
`,zf=M.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${mc.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Rf=t=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,g=dt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,f]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;r&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),b(window.visualViewport.offsetTop)}};return e(Df,{"data-testid":`${n}-overlay`,show:r,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c,children:e(zf,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:p,offsetTop:m},g,{children:o}))})},Pf=M.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${cc.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${mc.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Lf=M(Sc)`
    position: absolute;
    top: var(--close-button-top-inset, ${gc["spacing-16"]});
    right: var(--close-button-right-inset, ${gc["spacing-16"]});
    padding: 0;
    color: ${cc.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${mc.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${gc["spacing-20"]});
    }
`,Nf=n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=dt(n,["id","children","onClose","showCloseButton"]);return t(Pf,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Lf,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(je,{})}),i]}))},Hf=Object.assign(Rf,{Box:Nf}),Wf=F`
    ${e=>`\n        ${mc.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${fc["sm-max"](e)}px)\n    `}
`,Vf=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${fc["sm-max"](e)}px)\n    `}
`,Yf=M.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${hc.Util["dashed-default"]({radius:pc.sm,thickness:hc["width-040"],colour:e.$disabled?cc["border-disabled"]:cc.border})}

            background-color: ${e.$disabled?cc["bg-disabled"]:cc.bg};
        `}
    height: 14.125rem;
`,Uf=M(Jc.Default)`
    width: fit-content;
    margin: 0 ${gc["spacing-20"]};

    :disabled {
        border-color: ${cc["border-strong"]};
    }
`,Kf=M(Xp)`
    position: absolute;
    top: ${gc["spacing-16"]};
    right: ${gc["spacing-16"]};

    :disabled {
        border-color: ${cc["border-strong"]};
    }
`,Xf=M.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${gc["spacing-16"]}) * 2);
    height: 100%;
`,qf=M.div`
    background: ${cc["bg-primary-subtlest"]};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    margin: 0 ${gc["spacing-20"]};
    padding: ${gc["spacing-16"]};
    display: flex;
    gap: ${gc["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Gf=M(Ec.BodySM)`
    margin-top: ${gc["spacing-16"]};
`,Zf=M(Hf)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Qf=M.div`
    width: 100%;
    margin: auto;
    padding: ${gc["layout-xxl"]} ${gc["layout-sm"]};

    ${Wf} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Jf=M(Hf.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${gc["spacing-16"]};

    ${Wf} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${gc["spacing-8"]};
        --close-button-right-inset: ${gc["spacing-20"]};
    }
`,em=M.h2`
    ${dc["body-baseline-semibold"]}
    color: ${cc.text};
    margin-bottom: ${gc["spacing-16"]};
    text-align: center;

    ${Wf} {
        ${dc["body-md-semibold"]}
        margin: ${gc["spacing-12"]} 0;
    }
`,tm=M.div`
    width: 100%;
    height: 20rem;
    border-radius: ${pc.lg};
    overflow: hidden;

    ${Wf} {
        border-radius: 0;
        flex: 1;
    }

    ${Vf} {
        background: ${cc["bg-strong"]};
    }
`,nm=M.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${cc["bg-stronger"]};
    margin: auto;

    ${Wf} {
        aspect-ratio: 4/3;
    }
    ${mc.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Vf} {
        width: auto;
        height: 100%;
    }
`,rm=M.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${cc["border-strong"]};
    pointer-events: none;

    ${Wf} {
        width: calc(100% - ${gc["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,im=M.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${gc["spacing-16"]};

    ${mc.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${gc["spacing-16"]} ${gc["spacing-24"]}
            ${gc["spacing-48"]};
        gap: ${gc["spacing-16"]};
    }

    ${Vf} {
        flex-direction: row;
        margin: ${gc["spacing-16"]} ${gc["spacing-20"]};
    }
`,om=M(Jc.Default)`
    width: 8.5rem;
    ${mc.MaxWidth.sm} {
        width: 100%;
    }
    ${Vf} {
        height: 2.5rem;
    }
`,am=M.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,sm=M.canvas`
    cursor: crosshair;
`,lm=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.c4ef7935.js")).ESignatureCanvas}})))),cm=r=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:g}=r,p=dt(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[f,m]=a(!1),b=o(null),[v,x]=a(h),w=A(),$=fc["sm-max"]({theme:w}),C=Od.useMediaQuery({maxWidth:$}),S=Od.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{if(b.current){const e=b.current.export();x(e),m(!1),null==d||d(e)}};u((()=>{x(h)}),[h]);return t("div",Object.assign({},p,{children:[e(Yf,{$disabled:g,children:"number"==typeof l?t(qf,{children:[c&&e(Ec.BodyMD,{children:c}),e(Bf,{progress:null!=l?l:0,"data-testid":`${s||"e-signature"}-progress-bar`})]}):v?t(n,{children:[e(Xf,{src:v,alt:"Signature preview"}),e(Kf,{styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:g,children:e(G,{})})]}):e(Uf,{type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:g,children:"Add signature"})}),e(Zf,{"data-testid":"signature-modal",show:f,children:e(Qf,{children:t(Jf,{onClose:()=>m(!1),children:[e(em,{children:"Signature"}),e(tm,{children:t(nm,{children:[e(rm,{}),e(y,{fallback:null,children:f&&e(lm,{ref:b,baseImageDataURL:v})})]})}),t(im,{children:[e(om,{as:S?_u.Small:_u.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(Z,{}),onClick:k,children:"Clear"}),e(om,{as:S?Jc.Small:Jc.Default,type:"button",onClick:D,children:"Save"})]})]})})}),i?e(Gf,{children:i}):null]}))},dm="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",um="Submit",hm="Rate your experience",gm=5,pm=M.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,fm=F`
    width: 2.75rem;
    height: 2.75rem;
    color: ${cc["icon-primary"]};
    ${pm}:focus-visible + & {
        outline: ${hc["width-020"]} ${hc.solid}
            ${cc["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${pc.sm};
    }
`,mm=M(ze)`
    ${fm}
`,bm=M(Re)`
    ${fm}
`,vm=M.label`
    margin: 0 ${gc["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${mc.MaxWidth.md} {
        margin: 0 ${gc["spacing-8"]};
    }
`,ym=M.div`
    display: flex;
    justify-content: center;
    margin: ${gc["spacing-8"]} ${gc["spacing-16"]};
`,xm=n=>{const{description:r,rating:i,onRatingChange:o}=n,a=t=>{const n=`${t} star${1===t?"":"s"}`;return e(t<=i?bm:mm,{"aria-label":n})};return e(ym,{role:"radiogroup","aria-label":r,children:[...Array(gm)].map(((n,r)=>{const s=r+1;return t(vm,{children:[e(pm,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))})},wm=M.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${mc.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,$m=M.div`
    border-top: 1px solid ${cc.border};
    border-bottom: 1px solid ${cc.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${mc.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,Cm=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${mc.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,Sm=M(Jc.Default)`
    margin-top: 1rem;
    width: 100%;
`,km=n=>{const{imgSrc:r,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=n,c=dt(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:dm,u=null!=o?o:hm;return t($m,Object.assign({},c,{children:[d&&e(wm,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(Cm,{children:[e(Ec.HeadingSM,{as:"div",weight:"semibold",children:u}),e(xm,{description:u,rating:a,onRatingChange:s}),e(Sm,{disabled:!a,onClick:l,type:"button",children:null!=i?i:um})]})]}))},Dm=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return F`
                ${hc.Util["dashed-default"]({radius:pc.sm,thickness:hc["width-040"],colour:cc.border})}
                padding: ${gc["spacing-32"]};

                ${mc.MaxWidth.sm} {
                    padding: ${gc["spacing-32"]} ${gc["spacing-20"]};
                }
            `}}
`,Tm=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${gc["spacing-32"]};
`,Om=M.p`
    ${dc["heading-xs-regular"]}
    color: ${cc.text};
    margin-bottom: ${gc["spacing-8"]};
`,Em=M.div`
    ${od({textSize:"heading-xs"})}
    color: ${cc.text};
`,_m=M.p`
    ${dc["body-md-regular"]}
    color: ${cc["text-subtler"]};
`,Mm=M.div`
    ${od({textSize:"body-md"})}
    color: ${cc["text-subtler"]};
`,Fm=M.ul`
    list-style-type: none;
`;var Im;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Im||(Im={}));const Am=({src:t,alt:n,className:r,"data-testid":i})=>e("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Bm=M.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${gc["spacing-16"]};
    }
`,jm=M.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    cursor: pointer;

    background: ${cc["bg-primary-subtlest"]};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};

    ${mc.MaxWidth.lg} {
        padding: ${gc["spacing-16"]};
    }

    :hover {
        background: ${cc["bg-hover"]};
    }
`,zm=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${mc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return F`
                ${mc.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Rm=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Pm=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${mc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Lm=M.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${gc["spacing-8"]};

    ${dc["body-md-regular"]}
    color: ${cc.text};

    ${mc.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${gc["spacing-8"]};

        ${kc(2)}
    }
`,Nm=M.div`
    ${dc["body-md-regular"]}
    color: ${cc.text};

    ${mc.MaxWidth.lg} {
        ${kc(2)}
    }
`;M(Nm)`
    ${dc["body-md-regular"]}
    margin-top: ${gc["spacing-4"]};
`;const Hm=M.div`
    ${dc["body-sm-semibold"]}
    color: ${cc["text-error"]};
`,Wm=M(Hm)`
    margin-top: ${gc["spacing-4"]};
    ${mc.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,Vm=M(Hm)`
    display: none;
    visibility: hidden;
    ${mc.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${gc["spacing-8"]};
    }
`,Ym=M(Kc)`
    color: ${cc["icon-primary"]};
`,Um=M.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${gc["spacing-32"]};

    ${mc.MaxWidth.lg} {
        margin-left: ${gc["spacing-16"]};
    }
`,Km=M(Xp)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }
`,Xm=M.div`
    width: auto;
    margin-right: ${gc["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${mc.MaxWidth.lg} {
        margin-right: ${gc["spacing-16"]};
    }
`,qm=M(Am)`
    border-radius: ${pc.sm};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${mc.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,Gm=w((({fileItem:r,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:g=!0,ready:p=!0}=r,[f,m]=a(!1),[b,v]=a(!1),y=Im.formatFileSizeDisplay(c),x=A(),w=fc["sm-max"]({theme:x}),$=Od.useMediaQuery({maxWidth:w}),[C,S]=a(),k=o(null);u((()=>{k.current&&S($?D(l):l)}),[l,$]);const D=e=>{if(!g)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return uu.truncateTwoLines(e,t,16,1.5)},T=()=>t(n,{children:[e(Nm,{ref:k,children:C}),b&&e(Wm,{children:d||"Something went wrong"})]});return e(Bm,{"data-testid":s,children:t(jm,{onClick:()=>ut(void 0,void 0,void 0,(function*(){if(p&&!f){m(!0);try{v(!1),yield i(r)}catch(e){v(!0)}finally{m(!1)}}})),children:[(()=>{let r;return r=t(n,h?{children:[e(Xm,{"data-testid":`${s}-thumbnail`,children:e(qm,{"data-testid":`${s}-thumbnail-image`,src:h})}),t(Pm,{children:[e(Rm,{children:T()}),e(Lm,{children:y||"-"}),b&&e(Vm,{children:d||"Something went wrong"})]})]}:{children:[e(Rm,{children:T()}),e(Lm,{children:y||"-"}),b&&e(Vm,{children:d||"Something went wrong"})]}),e(zm,{$hasThumbnail:!!h,children:r})})(),e(Um,{children:e(Km,{"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`,children:f||!p?e(Ym,{size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})})})]})})})),Zm=({id:n,fileItems:r,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ut(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t(Dm,{id:n?`${n}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c,children:[(i||o)&&t(Tm,{children:[i?e("string"==typeof i?Om:Em,{children:i}):null,o?e("string"==typeof o?_m:Mm,{children:o}):null]}),e(Fm,{children:r&&r.length>0&&r.map((t=>e(Gm,{fileItem:t,onDownload:d},t.id)))})]})},Qm=$({activeId:void 0,setActiveId:()=>{}});var Jm,eb={exports:{}},tb={exports:{}},nb={};var rb,ib,ob,ab,sb,lb,cb,db,ub,hb,gb,pb,fb,mb,bb={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function vb(){return ib||(ib=1,"production"===process.env.NODE_ENV?tb.exports=function(){if(Jm)return nb;Jm=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case r:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case g:case a:return e;default:return h}}case n:return h}}}function x(e){return y(e)===c}return nb.AsyncMode=l,nb.ConcurrentMode=c,nb.ContextConsumer=s,nb.ContextProvider=a,nb.Element=t,nb.ForwardRef=d,nb.Fragment=r,nb.Lazy=p,nb.Memo=g,nb.Portal=n,nb.Profiler=o,nb.StrictMode=i,nb.Suspense=u,nb.isAsyncMode=function(e){return x(e)||y(e)===l},nb.isConcurrentMode=x,nb.isContextConsumer=function(e){return y(e)===s},nb.isContextProvider=function(e){return y(e)===a},nb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},nb.isForwardRef=function(e){return y(e)===d},nb.isFragment=function(e){return y(e)===r},nb.isLazy=function(e){return y(e)===p},nb.isMemo=function(e){return y(e)===g},nb.isPortal=function(e){return y(e)===n},nb.isProfiler=function(e){return y(e)===o},nb.isStrictMode=function(e){return y(e)===i},nb.isSuspense=function(e){return y(e)===u},nb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},nb.typeOf=y,nb}():tb.exports=(rb||(rb=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var f=e.type;switch(f){case l:case c:case r:case o:case i:case u:return f;default:var m=f&&f.$$typeof;switch(m){case s:case d:case p:case g:case a:return m;default:return h}}case n:return h}}}var x=l,w=c,$=s,C=a,S=t,k=d,D=r,T=p,O=g,E=n,_=o,M=i,F=u,I=!1;function A(e){return y(e)===c}bb.AsyncMode=x,bb.ConcurrentMode=w,bb.ContextConsumer=$,bb.ContextProvider=C,bb.Element=S,bb.ForwardRef=k,bb.Fragment=D,bb.Lazy=T,bb.Memo=O,bb.Portal=E,bb.Profiler=_,bb.StrictMode=M,bb.Suspense=F,bb.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},bb.isConcurrentMode=A,bb.isContextConsumer=function(e){return y(e)===s},bb.isContextProvider=function(e){return y(e)===a},bb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},bb.isForwardRef=function(e){return y(e)===d},bb.isFragment=function(e){return y(e)===r},bb.isLazy=function(e){return y(e)===p},bb.isMemo=function(e){return y(e)===g},bb.isPortal=function(e){return y(e)===n},bb.isProfiler=function(e){return y(e)===o},bb.isStrictMode=function(e){return y(e)===i},bb.isSuspense=function(e){return y(e)===u},bb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},bb.typeOf=y}()),bb)),tb.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function yb(){if(ab)return ob;ab=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return ob=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)n.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},ob}function xb(){if(lb)return sb;lb=1;return sb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function wb(){return db?cb:(db=1,cb=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var $b=vb();eb.exports=function(){if(pb)return gb;pb=1;var e=vb(),t=yb(),n=xb(),r=wb(),i=function(){if(hb)return ub;hb=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=xb(),n={},r=wb();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},ub=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),gb=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(a),arrayOf:function(e){return f((function(t,r,i,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+a+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:f((function(e,t,n,r,i){var o=e[t];return s(o)?null:new p("Invalid "+r+" `"+i+"` of type `"+y(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:f((function(t,n,r,i,o){var a=t[n];return e.isValidElementType(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,i,o,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new p("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,o,a,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),a}return f((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,r,i,o,a){var s=t[r],l=y(s);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,o,a,c,x(d));var u=d(s,c,i,o,a+"."+c,n);if(u)return u}return null}))},exact:function(e){return f((function(i,o,a,s,l){var c=i[o],d=y(c);if("object"!==d)return new p("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var g=e[h];if(r(e,h)&&"function"!=typeof g)return b(a,s,l,h,x(g));if(!g)return new p("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=g(c,h,a,s,l+"."+h,n);if(f)return f}return null}))}};function g(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,s,c,d,h,g){if(c=c||u,h=h||s,g!==n){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&r<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==a[s]?i?null===a[s]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return f((function(t,n,r,i,o,a){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=i,h.resetWarningCache=i.resetWarningCache,h.PropTypes=h,h},gb}()($b.isElement,!0)}else eb.exports=function(){if(mb)return fb;mb=1;var e=xb();function t(){}function n(){}return n.resetWarningCache=t,fb=function(){function r(t,n,r,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o}}()();var Cb=Uo(eb.exports),Sb=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function kb(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=Sb.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var Db=[".DS_Store","Thumbs.db"];function Tb(e){return"object"==typeof e&&null!==e}function Ob(e){return Fb(e.target.files).map((function(e){return kb(e)}))}function Eb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return kb(e)}))]}}))}))}function _b(e,t){return ut(this,void 0,void 0,(function(){var n;return ht(this,(function(r){switch(r.label){case 0:return e.items?(n=Fb(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(Ib))]):[3,2];case 1:return[2,Mb(Ab(r.sent()))];case 2:return[2,Mb(Fb(e.files).map((function(e){return kb(e)})))]}}))}))}function Mb(e){return e.filter((function(e){return-1===Db.indexOf(e.name)}))}function Fb(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Ib(e){if("function"!=typeof e.webkitGetAsEntry)return Bb(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?zb(t):Bb(e)}function Ab(e){return e.reduce((function(e,t){return pt(pt([],gt(e),!1),gt(Array.isArray(t)?Ab(t):[t]),!1)}),[])}function Bb(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=kb(t);return Promise.resolve(n)}function jb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return[2,e.isDirectory?zb(e):Rb(e)]}))}))}function zb(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var o=this;t.readEntries((function(t){return ut(o,void 0,void 0,(function(){var o,a,s;return ht(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),n(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(jb)),r.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function Rb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=kb(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var Pb=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0};function Lb(e){return function(e){if(Array.isArray(e))return Ub(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Yb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Nb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Hb(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Nb(Object(n),!0).forEach((function(t){Wb(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nb(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Wb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||Yb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Yb(e,t){if(e){if("string"==typeof e)return Ub(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ub(e,t):void 0}}function Ub(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Kb=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Xb=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},qb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Gb={code:"too-many-files",message:"Too many files"};function Zb(e,t){var n="application/x-moz-file"===e.type||Pb(e,t);return[n,n?null:Kb(t)]}function Qb(e,t,n){if(Jb(e.size))if(Jb(t)&&Jb(n)){if(e.size>n)return[!1,Xb(n)];if(e.size<t)return[!1,qb(t)]}else{if(Jb(t)&&e.size<t)return[!1,qb(t)];if(Jb(n)&&e.size>n)return[!1,Xb(n)]}return[!0,null]}function Jb(e){return null!=e}function ev(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function tv(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function nv(e){e.preventDefault()}function rv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!ev(e)&&t&&t.apply(void 0,[e].concat(r)),ev(e)}))}}function iv(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ov(e){return/^.*\.[\w]+$/.test(e)}var av=["children"],sv=["open"],lv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],cv=["refKey","onChange","onClick"];function dv(e){return function(e){if(Array.isArray(e))return gv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||hv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function uv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||hv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function hv(e,t){if(e){if("string"==typeof e)return gv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gv(e,t):void 0}}function gv(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fv(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pv(Object(n),!0).forEach((function(t){mv(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pv(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function mv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bv(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var vv=g((function(e,t){var n=e.children,r=wv(bv(e,av)),o=r.open,a=bv(r,sv);return b(t,(function(){return{open:o}}),[o]),i.createElement(C,null,n(fv(fv({},a),{},{open:o})))}));vv.displayName="Dropzone";var yv={disabled:!1,getFilesFromEvent:function(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return Tb(e)&&Tb(e.dataTransfer)?[2,_b(e.dataTransfer,e.type)]:function(e){return Tb(e)&&Tb(e.target)}(e)?[2,Ob(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Eb(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};vv.defaultProps=yv,vv.propTypes={children:Cb.func,accept:Cb.objectOf(Cb.arrayOf(Cb.string)),multiple:Cb.bool,preventDropOnDocument:Cb.bool,noClick:Cb.bool,noKeyboard:Cb.bool,noDrag:Cb.bool,noDragEventsBubbling:Cb.bool,minSize:Cb.number,maxSize:Cb.number,maxFiles:Cb.number,disabled:Cb.bool,getFilesFromEvent:Cb.func,onFileDialogCancel:Cb.func,onFileDialogOpen:Cb.func,useFsAccessApi:Cb.bool,autoFocus:Cb.bool,onDragEnter:Cb.func,onDragLeave:Cb.func,onDragOver:Cb.func,onDrop:Cb.func,onDropAccepted:Cb.func,onDropRejected:Cb.func,onError:Cb.func,validator:Cb.func};var xv={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function wv(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=fv(fv({},yv),e),n=t.accept,r=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,g=t.onDragOver,f=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,k=t.noClick,D=t.noKeyboard,T=t.noDrag,O=t.noDragEventsBubbling,E=t.onError,_=t.validator,M=m((function(){return function(e){if(Jb(e))return Object.entries(e).reduce((function(e,t){var n=Vb(t,2),r=n[0],i=n[1];return[].concat(Lb(e),[r],Lb(i))}),[]).filter((function(e){return iv(e)||ov(e)})).join(",")}(n)}),[n]),F=m((function(){return function(e){return Jb(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Vb(e,2),n=t[0],r=t[1],i=!0;return iv(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(ov)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=Vb(t,2),r=n[0],i=n[1];return Hb(Hb({},e),{},Wb({},r,i))}),{})}]:e}(n)}),[n]),I=m((function(){return"function"==typeof w?w:Cv}),[w]),A=m((function(){return"function"==typeof y?y:Cv}),[y]),B=o(null),j=o(null),z=uv(x($v,xv),2),R=z[0],P=z[1],L=R.isFocused,N=R.isFileDialogActive,H=o("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){j.current&&(j.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[j,N,A,H]);var V=o([]),Y=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),V.current=[])};u((function(){return S&&(document.addEventListener("dragover",nv,!1),document.addEventListener("drop",Y,!1)),function(){S&&(document.removeEventListener("dragover",nv),document.removeEventListener("drop",Y))}}),[B,S]),u((function(){return!r&&C&&B.current&&B.current.focus(),function(){}}),[B,C,r]);var U=p((function(e){E?E(e):console.error(e)}),[E]),K=p((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[].concat(dv(V.current),[e.target]),tv(e)&&Promise.resolve(i(e)).then((function(t){if(!ev(e)||O){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Vb(Zb(e,n),1)[0],o=Vb(Qb(e,r,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:M,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:_});P({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,O,M,s,a,l,c,_]),X=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=tv(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&g&&g(e),!1}),[g,O]),q=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=V.current.filter((function(e){return B.current&&B.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),V.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),tv(e)&&h&&h(e))}),[B,h,O]),G=p((function(e,t){var n=[],r=[];e.forEach((function(e){var t=uv(Zb(e,M),2),i=t[0],o=t[1],l=uv(Qb(e,s,a),2),c=l[0],d=l[1],u=_?_(e):null;if(i&&c&&!u)n.push(e);else{var h=[o,d];u&&(h=h.concat(u)),r.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[Gb]})})),n.splice(0)),P({acceptedFiles:n,fileRejections:r,type:"setFiles"}),f&&f(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&b&&b(n,t)}),[P,l,M,s,a,c,f,b,v,_]),Z=p((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[],tv(e)&&Promise.resolve(i(e)).then((function(t){ev(e)&&!O||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,O]),Q=p((function(){if(H.current){P({type:"openDialog"}),I();var e={multiple:l,types:F};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,j.current?(j.current.value=null,j.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else j.current&&(P({type:"openDialog"}),I(),j.current.value=null,j.current.click())}),[P,I,A,$,G,U,F,l]),J=p((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[B,Q]),ee=p((function(){P({type:"focus"})}),[]),te=p((function(){P({type:"blur"})}),[]),ne=p((function(){k||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[k,Q]),re=function(e){return r?null:e},ie=function(e){return D?null:re(e)},oe=function(e){return T?null:re(e)},ae=function(e){O&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,g=bv(e,lv);return fv(fv(mv({onKeyDown:ie(rv(o,J)),onFocus:ie(rv(a,ee)),onBlur:ie(rv(s,te)),onClick:re(rv(l,ne)),onDragEnter:oe(rv(c,K)),onDragOver:oe(rv(d,X)),onDragLeave:oe(rv(u,q)),onDrop:oe(rv(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},n,B),r||D?{}:{tabIndex:0}),g)}}),[B,J,ee,te,ne,K,X,q,Z,D,T,r]),le=p((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,o=bv(e,cv);return fv(fv({},mv({accept:M,multiple:l,type:"file",style:{display:"none"},onChange:re(rv(r,Z)),onClick:re(rv(i,le)),tabIndex:-1},n,j)),o)}}),[j,n,l,Z,r]);return fv(fv({},R),{},{isFocused:L&&!r,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:j,open:re(Q)})}function $v(e,t){switch(t.type){case"focus":return fv(fv({},e),{},{isFocused:!0});case"blur":return fv(fv({},e),{},{isFocused:!1});case"openDialog":return fv(fv({},xv),{},{isFileDialogActive:!0});case"closeDialog":return fv(fv({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fv(fv({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return fv(fv({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return fv({},xv);default:return e}}function Cv(){}const Sv=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return F`
                ${hc.Util["dashed-default"]({radius:pc.sm,thickness:hc["width-040"],colour:cc.border})}
                padding: ${gc["spacing-32"]};

                ${mc.MaxWidth.sm} {
                    padding: ${gc["spacing-32"]} ${gc["spacing-20"]};
                }
            `}}
`,kv=M.input`
    display: none;
`,Dv=M.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${cc["bg-primary-subtler"]};
    ${hc.Util["dashed-default"]({radius:pc.sm,thickness:hc["width-040"],colour:cc["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Tv=M(Ec.BodyMD)`
    color: ${cc["text-primary"]};
    text-align: center;
`,Ov=M(Pe)`
    color: ${cc["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Ev=g((({children:n,accept:r,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":g},p)=>{const f=o(null),{getRootProps:m,isDragActive:v}=wv({onDrop:h,noClick:!0,disabled:u});b(p,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{f.current&&(f.current.value="",f.current.click())}})));return t(Sv,Object.assign({id:s,"data-testid":g||"dropzone",$border:d,className:l},m(),{children:[e(kv,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:a,"data-testid":g?`${g}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),n,v&&t(Dv,{children:[e(Ov,{}),e(Tv,{weight:"semibold",children:"Drop files here"})]})]}))}));const _v="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Mv(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Fv(e){return"nodeType"in e}function Iv(e){var t,n;return e?Mv(e)?e:Fv(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function Av(e){const{Document:t}=Iv(e);return e instanceof t}function Bv(e){return!Mv(e)&&e instanceof Iv(e).HTMLElement}function jv(e){return e instanceof Iv(e).SVGElement}function zv(e){return e?Mv(e)?e.document:Fv(e)?Av(e)?e:Bv(e)||jv(e)?e.ownerDocument:document:document:document}const Rv=_v?h:u;function Pv(e){const t=o(e);return Rv((()=>{t.current=e})),p((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}function Lv(e,t){void 0===t&&(t=[e]);const n=o(e);return Rv((()=>{n.current!==e&&(n.current=e)}),t),n}function Nv(e,t){const n=o();return m((()=>{const t=e(n.current);return n.current=t,t}),[...t])}function Hv(e){const t=Pv(e),n=o(null),r=p((e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e}),[]);return[n,r]}function Wv(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let Vv={};function Yv(e,t){return m((()=>{if(t)return t;const n=null==Vv[e]?0:Vv[e]+1;return Vv[e]=n,e+"-"+n}),[e,t])}function Uv(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const Kv=Uv(1),Xv=Uv(-1);function qv(e){if(!e)return!1;const{KeyboardEvent:t}=Iv(e.target);return t&&e instanceof t}function Gv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Iv(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Zv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Zv.Translate.toString(e),Zv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Qv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Jv(e){return e.matches(Qv)?e:e.querySelector(Qv)}const ey={display:"none"};function ty(e){let{id:t,value:n}=e;return i.createElement("div",{id:t,style:ey},n)}function ny(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const ry=$(null);const iy={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},oy={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ay(e){let{announcements:t=oy,container:n,hiddenTextDescribedById:r,screenReaderInstructions:o=iy}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:p((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Yv("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=f(ry);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:n}=e;s(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&s(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;s(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;s(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;s(t.onDragCancel({active:n,over:r}))}})),[s,t])),!d)return null;const g=i.createElement(i.Fragment,null,i.createElement(ty,{id:r,value:o.draggable}),i.createElement(ny,{id:c,announcement:l}));return n?E(g,n):g}var sy;function ly(){}function cy(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(sy||(sy={}));const dy=Object.freeze({x:0,y:0});function uy(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function hy(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function gy(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function py(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function fy(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const n=t.width*t.height,r=e.width*e.height,i=a*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const my=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,o=n.get(r);if(o){const n=fy(o,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(hy)};function by(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:dy}function vy(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const yy=vy(1);const xy={ignoreTransform:!1};function wy(e,t){void 0===t&&(t=xy);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=Iv(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,l=e.left-a-(1-i)*parseFloat(n),c=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:o,height:a,bottom:s,right:l}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:l}}function $y(e){return wy(e,{ignoreTransform:!0})}function Cy(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(Av(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Bv(i)||jv(i))return n;if(n.includes(i))return n;const o=Iv(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Iv(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,o)&&n.push(i),function(e,t){return void 0===t&&(t=Iv(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?n:r(i.parentNode)}(e):n}function Sy(e){const[t]=Cy(e,1);return null!=t?t:null}function ky(e){return _v&&e?Mv(e)?e:Fv(e)?Av(e)||e===zv(e).scrollingElement?window:Bv(e)?e:null:null:null}function Dy(e){return Mv(e)?e.scrollX:e.scrollLeft}function Ty(e){return Mv(e)?e.scrollY:e.scrollTop}function Oy(e){return{x:Dy(e),y:Ty(e)}}var Ey;function _y(e){return!(!_v||!e)&&e===document.scrollingElement}function My(e){const t={x:0,y:0},n=_y(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Ey||(Ey={}));const Fy={x:.2,y:.2};function Iy(e,t,n,r,i){let{top:o,left:a,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=Fy);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=My(e),g={x:0,y:0},p={x:0,y:0},f=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+f?(g.y=Ey.Backward,p.y=r*Math.abs((t.top+f-o)/f)):!d&&l>=t.bottom-f&&(g.y=Ey.Forward,p.y=r*Math.abs((t.bottom-f-l)/f)),!h&&s>=t.right-m?(g.x=Ey.Forward,p.x=r*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(g.x=Ey.Backward,p.x=r*Math.abs((t.left+m-a)/m)),{direction:g,speed:p}}function Ay(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function By(e){return e.reduce(((e,t)=>Kv(e,Oy(t))),dy)}const jy=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Dy(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Ty(t)),0)}]];class zy{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=Cy(t),r=By(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of jy)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(n),a=r[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ry{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function Py(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var Ly,Ny;function Hy(e){e.preventDefault()}function Wy(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Ly||(Ly={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Ny||(Ny={}));const Vy={start:[Ny.Space,Ny.Enter],cancel:[Ny.Esc],end:[Ny.Space,Ny.Enter]},Yy=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Ny.Right:return{...n,x:n.x+25};case Ny.Left:return{...n,x:n.x-25};case Ny.Down:return{...n,y:n.y+25};case Ny.Up:return{...n,y:n.y-25}}};let Uy=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Ry(zv(t)),this.windowListeners=new Ry(Iv(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ly.Resize,this.handleCancel),this.windowListeners.add(Ly.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Ly.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=wy),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);Sy(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(dy)}handleKeyDown(e){if(qv(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Vy,coordinateGetter:o=Yy,scrollBehavior:a="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:dy;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=Xv(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=My(n),g=Ay(n),p={x:Math.min(i===Ny.Right?g.right-g.width/2:g.right,Math.max(i===Ny.Right?g.left:g.left+g.width/2,d.x)),y:Math.min(i===Ny.Down?g.bottom-g.height/2:g.bottom,Math.max(i===Ny.Down?g.top:g.top+g.height/2,d.y))},f=i===Ny.Right&&!s||i===Ny.Left&&!l,m=i===Ny.Down&&!c||i===Ny.Up&&!o;if(f&&p.x!==d.x){const e=n.scrollLeft+t.x,o=i===Ny.Right&&e<=u.x||i===Ny.Left&&e>=h.x;if(o&&!t.y)return void n.scrollTo({left:e,behavior:a});r.x=o?n.scrollLeft-e:i===Ny.Right?n.scrollLeft-u.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(m&&p.y!==d.y){const e=n.scrollTop+t.y,o=i===Ny.Down&&e<=u.y||i===Ny.Up&&e>=h.y;if(o&&!t.x)return void n.scrollTo({top:e,behavior:a});r.y=o?n.scrollTop-e:i===Ny.Down?n.scrollTop-u.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,Kv(Xv(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Ky(e){return Boolean(e&&"distance"in e)}function Xy(e){return Boolean(e&&"delay"in e)}Uy.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Vy,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class qy{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=Iv(e);return e instanceof t?e:zv(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=zv(o),this.documentListeners=new Ry(this.document),this.listeners=new Ry(n),this.windowListeners=new Ry(Iv(o)),this.initialCoordinates=null!=(r=Gv(i))?r:dy,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Ly.Resize,this.handleCancel),this.windowListeners.add(Ly.DragStart,Hy),this.windowListeners.add(Ly.VisibilityChange,this.handleCancel),this.windowListeners.add(Ly.ContextMenu,Hy),this.documentListeners.add(Ly.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Xy(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Ky(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ly.Click,Wy,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ly.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!r)return;const s=null!=(t=Gv(e))?t:dy,l=Xv(r,s);if(!n&&a){if(Ky(a)){if(null!=a.tolerance&&Py(l,a.tolerance))return this.handleCancel();if(Py(l,a.distance))return this.handleStart()}return Xy(a)&&Py(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Ny.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Gy={move:{name:"pointermove"},end:{name:"pointerup"}};class Zy extends qy{constructor(e){const{event:t}=e,n=zv(t.target);super(e,Gy,n)}}Zy.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const Qy={move:{name:"mousemove"},end:{name:"mouseup"}};var Jy;!function(e){e[e.RightClick=2]="RightClick"}(Jy||(Jy={}));let ex=class extends qy{constructor(e){super(e,Qy,zv(e.event.target))}};ex.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==Jy.RightClick&&(null==r||r({event:n}),!0)}}];const tx={move:{name:"touchmove"},end:{name:"touchend"}};class nx extends qy{constructor(e){super(e,tx)}static setup(){return window.addEventListener(tx.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(tx.move.name,e)};function e(){}}}var rx,ix;function ox(e){let{acceleration:t,activator:n=rx.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:s=5,order:l=ix.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:g,threshold:f}=e;const b=function(e){let{delta:t,disabled:n}=e;const r=Wv(t);return Nv((e=>{if(n||!r||!e)return ax;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Ey.Backward]:e.x[Ey.Backward]||-1===i.x,[Ey.Forward]:e.x[Ey.Forward]||1===i.x},y:{[Ey.Backward]:e.y[Ey.Backward]||-1===i.y,[Ey.Forward]:e.y[Ey.Forward]||1===i.y}}}),[n,t,r])}({delta:g,disabled:!a}),[v,y]=function(){const e=o(null);return[p(((t,n)=>{e.current=setInterval(t,n)}),[]),p((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),w=o({x:0,y:0}),$=m((()=>{switch(n){case rx.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case rx.DraggableRect:return i}}),[n,i,c]),C=o(null),S=p((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,n=x.current.y*w.current.y;e.scrollBy(t,n)}),[]),k=m((()=>l===ix.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&$){for(const e of k){if(!1===(null==r?void 0:r(e)))continue;const n=d.indexOf(e),i=h[n];if(!i)continue;const{direction:o,speed:a}=Iy(e,i,$,t,f);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,s),x.current=a,void(w.current=o)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,r,y,a,s,JSON.stringify($),JSON.stringify(b),v,d,k,h,JSON.stringify(f)])}nx.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(rx||(rx={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(ix||(ix={}));const ax={x:{[Ey.Backward]:!1,[Ey.Forward]:!1},y:{[Ey.Backward]:!1,[Ey.Forward]:!1}};var sx,lx;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(sx||(sx={})),function(e){e.Optimized="optimized"}(lx||(lx={}));const cx=new Map;function dx(e,t){return Nv((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function ux(e){let{callback:t,disabled:n}=e;const r=Pv(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(r)}),[n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function hx(e){return new zy(wy(e),e)}function gx(e,t,n){void 0===t&&(t=hx);const[r,i]=x((function(r){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=r?r:n)?i:null;const o=t(e);if(JSON.stringify(r)===JSON.stringify(o))return r;return o}),null),o=function(e){let{callback:t,disabled:n}=e;const r=Pv(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(r)}),[r,n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){i();break}}}}),a=ux({callback:i});return Rv((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),r}const px=[];function fx(e,t){void 0===t&&(t=[]);const n=o(null);return u((()=>{n.current=null}),t),u((()=>{const t=e!==dy;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?Xv(e,n.current):dy}function mx(e){return m((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const bx=[];function vx(e){let{measure:t}=e;const[n,r]=a(null),i=p((e=>{for(const{target:n}of e)if(Bv(n)){r((e=>{const r=t(n);return e?{...e,width:r.width,height:r.height}:r}));break}}),[t]),o=ux({callback:i}),s=p((e=>{const n=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Bv(t)?t:e}(e);null==o||o.disconnect(),n&&(null==o||o.observe(n)),r(n?t(n):null)}),[t,o]),[l,c]=Hv(s);return m((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const yx=[{sensor:Zy,options:{}},{sensor:Uy,options:{}}],xx={current:{}},wx={draggable:{measure:$y},droppable:{measure:$y,strategy:sx.WhileDragging,frequency:lx.Optimized},dragOverlay:{measure:wy}};class $x extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const Cx={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $x,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ly},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:wx,measureDroppableContainers:ly,windowRect:null,measuringScheduled:!1},Sx=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ly,draggableNodes:new Map,over:null,measureDroppableContainers:ly}),kx=$(Cx);function Dx(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $x}}}function Tx(e,t){switch(t.type){case sy.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case sy.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case sy.DragEnd:case sy.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case sy.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new $x(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case sy.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new $x(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case sy.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new $x(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Ox(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=f(Sx),o=Wv(r),a=Wv(null==n?void 0:n.id);return u((()=>{if(!t&&!r&&o&&null!=a){if(!qv(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Jv(e);if(t){t.focus();break}}}))}}),[r,t,i,a,o]),null}const Ex=$({...dy,scaleX:1,scaleY:1});var _x;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(_x||(_x={}));const Mx=w((function(e){var t,n,r,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:g=yx,collisionDetection:f=my,measuring:b,modifiers:v,...y}=e;const w=x(Tx,void 0,Dx),[$,C]=w,[S,k]=function(){const[e]=a((()=>new Set)),t=p((t=>(e.add(t),()=>e.delete(t))),[e]);return[p((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),t]}(),[D,T]=a(_x.Uninitialized),E=D===_x.Initialized,{draggable:{active:_,nodes:M,translate:F},droppable:{containers:I}}=$,A=_?M.get(_):null,B=o({initial:null,translated:null}),j=m((()=>{var e;return null!=_?{id:_,data:null!=(e=null==A?void 0:A.data)?e:xx,rect:B}:null}),[_,A]),z=o(null),[R,P]=a(null),[L,N]=a(null),H=Lv(y,Object.values(y)),W=Yv("DndDescribedBy",l),V=m((()=>I.getEnabled()),[I]),Y=function(e){return m((()=>({draggable:{...wx.draggable,...null==e?void 0:e.draggable},droppable:{...wx.droppable,...null==e?void 0:e.droppable},dragOverlay:{...wx.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:X}=function(e,t){let{dragging:n,dependencies:r,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,g=o(e),f=function(){switch(h){case sx.Always:return!1;case sx.BeforeDragging:return n;default:return!n}}(),m=Lv(f),b=p((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=Nv((t=>{if(f&&!n)return cx;if(!t||t===cx||g.current!==e||null!=s){const t=new Map;for(let n of e){if(!n)continue;if(s&&s.length>0&&!s.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new zy(d(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,s,n,f,d]);return u((()=>{g.current=e}),[e]),u((()=>{f||b()}),[n,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,f,b,...r]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(V,{dragging:E,dependencies:[F.x,F.y],config:Y.droppable}),q=function(e,t){const n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return Nv((e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(M,_),G=m((()=>L?Gv(L):null),[L]),Z=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,n=E&&!e&&!t;if("object"==typeof d)return{...d,enabled:n};return{enabled:n}}(),Q=function(e,t){return dx(e,t)}(q,Y.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Rv((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!r)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=by(n(e),r);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=Sy(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,r,n])}({activeNode:_?M.get(_):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:Y.draggable.measure});const J=gx(q,Y.draggable.measure,Q),ee=gx(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:M,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ne=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),re=vx({measure:Y.dragOverlay.measure}),ie=null!=(n=re.nodeRef.current)?n:q,oe=E?null!=(r=re.rect)?r:J:null,ae=Boolean(re.nodeRef.current&&re.rect),se=by(le=ae?null:J,dx(le));var le;const ce=mx(ie?Iv(ie):null),de=function(e){const t=o(e),n=Nv((n=>e?n&&n!==px&&e&&t.current&&e.parentNode===t.current.parentNode?n:Cy(e):px),[e]);return u((()=>{t.current=e}),[e]),n}(E?null!=ne?ne:q:null),ue=function(e,t){void 0===t&&(t=wy);const[n]=e,r=mx(n?Iv(n):null),[i,o]=x((function(){return e.length?e.map((e=>_y(e)?r:new zy(t(e),e))):bx}),bx),a=ux({callback:o});return e.length>0&&i===bx&&o(),Rv((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(v,{transform:{x:F.x-se.x,y:F.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:j,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:re.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),ge=G?Kv(G,F):null,pe=function(e){const[t,n]=a(null),r=o(e),i=p((e=>{const t=ky(e.target);t&&n((e=>e?(e.set(t,Oy(t)),new Map(e)):null))}),[]);return u((()=>{const t=r.current;if(e!==t){o(t);const a=e.map((e=>{const t=ky(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Oy(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),r.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=ky(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Kv(e,t)),dy):By(e):dy),[e,t])}(de),fe=fx(pe),me=fx(pe,[J]),be=Kv(he,fe),ve=oe?yy(oe,he):null,ye=j&&ve?f({active:j,collisionRect:ve,droppableRects:U,droppableContainers:V,pointerCoordinates:ge}):null,xe=py(ye,"id"),[we,$e]=a(null),Ce=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(ae?he:Kv(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),Se=p(((e,t)=>{let{sensor:n,options:r}=t;if(null==z.current)return;const i=M.get(z.current);if(!i)return;const o=e.nativeEvent,a=new n({active:z.current,activeNode:i,event:o,options:r,context:te,onStart(e){const t=z.current;if(null==t)return;const n=M.get(t);if(!n)return;const{onDragStart:r}=H.current,i={active:{id:t,data:n.data,rect:B}};O((()=>{null==r||r(i),T(_x.Initializing),C({type:sy.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i})}))},onMove(e){C({type:sy.DragMove,coordinates:e})},onEnd:s(sy.DragEnd),onCancel:s(sy.DragCancel)});function s(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=H.current;if(a={activatorEvent:o,active:t,collisions:n,delta:i,over:r},e===sy.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=sy.DragCancel)}}z.current=null,O((()=>{C({type:e}),T(_x.Uninitialized),$e(null),P(null),N(null);const t=e===sy.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}O((()=>{P(a),N(e.nativeEvent)}))}),[M]),ke=p(((e,t)=>(n,r)=>{const i=n.nativeEvent,o=M.get(r);if(null!==z.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(n,t.options,a)&&(i.dndKit={capturedBy:t.sensor},z.current=r,Se(n,t))}),[M,Se]),De=function(e,t){return m((()=>e.reduce(((e,n)=>{const{sensor:r}=n;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,n)})))]}),[])),[e,t])}(g,ke);!function(e){u((()=>{if(!_v)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(g),Rv((()=>{J&&D===_x.Initializing&&T(_x.Initialized)}),[J,D]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:n,collisions:r,over:i}=te.current;if(!t||!n)return;const o={active:t,activatorEvent:n,collisions:r,delta:{x:be.x,y:be.y},over:i};O((()=>{null==e||e(o),S({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=te.current;if(!e||null==z.current||!t||!i)return;const{onDragOver:o}=H.current,a=r.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};O((()=>{$e(s),null==o||o(l),S({type:"onDragOver",event:l})}))}),[xe]),Rv((()=>{te.current={activatorEvent:L,active:j,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:M,draggingNode:ie,draggingNodeRect:oe,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},B.current={initial:oe,translated:ve}}),[j,q,ye,ve,M,ie,oe,U,I,we,de,be]),ox({...Z,delta:F,draggingRect:ve,pointerCoordinates:ge,scrollableAncestors:de,scrollableAncestorRects:ue});const Te=m((()=>({active:j,activeNode:q,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:re,draggableNodes:M,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:Y,measuringScheduled:X,windowRect:ce})),[j,q,J,L,ye,ee,re,M,I,U,we,K,de,ue,Y,X,ce]),Oe=m((()=>({activatorEvent:L,activators:De,active:j,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:M,over:we,measureDroppableContainers:K})),[L,De,j,J,C,W,M,we,K]);return i.createElement(ry.Provider,{value:k},i.createElement(Sx.Provider,{value:Oe},i.createElement(kx.Provider,{value:Te},i.createElement(Ex.Provider,{value:Ce},h)),i.createElement(Ox,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(ay,{...c,hiddenTextDescribedById:W}))})),Fx=$(null),Ix="button",Ax="Droppable";function Bx(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const o=Yv(Ax),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=f(Sx),{role:g=Ix,roleDescription:p="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=f(v?Ex:Fx),[x,w]=Hv(),[$,C]=Hv(),S=function(e,t){return m((()=>e.reduce(((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),k=Lv(n);Rv((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:$,data:k}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:g,tabIndex:b,"aria-disabled":r,"aria-pressed":!(!v||g!==Ix)||void 0,"aria-roledescription":p,"aria-describedby":d.draggable})),[r,g,b,v,p,d.draggable]),isDragging:v,listeners:r?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const jx="Droppable",zx={timeout:25};function Rx(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Px(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function Lx(e){return null!==e&&e>=0}const Nx=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=Rx(t,r,n),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Hx={scaleX:1,scaleY:1},Wx=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[n])?t:r;if(!s)return null;if(i===n){const e=o[a];return e?{x:0,y:n<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Hx}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):o?o.top-(r.top+r.height):0;return o?o.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(o,i,n);return i>n&&i<=a?{x:0,y:-s.height-l,...Hx}:i<n&&i>=a?{x:0,y:s.height+l,...Hx}:{x:0,y:0,...Hx}};const Vx="Sortable",Yx=i.createContext({activeIndex:-1,containerId:Vx,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Nx,disabled:{draggable:!1,droppable:!1}});function Ux(e){let{children:t,id:n,items:r,strategy:a=Nx,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:g}=f(kx),p=Yv(Vx,n),b=Boolean(null!==c.rect),v=m((()=>r.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[r]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=o(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,k=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Rv((()=>{C&&y&&g(v)}),[C,v,y,g]),u((()=>{$.current=v}),[v]);const D=m((()=>({activeIndex:x,containerId:p,disabled:k,disableTransforms:S,items:v,overIndex:w,useDragOverlay:b,sortedRects:Px(v,d),strategy:a})),[x,p,k.draggable,k.droppable,S,v,w,d,b,a]);return i.createElement(Yx.Provider,{value:D},t)}const Kx=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return Rx(n,r,i).indexOf(t)},Xx=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===o||i!==a)&&(!!n||a!==i&&t===l))},qx={duration:200,easing:"ease"},Gx="transform",Zx=Zv.Transition.toString({property:Gx,duration:0,easing:"linear"}),Qx={roleDescription:"sortable"};function Jx(e){let{animateLayoutChanges:t=Xx,attributes:n,disabled:r,data:i,getNewIndex:s=Kx,id:l,strategy:c,resizeObserverConfig:d,transition:h=qx}=e;const{items:g,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=f(Yx),k=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(r,y),D=g.indexOf(l),T=m((()=>({sortable:{containerId:b,index:D,items:g},...i})),[b,i,D,g]),O=m((()=>g.slice(g.indexOf(l))),[g,l]),{rect:E,node:_,isOver:M,setNodeRef:F}=function(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const a=Yv(jx),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(Sx),h=o({disabled:n}),g=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...zx,...i},w=Lv(null!=y?y:r),$=ux({callback:p((()=>{g.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):g.current=!0}),[x]),disabled:v||!s}),C=p(((e,t)=>{$&&(t&&($.unobserve(t),g.current=!1),e&&$.observe(e))}),[$]),[S,k]=Hv(C),D=Lv(t);return u((()=>{$&&S.current&&($.disconnect(),g.current=!1,$.observe(S.current))}),[S,$]),Rv((()=>(l({type:sy.RegisterDroppable,element:{id:r,key:a,disabled:n,node:S,rect:m,data:D}}),()=>l({type:sy.UnregisterDroppable,key:a,id:r}))),[r]),u((()=>{n!==h.current.disabled&&(l({type:sy.SetDroppableDisabled,id:r,key:a,disabled:n}),h.current.disabled=n)}),[r,a,n,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===r,node:S,over:c,setNodeRef:k}}({id:l,data:T,disabled:k.droppable,resizeObserverConfig:{updateMeasurementsFor:O,...d}}),{active:I,activatorEvent:A,activeNodeRect:B,attributes:j,setNodeRef:z,listeners:R,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Bx({id:l,data:T,attributes:{...Qx,...n},disabled:k.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(F,z),V=Boolean(I),Y=V&&!x&&Lx(v)&&Lx($),U=!C&&P,K=U&&Y?H:null,X=Y?null!=K?K:(null!=c?c:S)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:D}):null,q=Lx(v)&&Lx($)?s({id:l,items:g,activeIndex:v,overIndex:$}):D,G=null==I?void 0:I.id,Z=o({activeId:G,items:g,newIndex:q,containerId:b}),Q=g!==Z.current.items,J=t({active:I,containerId:b,isDragging:P,isSorting:V,id:l,index:D,items:g,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:n,node:r,rect:i}=e;const[s,l]=a(null),c=o(n);return Rv((()=>{if(!t&&n!==c.current&&r.current){const e=i.current;if(e){const t=wy(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&l(n)}}n!==c.current&&(c.current=n)}),[t,n,r,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:D,node:_,rect:E});return u((()=>{V&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),g!==Z.current.items&&(Z.current.items=g)}),[V,q,b,g]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:I,activeIndex:v,attributes:j,data:T,rect:E,index:D,newIndex:q,items:g,isOver:M,isSorting:V,isDragging:P,listeners:R,node:_,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:F,setDraggableNodeRef:z,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===D)return Zx;if(U&&!qv(A)||!h)return;if(V||J)return Zv.Transition.toString({...h,property:Gx});return}()}}function ew(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const tw=[Ny.Down,Ny.Right,Ny.Up,Ny.Left],nw=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(tw.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];o.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const o=i.get(n.id);if(o)switch(e.code){case Ny.Down:r.top<o.top&&t.push(n);break;case Ny.Up:r.top>o.top&&t.push(n);break;case Ny.Left:r.left>o.left&&t.push(n);break;case Ny.Right:r.left<o.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=gy(t),o=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=gy(r),a=i.reduce(((e,t,r)=>{return e+(i=n[r],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(uy)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=py(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(n.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const n=Cy(l).some(((e,t)=>s[t]!==e)),i=rw(e,t),o=function(e,t){if(!ew(e)||!ew(t))return!1;if(!rw(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:o?r.width-a.width:0,y:o?r.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Xv(d,c)}}}};function rw(e,t){return!(!ew(e)||!ew(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class iw extends ex{}iw.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>ow(e.target)}];function ow(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Uy{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>ow(e.target)}];const aw=M.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,sw=M(Eh)`
    color: ${cc.text};
    ${od({textSize:"body-md"})}

    ${mc.MaxWidth.sm} {
        display: none;
    }
`,lw=M(Nf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,cw=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${cc.text};
    ${od({textSize:"body-md"})}
`,dw=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=dt(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=A(),d=fc["sm-max"]({theme:c}),u=Od.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},g=()=>"string"==typeof i?e(Ec.BodyMD,{children:i}):i;return t(n,{children:[o&&e(aw,Object.assign({"data-testid":l},s,{children:e(sw,{children:g()})})),u&&e(Rf,{show:null!=o&&o,onOverlayClick:h,children:e(lw,{onClose:h,children:e(cw,{children:g()})})})]})},uw=M.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,hw=r=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:g,customOffset:p,delay:f,onPopoverAppear:m,onPopoverDismiss:b}=r,v=dt(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=o(null),$=o(null),C=A(),S=fc["sm-max"]({theme:C}),k=Od.useMediaQuery({maxWidth:S}),{refs:D,floatingStyles:T,context:O}=ye({open:y,placement:u,whileElementsMounted:xe,middleware:[we(null!=p?p:16),$e(),Ce({limiter:Se()})],onOpenChange:e=>{x(e),y!==e&&R(e)}}),E=Fp(),_=k?"click":d,M=Te(O,{ignoreMouse:"hover"===_}),F=Oe(O),I=Be(O,{enabled:"hover"===_,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:B,getFloatingProps:j}=Ee([M,F,I]),z=()=>{x(!1),R(!1)},R=e=>{e&&m&&m(),!e&&b&&b()};return t(n,{children:[e(uw,Object.assign({ref:e=>{w.current=e,D.setReference(e)}},B({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(_e,{root:g,children:e(Me,{context:O,children:e("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},T),{outline:"none",zIndex:null!=h?h:E})},j(),{children:"function"==typeof c?c():e(dw,{visible:!0,onMobileClose:z,children:c})}))})})]})},gw=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},pw=M.span`
    color: ${cc["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>gw(e)}

    &:hover,
    &:focus-visible {
        color: ${cc["text-hover"]};
        ${({$hoverStyle:e})=>gw(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,fw=M.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,mw=n=>{var{ariaLabel:r,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=n,l=dt(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(hw,Object.assign({},l,{children:t(pw,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info",children:[i,o&&e(fw,{$standalone:!c,children:o})]})}))},bw=M.div`
    padding-left: ${gc["spacing-4"]};
    display: inline;
`,vw=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(bw,{children:e(mw,{trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=o?o:e(P,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},yw=M.label`
    color: ${cc["text-subtle"]};
    margin-bottom: ${gc["spacing-8"]};
    display: inline-block;

    ${dc["form-label"]}
    ${od()}
    font-weight: ${dc.Spec["weight-semibold"]};
`,xw=M.p`
    ${dc["body-sm-semibold"]}
    color: ${cc["text-error"]};
    margin-top: ${gc["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,ww=M.span`
    ${dc["form-description"]}
    color: ${cc["text-subtler"]};
    display: block;
`,$w=n=>{var{children:r,addon:i,subtitle:o,"data-testid":a}=n,s=dt(n,["children","addon","subtitle","data-testid"]);return t(yw,Object.assign({},s,{children:[r,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(vw,{addon:i}):null),"string"==typeof o?e(ww,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},Cw=t=>e(xw,Object.assign({},t)),Sw=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${gc["spacing-32"]};
    }
`,kw=M.div`
    ${Sw}
`,Dw=M(hf)`
    ${Sw}
`,Tw=M(vf)`
    ${Sw}
`,Ow=({label:n,errorMessage:r,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,"data-error-testid":y})=>{const x=!s&&(l||d||u)?"v2-grid":!s&&(h||g||p||f||m||b||v)?"grid":s||"flex",w=()=>y||(i?`${i}-error-message`:"error-message"),$=()=>!!r;const C=(e=>{switch(e){case"v2-grid":return Tw;case"grid":return Dw;case"flex":return kw}})(x);return t(C,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})(x),{children:[n&&e($w,"string"==typeof n?{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:n}:Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},n)),(()=>{const e={"aria-invalid":$(),"aria-describedby":$()&&w()};return S.map(a,(t=>c(t,e)))})(),r&&e(xw,{id:w(),tabIndex:0,"data-testid":w(),children:r})]}))};function Ew(e,t){return Ew=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ew(e,t)}function _w(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Mw(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Fw(e){return null!==e&&1===e.length?e[0]:e.slice()}function Iw(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Aw(e,t){return Bw(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Bw(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let jw=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Iw(n.getMouseEventMap())}))}_w(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Aw(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Iw(n.getKeyDownEventMap()),_w(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Iw(n.getMouseEventMap()),_w(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Iw(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:Fw(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:Fw(n.state.value)};return n.props.renderTrack(i,o)};let r=Mw(t.value);r.length||(r=Mw(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=Aw(r[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ew(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Mw(e.value);return n.length?t.pending?null:{value:n.map((t=>Aw(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Fw(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Aw(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Aw(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Aw(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Aw(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Bw(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Bw(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Fw(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(i.Component);jw.displayName="ReactSlider",jw.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var zw=jw;const Rw=M.div`
    isolation: isolate;
`,Pw=M.div`
    margin-top: ${gc["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${gc["spacing-8"]};
`,Lw=M.div`
    margin-bottom: ${gc["spacing-8"]};
`,Nw=M(Ec.BodyBL)`
    overflow-wrap: anywhere;
`,Hw=M(zw)`
    height: 0.875rem;
`,Ww=M.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$readOnly?void 0:F`
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

        background-color: ${cc.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${hc["width-010"]} ${hc.solid}
            ${e=>e.$disabled?cc["border-selected-disabled"]:cc["border-strong"]};
        border-radius: 50%;
    }
`,Vw=M.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Ww}:after {
        outline-offset: -1px;
        outline: ${hc["width-040"]} ${hc.solid}
            ${cc["border-selected"]};
    }
`,Yw=M.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${pc.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||cc["border-strong"](e)};
`,Uw=n=>{var{value:r,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:g,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=n,S=dt(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,D]=a(O()),T=function(){const e=function(){const e=h||g?cc["border-disabled"]:cc["border-strong"],t=h||g?cc["border-selected-disabled"]:cc["border-selected"];if(1===c)return[t,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(t);return n.push(e),n}();return new Array(c+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();u((()=>{r!==k&&D(O())}),[r]);function O(){if(r&&r.length===c)return r;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const E=e=>w?w(e):t(Nw,{children:[m,e,b]});return t(Rw,Object.assign({},S,{children:[v&&e(Lw,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(Nw,{children:[y,e,x]})})()}),e(Hw,{step:s,min:i,max:o,value:k,disabled:h||g,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const n=[...e];D(n),null==$||$(n)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==C||C(t)}else{const t=[...e];D(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,n)=>e(Vw,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:h?void 0:t.tabIndex,children:e(Ww,{$disabled:h,$readOnly:g})})),renderTrack:(t,n)=>e(Yw,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:T[n.index]}))}),f&&t(Pw,{children:[e("div",{children:E(i)}),e("div",{children:E(o)})]})]}))},Kw=M.div`
    display: flex;
    margin-bottom: ${gc["spacing-16"]};
    align-items: baseline;
`,Xw=M.div`
    margin: 0 0.5rem;
`,qw=M.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Gw=M.div`
    flex: 1;
    border-radius: ${pc.sm} ${pc.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=cc["bg-strongest"];return e.$disabled&&e.$selected?t=cc["bg-selected-stronger-disabled"]:e.$disabled?t=cc["bg-disabled"]:e.$selected&&(t=cc["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,Zw=M(Uw)`
    margin-top: -0.3125rem;
`,Qw=r=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:g,ariaLabels:p,onChange:f,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=r,x=dt(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),C=i.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[D,T]=a(M()),O=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/o+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===k+o*r));t?n.push(t):n.push({count:0,minValue:k+o*r})}return n}),[i,o]);u((()=>{c!==D&&T(M())}),[c]);const E=e=>{const[t,n]=e,r=[t,n];T(r),null==f||f(r)},_=e=>{const[t,n]=e,r=[t,n];T(r),null==b||b(r)};function M(){return null!=c?c:[k,k+o]}const F=e=>y?y(e):t(Ec.BodyBL,{children:[h,e,g]});return t("div",Object.assign({},x,{children:[d&&t(Kw,{children:[F(D[0]),e(Xw,{children:"-"}),F(D[1])]}),O.every((e=>0===e.count))&&v?v():t(n,{children:[e(qw,{children:O.map(((t,n)=>{const r=t.count/$;return e(Gw,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=D[0]&&t.minValue<D[1],$disabled:s||l},n)}))}),e(Zw,{min:k,max:S+o,step:o,minRange:o,numOfThumbs:2,value:D,disabled:s,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:_})]})]}))},Jw=M(Zg)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${gc["spacing-16"]};
            padding-right: ${e.$showClear?0:gc["spacing-16"]};
        `}
`,e$=M(Qg)`
    height: auto;
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};

    cursor: pointer;
    color: ${cc.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${gc["spacing-12"]};
        `}
`,t$=M(je)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,n$=M.div`
    display: flex;
    width: 100%;
`,r$=M(qg)`
    display: flex;
    align-items: center;
    width: 100%;
`,i$=i.forwardRef(((r,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:g,allowClear:p=!1,className:f,styleType:m="bordered"}=r,v=dt(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,s),x=o(null);b(i,(()=>x.current),[]);const w=mu({ref:x,formatter:e=>y?uu.transformWithSpaces(e,s):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{g&&g(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:n,updateCaretPosition:r}=t,i=n.replace(/\s/g,"");e.target.value=i,null==h||h(e),r()},k=a?(e=>e?y?uu.transformWithSpaces(e,s):e:"")(a):a,D=p&&!d&&!u&&!!a,T=()=>t(n,{children:[e(Jw,Object.assign({"data-testid":"input",ref:x,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:D,$styleType:m},v)),D&&e(e$,{onClick:C,type:"button",$styleType:m,children:e(t$,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===m?e(n$,{className:f,children:T()}):e(r$,{$disabled:d,$error:c,$readOnly:u,className:f,children:T()})})})),o$=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:o,label:r,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(i$,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:n,error:!!i},y))})}));var a$=Os;var s$=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var l$=function(e){return this.__data__.get(e)};var c$=function(e){return this.__data__.has(e)},d$=Os,u$=Es,h$=qs;var g$=function(e,t){var n=this.__data__;if(n instanceof d$){var r=n.__data__;if(!u$||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new h$(r)}return n.set(e,t),this.size=n.size,this},p$=Os,f$=function(){this.__data__=new a$,this.size=0},m$=s$,b$=l$,v$=c$,y$=g$;function x$(e){var t=this.__data__=new p$(e);this.size=t.size}x$.prototype.clear=f$,x$.prototype.delete=m$,x$.prototype.get=b$,x$.prototype.has=v$,x$.prototype.set=y$;var w$=x$;var $$=qs,C$=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},S$=function(e){return this.__data__.has(e)};function k$(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new $$;++t<n;)this.add(e[t])}k$.prototype.add=k$.prototype.push=C$,k$.prototype.has=S$;var D$=function(e,t){return e.has(t)},T$=k$,O$=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},E$=D$;var _$=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,g=2&n?new T$:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],f=t[u];if(r)var m=a?r(f,p,u,t,e,o):r(p,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(g){if(!O$(t,(function(e,t){if(!E$(g,t)&&(p===e||i(p,e,n,r,o)))return g.push(t)}))){h=!1;break}}else if(p!==f&&!i(p,f,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var M$=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var F$=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},I$=Qo.Uint8Array,A$=ds,B$=_$,j$=M$,z$=F$,R$=Jo?Jo.prototype:void 0,P$=R$?R$.valueOf:void 0;var L$=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new I$(e),new I$(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return A$(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=j$;case"[object Set]":var l=1&r;if(s||(s=z$),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=B$(s(e),s(t),r,i,o,a);return a.delete(e),d;case"[object Symbol]":if(P$)return P$.call(e)==P$.call(t)}return!1};var N$=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},H$=N$,W$=Xo;var V$=function(e,t,n){var r=t(e);return W$(e)?r:H$(r,n(e))};var Y$=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},U$=function(){return[]},K$=Object.prototype.propertyIsEnumerable,X$=Object.getOwnPropertySymbols,q$=X$?function(e){return null==e?[]:(e=Object(e),Y$(X$(e),(function(t){return K$.call(e,t)})))}:U$;var G$=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Z$=da,Q$=ua;var J$=function(e){return Q$(e)&&"[object Arguments]"==Z$(e)},eC=ua,tC=Object.prototype,nC=tC.hasOwnProperty,rC=tC.propertyIsEnumerable,iC=J$(function(){return arguments}())?J$:function(e){return eC(e)&&nC.call(e,"callee")&&!rC.call(e,"callee")},oC={exports:{}};var aC=function(){return!1};!function(e,t){var n=Qo,r=aC,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(oC,oC.exports);var sC=oC.exports,lC=/^(?:0|[1-9]\d*)$/;var cC=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&lC.test(e))&&e>-1&&e%1==0&&e<t};var dC=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},uC=da,hC=dC,gC=ua,pC={};pC["[object Float32Array]"]=pC["[object Float64Array]"]=pC["[object Int8Array]"]=pC["[object Int16Array]"]=pC["[object Int32Array]"]=pC["[object Uint8Array]"]=pC["[object Uint8ClampedArray]"]=pC["[object Uint16Array]"]=pC["[object Uint32Array]"]=!0,pC["[object Arguments]"]=pC["[object Array]"]=pC["[object ArrayBuffer]"]=pC["[object Boolean]"]=pC["[object DataView]"]=pC["[object Date]"]=pC["[object Error]"]=pC["[object Function]"]=pC["[object Map]"]=pC["[object Number]"]=pC["[object Object]"]=pC["[object RegExp]"]=pC["[object Set]"]=pC["[object String]"]=pC["[object WeakMap]"]=!1;var fC=function(e){return gC(e)&&hC(e.length)&&!!pC[uC(e)]};var mC=function(e){return function(t){return e(t)}},bC={exports:{}};!function(e,t){var n=qo,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(bC,bC.exports);var vC=bC.exports,yC=fC,xC=mC,wC=vC&&vC.isTypedArray,$C=wC?xC(wC):yC,CC=G$,SC=iC,kC=Xo,DC=sC,TC=cC,OC=$C,EC=Object.prototype.hasOwnProperty;var _C=function(e,t){var n=kC(e),r=!n&&SC(e),i=!n&&!r&&DC(e),o=!n&&!r&&!i&&OC(e),a=n||r||i||o,s=a?CC(e.length,String):[],l=s.length;for(var c in e)!t&&!EC.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||TC(c,l))||s.push(c);return s},MC=Object.prototype;var FC=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||MC)};var IC=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),AC=FC,BC=IC,jC=Object.prototype.hasOwnProperty;var zC=function(e){if(!AC(e))return BC(e);var t=[];for(var n in Object(e))jC.call(e,n)&&"constructor"!=n&&t.push(n);return t},RC=Sa,PC=dC;var LC=function(e){return null!=e&&PC(e.length)&&!RC(e)},NC=_C,HC=zC,WC=LC;var VC=function(e){return WC(e)?NC(e):HC(e)},YC=V$,UC=q$,KC=VC;var XC=function(e){return YC(e,KC,UC)},qC=Object.prototype.hasOwnProperty;var GC=function(e,t,n,r,i,o){var a=1&n,s=XC(e),l=s.length;if(l!=XC(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:qC.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var g=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var f=e[d=s[c]],m=t[d];if(r)var b=a?r(m,f,d,t,e,o):r(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,n,r,o):b)){g=!1;break}p||(p="constructor"==d)}if(g&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return o.delete(e),o.delete(t),g},ZC=Wa(Qo,"DataView"),QC=Es,JC=Wa(Qo,"Promise"),eS=Wa(Qo,"Set"),tS=Wa(Qo,"WeakMap"),nS=da,rS=Ea,iS="[object Map]",oS="[object Promise]",aS="[object Set]",sS="[object WeakMap]",lS="[object DataView]",cS=rS(ZC),dS=rS(QC),uS=rS(JC),hS=rS(eS),gS=rS(tS),pS=nS;(ZC&&pS(new ZC(new ArrayBuffer(1)))!=lS||QC&&pS(new QC)!=iS||JC&&pS(JC.resolve())!=oS||eS&&pS(new eS)!=aS||tS&&pS(new tS)!=sS)&&(pS=function(e){var t=nS(e),n="[object Object]"==t?e.constructor:void 0,r=n?rS(n):"";if(r)switch(r){case cS:return lS;case dS:return iS;case uS:return oS;case hS:return aS;case gS:return sS}return t});var fS=pS,mS=w$,bS=_$,vS=L$,yS=GC,xS=fS,wS=Xo,$S=sC,CS=$C,SS="[object Arguments]",kS="[object Array]",DS="[object Object]",TS=Object.prototype.hasOwnProperty;var OS=function(e,t,n,r,i,o){var a=wS(e),s=wS(t),l=a?kS:xS(e),c=s?kS:xS(t),d=(l=l==SS?DS:l)==DS,u=(c=c==SS?DS:c)==DS,h=l==c;if(h&&$S(e)){if(!$S(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new mS),a||CS(e)?bS(e,t,n,r,i,o):vS(e,t,l,n,r,i,o);if(!(1&n)){var g=d&&TS.call(e,"__wrapped__"),p=u&&TS.call(t,"__wrapped__");if(g||p){var f=g?e.value():e,m=p?t.value():t;return o||(o=new mS),i(f,m,n,r,o)}}return!!h&&(o||(o=new mS),yS(e,t,n,r,i,o))},ES=ua;var _S=function e(t,n,r,i,o){return t===n||(null==t||null==n||!ES(t)&&!ES(n)?t!=t&&n!=n:OS(t,n,r,i,e,o))},MS=w$,FS=_S;var IS=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new MS;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?FS(d,c,3,r,u):h))return!1}}return!0},AS=xa;var BS=function(e){return e==e&&!AS(e)},jS=BS,zS=VC;var RS=function(e){for(var t=zS(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,jS(i)]}return t};var PS=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},LS=IS,NS=RS,HS=PS;var WS=function(e,t){return null!=e&&t in Object(e)},VS=fl,YS=iC,US=Xo,KS=cC,XS=dC,qS=bl;var GS=function(e,t,n){for(var r=-1,i=(t=VS(t,e)).length,o=!1;++r<i;){var a=qS(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&XS(i)&&KS(a,i)&&(US(e)||YS(e))},ZS=WS,QS=GS;var JS=_S,ek=$l,tk=function(e,t){return null!=e&&QS(e,t,ZS)},nk=ya,rk=BS,ik=PS,ok=bl;var ak=function(e){return function(t){return null==t?void 0:t[e]}},sk=xl;var lk=ak,ck=function(e){return function(t){return sk(t,e)}},dk=ya,uk=bl;var hk=function(e){var t=NS(e);return 1==t.length&&t[0][2]?HS(t[0][0],t[0][1]):function(n){return n===e||LS(n,e,t)}},gk=function(e,t){return nk(e)&&rk(t)?ik(ok(e),t):function(n){var r=ek(n,e);return void 0===r&&r===t?tk(n,e):JS(t,r,3)}},pk=function(e){return e},fk=Xo,mk=function(e){return dk(e)?lk(uk(e)):ck(e)};var bk=function(e){return"function"==typeof e?e:null==e?pk:"object"==typeof e?fk(e)?gk(e[0],e[1]):hk(e):mk(e)},vk=bk,yk=LC,xk=VC;var wk=function(e){return function(t,n,r){var i=Object(t);if(!yk(t)){var o=vk(n);t=xk(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var $k=Gh,Ck=1/0;var Sk=function(e){return e?(e=$k(e))===Ck||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var kk=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Dk=bk,Tk=function(e){var t=Sk(e),n=t%1;return t==t?n?t-n:t:0},Ok=Math.max;var Ek=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Tk(n);return i<0&&(i=Ok(r+i,0)),kk(e,Dk(t),i)},_k=Uo(Ek),Mk=Uo(wk(Ek)),Fk=_S;var Ik=Uo((function(e,t){return Fk(e,t)}));const Ak=M(Vo.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Bk=M.ul`
    border-bottom-left-radius: ${pc.sm};
    border-bottom-right-radius: ${pc.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${gc["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${cc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${mc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,jk=M.li`
    :hover,
    :focus,
    :active {
        background: ${cc["bg-hover"]};
    }
    ${e=>{if(e.$checked)return F`
                background: ${cc["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${cc["bg-selected-hover"]};
                }
            `}}
`,zk=M.button`
    display: flex;
    ${e=>e.$multiSelect?F`
                padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
            `:F`
                padding: 15px ${gc["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${gc["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${cc["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,Rk=F`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Pk=M.div`
    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}
    color: ${cc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rk}
`,Lk=M.div`
    color: ${cc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rk}

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${dc["body-md-semibold"]}
                `:F`
                    ${dc["body-baseline-regular"]}
                `}
`,Nk=M.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${Pk} {
                        display: inline;
                    }

                    ${Lk} {
                        display: inline;
                        margin-left: ${gc["spacing-8"]};
                    }
                `}}}
`,Hk=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Wk=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Vk=M(Rh)`
    flex-shrink: 0;
    margin-right: ${gc["spacing-16"]};
`,Yk=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${gc["spacing-16"]} 0 ${gc["spacing-8"]} 0;
`,Uk=M.button`
    ${e=>"small"===e.$variant?dc["body-md-semibold"]:dc["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${cc["text-primary"]};
`,Kk=M.div`
    width: 100%;
    display: flex;
    padding: 15px ${gc["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}
`,Xk=M(z)`
    height: 1em;
    width: 1em;
    margin-right: ${gc["spacing-4"]};
    color: ${cc["icon-error"]};
`,qk=M(Kc)`
    margin-right: ${gc["spacing-4"]};
    color: ${cc.icon};
`,Gk=e=>"small"===e?1:1.375,Zk=e=>F`
        height: ${Gk(e)}rem;
        width: ${Gk(e)}rem;
    `,Qk=M.li`
    background: ${cc["bg-strong"]};
    display: flex;
    border-radius: ${pc.sm};
    align-items: center;
`,Jk=M(Zg)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${gc["spacing-8"]} 0 0;
    width: 100%;
`,eD=M(Le)`
    ${e=>Zk(e.$variant)}
    margin: 0 ${gc["spacing-8"]};
    color: ${cc.icon};
`,tD=M(Sc)`
    ${e=>Zk(e.$variant)}
    padding: 0;
    margin: 0 ${gc["spacing-8"]};
    color: ${cc.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return F`
                svg {
                    ${Zk(e.$variant)}
                }
            `}}
`,nD=g(((n,r)=>{const{onClear:i}=n,o=dt(n,["onClear"]);return t(Qk,{children:[e(eD,{$variant:n.variant}),e(Jk,Object.assign({ref:r,$variant:n.variant},o)),o.value&&e(tD,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:n.variant,children:e(J,{})})]},"search")})),rD=r=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:g,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:D="inline",renderListItem:T,onBlur:O,hideNoResultsDisplay:E,renderCustomCallToAction:_,variant:M="default"}=r,F=dt(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[I,A]=a(0),[B,j]=a(""),[z,R]=a(null!=i?i:[]),[P,L]=a(0),N=Do({height:P}),H=o(null),W=o(null),V=o([]),Y=o(null),U=o(null),K=o(I),X=o(z),q=e=>{K.current=e,A(e)},G=e=>{X.current=e,R(e)};u((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(j(""),h){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),q(-1)):V.current[I]&&V.current[I].focus()}else L(0)}),[h]),u((()=>{if(h){const e=te();L(e)}}),[z,C]),u((()=>{G(null!=i?i:[]),j(""),q(0)}),[i]);const Z=e=>{const t=s?s(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return uu.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!Mk(x,(t=>Ik(t,e))),ee=e=>{if(""===e)G(null!=i?i:[]);else if(m){const t=m(e);G(t)}else{const t=null==i?void 0:i.filter((t=>{const{title:n,secondaryLabel:r}=Z(t),i=e.trim().toLowerCase();return n.includes(i)||r&&r.includes(i)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{var t,n;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<X.current.length-1){const e=K.current+1;null===(t=V.current[e])||void 0===t||t.focus(),q(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(n=V.current[e])||void 0===n||n.focus(),q(K.current-1)}break;case"Escape":b&&b(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;j(t),f&&f()},oe=()=>{var e;j(""),null===(e=Y.current)||void 0===e||e.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{O&&O()},le=r=>t(n,{children:[e(Hk,{$maxLines:k,"aria-hidden":!0,children:r}),e(Wk,{$maxLines:k,"aria-hidden":!0,children:r})]}),ce=n=>{const{title:r,secondaryLabel:i}=Z(n),o=Q(r),a=i&&Q(i);return t(Nk,{$labelDisplayType:o||a?"next-line":D,children:[e(Pk,{$truncateType:S,$maxLines:k,$variant:M,"aria-label":r,children:"middle"===S&&o?le(r):r}),i&&e(Lk,{$truncateType:S,$maxLines:k,$labelDisplayType:D,"aria-label":i,children:"middle"===S&&a?le(i):i})]})},de=()=>{if(!$||"success"===C)return z.map(((n,r)=>e(jk,{$checked:J(n)&&!y,children:t(zk,{$hasNextLineLabel:"next-line"===D&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{re(e,n)},ref:e=>V.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:M,children:[y&&e(Vk,{checked:J(n),displaySize:"small"}),T?T(n,{selected:J(n)}):ce(n)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},ue=()=>{if(x&&y&&z.length>0&&!B&&"success"===C)return e(Yk,{children:e(Uk,{onClick:w,type:"button",$variant:M,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!E&&(B||!g)&&0===z.length&&"success"===C)return t(Kk,{"data-testid":"list-no-results",$variant:M,children:[e(Xk,{"data-testid":"no-result-icon",$variant:M}),"No results found."]},"noResults")},ge=()=>{if($&&"loading"===C)return t(Kk,{"data-testid":"list-loading",$variant:M,children:[e(qk,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(Kk,{"data-testid":"list-fail",$variant:M,children:[e(Xk,{"data-testid":"load-error-icon",$variant:M}),"Failed to load. ",e(Uk,{onClick:ae,type:"button",$variant:M,children:"Try again."})]},"noResults")};return e(n,{children:t(Ak,{style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(h)return t(Bk,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},F,{children:[(g||m)&&"success"===C?e(nD,{ref:Y,onChange:ie,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:M}):null,ue(),he(),ge(),pe(),de()]}))})(),(()=>{if(h&&_)return e("div",{ref:U,"data-testid":"custom-cta",children:_(b,z)})})()]})})},iD=M.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return F`
                border-bottom: ${hc["width-010"]} ${hc.solid}
                    ${cc.border};
            `}}

    ${e=>e.$readOnly?F`
                border: 0;
                margin: 0;
            `:"right"===e.$position?F`
                        flex-direction: row-reverse;
                        margin: 0 ${gc["spacing-16"]};
                    `:F`
                        flex-direction: row;
                        margin: 0 ${gc["spacing-16"]};
                    `}
`,oD=M($p)`
    padding: 0;
    width: auto;
`,aD=M.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${gc["spacing-12"]};
`,sD=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${uc["duration-250"]} ${uc["ease-default"]};
    margin: 0 ${gc["spacing-12"]};
    display: flex;
    align-items: center;
`,lD=M(fe)`
    color: ${cc.icon};
    height: ${dc.Spec["body-size-baseline"]};
    width: ${dc.Spec["body-size-baseline"]};
`,cD=M.div`
    display: flex;
    flex: 1 1 auto;
`,dD=M(Ec.BodyBL)`
    text-align: left;
    ${kc(2)}
    text-overflow: ellipsis;
`,uD=M(dD)`
    color: ${cc["text-subtler"]};
`,hD=M.div`
    width: 1px;
    background: ${cc.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin: 0 ${gc["spacing-12"]};
                `:F`
                    margin: 0 ${gc["spacing-12"]} 0 0;
                `}
`,gD=M(qg)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${gc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,pD=M(qg)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${gc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,fD=M(i$)``,mD=M.div`
    position: relative;
    display: flex;
    align-items: center;

    ${dc["body-baseline-regular"]}
    color: ${cc.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${cc["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?gc["spacing-4"]:gc["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?gc["spacing-4"]:gc["spacing-12"]};
                `};
`,bD=i.forwardRef(((r,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:g}=r,p=dt(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:D,"data-selector-testid":T}=s.attributes,{position:O}=s,[E,_]=a(C),[M,F]=a(!1),I=o(null);u((()=>{_(C)}),[C]);const A=()=>{if(E)return $?$(E):x?x(E):E.toString()},B=e=>{!e&&k&&k(),e&&D&&D()},j=e=>{e.preventDefault(),p.disabled||(F(!M),B(!M))},z=(e,t)=>{var n;_(e),F(!1),B(!1),I&&(null===(n=I.current)||void 0===n||n.focus()),S&&S(e,t)},R=e=>{c&&c(e)},P=()=>{g&&g()},L=()=>{var e;F(!1),B(!1),I&&(null===(e=I.current)||void 0===e||e.focus())};return t(_p,{className:h,show:M,error:l&&!M,disabled:p.disabled,readOnly:d,onBlur:()=>{F(!1),B(!1),P()},children:[t(iD,{$expanded:M,$readOnly:d,$position:O,children:[d?E?e(aD,{children:e(dD,{"data-testid":"selector-label",children:A()})}):null:e(oD,{ref:I,type:"button",disabled:p.disabled,"data-testid":T||"addon-selector",onClick:j,children:t(n,{children:[t(cD,{children:[f&&!E&&e(uD,{children:f}),E&&e(dD,{"data-testid":"selector-label",children:A()})]}),e(sD,{$expanded:M,children:e(lD,{})})]})}),e(hD,{$readOnly:d,$position:O}),e(fD,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:R,"data-testid":p["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?e(rD,{listItems:m,selectedItems:C?[C]:[],onSelectItem:z,valueExtractor:x,listExtractor:w,visible:M,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):e(n,{})]})})),vD=i.forwardRef(((n,r)=>{var{addon:i,error:o,className:a}=n,s=dt(n,["addon","error","className"]);const l=()=>e(pD,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(fD,Object.assign({ref:r},s,{"data-testid":"input",styleType:"no-border"}))});if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:d}=s;switch(n){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(bD,Object.assign({ref:r,addon:i,error:o,className:a},s)):l()}case"custom":{const n=i.attributes;return n.children?t(gD,{$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(mD,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:n.children}),e(fD,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const n=i.attributes;return n.value?t(gD,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(mD,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:n.value}),e(fD,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),yD=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:o,label:r,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(vD,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),xD=M(vD)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":gc["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,wD=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=cc.icon,$activeColor:n=cc["icon-primary"]})=>e?t:n};
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,$D=M.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,CD=M(Ec.BodyBL)`
    color: ${cc["text-subtler"]};
`,SD=M(Kc)`
    margin-right: ${gc["spacing-8"]};
    color: ${cc.icon};
`,kD=M.span`
    color: ${cc["text-primary"]};
    text-decoration: underline;
    font-weight: ${dc.Spec["weight-semibold"]};
`,DD=M.span`
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-8"]};
`,TD=M(We)`
    color: ${cc["icon-warning"]};
    margin-right: ${gc["spacing-8"]};
    height: 1em;
    width: 1em;
`,OD=M.span`
    color: ${cc["text-warning"]};
`,ED=M(Qg)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${dc["body-baseline-regular"]}

    :hover, :active, :focus {
        ${kD} {
            color: ${cc["text-hover"]};
        }
    }
`;var _D,MD,FD={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */_D=FD,MD=FD.exports,function(){var e,t="Expected a function",n="__lodash_hash_undefined__",r="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,g=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],p="[object Arguments]",f="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",D="[object Set]",T="[object String]",O="[object Symbol]",E="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",F="[object Float32Array]",I="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",z="[object Uint8Array]",R="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),K=RegExp(Y.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),ne=/^\s+/,re=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Oe="["+xe+"]",Ee="["+De+"]",_e="["+we+"]",Me="\\d+",Fe="["+$e+"]",Ie="["+Ce+"]",Ae="[^"+xe+De+Me+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Le="\\u200d",Ne="(?:"+Ie+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ye="(?:"+_e+"|"+Be+")?",Ue="["+ke+"]?",Ke=Ue+Ye+"(?:"+Le+"(?:"+[je,ze,Re].join("|")+")"+Ue+Ye+")*",Xe="(?:"+[Fe,ze,Re].join("|")+")"+Ke,qe="(?:"+[je+_e+"?",_e,ze,Re,Oe].join("|")+")",Ge=RegExp(Te,"g"),Ze=RegExp(_e,"g"),Qe=RegExp(Be+"(?="+Be+")|"+qe+Ke,"g"),Je=RegExp([Pe+"?"+Ie+"+"+We+"(?="+[Ee,Pe,"$"].join("|")+")",He+"+"+Ve+"(?="+[Ee,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+We,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Xe].join("|"),"g"),et=RegExp("["+Le+xe+we+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[F]=it[I]=it[A]=it[B]=it[j]=it[z]=it[R]=it[P]=it[L]=!0,it[p]=it[f]=it[_]=it[m]=it[M]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[D]=it[T]=it[E]=!1;var ot={};ot[p]=ot[f]=ot[_]=ot[M]=ot[m]=ot[b]=ot[F]=ot[I]=ot[A]=ot[B]=ot[j]=ot[w]=ot[$]=ot[C]=ot[k]=ot[D]=ot[T]=ot[O]=ot[z]=ot[R]=ot[P]=ot[L]=!0,ot[v]=ot[y]=ot[E]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Yo&&Yo&&Yo.Object===Object&&Yo,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=MD&&!MD.nodeType&&MD,gt=ht&&_D&&!_D.nodeType&&_D,pt=gt&&gt.exports===ht,ft=pt&&ct.process,mt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function Ct(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function St(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}function kt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Ot(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Et(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Mt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Ft(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function It(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function At(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Bt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var jt=Wt("length");function zt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Rt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Rt(e,Nt,n)}function Lt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Nt(e){return e!=e}function Ht(e,t){var n=null==e?0:e.length;return n?Ut(e,t)/n:u}function Wt(t){return function(n){return null==n?e:n[t]}}function Vt(t){return function(n){return null==t?e:t[n]}}function Yt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Ut(t,n){for(var r,i=-1,o=t.length;++i<o;){var a=n(t[i]);a!==e&&(r=r===e?a:r+a)}return r}function Kt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Xt(e){return e?e.slice(0,hn(e)+1).replace(ne,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return Mt(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,r=e.length;++n<r&&Pt(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length;n--&&Pt(t,e[n],0)>-1;);return n}var en=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(e){return"\\"+at[e]}function rn(e){return et.test(e)}function on(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function an(e,t){return function(n){return e(t(n))}}function sn(e,t){for(var n=-1,i=e.length,o=0,a=[];++n<i;){var s=e[n];s!==t&&s!==r||(e[n]=r,a[o++]=n)}return a}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dn(e){return rn(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):jt(e)}function un(e){return rn(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function hn(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var gn=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pn=function re(xe){var we=(xe=null==xe?ut:pn.defaults(ut.Object(),xe,pn.pick(ut,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,De=xe.Object,Te=xe.RegExp,Oe=xe.String,Ee=xe.TypeError,_e=we.prototype,Me=Se.prototype,Fe=De.prototype,Ie=xe["__core-js_shared__"],Ae=Me.toString,Be=Fe.hasOwnProperty,je=0,ze=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Fe.toString,Pe=Ae.call(De),Le=ut._,Ne=Te("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=pt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=an(De.getPrototypeOf,De),Ke=De.create,Xe=Fe.propertyIsEnumerable,qe=_e.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,at=We?We.toStringTag:e,ct=function(){try{var e=ho(De,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,gt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=ke.ceil,mt=ke.floor,jt=De.getOwnPropertySymbols,Vt=He?He.isBuffer:e,fn=xe.isFinite,mn=_e.join,bn=an(De.keys,De),vn=ke.max,yn=ke.min,xn=$e.now,wn=xe.parseInt,$n=ke.random,Cn=_e.reverse,Sn=ho(xe,"DataView"),kn=ho(xe,"Map"),Dn=ho(xe,"Promise"),Tn=ho(xe,"Set"),On=ho(xe,"WeakMap"),En=ho(De,"create"),_n=On&&new On,Mn={},Fn=Ro(Sn),In=Ro(kn),An=Ro(Dn),Bn=Ro(Tn),jn=Ro(On),zn=We?We.prototype:e,Rn=zn?zn.valueOf:e,Pn=zn?zn.toString:e;function Ln(e){if(ts(e)&&!Va(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Be.call(e,"__wrapped__"))return Po(e)}return new Wn(e)}var Nn=function(){function t(){}return function(n){if(!es(n))return{};if(Ke)return Ke(n);t.prototype=n;var r=new t;return t.prototype=e,r}}();function Hn(){}function Wn(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=e}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function qn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Va(e),r=!n&&Wa(e),i=!n&&!r&&Xa(e),o=!n&&!r&&!i&&cs(e),a=n||r||i||o,s=a?Kt(e.length,Oe):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Zn(t){var n=t.length;return n?t[Xr(0,n-1)]:e}function Qn(e,t){return Bo(Ei(e),sr(t,0,e.length))}function Jn(e){return Bo(Ei(e))}function er(t,n,r){(r!==e&&!La(t[n],r)||r===e&&!(n in t))&&or(t,n,r)}function tr(t,n,r){var i=t[n];Be.call(t,n)&&La(i,r)&&(r!==e||n in t)||or(t,n,r)}function nr(e,t){for(var n=e.length;n--;)if(La(e[n][0],t))return n;return-1}function rr(e,t,n,r){return hr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function ir(e,t){return e&&_i(t,Ms(t),e)}function or(e,t,n){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(t,n){for(var r=-1,i=n.length,o=we(i),a=null==t;++r<i;)o[r]=a?e:Ds(t,n[r]);return o}function sr(t,n,r){return t==t&&(r!==e&&(t=t<=r?t:r),n!==e&&(t=t>=n?t:n)),t}function lr(t,n,r,i,o,a){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=o?r(t,i,o,a):r(t)),s!==e)return s;if(!es(t))return t;var u=Va(t);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(t),!l)return Ei(t,s)}else{var h=fo(t),g=h==y||h==x;if(Xa(t))return Ci(t,l);if(h==C||h==p||g&&!o){if(s=c||g?{}:bo(t),!l)return c?function(e,t){return _i(e,po(e),t)}(t,function(e,t){return e&&_i(t,Fs(t),e)}(s,t)):function(e,t){return _i(e,go(e),t)}(t,ir(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,n){var r,i=e.constructor;switch(t){case _:return Si(e);case m:case b:return new i(+e);case M:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case F:case I:case A:case B:case j:case z:case R:case P:case L:return ki(e,n);case w:return new i;case $:case T:return new i(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new i;case O:return r=e,Rn?De(Rn.call(r)):{}}}(t,h,l)}}a||(a=new qn);var f=a.get(t);if(f)return f;a.set(t,s),as(t)?t.forEach((function(e){s.add(lr(e,n,r,e,t,a))})):ns(t)&&t.forEach((function(e,i){s.set(i,lr(e,n,r,i,t,a))}));var v=u?e:(d?c?io:ro:c?Fs:Ms)(t);return kt(v||t,(function(e,i){v&&(e=t[i=e]),tr(s,i,lr(e,n,r,i,t,a))})),s}function cr(t,n,r){var i=r.length;if(null==t)return!i;for(t=De(t);i--;){var o=r[i],a=n[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dr(n,r,i){if("function"!=typeof n)throw new Ee(t);return Mo((function(){n.apply(e,i)}),r)}function ur(e,t,n,r){var i=-1,o=Et,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=Mt(t,qt(n))),r?(o=_t,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Xn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,r)||l.push(d)}return l}Ln.templateSettings={escape:X,evaluate:q,interpolate:G,variable:"",imports:{_:Ln}},Ln.prototype=Hn.prototype,Ln.prototype.constructor=Ln,Wn.prototype=Nn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=Nn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=En?En(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(t){var r=this.__data__;if(En){var i=r[t];return i===n?e:i}return Be.call(r,t)?r[t]:e},Yn.prototype.has=function(t){var n=this.__data__;return En?n[t]!==e:Be.call(n,t)},Yn.prototype.set=function(t,r){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=En&&r===e?n:r,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0||(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,0))},Un.prototype.get=function(t){var n=this.__data__,r=nr(n,t);return r<0?e:n[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(kn||Un),string:new Yn}},Kn.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return co(this,e).get(e)},Kn.prototype.has=function(e){return co(this,e).has(e)},Kn.prototype.set=function(e,t){var n=co(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Xn.prototype.add=Xn.prototype.push=function(e){return this.__data__.set(e,n),this},Xn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.clear=function(){this.__data__=new Un,this.size=0},qn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},qn.prototype.get=function(e){return this.__data__.get(e)},qn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var hr=Ii(xr),gr=Ii(wr,!0);function pr(e,t){var n=!0;return hr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function fr(t,n,r){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=n(a);if(null!=s&&(l===e?s==s&&!ls(s):r(s,l)))var l=s,c=a}return c}function mr(e,t){var n=[];return hr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?br(s,t-1,n,r,i):Ft(i,s):r||(i[i.length]=s)}return i}var vr=Ai(),yr=Ai(!0);function xr(e,t){return e&&vr(e,t,Ms)}function wr(e,t){return e&&yr(e,t,Ms)}function $r(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cr(t,n){for(var r=0,i=(n=yi(n,t)).length;null!=t&&r<i;)t=t[zo(n[r++])];return r&&r==i?t:e}function Sr(e,t,n){var r=t(e);return Va(e)?r:Ft(r,n(e))}function kr(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in De(t)?function(t){var n=Be.call(t,at),r=t[at];try{t[at]=e;var i=!0}catch(e){}var o=Re.call(t);return i&&(n?t[at]=r:delete t[at]),o}(t):function(e){return Re.call(e)}(t)}function Dr(e,t){return e>t}function Tr(e,t){return null!=e&&Be.call(e,t)}function Or(e,t){return null!=e&&t in De(e)}function Er(t,n,r){for(var i=r?_t:Et,o=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&n&&(u=Mt(u,qt(n))),c=yn(u.length,c),l[s]=!r&&(n||o>=120&&u.length>=120)?new Xn(s&&u):e}u=t[0];var h=-1,g=l[0];e:for(;++h<o&&d.length<c;){var p=u[h],f=n?n(p):p;if(p=r||0!==p?p:0,!(g?Zt(g,f):i(d,f,r))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,f):i(t[s],f,r)))continue e}g&&g.push(f),d.push(p)}}return d}function _r(t,n,r){var i=null==(t=Oo(t,n=yi(n,t)))?t:t[zo(Go(n))];return null==i?e:Ct(i,t,r)}function Mr(e){return ts(e)&&kr(e)==p}function Fr(t,n,r,i,o){return t===n||(null==t||null==n||!ts(t)&&!ts(n)?t!=t&&n!=n:function(t,n,r,i,o,a){var s=Va(t),l=Va(n),c=s?f:fo(t),d=l?f:fo(n),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,g=c==d;if(g&&Xa(t)){if(!Xa(n))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new qn),s||cs(t)?to(t,n,r,i,o,a):function(e,t,n,r,i,o,a){switch(n){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case T:return e==t+"";case w:var s=on;case D:var l=1&r;if(s||(s=ln),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=to(s(e),s(t),r,i,o,a);return a.delete(e),d;case O:if(Rn)return Rn.call(e)==Rn.call(t)}return!1}(t,n,c,r,i,o,a);if(!(1&r)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(n,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?n.value():n;return a||(a=new qn),o(S,E,r,i,a)}}return!!g&&(a||(a=new qn),function(t,n,r,i,o,a){var s=1&r,l=ro(t),c=l.length,d=ro(n),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var g=l[h];if(!(s?g in n:Be.call(n,g)))return!1}var p=a.get(t),f=a.get(n);if(p&&f)return p==n&&f==t;var m=!0;a.set(t,n),a.set(n,t);for(var b=s;++h<c;){var v=t[g=l[h]],y=n[g];if(i)var x=s?i(y,v,g,n,t,a):i(v,y,g,t,n,a);if(!(x===e?v===y||o(v,y,r,i,a):x)){m=!1;break}b||(b="constructor"==g)}if(m&&!b){var w=t.constructor,$=n.constructor;w==$||!("constructor"in t)||!("constructor"in n)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(n),m}(t,n,r,i,o,a))}(t,n,r,i,Fr,o))}function Ir(t,n,r,i){var o=r.length,a=o,s=!i;if(null==t)return!a;for(t=De(t);o--;){var l=r[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=r[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new qn;if(i)var g=i(d,u,c,t,n,h);if(!(g===e?Fr(u,d,3,i,h):g))return!1}}return!0}function Ar(e){return!(!es(e)||(t=e,ze&&ze in t))&&(Za(e)?Ne:pe).test(Ro(e));var t}function Br(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Va(e)?Nr(e[0],e[1]):Lr(e):hl(e)}function jr(e){if(!So(e))return bn(e);var t=[];for(var n in De(e))Be.call(e,n)&&"constructor"!=n&&t.push(n);return t}function zr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in De(e))t.push(n);return t}(e);var t=So(e),n=[];for(var r in e)("constructor"!=r||!t&&Be.call(e,r))&&n.push(r);return n}function Rr(e,t){return e<t}function Pr(e,t){var n=-1,r=Ua(e)?we(e.length):[];return hr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function Lr(e){var t=uo(e);return 1==t.length&&t[0][2]?Do(t[0][0],t[0][1]):function(n){return n===e||Ir(n,e,t)}}function Nr(t,n){return wo(t)&&ko(n)?Do(zo(t),n):function(r){var i=Ds(r,t);return i===e&&i===n?Ts(r,t):Fr(n,i,3)}}function Hr(t,n,r,i,o){t!==n&&vr(n,(function(a,s){if(o||(o=new qn),es(a))!function(t,n,r,i,o,a,s){var l=Eo(t,r),c=Eo(n,r),d=s.get(c);if(d)er(t,r,d);else{var u=a?a(l,c,r+"",t,n,s):e,h=u===e;if(h){var g=Va(c),p=!g&&Xa(c),f=!g&&!p&&cs(c);u=c,g||p||f?Va(l)?u=l:Ka(l)?u=Ei(l):p?(h=!1,u=Ci(c,!0)):f?(h=!1,u=ki(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),er(t,r,u)}}(t,n,s,r,Hr,i,o);else{var l=i?i(Eo(t,s),a,s+"",t,n,o):e;l===e&&(l=a),er(t,s,l)}}),Fs)}function Wr(t,n){var r=t.length;if(r)return yo(n+=n<0?r:0,r)?t[n]:e}function Vr(e,t,n){t=t.length?Mt(t,(function(e){return Va(e)?function(t){return Cr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=Mt(t,qt(lo()));var i=Pr(e,(function(e,n,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;++r<a;){var l=Di(i[r],o[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=Cr(e,a);n(s,a)&&Jr(o,yi(a,e),s)}return o}function Ur(e,t,n,r){var i=r?Lt:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=Ei(t)),n&&(s=Mt(e,qt(n)));++o<a;)for(var l=0,c=t[o],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Xr(e,t){return e+mt($n()*(t-e+1))}function qr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=mt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Fo(To(e,t,rl),e+"")}function Zr(e){return Zn(Ls(e))}function Qr(e,t){var n=Ls(e);return Bo(n,sr(t,0,n.length))}function Jr(t,n,r,i){if(!es(t))return t;for(var o=-1,a=(n=yi(n,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=zo(n[o]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(n[o+1])?[]:{})}tr(l,c,d),l=l[c]}return t}var ei=_n?function(e,t){return _n.set(e,t),e}:rl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Bo(Ls(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=we(i);++r<i;)o[r]=e[r+t];return o}function ii(e,t){var n;return hr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function oi(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!ls(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return ai(e,t,rl,n)}function ai(t,n,r,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(n=r(n))!=n,l=null===n,c=ls(n),d=n===e;o<a;){var u=mt((o+a)/2),h=r(t[u]),g=h!==e,p=null===h,f=h==h,m=ls(h);if(s)var b=i||f;else b=d?f&&(i||g):l?f&&g&&(i||!p):c?f&&g&&!p&&(i||!m):!p&&!m&&(i?h<=n:h<n);b?o=u+1:a=u}return yn(a,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Va(e))return Mt(e,ci)+"";if(ls(e))return Pn?Pn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Et,o=e.length,a=!0,s=[],l=s;if(n)a=!1,i=_t;else if(o>=200){var c=t?null:qi(e);if(c)return ln(c);a=!1,i=Zt,l=new Xn}else l=t?[]:s;e:for(;++r<o;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Oo(e,t=yi(t,e)))||delete e[zo(Go(t))]}function hi(e,t,n,r){return Jr(e,t,n(Cr(e,t)),r)}function gi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ri(e,r?0:o,r?o+1:i):ri(e,r?o+1:0,r?i:o)}function pi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),It(t,(function(e,t){return t.func.apply(t.thisArg,Ft([e],t.args))}),n)}function fi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,o=we(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=ur(o[i]||a,e[s],t,n));return di(br(o,1),t,n)}function mi(t,n,r){for(var i=-1,o=t.length,a=n.length,s={};++i<o;){var l=i<a?n[i]:e;r(s,t[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:rl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:jo(vs(e))}var xi=Gr;function wi(t,n,r){var i=t.length;return r=r===e?i:r,!n&&r>=i?t:ri(t,n,r)}var $i=dt||function(e){return ut.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ki(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Di(t,n){if(t!==n){var r=t!==e,i=null===t,o=t==t,a=ls(t),s=n!==e,l=null===n,c=n==n,d=ls(n);if(!l&&!d&&!a&&t>n||a&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!o)return 1;if(!i&&!a&&!d&&t<n||d&&r&&o&&!i&&!a||l&&r&&o||!s&&o||!c)return-1}return 0}function Ti(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,l=t.length,c=vn(o-a,0),d=we(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Oi(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,l=-1,c=t.length,d=vn(o-s,0),u=we(d+c),h=!r;++i<d;)u[i]=e[i];for(var g=i;++l<c;)u[g+l]=t[l];for(;++a<s;)(h||i<o)&&(u[g+n[a]]=e[i++]);return u}function Ei(e,t){var n=-1,r=e.length;for(t||(t=we(r));++n<r;)t[n]=e[n];return t}function _i(t,n,r,i){var o=!r;r||(r={});for(var a=-1,s=n.length;++a<s;){var l=n[a],c=i?i(r[l],t[l],l,r,t):e;c===e&&(c=t[l]),o?or(r,l,c):tr(r,l,c)}return r}function Mi(e,t){return function(n,r){var i=Va(n)?St:rr,o=t?t():{};return i(n,e,lo(r,2),o)}}function Fi(t){return Gr((function(n,r){var i=-1,o=r.length,a=o>1?r[o-1]:e,s=o>2?r[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(r[0],r[1],s)&&(a=o<3?e:a,o=1),n=De(n);++i<o;){var l=r[i];l&&t(n,l,i,a)}return n}))}function Ii(e,t){return function(n,r){if(null==n)return n;if(!Ua(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=De(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Ai(e){return function(t,n,r){for(var i=-1,o=De(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}}function Bi(t){return function(n){var r=rn(n=vs(n))?un(n):e,i=r?r[0]:n.charAt(0),o=r?wi(r,1).join(""):n.slice(1);return i[t]()+o}}function ji(e){return function(t){return It(Zs(Ws(t).replace(Ge,"")),e,"")}}function zi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Nn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Ri(t){return function(n,r,i){var o=De(n);if(!Ua(n)){var a=lo(r,3);n=Ms(n),r=function(e){return a(o[e],e,o)}}var s=t(n,r,i);return s>-1?o[a?n[s]:s]:e}}function Pi(n){return no((function(r){var i=r.length,o=i,a=Wn.prototype.thru;for(n&&r.reverse();o--;){var s=r[o];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==ao(s))var l=new Wn([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=r[o]),d="wrapper"==c?oo(s):e;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Va(t))return l.plant(t).value();for(var n=0,o=i?r[n].apply(this,e):t;++n<i;)o=r[n].call(this,o);return o}}))}function Li(t,n,r,i,o,a,l,c,d,u){var h=n&s,g=1&n,p=2&n,f=24&n,m=512&n,b=p?e:zi(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(f)var w=so(s),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Ti(y,i,o,f)),a&&(y=Oi(y,a,l,f)),v-=$,f&&v<u){var C=sn(y,w);return Ki(t,n,Li,s.placeholder,r,y,C,c,d,u-v)}var S=g?r:this,k=p?S[t]:t;return v=y.length,c?y=function(t,n){for(var r=t.length,i=yn(n.length,r),o=Ei(t);i--;){var a=n[i];t[i]=yo(a,r)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(k=b||zi(k)),k.apply(S,y)}}function Ni(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Hi(t,n){return function(r,i){var o;if(r===e&&i===e)return n;if(r!==e&&(o=r),i!==e){if(o===e)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),o=t(r,i)}return o}}function Wi(e){return no((function(t){return t=Mt(t,qt(lo())),Gr((function(n){var r=this;return e(t,(function(e){return Ct(e,r,n)}))}))}))}function Vi(t,n){var r=(n=n===e?" ":ci(n)).length;if(r<2)return r?qr(n,t):n;var i=qr(n,ft(t/dn(n)));return rn(n)?wi(un(i),0,t).join(""):i.slice(0,t)}function Yi(t){return function(n,r,i){return i&&"number"!=typeof i&&xo(n,r,i)&&(r=i=e),n=gs(n),r===e?(r=n,n=0):r=gs(r),function(e,t,n,r){for(var i=-1,o=vn(ft((t-e)/(n||1)),0),a=we(o);o--;)a[r?o:++i]=e,e+=n;return a}(n,r,i=i===e?n<r?1:-1:gs(i),t)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ms(t),n=ms(n)),e(t,n)}}function Ki(t,n,r,i,s,l,c,d,u,h){var g=8&n;n|=g?o:a,4&(n&=~(g?a:o))||(n&=-4);var p=[t,n,s,g?l:e,g?c:e,g?e:l,g?e:c,d,u,h],f=r.apply(e,p);return $o(t)&&_o(f,p),f.placeholder=i,Io(f,t,n)}function Xi(e){var t=ke[e];return function(e,n){if(e=ms(e),(n=null==n?0:yn(ps(n),292))&&fn(e)){var r=(vs(e)+"e").split("e");return+((r=(vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var qi=Tn&&1/ln(new Tn([,-0]))[1]==c?function(e){return new Tn(e)}:ll;function Gi(e){return function(t){var n=fo(t);return n==w?on(t):n==D?cn(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(n,c,d,u,h,g,p,f){var m=2&c;if(!m&&"function"!=typeof n)throw new Ee(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:vn(ps(p),0),f=f===e?f:ps(f),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(n),w=[n,c,d,u,h,v,y,g,p,f];if(x&&function(e,t){var n=e[1],i=t[1],o=n|i,a=o<131,c=i==s&&8==n||i==s&&n==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&n?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ti(u,d,t[4]):d,e[4]=u?sn(e[3],r):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Oi(u,d,t[6]):d,e[6]=u?sn(e[5],r):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),n=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(f=w[9]=w[9]===e?m?0:n.length:vn(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,n,r){var i=zi(t);return function o(){for(var a=arguments.length,s=we(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sn(s,c);return(a-=d.length)<r?Ki(t,n,Li,o.placeholder,e,s,d,e,e,r-a):Ct(this&&this!==ut&&this instanceof o?i:t,this,s)}}(n,c,f):c!=o&&33!=c||h.length?Li.apply(e,w):function(e,t,n,r){var i=1&t,o=zi(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=r.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++a];return Ct(u,i?n:this,d)}}(n,c,d,u);else var $=function(e,t,n){var r=1&t,i=zi(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(r?n:this,arguments)}}(n,c,d);return Io((x?ei:_o)($,w),n,c)}function Qi(t,n,r,i){return t===e||La(t,Fe[r])&&!Be.call(i,r)?n:t}function Ji(t,n,r,i,o,a){return es(t)&&es(n)&&(a.set(n,t),Hr(t,n,e,Ji,a),a.delete(n)),t}function eo(t){return is(t)?e:t}function to(t,n,r,i,o,a){var s=1&r,l=t.length,c=n.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(n);if(d&&u)return d==n&&u==t;var h=-1,g=!0,p=2&r?new Xn:e;for(a.set(t,n),a.set(n,t);++h<l;){var f=t[h],m=n[h];if(i)var b=s?i(m,f,h,n,t,a):i(f,m,h,t,n,a);if(b!==e){if(b)continue;g=!1;break}if(p){if(!Bt(n,(function(e,t){if(!Zt(p,t)&&(f===e||o(f,e,r,i,a)))return p.push(t)}))){g=!1;break}}else if(f!==m&&!o(f,m,r,i,a)){g=!1;break}}return a.delete(t),a.delete(n),g}function no(t){return Fo(To(t,e,Yo),t+"")}function ro(e){return Sr(e,Ms,go)}function io(e){return Sr(e,Fs,po)}var oo=_n?function(e){return _n.get(e)}:ll;function ao(e){for(var t=e.name+"",n=Mn[t],r=Be.call(Mn,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Be.call(Ln,"placeholder")?Ln:e).placeholder}function lo(){var e=Ln.iteratee||il;return e=e===il?Br:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Ms(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ko(i)]}return t}function ho(t,n){var r=function(t,n){return null==t?e:t[n]}(t,n);return Ar(r)?r:e}var go=jt?function(e){return null==e?[]:(e=De(e),Ot(jt(e),(function(t){return Xe.call(e,t)})))}:fl,po=jt?function(e){for(var t=[];e;)Ft(t,go(e)),e=Ue(e);return t}:fl,fo=kr;function mo(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,o=!1;++r<i;){var a=zo(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Nn(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Ua(n)&&yo(t,n.length):"string"==r&&t in n)&&La(n[t],e)}function wo(e,t){if(Va(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in De(t)}function $o(e){var t=ao(e),n=Ln[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=oo(n);return!!r&&e===r[0]}(Sn&&fo(new Sn(new ArrayBuffer(1)))!=M||kn&&fo(new kn)!=w||Dn&&fo(Dn.resolve())!=S||Tn&&fo(new Tn)!=D||On&&fo(new On)!=E)&&(fo=function(t){var n=kr(t),r=n==C?t.constructor:e,i=r?Ro(r):"";if(i)switch(i){case Fn:return M;case In:return w;case An:return S;case Bn:return D;case jn:return E}return n});var Co=Ie?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fe)}function ko(e){return e==e&&!es(e)}function Do(t,n){return function(r){return null!=r&&r[t]===n&&(n!==e||t in De(r))}}function To(t,n,r){return n=vn(n===e?t.length-1:n,0),function(){for(var e=arguments,i=-1,o=vn(e.length-n,0),a=we(o);++i<o;)a[i]=e[n+i];i=-1;for(var s=we(n+1);++i<n;)s[i]=e[i];return s[n]=r(a),Ct(t,this,s)}}function Oo(e,t){return t.length<2?e:Cr(e,ri(t,0,-1))}function Eo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _o=Ao(ei),Mo=gt||function(e,t){return ut.setTimeout(e,t)},Fo=Ao(ti);function Io(e,t,n){var r=t+"";return Fo(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return kt(g,(function(n){var r="_."+n[0];t&n[1]&&!Et(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(r),n)))}function Ao(t){var n=0,r=0;return function(){var i=xn(),o=16-(i-r);if(r=i,o>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(e,arguments)}}function Bo(t,n){var r=-1,i=t.length,o=i-1;for(n=n===e?i:n;++r<n;){var a=Xr(r,o),s=t[a];t[a]=t[r],t[r]=s}return t.length=n,t}var jo=function(e){var t=Aa(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,n,r,i){t.push(r?i.replace(ce,"$1"):n||e)})),t}));function zo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ro(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gr((function(e,t){return Ka(e)?ur(e,br(t,1,Ka,!0)):[]})),No=Gr((function(t,n){var r=Go(n);return Ka(r)&&(r=e),Ka(t)?ur(t,br(n,1,Ka,!0),lo(r,2)):[]})),Ho=Gr((function(t,n){var r=Go(n);return Ka(r)&&(r=e),Ka(t)?ur(t,br(n,1,Ka,!0),e,r):[]}));function Wo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Rt(e,lo(t,3),i)}function Vo(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return r!==e&&(o=ps(r),o=r<0?vn(i+o,0):yn(o,i-1)),Rt(t,lo(n,3),o,!0)}function Yo(e){return null!=e&&e.length?br(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Ko=Gr((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?Er(t):[]})),Xo=Gr((function(t){var n=Go(t),r=Mt(t,bi);return n===Go(r)?n=e:r.pop(),r.length&&r[0]===t[0]?Er(r,lo(n,2)):[]})),qo=Gr((function(t){var n=Go(t),r=Mt(t,bi);return(n="function"==typeof n?n:e)&&r.pop(),r.length&&r[0]===t[0]?Er(r,e,n):[]}));function Go(t){var n=null==t?0:t.length;return n?t[n-1]:e}var Zo=Gr(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Jo=no((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Kr(e,Mt(t,(function(e){return yo(e,n)?+e:e})).sort(Di)),r}));function ea(e){return null==e?e:Cn.call(e)}var ta=Gr((function(e){return di(br(e,1,Ka,!0))})),na=Gr((function(t){var n=Go(t);return Ka(n)&&(n=e),di(br(t,1,Ka,!0),lo(n,2))})),ra=Gr((function(t){var n=Go(t);return n="function"==typeof n?n:e,di(br(t,1,Ka,!0),e,n)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=vn(e.length,t),!0})),Kt(t,(function(t){return Mt(e,Wt(t))}))}function oa(t,n){if(!t||!t.length)return[];var r=ia(t);return null==n?r:Mt(r,(function(t){return Ct(n,e,t)}))}var aa=Gr((function(e,t){return Ka(e)?ur(e,t):[]})),sa=Gr((function(e){return fi(Ot(e,Ka))})),la=Gr((function(t){var n=Go(t);return Ka(n)&&(n=e),fi(Ot(t,Ka),lo(n,2))})),ca=Gr((function(t){var n=Go(t);return n="function"==typeof n?n:e,fi(Ot(t,Ka),e,n)})),da=Gr(ia),ua=Gr((function(t){var n=t.length,r=n>1?t[n-1]:e;return r="function"==typeof r?(t.pop(),r):e,oa(t,r)}));function ha(e){var t=Ln(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var pa=no((function(t){var n=t.length,r=n?t[0]:0,i=this.__wrapped__,o=function(e){return ar(e,t)};return!(n>1||this.__actions__.length)&&i instanceof Vn&&yo(r)?((i=i.slice(r,+r+(n?1:0))).__actions__.push({func:ga,args:[o],thisArg:e}),new Wn(i,this.__chain__).thru((function(t){return n&&!t.length&&t.push(e),t}))):this.thru(o)})),fa=Mi((function(e,t,n){Be.call(e,n)?++e[n]:or(e,n,1)})),ma=Ri(Wo),ba=Ri(Vo);function va(e,t){return(Va(e)?kt:hr)(e,lo(t,3))}function ya(e,t){return(Va(e)?Dt:gr)(e,lo(t,3))}var xa=Mi((function(e,t,n){Be.call(e,n)?e[n].push(t):or(e,n,[t])})),wa=Gr((function(e,t,n){var r=-1,i="function"==typeof t,o=Ua(e)?we(e.length):[];return hr(e,(function(e){o[++r]=i?Ct(t,e,n):_r(e,t,n)})),o})),$a=Mi((function(e,t,n){or(e,n,t)}));function Ca(e,t){return(Va(e)?Mt:Pr)(e,lo(t,3))}var Sa=Mi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),ka=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xo(e,t[0],t[1])?t=[]:n>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,br(t,1),[])})),Da=ht||function(){return ut.Date.now()};function Ta(t,n,r){return n=r?e:n,n=t&&null==n?t.length:n,Zi(t,s,e,e,e,e,n)}function Oa(n,r){var i;if("function"!=typeof r)throw new Ee(t);return n=ps(n),function(){return--n>0&&(i=r.apply(this,arguments)),n<=1&&(r=e),i}}var Ea=Gr((function(e,t,n){var r=1;if(n.length){var i=sn(n,so(Ea));r|=o}return Zi(e,r,t,n,i)})),_a=Gr((function(e,t,n){var r=3;if(n.length){var i=sn(n,so(_a));r|=o}return Zi(t,r,e,n,i)}));function Ma(n,r,i){var o,a,s,l,c,d,u=0,h=!1,g=!1,p=!0;if("function"!=typeof n)throw new Ee(t);function f(t){var r=o,i=a;return o=a=e,u=t,l=n.apply(i,r)}function m(t){var n=t-d;return d===e||n>=r||n<0||g&&t-u>=s}function b(){var e=Da();if(m(e))return v(e);c=Mo(b,function(e){var t=r-(e-d);return g?yn(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&o?f(t):(o=a=e,l)}function y(){var t=Da(),n=m(t);if(o=arguments,a=this,d=t,n){if(c===e)return function(e){return u=e,c=Mo(b,r),h?f(e):l}(d);if(g)return $i(c),c=Mo(b,r),f(d)}return c===e&&(c=Mo(b,r)),l}return r=ms(r)||0,es(i)&&(h=!!i.leading,s=(g="maxWait"in i)?vn(ms(i.maxWait)||0,r):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==e&&$i(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Da())},y}var Fa=Gr((function(e,t){return dr(e,1,t)})),Ia=Gr((function(e,t,n){return dr(e,ms(t)||0,n)}));function Aa(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new Ee(t);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||Kn),r}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Kn;var ja=xi((function(e,t){var n=(t=1==t.length&&Va(t[0])?Mt(t[0],qt(lo())):Mt(br(t,1),qt(lo()))).length;return Gr((function(r){for(var i=-1,o=yn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return Ct(e,this,r)}))})),za=Gr((function(t,n){var r=sn(n,so(za));return Zi(t,o,e,n,r)})),Ra=Gr((function(t,n){var r=sn(n,so(Ra));return Zi(t,a,e,n,r)})),Pa=no((function(t,n){return Zi(t,l,e,e,e,n)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(Dr),Ha=Ui((function(e,t){return e>=t})),Wa=Mr(function(){return arguments}())?Mr:function(e){return ts(e)&&Be.call(e,"callee")&&!Xe.call(e,"callee")},Va=we.isArray,Ya=bt?qt(bt):function(e){return ts(e)&&kr(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var Xa=Vt||ml,qa=vt?qt(vt):function(e){return ts(e)&&kr(e)==b};function Ga(e){if(!ts(e))return!1;var t=kr(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kr(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=yt?qt(yt):function(e){return ts(e)&&fo(e)==w};function rs(e){return"number"==typeof e||ts(e)&&kr(e)==$}function is(e){if(!ts(e)||kr(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var n=Be.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ae.call(n)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&kr(e)==k},as=wt?qt(wt):function(e){return ts(e)&&fo(e)==D};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&kr(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&kr(e)==O}var cs=$t?qt($t):function(e){return ts(e)&&Ja(e.length)&&!!it[kr(e)]},ds=Ui(Rr),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?un(e):Ei(e);if(et&&e[et])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[et]());var t=fo(e);return(t==w?on:t==D?ln:Ls)(e)}function gs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=gs(e),n=t%1;return t==t?n?t-n:t:0}function fs(e){return e?sr(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var n=ge.test(e);return n||fe.test(e)?lt(e.slice(2),n?2:8):he.test(e)?u:+e}function bs(e){return _i(e,Fs(e))}function vs(e){return null==e?"":ci(e)}var ys=Fi((function(e,t){if(So(t)||Ua(t))_i(t,Ms(t),e);else for(var n in t)Be.call(t,n)&&tr(e,n,t[n])})),xs=Fi((function(e,t){_i(t,Fs(t),e)})),ws=Fi((function(e,t,n,r){_i(t,Fs(t),e,r)})),$s=Fi((function(e,t,n,r){_i(t,Ms(t),e,r)})),Cs=no(ar),Ss=Gr((function(t,n){t=De(t);var r=-1,i=n.length,o=i>2?n[2]:e;for(o&&xo(n[0],n[1],o)&&(i=1);++r<i;)for(var a=n[r],s=Fs(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Fe[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gr((function(t){return t.push(e,Ji),Ct(As,e,t)}));function Ds(t,n,r){var i=null==t?e:Cr(t,n);return i===e?r:i}function Ts(e,t){return null!=e&&mo(e,t,Or)}var Os=Ni((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=n}),el(rl)),Es=Ni((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(n):e[t]=[n]}),lo),_s=Gr(_r);function Ms(e){return Ua(e)?Gn(e):jr(e)}function Fs(e){return Ua(e)?Gn(e,!0):zr(e)}var Is=Fi((function(e,t,n){Hr(e,t,n)})),As=Fi((function(e,t,n,r){Hr(e,t,n,r)})),Bs=no((function(e,t){var n={};if(null==e)return n;var r=!1;t=Mt(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),_i(e,io(e),n),r&&(n=lr(n,7,eo));for(var i=t.length;i--;)ui(n,t[i]);return n})),js=no((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Ts(e,n)}))}(e,t)}));function zs(e,t){if(null==e)return{};var n=Mt(io(e),(function(e){return[e]}));return t=lo(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Rs=Gi(Ms),Ps=Gi(Fs);function Ls(e){return null==e?[]:Gt(e,Ms(e))}var Ns=ji((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,en).replace(Ze,"")}var Vs=ji((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=ji((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Bi("toLowerCase"),Ks=ji((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Xs=ji((function(e,t,n){return e+(n?" ":"")+Gs(t)})),qs=ji((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Bi("toUpperCase");function Zs(t,n,r){return t=vs(t),(n=r?e:n)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(n)||[]}var Qs=Gr((function(t,n){try{return Ct(t,e,n)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=no((function(e,t){return kt(t,(function(t){t=zo(t),or(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),nl=Pi(!0);function rl(e){return e}function il(e){return Br("function"==typeof e?e:lr(e,1))}var ol=Gr((function(e,t){return function(n){return _r(n,e,t)}})),al=Gr((function(e,t){return function(n){return _r(e,n,t)}}));function sl(e,t,n){var r=Ms(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Ms(t)));var o=!(es(n)&&"chain"in n&&!n.chain),a=Za(e);return kt(i,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=Ei(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Ft([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Tt),ul=Wi(Bt);function hl(e){return wo(e)?Wt(zo(e)):function(e){return function(t){return Cr(t,e)}}(e)}var gl=Yi(),pl=Yi(!0);function fl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),Cl=Xi("round"),Sl=Hi((function(e,t){return e-t}),0);return Ln.after=function(e,n){if("function"!=typeof n)throw new Ee(t);return e=ps(e),function(){if(--e<1)return n.apply(this,arguments)}},Ln.ary=Ta,Ln.assign=ys,Ln.assignIn=xs,Ln.assignInWith=ws,Ln.assignWith=$s,Ln.at=Cs,Ln.before=Oa,Ln.bind=Ea,Ln.bindAll=Js,Ln.bindKey=_a,Ln.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Ln.chain=ha,Ln.chunk=function(t,n,r){n=(r?xo(t,n,r):n===e)?1:vn(ps(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var o=0,a=0,s=we(ft(i/n));o<i;)s[a++]=ri(t,o,o+=n);return s},Ln.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},Ln.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Ft(Va(n)?Ei(n):[n],br(t,1))},Ln.cond=function(e){var n=null==e?0:e.length,r=lo();return e=n?Mt(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[r(e[0]),e[1]]})):[],Gr((function(t){for(var r=-1;++r<n;){var i=e[r];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Ln.conforms=function(e){return function(e){var t=Ms(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Ln.constant=el,Ln.countBy=fa,Ln.create=function(e,t){var n=Nn(e);return null==t?n:ir(n,t)},Ln.curry=function t(n,r,i){var o=Zi(n,8,e,e,e,e,e,r=i?e:r);return o.placeholder=t.placeholder,o},Ln.curryRight=function t(n,r,o){var a=Zi(n,i,e,e,e,e,e,r=o?e:r);return a.placeholder=t.placeholder,a},Ln.debounce=Ma,Ln.defaults=Ss,Ln.defaultsDeep=ks,Ln.defer=Fa,Ln.delay=Ia,Ln.difference=Lo,Ln.differenceBy=No,Ln.differenceWith=Ho,Ln.drop=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=r||n===e?1:ps(n))<0?0:n,i):[]},Ln.dropRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,0,(n=i-(n=r||n===e?1:ps(n)))<0?0:n):[]},Ln.dropRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0,!0):[]},Ln.dropWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0):[]},Ln.fill=function(t,n,r,i){var o=null==t?0:t.length;return o?(r&&"number"!=typeof r&&xo(t,n,r)&&(r=0,i=o),function(t,n,r,i){var o=t.length;for((r=ps(r))<0&&(r=-r>o?0:o+r),(i=i===e||i>o?o:ps(i))<0&&(i+=o),i=r>i?0:fs(i);r<i;)t[r++]=n;return t}(t,n,r,i)):[]},Ln.filter=function(e,t){return(Va(e)?Ot:mr)(e,lo(t,3))},Ln.flatMap=function(e,t){return br(Ca(e,t),1)},Ln.flatMapDeep=function(e,t){return br(Ca(e,t),c)},Ln.flatMapDepth=function(t,n,r){return r=r===e?1:ps(r),br(Ca(t,n),r)},Ln.flatten=Yo,Ln.flattenDeep=function(e){return null!=e&&e.length?br(e,c):[]},Ln.flattenDepth=function(t,n){return null!=t&&t.length?br(t,n=n===e?1:ps(n)):[]},Ln.flip=function(e){return Zi(e,512)},Ln.flow=tl,Ln.flowRight=nl,Ln.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Ln.functions=function(e){return null==e?[]:$r(e,Ms(e))},Ln.functionsIn=function(e){return null==e?[]:$r(e,Fs(e))},Ln.groupBy=xa,Ln.initial=function(e){return null!=e&&e.length?ri(e,0,-1):[]},Ln.intersection=Ko,Ln.intersectionBy=Xo,Ln.intersectionWith=qo,Ln.invert=Os,Ln.invertBy=Es,Ln.invokeMap=wa,Ln.iteratee=il,Ln.keyBy=$a,Ln.keys=Ms,Ln.keysIn=Fs,Ln.map=Ca,Ln.mapKeys=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,t(e,r,i),e)})),n},Ln.mapValues=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,r,t(e,r,i))})),n},Ln.matches=function(e){return Lr(lr(e,1))},Ln.matchesProperty=function(e,t){return Nr(e,lr(t,1))},Ln.memoize=Aa,Ln.merge=Is,Ln.mergeWith=As,Ln.method=ol,Ln.methodOf=al,Ln.mixin=sl,Ln.negate=Ba,Ln.nthArg=function(e){return e=ps(e),Gr((function(t){return Wr(t,e)}))},Ln.omit=Bs,Ln.omitBy=function(e,t){return zs(e,Ba(lo(t)))},Ln.once=function(e){return Oa(2,e)},Ln.orderBy=function(t,n,r,i){return null==t?[]:(Va(n)||(n=null==n?[]:[n]),Va(r=i?e:r)||(r=null==r?[]:[r]),Vr(t,n,r))},Ln.over=cl,Ln.overArgs=ja,Ln.overEvery=dl,Ln.overSome=ul,Ln.partial=za,Ln.partialRight=Ra,Ln.partition=Sa,Ln.pick=js,Ln.pickBy=zs,Ln.property=hl,Ln.propertyOf=function(t){return function(n){return null==t?e:Cr(t,n)}},Ln.pull=Zo,Ln.pullAll=Qo,Ln.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,lo(n,2)):e},Ln.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?Ur(t,n,e,r):t},Ln.pullAt=Jo,Ln.range=gl,Ln.rangeRight=pl,Ln.rearg=Pa,Ln.reject=function(e,t){return(Va(e)?Ot:mr)(e,Ba(lo(t,3)))},Ln.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=lo(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return Kr(e,i),n},Ln.rest=function(n,r){if("function"!=typeof n)throw new Ee(t);return Gr(n,r=r===e?r:ps(r))},Ln.reverse=ea,Ln.sampleSize=function(t,n,r){return n=(r?xo(t,n,r):n===e)?1:ps(n),(Va(t)?Qn:Qr)(t,n)},Ln.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Ln.setWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:Jr(t,n,r,i)},Ln.shuffle=function(e){return(Va(e)?Jn:ni)(e)},Ln.slice=function(t,n,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&xo(t,n,r)?(n=0,r=i):(n=null==n?0:ps(n),r=r===e?i:ps(r)),ri(t,n,r)):[]},Ln.sortBy=ka,Ln.sortedUniq=function(e){return e&&e.length?si(e):[]},Ln.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Ln.split=function(t,n,r){return r&&"number"!=typeof r&&xo(t,n,r)&&(n=r=e),(r=r===e?h:r>>>0)?(t=vs(t))&&("string"==typeof n||null!=n&&!os(n))&&!(n=ci(n))&&rn(t)?wi(un(t),0,r):t.split(n,r):[]},Ln.spread=function(e,n){if("function"!=typeof e)throw new Ee(t);return n=null==n?0:vn(ps(n),0),Gr((function(t){var r=t[n],i=wi(t,0,n);return r&&Ft(i,r),Ct(e,this,i)}))},Ln.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Ln.take=function(t,n,r){return t&&t.length?ri(t,0,(n=r||n===e?1:ps(n))<0?0:n):[]},Ln.takeRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=i-(n=r||n===e?1:ps(n)))<0?0:n,i):[]},Ln.takeRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!1,!0):[]},Ln.takeWhile=function(e,t){return e&&e.length?gi(e,lo(t,3)):[]},Ln.tap=function(e,t){return t(e),e},Ln.throttle=function(e,n,r){var i=!0,o=!0;if("function"!=typeof e)throw new Ee(t);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Ma(e,n,{leading:i,maxWait:n,trailing:o})},Ln.thru=ga,Ln.toArray=hs,Ln.toPairs=Rs,Ln.toPairsIn=Ps,Ln.toPath=function(e){return Va(e)?Mt(e,zo):ls(e)?[e]:Ei(jo(vs(e)))},Ln.toPlainObject=bs,Ln.transform=function(e,t,n){var r=Va(e),i=r||Xa(e)||cs(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:es(e)&&Za(o)?Nn(Ue(e)):{}}return(i?kt:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Ln.unary=function(e){return Ta(e,1)},Ln.union=ta,Ln.unionBy=na,Ln.unionWith=ra,Ln.uniq=function(e){return e&&e.length?di(e):[]},Ln.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Ln.uniqWith=function(t,n){return n="function"==typeof n?n:e,t&&t.length?di(t,e,n):[]},Ln.unset=function(e,t){return null==e||ui(e,t)},Ln.unzip=ia,Ln.unzipWith=oa,Ln.update=function(e,t,n){return null==e?e:hi(e,t,vi(n))},Ln.updateWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:hi(t,n,vi(r),i)},Ln.values=Ls,Ln.valuesIn=function(e){return null==e?[]:Gt(e,Fs(e))},Ln.without=aa,Ln.words=Zs,Ln.wrap=function(e,t){return za(vi(t),e)},Ln.xor=sa,Ln.xorBy=la,Ln.xorWith=ca,Ln.zip=da,Ln.zipObject=function(e,t){return mi(e||[],t||[],tr)},Ln.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jr)},Ln.zipWith=ua,Ln.entries=Rs,Ln.entriesIn=Ps,Ln.extend=xs,Ln.extendWith=ws,sl(Ln,Ln),Ln.add=vl,Ln.attempt=Qs,Ln.camelCase=Ns,Ln.capitalize=Hs,Ln.ceil=yl,Ln.clamp=function(t,n,r){return r===e&&(r=n,n=e),r!==e&&(r=(r=ms(r))==r?r:0),n!==e&&(n=(n=ms(n))==n?n:0),sr(ms(t),n,r)},Ln.clone=function(e){return lr(e,4)},Ln.cloneDeep=function(e){return lr(e,5)},Ln.cloneDeepWith=function(t,n){return lr(t,5,n="function"==typeof n?n:e)},Ln.cloneWith=function(t,n){return lr(t,4,n="function"==typeof n?n:e)},Ln.conformsTo=function(e,t){return null==t||cr(e,t,Ms(t))},Ln.deburr=Ws,Ln.defaultTo=function(e,t){return null==e||e!=e?t:e},Ln.divide=xl,Ln.endsWith=function(t,n,r){t=vs(t),n=ci(n);var i=t.length,o=r=r===e?i:sr(ps(r),0,i);return(r-=n.length)>=0&&t.slice(r,o)==n},Ln.eq=La,Ln.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(Y,tn):e},Ln.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Ln.every=function(t,n,r){var i=Va(t)?Tt:pr;return r&&xo(t,n,r)&&(n=e),i(t,lo(n,3))},Ln.find=ma,Ln.findIndex=Wo,Ln.findKey=function(e,t){return zt(e,lo(t,3),xr)},Ln.findLast=ba,Ln.findLastIndex=Vo,Ln.findLastKey=function(e,t){return zt(e,lo(t,3),wr)},Ln.floor=wl,Ln.forEach=va,Ln.forEachRight=ya,Ln.forIn=function(e,t){return null==e?e:vr(e,lo(t,3),Fs)},Ln.forInRight=function(e,t){return null==e?e:yr(e,lo(t,3),Fs)},Ln.forOwn=function(e,t){return e&&xr(e,lo(t,3))},Ln.forOwnRight=function(e,t){return e&&wr(e,lo(t,3))},Ln.get=Ds,Ln.gt=Na,Ln.gte=Ha,Ln.has=function(e,t){return null!=e&&mo(e,t,Tr)},Ln.hasIn=Ts,Ln.head=Uo,Ln.identity=rl,Ln.includes=function(e,t,n,r){e=Ua(e)?e:Ls(e),n=n&&!r?ps(n):0;var i=e.length;return n<0&&(n=vn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Pt(e,t,n)>-1},Ln.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Pt(e,t,i)},Ln.inRange=function(t,n,r){return n=gs(n),r===e?(r=n,n=0):r=gs(r),function(e,t,n){return e>=yn(t,n)&&e<vn(t,n)}(t=ms(t),n,r)},Ln.invoke=_s,Ln.isArguments=Wa,Ln.isArray=Va,Ln.isArrayBuffer=Ya,Ln.isArrayLike=Ua,Ln.isArrayLikeObject=Ka,Ln.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kr(e)==m},Ln.isBuffer=Xa,Ln.isDate=qa,Ln.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Ln.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||Xa(e)||cs(e)||Wa(e)))return!e.length;var t=fo(e);if(t==w||t==D)return!e.size;if(So(e))return!jr(e).length;for(var n in e)if(Be.call(e,n))return!1;return!0},Ln.isEqual=function(e,t){return Fr(e,t)},Ln.isEqualWith=function(t,n,r){var i=(r="function"==typeof r?r:e)?r(t,n):e;return i===e?Fr(t,n,e,r):!!i},Ln.isError=Ga,Ln.isFinite=function(e){return"number"==typeof e&&fn(e)},Ln.isFunction=Za,Ln.isInteger=Qa,Ln.isLength=Ja,Ln.isMap=ns,Ln.isMatch=function(e,t){return e===t||Ir(e,t,uo(t))},Ln.isMatchWith=function(t,n,r){return r="function"==typeof r?r:e,Ir(t,n,uo(n),r)},Ln.isNaN=function(e){return rs(e)&&e!=+e},Ln.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ar(e)},Ln.isNil=function(e){return null==e},Ln.isNull=function(e){return null===e},Ln.isNumber=rs,Ln.isObject=es,Ln.isObjectLike=ts,Ln.isPlainObject=is,Ln.isRegExp=os,Ln.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Ln.isSet=as,Ln.isString=ss,Ln.isSymbol=ls,Ln.isTypedArray=cs,Ln.isUndefined=function(t){return t===e},Ln.isWeakMap=function(e){return ts(e)&&fo(e)==E},Ln.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kr(e)},Ln.join=function(e,t){return null==e?"":mn.call(e,t)},Ln.kebabCase=Vs,Ln.last=Go,Ln.lastIndexOf=function(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var o=i;return r!==e&&(o=(o=ps(r))<0?vn(i+o,0):yn(o,i-1)),n==n?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(t,n,o):Rt(t,Nt,o,!0)},Ln.lowerCase=Ys,Ln.lowerFirst=Us,Ln.lt=ds,Ln.lte=us,Ln.max=function(t){return t&&t.length?fr(t,rl,Dr):e},Ln.maxBy=function(t,n){return t&&t.length?fr(t,lo(n,2),Dr):e},Ln.mean=function(e){return Ht(e,rl)},Ln.meanBy=function(e,t){return Ht(e,lo(t,2))},Ln.min=function(t){return t&&t.length?fr(t,rl,Rr):e},Ln.minBy=function(t,n){return t&&t.length?fr(t,lo(n,2),Rr):e},Ln.stubArray=fl,Ln.stubFalse=ml,Ln.stubObject=function(){return{}},Ln.stubString=function(){return""},Ln.stubTrue=function(){return!0},Ln.multiply=$l,Ln.nth=function(t,n){return t&&t.length?Wr(t,ps(n)):e},Ln.noConflict=function(){return ut._===this&&(ut._=Le),this},Ln.noop=ll,Ln.now=Da,Ln.pad=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(mt(i),n)+e+Vi(ft(i),n)},Ln.padEnd=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;return t&&r<t?e+Vi(t-r,n):e},Ln.padStart=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Ln.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(vs(e).replace(ne,""),t||0)},Ln.random=function(t,n,r){if(r&&"boolean"!=typeof r&&xo(t,n,r)&&(n=r=e),r===e&&("boolean"==typeof n?(r=n,n=e):"boolean"==typeof t&&(r=t,t=e)),t===e&&n===e?(t=0,n=1):(t=gs(t),n===e?(n=t,t=0):n=gs(n)),t>n){var i=t;t=n,n=i}if(r||t%1||n%1){var o=$n();return yn(t+o*(n-t+st("1e-"+((o+"").length-1))),n)}return Xr(t,n)},Ln.reduce=function(e,t,n){var r=Va(e)?It:Yt,i=arguments.length<3;return r(e,lo(t,4),n,i,hr)},Ln.reduceRight=function(e,t,n){var r=Va(e)?At:Yt,i=arguments.length<3;return r(e,lo(t,4),n,i,gr)},Ln.repeat=function(t,n,r){return n=(r?xo(t,n,r):n===e)?1:ps(n),qr(vs(t),n)},Ln.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Ln.result=function(t,n,r){var i=-1,o=(n=yi(n,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[zo(n[i])];a===e&&(i=o,a=r),t=Za(a)?a.call(t):a}return t},Ln.round=Cl,Ln.runInContext=re,Ln.sample=function(e){return(Va(e)?Zn:Zr)(e)},Ln.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dn(e):e.length;var t=fo(e);return t==w||t==D?e.size:jr(e).length},Ln.snakeCase=Ks,Ln.some=function(t,n,r){var i=Va(t)?Bt:ii;return r&&xo(t,n,r)&&(n=e),i(t,lo(n,3))},Ln.sortedIndex=function(e,t){return oi(e,t)},Ln.sortedIndexBy=function(e,t,n){return ai(e,t,lo(n,2))},Ln.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=oi(e,t);if(r<n&&La(e[r],t))return r}return-1},Ln.sortedLastIndex=function(e,t){return oi(e,t,!0)},Ln.sortedLastIndexBy=function(e,t,n){return ai(e,t,lo(n,2),!0)},Ln.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=oi(e,t,!0)-1;if(La(e[n],t))return n}return-1},Ln.startCase=Xs,Ln.startsWith=function(e,t,n){return e=vs(e),n=null==n?0:sr(ps(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Ln.subtract=Sl,Ln.sum=function(e){return e&&e.length?Ut(e,rl):0},Ln.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Ln.template=function(t,n,r){var i=Ln.templateSettings;r&&xo(t,n,r)&&(n=e),t=vs(t),n=ws({},n,i,Qi);var o,a,s=ws({},n.imports,i.imports,Qi),l=Ms(s),c=Gt(s,l),d=0,u=n.interpolate||ve,h="__p += '",g=Te((n.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(n.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";t.replace(g,(function(e,n,r,i,s,l){return r||(r=i),h+=t.slice(d,l).replace(ye,nn),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var f=Be.call(n,"variable")&&n.variable;if(f){if(le.test(f))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Ln.times=function(e,t){if((e=ps(e))<1||e>d)return[];var n=h,r=yn(e,h);t=lo(t),e-=h;for(var i=Kt(r,t);++n<e;)t(n);return i},Ln.toFinite=gs,Ln.toInteger=ps,Ln.toLength=fs,Ln.toLower=function(e){return vs(e).toLowerCase()},Ln.toNumber=ms,Ln.toSafeInteger=function(e){return e?sr(ps(e),-9007199254740991,d):0===e?e:0},Ln.toString=vs,Ln.toUpper=function(e){return vs(e).toUpperCase()},Ln.trim=function(t,n,r){if((t=vs(t))&&(r||n===e))return Xt(t);if(!t||!(n=ci(n)))return t;var i=un(t),o=un(n);return wi(i,Qt(i,o),Jt(i,o)+1).join("")},Ln.trimEnd=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.slice(0,hn(t)+1);if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,0,Jt(i,un(n))+1).join("")},Ln.trimStart=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.replace(ne,"");if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,Qt(i,un(n))).join("")},Ln.truncate=function(t,n){var r=30,i="...";if(es(n)){var o="separator"in n?n.separator:o;r="length"in n?ps(n.length):r,i="omission"in n?ci(n.omission):i}var a=(t=vs(t)).length;if(rn(t)){var s=un(t);a=s.length}if(r>=a)return t;var l=r-dn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=Te(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var g=c.lastIndexOf(o);g>-1&&(c=c.slice(0,g))}return c+i},Ln.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,gn):e},Ln.uniqueId=function(e){var t=++je;return vs(e)+t},Ln.upperCase=qs,Ln.upperFirst=Gs,Ln.each=va,Ln.eachRight=ya,Ln.first=Uo,sl(Ln,(bl={},xr(Ln,(function(e,t){Be.call(Ln.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Ln.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Ln[e].placeholder=Ln})),kt(["drop","take"],(function(t,n){Vn.prototype[t]=function(r){r=r===e?1:vn(ps(r),0);var i=this.__filtered__&&!n?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,h),type:t+(i.__dir__<0?"Right":"")}),i},Vn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),kt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return _r(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Ba(lo(e)))},Vn.prototype.slice=function(t,n){t=ps(t);var r=this;return r.__filtered__&&(t>0||n<0)?new Vn(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),n!==e&&(r=(n=ps(n))<0?r.dropRight(-n):r.take(n-t)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(h)},xr(Vn.prototype,(function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),o=Ln[i?"take"+("last"==n?"Right":""):n],a=i||/^find/.test(n);o&&(Ln.prototype[n]=function(){var n=this.__wrapped__,s=i?[1]:arguments,l=n instanceof Vn,c=s[0],d=l||Va(n),u=function(e){var t=o.apply(Ln,Ft([e],s));return i&&h?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,g=!!this.__actions__.length,p=a&&!h,f=l&&!g;if(!a&&d){n=f?n:new Vn(this);var m=t.apply(n,s);return m.__actions__.push({func:ga,args:[u],thisArg:e}),new Wn(m,h)}return p&&f?t.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Ln.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[n]((function(n){return t.apply(Va(n)?n:[],e)}))}})),xr(Vn.prototype,(function(e,t){var n=Ln[t];if(n){var r=n.name+"";Be.call(Mn,r)||(Mn[r]=[]),Mn[r].push({name:t,func:n})}})),Mn[Li(e,2).name]=[{name:"wrapper",func:e}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Va(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=yn(t,e+a);break;case"takeRight":e=vn(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=r?s:a-1,d=this.__iteratees__,u=d.length,h=0,g=yn(l,this.__takeCount__);if(!n||!r&&i==l&&g==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&h<g;){for(var f=-1,m=e[c+=t];++f<u;){var b=d[f],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Ln.prototype.at=pa,Ln.prototype.chain=function(){return ha(this)},Ln.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Ln.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Ln.prototype.plant=function(t){for(var n,r=this;r instanceof Hn;){var i=Po(r);i.__index__=0,i.__values__=e,n?o.__wrapped__=i:n=i;var o=i;r=r.__wrapped__}return o.__wrapped__=t,n},Ln.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Vn){var n=t;return this.__actions__.length&&(n=new Vn(this)),(n=n.reverse()).__actions__.push({func:ga,args:[ea],thisArg:e}),new Wn(n,this.__chain__)}return this.thru(ea)},Ln.prototype.toJSON=Ln.prototype.valueOf=Ln.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Ln.prototype.first=Ln.prototype.head,et&&(Ln.prototype[et]=function(){return this}),Ln}();gt?((gt.exports=pn)._=pn,ht._=pn):ut._=pn}.call(Yo);var ID=FD.exports;const AD=i.forwardRef(((r,i)=>{var{value:o,readOnly:s,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g,iconMask:p=e(He,{}),iconUnmask:f=e(Ne,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:D,onBlur:T,onTryAgain:O}=r,E=dt(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const _=s&&ID.isEmpty(o),[M,F]=a(!x),[I,A]=a(o||"");u((()=>{A(o||"")}),[o]);const B=e=>{L(!1),D&&D(e)},j=e=>{L(!0),T&&T(e)},z=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,k&&k(e)},R=()=>{s&&O&&O()},P=()=>{L(!M)},L=e=>{F(e),e?C&&C():S&&S()},N=()=>!(null==I?void 0:I.toString().length)||x,H=()=>{if(_)return e(n,{});const t=N();return e(wD,{"data-testid":"icon-"+(M?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:M?f:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(s)switch($){case"fail":return t(ED,{onClick:R,"data-testid":"try-again-button",children:[t(DD,{children:[e(TD,{}),e(OD,{children:"Error"})]}),e(kD,{children:"Try again?"})]});case"loading":return t($D,{children:[e(SD,{}),e(CD,{children:"Retrieving..."})]})}return e(xD,Object.assign({ref:i,"data-testid":`${l||"masked-input"}${M?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:s?void 0:B,onBlur:s?void 0:j,onClick:s?P:void 0,onChange:z,value:_?"-":M&&!x?uu.maskValue(I,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g}):I,readOnly:s,error:y,$isDisabled:N()},E))})()})})),BD=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ow,{id:o,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(AD,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},h))})})),jD=M.div`
    font-weight: ${e=>e.$bold?dc.Spec["weight-semibold"]:dc.Spec["weight-regular"]};
    color: ${e=>e.$selected?cc["text-selected"]:cc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&kc(e.$maxLines||2)}
    overflow-wrap: break-word;
`,zD=M.div`
    color: ${cc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&kc(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${dc["body-md-semibold"]}
                `:F`
                    ${dc["body-baseline-regular"]}
                `}
`,RD=M.span`
    font-weight: ${dc.Spec["weight-semibold"]};
`,PD=M.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${jD} {
                        display: inline;
                    }

                    ${zD} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,LD=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,ND=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,HD=({bold:r,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u="default"})=>{const h=A(),g="small"===u?dc.Spec["body-size-md"]({theme:h}):dc.Spec["body-size-baseline"]({theme:h}),f=dc.Spec["font-family"]({theme:h}),{ref:b,width:v}=dn(),y=p((e=>{if("inline"!==i||!v)return!1;return uu.getTextWidth(e,`${g} '${f}'`)>v*s-50}),[v,i,g,f,s]),x=m((()=>y(o)),[y,o]),w=m((()=>c&&y(c)),[y,c]),$=r=>{if(!a)return r;const i=a.toLowerCase().trim(),s=r.toLowerCase().indexOf(i),l=s+a.length;return-1===s?r:t(n,{children:[o.slice(0,s),e(RD,{$variant:u,children:o.slice(s,l)}),o.slice(l)]})},C=r=>t(n,{children:[e(LD,{$maxLines:s,"aria-hidden":!0,children:$(r)}),e(ND,{$maxLines:s,"aria-hidden":!0,children:$(r)})]});return t(PD,{ref:b,$labelDisplayType:x||w?"next-line":i,$variant:u,children:[e(jD,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$truncateType:d,children:"middle"===d&&x?C(o):$(o)}),c&&e(zD,{"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:i,children:"middle"===d&&w?C(c):c})]})},WD=0,VD=1,YD=2,UD=4;function KD(e){return()=>e}function XD(e){e()}function qD(e,t){return n=>e(t(n))}function GD(e,t){return()=>e(t)}function ZD(e,t){return n=>e(t,n)}function QD(e){return void 0!==e}function JD(){}function eT(e,t){return t(e),e}function tT(e,t){return t(e)}function nT(...e){return e}function rT(e,t){return e(VD,t)}function iT(e,t){e(WD,t)}function oT(e){e(YD)}function aT(e){return e(UD)}function sT(e,t){return rT(e,ZD(t,WD))}function lT(e,t){const n=e(VD,(e=>{n(),t(e)}));return n}function cT(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function dT(e,t){return e===t}function uT(e=dT){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function hT(e){return t=>n=>{e(n)&&t(n)}}function gT(e){return t=>qD(t,e)}function pT(e){return t=>()=>{t(e)}}function fT(e,...t){const n=function(...e){return t=>e.reduceRight(tT,t)}(...t);return(t,r)=>{switch(t){case YD:return void oT(e);case VD:return rT(e,n(r))}}}function mT(e,t){return n=>r=>{n(t=e(t,r))}}function bT(e){return t=>n=>{e>0?e--:t(n)}}function vT(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function yT(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);rT(e,(e=>{const s=n;n|=a,t[o]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};n===i?a():r=a}}function xT(e){let t=e;const n=$T();return(e,r)=>{switch(e){case WD:t=r;break;case VD:r(t);break;case UD:return t}return n(e,r)}}function wT(e,t){return eT(xT(t),(t=>sT(e,t)))}function $T(){const e=[];return(t,n)=>{switch(t){case WD:return void e.slice().forEach((e=>{e(n)}));case YD:return void e.splice(0,e.length);case VD:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function CT(e){return eT($T(),(t=>sT(e,t)))}function ST(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:kT(),singleton:n}}const kT=()=>Symbol();function DT(...e){const t=$T(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);rT(e,(e=>{n[o]=e,r|=a,r===i&&iT(t,n)}))})),function(e,o){switch(e){case YD:return void oT(t);case VD:return r===i&&o(n),rT(t,o)}}}function TT(e,t=dT){return fT(e,uT(t))}function OT(...e){return function(t,n){switch(t){case YD:return;case VD:return function(...e){return()=>{e.map(XD)}}(...e.map((e=>rT(e,n))))}}}var ET=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(ET||{});const _T={0:"debug",3:"error",1:"log",2:"warn"},MT=ST((()=>{const e=xT(3);return{log:xT(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:aT(e))&&console[_T[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function FT(e,t,n){return IT(e,t,n).callbackRef}function IT(e,t,n){const r=i.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const a=i.useMemo((()=>new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)}))),[e]);o=e=>{e&&t?(a.observe(e),r.current=e):(r.current&&a.unobserve(r.current),r.current=null)}}return{callbackRef:o,ref:r}}function AT(e,t,n,r,o,a,s,l,c){const d=i.useCallback((n=>{const i=function(e,t,n,r){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},ET.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(n.children,t,l?"offsetWidth":"offsetHeight",o);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,g=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==a||a(l?BT("column-gap",getComputedStyle(n).columnGap,o):BT("row-gap",getComputedStyle(n).rowGap,o)),null!==i&&e(i)}),[e,t,o,a,s,r]);return IT(d,n,c)}function BT(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,ET.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function jT(e,t,n){const r=i.useRef(null),o=i.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;r.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(r.current)}),[e,t]),{callbackRef:a,ref:s}=IT(o,!0,n),l=i.useCallback((()=>{o(s.current)}),[o,s]);return i.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const zT=ST((()=>{const e=$T(),t=$T(),n=xT(0),r=$T(),i=xT(0),o=$T(),a=$T(),s=xT(0),l=xT(0),c=xT(0),d=xT(0),u=$T(),h=$T(),g=xT(!1),p=xT(!1),f=xT(!1);return sT(fT(e,gT((({scrollTop:e})=>e))),t),sT(fT(e,gT((({scrollHeight:e})=>e))),a),sT(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),RT={lvl:0};function PT(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const o=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);o.push({end:n-1,start:r,value:i}),r=n,i=s}return o.push({end:1/0,start:r,value:i}),o}function LT(e){return e===RT}function NT(e,t){if(!LT(e))return t===e.k?e.v:t<e.k?NT(e.l,t):NT(e.r,t)}function HT(e,t,n="k"){if(LT(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=HT(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return HT(e.l,t,n)}function WT(e,t,n){return LT(e)?eO(t,n,1):t===e.k?GT(e,{k:t,v:n}):t<e.k?tO(GT(e,{l:WT(e.l,t,n)})):tO(GT(e,{r:WT(e.r,t,n)}))}function VT(){return RT}function YT(e,t,n){if(LT(e))return[];return function(e){return PT(e,(({k:e,v:t})=>({index:e,value:t})))}(XT(e,HT(e,t)[0],n))}function UT(e,t){if(LT(e))return RT;const{k:n,l:r,r:i}=e;if(t===n){if(LT(r))return i;if(LT(i))return r;{const[t,n]=JT(r);return qT(GT(e,{k:t,l:ZT(r),v:n}))}}return qT(GT(e,t<n?{l:UT(r,t)}:{r:UT(i,t)}))}function KT(e){return LT(e)?[]:[...KT(e.l),{k:e.k,v:e.v},...KT(e.r)]}function XT(e,t,n){if(LT(e))return[];const{k:r,l:i,r:o,v:a}=e;let s=[];return r>t&&(s=s.concat(XT(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(XT(o,t,n))),s}function qT(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(QT(t))return nO(GT(e,{lvl:n-1}));if(!LT(t)&&!LT(t.r))return GT(t.r,{l:GT(t,{r:t.r.l}),lvl:n,r:GT(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(QT(e))return rO(GT(e,{lvl:n-1}));if(LT(r)||LT(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=QT(t)?r.lvl-1:r.lvl;return GT(t,{l:GT(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:rO(GT(r,{l:t.r,lvl:i}))})}}function GT(e,t){return eO(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function ZT(e){return LT(e.r)?e.l:qT(GT(e,{r:ZT(e.r)}))}function QT(e){return LT(e)||e.lvl>e.r.lvl}function JT(e){return LT(e.r)?[e.k,e.v]:JT(e.r)}function eO(e,t,n,r=RT,i=RT){return{k:e,l:r,lvl:n,r:i,v:t}}function tO(e){return rO(nO(e))}function nO(e){const{l:t}=e;return LT(t)||t.lvl!==e.lvl?e:GT(t,{r:GT(e,{l:t.r})})}function rO(e){const{lvl:t,r:n}=e;return LT(n)||LT(n.r)||n.lvl!==t||n.r.lvl!==t?e:GT(n,{l:GT(e,{r:n.l}),lvl:t+1})}function iO(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function oO(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const aO=ST((()=>({recalcInProgress:xT(!1)})),[],{singleton:!0});function sO(e,t,n){return e[lO(e,t,n)]}function lO(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const o=Math.floor((r+i)/2),a=n(e[o],t);if(0===a)return o;if(-1===a){if(i-r<2)return o-1;i=o-1}else{if(i===r)return o;r=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function cO(e,t){return Math.round(e.getBoundingClientRect()[t])}function dO(e){return!LT(e.groupOffsetTree)}function uO({index:e},t){return t===e?0:t<e?-1:1}function hO({offset:e},t){return t===e?0:t<e?-1:1}function gO(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:o}=sO(t,e,uO),a=e-r,s=o*a+(a-1)*n+i;return s>0?s+n:s}function pO(e,t){if(!dO(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function fO(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=pO("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function mO(e,t,n,r=0){return r>0&&(t=Math.max(t,sO(e,r,uO).offset)),PT(function(e,t,n,r){const i=lO(e,t,r),o=lO(e,n,r,i);return e.slice(i,o+1)}(e,t,n,hO),xO)}function bO(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,ET.DEBUG);const o=e.sizeTree;let a=o,s=0;if(n.length>0&&LT(o)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>WT(WT(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=LT(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:o}=r;if(n=Math.min(n,o),LT(e)){e=WT(e,0,i);continue}const a=YT(e,o-1,t+1);if(a.some(wO(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:o}of a)s?(t>=r||i===o)&&(e=UT(e,r)):(l=o!==i,s=!0),n>t&&t>=r&&o!==i&&(e=WT(e,t+1,o));l&&(e=WT(e,o,i))}return[e,n]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=yO(e.offsetTree,s,a,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>WT(e,t,gO(t,u,i))),VT()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function vO(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function yO(e,t,n,r){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=lO(i,t-1,uO),s=i[l].offset;const e=HT(n,t-1);o=e[0],a=e[1],i.length&&i[l].size===HT(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of YT(n,t,1/0)){const t=e-o,n=t*a+s+t*r;i.push({index:e,offset:n,size:l}),o=e,s=n,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function xO(e){return{index:e.index,value:e}}function wO(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const $O={offsetHeight:"height",offsetWidth:"width"},CO=ST((([{log:e},{recalcInProgress:t}])=>{const n=$T(),r=$T(),i=wT(r,0),o=$T(),a=$T(),s=xT(0),l=xT([]),c=xT(void 0),d=xT(void 0),u=xT(((e,t)=>cO(e,$O[t]))),h=xT(void 0),g=xT(0),p={groupIndices:[],groupOffsetTree:VT(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:VT()},f=wT(fT(n,yT(l,e,g),mT(bO,p),uT()),p),m=wT(fT(l,uT(),mT(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),gT((({prev:e})=>e))),[]);sT(fT(l,hT((e=>e.length>0)),yT(f,g),gT((([e,t,n])=>{const r=e.reduce(((e,r,i)=>WT(e,r,gO(r,t.offsetTree,n)||i)),VT());return{...t,groupIndices:e,groupOffsetTree:r}}))),f),sT(fT(r,yT(f),hT((([e,{lastIndex:t}])=>e<t)),gT((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),sT(c,d);const b=wT(fT(c,gT((e=>void 0===e))),!0);sT(fT(d,hT((e=>void 0!==e&&LT(aT(f).sizeTree))),gT((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const v=CT(fT(n,yT(f),mT((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),gT((e=>e.changed))));rT(fT(s,mT(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),gT((e=>e.diff))),(e=>{const{groupIndices:n}=aT(f);if(e>0)iT(t,!0),iT(o,e+vO(e,n));else if(e<0){const t=aT(m);t.length>0&&(e-=vO(-e,t)),iT(a,e)}})),rT(fT(s,yT(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},ET.ERROR)}));const y=CT(o);sT(fT(o,yT(f),gT((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=NT(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=KT(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return KT(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const x=CT(fT(a,yT(f,g),gT((([e,{offsetTree:t},n])=>gO(-e,t,n)))));return sT(fT(a,yT(f,g),gT((([e,t,n])=>{if(t.groupIndices.length>0){if(LT(t.sizeTree))return t;let r=VT();const i=aT(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(r=KT(t.sizeTree).reduce(((t,{k:n,v:r})=>WT(t,Math.max(0,n+e),r)),r),o!==-e){r=WT(r,0,NT(t.sizeTree,s));r=WT(r,1,HT(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...yO(t.offsetTree,0,r,n)}}{const r=KT(t.sizeTree).reduce(((t,{k:n,v:r})=>WT(t,Math.max(0,n+e),r)),VT());return{...t,sizeTree:r,...yO(t.offsetTree,0,r,n)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:n,sizes:f,statefulTotalCount:i,totalCount:r,trackItemSizes:b,unshiftWith:o}}),nT(MT,aO),{singleton:!0});function SO(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const kO=ST((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const o=$T(),a=$T(),s=CT(fT(o,gT(SO)));return sT(fT(s,gT((e=>e.totalCount))),n),sT(fT(s,gT((e=>e.groupIndices))),e),sT(fT(DT(i,t,r),hT((([e,t])=>dO(t))),gT((([e,t,n])=>HT(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),uT(),gT((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),nT(CO,zT)),DO=ST((([{log:e}])=>{const t=xT(!1),n=CT(fT(t,hT((e=>e)),uT()));return rT(t,(t=>{t&&aT(e)("props updated",{},ET.DEBUG)})),{didMount:n,propsReady:t}}),nT(MT),{singleton:!0}),TO=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function OO(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!TO)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const EO=ST((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const g=$T(),p=$T(),f=xT(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),iT(l,!1)}return sT(fT(g,yT(n,u,r,f,s,a,h),yT(e,o,i),gT((([[e,n,r,i,o,a,s,c],u,h,f])=>{const x=OO(e),{align:w,behavior:$,offset:C}=x,S=i-1,k=fO(x,n,S);let D=gO(k,n.offsetTree,u)+a;"end"===w?(D+=h+HT(n.sizeTree,k)[1]-r+f,k===S&&(D+=s)):"center"===w?D+=(h+HT(n.sizeTree,k)[1]-r+f)/2:D-=o,C&&(D+=C);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},ET.DEBUG),iT(g,e)):(iT(p,!0),c("list did not change, scroll successful",{},ET.DEBUG))};if(y(),"smooth"===$){let e=!1;v=rT(t,(t=>{e=e||t})),m=lT(d,(()=>{T(e)}))}else m=lT(fT(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return b=setTimeout((()=>{y()}),1200),iT(l,!0),c("scrolling from index to",{behavior:$,index:k,top:D},ET.DEBUG),{behavior:$,top:D}}))),c),{scrollTargetReached:p,scrollToIndex:g,topListHeight:f}}),nT(CO,zT,MT),{singleton:!0});function _O(e,t){0==e?t():requestAnimationFrame((()=>{_O(e-1,t)}))}function MO(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const FO=ST((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=xT(!0),l=xT(0),c=xT(!0);return sT(fT(a,yT(l),hT((([e,t])=>!!t)),pT(!1)),s),sT(fT(a,yT(l),hT((([e,t])=>!!t)),pT(!1)),c),rT(fT(DT(t,a),yT(s,n,e,c),hT((([[,e],t,{sizeTree:n},r,i])=>e&&(!LT(n)||QD(r))&&!t&&!i)),yT(l)),(([,e])=>{lT(i,(()=>{iT(c,!0)})),_O(4,(()=>{lT(r,(()=>{iT(s,!0)})),iT(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),nT(CO,zT,EO,DO),{singleton:!0});function IO(e,t){return Math.abs(e-t)<1.01}const AO="up",BO="down",jO={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},zO=ST((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:o}])=>{const a=xT(!1),s=xT(!0),l=$T(),c=$T(),d=xT(4),u=xT(0),h=wT(fT(OT(fT(TT(i),bT(1),pT(!0)),fT(TT(i),bT(1),pT(!1),cT(100))),uT()),!1),g=wT(fT(OT(fT(n,pT(!0)),fT(n,pT(!1),cT(200))),uT()),!1);sT(fT(DT(TT(i),TT(u)),gT((([e,t])=>e<=t)),uT()),s),sT(fT(s,vT(50)),c);const p=CT(fT(DT(r,TT(o),TT(t),TT(e),TT(d)),mT(((e,[{scrollHeight:t,scrollTop:n},r,i,o,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),jO),uT(((e,t)=>e&&e.atBottom===t.atBottom)))),f=wT(fT(r,mT(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(IO(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),hT((e=>e.changed)),gT((e=>e.jump))),0);sT(fT(p,gT((e=>e.atBottom))),a),sT(fT(a,vT(50)),l);const m=xT(BO);sT(fT(r,gT((({scrollTop:e})=>e)),uT(),mT(((e,t)=>aT(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?AO:BO,prevScrollTop:t}),{direction:BO,prevScrollTop:0}),gT((e=>e.direction))),m),sT(fT(r,vT(50),pT("none")),m);const b=xT(0);return sT(fT(h,hT((e=>!e)),pT(0)),b),sT(fT(i,vT(100),yT(h),hT((([e,t])=>!!t)),mT((([e,t],[n])=>[t,n]),[0,0]),gT((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:m,scrollVelocity:b}}),nT(zT)),RO="top",PO="bottom",LO="none";function NO(e,t,n){return"number"==typeof e?n===AO&&t===RO||n===BO&&t===PO?e:0:n===AO?t===RO?e.main:e.reverse:t===PO?e.main:e.reverse}function HO(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const WO=ST((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const o=$T(),a=xT(0),s=xT(0),l=xT(0),c=wT(fT(DT(TT(r),TT(i),TT(n),TT(o,oO),TT(l),TT(a),TT(t),TT(e),TT(s)),gT((([e,t,n,[r,i],o,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(n-d,0);let g=LO;const p=HO(c,RO),f=HO(c,PO);return r-=l,i+=n+s,(r+=n+s)>e+u-p&&(g=AO),(i-=l)<e-h+t+f&&(g=BO),g!==LO?[Math.max(d-n-NO(o,RO,g)-p,0),d-h-s+t+NO(o,PO,g)+f]:null})),hT((e=>null!=e)),uT(oO)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),nT(zT),{singleton:!0});const VO={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function YO(e,t,n,r,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-a,h=c,g=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:o,items:KO(e,i,o),offsetBottom:g,offsetTop:c,top:h,topItems:KO(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function UO(e,t,n,r,i,o){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=MO(t,s);return YO(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function KO(e,t,n){if(0===e.length)return[];if(!dO(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,o=[],a=YT(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},o.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return o}const XO=ST((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:g},{recalcInProgress:p}])=>{const f=xT([]),m=xT(0),b=$T();sT(o.topItemsIndexes,f);const v=wT(fT(DT(g,p,TT(l,oO),TT(i),TT(r),TT(c),d,TT(f),TT(t),TT(n),e),hT((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),gT((([,,[e,t],n,r,i,o,a,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:h}=d,g=aT(m);if(0===n)return{...VO,totalCount:n};if(0===e&&0===t)return 0===g?{...VO,totalCount:n}:UO(g,i,r,s,l,c||[]);if(LT(h))return g>0?null:YO(function(e,t,n){if(dO(t)){const r=pO(e,t);return[{index:HT(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(MO(i,n),d,c),[],n,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of YT(h,e,t)){const i=r.value,o=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!o)return YO([],p,n,l,d,s);const f=a.length>0?a[a.length-1]+1:0,b=mO(u,e,t,f);if(0===b.length)return null;const v=n-1;return YO(eT([],(n=>{for(const r of b){const i=r.value;let o=i.offset,a=r.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-r.start;o+=t*s+t*l}a<f&&(o+=(f-a)*s,a=f);const d=Math.min(r.end,v);for(let e=a;e<=d&&!(o>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,n,l,d,s)})),hT((e=>null!==e)),uT()),VO);sT(fT(e,hT(QD),gT((e=>null==e?void 0:e.length))),i),sT(fT(v,gT((e=>e.topListHeight))),u),sT(u,s),sT(fT(v,gT((e=>[e.top,e.bottom]))),a),sT(fT(v,gT((e=>e.items))),b);const y=CT(fT(v,hT((({items:e})=>e.length>0)),yT(i,e),hT((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),gT((([,e,t])=>[e-1,t])),uT(oO),gT((([e])=>e)))),x=CT(fT(v,vT(200),hT((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),gT((({items:e})=>e[0].index)),uT())),w=CT(fT(v,hT((({items:e})=>e.length>0)),gT((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),uT(iO)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),nT(CO,kO,WO,FO,EO,zO,DO,aO),{singleton:!0}),qO=ST((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const o=$T(),a=wT(fT(DT(n,e,r,t,i),gT((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return sT(TT(a),o),{totalListHeight:a,totalListHeightChanged:o}}),nT(zT,XO),{singleton:!0}),GO=ST((([{viewportHeight:e},{totalListHeight:t}])=>{const n=xT(!1),r=wT(fT(DT(n,e,t),hT((([e])=>e)),gT((([,e,t])=>Math.max(0,e-t))),vT(0),uT()),0);return{alignToBottom:n,paddingTopAddition:r}}),nT(zT,qO),{singleton:!0});function ZO(e){return!!e&&("smooth"===e?"smooth":"auto")}const QO=ST((([{listRefresh:e,totalCount:t},{atBottomState:n,isAtBottom:r},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=xT(!1),u=$T();let h=null;function g(e){iT(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=lT(n,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(aT(l)("scrolling to bottom due to increased size",{},ET.DEBUG),g("auto"))}));setTimeout(t,100)}return rT(fT(DT(fT(TT(t),bT(1)),a),yT(TT(d),r,o,c),gT((([[e,t],n,r,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?ZO(e(t)):t&&ZO(e))(n,r||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),hT((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:n})=>{h&&(h(),h=null),h=lT(e,(()=>{aT(l)("following output to ",{totalCount:n},ET.DEBUG),g(t),h=null}))})),rT(fT(DT(TT(d),t,s),hT((([e,,t])=>e&&t)),mT((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),hT((({refreshed:e})=>e)),yT(d,t)),(([,e])=>{aT(o)&&p(!1!==e)})),rT(u,(()=>{p(!1!==aT(d))})),rT(DT(TT(d),n),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:d}}),nT(CO,zO,EO,FO,DO,MT,zT)),JO=ST((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(sT(fT(s,yT(o),hT((([,e])=>0!==e)),yT(i,r,t,n,e),gT((([[,e],t,n,r,i,o=[]])=>UO(e,t,n,r,i,o)))),a),{})),nT(CO,FO,XO,DO),{singleton:!0}),eE=ST((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=xT(0);return rT(fT(e,yT(r),hT((([,e])=>0!==e)),gT((([,e])=>({top:e})))),(e=>{lT(fT(n,bT(1),hT((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{iT(t,e)}))}))})),{initialScrollTop:r}}),nT(DO,zT,XO),{singleton:!0}),tE=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=n?n:"start",behavior:r}:e>o?{...i,align:null!=n?n:"end",behavior:r}:null,nE=ST((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=$T();return sT(fT(d,yT(t,l,n,o,i,r,s),yT(e),gT((([[e,t,n,r,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=tE,done:g,...p}=e,f=fO(e,t,r-1),m=gO(f,t.offsetTree,c)+i+o,b=h({itemBottom:m+HT(t.sizeTree,f)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+n-s,viewportTop:l+o});return b?g&&lT(fT(a,hT((e=>!e)),bT(aT(a)?1:2)),g):g&&g(),b})),hT((e=>null!==e))),c),{scrollIntoView:d}}),nT(CO,zT,EO,XO,MT),{singleton:!0}),rE=ST((([{scrollVelocity:e}])=>{const t=xT(!1),n=$T(),r=xT(!1);return sT(fT(e,yT(r,t,n),hT((([e,t])=>!!t)),gT((([e,t,n,r])=>{const{enter:i,exit:o}=t;if(n){if(o(e,r))return!1}else if(i(e,r))return!0;return n})),uT()),t),rT(fT(DT(t,e,n),yT(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),nT(zO),{singleton:!0}),iE=ST((([{scrollContainerState:e,scrollTo:t}])=>{const n=$T(),r=$T(),i=$T(),o=xT(!1),a=xT(void 0);return sT(fT(DT(n,r),gT((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),sT(fT(t,yT(r),gT((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),nT(zT)),oE=ST((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=$T(),d=xT(void 0),u=xT(null),h=xT(null);return sT(s,u),sT(l,h),rT(fT(c,yT(t,r,a,u,h,n)),(([e,t,n,r,i,o,a])=>{const s=function(e){return KT(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==o&&(n=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:n-=a})})),sT(fT(d,hT(QD),gT(aE)),i),sT(fT(o,yT(d),hT((([,e])=>void 0!==e)),uT(),gT((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),nT(CO,zT,FO,DO,iE));function aE(e){return{align:"start",index:0,offset:e.scrollTop}}const sE=ST((([{topItemsIndexes:e}])=>{const t=xT(0);return sT(fT(t,hT((e=>e>=0)),gT((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),nT(XO));function lE(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const cE=lE((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),dE=ST((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:p}])=>{const f=CT(fT(l,yT(a),mT((([,e,t,n],[{bottom:r,items:i,offsetBottom:o,totalCount:a},s])=>{const l=r+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),hT((([e])=>0!==e)),yT(r,s,n,i,g,p),hT((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===AO)),gT((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},ET.DEBUG),e)))));function m(n){n>0?(iT(t,{behavior:"auto",top:-n}),iT(e,0)):(iT(e,0),iT(t,{behavior:"auto",top:-n}))}return rT(fT(f,yT(e,o)),(([t,n,r])=>{r&&cE()?iT(e,n-t):m(-t)})),rT(fT(DT(wT(o,!1),e,p),hT((([e,t,n])=>!e&&!n&&0!==t)),gT((([e,t])=>t)),vT(1)),m),sT(fT(u,gT((e=>({top:-e})))),t),rT(fT(c,yT(h,d),gT((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function o(e){return e*(n+i)}if(0===t.length)return o(e);{let n=0;const i=NT(r,0);let a=0,s=0;for(;a<e;){a++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=i,r=e-a+1),a+=r,n+=o(r),s++}return n}}))),(n=>{iT(e,n),requestAnimationFrame((()=>{iT(t,{top:n}),requestAnimationFrame((()=>{iT(e,0),iT(p,!1)}))}))})),{deviation:e}}),nT(zT,zO,XO,CO,MT,aO)),uE=ST((([e,t,n,r,i,o,a,s,l,c])=>({...e,...t,...n,...r,...i,...o,...a,...s,...l,...c})),nT(WO,JO,DO,rE,qO,eE,GO,iE,nE,MT)),hE=ST((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p},f,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(sT(x.rangeChanged,k.scrollSeekRangeChanged),sT(fT(k.windowViewportRect,gT((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...f,sizes:l,...m})),nT(CO,FO,zT,oE,QO,XO,EO,dE,sE,kO,uE));function gE(e,t){const n={},r={};let i=0;const o=e.length;for(;i<o;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const pE=typeof document<"u"?i.useLayoutEffect:i.useEffect;function fE(t,n,r){const o=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&iT(e.propsReady,!1);for(const r of o){iT(e[n.required[r]],t[r])}for(const r of a)if(r in t){iT(e[n.optional[r]],t[r])}e.propsReady&&iT(e.propsReady,!0)}function u(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,o){switch(i){case VD:return o?n===o?void 0:(r(),n=o,t=rT(e,o),t):(r(),JD);case YD:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const h=i.forwardRef(((h,g)=>{const{children:p,...f}=h,[m]=i.useState((()=>eT(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(r.map((e=>n(e))));return o&&t.set(i,a),a};return n(e)}(t),(e=>{d(e,f)})))),[b]=i.useState(GD(u,m));pE((()=>{for(const e of l)e in f&&rT(b[e],f[e]);return()=>{Object.values(b).map(oT)}}),[f,b,m]),pE((()=>{d(m,f)})),i.useImperativeHandle(g,KD(function(e){return s.reduce(((t,r)=>(t[r]=t=>{iT(e[n.methods[r]],t)},t)),{})}(m)));const v=r;return e(c.Provider,{value:m,children:r?e(v,{...gE([...o,...a,...l],f),children:p}):p})})),g=i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],n=i.useCallback((e=>rT(t,e)),[t]);return i.useSyncExternalStore(n,(()=>aT(t)),(()=>aT(t)))}:e=>{const t=i.useContext(c)[e],[n,r]=i.useState(GD(aT,t));return pE((()=>rT(t,(e=>{e!==n&&r(KD(e))}))),[t,n]),n};return{Component:h,useEmitter:(e,t)=>{const n=i.useContext(c)[e];pE((()=>rT(n,t)),[t,n])},useEmitterValue:g,usePublisher:e=>i.useCallback(ZD(iT,i.useContext(c)[e]),[e])}}const mE=i.createContext(void 0),bE=i.createContext(void 0),vE=typeof document<"u"?i.useLayoutEffect:i.useEffect;function yE(e,t,n,r=JD,o,a){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((n=>{const r=n.target,i=r===window||r===document,o=a?i?window.pageXOffset||document.documentElement.scrollLeft:r.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:r.scrollTop,s=a?i?document.documentElement.scrollWidth:r.scrollWidth:i?document.documentElement.scrollHeight:r.scrollHeight,d=a?i?window.innerWidth:r.offsetWidth:i?window.innerHeight:r.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(o,0),viewportHeight:d})};n.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(o===l.current||o<=0||o===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return i.useEffect((()=>{const e=o||s.current;return r(o||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",d)}}),[s,d,n,r,o]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let o,d,u;r===window?(d=Math.max(cO(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),o=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=r[a?"scrollWidth":"scrollHeight"],o=cO(r,a?"width":"height"),u=r[a?"scrollLeft":"scrollTop"]);const h=d-o;if(n.top=Math.ceil(Math.max(Math.min(h,n.top),0)),IO(o,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:o}),void(i&&t(!0));i?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const xE="-webkit-sticky",wE="sticky",$E=lE((()=>{if(typeof document>"u")return wE;const e=document.createElement("div");return e.style.position=xE,e.style.position===xE?xE:wE}));function CE(e){return e}const SE=ST((()=>{const e=xT((e=>`Item ${e}`)),t=xT(null),n=xT((e=>`Group ${e}`)),r=xT({}),i=xT(CE),o=xT("div"),a=xT(JD),s=(e,t=null)=>wT(fT(r,gT((t=>t[e])),uT()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),kE=ST((([e,t])=>({...e,...t})),nT(hE,SE)),DE=({height:t})=>e("div",{style:{height:t}}),TE={overflowAnchor:"none",position:$E(),zIndex:1},OE={overflowAnchor:"none"},EE={...OE,display:"inline-block",height:"100%"},_E=i.memo((function({showTopList:t=!1}){const n=KE("listState"),r=XE("sizeRanges"),o=KE("useWindowScroll"),a=KE("customScrollParent"),s=XE("windowScrollContainerState"),l=XE("scrollContainerState"),c=a||o?s:l,d=KE("itemContent"),u=KE("context"),h=KE("groupContent"),g=KE("trackItemSizes"),p=KE("itemSize"),f=KE("log"),m=XE("gap"),b=KE("horizontalDirection"),{callbackRef:v}=AT(r,p,g,t?JD:c,f,m,a,b,KE("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);UE("deviation",(e=>{y!==e&&x(e)}));const w=KE("EmptyPlaceholder"),$=KE("ScrollSeekPlaceholder")||DE,C=KE("ListComponent"),S=KE("ItemComponent"),D=KE("GroupComponent"),T=KE("computeItemKey"),O=KE("isSeeking"),E=KE("groupIndices").length>0,_=KE("alignToBottom"),M=KE("initialItemFinalLocationReached"),F=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:_?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:_?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...M?{}:{visibility:"hidden"}};return!t&&0===n.totalCount&&w?e(w,{...BE(w,u)}):e(C,{...BE(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:F,children:(t?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,u);return O?k($,{...BE($,u),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...BE(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:TE},h(e.index,u)):k(S,{...BE(S,u),...jE(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:b?EE:OE},E?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),ME={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},FE={outline:"none",overflowX:"auto",position:"relative"},IE=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),AE={position:$E(),top:0,width:"100%",zIndex:1};function BE(e,t){if("string"!=typeof e)return{context:t}}function jE(e,t){return{item:"string"==typeof e?void 0:t}}const zE=i.memo((function(){const t=KE("HeaderComponent"),n=XE("headerHeight"),r=KE("HeaderFooterTag"),o=FT(i.useMemo((()=>e=>{n(cO(e,"height"))}),[n]),!0,KE("skipAnimationFrameInResizeObserver")),a=KE("context");return t?e(r,{ref:o,children:e(t,{...BE(t,a)})}):null})),RE=i.memo((function(){const t=KE("FooterComponent"),n=XE("footerHeight"),r=KE("HeaderFooterTag"),o=FT(i.useMemo((()=>e=>{n(cO(e,"height"))}),[n]),!0,KE("skipAnimationFrameInResizeObserver")),a=KE("context");return t?e(r,{ref:o,children:e(t,{...BE(t,a)})}):null}));function PE({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:o,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),h=n("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:p,scrollToCallback:f}=yE(s,c,l,d,void 0,h);return t("scrollTo",f),t("scrollBy",g),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?FE:ME,...o},tabIndex:0,...a,...BE(l,u),children:i})}))}function LE({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:o,...a}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("totalListHeight"),u=n("deviation"),h=n("customScrollParent"),g=n("context"),{scrollByCallback:p,scrollerRef:f,scrollToCallback:m}=yE(s,c,l,JD,h);return vE((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...BE(l,g),children:i})}))}const NE=({children:t})=>{const n=i.useContext(mE),r=XE("viewportHeight"),o=XE("fixedItemHeight"),a=KE("alignToBottom"),s=KE("horizontalDirection"),l=FT(i.useMemo((()=>qD(r,(e=>cO(e,s?"width":"height")))),[r,s]),!0,KE("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{n&&(r(n.viewportHeight),o(n.itemHeight))}),[n,r,o]),e("div",{"data-viewport-type":"element",ref:l,style:IE(a),children:t})},HE=({children:t})=>{const n=i.useContext(mE),r=XE("windowViewportRect"),o=XE("fixedItemHeight"),a=KE("customScrollParent"),s=jT(r,a,KE("skipAnimationFrameInResizeObserver")),l=KE("alignToBottom");return i.useEffect((()=>{n&&(o(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,o]),e("div",{"data-viewport-type":"window",ref:s,style:IE(l),children:t})},WE=({children:t})=>{const n=KE("TopItemListComponent")||"div",r=KE("headerHeight"),i={...AE,marginTop:`${r}px`},o=KE("context");return e(n,{style:i,...BE(n,o),children:t})},VE=i.memo((function(n){const r=KE("useWindowScroll"),i=KE("topItemsIndexes").length>0,o=KE("customScrollParent"),a=KE("context"),s=o||r?GE:qE,l=o||r?HE:NE;return t(s,{...n,...BE(s,a),children:[i&&e(WE,{children:e(_E,{showTopList:!0})}),t(l,{children:[e(zE,{}),e(_E,{}),e(RE,{})]})]})})),{Component:YE,useEmitter:UE,useEmitterValue:KE,usePublisher:XE}=fE(kE,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},VE),qE=PE({useEmitter:UE,useEmitterValue:KE,usePublisher:XE}),GE=LE({useEmitter:UE,useEmitterValue:KE,usePublisher:XE}),ZE=YE,QE={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},JE={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:e_,floor:t_,max:n_,min:r_,round:i_}=Math;function o_(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function a_(e,t){return e&&e.width===t.width&&e.height===t.height}function s_(e,t){return e&&e.column===t.column&&e.row===t.row}const l_=ST((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,g,{didMount:p,propsReady:f},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=xT(0),C=xT(0),S=xT(QE),k=xT({height:0,width:0}),D=xT({height:0,width:0}),T=$T(),O=$T(),E=xT(0),_=xT(null),M=xT({column:0,row:0}),F=$T(),I=$T(),A=xT(!1),B=xT(0),j=xT(!0),z=xT(!1),R=xT(!1);rT(fT(p,yT(B),hT((([e,t])=>!!t))),(()=>{iT(j,!1)})),rT(fT(DT(p,j,D,k,B,z),hT((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{iT(z,!0),_O(1,(()=>{iT(T,e)})),lT(fT(c),(()=>{iT(t,[0,0]),iT(j,!0)}))})),sT(fT(I,hT((e=>null!=e&&e.scrollTop>0)),pT(0)),C),rT(fT(p,yT(I),hT((([,e])=>null!=e))),(([,e])=>{e&&(iT(k,e.viewport),iT(D,e.item),iT(M,e.gap),e.scrollTop>0&&(iT(A,!0),lT(fT(c,bT(1)),(e=>{iT(A,!1)})),iT(l,{top:e.scrollTop})))})),sT(fT(k,gT((({height:e})=>e))),u),sT(fT(DT(TT(k,a_),TT(D,a_),TT(M,((e,t)=>e&&e.column===t.column&&e.row===t.row)),TT(c)),gT((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),F),sT(fT(DT(TT($),r,TT(M,s_),TT(D,a_),TT(k,a_),TT(_),TT(C),TT(A),TT(j),TT(B)),hT((([,,,,,,,e])=>!e)),gT((([e,[t,n],r,i,o,a,s,,l,c])=>{const{column:d,row:u}=r,{height:h,width:g}=i,{width:p}=o;if(0===s&&(0===e||0===p))return QE;if(0===g){const t=MO(c,e);return function(e){return{...JE,items:e}}(o_(t,t+Math.max(s-1,0),a))}const f=c_(p,g,d);let m,b;l?0===t&&0===n&&s>0?(m=0,b=s-1):(m=f*t_((t+u)/(h+u)),b=f*e_((n+u)/(h+u))-1,b=r_(e-1,n_(b,f-1)),m=r_(b,n_(0,m))):(m=0,b=-1);const v=o_(m,b,a),{bottom:y,top:x}=d_(o,r,i,v),w=e_(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),sT(fT(_,hT((e=>null!==e)),gT((e=>e.length))),$),sT(fT(DT(k,D,S,M),hT((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),gT((([e,t,{items:n},r])=>{const{bottom:i,top:o}=d_(e,r,t,n);return[o,i]})),uT(oO)),t);const P=xT(!1);sT(fT(c,yT(P),gT((([e,t])=>t||0!==e))),P);const L=CT(fT(DT(S,$),hT((([{items:e}])=>e.length>0)),yT(P),hT((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),gT((([[,e]])=>e-1)),uT())),N=CT(fT(TT(S),hT((({items:e})=>e.length>0&&0===e[0].index)),pT(0),uT())),H=CT(fT(TT(S),yT(A),hT((([{items:e},t])=>e.length>0&&!t)),gT((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),uT(iO),vT(0)));sT(H,g.scrollSeekRangeChanged),sT(fT(T,yT(k,D,$,M),gT((([e,t,n,r,i])=>{const o=OO(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=r-1),c=n_(0,c,r_(r-1,c));let d=u_(t,i,n,c);return"end"===a?d=i_(d-t.height+n.height):"center"===a&&(d=i_(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=wT(fT(S,gT((e=>e.offsetBottom+e.bottom))),0);return sT(fT(x,gT((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:_,deviation:E,footerHeight:i,gap:M,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:D,overscan:n,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:O,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:L,propsReady:f,rangeChanged:H,startReached:N,stateChanged:F,stateRestoreInProgress:A,...w}}),nT(WO,zT,zO,rE,DO,iE,MT));function c_(e,t,n){return n_(1,t_((e+n)/(t_(t)+n)))}function d_(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const o=u_(e,t,n,r[0].index);return{bottom:u_(e,t,n,r[r.length-1].index)+i,top:o}}function u_(e,t,n,r){const i=c_(e.width,n.width,t.column),o=t_(r/i),a=o*n.height+n_(0,o-1)*t.row;return a>0?a+t.row:a}const h_=ST((()=>{const e=xT((e=>`Item ${e}`)),t=xT({}),n=xT(null),r=xT("virtuoso-grid-item"),i=xT("virtuoso-grid-list"),o=xT(CE),a=xT("div"),s=xT(JD),l=(e,n=null)=>wT(fT(t,gT((t=>t[e])),uT()),n),c=xT(!1),d=xT(!1);return sT(TT(d),c),{components:t,computeItemKey:o,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),g_=ST((([e,t])=>({...e,...t})),nT(l_,h_)),p_=i.memo((function(){const t=$_("gridState"),n=$_("listClassName"),r=$_("itemClassName"),o=$_("itemContent"),a=$_("computeItemKey"),s=$_("isSeeking"),l=C_("scrollHeight"),c=$_("ItemComponent"),d=$_("ListComponent"),u=$_("ScrollSeekPlaceholder"),h=$_("context"),g=C_("itemDimensions"),p=C_("gap"),f=$_("log"),m=$_("stateRestoreInProgress"),b=C_("reportReadyState"),v=FT(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();g({height:e,width:t})}p({column:D_("column-gap",getComputedStyle(e).columnGap,f),row:D_("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,p,f]),!0,!1);return vE((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:n,ref:v,...BE(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((n=>{const i=a(n.index,n.data,h);return s?e(u,{...BE(u,h),height:t.itemHeight,index:n.index,width:t.itemWidth},i):k(c,{...BE(c,h),className:r,"data-index":n.index,key:i},o(n.index,n.data,h))}))})})),f_=i.memo((function(){const t=$_("HeaderComponent"),n=C_("headerHeight"),r=$_("headerFooterTag"),o=FT(i.useMemo((()=>e=>{n(cO(e,"height"))}),[n]),!0,!1),a=$_("context");return t?e(r,{ref:o,children:e(t,{...BE(t,a)})}):null})),m_=i.memo((function(){const t=$_("FooterComponent"),n=C_("footerHeight"),r=$_("headerFooterTag"),o=FT(i.useMemo((()=>e=>{n(cO(e,"height"))}),[n]),!0,!1),a=$_("context");return t?e(r,{ref:o,children:e(t,{...BE(t,a)})}):null})),b_=({children:t})=>{const n=i.useContext(bE),r=C_("itemDimensions"),o=C_("viewportDimensions"),a=FT(i.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return i.useEffect((()=>{n&&(o({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,o,r]),e("div",{ref:a,style:IE(!1),children:t})},v_=({children:t})=>{const n=i.useContext(bE),r=C_("windowViewportRect"),o=C_("itemDimensions"),a=$_("customScrollParent"),s=jT(r,a,!1);return i.useEffect((()=>{n&&(o({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,o]),e("div",{ref:s,style:IE(!1),children:t})},y_=i.memo((function({...n}){const r=$_("useWindowScroll"),i=$_("customScrollParent"),o=i||r?k_:S_,a=i||r?v_:b_,s=$_("context");return e(o,{...n,...BE(o,s),children:t(a,{children:[e(f_,{}),e(p_,{}),e(m_,{})]})})})),{Component:x_,useEmitter:w_,useEmitterValue:$_,usePublisher:C_}=fE(g_,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},y_),S_=PE({useEmitter:w_,useEmitterValue:$_,usePublisher:C_}),k_=LE({useEmitter:w_,useEmitterValue:$_,usePublisher:C_});function D_(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,ET.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const T_=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),O_=({children:t})=>{const[n,r]=a(-1);return e(T_.Provider,{value:{focusedIndex:n,setFocusedIndex:r},children:t})},E_=M.div`
    overflow: hidden;
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    background: ${cc.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}

    ${mc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${fc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${mc.MaxWidth.xs} {
        width: calc(100vw - ${fc["xs-margin"]} * 2);
    }

    ${mc.MaxWidth.xxs} {
        width: calc(100vw - ${fc["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${cc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,__=M.div`
    background: transparent;
    padding: ${gc["spacing-8"]};
`,M_=M.ul`
    list-style-type: none;
`,F_=M.li`
    display: flex;
    align-items: flex-start;
    gap: ${gc["spacing-8"]};
    padding: ${gc["spacing-12"]} ${gc["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?F`
                background: ${cc["bg-hover"]};
            `:e.$active?F`
                background: ${cc["bg-hover-subtle"]};
            `:void 0}
`,I_=M(Ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${cc["icon-selected"]};
`,A_=M.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,B_=M(Ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${cc["icon-selected"]};
`,j_=M(Ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${cc["icon-primary-subtlest"]};
`,z_=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,R_=M(Qg)`
    cursor: pointer;
    overflow: hidden;
    color: ${cc["text-primary"]};
    font-size: inherit;
`,P_=M(R_)`
    ${dc["body-baseline-semibold"]}
`,L_=M(R_)`
    ${dc["body-md-semibold"]}
    padding: ${gc["spacing-8"]} ${gc["spacing-8"]};
`,N_=M.div`
    width: 100%;
    display: flex;
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};
    align-items: center;
`,H_=M(z)`
    margin-right: ${gc["spacing-4"]};
    color: ${cc["icon-error"]};
    height: 1em;
    width: 1em;
`,W_=M(Kc)`
    margin-right: ${gc["spacing-8"]};
    color: ${cc.icon};
`,V_=M.div`
    background: ${cc["bg-strong"]};
    border-radius: ${pc.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}
`,Y_=M.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${gc["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${gc["spacing-8"]} ${gc["spacing-16"]}
              `:F`10px ${gc["spacing-16"]}`};
`,U_=M(Zg)`
    flex: 1;
`,K_=M(Le)`
    color: ${cc.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,X_=M(Sc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${gc["spacing-8"]};
    margin-left: -${gc["spacing-8"]};
    color: ${cc.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,q_=g(((n,r)=>{var{value:i,variant:o,onClear:a}=n,s=dt(n,["value","variant","onClear"]);return t(V_,{$variant:o,children:[t(Y_,{$variant:o,children:[e(K_,{"aria-hidden":!0}),e(U_,Object.assign({ref:r,value:i,$variant:o},s))]}),i&&e(X_,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(je,{"aria-hidden":!0})})]})})),G_=({listItems:r,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:g="inline",variant:m="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:C,valueExtractor:S,listExtractor:k,renderListItem:D,renderCustomCallToAction:T,enableSearch:O,hideNoResultsDisplay:E,searchPlaceholder:_="Search",searchFunction:M,onSearch:F})=>{const{focusedIndex:I,setFocusedIndex:A}=f(T_),[B,j]=a(""),[z,R]=a(null!=r?r:[]),P=bu(c),L=fu(),N=o(null),H=o(null),W=o([]),V=o(null),Y=o(null),U=e=>{const t=k?k(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},K=p((e=>!!Mk(s,(t=>Ik(t,e)))),[s]),X=hu((()=>null==M?void 0:M(B))),q=hu((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:n}=U(e),r=B.trim().toLowerCase();return t.includes(r)||n&&n.includes(r)})))),G=(e,t)=>{A(t),null==x||x(e,(e=>S?S(e):e)(e))},Z=e=>{const t=e.target.value;j(t),null==F||F()},Q=()=>{var e;j(""),null===(e=V.current)||void 0===e||e.focus(),null==F||F()},J=()=>{null==C||C()};gu("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),I<z.length-1){const e=I+1;null===(t=W.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),I>0){const e=I-1;null===(n=W.current[e])||void 0===n||n.focus(),A(e)}else 0===I&&V.current&&(V.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===W.current[I]&&(e.preventDefault(),z[I]&&G(z[I],I))}})),u((()=>{var e;if(!y)return void(null===(e=Y.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),A(e))}),0);return()=>clearTimeout(t)}),[W,r,A,y]),u((()=>{var e,t,n;if(L)return;if(l||!r)return;const i=r.findIndex((e=>K(e)));V.current?(A(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):I>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:I,align:"center"}),setTimeout((()=>{var e;return null===(e=W.current[I])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),A(i),setTimeout((()=>{var e;return null===(e=W.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=Y.current)||void 0===n||n.scrollToIndex({index:0}),A(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[K,l,I,r,L,A]),u((()=>{L&&P&&(l||"success"===c&&V.current&&(A(-1),V.current.focus()))}),[L,P,c,A,l]),u((()=>{var e;R(null!==(e=""===B?r:M?X():q())&&void 0!==e?e:[])}),[X,q,r,M,B]);const ee=t=>i?e(t?B_:j_,{"aria-hidden":!0}):t?e(I_,{"aria-hidden":!0}):e(A_,{}),te=(t,n)=>{const{title:r,secondaryLabel:i}=U(t);return e(HD,{displayType:g,label:r,maxLines:h,selected:n,sublabel:i,truncationType:d,variant:m})},ne=(r,o)=>{if(!C||"success"===c){const a=K(r),s=o===I;return e(F_,{"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>G(r,o),onMouseEnter:()=>(e=>{A(e)})(o),ref:e=>{W.current[o]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,children:D?D(r,{selected:a}):t(n,{children:[ee(a),te(r,a)]})},((e,t)=>`item_${t}__${S?S(e):e}`)(r,o))}},re=()=>{if(s&&i&&z.length>0&&!B&&"success"===c)return e(z_,{children:e(L_,{onClick:w,type:"button",$variant:m,children:0===s.length?"Select all":"Clear all"})})},ie=()=>{if(!E&&(B||!O)&&0===z.length&&"success"===c)return t(N_,{"data-testid":"list-no-results",children:[e(H_,{"data-testid":"no-result-icon"}),"No results found."]})},oe=()=>{if(C&&"loading"===c)return t(N_,{"data-testid":"list-loading",children:[e(W_,{}),"Loading..."]})},ae=()=>{if(C&&"fail"===c)return t(N_,{"data-testid":"list-fail",children:[e(H_,{"data-testid":"load-error-icon"}),"Failed to load. ",e(P_,{onClick:J,type:"button",$variant:m,children:"Try again."})]})};return t(E_,{"data-testid":"dropdown-container",ref:N,$width:v,$variant:m,children:[t(__,{ref:H,"data-testid":"dropdown-list",children:[(()=>{if((O||M)&&"success"===c)return e(q_,{ref:V,onChange:Z,value:B,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:m})})(),re(),ie(),oe(),ae(),e(M_,{role:"listbox",id:b,children:e(ZE,Object.assign({ref:Y,style:{height:"100%"},data:z,customScrollParent:null!==(se=N.current)&&void 0!==se?se:void 0,itemContent:(e,t)=>ne(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:z.length,key:z.length}:{}))})]}),(()=>{if(T)return e("div",{"data-testid":"custom-cta",children:T($,z)})})()]});var se},Z_=M(Qg)`
    display: flex;
    align-items: center;
    gap: ${gc["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${gc["spacing-16"]};

    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Q_=M.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${uc["duration-250"]} ${uc["ease-default"]};

    svg {
        color: ${cc.icon};
        height: 1em;
        width: 1em;
    }
`,J_=g((({children:n,disabled:r,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(Z_,{ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":o,$variant:l,children:[n,!s&&e(Q_,{$expanded:i,$variant:l,children:e(fe,{"aria-hidden":!0})})]})));var eM=Symbol.for("immer-nothing"),tM=Symbol.for("immer-draftable"),nM=Symbol.for("immer-state"),rM="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function iM(e,...t){if("production"!==process.env.NODE_ENV){const n=rM[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oM=Object.getPrototypeOf;function aM(e){return!!e&&!!e[nM]}function sM(e){return!!e&&(cM(e)||Array.isArray(e)||!!e[tM]||!!e.constructor?.[tM]||pM(e)||fM(e))}var lM=Object.prototype.constructor.toString();function cM(e){if(!e||"object"!=typeof e)return!1;const t=oM(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===lM}function dM(e,t){0===uM(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function uM(e){const t=e[nM];return t?t.type_:Array.isArray(e)?1:pM(e)?2:fM(e)?3:0}function hM(e,t){return 2===uM(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function gM(e,t,n){const r=uM(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function pM(e){return e instanceof Map}function fM(e){return e instanceof Set}function mM(e){return e.copy_||e.base_}function bM(e,t){if(pM(e))return new Map(e);if(fM(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=cM(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[nM];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(oM(e),t)}{const t=oM(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function vM(e,t=!1){return xM(e)||aM(e)||!sM(e)||(uM(e)>1&&(e.set=e.add=e.clear=e.delete=yM),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>vM(t,!0)))),e}function yM(){iM(2)}function xM(e){return Object.isFrozen(e)}var wM,$M={};function CM(e){const t=$M[e];return t||iM(0,e),t}function SM(){return wM}function kM(e,t){t&&(CM("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function DM(e){TM(e),e.drafts_.forEach(EM),e.drafts_=null}function TM(e){e===wM&&(wM=e.parent_)}function OM(e){return wM={drafts_:[],parent_:wM,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function EM(e){const t=e[nM];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function _M(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[nM].modified_&&(DM(t),iM(4)),sM(e)&&(e=MM(t,e),t.parent_||IM(t,e)),t.patches_&&CM("Patches").generateReplacementPatches_(n[nM].base_,e,t.patches_,t.inversePatches_)):e=MM(t,n,[]),DM(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==eM?e:void 0}function MM(e,t,n){if(xM(t))return t;const r=t[nM];if(!r)return dM(t,((i,o)=>FM(e,r,t,i,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return IM(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,o=!1;3===r.type_&&(i=new Set(t),t.clear(),o=!0),dM(i,((i,a)=>FM(e,r,t,i,a,n,o))),IM(e,t,!1),n&&e.patches_&&CM("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function FM(e,t,n,r,i,o,a){if("production"!==process.env.NODE_ENV&&i===n&&iM(5),aM(i)){const a=MM(e,i,o&&t&&3!==t.type_&&!hM(t.assigned_,r)?o.concat(r):void 0);if(gM(n,r,a),!aM(a))return;e.canAutoFreeze_=!1}else a&&n.add(i);if(sM(i)&&!xM(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;MM(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||IM(e,i)}}function IM(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&vM(t,n)}var AM={get(e,t){if(t===nM)return e;const n=mM(e);if(!hM(n,t))return function(e,t,n){const r=zM(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!sM(r)?r:r===jM(e.base_,t)?(PM(e),e.copy_[t]=LM(r,e)):r},has:(e,t)=>t in mM(e),ownKeys:e=>Reflect.ownKeys(mM(e)),set(e,t,n){const r=zM(mM(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=jM(mM(e),t),i=r?.[nM];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||hM(e.base_,t)))return!0;PM(e),RM(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==jM(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,PM(e),RM(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=mM(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){iM(11)},getPrototypeOf:e=>oM(e.base_),setPrototypeOf(){iM(12)}},BM={};function jM(e,t){const n=e[nM];return(n?mM(n):e)[t]}function zM(e,t){if(!(t in e))return;let n=oM(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=oM(n)}}function RM(e){e.modified_||(e.modified_=!0,e.parent_&&RM(e.parent_))}function PM(e){e.copy_||(e.copy_=bM(e.base_,e.scope_.immer_.useStrictShallowCopy_))}dM(AM,((e,t)=>{BM[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),BM.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&iM(13),BM.set.call(this,e,t,void 0)},BM.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&iM(14),AM.set.call(this,e[0],t,n,e[0])};function LM(e,t){const n=pM(e)?CM("MapSet").proxyMap_(e,t):fM(e)?CM("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:SM(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=AM;n&&(i=[r],o=BM);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:SM()).drafts_.push(n),n}function NM(e){if(!sM(e)||xM(e))return e;const t=e[nM];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=bM(e,t.scope_.immer_.useStrictShallowCopy_)}else n=bM(e,!0);return dM(n,((e,t)=>{gM(n,e,NM(t))})),t&&(t.finalized_=!1),n}var HM=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&iM(6),void 0!==n&&"function"!=typeof n&&iM(7),sM(e)){const i=OM(this),o=LM(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?DM(i):TM(i)}return kM(i,n),_M(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===eM&&(r=void 0),this.autoFreeze_&&vM(r,!0),n){const t=[],i=[];CM("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}iM(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){sM(e)||iM(8),aM(e)&&(e=function(e){aM(e)||iM(10,e);return NM(e)}(e));const t=OM(this),n=LM(e,void 0);return n[nM].isManual_=!0,TM(t),n}finishDraft(e,t){const n=e&&e[nM];n&&n.isManual_||iM(9);const{scope_:r}=n;return kM(r,t),_M(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=CM("Patches").applyPatches_;return aM(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},WM=HM.produce;HM.produceWithPatches.bind(HM),HM.setAutoFreeze.bind(HM),HM.setUseStrictShallowCopy.bind(HM),HM.applyPatches.bind(HM),HM.createDraft.bind(HM),HM.finishDraft.bind(HM);var VM=zC,YM=fS,UM=iC,KM=Xo,XM=LC,qM=sC,GM=FC,ZM=$C,QM=Object.prototype.hasOwnProperty;var JM=function(e){if(null==e)return!0;if(XM(e)&&(KM(e)||"string"==typeof e||"function"==typeof e.splice||qM(e)||ZM(e)||UM(e)))return!e.length;var t=YM(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(GM(e))return!VM(e).length;for(var n in e)if(QM.call(e,n))return!1;return!0},eF=Uo(JM);const tF=(e,t,n)=>{const r=WM(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],o=rF(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},nF=(e,t)=>{const[n,...r]=t;if(eF(e)||eF(n))return;const i=e.find((e=>e.key===n));return i&&r.length?nF(i.subItems,r):i},rF=e=>e.join(","),iF=e=>new Set(e.map((e=>e.join(",")))),oF=M.li`
    display: ${e=>e.$visible?"flex":"none"};
`,aF=M.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${gc["spacing-8"]};
    padding: ${gc["spacing-12"]} ${gc["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&F`
            background: ${cc["bg-hover"]};
        `}
`,sF=M.div`
    height: 1px;
    width: calc((1lh + ${gc["spacing-8"]}) * ${e=>e.$level});
`,lF=M.div`
    width: 1lh;
    height: 1lh;
    color: ${cc["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${uc["duration-350"]}
            ${uc["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,cF=M.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${gc["spacing-8"]};
`,dF=M.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":gc["spacing-16"]};

    display: flex;
    justify-content: center;
`,uF=M(Xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${cc["icon-selected"]};
`,hF=({listItems:n,multiSelect:r=!1,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:d="default",listboxId:h,width:g,mode:p="default",selectableCategory:f,onSelectItem:b,onSelectAll:v,onRetry:y,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:C})=>{const S=r||f,[k,D]=a(""),T=k.toLowerCase().trim(),[O,E]=a(!1),_=o(null),M=o(null),F=o([]),I=o(null),A=fu(),[B,j]=a([]),[z,R]=a([]),P=O?z:B,L=m((()=>{let e=0;for(const t of B)t.level>e&&(e=t.level);return e}),[B]),[N,H]=a(0),[W,V]=a([]),[Y,U]=a(0),K=e=>{const t=e.target.value;D(t),""===t?E(!1):t.trim().length>=3&&E(!0),null==C||C()},X=()=>{var e;D(""),E(!1),null===(e=I.current)||void 0===e||e.focus(),null==C||C()},q=()=>{null==y||y()},G=()=>{if(0===i.size){const e=[],t=[];B.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==v||v(e,t)}else null==v||v([],[])},Z=hu(((e,t)=>((e,t,n,r,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,g;const p=s?s.level+1:0,f=s?[...s.keyPath,d.key]:[d.key],m=rF(f),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:f,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(g=d.subItems)||void 0===g?void 0:g.length){const e=a(d.subItems,b);if(n&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?b.checked=!0:n&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,r,T,t))),Q=hu((e=>{return i.size?(t=Z(e,!1),WM(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>WM(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),o=e[n].keyPath.slice(0,i.length);Ik(i,o)&&(r.visible=!0)}return e})))(Z(e,!1));var t})),J=hu((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(T))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),ee=hu((()=>{j((e=>tF(e,i,r))),O&&R((e=>tF(e,i,r)))})),te=(e,t,n)=>{const r=((e,t,n)=>WM(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!Ik(r,a))break;t.visible=n&&o.expanded&&o.visible}})))(P,e,t);H(e),U(n),O?R(r):j(r)};gu("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":{e.preventDefault();const n=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(P,(e=>e.visible),N+1);n&&(U((e=>e+1)),H(n.index),null===(t=F.current[n.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(P,(e=>e.visible),N-1);t?(U((e=>e-1)),H(t.index),null===(n=F.current[t.index])||void 0===n||n.focus()):0===Y&&I.current&&(I.current.focus(),U(-1),H(-1));break}case"ArrowRight":e.preventDefault(),te(N,!0,Y);break;case"ArrowLeft":e.preventDefault(),te(N,!1,Y);break;case"Space":if(document.activeElement===F.current[N]){e.preventDefault();const t=P[N];if(t.hasSubItems&&!S)return;null==b||b(t)}}})),u((()=>{let e=[];"default"===p?e=Q(n):"expand"===p?e=Z(n,!0):"collapse"===p&&(e=Z(n,!1)),j(e)}),[Z,Q,n,p]),u((()=>{V(P.filter((e=>e.visible)))}),[O,P]),u((()=>{ee()}),[r,i,ee]),u((()=>{if(O&&k.trim().length>=3){const e=J(n),t=(e=>WM(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(Z(e,!1));R(t)}}),[J,Z,n,O,k]),u((()=>{A||(I.current?(H(-1),U(-1),setTimeout((()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.focus()}),200)):F.current[N]?setTimeout((()=>{var e;return null===(e=F.current[N])||void 0===e?void 0:e.focus()}),200):(H(0),U(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200)))}),[N,Y,A]);const ne=()=>{if(x&&"success"===s)return e(q_,{ref:I,onChange:K,value:k,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:d})},re=()=>{if(r&&!O&&B.length>0&&"success"===s)return e(z_,{children:e(L_,{onClick:G,type:"button",$variant:d,children:0===i.size?"Select all":"Clear all"})})},ie=()=>{if(!w&&O&&0===z.length&&"success"===s)return t(N_,{"data-testid":"list-no-results",children:[e(H_,{"data-testid":"no-result-icon"}),"No results found."]})},oe=()=>{if(y&&"loading"===s)return t(N_,{"data-testid":"list-loading",children:[e(qc,{}),"Loading..."]})},ae=()=>{if(y&&"fail"===s)return t(N_,{"data-testid":"list-fail",children:[e(H_,{"data-testid":"load-error-icon"}),"Failed to load. ",e(P_,{onClick:q,type:"button",$variant:d,children:"Try again."})]})},se=t=>{if(r)switch(t.checked){case"mixed":return e(uF,{"aria-hidden":!0});case!0:return e(B_,{"aria-hidden":!0});default:return e(j_,{"aria-hidden":!0})}if(!t.hasSubItems)return e(dF,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(I_,{"aria-hidden":!0})})},le=(n,i)=>{const{level:o,visible:a,expanded:s,keyPath:d,checked:u,hasSubItems:h,indexInParent:g,parentSetSize:p}=n,f=n.index,m=Y===i,v=h&&!S;return t(oF,{$visible:a,children:[L>0&&e(sF,{$level:o}),L>0&&!h&&r&&e(cF,{}),t(aF,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":o+1,"aria-posinset":g+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),v?te(f,!s,i):((e,t)=>{U(t),H(e),null==b||b(P[e])})(f,i)},onMouseEnter:()=>((e,t)=>{H(t.index),U(e)})(i,n),ref:e=>F.current[n.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:v,children:[h&&e(lF,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),te(f,!s,i)},$expanded:s,children:e(Ke,{})}),se(n),e(HD,{bold:h,searchTerm:O?T:void 0,label:n.item.label,selected:!!u,truncationType:l,maxLines:c})]})]},`[${d.join("---")}]`)};return e(E_,{"data-testid":"dropdown-container",ref:_,$width:g,$variant:d,children:t(__,{"data-testid":"nested-dropdown-list",children:[ne(),re(),ie(),oe(),ae(),e("div",{"aria-multiselectable":r,id:h,ref:M,role:"tree",children:e(ZE,Object.assign({style:{height:"100%"},customScrollParent:null!==(ce=_.current)&&void 0!==ce?ce:void 0,data:W,itemContent:(e,t)=>le(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:W.length,key:W.length}:{}))})]})});var ce},gF=({selectedOptions:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,onBlur:D,variant:T="default",readOnly:O,alignment:E,dropdownZIndex:_})=>{const[M,F]=a(t||[]),[I,A]=a(!1),[B,j]=a(!1),[z]=a((()=>du.generate())),R=o(null),P=o(null);u((()=>{F(t||[])}),[t]);const L=()=>{M&&M.length>0?(F([]),U([])):(F(r),U(r))},N=(e,t)=>{const n=[...M],r=_k(M,(e=>(f?f(e):e)===t));r>-1?n.splice(r,1):n.push(e),F(n),U(n)},H=()=>{I&&(A(!1),Y(!1))},W=()=>{B||I||j(!0)},V=e=>{B&&!I&&R.current&&!R.current.contains(e.relatedTarget)&&(j(!1),null==D||D())},Y=e=>{!e&&y&&y(),e&&v&&v()},U=e=>{b&&b(e)};return e(O_,{children:e(Bp,{enabled:!O&&!i,isOpen:I,renderElement:()=>e(qg,{className:l,"data-testid":c,id:d,ref:R,tabIndex:-1,onFocus:W,onBlur:V,$focused:B,$disabled:i,$readOnly:O,$error:s,children:e(J_,{ref:P,disabled:i,expanded:I,listboxId:z,popupRole:"listbox",readOnly:O,variant:T,children:e(Tp,{$disabled:i,children:M&&0!==M.length?e(Op,{$variant:T,children:r&&M.length===r.length?"All selected":`${M.length} selected`}):e(Ep,{truncateType:$,$variant:T,children:n})})})}),renderDropdown:({elementWidth:t})=>e(G_,{listboxId:z,listItems:r,onSelectItem:N,onDismiss:H,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:g,searchPlaceholder:p,multiSelect:!0,selectedItems:M,onSelectAll:L,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,variant:T,width:t}),onOpen:()=>{A(!0),Y(!0),j(!0)},onClose:e=>{A(!1),Y(!1),"click"!==e&&(j(!1),null==D||D())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1),Y(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:_})})},pF=(e,t)=>{const[n,...r]=t;if(eF(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?pF(i.subItems,r):i:void 0},fF=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...fF(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},mF=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,readOnly:b,onSearch:v,onSelectOptions:y,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:C,optionsLoadState:S="success",optionTruncationType:k="end",variant:D="default",alignment:T,dropdownZIndex:O})=>{const E=n,[_,M]=a(d?iF(d):new Set),[F,I]=a([]),[A,B]=a(!1),[j,z]=a(!1),[R]=a((()=>du.generate())),P=o(null),L=o(null),N=o(null);u((()=>{const e=d||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],o=pF(e,i);o&&n.push({value:o.value,label:o.label,keyPath:i})}return n})(E,e);M(iF(e)),I(t)}),[d,E]);const H=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));M(iF(e)),I(n),q(e,n)},W=e=>{const t=G(e),n=t.map((e=>e.keyPath));I(t),M(iF(n)),q(n,t)},V=()=>{j||A||z(!0)},Y=e=>{j&&!A&&P.current&&!P.current.contains(e.relatedTarget)&&(z(!1),null==C||C())},U=()=>{if(F.length>1)return`${F.length} selected`;const{label:e,value:t}=F[0];return g?g(t):e},K=e=>{if("middle"===k){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),uu.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&w&&w(),e&&x&&x()},q=(e,t)=>{if(y){const n=t.map((e=>e.value));y(e,n)}},G=e=>{if(!0===e.checked)return F.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!Ik(e.keyPath,n)}));{const t=[...F],n=e.hasSubItems?((e,t)=>{const n=pF(e,t);return n&&n.subItems?fF(n.subItems,t):[]})(E,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{F.find((t=>Ik(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Bp,{enabled:!b&&!r,isOpen:A,renderElement:()=>e(qg,{className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:j,$disabled:r,$readOnly:b,$error:i,children:e(J_,{ref:L,disabled:r,expanded:A,listboxId:R,popupRole:"tree",readOnly:b,variant:D,children:e(Tp,{ref:N,$disabled:r,children:eF(F)?e(Ep,{truncateType:k,children:t}):e(Op,{truncateType:k,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e(hF,{listboxId:R,listItems:E,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:S,itemTruncationType:k,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,onSelectItem:W,onSelectAll:H,onRetry:$,onSearch:v,variant:D,mode:h,width:t}),onOpen:()=>{B(!0),X(!0),z(!0)},onClose:e=>{B(!1),X(!1),"click"!==e&&(z(!1),null==C||C())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),B(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:O})},bF=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,selectableCategory:m,hideNoResultsDisplay:b,readOnly:v,onBlur:y,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:C,onRetry:S,optionsLoadState:k="success",optionTruncationType:D="end",variant:T="default",alignment:O,dropdownZIndex:E})=>{const _=n,[M,F]=a(d?iF([d]):new Set),[I,A]=a(),[B,j]=a(!1),[z,R]=a(!1),[P]=a((()=>du.generate())),L=o(null),N=o(null),H=o(null);u((()=>{F(d?iF([d]):new Set);const e=nF(_,d||[]);A(null!=e?e:void 0)}),[d,_]);const W=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;F(iF([n])),A({label:r,value:i}),j(!1),X(!1),null===(t=N.current)||void 0===t||t.focus(),null==w||w(n,i)},V=()=>{z||B||R(!0)},Y=e=>{z&&!B&&L.current&&!L.current.contains(e.relatedTarget)&&(R(!1),null==y||y())},U=()=>{if(!I)return"";const{label:e,value:t}=I;return g?g(t):e},K=e=>{if("middle"===D){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),uu.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&C&&C(),e&&$&&$()};return e(Bp,{enabled:!v&&!r,isOpen:B,renderElement:()=>e(qg,{className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:V,onBlur:Y,$focused:z,$disabled:r,$readOnly:v,$error:i,children:e(J_,{ref:N,disabled:r,expanded:B,listboxId:P,popupRole:"tree",readOnly:v,variant:T,children:e(Tp,{ref:H,$disabled:r,children:eF(I)?e(Ep,{truncateType:D,children:t}):e(Op,{truncateType:D,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e(hF,{listboxId:P,listItems:_,selectedKeyPaths:M,selectableCategory:m,itemsLoadState:k,itemTruncationType:D,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:b,onSelectItem:W,onRetry:S,onSearch:x,variant:T,mode:h,width:t}),onOpen:()=>{j(!0),X(!0),R(!0)},onClose:e=>{j(!1),X(!1),"click"!==e&&(R(!1),null==y||y())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1),X(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:E})};var vF=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n};var yF=function(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}},xF=yF(),wF=VC;var $F=LC;var CF=function(e,t){return function(n,r){if(null==n)return n;if(!$F(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}((function(e,t){return e&&xF(e,t,wF)}));var SF=vF,kF=CF,DF=bk,TF=function(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n},OF=Xo;var EF=Uo((function(e,t,n){var r=OF(e)?SF:TF,i=arguments.length<3;return r(e,DF(t),n,i,kF)}));const _F=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],MF=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var FF;!function(e){e.getCountries=()=>[].concat(..._F.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:MF("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const o=i.join(" ");return EF(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const n=e.remainingText.slice(0,1),r=e.remainingText.slice(1);return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(FF||(FF={}));const IF=t=>{var{onChange:n,value:r,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:g,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=dt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(FF.getCountries()),[w,$]=a(void 0),[C,S]=a(""),k=o(null),D=mu({ref:k,formatter:e=>FF.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===AF(null==r?void 0:r.countryCode)))[0];$(e),S(FF.formatNumber(null==r?void 0:r.number,e))}),[r]);const T=e=>{E(C,e),n&&O(C,e)},O=(e,t)=>{const r=FF.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&BF(t.countryCode)})},E=(e,t)=>{S(FF.formatNumber(e,t)),$(t)};return e(vD,Object.assign({ref:k,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),E(t,w),n&&O(t,w)},allowClear:i&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:BF(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:g,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:BF(e.countryCode)}),onSelectOption:T,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},AF=e=>e?e.replace("+",""):"",BF=e=>e?e.includes("+")?e:`+${e}`:"",jF=({className:r,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:g=!1,error:f,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=a((()=>s?W(s):"")),[$,C]=a((()=>s?W(s):"")),[S,k]=a([]),[D,T]=a(!0),[O,E]=a(!1),[_,M]=a(!!s),[F,I]=a(s),A=o(c),B=e=>ut(void 0,void 0,void 0,(function*(){E(!1),T(!0);try{const t=yield A.current(e);C(e),k(t),T(!1)}catch(e){E(!0)}})),j=p(rg((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{A.current=c}),[c]),u((()=>{x&&x.length>=l&&x!==$?j(x):j.cancel(),""===x&&F&&(y&&y(void 0,void 0),P(),I(void 0)),s&&x!==W(s)&&M(!1)}),[x,s]),u((()=>{w(s?W(s):""),P(s),I(s)}),[s]);const z=e=>{w(e.target.value)},R=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),M(!!e),k([]),T(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{_||F?(P(F),w(W(F)),y&&y(F,V(F)),I(F)):L()},H=()=>!!x&&x.length>=l&&!_,W=e=>e?v?v(e):e.toString():"",V=e=>{if(e)return m?m(e):e},Y=()=>e(i$,{type:"text",value:x,onChange:z,placeholder:d,readOnly:h,disabled:g,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<l?N:void 0});return t(_p,{className:r,show:H(),error:f&&!H(),disabled:g,readOnly:h,testId:i,onBlur:N,children:[e(h?n:Cp,{children:Y()}),!h&&H()&&e(Dp,{}),e(rD,{listItems:S,onSelectItem:R,valueExtractor:m,listExtractor:b,itemsLoadState:O?"fail":D?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},zF=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,RF=M(e$)`
    position: absolute;
    right: 0;
    padding-left: ${gc["spacing-8"]};
    margin-right: 0;
`,PF=M($p)`
    // space for clear icon
    padding-right: calc(1.25rem + ${gc["spacing-16"]});
`,LF=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":g,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:T={from:"success",to:"success"},optionTruncationType:O="middle",renderCustomSelectedOption:E,renderListItem:_,renderCustomCallToAction:M}=n,F=dt(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,A]=a(),[B,j]=a(),z=o(null),R={from:o(null),to:o(null)},[P,L]=a("none");u((()=>{A(null==r?void 0:r.from),j(null==r?void 0:r.to)}),[r]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&I?"to":"from")},H=e=>{var t;const n="from"===e?I:B;if(!n)return"";if(w)return w(n);if(v){const e=v(n);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return n.toString()},W=(e,t)=>{if("middle"===O){let n=0;return R[e]&&R[e].current&&(n=R[e].current.getBoundingClientRect().width),uu.truncateOneLine(t,n,120,8)}return t},V=e=>{!e&&k&&k(),e&&S&&S()},Y=t=>{const n="from"===t?I:B;return n?E?E(n):e(Op,{truncateType:O,children:W(t,H(t))}):e(Ep,{truncateType:O,children:W(t,i[t]||"")})},U=t=>e(Tp,{onClick:N(t),ref:R[t],$disabled:l,children:Y(t)});return t(_p,{show:"none"!==P,error:h&&!("none"!==P),disabled:l,readOnly:d,testId:g,onBlur:()=>{V(!1),L("none"),I&&B||(j(void 0),A(void 0))},className:c,children:[t(zF,{children:[e(PF,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:z,onClick:N()},F,{children:t(of,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&I&&B&&!d&&!l&&e(RF,{onClick:e=>{e.stopPropagation(),A(void 0),j(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(t$,{"aria-hidden":!0})})]}),"none"!==P&&e(Dp,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const n="from"===P?I:B;return e(rD,{listItems:t,onSelectItem:(e,t)=>((e,t,n)=>{var r;"from"===n?A(e):j(e),V(!1),z&&(null===(r=z.current)||void 0===r||r.focus()),$&&$({[n]:e},t),"from"===n?(j(void 0),L("to"),V(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),V(!1),z&&(null===(e=z.current)||void 0===e||e.focus()),I&&B||(j(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:f,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:n?[n]:[],onRetry:D,itemsLoadState:T[P],itemTruncationType:O,renderListItem:_,renderCustomCallToAction:M})}return null})()]})},NF=({selectedOption:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:D,hideNoResultsDisplay:T,renderCustomCallToAction:O,onBlur:E,variant:_="default",readOnly:M,alignment:F,dropdownZIndex:I})=>{const[A,B]=a(t),[j,z]=a(!1),[R,P]=a(!1),[L]=a((()=>du.generate())),N=o(null),H=o(null),W=o(null);u((()=>{B(t)}),[t]);const V=(e,t)=>{var n;null===(n=H.current)||void 0===n||n.focus(),B(e),z(!1),G(!1),null==y||y(e,t)},Y=()=>{j&&(z(!1),G(!1))},U=()=>{R||j||P(!0)},K=e=>{R&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},X=()=>{var e;if(!A)return"";if(v)return v(A);if(f){const t=f(A);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return A.toString()},q=e=>{if("middle"===S){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),uu.truncateOneLine(e,t,120,8)}return e},G=e=>{e?null==x||x():null==w||w()};return e(O_,{children:e(Bp,{enabled:!M&&!i,isOpen:j,renderElement:()=>e(qg,{className:l,"data-testid":c,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:R,$disabled:i,$readOnly:M,$error:s,children:e(J_,{ref:H,disabled:i,expanded:j,listboxId:L,popupRole:"listbox",readOnly:M,variant:_,children:e(Tp,{ref:W,$disabled:i,children:A?k?k(A):e(Op,{truncateType:S,$variant:_,children:q(X())}):e(Ep,{truncateType:S,$variant:_,children:n})})})}),renderDropdown:({elementWidth:t})=>e(G_,{listboxId:L,listItems:r,onSelectItem:V,onDismiss:Y,valueExtractor:f,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:g,selectedItems:A?[A]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:D,hideNoResultsDisplay:T,renderCustomCallToAction:O,variant:_,width:t}),onOpen:()=>{z(!0),G(!0),P(!0)},onClose:e=>{z(!1),G(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),z(!1),G(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:I})})},HF=M.div`
    overflow: hidden;
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    background: ${cc.bg};
    padding: ${gc["spacing-16"]};
    min-width: 23rem;

    ${mc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${fc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${mc.MaxWidth.xs} {
        width: calc(100vw - ${fc["xs-margin"]} * 2);
    }

    ${mc.MaxWidth.xxs} {
        width: calc(100vw - ${fc["xxs-margin"]} * 2);
    }
`,WF=M.div`
    display: flex;
    align-items: baseline;
`,VF=M.div`
    margin: 0 0.5rem;
`,YF=M.div`
    ${e=>"small"===e.$variant?dc["body-md-regular"]:dc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return F`
                    ${kc(1)}
                `}}
    overflow: hidden;
`,UF=M(YF)`
    color: ${cc["text-subtler"]};
`,KF=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:g,onChange:p,onChangeEnd:f,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=n,C=dt(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:k=[],renderEmptyView:D,ariaLabels:T}=d,[O,E]=a(Y()),[_,M]=a(!1),[F,I]=a(!1),[A]=a((()=>du.generate())),B=k.map((e=>e.minValue)),j=Math.min(...B),z=o(null),R=o(null),P=o(null),L=C["data-testid"]||"select-histogram";u((()=>{$!==O&&E(Y())}),[$]);const N=e=>{E(e),null==p||p(e)},H=e=>{E(e),null==f||f(e)},W=()=>{F||_||I(!0)},V=e=>{F&&!_&&z.current&&!z.current.contains(e.relatedTarget)&&(I(!1),null==g||g())};function Y(){return null!=$?$:[j,j+S]}const U=e=>w?w(e):t(Ec.BodyBL,{children:[v,e,y]});return e(O_,{children:e(Bp,{enabled:!x&&!s,isOpen:_,renderElement:()=>e(qg,{className:i,"data-testid":L,id:h,ref:z,tabIndex:-1,onFocus:W,onBlur:V,$focused:F,$disabled:s,$readOnly:x,$error:c,children:e(J_,{ref:R,disabled:s,expanded:_,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default",children:e(Tp,{ref:P,$disabled:s,children:B&&0!==B.length?t(WF,{children:[U(O[0]),e(VF,{children:"-"}),U(O[1])]}):e(UF,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t})=>e(HF,{style:{width:t},children:e(Qw,{interval:S,value:O,bins:k,onChange:N,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:D,ariaLabels:T})}),onOpen:()=>{M(!0)},onClose:()=>{M(!1)},onDismiss:()=>{var e;null===(e=R.current)||void 0===e||e.focus(),M(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:l})})},XF=t=>{var{value:n,ariaLabel:r,onChange:i,onChangeEnd:o}=t,s=dt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e(Uw,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:r?[r]:void 0}))},qF=M.p`
    text-align: right;
    ${dc["body-sm-semibold"]}
    color: ${cc["text-subtler"]};
`,GF=({value:t,maxLength:r,renderCustomCounter:o})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,r]);const c=e=>{if(o)return o(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(n,{children:i.isValidElement(s)?s:e(qF,{"data-testid":"counter-label",children:s})})},ZF=M.div`
    display: flex;
    flex-direction: column;
`,QF=M.textarea`
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    background: ${cc.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};
    width: 100%;

    ${dc["body-baseline-regular"]}
    color: ${cc.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${hc["width-020"]} ${hc.solid}
            ${cc["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${cc["text-subtler"]};
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${cc["border-focus"]};
                }
            `:e.disabled?F`
                background: ${cc["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${cc["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${cc["border-error"]};

                :focus,
                :active {
                    outline-color: ${cc["border-error-focus"]};
                }
            `:void 0}
`,JF=i.forwardRef(((t,n)=>{var{value:r,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,g=dt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,f]=a(r);u((()=>{f(r)}),[r]);return e(QF,Object.assign({ref:n,disabled:i,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(f(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;f(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l&&h?l.length+h:h},g))})),eI=i.forwardRef(((n,r)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:g}=n,p=dt(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,m]=a(i);u((()=>{m(i)}),[i]);return t(ZF,{children:[e(JF,Object.assign({ref:r,disabled:o,value:f,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(GF,{value:f,maxLength:h,renderCustomCounter:g})]})})),tI=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${gc["spacing-4"]};
`,nI=M.div`
    display: flex;
    flex: 1;
    margin-right: ${gc["spacing-12"]};
`,rI=M(xw)`
    margin-top: 0;
`,iI=i.forwardRef(((r,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:g,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:D=""}=r,T=dt(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[O,E]=a(s);u((()=>{E(s)}),[s]);return t(Ow,{id:c,label:o,disabled:T.disabled,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(JF,Object.assign({id:`${c}-base`,"data-testid":h||c,value:O,error:!!l,onChange:e=>{const t=e.target.value;E(t),g&&g(e)},ref:i,prefix:D,transformValue:k},T)),l||T.maxLength?t(tI,{children:[l&&e(nI,{children:e(rI,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),T.maxLength&&e(GF,{value:O,maxLength:T.maxLength,renderCustomCounter:T.renderCustomCounter})]}):e(n,{})]})})),oI=M.div`
    position: relative;
`,aI=M(Gg)`
    height: 3rem;
    gap: ${gc["spacing-8"]};
`,sI=M(Zg)`
    display: block;
    width: 100%;
    flex: 1;
`,lI=M.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${cc["icon-selected-disabled"]};
                `:F`
                    color: ${cc["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${cc["icon-selected"]};
            `:F`
            color: ${cc["icon-subtle"]};
        `};
`,cI=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${dc.Spec["weight-regular"]};
        ${e=>e.$size&&dc[`${e.$size}-regular`]}
        color: ${cc.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,dI=M.ol`
    ${cI}

    margin-left: 3rem;

    ${mc.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,n=e.$counterType||"decimal",r=e.$counterSeparator||")";return F`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return F`
                counter-reset: list ${t?n+1:n-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,uI=M.ul`
    ${cI}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,hI=t=>{var{size:n,bulletType:r,bottomMargin:i,children:o}=t,a=dt(t,["size","bulletType","bottomMargin","children"]);return e(uI,Object.assign({$size:n,$bulletType:r,$bottomMargin:i},a,{children:o}))};hI.displayName="TextList.Ul";const gI=t=>{var{size:n,counterType:r,counterSeparator:i,bottomMargin:o,children:a}=t,s=dt(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(dI,Object.assign({$size:n,$counterType:r,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};gI.displayName="TextList.Ol";const pI=hI,fI=M.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${cc.bg};

    ${e=>{if(!e.$indicator)return F`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return F`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?F`
                            border-color: ${cc["border-error"]};
                        `:F`
                            border-color: ${cc["border-error"]};

                            &:has(${xI}:hover) {
                                background: ${cc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${cc["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${cc["bg-selected"]};

                        &:has(${xI}:hover) {
                            background: ${cc["bg-selected-hover"]};

                            & ${bI} {
                                color: ${cc["text-selected-hover"]};
                            }

                            & ${EI} {
                                color: ${cc["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${xI}:hover) {
                        background: ${cc["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${cc["border-error"]};
                        `:F`
                            border-color: ${cc["border-error"]};

                            &:has(${xI}:hover) {
                                background: ${cc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${cc["border-selected-disabled"]};
                            background: ${cc["bg-selected-disabled"]};
                        `:F`
                            border-color: ${cc["border-disabled"]};
                            background: ${cc["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${cc["border-selected"]};
                        background: ${cc["bg-selected"]};

                        &:has(${xI}:hover) {
                            background: ${cc["bg-selected-hover"]};

                            & ${bI} {
                                color: ${cc["text-selected-hover"]};
                            }

                            & ${EI} {
                                color: ${cc["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border-color: ${cc.border};

                    &:has(${xI}:hover) {
                        background: ${cc["bg-hover-subtle"]};
                    }
                `}
`,mI=M.input`
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
`,bI=M.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${cc["text-selected-disabled"]};
                `:F`
                    color: ${cc["text-disabled"]};
                `:e.$selected?F`
                color: ${cc["text-selected"]};
            `:F`
            color: ${cc.text};
        `}
`,vI=M.label`
    ${dc["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${mc.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${mc.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
`,yI=M.div`
    ${dc["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${dc["body-md-semibold"]}
    }
`,xI=M.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,wI=M.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,$I=M.button`
    color: ${e=>e.$disabled?cc["text-disabled"]:cc["text-error"]};
    white-space: nowrap;
    ${dc["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,CI=M.button`
    color: ${e=>e.disabled?cc["text-disabled"]:cc["text-primary"]};
    ${dc["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${cc.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,SI=M.div`
    width: 100%;
    color: ${e=>e.$disabled?cc["text-disabled"]:cc["text-error"]};
    border: none;
    background: ${cc.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,kI=M(gd)`
    width: 100%;
    user-select: none;
`,DI=M.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${cc.bg};
    ${od({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${cc["text-disabled"]};
            `:e.$selected?F`
                color: ${cc["text-selected"]};
            `:F`
                color: ${cc.text};
            `}
`,TI=M(Ec.BodyMD)`
    color: ${e=>e.$disabled?cc["text-disabled"]:cc["text-error"]};
`,OI=M(pI)`
    color: ${e=>e.$disabled?cc["text-disabled"]:cc["text-error"]};
`,EI=M((({type:t,active:n=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=e(n?Ye:Ve,{});break;case"radio":o=e(n?Ge:qe,{});break;case"tick":o=e(Ue,{});break;case"cross":o=e(je,{});break;default:o=null}return e(lI,{className:i,$active:n,$disabled:r,children:o})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${cc["icon-selected-disabled"]};
                `:F`
                    color: ${cc["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${cc["icon-selected"]};
            `:F`
            color: ${cc["icon-subtle"]};
        `};
`,_I=({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:g,error:p,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:D,children:T,initialExpanded:O}=y||{},[E,M]=a(s),[F,I]=a(!!O),A=m((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[B]=a(du.generate()),j=b?`${b}`:`tg-${B}`,z=o(null);u((()=>{M(s)}),[s]),u((()=>{E&&I(null==O||O)}),[E]);const R=()=>{g||I(!F)},P=()=>{g||!w||w()},L=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e(EI,{type:t,active:E,disabled:g,$selected:E,$disabled:g})},N=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(yI,{"data-id":"toggle-sublabel",children:t})},H=r=>t(n,{children:[e(TI,{weight:"semibold",$disabled:g,children:"Error"}),e(OI,{$disabled:g,children:null==r?void 0:r.map(((t,n)=>e("li",{id:`${j}-error-list-item-${n}`,children:e(TI,{weight:"semibold",$disabled:g,children:t})},n)))})]});return t(fI,{$selected:E,$disabled:g,className:v,$styleType:l,$error:p,$indicator:i,$useContentWidth:S,id:b,"data-testid":$,children:[t(xI,{id:`${j}-header-container`,$disabled:g,$error:p,$selected:E,$indicator:i,$styleType:l,children:[t(wI,{$addPadding:x,children:[e(mI,{ref:z,name:f,id:`${j}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(C)return void C(e);switch(r){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":E||M(!0)}}},checked:E}),i&&L(),t(bI,{$selected:E,$disabled:g,children:[e(vI,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:d,children:c}),h&&N()]})]}),x&&e($I,{type:"button",$disabled:g,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),T&&t("div",{children:[(!k||F)&&e(DI,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:T}),k&&!F&&A&&e(SI,{$disabled:g,onClick:R,id:`${j}-error-alert`,children:e(kI,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(D)?H(D):D})}),k&&t(CI,{$paddingTopRequired:!F&&!A,disabled:g,onClick:R,"data-testid":F?"collapse-button":"expand-button",children:[F?"Show less":"Show more",e(F?_:fe,{"aria-hidden":!0})]})]})]})},MI=M(Vo.div)`
    position: absolute;
    top: calc(3rem + ${gc["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${mc.MaxWidth.xxs} {
        max-width: 100%;
    }
`,FI=M.div`
    position: relative;
    width: 100%;
    padding: ${gc["spacing-8"]} ${gc["spacing-20"]}
        ${gc["spacing-24"]} ${gc["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${cc.bg};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
`,II=M.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mc.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,AI=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${gc["spacing-16"]};
    gap: ${gc["spacing-8"]} ${gc["spacing-16"]};

    ${mc.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${gc["spacing-32"]};
    }
`,BI=M.div`
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-32"]};

    ${mc.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,jI=M.div`
    display: flex;
    gap: ${gc["spacing-8"]};

    ${mc.MaxWidth.lg} {
        flex-direction: column;
    }

    ${mc.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,zI=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mc.MaxWidth.xxs} {
        width: 6rem;
    }
`,RI=M(Sc)`
    width: 5rem;
    padding: ${gc["spacing-16"]} 0;
    color: ${cc.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${cc["icon-hover"]};
    }
`,PI=M(Ec.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,LI=M(qg)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mc.MaxWidth.xxs} {
        width: 100%;
    }
`,NI=M(Zg)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,HI=M(_I)`
    min-width: 5rem;
    flex: 1;
`,WI=M(Jc.Small)`
    width: 7rem;

    ${mc.MaxWidth.sm} {
        flex: 1;
    }

    ${mc.MaxWidth.xxs} {
        width: 100%;
    }
`;var VI,YI,UI;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(VI||(VI={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(YI||(YI={})),function(e){e.AM="am",e.PM="pm"}(UI||(UI={}));const KI=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{var d;const h=sg.getTimeValues(s,r),[g,f]=a(h.hour),[m,b]=a(h.minute),[v,y]=a(h.period),x=o(null),w=o(null),$=dn();u((()=>{if(i&&x.current&&x.current.focus(),i){const{hour:e,minute:t,period:n}=sg.getTimeValues(s,r);f(e),b(t),y(n)}}),[i,r,s]),u((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case VI.MINUTE_UP:b(sg.updateMinutes(m,"add"));break;case VI.MINUTE_DOWN:b(sg.updateMinutes(m,"minus"));break;case VI.HOUR_UP:f(sg.updateHours(g,"add"));break;case VI.HOUR_DOWN:f(sg.updateHours(g,"minus"))}}),[g,m]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case YI.HOUR:t.length<=2&&f(t);break;case YI.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case YI.HOUR:{const n=t>23||t<0?h.hour:sg.convertHourTo12HourFormat(e.target.value);f(n);break}case YI.MINUTE:{const n=t>59||t<0?h.minute:e.target.value;b(uu.padValue(n));break}}},O=e=>{switch(e.target.name){case UI.AM:y(ag.AM);break;case UI.PM:y(ag.PM)}},E=e=>n?`${n}-${e}`:e,M=Do({opacity:i?1:0,height:i?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(MI,{"data-testid":"animated-dropdown-wrapper",style:M,children:t(FI,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:i?void 0:"",children:[t(II,{children:[t(BI,{children:[t(zI,{children:[e(RI,{"aria-label":"increase hour",name:VI.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:e(_,{})}),e(LI,{children:e(NI,{"aria-label":"hour",type:"number",name:YI.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e(RI,{"aria-label":"decrease hour",name:VI.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:e(fe,{})})]}),e(PI,{children:":"}),t(zI,{children:[e(RI,{"aria-label":"increase minute",name:VI.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:e(_,{})}),e(LI,{children:e(NI,{"aria-label":"minute",type:"number",name:YI.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:D,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e(RI,{"aria-label":"decrease minute",name:VI.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:e(fe,{})})]})]}),t(jI,{children:[e(HI,{checked:v===ag.AM,name:UI.AM,type:"radio",onChange:O,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(HI,{checked:v===ag.PM,name:UI.PM,type:"radio",onChange:O,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(AI,{children:[e(WI,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":E("cancel-button"),children:"Cancel"}),e(WI,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?sg.convertTo24HourFormat({hour:g,minute:m,period:v}):`${g}:${m}${v}`,l(e)},disabled:""===g||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},XI=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:g,onBlur:p}=n,f=dt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),S=o(null);u((()=>{l&&(w(l.start),C(l.end))}),[l]),gu("mousedown",(function(e){i||O(e)}),"document"),gu("keyup",(function(e){if("Tab"===e.code)O(e)}),"document");const k=()=>{T()},D=()=>{m||v||g&&g()},T=()=>{b(!1),y(!1),p&&p()},O=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&T()};return e(oI,Object.assign({ref:S,id:r},f,{children:t(aI,{$disabled:i,$error:s,$readOnly:d,children:[t(of,{error:s,currentActive:m?"start":v?"end":"none",children:[e(sI,{onFocus:()=>{i||d||m||(y(!1),b(!0),D())},readOnly:!0,placeholder:"From",value:sg.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(sI,{onFocus:()=>{i||d||v||(b(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:sg.formatDisplayValue($,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(KI,{id:r,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(KI,{id:r,show:v,value:$,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]})}))},qI=M(Gg)`
    height: 3rem;
    gap: ${gc["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${gc["spacing-20"]});
`,GI=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=n,$=dt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>du.generate())),[S,k]=a(null),[D,T]=a(!1),[O,E]=a(""),[_,M]=a(""),[F,I]=a(""),[A,B]=a(""),[j,z]=a(""),R=o(null),P=o(null),L=o(null),N=m((()=>sg.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return N;const e=sg.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=p((e=>sg.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const n=null!==(e=W(l.start))&&void 0!==e?e:"",r=null!==(t=W(l.end))&&void 0!==t?t:"";M(n),I(r),B(n),z(r)}}),[l,W]),u((()=>{if(s)return void T(!1);const e=W(_),t=W(F);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&sg.to24Hour(t)<sg.to24Hour(e)))return E(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||T(!0));E("End time must be after start time")}T(!1)}),[_,F,W,s]);const V=e=>{i||d||(S||D||null==g||g(),k(e),T(!0))},Y=e=>{var t;i||d||(k(e),T(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(_):"end"===S&&(D&&X(F),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":q(_,F,{})}}const K=e=>{q(e,F,{goToNextInput:!0})},X=e=>{q(_,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,o,a;const s=null!==(i=W(e))&&void 0!==i?i:A,l=null!==(o=W(t))&&void 0!==o?o:j;M(s),I(l);s===A&&l===j||null==h||h({start:s,end:l}),n&&void 0!==W(e)&&(k("end"),null===(a=L.current)||void 0===a||a.select()),r&&(k(null),T(!1),null==f||f()),B(s),z(l)},G=e=>{e.stopPropagation(),M(""),I(""),B(""),z("");null==h||h({start:"",end:""}),k(null),T(!1)},Z=e=>{R.current&&!R.current.contains(e.relatedTarget)&&S&&!D&&q(_,F,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==_?void 0:_.length)>0||(null==F?void 0:F.length)>0))return e(RF,{onClick:G,type:"button","aria-label":"Clear",children:e(t$,{"aria-hidden":!0})})};return t(oI,Object.assign({id:r},$,{children:[e(O_,{children:e(Bp,{enabled:!d&&!i,isOpen:D,renderElement:()=>t(qI,{ref:R,$disabled:i,$error:s||!!O,$readOnly:d,onBlur:Z,children:[t(of,{error:s||!!O,currentActive:null===S?"none":S,children:[e(sI,{ref:P,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>M(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),e(sI,{ref:L,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>I(e.target.value),value:F,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),Q()]}),renderDropdown:()=>{if(D)return e(G_,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[_],disableItemFocus:!0,topScrollItem:sg.findClosestFlooredTime(W(_),N),listboxId:C}:{listItems:H,onSelectItem:X,selectedItems:[F],disableItemFocus:!0,topScrollItem:sg.findClosestFlooredTime(W(F),H),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),T(!1),null==f||f()):q(_,F,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),T(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&O&&e(xw,{id:r?`${r}-error-message`:"error-message",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message",children:O})]}))},ZI=t=>{var{variant:n="dial"}=t,r=dt(t,["variant"]);return e("combobox"===n?GI:XI,Object.assign({},r))};M.div`
    position: relative;
`;const QI=M(Zg)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,JI=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:g,onBlur:f}=n,m=dt(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o(null);gu("mousedown",(function(e){i||s||$(e)}),"document"),gu("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),g&&g())};const w=()=>{v(!1),f&&f()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Gg,Object.assign({ref:y,id:r,$readOnly:s,$disabled:i,$error:l},m,{children:[e(QI,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:sg.formatDisplayValue(c,u),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e(KI,{id:r,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},eA=M(mD)`
    margin-right: 0.5rem;
`,tA=M(i$)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,nA=M(tA)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,rA=M(Ec.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${cc["text-disabled"]};
            `}}
`,iA=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,oA=M(Ec.BodyBL)``,aA=r=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:g,readOnly:p,placeholder:f="00-8888",autoComplete:m}=r,b=dt(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,C]=a("none"),S=o(null),k=o(null),D=o(null),T=o(v),O=o(x),E=o($),_=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),M=mu({ref:k,formatter:_}),F=mu({ref:D,formatter:_}),I=e=>{T.current=e,y(e)},A=e=>{O.current=e,w(e)},B=e=>{E.current=e,C(e)};u((()=>{"floor"===$&&3===v.length&&D.current&&D.current.focus()}),[v]),u((()=>{N(l)}),[l]);const j=e=>{B(e.target.name),e.target.select()},z=e=>{const t=e.target.name,n=e.target.value,r=L(n);"floor"===t?(I(r),r!==v&&H(r,t)):"unit"===t&&(A(r),r!==x&&H(r,t))},R=e=>{const t=e.target.name;if("floor"===t){const e=M();if(!e)return;const{nextValue:n,updateCaretPosition:r}=e;r(),I(n),H(n,t)}else if("unit"===t){const e=F();if(!e)return;const{nextValue:n,updateCaretPosition:r}=e;r(),A(n),H(n,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=k.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?uu.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==sA)if(void 0===e||0===e.length)I(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];I("floor"===$?e:L(e)),A("unit"===$?n:L(n))}}},H=(e,t)=>{if(!c&&!h)return;const n={floor:T.current,unit:O.current};if(n[t]=e,c){const e=V(n);c(e)}h&&h([n.floor,n.unit])},W=()=>{if(!d&&!g)return;const e={floor:L(T.current),unit:L(O.current)};if(d){const t=V(e);d(t)}g&&g([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":sA},Y=e=>e.split("-");return t(Gg,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&k.current&&k.current.focus()},$disabled:i,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(B("none"),W())},children:[e(eA,{"data-testid":"addon",$disabled:i,$readOnly:p,children:"#"}),p&&l?(n=>{const r=n.split("-");return t(iA,{children:[e(oA,{children:r[0]}),e(rA,{children:"-"}),e(oA,{children:r[1]})]})})(l):t(n,{children:[e(tA,{name:"floor",maxLength:3,value:v,ref:k,onFocus:j,onBlur:z,onChange:R,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?Y(f)[0]:"",autoComplete:m,styleType:"no-border"}),e(rA,{$inactive:0===v.length,children:"-"}),e(nA,{name:"unit",maxLength:5,value:x,ref:D,onFocus:j,onBlur:z,onChange:R,onKeyDown:P,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?Y(f)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},sA="Invalid unit number",lA={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Up,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(df,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(cm,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Qw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:o$,InputGroup:yD,MaskedInput:BD,Label:$w,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(gF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(bF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(mF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(NF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(KF,Object.assign({histogramSlider:v,error:!!r,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(XF,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Uw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(LF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s},y))})},Textarea:iI,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(JI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(ZI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,o=dt(t,["id","data-error-testid","children"]);return e(Ow,Object.assign({id:n,"data-error-testid":r},o,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(aA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(IF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ow,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(jF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})}},cA=M.li`
    display: flex;
    flex-direction: column;
    padding: ${gc["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
    }
`,dA=M.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${gc["spacing-16"]};
    width: 100%;
`,uA=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,hA=M.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${gc["spacing-16"]};

    ${mc.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,gA=M(Ec.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${gc["spacing-16"]};

    ${mc.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${gc["spacing-8"]};
    }
`,pA=M(Ec.BodyMD)``,fA=M.div`
    display: flex;
    ${mc.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return F`
                margin-left: calc(
                    96px + ${gc["spacing-32"]}
                ); // thumbnail width + right margin

                ${mc.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,mA=M(Jc.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${gc["spacing-16"]};
    }

    ${mc.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${gc["spacing-16"]};
        }
    }
`,bA=({thumbnailImageDataUrl:n,"data-testid":r,renderReplaceButton:i,onReplaceClick:o})=>t(vA,{"data-testid":r,children:[e(yA,{"data-testid":r?`${r}-image`:void 0,src:n}),i&&e(xA,{type:"button",onClick:()=>{o&&o()},children:"Replace"})]}),vA=M.div`
    width: auto;
    margin-right: ${gc["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,yA=M(Am)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${pc.sm};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    object-fit: cover;

    ${mc.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,xA=M.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${gc["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${dc["body-md-semibold"]}
    color: ${cc["text-primary"]};

    :hover {
        color: ${cc["text-hover"]};
    }
`,wA=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:g,truncateText:p=!0,thumbnailImageDataUrl:f}=n,[m,b]=a(),[v,y]=a(""),x=o(null),w=o(null);u((()=>{b($(h))}),[i]),u((()=>{y(n.description||"")}),[n]);const $=e=>{if(!p)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return uu.truncateOneLine(e,t,t/2,t/2/8,16)};return t(cA,{"data-testid":`${d}-edit-display`,children:[t(dA,{children:[f&&e(bA,{thumbnailImageDataUrl:f}),t(uA,{children:[t(hA,{ref:w,children:[e(gA,{weight:"semibold",children:m}),e(pA,{children:Im.formatFileSizeDisplay(g)})]}),e(lA.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:r,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(fA,{$thumbnail:!!f,children:[e(mA,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&s(x.current.value.trim())},children:"Save"}),e(mA,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l,children:"Cancel"})]})]})},$A=M.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${gc["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?F`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?F`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?F`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,CA=M(Je)`
    margin-right: ${gc["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${cc.icon};

    ${e=>e.$active?F`
                color: ${cc["icon-primary"]};
            `:e.$disabled?F`
                color: ${cc["icon-disabled"]};
            `:void 0};
`,SA=M.div`
    background: ${cc["bg-primary-subtlest"]};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.sm};
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${mc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]};
    }

    ${e=>e.$focused?F`
                border-color: ${cc["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${cc["border-focus"]} r g b / 50%);
            `:e.$disabled?F`
                border-color: ${cc["border-disabled"]};
            `:e.$error?F`
                background: ${cc["bg-error"]};
                border-color: ${cc["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return F`
                ${mc.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,kA=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${mc.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return F`
                ${mc.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,DA=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,TA=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${mc.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,OA=M.div`
    display: flex;
    width: 5rem;
    margin-left: ${gc["spacing-8"]};
    justify-content: flex-end;

    ${mc.MaxWidth.sm} {
        ${e=>e.$hideInMobile?F`
                    display: none;
                    visibility: hidden;
                `:F`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${gc["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,EA=M(Ec.BodyMD)``,_A=M(EA)`
    margin-top: ${gc["spacing-4"]};
`,MA=M(Ec.BodySM)`
    color: ${cc["text-error"]};
`,FA=M(MA)`
    margin-top: ${gc["spacing-4"]};
    ${mc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,IA=M(MA)`
    display: none;
    visibility: hidden;
    ${mc.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${gc["spacing-8"]};
    }
`,AA=M.div`
    width: 6rem;
    margin-left: ${gc["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${mc.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?F`
                    margin-left: 0;
                    margin-top: ${gc["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?F`
                    margin-left: 0;
                    margin-top: ${gc["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,BA=M(Xp)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }
`,jA=M(Sc)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${cc.icon};
    }
`,zA=w((({fileItem:r,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:g})=>{const{id:p,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=r,[C,S]=a(),{activeId:k}=f(Qm),{attributes:D,listeners:T,setNodeRef:O,transform:E,transition:_}=Jx({id:p}),M=o(null),F={transform:Zv.Translate.toString(E),transition:_},I=Object.assign(Object.assign({style:F},D),T),A=y<1,B=Im.formatFileSizeDisplay(b),j=k?k===p?"self":"others":"none";u((()=>{S(L(m))}),[l]);const z=()=>{h()},R=()=>{g&&g()},P=e=>{s&&e.stopPropagation()},L=e=>{if(!$)return e;const t=M&&M.current?M.current.getBoundingClientRect().width:0;return uu.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>c||!!k,H=()=>!!s&&!d,W=()=>t(n,{children:[e(EA,{weight:v?"semibold":"regular",children:C}),v&&e(_A,{children:v})]});return t($A,Object.assign({id:p,ref:O,$sortable:H(),$disabled:N(),$focusType:j},H()?I:{},{children:[H()&&e(CA,{"data-testid":`${p}-drag-handle`,$disabled:N(),$active:"self"===j}),t(SA,{$focused:"self"===j,$error:!!x,$loading:A,$disabled:N(),$editable:i,children:[(()=>{let r;return r=x?t(n,{children:[t(DA,{ref:M,children:[W(),x&&e(FA,{weight:"semibold",children:x})]}),e(OA,{children:e(EA,{children:B})}),x&&e(IA,{weight:"semibold",children:x})]}):w?(r=>t(n,{children:[e(bA,{thumbnailImageDataUrl:r,"data-testid":`${p}-thumbnail`}),t(TA,{children:[e(DA,{ref:M,children:W()}),e(OA,{children:e(EA,{children:B})})]})]}))(w):t(n,{children:[e(DA,{ref:M,children:W()}),e(OA,{$hideInMobile:A,children:e(EA,{children:B})})]}),e(kA,{$hasThumbnail:!!w,children:r})})(),!d&&(()=>{let r;return r=x?e(jA,{onClick:z,"data-testid":`${p}-error-delete-button`,"aria-label":`delete-${m}`,children:e(je,{"aria-hidden":!0})}):A?e(Bf,{progress:y,"data-testid":`${p}-progress-bar`}):t(n,{children:[i&&e(BA,{"data-testid":`${p}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:N(),onClick:R,onKeyDown:P,children:e(Qe,{"aria-hidden":!0})},"edit"),e(BA,{"data-testid":`${p}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:N(),onClick:z,onKeyDown:P,children:e(Ze,{"aria-hidden":!0})},"delete")]}),e(AA,{$editable:i,$error:!!x,$loading:A,children:r})})()]})]}))})),RA=M.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":gc["spacing-32"]};
`,PA=M.li`
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};

    :not(:last-child) {
        margin-bottom: ${gc["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${gc["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,LA=({fileItems:t,editableFileItems:n,fileDescriptionMaxLength:r,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[g,p]=a({}),{setActiveId:b}=f(Qm),{width:v=0,ref:y}=dn(),x=o({}),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>[...t].filter((e=>null!=e))),[...t])}(cy(iw,{activationConstraint:{distance:8}}),cy(nx,{activationConstraint:{delay:150,tolerance:5}}),cy(Uy,{coordinateGetter:nw})),$=e=>{delete x.current[e]};u((()=>{p(F(t))}),[t]);const C=e=>t=>{I(e.id,"display"),$(e.id);const n=Object.assign(Object.assign({},e),{description:t});c(n)},S=e=>t=>{x.current[e.id]=t},k=e=>()=>{e.description&&0!==e.description.length?I(e.id,"display"):d(e),$(e.id)},D=e=>()=>{I(e.id,"edit")},T=e=>()=>{d(e)},O=e=>{if(h&&t){const{active:n,over:r}=e;if(r&&n.id!==r.id){const e=t.findIndex((e=>e.id===n.id)),i=t.findIndex((e=>e.id===r.id)),o=Rx(t,e,i);h(o)}}b(void 0)},E=e=>{const{active:t}=e;b(t.id)},_=e=>n&&Im.isSupportedImageType(e.type),M=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&_(e)&&!e.description,F=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":g[n.id]?t[n.id]=g[n.id]:t[n.id]=M(n)?"edit":"display";return t},I=(e,t)=>{p((n=>Object.assign(Object.assign({},n),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(g).every((e=>"display"===e)),B=()=>{const n=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(t,g);return 0===n.length?null:n.map(((t,n)=>Array.isArray(t)?((t,n)=>{const i=t.map((t=>{const n=Object.assign({},t);return void 0!==x.current[t.id]&&(n.description=x.current[t.id]),e(wA,{fileItem:n,wrapperWidth:v,fileDescriptionMaxLength:r,onSave:C(t),onCancel:k(t),onBlur:S(t)},t.id)}));return e(PA,{children:e("ul",{children:i})},`editable-${n}`)})(t,n):e(zA,{fileItem:t,editable:_(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:T(t),onEditClick:D(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(RA,{$readOnly:l,ref:y,children:B()}):e(Mx,{sensors:w,onDragEnd:O,onDragStart:E,children:e(Ux,{items:t,strategy:Wx,children:e(RA,{$readOnly:l,ref:y,children:B()})})}):null},NA=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${gc["spacing-32"]};
    gap: ${gc["spacing-8"]};
`,HA=M(Ec.BodyBL)``,WA=M.div`
    color: ${cc.text};
    ${od({textSize:"body-baseline"})}
`,VA=M(Ec.BodyMD)`
    color: ${cc["text-subtler"]};
`,YA=M.div`
    color: ${cc.text};
    ${od({textSize:"body-md"})}
`,UA=M(gd)`
    margin-bottom: ${gc["spacing-32"]};
`,KA=M.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${mc.MaxWidth.sm} {
        align-items: flex-start;
    }
`,XA=M(Jc.Small)`
    width: 10rem;

    ${mc.MaxWidth.sm} {
        width: 100%;
    }
`,qA=M.label`
    ${dc["body-md-semibold"]}
    color: ${cc["text-subtler"]};
    margin-top: ${gc["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${mc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,GA=M(gd)`
    margin-bottom: ${gc["spacing-32"]};
`,ZA=({styleType:n="bordered",fileItems:r,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":g,accept:p,capture:f,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:k,onSort:D})=>{const T=o(null),[O,E]=a(),_=()=>!(!l||!r)&&r.length>=l;return e(Qm.Provider,{value:{activeId:O,setActiveId:E},children:t(Ev,{ref:T,onChange:e=>{!b&&C&&C(e)},id:h?`${h}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===n,className:d,"data-testid":g,name:u,multiple:m,disabled:b||_()||$,children:[!(!i&&!s)&&t(NA,{children:[i?e("string"==typeof i?HA:WA,{children:i}):null,s?e("string"==typeof s?VA:YA,{children:s}):null]}),!!c&&e(UA,{type:"warning",children:c}),e(LA,{fileItems:r,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{k&&k(e)},onSort:e=>{D&&D(e)}}),w&&e(GA,{type:"error",children:w}),!$&&t(KA,{children:[e(XA,{type:"button",styleType:"secondary",disabled:!!O||b||_(),onClick:e=>{b||(e.preventDefault(),T.current&&T.current.openFileDialog())},children:"Upload files"}),e(qA,{children:"or drop them here"})]})]})})},QA=i.createContext({mode:"default",rootNode:{current:null}});var JA=Uo((function(e){return null==e}));const eB=M.div`
    background-color: ${e=>e.$collapsible?cc["bg-strong"]:cc.bg};
    ${mc.MaxWidth.lg} {
        background-color: ${cc["bg-strong"]};
    }
`,tB=M.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${cc.border};

    ${mc.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${gc["spacing-16"]};
    }
`,nB=M.div`
    display: flex;
    align-items: center;

    background-color: ${cc.bg};

    ${mc.MaxWidth.lg} {
        background-color: transparent;
    }
`,rB=M(Sc)`
    margin: 0 0 0 auto;

    color: ${cc.icon};
    &:hover {
        color: ${cc["icon-hover"]};
    }
`,iB=M(fe)`
    height: ${dc.Spec["body-size-baseline"]};
    width: ${dc.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${uc["duration-350"]} ${uc["ease-standard"]};
`,oB=M.p`
    ${dc["heading-xs-semibold"]}
    color: ${cc.text};

    margin: ${gc["spacing-24"]} 0 ${gc["spacing-24"]}
        ${gc["spacing-20"]};

    ${mc.MaxWidth.lg} {
        ${dc["body-md-semibold"]}
        color: ${cc["text-subtle"]};

        margin: ${gc["spacing-24"]} ${gc["spacing-20"]} 0
            ${gc["spacing-20"]};
    }
`,aB=M(Vo.div)`
    overflow: hidden;
`,sB=M.div`
    padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
`,lB=M(Vo.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,cB=M(Jc.Small)`
    height: fit-content;
    padding: 0;
    margin: ${gc["spacing-16"]} 0 0 0;
`,dB=n=>{var r,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:l,minimisable:c=!1,minimisedHeight:d,showDivider:h=!0,showMobileDivider:g=!0,title:p,addon:m,children:b}=n,v=dt(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:y,rootNode:x}=f(QA),w="mobile"===y,[$,C]=a(M()),[S,k]=a(c),D=!w&&i,T=dn(),O=dn(),E=Do({height:$?T.height:0}),_=S?null!=d?d:Math.min(.5*(null!==(r=O.height)&&void 0!==r?r:0),216):O.height;u((()=>{C(M())}),[i,s]);function M(){return!!w||(JA(s)?!i||o:s)}return t(eB,{$collapsible:D,children:[e(tB,{$showDivider:h,$showMobileDivider:g}),(p||D)&&t(nB,{children:[p&&t(oB,{children:[p," ",m&&("popover"===(null==m?void 0:m.type)?e(vw,{addon:m,rootNode:w?x:void 0}):null)]}),D&&e(rB,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;JA(s)&&C(e),l&&l(e)},"aria-label":$?"Collapse":"Expand",children:e(iB,{$expanded:$})})]}),e(aB,{"data-testid":"expandable-container","data-expanded":$,style:E,children:e("div",{ref:T.ref,children:t(sB,Object.assign({},v,{children:[e(lB,{"data-testid":"minimisable-container",$height:_,$minimisable:c,children:e("div",{ref:O.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof b?b(y,{minimised:S}):b})})}),c&&t(cB,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)},children:["View ",S?"more":"less"]})]}))})})]})};dB.displayName="Filter.Item";const uB=M(dB)`
    padding: 0 0 ${gc["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${gc["spacing-8"]} ${gc["spacing-8"]} 0;

        ${mc.MaxWidth.lg} {
            padding: ${gc["spacing-16"]} ${gc["spacing-20"]}
                ${gc["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${gc["spacing-8"]} ${gc["spacing-20"]} 0;
    }
`,hB=M.div`
    display: flex;
    flex-direction: column;

    ${mc.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${gc["spacing-16"]};
    }
`,gB=M.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${gc["spacing-8"]} ${gc["spacing-12"]};

    cursor: pointer;
    ${dc["body-md-regular"]}
    color: ${cc.text};
    ${e=>e.$selected&&F`
            color: ${cc["text-selected"]};
        `}

    ${mc.MaxWidth.lg} {
        padding: ${gc["spacing-8"]};
    }
`,pB=M(Rh)`
    flex-shrink: 0;
    margin-right: ${gc["spacing-8"]};
`,fB=M(_I)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,mB=M(Jc.Small)`
    height: fit-content;
    padding: 0;
    margin: ${gc["spacing-16"]} 0 ${gc["spacing-8"]}
        ${gc["spacing-12"]};

    ${mc.MaxWidth.lg} {
        margin: 0 0 ${gc["spacing-16"]} 0;
    }
`,bB=r=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=r,g=dt(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=f(QA),[b,v]=a(i||[]),[y,x]=a(),[w,$]=a(s.length),C=o(null),S=o(null),k=e=>()=>{const t=[...b],n=b.findIndex((t=>O(t)===O(e)));n>=0?t.splice(n,1):t.push(e),v(t),null==l||l(t)},D=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},T=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},O=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},E=p((()=>{if(!C.current)return void x(void 0);const e=Array.from(C.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}$(t),x(n>2?r-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():E()}),[s]),dn({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:C,onResize:E});return e(uB,Object.assign({minimisable:s.length>5,minimisedHeight:y},g,{children:(r,{minimised:i})=>t(n,{children:[s.length<3?null:e(mB,{styleType:"link",type:"button",onClick:D,children:b.length?"Clear all":"Select all"}),e(hB,{role:"group","aria-label":g.title,ref:C,children:s.map(((n,o)=>"default"===r?((n,r,i)=>{const o=T(n),a=O(n),s=!!b.find((e=>O(e)===a));return t(gB,{$visible:!i||r<5,$selected:s,ref:4===r?S:void 0,children:[e(pB,{displaySize:"small",checked:s,onChange:k(n)}),o]},a)})(n,o,i):((t,n,r)=>{const i=T(t),o=O(t),a=!!b.find((e=>O(e)===o));return e(fB,{type:"checkbox",checked:a,$visible:!r||!!y&&n<=w,onChange:k(t),useContentWidth:h,children:i},o)})(n,o,i)))})]})}))};bB.displayName="Filter.Checkbox";const vB=M.div`
    background-color: ${cc.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,yB=M.div`
    background-color: ${cc.bg};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-radius: ${pc.md};
    overflow: hidden;
    width: 100%;
`,xB=M.div`
    background-color: ${cc["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,wB=M.div`
    background-color: ${cc.bg};
    height: 100%;
    width: 100%;
`,$B=M.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,CB=M.div`
    display: flex;
    align-items: center;

    background-color: ${cc.bg};

    ${mc.MaxWidth.lg} {
        border-bottom: ${hc["width-010"]} ${hc.solid}
            ${cc.border};
    }
`,SB=M(Ec.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${gc["spacing-24"]} 0 ${gc["spacing-24"]}
        ${gc["spacing-20"]};

    ${mc.MaxWidth.lg} {
        text-align: center;
        margin: ${gc["spacing-24"]} 0;
    }
`,kB=M(Sc)`
    padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
    margin-right: auto;
    color: ${cc.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${cc["icon-hover"]};
    }
`,DB=M(Jc.Small)`
    background-color: transparent;
    padding-right: ${gc["spacing-20"]};
    padding-left: ${gc["spacing-20"]};
    height: 100%;

    ${mc.MaxWidth.lg} {
        padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
    }
`,TB=M(_u.Default)`
    width: 100%;
`,OB=M.div`
    padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
    background-color: ${cc.bg};
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};
`,EB=M(Jc.Default)`
    width: 100%;
`,_B=({onDismiss:n,onDone:r,children:i})=>t(vB,{children:[e(kB,{onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(be,{})}),e($B,{children:i}),e(OB,{children:e(EB,{onClick:r,type:"button",children:"Done"})})]});_B.displayName="Filter.Page";const MB=r=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:g,children:p}=r,f=dt(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=A(),w=fc["lg-max"]({theme:x}),$=Od.useMediaQuery({maxWidth:w});u((()=>{$||S()}),[$]);const C=()=>{b(!0)},S=()=>{b(!1),h&&h()},k=()=>{b(!1),g&&g()},D=()=>{d&&d()},T=e=>"function"==typeof p?p(e):p,O=n=>t(CB,{children:["mobile"===n&&e(kB,{onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(J,{})}),e(SB,{weight:"semibold",children:l}),e(DB,{styleType:"link",type:"button",onClick:D,disabled:c,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(QA.Provider,$?{value:{mode:"mobile",rootNode:v},children:t(n,{children:[e(TB,{"data-testid":"filter-show-button",styleType:s,onClick:C,type:"button",icon:e(ee,{}),children:i}),e(Df,{show:m,disableTransition:!0,children:e(wB,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(xB,{ref:v,children:[O("mobile"),e($B,{children:T("mobile")}),e(OB,{children:e(EB,{onClick:k,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:y},children:t(yB,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y,children:[O("default"),T("default")]})})}))};MB.displayName="Filter";const FB=Object.assign(MB,{Item:dB,Page:_B,Checkbox:bB}),IB=M.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${mc.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,AB=M(Ec.BodyMD)`
    margin-bottom: ${gc["spacing-16"]};
`,BB=M.div`
    display: flex;
    align-items: flex-start;
`,jB=M.a`
    &:not(:last-child) {
        margin-right: ${gc["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${mc.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${gc["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,zB=()=>t(IB,{"data-testid":"download-app-section",children:[e(AB,{weight:"semibold",children:"Download the app"}),t(BB,{children:[e(jB,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(jB,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),RB={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},PB={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},LB={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var NB;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${Vd(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return PB;case"mylegacy":return LB;default:return RB}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(NB||(NB={}));const HB=M.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?F`
                padding: 0 ${fc["xxl-margin"]}px;
            `:F`
                padding: 0 ${fc["xxl-margin"]}px;
                max-width: 1440px;

                ${mc.MaxWidth.xl} {
                    padding: 0 ${fc["xl-margin"]}px;
                }

                ${mc.MaxWidth.lg} {
                    padding: 0 ${fc["lg-margin"]}px;
                }

                ${mc.MaxWidth.md} {
                    padding: 0 ${fc["md-margin"]}px;
                }

                ${mc.MaxWidth.sm} {
                    padding: 0 ${fc["sm-margin"]}px;
                }

                ${mc.MaxWidth.xs} {
                    padding: 0 ${fc["xs-margin"]}px;
                }

                ${mc.MaxWidth.xxs} {
                    padding: 0 ${fc["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return F`
                    column-gap: ${fc["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${fc["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${mc.MaxWidth.xl} {
                        column-gap: ${fc["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${fc["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mc.MaxWidth.lg} {
                        column-gap: ${fc["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${fc["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mc.MaxWidth.md} {
                        column-gap: ${fc["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${fc["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mc.MaxWidth.sm} {
                        column-gap: ${fc["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${fc["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mc.MaxWidth.xs} {
                        column-gap: ${fc["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${fc["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mc.MaxWidth.xxs} {
                        column-gap: ${fc["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${fc["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return F`
                    display: flex;
                    flex-direction: column;
                `;default:return F`
                    display: flex;
                `}}}
`,WB=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=dt(t,["children","data-testid","type","stretch"]);return e(HB,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),VB=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=dt(t,["children","data-testid","stretch"]);return e(YB,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),YB=M.section`
    display: block;
    position: relative;
`,UB=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=dt(t,["children","data-testid","className","type","stretch"]);return e(VB,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(WB,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:r})}))})),KB={Section:VB,Container:WB,Content:UB,ColDiv:hf},XB=M.footer`
    background: ${cc["bg-strong"]};
`,qB=M(Ec.LinkSM)`
    color: ${cc.text};
`,GB=M($f)`
    width: 100%;
`,ZB=M(KB.Content)`
    padding: ${gc["spacing-64"]} 0;

    ${mc.MaxWidth.lg} {
        padding: ${gc["spacing-32"]} 0;
    }
`,QB=M.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${mc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${gc["spacing-32"]};
    }

    ${mc.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${gc["spacing-32"]};
    }
`,JB=M.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${gc["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${mc.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${mc.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,ej=M.div`
    grid-column: 13 / span 6;

    ${mc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${gc["spacing-32"]};
    }

    ${mc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,tj=M(KB.Content)`
    padding: ${gc["spacing-20"]} 0;

    ${mc.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${gc["spacing-16"]} 0;
    }
`,nj=M.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }

    ${mc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${mc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,rj=M(nj)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${mc.MaxWidth.lg} {
        margin-top: ${gc["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${mc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,ij=M(Ec.LinkXS)`
    color: ${cc.text};
    &:not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }

    svg {
        color: ${cc.icon};
    }

    &:hover {
        color: ${cc["text-subtler"]};
        svg {
            color: ${cc["icon-subtle"]};
        }
    }

    ${mc.MaxWidth.lg} {
        margin-bottom: ${gc["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${mc.MaxWidth.lg} {
        margin-bottom: ${gc["spacing-8"]};
    }
`,oj=r=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=r,g=dt(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,f=A(),m=t=>t.map(((t,n)=>{const r=dt(t,["data-options"]);return e("li",{children:e(qB,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},n)}));return t(XB,Object.assign({},g,{children:[(()=>{let r=null;return i||((o||l)&&(r=t(n,{children:[e(QB,{"data-testid":"logo-section",children:e("img",{src:c||NB.getFooterLogo(null==f?void 0:f.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==o?void 0:o[0])&&e(JB,{"data-testid":"link-col-1",children:m(o[0])},"link-col-1"),(null==o?void 0:o[1])&&e(JB,{"data-testid":"link-col-2",children:m(o[1])},"link-col-2"),l&&e(ej,{children:e(zB,{})})]})),r?t(n,{children:[e(ZB,{type:"grid",stretch:p,children:r}),e(GB,{})]}):null)})(),t(tj,{type:"grid",stretch:p,children:[e(nj,{children:(()=>{const t=NB.getDisclaimerLinks(null==f?void 0:f.resourceScheme,s);return Object.keys(t).map((n=>e(ij,Object.assign({},t[n]),n)))})()},"disclaimer"),e(rj,{children:e(Ec.BodyXS,{"data-testid":"copyright-text",children:d||t(n,{children:["©"," ",NB.getCopyrightInfo(a,null==f?void 0:f.resourceScheme)]})})},"copyright")]})]}))};var aj=function(e,t){return Number(e.toFixed(t))},sj=function(e,t,n){n&&"function"==typeof n&&n(e,t)},lj={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},cj=function(e){"number"==typeof e&&cancelAnimationFrame(e)},dj=function(e){e.mounted&&(cj(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function uj(e,t,n,r){if(e.mounted){var i=(new Date).getTime();dj(e),e.animation=function(){if(!e.mounted)return cj(e.animation);var o=(new Date).getTime()-i,a=o/n,s=(0,lj[t])(a);o>=n?(r(1),e.animation=null):e.animation&&(r(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function hj(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===n?o(t.scale,t.positionX,t.positionY):uj(e,r,n,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var gj=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var o=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*n,a=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:o,newDiffWidth:r-o,newContentHeight:a,newDiffHeight:i-a}}(n,r,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,n,r,i,o,a){var s=e>t?n*(a?1:.5):0,l=r>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},pj=function(e,t,n,r){return aj(r?e<t?t:e>n?n:e:e,2)},fj=function(e,t){var n=gj(e,t);return e.bounds=n,n};function mj(e,t,n,r,i,o,a){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:pj(e,s-u,c+u,r),y:pj(t,l-h,d+h,r)}}function bj(e,t,n,r,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):mj(l-t*d,c-n*d,i,o,0,0,null)}function vj(e,t,n,r,i){var o=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=o?o:e}var yj=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(r&&o&&a)&&!Jj(o,n)},xj=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function wj(e,t,n,r,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||n!==u)){var h=mj(t,n,s,o,r,i,a),g=h.x,p=h.y;e.setTransformState(c,g,p)}}var $j=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,o=n.disablePadding;return t>0&&r>=i&&!o?t:0},Cj=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&r&&!t)},Sj=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t)&&!(!n||!r)};function kj(e,t,n,r,i,o,a,s,l,c){if(i){var d;if(t>a&&n>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&n<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return r?t:pj(e,o,a,i)}function Dj(e,t){if(Cj(e)){var n=e.lastMousePosition,r=e.velocityTime,i=e.setup,o=e.wrapperComponent,a=i.velocityAnimation.equalToMove,s=Date.now();if(n&&r&&o){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,a),c=t.x-n.x,d=t.y-n.y,u=c/l,h=d/l,g=s-r,p=c*c+d*d,f=Math.sqrt(p)/g;e.velocity={velocityX:u,velocityY:h,total:f}}e.lastMousePosition=t,e.velocityTime=s}}function Tj(e,t){var n=e.transformState.scale;dj(e),fj(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,o=r.positionY;if(e.isPanning=!0,1===n.length){var a=n[0].clientX,s=n[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-r,y:a-i}}(e,t)}function Oj(e){var t=e.transformState.scale,n=e.setup,r=n.minScale,i=n.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<r||!a&&!s)){var d=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,g=d.maxPositionY,p=d.minPositionY,f=n>u||n<h,m=r>g||r<p,b=bj(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>g?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:f?v:n,positionY:m?y:r}}}(e);d&&hj(e,d,l,c)}}function Ej(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:a?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=$j(e,o),u=$j(e,a);Dj(e,{x:l,y:c}),wj(e,l,c,d,u)}}function _j(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==r?void 0:r.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent;if(Sj(e)&&t&&n&&i){var o=t.velocityX,a=t.velocityY,s=t.total,l=n.maxPositionX,c=n.minPositionX,d=n.maxPositionY,u=n.minPositionY,h=r.limitToBounds,g=r.alignmentAnimation,p=r.zoomAnimation,f=r.panning,m=f.lockAxisY,b=f.lockAxisX,v=p.animationType,y=g.sizeX,x=g.sizeY,w=g.velocityAlignmentTime,$=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,o=n.sensitivity;return r?i*t*o:i}(e,s),C=Math.max($,w),S=$j(e,y),k=$j(e,x),D=S*i.offsetWidth/100,T=k*i.offsetHeight/100,O=l+D,E=c-D,_=d+T,M=u-T,F=e.transformState,I=(new Date).getTime();uj(e,v,C,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,s=n.positionY,p=((new Date).getTime()-I)/w,f=1-(0,lj[g.animationType])(Math.min(1,p)),v=1-t,y=i+o*v,x=s+a*v,$=kj(y,F.positionX,i,b,h,c,l,E,O,f),C=kj(x,F.positionY,s,m,h,u,d,M,_,f);i===y&&s===x||e.setTransformState(r,$,C)}))}}(e):Oj(e)}}function Mj(e,t,n,r){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=vj(aj(t,2),o,a,0,!1),c=bj(e,n,r,l,fj(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function Fj(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||r>=a;if((r>=1||s)&&Oj(e),!h&&i&&e.mounted){var g=Mj(e,a,t||i.offsetWidth/2,n||i.offsetHeight/2);g&&hj(e,g,d,u)}}var Ij=function(){return Ij=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ij.apply(this,arguments)};function Aj(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var Bj=1,jj=0,zj=0,Rj={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Pj=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:Bj,scale:null!==(n=e.initialScale)&&void 0!==n?n:Bj,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:jj,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:zj}},Lj=function(e){var t=Ij({},Rj);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==Rj[n]&&r){var i=Object.prototype.toString.call(Rj[n]),o="[object Object]"===i,a="[object Array]"===i;t[n]=o?Ij(Ij({},Rj[n]),e[n]):a?Aj(Aj([],Rj[n],!0),e[n],!0):e[n]}})),t},Nj=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return vj(aj(u,3),s,a,d,!1)};function Hj(e,t,n,r,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=Mj(e,Nj(e,t,n),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");hj(e,h,r,i)}function Wj(e,t,n,r){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=Pj(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=gj(e,s.scale),g=mj(s.positionX,s.positionY,h,a,0,0,o),p={scale:s.scale,positionX:g.x,positionY:g.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),hj(e,p,t,n))}}var Vj=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),Hj(e,1,t,n,r)}},Yj=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),Hj(e,-1,t,n,r)}},Uj=function(e){return function(t,n,r,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};hj(e,h,i,o)}}},Kj=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),Wj(e,t,n)}},Xj=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=tz(t||i.scale,o,a);hj(e,s,n,r)}}},qj=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),dj(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!r||!i)return o;var d=r.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,n,r){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=n.getBoundingClientRect(),s=o.x*r.scale,l=o.y*r.scale;return{x:(i.x-a.x+s)/r.scale,y:(i.y-a.y+l)/r.scale}}(t,r,i,o),g=h.x,p=h.y,f=u.width/o.scale,m=u.height/o.scale,b=r.offsetWidth/f,v=r.offsetHeight/m,y=vj(n||Math.min(b,v),l,c,0,!1),x=(d.width-f*y)/2,w=(d.height-m*y)/2,$=mj((d.left-g)*y+x,(d.top-p)*y+w,gj(e,y),s,0,0,r);return{positionX:$.x,positionY:$.y,scale:y}}(e,a,n);hj(e,s,r,i)}}},Gj=function(e){return{instance:e,zoomIn:Vj(e),zoomOut:Yj(e),setTransform:Uj(e),resetTransform:Kj(e),centerView:Xj(e),zoomToElement:qj(e)}},Zj=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,Gj(e)),t};function Qj(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var Jj=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},ez=function(e){e&&clearTimeout(e)},tz=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function nz(e,t,n){var r=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-r.left)/n,o=(e.clientY-r.top)/n;else{var a=e.touches[0];i=(a.clientX-r.left)/n,o=(a.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var rz=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},iz=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,g=a.smooth,p=d.size,f=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,g=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*n;if(i)return p;var f=!r&&!g;return vj(aj(p,3),c,l,h,f&&!u)}(e,v,g?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=fj(e,y),w=nz(t,o,s),$=l&&(f||0===p||c||h),C=bj(e,w.x,w.y,y,x,$),S=C.x,k=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),sj(Zj(e),t,r),sj(Zj(e),t,i)}},oz=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;ez(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(Fj(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!n&&(r<o||r>a||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(ez(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,sj(Zj(e),t,r),sj(Zj(e),t,i))}),160))},az=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==r&&n){var u=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,o=aj(i[0].clientX-r.left,5),a=aj(i[0].clientY-r.top,5);return{x:(o+aj(i[1].clientX-r.left,5))/2/t,y:(a+aj(i[1].clientY-r.top,5))/2/t}}(t,i,n);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=rz(t),g=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:vj(aj(t/r*n,2),a,o,c,!d&&!l)}(e,h);if(g!==i){var p=fj(e,g),f=a&&(c||0===d||s),m=bj(e,u.x,u.y,g,p,f),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(g,b,v)}}}},sz=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;ez(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,sj(Zj(e),t,n)}),r)};function lz(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,h=d.mode,g=d.step,p=d.animationTime,f=d.animationType;if(!u&&!r){if("reset"===h)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;sj(Zj(e),t,r),Wj(e,a,s,(function(){return sj(Zj(e),t,i)})),sz(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=Nj(e,m,g);if(a!==b){sj(Zj(e),t,l);var v=nz(t,o,a),y=Mj(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");sj(Zj(e),t,c),hj(e,y,p,f),sz(e,t)}}}var cz=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,fj(t,t.transformState.scale),t.setup=Lj(e)},this.initializeWindowEvents=function(){var e,n,r=Qj(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==o||o.addEventListener("mousedown",t.onPanningStart,r),null==o||o.addEventListener("mousemove",t.onPanning,r),null==o||o.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==o||o.addEventListener("keyup",t.setKeyUnPressed,r),null==o||o.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=Qj(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,r),null==o||o.removeEventListener("mousemove",t.onPanning,r),null==o||o.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,r),null==o||o.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),dj(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=Qj();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(Zj(t))})),n&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n,r=e.offsetWidth,i=e.offsetHeight;(r>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(Zj(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,o=n.touchPadDisabled,a=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||o&&t.ctrlKey||Jj(c,a))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(dj(e),sj(Zj(e),t,r),sj(Zj(e),t,i))}(t,e),iz(t,e),oz(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,o=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,g=t.setup.alignmentAnimation,p=g.sizeX,f=g.sizeY,m=$j(t,p),b=$j(t,f);u===s&&h===l||wj(t,u,h,m,b)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||yj(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),dj(t),Tj(t,e),sj(Zj(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||xj(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),Ej(t,e.clientX,e.clientY),sj(Zj(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(_j(t),sj(Zj(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,o=r.onZoomStart;if(!n){var a=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,o=e.isInitialized,a=t.target;return!(!o||r||!a||Jj(a,i))}(t,e);a&&(function(e,t){var n=rz(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,dj(e)}(t,e),dj(t),sj(Zj(t),e,i),sj(Zj(t),e,o))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,o=r.onZoom;if(!n){var a=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);a&&(e.preventDefault(),e.stopPropagation(),az(t,e),sj(Zj(t),e,i),sj(Zj(t),e,o))}},this.onPinchStop=function(e){var n,r,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,Fj(n,null==r?void 0:r.x,null==r?void 0:r.y),sj(Zj(t),e,o),sj(Zj(t),e,a))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&yj(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,dj(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(dj(t),Tj(t,e),sj(Zj(t),e,r)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!xj(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];Ej(t,i.clientX,i.clientY),sj(Zj(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,o=r.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||a||Jj(l,s))}(t,e);n&&lz(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var o=Zj(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),sj(o,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=tz(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,o=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=o}},this.getContext=function(){return Zj(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,fj(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0;var r=Zj(t);sj(r,void 0,t.props.onInit)},this.props=e,this.setup=Lj(this.props),this.transformState=Pj(this.props)},dz=i.createContext(null),uz=i.forwardRef((function(e,t){var n=o(new cz(e)).current,r=function(e,t){return"function"==typeof e?e(t):e}(e.children,Gj(n));return b(t,(function(){return Gj(n)}),[n]),u((function(){n.update(e)}),[n,e]),i.createElement(dz.Provider,{value:n},r)}));i.forwardRef((function(e,t){var n,r=o(null),a=f(dz);return u((function(){return a.onChange((function(e){if(r.current){r.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",Ij({},e,{ref:(n=[r,t],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var hz="transform-component-module_wrapper__SPB86",gz="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var pz=function(e){var t=e.children,n=e.wrapperClass,r=void 0===n?"":n,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,g=e.contentProps,p=void 0===g?{}:g,m=f(dz),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",Ij({},h,{ref:y,className:"react-transform-wrapper ".concat(hz," ").concat(r),style:l}),i.createElement("div",Ij({},p,{ref:x,className:"react-transform-component ".concat(gz," ").concat(s),style:c}),t))};const fz=M.div`
    background-color: ${cc["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${cc["icon-subtle"]};
    }
`,mz=t=>e(fz,Object.assign({},t,{children:e(te,{})})),bz=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,vz=M.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,yz=M(mz)`
    width: 100%;
    height: 100%;
`,xz=({src:t,className:n,alt:r,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,g]=a();u((()=>{d(!0),g(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),g(e)}}),[t]);return e(bz,{className:n,children:h?null!=o?o:e(yz,{}):c?e(yd,{}):e(vz,{src:t,alt:r,$fit:i})})},wz=M(Sc)`
    padding: 0;
    border-radius: 100%;
    background: ${cc.bg};
    color: ${cc["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,$z=M(wz)`
    position: absolute;
    top: ${gc["spacing-48"]};
    right: ${gc["spacing-48"]};
    z-index: 5;

    ${mc.MaxWidth.sm} {
        top: ${gc["spacing-20"]};
        right: ${gc["spacing-20"]};
    }
`,Cz=M(wz)`
    position: absolute;
    top: ${gc["spacing-48"]};
    right: calc(
        2.5rem + ${gc["spacing-48"]} + ${gc["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${mc.MaxWidth.sm} {
        top: ${gc["spacing-20"]};
        right: calc(
            2.5rem + ${gc["spacing-20"]} + ${gc["spacing-16"]}
        );
    }
`,Sz=M(wz)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&F`
            left: ${gc["spacing-48"]};
            ${mc.MaxWidth.sm} {
                left: ${gc["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&F`
            right: ${gc["spacing-48"]};
            ${mc.MaxWidth.sm} {
                right: ${gc["spacing-20"]};
            }
        `}
`,kz=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,Dz=M.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,Tz=M.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,Oz=M.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,Ez=M.div`
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
`,_z=M(xz)`
    height: 100%;
    width: 100%;
`,Mz=M(mz)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,Fz=M.div`
    display: flex;
    justify-content: center;
    padding: ${gc["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,Iz=M(Ec.BodyXS)`
    display: inline-flex;
    padding: ${gc["spacing-4"]} ${gc["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${pc.full};
    background-color: ${cc.bg};
    text-align: center;
`,Az=M.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${cc["bg-inverse"]};
    padding: ${gc["spacing-24"]} ${gc["spacing-16"]};

    ${mc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]} ${gc["spacing-20"]};
    }
`,Bz=M.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${gc["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,jz=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${mc.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,zz=M.div`
    cursor: pointer;
    background-color: ${cc["bg-inverse"]};
    border-radius: ${pc.md};
    border: ${hc.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${mc.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?F`
                  border-width: ${hc["width-040"]};
                  border-color: ${cc["border-selected"]};

                  ${mc.MaxWidth.sm} {
                      border-width: ${hc["width-020"]};
                  }

                  :hover {
                      border-color: ${cc["border-selected-hover"]};
                  }
              `:F`
                  border-width: ${hc["width-010"]};

                  :hover {
                      border-color: ${cc["border-hover"]};
                  }
              `};
`,Rz=M(xz)`
    height: 100%;
    width: 100%;
`,Pz=(r,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:g=!1,onClose:p}=r,f=dt(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=a(null!=l?l:0),[y,x]=a({}),[w,$]=a(1),[C,S]=a(),[k,D]=a(),T=o(null),O=o([]),E=o([]),_=C&&k?C-k:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:j,goToPrevItem:A,goToNextItem:B}))),gu("keydown",(function(e){"ArrowRight"===e.key?B():"ArrowLeft"===e.key?A():"Escape"===e.key&&p&&p()}),"document"),u((()=>{var e,t;null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const M=e=>{$(e.state.scale)};const F=({src:e,height:t,width:n})=>{x((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},I=()=>{const e=y[s[m].src];if(T.current&&e){const{clientHeight:t,clientWidth:n}=T.current,{width:r,height:i}=e,o=i/r<t/n;return r<n&&i<t?o?n/r:t/i:o?t/(i/(r/n)):n/(r/(i/t))}},A=()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},B=()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},j=e=>{var t,n;null===(n=null===(t=E.current)||void 0===t?void 0:t[m])||void 0===n||n.resetTransform(),v(e)};return t(Hf,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e($z,{"aria-label":"Close image carousel",onClick:p,focusHighlight:!1,children:e(J,{"aria-hidden":!0})}),!g&&e(Cz,{"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===w){const n=I();null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(n),$(null!=n?n:1)}else $(1),null===(r=null===(n=E.current)||void 0===n?void 0:n[m])||void 0===r||r.resetTransform()},focusHighlight:!1,children:e(1===w?ne:re,{"aria-hidden":!0})}),t(kz,{children:[t(Dz,{children:[!d&&t(n,{children:[e(Sz,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A,children:e(ie,{"aria-hidden":!0})}),e(Sz,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:B,children:e(oe,{"aria-hidden":!0})})]}),e(Tz,{ref:T,onTouchStart:e=>{w<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!C||w>1||D(e.touches[0].clientX)},onTouchEnd:()=>{T.current&&(Math.abs(_)>T.current.offsetWidth/3&&(_>0?B():A()),S(void 0),D(void 0))},children:e(Oz,{style:{transform:`translateX(calc(${100*-m}% - ${_}px))`},children:s.map(((t,n)=>{var r;return e(Ez,{"data-testid":"slide-item",children:e(uz,{ref:e=>E.current[n]=e,panning:{disabled:w<=1},initialScale:1,onZoom:M,onZoomStop:M,onWheel:M,children:e(pz,{children:e(_z,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e(Mz,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:F})})})},n)}))})}),!h&&e(Fz,{children:e(Iz,{weight:"semibold",children:`${m+1}/${s.length}`})})]}),!c&&e(Az,{children:e(Bz,{children:s.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e(jz,{children:e(zz,{"data-testid":"thumbnail-item",$active:n===m,onClick:()=>j(n),ref:e=>O.current[n]=e,children:e(Rz,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})})},n)}))})})]})]}))},Lz=g(Pz),Nz=M.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${cc.bg};
    border: ${hc["width-010"]} ${hc.solid} transparent;
    border-radius: ${pc.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${uc["duration-250"]} ${uc["ease-default"]};
    ${dc["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?cc["text-primary"]:cc.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${mc.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${dc["body-md-semibold"]}
    }

    ${e=>e.$error?F`
                background: ${cc.bg};
                border: ${hc["width-010"]} ${hc.solid}
                    ${cc["border-error"]};
            `:e.$selected?F`
                background: ${cc["bg-selected"]};
                border: ${hc["width-010"]} ${hc.solid}
                    ${cc["border-selected"]};

                &:hover {
                    background: ${cc["bg-selected-hover"]};
                    border: ${hc["width-010"]} ${hc.solid}
                        ${cc["border-selected-hover"]};
                }
            `:F`
                &:hover {
                    border: ${hc["width-010"]} ${hc.solid}
                        ${cc["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${hc["width-010"]} ${hc.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${cc["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,Hz=i.forwardRef(((n,r)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=n,c=dt(n,["children","imgSrc","selected","error","type"]);return t(Nz,Object.assign({ref:r,$selected:a,$error:s,type:l},c,{children:[e(Am,{src:o}),i]}))})),Wz=F`
    height: 1.125rem;
    width: 1.125rem;
    color: ${cc["icon-primary"]};
`,Vz=M.div`
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
`,Yz=M(Ec.HeadingSM).attrs({as:"div"})`
    color: ${cc["text-primary"]};
    margin-bottom: 0.5rem;
`,Uz=M(Ec.HeadingXS).attrs({as:"div"})`
    color: ${cc["text-primary"]};
`,Kz=M(me)`
    ${Wz}
`,Xz=M.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
    }

    :hover {
        ${Yz},
        ${Uz},
        ${Kz} {
            color: ${cc["text-hover"]};
        }
    }
`,qz=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,Gz=M(Ec.BodyMD)`
    margin-top: 0.25rem;
`,Zz=M(Vo.div)`
    overflow: hidden;
`,Qz=M.div`
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};
`,Jz=M(Ec.BodyMD).attrs({as:"span"})`
    color: ${cc["text-primary"]};
    margin-right: 1rem;
`,eR=M(tt)`
    ${Wz}
`,tR=M(et)`
    ${Wz}
`,nR=M.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${hc["width-010"]} ${hc.solid} ${cc.border};

    :hover {
        ${Jz},
        ${eR},
        ${tR} {
            color: ${cc["text-hover"]};
        }
    }
`,rR=r=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=r,c=dt(r,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,g=o?i.slice(o):[],p=dn(),f=p.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(r,i,o,a)=>t(n,{children:[t(qz,{children:[e("small"===s?Uz:Yz,{"data-testid":`link-title-${r}`,weight:"semibold",children:i}),o&&e(Gz,{"data-testid":`link-description-${r}`,children:o}),a]}),e(Kz,{})]}),y=Do({height:d?p.height:0});return t(Vz,Object.assign({},c,{children:[h.map(((t,n)=>{const{title:r,description:i,secondaryDescription:o,onClick:a}=t,s=dt(t,["title","description","secondaryDescription","onClick"]);return e(Xz,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,o)}),`list-item-shown-${n}`)})),g.length>0&&e(Zz,{style:y,"data-testid":"minimised-content",children:e(Qz,{ref:f,children:g.map(((t,n)=>{const{title:r,description:i,onClick:o,secondaryDescription:a}=t,s=dt(t,["title","description","onClick","secondaryDescription"]);return e(Xz,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,a)}),`list-item-minimised-${n}`)}))})}),g.length>0&&t(nR,{type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d,children:[e(Jz,{weight:"semibold","data-testid":"toggle-button-label",children:d?"View less":"View more"}),e(d?tR:eR,{})]})]}))},iR=M.div`
    ${e=>od({textSize:e.$textSize})}
    ${e=>e.color&&F`
            color: ${e.color};
        `}
`,oR=g(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:o}=t,a=dt(t,["baseTextColor","baseTextSize","inline"]);return e(iR,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:r},a))})),aR=M.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return F`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${ff.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${ff.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,sR=M.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:i,startSm:o,colsSm:a}=e;return F`
            grid-column: ${t||r||"auto"} / span
                ${n||i||1};

            ${ff.MaxWidth.tablet} {
                grid-column: ${r||o||"auto"} / span
                    ${i||a||1};
            }

            ${ff.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,lR={Grid:i.forwardRef(((t,n)=>{const{children:r}=t,i=dt(t,["children"]);return e(aR,Object.assign({ref:n},i,{children:r}))})),Tile:i.forwardRef(((t,n)=>{const{children:r}=t,i=dt(t,["children"]);return e(sR,Object.assign({ref:n},i,{children:r}))}))},cR=M.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${mc.MaxWidth.sm} {
        padding: 0;
    }
`,dR=()=>{u((()=>{t()||n()}),[]);const t=()=>document.getElementById(uR),n=()=>{if(!document.getElementById(uR)){const e=document.createElement("script");e.id=uR,e.type="module",e.src=hR,document.head.appendChild(e)}};return e(cR,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},uR="lifesg-ds-masthead-script",hR="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",gR={notCompress:6,compress:4},pR=M.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,fR=M.nav`
    height: ${e=>e.$compress?gR.compress:gR.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${uc["duration-350"]} ${uc["ease-standard"]};

    ${mc.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,mR=M.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${mc.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,bR=M(Sc)`
    display: none;

    ${mc.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,vR=M(nt)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${cc.icon};
`,yR=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${mc.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${mc.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,xR=M.div`
    display: flex;
    background-color: ${cc.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${mc.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${mc.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,wR=M.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${uc["duration-150"]} ${uc["ease-default"]};
        object-fit: contain;
    }
`,$R=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:o})=>e(wR,{role:"link",onClick:e=>{n&&n(e,o)},tabIndex:0,"data-id":r,"data-testid":i,$type:o,children:e(Am,{src:t.logoSrc,alt:t.brandName})}),CR=M.div`
    display: none;

    ${mc.MaxWidth.lg} {
        display: flex;
    }
`,SR=M.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${gc["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?F`
            right: 0;
            transition: all 300ms ${uc["ease-entrance"]};
            transition-delay: 200ms;
        `:F`
        right: -100%;
        transition: all 300ms ${uc["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return F`
            height: calc(${t} * 100);
        `}}

	${mc.MaxWidth.lg} {
        width: 75%;
    }

    ${mc.MaxWidth.sm} {
        width: 100%;
    }
`,kR=M.div`
    display: flex;
    flex-direction: column;
`,DR=M.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${gc["spacing-40"]} ${gc["spacing-20"]}
        ${gc["spacing-32"]};
`,TR=M(je)`
    height: 1.5rem;
    width: 1.5rem;
`,OR=M(Sc)`
    position: absolute;
    right: -${gc["spacing-4"]};
    color: ${cc.icon};

    :active,
    :focus {
        color: ${cc["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,ER=i.forwardRef(((r,i)=>{const{show:o,resources:s={},children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=r,[g,p]=a(0),{primary:f,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return e(CR,{ref:i,"data-testid":"drawer",children:e(SR,{$show:o,$viewHeight:g,children:t(kR,{children:[t(DR,{children:[e(yR,{"data-id":"drawer-brand-container",children:!c&&t(n,{children:[f&&e($R,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(n,{children:[e(xR,{}),e($R,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e(OR,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:e(TR,{})})]}),l]})})})})),_R=M.ul`
    display: flex;
    list-style: none;
    margin-left: ${gc["spacing-64"]};
    flex-shrink: 0;

    ${mc.MaxWidth.lg} {
        display: none;
    }
`,MR=M.ul`
    display: none;

    ${mc.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${gc["spacing-64"]};
        flex-shrink: 0;
    }
`,FR=M.ul`
    display: none;
    list-style: none;

    ${mc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${gc["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${mc.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,IR=M.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${gc["spacing-16"]};
    }

    ${mc.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${gc["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?gc["spacing-16"]:"0"};
        }
    }

    ${mc.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return F`
                    padding: 0 ${gc["spacing-16"]};
                `}}
    }
`,AR=M(Jc.Small)`
    ${mc.MaxWidth.lg} {
        width: 100%;
    }
`,BR=M.div`
    display: none;

    ${mc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${gc["spacing-40"]};
    }
`,jR=M(Ec.BodyMD)`
    margin-bottom: ${gc["spacing-8"]};
`,zR=M.div`
    display: flex;
`,RR=M.a`
    :not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${mc.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${mc.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,PR=({actionButtons:r,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(n,r)=>{const i=n?(e=>{const t=_k(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(r):r;return i.map(((r,i)=>{let o;switch(r.type){case"download":o=n?(l=r.args,t(BR,{children:[e(jR,{weight:"semibold",children:l&&l.children||"Download the app"}),t(zR,{children:[e(RR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(RR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(AR,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const t=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=e(AR,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":t}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(IR,{$mobile:n,children:o},`action-button-${i+1}`)}))};if(r){const o=(null==r?void 0:r.mobile)||r.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(n,{children:s.length>0&&e(FR,{children:l(i,s)})}):t(n,{children:[a.length>0&&e(MR,{children:l(!1,a)}),r.desktop.length>0&&e(_R,{children:l(i,r.desktop)})]})}return e(n,{})};var LR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(LR||(LR={}));const NR=M.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${gc["spacing-8"]} 0;

    background: ${cc.bg};
    border-radius: ${pc.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${cc.Primitive["neutral-50"]} r g b / 25%);
`,HR=M.ul`
    display: none;
    list-style: none;

    ${mc.MaxWidth.lg} {
        border-left: ${hc["width-040"]} solid ${cc["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,WR=M(Ec.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${cc.text};

    margin: 0 ${gc["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${hc.solid} transparent;
    border-width: ${gc["spacing-12"]} ${gc["spacing-8"]};

    border-radius: ${pc.md};

    ${kc(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${cc["bg-hover"]};
        color: ${cc.text};
    }

    ${mc.MaxWidth.lg} {
        ${dc["body-md-regular"]}
    }
`,VR=M.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,YR=({items:t,mobile:r=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(n=!1)=>t.map(((t,r)=>{const{children:i,options:a}=t,s=dt(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e(VR,{children:e(WR,Object.assign({"data-testid":l},s,{onClick:o(t)},a,{children:i}))},r)}));if(t&&t.length>0){return e(r?HR:NR,{children:a(r)})}return e(n,{})},UR=M.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${mc.MaxWidth.lg} {
        display: none;
    }
`,KR=M.ul`
    display: none;
    list-style: none;

    ${mc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,XR=M.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${mc.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,qR=M(Ec.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${cc.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?cc["text-selected-hover"]:cc["text-hover"]};
    }

    ${mc.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,GR=M.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,ZR=M.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${cc["border-selected"]};

    :hover {
        ${e=>e.$selected&&cc["border-selected-hover"]};
    }

    ${mc.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,QR=M.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,JR=M(Sc)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,eP=M(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${cc.icon};
    :hover {
        ${e=>e.$selected?cc["icon-selected-hover"]:cc["icon-hover"]};
    }
`,tP=({items:r,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[g,p]=a(!1),f=o(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{p(!1)},b=(e,t)=>n=>{n.stopPropagation(),h(t),p(!0),c(n,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),p(!1)},y=()=>r.map(((n,r)=>{if("component"===n.itemType){const t=n&&n.children||null;return e("li",{children:t},r)}{const o=(e=>{if(e.id===i)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(n),{children:a,options:c}=n,u=dt(n,["children","options"]),h=o?s?"bold":"semibold":"regular",p=s?`link__mobile-${r+1}`:`link__${r+1}`,f=d>=0&&d===r&&g;return t(XR,{$hiddenBranding:l,children:[t(qR,Object.assign({"data-testid":p,weight:h,$selected:o},u,{onClick:b(n,r)},c,{children:[e(GR,{children:a}),o&&e(ZR,{"data-testid":`${p}-indicator`,$selected:o}),s&&n.subMenu&&e(QR,{children:e(JR,{"data-testid":`${p}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e(eP,{$selected:o})})})]})),f&&n.subMenu&&e(YR,{items:n.subMenu,mobile:s,onItemClick:v})]},r)}}));return r&&r.length>0?s?e(KR,{ref:f,children:y()}):e(UR,{ref:f,$alignLeft:l,children:y()}):e(n,{})},nP={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},rP={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},iP={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},oP={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},aP=g(((r,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:g=!0,resources:p,hideNavElements:f=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:C=!0,layout:S="default"}=r,k=dt(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,T]=a(!1),[O,E]=a(!1),_="stretch"===S,M=o(null),F=A(),I=(e=>{switch(e){case"bookingsg":return rP;case"mylegacy":return oP;case"ccube":return iP;default:return nP}})(null==F?void 0:F.resourceScheme),B=fc["lg-max"]({theme:F}),j=(null==p?void 0:p.primary)||I.primary,z=null==p?void 0:p.secondary;b(i,(()=>Object.assign(M.current,{dismissDrawer:()=>{R()}})),[D]),u((()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[]);const R=()=>{T(!1),setTimeout((()=>{E(!1)}),550)},P=e=>D&&-1===v.indexOf(e),L=()=>{window.innerWidth<=B&&D&&R()},N=(e,t)=>{$&&(e.preventDefault(),$(t)),P("brand-click")&&R()},H=(e,t)=>{LR.isNavItemCommon(t)&&t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),LR.isNavItemLink(t)&&!t.subMenu&&P("item-click")&&R()},W=(e,t)=>{var n;"button"!==t.type&&"download"!==t.type||!(null===(n=t.args)||void 0===n?void 0:n.onClick)?w&&(e.preventDefault(),w(t)):t.args.onClick(e),P("item-click")&&R()},V=()=>{T(!0),E(!0)},Y=()=>{P("close-button-click")&&R()},U=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(y)?e(bR,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:V,focusHighlight:!1,children:e(vR,{})}):null};return t(pR,{ref:M,$fixed:g,className:l,id:c||"navbar-wrapper","data-testid":k["data-testid"]||"navbar-wrapper",children:[C&&e(dR,{}),t(KB.Content,{stretch:_,children:[t(fR,{$compress:h,children:[!m&&t(yR,{$compress:h,"data-id":"brand-container",children:[j&&e($R,{resources:j,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),z&&t(n,{children:[e(xR,{$compress:h}),e($R,{resources:z,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&t(mR,{$hideNavBranding:m,children:[e(tP,{items:s.desktop,onItemClick:H,selectedId:d,hideNavBranding:m}),e(PR,{actionButtons:y,onActionButtonClick:W}),U()]})]}),!f&&e(Df,{show:O,enableOverlayClick:!0,onOverlayClick:Y,children:t(ER,{show:D,resources:{primary:j,secondary:z},onClose:Y,onBrandClick:N,actionButtons:y,hideNavBranding:m,children:[e(tP,{items:s.mobile||s.desktop,onItemClick:H,selectedId:d,mobile:!0}),e(PR,{actionButtons:y,onActionButtonClick:W,mobile:!0})]})})]})]})})),sP=gR,lP=3.5,cP=F`
    color: ${cc["hyperlink-inverse"]};

    svg {
        color: ${cc["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${cc["hyperlink-inverse"]};
        svg {
            color: ${cc["icon-primary-inverse"]};
        }
    }
`,dP=M.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${uc["duration-800"]} ${uc["ease-default"]};
    background: ${cc["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,uP=M(KB.Content)`
    display: flex;
`,hP=M.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,gP=M.div`
    display: inline-block;
    width: 100%;

    ${dc["body-baseline-regular"]}
    color: ${cc["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${dc["body-baseline-semibold"]}
        color: ${cc["text-inverse"]};
    }

    a {
        ${dc["body-baseline-regular"]}
        ${cP}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return F`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,pP=M(Ec.LinkBL)`
    position: relative;

    ${cP}
`,fP=M(Sc)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,mP=M(je)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${cc["icon-inverse"]};
`,bP=M.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${cc["hyperlink-inverse"]};
    ${dc["body-md-semibold"]};

    cursor: pointer;
`,vP=M.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,yP=n=>{var{children:r,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:g,actionButton:p}=n,f=dt(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=f["data-testid"],[b,v]=a(i),{height:y=0,ref:x}=dn();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),o&&l&&l()},$=e=>{(null==p?void 0:p.onClick)&&(e.stopPropagation(),p.onClick(e))};if(!b)return null;return t(dP,Object.assign({ref:d,$sticky:s,$clickable:!!g,onClick:g},f,{children:[t(uP,{id:xP("container",c),children:[t(hP,{children:[e(gP,{"data-testid":xP("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0,children:e("div",{ref:x,children:r})}),p?e(bP,Object.assign({id:xP("action-button",c),"data-testid":xP("action-button",m),type:"button"},p,{onClick:$,children:p.children})):null]}),o&&e(fP,{onClick:w,id:xP("dismiss-button",c),"data-testid":xP("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e(mP,{"aria-hidden":!0})})]}),g&&e(vP,{"aria-label":"Clickable banner",type:"button"})]}))},xP=(e,t="wrapper")=>`${t}-${e}`,wP=i.forwardRef(((t,n)=>e(yP,Object.assign({},t,{forwardedRef:n}))));wP.displayName="NotificationBanner";const $P=Object.assign(wP,{Link:pP});var CP={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */CP.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,i,o){return r=n()?Reflect.construct:function(e,n,r){var i=[null];i.push.apply(i,n);var o=new(Function.bind.apply(e,i));return r&&t(o,r.prototype),o},r.apply(null,arguments)}function i(e){return o(e)||a(e)||s(e)||c()}function o(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,h=Object.isFrozen,g=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,f=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,n){return e.apply(t,n)}),f||(f=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return r(e,i(t))});var w=F(Array.prototype.forEach),$=F(Array.prototype.pop),C=F(Array.prototype.push),S=F(String.prototype.toLowerCase),k=F(String.prototype.toString),D=F(String.prototype.match),T=F(String.prototype.replace),O=F(String.prototype.indexOf),E=F(String.prototype.trim),_=F(RegExp.prototype.test),M=I(TypeError);function F(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return y(e,t,r)}}function I(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(e,n)}}function A(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:S,u&&u(e,null);for(var i=t.length;i--;){var o=t[i];if("string"==typeof o){var a=n(o);a!==o&&(h(t)||(t[i]=a),o=a)}e[o]=!0}return e}function B(e){var t,n=b(null);for(t in e)!0===y(d,e,[t])&&(n[t]=e[t]);return n}function j(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return F(n.get);if("function"==typeof n.value)return F(n.value)}e=g(e)}function r(e){return console.warn("fallback value for",e),null}return r}var z=f(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=f(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=f(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=f(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=f(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=f(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=f(["#text"]),V=f(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=f(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=f(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=f(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),X=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=m(/^html$/i),re=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},oe=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,i="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(i)&&(r=n.currentScript.getAttribute(i));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),n=function(e){return ae(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,h=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,g=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=j(b,"cloneNode"),y=j(b,"nextSibling"),x=j(b,"childNodes"),F=j(b,"parentNode");if("function"==typeof s){var I=o.createElement("template");I.content&&I.content.ownerDocument&&(o=I.content.ownerDocument)}var se=oe(m,r),le=se?se.createHTML(""):"",ce=o,de=ce.implementation,ue=ce.createNodeIterator,he=ce.createDocumentFragment,ge=ce.getElementsByTagName,pe=r.importNode,fe={};try{fe=B(o).documentMode?o.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof F&&de&&void 0!==de.createHTMLDocument&&9!==fe;var be,ve,ye=X,xe=q,we=G,$e=Z,Ce=Q,Se=ee,ke=te,De=re,Te=J,Oe=null,Ee=A({},[].concat(i(z),i(R),i(P),i(N),i(W))),_e=null,Me=A({},[].concat(i(V),i(Y),i(U),i(K))),Fe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Ae=null,Be=!0,je=!0,ze=!1,Re=!0,Pe=!1,Le=!0,Ne=!1,He=!1,We=!1,Ve=!1,Ye=!1,Ue=!1,Ke=!0,Xe=!1,qe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=A({},["audio","video","img","source","image","track"]),rt=null,it=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=A({},[ot,at,st],k),ht=["application/xhtml+xml","text/html"],gt="text/html",pt=null,ft=o.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=B(t),be=be=-1===ht.indexOf(t.PARSER_MEDIA_TYPE)?gt:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?k:S,Oe="ALLOWED_TAGS"in t?A({},t.ALLOWED_TAGS,ve):Ee,_e="ALLOWED_ATTR"in t?A({},t.ALLOWED_ATTR,ve):Me,dt="ALLOWED_NAMESPACES"in t?A({},t.ALLOWED_NAMESPACES,k):ut,rt="ADD_URI_SAFE_ATTR"in t?A(B(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?A(B(nt),t.ADD_DATA_URI_TAGS,ve):nt,Je="FORBID_CONTENTS"in t?A({},t.FORBID_CONTENTS,ve):et,Ie="FORBID_TAGS"in t?A({},t.FORBID_TAGS,ve):{},Ae="FORBID_ATTR"in t?A({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Be=!1!==t.ALLOW_ARIA_ATTR,je=!1!==t.ALLOW_DATA_ATTR,ze=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Le=!1!==t.SAFE_FOR_XML,Ne=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,Xe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,Te=t.ALLOWED_URI_REGEXP||Te,lt=t.NAMESPACE||st,Fe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Fe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Fe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Fe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(je=!1),Ye&&(Ve=!0),Qe&&(Oe=A({},i(W)),_e=[],!0===Qe.html&&(A(Oe,z),A(_e,V)),!0===Qe.svg&&(A(Oe,R),A(_e,Y),A(_e,K)),!0===Qe.svgFilters&&(A(Oe,P),A(_e,Y),A(_e,K)),!0===Qe.mathMl&&(A(Oe,N),A(_e,U),A(_e,K))),t.ADD_TAGS&&(Oe===Ee&&(Oe=B(Oe)),A(Oe,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===Me&&(_e=B(_e)),A(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&A(rt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=B(Je)),A(Je,t.FORBID_CONTENTS,ve)),Ge&&(Oe["#text"]=!0),Ne&&A(Oe,["html","head","body"]),Oe.table&&(A(Oe,["tbody"]),delete Ie.tbody),f&&f(t),pt=t)},vt=A({},["mi","mo","mn","ms","mtext"]),yt=A({},["foreignobject","annotation-xml"]),xt=A({},["title","style","font","a","script"]),wt=A({},R);A(wt,P),A(wt,L);var $t=A({},N);A($t,H);var Ct=function(e){var t=F(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=S(e.tagName),r=S(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===st?"svg"===n:t.namespaceURI===ot?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(wt[n]):e.namespaceURI===ot?t.namespaceURI===st?"math"===n:t.namespaceURI===at?"math"===n&&yt[r]:Boolean($t[n]):e.namespaceURI===st?!(t.namespaceURI===at&&!yt[r])&&!(t.namespaceURI===ot&&!vt[r])&&!$t[n]&&(xt[n]||!wt[n]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},St=function(e){C(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},kt=function(e,t){try{C(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){C(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ve||Ye)try{St(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Dt=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=D(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new p).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),lt===st?ge.call(t,Ne?"html":"body")[0]:Ne?t.documentElement:a},Tt=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Ot=function(e){return e instanceof g&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof h)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,r){me[e]&&w(me[e],(function(e){e.call(n,t,r,pt)}))},Mt=function(e){var t;if(_t("beforeSanitizeElements",e,null),Ot(e))return St(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return St(e),!0;var r=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:r,allowedTags:Oe}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return St(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return St(e),!0;if(7===e.nodeType)return St(e),!0;if(Le&&8===e.nodeType&&_(/<[/\w]/g,e.data))return St(e),!0;if(!Oe[r]||Ie[r]){if(!Ie[r]&&It(r)){if(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,r))return!1;if(Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(r))return!1}if(Ge&&!Je[r]){var i=F(e)||e.parentNode,o=x(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a){var s=v(o[a],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return St(e),!0}return e instanceof c&&!Ct(e)?(St(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=T(t,ye," "),t=T(t,xe," "),t=T(t,we," "),e.textContent!==t&&(C(n.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(St(e),!0)},Ft=function(e,t,n){if(Ke&&("id"===t||"name"===t)&&(n in o||n in ft))return!1;if(je&&!Ae[t]&&_($e,t));else if(Be&&_(Ce,t));else if(!_e[t]||Ae[t]){if(!(It(e)&&(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,e)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(e))&&(Fe.attributeNameCheck instanceof RegExp&&_(Fe.attributeNameCheck,t)||Fe.attributeNameCheck instanceof Function&&Fe.attributeNameCheck(t))||"is"===t&&Fe.allowCustomizedBuiltInElements&&(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,n)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(n))))return!1}else if(rt[t]);else if(_(Te,T(n,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==O(n,"data:")||!tt[e])if(ze&&!_(Se,T(n,ke,"")));else if(n)return!1;return!0},It=function(e){return"annotation-xml"!==e&&D(e,De)},At=function(t){var r,i,o,a;_t("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(a=s.length;a--;){var c=r=s[a],d=c.name,u=c.namespaceURI;if(i="value"===d?r.value:E(r.value),o=ve(d),l.attrName=o,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(kt(d,t),l.keepAttr))if(Re||!_(/\/>/i,i))if(Le&&_(/((--!?|])>)|<\/(style|title)/i,i))kt(d,t);else{Pe&&(i=T(i,ye," "),i=T(i,xe," "),i=T(i,we," "));var h=ve(t.nodeName);if(Ft(h,o,i)){if(!Xe||"id"!==o&&"name"!==o||(kt(d,t),i=qe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(h,o)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Ot(t)?St(t):$(n.removed)}catch(e){}}}else kt(d,t)}_t("afterSanitizeAttributes",t,null)}},Bt=function e(t){var n,r=Tt(t);for(_t("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_t("uponSanitizeShadowNode",n,null),Mt(n)||(n.content instanceof a&&e(n.content),At(n));_t("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(i){var o,s,c,d,u,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Et(i)){if("function"!=typeof i.toString)throw M("toString is not a function");if("string"!=typeof(i=i.toString()))throw M("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Et(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(h),n.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var g=ve(i.nodeName);if(!Oe[g]||Ie[g])throw M("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(o=Dt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Ve&&!Pe&&!Ne&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(o=Dt(i)))return Ve?null:Ue?le:""}o&&We&&St(o.firstChild);for(var p=Tt(Ze?i:o);c=p.nextNode();)3===c.nodeType&&c===d||Mt(c)||(c.content instanceof a&&Bt(c.content),At(c),d=c);if(d=null,Ze)return i;if(Ve){if(Ye)for(u=he.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(_e.shadowroot||_e.shadowrootmod)&&(u=pe.call(r,u,!0)),u}var f=Ne?o.outerHTML:o.innerHTML;return Ne&&Oe["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&_(ne,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),Pe&&(f=T(f,ye," "),f=T(f,xe," "),f=T(f,we," ")),se&&Ue?se.createHTML(f):f},n.setConfig=function(e){bt(e),He=!0},n.clearConfig=function(){pt=null,He=!1},n.isValidAttribute=function(e,t,n){pt||bt({});var r=ve(e),i=ve(t);return Ft(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],C(me[e],t))},n.removeHook=function(e){if(me[e])return $(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}var se=ae();return se}();var SP=Uo(CP.exports);const kP=t=>i.forwardRef(((n,r)=>e(yP,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=SP.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e($P.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),DP=M.div`
    display: flex;
    flex-direction: column;
`,TP=M.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${gc["spacing-8"]};
`,OP=M(i$)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${mc.MaxWidth.xs} {
            padding: 0 ${gc["spacing-8"]};
        }
    }
`,EP=M(Jc.Small)`
    margin: ${gc["spacing-32"]} 0;
`,_P=n=>{var{id:r,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:f,onCooldownEnd:m}=n,b=dt(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=dt(v,["disabled","onClick","styleType"]),C=o([]),S=o(p),[k,D]=a(new Array(g).fill("")),[T,O]=a(c),[E,_]=a(new Date);u((()=>{var e;return null===(e=null==C?void 0:C.current[0])||void 0===e||e.focus(),document.addEventListener("paste",I),()=>document.removeEventListener("paste",I)}),[]),u((()=>{if(0!==c){f&&f();const e=j();return()=>e()}}),[E]),u((()=>{S.current=p}),[p]),u((()=>{i.length===g&&D(i)}),[i]);const M=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(A(r)){const t=[...k];t[e]=r.substring(r.length-1),null===(n=C.current[e+1])||void 0===n||n.focus(),D(t),p&&p(t)}},F=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...k];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=C.current[e-1])||void 0===n||n.focus()),D(t),p&&p(t)}},I=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),n=t.split("");t&&A(t,g)?(D(n),S.current&&S.current(n)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),B=()=>{const e=Date.now(),t=1e3*c;return e<E.valueOf()+t},j=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((E.valueOf()+n-t)/1e3);O(r),r<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},z=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return t(DP,{id:r,"data-testid":s,className:l,children:[e(TP,{children:k.map(((t,n)=>e(OP,Object.assign({id:z(n,"otp-input",r),"data-testid":z(n,"otp-input",s),"aria-label":`Enter OTP character ${n+1}`,ref:e=>C.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:M(n),onKeyDown:F(n),autoComplete:"off"},b),n)))}),h&&e(Cw,{children:h}),e(EP,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{D(new Array(g).fill("")),B()||(_(new Date),O(c)),x&&x(e)},disabled:y||B(),children:$.children?$.children:"Resend OTP"+(T?` in ${T} second${T>1?"s":""}`:"")}))]})},MP=M.nav`
    display: flex;
`,FP=M.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${mc.MaxWidth.lg} {
        align-self: center;
    }
`,IP=M.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,AP=M(Sc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${pc.sm};
    color: ${cc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${cc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${cc["bg-hover"]};
    }
`,BP=M(Sc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${pc.sm};
    color: ${cc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${cc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${cc["bg-hover"]};
    }

    ${e=>"left"===e.$position?F`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:F`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${mc.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,jP=M.button`
    background: ${e=>e.$selected?cc["bg-primary"]:cc.bg};
    border: ${hc["width-010"]} ${hc.solid}
        ${e=>F`
                ${e.$selected?cc["bg-primary"]:cc.border}
            `};
    color: ${e=>e.$selected?cc["text-inverse"]:cc.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${pc.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?F`
                  ${dc["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${cc["bg-selected-strongest-hover"]};
                      background-color: ${cc["bg-selected-strongest-hover"]};
                      color: ${cc["text-inverse"]};
                  }
              `:F`
                  ${dc["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${cc["bg-hover"]};
                      background-color: ${cc["bg-hover"]};
                      color: ${cc["text-hover"]};
                      ${dc["body-baseline-semibold"]};
                  }
              `}
`;M(Sc)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${cc["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${pc.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${cc["icon-hover"]};
        }
    }
`;const zP=M.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${pc.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,RP=M.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${cc.text};

    display: flex;
    justify-content: center;
`,PP=M(Ec.BodyBL)`
    white-space: nowrap;
`,LP=M(Ec.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,NP=M(i$)`
    ${dc["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${pc.sm};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${dc["body-xs-regular"]}
        }
    }
`,HP=M.div`
    ${dc["body-xs-regular"]}
    background-color: ${cc["bg-hover"]};
    border: none;
    border-radius: ${pc.sm};
    color: ${cc["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,WP=M.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,VP=i.forwardRef((({id:n,"data-testid":r,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=YP,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:g,onPageSizeChange:p},f)=>{const m=A(),b=fc["sm-max"]({theme:m}),v=Od.useMediaQuery({maxWidth:b}),[y,x]=a(!1),[w,$]=a(!1),[C,S]=a(""),[k,D]=a(c[0]),[T,O]=a(!v&&h&&k?k.value:o),E=Math.ceil(s/T),_=1===l,M=l===E,F=l>1?()=>N(1):void 0,I=l<E?()=>N(E):void 0,B=l>1?()=>N(l-1):void 0,j=l<E?()=>N(parseInt(l.toString())+1):void 0,z=e=>e?()=>X():()=>U(),R=e=>e?()=>q():()=>K();u((()=>{l&&P(l)}),[l]),u((()=>{O(o),D(c.find((e=>e.value===o)))}),[o]);const P=e=>{S(e.toString())},L=()=>{x(!1),$(!1)},N=e=>{g&&(g(e),P(e))},H=()=>{const e=Math.min(E,l+5);N(e),P(e),x(!0),$(!1)},W=()=>{const e=Math.max(1,l-5);N(e),P(e),x(!1),$(!0)},V=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));P(Math.max(1,Math.min(E,e)))}else S(t.replace(/[^0-9]/g,""))},Y=e=>{e.preventDefault(),C&&(null==g||g(parseInt(C)))},U=()=>{x(!0)},K=()=>{x(!1)},X=()=>{$(!0)},q=()=>{$(!1)},G=(n,r,i)=>t(zP,{children:[e(AP,{focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:z(n),onMouseOut:R(n),onFocus:z(n),onBlur:R(n),onClick:n?W:H,children:e(n&&w?rt:r&&y?it:st,{"aria-hidden":!0})}),n&&w&&e(HP,{children:"Previous 5 pages"}),r&&y&&e(HP,{children:"Next 5 pages"})]},i);return t(MP,{className:i,ref:f,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination",children:[e(FP,{children:t(IP,{children:[d&&e(BP,{onClick:F,disabled:_,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e(ot,{"aria-hidden":!0})}),e(BP,{onClick:B,disabled:_,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e(be,{"aria-hidden":!0})}),v?t(RP,{children:[e("form",{onSubmit:Y,children:e(NP,{value:C,onChange:V,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})}),e(LP,{children:"/"}),e(PP,{children:E})]}):[...Array(E)].map(((t,n)=>{const r=n+1,i=E-5,o=l===r;if(E<=7)return e(jP,{onClick:()=>N(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:r},r);const a=l+1>5&&2===r,s=l-1<=i&&r===E-1-1;return a||s?G(a,s,r):r<=5&&l+1<=5||r<=1||r===l||r<=l+1&&r>=l-1-1||r>i&&l-1>i||r>E-1?e(jP,{onClick:()=>N(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:r},r):null})),e(BP,{onClick:j,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e(me,{"aria-hidden":!0})}),d&&e(BP,{onClick:I,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e(at,{"aria-hidden":!0})})]})}),h&&!v&&e(WP,{children:e(NF,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,n=Math.ceil(s/t);O(t);p&&p(l>=n?n:l,t)}})})]})})),YP=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],UP=M.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${dc["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=cc["text-inverse"],e.$color){case"grey":t=cc["bg-inverse-subtler"];break;case"green":t=cc["bg-success-strong"];break;case"yellow":t=cc["bg-warning-strong"];break;case"red":t=cc["bg-error-strong"];break;case"blue":t=cc["bg-info-strong"];break;default:t=cc["bg-inverse"]}else switch(e.$color){case"grey":t=cc["bg-stronger"],n=cc["border-strong"],r=cc["text-subtler"];break;case"green":t=cc["bg-success"],n=cc["border-success"],r=cc["text-success"];break;case"yellow":t=cc["bg-warning"],n=cc["border-warning"],r=cc["text-warning"];break;case"red":t=cc["bg-error"],n=cc["border-error"],r=cc["text-error"];break;case"blue":t=cc["bg-info"],n=cc["border-info"],r=cc["text-info"];break;default:t=cc.bg,n=cc.border,r=cc.text}return F`
            background: ${t};
            border: ${hc["width-010"]} ${hc.solid} ${n};
            color: ${r};
        `}}
`,KP=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,XP=n=>{var{type:r,colorType:i="black",children:o,icon:a}=n,s=dt(n,["type","colorType","children","icon"]);return t(UP,Object.assign({$type:r,$color:i},s,{children:[a,e(KP,{children:o})]}))},qP=(e,t,n)=>t?Cl(n,t)||Cl(e,t):n||e,GP=(e,t)=>{const n=t||e.defaultValue;return Cl(e.collections,n)};var ZP;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ZP||(ZP={}));const QP={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},JP=e=>t=>{var n;const r=(null===(n=t.theme)||void 0===n?void 0:n._v2)||t.theme,i=GP(QP,null==r?void 0:r[ZP.colorScheme]);return r.options&&r.options.color?qP(i,e,r.options.color):qP(i,e)},eL={Brand:{1:JP("Brand.1"),2:JP("Brand.2"),3:JP("Brand.3"),4:JP("Brand.4"),5:JP("Brand.5"),6:JP("Brand.6")},Primary:JP("Primary"),PrimaryDark:JP("PrimaryDark"),Secondary:JP("Secondary"),Accent:{Light:{1:JP("Accent.Light.1"),2:JP("Accent.Light.2"),3:JP("Accent.Light.3"),4:JP("Accent.Light.4"),5:JP("Accent.Light.5"),6:JP("Accent.Light.6")},Dark:{1:JP("Accent.Dark.1"),2:JP("Accent.Dark.2"),3:JP("Accent.Dark.3")}},Neutral:{1:JP("Neutral.1"),2:JP("Neutral.2"),3:JP("Neutral.3"),4:JP("Neutral.4"),5:JP("Neutral.5"),6:JP("Neutral.6"),7:JP("Neutral.7"),8:JP("Neutral.8")},Validation:{Green:{Text:JP("Validation.Green.Text"),Icon:JP("Validation.Green.Icon"),Border:JP("Validation.Green.Border"),Background:JP("Validation.Green.Background")},Orange:{Text:JP("Validation.Orange.Text"),Icon:JP("Validation.Orange.Icon"),Border:JP("Validation.Orange.Border"),Background:JP("Validation.Orange.Background"),Badge:JP("Validation.Orange.Badge")},Red:{Text:JP("Validation.Red.Text"),Icon:JP("Validation.Red.Icon"),Border:JP("Validation.Red.Border"),Background:JP("Validation.Red.Background")},Blue:{Text:JP("Validation.Blue.Text"),Icon:JP("Validation.Blue.Icon"),Border:JP("Validation.Blue.Border"),Background:JP("Validation.Blue.Background")}},Shadow:{Accent:JP("Shadow.Accent"),Red:JP("Shadow.Red"),Elevation:JP("Shadow.Elevation")}},tL={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},nL={D1:{fontFamily:tL.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tL.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tL.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tL.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},rL={D1:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:tL.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:tL.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:tL.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:tL.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:tL.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},iL={collections:{base:nL,oneservice:{D1:{fontFamily:tL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:tL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:tL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:tL.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:tL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:tL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:tL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:tL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:tL.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:tL.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:tL.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:tL.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:rL},defaultValue:"base"},oL=e=>t=>{var n;const r=(null===(n=t.theme)||void 0===n?void 0:n._v2)||t.theme,i=GP(iL,null==r?void 0:r[ZP.textStyleScheme]);return r.options&&r.options.textStyle?qP(i,e,r.options.textStyle):qP(i,e)},aL={D1:{fontFamily:oL("D1.fontFamily"),fontSize:oL("D1.fontSize"),fontWeight:oL("D1.fontWeight"),lineHeight:oL("D1.lineHeight"),letterSpacing:oL("D1.letterSpacing"),fontVariant:oL("D1.fontVariant")},D2:{fontFamily:oL("D2.fontFamily"),fontSize:oL("D2.fontSize"),fontWeight:oL("D2.fontWeight"),lineHeight:oL("D2.lineHeight"),letterSpacing:oL("D2.letterSpacing"),fontVariant:oL("D2.fontVariant")},D3:{fontFamily:oL("D3.fontFamily"),fontSize:oL("D3.fontSize"),fontWeight:oL("D3.fontWeight"),lineHeight:oL("D3.lineHeight"),letterSpacing:oL("D3.letterSpacing"),fontVariant:oL("D3.fontVariant")},D4:{fontFamily:oL("D4.fontFamily"),fontSize:oL("D4.fontSize"),fontWeight:oL("D4.fontWeight"),lineHeight:oL("D4.lineHeight"),letterSpacing:oL("D4.letterSpacing"),fontVariant:oL("D4.fontVariant")},DBody:{fontFamily:oL("DBody.fontFamily"),fontSize:oL("DBody.fontSize"),fontWeight:oL("DBody.fontWeight"),lineHeight:oL("DBody.lineHeight"),letterSpacing:oL("DBody.letterSpacing"),fontVariant:oL("DBody.fontVariant")},H1:{fontFamily:oL("H1.fontFamily"),fontSize:oL("H1.fontSize"),fontWeight:oL("H1.fontWeight"),lineHeight:oL("H1.lineHeight"),letterSpacing:oL("H1.letterSpacing"),fontVariant:oL("H1.fontVariant")},H2:{fontFamily:oL("H2.fontFamily"),fontSize:oL("H2.fontSize"),fontWeight:oL("H2.fontWeight"),lineHeight:oL("H2.lineHeight"),letterSpacing:oL("H2.letterSpacing"),fontVariant:oL("H2.fontVariant")},H3:{fontFamily:oL("H3.fontFamily"),fontSize:oL("H3.fontSize"),fontWeight:oL("H3.fontWeight"),lineHeight:oL("H3.lineHeight"),letterSpacing:oL("H3.letterSpacing"),fontVariant:oL("H3.fontVariant")},H4:{fontFamily:oL("H4.fontFamily"),fontSize:oL("H4.fontSize"),fontWeight:oL("H4.fontWeight"),lineHeight:oL("H4.lineHeight"),letterSpacing:oL("H4.letterSpacing"),fontVariant:oL("H4.fontVariant")},H5:{fontFamily:oL("H5.fontFamily"),fontSize:oL("H5.fontSize"),fontWeight:oL("H5.fontWeight"),lineHeight:oL("H5.lineHeight"),letterSpacing:oL("H5.letterSpacing"),fontVariant:oL("H5.fontVariant")},H6:{fontFamily:oL("H6.fontFamily"),fontSize:oL("H6.fontSize"),fontWeight:oL("H6.fontWeight"),lineHeight:oL("H6.lineHeight"),letterSpacing:oL("H6.letterSpacing"),fontVariant:oL("H6.fontVariant")},Body:{fontFamily:oL("Body.fontFamily"),fontSize:oL("Body.fontSize"),fontWeight:oL("Body.fontWeight"),lineHeight:oL("Body.lineHeight"),letterSpacing:oL("Body.letterSpacing"),fontVariant:oL("Body.fontVariant")},BodySmall:{fontFamily:oL("BodySmall.fontFamily"),fontSize:oL("BodySmall.fontSize"),fontWeight:oL("BodySmall.fontWeight"),lineHeight:oL("BodySmall.lineHeight"),letterSpacing:oL("BodySmall.letterSpacing"),fontVariant:oL("BodySmall.fontVariant")},XSmall:{fontFamily:oL("XSmall.fontFamily"),fontSize:oL("XSmall.fontSize"),fontWeight:oL("XSmall.fontWeight"),lineHeight:oL("XSmall.lineHeight"),letterSpacing:oL("XSmall.letterSpacing"),fontVariant:oL("XSmall.fontVariant")}},sL=[tL.OpenSans,tL.PlusJakartaSans],lL=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},cL=(e,t)=>n=>{var r,i,o,a,s;const l=null===(i=(r=aL[e]).fontFamily)||void 0===i?void 0:i.call(r,n),c=null===(a=(o=aL[e]).fontWeight)||void 0===a?void 0:a.call(o,n),d=sL.find((e=>Object.values(e).includes(l)));return d?F`
                font-family: ${lL(d,t)||lL(d,c)||l};
                font-weight: normal !important;
            `:F`
            font-family: ${l};
            font-weight: ${null!==(s=dL(t)||c)&&void 0!==s?s:"normal"};
        `},dL=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},uL=e=>{if(e)return F`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},hL={getFontFamily:cL,getTextStyle:(e,t,n=!1)=>r=>{var i,o,a;const s=aL[e],l=(null===(i=s.fontSize)||void 0===i?void 0:i.call(s,r))||1;return F`
            ${cL(e,t)}
            font-size: ${l}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${(null===(o=s.letterSpacing)||void 0===o?void 0:o.call(s,r))||0}rem !important;
            font-variant: ${(null===(a=s.fontVariant)||void 0===a?void 0:a.call(s,r))||"normal"};
            ${F`
                margin-bottom: ${l*(n?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?F`
            display: block;
            ${uL(n)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${uL(n)}
        `};var gL;!function(e){e.D1=M.h1`
        ${e=>F`
                ${hL.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=M.h1`
        ${e=>F`
                ${hL.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=M.h1`
        ${e=>F`
                ${hL.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=M.h1`
        ${e=>F`
                ${hL.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=M.h1`
        ${e=>F`
                ${hL.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=M.h1`
        ${e=>F`
                ${hL.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=M.h2`
        ${e=>F`
                ${hL.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=M.h3`
        ${e=>F`
                ${hL.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=M.h4`
        ${e=>F`
                ${hL.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=M.h5`
        ${e=>F`
                ${hL.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=M.h6`
        ${e=>F`
                ${hL.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=M.p`
        ${e=>F`
                ${hL.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=M.p`
        ${e=>F`
                ${hL.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=M.span`
        ${e=>F`
                ${hL.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${eL.Neutral[1]};
                ${hL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>mL(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>mL(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(gL||(gL={}));const pL=M.a`
    ${e=>F`
            ${hL.getTextStyle(e.textStyle,e.weight)}
            color: ${eL.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${eL.Secondary};

                svg {
                    color: ${eL.Secondary};
                }
            }
        `}
`,fL=M(B)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,mL=n=>{var{external:r=!1,children:i}=n,o=dt(n,["external","children"]);return t(pL,Object.assign({},o,{children:[i,r&&e(fL,{})]}))},bL={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},vL=M.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?F`
            visibility: visible;
            opacity: 1;
            transition: ${bL.Base};
            z-index: 50;
        `:F`
            visibility: hidden;
            opacity: 0;
            transition: ${bL.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return F`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return F`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return F`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return F`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return F`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return F`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${ff.MaxWidth.mobileL} {
        display: none;
    }
`,yL=M(Nf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,xL=M.div`
    position: relative;
    width: fit-content;
`,wL=M.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,$L=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,CL=r=>{var{children:i,visible:s,onMobileClose:l}=r,c=dt(r,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,g]=a("none"),p=o(null),f=Od.useMediaQuery({maxWidth:gf.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",rg(b,300)),()=>{window.removeEventListener("resize",rg(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,g(t))},x=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},w=()=>"string"==typeof i?e(gL.BodySmall,{children:i}):i;return t(n,{children:[e(vL,Object.assign({ref:p,"data-testid":d,$visible:s,$offset:h},c,{children:e(Eh,{children:w()})})),f&&e(Rf,{show:null!=s&&s,onOverlayClick:v,children:e(yL,{onClose:v,children:e($L,{children:w()})})})]})},SL=(n,r)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=dt(i,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",h=c,[g,p]=a(!1),f=o(null),m=Od.useMediaQuery({maxWidth:gf.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[g]);const b=e=>{f&&!f.current.contains(e.target)&&(g&&p(!1),l&&l())};return t(xL,{id:"popover-hoc-wrapper",ref:f,children:[e(wL,{id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(p(!g),!g&&s&&s(),g&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||p(!0)},onMouseLeave:()=>{"hover"===d&&g&&!m&&p(!1)},"aria-label":"popover-button",children:e(n,Object.assign({},h))}),e(CL,{visible:g,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{p(!1)},children:r.content})]})},kL=M.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${mc.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${mc.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,DL=M.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,TL=M.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?cc["bg-primary-subtle"]:cc["bg-disabled"])(e)};\n        `}};
`,OL=M(Ec.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?cc["text-primary"]:cc["text-disabled"])(e)};`}};
`,EL=M(Ec.BodyMD)`
    overflow-wrap: anywhere;
    color: ${cc.text};
`,_L=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var ML=function(e){return function(t){return null==e?void 0:e[t]}},FL=ML({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),IL=dl,AL=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,BL=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var jL=function(e){return(e=IL(e))&&e.replace(AL,FL).replace(BL,"")},zL=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var RL=function(e){return e.match(zL)||[]},PL=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var LL=function(e){return PL.test(e)},NL="\\ud800-\\udfff",HL="\\u2700-\\u27bf",WL="a-z\\xdf-\\xf6\\xf8-\\xff",VL="A-Z\\xc0-\\xd6\\xd8-\\xde",YL="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",UL="["+YL+"]",KL="\\d+",XL="["+HL+"]",qL="["+WL+"]",GL="[^"+NL+YL+KL+HL+WL+VL+"]",ZL="(?:\\ud83c[\\udde6-\\uddff]){2}",QL="[\\ud800-\\udbff][\\udc00-\\udfff]",JL="["+VL+"]",eN="(?:"+qL+"|"+GL+")",tN="(?:"+JL+"|"+GL+")",nN="(?:['’](?:d|ll|m|re|s|t|ve))?",rN="(?:['’](?:D|LL|M|RE|S|T|VE))?",iN="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",oN="[\\ufe0e\\ufe0f]?",aN=oN+iN+("(?:\\u200d(?:"+["[^"+NL+"]",ZL,QL].join("|")+")"+oN+iN+")*"),sN="(?:"+[XL,ZL,QL].join("|")+")"+aN,lN=RegExp([JL+"?"+qL+"+"+nN+"(?="+[UL,JL,"$"].join("|")+")",tN+"+"+rN+"(?="+[UL,JL+eN,"$"].join("|")+")",JL+"?"+eN+"+"+nN,JL+"+"+rN,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",KL,sN].join("|"),"g");var cN=RL,dN=LL,uN=dl,hN=function(e){return e.match(lN)||[]};var gN=vF,pN=jL,fN=function(e,t,n){return e=uN(e),void 0===(t=n?void 0:t)?dN(e)?hN(e):cN(e):e.match(t)||[]},mN=RegExp("['’]","g");var bN=Uo(function(e){return function(t){return gN(fN(pN(t).replace(mN,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const vN=n=>{var{steps:r,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=n,l=dt(n,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=A(),d=fc["lg-max"]({theme:c}),u=Od.useMediaQuery({maxWidth:d}),h=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},g=(e,t)=>bN(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return t(kL,Object.assign({},l,{children:[e(DL,{children:r.map(((t,n)=>{const r=n<=i;return e(_L,{id:g(n,i),children:e(TL,{highlighted:r})},n)}))}),e(DL,{children:u?t(_L,{id:g(i,i),children:[t(EL,{weight:"semibold",id:`${g(i,i)}-counter`,children:["Step ",i+1," of ",r.length]}),e(EL,{weight:"regular",id:`${g(i,i)}-title`,children:h(r[i])})]},i):r.map(((t,n)=>{const r=n<=i,o=n===i,a=o?"bold":"regular";return e(_L,{id:`${g(n,i)}-title`,children:e(OL,{highlighted:r,weight:a,"aria-current":o,children:h(t)})},n)}))})]}))},yN=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?F`
                height: 1.5rem;
                width: 1.5rem;
            `:F`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,xN=M(ae)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?cc["icon-disabled-subtle"](e):cc["icon-subtle"](e)};
    transition: ${uc["duration-150"]} ${uc["ease-default"]};
`,wN=M(se)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?cc["icon-selected-disabled"](e):cc["icon-selected"](e)};

    transition: ${uc["duration-150"]} ${uc["ease-default"]};
`,$N=M.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${xN}, &:hover + ${wN} {
        color: ${e=>!e.disabled&&cc["icon-hover"](e)};
    }
`,CN=n=>{var{className:r,checked:i,disabled:o,displaySize:a="default",onChange:s}=n,l=dt(n,["className","checked","disabled","displaySize","onChange"]);return t(yN,{$selected:i,$disabled:o,className:r,$displaySize:a,"data-testid":"radio-button",children:[e($N,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==s||s(e)},checked:i,disabled:o},l)),i?e(wN,{"data-testid":"radio-checked",$disabled:o}):e(xN,{"data-testid":"radio-unchecked",$disabled:o})]})},SN=M.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,kN=M.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};
    background-color: ${cc["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,DN=M(kN)`
    height: 100vh;
    left: 0;
    top: 0;
    ${mc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,TN=M(kN)`
    display: none;
    visibility: hidden;
    ${mc.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,ON=M(Vo.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${cc["bg-primary-subtlest"]};
    border-top-right-radius: ${pc.md};
    border-bottom-right-radius: ${pc.md};
    border: ${hc["width-010"]} ${hc.solid} ${cc.border};

    ${e=>e.$showDrawer?F`
                  box-shadow: 0 0 4px
                      rgb(from ${cc.Primitive["neutral-20"]} r g b / 25%);
              `:F`
                  border: 0;
                  padding: 0;
              `};
`,EN=M.li`
    width: 100%;
`,_N=M.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${pc.md};
    color: ${cc["icon-primary"]};
    transition: ${uc["duration-250"]} ${uc["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,MN=M(Ec.BodyXS)`
    ${kc(2)}
    margin-top: 0.25rem;
    transition: ${uc["duration-250"]} ${uc["ease-default"]};
`,FN=M(Qg)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${_N} {
            background-color: ${cc["bg-hover"]};
        }

        ${MN} {
            ${dc["body-xs-semibold"]}
            color: ${cc["text-hover"]};
        }
    }

    ${e=>e.$highlight&&F`
            ${_N} {
                background-color: ${cc["bg-hover"]};
            }

            ${MN} {
                ${dc["body-xs-semibold"]}
                color: ${cc["text-selected"]};
            }
        `}
`,IN=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),AN=M.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,BN=M.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${cc.border};
`,jN=M(Vo.li)``,zN=M(Qg)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${pc.md};

    ${dc["body-md-semibold"]}
    color: ${cc.text};

    ${e=>e.$noChildren?F`
                  :hover,
                  :focus {
                      background: ${cc["bg-hover"]};
                      color: ${cc["text-hover"]};
                  }
              `:F`
                  :hover,
                  :focus {
                      background: ${cc["bg-hover-strong"]};
                  }
              `}
`,RN=M(Vo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,PN=M(_)`
    flex-shrink: 0;
    color: ${cc.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${uc["duration-150"]} ${uc["ease-default"]};
`,LN=M.span`
    ${kc(2)}
    text-align: left;
`,NN=M(Vo.ul)``,HN=M.li``,WN=M(Qg)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${pc.md};

    ${dc["body-md-regular"]}
    color: ${cc.text};
    ${kc(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${cc["bg-hover"]};
        color: ${cc["text-hover"]};
    }
`,VN=Object.assign((n=>{var{fixed:r=!0,children:i}=n,s=dt(n,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,g]=a(void 0),[p,f]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:p,setCurrentItem:d,setSelectedItem:g,setPreviouslySelectedItemId:f})),[c,h,p,d,g,f]),x=Do({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return gu("click",(e=>{l.current&&!l.current.contains(e.target)&&(g({itemId:p||(h?h.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{v(!!(null==h?void 0:h.content)||!!(null==c?void 0:c.content))}),[c,h]),e(IN.Provider,{value:y,children:t(SN,Object.assign({$fixed:r},s,{ref:l,onMouseLeave:()=>{d(void 0)},children:[e(DN,{children:i}),e(ON,{style:x,$showDrawer:b,"data-testid":"sidenav-drawer",children:c&&c.content||h&&h.content}),e(TN,{})]}))})}),{Group:n=>{var{separator:r,children:i}=n,o=dt(n,["separator","children"]);return t(AN,Object.assign({},o,{children:[i,r&&e(BN,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:o,onClick:a}=n,s=dt(n,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:g,setPreviouslySelectedItemId:p,setSelectedItem:m}=f(IN);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(EN,{children:t(FN,Object.assign({type:"button",onClick:()=>{p((()=>{if(r&&h)return d||h.itemId})()),g({itemId:l,content:r}),m({itemId:l,content:r}),a&&!r&&a(l)},onMouseEnter:()=>{g({itemId:l,content:r})}},s,{$highlight:!!h&&h.itemId===l||!!c&&c.itemId===l,children:[e(_N,{children:i}),e(MN,{children:o})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:o,children:s}=n,l=dt(n,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:g,setSelectedItem:p,setPreviouslySelectedItemId:m,setCurrentItem:b}=f(IN),v=Do({from:{opacity:0},to:{opacity:1}}),y=dn(),x=y.ref,w=Do({height:s&&c?y.height:0});return t(jN,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v,children:[t(zN,{type:"button",onClick:()=>{s?d(!c):(p({itemId:null==g?void 0:g.itemId,content:void 0}),b(void 0),m(void 0),o&&o(r))},$highlight:u&&c,$noChildren:!s,children:[e(LN,{children:i}),s&&e(PN,{"aria-hidden":!0,$expanded:c})]}),e(RN,{style:w,children:e(NN,{ref:x,children:s})})]}))},DrawerSubitem:t=>{var{id:n,title:r,onClick:i}=t,o=dt(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f(IN);return e(HN,Object.assign({},o,{children:e(WN,{type:"button",onClick:()=>{i&&i(n),s({itemId:null==a?void 0:a.itemId,content:void 0}),l(void 0),c(void 0)},children:r})}))}}),YN=I`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,UN=M.div`
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
    background: ${cc.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${pc.md};
    ${e=>{if(e.$isAnimated)return F`
                animation: ${YN} 0.3s;
            `}}
`,KN=M.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,XN=M(Sc)`
    padding: 0;
`,qN=M(je)`
    color: ${cc.icon};
    height: 1.25rem;
    width: 1.25rem;
`,GN=M.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,ZN=M.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${mc.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,QN=M.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,JN=M.div`
    max-width: 30%;
`,eH=M(Jc.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${dc["body-xs-semibold"]}
    }
`,tH=M(Ec.BodySM)`
    font-weight: ${dc.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${mc.MaxWidth.xs} {
        ${dc["body-xs-bold"]}
    }
`,nH=M(Ec.BodyXS)`
    overflow-wrap: anywhere;
`,rH=M.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,iH=F`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,oH=M(Re)`
    ${iH}
`,aH=M(lt)`
    ${iH}
`,sH=M(ze)`
    ${iH}
`,lH="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",cH="smart-app-banner";const dH=i.forwardRef((function(r,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=lH,animated:u=!1,onDismiss:h,onClick:g}=r,{title:p,message:f,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==g||g()};return e(n,{children:a&&t(UN,{ref:i,$isAnimated:u,$offset:c,className:o,children:[e(KN,{onClick:h,id:`${cH}-dismiss`,"data-testid":`${cH}-dismiss-container`,children:e(XN,{"aria-label":"Dismiss",children:e(qN,{})})}),t(GN,{onClick:y,id:`${cH}-proceed`,"data-testid":`${cH}-proceed-container`,children:[e(QN,{src:d,alt:"lifesg-app-icon"}),t(ZN,{children:[e(tH,{children:p}),e(nH,{children:f}),(()=>{if(isNaN(v)||v<0)return;const t=[],n=v-Math.floor(v)>=.4;for(let n=0;n<Math.floor(v);n++)t.push(e(oH,{},`star${n}`));if(n&&t.push(e(aH,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e(sH,{},`emptystar${r}`))}return e(rH,{children:t.slice(0,5)})})()]}),e(JN,{children:e(eH,{type:"button",onClick:y,"aria-label":b,children:m})})]})]})})})),uH=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),hH=M.div`
    position: relative;
    width: 100%;
`,gH=M.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,F`
            ${mc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,pH=M.div`
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
`,fH=M(Sc)`
    display: none;

    ${mc.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?F`
                    justify-content: left;
                    padding-left: ${gc["spacing-8"]};
                `:F`
                    justify-content: right;
                    padding-right: ${gc["spacing-8"]};
                `}

        svg {
            color: ${cc.icon};
        }
    }
`,mH=g(((r,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=r,g=dt(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[p,f]=a("left"===c||"both"===c),[m,v]=a("right"===c||"both"===c),y=o(null),x=o(null),w=lg($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(v(!1),f(!1))}function C(){$(),h&&h({content:x.current,wrapper:y.current})}dn({onResize:C,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){C()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(hH,Object.assign({ref:y},g,{children:[e(pH,{ref:x,children:s}),(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[p&&e(gH,{$backgroundColor:r.left,$position:"left",$showIndicator:d,"data-id":"left-fade",children:d&&e(fH,{$position:"left","data-id":"left-fade-indicator-button",children:e(be,{})})}),m&&e(gH,{$backgroundColor:r.right,$position:"right",$showIndicator:d,"data-id":"right-fade",children:d&&e(fH,{$position:"right","data-id":"right-fade-indicator-button",children:e(me,{})})})]})})()]}))})),bH=M.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return F`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${hc["width-040"]} ${hc.solid}
                        ${cc.border};
                }
            `}}
`,vH=M.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: ${hc["width-040"]} ${hc.solid} ${cc.border};

    ${e=>{if(e.$active)return F`
                border-color: ${cc["border-primary"]};
            `}}

    ${mc.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,yH=M.button`
    position: relative;
    padding: ${gc["spacing-16"]} ${gc["spacing-16"]}
        ${gc["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,xH=M(Ec.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${cc["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return F`
                opacity: 0;
            `}}
`,wH=M(Ec.BodyBL)`
    color: ${cc["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return F`
                opacity: 1;
            `}}
`,$H=M(mH)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${gc["spacing-4"]};
    }
`,CH=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=f(uH),d=A(),u=fc["md-max"]({theme:d}),h=Od.useMediaQuery({maxWidth:u}),g=fc["lg-max"]({theme:d}),p=o(null),m=e=>t=>{t.preventDefault(),n||s(e),i&&i(c[e].title,e)},b=e=>h&&e.length>20?`${e.substring(0,20)}...`:e;return e($H,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=g&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":r,children:e(bH,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((n,i)=>{const o=l===i;return e(vH,{role:"none",$active:o,ref:o?p:null,children:t(yH,{role:"tab",type:"button","aria-selected":o,onClick:m(i),"data-testid":`${r}-link-${i}`,children:[e(xH,{$active:o,weight:"regular",children:b(n.title)}),e(wH,{$active:o,weight:"semibold","aria-hidden":"true",children:b(n.title)})]})},i)}))})})},SH=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,kH=Object.assign((n=>{var{children:r,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=n,h=dt(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[g,p]=a(i||o),[f,m]=a([]);u((()=>{const e=S.toArray(r).filter(Boolean);b(e)}),[r]),u((()=>{"number"==typeof i&&p(i)}),[i]);const b=e=>{const t=e.map((e=>({title:e.props.title})));m(t)};return e(SH,Object.assign({"data-testid":l},h,{children:t(uH.Provider,{value:{tabLinks:f,currentActiveIndex:g,setCurrentActiveIndex:p},children:[e(CH,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),S.toArray(r).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]})}))}),{Item:t=>{var{index:n,children:r}=t,i=dt(t,["index","children"]);const{currentActiveIndex:o}=f(uH);return o===n?e("div",Object.assign({role:"tabpanel"},i,{children:r})):null}}),DH=M.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${dc["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,i,o;if("solid"===e.$type)switch(r=cc["text-inverse"],e.$color){case"grey":t=cc["bg-inverse-subtler"],i=cc["bg-inverse-hover"];break;case"green":t=cc["bg-success-strong"],i=cc["bg-success-strong-hover"];break;case"yellow":t=cc["bg-warning-strong"],i=cc["bg-warning-strong-hover"];break;case"red":t=cc["bg-error-strong"],i=cc["bg-error-strong-hover"];break;case"blue":t=cc["bg-info-strong"],i=cc["bg-info-strong-hover"];break;default:t=cc["bg-inverse"],i=cc["bg-inverse-hover"]}else switch(e.$color){case"grey":t=cc["bg-strong"],n=cc["border-strong"],r=cc["text-subtle"],i=cc["bg-hover-neutral-strong"];break;case"green":t=cc["bg-success"],n=cc["border-success"],r=cc["text-success"],i=cc["bg-success-hover"];break;case"yellow":t=cc["bg-warning"],n=cc["border-warning"],r=cc["text-warning"],i=cc["bg-warning-hover"];break;case"red":t=cc["bg-error"],n=cc["border-error"],r=cc["text-error"],i=cc["bg-error-hover"];break;case"blue":t=cc["bg-info"],n=cc["border-info"],r=cc["text-info"],i=cc["bg-info-hover"];break;default:t=cc.bg,n=cc.border,r=cc.text,i=cc["bg-hover-neutral"]}return F`
            background: ${t};
            border: ${hc["width-010"]} ${hc.solid} ${n};
            color: ${r};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${mc.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return F`
                    ${dc["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,TH=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,OH=n=>{var{type:r,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=n,c=dt(n,["type","colorType","children","interactive","icon","iconPosition"]);return t(DH,Object.assign({as:a?"button":"div",$type:r,$color:i,$interactive:a},c,{children:["left"===l&&s,e(TH,{children:o}),"right"===l&&s]}))};var EH;Vd.extend(Ud),function(e){e.formatHourlyDisplay=e=>Vd(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>lu.getTimeDiffInMinutes(e,t)/15*(n/2)}(EH||(EH={}));const _H=1.25,MH=e=>"minified"===e?12:40,FH=e=>"minified"===e?12:40,IH=M.div`
    position: relative;
    display: flex;
    align-items: center;
`,AH=M(Sc)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${cc.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${cc.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?F`
                  right: 0;
              `:F`
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
`,BH=M(me)`
    width: 1rem;
    height: 1rem;
    color: ${cc["icon-primary"]};
`,jH=M(be)`
    font-size: 1rem;
    color: ${cc["icon-primary"]};
`,zH=M.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+FH(e)}px`};
`,RH=M.div`
    position: relative;
    white-space: nowrap;
    height: ${_H}rem;
`,PH=M.div`
    display: flex;
    white-space: nowrap;
`,LH=M.div`
    display: inline-block;
    width: ${({$variant:e})=>`${MH(e)}px`};
    position: relative;
    border-left: ${hc["width-010"]} ${hc.solid}
        ${cc["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?_H:.625;break;case"minified":t=e.$isLongMarker?_H:0;break;default:t=0}return F`
            height: ${t}rem;
        `}}
`,NH=M(Ec.BodyXS)`
    color: ${cc["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,HH=M.div`
    ${e=>"vertical"===e.$type?F`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:F`
                position: absolute;
                height: ${FH(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&F`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||cc["bg-strongest"]} 0px,
                ${e.$bgColor2||cc["bg-strongest"]} 10px,
                ${e.$bgColor||cc["bg-stronger"]} 10px,
                ${e.$bgColor||cc["bg-stronger"]} 20px
            );
        `}
`,WH=M.div`
    position: absolute;
    top: ${_H}rem;
    height: ${({$variant:e})=>`${FH(e)}px`};
    z-index: 1;
    border-right: ${hc["width-010"]} ${hc.solid}
        ${cc["border-stronger"]};
`,VH=M(Ec.BodyXS)`
    color: ${e=>e.$color||cc.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,YH=({"data-testid":r,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:g,styleAttributes:p})=>{const f=o(null),[m,b]=a(0),[v,y]=a(0),x=MH(s),w=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{f.current&&b(f.current.scrollLeft)},C=e=>{f.current&&f.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};dn({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,k=e=>{if(r)return`${r}-${e}`},D=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return t(IH,{className:i,children:[t(zH,{"data-testid":r,ref:f,$variant:s,children:[e(RH,{"data-testid":k("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],n=Vd(l,"HH:mm"),r=Vd(c,"HH:mm"),i=n.hour()%2==0;for(let o=n;o.isBefore(r);o=o.add(30,"minute")){const n=D(o,i,s);t.push(e(LH,{$isLongMarker:n,$variant:s,children:n&&e(NH,{weight:"semibold",children:EH.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),t(PH,{"data-testid":k("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!p)return;const{backgroundColor:r,backgroundColor2:i,styleType:o="default"}=p,a=EH.calculateWidth(l,c,x),d=!!g&&"default"===s;return t(n,{children:[e(WH,{$variant:s}),e(HH,{"data-testid":k("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:r,$bgColor2:i,$clickable:d,onClick:d?g:void 0},"default-timeslot")]})})(),d.map((n=>{const{id:r,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=n,{color:g,styleType:p="default",backgroundColor:f,backgroundColor2:m}=u,b=EH.calculateWidth(i,o,x),v=EH.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(WH,{$variant:s,style:{left:`${v}px`}}),e(HH,{"data-testid":k(`${r}-timeslot`),$width:b,$left:v,$styleType:p,$variant:s,$bgColor:f,$bgColor2:m,$clickable:y,onClick:()=>y&&h(n),children:a&&"default"===s&&e(VH,{$slotWidth:b,$color:g,weight:"semibold",children:S(b)?"...":a})}),c!==o&&e(WH,{$variant:s,style:{left:`${v+b}px`}})]},r)}))]})]}),e(n,{children:m>0&&e(AH,{"data-testid":k("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("left")},children:e(jH,{})})}),m+v<EH.calculateWidth(l,c,x)?e(AH,{"data-testid":k("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("right")},children:e(BH,{})}):e(n,{})]})},UH=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${gc["spacing-8"]};
    flex: 1;
`,KH=M(Ec.BodyXS)`
    ${e=>e.$disabled&&F`
            color: ${cc["text-disabled-subtlest"]};
        `}
`,XH=M.div`
    grid-column: 2 / -1;
    display: flex;
`,qH=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${gc["spacing-4"]};
`,GH=M(Vo.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,ZH=M.div`
    display: flex;
    gap: ${gc["spacing-4"]};
    transition: all ${uc["duration-250"]} ${uc["ease-default"]};
    overflow: hidden;
`,QH=M.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${gc["spacing-4"]};
    width: 1.375rem;
    transition: all ${uc["duration-250"]} ${uc["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,JH=M.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,eW=M.div`
    ${dc["body-xs-bold"]}
    color: ${cc["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${dc.Spec["body-size-sm"]};
    }
`,tW=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${gc["spacing-4"]};
`,nW=M.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${gc["spacing-8"]};
`,rW=M(Jc.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${gc["spacing-8"]};
    }
`,iW=M(le)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${uc["duration-250"]} ${uc["ease-default"]};
`,oW=M(HH)`
    ${e=>{if("vertical"===e.$type)return F`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${pc.xs};
            `}}

    ${e=>e.$halfFill?F`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${cc["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||cc["bg-strongest"]} 0px,\n                            ${e.$bgColor2||cc["bg-strongest"]} 10px,\n                            ${e.$bgColor||cc["bg-stronger"]} 10px,\n                            ${e.$bgColor||cc["bg-stronger"]} 20px\n                        )`};
            `:F`
                background-color: ${e.$bgColor};
            `}
`;var aW=pa;var sW=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var o=e[r],a=t(o);if(null!=a&&(void 0===s?a==a&&!aW(a):n(a,s)))var s=a,l=o}return l};var lW=sW,cW=bk,dW=function(e,t){return e<t};var uW=Uo((function(e,t){return e&&e.length?lW(e,cW(t),dW):void 0}));var hW=sW,gW=function(e,t){return e>t},pW=bk;var fW=Uo((function(e,t){return e&&e.length?hW(e,pW(t),gW):void 0}));const mW=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:g=30,variant:p="flexible",enableSelection:f=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[C,S]=a(!1),[k,D]=a(),T=m((()=>nu.generateDaysForCurrentWeek(n)),[n]),O=Object.values(null!=h?h:{}).flat(),E=null!==(y=null!=c?c:null===(v=uW(O,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",_=null!==(w=null!=d?d:null===(x=fW(O,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",M=Math.ceil(lu.getTimeDiffInMinutes(E,_)/g),{height:F=0,ref:I}=dn(),A=u?F<u||C?F:u:F,B=Do({height:A}),j=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,n])=>{const r=function(e){const t=Array(M).fill({});return e.forEach((e=>{const n=Math.max(0,lu.getTimeDiffInMinutes(E,e.startTime)/g),r=Math.min(M,lu.getTimeDiffInMinutes(E,e.endTime)/g),i=Math.ceil(r)-Math.floor(n);switch(p){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let o=0;o<i;o++){const a=lu.addMinutesToTime(E,Math.floor(n+o)*g),s=lu.addMinutesToTime(a,g);let l;eF(t[Math.floor(n+o)])?0===o&&n%1!=0?l="top":o===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let o=0;switch(p){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return eF(t)&&eF(n)?e:[...e,t]}),[{}]);o<e.length;){if(eF(e[o])){const a=null!==(n=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:E,s=null!==(i=null===(r=e[o+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:_;if(a!==s){const t=lu.getTimeDiffInMinutes(a,s)/g;e[o]=Object.assign(Object.assign({},N(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)eF(e[o])?(e[o]=N(o),o++):o+=e[o].cellLength}return e.filter((e=>!eF(e)&&e.cellLength>0))}(r)})),e}return{}}),[h]),z=e=>{D(e)},R=()=>{D(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},L=e=>{var t;const n=nu.isWithinRange(e,s?Vd(s):void 0,l?Vd(l):void 0),i=null!==(t=r&&r.includes(e.format($)))&&void 0!==t&&t;return!n||i};function N(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:cc["bg-stronger"]},cellLength:t}}return t(qH,{children:[e(XH,{children:T.map(((t,n)=>{const r=(e=>{const t=e.format($),n=L(e),r={},o=f&&!n;n&&(r.disabled=!0),r.interactive=f?o:null;const a=o&&k&&e.isSame(k,"day"),s=[i].includes(t);return s&&a?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):s?(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"):a&&(r.labelType="hover",r.circleLeft="hover-subtle",r.circleRight="hover-subtle"),r})(t);return e(ph,Object.assign({date:t,calendarDate:Vd(i),onSelect:()=>{((e,t)=>{!t&&f&&o(e)})(t,!r.interactive)},onHover:z,onHoverEnd:R},r),`day-${n}`)}))}),e(XH,{children:T.map(((t,n)=>e(UH,{children:e(KH,{weight:"semibold",$disabled:L(t),children:Vd(t).format("ddd")})},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=Vd(E,"HH:mm").add(4*e*g,"minutes"),r=n.format("h"),i=n.format("mm"),o=n.format("a");let a=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(QH,{$height:A,children:Array(Math.ceil(M/4)).fill(void 0).map(((t,r)=>e(JH,{children:e(eW,{children:n(r)})},`time-${r}`)))})})(),e(GH,{style:B,children:e(ZH,{ref:I,children:T.map(((t,n)=>{var r;const i=t.format($),o=null!==(r=j[i])&&void 0!==r?r:Array("flexible"===p?M:1).fill(void 0).map(((e,t)=>N(t,"fixed"===p?M:void 0)));return e(tW,{children:o.map((t=>{const{id:n,clickable:r=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e(oW,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===p?12*a+4*(a-1):12,onClick:()=>r&&((e,t)=>{b&&b(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))},`week-cell-${n.format($)}`)}),(()=>{if(u&&I.current&&!(F&&F<u))return e(nW,{children:t(rW,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P,children:[e(iW,{$isExpanded:C}),(C?"Hide":"Show")+" later times"]})})})()]})},bW=M.div`
    --header-bottom-spacing: 0.5rem;

    ${mc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,vW="YYYY-MM-DD",yW=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=dt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,C]=a(s),S=o(null),k=o(void 0);u((()=>{C(s)}),[s]);const D=e=>{const t=e.format(vW);C(t),i&&i(t)},T=(e,t)=>{y&&y(e,t)},O=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(vW),lastDayOfWeek:e.endOf("week").format(vW)},month:e.month()+1,year:e.year()};r(t)}};return e(bW,Object.assign({},w,{children:e(eh,{ref:S,dynamicHeight:!0,initialCalendarDate:lu.toDayjs($||x).endOf("week").format(vW),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Vd(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Vd(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"week")||O(e),k.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Vd(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Vd(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e(mW,{calendarDate:t,disabledDates:n,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:D,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:T}))(t)})}))},xW=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,wW=M.div`
    ${dc["body-xs-semibold"]}
    color:${cc.text};

    ${e=>e.$disabled&&F`
            color: ${cc["text-disabled-subtlest"]};
        `};
`,$W=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,CW=M.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,SW=M.div`
    ${dc["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${cc.text};
    span {
        display: block;
    }
`,kW=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Vd.extend(Xd);const DW="YYYY-MM-DD",TW={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:cc["bg-stronger"],backgroundColor2:cc["bg-strongest"]}},OW=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=m((()=>nu.generateDaysForCurrentWeek(n)),[n]),[g,p]=a(),f=e=>{p(e)},b=()=>{p(void 0)},v=e=>{const t=e.format(DW),n=(e=>{const t=nu.isWithinRange(e,s?Vd(s):void 0,l?Vd(l):void 0),n=!!r&&r.includes(e.format(DW));return!t||n})(e),o=d&&!n,a=o&&g&&e.isSame(g,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return n&&(u.disabled=!0,u.labelType="unavailable"),c&&a?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):a&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return t($W,{children:[h.map(((n,r)=>{const a=v(n);return t(xW,{children:[e(ph,Object.assign({date:n,calendarDate:Vd(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(n,!a.interactive)},onHover:f,onHoverEnd:b},a),`day-${r}`),e(wW,{$disabled:a.disabled,children:Vd(n).format("ddd")})]},`week-day-${r}`)})),e(CW,{children:h.map(((n,r)=>{const i=n.format(DW),o=c&&(c[i]?c[i]:[TW]);return e(kW,{children:o&&o.map((n=>{const{id:r,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=n,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:g}=l;return e(HH,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,t)=>{null==u||u(e,t)})(i,n),children:t(SW,{style:{color:c},children:[e("span",{children:nu.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:nu.convertTo12HourFormat(a)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${n.format(DW)}`)]})},EW=M.div`
    --header-bottom-spacing: 0.5rem;

    ${mc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,_W="YYYY-MM-DD",MW=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:p,currentCalendarDate:f}=t,m=dt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(null),x=o(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(_W);v(t),i&&i(t)},$=(e,t)=>{p&&p(e,t)},C=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(_W),lastDayOfWeek:e.endOf("week").format(_W)},month:e.month()+1,year:e.year()};r(t)}};return e(EW,Object.assign({},m,{children:e(eh,{ref:y,dynamicHeight:!0,initialCalendarDate:lu.toDayjs(b||f).endOf("week").format(_W),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Vd(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Vd(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||C(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Vd(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Vd(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e(OW,{calendarDate:t,disabledDates:n,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:g,onSlotClick:$})})}))},FW=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return F`
                    border: 4px solid ${cc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return F`
                    border: 4px solid ${cc["icon-subtle"]};
                `;case"disabled":return F`
                    background-color: ${cc["icon-disabled-subtle"]};
                `;case"completed":return F`
                    background-color: ${cc["icon-success"]};
                    svg {
                        color: ${cc["icon-inverse"]};
                    }
                `;case"error":return F`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${cc["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,IW=M.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return F`
                    background-color: ${cc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return F`
                    background-color: ${cc["icon-subtle"]};
                `;case"disabled":return F`
                    background-color: ${cc["icon-disabled-subtle"]};
                `;case"completed":return F`
                    background-color: ${cc["icon-success"]};
                `;case"error":return F`
                    margin-left: -0.15rem;
                    background-color: ${cc["icon-error"]};
                `}}}
`,AW=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,BW=M.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${mc.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${mc.MaxWidth.sm} {
        grid-column: span 8;
    }
`,jW=M(Ec.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${mc.MaxWidth.md} {
        margin-bottom: 1.5rem;
    }
`,zW=M(Ec.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,RW=M.div`
    display: flex;

    :last-of-type ${IW} {
        margin-bottom: 0;
    }
`,PW=M.div`
    margin-bottom: 2rem;
    width: 100%;
`,LW=M.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,NW=M(XP)`
    padding: 0.125rem 0.5rem;
`,HW=({items:r,className:i,id:o,title:a,startCol:s,colSpan:l,"data-base-indicator-testid":c,"data-testid":d="timeline"})=>{const u=t=>"string"==typeof t?e(Ec.BodyMD,{className:"timeline-item-content-text",children:t}):e(n,{children:t}),h=t=>"string"==typeof t?e(zW,{weight:"semibold",className:"timeline-item-title",children:t}):e(n,{children:t}),g=e=>e.slice(0,2).map(((e,t)=>k(NW,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e(de,{});case"error":return e(ce,{});default:return null}};return t(BW,{className:i,id:o,"data-testid":d,$startCol:s,$colSpan:l,children:[e(jW,{"data-testid":"timeline-title",weight:"bold",children:a}),r.map(((n,r)=>{const{title:i,content:o,statuses:a,variant:s}=n,l=s||(0===r?"current":"upcoming-active");return t(RW,{children:[t(AW,{children:[e(FW,{"data-testid":c?`circleindicator${r+1}_div_${c}`:"circleindicator",$variant:l,children:p(l)}),e(IW,{$variant:l})]}),t(PW,{className:"timeline-item-content",children:[h(i),a&&e(LW,{children:g(a)}),u(o)]})]},`timeline-item-${r}`)}))]})},WW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],VW=252,YW=I`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,UW=M(Xp)`
    color: ${cc.icon};
    svg {
        ${e=>{if(e.$loading)return F`
                    animation: ${YW} 4s linear infinite;
                `}}
    }
`,KW=M.div`
    display: flex;
    padding-bottom: ${gc["spacing-16"]};
    justify-content: space-between;
    gap: ${gc["spacing-8"]};
`,XW=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${gc["spacing-8"]};
`,qW=M(Ec.BodySM)`
    color: ${cc["text-subtler"]};
`,GW=M(Qp)`
    width: 400px;
`,ZW=r=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=r,h=dt(r,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const g=()=>{a.current&&(a.current.scrollTop=0)},p=()=>{d&&(g(),d())};return t(KW,{children:[e(GW,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{g(),c(e)},onLeftArrowClick:e=>{g(),l(e)},onCalendarDateSelect:u})),void 0===s?e(n,{}):t(XW,{children:[t(qW,{"data-testid":"timetable-records-results",weight:"semibold",children:[s," results found"]}),d&&e(UW,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:p,$loading:o,children:e(ue,{})})]})]})},QW=M.div`
    display: flex;
    width: 100%;
`,JW=M.div`
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
    ${e=>{if(e.$isOnTheHour)return F`
                box-shadow: inset -0.5px 0px ${cc["border-primary"]};
            `}}
`,eV=M.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,tV=M.div`
    width: 2px;
    height: 100%;
`,nV=M.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${pc.sm};
    box-sizing: border-box;
    padding: ${gc["spacing-4"]};
    ${({$status:e,$bgColour:t,$isClickable:n})=>{switch(e){case"blocked":return F`
                    background: repeating-linear-gradient(
                        135deg,
                        ${cc["bg-stronger"]} 0px 6px,
                        ${cc["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;case"filled":return F`
                    background: ${t};
                    &:hover {
                        cursor: ${n?"pointer":"default"};
                    }
                `;case"disabled":return F`
                    background: ${cc["bg-disabled"]};
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;default:return F`
                    &:hover {
                        background-color: ${n?cc["bg-hover-subtle"]:""};
                        cursor: ${n?"pointer":"default"};
                    }
                `}}}
`,rV=M(Ec.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,iV=M(Ec.BodyXS)`
    color: ${cc["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,oV=({containerRef:t,children:n,customPopover:r})=>{if(!r)return n;const i={position:"bottom-start",rootNode:t,customOffset:r.offset,children:n,trigger:r.trigger,delay:r.delay,popoverContent:r.content};return e(hw,Object.assign({},i))},aV=i.memo((({id:n,startTime:r,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,onClick:h})=>{const g=0===Vd(i,"HH:mm").get("minutes"),p=lu.getTimeDiffInMinutes(r,i)/15*l-2,f=!!h||u&&"click"===u.trigger;return e(oV,{containerRef:d,customPopover:u,children:e(JW,{"data-testid":"block-container",$isOnTheHour:g,children:t(eV,{children:[t(nV,{$width:p,$status:s,$bgColour:c,$isClickable:f,onClick:e=>{h&&h({id:n,startTime:r,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)},children:[o&&e(rV,{weight:"semibold",children:o}),a&&e(iV,{weight:"bold",children:a})]}),e(tV,{})]})},"block-container-key")})})),sV=({id:t,timetableMinTime:n,timetableMaxTime:r,rowMinTime:i=n,rowMaxTime:o=r,rowCells:a,rowBarColor:s,intervalWidth:l,containerRef:c,outOfRangeCellPopover:d})=>{const u=m((()=>{const e=[];Vd(n,"HH:mm").isBefore(Vd(i,"HH:mm"))&&e.push({id:t,startTime:n,endTime:i,status:"blocked",customPopover:d});const s=[...a].sort(((e,t)=>{const n=Vd(e.startTime,"HH:mm"),r=Vd(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));return s.forEach(((n,r)=>{var i;const{endTime:s}=n;e.push(n);const l=Vd((null===(i=a[r+1])||void 0===i?void 0:i.startTime)||o,"HH:mm");let c=Vd(s,"HH:mm");for(;c.isBefore(l);)if(d=l,c.get("hour")!=d.get("hour")){const n=c.add(1,"hour").startOf("hour");e.push({id:t,startTime:c.format("HH:mm").toString(),endTime:n.format("HH:mm").toString(),status:"disabled"}),c=n}else e.push({id:t,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var d})),Vd(r,"HH:mm").isAfter(Vd(o,"HH:mm"))&&e.push({id:t,startTime:o,endTime:r,status:"blocked",customPopover:d}),e}),[t,n,r,i,o,a,d]);return e(QW,{"data-testid":"timetable-row",children:u.map(((t,n)=>e(aV,Object.assign({},t,{intervalWidth:l,rowBarColor:s,containerRef:c}),`${n}-row-cell-key`)))})},lV=M.div``,cV=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${VW}px auto;
`,dV=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${VW}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return F`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,uV=M.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${cc.bg};
    width: ${VW}px;
    z-index: 2;
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?F`
                box-shadow: 2px 2px 8px
                    rgb(from ${cc.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:F`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,hV=M.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${cc.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,gV=M.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${cc.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return F`
                box-shadow: 2px 2px 8px
                    rgb(from ${cc.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,pV=M.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${gc["spacing-4"]};
`,fV=M(Ec.BodySM)`
    color: ${cc["text-subtler"]};
`,mV=M.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,bV=M.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${cc.bg};
    width: ${VW}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${gc["spacing-16"]} 0 ${gc["spacing-32"]};
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
    border-left: ${hc["width-010"]} ${hc.solid}
        ${cc["border-primary"]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?F`
                box-shadow: 2px 2px 8px
                    rgb(from ${cc.Primitive["neutral-20"]} r g b / 25%);
            `:F`
                box-shadow: inset -0.5px 0px ${cc["border-primary"]};
            `};
`,vV=M(Ec.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${cc["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,yV=M(Ec.BodyXS)`
    display: inline-flex;
    gap: ${gc["spacing-4"]};
    align-items: center;
    color: ${cc["text-subtler"]};
    ${e=>{if(!e.$show)return F`
                display: none;
            `}}
`,xV=M(Cd)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,wV=M(Vg)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${gc["spacing-72"]} 0;
`,$V=M.div`
    display: flex;
    border-bottom: ${hc["width-010"]} ${hc.solid} ${cc.border};
`,CV=M.div`
    border-right: ${hc["width-005"]} ${hc.solid}
        ${cc["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${gc["spacing-20"]} ${gc["spacing-12"]};
`,SV=I`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,kV=M.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${cc.Primitive["neutral-95"]} 8%,
        ${cc.Primitive["neutral-100"]} 18%,
        ${cc.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${SV} 1.5s forwards infinite;
`,DV=M(hw)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,TV=r=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=r,C=dt(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=C["data-testid"]||"timetable",D=sg.roundToNearestHour(d),T=sg.roundToNearestHour(h,!0),O=sg.generateHourlyIntervals(D,T),E=0===f||ID.isEmpty(l),_=E||l.length===f,M=o(null),F=o(null),[I,A]=a(!1),[B,j]=a(!1),[z,R]=a(0),[P,L]=a(!1);u((()=>{const e=ID.throttle((()=>{if(M.current&&(A(M.current.scrollLeft>0),j(M.current.scrollTop>0)),P||!M.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=M.current;Math.ceil(e+t)>=n-1&&!_&&v&&!c&&(L(!0),v())}),100),t=M.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[_,P,c,v]),u((()=>{L(!1)}),[l]);dn({onResize:()=>{if(M.current){const e=Math.ceil(60*O.length/15),t=(M.current.clientWidth-VW)/e;R(t>21?t:21)}},targetRef:M,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=WW.length;return()=>{const n=WW[e];return e=(e+1)%t,n}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(bV,{$isScrolled:I,children:e(kV,{})})},V=()=>{if(!c&&P)return e($V,{"data-testid":"lazy-loader",children:O.map(((t,n)=>e(CV,{$width:4*z,children:e(kV,{})},`lazy-load-cell-${n}`)))})};return t(lV,E?Object.assign({},C,{"data-testid":S,children:[e(ZW,{selectedDate:i,loading:c||P,tableContainerRef:M,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(cV,{className:"empty-container",children:c?e(xV,{$isEmptyContent:E}):e(wV,{type:"no-item-found",description:s})})]}):Object.assign({},C,{"data-testid":S,children:[e(ZW,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:M,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(dV,{"data-id":"timetable-container","data-testid":"timetable-container",ref:M,$loading:c,$allRecordsLoaded:_||!v,children:[e(uV,{$isScrolledY:B,$isScrolledX:I}),e(hV,{$numOfRows:l.length,$isScrolled:I,"data-testid":"row-header-column-id",children:t(n,{children:[l.map(((n,r)=>e(H,{wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const n={position:"bottom-start",rootNode:M,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return k(DV,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(n,e),children:t(bV,{$isScrolled:I,children:[e(vV,{$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`,children:n.name}),e(yV,{weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`,children:n.subtitle})]},`${n.id}-row-header`)},r))),W()]})}),e(gV,{$numOfColumns:O.length,$isScrolled:B,children:O.map((t=>e(pV,{"data-testid":`${t}-column`,children:e(fV,{weight:"semibold",children:t})},`${t}-column-key`)))}),c?e(xV,{$isEmptyContent:E}):t(mV,{"data-testid":"content-container-id",ref:F,$numOfRows:l.length,children:[l.map(((t,n)=>e(sV,Object.assign({timetableMinTime:D,timetableMaxTime:T,rowBarColor:N(),intervalWidth:z,containerRef:F},t),`${n}-row-bar`))),V()]})]})]}))},OV=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:cc[t.Background],Border:cc[t.Border],Text:cc[t.Text],Icon:cc[t.Icon]}},EV=M(Vo.div)`
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

    ${mc.MaxWidth.lg} {
        left: 0;
    }

    ${e=>F`
            background: ${OV(e).Background};
            border: 1px solid ${OV(e).Border};
            color: ${OV(e).Text};
        `};
`,_V=M.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${mc.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,MV=M.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>F`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${OV(e).Icon};
            }
        `};
`,FV=M.div`
    display: flex;
    flex-direction: column;
`,IV=M(Ec.HeadingXS)`
    display: flex;

    ${e=>F`
            color: ${OV(e).Text};
        `}
`,AV=M.div`
    ${e=>F`
            p {
                color: ${OV(e).Text};
            }
        `}
`,BV=M(Jc.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${mc.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,jV=M(Sc)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>F`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${OV(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${mc.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,zV=4e3,RV=n=>{var{type:r="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=zV,onDismiss:d,fixed:h=!0,actionButton:g}=n,p=dt(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,m]=a(!1),b=A(),v=fc["lg-max"]({theme:b}),y=Od.useMediaQuery({maxWidth:v});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const x=Do({opacity:f?1:0,transform:f?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:Dr.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(EV,Object.assign({style:x,$type:r,$fixed:h},p,{children:[t(_V,{children:[t(MV,{$type:r,children:[(()=>{switch(r){case"success":return e(pe,{});case"warning":return e(ge,{});case"error":return e(ce,{});case"info":return e(he,{});default:return null}})(),t(FV,{children:[o&&(i.isValidElement(o)?o:e(IV,{$type:r,weight:"semibold",children:o})),s&&e(AV,{$type:r,children:i.isValidElement(s)?s:e(o?Ec.BodyMD:Ec.BodyBL,{children:s})})]})]}),g&&e(BV,{styleType:"light",onClick:g.onClick,children:g.label})]}),e(jV,{$type:r,onClick:()=>{m(!1)},children:e(J,{})})]}))},PV=M.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return F`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${ff.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return F`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${ff.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return F`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${ff.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return F`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${ff.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?F`
            visibility: "visible";
            opacity: 1;
            transition: ${bL.Base};
            z-index: 2;
        `:F`
            visibility: "hidden";
            opacity: 0;
            transition: ${bL.Base};
            z-index: -1;
        `}
`,LV=M(Eh)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,NV=M.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return F`
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
                        border-color: ${eL.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return F`
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
                        border-color: transparent ${eL.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return F`
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
                            ${eL.Neutral[8]};
                    }
                `;case"bottom":return F`
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
                            ${eL.Neutral[8]} transparent;
                    }
                `}}}
`,HV=M.div`
    position: relative;
`,WV=n=>{var{visible:r,position:i="top",children:s}=n,l=dt(n,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),g=o(null);u((()=>(f(),window.addEventListener("resize",rg(p,300)),()=>{window.removeEventListener("resize",rg(p,300))})),[]);const p=()=>{f()},f=()=>{if(g.current){const e=g.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(PV,Object.assign({position:d,"data-testid":c,visible:r,ref:g},l,{children:[e(LV,{children:"string"==typeof s?e(gL.BodySmall,{children:s}):s}),e(NV,{position:d})]}))},VV=(n,r)=>i=>{const{tooltipVisible:o,position:a}=i,s=dt(i,["tooltipVisible","position"]);return t(HV,{children:[e(n,Object.assign({},s)),e(WV,{visible:o,position:a,children:r.content})]})},YV=F`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${mc.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,UV=M(KB.Content)`
    background: ${({$background:e})=>e?cc["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,KV=M(Ec.HeadingSM)`
    margin-bottom: 1rem;
    ${YV}
`,XV=M(Ec.BodyBL)`
    margin-bottom: 2rem;
    ${YV}
`,qV=M.div`
    ${YV}
`,GV=M.ul`
    ${YV}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${mc.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${mc.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,ZV=i.forwardRef(((t,n)=>{var{stretch:r}=t,i=dt(t,["stretch"]);return e(GV,Object.assign({ref:n,$stretch:r},i))})),QV=M.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return F`
                    grid-column: auto / span 4;
                `;case"full":return F`
                    grid-column: auto / span 8;
                `}}}

    ${mc.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,JV=M.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${cc["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${dc.Spec["body-size-baseline"]};
        height: ${dc.Spec["body-size-baseline"]};
    }
`,eY=M.button`
    ${dc["body-baseline-regular"]}
    color: ${cc.text};
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
`,tY=M.span`
    color: ${cc["text-disabled"]};
`,nY=M(Kc)`
    margin-right: 0.5rem;
    color: ${cc["text-disabled"]};
`,rY=M(We)`
    color: ${cc["icon-warning"]};
    margin-right: 0.5rem;
    height: ${dc.Spec["body-size-baseline"]};
    width: ${dc.Spec["body-size-baseline"]};
`,iY=M.span`
    color: ${cc["text-warning"]};
`,oY=M.span`
    ${dc["body-baseline-semibold"]}
    color: ${cc.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,aY=M(gd)`
    margin-top: 0.5rem;
`,sY=({label:r,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:g,disableMaskUnmask:p,alert:f,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=a(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},C=()=>"string"!=typeof i?i:"masked"===x?uu.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:g,maskTransformer:m}):i,S=()=>{switch(l){case"fail":return t(n,{children:[e(rY,{}),e(iY,{children:"Error"}),e(oY,{children:"Try again?"})]});case"loading":return t(n,{children:[e(nY,{}),e(tY,{children:"Retrieving..."})]});default:return t(n,{children:[C(),e(JV,{children:"masked"===x?e(Ne,{"data-testid":"masked-icon"}):e(He,{"data-testid":"unmasked-icon"})})]})}};return t(QV,{$widthStyle:o,children:[e($w,{children:r}),"string"!=typeof i?i:x?p?e(Ec.BodyBL,{children:C()}):e(eY,{"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:S()}):e(Ec.BodyBL,{children:i}),f&&e(aY,Object.assign({sizeType:"small"},f))]})},lY=Object.assign((r=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:g,onTryAgain:p}=r,f=dt(r,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{g&&g(e)},v=e=>()=>{p&&p(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,n)=>e(sY,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),n)));return e(GV,{$stretch:u,children:t})}return null};return e(UV,Object.assign({$background:d},f,{type:"grid",children:c||t(n,{children:[o&&e(KV,{weight:"semibold",$stretch:u,children:o}),a&&e(XV,{$stretch:u,children:a}),s&&e(qV,{"data-id":"top-section",$stretch:u,children:s}),y(),l&&e(qV,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:ZV,Item:sY}),cY={collections:{base:{InputBoxShadow:F`
        inset 0 0 4px 0px ${eL.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 4px 0px ${eL.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${eL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:F`
        inset 0 0 3px 0px ${eL.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 3px 0px ${eL.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${eL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},dY=e=>t=>{var n,r;const i=(null===(n=t.theme)||void 0===n?void 0:n._v2)||t.theme,o=GP(cY,null==i?void 0:i[ZP.designTokenScheme]);return(null===(r=i.options)||void 0===r?void 0:r.designToken)?qP(o,e,i.options.designToken):qP(o,e)},uY={InputBoxShadow:dY("InputBoxShadow"),InputErrorBoxShadow:dY("InputErrorBoxShadow"),ElevationBoxShadow:dY("ElevationBoxShadow"),Table:{Header:dY("Table.Header"),Cell:{Primary:dY("Table.Cell.Primary"),Secondary:dY("Table.Cell.Secondary"),Selected:dY("Table.Cell.Selected"),Hover:dY("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:dY("Button.Danger.BackgroundColor"),Hover:dY("Button.Danger.Hover"),Primary:dY("Button.Danger.Primary"),Border:dY("Button.Danger.Border")}}},hY=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=dt(t,["children","data-testid","type","stretch"]);return e(gY,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),gY=M.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?F`
                padding: 0 3rem;
            `:F`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${ff.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${ff.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${ff.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return F`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${ff.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${ff.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return F`
                    display: flex;
                    flex-direction: column;
                `;default:return F`
                    display: flex;
                `}}}
`,pY=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=dt(t,["children","data-testid","stretch"]);return e(fY,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),fY=M.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?F`
                ${ff.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:F`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,mY=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=dt(t,["children","data-testid","className","type","stretch"]);return e(pY,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(hY,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:r})}))})),bY={Section:pY,Container:hY,Content:mY,ColDiv:vf};var vY;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(vY||(vY={}));const yY=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,xY=M.ol`
    ${e=>yY(e.bottomMargin)}
    margin-left: ${3}rem;

    ${ff.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>hL.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${eL.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return F`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return F`
                counter-reset: list ${t?n+1:n-1};
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
`,wY=M.ul`
    ${e=>yY(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>hL.getTextStyle(e.size,"regular")}
        color: ${eL.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,$Y={Ul:t=>{var{size:n="Body",children:r}=t,i=dt(t,["size","children"]);return e(wY,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=dt(t,["size","children"]);return e(xY,Object.assign({size:n},i,{children:r}))}},CY={[ZP.colorScheme]:"base",[ZP.textStyleScheme]:"base",[ZP.designTokenScheme]:"base",[ZP.resourceScheme]:"base"},SY={[ZP.colorScheme]:"bookingsg",[ZP.textStyleScheme]:"base",[ZP.designTokenScheme]:"base",[ZP.resourceScheme]:"bookingsg"},kY={[ZP.colorScheme]:"rbs",[ZP.textStyleScheme]:"base",[ZP.designTokenScheme]:"rbs",[ZP.resourceScheme]:"rbs"},DY={[ZP.colorScheme]:"mylegacy",[ZP.textStyleScheme]:"base",[ZP.designTokenScheme]:"base",[ZP.resourceScheme]:"mylegacy"},TY={[ZP.colorScheme]:"ccube",[ZP.textStyleScheme]:"base",[ZP.designTokenScheme]:"base",[ZP.resourceScheme]:"ccube"},OY={[ZP.colorScheme]:"oneservice",[ZP.textStyleScheme]:"oneservice",[ZP.designTokenScheme]:"base",[ZP.resourceScheme]:"base"};export{lR as $,id as A,Hd as B,cc as C,vp as D,cm as E,km as F,Lz as G,Qw as H,Xp as I,Hz as J,i$ as K,fd as L,vD as M,gF as N,mF as O,bF as P,LF as Q,Uw as R,am as S,NF as T,XF as U,eI as V,KB as W,rR as X,oR as Y,AD as Z,ut as _,sm as a,$Y as a$,dR as a0,Hf as a1,sP as a2,lP as a3,aP as a4,yP as a5,$P as a6,kP as a7,_P as a8,Df as a9,xc as aA,wc as aB,$c as aC,ZI as aD,YH as aE,yW as aF,MW as aG,HW as aH,JI as aI,TV as aJ,RV as aK,_I as aL,WV as aM,VV as aN,bL as aO,Ec as aP,lY as aQ,aA as aR,eL as aS,uY as aT,bY as aU,ff as aV,mf as aW,hL as aX,aL as aY,gL as aZ,vY as a_,VP as aa,IF as ab,XP as ac,SL as ad,CL as ae,dw as af,mw as ag,hw as ah,jF as ai,vN as aj,CN as ak,KF as al,VN as am,dH as an,kH as ao,OH as ap,dc as aq,uc as ar,hc as as,gc as at,pc as au,fc as av,mc as aw,bc as ax,vc as ay,yc as az,gd as b,CY as b0,SY as b1,kY as b2,DY as b3,TY as b4,OY as b5,ZP as b6,Yo as c,yd as d,Cd as e,Du as f,Ko as g,Jc as h,_u as i,Dh as j,Eh as k,Rh as l,Eg as m,Up as n,Qp as o,df as p,$f as q,Af as r,Vg as s,Mg as t,Zm as u,ZA as v,FB as w,oj as x,lA as y,Pz as z};
//# sourceMappingURL=index.53af5037.js.map
