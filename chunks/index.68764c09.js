import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as g,useCallback as p,useContext as f,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as C,Children as S,createElement as k}from"react";import D,{findDOMNode as T,unstable_batchedUpdates as E,createPortal as O}from"react-dom";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";import _,{css as I,keyframes as M,useTheme as A}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";import{ArrowRightIcon as j}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as z}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as L}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as N,SquareIcon as H,SquareFillIcon as W,SquareTickFillIcon as Y,MinusSquareFillIcon as V,ClockIcon as U,ArrowUpIcon as X,ArrowDownIcon as K,ArrowRightIcon as q,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as ne,MagnifierMinusIcon as re,ChevronLeftIcon as ie,ChevronRightIcon as oe,CircleIcon as ae,CircleDotIcon as se,ChevronUpIcon as le,ExclamationCircleFillIcon as ce,TickIcon as de,RefreshIcon as ue,ICircleFillIcon as he,ExclamationTriangleFillIcon as ge,TickCircleFillIcon as pe}from"@lifesg/react-icons";import{ChevronDownIcon as fe}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as me}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as be}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as ve,useFloating as ye,autoUpdate as xe,offset as we,flip as $e,shift as Ce,limitShift as Se,size as ke,useTransitionStyles as De,useClick as Te,useDismiss as Ee,useInteractions as Oe,FloatingPortal as Fe,FloatingFocusManager as _e,FloatingTree as Ie,useFloatingNodeId as Me,FloatingNode as Ae,useHover as Be}from"@floating-ui/react";import{CrossIcon as je}from"@lifesg/react-icons/cross";import{StarIcon as ze}from"@lifesg/react-icons/star";import{StarFillIcon as Re}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Pe}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Le}from"@lifesg/react-icons/magnifier";import{EyeIcon as Ne}from"@lifesg/react-icons/eye";import{EyeSlashIcon as He}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as We}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as Ye}from"@lifesg/react-icons/square";import{SquareFillIcon as Ve}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as Ue}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Xe}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ke}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as qe}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as Ge}from"@lifesg/react-icons/circle";import{CircleDotIcon as Ze}from"@lifesg/react-icons/circle-dot";import{BinIcon as Qe}from"@lifesg/react-icons/bin";import{PencilIcon as Je}from"@lifesg/react-icons/pencil";import{DragHandleIcon as et}from"@lifesg/react-icons/drag-handle";import{MinusIcon as tt}from"@lifesg/react-icons/minus";import{PlusIcon as nt}from"@lifesg/react-icons/plus";import{MenuIcon as rt}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as it}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as ot}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as at}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as st}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as lt}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as ct}from"@lifesg/react-icons/star-half";const dt=i.createContext(!1);function ut(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ht(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function gt(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function pt(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function ft(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var mt=function(e,t){return mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},mt(e,t)};var bt=function(){return bt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},bt.apply(this,arguments)};var vt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var yt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xt="object"==typeof vt&&vt&&vt.Object===Object&&vt,wt="object"==typeof self&&self&&self.Object===Object&&self,$t=xt||wt||Function("return this")(),Ct=$t,St=function(){return Ct.Date.now()},kt=/\s/;var Dt=function(e){for(var t=e.length;t--&&kt.test(e.charAt(t)););return t},Tt=/^\s+/;var Et=function(e){return e?e.slice(0,Dt(e)+1).replace(Tt,""):e},Ot=$t.Symbol,Ft=Ot,_t=Object.prototype,It=_t.hasOwnProperty,Mt=_t.toString,At=Ft?Ft.toStringTag:void 0;var Bt=function(e){var t=It.call(e,At),n=e[At];try{e[At]=void 0;var r=!0}catch(e){}var i=Mt.call(e);return r&&(t?e[At]=n:delete e[At]),i},jt=Object.prototype.toString;var zt=Bt,Rt=function(e){return jt.call(e)},Pt=Ot?Ot.toStringTag:void 0;var Lt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Pt&&Pt in Object(e)?zt(e):Rt(e)},Nt=function(e){return null!=e&&"object"==typeof e};var Ht=Et,Wt=yt,Yt=function(e){return"symbol"==typeof e||Nt(e)&&"[object Symbol]"==Lt(e)},Vt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,Xt=/^0o[0-7]+$/i,Kt=parseInt;var qt=yt,Gt=St,Zt=function(e){if("number"==typeof e)return e;if(Yt(e))return NaN;if(Wt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Wt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ht(e);var n=Ut.test(e);return n||Xt.test(e)?Kt(e.slice(2),n?2:8):Vt.test(e)?NaN:+e},Qt=Math.max,Jt=Math.min;var en=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function f(){var e=Gt();if(p(e))return m(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?Jt(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?g(e):(r=i=void 0,a)}function b(){var e=Gt(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Zt(t)||0,qt(n)&&(d=!!n.leading,o=(u="maxWait"in n)?Qt(Zt(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Gt())},b},tn=en,nn=yt;var rn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return nn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),tn(e,t,{leading:r,maxWait:t,trailing:i})},on=function(e,t,n,r){switch(t){case"debounce":return en(e,n,r);case"throttle":return rn(e,n,r);default:return e}},an=function(e){return"function"==typeof e},sn=function(){return"undefined"==typeof window},ln=function(e){return e instanceof Element||e instanceof HTMLDocument},cn=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&an(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!sn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(sn())return null;if(t)return document.querySelector(t);if(r&&ln(r))return r;if(n.targetRef&&ln(n.targetRef.current))return n.targetRef.current;var i=T(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=cn(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!sn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return an(t)?"renderProp":an(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,sn()||(n.resizeHandler=on(n.createResizeHandler,i,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}mt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){sn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(a,null)}}}(d);var dn=sn()?u:h;function un(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,p=e.observerOptions,f=e.onResize,m=o(n),b=o(null),v=null!=g?g:b,y=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return dn((function(){if(!sn()){var e=cn(f,$,d,h);y.current=on((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!sn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,d,h,f,p,v.current]),bt({ref:v},w)}var hn=Object.defineProperty,gn={};((e,t)=>{for(var n in t)hn(e,n,{get:t[n],enumerable:!0})})(gn,{assign:()=>Un,colors:()=>Wn,createStringInterpolator:()=>Pn,skipAnimation:()=>Yn,to:()=>Ln,willAdvance:()=>Vn});var pn=Fn(),fn=e=>Dn(e,pn),mn=Fn();fn.write=e=>Dn(e,mn);var bn=Fn();fn.onStart=e=>Dn(e,bn);var vn=Fn();fn.onFrame=e=>Dn(e,vn);var yn=Fn();fn.onFinish=e=>Dn(e,yn);var xn=[];fn.setTimeout=(e,t)=>{const n=fn.now()+t,r=()=>{const e=xn.findIndex((e=>e.cancel==r));~e&&xn.splice(e,1),Sn-=~e?1:0},i={time:n,handler:e,cancel:r};return xn.splice(wn(n),0,i),Sn+=1,Tn(),i};var wn=e=>~(~xn.findIndex((t=>t.time>e))||~xn.length);fn.cancel=e=>{bn.delete(e),vn.delete(e),yn.delete(e),pn.delete(e),mn.delete(e)},fn.sync=e=>{kn=!0,fn.batchedUpdates(e),kn=!1},fn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,fn.onStart(n)}return r.handler=e,r.cancel=()=>{bn.delete(n),t=null},r};var $n="undefined"!=typeof window?window.requestAnimationFrame:()=>{};fn.use=e=>$n=e,fn.now="undefined"!=typeof performance?()=>performance.now():Date.now,fn.batchedUpdates=e=>e(),fn.catch=console.error,fn.frameLoop="always",fn.advance=()=>{"demand"!==fn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):On()};var Cn=-1,Sn=0,kn=!1;function Dn(e,t){kn?(t.delete(e),e(0)):(t.add(e),Tn())}function Tn(){Cn<0&&(Cn=0,"demand"!==fn.frameLoop&&$n(En))}function En(){~Cn&&($n(En),fn.batchedUpdates(On))}function On(){const e=Cn;Cn=fn.now();const t=wn(Cn);t&&(_n(xn.splice(0,t),(e=>e.handler())),Sn-=t),Sn?(bn.flush(),pn.flush(e?Math.min(64,Cn-e):16.667),vn.flush(),mn.flush(),yn.flush()):Cn=-1}function Fn(){let e=new Set,t=e;return{add(n){Sn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Sn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Sn-=t.size,_n(t,(t=>t(n)&&e.add(t))),Sn+=e.size,t=e)}}}function _n(e,t){e.forEach((e=>{try{t(e)}catch(e){fn.catch(e)}}))}function In(){}var Mn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function An(e,t){if(Mn.arr(e)){if(!Mn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Bn=(e,t)=>e.forEach(t);function jn(e,t,n){if(Mn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var zn=e=>Mn.und(e)?[]:Mn.arr(e)?e:[e];function Rn(e,t){if(e.size){const n=Array.from(e);e.clear(),Bn(n,t)}}var Pn,Ln,Nn=(e,...t)=>Rn(e,(e=>e(...t))),Hn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Wn=null,Yn=!1,Vn=In,Un=e=>{e.to&&(Ln=e.to),e.now&&(fn.now=e.now),void 0!==e.colors&&(Wn=e.colors),null!=e.skipAnimation&&(Yn=e.skipAnimation),e.createStringInterpolator&&(Pn=e.createStringInterpolator),e.requestAnimationFrame&&fn.use(e.requestAnimationFrame),e.batchedUpdates&&(fn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Vn=e.willAdvance),e.frameLoop&&(fn.frameLoop=e.frameLoop)},Xn=new Set,Kn=[],qn=[],Gn=0,Zn={get idle(){return!Xn.size&&!Kn.length},start(e){Gn>e.priority?(Xn.add(e),fn.onStart(Qn)):(Jn(e),fn(tr))},advance:tr,sort(e){if(Gn)fn.onFrame((()=>Zn.sort(e)));else{const t=Kn.indexOf(e);~t&&(Kn.splice(t,1),er(e))}},clear(){Kn=[],Xn.clear()}};function Qn(){Xn.forEach(Jn),Xn.clear(),fn(tr)}function Jn(e){Kn.includes(e)||er(e)}function er(e){Kn.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Kn,(t=>t.priority>e.priority)),0,e)}function tr(e){const t=qn;for(let n=0;n<Kn.length;n++){const r=Kn[n];Gn=r.priority,r.idle||(Vn(r),r.advance(e),r.idle||t.push(r))}return Gn=0,(qn=Kn).length=0,(Kn=t).length>0}var nr="[-+]?\\d*\\.?\\d+",rr=nr+"%";function ir(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var or=new RegExp("rgb"+ir(nr,nr,nr)),ar=new RegExp("rgba"+ir(nr,nr,nr,nr)),sr=new RegExp("hsl"+ir(nr,rr,rr)),lr=new RegExp("hsla"+ir(nr,rr,rr,nr)),cr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,dr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ur=/^#([0-9a-fA-F]{6})$/,hr=/^#([0-9a-fA-F]{8})$/;function gr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function pr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=gr(i,r,e+1/3),a=gr(i,r,e),s=gr(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function fr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function mr(e){return(parseFloat(e)%360+360)%360/360}function br(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function vr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function yr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ur.exec(e))?parseInt(t[1]+"ff",16)>>>0:Wn&&void 0!==Wn[e]?Wn[e]:(t=or.exec(e))?(fr(t[1])<<24|fr(t[2])<<16|fr(t[3])<<8|255)>>>0:(t=ar.exec(e))?(fr(t[1])<<24|fr(t[2])<<16|fr(t[3])<<8|br(t[4]))>>>0:(t=cr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=hr.exec(e))?parseInt(t[1],16)>>>0:(t=dr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=sr.exec(e))?(255|pr(mr(t[1]),vr(t[2]),vr(t[3])))>>>0:(t=lr.exec(e))?(pr(mr(t[1]),vr(t[2]),vr(t[3]))|br(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var xr=(e,t,n)=>{if(Mn.fun(e))return e;if(Mn.arr(e))return xr({range:e,output:t,extrapolate:n});if(Mn.str(e.output[0]))return Pn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var wr=1.70158,$r=1.525*wr,Cr=wr+1,Sr=2*Math.PI/3,kr=2*Math.PI/4.5,Dr=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Tr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Cr*e*e*e-wr*e*e,easeOutBack:e=>1+Cr*Math.pow(e-1,3)+wr*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-$r)/2:(Math.pow(2*e-2,2)*(($r+1)*(2*e-2)+$r)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Sr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Sr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*kr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*kr)/2+1,easeInBounce:e=>1-Dr(1-e),easeOutBounce:Dr,easeInOutBounce:e=>e<.5?(1-Dr(1-2*e))/2:(1+Dr(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Er=Symbol.for("FluidValue.get"),Or=Symbol.for("FluidValue.observers"),Fr=e=>Boolean(e&&e[Er]),_r=e=>e&&e[Er]?e[Er]():e,Ir=e=>e[Or]||null;function Mr(e,t){const n=e[Or];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ar=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Br(this,e)}},Br=(e,t)=>Pr(e,Er,t);function jr(e,t){if(e[Er]){let n=e[Or];n||Pr(e,Or,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function zr(e,t){const n=e[Or];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Or]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Rr,Pr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Lr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Nr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Hr=new RegExp(`(${Lr.source})(%|[a-z]+)`,"i"),Wr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Yr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vr=e=>{const[t,n]=Ur(e);if(!t||Hn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Yr.test(n)?Vr(n):n||e},Ur=e=>{const t=Yr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Xr=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Kr=e=>{Rr||(Rr=Wn?new RegExp(`(${Object.keys(Wn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>_r(e).replace(Yr,Vr).replace(Nr,yr).replace(Rr,yr))),n=t.map((e=>e.match(Lr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>xr({...e,output:t})));return e=>{const n=!Hr.test(t[0])&&t.find((e=>Hr.test(e)))?.replace(Lr,"");let r=0;return t[0].replace(Lr,(()=>`${i[r++](e)}${n||""}`)).replace(Wr,Xr)}},qr="react-spring: ",Gr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${qr}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Zr=Gr(console.warn);var Qr=Gr(console.warn);function Jr(e){return Mn.str(e)&&("#"==e[0]||/\d/.test(e)||!Hn()&&Yr.test(e)||e in(Wn||{}))}var ei=Hn()?u:h;function ti(){const e=a()[1],t=(()=>{const e=o(!1);return ei((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ni=e=>u(e,ri),ri=[];function ii(e){const t=o();return u((()=>{t.current=e})),t.current}var oi=Symbol.for("Animated:node"),ai=e=>e&&e[oi],si=(e,t)=>{return n=e,r=oi,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},li=e=>e&&e[oi]&&e[oi].getPayload(),ci=class{constructor(){si(this,this)}getPayload(){return this.payload||[]}},di=class extends ci{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Mn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new di(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ui=class extends di{constructor(e){super(0),this._string=null,this._toString=xr({output:[e,e]})}static create(e){return new ui(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=xr({output:[this.getValue(),e]})),this._value=0,super.reset()}},hi={dependencies:null},gi=class extends ci{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return jn(this.source,((n,r)=>{var i;(i=n)&&i[oi]===i?t[r]=n.getValue(e):Fr(n)?t[r]=_r(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Bn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return jn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){hi.dependencies&&Fr(e)&&hi.dependencies.add(e);const t=li(e);t&&Bn(t,(e=>this.add(e)))}},pi=class extends gi{constructor(e){super(e)}static create(e){return new pi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(fi)),!0)}};function fi(e){return(Jr(e)?ui:di).create(e)}function mi(e){const t=ai(e);return t?t.constructor:Mn.arr(e)?pi:Jr(e)?ui:di}var bi=(e,t)=>{const n=!Mn.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((i,a)=>{const s=o(null),l=n&&p((e=>{s.current=function(e,t){e&&(Mn.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const n=new Set;hi.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new gi(e),hi.dependencies=null,[e,n]}(i,t),h=ti(),g=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new vi(g,d),m=o();ei((()=>(m.current=f,Bn(d,(e=>jr(e,f))),()=>{m.current&&(Bn(m.current.deps,(e=>zr(e,m.current))),fn.cancel(m.current.update))}))),u(g,[]),ni((()=>()=>{const e=m.current;Bn(e.deps,(t=>zr(t,e)))}));const b=t.getComponentProps(c.getValue());return r.createElement(e,{...b,ref:l})}))},vi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&fn.write(this.update)}};var yi=Symbol.for("AnimatedComponent"),xi=e=>Mn.str(e)?e:e&&Mn.str(e.displayName)?e.displayName:Mn.fun(e)&&e.name||null;function wi(e,...t){return Mn.fun(e)?e(...t):e}var $i=(e,t)=>!0===e||!!(t&&e&&(Mn.fun(e)?e(t):zn(e).includes(t))),Ci=(e,t)=>Mn.obj(e)?t&&e[t]:e,Si=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ki=e=>e,Di=(e,t=ki)=>{let n=Ti;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Mn.und(n)||(r[i]=n)}return r},Ti=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ei={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Oi(e){const t=function(e){const t={};let n=0;if(jn(e,((e,r)=>{Ei[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return jn(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Fi(e){return e=_r(e),Mn.arr(e)?e.map(Fi):Jr(e)?gn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function _i(e){return Mn.fun(e)||Mn.arr(e)&&Mn.obj(e[0])}var Ii={tension:170,friction:26,mass:1,damping:1,easing:Tr.linear,clamp:!1},Mi=class{constructor(){this.velocity=0,Object.assign(this,Ii)}};function Ai(e,t){if(Mn.und(t.decay)){const n=!Mn.und(t.tension)||!Mn.und(t.friction);!n&&Mn.und(t.frequency)&&Mn.und(t.damping)&&Mn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Bi=[],ji=class{constructor(){this.changed=!1,this.values=Bi,this.toValues=null,this.fromValues=Bi,this.config=new Mi,this.immediate=!1}};function zi(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=$i(n.cancel??r?.cancel,t);if(d)g();else{Mn.und(n.pause)||(i.paused=$i(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||$i(e,t)),l=wi(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-fn.now()}function h(){l>0&&!gn.skipAnimation?(i.delayed=!0,c=fn.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(c)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...n,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Ri=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ni(e.get()):t.every((e=>e.noop))?Pi(e.get()):Li(e.get(),t.every((e=>e.finished))),Pi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Li=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ni=e=>({value:e,cancelled:!0,finished:!1});function Hi(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Di(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),g=e=>{const t=i<=(n.cancelId||0)&&Ni(r)||i!==n.asyncId&&Li(r,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Yi,a=new Vi;return(async()=>{if(gn.skipAnimation)throw Wi(n),a.result=Li(r,!1),u(a),a;g(o);const s=Mn.obj(e)?{...e}:{...t,to:e};s.parentId=i,jn(c,((e,t)=>{Mn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return g(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let f;if(gn.skipAnimation)return Wi(n),Li(r,!1);try{let t;t=Mn.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(d),h]),f=Li(r.get(),!0,!1)}catch(e){if(e instanceof Yi)f=e.result;else{if(!(e instanceof Vi))throw e;f=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Mn.fun(a)&&fn.batchedUpdates((()=>{a(f,r,r.item)})),f})():l}function Wi(e,t){Rn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Yi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Vi=class extends Error{constructor(){super("SkipAnimationSignal")}},Ui=e=>e instanceof Ki,Xi=1,Ki=class extends Ar{constructor(){super(...arguments),this.id=Xi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ai(this);return e&&e.getValue()}to(...e){return gn.to(this,e)}interpolate(...e){return Zr(`${qr}The "interpolate" function is deprecated in v9 (use "to" instead)`),gn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Mr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Zn.sort(this),Mr(this,{type:"priority",parent:this,priority:e})}},qi=Symbol.for("SpringPhase"),Gi=e=>(1&e[qi])>0,Zi=e=>(2&e[qi])>0,Qi=e=>(4&e[qi])>0,Ji=(e,t)=>t?e[qi]|=3:e[qi]&=-3,eo=(e,t)=>t?e[qi]|=4:e[qi]&=-5,to=class extends Ki{constructor(e,t){if(super(),this.animation=new ji,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mn.und(e)||!Mn.und(t)){const n=Mn.obj(e)?{...e}:{...t,from:e};Mn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Zi(this)||this._state.asyncTo)||Qi(this)}get goal(){return _r(this.animation.to)}get velocity(){const e=ai(this);return e instanceof di?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Gi(this)}get isAnimating(){return Zi(this)}get isPaused(){return Qi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=li(r.to);!a&&Fr(r.to)&&(i=zn(_r(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ui?1:a?a[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Mn.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Mn.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!Mn.und(r),g=n==c?s.v0>0:n<c;let p,f=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(f=u==c||u>c==g,f&&(a=-a*r,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+o.easing(r)*(c-n),a=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(n=!0)}));const s=ai(this),l=s.getValue();if(t){const e=_r(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return fn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Zi(this)){const{to:e,config:t}=this.animation;fn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Mn.und(e)?(n=this.queue||[],this.queue=[]):n=[Mn.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ri(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Wi(this._state,e&&this._lastCallId),fn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Mn.obj(n)?n[t]:n,(null==n||_i(n))&&(n=void 0),r=Mn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Gi(this)||(e.reverse&&([n,r]=[r,n]),r=_r(r),Mn.und(r)?ai(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Di(e,((e,t)=>/^on/.test(t)?Ci(e,n):e))),lo(this,e,"onProps"),co(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return zi(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Qi(this)||(eo(this,!0),Nn(o.pauseQueue),co(this,"onPause",Li(this,no(this,this.animation.to)),this))},resume:()=>{Qi(this)&&(eo(this,!1),Zi(this)&&this._resume(),Nn(o.resumeQueue),co(this,"onResume",Li(this,no(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ro(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ni(this));const r=!Mn.und(e.to),i=!Mn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ni(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!Mn.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!An(u,c);h&&(s.from=u),u=_r(u);const g=!An(d,l);g&&this._focus(d);const p=_i(t.to),{config:f}=s,{decay:m,velocity:b}=f;(r||i)&&(f.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ai(n={...n},t),t={...n,...t}),Ai(e,t),Object.assign(e,t);for(const t in Ii)null==e[t]&&(e[t]=Ii[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;Mn.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(f,wi(t.config,o),t.config!==a.config?wi(a.config,o):void 0);let v=ai(this);if(!v||Mn.und(d))return n(Li(this,!0));const y=Mn.und(t.reset)?i&&!t.default:!Mn.und(u)&&$i(t.reset,o),x=y?u:this.get(),w=Fi(d),$=Mn.num(w)||Mn.arr(w)||Jr(w),C=!p&&(!$||$i(a.immediate||t.immediate,o));if(g){const e=mi(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=Fr(d),D=!1;if(!k){const e=y||!Gi(this)&&h;(g||e)&&(D=An(Fi(x),w),k=!D),(An(s.immediate,C)||C)&&An(f.decay,m)&&An(f.velocity,b)||(k=!0)}if(D&&Zi(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||Fr(l))&&(s.values=v.getPayload(),s.toValues=Fr(d)?null:S==ui?[1]:zn(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;Bn(so,(e=>lo(this,t,e)));const r=Li(this,no(this,l));Nn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&fn.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?wi(a.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),p?n(Hi(t.to,t,this._state,this)):k?this._start():Zi(this)&&!g?this._pendingCalls.add(n):n(Pi(x))}_focus(e){const t=this.animation;e!==t.to&&(Ir(this)&&this._detach(),t.to=e,Ir(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Fr(t)&&(jr(t,this),Ui(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Fr(e)&&zr(e,this)}_set(e,t=!0){const n=_r(e);if(!Mn.und(n)){const e=ai(this);if(!e||!An(n,e.getValue())){const r=mi(n);e&&e.constructor==r?e.setValue(n):si(this,r.create(n)),e&&fn.batchedUpdates((()=>{this._onChange(n,t)}))}}return ai(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,co(this,"onStart",Li(this,no(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),wi(this.animation.onChange,e,this)),wi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ai(this).reset(_r(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Zi(this)||(Ji(this,!0),Qi(this)||this._resume())}_resume(){gn.skipAnimation?this.finish():Zn.start(this)}_stop(e,t){if(Zi(this)){Ji(this,!1);const n=this.animation;Bn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Mr(this,{type:"idle",parent:this});const r=t?Ni(this.get()):Li(this.get(),no(this,e??n.to));Nn(this._pendingCalls,r),n.changed&&(n.changed=!1,co(this,"onRest",r,this))}}};function no(e,t){const n=Fi(t);return An(Fi(e.get()),n)}function ro(e,t=e.loop,n=e.to){const r=wi(t);if(r){const i=!0!==r&&Oi(r),o=(i||e).reverse,a=!i||i.reset;return io({...e,loop:t,default:!1,pause:void 0,to:!o||_i(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function io(e){const{to:t,from:n}=e=Oi(e),r=new Set;return Mn.obj(t)&&ao(t,r),Mn.obj(n)&&ao(n,r),e.keys=r.size?Array.from(r):null,e}function oo(e){const t=io(e);return Mn.und(t.default)&&(t.default=Di(t)),t}function ao(e,t){jn(e,((e,n)=>null!=e&&t.add(n)))}var so=["onStart","onRest","onChange","onPause","onResume"];function lo(e,t,n){e.animation[n]=t[n]!==Si(t,n)?Ci(t[n],e.key):void 0}function co(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var uo=["onStart","onChange","onRest"],ho=1,go=class{constructor(e,t){this.id=ho++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Mn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(io(e)),this}start(e){let{queue:t}=this;return e?t=zn(e).map(io):this.queue=[],this._flush?this._flush(this,t):(xo(this,t),po(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Bn(zn(t),(t=>n[t].stop(!!e)))}else Wi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mn.und(e))this.start({pause:!0});else{const t=this.springs;Bn(zn(e),(e=>t[e].pause()))}return this}resume(e){if(Mn.und(e))this.start({pause:!1});else{const t=this.springs;Bn(zn(e),(e=>t[e].resume()))}return this}each(e){jn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Rn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Rn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Rn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}fn.onFrame(this._onFrame)}};function po(e,t){return Promise.all(t.map((t=>fo(e,t)))).then((t=>Ri(e,t)))}async function fo(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Mn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=Mn.arr(i)||Mn.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Bn(uo,(n=>{const r=t[n];if(Mn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Nn(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),g=!0===t.cancel||!0===Si(t,"cancel");(d||g&&u.asyncId)&&h.push(zi(++e._lastAsyncId,{props:t,state:u,actions:{pause:In,resume:In,start(t,n){g?(Wi(u,e._lastAsyncId),n(Ni(e))):(t.onRest=s,n(Hi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Ri(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=ro(t,a,i);if(n)return xo(e,[n]),fo(e,n,!0)}return l&&fn.batchedUpdates((()=>l(p,e,e.item))),p}function mo(e,t){const n={...e.springs};return t&&Bn(zn(t),(e=>{Mn.und(e.keys)&&(e=io(e)),Mn.obj(e.to)||(e={...e,to:void 0}),yo(n,e,(e=>vo(e)))})),bo(e,n),n}function bo(e,t){jn(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,jr(t,e))}))}function vo(e,t){const n=new to;return n.key=e,t&&jr(n,t),n}function yo(e,t,n){t.keys&&Bn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function xo(e,t){Bn(t,(t=>{yo(e.springs,t,(t=>vo(t,e)))}))}var wo,$o,Co=({children:e,...t})=>{const n=f(So),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;if(s){const n=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs));n||(s={inputs:t,result:e()})}else s=n;return u((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=So;return r.createElement(l,{value:t},e)},So=(wo=Co,$o={},Object.assign(wo,r.createContext($o)),wo.Provider._context=wo,wo.Consumer._context=wo,wo);Co.Provider=So.Provider,Co.Consumer=So.Consumer;var ko=()=>{const e=[],t=function(t){Qr(`${qr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Bn(e,((e,i)=>{if(Mn.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Bn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Bn(e,(e=>e.resume(...arguments))),this},t.set=function(t){Bn(e,((e,n)=>{const r=Mn.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Bn(e,((e,r)=>{if(Mn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Bn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Bn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Mn.fun(e)?e(n,t):e};return t._getProps=n,t};function Do(e,t){const n=Mn.fun(e),[[r],i]=function(e,t,n){const r=Mn.fun(t)&&t;r&&!n&&(n=[]);const i=m((()=>r||3==arguments.length?ko():void 0),[]),a=o(0),s=ti(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const n=mo(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?po(e,t):new Promise((r=>{bo(e,n),l.queue.push((()=>{r(po(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ii(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new go(null,l.flush)),n=r?r(i,e):t[i];n&&(d[i]=oo(n))}}m((()=>{Bn(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),n);const g=c.current.map(((e,t)=>mo(e,d[t]))),p=f(Co),b=ii(p),v=p!==b&&function(e){for(const t in e)return!0;return!1}(p);ei((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Bn(e,(e=>e()))),Bn(c.current,((e,t)=>{i?.add(e),v&&e.start({default:p});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ni((()=>()=>{Bn(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var To=class extends Ki{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=xr(...t);const n=this._get(),r=mi(n);si(this,r.create(n))}advance(e){const t=this._get();An(t,this.get())||(ai(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Oo(this._active)&&Fo(this)}_get(){const e=Mn.arr(this.source)?this.source.map(_r):zn(_r(this.source));return this.calc(...e)}_start(){this.idle&&!Oo(this._active)&&(this.idle=!1,Bn(li(this),(e=>{e.done=!1})),gn.skipAnimation?(fn.batchedUpdates((()=>this.advance())),Fo(this)):Zn.start(this))}_attach(){let e=1;Bn(zn(this.source),(t=>{Fr(t)&&jr(t,this),Ui(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Bn(zn(this.source),(e=>{Fr(e)&&zr(e,this)})),this._active.clear(),Fo(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=zn(this.source).reduce(((e,t)=>Math.max(e,(Ui(t)?t.priority:0)+1)),0))}};function Eo(e){return!1!==e.idle}function Oo(e){return!e.size||Array.from(e).every(Eo)}function Fo(e){e.idle||(e.idle=!0,Bn(li(e),(e=>{e.done=!0})),Mr(e,{type:"idle",parent:e}))}gn.assign({createStringInterpolator:Kr,to:(e,t)=>new To(e,t)});var _o=/^--/;function Io(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||_o.test(e)||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}var Mo={};var Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bo=["Webkit","Ms","Moz","O"];Ao=Object.keys(Ao).reduce(((e,t)=>(Bo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ao);var jo=/^(matrix|translate|scale|rotate|skew)/,zo=/^(translate)/,Ro=/^(rotate|skew)/,Po=(e,t)=>Mn.num(e)&&0!==e?e+t:e,Lo=(e,t)=>Mn.arr(e)?e.every((e=>Lo(e,t))):Mn.num(e)?e===t:parseFloat(e)===t,No=class extends gi{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Po(e,"px"))).join(",")})`,Lo(e,0)]))),jn(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(jo.test(t)){if(delete r[t],Mn.und(e))return;const n=zo.test(t)?"px":Ro.test(t)?"deg":"";i.push(zn(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Po(i,n)})`,Lo(i,0)]:e=>[`${t}(${e.map((e=>Po(e,n))).join(",")})`,Lo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Ho(i,o)),super(r)}},Ho=class extends Ar{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Bn(this.inputs,((n,r)=>{const i=_r(n[0]),[o,a]=this.transforms[r](Mn.arr(i)?i:n.map(_r));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Bn(this.inputs,(e=>Bn(e,(e=>Fr(e)&&jr(e,this)))))}observerRemoved(e){0==e&&Bn(this.inputs,(e=>Bn(e,(e=>Fr(e)&&zr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Mr(this,e)}};gn.assign({batchedUpdates:E,createStringInterpolator:Kr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Wo=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new gi(e),getComponentProps:r=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=xi(e)||"Anonymous";return(e=Mn.str(e)?o[e]||(o[e]=bi(e,i)):e[yi]||(e[yi]=bi(e,i))).displayName=`Animated(${t})`,e};return jn(e,((t,n)=>{Mn.arr(e)&&(n=xi(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Mo[t]||(Mo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Io(t,r[t]);_o.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new No(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Yo=Wo.animated,Vo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Xo(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var Ko=Array.isArray,qo="object"==typeof Vo&&Vo&&Vo.Object===Object&&Vo,Go=qo,Zo="object"==typeof self&&self&&self.Object===Object&&self,Qo=Go||Zo||Function("return this")(),Jo=Qo.Symbol,ea=Jo,ta=Object.prototype,na=ta.hasOwnProperty,ra=ta.toString,ia=ea?ea.toStringTag:void 0;var oa=function(e){var t=na.call(e,ia),n=e[ia];try{e[ia]=void 0;var r=!0}catch(e){}var i=ra.call(e);return r&&(t?e[ia]=n:delete e[ia]),i},aa=Object.prototype.toString;var sa=oa,la=function(e){return aa.call(e)},ca=Jo?Jo.toStringTag:void 0;var da=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ca&&ca in Object(e)?sa(e):la(e)};var ua=function(e){return null!=e&&"object"==typeof e},ha=da,ga=ua;var pa=function(e){return"symbol"==typeof e||ga(e)&&"[object Symbol]"==ha(e)},fa=Ko,ma=pa,ba=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,va=/^\w*$/;var ya=function(e,t){if(fa(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ma(e))||(va.test(e)||!ba.test(e)||null!=t&&e in Object(t))};var xa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},wa=da,$a=xa;var Ca,Sa=function(e){if(!$a(e))return!1;var t=wa(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ka=Qo["__core-js_shared__"],Da=(Ca=/[^.]+$/.exec(ka&&ka.keys&&ka.keys.IE_PROTO||""))?"Symbol(src)_1."+Ca:"";var Ta=function(e){return!!Da&&Da in e},Ea=Function.prototype.toString;var Oa=function(e){if(null!=e){try{return Ea.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fa=Sa,_a=Ta,Ia=xa,Ma=Oa,Aa=/^\[object .+?Constructor\]$/,Ba=Function.prototype,ja=Object.prototype,za=Ba.toString,Ra=ja.hasOwnProperty,Pa=RegExp("^"+za.call(Ra).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var La=function(e,t){return null==e?void 0:e[t]},Na=function(e){return!(!Ia(e)||_a(e))&&(Fa(e)?Pa:Aa).test(Ma(e))},Ha=La;var Wa=function(e,t){var n=Ha(e,t);return Na(n)?n:void 0},Ya=Wa(Object,"create"),Va=Ya;var Ua=function(){this.__data__=Va?Va(null):{},this.size=0};var Xa=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ka=Ya,qa=Object.prototype.hasOwnProperty;var Ga=function(e){var t=this.__data__;if(Ka){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return qa.call(t,e)?t[e]:void 0},Za=Ya,Qa=Object.prototype.hasOwnProperty;var Ja=function(e){var t=this.__data__;return Za?void 0!==t[e]:Qa.call(t,e)},es=Ya;var ts=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=es&&void 0===t?"__lodash_hash_undefined__":t,this},ns=Ua,rs=Xa,is=Ga,os=Ja,as=ts;function ss(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ss.prototype.clear=ns,ss.prototype.delete=rs,ss.prototype.get=is,ss.prototype.has=os,ss.prototype.set=as;var ls=ss;var cs=function(){this.__data__=[],this.size=0};var ds=function(e,t){return e===t||e!=e&&t!=t},us=ds;var hs=function(e,t){for(var n=e.length;n--;)if(us(e[n][0],t))return n;return-1},gs=hs,ps=Array.prototype.splice;var fs=function(e){var t=this.__data__,n=gs(t,e);return!(n<0)&&(n==t.length-1?t.pop():ps.call(t,n,1),--this.size,!0)},ms=hs;var bs=function(e){var t=this.__data__,n=ms(t,e);return n<0?void 0:t[n][1]},vs=hs;var ys=function(e){return vs(this.__data__,e)>-1},xs=hs;var ws=function(e,t){var n=this.__data__,r=xs(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},$s=cs,Cs=fs,Ss=bs,ks=ys,Ds=ws;function Ts(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ts.prototype.clear=$s,Ts.prototype.delete=Cs,Ts.prototype.get=Ss,Ts.prototype.has=ks,Ts.prototype.set=Ds;var Es=Ts,Os=Wa(Qo,"Map"),Fs=ls,_s=Es,Is=Os;var Ms=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var As=function(e,t){var n=e.__data__;return Ms(t)?n["string"==typeof t?"string":"hash"]:n.map},Bs=As;var js=function(e){var t=Bs(this,e).delete(e);return this.size-=t?1:0,t},zs=As;var Rs=function(e){return zs(this,e).get(e)},Ps=As;var Ls=function(e){return Ps(this,e).has(e)},Ns=As;var Hs=function(e,t){var n=Ns(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ws=function(){this.size=0,this.__data__={hash:new Fs,map:new(Is||_s),string:new Fs}},Ys=js,Vs=Rs,Us=Ls,Xs=Hs;function Ks(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ks.prototype.clear=Ws,Ks.prototype.delete=Ys,Ks.prototype.get=Vs,Ks.prototype.has=Us,Ks.prototype.set=Xs;var qs=Ks,Gs=qs;function Zs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Zs.Cache||Gs),n}Zs.Cache=Gs;var Qs=Zs;var Js=function(e){var t=Qs(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},el=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tl=/\\(\\)?/g,nl=Js((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(el,(function(e,n,r,i){t.push(r?i.replace(tl,"$1"):n||e)})),t}));var rl=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},il=Ko,ol=pa,al=Jo?Jo.prototype:void 0,sl=al?al.toString:void 0;var ll=function e(t){if("string"==typeof t)return t;if(il(t))return rl(t,e)+"";if(ol(t))return sl?sl.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},cl=ll;var dl=function(e){return null==e?"":cl(e)},ul=Ko,hl=ya,gl=nl,pl=dl;var fl=function(e,t){return ul(e)?e:hl(e,t)?[e]:gl(pl(e))},ml=pa;var bl=function(e){if("string"==typeof e||ml(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},vl=fl,yl=bl;var xl=function(e,t){for(var n=0,r=(t=vl(t,e)).length;null!=e&&n<r;)e=e[yl(t[n++])];return n&&n==r?e:void 0},wl=xl;var $l=function(e,t,n){var r=null==e?void 0:wl(e,t);return void 0===r?n:r},Cl=Uo($l);const Sl=(e,t,n)=>Cl(n,t)||Cl(e,t),kl=(e,t)=>{const n=t||e.defaultValue;return Cl(e.collections,n)},Dl={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Tl=e=>t=>{var n;const r=t.theme,i=kl(Dl,null==r?void 0:r.borderScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.border)?`${Sl(i,e,r.overrides.border)}px`:`${i[e]}px`},El={"width-005":Tl("width-005"),"width-010":Tl("width-010"),"width-020":Tl("width-020"),"width-040":Tl("width-040"),solid:(Ol="solid",e=>{var t;const n=e.theme,r=kl(Dl,null==n?void 0:n.borderScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?Sl(r,Ol,n.overrides.border):r[Ol];return"function"==typeof i?i(e):i})};var Ol;const Fl={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},_l=e=>t=>{var n;const r=t.theme,i=kl(Fl,null==r?void 0:r.colourScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.primitiveColour)?Sl(i,e,r.overrides.primitiveColour):i[e]},Il={"brand-10":_l("brand-10"),"brand-20":_l("brand-20"),"brand-30":_l("brand-30"),"brand-40":_l("brand-40"),"brand-50":_l("brand-50"),"brand-60":_l("brand-60"),"brand-70":_l("brand-70"),"brand-80":_l("brand-80"),"brand-90":_l("brand-90"),"brand-95":_l("brand-95"),"brand-100":_l("brand-100"),"primary-10":_l("primary-10"),"primary-20":_l("primary-20"),"primary-30":_l("primary-30"),"primary-40":_l("primary-40"),"primary-50":_l("primary-50"),"primary-60":_l("primary-60"),"primary-70":_l("primary-70"),"primary-80":_l("primary-80"),"primary-90":_l("primary-90"),"primary-95":_l("primary-95"),"primary-100":_l("primary-100"),"secondary-10":_l("secondary-10"),"secondary-20":_l("secondary-20"),"secondary-30":_l("secondary-30"),"secondary-40":_l("secondary-40"),"secondary-50":_l("secondary-50"),"secondary-60":_l("secondary-60"),"secondary-70":_l("secondary-70"),"secondary-80":_l("secondary-80"),"secondary-90":_l("secondary-90"),"secondary-95":_l("secondary-95"),"secondary-100":_l("secondary-100"),"neutral-10":_l("neutral-10"),"neutral-20":_l("neutral-20"),"neutral-30":_l("neutral-30"),"neutral-40":_l("neutral-40"),"neutral-50":_l("neutral-50"),"neutral-60":_l("neutral-60"),"neutral-70":_l("neutral-70"),"neutral-80":_l("neutral-80"),"neutral-90":_l("neutral-90"),"neutral-95":_l("neutral-95"),"neutral-100":_l("neutral-100"),"success-10":_l("success-10"),"success-20":_l("success-20"),"success-30":_l("success-30"),"success-40":_l("success-40"),"success-50":_l("success-50"),"success-60":_l("success-60"),"success-70":_l("success-70"),"success-80":_l("success-80"),"success-90":_l("success-90"),"success-95":_l("success-95"),"success-100":_l("success-100"),"warning-10":_l("warning-10"),"warning-20":_l("warning-20"),"warning-30":_l("warning-30"),"warning-40":_l("warning-40"),"warning-50":_l("warning-50"),"warning-60":_l("warning-60"),"warning-70":_l("warning-70"),"warning-80":_l("warning-80"),"warning-90":_l("warning-90"),"warning-95":_l("warning-95"),"warning-100":_l("warning-100"),"error-10":_l("error-10"),"error-20":_l("error-20"),"error-30":_l("error-30"),"error-40":_l("error-40"),"error-50":_l("error-50"),"error-60":_l("error-60"),"error-70":_l("error-70"),"error-80":_l("error-80"),"error-90":_l("error-90"),"error-95":_l("error-95"),"error-100":_l("error-100"),"info-10":_l("info-10"),"info-20":_l("info-20"),"info-30":_l("info-30"),"info-40":_l("info-40"),"info-50":_l("info-50"),"info-60":_l("info-60"),"info-70":_l("info-70"),"info-80":_l("info-80"),"info-90":_l("info-90"),"info-95":_l("info-95"),"info-100":_l("info-100"),white:_l("white"),black:_l("black"),"primary-inverse":_l("primary-inverse")},Ml={text:_l("neutral-20"),"text-subtle":_l("neutral-30"),"text-subtler":_l("neutral-50"),"text-subtlest":_l("neutral-60"),"text-primary":_l("primary-50"),"text-hover":_l("primary-40"),"text-selected":_l("primary-50"),"text-selected-hover":_l("primary-40"),"text-disabled":_l("neutral-50"),"text-disabled-subtle":_l("neutral-60"),"text-disabled-subtlest":_l("neutral-80"),"text-selected-disabled":_l("neutral-20"),"text-success":_l("success-40"),"text-warning":_l("warning-40"),"text-error":_l("error-40"),"text-info":_l("info-40"),"text-inverse":_l("white"),icon:_l("neutral-50"),"icon-subtle":_l("neutral-60"),"icon-strongest":_l("neutral-20"),"icon-primary":_l("primary-50"),"icon-primary-subtle":_l("primary-60"),"icon-primary-subtlest":_l("primary-70"),"icon-hover":_l("primary-40"),"icon-selected":_l("primary-50"),"icon-selected-hover":_l("primary-40"),"icon-disabled":_l("neutral-50"),"icon-disabled-subtle":_l("neutral-60"),"icon-selected-disabled":_l("neutral-60"),"icon-success":_l("success-50"),"icon-warning":_l("warning-60"),"icon-error":_l("error-50"),"icon-error-strong":_l("error-40"),"icon-info":_l("info-50"),"icon-inverse":_l("white"),"icon-primary-inverse":_l("primary-inverse"),border:_l("neutral-90"),"border-strong":_l("neutral-70"),"border-stronger":_l("neutral-50"),"border-primary":_l("primary-50"),"border-primary-subtle":_l("primary-60"),"border-hover":_l("primary-90"),"border-hover-strong":_l("primary-60"),"border-selected":_l("primary-50"),"border-selected-subtle":_l("primary-70"),"border-selected-subtlest":_l("primary-90"),"border-selected-hover":_l("primary-40"),"border-focus":_l("primary-60"),"border-focus-strong":_l("primary-50"),"border-disabled":_l("neutral-90"),"border-selected-disabled":_l("neutral-70"),"border-success":_l("success-60"),"border-warning":_l("warning-60"),"border-error":_l("error-60"),"border-error-focus":_l("error-60"),"border-error-focus-strong":_l("error-40"),"border-error-strong":_l("error-40"),"border-info":_l("info-60"),bg:_l("white"),"bg-strong":_l("neutral-100"),"bg-stronger":_l("neutral-95"),"bg-strongest":_l("neutral-90"),"bg-hover":_l("primary-95"),"bg-hover-strong":_l("primary-90"),"bg-hover-subtle":_l("primary-100"),"bg-hover-neutral":_l("neutral-100"),"bg-hover-neutral-strong":_l("neutral-90"),"bg-selected":_l("primary-95"),"bg-selected-hover":_l("primary-90"),"bg-selected-strong":_l("primary-90"),"bg-selected-stronger":_l("primary-70"),"bg-selected-strongest":_l("primary-50"),"bg-selected-strongest-hover":_l("primary-40"),"bg-disabled":_l("neutral-95"),"bg-selected-disabled":_l("neutral-95"),"bg-selected-stronger-disabled":_l("neutral-70"),"bg-success":_l("success-100"),"bg-success-hover":_l("success-95"),"bg-success-strong":_l("success-50"),"bg-success-strong-hover":_l("success-40"),"bg-warning":_l("warning-100"),"bg-warning-hover":_l("warning-95"),"bg-warning-strong":_l("warning-50"),"bg-warning-strong-hover":_l("warning-40"),"bg-info":_l("info-100"),"bg-info-hover":_l("info-95"),"bg-info-strong":_l("info-50"),"bg-info-strong-hover":_l("info-40"),"bg-error":_l("error-100"),"bg-error-hover":_l("error-95"),"bg-error-strong":_l("error-50"),"bg-error-strong-hover":_l("error-40"),"bg-inverse":_l("neutral-20"),"bg-inverse-subtle":_l("neutral-30"),"bg-inverse-subtler":_l("neutral-50"),"bg-inverse-subtlest":_l("neutral-60"),"bg-inverse-hover":_l("neutral-40"),"bg-primary":_l("primary-50"),"bg-primary-subtle":_l("primary-60"),"bg-primary-subtler":_l("primary-95"),"bg-primary-subtlest":_l("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":_l("primary-40"),"bg-primary-subtlest-hover":_l("primary-90"),"bg-primary-subtlest-selected":_l("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:_l("primary-50"),"hyperlink-hover":_l("primary-40"),"hyperlink-visited":_l("primary-40"),"hyperlink-inverse":_l("primary-inverse"),"focus-ring":_l("black"),"focus-ring-inverse":_l("white")},Al={collections:{lifesg:Ml,bookingsg:Ml,rbs:Ml,mylegacy:Ml,ccube:Ml,oneservice:Ml,pa:{text:_l("neutral-30"),"text-subtle":_l("neutral-40"),"text-subtler":_l("neutral-50"),"text-subtlest":_l("neutral-70"),"text-primary":_l("neutral-10"),"text-hover":_l("neutral-70"),"text-selected":_l("neutral-20"),"text-selected-hover":_l("neutral-10"),"text-disabled":_l("neutral-50"),"text-disabled-subtle":_l("neutral-60"),"text-disabled-subtlest":_l("neutral-80"),"text-selected-disabled":_l("neutral-40"),"text-success":_l("success-40"),"text-warning":_l("warning-40"),"text-error":_l("brand-30"),"text-info":_l("neutral-40"),"text-inverse":_l("neutral-100"),icon:_l("neutral-40"),"icon-subtle":_l("neutral-50"),"icon-strongest":_l("neutral-10"),"icon-primary":_l("neutral-10"),"icon-primary-subtle":_l("neutral-30"),"icon-primary-subtlest":_l("neutral-60"),"icon-hover":_l("neutral-70"),"icon-selected":_l("brand-20"),"icon-selected-hover":_l("brand-10"),"icon-disabled":_l("neutral-50"),"icon-disabled-subtle":_l("neutral-60"),"icon-selected-disabled":_l("neutral-40"),"icon-success":_l("success-40"),"icon-warning":_l("warning-60"),"icon-error":_l("brand-30"),"icon-error-strong":_l("brand-10"),"icon-info":_l("neutral-40"),"icon-inverse":_l("neutral-100"),"icon-primary-inverse":"#F9B371",border:_l("neutral-90"),"border-strong":_l("neutral-30"),"border-stronger":_l("neutral-20"),"border-primary":_l("neutral-40"),"border-primary-subtle":_l("neutral-60"),"border-hover":_l("neutral-80"),"border-hover-strong":_l("neutral-10"),"border-selected":_l("brand-20"),"border-selected-subtle":_l("neutral-40"),"border-selected-subtlest":_l("neutral-70"),"border-selected-hover":_l("neutral-10"),"border-focus":_l("neutral-20"),"border-focus-strong":_l("neutral-10"),"border-disabled":_l("neutral-90"),"border-selected-disabled":_l("neutral-80"),"border-success":_l("success-40"),"border-warning":_l("warning-60"),"border-error":_l("brand-30"),"border-error-focus":_l("brand-20"),"border-error-focus-strong":_l("brand-10"),"border-error-strong":_l("brand-20"),"border-info":_l("neutral-40"),bg:_l("neutral-100"),"bg-strong":_l("neutral-95"),"bg-stronger":_l("neutral-90"),"bg-strongest":_l("neutral-80"),"bg-hover":_l("brand-90"),"bg-hover-strong":_l("brand-80"),"bg-hover-subtle":_l("neutral-90"),"bg-hover-neutral":_l("neutral-90"),"bg-hover-neutral-strong":_l("neutral-90"),"bg-selected":_l("brand-100"),"bg-selected-hover":_l("brand-30"),"bg-selected-strong":_l("brand-50"),"bg-selected-stronger":_l("brand-40"),"bg-selected-strongest":_l("brand-20"),"bg-selected-strongest-hover":_l("brand-10"),"bg-disabled":_l("neutral-90"),"bg-selected-disabled":_l("neutral-90"),"bg-selected-stronger-disabled":_l("neutral-80"),"bg-success":_l("success-100"),"bg-success-hover":_l("success-95"),"bg-success-strong":_l("success-50"),"bg-success-strong-hover":_l("success-40"),"bg-warning":_l("warning-100"),"bg-warning-hover":_l("warning-95"),"bg-warning-strong":_l("warning-50"),"bg-warning-strong-hover":_l("warning-40"),"bg-info":_l("neutral-95"),"bg-info-hover":_l("info-95"),"bg-info-strong":_l("info-50"),"bg-info-strong-hover":_l("info-40"),"bg-error":_l("brand-100"),"bg-error-hover":_l("error-95"),"bg-error-strong":_l("error-50"),"bg-error-strong-hover":_l("error-40"),"bg-inverse":_l("neutral-40"),"bg-inverse-subtle":_l("neutral-60"),"bg-inverse-subtler":_l("neutral-70"),"bg-inverse-subtlest":_l("neutral-80"),"bg-inverse-hover":_l("neutral-30"),"bg-primary":_l("brand-20"),"bg-primary-subtle":_l("brand-60"),"bg-primary-subtler":_l("brand-80"),"bg-primary-subtlest":_l("brand-100"),"bg-available":_l("success-60"),"bg-primary-hover":_l("brand-10"),"bg-primary-subtlest-hover":_l("brand-80"),"bg-primary-subtlest-selected":_l("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:_l("neutral-10"),"hyperlink-hover":_l("neutral-40"),"hyperlink-visited":_l("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":_l("black"),"focus-ring-inverse":_l("white")}},defaultValue:"lifesg"},Bl=e=>t=>{var n;const r=t.theme,i=kl(Al,null==r?void 0:r.colourScheme),o=(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.semanticColour)?Sl(i,e,r.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},jl={text:Bl("text"),"text-subtle":Bl("text-subtle"),"text-subtler":Bl("text-subtler"),"text-subtlest":Bl("text-subtlest"),"text-primary":Bl("text-primary"),"text-hover":Bl("text-hover"),"text-selected":Bl("text-selected"),"text-selected-hover":Bl("text-selected-hover"),"text-disabled":Bl("text-disabled"),"text-disabled-subtle":Bl("text-disabled-subtle"),"text-disabled-subtlest":Bl("text-disabled-subtlest"),"text-selected-disabled":Bl("text-selected-disabled"),"text-success":Bl("text-success"),"text-warning":Bl("text-warning"),"text-error":Bl("text-error"),"text-info":Bl("text-info"),"text-inverse":Bl("text-inverse"),icon:Bl("icon"),"icon-subtle":Bl("icon-subtle"),"icon-strongest":Bl("icon-strongest"),"icon-primary":Bl("icon-primary"),"icon-primary-subtle":Bl("icon-primary-subtle"),"icon-primary-subtlest":Bl("icon-primary-subtlest"),"icon-hover":Bl("icon-hover"),"icon-selected":Bl("icon-selected"),"icon-selected-hover":Bl("icon-selected-hover"),"icon-disabled":Bl("icon-disabled"),"icon-disabled-subtle":Bl("icon-disabled-subtle"),"icon-selected-disabled":Bl("icon-selected-disabled"),"icon-success":Bl("icon-success"),"icon-warning":Bl("icon-warning"),"icon-error":Bl("icon-error"),"icon-error-strong":Bl("icon-error-strong"),"icon-info":Bl("icon-info"),"icon-inverse":Bl("icon-inverse"),"icon-primary-inverse":Bl("icon-primary-inverse"),border:Bl("border"),"border-strong":Bl("border-strong"),"border-stronger":Bl("border-stronger"),"border-primary":Bl("border-primary"),"border-primary-subtle":Bl("border-primary-subtle"),"border-hover":Bl("border-hover"),"border-hover-strong":Bl("border-hover-strong"),"border-selected":Bl("border-selected"),"border-selected-subtle":Bl("border-selected-subtle"),"border-selected-subtlest":Bl("border-selected-subtlest"),"border-selected-hover":Bl("border-selected-hover"),"border-focus":Bl("border-focus"),"border-focus-strong":Bl("border-focus-strong"),"border-disabled":Bl("border-disabled"),"border-selected-disabled":Bl("border-selected-disabled"),"border-success":Bl("border-success"),"border-warning":Bl("border-warning"),"border-error":Bl("border-error"),"border-error-focus":Bl("border-error-focus"),"border-error-focus-strong":Bl("border-error-focus-strong"),"border-error-strong":Bl("border-error-strong"),"border-info":Bl("border-info"),bg:Bl("bg"),"bg-strong":Bl("bg-strong"),"bg-stronger":Bl("bg-stronger"),"bg-strongest":Bl("bg-strongest"),"bg-hover":Bl("bg-hover"),"bg-hover-strong":Bl("bg-hover-strong"),"bg-hover-subtle":Bl("bg-hover-subtle"),"bg-hover-neutral":Bl("bg-hover-neutral"),"bg-hover-neutral-strong":Bl("bg-hover-neutral-strong"),"bg-selected":Bl("bg-selected"),"bg-selected-hover":Bl("bg-selected-hover"),"bg-selected-strong":Bl("bg-selected-strong"),"bg-selected-stronger":Bl("bg-selected-stronger"),"bg-selected-strongest":Bl("bg-selected-strongest"),"bg-selected-strongest-hover":Bl("bg-selected-strongest-hover"),"bg-disabled":Bl("bg-disabled"),"bg-selected-disabled":Bl("bg-selected-disabled"),"bg-selected-stronger-disabled":Bl("bg-selected-stronger-disabled"),"bg-success":Bl("bg-success"),"bg-success-hover":Bl("bg-success-hover"),"bg-success-strong":Bl("bg-success-strong"),"bg-success-strong-hover":Bl("bg-success-strong-hover"),"bg-warning":Bl("bg-warning"),"bg-warning-hover":Bl("bg-warning-hover"),"bg-warning-strong":Bl("bg-warning-strong"),"bg-warning-strong-hover":Bl("bg-warning-strong-hover"),"bg-info":Bl("bg-info"),"bg-info-hover":Bl("bg-info-hover"),"bg-info-strong":Bl("bg-info-strong"),"bg-info-strong-hover":Bl("bg-info-strong-hover"),"bg-error":Bl("bg-error"),"bg-error-hover":Bl("bg-error-hover"),"bg-error-strong":Bl("bg-error-strong"),"bg-error-strong-hover":Bl("bg-error-strong-hover"),"bg-inverse":Bl("bg-inverse"),"bg-inverse-subtle":Bl("bg-inverse-subtle"),"bg-inverse-subtler":Bl("bg-inverse-subtler"),"bg-inverse-subtlest":Bl("bg-inverse-subtlest"),"bg-inverse-hover":Bl("bg-inverse-hover"),"bg-primary":Bl("bg-primary"),"bg-primary-subtle":Bl("bg-primary-subtle"),"bg-primary-subtler":Bl("bg-primary-subtler"),"bg-primary-subtlest":Bl("bg-primary-subtlest"),"bg-available":Bl("bg-available"),"bg-primary-hover":Bl("bg-primary-hover"),"bg-primary-subtlest-hover":Bl("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bl("bg-primary-subtlest-selected"),"overlay-strong":Bl("overlay-strong"),"overlay-subtle":Bl("overlay-subtle"),hyperlink:Bl("hyperlink"),"hyperlink-hover":Bl("hyperlink-hover"),"hyperlink-visited":Bl("hyperlink-visited"),"hyperlink-inverse":Bl("hyperlink-inverse"),"focus-ring":Bl("focus-ring"),"focus-ring-inverse":Bl("focus-ring-inverse")},zl={collections:{default:{solid:e=>t=>{var n,r,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(t):o)&&void 0!==n?n:El["width-010"](t),c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:jl.border(t),u=El.solid;return I`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var n,r,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(t):o)&&void 0!==n?n:El["width-010"](t),c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:jl.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return I`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Rl=e=>1===e.length&&"theme"in e[0],Pl=e=>(...t)=>n=>{const r=Rl(t)?[]:t,i=Rl(t)?t[0]:n,o=i.theme;return(0,kl(zl,null==o?void 0:o.borderScheme)[e])(...r)(i)},Ll={solid:Pl("solid"),"dashed-default":Pl("dashed-default")},Nl={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Hl=e=>t=>{var n;const r=t.theme,i=kl(Nl,null==r?void 0:r.breakpointScheme);let o;return o=(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.breakpoint)?Sl(i,e,r.overrides.breakpoint):i[e],o},Wl={"xxs-min":Hl("xxs-min"),"xxs-max":Hl("xxs-max"),"xs-min":Hl("xs-min"),"xs-max":Hl("xs-max"),"sm-min":Hl("sm-min"),"sm-max":Hl("sm-max"),"md-min":Hl("md-min"),"md-max":Hl("md-max"),"lg-min":Hl("lg-min"),"lg-max":Hl("lg-max"),"xl-min":Hl("xl-min"),"xl-max":Hl("xl-max"),"xxl-min":Hl("xxl-min"),"xxs-column":Hl("xxs-column"),"xs-column":Hl("xs-column"),"sm-column":Hl("sm-column"),"md-column":Hl("md-column"),"lg-column":Hl("lg-column"),"xl-column":Hl("xl-column"),"xxl-column":Hl("xxl-column"),"xxs-gutter":Hl("xxs-gutter"),"xs-gutter":Hl("xs-gutter"),"sm-gutter":Hl("sm-gutter"),"md-gutter":Hl("md-gutter"),"lg-gutter":Hl("lg-gutter"),"xl-gutter":Hl("xl-gutter"),"xxl-gutter":Hl("xxl-gutter"),"xxs-margin":Hl("xxs-margin"),"xs-margin":Hl("xs-margin"),"sm-margin":Hl("sm-margin"),"md-margin":Hl("md-margin"),"lg-margin":Hl("lg-margin"),"xl-margin":Hl("xl-margin"),"xxl-margin":Hl("xxl-margin")},Yl=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,n)=>(t[n]=((e,t)=>{const n=Wl["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const r=n(t);return`@media screen and (${e}: ${r}px)`}})(e,n),t)),{}),Vl={MaxWidth:Yl("max-width"),MinWidth:Yl("min-width")},Ul={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Xl=e=>t=>{var n;const r=t.theme,i=kl(Ul,null==r?void 0:r.fontScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.fontSpec)?Sl(i,e,r.overrides.fontSpec):i[e]},Kl={"heading-size-xxl":Xl("heading-size-xxl"),"heading-size-xl":Xl("heading-size-xl"),"heading-size-lg":Xl("heading-size-lg"),"heading-size-md":Xl("heading-size-md"),"heading-size-sm":Xl("heading-size-sm"),"heading-size-xs":Xl("heading-size-xs"),"heading-lh-xxl":Xl("heading-lh-xxl"),"heading-lh-xl":Xl("heading-lh-xl"),"heading-lh-lg":Xl("heading-lh-lg"),"heading-lh-md":Xl("heading-lh-md"),"heading-lh-sm":Xl("heading-lh-sm"),"heading-lh-xs":Xl("heading-lh-xs"),"heading-ls-xxl":Xl("heading-ls-xxl"),"heading-ls-xl":Xl("heading-ls-xl"),"heading-ls-lg":Xl("heading-ls-lg"),"heading-ls-md":Xl("heading-ls-md"),"heading-ls-sm":Xl("heading-ls-sm"),"heading-ls-xs":Xl("heading-ls-xs"),"weight-light":Xl("weight-light"),"weight-regular":Xl("weight-regular"),"weight-semibold":Xl("weight-semibold"),"weight-bold":Xl("weight-bold"),"font-family":Xl("font-family"),"body-size-baseline":Xl("body-size-baseline"),"body-size-md":Xl("body-size-md"),"body-size-sm":Xl("body-size-sm"),"body-size-xs":Xl("body-size-xs"),"body-lh-baseline":Xl("body-lh-baseline"),"body-lh-md":Xl("body-lh-md"),"body-lh-sm":Xl("body-lh-sm"),"body-lh-xs":Xl("body-lh-xs"),"body-ls-baseline":Xl("body-ls-baseline"),"body-ls-md":Xl("body-ls-md"),"body-ls-sm":Xl("body-ls-sm"),"body-ls-xs":Xl("body-ls-xs"),"form-label-size":Xl("form-label-size"),"form-description-size":Xl("form-description-size"),"form-label-lh":Xl("form-label-lh"),"form-description-lh":Xl("form-description-lh"),"form-label-ls":Xl("form-label-ls"),"form-description-ls":Xl("form-description-ls")},ql=(e,t,n,r,i)=>{const{disableLigatures:o}=i||{};return I`
        font-family: ${Xl("font-family")};
        font-size: ${Xl(e)};
        font-weight: ${Xl(t)};
        line-height: ${Xl(n)};
        letter-spacing: ${Xl(r)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Gl=(e={})=>({"heading-xxl-light":ql("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ql("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ql("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ql("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ql("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ql("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ql("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ql("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ql("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ql("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ql("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ql("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ql("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ql("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ql("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ql("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ql("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ql("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ql("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ql("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ql("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ql("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ql("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ql("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ql("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ql("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ql("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ql("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ql("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ql("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ql("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ql("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ql("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ql("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ql("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ql("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ql("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ql("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ql("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ql("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ql("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ql("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Zl=Gl({disableLigatures:!0}),Ql={collections:{default:Gl(),bookingsg:Zl,pa:Gl({disableLigatures:!0})},defaultValue:"default"},Jl=e=>t=>{var n;const r=t.theme,i=kl(Ql,null==r?void 0:r.fontScheme),o=(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.font)?Sl(i,e,r.overrides.font):i[e];return"function"==typeof o?o(t):o},ec={"heading-xxl-light":Jl("heading-xxl-light"),"heading-xxl-regular":Jl("heading-xxl-regular"),"heading-xxl-semibold":Jl("heading-xxl-semibold"),"heading-xxl-bold":Jl("heading-xxl-bold"),"heading-xl-light":Jl("heading-xl-light"),"heading-xl-regular":Jl("heading-xl-regular"),"heading-xl-semibold":Jl("heading-xl-semibold"),"heading-xl-bold":Jl("heading-xl-bold"),"heading-lg-light":Jl("heading-lg-light"),"heading-lg-regular":Jl("heading-lg-regular"),"heading-lg-semibold":Jl("heading-lg-semibold"),"heading-lg-bold":Jl("heading-lg-bold"),"heading-md-light":Jl("heading-md-light"),"heading-md-regular":Jl("heading-md-regular"),"heading-md-semibold":Jl("heading-md-semibold"),"heading-md-bold":Jl("heading-md-bold"),"heading-sm-light":Jl("heading-sm-light"),"heading-sm-regular":Jl("heading-sm-regular"),"heading-sm-semibold":Jl("heading-sm-semibold"),"heading-sm-bold":Jl("heading-sm-bold"),"heading-xs-light":Jl("heading-xs-light"),"heading-xs-regular":Jl("heading-xs-regular"),"heading-xs-semibold":Jl("heading-xs-semibold"),"heading-xs-bold":Jl("heading-xs-bold"),"body-baseline-light":Jl("body-baseline-light"),"body-baseline-regular":Jl("body-baseline-regular"),"body-baseline-semibold":Jl("body-baseline-semibold"),"body-baseline-bold":Jl("body-baseline-bold"),"body-md-light":Jl("body-md-light"),"body-md-regular":Jl("body-md-regular"),"body-md-semibold":Jl("body-md-semibold"),"body-md-bold":Jl("body-md-bold"),"body-sm-light":Jl("body-sm-light"),"body-sm-regular":Jl("body-sm-regular"),"body-sm-semibold":Jl("body-sm-semibold"),"body-sm-bold":Jl("body-sm-bold"),"body-xs-light":Jl("body-xs-light"),"body-xs-regular":Jl("body-xs-regular"),"body-xs-semibold":Jl("body-xs-semibold"),"body-xs-bold":Jl("body-xs-bold"),"form-label":Jl("form-label"),"form-description":Jl("form-description")},tc={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},nc=e=>t=>{var n;const r=t.theme,i=kl(tc,null==r?void 0:r.motionScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.motion)?Sl(i,e,r.overrides.motion):i[e]},rc={"duration-150":nc("duration-150"),"duration-250":nc("duration-250"),"duration-350":nc("duration-350"),"duration-500":nc("duration-500"),"duration-800":nc("duration-800"),"duration-1000":nc("duration-1000"),"ease-default":nc("ease-default"),"ease-standard":nc("ease-standard"),"ease-entrance":nc("ease-entrance"),"ease-exit":nc("ease-exit")},ic={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},oc=e=>t=>{var n;const r=t.theme,i=kl(ic,null==r?void 0:r.radiusScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.radius)?`${Sl(i,e,r.overrides.radius)}px`:`${i[e]}px`},ac={none:oc("none"),xs:oc("xs"),sm:oc("sm"),md:oc("md"),lg:oc("lg"),full:oc("full")},sc={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},lc=e=>t=>{var n;const r=t.theme,i=kl(sc,null==r?void 0:r.spacingScheme);return(null===(n=null==r?void 0:r.overrides)||void 0===n?void 0:n.spacing)?`${Sl(i,e,r.overrides.spacing)}px`:`${i[e]}px`},cc={"spacing-0":lc("spacing-0"),"spacing-4":lc("spacing-4"),"spacing-8":lc("spacing-8"),"spacing-12":lc("spacing-12"),"spacing-16":lc("spacing-16"),"spacing-20":lc("spacing-20"),"spacing-24":lc("spacing-24"),"spacing-32":lc("spacing-32"),"spacing-40":lc("spacing-40"),"spacing-48":lc("spacing-48"),"spacing-64":lc("spacing-64"),"spacing-72":lc("spacing-72"),"layout-xs":lc("layout-xs"),"layout-sm":lc("layout-sm"),"layout-md":lc("layout-md"),"layout-lg":lc("layout-lg"),"layout-xl":lc("layout-xl"),"layout-xxl":lc("layout-xxl"),"layout-xxxl":lc("layout-xxxl")},dc=Object.assign(Object.assign({},jl),{Primitive:Il}),uc=Object.assign(Object.assign({},ec),{Spec:Kl}),hc=rc,gc=Object.assign(Object.assign({},El),{Util:Ll}),pc=cc,fc=ac,mc=Wl,bc=Vl,vc={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},yc={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},xc={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},wc={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},$c={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Cc={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Sc={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},kc=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${pc["spacing-24"]};
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

        ${({$highlight:e})=>e&&I`
                background-color: ${dc["bg-hover-neutral"]};
            `}
    }
`,Dc=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=ut(t,["children","focusHighlight","focusOutline","type"]);return e(kc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Tc=e=>I`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ec=(e,t,n=!1)=>I`
        ${uc[`${e}-${t}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Oc=e=>{if(e)return I`
            ${Tc(e)}
        `},Fc=(e,t)=>I`
    ${Ec(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,n)=>t?I`
            display: block;
            ${Oc(n)}
        `:e?I`
            display: inline;
        `:I`
            display: block;
            ${Oc(n)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${dc.text};
`;var _c;!function(n){const r=(e,t,n)=>{const r=_(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Fc(t,e)}
        `;return r.displayName=`Typography.${n}`,r};n.HeadingXXL=r("h1","heading-xxl","HeadingXXL"),n.HeadingXL=r("h2","heading-xl","HeadingXL"),n.HeadingLG=r("h3","heading-lg","HeadingLG"),n.HeadingMD=r("h4","heading-md","HeadingMD"),n.HeadingSM=r("h5","heading-sm","HeadingSM"),n.HeadingXS=r("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=_.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Fc(e,t)}
        `;return n.displayName=`Typography.${t}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const o=(n,r)=>{const i=_.a`
            ${e=>I`
                ${Ec(n,e.weight||"regular")}
                color: ${dc.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${dc["text-hover"]};
                }
            `}
        `,o=n=>{var{external:r=!1,children:o}=n,a=ut(n,["external","children"]);return t(i,Object.assign({},a,{children:[o,r&&e(Ic,{})]}))};return o.displayName=`Typography.${r}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(_c||(_c={}));const Ic=_(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Mc=_.div`
    background-color: ${dc.bg} !important;
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${bc.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Ac=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Bc=e=>I`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${hc["duration-250"]} ${hc["ease-standard"]};
`,jc=_(_c.HeadingSM)`
    ${e=>Bc(e.$isCollapsed)}
`,zc=_(_c.HeadingXS)`
    ${e=>Bc(e.$isCollapsed)}
`,Rc=_(Dc)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};
    margin: auto -1rem auto 0;
`,Pc=_(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${dc["icon-primary"]};
`,Lc=_(Yo.div)`
    overflow: hidden;
`,Nc=_.div`
    display: inline-block;
    padding-right: 4rem;

    ${bc.MaxWidth.lg} {
        padding-right: 0;
    }
`;const Hc=g((function(n,r){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=n,h=ut(n,["title","children","expanded","type","collapsible"]);const g=o(null),p=f(dt),[m,v]=a(!d||(null!=l?l:p)),[y,x]=a(!1),w=h["data-testid"]||"accordion-item",$=un(),C=$.ref;b(r,(()=>Object.assign(g.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||p)}),[p]),u((()=>{y&&v(!!l)}),[l]),u((()=>{x(!0)}),[]);const S={height:m?$.height:0},k=Do(S);return t(Mc,{"data-testid":w,className:h.className,$isCollapsed:m,ref:g,children:[t(Ac,{$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0,children:["string"!=typeof i?i:e("small"===c?zc:jc,{weight:"bold","data-testid":`${w}-title`,$isCollapsed:m,children:i}),d&&e(Rc,{"data-testid":`${w}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e(Pc,{})})]}),e(Lc,{style:y?k:S,$isCollapsed:m,"data-testid":`${w}-expandable-container`,children:e(Nc,{ref:C,id:"content-container",children:s})})]})})),Wc=_.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Yc=M`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Vc=_.div`
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
    animation: ${Yc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Uc=_(Vc)`
    animation-delay: -0.45s;
`,Xc=_(Vc)`
    animation-delay: -0.3s;
`,Kc=_(Vc)`
    animation-delay: -0.15s;
`,qc=({color:n,className:r,size:i})=>t(Wc,{className:r,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(Vc,{id:"inner1"}),e(Uc,{id:"inner2"}),e(Xc,{id:"inner3"}),e(Kc,{id:"inner4"})]}),Gc={collections:{default:{Button:{"button-radius":ac.sm,"button-default-colour-bg":jl["bg-primary"],"button-default-colour-bg-hover":jl["bg-primary-hover"],"button-default-colour-text":jl["text-inverse"],"button-secondary-colour-border":jl["border-primary"],"button-secondary-colour-text":jl["text-primary"],"button-light-colour-text":jl["text-primary"],"button-link-colour-text":jl["text-primary"]}},pa:{Button:{"button-radius":ac.full,"button-default-colour-bg":jl["bg-primary"],"button-default-colour-bg-hover":jl["bg-primary-hover"],"button-default-colour-text":jl["text-inverse"],"button-secondary-colour-border":jl["border-primary"],"button-secondary-colour-text":jl["text-primary"],"button-light-colour-text":jl["text-primary"],"button-link-colour-text":jl["text-primary"]}}},defaultValue:"default"},Zc=(e,t)=>n=>{var r,i;const o=n.theme,a=kl(Gc,null==o?void 0:o.componentScheme);return Qc((null===(i=null===(r=null==o?void 0:o.componentOverrides)||void 0===r?void 0:r[e])||void 0===i?void 0:i[t])||a[e][t],n)},Qc=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Jc=Zc("Button","button-radius"),ed=Zc("Button","button-default-colour-bg"),td=Zc("Button","button-default-colour-bg-hover"),nd=Zc("Button","button-default-colour-text"),rd=Zc("Button","button-secondary-colour-border"),id=Zc("Button","button-secondary-colour-text"),od=Zc("Button","button-light-colour-text"),ad=Zc("Button","button-link-colour-text"),sd=_.button`
    padding: ${pc["spacing-8"]} ${pc["spacing-16"]};
    min-width: 4rem;
    border: ${gc["width-010"]} ${gc.solid} transparent;
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    border-radius: ${Jc};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return I`
                    background-color: ${dc.Primitive.white};
                    border-color: ${e.$buttonIsDanger?dc["border-error-strong"]:rd};

                    color: ${e.$buttonIsDanger?dc["text-error"]:id};

                    &:hover,
                    &:active {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"light":return I`
                    background-color: ${dc.bg};
                    border-color: ${dc.border};

                    color: ${e.$buttonIsDanger?dc["text-error"]:od};

                    &:hover,
                    &:active {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"link":return I`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?dc["text-error"]:ad};
                    &:hover,
                    &:active {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"disabled":return I`
                    background-color: ${dc["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${dc["text-disabled"]};
                `;default:return I`
                    background-color: ${e.$buttonIsDanger?dc["bg-error-strong"]:ed};};

                    ${bc.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${nd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?dc["bg-error-strong-hover"]:td}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return I`
                    height: 2.5rem;
                    ${uc["body-md-semibold"]}

                    ${bc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return I`
                    height: 4rem;
                    ${uc["heading-md-semibold"]}

                    ${bc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return I`
                    height: 3rem;
                    ${uc["heading-xs-semibold"]}

                    ${bc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ld=_(qc)`
    margin-right: 0.5rem;
`,cd=(n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=ut(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(sd,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(ld,{}),e("span",{children:i})]}))};cd.displayName="Button.Default";const dd=(n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=ut(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(sd,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(ld,{}),e("span",{children:i})]}))};dd.displayName="Button.Small";const ud=(n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=ut(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(sd,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(ld,{}),e("span",{children:i})]}))};ud.displayName="Button.Large";const hd={Default:i.forwardRef(cd),Small:i.forwardRef(dd),Large:i.forwardRef(ud)},gd=_.div`
    width: 100%;
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
`,pd=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${bc.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return I`
                ${bc.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,fd=_(_c.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${bc.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return I`
                ${bc.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,md=_(hd.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,bd=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=a("expand-all"===o),u=e=>{e.preventDefault(),d((e=>!e))};return e(dt.Provider,{value:c,children:t(gd,{className:l,children:[r||i?t(pd,{$showTitleInMobile:s,$hasExpandAll:i,children:[r&&e(fd,{weight:"bold",$showInMobile:s,"data-testid":"accordion-title",children:r}),i&&e(md,{"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button",children:c?"Hide all":"Show all"})]}):null,n]})})}),{Item:Hc}),vd=e=>{const{textSize:t}=e||{};return I`
        // Text styling
        ${t&&uc[`${t}-regular`]}

        strong {
            font-weight: ${uc.Spec["weight-semibold"]};
            ${t&&uc[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${uc.Spec["weight-semibold"]};
            ${t&&uc[`${t}-semibold`]}
            color: ${dc.hyperlink};
            text-decoration: none;

            svg {
                color: ${dc["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${dc["hyperlink-hover"]};

                svg {
                    color: ${dc["icon-hover"]};
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
    `},yd=_.div`
    padding: ${pc["spacing-8"]} ${pc["spacing-16"]};
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=dc["bg-error"](e),n=dc["border-error"](e);break;case"success":t=dc["bg-success"](e),n=dc["border-success"](e);break;case"warning":default:t=dc["bg-warning"](e),n=dc["border-warning"](e);break;case"info":t=dc["bg-info"](e),n=dc["border-info"](e);break;case"description":t=dc["bg-strong"](e),n=dc["border-strong"](e)}return I`
            background: ${t};
            border-left: ${gc["width-020"]} ${gc.solid}
                ${n};
        `}}

    color: ${dc.text};
    ${e=>"small"===e.$sizeType?vd({textSize:"body-sm"}):vd({textSize:"body-md"})}
`,xd=_.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${pc["spacing-8"]};

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=dc["icon-error"](e);break;case"success":t=dc["icon-success"](e);break;case"warning":default:t=dc["icon-warning"](e);break;case"info":t=dc["icon-info"](e);break;case"description":t=dc["icon-subtle"](e)}return I`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,wd=_(_c.LinkSM)`
    ${e=>"small"===e.$sizeType?I`
                ${uc["body-sm-semibold"]}
                margin-top: ${pc["spacing-4"]};
            `:I`
                ${uc["body-md-semibold"]}
                margin-top: ${pc["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${pc["spacing-4"]};
    }
`,$d=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Cd=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return I`
                margin-bottom: ${pc["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Sd=_.button`
    ${e=>"small"===e.$sizeType?I`
                ${uc["body-sm-semibold"]}
            `:I`
                ${uc["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${pc["spacing-4"]};
    margin-top: ${pc["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${dc["text-primary"]};
`,kd=_(N)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hc["duration-350"]} ${hc["ease-standard"]};
`,Dd=n=>{var{type:r,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:g}=n,p=ut(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=un();u((()=>{w()}),[g,y]);const w=()=>{m(!g),v($())},$=()=>!(!y||!g)&&y>g;return t(yd,{className:i,$type:r,$sizeType:c,"data-testid":p["data-testid"],children:[d&&e(xd,{$sizeType:c,$type:r,children:(()=>{if(r&&h)return h;switch(r){case"success":return e(L,{});case"warning":return e(R,{});case"error":return e(z,{});case"info":case"description":return e(P,{});default:return null}})()}),t($d,{children:[t(Cd,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(wd,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||e(j,{})]})):null]}),b&&t(Sd,{$sizeType:c,$type:r,type:"button",onClick:()=>m(!f),children:["Show ",f?"less":"more",e(kd,{$expanded:f})]})]})]})},Td=v((()=>ht(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.7170dc02.js")).LottieSpinner}})))),Ed=t=>e(Fd,Object.assign({},t,{children:e(y,{fallback:e(Od,{}),children:e(Td,{})})})),Od=()=>e("div",{style:{height:"200px",width:"200px"}}),Fd=_.div`
    margin: 0 auto;
    padding: ${pc["spacing-32"]} ${pc["spacing-16"]};
`,_d=v((()=>ht(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.9da51a31.js")).LottieLoadingDots}})))),Id=t=>e(Ad,Object.assign({},t,{children:e(y,{fallback:e(Md,{}),children:e(_d,{})})})),Md=()=>e("div",{style:{height:"16px",width:"64px"}}),Ad=_.div`
    margin: 0 auto;
`,Bd=v((()=>ht(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.a1c5d688.js")).LottieLoadingDotsSpinner}})))),jd=t=>{var{color:n}=t,r=ut(t,["color"]);const i=A(),o=n||dc["icon-primary"]({theme:i});return e(Rd,Object.assign({},r,{children:e(y,{fallback:e(zd,{}),children:e(Bd,{color:o})})}))},zd=()=>e("div",{style:{height:"200px",width:"200px"}}),Rd=_.div`
    margin: 0 auto;
`,Pd=t=>{const n=A();return"lifesg"===(null==n?void 0:n.resourceScheme)?e(Ed,Object.assign({},t)):e(jd,Object.assign({},t))};var Ld,Nd={exports:{}};Ld=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(c),arrayOf:function(e){return p((function(t,n,r,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new g("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,n,r,i,o){var a=t[n];return e(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new g("Invalid "+r+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,n,r,i){return b(e[t])?null:new g("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=v(l);if("object"!==c)return new g("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return p((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,r,i,o){var s=t[n],l=v(s);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(r,i,o,c,y(d));var u=d(s,c,r,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return p((function(t,n,r,i,l){var c=t[n],d=v(c);if("object"!==d)return new g("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=o({},t[n],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return m(r,i,l,h,y(p));if(!p)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,r,i,l+"."+h,a);if(f)return f}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var n={},i=0;function o(o,s,l,c,u,h,p){if(c=c||d,h=h||l,p!==a){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function f(e){return p((function(t,n,r,i,o,a){var s=t[n];return v(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,n,r,i){return new g((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!b(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var g=e.type;switch(g){case c:case d:case i:case a:case o:case h:return g;default:var m=g&&g.$$typeof;switch(m){case l:case u:case f:case p:case s:return m;default:return t}}case r:return t}}}var w=c,$=d,C=l,S=s,k=n,D=u,T=i,E=f,O=p,F=r,_=a,I=o,M=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=D,t.Fragment=T,t.Lazy=E,t.Memo=O,t.Portal=F,t.Profiler=_,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Hd=Nd.exports=Ld(i);const Wd=_.div`
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    margin-bottom: ${pc["spacing-32"]};
`,Yd=_(Yo.div)`
    overflow: hidden;
`,Vd=_.div`
    height: max-content;
`,Ud=_.div`
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};
`,Xd=_.div`
    padding: ${pc["spacing-16"]} ${pc["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${bc.MaxWidth.sm} {
        padding: ${pc["spacing-16"]} ${pc["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return I`
                cursor: pointer;
            `}}
`,Kd=_.div`
    ${uc["heading-sm-semibold"]}
    color: ${dc.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${pc["spacing-16"]};
`,qd=_.div`
    display: flex;
`,Gd=_.span`
    display: flex;
    align-items: center;
    margin-right: ${pc["spacing-40"]};

    ${bc.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return I`
                    color: ${dc["icon-error"]};
                `;case"warning":return I`
                    color: ${dc["icon-warning"]};
                `}}}
`,Zd=_(z)`
    height: ${uc.Spec["heading-size-sm"]};
    width: ${uc.Spec["heading-size-sm"]};
`,Qd=_.div`
    display: flex;
    margin-left: auto;
    ${bc.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return I`
                margin-right: ${pc["spacing-40"]};
                ${bc.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${pc["spacing-16"]};
                }
            `}}
`,Jd=_.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${pc["spacing-16"]};
    margin: -${pc["spacing-16"]};
    display: flex;
    align-items: center;

    ${bc.MaxWidth.sm} {
        margin: -${pc["spacing-16"]} -${pc["spacing-16"]} -${pc["spacing-16"]} 0;
        margin-left: auto;
    }
`,eu=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${hc["duration-250"]} ${hc["ease-default"]};
`,tu=_(fe)`
    color: ${dc.icon};
    height: ${uc.Spec["heading-size-sm"]};
    width: ${uc.Spec["heading-size-sm"]};
`,nu=n=>{var{children:r,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=n,h=ut(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[g,p]=a(!o||s),f=un(),m=f.ref,b=A(),v=mc["sm-max"]({theme:b}),y=Hd.useMediaQuery({maxWidth:v}),x=u&&o,w=e=>{e.stopPropagation(),p(!g)},$=Do({height:g?f.height:0}),C=()=>o&&e(Jd,{onClick:w,type:"button","aria-label":g?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e(eu,{$expanded:g,children:e(tu,{"aria-hidden":!0})})});return t(Wd,Object.assign({},h,{children:[t(Xd,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[t(qd,{children:[e(Kd,{"data-testid":(null==d?void 0:d.title)||"title",children:i}),(()=>{switch(c){case"error":case"warning":return e(Gd,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e(Zd,{})});default:return null}})(),y&&C()]}),l&&e(Qd,{$collapsible:o,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),o?e(Yd,{style:$,"data-testid":"expandable-container",children:e(Ud,{ref:m,children:r})}):e(Vd,{"data-testid":"non-expandable-container",children:e(Ud,{children:r})})]}))};var ru={exports:{}};ru.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},C=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!k.u(t)||t,d=k.p(e),g=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?g(1,0):g(31,11);case c:return r?g(1,m):g(0,m+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(r?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=k.p(e),d="set"+(this.$u?"UTC":""),g=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(h,1);f.$d[g](p),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(r,d){var h,g=this;r=Number(r);var p=k.p(d),f=function(e){var t=S(g);return k.w(t.date(t.date()+Math.round(e*r)),g)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return f(1);if(p===l)return f(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,b=this.$d.getTime()+r*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return k.s(o%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,h,g){var p,f=this,m=k.p(h),b=S(r),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(f,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/n;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return g?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),T=D.prototype;return S.prototype=T,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var iu=Uo(ru.exports),ou={exports:{}};ou.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],g=d&&d[1];a[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,g=new Date,p=a||(i||o?1:g.getDate()),f=i||g.getFullYear(),m=0;i&&!o||(m=o>0?o-1:g.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(f,m,p,b,v,y,x+60*u.offset*1e3)):n?new Date(Date.UTC(f,m,p,b,v,y,x)):new Date(f,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,p=1;p<=g;p+=1){a[1]=s[p-1];var f=n.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}p===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var au=Uo(ou.exports),su={exports:{}};su.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var lu=Uo(su.exports),cu={exports:{}};cu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var du=Uo(cu.exports),uu={exports:{}};uu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var hu,gu,pu=Uo(uu.exports),fu={exports:{}};fu.exports=(hu={year:0,month:1,day:2,hour:3,minute:4,second:5},gu={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=gu[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),gu[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=hu[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(g).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var mu,bu=Uo(fu.exports);iu.extend(lu),iu.extend(pu),iu.extend(du),iu.extend(au),iu.extend(bu),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=iu(t).startOf("week");return vu(n).map((e=>yu(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return yu(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(iu(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+iu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=iu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?iu(r):void 0,i?iu(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(mu||(mu={}));const vu=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},yu=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},xu=[1,3,5,7,8,10,12],wu=[4,6,9,11];var $u,Cu,Su,ku;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":xu.includes(o)?Math.min(i,31).toString():wu.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=iu(e,n);return iu(t,n).diff(r,"minute")},e.toDayjs=e=>e?iu(e):iu(),e.addMinutesToTime=(e,t,n="HH:mm")=>iu(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>iu(e).isSame(iu(t),n)}($u||($u={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(e&&n&&n.length&&n.includes(e))||(!(!r||!iu(e).isBefore(r,"day"))||!(!i||!iu(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(iu(e).isValid())return e}return""}}(Cu||(Cu={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Su||(Su={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ku||(ku={}));function Du(e){const t=o(null);return h((()=>{t.current=e}),[e]),p(((...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}const Tu=(e,t,n="window",r)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.call(i,e)};return t.addEventListener(e,o,r),()=>{null==t||t.removeEventListener(e,o,r)}}),[e,n])},Eu="undefined"!=typeof window?h:u,Ou=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function Fu({ref:e,formatter:t}){return()=>{var n;const r=e.current;if(!r)return;const i=r.value,o=t(i),a=null!==(n=r.selectionEnd)&&void 0!==n?n:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{r.value=o,r.setSelectionRange(d,d)}}}}const _u=e=>{const t=(e=>{const t=o(e),n=o();return u((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Iu=e=>{const[t,n]=a(e),r=o(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]},Mu=_.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${pc["spacing-32"]} 0;

    ${bc.MaxWidth.xl} {
        margin: ${pc["spacing-24"]} 0;
    }

    ${bc.MaxWidth.lg} {
        margin: ${pc["spacing-16"]} 0;
    }
`,Au=_.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${pc["spacing-8"]};
    font-size: ${uc.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${bc.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,Bu=_.div`
    width: ${pc["spacing-64"]};
    height: calc(1lh + ${pc["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,I`
            ${bc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,ju=_.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,zu=_(me)`
    margin: ${pc["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${dc["icon-subtle"]};
`,Ru=_(_c.BodyMD)`
    margin: ${pc["spacing-8"]} !important;
`,Pu=_(_c.LinkMD)`
    margin: ${pc["spacing-8"]} !important;
`,Lu=r=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=r,u=ut(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,g]=a(!1),[p,f]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),w=o(null),$=A(),C=mc["lg-max"]({theme:$}),S=Du((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=C&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=Du((()=>{const e=window.innerWidth<=C;g(e);const t=w.current,n=x.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return f(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);f(!1),b(!1)}));if(Tu("resize",k),Tu("scroll",k,w.current),Eu((()=>{S(),k()}),[S,k]),un({onResize:S,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(Mu,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(Au,{ref:w,children:i.map(((n,r)=>{let o;return n.children?(o=r!==i.length-1&&n.href?e(Pu,Object.assign({},n,{weight:"semibold"})):e(Ru,{weight:"semibold",children:n.children}),t(ju,{$styleProps:c,children:[o,r<i.length-1&&e(zu,{})]},r)):null}))})}),h&&(()=>{let r;return r=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(n,{children:[p&&v&&e(Bu,{$backgroundColor:r.left,$position:"left"}),m&&y&&e(Bu,{$backgroundColor:r.right,$position:"right"})]})})()]}))},Nu=_(sd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Hu=(n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=n,u=ut(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Nu,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(qc,{}):l,e("span",{children:i})]}))};Hu.displayName="ButtonWithIcon.Default";const Wu=(n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=n,u=ut(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Nu,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(qc,{}):l,e("span",{children:i})]}))};Wu.displayName="ButtonWithIcon.Small";const Yu={Default:i.forwardRef(Hu),Small:i.forwardRef(Wu)},Vu=_.div`
    --vertical-inset: ${pc["spacing-24"]};
    --horizontal-inset: ${pc["spacing-20"]};
    --header-bottom-spacing: ${pc["spacing-4"]};

    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${bc.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Uu=I`
    color: ${dc.icon};
    height: 1rem;
    width: 1rem;
`,Xu=_(be)`
    ${Uu}
`,Ku=_(me)`
    ${Uu}
`,qu=_(fe)`
    ${Uu}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Gu=_.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Zu=_.div`
    display: flex;
    flex: 1;
    position: relative;
`,Qu=_.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ju=_.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${dc.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return I`
                display: none;
            `}}
`,eh=_.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,th=_.div`
    display: flex;
`,nh=_.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?I`
                display: none;
            `:e.$expanded?I`
                ${qu} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,rh=_.span`
    ${uc["body-md-regular"]}
    color: ${dc.text};
`,ih=_.div`
    display: flex;
`,oh=_(Dc)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ah=_.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,sh=_(hd.Small)`
    flex: 1;
`,lh=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,ch=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${fc.md};
    margin: 0 0.5rem;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};

    // default styles
    ${uc["body-md-regular"]}
    border-radius: ${fc.md};
    border: ${gc["width-010"]} ${gc.solid} transparent;
    background-clip: border-box;
    color: ${dc.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?I`
                cursor: pointer;
            `:e.$disabledDisplay?I`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:n})=>"selected-month"===e?I`
                background: ${dc["bg-selected"]};
                border-color: ${dc["border-selected"]};
                color: ${dc["text-selected"]};
                font-weight: ${uc.Spec["weight-semibold"]};

                ${t&&I`
                    &:hover {
                        background: ${dc["bg-selected-hover"]};
                        border-color: ${dc["border-selected-hover"]};
                        color: ${dc["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?I`
                color: ${dc["text-primary"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            `:n?I`
                color: ${dc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?I`
                &:hover {
                    background: ${dc["bg-selected-hover"]};
                    border-color: ${dc["border-selected-hover"]};
                    color: ${dc["text-selected-hover"]};
                    font-weight: ${uc.Spec["weight-semibold"]};
                }
            `:I`
            &:hover {
                background: ${dc["bg-hover"]};
                color: ${dc["text-hover"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            }
        `}}
`,dh=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onMonthSelect:d})=>{const u=m((()=>mu.generateMonths(iu(t))),[t]),h=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&a,o="end"===n&&r&&e.isBefore(r,"month")&&a;return!(!t&&!o)},g=e=>{const t=e.format("MMMM"),n=(r=e,!mu.isWithinRange(r,s?iu(s):void 0,l?iu(l):void 0,"month"));var r;const i=o.isSame(e,"month")?"selected-month":iu().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||c,month:t,variant:i}};return u.length?e(lh,{children:u.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:o}=g(t);return e(ch,{$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(t,!r),children:o},o)}))}):null},uh=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,hh=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${uc["body-md-regular"]}
    border-radius: ${fc.md};
    border: ${gc["width-010"]} ${gc.solid} transparent;
    background-clip: border-box;
    color: ${dc.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?I`
                cursor: pointer;
            `:t?I`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:n})=>"selected-year"===e?I`
                background: ${dc["bg-selected"]};
                border-color: ${dc["border-selected"]};
                color: ${dc["text-selected"]};
                font-weight: ${uc.Spec["weight-semibold"]};

                ${t&&I`
                    &:hover {
                        background: ${dc["bg-selected-hover"]};
                        border-color: ${dc["border-selected-hover"]};
                        color: ${dc["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?I`
                color: ${dc["text-primary"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            `:"other-decade"===e||n?I`
                color: ${dc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?I`
                &:hover {
                    background: ${dc["bg-selected-hover"]};
                    border-color: ${dc["border-selected-hover"]};
                    color: ${dc["text-selected-hover"]};
                    font-weight: ${uc.Spec["weight-semibold"]};
                }
            `:I`
            &:hover {
                background: ${dc["bg-hover"]};
                color: ${dc["text-hover"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            }
        `}}
`,gh=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onYearSelect:d})=>{const u=m((()=>mu.generateDecadeOfYears(iu(t))),[t]),h=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&a,o="end"===n&&r&&e.isBefore(r,"year")&&a;return!(!t&&!o)},g=e=>{const t=[0,11].includes(u.indexOf(e)),n=e.year(),r=(i=e,!mu.isWithinRange(i,s?iu(s):void 0,l?iu(l):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":iu().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||c,year:n,variant:a}};return u.length?e(uh,{children:u.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:o}=g(t);return e(hh,{$variant:i,$disabledDisplay:n,$interactive:!!r,onClick:()=>((e,t)=>{t||d(e)})(t,!r),children:o},o)}))}):null},ph=i.forwardRef(((r,i)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:g,selectedEndDate:p,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:T,getMonthHeaderLabel:E,getYearHeaderLabel:O}=r,F=ut(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[_,I]=a($u.toDayjs(l)),[M,A]=a($u.toDayjs(l)),[B,j]=a("default"),z=o(null),R=o(null),P=o(null);b(i,(()=>({defaultView(){j("default")},resetView(){const e=$u.toDayjs(l);I(e),A(e),j("default")},setCalendarDate(e){const t=$u.toDayjs(e);I(t),A(t)}}))),u((()=>{const e=$u.toDayjs(l);I(e),A(e)}),[l]),u((()=>{U(M)}),[M]);const L=()=>{var e;"month-options"!==B?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),I(M))},N=()=>{"default"!==B?(j("default"),I(M)):j("year-options")},H=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(_):_.subtract(1,"month");switch(B){case"default":A(t),I(t);break;case"month-options":I((e=>e.subtract(1,"year")));break;case"year-options":I((e=>e.subtract(10,"year")))}},W=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=k?k(_):_.add(1,"month");switch(B){case"default":A(t),I(t);break;case"month-options":I((e=>e.add(1,"year")));break;case"year-options":I((e=>e.add(10,"year")))}},Y=e=>{I(e),A(e),x||j("default")},V=()=>{const e=$u.toDayjs(l);I(e),A(e),"default"===B?X("reset"):j("default")},U=e=>{y&&y(e)},X=e=>{$&&$(e)},K=()=>{if(!c||v)return!1;const e=iu(c);return"month-options"===B?!mu.isPreviousYearWithinRange(_,e):"year-options"===B?!mu.isPreviousDecadeWithinRange(_,e):D?D(_):!mu.isPreviousMonthWithinRange(_,e)},q=()=>{if(!d||v)return!1;const e=iu(d);return"month-options"===B?!mu.isNextYearWithinRange(_,e):"year-options"===B?!mu.isNextDecadeWithinRange(_,e):T?T(_):!mu.isNextMonthWithinRange(_,e)},G=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=mu.getStartEndDecade(_);return`${e} to ${t}`}return O?O(_):_.format("YYYY")},Z=()=>{const r=E?E(_):_.format("MMM");return t(n,{children:[t(nh,{type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:L,children:[e(rh,{children:r}),e(qu,{})]}),t(nh,{type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:N,children:[e(rh,{children:G()}),e(qu,{})]})]})},Q=()=>{switch(B){case"month-options":return e(dh,{calendarDate:_,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:M,isNewSelection:!!f,onMonthSelect:Y,allowDisabledSelection:v});case"year-options":return e(gh,{calendarDate:_,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:M,isNewSelection:!!f,onYearSelect:Y,allowDisabledSelection:v});default:return null}};return t(Gu,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},F,{children:[C&&t(eh,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(th,{children:Z()}),t(ih,{children:[e(oh,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:H,children:e(Xu,{})}),e(oh,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:W,children:e(Ku,{})})]})]}),e(Zu,{children:(()=>{const r="function"==typeof s?s({calendarDate:M,currentView:B}):s;return t(n,m?{children:["default"===B&&r,Q()]}:{children:[e(Qu,{children:r}),e(Ju,{$visible:"default"!==B,children:Q()})]})})()}),(()=>{if(!x)return;const n=!!("default"===B)&&w;return t(ah,{children:[e(sh,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:V,children:"Cancel"}),e(sh,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{n||(I(M),"default"===B?X("confirmed"):j("default"))},disabled:n,children:"Done"})]})})()]}))})),fh=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,mh=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${uc["body-sm-semibold"]};
    color: ${dc.text};
`,bh=_.div`
    grid-column: 1 / -1;
    display: flex;
`,vh=e=>{let t=dc.bg,n="transparent";switch(e.$type){case"hover-subtle":t=dc["bg-hover"],n=dc["bg-hover"];break;case"hover":t=dc["bg-hover-strong"],n=dc["bg-hover-strong"];break;case"hover-outline":t=dc["bg-hover-subtle"],n=dc["border-hover"];break;case"selected-outline":t=dc["bg-selected"],n=dc["border-selected"];break;case"selected-outline-subtle":t=dc["bg-selected"],n=dc["border-selected-subtle"];break;case"selected-hover":t=dc["bg-selected-hover"];break;case"selected-hover-outline":t=dc["bg-selected-hover"],n=dc["border-selected-hover"]}return{color:t,borderColor:n}},yh=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,xh=_.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
    border: ${gc["width-010"]} ${gc.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:n}=vh(e);return I`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${n};
            border-bottom-color: ${n};
        `}}
`,wh=_(xh)`
    left: 0;
`,$h=_(xh)`
    right: 0;
`,Ch=_.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};

    border: ${gc["width-010"]} ${gc.solid} transparent;
    border-radius: ${fc.md};

    ${e=>{if(e.$type){const{color:t,borderColor:n}=vh(e);return I`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${n};
            `}}}
`,Sh=_(Ch)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,kh=_(Ch)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Dh=_.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${uc["body-md-regular"]}
    transition: ${hc["duration-150"]} ${hc["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"hidden"===n?I`
                    visibility: hidden;
                `:I`
                color: ${dc["text-disabled-subtlest"]};
            `;switch(n){case"selected":return I`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-selected"]};
                `;case"selected-hover":return I`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-selected-hover"]};
                `;case"current":return I`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-primary"]};
                `;case"hover":return I`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-hover"]};
                `;case"unavailable":return I`
                    color: ${dc["text-disabled-subtlest"]};
                `;case"hidden":return I`
                    visibility: hidden;
                `;default:return I`
                    color: ${dc.text};
                `}}}
`,Th=_.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Eh=({bgLeft:n,bgRight:r,circleLeft:i,circleRight:o,labelType:a,disabled:s,interactive:l,currentDateIndicator:c,date:d,onSelect:u,onHover:h,onHoverEnd:g})=>{const p=iu().isSame(d,"day");return t(yh,{children:[e(wh,{$type:n}),e(Sh,{$type:i}),e($h,{$type:r}),e(kh,{$type:o}),t(Dh,{$type:a,$disabled:s,$interactive:l,onClick:()=>{u(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{g&&g(d)},children:[d.date(),c&&p&&e(Th,{$disabled:s})]})]})},Oh=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:g,onHover:p})=>{const f=mu.isDisabledDay(t,c,s,l),m=!f||d,b=()=>{const e=iu(a),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===o&&i&&t&&(r&&n?(c=a,d=i):(s=a,l=r||i)),"end"===o&&r&&n&&(i&&t?(c=r,d=a):(s=i||r,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:n,disabled:f,interactive:m,currentDateIndicator:!0,onSelect:()=>{g(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e(Eh,Object.assign({},v,(()=>{const e={};if(n.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(iu().isSame(t,"day")&&!f)e.labelType="current";else if(u){const n="end"===o&&r&&t.isBefore(r),a="start"===o&&i&&t.isAfter(i);(n||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(r,"day"),a=t.isSame(i,"day");return h&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},n=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(n){const n=t.isSame(r,"day"),o=t.isSame(i,"day");n||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const n=t.isSame(o,"day"),r=t.isSame(s,"day");n||(e.labelType="hover",e.bgLeft="hover-outline"),r||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&n&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};iu.extend(lu);const Fh=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:p})=>{const f=m((()=>mu.generateDays(n)),[n]),[b,v]=a(""),y=(e,t)=>{t&&!g||l(e)},x=(e,t)=>{t&&!g||(v(e),c(e))},w=()=>{v(""),c("")};return t(fh,{"data-testid":"calendar-content",children:[f[0].map(((t,n)=>e(mh,{children:iu(t).format("ddd")},`week-day-${n}`))),f.map(((t,a)=>e(bh,{onMouseLeave:w,children:t.map(((t,a)=>e(Oh,{date:t,calendarDate:n,startDate:o,endDate:s,hoverDate:b,currentFocus:r,minDate:u,maxDate:h,disabledDates:i,allowDisabledSelection:g,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:y,onHover:x},`day-${a}`)))},a)))]})},_h=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const h=mu.isDisabledDay(t,s,o,a),g=!h||l,{start:p,end:f}=r?mu.getFixedRangeStartEnd($u.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:b}=i?mu.getFixedRangeStartEnd($u.toDayjs(i),c):{start:void 0,end:void 0},v=!!r&&t.isBetween(p,f,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(f,"day")||y&&t.isSame(b,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:n,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(Eh,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":iu().isSame(t,"day")&&!h&&(e.labelType="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover",n===m,n===b),v&&$(e,"selected-outline",n===p,n===f),v&&y&&($(e,"selected-hover-outline",x,w),n===m&&n!==p&&(e.circleLeft="selected-hover")),e})()))},Ih=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>mu.generateDays(n)),[n]),[g,p]=a(""),f=(e,t)=>{t&&!d||(o(e),e&&!iu(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(fh,{"data-testid":"calendar-content",children:[h[0].map(((t,n)=>e(mh,{children:iu(t).format("ddd")},`week-day-${n}`))),h.map(((t,o)=>e(bh,{onMouseLeave:v,children:t.map(((t,o)=>e(_h,{date:t,calendarDate:n,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:f,onHover:b,numberOfDays:u},`day-${o}`)))},o)))]})},Mh=_.div`
    width: 100%;
    background: ${dc.bg};
`,Ah=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const h=mu.isDisabledDay(t,s,o,a),g=!h||l,p={date:t,calendarDate:n,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(Eh,Object.assign({},p,(()=>{const e={};n.month()!==t.month()?e.labelType=c?"hidden":"unavailable":iu().isSame(t,"day")&&!h&&(e.labelType="current");const o=t.isSame(r,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};iu.extend(lu);const Bh=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const h=m((()=>mu.generateDays(n)),[n]),[g,p]=a(""),f=(e,t)=>{t&&!d||o(e)},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(fh,{"data-testid":"calendar-content",children:[h[0].map(((t,n)=>e(mh,{children:iu(t).format("ddd")},`week-day-${n}`))),h.map(((t,o)=>e(bh,{onMouseLeave:v,children:t.map(((t,o)=>e(Ah,{date:t,calendarDate:n,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:f,onHover:b},`day-${o}`)))},o)))]})},jh=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=mu.isDisabledDay(t,s,o,a),h=!u||l,{start:g,end:p}=mu.getWeekStartEnd($u.toDayjs(r)),{start:f,end:m}=mu.getWeekStartEnd($u.toDayjs(i)),b=r&&t.isBetween(g,p,"day","[]"),v=i&&t.isBetween(f,m,"day","[]"),y=b&&t.isSame(g)||v&&t.isSame(f),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:n,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(Eh,Object.assign({},w,(()=>{const e={};return n.month()!==t.month()?e.labelType="unavailable":iu().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,n;return b&&v?(t="selected-hover-outline",n="selected-hover"):b?(t="selected-outline",n="selected"):v&&(t="hover",n="hover"),t&&(e.labelType=n,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},zh=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>mu.generateDays(n)),[n]),[h,g]=a(""),p=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");o(n),e&&!iu(e).isSame(n,"month")&&g("")},f=(e,t)=>{t&&!d||(g(e),s(e))},b=()=>{g(""),s("")};return t(fh,{"data-testid":"calendar-content",children:[u[0].map(((t,n)=>e(mh,{children:iu(t).format("ddd")},`week-day-${n}`))),u.map(((t,o)=>e(bh,{onMouseLeave:b,children:t.map(((t,o)=>e(jh,{date:t,calendarDate:n,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:p,onHover:f},`day-${o}`)))},o)))]})},Rh=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:g,allowDisabledSelection:p,selectWithinRange:f=!0,initialCalendarDate:m,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=o(null),$=o(void 0);b(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const C=e=>{var t;const n=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(n),k(n)},S=e=>{D(e)},k=e=>{r&&r(e)},D=e=>{i&&i(e)},T=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e(Mh,{children:e(ph,{ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:g,selectWithinRange:f,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||T(e),$.current=e},initialCalendarDate:m,children:({calendarDate:n})=>(n=>{switch(u){case"week":return e(zh,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:C,onHover:S});case"fixed-range":return e(Ih,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:C,onHover:S,numberOfDays:v});case"single":return e(Bh,{calendarDate:n,disabledDates:t,selectedDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:C,onHover:S});default:return e(Fh,{calendarDate:n,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:f,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:C,onHover:S})}})(n)})})})),Ph=i.forwardRef(((t,n)=>{var{width:r}=t,i=ut(t,["width"]);return e(Vu,{$width:r,"data-testid":"calendar-dropdown",children:e(Rh,Object.assign({ref:n},i))})})),Lh=t=>{var{className:n,styleType:r="bordered",value:i,onSelect:o}=t,s=ut(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(Nh,{className:n,$hasBorder:"bordered"===r,children:e(Rh,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))})},Nh=_.div`
    --vertical-inset: ${pc["spacing-24"]};
    --horizontal-inset: ${pc["spacing-32"]};
    --header-bottom-spacing: ${pc["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return I`
                border: ${gc["width-010"]} ${gc.solid} ${dc.border};
                border-radius: ${fc.lg};
                overflow: hidden;
            `}}
`,Hh=_.div`
    border-radius: ${fc.md};
    background: ${dc.bg};
    padding: ${pc["spacing-16"]} ${pc["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Wh=t=>{var{children:n}=t,r=ut(t,["children"]);const i=r["data-testid"]||"card";return e(Hh,Object.assign({},r,{"data-testid":i,children:"string"==typeof n?e(_c.BodyBL,{children:n}):n}))},Yh=M`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Vh=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>I`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Uh=I`
    animation: ${hc["duration-150"]} ${hc["ease-default"]} ${Yh};
    width: 100%;
    height: 100%;
    transition: color ${hc["duration-150"]} ${hc["ease-default"]};
`,Xh=_(H)`
    ${Uh}
    color: ${dc["icon-primary-subtlest"]};
`,Kh=_(W)`
    ${Uh}
    color: ${dc["icon-disabled-subtle"]};
`,qh=_(Y)`
    ${Uh}
    color: ${e=>e.$disabled?dc["icon-disabled-subtle"](e):dc["icon-selected"](e)};
`,Gh=_(V)`
    ${Uh}
    color: ${e=>e.$disabled?dc["icon-disabled-subtle"](e):dc["icon-selected"](e)};
`,Zh=_.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Xh},
        &:hover
        + ${qh},
        &:hover
        + ${Gh} {
        color: ${e=>!e.disabled&&dc["icon-hover"](e)};
    }
`,Qh=n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=n,h=ut(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=o(null);u((()=>{g.current&&(g.current.indeterminate=null!=s&&s)}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Vh,{className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||i||a),children:[e(Zh,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:g,tabIndex:-1,onChange:p,disabled:a},h)),s?e(Gh,{$disabled:a,"data-testid":"indeterminate"}):i?e(qh,{$disabled:a,"data-testid":"checkmark"}):a?e(Kh,{"data-testid":"empty-disabled-checkbox"}):e(Xh,{$disabled:a,"data-testid":"empty-checkbox"})]})};var Jh=Qo,eg=/\s/;var tg=function(e){for(var t=e.length;t--&&eg.test(e.charAt(t)););return t},ng=/^\s+/;var rg=function(e){return e?e.slice(0,tg(e)+1).replace(ng,""):e},ig=xa,og=pa,ag=/^[-+]0x[0-9a-f]+$/i,sg=/^0b[01]+$/i,lg=/^0o[0-7]+$/i,cg=parseInt;var dg=function(e){if("number"==typeof e)return e;if(og(e))return NaN;if(ig(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ig(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=rg(e);var n=sg.test(e);return n||lg.test(e)?cg(e.slice(2),n?2:8):ag.test(e)?NaN:+e},ug=xa,hg=function(){return Jh.Date.now()},gg=dg,pg=Math.max,fg=Math.min;var mg=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function f(){var e=hg();if(p(e))return m(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?fg(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?g(e):(r=i=void 0,a)}function b(){var e=hg(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=gg(t)||0,ug(n)&&(d=!!n.leading,o=(u="maxWait"in n)?pg(gg(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(hg())},b},bg=Uo(mg),vg=mg,yg=xa;var xg,wg,$g=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return yg(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),vg(e,t,{leading:r,maxWait:t,trailing:i})},Cg=Uo($g),Sg=new Map,kg=new WeakMap,Dg=0;function Tg(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(kg.has(e)||(Dg+=1,kg.set(e,Dg.toString())),kg.get(e)):"0"}(e.root):e[t]}`)).toString()}function Eg(e,t,n={},r=undefined){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=Tg(e);let n=Sg.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Sg.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Sg.delete(i))}}function Og({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,g]=r.useState(null),p=r.useRef(),[f,m]=r.useState({inView:!!l,entry:void 0});p.current=d,r.useEffect((()=>{if(s||!h)return;let r;return r=Eg(h,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,n,c,t]);const b=null==(u=f.entry)?void 0:u.target,v=r.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[g,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(xg||(xg={})),function(e){e.roundToNearestInterval=(e,t,n)=>{const[r,i]=e.split(":"),o=parseInt(r,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,c=0===l?s:n?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=iu(e,r),o=iu(t,r);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(n)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:xg.AM};if(!t)return n;try{if("24hr"===e){const r=Ig(t,e);n.minute=ku.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=xg.AM,n.hour=0===i?"12":ku.padValue(i.toString())):(n.period=xg.PM,n.hour=12===i?i.toString():ku.padValue((i-12).toString()))}else{const{hour:r,minute:i,period:o=""}=Ig(t,e);n.hour=ku.padValue(r),n.minute=ku.padValue(i),n.period="am"===o.toLowerCase()?xg.AM:xg.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?ku.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return ku.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?ku.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?ku.padValue(r.toString()):13===r?ku.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===xg.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return ku.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const{hour:n,minute:r,period:i=""}=Ig(e,t),o=ku.padValue(n);let a=`${o}:${ku.padValue(r)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&o<12&&(o+=12),"am"===n&&12===o&&(o=0),Mg(o,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const o=[];let a=0,s=1440-t;for(r&&(a=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const r=a%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=Mg(e,r,t);o.push(n)}else{const t=Mg(e,r);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const o=parseInt(r[3]||"0",10);let a=r[4];if(void 0===r[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),Mg(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Mg(i,o,a)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",o=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<o)o=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&12!==o&&(o+=12),"am"===n&&12===o&&(o=0),60*o+i}}(wg||(wg={}));const Fg=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},_g=e=>{const t=parseInt(e);return t>=0&&t<=59},Ig=(e,t)=>{const n=e?e.split(":"):[],r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Fg(n[0],t)||!_g(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Fg(n[0],t)||!_g(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Mg=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Ag=_.div`
    width: 100%;
`,Bg=_.div`
    ${uc["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${pc["spacing-8"]} ${pc["spacing-16"]};
    border-radius: ${fc.sm};
    color: ${dc["text-primary"]};
    border: ${gc["width-010"]} ${gc.solid};
    border-color: ${dc["border-primary"]};
    background-color: ${dc.bg};

    ${bc.MaxWidth.sm} {
        padding: ${pc["spacing-16"]};
    }

    ${e=>{if(e.$warn)return I`
                color: ${dc["text-error"]};
                border-color: ${dc["border-error"]};
            `}}
`,jg=_(Bg)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,zg=_(Bg)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:i}=e;return I`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}

            box-shadow: 0px 0px 4px 1px rgb(from ${i?dc["border-error"]:dc["border-primary-subtle"]} r g b / 50%);

            ${bc.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,Rg=_.div`
    font-weight: ${uc.Spec["weight-bold"]};
    margin-left: ${pc["spacing-8"]};
    margin-right: ${pc["spacing-24"]};

    ${bc.MaxWidth.sm} {
        margin-right: ${pc["spacing-48"]};
    }
`,Pg=_.div`
    font-weight: ${uc.Spec["weight-semibold"]};
    margin-left: auto;
`,Lg=_(U)`
    color: ${e=>e.$warn?dc["icon-error"]:dc["icon-primary"]};
`,Ng=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),Hg=e=>Math.max(Math.round(e/1e3),0),Wg=r=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:g,show:p,fixed:f=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=r,x=ut(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=o(null),$=o(!1),[C,S]=a(0),[k,D]=a(0),[T,E]=a(0),[O,F]=a(!1),[_]=((e,t,n)=>{const[r,i]=a((()=>{const n=Ng(e,t)-Date.now();return Hg(n)}));u((()=>{if(!n)return;const r=Ng(e,t),i=o(r);return()=>clearTimeout(i)}),[t,n,e]);const o=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,o=Hg(n);if(i(o),0!==o)return setTimeout(t,r>500?r:r+1e3)};return t()};return[r]})(l,c,O),{ref:I,inView:M}=Og({threshold:1,rootMargin:-1*C+"px 0px 0px 0px",initialInView:!0}),B=!f||M,j="number"==typeof d&&_<=d,z=A(),R=mc["sm-max"]({theme:z}),P=Hd.useMediaQuery({maxWidth:R});u((()=>{F(p)}),[p]),u((()=>{0===_?W():"number"==typeof d&&_<=d&&(N(),H())}),[_]),u((()=>{const e=function(){var e,t;const n=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,r=null!==(t=null==g?void 0:g.top)&&void 0!==t?t:80,i=P?r:n;return i}();S(e)}),[P,null==h?void 0:h.top,null==g?void 0:g.top]),u((()=>{if(w.current){const e=Cg(L,300);return L(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,p]);const L=()=>{if(!w.current)return;const e=w.current.getBoundingClientRect();E(e.x),D(e.right)},N=()=>{y&&y(_)},H=()=>{v&&!$.current&&($.current=!0,v())},W=()=>{F(!1),b&&b()};const Y=()=>{const{minutes:r,seconds:i}=wg.toMinutesSeconds(_),o=1!==r?"mins":"min",a=1!==i?"secs":"sec";return t(n,{children:[e(Lg,{$warn:j}),e(Rg,{children:"Time left:"}),t(Pg,{children:[r," ",o," ",String(i).padStart(2,"0")," ",a]})]})};return O||0===_?t(Ag,Object.assign({className:i},x,{children:[e("div",{ref:I}),e(jg,{"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:B?void 0:"",$visible:B,$warn:j,children:Y()}),w.current&&!B&&(()=>{var t,n;const r=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?T:void 0,i=null!==(n=null==h?void 0:h.right)&&void 0!==n?n:"right"===s?Math.floor(document.body.clientWidth-k):void 0;return e(zg,{"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:j,$top:C,$left:r,$right:i,children:Y()})})()]})):e(n,{})},Yg=r=>i=>{switch(r){case"maintenance":return t(n,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const r=i,o=Math.floor(r.secondsLeft/60),a=r.secondsLeft%60;return t(n,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var Vg;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:n,md:r,lg:i,width:o,height:a}=e;return{srcSet:`${n} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${mc["sm-max"]({theme:t})}px) 400px, (max-width: ${mc["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}}}(Vg||(Vg={}));const{imgAttributeHelper:Ug}=Vg,Xg={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Kg={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},qg=Object.assign(Object.assign({},Xg),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),Gg=Object.assign(Object.assign({},Xg),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Zg=(e,t)=>new Map([["400",{img:Ug(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Ug(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Ug(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Ug(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Ug(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Ug(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Ug(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Ug(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Ug(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Ug(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Ug(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Ug(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Ug(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Yg("inactivity")}],["maintenance",{img:Ug(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Yg("maintenance")}],["no-item-found",{img:Ug(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Ug(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Ug(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Ug(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Ug(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Ug(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Qg=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Jg=_.img`
    position: relative;
    width: 400px;
    height: auto;

    ${bc.MaxWidth.sm} {
        width: 320px;
    }

    ${bc.MaxWidth.xs} {
        width: 288px;
    }

    ${bc.MaxWidth.xxs} {
        width: 240px;
    }
`,ep=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,tp=_(_c.HeadingMD)`
    margin: ${pc["spacing-32"]} 0 ${pc["spacing-16"]};
    text-align: center;
`,np=_.div`
    color: ${dc.text};
    text-align: center;

    ${vd({textSize:"body-baseline"})}
`,rp=_(hd.Default)`
    margin: ${pc["spacing-32"]} auto 0;
    width: 21rem;

    ${bc.MaxWidth.sm} {
        width: 100%;
    }
`,ip=n=>{var{type:r,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=n,u=ut(n,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=A(),g=((e,t,n)=>{switch(t){case"bookingsg":return Zg(Kg,n).get(e);case"ccube":return Zg(qg,n).get(e);case"mylegacy":return Zg(Gg,n).get(e);default:return Zg(Xg,n).get(e)}})(r,d||(h||vc).resourceScheme,h),p=u["data-testid"]||"error-display",f=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==g?void 0:g.renderDescription)||void 0===e?void 0:e.call(g,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==g?void 0:g.renderDescription)||void 0===t?void 0:t.call(g,e):a||void 0}default:return a||void 0}};if(!g)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},g),i&&{img:i}),o&&{title:o}),f()&&{description:f()});return t(Qg,Object.assign({},u,{"data-testid":p,children:[e(Jg,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(ep,{children:[m.title&&("string"==typeof m.title?e(tp,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e(np,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(rp,Object.assign({},t))})()]}))},op=I`
    outline-offset: -1px;
    outline: ${gc["width-020"]} ${gc.solid} ${dc["border-focus"]};
`,ap=I`
    outline-color: ${dc["border-focus"]};
`,sp=I`
    outline-color: ${dc["border-disabled"]};
`,lp=I`
    outline-color: ${dc["border-error-focus"]};
`,cp=_.div`
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};

    :focus-within {
        ${op}
    }
    ${e=>e.$focused&&op}

    ${e=>e.$readOnly?I`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ap}
                }
                ${e.$focused&&ap}
            `:e.$disabled?I`
                background: ${dc["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${sp}
                }
                ${e.$focused&&sp}
            `:e.$error?I`
                border-color: ${dc["border-error"]};

                :focus-within {
                    ${lp}
                }
                ${e.$focused&&lp}
            `:void 0}
`,dp=_(cp)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${pc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,up=_.input`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    color: ${dc.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${dc["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${dc["text-subtler"]};
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
`,hp=_.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${gc["width-010"]} ${gc.solid}
            ${dc["border-focus"]};
        border-radius: ${fc.sm};
    }
`,gp=dc.border,pp=dc.text,fp=_.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${gc["width-010"]} ${gc.solid} ${gp};
    border-radius: ${fc.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,mp=_.div`
    flex: 1;
`,bp=_.table`
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

    ${e=>{if(e.$stickyHeader)return I`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,vp=_.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${gc["width-010"]} ${gc.solid} ${gp}`:"none"};
        }
    }
`,yp=_.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return I`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return I`
                position: sticky;
                left: 0;
            `}};
`,xp=_(hp)`
    ${uc["body-md-semibold"]}
    cursor: pointer;
    color: ${dc["text-primary"]};
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${dc["text-hover"]};
    }
`,wp=_.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&I`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${fc.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${gc["width-010"]} ${gc.solid} ${gp};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${gc["width-010"]} ${gc.solid} ${gp};
    border-radius: 0 0 ${fc.sm} ${fc.sm};
    background-color: ${dc["bg-selected"]};
    transition: all 300ms ease;
`,$p=_.tr`
    background-color: ${dc["bg-stronger"]};
    height: 6rem;
    border-bottom: ${gc["width-010"]} ${gc.solid} ${gp};
`,Cp=_.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${pp};
    border-bottom: ${gc["width-010"]} ${gc.solid} ${gp};
    ${e=>{if(e.$isCheckbox)return I`
                width: 4rem;
            `}};
`,Sp=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${pp};
        margin-left: 0.5rem;
    }
`,kp=_.tr`
    background-color: ${e=>e.$isSelected?I`
                ${dc["bg-selected"]};
            `:e.$alternating?I`
                ${dc["bg-strong"]};
            `:I`
                ${dc.bg};
            `};
    border-top: ${gc["width-010"]} ${gc.solid} ${gp};
    &:hover {
        ${e=>{if(e.$isSelectable)return I`
                    background-color: ${dc["bg-hover-strong"]};
                `}};
    }
`,Dp=_.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${pp};
    border-bottom: ${gc["width-010"]} ${gc.solid} ${gp};
`,Tp=_(_c.BodyBL)`
    ${Tc(2)}
    text-overflow: ellipsis;
`,Ep=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Op=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,Fp=_(_c.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,_p=_.td`
    padding: 4rem 0;
`,Ip=r=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:g="success",enableMultiSelect:f,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:C,onHeaderClick:S,onSelect:k,onSelectAll:D,onClearSelectionClick:T}=r,E=ut(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const O=o(null),F=o(null),_=o(null),I=o(null),M=o(null),[A,B]=a(!1),[j,z]=a(!1),[R,P]=a(!1),[L,N]=a(!1),[H,W]=a(!1),{ref:Y,inView:V}=Og(),U=p((()=>{if(!M.current||!I.current)return;const e=M.current.scrollHeight>M.current.clientHeight;B(e),e?I.current.style.transform="translateY(0)":ne()}),[]);u((()=>{U()}),[]),un({onResize:U});Tu("scroll",(()=>{requestAnimationFrame((()=>{A?te():ne()})),M.current&&P(M.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{re()}),[l]);const q=()=>(null==m?void 0:m.length)===(null==l?void 0:l.length),G=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(E["data-testid"])return`${E["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!M.current)return;const e=M.current.getBoundingClientRect();N(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},ne=()=>{if(!(O.current&&F.current&&M.current&&I.current&&_.current))return;const e=F.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=O.current.getBoundingClientRect().height-_.current.clientHeight-32,r=Math.min(t,n);I.current.style.transform=`translateY(-${r}px)`}else I.current.style.transform="translateY(0)"},re=()=>{O.current&&M.current&&W(O.current.clientHeight+(v?56:0)<M.current.clientHeight)},ie=n=>{const{fieldKey:r,label:i,clickable:o=!1,style:a}="string"==typeof n?{fieldKey:n,label:n,style:void 0}:n;return e(Cp,{"data-testid":J(`header-${r}`),$clickable:o,onClick:()=>o&&(null==S?void 0:S(r)),style:a,$isCheckbox:!1,children:t(Sp,{children:["string"==typeof i?e(_c.BodyBL,{weight:"bold",children:i}):i,oe(r)]})},r)},oe=t=>{const r=null==d?void 0:d[t];return r?"asc"===r?e(X,{"data-testid":J(`header-${t}-arrowup`)}):e(K,{"data-testid":J(`header-${t}-arrowdown`)}):e(n,{})},ae=()=>e(Cp,{"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(Ep,{children:y&&e(Qh,{checked:q(),indeterminate:!!m&&0!==m.length&&!q(),onClick:()=>{D&&D(q())}})})}),se=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=n.id.toString(),a=n[i],s=`${o}-${i}`;return e(Dp,{"data-testid":J(`row-${s}`),style:r,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e(Tp,{children:a}):"function"==typeof a?a(n,{isSelected:G(o)}):a},s)},le=t=>e(Dp,{"data-testid":J(`row-${t}-selection`),$isCheckbox:!0,children:e(Ep,{children:e(Qh,{checked:G(t),onClick:()=>{k&&k(t,!G(t))},disabled:Q(t)})})}),ce=()=>e(ip,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(Fp,{weight:"bold",children:w.title}):w.title:e(Fp,{weight:"bold",children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(fp,{id:i||"table-wrapper","data-testid":E["data-testid"]||"table",className:c,ref:M,onScroll:()=>{A&&M.current&&z(M.current.scrollTop+M.current.clientHeight>=M.current.scrollHeight)},children:[e(mp,{children:t(bp,{$end:R,$scrollable:A,ref:O,$stickyHeader:x,children:[e("thead",{ref:_,children:t($p,{children:[f&&ae(),s.map(ie)]})}),e(vp,{$showLastRowBottomBorder:H,children:"success"===g?!l||l.length<1?e("tr",{children:e(_p,{colSpan:ee(),children:C?C():ce()})}):e(n,{children:null==l?void 0:l.map(((e,n)=>t(kp,{"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(n),$isSelectable:f,$isSelected:G(e.id.toString()),children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ee(),children:e(Op,{children:"loading"===g&&e(jd,{})})})})})]})}),v&&m&&m.length>0&&(()=>{var n,r,i,o;const a=null!==(n=null==m?void 0:m.length)&&void 0!==n?n:0;return e(yp,{ref:I,$fixed:L,$left:null===(i=null===(r=null==O?void 0:O.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(o=null==O?void 0:O.current)||void 0===o?void 0:o.clientWidth,children:t(wp,{$float:(A?!j:!V)||L,$scrollable:A,children:[e(_c.BodyMD,{weight:"semibold",children:`${a} item${a>1?"s":""} selected`}),e(xp,{type:"button",onClick:T,children:"Clear selection"}),$]})})})(),e("div",{ref:e=>{F.current=e,Y(e)}})]})},Mp=e=>"small"===e?2.5:3,Ap=_.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Mp(e.$variant);return I`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Bp=I`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${pc["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Mp(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${fc.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${dc["border-focus"]};
    }
`,jp=_.button`
    ${Bp}
    cursor: pointer;
`,zp=_.div`
    ${Bp}
`,Rp=M`
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
`,Pp=_.div`
    position: relative;
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${dc["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${dc["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?I`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:I`
                animation: ${Rp} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?I`
                background: ${dc["bg-disabled"]};

                ${jp} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${dc.border};
                    box-shadow: none;
                }
            `:e.$readOnly?I`
                border: none;
                background: transparent !important;

                ${jp} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?I`
                border-color: ${dc["border-error"]};

                :focus-within {
                    border-color: ${dc["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${dc["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;_.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};
    margin-left: ${pc["spacing-16"]};
`,_(fe)`
    color: ${dc.icon};
`;const Lp=_.div`
    height: 1px;
    background: ${dc.border};
    margin: 0 ${pc["spacing-8"]};
`,Np=_.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return I`
                color: ${dc["text-disabled"]};
            `}}
`,Hp=_.div`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return I`
                    ${Tc(1)}
                `}}
    overflow: hidden;
`,Wp=_(Hp)`
    color: ${dc["text-subtler"]};
`,Yp=({children:t,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o(null);return Tu("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e(Ap,{className:c,$variant:d,children:e(Pp,{ref:u,error:r&&!n,disabled:i,$readOnly:l,expanded:n,"data-testid":a,children:t})})};var Vp;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Vp||(Vp={}));const Up=()=>{const[e,t]=a(void 0),n=ve();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Vp.Change,e),n.events.emit(Vp.Ready),()=>n.events.off(Vp.Change,e)}),[n]),e},Xp=_.div`
    display: flex;
    flex-direction: column;
`,Kp=e=>"right"===e?"bottom-end":"bottom-start",qp=({enabled:r,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:g=0,alignment:p="left",fitAvailableHeight:f})=>{var m;const b=A(),v=mc["sm-max"]({theme:b}),y=o(null),x=o(null),{width:w=0}=un({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<v;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:k}=ye({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(n))},whileElementsMounted:xe,placement:Kp(p),middleware:[we(g),$e(),Ce({limiter:Se()}),ke({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),$]}),D=Up(),{isMounted:T,styles:E}=De(k,{initial:{opacity:0},open:{opacity:1},duration:300}),O=Te(k,{enabled:r,toggle:h}),F=Ee(k,{enabled:r}),{getReferenceProps:_,getFloatingProps:I}=Oe([O,F]);return t(n,{children:[e("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},_(),{children:c()})),T&&e(Fe,{children:e(_e,{context:k,modal:!1,initialFocus:x,returnFocus:!1,children:e("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=u?u:D)&&void 0!==m?m:50})},I(),{children:e(Xp,{ref:x,style:Object.assign({},E),inert:E.opacity<1?"":void 0,children:d({elementWidth:w})})}))})})]})},Gp=_.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Zp=_.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return I`
                ${Qp}, ${nf} {
                    color: ${dc["text-subtler"]};
                }
            `}}
`,Qp=_(up)`
    background: transparent;
    text-align: center;
`,Jp=_(Qp)`
    width: 2rem;
    margin-right: ${pc["spacing-4"]};
`,ef=_(Qp)`
    width: 2.5rem;
`,tf=_(Qp)`
    width: 3rem;
    margin-left: ${pc["spacing-4"]};
`,nf=_.span`
    ${uc["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return I`
                color: ${dc.text};
            `}}
`,rf=_.div`
    ${uc["body-baseline-regular"]}
    background-color: ${dc.bg};
    color: ${dc["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?I`
                background-color: ${dc["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?I`
                display: none;
            `:void 0}
`;iu.extend(au);const of=i.forwardRef((({disabled:n,readOnly:r,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:g,onFocus:p,onBlur:f,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,w,$]=Iu(""),[C,S,k]=Iu(""),[D,T,E]=Iu(""),[O,F]=a("none"),[_,I]=a(!1),M=o(null),A=o(null),B=o(null),j=o(null),[z,R,P]=V(c);u((()=>{var e;const[t="",n="",r=""]=V(s);w(t),S(n),T(r),t||n||r||!M.current||!M.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||F("none"),l&&(I(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),b(v,(()=>({ref:M,resetPlaceholder(){I(!1)},resetInput(){const[e="",t="",n=""]=V(s);w(e),S(t),T(n)}})),[s]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;F(t)},H=e=>{const[t,n,r]=i,o={[t]:$.current,[n]:k.current,[r]:E.current},a=e.target.name,s=o[a],l=a!==r?ku.padValue(s,!0):s;switch(a){case t:o[t]=l,w(l);break;case n:o[n]=l,S(l)}const c=`${o[r]}-${o[n]}-${o[t]}`,d=iu(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[n]&&!o[r];d&&s!==l&&g(c),M.current&&!M.current.contains(e.relatedTarget)&&(F("none"),null==f||f(u||d))},W=e=>{var t,n;if(c)return;const r=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:D};switch(r){case i[0]:a.day=o,w(o),2===o.length&&(null===(t=B.current)||void 0===t||t.focus());break;case i[1]:a.month=o,S(o),2===o.length&&(null===(n=j.current)||void 0===n||n.focus());break;case i[2]:a.year=o,T(o)}if(!a.day&&!a.month&&!a.year)return void g("");const s=`${a.year}-${a.month}-${a.day}`;iu(s,"YYYY-MM-DD",!0).isValid()&&g(s)},Y=e=>{var t,n;"Backspace"!==e.code&&"Backspace"!==e.key||(O===i[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),O===i[2]&&0===D.length&&(null===(n=B.current)||void 0===n||n.focus()))};function V(e){if(e){const t=iu(new Date(e));return t.isValid()?[ku.padValue(t.date().toString()),ku.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Gp,{role:"group","aria-label":h,onClick:()=>{var e;n||r||(I(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{n||(I(!0),l||null==p||p(e))},children:[t(Zp,{ref:M,$hover:!!c,children:[e(Jp,{ref:A,name:i[0],maxLength:2,value:null!=z?z:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==i[0]||r?"DD":""}),e(nf,{$inactive:0===x.length,children:"/"}),e(ef,{ref:B,name:i[1],maxLength:2,value:null!=R?R:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==i[1]||r?"MM":""}),e(nf,{$inactive:0===C.length,children:"/"}),e(tf,{ref:j,name:i[2],maxLength:4,value:null!=P?P:D,onFocus:N,onBlur:H,onChange:W,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==i[2]||r?"YYYY":""})]}),(()=>{if(!s&&!r&&d)return e(rf,{$hide:_,$disabled:n,onMouseDown:L,children:d})})()]})})),af=_(dp)`
    height: 3rem;
`,sf=t=>{var{minDate:n,maxDate:r,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:g,onBlur:p,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=t,w=ut(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,C]=a(Cu.sanitizeInput(d)),[S,k]=a(Cu.sanitizeInput(d)),[D,T]=a(void 0),[E,O]=a(!1),[F,_]=a(!1),I=o(null),M=o(null);u((()=>{const e=Cu.sanitizeInput(d);C(e),k(e)}),[d]);const A=e=>{!y&&Cu.isDateDisabled(e,{disabledDates:s,minDate:n,maxDate:r})||(k(e),m||(L(e),C(e),e&&O(!1)))},B=e=>{var t;k(e),m||(L(e),C(e),e&&(null===(t=I.current)||void 0===t||t.focus(),O(!1)),D&&T(void 0))},j=()=>{b||i||(O(!0),F||(_(!0),g&&g()))},z=e=>{var t;F&&!E&&I.current&&!I.current.contains(e.relatedTarget)&&(null===(t=M.current)||void 0===t||t.resetInput(),k($),_(!1),N())},R=e=>{T(e)},P=e=>{var t;switch(e){case"reset":k($);break;case"confirmed":C(S),L(S)}null===(t=I.current)||void 0===t||t.focus(),O(!1)},L=e=>{h&&h(e)},N=()=>{p&&p()};return e(qp,{enabled:!b&&!i,isOpen:E,renderElement:()=>e(af,Object.assign({tabIndex:-1,ref:I,onBlur:z,onFocus:j,$disabled:i,$readOnly:b,$focused:F,$error:l,id:v,"data-testid":w["data-testid"]},w,{children:e(of,{ref:M,disabled:i,onChange:A,readOnly:b,focused:E,names:["start-day","start-month","start-year"],value:S,hoverValue:D,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Ph,{variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:s,minDate:n,maxDate:r,allowDisabledSelection:y,onHover:R,onSelect:B,onDismiss:P,onYearMonthDisplayChange:f,width:t}),onClose:()=>{var e;null===(e=M.current)||void 0===e||e.resetInput(),k($),O(!1),_(!1),N()},onDismiss:()=>{var e,t;null===(e=M.current)||void 0===e||e.resetInput(),null===(t=I.current)||void 0===t||t.focus(),k($),O(!1)},customZIndex:x,offset:16})},lf=_.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return I`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return I`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return I`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return I`
                    background-color: ${dc.bg};
                    border: ${gc["width-010"]} ${gc.solid}
                        ${dc["border-primary"]};
                    color: ${dc["text-primary"]};

                    :hover {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"light":return I`
                    background-color: ${dc.bg};
                    border: ${gc["width-010"]} ${gc.solid}
                        ${dc.border};
                    color: ${dc["text-primary"]};

                    :hover {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;default:return I`
                    background-color: ${dc["bg-primary"]};
                    border: none;
                    color: ${dc["text-inverse"]};

                    :hover {
                        background-color: ${dc["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${dc["bg-disabled"]};
        border: ${gc["width-010"]} ${gc.solid}
            ${dc["border-disabled"]};
        color: ${dc["text-disabled"]};
        cursor: not-allowed;
    }
`,cf=i.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=ut(t,["data-testid","styleType","children","sizeType","type"]);return e(lf,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),df=_(cf)`
    margin: ${pc["spacing-8"]};
`,uf=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${dc["bg-strong"]};
    border-radius: ${fc.sm};
`,hf=_(hd.Default)`
    color: ${e=>e.$enableDateClick?dc["text-primary"]:dc.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return I`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,gf=n=>{var{selectedDate:r,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=n,g=ut(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const p=$u.toDayjs(r),f=$u.toDayjs(r).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=$u.isSame(r,iu())&&c?"Today":p.format(l?"ddd":"dddd"),[b,v]=a(!1),y=e=>{h&&h(e),v(!b)},x=()=>{v(!1),d(r)},w=()=>{v(!1),u(r)};return e(qp,{enabled:!s,isOpen:b,renderElement:()=>t(uf,Object.assign({},g,{children:[e(df,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(mu.isDisabledDay(p,void 0,i)||$u.isSame(p,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small",children:e(Xu,{})}),e(hf,{onClick:()=>!!h&&!s&&v(!b),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s,children:`${f}, ${m}`}),e(df,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(mu.isDisabledDay(p,void 0,void 0,o)||$u.isSame(p,o)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small",children:e(Ku,{})})]})),renderDropdown:({elementWidth:t})=>e(Ph,{variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},pf=_.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return I`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${uc.Spec["body-size-baseline"]} -
                            ${pc["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${pc["spacing-8"]};
                }
            `}}
`,ff=_.div`
    width: 100%; // Force next flex item to break to next line
`,mf=_.div`
    display: flex;
    flex: 1;
    align-items: center;
`,bf=_(q)`
    color: ${dc.icon};
    width: ${uc.Spec["body-size-baseline"]};
    height: ${uc.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${pc["spacing-8"]};
    align-self: center;
`,vf=_.div`
    position: absolute;
    background: ${e=>e.$error?dc["border-error-focus-strong"]:dc["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${pc["spacing-8"]} - (${uc.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${hc["duration-350"]} ${hc["ease-standard"]},
        opacity ${hc["duration-350"]} ${hc["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return I`
                    opacity: 1;
                `;case"end":return I`
                    left: calc(50% + ${pc["spacing-16"]});
                    opacity: 1;
                `;case"none":return I`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return I`
                display: none;
            `}}
`,yf=({children:n,currentActive:r,error:i,className:o,wrap:a})=>{const[s,l]=n;return t(pf,{className:o,$wrap:a,children:[e(mf,{"data-id":"range-container-elem1-container",children:s}),e(bf,{}),a&&e(ff,{}),e(mf,{"data-id":"range-container-elem2-container",children:l}),e(vf,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:a})]})},xf=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},wf=_(dp)`
    ${e=>e.$wrap&&I`
            padding: ${pc["spacing-12"]} ${pc["spacing-16"]};
        `}
`,$f=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&I`
            height: fit-content;
        `}
`,Cf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Sf=n=>{var{minDate:r,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:g,onChange:f,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:D}=n,T=ut(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[E,O]=a(),[F,_]=a(void 0),[I,M]=a(!1),[A,B]=a(!1),j="week"===w,z="fixed-range"===w,[{selectedStart:R,selectedEnd:P,currentFocus:L,calendarOpen:N,isStartDirty:H,isEndDirty:W,focused:Y},V]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[i,o]=x(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&xf(n,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Cf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:j?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=o(!1),X=o(null),K=o(null),q=o(null),G=o(null),Z=(({maxWidth:e,targetRef:t})=>{const[n,r]=a(!1);return un({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:X});u((()=>{V.resetRange({start:Cu.sanitizeInput(h),end:Cu.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===L?O(R):"end"===L&&O(P)}),[L]);const Q=e=>{var t,n,r;"Enter"!==e.code||y||(R&&P?(V.done({start:R,end:P}),null==f||f(R,P)):(V.dismiss(),null===(t=X.current)||void 0===t||t.focus(),null===(n=q.current)||void 0===n||n.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder()))},J=e=>{var t;if(he(e))return void(U.current=!0);if(V.changeStart(e),null===(t=K.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y||P||!W||(V.resetRange({start:"",end:""}),null==f||f("","")));if(!P)return void V.focus("end");if(iu(e).isAfter(P,"day"))V.reselectEnd();else{if(W)return y?void 0:(V.done({start:e,end:P}),void(null==f||f(e,P)));V.focus("end")}},ee=e=>{var t,n;if(he(e))return void(U.current=!0);if(iu(e).isBefore(R,"day"))return V.changeStart(e),null===(t=K.current)||void 0===t||t.setCalendarDate(e),void V.reselectEnd();if(V.changeEnd(e),null===(n=K.current)||void 0===n||n.setCalendarDate(e),e){if(R)return y?void 0:(V.done({start:R,end:e}),void(null==f||f(R,e)));V.focus("start")}else y||R||!H||(V.resetRange({start:"",end:""}),null==f||f("",""))},te=e=>{var t;if(he(e))return void(U.current=!0);if(V.changeStart(e),null===(t=K.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y?V.changeEnd(""):(V.resetRange({start:"",end:""}),null==f||f("","")));const n=iu(e).format("YYYY-MM-DD"),r=iu(n).add($-1,"day").format("YYYY-MM-DD");return V.changeStart(n),V.changeEnd(r),U.current=!1,y?void 0:(V.done({start:n,end:r}),void(null==f||f(n,r)))},ne=()=>{C||s||Y||(V.focus("start"),null==m||m())},re=e=>{var t,n;Y&&!N&&X.current&&X.current.contains(e.relatedTarget)&&(V.blur(),M(!1),B(!1),null===(t=q.current)||void 0===t||t.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null==b||b())},ie=e=>t=>{t.stopPropagation(),C||(V.focus(e),oe(),ae(),Y||null==m||m())},oe=()=>{if(j){const e=$u.toDayjs(R).startOf("week").format("YYYY-MM-DD");M(!0),B(!0),O(e)}},ae=()=>{z&&(B(!0),O(R))},se=e=>{var t;e&&!U.current||(V.resetStart(),null===(t=q.current)||void 0===t||t.resetInput())},le=e=>{var t;e&&!U.current||(V.resetEnd(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=iu(e).startOf("week").format("YYYY-MM-DD"),n=iu(e).endOf("week").format("YYYY-MM-DD");if(V.changeStart(t),V.changeEnd(n),U.current=!1,!y)V.done({start:t,end:n}),null==f||f(t,n)})(e);break;case"fixed-range":te(e);break;default:"start"===L?J(e):"end"===L&&ee(e)}},de=e=>{var t;switch(null===(t=X.current)||void 0===t||t.focus(),e){case"reset":V.cancel();break;case"confirmed":V.done({start:R,end:P}),null==f||f(R,P)}},ue=e=>{_(e)},he=e=>!k&&e&&Cu.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i}),ge=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===L?F:void 0,end:"end"===L?F:void 0};break;case"week":if(!F)return;t={start:iu(F).startOf("week").format("YYYY-MM-DD"),end:iu(F).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!F)return;t={start:iu(F).format("YYYY-MM-DD"),end:iu(F).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(qp,{enabled:!C&&!s,isOpen:N,onClose:()=>{var e,t;V.blur(),M(!1),B(!1),null===(e=q.current)||void 0===e||e.resetPlaceholder(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null==b||b()},onDismiss:()=>{var e,t,n;V.dismiss(),null===(e=X.current)||void 0===e||e.focus(),null===(t=q.current)||void 0===t||t.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder()},renderElement:()=>e(wf,Object.assign({ref:X,tabIndex:-1,onFocus:ne,onBlur:re,$focused:Y,$disabled:s,$readOnly:C,$error:c,$wrap:Z,id:S,"data-testid":T["data-testid"],onKeyDown:Q},T,{children:t(yf,{currentActive:L,wrap:Z,error:c,children:[e($f,{$wrap:Z,children:e(of,{ref:q,placeholder:"From",names:["start-day","start-month","start-year"],value:R,disabled:s,readOnly:I||C,focused:"start"===L,hoverValue:ge("start"),onChange:z?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})}),e($f,{$wrap:Z,children:e(of,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:A||C,focused:"end"===L,hoverValue:ge("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(Ph,{ref:K,variant:w,initialCalendarDate:E,withButton:y,value:R,endValue:P,selectWithinRange:H||W,currentFocus:L,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:k,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:v,numberOfDays:$,width:t}),customZIndex:D,offset:16})},kf=_.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:n,$xlStart:r,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return I`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Vl.MaxWidth.xl} {
                grid-column: ${r||"auto"} / span ${i||1};
            }

            ${Vl.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${a||1};
            }

            ${Vl.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${Vl.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${Vl.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${Vl.MaxWidth.xxs} {
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,Df=i.forwardRef(((t,n)=>{const r=A(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=ut(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${n}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,r]=e;if(-1===r)return{start:n,span:t-n+1};return{start:n,span:Math.min(r-n,t)}}return{start:void 0,span:Math.min(e,t)}};return e(kf,Object.assign({ref:n},(()=>{const e=Wl["xxl-column"]({theme:r}),t=Wl["xl-column"]({theme:r}),n=Wl["lg-column"]({theme:r}),u=Wl["md-column"]({theme:r}),g=Wl["sm-column"]({theme:r}),p=Wl["xs-column"]({theme:r}),f=Wl["xxs-column"]({theme:r}),m=h(i||o||a||s||l||c||d,e,"xxl"),b=h(o||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,n,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,g,"sm"),w=h(c||d,p,"xs"),$=h(d,f,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Tf={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ef=e=>Object.keys(Tf).reduce(((t,n)=>{const r=Tf[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Of={MaxWidth:Ef("max-width"),MinWidth:Ef("min-width")},Ff=Tf,_f=_.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return I`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Of.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${Of.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,If=i.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=t,a=ut(t,["mobileCols","tabletCols","desktopCols"]);return e(_f,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=Mf(o||i||r),a=Mf(e),s=Mf(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Mf=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Af=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||dc.border(e);const n=encodeURIComponent(t),r=e.$thickness||1;return I`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${r+1}" stroke-dasharray="4 4" /></svg>');
    `},Bf=_.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return I`
                    ${Af}
                `;case"solid":return I`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||dc.border};
                `}}}
`,jf=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:h,xxlCols:g,mobileCols:p,tabletCols:f,desktopCols:m}=t,b=ut(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==f||void 0!==m;switch(i){case"flex":return e(Bf,Object.assign({className:a,$thickness:n,$lineStyle:r,$color:o},b));case"grid":return v?e(If,Object.assign({className:a,mobileCols:p,tabletCols:f,desktopCols:m},b,{children:e(Bf,{$thickness:n,$lineStyle:r,$color:o})})):e(Df,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,n=c||t,r=d||n,i=u||r,o=h||i;return{xxlCols:g||o,xlCols:o,lgCols:i,mdCols:r,smCols:n,xsCols:t,xxsCols:e}})(),b,{children:e(Bf,{$thickness:n,$lineStyle:r,$color:o})}))}},zf=_.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return I`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Rf=_.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?dc["overlay-subtle"]:dc["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=I`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=I`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=I`
                transition: none;
            `),t}}
`,Pf=({show:t=!1,rootId:n,onOverlayClick:r,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[f,m]=a(null),[b,v]=a(),[y]=a((()=>Su.generate())),x=Me(),w=o(),$=o(null),C=s&&i.cloneElement(s,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=g?g:b?99999:99998;(e=>{const t=ve();u((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Vp.Change,n)}),[t,e]),u((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Vp.Change,n)};return null==t||t.events.on(Vp.Ready,n),()=>null==t?void 0:t.events.off(Vp.Ready,n)}),[t,e])})(k),u((()=>(F(),m(E()),()=>{A(),I().length<1&&_("remove")})),[]),u((()=>{if(t){const e=O();T(e),M();const t=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{I().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[t]);const T=e=>{w.current=e,v(e)},E=()=>document&&n?document.getElementById(n):document?document.body:null,O=()=>I().length>0,F=()=>{if(!document.getElementById(Nf)){const e=document.createElement("style");e.id=Nf;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Hf} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Hf}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(Hf);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Hf):document.body.classList.add(Hf)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return f?D.createPortal(e(zf,{id:S,"data-testid":S,$show:t,$zIndex:k,children:s&&e(Ae,{id:x,children:e(Rf,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:B,children:C})})}),f):null},Lf=t=>e(Ie,{children:e(Pf,Object.assign({},t))}),Nf="lifesg-ds-overlay-stylesheet",Hf="lifesg-ds-overlay-open",Wf=_.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${dc.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${dc.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?I`
            right: 0;
            transition: all ${hc["duration-800"]} ${hc["ease-exit"]};
        `:I`
        right: -100%;
        transition: all ${hc["duration-800"]} ${hc["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${fc.md};
    border-bottom-left-radius: ${fc.md};
    overflow: hidden;

    ${bc.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${bc.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Yf=_.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${pc["spacing-16"]};
    padding: ${pc["spacing-32"]} ${pc["spacing-16"]}
        ${pc["spacing-16"]};
    background-color: ${dc.bg};
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};

    ${bc.MaxWidth.lg} {
        gap: ${pc["spacing-8"]};
        padding: ${pc["spacing-32"]} ${pc["spacing-20"]}
            ${pc["spacing-16"]};
    }
`,Vf=_(Dc)`
    color: ${dc.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${dc["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Uf=_(_c.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Xf=_.div`
    flex: 1;
    overflow-y: auto;
`,Kf=n=>{var{children:r,heading:i,show:s,onClose:l,onOverlayClick:c}=n,d=ut(n,["children","heading","show","onClose","onOverlayClick"]);const[h,g]=a(s),[p]=a((()=>Su.generate())),f=o(null);u((()=>{if(!s){const e=setTimeout((()=>g(!1)),500);return()=>clearTimeout(e)}g(!0)}),[s]);return e(Lf,{show:h,enableOverlayClick:!0,onOverlayClick:c,children:t(Wf,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&s&&(null===(t=f.current)||void 0===t||t.focus())}},d,{children:[t(Yf,{children:[e(Uf,{id:p,ref:f,tabIndex:-1,weight:"bold",children:i}),e(Vf,{"aria-label":"Close drawer",onClick:l,focusHighlight:!1,children:e(je,{"aria-hidden":!0})})]}),e(Xf,{children:r})]}))})},qf=({className:t,progress:n,color:r,"data-testid":i})=>e(Gf,{className:t,$innerWidth:n,$color:r,"data-testid":i,children:e("progress",{value:100*n,max:100})}),Gf=_.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):dc["icon-primary-subtle"](e),I`
            border: ${gc["width-010"]} ${gc.solid} ${n};
            border-radius: ${fc.sm};

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
`,Zf=_.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${bc.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Qf=t=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,g=ut(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,f]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;r&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),b(window.visualViewport.offsetTop)}};return e(Lf,{"data-testid":`${n}-overlay`,show:r,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c,children:e(Zf,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:p,offsetTop:m},g,{children:o}))})},Jf=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${dc.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${bc.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,em=_(Dc)`
    position: absolute;
    top: var(--close-button-top-inset, ${pc["spacing-16"]});
    right: var(--close-button-right-inset, ${pc["spacing-16"]});
    padding: 0;
    color: ${dc.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${bc.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${pc["spacing-20"]});
    }
`,tm=n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=ut(n,["id","children","onClose","showCloseButton"]);return t(Jf,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(em,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(je,{})}),i]}))},nm=Object.assign(Qf,{Box:tm}),rm=I`
    ${e=>`\n        ${bc.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${mc["sm-max"](e)}px)\n    `}
`,im=I`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${mc["sm-max"](e)}px)\n    `}
`,om=_.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>I`
            ${gc.Util["dashed-default"]({radius:fc.sm,thickness:gc["width-040"],colour:e.$disabled?dc["border-disabled"]:dc.border})}

            background-color: ${e.$disabled?dc["bg-disabled"]:dc.bg};
        `}
    height: 14.125rem;
`,am=_(hd.Default)`
    width: fit-content;
    margin: 0 ${pc["spacing-20"]};

    :disabled {
        border-color: ${dc["border-strong"]};
    }
`,sm=_(cf)`
    position: absolute;
    top: ${pc["spacing-16"]};
    right: ${pc["spacing-16"]};

    :disabled {
        border-color: ${dc["border-strong"]};
    }
`,lm=_.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${pc["spacing-16"]}) * 2);
    height: 100%;
`,cm=_.div`
    background: ${dc["bg-primary-subtlest"]};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    margin: 0 ${pc["spacing-20"]};
    padding: ${pc["spacing-16"]};
    display: flex;
    gap: ${pc["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,dm=_(_c.BodySM)`
    margin-top: ${pc["spacing-16"]};
`,um=_(nm)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,hm=_.div`
    width: 100%;
    margin: auto;
    padding: ${pc["layout-xxl"]} ${pc["layout-sm"]};

    ${rm} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,gm=_(nm.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${pc["spacing-16"]};

    ${rm} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${pc["spacing-8"]};
        --close-button-right-inset: ${pc["spacing-20"]};
    }
`,pm=_.h2`
    ${uc["body-baseline-semibold"]}
    color: ${dc.text};
    margin-bottom: ${pc["spacing-16"]};
    text-align: center;

    ${rm} {
        ${uc["body-md-semibold"]}
        margin: ${pc["spacing-12"]} 0;
    }
`,fm=_.div`
    width: 100%;
    height: 20rem;
    border-radius: ${fc.lg};
    overflow: hidden;

    ${rm} {
        border-radius: 0;
        flex: 1;
    }

    ${im} {
        background: ${dc["bg-strong"]};
    }
`,mm=_.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${dc["bg-stronger"]};
    margin: auto;

    ${rm} {
        aspect-ratio: 4/3;
    }
    ${bc.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${im} {
        width: auto;
        height: 100%;
    }
`,bm=_.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${dc["border-strong"]};
    pointer-events: none;

    ${rm} {
        width: calc(100% - ${pc["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,vm=_.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${pc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${pc["spacing-16"]} ${pc["spacing-24"]}
            ${pc["spacing-48"]};
        gap: ${pc["spacing-16"]};
    }

    ${im} {
        flex-direction: row;
        margin: ${pc["spacing-16"]} ${pc["spacing-20"]};
    }
`,ym=_(hd.Default)`
    width: 8.5rem;
    ${bc.MaxWidth.sm} {
        width: 100%;
    }
    ${im} {
        height: 2.5rem;
    }
`,xm=_.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,wm=_.canvas`
    cursor: crosshair;
`,$m=v((()=>ht(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.692db83d.js")).ESignatureCanvas}})))),Cm=r=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:g}=r,p=ut(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[f,m]=a(!1),b=o(null),[v,x]=a(h),w=A(),$=mc["sm-max"]({theme:w}),C=Hd.useMediaQuery({maxWidth:$}),S=Hd.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{if(b.current){const e=b.current.export();x(e),m(!1),null==d||d(e)}};u((()=>{x(h)}),[h]);return t("div",Object.assign({},p,{children:[e(om,{$disabled:g,children:"number"==typeof l?t(cm,{children:[c&&e(_c.BodyMD,{children:c}),e(qf,{progress:null!=l?l:0,"data-testid":`${s||"e-signature"}-progress-bar`})]}):v?t(n,{children:[e(lm,{src:v,alt:"Signature preview"}),e(sm,{styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:g,children:e(G,{})})]}):e(am,{type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:g,children:"Add signature"})}),e(um,{"data-testid":"signature-modal",show:f,children:e(hm,{children:t(gm,{onClose:()=>m(!1),children:[e(pm,{children:"Signature"}),e(fm,{children:t(mm,{children:[e(bm,{}),e(y,{fallback:null,children:f&&e($m,{ref:b,baseImageDataURL:v})})]})}),t(vm,{children:[e(ym,{as:S?Yu.Small:Yu.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(Z,{}),onClick:k,children:"Clear"}),e(ym,{as:S?hd.Small:hd.Default,type:"button",onClick:D,children:"Save"})]})]})})}),i?e(dm,{children:i}):null]}))},Sm="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",km="Submit",Dm="Rate your experience",Tm=5,Em=_.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Om=I`
    width: 2.75rem;
    height: 2.75rem;
    color: ${dc["icon-primary"]};
    ${Em}:focus-visible + & {
        outline: ${gc["width-020"]} ${gc.solid}
            ${dc["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${fc.sm};
    }
`,Fm=_(ze)`
    ${Om}
`,_m=_(Re)`
    ${Om}
`,Im=_.label`
    margin: 0 ${pc["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${bc.MaxWidth.md} {
        margin: 0 ${pc["spacing-8"]};
    }
`,Mm=_.div`
    display: flex;
    justify-content: center;
    margin: ${pc["spacing-8"]} ${pc["spacing-16"]};
`,Am=n=>{const{description:r,rating:i,onRatingChange:o}=n,a=t=>{const n=`${t} star${1===t?"":"s"}`;return e(t<=i?_m:Fm,{"aria-label":n})};return e(Mm,{role:"radiogroup","aria-label":r,children:[...Array(Tm)].map(((n,r)=>{const s=r+1;return t(Im,{children:[e(Em,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))})},Bm=_.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${bc.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,jm=_.div`
    border-top: 1px solid ${dc.border};
    border-bottom: 1px solid ${dc.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${bc.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,zm=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${bc.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,Rm=_(hd.Default)`
    margin-top: 1rem;
    width: 100%;
`,Pm=n=>{const{imgSrc:r,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=n,c=ut(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:Sm,u=null!=o?o:Dm;return t(jm,Object.assign({},c,{children:[d&&e(Bm,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(zm,{children:[e(_c.HeadingSM,{as:"div",weight:"semibold",children:u}),e(Am,{description:u,rating:a,onRatingChange:s}),e(Rm,{disabled:!a,onClick:l,type:"button",children:null!=i?i:km})]})]}))},Lm=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return I`
                ${gc.Util["dashed-default"]({radius:fc.sm,thickness:gc["width-040"],colour:dc.border})}
                padding: ${pc["spacing-32"]};

                ${bc.MaxWidth.sm} {
                    padding: ${pc["spacing-32"]} ${pc["spacing-20"]};
                }
            `}}
`,Nm=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${pc["spacing-32"]};
`,Hm=_.p`
    ${uc["heading-xs-regular"]}
    color: ${dc.text};
    margin-bottom: ${pc["spacing-8"]};
`,Wm=_.div`
    ${vd({textSize:"heading-xs"})}
    color: ${dc.text};
`,Ym=_.p`
    ${uc["body-md-regular"]}
    color: ${dc["text-subtler"]};
`,Vm=_.div`
    ${vd({textSize:"body-md"})}
    color: ${dc["text-subtler"]};
`,Um=_.ul`
    list-style-type: none;
`;var Xm;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Xm||(Xm={}));const Km=({src:t,alt:n,className:r,"data-testid":i})=>e("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),qm=_.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${pc["spacing-16"]};
    }
`,Gm=_.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${pc["spacing-16"]} ${pc["spacing-32"]};
    cursor: pointer;

    background: ${dc["bg-primary-subtlest"]};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};

    ${bc.MaxWidth.lg} {
        padding: ${pc["spacing-16"]};
    }

    :hover {
        background: ${dc["bg-hover"]};
    }
`,Zm=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return I`
                ${bc.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Qm=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Jm=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,eb=_.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${pc["spacing-8"]};

    ${uc["body-md-regular"]}
    color: ${dc.text};

    ${bc.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${pc["spacing-8"]};

        ${Tc(2)}
    }
`,tb=_.div`
    ${uc["body-md-regular"]}
    color: ${dc.text};

    ${bc.MaxWidth.lg} {
        ${Tc(2)}
    }
`;_(tb)`
    ${uc["body-md-regular"]}
    margin-top: ${pc["spacing-4"]};
`;const nb=_.div`
    ${uc["body-sm-semibold"]}
    color: ${dc["text-error"]};
`,rb=_(nb)`
    margin-top: ${pc["spacing-4"]};
    ${bc.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,ib=_(nb)`
    display: none;
    visibility: hidden;
    ${bc.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${pc["spacing-8"]};
    }
`,ob=_(qc)`
    color: ${dc["icon-primary"]};
`,ab=_.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${pc["spacing-32"]};

    ${bc.MaxWidth.lg} {
        margin-left: ${pc["spacing-16"]};
    }
`,sb=_(cf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${pc["spacing-16"]};
    }
`,lb=_.div`
    width: auto;
    margin-right: ${pc["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${bc.MaxWidth.lg} {
        margin-right: ${pc["spacing-16"]};
    }
`,cb=_(Km)`
    border-radius: ${fc.sm};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${bc.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,db=w((({fileItem:r,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:g=!0,ready:p=!0}=r,[f,m]=a(!1),[b,v]=a(!1),y=Xm.formatFileSizeDisplay(c),x=A(),w=mc["sm-max"]({theme:x}),$=Hd.useMediaQuery({maxWidth:w}),[C,S]=a(),k=o(null);u((()=>{k.current&&S($?D(l):l)}),[l,$]);const D=e=>{if(!g)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return ku.truncateTwoLines(e,t,16,1.5)},T=()=>t(n,{children:[e(tb,{ref:k,children:C}),b&&e(rb,{children:d||"Something went wrong"})]});return e(qm,{"data-testid":s,children:t(Gm,{onClick:()=>ht(void 0,void 0,void 0,(function*(){if(p&&!f){m(!0);try{v(!1),yield i(r)}catch(e){v(!0)}finally{m(!1)}}})),children:[(()=>{let r;return r=t(n,h?{children:[e(lb,{"data-testid":`${s}-thumbnail`,children:e(cb,{"data-testid":`${s}-thumbnail-image`,src:h})}),t(Jm,{children:[e(Qm,{children:T()}),e(eb,{children:y||"-"}),b&&e(ib,{children:d||"Something went wrong"})]})]}:{children:[e(Qm,{children:T()}),e(eb,{children:y||"-"}),b&&e(ib,{children:d||"Something went wrong"})]}),e(Zm,{$hasThumbnail:!!h,children:r})})(),e(ab,{children:e(sb,{"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`,children:f||!p?e(ob,{size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})})})]})})})),ub=({id:n,fileItems:r,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ht(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t(Lm,{id:n?`${n}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c,children:[(i||o)&&t(Nm,{children:[i?e("string"==typeof i?Hm:Wm,{children:i}):null,o?e("string"==typeof o?Ym:Vm,{children:o}):null]}),e(Um,{children:r&&r.length>0&&r.map((t=>e(db,{fileItem:t,onDownload:d},t.id)))})]})},hb=$({activeId:void 0,setActiveId:()=>{}});var gb,pb={exports:{}},fb={exports:{}},mb={};var bb,vb,yb,xb,wb,$b,Cb,Sb,kb,Db,Tb,Eb,Ob,Fb,_b={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ib(){return vb||(vb=1,"production"===process.env.NODE_ENV?fb.exports=function(){if(gb)return mb;gb=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case r:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case g:case a:return e;default:return h}}case n:return h}}}function x(e){return y(e)===c}return mb.AsyncMode=l,mb.ConcurrentMode=c,mb.ContextConsumer=s,mb.ContextProvider=a,mb.Element=t,mb.ForwardRef=d,mb.Fragment=r,mb.Lazy=p,mb.Memo=g,mb.Portal=n,mb.Profiler=o,mb.StrictMode=i,mb.Suspense=u,mb.isAsyncMode=function(e){return x(e)||y(e)===l},mb.isConcurrentMode=x,mb.isContextConsumer=function(e){return y(e)===s},mb.isContextProvider=function(e){return y(e)===a},mb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},mb.isForwardRef=function(e){return y(e)===d},mb.isFragment=function(e){return y(e)===r},mb.isLazy=function(e){return y(e)===p},mb.isMemo=function(e){return y(e)===g},mb.isPortal=function(e){return y(e)===n},mb.isProfiler=function(e){return y(e)===o},mb.isStrictMode=function(e){return y(e)===i},mb.isSuspense=function(e){return y(e)===u},mb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},mb.typeOf=y,mb}():fb.exports=(bb||(bb=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var f=e.type;switch(f){case l:case c:case r:case o:case i:case u:return f;default:var m=f&&f.$$typeof;switch(m){case s:case d:case p:case g:case a:return m;default:return h}}case n:return h}}}var x=l,w=c,$=s,C=a,S=t,k=d,D=r,T=p,E=g,O=n,F=o,_=i,I=u,M=!1;function A(e){return y(e)===c}_b.AsyncMode=x,_b.ConcurrentMode=w,_b.ContextConsumer=$,_b.ContextProvider=C,_b.Element=S,_b.ForwardRef=k,_b.Fragment=D,_b.Lazy=T,_b.Memo=E,_b.Portal=O,_b.Profiler=F,_b.StrictMode=_,_b.Suspense=I,_b.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},_b.isConcurrentMode=A,_b.isContextConsumer=function(e){return y(e)===s},_b.isContextProvider=function(e){return y(e)===a},_b.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},_b.isForwardRef=function(e){return y(e)===d},_b.isFragment=function(e){return y(e)===r},_b.isLazy=function(e){return y(e)===p},_b.isMemo=function(e){return y(e)===g},_b.isPortal=function(e){return y(e)===n},_b.isProfiler=function(e){return y(e)===o},_b.isStrictMode=function(e){return y(e)===i},_b.isSuspense=function(e){return y(e)===u},_b.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},_b.typeOf=y}()),_b)),fb.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Mb(){if(xb)return yb;xb=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return yb=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)n.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},yb}function Ab(){if($b)return wb;$b=1;return wb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Bb(){return Sb?Cb:(Sb=1,Cb=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var jb=Ib();pb.exports=function(){if(Eb)return Tb;Eb=1;var e=Ib(),t=Mb(),n=Ab(),r=Bb(),i=function(){if(Db)return kb;Db=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Ab(),n={},r=Bb();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},kb=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Tb=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(a),arrayOf:function(e){return p((function(t,r,i,o,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new g("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:p((function(e,t,n,r,i){var o=e[t];return s(o)?null:new g("Invalid "+r+" `"+i+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(t,n,r,i,o){var a=t[n];return e.isValidElementType(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,n,r,i){return b(e[t])?null:new g("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,i,o,a,s){if("function"!=typeof e)return new g("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=v(l);if("object"!==c)return new g("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,o,a,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return p((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,i,o,a){var s=t[r],l=v(s);if("object"!==l)return new g("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(i,o,a,c,y(d));var u=d(s,c,i,o,a+"."+c,n);if(u)return u}return null}))},exact:function(e){return p((function(i,o,a,s,l){var c=i[o],d=v(c);if("object"!==d)return new g("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var p=e[h];if(r(e,h)&&"function"!=typeof p)return m(a,s,l,h,y(p));if(!p)return new g("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,a,s,l+"."+h,n);if(f)return f}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,s,c,u,h,p){if(c=c||d,h=h||s,p!==n){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&r<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==a[s]?i?null===a[s]?new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function f(e){return p((function(t,n,r,i,o,a){var s=t[n];return v(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,n,r,i){return new g((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!b(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},Tb}()(jb.isElement,!0)}else pb.exports=function(){if(Fb)return Ob;Fb=1;var e=Ab();function t(){}function n(){}return n.resetWarningCache=t,Ob=function(){function r(t,n,r,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o}}()();var zb=Uo(pb.exports),Rb=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Pb(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=Rb.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var Lb=[".DS_Store","Thumbs.db"];function Nb(e){return"object"==typeof e&&null!==e}function Hb(e){return Ub(e.target.files).map((function(e){return Pb(e)}))}function Wb(e){return ht(this,void 0,void 0,(function(){return gt(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Pb(e)}))]}}))}))}function Yb(e,t){return ht(this,void 0,void 0,(function(){var n;return gt(this,(function(r){switch(r.label){case 0:return e.items?(n=Ub(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(Xb))]):[3,2];case 1:return[2,Vb(Kb(r.sent()))];case 2:return[2,Vb(Ub(e.files).map((function(e){return Pb(e)})))]}}))}))}function Vb(e){return e.filter((function(e){return-1===Lb.indexOf(e.name)}))}function Ub(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Xb(e){if("function"!=typeof e.webkitGetAsEntry)return qb(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Zb(t):qb(e)}function Kb(e){return e.reduce((function(e,t){return ft(ft([],pt(e),!1),pt(Array.isArray(t)?Kb(t):[t]),!1)}),[])}function qb(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=Pb(t);return Promise.resolve(n)}function Gb(e){return ht(this,void 0,void 0,(function(){return gt(this,(function(t){return[2,e.isDirectory?Zb(e):Qb(e)]}))}))}function Zb(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var o=this;t.readEntries((function(t){return ht(o,void 0,void 0,(function(){var o,a,s;return gt(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),n(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Gb)),r.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function Qb(e){return ht(this,void 0,void 0,(function(){return gt(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=Pb(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}function Jb(e){return function(e){if(Array.isArray(e))return ov(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||iv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ev(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tv(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ev(Object(n),!0).forEach((function(t){nv(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ev(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function nv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||iv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function iv(e,t){if(e){if("string"==typeof e)return ov(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ov(e,t):void 0}}function ov(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var av=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},sv=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},lv=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},cv={code:"too-many-files",message:"Too many files"};function dv(e,t){var n="application/x-moz-file"===e.type||function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[n,n?null:av(t)]}function uv(e,t,n){if(hv(e.size))if(hv(t)&&hv(n)){if(e.size>n)return[!1,sv(n)];if(e.size<t)return[!1,lv(t)]}else{if(hv(t)&&e.size<t)return[!1,lv(t)];if(hv(n)&&e.size>n)return[!1,sv(n)]}return[!0,null]}function hv(e){return null!=e}function gv(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function pv(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function fv(e){e.preventDefault()}function mv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!gv(e)&&t&&t.apply(void 0,[e].concat(r)),gv(e)}))}}function bv(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function vv(e){return/^.*\.[\w]+$/.test(e)}var yv=["children"],xv=["open"],wv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],$v=["refKey","onChange","onClick"];function Cv(e){return function(e){if(Array.isArray(e))return Dv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||kv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Sv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||kv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kv(e,t){if(e){if("string"==typeof e)return Dv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dv(e,t):void 0}}function Dv(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ev(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tv(Object(n),!0).forEach((function(t){Ov(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tv(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ov(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fv(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _v=g((function(e,t){var n=e.children,r=Av(Fv(e,yv)),o=r.open,a=Fv(r,xv);return b(t,(function(){return{open:o}}),[o]),i.createElement(C,null,n(Ev(Ev({},a),{},{open:o})))}));_v.displayName="Dropzone";var Iv={disabled:!1,getFilesFromEvent:function(e){return ht(this,void 0,void 0,(function(){return gt(this,(function(t){return Nb(e)&&Nb(e.dataTransfer)?[2,Yb(e.dataTransfer,e.type)]:function(e){return Nb(e)&&Nb(e.target)}(e)?[2,Hb(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Wb(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};_v.defaultProps=Iv,_v.propTypes={children:zb.func,accept:zb.objectOf(zb.arrayOf(zb.string)),multiple:zb.bool,preventDropOnDocument:zb.bool,noClick:zb.bool,noKeyboard:zb.bool,noDrag:zb.bool,noDragEventsBubbling:zb.bool,minSize:zb.number,maxSize:zb.number,maxFiles:zb.number,disabled:zb.bool,getFilesFromEvent:zb.func,onFileDialogCancel:zb.func,onFileDialogOpen:zb.func,useFsAccessApi:zb.bool,autoFocus:zb.bool,onDragEnter:zb.func,onDragLeave:zb.func,onDragOver:zb.func,onDrop:zb.func,onDropAccepted:zb.func,onDropRejected:zb.func,onError:zb.func,validator:zb.func};var Mv={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Av(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Ev(Ev({},Iv),e),n=t.accept,r=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,g=t.onDragOver,f=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,k=t.noClick,D=t.noKeyboard,T=t.noDrag,E=t.noDragEventsBubbling,O=t.onError,F=t.validator,_=m((function(){return function(e){if(hv(e))return Object.entries(e).reduce((function(e,t){var n=rv(t,2),r=n[0],i=n[1];return[].concat(Jb(e),[r],Jb(i))}),[]).filter((function(e){return bv(e)||vv(e)})).join(",")}(n)}),[n]),I=m((function(){return function(e){return hv(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=rv(e,2),n=t[0],r=t[1],i=!0;return bv(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(vv)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=rv(t,2),r=n[0],i=n[1];return tv(tv({},e),{},nv({},r,i))}),{})}]:e}(n)}),[n]),M=m((function(){return"function"==typeof w?w:jv}),[w]),A=m((function(){return"function"==typeof y?y:jv}),[y]),B=o(null),j=o(null),z=Sv(x(Bv,Mv),2),R=z[0],P=z[1],L=R.isFocused,N=R.isFileDialogActive,H=o("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){j.current&&(j.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[j,N,A,H]);var Y=o([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};u((function(){return S&&(document.addEventListener("dragover",fv,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",fv),document.removeEventListener("drop",V))}}),[B,S]),u((function(){return!r&&C&&B.current&&B.current.focus(),function(){}}),[B,C,r]);var U=p((function(e){O?O(e):console.error(e)}),[O]),X=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(Cv(Y.current),[e.target]),pv(e)&&Promise.resolve(i(e)).then((function(t){if(!gv(e)||E){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=rv(dv(e,n),1)[0],o=rv(uv(e,r,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:_,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:F});P({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,E,_,s,a,l,c,F]),K=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=pv(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&g&&g(e),!1}),[g,E]),q=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),pv(e)&&h&&h(e))}),[B,h,E]),G=p((function(e,t){var n=[],r=[];e.forEach((function(e){var t=Sv(dv(e,_),2),i=t[0],o=t[1],l=Sv(uv(e,s,a),2),c=l[0],d=l[1],u=F?F(e):null;if(i&&c&&!u)n.push(e);else{var h=[o,d];u&&(h=h.concat(u)),r.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[cv]})})),n.splice(0)),P({acceptedFiles:n,fileRejections:r,type:"setFiles"}),f&&f(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&b&&b(n,t)}),[P,l,_,s,a,c,f,b,v,F]),Z=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],pv(e)&&Promise.resolve(i(e)).then((function(t){gv(e)&&!E||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,E]),Q=p((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:l,types:I};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,j.current?(j.current.value=null,j.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else j.current&&(P({type:"openDialog"}),M(),j.current.value=null,j.current.click())}),[P,M,A,$,G,U,I,l]),J=p((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[B,Q]),ee=p((function(){P({type:"focus"})}),[]),te=p((function(){P({type:"blur"})}),[]),ne=p((function(){k||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[k,Q]),re=function(e){return r?null:e},ie=function(e){return D?null:re(e)},oe=function(e){return T?null:re(e)},ae=function(e){E&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,g=Fv(e,wv);return Ev(Ev(Ov({onKeyDown:ie(mv(o,J)),onFocus:ie(mv(a,ee)),onBlur:ie(mv(s,te)),onClick:re(mv(l,ne)),onDragEnter:oe(mv(c,X)),onDragOver:oe(mv(d,K)),onDragLeave:oe(mv(u,q)),onDrop:oe(mv(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},n,B),r||D?{}:{tabIndex:0}),g)}}),[B,J,ee,te,ne,X,K,q,Z,D,T,r]),le=p((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,o=Fv(e,$v);return Ev(Ev({},Ov({accept:_,multiple:l,type:"file",style:{display:"none"},onChange:re(mv(r,Z)),onClick:re(mv(i,le)),tabIndex:-1},n,j)),o)}}),[j,n,l,Z,r]);return Ev(Ev({},R),{},{isFocused:L&&!r,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:j,open:re(Q)})}function Bv(e,t){switch(t.type){case"focus":return Ev(Ev({},e),{},{isFocused:!0});case"blur":return Ev(Ev({},e),{},{isFocused:!1});case"openDialog":return Ev(Ev({},Mv),{},{isFileDialogActive:!0});case"closeDialog":return Ev(Ev({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Ev(Ev({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Ev(Ev({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Ev({},Mv);default:return e}}function jv(){}const zv=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return I`
                ${gc.Util["dashed-default"]({radius:fc.sm,thickness:gc["width-040"],colour:dc.border})}
                padding: ${pc["spacing-32"]};

                ${bc.MaxWidth.sm} {
                    padding: ${pc["spacing-32"]} ${pc["spacing-20"]};
                }
            `}}
`,Rv=_.input`
    display: none;
`,Pv=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${dc["bg-primary-subtler"]};
    ${gc.Util["dashed-default"]({radius:fc.sm,thickness:gc["width-040"],colour:dc["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Lv=_(_c.BodyMD)`
    color: ${dc["text-primary"]};
    text-align: center;
`,Nv=_(Pe)`
    color: ${dc["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Hv=g((({children:n,accept:r,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":g},p)=>{const f=o(null),{getRootProps:m,isDragActive:v}=Av({onDrop:h,noClick:!0,disabled:u});b(p,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{f.current&&(f.current.value="",f.current.click())}})));return t(zv,Object.assign({id:s,"data-testid":g||"dropzone",$border:d,className:l},m(),{children:[e(Rv,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:a,"data-testid":g?`${g}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),n,v&&t(Pv,{children:[e(Nv,{}),e(Lv,{weight:"semibold",children:"Drop files here"})]})]}))}));const Wv="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Yv(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Vv(e){return"nodeType"in e}function Uv(e){var t,n;return e?Yv(e)?e:Vv(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function Xv(e){const{Document:t}=Uv(e);return e instanceof t}function Kv(e){return!Yv(e)&&e instanceof Uv(e).HTMLElement}function qv(e){return e instanceof Uv(e).SVGElement}function Gv(e){return e?Yv(e)?e.document:Vv(e)?Xv(e)?e:Kv(e)||qv(e)?e.ownerDocument:document:document:document}const Zv=Wv?h:u;function Qv(e){const t=o(e);return Zv((()=>{t.current=e})),p((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}function Jv(e,t){void 0===t&&(t=[e]);const n=o(e);return Zv((()=>{n.current!==e&&(n.current=e)}),t),n}function ey(e,t){const n=o();return m((()=>{const t=e(n.current);return n.current=t,t}),[...t])}function ty(e){const t=Qv(e),n=o(null),r=p((e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e}),[]);return[n,r]}function ny(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let ry={};function iy(e,t){return m((()=>{if(t)return t;const n=null==ry[e]?0:ry[e]+1;return ry[e]=n,e+"-"+n}),[e,t])}function oy(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const ay=oy(1),sy=oy(-1);function ly(e){if(!e)return!1;const{KeyboardEvent:t}=Uv(e.target);return t&&e instanceof t}function cy(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Uv(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const dy=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[dy.Translate.toString(e),dy.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),uy="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function hy(e){return e.matches(uy)?e:e.querySelector(uy)}const gy={display:"none"};function py(e){let{id:t,value:n}=e;return i.createElement("div",{id:t,style:gy},n)}function fy(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const my=$(null);const by={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},vy={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function yy(e){let{announcements:t=vy,container:n,hiddenTextDescribedById:r,screenReaderInstructions:o=by}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:p((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=iy("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=f(my);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:n}=e;s(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&s(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;s(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;s(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;s(t.onDragCancel({active:n,over:r}))}})),[s,t])),!d)return null;const g=i.createElement(i.Fragment,null,i.createElement(py,{id:r,value:o.draggable}),i.createElement(fy,{id:c,announcement:l}));return n?O(g,n):g}var xy;function wy(){}function $y(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(xy||(xy={}));const Cy=Object.freeze({x:0,y:0});function Sy(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function ky(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Dy(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function Ty(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function Ey(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const n=t.width*t.height,r=e.width*e.height,i=a*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const Oy=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,o=n.get(r);if(o){const n=Ey(o,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(ky)};function Fy(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Cy}function _y(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const Iy=_y(1);const My={ignoreTransform:!1};function Ay(e,t){void 0===t&&(t=My);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=Uv(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,l=e.left-a-(1-i)*parseFloat(n),c=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:o,height:a,bottom:s,right:l}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:l}}function By(e){return Ay(e,{ignoreTransform:!0})}function jy(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(Xv(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Kv(i)||qv(i))return n;if(n.includes(i))return n;const o=Uv(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Uv(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,o)&&n.push(i),function(e,t){return void 0===t&&(t=Uv(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?n:r(i.parentNode)}(e):n}function zy(e){const[t]=jy(e,1);return null!=t?t:null}function Ry(e){return Wv&&e?Yv(e)?e:Vv(e)?Xv(e)||e===Gv(e).scrollingElement?window:Kv(e)?e:null:null:null}function Py(e){return Yv(e)?e.scrollX:e.scrollLeft}function Ly(e){return Yv(e)?e.scrollY:e.scrollTop}function Ny(e){return{x:Py(e),y:Ly(e)}}var Hy;function Wy(e){return!(!Wv||!e)&&e===document.scrollingElement}function Yy(e){const t={x:0,y:0},n=Wy(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Hy||(Hy={}));const Vy={x:.2,y:.2};function Uy(e,t,n,r,i){let{top:o,left:a,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=Vy);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Yy(e),g={x:0,y:0},p={x:0,y:0},f=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+f?(g.y=Hy.Backward,p.y=r*Math.abs((t.top+f-o)/f)):!d&&l>=t.bottom-f&&(g.y=Hy.Forward,p.y=r*Math.abs((t.bottom-f-l)/f)),!h&&s>=t.right-m?(g.x=Hy.Forward,p.x=r*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(g.x=Hy.Backward,p.x=r*Math.abs((t.left+m-a)/m)),{direction:g,speed:p}}function Xy(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Ky(e){return e.reduce(((e,t)=>ay(e,Ny(t))),Cy)}const qy=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Py(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Ly(t)),0)}]];class Gy{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=jy(t),r=Ky(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of qy)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(n),a=r[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Zy{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function Qy(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var Jy,ex;function tx(e){e.preventDefault()}function nx(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Jy||(Jy={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(ex||(ex={}));const rx={start:[ex.Space,ex.Enter],cancel:[ex.Esc],end:[ex.Space,ex.Enter]},ix=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case ex.Right:return{...n,x:n.x+25};case ex.Left:return{...n,x:n.x-25};case ex.Down:return{...n,y:n.y+25};case ex.Up:return{...n,y:n.y-25}}};let ox=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Zy(Gv(t)),this.windowListeners=new Zy(Uv(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Jy.Resize,this.handleCancel),this.windowListeners.add(Jy.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Jy.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=Ay),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);zy(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(Cy)}handleKeyDown(e){if(ly(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=rx,coordinateGetter:o=ix,scrollBehavior:a="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Cy;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=sy(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Yy(n),g=Xy(n),p={x:Math.min(i===ex.Right?g.right-g.width/2:g.right,Math.max(i===ex.Right?g.left:g.left+g.width/2,d.x)),y:Math.min(i===ex.Down?g.bottom-g.height/2:g.bottom,Math.max(i===ex.Down?g.top:g.top+g.height/2,d.y))},f=i===ex.Right&&!s||i===ex.Left&&!l,m=i===ex.Down&&!c||i===ex.Up&&!o;if(f&&p.x!==d.x){const e=n.scrollLeft+t.x,o=i===ex.Right&&e<=u.x||i===ex.Left&&e>=h.x;if(o&&!t.y)return void n.scrollTo({left:e,behavior:a});r.x=o?n.scrollLeft-e:i===ex.Right?n.scrollLeft-u.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(m&&p.y!==d.y){const e=n.scrollTop+t.y,o=i===ex.Down&&e<=u.y||i===ex.Up&&e>=h.y;if(o&&!t.x)return void n.scrollTo({top:e,behavior:a});r.y=o?n.scrollTop-e:i===ex.Down?n.scrollTop-u.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,ay(sy(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function ax(e){return Boolean(e&&"distance"in e)}function sx(e){return Boolean(e&&"delay"in e)}ox.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=rx,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class lx{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=Uv(e);return e instanceof t?e:Gv(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=Gv(o),this.documentListeners=new Zy(this.document),this.listeners=new Zy(n),this.windowListeners=new Zy(Uv(o)),this.initialCoordinates=null!=(r=cy(i))?r:Cy,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Jy.Resize,this.handleCancel),this.windowListeners.add(Jy.DragStart,tx),this.windowListeners.add(Jy.VisibilityChange,this.handleCancel),this.windowListeners.add(Jy.ContextMenu,tx),this.documentListeners.add(Jy.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(sx(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(ax(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Jy.Click,nx,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Jy.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!r)return;const s=null!=(t=cy(e))?t:Cy,l=sy(r,s);if(!n&&a){if(ax(a)){if(null!=a.tolerance&&Qy(l,a.tolerance))return this.handleCancel();if(Qy(l,a.distance))return this.handleStart()}return sx(a)&&Qy(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ex.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const cx={move:{name:"pointermove"},end:{name:"pointerup"}};class dx extends lx{constructor(e){const{event:t}=e,n=Gv(t.target);super(e,cx,n)}}dx.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const ux={move:{name:"mousemove"},end:{name:"mouseup"}};var hx;!function(e){e[e.RightClick=2]="RightClick"}(hx||(hx={}));let gx=class extends lx{constructor(e){super(e,ux,Gv(e.event.target))}};gx.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==hx.RightClick&&(null==r||r({event:n}),!0)}}];const px={move:{name:"touchmove"},end:{name:"touchend"}};class fx extends lx{constructor(e){super(e,px)}static setup(){return window.addEventListener(px.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(px.move.name,e)};function e(){}}}var mx,bx;function vx(e){let{acceleration:t,activator:n=mx.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:s=5,order:l=bx.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:g,threshold:f}=e;const b=function(e){let{delta:t,disabled:n}=e;const r=ny(t);return ey((e=>{if(n||!r||!e)return yx;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Hy.Backward]:e.x[Hy.Backward]||-1===i.x,[Hy.Forward]:e.x[Hy.Forward]||1===i.x},y:{[Hy.Backward]:e.y[Hy.Backward]||-1===i.y,[Hy.Forward]:e.y[Hy.Forward]||1===i.y}}}),[n,t,r])}({delta:g,disabled:!a}),[v,y]=function(){const e=o(null);return[p(((t,n)=>{e.current=setInterval(t,n)}),[]),p((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),w=o({x:0,y:0}),$=m((()=>{switch(n){case mx.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case mx.DraggableRect:return i}}),[n,i,c]),C=o(null),S=p((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,n=x.current.y*w.current.y;e.scrollBy(t,n)}),[]),k=m((()=>l===bx.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&$){for(const e of k){if(!1===(null==r?void 0:r(e)))continue;const n=d.indexOf(e),i=h[n];if(!i)continue;const{direction:o,speed:a}=Uy(e,i,$,t,f);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,s),x.current=a,void(w.current=o)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,r,y,a,s,JSON.stringify($),JSON.stringify(b),v,d,k,h,JSON.stringify(f)])}fx.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(mx||(mx={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(bx||(bx={}));const yx={x:{[Hy.Backward]:!1,[Hy.Forward]:!1},y:{[Hy.Backward]:!1,[Hy.Forward]:!1}};var xx,wx;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(xx||(xx={})),function(e){e.Optimized="optimized"}(wx||(wx={}));const $x=new Map;function Cx(e,t){return ey((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function Sx(e){let{callback:t,disabled:n}=e;const r=Qv(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(r)}),[n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function kx(e){return new Gy(Ay(e),e)}function Dx(e,t,n){void 0===t&&(t=kx);const[r,i]=x((function(r){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=r?r:n)?i:null;const o=t(e);if(JSON.stringify(r)===JSON.stringify(o))return r;return o}),null),o=function(e){let{callback:t,disabled:n}=e;const r=Qv(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(r)}),[r,n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){i();break}}}}),a=Sx({callback:i});return Zv((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),r}const Tx=[];function Ex(e,t){void 0===t&&(t=[]);const n=o(null);return u((()=>{n.current=null}),t),u((()=>{const t=e!==Cy;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?sy(e,n.current):Cy}function Ox(e){return m((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const Fx=[];function _x(e){let{measure:t}=e;const[n,r]=a(null),i=p((e=>{for(const{target:n}of e)if(Kv(n)){r((e=>{const r=t(n);return e?{...e,width:r.width,height:r.height}:r}));break}}),[t]),o=Sx({callback:i}),s=p((e=>{const n=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Kv(t)?t:e}(e);null==o||o.disconnect(),n&&(null==o||o.observe(n)),r(n?t(n):null)}),[t,o]),[l,c]=ty(s);return m((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const Ix=[{sensor:dx,options:{}},{sensor:ox,options:{}}],Mx={current:{}},Ax={draggable:{measure:By},droppable:{measure:By,strategy:xx.WhileDragging,frequency:wx.Optimized},dragOverlay:{measure:Ay}};class Bx extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const jx={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Bx,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:wy},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ax,measureDroppableContainers:wy,windowRect:null,measuringScheduled:!1},zx=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:wy,draggableNodes:new Map,over:null,measureDroppableContainers:wy}),Rx=$(jx);function Px(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Bx}}}function Lx(e,t){switch(t.type){case xy.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case xy.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case xy.DragEnd:case xy.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case xy.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new Bx(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case xy.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new Bx(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case xy.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Bx(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Nx(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=f(zx),o=ny(r),a=ny(null==n?void 0:n.id);return u((()=>{if(!t&&!r&&o&&null!=a){if(!ly(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=hy(e);if(t){t.focus();break}}}))}}),[r,t,i,a,o]),null}const Hx=$({...Cy,scaleX:1,scaleY:1});var Wx;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Wx||(Wx={}));const Yx=w((function(e){var t,n,r,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:g=Ix,collisionDetection:f=Oy,measuring:b,modifiers:v,...y}=e;const w=x(Lx,void 0,Px),[$,C]=w,[S,k]=function(){const[e]=a((()=>new Set)),t=p((t=>(e.add(t),()=>e.delete(t))),[e]);return[p((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),t]}(),[D,T]=a(Wx.Uninitialized),O=D===Wx.Initialized,{draggable:{active:F,nodes:_,translate:I},droppable:{containers:M}}=$,A=F?_.get(F):null,B=o({initial:null,translated:null}),j=m((()=>{var e;return null!=F?{id:F,data:null!=(e=null==A?void 0:A.data)?e:Mx,rect:B}:null}),[F,A]),z=o(null),[R,P]=a(null),[L,N]=a(null),H=Jv(y,Object.values(y)),W=iy("DndDescribedBy",l),Y=m((()=>M.getEnabled()),[M]),V=function(e){return m((()=>({draggable:{...Ax.draggable,...null==e?void 0:e.draggable},droppable:{...Ax.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Ax.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:X,measuringScheduled:K}=function(e,t){let{dragging:n,dependencies:r,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,g=o(e),f=function(){switch(h){case xx.Always:return!1;case xx.BeforeDragging:return n;default:return!n}}(),m=Jv(f),b=p((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=ey((t=>{if(f&&!n)return $x;if(!t||t===$x||g.current!==e||null!=s){const t=new Map;for(let n of e){if(!n)continue;if(s&&s.length>0&&!s.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new Gy(d(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,s,n,f,d]);return u((()=>{g.current=e}),[e]),u((()=>{f||b()}),[n,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,f,b,...r]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(Y,{dragging:O,dependencies:[I.x,I.y],config:V.droppable}),q=function(e,t){const n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return ey((e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(_,F),G=m((()=>L?cy(L):null),[L]),Z=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,n=O&&!e&&!t;if("object"==typeof d)return{...d,enabled:n};return{enabled:n}}(),Q=function(e,t){return Cx(e,t)}(q,V.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Zv((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!r)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=Fy(n(e),r);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=zy(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,r,n])}({activeNode:F?_.get(F):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:V.draggable.measure});const J=Dx(q,V.draggable.measure,Q),ee=Dx(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:_,draggingNode:null,draggingNodeRect:null,droppableContainers:M,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ne=M.getNodeFor(null==(t=te.current.over)?void 0:t.id),re=_x({measure:V.dragOverlay.measure}),ie=null!=(n=re.nodeRef.current)?n:q,oe=O?null!=(r=re.rect)?r:J:null,ae=Boolean(re.nodeRef.current&&re.rect),se=Fy(le=ae?null:J,Cx(le));var le;const ce=Ox(ie?Uv(ie):null),de=function(e){const t=o(e),n=ey((n=>e?n&&n!==Tx&&e&&t.current&&e.parentNode===t.current.parentNode?n:jy(e):Tx),[e]);return u((()=>{t.current=e}),[e]),n}(O?null!=ne?ne:q:null),ue=function(e,t){void 0===t&&(t=Ay);const[n]=e,r=Ox(n?Uv(n):null),[i,o]=x((function(){return e.length?e.map((e=>Wy(e)?r:new Gy(t(e),e))):Fx}),Fx),a=Sx({callback:o});return e.length>0&&i===Fx&&o(),Zv((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(v,{transform:{x:I.x-se.x,y:I.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:j,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:re.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),ge=G?ay(G,I):null,pe=function(e){const[t,n]=a(null),r=o(e),i=p((e=>{const t=Ry(e.target);t&&n((e=>e?(e.set(t,Ny(t)),new Map(e)):null))}),[]);return u((()=>{const t=r.current;if(e!==t){o(t);const a=e.map((e=>{const t=Ry(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Ny(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),r.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=Ry(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>ay(e,t)),Cy):Ky(e):Cy),[e,t])}(de),fe=Ex(pe),me=Ex(pe,[J]),be=ay(he,fe),ve=oe?Iy(oe,he):null,ye=j&&ve?f({active:j,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:ge}):null,xe=Ty(ye,"id"),[we,$e]=a(null),Ce=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(ae?he:ay(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),Se=p(((e,t)=>{let{sensor:n,options:r}=t;if(null==z.current)return;const i=_.get(z.current);if(!i)return;const o=e.nativeEvent,a=new n({active:z.current,activeNode:i,event:o,options:r,context:te,onStart(e){const t=z.current;if(null==t)return;const n=_.get(t);if(!n)return;const{onDragStart:r}=H.current,i={active:{id:t,data:n.data,rect:B}};E((()=>{null==r||r(i),T(Wx.Initializing),C({type:xy.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i})}))},onMove(e){C({type:xy.DragMove,coordinates:e})},onEnd:s(xy.DragEnd),onCancel:s(xy.DragCancel)});function s(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=H.current;if(a={activatorEvent:o,active:t,collisions:n,delta:i,over:r},e===xy.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=xy.DragCancel)}}z.current=null,E((()=>{C({type:e}),T(Wx.Uninitialized),$e(null),P(null),N(null);const t=e===xy.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}E((()=>{P(a),N(e.nativeEvent)}))}),[_]),ke=p(((e,t)=>(n,r)=>{const i=n.nativeEvent,o=_.get(r);if(null!==z.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(n,t.options,a)&&(i.dndKit={capturedBy:t.sensor},z.current=r,Se(n,t))}),[_,Se]),De=function(e,t){return m((()=>e.reduce(((e,n)=>{const{sensor:r}=n;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,n)})))]}),[])),[e,t])}(g,ke);!function(e){u((()=>{if(!Wv)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(g),Zv((()=>{J&&D===Wx.Initializing&&T(Wx.Initialized)}),[J,D]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:n,collisions:r,over:i}=te.current;if(!t||!n)return;const o={active:t,activatorEvent:n,collisions:r,delta:{x:be.x,y:be.y},over:i};E((()=>{null==e||e(o),S({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=te.current;if(!e||null==z.current||!t||!i)return;const{onDragOver:o}=H.current,a=r.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};E((()=>{$e(s),null==o||o(l),S({type:"onDragOver",event:l})}))}),[xe]),Zv((()=>{te.current={activatorEvent:L,active:j,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:_,draggingNode:ie,draggingNodeRect:oe,droppableContainers:M,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},B.current={initial:oe,translated:ve}}),[j,q,ye,ve,_,ie,oe,U,M,we,de,be]),vx({...Z,delta:I,draggingRect:ve,pointerCoordinates:ge,scrollableAncestors:de,scrollableAncestorRects:ue});const Te=m((()=>({active:j,activeNode:q,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:re,draggableNodes:_,droppableContainers:M,droppableRects:U,over:we,measureDroppableContainers:X,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:K,windowRect:ce})),[j,q,J,L,ye,ee,re,_,M,U,we,X,de,ue,V,K,ce]),Ee=m((()=>({activatorEvent:L,activators:De,active:j,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:_,over:we,measureDroppableContainers:X})),[L,De,j,J,C,W,_,we,X]);return i.createElement(my.Provider,{value:k},i.createElement(zx.Provider,{value:Ee},i.createElement(Rx.Provider,{value:Te},i.createElement(Hx.Provider,{value:Ce},h)),i.createElement(Nx,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(yy,{...c,hiddenTextDescribedById:W}))})),Vx=$(null),Ux="button";function Xx(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const o=iy("Droppable"),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=f(zx),{role:g=Ux,roleDescription:p="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=f(v?Hx:Vx),[x,w]=ty(),[$,C]=ty(),S=function(e,t){return m((()=>e.reduce(((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),k=Jv(n);Zv((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:$,data:k}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:g,tabIndex:b,"aria-disabled":r,"aria-pressed":!(!v||g!==Ux)||void 0,"aria-roledescription":p,"aria-describedby":d.draggable})),[r,g,b,v,p,d.draggable]),isDragging:v,listeners:r?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const Kx={timeout:25};function qx(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Gx(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function Zx(e){return null!==e&&e>=0}const Qx=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=qx(t,r,n),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Jx={scaleX:1,scaleY:1},ew=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[n])?t:r;if(!s)return null;if(i===n){const e=o[a];return e?{x:0,y:n<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Jx}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):o?o.top-(r.top+r.height):0;return o?o.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(o,i,n);return i>n&&i<=a?{x:0,y:-s.height-l,...Jx}:i<n&&i>=a?{x:0,y:s.height+l,...Jx}:{x:0,y:0,...Jx}};const tw="Sortable",nw=i.createContext({activeIndex:-1,containerId:tw,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Qx,disabled:{draggable:!1,droppable:!1}});function rw(e){let{children:t,id:n,items:r,strategy:a=Qx,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:g}=f(Rx),p=iy(tw,n),b=Boolean(null!==c.rect),v=m((()=>r.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[r]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=o(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,k=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Zv((()=>{C&&y&&g(v)}),[C,v,y,g]),u((()=>{$.current=v}),[v]);const D=m((()=>({activeIndex:x,containerId:p,disabled:k,disableTransforms:S,items:v,overIndex:w,useDragOverlay:b,sortedRects:Gx(v,d),strategy:a})),[x,p,k.draggable,k.droppable,S,v,w,d,b,a]);return i.createElement(nw.Provider,{value:D},t)}const iw=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return qx(n,r,i).indexOf(t)},ow=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===o||i!==a)&&(!!n||a!==i&&t===l))},aw={duration:200,easing:"ease"},sw="transform",lw=dy.Transition.toString({property:sw,duration:0,easing:"linear"}),cw={roleDescription:"sortable"};function dw(e){let{animateLayoutChanges:t=ow,attributes:n,disabled:r,data:i,getNewIndex:s=iw,id:l,strategy:c,resizeObserverConfig:d,transition:h=aw}=e;const{items:g,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=f(nw),k=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(r,y),D=g.indexOf(l),T=m((()=>({sortable:{containerId:b,index:D,items:g},...i})),[b,i,D,g]),E=m((()=>g.slice(g.indexOf(l))),[g,l]),{rect:O,node:F,isOver:_,setNodeRef:I}=function(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const a=iy("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(zx),h=o({disabled:n}),g=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Kx,...i},w=Jv(null!=y?y:r),$=Sx({callback:p((()=>{g.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):g.current=!0}),[x]),disabled:v||!s}),C=p(((e,t)=>{$&&(t&&($.unobserve(t),g.current=!1),e&&$.observe(e))}),[$]),[S,k]=ty(C),D=Jv(t);return u((()=>{$&&S.current&&($.disconnect(),g.current=!1,$.observe(S.current))}),[S,$]),Zv((()=>(l({type:xy.RegisterDroppable,element:{id:r,key:a,disabled:n,node:S,rect:m,data:D}}),()=>l({type:xy.UnregisterDroppable,key:a,id:r}))),[r]),u((()=>{n!==h.current.disabled&&(l({type:xy.SetDroppableDisabled,id:r,key:a,disabled:n}),h.current.disabled=n)}),[r,a,n,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===r,node:S,over:c,setNodeRef:k}}({id:l,data:T,disabled:k.droppable,resizeObserverConfig:{updateMeasurementsFor:E,...d}}),{active:M,activatorEvent:A,activeNodeRect:B,attributes:j,setNodeRef:z,listeners:R,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Xx({id:l,data:T,attributes:{...cw,...n},disabled:k.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(I,z),Y=Boolean(M),V=Y&&!x&&Zx(v)&&Zx($),U=!C&&P,X=U&&V?H:null,K=V?null!=X?X:(null!=c?c:S)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:D}):null,q=Zx(v)&&Zx($)?s({id:l,items:g,activeIndex:v,overIndex:$}):D,G=null==M?void 0:M.id,Z=o({activeId:G,items:g,newIndex:q,containerId:b}),Q=g!==Z.current.items,J=t({active:M,containerId:b,isDragging:P,isSorting:Y,id:l,index:D,items:g,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:n,node:r,rect:i}=e;const[s,l]=a(null),c=o(n);return Zv((()=>{if(!t&&n!==c.current&&r.current){const e=i.current;if(e){const t=Ay(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&l(n)}}n!==c.current&&(c.current=n)}),[t,n,r,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:D,node:F,rect:O});return u((()=>{Y&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),g!==Z.current.items&&(Z.current.items=g)}),[Y,q,b,g]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:M,activeIndex:v,attributes:j,data:T,rect:O,index:D,newIndex:q,items:g,isOver:_,isSorting:Y,isDragging:P,listeners:R,node:F,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:I,setDraggableNodeRef:z,transform:null!=ee?ee:K,transition:function(){if(ee||Q&&Z.current.newIndex===D)return lw;if(U&&!ly(A)||!h)return;if(Y||J)return dy.Transition.toString({...h,property:sw});return}()}}function uw(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const hw=[ex.Down,ex.Right,ex.Up,ex.Left],gw=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(hw.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];o.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const o=i.get(n.id);if(o)switch(e.code){case ex.Down:r.top<o.top&&t.push(n);break;case ex.Up:r.top>o.top&&t.push(n);break;case ex.Left:r.left>o.left&&t.push(n);break;case ex.Right:r.left<o.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Dy(t),o=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=Dy(r),a=i.reduce(((e,t,r)=>{return e+(i=n[r],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(Sy)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Ty(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(n.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const n=jy(l).some(((e,t)=>s[t]!==e)),i=pw(e,t),o=function(e,t){if(!uw(e)||!uw(t))return!1;if(!pw(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:o?r.width-a.width:0,y:o?r.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:sy(d,c)}}}};function pw(e,t){return!(!uw(e)||!uw(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class fw extends gx{}fw.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>mw(e.target)}];function mw(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends ox{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>mw(e.target)}];const bw=_.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,vw=_(Wh)`
    color: ${dc.text};
    ${vd({textSize:"body-md"})}

    ${bc.MaxWidth.sm} {
        display: none;
    }
`,yw=_(tm)`
    padding: 3.5rem 1.25rem 2.5rem;
`,xw=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${dc.text};
    ${vd({textSize:"body-md"})}
`,ww=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=ut(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=A(),d=mc["sm-max"]({theme:c}),u=Hd.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},g=()=>"string"==typeof i?e(_c.BodyMD,{children:i}):i;return t(n,{children:[o&&e(bw,Object.assign({"data-testid":l},s,{children:e(vw,{children:g()})})),u&&e(Qf,{show:null!=o&&o,onOverlayClick:h,children:e(yw,{onClose:h,children:e(xw,{children:g()})})})]})},$w=_.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Cw=r=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:g,customOffset:p,delay:f,onPopoverAppear:m,onPopoverDismiss:b}=r,v=ut(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=o(null),$=o(null),C=A(),S=mc["sm-max"]({theme:C}),k=Hd.useMediaQuery({maxWidth:S}),{refs:D,floatingStyles:T,context:E}=ye({open:y,placement:u,whileElementsMounted:xe,middleware:[we(null!=p?p:16),$e(),Ce({limiter:Se()})],onOpenChange:e=>{x(e),y!==e&&R(e)}}),O=Up(),F=k?"click":d,_=Te(E,{ignoreMouse:"hover"===F}),I=Ee(E),M=Be(E,{enabled:"hover"===F,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:B,getFloatingProps:j}=Oe([_,I,M]),z=()=>{x(!1),R(!1)},R=e=>{e&&m&&m(),!e&&b&&b()};return t(n,{children:[e($w,Object.assign({ref:e=>{w.current=e,D.setReference(e)}},B({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(Fe,{root:g,children:e(_e,{context:E,children:e("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},T),{outline:"none",zIndex:null!=h?h:O})},j(),{children:"function"==typeof c?c():e(ww,{visible:!0,onMobileClose:z,children:c})}))})})]})},Sw=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},kw=_.span`
    color: ${dc["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Sw(e)}

    &:hover,
    &:focus-visible {
        color: ${dc["text-hover"]};
        ${({$hoverStyle:e})=>Sw(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Dw=_.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Tw=n=>{var{ariaLabel:r,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=n,l=ut(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(Cw,Object.assign({},l,{children:t(kw,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info",children:[i,o&&e(Dw,{$standalone:!c,children:o})]})}))},Ew=_.div`
    padding-left: ${pc["spacing-4"]};
    display: inline;
`,Ow=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(Ew,{children:e(Tw,{trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=o?o:e(P,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Fw=_.label`
    color: ${dc["text-subtle"]};
    margin-bottom: ${pc["spacing-8"]};
    display: inline-block;

    ${uc["form-label"]}
    ${vd()}
    font-weight: ${uc.Spec["weight-semibold"]};
`,_w=_.p`
    ${uc["body-sm-semibold"]}
    color: ${dc["text-error"]};
    margin-top: ${pc["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Iw=_.span`
    ${uc["form-description"]}
    color: ${dc["text-subtler"]};
    display: block;
`,Mw=n=>{var{children:r,addon:i,subtitle:o,"data-testid":a}=n,s=ut(n,["children","addon","subtitle","data-testid"]);return t(Fw,Object.assign({},s,{children:[r,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(Ow,{addon:i}):null),"string"==typeof o?e(Iw,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},Aw=t=>e(_w,Object.assign({},t)),Bw=I`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${pc["spacing-32"]};
    }
`,jw=_.div`
    ${Bw}
`,zw=_(Df)`
    ${Bw}
`,Rw=_(If)`
    ${Bw}
`,Pw=({label:n,errorMessage:r,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,"data-error-testid":y})=>{const x=!s&&(l||d||u)?"v2-grid":!s&&(h||g||p||f||m||b||v)?"grid":s||"flex",w=()=>y||(i?`${i}-error-message`:"error-message"),$=()=>!!r;const C=(e=>{switch(e){case"v2-grid":return Rw;case"grid":return zw;case"flex":return jw}})(x);return t(C,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})(x),{children:[n&&e(Mw,"string"==typeof n?{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:n}:Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},n)),(()=>{const e={"aria-invalid":$(),"aria-describedby":$()&&w()};return S.map(a,(t=>c(t,e)))})(),r&&e(_w,{id:w(),tabIndex:0,"data-testid":w(),children:r})]}))};function Lw(e,t){return Lw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Lw(e,t)}function Nw(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Hw(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Ww(e){return null!==e&&1===e.length?e[0]:e.slice()}function Yw(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Vw(e,t){return Uw(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Uw(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let Xw=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Yw(n.getMouseEventMap())}))}Nw(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Vw(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Yw(n.getKeyDownEventMap()),Nw(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Yw(n.getMouseEventMap()),Nw(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Yw(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:Ww(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:Ww(n.state.value)};return n.props.renderTrack(i,o)};let r=Hw(t.value);r.length||(r=Hw(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=Vw(r[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Lw(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Hw(e.value);return n.length?t.pending?null:{value:n.map((t=>Vw(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Ww(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Vw(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Vw(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Vw(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Vw(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Uw(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Uw(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Ww(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(i.Component);Xw.displayName="ReactSlider",Xw.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Kw=Xw;const qw=_.div`
    isolation: isolate;
`,Gw=_.div`
    margin-top: ${pc["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${pc["spacing-8"]};
`,Zw=_.div`
    margin-bottom: ${pc["spacing-8"]};
`,Qw=_(_c.BodyBL)`
    overflow-wrap: anywhere;
`,Jw=_(Kw)`
    height: 0.875rem;
`,e$=_.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?I`
                cursor: not-allowed;
            `:e.$readOnly?void 0:I`
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

        background-color: ${dc.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${gc["width-010"]} ${gc.solid}
            ${e=>e.$disabled?dc["border-selected-disabled"]:dc["border-strong"]};
        border-radius: 50%;
    }
`,t$=_.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${e$}:after {
        outline-offset: -1px;
        outline: ${gc["width-040"]} ${gc.solid}
            ${dc["border-selected"]};
    }
`,n$=_.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${fc.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||dc["border-strong"](e)};
`,r$=n=>{var{value:r,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:g,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=n,S=ut(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,D]=a(E()),T=function(){const e=function(){const e=h||g?dc["border-disabled"]:dc["border-strong"],t=h||g?dc["border-selected-disabled"]:dc["border-selected"];if(1===c)return[t,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(t);return n.push(e),n}();return new Array(c+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();u((()=>{r!==k&&D(E())}),[r]);function E(){if(r&&r.length===c)return r;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const O=e=>w?w(e):t(Qw,{children:[m,e,b]});return t(qw,Object.assign({},S,{children:[v&&e(Zw,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(Qw,{children:[y,e,x]})})()}),e(Jw,{step:s,min:i,max:o,value:k,disabled:h||g,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const n=[...e];D(n),null==$||$(n)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==C||C(t)}else{const t=[...e];D(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,n)=>e(t$,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:h?void 0:t.tabIndex,children:e(e$,{$disabled:h,$readOnly:g})})),renderTrack:(t,n)=>e(n$,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:T[n.index]}))}),f&&t(Gw,{children:[e("div",{children:O(i)}),e("div",{children:O(o)})]})]}))},i$=_.div`
    display: flex;
    margin-bottom: ${pc["spacing-16"]};
    align-items: baseline;
`,o$=_.div`
    margin: 0 0.5rem;
`,a$=_.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,s$=_.div`
    flex: 1;
    border-radius: ${fc.sm} ${fc.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=dc["bg-strongest"];return e.$disabled&&e.$selected?t=dc["bg-selected-stronger-disabled"]:e.$disabled?t=dc["bg-disabled"]:e.$selected&&(t=dc["bg-selected-stronger"]),I`
            background-color: ${t};
        `}}
`,l$=_(r$)`
    margin-top: -0.3125rem;
`,c$=r=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:g,ariaLabels:p,onChange:f,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=r,x=ut(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),C=i.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[D,T]=a(_()),E=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/o+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===k+o*r));t?n.push(t):n.push({count:0,minValue:k+o*r})}return n}),[i,o]);u((()=>{c!==D&&T(_())}),[c]);const O=e=>{const[t,n]=e,r=[t,n];T(r),null==f||f(r)},F=e=>{const[t,n]=e,r=[t,n];T(r),null==b||b(r)};function _(){return null!=c?c:[k,k+o]}const I=e=>y?y(e):t(_c.BodyBL,{children:[h,e,g]});return t("div",Object.assign({},x,{children:[d&&t(i$,{children:[I(D[0]),e(o$,{children:"-"}),I(D[1])]}),E.every((e=>0===e.count))&&v?v():t(n,{children:[e(a$,{children:E.map(((t,n)=>{const r=t.count/$;return e(s$,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=D[0]&&t.minValue<D[1],$disabled:s||l},n)}))}),e(l$,{min:k,max:S+o,step:o,minRange:o,numOfThumbs:2,value:D,disabled:s,readOnly:l,ariaLabels:p,onChange:O,onChangeEnd:F})]})]}))},d$=_(up)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&I`
            padding-left: ${pc["spacing-16"]};
            padding-right: ${e.$showClear?0:pc["spacing-16"]};
        `}
`,u$=_(hp)`
    height: auto;
    padding: ${pc["spacing-12"]} ${pc["spacing-16"]};

    cursor: pointer;
    color: ${dc.icon};

    ${e=>"no-border"===e.$styleType&&I`
            margin-right: -${pc["spacing-12"]};
        `}
`,h$=_(je)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,g$=_.div`
    display: flex;
    width: 100%;
`,p$=_(cp)`
    display: flex;
    align-items: center;
    width: 100%;
`,f$=i.forwardRef(((r,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:g,allowClear:p=!1,className:f,styleType:m="bordered"}=r,v=ut(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,s),x=o(null);b(i,(()=>x.current),[]);const w=Fu({ref:x,formatter:e=>y?ku.transformWithSpaces(e,s):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{g&&g(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:n,updateCaretPosition:r}=t,i=n.replace(/\s/g,"");e.target.value=i,null==h||h(e),r()},k=a?(e=>e?y?ku.transformWithSpaces(e,s):e:"")(a):a,D=p&&!d&&!u&&!!a,T=()=>t(n,{children:[e(d$,Object.assign({"data-testid":"input",ref:x,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:D,$styleType:m},v)),D&&e(u$,{onClick:C,type:"button",$styleType:m,children:e(h$,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===m?e(g$,{className:f,children:T()}):e(p$,{$disabled:d,$error:c,$readOnly:u,className:f,children:T()})})})),m$=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:o,label:r,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(f$,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:n,error:!!i},y))})}));var b$=Es;var v$=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var y$=function(e){return this.__data__.get(e)};var x$=function(e){return this.__data__.has(e)},w$=Es,$$=Os,C$=qs;var S$=function(e,t){var n=this.__data__;if(n instanceof w$){var r=n.__data__;if(!$$||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new C$(r)}return n.set(e,t),this.size=n.size,this},k$=Es,D$=function(){this.__data__=new b$,this.size=0},T$=v$,E$=y$,O$=x$,F$=S$;function _$(e){var t=this.__data__=new k$(e);this.size=t.size}_$.prototype.clear=D$,_$.prototype.delete=T$,_$.prototype.get=E$,_$.prototype.has=O$,_$.prototype.set=F$;var I$=_$;var M$=qs,A$=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},B$=function(e){return this.__data__.has(e)};function j$(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new M$;++t<n;)this.add(e[t])}j$.prototype.add=j$.prototype.push=A$,j$.prototype.has=B$;var z$=function(e,t){return e.has(t)},R$=j$,P$=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},L$=z$;var N$=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,g=2&n?new R$:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],f=t[u];if(r)var m=a?r(f,p,u,t,e,o):r(p,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(g){if(!P$(t,(function(e,t){if(!L$(g,t)&&(p===e||i(p,e,n,r,o)))return g.push(t)}))){h=!1;break}}else if(p!==f&&!i(p,f,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var H$=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var W$=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Y$=Qo.Uint8Array,V$=ds,U$=N$,X$=H$,K$=W$,q$=Jo?Jo.prototype:void 0,G$=q$?q$.valueOf:void 0;var Z$=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Y$(e),new Y$(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return V$(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=X$;case"[object Set]":var l=1&r;if(s||(s=K$),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=U$(s(e),s(t),r,i,o,a);return a.delete(e),d;case"[object Symbol]":if(G$)return G$.call(e)==G$.call(t)}return!1};var Q$=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},J$=Q$,eC=Ko;var tC=function(e,t,n){var r=t(e);return eC(e)?r:J$(r,n(e))};var nC=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},rC=function(){return[]},iC=Object.prototype.propertyIsEnumerable,oC=Object.getOwnPropertySymbols,aC=oC?function(e){return null==e?[]:(e=Object(e),nC(oC(e),(function(t){return iC.call(e,t)})))}:rC;var sC=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},lC=da,cC=ua;var dC=function(e){return cC(e)&&"[object Arguments]"==lC(e)},uC=ua,hC=Object.prototype,gC=hC.hasOwnProperty,pC=hC.propertyIsEnumerable,fC=dC(function(){return arguments}())?dC:function(e){return uC(e)&&gC.call(e,"callee")&&!pC.call(e,"callee")},mC={exports:{}};var bC=function(){return!1};!function(e,t){var n=Qo,r=bC,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(mC,mC.exports);var vC=mC.exports,yC=/^(?:0|[1-9]\d*)$/;var xC=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&yC.test(e))&&e>-1&&e%1==0&&e<t};var wC=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},$C=da,CC=wC,SC=ua,kC={};kC["[object Float32Array]"]=kC["[object Float64Array]"]=kC["[object Int8Array]"]=kC["[object Int16Array]"]=kC["[object Int32Array]"]=kC["[object Uint8Array]"]=kC["[object Uint8ClampedArray]"]=kC["[object Uint16Array]"]=kC["[object Uint32Array]"]=!0,kC["[object Arguments]"]=kC["[object Array]"]=kC["[object ArrayBuffer]"]=kC["[object Boolean]"]=kC["[object DataView]"]=kC["[object Date]"]=kC["[object Error]"]=kC["[object Function]"]=kC["[object Map]"]=kC["[object Number]"]=kC["[object Object]"]=kC["[object RegExp]"]=kC["[object Set]"]=kC["[object String]"]=kC["[object WeakMap]"]=!1;var DC=function(e){return SC(e)&&CC(e.length)&&!!kC[$C(e)]};var TC=function(e){return function(t){return e(t)}},EC={exports:{}};!function(e,t){var n=qo,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(EC,EC.exports);var OC=EC.exports,FC=DC,_C=TC,IC=OC&&OC.isTypedArray,MC=IC?_C(IC):FC,AC=sC,BC=fC,jC=Ko,zC=vC,RC=xC,PC=MC,LC=Object.prototype.hasOwnProperty;var NC=function(e,t){var n=jC(e),r=!n&&BC(e),i=!n&&!r&&zC(e),o=!n&&!r&&!i&&PC(e),a=n||r||i||o,s=a?AC(e.length,String):[],l=s.length;for(var c in e)!t&&!LC.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||RC(c,l))||s.push(c);return s},HC=Object.prototype;var WC=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||HC)};var YC=function(e,t){return function(n){return e(t(n))}},VC=YC(Object.keys,Object),UC=WC,XC=VC,KC=Object.prototype.hasOwnProperty;var qC=function(e){if(!UC(e))return XC(e);var t=[];for(var n in Object(e))KC.call(e,n)&&"constructor"!=n&&t.push(n);return t},GC=Sa,ZC=wC;var QC=function(e){return null!=e&&ZC(e.length)&&!GC(e)},JC=NC,eS=qC,tS=QC;var nS=function(e){return tS(e)?JC(e):eS(e)},rS=tC,iS=aC,oS=nS;var aS=function(e){return rS(e,oS,iS)},sS=Object.prototype.hasOwnProperty;var lS=function(e,t,n,r,i,o){var a=1&n,s=aS(e),l=s.length;if(l!=aS(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:sS.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var g=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var f=e[d=s[c]],m=t[d];if(r)var b=a?r(m,f,d,t,e,o):r(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,n,r,o):b)){g=!1;break}p||(p="constructor"==d)}if(g&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return o.delete(e),o.delete(t),g},cS=Wa(Qo,"DataView"),dS=Os,uS=Wa(Qo,"Promise"),hS=Wa(Qo,"Set"),gS=Wa(Qo,"WeakMap"),pS=da,fS=Oa,mS="[object Map]",bS="[object Promise]",vS="[object Set]",yS="[object WeakMap]",xS="[object DataView]",wS=fS(cS),$S=fS(dS),CS=fS(uS),SS=fS(hS),kS=fS(gS),DS=pS;(cS&&DS(new cS(new ArrayBuffer(1)))!=xS||dS&&DS(new dS)!=mS||uS&&DS(uS.resolve())!=bS||hS&&DS(new hS)!=vS||gS&&DS(new gS)!=yS)&&(DS=function(e){var t=pS(e),n="[object Object]"==t?e.constructor:void 0,r=n?fS(n):"";if(r)switch(r){case wS:return xS;case $S:return mS;case CS:return bS;case SS:return vS;case kS:return yS}return t});var TS=DS,ES=I$,OS=N$,FS=Z$,_S=lS,IS=TS,MS=Ko,AS=vC,BS=MC,jS="[object Arguments]",zS="[object Array]",RS="[object Object]",PS=Object.prototype.hasOwnProperty;var LS=function(e,t,n,r,i,o){var a=MS(e),s=MS(t),l=a?zS:IS(e),c=s?zS:IS(t),d=(l=l==jS?RS:l)==RS,u=(c=c==jS?RS:c)==RS,h=l==c;if(h&&AS(e)){if(!AS(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new ES),a||BS(e)?OS(e,t,n,r,i,o):FS(e,t,l,n,r,i,o);if(!(1&n)){var g=d&&PS.call(e,"__wrapped__"),p=u&&PS.call(t,"__wrapped__");if(g||p){var f=g?e.value():e,m=p?t.value():t;return o||(o=new ES),i(f,m,n,r,o)}}return!!h&&(o||(o=new ES),_S(e,t,n,r,i,o))},NS=ua;var HS=function e(t,n,r,i,o){return t===n||(null==t||null==n||!NS(t)&&!NS(n)?t!=t&&n!=n:LS(t,n,r,i,e,o))},WS=I$,YS=HS;var VS=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new WS;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?YS(d,c,3,r,u):h))return!1}}return!0},US=xa;var XS=function(e){return e==e&&!US(e)},KS=XS,qS=nS;var GS=function(e){for(var t=qS(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,KS(i)]}return t};var ZS=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},QS=VS,JS=GS,ek=ZS;var tk=function(e,t){return null!=e&&t in Object(e)},nk=fl,rk=fC,ik=Ko,ok=xC,ak=wC,sk=bl;var lk=function(e,t,n){for(var r=-1,i=(t=nk(t,e)).length,o=!1;++r<i;){var a=sk(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&ak(i)&&ok(a,i)&&(ik(e)||rk(e))},ck=tk,dk=lk;var uk=HS,hk=$l,gk=function(e,t){return null!=e&&dk(e,t,ck)},pk=ya,fk=XS,mk=ZS,bk=bl;var vk=function(e){return function(t){return null==t?void 0:t[e]}},yk=xl;var xk=vk,wk=function(e){return function(t){return yk(t,e)}},$k=ya,Ck=bl;var Sk=function(e){var t=JS(e);return 1==t.length&&t[0][2]?ek(t[0][0],t[0][1]):function(n){return n===e||QS(n,e,t)}},kk=function(e,t){return pk(e)&&fk(t)?mk(bk(e),t):function(n){var r=hk(n,e);return void 0===r&&r===t?gk(n,e):uk(t,r,3)}},Dk=function(e){return e},Tk=Ko,Ek=function(e){return $k(e)?xk(Ck(e)):wk(e)};var Ok=function(e){return"function"==typeof e?e:null==e?Dk:"object"==typeof e?Tk(e)?kk(e[0],e[1]):Sk(e):Ek(e)},Fk=Ok,_k=QC,Ik=nS;var Mk=function(e){return function(t,n,r){var i=Object(t);if(!_k(t)){var o=Fk(n);t=Ik(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Ak=dg,Bk=1/0;var jk=function(e){return e?(e=Ak(e))===Bk||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var zk=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Rk=Ok,Pk=function(e){var t=jk(e),n=t%1;return t==t?n?t-n:t:0},Lk=Math.max;var Nk=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Pk(n);return i<0&&(i=Lk(r+i,0)),zk(e,Rk(t),i)},Hk=Uo(Nk),Wk=Uo(Mk(Nk)),Yk=HS;var Vk=Uo((function(e,t){return Yk(e,t)}));const Uk=_(Yo.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Xk=_.ul`
    border-bottom-left-radius: ${fc.sm};
    border-bottom-right-radius: ${fc.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${pc["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${dc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${bc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,Kk=_.li`
    :hover,
    :focus,
    :active {
        background: ${dc["bg-hover"]};
    }
    ${e=>{if(e.$checked)return I`
                background: ${dc["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${dc["bg-selected-hover"]};
                }
            `}}
`,qk=_.button`
    display: flex;
    ${e=>e.$multiSelect?I`
                padding: ${pc["spacing-8"]} ${pc["spacing-16"]};
            `:I`
                padding: 15px ${pc["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${pc["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${dc["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,Gk=I`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Zk=_.div`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    color: ${dc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Gk}
`,Qk=_.div`
    color: ${dc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Gk}

    ${e=>"next-line"===e.$labelDisplayType?I`
                    ${uc["body-md-semibold"]}
                `:I`
                    ${uc["body-baseline-regular"]}
                `}
`,Jk=_.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return I`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return I`
                    ${Zk} {
                        display: inline;
                    }

                    ${Qk} {
                        display: inline;
                        margin-left: ${pc["spacing-8"]};
                    }
                `}}}
`,eD=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,tD=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,nD=_(Qh)`
    flex-shrink: 0;
    margin-right: ${pc["spacing-16"]};
`,rD=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${pc["spacing-16"]} 0 ${pc["spacing-8"]} 0;
`,iD=_.button`
    ${e=>"small"===e.$variant?uc["body-md-semibold"]:uc["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${dc["text-primary"]};
`,oD=_.div`
    width: 100%;
    display: flex;
    padding: 15px ${pc["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
`,aD=_(z)`
    height: 1em;
    width: 1em;
    margin-right: ${pc["spacing-4"]};
    color: ${dc["icon-error"]};
`,sD=_(qc)`
    margin-right: ${pc["spacing-4"]};
    color: ${dc.icon};
`,lD=e=>"small"===e?1:1.375,cD=e=>I`
        height: ${lD(e)}rem;
        width: ${lD(e)}rem;
    `,dD=_.li`
    background: ${dc["bg-strong"]};
    display: flex;
    border-radius: ${fc.sm};
    align-items: center;
`,uD=_(up)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${pc["spacing-8"]} 0 0;
    width: 100%;
`,hD=_(Le)`
    ${e=>cD(e.$variant)}
    margin: 0 ${pc["spacing-8"]};
    color: ${dc.icon};
`,gD=_(Dc)`
    ${e=>cD(e.$variant)}
    padding: 0;
    margin: 0 ${pc["spacing-8"]};
    color: ${dc.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return I`
                svg {
                    ${cD(e.$variant)}
                }
            `}}
`,pD=g(((n,r)=>{const{onClear:i}=n,o=ut(n,["onClear"]);return t(dD,{children:[e(hD,{$variant:n.variant}),e(uD,Object.assign({ref:r,$variant:n.variant},o)),o.value&&e(gD,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:n.variant,children:e(J,{})})]},"search")})),fD=r=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:g,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:D="inline",renderListItem:T,onBlur:E,hideNoResultsDisplay:O,renderCustomCallToAction:F,variant:_="default"}=r,I=ut(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=a(0),[B,j]=a(""),[z,R]=a(null!=i?i:[]),[P,L]=a(0),N=Do({height:P}),H=o(null),W=o(null),Y=o([]),V=o(null),U=o(null),X=o(M),K=o(z),q=e=>{X.current=e,A(e)},G=e=>{K.current=e,R(e)};u((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(j(""),h){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),q(-1)):Y.current[M]&&Y.current[M].focus()}else L(0)}),[h]),u((()=>{if(h){const e=te();L(e)}}),[z,C]),u((()=>{G(null!=i?i:[]),j(""),q(0)}),[i]);const Z=e=>{const t=s?s(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return ku.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!Wk(x,(t=>Vk(t,e))),ee=e=>{if(""===e)G(null!=i?i:[]);else if(m){const t=m(e);G(t)}else{const t=null==i?void 0:i.filter((t=>{const{title:n,secondaryLabel:r}=Z(t),i=e.trim().toLowerCase();return n.includes(i)||r&&r.includes(i)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{var t,n;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(X.current<K.current.length-1){const e=X.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),q(e)}break;case"ArrowUp":if(X.current>0){const e=X.current-1;null===(n=Y.current[e])||void 0===n||n.focus(),q(X.current-1)}break;case"Escape":b&&b(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;j(t),f&&f()},oe=()=>{var e;j(""),null===(e=V.current)||void 0===e||e.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{E&&E()},le=r=>t(n,{children:[e(eD,{$maxLines:k,"aria-hidden":!0,children:r}),e(tD,{$maxLines:k,"aria-hidden":!0,children:r})]}),ce=n=>{const{title:r,secondaryLabel:i}=Z(n),o=Q(r),a=i&&Q(i);return t(Jk,{$labelDisplayType:o||a?"next-line":D,children:[e(Zk,{$truncateType:S,$maxLines:k,$variant:_,"aria-label":r,children:"middle"===S&&o?le(r):r}),i&&e(Qk,{$truncateType:S,$maxLines:k,$labelDisplayType:D,"aria-label":i,children:"middle"===S&&a?le(i):i})]})},de=()=>{if(!$||"success"===C)return z.map(((n,r)=>e(Kk,{$checked:J(n)&&!y,children:t(qk,{$hasNextLineLabel:"next-line"===D&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{re(e,n)},ref:e=>Y.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:_,children:[y&&e(nD,{checked:J(n),displaySize:"small"}),T?T(n,{selected:J(n)}):ce(n)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},ue=()=>{if(x&&y&&z.length>0&&!B&&"success"===C)return e(rD,{children:e(iD,{onClick:w,type:"button",$variant:_,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!O&&(B||!g)&&0===z.length&&"success"===C)return t(oD,{"data-testid":"list-no-results",$variant:_,children:[e(aD,{"data-testid":"no-result-icon",$variant:_}),"No results found."]},"noResults")},ge=()=>{if($&&"loading"===C)return t(oD,{"data-testid":"list-loading",$variant:_,children:[e(sD,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(oD,{"data-testid":"list-fail",$variant:_,children:[e(aD,{"data-testid":"load-error-icon",$variant:_}),"Failed to load. ",e(iD,{onClick:ae,type:"button",$variant:_,children:"Try again."})]},"noResults")};return e(n,{children:t(Uk,{style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(h)return t(Xk,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},I,{children:[(g||m)&&"success"===C?e(pD,{ref:V,onChange:ie,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:_}):null,ue(),he(),ge(),pe(),de()]}))})(),(()=>{if(h&&F)return e("div",{ref:U,"data-testid":"custom-cta",children:F(b,z)})})()]})})},mD=_.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return I`
                border-bottom: ${gc["width-010"]} ${gc.solid}
                    ${dc.border};
            `}}

    ${e=>e.$readOnly?I`
                border: 0;
                margin: 0;
            `:"right"===e.$position?I`
                        flex-direction: row-reverse;
                        margin: 0 ${pc["spacing-16"]};
                    `:I`
                        flex-direction: row;
                        margin: 0 ${pc["spacing-16"]};
                    `}
`,bD=_(jp)`
    padding: 0;
    width: auto;
`,vD=_.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${pc["spacing-12"]};
`,yD=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${hc["duration-250"]} ${hc["ease-default"]};
    margin: 0 ${pc["spacing-12"]};
    display: flex;
    align-items: center;
`,xD=_(fe)`
    color: ${dc.icon};
    height: ${uc.Spec["body-size-baseline"]};
    width: ${uc.Spec["body-size-baseline"]};
`,wD=_.div`
    display: flex;
    flex: 1 1 auto;
`,$D=_(_c.BodyBL)`
    text-align: left;
    ${Tc(2)}
    text-overflow: ellipsis;
`,CD=_($D)`
    color: ${dc["text-subtler"]};
`,SD=_.div`
    width: 1px;
    background: ${dc.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return I`
                display: none;
            `}}

    ${e=>"right"===e.$position?I`
                    margin: 0 ${pc["spacing-12"]};
                `:I`
                    margin: 0 ${pc["spacing-12"]} 0 0;
                `}
`,kD=_(cp)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${pc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,DD=_(cp)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${pc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,TD=_(f$)``,ED=_.div`
    position: relative;
    display: flex;
    align-items: center;

    ${uc["body-baseline-regular"]}
    color: ${dc.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return I`
                color: ${dc["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?I`
                    margin-left: ${e.$readOnly?pc["spacing-4"]:pc["spacing-12"]};
                `:I`
                    margin-right: ${e.$readOnly?pc["spacing-4"]:pc["spacing-12"]};
                `};
`,OD=i.forwardRef(((r,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:g}=r,p=ut(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:D,"data-selector-testid":T}=s.attributes,{position:E}=s,[O,F]=a(C),[_,I]=a(!1),M=o(null);u((()=>{F(C)}),[C]);const A=()=>{if(O)return $?$(O):x?x(O):O.toString()},B=e=>{!e&&k&&k(),e&&D&&D()},j=e=>{e.preventDefault(),p.disabled||(I(!_),B(!_))},z=(e,t)=>{var n;F(e),I(!1),B(!1),M&&(null===(n=M.current)||void 0===n||n.focus()),S&&S(e,t)},R=e=>{c&&c(e)},P=()=>{g&&g()},L=()=>{var e;I(!1),B(!1),M&&(null===(e=M.current)||void 0===e||e.focus())};return t(Yp,{className:h,show:_,error:l&&!_,disabled:p.disabled,readOnly:d,onBlur:()=>{I(!1),B(!1),P()},children:[t(mD,{$expanded:_,$readOnly:d,$position:E,children:[d?O?e(vD,{children:e($D,{"data-testid":"selector-label",children:A()})}):null:e(bD,{ref:M,type:"button",disabled:p.disabled,"data-testid":T||"addon-selector",onClick:j,children:t(n,{children:[t(wD,{children:[f&&!O&&e(CD,{children:f}),O&&e($D,{"data-testid":"selector-label",children:A()})]}),e(yD,{$expanded:_,children:e(xD,{})})]})}),e(SD,{$readOnly:d,$position:E}),e(TD,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:R,"data-testid":p["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?e(fD,{listItems:m,selectedItems:C?[C]:[],onSelectItem:z,valueExtractor:x,listExtractor:w,visible:_,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):e(n,{})]})})),FD=i.forwardRef(((n,r)=>{var{addon:i,error:o,className:a}=n,s=ut(n,["addon","error","className"]);const l=()=>e(DD,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(TD,Object.assign({ref:r},s,{"data-testid":"input",styleType:"no-border"}))});if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:d}=s;switch(n){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(OD,Object.assign({ref:r,addon:i,error:o,className:a},s)):l()}case"custom":{const n=i.attributes;return n.children?t(kD,{$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(ED,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:n.children}),e(TD,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const n=i.attributes;return n.value?t(kD,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(ED,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:n.value}),e(TD,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),_D=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:o,label:r,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(FD,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),ID=_(FD)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":pc["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,MD=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=dc.icon,$activeColor:n=dc["icon-primary"]})=>e?t:n};
    padding: ${pc["spacing-12"]} ${pc["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,AD=_.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,BD=_(_c.BodyBL)`
    color: ${dc["text-subtler"]};
`,jD=_(qc)`
    margin-right: ${pc["spacing-8"]};
    color: ${dc.icon};
`,zD=_.span`
    color: ${dc["text-primary"]};
    text-decoration: underline;
    font-weight: ${uc.Spec["weight-semibold"]};
`,RD=_.span`
    display: flex;
    align-items: center;
    margin-right: ${pc["spacing-8"]};
`,PD=_(We)`
    color: ${dc["icon-warning"]};
    margin-right: ${pc["spacing-8"]};
    height: 1em;
    width: 1em;
`,LD=_.span`
    color: ${dc["text-warning"]};
`,ND=_(hp)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${uc["body-baseline-regular"]}

    :hover, :active, :focus {
        ${zD} {
            color: ${dc["text-hover"]};
        }
    }
`;var HD,WD,YD={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */HD=YD,WD=YD.exports,function(){var e,t="Expected a function",n="__lodash_hash_undefined__",r="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,g=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],p="[object Arguments]",f="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",D="[object Set]",T="[object String]",E="[object Symbol]",O="[object WeakMap]",F="[object ArrayBuffer]",_="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",z="[object Uint8Array]",R="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),X=RegExp(V.source),K=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),ne=/^\s+/,re=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Ee="["+xe+"]",Oe="["+De+"]",Fe="["+we+"]",_e="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+De+_e+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Le="\\u200d",Ne="(?:"+Me+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+Fe+"|"+Be+")?",Ue="["+ke+"]?",Xe=Ue+Ve+"(?:"+Le+"(?:"+[je,ze,Re].join("|")+")"+Ue+Ve+")*",Ke="(?:"+[Ie,ze,Re].join("|")+")"+Xe,qe="(?:"+[je+Fe+"?",Fe,ze,Re,Ee].join("|")+")",Ge=RegExp(Te,"g"),Ze=RegExp(Fe,"g"),Qe=RegExp(Be+"(?="+Be+")|"+qe+Xe,"g"),Je=RegExp([Pe+"?"+Me+"+"+We+"(?="+[Oe,Pe,"$"].join("|")+")",He+"+"+Ye+"(?="+[Oe,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+We,Pe+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_e,Ke].join("|"),"g"),et=RegExp("["+Le+xe+we+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[I]=it[M]=it[A]=it[B]=it[j]=it[z]=it[R]=it[P]=it[L]=!0,it[p]=it[f]=it[F]=it[m]=it[_]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[D]=it[T]=it[O]=!1;var ot={};ot[p]=ot[f]=ot[F]=ot[_]=ot[m]=ot[b]=ot[I]=ot[M]=ot[A]=ot[B]=ot[j]=ot[w]=ot[$]=ot[C]=ot[k]=ot[D]=ot[T]=ot[E]=ot[z]=ot[R]=ot[P]=ot[L]=!0,ot[v]=ot[y]=ot[O]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Vo&&Vo&&Vo.Object===Object&&Vo,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=WD&&!WD.nodeType&&WD,gt=ht&&HD&&!HD.nodeType&&HD,pt=gt&&gt.exports===ht,ft=pt&&ct.process,mt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function Ct(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function St(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}function kt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Et(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Ft(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function _t(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function It(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Mt(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function At(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Bt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var jt=Wt("length");function zt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Rt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Rt(e,Nt,n)}function Lt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Nt(e){return e!=e}function Ht(e,t){var n=null==e?0:e.length;return n?Ut(e,t)/n:u}function Wt(t){return function(n){return null==n?e:n[t]}}function Yt(t){return function(n){return null==t?e:t[n]}}function Vt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Ut(t,n){for(var r,i=-1,o=t.length;++i<o;){var a=n(t[i]);a!==e&&(r=r===e?a:r+a)}return r}function Xt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Kt(e){return e?e.slice(0,hn(e)+1).replace(ne,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return _t(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,r=e.length;++n<r&&Pt(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length;n--&&Pt(t,e[n],0)>-1;);return n}var en=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(e){return"\\"+at[e]}function rn(e){return et.test(e)}function on(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function an(e,t){return function(n){return e(t(n))}}function sn(e,t){for(var n=-1,i=e.length,o=0,a=[];++n<i;){var s=e[n];s!==t&&s!==r||(e[n]=r,a[o++]=n)}return a}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dn(e){return rn(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):jt(e)}function un(e){return rn(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function hn(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var gn=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pn=function re(xe){var we=(xe=null==xe?ut:pn.defaults(ut.Object(),xe,pn.pick(ut,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,De=xe.Object,Te=xe.RegExp,Ee=xe.String,Oe=xe.TypeError,Fe=we.prototype,_e=Se.prototype,Ie=De.prototype,Me=xe["__core-js_shared__"],Ae=_e.toString,Be=Ie.hasOwnProperty,je=0,ze=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Ie.toString,Pe=Ae.call(De),Le=ut._,Ne=Te("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=pt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=an(De.getPrototypeOf,De),Xe=De.create,Ke=Ie.propertyIsEnumerable,qe=Fe.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,at=We?We.toStringTag:e,ct=function(){try{var e=ho(De,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,gt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=ke.ceil,mt=ke.floor,jt=De.getOwnPropertySymbols,Yt=He?He.isBuffer:e,fn=xe.isFinite,mn=Fe.join,bn=an(De.keys,De),vn=ke.max,yn=ke.min,xn=$e.now,wn=xe.parseInt,$n=ke.random,Cn=Fe.reverse,Sn=ho(xe,"DataView"),kn=ho(xe,"Map"),Dn=ho(xe,"Promise"),Tn=ho(xe,"Set"),En=ho(xe,"WeakMap"),On=ho(De,"create"),Fn=En&&new En,_n={},In=Ro(Sn),Mn=Ro(kn),An=Ro(Dn),Bn=Ro(Tn),jn=Ro(En),zn=We?We.prototype:e,Rn=zn?zn.valueOf:e,Pn=zn?zn.toString:e;function Ln(e){if(ts(e)&&!Ya(e)&&!(e instanceof Yn)){if(e instanceof Wn)return e;if(Be.call(e,"__wrapped__"))return Po(e)}return new Wn(e)}var Nn=function(){function t(){}return function(n){if(!es(n))return{};if(Xe)return Xe(n);t.prototype=n;var r=new t;return t.prototype=e,r}}();function Hn(){}function Wn(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=e}function Yn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Vn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Xn;++t<n;)this.add(e[t])}function qn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Ya(e),r=!n&&Wa(e),i=!n&&!r&&Ka(e),o=!n&&!r&&!i&&cs(e),a=n||r||i||o,s=a?Xt(e.length,Ee):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Zn(t){var n=t.length;return n?t[Kr(0,n-1)]:e}function Qn(e,t){return Bo(Oi(e),sr(t,0,e.length))}function Jn(e){return Bo(Oi(e))}function er(t,n,r){(r!==e&&!La(t[n],r)||r===e&&!(n in t))&&or(t,n,r)}function tr(t,n,r){var i=t[n];Be.call(t,n)&&La(i,r)&&(r!==e||n in t)||or(t,n,r)}function nr(e,t){for(var n=e.length;n--;)if(La(e[n][0],t))return n;return-1}function rr(e,t,n,r){return hr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function ir(e,t){return e&&Fi(t,_s(t),e)}function or(e,t,n){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(t,n){for(var r=-1,i=n.length,o=we(i),a=null==t;++r<i;)o[r]=a?e:Ds(t,n[r]);return o}function sr(t,n,r){return t==t&&(r!==e&&(t=t<=r?t:r),n!==e&&(t=t>=n?t:n)),t}function lr(t,n,r,i,o,a){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=o?r(t,i,o,a):r(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(t),!l)return Oi(t,s)}else{var h=fo(t),g=h==y||h==x;if(Ka(t))return Ci(t,l);if(h==C||h==p||g&&!o){if(s=c||g?{}:bo(t),!l)return c?function(e,t){return Fi(e,po(e),t)}(t,function(e,t){return e&&Fi(t,Is(t),e)}(s,t)):function(e,t){return Fi(e,go(e),t)}(t,ir(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,n){var r,i=e.constructor;switch(t){case F:return Si(e);case m:case b:return new i(+e);case _:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case I:case M:case A:case B:case j:case z:case R:case P:case L:return ki(e,n);case w:return new i;case $:case T:return new i(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new i;case E:return r=e,Rn?De(Rn.call(r)):{}}}(t,h,l)}}a||(a=new qn);var f=a.get(t);if(f)return f;a.set(t,s),as(t)?t.forEach((function(e){s.add(lr(e,n,r,e,t,a))})):ns(t)&&t.forEach((function(e,i){s.set(i,lr(e,n,r,i,t,a))}));var v=u?e:(d?c?io:ro:c?Is:_s)(t);return kt(v||t,(function(e,i){v&&(e=t[i=e]),tr(s,i,lr(e,n,r,i,t,a))})),s}function cr(t,n,r){var i=r.length;if(null==t)return!i;for(t=De(t);i--;){var o=r[i],a=n[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dr(n,r,i){if("function"!=typeof n)throw new Oe(t);return _o((function(){n.apply(e,i)}),r)}function ur(e,t,n,r){var i=-1,o=Ot,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=_t(t,qt(n))),r?(o=Ft,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Kn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,r)||l.push(d)}return l}Ln.templateSettings={escape:K,evaluate:q,interpolate:G,variable:"",imports:{_:Ln}},Ln.prototype=Hn.prototype,Ln.prototype.constructor=Ln,Wn.prototype=Nn(Hn.prototype),Wn.prototype.constructor=Wn,Yn.prototype=Nn(Hn.prototype),Yn.prototype.constructor=Yn,Vn.prototype.clear=function(){this.__data__=On?On(null):{},this.size=0},Vn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vn.prototype.get=function(t){var r=this.__data__;if(On){var i=r[t];return i===n?e:i}return Be.call(r,t)?r[t]:e},Vn.prototype.has=function(t){var n=this.__data__;return On?n[t]!==e:Be.call(n,t)},Vn.prototype.set=function(t,r){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=On&&r===e?n:r,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0||(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,0))},Un.prototype.get=function(t){var n=this.__data__,r=nr(n,t);return r<0?e:n[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Xn.prototype.clear=function(){this.size=0,this.__data__={hash:new Vn,map:new(kn||Un),string:new Vn}},Xn.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Xn.prototype.get=function(e){return co(this,e).get(e)},Xn.prototype.has=function(e){return co(this,e).has(e)},Xn.prototype.set=function(e,t){var n=co(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Kn.prototype.add=Kn.prototype.push=function(e){return this.__data__.set(e,n),this},Kn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.clear=function(){this.__data__=new Un,this.size=0},qn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},qn.prototype.get=function(e){return this.__data__.get(e)},qn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Xn(r)}return n.set(e,t),this.size=n.size,this};var hr=Mi(xr),gr=Mi(wr,!0);function pr(e,t){var n=!0;return hr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function fr(t,n,r){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=n(a);if(null!=s&&(l===e?s==s&&!ls(s):r(s,l)))var l=s,c=a}return c}function mr(e,t){var n=[];return hr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?br(s,t-1,n,r,i):It(i,s):r||(i[i.length]=s)}return i}var vr=Ai(),yr=Ai(!0);function xr(e,t){return e&&vr(e,t,_s)}function wr(e,t){return e&&yr(e,t,_s)}function $r(e,t){return Et(t,(function(t){return Za(e[t])}))}function Cr(t,n){for(var r=0,i=(n=yi(n,t)).length;null!=t&&r<i;)t=t[zo(n[r++])];return r&&r==i?t:e}function Sr(e,t,n){var r=t(e);return Ya(e)?r:It(r,n(e))}function kr(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in De(t)?function(t){var n=Be.call(t,at),r=t[at];try{t[at]=e;var i=!0}catch(e){}var o=Re.call(t);return i&&(n?t[at]=r:delete t[at]),o}(t):function(e){return Re.call(e)}(t)}function Dr(e,t){return e>t}function Tr(e,t){return null!=e&&Be.call(e,t)}function Er(e,t){return null!=e&&t in De(e)}function Or(t,n,r){for(var i=r?Ft:Ot,o=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&n&&(u=_t(u,qt(n))),c=yn(u.length,c),l[s]=!r&&(n||o>=120&&u.length>=120)?new Kn(s&&u):e}u=t[0];var h=-1,g=l[0];e:for(;++h<o&&d.length<c;){var p=u[h],f=n?n(p):p;if(p=r||0!==p?p:0,!(g?Zt(g,f):i(d,f,r))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,f):i(t[s],f,r)))continue e}g&&g.push(f),d.push(p)}}return d}function Fr(t,n,r){var i=null==(t=Eo(t,n=yi(n,t)))?t:t[zo(Go(n))];return null==i?e:Ct(i,t,r)}function _r(e){return ts(e)&&kr(e)==p}function Ir(t,n,r,i,o){return t===n||(null==t||null==n||!ts(t)&&!ts(n)?t!=t&&n!=n:function(t,n,r,i,o,a){var s=Ya(t),l=Ya(n),c=s?f:fo(t),d=l?f:fo(n),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,g=c==d;if(g&&Ka(t)){if(!Ka(n))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new qn),s||cs(t)?to(t,n,r,i,o,a):function(e,t,n,r,i,o,a){switch(n){case _:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case F:return!(e.byteLength!=t.byteLength||!o(new Ye(e),new Ye(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case T:return e==t+"";case w:var s=on;case D:var l=1&r;if(s||(s=ln),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=to(s(e),s(t),r,i,o,a);return a.delete(e),d;case E:if(Rn)return Rn.call(e)==Rn.call(t)}return!1}(t,n,c,r,i,o,a);if(!(1&r)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(n,"__wrapped__");if(y||x){var S=y?t.value():t,O=x?n.value():n;return a||(a=new qn),o(S,O,r,i,a)}}return!!g&&(a||(a=new qn),function(t,n,r,i,o,a){var s=1&r,l=ro(t),c=l.length,d=ro(n),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var g=l[h];if(!(s?g in n:Be.call(n,g)))return!1}var p=a.get(t),f=a.get(n);if(p&&f)return p==n&&f==t;var m=!0;a.set(t,n),a.set(n,t);for(var b=s;++h<c;){var v=t[g=l[h]],y=n[g];if(i)var x=s?i(y,v,g,n,t,a):i(v,y,g,t,n,a);if(!(x===e?v===y||o(v,y,r,i,a):x)){m=!1;break}b||(b="constructor"==g)}if(m&&!b){var w=t.constructor,$=n.constructor;w==$||!("constructor"in t)||!("constructor"in n)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(n),m}(t,n,r,i,o,a))}(t,n,r,i,Ir,o))}function Mr(t,n,r,i){var o=r.length,a=o,s=!i;if(null==t)return!a;for(t=De(t);o--;){var l=r[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=r[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new qn;if(i)var g=i(d,u,c,t,n,h);if(!(g===e?Ir(u,d,3,i,h):g))return!1}}return!0}function Ar(e){return!(!es(e)||(t=e,ze&&ze in t))&&(Za(e)?Ne:pe).test(Ro(e));var t}function Br(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Ya(e)?Nr(e[0],e[1]):Lr(e):hl(e)}function jr(e){if(!So(e))return bn(e);var t=[];for(var n in De(e))Be.call(e,n)&&"constructor"!=n&&t.push(n);return t}function zr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in De(e))t.push(n);return t}(e);var t=So(e),n=[];for(var r in e)("constructor"!=r||!t&&Be.call(e,r))&&n.push(r);return n}function Rr(e,t){return e<t}function Pr(e,t){var n=-1,r=Ua(e)?we(e.length):[];return hr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function Lr(e){var t=uo(e);return 1==t.length&&t[0][2]?Do(t[0][0],t[0][1]):function(n){return n===e||Mr(n,e,t)}}function Nr(t,n){return wo(t)&&ko(n)?Do(zo(t),n):function(r){var i=Ds(r,t);return i===e&&i===n?Ts(r,t):Ir(n,i,3)}}function Hr(t,n,r,i,o){t!==n&&vr(n,(function(a,s){if(o||(o=new qn),es(a))!function(t,n,r,i,o,a,s){var l=Oo(t,r),c=Oo(n,r),d=s.get(c);if(d)er(t,r,d);else{var u=a?a(l,c,r+"",t,n,s):e,h=u===e;if(h){var g=Ya(c),p=!g&&Ka(c),f=!g&&!p&&cs(c);u=c,g||p||f?Ya(l)?u=l:Xa(l)?u=Oi(l):p?(h=!1,u=Ci(c,!0)):f?(h=!1,u=ki(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),er(t,r,u)}}(t,n,s,r,Hr,i,o);else{var l=i?i(Oo(t,s),a,s+"",t,n,o):e;l===e&&(l=a),er(t,s,l)}}),Is)}function Wr(t,n){var r=t.length;if(r)return yo(n+=n<0?r:0,r)?t[n]:e}function Yr(e,t,n){t=t.length?_t(t,(function(e){return Ya(e)?function(t){return Cr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=_t(t,qt(lo()));var i=Pr(e,(function(e,n,i){var o=_t(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;++r<a;){var l=Di(i[r],o[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Vr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=Cr(e,a);n(s,a)&&Jr(o,yi(a,e),s)}return o}function Ur(e,t,n,r){var i=r?Lt:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=Oi(t)),n&&(s=_t(e,qt(n)));++o<a;)for(var l=0,c=t[o],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Xr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Kr(e,t){return e+mt($n()*(t-e+1))}function qr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=mt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Io(To(e,t,rl),e+"")}function Zr(e){return Zn(Ls(e))}function Qr(e,t){var n=Ls(e);return Bo(n,sr(t,0,n.length))}function Jr(t,n,r,i){if(!es(t))return t;for(var o=-1,a=(n=yi(n,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=zo(n[o]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(n[o+1])?[]:{})}tr(l,c,d),l=l[c]}return t}var ei=Fn?function(e,t){return Fn.set(e,t),e}:rl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Bo(Ls(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=we(i);++r<i;)o[r]=e[r+t];return o}function ii(e,t){var n;return hr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function oi(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!ls(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return ai(e,t,rl,n)}function ai(t,n,r,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(n=r(n))!=n,l=null===n,c=ls(n),d=n===e;o<a;){var u=mt((o+a)/2),h=r(t[u]),g=h!==e,p=null===h,f=h==h,m=ls(h);if(s)var b=i||f;else b=d?f&&(i||g):l?f&&g&&(i||!p):c?f&&g&&!p&&(i||!m):!p&&!m&&(i?h<=n:h<n);b?o=u+1:a=u}return yn(a,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Ya(e))return _t(e,ci)+"";if(ls(e))return Pn?Pn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Ot,o=e.length,a=!0,s=[],l=s;if(n)a=!1,i=Ft;else if(o>=200){var c=t?null:qi(e);if(c)return ln(c);a=!1,i=Zt,l=new Kn}else l=t?[]:s;e:for(;++r<o;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Eo(e,t=yi(t,e)))||delete e[zo(Go(t))]}function hi(e,t,n,r){return Jr(e,t,n(Cr(e,t)),r)}function gi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ri(e,r?0:o,r?o+1:i):ri(e,r?o+1:0,r?i:o)}function pi(e,t){var n=e;return n instanceof Yn&&(n=n.value()),Mt(t,(function(e,t){return t.func.apply(t.thisArg,It([e],t.args))}),n)}function fi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,o=we(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=ur(o[i]||a,e[s],t,n));return di(br(o,1),t,n)}function mi(t,n,r){for(var i=-1,o=t.length,a=n.length,s={};++i<o;){var l=i<a?n[i]:e;r(s,t[i],l)}return s}function bi(e){return Xa(e)?e:[]}function vi(e){return"function"==typeof e?e:rl}function yi(e,t){return Ya(e)?e:wo(e,t)?[e]:jo(vs(e))}var xi=Gr;function wi(t,n,r){var i=t.length;return r=r===e?i:r,!n&&r>=i?t:ri(t,n,r)}var $i=dt||function(e){return ut.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var n=e.length,r=Ve?Ve(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ki(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Di(t,n){if(t!==n){var r=t!==e,i=null===t,o=t==t,a=ls(t),s=n!==e,l=null===n,c=n==n,d=ls(n);if(!l&&!d&&!a&&t>n||a&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!o)return 1;if(!i&&!a&&!d&&t<n||d&&r&&o&&!i&&!a||l&&r&&o||!s&&o||!c)return-1}return 0}function Ti(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,l=t.length,c=vn(o-a,0),d=we(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ei(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,l=-1,c=t.length,d=vn(o-s,0),u=we(d+c),h=!r;++i<d;)u[i]=e[i];for(var g=i;++l<c;)u[g+l]=t[l];for(;++a<s;)(h||i<o)&&(u[g+n[a]]=e[i++]);return u}function Oi(e,t){var n=-1,r=e.length;for(t||(t=we(r));++n<r;)t[n]=e[n];return t}function Fi(t,n,r,i){var o=!r;r||(r={});for(var a=-1,s=n.length;++a<s;){var l=n[a],c=i?i(r[l],t[l],l,r,t):e;c===e&&(c=t[l]),o?or(r,l,c):tr(r,l,c)}return r}function _i(e,t){return function(n,r){var i=Ya(n)?St:rr,o=t?t():{};return i(n,e,lo(r,2),o)}}function Ii(t){return Gr((function(n,r){var i=-1,o=r.length,a=o>1?r[o-1]:e,s=o>2?r[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(r[0],r[1],s)&&(a=o<3?e:a,o=1),n=De(n);++i<o;){var l=r[i];l&&t(n,l,i,a)}return n}))}function Mi(e,t){return function(n,r){if(null==n)return n;if(!Ua(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=De(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Ai(e){return function(t,n,r){for(var i=-1,o=De(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}}function Bi(t){return function(n){var r=rn(n=vs(n))?un(n):e,i=r?r[0]:n.charAt(0),o=r?wi(r,1).join(""):n.slice(1);return i[t]()+o}}function ji(e){return function(t){return Mt(Zs(Ws(t).replace(Ge,"")),e,"")}}function zi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Nn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Ri(t){return function(n,r,i){var o=De(n);if(!Ua(n)){var a=lo(r,3);n=_s(n),r=function(e){return a(o[e],e,o)}}var s=t(n,r,i);return s>-1?o[a?n[s]:s]:e}}function Pi(n){return no((function(r){var i=r.length,o=i,a=Wn.prototype.thru;for(n&&r.reverse();o--;){var s=r[o];if("function"!=typeof s)throw new Oe(t);if(a&&!l&&"wrapper"==ao(s))var l=new Wn([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=r[o]),d="wrapper"==c?oo(s):e;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var n=0,o=i?r[n].apply(this,e):t;++n<i;)o=r[n].call(this,o);return o}}))}function Li(t,n,r,i,o,a,l,c,d,u){var h=n&s,g=1&n,p=2&n,f=24&n,m=512&n,b=p?e:zi(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(f)var w=so(s),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Ti(y,i,o,f)),a&&(y=Ei(y,a,l,f)),v-=$,f&&v<u){var C=sn(y,w);return Xi(t,n,Li,s.placeholder,r,y,C,c,d,u-v)}var S=g?r:this,k=p?S[t]:t;return v=y.length,c?y=function(t,n){for(var r=t.length,i=yn(n.length,r),o=Oi(t);i--;){var a=n[i];t[i]=yo(a,r)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(k=b||zi(k)),k.apply(S,y)}}function Ni(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Hi(t,n){return function(r,i){var o;if(r===e&&i===e)return n;if(r!==e&&(o=r),i!==e){if(o===e)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),o=t(r,i)}return o}}function Wi(e){return no((function(t){return t=_t(t,qt(lo())),Gr((function(n){var r=this;return e(t,(function(e){return Ct(e,r,n)}))}))}))}function Yi(t,n){var r=(n=n===e?" ":ci(n)).length;if(r<2)return r?qr(n,t):n;var i=qr(n,ft(t/dn(n)));return rn(n)?wi(un(i),0,t).join(""):i.slice(0,t)}function Vi(t){return function(n,r,i){return i&&"number"!=typeof i&&xo(n,r,i)&&(r=i=e),n=gs(n),r===e?(r=n,n=0):r=gs(r),function(e,t,n,r){for(var i=-1,o=vn(ft((t-e)/(n||1)),0),a=we(o);o--;)a[r?o:++i]=e,e+=n;return a}(n,r,i=i===e?n<r?1:-1:gs(i),t)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ms(t),n=ms(n)),e(t,n)}}function Xi(t,n,r,i,s,l,c,d,u,h){var g=8&n;n|=g?o:a,4&(n&=~(g?a:o))||(n&=-4);var p=[t,n,s,g?l:e,g?c:e,g?e:l,g?e:c,d,u,h],f=r.apply(e,p);return $o(t)&&Fo(f,p),f.placeholder=i,Mo(f,t,n)}function Ki(e){var t=ke[e];return function(e,n){if(e=ms(e),(n=null==n?0:yn(ps(n),292))&&fn(e)){var r=(vs(e)+"e").split("e");return+((r=(vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var qi=Tn&&1/ln(new Tn([,-0]))[1]==c?function(e){return new Tn(e)}:ll;function Gi(e){return function(t){var n=fo(t);return n==w?on(t):n==D?cn(t):function(e,t){return _t(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(n,c,d,u,h,g,p,f){var m=2&c;if(!m&&"function"!=typeof n)throw new Oe(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:vn(ps(p),0),f=f===e?f:ps(f),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(n),w=[n,c,d,u,h,v,y,g,p,f];if(x&&function(e,t){var n=e[1],i=t[1],o=n|i,a=o<131,c=i==s&&8==n||i==s&&n==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&n?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ti(u,d,t[4]):d,e[4]=u?sn(e[3],r):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Ei(u,d,t[6]):d,e[6]=u?sn(e[5],r):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),n=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(f=w[9]=w[9]===e?m?0:n.length:vn(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,n,r){var i=zi(t);return function o(){for(var a=arguments.length,s=we(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sn(s,c);return(a-=d.length)<r?Xi(t,n,Li,o.placeholder,e,s,d,e,e,r-a):Ct(this&&this!==ut&&this instanceof o?i:t,this,s)}}(n,c,f):c!=o&&33!=c||h.length?Li.apply(e,w):function(e,t,n,r){var i=1&t,o=zi(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=r.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++a];return Ct(u,i?n:this,d)}}(n,c,d,u);else var $=function(e,t,n){var r=1&t,i=zi(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(r?n:this,arguments)}}(n,c,d);return Mo((x?ei:Fo)($,w),n,c)}function Qi(t,n,r,i){return t===e||La(t,Ie[r])&&!Be.call(i,r)?n:t}function Ji(t,n,r,i,o,a){return es(t)&&es(n)&&(a.set(n,t),Hr(t,n,e,Ji,a),a.delete(n)),t}function eo(t){return is(t)?e:t}function to(t,n,r,i,o,a){var s=1&r,l=t.length,c=n.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(n);if(d&&u)return d==n&&u==t;var h=-1,g=!0,p=2&r?new Kn:e;for(a.set(t,n),a.set(n,t);++h<l;){var f=t[h],m=n[h];if(i)var b=s?i(m,f,h,n,t,a):i(f,m,h,t,n,a);if(b!==e){if(b)continue;g=!1;break}if(p){if(!Bt(n,(function(e,t){if(!Zt(p,t)&&(f===e||o(f,e,r,i,a)))return p.push(t)}))){g=!1;break}}else if(f!==m&&!o(f,m,r,i,a)){g=!1;break}}return a.delete(t),a.delete(n),g}function no(t){return Io(To(t,e,Vo),t+"")}function ro(e){return Sr(e,_s,go)}function io(e){return Sr(e,Is,po)}var oo=Fn?function(e){return Fn.get(e)}:ll;function ao(e){for(var t=e.name+"",n=_n[t],r=Be.call(_n,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Be.call(Ln,"placeholder")?Ln:e).placeholder}function lo(){var e=Ln.iteratee||il;return e=e===il?Br:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=_s(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ko(i)]}return t}function ho(t,n){var r=function(t,n){return null==t?e:t[n]}(t,n);return Ar(r)?r:e}var go=jt?function(e){return null==e?[]:(e=De(e),Et(jt(e),(function(t){return Ke.call(e,t)})))}:fl,po=jt?function(e){for(var t=[];e;)It(t,go(e)),e=Ue(e);return t}:fl,fo=kr;function mo(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,o=!1;++r<i;){var a=zo(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Ya(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Nn(Ue(e))}function vo(e){return Ya(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Ua(n)&&yo(t,n.length):"string"==r&&t in n)&&La(n[t],e)}function wo(e,t){if(Ya(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in De(t)}function $o(e){var t=ao(e),n=Ln[t];if("function"!=typeof n||!(t in Yn.prototype))return!1;if(e===n)return!0;var r=oo(n);return!!r&&e===r[0]}(Sn&&fo(new Sn(new ArrayBuffer(1)))!=_||kn&&fo(new kn)!=w||Dn&&fo(Dn.resolve())!=S||Tn&&fo(new Tn)!=D||En&&fo(new En)!=O)&&(fo=function(t){var n=kr(t),r=n==C?t.constructor:e,i=r?Ro(r):"";if(i)switch(i){case In:return _;case Mn:return w;case An:return S;case Bn:return D;case jn:return O}return n});var Co=Me?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function ko(e){return e==e&&!es(e)}function Do(t,n){return function(r){return null!=r&&r[t]===n&&(n!==e||t in De(r))}}function To(t,n,r){return n=vn(n===e?t.length-1:n,0),function(){for(var e=arguments,i=-1,o=vn(e.length-n,0),a=we(o);++i<o;)a[i]=e[n+i];i=-1;for(var s=we(n+1);++i<n;)s[i]=e[i];return s[n]=r(a),Ct(t,this,s)}}function Eo(e,t){return t.length<2?e:Cr(e,ri(t,0,-1))}function Oo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Fo=Ao(ei),_o=gt||function(e,t){return ut.setTimeout(e,t)},Io=Ao(ti);function Mo(e,t,n){var r=t+"";return Io(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return kt(g,(function(n){var r="_."+n[0];t&n[1]&&!Ot(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(r),n)))}function Ao(t){var n=0,r=0;return function(){var i=xn(),o=16-(i-r);if(r=i,o>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(e,arguments)}}function Bo(t,n){var r=-1,i=t.length,o=i-1;for(n=n===e?i:n;++r<n;){var a=Kr(r,o),s=t[a];t[a]=t[r],t[r]=s}return t.length=n,t}var jo=function(e){var t=Aa(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,n,r,i){t.push(r?i.replace(ce,"$1"):n||e)})),t}));function zo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ro(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Yn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Oi(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gr((function(e,t){return Xa(e)?ur(e,br(t,1,Xa,!0)):[]})),No=Gr((function(t,n){var r=Go(n);return Xa(r)&&(r=e),Xa(t)?ur(t,br(n,1,Xa,!0),lo(r,2)):[]})),Ho=Gr((function(t,n){var r=Go(n);return Xa(r)&&(r=e),Xa(t)?ur(t,br(n,1,Xa,!0),e,r):[]}));function Wo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Rt(e,lo(t,3),i)}function Yo(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return r!==e&&(o=ps(r),o=r<0?vn(i+o,0):yn(o,i-1)),Rt(t,lo(n,3),o,!0)}function Vo(e){return null!=e&&e.length?br(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Xo=Gr((function(e){var t=_t(e,bi);return t.length&&t[0]===e[0]?Or(t):[]})),Ko=Gr((function(t){var n=Go(t),r=_t(t,bi);return n===Go(r)?n=e:r.pop(),r.length&&r[0]===t[0]?Or(r,lo(n,2)):[]})),qo=Gr((function(t){var n=Go(t),r=_t(t,bi);return(n="function"==typeof n?n:e)&&r.pop(),r.length&&r[0]===t[0]?Or(r,e,n):[]}));function Go(t){var n=null==t?0:t.length;return n?t[n-1]:e}var Zo=Gr(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Jo=no((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Xr(e,_t(t,(function(e){return yo(e,n)?+e:e})).sort(Di)),r}));function ea(e){return null==e?e:Cn.call(e)}var ta=Gr((function(e){return di(br(e,1,Xa,!0))})),na=Gr((function(t){var n=Go(t);return Xa(n)&&(n=e),di(br(t,1,Xa,!0),lo(n,2))})),ra=Gr((function(t){var n=Go(t);return n="function"==typeof n?n:e,di(br(t,1,Xa,!0),e,n)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Xa(e))return t=vn(e.length,t),!0})),Xt(t,(function(t){return _t(e,Wt(t))}))}function oa(t,n){if(!t||!t.length)return[];var r=ia(t);return null==n?r:_t(r,(function(t){return Ct(n,e,t)}))}var aa=Gr((function(e,t){return Xa(e)?ur(e,t):[]})),sa=Gr((function(e){return fi(Et(e,Xa))})),la=Gr((function(t){var n=Go(t);return Xa(n)&&(n=e),fi(Et(t,Xa),lo(n,2))})),ca=Gr((function(t){var n=Go(t);return n="function"==typeof n?n:e,fi(Et(t,Xa),e,n)})),da=Gr(ia),ua=Gr((function(t){var n=t.length,r=n>1?t[n-1]:e;return r="function"==typeof r?(t.pop(),r):e,oa(t,r)}));function ha(e){var t=Ln(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var pa=no((function(t){var n=t.length,r=n?t[0]:0,i=this.__wrapped__,o=function(e){return ar(e,t)};return!(n>1||this.__actions__.length)&&i instanceof Yn&&yo(r)?((i=i.slice(r,+r+(n?1:0))).__actions__.push({func:ga,args:[o],thisArg:e}),new Wn(i,this.__chain__).thru((function(t){return n&&!t.length&&t.push(e),t}))):this.thru(o)})),fa=_i((function(e,t,n){Be.call(e,n)?++e[n]:or(e,n,1)})),ma=Ri(Wo),ba=Ri(Yo);function va(e,t){return(Ya(e)?kt:hr)(e,lo(t,3))}function ya(e,t){return(Ya(e)?Dt:gr)(e,lo(t,3))}var xa=_i((function(e,t,n){Be.call(e,n)?e[n].push(t):or(e,n,[t])})),wa=Gr((function(e,t,n){var r=-1,i="function"==typeof t,o=Ua(e)?we(e.length):[];return hr(e,(function(e){o[++r]=i?Ct(t,e,n):Fr(e,t,n)})),o})),$a=_i((function(e,t,n){or(e,n,t)}));function Ca(e,t){return(Ya(e)?_t:Pr)(e,lo(t,3))}var Sa=_i((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),ka=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xo(e,t[0],t[1])?t=[]:n>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Yr(e,br(t,1),[])})),Da=ht||function(){return ut.Date.now()};function Ta(t,n,r){return n=r?e:n,n=t&&null==n?t.length:n,Zi(t,s,e,e,e,e,n)}function Ea(n,r){var i;if("function"!=typeof r)throw new Oe(t);return n=ps(n),function(){return--n>0&&(i=r.apply(this,arguments)),n<=1&&(r=e),i}}var Oa=Gr((function(e,t,n){var r=1;if(n.length){var i=sn(n,so(Oa));r|=o}return Zi(e,r,t,n,i)})),Fa=Gr((function(e,t,n){var r=3;if(n.length){var i=sn(n,so(Fa));r|=o}return Zi(t,r,e,n,i)}));function _a(n,r,i){var o,a,s,l,c,d,u=0,h=!1,g=!1,p=!0;if("function"!=typeof n)throw new Oe(t);function f(t){var r=o,i=a;return o=a=e,u=t,l=n.apply(i,r)}function m(t){var n=t-d;return d===e||n>=r||n<0||g&&t-u>=s}function b(){var e=Da();if(m(e))return v(e);c=_o(b,function(e){var t=r-(e-d);return g?yn(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&o?f(t):(o=a=e,l)}function y(){var t=Da(),n=m(t);if(o=arguments,a=this,d=t,n){if(c===e)return function(e){return u=e,c=_o(b,r),h?f(e):l}(d);if(g)return $i(c),c=_o(b,r),f(d)}return c===e&&(c=_o(b,r)),l}return r=ms(r)||0,es(i)&&(h=!!i.leading,s=(g="maxWait"in i)?vn(ms(i.maxWait)||0,r):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==e&&$i(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Da())},y}var Ia=Gr((function(e,t){return dr(e,1,t)})),Ma=Gr((function(e,t,n){return dr(e,ms(t)||0,n)}));function Aa(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new Oe(t);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||Xn),r}function Ba(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Xn;var ja=xi((function(e,t){var n=(t=1==t.length&&Ya(t[0])?_t(t[0],qt(lo())):_t(br(t,1),qt(lo()))).length;return Gr((function(r){for(var i=-1,o=yn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return Ct(e,this,r)}))})),za=Gr((function(t,n){var r=sn(n,so(za));return Zi(t,o,e,n,r)})),Ra=Gr((function(t,n){var r=sn(n,so(Ra));return Zi(t,a,e,n,r)})),Pa=no((function(t,n){return Zi(t,l,e,e,e,n)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(Dr),Ha=Ui((function(e,t){return e>=t})),Wa=_r(function(){return arguments}())?_r:function(e){return ts(e)&&Be.call(e,"callee")&&!Ke.call(e,"callee")},Ya=we.isArray,Va=bt?qt(bt):function(e){return ts(e)&&kr(e)==F};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Xa(e){return ts(e)&&Ua(e)}var Ka=Yt||ml,qa=vt?qt(vt):function(e){return ts(e)&&kr(e)==b};function Ga(e){if(!ts(e))return!1;var t=kr(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kr(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=yt?qt(yt):function(e){return ts(e)&&fo(e)==w};function rs(e){return"number"==typeof e||ts(e)&&kr(e)==$}function is(e){if(!ts(e)||kr(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var n=Be.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ae.call(n)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&kr(e)==k},as=wt?qt(wt):function(e){return ts(e)&&fo(e)==D};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&kr(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&kr(e)==E}var cs=$t?qt($t):function(e){return ts(e)&&Ja(e.length)&&!!it[kr(e)]},ds=Ui(Rr),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?un(e):Oi(e);if(et&&e[et])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[et]());var t=fo(e);return(t==w?on:t==D?ln:Ls)(e)}function gs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=gs(e),n=t%1;return t==t?n?t-n:t:0}function fs(e){return e?sr(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Kt(e);var n=ge.test(e);return n||fe.test(e)?lt(e.slice(2),n?2:8):he.test(e)?u:+e}function bs(e){return Fi(e,Is(e))}function vs(e){return null==e?"":ci(e)}var ys=Ii((function(e,t){if(So(t)||Ua(t))Fi(t,_s(t),e);else for(var n in t)Be.call(t,n)&&tr(e,n,t[n])})),xs=Ii((function(e,t){Fi(t,Is(t),e)})),ws=Ii((function(e,t,n,r){Fi(t,Is(t),e,r)})),$s=Ii((function(e,t,n,r){Fi(t,_s(t),e,r)})),Cs=no(ar),Ss=Gr((function(t,n){t=De(t);var r=-1,i=n.length,o=i>2?n[2]:e;for(o&&xo(n[0],n[1],o)&&(i=1);++r<i;)for(var a=n[r],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Ie[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gr((function(t){return t.push(e,Ji),Ct(As,e,t)}));function Ds(t,n,r){var i=null==t?e:Cr(t,n);return i===e?r:i}function Ts(e,t){return null!=e&&mo(e,t,Er)}var Es=Ni((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=n}),el(rl)),Os=Ni((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(n):e[t]=[n]}),lo),Fs=Gr(Fr);function _s(e){return Ua(e)?Gn(e):jr(e)}function Is(e){return Ua(e)?Gn(e,!0):zr(e)}var Ms=Ii((function(e,t,n){Hr(e,t,n)})),As=Ii((function(e,t,n,r){Hr(e,t,n,r)})),Bs=no((function(e,t){var n={};if(null==e)return n;var r=!1;t=_t(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),Fi(e,io(e),n),r&&(n=lr(n,7,eo));for(var i=t.length;i--;)ui(n,t[i]);return n})),js=no((function(e,t){return null==e?{}:function(e,t){return Vr(e,t,(function(t,n){return Ts(e,n)}))}(e,t)}));function zs(e,t){if(null==e)return{};var n=_t(io(e),(function(e){return[e]}));return t=lo(t),Vr(e,n,(function(e,n){return t(e,n[0])}))}var Rs=Gi(_s),Ps=Gi(Is);function Ls(e){return null==e?[]:Gt(e,_s(e))}var Ns=ji((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,en).replace(Ze,"")}var Ys=ji((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Vs=ji((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Bi("toLowerCase"),Xs=ji((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Ks=ji((function(e,t,n){return e+(n?" ":"")+Gs(t)})),qs=ji((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Bi("toUpperCase");function Zs(t,n,r){return t=vs(t),(n=r?e:n)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(n)||[]}var Qs=Gr((function(t,n){try{return Ct(t,e,n)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=no((function(e,t){return kt(t,(function(t){t=zo(t),or(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),nl=Pi(!0);function rl(e){return e}function il(e){return Br("function"==typeof e?e:lr(e,1))}var ol=Gr((function(e,t){return function(n){return Fr(n,e,t)}})),al=Gr((function(e,t){return function(n){return Fr(e,n,t)}}));function sl(e,t,n){var r=_s(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,_s(t)));var o=!(es(n)&&"chain"in n&&!n.chain),a=Za(e);return kt(i,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=Oi(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,It([this.value()],arguments))})})),e}function ll(){}var cl=Wi(_t),dl=Wi(Tt),ul=Wi(Bt);function hl(e){return wo(e)?Wt(zo(e)):function(e){return function(t){return Cr(t,e)}}(e)}var gl=Vi(),pl=Vi(!0);function fl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Ki("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Ki("floor"),$l=Hi((function(e,t){return e*t}),1),Cl=Ki("round"),Sl=Hi((function(e,t){return e-t}),0);return Ln.after=function(e,n){if("function"!=typeof n)throw new Oe(t);return e=ps(e),function(){if(--e<1)return n.apply(this,arguments)}},Ln.ary=Ta,Ln.assign=ys,Ln.assignIn=xs,Ln.assignInWith=ws,Ln.assignWith=$s,Ln.at=Cs,Ln.before=Ea,Ln.bind=Oa,Ln.bindAll=Js,Ln.bindKey=Fa,Ln.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Ln.chain=ha,Ln.chunk=function(t,n,r){n=(r?xo(t,n,r):n===e)?1:vn(ps(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var o=0,a=0,s=we(ft(i/n));o<i;)s[a++]=ri(t,o,o+=n);return s},Ln.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},Ln.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return It(Ya(n)?Oi(n):[n],br(t,1))},Ln.cond=function(e){var n=null==e?0:e.length,r=lo();return e=n?_t(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[r(e[0]),e[1]]})):[],Gr((function(t){for(var r=-1;++r<n;){var i=e[r];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Ln.conforms=function(e){return function(e){var t=_s(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Ln.constant=el,Ln.countBy=fa,Ln.create=function(e,t){var n=Nn(e);return null==t?n:ir(n,t)},Ln.curry=function t(n,r,i){var o=Zi(n,8,e,e,e,e,e,r=i?e:r);return o.placeholder=t.placeholder,o},Ln.curryRight=function t(n,r,o){var a=Zi(n,i,e,e,e,e,e,r=o?e:r);return a.placeholder=t.placeholder,a},Ln.debounce=_a,Ln.defaults=Ss,Ln.defaultsDeep=ks,Ln.defer=Ia,Ln.delay=Ma,Ln.difference=Lo,Ln.differenceBy=No,Ln.differenceWith=Ho,Ln.drop=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=r||n===e?1:ps(n))<0?0:n,i):[]},Ln.dropRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,0,(n=i-(n=r||n===e?1:ps(n)))<0?0:n):[]},Ln.dropRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0,!0):[]},Ln.dropWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0):[]},Ln.fill=function(t,n,r,i){var o=null==t?0:t.length;return o?(r&&"number"!=typeof r&&xo(t,n,r)&&(r=0,i=o),function(t,n,r,i){var o=t.length;for((r=ps(r))<0&&(r=-r>o?0:o+r),(i=i===e||i>o?o:ps(i))<0&&(i+=o),i=r>i?0:fs(i);r<i;)t[r++]=n;return t}(t,n,r,i)):[]},Ln.filter=function(e,t){return(Ya(e)?Et:mr)(e,lo(t,3))},Ln.flatMap=function(e,t){return br(Ca(e,t),1)},Ln.flatMapDeep=function(e,t){return br(Ca(e,t),c)},Ln.flatMapDepth=function(t,n,r){return r=r===e?1:ps(r),br(Ca(t,n),r)},Ln.flatten=Vo,Ln.flattenDeep=function(e){return null!=e&&e.length?br(e,c):[]},Ln.flattenDepth=function(t,n){return null!=t&&t.length?br(t,n=n===e?1:ps(n)):[]},Ln.flip=function(e){return Zi(e,512)},Ln.flow=tl,Ln.flowRight=nl,Ln.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Ln.functions=function(e){return null==e?[]:$r(e,_s(e))},Ln.functionsIn=function(e){return null==e?[]:$r(e,Is(e))},Ln.groupBy=xa,Ln.initial=function(e){return null!=e&&e.length?ri(e,0,-1):[]},Ln.intersection=Xo,Ln.intersectionBy=Ko,Ln.intersectionWith=qo,Ln.invert=Es,Ln.invertBy=Os,Ln.invokeMap=wa,Ln.iteratee=il,Ln.keyBy=$a,Ln.keys=_s,Ln.keysIn=Is,Ln.map=Ca,Ln.mapKeys=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,t(e,r,i),e)})),n},Ln.mapValues=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,r,t(e,r,i))})),n},Ln.matches=function(e){return Lr(lr(e,1))},Ln.matchesProperty=function(e,t){return Nr(e,lr(t,1))},Ln.memoize=Aa,Ln.merge=Ms,Ln.mergeWith=As,Ln.method=ol,Ln.methodOf=al,Ln.mixin=sl,Ln.negate=Ba,Ln.nthArg=function(e){return e=ps(e),Gr((function(t){return Wr(t,e)}))},Ln.omit=Bs,Ln.omitBy=function(e,t){return zs(e,Ba(lo(t)))},Ln.once=function(e){return Ea(2,e)},Ln.orderBy=function(t,n,r,i){return null==t?[]:(Ya(n)||(n=null==n?[]:[n]),Ya(r=i?e:r)||(r=null==r?[]:[r]),Yr(t,n,r))},Ln.over=cl,Ln.overArgs=ja,Ln.overEvery=dl,Ln.overSome=ul,Ln.partial=za,Ln.partialRight=Ra,Ln.partition=Sa,Ln.pick=js,Ln.pickBy=zs,Ln.property=hl,Ln.propertyOf=function(t){return function(n){return null==t?e:Cr(t,n)}},Ln.pull=Zo,Ln.pullAll=Qo,Ln.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,lo(n,2)):e},Ln.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?Ur(t,n,e,r):t},Ln.pullAt=Jo,Ln.range=gl,Ln.rangeRight=pl,Ln.rearg=Pa,Ln.reject=function(e,t){return(Ya(e)?Et:mr)(e,Ba(lo(t,3)))},Ln.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=lo(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return Xr(e,i),n},Ln.rest=function(n,r){if("function"!=typeof n)throw new Oe(t);return Gr(n,r=r===e?r:ps(r))},Ln.reverse=ea,Ln.sampleSize=function(t,n,r){return n=(r?xo(t,n,r):n===e)?1:ps(n),(Ya(t)?Qn:Qr)(t,n)},Ln.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Ln.setWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:Jr(t,n,r,i)},Ln.shuffle=function(e){return(Ya(e)?Jn:ni)(e)},Ln.slice=function(t,n,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&xo(t,n,r)?(n=0,r=i):(n=null==n?0:ps(n),r=r===e?i:ps(r)),ri(t,n,r)):[]},Ln.sortBy=ka,Ln.sortedUniq=function(e){return e&&e.length?si(e):[]},Ln.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Ln.split=function(t,n,r){return r&&"number"!=typeof r&&xo(t,n,r)&&(n=r=e),(r=r===e?h:r>>>0)?(t=vs(t))&&("string"==typeof n||null!=n&&!os(n))&&!(n=ci(n))&&rn(t)?wi(un(t),0,r):t.split(n,r):[]},Ln.spread=function(e,n){if("function"!=typeof e)throw new Oe(t);return n=null==n?0:vn(ps(n),0),Gr((function(t){var r=t[n],i=wi(t,0,n);return r&&It(i,r),Ct(e,this,i)}))},Ln.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Ln.take=function(t,n,r){return t&&t.length?ri(t,0,(n=r||n===e?1:ps(n))<0?0:n):[]},Ln.takeRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=i-(n=r||n===e?1:ps(n)))<0?0:n,i):[]},Ln.takeRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!1,!0):[]},Ln.takeWhile=function(e,t){return e&&e.length?gi(e,lo(t,3)):[]},Ln.tap=function(e,t){return t(e),e},Ln.throttle=function(e,n,r){var i=!0,o=!0;if("function"!=typeof e)throw new Oe(t);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),_a(e,n,{leading:i,maxWait:n,trailing:o})},Ln.thru=ga,Ln.toArray=hs,Ln.toPairs=Rs,Ln.toPairsIn=Ps,Ln.toPath=function(e){return Ya(e)?_t(e,zo):ls(e)?[e]:Oi(jo(vs(e)))},Ln.toPlainObject=bs,Ln.transform=function(e,t,n){var r=Ya(e),i=r||Ka(e)||cs(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:es(e)&&Za(o)?Nn(Ue(e)):{}}return(i?kt:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Ln.unary=function(e){return Ta(e,1)},Ln.union=ta,Ln.unionBy=na,Ln.unionWith=ra,Ln.uniq=function(e){return e&&e.length?di(e):[]},Ln.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Ln.uniqWith=function(t,n){return n="function"==typeof n?n:e,t&&t.length?di(t,e,n):[]},Ln.unset=function(e,t){return null==e||ui(e,t)},Ln.unzip=ia,Ln.unzipWith=oa,Ln.update=function(e,t,n){return null==e?e:hi(e,t,vi(n))},Ln.updateWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:hi(t,n,vi(r),i)},Ln.values=Ls,Ln.valuesIn=function(e){return null==e?[]:Gt(e,Is(e))},Ln.without=aa,Ln.words=Zs,Ln.wrap=function(e,t){return za(vi(t),e)},Ln.xor=sa,Ln.xorBy=la,Ln.xorWith=ca,Ln.zip=da,Ln.zipObject=function(e,t){return mi(e||[],t||[],tr)},Ln.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jr)},Ln.zipWith=ua,Ln.entries=Rs,Ln.entriesIn=Ps,Ln.extend=xs,Ln.extendWith=ws,sl(Ln,Ln),Ln.add=vl,Ln.attempt=Qs,Ln.camelCase=Ns,Ln.capitalize=Hs,Ln.ceil=yl,Ln.clamp=function(t,n,r){return r===e&&(r=n,n=e),r!==e&&(r=(r=ms(r))==r?r:0),n!==e&&(n=(n=ms(n))==n?n:0),sr(ms(t),n,r)},Ln.clone=function(e){return lr(e,4)},Ln.cloneDeep=function(e){return lr(e,5)},Ln.cloneDeepWith=function(t,n){return lr(t,5,n="function"==typeof n?n:e)},Ln.cloneWith=function(t,n){return lr(t,4,n="function"==typeof n?n:e)},Ln.conformsTo=function(e,t){return null==t||cr(e,t,_s(t))},Ln.deburr=Ws,Ln.defaultTo=function(e,t){return null==e||e!=e?t:e},Ln.divide=xl,Ln.endsWith=function(t,n,r){t=vs(t),n=ci(n);var i=t.length,o=r=r===e?i:sr(ps(r),0,i);return(r-=n.length)>=0&&t.slice(r,o)==n},Ln.eq=La,Ln.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(V,tn):e},Ln.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Ln.every=function(t,n,r){var i=Ya(t)?Tt:pr;return r&&xo(t,n,r)&&(n=e),i(t,lo(n,3))},Ln.find=ma,Ln.findIndex=Wo,Ln.findKey=function(e,t){return zt(e,lo(t,3),xr)},Ln.findLast=ba,Ln.findLastIndex=Yo,Ln.findLastKey=function(e,t){return zt(e,lo(t,3),wr)},Ln.floor=wl,Ln.forEach=va,Ln.forEachRight=ya,Ln.forIn=function(e,t){return null==e?e:vr(e,lo(t,3),Is)},Ln.forInRight=function(e,t){return null==e?e:yr(e,lo(t,3),Is)},Ln.forOwn=function(e,t){return e&&xr(e,lo(t,3))},Ln.forOwnRight=function(e,t){return e&&wr(e,lo(t,3))},Ln.get=Ds,Ln.gt=Na,Ln.gte=Ha,Ln.has=function(e,t){return null!=e&&mo(e,t,Tr)},Ln.hasIn=Ts,Ln.head=Uo,Ln.identity=rl,Ln.includes=function(e,t,n,r){e=Ua(e)?e:Ls(e),n=n&&!r?ps(n):0;var i=e.length;return n<0&&(n=vn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Pt(e,t,n)>-1},Ln.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Pt(e,t,i)},Ln.inRange=function(t,n,r){return n=gs(n),r===e?(r=n,n=0):r=gs(r),function(e,t,n){return e>=yn(t,n)&&e<vn(t,n)}(t=ms(t),n,r)},Ln.invoke=Fs,Ln.isArguments=Wa,Ln.isArray=Ya,Ln.isArrayBuffer=Va,Ln.isArrayLike=Ua,Ln.isArrayLikeObject=Xa,Ln.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kr(e)==m},Ln.isBuffer=Ka,Ln.isDate=qa,Ln.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Ln.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Ka(e)||cs(e)||Wa(e)))return!e.length;var t=fo(e);if(t==w||t==D)return!e.size;if(So(e))return!jr(e).length;for(var n in e)if(Be.call(e,n))return!1;return!0},Ln.isEqual=function(e,t){return Ir(e,t)},Ln.isEqualWith=function(t,n,r){var i=(r="function"==typeof r?r:e)?r(t,n):e;return i===e?Ir(t,n,e,r):!!i},Ln.isError=Ga,Ln.isFinite=function(e){return"number"==typeof e&&fn(e)},Ln.isFunction=Za,Ln.isInteger=Qa,Ln.isLength=Ja,Ln.isMap=ns,Ln.isMatch=function(e,t){return e===t||Mr(e,t,uo(t))},Ln.isMatchWith=function(t,n,r){return r="function"==typeof r?r:e,Mr(t,n,uo(n),r)},Ln.isNaN=function(e){return rs(e)&&e!=+e},Ln.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ar(e)},Ln.isNil=function(e){return null==e},Ln.isNull=function(e){return null===e},Ln.isNumber=rs,Ln.isObject=es,Ln.isObjectLike=ts,Ln.isPlainObject=is,Ln.isRegExp=os,Ln.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Ln.isSet=as,Ln.isString=ss,Ln.isSymbol=ls,Ln.isTypedArray=cs,Ln.isUndefined=function(t){return t===e},Ln.isWeakMap=function(e){return ts(e)&&fo(e)==O},Ln.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kr(e)},Ln.join=function(e,t){return null==e?"":mn.call(e,t)},Ln.kebabCase=Ys,Ln.last=Go,Ln.lastIndexOf=function(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var o=i;return r!==e&&(o=(o=ps(r))<0?vn(i+o,0):yn(o,i-1)),n==n?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(t,n,o):Rt(t,Nt,o,!0)},Ln.lowerCase=Vs,Ln.lowerFirst=Us,Ln.lt=ds,Ln.lte=us,Ln.max=function(t){return t&&t.length?fr(t,rl,Dr):e},Ln.maxBy=function(t,n){return t&&t.length?fr(t,lo(n,2),Dr):e},Ln.mean=function(e){return Ht(e,rl)},Ln.meanBy=function(e,t){return Ht(e,lo(t,2))},Ln.min=function(t){return t&&t.length?fr(t,rl,Rr):e},Ln.minBy=function(t,n){return t&&t.length?fr(t,lo(n,2),Rr):e},Ln.stubArray=fl,Ln.stubFalse=ml,Ln.stubObject=function(){return{}},Ln.stubString=function(){return""},Ln.stubTrue=function(){return!0},Ln.multiply=$l,Ln.nth=function(t,n){return t&&t.length?Wr(t,ps(n)):e},Ln.noConflict=function(){return ut._===this&&(ut._=Le),this},Ln.noop=ll,Ln.now=Da,Ln.pad=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Yi(mt(i),n)+e+Yi(ft(i),n)},Ln.padEnd=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;return t&&r<t?e+Yi(t-r,n):e},Ln.padStart=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;return t&&r<t?Yi(t-r,n)+e:e},Ln.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(vs(e).replace(ne,""),t||0)},Ln.random=function(t,n,r){if(r&&"boolean"!=typeof r&&xo(t,n,r)&&(n=r=e),r===e&&("boolean"==typeof n?(r=n,n=e):"boolean"==typeof t&&(r=t,t=e)),t===e&&n===e?(t=0,n=1):(t=gs(t),n===e?(n=t,t=0):n=gs(n)),t>n){var i=t;t=n,n=i}if(r||t%1||n%1){var o=$n();return yn(t+o*(n-t+st("1e-"+((o+"").length-1))),n)}return Kr(t,n)},Ln.reduce=function(e,t,n){var r=Ya(e)?Mt:Vt,i=arguments.length<3;return r(e,lo(t,4),n,i,hr)},Ln.reduceRight=function(e,t,n){var r=Ya(e)?At:Vt,i=arguments.length<3;return r(e,lo(t,4),n,i,gr)},Ln.repeat=function(t,n,r){return n=(r?xo(t,n,r):n===e)?1:ps(n),qr(vs(t),n)},Ln.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Ln.result=function(t,n,r){var i=-1,o=(n=yi(n,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[zo(n[i])];a===e&&(i=o,a=r),t=Za(a)?a.call(t):a}return t},Ln.round=Cl,Ln.runInContext=re,Ln.sample=function(e){return(Ya(e)?Zn:Zr)(e)},Ln.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dn(e):e.length;var t=fo(e);return t==w||t==D?e.size:jr(e).length},Ln.snakeCase=Xs,Ln.some=function(t,n,r){var i=Ya(t)?Bt:ii;return r&&xo(t,n,r)&&(n=e),i(t,lo(n,3))},Ln.sortedIndex=function(e,t){return oi(e,t)},Ln.sortedIndexBy=function(e,t,n){return ai(e,t,lo(n,2))},Ln.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=oi(e,t);if(r<n&&La(e[r],t))return r}return-1},Ln.sortedLastIndex=function(e,t){return oi(e,t,!0)},Ln.sortedLastIndexBy=function(e,t,n){return ai(e,t,lo(n,2),!0)},Ln.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=oi(e,t,!0)-1;if(La(e[n],t))return n}return-1},Ln.startCase=Ks,Ln.startsWith=function(e,t,n){return e=vs(e),n=null==n?0:sr(ps(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Ln.subtract=Sl,Ln.sum=function(e){return e&&e.length?Ut(e,rl):0},Ln.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Ln.template=function(t,n,r){var i=Ln.templateSettings;r&&xo(t,n,r)&&(n=e),t=vs(t),n=ws({},n,i,Qi);var o,a,s=ws({},n.imports,i.imports,Qi),l=_s(s),c=Gt(s,l),d=0,u=n.interpolate||ve,h="__p += '",g=Te((n.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(n.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";t.replace(g,(function(e,n,r,i,s,l){return r||(r=i),h+=t.slice(d,l).replace(ye,nn),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var f=Be.call(n,"variable")&&n.variable;if(f){if(le.test(f))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Ln.times=function(e,t){if((e=ps(e))<1||e>d)return[];var n=h,r=yn(e,h);t=lo(t),e-=h;for(var i=Xt(r,t);++n<e;)t(n);return i},Ln.toFinite=gs,Ln.toInteger=ps,Ln.toLength=fs,Ln.toLower=function(e){return vs(e).toLowerCase()},Ln.toNumber=ms,Ln.toSafeInteger=function(e){return e?sr(ps(e),-9007199254740991,d):0===e?e:0},Ln.toString=vs,Ln.toUpper=function(e){return vs(e).toUpperCase()},Ln.trim=function(t,n,r){if((t=vs(t))&&(r||n===e))return Kt(t);if(!t||!(n=ci(n)))return t;var i=un(t),o=un(n);return wi(i,Qt(i,o),Jt(i,o)+1).join("")},Ln.trimEnd=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.slice(0,hn(t)+1);if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,0,Jt(i,un(n))+1).join("")},Ln.trimStart=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.replace(ne,"");if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,Qt(i,un(n))).join("")},Ln.truncate=function(t,n){var r=30,i="...";if(es(n)){var o="separator"in n?n.separator:o;r="length"in n?ps(n.length):r,i="omission"in n?ci(n.omission):i}var a=(t=vs(t)).length;if(rn(t)){var s=un(t);a=s.length}if(r>=a)return t;var l=r-dn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=Te(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var g=c.lastIndexOf(o);g>-1&&(c=c.slice(0,g))}return c+i},Ln.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,gn):e},Ln.uniqueId=function(e){var t=++je;return vs(e)+t},Ln.upperCase=qs,Ln.upperFirst=Gs,Ln.each=va,Ln.eachRight=ya,Ln.first=Uo,sl(Ln,(bl={},xr(Ln,(function(e,t){Be.call(Ln.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Ln.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Ln[e].placeholder=Ln})),kt(["drop","take"],(function(t,n){Yn.prototype[t]=function(r){r=r===e?1:vn(ps(r),0);var i=this.__filtered__&&!n?new Yn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,h),type:t+(i.__dir__<0?"Right":"")}),i},Yn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Yn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),kt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Yn.prototype[e]=function(){return this[n](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Yn.prototype[e]=function(){return this.__filtered__?new Yn(this):this[n](1)}})),Yn.prototype.compact=function(){return this.filter(rl)},Yn.prototype.find=function(e){return this.filter(e).head()},Yn.prototype.findLast=function(e){return this.reverse().find(e)},Yn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Yn(this):this.map((function(n){return Fr(n,e,t)}))})),Yn.prototype.reject=function(e){return this.filter(Ba(lo(e)))},Yn.prototype.slice=function(t,n){t=ps(t);var r=this;return r.__filtered__&&(t>0||n<0)?new Yn(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),n!==e&&(r=(n=ps(n))<0?r.dropRight(-n):r.take(n-t)),r)},Yn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Yn.prototype.toArray=function(){return this.take(h)},xr(Yn.prototype,(function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),o=Ln[i?"take"+("last"==n?"Right":""):n],a=i||/^find/.test(n);o&&(Ln.prototype[n]=function(){var n=this.__wrapped__,s=i?[1]:arguments,l=n instanceof Yn,c=s[0],d=l||Ya(n),u=function(e){var t=o.apply(Ln,It([e],s));return i&&h?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,g=!!this.__actions__.length,p=a&&!h,f=l&&!g;if(!a&&d){n=f?n:new Yn(this);var m=t.apply(n,s);return m.__actions__.push({func:ga,args:[u],thisArg:e}),new Wn(m,h)}return p&&f?t.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Fe[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Ln.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Ya(i)?i:[],e)}return this[n]((function(n){return t.apply(Ya(n)?n:[],e)}))}})),xr(Yn.prototype,(function(e,t){var n=Ln[t];if(n){var r=n.name+"";Be.call(_n,r)||(_n[r]=[]),_n[r].push({name:t,func:n})}})),_n[Li(e,2).name]=[{name:"wrapper",func:e}],Yn.prototype.clone=function(){var e=new Yn(this.__wrapped__);return e.__actions__=Oi(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oi(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oi(this.__views__),e},Yn.prototype.reverse=function(){if(this.__filtered__){var e=new Yn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Yn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ya(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=yn(t,e+a);break;case"takeRight":e=vn(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=r?s:a-1,d=this.__iteratees__,u=d.length,h=0,g=yn(l,this.__takeCount__);if(!n||!r&&i==l&&g==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&h<g;){for(var f=-1,m=e[c+=t];++f<u;){var b=d[f],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Ln.prototype.at=pa,Ln.prototype.chain=function(){return ha(this)},Ln.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Ln.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Ln.prototype.plant=function(t){for(var n,r=this;r instanceof Hn;){var i=Po(r);i.__index__=0,i.__values__=e,n?o.__wrapped__=i:n=i;var o=i;r=r.__wrapped__}return o.__wrapped__=t,n},Ln.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Yn){var n=t;return this.__actions__.length&&(n=new Yn(this)),(n=n.reverse()).__actions__.push({func:ga,args:[ea],thisArg:e}),new Wn(n,this.__chain__)}return this.thru(ea)},Ln.prototype.toJSON=Ln.prototype.valueOf=Ln.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Ln.prototype.first=Ln.prototype.head,et&&(Ln.prototype[et]=function(){return this}),Ln}();gt?((gt.exports=pn)._=pn,ht._=pn):ut._=pn}.call(Vo);var VD=YD.exports;const UD=i.forwardRef(((r,i)=>{var{value:o,readOnly:s,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g,iconMask:p=e(He,{}),iconUnmask:f=e(Ne,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:D,onBlur:T,onTryAgain:E}=r,O=ut(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const F=s&&VD.isEmpty(o),[_,I]=a(!x),[M,A]=a(o||"");u((()=>{A(o||"")}),[o]);const B=e=>{L(!1),D&&D(e)},j=e=>{L(!0),T&&T(e)},z=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,k&&k(e)},R=()=>{s&&E&&E()},P=()=>{L(!_)},L=e=>{I(e),e?C&&C():S&&S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(F)return e(n,{});const t=N();return e(MD,{"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:_?f:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(s)switch($){case"fail":return t(ND,{onClick:R,"data-testid":"try-again-button",children:[t(RD,{children:[e(PD,{}),e(LD,{children:"Error"})]}),e(zD,{children:"Try again?"})]});case"loading":return t(AD,{children:[e(jD,{}),e(BD,{children:"Retrieving..."})]})}return e(ID,Object.assign({ref:i,"data-testid":`${l||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:s?void 0:B,onBlur:s?void 0:j,onClick:s?P:void 0,onChange:z,value:F?"-":_&&!x?ku.maskValue(M,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g}):M,readOnly:s,error:y,$isDisabled:N()},O))})()})})),XD=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Pw,{id:o,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(UD,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},h))})})),KD=_.div`
    font-weight: ${e=>e.$bold?uc.Spec["weight-semibold"]:uc.Spec["weight-regular"]};

    ${e=>e.$disabled?I`
                color: ${dc["text-disabled"]};
            `:e.$selected?I`
                color: ${dc["text-selected"]};
            `:I`
                color: ${dc.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tc(e.$maxLines||2)}
    overflow-wrap: break-word;
`,qD=_.div`
    color: ${dc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tc(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?I`
                    ${uc["body-md-semibold"]}
                `:I`
                    ${uc["body-baseline-regular"]}
                `}
`,GD=_.span`
    font-weight: ${uc.Spec["weight-semibold"]};
`,ZD=_.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return I`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return I`
                    ${KD} {
                        display: inline;
                    }

                    ${qD} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,QD=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,JD=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,eT=({bold:r,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:h="default"})=>{const g=A(),f="small"===h?uc.Spec["body-size-md"]({theme:g}):uc.Spec["body-size-baseline"]({theme:g}),b=uc.Spec["font-family"]({theme:g}),{ref:v,width:y}=un(),x=p((e=>{if("inline"!==i||!y)return!1;return ku.getTextWidth(e,`${f} '${b}'`)>y*s-50}),[y,i,f,b,s]),w=m((()=>x(o)),[x,o]),$=m((()=>d&&x(d)),[x,d]),C=r=>{if(!a)return r;const i=a.toLowerCase().trim(),s=r.toLowerCase().indexOf(i),l=s+a.length;return-1===s?r:t(n,{children:[o.slice(0,s),e(GD,{$variant:h,children:o.slice(s,l)}),o.slice(l)]})},S=r=>t(n,{children:[e(QD,{$maxLines:s,"aria-hidden":!0,children:C(r)}),e(JD,{$maxLines:s,"aria-hidden":!0,children:C(r)})]});return t(ZD,{ref:v,$labelDisplayType:w||$?"next-line":i,$variant:h,children:[e(KD,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&w?S(o):C(o)}),d&&e(qD,{"aria-label":d,$maxLines:s,$truncateType:u,$labelDisplayType:i,children:"middle"===u&&$?S(d):d})]})};function tT(e){return()=>e}function nT(e){e()}function rT(e,t){return n=>e(t(n))}function iT(e,t){return()=>e(t)}function oT(e,t){return n=>e(t,n)}function aT(e){return void 0!==e}function sT(){}function lT(e,t){return t(e),e}function cT(e,t){return t(e)}function dT(...e){return e}function uT(e,t){return e(1,t)}function hT(e,t){e(0,t)}function gT(e){e(2)}function pT(e){return e(4)}function fT(e,t){return uT(e,oT(t,0))}function mT(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function bT(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function vT(e,t){return e===t}function yT(e=vT){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function xT(e){return t=>n=>{e(n)&&t(n)}}function wT(e){return t=>rT(t,e)}function $T(e){return t=>()=>{t(e)}}function CT(e,...t){const n=function(...e){return t=>e.reduceRight(cT,t)}(...t);return(t,r)=>{switch(t){case 2:return void gT(e);case 1:return uT(e,n(r))}}}function ST(e,t){return n=>r=>{n(t=e(t,r))}}function kT(e){return t=>n=>{e>0?e--:t(n)}}function DT(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function TT(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);uT(e,(e=>{const s=n;n|=a,t[o]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};n===i?a():r=a}}function ET(e){let t=e;const n=FT();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function OT(e,t){return lT(ET(t),(t=>fT(e,t)))}function FT(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function _T(e){return lT(FT(),(t=>fT(e,t)))}function IT(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:MT(),singleton:n}}const MT=()=>Symbol();function AT(...e){const t=FT(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);uT(e,(e=>{n[o]=e,r|=a,r===i&&hT(t,n)}))})),function(e,o){switch(e){case 2:return void gT(t);case 1:return r===i&&o(n),uT(t,o)}}}function BT(e,t=vT){return CT(e,yT(t))}function jT(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(nT)}}(...e.map((e=>uT(e,n))))}}}var zT=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(zT||{});const RT={0:"debug",3:"error",1:"log",2:"warn"},PT=IT((()=>{const e=ET(3);return{log:ET(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:pT(e))&&console[RT[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function LT(e,t,n){return NT(e,t,n).callbackRef}function NT(e,t,n){const r=i.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const a=i.useMemo((()=>new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)}))),[e]);o=e=>{e&&t?(a.observe(e),r.current=e):(r.current&&a.unobserve(r.current),r.current=null)}}return{callbackRef:o,ref:r}}function HT(e,t,n,r,o,a,s,l,c){const d=i.useCallback((n=>{const i=function(e,t,n,r){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},zT.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(n.children,t,l?"offsetWidth":"offsetHeight",o);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,g=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==a||a(l?WT("column-gap",getComputedStyle(n).columnGap,o):WT("row-gap",getComputedStyle(n).rowGap,o)),null!==i&&e(i)}),[e,t,o,a,s,r]);return NT(d,n,c)}function WT(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,zT.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function YT(e,t,n){const r=i.useRef(null),o=i.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;r.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(r.current)}),[e,t]),{callbackRef:a,ref:s}=NT(o,!0,n),l=i.useCallback((()=>{o(s.current)}),[o,s]);return i.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const VT=IT((()=>{const e=FT(),t=FT(),n=ET(0),r=FT(),i=ET(0),o=FT(),a=FT(),s=ET(0),l=ET(0),c=ET(0),d=ET(0),u=FT(),h=FT(),g=ET(!1),p=ET(!1),f=ET(!1);return fT(CT(e,wT((({scrollTop:e})=>e))),t),fT(CT(e,wT((({scrollHeight:e})=>e))),a),fT(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),UT={lvl:0};function XT(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const o=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);o.push({end:n-1,start:r,value:i}),r=n,i=s}return o.push({end:1/0,start:r,value:i}),o}function KT(e){return e===UT}function qT(e,t){if(!KT(e))return t===e.k?e.v:t<e.k?qT(e.l,t):qT(e.r,t)}function GT(e,t,n="k"){if(KT(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=GT(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return GT(e.l,t,n)}function ZT(e,t,n){return KT(e)?lE(t,n,1):t===e.k?iE(e,{k:t,v:n}):t<e.k?cE(iE(e,{l:ZT(e.l,t,n)})):cE(iE(e,{r:ZT(e.r,t,n)}))}function QT(){return UT}function JT(e,t,n){if(KT(e))return[];return function(e){return XT(e,(({k:e,v:t})=>({index:e,value:t})))}(nE(e,GT(e,t)[0],n))}function eE(e,t){if(KT(e))return UT;const{k:n,l:r,r:i}=e;if(t===n){if(KT(r))return i;if(KT(i))return r;{const[t,n]=sE(r);return rE(iE(e,{k:t,l:oE(r),v:n}))}}return rE(iE(e,t<n?{l:eE(r,t)}:{r:eE(i,t)}))}function tE(e){return KT(e)?[]:[...tE(e.l),{k:e.k,v:e.v},...tE(e.r)]}function nE(e,t,n){if(KT(e))return[];const{k:r,l:i,r:o,v:a}=e;let s=[];return r>t&&(s=s.concat(nE(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(nE(o,t,n))),s}function rE(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(aE(t))return dE(iE(e,{lvl:n-1}));if(!KT(t)&&!KT(t.r))return iE(t.r,{l:iE(t,{r:t.r.l}),lvl:n,r:iE(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(aE(e))return uE(iE(e,{lvl:n-1}));if(KT(r)||KT(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=aE(t)?r.lvl-1:r.lvl;return iE(t,{l:iE(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:uE(iE(r,{l:t.r,lvl:i}))})}}function iE(e,t){return lE(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function oE(e){return KT(e.r)?e.l:rE(iE(e,{r:oE(e.r)}))}function aE(e){return KT(e)||e.lvl>e.r.lvl}function sE(e){return KT(e.r)?[e.k,e.v]:sE(e.r)}function lE(e,t,n,r=UT,i=UT){return{k:e,l:r,lvl:n,r:i,v:t}}function cE(e){return uE(dE(e))}function dE(e){const{l:t}=e;return KT(t)||t.lvl!==e.lvl?e:iE(t,{r:iE(e,{l:t.r})})}function uE(e){const{lvl:t,r:n}=e;return KT(n)||KT(n.r)||n.lvl!==t||n.r.lvl!==t?e:iE(n,{l:iE(e,{r:n.l}),lvl:t+1})}function hE(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function gE(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const pE=IT((()=>({recalcInProgress:ET(!1)})),[],{singleton:!0});function fE(e,t,n){return e[mE(e,t,n)]}function mE(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const o=Math.floor((r+i)/2),a=n(e[o],t);if(0===a)return o;if(-1===a){if(i-r<2)return o-1;i=o-1}else{if(i===r)return o;r=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function bE(e,t){return Math.round(e.getBoundingClientRect()[t])}function vE(e){return!KT(e.groupOffsetTree)}function yE({index:e},t){return t===e?0:t<e?-1:1}function xE({offset:e},t){return t===e?0:t<e?-1:1}function wE(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:o}=fE(t,e,yE),a=e-r,s=o*a+(a-1)*n+i;return s>0?s+n:s}function $E(e,t){if(!vE(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function CE(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=$E("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function SE(e,t,n,r=0){return r>0&&(t=Math.max(t,fE(e,r,yE).offset)),XT(function(e,t,n,r){const i=mE(e,t,r),o=mE(e,n,r,i);return e.slice(i,o+1)}(e,t,n,xE),EE)}function kE(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,zT.DEBUG);const o=e.sizeTree;let a=o,s=0;if(n.length>0&&KT(o)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>ZT(ZT(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=KT(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:o}=r;if(n=Math.min(n,o),KT(e)){e=ZT(e,0,i);continue}const a=JT(e,o-1,t+1);if(a.some(OE(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:o}of a)s?(t>=r||i===o)&&(e=eE(e,r)):(l=o!==i,s=!0),n>t&&t>=r&&o!==i&&(e=ZT(e,t+1,o));l&&(e=ZT(e,o,i))}return[e,n]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=TE(e.offsetTree,s,a,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>ZT(e,t,wE(t,u,i))),QT()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function DE(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function TE(e,t,n,r){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=mE(i,t-1,yE),s=i[l].offset;const e=GT(n,t-1);o=e[0],a=e[1],i.length&&i[l].size===GT(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of JT(n,t,1/0)){const t=e-o,n=t*a+s+t*r;i.push({index:e,offset:n,size:l}),o=e,s=n,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function EE(e){return{index:e.index,value:e}}function OE(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const FE={offsetHeight:"height",offsetWidth:"width"},_E=IT((([{log:e},{recalcInProgress:t}])=>{const n=FT(),r=FT(),i=OT(r,0),o=FT(),a=FT(),s=ET(0),l=ET([]),c=ET(void 0),d=ET(void 0),u=ET(((e,t)=>bE(e,FE[t]))),h=ET(void 0),g=ET(0),p={groupIndices:[],groupOffsetTree:QT(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:QT()},f=OT(CT(n,TT(l,e,g),ST(kE,p),yT()),p),m=OT(CT(l,yT(),ST(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),wT((({prev:e})=>e))),[]);fT(CT(l,xT((e=>e.length>0)),TT(f,g),wT((([e,t,n])=>{const r=e.reduce(((e,r,i)=>ZT(e,r,wE(r,t.offsetTree,n)||i)),QT());return{...t,groupIndices:e,groupOffsetTree:r}}))),f),fT(CT(r,TT(f),xT((([e,{lastIndex:t}])=>e<t)),wT((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),fT(c,d);const b=OT(CT(c,wT((e=>void 0===e))),!0);fT(CT(d,xT((e=>void 0!==e&&KT(pT(f).sizeTree))),wT((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const v=_T(CT(n,TT(f),ST((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),wT((e=>e.changed))));uT(CT(s,ST(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),wT((e=>e.diff))),(e=>{const{groupIndices:n}=pT(f);if(e>0)hT(t,!0),hT(o,e+DE(e,n));else if(e<0){const t=pT(m);t.length>0&&(e-=DE(-e,t)),hT(a,e)}})),uT(CT(s,TT(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},zT.ERROR)}));const y=_T(o);fT(CT(o,TT(f),wT((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=qT(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=tE(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return tE(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const x=_T(CT(a,TT(f,g),wT((([e,{offsetTree:t},n])=>wE(-e,t,n)))));return fT(CT(a,TT(f,g),wT((([e,t,n])=>{if(t.groupIndices.length>0){if(KT(t.sizeTree))return t;let r=QT();const i=pT(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(r=tE(t.sizeTree).reduce(((t,{k:n,v:r})=>ZT(t,Math.max(0,n+e),r)),r),o!==-e){r=ZT(r,0,qT(t.sizeTree,s));r=ZT(r,1,GT(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...TE(t.offsetTree,0,r,n)}}{const r=tE(t.sizeTree).reduce(((t,{k:n,v:r})=>ZT(t,Math.max(0,n+e),r)),QT());return{...t,sizeTree:r,...TE(t.offsetTree,0,r,n)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:n,sizes:f,statefulTotalCount:i,totalCount:r,trackItemSizes:b,unshiftWith:o}}),dT(PT,pE),{singleton:!0});function IE(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const ME=IT((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const o=FT(),a=FT(),s=_T(CT(o,wT(IE)));return fT(CT(s,wT((e=>e.totalCount))),n),fT(CT(s,wT((e=>e.groupIndices))),e),fT(CT(AT(i,t,r),xT((([e,t])=>vE(t))),wT((([e,t,n])=>GT(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),yT(),wT((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),dT(_E,VT)),AE=IT((([{log:e}])=>{const t=ET(!1),n=_T(CT(t,xT((e=>e)),yT()));return uT(t,(t=>{t&&pT(e)("props updated",{},zT.DEBUG)})),{didMount:n,propsReady:t}}),dT(PT),{singleton:!0}),BE=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function jE(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!BE)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const zE=IT((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const g=FT(),p=FT(),f=ET(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),hT(l,!1)}return fT(CT(g,TT(n,u,r,f,s,a,h),TT(e,o,i),wT((([[e,n,r,i,o,a,s,c],u,h,f])=>{const x=jE(e),{align:w,behavior:$,offset:C}=x,S=i-1,k=CE(x,n,S);let D=wE(k,n.offsetTree,u)+a;"end"===w?(D+=h+GT(n.sizeTree,k)[1]-r+f,k===S&&(D+=s)):"center"===w?D+=(h+GT(n.sizeTree,k)[1]-r+f)/2:D-=o,C&&(D+=C);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},zT.DEBUG),hT(g,e)):(hT(p,!0),c("list did not change, scroll successful",{},zT.DEBUG))};if(y(),"smooth"===$){let e=!1;v=uT(t,(t=>{e=e||t})),m=mT(d,(()=>{T(e)}))}else m=mT(CT(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return b=setTimeout((()=>{y()}),1200),hT(l,!0),c("scrolling from index to",{behavior:$,index:k,top:D},zT.DEBUG),{behavior:$,top:D}}))),c),{scrollTargetReached:p,scrollToIndex:g,topListHeight:f}}),dT(_E,VT,PT),{singleton:!0});function RE(e,t){0==e?t():requestAnimationFrame((()=>{RE(e-1,t)}))}function PE(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const LE=IT((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=ET(!0),l=ET(0),c=ET(!0);return fT(CT(a,TT(l),xT((([e,t])=>!!t)),$T(!1)),s),fT(CT(a,TT(l),xT((([e,t])=>!!t)),$T(!1)),c),uT(CT(AT(t,a),TT(s,n,e,c),xT((([[,e],t,{sizeTree:n},r,i])=>e&&(!KT(n)||aT(r))&&!t&&!i)),TT(l)),(([,e])=>{mT(i,(()=>{hT(c,!0)})),RE(4,(()=>{mT(r,(()=>{hT(s,!0)})),hT(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),dT(_E,VT,zE,AE),{singleton:!0});function NE(e,t){return Math.abs(e-t)<1.01}const HE="up",WE="down",YE={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},VE=IT((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:o}])=>{const a=ET(!1),s=ET(!0),l=FT(),c=FT(),d=ET(4),u=ET(0),h=OT(CT(jT(CT(BT(i),kT(1),$T(!0)),CT(BT(i),kT(1),$T(!1),bT(100))),yT()),!1),g=OT(CT(jT(CT(n,$T(!0)),CT(n,$T(!1),bT(200))),yT()),!1);fT(CT(AT(BT(i),BT(u)),wT((([e,t])=>e<=t)),yT()),s),fT(CT(s,DT(50)),c);const p=_T(CT(AT(r,BT(o),BT(t),BT(e),BT(d)),ST(((e,[{scrollHeight:t,scrollTop:n},r,i,o,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),YE),yT(((e,t)=>e&&e.atBottom===t.atBottom)))),f=OT(CT(r,ST(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(NE(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),xT((e=>e.changed)),wT((e=>e.jump))),0);fT(CT(p,wT((e=>e.atBottom))),a),fT(CT(a,DT(50)),l);const m=ET(WE);fT(CT(r,wT((({scrollTop:e})=>e)),yT(),ST(((e,t)=>pT(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?HE:WE,prevScrollTop:t}),{direction:WE,prevScrollTop:0}),wT((e=>e.direction))),m),fT(CT(r,DT(50),$T("none")),m);const b=ET(0);return fT(CT(h,xT((e=>!e)),$T(0)),b),fT(CT(i,DT(100),TT(h),xT((([e,t])=>!!t)),ST((([e,t],[n])=>[t,n]),[0,0]),wT((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:m,scrollVelocity:b}}),dT(VT)),UE="top",XE="bottom",KE="none";function qE(e,t,n){return"number"==typeof e?n===HE&&t===UE||n===WE&&t===XE?e:0:n===HE?t===UE?e.main:e.reverse:t===XE?e.main:e.reverse}function GE(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const ZE=IT((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const o=FT(),a=ET(0),s=ET(0),l=ET(0),c=OT(CT(AT(BT(r),BT(i),BT(n),BT(o,gE),BT(l),BT(a),BT(t),BT(e),BT(s)),wT((([e,t,n,[r,i],o,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(n-d,0);let g=KE;const p=GE(c,UE),f=GE(c,XE);return r-=l,i+=n+s,(r+=n+s)>e+u-p&&(g=HE),(i-=l)<e-h+t+f&&(g=WE),g!==KE?[Math.max(d-n-qE(o,UE,g)-p,0),d-h-s+t+qE(o,XE,g)+f]:null})),xT((e=>null!=e)),yT(gE)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),dT(VT),{singleton:!0});const QE={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function JE(e,t,n,r,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-a,h=c,g=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:o,items:tO(e,i,o),offsetBottom:g,offsetTop:c,top:h,topItems:tO(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function eO(e,t,n,r,i,o){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=PE(t,s);return JE(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function tO(e,t,n){if(0===e.length)return[];if(!vE(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,o=[],a=JT(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},o.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return o}const nO=IT((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:g},{recalcInProgress:p}])=>{const f=ET([]),m=ET(0),b=FT();fT(o.topItemsIndexes,f);const v=OT(CT(AT(g,p,BT(l,gE),BT(i),BT(r),BT(c),d,BT(f),BT(t),BT(n),e),xT((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),wT((([,,[e,t],n,r,i,o,a,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:h}=d,g=pT(m);if(0===n)return{...QE,totalCount:n};if(0===e&&0===t)return 0===g?{...QE,totalCount:n}:eO(g,i,r,s,l,c||[]);if(KT(h))return g>0?null:JE(function(e,t,n){if(vE(t)){const r=$E(e,t);return[{index:GT(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(PE(i,n),d,c),[],n,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of JT(h,e,t)){const i=r.value,o=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!o)return JE([],p,n,l,d,s);const f=a.length>0?a[a.length-1]+1:0,b=SE(u,e,t,f);if(0===b.length)return null;const v=n-1;return JE(lT([],(n=>{for(const r of b){const i=r.value;let o=i.offset,a=r.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-r.start;o+=t*s+t*l}a<f&&(o+=(f-a)*s,a=f);const d=Math.min(r.end,v);for(let e=a;e<=d&&!(o>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,n,l,d,s)})),xT((e=>null!==e)),yT()),QE);fT(CT(e,xT(aT),wT((e=>null==e?void 0:e.length))),i),fT(CT(v,wT((e=>e.topListHeight))),u),fT(u,s),fT(CT(v,wT((e=>[e.top,e.bottom]))),a),fT(CT(v,wT((e=>e.items))),b);const y=_T(CT(v,xT((({items:e})=>e.length>0)),TT(i,e),xT((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),wT((([,e,t])=>[e-1,t])),yT(gE),wT((([e])=>e)))),x=_T(CT(v,DT(200),xT((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),wT((({items:e})=>e[0].index)),yT())),w=_T(CT(v,xT((({items:e})=>e.length>0)),wT((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),yT(hE)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),dT(_E,ME,ZE,LE,zE,VE,AE,pE),{singleton:!0}),rO=IT((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const o=FT(),a=OT(CT(AT(n,e,r,t,i),wT((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return fT(BT(a),o),{totalListHeight:a,totalListHeightChanged:o}}),dT(VT,nO),{singleton:!0}),iO=IT((([{viewportHeight:e},{totalListHeight:t}])=>{const n=ET(!1),r=OT(CT(AT(n,e,t),xT((([e])=>e)),wT((([,e,t])=>Math.max(0,e-t))),DT(0),yT()),0);return{alignToBottom:n,paddingTopAddition:r}}),dT(VT,rO),{singleton:!0});function oO(e){return!!e&&("smooth"===e?"smooth":"auto")}const aO=IT((([{listRefresh:e,totalCount:t},{atBottomState:n,isAtBottom:r},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=ET(!1),u=FT();let h=null;function g(e){hT(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=mT(n,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(pT(l)("scrolling to bottom due to increased size",{},zT.DEBUG),g("auto"))}));setTimeout(t,100)}return uT(CT(AT(CT(BT(t),kT(1)),a),TT(BT(d),r,o,c),wT((([[e,t],n,r,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?oO(e(t)):t&&oO(e))(n,r||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),xT((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:n})=>{h&&(h(),h=null),h=mT(e,(()=>{pT(l)("following output to ",{totalCount:n},zT.DEBUG),g(t),h=null}))})),uT(CT(AT(BT(d),t,s),xT((([e,,t])=>e&&t)),ST((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),xT((({refreshed:e})=>e)),TT(d,t)),(([,e])=>{pT(o)&&p(!1!==e)})),uT(u,(()=>{p(!1!==pT(d))})),uT(AT(BT(d),n),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:d}}),dT(_E,VE,zE,LE,AE,PT,VT)),sO=IT((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(fT(CT(s,TT(o),xT((([,e])=>0!==e)),TT(i,r,t,n,e),wT((([[,e],t,n,r,i,o=[]])=>eO(e,t,n,r,i,o)))),a),{})),dT(_E,LE,nO,AE),{singleton:!0}),lO=IT((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=ET(0);return uT(CT(e,TT(r),xT((([,e])=>0!==e)),wT((([,e])=>({top:e})))),(e=>{mT(CT(n,kT(1),xT((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{hT(t,e)}))}))})),{initialScrollTop:r}}),dT(AE,VT,nO),{singleton:!0}),cO=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=n?n:"start",behavior:r}:e>o?{...i,align:null!=n?n:"end",behavior:r}:null,dO=IT((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=FT();return fT(CT(d,TT(t,l,n,o,i,r,s),TT(e),wT((([[e,t,n,r,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=cO,done:g,...p}=e,f=CE(e,t,r-1),m=wE(f,t.offsetTree,c)+i+o,b=h({itemBottom:m+GT(t.sizeTree,f)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+n-s,viewportTop:l+o});return b?g&&mT(CT(a,xT((e=>!e)),kT(pT(a)?1:2)),g):g&&g(),b})),xT((e=>null!==e))),c),{scrollIntoView:d}}),dT(_E,VT,zE,nO,PT),{singleton:!0}),uO=IT((([{scrollVelocity:e}])=>{const t=ET(!1),n=FT(),r=ET(!1);return fT(CT(e,TT(r,t,n),xT((([e,t])=>!!t)),wT((([e,t,n,r])=>{const{enter:i,exit:o}=t;if(n){if(o(e,r))return!1}else if(i(e,r))return!0;return n})),yT()),t),uT(CT(AT(t,e,n),TT(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),dT(VE),{singleton:!0}),hO=IT((([{scrollContainerState:e,scrollTo:t}])=>{const n=FT(),r=FT(),i=FT(),o=ET(!1),a=ET(void 0);return fT(CT(AT(n,r),wT((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),fT(CT(t,TT(r),wT((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),dT(VT)),gO=IT((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=FT(),d=ET(void 0),u=ET(null),h=ET(null);return fT(s,u),fT(l,h),uT(CT(c,TT(t,r,a,u,h,n)),(([e,t,n,r,i,o,a])=>{const s=function(e){return tE(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==o&&(n=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:n-=a})})),fT(CT(d,xT(aT),wT(pO)),i),fT(CT(o,TT(d),xT((([,e])=>void 0!==e)),yT(),wT((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),dT(_E,VT,LE,AE,hO));function pO(e){return{align:"start",index:0,offset:e.scrollTop}}const fO=IT((([{topItemsIndexes:e}])=>{const t=ET(0);return fT(CT(t,xT((e=>e>=0)),wT((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),dT(nO));function mO(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const bO=mO((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),vO=IT((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:p}])=>{const f=_T(CT(l,TT(a),ST((([,e,t,n],[{bottom:r,items:i,offsetBottom:o,totalCount:a},s])=>{const l=r+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),xT((([e])=>0!==e)),TT(r,s,n,i,g,p),xT((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===HE)),wT((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},zT.DEBUG),e)))));function m(n){n>0?(hT(t,{behavior:"auto",top:-n}),hT(e,0)):(hT(e,0),hT(t,{behavior:"auto",top:-n}))}return uT(CT(f,TT(e,o)),(([t,n,r])=>{r&&bO()?hT(e,n-t):m(-t)})),uT(CT(AT(OT(o,!1),e,p),xT((([e,t,n])=>!e&&!n&&0!==t)),wT((([e,t])=>t)),DT(1)),m),fT(CT(u,wT((e=>({top:-e})))),t),uT(CT(c,TT(h,d),wT((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function o(e){return e*(n+i)}if(0===t.length)return o(e);{let n=0;const i=qT(r,0);let a=0,s=0;for(;a<e;){a++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=i,r=e-a+1),a+=r,n+=o(r),s++}return n}}))),(n=>{hT(e,n),requestAnimationFrame((()=>{hT(t,{top:n}),requestAnimationFrame((()=>{hT(e,0),hT(p,!1)}))}))})),{deviation:e}}),dT(VT,VE,nO,_E,PT,pE)),yO=IT((([e,t,n,r,i,o,a,s,l,c])=>({...e,...t,...n,...r,...i,...o,...a,...s,...l,...c})),dT(ZE,sO,AE,uO,rO,lO,iO,hO,dO,PT)),xO=IT((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p},f,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(fT(x.rangeChanged,k.scrollSeekRangeChanged),fT(CT(k.windowViewportRect,wT((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...f,sizes:l,...m})),dT(_E,LE,VT,gO,aO,nO,zE,vO,fO,ME,yO));function wO(e,t){const n={},r={};let i=0;const o=e.length;for(;i<o;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const $O=typeof document<"u"?i.useLayoutEffect:i.useEffect;function CO(t,n,r){const o=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&hT(e.propsReady,!1);for(const r of o){hT(e[n.required[r]],t[r])}for(const r of a)if(r in t){hT(e[n.optional[r]],t[r])}e.propsReady&&hT(e.propsReady,!0)}function u(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?n===o?void 0:(r(),n=o,t=uT(e,o),t):(r(),sT);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const h=i.forwardRef(((h,g)=>{const{children:p,...f}=h,[m]=i.useState((()=>lT(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(r.map((e=>n(e))));return o&&t.set(i,a),a};return n(e)}(t),(e=>{d(e,f)})))),[b]=i.useState(iT(u,m));$O((()=>{for(const e of l)e in f&&uT(b[e],f[e]);return()=>{Object.values(b).map(gT)}}),[f,b,m]),$O((()=>{d(m,f)})),i.useImperativeHandle(g,tT(function(e){return s.reduce(((t,r)=>(t[r]=t=>{hT(e[n.methods[r]],t)},t)),{})}(m)));const v=r;return e(c.Provider,{value:m,children:r?e(v,{...wO([...o,...a,...l],f),children:p}):p})})),g=i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],n=i.useCallback((e=>uT(t,e)),[t]);return i.useSyncExternalStore(n,(()=>pT(t)),(()=>pT(t)))}:e=>{const t=i.useContext(c)[e],[n,r]=i.useState(iT(pT,t));return $O((()=>uT(t,(e=>{e!==n&&r(tT(e))}))),[t,n]),n};return{Component:h,useEmitter:(e,t)=>{const n=i.useContext(c)[e];$O((()=>uT(n,t)),[t,n])},useEmitterValue:g,usePublisher:e=>i.useCallback(oT(hT,i.useContext(c)[e]),[e])}}const SO=i.createContext(void 0),kO=i.createContext(void 0),DO=typeof document<"u"?i.useLayoutEffect:i.useEffect;function TO(e,t,n,r=sT,o,a){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((n=>{const r=n.target,i=r===window||r===document,o=a?i?window.pageXOffset||document.documentElement.scrollLeft:r.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:r.scrollTop,s=a?i?document.documentElement.scrollWidth:r.scrollWidth:i?document.documentElement.scrollHeight:r.scrollHeight,d=a?i?window.innerWidth:r.offsetWidth:i?window.innerHeight:r.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(o,0),viewportHeight:d})};n.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(o===l.current||o<=0||o===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return i.useEffect((()=>{const e=o||s.current;return r(o||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",d)}}),[s,d,n,r,o]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let o,d,u;r===window?(d=Math.max(bE(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),o=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=r[a?"scrollWidth":"scrollHeight"],o=bE(r,a?"width":"height"),u=r[a?"scrollLeft":"scrollTop"]);const h=d-o;if(n.top=Math.ceil(Math.max(Math.min(h,n.top),0)),NE(o,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:o}),void(i&&t(!0));i?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const EO="-webkit-sticky",OO="sticky",FO=mO((()=>{if(typeof document>"u")return OO;const e=document.createElement("div");return e.style.position=EO,e.style.position===EO?EO:OO}));function _O(e){return e}const IO=IT((()=>{const e=ET((e=>`Item ${e}`)),t=ET(null),n=ET((e=>`Group ${e}`)),r=ET({}),i=ET(_O),o=ET("div"),a=ET(sT),s=(e,t=null)=>OT(CT(r,wT((t=>t[e])),yT()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),MO=IT((([e,t])=>({...e,...t})),dT(xO,IO)),AO=({height:t})=>e("div",{style:{height:t}}),BO={overflowAnchor:"none",position:FO(),zIndex:1},jO={overflowAnchor:"none"},zO={...jO,display:"inline-block",height:"100%"},RO=i.memo((function({showTopList:t=!1}){const n=tF("listState"),r=nF("sizeRanges"),o=tF("useWindowScroll"),a=tF("customScrollParent"),s=nF("windowScrollContainerState"),l=nF("scrollContainerState"),c=a||o?s:l,d=tF("itemContent"),u=tF("context"),h=tF("groupContent"),g=tF("trackItemSizes"),p=tF("itemSize"),f=tF("log"),m=nF("gap"),b=tF("horizontalDirection"),{callbackRef:v}=HT(r,p,g,t?sT:c,f,m,a,b,tF("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);eF("deviation",(e=>{y!==e&&x(e)}));const w=tF("EmptyPlaceholder"),$=tF("ScrollSeekPlaceholder")||AO,C=tF("ListComponent"),S=tF("ItemComponent"),D=tF("GroupComponent"),T=tF("computeItemKey"),E=tF("isSeeking"),O=tF("groupIndices").length>0,F=tF("alignToBottom"),_=tF("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:F?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:F?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},..._?{}:{visibility:"hidden"}};return!t&&0===n.totalCount&&w?e(w,{...WO(w,u)}):e(C,{...WO(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,u);return E?k($,{...WO($,u),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...WO(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:BO},h(e.index,u)):k(S,{...WO(S,u),...YO(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:b?zO:jO},O?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),PO={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},LO={outline:"none",overflowX:"auto",position:"relative"},NO=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),HO={position:FO(),top:0,width:"100%",zIndex:1};function WO(e,t){if("string"!=typeof e)return{context:t}}function YO(e,t){return{item:"string"==typeof e?void 0:t}}const VO=i.memo((function(){const t=tF("HeaderComponent"),n=nF("headerHeight"),r=tF("HeaderFooterTag"),o=LT(i.useMemo((()=>e=>{n(bE(e,"height"))}),[n]),!0,tF("skipAnimationFrameInResizeObserver")),a=tF("context");return t?e(r,{ref:o,children:e(t,{...WO(t,a)})}):null})),UO=i.memo((function(){const t=tF("FooterComponent"),n=nF("footerHeight"),r=tF("HeaderFooterTag"),o=LT(i.useMemo((()=>e=>{n(bE(e,"height"))}),[n]),!0,tF("skipAnimationFrameInResizeObserver")),a=tF("context");return t?e(r,{ref:o,children:e(t,{...WO(t,a)})}):null}));function XO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:o,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),h=n("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:p,scrollToCallback:f}=TO(s,c,l,d,void 0,h);return t("scrollTo",f),t("scrollBy",g),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?LO:PO,...o},tabIndex:0,...a,...WO(l,u),children:i})}))}function KO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:o,...a}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("totalListHeight"),u=n("deviation"),h=n("customScrollParent"),g=n("context"),{scrollByCallback:p,scrollerRef:f,scrollToCallback:m}=TO(s,c,l,sT,h);return DO((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...WO(l,g),children:i})}))}const qO=({children:t})=>{const n=i.useContext(SO),r=nF("viewportHeight"),o=nF("fixedItemHeight"),a=tF("alignToBottom"),s=tF("horizontalDirection"),l=LT(i.useMemo((()=>rT(r,(e=>bE(e,s?"width":"height")))),[r,s]),!0,tF("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{n&&(r(n.viewportHeight),o(n.itemHeight))}),[n,r,o]),e("div",{"data-viewport-type":"element",ref:l,style:NO(a),children:t})},GO=({children:t})=>{const n=i.useContext(SO),r=nF("windowViewportRect"),o=nF("fixedItemHeight"),a=tF("customScrollParent"),s=YT(r,a,tF("skipAnimationFrameInResizeObserver")),l=tF("alignToBottom");return i.useEffect((()=>{n&&(o(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,o]),e("div",{"data-viewport-type":"window",ref:s,style:NO(l),children:t})},ZO=({children:t})=>{const n=tF("TopItemListComponent")||"div",r=tF("headerHeight"),i={...HO,marginTop:`${r}px`},o=tF("context");return e(n,{style:i,...WO(n,o),children:t})},QO=i.memo((function(n){const r=tF("useWindowScroll"),i=tF("topItemsIndexes").length>0,o=tF("customScrollParent"),a=tF("context"),s=o||r?iF:rF,l=o||r?GO:qO;return t(s,{...n,...WO(s,a),children:[i&&e(ZO,{children:e(RO,{showTopList:!0})}),t(l,{children:[e(VO,{}),e(RO,{}),e(UO,{})]})]})})),{Component:JO,useEmitter:eF,useEmitterValue:tF,usePublisher:nF}=CO(MO,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},QO),rF=XO({useEmitter:eF,useEmitterValue:tF,usePublisher:nF}),iF=KO({useEmitter:eF,useEmitterValue:tF,usePublisher:nF}),oF=JO,aF={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},sF={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:lF,floor:cF,max:dF,min:uF,round:hF}=Math;function gF(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function pF(e,t){return e&&e.width===t.width&&e.height===t.height}function fF(e,t){return e&&e.column===t.column&&e.row===t.row}const mF=IT((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,g,{didMount:p,propsReady:f},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=ET(0),C=ET(0),S=ET(aF),k=ET({height:0,width:0}),D=ET({height:0,width:0}),T=FT(),E=FT(),O=ET(0),F=ET(null),_=ET({column:0,row:0}),I=FT(),M=FT(),A=ET(!1),B=ET(0),j=ET(!0),z=ET(!1),R=ET(!1);uT(CT(p,TT(B),xT((([e,t])=>!!t))),(()=>{hT(j,!1)})),uT(CT(AT(p,j,D,k,B,z),xT((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{hT(z,!0),RE(1,(()=>{hT(T,e)})),mT(CT(c),(()=>{hT(t,[0,0]),hT(j,!0)}))})),fT(CT(M,xT((e=>null!=e&&e.scrollTop>0)),$T(0)),C),uT(CT(p,TT(M),xT((([,e])=>null!=e))),(([,e])=>{e&&(hT(k,e.viewport),hT(D,e.item),hT(_,e.gap),e.scrollTop>0&&(hT(A,!0),mT(CT(c,kT(1)),(e=>{hT(A,!1)})),hT(l,{top:e.scrollTop})))})),fT(CT(k,wT((({height:e})=>e))),u),fT(CT(AT(BT(k,pF),BT(D,pF),BT(_,((e,t)=>e&&e.column===t.column&&e.row===t.row)),BT(c)),wT((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),I),fT(CT(AT(BT($),r,BT(_,fF),BT(D,pF),BT(k,pF),BT(F),BT(C),BT(A),BT(j),BT(B)),xT((([,,,,,,,e])=>!e)),wT((([e,[t,n],r,i,o,a,s,,l,c])=>{const{column:d,row:u}=r,{height:h,width:g}=i,{width:p}=o;if(0===s&&(0===e||0===p))return aF;if(0===g){const t=PE(c,e);return function(e){return{...sF,items:e}}(gF(t,t+Math.max(s-1,0),a))}const f=bF(p,g,d);let m,b;l?0===t&&0===n&&s>0?(m=0,b=s-1):(m=f*cF((t+u)/(h+u)),b=f*lF((n+u)/(h+u))-1,b=uF(e-1,dF(b,f-1)),m=uF(b,dF(0,m))):(m=0,b=-1);const v=gF(m,b,a),{bottom:y,top:x}=vF(o,r,i,v),w=lF(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),fT(CT(F,xT((e=>null!==e)),wT((e=>e.length))),$),fT(CT(AT(k,D,S,_),xT((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),wT((([e,t,{items:n},r])=>{const{bottom:i,top:o}=vF(e,r,t,n);return[o,i]})),yT(gE)),t);const P=ET(!1);fT(CT(c,TT(P),wT((([e,t])=>t||0!==e))),P);const L=_T(CT(AT(S,$),xT((([{items:e}])=>e.length>0)),TT(P),xT((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),wT((([[,e]])=>e-1)),yT())),N=_T(CT(BT(S),xT((({items:e})=>e.length>0&&0===e[0].index)),$T(0),yT())),H=_T(CT(BT(S),TT(A),xT((([{items:e},t])=>e.length>0&&!t)),wT((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),yT(hE),DT(0)));fT(H,g.scrollSeekRangeChanged),fT(CT(T,TT(k,D,$,_),wT((([e,t,n,r,i])=>{const o=jE(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=r-1),c=dF(0,c,uF(r-1,c));let d=yF(t,i,n,c);return"end"===a?d=hF(d-t.height+n.height):"center"===a&&(d=hF(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=OT(CT(S,wT((e=>e.offsetBottom+e.bottom))),0);return fT(CT(x,wT((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:F,deviation:O,footerHeight:i,gap:_,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:D,overscan:n,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:E,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:L,propsReady:f,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),dT(ZE,VT,VE,uO,AE,hO,PT));function bF(e,t,n){return dF(1,cF((e+n)/(cF(t)+n)))}function vF(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const o=yF(e,t,n,r[0].index);return{bottom:yF(e,t,n,r[r.length-1].index)+i,top:o}}function yF(e,t,n,r){const i=bF(e.width,n.width,t.column),o=cF(r/i),a=o*n.height+dF(0,o-1)*t.row;return a>0?a+t.row:a}const xF=IT((()=>{const e=ET((e=>`Item ${e}`)),t=ET({}),n=ET(null),r=ET("virtuoso-grid-item"),i=ET("virtuoso-grid-list"),o=ET(_O),a=ET("div"),s=ET(sT),l=(e,n=null)=>OT(CT(t,wT((t=>t[e])),yT()),n),c=ET(!1),d=ET(!1);return fT(BT(d),c),{components:t,computeItemKey:o,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),wF=IT((([e,t])=>({...e,...t})),dT(mF,xF)),$F=i.memo((function(){const t=FF("gridState"),n=FF("listClassName"),r=FF("itemClassName"),o=FF("itemContent"),a=FF("computeItemKey"),s=FF("isSeeking"),l=_F("scrollHeight"),c=FF("ItemComponent"),d=FF("ListComponent"),u=FF("ScrollSeekPlaceholder"),h=FF("context"),g=_F("itemDimensions"),p=_F("gap"),f=FF("log"),m=FF("stateRestoreInProgress"),b=_F("reportReadyState"),v=LT(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();g({height:e,width:t})}p({column:AF("column-gap",getComputedStyle(e).columnGap,f),row:AF("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,p,f]),!0,!1);return DO((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:n,ref:v,...WO(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((n=>{const i=a(n.index,n.data,h);return s?e(u,{...WO(u,h),height:t.itemHeight,index:n.index,width:t.itemWidth},i):k(c,{...WO(c,h),className:r,"data-index":n.index,key:i},o(n.index,n.data,h))}))})})),CF=i.memo((function(){const t=FF("HeaderComponent"),n=_F("headerHeight"),r=FF("headerFooterTag"),o=LT(i.useMemo((()=>e=>{n(bE(e,"height"))}),[n]),!0,!1),a=FF("context");return t?e(r,{ref:o,children:e(t,{...WO(t,a)})}):null})),SF=i.memo((function(){const t=FF("FooterComponent"),n=_F("footerHeight"),r=FF("headerFooterTag"),o=LT(i.useMemo((()=>e=>{n(bE(e,"height"))}),[n]),!0,!1),a=FF("context");return t?e(r,{ref:o,children:e(t,{...WO(t,a)})}):null})),kF=({children:t})=>{const n=i.useContext(kO),r=_F("itemDimensions"),o=_F("viewportDimensions"),a=LT(i.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return i.useEffect((()=>{n&&(o({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,o,r]),e("div",{ref:a,style:NO(!1),children:t})},DF=({children:t})=>{const n=i.useContext(kO),r=_F("windowViewportRect"),o=_F("itemDimensions"),a=FF("customScrollParent"),s=YT(r,a,!1);return i.useEffect((()=>{n&&(o({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,o]),e("div",{ref:s,style:NO(!1),children:t})},TF=i.memo((function({...n}){const r=FF("useWindowScroll"),i=FF("customScrollParent"),o=i||r?MF:IF,a=i||r?DF:kF,s=FF("context");return e(o,{...n,...WO(o,s),children:t(a,{children:[e(CF,{}),e($F,{}),e(SF,{})]})})})),{Component:EF,useEmitter:OF,useEmitterValue:FF,usePublisher:_F}=CO(wF,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},TF),IF=XO({useEmitter:OF,useEmitterValue:FF,usePublisher:_F}),MF=KO({useEmitter:OF,useEmitterValue:FF,usePublisher:_F});function AF(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,zT.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const BF=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),jF=({children:t})=>{const[n,r]=a(-1);return e(BF.Provider,{value:{focusedIndex:n,setFocusedIndex:r},children:t})},zF=_.div`
    overflow: hidden;
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}

    ${bc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${mc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${bc.MaxWidth.xs} {
        width: calc(100vw - ${mc["xs-margin"]} * 2);
    }

    ${bc.MaxWidth.xxs} {
        width: calc(100vw - ${mc["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${dc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,RF=_.div`
    background: transparent;
    padding: ${pc["spacing-8"]};
`,PF=_.ul`
    list-style-type: none;
`,LF=_.li`
    display: flex;
    align-items: flex-start;
    gap: ${pc["spacing-8"]};
    padding: ${pc["spacing-12"]} ${pc["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?I`
                cursor: not-allowed;
            `:e.$active&&e.$selected?I`
                background: ${dc["bg-hover"]};
            `:e.$active?I`
                background: ${dc["bg-hover-subtle"]};
            `:void 0}
`,NF=_(Xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${dc["icon-selected"]};
`,HF=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,WF=_(Ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-selected"]};
`,YF=_(Ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-primary-subtlest"]};
`,VF=_(Ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-disabled-subtle"]};
`,UF=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,XF=_(hp)`
    cursor: pointer;
    overflow: hidden;
    color: ${dc["text-primary"]};
    font-size: inherit;
`,KF=_(XF)`
    ${uc["body-baseline-semibold"]}
`,qF=_(XF)`
    ${uc["body-md-semibold"]}
    padding: ${pc["spacing-8"]} ${pc["spacing-8"]};
`,GF=_.div`
    width: 100%;
    display: flex;
    padding: ${pc["spacing-12"]} ${pc["spacing-16"]};
    align-items: center;
`,ZF=_(z)`
    margin-right: ${pc["spacing-4"]};
    color: ${dc["icon-error"]};
    height: 1em;
    width: 1em;
`,QF=_(qc)`
    margin-right: ${pc["spacing-8"]};
    color: ${dc.icon};
`,JF=_.div`
    ${vd()}
    color: ${dc["text-subtle"]};
    padding: 0 ${pc["spacing-16"]} ${pc["spacing-12"]}
        ${pc["spacing-16"]};
`,e_=_.div`
    background: ${dc["bg-strong"]};
    border-radius: ${fc.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
`,t_=_.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${pc["spacing-8"]};
    padding: ${e=>"small"===e.$variant?I`
                  ${pc["spacing-8"]} ${pc["spacing-16"]}
              `:I`10px ${pc["spacing-16"]}`};
`,n_=_(up)`
    flex: 1;
`,r_=_(Le)`
    color: ${dc.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,i_=_(Dc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${pc["spacing-8"]};
    margin-left: -${pc["spacing-8"]};
    color: ${dc.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,o_=g(((n,r)=>{var{value:i,variant:o,onClear:a}=n,s=ut(n,["value","variant","onClear"]);return t(e_,{$variant:o,children:[t(t_,{$variant:o,children:[e(r_,{"aria-hidden":!0}),e(n_,Object.assign({ref:r,value:i,$variant:o},s))]}),i&&e(i_,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(je,{"aria-hidden":!0})})]})})),a_=({listItems:r,multiSelect:i,maxSelectable:s,selectedItems:l,disableItemFocus:c,itemsLoadState:d="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:m="inline",variant:b="default",listboxId:v,width:y,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:C,onRetry:S,valueExtractor:k,listExtractor:D,renderListItem:T,renderCustomCallToAction:E,enableSearch:O,hideNoResultsDisplay:F,noResultsDescription:_,searchPlaceholder:I="Search",searchFunction:M,onSearch:A})=>{const{focusedIndex:B,setFocusedIndex:j}=f(BF),[z,R]=a(""),[P,L]=a(null!=r?r:[]),N=_u(d),H=Ou(),W=o(null),Y=o(null),V=o([]),U=o(null),X=o(null),K=!!s&&!!l&&(null==l?void 0:l.length)===s,q=e=>{const t=D?D(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},G=p((e=>!!Wk(l,(t=>Vk(t,e)))),[l]),Z=Du((()=>null==M?void 0:M(z))),Q=Du((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:n}=q(e),r=z.trim().toLowerCase();return t.includes(r)||n&&n.includes(r)})))),J=(e,t)=>{K&&!G(e)||(j(t),null==w||w(e,(e=>k?k(e):e)(e)))},ee=e=>{const t=e.target.value;R(t),null==A||A()},te=()=>{var e;R(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},ne=()=>{null==S||S()};Tu("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),B<P.length-1){const e=B+1;null===(t=V.current[e])||void 0===t||t.focus(),j(e)}break;case"ArrowUp":if(e.preventDefault(),B>0){const e=B-1;null===(n=V.current[e])||void 0===n||n.focus(),j(e)}else 0===B&&U.current&&(U.current.focus(),j(-1));break;case"Space":case"Enter":document.activeElement===V.current[B]&&(e.preventDefault(),P[B]&&J(P[B],B))}})),u((()=>{var e;if(!x)return void(null===(e=X.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(x);X.current&&-1!==e&&(X.current.scrollToIndex({index:e}),j(e))}),0);return()=>clearTimeout(t)}),[V,r,j,x]),u((()=>{var e,t,n;if(H)return;if(c||!r)return;const i=r.findIndex((e=>G(e)));U.current?(j(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):B>0?(null===(e=X.current)||void 0===e||e.scrollToIndex({index:B,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[B])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=X.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),j(i),setTimeout((()=>{var e;return null===(e=V.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=X.current)||void 0===n||n.scrollToIndex({index:0}),j(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[G,c,B,r,H,j]),u((()=>{H&&N&&(c||"success"===d&&U.current&&(j(-1),U.current.focus()))}),[H,N,d,j,c]),u((()=>{var e;L(null!==(e=""===z?r:M?Z():Q())&&void 0!==e?e:[])}),[Z,Q,r,M,z]);const re=t=>i?e(K&&!t?VF:t?WF:YF,{"aria-hidden":!0}):t?e(NF,{"aria-hidden":!0}):e(HF,{}),ie=(t,n)=>{const{title:r,secondaryLabel:i}=q(t);return e(eT,{displayType:m,label:r,maxLines:g,selected:n,disabled:!n&&K,sublabel:i,truncationType:h,variant:b})},oe=(r,o)=>{if(!S||"success"===d){const a=G(r),s=o===B;return e(LF,{"aria-selected":a,"aria-multiselectable":i,"aria-disabled":!a&&K,"data-testid":"list-item",onClick:()=>J(r,o),onMouseEnter:()=>(e=>{j(e)})(o),ref:e=>{V.current[o]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&K,children:T?T(r,{selected:a}):t(n,{children:[re(a),ie(r,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(r,o))}},ae=()=>{if(l&&i&&P.length>0&&!z&&"success"===d)return e(UF,{children:e(qF,{onClick:$,type:"button",$variant:b,children:s||0!==l.length?"Clear all":"Select all"})})},se=()=>{if(!F&&(z||!O)&&0===P.length&&"success"===d)return t(n,{children:[t(GF,{"data-testid":"list-no-results",children:[e(ZF,{"data-testid":"no-result-icon"}),"No results found."]}),_&&e(JF,{"data-testid":"no-result-desc",children:_})]})},le=()=>{if(S&&"loading"===d)return t(GF,{"data-testid":"list-loading",children:[e(QF,{}),"Loading..."]})},ce=()=>{if(S&&"fail"===d)return t(GF,{"data-testid":"list-fail",children:[e(ZF,{"data-testid":"load-error-icon"}),"Failed to load. ",e(KF,{onClick:ne,type:"button",$variant:b,children:"Try again."})]})},de=()=>{var t;const n="test"===process.env.NODE_ENV;return e(PF,{role:"listbox",id:v,children:e(oF,Object.assign({ref:X,style:{height:"100%"},data:P,customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>oe(t,e)},n?{initialItemCount:P.length}:{}),n?P.length:void 0)})};return t(zF,{"data-testid":"dropdown-container",ref:W,$width:y,$variant:b,children:[t(RF,{ref:Y,"data-testid":"dropdown-list",children:[(()=>{if((O||M)&&"success"===d)return e(o_,{ref:U,onChange:ee,value:z,placeholder:I,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),se(),le(),ce(),de()]}),(()=>{if(E)return e("div",{"data-testid":"custom-cta",children:E(C,P)})})()]})},s_=_(hp)`
    display: flex;
    align-items: center;
    gap: ${pc["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${pc["spacing-16"]};

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,l_=_.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};

    svg {
        color: ${dc.icon};
        height: 1em;
        width: 1em;
    }
`,c_=g((({children:n,disabled:r,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(s_,{ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":o,$variant:l,children:[n,!s&&e(l_,{$expanded:i,$variant:l,children:e(fe,{"aria-hidden":!0})})]})));var d_=Symbol.for("immer-nothing"),u_=Symbol.for("immer-draftable"),h_=Symbol.for("immer-state"),g_="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function p_(e,...t){if("production"!==process.env.NODE_ENV){const n=g_[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var f_=Object.getPrototypeOf;function m_(e){return!!e&&!!e[h_]}function b_(e){return!!e&&(y_(e)||Array.isArray(e)||!!e[u_]||!!e.constructor?.[u_]||S_(e)||k_(e))}var v_=Object.prototype.constructor.toString();function y_(e){if(!e||"object"!=typeof e)return!1;const t=f_(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===v_}function x_(e,t){0===w_(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function w_(e){const t=e[h_];return t?t.type_:Array.isArray(e)?1:S_(e)?2:k_(e)?3:0}function $_(e,t){return 2===w_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function C_(e,t,n){const r=w_(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function S_(e){return e instanceof Map}function k_(e){return e instanceof Set}function D_(e){return e.copy_||e.base_}function T_(e,t){if(S_(e))return new Map(e);if(k_(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=y_(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[h_];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(f_(e),t)}{const t=f_(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function E_(e,t=!1){return F_(e)||m_(e)||!b_(e)||(w_(e)>1&&(e.set=e.add=e.clear=e.delete=O_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>E_(t,!0)))),e}function O_(){p_(2)}function F_(e){return Object.isFrozen(e)}var __,I_={};function M_(e){const t=I_[e];return t||p_(0,e),t}function A_(){return __}function B_(e,t){t&&(M_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function j_(e){z_(e),e.drafts_.forEach(P_),e.drafts_=null}function z_(e){e===__&&(__=e.parent_)}function R_(e){return __={drafts_:[],parent_:__,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function P_(e){const t=e[h_];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function L_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[h_].modified_&&(j_(t),p_(4)),b_(e)&&(e=N_(t,e),t.parent_||W_(t,e)),t.patches_&&M_("Patches").generateReplacementPatches_(n[h_].base_,e,t.patches_,t.inversePatches_)):e=N_(t,n,[]),j_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==d_?e:void 0}function N_(e,t,n){if(F_(t))return t;const r=t[h_];if(!r)return x_(t,((i,o)=>H_(e,r,t,i,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return W_(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,o=!1;3===r.type_&&(i=new Set(t),t.clear(),o=!0),x_(i,((i,a)=>H_(e,r,t,i,a,n,o))),W_(e,t,!1),n&&e.patches_&&M_("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function H_(e,t,n,r,i,o,a){if("production"!==process.env.NODE_ENV&&i===n&&p_(5),m_(i)){const a=N_(e,i,o&&t&&3!==t.type_&&!$_(t.assigned_,r)?o.concat(r):void 0);if(C_(n,r,a),!m_(a))return;e.canAutoFreeze_=!1}else a&&n.add(i);if(b_(i)&&!F_(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;N_(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||W_(e,i)}}function W_(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&E_(t,n)}var Y_={get(e,t){if(t===h_)return e;const n=D_(e);if(!$_(n,t))return function(e,t,n){const r=X_(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!b_(r)?r:r===U_(e.base_,t)?(q_(e),e.copy_[t]=G_(r,e)):r},has:(e,t)=>t in D_(e),ownKeys:e=>Reflect.ownKeys(D_(e)),set(e,t,n){const r=X_(D_(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=U_(D_(e),t),i=r?.[h_];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||$_(e.base_,t)))return!0;q_(e),K_(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==U_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,q_(e),K_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=D_(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){p_(11)},getPrototypeOf:e=>f_(e.base_),setPrototypeOf(){p_(12)}},V_={};function U_(e,t){const n=e[h_];return(n?D_(n):e)[t]}function X_(e,t){if(!(t in e))return;let n=f_(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=f_(n)}}function K_(e){e.modified_||(e.modified_=!0,e.parent_&&K_(e.parent_))}function q_(e){e.copy_||(e.copy_=T_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}x_(Y_,((e,t)=>{V_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),V_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&p_(13),V_.set.call(this,e,t,void 0)},V_.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&p_(14),Y_.set.call(this,e[0],t,n,e[0])};function G_(e,t){const n=S_(e)?M_("MapSet").proxyMap_(e,t):k_(e)?M_("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:A_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=Y_;n&&(i=[r],o=V_);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:A_()).drafts_.push(n),n}function Z_(e){if(!b_(e)||F_(e))return e;const t=e[h_];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=T_(e,t.scope_.immer_.useStrictShallowCopy_)}else n=T_(e,!0);return x_(n,((e,t)=>{C_(n,e,Z_(t))})),t&&(t.finalized_=!1),n}var Q_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&p_(6),void 0!==n&&"function"!=typeof n&&p_(7),b_(e)){const i=R_(this),o=G_(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?j_(i):z_(i)}return B_(i,n),L_(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===d_&&(r=void 0),this.autoFreeze_&&E_(r,!0),n){const t=[],i=[];M_("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}p_(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){b_(e)||p_(8),m_(e)&&(e=function(e){m_(e)||p_(10,e);return Z_(e)}(e));const t=R_(this),n=G_(e,void 0);return n[h_].isManual_=!0,z_(t),n}finishDraft(e,t){const n=e&&e[h_];n&&n.isManual_||p_(9);const{scope_:r}=n;return B_(r,t),L_(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=M_("Patches").applyPatches_;return m_(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},J_=Q_.produce;Q_.produceWithPatches.bind(Q_),Q_.setAutoFreeze.bind(Q_),Q_.setUseStrictShallowCopy.bind(Q_),Q_.applyPatches.bind(Q_),Q_.createDraft.bind(Q_),Q_.finishDraft.bind(Q_);var eI=qC,tI=TS,nI=fC,rI=Ko,iI=QC,oI=vC,aI=WC,sI=MC,lI=Object.prototype.hasOwnProperty;var cI=function(e){if(null==e)return!0;if(iI(e)&&(rI(e)||"string"==typeof e||"function"==typeof e.splice||oI(e)||sI(e)||nI(e)))return!e.length;var t=tI(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(aI(e))return!eI(e).length;for(var n in e)if(lI.call(e,n))return!1;return!0},dI=Uo(cI);const uI=(e,t,n)=>{const r=J_(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],o=gI(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},hI=(e,t)=>{const[n,...r]=t;if(dI(e)||dI(n))return;const i=e.find((e=>e.key===n));return i&&r.length?hI(i.subItems,r):i},gI=e=>e.join(","),pI=e=>new Set(e.map((e=>e.join(",")))),fI=_.li`
    display: ${e=>e.$visible?"flex":"none"};
`,mI=_.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${pc["spacing-8"]};
    padding: ${pc["spacing-12"]} ${pc["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&I`
            background: ${dc["bg-hover"]};
        `}
`,bI=_.div`
    height: 1px;
    width: calc((1lh + ${pc["spacing-8"]}) * ${e=>e.$level});
`,vI=_.div`
    width: 1lh;
    height: 1lh;
    color: ${dc["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${hc["duration-350"]}
            ${hc["ease-standard"]};

        ${e=>{if(e.$expanded)return I`
                    transform: rotate(90deg);
                `}}
    }
`,yI=_.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${pc["spacing-8"]};
`,xI=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":pc["spacing-16"]};

    display: flex;
    justify-content: center;
`,wI=_(qe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-selected"]};
`,$I=({listItems:r,multiSelect:i=!1,selectedKeyPaths:s,itemsLoadState:l="success",itemTruncationType:c="end",itemMaxLines:d=2,variant:h="default",listboxId:g,width:p,mode:f="default",selectableCategory:b,onSelectItem:v,onSelectAll:y,onRetry:x,enableSearch:w,hideNoResultsDisplay:$,noResultsDescription:C,searchPlaceholder:S="Search",onSearch:k})=>{const D=i||b,[T,E]=a(""),O=T.toLowerCase().trim(),[F,_]=a(!1),I=o(null),M=o(null),A=o([]),B=o(null),j=Ou(),[z,R]=a([]),[P,L]=a([]),N=F?P:z,H=m((()=>{let e=0;for(const t of z)t.level>e&&(e=t.level);return e}),[z]),[W,Y]=a(0),[V,U]=a([]),[X,K]=a(0),q=e=>{const t=e.target.value;E(t),""===t?_(!1):t.trim().length>=3&&_(!0),null==k||k()},G=()=>{var e;E(""),_(!1),null===(e=B.current)||void 0===e||e.focus(),null==k||k()},Z=()=>{null==x||x()},Q=()=>{if(0===s.size){const e=[],t=[];z.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==y||y(e,t)}else null==y||y([],[])},J=Du(((e,t)=>((e,t,n,r,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,g;const p=s?s.level+1:0,f=s?[...s.keyPath,d.key]:[d.key],m=gI(f),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:f,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(g=d.subItems)||void 0===g?void 0:g.length){const e=a(d.subItems,b);if(n&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?b.checked=!0:n&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,s,i,O,t))),ee=Du((e=>{return s.size?(t=J(e,!1),J_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>J_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),o=e[n].keyPath.slice(0,i.length);Vk(i,o)&&(r.visible=!0)}return e})))(J(e,!1));var t})),te=Du((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(O))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),ne=Du((()=>{R((e=>uI(e,s,i))),F&&L((e=>uI(e,s,i)))})),re=(e,t,n)=>{const r=((e,t,n)=>J_(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!Vk(r,a))break;t.visible=n&&o.expanded&&o.visible}})))(N,e,t);Y(e),K(n),F?L(r):R(r)};Tu("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":{e.preventDefault();const n=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(N,(e=>e.visible),W+1);n&&(K((e=>e+1)),Y(n.index),null===(t=A.current[n.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(N,(e=>e.visible),W-1);t?(K((e=>e-1)),Y(t.index),null===(n=A.current[t.index])||void 0===n||n.focus()):0===X&&B.current&&(B.current.focus(),K(-1),Y(-1));break}case"ArrowRight":e.preventDefault(),re(W,!0,X);break;case"ArrowLeft":e.preventDefault(),re(W,!1,X);break;case"Space":if(document.activeElement===A.current[W]){e.preventDefault();const t=N[W];if(t.hasSubItems&&!D)return;null==v||v(t)}}})),u((()=>{let e=[];"default"===f?e=ee(r):"expand"===f?e=J(r,!0):"collapse"===f&&(e=J(r,!1)),R(e)}),[J,ee,r,f]),u((()=>{U(N.filter((e=>e.visible)))}),[F,N]),u((()=>{ne()}),[i,s,ne]),u((()=>{if(F&&T.trim().length>=3){const e=te(r),t=(e=>J_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(J(e,!1));L(t)}}),[te,J,r,F,T]),u((()=>{j||(B.current?(Y(-1),K(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):A.current[W]?setTimeout((()=>{var e;return null===(e=A.current[W])||void 0===e?void 0:e.focus()}),200):(Y(0),K(0),setTimeout((()=>{var e;return null===(e=A.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,X,j]);const ie=()=>{if(w&&"success"===l)return e(o_,{ref:B,onChange:q,value:T,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:G,variant:h})},oe=()=>{if(i&&!F&&z.length>0&&"success"===l)return e(UF,{children:e(qF,{onClick:Q,type:"button",$variant:h,children:0===s.size?"Select all":"Clear all"})})},ae=()=>{if(!$&&F&&0===P.length&&"success"===l)return t(n,{children:[t(GF,{"data-testid":"list-no-results",children:[e(ZF,{"data-testid":"no-result-icon"}),"No results found."]}),C&&e(JF,{"data-testid":"no-result-desc",children:C})]})},se=()=>{if(x&&"loading"===l)return t(GF,{"data-testid":"list-loading",children:[e(ld,{}),"Loading..."]})},le=()=>{if(x&&"fail"===l)return t(GF,{"data-testid":"list-fail",children:[e(ZF,{"data-testid":"load-error-icon"}),"Failed to load. ",e(KF,{onClick:Z,type:"button",$variant:h,children:"Try again."})]})},ce=t=>{if(i)switch(t.checked){case"mixed":return e(wI,{"aria-hidden":!0});case!0:return e(WF,{"aria-hidden":!0});default:return e(YF,{"aria-hidden":!0})}if(!t.hasSubItems)return e(xI,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(NF,{"aria-hidden":!0})})},de=(n,r)=>{const{level:o,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:g,parentSetSize:p}=n,f=n.index,m=X===r,b=h&&!D;return t(fI,{$visible:a,children:[H>0&&e(bI,{$level:o}),H>0&&!h&&i&&e(yI,{}),t(mI,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":o+1,"aria-posinset":g+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?re(f,!s,r):((e,t)=>{K(t),Y(e),null==v||v(N[e])})(f,r)},onMouseEnter:()=>((e,t)=>{Y(t.index),K(e)})(r,n),ref:e=>A.current[n.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(vI,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),re(f,!s,r)},$expanded:s,children:e(Ke,{})}),ce(n),e(eT,{bold:h,searchTerm:F?O:void 0,label:n.item.label,selected:!!u,truncationType:c,maxLines:d})]})]},`[${l.join("---")}]`)},ue=()=>{var t;const n="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":i,id:g,ref:M,role:"tree",children:e(oF,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=I.current)&&void 0!==t?t:void 0,data:V,itemContent:(e,t)=>de(t,e)},n?{initialItemCount:V.length}:{}),n?V.length:void 0)})};return e(zF,{"data-testid":"dropdown-container",ref:I,$width:p,$variant:h,children:t(RF,{"data-testid":"nested-dropdown-list",children:[ie(),oe(),ae(),se(),le(),ue()]})})},CI=({selectedOptions:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:D,onBlur:T,variant:E="default",readOnly:O,alignment:F,dropdownZIndex:_,maxSelectable:I})=>{const[M,A]=a(t||[]),[B,j]=a(!1),[z,R]=a(!1),[P]=a((()=>Su.generate())),L=o(null),N=o(null);u((()=>{A(t||[])}),[t]);const H=()=>{M&&M.length>0||I?(A([]),K([])):(A(r),K(r))},W=(e,t)=>{const n=[...M],r=Hk(M,(e=>(f?f(e):e)===t));r>-1?n.splice(r,1):n.push(e),A(n),K(n)},Y=()=>{B&&(j(!1),X(!1))},V=()=>{z||B||R(!0)},U=e=>{z&&!B&&L.current&&!L.current.contains(e.relatedTarget)&&(R(!1),null==T||T())},X=e=>{!e&&y&&y(),e&&v&&v()},K=e=>{b&&b(e)};return e(jF,{children:e(qp,{enabled:!O&&!i,isOpen:B,renderElement:()=>e(cp,{className:l,"data-testid":c,id:d,ref:L,tabIndex:-1,onFocus:V,onBlur:U,$focused:z,$disabled:i,$readOnly:O,$error:s,children:e(c_,{ref:N,disabled:i,expanded:B,listboxId:P,popupRole:"listbox",readOnly:O,variant:E,children:e(Np,{$disabled:i,children:M&&0!==M.length?e(Hp,{$variant:E,children:r&&M.length===r.length?"All selected":`${M.length} selected`}):e(Wp,{truncateType:$,$variant:E,children:n})})})}),renderDropdown:({elementWidth:t})=>e(a_,{listboxId:P,listItems:r,onSelectItem:W,onDismiss:Y,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:g,searchPlaceholder:p,multiSelect:!0,maxSelectable:I,selectedItems:M,onSelectAll:H,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:D,variant:E,width:t}),onOpen:()=>{j(!0),X(!0),R(!0)},onClose:e=>{j(!1),X(!1),"click"!==e&&(R(!1),null==T||T())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1),X(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:_})})},SI=(e,t)=>{const[n,...r]=t;if(dI(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?SI(i.subItems,r):i:void 0},kI=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...kI(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},DI=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,noResultsDescription:b,readOnly:v,onSearch:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,onBlur:S,optionsLoadState:k="success",optionTruncationType:D="end",variant:T="default",alignment:E,dropdownZIndex:O})=>{const F=n,[_,I]=a(d?pI(d):new Set),[M,A]=a([]),[B,j]=a(!1),[z,R]=a(!1),[P]=a((()=>Su.generate())),L=o(null),N=o(null),H=o(null);u((()=>{const e=d||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],o=SI(e,i);o&&n.push({value:o.value,label:o.label,keyPath:i})}return n})(F,e);I(pI(e)),A(t)}),[d,F]);const W=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));I(pI(e)),A(n),G(e,n)},Y=e=>{const t=Z(e),n=t.map((e=>e.keyPath));A(t),I(pI(n)),G(n,t)},V=()=>{z||B||R(!0)},U=e=>{z&&!B&&L.current&&!L.current.contains(e.relatedTarget)&&(R(!1),null==S||S())},X=()=>{if(M.length>1)return`${M.length} selected`;const{label:e,value:t}=M[0];return g?g(t):e},K=e=>{if("middle"===D){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),ku.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&$&&$(),e&&w&&w()},G=(e,t)=>{if(x){const n=t.map((e=>e.value));x(e,n)}},Z=e=>{if(!0===e.checked)return M.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!Vk(e.keyPath,n)}));{const t=[...M],n=e.hasSubItems?((e,t)=>{const n=SI(e,t);return n&&n.subItems?kI(n.subItems,t):[]})(F,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{M.find((t=>Vk(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(qp,{enabled:!v&&!r,isOpen:B,renderElement:()=>e(cp,{className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:V,onBlur:U,$focused:z,$disabled:r,$readOnly:v,$error:i,children:e(c_,{ref:N,disabled:r,expanded:B,listboxId:P,popupRole:"tree",readOnly:v,variant:T,children:e(Np,{ref:H,$disabled:r,children:dI(M)?e(Wp,{truncateType:D,children:t}):e(Hp,{truncateType:D,children:K(X())})})})}),renderDropdown:({elementWidth:t})=>e($I,{listboxId:P,listItems:F,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:k,itemTruncationType:D,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,noResultsDescription:b,onSelectItem:Y,onSelectAll:W,onRetry:C,onSearch:y,variant:T,mode:h,width:t}),onOpen:()=>{j(!0),q(!0),R(!0)},onClose:e=>{j(!1),q(!1),"click"!==e&&(R(!1),null==S||S())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1),q(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:O})},TI=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,readOnly:y,onBlur:x,onSearch:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:D="success",optionTruncationType:T="end",variant:E="default",alignment:O,dropdownZIndex:F})=>{const _=n,[I,M]=a(d?pI([d]):new Set),[A,B]=a(),[j,z]=a(!1),[R,P]=a(!1),[L]=a((()=>Su.generate())),N=o(null),H=o(null),W=o(null);u((()=>{M(d?pI([d]):new Set);const e=hI(_,d||[]);B(null!=e?e:void 0)}),[d,_]);const Y=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;M(pI([n])),B({label:r,value:i}),z(!1),q(!1),null===(t=H.current)||void 0===t||t.focus(),null==$||$(n,i)},V=()=>{R||j||P(!0)},U=e=>{R&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==x||x())},X=()=>{if(!A)return"";const{label:e,value:t}=A;return g?g(t):e},K=e=>{if("middle"===T){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),ku.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&S&&S(),e&&C&&C()};return e(qp,{enabled:!y&&!r,isOpen:j,renderElement:()=>e(cp,{className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:V,onBlur:U,$focused:R,$disabled:r,$readOnly:y,$error:i,children:e(c_,{ref:H,disabled:r,expanded:j,listboxId:L,popupRole:"tree",readOnly:y,variant:E,children:e(Np,{ref:W,$disabled:r,children:dI(A)?e(Wp,{truncateType:T,children:t}):e(Hp,{truncateType:T,children:K(X())})})})}),renderDropdown:({elementWidth:t})=>e($I,{listboxId:L,listItems:_,selectedKeyPaths:I,selectableCategory:m,itemsLoadState:D,itemTruncationType:T,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:b,noResultsDescription:v,onSelectItem:Y,onRetry:k,onSearch:w,variant:E,mode:h,width:t}),onOpen:()=>{z(!0),q(!0),P(!0)},onClose:e=>{z(!1),q(!1),"click"!==e&&(P(!1),null==x||x())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),z(!1),q(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:F})};var EI=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n};var OI=function(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}},FI=OI(),_I=nS;var II=QC;var MI=function(e,t){return function(n,r){if(null==n)return n;if(!II(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}((function(e,t){return e&&FI(e,t,_I)}));var AI=EI,BI=MI,jI=Ok,zI=function(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n},RI=Ko;var PI=function(e,t,n){var r=RI(e)?AI:zI,i=arguments.length<3;return r(e,jI(t),n,i,BI)},LI=Uo(PI);const NI=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],HI=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var WI;!function(e){e.getCountries=()=>[].concat(...NI.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:HI("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const o=i.join(" ");return LI(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const n=e.remainingText.slice(0,1),r=e.remainingText.slice(1);return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(WI||(WI={}));const YI=t=>{var{onChange:n,value:r,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:g,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=ut(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(WI.getCountries()),[w,$]=a(void 0),[C,S]=a(""),k=o(null),D=Fu({ref:k,formatter:e=>WI.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===VI(null==r?void 0:r.countryCode)))[0];$(e),S(WI.formatNumber(null==r?void 0:r.number,e))}),[r]);const T=e=>{O(C,e),n&&E(C,e)},E=(e,t)=>{const r=WI.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&UI(t.countryCode)})},O=(e,t)=>{S(WI.formatNumber(e,t)),$(t)};return e(FD,Object.assign({ref:k,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),O(t,w),n&&E(t,w)},allowClear:i&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:UI(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:g,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:UI(e.countryCode)}),onSelectOption:T,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},VI=e=>e?e.replace("+",""):"",UI=e=>e?e.includes("+")?e:`+${e}`:"",XI=({className:r,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:g=!1,error:f,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=a((()=>s?W(s):"")),[$,C]=a((()=>s?W(s):"")),[S,k]=a([]),[D,T]=a(!0),[E,O]=a(!1),[F,_]=a(!!s),[I,M]=a(s),A=o(c),B=e=>ht(void 0,void 0,void 0,(function*(){O(!1),T(!0);try{const t=yield A.current(e);C(e),k(t),T(!1)}catch(e){O(!0)}})),j=p(bg((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{A.current=c}),[c]),u((()=>{x&&x.length>=l&&x!==$?j(x):j.cancel(),""===x&&I&&(y&&y(void 0,void 0),P(),M(void 0)),s&&x!==W(s)&&_(!1)}),[x,s]),u((()=>{w(s?W(s):""),P(s),M(s)}),[s]);const z=e=>{w(e.target.value)},R=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),_(!!e),k([]),T(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{F||I?(P(I),w(W(I)),y&&y(I,Y(I)),M(I)):L()},H=()=>!!x&&x.length>=l&&!F,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(f$,{type:"text",value:x,onChange:z,placeholder:d,readOnly:h,disabled:g,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<l?N:void 0});return t(Yp,{className:r,show:H(),error:f&&!H(),disabled:g,readOnly:h,testId:i,onBlur:N,children:[e(h?n:zp,{children:V()}),!h&&H()&&e(Lp,{}),e(fD,{listItems:S,onSelectItem:R,valueExtractor:m,listExtractor:b,itemsLoadState:E?"fail":D?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},KI=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,qI=_(u$)`
    position: absolute;
    right: 0;
    padding-left: ${pc["spacing-8"]};
    margin-right: 0;
`,GI=_(jp)`
    // space for clear icon
    padding-right: calc(1.25rem + ${pc["spacing-16"]});
`,ZI=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":g,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:T={from:"success",to:"success"},optionTruncationType:E="middle",renderCustomSelectedOption:O,renderListItem:F,renderCustomCallToAction:_}=n,I=ut(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=a(),[B,j]=a(),z=o(null),R={from:o(null),to:o(null)},[P,L]=a("none");u((()=>{A(null==r?void 0:r.from),j(null==r?void 0:r.to)}),[r]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const n="from"===e?M:B;if(!n)return"";if(w)return w(n);if(v){const e=v(n);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return n.toString()},W=(e,t)=>{if("middle"===E){let n=0;return R[e]&&R[e].current&&(n=R[e].current.getBoundingClientRect().width),ku.truncateOneLine(t,n,120,8)}return t},Y=e=>{!e&&k&&k(),e&&S&&S()},V=t=>{const n="from"===t?M:B;return n?O?O(n):e(Hp,{truncateType:E,children:W(t,H(t))}):e(Wp,{truncateType:E,children:W(t,i[t]||"")})},U=t=>e(Np,{onClick:N(t),ref:R[t],$disabled:l,children:V(t)});return t(Yp,{show:"none"!==P,error:h&&!("none"!==P),disabled:l,readOnly:d,testId:g,onBlur:()=>{Y(!1),L("none"),M&&B||(j(void 0),A(void 0))},className:c,children:[t(KI,{children:[e(GI,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:z,onClick:N()},I,{children:t(yf,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&M&&B&&!d&&!l&&e(qI,{onClick:e=>{e.stopPropagation(),A(void 0),j(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(h$,{"aria-hidden":!0})})]}),"none"!==P&&e(Lp,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const n="from"===P?M:B;return e(fD,{listItems:t,onSelectItem:(e,t)=>((e,t,n)=>{var r;"from"===n?A(e):j(e),Y(!1),z&&(null===(r=z.current)||void 0===r||r.focus()),$&&$({[n]:e},t),"from"===n?(j(void 0),L("to"),Y(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),Y(!1),z&&(null===(e=z.current)||void 0===e||e.focus()),M&&B||(j(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:f,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:n?[n]:[],onRetry:D,itemsLoadState:T[P],itemTruncationType:E,renderListItem:F,renderCustomCallToAction:_})}return null})()]})},QI=({selectedOption:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:D,hideNoResultsDisplay:T,noResultsDescription:E,renderCustomCallToAction:O,onBlur:F,variant:_="default",readOnly:I,alignment:M,dropdownZIndex:A})=>{const[B,j]=a(t),[z,R]=a(!1),[P,L]=a(!1),[N]=a((()=>Su.generate())),H=o(null),W=o(null),Y=o(null);u((()=>{j(t)}),[t]);const V=(e,t)=>{var n;null===(n=W.current)||void 0===n||n.focus(),j(e),R(!1),Z(!1),null==y||y(e,t)},U=()=>{z&&(R(!1),Z(!1))},X=()=>{P||z||L(!0)},K=e=>{P&&!z&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==F||F())},q=()=>{var e;if(!B)return"";if(v)return v(B);if(f){const t=f(B);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return B.toString()},G=e=>{if("middle"===S){let t=0;return Y&&Y.current&&(t=Y.current.getBoundingClientRect().width),ku.truncateOneLine(e,t,120,8)}return e},Z=e=>{e?null==x||x():null==w||w()};return e(jF,{children:e(qp,{enabled:!I&&!i,isOpen:z,renderElement:()=>e(cp,{className:l,"data-testid":c,id:d,ref:H,tabIndex:-1,onFocus:X,onBlur:K,$focused:P,$disabled:i,$readOnly:I,$error:s,children:e(c_,{ref:W,disabled:i,expanded:z,listboxId:N,popupRole:"listbox",readOnly:I,variant:_,children:e(Np,{ref:Y,$disabled:i,children:B?k?k(B):e(Hp,{truncateType:S,$variant:_,children:G(q())}):e(Wp,{truncateType:S,$variant:_,children:n})})})}),renderDropdown:({elementWidth:t})=>e(a_,{listboxId:N,listItems:r,onSelectItem:V,onDismiss:U,valueExtractor:f,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:g,selectedItems:B?[B]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:D,hideNoResultsDisplay:T,noResultsDescription:E,renderCustomCallToAction:O,variant:_,width:t}),onOpen:()=>{R(!0),Z(!0),L(!0)},onClose:e=>{R(!1),Z(!1),"click"!==e&&(L(!1),null==F||F())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),R(!1),Z(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A})})},JI=_.div`
    overflow: hidden;
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};
    padding: ${pc["spacing-16"]};
    min-width: 23rem;

    ${bc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${mc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${bc.MaxWidth.xs} {
        width: calc(100vw - ${mc["xs-margin"]} * 2);
    }

    ${bc.MaxWidth.xxs} {
        width: calc(100vw - ${mc["xxs-margin"]} * 2);
    }
`,eM=_.div`
    display: flex;
    align-items: baseline;
`,tM=_.div`
    margin: 0 0.5rem;
`,nM=_.div`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return I`
                    ${Tc(1)}
                `}}
    overflow: hidden;
`,rM=_(nM)`
    color: ${dc["text-subtler"]};
`,iM=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:g,onChange:p,onChangeEnd:f,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=n,C=ut(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:k=[],renderEmptyView:D,ariaLabels:T}=d,[E,O]=a(V()),[F,_]=a(!1),[I,M]=a(!1),[A]=a((()=>Su.generate())),B=k.map((e=>e.minValue)),j=Math.min(...B),z=o(null),R=o(null),P=o(null),L=C["data-testid"]||"select-histogram";u((()=>{$!==E&&O(V())}),[$]);const N=e=>{O(e),null==p||p(e)},H=e=>{O(e),null==f||f(e)},W=()=>{I||F||M(!0)},Y=e=>{I&&!F&&z.current&&!z.current.contains(e.relatedTarget)&&(M(!1),null==g||g())};function V(){return null!=$?$:[j,j+S]}const U=e=>w?w(e):t(_c.BodyBL,{children:[v,e,y]});return e(jF,{children:e(qp,{enabled:!x&&!s,isOpen:F,renderElement:()=>e(cp,{className:i,"data-testid":L,id:h,ref:z,tabIndex:-1,onFocus:W,onBlur:Y,$focused:I,$disabled:s,$readOnly:x,$error:c,children:e(c_,{ref:R,disabled:s,expanded:F,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default",children:e(Np,{ref:P,$disabled:s,children:B&&0!==B.length?t(eM,{children:[U(E[0]),e(tM,{children:"-"}),U(E[1])]}):e(rM,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t})=>e(JI,{style:{width:t},children:e(c$,{interval:S,value:E,bins:k,onChange:N,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:D,ariaLabels:T})}),onOpen:()=>{_(!0)},onClose:()=>{_(!1)},onDismiss:()=>{var e;null===(e=R.current)||void 0===e||e.focus(),_(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:l})})},oM=t=>{var{value:n,ariaLabel:r,onChange:i,onChangeEnd:o}=t,s=ut(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e(r$,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:r?[r]:void 0}))},aM=_.p`
    text-align: right;
    ${uc["body-sm-semibold"]}
    color: ${dc["text-subtler"]};
`,sM=({value:t,maxLength:r,renderCustomCounter:o})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,r]);const c=e=>{if(o)return o(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(n,{children:i.isValidElement(s)?s:e(aM,{"data-testid":"counter-label",children:s})})},lM=_.div`
    display: flex;
    flex-direction: column;
`,cM=_.textarea`
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${pc["spacing-12"]} ${pc["spacing-16"]};
    width: 100%;

    ${uc["body-baseline-regular"]}
    color: ${dc.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${gc["width-020"]} ${gc.solid}
            ${dc["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${dc["text-subtler"]};
    }

    ${e=>e.readOnly?I`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${dc["border-focus"]};
                }
            `:e.disabled?I`
                background: ${dc["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${dc["border-disabled"]};
                }
            `:e.$error?I`
                border-color: ${dc["border-error"]};

                :focus,
                :active {
                    outline-color: ${dc["border-error-focus"]};
                }
            `:void 0}
`,dM=i.forwardRef(((t,n)=>{var{value:r,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,g=ut(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,f]=a(r);u((()=>{f(r)}),[r]);return e(cM,Object.assign({ref:n,disabled:i,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(f(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;f(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l&&h?l.length+h:h},g))})),uM=i.forwardRef(((n,r)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:g}=n,p=ut(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,m]=a(i);u((()=>{m(i)}),[i]);return t(lM,{children:[e(dM,Object.assign({ref:r,disabled:o,value:f,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(sM,{value:f,maxLength:h,renderCustomCounter:g})]})})),hM=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${pc["spacing-4"]};
`,gM=_.div`
    display: flex;
    flex: 1;
    margin-right: ${pc["spacing-12"]};
`,pM=_(_w)`
    margin-top: 0;
`,fM=i.forwardRef(((r,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:g,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:D=""}=r,T=ut(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[E,O]=a(s);u((()=>{O(s)}),[s]);return t(Pw,{id:c,label:o,disabled:T.disabled,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(dM,Object.assign({id:`${c}-base`,"data-testid":h||c,value:E,error:!!l,onChange:e=>{const t=e.target.value;O(t),g&&g(e)},ref:i,prefix:D,transformValue:k},T)),l||T.maxLength?t(hM,{children:[l&&e(gM,{children:e(pM,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),T.maxLength&&e(sM,{value:E,maxLength:T.maxLength,renderCustomCounter:T.renderCustomCounter})]}):e(n,{})]})})),mM=_.div`
    position: relative;
`,bM=_(dp)`
    height: 3rem;
    gap: ${pc["spacing-8"]};
`,vM=_(up)`
    display: block;
    width: 100%;
    flex: 1;
`,yM=_.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?I`
                    color: ${dc["icon-selected-disabled"]};
                `:I`
                    color: ${dc["icon-disabled-subtle"]};
                `:e.$active?I`
                color: ${dc["icon-selected"]};
            `:I`
            color: ${dc["icon-subtle"]};
        `};
`,xM=I`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${uc.Spec["weight-regular"]};
        ${e=>e.$size&&uc[`${e.$size}-regular`]}
        color: ${dc.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,wM=_.ol`
    ${xM}

    margin-left: 3rem;

    ${bc.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,n=e.$counterType||"decimal",r=e.$counterSeparator||")";return I`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return I`
                counter-reset: list ${t?n+1:n-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,$M=_.ul`
    ${xM}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,CM=t=>{var{size:n,bulletType:r,bottomMargin:i,children:o}=t,a=ut(t,["size","bulletType","bottomMargin","children"]);return e($M,Object.assign({$size:n,$bulletType:r,$bottomMargin:i},a,{children:o}))};CM.displayName="TextList.Ul";const SM=t=>{var{size:n,counterType:r,counterSeparator:i,bottomMargin:o,children:a}=t,s=ut(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(wM,Object.assign({$size:n,$counterType:r,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};SM.displayName="TextList.Ol";const kM={Ul:CM,Ol:SM},DM=_.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${dc.bg};

    ${e=>{if(!e.$indicator)return I`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return I`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?I`
                            border-color: ${dc["border-error"]};
                        `:I`
                            border-color: ${dc["border-error"]};

                            &:has(${_M}:hover) {
                                background: ${dc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?I`
                            border: none;
                            background: ${dc["bg-selected-disabled"]};
                        `:I`
                            border: none;
                        `:e.$selected?I`
                        border: none;
                        background: ${dc["bg-selected"]};

                        &:has(${_M}:hover) {
                            background: ${dc["bg-selected-hover"]};

                            & ${EM} {
                                color: ${dc["text-selected-hover"]};
                            }

                            & ${LM} {
                                color: ${dc["icon-selected-hover"]};
                            }
                        }
                    `:I`
                    border: none;

                    &:has(${_M}:hover) {
                        background: ${dc["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?I`
                            border-color: ${dc["border-error"]};
                        `:I`
                            border-color: ${dc["border-error"]};

                            &:has(${_M}:hover) {
                                background: ${dc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?I`
                            border-color: ${dc["border-selected-disabled"]};
                            background: ${dc["bg-selected-disabled"]};
                        `:I`
                            border-color: ${dc["border-disabled"]};
                            background: ${dc["bg-disabled"]};
                        `:e.$selected?I`
                        border-color: ${dc["border-selected"]};
                        background: ${dc["bg-selected"]};

                        &:has(${_M}:hover) {
                            background: ${dc["bg-selected-hover"]};

                            & ${EM} {
                                color: ${dc["text-selected-hover"]};
                            }

                            & ${LM} {
                                color: ${dc["icon-selected-hover"]};
                            }
                        }
                    `:I`
                    border-color: ${dc.border};

                    &:has(${_M}:hover) {
                        background: ${dc["bg-hover-subtle"]};
                    }
                `}
`,TM=_.input`
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
`,EM=_.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?I`
                    color: ${dc["text-selected-disabled"]};
                `:I`
                    color: ${dc["text-disabled"]};
                `:e.$selected?I`
                color: ${dc["text-selected"]};
            `:I`
            color: ${dc.text};
        `}
`,OM=_.label`
    ${uc["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${bc.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${bc.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
`,FM=_.div`
    ${uc["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${uc["body-md-semibold"]}
    }
`,_M=_.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,IM=_.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,MM=_.button`
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
    white-space: nowrap;
    ${uc["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,AM=_.button`
    color: ${e=>e.disabled?dc["text-disabled"]:dc["text-primary"]};
    ${uc["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${dc.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,BM=_.div`
    width: 100%;
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
    border: none;
    background: ${dc.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,jM=_(Dd)`
    width: 100%;
    user-select: none;
`,zM=_.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${dc.bg};
    ${vd({textSize:"body-md"})}

    ${e=>e.$disabled?I`
                color: ${dc["text-disabled"]};
            `:e.$selected?I`
                color: ${dc["text-selected"]};
            `:I`
                color: ${dc.text};
            `}
`,RM=_(_c.BodyMD)`
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
`,PM=_(kM.Ul)`
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
`,LM=_((({type:t,active:n=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=e(n?Ue:Ye,{});break;case"radio":o=e(n?Ze:Ge,{});break;case"tick":o=e(Xe,{});break;case"cross":o=e(je,{});break;default:o=null}return e(yM,{className:i,$active:n,$disabled:r,children:o})}))`
    ${e=>e.$disabled?e.$selected?I`
                    color: ${dc["icon-selected-disabled"]};
                `:I`
                    color: ${dc["icon-disabled-subtle"]};
                `:e.$selected?I`
                color: ${dc["icon-selected"]};
            `:I`
            color: ${dc["icon-subtle"]};
        `};
`,NM=({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:g,error:p,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:D,children:T,initialExpanded:E}=y||{},[O,_]=a(s),[I,M]=a(!!E),A=m((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[B]=a(Su.generate()),j=b?`${b}`:`tg-${B}`,z=o(null);u((()=>{_(s)}),[s]),u((()=>{O&&M(null==E||E)}),[O]);const R=()=>{g||M(!I)},P=()=>{g||!w||w()},L=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e(LM,{type:t,active:O,disabled:g,$selected:O,$disabled:g})},N=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(FM,{"data-id":"toggle-sublabel",children:t})},H=r=>t(n,{children:[e(RM,{weight:"semibold",$disabled:g,children:"Error"}),e(PM,{$disabled:g,children:null==r?void 0:r.map(((t,n)=>e("li",{id:`${j}-error-list-item-${n}`,children:e(RM,{weight:"semibold",$disabled:g,children:t})},n)))})]});return t(DM,{$selected:O,$disabled:g,className:v,$styleType:l,$error:p,$indicator:i,$useContentWidth:S,id:b,"data-testid":$,children:[t(_M,{id:`${j}-header-container`,$disabled:g,$error:p,$selected:O,$indicator:i,$styleType:l,children:[t(IM,{$addPadding:x,children:[e(TM,{ref:z,name:f,id:`${j}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(C)return void C(e);switch(r){case"checkbox":_((e=>!e));break;case"radio":case"yes":case"no":O||_(!0)}}},checked:O}),i&&L(),t(EM,{$selected:O,$disabled:g,children:[e(OM,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:d,children:c}),h&&N()]})]}),x&&e(MM,{type:"button",$disabled:g,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),T&&t("div",{children:[(!k||I)&&e(zM,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:T}),k&&!I&&A&&e(BM,{$disabled:g,onClick:R,id:`${j}-error-alert`,children:e(jM,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(D)?H(D):D})}),k&&t(AM,{$paddingTopRequired:!I&&!A,disabled:g,onClick:R,"data-testid":I?"collapse-button":"expand-button",children:[I?"Show less":"Show more",e(I?F:fe,{"aria-hidden":!0})]})]})]})},HM=_(Yo.div)`
    position: absolute;
    top: calc(3rem + ${pc["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${bc.MaxWidth.xxs} {
        max-width: 100%;
    }
`,WM=_.div`
    position: relative;
    width: 100%;
    padding: ${pc["spacing-8"]} ${pc["spacing-20"]}
        ${pc["spacing-24"]} ${pc["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${dc.bg};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
`,YM=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${bc.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,VM=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${pc["spacing-16"]};
    gap: ${pc["spacing-8"]} ${pc["spacing-16"]};

    ${bc.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${pc["spacing-32"]};
    }
`,UM=_.div`
    display: flex;
    align-items: center;
    margin-right: ${pc["spacing-32"]};

    ${bc.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,XM=_.div`
    display: flex;
    gap: ${pc["spacing-8"]};

    ${bc.MaxWidth.lg} {
        flex-direction: column;
    }

    ${bc.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,KM=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${bc.MaxWidth.xxs} {
        width: 6rem;
    }
`,qM=_(Dc)`
    width: 5rem;
    padding: ${pc["spacing-16"]} 0;
    color: ${dc.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${dc["icon-hover"]};
    }
`,GM=_(_c.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,ZM=_(cp)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${bc.MaxWidth.xxs} {
        width: 100%;
    }
`,QM=_(up)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,JM=_(NM)`
    min-width: 5rem;
    flex: 1;
`,eA=_(hd.Small)`
    width: 7rem;

    ${bc.MaxWidth.sm} {
        flex: 1;
    }

    ${bc.MaxWidth.xxs} {
        width: 100%;
    }
`;var tA,nA,rA;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(tA||(tA={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(nA||(nA={})),function(e){e.AM="am",e.PM="pm"}(rA||(rA={}));const iA=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{var d;const h=wg.getTimeValues(s,r),[g,f]=a(h.hour),[m,b]=a(h.minute),[v,y]=a(h.period),x=o(null),w=o(null),$=un();u((()=>{if(i&&x.current&&x.current.focus(),i){const{hour:e,minute:t,period:n}=wg.getTimeValues(s,r);f(e),b(t),y(n)}}),[i,r,s]),u((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case tA.MINUTE_UP:b(wg.updateMinutes(m,"add"));break;case tA.MINUTE_DOWN:b(wg.updateMinutes(m,"minus"));break;case tA.HOUR_UP:f(wg.updateHours(g,"add"));break;case tA.HOUR_DOWN:f(wg.updateHours(g,"minus"))}}),[g,m]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case nA.HOUR:t.length<=2&&f(t);break;case nA.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case nA.HOUR:{const n=t>23||t<0?h.hour:wg.convertHourTo12HourFormat(e.target.value);f(n);break}case nA.MINUTE:{const n=t>59||t<0?h.minute:e.target.value;b(ku.padValue(n));break}}},E=e=>{switch(e.target.name){case rA.AM:y(xg.AM);break;case rA.PM:y(xg.PM)}},O=e=>n?`${n}-${e}`:e,_=Do({opacity:i?1:0,height:i?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(HM,{"data-testid":"animated-dropdown-wrapper",style:_,children:t(WM,{ref:$.ref,"data-testid":O("timepicker-dropdown"),inert:i?void 0:"",children:[t(YM,{children:[t(UM,{children:[t(KM,{children:[e(qM,{"aria-label":"increase hour",name:tA.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":O("hour-increment-button"),children:e(F,{})}),e(ZM,{children:e(QM,{"aria-label":"hour",type:"number",name:nA.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),e(qM,{"aria-label":"decrease hour",name:tA.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":O("hour-decrement-button"),children:e(fe,{})})]}),e(GM,{children:":"}),t(KM,{children:[e(qM,{"aria-label":"increase minute",name:tA.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":O("minute-increment-button"),children:e(F,{})}),e(ZM,{children:e(QM,{"aria-label":"minute",type:"number",name:nA.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:D,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),e(qM,{"aria-label":"decrease minute",name:tA.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":O("minute-decrement-button"),children:e(fe,{})})]})]}),t(XM,{children:[e(JM,{checked:v===xg.AM,name:rA.AM,type:"radio",onChange:E,"data-testid":O("am-toggle"),"aria-label":"AM",children:"AM"}),e(JM,{checked:v===xg.PM,name:rA.PM,type:"radio",onChange:E,"data-testid":O("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(VM,{children:[e(eA,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":O("cancel-button"),children:"Cancel"}),e(eA,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?wg.convertTo24HourFormat({hour:g,minute:m,period:v}):`${g}:${m}${v}`,l(e)},disabled:""===g||""===m,"data-testid":O("confirm-button"),children:"Done"})]})]})})},oA=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:g,onBlur:p}=n,f=ut(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),S=o(null);u((()=>{l&&(w(l.start),C(l.end))}),[l]),Tu("mousedown",(function(e){i||E(e)}),"document"),Tu("keyup",(function(e){if("Tab"===e.code)E(e)}),"document");const k=()=>{T()},D=()=>{m||v||g&&g()},T=()=>{b(!1),y(!1),p&&p()},E=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&T()};return e(mM,Object.assign({ref:S,id:r},f,{children:t(bM,{$disabled:i,$error:s,$readOnly:d,children:[t(yf,{error:s,currentActive:m?"start":v?"end":"none",children:[e(vM,{onFocus:()=>{i||d||m||(y(!1),b(!0),D())},readOnly:!0,placeholder:"From",value:wg.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(vM,{onFocus:()=>{i||d||v||(b(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:wg.formatDisplayValue($,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(iA,{id:r,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(iA,{id:r,show:v,value:$,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]})}))},aA=_(dp)`
    height: 3rem;
    gap: ${pc["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${pc["spacing-20"]});
`,sA=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=n,$=ut(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>Su.generate())),[S,k]=a(null),[D,T]=a(!1),[E,O]=a(""),[F,_]=a(""),[I,M]=a(""),[A,B]=a(""),[j,z]=a(""),R=o(null),P=o(null),L=o(null),N=m((()=>wg.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return N;const e=wg.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=p((e=>wg.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const n=null!==(e=W(l.start))&&void 0!==e?e:"",r=null!==(t=W(l.end))&&void 0!==t?t:"";_(n),M(r),B(n),z(r)}}),[l,W]),u((()=>{if(s)return void T(!1);const e=W(F),t=W(I);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&wg.to24Hour(t)<wg.to24Hour(e)))return O(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||T(!0));O("End time must be after start time")}T(!1)}),[F,I,W,s]);const Y=e=>{i||d||(S||D||null==g||g(),k(e),T(!0))},V=e=>{var t;i||d||(k(e),T(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?X(F):"end"===S&&(D&&K(I),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":q(F,I,{})}}const X=e=>{q(e,I,{goToNextInput:!0})},K=e=>{q(F,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,o,a;const s=null!==(i=W(e))&&void 0!==i?i:A,l=null!==(o=W(t))&&void 0!==o?o:j;_(s),M(l);s===A&&l===j||null==h||h({start:s,end:l}),n&&void 0!==W(e)&&(k("end"),null===(a=L.current)||void 0===a||a.select()),r&&(k(null),T(!1),null==f||f()),B(s),z(l)},G=e=>{e.stopPropagation(),_(""),M(""),B(""),z("");null==h||h({start:"",end:""}),k(null),T(!1)},Z=e=>{R.current&&!R.current.contains(e.relatedTarget)&&S&&!D&&q(F,I,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==F?void 0:F.length)>0||(null==I?void 0:I.length)>0))return e(qI,{onClick:G,type:"button","aria-label":"Clear",children:e(h$,{"aria-hidden":!0})})};return t(mM,Object.assign({id:r},$,{children:[e(jF,{children:e(qp,{enabled:!d&&!i,isOpen:D,renderElement:()=>t(aA,{ref:R,$disabled:i,$error:s||!!E,$readOnly:d,onBlur:Z,children:[t(yf,{error:s||!!E,currentActive:null===S?"none":S,children:[e(vM,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>_(e.target.value),value:F,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),e(vM,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),Q()]}),renderDropdown:()=>{if(D)return e(a_,"start"===S?{listItems:N,onSelectItem:X,selectedItems:[F],disableItemFocus:!0,topScrollItem:wg.findClosestFlooredTime(W(F),N),listboxId:C}:{listItems:H,onSelectItem:K,selectedItems:[I],disableItemFocus:!0,topScrollItem:wg.findClosestFlooredTime(W(I),H),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),T(!1),null==f||f()):q(F,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),T(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&E&&e(_w,{id:r?`${r}-error-message`:"error-message",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message",children:E})]}))},lA=t=>{var{variant:n="dial"}=t,r=ut(t,["variant"]);return e("combobox"===n?sA:oA,Object.assign({},r))};_.div`
    position: relative;
`;const cA=_(up)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,dA=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:g,onBlur:f}=n,m=ut(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o(null);Tu("mousedown",(function(e){i||s||$(e)}),"document"),Tu("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),g&&g())};const w=()=>{v(!1),f&&f()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(dp,Object.assign({ref:y,id:r,$readOnly:s,$disabled:i,$error:l},m,{children:[e(cA,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:wg.formatDisplayValue(c,u),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e(iA,{id:r,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},uA=_(ED)`
    margin-right: 0.5rem;
`,hA=_(f$)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,gA=_(hA)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,pA=_(_c.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return I`
                color: ${dc["text-disabled"]};
            `}}
`,fA=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,mA=_(_c.BodyBL)``,bA=r=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:g,readOnly:p,placeholder:f="00-8888",autoComplete:m}=r,b=ut(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,C]=a("none"),S=o(null),k=o(null),D=o(null),T=o(v),E=o(x),O=o($),F=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),_=Fu({ref:k,formatter:F}),I=Fu({ref:D,formatter:F}),M=e=>{T.current=e,y(e)},A=e=>{E.current=e,w(e)},B=e=>{O.current=e,C(e)};u((()=>{"floor"===$&&3===v.length&&D.current&&D.current.focus()}),[v]),u((()=>{N(l)}),[l]);const j=e=>{B(e.target.name),e.target.select()},z=e=>{const t=e.target.name,n=e.target.value,r=L(n);"floor"===t?(M(r),r!==v&&H(r,t)):"unit"===t&&(A(r),r!==x&&H(r,t))},R=e=>{const t=e.target.name;if("floor"===t){const e=_();if(!e)return;const{nextValue:n,updateCaretPosition:r}=e;r(),M(n),H(n,t)}else if("unit"===t){const e=I();if(!e)return;const{nextValue:n,updateCaretPosition:r}=e;r(),A(n),H(n,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=k.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?ku.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==vA)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];M("floor"===$?e:L(e)),A("unit"===$?n:L(n))}}},H=(e,t)=>{if(!c&&!h)return;const n={floor:T.current,unit:E.current};if(n[t]=e,c){const e=Y(n);c(e)}h&&h([n.floor,n.unit])},W=()=>{if(!d&&!g)return;const e={floor:L(T.current),unit:L(E.current)};if(d){const t=Y(e);d(t)}g&&g([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":vA},V=e=>e.split("-");return t(dp,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&k.current&&k.current.focus()},$disabled:i,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==O.current&&(B("none"),W())},children:[e(uA,{"data-testid":"addon",$disabled:i,$readOnly:p,children:"#"}),p&&l?(n=>{const r=n.split("-");return t(fA,{children:[e(mA,{children:r[0]}),e(pA,{children:"-"}),e(mA,{children:r[1]})]})})(l):t(n,{children:[e(hA,{name:"floor",maxLength:3,value:v,ref:k,onFocus:j,onBlur:z,onChange:R,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?V(f)[0]:"",autoComplete:m,styleType:"no-border"}),e(pA,{$inactive:0===v.length,children:"-"}),e(gA,{name:"unit",maxLength:5,value:x,ref:D,onFocus:j,onBlur:z,onChange:R,onKeyDown:P,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?V(f)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},vA="Invalid unit number",yA={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(sf,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Sf,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Cm,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(c$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:m$,InputGroup:_D,MaskedInput:XD,Label:Mw,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ut(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(CI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(TI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(DI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ut(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(QI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(iM,Object.assign({histogramSlider:v,error:!!r,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(oM,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(r$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=ut(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(ZI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s},y))})},Textarea:fM,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(dA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(lA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,o=ut(t,["id","data-error-testid","children"]);return e(Pw,Object.assign({id:n,"data-error-testid":r},o,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(bA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(YI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=ut(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Pw,{id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(XI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},v))})}},xA=_.li`
    display: flex;
    flex-direction: column;
    padding: ${pc["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
    }
`,wA=_.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${pc["spacing-16"]};
    width: 100%;
`,$A=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,CA=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${pc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,SA=_(_c.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${pc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${pc["spacing-8"]};
    }
`,kA=_(_c.BodyMD)``,DA=_.div`
    display: flex;
    ${bc.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return I`
                margin-left: calc(
                    96px + ${pc["spacing-32"]}
                ); // thumbnail width + right margin

                ${bc.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,TA=_(hd.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${pc["spacing-16"]};
    }

    ${bc.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${pc["spacing-16"]};
        }
    }
`,EA=({thumbnailImageDataUrl:n,"data-testid":r,renderReplaceButton:i,onReplaceClick:o})=>t(OA,{"data-testid":r,children:[e(FA,{"data-testid":r?`${r}-image`:void 0,src:n}),i&&e(_A,{type:"button",onClick:()=>{o&&o()},children:"Replace"})]}),OA=_.div`
    width: auto;
    margin-right: ${pc["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,FA=_(Km)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${fc.sm};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    object-fit: cover;

    ${bc.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,_A=_.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${pc["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${uc["body-md-semibold"]}
    color: ${dc["text-primary"]};

    :hover {
        color: ${dc["text-hover"]};
    }
`,IA=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:g,truncateText:p=!0,thumbnailImageDataUrl:f}=n,[m,b]=a(),[v,y]=a(""),x=o(null),w=o(null);u((()=>{b($(h))}),[i]),u((()=>{y(n.description||"")}),[n]);const $=e=>{if(!p)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return ku.truncateOneLine(e,t,t/2,t/2/8,16)};return t(xA,{"data-testid":`${d}-edit-display`,children:[t(wA,{children:[f&&e(EA,{thumbnailImageDataUrl:f}),t($A,{children:[t(CA,{ref:w,children:[e(SA,{weight:"semibold",children:m}),e(kA,{children:Xm.formatFileSizeDisplay(g)})]}),e(yA.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:r,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(DA,{$thumbnail:!!f,children:[e(TA,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&s(x.current.value.trim())},children:"Save"}),e(TA,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l,children:"Cancel"})]})]})},MA=_.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${pc["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?I`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?I`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?I`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,AA=_(et)`
    margin-right: ${pc["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${dc.icon};

    ${e=>e.$active?I`
                color: ${dc["icon-primary"]};
            `:e.$disabled?I`
                color: ${dc["icon-disabled"]};
            `:void 0};
`,BA=_.div`
    background: ${dc["bg-primary-subtlest"]};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.sm};
    padding: ${pc["spacing-16"]} ${pc["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${bc.MaxWidth.sm} {
        padding: ${pc["spacing-16"]};
    }

    ${e=>e.$focused?I`
                border-color: ${dc["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${dc["border-focus"]} r g b / 50%);
            `:e.$disabled?I`
                border-color: ${dc["border-disabled"]};
            `:e.$error?I`
                background: ${dc["bg-error"]};
                border-color: ${dc["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return I`
                ${bc.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,jA=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return I`
                ${bc.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,zA=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,RA=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,PA=_.div`
    display: flex;
    width: 5rem;
    margin-left: ${pc["spacing-8"]};
    justify-content: flex-end;

    ${bc.MaxWidth.sm} {
        ${e=>e.$hideInMobile?I`
                    display: none;
                    visibility: hidden;
                `:I`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${pc["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,LA=_(_c.BodyMD)``,NA=_(LA)`
    margin-top: ${pc["spacing-4"]};
`,HA=_(_c.BodySM)`
    color: ${dc["text-error"]};
`,WA=_(HA)`
    margin-top: ${pc["spacing-4"]};
    ${bc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,YA=_(HA)`
    display: none;
    visibility: hidden;
    ${bc.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${pc["spacing-8"]};
    }
`,VA=_.div`
    width: 6rem;
    margin-left: ${pc["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${bc.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?I`
                    margin-left: 0;
                    margin-top: ${pc["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?I`
                    margin-left: 0;
                    margin-top: ${pc["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,UA=_(cf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${pc["spacing-16"]};
    }
`,XA=_(Dc)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${dc.icon};
    }
`,KA=w((({fileItem:r,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:g})=>{const{id:p,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=r,[C,S]=a(),{activeId:k}=f(hb),{attributes:D,listeners:T,setNodeRef:E,transform:O,transition:F}=dw({id:p}),_=o(null),I={transform:dy.Translate.toString(O),transition:F},M=Object.assign(Object.assign({style:I},D),T),A=y<1,B=Xm.formatFileSizeDisplay(b),j=k?k===p?"self":"others":"none";u((()=>{S(L(m))}),[l]);const z=()=>{h()},R=()=>{g&&g()},P=e=>{s&&e.stopPropagation()},L=e=>{if(!$)return e;const t=_&&_.current?_.current.getBoundingClientRect().width:0;return ku.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>c||!!k,H=()=>!!s&&!d,W=()=>t(n,{children:[e(LA,{weight:v?"semibold":"regular",children:C}),v&&e(NA,{children:v})]});return t(MA,Object.assign({id:p,ref:E,$sortable:H(),$disabled:N(),$focusType:j},H()?M:{},{children:[H()&&e(AA,{"data-testid":`${p}-drag-handle`,$disabled:N(),$active:"self"===j}),t(BA,{$focused:"self"===j,$error:!!x,$loading:A,$disabled:N(),$editable:i,children:[(()=>{let r;return r=x?t(n,{children:[t(zA,{ref:_,children:[W(),x&&e(WA,{weight:"semibold",children:x})]}),e(PA,{children:e(LA,{children:B})}),x&&e(YA,{weight:"semibold",children:x})]}):w?(r=>t(n,{children:[e(EA,{thumbnailImageDataUrl:r,"data-testid":`${p}-thumbnail`}),t(RA,{children:[e(zA,{ref:_,children:W()}),e(PA,{children:e(LA,{children:B})})]})]}))(w):t(n,{children:[e(zA,{ref:_,children:W()}),e(PA,{$hideInMobile:A,children:e(LA,{children:B})})]}),e(jA,{$hasThumbnail:!!w,children:r})})(),!d&&(()=>{let r;return r=x?e(XA,{onClick:z,"data-testid":`${p}-error-delete-button`,"aria-label":`delete-${m}`,children:e(je,{"aria-hidden":!0})}):A?e(qf,{progress:y,"data-testid":`${p}-progress-bar`}):t(n,{children:[i&&e(UA,{"data-testid":`${p}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:N(),onClick:R,onKeyDown:P,children:e(Je,{"aria-hidden":!0})},"edit"),e(UA,{"data-testid":`${p}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:N(),onClick:z,onKeyDown:P,children:e(Qe,{"aria-hidden":!0})},"delete")]}),e(VA,{$editable:i,$error:!!x,$loading:A,children:r})})()]})]}))})),qA=_.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":pc["spacing-32"]};
`,GA=_.li`
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};

    :not(:last-child) {
        margin-bottom: ${pc["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${pc["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,ZA=({fileItems:t,editableFileItems:n,fileDescriptionMaxLength:r,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[g,p]=a({}),{setActiveId:b}=f(hb),{width:v=0,ref:y}=un(),x=o({}),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>[...t].filter((e=>null!=e))),[...t])}($y(fw,{activationConstraint:{distance:8}}),$y(fx,{activationConstraint:{delay:150,tolerance:5}}),$y(ox,{coordinateGetter:gw})),$=e=>{delete x.current[e]};u((()=>{p(I(t))}),[t]);const C=e=>t=>{M(e.id,"display"),$(e.id);const n=Object.assign(Object.assign({},e),{description:t});c(n)},S=e=>t=>{x.current[e.id]=t},k=e=>()=>{e.description&&0!==e.description.length?M(e.id,"display"):d(e),$(e.id)},D=e=>()=>{M(e.id,"edit")},T=e=>()=>{d(e)},E=e=>{if(h&&t){const{active:n,over:r}=e;if(r&&n.id!==r.id){const e=t.findIndex((e=>e.id===n.id)),i=t.findIndex((e=>e.id===r.id)),o=qx(t,e,i);h(o)}}b(void 0)},O=e=>{const{active:t}=e;b(t.id)},F=e=>n&&Xm.isSupportedImageType(e.type),_=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&F(e)&&!e.description,I=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":g[n.id]?t[n.id]=g[n.id]:t[n.id]=_(n)?"edit":"display";return t},M=(e,t)=>{p((n=>Object.assign(Object.assign({},n),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(g).every((e=>"display"===e)),B=()=>{const n=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(t,g);return 0===n.length?null:n.map(((t,n)=>Array.isArray(t)?((t,n)=>{const i=t.map((t=>{const n=Object.assign({},t);return void 0!==x.current[t.id]&&(n.description=x.current[t.id]),e(IA,{fileItem:n,wrapperWidth:v,fileDescriptionMaxLength:r,onSave:C(t),onCancel:k(t),onBlur:S(t)},t.id)}));return e(GA,{children:e("ul",{children:i})},`editable-${n}`)})(t,n):e(KA,{fileItem:t,editable:F(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:T(t),onEditClick:D(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(qA,{$readOnly:l,ref:y,children:B()}):e(Yx,{sensors:w,onDragEnd:E,onDragStart:O,children:e(rw,{items:t,strategy:ew,children:e(qA,{$readOnly:l,ref:y,children:B()})})}):null},QA=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${pc["spacing-32"]};
    gap: ${pc["spacing-8"]};
`,JA=_(_c.BodyBL)``,eB=_.div`
    color: ${dc.text};
    ${vd({textSize:"body-baseline"})}
`,tB=_(_c.BodyMD)`
    color: ${dc["text-subtler"]};
`,nB=_.div`
    color: ${dc.text};
    ${vd({textSize:"body-md"})}
`,rB=_(Dd)`
    margin-bottom: ${pc["spacing-32"]};
`,iB=_.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${bc.MaxWidth.sm} {
        align-items: flex-start;
    }
`,oB=_(hd.Small)`
    width: 10rem;

    ${bc.MaxWidth.sm} {
        width: 100%;
    }
`,aB=_.label`
    ${uc["body-md-semibold"]}
    color: ${dc["text-subtler"]};
    margin-top: ${pc["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${bc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,sB=_(Dd)`
    margin-bottom: ${pc["spacing-32"]};
`,lB=({styleType:n="bordered",fileItems:r,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":g,accept:p,capture:f,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:k,onSort:D})=>{const T=o(null),[E,O]=a(),F=()=>!(!l||!r)&&r.length>=l;return e(hb.Provider,{value:{activeId:E,setActiveId:O},children:t(Hv,{ref:T,onChange:e=>{!b&&C&&C(e)},id:h?`${h}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===n,className:d,"data-testid":g,name:u,multiple:m,disabled:b||F()||$,children:[!(!i&&!s)&&t(QA,{children:[i?e("string"==typeof i?JA:eB,{children:i}):null,s?e("string"==typeof s?tB:nB,{children:s}):null]}),!!c&&e(rB,{type:"warning",children:c}),e(ZA,{fileItems:r,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{k&&k(e)},onSort:e=>{D&&D(e)}}),w&&e(sB,{type:"error",children:w}),!$&&t(iB,{children:[e(oB,{type:"button",styleType:"secondary",disabled:!!E||b||F(),onClick:e=>{b||(e.preventDefault(),T.current&&T.current.openFileDialog())},children:"Upload files"}),e(aB,{children:"or drop them here"})]})]})})},cB=i.createContext({mode:"default",rootNode:{current:null}});var dB=Uo((function(e){return null==e}));const uB=_.div`
    background-color: ${e=>e.$collapsible?dc["bg-strong"]:dc.bg};
    ${bc.MaxWidth.lg} {
        background-color: ${dc["bg-strong"]};
    }
`,hB=_.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${dc.border};

    ${bc.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${pc["spacing-16"]};
    }
`,gB=_.div`
    display: flex;
    align-items: center;

    background-color: ${dc.bg};

    ${bc.MaxWidth.lg} {
        background-color: transparent;
    }
`,pB=_(Dc)`
    margin: 0 0 0 auto;

    color: ${dc.icon};
    &:hover {
        color: ${dc["icon-hover"]};
    }
`,fB=_(fe)`
    height: ${uc.Spec["body-size-baseline"]};
    width: ${uc.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hc["duration-350"]} ${hc["ease-standard"]};
`,mB=_.p`
    ${uc["heading-xs-semibold"]}
    color: ${dc.text};

    margin: ${pc["spacing-24"]} 0 ${pc["spacing-24"]}
        ${pc["spacing-20"]};

    ${bc.MaxWidth.lg} {
        ${uc["body-md-semibold"]}
        color: ${dc["text-subtle"]};

        margin: ${pc["spacing-24"]} ${pc["spacing-20"]} 0
            ${pc["spacing-20"]};
    }
`,bB=_(Yo.div)`
    overflow: hidden;
`,vB=_.div`
    padding: ${pc["spacing-24"]} ${pc["spacing-20"]};
`,yB=_(Yo.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,xB=_(hd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${pc["spacing-16"]} 0 0 0;
`,wB=n=>{var r,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:l,minimisable:c=!1,minimisedHeight:d,showDivider:h=!0,showMobileDivider:g=!0,title:p,addon:m,children:b}=n,v=ut(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:y,rootNode:x}=f(cB),w="mobile"===y,[$,C]=a(_()),[S,k]=a(c),D=!w&&i,T=un(),E=un(),O=Do({height:$?T.height:0}),F=S?null!=d?d:Math.min(.5*(null!==(r=E.height)&&void 0!==r?r:0),216):E.height;u((()=>{C(_())}),[i,s]);function _(){return!!w||(dB(s)?!i||o:s)}return t(uB,{$collapsible:D,children:[e(hB,{$showDivider:h,$showMobileDivider:g}),(p||D)&&t(gB,{children:[p&&t(mB,{children:[p," ",m&&("popover"===(null==m?void 0:m.type)?e(Ow,{addon:m,rootNode:w?x:void 0}):null)]}),D&&e(pB,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;dB(s)&&C(e),l&&l(e)},"aria-label":$?"Collapse":"Expand",children:e(fB,{$expanded:$})})]}),e(bB,{"data-testid":"expandable-container","data-expanded":$,style:O,children:e("div",{ref:T.ref,children:t(vB,Object.assign({},v,{children:[e(yB,{"data-testid":"minimisable-container",$height:F,$minimisable:c,children:e("div",{ref:E.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof b?b(y,{minimised:S}):b})})}),c&&t(xB,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)},children:["View ",S?"more":"less"]})]}))})})]})};wB.displayName="Filter.Item";const $B=_(wB)`
    padding: 0 0 ${pc["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${pc["spacing-8"]} ${pc["spacing-8"]} 0;

        ${bc.MaxWidth.lg} {
            padding: ${pc["spacing-16"]} ${pc["spacing-20"]}
                ${pc["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${pc["spacing-8"]} ${pc["spacing-20"]} 0;
    }
`,CB=_.div`
    display: flex;
    flex-direction: column;

    ${bc.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${pc["spacing-16"]};
    }
`,SB=_.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${pc["spacing-8"]} ${pc["spacing-12"]};

    cursor: pointer;
    ${uc["body-md-regular"]}
    color: ${dc.text};
    ${e=>e.$selected&&I`
            color: ${dc["text-selected"]};
        `}

    ${bc.MaxWidth.lg} {
        padding: ${pc["spacing-8"]};
    }
`,kB=_(Qh)`
    flex-shrink: 0;
    margin-right: ${pc["spacing-8"]};
`,DB=_(NM)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,TB=_(hd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${pc["spacing-16"]} 0 ${pc["spacing-8"]}
        ${pc["spacing-12"]};

    ${bc.MaxWidth.lg} {
        margin: 0 0 ${pc["spacing-16"]} 0;
    }
`,EB=r=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=r,g=ut(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=f(cB),[b,v]=a(i||[]),[y,x]=a(),[w,$]=a(s.length),C=o(null),S=o(null),k=e=>()=>{const t=[...b],n=b.findIndex((t=>E(t)===E(e)));n>=0?t.splice(n,1):t.push(e),v(t),null==l||l(t)},D=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},T=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},E=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},O=p((()=>{if(!C.current)return void x(void 0);const e=Array.from(C.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}$(t),x(n>2?r-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():O()}),[s]),un({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:C,onResize:O});return e($B,Object.assign({minimisable:s.length>5,minimisedHeight:y},g,{children:(r,{minimised:i})=>t(n,{children:[s.length<3?null:e(TB,{styleType:"link",type:"button",onClick:D,children:b.length?"Clear all":"Select all"}),e(CB,{role:"group","aria-label":g.title,ref:C,children:s.map(((n,o)=>"default"===r?((n,r,i)=>{const o=T(n),a=E(n),s=!!b.find((e=>E(e)===a));return t(SB,{$visible:!i||r<5,$selected:s,ref:4===r?S:void 0,children:[e(kB,{displaySize:"small",checked:s,onChange:k(n)}),o]},a)})(n,o,i):((t,n,r)=>{const i=T(t),o=E(t),a=!!b.find((e=>E(e)===o));return e(DB,{type:"checkbox",checked:a,$visible:!r||!!y&&n<=w,onChange:k(t),useContentWidth:h,children:i},o)})(n,o,i)))})]})}))};EB.displayName="Filter.Checkbox";const OB=_.div`
    background-color: ${dc.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,FB=_.div`
    background-color: ${dc.bg};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-radius: ${fc.md};
    overflow: hidden;
    width: 100%;
`,_B=_.div`
    background-color: ${dc["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,IB=_.div`
    background-color: ${dc.bg};
    height: 100%;
    width: 100%;
`,MB=_.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,AB=_.div`
    display: flex;
    align-items: center;

    background-color: ${dc.bg};

    ${bc.MaxWidth.lg} {
        border-bottom: ${gc["width-010"]} ${gc.solid}
            ${dc.border};
    }
`,BB=_(_c.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${pc["spacing-24"]} 0 ${pc["spacing-24"]}
        ${pc["spacing-20"]};

    ${bc.MaxWidth.lg} {
        text-align: center;
        margin: ${pc["spacing-24"]} 0;
    }
`,jB=_(Dc)`
    padding: ${pc["spacing-24"]} ${pc["spacing-20"]};
    margin-right: auto;
    color: ${dc.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${dc["icon-hover"]};
    }
`,zB=_(hd.Small)`
    background-color: transparent;
    padding-right: ${pc["spacing-20"]};
    padding-left: ${pc["spacing-20"]};
    height: 100%;

    ${bc.MaxWidth.lg} {
        padding: ${pc["spacing-24"]} ${pc["spacing-20"]};
    }
`,RB=_(Yu.Default)`
    width: 100%;
`,PB=_.div`
    padding: ${pc["spacing-24"]} ${pc["spacing-20"]};
    background-color: ${dc.bg};
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};
`,LB=_(hd.Default)`
    width: 100%;
`,NB=({onDismiss:n,onDone:r,children:i})=>t(OB,{children:[e(jB,{onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(be,{})}),e(MB,{children:i}),e(PB,{children:e(LB,{onClick:r,type:"button",children:"Done"})})]});NB.displayName="Filter.Page";const HB=r=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:g,children:p}=r,f=ut(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=A(),w=mc["lg-max"]({theme:x}),$=Hd.useMediaQuery({maxWidth:w});u((()=>{$||S()}),[$]);const C=()=>{b(!0)},S=()=>{b(!1),h&&h()},k=()=>{b(!1),g&&g()},D=()=>{d&&d()},T=e=>"function"==typeof p?p(e):p,E=n=>t(AB,{children:["mobile"===n&&e(jB,{onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(J,{})}),e(BB,{weight:"semibold",children:l}),e(zB,{styleType:"link",type:"button",onClick:D,disabled:c,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(cB.Provider,$?{value:{mode:"mobile",rootNode:v},children:t(n,{children:[e(RB,{"data-testid":"filter-show-button",styleType:s,onClick:C,type:"button",icon:e(ee,{}),children:i}),e(Lf,{show:m,disableTransition:!0,children:e(IB,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(_B,{ref:v,children:[E("mobile"),e(MB,{children:T("mobile")}),e(PB,{children:e(LB,{onClick:k,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:y},children:t(FB,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y,children:[E("default"),T("default")]})})}))};HB.displayName="Filter";const WB=Object.assign(HB,{Item:wB,Page:NB,Checkbox:EB}),YB=_.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${bc.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,VB=_(_c.BodyMD)`
    margin-bottom: ${pc["spacing-16"]};
`,UB=_.div`
    display: flex;
    align-items: flex-start;
`,XB=_.a`
    &:not(:last-child) {
        margin-right: ${pc["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${bc.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${pc["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,KB=()=>t(YB,{"data-testid":"download-app-section",children:[e(VB,{weight:"semibold",children:"Download the app"}),t(UB,{children:[e(XB,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(XB,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),qB={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},GB={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},ZB={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var QB;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${iu(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return GB;case"mylegacy":return ZB;default:return qB}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(QB||(QB={}));const JB=_.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?I`
                padding: 0 ${mc["xxl-margin"]}px;
            `:I`
                padding: 0 ${mc["xxl-margin"]}px;
                max-width: 1440px;

                ${bc.MaxWidth.xl} {
                    padding: 0 ${mc["xl-margin"]}px;
                }

                ${bc.MaxWidth.lg} {
                    padding: 0 ${mc["lg-margin"]}px;
                }

                ${bc.MaxWidth.md} {
                    padding: 0 ${mc["md-margin"]}px;
                }

                ${bc.MaxWidth.sm} {
                    padding: 0 ${mc["sm-margin"]}px;
                }

                ${bc.MaxWidth.xs} {
                    padding: 0 ${mc["xs-margin"]}px;
                }

                ${bc.MaxWidth.xxs} {
                    padding: 0 ${mc["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return I`
                    column-gap: ${mc["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${mc["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${bc.MaxWidth.xl} {
                        column-gap: ${mc["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${mc["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${bc.MaxWidth.lg} {
                        column-gap: ${mc["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${mc["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${bc.MaxWidth.md} {
                        column-gap: ${mc["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${mc["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${bc.MaxWidth.sm} {
                        column-gap: ${mc["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${mc["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${bc.MaxWidth.xs} {
                        column-gap: ${mc["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${mc["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${bc.MaxWidth.xxs} {
                        column-gap: ${mc["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${mc["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return I`
                    display: flex;
                    flex-direction: column;
                `;default:return I`
                    display: flex;
                `}}}
`,ej=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=ut(t,["children","data-testid","type","stretch"]);return e(JB,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),tj=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=ut(t,["children","data-testid","stretch"]);return e(nj,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),nj=_.section`
    display: block;
    position: relative;
`,rj=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=ut(t,["children","data-testid","className","type","stretch"]);return e(tj,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(ej,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:r})}))})),ij={Section:tj,Container:ej,Content:rj,ColDiv:Df},oj=_.footer`
    background: ${dc["bg-strong"]};
`,aj=_(_c.LinkSM)`
    color: ${dc.text};
`,sj=_(jf)`
    width: 100%;
`,lj=_(ij.Content)`
    padding: ${pc["spacing-64"]} 0;

    ${bc.MaxWidth.lg} {
        padding: ${pc["spacing-32"]} 0;
    }
`,cj=_.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${bc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${pc["spacing-32"]};
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${pc["spacing-32"]};
    }
`,dj=_.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${pc["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${bc.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${bc.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,uj=_.div`
    grid-column: 13 / span 6;

    ${bc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${pc["spacing-32"]};
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,hj=_(ij.Content)`
    padding: ${pc["spacing-20"]} 0;

    ${bc.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${pc["spacing-16"]} 0;
    }
`,gj=_.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${pc["spacing-16"]};
    }

    ${bc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,pj=_(gj)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${bc.MaxWidth.lg} {
        margin-top: ${pc["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,fj=_(_c.LinkXS)`
    color: ${dc.text};
    &:not(:last-child) {
        margin-right: ${pc["spacing-16"]};
    }

    svg {
        color: ${dc.icon};
    }

    &:hover {
        color: ${dc["text-subtler"]};
        svg {
            color: ${dc["icon-subtle"]};
        }
    }

    ${bc.MaxWidth.lg} {
        margin-bottom: ${pc["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${bc.MaxWidth.lg} {
        margin-bottom: ${pc["spacing-8"]};
    }
`,mj=r=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=r,g=ut(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,f=A(),m=t=>t.map(((t,n)=>{const r=ut(t,["data-options"]);return e("li",{children:e(aj,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},n)}));return t(oj,Object.assign({},g,{children:[(()=>{let r=null;return i||((o||l)&&(r=t(n,{children:[e(cj,{"data-testid":"logo-section",children:e("img",{src:c||QB.getFooterLogo(null==f?void 0:f.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==o?void 0:o[0])&&e(dj,{"data-testid":"link-col-1",children:m(o[0])},"link-col-1"),(null==o?void 0:o[1])&&e(dj,{"data-testid":"link-col-2",children:m(o[1])},"link-col-2"),l&&e(uj,{children:e(KB,{})})]})),r?t(n,{children:[e(lj,{type:"grid",stretch:p,children:r}),e(sj,{})]}):null)})(),t(hj,{type:"grid",stretch:p,children:[e(gj,{children:(()=>{const t=QB.getDisclaimerLinks(null==f?void 0:f.resourceScheme,s);return Object.keys(t).map((n=>e(fj,Object.assign({},t[n]),n)))})()},"disclaimer"),e(pj,{children:e(_c.BodyXS,{"data-testid":"copyright-text",children:d||t(n,{children:["©"," ",QB.getCopyrightInfo(a,null==f?void 0:f.resourceScheme)]})})},"copyright")]})]}))};var bj=function(e,t){return Number(e.toFixed(t))},vj=function(e,t,n){n&&"function"==typeof n&&n(e,t)},yj={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},xj=function(e){"number"==typeof e&&cancelAnimationFrame(e)},wj=function(e){e.mounted&&(xj(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function $j(e,t,n,r){if(e.mounted){var i=(new Date).getTime();wj(e),e.animation=function(){if(!e.mounted)return xj(e.animation);var o=(new Date).getTime()-i,a=(0,yj[t])(o/n);o>=n?(r(1),e.animation=null):e.animation&&(r(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function Cj(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===n?o(t.scale,t.positionX,t.positionY):$j(e,r,n,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var Sj=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var o=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*n,a=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:o,newDiffWidth:r-o,newContentHeight:a,newDiffHeight:i-a}}(n,r,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,n,r,i,o,a){var s=e>t?n*(a?1:.5):0,l=r>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},kj=function(e,t,n,r){return bj(r?e<t?t:e>n?n:e:e,2)},Dj=function(e,t){var n=Sj(e,t);return e.bounds=n,n};function Tj(e,t,n,r,i,o,a){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:kj(e,s-u,c+u,r),y:kj(t,l-h,d+h,r)}}function Ej(e,t,n,r,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):Tj(l-t*d,c-n*d,i,o,0,0,null)}function Oj(e,t,n,r,i){var o=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=o?o:e}var Fj=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(r&&o&&a)&&!lz(o,n)},_j=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function Ij(e,t,n,r,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||n!==u)){var h=Tj(t,n,s,o,r,i,a),g=h.x,p=h.y;e.setTransformState(c,g,p)}}var Mj=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,o=n.disablePadding;return t>0&&r>=i&&!o?t:0};function Aj(e,t,n,r,i,o,a,s,l,c){if(i){var d;if(t>a&&n>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&n<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return r?t:kj(e,o,a,i)}function Bj(e,t){var n=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&r&&!t)}(e);if(n){var r=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(r&&i&&a){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),d=t.x-r.x,u=t.y-r.y,h=d/c,g=u/c,p=l-i,f=d*d+u*u,m=Math.sqrt(f)/p;e.velocity={velocityX:h,velocityY:g,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function jj(e,t){var n=e.transformState.scale;wj(e),Dj(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,o=r.positionY;if(e.isPanning=!0,1===n.length){var a=n[0].clientX,s=n[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-r,y:a-i}}(e,t)}function zj(e){var t=e.transformState.scale,n=e.setup,r=n.minScale,i=n.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<r||!a&&!s)){var d=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,g=d.maxPositionY,p=d.minPositionY,f=n>u||n<h,m=r>g||r<p,b=Ej(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>g?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:f?v:n,positionY:m?y:r}}}(e);d&&Cj(e,d,l,c)}}function Rj(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:a?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=Mj(e,o),u=Mj(e,a);Bj(e,{x:l,y:c}),Ij(e,l,c,d,u)}}function Pj(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==r?void 0:r.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!n||!r)}(e);if(o&&t&&n&&i){var a=t.velocityX,s=t.velocityY,l=t.total,c=n.maxPositionX,d=n.minPositionX,u=n.maxPositionY,h=n.minPositionY,g=r.limitToBounds,p=r.alignmentAnimation,f=r.zoomAnimation,m=r.panning,b=m.lockAxisY,v=m.lockAxisX,y=f.animationType,x=p.sizeX,w=p.sizeY,$=p.velocityAlignmentTime,C=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,o=n.sensitivity;return r?i*t*o:i}(e,l),S=Math.max(C,$),k=Mj(e,x),D=Mj(e,w),T=k*i.offsetWidth/100,E=D*i.offsetHeight/100,O=c+T,F=d-T,_=u+E,I=h-E,M=e.transformState,A=(new Date).getTime();$j(e,y,S,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,o=n.positionY,l=((new Date).getTime()-A)/$,f=1-(0,yj[p.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=Aj(y,M.positionX,i,v,g,d,c,F,O,f),C=Aj(x,M.positionY,o,b,g,h,u,I,_,f);i===y&&o===x||e.setTransformState(r,w,C)}))}}(e):zj(e)}}function Lj(e,t,n,r){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=Oj(bj(t,2),o,a,0,!1),c=Ej(e,n,r,l,Dj(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function Nj(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||r>=a;if((r>=1||s)&&zj(e),!h&&i&&e.mounted){var g=Lj(e,a,t||i.offsetWidth/2,n||i.offsetHeight/2);g&&Cj(e,g,d,u)}}var Hj=function(){return Hj=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Hj.apply(this,arguments)};function Wj(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var Yj=1,Vj=0,Uj=0,Xj={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Kj=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:Yj,scale:null!==(n=e.initialScale)&&void 0!==n?n:Yj,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:Vj,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:Uj}},qj=function(e){var t=Hj({},Xj);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==Xj[n]&&r){var i=Object.prototype.toString.call(Xj[n]),o="[object Object]"===i,a="[object Array]"===i;t[n]=o?Hj(Hj({},Xj[n]),e[n]):a?Wj(Wj([],Xj[n],!0),e[n],!0):e[n]}})),t},Gj=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return Oj(bj(u,3),s,a,d,!1)};function Zj(e,t,n,r,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=Lj(e,Gj(e,t,n),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");Cj(e,h,r,i)}function Qj(e,t,n,r){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=Kj(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=Sj(e,s.scale),g=Tj(s.positionX,s.positionY,h,a,0,0,o),p={scale:s.scale,positionX:g.x,positionY:g.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),Cj(e,p,t,n))}}var Jj=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),Zj(e,1,t,n,r)}},ez=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),Zj(e,-1,t,n,r)}},tz=function(e){return function(t,n,r,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};Cj(e,h,i,o)}}},nz=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),Qj(e,t,n)}},rz=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=dz(t||i.scale,o,a);Cj(e,s,n,r)}}},iz=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),wj(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!r||!i)return o;var d=r.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,n,r){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=n.getBoundingClientRect(),s=o.x*r.scale,l=o.y*r.scale;return{x:(i.x-a.x+s)/r.scale,y:(i.y-a.y+l)/r.scale}}(t,r,i,o),g=h.x,p=h.y,f=u.width/o.scale,m=u.height/o.scale,b=r.offsetWidth/f,v=r.offsetHeight/m,y=Oj(n||Math.min(b,v),l,c,0,!1),x=(d.width-f*y)/2,w=(d.height-m*y)/2,$=Tj((d.left-g)*y+x,(d.top-p)*y+w,Sj(e,y),s,0,0,r);return{positionX:$.x,positionY:$.y,scale:y}}(e,a,n);Cj(e,s,r,i)}}},oz=function(e){return{instance:e,zoomIn:Jj(e),zoomOut:ez(e),setTransform:tz(e),resetTransform:nz(e),centerView:rz(e),zoomToElement:iz(e)}},az=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,oz(e)),t};function sz(){try{return{get passive(){return!1}}}catch(e){return!1}}var lz=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},cz=function(e){e&&clearTimeout(e)},dz=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function uz(e,t,n){var r=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-r.left)/n,o=(e.clientY-r.top)/n;else{var a=e.touches[0];i=(a.clientX-r.left)/n,o=(a.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var hz=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},gz=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,g=a.smooth,p=d.size,f=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,g=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*n;if(i)return p;var f=!r&&!g;return Oj(bj(p,3),c,l,h,f&&!u)}(e,v,g?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=Dj(e,y),w=uz(t,o,s),$=l&&(f||0===p||c||h),C=Ej(e,w.x,w.y,y,x,$),S=C.x,k=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),vj(az(e),t,r),vj(az(e),t,i)}},pz=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;cz(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(Nj(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!n&&(r<o||r>a||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(cz(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,vj(az(e),t,r),vj(az(e),t,i))}),160))},fz=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==r&&n){var u=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,o=bj(i[0].clientX-r.left,5),a=bj(i[0].clientY-r.top,5);return{x:(o+bj(i[1].clientX-r.left,5))/2/t,y:(a+bj(i[1].clientY-r.top,5))/2/t}}(t,i,n);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=hz(t),g=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:Oj(bj(t/r*n,2),a,o,c,!d&&!l)}(e,h);if(g!==i){var p=Dj(e,g),f=a&&(c||0===d||s),m=Ej(e,u.x,u.y,g,p,f),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(g,b,v)}}}},mz=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;cz(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,vj(az(e),t,n)}),r)};function bz(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,h=d.mode,g=d.step,p=d.animationTime,f=d.animationType;if(!u&&!r){if("reset"===h)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;vj(az(e),t,r),Qj(e,a,s,(function(){return vj(az(e),t,i)})),mz(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=Gj(e,m,g);if(a!==b){vj(az(e),t,l);var v=uz(t,o,a),y=Lj(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");vj(az(e),t,c),Cj(e,y,p,f),mz(e,t)}}}var vz=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,Dj(t,t.transformState.scale),t.setup=qj(e)},this.initializeWindowEvents=function(){var e,n,r=sz(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==o||o.addEventListener("mousedown",t.onPanningStart,r),null==o||o.addEventListener("mousemove",t.onPanning,r),null==o||o.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==o||o.addEventListener("keyup",t.setKeyUnPressed,r),null==o||o.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=sz(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,r),null==o||o.removeEventListener("mousemove",t.onPanning,r),null==o||o.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,r),null==o||o.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),wj(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=sz();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(az(t))})),n&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n,r=e.offsetWidth,i=e.offsetHeight;(r>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(az(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,o=n.touchPadDisabled,a=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||o&&t.ctrlKey||lz(c,a))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(wj(e),vj(az(e),t,r),vj(az(e),t,i))}(t,e),gz(t,e),pz(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,o=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,g=t.setup.alignmentAnimation,p=g.sizeX,f=g.sizeY,m=Mj(t,p),b=Mj(t,f);u===s&&h===l||Ij(t,u,h,m,b)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||Fj(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),wj(t),jj(t,e),vj(az(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||_j(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),Rj(t,e.clientX,e.clientY),vj(az(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(Pj(t),vj(az(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,o=r.onZoomStart;if(!n){var a=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,o=e.isInitialized,a=t.target;return!(!o||r||!a||lz(a,i))}(t,e);a&&(function(e,t){var n=hz(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,wj(e)}(t,e),wj(t),vj(az(t),e,i),vj(az(t),e,o))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,o=r.onZoom;if(!n){var a=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);a&&(e.preventDefault(),e.stopPropagation(),fz(t,e),vj(az(t),e,i),vj(az(t),e,o))}},this.onPinchStop=function(e){var n,r,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,Nj(n,null==r?void 0:r.x,null==r?void 0:r.y),vj(az(t),e,o),vj(az(t),e,a))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&Fj(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,wj(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(wj(t),jj(t,e),vj(az(t),e,r)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!_j(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];Rj(t,i.clientX,i.clientY),vj(az(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,o=r.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||a||lz(l,s))}(t,e);n&&bz(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var o=az(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),vj(o,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=dz(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,o=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=o}},this.getContext=function(){return az(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,Dj(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0;var r=az(t);vj(r,void 0,t.props.onInit)},this.props=e,this.setup=qj(this.props),this.transformState=Kj(this.props)},yz=i.createContext(null),xz=i.forwardRef((function(e,t){var n=o(new vz(e)).current,r=function(e,t){return"function"==typeof e?e(t):e}(e.children,oz(n));return b(t,(function(){return oz(n)}),[n]),u((function(){n.update(e)}),[n,e]),i.createElement(yz.Provider,{value:n},r)}));i.forwardRef((function(e,t){var n,r=o(null),a=f(yz);return u((function(){return a.onChange((function(e){if(r.current){r.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",Hj({},e,{ref:(n=[r,t],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var wz="transform-component-module_wrapper__SPB86",$z="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var Cz=function(e){var t=e.children,n=e.wrapperClass,r=void 0===n?"":n,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,g=e.contentProps,p=void 0===g?{}:g,m=f(yz),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",Hj({},h,{ref:y,className:"react-transform-wrapper ".concat(wz," ").concat(r),style:l}),i.createElement("div",Hj({},p,{ref:x,className:"react-transform-component ".concat($z," ").concat(s),style:c}),t))};const Sz=_.div`
    background-color: ${dc["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${dc["icon-subtle"]};
    }
`,kz=t=>e(Sz,Object.assign({},t,{children:e(te,{})})),Dz=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Tz=_.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,Ez=_(kz)`
    width: 100%;
    height: 100%;
`,Oz=({src:t,className:n,alt:r,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,g]=a();u((()=>{d(!0),g(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),g(e)}}),[t]);return e(Dz,{className:n,children:h?null!=o?o:e(Ez,{}):c?e(Id,{}):e(Tz,{src:t,alt:r,$fit:i})})},Fz=_(Dc)`
    padding: 0;
    border-radius: 100%;
    background: ${dc.bg};
    color: ${dc["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,_z=_(Fz)`
    position: absolute;
    top: ${pc["spacing-48"]};
    right: ${pc["spacing-48"]};
    z-index: 5;

    ${bc.MaxWidth.sm} {
        top: ${pc["spacing-20"]};
        right: ${pc["spacing-20"]};
    }
`,Iz=_(Fz)`
    position: absolute;
    top: ${pc["spacing-48"]};
    right: calc(
        2.5rem + ${pc["spacing-48"]} + ${pc["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${bc.MaxWidth.sm} {
        top: ${pc["spacing-20"]};
        right: calc(
            2.5rem + ${pc["spacing-20"]} + ${pc["spacing-16"]}
        );
    }
`,Mz=_(Fz)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&I`
            left: ${pc["spacing-48"]};
            ${bc.MaxWidth.sm} {
                left: ${pc["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&I`
            right: ${pc["spacing-48"]};
            ${bc.MaxWidth.sm} {
                right: ${pc["spacing-20"]};
            }
        `}
`,Az=_.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,Bz=_.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,jz=_.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,zz=_.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,Rz=_.div`
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
`,Pz=_(Oz)`
    height: 100%;
    width: 100%;
`,Lz=_(kz)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,Nz=_.div`
    display: flex;
    justify-content: center;
    padding: ${pc["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,Hz=_(_c.BodyXS)`
    display: inline-flex;
    padding: ${pc["spacing-4"]} ${pc["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${fc.full};
    background-color: ${dc.bg};
    text-align: center;
`,Wz=_.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${dc["bg-inverse"]};
    padding: ${pc["spacing-24"]} ${pc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        padding: ${pc["spacing-16"]} ${pc["spacing-20"]};
    }
`,Yz=_.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${pc["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,Vz=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${bc.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,Uz=_.div`
    cursor: pointer;
    background-color: ${dc["bg-inverse"]};
    border-radius: ${fc.md};
    border: ${gc.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${bc.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?I`
                  border-width: ${gc["width-040"]};
                  border-color: ${dc["border-selected"]};

                  ${bc.MaxWidth.sm} {
                      border-width: ${gc["width-020"]};
                  }

                  :hover {
                      border-color: ${dc["border-selected-hover"]};
                  }
              `:I`
                  border-width: ${gc["width-010"]};

                  :hover {
                      border-color: ${dc["border-hover"]};
                  }
              `};
`,Xz=_(Oz)`
    height: 100%;
    width: 100%;
`,Kz=(r,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:g=!1,onClose:p}=r,f=ut(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=a(null!=l?l:0),[y,x]=a({}),[w,$]=a(1),[C,S]=a(),[k,D]=a(),T=o(null),E=o([]),O=o([]),F=C&&k?C-k:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:j,goToPrevItem:A,goToNextItem:B}))),Tu("keydown",(function(e){"ArrowRight"===e.key?B():"ArrowLeft"===e.key?A():"Escape"===e.key&&p&&p()}),"document"),u((()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const _=e=>{$(e.state.scale)};const I=({src:e,height:t,width:n})=>{x((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},M=()=>{const e=y[s[m].src];if(T.current&&e){const{clientHeight:t,clientWidth:n}=T.current,{width:r,height:i}=e,o=i/r<t/n;return r<n&&i<t?o?n/r:t/i:o?t/(i/(r/n)):n/(r/(i/t))}},A=()=>{var e,t;null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},B=()=>{var e,t;null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},j=e=>{var t,n;null===(n=null===(t=O.current)||void 0===t?void 0:t[m])||void 0===n||n.resetTransform(),v(e)};return t(nm,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e(_z,{"aria-label":"Close image carousel",onClick:p,focusHighlight:!1,children:e(J,{"aria-hidden":!0})}),!g&&e(Iz,{"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===w){const n=M();null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(n),$(null!=n?n:1)}else $(1),null===(r=null===(n=O.current)||void 0===n?void 0:n[m])||void 0===r||r.resetTransform()},focusHighlight:!1,children:e(1===w?ne:re,{"aria-hidden":!0})}),t(Az,{children:[t(Bz,{children:[!d&&t(n,{children:[e(Mz,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A,children:e(ie,{"aria-hidden":!0})}),e(Mz,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:B,children:e(oe,{"aria-hidden":!0})})]}),e(jz,{ref:T,onTouchStart:e=>{w<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!C||w>1||D(e.touches[0].clientX)},onTouchEnd:()=>{T.current&&(Math.abs(F)>T.current.offsetWidth/3&&(F>0?B():A()),S(void 0),D(void 0))},children:e(zz,{style:{transform:`translateX(calc(${100*-m}% - ${F}px))`},children:s.map(((t,n)=>{var r;return e(Rz,{"data-testid":"slide-item",children:e(xz,{ref:e=>O.current[n]=e,panning:{disabled:w<=1},initialScale:1,onZoom:_,onZoomStop:_,onWheel:_,children:e(Cz,{children:e(Pz,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e(Lz,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:I})})})},n)}))})}),!h&&e(Nz,{children:e(Hz,{weight:"semibold",children:`${m+1}/${s.length}`})})]}),!c&&e(Wz,{children:e(Yz,{children:s.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e(Vz,{children:e(Uz,{"data-testid":"thumbnail-item",$active:n===m,onClick:()=>j(n),ref:e=>E.current[n]=e,children:e(Xz,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})})},n)}))})})]})]}))},qz=g(Kz),Gz=_.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${dc.bg};
    border: ${gc["width-010"]} ${gc.solid} transparent;
    border-radius: ${fc.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    ${uc["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?dc["text-primary"]:dc.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${bc.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${uc["body-md-semibold"]}
    }

    ${e=>e.$error?I`
                background: ${dc.bg};
                border: ${gc["width-010"]} ${gc.solid}
                    ${dc["border-error"]};
            `:e.$selected?I`
                background: ${dc["bg-selected"]};
                border: ${gc["width-010"]} ${gc.solid}
                    ${dc["border-selected"]};

                &:hover {
                    background: ${dc["bg-selected-hover"]};
                    border: ${gc["width-010"]} ${gc.solid}
                        ${dc["border-selected-hover"]};
                }
            `:I`
                &:hover {
                    border: ${gc["width-010"]} ${gc.solid}
                        ${dc["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${gc["width-010"]} ${gc.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${dc["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,Zz=i.forwardRef(((n,r)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=n,c=ut(n,["children","imgSrc","selected","error","type"]);return t(Gz,Object.assign({ref:r,$selected:a,$error:s,type:l},c,{children:[e(Km,{src:o}),i]}))})),Qz=I`
    height: 1.125rem;
    width: 1.125rem;
    color: ${dc["icon-primary"]};
`,Jz=_.div`
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
`,eR=_(_c.HeadingSM).attrs({as:"div"})`
    color: ${dc["text-primary"]};
    margin-bottom: 0.5rem;
`,tR=_(_c.HeadingXS).attrs({as:"div"})`
    color: ${dc["text-primary"]};
`,nR=_(me)`
    ${Qz}
`,rR=_.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
    }

    :hover {
        ${eR},
        ${tR},
        ${nR} {
            color: ${dc["text-hover"]};
        }
    }
`,iR=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,oR=_(_c.BodyMD)`
    margin-top: 0.25rem;
`,aR=_(Yo.div)`
    overflow: hidden;
`,sR=_.div`
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};
`,lR=_(_c.BodyMD).attrs({as:"span"})`
    color: ${dc["text-primary"]};
    margin-right: 1rem;
`,cR=_(nt)`
    ${Qz}
`,dR=_(tt)`
    ${Qz}
`,uR=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${gc["width-010"]} ${gc.solid} ${dc.border};

    :hover {
        ${lR},
        ${cR},
        ${dR} {
            color: ${dc["text-hover"]};
        }
    }
`,hR=r=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=r,c=ut(r,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,g=o?i.slice(o):[],p=un(),f=p.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(r,i,o,a)=>t(n,{children:[t(iR,{children:[e("small"===s?tR:eR,{"data-testid":`link-title-${r}`,weight:"semibold",children:i}),o&&e(oR,{"data-testid":`link-description-${r}`,children:o}),a]}),e(nR,{})]}),y=Do({height:d?p.height:0});return t(Jz,Object.assign({},c,{children:[h.map(((t,n)=>{const{title:r,description:i,secondaryDescription:o,onClick:a}=t,s=ut(t,["title","description","secondaryDescription","onClick"]);return e(rR,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,o)}),`list-item-shown-${n}`)})),g.length>0&&e(aR,{style:y,"data-testid":"minimised-content",children:e(sR,{ref:f,children:g.map(((t,n)=>{const{title:r,description:i,onClick:o,secondaryDescription:a}=t,s=ut(t,["title","description","onClick","secondaryDescription"]);return e(rR,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,a)}),`list-item-minimised-${n}`)}))})}),g.length>0&&t(uR,{type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d,children:[e(lR,{weight:"semibold","data-testid":"toggle-button-label",children:d?"View less":"View more"}),e(d?dR:cR,{})]})]}))},gR=_.div`
    ${e=>vd({textSize:e.$textSize})}
    ${e=>e.color&&I`
            color: ${e.color};
        `}
`,pR=g(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:o}=t,a=ut(t,["baseTextColor","baseTextSize","inline"]);return e(gR,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:r},a))})),fR=_.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return I`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Of.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${Of.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,mR=_.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:i,startSm:o,colsSm:a}=e;return I`
            grid-column: ${t||r||"auto"} / span
                ${n||i||1};

            ${Of.MaxWidth.tablet} {
                grid-column: ${r||o||"auto"} / span
                    ${i||a||1};
            }

            ${Of.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,bR={Grid:i.forwardRef(((t,n)=>{const{children:r}=t,i=ut(t,["children"]);return e(fR,Object.assign({ref:n},i,{children:r}))})),Tile:i.forwardRef(((t,n)=>{const{children:r}=t,i=ut(t,["children"]);return e(mR,Object.assign({ref:n},i,{children:r}))}))},vR=_.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${bc.MaxWidth.sm} {
        padding: 0;
    }
`,yR=()=>{u((()=>{t()||n()}),[]);const t=()=>document.getElementById(xR),n=()=>{if(!document.getElementById(xR)){const e=document.createElement("script");e.id=xR,e.type="module",e.src=wR,document.head.appendChild(e)}};return e(vR,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},xR="lifesg-ds-masthead-script",wR="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",$R={notCompress:6,compress:4},CR=_.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,SR=_.nav`
    height: ${e=>e.$compress?$R.compress:$R.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${hc["duration-350"]} ${hc["ease-standard"]};

    ${bc.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,kR=_.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${bc.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,DR=_(Dc)`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,TR=_(rt)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${dc.icon};
`,ER=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${bc.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${bc.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,OR=_.div`
    display: flex;
    background-color: ${dc.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${bc.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${bc.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,FR=_.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${hc["duration-150"]} ${hc["ease-default"]};
        object-fit: contain;
    }
`,_R=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:o})=>e(FR,{role:"link",onClick:e=>{n&&n(e,o)},tabIndex:0,"data-id":r,"data-testid":i,$type:o,children:e(Km,{src:t.logoSrc,alt:t.brandName})}),IR=_.div`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
    }
`,MR=_.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${pc["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?I`
            right: 0;
            transition: all 300ms ${hc["ease-entrance"]};
            transition-delay: 200ms;
        `:I`
        right: -100%;
        transition: all 300ms ${hc["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return I`
            height: calc(${t} * 100);
        `}}

	${bc.MaxWidth.lg} {
        width: 75%;
    }

    ${bc.MaxWidth.sm} {
        width: 100%;
    }
`,AR=_.div`
    display: flex;
    flex-direction: column;
`,BR=_.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${pc["spacing-40"]} ${pc["spacing-20"]}
        ${pc["spacing-32"]};
`,jR=_(je)`
    height: 1.5rem;
    width: 1.5rem;
`,zR=_(Dc)`
    position: absolute;
    right: -${pc["spacing-4"]};
    color: ${dc.icon};

    :active,
    :focus {
        color: ${dc["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,RR=i.forwardRef(((r,i)=>{const{show:o,resources:s={},children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=r,[g,p]=a(0),{primary:f,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return e(IR,{ref:i,"data-testid":"drawer",children:e(MR,{$show:o,$viewHeight:g,children:t(AR,{children:[t(BR,{children:[e(ER,{"data-id":"drawer-brand-container",children:!c&&t(n,{children:[f&&e(_R,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(n,{children:[e(OR,{}),e(_R,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e(zR,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:e(jR,{})})]}),l]})})})})),PR=_.ul`
    display: flex;
    list-style: none;
    margin-left: ${pc["spacing-64"]};
    flex-shrink: 0;

    ${bc.MaxWidth.lg} {
        display: none;
    }
`,LR=_.ul`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${pc["spacing-64"]};
        flex-shrink: 0;
    }
`,NR=_.ul`
    display: none;
    list-style: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${pc["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${bc.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,HR=_.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${pc["spacing-16"]};
    }

    ${bc.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${pc["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?pc["spacing-16"]:"0"};
        }
    }

    ${bc.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return I`
                    padding: 0 ${pc["spacing-16"]};
                `}}
    }
`,WR=_(hd.Small)`
    ${bc.MaxWidth.lg} {
        width: 100%;
    }
`,YR=_.div`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${pc["spacing-40"]};
    }
`,VR=_(_c.BodyMD)`
    margin-bottom: ${pc["spacing-8"]};
`,UR=_.div`
    display: flex;
`,XR=_.a`
    :not(:last-child) {
        margin-right: ${pc["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${bc.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${bc.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,KR=({actionButtons:r,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(n,r)=>{const i=n?(e=>{const t=Hk(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(r):r;return i.map(((r,i)=>{let o;switch(r.type){case"download":o=n?(l=r.args,t(YR,{children:[e(VR,{weight:"semibold",children:l&&l.children||"Download the app"}),t(UR,{children:[e(XR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(XR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(WR,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const t=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=e(WR,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":t}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(HR,{$mobile:n,children:o},`action-button-${i+1}`)}))};if(r){const o=(null==r?void 0:r.mobile)||r.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(n,{children:s.length>0&&e(NR,{children:l(i,s)})}):t(n,{children:[a.length>0&&e(LR,{children:l(!1,a)}),r.desktop.length>0&&e(PR,{children:l(i,r.desktop)})]})}return e(n,{})};var qR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(qR||(qR={}));const GR=_.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${pc["spacing-8"]} 0;

    background: ${dc.bg};
    border-radius: ${fc.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${dc.Primitive["neutral-50"]} r g b / 25%);
`,ZR=_.ul`
    display: none;
    list-style: none;

    ${bc.MaxWidth.lg} {
        border-left: ${gc["width-040"]} solid ${dc["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,QR=_(_c.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${dc.text};

    margin: 0 ${pc["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${gc.solid} transparent;
    border-width: ${pc["spacing-12"]} ${pc["spacing-8"]};

    border-radius: ${fc.md};

    ${Tc(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${dc["bg-hover"]};
        color: ${dc.text};
    }

    ${bc.MaxWidth.lg} {
        ${uc["body-md-regular"]}
    }
`,JR=_.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,eP=({items:t,mobile:r=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(n=!1)=>t.map(((t,r)=>{const{children:i,options:a}=t,s=ut(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e(JR,{children:e(QR,Object.assign({"data-testid":l},s,{onClick:o(t)},a,{children:i}))},r)}));if(t&&t.length>0){return e(r?ZR:GR,{children:a(r)})}return e(n,{})},tP=_.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${bc.MaxWidth.lg} {
        display: none;
    }
`,nP=_.ul`
    display: none;
    list-style: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,rP=_.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${bc.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,iP=_(_c.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${dc.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?dc["text-selected-hover"]:dc["text-hover"]};
    }

    ${bc.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,oP=_.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,aP=_.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${dc["border-selected"]};

    :hover {
        ${e=>e.$selected&&dc["border-selected-hover"]};
    }

    ${bc.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,sP=_.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,lP=_(Dc)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,cP=_(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${dc.icon};
    :hover {
        ${e=>e.$selected?dc["icon-selected-hover"]:dc["icon-hover"]};
    }
`,dP=({items:r,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[g,p]=a(!1),f=o(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{p(!1)},b=(e,t)=>n=>{n.stopPropagation(),h(t),p(!0),c(n,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),p(!1)},y=()=>r.map(((n,r)=>{if("component"===n.itemType){const t=n&&n.children||null;return e("li",{children:t},r)}{const o=(e=>{if(e.id===i)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(n),{children:a,options:c}=n,u=ut(n,["children","options"]),h=o?s?"bold":"semibold":"regular",p=s?`link__mobile-${r+1}`:`link__${r+1}`,f=d>=0&&d===r&&g;return t(rP,{$hiddenBranding:l,children:[t(iP,Object.assign({"data-testid":p,weight:h,$selected:o},u,{onClick:b(n,r)},c,{children:[e(oP,{children:a}),o&&e(aP,{"data-testid":`${p}-indicator`,$selected:o}),s&&n.subMenu&&e(sP,{children:e(lP,{"data-testid":`${p}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e(cP,{$selected:o})})})]})),f&&n.subMenu&&e(eP,{items:n.subMenu,mobile:s,onItemClick:v})]},r)}}));return r&&r.length>0?s?e(nP,{ref:f,children:y()}):e(tP,{ref:f,$alignLeft:l,children:y()}):e(n,{})},uP={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},hP={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},gP={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},pP={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},fP=g(((r,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:g=!0,resources:p,hideNavElements:f=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:C=!0,layout:S="default"}=r,k=ut(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,T]=a(!1),[E,O]=a(!1),F="stretch"===S,_=o(null),I=A(),M=(e=>{switch(e){case"bookingsg":return hP;case"mylegacy":return pP;case"ccube":return gP;default:return uP}})(null==I?void 0:I.resourceScheme),B=mc["lg-max"]({theme:I}),j=(null==p?void 0:p.primary)||M.primary,z=null==p?void 0:p.secondary;b(i,(()=>Object.assign(_.current,{dismissDrawer:()=>{R()}})),[D]),u((()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[]);const R=()=>{T(!1),setTimeout((()=>{O(!1)}),550)},P=e=>D&&-1===v.indexOf(e),L=()=>{window.innerWidth<=B&&D&&R()},N=(e,t)=>{$&&(e.preventDefault(),$(t)),P("brand-click")&&R()},H=(e,t)=>{qR.isNavItemCommon(t)&&t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),qR.isNavItemLink(t)&&!t.subMenu&&P("item-click")&&R()},W=(e,t)=>{var n;"button"!==t.type&&"download"!==t.type||!(null===(n=t.args)||void 0===n?void 0:n.onClick)?w&&(e.preventDefault(),w(t)):t.args.onClick(e),P("item-click")&&R()},Y=()=>{T(!0),O(!0)},V=()=>{P("close-button-click")&&R()},U=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(y)?e(DR,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1,children:e(TR,{})}):null};return t(CR,{ref:_,$fixed:g,className:l,id:c||"navbar-wrapper","data-testid":k["data-testid"]||"navbar-wrapper",children:[C&&e(yR,{}),t(ij.Content,{stretch:F,children:[t(SR,{$compress:h,children:[!m&&t(ER,{$compress:h,"data-id":"brand-container",children:[j&&e(_R,{resources:j,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),z&&t(n,{children:[e(OR,{$compress:h}),e(_R,{resources:z,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&t(kR,{$hideNavBranding:m,children:[e(dP,{items:s.desktop,onItemClick:H,selectedId:d,hideNavBranding:m}),e(KR,{actionButtons:y,onActionButtonClick:W}),U()]})]}),!f&&e(Lf,{show:E,enableOverlayClick:!0,onOverlayClick:V,children:t(RR,{show:D,resources:{primary:j,secondary:z},onClose:V,onBrandClick:N,actionButtons:y,hideNavBranding:m,children:[e(dP,{items:s.mobile||s.desktop,onItemClick:H,selectedId:d,mobile:!0}),e(KR,{actionButtons:y,onActionButtonClick:W,mobile:!0})]})})]})]})})),mP=$R,bP=3.5,vP=I`
    color: ${dc["hyperlink-inverse"]};

    svg {
        color: ${dc["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${dc["hyperlink-inverse"]};
        svg {
            color: ${dc["icon-primary-inverse"]};
        }
    }
`,yP=_.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${hc["duration-800"]} ${hc["ease-default"]};
    background: ${dc["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,xP=_(ij.Content)`
    display: flex;
`,wP=_.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,$P=_.div`
    display: inline-block;
    width: 100%;

    ${uc["body-baseline-regular"]}
    color: ${dc["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${uc["body-baseline-semibold"]}
        color: ${dc["text-inverse"]};
    }

    a {
        ${uc["body-baseline-regular"]}
        ${vP}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return I`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,CP=_(_c.LinkBL)`
    position: relative;

    ${vP}
`,SP=_(Dc)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,kP=_(je)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${dc["icon-inverse"]};
`,DP=_.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${dc["hyperlink-inverse"]};
    ${uc["body-md-semibold"]};

    cursor: pointer;
`,TP=_.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,EP=n=>{var{children:r,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:g,actionButton:p}=n,f=ut(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=f["data-testid"],[b,v]=a(i),{height:y=0,ref:x}=un();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),o&&l&&l()},$=e=>{(null==p?void 0:p.onClick)&&(e.stopPropagation(),p.onClick(e))};if(!b)return null;return t(yP,Object.assign({ref:d,$sticky:s,$clickable:!!g,onClick:g},f,{children:[t(xP,{id:OP("container",c),children:[t(wP,{children:[e($P,{"data-testid":OP("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0,children:e("div",{ref:x,children:r})}),p?e(DP,Object.assign({id:OP("action-button",c),"data-testid":OP("action-button",m),type:"button"},p,{onClick:$,children:p.children})):null]}),o&&e(SP,{onClick:w,id:OP("dismiss-button",c),"data-testid":OP("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e(kP,{"aria-hidden":!0})})]}),g&&e(TP,{"aria-label":"Clickable banner",type:"button"})]}))},OP=(e,t="wrapper")=>`${t}-${e}`,FP=i.forwardRef(((t,n)=>e(EP,Object.assign({},t,{forwardedRef:n}))));FP.displayName="NotificationBanner";const _P=Object.assign(FP,{Link:CP}),{entries:IP,setPrototypeOf:MP,isFrozen:AP,getPrototypeOf:BP,getOwnPropertyDescriptor:jP}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:zP,seal:RP,create:PP}=Object,{apply:LP,construct:NP}="undefined"!=typeof Reflect&&Reflect;zP||(zP=function(e){return e}),RP||(RP=function(e){return e}),LP||(LP=function(e,t,n){return e.apply(t,n)}),NP||(NP=function(e,t){return new e(...t)});const HP=rL(Array.prototype.forEach),WP=rL(Array.prototype.lastIndexOf),YP=rL(Array.prototype.pop),VP=rL(Array.prototype.push),UP=rL(Array.prototype.splice),XP=rL(String.prototype.toLowerCase),KP=rL(String.prototype.toString),qP=rL(String.prototype.match),GP=rL(String.prototype.replace),ZP=rL(String.prototype.indexOf),QP=rL(String.prototype.trim),JP=rL(Object.prototype.hasOwnProperty),eL=rL(RegExp.prototype.test),tL=(nL=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return NP(nL,t)});var nL;function rL(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return LP(e,t,r)}}function iL(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:XP;MP&&MP(e,null);let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(AP(t)||(t[r]=e),i=e)}e[i]=!0}return e}function oL(e){for(let t=0;t<e.length;t++){JP(e,t)||(e[t]=null)}return e}function aL(e){const t=PP(null);for(const[n,r]of IP(e)){JP(e,n)&&(Array.isArray(r)?t[n]=oL(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=aL(r):t[n]=r)}return t}function sL(e,t){for(;null!==e;){const n=jP(e,t);if(n){if(n.get)return rL(n.get);if("function"==typeof n.value)return rL(n.value)}e=BP(e)}return function(){return null}}const lL=zP(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),cL=zP(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),dL=zP(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),uL=zP(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),hL=zP(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),gL=zP(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),pL=zP(["#text"]),fL=zP(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),mL=zP(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),bL=zP(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vL=zP(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),yL=RP(/\{\{[\w\W]*|[\w\W]*\}\}/gm),xL=RP(/<%[\w\W]*|[\w\W]*%>/gm),wL=RP(/\$\{[\w\W]*/gm),$L=RP(/^data-[\-\w.\u00B7-\uFFFF]+$/),CL=RP(/^aria-[\-\w]+$/),SL=RP(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kL=RP(/^(?:\w+script|data):/i),DL=RP(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),TL=RP(/^html$/i),EL=RP(/^[a-z][.\w]*(-[.\w]+)+$/i);var OL=Object.freeze({__proto__:null,ARIA_ATTR:CL,ATTR_WHITESPACE:DL,CUSTOM_ELEMENT:EL,DATA_ATTR:$L,DOCTYPE_NAME:TL,ERB_EXPR:xL,IS_ALLOWED_URI:SL,IS_SCRIPT_OR_DATA:kL,MUSTACHE_EXPR:yL,TMPLIT_EXPR:wL});const FL=1,_L=3,IL=7,ML=8,AL=9,BL=function(){return"undefined"==typeof window?null:window};var jL=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:BL();const n=t=>e(t);if(n.version="3.2.5",n.removed=[],!t||!t.document||t.document.nodeType!==AL||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:g,trustedTypes:p}=t,f=c.prototype,m=sL(f,"cloneNode"),b=sL(f,"remove"),v=sL(f,"nextSibling"),y=sL(f,"childNodes"),x=sL(f,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:k,getElementsByTagName:D}=r,{importNode:T}=i;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof IP&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:O,ERB_EXPR:F,TMPLIT_EXPR:_,DATA_ATTR:I,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:A,ATTR_WHITESPACE:B,CUSTOM_ELEMENT:j}=OL;let{IS_ALLOWED_URI:z}=OL,R=null;const P=iL({},[...lL,...cL,...dL,...hL,...pL]);let L=null;const N=iL({},[...fL,...mL,...bL,...vL]);let H=Object.seal(PP(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,Y=null,V=!0,U=!0,X=!1,K=!0,q=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,ne=!1,re=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const ce=iL({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=iL({},["audio","video","img","source","image","track"]);let he=null;const ge=iL({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pe="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=iL({},[pe,fe,me],KP);let we=iL({},["mi","mo","mn","ms","mtext"]),$e=iL({},["annotation-xml"]);const Ce=iL({},["title","style","font","a","script"]);let Se=null;const ke=["application/xhtml+xml","text/html"];let De=null,Te=null;const Ee=r.createElement("form"),Oe=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Te||Te!==e){if(e&&"object"==typeof e||(e={}),e=aL(e),Se=-1===ke.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,De="application/xhtml+xml"===Se?KP:XP,R=JP(e,"ALLOWED_TAGS")?iL({},e.ALLOWED_TAGS,De):P,L=JP(e,"ALLOWED_ATTR")?iL({},e.ALLOWED_ATTR,De):N,ye=JP(e,"ALLOWED_NAMESPACES")?iL({},e.ALLOWED_NAMESPACES,KP):xe,he=JP(e,"ADD_URI_SAFE_ATTR")?iL(aL(ge),e.ADD_URI_SAFE_ATTR,De):ge,de=JP(e,"ADD_DATA_URI_TAGS")?iL(aL(ue),e.ADD_DATA_URI_TAGS,De):ue,le=JP(e,"FORBID_CONTENTS")?iL({},e.FORBID_CONTENTS,De):ce,W=JP(e,"FORBID_TAGS")?iL({},e.FORBID_TAGS,De):{},Y=JP(e,"FORBID_ATTR")?iL({},e.FORBID_ATTR,De):{},se=!!JP(e,"USE_PROFILES")&&e.USE_PROFILES,V=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,X=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,q=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,z=e.ALLOWED_URI_REGEXP||SL,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Oe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Oe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),q&&(U=!1),te&&(ee=!0),se&&(R=iL({},pL),L=[],!0===se.html&&(iL(R,lL),iL(L,fL)),!0===se.svg&&(iL(R,cL),iL(L,mL),iL(L,vL)),!0===se.svgFilters&&(iL(R,dL),iL(L,mL),iL(L,vL)),!0===se.mathMl&&(iL(R,hL),iL(L,bL),iL(L,vL))),e.ADD_TAGS&&(R===P&&(R=aL(R)),iL(R,e.ADD_TAGS,De)),e.ADD_ATTR&&(L===N&&(L=aL(L)),iL(L,e.ADD_ATTR,De)),e.ADD_URI_SAFE_ATTR&&iL(he,e.ADD_URI_SAFE_ATTR,De),e.FORBID_CONTENTS&&(le===ce&&(le=aL(le)),iL(le,e.FORBID_CONTENTS,De)),oe&&(R["#text"]=!0),Z&&iL(R,["html","head","body"]),R.table&&(iL(R,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw tL('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw tL('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(p,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));zP&&zP(e),Te=e}},_e=iL({},[...cL,...dL,...uL]),Ie=iL({},[...hL,...gL]),Me=function(e){VP(n.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},Ae=function(e,t){try{VP(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){VP(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Me(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Be=function(e){let t=null,n=null;if(J)e="<remove></remove>"+e;else{const t=qP(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new g).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&n&&o.insertBefore(r.createTextNode(n),o.childNodes[0]||null),be===me?D.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},je=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},ze=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Re=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,r){HP(e,(e=>{e.call(n,t,r,Te)}))}const Le=function(e){let t=null;if(Pe(E.beforeSanitizeElements,e,null),ze(e))return Me(e),!0;const r=De(e.nodeName);if(Pe(E.uponSanitizeElement,e,{tagName:r,allowedTags:R}),e.hasChildNodes()&&!Re(e.firstElementChild)&&eL(/<[/\w!]/g,e.innerHTML)&&eL(/<[/\w!]/g,e.textContent))return Me(e),!0;if(e.nodeType===IL)return Me(e),!0;if(G&&e.nodeType===ML&&eL(/<[/\w]/g,e.data))return Me(e),!0;if(!R[r]||W[r]){if(!W[r]&&He(r)){if(H.tagNameCheck instanceof RegExp&&eL(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(oe&&!le[r]){const t=x(e)||e.parentNode,n=y(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const i=m(n[r],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return Me(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const n=XP(e.tagName),r=XP(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===fe?t.namespaceURI===me?"svg"===n:t.namespaceURI===pe?"svg"===n&&("annotation-xml"===r||we[r]):Boolean(_e[n]):e.namespaceURI===pe?t.namespaceURI===me?"math"===n:t.namespaceURI===fe?"math"===n&&$e[r]:Boolean(Ie[n]):e.namespaceURI===me?!(t.namespaceURI===fe&&!$e[r])&&!(t.namespaceURI===pe&&!we[r])&&!Ie[n]&&(Ce[n]||!_e[n]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!eL(/<\/no(script|embed|frames)/i,e.innerHTML)?(q&&e.nodeType===_L&&(t=e.textContent,HP([O,F,_],(e=>{t=GP(t,e," ")})),e.textContent!==t&&(VP(n.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(E.afterSanitizeElements,e,null),!1):(Me(e),!0)},Ne=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in r||n in Ee))return!1;if(U&&!Y[t]&&eL(I,t));else if(V&&eL(M,t));else if(!L[t]||Y[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&eL(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&eL(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&eL(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(he[t]);else if(eL(z,GP(n,B,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==ZP(n,"data:")||!de[e]){if(X&&!eL(A,GP(n,B,"")));else if(n)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&qP(e,j)},We=function(e){Pe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||ze(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,c=De(a);let d="value"===a?l:QP(l);if(r.attrName=c,r.attrValue=d,r.keepAttr=!0,r.forceKeepAttr=void 0,Pe(E.uponSanitizeAttribute,e,r),d=r.attrValue,!ie||"id"!==c&&"name"!==c||(Ae(a,e),d="user-content-"+d),G&&eL(/((--!?|])>)|<\/(style|title)/i,d)){Ae(a,e);continue}if(r.forceKeepAttr)continue;if(Ae(a,e),!r.keepAttr)continue;if(!K&&eL(/\/>/i,d)){Ae(a,e);continue}q&&HP([O,F,_],(e=>{d=GP(d,e," ")}));const u=De(e.nodeName);if(Ne(u,c,d)){if(w&&"object"==typeof p&&"function"==typeof p.getAttributeType)if(s);else switch(p.getAttributeType(u,c)){case"TrustedHTML":d=w.createHTML(d);break;case"TrustedScriptURL":d=w.createScriptURL(d)}try{s?e.setAttributeNS(s,a,d):e.setAttribute(a,d),ze(e)?Me(e):YP(n.removed)}catch(e){}}}Pe(E.afterSanitizeAttributes,e,null)},Ye=function e(t){let n=null;const r=je(t);for(Pe(E.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Pe(E.uponSanitizeShadowNode,n,null),Le(n),We(n),n.content instanceof a&&e(n.content);Pe(E.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,o=null,s=null,c=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw tL("toString is not a function");if("string"!=typeof(e=e.toString()))throw tL("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Q||Fe(t),n.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=De(e.nodeName);if(!R[t]||W[t])throw tL("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=Be("\x3c!----\x3e"),o=r.ownerDocument.importNode(e,!0),o.nodeType===FL&&"BODY"===o.nodeName||"HTML"===o.nodeName?r=o:r.appendChild(o);else{if(!ee&&!q&&!Z&&-1===e.indexOf("<"))return w&&ne?w.createHTML(e):e;if(r=Be(e),!r)return ee?null:ne?$:""}r&&J&&Me(r.firstChild);const d=je(ae?e:r);for(;s=d.nextNode();)Le(s),We(s),s.content instanceof a&&Ye(s.content);if(ae)return e;if(ee){if(te)for(c=k.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(L.shadowroot||L.shadowrootmode)&&(c=T.call(i,c,!0)),c}let u=Z?r.outerHTML:r.innerHTML;return Z&&R["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&eL(TL,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),q&&HP([O,F,_],(e=>{u=GP(u,e," ")})),w&&ne?w.createHTML(u):u},n.setConfig=function(){Fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},n.clearConfig=function(){Te=null,Q=!1},n.isValidAttribute=function(e,t,n){Te||Fe({});const r=De(e),i=De(t);return Ne(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&VP(E[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=WP(E[e],t);return-1===n?void 0:UP(E[e],n,1)[0]}return YP(E[e])},n.removeHooks=function(e){E[e]=[]},n.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const zL=t=>i.forwardRef(((n,r)=>e(EP,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=jL.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e(_P.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),RL=_.div`
    display: flex;
    flex-direction: column;
`,PL=_.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${pc["spacing-8"]};
`,LL=_(f$)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${bc.MaxWidth.xs} {
            padding: 0 ${pc["spacing-8"]};
        }
    }
`,NL=_(hd.Small)`
    margin: ${pc["spacing-32"]} 0;
`,HL=n=>{var{id:r,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:f,onCooldownEnd:m}=n,b=ut(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=ut(v,["disabled","onClick","styleType"]),C=o([]),S=o(p),[k,D]=a(new Array(g).fill("")),[T,E]=a(c),[O,F]=a(new Date);u((()=>{var e;return null===(e=null==C?void 0:C.current[0])||void 0===e||e.focus(),document.addEventListener("paste",M),()=>document.removeEventListener("paste",M)}),[]),u((()=>{if(0!==c){f&&f();const e=j();return()=>e()}}),[O]),u((()=>{S.current=p}),[p]),u((()=>{i.length===g&&D(i)}),[i]);const _=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(A(r)){const t=[...k];t[e]=r.substring(r.length-1),null===(n=C.current[e+1])||void 0===n||n.focus(),D(t),p&&p(t)}},I=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...k];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=C.current[e-1])||void 0===n||n.focus()),D(t),p&&p(t)}},M=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),n=t.split("");t&&A(t,g)?(D(n),S.current&&S.current(n)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),B=()=>{const e=Date.now(),t=1e3*c;return e<O.valueOf()+t},j=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((O.valueOf()+n-t)/1e3);E(r),r<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},z=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return t(RL,{id:r,"data-testid":s,className:l,children:[e(PL,{children:k.map(((t,n)=>e(LL,Object.assign({id:z(n,"otp-input",r),"data-testid":z(n,"otp-input",s),"aria-label":`Enter OTP character ${n+1}`,ref:e=>C.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:_(n),onKeyDown:I(n),autoComplete:"off"},b),n)))}),h&&e(Aw,{children:h}),e(NL,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{D(new Array(g).fill("")),B()||(F(new Date),E(c)),x&&x(e)},disabled:y||B(),children:$.children?$.children:"Resend OTP"+(T?` in ${T} second${T>1?"s":""}`:"")}))]})},WL=_.nav`
    display: flex;
`,YL=_.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${bc.MaxWidth.lg} {
        align-self: center;
    }
`,VL=_.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,UL=_(Dc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${fc.sm};
    color: ${dc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${dc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${dc["bg-hover"]};
    }
`,XL=_(Dc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${fc.sm};
    color: ${dc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${dc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${dc["bg-hover"]};
    }

    ${e=>"left"===e.$position?I`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:I`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${bc.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,KL=_.button`
    background: ${e=>e.$selected?dc["bg-primary"]:dc.bg};
    border: ${gc["width-010"]} ${gc.solid}
        ${e=>I`
                ${e.$selected?dc["bg-primary"]:dc.border}
            `};
    color: ${e=>e.$selected?dc["text-inverse"]:dc.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${fc.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?I`
                  ${uc["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${dc["bg-selected-strongest-hover"]};
                      background-color: ${dc["bg-selected-strongest-hover"]};
                      color: ${dc["text-inverse"]};
                  }
              `:I`
                  ${uc["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${dc["bg-hover"]};
                      background-color: ${dc["bg-hover"]};
                      color: ${dc["text-hover"]};
                      ${uc["body-baseline-semibold"]};
                  }
              `}
`;_(Dc)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${dc["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${fc.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${dc["icon-hover"]};
        }
    }
`;const qL=_.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${fc.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,GL=_.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${dc.text};

    display: flex;
    justify-content: center;
`,ZL=_(_c.BodyBL)`
    white-space: nowrap;
`,QL=_(_c.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,JL=_(f$)`
    ${uc["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${fc.sm};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${uc["body-xs-regular"]}
        }
    }
`,eN=_.div`
    ${uc["body-xs-regular"]}
    background-color: ${dc["bg-hover"]};
    border: none;
    border-radius: ${fc.sm};
    color: ${dc["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,tN=_.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,nN=i.forwardRef((({id:n,"data-testid":r,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=rN,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:g,onPageSizeChange:p},f)=>{const m=A(),b=mc["sm-max"]({theme:m}),v=Hd.useMediaQuery({maxWidth:b}),[y,x]=a(!1),[w,$]=a(!1),[C,S]=a(""),[k,D]=a(c[0]),[T,E]=a(!v&&h&&k?k.value:o),O=Math.ceil(s/T),F=1===l,_=l===O,I=l>1?()=>N(1):void 0,M=l<O?()=>N(O):void 0,B=l>1?()=>N(l-1):void 0,j=l<O?()=>N(parseInt(l.toString())+1):void 0,z=e=>e?()=>K():()=>U(),R=e=>e?()=>q():()=>X();u((()=>{l&&P(l)}),[l]),u((()=>{E(o),D(c.find((e=>e.value===o)))}),[o]);const P=e=>{S(e.toString())},L=()=>{x(!1),$(!1)},N=e=>{g&&(g(e),P(e))},H=()=>{const e=Math.min(O,l+5);N(e),P(e),x(!0),$(!1)},W=()=>{const e=Math.max(1,l-5);N(e),P(e),x(!1),$(!0)},Y=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));P(Math.max(1,Math.min(O,e)))}else S(t.replace(/[^0-9]/g,""))},V=e=>{e.preventDefault(),C&&(null==g||g(parseInt(C)))},U=()=>{x(!0)},X=()=>{x(!1)},K=()=>{$(!0)},q=()=>{$(!1)},G=(n,r,i)=>t(qL,{children:[e(UL,{focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:z(n),onMouseOut:R(n),onFocus:z(n),onBlur:R(n),onClick:n?W:H,children:e(n&&w?it:r&&y?ot:lt,{"aria-hidden":!0})}),n&&w&&e(eN,{children:"Previous 5 pages"}),r&&y&&e(eN,{children:"Next 5 pages"})]},i);return t(WL,{className:i,ref:f,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination",children:[e(YL,{children:t(VL,{children:[d&&e(XL,{onClick:I,disabled:F,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e(at,{"aria-hidden":!0})}),e(XL,{onClick:B,disabled:F,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e(be,{"aria-hidden":!0})}),v?t(GL,{children:[e("form",{onSubmit:V,children:e(JL,{value:C,onChange:Y,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})}),e(QL,{children:"/"}),e(ZL,{children:O})]}):[...Array(O)].map(((t,n)=>{const r=n+1,i=O-5,o=l===r;if(O<=7)return e(KL,{onClick:()=>N(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:r},r);const a=l+1>5&&2===r,s=l-1<=i&&r===O-1-1;return a||s?G(a,s,r):r<=5&&l+1<=5||r<=1||r===l||r<=l+1&&r>=l-1-1||r>i&&l-1>i||r>O-1?e(KL,{onClick:()=>N(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:r},r):null})),e(XL,{onClick:j,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e(me,{"aria-hidden":!0})}),d&&e(XL,{onClick:M,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e(st,{"aria-hidden":!0})})]})}),h&&!v&&e(tN,{children:e(QI,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,n=Math.ceil(s/t);E(t);p&&p(l>=n?n:l,t)}})})]})})),rN=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],iN=_.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${uc["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=dc["text-inverse"],e.$color){case"grey":t=dc["bg-inverse-subtler"];break;case"green":t=dc["bg-success-strong"];break;case"yellow":t=dc["bg-warning-strong"];break;case"red":t=dc["bg-error-strong"];break;case"blue":t=dc["bg-info-strong"];break;default:t=dc["bg-inverse"]}else switch(e.$color){case"grey":t=dc["bg-stronger"],n=dc["border-strong"],r=dc["text-subtler"];break;case"green":t=dc["bg-success"],n=dc["border-success"],r=dc["text-success"];break;case"yellow":t=dc["bg-warning"],n=dc["border-warning"],r=dc["text-warning"];break;case"red":t=dc["bg-error"],n=dc["border-error"],r=dc["text-error"];break;case"blue":t=dc["bg-info"],n=dc["border-info"],r=dc["text-info"];break;default:t=dc.bg,n=dc.border,r=dc.text}return I`
            background: ${t};
            border: ${gc["width-010"]} ${gc.solid} ${n};
            color: ${r};
        `}}
`,oN=_.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,aN=n=>{var{type:r,colorType:i="black",children:o,icon:a}=n,s=ut(n,["type","colorType","children","icon"]);return t(iN,Object.assign({$type:r,$color:i},s,{children:[a,e(oN,{children:o})]}))},sN=(e,t,n)=>t?Cl(n,t)||Cl(e,t):n||e,lN=(e,t)=>{const n=t||e.defaultValue;return Cl(e.collections,n)};var cN;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(cN||(cN={}));const dN={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},uN=e=>t=>{var n;const r=(null===(n=t.theme)||void 0===n?void 0:n._v2)||t.theme,i=lN(dN,null==r?void 0:r[cN.colorScheme]);return r.options&&r.options.color?sN(i,e,r.options.color):sN(i,e)},hN={Brand:{1:uN("Brand.1"),2:uN("Brand.2"),3:uN("Brand.3"),4:uN("Brand.4"),5:uN("Brand.5"),6:uN("Brand.6")},Primary:uN("Primary"),PrimaryDark:uN("PrimaryDark"),Secondary:uN("Secondary"),Accent:{Light:{1:uN("Accent.Light.1"),2:uN("Accent.Light.2"),3:uN("Accent.Light.3"),4:uN("Accent.Light.4"),5:uN("Accent.Light.5"),6:uN("Accent.Light.6")},Dark:{1:uN("Accent.Dark.1"),2:uN("Accent.Dark.2"),3:uN("Accent.Dark.3")}},Neutral:{1:uN("Neutral.1"),2:uN("Neutral.2"),3:uN("Neutral.3"),4:uN("Neutral.4"),5:uN("Neutral.5"),6:uN("Neutral.6"),7:uN("Neutral.7"),8:uN("Neutral.8")},Validation:{Green:{Text:uN("Validation.Green.Text"),Icon:uN("Validation.Green.Icon"),Border:uN("Validation.Green.Border"),Background:uN("Validation.Green.Background")},Orange:{Text:uN("Validation.Orange.Text"),Icon:uN("Validation.Orange.Icon"),Border:uN("Validation.Orange.Border"),Background:uN("Validation.Orange.Background"),Badge:uN("Validation.Orange.Badge")},Red:{Text:uN("Validation.Red.Text"),Icon:uN("Validation.Red.Icon"),Border:uN("Validation.Red.Border"),Background:uN("Validation.Red.Background")},Blue:{Text:uN("Validation.Blue.Text"),Icon:uN("Validation.Blue.Icon"),Border:uN("Validation.Blue.Border"),Background:uN("Validation.Blue.Background")}},Shadow:{Accent:uN("Shadow.Accent"),Red:uN("Shadow.Red"),Elevation:uN("Shadow.Elevation")}},gN={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},pN={D1:{fontFamily:gN.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:gN.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:gN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gN.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:gN.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:gN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:gN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:gN.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:gN.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:gN.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:gN.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:gN.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:gN.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},fN={D1:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:gN.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:gN.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:gN.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:gN.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:gN.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},mN={collections:{base:pN,oneservice:{D1:{fontFamily:gN.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:gN.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:gN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gN.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:gN.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:gN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:gN.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:gN.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:gN.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:gN.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:gN.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:gN.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:gN.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:fN},defaultValue:"base"},bN=e=>t=>{var n;const r=(null===(n=t.theme)||void 0===n?void 0:n._v2)||t.theme,i=lN(mN,null==r?void 0:r[cN.textStyleScheme]);return r.options&&r.options.textStyle?sN(i,e,r.options.textStyle):sN(i,e)},vN={D1:{fontFamily:bN("D1.fontFamily"),fontSize:bN("D1.fontSize"),fontWeight:bN("D1.fontWeight"),lineHeight:bN("D1.lineHeight"),letterSpacing:bN("D1.letterSpacing"),fontVariant:bN("D1.fontVariant")},D2:{fontFamily:bN("D2.fontFamily"),fontSize:bN("D2.fontSize"),fontWeight:bN("D2.fontWeight"),lineHeight:bN("D2.lineHeight"),letterSpacing:bN("D2.letterSpacing"),fontVariant:bN("D2.fontVariant")},D3:{fontFamily:bN("D3.fontFamily"),fontSize:bN("D3.fontSize"),fontWeight:bN("D3.fontWeight"),lineHeight:bN("D3.lineHeight"),letterSpacing:bN("D3.letterSpacing"),fontVariant:bN("D3.fontVariant")},D4:{fontFamily:bN("D4.fontFamily"),fontSize:bN("D4.fontSize"),fontWeight:bN("D4.fontWeight"),lineHeight:bN("D4.lineHeight"),letterSpacing:bN("D4.letterSpacing"),fontVariant:bN("D4.fontVariant")},DBody:{fontFamily:bN("DBody.fontFamily"),fontSize:bN("DBody.fontSize"),fontWeight:bN("DBody.fontWeight"),lineHeight:bN("DBody.lineHeight"),letterSpacing:bN("DBody.letterSpacing"),fontVariant:bN("DBody.fontVariant")},H1:{fontFamily:bN("H1.fontFamily"),fontSize:bN("H1.fontSize"),fontWeight:bN("H1.fontWeight"),lineHeight:bN("H1.lineHeight"),letterSpacing:bN("H1.letterSpacing"),fontVariant:bN("H1.fontVariant")},H2:{fontFamily:bN("H2.fontFamily"),fontSize:bN("H2.fontSize"),fontWeight:bN("H2.fontWeight"),lineHeight:bN("H2.lineHeight"),letterSpacing:bN("H2.letterSpacing"),fontVariant:bN("H2.fontVariant")},H3:{fontFamily:bN("H3.fontFamily"),fontSize:bN("H3.fontSize"),fontWeight:bN("H3.fontWeight"),lineHeight:bN("H3.lineHeight"),letterSpacing:bN("H3.letterSpacing"),fontVariant:bN("H3.fontVariant")},H4:{fontFamily:bN("H4.fontFamily"),fontSize:bN("H4.fontSize"),fontWeight:bN("H4.fontWeight"),lineHeight:bN("H4.lineHeight"),letterSpacing:bN("H4.letterSpacing"),fontVariant:bN("H4.fontVariant")},H5:{fontFamily:bN("H5.fontFamily"),fontSize:bN("H5.fontSize"),fontWeight:bN("H5.fontWeight"),lineHeight:bN("H5.lineHeight"),letterSpacing:bN("H5.letterSpacing"),fontVariant:bN("H5.fontVariant")},H6:{fontFamily:bN("H6.fontFamily"),fontSize:bN("H6.fontSize"),fontWeight:bN("H6.fontWeight"),lineHeight:bN("H6.lineHeight"),letterSpacing:bN("H6.letterSpacing"),fontVariant:bN("H6.fontVariant")},Body:{fontFamily:bN("Body.fontFamily"),fontSize:bN("Body.fontSize"),fontWeight:bN("Body.fontWeight"),lineHeight:bN("Body.lineHeight"),letterSpacing:bN("Body.letterSpacing"),fontVariant:bN("Body.fontVariant")},BodySmall:{fontFamily:bN("BodySmall.fontFamily"),fontSize:bN("BodySmall.fontSize"),fontWeight:bN("BodySmall.fontWeight"),lineHeight:bN("BodySmall.lineHeight"),letterSpacing:bN("BodySmall.letterSpacing"),fontVariant:bN("BodySmall.fontVariant")},XSmall:{fontFamily:bN("XSmall.fontFamily"),fontSize:bN("XSmall.fontSize"),fontWeight:bN("XSmall.fontWeight"),lineHeight:bN("XSmall.lineHeight"),letterSpacing:bN("XSmall.letterSpacing"),fontVariant:bN("XSmall.fontVariant")}},yN=[gN.OpenSans,gN.PlusJakartaSans],xN=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},wN=(e,t)=>n=>{var r,i,o,a,s;const l=null===(i=(r=vN[e]).fontFamily)||void 0===i?void 0:i.call(r,n),c=null===(a=(o=vN[e]).fontWeight)||void 0===a?void 0:a.call(o,n),d=yN.find((e=>Object.values(e).includes(l)));return d?I`
                font-family: ${xN(d,t)||xN(d,c)||l};
                font-weight: normal !important;
            `:I`
            font-family: ${l};
            font-weight: ${null!==(s=$N(t)||c)&&void 0!==s?s:"normal"};
        `},$N=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},CN=e=>{if(e)return I`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},SN={getFontFamily:wN,getTextStyle:(e,t,n=!1)=>r=>{var i,o,a;const s=vN[e],l=(null===(i=s.fontSize)||void 0===i?void 0:i.call(s,r))||1;return I`
            ${wN(e,t)}
            font-size: ${l}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${(null===(o=s.letterSpacing)||void 0===o?void 0:o.call(s,r))||0}rem !important;
            font-variant: ${(null===(a=s.fontVariant)||void 0===a?void 0:a.call(s,r))||"normal"};
            ${I`
                margin-bottom: ${l*(n?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?I`
            display: block;
            ${CN(n)}
        `:e?I`
            display: inline;
        `:I`
            display: block;
            ${CN(n)}
        `};var kN;!function(e){e.D1=_.h1`
        ${e=>I`
                ${SN.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=_.h1`
        ${e=>I`
                ${SN.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=_.h1`
        ${e=>I`
                ${SN.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=_.h1`
        ${e=>I`
                ${SN.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=_.h1`
        ${e=>I`
                ${SN.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=_.h1`
        ${e=>I`
                ${SN.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=_.h2`
        ${e=>I`
                ${SN.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=_.h3`
        ${e=>I`
                ${SN.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=_.h4`
        ${e=>I`
                ${SN.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=_.h5`
        ${e=>I`
                ${SN.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=_.h6`
        ${e=>I`
                ${SN.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=_.p`
        ${e=>I`
                ${SN.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=_.p`
        ${e=>I`
                ${SN.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=_.span`
        ${e=>I`
                ${SN.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${hN.Neutral[1]};
                ${SN.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>EN(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>EN(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(kN||(kN={}));const DN=_.a`
    ${e=>I`
            ${SN.getTextStyle(e.textStyle,e.weight)}
            color: ${hN.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${hN.Secondary};

                svg {
                    color: ${hN.Secondary};
                }
            }
        `}
`,TN=_(B)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,EN=n=>{var{external:r=!1,children:i}=n,o=ut(n,["external","children"]);return t(DN,Object.assign({},o,{children:[i,r&&e(TN,{})]}))},ON={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},FN=_.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?I`
            visibility: visible;
            opacity: 1;
            transition: ${ON.Base};
            z-index: 50;
        `:I`
            visibility: hidden;
            opacity: 0;
            transition: ${ON.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return I`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return I`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return I`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return I`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return I`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return I`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${Of.MaxWidth.mobileL} {
        display: none;
    }
`,_N=_(tm)`
    padding: 3.5rem 1.25rem 2.5rem;
`,IN=_.div`
    position: relative;
    width: fit-content;
`,MN=_.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,AN=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,BN=r=>{var{children:i,visible:s,onMobileClose:l}=r,c=ut(r,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,g]=a("none"),p=o(null),f=Hd.useMediaQuery({maxWidth:Tf.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",bg(b,300)),()=>{window.removeEventListener("resize",bg(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,g(t))},x=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},w=()=>"string"==typeof i?e(kN.BodySmall,{children:i}):i;return t(n,{children:[e(FN,Object.assign({ref:p,"data-testid":d,$visible:s,$offset:h},c,{children:e(Wh,{children:w()})})),f&&e(Qf,{show:null!=s&&s,onOverlayClick:v,children:e(_N,{onClose:v,children:e(AN,{children:w()})})})]})},jN=(n,r)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=ut(i,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",h=c,[g,p]=a(!1),f=o(null),m=Hd.useMediaQuery({maxWidth:Tf.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[g]);const b=e=>{f&&!f.current.contains(e.target)&&(g&&p(!1),l&&l())};return t(IN,{id:"popover-hoc-wrapper",ref:f,children:[e(MN,{id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(p(!g),!g&&s&&s(),g&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||p(!0)},onMouseLeave:()=>{"hover"===d&&g&&!m&&p(!1)},"aria-label":"popover-button",children:e(n,Object.assign({},h))}),e(BN,{visible:g,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{p(!1)},children:r.content})]})},zN=_.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${bc.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${bc.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,RN=_.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,PN=_.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?dc["bg-primary-subtle"]:dc["bg-disabled"])(e)};\n        `}};
`,LN=_(_c.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?dc["text-primary"]:dc["text-disabled"])(e)};`}};
`,NN=_(_c.BodyMD)`
    overflow-wrap: anywhere;
    color: ${dc.text};
`,HN=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var WN=function(e){return function(t){return null==e?void 0:e[t]}},YN=WN({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),VN=dl,UN=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,XN=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var KN=function(e){return(e=VN(e))&&e.replace(UN,YN).replace(XN,"")},qN=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var GN=function(e){return e.match(qN)||[]},ZN=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var QN=function(e){return ZN.test(e)},JN="\\ud800-\\udfff",eH="\\u2700-\\u27bf",tH="a-z\\xdf-\\xf6\\xf8-\\xff",nH="A-Z\\xc0-\\xd6\\xd8-\\xde",rH="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",iH="["+rH+"]",oH="\\d+",aH="["+eH+"]",sH="["+tH+"]",lH="[^"+JN+rH+oH+eH+tH+nH+"]",cH="(?:\\ud83c[\\udde6-\\uddff]){2}",dH="[\\ud800-\\udbff][\\udc00-\\udfff]",uH="["+nH+"]",hH="(?:"+sH+"|"+lH+")",gH="(?:"+uH+"|"+lH+")",pH="(?:['’](?:d|ll|m|re|s|t|ve))?",fH="(?:['’](?:D|LL|M|RE|S|T|VE))?",mH="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",bH="[\\ufe0e\\ufe0f]?",vH=bH+mH+("(?:\\u200d(?:"+["[^"+JN+"]",cH,dH].join("|")+")"+bH+mH+")*"),yH="(?:"+[aH,cH,dH].join("|")+")"+vH,xH=RegExp([uH+"?"+sH+"+"+pH+"(?="+[iH,uH,"$"].join("|")+")",gH+"+"+fH+"(?="+[iH,uH+hH,"$"].join("|")+")",uH+"?"+hH+"+"+pH,uH+"+"+fH,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",oH,yH].join("|"),"g");var wH=GN,$H=QN,CH=dl,SH=function(e){return e.match(xH)||[]};var kH=EI,DH=KN,TH=function(e,t,n){return e=CH(e),void 0===(t=n?void 0:t)?$H(e)?SH(e):wH(e):e.match(t)||[]},EH=RegExp("['’]","g");var OH=Uo(function(e){return function(t){return kH(TH(DH(t).replace(EH,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const FH=n=>{var{steps:r,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=n,l=ut(n,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=A(),d=mc["lg-max"]({theme:c}),u=Hd.useMediaQuery({maxWidth:d}),h=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},g=(e,t)=>OH(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return t(zN,Object.assign({},l,{children:[e(RN,{children:r.map(((t,n)=>{const r=n<=i;return e(HN,{id:g(n,i),children:e(PN,{highlighted:r})},n)}))}),e(RN,{children:u?t(HN,{id:g(i,i),children:[t(NN,{weight:"semibold",id:`${g(i,i)}-counter`,children:["Step ",i+1," of ",r.length]}),e(NN,{weight:"regular",id:`${g(i,i)}-title`,children:h(r[i])})]},i):r.map(((t,n)=>{const r=n<=i,o=n===i,a=o?"bold":"regular";return e(HN,{id:`${g(n,i)}-title`,children:e(LN,{highlighted:r,weight:a,"aria-current":o,children:h(t)})},n)}))})]}))},_H=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?I`
                height: 1.5rem;
                width: 1.5rem;
            `:I`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,IH=_(ae)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?dc["icon-disabled-subtle"](e):dc["icon-subtle"](e)};
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
`,MH=_(se)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?dc["icon-selected-disabled"](e):dc["icon-selected"](e)};

    transition: ${hc["duration-150"]} ${hc["ease-default"]};
`,AH=_.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${IH}, &:hover + ${MH} {
        color: ${e=>!e.disabled&&dc["icon-hover"](e)};
    }
`,BH=n=>{var{className:r,checked:i,disabled:o,displaySize:a="default",onChange:s}=n,l=ut(n,["className","checked","disabled","displaySize","onChange"]);return t(_H,{$selected:i,$disabled:o,className:r,$displaySize:a,"data-testid":"radio-button",children:[e(AH,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==s||s(e)},checked:i,disabled:o},l)),i?e(MH,{"data-testid":"radio-checked",$disabled:o}):e(IH,{"data-testid":"radio-unchecked",$disabled:o})]})},jH=_.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,zH=_.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};
    background-color: ${dc["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,RH=_(zH)`
    height: 100vh;
    left: 0;
    top: 0;
    ${bc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,PH=_(zH)`
    display: none;
    visibility: hidden;
    ${bc.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,LH=_(Yo.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${dc["bg-primary-subtlest"]};
    border-top-right-radius: ${fc.md};
    border-bottom-right-radius: ${fc.md};
    border: ${gc["width-010"]} ${gc.solid} ${dc.border};

    ${e=>e.$showDrawer?I`
                  box-shadow: 0 0 4px
                      rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
              `:I`
                  border: 0;
                  padding: 0;
              `};
`,NH=_.li`
    width: 100%;
`,HH=_.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${fc.md};
    color: ${dc["icon-primary"]};
    transition: ${hc["duration-250"]} ${hc["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,WH=_(_c.BodyXS)`
    ${Tc(2)}
    margin-top: 0.25rem;
    transition: ${hc["duration-250"]} ${hc["ease-default"]};
`,YH=_(hp)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${HH} {
            background-color: ${dc["bg-hover"]};
        }

        ${WH} {
            ${uc["body-xs-semibold"]}
            color: ${dc["text-hover"]};
        }
    }

    ${e=>e.$highlight&&I`
            ${HH} {
                background-color: ${dc["bg-hover"]};
            }

            ${WH} {
                ${uc["body-xs-semibold"]}
                color: ${dc["text-selected"]};
            }
        `}
`,VH=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),UH=_.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,XH=_.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${dc.border};
`,KH=_(Yo.li)``,qH=_(hp)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${fc.md};

    ${uc["body-md-semibold"]}
    color: ${dc.text};

    ${e=>e.$noChildren?I`
                  :hover,
                  :focus {
                      background: ${dc["bg-hover"]};
                      color: ${dc["text-hover"]};
                  }
              `:I`
                  :hover,
                  :focus {
                      background: ${dc["bg-hover-strong"]};
                  }
              `}
`,GH=_(Yo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,ZH=_(F)`
    flex-shrink: 0;
    color: ${dc.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${hc["duration-150"]} ${hc["ease-default"]};
`,QH=_.span`
    ${Tc(2)}
    text-align: left;
`,JH=_(Yo.ul)``,eW=_.li``,tW=_(hp)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${fc.md};

    ${uc["body-md-regular"]}
    color: ${dc.text};
    ${Tc(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${dc["bg-hover"]};
        color: ${dc["text-hover"]};
    }
`,nW=Object.assign((n=>{var{fixed:r=!0,children:i}=n,s=ut(n,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,g]=a(void 0),[p,f]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:p,setCurrentItem:d,setSelectedItem:g,setPreviouslySelectedItemId:f})),[c,h,p,d,g,f]),x=Do({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return Tu("click",(e=>{l.current&&!l.current.contains(e.target)&&(g({itemId:p||(h?h.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{v(!!(null==h?void 0:h.content)||!!(null==c?void 0:c.content))}),[c,h]),e(VH.Provider,{value:y,children:t(jH,Object.assign({$fixed:r},s,{ref:l,onMouseLeave:()=>{d(void 0)},children:[e(RH,{children:i}),e(LH,{style:x,$showDrawer:b,"data-testid":"sidenav-drawer",children:c&&c.content||h&&h.content}),e(PH,{})]}))})}),{Group:n=>{var{separator:r,children:i}=n,o=ut(n,["separator","children"]);return t(UH,Object.assign({},o,{children:[i,r&&e(XH,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:o,onClick:a}=n,s=ut(n,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:g,setPreviouslySelectedItemId:p,setSelectedItem:m}=f(VH);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(NH,{children:t(YH,Object.assign({type:"button",onClick:()=>{p((()=>{if(r&&h)return d||h.itemId})()),g({itemId:l,content:r}),m({itemId:l,content:r}),a&&!r&&a(l)},onMouseEnter:()=>{g({itemId:l,content:r})}},s,{$highlight:!!h&&h.itemId===l||!!c&&c.itemId===l,children:[e(HH,{children:i}),e(WH,{children:o})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:o,children:s}=n,l=ut(n,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:g,setSelectedItem:p,setPreviouslySelectedItemId:m,setCurrentItem:b}=f(VH),v=Do({from:{opacity:0},to:{opacity:1}}),y=un(),x=y.ref,w=Do({height:s&&c?y.height:0});return t(KH,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v,children:[t(qH,{type:"button",onClick:()=>{s?d(!c):(p({itemId:null==g?void 0:g.itemId,content:void 0}),b(void 0),m(void 0),o&&o(r))},$highlight:u&&c,$noChildren:!s,children:[e(QH,{children:i}),s&&e(ZH,{"aria-hidden":!0,$expanded:c})]}),e(GH,{style:w,children:e(JH,{ref:x,children:s})})]}))},DrawerSubitem:t=>{var{id:n,title:r,onClick:i}=t,o=ut(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f(VH);return e(eW,Object.assign({},o,{children:e(tW,{type:"button",onClick:()=>{i&&i(n),s({itemId:null==a?void 0:a.itemId,content:void 0}),l(void 0),c(void 0)},children:r})}))}}),rW=M`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,iW=_.div`
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
    background: ${dc.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${fc.md};
    ${e=>{if(e.$isAnimated)return I`
                animation: ${rW} 0.3s;
            `}}
`,oW=_.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,aW=_(Dc)`
    padding: 0;
`,sW=_(je)`
    color: ${dc.icon};
    height: 1.25rem;
    width: 1.25rem;
`,lW=_.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,cW=_.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${bc.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,dW=_.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,uW=_.div`
    max-width: 30%;
`,hW=_(hd.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${uc["body-xs-semibold"]}
    }
`,gW=_(_c.BodySM)`
    font-weight: ${uc.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${bc.MaxWidth.xs} {
        ${uc["body-xs-bold"]}
    }
`,pW=_(_c.BodyXS)`
    overflow-wrap: anywhere;
`,fW=_.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,mW=I`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,bW=_(Re)`
    ${mW}
`,vW=_(ct)`
    ${mW}
`,yW=_(ze)`
    ${mW}
`,xW="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",wW="smart-app-banner";const $W=i.forwardRef((function(r,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=xW,animated:u=!1,onDismiss:h,onClick:g}=r,{title:p,message:f,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==g||g()};return e(n,{children:a&&t(iW,{ref:i,$isAnimated:u,$offset:c,className:o,children:[e(oW,{onClick:h,id:`${wW}-dismiss`,"data-testid":`${wW}-dismiss-container`,children:e(aW,{"aria-label":"Dismiss",children:e(sW,{})})}),t(lW,{onClick:y,id:`${wW}-proceed`,"data-testid":`${wW}-proceed-container`,children:[e(dW,{src:d,alt:"lifesg-app-icon"}),t(cW,{children:[e(gW,{children:p}),e(pW,{children:f}),(()=>{if(isNaN(v)||v<0)return;const t=[],n=v-Math.floor(v)>=.4;for(let n=0;n<Math.floor(v);n++)t.push(e(bW,{},`star${n}`));if(n&&t.push(e(vW,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e(yW,{},`emptystar${r}`))}return e(fW,{children:t.slice(0,5)})})()]}),e(uW,{children:e(hW,{type:"button",onClick:y,"aria-label":b,children:m})})]})]})})})),CW=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),SW=_.div`
    position: relative;
    width: 100%;
`,kW=_.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,I`
            ${bc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,DW=_.div`
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
`,TW=_(Dc)`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?I`
                    justify-content: left;
                    padding-left: ${pc["spacing-8"]};
                `:I`
                    justify-content: right;
                    padding-right: ${pc["spacing-8"]};
                `}

        svg {
            color: ${dc.icon};
        }
    }
`,EW=g(((r,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=r,g=ut(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[p,f]=a("left"===c||"both"===c),[m,v]=a("right"===c||"both"===c),y=o(null),x=o(null),w=Cg($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(v(!1),f(!1))}function C(){$(),h&&h({content:x.current,wrapper:y.current})}un({onResize:C,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){C()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(SW,Object.assign({ref:y},g,{children:[e(DW,{ref:x,children:s}),(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[p&&e(kW,{$backgroundColor:r.left,$position:"left",$showIndicator:d,"data-id":"left-fade",children:d&&e(TW,{$position:"left","data-id":"left-fade-indicator-button",children:e(be,{})})}),m&&e(kW,{$backgroundColor:r.right,$position:"right",$showIndicator:d,"data-id":"right-fade",children:d&&e(TW,{$position:"right","data-id":"right-fade-indicator-button",children:e(me,{})})})]})})()]}))})),OW=_.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return I`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${gc["width-040"]} ${gc.solid}
                        ${dc.border};
                }
            `}}
`,FW=_.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${gc["width-040"]} ${gc.solid} ${dc.border};

    ${e=>{if(e.$width)return I`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return I`
                border-color: ${dc["border-primary"]};
            `}}

    ${bc.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,_W=_.button`
    position: relative;
    padding: ${pc["spacing-16"]} ${pc["spacing-16"]}
        ${pc["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,IW=_(_c.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${dc["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return I`
                opacity: 0;
            `}}
`,MW=_(_c.BodyBL)`
    color: ${dc["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return I`
                opacity: 1;
            `}}
`,AW=_(EW)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${pc["spacing-4"]};
    }
`,BW=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=f(CW),d=A(),u=mc["md-max"]({theme:d}),h=Hd.useMediaQuery({maxWidth:u}),g=mc["lg-max"]({theme:d}),p=o(null),m=e=>t=>{t.preventDefault(),n||s(e),i&&i(c[e].title,e)},b=e=>h&&e.length>20?`${e.substring(0,20)}...`:e;return e(AW,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=g&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":r,children:e(OW,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((n,i)=>{const o=l===i;return e(FW,{role:"none",$active:o,ref:o?p:null,$width:n.width,children:t(_W,{role:"tab",type:"button","aria-selected":o,onClick:m(i),"data-testid":`${r}-link-${i}`,children:[e(IW,{$active:o,weight:"regular",children:b(n.title)}),e(MW,{$active:o,weight:"semibold","aria-hidden":"true",children:b(n.title)})]})},i)}))})})},jW=_.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,zW=Object.assign((n=>{var{children:r,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=n,h=ut(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[g,p]=a(i||o),f=m((()=>S.toArray(r).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[r]);u((()=>{"number"==typeof i&&p(i)}),[i]);return e(jW,Object.assign({"data-testid":l},h,{children:t(CW.Provider,{value:{tabLinks:f,currentActiveIndex:g,setCurrentActiveIndex:p},children:[e(BW,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),S.toArray(r).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]})}))}),{Item:t=>{var{index:n,children:r}=t,i=ut(t,["index","children"]);const{currentActiveIndex:o}=f(CW);return o===n?e("div",Object.assign({role:"tabpanel"},i,{children:r})):null}}),RW=_.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${uc["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,i,o;if("solid"===e.$type)switch(r=dc["text-inverse"],e.$color){case"grey":t=dc["bg-inverse-subtler"],i=dc["bg-inverse-hover"];break;case"green":t=dc["bg-success-strong"],i=dc["bg-success-strong-hover"];break;case"yellow":t=dc["bg-warning-strong"],i=dc["bg-warning-strong-hover"];break;case"red":t=dc["bg-error-strong"],i=dc["bg-error-strong-hover"];break;case"blue":t=dc["bg-info-strong"],i=dc["bg-info-strong-hover"];break;default:t=dc["bg-inverse"],i=dc["bg-inverse-hover"]}else switch(e.$color){case"grey":t=dc["bg-strong"],n=dc["border-strong"],r=dc["text-subtle"],i=dc["bg-hover-neutral-strong"];break;case"green":t=dc["bg-success"],n=dc["border-success"],r=dc["text-success"],i=dc["bg-success-hover"];break;case"yellow":t=dc["bg-warning"],n=dc["border-warning"],r=dc["text-warning"],i=dc["bg-warning-hover"];break;case"red":t=dc["bg-error"],n=dc["border-error"],r=dc["text-error"],i=dc["bg-error-hover"];break;case"blue":t=dc["bg-info"],n=dc["border-info"],r=dc["text-info"],i=dc["bg-info-hover"];break;default:t=dc.bg,n=dc.border,r=dc.text,i=dc["bg-hover-neutral"]}return I`
            background: ${t};
            border: ${gc["width-010"]} ${gc.solid} ${n};
            color: ${r};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${bc.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return I`
                    ${uc["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,PW=_.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,LW=n=>{var{type:r,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=n,c=ut(n,["type","colorType","children","interactive","icon","iconPosition"]);return t(RW,Object.assign({as:a?"button":"div",$type:r,$color:i,$interactive:a},c,{children:["left"===l&&s,e(PW,{children:o}),"right"===l&&s]}))};var NW;iu.extend(au),function(e){e.formatHourlyDisplay=e=>iu(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>$u.getTimeDiffInMinutes(e,t)/15*(n/2)}(NW||(NW={}));const HW=1.25,WW=e=>"minified"===e?12:40,YW=e=>"minified"===e?12:40,VW=_.div`
    position: relative;
    display: flex;
    align-items: center;
`,UW=_(Dc)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${dc.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${dc.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?I`
                  right: 0;
              `:I`
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
`,XW=_(me)`
    width: 1rem;
    height: 1rem;
    color: ${dc["icon-primary"]};
`,KW=_(be)`
    font-size: 1rem;
    color: ${dc["icon-primary"]};
`,qW=_.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+YW(e)}px`};
`,GW=_.div`
    position: relative;
    white-space: nowrap;
    height: ${HW}rem;
`,ZW=_.div`
    display: flex;
    white-space: nowrap;
`,QW=_.div`
    display: inline-block;
    width: ${({$variant:e})=>`${WW(e)}px`};
    position: relative;
    border-left: ${gc["width-010"]} ${gc.solid}
        ${dc["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?HW:.625;break;case"minified":t=e.$isLongMarker?HW:0;break;default:t=0}return I`
            height: ${t}rem;
        `}}
`,JW=_(_c.BodyXS)`
    color: ${dc["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,eY=_.div`
    ${e=>"vertical"===e.$type?I`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:I`
                position: absolute;
                height: ${YW(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&I`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||dc["bg-strongest"]} 0px,
                ${e.$bgColor2||dc["bg-strongest"]} 10px,
                ${e.$bgColor||dc["bg-stronger"]} 10px,
                ${e.$bgColor||dc["bg-stronger"]} 20px
            );
        `}
`,tY=_.div`
    position: absolute;
    top: ${HW}rem;
    height: ${({$variant:e})=>`${YW(e)}px`};
    z-index: 1;
    border-right: ${gc["width-010"]} ${gc.solid}
        ${dc["border-stronger"]};
`,nY=_(_c.BodyXS)`
    color: ${e=>e.$color||dc.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,rY=({"data-testid":r,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:g,styleAttributes:p})=>{const f=o(null),[m,b]=a(0),[v,y]=a(0),x=WW(s),w=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{f.current&&b(f.current.scrollLeft)},C=e=>{f.current&&f.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};un({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,k=e=>{if(r)return`${r}-${e}`},D=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return t(VW,{className:i,children:[t(qW,{"data-testid":r,ref:f,$variant:s,children:[e(GW,{"data-testid":k("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],n=iu(l,"HH:mm"),r=iu(c,"HH:mm"),i=n.hour()%2==0;for(let o=n;o.isBefore(r);o=o.add(30,"minute")){const n=D(o,i,s);t.push(e(QW,{$isLongMarker:n,$variant:s,children:n&&e(JW,{weight:"semibold",children:NW.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),t(ZW,{"data-testid":k("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!p)return;const{backgroundColor:r,backgroundColor2:i,styleType:o="default"}=p,a=NW.calculateWidth(l,c,x),d=!!g&&"default"===s;return t(n,{children:[e(tY,{$variant:s}),e(eY,{"data-testid":k("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:r,$bgColor2:i,$clickable:d,onClick:d?g:void 0},"default-timeslot")]})})(),d.map((n=>{const{id:r,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=n,{color:g,styleType:p="default",backgroundColor:f,backgroundColor2:m}=u,b=NW.calculateWidth(i,o,x),v=NW.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(tY,{$variant:s,style:{left:`${v}px`}}),e(eY,{"data-testid":k(`${r}-timeslot`),$width:b,$left:v,$styleType:p,$variant:s,$bgColor:f,$bgColor2:m,$clickable:y,onClick:()=>y&&h(n),children:a&&"default"===s&&e(nY,{$slotWidth:b,$color:g,weight:"semibold",children:S(b)?"...":a})}),c!==o&&e(tY,{$variant:s,style:{left:`${v+b}px`}})]},r)}))]})]}),e(n,{children:m>0&&e(UW,{"data-testid":k("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("left")},children:e(KW,{})})}),m+v<NW.calculateWidth(l,c,x)?e(UW,{"data-testid":k("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("right")},children:e(XW,{})}):e(n,{})]})},iY=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${pc["spacing-8"]};
    flex: 1;
`,oY=_(_c.BodyXS)`
    ${e=>e.$disabled&&I`
            color: ${dc["text-disabled-subtlest"]};
        `}
`,aY=_.div`
    grid-column: 2 / -1;
    display: flex;
`,sY=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${pc["spacing-4"]};
`,lY=_(Yo.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,cY=_.div`
    display: flex;
    gap: ${pc["spacing-4"]};
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    overflow: hidden;
`,dY=_.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${pc["spacing-4"]};
    width: 1.375rem;
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,uY=_.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,hY=_.div`
    ${uc["body-xs-bold"]}
    color: ${dc["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${uc.Spec["body-size-sm"]};
    }
`,gY=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${pc["spacing-4"]};
`,pY=_.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${pc["spacing-8"]};
`,fY=_(hd.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${pc["spacing-8"]};
    }
`,mY=_(le)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};
`,bY=_(eY)`
    ${e=>{if("vertical"===e.$type)return I`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${fc.xs};
            `}}

    ${e=>e.$halfFill?I`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${dc["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||dc["bg-strongest"]} 0px,\n                            ${e.$bgColor2||dc["bg-strongest"]} 10px,\n                            ${e.$bgColor||dc["bg-stronger"]} 10px,\n                            ${e.$bgColor||dc["bg-stronger"]} 20px\n                        )`};
            `:I`
                background-color: ${e.$bgColor};
            `}
`;var vY=pa;var yY=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var o=e[r],a=t(o);if(null!=a&&(void 0===s?a==a&&!vY(a):n(a,s)))var s=a,l=o}return l};var xY=yY,wY=Ok,$Y=function(e,t){return e<t};var CY=Uo((function(e,t){return e&&e.length?xY(e,wY(t),$Y):void 0}));var SY=yY,kY=function(e,t){return e>t},DY=Ok;var TY=Uo((function(e,t){return e&&e.length?SY(e,DY(t),kY):void 0}));const EY=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:g=30,variant:p="flexible",enableSelection:f=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[C,S]=a(!1),[k,D]=a(),T=m((()=>mu.generateDaysForCurrentWeek(n)),[n]),E=Object.values(null!=h?h:{}).flat(),O=null!==(y=null!=c?c:null===(v=CY(E,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",F=null!==(w=null!=d?d:null===(x=TY(E,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",_=Math.ceil($u.getTimeDiffInMinutes(O,F)/g),{height:I=0,ref:M}=un(),A=u?I<u||C?I:u:I,B=Do({height:A}),j=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,n])=>{const r=function(e){const t=Array(_).fill({});return e.forEach((e=>{const n=Math.max(0,$u.getTimeDiffInMinutes(O,e.startTime)/g),r=Math.min(_,$u.getTimeDiffInMinutes(O,e.endTime)/g),i=Math.ceil(r)-Math.floor(n);switch(p){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let o=0;o<i;o++){const a=$u.addMinutesToTime(O,Math.floor(n+o)*g),s=$u.addMinutesToTime(a,g);let l;dI(t[Math.floor(n+o)])?0===o&&n%1!=0?l="top":o===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let o=0;switch(p){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return dI(t)&&dI(n)?e:[...e,t]}),[{}]);o<e.length;){if(dI(e[o])){const a=null!==(n=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:O,s=null!==(i=null===(r=e[o+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:F;if(a!==s){const t=$u.getTimeDiffInMinutes(a,s)/g;e[o]=Object.assign(Object.assign({},N(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)dI(e[o])?(e[o]=N(o),o++):o+=e[o].cellLength}return e.filter((e=>!dI(e)&&e.cellLength>0))}(r)})),e}return{}}),[h]),z=e=>{D(e)},R=()=>{D(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},L=e=>{var t;const n=mu.isWithinRange(e,s?iu(s):void 0,l?iu(l):void 0),i=null!==(t=r&&r.includes(e.format($)))&&void 0!==t&&t;return!n||i};function N(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:dc["bg-stronger"]},cellLength:t}}return t(sY,{children:[e(aY,{children:T.map(((t,n)=>{const r=(e=>{const t=e.format($),n=L(e),r={},o=f&&!n;n&&(r.disabled=!0),r.interactive=f?o:null;const a=o&&k&&e.isSame(k,"day"),s=[i].includes(t);return s&&a?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):s?(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"):a&&(r.labelType="hover",r.circleLeft="hover-subtle",r.circleRight="hover-subtle"),r})(t);return e(Eh,Object.assign({date:t,calendarDate:iu(i),onSelect:()=>{((e,t)=>{!t&&f&&o(e)})(t,!r.interactive)},onHover:z,onHoverEnd:R},r),`day-${n}`)}))}),e(aY,{children:T.map(((t,n)=>e(iY,{children:e(oY,{weight:"semibold",$disabled:L(t),children:iu(t).format("ddd")})},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=iu(O,"HH:mm").add(4*e*g,"minutes"),r=n.format("h"),i=n.format("mm"),o=n.format("a");let a=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(dY,{$height:A,children:Array(Math.ceil(_/4)).fill(void 0).map(((t,r)=>e(uY,{children:e(hY,{children:n(r)})},`time-${r}`)))})})(),e(lY,{style:B,children:e(cY,{ref:M,children:T.map(((t,n)=>{var r;const i=t.format($),o=null!==(r=j[i])&&void 0!==r?r:Array("flexible"===p?_:1).fill(void 0).map(((e,t)=>N(t,"fixed"===p?_:void 0)));return e(gY,{children:o.map((t=>{const{id:n,clickable:r=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e(bY,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===p?12*a+4*(a-1):12,onClick:()=>r&&((e,t)=>{b&&b(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))},`week-cell-${n.format($)}`)}),(()=>{if(u&&M.current&&!(I&&I<u))return e(pY,{children:t(fY,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P,children:[e(mY,{$isExpanded:C}),(C?"Hide":"Show")+" later times"]})})})()]})},OY=_.div`
    --header-bottom-spacing: 0.5rem;

    ${bc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,FY="YYYY-MM-DD",_Y=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=ut(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,C]=a(s),S=o(null),k=o(void 0);u((()=>{C(s)}),[s]);const D=e=>{const t=e.format(FY);C(t),i&&i(t)},T=(e,t)=>{y&&y(e,t)},E=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(FY),lastDayOfWeek:e.endOf("week").format(FY)},month:e.month()+1,year:e.year()};r(t)}};return e(OY,Object.assign({},w,{children:e(ph,{ref:S,dynamicHeight:!0,initialCalendarDate:$u.toDayjs($||x).endOf("week").format(FY),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&iu(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&iu(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"week")||E(e),k.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>iu(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>iu(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e(EY,{calendarDate:t,disabledDates:n,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:D,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:T}))(t)})}))},IY=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,MY=_.div`
    ${uc["body-xs-semibold"]}
    color:${dc.text};

    ${e=>e.$disabled&&I`
            color: ${dc["text-disabled-subtlest"]};
        `};
`,AY=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,BY=_.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,jY=_.div`
    ${uc["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${dc.text};
    span {
        display: block;
    }
`,zY=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;iu.extend(lu);const RY="YYYY-MM-DD",PY={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:dc["bg-stronger"],backgroundColor2:dc["bg-strongest"]}},LY=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=m((()=>mu.generateDaysForCurrentWeek(n)),[n]),[g,p]=a(),f=e=>{p(e)},b=()=>{p(void 0)},v=e=>{const t=e.format(RY),n=(e=>{const t=mu.isWithinRange(e,s?iu(s):void 0,l?iu(l):void 0),n=!!r&&r.includes(e.format(RY));return!t||n})(e),o=d&&!n,a=o&&g&&e.isSame(g,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return n&&(u.disabled=!0,u.labelType="unavailable"),c&&a?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):a&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return t(AY,{children:[h.map(((n,r)=>{const a=v(n);return t(IY,{children:[e(Eh,Object.assign({date:n,calendarDate:iu(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(n,!a.interactive)},onHover:f,onHoverEnd:b},a),`day-${r}`),e(MY,{$disabled:a.disabled,children:iu(n).format("ddd")})]},`week-day-${r}`)})),e(BY,{children:h.map(((n,r)=>{const i=n.format(RY),o=c&&(c[i]?c[i]:[PY]);return e(zY,{children:o&&o.map((n=>{const{id:r,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=n,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:g}=l;return e(eY,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,t)=>{null==u||u(e,t)})(i,n),children:t(jY,{style:{color:c},children:[e("span",{children:mu.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:mu.convertTo12HourFormat(a)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${n.format(RY)}`)]})},NY=_.div`
    --header-bottom-spacing: 0.5rem;

    ${bc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,HY="YYYY-MM-DD",WY=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:p,currentCalendarDate:f}=t,m=ut(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(null),x=o(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(HY);v(t),i&&i(t)},$=(e,t)=>{p&&p(e,t)},C=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(HY),lastDayOfWeek:e.endOf("week").format(HY)},month:e.month()+1,year:e.year()};r(t)}};return e(NY,Object.assign({},m,{children:e(ph,{ref:y,dynamicHeight:!0,initialCalendarDate:$u.toDayjs(b||f).endOf("week").format(HY),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&iu(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&iu(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||C(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>iu(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>iu(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e(LY,{calendarDate:t,disabledDates:n,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:g,onSlotClick:$})})}))},YY=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return I`
                    border: 4px solid ${dc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return I`
                    border: 4px solid ${dc["icon-subtle"]};
                `;case"disabled":return I`
                    background-color: ${dc["icon-disabled-subtle"]};
                `;case"completed":return I`
                    background-color: ${dc["icon-success"]};
                    svg {
                        color: ${dc["icon-inverse"]};
                    }
                `;case"error":return I`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${dc["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,VY=_.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return I`
                    background-color: ${dc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return I`
                    background-color: ${dc["icon-subtle"]};
                `;case"disabled":return I`
                    background-color: ${dc["icon-disabled-subtle"]};
                `;case"completed":return I`
                    background-color: ${dc["icon-success"]};
                `;case"error":return I`
                    margin-left: -0.15rem;
                    background-color: ${dc["icon-error"]};
                `}}}
`,UY=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,XY=_.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${bc.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${bc.MaxWidth.sm} {
        grid-column: span 8;
    }
`,KY=_(_c.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${bc.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,qY=_(_c.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,GY=_.div`
    display: flex;

    :last-of-type ${VY} {
        margin-bottom: 0;
    }
`,ZY=_.div`
    margin-bottom: 2rem;
    width: 100%;
`,QY=_.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,JY=_(aN)`
    padding: 0.125rem 0.5rem;
`,eV=({items:r,className:i,id:o,title:a,startCol:s,colSpan:l,"data-base-indicator-testid":c,"data-testid":d="timeline"})=>{const u=t=>"string"==typeof t?e(_c.BodyMD,{className:"timeline-item-content-text",children:t}):e(n,{children:t}),h=t=>"string"==typeof t?e(qY,{weight:"semibold",className:"timeline-item-title",children:t}):e(n,{children:t}),g=e=>e.slice(0,2).map(((e,t)=>k(JY,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e(de,{});case"error":return e(ce,{});default:return null}};return t(XY,{className:i,id:o,"data-testid":d,$startCol:s,$colSpan:l,children:[e(KY,{"data-testid":"timeline-title",weight:"bold",children:a}),r.map(((n,r)=>{const{title:i,content:o,statuses:a,variant:s}=n,l=s||(0===r?"current":"upcoming-active");return t(GY,{children:[t(UY,{children:[e(YY,{"data-testid":c?`circleindicator${r+1}_div_${c}`:"circleindicator",$variant:l,children:p(l)}),e(VY,{$variant:l})]}),t(ZY,{className:"timeline-item-content",children:[h(i),a&&e(QY,{children:g(a)}),u(o)]})]},`timeline-item-${r}`)}))]})},tV=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],nV=15,rV=252,iV=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],oV=M`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,aV=_(cf)`
    color: ${dc.icon};
    svg {
        ${e=>{if(e.$loading)return I`
                    animation: ${oV} 4s linear infinite;
                `}}
    }
`,sV=_.div`
    display: flex;
    padding-bottom: ${pc["spacing-16"]};
    justify-content: space-between;
    gap: ${pc["spacing-8"]};
`,lV=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${pc["spacing-8"]};
`,cV=_(_c.BodySM)`
    color: ${dc["text-subtler"]};
`,dV=_(gf)`
    width: 400px;
`,uV=r=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=r,h=ut(r,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const g=()=>{a.current&&(a.current.scrollTop=0)},p=()=>{d&&(g(),d())};return t(sV,{children:[e(dV,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{g(),c(e)},onLeftArrowClick:e=>{g(),l(e)},onCalendarDateSelect:u})),void 0===s?e(n,{}):t(lV,{children:[t(cV,{"data-testid":"timetable-records-results",weight:"semibold",children:[s," results found"]}),d&&e(aV,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:p,$loading:o,children:e(ue,{})})]})]})},hV=_.div`
    display: flex;
    width: 100%;
`,gV=_.div`
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
    ${e=>{if(e.$isOnTheHour)return I`
                box-shadow: inset -0.5px 0px ${dc["border-primary"]};
            `}}
`,pV=_.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,fV=_.div`
    width: 2px;
    height: 100%;
`,mV=_.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${fc.sm};
    box-sizing: border-box;
    padding: ${pc["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:n,$altColor:r})=>{switch(e){case"blocked":return I`
                    background: repeating-linear-gradient(
                        135deg,
                        ${dc["bg-stronger"]} 0px 6px,
                        ${dc["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;case"filled":return I`
                    background: ${t};
                    &:hover {
                        cursor: ${n?"pointer":"default"};
                    }
                `;case"disabled":return I`
                    background: ${dc["bg-disabled"]};
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;case"pending":return I`
                    background: repeating-linear-gradient(
                        135deg,
                        ${t} 0px 6px,
                        ${r} 6px 12px
                    );
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;default:return I`
                    &:hover {
                        background-color: ${n?dc["bg-hover-subtle"]:""};
                        cursor: ${n?"pointer":"default"};
                    }
                `}}}
`,bV=_(_c.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,vV=_(_c.BodyXS)`
    color: ${dc["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,yV=({containerRef:t,children:n,customPopover:r})=>{if(!r)return n;const i={position:"bottom-start",rootNode:t,customOffset:r.offset,children:n,trigger:r.trigger,delay:r.delay,popoverContent:r.content};return e(Cw,Object.assign({},i))},xV=i.memo((({id:n,startTime:r,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,roundedStartTime:h=r,roundedEndTime:g=i,onClick:p})=>{const f=0===iu(g,"HH:mm").get("minutes"),m=$u.getTimeDiffInMinutes(h,g)/nV*l-2,b=!!p||u&&"click"===u.trigger;return e(yV,{containerRef:d,customPopover:u,children:e(gV,{"data-testid":"block-container",$isOnTheHour:f,children:t(pV,{children:[t(mV,{$width:m,$status:s,$mainColor:c.mainColor,$altColor:c.alternateColor,$isClickable:b,onClick:e=>{p&&p({id:n,startTime:r,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)},children:[o&&e(bV,{weight:"semibold",children:o}),a&&e(vV,{weight:"bold",children:a})]}),e(fV,{})]})},"block-container-key")})})),wV=({id:t,timetableMinTime:n,timetableMaxTime:r,rowMinTime:i,rowMaxTime:o,rowCells:a,rowBarColor:s,intervalWidth:l,containerRef:c,outOfRangeCellPopover:d})=>{const u=i?wg.roundToNearestInterval(i,nV):n,h=o?wg.roundToNearestInterval(o,nV,!0):r,g=m((()=>{const e=[];u&&iu(n,"HH:mm").isBefore(iu(u,"HH:mm"))&&e.push({id:t,startTime:n,endTime:u,status:"blocked",customPopover:d});const s=[...a].sort(((e,t)=>{const n=iu(e.startTime,"HH:mm"),r=iu(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));let l;return s.forEach(((n,r)=>{var i;const{startTime:o,endTime:s}=n;let c=wg.roundToNearestInterval(o,nV);l&&iu(c,"HH:mm").isBefore(iu(l,"HH:mm"))&&(c=wg.roundToNearestInterval(o,nV,!0));const d=wg.roundToNearestInterval(s,nV,!0);e.push(Object.assign(Object.assign({},n),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(i=a[r+1])||void 0===i?void 0:i.startTime)||h,g=iu(wg.roundToNearestInterval(u,nV),"HH:mm");let p=iu(d,"HH:mm");for(;p.isBefore(g);)if(f=g,p.get("hour")!=f.get("hour")){const n=p.add(1,"hour").startOf("hour");e.push({id:t,startTime:p.format("HH:mm").toString(),endTime:n.format("HH:mm").toString(),status:"disabled"}),p=n}else e.push({id:t,startTime:p.format("HH:mm").toString(),endTime:g.format("HH:mm").toString(),status:"disabled"}),p=g;var f;l=p.format("HH:mm").toString()})),h&&iu(r,"HH:mm").isAfter(iu(h,"HH:mm"))&&e.push({id:t,startTime:h,endTime:r,status:"blocked",customPopover:d}),0!==s.length||i||o||e.push({id:t,startTime:n,endTime:r,status:"blocked",customPopover:d}),e}),[u,n,a,h,r,i,o,t,d]);return e(hV,{"data-testid":"timetable-row",children:g.map(((t,n)=>e(xV,Object.assign({},t,{intervalWidth:l,rowBarColor:s,containerRef:c}),`${n}-row-cell-key`)))})},$V=_.div``,CV=_.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${rV}px auto;
`,SV=_.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${rV}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return I`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,kV=_.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${dc.bg};
    width: ${rV}px;
    z-index: 2;
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?I`
                box-shadow: 2px 2px 8px
                    rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:I`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,DV=_.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${dc.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,TV=_.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${dc.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return I`
                box-shadow: 2px 2px 8px
                    rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,EV=_.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${pc["spacing-4"]};
`,OV=_(_c.BodySM)`
    color: ${dc["text-subtler"]};
`,FV=_.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,_V=_.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${dc.bg};
    width: ${rV}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${pc["spacing-16"]} 0 ${pc["spacing-32"]};
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
    border-left: ${gc["width-010"]} ${gc.solid} ${dc.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?I`
                box-shadow: 2px 2px 8px
                    rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
            `:I`
                box-shadow: inset -0.5px 0px ${dc["border-primary"]};
            `};
`,IV=_(_c.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${dc["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,MV=_(_c.BodyXS)`
    display: inline-flex;
    gap: ${pc["spacing-4"]};
    align-items: center;
    color: ${dc["text-subtler"]};
    ${e=>{if(!e.$show)return I`
                display: none;
            `}}
`,AV=_(jd)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,BV=_(ip)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${pc["spacing-72"]} 0;
`,jV=_.div`
    display: flex;
    border-bottom: ${gc["width-010"]} ${gc.solid} ${dc.border};
`,zV=_.div`
    border-right: ${gc["width-005"]} ${gc.solid}
        ${dc["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${pc["spacing-20"]} ${pc["spacing-12"]};
`,RV=M`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,PV=_.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${dc.Primitive["neutral-95"]} 8%,
        ${dc.Primitive["neutral-100"]} 18%,
        ${dc.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${RV} 1.5s forwards infinite;
`,LV=_(Cw)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,NV=r=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=r,C=ut(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=C["data-testid"]||"timetable",D=wg.roundToNearestInterval(d,60),T=wg.roundToNearestInterval(h,60,!0),E=wg.generateHourlyIntervals(D,T),O=0===f||VD.isEmpty(l),F=O||l.length===f,_=o(null),I=o(null),[M,A]=a(!1),[B,j]=a(!1),[z,R]=a(0),[P,L]=a(!1);u((()=>{const e=VD.throttle((()=>{if(_.current&&(A(_.current.scrollLeft>0),j(_.current.scrollTop>0)),P||!_.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=_.current;Math.ceil(e+t)>=n-1&&!F&&v&&!c&&(L(!0),v())}),100),t=_.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[F,P,c,v]),u((()=>{L(!1)}),[l]);un({onResize:()=>{if(_.current){const e=Math.ceil(60*E.length/nV),t=(_.current.clientWidth-rV)/e;R(t>21?t:21)}},targetRef:_,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=tV.length;return()=>{const n=tV[e],r=iV[e];return e=(e+1)%t,{mainColor:n,alternateColor:r}}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(_V,{$isScrolled:M,children:e(PV,{})})},Y=()=>{if(!c&&P)return e(jV,{"data-testid":"lazy-loader",children:E.map(((t,n)=>e(zV,{$width:4*z,children:e(PV,{})},`lazy-load-cell-${n}`)))})};return t($V,O?Object.assign({},C,{"data-testid":S,children:[e(uV,{selectedDate:i,loading:c||P,tableContainerRef:_,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(CV,{className:"empty-container",children:c?e(AV,{$isEmptyContent:O}):e(BV,{type:"no-item-found",description:s})})]}):Object.assign({},C,{"data-testid":S,children:[e(uV,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:_,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(SV,{"data-id":"timetable-container","data-testid":"timetable-container",ref:_,$loading:c,$allRecordsLoaded:F||!v,children:[e(kV,{$isScrolledY:B,$isScrolledX:M}),e(DV,{$numOfRows:l.length,$isScrolled:M,"data-testid":"row-header-column-id",children:t(n,{children:[l.map(((n,r)=>e(H,{wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const n={position:"bottom-start",rootNode:_,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return k(LV,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(n,e),children:t(_V,{$isScrolled:M,children:[e(IV,{$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`,children:n.name}),e(MV,{weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`,children:n.subtitle})]},`${n.id}-row-header`)},r))),W()]})}),e(TV,{$numOfColumns:E.length,$isScrolled:B,children:E.map((t=>e(EV,{"data-testid":`${t}-column`,children:e(OV,{weight:"semibold",children:t})},`${t}-column-key`)))}),c?e(AV,{$isEmptyContent:O}):t(FV,{"data-testid":"content-container-id",ref:I,$numOfRows:l.length,children:[l.map(((t,n)=>e(wV,Object.assign({timetableMinTime:D,timetableMaxTime:T,rowBarColor:N(),intervalWidth:z,containerRef:I},t),`${n}-row-bar`))),Y()]})]})]}))},HV=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:dc[t.Background],Border:dc[t.Border],Text:dc[t.Text],Icon:dc[t.Icon]}},WV=_(Yo.div)`
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

    ${bc.MaxWidth.lg} {
        left: 0;
    }

    ${e=>I`
            background: ${HV(e).Background};
            border: 1px solid ${HV(e).Border};
            color: ${HV(e).Text};
        `};
`,YV=_.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${bc.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,VV=_.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>I`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${HV(e).Icon};
            }
        `};
`,UV=_.div`
    display: flex;
    flex-direction: column;
`,XV=_(_c.HeadingXS)`
    display: flex;

    ${e=>I`
            color: ${HV(e).Text};
        `}
`,KV=_.div`
    ${e=>I`
            p {
                color: ${HV(e).Text};
            }
        `}
`,qV=_(hd.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${bc.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,GV=_(Dc)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>I`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${HV(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${bc.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,ZV=4e3,QV=n=>{var{type:r="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=ZV,onDismiss:d,fixed:h=!0,actionButton:g}=n,p=ut(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,m]=a(!1),b=A(),v=mc["lg-max"]({theme:b}),y=Hd.useMediaQuery({maxWidth:v});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const x=Do({opacity:f?1:0,transform:f?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:Tr.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(WV,Object.assign({style:x,$type:r,$fixed:h},p,{children:[t(YV,{children:[t(VV,{$type:r,children:[(()=>{switch(r){case"success":return e(pe,{});case"warning":return e(ge,{});case"error":return e(ce,{});case"info":return e(he,{});default:return null}})(),t(UV,{children:[o&&(i.isValidElement(o)?o:e(XV,{$type:r,weight:"semibold",children:o})),s&&e(KV,{$type:r,children:i.isValidElement(s)?s:e(o?_c.BodyMD:_c.BodyBL,{children:s})})]})]}),g&&e(qV,{styleType:"light",onClick:g.onClick,children:g.label})]}),e(GV,{$type:r,onClick:()=>{m(!1)},children:e(J,{})})]}))},JV=_.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return I`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Of.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return I`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Of.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return I`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${Of.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return I`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${Of.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?I`
            visibility: "visible";
            opacity: 1;
            transition: ${ON.Base};
            z-index: 2;
        `:I`
            visibility: "hidden";
            opacity: 0;
            transition: ${ON.Base};
            z-index: -1;
        `}
`,eU=_(Wh)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,tU=_.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return I`
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
                        border-color: ${hN.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return I`
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
                        border-color: transparent ${hN.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return I`
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
                            ${hN.Neutral[8]};
                    }
                `;case"bottom":return I`
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
                            ${hN.Neutral[8]} transparent;
                    }
                `}}}
`,nU=_.div`
    position: relative;
`,rU=n=>{var{visible:r,position:i="top",children:s}=n,l=ut(n,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),g=o(null);u((()=>(f(),window.addEventListener("resize",bg(p,300)),()=>{window.removeEventListener("resize",bg(p,300))})),[]);const p=()=>{f()},f=()=>{if(g.current){const e=g.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(JV,Object.assign({position:d,"data-testid":c,visible:r,ref:g},l,{children:[e(eU,{children:"string"==typeof s?e(kN.BodySmall,{children:s}):s}),e(tU,{position:d})]}))},iU=(n,r)=>i=>{const{tooltipVisible:o,position:a}=i,s=ut(i,["tooltipVisible","position"]);return t(nU,{children:[e(n,Object.assign({},s)),e(rU,{visible:o,position:a,children:r.content})]})},oU=I`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${bc.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,aU=_(ij.Content)`
    background: ${({$background:e})=>e?dc["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,sU=_(_c.HeadingSM)`
    margin-bottom: 1rem;
    ${oU}
`,lU=_(_c.BodyBL)`
    margin-bottom: 2rem;
    ${oU}
`,cU=_.div`
    ${oU}
`,dU=_.ul`
    ${oU}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${bc.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${bc.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,uU=i.forwardRef(((t,n)=>{var{stretch:r}=t,i=ut(t,["stretch"]);return e(dU,Object.assign({ref:n,$stretch:r},i))})),hU=_.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return I`
                    grid-column: auto / span 4;
                `;case"full":return I`
                    grid-column: auto / span 8;
                `}}}

    ${bc.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,gU=_.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${dc["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${uc.Spec["body-size-baseline"]};
        height: ${uc.Spec["body-size-baseline"]};
    }
`,pU=_.button`
    ${uc["body-baseline-regular"]}
    color: ${dc.text};
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
`,fU=_.span`
    color: ${dc["text-disabled"]};
`,mU=_(qc)`
    margin-right: 0.5rem;
    color: ${dc["text-disabled"]};
`,bU=_(We)`
    color: ${dc["icon-warning"]};
    margin-right: 0.5rem;
    height: ${uc.Spec["body-size-baseline"]};
    width: ${uc.Spec["body-size-baseline"]};
`,vU=_.span`
    color: ${dc["text-warning"]};
`,yU=_.span`
    ${uc["body-baseline-semibold"]}
    color: ${dc.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,xU=_(Dd)`
    margin-top: 0.5rem;
`,wU=({label:r,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:g,disableMaskUnmask:p,alert:f,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=a(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},C=()=>"string"!=typeof i?i:"masked"===x?ku.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:g,maskTransformer:m}):i,S=()=>{switch(l){case"fail":return t(n,{children:[e(bU,{}),e(vU,{children:"Error"}),e(yU,{children:"Try again?"})]});case"loading":return t(n,{children:[e(mU,{}),e(fU,{children:"Retrieving..."})]});default:return t(n,{children:[C(),e(gU,{children:"masked"===x?e(Ne,{"data-testid":"masked-icon"}):e(He,{"data-testid":"unmasked-icon"})})]})}};return t(hU,{$widthStyle:o,children:[e(Mw,{children:r}),"string"!=typeof i?i:x?p?e(_c.BodyBL,{children:C()}):e(pU,{"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:S()}):e(_c.BodyBL,{children:i}),f&&e(xU,Object.assign({sizeType:"small"},f))]})},$U=Object.assign((r=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:g,onTryAgain:p}=r,f=ut(r,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{g&&g(e)},v=e=>()=>{p&&p(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,n)=>e(wU,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),n)));return e(dU,{$stretch:u,children:t})}return null};return e(aU,Object.assign({$background:d},f,{type:"grid",children:c||t(n,{children:[o&&e(sU,{weight:"semibold",$stretch:u,children:o}),a&&e(lU,{$stretch:u,children:a}),s&&e(cU,{"data-id":"top-section",$stretch:u,children:s}),y(),l&&e(cU,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:uU,Item:wU}),CU={collections:{base:{InputBoxShadow:I`
        inset 0 0 4px 0px ${hN.Shadow.Accent}
    `,InputErrorBoxShadow:I`
        inset 0 0 4px 0px ${hN.Shadow.Red}
    `,ElevationBoxShadow:I`
      0px 2px 8px ${hN.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:I`
        inset 0 0 3px 0px ${hN.Shadow.Accent}
    `,InputErrorBoxShadow:I`
        inset 0 0 3px 0px ${hN.Shadow.Red}
    `,ElevationBoxShadow:I`
      0px 2px 8px ${hN.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},SU=e=>t=>{var n,r;const i=(null===(n=t.theme)||void 0===n?void 0:n._v2)||t.theme,o=lN(CU,null==i?void 0:i[cN.designTokenScheme]);return(null===(r=i.options)||void 0===r?void 0:r.designToken)?sN(o,e,i.options.designToken):sN(o,e)},kU={InputBoxShadow:SU("InputBoxShadow"),InputErrorBoxShadow:SU("InputErrorBoxShadow"),ElevationBoxShadow:SU("ElevationBoxShadow"),Table:{Header:SU("Table.Header"),Cell:{Primary:SU("Table.Cell.Primary"),Secondary:SU("Table.Cell.Secondary"),Selected:SU("Table.Cell.Selected"),Hover:SU("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:SU("Button.Danger.BackgroundColor"),Hover:SU("Button.Danger.Hover"),Primary:SU("Button.Danger.Primary"),Border:SU("Button.Danger.Border")}}},DU=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=ut(t,["children","data-testid","type","stretch"]);return e(TU,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),TU=_.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?I`
                padding: 0 3rem;
            `:I`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Of.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Of.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Of.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return I`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Of.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Of.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return I`
                    display: flex;
                    flex-direction: column;
                `;default:return I`
                    display: flex;
                `}}}
`,EU=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=ut(t,["children","data-testid","stretch"]);return e(OU,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),OU=_.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?I`
                ${Of.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:I`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,FU=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=ut(t,["children","data-testid","className","type","stretch"]);return e(EU,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(DU,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:r})}))})),_U={Section:EU,Container:DU,Content:FU,ColDiv:If};var IU;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(IU||(IU={}));const MU=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,AU=_.ol`
    ${e=>MU(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Of.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>SN.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${hN.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return I`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return I`
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
`,BU=_.ul`
    ${e=>MU(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>SN.getTextStyle(e.size,"regular")}
        color: ${hN.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,jU={Ul:t=>{var{size:n="Body",children:r}=t,i=ut(t,["size","children"]);return e(BU,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=ut(t,["size","children"]);return e(AU,Object.assign({size:n},i,{children:r}))}},zU={[cN.colorScheme]:"base",[cN.textStyleScheme]:"base",[cN.designTokenScheme]:"base",[cN.resourceScheme]:"base"},RU={[cN.colorScheme]:"bookingsg",[cN.textStyleScheme]:"base",[cN.designTokenScheme]:"base",[cN.resourceScheme]:"bookingsg"},PU={[cN.colorScheme]:"rbs",[cN.textStyleScheme]:"base",[cN.designTokenScheme]:"rbs",[cN.resourceScheme]:"rbs"},LU={[cN.colorScheme]:"mylegacy",[cN.textStyleScheme]:"base",[cN.designTokenScheme]:"base",[cN.resourceScheme]:"mylegacy"},NU={[cN.colorScheme]:"ccube",[cN.textStyleScheme]:"base",[cN.designTokenScheme]:"base",[cN.resourceScheme]:"ccube"},HU={[cN.colorScheme]:"oneservice",[cN.textStyleScheme]:"oneservice",[cN.designTokenScheme]:"base",[cN.resourceScheme]:"base"};export{UD as $,bd as A,nu as B,dc as C,Ip as D,Cm as E,Pm as F,qz as G,c$ as H,cf as I,Zz as J,f$ as K,Ed as L,FD as M,CI as N,DI as O,TI as P,ZI as Q,r$ as R,xm as S,Pd as T,QI as U,oM as V,uM as W,ij as X,hR as Y,pR as Z,ht as _,wm as a,kN as a$,bR as a0,yR as a1,nm as a2,mP as a3,bP as a4,fP as a5,EP as a6,_P as a7,zL as a8,HL as a9,yc as aA,xc as aB,wc as aC,$c as aD,Cc as aE,Sc as aF,lA as aG,rY as aH,_Y as aI,WY as aJ,eV as aK,dA as aL,NV as aM,QV as aN,NM as aO,rU as aP,iU as aQ,_c as aR,$U as aS,bA as aT,hN as aU,kU as aV,_U as aW,Of as aX,Ff as aY,SN as aZ,vN as a_,Lf as aa,nN as ab,YI as ac,aN as ad,jN as ae,BN as af,ww as ag,Tw as ah,Cw as ai,XI as aj,FH as ak,BH as al,iM as am,nW as an,$W as ao,zW as ap,LW as aq,kM as ar,uc as as,hc as at,gc as au,pc as av,fc as aw,mc as ax,bc as ay,vc as az,Dd as b,IU as b0,jU as b1,zU as b2,RU as b3,PU as b4,LU as b5,NU as b6,HU as b7,cN as b8,ON as b9,Vo as c,Id as d,jd as e,Lu as f,Xo as g,hd as h,Yu as i,Lh as j,Wh as k,Qh as l,Wg as m,sf as n,gf as o,Sf as p,jf as q,Kf as r,ip as s,Vg as t,ub as u,lB as v,WB as w,mj as x,yA as y,Kz as z};
//# sourceMappingURL=index.68764c09.js.map
